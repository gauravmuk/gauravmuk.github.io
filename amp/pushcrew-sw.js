!function() {
    var jstz, tslib, IndexedDb = {}, detectBrowser = {}, amp = {};
    jstz = function() {
        var a = function() {
            'use strict';
            var i = function(a) {
                var i = -a.getTimezoneOffset();
                return null !== i ? i : 0;
            }, e = function(a, i, e) {
                var r = new Date();
                return void 0 !== a && r.setFullYear(a), r.setDate(e), r.setMonth(i), r;
            }, r = function(a) {
                return i(e(a, 0, 2));
            }, n = function(a) {
                return i(e(a, 5, 2));
            }, t = function() {
                var a = r(), i = n(), e = r() - n();
                return e < 0 ? a + ',1' : e > 0 ? i + ',1,s' : a + ',0';
            };
            return {
                determine: function() {
                    var i = t();
                    return new a.TimeZone(a.olson.timezones[i]);
                },
                date_is_dst: function(a) {
                    return (a.getMonth() > 7 ? n(a.getFullYear()) : r(a.getFullYear())) - i(a) != 0;
                },
                dst_start_for: function(a) {
                    var i = new Date(2010, 6, 15, 1, 0, 0, 0);
                    return {
                        'America/Denver': new Date(2011, 2, 13, 3, 0, 0, 0),
                        'America/Mazatlan': new Date(2011, 3, 3, 3, 0, 0, 0),
                        'America/Chicago': new Date(2011, 2, 13, 3, 0, 0, 0),
                        'America/Mexico_City': new Date(2011, 3, 3, 3, 0, 0, 0),
                        'America/Asuncion': new Date(2012, 9, 7, 3, 0, 0, 0),
                        'America/Santiago': new Date(2012, 9, 3, 3, 0, 0, 0),
                        'America/Campo_Grande': new Date(2012, 9, 21, 5, 0, 0, 0),
                        'America/Montevideo': new Date(2011, 9, 2, 3, 0, 0, 0),
                        'America/Sao_Paulo': new Date(2011, 9, 16, 5, 0, 0, 0),
                        'America/Los_Angeles': new Date(2011, 2, 13, 8, 0, 0, 0),
                        'America/Santa_Isabel': new Date(2011, 3, 5, 8, 0, 0, 0),
                        'America/Havana': new Date(2012, 2, 10, 2, 0, 0, 0),
                        'America/New_York': new Date(2012, 2, 10, 7, 0, 0, 0),
                        'Asia/Beirut': new Date(2011, 2, 27, 1, 0, 0, 0),
                        'Europe/Helsinki': new Date(2011, 2, 27, 4, 0, 0, 0),
                        'Europe/Istanbul': new Date(2011, 2, 28, 5, 0, 0, 0),
                        'Asia/Damascus': new Date(2011, 3, 1, 2, 0, 0, 0),
                        'Asia/Jerusalem': new Date(2011, 3, 1, 6, 0, 0, 0),
                        'Asia/Gaza': new Date(2009, 2, 28, 0, 30, 0, 0),
                        'Africa/Cairo': new Date(2009, 3, 25, 0, 30, 0, 0),
                        'Pacific/Auckland': new Date(2011, 8, 26, 7, 0, 0, 0),
                        'Pacific/Fiji': new Date(2010, 11, 29, 23, 0, 0, 0),
                        'America/Halifax': new Date(2011, 2, 13, 6, 0, 0, 0),
                        'America/Goose_Bay': new Date(2011, 2, 13, 2, 1, 0, 0),
                        'America/Miquelon': new Date(2011, 2, 13, 5, 0, 0, 0),
                        'America/Godthab': new Date(2011, 2, 27, 1, 0, 0, 0),
                        'Europe/Moscow': i,
                        'Asia/Yekaterinburg': i,
                        'Asia/Omsk': i,
                        'Asia/Krasnoyarsk': i,
                        'Asia/Irkutsk': i,
                        'Asia/Yakutsk': i,
                        'Asia/Vladivostok': i,
                        'Asia/Kamchatka': i,
                        'Europe/Minsk': i,
                        'Australia/Perth': new Date(2008, 10, 1, 1, 0, 0, 0)
                    }[a];
                }
            };
        }();
        return a.TimeZone = function(i) {
            'use strict';
            var e = {
                'America/Denver': [ 'America/Denver', 'America/Mazatlan' ],
                'America/Chicago': [ 'America/Chicago', 'America/Mexico_City' ],
                'America/Santiago': [ 'America/Santiago', 'America/Asuncion', 'America/Campo_Grande' ],
                'America/Montevideo': [ 'America/Montevideo', 'America/Sao_Paulo' ],
                'Asia/Beirut': [ 'Asia/Beirut', 'Europe/Helsinki', 'Europe/Istanbul', 'Asia/Damascus', 'Asia/Jerusalem', 'Asia/Gaza' ],
                'Pacific/Auckland': [ 'Pacific/Auckland', 'Pacific/Fiji' ],
                'America/Los_Angeles': [ 'America/Los_Angeles', 'America/Santa_Isabel' ],
                'America/New_York': [ 'America/Havana', 'America/New_York' ],
                'America/Halifax': [ 'America/Goose_Bay', 'America/Halifax' ],
                'America/Godthab': [ 'America/Miquelon', 'America/Godthab' ],
                'Asia/Dubai': [ 'Europe/Moscow' ],
                'Asia/Dhaka': [ 'Asia/Yekaterinburg' ],
                'Asia/Jakarta': [ 'Asia/Omsk' ],
                'Asia/Shanghai': [ 'Asia/Krasnoyarsk', 'Australia/Perth' ],
                'Asia/Tokyo': [ 'Asia/Irkutsk' ],
                'Australia/Brisbane': [ 'Asia/Yakutsk' ],
                'Pacific/Noumea': [ 'Asia/Vladivostok' ],
                'Pacific/Tarawa': [ 'Asia/Kamchatka' ],
                'Africa/Johannesburg': [ 'Asia/Gaza', 'Africa/Cairo' ],
                'Asia/Baghdad': [ 'Europe/Minsk' ]
            }, r = i;
            return void 0 !== e[r] && function() {
                for (var i = e[r], n = i.length, t = 0, c = i[0]; t < n; t += 1) if (c = i[t], a.date_is_dst(a.dst_start_for(c))) return void (r = c);
            }(), {
                name: function() {
                    return r;
                }
            };
        }, a.olson = {}, a.olson.timezones = {
            '-720,0': 'Etc/GMT+12',
            '-660,0': 'Pacific/Pago_Pago',
            '-600,1': 'America/Adak',
            '-600,0': 'Pacific/Honolulu',
            '-570,0': 'Pacific/Marquesas',
            '-540,0': 'Pacific/Gambier',
            '-540,1': 'America/Anchorage',
            '-480,1': 'America/Los_Angeles',
            '-480,0': 'Pacific/Pitcairn',
            '-420,0': 'America/Phoenix',
            '-420,1': 'America/Denver',
            '-360,0': 'America/Guatemala',
            '-360,1': 'America/Chicago',
            '-360,1,s': 'Pacific/Easter',
            '-300,0': 'America/Bogota',
            '-300,1': 'America/New_York',
            '-270,0': 'America/Caracas',
            '-240,1': 'America/Halifax',
            '-240,0': 'America/Santo_Domingo',
            '-240,1,s': 'America/Santiago',
            '-210,1': 'America/St_Johns',
            '-180,1': 'America/Godthab',
            '-180,0': 'America/Argentina/Buenos_Aires',
            '-180,1,s': 'America/Montevideo',
            '-120,0': 'Etc/GMT+2',
            '-120,1': 'Etc/GMT+2',
            '-60,1': 'Atlantic/Azores',
            '-60,0': 'Atlantic/Cape_Verde',
            '0,0': 'Etc/UTC',
            '0,1': 'Europe/London',
            '60,1': 'Europe/Berlin',
            '60,0': 'Africa/Lagos',
            '60,1,s': 'Africa/Windhoek',
            '120,1': 'Asia/Beirut',
            '120,0': 'Africa/Johannesburg',
            '180,0': 'Asia/Baghdad',
            '180,1': 'Europe/Moscow',
            '210,1': 'Asia/Tehran',
            '240,0': 'Asia/Dubai',
            '240,1': 'Asia/Baku',
            '270,0': 'Asia/Kabul',
            '300,1': 'Asia/Yekaterinburg',
            '300,0': 'Asia/Karachi',
            '330,0': 'Asia/Kolkata',
            '345,0': 'Asia/Kathmandu',
            '360,0': 'Asia/Dhaka',
            '360,1': 'Asia/Omsk',
            '390,0': 'Asia/Rangoon',
            '420,1': 'Asia/Krasnoyarsk',
            '420,0': 'Asia/Jakarta',
            '480,0': 'Asia/Shanghai',
            '480,1': 'Asia/Irkutsk',
            '525,0': 'Australia/Eucla',
            '525,1,s': 'Australia/Eucla',
            '540,1': 'Asia/Yakutsk',
            '540,0': 'Asia/Tokyo',
            '570,0': 'Australia/Darwin',
            '570,1,s': 'Australia/Adelaide',
            '600,0': 'Australia/Brisbane',
            '600,1': 'Asia/Vladivostok',
            '600,1,s': 'Australia/Sydney',
            '630,1,s': 'Australia/Lord_Howe',
            '660,1': 'Asia/Kamchatka',
            '660,0': 'Pacific/Noumea',
            '690,0': 'Pacific/Norfolk',
            '720,1,s': 'Pacific/Auckland',
            '720,0': 'Pacific/Tarawa',
            '765,1,s': 'Pacific/Chatham',
            '780,0': 'Pacific/Tongatapu',
            '780,1,s': 'Pacific/Apia',
            '840,0': 'Pacific/Kiritimati'
        }, a;
    }(), tslib = function() {
        var __awaiter, __generator;
        return __awaiter = function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : new P(function(resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }, __generator = function(thisArg, body) {
            function verb(n) {
                return function(v) {
                    return step([ n, v ]);
                };
            }
            function step(op) {
                if (f) throw new TypeError('Generator is already executing.');
                for (;_; ) try {
                    if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y),
                        0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;

                        case 4:
                            return _.label++, {
                                value: op[1],
                                done: !1
                            };

                        case 5:
                            _.label++, y = op[1], op = [ 0 ];
                            continue;

                        case 7:
                            op = _.ops.pop(), _.trys.pop();
                            continue;

                        default:
                            if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                _ = 0;
                                continue;
                            }
                            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (6 === op[0] && _.label < t[1]) {
                                _.label = t[1], t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2], _.ops.push(op);
                                break;
                            }
                            t[2] && _.ops.pop(), _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [ 6, e ], y = 0;
                } finally {
                    f = t = 0;
                }
                if (5 & op[0]) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: !0
                };
            }
            var f, y, t, g, _ = {
                label: 0,
                sent: function() {
                    if (1 & t[0]) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, 'function' == typeof Symbol && (g[Symbol.iterator] = function() {
                return this;
            }), g;
        }, {
            __awaiter: __awaiter,
            __generator: __generator
        };
    }(), IndexedDb = function(exports, tslib_1) {
        function log(text) {
            0;
        }
        var ErrorCodes;
        !function(ErrorCodes) {
            ErrorCodes[ErrorCodes.DB_BLOCKED_ERR = 0] = 'DB_BLOCKED_ERR', ErrorCodes[ErrorCodes.DB_OPEN_ERR = 1] = 'DB_OPEN_ERR',
                ErrorCodes[ErrorCodes.INDEXED_DB_NOT_SUPPORTED = 2] = 'INDEXED_DB_NOT_SUPPORTED',
                ErrorCodes[ErrorCodes.DB_DELETE_ERR = 3] = 'DB_DELETE_ERR', ErrorCodes[ErrorCodes.RECORD_NOT_FOUND = 4] = 'RECORD_NOT_FOUND',
                ErrorCodes[ErrorCodes.PUT_REQUEST_ERR = 5] = 'PUT_REQUEST_ERR', ErrorCodes[ErrorCodes.PUT_FAILED = 6] = 'PUT_FAILED';
        }(ErrorCodes || (ErrorCodes = {}));
        var IndexedDb = function() {
            function IndexedDb(databaseName, objectStores) {
                var _this = this;
                this.databaseName = databaseName, this.objectStores = objectStores, this.openAndGetDataBase = function() {
                    return tslib_1.__awaiter(_this, void 0, void 0, function() {
                        var err_1;
                        return tslib_1.__generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    IndexedDb.isDatabaseOpen[this.databaseName] || (IndexedDb.isDatabaseOpen[this.databaseName] = this.openDatabase(this.databaseName)),
                                        _a.label = 1;

                                case 1:
                                    return _a.trys.push([ 1, 3, , 4 ]), [ 4, IndexedDb.isDatabaseOpen[this.databaseName] ];

                                case 2:
                                    return _a.sent(), [ 3, 4 ];

                                case 3:
                                    throw err_1 = _a.sent();

                                case 4:
                                    return [ 2, this.database ];
                            }
                        });
                    });
                }, this.onDatabaseUpgradeNeeded = function(event) {
                    for (var db = event.target.result, _i = 0, _a = Object.keys(_this.objectStores); _i < _a.length; _i++) {
                        var objectStoreName = _a[_i];
                        db.createObjectStore(objectStoreName, {
                            keyPath: _this.objectStores[objectStoreName]
                        });
                    }
                }, this.deleteDb = function() {
                    return tslib_1.__awaiter(_this, void 0, void 0, function() {
                        var _this = this;
                        return tslib_1.__generator(this, function(_a) {
                            return [ 2, new Promise(function(resolve, reject) {
                                var dbDeleteRequest = indexedDB.deleteDatabase(_this.databaseName);
                                dbDeleteRequest.onerror = function(event) {
                                    reject(ErrorCodes.DB_DELETE_ERR);
                                }, dbDeleteRequest.onsuccess = function(event) {
                                    resolve();
                                };
                            }) ];
                        });
                    });
                }, this.closeDb = function() {
                    return tslib_1.__awaiter(_this, void 0, void 0, function() {
                        return tslib_1.__generator(this, function(_a) {
                            try {
                                this.database.close();
                            } catch (e) {}
                            return IndexedDb.isDatabaseOpen[this.databaseName] = null, [ 2 ];
                        });
                    });
                }, indexedDB && 'object' == typeof indexedDB ? this.isIndexedDbSupported = !0 : this.isIndexedDbSupported = !1;
            }
            return IndexedDb.prototype.openDatabase = function(databaseName) {
                var _this = this;
                return new Promise(function(resolve, reject) {
                    var request = indexedDB.open(databaseName, 1);
                    if (!request) return null;
                    request.onerror = _this.onDatabaseOpenError.bind(_this, reject), request.onblocked = _this.onDatabaseOpenBlocked.bind(_this, reject),
                        request.onupgradeneeded = _this.onDatabaseUpgradeNeeded, request.onsuccess = function() {
                        _this.database = request.result, _this.database.onerror = _this.onDatabaseError,
                            _this.database.onversionchange = _this.onDatabaseVersionChange, resolve(_this.database);
                    };
                });
            }, IndexedDb.prototype.onDatabaseOpenError = function(reject, event) {
                event.preventDefault();
                var errorMessage = event.target.error.message;
                log('IndexedDb open error: ' + errorMessage), reject(ErrorCodes.DB_OPEN_ERR);
            }, IndexedDb.prototype.onDatabaseError = function(event) {
                log('IndexedDb error : ' + event.target.errorCode);
            }, IndexedDb.prototype.onDatabaseOpenBlocked = function(reject) {
                log('IndexedDb blocked'), reject(ErrorCodes.DB_BLOCKED_ERR);
            }, IndexedDb.prototype.onDatabaseVersionChange = function() {
                log('IndexedDb version changed');
            }, IndexedDb.prototype.get = function(table, key) {
                return tslib_1.__awaiter(this, void 0, void 0, function() {
                    var err_2, _this = this;
                    return tslib_1.__generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.isIndexedDbSupported) throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
                                _a.label = 1;

                            case 1:
                                return _a.trys.push([ 1, 3, , 4 ]), [ 4, this.openAndGetDataBase() ];

                            case 2:
                                return _a.sent(), [ 3, 4 ];

                            case 3:
                                throw err_2 = _a.sent();

                            case 4:
                                return [ 2, new Promise(function(resolve, reject) {
                                    var transaction = _this.database.transaction(table), request = transaction.objectStore(table).get(key);
                                    request.onsuccess = function() {
                                        resolve(request.result);
                                    }, request.onerror = function() {
                                        log('IndexedDb - Record not found in DB'), reject(ErrorCodes.RECORD_NOT_FOUND);
                                    }, transaction.oncomplete = _this.closeDb, transaction.onerror = _this.closeDb,
                                        transaction.onabort = _this.closeDb;
                                }) ];
                        }
                    });
                });
            }, IndexedDb.prototype.put = function(table, record) {
                return tslib_1.__awaiter(this, void 0, void 0, function() {
                    var err_3, err_4, _this = this;
                    return tslib_1.__generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                if (!this.isIndexedDbSupported) throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
                                _a.label = 1;

                            case 1:
                                return _a.trys.push([ 1, 3, , 4 ]), [ 4, this.deleteDb() ];

                            case 2:
                                return _a.sent(), [ 3, 4 ];

                            case 3:
                                throw err_3 = _a.sent();

                            case 4:
                                return _a.trys.push([ 4, 6, , 7 ]), [ 4, this.openAndGetDataBase() ];

                            case 5:
                                return _a.sent(), [ 3, 7 ];

                            case 6:
                                throw err_4 = _a.sent();

                            case 7:
                                return [ 2, new Promise(function(resolve, reject) {
                                    try {
                                        var transaction = _this.database.transaction([ table ], 'readwrite'), request = transaction.objectStore(table).put(record);
                                        request.onsuccess = function() {
                                            log('IndexedDb insert success'), resolve();
                                        }, request.onerror = function() {
                                            log('IndexedDb insert failed'), reject(ErrorCodes.PUT_REQUEST_ERR);
                                        }, transaction.oncomplete = _this.closeDb, transaction.onerror = _this.closeDb,
                                            transaction.onabort = _this.closeDb;
                                    } catch (e) {
                                        log('IndexedDb insert failed'), reject(ErrorCodes.PUT_FAILED), _this.closeDb();
                                    }
                                }) ];
                        }
                    });
                });
            }, IndexedDb.prototype.remove = function(table, key) {
                var _this = this;
                return new Promise(function(resolve, reject) {
                    try {
                        var request = _this.database.transaction([ table ], 'readwrite').objectStore(table).delete(key);
                        request.onsuccess = function() {
                            log('IndexedDb remove success'), resolve();
                        }, request.onerror = function() {
                            log('IndexedDb remove failed'), reject();
                        };
                    } catch (e) {
                        log('IndexedDb remove failed'), reject(e);
                    }
                });
            }, IndexedDb.isDatabaseOpen = {}, IndexedDb;
        }();
        return IndexedDb;
    }(0, tslib), function(e, t) {
        'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define('bowser', [], t) : 'object' == typeof exports ? exports.bowser = t() : self.bowser = t();
    }(0, function() {
        return function(e) {
            function r(n) {
                if (t[n]) return t[n].exports;
                var i = t[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
            }
            var t = {};
            return r.m = e, r.c = t, r.d = function(e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                });
            }, r.r = function(e) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module'
                }), Object.defineProperty(e, '__esModule', {
                    value: !0
                });
            }, r.t = function(e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: e
                }), 2 & t && 'string' != typeof e) for (var i in e) r.d(n, i, function(t) {
                    return e[t];
                }.bind(null, i));
                return n;
            }, r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return r.d(t, 'a', t), t;
            }, r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, r.p = '', r(r.s = 86);
        }({
            17: function(e, t, r) {
                var n, i, s;
                i = [], void 0 === (s = 'function' == typeof (n = function() {
                    'use strict';
                    function t(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    var r = function() {
                        function e() {
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                            }(this, e);
                        }
                        return r = e, i = [ {
                            key: 'getFirstMatch',
                            value: function(e, t) {
                                var r = t.match(e);
                                return r && r.length > 0 && r[1] || '';
                            }
                        }, {
                            key: 'getSecondMatch',
                            value: function(e, t) {
                                var r = t.match(e);
                                return r && r.length > 1 && r[2] || '';
                            }
                        }, {
                            key: 'matchAndReturnConst',
                            value: function(e, t, r) {
                                if (e.test(t)) return r;
                            }
                        }, {
                            key: 'getWindowsVersionName',
                            value: function(e) {
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
                            }
                        }, {
                            key: 'getAndroidVersionName',
                            value: function(e) {
                                var t = e.split('.').splice(0, 2).map(function(e) {
                                    return parseInt(e, 10) || 0;
                                });
                                if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? 'Cupcake' : 1 === t[0] && t[1] >= 6 ? 'Donut' : 2 === t[0] && t[1] < 2 ? 'Eclair' : 2 === t[0] && 2 === t[1] ? 'Froyo' : 2 === t[0] && t[1] > 2 ? 'Gingerbread' : 3 === t[0] ? 'Honeycomb' : 4 === t[0] && t[1] < 1 ? 'Ice Cream Sandwich' : 4 === t[0] && t[1] < 4 ? 'Jelly Bean' : 4 === t[0] && t[1] >= 4 ? 'KitKat' : 5 === t[0] ? 'Lollipop' : 6 === t[0] ? 'Marshmallow' : 7 === t[0] ? 'Nougat' : 8 === t[0] ? 'Oreo' : void 0;
                            }
                        }, {
                            key: 'getVersionPrecision',
                            value: function(e) {
                                return e.split('.').length;
                            }
                        }, {
                            key: 'compareVersions',
                            value: function(t, r) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = e.getVersionPrecision(t), s = e.getVersionPrecision(r), o = Math.max(i, s), a = 0, u = e.map([ t, r ], function(t) {
                                    var r = o - e.getVersionPrecision(t), n = t + new Array(r + 1).join('.0');
                                    return e.map(n.split('.'), function(e) {
                                        return new Array(20 - e.length).join('0') + e;
                                    }).reverse();
                                });
                                for (n && (a = o - Math.min(i, s)), o -= 1; o >= a; ) {
                                    if (u[0][o] > u[1][o]) return 1;
                                    if (u[0][o] === u[1][o]) {
                                        if (o === a) return 0;
                                        o -= 1;
                                    } else if (u[0][o] < u[1][o]) return -1;
                                }
                            }
                        }, {
                            key: 'map',
                            value: function(e, t) {
                                var r, n = [];
                                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                return n;
                            }
                        } ], (n = null) && t(r.prototype, n), i && t(r, i), e;
                        var r, n, i;
                    }();
                    e.exports = r;
                }) ? n.apply(t, i) : n) || (e.exports = s);
            },
            86: function(e, t, r) {
                var n, i, s;
                i = [ t, r(87) ], void 0 === (s = 'function' == typeof (n = function(r, n) {
                    'use strict';
                    function i(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    var s;
                    Object.defineProperty(r, '__esModule', {
                        value: !0
                    }), r.default = void 0, n = (s = n) && s.__esModule ? s : {
                        default: s
                    };
                    var o = function() {
                        function e() {
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                            }(this, e);
                        }
                        return t = e, s = [ {
                            key: 'getParser',
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if ('string' != typeof e) throw new Error('UserAgent should be a string');
                                return new n.default(e, t);
                            }
                        }, {
                            key: 'parse',
                            value: function(e) {
                                return new n.default(e).getResult();
                            }
                        } ], (r = null) && i(t.prototype, r), s && i(t, s), e;
                        var t, r, s;
                    }();
                    r.default = o, e.exports = t.default;
                }) ? n.apply(t, i) : n) || (e.exports = s);
            },
            87: function(e, t, r) {
                var n, i, s;
                i = [ t, r(88), r(89), r(90), r(91), r(17) ], void 0 === (s = 'function' == typeof (n = function(r, n, i, s, o, a) {
                    'use strict';
                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    function c(e) {
                        return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                        })(e);
                    }
                    function d(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    Object.defineProperty(r, '__esModule', {
                        value: !0
                    }), r.default = void 0, n = u(n), i = u(i), s = u(s), o = u(o);
                    var f = function() {
                        function e(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                            }(this, e), null == t || '' === t) throw new Error('UserAgent parameter can\'t be empty');
                            this._ua = t, this.parsedResult = {}, !0 !== r && this.parse();
                        }
                        return t = e, (r = [ {
                            key: 'getUA',
                            value: function() {
                                return this._ua;
                            }
                        }, {
                            key: 'test',
                            value: function(e) {
                                return e.test(this._ua);
                            }
                        }, {
                            key: 'parseBrowser',
                            value: function() {
                                var e = this;
                                this.parsedResult.browser = {};
                                var t = n.default.find(function(t) {
                                    if ('function' == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t);
                                    });
                                    throw new Error('Browser\'s test function is not valid');
                                });
                                return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
                            }
                        }, {
                            key: 'getBrowser',
                            value: function() {
                                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
                            }
                        }, {
                            key: 'getBrowserName',
                            value: function(e) {
                                return e ? String(this.getBrowser().name).toLowerCase() || '' : this.getBrowser().name || '';
                            }
                        }, {
                            key: 'getBrowserVersion',
                            value: function() {
                                return this.getBrowser().version;
                            }
                        }, {
                            key: 'getOS',
                            value: function() {
                                return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
                            }
                        }, {
                            key: 'parseOS',
                            value: function() {
                                var e = this;
                                this.parsedResult.os = {};
                                var t = i.default.find(function(t) {
                                    if ('function' == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t);
                                    });
                                    throw new Error('Browser\'s test function is not valid');
                                });
                                return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
                            }
                        }, {
                            key: 'getOSName',
                            value: function(e) {
                                var t = this.getOS(), r = t.name;
                                return e ? String(r).toLowerCase() || '' : r || '';
                            }
                        }, {
                            key: 'getOSVersion',
                            value: function() {
                                return this.getOS().version;
                            }
                        }, {
                            key: 'getPlatform',
                            value: function() {
                                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
                            }
                        }, {
                            key: 'getPlatformType',
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = this.getPlatform(), r = t.type;
                                return e ? String(r).toLowerCase() || '' : r || '';
                            }
                        }, {
                            key: 'parsePlatform',
                            value: function() {
                                var e = this;
                                this.parsedResult.platform = {};
                                var t = s.default.find(function(t) {
                                    if ('function' == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t);
                                    });
                                    throw new Error('Browser\'s test function is not valid');
                                });
                                return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
                            }
                        }, {
                            key: 'getEngine',
                            value: function() {
                                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
                            }
                        }, {
                            key: 'getEngineName',
                            value: function(e) {
                                return e ? String(this.getEngine().name).toLowerCase() || '' : this.getEngine().name || '';
                            }
                        }, {
                            key: 'parseEngine',
                            value: function() {
                                var e = this;
                                this.parsedResult.engine = {};
                                var t = o.default.find(function(t) {
                                    if ('function' == typeof t.test) return t.test(e);
                                    if (t.test instanceof Array) return t.test.some(function(t) {
                                        return e.test(t);
                                    });
                                    throw new Error('Browser\'s test function is not valid');
                                });
                                return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
                            }
                        }, {
                            key: 'parse',
                            value: function() {
                                return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(),
                                    this;
                            }
                        }, {
                            key: 'getResult',
                            value: function() {
                                return Object.assign({}, this.parsedResult);
                            }
                        }, {
                            key: 'satisfies',
                            value: function(e) {
                                var t = this, r = {}, n = 0, i = {}, s = 0, o = Object.keys(e);
                                if (o.forEach(function(t) {
                                    var o = e[t];
                                    'string' == typeof o ? (i[t] = o, s += 1) : 'object' === c(o) && (r[t] = o, n += 1);
                                }), n > 0) {
                                    var a = Object.keys(r), u = a.find(function(e) {
                                        return t.isOS(e);
                                    });
                                    if (u) {
                                        var d = this.satisfies(r[u]);
                                        if (void 0 !== d) return d;
                                    }
                                    var f = a.find(function(e) {
                                        return t.isPlatform(e);
                                    });
                                    if (f) {
                                        var l = this.satisfies(r[f]);
                                        if (void 0 !== l) return l;
                                    }
                                }
                                if (s > 0) {
                                    var v = Object.keys(i), p = v.find(function(e) {
                                        return t.isBrowser(e);
                                    });
                                    if (void 0 !== p) return this.compareVersion(i[p]);
                                }
                            }
                        }, {
                            key: 'isBrowser',
                            value: function(e) {
                                return this.getBrowserName(!0) === String(e).toLowerCase();
                            }
                        }, {
                            key: 'compareVersion',
                            value: function(e) {
                                var t = [ 0 ], r = e, n = !1, i = this.getBrowserVersion();
                                if ('string' == typeof i) return '>' === e[0] || '<' === e[0] ? (r = e.substr(1),
                                    '=' === e[1] ? (n = !0, r = e.substr(2)) : t = [], '>' === e[0] ? t.push(1) : t.push(-1)) : '=' === e[0] ? r = e.substr(1) : '~' === e[0] && (n = !0,
                                    r = e.substr(1)), t.indexOf((0, a.compareVersions)(i, r, n)) > -1;
                            }
                        }, {
                            key: 'isOS',
                            value: function(e) {
                                return this.getOSName(!0) === String(e).toLowerCase();
                            }
                        }, {
                            key: 'isPlatform',
                            value: function(e) {
                                return this.getPlatformType(!0) === String(e).toLowerCase();
                            }
                        }, {
                            key: 'isEngine',
                            value: function(e) {
                                return this.getEngineName(!0) === String(e).toLowerCase();
                            }
                        }, {
                            key: 'is',
                            value: function(e) {
                                return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e);
                            }
                        }, {
                            key: 'some',
                            value: function() {
                                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                return t.some(function(t) {
                                    return e.is(t);
                                });
                            }
                        } ]) && d(t.prototype, r), u && d(t, u), e;
                        var t, r, u;
                    }();
                    r.default = f, e.exports = t.default;
                }) ? n.apply(t, i) : n) || (e.exports = s);
            },
            88: function(e, t, r) {
                var n, i, s;
                i = [ t, r(17) ], void 0 === (s = 'function' == typeof (n = function(r, n) {
                    'use strict';
                    Object.defineProperty(r, '__esModule', {
                        value: !0
                    }), r.default = void 0;
                    var i = /version\/(\d+(\.?_?\d+)+)/i, s = [ {
                        test: [ /googlebot/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Googlebot'
                            }, r = (0, n.getFirstMatch)(/googlebot\/(\d+(\.\d+))/i, e) || (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /opera/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Opera'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:opera)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /opr\/|opios/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Opera'
                            }, r = (0, n.getFirstMatch)(/(?:opr|opios)[\s\/](\S+)/i, e) || (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /SamsungBrowser/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Samsung Internet for Android'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:SamsungBrowser)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /Whale/i ],
                        describe: function(e) {
                            var t = {
                                name: 'NAVER Whale Browser'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /MZBrowser/i ],
                        describe: function(e) {
                            var t = {
                                name: 'MZ Browser'
                            }, r = (0, n.getFirstMatch)(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i, e) || (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /focus/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Focus'
                            }, r = (0, n.getFirstMatch)(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i, e) || (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /swing/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Swing'
                            }, r = (0, n.getFirstMatch)(/(?:swing)[\s\/](\d+(?:\.\d+)+)/i, e) || (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /coast/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Opera Coast'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:coast)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /yabrowser/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Yandex Browser'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:yabrowser)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /ucbrowser/i ],
                        describe: function(e) {
                            var t = {
                                name: 'UC Browser'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:ucbrowser)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /Maxthon|mxios/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Maxthon'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:Maxthon|mxios)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /epiphany/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Epiphany'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:epiphany)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /puffin/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Puffin'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:puffin)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /sleipnir/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Sleipnir'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:sleipnir)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /k-meleon/i ],
                        describe: function(e) {
                            var t = {
                                name: 'K-Meleon'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/(?:k-meleon)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /micromessenger/i ],
                        describe: function(e) {
                            var t = {
                                name: 'WeChat'
                            }, r = (0, n.getFirstMatch)(/(?:micromessenger)[\s\/](\d+(\.?_?\d+)+)/i, e) || (0,
                                n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /msie|trident/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Internet Explorer'
                            }, r = (0, n.getFirstMatch)(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /edg([ea]|ios)/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Microsoft Edge'
                            }, r = (0, n.getSecondMatch)(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /vivaldi/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Vivaldi'
                            }, r = (0, n.getFirstMatch)(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /seamonkey/i ],
                        describe: function(e) {
                            var t = {
                                name: 'SeaMonkey'
                            }, r = (0, n.getFirstMatch)(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /sailfish/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Sailfish'
                            }, r = (0, n.getFirstMatch)(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /silk/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Amazon Silk'
                            }, r = (0, n.getFirstMatch)(/silk\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /phantom/i ],
                        describe: function(e) {
                            var t = {
                                name: 'PhantomJS'
                            }, r = (0, n.getFirstMatch)(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /slimerjs/i ],
                        describe: function(e) {
                            var t = {
                                name: 'SlimerJS'
                            }, r = (0, n.getFirstMatch)(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /blackberry|\bbb\d+/i, /rim\stablet/i ],
                        describe: function(e) {
                            var t = {
                                name: 'BlackBerry'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /(web|hpw)[o0]s/i ],
                        describe: function(e) {
                            var t = {
                                name: 'WebOS Browser'
                            }, r = (0, n.getFirstMatch)(i, e) || (0, n.getFirstMatch)(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /bada/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Bada'
                            }, r = (0, n.getFirstMatch)(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /tizen/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Tizen'
                            }, r = (0, n.getFirstMatch)(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || (0,
                                n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /qupzilla/i ],
                        describe: function(e) {
                            var t = {
                                name: 'QupZilla'
                            }, r = (0, n.getFirstMatch)(/(?:qupzilla)[\s\/](\d+(\.?_?\d+)+)/i, e) || (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /firefox|iceweasel|fxios/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Firefox'
                            }, r = (0, n.getFirstMatch)(/(?:firefox|iceweasel|fxios)[\s\/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /chromium/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Chromium'
                            }, r = (0, n.getFirstMatch)(/(?:chromium)[\s\/](\d+(\.?_?\d+)+)/i, e) || (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /chrome|crios|crmo/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Chrome'
                            }, r = (0, n.getFirstMatch)(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: function(e) {
                            var t = !e.test(/like android/i), r = e.test(/android/i);
                            return t && r;
                        },
                        describe: function(e) {
                            var t = {
                                name: 'Android Browser'
                            }, r = (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /safari|applewebkit/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Safari'
                            }, r = (0, n.getFirstMatch)(i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /.*/i ],
                        describe: function(e) {
                            return {
                                name: (0, n.getFirstMatch)(/^(.*)\/(.*) /, e),
                                version: (0, n.getSecondMatch)(/^(.*)\/(.*) /, e)
                            };
                        }
                    } ];
                    r.default = s, e.exports = t.default;
                }) ? n.apply(t, i) : n) || (e.exports = s);
            },
            89: function(e, t, r) {
                var n, i, s;
                i = [ t, r(17) ], void 0 === (s = 'function' == typeof (n = function(r, n) {
                    'use strict';
                    Object.defineProperty(r, '__esModule', {
                        value: !0
                    }), r.default = void 0;
                    var i = [ {
                        test: [ /windows phone/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                            return {
                                name: 'Windows Phone',
                                version: t
                            };
                        }
                    }, {
                        test: [ /windows/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), r = (0, n.getWindowsVersionName)(t);
                            return {
                                name: 'Windows',
                                version: t,
                                versionName: r
                            };
                        }
                    }, {
                        test: [ /macintosh/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, '.');
                            return {
                                name: 'macOS',
                                version: t
                            };
                        }
                    }, {
                        test: [ /(ipod|iphone|ipad)/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, '.');
                            return {
                                name: 'iOS',
                                version: t
                            };
                        }
                    }, {
                        test: function(e) {
                            var t = !e.test(/like android/i), r = e.test(/android/i);
                            return t && r;
                        },
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/android[\s\/-](\d+(\.\d+)*)/i, e), r = (0, n.getAndroidVersionName)(t), i = {
                                name: 'Android',
                                version: t
                            };
                            return r && (i.versionName = r), i;
                        }
                    }, {
                        test: [ /(web|hpw)[o0]s/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), r = {
                                name: 'WebOS'
                            };
                            return t && t.length && (r.version = t), r;
                        }
                    }, {
                        test: [ /blackberry|\bbb\d+/i, /rim\stablet/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || (0, n.getFirstMatch)(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || (0,
                                n.getFirstMatch)(/\bbb(\d+)/i, e);
                            return {
                                name: 'BlackBerry',
                                version: t
                            };
                        }
                    }, {
                        test: [ /bada/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/bada\/(\d+(\.\d+)*)/i, e);
                            return {
                                name: 'Bada',
                                version: t
                            };
                        }
                    }, {
                        test: [ /tizen/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/tizen[\/\s](\d+(\.\d+)*)/i, e);
                            return {
                                name: 'Tizen',
                                version: t
                            };
                        }
                    }, {
                        test: [ /linux/i ],
                        describe: function() {
                            return {
                                name: 'Linux'
                            };
                        }
                    }, {
                        test: [ /CrOS/ ],
                        describe: function() {
                            return {
                                name: 'Chrome OS'
                            };
                        }
                    } ];
                    r.default = i, e.exports = t.default;
                }) ? n.apply(t, i) : n) || (e.exports = s);
            },
            90: function(e, t, r) {
                var n, i, s;
                i = [ t, r(17) ], void 0 === (s = 'function' == typeof (n = function(r, n) {
                    'use strict';
                    Object.defineProperty(r, '__esModule', {
                        value: !0
                    }), r.default = void 0;
                    var i = {
                        tablet: 'tablet',
                        mobile: 'mobile',
                        desktop: 'desktop'
                    }, s = [ {
                        test: [ /googlebot/i ],
                        describe: function() {
                            return {
                                type: 'bot',
                                vendor: 'Google'
                            };
                        }
                    }, {
                        test: [ /huawei/i ],
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/(can-l01)/i, e) && 'Nova', r = {
                                type: i.mobile,
                                vendor: 'Huawei'
                            };
                            return t && (r.model = t), r;
                        }
                    }, {
                        test: [ /nexus\s*(?:7|8|9|10).*/i ],
                        describe: function() {
                            return {
                                type: i.tablet,
                                vendor: 'Nexus'
                            };
                        }
                    }, {
                        test: [ /ipad/i ],
                        describe: function() {
                            return {
                                type: i.tablet,
                                vendor: 'Apple',
                                model: 'iPad'
                            };
                        }
                    }, {
                        test: [ /kftt build/i ],
                        describe: function() {
                            return {
                                type: i.tablet,
                                vendor: 'Amazon',
                                model: 'Kindle Fire HD 7'
                            };
                        }
                    }, {
                        test: [ /silk/i ],
                        describe: function() {
                            return {
                                type: i.tablet,
                                vendor: 'Amazon'
                            };
                        }
                    }, {
                        test: [ /tablet/i ],
                        describe: function() {
                            return {
                                type: i.tablet
                            };
                        }
                    }, {
                        test: function(e) {
                            var t = e.test(/ipod|iphone/i), r = e.test(/like (ipod|iphone)/i);
                            return t && !r;
                        },
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/(ipod|iphone)/i, e);
                            return {
                                type: i.mobile,
                                vendor: 'Apple',
                                model: t
                            };
                        }
                    }, {
                        test: [ /nexus\s*[0-6].*/i, /galaxy nexus/i ],
                        describe: function() {
                            return {
                                type: i.mobile,
                                vendor: 'Nexus'
                            };
                        }
                    }, {
                        test: [ /[^-]mobi/i ],
                        describe: function() {
                            return {
                                type: i.mobile
                            };
                        }
                    }, {
                        test: function(e) {
                            return 'blackberry' === e.getBrowserName(!0);
                        },
                        describe: function() {
                            return {
                                type: i.mobile,
                                vendor: 'BlackBerry'
                            };
                        }
                    }, {
                        test: function(e) {
                            return 'bada' === e.getBrowserName(!0);
                        },
                        describe: function() {
                            return {
                                type: i.mobile
                            };
                        }
                    }, {
                        test: function(e) {
                            return 'windows phone' === e.getBrowserName();
                        },
                        describe: function() {
                            return {
                                type: i.mobile,
                                vendor: 'Microsoft'
                            };
                        }
                    }, {
                        test: function(e) {
                            var t = Number(String(e.getOSVersion()).split('.')[0]);
                            return 'android' === e.getOSName(!0) && t >= 3;
                        },
                        describe: function() {
                            return {
                                type: i.tablet
                            };
                        }
                    }, {
                        test: function(e) {
                            return 'android' === e.getOSName(!0);
                        },
                        describe: function() {
                            return {
                                type: i.mobile
                            };
                        }
                    }, {
                        test: function(e) {
                            return 'macos' === e.getOSName(!0);
                        },
                        describe: function() {
                            return {
                                type: i.desktop,
                                vendor: 'Apple'
                            };
                        }
                    }, {
                        test: function(e) {
                            return 'windows' === e.getOSName(!0);
                        },
                        describe: function() {
                            return {
                                type: i.desktop
                            };
                        }
                    }, {
                        test: function(e) {
                            return 'linux' === e.getOSName(!0);
                        },
                        describe: function() {
                            return {
                                type: i.desktop
                            };
                        }
                    } ];
                    r.default = s, e.exports = t.default;
                }) ? n.apply(t, i) : n) || (e.exports = s);
            },
            91: function(e, t, r) {
                var n, i, s;
                i = [ t, r(17) ], void 0 === (s = 'function' == typeof (n = function(r, n) {
                    'use strict';
                    Object.defineProperty(r, '__esModule', {
                        value: !0
                    }), r.default = void 0;
                    var i = [ {
                        test: function(e) {
                            return 'microsoft edge' === e.getBrowserName(!0);
                        },
                        describe: function(e) {
                            var t = (0, n.getFirstMatch)(/edge\/(\d+(\.?_?\d+)+)/i, e);
                            return {
                                name: 'EdgeHTML',
                                version: t
                            };
                        }
                    }, {
                        test: [ /trident/i ],
                        describe: function(e) {
                            var t = {
                                name: 'Trident'
                            }, r = (0, n.getFirstMatch)(/trident\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: function(e) {
                            return e.test(/presto/i);
                        },
                        describe: function(e) {
                            var t = {
                                name: 'Presto'
                            }, r = (0, n.getFirstMatch)(/presto\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: function(e) {
                            var t = e.test(/gecko/i), r = e.test(/like gecko/i);
                            return t && !r;
                        },
                        describe: function(e) {
                            var t = {
                                name: 'Gecko'
                            }, r = (0, n.getFirstMatch)(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    }, {
                        test: [ /(apple)?webkit\/537\.36/i ],
                        describe: function() {
                            return {
                                name: 'Blink'
                            };
                        }
                    }, {
                        test: [ /(apple)?webkit/i ],
                        describe: function(e) {
                            var t = {
                                name: 'WebKit'
                            }, r = (0, n.getFirstMatch)(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t;
                        }
                    } ];
                    r.default = i, e.exports = t.default;
                }) ? n.apply(t, i) : n) || (e.exports = s);
            }
        });
    }), detectBrowser = function(exports, Bowser) {
        var detectBrowser = {
            browser: Bowser.getParser(navigator.userAgent),
            name: function() {
                var browserName = this.browser.getBrowserName().toLowerCase();
                return 'microsoft edge' === browserName && (browserName = 'edge'), browserName;
            },
            device: function() {
                var deviceType = this.browser.getPlatformType(!0);
                return 'desktop' === deviceType ? deviceType : 'mobile';
            },
            version: function() {
                return parseInt(this.browser.getBrowserVersion(), 10);
            },
            os: function() {
                return this.browser.getOS().name;
            },
            isOS: function() {
                return 'iOS' === this.os();
            },
            usingUserGesture: function() {
                return this.browser.satisfies({
                    macos: {
                        safari: '>=12.1'
                    }
                });
            }
        };
        return detectBrowser;
    }(0, bowser), amp = function(exports) {
        Object.defineProperty(exports, '__esModule', {
            value: !0
        });
        var amp = function() {
            function amp() {}
            return amp.listenToPostMessage = function() {
                self.addEventListener('message', function() {});
            }, amp;
        }();
        return exports.default = amp, exports;
    }(amp), function(jstz, IndexedDb, detectBrowser, amp) {
        function syncChromeEncryptionKeys() {
            self.registration.pushManager.getSubscription().then(function(subscription) {
                if (subscription) {
                    var currentSubscriptionString = JSON.stringify(subscription);
                    hasSubscriptionChanged(currentSubscriptionString).then(function(errorCode) {
                        errorCode || (errorCode = IndexedDbErrorCodes.DEFAULT_ERROR_CODE);
                        var subscriptionId = splitEndPointSubscription(subscription), subscriptionJson = JSON.stringify(subscription), subscriptionObj = JSON.parse(subscriptionJson), subscriberTimeZone = '', subscriberTimeZoneOffset = '', subscriberServiceWorkerUrl = '';
                        try {
                            subscriberTimeZoneOffset = new Date().getTimezoneOffset().toString().replace('+', ''),
                            void 0 !== jstz && (subscriberTimeZone = jstz.determine().name());
                            try {
                                subscriberServiceWorkerUrl = encodeURIComponent(self.registration.active.scriptURL);
                            } catch (e) {
                                subscriberServiceWorkerUrl = encodeURIComponent(self.location.href);
                            }
                        } catch (err) {}
                        var syncChromeUrl = encodeURI(_wingifyPush.trackingUrl + '/v3/syncChromeEncryptionKey.php?hash=' + _wingifyPush.hash + '&subscriptionId=' + subscriptionId + '&subscription=' + subscriptionJson + '&subscriberTimeZone=' + subscriberTimeZone + '&subscriberTimeZoneOffset=' + subscriberTimeZoneOffset + '&subscriberServiceWorkerUrl=' + subscriberServiceWorkerUrl + '&version=' + self.version + '&error=' + errorCode);
                        if (subscriptionObj.keys.auth && subscriptionObj.keys.p256dh) return fetch(syncChromeUrl).then(function(response) {
                            if (200 !== response.status) throw new Error();
                            return response.json();
                        }).then(function(json) {
                            if ('success' === json.status) {
                                var db = new IndexedDb('pushcrewDB', {
                                    subscriptionInfo: 'identifier'
                                });
                                db.put('subscriptionInfo', {
                                    subscriptionString: currentSubscriptionString,
                                    timestamp: Date.now(),
                                    identifier: 'subscription'
                                }).catch(function() {});
                            }
                        }).catch(function(err) {});
                    });
                }
            });
        }
        function hasSubscriptionChanged(currentSubscription) {
            return new Promise(function(resolve) {
                var resolveTimer = self.setTimeout(resolve.bind(self, IndexedDbErrorCodes.INDEXED_DB_NOT_RESOLVED), 2e3), db = new IndexedDb('pushcrewDB', {
                    subscriptionInfo: 'identifier'
                });
                try {
                    db.get('subscriptionInfo', 'subscription').then(function(oldSubscription) {
                        !oldSubscription || oldSubscription && oldSubscription.subscriptionString !== currentSubscription ? resolve(IndexedDbErrorCodes.SUBSCRIPTION_CHANGED) : oldSubscription.subscriptionString === currentSubscription && self.clearTimeout(resolveTimer);
                    }).catch(function(err) {
                        resolveWithErrorCode(resolve, err);
                    });
                } catch (err) {
                    resolveWithErrorCode(resolve, err);
                }
            });
        }
        function resolveWithErrorCode(resolve, err) {
            var error = err;
            (err instanceof Error || err instanceof TypeError) && (error = err.message), resolve(error);
        }
        self.version = '14';
        var IndexedDbErrorCodes = {
            INDEXED_DB_NOT_RESOLVED: 10,
            SUBSCRIPTION_CHANGED: 8,
            DEFAULT_ERROR_CODE: 9
        }, splitEndPointSubscription = function(subscriptionDetails) {
            if (subscriptionDetails) {
                if (subscriptionDetails.subscriptionId) return subscriptionDetails.subscriptionId;
                if ('edge' === detectBrowser.name()) return encodeURIComponent(subscriptionDetails.endpoint);
                var endpointURL, offset, endpoint = subscriptionDetails.endpoint;
                return offset = endpoint.lastIndexOf('/'), endpointURL = endpoint.substring(0, offset + 1),
                    endpoint.replace(endpointURL, '');
            }
        }, sendEventDetails = function(eventDetails) {
            var eventDetailsURL = _wingifyPush.trackingUrl + '/pushsubscriptionchange-exec.php', formData = new FormData();
            return formData.append('version', self.version), formData.append('eventDetails', eventDetails),
                fetch(eventDetailsURL, {
                    method: 'POST',
                    body: formData
                });
        };
        [ 'firefox', 'edge' ].indexOf(detectBrowser.name()) > -1 || syncChromeEncryptionKeys();
        var trackClick = function(clickDeliveryURL) {
            return fetch(clickDeliveryURL + '&version=' + self.version).catch(function(err) {});
        }, trackClose = function(closeDeliveryURL) {
            return fetch(closeDeliveryURL + '&version=' + self.version).catch(function(err) {});
        }, unsubscribeEvent = function(event) {
            if (event.subscriberId) {
                var syncUrl = _wingifyPush.pcDomainUrl + '/syncSubscription.php?hash=' + _wingifyPush.hash + '&browserType=' + event.browser + '&subscriberId=' + event.subscriberId + '&subscriptionId=' + event.subscriptionId + '&action=unsubscribe-delete&token=' + event.right_to_erase_auth_token + '&version=' + self.version;
                return fetch(syncUrl).then(function(response) {
                    if (200 !== response.status) throw new Error();
                    return response.json();
                }).then(function(json) {
                    'success' === json.status && self.registration.pushManager.getSubscription().then(function(subscription) {
                        subscription.unsubscribe();
                    });
                }).catch(function(err) {});
            }
        }, trackClickEvent = function(event) {
            return self.registration.pushManager.getSubscription().then(function(subscription) {
                var subscriptionId = splitEndPointSubscription(subscription), browserName = detectBrowser.name(), clickDeliveryURL = _wingifyPush.trackingUrl + "/trackClick.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash;
                return 'chrome' !== browserName && 'opera' !== browserName || !event.action || (clickDeliveryURL = _wingifyPush.trackingUrl + "/trackClick.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash + '&action=' + event.action),
                    trackClick(clickDeliveryURL);
            });
        }, trackCloseEvent = function(event) {
            return self.registration.pushManager.getSubscription().then(function(subscription) {
                var subscriptionId = splitEndPointSubscription(subscription), browserName = detectBrowser.name(), closeDeliveryURL = _wingifyPush.trackingUrl + "/trackClose.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash;
                return trackClose(closeDeliveryURL);
            });
        }, openNotificationClickedWindow = function(notificationURL) {
            return clients.matchAll({
                type: 'window'
            }).then(function(clientList) {
                for (var i = 0; i < clientList.length; i++) {
                    var client = clientList[i];
                    if (client.url === decodeURIComponent(notificationURL) && 'focus' in client) return client.focus();
                }
                if (clients.openWindow) return clients.openWindow(decodeURIComponent(notificationURL));
            });
        }, showPushCrewNotification = function(notificationDetails) {
            var notificationFinalDetails = {
                body: notificationDetails.message,
                icon: notificationDetails.icon,
                requireInteraction: notificationDetails.requireInteraction,
                tag: notificationDetails.notificationTag,
                actions: notificationDetails.actions,
                data: notificationDetails.data
            };
            if ('image' in Notification.prototype && notificationDetails.image && (notificationFinalDetails.image = notificationDetails.image),
            'opera' !== detectBrowser.name()) return self.registration.showNotification(notificationDetails.title, notificationFinalDetails);
            self.registration.showNotification(notificationDetails.title, notificationFinalDetails);
        }, showErrorNotification = function(errorString, subscriptionId) {
            var notificationDetails = {};
            notificationDetails.title = 'Oops! We couldn\'t fetch the notification', notificationDetails.message = 'Sorry, due to some error the notification that was sent couldn\'t be displayed.',
                notificationDetails.icon = _wingifyPush.defaultIcon, notificationDetails.notificationTag = 'notification-error',
                notificationDetails.requireInteraction = !1, notificationDetails.data = {}, notificationDetails.data.notificationURL = encodeURIComponent('https://pushcrew.com/error-fetching-push-notifications/?hash=' + _wingifyPush.hash);
            var logSwErrorUrl = _wingifyPush.trackingUrl + "/logServiceWorkerError.php?subscriptionId=" + subscriptionId + '&error=' + errorString + '&hash=' + _wingifyPush.hash + '&version=' + self.version;
            return fetch(logSwErrorUrl).then(function() {
                return showPushCrewNotification(notificationDetails);
            }).catch(function(err) {
                return showPushCrewNotification(notificationDetails);
            });
        }, commonNotificationHandlerForPushEvent = function(eventData, subscriptionId) {
            var notificationDetails = {}, subscriberId = eventData.subscriber_id || eventData.subscriberId, requireInteraction = void 0 !== eventData.ri_flag ? eventData.ri_flag : eventData.requireInteraction, icon = eventData.icon_url || eventData.icon, browserName = detectBrowser.name();
            'firefox' === browserName ? (notificationDetails.title = decodeURIComponent(escape(eventData.title)),
                notificationDetails.message = decodeURIComponent(escape(eventData.msg))) : (notificationDetails.title = eventData.title,
                notificationDetails.message = eventData.message), notificationDetails.notificationTag = eventData.tag,
                notificationDetails.icon = icon, notificationDetails.image = eventData.image || '',
                notificationDetails.requireInteraction = !0, notificationDetails.subscriberId = void 0 !== subscriberId ? subscriberId : null,
                notificationDetails.actions = [], notificationDetails.data = {}, notificationDetails.data.notificationURL = encodeURIComponent(eventData.url),
                notificationDetails.data.subscriberId = notificationDetails.subscriberId, eventData.right_to_erase_auth_token && (notificationDetails.data.right_to_erase_auth_token = eventData.right_to_erase_auth_token,
                notificationDetails.data.browser = browserName, notificationDetails.data.subscriptionId = subscriptionId),
            eventData.button_one && eventData.button_one_url && (notificationDetails.actions.push({
                action: 'action1',
                title: eventData.button_one
            }), notificationDetails.data.action_one_url = encodeURIComponent(eventData.button_one_url)),
            eventData.button_two && eventData.button_two_url && (notificationDetails.actions.push({
                action: 'action2',
                title: eventData.button_two
            }), notificationDetails.data.action_two_url = encodeURIComponent(eventData.button_two_url)),
            !1 === requireInteraction && (notificationDetails.requireInteraction = !1);
            var trackDeliveryURL = _wingifyPush.trackingUrl + "/trackDelivery.php?subscriptionId=" + subscriptionId + '&notificationTag=' + notificationDetails.notificationTag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash + '&version=' + self.version;
            return fetch(trackDeliveryURL).then(function() {
                return showPushCrewNotification(notificationDetails);
            }).catch(function(err) {
                return showPushCrewNotification(notificationDetails);
            });
        };
        self.addEventListener('install', function(event) {
            event.waitUntil(self.skipWaiting());
        }), self.addEventListener('activate', function(event) {
            event.waitUntil(self.clients.claim());
        }), self.addEventListener('push', function(event) {
            event.waitUntil(self.registration.pushManager.getSubscription().then(function(subscription) {
                try {
                    if (!subscription) throw new Error('Subscription not found in service worker');
                    var subscriptionId = splitEndPointSubscription(subscription);
                    if (event.data) {
                        if ('object' != typeof event.data.json()) throw new Error('Not a valid JSON data');
                        var payloadObject = event.data.json();
                        return commonNotificationHandlerForPushEvent(payloadObject, subscriptionId);
                    }
                    return fetch(_wingifyPush.trackingUrl + '/getMessage.php?hash=' + _wingifyPush.hash + '&subscriptionId=' + subscriptionId + '&version=' + self.version).then(function(response) {
                        if (200 !== response.status) throw new Error();
                        return response.json().then(function(data) {
                            if (data.error || !data.notification) throw new Error('The API returned an error.');
                            if ('notification-error' === data.notification.tag) throw new Error('Tag is notification-error');
                            return commonNotificationHandlerForPushEvent(data.notification, subscriptionId);
                        }).catch(function(err) {
                            return showErrorNotification(err.toString(), subscriptionId);
                        });
                    }).catch(function(err) {
                        return showErrorNotification(err.toString(), subscriptionId);
                    });
                } catch (err) {
                    return showErrorNotification(err.toString(), subscriptionId);
                }
            }));
        }), self.addEventListener('notificationclick', function(event) {
            var notificationURL, promiseArr = [];
            event.notification.close(), notificationURL = 'action1' == event.action ? event.notification.data.action_one_url : 'action2' == event.action ? event.notification.data.action_two_url : event.notification.data.notificationURL,
                promiseArr.push(trackClickEvent(event)), promiseArr.push(openNotificationClickedWindow(notificationURL)),
            event.notification.data.right_to_erase_auth_token && -1 !== notificationURL.indexOf(event.notification.data.right_to_erase_auth_token) && promiseArr.push(unsubscribeEvent(event.notification.data)),
                event.waitUntil(Promise.all(promiseArr));
        }), self.addEventListener('notificationclose', function(event) {
            event.waitUntil(trackCloseEvent(event));
        });
        var createPSChangeObject = function(event) {
            var subscriptionObject = {
                hasNewSubscription: !1,
                hasOldSubscription: !1
            };
            event.oldSubscription && (subscriptionObject.hasOldSubscription = !0, subscriptionObject.oldSubscription = event.oldSubscription),
            event.newSubscription && (subscriptionObject.hasNewSubscription = !0, subscriptionObject.newSubscription = event.newSubscription);
            var dataToSend = {
                event: event,
                subscriptionObject: subscriptionObject,
                permission: Notification.permission,
                endpoint: null
            };
            return dataToSend;
        };
        self.addEventListener('pushsubscriptionchange', function(event) {
            event.waitUntil(self.registration.pushManager.getSubscription().then(function(subscription) {
                var dataToSend = createPSChangeObject(event);
                return dataToSend.source = 'then', subscription ? (dataToSend.endpoint = subscription.endpoint,
                    sendEventDetails(JSON.stringify(dataToSend))) : sendEventDetails(JSON.stringify(dataToSend));
            }).catch(function(error) {
                var dataToSend = createPSChangeObject(event);
                return dataToSend.source = 'catch', sendEventDetails(JSON.stringify(dataToSend));
            }));
        }), new amp({
            origin: 'https',
            hash: 'c746a6786890c4e74cb25498556803fc',
            vapidPublicKey: 'BLm_IN5pRxB6V6uQbQcRLDCNjMnyRsmaNb_pOSCQmKjze91kZtF4VDwhLfnz7YJu31bLLkoJvey6yXuP_ubbhv0'
        });
    }(jstz, IndexedDb, detectBrowser, amp);
}();
