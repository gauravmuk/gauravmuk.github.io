!function(){var a=function(a,b){var c=function(){a()?b():setTimeout(c,100)};c()};a(function(){return VWO&&VWO._&&VWO._.libLoaded},function(){!function(){var a={},b={},c={};a=function(a){var b={TRACK_PAGE_COOKIE_NAME:"_vwo_p",FUNNEL_EXPIRY:100,INITIAL_PRICING_VERSION:0,FEATURE_BUCKET_INDEX:1,SAMPLING_VERSION_INDEX:2,TRACK_GLOBAL_COOKIE_EXPIRY_STATE_INDEX:3,FUNNEL_INFORMATION_INDEX:2,GOAL_INFORMATION_INDEX:3,ANALYZE_INFORMATION_INDEX:4,CRO_START_TIMESTAMP_INDEX:5,PAGE_ID_INFORMATION_INDEX:1,ANALYSE_SERVER_NAME_INDEX:2,TRACK_PAGE_ID_INFORMATION_INDEX:3};return VWO._.commonUtil.extend(b,VWO._.CookieEnum),b}(a),b=function(a,b){var c=VWO._.commonUtil,d={analyze:{}},e=0,f=function(){var a=j.getDataStore(),c={};if(a){var d=a.split(":")[b.ANALYZE_INFORMATION_INDEX];c=i(d)}return c},g=function(){var a=j.getDataStore();a&&(a=a.split(":"),a[b.ANALYZE_INFORMATION_INDEX]=h(d.analyze),j.setDataStore(a.join(":")))},h=function(a){for(var b=c.getKeys(a),d=b.length,e="";d--;)e+=b[d]+"_"+a[b[d]]+(0===d?"":",");return e},i=function(a){var b,c,d,f={};if(!a)return f;for(a=a.split(","),e=0;e<a.length;e++)b=a[e].split("_"),c=b[0],d=b[1],f[c]=d;return f},j={init:function(){d.analyze=f()},includeAnalyzeCampaign:function(a){d.analyze[a]="1",g()},excludeAnalyzeCampaign:function(a){d.analyze[a]="0",g()},isAnalyzeCampaignIncluded:function(a){if("1"===d.analyze[a]||1===d.analyze[a])return"1"},isAnalyzeCampaignExcluded:function(a){return"0"===d.analyze[a]||0===d.analyze[a]}};return VWO._.commonUtil.extend(j,VWO._.commonCookieHandler),j}(b,a),c=function(a,b,c){if(window.___vwo=1,!VWO._.track.loaded){var d=VWO._.utils,e=VWO._.CampaignEnum,f=VWO._.GoalsEnum,g=VWO._.libUtils,h=VWO._.cookies,i=VWO._.EventsEnum,j=VWO._.triggerEvent,k=VWO._.commonUtil,l=VWO._.coreLib,m=VWO._.vwoLib,n=(VWO._.campaign,VWO._.listener),o=VWO._.sessionInfoService,p=VWO._.tags,q=window._vwo_acc_id,r=window._vwo_exp,s=window._vwo_exp_ids;c.FUNNEL_EXPIRY=VWO.FUNNEL_EXPIRY_CUSTOM||100;var t={setUp:function(){t.preProcessData()},init:function(){return t.initiated||g.doesUuidCookiesExist()||(h.erase(c.TRACK_SESSION_COOKIE_NAME),h.erase(c.TRACK_GLOBAL_COOKIE_NAME)),t.expireGlobalCookie(),t.expireGoals(),t.createGlobalCookieReturnEligibility()?(t.isUserBucketed()?t.startSession():j(i.RECORDING_NOT_ELIGIBLE,"USER_NOT_BUCKETED"),t.expireFunnels(k.getServerStartTimestamp(!0)),b.init(),t.initiated=!0,t.visitorRetracked=!1,!0):(j(i.RECORDING_NOT_ELIGIBLE,"URL_NOT_MATCHING"),!1)},preProcessData:function(){VWO.data.url=VWO.data.url||{},VWO.data.url.i=VWO.data.url.i||".*"},isUserEligible:function(){var a=l.compareUrlWithIncludeExcludeRegex(l.getCurrentUrl(),VWO.data.url.i,VWO.data.url.e);return a.didMatch},expireGlobalCookie:function(){t.shouldExpireGlobalCookie()&&(h.erase(c.TRACK_GLOBAL_COOKIE_NAME),h.erase(c.TRACK_SESSION_COOKIE_NAME))},getLatestSamplingVersion:function(){return window.VWO.data.pvn||c.INITIAL_PRICING_VERSION},getCpt:function(){return window.VWO.data.cpt||0},updateTrackPageId:function(){var a=t.getTrackPageId()+1;return t.markTrackPageId(a),a},getTrackPageId:function(){var a=o.getSNCookieValueByIndex(c.TRACK_PAGE_ID_INFORMATION_INDEX);return a?parseInt(a,10):0},markTrackPageId:function(a){o.setSNCookieValueByIndex(c.TRACK_PAGE_ID_INFORMATION_INDEX,a)},getCroStartTimestamp:function(){return b.getDataInfoByIndex(c.CRO_START_TIMESTAMP_INDEX)},setCroStartTimestamp:function(){var a=k.getCurrentTimestamp(!0)-o.getFirstSessionId();b.setDataInfoByIndex(c.CRO_START_TIMESTAMP_INDEX,a)},shouldExpireGlobalCookie:function(){var a,d,e=b.getDataStore(),f=b.getMetaInfoByIndex(c.TRACK_GLOBAL_COOKIE_EXPIRY_STATE_INDEX);if(e){var g=k.getServerStartTimestamp(!0);a=o.getFirstSessionId();var h=t.getCroStartTimestamp();if(d=24*c.TRACK_GLOBAL_COOKIE_EXPIRY*60*60+h+a,d<g)return!o.getSessionStore()||(f||b.setMetaInfoByIndex(c.TRACK_GLOBAL_COOKIE_EXPIRY_STATE_INDEX,1),!1);var i=t.getCpt();if(i>a)return!0;var j=t.getLatestSamplingVersion(),l=b.getMetaInfoByIndex(c.SAMPLING_VERSION_INDEX)||c.INITIAL_PRICING_VERSION;if(l<j);else if(Math.abs(l)<Math.abs(j)&&t.isUserBucketed())return!0}return!1},_markFunnelValue:function(a,b,d){this._markFeatureValue(c.FUNNEL_INFORMATION_INDEX,a,[b,d,o.getRelativeSessionId(),r[a].v])},_isFunnelValue:function(a,b,d){return this._isFeatureValue(c.FUNNEL_INFORMATION_INDEX,a,[b,d])},expireFunnels:function(a){var d,e,f,g,h,i,j=b.getDataStore(),k=o.getFirstSessionId();if(j){for(j=j.split(":"),d=j[c.FUNNEL_INFORMATION_INDEX].split(","),e=d.length;e--;)f=d[e].split("_"),g=f[0],h=+f[3]+24*c.FUNNEL_EXPIRY*60*60+k,i=+f[4],(h<a||r[g]&&r[g].v>i)&&d.splice(e,1);j[c.FUNNEL_INFORMATION_INDEX]=d.join(","),j=j.join(":"),b.setDataStore(j)}},expireGoals:function(){var a=o.getSessionStore();a&&!t.visitorRetracked||b.deleteDataStoreInfoByIndex(c.GOAL_INFORMATION_INDEX)},getSessionIdOfFunnel:function(a){var c=b.getDataStore(),d=c.match(new RegExp("[:,]"+a+"_[^_]*_._([^_]*)_[^,:]*"));return d&&d[1]?+d[1]+o.getFirstSessionId():0},_markFeatureValue:function(a,c,d,e){var f=e?b.getMetaStore():b.getDataStore(),g=f.split(":"),h=c,i=g[a],j=g.length;if(!i)for(;j<=a;)g[j]="",j++;i=g[a];var k=i.match(new RegExp("(?:^|,)("+c+"_[^,]+)"));"undefined"==typeof d&&(d=[]),d instanceof Array||(d=[d]);for(var l=0;l<d.length;l++)h+="_"+d[l];k?g[a]=g[a].replace(new RegExp("(^|,)("+c+"_[^,]+)"),"$1"+h):g[a]=g[a]+(0===g[a].length?"":",")+h,f=g.join(":"),e?b.setMetaStore(f):b.setDataStore(f)},_isFeatureValue:function(a,d,e,f){var g,h,i=f?b.getMetaStore():b.getDataStore(),j=i.split(":"),k=j[a];if("undefined"==typeof e&&(e=[]),e instanceof Array||(e=[e]),a===c.FUNNEL_INFORMATION_INDEX){g=e[1];var l=e[0];l=l||"[^_]*",g="undefined"==typeof g||null===g?".":g,h=new RegExp("(,|^)"+d+"_"+l+"_"+g)}else g=e[0],g="undefined"==typeof g||null===g?".":g,h=new RegExp("(,|^)"+d+"_"+g);return!!h.test(k)&&"1"},_markGoalValue:function(a,b){this._markFeatureValue(c.GOAL_INFORMATION_INDEX,a,b)},_isGoalValue:function(a,b){return this._isFeatureValue(c.GOAL_INFORMATION_INDEX,a,b)},isCroEnabled:function(){var a=h.get(c.TRACK_GLOBAL_COOKIE_NAME);if(!a)return!1;var d=b.getMetaStore().split(":")||[];return!(!d[c.FEATURE_BUCKET_INDEX]&&!d[c.SAMPLING_VERSION_INDEX])||void 0},createGlobalCookieReturnEligibility:function(){if(!t.isCroEnabled()){if(!t.isUserEligible())return!1;h.get(c.TRACK_GLOBAL_COOKIE_NAME)||(g.createUUIDCookie(),o.createGlobalCookie()),t.setCroStartTimestamp()}return t.markFeatureLevelBucketing(),t.setSamplingVersion(),!0},markFeatureLevelBucketing:function(){for(var a=o.getPcTraffic(),b=window._vwo_pc_custom||window.VWO.data.pc,d=k.getKeys(b),e=d.length;e--;)t._isFeatureValue(c.FEATURE_BUCKET_INDEX,d[e],null,1)||t._markFeatureValue(c.FEATURE_BUCKET_INDEX,d[e],+(a<b[d[e]]),!0)},setSamplingVersion:function(){b.setMetaInfoByIndex(c.SAMPLING_VERSION_INDEX,t.getLatestSamplingVersion())},isUserBucketed:function(){for(var a=window.VWO.data.pc,b=k.getKeys(a),c=b.length;c--;)if(t.isFeatureBucketed(b[c]))return!0},isFeatureBucketed:function(a){return!a||t._isFeatureValue(c.FEATURE_BUCKET_INDEX,a,1,!0)},excludeFunnel:function(a){t._markFunnelValue(a,0,0)},includeFunnel:function(a){t._markFunnelValue(a,0,1)},includeAnalyzeCampaign:function(a){b.includeAnalyzeCampaign(a)},excludeAnalyzeCampaign:function(a){b.excludeAnalyzeCampaign(a)},excludeGoal:function(a){t._markGoalValue(a,0)},includeGoal:function(a){t._markGoalValue(a,1)},shouldAddGoalInFunnel:function(a,d){d=parseInt(d,10);var e,f=t.getGoalIndexInFunnel(a,d);if(f<0)return!1;var g,h,i,j,k,m,n=r[a].g[0].id===d,o=b.getDataStore().split(":")[c.FUNNEL_INFORMATION_INDEX].split(",");for(g=o.length;g--;)if(h=o[g].split("_"),i=h[0],i===a){if(m=!0,j=+h[1],k=+h[2],!k)return!1;e=t.getGoalIndexInFunnel(a,j)+1===f}return n&&!m&&(l.runCampaigns({keepElementLoadedRunning:!1,expIds:[a],isManual:!0}),t.isFunnelIncluded(a)&&(e=!0)),e},getGoalIndexInFunnel:function(a,b){var c;for(c=0;c<r[a].g.length;c++)if(r[a].g[c].id===b)return c;return-1},getGoalsString:function(a){var b,c="";for(b=0;b<a.length;b++)c=c+a[b].id+("REVENUE_TRACKING"===a[b].type?"_1":"")+(b===a.length-1?"":",");return c},getGtAndF:function(a){for(var b,c,f=s.length,g={};f--;)b=s[f],r[b].type===e.FUNNEL_CAMPAIGN&&this.shouldAddGoalInFunnel(b,a)&&(t._markFunnelValue(b,a,1),g[b]=this.getGoalsString(r[b].g)+":"+t.getSessionIdOfFunnel(b));return c=k.getKeys(g),"&gt="+ +!t.isGoalTriggered(a)+"_"+c.join(",")+"&f="+d.jsonStringify(g)},startSession:function(){var a,b,d,e,f,h,k=document.URL,l="s.gif?account_id="+q+g.getUUIDString(g.createUUIDCookie()),m=1;o.isSessionInfoSynced()?(o.updateAndSyncPageId(),h=t.updateTrackPageId(),a=p.getTags(),b=p.getEgTags(),f=o.getSessionId(),m=VWO._.pageId,e=f>o.getFirstSessionId(),l=l+"&s="+f+"&p="+m,window._vis_debug||g.sendCall(l+(a?"&tags="+a:"")+(b?"&eg="+b:"")+"&update=1&cq=1")):(m=1,p.refresh(),a=p.getTags(),b=p.getEgTags(),o.getSessionStore()?(o.updateAndSyncPageId(),m=VWO._.pageId,o.setSNCookieValueByIndex(c.SESSION_SYNCED_STATE_INDEX,1)):(d=o.getRelativeSessionTimestamp(this),o.initializeSession(d+":"+m+":::1"),VWO._.pageId=m),h=t.updateTrackPageId(),f=o.getSessionId(),l=l+"&s="+f+"&p="+m,e=f>o.getFirstSessionId(),window._vis_debug||g.sendCall(l+"&ed="+g.extraData(!0)+"&cu="+encodeURIComponent(o.getInfo().cu||k)+(a?"&tags="+a:"")+(b?"&eg="+b:"")+"&r="+ +e+"&cq=1")),o.setVisitorInformation(),t.setAnalyzeServerName(),j(i.TRACK_SESSION_CREATED,f,m,e,1===h,h),o.updateSession()},setAnalyzeServerName:function(){var a=o.getSNCookieValueByIndex(c.ANALYSE_SERVER_NAME_INDEX);a?window.VWO.data.asn=a:(window.VWO.data.as&&o.setSNCookieValueByIndex(c.ANALYSE_SERVER_NAME_INDEX,window.VWO.data.as),window.VWO.data.asn=window.VWO.data.as||"dev.visualwebsiteoptimizer.com")},isGoalIncluded:function(a){return this._isGoalValue(a,1)||this._isGoalValue(a,2)},isGoalExcluded:function(a){return this._isGoalValue(a,0)},isAnalyzeCampaignExcluded:function(a){return b.isAnalyzeCampaignExcluded(a)},isAnalyzeCampaignIncluded:function(a){return b.isAnalyzeCampaignIncluded(a)},isFunnelIncluded:function(a){return t._isFunnelValue(a,void 0,1)},isFunnelExcluded:function(a){return t._isFunnelValue(a,void 0,0)},markGoalTriggered:function(a,b){var c=r[a].goals[b];t._markGoalValue(b,2),c.type===f.SEPARATE_PAGE&&(c.pageVisited=1)},isGoalTriggered:function(a){return t._isGoalValue(a,2)},shouldTriggerGoal:function(a,b){var c=r[a].goals[b],d=!1;if(t._isGoalValue(b,0))return!1;if(t._isGoalValue(b,1)&&(d=!c.pageVisited),t._isGoalValue(b,2)&&(d=!1),!c.pageVisited&&!d)for(var g,h=s.length;h--;)g=s[h],r[g].type===e.FUNNEL_CAMPAIGN&&this.shouldAddGoalInFunnel(g,b)&&(d=!0);return c.type===f.SEPARATE_PAGE&&(c.pageVisited=!0),d},loaded:!0,initiated:!1};k.extend(VWO._.track,t),t=VWO._.track;var u,v,w=function(){(3!==VWO.data.tcVersion||u)&&(t.setUp(),t.init()&&l.runCampaigns({keepElementLoadedRunning:!1,expIds:k.filter(s,function(a){return g.isSessionBasedCampaign(a)}),isManual:!1}))},x=function(){(3!==VWO.data.tcVersion||u)&&v&&(t.initiated||(w(),m.init("track")))};n.onEventReceive(i.POST_URL_CHANGE,w),n.onEventReceive(i.RETRACK_VISITOR,function(){t.visitorRetracked=!0,t.init(),l.runCampaigns(!1,k.filter(s,function(a){return g.isSessionBasedCampaign(a)&&((window._vwo_exp[a].combination_chosen=void 0)||1)})),t.visitorRetracked=!1}),n.onEventReceive(i.NEW_SESSION_CREATED,function(){t.visitorRetracked=!0}),n.onEventReceive(i.NOT_REDIRECTING,function(){v||(v=!0,x())}),n.onEventReceive(i.UPDATE_SETTINGS_CALL,function(){u||(u=!0,x())})}return t}(c,b,a)}()})}();