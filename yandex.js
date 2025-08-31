window.alert=()=>{};

(function () {
  const CFG = Object.assign({
    latencyMs: 50,
    logs: true,
    fails: {
      advFullscreen: false,
      advRewarded:   false,
      banner:        false,
      purchase:      false,
      catalog:       false,
      storage:       false,
      leaderboard:   false,
      auth:          false,
      feedback:      false,
      shortcuts:     false
    }
  }, (window.__YaMock || {}));

  const delay = (v, ms = CFG.latencyMs) => new Promise(r => setTimeout(() => r(v), ms));
  const fail  = (msg) => delay(Promise.reject(new Error("[YaGames mock] " + msg)));
  const callMaybe = (fn, ...args) => { try { typeof fn === "function" && fn(...args); } catch(_){} };

  const memStore = new Map();
  const leaderboards = new Map();
  const purchases = [];
  const flagsMap = {};
  const MOCK_UID   = "mock-player-id";
  const MOCK_NAME  = "Mock Player";
  const MOCK_PHOTO = "";

  const YG = { __mock: true, version: "debug-mock-v2" };

  Object.defineProperty(YG, "deviceInfo", {
    configurable: true,
    enumerable: true,
    get() {
      return {
        type: "unknown",
        isDesktop: () => true,
        isMobile:  () => false,
        isTablet:  () => false,
        isTV:      () => false
      };
    }
  });

  YG.environment = {
    i18nLang: "en",
    browserLang: (navigator.language || "en").slice(0,2),
    payload: "",
    app: { id: "mock-app-id" },
    onChange: () => {}
  };

  YG.environment.i18n = { lang: "en" };

  YG.i18n = {
    getLang: () => YG.environment.i18n.lang,
    setLang: (l) => { YG.environment.i18n.lang = String(l || "en"); return true; }
  };

  YG.getLanguage = async () => ({ lang: YG.environment.i18n.lang });

  const _events = {};
  YG.on = (evt, fn) => { (_events[evt]||(_events[evt]=[])).push(fn); return true; };
  YG.off = (evt, fn) => { const a=_events[evt]; if(!a) return false; const i=a.indexOf(fn); if(i>=0) a.splice(i,1); return i>=0; };
  const _emit = (evt, p) => { const a=_events[evt]||[]; for(let i=0;i<a.length;i++) try{a[i](p);}catch(_e){} };

  YG.init = async (opts = {}) => { YG.__initOptions = opts; _emit("init", opts); return delay(YG); };

  YG.auth = {
    openAuthDialog: async () => { if (CFG.fails.auth) return fail("Auth dialog failed"); return delay({ authorized: true, __mock: true }); }
  };

  let bannerVisible = false;
  const __canReview = async () => { if (CFG.fails.feedback) return fail("Feedback not available"); return delay({ value: false, reason: "unsupported", __mock: true }); };
  const __requestReview = async () => { if (CFG.fails.feedback) return fail("Feedback request failed"); return delay({ feedbackSent: false, __mock: true }); };

  YG.features = {
    Feedback: { canReview: __canReview, requestReview: __requestReview },
    Shortcuts: {
      canShowPrompt: async () => { if (CFG.fails.shortcuts) return fail("Shortcuts not available"); return delay({ canShow: false, __mock: true }); },
      showPrompt: async () => { if (CFG.fails.shortcuts) return fail("Shortcuts prompt failed"); return delay({ accepted: false, __mock: true }); }
    },
    Screen: {
      fullscreen: {
        isSupported: () => true,
        isFullscreen: () => !!document.fullscreenElement,
        request: async () => { const el=document.documentElement; if(el.requestFullscreen) await el.requestFullscreen(); return delay(true); },
        exit: async () => { if(document.exitFullscreen) await document.exitFullscreen(); return delay(true); }
      },
      orientation: { lock: async () => true, unlock: async () => true }
    }
  };

  YG.feedback = { canReview: __canReview, requestReview: __requestReview };

  YG.adv = {
    showFullscreenAdv: async (opts = {}) => {
      if (CFG.fails.advFullscreen) { callMaybe(opts.onError, "fullscreen", "mock-fail"); return fail("Fullscreen ad failed"); }
      callMaybe(opts.onOpen); callMaybe(opts.onOffline); await delay(null); callMaybe(opts.onClose, true);
      return { shown: true, __mock: true, opts };
    },
    showRewardedVideo: async (opts = {}) => {
      if (CFG.fails.advRewarded) { callMaybe(opts.onError, "rewarded", "mock-fail"); callMaybe(opts.onClose, false); return delay({ rewarded: false, __mock: true, reason: "mock-fail" }); }
      callMaybe(opts.onOpen); await delay(null); callMaybe(opts.onRewarded); callMaybe(opts.onClose, true);
      return { rewarded: true, __mock: true, opts };
    },
    showBannerAdv: async (opts = {}) => {
      if (CFG.fails.banner) { callMaybe(opts.onError, "banner", "mock-fail"); return fail("Banner failed"); }
      bannerVisible = true; callMaybe(opts.onOpen); await delay(null); callMaybe(opts.onClose, true);
      return { shown: true, visible: bannerVisible, __mock: true, opts };
    },
    hideBannerAdv: async () => { bannerVisible = false; return delay({ hidden: true, visible: bannerVisible, __mock: true }); },
    getAdBlockEnabled: async () => delay(false)
  };

  const paymentsObj = {
    createPurchase: async (params = {}) => { if (CFG.fails.purchase) return fail("Purchase failed"); const rec = { purchaseToken: "mock-token-" + (purchases.length+1), ...params, __mock: true }; purchases.push(rec); return delay(rec); },
    purchase: async (sku, data = {}) => { if (CFG.fails.purchase) return fail("Purchase failed"); const rec = { purchaseToken: "mock-token-" + (purchases.length+1), sku, ...data, __mock: true }; purchases.push(rec); return delay(rec); },
    getPurchases: async () => delay({ purchases: purchases.slice(), __mock: true }),
    consumePurchase: async ({ purchaseToken }) => { const idx = purchases.findIndex(p => p.purchaseToken === purchaseToken); if (idx >= 0) purchases.splice(idx, 1); return delay({ consumed: true, purchaseToken, __mock: true }); },
    getCatalog: async () => { if (CFG.fails.catalog) return fail("Catalog unavailable"); return delay({ products: [], __mock: true }); }
  };
  YG.getPayments = async () => delay(paymentsObj);
  YG.payments = paymentsObj;

  const storageObj = {
    getItem: async (k) => { if (CFG.fails.storage) return fail("Storage read failed"); return delay(memStore.has(k) ? memStore.get(k) : null); },
    setItem: async (k, v) => { if (CFG.fails.storage) return fail("Storage write failed"); memStore.set(k, v); return delay(true); },
    removeItem: async (k) => { memStore.delete(k); return delay(true); },
    clear: async () => { memStore.clear(); return delay(true); }
  };
  YG.getStorage = async () => delay(storageObj);
  YG.storage = storageObj;

  const lbObj = {
    setLeaderboardScore: async ({ leaderboardName, score, extraData }) => {
      if (CFG.fails.leaderboard) return fail("Leaderboard submit failed");
      const list = leaderboards.get(leaderboardName) || [];
      const existing = list.find(e => e.uid === MOCK_UID);
      if (existing) { existing.score = Math.max(existing.score, Number(score) || 0); existing.extraData = extraData; }
      else { list.push({ uid: MOCK_UID, name: MOCK_NAME, photo: MOCK_PHOTO, score: Number(score) || 0, extraData }); }
      list.sort((a,b) => b.score - a.score); leaderboards.set(leaderboardName, list);
      return delay({ ok: true, leaderboardName, score: Number(score)||0, extraData, __mock: true });
    },
    getLeaderboardEntries: async ({ leaderboardName, quantityTop = 10 } = {}) => {
      if (CFG.fails.leaderboard) return fail("Leaderboard read failed");
      const list = (leaderboards.get(leaderboardName) || []).slice();
      const entries = list.slice(0, quantityTop).map((e, i) => ({
        player: { getName: () => e.name, getPhoto: () => e.photo, getUniqueID: () => e.uid },
        score: e.score, rank: i + 1, extraData: e.extraData
      }));
      let userRank = list.findIndex(e => e.uid === MOCK_UID); if (userRank >= 0) userRank += 1;
      return delay({ entries, userRank, leaderboardName, __mock: true });
    },
    getLeaderboardDescription: async ({ leaderboardName }) => delay({ name: leaderboardName, description: "", __mock: true }),
    getLeaderboardPlayerEntry: async ({ leaderboardName }) => {
      const list = (leaderboards.get(leaderboardName) || []).slice();
      const idx = list.findIndex(e => e.uid === MOCK_UID); if (idx < 0) return delay(null);
      const e = list[idx];
      return delay({ player: { getName: () => e.name, getPhoto: () => e.photo, getUniqueID: () => e.uid }, score: e.score, rank: idx + 1, extraData: e.extraData, __mock: true });
    }
  };
  YG.getLeaderboards = async () => delay(lbObj);
  YG.leaderboards = lbObj;

  YG.clipboard = { writeText: async () => delay(true) };

  YG.flags = {
    _map: flagsMap,
    get: (k, fb) => Object.prototype.hasOwnProperty.call(flagsMap, k) ? flagsMap[k] : fb,
    has: (k) => Object.prototype.hasOwnProperty.call(flagsMap, k),
    toJSON: () => Object.assign({}, flagsMap),
    _set: (k, v) => (flagsMap[k]=v, true),
    _clear: () => { for (const k in flagsMap) delete flagsMap[k]; return true; }
  };
  YG.getFlags = async () => YG.flags;

  const player = {
    getUniqueID: () => MOCK_UID,
    getMode:     () => "lite",
    getName:     () => MOCK_NAME,
    getPhoto:    () => MOCK_PHOTO,
    getPayingStatus: async () => false,
    getPlatformID: () => "yandex",
    setData:     async () => delay(true),
    getData:     async () => delay({}),
    setStats:    async () => delay(true),
    getStats:    async () => delay({}),
    incrementStats: async () => delay(true),
    setLeaderboardScore: async ({ leaderboardName, score, extraData }) => YG.leaderboards.setLeaderboardScore({ leaderboardName, score, extraData })
  };
  YG.getPlayer = async () => delay(player);

  const __canShowPrompt = async () => {
  if (CFG.fails.shortcuts) return fail("Shortcuts not available");
  return delay({ canShow: false, __mock: true });
};
const __showPrompt = async () => {
  if (CFG.fails.shortcuts) return fail("Shortcuts prompt failed");
  return delay({ accepted: false, __mock: true });
};

YG.features = YG.features || {};
YG.features.Shortcuts = { canShowPrompt: __canShowPrompt, showPrompt: __showPrompt };

YG.shortcuts = { canShowPrompt: __canShowPrompt, showPrompt: __showPrompt };

  window.YaGames = YG;

  window.sdkLoaderWasInited = true;
  window.isSdkLoader = true;

  const YGL = { __mock: true, version: "debug-loader-v1" };
  let _sdkUrl = "";
  YGL.getStatus = () => ({ loaded: true, error: null, sdkUrl: _sdkUrl });
  YGL.setSDKUrl = (u) => { _sdkUrl = String(u || ""); return _sdkUrl; };
  YGL.getSDKUrl = () => _sdkUrl;
  YGL.load = async () => window.YaGames;
  YGL.init = async (opts = {}) => window.YaGames.init(opts);
  const _evL = {};
  YGL.on = (evt, fn) => { (_evL[evt]||(_evL[evt]=[])).push(fn); return true; };
  YGL.off = (evt, fn) => { const a=_evL[evt]; if(!a) return false; const i=a.indexOf(fn); if(i>=0) a.splice(i,1); return i>=0; };
  window.YaGamesLoader = YGL;

  if (CFG.logs) {
    console.warn("[YaGames mock] Active (debug). No network. Version:", YG.version);
    console.warn("[YaGamesLoader mock] Active (debug). No network. Version:", YGL.version);
  }
})();
