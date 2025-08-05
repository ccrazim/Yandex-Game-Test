var YaGames;
(() => {

try {
  if (typeof window !== 'undefined') {
    window.parent = window;
  }
} catch (e) {}


if (typeof window !== 'undefined' && typeof window.YandexGamesSDKEnvironment === 'undefined') {
  window.YandexGamesSDKEnvironment = {
    app: { id: "999999" },
    i18n: { lang: "en", tld: "com" },
    serverTime: Date.now(),
    serviceHostname: "local",
    serviceName: "local"
  };
}


// PATCH: STUB OUT parent communication for local/dev modding
if (typeof window !== 'undefined') {
  function noopPromise() { return Promise.resolve({}); }
  function noop() {}
  setTimeout(() => {
    try {
      if (window.YaGames && window.YaGames.l && window.YaGames.l.F) {
        const lF = window.YaGames.l.F;
        lF.hasParent = function() { return true; };
        lF.postToParent = noopPromise;
        lF.postCallback = noopPromise;
        lF.logError = noop;
      }
    } catch (e) {}
  }, 10);
}


    "use strict";
    var e = {
            282: (e, t, r) => {
                r.d(t, {
                    i: () => a
                });
                var n = r(503);
                const a = {
                    I18n: () => ({
                        type: n.tT,
                        action: n.X2.i18n
                    })
                }
            },
            179: (e, t, r) => {
                r.d(t, {
                    T: () => a
                });
                var n = r(503);
                const a = {
                    Commit: e => ({
                        action: "commit",
                        type: n.vA,
                        data: e
                    }),
                    Finish: e => ({
                        action: "finish",
                        type: n.vA,
                        data: e
                    }),
                    Init: e => ({
                        action: "init",
                        type: n.vA,
                        data: e
                    }),
                    Push: e => ({
                        action: "push",
                        type: n.vA,
                        data: e
                    }),
                    Transaction: e => ({
                        action: "transaction",
                        type: n.vA,
                        data: e
                    })
                }
            },
            7: (e, t, r) => {
                r.d(t, {
                    C: () => a
                });
                var n = r(503);
                const a = {
                    Keydown: e => ({
                        action: "keydown",
                        type: n.cV,
                        data: e
                    }),
                    Start: () => ({
                        action: "start",
                        type: n.cV
                    }),
                    Stop: () => ({
                        action: "stop",
                        type: n.cV
                    })
                }
            },
            159: (e, t, r) => {
                r.d(t, {
                    jG: () => a,
                    X$: () => i,
                    qs: () => U,
                    uQ: () => l,
                    sC: () => o,
                    Aw: () => u,
                    TT: () => G,
                    u8: () => h,
                    N3: () => y,
                    VT: () => _,
                    _X: () => F,
                    E0: () => I,
                    qf: () => $,
                    X0: () => V,
                    Bz: () => A,
                    OI: () => O,
                    Xk: () => N,
                    cp: () => K,
                    $J: () => k,
                    Rh: () => v,
                    S: () => b,
                    Qq: () => E,
                    jt: () => B,
                    sF: () => T,
                    Al: () => L,
                    Gd: () => D,
                    yH: () => X,
                    HT: () => x,
                    Uh: () => J,
                    Vo: () => Z,
                    ce: () => j,
                    $4: () => M,
                    TI: () => W,
                    Sd: () => H,
                    _W: () => ee,
                    Ry: () => R,
                    lW: () => re,
                    rS: () => ae,
                    Iq: () => ne,
                    Vw: () => Y,
                    XT: () => oe,
                    eU: () => ie
                });
                var n = r(503);
                const a = {
                        GetList: e => ({
                            action: "getList",
                            type: n.y0,
                            data: e
                        }),
                        GetProgress: e => ({
                            action: "getProgress",
                            type: n.y0,
                            data: e
                        }),
                        SetProgress: e => ({
                            action: "setProgress",
                            type: n.y0,
                            data: e
                        })
                    },
                    o = {
                        CheckAvailability: e => ({
                            type: "availability-methods",
                            action: "check-availability",
                            data: e
                        })
                    },
                    s = "adv-manager",
                    i = {
                        GetDisabledState: () => ({
                            type: s,
                            action: "get-disabled-state"
                        }),
                        AdvShowFullscreen: () => ({
                            type: s,
                            action: "adv-show-fullscreen",
                            timeout: 1e4
                        }),
                        AdvShowRewardedVideo: () => ({
                            type: s,
                            action: "adv-show-rewarded-video",
                            timeout: 1e4
                        }),
                        AdvShowStickyBanner: () => ({
                            type: s,
                            action: "adv-show-sticky-banner",
                            timeout: 3e3
                        }),
                        AdvHideStickyBanner: () => ({
                            type: s,
                            action: "adv-hide-sticky-banner",
                            timeout: 3e3
                        }),
                        AdvStatusStickyBanner: () => ({
                            type: s,
                            action: "adv-status-sticky-banner",
                            timeout: 3e3
                        })
                    },
                    c = "auth",
                    l = {
                        AuthDialogSuccess: e => ({
                            type: c,
                            action: "auth-dialog-success",
                            data: e
                        }),
                        AuthDialogCancel: e => ({
                            type: c,
                            action: "auth-dialog-cancel",
                            data: e
                        }),
                        AuthDialogOpen: () => ({
                            type: c,
                            action: "auth-dialog-open",
                            data: {
                                initializer: "auth-manager-public"
                            }
                        }),
                        HasAuth: () => ({
                            type: c,
                            action: "has-auth"
                        })
                    },
                    d = "bonuses",
                    u = {
                        Catalog: e => ({
                            type: d,
                            action: "catalog",
                            data: e
                        }),
                        Consume: e => ({
                            type: d,
                            action: "consume",
                            data: e
                        }),
                        PlayerBonuses: e => ({
                            type: d,
                            action: "player-bonuses",
                            data: e
                        })
                    },
                    h = {
                        WriteText: e => ({
                            type: "clipboard",
                            action: "write-text",
                            data: e
                        })
                    },
                    p = "document-events";
                var m, g = ((m = g || {}).Click = `click${n.ej}`, m.Dblclick = `dblclick${n.ej}`, m.Mouseup = `mouseup${n.ej}`, m.Pointerup = `pointerup${n.ej}`, m.Touchend = `touchend${n.ej}`, m);
                const y = {
                        ClickOnBody: () => ({
                            type: p,
                            action: g.Click
                        }),
                        DblclickOnBody: () => ({
                            type: p,
                            action: g.Dblclick
                        }),
                        MouseupOnBody: () => ({
                            type: p,
                            action: g.Mouseup
                        }),
                        PointerupOnBody: () => ({
                            type: p,
                            action: g.Pointerup
                        }),
                        TouchendOnBody: () => ({
                            type: p,
                            action: g.Touchend
                        })
                    },
                    f = "get-games",
                    v = {
                        All: e => ({
                            type: f,
                            action: "all",
                            data: e
                        }),
                        Game: e => ({
                            type: f,
                            action: "game",
                            data: e
                        })
                    },
                    w = "leaderboard",
                    b = {
                        Description: e => ({
                            type: w,
                            action: "description",
                            data: e
                        }),
                        Entries: e => ({
                            type: w,
                            action: "entries",
                            data: e
                        }),
                        PlayerEntry: e => ({
                            type: w,
                            action: "player-entry",
                            data: e
                        }),
                        Score: e => ({
                            type: w,
                            action: "score",
                            data: e
                        }),
                        Stat: e => ({
                            type: w,
                            action: "stat",
                            data: e
                        })
                    },
                    P = "local-storage",
                    E = {
                        GetAll: () => ({
                            type: P,
                            action: "get-all"
                        }),
                        Clear: () => ({
                            type: P,
                            action: "clear"
                        }),
                        Del: e => ({
                            type: P,
                            action: "del",
                            data: {
                                key: e
                            }
                        }),
                        Set: (e, t) => ({
                            type: P,
                            action: "set",
                            data: {
                                key: e,
                                value: t
                            }
                        }),
                        Backup: e => ({
                            type: P,
                            action: "backup",
                            data: e
                        })
                    },
                    S = "metrika",
                    T = {
                        ReachGoal: e => ({
                            type: S,
                            action: "reachGoal",
                            data: e
                        }),
                        Params: e => ({
                            type: S,
                            action: "params",
                            data: e
                        })
                    },
                    A = e => ({
                        type: "game-call-alert",
                        data: e
                    }),
                    O = (e, t) => ({
                        type: "game-measuring",
                        action: e,
                        data: t
                    }),
                    k = (e, t) => ({
                        action: e,
                        type: n.Tn,
                        data: t
                    }),
                    C = "feedback",
                    I = {
                        CanReview: () => ({
                            type: C,
                            action: "can-review"
                        }),
                        RequestReview: () => ({
                            type: C,
                            action: "request-review"
                        })
                    },
                    D = () => ({
                        type: "options",
                        action: "get"
                    }),
                    _ = () => ({
                        type: "environment",
                        action: "get",
                        params: {
                            withOptions: !0
                        }
                    }),
                    x = e => ({
                        type: "player",
                        action: "get",
                        data: e
                    }),
                    L = () => ({
                        type: "notifications",
                        action: "allow"
                    }),
                    R = e => ({
                        type: "foolproof-sdk-init",
                        data: e
                    }),
                    N = e => ({
                        type: "game-reporter",
                        action: "plugin_engine_data",
                        data: e
                    }),
                    F = e => ({
                        type: "error",
                        data: e
                    }),
                    G = e => ({
                        type: "csp",
                        action: "violation",
                        data: e
                    }),
                    $ = () => ({
                        type: "frame",
                        action: n.ur.IframeLoaded
                    }),
                    j = () => {
                        var e;
                        return {
                            type: "sdk-bundle-start",
                            data: {
                                time: Date.now(),
                                sdkVersion: "v2",
                                sdkBundle: null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.APP_VERSION,
                                isSdkLoader: Boolean(window.isSdkLoader)
                            }
                        }
                    },
                    M = e => ({
                        type: "sdk-debug-log",
                        data: e
                    }),
                    U = e => ({
                        type: "alert",
                        error: e
                    }),
                    B = () => ({
                        type: "longtask"
                    }),
                    V = () => ({
                        type: "longtask_frame_ready"
                    }),
                    Y = () => ({
                        type: "user-action"
                    }),
                    K = e => ({
                        type: "game-stats",
                        data: e
                    }),
                    H = () => ({
                        type: "sdk_initialization",
                        data: {
                            initialized: !0
                        }
                    }),
                    W = (e, t) => ({
                        type: n.Ul,
                        action: e,
                        data: t
                    }),
                    q = "payments",
                    X = {
                        GetCatalog: e => ({
                            type: q,
                            action: "get-catalog",
                            data: e
                        }),
                        GetEnv: () => ({
                            type: q,
                            action: "get-env"
                        }),
                        GetPurchases: e => ({
                            type: q,
                            action: "get-purchases",
                            data: e
                        }),
                        PurchaseStart: e => ({
                            type: q,
                            action: "purchase-start",
                            data: e
                        }),
                        PurchaseConsume: e => ({
                            type: q,
                            action: "purchase-consume",
                            data: e
                        }),
                        PurchaseDialogInit: () => ({
                            type: q,
                            action: "purchase-dialog-init"
                        }),
                        PurchaseDialogOpen: () => ({
                            type: q,
                            action: "purchase-dialog-open"
                        }),
                        PurchaseDialogShow: e => ({
                            type: q,
                            action: "purchase-dialog-show",
                            data: e
                        }),
                        PurchaseDialogError: e => ({
                            type: q,
                            action: "purchase-dialog-error",
                            data: e
                        }),
                        PurchaseDialogClose: () => ({
                            type: q,
                            action: "purchase-dialog-close"
                        }),
                        GetGamePurchaseEnabled: () => ({
                            type: q,
                            action: "get-game-purchase-enabled"
                        })
                    },
                    z = "player-info",
                    J = {
                        GetData: e => ({
                            type: z,
                            action: "get-data",
                            data: e
                        }),
                        IdsPerGame: e => ({
                            type: z,
                            action: "ids-per-game",
                            data: e
                        }),
                        IncrementStats: e => ({
                            type: z,
                            action: "increment-stats",
                            data: e
                        }),
                        SetData: e => ({
                            type: z,
                            action: "set-data",
                            data: e
                        }),
                        SetStats: e => ({
                            type: z,
                            action: "set-stats",
                            data: e
                        }),
                        Stats: e => ({
                            type: z,
                            action: "stats",
                            data: e
                        })
                    },
                    Q = "screen-manager",
                    Z = {
                        ExitFullscreen: () => ({
                            type: Q,
                            action: "exit-fullscreen"
                        }),
                        RequestFullscreen: () => ({
                            type: Q,
                            action: "request-fullscreen"
                        }),
                        ToggleFullscreen: () => ({
                            type: Q,
                            action: "toggle-fullscreen"
                        }),
                        GetState: () => ({
                            type: Q,
                            action: "get-state"
                        })
                    },
                    ee = {
                        ListenersChange: e => ({
                            type: "sdk-internal-event",
                            action: "listeners-change",
                            data: e
                        })
                    },
                    te = "shortcut-manager",
                    re = {
                        ShowPrompt: () => ({
                            type: te,
                            action: "show-prompt"
                        }),
                        CanShowPrompt: () => ({
                            type: te,
                            action: "can-show-prompt"
                        })
                    },
                    ne = e => ({
                        type: "sdk-stats",
                        data: e
                    }),
                    ae = e => ({
                        type: "telegram",
                        data: e
                    }),
                    oe = {
                        Fetch: e => ({
                            type: "varioqub",
                            action: "fetch",
                            data: e
                        })
                    },
                    se = "yaMetrikaCounter",
                    ie = {
                        ReachGoal: e => ({
                            type: se,
                            action: "reachGoal",
                            data: e
                        }),
                        Hit: e => ({
                            type: se,
                            action: "hit",
                            data: e
                        })
                    };
                r(282), r(7), r(179)
            },
            503: (e, t, r) => {
                r.d(t, {
                    y0: () => s,
                    tT: () => g,
                    ej: () => p,
                    X2: () => y,
                    VR: () => n,
                    BE: () => h,
                    ur: () => a,
                    q1: () => v,
                    Tn: () => d,
                    US: () => i,
                    vA: () => w,
                    cV: () => m,
                    Ul: () => f,
                    Hn: () => o
                });
                var n = (e => (e.AudioAPI = "AudioAPI", e.GameplayAPI = "GameplayAPI", e.GamesAPI = "GamesAPI", e.LoadingAPI = "LoadingAPI", e.PluginEngineDataReporterAPI = "PluginEngineDataReporterAPI", e))(n || {}),
                    a = (e => (e.GameInit = "loading_api_game_init", e.GameReady = "loading_api_game_ready", e.GameReadyForce = "loading_api_game_ready_force", e.IframeAdded = "loading_api_iframe_added", e.IframeError = "loading_api_iframe_resources_error", e.IframeLoaded = "loading_api_iframe_resources_loaded", e.ScriptInit = "loading_api_script_init", e.TTIReady = "loading_api_tti_ready", e))(a || {});
                const o = ["GameplayAPI", "LoadingAPI", "PluginEngineDataReporterAPI"],
                    s = "achv-manager",
                    i = "game_api";
                var c, l = ((c = l || {}).Pause = `${i}_pause`, c.Resume = `${i}_resume`, c);
                const d = "gameplay_api";
                var u, h = ((u = h || {}).Start = `${d}_start`, u.Stop = `${d}_stop`, u);
                const p = "-on-body",
                    m = "screen_recorder",
                    g = "debug-panel";
                var y = (e => (e.i18n = "i18n", e))(y || {});
                const f = "sdk-event";
                var v = (e => (e.ACCOUNT_SELECTION_DIALOG_CLOSED = "ACCOUNT_SELECTION_DIALOG_CLOSED", e.ACCOUNT_SELECTION_DIALOG_OPENED = "ACCOUNT_SELECTION_DIALOG_OPENED", e.BONUS_AWARDED = "BONUS_AWARDED", e.EXIT = "EXIT", e.HISTORY_BACK = "HISTORY_BACK", e))(v || {});
                const w = "multiplayer"
            },
            404: (e, t, r) => {
                r.d(t, {
                    T: () => c,
                    f: () => i
                });
                var n = r(292),
                    a = r(526),
                    o = r(617);

                function s(e, t, r) {
                    "YaGames" in window || console.warn("Don't use logSDKError or logSDKGameError outside SDK");
                    const n = (0, a.U)(e, t, r);
                    n && o.F.postToParent({
                        data: n,
                        type: "error"
                    }).catch(console.warn)
                }

                function i(e, t = {}) {
                    s("sdk", e, t), console.warn(e)
                }

                function c(e, t = {}) {
                    s("sdk-game", e, t), "warn" === t.level ? console.warn(e, n.X4) : console.error(e, n.X4)
                }
            },
            526: (e, t, r) => {
                r.d(t, {
                    U: () => m
                });
                var n = r(934),
                    a = Object.defineProperty,
                    o = Object.defineProperties,
                    s = Object.getOwnPropertyDescriptors,
                    i = Object.getOwnPropertySymbols,
                    c = Object.prototype.hasOwnProperty,
                    l = Object.prototype.propertyIsEnumerable,
                    d = (e, t, r) => t in e ? a(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: r
                    }) : e[t] = r,
                    u = (e, t) => {
                        for (var r in t || (t = {})) c.call(t, r) && d(e, r, t[r]);
                        if (i)
                            for (var r of i(t)) l.call(t, r) && d(e, r, t[r]);
                        return e
                    },
                    h = (e, t) => o(e, s(t));
                const p = [/Adv was delayed on/];

                function m(e, t, r) {
                    var a, o, s;
                    const i = function(e, t) {
                        var r, n, a, o;
                        const s = {
                            columnNumber: null != (r = e.columnNumber) ? r : -1,
                            fileName: e.fileName || "",
                            lineNumber: null != (n = e.lineNumber) ? n : -1,
                            name: e.name || "Error",
                            message: e.message || String(e),
                            stack: (null == (a = e.stack) ? void 0 : a.slice(0, 4e5)) || ""
                        };
                        return s.additional = h(u(u({}, e.additional), t.additional), {
                            version: parseInt((null == (o = window.YandexGamesSDKEnvironment) ? void 0 : o.APP_VERSION) || "0")
                        }), s
                    }(t, r);
                    return c = i.message, p.some((e => e.test(c))) ? null : (r.message && (i.message = r.message), r.prefix && (i.message = `${r.prefix} ${i.message}`), {
                        block: `ErrorCounter/common: ${e}`,
                        error: i,
                        level: null != (a = r.level) ? a : "error",
                        source: e,
                        sourceMethod: null != (o = r.sourceMethod) ? o : (0, n.Z)(i.stack),
                        type: null != (s = r.type) ? s : "error"
                    });
                    var c
                }
            },
            235: (e, t, r) => {
                r.d(t, {
                    o: () => a
                });
                var n = r(404);

                function a() {
                    var e, t;
                    if ("undefined" == typeof window) return "";
                    const r = (null == (t = null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.app) ? void 0 : t.id) || "";
                    return r || (0, n.f)(new Error("Can not get appId from environment")), r
                }
            },
            69: (e, t, r) => {
                r.d(t, {
                    Z: () => c
                });
                var n = r(159),
                    a = r(404),
                    o = r(235),
                    s = r(617);
                const i = Object.create(null),
                    c = {
                        gameSessionUID: "",
                        init() {},
                        sendOnceDeprecatedUsage(e) {
                            var t;
                            e in i || (i[e] = 1, this.params({
                                borrowParams: {
                                    sdkDeprecatedUsage: {
                                        key: e,
                                        appId: (0, o.o)()
                                    }
                                },
                                service: "undefined" == typeof window ? "unknown" : (null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.serviceName) || "unknown"
                            }))
                        },
                        params(e) {
                            s.F.hasParent() && s.F.postToParent(n.sF.Params(e)).catch((e => {
                                (0, a.f)(e)
                            }))
                        },
                        reachGoal(e, t, r) {
                            s.F.hasParent() && s.F.postToParent(n.sF.ReachGoal({
                                data: t,
                                goal: e,
                                params: r
                            })).catch((e => {
                                (0, a.f)(e)
                            }))
                        }
                    }
            },
            617: (e, t, r) => {
                r.d(t, {
                    F: () => c
                });
                const n = e => void 0 !== e ? String(e) : e;
                class a extends Error {
                    constructor(e, t, r) {
                        super(e), this.code = t, this.httpStatus = r
                    }
                }
                class o {
                    constructor() {
                        this.promises = {}, this.listeners = {}, this.callbacks = {}, this.addEventListener()
                    }
                    onExternalMessage(e, t) {
                        this._onMessage(this.listeners, e, t)
                    }
                    offExternalMessage(e, t) {
                        this._offMessage(this.listeners, e, t)
                    }
                    addEventListener() {
                        window.addEventListener("message", (e => {
                            this.checkExternalEvent(e) && this.handleEvent(e)
                        }))
                    }
                    deletePromise(e) {
                        this.clearPromiseWaitTimeout(e), delete this.promises[e]
                    }
                    clearPromiseWaitTimeout(e) {
                        const t = this.promises[e];
                        (null == t ? void 0 : t.timeoutId) && (window.clearTimeout(t.timeoutId), delete t.timeoutId)
                    }
                    getExternalCallback(e) {
                        const {
                            type: t,
                            action: r,
                            messageId: n,
                            payload: a
                        } = e.data || {};
                        return this.callbacks[n] || (this.callbacks[n] = (e = {}) => {
                            const o = {
                                type: e.type || t,
                                action: e.action || r,
                                originMessageId: n,
                                originPayload: a,
                                data: e.data || {}
                            };
                            ! function(e, t) {
                                t.error && (e.error = String(t.error.message) || null, e.errorJSON = JSON.stringify(t.error) || null)
                            }(o, e), this.postCallback(o), this.callbacks[n] = () => {}
                        }), this.callbacks[n]
                    }
                    handleEvent(e) {
                        const {
                            type: t,
                            action: r,
                            originMessageId: n,
                            originPayload: a,
                            data: o,
                            error: s,
                            errorJSON: i
                        } = e.data || {}, c = this.promises[n];
                        c && (this.deletePromise(n), void 0 === s ? c.resolve({
                            type: t,
                            action: r,
                            originPayload: a,
                            data: o
                        }) : c.reject(this.createErrorInstance(s, i)));
                        const l = this.getExternalCallback(e),
                            d = this.listeners[t] || [];
                        for (const t of d) try {
                            t(e, l)
                        } catch (e) {
                            this.logError({
                                prefix: "[Messaging]",
                                sourceMethod: "_handleEvent"
                            }, e)
                        }
                        return e
                    }
                    createErrorInstance(e, t) {
                        if (t) try {
                            const {
                                message: e,
                                code: r,
                                httpStatus: o
                            } = JSON.parse(t);
                            if (e) return new a(e, n(r), n(o))
                        } catch (e) {}
                        return new Error(e || "Undefined error message")
                    }
                    checkExternalEvent(e) {
                        var t;
                        return "YandexGamesSDK" === (null == (t = e.data) ? void 0 : t.source)
                    }
                    _offMessage(e, t, r) {
                        if ("string" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error('Wrong argument "types"');
                        for (const n of t) n in e && (e[n] = e[n].filter((e => e !== r)))
                    }
                    _onMessage(e, t, r) {
                        if ("string" == typeof t && (t = [t]), !Array.isArray(t)) throw new Error('Wrong argument "types"');
                        for (const n of t) n in e || (e[n] = []), e[n].push(r)
                    }
                    _post(e, t) {
                        const r = Date.now(),
                            n = `${r}-${Math.random()}`;
                        t = Object.assign({}, t, {
                            source: "YandexGamesSDK",
                            messageId: n
                        });
                        let a = e => {},
                            o = e => {};
                        const s = new Promise(((e, t) => {
                            a = e, o = t
                        }));
                        this.promises[n] = {
                            promise: s,
                            resolve: a,
                            reject: o,
                            time: r
                        };
                        try {
                            e.postMessage(function(e, t) {
                                if ("function" == typeof structuredClone) try {
                                    return structuredClone(e), e
                                } catch (r) {
                                    return t({
                                        block: "Utils",
                                        message: "Error structuredClone operation",
                                        additional: {
                                            error: r
                                        }
                                    }, r), e
                                }
                                return e
                            }(t, this.logError.bind(this)), "*")
                        } catch (e) {
                            return this.deletePromise(n), Promise.reject(e)
                        }
                        if ("timeout" in t) {
                            const {
                                timeout: e
                            } = t;
                            "number" == typeof e && e > 0 ? this.promises[n].timeoutId = window.setTimeout((() => {
                                this.deletePromise(n);
                                const e = new Error("Message rejected by timeout");
                                e.additional = {
                                    type: t.type,
                                    action: t.action
                                }, o(e)
                            }), e) : this.logError({
                                prefix: "[Messaging]",
                                sourceMethod: "_post",
                                additional: {
                                    type: t.type,
                                    action: t.action
                                }
                            }, new Error("Wrong timeout value"))
                        }
                        return s
                    }
                }
                var s = r(526);
                class i extends o {
                    constructor() {
                        if (i.instance) return i.instance;
                        super(), i.instance = this
                    }
                    get _parentTarget() {
                        return window.parent !== window ? window.parent : void 0
                    }
                    hasParent() {
                        return Boolean(this._parentTarget)
                    }
                    postToParent(e) {
                        const t = this._parentTarget;
                        return t ? this._post(t, e) : Promise.reject(new Error("No parent to post message"))
                    }
                    postCallback(e) {
                        const t = this._parentTarget;
                        return t ? this._post(t, e) : Promise.reject(new Error(`No child to post message: type = ${e.type}, action = ${e.action}`))
                    }
                    logError(e, t) {
                        const r = (0, s.U)("sdk", t, e);
                        r && this.postToParent({
                            data: r,
                            type: "error"
                        }).catch(console.warn)
                    }
                }
                const c = new i
            },
            292: (e, t, r) => {
                r.d(t, {
                    NA: () => a,
                    Uo: () => n,
                    X4: () => i,
                    _h: () => s,
                    f9: () => o
                });
                const n = 1e4;
                var a = (e => (e.CON = "CON", e.HOP = "HOP", e.RUB = "РУБ", e.TST = "TST", e.YAN = "YAN", e))(a || {}),
                    o = (e => (e.BIG = "big", e.ISLANDS_75 = "islands-75", e.ISLANDS_200 = "islands-200", e.ISLANDS_MIDDLE = "islands-middle", e.ISLANDS_RETINA_MEDIUM = "islands-retina-medium", e.ISLANDS_RETINA_SMALL = "islands-retina-small", e.NORMAL = "normal", e))(o || {});
                const s = "0/0-0",
                    i = "YandexSDKLogError"
            },
            934: (e, t, r) => {
                r.d(t, {
                    Z: () => o
                });
                const n = /(\w+)@|at (.+) \(/g;

                function a(e, t = 0) {
                    var r;
                    const a = Array.from(e.matchAll(n)) || [];
                    if (!a.length) return "unknown";
                    if (0 === t) return a[0][2];
                    for (let e = Math.min(a.length - 1, t); e >= 0; e--) {
                        const t = null == (r = a[e]) ? void 0 : r[2];
                        if (t) return t
                    }
                    return "unknown"
                }

                function o(e) {
                    if (e) return a(e, 0);
                    try {
                        throw new Error
                    } catch (e) {
                        return a(e instanceof Error && e.stack || "", 2)
                    }
                }
            }
        },
        t = {};

    function r(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n](o, o.exports, r), o.exports
    }
    r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        if (void 0 !== r) {
            var e = r.u,
                t = r.e,
                n = {},
                a = {};
            r.u = function(t) {
                return e(t) + (n.hasOwnProperty(t) ? "?" + n[t] : "")
            }, r.e = function(n) {
                return t(n).catch((function(t) {
                    var o = a.hasOwnProperty(n) ? a[n] : 3;
                    if (o < 1) {
                        var s = e(n);
                        throw t.message = "Loading chunk " + n + " failed after 3 retries.\n(" + s + ")", t.request = s, t
                    }
                    return new Promise((function(e) {
                        setTimeout((function() {
                            a[n] = o - 1, e(r.e(n))
                        }), 0)
                    }))
                }))
            }
        }
    })();
    var n = {};
    (() => {
        r.d(n, {
            default: () => Dn
        });
        var e = (e => (e.ABORT_CONTROLLER = "abort-controller", e.GLOBAL_THIS = "global-this", e.INTERSECTION_OBSERVER = "intersection-observer", e.LEGACY = "legacy", e.RESIZE_OBSERVER = "resize-observer", e.SMOOTH_SCROLL = "smooth-scroll", e))(e || {});
        const t = e => {
            const {
                async: t,
                content: r,
                crossOrigin: n,
                id: a,
                nonce: o,
                onErrCb: s,
                onLoadCb: i,
                src: c
            } = e, l = document.createElement("script");
            if (i && (l.onload = i), s && (l.onerror = s), l.type = "text/javascript", t && (l.async = t), c && (l.src = c), o && l.setAttribute("nonce", o), n && l.setAttribute("crossOrigin", n), a && (l.setAttribute("id", `${a}-script`), l.dataset.rcid = `load-script-${a}`), r) {
                const e = document.createTextNode(r);
                l.appendChild(e)
            }
            return l
        };

        function a(e, t) {
            return e.endsWith("/") || (e = `${e}/`), `${e}polyfill/${t}`
        }

        function o(e, t) {
            return a(e, function(e) {
                var t, r;
                return (null == (r = null == (t = window.loadPolyfillHash) ? void 0 : t[e]) ? void 0 : r.contenthash) ? `${e}.${window.loadPolyfillHash[e].contenthash}.js` : `${e}.js`
            }(t))
        }

        function s(e, t) {
            let r, n;
            return function(...a) {
                const o = a;
                return r || (r = !0, setTimeout((() => r = !1), t), n = e.apply(this, o)), n
            }
        }
        var i = r(159),
            c = r(503),
            l = r(617);
        const d = {
                background: "#4e3534",
                text: "#f9dedc"
            },
            u = ["Log error: data is not suitable for logging"];

        function h(e, t = "Dev", r) {
            if (!new URLSearchParams(location.search).get("debug-mode")) return () => {};
            const n = new Set("string" == typeof t ? [t] : t);
            n.add("Sdk");
            const a = Array.from(n);

            function o(t, r) {
                return l.F.postToParent((0, i.$4)({
                    prefix: e,
                    tag: a,
                    color: r,
                    data: t
                }))
            }
            return function(...e) {
                o(e, r).catch((() => o(u, d)))
            }
        }
        const p = class {
            constructor() {
                this.resolve = () => {}, this.reject = () => {}, this.promiseState = 0, this.promise = new Promise(((e, t) => {
                    this.resolve = t => {
                        this.promiseState = 1, e(t)
                    }, this.reject = e => {
                        this.promiseState = 2, t(e)
                    }
                }))
            }
            get state() {
                return this.promiseState
            }
        };
        var m = r(404);
        const g = h("sdkTimeout");

        function y(e, t = function() {
            var e;
            switch (null == (e = navigator.connection) ? void 0 : e.effectiveType) {
                case "slow-2g":
                    return 4e4;
                case "2g":
                    return 2e4;
                case "3g":
                    return 1e4;
                default:
                    return 5e3
            }
        }()) {
            const r = new p;
            g("init", e), r.promise.catch((() => {
                var r;
                const n = new Error(`[SDK] too long resolve for method '${e}'`);
                n.additional = {
                    speed: (null == (r = navigator.connection) ? void 0 : r.effectiveType) || "unknown",
                    timeout: t
                }, g("timeout", e), (0, m.f)(n)
            }));
            const n = setTimeout((() => {
                r.reject()
            }), t);
            return () => {
                g("resolve", e), r.resolve(), clearTimeout(n)
            }
        }
        class f {
            constructor(e) {
                this.log = e, this.observers = {}, this.subscribe = (e, t) => {
                    var r, n;
                    return (null != (n = (r = this.observers)[e]) ? n : r[e] = []).push(t), this.unsubscribe.bind(this, e, t)
                }, this.unsubscribe = (e, t) => {
                    var r;
                    if (!t) return void delete this.observers[e];
                    const n = this.observers[e];
                    if (!n) return void(null == (r = this.log) || r.call(this, `Observable: eventId {${e}} does not exist`));
                    const a = n.indexOf(t); - 1 !== a && n.splice(a, 1)
                }, this.notifyObservers = (e, t) => e.forEach((e => {
                    const r = this.observers[e];
                    r && r.forEach((r => {
                        var n;
                        try {
                            r(t)
                        } catch (t) {
                            null == (n = this.log) || n.call(this, `Observable: {${e}} event observer error`, t)
                        }
                    }))
                })), this.getObserversNumber = e => {
                    var t, r;
                    return null != (r = null == (t = this.observers[e]) ? void 0 : t.length) ? r : 0
                }
            }
        }
        var v = (e, t, r) => new Promise(((n, a) => {
            var o = e => {
                    try {
                        i(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                },
                s = e => {
                    try {
                        i(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                },
                i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
            i((r = r.apply(e, t)).next())
        }));
        const w = {
                background: "#6c5b7b",
                text: "#ffffff"
            },
            b = class {
                constructor() {
                    this.log = h("Achievements | Child frame", "Dev", w), this.observable = new f(this.log), this.setProgress = (e, t) => v(this, null, (function*() {
                        return this.post(i.jG.SetProgress({
                            id: e,
                            progress: t
                        }))
                    })), this.getProgress = e => v(this, null, (function*() {
                        return this.post(i.jG.GetProgress({
                            id: e
                        }))
                    })), this.getList = (...e) => v(this, [...e], (function*(e = ["allLocal"]) {
                        return this.post(i.jG.GetList({
                            status: e
                        }))
                    })), this.on = ({
                        action: e,
                        id: t = ""
                    }, r) => this.observable.subscribe(this.buildId(e, t), r), this.off = ({
                        action: e,
                        id: t
                    }, r) => this.observable.unsubscribe(this.buildId(e, t), r), this.post = e => v(this, null, (function*() {
                        this.log("post to parent", e.action, e.data);
                        const t = y(`AchvManager.${e.action}`);
                        return l.F.postToParent(e).then((t => {
                            var r;
                            this.log("receive from parent", e, t);
                            const {
                                result: n,
                                success: a,
                                error: o
                            } = t.data;
                            return a && n ? (this.notify(e.action, null != (r = e.data) ? r : {}, n), n) : (this.log("reject", e, "due to error"), Promise.reject(o))
                        })).finally((() => {
                            t()
                        }))
                    })), this.notify = (e, t, r) => {
                        const n = [this.buildId(e)];
                        t.id && n.push(this.buildId(e, t.id)), this.observable.notifyObservers(n, {
                            data: r,
                            payload: t
                        })
                    }, this.buildId = (e, t = "") => `${e}${t}`
                }
            };
        b.init = () => {
            const {
                getList: e,
                getProgress: t,
                off: r,
                on: n,
                setProgress: a
            } = new b;
            return {
                getList: e,
                getProgress: t,
                off: r,
                on: n,
                setProgress: a
            }
        };
        let P = b;
        var E = (e => (e.ADV_IS_NOT_CONNECTED = "ADV_IS_NOT_CONNECTED", e.UNKNOWN = "UNKNOWN", e))(E || {});
        const S = h("NoAds", "Adv"),
            T = "yandex-games-no-ads-style";

        function A() {
            Array.isArray(window.yaContextCb) && 0 !== window.yaContextCb.length && (window.yaContextCb = []), Array.isArray(window.yandexContextAsyncCallbacks) && 0 !== window.yandexContextAsyncCallbacks.length && (window.yandexContextAsyncCallbacks = [])
        }
        let O = !1;

        function k(e) {
            try {
                return String(e.message || e).substring(0, 100)
            } catch (e) {}
            return ""
        }

        function C() {
            const e = new URLSearchParams(location.search),
                t = new URLSearchParams(location.hash);
            return "true" === e.get("draft") || "true" === t.get("draft")
        }
        const I = h("AdvManager", "Adv");

        function D(e, t) {
            return "function" == typeof e[t] ? (r = e[t], n = `Error in callback ${t}`, (...e) => {
                try {
                    return r(...e)
                } catch (e) {
                    (0, m.f)(e, {
                        additional: {
                            origError: k(e)
                        },
                        message: n
                    })
                }
            }) : () => {};
            var r, n
        }
        class _ {
            constructor(e) {
                var t;
                this.callbacks = {}, this.onAdvDebugManagerExternalMessage = e => {
                    const {
                        action: t
                    } = e.data;
                    switch (t) {
                        case "debug-action-showFullscreenAdv":
                            this.showFullscreenAdvDebug(t);
                            break;
                        case "debug-action-showRewardedVideo":
                            this.showRewardedVideoDebug(t);
                            break;
                        case "debug-action-switchStickyBanners":
                            this.switchStickyBannersDebug(t)
                    }
                }, this.onAdvManagerExternalMessage = e => {
                    var t, r, n, a, o, s, i, c, l, d, u, h, p;
                    const {
                        action: g,
                        data: y
                    } = e.data;
                    switch (I(`onAdvManagerExternalMessage ${g}`), g) {
                        case "adv-callback-open":
                            null == (r = (t = this.callbacks).onOpen) || r.call(t);
                            break;
                        case "adv-callback-close":
                            this.callOnAdvClose(y.wasShown);
                            break;
                        case "adv-callback-error":
                            this.callOnAdvClose(!1);
                            try {
                                if ("string" != typeof(null == (n = null == y ? void 0 : y.error) ? void 0 : n.message)) {
                                    const e = new Error("Undefined error message");
                                    try {
                                        e.additional = JSON.stringify(y)
                                    } catch (t) {
                                        e.additional = "undefined"
                                    }(0, m.f)(e)
                                }
                            } catch (e) {}
                            null == (o = (a = this.callbacks).onError) || o.call(a, new Error(y.error.message, {
                                cause: y.error
                            }));
                            break;
                        case "rewarded-video-callback-open":
                            null == (i = (s = this.callbacks).onOpen) || i.call(s);
                            break;
                        case "rewarded-video-callback-rewarded":
                            null == (l = (c = this.callbacks).onRewarded) || l.call(c);
                            break;
                        case "rewarded-video-callback-close":
                            null == (u = (d = this.callbacks).onClose) || u.call(d);
                            break;
                        case "rewarded-video-callback-error":
                            null == (p = (h = this.callbacks).onError) || p.call(h, new Error(y.error.message, {
                                cause: y.error
                            }));
                            break;
                        case "set-disabled-state":
                            I('On "set-disabled-state" event', e.data, y.value), this.setDisabledState(y.value)
                    }
                }, this.adv = e.adv || {}, this.checkDeprecatedOnAdvCloseUsage(), (null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isWorldWide) && this.setDisabledState(!0), Object.defineProperty(this, "callbacks", {
                    enumerable: !1,
                    writable: !0
                }), Object.defineProperty(this.adv, "onAdvClose", {
                    enumerable: !1,
                    writable: !0
                }), l.F.onExternalMessage("adv-manager", this.onAdvManagerExternalMessage), l.F.onExternalMessage("adv-debug-manager", this.onAdvDebugManagerExternalMessage), this.updateDisabledState()
            }
            checkDeprecatedOnAdvCloseUsage() {
                "onAdvClose" in this.adv && (0, m.T)(new Error('Deprecated usage "onAdvClose". Please, use `ysdk.adv.method({callbacks})` https://yandex.ru/dev/games/doc/sdk/sdk-adv'))
            }
            showFullscreenAdvDebug(e) {
                this.showFullscreenAdv({
                    callbacks: {
                        onClose: t => I(`${e} onClose, wasShown = ${t}`),
                        onError: t => I(`${e} onError, error =`, t),
                        onOpen: () => I(`${e} onOpen`)
                    }
                })
            }
            showRewardedVideoDebug(e) {
                this.showRewardedVideo({
                    callbacks: {
                        onClose: () => I(`${e} onClose`),
                        onError: t => I(`${e} onError, error =`, t),
                        onOpen: () => I(`${e} onOpen`),
                        onRewarded: () => I(`${e} onRewarded`)
                    }
                })
            }
            switchStickyBannersDebug(e) {
                this.getBannerAdvStatus().then((({
                    stickyAdvIsShowing: t
                }) => {
                    t ? this.hideBannerAdv().then((({
                        stickyAdvIsShowing: t
                    }) => {
                        I(`${e} hideBannerAdv, stickyAdvIsShowing = ${t}`)
                    })) : this.showBannerAdv().then((({
                        reason: t,
                        stickyAdvIsShowing: r
                    }) => {
                        I(`${e} hideBannerAdv, stickyAdvIsShowing = ${r}, reason = ${t}`)
                    }))
                }))
            }
            updateDisabledState() {
                l.F.postToParent(i.X$.GetDisabledState()).then((({
                    data: e
                }) => {
                    this.setDisabledState(e.value)
                })).catch(console.warn)
            }
            setDisabledState(e) {
                I("setDisabledState", e), e ? O || (O = !0, S("_disableAds"), function() {
                    var e;
                    if (document.getElementById(T)) return;
                    const t = document.createElement("style");
                    t.id = T, t.textContent = '\nbody div[id*="yandex_rtb"],\nbody div[id*="adfox"],\nbody iframe#bwiframe,\nbody iframe[src*="yabnrwall.html"],\nbody iframe[src*="yartbbnr.html"],\nbody yatag,\nbody yatag[class]\n{ display: none !important; }', null == (e = document.body) || e.appendChild(t)
                }(), function() {
                    var e, t, r;
                    const n = {
                        destroy() {
                            S("Ya.Context.AdvManager.destroy disabled")
                        },
                        render(e, t) {
                            "function" == typeof t ? t() : "function" == typeof e.altCallback ? e.altCallback() : "function" == typeof e.onError && e.onError({
                                code: "YA_GAMES_ADS_DISABLED",
                                text: "",
                                type: "error"
                            })
                        }
                    };
                    "function" == typeof(null == (r = null == (t = null == (e = window.Ya) ? void 0 : e.Context) ? void 0 : t.AdvManager) ? void 0 : r.render) && (window.Ya.Context.AdvManager.render = n.render), A();
                    let a = window.Ya;
                    Object.defineProperty(window, "Ya", {
                        get() {
                            var e;
                            return (null == (e = null == a ? void 0 : a.Context) ? void 0 : e.AdvManager) && a.Context.AdvManager !== n && (a.Context.AdvManager = n), A(), a
                        },
                        set(e) {
                            var t;
                            (null == (t = e.Context) ? void 0 : t.AdvManager) && e.Context.AdvManager !== n && (e.Context.AdvManager = n), a = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), window.Ya = window.Ya || {}, window.Ya.Context = window.Ya.Context || {
                        AdvManager: n
                    }, window.Ya.Context.AdvManager = n, S("disable Ya.Context.AdvManager.render")
                }()) : O && (O = !1)
            }
            ensureCallbacksIsValid(e, t) {
                if (!Object.keys(t).length) return;
                let r = ["onClose", "onError"];
                "showRewardedVideo" === e && r.push("onRewarded");
                try {
                    r = r.filter((e => !(e in t && "function" == typeof t[e])))
                } catch (e) {
                    (0, m.T)(new Error('Error in "ensureCallbacksIsValid"'), {
                        additional: {
                            error: String(e).substring(0, 100)
                        }
                    })
                }
                if (r.length) {
                    const t = new Error(`Callbacks for "${e}" has unpresented methods. See https://yandex.ru/dev/games/doc/ru/sdk/sdk-adv`);
                    (0, m.T)(t, {
                        additional: {
                            unpresentedMethods: r
                        }
                    })
                }
            }
            showFullscreenAdv({
                callbacks: e = {}
            } = {}) {
                this.ensureCallbacksIsValid("showFullscreenAdv", e);
                const t = y("AdvManager.showFullscreenAdv");
                l.F.postToParent(i.X$.AdvShowFullscreen()).then((({
                    data: {
                        error: t
                    }
                }) => {
                    if (!t) return this.setCallbacks(e, ["onClose", "onOpen", "onError"]);
                    if (C() && t.message.includes("often than once per")) throw t;
                    (0, m.T)(t, {
                        level: "warn"
                    }), D(e, "onError")(t), D(e, "onClose")(!1), this.callDeprecatedOnClose(!1)
                })).catch((t => {
                    (0, m.T)(t, {
                        level: "warn"
                    }), D(e, "onError")(t), D(e, "onClose")(!1), this.callDeprecatedOnClose(!1)
                })).finally((() => {
                    t()
                }))
            }
            showRewardedVideo({
                callbacks: e = {}
            } = {}) {
                this.ensureCallbacksIsValid("showRewardedVideo", e);
                const t = y("AdvManager.showRewardedVideo");
                l.F.postToParent(i.X$.AdvShowRewardedVideo()).then((({
                    data: {
                        error: t
                    }
                }) => {
                    if (t) throw t;
                    this.setCallbacks(e, ["onOpen", "onRewarded", "onClose", "onError"])
                })).catch((t => {
                    (0, m.f)(t), D(e, "onError")(t), D(e, "onClose")(!1)
                })).finally((() => {
                    t()
                }))
            }
            showBannerAdv() {
                return new Promise((e => {
                    const t = y("AdvManager.showBannerAdv");
                    l.F.postToParent(i.X$.AdvShowStickyBanner()).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, m.f)(t), e({
                            reason: E.UNKNOWN,
                            stickyAdvIsShowing: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            hideBannerAdv() {
                return new Promise((e => {
                    const t = y("AdvManager.hideBannerAdv");
                    l.F.postToParent(i.X$.AdvHideStickyBanner()).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, m.f)(t), e({
                            stickyAdvIsShowing: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            getBannerAdvStatus() {
                return new Promise((e => {
                    const t = y("AdvManager.getBannerAdvStatus");
                    l.F.postToParent(i.X$.AdvStatusStickyBanner()).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, m.f)(t), e({
                            reason: E.UNKNOWN,
                            stickyAdvIsShowing: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            setCallbacks(e, t) {
                this.callbacks = {}, t.forEach((t => {
                    this.callbacks[t] = D(e, t)
                }))
            }
            callOnAdvClose(e = !1) {
                var t, r;
                this.callDeprecatedOnClose(e), null == (r = (t = this.callbacks).onClose) || r.call(t, e)
            }
            callDeprecatedOnClose(e = !1) {
                if ("function" == typeof this.adv.onAdvClose) try {
                    this.adv.onAdvClose(e)
                } catch (e) {
                    (0, m.T)(e)
                }
            }
        }
        const x = new class {
            openAuthDialog() {
                const e = y("AuthManagerPublic.openAuthDialog", 12e4),
                    t = l.F.postToParent(i.uQ.AuthDialogOpen());
                return t.finally((() => {
                    e()
                })), t
            }
        };

        function L(e) {
            const t = typeof e;
            return null != e && ("object" === t || "function" === t)
        }
        var R = r(292);
        const N = r(69).Z,
            F = {
                small: R.f9.ISLANDS_RETINA_SMALL,
                medium: R.f9.ISLANDS_RETINA_MEDIUM,
                large: R.f9.ISLANDS_200
            },
            G = {
                small: R.f9.ISLANDS_200,
                medium: R.f9.ISLANDS_200,
                large: R.f9.BIG
            },
            $ = {
                sdkBackendURL: "",
                avatarOrigin: "https://avatars.mdst.yandex.net"
            },
            j = `${$.avatarOrigin}/get-yapic/`;
        class M {
            constructor(e) {
                this._personalInfo = e
            }
            getID() {
                return (0, m.T)(new Error("Player.getID() is deprecated. Please, use Player.getUniqueID().\nhttps://yandex.ru/dev/games/doc/dg/sdk/sdk-player.html#sdk-player__profile-data")), N.sendOnceDeprecatedUsage("Player.getID"), this._personalInfo.id
            }
            getUniqueID() {
                return this._personalInfo.uniqueID
            }
            getName() {
                return this._personalInfo.publicName
            }
            getMode() {
                var e;
                return (0, m.T)(new Error("Player.getMode() is deprecated. Please, use Player.isAuthorized().\nhttps://yandex.ru/dev/games/doc/dg/sdk/sdk-player#auth")), N.sendOnceDeprecatedUsage("Player.getMode"), null != (e = this._personalInfo.mode) ? e : ""
            }
            getPayingStatus() {
                return l.F.postToParent(i.yH.GetGamePurchaseEnabled()).then((({
                    data: {
                        enabled: e
                    }
                }) => {
                    e || (0, m.T)(new Error("We provide data on the player's ability to pay in games that already support purchases"), {
                        level: "warn"
                    })
                })), this._personalInfo.payingStatus
            }
            getPhoto(e = "medium") {
                const t = F[e];
                if (!t) throw new Error(`Unknown size value ('${e}')`);
                return this._personalInfo.avatarIdHash ? `${$.sdkBackendURL}/player/avatar/${this._personalInfo.avatarIdHash}/${t}` : `${j}${R._h}/${t}`
            }
            isAuthorized() {
                return "lite" !== this._personalInfo.mode
            }
        }
        var U = Object.defineProperty,
            B = Object.getOwnPropertySymbols,
            V = Object.prototype.hasOwnProperty,
            Y = Object.prototype.propertyIsEnumerable,
            K = (e, t, r) => t in e ? U(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            H = (e, t) => {
                for (var r in t || (t = {})) V.call(t, r) && K(e, r, t[r]);
                if (B)
                    for (var r of B(t)) Y.call(t, r) && K(e, r, t[r]);
                return e
            };
        const W = (e, t) => {
                l.F.postToParent((0, i.rS)({
                    playdeck: H({
                        method: e
                    }, t)
                }))
            },
            q = "tgData";
        var X = Object.defineProperty,
            z = Object.defineProperties,
            J = Object.getOwnPropertyDescriptors,
            Q = Object.getOwnPropertySymbols,
            Z = Object.prototype.hasOwnProperty,
            ee = Object.prototype.propertyIsEnumerable,
            te = (e, t, r) => t in e ? X(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r;
        const re = s((e => l.F.postToParent(i.S.Score(e)).then((({
            data: e
        }) => e.result))), 1e3);
        class ne {
            getLeaderboardDescription(e) {
                const t = y("Leaderboards.getLeaderboardDescription"),
                    r = l.F.postToParent(i.S.Description({
                        name: e
                    })).then((({
                        data: e
                    }) => e));
                return r.finally((() => {
                    t()
                })), r
            }
            getLeaderboardStat(e) {
                const t = y("Leaderboards.getLeaderboardStat"),
                    r = l.F.postToParent(i.S.Stat({
                        name: e
                    })).then((({
                        data: e
                    }) => e));
                return r.finally((() => {
                    t()
                })), r
            }
            getLeaderboardEntries(e, t) {
                const {
                    includeUser: r = !1,
                    quantityAround: n = 5,
                    quantityTop: a = 5
                } = t || {}, o = y("Leaderboards.getLeaderboardEntries"), s = l.F.postToParent(i.S.Entries({
                    include_user: r,
                    name: e,
                    quantity_around: n,
                    quantity_top: a
                })).then((({
                    data: e
                }) => {
                    const {
                        avatarPrefix: t,
                        result: r
                    } = e, {
                        entries: n,
                        leaderboard: a,
                        ranges: o,
                        userRank: s
                    } = r;
                    return {
                        entries: this.transformLeaderboardEntries(n, t),
                        leaderboard: a,
                        ranges: o,
                        userRank: s
                    }
                }));
                return s.finally((() => {
                    o()
                })), s
            }
            getLeaderboardPlayerEntry(e) {
                return t = this, r = function*() {
                    const {
                        data: t
                    } = yield l.F.postToParent(i.S.PlayerEntry({
                        name: e
                    }));
                    return this.transformLeaderboardEntry(t.result, t.avatarPrefix)
                }, new Promise(((e, n) => {
                    var a = e => {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                n(e)
                            }
                        },
                        o = e => {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                n(e)
                            }
                        },
                        s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(a, o);
                    s((r = r.apply(t, null)).next())
                }));
                var t, r
            }
            setLeaderboardScore(e, t, r) {
                W("setScore", {
                    value: t
                });
                const n = {
                    name: e,
                    score: t
                };
                return this.lastTimeLeaderboardWasSend && !this.canSetLeaderboardScoreByTime() ? Promise.reject("The request to setLeaderboardScore can be sent no more than once per second") : (r && (n.extraData = r), this.lastTimeLeaderboardWasSend = Date.now(), re(n))
            }
            canSetLeaderboardScoreByTime() {
                return Date.now() - this.lastTimeLeaderboardWasSend > 1e3
            }
            transformLeaderboardEntry(e, t) {
                const {
                    avatarIdHash: r,
                    lang: n,
                    publicName: a,
                    scopePermissions: o,
                    uniqueID: s
                } = e.player, i = `${t}${r}`;
                return c = ((e, t) => {
                    for (var r in t || (t = {})) Z.call(t, r) && te(e, r, t[r]);
                    if (Q)
                        for (var r of Q(t)) ee.call(t, r) && te(e, r, t[r]);
                    return e
                })({}, e), z(c, J({
                    player: {
                        getAvatarSrc: (e = "medium") => (F[e] || (e = "medium"), `${i}/${F[e]}`),
                        getAvatarSrcSet: (e = "medium") => (F[e] || (e = "medium"), `${i}/${F[e]} 1x, ${i}/${G[e]} 2x`),
                        lang: n,
                        publicName: a,
                        scopePermissions: o,
                        uniqueID: s
                    }
                }));
                var c
            }
            transformLeaderboardEntries(e, t) {
                return e.map((e => this.transformLeaderboardEntry(e, t)))
            }
        }
        const ae = () => {
            (0, m.T)(new Error("ysdk.getLeaderboards() is deprecated. Please, use ysdk.leaderboards.\nhttps://yandex.ru/dev/games/doc/dg/sdk/sdk-leaderboard")), N.sendOnceDeprecatedUsage("ysdk.getLeaderboards()");
            const e = new ne;
            return Promise.resolve(e)
        };

        function oe(e, t) {
            t && Object.defineProperty(e, "signature", {
                enumerable: !1,
                configurable: !1,
                get: () => t
            })
        }
        class se extends Error {
            constructor({
                code: e,
                httpStatus: t,
                message: r
            }, n, a) {
                super(r, n, a), this.name = "PaymentsError", this.code = e, this.httpStatus = t, Object.setPrototypeOf(this, se.prototype), Error.captureStackTrace && Error.captureStackTrace(this, se)
            }
            toJSON() {
                return {
                    code: this.code,
                    httpStatus: this.httpStatus,
                    message: this.message,
                    name: this.name,
                    stack: this.stack
                }
            }
        }
        const ie = se;

        function ce() {
            var e;
            return (null == (e = window.performance) ? void 0 : e.timeOrigin) || Date.now()
        }
        const le = {
            APP_VERSION: "",
            app: {
                id: ""
            },
            browser: {
                lang: "ru"
            },
            clid: void 0,
            i18n: {
                lang: "ru",
                tld: "ru"
            },
            isSendingGameCustomGoalsToMetrika: !1,
            isStickyBannerEnabled: !1,
            isWorldWide: !1,
            isYandexApp: !1,
            isTelegram: !1,
            parentTimeOrigin: ce(),
            moneyCodeSymbol: R.NA.HOP,
            params: {},
            request: {},
            serverTime: Date.now(),
            serviceHostname: "yandex",
            serviceName: "yandex",
            useMockGameLinks: !1
        };
        let de = () => (window.YandexGamesSDKEnvironment || (0, m.f)(new Error("SDK environment: `window.YandexGamesSDKEnvironment` is undefined")), de = () => window.YandexGamesSDKEnvironment || le, de());
        const ue = {
            get app() {
                return de().app
            },
            get browser() {
                return {
                    lang: de().i18n.lang
                }
            },
            get data() {
                return de().data || {}
            },
            get i18n() {
                return de().i18n
            },
            get payload() {
                return de().params.payload
            },
            get isTelegram() {
                return de().isTelegram
            },
            get domain() {
                return de().serviceName || de().serviceHostname
            }
        };
        var he = r(282);
        const pe = new Set(["ru", "uk", "be", "kk", "uz"]);
        var me = (e => (e.BE = "be", e.EN = "en", e.KK = "kk", e.RU = "ru", e.TR = "tr", e.UK = "uk", e.UZ = "uz", e))(me || {});
        const ge = me.RU;

        function ye(e, t = ge, r = "") {
            if (e) {
                if ("string" == typeof e) return e;
                if (t in e) return e[t] || r;
                if (!(e => !e || pe.has(e))(t) && "en" in e) return e.en || r;
                if (ge in e) return e[ge] || r
            }
            return r
        }
        var fe;
        const ve = Symbol("codePath"),
            we = Symbol("appId"),
            be = Symbol("sendMetricaParams"),
            Pe = Symbol("currencyPriceStat"),
            Ee = Symbol("sendOnceCurrencyCodeStat"),
            Se = Symbol("getCurrencyImageUrlPrefix"),
            Te = Symbol("currencyCodeStat");
        class Ae {
            constructor(e) {
                this._productData = e, this[fe] = () => {
                    this[Ee] = () => {}, this[be](this[Te])
                }
            }
            get id() {
                return this._productData.id
            }
            get title() {
                return ye(this._productData.title)
            }
            get description() {
                return ye(this._productData.description)
            }
            get imageURI() {
                const {
                    image: e
                } = this._productData;
                if (e && "object" == typeof e && "url_prefix" in e) {
                    const t = String(e.url_prefix);
                    return /\.(png|jpg|svg)$/.test(t) ? t : `${t}/default256x256`
                }
                return "https://yastatic.net/s3/games-static/static-data/images/payments/default-product-image.png"
            }
            get price() {
                return `${this.priceValue} ${this.priceCurrencyCode}`
            }
            get priceValue() {
                return String(this._productData.price)
            }
            get priceCurrencyCode() {
                this[Ee]()
            }
            get[ve]() {
                return ""
            }
            getPriceCurrencyImage(e = "small") {
                if ("svg" === e) return `${this[Se]()}/currency-icon-m.svg`;
                let t = "s";
                switch (e) {
                    case "medium":
                    case "small":
                        t = e.charAt(0);
                        break;
                    default:
                        console.warn(`Unknown size value ('${e}')`)
                }
                const r = window.devicePixelRatio >= 2;
                return `${this[Se]()}/currency-icon-${t}${r?"@2x":""}.png`
            }
            toJSON() {
                return {
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    imageURI: this.imageURI,
                    price: this.price,
                    priceValue: this.priceValue,
                    priceCurrencyCode: this.priceCurrencyCode
                }
            }
            get[Te]() {
                return {
                    borrowParams: {
                        payments: {
                            appId: this[we],
                            productCurrencyCodeGet: !0
                        }
                    }
                }
            } [(fe = Ee, Se)]() {
                return `//yastatic.net/s3/games-static/static-data/images/payments/sdk${this[ve]}`
            }
            get[Pe]() {
                return this._productData.currencyPrice
            }
        }
        var Oe = r(235),
            ke = r(69);
        class Ce extends Ae {
            get priceCurrencyCode() {
                var e;
                return super.priceCurrencyCode, this[Pe] ? "RUB" === this[Pe].currency ? "РУБ" : this[Pe].currency : null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.moneyCodeSymbol
            }
            get price() {
                return `${this.priceValue} ${this.priceCurrencyCode}`
            }
            get priceValue() {
                return this[Pe] ? String((e => {
                    const t = e / R.Uo;
                    return Math.ceil(100 * t) / 100
                })(this[Pe].priceValue)) : super.priceValue
            }
            get[ve]() {
                var e, t;
                return this[Pe] ? `/${this[Pe].currency.toLowerCase()}` : (null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.moneyCodeSymbol) ? `/${null==(t=window.YandexGamesSDKEnvironment)?void 0:t.moneyCodeSymbol.toLowerCase()}` : ""
            }
            get [we]() {
                return (0, Oe.o)()
            } [be](e) {
                ke.Z.params(e)
            }
        }
        class Ie {
            constructor(e) {
                this.purchaseData = e
            }
            get productID() {
                return this.purchaseData.productID
            }
            get purchaseToken() {
                return this.purchaseData.purchaseToken
            }
            get developerPayload() {
                return this.purchaseData.developerPayload
            }
            toJSON() {
                return {
                    productID: this.productID,
                    purchaseToken: this.purchaseToken,
                    developerPayload: this.developerPayload
                }
            }
        }
        var De = Object.defineProperty,
            _e = Object.defineProperties,
            xe = Object.getOwnPropertyDescriptors,
            Le = Object.getOwnPropertySymbols,
            Re = Object.prototype.hasOwnProperty,
            Ne = Object.prototype.propertyIsEnumerable,
            Fe = (e, t, r) => t in e ? De(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            Ge = (e, t) => {
                for (var r in t || (t = {})) Re.call(t, r) && Fe(e, r, t[r]);
                if (Le)
                    for (var r of Le(t)) Ne.call(t, r) && Fe(e, r, t[r]);
                return e
            },
            $e = (e, t) => _e(e, xe(t));
        const je = h("Payment");
        class Me {
            constructor(e = {}) {
                this._config = e, this.___test1212()
            }
            getCatalog() {
                return new Promise(((e, t) => {
                    const r = y("Payments.getCatalog");
                    l.F.postToParent(i.yH.GetCatalog({
                        lang: ue.i18n.lang
                    })).then((({
                        data: t
                    }) => {
                        je("get-catalog result", t), e(t.products.map((e => new Ce(e))))
                    })).catch((e => {
                        t(e)
                    })).finally((() => {
                        r()
                    }))
                }))
            }
            purchase(e) {
                "object" != typeof e && (e = {
                    id: e,
                    developerPayload: ""
                });
                const {
                    developerPayload: t
                } = e;
                if (t) {
                    if ("string" != typeof t) return Promise.reject(new Error("developerPayload must be a string"))
                } else e.developerPayload = "";
                return new Promise(((t, r) => {
                    l.F.postToParent(i.yH.PurchaseStart({
                        paymentsConfig: $e(Ge({}, this._config), {
                            lang: ue.i18n.lang
                        }),
                        purchaseConfig: e
                    })).then((({
                        data: {
                            data: e,
                            signature: r
                        }
                    }) => {
                        je("purchase-start then");
                        const n = new Ie({
                            productID: e.product.id,
                            purchaseToken: e.token,
                            developerPayload: e.developerPayload
                        });
                        oe(n, r), t(n)
                    })).catch((e => {
                        je("purchase-start catch"), r(e)
                    }))
                }))
            }
            getPurchases() {
                return new Promise(((e, t) => {
                    const r = y("Payments.getPurchases");
                    l.F.postToParent(i.yH.GetPurchases({
                        paymentsConfig: $e(Ge({}, this._config), {
                            lang: ue.i18n.lang
                        })
                    })).then((({
                        data: {
                            data: t,
                            signature: r
                        }
                    }) => {
                        je("getPurchases callback", t);
                        const n = t.map((e => new Ie({
                            productID: e.product.id,
                            purchaseToken: e.token,
                            developerPayload: e.developerPayload
                        })));
                        oe(n, r), e(n)
                    })).catch((e => {
                        t(e)
                    })).finally((() => {
                        r()
                    }))
                }))
            }
            consumePurchase(e) {
                return new Promise(((t, r) => {
                    const n = y("Payments.consumePurchase");
                    l.F.postToParent(i.yH.PurchaseConsume({
                        token: e
                    })).then((({
                        data: e
                    }) => {
                        if (console.info("consumePurchase data"), console.info(e), !e || !e.token) throw new ie({
                            code: "CANNOT_CONSUME_PURCHASE",
                            message: "Can not consume purchase."
                        });
                        t(!0)
                    })).catch((e => {
                        r(e)
                    })).finally((() => {
                        n()
                    }))
                }))
            }
            ___test1212() {
                var e, t, r;
                if ("96458" !== (null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.app.id)) return;
                if (!0 !== (null == (r = null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.request.experiments) ? void 0 : r.test1212Payments)) return;
                const n = "position: fixed; left: 15px; padding: 0.3em; background: #fff; border: 1px solid #000; border-radius: 5px;";
                let a = document.createElement("div");
                a.setAttribute("id", "payElement1212-noads"), a.setAttribute("style", `${n} top: 5px;`), a.textContent = 'purchase("noads")', a.onclick = () => this.___test1212Purchase("noads"), document.body.appendChild(a), a = document.createElement("div"), a.setAttribute("id", "payElement1212-3x3antiblock"), a.setAttribute("style", `${n} top: 40px;`), a.textContent = 'purchase("3x3antiblock")', a.onclick = () => this.___test1212Purchase("3x3antiblock"), document.body.appendChild(a)
            }
            ___test1212Purchase(e) {
                function t(t) {
                    const r = document.getElementById(`payElement1212-${e}`);
                    r && (r.style.backgroundColor = t ? "#0f0" : "#f00")
                }
                this.purchase({
                    id: e,
                    developerPayload: ""
                }).then((() => t(!0))).catch((e => {
                    t(!1), (0, m.f)(e)
                }))
            }
        }
        const Ue = function(e = {}) {
            const t = new Me(e);
            return new Promise(((e, r) => {
                t.getCatalog().then((() => e(t))).catch(r)
            }))
        };
        class Be {
            constructor(e) {
                this._playerId = e, this._dataHash = null, this._timestamp = 0
            }
            static byteLengthFallback(e) {
                let t = e.length;
                for (let r = e.length - 1; r >= 0; r--) {
                    let n = e.charCodeAt(r);
                    n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2), n >= 56320 && n <= 57343 && r--
                }
                return t
            }
            static byteLength(e) {
                try {
                    return (new TextEncoder).encode(e).length
                } catch (t) {
                    return Be.byteLengthFallback(e)
                }
            }
            static stringifyData(e) {
                try {
                    return JSON.stringify(e, ((e, t) => {
                        if (t && "object" == typeof t && !Array.isArray(t)) {
                            const e = {},
                                r = Object.keys(t).sort();
                            for (const n of r) e[n] = t[n];
                            return e
                        }
                        return t
                    }))
                } catch (e) {
                    return (0, m.f)(e), `${Date.now()}.${Math.random()}`
                }
            }
            isSamePlayer(e) {
                return e === this._playerId
            }
            set dataHash(e) {
                this._dataHash = e ? Be.stringifyData(e) : null
            }
            set timestamp(e) {
                this._timestamp = e
            }
            validate(e) {
                const t = Be.stringifyData(e);
                return Be.byteLength(t) > 204800 ? {
                    error: new Error("The data is too large (bigger then 204800 bytes)."),
                    reject: !0
                } : this._dataHash === t ? {
                    error: new Error("The data does not differ from the previous ones."),
                    reject: !1
                } : {}
            }
            getWaitTime() {
                let e = 200;
                const t = Math.abs(Date.now() - this._timestamp);
                return t < 3e3 && (e = Math.max(200, 3e3 - t)), e
            }
        }
        const Ve = h("Player");

        function Ye(e, t) {
            return (0, m.f)(t, e)
        }

        function Ke(e) {
            const {
                data: t,
                signature: r
            } = function(e, t) {
                if ("signature" in e) {
                    const {
                        signature: r
                    } = e;
                    if ("string" == typeof r) {
                        const {
                            data: e
                        } = JSON.parse(function(e) {
                            for (var t, r = "", n = e.length, a = 0; a < n; a++) t = e[a], r += String.fromCharCode(t > 251 && t < 254 && a + 5 < n ? 1073741824 * (t - 252) + (e[++a] - 128 << 24) + (e[++a] - 128 << 18) + (e[++a] - 128 << 12) + (e[++a] - 128 << 6) + e[++a] - 128 : t > 247 && t < 252 && a + 4 < n ? (t - 248 << 24) + (e[++a] - 128 << 18) + (e[++a] - 128 << 12) + (e[++a] - 128 << 6) + e[++a] - 128 : t > 239 && t < 248 && a + 3 < n ? (t - 240 << 18) + (e[++a] - 128 << 12) + (e[++a] - 128 << 6) + e[++a] - 128 : t > 223 && t < 240 && a + 2 < n ? (t - 224 << 12) + (e[++a] - 128 << 6) + e[++a] - 128 : t > 191 && t < 224 && a + 1 < n ? (t - 192 << 6) + e[++a] - 128 : t);
                            return r
                        }(function(e) {
                            for (var t, r, n, a = e.replace(/[^A-Za-z0-9\+\/]/g, ""), o = a.length, s = 3 * o + 1 >>> 2, i = new Uint8Array(s), c = 0, l = 0, d = 0; d < o; d++)
                                if (r = 3 & d, c |= ((n = a.charCodeAt(d)) > 64 && n < 91 ? n - 65 : n > 96 && n < 123 ? n - 71 : n > 47 && n < 58 ? n + 4 : 43 === n ? 62 : 47 === n ? 63 : 0) << 18 - 6 * r, 3 === r || o - d == 1) {
                                    for (t = 0; t < 3 && l < s; t++, l++) i[l] = c >>> (16 >>> t & 24) & 255;
                                    c = 0
                                } return i
                        }(r.split(".")[1])));
                        return {
                            data: e,
                            signature: r
                        }
                    }
                    t({}, new Error("response.signature is not a string"))
                }
                return {
                    data: e
                }
            }(e, Ye);
            return oe(t, r), t
        }

        function He(e, t) {
            if (void 0 === t) return e;
            if (!Array.isArray(t)) throw new Error("`keys` must be an Array");
            if (-1 !== t.indexOf("signature")) throw new Error('`keys` must not contains "signature" key');
            const r = {};
            return t.forEach((t => {
                t in e && (r[t] = e[t])
            })), r
        }

        function We(e) {
            return !(!e || "object" != typeof e) && Object.values(e).every((e => "number" == typeof e && !isNaN(e)))
        }
        let qe, Xe, ze, Je;
        l.F.onExternalMessage("auth", (e => {
            if ("changed" === e.data.action && ze) {
                Ve("Call onLogoutCallback()");
                try {
                    ze()
                } catch (e) {
                    console.error()
                }
                ze = void 0
            }
        }));
        class Qe extends M {
            constructor(e, t) {
                super(e), this.dataPromise = null, this.getApiPromise = () => new Promise(((e, t) => {
                    this.getPlayerData().then((t => {
                        this.data = t, e(t)
                    })).catch((e => {
                        this.dataPromise = null, t(e)
                    }))
                })), this.getPlayerData = () => {
                    return e = this, t = function*() {
                        const {
                            data: e
                        } = yield l.F.postToParent(i.Uh.GetData({
                            signed: this.config.signed
                        }));
                        return Ke(e)
                    }, new Promise(((r, n) => {
                        var a = e => {
                                try {
                                    s(t.next(e))
                                } catch (e) {
                                    n(e)
                                }
                            },
                            o = e => {
                                try {
                                    s(t.throw(e))
                                } catch (e) {
                                    n(e)
                                }
                            },
                            s = e => e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
                        s((t = t.apply(e, null)).next())
                    }));
                    var e, t
                }, this.getDataPromise = () => void 0 !== this.data ? Promise.resolve(this.data) : ue.isTelegram ? (W("getData", {
                    key: q
                }), new Promise(((e, t) => {
                    function r(n) {
                        var a;
                        if (!(e => {
                                var t, r, n;
                                return "getData" === (null == (n = null == (r = null == (t = e.data) ? void 0 : t.data) ? void 0 : r.playdeck) ? void 0 : n.method)
                            })(n)) return;
                        l.F.offExternalMessage("telegram", r);
                        const o = (null == (a = n.data.data.playdeck.value) ? void 0 : a.data) || "{}";
                        if ("string" == typeof o) try {
                            e(JSON.parse(o))
                        } catch (e) {
                            const r = new Error("Error parsing game data from telegram");
                            r.additional = {
                                originalError: e
                            }, (0, m.f)(r, {
                                prefix: "telegram"
                            }), t({})
                        } else e(o)
                    }
                    l.F.onExternalMessage("telegram", r), setTimeout((() => {
                        l.F.offExternalMessage("telegram", r), t()
                    }), 1e3)
                }))).catch((() => this.getPlayerData())) : this.getApiPromise(), this.config = t, Xe && Xe.isSamePlayer(this.getUniqueID()) || (Xe = new Be(this.getUniqueID()))
            }
            onLogout(e) {
                Ve("Set onLogout callback"), ze = e
            }
            getIDsPerGame() {
                return l.F.postToParent(i.Uh.IdsPerGame({
                    signed: this.config.signed
                })).then((({
                    data: e
                }) => Ke(e)))
            }
            getData(e) {
                return this.dataPromise = this.getDataPromise(), this.dataPromise.then((t => He(t, e)))
            }
            setData(e, t = !1) {
                var r;
                if (ue.isTelegram && (r = e, W("setData", {
                        key: q,
                        value: JSON.stringify(r)
                    })), ! function(e) {
                        return "object" == typeof e && null !== e
                    }(e)) return Promise.reject(new Error("Data is not valid"));
                this.data = e;
                const n = function(e, t = !1) {
                    const r = Xe.validate(e);
                    return r.error ? r.reject ? Promise.reject(r.error) : ((0, m.T)(r.error), Promise.resolve(!0)) : new Promise(((r, n) => {
                        qe && window.clearTimeout(qe);
                        let a = t ? 200 : Math.max(200, Xe.getWaitTime());
                        Xe.timestamp = Date.now(), qe = window.setTimeout((() => {
                            l.F.postToParent(i.Uh.SetData({
                                data: e
                            })).then((() => {
                                Xe.dataHash = e, r(!0)
                            })).catch((e => {
                                Xe.timestamp = 0, Xe.dataHash = null, n(e)
                            }))
                        }), a)
                    }))
                }(e, t);
                return t ? n : Promise.resolve(!0)
            }
            getStats(e) {
                return void 0 === this.statsPromise && (this.statsPromise = new Promise(((e, t) => {
                    l.F.postToParent(i.Uh.Stats({
                        signed: this.config.signed
                    })).then((({
                        data: e
                    }) => Ke(e))).then(e).catch(t).finally((() => this.statsPromise = void 0))
                }))), this.statsPromise.then((t => He(t, e)))
            }
            setStats(e) {
                return We(e) ? l.F.postToParent(i.Uh.SetStats({
                    stats: e
                })).then((({
                    data: e
                }) => e.result)) : Promise.reject(new Error("Stats is not valid"))
            }
            incrementStats(e) {
                return We(e) ? l.F.postToParent(i.Uh.IncrementStats({
                    increments: e,
                    signed: this.config.signed
                })).then((({
                    data: e
                }) => Ke(e.result))) : Promise.reject(new Error("Increments is not valid"))
            }
        }

        function Ze(e) {
            return t = this, r = function*() {
                return new Promise((t => setTimeout((() => t()), e)))
            }, new Promise(((e, n) => {
                var a = e => {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            n(e)
                        }
                    },
                    o = e => {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            n(e)
                        }
                    },
                    s = t => t.done ? e(t.value) : Promise.resolve(t.value).then(a, o);
                s((r = r.apply(t, null)).next())
            }));
            var t, r
        }
        try {
            Je = window.localStorage
        } catch (e) {}
        const et = Je || function() {
                let e = {};
                return {
                    clear() {
                        e = {}
                    },
                    getItem: t => e[t],
                    key: t => Object.keys(e)[t],
                    removeItem(t) {
                        delete e[t]
                    },
                    setItem(t, r) {
                        e[t] = String(r)
                    },
                    get length() {
                        return Object.keys(e).length
                    }
                }
            }(),
            tt = /iPad|iPhone|iPod/.test(navigator.platform),
            rt = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            nt = tt || rt,
            at = /app-[^.]+\.games\.s3\.yandex\.net$/.test(location.hostname),
            ot = !at && nt,
            st = function(e, t) {
                if ("function" != typeof t) throw new Error("Argument is not a function");
                let r;
                return function(...n) {
                    return --e > 0 && t && (r = t.apply(this, n)), e <= 1 && (t = void 0), r
                }
            }(2, (() => {
                (0, m.f)(new Error("localStorage is broken on iOS/MacOS - https://developer.apple.com/forums/thread/109909\nPlease use YaGames.init().then(ysdk => ysdk.getStorage()).then(storage => storage.setItem('key', 'value'))"))
            })),
            it = class e {
                static setup() {
                    ot && Object.defineProperty(window, "localStorage", {
                        get: function() {
                            return st(), et
                        }
                    }), nt && at && e.setProxy() && e.backup()
                }
                static load() {
                    if (e.onloadPromise_) return e.onloadPromise_;
                    const t = e.getCustomLocalStorage();
                    return t ? (e.onloadPromise_ = Promise.race([Ze(5e3).then((() => {
                        throw new Error("LocalStorage timeout")
                    })), l.F.postToParent(i.Qq.GetAll()).then((({
                        data: e
                    }) => {
                        for (let [r, n] of Object.entries(e)) t.setItem(r, String(n));
                        return t
                    }))]).catch((e => (console.error(e), et))), e.onloadPromise_) : Promise.resolve(et)
                }
                static getCustomLocalStorage() {
                    return "function" != typeof Proxy ? null : new Proxy({
                        clear() {
                            et.clear.call(et), l.F.postToParent(i.Qq.Clear())
                        },
                        getItem: e => et.getItem.call(et, e),
                        key: e => et.key.call(et, e),
                        get length() {
                            return et.length
                        },
                        removeItem(e) {
                            et.removeItem.call(et, e), l.F.postToParent(i.Qq.Del(e))
                        },
                        setItem(e, t) {
                            et.setItem.call(et, e, String(t)), l.F.postToParent(i.Qq.Set(e, t))
                        }
                    }, {
                        get: function(e, t) {
                            return t in e ? e[t] : e.getItem(String(t))
                        },
                        set: function(e, t, r) {
                            return e.setItem(String(t), r), !0
                        }
                    })
                }
                static setProxy() {
                    const t = e.getCustomLocalStorage();
                    return !!t && (Object.defineProperty(window, "localStorage", {
                        get: function() {
                            return t
                        }
                    }), !0)
                }
                static backup() {
                    const e = Object.create(null);
                    for (let t = 0; t < et.length; t++) {
                        const r = et.key(t);
                        r && (e[r] = et.getItem(r))
                    }
                    l.F.postToParent(i.Qq.Backup(e))
                }
            };
        it.onloadPromise_ = null;
        let ct = it;

        function lt() {
            return !nt && Je ? Promise.resolve(Je) : ct.load()
        }
        var dt = Object.defineProperty,
            ut = Object.defineProperties,
            ht = Object.getOwnPropertyDescriptors,
            pt = Object.getOwnPropertySymbols,
            mt = Object.prototype.hasOwnProperty,
            gt = Object.prototype.propertyIsEnumerable,
            yt = (e, t, r) => t in e ? dt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            ft = (e, t) => {
                for (var r in t || (t = {})) mt.call(t, r) && yt(e, r, t[r]);
                if (pt)
                    for (var r of pt(t)) gt.call(t, r) && yt(e, r, t[r]);
                return e
            };
        const vt = e => ({
            get id() {
                return e.id
            },
            get title() {
                return ye(e.title)
            },
            get description() {
                return ye(e.description)
            },
            get imageURI() {
                const {
                    image: t
                } = e;
                return t && "object" == typeof t && "url_prefix" in t ? /\.(png|jpg|svg)$/.test(String(t.url_prefix)) ? t.url_prefix : `${t.url_prefix}/default256x256` : "https://yastatic.net/s3/games-static/static-data/images/bonuses/default-bonus-image.png"
            }
        });
        h("Bonus");
        var wt = Object.defineProperty,
            bt = Object.defineProperties,
            Pt = Object.getOwnPropertyDescriptors,
            Et = Object.getOwnPropertySymbols,
            St = Object.prototype.hasOwnProperty,
            Tt = Object.prototype.propertyIsEnumerable,
            At = (e, t, r) => t in e ? wt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            Ot = (e, t) => {
                for (var r in t || (t = {})) St.call(t, r) && At(e, r, t[r]);
                if (Et)
                    for (var r of Et(t)) Tt.call(t, r) && At(e, r, t[r]);
                return e
            },
            kt = (e, t) => bt(e, Pt(t)),
            Ct = (e, t, r) => new Promise(((n, a) => {
                var o = e => {
                        try {
                            i(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    },
                    s = e => {
                        try {
                            i(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    },
                    i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
                i((r = r.apply(e, t)).next())
            }));
        const It = () => ({
                params: {
                    lang: ue.i18n.lang
                }
            }),
            Dt = class {
                constructor(e) {
                    this.getCatalog = () => Ct(this, null, (function*() {
                        var e;
                        const {
                            data: t
                        } = yield l.F.postToParent(i.Aw.Catalog(It()));
                        return (null != (e = null == t ? void 0 : t.bonuses) ? e : []).map(vt)
                    })), this.getPlayerBonuses = () => Ct(this, null, (function*() {
                        const {
                            data: e
                        } = yield l.F.postToParent(i.Aw.PlayerBonuses(kt(Ot({}, It()), {
                            signed: this.signed
                        })));
                        return this.signed ? e : e ? e.map((e => kt(Ot({}, vt(e.item)), {
                            receivedAt: e.created,
                            token: e.token
                        }))) : []
                    })), this.consume = e => l.F.postToParent(i.Aw.Consume({
                        params: {
                            token: e
                        },
                        signed: this.signed
                    })).then((({
                        data: e
                    }) => e)), this.signed = Boolean(e)
                }
            };
        Dt.init = e => {
            const {
                getCatalog: t,
                getPlayerBonuses: r,
                consume: n
            } = new Dt(e);
            return {
                getCatalog: t,
                getPlayerBonuses: r,
                consume: n
            }
        };
        let _t = Dt;
        const xt = h("captureAlert");

        function Lt(e) {
            var t, r;
            if ("DIV" === e.tagName && e.getAttribute("style") && !e.querySelector("div") && !e.classList.length && !e.id) {
                const e = "OK" === (null == (t = document.querySelector("button")) ? void 0 : t.textContent) && (null == (r = document.querySelector("span")) ? void 0 : r.textContent);
                e && (xt(`popup message = ${e}`), l.F.postToParent((0, i.Bz)({
                    message: e.substring(0, 250),
                    popup: !0
                })))
            }
        }

        function Rt() {
            const e = "createUnityInstance" in window || "UnityLoader" in window;
            if (xt("captureUnityAlert isUnity", e), e && (document.querySelectorAll("div[style]:not([id]):not([class])").forEach(Lt), "undefined" != typeof MutationObserver)) {
                const e = new MutationObserver((e => {
                    e.forEach((e => {
                        "childList" === e.type && setTimeout((() => {
                            Array.from(e.addedNodes).forEach(Lt)
                        }), 0)
                    }))
                }));
                e.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }), window.addEventListener("unload", (() => {
                    e.disconnect()
                }))
            }
        }
        const Nt = new class {
            writeText(e) {
                try {
                    e = String(e)
                } catch (e) {
                    return Promise.reject(new Error("Error while stringified provided value"))
                }
                return new Promise(((t, r) => {
                    const n = y("ClipboardPublic.writeText");
                    l.F.postToParent(i.u8.WriteText({
                        text: e
                    })).then((() => t(void 0))).catch(r).finally((() => {
                        n()
                    }))
                }))
            }
        };
        class Ft {
            constructor(e = "desktop") {
                this._type = e
            }
            get type() {
                return this._type
            }
            isMobile() {
                return "mobile" === this.type
            }
            isTablet() {
                return "tablet" === this.type
            }
            isDesktop() {
                return "desktop" === this.type
            }
            isTV() {
                return "tv" === this.type
            }
        }
        var Gt = r(934),
            $t = Object.defineProperty,
            jt = Object.getOwnPropertySymbols,
            Mt = Object.prototype.hasOwnProperty,
            Ut = Object.prototype.propertyIsEnumerable,
            Bt = (e, t, r) => t in e ? $t(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            Vt = (e, t) => {
                for (var r in t || (t = {})) Mt.call(t, r) && Bt(e, r, t[r]);
                if (jt)
                    for (var r of jt(t)) Ut.call(t, r) && Bt(e, r, t[r]);
                return e
            };

        function Yt(e, t) {
            return t
        }
        const Kt = function({
            matchers: e,
            updateErrorTitle: t = Yt
        }) {
            return function(r) {
                for (const n of e) {
                    if (n.substr && r.includes(n.substr)) return {
                        message: `[grouped] ${t(r,n.title)}`,
                        additional: {
                            message: r
                        }
                    };
                    if (n.regexp) {
                        const e = r.match(n.regexp);
                        if (e) {
                            let a = null;
                            return n.groupNames && (a = [...e.copyWithin(0, 1)].reduce(((e, t, r) => {
                                var a;
                                return (null == (a = n.groupNames) ? void 0 : a[r]) ? (e[n.groupNames[r]] = t, e) : e
                            }), {})), {
                                message: `[grouped] ${t(r,n.title)}`,
                                additional: Vt({
                                    message: r
                                }, a)
                            }
                        }
                    }
                }
                return {
                    message: r
                }
            }
        }({
            matchers: [{
                regexp: /User .+ already exists in users list!/,
                title: "User already exists in users list!"
            }, {
                regexp: /\(Filename:.+Line: -?\d+\)/,
                title: "Unity"
            }, {
                substr: "UnityEngine",
                title: "Unity"
            }, {
                substr: "Dimensions must match",
                title: "Unity"
            }, {
                substr: "Loading FSB failed for audio clip",
                title: "Unity"
            }, {
                substr: "UnityLoader",
                title: "Unity"
            }, {
                substr: "FS.syncfs operations in flight at once, probably just doing extra work",
                title: "Unity"
            }, {
                substr: "GLSL",
                title: "GLSL"
            }, {
                substr: "ValerypopoffJS plugin",
                title: "ValerypopoffJS plugin"
            }, {
                substr: "https://github.com/cocos-creator/engine",
                title: "cocos-creator"
            }, {
                substr: "Wicket.Ajax",
                title: "Wicket.Ajax"
            }, {
                substr: 'Error loading sound "%s"',
                title: '"loading sound"'
            }, {
                substr: "Error loading image",
                title: '"loading image"'
            }, {
                substr: "Error loading Texture",
                title: '"loading Texture"'
            }, {
                substr: "Error loading asset",
                title: '"loading asset"'
            }, {
                substr: "Error loading audio url",
                title: '"loading audio url"'
            }, {
                substr: "Error loading animation resource",
                title: '"loading animation resource"'
            }, {
                substr: "Failed to load resource:",
                title: '"loading resource"'
            }, {
                substr: "Could not load",
                title: '"loading"'
            }, {
                substr: "Failed to load",
                title: '"loading"'
            }, {
                regexp: /[Cc]ould not allocate memory/,
                title: "working with memory"
            }, {
                substr: "Out of executable memory in function at index",
                title: "working with memory"
            }, {
                substr: "memory access out of bounds",
                title: "working with memory"
            }, {
                substr: "pre-main prep time: ",
                title: '"pre-main prep time"'
            }, {
                substr: "FAILED DIGGING: ",
                title: '"DIGGING"'
            }, {
                substr: "sth wrong with connection!",
                title: '"sth wrong with connection!"'
            }, {
                substr: "Object2D is not available",
                title: '"Object2D is not available"'
            }, {
                regexp: /^Client : Error finish action.*?respawn$/,
                title: '"finish action respawn"'
            }, {
                substr: "[TokenStorageYandex]",
                title: "TokenStorageYandex"
            }, {
                substr: "TOO_SMALL_CONTAINER",
                title: "TOO_SMALL_CONTAINER"
            }, {
                substr: "Too small container",
                title: "TOO_SMALL_CONTAINER"
            }, {
                substr: "window.cb",
                title: "Error related to window.cb"
            }, {
                substr: "Not allowed to call RecalculateBounds",
                title: "Not allowed to call RecalculateBounds"
            }, {
                regexp: /Loading chunk.*?partner-code-bundles/,
                title: "Loading chunk partner-code-bundles errors"
            }, {
                substr: "[pcode] Loading chunk",
                title: "Loading chunk partner-code-bundles errors"
            }, {
                regexp: /Loading chunk \S+ failed after \d+ retries/,
                title: "Loading chunk loadable-components errors"
            }, {
                substr: "loadable-components: failed to asynchronously load component",
                title: "Loading component loadable-components errors"
            }, {
                substr: "Please, don't try to open advertising often than once per ",
                title: "Please, don't try to open advertising often"
            }, {
                regexp: /What you can do:.*?(application\/(\d+))/i,
                title: "Cannot open adv in AdvManager in game with id {see additional}. Instead send instruction to console",
                groupNames: ["appId"]
            }, {
                regexp: /\[GAME] call alert:(.+)/i,
                title: "[GAME] call alert: {see additional}",
                groupNames: ["errorMessage"]
            }]
        });
        var Ht = Object.defineProperty,
            Wt = Object.getOwnPropertySymbols,
            qt = Object.prototype.hasOwnProperty,
            Xt = Object.prototype.propertyIsEnumerable,
            zt = (e, t, r) => t in e ? Ht(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            Jt = (e, t) => {
                for (var r in t || (t = {})) qt.call(t, r) && zt(e, r, t[r]);
                if (Wt)
                    for (var r of Wt(t)) Xt.call(t, r) && zt(e, r, t[r]);
                return e
            };

        function Qt(e, t) {
            t && (e.type = t), l.F.postToParent((0, i._X)(e)).catch((e => {
                console.warn(e)
            }))
        }

        function Zt(e) {
            return {
                data: {
                    additional: {
                        sdkVersion: 2
                    }
                },
                error: e,
                source: "game",
                sourceMethod: (0, Gt.Z)(e.stack)
            }
        }
        const er = new class {
            constructor(e, t) {
                this.source = e, this.additionalErrorData = t, this.source = e, window.addEventListener("error", this), "Promise" in window && window.addEventListener("unhandledrejection", this)
            }
            addLogger(e) {
                this.logger = e
            }
            handleEvent(e) {
                this._handleEvent(e)
            }
            _handleEvent(e, t = "error") {
                try {
                    this._unsafeHandleEvent(e, t)
                } catch (e) {
                    console.warn("Couldn't handle event in ErrorCounter!", e)
                }
            }
            _unsafeHandleEvent(e, t) {
                return "unhandledrejection" === e.type ? this._unsafeHandlePromiseRejectionEvent(e) : this._unsafeHandleErrorEvent(e, t)
            }
            _unsafeHandlePromiseRejectionEvent(e) {
                var t;
                const {
                    reason: r
                } = e;
                if (!r) return;
                let n;
                const a = {};
                r.stack && r.message ? n = r.message : (n = String(r), "[object Event]" === n ? n = "event.type: " + r.type : "[object Object]" === n && (a.unhandledObject = r, n = r.message || "Undefined error message")), (null == (t = r.target) ? void 0 : t.src) && (a.src = r.target.src);
                const o = {
                    additional: a,
                    message: "Unhandled rejection: " + n,
                    name: "UnhandledPromiseError",
                    stack: r.stack || ""
                };
                console.error(o.message, R.X4, o), this._postError(o, "unhandled")
            }
            _unsafeHandleErrorEvent(e, t) {
                var r, n, a, o, s;
                const {
                    error: i
                } = e, c = {
                    columnNumber: null != (n = null != (r = e.colno) ? r : null == i ? void 0 : i.columnNumber) ? n : -1,
                    fileName: this._trimErrorData(e.filename || (null == i ? void 0 : i.fileName) || "", 200),
                    lineNumber: null != (o = null != (a = e.lineno) ? a : null == i ? void 0 : i.lineNumber) ? o : -1,
                    message: this._trimErrorData(e.message || (null == i ? void 0 : i.message) || "", 200),
                    name: this._trimErrorData((null == i ? void 0 : i.name) || "Error", 200),
                    stack: this._trimErrorData(null != (s = null == i ? void 0 : i.stack) ? s : "", 3e3)
                };
                (this.additionalErrorData || (null == i ? void 0 : i.additional)) && (c.additional = Jt(Jt({}, null == i ? void 0 : i.additional), this.additionalErrorData)), console.error(c.message, R.X4, c), this._postError(c, t)
            }
            _trimErrorData(e, t) {
                return "string" == typeof e && e.length > t ? e.substring(0, t) : e
            }
            _postError(e, t) {
                var r;
                let n = (0, Gt.Z)(e.stack);
                "ErrorListener.handleEvent" === n && (n = "unknown"), null == (r = this.logger) || r.call(this, {
                    data: {
                        additional: e.additional || {}
                    },
                    block: `${this.source}-${t}`,
                    error: e,
                    source: this.source,
                    sourceMethod: n
                }, t)
            }
        }("game");
        er.addLogger(Qt),
            function() {
                try {
                    const e = console.error;
                    console.error = (...t) => {
                        let r = t.filter((e => e instanceof Error))[0];
                        r || (r = (e => {
                            const t = (e => e.map((e => {
                                    if ("object" == typeof e) try {
                                        return JSON.stringify(e)
                                    } catch (t) {
                                        return `${e}: ${t.message}`
                                    }
                                    return String(e)
                                })).join(" "))(e),
                                r = Kt(t),
                                n = new Error(r.message);
                            return r.additional && (n.additional = r.additional), n
                        })(t));
                        try {
                            "string" == typeof t[1] && t[1] === R.X4 ? t.splice(1, 1) : Qt(Zt(r), "console.error")
                        } catch (e) {}
                        e.apply(console, t)
                    }
                } catch (e) {
                    try {
                        Qt(Zt(e), "error")
                    } catch (e) {}
                }
            }();
        const tr = h("Events bus", "Dev", {
                background: "#0072B5",
                text: "#ffffff"
            }),
            rr = new f(tr),
            nr = [c.US, c.Tn, c.Ul],
            ar = e => {
                l.F.postToParent(i._W.ListenersChange({
                    event: e,
                    count: rr.getObserversNumber(e)
                }))
            },
            or = {
                EXIT: ar,
                HISTORY_BACK: ar,
                ACCOUNT_SELECTION_DIALOG_OPENED: ar,
                ACCOUNT_SELECTION_DIALOG_CLOSED: ar
            },
            sr = (e, t) => {
                tr(`[on]: {${e}}`);
                const r = or[e],
                    n = rr.subscribe(e, t);
                return null == r || r(e), () => {
                    n(), null == r || r(e)
                }
            },
            ir = (e, t) => {
                var r;
                tr(`[off]: {${e}}`), rr.unsubscribe(e, t), null == (r = or[e]) || r.call(or, e)
            },
            cr = (e, t) => {
                tr(`[notifyObservers]: {${e}}`, ...t ? [t] : []), rr.notifyObservers(Array.isArray(e) ? e : [e], t)
            };
        l.F.onExternalMessage(nr, (({
            data: {
                action: e,
                data: t
            }
        }) => cr(e, t)));
        const lr = h("Gameplay | Child frame", "Dev", {
                background: "#6c5b7b",
                text: "#ffffff"
            }),
            dr = e => {
                lr(`[POST]: {${e}}`), l.F.postToParent((0, i.$J)(e))
            },
            ur = new Set;
        let hr = !1;
        const pr = "function" != typeof Proxy ? e => e : (e, t, r) => hr ? e : new Proxy(e, {
                get: (e, n) => ("symbol" != typeof n && !hr && t.includes(n) && ur.add(`${r}.${n}`), e[n])
            }),
            mr = () => {
                hr || (l.F.postToParent((0, i.Iq)(Array.from(ur).join(","))), ur.clear(), hr = !0)
            };
        var gr;
        const yr = "/helpers/fake-page/1/index.html",
            fr = Symbol("promises");
        gr = fr;
        let vr = class e {
            constructor() {
                if (this[gr] = new Map, e.instance) return e.instance
            }
            getAllGames() {
                const e = this[fr].get("all");
                if (e) return e;
                const t = y("getAllGames"),
                    r = new Promise(((e, r) => l.F.postToParent(i.Rh.All({
                        lang: ue.i18n.lang
                    })).then((({
                        data: t
                    }) => {
                        var r;
                        (null == (r = window.YandexGamesSDKEnvironment) ? void 0 : r.useMockGameLinks) && (t.games.forEach((e => e.url = `${yr}`)), t.developerURL = `${yr}`), e(t)
                    })).catch((e => {
                        this[fr].delete("all"), r(e)
                    })).finally((() => t()))));
                return this[fr].set("all", r), r
            }
            getGameByID(e) {
                const t = this[fr].get(`${e}`);
                if (t) return t;
                const r = y("getGameByID"),
                    n = new Promise(((t, n) => l.F.postToParent(i.Rh.Game({
                        app_id: e,
                        lang: ue.i18n.lang
                    })).then((({
                        data: e
                    }) => {
                        var r;
                        (null == (r = window.YandexGamesSDKEnvironment) ? void 0 : r.useMockGameLinks) && e.game && (e.game.url = `${yr}`), t(e)
                    })).catch((t => {
                        this[fr].delete(`${e}`), n(t)
                    })).finally((() => r()))));
                return this[fr].set(`${e}`, n), n
            }
        };
        vr.instance = pr(new vr, ["getGameByID", "getAllGames"], "GamesAPI");
        const wr = vr.instance,
            br = class e {
                constructor() {
                    this.isReady = !1, this.startTimestamp = Date.now(), this.startReadyFallbackTimeout()
                }
                ready() {
                    if (this.isReady) return void console.warn("Don't call %cfeatures.LoadingAPI.ready() %cmore than one time.", "color: green", "color: unset");
                    this.isReady = !0;
                    const e = Date.now() - this.startTimestamp;
                    this.logGameInitTime(e, c.ur.GameReady), clearTimeout(this.readyFallbackTimerId), "function" == typeof(null == performance ? void 0 : performance.mark) && performance.mark("Game Ready")
                }
                logGameInitTime(e, t) {
                    l.F.postToParent((0, i.OI)(t, {
                        timeFromInit: e
                    }))
                }
                startReadyFallbackTimeout() {
                    this.readyFallbackTimerId = window.setTimeout((() => {
                        this.logGameInitTime(e.MAX_TIMEOUT, c.ur.GameReadyForce)
                    }), e.MAX_TIMEOUT)
                }
            };
        br.MAX_TIMEOUT = 3e4;
        let Pr = br;
        var Er;
        const Sr = {
            [c.VR.GameplayAPI]: class {
                start() {
                    dr(c.BE.Start)
                }
                stop() {
                    dr(c.BE.Stop)
                }
            },
            [c.VR.LoadingAPI]: Pr,
            [c.VR.PluginEngineDataReporterAPI]: class {
                constructor() {
                    this.isReported = !1
                }
                report(e) {
                    this.isReported ? console.warn("Don't call %cfeatures.PluginEngineDataReporterAPI.report() %cmore than one time.", "color: green", "color: unset") : (this.logData(e), this.isReported = !0)
                }
                logData(e) {
                    l.F.postToParent((0, i.Xk)(e))
                }
            }
        };
        class Tr {
            constructor(e = {}) {
                this[Er] = wr;
                for (let t in c.VR) c.VR[t] in e && e[c.VR[t]] && (this[t] = new Sr[t]);
                for (let t of c.Hn) !this[t] && (t in e && e[t] || !(t in e)) && (this[t] = new Sr[t]);
                l.F.postToParent((0, i.OI)(c.ur.GameInit))
            }
        }
        c.VR.GameplayAPI, c.VR.LoadingAPI, c.VR.PluginEngineDataReporterAPI, Er = c.VR.GamesAPI;
        var Ar = (e => (e.GAME_RATED = "GAME_RATED", e.NO_AUTH = "NO_AUTH", e.REVIEW_ALREADY_REQUESTED = "REVIEW_ALREADY_REQUESTED", e.REVIEW_WAS_REQUESTED = "REVIEW_WAS_REQUESTED", e.UNKNOWN = "UNKNOWN", e))(Ar || {});
        const Or = new class {
            canReview() {
                return new Promise((e => {
                    const t = y("Feedback.canReview");
                    l.F.postToParent(i.E0.CanReview()).then((({
                        data: t
                    }) => {
                        e(t)
                    })).catch((t => {
                        (0, m.f)(t), e({
                            reason: Ar.UNKNOWN,
                            value: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
            requestReview() {
                return new Promise((e => {
                    const t = y("Feedback.requestReview", 12e4);
                    l.F.postToParent(i.E0.RequestReview()).then((({
                        data: t
                    }) => {
                        const {
                            feedbackSent: r,
                            reason: n
                        } = t;
                        n ? ((0, m.f)(n), e({
                            feedbackSent: null != r && r
                        })) : e({
                            feedbackSent: null == r || r
                        })
                    })).catch((t => {
                        (0, m.f)(t), e({
                            feedbackSent: !1
                        })
                    })).finally((() => {
                        t()
                    }))
                }))
            }
        };

        function kr(e) {
            try {
                return "WebGLRenderingContext" in window && Boolean(e.getContext("webgl") || e.getContext("experimental-webgl") instanceof WebGLRenderingContext)
            } catch (e) {
                (0, m.f)(e, {
                    sourceMethod: "isWebGLSupported",
                    level: "warn"
                })
            }
            return !1
        }

        function Cr(e) {
            try {
                return "WebGL2RenderingContext" in window && Boolean(e.getContext("webgl2") || e.getContext("experimental-webgl2") instanceof WebGL2RenderingContext)
            } catch (e) {
                (0, m.f)(e, {
                    sourceMethod: "isWebGL2Supported",
                    level: "warn"
                })
            }
            return !1
        }

        function Ir() {
            const e = [];
            return "createUnityInstance" in window && e.push("unity"), e
        }

        function Dr() {
            const e = [],
                t = {
                    webassembly: "WebAssembly" in window,
                    webgl: kr(document.createElement("canvas")),
                    webgl2: Cr(document.createElement("canvas"))
                };
            return Object.keys(t).filter((e => t[e])).forEach((t => {
                e.push(t)
            })), e
        }
        var _r, xr = r(179),
            Lr = ((_r = Lr || {}).Finish = `${c.vA}-sessions-finish`, _r.Transaction = `${c.vA}-sessions-transaction`, _r),
            Rr = Object.defineProperty,
            Nr = Object.getOwnPropertySymbols,
            Fr = Object.prototype.hasOwnProperty,
            Gr = Object.prototype.propertyIsEnumerable,
            $r = (e, t, r) => t in e ? Rr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r,
            jr = (e, t, r) => new Promise(((n, a) => {
                var o = e => {
                        try {
                            i(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    },
                    s = e => {
                        try {
                            i(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    },
                    i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
                i((r = r.apply(e, t)).next())
            }));
        const Mr = h("Multiplayer Sessions | Child frame", "Dev", {
                background: "#b55a30",
                text: "#ffffff"
            }),
            Ur = ({
                data: {
                    action: e,
                    data: t
                }
            }) => {
                "transaction" === e ? cr(Lr.Transaction, t) : "finish" === e && cr(Lr.Finish, t)
            };
        class Br {
            constructor() {
                l.F.onExternalMessage(c.vA, Ur)
            }
            commit(e) {
                l.F.postToParent(xr.T.Commit(e))
            }
            init() {
                return jr(this, arguments, (function*(e = {}) {
                    const t = ((e, t) => {
                        for (var r in t || (t = {})) Fr.call(t, r) && $r(e, r, t[r]);
                        if (Nr)
                            for (var r of Nr(t)) Gr.call(t, r) && $r(e, r, t[r]);
                        return e
                    })({
                        isEventBased: !0
                    }, e);
                    return Mr("[init]", t), t.meta && 0 === t.count || Mr("[init] NOTE: multiplayer was initialized for recording only: {meta} or {count} parameters were not provided."), (yield l.F.postToParent(xr.T.Init(t))).data
                }))
            }
            push(e) {
                return jr(this, null, (function*() {
                    return l.F.postToParent(xr.T.Push(e))
                }))
            }
        }
        const Vr = {
            allow() {
                l.F.postToParent((0, i.Al)())
            }
        };

        function Yr(...e) {
            const t = e => e && "object" == typeof e;
            return e.reduce(((e, r) => (Object.keys(r).forEach((n => {
                const a = e[n],
                    o = r[n];
                Array.isArray(a) && Array.isArray(o) ? e[n] = a.concat(...o) : t(a) && t(o) ? e[n] = Yr(a, o) : e[n] = o
            })), e)), {})
        }

        function Kr(e, t = {}) {
            var r, n, a;
            return (null == (n = null == (r = window.YandexGamesSDKEnvironment) ? void 0 : r.request.experiments) ? void 0 : n.signed) && (t.signed = !0),
                function(e) {
                    if (!e || "object" != typeof e) return {};
                    ! function(e) {
                        "partnerId" in e && (delete e.partnerId, console.warn("`partnerId` is deprecated in the SDKv2"))
                    }(e)
                }(t), "object" == typeof(a = t) && Object.keys(a).forEach((e => {
                    "signed" !== e && (0, m.f)(new Error(`Using deprecated key in YaGames.init options: ${e}`))
                })),
                function(e = {}) {
                    return function(e) {
                        "adv" in e && N.sendOnceDeprecatedUsage("SDK init options with adv"), e.adv = e.adv || {},
                            function(e) {
                                if ("onAdvClose" in e && "function" != typeof e.onAdvClose) throw new Error('"onAdvClose" must be a function')
                            }(e.adv)
                    }(e), e
                }(Yr(null != e ? e : {}, t))
        }
        const Hr = (e = {}) => Ue(e);
        var Wr = (e, t, r) => new Promise(((n, a) => {
            var o = e => {
                    try {
                        i(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                },
                s = e => {
                    try {
                        i(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                },
                i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
            i((r = r.apply(e, t)).next())
        }));
        const qr = class {
            constructor(e) {
                this.payments = null, this.initPromise = null, this.getCatalog = () => Wr(this, null, (function*() {
                    return (yield this.ensureInitialized()).getCatalog()
                })), this.purchase = e => Wr(this, null, (function*() {
                    return (yield this.ensureInitialized()).purchase(e)
                })), this.getPurchases = () => Wr(this, null, (function*() {
                    return (yield this.ensureInitialized()).getPurchases()
                })), this.consumePurchase = e => Wr(this, null, (function*() {
                    return (yield this.ensureInitialized()).consumePurchase(e)
                })), this.signed = Boolean(e)
            }
            ensureInitialized() {
                return Wr(this, null, (function*() {
                    return this.payments ? this.payments : (this.initPromise || (this.initPromise = Ue({
                        signed: this.signed
                    }).then((e => (this.payments = e, e))).catch((e => {
                        throw this.initPromise = null, e
                    }))), this.initPromise)
                }))
            }
        };
        qr.init = e => {
            const {
                getCatalog: t,
                purchase: r,
                getPurchases: n,
                consumePurchase: a
            } = new qr(e);
            return {
                getCatalog: t,
                purchase: r,
                getPurchases: n,
                consumePurchase: a
            }
        };
        let Xr = qr;
        const zr = class {
                constructor() {
                    this.promiseWrappers = Object.create(null)
                }
                getKey(e) {
                    return JSON.stringify(e)
                }
                getFor(e) {
                    return this.promiseWrappers[this.getKey(e)]
                }
                setFor(e, t) {
                    t ? this.promiseWrappers[this.getKey(e)] = t : delete this.promiseWrappers[this.getKey(e)]
                }
                clear() {
                    this.promiseWrappers = Object.create(null)
                }
            },
            Jr = h("PlayerProxy"),
            Qr = new zr;

        function Zr() {
            return e = this, t = arguments, r = function*(e = {}) {
                var t;
                const r = null == (t = Qr.getFor(e)) ? void 0 : t.promise;
                if (r) return r;
                const n = y("getPlayer", 12e4),
                    a = new p;
                return a.promise.finally((() => {
                    n()
                })), Qr.setFor(e, a), window.setTimeout((() => {
                    Qr.setFor(e, void 0)
                }), 3e5), l.F.postToParent((0, i.HT)({
                    config: e
                })).then((({
                    data: t
                }) => {
                    const {
                        data: r,
                        signature: n
                    } = t, o = function(e, t, r) {
                        const n = new Qe(t, e);
                        return oe(n, r), pr(n, ["getPayingStatus", "getStats", "getData", "getName"], "Player")
                    }(e, r, n);
                    a.resolve(o)
                })).catch((t => {
                    Qr.setFor(e, void 0), a.reject(t)
                })), a.promise
            }, new Promise(((n, a) => {
                var o = e => {
                        try {
                            i(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    },
                    s = e => {
                        try {
                            i(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    },
                    i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
                i((r = r.apply(e, t)).next())
            }));
            var e, t, r
        }
        l.F.onExternalMessage("auth", (e => {
            ["auth-dialog-cancel", "auth-dialog-success", "changed"].includes(e.data.action) && (Jr("Clear getPlayer promises."), Qr.clear())
        }));
        class en {
            constructor() {
                this.onMessage = e => {
                    const {
                        action: t
                    } = e.data;
                    "fullscreenchange" === t && (document.dispatchEvent(new Event("fullscreenchange")), this._status = e.data.data.isFullscreen ? "on" : "off")
                }, this._status = "off", this.overrideBrowserFullscreenElement(), this.initMessaging(), this.updateStatus()
            }
            get STATUS_ON() {
                return "on"
            }
            get STATUS_OFF() {
                return "off"
            }
            get status() {
                return this._status
            }
            request() {
                const e = y("FullscreenManager.request"),
                    t = l.F.postToParent(i.Vo.RequestFullscreen());
                return t.finally((() => {
                    e()
                })), t
            }
            exit() {
                const e = y("FullscreenManager.exit"),
                    t = l.F.postToParent(i.Vo.ExitFullscreen());
                return t.finally((() => {
                    e()
                })), t
            }
            toggle() {
                const e = y("FullscreenManager.toggle"),
                    t = l.F.postToParent(i.Vo.ToggleFullscreen());
                return t.finally((() => {
                    e()
                })), t
            }
            updateStatus() {
                l.F.postToParent(i.Vo.GetState()).then((e => {
                    const {
                        isFullscreen: t
                    } = e.data;
                    this._status = t ? "on" : "off"
                }))
            }
            overrideBrowserFullscreenElement() {
                try {
                    Object.getOwnPropertyDescriptor(document, "fullscreenElement") || Object.defineProperty(document, "fullscreenElement", {
                        enumerable: !1,
                        configurable: !0,
                        get: () => this.status === this.STATUS_ON ? document.documentElement : null
                    })
                } catch (e) {
                    (0, m.f)(e)
                }
            }
            initMessaging() {
                l.F.onExternalMessage("screen-manager", this.onMessage)
            }
        }
        class tn {
            constructor() {
                this.fullscreen = new en
            }
        }
        var rn = r(7);
        const nn = Date.now(),
            an = `id_cursorHighlighter_${nn}`,
            on = `cursorHighlighter_${nn}`,
            sn = `active_${nn}`,
            cn = {
                [c.q1.EXIT]: !0
            },
            ln = ["passport.ya", "passport.yandex", "an.yandex.ru", "avatars.mds.yandex.net", "/api/"];

        function dn(e) {
            const t = Cache.prototype[e];
            Cache.prototype[e] = function(e, r) {
                return "GET" !== e.method || 0 !== e.url.indexOf("https://") || (n = e.url, ln.some((e => -1 !== n.indexOf(e)))) ? Promise.resolve() : ("ignoreSearch" in (r = r || {}) || (r.ignoreSearch = !0), t.call(this, e, r));
                var n
            }
        }
        const un = class {
                static overrideCacheSearch() {
                    ("function" != typeof Cache ? (console.warn("Can not find `Cache` function"), 0) : "function" != typeof Cache.prototype.match ? (console.warn("Can not find `Cache.match` function"), 0) : "function" == typeof Cache.prototype.matchAll || (console.warn("Can not find `Cache.matchAll` function"), 0)) && (dn("match"), dn("matchAll"))
                }
            },
            hn = new class {
                canShowPrompt() {
                    return new Promise((e => {
                        const t = y("Shortcut.canShowPrompt");
                        l.F.postToParent(i.lW.CanShowPrompt()).then((({
                            data: t
                        }) => {
                            e(t)
                        })).catch((e => {
                            (0, m.f)(e)
                        })).finally((() => {
                            t()
                        }))
                    }))
                }
                showPrompt() {
                    return new Promise((e => {
                        const t = y("Shortcut.showPrompt", 12e4);
                        l.F.postToParent(i.lW.ShowPrompt()).then((({
                            data: t
                        }) => {
                            e(t)
                        })).catch((e => {
                            (0, m.f)(e)
                        })).finally((() => {
                            t()
                        }))
                    }))
                }
            };

        function pn() {
            return new Promise((e => {
                if ("loading" === document.readyState) {
                    const t = () => {
                        "loading" !== document.readyState && (document.removeEventListener("readystatechange", t), e())
                    };
                    document.addEventListener("readystatechange", t)
                } else e()
            }))
        }
        const mn = new zr;

        function gn(e = {}) {
            const {
                clientFeatures: t = [],
                defaultFlags: r = {}
            } = e, n = mn.getFor(e);
            if (n) return n.promise;
            const a = y("get_flags/fetch"),
                o = new p;
            return o.promise.finally((() => {
                a()
            })), mn.setFor(e, o), l.F.postToParent(i.XT.Fetch({
                clientFeatures: t
            })).then((({
                data: e
            }) => {
                const t = Object.assign(r, e);
                o.resolve(t)
            })).catch((() => {
                o.resolve(r), mn.setFor(e, void 0)
            })), o.promise
        }
        class yn {
            reachGoal(e, t, r) {
                l.F.postToParent(i.eU.ReachGoal({
                    counterId: e,
                    target: t,
                    goalData: r
                }))
            }
            hit(e, t = {}) {
                l.F.postToParent(i.eU.Hit({
                    counterId: e,
                    hitData: t
                }))
            }
        }
        const fn = new yn,
            vn = e => {
                var t, r;
                if (!e.isSendingGameCustomGoalsToMetrika) return;
                const n = null == (r = null == (t = window.ym) ? void 0 : t.a) ? void 0 : r.push;
                "function" == typeof n && (window.ym.a.push = function(...t) {
                    const [r] = t, [a, o, s, i] = r;
                    if (e.metrikaCounter && "reachGoal" === o && s) {
                        const t = `${e.app.id}_${s}`,
                            r = {
                                [e.app.id]: {
                                    [s]: i || {}
                                }
                            };
                        fn.reachGoal(e.metrikaCounter, t, r)
                    }
                    return n.apply(this, t)
                })
            };
        var wn = (e, t, r) => new Promise(((n, a) => {
            var o = e => {
                    try {
                        i(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                },
                s = e => {
                    try {
                        i(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                },
                i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
            i((r = r.apply(e, t)).next())
        }));
        const bn = class {
            constructor() {
                this.getDescription = e => wn(this, null, (function*() {
                    return this.leaderboards.getLeaderboardDescription(e)
                })), this.getEntries = (e, t) => wn(this, null, (function*() {
                    return this.leaderboards.getLeaderboardEntries(e, t)
                })), this.getPlayerEntry = e => wn(this, null, (function*() {
                    return this.leaderboards.getLeaderboardPlayerEntry(e)
                })), this.setScore = (e, t, r) => wn(this, null, (function*() {
                    return this.leaderboards.setLeaderboardScore(e, t, r)
                })), this.leaderboards = new ne
            }
        };
        bn.init = () => {
            const {
                getDescription: e,
                getEntries: t,
                getPlayerEntry: r,
                setScore: n
            } = new bn;
            return {
                getDescription: e,
                getEntries: t,
                getPlayerEntry: r,
                setScore: n
            }
        };
        let Pn = bn;
        var En = (e, t, r) => new Promise(((n, a) => {
            var o = e => {
                    try {
                        i(r.next(e))
                    } catch (e) {
                        a(e)
                    }
                },
                s = e => {
                    try {
                        i(r.throw(e))
                    } catch (e) {
                        a(e)
                    }
                },
                i = e => e.done ? n(e.value) : Promise.resolve(e.value).then(o, s);
            i((r = r.apply(e, t)).next())
        }));
        const Sn = h("sdkv2");
        ! function() {
            var e;
            if (C()) xt("alert hook disabled");
            else try {
                "function" == typeof window.alert && (e = window.alert, window.alert = function() {
                    const t = arguments[0];
                    return xt(`alert message = ${t}`), l.F.postToParent((0, i.Bz)({
                        message: t.substring(0, 250)
                    })), e.apply(this, arguments)
                }), window.addEventListener("load", Rt, {
                    once: !0
                }), xt("alert hook enabled")
            } catch (e) {
                (0, m.f)(e, {
                    prefix: "game_hook_alert exp error: ",
                    level: "warn"
                })
            }
        }();
        const Tn = En(void 0, null, (function*() {
            return function({
                staticOrigin: r,
                version: n,
                logError: s
            }) {
                if (window.loadPolyfillsPromise) return window.loadPolyfillsPromise;
                let i = [
                    [e.LEGACY, Boolean(Array.prototype.at)],
                    [e.INTERSECTION_OBSERVER, Boolean("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)],
                    [e.SMOOTH_SCROLL, Boolean("scrollBehavior" in document.documentElement.style)],
                    [e.ABORT_CONTROLLER, "undefined" != typeof AbortController],
                    [e.GLOBAL_THIS, "object" == typeof globalThis],
                    [e.RESIZE_OBSERVER, "function" == typeof window.ResizeObserver]
                ].filter((([, e]) => !e));
                return window.loadPolyfillsPromise = new Promise(((e, o) => {
                    i.length ? document.head.appendChild(t({
                        id: "loadPolyfillHash",
                        src: a(r, `stats-hash.js?v=${n||(new Date).setUTCHours(12,0,0,0)}`),
                        onErrCb: o,
                        onLoadCb: e
                    })) : e()
                })).then((() => Promise.all(i.map((([e]) => new Promise(((n, a) => {
                    document.head.appendChild(t({
                        id: e,
                        src: o(r, e),
                        onErrCb: a,
                        onLoadCb: n
                    }))
                }))))))).catch((e => {
                    s({
                        block: "Polyfill",
                        message: "Error while loading polyfills",
                        additional: {
                            error: e
                        }
                    })
                })), window.loadPolyfillsPromise
            }({
                staticOrigin: "//yastatic.net/s3/games-static/_/build",
                logError: (e, t) => (0, m.f)(t, e)
            })
        })).then((() => {
            (() => {
                // Patched: disabled Yandex redirect
            })(), l.F.postToParent((0, i.Ry)({
                    url: location.href,
                    draftDetectedInIframe: C()
                })), window.loadEnvironmentPromise = window.loadEnvironmentPromise || new Promise(((e, t) => {
                    const r = y("loadEnvironment");
                    l.F.postToParent((0, i.VT)()).then((({
                        data: t
                    }) => {
                        $.sdkBackendURL = String(t.enviroment.sdkBackendURL), Object.freeze($), delete t.enviroment.sdkBackendURL, e(t)
                    })).catch((e => {
                        t(e)
                    })).finally((() => {
                        r()
                    }))
                })).then((e => {
                    const t = !("enviroment" in e && "options" in e),
                        r = t ? e : e.enviroment;
                    return window.YandexGamesSDKEnvironment = r, vn(r), Sn("APP_VERSION", r.APP_VERSION), !t && e.options
                })),
                function() {
                    const e = s((() => l.F.postToParent((0, i.Vw)())), 2e3);
                    ["click", "keydown", "keyup", "mousedown", "mouseenter", "mouseleave", "mouseup", "pointerup", "touchcancel", "touchend", "touchmove", "touchstart"].forEach((t => document.addEventListener(t, e, {
                        passive: !0,
                        capture: !0
                    })))
                }()
        }));
        let An, On;
        class kn {
            constructor(e) {
                var t, r;
                e = Kr(e), this.EVENTS = {
                    BONUS_AWARDED: c.q1.BONUS_AWARDED,
                    EXIT: c.q1.EXIT,
                    HISTORY_BACK: c.q1.HISTORY_BACK,
                    ACCOUNT_SELECTION_DIALOG_OPENED: c.q1.ACCOUNT_SELECTION_DIALOG_OPENED,
                    ACCOUNT_SELECTION_DIALOG_CLOSED: c.q1.ACCOUNT_SELECTION_DIALOG_CLOSED
                }, this.dispatchEvent = function(e, t) {
                    const r = y("getSdkEventsDispatcher");
                    return new Promise(((n, a) => {
                        if (!(e in cn)) {
                            const t = `Yandex SDK Event ${e} is not in supported.`;
                            return console.warn(t), void a(new Error(t))
                        }
                        const o = {};
                        if (void 0 !== t) try {
                            o.detail = JSON.stringify(t)
                        } catch (e) {
                            return console.warn(e), void a(new Error('Wrong "detail" argument'))
                        }
                        l.F.postToParent((0, i.TI)(e, o)).then((() => {
                            n(!0)
                        })).catch((e => {
                            a(e)
                        })).finally((() => {
                            r()
                        }))
                    }))
                }, this.onEvent = (e, t) => (console.warn("Deprecated usage of `ysdk.onEvent`, please use `ysdk.on(...)` instead."), sr(e, t)), this.achievements = P.init(), this.adv = pr(new _(e), ["showBannerAdv"], "AdvManager"), this.analytics = {
                    yaMetrikaCounter: pr(new yn, ["hit", "reachGoal"], "YaMetrikaCounter")
                }, this.auth = x, this.bonuses = _t.init(e.signed), this.clipboard = Nt, this.deviceInfo = new Ft(e.deviceType), In.deviceInfo = this.deviceInfo, this.environment = (e => {
                    if (!new URLSearchParams(location.search).get("debug-mode") || "function" != typeof Proxy) return e;
                    const t = Object.assign({}, e);
                    return Object.defineProperty(t, "i18n", {
                        get() {
                            const t = e.i18n;
                            return new Proxy(t, {
                                get: (e, t) => ("lang" === t && l.F.postToParent(he.i.I18n()), e[t])
                            })
                        }
                    }), t
                })(ue), this.feedback = Or, this.isAvailableMethod = (r = this, e => {
                    const t = y("isAvailableMethod"),
                        n = l.F.postToParent(i.sC.CheckAvailability({
                            methodToVerify: e
                        })).then((({
                            data: t
                        }) => {
                            const {
                                isAvailable: n
                            } = t;
                            if (!n) return !1;
                            const a = {
                                    leaderboards: ne,
                                    payments: Me,
                                    player: Qe,
                                    storage: ct.getCustomLocalStorage()
                                },
                                o = e.split(".");
                            let s = (i = ft(ft({}, a), r), c = {
                                leaderboards: ft({
                                    getLeaderboardDescription: ne.prototype.getLeaderboardDescription,
                                    getLeaderboardEntries: ne.prototype.getLeaderboardEntries,
                                    getLeaderboardPlayerEntry: ne.prototype.getLeaderboardPlayerEntry,
                                    setLeaderboardScore: ne.prototype.setLeaderboardScore
                                }, r.leaderboards)
                            }, ut(i, ht(c)));
                            var i, c;
                            for (let e = 0; e < o.length; e++) {
                                const t = s[o[e]];
                                if (!t) return !1;
                                if (e === o.length - 1) return "function" == typeof t;
                                if (!L(t)) return !1;
                                s = L(t.prototype) ? t.prototype : t
                            }
                            return !1
                        }));
                    return n.finally((() => {
                        t()
                    })), n
                }), this.shortcut = hn, this.getPlayer = Zr, this.getStorage = lt, this.multiplayer = (() => {
                    const e = new Br;
                    return {
                        get sessions() {
                            return e
                        }
                    }
                })(), this.notifications = Vr, this.getLeaderboards = ae, this.leaderboards = Pn.init(), this.getPayments = Hr, this.payments = Xr.init(e.signed), this.screen = new tn, this.features = pr(new Tr(e.features), [c.VR.GameplayAPI, c.VR.LoadingAPI], "FeatureManager"), this.yandexApp = {
                    enabled: Boolean(null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.isYandexApp)
                }, this.serverTime = function() {
                    var e, t;
                    const r = ce(),
                        n = (null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.serverTime) || r,
                        a = (null == (t = window.YandexGamesSDKEnvironment) ? void 0 : t.parentTimeOrigin) || r,
                        o = r - a,
                        s = "undefined" != typeof performance ? performance.now.bind(performance) : () => Date.now() - r;
                    return () => new Date(n + o + s()).valueOf()
                }(), this.getFlags = gn, this.dispatch = cr, this.on = sr, this.off = ir
            }
        }

        function Cn(e) {
            if ("complete" === document.readyState) e();
            else {
                const t = () => {
                    e(), window.removeEventListener("load", t)
                };
                window.addEventListener("load", t)
            }
        }
        try {
            On = new URLSearchParams(location.hash.slice(1)).get("device-type")
        } catch (e) {}
        class In {
            constructor() {
                throw new Error("Please, use `YaGames.init` instead.")
            }
            static longtaskObserver() {
                var e;
                const t = "longtask";
                if ("undefined" != typeof PerformanceObserver && (null == (e = PerformanceObserver.supportedEntryTypes) ? void 0 : e.includes(t))) {
                    let e;
                    const r = () => {
                            clearTimeout(e), e = setTimeout((() => {
                                "complete" === document.readyState ? n.disconnect() : r()
                            }), 5e3)
                        },
                        n = new PerformanceObserver((e => {
                            e.getEntries().forEach((() => {
                                l.F.postToParent((0, i.jt)()), r()
                            }))
                        }));
                    n.observe({
                        entryTypes: [t]
                    })
                }
                "complete" === document.readyState ? l.F.postToParent((0, i.X0)()) : window.addEventListener("load", (() => {
                    l.F.postToParent((0, i.X0)())
                }))
            }
            static init(e) {
                return En(this, null, (function*() {
                    let t = location.hash;
                    try {
                        const e = yield En(void 0, null, (function*() {
                            let e;
                            try {
                                e = yield(t = function*() {
                                    return new Promise(((e, t) => {
                                        const r = `${Date.now()}-${Math.random()}`,
                                            n = setTimeout((() => {
                                                t(new Error("Get external iframe timeout"))
                                            }), 500);
                                        window.addEventListener("message", (function t(a) {
                                            const {
                                                data: o
                                            } = function(e) {
                                                try {
                                                    return {
                                                        data: JSON.parse(e),
                                                        error: null
                                                    }
                                                } catch (e) {
                                                    return {
                                                        data: null,
                                                        error: e
                                                    }
                                                }
                                            }(a.data);
                                            o && o.messageId === r && (window.removeEventListener("message", t), clearTimeout(n), e(o.payload))
                                        })), window.parent.postMessage(JSON.stringify({
                                            source: "YandexGamesSDK",
                                            actionName: "GET_IFRAME_ORIGIN_SRC",
                                            channel: "EARLY_SDK_EVENT",
                                            messageId: r
                                        }), "*")
                                    }))
                                }, new Promise(((e, r) => {
                                    var n = e => {
                                            try {
                                                o(t.next(e))
                                            } catch (e) {
                                                r(e)
                                            }
                                        },
                                        a = e => {
                                            try {
                                                o(t.throw(e))
                                            } catch (e) {
                                                r(e)
                                            }
                                        },
                                        o = t => t.done ? e(t.value) : Promise.resolve(t.value).then(n, a);
                                    o((t = t.apply(void 0, null)).next())
                                })))
                            } catch (e) {
                                console.warn("Error get IFrameURL", e)
                            }
                            var t;
                            return new URL(e || location.href)
                        }));
                        t = new URL(e).hash
                    } catch (e) {}
                    return An ? (console.warn("YaGames was initialized"), An) : (this.longtaskObserver(), Sn("Start initialization"), yield Tn, An = new Promise(((r, n) => {
                        ! function() {
                            const e = () => {
                                l.F.postToParent((0, i.Sd)()), window.removeEventListener("load", e)
                            };
                            "complete" === document.readyState ? e() : window.addEventListener("load", e)
                        }();
                        const a = a => {
                            try {
                                let n = Kr(a, e);
                                if (!n.deviceType) try {
                                    n.deviceType = new URLSearchParams(t.slice(1)).get("device-type")
                                } catch (e) {
                                    (0, m.f)(e, {
                                        message: "No deviceType in options"
                                    })
                                }
                                pn().then((() => {
                                    const e = new kn(n);
                                    e.environment.isTelegram && W("loading", {
                                            value: 100
                                        }), n.hasAuth && e.getPlayer(), window.setTimeout(mr, 6e4), r(pr(e, ["auth", "getFlags", "getLeaderboards", "getPayments", "getStorage", "serverTime"], "SDK")),
                                        function() {
                                            if (!new URLSearchParams(location.search).get("debug-mode")) return;
                                            const e = e => {
                                                    const {
                                                        altKey: t,
                                                        code: r,
                                                        ctrlKey: n,
                                                        key: a,
                                                        metaKey: o,
                                                        shiftKey: s
                                                    } = e;
                                                    l.F.postToParent(rn.C.Keydown({
                                                        keydown: {
                                                            altKey: t,
                                                            code: r,
                                                            ctrlKey: n,
                                                            key: a,
                                                            metaKey: o,
                                                            shiftKey: s
                                                        }
                                                    }))
                                                },
                                                {
                                                    startHighlighting: t,
                                                    stopHighlighting: r
                                                } = (e => {
                                                    let t;
                                                    e || (() => {
                                                        if (document.head.querySelector(`#${an}`)) return;
                                                        const e = document.createElement("style");
                                                        e.id = an, e.innerHTML = `\n        .${on} {\n            position: absolute;\n            z-index: 1000;\n\n            display: none;\n\n            width: 16px;\n            height: 16px;\n\n            pointer-events: none;\n\n            border-width: 3px;\n            border-style: solid;\n            border-radius: 50%;\n\n            transform: translate(-50%, -50%);\n        }\n\n        .${on}.${sn} {\n            display: initial;\n        }\n\n        .${on}[data-button="0"] {\n            border-color: #ff0000;\n        }\n\n        .${on}[data-button="1"] {\n            border-color: #00ff00;\n        }\n\n        .${on}[data-button="2"] {\n            border-color: #5641ff;\n        }\n    `, document.head.appendChild(e)
                                                    })();
                                                    let r, n, a, o = !1;
                                                    const s = document.createElement("div"),
                                                        {
                                                            activeClass: i = sn,
                                                            mainClass: c = on
                                                        } = null != e ? e : {};
                                                    s.classList.add(c), document.body.appendChild(s);
                                                    const l = (e, t) => {
                                                            n = e, a = t, r || (r = requestAnimationFrame((() => {
                                                                r = 0, s.style.left = `${n}px`, s.style.top = `${a}px`
                                                            })))
                                                        },
                                                        d = ({
                                                            button: e,
                                                            pageX: r,
                                                            pageY: n
                                                        }) => {
                                                            clearTimeout(t), o = !0, s.classList.add(i), s.dataset.button = String(e), l(r, n)
                                                        },
                                                        u = ({
                                                            pageX: e,
                                                            pageY: t
                                                        }) => {
                                                            o && l(e, t)
                                                        },
                                                        h = () => {
                                                            t = setTimeout((() => s.classList.remove(i)), 250), o = !1
                                                        };
                                                    return {
                                                        startHighlighting: () => {
                                                            document.addEventListener("mousedown", d), document.addEventListener("mousemove", u), document.addEventListener("mouseup", h), document.addEventListener("onblur", h)
                                                        },
                                                        stopHighlighting: () => {
                                                            document.removeEventListener("mousedown", d), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", h), document.removeEventListener("onblur", h), s.classList.remove(i)
                                                        }
                                                    }
                                                })();
                                            l.F.onExternalMessage(c.cV, (({
                                                data: {
                                                    action: n
                                                }
                                            }) => {
                                                switch (n) {
                                                    case "start":
                                                        t(), document.addEventListener("keydown", e);
                                                        break;
                                                    case "stop":
                                                        r(), document.removeEventListener("keydown", e)
                                                }
                                            }))
                                        }()
                                }))
                            } catch (e) {
                                (0, m.f)(e), n(e)
                            }
                        };
                        window.loadEnvironmentPromise.then((e => {
                            e ? a(e) : new Promise(((e, t) => {
                                const r = y("loadOptions");
                                l.F.postToParent((0, i.Gd)()).then((({
                                    data: t
                                }) => {
                                    e(t)
                                })).catch((e => {
                                    t(e)
                                })).finally((() => {
                                    r()
                                }))
                            })).then(a).catch((e => {
                                console.warn(`Options load failed with error ${e}`), a()
                            }))
                        })).catch((e => {
                            (0, m.f)(e), a()
                        })), setTimeout((() => {
                            const e = {
                                clientTech: Dr(),
                                gameTech: Ir()
                            };
                            Sn("checkAndSendGameInfo tech data:", e), Cn((() => {
                                l.F.postToParent((0, i.cp)(e))
                            }))
                        }), 1e4)
                    })), An.then((() => Sn("Initialized"))), An)
                }))
            }
        }
        if (In.deviceInfo = new Ft(On), window.YaGames && window.YaGamesAdded) {
            const e = 'YaGames is already defined. Please, check double <script src="https://yandex.ru/games/sdk/v2"> on the page.';
            C() && l.F.postToParent((0, i.qs)(new Error(e))), (0, m.T)(new Error(e))
        } else {
            if (window.parent !== window) {
                const e = (0, i.ce)();
                console.info(`SDK Init. Version: ${e.data.sdkVersion}. Is loader: ${e.data.isSdkLoader}.`), l.F.postToParent(e)
            }
            try {
                ct.setup()
            } catch (e) {
                (0, m.f)(e)
            }
            window.top !== window && pn().then((function() {
                Object.values(i.N3).forEach((e => {
                    const t = e(),
                        [r] = t.action.split(c.ej);
                    document.addEventListener(r, (() => l.F.postToParent(t)), !0)
                }))
            })), un.overrideCacheSearch(), "SecurityPolicyViolationEvent" in window ? window.addEventListener("securitypolicyviolation", (({
                blockedURI: e,
                columnNumber: t,
                disposition: r,
                documentURI: n,
                effectiveDirective: a,
                lineNumber: o,
                originalPolicy: s,
                referrer: c,
                sample: d,
                sourceFile: u,
                statusCode: h,
                violatedDirective: p
            }) => {
                l.F.postToParent((0, i.TT)({
                    blockedURI: e,
                    columnNumber: t,
                    disposition: r,
                    documentURI: n,
                    effectiveDirective: a,
                    lineNumber: o,
                    originalPolicy: s,
                    referrer: c,
                    sample: d,
                    sourceFile: u,
                    statusCode: h,
                    violatedDirective: p
                }))
            })) : console.warn("SecurityPolicyViolationEvent is not available for this browser")
        }
        Cn((() => {
            l.F.postToParent((0, i.qf)())
        })), window.YaGamesAdded = !0, window.YaGames = In;
        const Dn = In
    })(), YaGames = n.default
})();