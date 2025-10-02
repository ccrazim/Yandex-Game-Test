(function(){
  if (!window.YaGames || typeof window.YaGames.init !== "function") return;

  var FORCE_MOCK = !!window.__ForceMockYandexAds;
  var ADV_TIMEOUT_MS = 200;

  var realInit = window.YaGames.init;

  function normCallbacks(opts){
    var c = (opts && (opts.callbacks || opts)) || {};
    return {
      onOpen:     typeof c.onOpen     === "function" ? c.onOpen     : function(){},
      onClose:    typeof c.onClose    === "function" ? c.onClose    : function(){},
      onRewarded: typeof c.onRewarded === "function" ? c.onRewarded : function(){},
      onError:    typeof c.onError    === "function" ? c.onError    : function(){},
      onOffline:  typeof c.onOffline  === "function" ? c.onOffline  : function(){}
    };
  }

  function insideYandexContainer() {
    if (window === window.top) return false;
    try {
      if (window.YandexGamesSDKEnvironment) return true;
    } catch(_) {}
    return false;
  }

  function wrapAdv(adv){
    var real = adv || {};
    function withTimeout(callReal, mockCb){
      return function(opts){
        var cb = normCallbacks(opts);
        var finished = false;
        var timer = setTimeout(function(){
          if (finished) return;
          finished = true;
          try { mockCb(cb); } catch(_){}
        }, ADV_TIMEOUT_MS);
        try {
          var p = callReal(cb, opts);
          if (!p || typeof p.then !== "function") return;
          return p.then(function(res){
            clearTimeout(timer); finished = true; return res;
          }).catch(function(err){
            clearTimeout(timer); finished = true;
            cb.onError(err); cb.onClose(false);
            return { __mock:true, error:String(err||"") };
          });
        } catch (err) {
          clearTimeout(timer); finished = true;
          cb.onError(err); cb.onClose(false);
          return Promise.resolve({ __mock:true, error:String(err||"") });
        }
      };
    }

    var safe = Object.create(real);

    safe.showFullscreenAdv = withTimeout(
      function(cb, opts){
        if (!real.showFullscreenAdv || FORCE_MOCK) throw new Error("no real fullscreen");
        return real.showFullscreenAdv(opts);
      },
      function(cb){ cb.onOpen(); cb.onOffline(); cb.onClose(true); }
    );

    safe.showRewardedVideo = withTimeout(
      function(cb, opts){
        if (!real.showRewardedVideo || FORCE_MOCK) throw new Error("no real rewarded");
        return real.showRewardedVideo(opts);
      },
      function(cb){ cb.onOpen(); cb.onRewarded(); cb.onClose(true); }
    );

    safe.showBannerAdv = function(opts){
      var cb = normCallbacks(opts);
      if (real.showBannerAdv && !FORCE_MOCK) return real.showBannerAdv(opts);
      cb.onOpen(); cb.onClose(true);
      return Promise.resolve({ shown:true, visible:false, __mock:true });
    };

    safe.hideBannerAdv = function(){
      if (real.hideBannerAdv && !FORCE_MOCK) return real.hideBannerAdv();
      return Promise.resolve({ hidden:true, visible:false, __mock:true });
    };

    safe.getAdBlockEnabled = function(){
      if (real.getAdBlockEnabled && !FORCE_MOCK) return real.getAdBlockEnabled();
      return Promise.resolve(false);
    };

    safe.showVideoAdv     = safe.showRewardedVideo;
    safe.showInterstitial = safe.showFullscreenAdv;
    safe.showFullscreenAd = safe.showFullscreenAdv;
    safe.showRewardedAd   = safe.showRewardedVideo;
    safe.showRewarded     = safe.showRewardedVideo;

    return safe;
  }

  window.YaGames.init = function(opts){
    return realInit.call(this, opts).then(function(ysdk){
      if (!ysdk || ysdk.__advPatched) return ysdk;
      var useMock = FORCE_MOCK || !insideYandexContainer();
      ysdk.adv = wrapAdv(ysdk.adv || {});
      ysdk.__advPatched = true;

      if (!window.ysdk) window.ysdk = ysdk;

      if (!ysdk.deviceInfo) {
        Object.defineProperty(ysdk, "deviceInfo", { get: function(){
          return { isDesktop:()=>true, isMobile:()=>false, isTablet:()=>false, isTV:()=>false, get type(){ return "desktop"; } };
        }});
      }
      ysdk.environment = ysdk.environment || { i18n:{ lang:"en", tld:"ru" }, app:{ id:"mock-app-id" }, browser:{ lang:(navigator.language||"en").slice(0,2) }, payload:"" };

      return ysdk;
    });
  };
})();
