(function(){
    if (window._pc_loaded || /MSIE|Trident/.test(window.navigator.userAgent)) { return; }
        window._pc_loaded = true;
        var pushcrewConfig = {
        companyName: "Gaurav\'s Blog",
        hash: "238fb34554ae3f8c70d499d26529b594",
        pageClickTrackingConcent: "0",
        trackingBarText: "",
        defaultPageClickTrackingPermission: "1",
        origin: "https",
        subdomainFlag: "0",
        swPath: "/gaurav.js",
        firefoxSwPath: "/gaurav.js",
        manifestUrl: "/manifest.json",
        serverSyncUrl: "https://pushcrew.com",
        subdomain: "gauravmuk180520",
        domainForStorageUtil: "self",
        selfHostedSubdomainUrl: "",
        triggerAutomaticOptIn: 1,
        secondsTrigger: 5,
        isNativeOptin: 1,
        safariWebsitePushId: "",
        unsubscribeNCFlag: 0,
        pcBranding: 0,
        isShopifyConnectedAccount: 0,
        migrationDetails: 0,
        enableGA: false,
        gaId: '',
        jsAPIVersion: 4,
        segmentations: [],
        clickSegmentations: [],
        shopifySegmentations: [],
        servicesServerURL: "https://dacdn.pushcrew.com",            
        showPreferenceModal: "0",
        vapidPublicKey: "BKNjlN8MqTuyhnDRDKdojBR-drmiEDl909hVuzmmolcQyC9D7WP4fVXvACGN8ALpYJq5GL24X2-Bh1htA-MRF6E",
        isInactive: 0,
        isActiveAccount: 1,
        engage: 1,
        isAMPEnabled: 1,
        includeUrls: ".*",
        excludeUrls: "",
        forceOneStep: 0,
        style: {
            url: "https://cdn.pushcrew.com/css/https-v4.css",
            twoStepStyleUrl: "https://cdn.pushcrew.com/css/httpFront-v4.css",
            type: "safari",
            iconUrl: "https://cdn.pushcrew.com/img/logos/238fb34554ae3f8c70d499d26529b594/3b21fa13-3918-4275-8f65-162b7d85c692.png",
            allowTextChildWindow: "",
            offerTextChildWindow: "Get updates and offers from Gaurav\'s Blog by subscribing to push notifications.",
            chicketText: "Get Notifications",
            chickletBgColor: "#4D9DE0",
            chickletTextColor: "#FFFFFF",
            chickletPosition: "tr",
            chromeTitle: "ct1",
            chromeSubtitle: "ct2",
            safariTitle: "The website Gaurav\'s Blog would like to send you push notifications.",
            safariSubtitle: "Notifications can be turned off anytime from browser settings.",
            allowText: "Allow",
            dontAllowText: "Don\'t Allow",
            brandingType: 0,
            brandingText: "",
            isMobileEnabled: 1,
            safariMobileTitle: "",
            mobileChickletPosition: "mobile-chicklet-right"
        }
    };

    const HTTP = false;
    const HTTPS = true;
    const DOMAIN_MIGRATION = false;
    const SERVICE_WORKER = false;
    const HTTPCHILD = false;

    window.PC = window.PC || {}; PC.version = '1.0.98';
;(function() {
var declarations, detectPrivateMode = {}, detectBrowser = {}, vwoUtils_escapeHTML, vwoUtils_url_utils, vwoUtils_url_url, pcUtils, NativeConstants, CustomEvents = {}, storageUtil, generateUuid, AppConstants = {}, globalConfig, jquery, customizejQuery, iframe = {}, setSubscriberId, tslib, IndexedDb = {}, IndexedDbOperations = {}, ThirdPartyIntegrations = {}, SupportedEvents = {}, api, pushSubscription, vwoUtils_utils_storage, vwoUtils_operators, vwoUtils_trigger, vwoUtils_utils_utils, triggerWrapper, AddToCartModule, CompletedOrder, ShopifyEventHandler, ecommerceEvents, deletePcBrowserStorage, manageSubscription, domainMigration, sideButton, notificationPopupData, defaultTexts, mobileDom, desktopDom, notificationPopup, branding, bindClickListeners, setApiReady, httpsMain, vwoUtils_segmentation, vwoUtils_pc_segmentation, vwoUtils_vwo_lib, pushcrewtracker, pushcrewtrackerinit = {}, src_https_without_tracker;
declarations = function () {
  /* jshint camelcase:false */
  // Global object to be exposed for VWO api
  window.VWO = window.VWO || [];
  // Internal variable on VWO, used for testing purpose only
  window.VWO._ = window.VWO._ || {};
  // Data variable on VWO that held account and visitor level information
  window.VWO.data = window.VWO.data || {};
  // vwo experiments ids array
  window._vwo_exp_ids = window._vwo_exp_ids || [];
  // vwo experiments object
  window._vwo_exp = window._vwo_exp || {};
  // vwo server url, on which all calls to be sent
  window._vwo_server_url = window._vwo_server_url || '//dev.visualwebsiteoptimizer.com/';
  // _vis_opt_queue, user api to run any code related to vwo
  window._vis_opt_queue = window._vis_opt_queue || [];
  window.PC = window.PC || {};  /* jshint camelcase:true */
}();
detectPrivateMode = function (exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  // Source: https://gist.github.com/jherax/a81c8c132d09cc354a0e2cb911841ff1
  function isPrivateMode() {
    return new Promise(function (resolve) {
      var yes = function () {
        return resolve(true);
      };
      // is in private mode
      var not = function () {
        return resolve(false);
      };
      // not in private mode
      function detectChromeOpera() {
        var _a;
        // https://developers.google.com/web/updates/2017/08/estimating-available-storage-space
        var isChromeOpera = /(?=.*(opera|chrome)).*/i.test(navigator.userAgent) && ((_a = navigator.storage) === null || _a === void 0 ? void 0 : _a.estimate);
        if (isChromeOpera) {
          navigator.storage.estimate().then(function (_a) {
            var quota = _a.quota;
            quota < 120000000 ? yes() : not();
          });
        }
        return !!isChromeOpera;
      }
      function detectFirefox() {
        var isMozillaFirefox = 'MozAppearance' in document.documentElement.style;
        if (isMozillaFirefox) {
          if (indexedDB == null)
            yes();
          else {
            var db = indexedDB.open('inPrivate');
            db.onsuccess = not;
            db.onerror = yes;
          }
        }
        return isMozillaFirefox;
      }
      function detectSafari() {
        var isSafari = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
        if (isSafari) {
          var testLocalStorage = function () {
            try {
              if (localStorage.length)
                not();
              else {
                localStorage.setItem('inPrivate', '0');
                localStorage.removeItem('inPrivate');
                not();
              }
            } catch (_) {
              navigator.cookieEnabled ? yes() : not();
            }
            return true;
          };
          var version = parseInt(isSafari[1], 10);
          if (version < 11)
            return testLocalStorage();
          try {
            window.openDatabase(null, null, null, null);
            not();
          } catch (_) {
            yes();
          }
        }
        return !!isSafari;
      }
      function detectEdgeIE10() {
        var isEdgeIE10 = !window.indexedDB && (window.PointerEvent || window.MSPointerEvent);
        if (isEdgeIE10)
          yes();
        return !!isEdgeIE10;
      }
      // when a browser is detected, it runs tests for that browser
      // and skips pointless testing for other browsers.
      if (detectChromeOpera())
        return;
      if (detectFirefox())
        return;
      if (detectSafari())
        return;
      if (detectEdgeIE10())
        return;
      // default navigation mode
      return not();
    });
  }
  exports.isPrivateMode = isPrivateMode;
  return exports;
}(detectPrivateMode);
!function (e, t) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd === false ? define('bowser', [], t) : 'object' == typeof exports ? exports.bowser = t() : e.bowser = t();
}(this, function () {
  return function (e) {
    var t = {};
    function r(n) {
      if (t[n])
        return t[n].exports;
      var i = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }
    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t)
        return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, 'default', {
          enumerable: !0,
          value: e
        }), 2 & t && 'string' != typeof e)
        for (var i in e)
          r.d(n, i, function (t) {
            return e[t];
          }.bind(null, i));
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, 'a', t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = '', r(r.s = 90);
  }({
    17: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.default = void 0;
      var n = r(18), i = function () {
          function e() {
          }
          return e.getFirstMatch = function (e, t) {
            var r = t.match(e);
            return r && r.length > 0 && r[1] || '';
          }, e.getSecondMatch = function (e, t) {
            var r = t.match(e);
            return r && r.length > 1 && r[2] || '';
          }, e.matchAndReturnConst = function (e, t, r) {
            if (e.test(t))
              return r;
          }, e.getWindowsVersionName = function (e) {
            switch (e) {
            case 'NT':
              return 'NT';
            case 'XP':
              return 'XP';
            case 'NT 5.0':
              return '2000';
            case 'NT 5.1':
              return 'XP';
            case 'NT 5.2':
              return '2003';
            case 'NT 6.0':
              return 'Vista';
            case 'NT 6.1':
              return '7';
            case 'NT 6.2':
              return '8';
            case 'NT 6.3':
              return '8.1';
            case 'NT 10.0':
              return '10';
            default:
              return;
            }
          }, e.getMacOSVersionName = function (e) {
            var t = e.split('.').splice(0, 2).map(function (e) {
              return parseInt(e, 10) || 0;
            });
            if (t.push(0), 10 === t[0])
              switch (t[1]) {
              case 5:
                return 'Leopard';
              case 6:
                return 'Snow Leopard';
              case 7:
                return 'Lion';
              case 8:
                return 'Mountain Lion';
              case 9:
                return 'Mavericks';
              case 10:
                return 'Yosemite';
              case 11:
                return 'El Capitan';
              case 12:
                return 'Sierra';
              case 13:
                return 'High Sierra';
              case 14:
                return 'Mojave';
              case 15:
                return 'Catalina';
              default:
                return;
              }
          }, e.getAndroidVersionName = function (e) {
            var t = e.split('.').splice(0, 2).map(function (e) {
              return parseInt(e, 10) || 0;
            });
            if (t.push(0), !(1 === t[0] && t[1] < 5))
              return 1 === t[0] && t[1] < 6 ? 'Cupcake' : 1 === t[0] && t[1] >= 6 ? 'Donut' : 2 === t[0] && t[1] < 2 ? 'Eclair' : 2 === t[0] && 2 === t[1] ? 'Froyo' : 2 === t[0] && t[1] > 2 ? 'Gingerbread' : 3 === t[0] ? 'Honeycomb' : 4 === t[0] && t[1] < 1 ? 'Ice Cream Sandwich' : 4 === t[0] && t[1] < 4 ? 'Jelly Bean' : 4 === t[0] && t[1] >= 4 ? 'KitKat' : 5 === t[0] ? 'Lollipop' : 6 === t[0] ? 'Marshmallow' : 7 === t[0] ? 'Nougat' : 8 === t[0] ? 'Oreo' : 9 === t[0] ? 'Pie' : void 0;
          }, e.getVersionPrecision = function (e) {
            return e.split('.').length;
          }, e.compareVersions = function (t, r, n) {
            void 0 === n && (n = !1);
            var i = e.getVersionPrecision(t), s = e.getVersionPrecision(r), o = Math.max(i, s), a = 0, u = e.map([
                t,
                r
              ], function (t) {
                var r = o - e.getVersionPrecision(t), n = t + new Array(r + 1).join('.0');
                return e.map(n.split('.'), function (e) {
                  return new Array(20 - e.length).join('0') + e;
                }).reverse();
              });
            for (n && (a = o - Math.min(i, s)), o -= 1; o >= a;) {
              if (u[0][o] > u[1][o])
                return 1;
              if (u[0][o] === u[1][o]) {
                if (o === a)
                  return 0;
                o -= 1;
              } else if (u[0][o] < u[1][o])
                return -1;
            }
          }, e.map = function (e, t) {
            var r, n = [];
            if (Array.prototype.map)
              return Array.prototype.map.call(e, t);
            for (r = 0; r < e.length; r += 1)
              n.push(t(e[r]));
            return n;
          }, e.find = function (e, t) {
            var r, n;
            if (Array.prototype.find)
              return Array.prototype.find.call(e, t);
            for (r = 0, n = e.length; r < n; r += 1) {
              var i = e[r];
              if (t(i, r))
                return i;
            }
          }, e.assign = function (e) {
            for (var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
              s[o - 1] = arguments[o];
            if (Object.assign)
              return Object.assign.apply(Object, [e].concat(s));
            var a = function () {
              var e = s[t];
              'object' == typeof e && null !== e && Object.keys(e).forEach(function (t) {
                n[t] = e[t];
              });
            };
            for (t = 0, r = s.length; t < r; t += 1)
              a();
            return e;
          }, e.getBrowserAlias = function (e) {
            return n.BROWSER_ALIASES_MAP[e];
          }, e.getBrowserTypeByAlias = function (e) {
            return n.BROWSER_MAP[e] || '';
          }, e;
        }();
      t.default = i, e.exports = t.default;
    },
    18: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
      t.BROWSER_ALIASES_MAP = {
        'Amazon Silk': 'amazon_silk',
        'Android Browser': 'android',
        Bada: 'bada',
        BlackBerry: 'blackberry',
        Chrome: 'chrome',
        Chromium: 'chromium',
        Electron: 'electron',
        Epiphany: 'epiphany',
        Firefox: 'firefox',
        Focus: 'focus',
        Generic: 'generic',
        'Google Search': 'google_search',
        Googlebot: 'googlebot',
        'Internet Explorer': 'ie',
        'K-Meleon': 'k_meleon',
        Maxthon: 'maxthon',
        'Microsoft Edge': 'edge',
        'MZ Browser': 'mz',
        'NAVER Whale Browser': 'naver',
        Opera: 'opera',
        'Opera Coast': 'opera_coast',
        PhantomJS: 'phantomjs',
        Puffin: 'puffin',
        QupZilla: 'qupzilla',
        QQ: 'qq',
        QQLite: 'qqlite',
        Safari: 'safari',
        Sailfish: 'sailfish',
        'Samsung Internet for Android': 'samsung_internet',
        SeaMonkey: 'seamonkey',
        Sleipnir: 'sleipnir',
        Swing: 'swing',
        Tizen: 'tizen',
        'UC Browser': 'uc',
        Vivaldi: 'vivaldi',
        'WebOS Browser': 'webos',
        WeChat: 'wechat',
        'Yandex Browser': 'yandex',
        Roku: 'roku'
      };
      t.BROWSER_MAP = {
        amazon_silk: 'Amazon Silk',
        android: 'Android Browser',
        bada: 'Bada',
        blackberry: 'BlackBerry',
        chrome: 'Chrome',
        chromium: 'Chromium',
        electron: 'Electron',
        epiphany: 'Epiphany',
        firefox: 'Firefox',
        focus: 'Focus',
        generic: 'Generic',
        googlebot: 'Googlebot',
        google_search: 'Google Search',
        ie: 'Internet Explorer',
        k_meleon: 'K-Meleon',
        maxthon: 'Maxthon',
        edge: 'Microsoft Edge',
        mz: 'MZ Browser',
        naver: 'NAVER Whale Browser',
        opera: 'Opera',
        opera_coast: 'Opera Coast',
        phantomjs: 'PhantomJS',
        puffin: 'Puffin',
        qupzilla: 'QupZilla',
        qq: 'QQ Browser',
        qqlite: 'QQ Browser Lite',
        safari: 'Safari',
        sailfish: 'Sailfish',
        samsung_internet: 'Samsung Internet for Android',
        seamonkey: 'SeaMonkey',
        sleipnir: 'Sleipnir',
        swing: 'Swing',
        tizen: 'Tizen',
        uc: 'UC Browser',
        vivaldi: 'Vivaldi',
        webos: 'WebOS Browser',
        wechat: 'WeChat',
        yandex: 'Yandex Browser'
      };
      t.PLATFORMS_MAP = {
        tablet: 'tablet',
        mobile: 'mobile',
        desktop: 'desktop',
        tv: 'tv'
      };
      t.OS_MAP = {
        WindowsPhone: 'Windows Phone',
        Windows: 'Windows',
        MacOS: 'macOS',
        iOS: 'iOS',
        Android: 'Android',
        WebOS: 'WebOS',
        BlackBerry: 'BlackBerry',
        Bada: 'Bada',
        Tizen: 'Tizen',
        Linux: 'Linux',
        ChromeOS: 'Chrome OS',
        PlayStation4: 'PlayStation 4',
        Roku: 'Roku'
      };
      t.ENGINE_MAP = {
        EdgeHTML: 'EdgeHTML',
        Blink: 'Blink',
        Trident: 'Trident',
        Presto: 'Presto',
        Gecko: 'Gecko',
        WebKit: 'WebKit'
      };
    },
    90: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.default = void 0;
      var n, i = (n = r(91)) && n.__esModule ? n : { default: n }, s = r(18);
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      var a = function () {
        function e() {
        }
        var t, r, n;
        return e.getParser = function (e, t) {
          if (void 0 === t && (t = !1), 'string' != typeof e)
            throw new Error('UserAgent should be a string');
          return new i.default(e, t);
        }, e.parse = function (e) {
          return new i.default(e).getResult();
        }, t = e, n = [
          {
            key: 'BROWSER_MAP',
            get: function () {
              return s.BROWSER_MAP;
            }
          },
          {
            key: 'ENGINE_MAP',
            get: function () {
              return s.ENGINE_MAP;
            }
          },
          {
            key: 'OS_MAP',
            get: function () {
              return s.OS_MAP;
            }
          },
          {
            key: 'PLATFORMS_MAP',
            get: function () {
              return s.PLATFORMS_MAP;
            }
          }
        ], (r = null) && o(t.prototype, r), n && o(t, n), e;
      }();
      t.default = a, e.exports = t.default;
    },
    91: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.default = void 0;
      var n = u(r(92)), i = u(r(93)), s = u(r(94)), o = u(r(95)), a = u(r(17));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = function () {
        function e(e, t) {
          if (void 0 === t && (t = !1), null == e || '' === e)
            throw new Error('UserAgent parameter can\'t be empty');
          this._ua = e, this.parsedResult = {}, !0 !== t && this.parse();
        }
        var t = e.prototype;
        return t.getUA = function () {
          return this._ua;
        }, t.test = function (e) {
          return e.test(this._ua);
        }, t.parseBrowser = function () {
          var e = this;
          this.parsedResult.browser = {};
          var t = a.default.find(n.default, function (t) {
            if ('function' == typeof t.test)
              return t.test(e);
            if (t.test instanceof Array)
              return t.test.some(function (t) {
                return e.test(t);
              });
            throw new Error('Browser\'s test function is not valid');
          });
          return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
        }, t.getBrowser = function () {
          return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
        }, t.getBrowserName = function (e) {
          return e ? String(this.getBrowser().name).toLowerCase() || '' : this.getBrowser().name || '';
        }, t.getBrowserVersion = function () {
          return this.getBrowser().version;
        }, t.getOS = function () {
          return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
        }, t.parseOS = function () {
          var e = this;
          this.parsedResult.os = {};
          var t = a.default.find(i.default, function (t) {
            if ('function' == typeof t.test)
              return t.test(e);
            if (t.test instanceof Array)
              return t.test.some(function (t) {
                return e.test(t);
              });
            throw new Error('Browser\'s test function is not valid');
          });
          return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
        }, t.getOSName = function (e) {
          var t = this.getOS().name;
          return e ? String(t).toLowerCase() || '' : t || '';
        }, t.getOSVersion = function () {
          return this.getOS().version;
        }, t.getPlatform = function () {
          return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
        }, t.getPlatformType = function (e) {
          void 0 === e && (e = !1);
          var t = this.getPlatform().type;
          return e ? String(t).toLowerCase() || '' : t || '';
        }, t.parsePlatform = function () {
          var e = this;
          this.parsedResult.platform = {};
          var t = a.default.find(s.default, function (t) {
            if ('function' == typeof t.test)
              return t.test(e);
            if (t.test instanceof Array)
              return t.test.some(function (t) {
                return e.test(t);
              });
            throw new Error('Browser\'s test function is not valid');
          });
          return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
        }, t.getEngine = function () {
          return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
        }, t.getEngineName = function (e) {
          return e ? String(this.getEngine().name).toLowerCase() || '' : this.getEngine().name || '';
        }, t.parseEngine = function () {
          var e = this;
          this.parsedResult.engine = {};
          var t = a.default.find(o.default, function (t) {
            if ('function' == typeof t.test)
              return t.test(e);
            if (t.test instanceof Array)
              return t.test.some(function (t) {
                return e.test(t);
              });
            throw new Error('Browser\'s test function is not valid');
          });
          return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
        }, t.parse = function () {
          return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
        }, t.getResult = function () {
          return a.default.assign({}, this.parsedResult);
        }, t.satisfies = function (e) {
          var t = this, r = {}, n = 0, i = {}, s = 0;
          if (Object.keys(e).forEach(function (t) {
              var o = e[t];
              'string' == typeof o ? (i[t] = o, s += 1) : 'object' == typeof o && (r[t] = o, n += 1);
            }), n > 0) {
            var o = Object.keys(r), u = a.default.find(o, function (e) {
                return t.isOS(e);
              });
            if (u) {
              var d = this.satisfies(r[u]);
              if (void 0 !== d)
                return d;
            }
            var c = a.default.find(o, function (e) {
              return t.isPlatform(e);
            });
            if (c) {
              var f = this.satisfies(r[c]);
              if (void 0 !== f)
                return f;
            }
          }
          if (s > 0) {
            var l = Object.keys(i), h = a.default.find(l, function (e) {
                return t.isBrowser(e, !0);
              });
            if (void 0 !== h)
              return this.compareVersion(i[h]);
          }
        }, t.isBrowser = function (e, t) {
          void 0 === t && (t = !1);
          var r = this.getBrowserName().toLowerCase(), n = e.toLowerCase(), i = a.default.getBrowserTypeByAlias(n);
          return t && i && (n = i.toLowerCase()), n === r;
        }, t.compareVersion = function (e) {
          var t = [0], r = e, n = !1, i = this.getBrowserVersion();
          if ('string' == typeof i)
            return '>' === e[0] || '<' === e[0] ? (r = e.substr(1), '=' === e[1] ? (n = !0, r = e.substr(2)) : t = [], '>' === e[0] ? t.push(1) : t.push(-1)) : '=' === e[0] ? r = e.substr(1) : '~' === e[0] && (n = !0, r = e.substr(1)), t.indexOf(a.default.compareVersions(i, r, n)) > -1;
        }, t.isOS = function (e) {
          return this.getOSName(!0) === String(e).toLowerCase();
        }, t.isPlatform = function (e) {
          return this.getPlatformType(!0) === String(e).toLowerCase();
        }, t.isEngine = function (e) {
          return this.getEngineName(!0) === String(e).toLowerCase();
        }, t.is = function (e) {
          return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e);
        }, t.some = function (e) {
          var t = this;
          return void 0 === e && (e = []), e.some(function (e) {
            return t.is(e);
          });
        }, e;
      }();
      t.default = d, e.exports = t.default;
    },
    92: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n };
      var s = /version\/(\d+(\.?_?\d+)+)/i, o = [
          {
            test: [/googlebot/i],
            describe: function (e) {
              var t = { name: 'Googlebot' }, r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/opera/i],
            describe: function (e) {
              var t = { name: 'Opera' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/opr\/|opios/i],
            describe: function (e) {
              var t = { name: 'Opera' }, r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/SamsungBrowser/i],
            describe: function (e) {
              var t = { name: 'Samsung Internet for Android' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/Whale/i],
            describe: function (e) {
              var t = { name: 'NAVER Whale Browser' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/MZBrowser/i],
            describe: function (e) {
              var t = { name: 'MZ Browser' }, r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/focus/i],
            describe: function (e) {
              var t = { name: 'Focus' }, r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/swing/i],
            describe: function (e) {
              var t = { name: 'Swing' }, r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/coast/i],
            describe: function (e) {
              var t = { name: 'Opera Coast' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/yabrowser/i],
            describe: function (e) {
              var t = { name: 'Yandex Browser' }, r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/ucbrowser/i],
            describe: function (e) {
              var t = { name: 'UC Browser' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/Maxthon|mxios/i],
            describe: function (e) {
              var t = { name: 'Maxthon' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/epiphany/i],
            describe: function (e) {
              var t = { name: 'Epiphany' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/puffin/i],
            describe: function (e) {
              var t = { name: 'Puffin' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/sleipnir/i],
            describe: function (e) {
              var t = { name: 'Sleipnir' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/k-meleon/i],
            describe: function (e) {
              var t = { name: 'K-Meleon' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/micromessenger/i],
            describe: function (e) {
              var t = { name: 'WeChat' }, r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/qqbrowser/i],
            describe: function (e) {
              var t = { name: /qqbrowserlite/i.test(e) ? 'QQ Browser Lite' : 'QQ Browser' }, r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/msie|trident/i],
            describe: function (e) {
              var t = { name: 'Internet Explorer' }, r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/\sedg\//i],
            describe: function (e) {
              var t = { name: 'Microsoft Edge' }, r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/edg([ea]|ios)/i],
            describe: function (e) {
              var t = { name: 'Microsoft Edge' }, r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/vivaldi/i],
            describe: function (e) {
              var t = { name: 'Vivaldi' }, r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/seamonkey/i],
            describe: function (e) {
              var t = { name: 'SeaMonkey' }, r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/sailfish/i],
            describe: function (e) {
              var t = { name: 'Sailfish' }, r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/silk/i],
            describe: function (e) {
              var t = { name: 'Amazon Silk' }, r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/phantom/i],
            describe: function (e) {
              var t = { name: 'PhantomJS' }, r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/slimerjs/i],
            describe: function (e) {
              var t = { name: 'SlimerJS' }, r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [
              /blackberry|\bbb\d+/i,
              /rim\stablet/i
            ],
            describe: function (e) {
              var t = { name: 'BlackBerry' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/(web|hpw)[o0]s/i],
            describe: function (e) {
              var t = { name: 'WebOS Browser' }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/bada/i],
            describe: function (e) {
              var t = { name: 'Bada' }, r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/tizen/i],
            describe: function (e) {
              var t = { name: 'Tizen' }, r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/qupzilla/i],
            describe: function (e) {
              var t = { name: 'QupZilla' }, r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/firefox|iceweasel|fxios/i],
            describe: function (e) {
              var t = { name: 'Firefox' }, r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/electron/i],
            describe: function (e) {
              var t = { name: 'Electron' }, r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/chromium/i],
            describe: function (e) {
              var t = { name: 'Chromium' }, r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/chrome|crios|crmo/i],
            describe: function (e) {
              var t = { name: 'Chrome' }, r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/GSA/i],
            describe: function (e) {
              var t = { name: 'Google Search' }, r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: function (e) {
              var t = !e.test(/like android/i), r = e.test(/android/i);
              return t && r;
            },
            describe: function (e) {
              var t = { name: 'Android Browser' }, r = i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/playstation 4/i],
            describe: function (e) {
              var t = { name: 'PlayStation 4' }, r = i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/safari|applewebkit/i],
            describe: function (e) {
              var t = { name: 'Safari' }, r = i.default.getFirstMatch(s, e);
              return r && (t.version = r), t;
            }
          },
          {
            test: [/.*/i],
            describe: function (e) {
              var t = -1 !== e.search('\\(') ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
              return {
                name: i.default.getFirstMatch(t, e),
                version: i.default.getSecondMatch(t, e)
              };
            }
          }
        ];
      t.default = o, e.exports = t.default;
    },
    93: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
      var o = [
        {
          test: [/Roku\/DVP/],
          describe: function (e) {
            var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
            return {
              name: s.OS_MAP.Roku,
              version: t
            };
          }
        },
        {
          test: [/windows phone/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.WindowsPhone,
              version: t
            };
          }
        },
        {
          test: [/windows /i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), r = i.default.getWindowsVersionName(t);
            return {
              name: s.OS_MAP.Windows,
              version: t,
              versionName: r
            };
          }
        },
        {
          test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
          describe: function (e) {
            var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
            return {
              name: s.OS_MAP.iOS,
              version: t
            };
          }
        },
        {
          test: [/macintosh/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, '.'), r = i.default.getMacOSVersionName(t), n = {
                name: s.OS_MAP.MacOS,
                version: t
              };
            return r && (n.versionName = r), n;
          }
        },
        {
          test: [/(ipod|iphone|ipad)/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, '.');
            return {
              name: s.OS_MAP.iOS,
              version: t
            };
          }
        },
        {
          test: function (e) {
            var t = !e.test(/like android/i), r = e.test(/android/i);
            return t && r;
          },
          describe: function (e) {
            var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), r = i.default.getAndroidVersionName(t), n = {
                name: s.OS_MAP.Android,
                version: t
              };
            return r && (n.versionName = r), n;
          }
        },
        {
          test: [/(web|hpw)[o0]s/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), r = { name: s.OS_MAP.WebOS };
            return t && t.length && (r.version = t), r;
          }
        },
        {
          test: [
            /blackberry|\bbb\d+/i,
            /rim\stablet/i
          ],
          describe: function (e) {
            var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
            return {
              name: s.OS_MAP.BlackBerry,
              version: t
            };
          }
        },
        {
          test: [/bada/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.Bada,
              version: t
            };
          }
        },
        {
          test: [/tizen/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.Tizen,
              version: t
            };
          }
        },
        {
          test: [/linux/i],
          describe: function () {
            return { name: s.OS_MAP.Linux };
          }
        },
        {
          test: [/CrOS/],
          describe: function () {
            return { name: s.OS_MAP.ChromeOS };
          }
        },
        {
          test: [/PlayStation 4/],
          describe: function (e) {
            var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.PlayStation4,
              version: t
            };
          }
        }
      ];
      t.default = o, e.exports = t.default;
    },
    94: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
      var o = [
        {
          test: [/googlebot/i],
          describe: function () {
            return {
              type: 'bot',
              vendor: 'Google'
            };
          }
        },
        {
          test: [/huawei/i],
          describe: function (e) {
            var t = i.default.getFirstMatch(/(can-l01)/i, e) && 'Nova', r = {
                type: s.PLATFORMS_MAP.mobile,
                vendor: 'Huawei'
              };
            return t && (r.model = t), r;
          }
        },
        {
          test: [/nexus\s*(?:7|8|9|10).*/i],
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Nexus'
            };
          }
        },
        {
          test: [/ipad/i],
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Apple',
              model: 'iPad'
            };
          }
        },
        {
          test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Apple',
              model: 'iPad'
            };
          }
        },
        {
          test: [/kftt build/i],
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Amazon',
              model: 'Kindle Fire HD 7'
            };
          }
        },
        {
          test: [/silk/i],
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Amazon'
            };
          }
        },
        {
          test: [/tablet(?! pc)/i],
          describe: function () {
            return { type: s.PLATFORMS_MAP.tablet };
          }
        },
        {
          test: function (e) {
            var t = e.test(/ipod|iphone/i), r = e.test(/like (ipod|iphone)/i);
            return t && !r;
          },
          describe: function (e) {
            var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'Apple',
              model: t
            };
          }
        },
        {
          test: [
            /nexus\s*[0-6].*/i,
            /galaxy nexus/i
          ],
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'Nexus'
            };
          }
        },
        {
          test: [/[^-]mobi/i],
          describe: function () {
            return { type: s.PLATFORMS_MAP.mobile };
          }
        },
        {
          test: function (e) {
            return 'blackberry' === e.getBrowserName(!0);
          },
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'BlackBerry'
            };
          }
        },
        {
          test: function (e) {
            return 'bada' === e.getBrowserName(!0);
          },
          describe: function () {
            return { type: s.PLATFORMS_MAP.mobile };
          }
        },
        {
          test: function (e) {
            return 'windows phone' === e.getBrowserName();
          },
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'Microsoft'
            };
          }
        },
        {
          test: function (e) {
            var t = Number(String(e.getOSVersion()).split('.')[0]);
            return 'android' === e.getOSName(!0) && t >= 3;
          },
          describe: function () {
            return { type: s.PLATFORMS_MAP.tablet };
          }
        },
        {
          test: function (e) {
            return 'android' === e.getOSName(!0);
          },
          describe: function () {
            return { type: s.PLATFORMS_MAP.mobile };
          }
        },
        {
          test: function (e) {
            return 'macos' === e.getOSName(!0);
          },
          describe: function () {
            return {
              type: s.PLATFORMS_MAP.desktop,
              vendor: 'Apple'
            };
          }
        },
        {
          test: function (e) {
            return 'windows' === e.getOSName(!0);
          },
          describe: function () {
            return { type: s.PLATFORMS_MAP.desktop };
          }
        },
        {
          test: function (e) {
            return 'linux' === e.getOSName(!0);
          },
          describe: function () {
            return { type: s.PLATFORMS_MAP.desktop };
          }
        },
        {
          test: function (e) {
            return 'playstation 4' === e.getOSName(!0);
          },
          describe: function () {
            return { type: s.PLATFORMS_MAP.tv };
          }
        },
        {
          test: function (e) {
            return 'roku' === e.getOSName(!0);
          },
          describe: function () {
            return { type: s.PLATFORMS_MAP.tv };
          }
        }
      ];
      t.default = o, e.exports = t.default;
    },
    95: function (e, t, r) {
      'use strict';
      t.__esModule = !0, t.default = void 0;
      var n, i = (n = r(17)) && n.__esModule ? n : { default: n }, s = r(18);
      var o = [
        {
          test: function (e) {
            return 'microsoft edge' === e.getBrowserName(!0);
          },
          describe: function (e) {
            if (/\sedg\//i.test(e))
              return { name: s.ENGINE_MAP.Blink };
            var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
            return {
              name: s.ENGINE_MAP.EdgeHTML,
              version: t
            };
          }
        },
        {
          test: [/trident/i],
          describe: function (e) {
            var t = { name: s.ENGINE_MAP.Trident }, r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        },
        {
          test: function (e) {
            return e.test(/presto/i);
          },
          describe: function (e) {
            var t = { name: s.ENGINE_MAP.Presto }, r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        },
        {
          test: function (e) {
            var t = e.test(/gecko/i), r = e.test(/like gecko/i);
            return t && !r;
          },
          describe: function (e) {
            var t = { name: s.ENGINE_MAP.Gecko }, r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        },
        {
          test: [/(apple)?webkit\/537\.36/i],
          describe: function () {
            return { name: s.ENGINE_MAP.Blink };
          }
        },
        {
          test: [/(apple)?webkit/i],
          describe: function (e) {
            var t = { name: s.ENGINE_MAP.WebKit }, r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }
      ];
      t.default = o, e.exports = t.default;
    }
  });
});
detectBrowser = function (exports, Bowser) {
  var detectBrowser = {
    browser: Bowser.getParser(navigator.userAgent),
    name: function () {
      var browserName = this.browser.getBrowserName().toLowerCase();
      if (browserName === 'microsoft edge') {
        browserName = 'edge';
      } else if (browserName === 'samsung internet for android') {
        browserName = 'samsung';
      } else if (browserName === 'uc browser') {
        browserName = 'uc';
      }
      return browserName;
    },
    device: function () {
      var deviceType = this.browser.getPlatformType(true);
      if (deviceType === 'desktop') {
        return deviceType;
      }
      return 'mobile';
    },
    version: function () {
      return parseInt(this.browser.getBrowserVersion(), 10);
    },
    os: function () {
      return this.browser.getOS().name;
    },
    osVersion: function () {
      return this.browser.getOS().version;
    },
    isOS: function () {
      return this.os() === 'iOS';
    },
    usingUserGesture: function () {
      return this.browser.satisfies({
        macos: { safari: '>=12.1' },
        firefox: '>=72',
        chrome: '>=80'
      });
    },
    isQuietNotification: function () {
      return this.browser.satisfies({
        firefox: '>=72',
        chrome: '>=80'
      });
    },
    isMacOSCatalina: function () {
      return this.os() === 'macOS' && this.osVersion().startsWith('10.15');
    },
    isMobile: function () {
      return this.device() === 'mobile';
    }
  };
  return detectBrowser;
}(detectBrowser, bowser);
vwoUtils_escapeHTML = function (x) {
  return x.split('&').join('&amp;').split('<').join('&lt;').split('"').join('&quot;');
};
vwoUtils_url_utils = function (escapeHTML) {
  return {
    /**
     * @param {string} url A valid URL or a query string.
     * @return {object} Get parameters as key-value pair.
     * Returns the GET parameters. Its used by redirectToURL only to get all the query paramters
     */
    getUrlVars: function (url) {
      var vars = {}, hash, i, hashes;
      if (-1 !== url.indexOf('#')) {
        url = url.slice(0, url.indexOf('#'));
      }
      hashes = url.slice(url.indexOf('?') + 1).split('&').reverse();
      i = hashes.length;
      while (i--) {
        hash = hashes[i].split('=');
        if ('undefined' === typeof vars[hash[0]]) {
          vars[hash[0]] = hash[1];
        } else {
          vars[hash[0]] = vars[hash[0]] + '&' + hash[0] + '=' + hash[1];
        }
      }
      return vars;
    },
    /**
     * @param {string} s URL to convert to Absolute URL
     * @return {string} Absolute URL for the input.
     * Changes the URL to absolute path.
     * Modified logic for removing ../
     * Create an anchor with the value s and it will automatically convert the URL to absolute URL
     **/
    toAbsURL: function (s) {
      var el = document.createElement('div');
      // some browsers dont absolutize urls unless the link is added to a div.
      el.innerHTML = '<a href="' + escapeHTML(s) + '">x</a>';
      return el.firstChild.href;
    },
    /**
     * Returns if hash is present in the url
     * @param url Url to identified
     * @returns {boolean}
     */
    isHashPresent: function (url) {
      var hashIndex = url.indexOf('#');
      return hashIndex !== -1;
    },
    /**
     * Return if andy query params is present in the url
     * @param url Url to identified
     * @param ignoreEqualTo Since the function is used as a generic service, so parameter added to ignore equalTo coming in url.
     * Later it can be made as separate entity.
     * @returns {boolean}
     */
    isQueryParamPresent: function (url, ignoreEqualTo) {
      var hashIndex = url.indexOf('#'), questionIndex = url.indexOf('?'),
        //To support old patterns (in already running tests), = can independently decide if query param is present.
        equaltoIndex = ignoreEqualTo ? -1 : url.indexOf('=');
      return hashIndex === -1 ? questionIndex !== -1 || equaltoIndex !== -1 : questionIndex !== -1 && hashIndex > questionIndex || equaltoIndex !== -1 && hashIndex > equaltoIndex;
    }
  };
}(vwoUtils_escapeHTML);
vwoUtils_url_url = function (urlUtils) {
  /* jshint camelcase:false */
  var _url = window._vis_opt_url,
    /**
     * @param {string} url URL to clean.
     * @return {string} Cleaned URL.
     * strip off /home.{3,4}, /default.{3,4} and /index.{3,4}(e.g. /index.php) from url
     * (if custom url not present otherwise just use the custom url without stripping).For pattern, stripping will always be done.
     */
    _cleanURLForMatch = function (url) {
      //keep hash, query parameter etc intact.
      return url.replace(/^(https?:\/\/)(?:w{3}\.)?(.*?)(?:\/(?:home|default|index)\..{3,4}|\/$)?(?:\/)?([\?#].*)?$/i, '$1$2$3');
    }, _cleanURLForGenerateMatches = function (url) {
      //keep hash, ending slash, query parameter etc intact.
      return url.replace(/^(https?:\/\/)(?:w{3}\.)?(.*?)(?:(?:home|default|index)\..{3,4})?([\?#].*)?$/i, '$1$2$3');
    };
  /* jshint camelcase:true */
  var vwoUrlUtils = {
    /**
     * @param {string} text Regex to escape.
     * @return {string} Escaped regex.
     * Escapes the special characters in the regex. Original fn was deprecated as seen on Author's blog.
     * This fn is * now the recommended fn from the same blog
     */
    regexEscape: function (text) {
      // Changelog: Escape all special characters used in regex
      return text.replace(/[\-\[\]{}()*+?.,\/\\^$|#\s]/g, '\\$&');
    },
    /**
     * @param {string} url URL to clean.
     * @param {boolean} isPattern Pass true if url is a URL pattern (optional).
     * @return {string} Cleaned URL.
     * strip off /home.{3,4}, /default.{3,4} and /index.{3,4}(e.g. /index.php) from url
     * (if custom url not present otherwise just use the custom url without stripping).For pattern, stripping will always be done.
     */
    cleanURL: function (url, isPattern) {
      if (_url && !isPattern) {
        return _url;
      }
      return url.replace(/^(.*[^\*])(\/(home|default|index)\..{3,4})((\?|#).*)*$/i, '$1$4');  //hash can also be there.
    },
    /**
     * @param {string} url String from which www has to be removed.
     * @param {boolean} isPattern Pass true if url is a URL pattern (optional).
     * @return {string} URL without www.
     * Removes www from the pattern and url
     */
    removeWWW: function (url, isPattern) {
      // Changelog: Replace and combine in same line. No need to check for length.
      url = url.replace(/^(https?:\/\/)(www\.)?(.*)$/i, '$1$3');
      // Changelog: undefined is equal to false in if
      if (isPattern) {
        url = url.replace(/(^\*?|\/\/)www\./i, '$1');
      }
      return url;
    },
    /**
     *
     * @param {string} url String from which extra slashes has to be removed
     * @param {boolean} isQueryParamPresent
     * @param {boolean} isHashPresent
     * @return {string}
     */
    stripSlashes: function (url, isQueryParamPresent, isHashPresent) {
      url = url.replace(/\/$/, '');
      if (isQueryParamPresent) {
        var firstSlashQuestionIndex = url.indexOf('/?');
        var firstQuestionIndex = url.indexOf('?');
        //Eliminate the case like example.com?#/?
        if (firstQuestionIndex - 1 === firstSlashQuestionIndex) {
          url = url.replace(/\/\?([^\?]*)(.*)/, '?$1$2');
        }
      }
      if (isHashPresent) {
        var firstSlashHashIndex = url.indexOf('/#');
        var firstHashIndex = url.indexOf('#');
        //Eliminate the case like example.com#/#
        if (firstHashIndex - 1 === firstSlashHashIndex) {
          url = url.replace(/\/#([^#]*)(.*)/, '#$1$2');
        }
      }
      return url;
    },
    /**
     * @param {string} url URL to compare.
     * @param {string} pattern Match url to this.
     * @param {boolean} [returnVal=false] returnVal Pass true to return matched values. (optional)
     * @return {boolean|Array.<string>} Matched values or true/false.
     * Matches the url with pattern and returns true/false or the match array.
     * The following processing is done in order.
     *1.If ? or = not present in pattern then all query parameters are stripped from url.
     *2.If either / or /? are the last part of pattern then / is stripped off. Same applies for url.
     *3.Try matching url with pattern now, if match fails go for further processing other wise report a match
     *4.Remove www from pattern and url(if present) and try matching again. If match found report otherwise go for further processing.
     *5.Clean the URL and pattern i.e. strip off /home.{3,4}, /default.{3,4} and /index.{3,4}(e.g. /index.php) from url
     (if custom url not present otherwise just use the custom url without stripping).For pattern stripping will always be done.
     *6.Try for a match now with cleaned URL and pattern, if match found record a match, otherwise go for further  processing
     *6.If the pattern has no wildcard then convert url to absolute and try for a match, if match found record a match, report no match
     */
    matchWildcard: function (url, pattern, returnVal) {
      if (typeof url !== 'string' || typeof pattern !== 'string') {
        return false;
      }
      var isQueryParamPresentInPattern = urlUtils.isQueryParamPresent(pattern), isHashPresentInPattern = urlUtils.isHashPresent(pattern), isQueryParamPresentInURL = urlUtils.isQueryParamPresent(url), isHashPresentInURL = urlUtils.isHashPresent(url);
      //TODO: Assumption is that following the first # in URL is the actual hash. In some extreme cases, it may not be true
      //Check if Query parameter is present in pattern
      //Handle the case like example.com/#something?somethingelse. There is no query param in this URL.
      if (!isQueryParamPresentInPattern) {
        //if pattern does not have ?, remove all query parameters{
        if (isQueryParamPresentInURL && isHashPresentInURL) {
          url = url.replace(/^(.*?)(\?[^#]*)(#?.*)$/, '$1$3');  // .com/?test=1#test1 should give .com/#test1
        } else if (isQueryParamPresentInURL && !isHashPresentInURL) {
          url = url.replace(/^(.*)(\?.*)$/, '$1');
        }
      }
      if (!isHashPresentInPattern) {
        //if pattern does not have #, remove the hash completely from URL{
        //Make the regex lazy to handle URL like example.com/#test#dsd.Cleaned URL should be example.com/ and not example.com/#test
        if (isHashPresentInURL) {
          //As query params are already removed. This is the only case
          url = url.replace(/^(.*?)(#.*)$/, '$1');
        }
      }
      if (url !== '/') {
        url = vwoUrlUtils.stripSlashes(url, isQueryParamPresentInURL, isHashPresentInURL);
      }
      if (pattern !== '/') {
        pattern = vwoUrlUtils.stripSlashes(pattern, isQueryParamPresentInPattern, isHashPresentInPattern);
      }
      var patterUrl = new RegExp('^' + vwoUrlUtils.regexEscape(pattern).replace(/\\\*/g, '(.*)') + '$', 'gi'), p, fullUrl;
      // Changelog: Everywhere below, !returnVal or patterUrl.exec does the same thing as if(returnVal) return returnVal else exec
      if (patterUrl.test(url)) {
        //Changelog_13:regex needs to be calculated again cause test and exec remembers their position and thus will change values b/w each call.
        patterUrl = new RegExp('^' + vwoUrlUtils.regexEscape(pattern).replace(/\\\*/g, '(.*)') + '$', 'gi');
        return !returnVal || patterUrl.exec(url);
      }
      url = vwoUrlUtils.removeWWW(url);
      pattern = vwoUrlUtils.removeWWW(pattern, true);
      patterUrl = new RegExp('^' + vwoUrlUtils.regexEscape(pattern).replace(/\\\*/g, '(.*)') + '$', 'gi');
      if (patterUrl.test(url)) {
        //regex needs to be calculated again cause test and exec remembers their position and thus will change values b/w each call.
        patterUrl = new RegExp('^' + vwoUrlUtils.regexEscape(pattern).replace(/\\\*/g, '(.*)') + '$', 'gi');
        return !returnVal || patterUrl.exec(url);
      }
      p = vwoUrlUtils.cleanURL(pattern, true);
      //if no * is contained, then maybe href is filename while pattern is fullUrl/href
      if (-1 === pattern.indexOf('*')) {
        fullUrl = vwoUrlUtils.removeWWW(urlUtils.toAbsURL(url)).replace(/\/$/, '').replace(/\/\?/, '?');
        if (fullUrl === pattern || fullUrl === p) {
          return true;
        }
      }
      url = vwoUrlUtils.cleanURL(url);
      pattern = p;
      patterUrl = new RegExp('^' + vwoUrlUtils.regexEscape(pattern).replace(/\\\*/g, '(.*)') + '$', 'gi');
      if (patterUrl.test(url)) {
        //Changelog_13:regex needs to be calculated again cause test and exec remembers their position and thus will change values b/w each call.
        patterUrl = new RegExp('^' + vwoUrlUtils.regexEscape(pattern).replace(/\\\*/g, '(.*)') + '$', 'gi');
        return !returnVal || patterUrl.exec(url);
      }
      return false;
    },
    matchRegex: function (url, pattern, shouldReturnMatchesWithEndingSlash) {
      if (typeof url !== 'string' || typeof pattern !== 'string') {
        return false;
      }
      var matchURL = function (cleanURLMethod) {
        var matches = new RegExp(pattern, 'gi').exec(url) || new RegExp(pattern, 'gi').exec(cleanURLMethod(url));
        if (!matches && url.indexOf('http') !== 0) {
          matches = new RegExp(pattern, 'gi').exec(urlUtils.toAbsURL(url)) || new RegExp(pattern, 'gi').exec(cleanURLMethod(urlUtils.toAbsURL(url)));
        }
        return matches;
      };
      var oldMatches = matchURL(_cleanURLForMatch);
      if (oldMatches) {
        // 1. We are returning oldMatches to support old behaviour, if new clean url does not match
        //  it will work with old behaviour (fallback to previous logic)
        // 2. We are not matching always with new url as it will start failing for some cases, like in current functionality,
        //  if user entered "abc.com/*", test will run on all other than home page. But if we don't remove ending slash,
        //  test will start running for home page too.
        return shouldReturnMatchesWithEndingSlash && matchURL(_cleanURLForGenerateMatches) || oldMatches;
      }
    }
  };
  // This will be used in testing only
  vwoUrlUtils.setUrl = function (u) {
    _url = u;
  };
  vwoUrlUtils.getUrl = function () {
    return _url;
  };
  return vwoUrlUtils;
}(vwoUtils_url_utils);
pcUtils = function (detectBrowser, url) {
  return {
    detectBrowserType: function () {
      return detectBrowser.name();
    },
    detectDeviceType: function () {
      return detectBrowser.device() || '';
    },
    /*Getting the navigator language */
    detectUserLanguage: function () {
      return navigator.language;
    },
    /*Getting the page url*/
    detectLandingPage: function () {
      return window.location.href;
    },
    /*Getting the domain URL*/
    detectDomain: function () {
      return window.location.origin;
    },
    detectServiceWorkerPath: function () {
      if (this.detectBrowserType() === 'chrome' || this.detectBrowserType() === 'opera' || this.detectBrowserType() === 'edge') {
        return pushcrewConfig.swPath;
      } else if (this.detectBrowserType() === 'firefox') {
        return pushcrewConfig.firefoxSwPath;
      }
    },
    detectSubscriberTimezoneName: function () {
      return '';
    },
    detectSubscriberTimezoneOffset: function () {
      return encodeURIComponent(new Date().getTimezoneOffset().toString().replace('+', ''));
    },
    getUtmParam: function () {
      return 'VWO';
    },
    getBranding: function () {
      return 'VWO';
    },
    getBrandingImage: function () {
      return 'https://pushcrew.com/assets/images/modal-branding-new.png';
    },
    getWhiteBrandingImage: function () {
      return 'https://pushcrew.com/assets/images/vwo-white-new.png';
    },
    getWhiteBrandingWidth: function () {
      return 40;
    },
    getCleanedUrl: function (currentUrl, removePreviewParamOnly) {
      if (!currentUrl) {
        return;
      }
      var url;
      if (currentUrl.search(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/) !== -1) {
        // Remove terminating /,?,& that might have been left by the preview params removal
        url = currentUrl.replace(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/g, '');
        if (removePreviewParamOnly) {
          // Do not remove ending slash
          url = url.replace(/(\??&?)$/, '');
        } else {
          // Can remove ending slash
          url = url.replace(/(\/?\??&?)$/, '');
        }
      } else if (!removePreviewParamOnly) {
        // Can remove ending slash
        url = currentUrl.replace(/\/$/, '');
      } else {
        url = currentUrl;
      }
      return url;
    },
    qualifyForOptin: function (includeRegex, excludeRegex) {
      var currentUrl = window.location.href;
      if (excludeRegex && !!url.matchRegex(currentUrl, excludeRegex)) {
        return false;
      }
      var cleanedUrl = this.getCleanedUrl(currentUrl);
      return this.matchRegex(cleanedUrl, includeRegex);
    },
    matchRegex: function (cleanedUrl, urlRegex) {
      return !!(url.matchRegex(cleanedUrl, urlRegex) || url.matchRegex(cleanedUrl, urlRegex, true));
    },
    shouldExecuteInTimeout: function (callback, timer) {
      if (timer === 0) {
        callback();
      } else {
        setTimeout(callback, timer);
      }
    },
    shouldForceOneStep: function () {
      if (detectBrowser.isQuietNotification()) {
        return !!parseInt(pushcrewConfig.forceOneStep || 0, 10);
      }
      return false;
    },
    isLocalStorageEnabled: function () {
      try {
        if ('localStorage' in window && window.localStorage !== null) {
          if (typeof window._vwo_engage_persist_in_local_storage === 'undefined') {
            return true;
          } else {
            return !!window._vwo_engage_persist_in_local_storage;
          }
        }
      } catch (e) {
        return false;
      }
    },
    urlBase64ToUint8Array: function (base64String) {
      var padding = '='.repeat((4 - base64String.length % 4) % 4);
      var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
      var rawData = window.atob(base64);
      var outputArray = new Uint8Array(rawData.length);
      for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
    arrayToBase64: function (arrayBuffer) {
      var base64 = '';
      var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      var bytes = new Uint8Array(arrayBuffer);
      var byteLength = bytes.byteLength;
      var byteRemainder = byteLength % 3;
      var mainLength = byteLength - byteRemainder;
      var a, b, c, d;
      var chunk;
      // Main loop deals with bytes in chunks of 3
      for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18;
        // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12;
        // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6;
        // 4032     = (2^6 - 1) << 6
        d = chunk & 63;
        // 63       = 2^6 - 1
        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
      }
      // Deal with the remaining bytes and padding
      if (byteRemainder == 1) {
        chunk = bytes[mainLength];
        a = (chunk & 252) >> 2;
        // 252 = (2^6 - 1) << 2
        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4;
        // 3   = 2^2 - 1
        base64 += encodings[a] + encodings[b] + '==';
      } else if (byteRemainder == 2) {
        chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
        a = (chunk & 64512) >> 10;
        // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4;
        // 1008  = (2^6 - 1) << 4
        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2;
        // 15    = 2^4 - 1
        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
      }
      return base64;
    }
  };
}(detectBrowser, vwoUtils_url_url);
(function () {
  'use strict';
  // AMD Cleans converts define('NativeConstants', to NativeConstant =
  // which may conflict with the scope variable defined by require at the top
  var _NativeConstants = function () {
    var iframe, iframeContentWindow, setImmutable = function (objName, prop) {
        try {
          Object.defineProperty(objName, prop, { writable: false });
        } catch (e) {
        }
      }, overrideSetAttributeMethod = function (element) {
        element.setAttribute = function (attr, val) {
        };
      }, createNewIFrame = function () {
        // Create iframe element
        if (!window.DISABLE_NATIVE_CONSTANTS) {
          if (!document.body) {
            window.DISABLE_NATIVE_CONSTANTS = true;
            return;
          }
          iframe = window.document.createElement('iframe');
          //  To block someone from setting the src on iframe which leads to onerror
          setImmutable(iframe, 'src');
          overrideSetAttributeMethod(iframe);
          iframe.style.display = 'none';
          // onload used as you need to wait until the IFRAME has loaded to get the contentWindow
          // since sometimes it's possible that dynamic IFRAME isn't fully loaded and might lead to contentWindow as null
          iframe.onload = function () {
            iframeContentWindow = iframe.contentWindow;
            iframeContentWindow.onerror = function (msg, url, lineno, colno) {
              /* jshint expr: true */
              window.VWO && window.VWO._ && window.VWO._.customError && window.VWO._.customError({
                msg: msg,
                url: url,
                lineno: lineno,
                colno: colno,
                source: 'nativeConstants'
              });  /* jshint expr: false */
            };
          };
          // Append the iframe to the body of document
          document.body.appendChild(iframe);
          // To block someone from setting href which leads to onerror
          setImmutable(iframe.contentWindow.location, 'href');
          // Get access to the content window of the iframe
          iframeContentWindow = iframe.contentWindow;
        }
      },
      // Returns the native constant using the iframe's content window
      get = function (constantName) {
        if (!iframe || !iframe.contentWindow) {
          createNewIFrame();
        }
        var context = iframeContentWindow;
        // Option to disable NativeConstants Library
        if (!context || window.DISABLE_NATIVE_CONSTANTS) {
          context = window;
        }
        return context[constantName];
      };
    createNewIFrame();
    // Allow access to get function
    return { get: get };
  }();
  if (true) {
    NativeConstants = function () {
      return _NativeConstants;
    }();
  }
}());
CustomEvents = function (exports, NativeConstants) {
  /// <amd-dependency path="NativeConstants" name="NativeConstants" />
  var CustomEvents = function () {
    function CustomEvents(name, detail) {
      this.name = name;
      var nativeDomEvent = NativeConstants.get('CustomEvent');
      this.event = new nativeDomEvent(this.name, detail ? { detail: detail } : null);
    }
    CustomEvents.prototype.trigger = function (elem) {
      elem = elem || document;
      elem.dispatchEvent(this.event);
    };
    CustomEvents.prototype.listen = function (elem, callback) {
      elem = elem || document;
      callback = callback || noop;
      elem.addEventListener(this.name, callback);
    };
    return CustomEvents;
  }();
  function noop() {
  }
  return CustomEvents;
}(CustomEvents, NativeConstants);

storageUtil = function (pcUtils) {
  var isLocalStorageEnabled = false;
  var domainForCookieStorage = '';
  // 's2op' means show 2step optin popup
  var storageKeyMapper = { wingify_push_do_not_show_notification_popup: 's2op' };
  return {
    // checks if localstorage is enabled for the browser and sets a flag for the same.
    initialiseState: function (domainForStorageUtil) {
      domainForCookieStorage = domainForStorageUtil;
      isLocalStorageEnabled = pcUtils.isLocalStorageEnabled();
    },
    // return all cookies with match regex
    getAllCookiesWithMatchRegex: function (str, cookiesContainer) {
      cookiesContainer = cookiesContainer || window.document;
      var pairs = cookiesContainer.cookie.split(';'), cookies = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='), pairKey = pair[0].trim();
        if (pairKey.startsWith(str)) {
          cookies[pairKey] = unescape(pair[1]);
        }
      }
      return cookies;
    },
    //return all localStorage items with match regex
    getAllStorageItemsWithMatchRegex: function (str, localStorageContainer) {
      localStorageContainer = localStorageContainer || window;
      var storageItems = {}, keys = Object.keys(localStorageContainer.localStorage), i = keys.length;
      while (i--) {
        if (keys[i].startsWith(str)) {
          storageItems[keys[i]] = localStorageContainer.localStorage.getItem(keys[i]);
        }
      }
      return storageItems;
    },
    /*
     * returns the cookie value if cookie is present. returns boolean false if cookie not present.
     * Param ('string') : cname : Cookie Name.
     */
    getCookie: function (cname) {
      var name = cname + '=', ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return false;
    },
    /*
     * set the cookie in the browser.
     * Param ('string') name : Cookie Name.
     * Param ('string') : value : Cookie Value.
     * Param ('integer') : exdays : No of days in which cookie needs to expire
     */
    setCookie: function (name, value, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + parseInt(exdays) * 24 * 60 * 60 * 1000);
      var expires = 'expires=' + d.toUTCString();
      if (domainForCookieStorage == 'self') {
        document.cookie = name + '=' + value + ';path=/;' + expires;
      } else {
        document.cookie = name + '=' + value + ';domain=' + domainForCookieStorage + ';path=/;' + expires;
      }
    },
    /*
     * set the values in cookies and in localstorage in the browser.
     * Param ('string') name : Cookie Name.
     * Param ('string') : value : Cookie Value.
     * Param ('integer') : exdays : Expiry Days.
     */
    addToStorage: function (name, value, exdays) {
      if (isLocalStorageEnabled) {
        var lsValue = value;
        var lsName = name;
        if (name && storageKeyMapper[name]) {
          lsName = storageKeyMapper[name];
          lsValue = JSON.stringify({
            value: value,
            expires: new Date().getTime() + exdays * 24 * 3600 * 1000
          });
        }
        localStorage.setItem(lsName, lsValue);
      }
      this.setCookie(name, value, exdays);
    },
    /*
     * returns the stored value.
     * by checking first in localstorage and then in cookies.
     * If empty returns empty string.
     * Param ('string') : cname : Cookie Name.
     */
    getFromStorage: function (cname) {
      var mappedKey = storageKeyMapper[cname];
      var value = '';
      if (localStorage.getItem(cname)) {
        return localStorage.getItem(cname);
      }
      if (mappedKey) {
        try {
          var lsValue = JSON.parse(localStorage.getItem(mappedKey)) || { value: '' };
          // Key has expired return nothing
          if (lsValue && this.expireLSKey(mappedKey, lsValue.expires)) {
            value = '';
          } else {
            // Return the actual persisted lsValue
            value = lsValue.value;
          }
        } catch (e) {
          value = '';
        }
        if (value === '' && this.getCookie(cname)) {
          value = this.getCookie(cname);
        }
        return value;
      }
      if (this.getCookie(cname)) {
        return this.getCookie(cname);
      }
      return '';
    },
    expireLSKey: function (key, endTime) {
      if (endTime < new Date().getTime()) {
        localStorage.removeItem(key);
        return true;
      }
      return false;
    },
    /*
     * deletes the stored value both from cookies and localstorage
     * Param ('string') : cname : Cookie Name.
     */
    deleteFromStorage: function (cname) {
      if (isLocalStorageEnabled && localStorage[cname]) {
        localStorage.removeItem(cname);
      }
      if (this.getCookie(cname)) {
        this.setCookie(cname, '', -1);
      }
    },
    /*
     * deletes all keys with matching regex both from cookies and localstorage
     * Param ('string') : uniqueKey : key name.
     */
    deleteAllKeysFromStorageWithRegex: function (uniqueKey) {
      var allStorageItems = Object.keys(this.getAllStorageItemsWithMatchRegex(uniqueKey)) || [], allCookies = Object.keys(this.getAllCookiesWithMatchRegex(uniqueKey)) || [], self = this;
      allStorageItems.forEach(function (storageItem) {
        self.deleteFromStorage(storageItem);
      });
      allCookies.forEach(function (cookieItem) {
        self.deleteFromStorage(cookieItem);
      });
    }
  };
}(pcUtils);
generateUuid = function () {
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
      return v.toString(16);
    }).replace(/-/g, '');
  }
  // expose globally for convertfly to access
  window.__pc = window.__pc || {};
  window.__pc.uuid = uuid;
  return uuid;
}();
AppConstants = function (exports) {
  var Storage = { COOKIE: { LIFETIME: 10000 } };
  if (typeof window._vwo_engage_cookie_default_lifetime !== 'undefined' && !isNaN(window._vwo_engage_cookie_default_lifetime)) {
    Storage.COOKIE.LIFETIME = parseInt(window._vwo_engage_cookie_default_lifetime, 10);
  }
  var AppConstants = { Storage: Storage };
  return AppConstants;
}(AppConstants);
globalConfig = function (pcUtils, detectBrowser, CustomEvents, storageUtil, generateUuid, AppConstants) {
  var _utils, _internalq, apiFailureQueue, components, APIReadyState, _pushcrew, pushcrew, pushAPI, internalConfig = {};
  apiFailureQueue = [];
  _utils = {};
  _internalq = [];
  components = {};
  internalConfig.segmentationStringsChanged = false;
  internalConfig.isSafari = function () {
    return detectBrowser.name() === 'safari' && 'safari' in window && typeof window.safari === 'object' && 'pushNotification' in window.safari;
  }();
  APIReadyState = {
    UNINITIALIZED: false,
    READY: true,
    FAILED: 2
  };
  pushcrew = { isAPIReady: APIReadyState.UNINITIALIZED };
  _pushcrew = {};
  _pushcrew.stopProcessing = function (reason) {
    window._pushcrewDebuggingQueue.push(reason);
    _pushcrew.apiFailureReasons = { reasons: [reason] };
    pushcrew.isAPIReady = APIReadyState.FAILED;
    _pushcrew.executeFailureQueue(_pushcrew.apiFailureReasons);
  };
  _pushcrew.validateBrowserSupport = function () {
    if (!isPushNotificationSupported()) {
      _pushcrew.stopProcessing('BROWSER_NOT_SUPPORTED');
      return false;
    } else if (internalConfig.isSafari && !pushcrewConfig.safariWebsitePushId) {
      _pushcrew.stopProcessing('SAFARI_WEBSITE_PUSH_ID_NOT_FOUND');
      return false;
    } else if (detectBrowser.name() === 'edge' && !pushcrewConfig.vapidPublicKey) {
      _pushcrew.stopProcessing('VAPID_KEY_NOT_FOUND_IN_EDGE');
      return false;
    }
    return true;
  };
  _pushcrew.executeFailureQueue = function (reason) {
    window._pushcrewDebuggingQueue.push('Executing failure queue begin');
    for (var i = 0; i < apiFailureQueue.length; i++) {
      apiFailureQueue[i](reason);
    }
    apiFailureQueue = [];
    window._pushcrewDebuggingQueue.push('Executing failure queue ends');
  };
  _pushcrew.changeSegmentationStrings = function () {
    if (internalConfig.segmentationStringsChanged) {
      return;
    }
    internalConfig.segmentationStringsChanged = true;
    if (pushcrewConfig.segmentations) {
      pushcrewConfig.segmentations.forEach(function (e) {
        e.ss = e.ss.replace(/_vwo_s\(\)/g, '_pc_s()');
      });
    }
    pushcrewConfig.clickSegmentations.forEach(function (element) {
      element.ss = element.ss.replace(/_vwo_u.cm/g, '_pc_u.cm');
      element.ss = element.ss.replace(/_vwo_s\(\)/g, '_pc_s()');
      element.ss = element.ss.replace('_vwo_s().subscribe()', '_pc_u.cm(\'eO\',\'subscribe\')');
    });
    pushcrewConfig.shopifySegmentations.forEach(function (element) {
      element.ss = element.ss.replace(/_vwo_u.cm/g, '_pc_u.cm');
      element.ss = element.ss.replace(/_vwo_s\(\)/g, '_pc_s()');
    });
  };
  if (HTTP) {
    _pushcrew.getChildUrl = function () {
      if (pushcrewConfig.subdomainFlag == '1') {
        return pushcrewConfig.selfHostedSubdomainUrl;
      } else {
        //Regex is used to replace https:// and http:// from the server sync url
        return 'https://' + pushcrewConfig.subdomain + '.' + pushcrewConfig.serverSyncUrl.replace(/.*?:\/\//g, '').replace(/app\d+./, '');
      }
    };
  }
  var isValidFunction = function (func) {
    return func !== undefined && typeof func === 'function';
  };
  var reExecuteQueue = [];
  internalConfig.utmString = '?utm_source=' + pushcrewConfig.companyName + '&utm_medium=referral&utm_campaign=Powered-by-' + pcUtils.getUtmParam();
  internalConfig.pushcrewOptinProcessedEvent = new CustomEvents('pushcrewOptinProcessed');
  internalConfig.pushcrewOptinProcessedEvent.listen(document, pushPcProcessedEventToConvertfly);
  internalConfig.subscribedToWebPushEvent = new CustomEvents('pushcrewSubscribedToWebPush');
  internalConfig.subscribedToWebPushEvent.listen(document, function () {
    window.pushcrew.subscribed = true;
  });
  pushAPI = pushAPI || {};
  pushAPI.utilities = pcUtils;
  _pushcrew._currentTime = function (value) {
    window._pushcrewDebuggingQueue = window._pushcrewDebuggingQueue || [];
    window._pushcrewDebuggingQueue.push('Updating value of _currentTime: ' + value);
    pushcrew._currentTime = value;
  };
  _pushcrew.noTrigger = function (value) {
    window._pushcrewDebuggingQueue.push('Updating value of no-trigger optIn: ' + value);
    pushcrew.noTrigger = value;
  };
  _pushcrew.createUuidAndSetUuidCookie = function () {
    var uuid = storageUtil.getFromStorage('_wingify_pc_uuid') || storageUtil.getFromStorage('wingify_push_subscriber_id');
    if (uuid === '') {
      uuid = generateUuid();
    }
    storageUtil.addToStorage('_wingify_pc_uuid', uuid, AppConstants.Storage.COOKIE.LIFETIME);
    return uuid;
  };
  function getAndroidVersion() {
    var ua = navigator.userAgent.toLowerCase();
    var match = ua.match(/android\s([0-9\.]*)/);
    return match ? match[1] : false;
  }
  function isServiceWorkerSupported(browser) {
    if (detectBrowser.isOS()) {
      return false;
    }
    if (HTTP) {
      return true;
    }
    if (typeof browser === 'undefined' || browser === '') {
      browser = detectBrowser.name();
    }
    return 'Notification' in window && typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
  }
  function isPushNotificationSupported() {
    if (internalConfig.isSafari) {
      return true;
    }
    var isBrowserSupported = false;
    var currentBrowser = detectBrowser;
    var supportedBrowsers = [
      {
        name: 'chrome',
        minimumVersion: 42,
        device: [
          'desktop',
          'mobile'
        ]
      },
      {
        name: 'firefox',
        minimumVersion: 44,
        device: ['desktop']
      },
      {
        name: 'firefox',
        minimumVersion: 48,
        device: ['mobile']
      },
      {
        name: 'opera',
        minimumVersion: 39,
        device: ['mobile']
      },
      {
        name: 'opera',
        minimumVersion: 42,
        device: ['desktop']
      },
      {
        name: 'edge',
        minimumVersion: 17,
        device: ['desktop']
      },
      {
        name: 'uc',
        minimumVersion: 4,
        device: ['mobile']
      },
      {
        name: 'samsung',
        minimumVersion: 11,
        device: ['mobile']
      }
    ];
    for (var _i = 0, supportedBrowsers_1 = supportedBrowsers; _i < supportedBrowsers_1.length; _i++) {
      var supportedBrowser = supportedBrowsers_1[_i];
      if (currentBrowser.name() === supportedBrowser.name.toLowerCase()) {
        // Check if the device is supported
        if (supportedBrowser.device.indexOf(currentBrowser.device()) > -1) {
          if (currentBrowser.version() >= supportedBrowser.minimumVersion && isServiceWorkerSupported(currentBrowser.name())) {
            isBrowserSupported = true;
            break;
          }
        }
      }
    }
    return isBrowserSupported;
  }
  var newApiFunctions = [
    'tag',
    'triggerPreferences'
  ];
  function shouldInsertInInternalQueue() {
    if (typeof arguments[1] === 'function' || arguments[0] === 'triggerOptOut') {
      return true;
    } else {
      return false;
    }
  }
  var pushCrewQueue = function () {
    this.push = function () {
      if (pushcrewConfig.isInactive == 1) {
        return;
      }
      for (var i = 0; i < arguments.length; i++)
        try {
          var apiName = arguments[i][0];
          if (newApiFunctions.indexOf(apiName) !== -1) {
            window.PC.__q = window.PC.__q || [];
            window.PC.__q.push(arguments[i]);
            continue;
          }
          if (pushcrew.isAPIReady === APIReadyState.READY) {
            handleApiFunctionExecution.apply(undefined, arguments[i]);
          } else if (arguments[i][0] === 'APIReady') {
            //case where failure callback is given with APIReady
            if (pushcrew.isAPIReady === APIReadyState.UNINITIALIZED) {
              if (isValidFunction(arguments[i][2])) {
                apiFailureQueue.push(arguments[i][2]);
              }
              _internalq.push(arguments[i]);
            } else if (pushcrew.isAPIReady === APIReadyState.FAILED && isValidFunction(arguments[i][2])) {
              arguments[i][2](_pushcrew.apiFailureReasons);
            }
          } else if (arguments[i][0] !== 'APIReady' && pushcrew.isAPIReady === APIReadyState.UNINITIALIZED) {
            if (shouldInsertInInternalQueue.apply(undefined, arguments[i])) {
              _internalq.push(arguments[i]);
            } else {
              handleApiFunctionExecution.apply(undefined, arguments[i]);
            }
          }
        } catch (e) {
        }
    };
  };
  function handleApiFunctionExecution() {
    if (!isValidFunction(_pushcrew[arguments[0]])) {
      reExecuteQueue.push(arguments);
    } else {
      _pushcrew[arguments[0]](arguments[1], arguments[2]);
    }
  }
  var internalQueue = function () {
    this.push = function () {
      for (var i = 0; i < arguments.length; i++)
        try {
          if (arguments[i][2] !== undefined) {
            _pushcrew[arguments[i][0]](arguments[i][1], arguments[i][2]);
          } else {
            _pushcrew[arguments[i][0]](arguments[i][1], null);
          }
        } catch (e) {
        }
    };
  };
  function executeInternalQueue() {
    var _old_internalq = _internalq;
    _internalq = new internalQueue();
    _internalq.push.apply(_internalq, _old_internalq);
  }
  function pushPcProcessedEventToConvertfly() {
    window.convertflyQueue = window.convertflyQueue || [];
    window.convertflyQueue.push(['pushcrewOptinProcessed']);
  }
  // get the existing _gaq array
  var _old_pcq = window._pcq;
  // create a new _gaq object
  window._pcq = new pushCrewQueue();
  // execute all of the queued up events - apply() turns the array entries into individual arguments
  window._pcq.push.apply(window._pcq, _old_pcq);
  return {
    _utils: _utils,
    _internalq: _internalq,
    apiFailureQueue: apiFailureQueue,
    APIReadyState: APIReadyState,
    _pushcrew: _pushcrew,
    pushcrew: pushcrew,
    executeInternalQueue: executeInternalQueue,
    internalQueue: internalQueue,
    pushCrewQueue: pushCrewQueue,
    getAndroidVersion: getAndroidVersion,
    isPushNotificationSupported: isPushNotificationSupported,
    isServiceWorkerSupported: isServiceWorkerSupported,
    pushAPI: pushAPI,
    components: components,
    internalConfig: internalConfig,
    reExecuteQueue: reExecuteQueue
  };
}(pcUtils, detectBrowser, CustomEvents, storageUtil, generateUuid, AppConstants);
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document)
      throw new Error('jQuery requires a window with a document');
    return b(a);
  } : b(a);
}('undefined' != typeof window ? window : this, function (a, b) {
  var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = '2.1.4', n = function (a, b) {
      return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
      return b.toUpperCase();
    };
  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: '',
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function (a, b) {
      return n.each(this, a, b);
    },
    map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (a) {
      var b = this.length, c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ('boolean' == typeof g && (j = g, g = arguments[h] || {}, h++), 'object' == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (a = arguments[h]))
        for (b in a)
          c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g;
  }, n.extend({
    expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (a) {
      throw new Error(a);
    },
    noop: function () {
    },
    isFunction: function (a) {
      return 'function' === n.type(a);
    },
    isArray: Array.isArray,
    isWindow: function (a) {
      return null != a && a === a.window;
    },
    isNumeric: function (a) {
      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
    },
    isPlainObject: function (a) {
      return 'object' !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf') ? !1 : !0;
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a)
        return !1;
      return !0;
    },
    type: function (a) {
      return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a;
    },
    globalEval: function (a) {
      var b, c = eval;
      a = n.trim(a), a && (1 === a.indexOf('use strict') ? (b = l.createElement('script'), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function (a) {
      return a.replace(p, 'ms-').replace(q, r);
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function (a, b, c) {
      var d, e = 0, f = a.length, g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)
            if (d = b.apply(a[e], c), d === !1)
              break;
        } else
          for (e in a)
            if (d = b.apply(a[e], c), d === !1)
              break;
      } else if (g) {
        for (; f > e; e++)
          if (d = b.call(a[e], e, a[e]), d === !1)
            break;
      } else
        for (e in a)
          if (d = b.call(a[e], e, a[e]), d === !1)
            break;
      return a;
    },
    trim: function (a) {
      return null == a ? '' : (a + '').replace(o, '');
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function (a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    },
    merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++)
        a[e++] = b[d];
      return a.length = e, a;
    },
    grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
        d = !b(a[f], f), d !== h && e.push(a[f]);
      return e;
    },
    map: function (a, b, c) {
      var d, f = 0, g = a.length, h = s(a), i = [];
      if (h)
        for (; g > f; f++)
          d = b(a[f], f, c), null != d && i.push(d);
      else
        for (f in a)
          d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i);
    },
    guid: 1,
    proxy: function (a, b) {
      var c, e, f;
      return 'string' == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    },
    now: Date.now,
    support: k
  }), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
    h['[object ' + b + ']'] = b.toLowerCase();
  });
  function s(a) {
    var b = 'length' in a && a.length, c = n.type(a);
    return 'function' === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a;
  }
  var t = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = 'sizzle' + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
        return a === b && (l = !0), 0;
      }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b)
            return c;
        return -1;
      }, K = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', L = '[\\x20\\t\\r\\n\\f]', M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', N = M.replace('w', 'w#'), O = '\\[' + L + '*(' + M + ')(?:' + L + '*([*^$|!~]?=)' + L + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + N + '))|)' + L + '*\\]', P = ':(' + M + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + O + ')*)|.*)\\)|)', Q = new RegExp(L + '+', 'g'), R = new RegExp('^' + L + '+|((?:^|[^\\\\])(?:\\\\.)*)' + L + '+$', 'g'), S = new RegExp('^' + L + '*,' + L + '*'), T = new RegExp('^' + L + '*([>+~]|' + L + ')' + L + '*'), U = new RegExp('=' + L + '*([^\\]\'"]*?)' + L + '*\\]', 'g'), V = new RegExp(P), W = new RegExp('^' + N + '$'), X = {
        ID: new RegExp('^#(' + M + ')'),
        CLASS: new RegExp('^\\.(' + M + ')'),
        TAG: new RegExp('^(' + M.replace('w', 'w*') + ')'),
        ATTR: new RegExp('^' + O),
        PSEUDO: new RegExp('^' + P),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + L + '*(even|odd|(([+-]|)(\\d*)n|)' + L + '*(?:([+-]|)' + L + '*(\\d+)|))' + L + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + K + ')$', 'i'),
        needsContext: new RegExp('^' + L + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + L + '*((?:-\\d)?\\d*)' + L + '*\\)|)(?=[^-]|$)', 'i')
      }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp('\\\\([\\da-f]{1,6}' + L + '?|(' + L + ')|.)', 'ig'), da = function (a, b, c) {
        var d = '0x' + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
      }, ea = function () {
        m();
      };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length, d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1;
        }
      };
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 'string' != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if (j = f[1]) {
            if (9 === k) {
              if (h = b.getElementById(j), !h || !h.parentNode)
                return d;
              if (h.id === j)
                return d.push(h), d;
            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
              return d.push(h), d;
          } else {
            if (f[2])
              return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute('id')) ? s = r.replace(ba, '\\$&') : b.setAttribute('id', s), s = '[id=\'' + s + '\'] ', l = o.length;
            while (l--)
              o[l] = s + ra(o[l]);
            w = aa.test(a) && pa(b.parentNode) || b, x = o.join(',');
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute('id');
            }
        }
      }
      return i(a.replace(R, '$1'), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
      }
      return b;
    }
    function ia(a) {
      return a[u] = !0, a;
    }
    function ja(a) {
      var b = n.createElement('div');
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }
    function ka(a, b) {
      var c = a.split('|'), e = a.length;
      while (e--)
        d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d)
        return d;
      if (c)
        while (c = c.nextSibling)
          if (c === b)
            return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return 'input' === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ('input' === c || 'button' === c) && b.type === a;
      };
    }
    function oa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e, f = a([], c.length, b), g = f.length;
          while (g--)
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
        });
      });
    }
    function pa(a) {
      return a && 'undefined' != typeof a.getElementsByTagName && a;
    }
    c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? 'HTML' !== b.nodeName : !1;
    }, m = ga.setDocument = function (a) {
      var b, e, g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener('unload', ea, !1) : e.attachEvent && e.attachEvent('onunload', ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = 'i', !a.getAttribute('className');
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment('')), !a.getElementsByTagName('*').length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ('undefined' != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          return a.getAttribute('id') === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c, d = [], e = 0, f = b.getElementsByTagName(a);
        if ('*' === a) {
          while (c = f[e++])
            1 === c.nodeType && d.push(c);
          return d;
        }
        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = '<a id=\'' + u + '\'></a><select id=\'' + u + '-\f]\' msallowcapture=\'\'><option selected=\'\'></option></select>', a.querySelectorAll('[msallowcapture^=\'\']').length && q.push('[*^$]=' + L + '*(?:\'\'|"")'), a.querySelectorAll('[selected]').length || q.push('\\[' + L + '*(?:value|' + K + ')'), a.querySelectorAll('[id~=' + u + '-]').length || q.push('~='), a.querySelectorAll(':checked').length || q.push(':checked'), a.querySelectorAll('a#' + u + '+*').length || q.push('.#.+[+~]');
      }), ja(function (a) {
        var b = g.createElement('input');
        b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push('name' + L + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, 'div'), s.call(a, '[s!=\'\']:x'), r.push('!=', P);
      }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b)
          while (b = b.parentNode)
            if (b === a)
              return !0;
        return !1;
      }, B = b ? function (a, b) {
        if (a === b)
          return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b)
          return l = !0, 0;
        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
        if (!e || !f)
          return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f)
          return la(a, b);
        c = a;
        while (c = c.parentNode)
          h.unshift(c);
        c = b;
        while (c = c.parentNode)
          i.unshift(c);
        while (h[d] === i[d])
          d++;
        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
        try {
          var d = s.call(a, b);
          if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
            return d;
        } catch (e) {
        }
      return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.error = function (a) {
      throw new Error('Syntax error, unrecognized expression: ' + a);
    }, ga.uniqueSort = function (a) {
      var b, d = [], e = 0, f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])
          b === a[f] && (e = d.push(f));
        while (e--)
          a.splice(d[e], 1);
      }
      return k = null, a;
    }, e = ga.getText = function (a) {
      var b, c = '', d = 0, f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ('string' == typeof a.textContent)
            return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling)
            c += e(a);
        } else if (3 === f || 4 === f)
          return a.nodeValue;
      } else
        while (b = a[d++])
          c += e(b);
      return c;
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: X,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || '').replace(ca, da), '~=' === a[2] && (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] && ga.error(a[0]), a;
        },
        PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ca, da).toLowerCase();
          return '*' === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function (a) {
          var b = y[a + ' '];
          return b || (b = new RegExp('(^|' + L + ')' + a + '(' + L + '|$)')) && y(a, function (a) {
            return b.test('string' == typeof a.className && a.className || 'undefined' != typeof a.getAttribute && a.getAttribute('class') || '');
          });
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);
            return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b ? c && e.slice(-c.length) === c : '~=' === b ? (' ' + e.replace(Q, ' ') + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1) : !0;
          };
        },
        CHILD: function (a, b, c, d, e) {
          var f = 'nth' !== a.slice(0, 3), g = 'last' !== a.slice(-4), h = 'of-type' === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? 'nextSibling' : 'previousSibling', q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                      return !1;
                  o = p = 'only' === a && !o && 'nextSibling';
                }
                return !0;
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [
                      w,
                      n,
                      m
                    ];
                    break;
                  }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                m = j[1];
              else
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                  if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [
                      w,
                      m
                    ]), l === b))
                    break;
              return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        },
        PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error('unsupported pseudo: ' + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [
            a,
            a,
            '',
            b
          ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d, f = e(a, b), g = f.length;
            while (g--)
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ia(function (a) {
          var b = [], c = [], d = h(a.replace(R, '$1'));
          return d[u] ? ia(function (a, b, c, e) {
            var f, g = d(a, null, e, []), h = a.length;
            while (h--)
              (f = g[h]) && (a[h] = !(b[h] = f));
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }),
        contains: ia(function (a) {
          return a = a.replace(ca, da), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ia(function (a) {
          return W.test(a || '') || ga.error('unsupported lang: ' + a), a = a.replace(ca, da).toLowerCase(), function (b) {
            var c;
            do
              if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + '-');
            while ((b = b.parentNode) && 1 === b.nodeType);
            return !1;
          };
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function (a) {
          return a === o;
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function (a) {
          return a.disabled === !1;
        },
        disabled: function (a) {
          return a.disabled === !0;
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6)
              return !1;
          return !0;
        },
        parent: function (a) {
          return !d.pseudos.empty(a);
        },
        header: function (a) {
          return Z.test(a.nodeName);
        },
        input: function (a) {
          return Y.test(a.nodeName);
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && 'button' === a.type || 'button' === b;
        },
        text: function (a) {
          var b;
          return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
        },
        first: oa(function () {
          return [0];
        }),
        last: oa(function (a, b) {
          return [b - 1];
        }),
        eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2)
            a.push(c);
          return a;
        }),
        odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2)
            a.push(c);
          return a;
        }),
        lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;)
            a.push(d);
          return a;
        }),
        gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;)
            a.push(d);
          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      d.pseudos[b] = ma(b);
    for (b in {
        submit: !0,
        reset: !0
      })
      d.pseudos[b] = na(b);
    function qa() {
    }
    qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + ' '];
      if (k)
        return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, ' ')
        }), h = h.slice(c.length));
        for (g in d.filter)
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        if (!c)
          break;
      }
      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };
    function ra(a) {
      for (var b = 0, c = a.length, d = ''; c > b; b++)
        d += a[b].value;
      return d;
    }
    function sa(a, b, c) {
      var d = b.dir, e = c && 'parentNode' === d, f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d])
          if (1 === b.nodeType || e)
            return a(b, c, f);
      } : function (b, c, g) {
        var h, i, j = [
            w,
            f
          ];
        if (g) {
          while (b = b[d])
            if ((1 === b.nodeType || e) && a(b, c, g))
              return !0;
        } else
          while (b = b[d])
            if (1 === b.nodeType || e) {
              if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g))
                return !0;
            }
      };
    }
    function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)
          if (!a[e](b, c, d))
            return !1;
        return !0;
      } : a[0];
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++)
        ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
        var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || '*', h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;
          while (k--)
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)
                (l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i);
            }
            k = r.length;
            while (k--)
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
          }
        } else
          r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }
    function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = sa(function (a) {
            return a === b;
          }, h, !0), l = sa(function (a) {
            return J(b, a) > -1;
          }, h, !0), m = [function (a, c, d) {
              var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return b = null, e;
            }]; f > i; i++)
        if (c = d.relative[a[i].type])
          m = [sa(ta(m), c)];
        else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++)
              if (d.relative[a[e].type])
                break;
            return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: ' ' === a[i - 2].type ? '*' : '' })).replace(R, '$1'), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
          }
          m.push(c);
        }
      return ta(m);
    }
    function ya(a, b) {
      var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
          var l, m, o, p = 0, q = '0', r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k), v = w += null == t ? 1 : Math.random() || 0.1, x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while (o = a[m++])
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (p += q, c && q !== p) {
            m = 0;
            while (o = b[m++])
              o(r, s, g, h);
            if (f) {
              if (p > 0)
                while (q--)
                  r[q] || s[q] || (s[q] = F.call(i));
              s = va(s);
            }
            H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && (w = v, j = t), r;
        };
      return c ? ia(f) : f;
    }
    return h = ga.compile = function (a, b) {
      var c, d = [], e = [], f = A[a + ' '];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)
          f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, ya(e, d)), f.selector = a;
      }
      return f;
    }, i = ga.select = function (a, b, e, f) {
      var i, j, k, l, m, n = 'function' == typeof a && a, o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)
            return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type])
            break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a)
              return H.apply(e, f), e;
            break;
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
    }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement('div'));
    }), ja(function (a) {
      return a.innerHTML = '<a href=\'#\'></a>', '#' === a.firstChild.getAttribute('href');
    }) || ka('type|href|height|width', function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' === a.firstChild.getAttribute('value');
    }) || ka('value', function (a, b, c) {
      return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute('disabled');
    }) || ka(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[':'] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (n.isFunction(b))
      return n.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return n.grep(a, function (a) {
        return a === b !== c;
      });
    if ('string' == typeof b) {
      if (w.test(b))
        return n.filter(b, a, c);
      b = n.filter(b, a);
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function (a) {
      var b, c = this.length, d = [], e = this;
      if ('string' != typeof a)
        return this.pushStack(n(a).filter(function () {
          for (b = 0; c > b; b++)
            if (n.contains(e[b], this))
              return !0;
        }));
      for (b = 0; c > b; b++)
        n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + ' ' + a : a, d;
    },
    filter: function (a) {
      return this.pushStack(x(this, a || [], !1));
    },
    not: function (a) {
      return this.pushStack(x(this, a || [], !0));
    },
    is: function (a) {
      return !!x(this, 'string' == typeof a && u.test(a) ? n(a) : a || [], !1).length;
    }
  });
  var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
      var c, d;
      if (!a)
        return this;
      if ('string' == typeof a) {
        if (c = '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3 ? [
            null,
            a,
            null
          ] : z.exec(a), !c || !c[1] && b)
          return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
            for (c in b)
              n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? 'undefined' != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
    };
  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/, C = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  n.extend({
    dir: function (a, b, c) {
      var d = [], e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && n(a).is(c))
            break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    }
  }), n.fn.extend({
    has: function (a) {
      var b = n(a, this), c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++)
          if (n.contains(this, b[a]))
            return !0;
      });
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || 'string' != typeof a ? n(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
      return this.pushStack(f.length > 1 ? n.unique(f) : f);
    },
    index: function (a) {
      return a ? 'string' == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function (a) {
      return n.dir(a, 'parentNode');
    },
    parentsUntil: function (a, b, c) {
      return n.dir(a, 'parentNode', c);
    },
    next: function (a) {
      return D(a, 'nextSibling');
    },
    prev: function (a) {
      return D(a, 'previousSibling');
    },
    nextAll: function (a) {
      return n.dir(a, 'nextSibling');
    },
    prevAll: function (a) {
      return n.dir(a, 'previousSibling');
    },
    nextUntil: function (a, b, c) {
      return n.dir(a, 'nextSibling', c);
    },
    prevUntil: function (a, b, c) {
      return n.dir(a, 'previousSibling', c);
    },
    siblings: function (a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function (a) {
      return n.sibling(a.firstChild);
    },
    contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return 'Until' !== a.slice(-5) && (d = c), d && 'string' == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var E = /\S+/g, F = {};
  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }
  n.Callbacks = function (a) {
    a = 'string' == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
        for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
          if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
      }, k = {
        add: function () {
          if (h) {
            var c = h.length;
            !function g(b) {
              n.each(b, function (b, c) {
                var d = n.type(c);
                'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && g(c);
              });
            }(arguments), d ? f = h.length : b && (e = c, j(b));
          }
          return this;
        },
        remove: function () {
          return h && n.each(arguments, function (a, b) {
            var c;
            while ((c = n.inArray(b, h, c)) > -1)
              h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
          }), this;
        },
        has: function (a) {
          return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return h = [], f = 0, this;
        },
        disable: function () {
          return h = i = b = void 0, this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return i = void 0, b || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, b) {
          return !h || c && !i || (b = b || [], b = [
            a,
            b.slice ? b.slice() : b
          ], d ? i.push(b) : j(b)), this;
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        }
      };
    return k;
  }, n.extend({
    Deferred: function (a) {
      var b = [
          [
            'resolve',
            'done',
            n.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            n.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            n.Callbacks('memory')
          ]
        ], c = 'pending', d = {
          state: function () {
            return c;
          },
          always: function () {
            return e.done(arguments).fail(arguments), this;
          },
          then: function () {
            var a = arguments;
            return n.Deferred(function (c) {
              n.each(b, function (b, f) {
                var g = n.isFunction(a[b]) && a[b];
                e[f[1]](function () {
                  var a = g && g.apply(this, arguments);
                  a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
                });
              }), a = null;
            }).promise();
          },
          promise: function (a) {
            return null != a ? n.extend(a, d) : d;
          }
        }, e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2], h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + 'With'](this === e ? d : this, arguments), this;
        }, e[f[0] + 'With'] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function (a) {
      var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
          return function (e) {
            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
          };
        }, i, j, k;
      if (e > 1)
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
          c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready'))));
    }
  });
  function I() {
    l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready();
  }
  n.ready.promise = function (b) {
    return H || (H = n.Deferred(), 'complete' === l.readyState ? setTimeout(n.ready) : (l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))), H.promise(b);
  }, n.ready.promise();
  var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0, i = a.length, j = null == c;
    if ('object' === n.type(c)) {
      e = !0;
      for (h in c)
        n.access(a, b, h, c[h], !0, f, g);
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
        return j.call(n(a), c);
      })), b))
      for (; i > h; h++)
        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  function K() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {};
      }
    }), this.expando = n.expando + K.uid++;
  }
  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function (a) {
      if (!K.accepts(a))
        return 0;
      var b = {}, c = a[this.expando];
      if (!c) {
        c = K.uid++;
        try {
          b[this.expando] = { value: c }, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, n.extend(a, b);
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c;
    },
    set: function (a, b, c) {
      var d, e = this.key(a), f = this.cache[e];
      if ('string' == typeof b)
        f[b] = c;
      else if (n.isEmptyObject(f))
        n.extend(this.cache[e], b);
      else
        for (d in b)
          f[d] = b[d];
      return f;
    },
    get: function (a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b];
    },
    access: function (a, b, c) {
      var d;
      return void 0 === b || b && 'string' == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function (a, b) {
      var c, d, e, f = this.key(a), g = this.cache[f];
      if (void 0 === b)
        this.cache[f] = {};
      else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [
          b,
          e
        ] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
        while (c--)
          delete g[d[c]];
      }
    },
    hasData: function (a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    },
    discard: function (a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    }
  };
  var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (d = 'data-' + b.replace(O, '-$1').toLowerCase(), c = a.getAttribute(d), 'string' == typeof c) {
        try {
          c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : +c + '' === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {
        }
        M.set(a, b, c);
      } else
        c = void 0;
    return c;
  }
  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, 'hasDataAttrs'))) {
          c = g.length;
          while (c--)
            g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          L.set(f, 'hasDataAttrs', !0);
        }
        return e;
      }
      return 'object' == typeof a ? this.each(function () {
        M.set(this, a);
      }) : J(this, function (b) {
        var c, d = n.camelCase(a);
        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c)
            return c;
          if (c = M.get(f, d), void 0 !== c)
            return c;
          if (c = P(f, d, void 0), void 0 !== c)
            return c;
        } else
          this.each(function () {
            var c = M.get(this, d);
            M.set(this, d, b), -1 !== a.indexOf('-') && void 0 !== c && M.set(this, a, b);
          });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function (a) {
      return this.each(function () {
        M.remove(this, a);
      });
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || 'fx') + 'queue', d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function (a, b) {
      b = b || 'fx';
      var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
          n.dequeue(a, b);
        };
      'inprogress' === e && (e = c.shift(), d--), e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function (a, b) {
      var c = b + 'queueHooks';
      return L.get(a, c) || L.access(a, c, {
        empty: n.Callbacks('once memory').add(function () {
          L.remove(a, [
            b + 'queue',
            c
          ]);
        })
      });
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return 'string' != typeof a && (b = a, a = 'fx', c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function (a) {
      return this.queue(a || 'fx', []);
    },
    promise: function (a, b) {
      var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
          --d || e.resolveWith(f, [f]);
        };
      'string' != typeof a && (b = a, a = void 0), a = a || 'fx';
      while (g--)
        c = L.get(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b);
    }
  });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], S = function (a, b) {
      return a = b || a, 'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a);
    }, T = /^(?:checkbox|radio)$/i;
  !function () {
    var a = l.createDocumentFragment(), b = a.appendChild(l.createElement('div')), c = l.createElement('input');
    c.setAttribute('type', 'radio'), c.setAttribute('checked', 'checked'), c.setAttribute('name', 't'), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var U = 'undefined';
  k.focusinBubbles = 'onfocusin' in a;
  var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return l.activeElement;
    } catch (a) {
    }
  }
  n.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || '').match(E) || [''], j = b.length;
        while (j--)
          h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join('.')
          }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
      }
    },
    remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        b = (b || '').match(E) || [''], j = b.length;
        while (j--)
          if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), g = f = m.length;
            while (f--)
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ('**' !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else
            for (o in i)
              n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
      }
    },
    trigger: function (b, c, d, e) {
      var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, 'type') ? b.type : b, r = j.call(b, 'namespace') ? b.namespace.split('.') : [];
      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), k = q.indexOf(':') < 0 && 'on' + q, b = b[n.expando] ? b : new n.Event(q, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
            p.push(g), h = g;
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())
          b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle'), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    },
    dispatch: function (a) {
      a = n.event.fix(a);
      var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, 'events') || {})[a.type] || [], k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
      if (h && i.nodeType && (!a.button || 'click' !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || 'click' !== a.type) {
            for (d = [], c = 0; h > c; c++)
              f = b[c], e = f.selector + ' ', void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
            d.length && g.push({
              elem: i,
              handlers: d
            });
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    fix: function (a) {
      if (a[n.expando])
        return a;
      var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--)
        c = d[b], a[c] = f[c];
      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type && this.click && n.nodeName(this, 'input') ? (this.click(), !1) : void 0;
        },
        _default: function (a) {
          return n.nodeName(a.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    isDefaultPrevented: $,
    isPropagationStopped: $,
    isImmediatePropagationStopped: $,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), k.focusinBubbles || n.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };
    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this, e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
      },
      teardown: function () {
        var d = this.ownerDocument || this, e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
      }
    };
  }), n.fn.extend({
    on: function (a, b, c, d, e) {
      var f, g;
      if ('object' == typeof a) {
        'string' != typeof b && (c = c || b, b = void 0);
        for (g in a)
          this.on(g, b, c, a[g], e);
        return this;
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ('string' == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
        d = $;
      else if (!d)
        return this;
      return 1 === e && (f = d, d = function (a) {
        return n().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    },
    one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)
        return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;
      if ('object' == typeof a) {
        for (e in a)
          this.off(e, b, a[e]);
        return this;
      }
      return (b === !1 || 'function' == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;
  function ja(a, b) {
    return n.nodeName(a, 'table') && n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
  }
  function ka(a) {
    return a.type = (null !== a.getAttribute('type')) + '/' + a.type, a;
  }
  function la(a) {
    var b = ga.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute('type'), a;
  }
  function ma(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval'));
  }
  function na(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++)
            n.event.add(b, e, j[e][c]);
      }
      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
    }
  }
  function oa(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || '*') : a.querySelectorAll ? a.querySelectorAll(b || '*') : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }
  function pa(a, b) {
    var c = b.nodeName.toLowerCase();
    'input' === c && T.test(a.type) ? b.checked = a.checked : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
  }
  n.extend({
    clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)
          pa(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)
            na(f[d], g[d]);
        else
          na(a, h);
      return g = oa(h, 'script'), g.length > 0 && ma(g, !i && oa(a, 'script')), h;
    },
    buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
        if (e = a[m], e || 0 === e)
          if ('object' === n.type(e))
            n.merge(l, e.nodeType ? [e] : e);
          else if (ca.test(e)) {
            f = f || k.appendChild(b.createElement('div')), g = (ba.exec(e) || [
              '',
              ''
            ])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, '<$1></$2>') + h[2], j = h[0];
            while (j--)
              f = f.lastChild;
            n.merge(l, f.childNodes), f = k.firstChild, f.textContent = '';
          } else
            l.push(b.createTextNode(e));
      k.textContent = '', m = 0;
      while (e = l[m++])
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), 'script'), i && ma(f), c)) {
          j = 0;
          while (e = f[j++])
            fa.test(e.type || '') && c.push(e);
        }
      return k;
    },
    cleanData: function (a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events)
            for (d in b.events)
              f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e];
        }
        delete M.cache[c[M.expando]];
      }
    }
  }), n.fn.extend({
    text: function (a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = ja(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function (a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
        b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, 'script')), c.parentNode.removeChild(c));
      return this;
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++)
        1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = '');
      return this;
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function (a) {
      return J(this, function (a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a && 1 === b.nodeType)
          return b.innerHTML;
        if ('string' == typeof a && !da.test(a) && !ia[(ba.exec(a) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          a = a.replace(aa, '<$1></$2>');
          try {
            for (; d > c; c++)
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
            b = 0;
          } catch (e) {
          }
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function () {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function (a) {
      return this.remove(a, !0);
    },
    domManip: function (a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
      if (q || l > 1 && 'string' == typeof p && !k.checkClone && ea.test(p))
        return this.each(function (c) {
          var d = m.eq(c);
          q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
        });
      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(oa(c, 'script'), ka), g = f.length; l > j; j++)
          h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, 'script'))), b.call(this[j], h, j);
        if (g)
          for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)
            h = f[j], fa.test(h.type || '') && !L.access(h, 'globalEval') && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, '')));
      }
      return this;
    }
  }), n.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
        c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      return this.pushStack(d);
    };
  });
  var qa, ra = {};
  function sa(b, c) {
    var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], 'display');
    return e.detach(), f;
  }
  function ta(a) {
    var b = l, c = ra[a];
    return c || (c = sa(a, b), 'none' !== c && c || (qa = (qa || n('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
  }
  var ua = /^margin/, va = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'), wa = function (b) {
      return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
  function xa(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ('' !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + '' : g;
  }
  function ya(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }
  !function () {
    var b, c, d = l.documentElement, e = l.createElement('div'), f = l.createElement('div');
    if (f.style) {
      f.style.backgroundClip = 'content-box', f.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' === f.style.backgroundClip, e.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', e.appendChild(f);
      function g() {
        f.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', f.innerHTML = '', d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = '1%' !== g.top, c = '4px' === g.width, d.removeChild(e);
      }
      a.getComputedStyle && n.extend(k, {
        pixelPosition: function () {
          return g(), b;
        },
        boxSizingReliable: function () {
          return null == c && g(), c;
        },
        reliableMarginRight: function () {
          var b, c = f.appendChild(l.createElement('div'));
          return c.style.cssText = f.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', c.style.marginRight = c.style.width = '0', f.style.width = '1px', d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
        }
      });
    }
  }(), n.swap = function (a, b, c, d) {
    var e, f, g = {};
    for (f in b)
      g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b)
      a.style[f] = g[f];
    return e;
  };
  var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp('^(' + Q + ')(.*)$', 'i'), Ba = new RegExp('^([+-])=(' + Q + ')', 'i'), Ca = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, Da = {
      letterSpacing: '0',
      fontWeight: '400'
    }, Ea = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function Fa(a, b) {
    if (b in a)
      return b;
    var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
    while (e--)
      if (b = Ea[e] + c, b in a)
        return b;
    return d;
  }
  function Ga(a, b, c) {
    var d = Aa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
  }
  function Ha(a, b, c, d, e) {
    for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
      'margin' === c && (g += n.css(a, c + R[f], !0, e)), d ? ('content' === c && (g -= n.css(a, 'padding' + R[f], !0, e)), 'margin' !== c && (g -= n.css(a, 'border' + R[f] + 'Width', !0, e))) : (g += n.css(a, 'padding' + R[f], !0, e), 'padding' !== c && (g += n.css(a, 'border' + R[f] + 'Width', !0, e)));
    return g;
  }
  function Ia(a, b, c) {
    var d = !0, e = 'width' === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = 'border-box' === n.css(a, 'boxSizing', !1, f);
    if (0 >= e || null == e) {
      if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))
        return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }
    return e + Ha(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
  }
  function Ja(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      d = a[g], d.style && (f[g] = L.get(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && S(d) && (f[g] = L.access(d, 'olddisplay', ta(d.nodeName)))) : (e = S(d), 'none' === c && e || L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
    for (g = 0; h > g; g++)
      d = a[g], d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
    return a;
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xa(a, 'opacity');
            return '' === c ? '1' : c;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { 'float': 'cssFloat' },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b), i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 'string' === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || n.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), g && 'set' in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    },
    css: function (a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && 'get' in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), 'normal' === e && b in Da && (e = Da[b]), '' === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
    }
  }), n.each([
    'height',
    'width'
  ], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? za.test(n.css(a, 'display')) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
          return Ia(a, b, d);
        }) : Ia(a, b, d) : void 0;
      },
      set: function (a, c, d) {
        var e = d && wa(a);
        return Ga(a, c, d ? Ha(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, e), e) : 0);
      }
    };
  }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, { display: 'inline-block' }, xa, [
      a,
      'marginRight'
    ]) : void 0;
  }), n.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
          e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        return e;
      }
    }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
  }), n.fn.extend({
    css: function (a, b) {
      return J(this, function (a, b, c) {
        var d, e, f = {}, g = 0;
        if (n.isArray(b)) {
          for (d = wa(a), e = b.length; e > g; g++)
            f[b[g]] = n.css(a, b[g], !1, d);
          return f;
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function () {
      return Ja(this, !0);
    },
    hide: function () {
      return Ja(this);
    },
    toggle: function (a) {
      return 'boolean' == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide();
      });
    }
  });
  function Ka(a, b, c, d, e) {
    return new Ka.prototype.init(a, b, c, d, e);
  }
  n.Tween = Ka, Ka.prototype = {
    constructor: Ka,
    init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? '' : 'px');
    },
    cur: function () {
      var a = Ka.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
    },
    run: function (a) {
      var b, c = Ka.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
    }
  }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
      },
      set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      }
    }
  }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function (a) {
      return a;
    },
    swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2;
    }
  }, n.fx = Ka.prototype.init, n.fx.step = {};
  var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'), Pa = /queueHooks$/, Qa = [Va], Ra = {
      '*': [function (a, b) {
          var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? '' : 'px'), g = (n.cssNumber[a] || 'px' !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
          if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do
              h = h || '.5', g /= h, n.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
        }]
    };
  function Sa() {
    return setTimeout(function () {
      La = void 0;
    }), La = n.now();
  }
  function Ta(a, b) {
    var c, d = 0, e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      c = R[d], e['margin' + c] = e['padding' + c] = a;
    return b && (e.opacity = e.width = a), e;
  }
  function Ua(a, b, c) {
    for (var d, e = (Ra[b] || []).concat(Ra['*']), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a))
        return d;
  }
  function Va(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, 'fxshow');
    c.queue || (h = n._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
      });
    })), 1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
      o.overflow,
      o.overflowX,
      o.overflowY
    ], j = n.css(a, 'display'), k = 'none' === j ? L.get(a, 'olddisplay') || ta(a.nodeName) : j, 'inline' === k && 'none' === n.css(a, 'float') && (o.display = 'inline-block')), c.overflow && (o.overflow = 'hidden', l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));
    for (d in b)
      if (e = b[d], Na.exec(e)) {
        if (delete b[d], f = f || 'toggle' === e, e === (p ? 'hide' : 'show')) {
          if ('show' !== e || !q || void 0 === q[d])
            continue;
          p = !0;
        }
        m[d] = q && q[d] || n.style(a, d);
      } else
        j = void 0;
    if (n.isEmptyObject(m))
      'inline' === ('none' === j ? ta(a.nodeName) : j) && (o.display = j);
    else {
      q ? 'hidden' in q && (p = q.hidden) : q = L.access(a, 'fxshow', {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;
        L.remove(a, 'fxshow');
        for (b in m)
          n.style(a, b, m[b]);
      });
      for (d in m)
        g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
    }
  }
  function Wa(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && 'expand' in g) {
        f = g.expand(f), delete a[d];
        for (c in f)
          c in a || (a[c] = f[c], b[c] = e);
      } else
        b[d] = e;
  }
  function Xa(a, b, c) {
    var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
        delete i.elem;
      }), i = function () {
        if (e)
          return !1;
        for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
          j.tweens[g].run(f);
        return h.notifyWith(a, [
          j,
          f,
          c
        ]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
      }, j = h.promise({
        elem: a,
        props: n.extend({}, b),
        opts: n.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: La || Sa(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0, d = b ? j.tweens.length : 0;
          if (e)
            return this;
          for (e = !0; d > c; c++)
            j.tweens[c].run(1);
          return b ? h.resolveWith(a, [
            j,
            b
          ]) : h.rejectWith(a, [
            j,
            b
          ]), this;
        }
      }), k = j.props;
    for (Wa(k, j.opts.specialEasing); g > f; f++)
      if (d = Qa[f].call(j, a, k, j.opts))
        return d;
    return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }
  n.Animation = n.extend(Xa, {
    tweener: function (a, b) {
      n.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');
      for (var c, d = 0, e = a.length; e > d; d++)
        c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? Qa.unshift(a) : Qa.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && 'object' == typeof a ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(S).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
    },
    animate: function (a, b, c, d) {
      var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
          var b = Xa(this, n.extend({}, a), f);
          (e || L.get(this, 'finish')) && b.stop(!0);
        };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c);
      };
      return 'string' != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
        var b = !0, e = null != a && a + 'queueHooks', f = n.timers, g = L.get(this);
        if (e)
          g[e] && g[e].stop && d(g[e]);
        else
          for (e in g)
            g[e] && g[e].stop && Pa.test(e) && d(g[e]);
        for (e = f.length; e--;)
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function (a) {
      return a !== !1 && (a = a || 'fx'), this.each(function () {
        var b, c = L.get(this), d = c[a + 'queue'], e = c[a + 'queueHooks'], f = n.timers, g = d ? d.length : 0;
        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++)
          d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish;
      });
    }
  }), n.each([
    'toggle',
    'show',
    'hide'
  ], function (a, b) {
    var c = n.fn[b];
    n.fn[b] = function (a, d, e) {
      return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: Ta('show'),
    slideUp: Ta('hide'),
    slideToggle: Ta('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a, b = 0, c = n.timers;
    for (La = n.now(); b < c.length; b++)
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    c.length || n.fx.stop(), La = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    clearInterval(Ma), Ma = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
      var d = setTimeout(b, a);
      c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a = l.createElement('input'), b = l.createElement('select'), c = b.appendChild(l.createElement('option'));
    a.type = 'checkbox', k.checkOn = '' !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement('input'), a.value = 't', a.type = 'radio', k.radioValue = 't' === a.value;
  }();
  var Ya, Za, $a = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f)
        return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c) : void n.removeAttr(a, b));
    },
    removeAttr: function (a, b) {
      var c, d, e = 0, f = b && b.match(E);
      if (f && 1 === a.nodeType)
        while (c = f[e++])
          d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
            var c = a.value;
            return a.setAttribute('type', b), c && (a.value = c), b;
          }
        }
      }
    }
  }), Za = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $a[b] || n.find.attr;
    $a[b] = function (a, b, d) {
      var e, f;
      return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
    };
  });
  var _a = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g)
        return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          return a.hasAttribute('tabindex') || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }
  }), n.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    n.propFix[this.toLowerCase()] = this;
  });
  var ab = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h = 'string' == typeof a && a, i = 0, j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || '').match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : ' ')) {
            f = 0;
            while (e = b[f++])
              d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
            g = n.trim(d), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b, c, d, e, f, g, h = 0 === arguments.length || 'string' == typeof a && a, i = 0, j = this.length;
      if (n.isFunction(a))
        return this.each(function (b) {
          n(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || '').match(E) || []; j > i; i++)
          if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : '')) {
            f = 0;
            while (e = b[f++])
              while (d.indexOf(' ' + e + ' ') >= 0)
                d = d.replace(' ' + e + ' ', ' ');
            g = a ? n.trim(d) : '', c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ('string' === c) {
          var b, d = 0, e = n(this), f = a.match(E) || [];
          while (b = f[d++])
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        } else
          (c === U || 'boolean' === c) && (this.className && L.set(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : L.get(this, '__className__') || '');
      });
    },
    hasClass: function (a) {
      for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(ab, ' ').indexOf(b) >= 0)
          return !0;
      return !1;
    }
  });
  var bb = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length)
          return d = n.isFunction(a), this.each(function (c) {
            var e;
            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = '' : 'number' == typeof e ? e += '' : n.isArray(e) && (e = n.map(e, function (a) {
              return null == a ? '' : a + '';
            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e));
          });
        if (e)
          return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(bb, '') : null == c ? '' : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, 'value');
          return null != b ? b : n.trim(n.text(a));
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))) {
              if (b = n(c).val(), f)
                return b;
              g.push(b);
            }
          return g;
        },
        set: function (a, b) {
          var c, d, e = a.options, f = n.makeArray(b), g = e.length;
          while (g--)
            d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f;
        }
      }
    }
  }), n.each([
    'radio',
    'checkbox'
  ], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
      }
    }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute('value') ? 'on' : a.value;
    });
  }), n.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function (a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function (a, b) {
      return this.off(a, null, b);
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
    }
  });
  var cb = n.now(), db = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + '');
  }, n.parseXML = function (a) {
    var b, c;
    if (!a || 'string' != typeof a)
      return null;
    try {
      c = new DOMParser(), b = c.parseFromString(a, 'text/xml');
    } catch (d) {
      b = void 0;
    }
    return (!b || b.getElementsByTagName('parsererror').length) && n.error('Invalid XML: ' + a), b;
  };
  var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = '*/'.concat('*'), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];
  function qb(a) {
    return function (b, c) {
      'string' != typeof b && (c = b, b = '*');
      var d, e = 0, f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))
        while (d = f[e++])
          '+' === d[0] ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
    };
  }
  function rb(a, b, c, d) {
    var e = {}, f = a === mb;
    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return 'string' != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }
    return g(b.dataTypes[0]) || !e['*'] && g('*');
  }
  function sb(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b)
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a;
  }
  function tb(a, b, c) {
    var d, e, f, g, h = a.contents, i = a.dataTypes;
    while ('*' === i[0])
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c)
      f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + ' ' + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function ub(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters)
        j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ('*' === f)
          f = i;
        else if ('*' !== i && i !== f) {
          if (g = j[i + ' ' + f] || j['* ' + f], !g)
            for (e in j)
              if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a['throws'])
              b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: 'parsererror',
                  error: g ? l : 'No conversion from ' + i + ' to ' + f
                };
              }
        }
    return {
      state: 'success',
      data: b
    };
  }
  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ob,
      type: 'GET',
      isLocal: hb.test(pb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': nb,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': n.parseJSON,
        'text xml': n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
    },
    ajaxPrefilter: qb(lb),
    ajaxTransport: qb(mb),
    ajax: function (a, b) {
      'object' == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks('once memory'), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = 'canceled', v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!f) {
                f = {};
                while (b = gb.exec(e))
                  f[b[1].toLowerCase()] = b[2];
              }
              b = f[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? e : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a)
                  q[b] = [
                    q[b],
                    a[b]
                  ];
              else
                v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return c && c.abort(b), x(0, b), this;
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + '').replace(eb, '').replace(jb, pb[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ('http:' === h[1] ? '80' : '443')) === (pb[3] || ('http:' === pb[1] ? '80' : '443')))), k.data && k.processData && 'string' != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)
        return v;
      i = n.event && k.global, i && 0 === n.active++ && n.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, '$1_=' + cb++) : d + (db.test(d) ? '&' : '?') + '_=' + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]), n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + nb + '; q=0.01' : '') : k.accepts['*']);
      for (j in k.headers)
        v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = 'abort';
      for (j in {
          success: 1,
          error: 1,
          complete: 1
        })
        v[j](k[j]);
      if (c = rb(mb, k, b, v)) {
        v.readyState = 1, i && m.trigger('ajaxSend', [
          v,
          k
        ]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort('timeout');
        }, k.timeout));
        try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t))
            throw w;
          x(-1, w);
        }
      } else
        x(-1, 'No Transport');
      function x(a, b, f, h) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (n.lastModified[d] = w), w = v.getResponseHeader('etag'), w && (n.etag[d] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [
          r,
          x,
          v
        ]) : o.rejectWith(l, [
          v,
          x,
          s
        ]), v.statusCode(q), q = void 0, i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [
          v,
          k,
          j ? r : s
        ]), p.fireWith(l, [
          v,
          x
        ]), i && (m.trigger('ajaxComplete', [
          v,
          k
        ]), --n.active || n.event.trigger('ajaxStop')));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, 'json');
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, 'script');
    }
  }), n.each([
    'get',
    'post'
  ], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      });
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      'throws': !0
    });
  }, n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;
        while (a.firstElementChild)
          a = a.firstElementChild;
        return a;
      }).append(this)), this);
    },
    wrapInner: function (a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b));
      } : function () {
        var b = n(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
      }).end();
    }
  }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (n.isArray(b))
      n.each(b, function (b, e) {
        c || wb.test(a) ? d(a, e) : Ab(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
      });
    else if (c || 'object' !== n.type(b))
      d(a, b);
    else
      for (e in b)
        Ab(a + '[' + e + ']', b[e], c, d);
  }
  n.param = function (a, b) {
    var c, d = [], e = function (a, b) {
        b = n.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
      };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
      n.each(a, function () {
        e(this.name, this.value);
      });
    else
      for (c in a)
        Ab(c, a[c], b, e);
    return d.join('&').replace(vb, '+');
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, 'elements');
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(':disabled') && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(xb, '\r\n')
          };
        }) : {
          name: b.name,
          value: c.replace(xb, '\r\n')
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {
    }
  };
  var Bb = 0, Cb = {}, Db = {
      0: 200,
      1223: 204
    }, Eb = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent('onunload', function () {
    for (var a in Cb)
      Cb[a]();
  }), k.cors = !!Eb && 'withCredentials' in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
    var b;
    return k.cors || Eb && !a.crossDomain ? {
      send: function (c, d) {
        var e, f = a.xhr(), g = ++Bb;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
          for (e in a.xhrFields)
            f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
        for (e in c)
          f.setRequestHeader(e, c[e]);
        b = function (a) {
          return function () {
            b && (delete Cb[g], b = f.onload = f.onerror = null, 'abort' === a ? f.abort() : 'error' === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, 'string' == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = b(), f.onerror = b('error'), b = Cb[g] = b('abort');
        try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (b)
            throw h;
        }
      },
      abort: function () {
        b && b();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter('script', function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
  }), n.ajaxTransport('script', function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (d, e) {
          b = n('<script>').prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on('load error', c = function (a) {
            b.remove(), c = null, a && e('error' === a.type ? 404 : 200, a.type);
          }), l.head.appendChild(b[0]);
        },
        abort: function () {
          c && c();
        }
      };
    }
  });
  var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var a = Fb.pop() || n.expando + '_' + cb++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter('json jsonp', function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && Gb.test(b.data) && 'data');
    return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, '$1' + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
      return g || n.error(e + ' was not called'), g[0];
    }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), 'script') : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || 'string' != typeof a)
      return null;
    'boolean' == typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a), e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  };
  var Hb = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ('string' != typeof a && Hb)
      return Hb.apply(this, arguments);
    var d, e, f, g = this, h = a.indexOf(' ');
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && 'object' == typeof b && (e = 'POST'), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: 'html',
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [
        a.responseText,
        b,
        a
      ]);
    }), this;
  }, n.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };
  var Ib = a.document.documentElement;
  function Jb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  n.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, 'position'), l = n(a), m = {};
      'static' === k && (a.style.position = 'relative'), h = l.offset(), f = n.css(a, 'top'), i = n.css(a, 'left'), j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), 'using' in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length)
        return void 0 === a ? this : this.each(function (b) {
          n.offset.setOffset(this, a, b);
        });
      var b, c, d = this[0], e = {
          top: 0,
          left: 0
        }, f = d && d.ownerDocument;
      if (f)
        return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
          top: e.top + c.pageYOffset - b.clientTop,
          left: e.left + c.pageXOffset - b.clientLeft
        }) : e;
    },
    position: function () {
      if (this[0]) {
        var a, b, c = this[0], d = {
            top: 0,
            left: 0
          };
        return 'fixed' === n.css(c, 'position') ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], 'html') || (d = a.offset()), d.top += n.css(a[0], 'borderTopWidth', !0), d.left += n.css(a[0], 'borderLeftWidth', !0)), {
          top: b.top - d.top - n.css(c, 'marginTop', !0),
          left: b.left - d.left - n.css(c, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || Ib;
        while (a && !n.nodeName(a, 'html') && 'static' === n.css(a, 'position'))
          a = a.offsetParent;
        return a || Ib;
      });
    }
  }), n.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (b, c) {
    var d = 'pageYOffset' === c;
    n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Jb(b);
        return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
      }, b, e, arguments.length, null);
    };
  }), n.each([
    'top',
    'left'
  ], function (a, b) {
    n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
      return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + 'px' : c) : void 0;
    });
  }), n.each({
    Height: 'height',
    Width: 'width'
  }, function (a, b) {
    n.each({
      padding: 'inner' + a,
      content: b,
      '': 'outer' + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || 'boolean' != typeof d), g = c || (d === !0 || e === !0 ? 'margin' : 'border');
        return J(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack;
  var Kb = a.jQuery, Lb = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
  }, typeof b === U && (a.jQuery = a.$ = n), n;
});
jquery = window.jQuery;
customizejQuery = function (jQuery) {
  var jQ = jQuery.noConflict(true);
  // Deleting properties are required because noConflict mode sets these properties with undefined values if jQuery was not present earlier
  if (typeof window.jQuery === 'undefined') {
    try {
      delete window.jQuery;
    } catch (e) {
    }
  }
  if (typeof window.$ === 'undefined') {
    try {
      delete window.$;
    } catch (e) {
    }
  }
  return jQ;
}(jquery);
iframe = function (exports, $pushcrew) {
  var iframe = {
    createAndAddStyling: function (modalType) {
      var cssLoaded = $pushcrew.Deferred();
      this.set(cssLoaded);
      $pushcrew('#pushcrew-iframe').addClass('pushcrew-iframe-' + modalType);
      return cssLoaded;
    },
    set: function (cssLoaded) {
      var iframeContents;
      if ($pushcrew('#pushcrew-iframe').length === 0) {
        (function tryAddingIframe() {
          if (!$pushcrew('body').length) {
            setTimeout(tryAddingIframe, 50);
            return;
          }
          $pushcrew('body').append('<div id="pushcrew-iframe-wrapper"></div>');
          var iframe;
          iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.id = 'pushcrew-iframe';
          iframe.onload = function () {
            if (!iframe.contentWindow) {
              return;
            }
            var head = iframe.contentWindow.document.head;
            var cssLinkEl = document.createElement('link');
            cssLinkEl.onload = function () {
              cssLoaded.resolve();
            };
            cssLinkEl.type = 'text/css';
            cssLinkEl.rel = 'stylesheet';
            cssLinkEl.href = pushcrewConfig.serverSyncUrl + '/http-v4/css/pc-iframe.css';
            head.appendChild(cssLinkEl);
          };
          $pushcrew('#pushcrew-iframe-wrapper').append(iframe);
        }());
      } else {
        iframeContents = $pushcrew('#pushcrew-iframe').contents();
        var $body = iframeContents.find('body');
        $body.empty();
        cssLoaded.resolve();
      }
      return cssLoaded;
    }
  };
  return iframe;
}(iframe, customizejQuery);
setSubscriberId = function (globalConfig, storageUtil) {
  function setSubscriberId() {
    window._pushcrewDebuggingQueue = window._pushcrewDebuggingQueue || [];
    window._pushcrewDebuggingQueue.push('Inside setSubscriberId function');
    var subscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id') || false;
    if (HTTP && storageUtil.getFromStorage('wingify_push_subscription_status') === 'blocked' || !HTTP && Notification.permission === 'denied') {
      subscriberId = -1;
    }
    globalConfig.pushcrew.subscriberId = subscriberId;
    window._pushcrewDebuggingQueue.push('setSubscriberId function Exit. SubscriberId is: ' + subscriberId);
  }
  return setSubscriberId;
}(globalConfig, storageUtil);
tslib = function () {
  var __awaiter, __generator, __assign;
  __awaiter = function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : new P(function (resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  __generator = function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
    return g = {
      next: verb(0),
      'throw': verb(1),
      'return': verb(2)
    }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () {
      return this;
    }), g;
    function verb(n) {
      return function (v) {
        return step([
          n,
          v
        ]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [
              op[0] & 2,
              t.value
            ];
          switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [
            6,
            e
          ];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  };
  __assign = function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return {
    __awaiter: __awaiter,
    __generator: __generator,
    __assign: __assign
  };
}();
IndexedDb = function (exports, tslib_1) {
  /* References
   * Opening DB Algorithm - https://www.w3.org/TR/IndexedDB/#opening
   * Closing DB Algorithm - https://www.w3.org/TR/IndexedDB/#closing-connection
   * Deleting DB Algorithm - https://www.w3.org/TR/IndexedDB/#deleting-a-database
   * Basic Usage - https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
   */
  var ErrorCodes;
  (function (ErrorCodes) {
    ErrorCodes[ErrorCodes['DB_BLOCKED_ERR'] = 0] = 'DB_BLOCKED_ERR';
    ErrorCodes[ErrorCodes['DB_OPEN_ERR'] = 1] = 'DB_OPEN_ERR';
    ErrorCodes[ErrorCodes['INDEXED_DB_NOT_SUPPORTED'] = 2] = 'INDEXED_DB_NOT_SUPPORTED';
    ErrorCodes[ErrorCodes['DB_DELETE_ERR'] = 3] = 'DB_DELETE_ERR';
    ErrorCodes[ErrorCodes['RECORD_NOT_FOUND'] = 4] = 'RECORD_NOT_FOUND';
    ErrorCodes[ErrorCodes['PUT_REQUEST_ERR'] = 5] = 'PUT_REQUEST_ERR';
    ErrorCodes[ErrorCodes['PUT_FAILED'] = 6] = 'PUT_FAILED';
  }(ErrorCodes || (ErrorCodes = {})));
  var IndexedDb = function () {
    function IndexedDb(databaseName, objectStores) {
      var _this = this;
      this.databaseName = databaseName;
      this.objectStores = objectStores;
      this.openAndGetDataBase = function () {
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
          var err_1;
          return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
            case 0:
              if (!IndexedDb.isDatabaseOpen[this.databaseName]) {
                IndexedDb.isDatabaseOpen[this.databaseName] = this.openDatabase(this.databaseName);
              }
              _a.label = 1;
            case 1:
              _a.trys.push([
                1,
                3,
                ,
                4
              ]);
              return [
                4  /*yield*/,
                IndexedDb.isDatabaseOpen[this.databaseName]
              ];
            case 2:
              _a.sent();
              return [
                3  /*break*/,
                4
              ];
            case 3:
              err_1 = _a.sent();
              throw err_1;
            case 4:
              return [
                2  /*return*/,
                this.database
              ];
            }
          });
        });
      };
      this.onDatabaseUpgradeNeeded = function (event) {
        var db = event.target.result;
        for (var _i = 0, _a = Object.keys(_this.objectStores); _i < _a.length; _i++) {
          var objectStoreName = _a[_i];
          db.createObjectStore(objectStoreName, { keyPath: _this.objectStores[objectStoreName] });
        }
      };
      this.deleteDb = function () {
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
          var _this = this;
          return tslib_1.__generator(this, function (_a) {
            return [
              2  /*return*/,
              new Promise(function (resolve, reject) {
                var dbDeleteRequest = indexedDB.deleteDatabase(_this.databaseName);
                dbDeleteRequest.onerror = function (event) {
                  reject(ErrorCodes.DB_DELETE_ERR);
                };
                dbDeleteRequest.onsuccess = function (event) {
                  resolve();
                };
              })
            ];
          });
        });
      };
      this.closeDb = function () {
        return tslib_1.__awaiter(_this, void 0, void 0, function () {
          return tslib_1.__generator(this, function (_a) {
            try {
              this.database.close();
            } catch (e) {
            }
            IndexedDb.isDatabaseOpen[this.databaseName] = null;
            return [2  /*return*/];
          });
        });
      };
      if (!indexedDB || typeof indexedDB !== 'object') {
        this.isIndexedDbSupported = false;
      } else {
        this.isIndexedDbSupported = true;
      }
      if (!SERVICE_WORKER && typeof window._vwo_engage_persist_in_indexed_db !== 'undefined') {
        this.isIndexedDbSupported = !!window._vwo_engage_persist_in_indexed_db;
      }
    }
    IndexedDb.prototype.openDatabase = function (databaseName) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var request = indexedDB.open(databaseName, 1);
        // Request object can be undefined sometimes in rare cases
        if (!request) {
          return null;
        }
        request.onerror = _this.onDatabaseOpenError.bind(_this, reject);
        request.onblocked = _this.onDatabaseOpenBlocked.bind(_this, reject);
        request.onupgradeneeded = _this.onDatabaseUpgradeNeeded;
        request.onsuccess = function () {
          _this.database = request.result;
          _this.database.onerror = _this.onDatabaseError;
          _this.database.onversionchange = _this.onDatabaseVersionChange;
          resolve(_this.database);
        };
      });
    };
    IndexedDb.prototype.onDatabaseOpenError = function (reject, event) {
      // Prevent the error from bubbling up to global error handler in firefox
      event.preventDefault();
      var errorMessage = event.target.error.message;
      log('IndexedDb open error: ' + errorMessage);
      reject(ErrorCodes.DB_OPEN_ERR);
    };
    /**
     * In IndexedDb, errors bubble from request --> transaction --> database, bind error handler on database object
     * Instead of on every request and transaction
     */
    IndexedDb.prototype.onDatabaseError = function (event) {
      log('IndexedDb error : ' + event.target.errorCode);
    };
    // When blocked from browser settings or another version of same DB is open elsewhere
    IndexedDb.prototype.onDatabaseOpenBlocked = function (reject) {
      log('IndexedDb blocked');
      reject(ErrorCodes.DB_BLOCKED_ERR);
    };
    IndexedDb.prototype.onDatabaseVersionChange = function () {
      log('IndexedDb version changed');
    };
    IndexedDb.prototype.get = function (table, key) {
      return tslib_1.__awaiter(this, void 0, void 0, function () {
        var err_2;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
          switch (_a.label) {
          case 0:
            if (!this.isIndexedDbSupported) {
              throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
            }
            _a.label = 1;
          case 1:
            _a.trys.push([
              1,
              3,
              ,
              4
            ]);
            return [
              4  /*yield*/,
              this.openAndGetDataBase()
            ];
          case 2:
            _a.sent();
            return [
              3  /*break*/,
              4
            ];
          case 3:
            err_2 = _a.sent();
            throw err_2;
          case 4:
            return [
              2  /*return*/,
              new Promise(function (resolve, reject) {
                var transaction = _this.database.transaction(table);
                var request = transaction.objectStore(table).get(key);
                request.onsuccess = function () {
                  resolve(request.result);
                };
                request.onerror = function () {
                  log('IndexedDb - Record not found in DB');
                  reject(ErrorCodes.RECORD_NOT_FOUND);
                };
                transaction.oncomplete = _this.closeDb;
                transaction.onerror = _this.closeDb;
                transaction.onabort = _this.closeDb;
              })
            ];
          }
        });
      });
    };
    IndexedDb.prototype.put = function (table, record) {
      return tslib_1.__awaiter(this, void 0, void 0, function () {
        var err_3, err_4;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
          switch (_a.label) {
          case 0:
            if (!this.isIndexedDbSupported) {
              throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
            }
            _a.label = 1;
          case 1:
            _a.trys.push([
              1,
              3,
              ,
              4
            ]);
            return [
              4  /*yield*/,
              this.deleteDb()
            ];
          case 2:
            _a.sent();
            return [
              3  /*break*/,
              4
            ];
          case 3:
            err_3 = _a.sent();
            throw err_3;
          case 4:
            _a.trys.push([
              4,
              6,
              ,
              7
            ]);
            return [
              4  /*yield*/,
              this.openAndGetDataBase()
            ];
          case 5:
            _a.sent();
            return [
              3  /*break*/,
              7
            ];
          case 6:
            err_4 = _a.sent();
            throw err_4;
          case 7:
            return [
              2  /*return*/,
              new Promise(function (resolve, reject) {
                try {
                  var transaction = _this.database.transaction([table], 'readwrite');
                  var request = transaction.objectStore(table).put(record);
                  request.onsuccess = function () {
                    log('IndexedDb insert success');
                    resolve();
                  };
                  request.onerror = function () {
                    log('IndexedDb insert failed');
                    reject(ErrorCodes.PUT_REQUEST_ERR);
                  };
                  transaction.oncomplete = _this.closeDb;
                  transaction.onerror = _this.closeDb;
                  transaction.onabort = _this.closeDb;
                } catch (e) {
                  log('IndexedDb insert failed');
                  reject(ErrorCodes.PUT_FAILED);
                  _this.closeDb();
                }
              })
            ];
          }
        });
      });
    };
    IndexedDb.prototype.remove = function (table, key) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        try {
          var request = _this.database.transaction([table], 'readwrite').objectStore(table).delete(key);
          request.onsuccess = function () {
            log('IndexedDb remove success');
            resolve();
          };
          request.onerror = function () {
            log('IndexedDb remove failed');
            reject();
          };
        } catch (e) {
          log('IndexedDb remove failed');
          reject(e);
        }
      });
    };
    IndexedDb.isDatabaseOpen = {};
    return IndexedDb;
  }();
  function log(text) {
    if (!SERVICE_WORKER) {
      window._pushcrewDebuggingQueue.push(text);
    }
  }
  return IndexedDb;
}(IndexedDb, tslib);
IndexedDbOperations = function (exports, IndexedDb, tslib_1) {
  function storeSubscriptionInIndexedDb(stringifiedSubscription) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var subscriptionDb, e_1;
      return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
        case 0:
          subscriptionDb = new IndexedDb('pushcrewDB', { 'subscriptionInfo': 'identifier' });
          _a.label = 1;
        case 1:
          _a.trys.push([
            1,
            3,
            ,
            4
          ]);
          return [
            4  /*yield*/,
            subscriptionDb.put('subscriptionInfo', {
              subscriptionString: stringifiedSubscription,
              timestamp: Date.now(),
              identifier: 'subscription'
            })
          ];
        case 2:
          _a.sent();
          return [
            3  /*break*/,
            4
          ];
        case 3:
          e_1 = _a.sent();
          window._pushcrewDebuggingQueue.push('error while saving subscription in indexed db', e_1);
          return [
            3  /*break*/,
            4
          ];
        case 4:
          return [2  /*return*/];
        }
      });
    });
  }
  function removeSubscriptionFromIndexedDb() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var subscriptionDb, e_2;
      return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
        case 0:
          subscriptionDb = new IndexedDb('pushcrewDB', { 'subscriptionInfo': 'identifier' });
          _a.label = 1;
        case 1:
          _a.trys.push([
            1,
            3,
            ,
            4
          ]);
          return [
            4  /*yield*/,
            subscriptionDb.deleteDb()
          ];
        case 2:
          _a.sent();
          return [
            3  /*break*/,
            4
          ];
        case 3:
          e_2 = _a.sent();
          window._pushcrewDebuggingQueue.push('error while deleting db', e_2);
          return [
            3  /*break*/,
            4
          ];
        case 4:
          return [2  /*return*/];
        }
      });
    });
  }
  var IndexedDbOperations = {
    removeSubscriptionFromIndexedDb: removeSubscriptionFromIndexedDb,
    storeSubscriptionInIndexedDb: storeSubscriptionInIndexedDb
  };
  return IndexedDbOperations;
}(IndexedDbOperations, IndexedDb, tslib);
ThirdPartyIntegrations = function (exports, CustomEvent) {
  /// <amd-dependency path="CustomEvents" name="CustomEvent" />
  var ThirdPartyIntegrations = {
    track: function (eventName, details) {
      if (window.pctracker && window.pctracker.track) {
        window.pctracker.track(eventName);
      }
      new CustomEvent(eventName, details).trigger();
    }
  };
  return ThirdPartyIntegrations;
}(ThirdPartyIntegrations, CustomEvents);
SupportedEvents = function (exports) {
  var SupportedEvents = {
    childWindowOpen: 'PUSHCREW_CHILD_WINDOW_OPEN',
    childWindowClosed: 'PUSHCREW_CHILD_WINDOW_CLOSED',
    subscriptionSuccessful: 'PUSHCREW_SUBSCRIPTION_SUCCESSFUL',
    subscriptionUnchanged: 'PUSHCREW_SUBSCRIPTION_UNCHANGED',
    subscriptionBlocked: 'PUSHCREW_SUBSCRIPTION_BLOCKED',
    subscriptionUnsubscribed: 'PUSHCREW_SUBSCRIPTION_UNSUBSCRIBED',
    alreadySubscribed: 'PUSHCREW_SUBSCRIPTION_ALREADY_SUBSCRIBED',
    optInVisible: 'PUSHCREW_OPT_IN_VISIBLE',
    optInAllow: 'PUSHCREW_OPT_IN_ALLOW',
    optInBlock: 'PUSHCREW_OPT_IN_BLOCK',
    httpsCustomOptInVisible: 'PUSHCREW_HTTPS_CUSTOM_OPTIN_VISIBLE',
    httpsCustomOptInAllow: 'PUSHCREW_HTTPS_CUSTOM_OPTIN_ALLOW',
    httpsCustomOptInDeny: 'PUSHCREW_HTTPS_CUSTOM_OPTIN_DENY',
    optInClosed: 'PUSHCREW_OPT_IN_CLOSED',
    optInBlockByBrowser: 'PUSHCREW_OPT_IN_BLOCKED_BY_BROWSER'
  };
  return SupportedEvents;
}(SupportedEvents);
api = function ($pushcrew, globalConfig, detectBrowser, iframe, storageUtil, setSubscriberId, pcUtils, IndexedDbOperations, thirdPartyIntegrations, SupportedEvents, AppConstants) {
  $pushcrew(function () {
    var pushSubscription, manageSubscription;
    var escapeHTML = function (str) {
      if (!str) {
        return str;
      }
      var escapeChars = {
        '<': 'lt',
        '>': 'gt',
        '"': 'quot',
        '&': 'amp',
        '\'': '#39'
      };
      return String(str).replace(/[&<>"']/g, function (m) {
        return '&' + escapeChars[m] + ';';
      });
    };
    globalConfig._pushcrew.browser = detectBrowser.name();
    pushSubscription = globalConfig.pushAPI.pushSubscription;
    manageSubscription = globalConfig.pushAPI.manageSubscription;
    window._pushcrewDebuggingQueue = window._pushcrewDebuggingQueue || [];
    globalConfig._utils.validString = function (value) {
      return /^[A-Za-z0-9_-]*$/.test(value);
    };
    globalConfig._pushcrew.addToSegment = function (segmentId) {
      window._pushcrewDebuggingQueue.push('addSubscriberToSegment execution begin');
      var subscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id') || false;
      var promise = $pushcrew.Deferred();
      if (!subscriberId) {
        window._pushcrewDebuggingQueue.push('Subscriber ID not found while adding to segment - ' + segmentId);
        promise.reject('Invalid Subscriber Id');
      } else {
        var segmentInfo = {
          id: segmentId,
          customer_hash: pushcrewConfig.hash,
          subscriber_list: [subscriberId]
        };
        $pushcrew.ajax({
          url: pushcrewConfig.servicesServerURL + '/as',
          type: 'GET',
          headers: { 'Content-type': 'application/x-www-form-urlencoded' },
          data: segmentInfo,
          crossDomain: true,
          error: function () {
            window._pushcrewDebuggingQueue.push('Add to segment call failed');
            promise.reject();
          },
          success: function (response) {
            window._pushcrewDebuggingQueue.push('Add to segment call success for ' + segmentId);
            promise.resolve(true);
          }
        });
      }
      window._pushcrewDebuggingQueue.push('addToSegment execution exit');
      return promise;
    };
    globalConfig._pushcrew.APIReady = function (callback) {
      window._pushcrewDebuggingQueue.push('Executing API ready callback');
      callback();
    };
    globalConfig._pushcrew.subscriptionSuccessCallback = function (callback) {
      window._pushcrewDebuggingQueue.push('Executing subscriptionSuccessCallback with call type: ' + typeof callback);
      if (typeof callback === 'function') {
        globalConfig._pushcrew.storedSubscriptionSuccessCallback = callback;
      } else {
        globalConfig._pushcrew.storedSubscriptionSuccessCallback = null;
      }
    };
    globalConfig._pushcrew.setNonInteraction = function (callback) {
      window._pushcrewDebuggingQueue.push('Settings ga non interaction: ' + typeof callback);
      globalConfig._pushcrew.gaInteractionAttribute = typeof callback === 'function' ? callback : null;
    };
    globalConfig._pushcrew.optInShownCallback = function (callback) {
      window._pushcrewDebuggingQueue.push('Executing optInShownCallback: ' + typeof callback);
      globalConfig._pushcrew.executeOptInShownCallback = typeof callback === 'function' ? callback : null;
    };
    globalConfig._pushcrew.subscriptionFailureCallback = function (callback) {
      window._pushcrewDebuggingQueue.push('Executing subscriptionFailureCallback with call type: ' + typeof callback);
      if (typeof callback === 'function') {
        globalConfig._pushcrew.storedSubscriptionFailureCallback = callback;
      } else {
        globalConfig._pushcrew.storedSubscriptionFailureCallback = null;
      }
    };
    globalConfig._pushcrew.triggerOptOut = function () {
      globalConfig._pushcrew.showModal({}, 4);
      window._pushcrewDebuggingQueue.push('Executing triggerOptOut queue');
    };
    // Method to enable visitor to optout of PushCrew
    globalConfig._pushcrew.cookieOptOut = function (origin) {
      window._pushcrewDebuggingQueue.push('setOptOut Function Begin');
      var hasOptOut = (window.location.search || '').indexOf('pushcrew_opt_out') !== -1, hasAlreadyOptedOut = storageUtil.getFromStorage('pushcrew_opt_out'), isAlreadySubscribed = storageUtil.getFromStorage('wingify_push_subscription_status') === 'subscribed' || storageUtil.getFromStorage('wingify_push_subscriber_id'), optOutStatus;
      if (hasOptOut || hasAlreadyOptedOut) {
        optOutStatus = true;
      }
      if (hasOptOut && !(origin === 'http' && isAlreadySubscribed) || hasAlreadyOptedOut) {
        // Disable automatic trigger of opt in
        window._pcq.push([
          'noTrigger',
          true
        ]);
      }
      // Check if opt out query parameter is present, and has not opted out in past
      if (hasOptOut && !hasAlreadyOptedOut) {
        if (origin === 'https') {
          storageUtil.addToStorage('pushcrew_opt_out', 1, AppConstants.Storage.COOKIE.LIFETIME);
          if (isAlreadySubscribed) {
            // Unsubscribe from push notifications
            manageSubscription.unsubscribeFromPushNotification();
          }
          alert('You have successfully opted out of PushCrew for this website');
        }
        if (origin === 'http') {
          if (isAlreadySubscribed) {
            // Unsubscribe from push notifications
            globalConfig._pushcrew.triggerOptOutModal();
          } else {
            storageUtil.addToStorage('pushcrew_opt_out', 1, AppConstants.Storage.COOKIE.LIFETIME);
            alert('You have successfully opted out of PushCrew for this website');
          }
        }
        window._pushcrewDebuggingQueue.push('setOptOut Function: User has opted out of PushCrew');
      } else if (hasOptOut && hasAlreadyOptedOut) {
        alert('You are already opted out of PushCrew for this website');
      }
      window._pushcrewDebuggingQueue.push('setOptOut Function End');
      return optOutStatus;
    };
    globalConfig._pushcrew.addSubscriberToSegment = function (segment, callback) {
      window._pushcrewDebuggingQueue.push('addSubscriberToSegment execution begin');
      if (globalConfig.pushcrew.isAPIReady === globalConfig.APIReadyState.UNINITIALIZED) {
        globalConfig._internalq.push([
          'addSubscriberToSegment',
          segment,
          callback
        ]);
        return;
      }
      var subscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id'), subscriptionId = storageUtil.getFromStorage('wingify_push_subscription_id'), returnValue;
      if (segment.length >= 30 || !globalConfig._utils.validString(segment)) {
        window._pushcrewDebuggingQueue.push('SegmentName is not a valid string');
        returnValue = false;
      } else if (!subscriberId) {
        window._pushcrewDebuggingQueue.push('Invalid segment');
        returnValue = -1;
      } else {
        var img = new Image();
        var count = 0;
        img.src = pushcrewConfig.serverSyncUrl + '/c.gif?hash=' + pushcrewConfig.hash + '&subscriberId=' + subscriberId + '&subscriptionId=' + subscriptionId + '&segment=' + segment + '&action=add-segment';
        returnValue = true;
      }
      if (callback) {
        window._pushcrewDebuggingQueue.push('Executing callback for addSubscriberToSegment');
        callback(returnValue);
      }
      window._pushcrewDebuggingQueue.push('addSubscriberToSegment execution exit');
    };
    globalConfig._pushcrew.triggerOptIn = function (triggerBox) {
      //set variable to identify if OptIn comes from API call
      globalConfig.pushcrew.isAPIcall = true;
      if (globalConfig.pushcrew.isAPIReady === globalConfig.APIReadyState.READY) {
        globalConfig._pushcrew.triggerOptInExecute(triggerBox);
      } else {
        globalConfig._pushcrew.triggerBox = triggerBox;
      }
    };
    globalConfig._pushcrew.getSubscriberId = function () {
      return storageUtil.getFromStorage('wingify_push_subscriber_id') || '';
    };
    globalConfig._pushcrew.isOptedOut = function () {
      return storageUtil.getFromStorage('wingify_donot_track_actions') == 1;
    };
    if (!HTTPCHILD) {
      var statusModalTexts = {
        DELETE_SUCCESS: 0,
        ERROR_MESSAGE: 1,
        OPT_OUT_SUCCESS: 2,
        OPT_IN_SUCCESS: 3
      };
      var exportModalState = {
        PENDING: 0,
        SUCCESS: 1,
        FAILURE: 2
      };
      globalConfig._pushcrew.popupModalApi = function (modalType, modalContent, fadeInTime, fadeOutTime, closingAction, parentId, modalId, modalClass) {
        var listenersAttached = $pushcrew.Deferred();
        modalClass = modalClass || 'pushcrew-modal-with-overlay';
        var modalBoxHtml = '<div class="pushcrew-shim-parent" ' + (parentId ? 'id="' + parentId + '">' : '>') + '<div class="pushcrew-shim"></div>' + '<div class="' + modalClass + '"' + (modalId ? 'id="' + modalId + '">' : '>') + '<p class="pushcrew-close-button-position">&#x2715;</p>' + modalContent + '</div>' + '</div>';
        iframe.createAndAddStyling(modalType).then(function () {
          var $modalElement = $pushcrew(modalBoxHtml);
          var $frameEl = $pushcrew('#pushcrew-iframe');
          var $iframeContents = $frameEl.contents();
          var $framebody = $iframeContents.find('body');
          $framebody.append($modalElement);
          closingAction = closingAction || function () {
          };
          $pushcrew('#pushcrew-iframe-wrapper').show();
          $pushcrew('#pushcrew-iframe').show();
          $modalElement.fadeIn(fadeInTime);
          $modalElement.find('.pushcrew-shim, .pushcrew-close-button-position').click(function () {
            $modalElement.fadeOut(fadeOutTime, function () {
              $pushcrew('#pushcrew-iframe-wrapper').hide();
              $modalElement.remove();
              closingAction();
            });
          });
          listenersAttached.resolve();
        });
        return listenersAttached;
      };
      /**
       * @returns whether user opened the website using through Manage Preferences Page or not
       * If Opened through Manage Preferences page, it returns true otherwise it returns false.
       */
      globalConfig._pushcrew.notificationPreferences = function () {
        // pushcrew_preferences=1 is used by PC website to send a visitor to a page with preferences modal automatically opened.
        if (window.location.search.indexOf('pushcrew_preferences=1') !== -1) {
          if (storageUtil.getFromStorage('wingify_push_subscriber_id')) {
            window.PC.triggerPreferences();
          } else {
            alert('Notification settings could not be fetched because you are not subscribed to push notification from ' + pushcrewConfig.companyName);
          }
          return true;
        } else if (pushcrewConfig.showPreferenceModal == 1 && (window.location.search.indexOf('pushcrew_powered') !== -1 || window.location.search.indexOf('vwo_powered') !== -1 || window.location.search.indexOf('_p_c') !== -1)) {
          globalConfig._pushcrew.triggeredFromButton = true;
          globalConfig._pushcrew.triggerShowPreferenceModal();
        }
      };
      globalConfig._pushcrew.triggerPreferenceStatusBox = function (status) {
        var $iframeContents = $pushcrew('#pushcrew-iframe').contents(), statusText;
        var $preferenceStatusParent = $iframeContents.find('#pushcrew-preference-status-parent');
        if ($preferenceStatusParent.length !== 0) {
          $preferenceStatusParent.remove();
        }
        if (status === 0) {
          statusText = 'You will shortly receive a notification, click on it to unsubscribe and delete your data';
        } else if (status === 1) {
          statusText = 'Oops! Something went wrong, please try again later';
        } else if (status === 2) {
          statusText = 'You have successfully opted out of usage tracking';
        } else {
          statusText = 'You have successfully opted in for usage tracking';
        }
        var statusModalContent = '<p id="pushcrew-preference-status-text" class="pushcrew-status-box-text pushcrew-top-bottom-margin-zero">' + statusText + '</p>';
        globalConfig._pushcrew.popupModalApi('status_modal', statusModalContent, 300, 300, globalConfig._pushcrew.triggerPreferenceModal, 'pushcrew-preference-status-parent', 'pushcrew-preference-status-modal');
      };
      globalConfig._pushcrew.triggerExportModal = function (status) {
        if (status === 0) {
          var exportModalContent = '<div id="pushcrew-export-loader-container">' + '<span id="pushcrew-export-modal-loader"></span>' + '<div id="pushcrew-export-loader-text" class="pushcrew-modal-text-styling">Your data is being exported now</div>' + '</div>' + '<div id="pushcrew-export-loader-status">When the export is complete, you will receive a notification to download your data</div>';
          globalConfig._pushcrew.popupModalApi('export_modal', exportModalContent, 300, 300, globalConfig._pushcrew.triggerPreferenceModal, 'pushcrew-export-modal-parent', 'pushcrew-export-preference-modal');
        } else {
          var $iframeContents = $pushcrew('#pushcrew-iframe').contents();
          $iframeContents.find('#pushcrew-export-loader-text').addClass('pushcrew-top-bottom-margin-zero');
          if ($iframeContents.find('#pushcrew-export-modal-parent').length === 0) {
            return;
          }
          if (status === 1) {
            $iframeContents.find('#pushcrew-export-loader-text')[0].innerHTML = 'You will receive a notification shortly with a link to download your data';
          } else {
            $iframeContents.find('#pushcrew-export-loader-text')[0].innerHTML = 'Could not fetch data, something went wrong';
          }
          $iframeContents.find('#pushcrew-export-modal-loader').remove();
          $iframeContents.find('#pushcrew-export-loader-status').remove();
          setTimeout(function () {
            $iframeContents.find('#pushcrew-export-modal-parent').remove();
            globalConfig._pushcrew.triggerPreferenceModal();
          }, 2000);
        }
      };
      globalConfig._pushcrew.triggerPreferenceModal = function () {
        globalConfig.internalConfig = globalConfig.internalConfig || {};
        globalConfig.internalConfig.prefModalProps = globalConfig.internalConfig.prefModalProps || [];
        var subscriberId = globalConfig._pushcrew.getSubscriberId(), iframeContents, preferenceModalContent, optOutText, preferenceModalTitle = escapeHTML(globalConfig.internalConfig.prefModalProps[0]) || 'You are subscribed to notifications from ' + pushcrewConfig.companyName, onCloseCallback, downloadDataText = escapeHTML(globalConfig.internalConfig.prefModalProps[3]) || 'Access My Notifications Data', deleteDataText = escapeHTML(globalConfig.internalConfig.prefModalProps[4]) || 'Unsubscribe and Delete All My Data';
        var $tempIframeContents = $pushcrew('#pushcrew-iframe').contents();
        if (!subscriberId || $tempIframeContents.find('#pushcrew-preference-modal-parent').length !== 0) {
          return;
        }
        if (globalConfig._pushcrew.isOptedOut()) {
          optOutText = escapeHTML(globalConfig.internalConfig.prefModalProps[1]) || 'Start Usage Tracking';
        } else {
          optOutText = escapeHTML(globalConfig.internalConfig.prefModalProps[2]) || 'Stop Usage Tracking';
        }
        preferenceModalContent = '<img src=' + pushcrewConfig.style.iconUrl + ' id="pushcrew-company-logo-preferences"/>' + '<p id="pushcrew-preference-modal-text">' + preferenceModalTitle + '</p>' + '<button class="pushcrew-preference-modal-button" id="pushcrew-preference-stop-tracking-button">' + optOutText + '</button>' + '<button class="pushcrew-preference-modal-button" id="preference-access-data-button">' + downloadDataText + '</button>' + '<button class="pushcrew-preference-modal-button" id="preference-unsubscribe-button">' + deleteDataText + '</button>';
        if (globalConfig._pushcrew.triggeredFromButton) {
          onCloseCallback = function () {
            return $pushcrew('.pushcrew-preferences-btn-box').show();
          };
        }
        globalConfig._pushcrew.popupModalApi('pref_modal', preferenceModalContent, 400, 200, onCloseCallback, 'pushcrew-preference-modal-parent', 'pushcrew-pref-modal-box', 'pushcrew-preference-modal').then(function () {
          var $iframeContents = $pushcrew('#pushcrew-iframe').contents();
          $iframeContents.find('#preference-unsubscribe-button').click(function () {
            window._pushcrewDebuggingQueue.push('unsubscribe button clicked');
            $iframeContents.find('#pushcrew-preference-modal-parent').fadeOut(300, function () {
              $iframeContents.find('#pushcrew-preference-modal-parent').remove();
            });
            var data = {};
            data.requestData = {
              url: '/requestRightToErase.php',
              dataType: 'json'
            };
            function errorCallback() {
              globalConfig._pushcrew.triggerPreferenceStatusBox(statusModalTexts['ERROR_MESSAGE']);
            }
            function successCallback() {
              globalConfig._pushcrew.triggerPreferenceStatusBox(statusModalTexts['DELETE_SUCCESS']);
            }
            globalConfig._pushcrew.prefModalAjax(data, successCallback, errorCallback);
          });
          $iframeContents.find('#preference-access-data-button').click(function () {
            window._pushcrewDebuggingQueue.push('access my data button clicked');
            $iframeContents.find('#pushcrew-preference-modal-parent').remove();
            globalConfig._pushcrew.triggerExportModal(exportModalState['PENDING']);
            var subscriberId = globalConfig._pushcrew.getSubscriberId();
            if (!subscriberId) {
              globalConfig._pushcrew.triggerExportModal(exportModalState['FAILURE']);
              return;
            }
            var data = {};
            data.requestData = {
              url: '/getSubscriberRightToAccess.php',
              dataType: 'json'
            };
            function errorCallback() {
              globalConfig._pushcrew.triggerExportModal(exportModalState['FAILURE']);
            }
            function successCallback() {
              globalConfig._pushcrew.triggerExportModal(exportModalState['SUCCESS']);
            }
            globalConfig._pushcrew.prefModalAjax(data, successCallback, errorCallback);
          });
          $iframeContents.find('#pushcrew-preference-stop-tracking-button').click(function () {
            window._pushcrewDebuggingQueue.push('preference modal stop my tracking button clicked');
            $iframeContents.find('#pushcrew-preference-modal-parent').remove();
            var data = {};
            var trackingPermission, successCallback;
            if (globalConfig._pushcrew.isOptedOut()) {
              globalConfig._pushcrew.setTrackingConsent(0);
              successCallback = function () {
                globalConfig._pushcrew.triggerPreferenceStatusBox(statusModalTexts['OPT_IN_SUCCESS']);
                window.PC.evalSegments();
              };
              trackingPermission = 1;
            } else {
              globalConfig._pushcrew.setTrackingConsent(1);
              successCallback = function () {
                globalConfig._pushcrew.triggerPreferenceStatusBox(statusModalTexts['OPT_OUT_SUCCESS']);
              };
              trackingPermission = 0;
            }
            data.subscriberData = {
              action: 'update-page-click-tracking-permission',
              pageClickTrackingPermission: trackingPermission
            };
            data.requestData = {
              url: '/syncSubscriptionAction.php',
              dataType: 'jsonp'
            };
            function errorCallback() {
              globalConfig._pushcrew.triggerPreferenceStatusBox(statusModalTexts['ERROR_MESSAGE']);
            }
            globalConfig._pushcrew.prefModalAjax(data, successCallback, errorCallback, 'browserType');
          });
        });
      };
      /**
       * trigger preferences button when user lands on the page from a notification and already a subscriber
       */
      globalConfig._pushcrew.triggerShowPreferenceModal = function () {
        var subscriberId = globalConfig._pushcrew.getSubscriberId();
        if (!subscriberId) {
          return;
        }
        $pushcrew('.pushcrew-https-branding-modal-mobile-click-box, .pushcrew-https-branding-modal-clicked-box, .pushcrew-http-branding-modal-mobile-click-box, .pushcrew-http-branding-modal-clicked-box').remove();
        var isBrandingPossible = pushcrewConfig.pcBranding === 1 && (window.location.search.indexOf('pushcrew_powered') !== -1 || window.location.search.indexOf('vwo_powered') !== -1);
        var showPreferencesHtml = '<div id="pushcrew-preferences-btn-modal" class="pushcrew-preferences-btn-box">' + '<p id="pushcrew-preferences-btn-box-close">&#x2715;</p>' + '<p id="pushcrew-preferences-box-text" class="pushcrew-preferences-btn-box-text">Show Notification Preferences</p>';
        if (isBrandingPossible) {
          showPreferencesHtml += '<div class="pushcrew-preferences-branding">' + '<a href="https://vwo.com/engage/' + globalConfig.internalConfig.utmString + '" target="_blank" style="text-decoration: none;">' + '<span>Notifications Powered By </span><img src="' + pcUtils.getWhiteBrandingImage() + '" alt="' + pcUtils.getBranding() + '" width="' + pcUtils.getWhiteBrandingWidth() + '" />' + '</a></div>';
        }
        showPreferencesHtml += '</div>';
        var buttonBoxMobile = $pushcrew(showPreferencesHtml);
        if (detectBrowser.isMobile()) {
          buttonBoxMobile.addClass('pushcrew-preferences-btn-box-mobile');
          buttonBoxMobile.find('#pushcrew-preferences-btn-box-close').addClass('pushcrew-preferences-btn-box-close-mobile');
          buttonBoxMobile.find('#pushcrew-preferences-box-text').addClass('pushcrew-preferences-box-text-mobile');
        }
        $pushcrew('body').append(buttonBoxMobile);
        $pushcrew('.pushcrew-preferences-btn-box').fadeIn(300);
        $pushcrew('#pushcrew-preferences-box-text').click(function () {
          $pushcrew('.pushcrew-preferences-btn-box').fadeOut(100, function () {
            $pushcrew('.pushcrew-preferences-btn-box').hide();
          });
          window._pushcrewDebuggingQueue.push('preference modal button clicked');
          globalConfig._pushcrew.triggerPreferenceModal(true);
        });
        $pushcrew('#pushcrew-preferences-btn-box-close').click(function () {
          $pushcrew('.pushcrew-preferences-btn-box').fadeOut(100, function () {
            $pushcrew('.pushcrew-preferences-btn-box').remove();
          });
        });
      };
      /**
       * directly trigger preferences modal from js-api or manage-subscription page
       */
      window.PC.triggerPreferences = function () {
        var subscriberId = globalConfig._pushcrew.getSubscriberId();
        if (!subscriberId) {
          return;
        }
        globalConfig.internalConfig.prefModalProps = [].slice.call(arguments);
        window._pushcrewDebuggingQueue.push('preference modal triggered from js-api');
        globalConfig._pushcrew.triggeredFromButton = false;
        globalConfig._pushcrew.triggerPreferenceModal();
      };
      globalConfig._pushcrew.prefModalAjax = function (data, successCallback, errorCallback, browserKey, failureCallback) {
        var wingifyPushSubscriberId = globalConfig._pushcrew.getSubscriberId(), browserType = globalConfig._pushcrew.browser, syncServerURL = pushcrewConfig.serverSyncUrl, browserKey = browserKey || 'browser';
        var subscriberInfo = {
          hash: pushcrewConfig.hash,
          subscriberId: wingifyPushSubscriberId
        };
        subscriberInfo[browserKey] = browserType;
        failureCallback = failureCallback || errorCallback;
        var requestData = data.requestData || {};
        var subscriberData = data.subscriberData || {};
        $pushcrew.extend(subscriberInfo, subscriberData);
        $pushcrew.ajax({
          url: syncServerURL + requestData.url,
          type: 'GET',
          data: subscriberInfo,
          dataType: requestData.dataType,
          crossDomain: 'true',
          error: errorCallback,
          success: function (response) {
            if (response.status === 'success') {
              successCallback();
            } else if (response.status === 'failure') {
              failureCallback();
            }
          }
        });
      };
    }
    globalConfig._pushcrew.removeSubscriberFromSegment = function (segment, callback) {
      window._pushcrewDebuggingQueue.push('removeSubscriberFromSegment function execution begin');
      var subscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id');
      var subscriptionId = storageUtil.getFromStorage('wingify_push_subscription_id');
      var returnValue;
      if (segment.length >= 30 && segment.length !== 0 || !globalConfig._utils.validString(segment)) {
        window._pushcrewDebuggingQueue.push('SegmentName is not a valid string');
        returnValue = false;
      } else if (!subscriberId) {
        window._pushcrewDebuggingQueue.push('Invalid segment');
        returnValue = -1;
      } else {
        var img = new Image();
        var count = 0;
        img.src = pushcrewConfig.serverSyncUrl + '/c.gif?hash=' + pushcrewConfig.hash + '&subscriberId=' + subscriberId + '&subscriptionId=' + subscriptionId + '&segment=' + segment + '&action=remove-segment';
        returnValue = true;
      }
      if (callback) {
        window._pushcrewDebuggingQueue.push('Executing callback for removeSubscriberFromSegment');
        callback(returnValue);
      }
      window._pushcrewDebuggingQueue.push('removeSubscriberFromSegment execution complete');
    };
    globalConfig._pushcrew.triggerOptInExecute = function (triggerBoxObject) {
      var isModal, textArray;
      textArray = {};
      var triggerBox = triggerBoxObject || {};
      window._pushcrewDebuggingQueue.push('triggerOptInExecute execution begin');
      if (triggerBox.modal) {
        isModal = true;
        /*old API support*/
        if (typeof triggerBox.modal.text === 'string') {
          textArray.SUBSCRIBE = triggerBox.modal.text;
          textArray.ALREADYSUBSCRIBED = 'You are already subscribed to get instant alerts from us. Keep an eye on your browser for new notifications from us.';
          textArray.BLOCKED = 'Uh-oh! You seem to have blocked the notifications last time you came on our website. To see how to subscribe';
          triggerBox.modal.text = textArray;
        }
      } else {
        isModal = false;
      }
      var subscriberSegment = triggerBox.subscriberSegment || '';
      var isUserSubscribed = globalConfig.pushcrew.subscriberId;
      if (isUserSubscribed === -1 && isModal) {
        globalConfig._pushcrew.showModal(triggerBox.modal, 3);
      } else if (isUserSubscribed === false) {
        if (isModal) {
          globalConfig._pushcrew.showModal(triggerBox.modal, 2);
        }
        globalConfig._pushcrew.subscribeToPush(subscriberSegment, triggerBox.modal);
      } else if (isUserSubscribed && isModal) {
        globalConfig._pushcrew.showModal(triggerBox.modal, 1);
      }
      window._pushcrewDebuggingQueue.push('triggerOptInExecute execution complete');
    };
    if (!HTTPCHILD) {
      globalConfig._pushcrew.showModal = function (modal, category) {
        var textOfModal;
        //variable to store text array
        modal.blackenBackground = modal.blackenBackground === false ? false : true;
        window._pushcrewDebuggingQueue.push('showModal function execution begin');
        if (category === 1) {
          textOfModal = modal.text.ALREADYSUBSCRIBED || 'You are already subscribed to get instant alerts from us. Keep an eye on your browser for new notifications from us.';
        } else if (HTTP && category === 2) {
          textOfModal = modal.text.SUBSCRIBE || 'Please click on \u2018Allow\u2019 in the opt-in box on top left of your browser screen to get instant alerts from our website. No email required.';
        } else if (category === 3) {
          textOfModal = modal.text.BLOCKED || 'Uh-oh! You seem to have blocked the notifications last time you came on our website. To see how to subscribe';
        }
        var modal3Href;
        if (HTTP) {
          modal3Href = globalConfig._pushcrew.getChildUrl() + '/?action=unblock';
        } else {
          modal3Href = 'https://help.vwo.com/hc/en-us/articles/360007651954-A-website-is-sending-me-push-notifications-How-do-I-unsubscribe-';
        }
        var modalShown1 = '<div id="pushcrew-popup" class="pushcrew-modal-box">  ' + '    <a href="javascript:void(0)" class="js-pushcrew-modal-close pushcrew-close">\xD7</a>' + '  <div class="pushcrew-modal-body">' + '<img src=' + pushcrewConfig.style.iconUrl + ' width=86/>' + '  <p style="margin-top:20px">' + textOfModal + '</p>' + '  </div>' + '</div>';
        if (HTTP) {
          var modalShown2 = '<div id="pushcrew-popup" class="pushcrew-modal-box">  ' + '    <a href="#" class="js-pushcrew-modal-close pushcrew-close">\xD7</a>' + '  <div class="pushcrew-modal-body">' + '<img src=' + pushcrewConfig.style.iconUrl + ' width=86/>' + '    <p style="margin-top:20px">' + textOfModal + '</p>' + '  </div>' + '</div>';
        }
        var modal3Class = '';
        if (pushcrewConfig.origin === 'http') {
          modal3Class = 'class="js-pushcrew-modal-close"';
        }
        var modalShown3 = '<div id="pushcrew-popup" class="pushcrew-modal-box">  ' + '    <a href="javascript:void(0)" class="js-pushcrew-modal-close pushcrew-close">\xD7</a>' + '  <div class="pushcrew-modal-body">' + '<img src=' + pushcrewConfig.style.iconUrl + ' width=86/>' + '  <p style="pushcrew-margin-top:20px">' + textOfModal + '</p>' + '<a href="' + modal3Href + '" target="_blank" style="text-decoration: underline;font-weight:bold;" ' + modal3Class + '>Click Here</a>' + '  </div>' + '</div>';
        var modalShown4 = '<div id="pushcrew-popup" class="pushcrew-modal-box">  ' + '    <a href="javascript:void(0)" class="js-pushcrew-modal-close pushcrew-close">\xD7</a>' + '  <div class="pushcrew-modal-body">' + '<img src="https://pushcrew.com/assets/images/opt-out.png" width="100%"/>' + '  <p style="margin-top:20px"> To change settings or to unsubscribe push notifications,' + '<a href="https://help.vwo.com/hc/en-us/articles/360007651954-A-website-is-sending-me-push-notifications-How-do-I-unsubscribe-" target="_blank" style="text-decoration: underline;font-weight:bold;"> go through these steps</a>' + ' in your browser and change notification options</p></div>' + '</div>';
        $pushcrew('#pushcrew-popup').remove();
        if (category === 1) {
          $pushcrew('body').append(modalShown1);
        } else if (HTTP && category === 2) {
          $pushcrew('body').append(modalShown2);
        } else if (category === 3) {
          $pushcrew('body').append(modalShown3);
        } else if (category === 4) {
          $pushcrew('body').append(modalShown4);
        }
        var appendOverlay = '<div class=\'pushcrew-modal-overlay js-pushcrew-modal-close\'></div>';
        $pushcrew('body').append(appendOverlay);
        if (modal.blackenBackground) {
          $pushcrew('.pushcrew-modal-overlay').fadeTo(500, 0.8);
        } else {
          $pushcrew('.pushcrew-modal-overlay').fadeTo(500, 0);
        }
        var modalBox = 'pushcrew-popup';
        $pushcrew('#' + modalBox).show();
        $pushcrew('.js-pushcrew-modal-close, .pushcrew-modal-overlay').click(function () {
          $pushcrew('.pushcrew-modal-box, .pushcrew-modal-overlay').fadeOut(500, function () {
            $pushcrew('.pushcrew-modal-overlay').remove();
          });
        });
        $pushcrew(window).resize(function () {
          $pushcrew('.pushcrew-modal-box').css({
            top: ($pushcrew(window).height() - $pushcrew('.pushcrew-modal-box').outerHeight()) / 2,
            left: ($pushcrew(window).width() - $pushcrew('.pushcrew-modal-box').outerWidth()) / 2
          });
        });
        $pushcrew(window).resize();
        window._pushcrewDebuggingQueue.push('showModal function execution complete');
      };
    }
    globalConfig._pushcrew.setTrackingConsent = function (value) {
      var consent = parseInt(value, 10);
      window._pushcrewDebuggingQueue.push('Setting consent for subscriber as, ' + consent);
      storageUtil.addToStorage('wingify_donot_track_actions', consent, AppConstants.Storage.COOKIE.LIFETIME);
    };
    globalConfig._pushcrew.subscribeToPush = function (segmentName, modal) {
      //branding for https
      var httpsBrandingModal = '', brandingText;
      var browserType = detectBrowser;
      window._pushcrewDebuggingQueue.push('subscribeToPush function execution begin');
      if (detectBrowser.isMobile()) {
        if (pushcrewConfig.pcBranding === 1 && pushcrewConfig.isNativeOptin !== 0) {
          httpsBrandingModal = '<div class="pushcrew-https-branding-modal-mobile-box">  ' + '    <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-mobile-close pushcrew-https-branding-mobile-close">\xD7</a>' + '  <div class="pushcrew-https-branding-modal-mobile-body"><a href="https://vwo.com/engage/' + globalConfig.internalConfig.utmString + '" target="_blank" style="text-decoration: none;">' + '<span>Notifications Powered By </span><img src="' + pcUtils.getWhiteBrandingImage() + '" width="' + pcUtils.getWhiteBrandingWidth() + '" />' + '</a></div>' + '</div>';
          $pushcrew(document).scroll(function () {
            $pushcrew('.pushcrew-https-branding-modal-mobile-box').fadeOut();
          });
        }
      } else {
        if (pushcrewConfig.style.brandingType === 1 || modal) {
          if (modal) {
            /*Calling from API and modal is present then show the contextual overlay in the bottom of the page*/
            brandingText = modal.text.SUBSCRIBE || pushcrewConfig.style.brandingText || 'Please Click on \'Allow\' in the permission box to get instant notifications from our website. No Email Required.';
          } else {
            brandingText = pushcrewConfig.style.brandingText || 'Please Click on \'Allow\' in the permission box to get instant notifications from our website. No Email Required.';
          }
          //With Context Branding
          httpsBrandingModal = '<div class="pushcrew-https-branding-modal-context-box"' + (pushcrewConfig.pageClickTrackingConcent == 1 ? ' style="bottom: 40px !important;"' : '') + '>  ' + '    <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-context-close pushcrew-https-branding-context-close">\xD7</a>' + '<div class="pushcrew-https-branding-modal-context-body">' + '<div class="pushcrew-context"><img src="' + pushcrewConfig.style.iconUrl + '" width="60" height="60"><p>' + brandingText + '</p></div>';
          if (HTTPS) {
            if (pushcrewConfig.pageClickTrackingConcent == 1 && pushcrewConfig.isNativeOptin !== 0 && browserType.name() !== 'opera' && !globalConfig.internalConfig.isSafari) {
              if (pushcrewConfig.defaultPageClickTrackingPermission == 1) {
                httpsBrandingModal += '<div class="pushcrew-https-branding-modal-context-box height-40 modal_tracking_bar"><div class="pushcrew-https-branding-modal-context-body"><div class="pushcrew-context" style="margin: 0px 139px !important; text-align: left !important;"><input type="checkbox" id="tracking_bar_checkbox" checked/><p class="tracking-overlay-preview-text text-left" style="font-size: 16px !important;">' + pushcrewConfig.trackingBarText + '</p></div></div></div>';
              } else {
                httpsBrandingModal += '<div class="pushcrew-https-branding-modal-context-box height-40 modal_tracking_bar"><div class="pushcrew-https-branding-modal-context-body"><div class="pushcrew-context" style="margin: 0px 139px !important; text-align: left !important;"><input type="checkbox" id="tracking_bar_checkbox" /><p class="tracking-overlay-preview-text text-left" style="font-size: 16px !important;">' + pushcrewConfig.trackingBarText + '</p></div></div></div>';
              }
            }
          }
          if (pushcrewConfig.pcBranding === 1 && pushcrewConfig.isNativeOptin !== 0) {
            httpsBrandingModal += '<div class="pushcrew-branding"><a href="https://vwo.com/engage/' + globalConfig.internalConfig.utmString + '" target="_blank" style="text-decoration: none;"><span>Notifications Powered By </span><img src="' + pcUtils.getWhiteBrandingImage() + '" width="' + pcUtils.getWhiteBrandingWidth() + '" /></a></div>';
          }
          httpsBrandingModal += '</div>' + '</div>';
        } else if (pushcrewConfig.style.brandingType === 0) {
          //Without Context Branding
          if (HTTPS) {
            if (pushcrewConfig.pageClickTrackingConcent == 1 && pushcrewConfig.isNativeOptin !== 0 && browserType.name() !== 'opera' && !globalConfig.internalConfig.isSafari) {
              if (pushcrewConfig.defaultPageClickTrackingPermission == 1) {
                httpsBrandingModal += '<div class="pushcrew-https-branding-modal-context-box height-40 modal_tracking_bar"><div class="pushcrew-https-branding-modal-context-body"><div class="pushcrew-context" style="margin: 0px 139px !important; text-align: left !important;"><input type="checkbox" id="tracking_bar_checkbox" checked/><p class="tracking-overlay-preview-text text-left" style="font-size: 16px !important;">' + pushcrewConfig.trackingBarText + '</p></div></div></div>';
              } else {
                httpsBrandingModal += '<div class="pushcrew-https-branding-modal-context-box height-40 modal_tracking_bar"><div class="pushcrew-https-branding-modal-context-body"><div class="pushcrew-context" style="margin: 0px 139px !important; text-align: left !important;"><input type="checkbox" id="tracking_bar_checkbox" /><p class="tracking-overlay-preview-text text-left" style="font-size: 16px !important;">' + pushcrewConfig.trackingBarText + '</p></div></div></div>';
              }
            }
          }
          if (pushcrewConfig.pcBranding === 1 && pushcrewConfig.isNativeOptin !== 0) {
            httpsBrandingModal += '<div class="pushcrew-https-branding-modal-box">  ' + '    <a href="javascript:void(0)" class="js-pushcrew-https-branding-modal-close pushcrew-https-branding-close">\xD7</a>' + '  <div class="pushcrew-https-branding-modal-body"><a href="https://vwo.com/engage/' + globalConfig.internalConfig.utmString + '" target="_blank" style="text-decoration: none;">' + '<span>Notifications Powered By </span><img src="' + pcUtils.getWhiteBrandingImage() + '" width="' + pcUtils.getWhiteBrandingWidth() + '"/>' + '</a></div>' + '</div>';
          }
        }
      }
      window._pushcrewDebuggingQueue.push('httpsBrandingModal has been set');
      pushcrewConfig.includeUrls = pushcrewConfig.includeUrls || '.*';
      pushcrewConfig.excludeUrls = pushcrewConfig.excludeUrls || window._puschrew_exclude_url_pattern || '';
      if (pcUtils.qualifyForOptin(pushcrewConfig.includeUrls, pushcrewConfig.excludeUrls)) {
        $pushcrew('body').append(httpsBrandingModal);
      }
      // If subscriber chooses in to opt for data tracking, then we change the consent
      $pushcrew('#tracking_bar_checkbox').click(function (e) {
        globalConfig._pushcrew.setTrackingConsent(e.target.checked ? 0 : 1);
      });
      $pushcrew('.js-pushcrew-https-branding-modal-close').on('click', function () {
        window._pushcrewDebuggingQueue.push('httpsBrandingModal close clicked');
        $pushcrew('.pushcrew-https-branding-modal-box').remove();
      });
      $pushcrew('.js-pushcrew-https-branding-modal-context-close').on('click', function () {
        window._pushcrewDebuggingQueue.push('httpsBrandingModal content close clicked');
        $pushcrew('.pushcrew-https-branding-modal-context-box').remove();
      });
      $pushcrew('.js-pushcrew-https-branding-modal-mobile-close').on('click', function () {
        window._pushcrewDebuggingQueue.push('httpsBrandingModal mobile close clicked');
        $pushcrew('.pushcrew-https-branding-modal-mobile-box').remove();
      });
      // TODO (in-future): Handle ban on opt-in by Browser: https://www.chromestatus.com/features/6443143280984064
      if (globalConfig._pushcrew.isPermissionDefault()) {
        // When the HTTPS Opt-In is shown
        thirdPartyIntegrations.track(SupportedEvents.optInVisible);
        window.pushcrewOptInVisibleTimestamp = Date.now();
      }
      var subscribePromise = pushSubscription.subscribe();
      subscribePromise.then(function (newSubscription) {
        if (HTTPS) {
          globalConfig.internalConfig.pushcrewOptinProcessedEvent.trigger();
        }
        processSubscription(newSubscription, segmentName, browserType);
      });
      window._pushcrewDebuggingQueue.push('subscribeToPush function execution complete');
    };
    //used only for https
    function processSubscription(newSubscription, segmentName, browserType) {
      manageSubscription.doesUserResponseExists = true;
      $pushcrew('.pushcrew-modal-box, .pushcrew-modal-overlay').fadeOut(500, function () {
        $pushcrew('.pushcrew-modal-overlay').remove();
      });
      $pushcrew('.pushcrew-https-branding-modal-box').remove();
      $pushcrew('.pushcrew-https-branding-modal-context-box').remove();
      $pushcrew('.pushcrew-https-branding-modal-mobile-box').remove();
      var response = manageSubscription.splitSubscriptionParameters(newSubscription);
      if (response !== 'error' && response !== 'denied' && response !== 'retryWithGcmKey') {
        // When Allow is clicked on HTTPS Opt-In
        thirdPartyIntegrations.track(SupportedEvents.optInAllow);
        window._pushcrewDebuggingQueue.push('Subscription done successfully');
        if (HTTPS) {
          if (pushcrewConfig.isNativeOptin && pushcrewConfig.origin === 'https' && (browserType.name() === 'opera' || detectBrowser.isMobile() || globalConfig.internalConfig.isSafari) && pushcrewConfig.pageClickTrackingConcent == 1) {
            var trackingConsent = parseInt(pushcrewConfig.defaultPageClickTrackingPermission), checkBoxHtml;
            checkBoxHtml = '<input type="checkbox" ' + (trackingConsent ? 'checked' : '') + ' id="pushcrew-tracking-mobile-checkbox" />';
            var trackingPermissionModal = '<div class="pushcrew-tracking-modal-box-parent-mobile">' + '<div class="pushcrew-tracking-mobile-shim"></div>' + '<div id="pushcrew-track-permission-modal-mobile">' + '<span id="pushcrew-tracking-mobile-close">&#x2715;</span>' + '<div class="pushcrew-tracking-modal-internal-wrapper pushcrew-margin-top-0">' + '<img src=' + pushcrewConfig.style.iconUrl + ' id="pushcrew-tracking-modal-opt-out-logo"/>' + '<span id="pushcrew-traking-modal-opt-out-text"> This website would like to send you push notifications</span>' + '</div>' + '<div class="pushcrew-tracking-modal-internal-wrapper">' + '<div id="pushcrew-tracking-toggle-label">' + pushcrewConfig.trackingBarText + '</div>' + '<div id="pushcrew-toggle-switch-container">' + '<label id="pushcrew-tracking-switch-label">' + checkBoxHtml + '<span class="pushcrew-tracking-mobile-slider" id="pushcrew-tracking-mobile-slider-round"></span>' + '</label></div></div></div></div>';
            $pushcrew('body').append(trackingPermissionModal);
            $pushcrew('.pushcrew-tracking-modal-box-parent-mobile').fadeIn(300);
            $pushcrew('#pushcrew-tracking-mobile-close, .pushcrew-tracking-mobile-shim').click(function () {
              trackingConsent = $pushcrew('#pushcrew-tracking-mobile-checkbox').prop('checked') ? 1 : 0;
              $pushcrew('.pushcrew-tracking-modal-box-parent-mobile').fadeOut(300, function () {
                $pushcrew('.pushcrew-tracking-modal-box-parent-mobile').remove();
              });
              globalConfig._pushcrew.setTrackingConsent(1 - trackingConsent);
              syncSubscriptionAndApiInit(newSubscription, response, segmentName);
            });
          } else {
            syncSubscriptionAndApiInit(newSubscription, response, segmentName);
          }
        } else {
          syncSubscriptionAndApiInit(newSubscription, response, segmentName);
        }
      } else {
        setSubscriberId();
        window._pushcrewDebuggingQueue.push('Error while doing Subscription');
        if (response === 'denied') {
          // When Block is clicked on HTTPS Opt-In
          thirdPartyIntegrations.track(SupportedEvents.optInBlock);
          thirdPartyIntegrations.track(SupportedEvents.subscriptionBlocked);
          var errorMessage = 'User has blocked push notifications.';
          var errorStatus = 'BLOCKED';
          if (globalConfig._pushcrew.didSafariOptInFail()) {
            errorStatus = 'SAFARI-ERROR';
            errorMessage = 'Opt In Failed To Display in Safari.';
          }
          if (globalConfig._pushcrew.storedSubscriptionFailureCallback) {
            globalConfig._pushcrew.storedSubscriptionFailureCallback({
              status: errorStatus,
              message: errorMessage
            });
          }
          // Set the cookie value when the user blocks using native notification optin
          if (storageUtil.getFromStorage('wingify_push_do_not_show_notification_popup') === 'true') {
            storageUtil.addToStorage('wingify_push_do_not_show_notification_popup', 'true', AppConstants.Storage.COOKIE.LIFETIME);
          }
        } else if (response === 'error') {
          // TODO (in-future): Handle ban on opt-in by Browser: https://www.chromestatus.com/features/6443143280984064
          if (globalConfig._pushcrew.isPermissionDefault()) {
            /*
             * If the Browser has blocked Opt-In (Chrome 59+), check the time difference between
             * opt-in visible and opt-in close events.
             * Send third event if the difference is less than a threshold
             */
            window.pushcrewOptInClosedTimestamp = Date.now();
            var isOptInBanned = window.pushcrewOptInVisibleTimestamp && window.pushcrewOptInClosedTimestamp && window.pushcrewOptInClosedTimestamp - window.pushcrewOptInVisibleTimestamp <= 500;
            // When Opt-In is Closed
            thirdPartyIntegrations.track(SupportedEvents.optInClosed, {
              nonInteraction: isOptInBanned  // Event is a non-interaction event if the opt-in is banned
            });
            // Opt-in is banned, send an event
            if (isOptInBanned) {
              thirdPartyIntegrations.track(SupportedEvents.optInBlockByBrowser);
            }
          }
          if (globalConfig._pushcrew.storedSubscriptionFailureCallback) {
            globalConfig._pushcrew.storedSubscriptionFailureCallback({
              status: 'CANCELLED',
              message: 'User has closed the notifications opt-in.'
            });
          }
          // Set the cookie value when the user blocks using native notification optin
          if (storageUtil.getFromStorage('wingify_push_do_not_show_notification_popup') === 'true') {
            storageUtil.addToStorage('wingify_push_do_not_show_notification_popup', 'true', AppConstants.Storage.COOKIE.LIFETIME);
          }
        } else if (response === 'retryWithGcmKey') {
          if (globalConfig.internalConfig.retriedWithManifest) {
            if (globalConfig._pushcrew.storedSubscriptionFailureCallback) {
              globalConfig._pushcrew.storedSubscriptionFailureCallback({
                status: 'CANCELLED',
                message: 'Could Not Subscribe'
              });
            }
          } else {
            globalConfig.internalConfig.manifestNeeded = true;
            globalConfig.internalConfig.retriedWithManifest = true;
            globalConfig._pushcrew.addManifestFile(Date.now(), true);
            pushSubscription.subscribe().then(function (newSubscription) {
              processSubscription(newSubscription, segmentName, browserType);
            });
          }
        }
      }
    }
    function syncSubscriptionAndApiInit(newSubscription, response, segmentName) {
      console.log(newSubscription);
      var stringifiedSubscription = JSON.stringify(newSubscription);
      console.log('Triggering');
      globalConfig.internalConfig.subscribedToWebPushEvent.trigger();
      console.log('Triggered');
      manageSubscription.syncSubscription(stringifiedSubscription, '', '', response.subscriptionId, response.endpoint, 'insert').then(function () {
        setSubscriberId();
        if (globalConfig._pushcrew.storedSubscriptionSuccessCallback) {
          globalConfig._pushcrew.storedSubscriptionSuccessCallback(globalConfig.pushcrew.subscriberId, {
            status: 'SUBSCRIBED',
            message: 'User has subscribed to push notifications.'
          });
        }
        storageUtil.addToStorage('wingify_push_subscription_status', 'subscribed', AppConstants.Storage.COOKIE.LIFETIME);
        // When successfully subscribed from HTTPS
        thirdPartyIntegrations.track(SupportedEvents.subscriptionSuccessful, { subscriberId: globalConfig.pushcrew.subscriberId });
        if (segmentName !== '') {
          globalConfig._pushcrew.addSubscriberToSegment(segmentName);
        }
        IndexedDbOperations.storeSubscriptionInIndexedDb(stringifiedSubscription);
      });
    }
    // @todo add if(!HTTP) and check if it already exists
    globalConfig._pushcrew.addManifestFile = function (timestamp, addManifestWithoutCheckingVapid) {
      if (globalConfig.internalConfig.isSafari) {
        return;
      }
      // Manifest contains GCM sender ID which is needed while subscribing a visitor
      if (!pushcrewConfig.vapidPublicKey && !storageUtil.getFromStorage('pshcrw_v_k') || addManifestWithoutCheckingVapid) {
        $pushcrew('head').append('<link rel="manifest" href="' + pushcrewConfig.manifestUrl + '?t=' + timestamp + '">');
      }
    };
    globalConfig._pushcrew.getPermissionStatus = function () {
      if (globalConfig.internalConfig.isSafari) {
        return window.safari.pushNotification.permission(pushcrewConfig.safariWebsitePushId).permission;
      } else {
        return Notification.permission;
      }
    };
    globalConfig._pushcrew.isPermissionDefault = function () {
      return globalConfig._pushcrew.getPermissionStatus() === 'default';
    };
    globalConfig._pushcrew.isPermissionDenied = function () {
      return globalConfig._pushcrew.getPermissionStatus() === 'denied';
    };
    globalConfig._pushcrew.isPermissionGranted = function () {
      return globalConfig._pushcrew.getPermissionStatus() === 'granted';
    };
    // Valid only when requestPermission callback returns "denied"
    globalConfig._pushcrew.didSafariOptInFail = function () {
      // Safari Subscription Callback gets value denied if pushPackage fail to retrieve or some other error
      return globalConfig.internalConfig.isSafari && globalConfig._pushcrew.isPermissionDefault();
    };
    globalConfig._pushcrew.isMobileDisabled = function () {
      return pcUtils.detectDeviceType() === 'mobile' && !pushcrewConfig.style.isMobileEnabled;
    };
  });
}(customizejQuery, globalConfig, detectBrowser, iframe, storageUtil, setSubscriberId, pcUtils, IndexedDbOperations, ThirdPartyIntegrations, SupportedEvents, AppConstants);

pushSubscription = function ($pushcrew, globalConfig, detectBrowser, pcUtils) {
  globalConfig.pushAPI.pushSubscription = function () {
    return {
      //exposed property to check if push subscription can be enabled (across the app)
      canPushBeEnabled: true,
      serviceWorkerPath: '',
      //On Page load checks if user has blocked push notifications. If yes, user needs to be marked inactive in DB
      isUserSubscriptionDenied: false,
      // detect the browser type
      browserType: '',
      /*
       * Checks if push notifications can be enabled and sets the required flags.
       * returns : false if notifcations can not be enabled.
       */
      initialiseState: function () {
        if (globalConfig.internalConfig.isSafari) {
          if (window.safari.pushNotification.permission(pushcrewConfig.safariWebsitePushId).permission === 'denied') {
            globalConfig.pushAPI.pushSubscription.isUserSubscriptionDenied = true;
            globalConfig.pushAPI.pushSubscription.canPushBeEnabled = false;
          } else {
            globalConfig.pushAPI.pushSubscription.isUserSubscriptionDenied = false;
            globalConfig.pushAPI.pushSubscription.canPushBeEnabled = true;
          }
          return;
        }
        // Are Notifications supported in the service worker?
        if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
          globalConfig.pushAPI.pushSubscription.canPushBeEnabled = false;
          return false;
        }
        /* Check the current Notification permission.
         * If its denied, it's a permanent block until the
         * user changes the permission
         */
        if (Notification.permission === 'denied') {
          globalConfig.pushAPI.pushSubscription.canPushBeEnabled = false;
          globalConfig.pushAPI.pushSubscription.isUserSubscriptionDenied = true;
          return false;
        }
        // Check if push messaging is supported
        if (!('PushManager' in window)) {
          globalConfig.pushAPI.pushSubscription.canPushBeEnabled = false;
          return false;
        }
        return true;
      },
      /*
       * Registers a service worker in the browser and sets it up to receive push notifications.
       */
      registerServiceWorker: function () {
        if (globalConfig.internalConfig.isSafari) {
          this.initialiseState();
        } else if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register(this.serviceWorkerPath).then(this.initialiseState);
        }
      },
      /*
       * Detects browser type(Chrome or Safari for now) and also checks if service worker & push manager is supported in the browser.
       */
      detectBrowserType: function () {
        if (globalConfig.internalConfig.isSafari) {
          this.canPushBeEnabled = true;
          this.browserType = 'safari';
          return;
        }
        var browserName = detectBrowser.name();
        if (typeof browserName !== 'undefined' && globalConfig.isServiceWorkerSupported(browserName)) {
          this.browserType = browserName;
        } else {
          this.browserType = 'not-supported';
          this.canPushBeEnabled = false;
        }
      },
      /*
       * Registers a new subscription and returns subscription details. (ID and endpoint)
       */
      subscribe: function () {
        var promise = $pushcrew.Deferred(), self = this;
        if (!globalConfig.internalConfig.isSafari) {
          // Registers Service worker at specified relative path
          navigator.serviceWorker.register(self.serviceWorkerPath).then(function (serviceWorkerRegistration) {
            if (Notification.permission === 'default' && typeof globalConfig._pushcrew.executeOptInShownCallback === 'function') {
              globalConfig._pushcrew.executeOptInShownCallback();
            }
            // Initialize with * pattern since this was the previous behaviour before the rollout of this feature.
            pushcrewConfig.includeUrls = pushcrewConfig.includeUrls || '.*';
            pushcrewConfig.excludeUrls = pushcrewConfig.excludeUrls || window._puschrew_exclude_url_pattern || '';
            if (HTTPCHILD) {
              pushcrewConfig.includeUrls = '.*';
              pushcrewConfig.includeUrls = '';
            }
            // Show notification prompt
            // Prompt shows up when `Notification.permission` value is 'default'
            if (pcUtils.qualifyForOptin(pushcrewConfig.includeUrls, pushcrewConfig.excludeUrls)) {
              // Show native opt-in
              Notification.requestPermission().then(function (permission) {
                var subscribeOptions = { userVisibleOnly: true };
                if (pushcrewConfig.vapidPublicKey) {
                  subscribeOptions['applicationServerKey'] = pcUtils.urlBase64ToUint8Array(pushcrewConfig.vapidPublicKey);
                }
                // If `Allow` was clicked in the prompt
                if (permission === 'granted') {
                  // Subscribe called only when service worker registered successfully
                  // and permission granted.
                  serviceWorkerRegistration.pushManager.subscribe(subscribeOptions).then(function (subscription) {
                    promise.resolve(subscription);
                  }).catch(function (err) {
                    if (/(manifest)\s+((\bmissing\b)|(\bempty\b))/.test(err) && pushcrewConfig.vapidPublicKey) {
                      globalConfig.internalConfig.manifestNeeded = true;
                      window._pushcrewDebuggingQueue.push('failed using vapid, retry with gcm');
                      promise.resolve('retryWithGcmKey');
                    } else {
                      promise.resolve('error');
                    }
                  });
                }  // If prompt was closed
                else if (permission !== 'denied') {
                  promise.resolve('error');
                }  // If `Disallow` was clicked in the prompt
                else {
                  promise.resolve('denied');
                }
              });
            }
          }).catch(function (error) {
            promise.resolve('error');
          });
        } else {
          this.safariSubscribe(promise);
        }
        return promise;
      },
      /*
       * Returns details of an existing subscription
       */
      getUserSubscription: function () {
        var promise = $pushcrew.Deferred(), self = this;
        if (globalConfig.internalConfig.isSafari) {
          var permissionData = window.safari.pushNotification.permission(pushcrewConfig.safariWebsitePushId);
          if (permissionData.permission === 'granted' && permissionData.deviceToken) {
            promise.resolve(permissionData);
          } else {
            promise.resolve(false);
          }
          return promise;
        }
        var permission = Notification.permission;
        // We need the service worker registration to check for a subscription
        if (permission == 'granted') {
          navigator.serviceWorker.register(self.serviceWorkerPath).then(function (serviceWorkerRegistration) {
            // Do we already have a push message subscription?
            serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
              if (!subscription) {
                // User isn't subscribed to push, so user can subsribe to push
                promise.resolve(false);
              } else {
                promise.resolve(subscription);
              }
            }).catch(function () {
              promise.resolve(false);
            });
          });
        } else {
          promise.resolve(false);
        }
        return promise;
      },
      /*
       * Unsubscribe(works only if subscription already exists)
       */
      unsubscribe: function () {
        var promise = $pushcrew.Deferred();
        if (!globalConfig.internalConfig.isSafari) {
          navigator.serviceWorker.register(this.serviceWorkerPath).then(function (serviceWorkerRegistration) {
            serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
              // Check if we have a subscription to unsubscribe
              if (!subscription) {
                promise.resolve('error');
              }
              // calls the unsubscribe function
              subscription.unsubscribe().then(function () {
                promise.resolve(subscription);
              }).catch(function () {
                promise.resolve('error');
              });
            }).catch(function () {
              promise.resolve('error');
            });
          });
        } else {
          var permissionData = window.safari.pushNotification.permission(pushcrewConfig.safariWebsitePushId);
          if (permissionData.permission === 'granted' && permissionData.deviceToken) {
            promise.resolve(permissionData.deviceToken);
          } else {
            promise.resolve('error');
          }
        }
        return promise;
      },
      /**
       * Request Permission to subscribe on Safari
       */
      safariSubscribe: function (promise) {
        var safariWebServiceUrl;
        try {
          safariWebServiceUrl = 'https://pc-safari.' + new URL(pushcrewConfig.serverSyncUrl).host;
        } catch (e) {
          safariWebServiceUrl = 'https://pc-safari.pushcrew.com';
        }
        var permission = window.safari.pushNotification.permission(pushcrewConfig.safariWebsitePushId).permission, _this = this;
        if (permission === 'default') {
          window.safari.pushNotification.requestPermission(safariWebServiceUrl, pushcrewConfig.safariWebsitePushId, {}, function (permissionData) {
            _this.safariSubscriptionHandler(permissionData, promise);
          });
        }
      },
      safariSubscriptionHandler: function (permissionData, promise) {
        if (permissionData.permission === 'granted') {
          promise.resolve(permissionData);
        } else if (permissionData.permission === 'denied') {
          promise.resolve('denied');
        }
      }
    };
  }();
  return { pushSubscription: globalConfig.pushAPI.pushSubscription };
}(jquery, globalConfig, detectBrowser, pcUtils);
vwoUtils_utils_storage = function () {
  var ssStoreName = '_vis_opt_ss', lsStoreName = '_vis_opt_ls';
  // TODO: Use cookie fallback for browsers with no localstorage
  var Storage = function (isLocalStorage) {
    this._getWebStore = function () {
      var storage = localStorage, storeName = lsStoreName, data;
      if (!isLocalStorage) {
        storage = sessionStorage;
        storeName = ssStoreName;
      }
      storeName = storeName + this.uniqueId;
      // TODO: Have mercy on old browsers
      data = storage.getItem(storeName);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    };
    this._setWebStore = function (data) {
      var storage = localStorage, storeName = lsStoreName;
      if (!isLocalStorage) {
        storage = sessionStorage;
        storeName = ssStoreName;
      }
      storeName = storeName + this.uniqueId;
      storage.setItem(storeName, JSON.stringify(data));
    };
    this.set = function (name, value) {
      var store = this._getWebStore();
      store = store || {};
      store[name] = value;
      this._setWebStore(store);
    };
    this.remove = function (name) {
      var store = this._getWebStore();
      store = store || {};
      delete store[name];
      this._setWebStore(store);
    };
    this.get = function (name) {
      var store = this._getWebStore();
      if (store) {
        // Don't let undefined be return value because Number(undefined) is NaN which just breaks the addition of a number to it.
        return store[name] || null;
      }
      return null;
    };
    this.init = function (uniqueId) {
      this.uniqueId = uniqueId || '';
    };
  };
  return {
    ls: new Storage(true),
    ss: new Storage()
  };
}();

vwoUtils_operators = function () {
  // Checks if the argument is a set variable
  var isAValue = function (s) {
      return s !== null && 'undefined' !== typeof s;
    },
    /**
    * Checks if argument contains dot (.) character
    * @param {String} key
    * @return {Boolean}
    * @example isNestedProperty('order.product.id') //true
    * @example isNestedProperty('order.pId') //true
    * @example isNestedProperty('pId') //false
    */
    isNestedProperty = function (key) {
      return key && key.split('.').length > 1;
    }, precheck = function (a, b, dict) {
      return dict && isAValue(dict[a]) && isAValue(b);
    };
  var operations = {
    // greater than
    gt: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'gt');
      }
      return precheck(a, b, dict) && parseFloat(dict[a]) > parseFloat(b);
    },
    // less than
    lt: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'lt');
      }
      return precheck(a, b, dict) && parseFloat(dict[a]) < parseFloat(b);
    },
    // equals
    eq: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'eq');
      }
      return precheck(a, b, dict) && parseFloat(dict[a]) === parseFloat(b);
    },
    // not equals
    noteq: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'noteq');
      }
      return precheck(a, b, dict) && !this.eq(a, b, dict);
    },
    // Starts
    st: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'st');
      }
      return precheck(a, b, dict) && dict[a].toString().toLowerCase().indexOf(b.toString().toLowerCase()) === 0;
    },
    // ends
    en: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'en');
      }
      if (!precheck(a, b, dict)) {
        return false;
      }
      var pos = dict[a].toString().toLowerCase().indexOf(b.toString().toLowerCase());
      return pos >= 0 ? pos + b.toString.length() === dict[a].toString().length() : false;
    },
    // case insensitive equals
    cise: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'cise');
      }
      return precheck(a, b, dict) && dict[a].toString().toLowerCase() === b.toString().toLowerCase();
    },
    // not case insensitive equals
    ncise: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'ncise');
      }
      return precheck(a, b, dict) && !this.cise(a, b, dict);
    },
    // case sensitive equals
    cse: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'cse');
      }
      return precheck(a, b, dict) && dict[a].toString() === b.toString();
    },
    // not case sensitive equals
    ncse: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'ncse');
      }
      return precheck(a, b, dict) && !this.cse(a, b, dict);
    },
    // regex case insensitive equals
    regcise: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'regcise');
      }
      if (!precheck(a, b, dict)) {
        return false;
      }
      var re = new RegExp(b, 'i');
      // Convert to string as `match` method exists on string only
      dict[a] = dict[a] + '';
      return dict[a].search(re) >= 0;
    },
    // regex case sensitive equals
    regcse: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'regcse');
      }
      if (!precheck(a, b, dict)) {
        return false;
      }
      var re = new RegExp(b);
      // Convert to string as `match` method exists on string only
      dict[a] = dict[a] + '';
      return dict[a].search(re) >= 0;
    },
    // contains
    co: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'co');
      }
      return precheck(a, b, dict) && dict[a].toString().toLowerCase().indexOf(b.toString().toLowerCase()) > -1;
    },
    // not contains
    nco: function (a, b, dict) {
      if (isNestedProperty(a)) {
        return deepMatch(a, b, dict, 'nco');
      }
      return precheck(a, b, dict) && !this.co(a, b, dict);
    }  /** The functions below are not in use currently
       // is blank
       ib: function (a, b, dict) {
         if (isNestedProperty(a)) {
           return deepMatch(a, b, dict, 'ib');
         }
         return dict && dict[a] ? false : true;
       },
       // is not blank
       inb: function (a, b, dict) {
         if (isNestedProperty(a)) {
           return deepMatch(a, b, dict, 'inb');
         }
         return !this.ib(a, dict);
       }
       */
  };
  /**
  * Performs operations on nested properties
  * @param {Object} a Key to be looked for in data (dict[a] = lhs)
  * @param {Object} b Value to be compared to (rhs)
  * @param {Object} dict Event data
  * @param {String} operation operation to be peformed on lhs and rhs
  * @example deepMatch('order.pId', 1, {order: [{pId: 0}, {pId: 2}], 'gt'}) // Returns true
  * @example deepMatch('order.pId', 1, {order: {pId: 2}}, 'gt'}) // Returns true
  */
  var deepMatch = function (a, b, dict, operation) {
    var parentEvnt = a.split('.')[0], subEvent = a.substring(a.indexOf('.') + 1);
    return dict[parentEvnt] instanceof Array ? dict[parentEvnt].some(function (item) {
      return operations[operation] && operations[operation](subEvent, b, item);
    }) : operations[operation] && operations[operation](subEvent, b, dict[parentEvnt]);
  };
  return operations;
}();

vwoUtils_trigger = function ($, storage, operators) {
  function TriggeredEvent(config) {
    var checker = config.checker || function () {
        return true;
      }, conditions = config.conditions || '', name = config.name || '', callbacks = config.callbacks || [], triggeredAt = config.triggeredAt || [];
    this.name = name;
    this.checker = checker;
    this.conditions = conditions;
    this.callbacks = callbacks;
    this.triggeredAt = triggeredAt;
    this.isAttached = false;
    this.isTriggered = false;
  }
  /**
  * A common listener for all types of dom events
  * @param {Object} evnt An event object which attached a DOM Event Listener
  * @param {jQuery.Event} e An actual Dom Event which triggered
  */
  function domEventListener(evnt, e) {
    evnt.domEvent = e;
    trigger.triggerEvent(evnt);
  }
  /**
  * source - http://youmightnotneedjquery.com
  * @param {*} fn Callback to execute on dom ready
  */
  /*
  	function domReadyPolyfill(fn) {
  		if (document.readyState !== 'loading'){
  		  fn();
  		} else if (document.addEventListener) {
  		  document.addEventListener('DOMContentLoaded', fn);
  		} else {
  		  document.attachEvent('onreadystatechange', function() {
  			if (document.readyState !== 'loading') {
  				fn();
  			}
  		  });
  		}
  	}
  	*/
  /**
  * @description Validates the event conditions against the event data.
  * @param {Array} conditions
  * @param {Object} evntPayload
  * @example conditions [['pId', 'gt', 1], ['pName', 'cse', 'iphone']]
  * @example evntPayload {pId: 2, pName: 'IPhone'}
  */
  function getOperationStatus(conditions, evntPayload) {
    var operatorCheckors = [], dict = evntPayload || {};
    conditions = conditions || [];
    conditions.forEach(function (operation) {
      var leftOperandKeyName = operation[0], operator = operation[1], rightOperand = operation[2], operatorMethod = operators[operator];
      operatorCheckors.push(operatorMethod.bind(operators, leftOperandKeyName, rightOperand));
    });
    // Return true if every operation individually returns true
    return operatorCheckors.every(function (operatorCheckor) {
      return operatorCheckor(dict);
    });
  }
  function isMouseMoveUpward(evnt) {
    // +/-3 is added for covering the error in firefox
    return evnt.screenY - window.innerHeight < 0 && (evnt.offsetX || evnt.clientX) - 3 > 0 && evnt.clientX + 3 - window.innerWidth < 0;
  }
  function onMouseLeave(evnt) {
    var evntConfig = trigger.getConfig(evnt), evntData = trigger.getData(evnt), mouseLeaveDomEvent = evnt.domEvent,
      // Make the value positive
      // clientY doesn't give the correct value on IE. Its always -1. offsetY is the correct value there.
      // Firefox doesn't have offsetY, the correct value comes in clientY only.
      // Calculating using Math.abs (absolute value), as IE gives value in -ve and Firefox/Chrome gives value in +ve
      mouseJump = Math.abs(mouseLeaveDomEvent.offsetY || mouseLeaveDomEvent.clientY);
    if (mouseJump > evntConfig.threshold && isMouseMoveUpward(mouseLeaveDomEvent)) {
      evntData.callbackTimer = setTimeout(function () {
        trigger.triggerEvent(evnt);
      }, evntData.delay * 1000);
    }
  }
  function onMouseEnter(evnt) {
    var evntData = trigger.getData(evnt);
    clearTimeout(evntData.callbackTimer);
  }
  var ls = storage.ls, ss = storage.ss,
    // It contains data for all the events
    // The data has following important things
    // 1. isAttached -> If the event listener has been attached
    // 2. isTriggered -> If the event has been triggered atleast once (We might choose to not store the timestamp of an event so its the only way to track if occured or not)
    // 3. triggeredAt -> An array containing timestamps of when the event was triggered. An event can trigger multiple times
    // 4.
    allEventsData = {}, isListenterAttached = {
      'mousedown': false,
      'click': false
    }, eventTargets = [], noop = function () {
    }, targetSeparator = ':', relativeToEventSeparator = ';',
    // It is the configuration of events
    // {
    //	GROUP_NAME: {
    //		relativeTo: '',
    //		persist: true,
    //		persist: {
    //			ctx: [],
    //			inSession: true
    //		}
    //		listenerAdder: function () {},
    //		listenerRemover: function () {}
    //	}
    // }
    allEventsConfig = {
      dom: {
        //will handle all DOM evnts like click, ready etc
        listenerAdder: function (evnt) {
          switch (evnt.shortName) {
          /**
           * @example
           * trigger.on('dom.load', callback);
           *
           * @example
           * trigger.on({name: 'dom.load'}, callback);
           */
          case 'load':
            /* DOMContentLoaded event will not work because we might attach listener after DOM Ready
            	if (document.addEventListener) {
            		if (document.readyState !== 'complete') {
            			document.addEventListener('DOMContentLoaded', function (e) {
            				evnt.domEvent = e;
            				callback(evnt);
            			});
            		} else {
            			callback(evnt);
            		}
            	}
            	*/
            /**
            * @todo Use domreadypolyfill function here
            */
            $(function () {
              domEventListener(evnt);
            });
            break;
          /**
           * @example
           * trigger.on({name: 'dom.click', target: '#path'}, callback);
           */
          case 'click':
          /**
           * @example
           * trigger.on({name: 'dom.mousedown', target: '#path'}, callback);
           */
          case 'mousedown':
            eventTargets = eventTargets || [];
            eventTargets.push(evnt);
            if (!isListenterAttached[evnt.shortName]) {
              isListenterAttached[evnt.shortName] = true;
              document.addEventListener(evnt.shortName, function (e) {
                eventTargets.forEach(function (event) {
                  var parentElems = $(event.target);
                  var len = parentElems.length;
                  for (var j = 0; j < len; j++) {
                    if (parentElems[j] === e.target || parentElems[j].contains(e.target)) {
                      domEventListener(event, e);
                    }
                  }
                });
              }, true);
            }
          }
        },
        listenerRemover: function () {
        }
      },
      /**
      * @example
      * // Adds a callback to be called 10 seconds after DOMLOad
      * trigger.on({name: 'delay', target: '10'}, listener)
      *
      * @example
      * // Adds a callback to be called 10 seconds after clicking an element with selector path #path
      * trigger.on({name: 'delay', target: '10', relativeTo: {
      *	name: 'dom.click',
      *	target: '#path'
      * }}, listener)
      */
      delay: {
        // Give default value
        relativeTo: 'dom.load',
        listenerAdder: function (evnt) {
          // Negative time means in past, so execute straightaway
          var target = evnt.target;
          if (target < 0) {
            target = 0;
          }
          // Add it as a waiter to the event specified by relativeTo
          trigger.addWaiter(evnt.relativeTo, function () {
            setTimeout(function () {
              trigger.triggerEvent(evnt);
            }, target * 1000);
          });
        }
      },
      interval: {
        listenerAdder: function (evnt) {
          // It will be needed for some triggers like 'value of an Element'
          // TODO: Use setTimeout
          setInterval(function () {
            trigger.triggerEvent(evnt);
          }, 1000);
        }
      },
      leaveIntent: {
        // An indicator of how fast the mousepointer should be moved out.
        threshold: 2,
        // Once user takes the mouse out of the document, after how many seconds should we consider leave itent
        delay: 1,
        listenerAdder: function (evnt) {
          $(document).on('mouseleave', function (e) {
            evnt.domEvent = e;
            onMouseLeave(evnt);
          });
          $(document).on('mouseenter', function (e) {
            evnt.domEvent = e;
            onMouseEnter(evnt);
          });
        }
      },
      scroll: {
        listenerAdder: function (evnt) {
          // Accept evnt.target in format of [<position>,<amount>] where position would be (t,b,tp,bp)
          var target = evnt.target, position, scrollAmount;
          // Default will be full page scrolled from top
          if (!target) {
            target = [
              'tp',
              '100'
            ];
          }
          // If position is not given, then add top as default position
          if (!(target instanceof Array)) {
            target = [
              't',
              target
            ];
          }
          position = target[0];
          scrollAmount = target[1];
          var getAbsoluteScrollAmount = function (position, amount) {
            var amountInPixels, scrollableArea = $(document).height() - window.innerHeight;
            amount = parseInt(amount, 10);
            // If amount given is in percentage
            if (position === 'tp' || position === 'bp') {
              amountInPixels = scrollableArea * amount / 100;
            } else {
              amountInPixels = amount;
            }
            // If position is from bottom, calcualte position from top
            if (position === 'b' || position === 'bp') {
              amountInPixels = scrollableArea - amountInPixels;
            }
            // Have margin of 2px due to pixelation error
            return amountInPixels - 2;
          };
          $(window).on('scroll', function () {
            var absoluteScrollAmount = getAbsoluteScrollAmount(position, scrollAmount);
            if (window.pageYOffset >= absoluteScrollAmount) {
              trigger.triggerEvent(evnt);
            }
          });
        }
      },
      subscribe: {
        listenerAdder: function (evnt) {
          if (window.pushcrew && window.pushcrew.subscribed) {
            setTimeout(function () {
              trigger.triggerEvent(evnt);
            }, 10);
          }
        }
      }
    };
  /** @exports trigger **/
  var trigger = {
    /**
     * It reads the persisted triggers and caches them on eventsReadFromPersistence
     */
    setPastTriggers: function () {
      var self = this;
      var eventsReadFromPersistence = ls.get('tE') || {};
      $.extend(eventsReadFromPersistence, ss.get('tE'));
      this.eventsReadFromPersistence = eventsReadFromPersistence;
      $.each(eventsReadFromPersistence, function (evntName, persistedData) {
        if (!persistedData || !persistedData[0]) {
          return;
        }
        persistedData = persistedData[0];
        var evntData = self.getData(evntName), persistContext = persistedData.ctx;
        if (persistContext.indexOf(-1) === -1 && persistContext.indexOf(this.context) === -1) {
          // Continue
          return true;
        }
        evntData.isTriggered = true;
        evntData.triggeredAt = evntData.triggeredAt || [];
        if (persistedData.t) {
          evntData.triggeredAt.push(persistedData.t);
        }
      });
    },
    /**
     * Gets the name relative to the group of given event
     * @param {Object} evnt Event Object
     */
    getShortName: function (evnt) {
      if (!evnt) {
        return '';
      }
      var evntName = evnt.name, evntNames = evntName.split('.');
      if (evntNames.length) {
        return evntNames[evntNames.length - 1];
      }
    },
    /**
     * Adds a waiter(i.e. a function that will be called once the event has triggered and all its callbacks has been called)
     * If the event for which we are adding waiter is not attached yet, we add the event listener for that too.
     * @param {Object} evnt An event object
     * @param {Function} waiter The waiter function
     */
    addWaiter: function (evnt, waiter) {
      var data = trigger.getData(evnt);
      data.waiters = data.waiters || [];
      data.waiters.push(waiter);
      // If its already triggered, execute the waiter
      // Its possible that this event doesn't again in future in which case it will be needed.
      if (data.isTriggered) {
        waiter();
      }
      // We can't attach the listener before pushing waiter. As, it might happen that event trigger synchronously and thus waiter function being added won't be called
      if (!data.isAttached) {
        trigger.on(evnt);
      }
    },
    /**
     * Gets the fullName for the any event
     * A full name for an event is basically a string representation of an event object.
     * It encodes certains parts of fullName so that the separators are never part of the data.
     * @example
     * For delay of 2 seconds relative to dom.load, full name will be 'delay:2;domLoad'
     * @example
     * For Click on element with selector path '.login-btn', full name will be 'dom.click:.login-btn'
     * @param {Object} evnt Event object
     */
    getFullName: function (evnt) {
      if (!evnt) {
        return '';
      }
      var fullName = evnt.name, relativeTo = evnt.relativeTo, target = evnt.target;
      if (target) {
        // evnt.target is usually given by user. So, encode it before using in hash
        fullName += targetSeparator + encodeURIComponent(target);
      }
      if (relativeTo) {
        if (typeof evnt.relativeTo !== 'string') {
          relativeTo = trigger.getFullName(relativeTo);
        }
        // relativeTo can be fullName of another event, which can itself have weird characters.
        // So, encode this too.
        fullName += relativeToEventSeparator + encodeURIComponent(relativeTo);
      }
      return fullName;
    },
    /**
     * It gets data for a certain event
     * @param {Object} evnt
     */
    getData: function (evnt) {
      if (typeof evnt !== 'string') {
        evnt = trigger.getFullName(evnt);
      }
      allEventsData[evnt] = allEventsData[evnt] || {};
      return allEventsData[evnt];
    },
    /**
     * It sets the data for the given event
     * @param {Object} evnt Event Object
     * @param {Object} data Data to set
     */
    setData: function (evnt, data) {
      if (typeof evnt !== 'string') {
        evnt = trigger.getFullName(evnt);
      }
      allEventsData[evnt] = data || {};
      return allEventsData[evnt];
    },
    /**
     * Reads the config for the given event
     * @param {Object} evnt Event Object
     */
    getConfig: function (evnt) {
      var groupName = trigger.getGroupName(evnt);
      return allEventsConfig[groupName] || {};
    },
    /**
     * It gets the group name of the give event
     * @param {Object} evnt Event Object
     */
    getGroupName: function (evnt) {
      if (typeof evnt !== 'string') {
        evnt = evnt.name;
      }
      return evnt.split('.')[0];
    },
    /**
     * It parses the event provided and spits some useful info
     * @param {Object} evnt Event Object
     */
    parseEvent: function (evnt) {
      if (!evnt) {
        return;
      }
      var config = trigger.getConfig(evnt);
      evnt.relativeTo = evnt.relativeTo || config.relativeTo;
      evnt.target = evnt.target || config.target;
      var evntName = evnt.name, evntNames = evntName.split('.'), fullName = trigger.getFullName(evnt);
      return {
        // Its the name of a group of events which can have common listenerAdder and listenerRemover methods.
        groupName: evntNames[0],
        // Its the unique name within a specific event group. Its useful to do some conditional stuff within common methods in the group
        shortName: trigger.getShortName(evnt),
        fullName: fullName
      };
    },
    /**
     * Time spent in ms since the given event
     * @param {Object} evnt Event Object
     *
     * Currently it returns the time since very first occurence of the event
     */
    timeSince: function (evnt) {
      var evntFullName = trigger.getFullName(evnt), data = trigger.getData(evntFullName);
      // TODO: We might need to calculat timeSince nth occurence of the evnt.
      // e.g. Time after user clicked on some button n number of times
      if (data.triggeredAt && data.triggeredAt[0]) {
        return Date.now() - data.triggeredAt[0];
      }
    },
    /**
     * It determines if an event has occurred or not.
     * @param {Object} evnt Event Object
     */
    hasEventOccurred: function (evnt) {
      var evntFullName = trigger.getFullName(evnt), data = trigger.getData(evntFullName), isTriggered = false;
      if (evnt.conditions && data.subEvents) {
        data.subEvents.forEach(function (ev) {
          if (ev.conditions === JSON.stringify(evnt.conditions)) {
            isTriggered = ev.isTriggered;
          }
        });
        return isTriggered;
      }
      isTriggered = data.isTriggered;
      return isTriggered;
    },
    /**
     * Adds a listener/callback for all the events specified
     *
     * An event in the list can be just name of the event(if just that is enough to specify it) or it can be an object for complex events
     *
     * @example
     * 1. For a click trigger on element with selector path #path the event will be
     * {
     * name: 'dom.click',
     * target: '#path'
     * }
     * 2. For dom load event it can simply be a string 'dom.load'
     *
     * @param {Array} events List of events
     * @param {trigger~onTriggerEventCallback}
     * @memberOf trigger
     */
    on: function (events, callback) {
      callback = callback || noop;
      if (!events) {
        return;
      }
      if (!(events instanceof Array)) {
        events = [events];
      }
      var evnt, parsedEvent, evntConfig, evntData;
      for (var i = 0; i < events.length; i++) {
        evnt = events[i];
        if (typeof evnt === 'string') {
          evnt = { name: evnt };
        }
        parsedEvent = this.parseEvent(evnt);
        if (!parsedEvent) {
          continue;
        }
        // Cache certain properties directly on event
        evnt.shortName = parsedEvent.shortName;
        evnt.fullName = parsedEvent.fullName;
        evntConfig = allEventsConfig[parsedEvent.groupName];
        evntData = trigger.getData(evnt);
        if (!evntConfig || !evntConfig.listenerAdder) {
          continue;
        }
        if (evnt.conditions) {
          /*jshint -W083 */
          var curriedValidator = function (conditions) {
              return function (dict) {
                return getOperationStatus(conditions, dict);
              };
            }, checker = curriedValidator(evnt.conditions), subEvent = new TriggeredEvent({
              checker: checker,
              conditions: JSON.stringify(evnt.conditions),
              callbacks: [callback]
            });
          /*jshint +W083 */
          evntData.subEvents = evntData.subEvents || [];
          evntData.subEvents.push(subEvent);
        } else {
          evntData.callbacks = evntData.callbacks || [];
          evntData.callbacks.push(callback);
        }
        if (evntData.subEvents) {
          var self = this;
          /*jshint -W083 */
          evntData.subEvents.forEach(function (ev) {
            if (ev.isAttached) {
              if (ev.isTriggered) {
                self.triggerEvent(evnt, true);
              }
            }
            ev.isAttached = true;
          });  /*jshint +W083 */
        }
        if (evntData.isAttached) {
          if (evntData.isTriggered) {
            this.triggerEvent(evnt, true);
          }
          continue;
        }
        // Mark the event as attached before calling listenerAdder.
        // Its needed because listenerAdder might cause `on` to be called again.
        evntData.isAttached = true;
        evntConfig.listenerAdder(evnt);
      }
    },
    /**
     * @callback trigger~onTriggerEventCallback
     * @description A function thats called when an event triggers
     * @param {Object} event Event that triggered the callback
     * @param {Object} event.domEvent If it was a DOM event too, then it represents the corresponding domEvent
     */
    /**
     * Defines an event specified by the group name
     * @param {String} groupName Name of the group for the event
     * @param {Object} definition A config object for the event
     */
    addEvent: function (groupName, definition) {
      if (allEventsConfig[groupName]) {
        return;
      }
      allEventsConfig[groupName] = definition;
    },
    /**
     * Persists the given evnt
     * @param {Object} evnt Event Object
     * @paraa {Number} triggeredAt Time in ms when it occurred
     */
    persistEvent: function (evnt, triggeredAt) {
      if (!evnt.persist) {
        return;
      }
      var storage = ls;
      if (evnt.persist.inSession) {
        storage = ss;
      }
      var allPastEvents = storage.get('tE') || {}, pastEvents;
      pastEvents = allPastEvents[evnt.fullName] = allPastEvents[evnt.fullName] || [];
      // -1 signifies that we need to persist this evnt for all entities
      pastEvents.push({
        t: triggeredAt,
        ctx: evnt.persist.ctx && evnt.persist.ctx.length || [-1]
      });
      storage.set('tE', allPastEvents);
    },
    markEventTriggered: function (evnt, triggeredAt) {
      var data = trigger.getData(evnt), config = trigger.getConfig(evnt);
      // Flag that the event shouldn't be persisted(neither in memory nor in storage)
      //ephemeral: true,
      if (!config.ephemeral) {
        data.isTriggered = true;
      }
      data.triggeredAt = data.triggeredAt || [];
      data.triggeredAt.push(triggeredAt);
    },
    /**
     * It's the one who actually executes the listeners and waiters attached for the specific event that occurred
     * @param {Object} evnt Event Object
     */
    triggerEvent: function (evnt, isAlreadyTriggered) {
      var data = trigger.getData(evnt), config = trigger.getConfig(evnt), triggeredAt = Date.now();
      this.markEventTriggered(evnt, triggeredAt);
      // Read defaults if not set
      evnt.persist = evnt.persist || config.persist;
      if (evnt.persist) {
        this.persistEvent(evnt, triggeredAt);
      }
      if (data.callbacks) {
        // If already triggered, execute the recently pushed callback only
        if (isAlreadyTriggered) {
          data.callbacks[data.callbacks.length - 1](evnt);
        } else {
          for (var k = 0; k < data.callbacks.length; k++) {
            data.callbacks[k](evnt);
          }
        }
      }
      if (data.subEvents) {
        for (var i = 0; i < data.subEvents.length; i += 1) {
          var subEvent = data.subEvents[i];
          if (!subEvent.isTriggered && subEvent.checker(evnt && evnt.evntPayload)) {
            var callbacks = subEvent.callbacks || [];
            subEvent.isTriggered = true;
            subEvent.triggeredAt = subEvent.triggeredAt || [];
            subEvent.triggeredAt.push(triggeredAt);
            for (var j = 0; j < callbacks.length; j += 1) {
              callbacks[j](evnt);
            }
          }
        }
      }
      if (data.waiters) {
        while (data.waiters.length) {
          data.waiters.shift()();
        }
      }
    },
    /**
     * Intialize the trigger library
     */
    init: function () {
      trigger.setPastTriggers();
    },
    resetAllTriggers: function () {
      $.each(allEventsData, function (eventName, data) {
        delete data.isTriggered;
        delete data.triggeredAt;
        if (data.callbacks) {
          for (var i = data.callbacks.length - 1; i >= 0; i--) {
            if (data.callbacks[i].validForThisPage) {
              data.callbacks.splice(i, 1);
            }
          }
        }
      });
    }
  };
  // Debugging Code Starts
  trigger.__clearCache = function () {
    allEventsData = {};
  };
  trigger.__data = allEventsData;
  trigger.__config = allEventsConfig;
  // Debugging Code Ends
  return trigger;
}(jquery, vwoUtils_utils_storage, vwoUtils_operators);
vwoUtils_utils_utils = function () {
  var utils = {
    logQueue: [],
    getKeys: function (obj) {
      var keysList = [];
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          keysList.push(i);
        }
      }
      return keysList;
    },
    // Shallow Extend
    extend: function (obj1, obj2) {
      for (var i in obj2) {
        if (obj2.hasOwnProperty(i)) {
          obj1[i] = obj2[i];
        }
      }
    },
    forEach: function (obj, callback) {
      if (!obj || typeof callback !== 'function') {
        return;
      }
      var i;
      if (obj instanceof Array) {
        for (i = 0; i < obj.length; i++) {
          if (callback(obj[i], i) === false) {
            // Break
            return;
          }
        }
      } else {
        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (callback(obj[i], i) === false) {
              // Break
              return;
            }
          }
        }
      }
    },
    log: function () {
      this.logQueue.push({
        t: Date.now(),
        details: arguments
      });
    },
    arrayContains: function (haystack, needle) {
      if (!(haystack instanceof Array)) {
        return -1;
      }
      for (var i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
          return i;
        }
      }
    },
    setAttrs: function (el, attrs) {
      var keys = this.getKeys(attrs);
      for (var i = 0; i < keys.length; i++) {
        el.setAttribute(keys[i], attrs[keys[i]]);
      }
    },
    isAbsoluteUrl: function (url) {
      return /^(https?:\/\/|\/\/)/.test(url);
    }
  };
  return utils;
}();
triggerWrapper = function (trigger, utils) {
  var slice = [].slice, doneWithAddingEvents, isCallbackExecuting = false;
  /**
   * This wrapper is subpart of vwo survey wrapper. It has only which is required for pushcrew trigger
   */
  var triggerWrapper = {
    /** description : this function is used for initialize the trigger library on subscriber page
     *	this method will put all listeners based on segments which contains event interaction
     */
    addTriggers: function (tC) {
      /* This function expects only segments which have click event. Eval string will always have
      '_pc_u.cm' part of string.
      Example : "(_pc_u.cm('eO','dom.mousedown','#baby') && (_vwo_s().f_in(_vwo_s().U(), 'https:\/\/reactifier.github.io\/')))" */
      utils.forEach(tC, function (evalObj) {
        var expressionToAddTriggers = triggerWrapper.orifyTriggerExpression(evalObj.ss);
        // In case the value is truthy, mark it 0 so that other triggers can be processed
        if (expressionToAddTriggers == 1 || expressionToAddTriggers === 'true') {
          expressionToAddTriggers = 0;
        }
        try {
          eval(expressionToAddTriggers);
        } catch (e) {
          utils.log('Error in adding triggers', e);
        }
      });
      doneWithAddingEvents = true;
    },
    /** this method is final callback when any click event is fired from trigger library
     * we will evaluate segments here which contains click event eval strings
     */
    onTrigger: function (evnt) {
      console.log('event occured');
      window.PC.evalClickSegments();
    },
    onCustomTrigger: function (evnt) {
      if (isCallbackExecuting) {
        return;
      }
      console.log('shopify event occurred');
      isCallbackExecuting = true;
      window.PC && window.PC.evalShopifySegments();
      isCallbackExecuting = false;
    },
    /** when first time trigger library loads all event eval strings will be false
     * for attaching event listeners this function will orify trigger expression for
     * attaching event listeners
     */
    orifyTriggerExpression: function (exprStr) {
      if (!exprStr || typeof exprStr !== 'string') {
        return exprStr;
      }
      // Convert && to ||
      exprStr = exprStr.replace(/&&|\|\|/g, '||');
      // Remove ! operator
      exprStr = exprStr.replace(/!\s*_pc_u/g, '_pc_u');
      return exprStr;
    }
  };
  var vwoSurveyUtils = {
    /**
     * hasEventOccurred
     *
     * @param eventName
     * @param target
     * @return {undefined}
     */
    hasEventOccurred: function (eventName, target) {
      var args = { name: eventName };
      if (target instanceof Array || eventName.indexOf('ecom') >= 0) {
        args.conditions = target || [];
      } else {
        args.target = target;
      }
      return trigger.hasEventOccurred(args);
    }
  };
  /**
   * @memberof module:vwoSurveyUtils
   * @description Its an alias of hasEventOccurred
   */
  vwoSurveyUtils.eO = vwoSurveyUtils.hasEventOccurred;
  /**
   * @description Calls a method with name `methodName` present on {@link vwoSurveyUtils}
   * @param methodName Name of the method present on vwoUtils to be called
   */
  vwoSurveyUtils.callTriggerMethod = function (methodName) {
    if (this[methodName]) {
      // HACK: As this key is per survey, I need to read that particular key
      if (!doneWithAddingEvents) {
        if (methodName === 'eO') {
          var eventData = arguments[2];
          if (eventData instanceof Array || arguments[1].indexOf('ecom') >= 0) {
            trigger.on({
              name: arguments[1],
              conditions: eventData || []
            }, triggerWrapper.onCustomTrigger);
          } else {
            trigger.on({
              name: arguments[1],
              target: eventData
            }, triggerWrapper.onTrigger);
          }
        }
        return false;
      }
      // Call the original method with all its arguments
      return this[methodName].apply(this, slice.call(arguments, 1));
    }
  };
  /**
   * @memberof module:vwoSurveyUtils
   * @description Its an alias of callTriggerMethod
   */
  vwoSurveyUtils.cm = vwoSurveyUtils.callTriggerMethod;
  window._pc_u = vwoSurveyUtils;
  //Keep a reference for the trigger
  triggerWrapper.trigger = trigger;
  triggerWrapper.utils = utils;
  return triggerWrapper;
}(vwoUtils_trigger, vwoUtils_utils_utils);

AddToCartModule = function ($pushcrew) {
  var AddToCartModule = {
    cartUrlRelativePath: '/cart.js',
    cart: {},
    cartPrevState: {},
    shopifyFormCssSelector: 'form[action=\'/cart/add\']',
    init: function (cartFromStorage) {
      var _this = this;
      this.cartPrevState = cartFromStorage || this.cart;
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          $pushcrew.getJSON(_this.cartUrlRelativePath, function (cart) {
            _this.cart = cart;
            resolve(true);
          });
        }, 2000);
      });
    },
    getPersistingData: function () {
      return JSON.stringify({
        triggeredAt: Date.now(),
        state: this.cart
      });
    },
    getData: function () {
      return Object.assign({}, this.getLastAddedProduct(), {
        total_price: this.cart && this.cart.total_price,
        item_count: this.cart && this.cart.item_count
      });
    },
    getLastAddedProduct: function () {
      var prevCart = this.cartPrevState || {}, currCart = this.cart || {}, isCartValid = currCart && currCart.items;
      if (!isCartValid)
        return {};
      // If items in cart before adding product is not equal to after adding product,
      // it means a new product is added ot the cart
      if (!prevCart || !prevCart.items || prevCart.items.length !== currCart.items.length) {
        // Return the item at 0 index
        return currCart.items && currCart.items[0] || {};
      } else {
        // If items in cart before adding product is equal to after adding product,
        // it means quantity of a product is changed.
        for (var i = 0; i < currCart.items.length; i += 1) {
          if (currCart.items[i].quantity !== prevCart.items[i].quantity) {
            // Return the item whose quantity mismatches
            return currCart.items[i];
          }
        }
      }
      return {};
    },
    processData: function (data) {
      data = data || {};
      // brand attribute missing
      return {
        pId: data.product_id,
        pName: data.title,
        price: parseFloat(data.price) / 100,
        sku: parseInt(data.sku, 10),
        cat: data.product_type,
        pUrl: data.url,
        brand: data.vendor,
        quant: data.quantity,
        cTotal: parseFloat(data.total_price) / 100,
        cItemsCount: data.item_count
      };
    }
  };
  return AddToCartModule;
}(jquery);

CompletedOrder = function () {
  var CompletedOrder = {
    orderPlacedURLRegex: /\/checkouts\/[a-z0-9]+/g,
    getOrderDetailsUrl: '/api/v1/shopify/getOrderDetails',
    init: function () {
      var _this = this,
        // Valid Shopify Checkout URL: https://yoogga.online/23092387/checkouts/dff54f0f6bd5571057d6561831acd3eb
        checkoutPath = window.location.href.match(this.orderPlacedURLRegex), checkoutPathSplit = checkoutPath && checkoutPath[0] && checkoutPath[0].split('/'), checkoutToken = checkoutPathSplit[checkoutPathSplit.indexOf('checkouts') + 1], queryParams = '?customer_hash=' + pushcrewConfig.hash + '&checkout_token=' + checkoutToken;
      this.placedOrderState = {};
      return new Promise(function (resolve, reject) {
        if (checkoutToken) {
          setTimeout(function () {
            // Storing only necessary data attributes so as to not touch P.I.I of the user
            _this.placedOrderState = Shopify.checkout ? {
              total_price: Shopify.checkout.total_price,
              shipping_rate: { price: Shopify.checkout.shipping_rate.price },
              discount: {
                amount: Shopify.checkout.discount && Shopify.checkout.discount.amount,
                code: Shopify.checkout.discount && Shopify.checkout.discount.code
              },
              total_tax: Shopify.checkout.total_tax,
              discount_code: Shopify.checkout.discount_code,
              line_items: Shopify.checkout.line_items || []
            } : {};
            resolve(true);
          }, 3000);
        } else {
          resolve(false);
        }
      });
    },
    getPersistingData: function () {
      return JSON.stringify({
        triggeredAt: Date.now(),
        state: this.placedOrderState
      });
    },
    getData: function () {
      return this.placedOrderState || {};
    },
    processData: function (data) {
      data = data || {};
      // brand attribute missing
      return {
        total: parseFloat(data.total_price),
        shipping: parseFloat(data.shipping_rate && data.shipping_rate.price),
        tax: parseFloat(data.total_tax),
        discount: parseFloat(data.discount && data.discount.amount),
        coupon: data.discount && data.discount.code,
        order: (data.line_items || []).map(function (od) {
          return {
            pId: od.product_id,
            pName: od.title,
            pPrice: parseFloat(od.price),
            pVariant: od.variant_id,
            pSku: parseFloat(od.sku),
            pBrand: data.vendor,
            pQuant: od.quantity,
            pImgUrl: od.image_url
          };
        })
      };
    }
  };
  return CompletedOrder;
}();

ShopifyEventHandler = function (triggerWrapper, AddToCartModule, CompletedOrder, storageUtil, AppConstants) {
  var Modules = {
    'ecom.add_cart': AddToCartModule,
    'ecom.order': CompletedOrder
  };
  var trigger = triggerWrapper.trigger;
  var ShopifyEventHandler = {
    setContextOfEvnt: function (evnt) {
      var module = Modules[evnt.name];
      // "ecom.add_cart"
      module.init(evnt.evntState).then(function (isInit) {
        if (isInit) {
          var data = module.getData() || {}, evntPayload = module.processData(data);
          delete evnt.evntState;
          evnt.evntPayload = evntPayload;
          trigger.triggerEvent(evnt);
        }
      });
    },
    getEventHandler: function (evnt) {
      var module = Modules[evnt.name], _this = this;
      // "ecom.add_cart"
      module.init(evnt.evntState);
      //inits the cart
      return function (ev) {
        storageUtil.addToStorage('wingifyEcomData-' + evnt.name, module.getPersistingData(), AppConstants.Storage.COOKIE.LIFETIME);
        _this.setContextOfEvnt(evnt);
      };
    },
    attachEvent: function (evntName, action) {
      var evnt = { name: evntName },
        // "ecom.add_cart"
        module = Modules[evnt.name], evntDataFromStorage = storageUtil.getFromStorage('wingifyEcomData-' + evnt.name);
      // "wingifyEcomData-ecom.add_cart"
      try {
        evntDataFromStorage = JSON.parse(evntDataFromStorage);
      } catch (e) {
        evntDataFromStorage = {};
      }
      if (evntDataFromStorage.hasOwnProperty('state')) {
        evnt.evntState = evntDataFromStorage.state;
        this.setContextOfEvnt(evnt);
      }
      switch (action) {
      case 'submit':
        var pageElem = document.querySelector(module.shopifyFormCssSelector);
        if (pageElem && pageElem.addEventListener) {
          pageElem.addEventListener(action, this.getEventHandler(evnt));
        }
        break;
      case 'load':
        this.setContextOfEvnt(evnt);
        break;
      }
    }
  };
  return ShopifyEventHandler;
}(triggerWrapper, AddToCartModule, CompletedOrder, storageUtil, AppConstants);

ecommerceEvents = function (triggerWrapper, ShopifyEventHandler) {
  var trigger = triggerWrapper.trigger;
  trigger.addEvent('ecom', {
    listenerAdder: function (evnt) {
      switch (evnt.fullName) {
      case 'ecom.add_cart':
        ShopifyEventHandler.attachEvent(evnt.fullName, 'submit');
        break;
      case 'ecom.order':
        ShopifyEventHandler.attachEvent(evnt.fullName, 'load');
        break;
      case 'prod_view':
      case 'cat_view':
      case 'search':
        break;
      }
    }
  });
  window.ecomEventsInit = true;
  triggerWrapper.trigger = trigger;
  return triggerWrapper;
}(triggerWrapper, ShopifyEventHandler);
deletePcBrowserStorage = function (storageUtil) {
  var deletePcBrowserStorage = function () {
    storageUtil.deleteFromStorage('wingify_push_subscriber_id');
    storageUtil.deleteFromStorage('wingify_push_db_status');
    storageUtil.deleteFromStorage('wingify_push_subscription_endpoint');
    storageUtil.deleteFromStorage('wingify_push_subscription_id');
    storageUtil.deleteFromStorage('wingify_push_subscriber_lang');
    storageUtil.deleteAllKeysFromStorageWithRegex('wingifySegment-');
    storageUtil.deleteAllKeysFromStorageWithRegex('segment-evalDate-');
    storageUtil.deleteFromStorage('wingify_push_subscription_status');
    storageUtil.deleteFromStorage('pshcrw_v_k');
  };
  return deletePcBrowserStorage;
}(storageUtil);

manageSubscription = function ($pushcrew, globalConfig, storageUtil, pushSubscription, ecommerceEvents, deletePcBrowserStorage, IndexedDbOperations, detectBrowser, AppConstants, pcUtils) {
  globalConfig.pushAPI.manageSubscription = function () {
    var syncServerURL = pushcrewConfig.serverSyncUrl;
    var firefoxEncryptionKey = '';
    var customTags;
    var getCustomDimensions = function () {
      var segmentations = pushcrewConfig.segmentations.concat(pushcrewConfig.clickSegmentations).concat(pushcrewConfig.shopifySegmentations);
      var customDimensions = {};
      segmentations.forEach(function (segmentation) {
        var matches = segmentation.ss.match(/_vwo_s\(\).cd\('(\w+)'\)/g);
        if (matches && matches.length) {
          matches.forEach(function (match) {
            var customDimension = /_vwo_s\(\).cd\('(\w+)'\)/g.exec(match)[1];
            if (!customDimensions[customDimension]) {
              customDimensions[customDimension] = true;
            }
          });
        }
      });
      return Object.keys(customDimensions);
    };
    var manageSubscriptionAPI = {
      //User Response to subscribe to push notifications from browser dialog.
      doesUserResponseExists: false,
      customerHash: '',
      callSyncSubscription: function (data, promise, action, subscriptionId, subscriptionEndPoint) {
        var setPushSubscriptionStorage = function () {
            if (action !== 'unsubscribe-ui' && action !== 'unsubscribe-native') {
              storageUtil.addToStorage('wingify_push_subscription_id', subscriptionId, AppConstants.Storage.COOKIE.LIFETIME);
              if (!globalConfig.internalConfig.isSafari) {
                storageUtil.addToStorage('wingify_push_subscription_endpoint', subscriptionEndPoint, AppConstants.Storage.COOKIE.LIFETIME);
              }
            }
          }, _this = this;
        $pushcrew.ajax({
          url: syncServerURL + '/syncSubscriptionAction.php',
          type: 'POST',
          data: data,
          dataType: 'jsonp',
          error: function () {
            storageUtil.addToStorage('wingify_push_db_status', 'false', AppConstants.Storage.COOKIE.LIFETIME);
            setPushSubscriptionStorage();
            promise.resolve('error');
          },
          success: function (response) {
            if (response.status === 'success') {
              storageUtil.addToStorage('wingify_push_subscriber_id', globalConfig.internalConfig.uuid, AppConstants.Storage.COOKIE.LIFETIME);
              storageUtil.addToStorage('wingify_push_db_status', 'true', AppConstants.Storage.COOKIE.LIFETIME);
              storageUtil.addToStorage('wingify_push_do_not_show_notification_popup', 'true', AppConstants.Storage.COOKIE.LIFETIME);
              storageUtil.addToStorage('wingify_push_subscription_status', 'subscribed', AppConstants.Storage.COOKIE.LIFETIME);
              storageUtil.addToStorage('wingify_push_subscriber_lang', globalConfig.pushAPI.utilities.detectUserLanguage(), AppConstants.Storage.COOKIE.LIFETIME);
              if (action === 'unsubscribe-ui' || action === 'unsubscribe-native') {
                deletePcBrowserStorage();
                storageUtil.addToStorage('wingify_push_subscription_status', 'unsubscribed', AppConstants.Storage.COOKIE.LIFETIME);
              }
              // Check if the subscription is happening for HTTP implementation
              var isHttp = false;
              // If new subscription
              if (action === 'insert' || action === 'insert-failed') {
                // If subscription for non HTTP (HTTPS) implementation
                if (pushcrewConfig.origin !== 'http') {
                  _this.getUserProperties().then(function () {
                    setPushSubscriptionStorage();
                    promise.resolve('success');
                    manageSubscriptionAPI.sendCustomTags();
                  });
                } else {
                  // Subscription for HTTP implementation
                  isHttp = true;
                }
              }
              if (action === 'get-subscriberid-from-server') {
                manageSubscriptionAPI.sendCustomTags();
              }
              // When the permission is Blocked from Site Settings
              if (window.pctracker && window.pctracker.supportedEvents && globalConfig._pushcrew.isPermissionDenied()) {
                window.pctracker.track(window.pctracker.supportedEvents.subscriptionUnsubscribed);
              }
              // Need to set subscription ID and endpoint in cookies and resolve promise
              /* As for insert or insert-failed actions and for non-http (https) implementation ,
               * above two actions are done, we need to call for other cases
               */
              if (action !== 'insert' && action !== 'insert-failed' || isHttp) {
                setPushSubscriptionStorage();
                promise.resolve('success');
              }
            } else if (response.status === 'failure') {
              setPushSubscriptionStorage();
              if (action === 'insert' && globalConfig.internalConfig.gcmSenderId) {
                storageUtil.addToStorage('wingify_push_gcm_id', globalConfig.internalConfig.gcmSenderId, AppConstants.Storage.COOKIE.LIFETIME);
              }
              storageUtil.addToStorage('wingify_push_db_status', 'false', AppConstants.Storage.COOKIE.LIFETIME);
              promise.resolve('error');
            } else {
              promise.resolve('error');
            }
          }
        });
      },
      addToSegment: function (segmentId, type, isCustomDimensionSent) {
        window._pushcrewDebuggingQueue.push('addSubscriberToSegment execution begin');
        var subscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id') || false;
        var promise = $pushcrew.Deferred();
        if (!subscriberId) {
          window._pushcrewDebuggingQueue.push('Subscriber ID not found while adding to segment - ' + segmentId);
          promise.reject('Invalid Subscriber Id');
        } else {
          var segmentInfo = {
            id: segmentId,
            customer_hash: pushcrewConfig.hash,
            subscriber_list: [subscriberId]
          };
          if (isCustomDimensionSent) {
            segmentInfo.customTag = type;
            var customDimensions = JSON.parse(type);
            for (var key in customDimensions) {
              if (customDimensions.hasOwnProperty(key)) {
                if (pcUtils.isLocalStorageEnabled()) {
                  localStorage.setItem('_vwo_cd_' + key, customDimensions[key]);
                }
              }
            }
          }
          if (type === 'click') {
            storageUtil.addToStorage('wingifyRetrySegment-' + segmentId, segmentId, AppConstants.Storage.COOKIE.LIFETIME);
          }
          $pushcrew.ajax({
            url: pushcrewConfig.servicesServerURL + '/as',
            type: 'GET',
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },
            data: segmentInfo,
            crossDomain: true,
            error: function () {
              window._pushcrewDebuggingQueue.push('Add to segment call failed');
              promise.resolve(false);
            },
            success: function (response) {
              window._pushcrewDebuggingQueue.push('Add to segment call success for ' + segmentId);
              storageUtil.deleteFromStorage('wingifyRetrySegment-' + segmentId);
              promise.resolve(true);
            }
          });
        }
        window._pushcrewDebuggingQueue.push('addToSegment execution exit');
        return promise;
      },
      getUserProperties: function () {
        window._pushcrewDebuggingQueue.push('Fetching subscriber properties from PushCrew DA CDN');
        var promise = $pushcrew.Deferred(), cookiesItemsOfSegmentationKeysLen = Object.keys(storageUtil.getAllCookiesWithMatchRegex('wingifySegment-') || {}).length;
        // Removed another check because if segment definition changes even though count is same,
        // eval should be called.
        if (pushcrewConfig.segmentations && pushcrewConfig.segmentations.length === 0 && (pushcrewConfig.clickSegmentations && pushcrewConfig.clickSegmentations.length === 0) && (pushcrewConfig.shopifySegmentations && pushcrewConfig.shopifySegmentations.length === 0)) {
          promise.resolve(true);
        } else {
          var customDimensions = getCustomDimensions();
          var fetchCustomDimensions = [];
          if (customDimensions && customDimensions.length) {
            customDimensions.forEach(function (customDimension) {
              if (localStorage.getItem('_vwo_cd_' + customDimension) === null) {
                fetchCustomDimensions.push(customDimension);
              }
            });
          }
          if (fetchCustomDimensions.length === 0) {
            $pushcrew.ajax({
              url: pushcrewConfig.servicesServerURL + '/dyn?hash=' + pushcrewConfig.hash,
              type: 'GET',
              dataType: 'jsonp',
              error: function () {
                window._pushcrewDebuggingQueue.push('User Properties AJAX call failed');
                promise.resolve(true);
              },
              success: function (response) {
                window._pushcrewDebuggingQueue.push('User Properties AJAX call success');
                promise.resolve(true);
              }
            });
          } else {
            $pushcrew.ajax({
              url: pushcrewConfig.serverSyncUrl + '/getSubscriberAttributes.php',
              data: {
                hash: pushcrewConfig.hash,
                subscriberId: storageUtil.getFromStorage('wingify_push_subscriber_id'),
                customDimensions: fetchCustomDimensions,
                browser: detectBrowser.name()
              },
              crossDomain: true,
              dataType: 'json',
              error: function () {
                $pushcrew.ajax({
                  url: pushcrewConfig.servicesServerURL + '/dyn?hash=' + pushcrewConfig.hash,
                  type: 'GET',
                  dataType: 'jsonp',
                  error: function () {
                    window._pushcrewDebuggingQueue.push('User Properties AJAX call failed');
                    promise.resolve(true);
                  },
                  success: function (response) {
                    window._pushcrewDebuggingQueue.push('User Properties AJAX call success');
                    promise.resolve(true);
                  }
                });
              },
              success: function (response) {
                var fetchedAttributes = response.result;
                for (var key in fetchedAttributes) {
                  if (fetchedAttributes.hasOwnProperty(key)) {
                    if (pcUtils.isLocalStorageEnabled()) {
                      localStorage.setItem('_vwo_cd_' + key, fetchedAttributes[key]);
                    }
                  }
                }
                $pushcrew.ajax({
                  url: pushcrewConfig.servicesServerURL + '/dyn?hash=' + pushcrewConfig.hash,
                  type: 'GET',
                  dataType: 'jsonp',
                  error: function () {
                    window._pushcrewDebuggingQueue.push('User Properties AJAX call failed');
                    promise.resolve(true);
                  },
                  success: function (response) {
                    window._pushcrewDebuggingQueue.push('User Properties AJAX call success');
                    promise.resolve(true);
                  }
                });
              }
            });
          }
        }
        return promise;
      },
      evalRetryClickSegments: function (segments, type) {
        if (segments instanceof Array) {
          segments.map(function (segmentId) {
            var isAlreadyInSegment = storageUtil.getCookie('wingifySegment-' + segmentId) || storageUtil.getFromStorage('wingifySegment-' + segmentId) || false;
            if (!isAlreadyInSegment) {
              manageSubscriptionAPI.addToSegment(segmentId, type).then(function () {
                var currentTime = new Date().toString();
                storageUtil.addToStorage('wingifySegment-' + segmentId, 1, AppConstants.Storage.COOKIE.LIFETIME);
                if (type === 'click') {
                  storageUtil.deleteFromStorage('wingifyRetrySegment-' + segmentId);
                }
              });
            }
          });
        }
      },
      evalSegments: function (segments, type) {
        if (segments instanceof Array) {
          segments.map(function (segment) {
            var isAlreadyInSegment = storageUtil.getCookie('wingifySegment-' + segment.sid) || storageUtil.getFromStorage('wingifySegment-' + segment.sid) || false, isToBeAddedToSegment = false;
            if (!isAlreadyInSegment) {
              try {
                isToBeAddedToSegment = eval(segment.ss || false);
              } catch (err) {
                isToBeAddedToSegment = false;
              }
            }
            if (storageUtil.getFromStorage('wingify_donot_track_actions') == 1 && type !== 'normal') {
              isToBeAddedToSegment = false;
            }
            if (!isAlreadyInSegment && isToBeAddedToSegment) {
              manageSubscriptionAPI.addToSegment(segment.sid, type).then(function () {
                var currentTime = new Date().toString();
                storageUtil.addToStorage('wingifySegment-' + segment.sid, segment.vn, AppConstants.Storage.COOKIE.LIFETIME);
              });
            }
          });
        }
      },
      /*
       * Updates the subscription details in DB.
       * Param ('string') : subscriberId : subscriber Id.
       * Param ('string') : previousSubscriptionId : previous Subscription Id(as stored in browser storage).
       * Param ('string') : subscriptionId : subscriptionId(GCM ID).
       * Param ('string') : subscriptionEndPoint : subscriptionEndPoint (provided by google).
       * Param ('string') : action : action to be done in the DB.
       */
      syncSubscription: function (subscription, subscriberId, previousSubscriptionId, subscriptionId, subscriptionEndPoint, action) {
        var promise = $pushcrew.Deferred();
        subscriberId = subscriberId || '';
        // syncSubcription is getting called from a lot of places with different values of subscriberId, not
        // possible to manage all of them seperately for now, will override it here with the uuid cookie
        subscriberId = globalConfig.internalConfig.uuid;
        var data = 'hash=' + pushcrewConfig.hash + '&subscription=' + subscription + '&subscriberId=' + subscriberId + '&previousSubscriptionId=' + previousSubscriptionId + '&subscriptionId=' + subscriptionId + '&subscriptionEndPoint=' + subscriptionEndPoint + '&action=' + action + '&origin=' + pushcrewConfig.origin + '&firefoxEncryptionKey=' + encodeURIComponent(firefoxEncryptionKey) + '&browserType=' + globalConfig.pushAPI.utilities.detectBrowserType() + '&userLanguage=' + globalConfig.pushAPI.utilities.detectUserLanguage() + '&userTimezoneOffset=' + globalConfig.pushAPI.utilities.detectSubscriberTimezoneOffset() + '&userTimezone=' + globalConfig.pushAPI.utilities.detectSubscriberTimezoneName();
        var vapidKey = '';
        if (!globalConfig.internalConfig.isSafari) {
          vapidKey = getVapidKeyForSubscriberInsert(action);
          if (vapidKey && !globalConfig.internalConfig.manifestNeeded) {
            data += '&vapidPublicKey=' + encodeURIComponent(vapidKey);
            storageUtil.addToStorage('pshcrw_v_k', vapidKey, AppConstants.Storage.COOKIE.LIFETIME);
          }
        } else {
          data += '&websitePushId=' + pushcrewConfig.safariWebsitePushId;
        }
        if (action === 'insert') {
          data += '&subscriptionDomainUrl=' + globalConfig.pushAPI.utilities.detectDomain();
          data += '&serviceWorkerPath=' + (globalConfig.pushAPI.utilities.detectServiceWorkerPath() || '');
          if (this.findGetParameter('pushCrewReferralPage') !== null) {
            data += '&subscriptionPageUrl=' + this.findGetParameter('pushCrewReferralPage');
          } else {
            data += '&subscriptionPageUrl=' + globalConfig.pushAPI.utilities.detectLandingPage();
          }
          if (this.findGetParameter('shouldTrackData') !== null) {
            data += '&pageClickTrackingPermission=' + this.findGetParameter('shouldTrackData');
          } else {
            var consent = storageUtil.getFromStorage('wingify_donot_track_actions') || 0;
            data += '&pageClickTrackingPermission=' + (1 - parseInt(consent, 10));
          }
        }
        if ((action === 'insert' || action === 'insert-failed' || action === 'update') && (globalConfig.pushAPI.utilities.detectBrowserType() === 'chrome' || globalConfig.pushAPI.utilities.detectBrowserType() === 'opera') && (!vapidKey || globalConfig.internalConfig.manifestNeeded)) {
          var storedGcmId = storageUtil.getFromStorage('wingify_push_gcm_id');
          if (action === 'insert-failed' && storedGcmId) {
            data += '&gcmSenderId=' + storedGcmId;
            globalConfig.pushAPI.manageSubscription.callSyncSubscription(data, promise, action, subscriptionId, subscriptionEndPoint);
          } else {
            $pushcrew.ajax({
              url: pushcrewConfig.manifestUrl + '?v=' + new Date().getTime(),
              type: 'GET',
              dataType: 'json',
              timeout: 2000,
              success: function (manifestjson) {
                if (manifestjson !== null && typeof manifestjson === 'object') {
                  if (manifestjson.gcm_sender_id && !isNaN(manifestjson.gcm_sender_id)) {
                    data += '&gcmSenderId=' + manifestjson.gcm_sender_id;
                    globalConfig.internalConfig.gcmSenderId = manifestjson.gcm_sender_id;
                  }
                }
                globalConfig.pushAPI.manageSubscription.callSyncSubscription(data, promise, action, subscriptionId, subscriptionEndPoint);
              },
              error: function (error) {
                globalConfig.pushAPI.manageSubscription.callSyncSubscription(data, promise, action, subscriptionId, subscriptionEndPoint);
              }
            });
          }
        } else {
          globalConfig.pushAPI.manageSubscription.callSyncSubscription(data, promise, action, subscriptionId, subscriptionEndPoint);
        }
        return promise;
      },
      /*
       * Updates subscription details for existing users.
       * Param ('object') : subscriptionDetails : All the details as send by GCM for the subscriber.
       */
      updateSubscription: function (subscriptionDetails) {
        var promise = $pushcrew.Deferred();
        // get storage details for subscription data.
        var wingifyPushDbStatus = storageUtil.getFromStorage('wingify_push_db_status'), wingifyPushSubscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id'), wingifyPushSubscriptionId = storageUtil.getFromStorage('wingify_push_subscription_id'), wingifyPushSubscriptionEndpoint = storageUtil.getFromStorage('wingify_push_subscription_endpoint'), wingifyPushSubsriberLanguage = storageUtil.getFromStorage('wingify_push_subscriber_lang');
        var subscription, subscriptionString;
        if (globalConfig.internalConfig.isSafari) {
          subscription = {};
          subscription.endpoint = '';
          subscription.subscriptionId = subscriptionDetails.deviceToken;
          subscriptionString = '';
        } else {
          subscription = this.splitSubscriptionParameters(subscriptionDetails);
          subscriptionString = JSON.stringify(subscriptionDetails);
        }
        //if cookie denotes subscription failed to sync with our server
        if (wingifyPushDbStatus === 'false') {
          // if tracking cookie is not present, try to insert again
          this.syncSubscription(subscriptionString, wingifyPushSubscriberId, wingifyPushSubscriptionId, subscription.subscriptionId, subscription.endpoint, 'insert-failed').then(function (response) {
            promise.resolve(response);
          });
        }  // if cookie denotes subscription was updated to our server successfully
           // db status = empty or true
        else {
          if (wingifyPushSubscriptionId === subscription.subscriptionId && wingifyPushSubscriberId === '') {
            storageUtil.addToStorage('wingify_push_subscriber_id', globalConfig.internalConfig.uuid, AppConstants.Storage.COOKIE.LIFETIME);
            this.syncSubscription(subscriptionString, '', '', subscription.subscriptionId, subscription.endpoint, 'insert').then(promise.resolve.bind(undefined, globalConfig.internalConfig.uuid));
          }
          // Keep server in sync with the latest subscriptionId
          // if tracking cookie is present on page load, just to sync updated subscription parameters
          // update if subscription parameters have updated
          if (wingifyPushSubscriptionId !== subscription.subscriptionId || wingifyPushSubscriptionEndpoint !== subscription.endpoint) {
            // if cookie subscription id not present. update on server if subscriber id found and subscription id not match
            if (wingifyPushSubscriptionId === '') {
              this.syncSubscription(subscriptionString, wingifyPushSubscriberId, '', subscription.subscriptionId, subscription.endpoint, 'update').then(function (response) {
                promise.resolve(response);
              });
            } else {
              this.syncSubscription(subscriptionString, wingifyPushSubscriberId, wingifyPushSubscriptionId, subscription.subscriptionId, subscription.endpoint, 'update-google-registration-id').then(function (response) {
                promise.resolve(response);
              });
            }
          }  // Sync user data (timezone, language)
          else if (wingifyPushSubsriberLanguage !== globalConfig.pushAPI.utilities.detectUserLanguage()) {
            this.syncSubscription(subscriptionString, wingifyPushSubscriberId, '', subscription.subscriptionId, subscription.endpoint, 'http-sync').then(function (response) {
              promise.resolve(response);
            });
          } else {
            promise.resolve('already-updated');
          }
        }
        return promise;
      },
      /*
       * Splits the paramters returned by GCM into subscriptionEndpoint and subscriptiond ID
       * Required from Chrome 44 onwards.
       * Param ('object') : subscriptionDetails : All the details as send by GCM for the subscriber.
       */
      splitSubscriptionParameters: function (subscriptionDetails) {
        if (subscriptionDetails !== 'error' && subscriptionDetails !== 'denied' && subscriptionDetails !== 'retryWithGcmKey') {
          if (globalConfig.internalConfig.isSafari) {
            return {
              subscriptionId: subscriptionDetails.deviceToken,
              endpoint: ''
            };
          } else if (globalConfig.pushAPI.pushSubscription.browserType === 'edge' && globalConfig.pushAPI.utilities.detectDeviceType() === 'desktop') {
            var subscription = subscriptionDetails.endpoint.split('?token=');
            return {
              subscriptionId: subscription[1],
              endpoint: subscription[0]
            };
          } else {
            var endpointURL = '', endpoint = '';
            var offset = subscriptionDetails.endpoint.lastIndexOf('/');
            endpointURL = subscriptionDetails.endpoint.substring(0, offset);
            endpoint = subscriptionDetails.endpoint;
            if (endpoint.indexOf(endpointURL + '/') === 0) {
              var updatedSubscription = {};
              updatedSubscription.subscriptionId = endpoint.replace(endpointURL + '/', '');
              updatedSubscription.endpoint = endpointURL;
              //For firefox, need to pass encryption key as well
              if (globalConfig.pushAPI.pushSubscription.browserType === 'firefox') {
                firefoxEncryptionKey = btoa(String.fromCharCode.apply(null, new Uint8Array(subscriptionDetails.getKey('p256dh'))));
              }
              return updatedSubscription;
            }
          }
        }
        return subscriptionDetails;
      },
      /*
       * Updates details of a new subscriber in DB and sends them welcome notification.
       * Param ('object') : subscriptionDetails : All the details as send by GCM for the subscriber.
       */
      setNewPushSubscriber: function (subscriptionDetails) {
        var promise = $pushcrew.Deferred();
        var response = this.splitSubscriptionParameters(subscriptionDetails);
        if (response !== 'error' && response !== 'denied' && response !== 'retryWithGcmKey') {
          var stringifiedSubscription = JSON.stringify(subscriptionDetails);
          this.syncSubscription(stringifiedSubscription, '', '', response.subscriptionId, response.endpoint, 'insert').then(function (value) {
            storageUtil.addToStorage('wingify_push_subscription_status', 'subscribed', AppConstants.Storage.COOKIE.LIFETIME);
            promise.resolve(value);
            IndexedDbOperations.storeSubscriptionInIndexedDb(stringifiedSubscription);
          });
        } else {
          promise.reject(true);
        }
        return promise;
      },
      /*
       * Unsubscibes the user if selected from the UI i.e : button on the page itself.
       */
      unsubscribeFromPushNotification: function () {
        var promise = globalConfig.pushAPI.pushSubscription.unsubscribe();
        var unsubscribeCompleted = $pushcrew.Deferred();
        promise.then(function (response) {
          if (response !== 'error') {
            var subscriptionDetails = {}, wingifyPushSubscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id'), wingifyPushSubscriptionId = storageUtil.getFromStorage('wingify_push_subscription_id');
            if (!globalConfig.internalConfig.isSafari) {
              subscriptionDetails = globalConfig.pushAPI.manageSubscription.splitSubscriptionParameters(response);
            } else {
              subscriptionDetails.endpoint = '';
              subscriptionDetails.subscriptionId = response;
            }
            globalConfig.pushAPI.manageSubscription.syncSubscription('', wingifyPushSubscriberId, wingifyPushSubscriptionId, subscriptionDetails.subscriptionId, subscriptionDetails.endpoint, 'unsubscribe-ui').then(function (value) {
              unsubscribeCompleted.resolve(value);
              IndexedDbOperations.removeSubscriptionFromIndexedDb();
            });
          } else {
            unsubscribeCompleted.resolve('already-unsubscribed');
            IndexedDbOperations.removeSubscriptionFromIndexedDb();
          }
        });
        return unsubscribeCompleted;
      },
      /*
       * unsubscribers users that have blocked the notification in the browser settings.
       */
      syncUnsubscribedUsers: function () {
        var promise = $pushcrew.Deferred();
        var wingifyPushSubscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id'), wingifyPushSubscriptionId = storageUtil.getFromStorage('wingify_push_subscription_id');
        globalConfig.pushAPI.pushSubscription.initialiseState();
        if (globalConfig.pushAPI.pushSubscription.isUserSubscriptionDenied && (wingifyPushSubscriberId !== '' || wingifyPushSubscriptionId !== '')) {
          this.syncSubscription('', wingifyPushSubscriberId, '', wingifyPushSubscriptionId, '', 'unsubscribe-native').then(function (value) {
            // -1 subscriber id means the permission was blocked when we displayed the native browser opt-in
            if (HTTPS && globalConfig.pushcrew.subscriberId === -1) {
              // Not using 'blocked' here because it is marked in http and is being used to check migration to https
              storageUtil.addToStorage('wingify_push_subscription_status', 'denied', AppConstants.Storage.COOKIE.LIFETIME);
            }
            promise.resolve(value);
            IndexedDbOperations.removeSubscriptionFromIndexedDb();
          });
        } else if (globalConfig._pushcrew.isPermissionDefault() && (wingifyPushSubscriberId !== '' || wingifyPushSubscriptionId !== '')) {
          this.syncSubscription('', wingifyPushSubscriberId, '', wingifyPushSubscriptionId, '', 'unsubscribe-native').then(function (value) {
            promise.resolve(value);
            IndexedDbOperations.removeSubscriptionFromIndexedDb();
          });
        } else {
          promise.resolve('default');
        }
        return promise;
      },
      isHttpSite: function () {
        return location.protocol !== 'https:' && location.host.indexOf('localhost') !== 0 && location.host.indexOf('127.0.0.1') !== 0;
      },
      findGetParameter: function (parameterName) {
        var result = null, tmp = [];
        location.search.substr(1).split('&').forEach(function (item) {
          tmp = item.split('=');
          if (tmp[0] === parameterName) {
            result = tmp[1];
          }
        });
        return result;
      },
      sendCustomTags: function () {
        if (customTags && Object.keys(customTags).length > 0) {
          manageSubscriptionAPI.addToSegment(null, JSON.stringify(customTags), true).then(function (status) {
            if (status) {
              customTags = {};
            }
          });
        }
      }
    };
    function debounce(callback, limit) {
      var wait = false, timer;
      return function () {
        if (wait) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(function () {
          callback.call();
        }, limit);
        wait = true;
      };
    }
    var debouncedSendCustomTags = debounce(manageSubscriptionAPI.sendCustomTags, 50);
    window.PC.tag = function (name, value) {
      customTags = customTags || {};
      customTags[name] = value;
      debouncedSendCustomTags();
    };
    window.PC.evalSegments = function () {
      globalConfig._pushcrew.changeSegmentationStrings();
      var segments = [], clickSegments = [], shopifySegments = [], retryClickSegments = [];
      try {
        segments = pushcrewConfig.segmentations instanceof Array ? pushcrewConfig.segmentations : JSON.parse(pushcrewConfig.segmentations);
      } catch (e) {
        segments = [];
      }
      if (segments.length) {
        manageSubscriptionAPI.evalSegments(segments, 'normal');
      }
      var trackingStatusCookie = storageUtil.getFromStorage('wingify_donot_track_actions');
      if (trackingStatusCookie == 1) {
        return true;
      } else if (trackingStatusCookie !== '' && trackingStatusCookie == 0) {
        executionAfterGettingTrackingPermisson();
      } else {
        var wingifyPushSubscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id'), browserType = globalConfig.pushAPI.utilities.detectBrowserType(), subscriberInfo = {
            customerHash: pushcrewConfig.hash,
            subscriberId: wingifyPushSubscriberId,
            browser: browserType
          };
        $pushcrew.ajax({
          url: syncServerURL + '/getSubscriptionClickTrackingPermissionDetails.php',
          type: 'GET',
          data: subscriberInfo,
          dataType: 'json',
          crossDomain: true,
          error: function () {
            window._pushcrewDebuggingQueue.push('getSubscriptionClickTrackingPermission Failed');
          },
          success: function (response) {
            if (response.status === 'success') {
              storageUtil.addToStorage('wingify_donot_track_actions', response.pageClickTrackingPermission == 0 ? 1 : 0);
              window._pushcrewDebuggingQueue.push('getSubscriptionClickTrackingPermission succeed');
              if (response.pageClickTrackingPermission) {
                executionAfterGettingTrackingPermisson();
              } else {
                return true;
              }
            }
          }
        });
      }
      function executionAfterGettingTrackingPermisson() {
        try {
          clickSegments = pushcrewConfig.clickSegmentations instanceof Array ? pushcrewConfig.clickSegmentations : JSON.parse(pushcrewConfig.clickSegmentations);
        } catch (e) {
          clickSegments = [];
        }
        try {
          shopifySegments = pushcrewConfig.shopifySegmentations instanceof Array ? pushcrewConfig.shopifySegmentations : JSON.parse(pushcrewConfig.shopifySegmentations);
        } catch (e) {
          shopifySegments = [];
        }
        try {
          retryClickSegments = Object.values(storageUtil.getAllStorageItemsWithMatchRegex('wingifyRetrySegment-')) || [];
        } catch (e) {
          retryClickSegments = [];
        }
        if (retryClickSegments.length) {
          manageSubscriptionAPI.evalRetryClickSegments(retryClickSegments, 'click');
        }
        var dynSegments = [];
        if (clickSegments instanceof Array && clickSegments.length > 0) {
          dynSegments = dynSegments.concat(clickSegments);
        }
        if (pushcrewConfig.isShopifyConnectedAccount && shopifySegments instanceof Array && shopifySegments.length > 0) {
          dynSegments = dynSegments.concat(shopifySegments);
        }
        if (dynSegments.length > 0) {
          ecommerceEvents.addTriggers(dynSegments);
        }
      }
    };
    window.PC.evalClickSegments = function () {
      var clickSegments = [];
      try {
        clickSegments = pushcrewConfig.clickSegmentations instanceof Array ? pushcrewConfig.clickSegmentations : JSON.parse(pushcrewConfig.clickSegmentations);
      } catch (e) {
        clickSegments = [];
      }
      manageSubscriptionAPI.evalSegments(clickSegments, 'click');
    };
    window.PC.evalShopifySegments = function () {
      if (!pushcrewConfig.isShopifyConnectedAccount) {
        return;
      }
      var shopifySegments = [];
      try {
        shopifySegments = pushcrewConfig.shopifySegmentations instanceof Array ? pushcrewConfig.shopifySegmentations : JSON.parse(pushcrewConfig.shopifySegmentations);
      } catch (e) {
        shopifySegments = [];
      }
      manageSubscriptionAPI.evalSegments(shopifySegments);
    };
    function getVapidKeyForSubscriberInsert(action) {
      vapidKeyInStorage = storageUtil.getFromStorage('pshcrw_v_k') || false;
      if (action === 'insert-failed' && vapidKeyInStorage) {
        return vapidKeyInStorage;
      } else if (action === 'insert' && pushcrewConfig.vapidPublicKey) {
        return pushcrewConfig.vapidPublicKey;
      } else {
        return false;
      }
    }
    return manageSubscriptionAPI;
  }();
  return { manageSubscription: globalConfig.pushAPI.manageSubscription };
}(jquery, globalConfig, storageUtil, pushSubscription, ecommerceEvents, deletePcBrowserStorage, IndexedDbOperations, detectBrowser, AppConstants, pcUtils);
domainMigration = function ($pushcrew, globalConfig, storageUtil, AppConstants) {
  pushcrewConfig.subscriptionDetails = {};
  var swPath = globalConfig.pushAPI.utilities.detectServiceWorkerPath();
  function domainMigration() {
    var migrationDone = $pushcrew.Deferred();
    if (!window._pc.oldDomain || globalConfig.internalConfig.isSafari) {
      migrationDone.resolve();
    } else {
      if (storageUtil.getFromStorage('pshcrw_sns') === 'true') {
        migrationDone.resolve();
      } else {
        createOldDomainIframe();
        window.addEventListener('message', function (e) {
          if (getHostName(e.origin) !== getHostName(window._pc.oldDomain) && e.data.action !== 'pcOldDomainMigration') {
            return false;
          } else {
            //@todo resolve as promise argument
            pushcrewConfig.subscriptionDetails = JSON.parse(e.data.subscription);
            pushcrewConfig.permission = e.data.permission;
            if (!pushcrewConfig.subscriptionDetails) {
              storageUtil.addToStorage('pshcrw_sns', true, AppConstants.Storage.COOKIE.LIFETIME);
              migrationDone.resolve();
            } else {
              if (storageUtil.getFromStorage('pshcrw_sns') === '') {
                addCookiesToNewDomain(e);
                storageUtil.addToStorage('pshcrw_sns', false, AppConstants.Storage.COOKIE.LIFETIME);
              }
              addGetKeyMethod();
              migrationDone.resolve();
            }
          }
        });
      }
    }
    return migrationDone;
  }
  function getHostName(data) {
    var a = document.createElement('a');
    a.href = data;
    return a.hostname;
  }
  function createOldDomainIframe() {
    (function tryAddingIframe() {
      if (!$pushcrew('body').length) {
        setTimeout(tryAddingIframe, 50);
        return;
      }
      $pushcrew('body').append('<iframe src="' + stripTrailingSlash(window._pc.oldDomain) + '/pushcrew-helper.html?swPath=' + encodeURIComponent(swPath) + '" id="pushcrew-old-migration-domain" style="display:none !important;width:0px !important;height:0px !important;"></iframe>');
    }());
  }
  function stripTrailingSlash(site) {
    return site.replace(/\/$/, '');
  }
  function addCookiesToNewDomain(e) {
    var oldDomainCookies = storageUtil.getAllCookiesWithMatchRegex('wingify', e.data);
    $pushcrew.extend(oldDomainCookies, storageUtil.getAllCookiesWithMatchRegex('pshcrw_', e.data));
    addGetItemMethod(e.data.localStorage);
    var oldDomainLocalStorage = storageUtil.getAllStorageItemsWithMatchRegex('wingify', e.data);
    $pushcrew.extend(oldDomainLocalStorage, storageUtil.getAllStorageItemsWithMatchRegex('pshcrw_', e.data));
    delete oldDomainCookies['pshcrw_sns'];
    delete oldDomainLocalStorage['pshcrw_sns'];
    var storageToSet = resolveCookiesAndStorageAndAdd(oldDomainCookies, oldDomainLocalStorage);
  }
  function addGetItemMethod(tempLocalStorage) {
    tempLocalStorage.getItem = function (key) {
      return this[key] || '';
    };
  }
  function resolveCookiesAndStorageAndAdd(oldCookies, oldLocalStorage) {
    for (var prop in oldLocalStorage) {
      if (oldLocalStorage.hasOwnProperty(prop)) {
        if (oldLocalStorage[prop]) {
          storageUtil.addToStorage(prop, oldLocalStorage[prop], AppConstants.Storage.COOKIE.LIFETIME);
          if (oldCookies[prop]) {
            delete oldCookies[prop];
          }
        }
      }
    }
    for (var prop in oldCookies) {
      if (oldCookies.hasOwnProperty(prop)) {
        if (oldCookies[prop]) {
          storageUtil.addToStorage(prop, oldCookies[prop], AppConstants.Storage.COOKIE.LIFETIME);
        }
      }
    }
  }
  function addGetKeyMethod() {
    pushcrewConfig.subscriptionDetails.getKey = function (keyName) {
      var keyString = pushcrewConfig.subscriptionDetails.keys && pushcrewConfig.subscriptionDetails.keys[keyName] || '';
      if (!keyString) {
        return null;
      } else {
        return stringToArrayBuffer(keyString);
      }
    };
  }
  function stringToArrayBuffer(str) {
    var arrayBuffer = new ArrayBuffer(str.length * 2);
    var bufferView = new Uint16Array(arrayBuffer);
    for (var i = 0; i < str.length; i++) {
      bufferView[i] = str.charCodeAt(i);
    }
    return arrayBuffer;
  }
  return domainMigration;
}(customizejQuery, globalConfig, storageUtil, AppConstants);
sideButton = function (storageUtil, $pushcrew, AppConstants, detectBrowser) {
  return {
    createSideButton: function () {
      //HACK to animate the side button left->right.
      window._pushcrewDebuggingQueue.push('HTTP createSideButton function execution begin');
      var html, classForSidebutton, $body;
      html = '';
      $body = $pushcrew('body');
      if (window.innerWidth <= 500 && detectBrowser.isMobile()) {
        if (pushcrewConfig.style.isMobileEnabled) {
          html = '<div class="pushcrew-side-button-mobile pushcrew-' + pushcrewConfig.style.mobileChickletPosition + '"><div class="customize_chicklet_text_preview">' + pushcrewConfig.style.chicketText + '</div></div>';
          classForSidebutton = '.pushcrew-side-button-mobile';
        }
      } else {
        html = '<div class="pushcrew-side-button pushcrew-chicklet-position-' + pushcrewConfig.style.chickletPosition + '">';
        /* if (pushcrewConfig.pcBranding == 1) {
            html += '<svg width="14px" height="12px" viewBox="0 0 14 12" version="1.1">' +
                '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
                '<g transform="translate(-57.000000, -45.000000)">' +
                '<g transform="translate(57.000000, 46.000000)">' +
                '<path d="M0.508701521,0.740161403 L12.8787014,0.542093186 L12.8787014,9.93945338 L4.88268796,9.93945338" stroke="#FFFFFF" stroke-width="2"></path>' +
                '<rect fill="#FFFFFF" x="1" y="3" width="3" height="1"></rect>' +
                '<rect fill="#FFFFFF" x="3" y="5" width="3" height="1"></rect>' +
                '<rect fill="#FFFFFF" x="5" y="7" width="3" height="1"></rect>' +
                '</g>' +
                '</g>' +
                '</g>' +
                '</svg>';
        } */
        html += '<div>' + pushcrewConfig.style.chicketText + '</div>' + '</div>';
        classForSidebutton = '.pushcrew-side-button';
      }
      $body.append(html);
      if (pushcrewConfig.style.chickletBgColor) {
        var sideButtonStyle = 'background-color: ' + pushcrewConfig.style.chickletBgColor + ' !important; ';
        if (window._pushcrew_http_font) {
          sideButtonStyle += 'font-family: ' + window._pushcrew_http_font + ' !important; ';
        }
        $pushcrew(classForSidebutton).attr('style', sideButtonStyle);
      }
      if (pushcrewConfig.style.chickletTextColor) {
        $pushcrew(classForSidebutton)[0].style.setProperty('color', pushcrewConfig.style.chickletTextColor, 'important');
        $pushcrew('.pushcrew-side-button svg').find('rect').css('fill', pushcrewConfig.style.chickletTextColor);
        $pushcrew('.pushcrew-side-button svg').find('path').css('stroke', pushcrewConfig.style.chickletTextColor);
      }
      if (classForSidebutton !== '.pushcrew-side-button-mobile') {
        if (pushcrewConfig.style.chickletPosition === 'tr' || pushcrewConfig.style.chickletPosition === 'cr' || pushcrewConfig.style.chickletPosition === 'br') {
          $pushcrew(classForSidebutton).animate({ right: '-4px' }, 500);
        } else if (pushcrewConfig.style.chickletPosition === 'tl' || pushcrewConfig.style.chickletPosition === 'cl' || pushcrewConfig.style.chickletPosition === 'bl') {
          $pushcrew(classForSidebutton).animate({ left: '-4px' }, 500);
        }
      }
      window._pushcrewDebuggingQueue.push('HTTP createSideButton function execution complete');
    },
    closeSideButton: function () {
      window._pushcrewDebuggingQueue.push('HTTP closeSideButton function execution begin');
      var classForSidebutton;
      if (window.innerWidth <= 500 && detectBrowser.isMobile()) {
        classForSidebutton = '.pushcrew-side-button-mobile';
      } else {
        classForSidebutton = '.pushcrew-side-button';
      }
      if (classForSidebutton === '.pushcrew-side-button-mobile') {
        if (pushcrewConfig.style.chickletPosition === 'mobile-chicklet-bottom') {
          $pushcrew('.pushcrew-side-button-mobile').animate({ bottom: '-100px' }, 500, function () {
            $pushcrew(this).remove();
            storageUtil.addToStorage('wingify_do_not_show_chicklet', 'true', AppConstants.Storage.COOKIE.LIFETIME);
          });
        } else if (pushcrewConfig.style.mobileChickletPosition == 'mobile-chicklet-right') {
          $pushcrew(classForSidebutton).animate({ right: '-100px' }, 500, function () {
            $pushcrew(this).remove();
            storageUtil.addToStorage('wingify_do_not_show_chicklet', 'true', AppConstants.Storage.COOKIE.LIFETIME);
          });
        } else if (pushcrewConfig.style.mobileChickletPosition == 'mobile-chicklet-left') {
          $pushcrew(classForSidebutton).animate({ left: '-100px' }, 500, function () {
            $pushcrew(this).remove();
            storageUtil.addToStorage('wingify_do_not_show_chicklet', 'true', AppConstants.Storage.COOKIE.LIFETIME);
          });
        }
      } else {
        if (pushcrewConfig.style.chickletPosition === 'tr' || pushcrewConfig.style.chickletPosition === 'cr' || pushcrewConfig.style.chickletPosition === 'br') {
          $pushcrew(classForSidebutton).animate({ right: '-100px' }, 500, function () {
            $pushcrew(this).remove();
            storageUtil.addToStorage('wingify_do_not_show_chicklet', 'true', AppConstants.Storage.COOKIE.LIFETIME);
          });
        } else if (pushcrewConfig.style.chickletPosition === 'tl' || pushcrewConfig.style.chickletPosition === 'cl' || pushcrewConfig.style.chickletPosition === 'bl') {
          $pushcrew(classForSidebutton).animate({ left: '-100px' }, 500, function () {
            $pushcrew(this).remove();
            storageUtil.addToStorage('wingify_do_not_show_chicklet', 'true', AppConstants.Storage.COOKIE.LIFETIME);
          });
        }
      }
      window._pushcrewDebuggingQueue.push('HTTP closeSideButton function execution complete');
    }
  };
}(storageUtil, customizejQuery, AppConstants, detectBrowser);
notificationPopupData = function () {
  var notificationPopupData, optInTitle = 'The website ' + pushcrewConfig.companyName + ' would like to send you push notifications.', optInSubtitle = 'Notifications can be turned off anytime from browser settings.';
  var chrome = {
    title: pushcrewConfig.style.chromeTitle || optInTitle,
    message: pushcrewConfig.style.chromeSubtitle || optInSubtitle
  };
  var safari = {
    title: pushcrewConfig.style.safariTitle || optInTitle,
    message: pushcrewConfig.style.safariSubtitle || optInSubtitle,
    iconURL: pushcrewConfig.style.iconUrl,
    mobileTitle: pushcrewConfig.style.safariMobileTitle || optInTitle
  };
  // Notification Popup Data.
  if (pushcrewConfig.style.type === 'chrome') {
    notificationPopupData = {
      'title': chrome.title,
      'message': chrome.message
    };
  } else {
    notificationPopupData = {
      'title': safari.title,
      'message': safari.message,
      'iconURL': safari.iconURL,
      'mobileTitle': safari.mobileTitle
    };
  }
  return notificationPopupData;
}();
defaultTexts = {
  ALLOW_BUTTON_TEXT: pushcrewConfig.style.allowText || 'Allow',
  BLOCK_BUTTON_TEXT: pushcrewConfig.style.dontAllowText || 'Don\'t Allow',
  DEFAULT_TRACKING_TEXT: 'Allow anonymous data tracking',
  UTM_STRING: '?utm_source=' + pushcrewConfig.companyName + '&utm_medium=referral&utm_campaign=Powered-by-' + pcUtils.getUtmParam()
};
mobileDom = function (defaultTexts, notificationPopupData, pcUtils) {
  function mobileDom() {
    var mobileTitle = notificationPopupData.mobileTitle || notificationPopupData.title;
    var mobile = '<div class="pushcrew-mobile-box">';
    mobile += '            <div class="pushcrew-logo-text">    ';
    mobile += '                <img src="' + notificationPopupData.iconURL + '" alt="" height="40px" width="40px">';
    mobile += '                <span>' + mobileTitle + '</span>';
    mobile += '            </div>';
    if (pushcrewConfig.pageClickTrackingConcent == 1 && pushcrewConfig.defaultPageClickTrackingPermission == 1) {
      mobile += '<div class="col-xs-12 tracking_bar_mobile"><span class="pl10 tracking_bar_mobile_text">' + (pushcrewConfig.trackingBarText || defaultTexts.DEFAULT_TRACKING_TEXT) + '</span><div class="toggle_bar_block"><label class="switch"><input type="checkbox" id="tracking_bar_checkbox" checked/><span class="slider round"></span></label></div></div>';
    } else if (pushcrewConfig.pageClickTrackingConcent == 1 && pushcrewConfig.defaultPageClickTrackingPermission == 0) {
      mobile += '<div class="col-xs-12 tracking_bar_mobile"><span class="pl10 tracking_bar_mobile_text">' + (pushcrewConfig.trackingBarText || defaultTexts.DEFAULT_TRACKING_TEXT) + '</span><div class="toggle_bar_block"><label class="switch"><input type="checkbox" id="tracking_bar_checkbox" /><span class="slider round"></span></label></div></div>';
    }
    mobile += '            <div class="pushcrew-buttons-panel">';
    mobile += '                <button id="pushcrew-mobile_dontallow_button" class="pushcrew-mobile-button-outline">' + defaultTexts.BLOCK_BUTTON_TEXT + '</button>';
    mobile += '                <button id="pushcrew-mobile_allow_button" class="pushcrew-mobile-button-fill">' + defaultTexts.ALLOW_BUTTON_TEXT + '</button>';
    mobile += '            </div>';
    if (pushcrewConfig.pcBranding === 1) {
      mobile += '            <div class="pushcrew-branding-mobile">';
      mobile += '                <span>';
      mobile += '                    <a href="https://vwo.com/engage/' + defaultTexts.UTM_STRING + '" target="_blank" style="text-decoration: none;color: black;">';
      mobile += '                        Powered by ';
      mobile += '                   </a>';
      mobile += '                     <a href="https://vwo.com/engage/' + defaultTexts.UTM_STRING + '" target="_blank" style="text-decoration: none;" aria-label="VWO">';
      mobile += '                         <img alt="VWO" style="width: 44px !important; height: 100% !important" src="' + pcUtils.getBrandingImage() + '">';
      mobile += '                     </a> ';
      mobile += '                </span>';
      mobile += '            </div>';
    }
    mobile += '        </div>';
    return mobile;
  }
  return mobileDom;
}(defaultTexts, notificationPopupData, pcUtils);
desktopDom = function (defaultTexts, notificationPopupData, pcUtils) {
  function desktopDom() {
    var modal = '<div class="pushcrew-chrome-style-notification pushcrew-chrome-style-notification-safari"><div class="pushcrew-safari-notification-inner-wrapper"><div class="pushcrew-notification-image-wrapper-safari"><img alt="' + pushcrewConfig.companyName + '" src="' + notificationPopupData.iconURL + '" /></div><div class="pushcrew-text-wrapper-safari"><span class="pushcrew-notification-title-safari">' + notificationPopupData.title + '</span><p class="pushcrew-notification-message-safari">' + notificationPopupData.message + '</p></div>';
    if (pushcrewConfig.pageClickTrackingConcent == 1 && pushcrewConfig.defaultPageClickTrackingPermission == 1) {
      modal += '<p class="tracking_preview_http"><input type="checkbox" id="tracking_bar_checkbox" class="mr5" checked /><span class="tracking_preview_http_text">' + (pushcrewConfig.trackingBarText || defaultTexts.DEFAULT_TRACKING_TEXT) + '</span></p>';
    } else if (pushcrewConfig.pageClickTrackingConcent == 1) {
      modal += '<p class="tracking_preview_http"><input type="checkbox" id="tracking_bar_checkbox" class="mr5" /><span class="tracking_preview_http_text">' + (pushcrewConfig.trackingBarText || defaultTexts.DEFAULT_TRACKING_TEXT) + '</span></p>';
    }
    modal += '<div style="clear: both;">';
    if (pushcrewConfig.pcBranding === 1) {
      modal += '<div class="pushcrew-modal-branding">\n    <span>\n        <a href="https://vwo.com/engage/' + defaultTexts.UTM_STRING + '" \n        target="_blank">Powered by </a>\n        <a href="https://vwo.com/engage/' + defaultTexts.UTM_STRING + '" aria-label="VWO"\n    target="_blank" \n    style="text-decoration: none;">\n        <img style="width: 40px !important;" alt="VWO" src="' + pcUtils.getBrandingImage() + '"/>\n    </a>\n    </span>\n    </div>';
    }
    modal += '<div class="pushcrew-button-wrapper"><button class="pushcrew-chrome-style-notification-btn pushcrew-btn-close">' + defaultTexts.BLOCK_BUTTON_TEXT + '</button><button class="pushcrew-chrome-style-notification-btn pushcrew-btn-allow">' + defaultTexts.ALLOW_BUTTON_TEXT + '</button></div><div style="clear:both"></div></div></div></div>';
    return modal;
  }
  return desktopDom;
}(defaultTexts, notificationPopupData, pcUtils);
notificationPopup = function (notificationPopupData, mobileDom, desktopDom, $pushcrew, detectBrowser) {
  return {
    close: function () {
      window._pushcrewDebuggingQueue.push('closeNotificationPopup function execution begin');
      $pushcrew('.pushcrew-chrome-style-notification, .pushcrew-mobile-box').fadeOut(500, function () {
        $pushcrew(this).remove();
      });
      window._pushcrewDebuggingQueue.push('closeNotificationPopup function execution complete');
    },
    getOptInHTML: function () {
      window._pushcrewDebuggingQueue.push('notificationPopup function execution begin');
      if (pushcrewConfig.style.type === 'chrome') {
        window._pushcrewDebuggingQueue.push('HTTP notificationPopup function execution complete');
        return '<div class="pushcrew-chrome-style-notification pushcrew-chrome-style-notification-chrome"><div class="pushcrew-hide-arrow"></div><i class="pushcrew-chrome-style-notification-close pushcrew-btn-close">&times</i><div class="pushcrew-chrome-notification-inner-wrapper"><div class="pushcrew-text-wrapper-chrome"><div class="pushcrew-notification-title-chrome">' + notificationPopupData.title + '</div><div style="margin-left:7px"> <img src="https://pushcrew.com/http-v4/images/bell.png" style="width: 14px; margin-bottom: -2px;" /><span class="pushcrew-notification-message-chrome">' + notificationPopupData.message + '</span></div><div class="pushcrew-button-wrapper"><button class="pushcrew-chrome-style-notification-btn pushcrew-btn-allow">Allow</button></div></div></div>';
      } else {
        if (window.innerWidth <= 500 && detectBrowser.isMobile()) {
          if (!pushcrewConfig.style.isMobileEnabled) {
            return '';
          } else {
            return mobileDom();
          }
        } else {
          return desktopDom();
        }
      }
    },
    userFeedback: 'Did you find the push notification useful <button class="pushcrew-notification-bar-btn pushcrew-btn-yes">Yes</button><button class="pushcrew-notification-bar-btn pushcrew-btn-no">No</button>',
    unsubscribeNotification: 'You can unsubscribe from notifications <button class="pushcrew-notification-bar-btn pushcrew-btn-unsubscribe">Unsubscribe</button>'
  };
}(notificationPopupData, mobileDom, desktopDom, customizejQuery, detectBrowser);
branding = function ($pushcrew, globalConfig, deletePcBrowserStorage, storageUtil, thirdPartyIntegrations, SupportedEvents, pcUtils, AppConstants, detectBrowser) {
  var manageSubscription = globalConfig.pushAPI.manageSubscription;
  // Shows the chicklet as Powered by Pushcrew for branding for accounts whose `pcBranding` is set to 1
  function branding(type) {
    window._pushcrewDebuggingQueue.push('notificationClickBranding function begin');
    var branding;
    /*Check if user is on paid plan and branding is off*/
    var isBrandingPossible = pushcrewConfig.pcBranding === 1 && (window.location.search.indexOf('pushcrew_powered') !== -1 || window.location.search.indexOf('vwo_powered') !== -1);
    var isUnsubscribePossible = pushcrewConfig.unsubscribeNCFlag === 1 && (window.location.search.indexOf('_p_c') !== -1 || window.location.search.indexOf('pushcrew_powered') !== -1 || window.location.search.indexOf('vwo_powered') !== -1);
    if (!(isBrandingPossible || isUnsubscribePossible)) {
      return;
    }
    // Detect if device type is mobile: For Branding style
    if (detectBrowser.isMobile()) {
      branding = '<div class="pushcrew-' + type + '-branding-modal-mobile-click-box">  ' + '    <a href="javascript:void(0);" class="js-pushcrew-' + type + '-branding-modal-mobile-click-close pushcrew-' + type + '-branding-mobile-click-close">\xD7</a>';
      if (isUnsubscribePossible) {
        branding += '    <a href="javascript:void(0);" class="pushcrew-unsubscribe">Unsubscribe from Notifications</a>';
      }
      if (isBrandingPossible) {
        branding += '<div class="pushcrew-' + type + '-branding-modal-mobile-click-body"><a href="https://vwo.com/engage/' + globalConfig.internalConfig.utmString + '" target="_blank" style="text-decoration: none;">' + '<span>Notifications Powered By </span><img src="' + pcUtils.getWhiteBrandingImage() + '" width="' + pcUtils.getWhiteBrandingWidth() + '" />' + '</a></div>';
      }
      branding += '</div>';
    } else {
      branding = '<div class="pushcrew-' + type + '-branding-modal-clicked-box">  ' + '    <a href="javascript:void(0);" class="js-pushcrew-' + type + '-branding-modal-clicked-close pushcrew-' + type + '-branding-clicked-close">\xD7</a>';
      if (isUnsubscribePossible) {
        branding += '    <a href="javascript:void(0);" class="pushcrew-unsubscribe">Unsubscribe from Notifications</a>';
      }
      if (isBrandingPossible) {
        branding += '  <div class="pushcrew-' + type + '-branding-modal-clicked-body"><a href="https://vwo.com/engage/' + globalConfig.internalConfig.utmString + '" target="_blank" style="text-decoration: none;">' + '<span>Notifications Powered By </span><img src="' + pcUtils.getWhiteBrandingImage() + '" alt="' + pcUtils.getBranding() + '" width="' + pcUtils.getWhiteBrandingWidth() + '" />' + '</a></div>';
      }
      branding += '</div>';
    }
    if (branding) {
      $pushcrew('body').append(branding);
    }
    //User click on `Unsubscribe from Notificaitons` => Shows Yes or No actions
    $pushcrew('body').on('click', '.pushcrew-unsubscribe', function () {
      var responseHtml;
      responseHtml = '<div class="pushcrew-unsubscribe-response"><span> Are you sure?</span>&nbsp;<a class="pushcrew-unsubscribe-yes" href="javascript:void(0);">Yes</a>&nbsp;/&nbsp;<a class="pushcrew-unsubscribe-no" href="javascript:void(0);">No</a></div>';
      $pushcrew(this).after(responseHtml);
      $pushcrew(this).remove();
      window._pushcrewDebuggingQueue.push('User clicked on unsubscribe form notification');
    });
    //User click yes
    $pushcrew('body').on('click', '.pushcrew-unsubscribe-yes', function () {
      unsubscribe(type);
      window._pushcrewDebuggingQueue.push('User conformed unsubscription by clicking on YES button');
    });
    //User click No
    $pushcrew('body').on('click', '.pushcrew-unsubscribe-no', function () {
      var htmlUnsubscribe;
      htmlUnsubscribe = '<a href="javascript:void(0);" class="pushcrew-unsubscribe" style="color:white;padding-bottom:2px;display:inline-block">Unsubscribe from Notifications</a>';
      $pushcrew('.pushcrew-unsubscribe-response').after(htmlUnsubscribe);
      $pushcrew('.pushcrew-unsubscribe-response').remove();
      window._pushcrewDebuggingQueue.push('User has denied unsubscription by clicking on NO button');
    });
    // User closes branding modal
    $pushcrew('.js-pushcrew-' + type + '-branding-modal-clicked-close').on('click', function () {
      $pushcrew('.pushcrew-' + type + '-branding-modal-clicked-box').remove();
      window._pushcrewDebuggingQueue.push('User closed branding model');
    });
    // User closes branding modal on mobile
    $pushcrew('.js-pushcrew-' + type + '-branding-modal-mobile-click-close').on('click', function () {
      $pushcrew('.pushcrew-' + type + '-branding-modal-mobile-click-box').remove();
      window._pushcrewDebuggingQueue.push('User closed mobile branding model');
    });
    window._pushcrewDebuggingQueue.push('notificationClickBranding function exit');
  }
  function unsubscribe(type) {
    if (type === 'http') {
      globalConfig._pushcrew.openChildWindow('?action=unsubscribe');
      processUnsubscription();
      deletePcBrowserStorage();
      storageUtil.addToStorage('wingify_push_subscription_status', 'unsubscribed', AppConstants.Storage.COOKIE.LIFETIME);
    } else {
      manageSubscription.unsubscribeFromPushNotification().then(function () {
        processUnsubscription();
      });
    }
  }
  function processUnsubscription() {
    $pushcrew('.pushcrew-unsubscribe-response').html('<span>You have been unsubscribed</span>');
    // When user clicks on Unsubscribe
    thirdPartyIntegrations.track(SupportedEvents.subscriptionUnsubscribed);
  }
  return branding;
}(customizejQuery, globalConfig, deletePcBrowserStorage, storageUtil, ThirdPartyIntegrations, SupportedEvents, pcUtils, AppConstants, detectBrowser);
bindClickListeners = function ($pushcrew, notificationPopup, sideButton, storageUtil, globalConfig, thirdPartyIntegrations, SupportedEvents) {
  function bindClickListeners(callback) {
    var $body = $pushcrew('body'), closeClass = '';
    /*Close button event depend upon the style user for config*/
    if (pushcrewConfig.style.type === 'chrome') {
      closeClass = '.pushcrew-chrome-style-notification-close.pushcrew-btn-close';
    } else {
      closeClass = '.pushcrew-chrome-style-notification-btn.pushcrew-btn-close';
    }
    $body.on('click', '.pushcrew-chrome-style-notification-btn.pushcrew-btn-allow, #pushcrew-mobile_allow_button', function () {
      // When the user clicks on Allow in HTTP Opt-In
      thirdPartyIntegrations.track(SupportedEvents.httpsCustomOptInAllow);
      notificationPopup.close();
      storageUtil.addToStorage('wingify_push_do_not_show_notification_popup', 'true', 14);
      callback();
    });
    /*Click event for don't allow button on moblie and browser*/
    $body.on('click', closeClass + ', #pushcrew-mobile_dontallow_button', function () {
      // When the user clicks on Block on HTTP Opt-In
      thirdPartyIntegrations.track(SupportedEvents.httpsCustomOptInDeny);
      notificationPopup.close();
      globalConfig.internalConfig.pushcrewOptinProcessedEvent.trigger();
      // if notification is closed, then show the side button (chicklet)
      sideButton.createSideButton();
      storageUtil.addToStorage('wingify_push_do_not_show_notification_popup', 'true', 14);
    });
    $body.on('click', '.pushcrew-side-button-close', function () {
      sideButton.closeSideButton();
    });
    /*Click event for close the chicklet on moblie and browser*/
    $body.on('click', '.pushcrew-side-button, .pushcrew-side-button-mobile', function () {
      // close side button and show the child window for subscription.
      sideButton.closeSideButton();
      callback();
    });
  }
  return bindClickListeners;
}(customizejQuery, notificationPopup, sideButton, storageUtil, globalConfig, ThirdPartyIntegrations, SupportedEvents);
setApiReady = function () {
  setSubscriberId();
  globalConfig.pushcrew.isAPIReady = globalConfig.APIReadyState.READY;
  globalConfig.executeInternalQueue();
};

httpsMain = function (domainMigration, $pushcrew, globalConfig, setSubscriberId, storageUtil, deletePcBrowserStorage, sideButton, notificationPopup, branding, bindClickListeners, IndexedDbOperations, setApiReady, detectPrivateMode, thirdPartyIntegrations, SupportedEvents, detectBrowser, pcUtils, AppConstants) {
  if (pushcrewConfig.isInactive == 1) {
    return;
  }
  function triggerPcOptInEvent() {
    globalConfig.internalConfig.pushcrewOptinProcessedEvent.trigger();
  }
  function triggerOptIn() {
    globalConfig._pushcrew.triggerOptInExecute(globalConfig._pushcrew.triggerBox);
  }
  var loadHttpsCss = function (callback) {
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.type = 'text/css';
    el.href = pushcrewConfig.style.url;
    document.head.append(el);
    if (callback) {
      el.onload = callback;
    }
  };
  storageUtil.initialiseState(pushcrewConfig.domainForStorageUtil);
  globalConfig.internalConfig.uuid = globalConfig._pushcrew.createUuidAndSetUuidCookie();
  var subscriptionStatus = storageUtil.getFromStorage('wingify_push_subscription_status');
  window._pc = window._pc || {};
  window.PC = window.PC || {};
  window.PC.__config = pushcrewConfig;
  var continueProcessing = globalConfig._pushcrew.validateBrowserSupport();
  if (continueProcessing === false) {
    triggerPcOptInEvent();
    return;
  }
  function startHttpsProcessingOnDomReady() {
    $pushcrew(document).ready(function () {
      https();
    });
  }
  if ((subscriptionStatus === 'unsubscribed' || subscriptionStatus === 'subscribed') && !storageUtil.getFromStorage('pshcrw_sns')) {
    startHttpsProcessingOnDomReady();
  } else {
    if (DOMAIN_MIGRATION && !globalConfig.internalConfig.isSafari) {
      domainMigration().then(function () {
        startHttpsProcessingOnDomReady();
      });
    } else {
      startHttpsProcessingOnDomReady();
    }
  }
  function https() {
    var subscriptionCookie = storageUtil.getFromStorage('wingify_push_subscription_status');
    if ((!subscriptionCookie || subscriptionCookie === 'denied') && !storageUtil.getFromStorage('wingify_push_subscriber_id') && globalConfig._pushcrew.isPermissionDenied()) {
      window.pushcrew = globalConfig.pushcrew;
      // Loading https css for displaying modal for blocked users correctly
      loadHttpsCss(function () {
        setApiReady();
        triggerPcOptInEvent();
      });
      return;
    }
    if (globalConfig._pushcrew.isMobileDisabled()) {
      triggerPcOptInEvent();
      return;
    }
    var manageSubscription, pushSubscription, cssUrl, head, link, prefetchImagesList, secondsTrigger, promise;
    manageSubscription = globalConfig.pushAPI.manageSubscription;
    pushSubscription = globalConfig.pushAPI.pushSubscription;
    cssUrl = pushcrewConfig.style.url;
    head = document.getElementsByTagName('head')[0];
    link = document.createElement('link');
    window._pushcrewDebuggingQueue = window._pushcrewDebuggingQueue || [];
    // Variables to be used for push notifications.
    function preload(sources) {
      window._pushcrewDebuggingQueue.push('preload images function begin');
      var images = [];
      for (var i = 0, length = sources.length; i < length; ++i) {
        images[i] = new Image();
        images[i].src = sources[i];
      }
      window._pushcrewDebuggingQueue.push('preload images function exit');
    }
    function isElementVisible(cssSelector) {
      return $pushcrew(cssSelector).is(':visible');
    }
    detectPrivateMode.isPrivateMode().then(function (is_private) {
      if (!is_private) {
        globalConfig._pushcrew.changeSegmentationStrings();
        window._pushcrewDebuggingQueue.push('Browser is opened in non-private window.');
        // TODO Make a function for this
        // Make changes so there's no conflict with Safari and Edge
        if (Notification.permission === 'granted' && !globalConfig.internalConfig.isSafari) {
          if (storageUtil.getFromStorage('wingify_push_subscription_status') === 'denied') {
            deletePcBrowserStorage();
            storageUtil.deleteFromStorage('wingify_push_do_not_show_notification_popup');
            loadHttpsCss();
            processHttps();
          } else {
            var storedSubscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id');
            if (!storedSubscriberId) {
              processHttps();
            } else {
              pushSubscription.detectBrowserType();
              pushSubscription.serviceWorkerPath = pushSubscription.browserType === 'firefox' ? pushcrewConfig.firefoxSwPath : pushcrewConfig.swPath;
              pushSubscription.getUserSubscription().then(function (response) {
                if (response === false) {
                  globalConfig._pushcrew.addManifestFile(Date.now(), true);
                  pushSubscription.subscribe().then(function (newSubscription) {
                    var subscriptionDetails = manageSubscription.splitSubscriptionParameters(newSubscription);
                    // Todo - Make is valid subscription function
                    if (subscriptionDetails !== 'error' && subscriptionDetails !== 'denied' && subscriptionDetails !== 'retryWithGcmKey') {
                      manageSubscription.syncSubscription(JSON.stringify(newSubscription), storedSubscriberId, '', subscriptionDetails.subscriptionId, subscriptionDetails.endpoint, 'update').then(function (value) {
                        processHttps();
                        storageUtil.addToStorage('wingify_push_do_not_show_notification_popup', 'true', AppConstants.Storage.COOKIE.LIFETIME);
                        storageUtil.addToStorage('wingify_push_subscription_status', 'subscribed', AppConstants.Storage.COOKIE.LIFETIME);
                      });
                    } else {
                      processHttps();
                    }
                  }).catch(function () {
                    processHttps();
                  });
                } else {
                  processHttps();
                }
              });
            }
          }
        } else {
          processHttps();
        }
        function processHttps() {
          var subscriptionStatusForCheckingMigration = storageUtil.getFromStorage('wingify_push_subscription_status');
          // Safari will give permission as allow on both child and migrated https because webpushid is same, so don't do early return for safari
          if (subscriptionStatusForCheckingMigration === 'blocked' || Notification.permission === 'default' && subscriptionStatusForCheckingMigration !== '' && !globalConfig.internalConfig.isSafari) {
            triggerPcOptInEvent();
            return;
          }
          globalConfig._pushcrew.addManifestFile(Date.now());
          if (!storageUtil.getFromStorage('wingify_donot_track_actions')) {
            globalConfig._pushcrew.setTrackingConsent(pushcrewConfig.pageClickTrackingConcent == 1 && pushcrewConfig.defaultPageClickTrackingPermission == 0 ? 1 : 0);
          }
          var twoSteplink = document.createElement('link');
          twoSteplink.type = 'text/css';
          twoSteplink.rel = 'stylesheet';
          twoSteplink.href = pushcrewConfig.style.twoStepStyleUrl;
          // File URL for custom optin CSS and chicklet
          link.type = 'text/css';
          link.rel = 'stylesheet';
          link.href = cssUrl;
          // File URL for unsubscribe chicklet and bottom bar
          prefetchImagesList = [
            pcUtils.getWhiteBrandingImage(),
            pushcrewConfig.style.iconUrl
          ];
          preload(prefetchImagesList);
          // MAGIC
          // call CSSDone() when CSS arrives
          head.appendChild(link);
          storageUtil.deleteAllKeysFromStorageWithRegex('segment-evalDate-');
          manageSubscription.customerHash = pushcrewConfig.hash;
          // Sets `pushSubscription.browserType`, `pushSubscription.canPushBeEnabled`
          pushSubscription.detectBrowserType();
          window._pushcrewDebuggingQueue.push('Browser type is ' + pushSubscription.browserType);
          pushSubscription.serviceWorkerPath = pushSubscription.browserType === 'firefox' ? pushcrewConfig.firefoxSwPath : pushcrewConfig.swPath;
          pushSubscription.registerServiceWorker();
          var shouldOptOut = globalConfig._pushcrew.cookieOptOut('https');
          if (shouldOptOut) {
            window._pushcrewDebuggingQueue.push('User opted out');
            globalConfig._pushcrew.apiFailureReasons = { reasons: ['USER_OPTED_OUT'] };
            globalConfig.pushcrew.isAPIReady = globalConfig.APIReadyState.FAILED;
            globalConfig._pushcrew.executeFailureQueue(globalConfig._pushcrew.apiFailureReasons);
            return;
          }
          // When native optin is selected
          var nativeOptinCallback = function () {
            window._pushcrewDebuggingQueue.push('CSS file has been loaded successfully');
            setSubscriberId();
            if (!isElementVisible('#pushcrew-preferences-btn-modal')) {
              branding('https');
            }
            // Calculates secondsTrigger from the time the code started executing
            secondsTrigger = pushcrewConfig.secondsTrigger - (Date.now() - globalConfig.pushcrew._currentTime) / 1000;
            secondsTrigger = secondsTrigger > 0 ? secondsTrigger : 0;
            //set variable to identify if OptIn comes from API call
            globalConfig.pushcrew.isAPIcall = false;
            switch (pushSubscription.browserType) {
            case 'chrome':
            case 'opera':
            case 'firefox':
            case 'safari':
            case 'edge':
            case 'samsung':
            case 'uc':
              // Checks if user is already subscribed
              // Returns false if not subscribed, and returns subscription if already subscribed
              promise = pushSubscription.getUserSubscription();
              window._pushcrewDebuggingQueue.push('Getting User Subscription status');
              promise.then(function (response) {
                if (DOMAIN_MIGRATION && window._pc.oldDomain && storageUtil.getFromStorage('pshcrw_sns') === 'false') {
                  // @todo Get pushcrewConfig.subscriptionDetails as argument in https function.
                  response = pushcrewConfig.subscriptionDetails;
                }
                // User not subscribed and push is supported
                if (response === false && pushSubscription.canPushBeEnabled === true) {
                  // Unsubscribes subscriptions who denied permissions for notifications
                  manageSubscription.syncUnsubscribedUsers().then(function () {
                    if (storageUtil.getFromStorage('wingify_push_subscription_status') === 'unsubscribed' && globalConfig._pushcrew.isPermissionGranted()) {
                      window._pushcrewDebuggingQueue.push('User has unsubscribed from push notification');
                      setApiReady();
                      triggerPcOptInEvent();
                      return;
                    }
                    setApiReady();
                    // If automatic trigger is turned off, donot show permissions box (optin)
                    if (globalConfig.pushcrew.noTrigger || pushcrewConfig.triggerAutomaticOptIn === 0) {
                      window._pushcrewDebuggingQueue.push('Customer has disabled trigger optin option');
                      return;
                    } else {
                      window._pushcrewDebuggingQueue.push('Opening TriggetOptIn box after ' + secondsTrigger + ' seconds');
                      // Trigger optin after `secondsTrigger`
                      pcUtils.shouldExecuteInTimeout(triggerOptIn, secondsTrigger * 1000);
                    }
                  });
                } else if (response !== false && pushSubscription.canPushBeEnabled === true) {
                  // Already subscribed
                  window._pushcrewDebuggingQueue.push('Manage subscription returned response and push can be enabled');
                  triggerPcOptInEvent();
                  manageSubscription.doesUserResponseExists = true;
                  if (pcUtils.arrayToBase64(response.options.applicationServerKey) !== pushcrewConfig.vapidPublicKey) {
                    globalConfig.pushAPI.pushSubscription.unsubscribe().then(function (response) {
                      globalConfig.pushAPI.pushSubscription.subscribe().then(function (response) {
                        // Sync Subscription
                        var subscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id');
                        manageSubscription.syncSubscription();
                        // Indexed DB
                        IndexedDbOperations.storeSubscriptionInIndexedDb(JSON.stringify(response));  // Cookies
                                                                                                     // Local Storage
                      });
                    });
                  }
                  manageSubscription.updateSubscription(response).then(function () {
                    // When the user is already subscribed to Push Notifications
                    thirdPartyIntegrations.track(SupportedEvents.alreadySubscribed);
                    setApiReady();
                    if (response !== 'error' && response !== 'denied' && response !== 'retryWithGcmKey') {
                      IndexedDbOperations.storeSubscriptionInIndexedDb(JSON.stringify(response));
                    }
                  });  //return promise from manage subscription once ajax call is ready. and then set apiready to true
                } else {
                  window._pushcrewDebuggingQueue.push('Push can not be enabled');
                  triggerPcOptInEvent();
                  manageSubscription.syncUnsubscribedUsers().then(function () {
                    setApiReady();
                    // for safari canPushBeEnabled is false if permission is denied, not call opt in
                    if (globalConfig.internalConfig.isSafari || globalConfig.pushcrew.noTrigger || pushcrewConfig.triggerAutomaticOptIn === 0) {
                      return;
                    } else {
                      globalConfig._pushcrew.triggerOptInExecute(globalConfig._pushcrew.triggerBox);
                    }
                  });
                }
              });
              break;
            default:
              break;
            }
          };
          bindClickListeners(nativeOptinCallback);
          link.onload = function () {
            pushcrewConfig.trackingBarText = pushcrewConfig.trackingBarText || 'Allow anonymous data tracking';
            var preferencesStatus = globalConfig._pushcrew.notificationPreferences();
            // If opened from Manage Perferences page, don't process anything else
            if (preferencesStatus) {
              return;
            }
            var twoStepOptinCallback = function () {
              secondsTrigger = pushcrewConfig.secondsTrigger - (Date.now() - globalConfig.pushcrew._currentTime) / 1000;
              secondsTrigger = secondsTrigger > 0 ? secondsTrigger : 0;
              setApiReady();
              if (storageUtil.getFromStorage('wingify_push_subscription_status') === 'subscribed' || storageUtil.getFromStorage('wingify_push_subscription_status') === 'unsubscribed') {
                window._pushcrewDebuggingQueue.push('detectPrivateMode callback complete, User is ' + storageUtil.getFromStorage('wingify_push_subscription_status'));
                nativeOptinCallback();
                return;
              }
              if (storageUtil.getFromStorage('wingify_push_do_not_show_notification_popup') === 'true') {
                secondsTrigger = 0;
              }
              function executeInitPopup() {
                //set variable to identify if OptIn comes from API call
                globalConfig.pushcrew.isAPIcall = false;
                if (globalConfig.pushcrew.noTrigger || pushcrewConfig.triggerAutomaticOptIn === 0) {
                  window._pushcrewDebuggingQueue.push('Auto Trigger Off.');
                  triggerPcOptInEvent();
                  return;
                } else {
                  window._pushcrewDebuggingQueue.push('Auto Trigger Set');
                  if (!storageUtil.getFromStorage('wingify_push_subscription_id')) {
                    window._pushcrewDebuggingQueue.push('HTTPs : Show Opt-in');
                    var openPopUp = function (isApiCall) {
                      if (storageUtil.getFromStorage('wingify_push_do_not_show_notification_popup') !== 'true' || isApiCall === true) {
                        $pushcrew('body').append(notificationPopup.getOptInHTML());
                        // If subscriber chooses in to opt for data tracking, then we change the consent
                        $pushcrew('#tracking_bar_checkbox').click(function (e) {
                          globalConfig._pushcrew.setTrackingConsent(e.target.checked ? 0 : 1);
                        });
                        window._pushcrewDebuggingQueue.push('HTTPs custom optin has been added to body element');
                        // When HTTP Opt-In is shown
                        thirdPartyIntegrations.track(SupportedEvents.httpsCustomOptInVisible);
                      } else {
                        sideButton.createSideButton();
                        triggerPcOptInEvent();
                        window._pushcrewDebuggingQueue.push('HTTPs custom optin was not allowed');
                      }
                    };
                    pushcrewConfig.includeUrls = pushcrewConfig.includeUrls || '.*';
                    pushcrewConfig.excludeUrls = pushcrewConfig.excludeUrls || window._puschrew_exclude_url_pattern || '';
                    if (pcUtils.qualifyForOptin(pushcrewConfig.includeUrls, pushcrewConfig.excludeUrls)) {
                      openPopUp(globalConfig.pushcrew.isAPIcall);
                    }
                  }
                  window._pushcrewDebuggingQueue.push('HTTPs initPopup function execution complete');
                }
              }
              pcUtils.shouldExecuteInTimeout(executeInitPopup, secondsTrigger * 1000);
            };
            if (parseInt(pushcrewConfig.isNativeOptin, 10) === 1 && (pcUtils.shouldForceOneStep() || !detectBrowser.usingUserGesture())) {
              nativeOptinCallback();
            } else {
              // Wait for CSS of custom optin to load
              // If native optin not selected, i.e., has opted for two step optin then append this resource
              head.appendChild(twoSteplink);
              twoSteplink.onload = twoStepOptinCallback;
            }
          };  //pushcrew.triggerOptIn = globalConfig._pushcrew.triggerOptIn;
        }
      } else {
        triggerPcOptInEvent();
        window._pushcrewDebuggingQueue.push('Browser is opened in private window.');
        globalConfig._pushcrew.apiFailureReasons = { reasons: ['PRIVATE_BROWSING'] };
        globalConfig.pushcrew.isAPIReady = globalConfig.APIReadyState.FAILED;
        globalConfig._pushcrew.executeFailureQueue(globalConfig._pushcrew.apiFailureReasons);
      }
    });
    window.pushcrew = globalConfig.pushcrew;
    var reExecutionQueueLength = globalConfig.reExecuteQueue.length;
    for (var i = 0; i < reExecutionQueueLength; i++) {
      window._pcq.push(globalConfig.reExecuteQueue.shift());
    }
  }
}(domainMigration, jquery, globalConfig, setSubscriberId, storageUtil, deletePcBrowserStorage, sideButton, notificationPopup, branding, bindClickListeners, IndexedDbOperations, setApiReady, detectPrivateMode, ThirdPartyIntegrations, SupportedEvents, detectBrowser, pcUtils, AppConstants);
vwoUtils_segmentation = function () {
  /**
   * @const
   **/
  var undef = 'undefined',
    /**
     * @const
     * @type {number}
     * Base used by parse functions.
     **/
    parseBase = 10, castToNumber = function (value) {
      if (isNaN(value)) {
        return value;
      } else {
        return Number(value);
      }
    }, segmentation;
  /**
   * @return {object} Segmentation checks.
   * Creates an object for segmentation.
   */
  if (segmentation) {
    return segmentation;
  }
  var _navigator = navigator, _document = document, uaString = _navigator.userAgent,
    //uaString = userAgent
    vendor = _navigator.vendor,
    //vendor = navigator.vendor
    anchor = _document.createElement('a'),
    //New Element Creation
    uaStringLower = uaString.toLowerCase(), appVersion = _navigator.appVersion, browsers = [
      //List of Browsers
      //Opera needs to be at the top as both Chrome and Opera have userAgent string corresponding to Chrome.
      //So, first identify Opera.
      {
        s: uaString,
        sS: ' OPR/',
        p: window.opera,
        i: 'Opera'
      },
      {
        s: vendor,
        sS: 'Apple',
        i: 'Safari'
      },
      {
        s: vendor,
        sS: 'KDE',
        i: 'Konqueror'
      },
      {
        s: uaString,
        sS: 'Firefox',
        i: 'Firefox'
      },
      {
        s: uaString,
        sS: 'Netscape',
        i: 'Netscape'
      },
      //Move IE above Chrome as Microsoft Edge contains Chrome in the UA
      {
        s: uaString,
        sS: 'MSIE',
        p: /(?:Trident\/.*?rv:|Windows NT.*?Edge\/)(?:[0-9]+[.0-9]*)/i.test(uaString),
        i: 'Explorer'
      },
      {
        s: uaString,
        sS: 'Chrome',
        i: 'Chrome'
      }
    ], organicReferrals = [
      //List of Organic Referrals
      //Yahoo and Google don't give search param now
      //'i' must always be equal to (index in Array) + 1 as required by _vwo_s().k()
      {
        s: 'search.yahoo.com/',
        p: 'p',
        i: 1
      },
      {
        s: 'www.google.',
        p: 'q',
        i: 2
      },
      {
        s: 'www.bing.com/',
        p: 'q',
        i: 3
      },
      {
        s: '.ask.com/',
        p: 'q',
        i: 4
      },
      {
        s: 'www.search.com/',
        p: 'q',
        i: 5
      },
      {
        s: 'www.baidu.com/',
        p: 'wd',
        i: 6
      },
      {
        s: 'search.aol.com/',
        p: 'q',
        i: 7
      }
    ], isDefined = function (s) {
      return undef !== typeof s;
    }, visitorInfo = function () {
      return window.VWO && window.VWO.data && window.VWO.data.vi;
    };
  segmentation = {
    // TODO: Verify if its deprecated
    // Cookie Enabled
    ce: function () {
      //true / false
      return _navigator.cookieEnabled;
    },
    U: function () {
      //current URL
      return _document.URL;
    },
    //ks is not being used in backend, deprecated
    ks: function () {
      //Referrer Variables String
      // a.search always returns '', can be removed after verifying
      return '' === this.R() ? '' : anchor.search;
    },
    ors: function () {
      //Organic Referral source
      for (var c = 0; c < organicReferrals.length; c++) {
        if (-1 !== this.R().indexOf(organicReferrals[c].s)) {
          return organicReferrals[c].i;
        }
      }
      return 0;
    },
    rt: function () {
      //Referral Type 1: Direct; 2: Organic; 3:Referral
      if (this.ors()) {
        return 'org';
      }
      if (this.R()) {
        return 'ref';
      }
      return 'dir';
    },
    k: function () {
      //array of Keywords if Organic Referral
      if (this.ors()) {
        var regex = new RegExp('[\\?&]' + organicReferrals[this.ors() - 1].p + '=([^&#]*)'), results = regex.exec(this.R());
        if (null !== results) {
          return results[1].split('+').join(' ');
        }
      }
      return '';
    },
    gC: function (x) {
      //Get Cookie Function
      if (0 < _document.cookie.length) {
        var cs = _document.cookie.indexOf(x + '='), ce;
        if (-1 !== cs) {
          cs = cs + x.length + 1;
          ce = _document.cookie.indexOf(';', cs);
          if (-1 === ce) {
            ce = _document.cookie.length;
          }
          return decodeURIComponent(_document.cookie.substring(cs, ce));
        }
      }
      return '';
    },
    T: function () {
      //New Vs Returning
      var v = this.gC('_vis_opt_s');
      if (v) {
        return 1 < parseInt(v.split('|')[0], parseBase) ? 'ret' : 'new';
      }
      return 'new';
    },
    qP: function (x) {
      // query params
      x = x.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + x + '=([^&#]*)'), results = regex.exec(this.U());
      return results ? results[1] : '';
    },
    /* jshint camelcase:false */
    f_in: function (s1, s2) {
      //case insensitive equals to
      return isDefined(s1) && isDefined(s2) && s1.toString().toLowerCase() === s2.toString().toLowerCase();
    },
    f_nin: function (s1, s2) {
      //case insensitive not equals to
      return !this.f_in(s1, s2);
    },
    f_cs: function (s1, s2) {
      //case sensitive equals to
      return isDefined(s1) && isDefined(s2) && s1.toString() === s2.toString();
    },
    f_ncs: function (s1, s2) {
      //case sensitive not equals to
      return !this.f_cs(s1, s2);
    },
    f_re_i: function (s1, s2) {
      //case insensitive regex
      if (!isDefined(s1) || !isDefined(s2)) {
        return false;
      }
      var re = new RegExp(s2, 'i');
      // Convert to string as `match` method exists on string only
      s1 = s1 + '';
      return s1.match(re);
    },
    f_re_s: function (s1, s2) {
      //case sensitive regex
      if (!isDefined(s1) || !isDefined(s2)) {
        return false;
      }
      var re = new RegExp(s2);
      // Convert to string as `match` method exists on string only
      s1 = s1 + '';
      return s1.match(re);
    },
    f_con: function (s1, s2) {
      //contains
      if (!isDefined(s1) || !isDefined(s2)) {
        return false;
      }
      return s1.toString().toLowerCase().indexOf(s2.toString().toLowerCase()) > -1;
    },
    f_d_con: function (s1, s2) {
      //does not contain
      return !this.f_con(s1, s2);
    },
    f_b: function (s1) {
      //is Blank
      return s1 ? false : true;
    },
    f_n_b: function (s1) {
      //is not blank
      return !this.f_b(s1);
    },
    f_e: function (s1, s2) {
      //equals to one of the values
      var i;
      if ('object' === typeof s2) {
        for (i = 0; i < s2.length; i++) {
          if (this.f_in(s1, s2[i])) {
            return true;
          }
        }
        return false;
      }
      return this.f_in(s1, s2);
    },
    f_gt: function (value1, value2) {
      return castToNumber(value1) > castToNumber(value2);
    },
    f_gte: function (value1, value2) {
      return castToNumber(value1) >= castToNumber(value2);
    },
    f_lt: function (value1, value2) {
      return castToNumber(value1) < castToNumber(value2);
    },
    f_lte: function (value1, value2) {
      return castToNumber(value1) <= castToNumber(value2);
    },
    /* jshint camelcase:true */
    //New Functions
    wk: function () {
      return uaStringLower.indexOf('webkit') > -1;
    },
    //device
    de: function () {
      var visitorInformation = visitorInfo();
      if (visitorInformation && visitorInformation.de) {
        return visitorInformation.de;
      }
      if (uaStringLower.indexOf('ipod') > -1) {
        return 'ipod';
      }
      if (uaStringLower.indexOf('ipad') > -1 && this.wk()) {
        return 'ipad';
      }
      if (uaStringLower.indexOf('iphone') > -1) {
        return 'iphone';
      }
      if (uaStringLower.indexOf('android') > -1) {
        return 'android';
      }
      if (uaStringLower.indexOf('googletv') > -1) {
        return 'googletv';
      }
      if (uaStringLower.indexOf('symbian') > -1 || /series\s*[4-9]0/i.test(uaStringLower)) {
        return 'symbian';
      }
      if (uaStringLower.indexOf('blackberry') > -1 || uaStringLower.indexOf('vnd.rim') > -1 || uaStringLower.indexOf('bb10') > -1) {
        return 'blackberry';
      }
      if (uaStringLower.indexOf('windows phone') > -1) {
        return 'winphone';
      }
      return '';
    },
    dt: function () {
      var visitorInformation = visitorInfo();
      return visitorInformation && visitorInformation.dt || '';
    },
    os: function () {
      // Operating System
      var visitorInformation = visitorInfo();
      if (visitorInformation && visitorInformation.os) {
        return visitorInformation.os;
      }
      if (-1 !== appVersion.indexOf('Win')) {
        return 'windows';
      }
      if (-1 !== appVersion.indexOf('Mac')) {
        return 'macOS';
      }
      if (-1 !== appVersion.indexOf('X11')) {
        return 'unix';
      }
      if (-1 !== appVersion.indexOf('Linux')) {
        return 'linux';
      }
    },
    b: function () {
      // Browser
      var visitorInformation = visitorInfo();
      if (visitorInformation && visitorInformation.br) {
        return visitorInformation.br;
      }
      return this.sS(browsers) || '';
    },
    sS: function (d) {
      var i, dS, dP;
      for (i = 0; i < d.length; i++) {
        dS = d[i].s;
        dP = d[i].p;
        if (dS) {
          if (-1 !== dS.indexOf(d[i].sS)) {
            return d[i].i;
          }
        }
        //Its currently checked for Opera browser only.
        //Old Presto based Opera needs dP.
        if (dP) {
          return d[i].i;
        }
      }
    },
    jv: function (x) {
      // JS Variable
      try {
        /* jshint evil:true */
        return window[x] || eval(x);  /* jshint evil:false */
      } catch (e) {
      }
    },
    ua: function () {
      // UserAgent String
      return uaString;
    },
    /**
     * @returns {string}
     */
    DoW: function () {
      return new Date().getDay().toString();
    },
    /**
     * @returns {string}
     */
    Hr: function () {
      return new Date().getHours();
    },
    /* jshint camelcase:false */
    /**
     * @returns {string}
     */
    Co: function () {
      //Country
      var geo = window._vwo_geo;
      return undef !== typeof geo && undef !== typeof geo.country ? geo.country : '';
    },
    /**
     * @returns {string}
     */
    Re: function () {
      //Region
      var geo = window._vwo_geo;
      return undef !== typeof geo && undef !== typeof geo.region ? geo.region : '';
    },
    /**
     * @returns {string}
     */
    Ci: function () {
      //City
      var geo = window._vwo_geo;
      return undef !== typeof geo && undef !== typeof geo.city ? geo.city : '';
    },
    ip: function () {
      //IP address
      return window._vwo_ip || '';
    },
    vt: function () {
      //new or returning visitor
      var vi = window.VWO.data.vi;
      if (vi) {
        return vi.vt;
      }
    },
    f_has: function (value1, value2) {
      if (!isDefined(value1) || !isDefined(value2)) {
        return false;
      }
      value2 = new RegExp('^' + value2.replace('%', '.*'));
      return !!value1.match(value2);
    },
    f_nhas: function (value1, value2) {
      if (!isDefined(value1) || !isDefined(value2)) {
        return false;
      }
      value2 = new RegExp('^' + value2.replace('%', '.*'));
      return !value1.match(value2);
    }  /* jshint camelcase:true */
  };
  return segmentation;
}();
vwoUtils_pc_segmentation = function (segmentation, storageUtil) {
  var dntMethods = [
    'U',
    'rt',
    'k',
    'gC',
    'qP',
    'jv',
    'DoW',
    'Hr',
    'R'
  ];
  var dntMethodsLength = dntMethods.length;
  segmentation.cd = function (key) {
    var value = storageUtil.getFromStorage('_vwo_cd_' + key);
    return value === '' ? 'null' : value;
  };
  segmentation.tz = function () {
    return encodeURIComponent(new Date().getTimezoneOffset().toString().replace('+', ''));
  };
  segmentation.l = function () {
    return navigator.language;
  };
  segmentation.dnt = function () {
    /*jshint eqeqeq: false */
    return storageUtil.getFromStorage('wingify_donot_track_actions') == 1;  /*jshint eqeqeq: true */
  };
  segmentation.R = function () {
    return document.referrer || '';
  };
  segmentation.subscribe = function () {
    if (window.pushcrew && window.pushcrew.subscribed) {
      return true;
    } else {
      return false;
    }
  };
  function addDoNotTrackToMethod(oldMethod, methodName) {
    segmentation[methodName] = function () {
      if (segmentation.dnt()) {
        return null;
      }
      return oldMethod.apply(this, arguments);
    };
  }
  for (var i = 0; i < dntMethodsLength; i++) {
    var methodName = dntMethods[i];
    addDoNotTrackToMethod(segmentation[methodName], methodName);
  }
  function segmentationObjReturn() {
    return segmentation;
  }
  return segmentationObjReturn;
}(vwoUtils_segmentation, storageUtil);
vwoUtils_vwo_lib = function () {
  var console = window.console || {
    log: function () {
    }
  };
  var queue;
  var apiLib = {
    /**
     * Process Events that will be pushed to window.VWO
     * @param evnt Array of arguments to be sent ( First element would be the name of the function and subsequent argument
     * will be arguments to that functions
     * @param contextName Context of the VWO library to process event, for ex ( 'survey', 'nls' )
           * @param obj Object on which method is exposed
     * @param index Index of the calle in VWO, so that we can remove it from the queue
     * @returns {boolean} 0 or 1, 1 if function has been processed successfully, 0 if function context is not
     * matching
     */
    processEvent: function (evnt, contextName, obj, index) {
      if (Object.prototype.toString.call(evnt) !== '[object Array]') {
        return 0;
      }
      try {
        var fullFunctionName = evnt[0], functionArgs = evnt.slice(1), doesContextExist = fullFunctionName.indexOf('.') !== -1;
        if (doesContextExist && fullFunctionName.indexOf(contextName) === 0 || !doesContextExist) {
          var functionReference, funcName, context;
          if (!doesContextExist) {
            functionReference = obj[fullFunctionName];
            context = obj;
          } else {
            funcName = fullFunctionName.split('.');
            functionReference = obj[funcName[0]][funcName[1]];
            context = obj[funcName[0]];
          }
          if (functionReference) {
            //Removing function from queue before processing it, as it can lead to more VWO.push events
            queue.splice(index, 1);
            functionReference.apply(context, functionArgs);
            return 1;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      } catch (e) {
        console.log('Error occured in VWO Process Event (' + (evnt && evnt[0]) + '): ', e);
        return 0;
      }
    },
    /**
     * Overriding original push of queue to listen for any event push to queue
     * @param contextName Context of the library to process event, for ex ( 'survey', 'nls' )
     * @param queue Queue of events to process
     * @param obj Object on which method is exposed
     */
    addPushListener: function (contextName, queue, obj) {
      var _push = queue.push;
      queue.push = function (evnt) {
        // Process push listeners that were attached earlier, first
        _push.apply(queue, [].slice.call(arguments));
        // Only process event if it has not been removed by previous push
        if (queue[queue.length - 1] === evnt) {
          apiLib.processEvent(evnt, contextName, obj, queue.length - 1);
        }
      };
    },
    /**
     * Process already pushed events with the matching contextName ('survey', 'nls')
     * @param contextName Context of the VWO library to process event, for ex ( 'survey', 'nls' )
     * @param obj Object on which method is exposed
     * @param arrName Array in which user pushed the arguments
     */
    init: function (contextName, obj, arrName) {
      if (!obj) {
        obj = window.VWO = window.VWO || [];
      }
      if (arrName) {
        queue = obj[arrName] = obj[arrName] || [];
      } else {
        queue = obj || [];
      }
      apiLib.process(contextName, queue, obj);
      apiLib.addPushListener(contextName, queue, obj);
    },
    process: function (contextName, queue, obj) {
      var i = 0;
      while (i < queue.length) {
        if (apiLib.processEvent(queue[i], contextName, obj, i) === 0) {
          i++;
        }
      }
    }
  };
  if (window.VWO) {
    window.VWO._ = window.VWO._ || {};
    VWO._.vwoLib = apiLib;
  }
  return apiLib;
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
/** Class representing a PushCrewTracker */
var PushCrewTracker = function () {
  /**
   * Create a PushCrewTracker
   * @param {object} options - options for the tracker
   */
  function PushCrewTracker(options) {
    _classCallCheck(this, PushCrewTracker);
    if (!options || !options.providers) {
      console.error(PushCrewTracker.messages.noOptions);
      this.providers = {};
      return;
    }
    // Save the options
    this.options = options;
    // Save supported events
    this.supportedEvents = options.supportedEvents ? options.supportedEvents : {};
    // Save non-interaction events
    this.nonInteraction = options.nonInteraction ? options.nonInteraction : [];
    // Save additional params
    this.additionalParams = options.additionalParams ? options.additionalParams : {};
    this.globalConfig = options.globalConfig ? options.globalConfig : null;
    this.providerSettings = {};
    // Contains all provider settings
    // Set usable providers as empty
    this.providers = {};
    // Set init flag
    this.loaded = false;
    /*
     * Wait for everything to load,
     * because the tracker libraries need to be loaded
     * before we try to use them.
     */
    window.addEventListener('load', function () {
      // Default provider settings for Google Analytics
      this.providerSettings[PushCrewTracker.providers.GoogleAnalytics] = {
        init: this.initGoogleAnalytics,
        // Method to be called when provider is approved
        pointerVar: 'ga',
        // Variable name that exists in the window object
        trackingMethod: this.trackGoogleAnalytics,
        // Method to be called for provider when PushCrewTracker.track is called,
        googleAnalyticsInitHelper: this.googleAnalyticsInitHelper
      };
      var providers = {};
      // Contains all valid providers for this instance
      // Loop through all the providers in options
      for (var provider in options.providers) {
        // If use is undefined or false, skip the provider
        if (!options.providers[provider].use)
          continue;
        // Check if the provider has default values
        var proceed = provider in this.providerSettings;
        /* If the provider does not have default values,
           i.e. it is not supported out-of-the-box,
           check if all required params are present.
        */
        if (!proceed) {
          proceed = true;
          for (var param in PushCrewTracker.replaceableParams) {
            if (!(PushCrewTracker.replaceableParams[param] in options.providers[provider])) {
              proceed = false;
              break;
            }
          }
        }
        // If everything is fine, add the provider.
        if (proceed) {
          // Get default settings for provider, if they exist.
          var thisProvider = this.providerSettings[provider] || {};
          // Replace parameters for provider
          for (var param in PushCrewTracker.replaceableParams) {
            var paramName = PushCrewTracker.replaceableParams[param];
            if (paramName in options.providers[provider]) {
              thisProvider[paramName] = options.providers[provider][paramName];
            }
          }
          // Google Analytics specific options
          if (provider === PushCrewTracker.providers.GoogleAnalytics) {
            thisProvider.gaId = options.providers[provider].gaId;
          }
          // Get the pointer
          thisProvider.pointer = window[thisProvider.pointerVar];
          // If the pointer is unusable, show warning and skip adding the provider
          if (!thisProvider.pointer) {
            console.warn(PushCrewTracker.messages.unsupportedPointerVar(provider));
            continue;
          }
          // Provider is safe to use, add it.
          providers[provider] = thisProvider;
          // Call the init method for the provider.
          thisProvider.init();
        }  // If the provider cannot be used, show warning.
        else {
          console.warn(PushCrewTracker.messages.unsupportedProvider(provider));
          continue;
        }
      }
      // Set usable providers
      this.providers = providers;
      // Set init flag
      this.loaded = true;
      // Process the queue
      this.processQueue();
    }.bind(this), false);
  }
  /*
   * Method to process the queue
   * @return void
   */
  _createClass(PushCrewTracker, [
    {
      key: 'processQueue',
      value: function processQueue() {
        // Push all events from the queue
        if (window._pctrackerQueue) {
          while (window._pctrackerQueue.length > 0) {
            var _event = window._pctrackerQueue.shift();
            // Get first element from queue
            this.track(_event.eventName, _event.eventData);
          }
        }
      }  /*
          * Method to push event to queue
          */
    },
    {
      key: 'pushToQueue',
      value: function pushToQueue(eventName, eventData) {
        // Create queue if it does not exist
        if (!window._pctrackerQueue) {
          window._pctrackerQueue = [];
        }
        // Push to queue
        window._pctrackerQueue.push({
          eventName: eventName,
          eventData: eventData
        });
      }  /**
          * Method to initiate sending of tracking events.
          * @param {string} eventName - Name of the event
          * @param {anything} eventData - Data to be sent with the event
          */
    },
    {
      key: 'track',
      value: function track(eventName, eventData) {
        var _this = this;
        if (typeof eventName !== 'string')
          return;
        // eventName should be a string
        if (eventName.length === 0)
          return;
        // eventName should not be an empty string
        // If uninitialised, push in a queue
        if (!this.loaded) {
          // Push to queue
          this.pushToQueue(eventName, eventData);
          // return from here, because there may not be any providers yet
          return;
        }
        // Check if event is supported
        // If supportedEvents is empty, we allow all events
        var supportedEventsKeys = Object.keys(this.supportedEvents || {});
        var supportedEvents = supportedEventsKeys.map && supportedEventsKeys.map(function (eachKey) {
          return _this.supportedEvents[eachKey];
        });
        if (supportedEvents.length > 0 && supportedEvents.indexOf(eventName) === -1)
          return;
        var additionalParams = this.additionalParams;
        // Check if the event is a non-interaction event
        if (this.nonInteraction.indexOf(eventName) > -1) {
          additionalParams = _extends({}, additionalParams, { nonInteraction: true });
        }
        if (this.globalConfig && typeof this.globalConfig._pushcrew.gaInteractionAttribute === 'function') {
          additionalParams.nonInteraction = this.globalConfig._pushcrew.gaInteractionAttribute();
        }
        // Loop through each usable provider
        for (var provider in this.providers) {
          // Call the provider's trackingMethod with the params
          this.providers[provider].trackingMethod(eventName, eventData, additionalParams);
        }
      }  /**
          * Method that handles Google Analytics' [ga] object's initialisation
          */
    },
    {
      key: 'initGoogleAnalytics',
      value: function initGoogleAnalytics() {
        // getAll method is added to ga when it is initialised
        // So, if still uninitialised, do the following
        if (!('getAll' in this.pointer)) {
          // Attach callback for initialisation
          this.pointer(function () {
            this.googleAnalyticsInitHelper();
          }.bind(this));
        } else {
          this.googleAnalyticsInitHelper();
        }
      }  /**
          * Default method to send a tracking event to Google Analytics
          * @param {string} eventName - Name of the event
          * @param {anything} eventData - Data to be sent with the event
          */
    },
    {
      key: 'trackGoogleAnalytics',
      value: function trackGoogleAnalytics(eventName, eventData, additionalParams) {
        // If pointer is unusable, halt.
        if (!this.pointer)
          return;
        // Add customer origin (HTTP/HTTPS)
        if (additionalParams.origin) {
          eventName += '_' + additionalParams.origin.toUpperCase();
        }
        var nonInteraction = false;
        if (additionalParams.nonInteraction) {
          nonInteraction = additionalParams.nonInteraction;
        }
        // eventData.nonInteraction overrides aditionalParams.nonInteraction
        // If eventData.nonInteraction exists, use it
        if (eventData && eventData.nonInteraction !== undefined) {
          nonInteraction = eventData.nonInteraction;
        }
        // Set data to be sent to GA
        var data = {
          eventCategory: PushCrewTracker.constants.GoogleAnalyticsEventCategory,
          eventAction: eventName,
          eventLabel: window.location.href,
          // Send current URL as label
          nonInteraction: nonInteraction
        };
        if (this.globalConfig && typeof this.globalConfig._pushcrew.gaInteractionAttribute === 'function') {
          data.nonInteraction = this.globalConfig._pushcrew.gaInteractionAttribute();
        }
        // Send to GA
        if (this.pointer.send) {
          this.pointer.send('event', data);
        }
      }  /*
          * Method that selects the correct GA ID to use for the tracker
          * @return void
          */
    },
    {
      key: 'googleAnalyticsInitHelper',
      value: function googleAnalyticsInitHelper() {
        // Get current pointer to ga
        var thisGa = window[this.pointerVar];
        // Get all trackers available
        var gaTrackers = thisGa.getAll();
        // Case where there are no trackers available
        if (gaTrackers.length === 0) {
          /**
           * Case 1: No GA trackers, GA ID is given
           */
          if (this.gaId.length > 0) {
            // Create a new tracker and set it as the pointer
            thisGa('create', this.gaId, 'auto', { name: PushCrewTracker.constants.GoogleAnalyticsTrackerName });
            this.pointer = thisGa.getAll()[0];
          }  /**
              * Case 2: No GA trackers, no GA ID is given
              */ else if (this.gaId.length === 0) {
            // Show a warning and set trackingMethod to a method that does nothing
            console.warn(PushCrewTracker.messages.noGAId);
            this.trackingMethod = function () {
            };
          }
        } else {
          /**
           * Case 3: Tracker already present with given GA ID
           * Case 4: Trackers present, but none with given GA ID
           * Case 5: Trackers present, GA ID not given
           */
          // Initialize tracker to use as undefined
          var trackerToUse = undefined;
          // Case 5
          if (this.gaId.length === 0) {
            // Use the first available tracker
            trackerToUse = gaTrackers[0];
          } else {
            // Loop until we find a tracker with the given tracking ID
            for (var i = 0; i < gaTrackers.length; i++) {
              // Case 3
              if (gaTrackers[i].get('trackingId') === this.gaId) {
                trackerToUse = gaTrackers[i];
                break;
              }
            }
            // If no tracker with given tracking ID was found
            // Case 4
            if (trackerToUse === undefined) {
              // Create a new tracker and use it
              thisGa('create', this.gaId, 'auto', { name: PushCrewTracker.constants.GoogleAnalyticsTrackerName });
              gaTrackers = thisGa.getAll();
              for (var i = 0; i < gaTrackers.length; i++) {
                if (gaTrackers[i].get('trackingId') === this.gaId) {
                  trackerToUse = gaTrackers[i];
                  break;
                }
              }
            }
          }
          // Set pointer
          this.pointer = trackerToUse;
        }
      }
    }
  ]);
  return PushCrewTracker;
}();
// Providers and their names
PushCrewTracker.providers = { GoogleAnalytics: 'GoogleAnalytics' };
// Replaceable parameters for providers
PushCrewTracker.replaceableParams = [
  'init',
  'pointerVar',
  'trackingMethod'
];
// Messages and message generators
PushCrewTracker.messages = {
  noGAId: 'No GA ID present. Unable to track PushCrew events using Google Analytics.',
  noOptions: 'No options provided while initialising PushCrewTracker.',
  unsupportedProvider: function unsupportedProvider(provider) {
    return 'Provider ' + provider + ' cannot be used.';
  },
  unsupportedPointerVar: function unsupportedPointerVar(provider) {
    return 'pointerVar for ' + provider + ' is not usable.';
  }
};
// Constants
PushCrewTracker.constants = {
  GoogleAnalyticsEventCategory: 'PushCrew',
  GoogleAnalyticsTrackerName: 'PushCrew'
};
// Helper methods
PushCrewTracker.helpers = {
  /*
   * Method to convert a JSON object to a query string
   * @param json - Object - Params to convert
   * @return String
   */
  jsonToQueryString: function jsonToQueryString(json) {
    return Object.keys(json).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
  }
};
pushcrewtracker = undefined;
pushcrewtrackerinit = function (exports, supportedEvents, globalConfig) {
  window.pctracker = new PushCrewTracker({
    providers: {
      'GoogleAnalytics': {
        use: pushcrewConfig.enableGA ? pushcrewConfig.enableGA : false,
        gaId: pushcrewConfig.gaId ? pushcrewConfig.gaId : ''
      }
    },
    supportedEvents: supportedEvents,
    additionalParams: {
      jsAPIVersion: pushcrewConfig.jsAPIVersion,
      origin: pushcrewConfig.origin
    },
    nonInteraction: [
      supportedEvents.optInVisible,
      supportedEvents.optInBlockByBrowser,
      supportedEvents.alreadySubscribed
    ],
    globalConfig: globalConfig
  });
  return {};
}(pushcrewtrackerinit, SupportedEvents, globalConfig);
src_https_without_tracker = function (detectPrivateMode, globalConfig, storageUtil, api, pushSubscription, manageSubscription, httpsMain, segmentation, triggerWrapper, wingifyPushApi) {
  window._pushcrewDebuggingQueue = window._pushcrewDebuggingQueue || [];
  window._pc_s = segmentation || {};
  window._pcq = window._pcq || [];
  window.PC = window.PC || {};
  window.PC.trigger = triggerWrapper.trigger;
  wingifyPushApi.init('pushcrew', window.PC, '__q');
  var subscriberId = storageUtil.getFromStorage('wingify_push_subscriber_id') || false, manageSubscriptionAPI = manageSubscription && manageSubscription.manageSubscription;
  if (subscriberId && subscriberId !== -1) {
    manageSubscriptionAPI.getUserProperties();
  }
}(detectPrivateMode, globalConfig, storageUtil, api, pushSubscription, manageSubscription, httpsMain, vwoUtils_pc_segmentation, triggerWrapper, vwoUtils_vwo_lib);
}());
})();