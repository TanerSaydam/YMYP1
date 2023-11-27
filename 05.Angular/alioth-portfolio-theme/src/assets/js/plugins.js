/*!
 * circletype 2.3.2
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2020 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
! function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.CircleType = n() : t.CircleType = n()
}(window, (function () {
    return function (t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function (t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function (n) {
                    return t[n]
                }.bind(null, i));
            return r
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 28)
    }([function (t, n, e) {
        var r = e(13)("wks"),
            i = e(12),
            o = e(1).Symbol,
            u = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && o[t] || (u ? o : i)("Symbol." + t))
        }).store = r
    }, function (t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }, function (t, n) {
        var e = t.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = e)
    }, function (t, n, e) {
        var r = e(4),
            i = e(11);
        t.exports = e(6) ? function (t, n, e) {
            return r.f(t, n, i(1, e))
        } : function (t, n, e) {
            return t[n] = e, t
        }
    }, function (t, n, e) {
        var r = e(5),
            i = e(33),
            o = e(34),
            u = Object.defineProperty;
        n.f = e(6) ? Object.defineProperty : function (t, n, e) {
            if (r(t), n = o(n, !0), r(e), i) try {
                return u(t, n, e)
            } catch (t) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t
        }
    }, function (t, n, e) {
        var r = e(10);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, n, e) {
        t.exports = !e(18)((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function (t, n) {
            return e.call(t, n)
        }
    }, function (t, n) {
        var e = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, n) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }, function (t, n) {
        var e = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
        }
    }, function (t, n, e) {
        var r = e(2),
            i = e(1),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function (t, n) {
            return o[t] || (o[t] = void 0 !== n ? n : {})
        })("versions", []).push({
            version: r.version,
            mode: e(16) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, n) {
        t.exports = {}
    }, function (t, n, e) {
        var r = e(13)("keys"),
            i = e(12);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t))
        }
    }, function (t, n) {
        t.exports = !1
    }, function (t, n, e) {
        var r = e(1),
            i = e(2),
            o = e(3),
            u = e(20),
            c = e(21),
            a = function (t, n, e) {
                var f, s, l, p, h = t & a.F,
                    v = t & a.G,
                    d = t & a.S,
                    y = t & a.P,
                    m = t & a.B,
                    g = v ? r : d ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                    _ = v ? i : i[n] || (i[n] = {}),
                    x = _.prototype || (_.prototype = {});
                for (f in v && (e = n), e) l = ((s = !h && g && void 0 !== g[f]) ? g : e)[f], p = m && s ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, g && u(g, f, l, t & a.U), _[f] != l && o(_, f, p), y && x[f] != l && (x[f] = l)
            };
        r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, n, e) {
        var r = e(10),
            i = e(1).document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {}
        }
    }, function (t, n, e) {
        var r = e(1),
            i = e(3),
            o = e(7),
            u = e(12)("src"),
            c = e(35),
            a = ("" + c).split("toString");
        e(2).inspectSource = function (t) {
            return c.call(t)
        }, (t.exports = function (t, n, e, c) {
            var f = "function" == typeof e;
            f && (o(e, "name") || i(e, "name", n)), t[n] !== e && (f && (o(e, u) || i(e, u, t[n] ? "" + t[n] : a.join(String(n)))), t === r ? t[n] = e : c ? t[n] ? t[n] = e : i(t, n, e) : (delete t[n], i(t, n, e)))
        })(Function.prototype, "toString", (function () {
            return "function" == typeof this && this[u] || c.call(this)
        }))
    }, function (t, n, e) {
        var r = e(36);
        t.exports = function (t, n, e) {
            if (r(t), void 0 === n) return t;
            switch (e) {
                case 1:
                    return function (e) {
                        return t.call(n, e)
                    };
                case 2:
                    return function (e, r) {
                        return t.call(n, e, r)
                    };
                case 3:
                    return function (e, r, i) {
                        return t.call(n, e, r, i)
                    }
            }
            return function () {
                return t.apply(n, arguments)
            }
        }
    }, function (t, n, e) {
        var r = e(42),
            i = e(9);
        t.exports = function (t) {
            return r(i(t))
        }
    }, function (t, n) {
        var e = {}.toString;
        t.exports = function (t) {
            return e.call(t).slice(8, -1)
        }
    }, function (t, n, e) {
        var r = e(8),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function (t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, n, e) {
        var r = e(4).f,
            i = e(7),
            o = e(0)("toStringTag");
        t.exports = function (t, n, e) {
            t && !i(t = e ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: n
            })
        }
    }, function (t, n, e) {
        var r = e(9);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, n, e) {
        e(29);
        var r = e(54).default;
        t.exports = r
    }, function (t, n, e) {
        e(30), e(47), t.exports = e(2).Array.from
    }, function (t, n, e) {
        "use strict";
        var r = e(31)(!0);
        e(32)(String, "String", (function (t) {
            this._t = String(t), this._i = 0
        }), (function () {
            var t, n = this._t,
                e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, e), this._i += t.length, {
                value: t,
                done: !1
            })
        }))
    }, function (t, n, e) {
        var r = e(8),
            i = e(9);
        t.exports = function (t) {
            return function (n, e) {
                var o, u, c = String(i(n)),
                    a = r(e),
                    f = c.length;
                return a < 0 || a >= f ? t ? "" : void 0 : (o = c.charCodeAt(a)) < 55296 || o > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : o : t ? c.slice(a, a + 2) : u - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(16),
            i = e(17),
            o = e(20),
            u = e(3),
            c = e(14),
            a = e(37),
            f = e(26),
            s = e(46),
            l = e(0)("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function () {
                return this
            };
        t.exports = function (t, n, e, v, d, y, m) {
            a(e, n, v);
            var g, _, x, b = function (t) {
                    if (!p && t in S) return S[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new e(this, t)
                            }
                    }
                    return function () {
                        return new e(this, t)
                    }
                },
                w = n + " Iterator",
                O = "values" == d,
                j = !1,
                S = t.prototype,
                M = S[l] || S["@@iterator"] || d && S[d],
                T = M || b(d),
                P = d ? O ? b("entries") : T : void 0,
                A = "Array" == n && S.entries || M;
            if (A && (x = s(A.call(new t))) !== Object.prototype && x.next && (f(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)), O && M && "values" !== M.name && (j = !0, T = function () {
                    return M.call(this)
                }), r && !m || !p && !j && S[l] || u(S, l, T), c[n] = T, c[w] = h, d)
                if (g = {
                        values: O ? T : b("values"),
                        keys: y ? T : b("keys"),
                        entries: P
                    }, m)
                    for (_ in g) _ in S || o(S, _, g[_]);
                else i(i.P + i.F * (p || j), n, g);
            return g
        }
    }, function (t, n, e) {
        t.exports = !e(6) && !e(18)((function () {
            return 7 != Object.defineProperty(e(19)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (t, n, e) {
        var r = e(10);
        t.exports = function (t, n) {
            if (!r(t)) return t;
            var e, i;
            if (n && "function" == typeof (e = t.toString) && !r(i = e.call(t))) return i;
            if ("function" == typeof (e = t.valueOf) && !r(i = e.call(t))) return i;
            if (!n && "function" == typeof (e = t.toString) && !r(i = e.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, n, e) {
        t.exports = e(13)("native-function-to-string", Function.toString)
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(38),
            i = e(11),
            o = e(26),
            u = {};
        e(3)(u, e(0)("iterator"), (function () {
            return this
        })), t.exports = function (t, n, e) {
            t.prototype = r(u, {
                next: i(1, e)
            }), o(t, n + " Iterator")
        }
    }, function (t, n, e) {
        var r = e(5),
            i = e(39),
            o = e(25),
            u = e(15)("IE_PROTO"),
            c = function () {},
            a = function () {
                var t, n = e(19)("iframe"),
                    r = o.length;
                for (n.style.display = "none", e(45).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[o[r]];
                return a()
            };
        t.exports = Object.create || function (t, n) {
            var e;
            return null !== t ? (c.prototype = r(t), e = new c, c.prototype = null, e[u] = t) : e = a(), void 0 === n ? e : i(e, n)
        }
    }, function (t, n, e) {
        var r = e(4),
            i = e(5),
            o = e(40);
        t.exports = e(6) ? Object.defineProperties : function (t, n) {
            i(t);
            for (var e, u = o(n), c = u.length, a = 0; c > a;) r.f(t, e = u[a++], n[e]);
            return t
        }
    }, function (t, n, e) {
        var r = e(41),
            i = e(25);
        t.exports = Object.keys || function (t) {
            return r(t, i)
        }
    }, function (t, n, e) {
        var r = e(7),
            i = e(22),
            o = e(43)(!1),
            u = e(15)("IE_PROTO");
        t.exports = function (t, n) {
            var e, c = i(t),
                a = 0,
                f = [];
            for (e in c) e != u && r(c, e) && f.push(e);
            for (; n.length > a;) r(c, e = n[a++]) && (~o(f, e) || f.push(e));
            return f
        }
    }, function (t, n, e) {
        var r = e(23);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, n, e) {
        var r = e(22),
            i = e(24),
            o = e(44);
        t.exports = function (t) {
            return function (n, e, u) {
                var c, a = r(n),
                    f = i(a.length),
                    s = o(u, f);
                if (t && e != e) {
                    for (; f > s;)
                        if ((c = a[s++]) != c) return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === e) return t || s || 0;
                return !t && -1
            }
        }
    }, function (t, n, e) {
        var r = e(8),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, n) {
            return (t = r(t)) < 0 ? i(t + n, 0) : o(t, n)
        }
    }, function (t, n, e) {
        var r = e(1).document;
        t.exports = r && r.documentElement
    }, function (t, n, e) {
        var r = e(7),
            i = e(27),
            o = e(15)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(21),
            i = e(17),
            o = e(27),
            u = e(48),
            c = e(49),
            a = e(24),
            f = e(50),
            s = e(51);
        i(i.S + i.F * !e(53)((function (t) {
            Array.from(t)
        })), "Array", {
            from: function (t) {
                var n, e, i, l, p = o(t),
                    h = "function" == typeof this ? this : Array,
                    v = arguments.length,
                    d = v > 1 ? arguments[1] : void 0,
                    y = void 0 !== d,
                    m = 0,
                    g = s(p);
                if (y && (d = r(d, v > 2 ? arguments[2] : void 0, 2)), null == g || h == Array && c(g))
                    for (e = new h(n = a(p.length)); n > m; m++) f(e, m, y ? d(p[m], m) : p[m]);
                else
                    for (l = g.call(p), e = new h; !(i = l.next()).done; m++) f(e, m, y ? u(l, d, [i.value, m], !0) : i.value);
                return e.length = m, e
            }
        })
    }, function (t, n, e) {
        var r = e(5);
        t.exports = function (t, n, e, i) {
            try {
                return i ? n(r(e)[0], e[1]) : n(e)
            } catch (n) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), n
            }
        }
    }, function (t, n, e) {
        var r = e(14),
            i = e(0)("iterator"),
            o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function (t, n, e) {
        "use strict";
        var r = e(4),
            i = e(11);
        t.exports = function (t, n, e) {
            n in t ? r.f(t, n, i(0, e)) : t[n] = e
        }
    }, function (t, n, e) {
        var r = e(52),
            i = e(0)("iterator"),
            o = e(14);
        t.exports = e(2).getIteratorMethod = function (t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function (t, n, e) {
        var r = e(23),
            i = e(0)("toStringTag"),
            o = "Arguments" == r(function () {
                return arguments
            }());
        t.exports = function (t) {
            var n, e, u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, n) {
                try {
                    return t[n]
                } catch (t) {}
            }(n = Object(t), i)) ? e : o ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
        }
    }, function (t, n, e) {
        var r = e(0)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function () {
                i = !0
            }, Array.from(o, (function () {
                throw 2
            }))
        } catch (t) {}
        t.exports = function (t, n) {
            if (!n && !i) return !1;
            var e = !1;
            try {
                var o = [7],
                    u = o[r]();
                u.next = function () {
                    return {
                        done: e = !0
                    }
                }, o[r] = function () {
                    return u
                }, t(o)
            } catch (t) {}
            return e
        }
    }, function (t, n, e) {
        "use strict";
        e.r(n);
        var r = function (t) {
            var n = t.getBoundingClientRect();
            return {
                height: n.height,
                left: n.left + window.pageXOffset,
                top: n.top + window.pageYOffset,
                width: n.width
            }
        };

        function i(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                    return e
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        var o = Math.PI / 180,
            u = function (t) {
                return t * o
            },
            c = function (t, n) {
                return t * (1 - Math.cos(u(n / 2)))
            },
            a = 180 / Math.PI,
            f = function (t, n) {
                return t.reduce((function (t, e) {
                    var r = e.width,
                        i = r / n * a;
                    return {
                        "θ": t.θ + i,
                        rotations: t.rotations.concat([t.θ + i / 2])
                    }
                }), {
                    "θ": 0,
                    rotations: []
                })
            };

        function s(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var l = Math.PI,
            p = Math.max,
            h = Math.min,
            v = function () {
                function t(n, e) {
                    ! function (t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.element = n, this.originalHTML = this.element.innerHTML;
                    var o = document.createElement("div"),
                        u = document.createDocumentFragment();
                    o.setAttribute("aria-label", n.innerText), o.style.position = "relative", this.container = o, this._letters = function (t, n) {
                        var e = document.createElement("span");
                        e.style.display = "inline-block";
                        var r = t.innerText.trim();
                        return (n ? n(r) : i(r)).map((function (t) {
                            var n = e.cloneNode();
                            return n.insertAdjacentHTML("afterbegin", " " === t ? "&nbsp;" : t), n
                        }))
                    }(n, e), this._letters.forEach((function (t) {
                        return u.appendChild(t)
                    })), o.appendChild(u), this.element.innerHTML = "", this.element.appendChild(o);
                    var c = window.getComputedStyle(this.element),
                        a = c.fontSize,
                        f = c.lineHeight;
                    this._fontSize = parseFloat(a), this._lineHeight = parseFloat(f) || this._fontSize, this._metrics = this._letters.map(r);
                    var s = this._metrics.reduce((function (t, n) {
                        return t + n.width
                    }), 0);
                    this._minRadius = s / l / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate()
                }
                var n, e, o;
                return n = t, (e = [{
                    key: "radius",
                    value: function (t) {
                        return void 0 !== t ? (this._radius = p(this._minRadius, t), this._invalidate(), this) : this._radius
                    }
                }, {
                    key: "dir",
                    value: function (t) {
                        return void 0 !== t ? (this._dir = t, this._invalidate(), this) : this._dir
                    }
                }, {
                    key: "forceWidth",
                    value: function (t) {
                        return void 0 !== t ? (this._forceWidth = t, this._invalidate(), this) : this._forceWidth
                    }
                }, {
                    key: "forceHeight",
                    value: function (t) {
                        return void 0 !== t ? (this._forceHeight = t, this._invalidate(), this) : this._forceHeight
                    }
                }, {
                    key: "refresh",
                    value: function () {
                        return this._invalidate()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return this.element.innerHTML = this.originalHTML, this
                    }
                }, {
                    key: "_invalidate",
                    value: function () {
                        var t = this;
                        return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame((function () {
                            t._layout()
                        })), this
                    }
                }, {
                    key: "_layout",
                    value: function () {
                        var t = this,
                            n = this._radius,
                            e = this._dir,
                            r = -1 === e ? -n + this._lineHeight : n,
                            i = "center ".concat(r / this._fontSize, "em"),
                            o = n - this._lineHeight,
                            a = f(this._metrics, o),
                            s = a.rotations,
                            l = a.θ;
                        if (this._letters.forEach((function (n, r) {
                                var o = n.style,
                                    u = (-.5 * l + s[r]) * e,
                                    c = -.5 * t._metrics[r].width / t._fontSize,
                                    a = "translateX(".concat(c, "em) rotate(").concat(u, "deg)");
                                o.position = "absolute", o.bottom = -1 === e ? 0 : "auto", o.left = "50%", o.transform = a, o.transformOrigin = i, o.webkitTransform = a, o.webkitTransformOrigin = i
                            })), this._forceHeight) {
                            var p = l > 180 ? c(n, l) : c(o, l) + this._lineHeight;
                            this.container.style.height = "".concat(p / this._fontSize, "em")
                        }
                        if (this._forceWidth) {
                            var v = function (t, n) {
                                return 2 * t * Math.sin(u(n / 2))
                            }(n, h(180, l));
                            this.container.style.width = "".concat(v / this._fontSize, "em")
                        }
                        return this
                    }
                }]) && s(n.prototype, e), o && s(n, o), t
            }();
        n.default = v
    }])
}));

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

! function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function (t, h) {
                var u = a.data(h, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function u(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function () {} : function (t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l],
                    f = r[c],
                    m = parseFloat(f);
                a[c] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                y = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                E = d && s,
                b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
        }
    }
    var s, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = h.length,
        d = !1;
    return r
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function (t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o]
            }, i)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                h = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(h)),
                d = s + "-options",
                l = t.jQuery;
            u.forEach(function (t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var h = new e(t, i);
                l && l.data(t, n, h)
            })
        })
    }, i
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        h = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [s],
        u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function () {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = parseFloat(n),
            s = parseFloat(o),
            a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[h];
        e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
        var r = t - i,
            s = e - n,
            a = {};
        a.transform = this.getTranslate(r, s), this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(h, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var c = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function () {
        this.css(f)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, c[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var h = t.console,
        u = t.jQuery,
        d = function () {},
        l = 0,
        c = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, e.prototype), f.option = function (t) {
        n.extend(this.options, t)
    }, f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, f.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);
            n.push(s)
        }
        return n
    }, f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, f.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function () {
        this.getSize()
    }, f.getSize = function () {
        this.size = i(this.element)
    }, f._getMeasurement = function (t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, f.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, f._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, f._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, f.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, f._postLayout = function () {
        this.resizeContainer()
    }, f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, f._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function (e) {
            e.once(t, n)
        })
    }, f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), u)
            if (this.$element = this.$element || u(this.element), e) {
                var o = u.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, f.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, f.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, f._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, f._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, f._manageStamp = d, f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return r
    }, f.handleEvent = n.handleEvent, f.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function () {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, f.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, f.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, f.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, r.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, r.create = function (t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
                x: this.columnWidth * r.col,
                y: r.y
            }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
        return s
    }, n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
        return e
    }, n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
            n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, n._manageStamp = function (t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}),
function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function () {
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});


(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports!=="undefined"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.fn.marquee=function(options){return this.each(function(){var o=$.extend({},$.fn.marquee.defaults,options),$this=$(this),$marqueeWrapper,containerWidth,animationCss,verticalDir,elWidth,loopCount=3,playState="animation-play-state",css3AnimationIsSupported=false,_prefixedEvent=function(element,type,callback){var pfx=["webkit","moz","MS","o",""];for(var p=0;p<pfx.length;p++){if(!pfx[p])type=type.toLowerCase();element.addEventListener(pfx[p]+type,callback,false)}},_objToString=function(obj){var tabjson=[];for(var p in obj){if(obj.hasOwnProperty(p)){tabjson.push(p+":"+obj[p])}}tabjson.push();return"{"+tabjson.join(",")+"}"},_startAnimationWithDelay=function(){$this.timer=setTimeout(animate,o.delayBeforeStart)},methods={pause:function(){if(css3AnimationIsSupported&&o.allowCss3Support){$marqueeWrapper.css(playState,"paused")}else{if($.fn.pause){$marqueeWrapper.pause()}}$this.data("runningStatus","paused");$this.trigger("paused")},resume:function(){if(css3AnimationIsSupported&&o.allowCss3Support){$marqueeWrapper.css(playState,"running")}else{if($.fn.resume){$marqueeWrapper.resume()}}$this.data("runningStatus","resumed");$this.trigger("resumed")},toggle:function(){methods[$this.data("runningStatus")==="resumed"?"pause":"resume"]()},destroy:function(){clearTimeout($this.timer);$this.find("*").addBack().off();$this.html($this.find(".js-marquee:first").html())}};if(typeof options==="string"){if($.isFunction(methods[options])){if(!$marqueeWrapper){$marqueeWrapper=$this.find(".js-marquee-wrapper")}if($this.data("css3AnimationIsSupported")===true){css3AnimationIsSupported=true}methods[options]()}return}var dataAttributes={},attr;$.each(o,function(key){attr=$this.attr("data-"+key);if(typeof attr!=="undefined"){switch(attr){case"true":attr=true;break;case"false":attr=false;break}o[key]=attr}});if(o.speed){o.duration=parseInt($this.width(),10)/o.speed*1e3}verticalDir=o.direction==="up"||o.direction==="down";o.gap=o.duplicated?parseInt(o.gap):0;$this.wrapInner('<div class="js-marquee"></div>');var $el=$this.find(".js-marquee").css({"margin-right":o.gap,float:"left"});if(o.duplicated){$el.clone(true).appendTo($this)}$this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');$marqueeWrapper=$this.find(".js-marquee-wrapper");if(verticalDir){var containerHeight=$this.height();$marqueeWrapper.removeAttr("style");$this.height(containerHeight);$this.find(".js-marquee").css({float:"none","margin-bottom":o.gap,"margin-right":0});if(o.duplicated){$this.find(".js-marquee:last").css({"margin-bottom":0})}var elHeight=$this.find(".js-marquee:first").height()+o.gap;if(o.startVisible&&!o.duplicated){o._completeDuration=(parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10)*o.duration;o.duration=parseInt(elHeight,10)/parseInt(containerHeight,10)*o.duration}else{o.duration=(parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10)*o.duration}}else{elWidth=$this.find(".js-marquee:first").width()+o.gap;containerWidth=$this.width();if(o.startVisible&&!o.duplicated){o._completeDuration=(parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10)*o.duration;o.duration=parseInt(elWidth,10)/parseInt(containerWidth,10)*o.duration}else{o.duration=(parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10)*o.duration}}if(o.duplicated){o.duration=o.duration/2}if(o.allowCss3Support){var elm=document.body||document.createElement("div"),animationName="marqueeAnimation-"+Math.floor(Math.random()*1e7),domPrefixes="Webkit Moz O ms Khtml".split(" "),animationString="animation",animationCss3Str="",keyframeString="";if(elm.style.animation!==undefined){keyframeString="@keyframes "+animationName+" ";css3AnimationIsSupported=true}if(css3AnimationIsSupported===false){for(var i=0;i<domPrefixes.length;i++){if(elm.style[domPrefixes[i]+"AnimationName"]!==undefined){var prefix="-"+domPrefixes[i].toLowerCase()+"-";animationString=prefix+animationString;playState=prefix+playState;keyframeString="@"+prefix+"keyframes "+animationName+" ";css3AnimationIsSupported=true;break}}}if(css3AnimationIsSupported){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s infinite "+o.css3easing;$this.data("css3AnimationIsSupported",true)}}var _rePositionVertically=function(){$marqueeWrapper.css("transform","translateY("+(o.direction==="up"?containerHeight+"px":"-"+elHeight+"px")+")")},_rePositionHorizontally=function(){$marqueeWrapper.css("transform","translateX("+(o.direction==="left"?containerWidth+"px":"-"+elWidth+"px")+")")};if(o.duplicated){if(verticalDir){if(o.startVisible){$marqueeWrapper.css("transform","translateY(0)")}else{$marqueeWrapper.css("transform","translateY("+(o.direction==="up"?containerHeight+"px":"-"+(elHeight*2-o.gap)+"px")+")")}}else{if(o.startVisible){$marqueeWrapper.css("transform","translateX(0)")}else{$marqueeWrapper.css("transform","translateX("+(o.direction==="left"?containerWidth+"px":"-"+(elWidth*2-o.gap)+"px")+")")}}if(!o.startVisible){loopCount=1}}else if(o.startVisible){loopCount=2}else{if(verticalDir){_rePositionVertically()}else{_rePositionHorizontally()}}var animate=function(){if(o.duplicated){if(loopCount===1){o._originalDuration=o.duration;if(verticalDir){o.duration=o.direction==="up"?o.duration+containerHeight/(elHeight/o.duration):o.duration*2}else{o.duration=o.direction==="left"?o.duration+containerWidth/(elWidth/o.duration):o.duration*2}if(animationCss3Str){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing}loopCount++}else if(loopCount===2){o.duration=o._originalDuration;if(animationCss3Str){animationName=animationName+"0";keyframeString=$.trim(keyframeString)+"0 ";animationCss3Str=animationName+" "+o.duration/1e3+"s 0s infinite "+o.css3easing}loopCount++}}if(verticalDir){if(o.duplicated){if(loopCount>2){$marqueeWrapper.css("transform","translateY("+(o.direction==="up"?0:"-"+elHeight+"px")+")")}animationCss={transform:"translateY("+(o.direction==="up"?"-"+elHeight+"px":0)+")"}}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing}animationCss={transform:"translateY("+(o.direction==="up"?"-"+elHeight+"px":containerHeight+"px")+")"};loopCount++}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+"0";keyframeString=$.trim(keyframeString)+"0 ";animationCss3Str=animationName+" "+o.duration/1e3+"s 0s infinite "+o.css3easing}_rePositionVertically()}}else{_rePositionVertically();animationCss={transform:"translateY("+(o.direction==="up"?"-"+$marqueeWrapper.height()+"px":containerHeight+"px")+")"}}}else{if(o.duplicated){if(loopCount>2){$marqueeWrapper.css("transform","translateX("+(o.direction==="left"?0:"-"+elWidth+"px")+")")}animationCss={transform:"translateX("+(o.direction==="left"?"-"+elWidth+"px":0)+")"}}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing}animationCss={transform:"translateX("+(o.direction==="left"?"-"+elWidth+"px":containerWidth+"px")+")"};loopCount++}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+"0";keyframeString=$.trim(keyframeString)+"0 ";animationCss3Str=animationName+" "+o.duration/1e3+"s 0s infinite "+o.css3easing}_rePositionHorizontally()}}else{_rePositionHorizontally();animationCss={transform:"translateX("+(o.direction==="left"?"-"+elWidth+"px":containerWidth+"px")+")"}}}$this.trigger("beforeStarting");if(css3AnimationIsSupported){$marqueeWrapper.css(animationString,animationCss3Str);var keyframeCss=keyframeString+" { 100%  "+_objToString(animationCss)+"}",$styles=$marqueeWrapper.find("style");if($styles.length!==0){$styles.filter(":last").html(keyframeCss)}else{$("head").append("<style>"+keyframeCss+"</style>")}_prefixedEvent($marqueeWrapper[0],"AnimationIteration",function(){$this.trigger("finished")});_prefixedEvent($marqueeWrapper[0],"AnimationEnd",function(){animate();$this.trigger("finished")})}else{$marqueeWrapper.animate(animationCss,o.duration,o.easing,function(){$this.trigger("finished");if(o.pauseOnCycle){_startAnimationWithDelay()}else{animate()}})}$this.data("runningStatus","resumed")};$this.on("pause",methods.pause);$this.on("resume",methods.resume);if(o.pauseOnHover){$this.on("mouseenter",methods.pause);$this.on("mouseleave",methods.resume)}if(css3AnimationIsSupported&&o.allowCss3Support){animate()}else{_startAnimationWithDelay()}})};$.fn.marquee.defaults={allowCss3Support:true,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:false,duration:5e3,speed:0,gap:20,pauseOnCycle:false,pauseOnHover:false,startVisible:false}});

/*!
 * DrawSVGPlugin 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function i(){return"undefined"!=typeof window}function j(){return t||i()&&(t=window.gsap)&&t.registerPlugin&&t}function m(e){return Math.round(1e4*e)/1e4}function n(e){return parseFloat(e||0)}function o(e,t){return n(e.getAttribute(t))}function q(e,t,s,r,i,o){return P(Math.pow((n(s)-n(e))*i,2)+Math.pow((n(r)-n(t))*o,2))}function r(e){return console.warn(e)}function s(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function v(e){if(!(e=k(e)[0]))return 0;var t,n,i,a,f,h,d,l=e.tagName.toLowerCase(),u=e.style,c=1,g=1;s(e)&&(g=e.getScreenCTM(),c=P(g.a*g.a+g.b*g.b),g=P(g.d*g.d+g.c*g.c));try{n=e.getBBox()}catch(e){r("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var _=n||{x:0,y:0,width:0,height:0},p=_.x,x=_.y,y=_.width,m=_.height;if(n&&(y||m)||!M[l]||(y=o(e,M[l][0]),m=o(e,M[l][1]),"rect"!==l&&"line"!==l&&(y*=2,m*=2),"line"===l&&(p=o(e,"x1"),x=o(e,"y1"),y=Math.abs(y-p),m=Math.abs(m-x))),"path"===l)a=u.strokeDasharray,u.strokeDasharray="none",t=e.getTotalLength()||0,c!==g&&r("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(c+g)/2,u.strokeDasharray=a;else if("rect"===l)t=2*y*c+2*m*g;else if("line"===l)t=q(p,x,p+y,x+m,c,g);else if("polyline"===l||"polygon"===l)for(i=e.getAttribute("points").match(b)||[],"polygon"===l&&i.push(i[0],i[1]),t=0,f=2;f<i.length;f+=2)t+=q(i[f-2],i[f-1],i[f],i[f+1],c,g)||0;else"circle"!==l&&"ellipse"!==l||(h=y/2*c,d=m/2*g,t=Math.PI*(3*(h+d)-P((3*h+d)*(h+3*d))));return t||0}function w(e,t){if(!(e=k(e)[0]))return[0,0];t=t||v(e)+1;var s=h.getComputedStyle(e),r=s.strokeDasharray||"",i=n(s.strokeDashoffset),o=r.indexOf(",");return o<0&&(o=r.indexOf(" ")),t<(r=o<0?t:n(r.substr(0,o))||1e-5)&&(r=t),[Math.max(0,-i),Math.max(0,r-i)]}function x(){i()&&(h=window,l=t=j(),k=t.utils.toArray,d=-1!==((h.navigator||{}).userAgent||"").indexOf("Edge"))}var t,k,h,d,l,b=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,M={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},P=Math.sqrt,a={version:"3.5.1",name:"drawSVG",register:function register(e){t=e,x()},init:function init(e,t){if(!e.getBBox)return!1;l||x();var r,i,o,a,f=v(e)+1;return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function _parse(e,t,s){var r,i,o=e.indexOf(" ");return i=o<0?(r=void 0!==s?s+"":e,e):(r=e.substr(0,o),e.substr(o+1)),r=~r.indexOf("%")?n(r)/100*t:n(r),(i=~i.indexOf("%")?n(i)/100*t:n(i))<r?[i,r]:[r,i]}(t,f,(r=w(e,f))[0]),this._length=m(f+10),0===r[0]&&0===i[0]?(o=Math.max(1e-5,i[1]-f),this._dash=m(f+o),this._offset=m(f-r[1]+o),this._offsetPT=this.add(this,"_offset",this._offset,m(f-i[1]+o))):(this._dash=m(r[1]-r[0])||1e-6,this._offset=m(-r[0]),this._dashPT=this.add(this,"_dash",this._dash,m(i[1]-i[0])||1e-5),this._offsetPT=this.add(this,"_offset",this._offset,m(-i[0]))),d&&(a=h.getComputedStyle(e)).strokeLinecap!==a.strokeLinejoin&&(i=n(a.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",i,i+.01)),this._live=s(e)||~(t+"").indexOf("live"),this._props.push("drawSVG"),1},render:function render(e,t){var n,s,r,i,o=t._pt,a=t._style;if(o){for(t._live&&(n=v(t._target)+11)!==t._length&&(s=n/t._length,t._length=n,t._offsetPT.s*=s,t._offsetPT.c*=s,t._dashPT?(t._dashPT.s*=s,t._dashPT.c*=s):t._dash*=s);o;)o.r(e,o.d),o=o._next;r=t._dash,i=t._offset,n=t._length,a.strokeDashoffset=t._offset,1!==e&&e?a.strokeDasharray=r+"px,"+n+"px":(r-i<.001&&n-r<=10&&(a.strokeDashoffset=i+1),a.strokeDasharray=i<.001&&n-r<=10?"none":i===r?"0px, 999999px":r+"px,"+n+"px")}},getLength:v,getPosition:w};j()&&t.registerPlugin(a),e.DrawSVGPlugin=a,e.default=a;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * ScrollTrigger 3.5.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2020, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _win,
	    _doc,
	    _docEl,
	    _body,
	    _root,
	    _resizeDelay,
	    _raf,
	    _request,
	    _toArray,
	    _clamp,
	    _time2,
	    _syncInterval,
	    _refreshing,
	    _pointerIsDown,
	    _transformProp,
	    _i,
	    _prevWidth,
	    _prevHeight,
	    _autoRefresh,
	    _sort,
	    _limitCallbacks,
	    _startup = 1,
	    _proxies = [],
	    _scrollers = [],
	    _getTime = Date.now,
	    _time1 = _getTime(),
	    _lastScrollTime = 0,
	    _enabled = 1,
	    _passThrough = function _passThrough(v) {
	  return v;
	},
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isViewport = function _isViewport(e) {
	  return !!~_root.indexOf(e);
	},
	    _getProxyProp = function _getProxyProp(element, property) {
	  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
	},
	    _getScrollFunc = function _getScrollFunc(element, _ref) {
	  var s = _ref.s,
	      sc = _ref.sc;

	  var i = _scrollers.indexOf(element),
	      offset = sc === _vertical.sc ? 1 : 2;

	  !~i && (i = _scrollers.push(element) - 1);
	  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
	    return arguments.length ? element[s] = value : element[s];
	  }));
	},
	    _getBoundsFunc = function _getBoundsFunc(element) {
	  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
	    _winOffsets.width = _win.innerWidth;
	    _winOffsets.height = _win.innerHeight;
	    return _winOffsets;
	  } : function () {
	    return _getBounds(element);
	  });
	},
	    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
	  var d = _ref2.d,
	      d2 = _ref2.d2,
	      a = _ref2.a;
	  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
	    return a()[d];
	  } : function () {
	    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
	  };
	},
	    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
	  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
	    return _winOffsets;
	  };
	},
	    _maxScroll = function _maxScroll(element, _ref3) {
	  var s = _ref3.s,
	      d2 = _ref3.d2,
	      d = _ref3.d,
	      a = _ref3.a;
	  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
	},
	    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
	  for (var i = 0; i < _autoRefresh.length; i += 3) {
	    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
	  }
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _isObject = function _isObject(value) {
	  return typeof value === "object";
	},
	    _callIfFunc = function _callIfFunc(value) {
	  return _isFunction(value) && value();
	},
	    _combineFunc = function _combineFunc(f1, f2) {
	  return function () {
	    var result1 = _callIfFunc(f1),
	        result2 = _callIfFunc(f2);

	    return function () {
	      _callIfFunc(result1);

	      _callIfFunc(result2);
	    };
	  };
	},
	    _abs = Math.abs,
	    _scrollLeft = "scrollLeft",
	    _scrollTop = "scrollTop",
	    _left = "left",
	    _top = "top",
	    _right = "right",
	    _bottom = "bottom",
	    _width = "width",
	    _height = "height",
	    _Right = "Right",
	    _Left = "Left",
	    _Top = "Top",
	    _Bottom = "Bottom",
	    _padding = "padding",
	    _margin = "margin",
	    _Width = "Width",
	    _Height = "Height",
	    _px = "px",
	    _horizontal = {
	  s: _scrollLeft,
	  p: _left,
	  p2: _Left,
	  os: _right,
	  os2: _Right,
	  d: _width,
	  d2: _Width,
	  a: "x",
	  sc: function sc(value) {
	    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
	  }
	},
	    _vertical = {
	  s: _scrollTop,
	  p: _top,
	  p2: _Top,
	  os: _bottom,
	  os2: _Bottom,
	  d: _height,
	  d2: _Height,
	  a: "y",
	  op: _horizontal,
	  sc: function sc(value) {
	    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
	  }
	},
	    _getComputedStyle = function _getComputedStyle(element) {
	  return _win.getComputedStyle(element);
	},
	    _makePositionable = function _makePositionable(element) {
	  return element.style.position = _getComputedStyle(element).position === "absolute" ? "absolute" : "relative";
	},
	    _setDefaults = function _setDefaults(obj, defaults) {
	  for (var p in defaults) {
	    p in obj || (obj[p] = defaults[p]);
	  }

	  return obj;
	},
	    _getBounds = function _getBounds(element, withoutTransforms) {
	  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
	    x: 0,
	    y: 0,
	    xPercent: 0,
	    yPercent: 0,
	    rotation: 0,
	    rotationX: 0,
	    rotationY: 0,
	    scale: 1,
	    skewX: 0,
	    skewY: 0
	  }).progress(1),
	      bounds = element.getBoundingClientRect();
	  tween && tween.progress(0).kill();
	  return bounds;
	},
	    _getSize = function _getSize(element, _ref4) {
	  var d2 = _ref4.d2;
	  return element["offset" + d2] || element["client" + d2] || 0;
	},
	    _getLabels = function _getLabels(animation) {
	  return function (value) {
	    var a = [],
	        labels = animation.labels,
	        duration = animation.duration(),
	        p;

	    for (p in labels) {
	      a.push(labels[p] / duration);
	    }

	    return gsap.utils.snap(a, value);
	  };
	},
	    _multiListener = function _multiListener(func, element, types, callback) {
	  return types.split(",").forEach(function (type) {
	    return func(element, type, callback);
	  });
	},
	    _addListener = function _addListener(element, type, func) {
	  return element.addEventListener(type, func, {
	    passive: true
	  });
	},
	    _removeListener = function _removeListener(element, type, func) {
	  return element.removeEventListener(type, func);
	},
	    _markerDefaults = {
	  startColor: "green",
	  endColor: "red",
	  indent: 0,
	  fontSize: "16px",
	  fontWeight: "normal"
	},
	    _defaults = {
	  toggleActions: "play",
	  anticipatePin: 0
	},
	    _keywords = {
	  top: 0,
	  left: 0,
	  center: 0.5,
	  bottom: 1,
	  right: 1
	},
	    _offsetToPx = function _offsetToPx(value, size) {
	  if (_isString(value)) {
	    var eqIndex = value.indexOf("="),
	        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

	    if (relative) {
	      value.indexOf("%") > eqIndex && (relative *= size / 100);
	      value = value.substr(0, eqIndex - 1);
	    }

	    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
	  }

	  return value;
	},
	    _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
	  var startColor = _ref5.startColor,
	      endColor = _ref5.endColor,
	      fontSize = _ref5.fontSize,
	      indent = _ref5.indent,
	      fontWeight = _ref5.fontWeight;

	  var e = _doc.createElement("div"),
	      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
	      isScroller = type.indexOf("scroller") !== -1,
	      parent = useFixedPosition ? _body : container,
	      isStart = type.indexOf("start") !== -1,
	      color = isStart ? startColor : endColor,
	      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

	  css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
	  (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
	  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
	  e._isStart = isStart;
	  e.setAttribute("class", "gsap-marker-" + type);
	  e.style.cssText = css;
	  e.innerText = name || name === 0 ? type + "-" + name : type;
	  parent.insertBefore(e, parent.children[0]);
	  e._offset = e["offset" + direction.op.d2];

	  _positionMarker(e, 0, direction, isStart);

	  return e;
	},
	    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
	  var vars = {
	    display: "block"
	  },
	      side = direction[flipped ? "os2" : "p2"],
	      oppositeSide = direction[flipped ? "p2" : "os2"];
	  marker._isFlipped = flipped;
	  vars[direction.a + "Percent"] = flipped ? -100 : 0;
	  vars[direction.a] = flipped ? 1 : 0;
	  vars["border" + side + _Width] = 1;
	  vars["border" + oppositeSide + _Width] = 0;
	  vars[direction.p] = start;
	  gsap.set(marker, vars);
	},
	    _triggers = [],
	    _ids = {},
	    _sync = function _sync() {
	  return _request || (_request = _raf(_updateAll));
	},
	    _onScroll = function _onScroll() {
	  if (!_request) {
	    _request = _raf(_updateAll);
	    _lastScrollTime || _dispatch("scrollStart");
	    _lastScrollTime = _getTime();
	  }
	},
	    _onResize = function _onResize() {
	  return !_refreshing && _resizeDelay.restart(true);
	},
	    _listeners = {},
	    _emptyArray = [],
	    _media = [],
	    _creatingMedia,
	    _lastMediaTick,
	    _onMediaChange = function _onMediaChange(e) {
	  var tick = gsap.ticker.frame,
	      matches = [],
	      i = 0,
	      index;

	  if (_lastMediaTick !== tick || _startup) {
	    _revertAll();

	    for (; i < _media.length; i += 4) {
	      index = _win.matchMedia(_media[i]).matches;

	      if (index !== _media[i + 3]) {
	        _media[i + 3] = index;
	        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
	      }
	    }

	    _revertRecorded();

	    for (i = 0; i < matches.length; i++) {
	      index = matches[i];
	      _creatingMedia = _media[index];
	      _media[index + 2] = _media[index + 1](e);
	    }

	    _creatingMedia = 0;

	    _refreshAll(0, 1);

	    _lastMediaTick = tick;

	    _dispatch("matchMedia");
	  }
	},
	    _softRefresh = function _softRefresh() {
	  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
	},
	    _dispatch = function _dispatch(type) {
	  return _listeners[type] && _listeners[type].map(function (f) {
	    return f();
	  }) || _emptyArray;
	},
	    _savedStyles = [],
	    _revertRecorded = function _revertRecorded(media) {
	  for (var i = 0; i < _savedStyles.length; i += 4) {
	    if (!media || _savedStyles[i + 3] === media) {
	      _savedStyles[i].style.cssText = _savedStyles[i + 1];
	      _savedStyles[i + 2].uncache = 1;
	    }
	  }
	},
	    _revertAll = function _revertAll(kill, media) {
	  var trigger;

	  for (_i = 0; _i < _triggers.length; _i++) {
	    trigger = _triggers[_i];

	    if (!media || trigger.media === media) {
	      if (kill) {
	        trigger.kill(1);
	      } else {
	        trigger.scroll.rec || (trigger.scroll.rec = trigger.scroll());
	        trigger.revert();
	      }
	    }
	  }

	  _revertRecorded(media);

	  media || _dispatch("revert");
	},
	    _refreshAll = function _refreshAll(force, skipRevert) {
	  if (_lastScrollTime && !force) {
	    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	    return;
	  }

	  var refreshInits = _dispatch("refreshInit");

	  _sort && ScrollTrigger.sort();
	  skipRevert || _revertAll();

	  for (_i = 0; _i < _triggers.length; _i++) {
	    _triggers[_i].refresh();
	  }

	  refreshInits.forEach(function (result) {
	    return result && result.render && result.render(-1);
	  });
	  _i = _triggers.length;

	  while (_i--) {
	    _triggers[_i].scroll.rec = 0;
	  }

	  _resizeDelay.pause();

	  _dispatch("refresh");
	},
	    _lastScroll = 0,
	    _direction = 1,
	    _updateAll = function _updateAll() {
	  var l = _triggers.length,
	      time = _getTime(),
	      recordVelocity = time - _time1 >= 50,
	      scroll = l && _triggers[0].scroll();

	  _direction = _lastScroll > scroll ? -1 : 1;
	  _lastScroll = scroll;

	  if (recordVelocity) {
	    if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
	      _lastScrollTime = 0;

	      _dispatch("scrollEnd");
	    }

	    _time2 = _time1;
	    _time1 = time;
	  }

	  if (_direction < 0) {
	    _i = l;

	    while (_i--) {
	      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	    }

	    _direction = 1;
	  } else {
	    for (_i = 0; _i < l; _i++) {
	      _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	    }
	  }

	  _request = 0;
	},
	    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float"],
	    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
	    _swapPinOut = function _swapPinOut(pin, spacer, state) {
	  _setState(state);

	  if (pin.parentNode === spacer) {
	    var parent = spacer.parentNode;

	    if (parent) {
	      parent.insertBefore(pin, spacer);
	      parent.removeChild(spacer);
	    }
	  }
	},
	    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
	  if (pin.parentNode !== spacer) {
	    var i = _propNamesToCopy.length,
	        spacerStyle = spacer.style,
	        pinStyle = pin.style,
	        p;

	    while (i--) {
	      p = _propNamesToCopy[i];
	      spacerStyle[p] = cs[p];
	    }

	    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
	    cs.display === "inline" && (spacerStyle.display = "inline-block");
	    pinStyle[_bottom] = pinStyle[_right] = "auto";
	    spacerStyle.overflow = "visible";
	    spacerStyle.boxSizing = "border-box";
	    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
	    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
	    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

	    _setState(spacerState);

	    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
	    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
	    pinStyle[_padding] = cs[_padding];
	    pin.parentNode.insertBefore(spacer, pin);
	    spacer.appendChild(pin);
	  }
	},
	    _capsExp = /([A-Z])/g,
	    _setState = function _setState(state) {
	  if (state) {
	    var style = state.t.style,
	        l = state.length,
	        i = 0,
	        p,
	        value;

	    for (; i < l; i += 2) {
	      value = state[i + 1];
	      p = state[i];

	      if (value) {
	        style[p] = value;
	      } else if (style[p]) {
	        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
	      }
	    }
	  }
	},
	    _getState = function _getState(element) {
	  var l = _stateProps.length,
	      style = element.style,
	      state = [],
	      i = 0;

	  for (; i < l; i++) {
	    state.push(_stateProps[i], style[_stateProps[i]]);
	  }

	  state.t = element;
	  return state;
	},
	    _copyState = function _copyState(state, override, omitOffsets) {
	  var result = [],
	      l = state.length,
	      i = omitOffsets ? 8 : 0,
	      p;

	  for (; i < l; i += 2) {
	    p = state[i];
	    result.push(p, p in override ? override[p] : state[i + 1]);
	  }

	  result.t = state.t;
	  return result;
	},
	    _winOffsets = {
	  left: 0,
	  top: 0
	},
	    _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
	  _isFunction(value) && (value = value(self));

	  if (_isString(value) && value.substr(0, 3) === "max") {
	    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
	  }

	  if (!_isNumber(value)) {
	    _isFunction(trigger) && (trigger = trigger(self));

	    var element = _toArray(trigger)[0] || _body,
	        bounds = _getBounds(element) || {},
	        offsets = value.split(" "),
	        localOffset,
	        globalOffset,
	        display;

	    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
	      display = element.style.display;
	      element.style.display = "block";
	      bounds = _getBounds(element);
	      display ? element.style.display = display : element.style.removeProperty("display");
	    }

	    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
	    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
	    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
	    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
	    scrollerSize -= scrollerSize - globalOffset;
	  } else if (markerScroller) {
	    _positionMarker(markerScroller, scrollerSize, direction, true);
	  }

	  if (marker) {
	    var position = value + scrollerSize,
	        isStart = marker._isStart;
	    scrollerMax = "scroll" + direction.d2;

	    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);

	    if (useFixedPosition) {
	      scrollerBounds = _getBounds(markerScroller);
	      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
	    }
	  }

	  return Math.round(value);
	},
	    _prefixExp = /(?:webkit|moz|length|cssText)/i,
	    _reparent = function _reparent(element, parent, top, left) {
	  if (element.parentNode !== parent) {
	    var style = element.style,
	        p,
	        cs;

	    if (parent === _body) {
	      element._stOrig = style.cssText;
	      cs = _getComputedStyle(element);

	      for (p in cs) {
	        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
	          style[p] = cs[p];
	        }
	      }

	      style.top = top;
	      style.left = left;
	    } else {
	      style.cssText = element._stOrig;
	    }

	    gsap.core.getCache(element).uncache = 1;
	    parent.appendChild(element);
	  }
	},
	    _getTweenCreator = function _getTweenCreator(scroller, direction) {
	  var getScroll = _getScrollFunc(scroller, direction),
	      prop = "_scroll" + direction.p2,
	      lastScroll1,
	      lastScroll2,
	      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
	    var tween = getTween.tween,
	        onComplete = vars.onComplete,
	        modifiers = {};
	    tween && tween.kill();
	    lastScroll1 = Math.round(initialValue);
	    vars[prop] = scrollTo;
	    vars.modifiers = modifiers;

	    modifiers[prop] = function (value) {
	      value = Math.round(getScroll());

	      if (value !== lastScroll1 && value !== lastScroll2) {
	        tween.kill();
	        getTween.tween = 0;
	      } else {
	        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
	      }

	      lastScroll2 = lastScroll1;
	      return lastScroll1 = Math.round(value);
	    };

	    vars.onComplete = function () {
	      getTween.tween = 0;
	      onComplete && onComplete.call(tween);
	    };

	    tween = getTween.tween = gsap.to(scroller, vars);
	    return tween;
	  };

	  scroller[prop] = getScroll;
	  return getTween;
	};

	_horizontal.op = _vertical;
	var ScrollTrigger = function () {
	  function ScrollTrigger(vars, animation) {
	    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
	    this.init(vars, animation);
	  }

	  var _proto = ScrollTrigger.prototype;

	  _proto.init = function init(vars, animation) {
	    this.progress = 0;
	    this.vars && this.kill(1);

	    if (!_enabled) {
	      this.update = this.refresh = this.kill = _passThrough;
	      return;
	    }

	    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
	      trigger: vars
	    } : vars, _defaults);

	    var direction = vars.horizontal ? _horizontal : _vertical,
	        _vars = vars,
	        onUpdate = _vars.onUpdate,
	        toggleClass = _vars.toggleClass,
	        id = _vars.id,
	        onToggle = _vars.onToggle,
	        onRefresh = _vars.onRefresh,
	        scrub = _vars.scrub,
	        trigger = _vars.trigger,
	        pin = _vars.pin,
	        pinSpacing = _vars.pinSpacing,
	        invalidateOnRefresh = _vars.invalidateOnRefresh,
	        anticipatePin = _vars.anticipatePin,
	        onScrubComplete = _vars.onScrubComplete,
	        onSnapComplete = _vars.onSnapComplete,
	        once = _vars.once,
	        snap = _vars.snap,
	        pinReparent = _vars.pinReparent,
	        isToggle = !scrub && scrub !== 0,
	        scroller = _toArray(vars.scroller || _win)[0],
	        scrollerCache = gsap.core.getCache(scroller),
	        isViewport = _isViewport(scroller),
	        useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
	        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
	        toggleActions = isToggle && vars.toggleActions.split(" "),
	        markers = "markers" in vars ? vars.markers : _defaults.markers,
	        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
	        self = this,
	        onRefreshInit = vars.onRefreshInit && function () {
	      return vars.onRefreshInit(self);
	    },
	        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
	        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
	        tweenTo,
	        pinCache,
	        snapFunc,
	        isReverted,
	        scroll1,
	        scroll2,
	        start,
	        end,
	        markerStart,
	        markerEnd,
	        markerStartTrigger,
	        markerEndTrigger,
	        markerVars,
	        change,
	        pinOriginalState,
	        pinActiveState,
	        pinState,
	        spacer,
	        offset,
	        pinGetter,
	        pinSetter,
	        pinStart,
	        pinChange,
	        spacingStart,
	        spacerState,
	        markerStartSetter,
	        markerEndSetter,
	        cs,
	        snap1,
	        snap2,
	        scrubTween,
	        scrubSmooth,
	        snapDurClamp,
	        snapDelayedCall,
	        prevProgress,
	        prevScroll,
	        prevAnimProgress;

	    self.media = _creatingMedia;
	    anticipatePin *= 45;

	    _triggers.push(self);

	    self.scroller = scroller;
	    self.scroll = _getScrollFunc(scroller, direction);
	    scroll1 = self.scroll();
	    self.vars = vars;
	    animation = animation || vars.animation;
	    "refreshPriority" in vars && (_sort = 1);
	    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
	      top: _getTweenCreator(scroller, _vertical),
	      left: _getTweenCreator(scroller, _horizontal)
	    };
	    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

	    if (animation) {
	      animation.vars.lazy = false;
	      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
	      self.animation = animation.pause();
	      animation.scrollTrigger = self;
	      scrubSmooth = _isNumber(scrub) && scrub;
	      scrubSmooth && (scrubTween = gsap.to(animation, {
	        ease: "power3",
	        duration: scrubSmooth,
	        onComplete: function onComplete() {
	          return onScrubComplete && onScrubComplete(self);
	        }
	      }));
	      snap1 = 0;
	      id || (id = animation.vars.id);
	    }

	    if (snap) {
	      _isObject(snap) || (snap = {
	        snapTo: snap
	      });
	      gsap.set(isViewport ? [_body, _docEl] : scroller, {
	        scrollBehavior: "auto"
	      });
	      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getLabels(animation) : gsap.utils.snap(snap.snapTo);
	      snapDurClamp = snap.duration || {
	        min: 0.1,
	        max: 2
	      };
	      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
	      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
	        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown) {
	          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
	              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
	              change1 = _abs(velocity / 2) * velocity / 0.185,
	              naturalEnd = totalProgress + change1,
	              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
	              scroll = self.scroll(),
	              endScroll = Math.round(start + endValue * change),
	              tween = tweenTo.tween;

	          if (scroll <= end && scroll >= start && endScroll !== scroll) {
	            if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
	              return;
	            }

	            tweenTo(endScroll, {
	              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
	              ease: snap.ease || "power3",
	              data: Math.abs(endScroll - scroll),
	              onComplete: function onComplete() {
	                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
	                onSnapComplete && onSnapComplete(self);
	              }
	            }, scroll, change1 * change, endScroll - scroll - change1 * change);
	          }
	        } else if (self.isActive) {
	          snapDelayedCall.restart(true);
	        }
	      }).pause();
	    }

	    id && (_ids[id] = self);
	    trigger = self.trigger = _toArray(trigger || pin)[0];
	    pin = pin === true ? trigger : _toArray(pin)[0];
	    _isString(toggleClass) && (toggleClass = {
	      targets: trigger,
	      className: toggleClass
	    });

	    if (pin) {
	      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
	      self.pin = pin;
	      vars.force3D !== false && gsap.set(pin, {
	        force3D: true
	      });
	      pinCache = gsap.core.getCache(pin);

	      if (!pinCache.spacer) {
	        pinCache.spacer = spacer = _doc.createElement("div");
	        spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
	        pinCache.pinState = pinOriginalState = _getState(pin);
	      } else {
	        pinOriginalState = pinCache.pinState;
	      }

	      self.spacer = spacer = pinCache.spacer;
	      cs = _getComputedStyle(pin);
	      spacingStart = cs[pinSpacing + direction.os2];
	      pinGetter = gsap.getProperty(pin);
	      pinSetter = gsap.quickSetter(pin, direction.a, _px);

	      _swapPinIn(pin, spacer, cs);

	      pinState = _getState(pin);
	    }

	    if (markers) {
	      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
	      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
	      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
	      offset = markerStartTrigger["offset" + direction.op.d2];
	      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
	      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);

	      if (!useFixedPosition) {
	        _makePositionable(scroller);

	        gsap.set([markerStartTrigger, markerEndTrigger], {
	          force3D: true
	        });
	        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
	        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
	      }
	    }

	    self.revert = function (revert) {
	      var r = revert !== false || !self.enabled,
	          prevRefreshing = _refreshing;

	      if (r !== isReverted) {
	        if (r) {
	          prevScroll = Math.max(self.scroll(), self.scroll.rec || 0);
	          prevProgress = self.progress;
	          prevAnimProgress = animation && animation.progress();
	        }

	        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
	          return m.style.display = r ? "none" : "block";
	        });
	        r && (_refreshing = 1);
	        self.update(r);
	        _refreshing = prevRefreshing;
	        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
	        isReverted = r;
	      }
	    };

	    self.refresh = function (soft) {
	      if (_refreshing || !self.enabled) {
	        return;
	      }

	      if (pin && soft && _lastScrollTime) {
	        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	        return;
	      }

	      _refreshing = 1;
	      scrubTween && scrubTween.kill();
	      invalidateOnRefresh && animation && animation.progress(0).invalidate();
	      isReverted || self.revert();

	      var size = getScrollerSize(),
	          scrollerBounds = getScrollerOffsets(),
	          max = _maxScroll(scroller, direction),
	          offset = 0,
	          otherPinOffset = 0,
	          parsedEnd = vars.end,
	          parsedEndTrigger = vars.endTrigger || trigger,
	          parsedStart = vars.start || (vars.start === 0 ? 0 : pin || !trigger ? "0 0" : "0 100%"),
	          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
	          i = triggerIndex,
	          cs,
	          bounds,
	          scroll,
	          isVertical,
	          override,
	          curTrigger,
	          curPin,
	          oppositeScroll;

	      while (i--) {
	        curPin = _triggers[i].pin;
	        curPin && (curPin === trigger || curPin === pin) && _triggers[i].revert();
	      }

	      start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
	      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

	      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
	        if (~parsedEnd.indexOf(" ")) {
	          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
	        } else {
	          offset = _offsetToPx(parsedEnd.substr(2), size);
	          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
	          parsedEndTrigger = trigger;
	        }
	      }

	      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
	      change = end - start || (start -= 0.01) && 0.001;
	      offset = 0;
	      i = triggerIndex;

	      while (i--) {
	        curTrigger = _triggers[i];
	        curPin = curTrigger.pin;

	        if (curPin && curTrigger.start - curTrigger._pinPush < start) {
	          cs = curTrigger.end - curTrigger.start;
	          curPin === trigger && (offset += cs);
	          curPin === pin && (otherPinOffset += cs);
	        }
	      }

	      start += offset;
	      end += offset;
	      self._pinPush = otherPinOffset;

	      if (markerStart && offset) {
	        cs = {};
	        cs[direction.a] = "+=" + offset;
	        gsap.set([markerStart, markerEnd], cs);
	      }

	      if (pin) {
	        cs = _getComputedStyle(pin);
	        isVertical = direction === _vertical;
	        scroll = self.scroll();
	        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
	        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");

	        _swapPinIn(pin, spacer, cs);

	        pinState = _getState(pin);
	        bounds = _getBounds(pin, true);
	        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

	        if (pinSpacing) {
	          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
	          spacerState.t = spacer;
	          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
	          i && spacerState.push(direction.d, i + _px);

	          _setState(spacerState);

	          useFixedPosition && self.scroll(prevScroll);
	        }

	        if (useFixedPosition) {
	          override = {
	            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
	            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
	            boxSizing: "border-box",
	            position: "fixed"
	          };
	          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
	          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
	          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
	          override[_padding] = cs[_padding];
	          override[_padding + _Top] = cs[_padding + _Top];
	          override[_padding + _Right] = cs[_padding + _Right];
	          override[_padding + _Bottom] = cs[_padding + _Bottom];
	          override[_padding + _Left] = cs[_padding + _Left];
	          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
	        }

	        if (animation) {
	          animation.progress(1, true);
	          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
	          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
	          animation.progress(0, true);
	        } else {
	          pinChange = change;
	        }
	      } else if (trigger && self.scroll()) {
	        bounds = trigger.parentNode;

	        while (bounds && bounds !== _body) {
	          if (bounds._pinOffset) {
	            start -= bounds._pinOffset;
	            end -= bounds._pinOffset;
	          }

	          bounds = bounds.parentNode;
	        }
	      }

	      for (i = 0; i < triggerIndex; i++) {
	        curTrigger = _triggers[i].pin;
	        curTrigger && (curTrigger === trigger || curTrigger === pin) && _triggers[i].revert(false);
	      }

	      self.start = start;
	      self.end = end;
	      scroll1 = scroll2 = self.scroll();
	      scroll1 < prevScroll && self.scroll(prevScroll);
	      self.revert(false);
	      _refreshing = 0;
	      prevAnimProgress && isToggle && animation.progress(prevAnimProgress, true);

	      if (prevProgress !== self.progress) {
	        scrubTween && animation.totalProgress(prevProgress, true);
	        self.progress = prevProgress;
	        self.update();
	      }

	      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
	      onRefresh && onRefresh(self);
	    };

	    self.getVelocity = function () {
	      return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
	    };

	    self.update = function (reset, recordVelocity) {
	      var scroll = self.scroll(),
	          p = reset ? 0 : (scroll - start) / change,
	          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
	          prevProgress = self.progress,
	          isActive,
	          wasActive,
	          toggleState,
	          action,
	          stateChanged,
	          toggled;

	      if (recordVelocity) {
	        scroll2 = scroll1;
	        scroll1 = scroll;

	        if (snap) {
	          snap2 = snap1;
	          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
	        }
	      }

	      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

	      if (clipped !== prevProgress && self.enabled) {
	        isActive = self.isActive = !!clipped && clipped < 1;
	        wasActive = !!prevProgress && prevProgress < 1;
	        toggled = isActive !== wasActive;
	        stateChanged = toggled || !!clipped !== !!prevProgress;
	        self.direction = clipped > prevProgress ? 1 : -1;
	        self.progress = clipped;

	        if (!isToggle) {
	          if (scrubTween && !_refreshing && !_startup) {
	            scrubTween.vars.totalProgress = clipped;
	            scrubTween.invalidate().restart();
	          } else if (animation) {
	            animation.totalProgress(clipped, !!_refreshing);
	          }
	        }

	        if (pin) {
	          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

	          if (!useFixedPosition) {
	            pinSetter(pinStart + pinChange * clipped);
	          } else if (stateChanged) {
	            action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

	            if (pinReparent) {
	              if (!reset && (isActive || action)) {
	                var bounds = _getBounds(pin, true),
	                    _offset = scroll - start;

	                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
	              } else {
	                _reparent(pin, spacer);
	              }
	            }

	            _setState(isActive || action ? pinActiveState : pinState);

	            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
	          }
	        }

	        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
	        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
	          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
	        });
	        onUpdate && !isToggle && !reset && onUpdate(self);

	        if (stateChanged && !_refreshing) {
	          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

	          if (isToggle) {
	            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];

	            if (animation && (action === "complete" || action === "reset" || action in animation)) {
	              if (action === "complete") {
	                animation.pause().totalProgress(1);
	              } else if (action === "reset") {
	                animation.restart(true).pause();
	              } else {
	                animation[action]();
	              }
	            }

	            onUpdate && onUpdate(self);
	          }

	          if (toggled || !_limitCallbacks) {
	            onToggle && toggled && onToggle(self);
	            callbacks[toggleState] && callbacks[toggleState](self);
	            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

	            if (!toggled) {
	              toggleState = clipped === 1 ? 1 : 3;
	              callbacks[toggleState] && callbacks[toggleState](self);
	            }
	          }
	        } else if (isToggle && onUpdate && !_refreshing) {
	          onUpdate(self);
	        }
	      }

	      if (markerEndSetter) {
	        markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
	        markerEndSetter(scroll);
	      }
	    };

	    self.enable = function () {
	      if (!self.enabled) {
	        self.enabled = true;

	        _addListener(scroller, "resize", _onResize);

	        _addListener(scroller, "scroll", _onScroll);

	        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
	        !animation || !animation.add ? self.refresh() : gsap.delayedCall(0.01, function () {
	          return start || end || self.refresh();
	        }) && (change = 0.01) && (start = end = 0);
	      }
	    };

	    self.disable = function (reset, allowAnimation) {
	      if (self.enabled) {
	        reset !== false && self.revert();
	        self.enabled = self.isActive = false;
	        allowAnimation || scrubTween && scrubTween.pause();
	        prevScroll = 0;
	        pinCache && (pinCache.uncache = 1);
	        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

	        if (snapDelayedCall) {
	          snapDelayedCall.pause();
	          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
	        }

	        if (!isViewport) {
	          var i = _triggers.length;

	          while (i--) {
	            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
	              return;
	            }
	          }

	          _removeListener(scroller, "resize", _onResize);

	          _removeListener(scroller, "scroll", _onScroll);
	        }
	      }
	    };

	    self.kill = function (revert, allowAnimation) {
	      self.disable(revert, allowAnimation);
	      id && delete _ids[id];

	      var i = _triggers.indexOf(self);

	      _triggers.splice(i, 1);

	      i === _i && _direction > 0 && _i--;

	      if (animation) {
	        animation.scrollTrigger = null;
	        revert && animation.render(-1);
	        allowAnimation || animation.kill();
	      }

	      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
	        return m.parentNode.removeChild(m);
	      });
	      pinCache && (pinCache.uncache = 1);
	    };

	    self.enable();
	  };

	  ScrollTrigger.register = function register(core) {
	    if (!_coreInitted) {
	      gsap = core || _getGSAP();

	      if (_windowExists() && window.document) {
	        _win = window;
	        _doc = document;
	        _docEl = _doc.documentElement;
	        _body = _doc.body;
	      }

	      if (gsap) {
	        _toArray = gsap.utils.toArray;
	        _clamp = gsap.utils.clamp;
	        gsap.core.globals("ScrollTrigger", ScrollTrigger);

	        if (_body) {
	          _raf = _win.requestAnimationFrame || function (f) {
	            return setTimeout(f, 16);
	          };

	          _addListener(_win, "mousewheel", _onScroll);

	          _root = [_win, _doc, _docEl, _body];

	          _addListener(_doc, "scroll", _onScroll);

	          var bodyStyle = _body.style,
	              border = bodyStyle.borderTop,
	              bounds;
	          bodyStyle.borderTop = "1px solid #000";
	          bounds = _getBounds(_body);
	          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
	          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
	          border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
	          _syncInterval = setInterval(_sync, 200);
	          gsap.delayedCall(0.5, function () {
	            return _startup = 0;
	          });

	          _addListener(_doc, "touchcancel", _passThrough);

	          _addListener(_body, "touchstart", _passThrough);

	          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
	            return _pointerIsDown = 1;
	          });

	          _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
	            return _pointerIsDown = 0;
	          });

	          _transformProp = gsap.utils.checkPrefix("transform");

	          _stateProps.push(_transformProp);

	          _coreInitted = _getTime();
	          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
	          _autoRefresh = [_doc, "visibilitychange", function () {
	            var w = _win.innerWidth,
	                h = _win.innerHeight;

	            if (_doc.hidden) {
	              _prevWidth = w;
	              _prevHeight = h;
	            } else if (_prevWidth !== w || _prevHeight !== h) {
	              _onResize();
	            }
	          }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
	            return _lastScrollTime || _refreshAll();
	          }, _win, "resize", _onResize];

	          _iterateAutoRefresh(_addListener);
	        }
	      }
	    }

	    return _coreInitted;
	  };

	  ScrollTrigger.defaults = function defaults(config) {
	    for (var p in config) {
	      _defaults[p] = config[p];
	    }
	  };

	  ScrollTrigger.kill = function kill() {
	    _enabled = 0;

	    _triggers.slice(0).forEach(function (trigger) {
	      return trigger.kill(1);
	    });
	  };

	  ScrollTrigger.config = function config(vars) {
	    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
	    var ms = vars.syncInterval;
	    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
	    "autoRefreshEvents" in vars && (_iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none"));
	  };

	  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
	    var t = _toArray(target)[0];

	    _isViewport(t) ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
	  };

	  ScrollTrigger.matchMedia = function matchMedia(vars) {
	    var mq, p, i, func, result;

	    for (p in vars) {
	      i = _media.indexOf(p);
	      func = vars[p];
	      _creatingMedia = p;

	      if (p === "all") {
	        func();
	      } else {
	        mq = _win.matchMedia(p);

	        if (mq) {
	          mq.matches && (result = func());

	          if (~i) {
	            _media[i + 1] = _combineFunc(_media[i + 1], func);
	            _media[i + 2] = _combineFunc(_media[i + 2], result);
	          } else {
	            i = _media.length;

	            _media.push(p, func, result);

	            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
	          }

	          _media[i + 3] = mq.matches;
	        }
	      }

	      _creatingMedia = 0;
	    }

	    return _media;
	  };

	  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
	    query || (_media.length = 0);
	    query = _media.indexOf(query);
	    query >= 0 && _media.splice(query, 4);
	  };

	  return ScrollTrigger;
	}();
	ScrollTrigger.version = "3.5.1";

	ScrollTrigger.saveStyles = function (targets) {
	  return targets ? _toArray(targets).forEach(function (target) {
	    var i = _savedStyles.indexOf(target);

	    i >= 0 && _savedStyles.splice(i, 4);

	    _savedStyles.push(target, target.style.cssText, gsap.core.getCache(target), _creatingMedia);
	  }) : _savedStyles;
	};

	ScrollTrigger.revert = function (soft, media) {
	  return _revertAll(!soft, media);
	};

	ScrollTrigger.create = function (vars, animation) {
	  return new ScrollTrigger(vars, animation);
	};

	ScrollTrigger.refresh = function (safe) {
	  return safe ? _onResize() : _refreshAll(true);
	};

	ScrollTrigger.update = _updateAll;

	ScrollTrigger.maxScroll = function (element, horizontal) {
	  return _maxScroll(element, horizontal ? _horizontal : _vertical);
	};

	ScrollTrigger.getScrollFunc = function (element, horizontal) {
	  return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
	};

	ScrollTrigger.getById = function (id) {
	  return _ids[id];
	};

	ScrollTrigger.getAll = function () {
	  return _triggers.slice(0);
	};

	ScrollTrigger.isScrolling = function () {
	  return !!_lastScrollTime;
	};

	ScrollTrigger.addEventListener = function (type, callback) {
	  var a = _listeners[type] || (_listeners[type] = []);
	  ~a.indexOf(callback) || a.push(callback);
	};

	ScrollTrigger.removeEventListener = function (type, callback) {
	  var a = _listeners[type],
	      i = a && a.indexOf(callback);
	  i >= 0 && a.splice(i, 1);
	};

	ScrollTrigger.batch = function (targets, vars) {
	  var result = [],
	      varsCopy = {},
	      interval = vars.interval || 0.016,
	      batchMax = vars.batchMax || 1e9,
	      proxyCallback = function proxyCallback(type, callback) {
	    var elements = [],
	        triggers = [],
	        delay = gsap.delayedCall(interval, function () {
	      callback(elements, triggers);
	      elements = [];
	      triggers = [];
	    }).pause();
	    return function (self) {
	      elements.length || delay.restart(true);
	      elements.push(self.trigger);
	      triggers.push(self);
	      batchMax <= elements.length && delay.progress(1);
	    };
	  },
	      p;

	  for (p in vars) {
	    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
	  }

	  if (_isFunction(batchMax)) {
	    batchMax = batchMax();

	    _addListener(ScrollTrigger, "refresh", function () {
	      return batchMax = vars.batchMax();
	    });
	  }

	  _toArray(targets).forEach(function (target) {
	    var config = {};

	    for (p in varsCopy) {
	      config[p] = varsCopy[p];
	    }

	    config.trigger = target;
	    result.push(ScrollTrigger.create(config));
	  });

	  return result;
	};

	ScrollTrigger.sort = function (func) {
	  return _triggers.sort(func || function (a, b) {
	    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
	  });
	};

	_getGSAP() && gsap.registerPlugin(ScrollTrigger);

	exports.ScrollTrigger = ScrollTrigger;
	exports.default = ScrollTrigger;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * CSSRulePlugin 3.5.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2020, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _doc,
	    CSSPlugin,
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _checkRegister = function _checkRegister() {
	  if (!_coreInitted) {
	    _initCore();

	    if (!CSSPlugin) {
	      console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)");
	    }
	  }

	  return _coreInitted;
	},
	    _initCore = function _initCore(core) {
	  gsap = core || _getGSAP();

	  if (_windowExists()) {
	    _doc = document;
	  }

	  if (gsap) {
	    CSSPlugin = gsap.plugins.css;

	    if (CSSPlugin) {
	      _coreInitted = 1;
	    }
	  }
	};

	var CSSRulePlugin = {
	  version: "3.5.1",
	  name: "cssRule",
	  init: function init(target, value, tween, index, targets) {
	    if (!_checkRegister() || typeof target.cssText === "undefined") {
	      return false;
	    }

	    var div = target._gsProxy = target._gsProxy || _doc.createElement("div");

	    this.ss = target;
	    this.style = div.style;
	    div.style.cssText = target.cssText;
	    CSSPlugin.prototype.init.call(this, div, value, tween, index, targets);
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt,
	        style = data.style,
	        ss = data.ss,
	        i;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    i = style.length;

	    while (--i > -1) {
	      ss[style[i]] = style[style[i]];
	    }
	  },
	  getRule: function getRule(selector) {
	    _checkRegister();

	    var ruleProp = _doc.all ? "rules" : "cssRules",
	        styleSheets = _doc.styleSheets,
	        i = styleSheets.length,
	        pseudo = selector.charAt(0) === ":",
	        j,
	        curSS,
	        cs,
	        a;
	    selector = (pseudo ? "" : ",") + selector.split("::").join(":").toLowerCase() + ",";

	    if (pseudo) {
	      a = [];
	    }

	    while (i--) {
	      try {
	        curSS = styleSheets[i][ruleProp];

	        if (!curSS) {
	          continue;
	        }

	        j = curSS.length;
	      } catch (e) {
	        console.warn(e);
	        continue;
	      }

	      while (--j > -1) {
	        cs = curSS[j];

	        if (cs.selectorText && ("," + cs.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(selector) !== -1) {
	          if (pseudo) {
	            a.push(cs.style);
	          } else {
	            return cs.style;
	          }
	        }
	      }
	    }

	    return a;
	  },
	  register: _initCore
	};
	_getGSAP() && gsap.registerPlugin(CSSRulePlugin);

	exports.CSSRulePlugin = CSSRulePlugin;
	exports.default = CSSRulePlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

// Split Text

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
	function getText(e) {
	  var type = e.nodeType,
	      result = "";

	  if (type === 1 || type === 9 || type === 11) {
	    if (typeof e.textContent === "string") {
	      return e.textContent;
	    } else {
	      for (e = e.firstChild; e; e = e.nextSibling) {
	        result += getText(e);
	      }
	    }
	  } else if (type === 3 || type === 4) {
	    return e.nodeValue;
	  }

	  return result;
	}

	/*!
	 * SplitText: 3.5.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2020, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var _doc,
	    _win,
	    _coreInitted,
	    _stripExp = /(?:\r|\n|\t\t)/g,
	    _multipleSpacesExp = /(?:\s\s+)/g,
	    _initCore = function _initCore() {
	  _doc = document;
	  _win = window;
	  _coreInitted = 1;
	},
	    _getComputedStyle = function _getComputedStyle(element) {
	  return _win.getComputedStyle(element);
	},
	    _isArray = Array.isArray,
	    _slice = [].slice,
	    _toArray = function _toArray(value, leaveStrings) {
	  var type;
	  return _isArray(value) ? value : (type = typeof value) === "string" && !leaveStrings && value ? _slice.call(_doc.querySelectorAll(value), 0) : value && type === "object" && "length" in value ? _slice.call(value, 0) : value ? [value] : [];
	},
	    _isAbsolute = function _isAbsolute(vars) {
	  return vars.position === "absolute" || vars.absolute === true;
	},
	    _findSpecialChars = function _findSpecialChars(text, chars) {
	  var i = chars.length,
	      s;

	  while (--i > -1) {
	    s = chars[i];

	    if (text.substr(0, s.length) === s) {
	      return s.length;
	    }
	  }
	},
	    _divStart = " style='position:relative;display:inline-block;'",
	    _cssClassFunc = function _cssClassFunc(cssClass, tag) {
	  if (cssClass === void 0) {
	    cssClass = "";
	  }

	  var iterate = ~cssClass.indexOf("++"),
	      num = 1;

	  if (iterate) {
	    cssClass = cssClass.split("++").join("");
	  }

	  return function () {
	    return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
	  };
	},
	    _swapText = function _swapText(element, oldText, newText) {
	  var type = element.nodeType;

	  if (type === 1 || type === 9 || type === 11) {
	    for (element = element.firstChild; element; element = element.nextSibling) {
	      _swapText(element, oldText, newText);
	    }
	  } else if (type === 3 || type === 4) {
	    element.nodeValue = element.nodeValue.split(oldText).join(newText);
	  }
	},
	    _pushReversed = function _pushReversed(a, merge) {
	  var i = merge.length;

	  while (--i > -1) {
	    a.push(merge[i]);
	  }
	},
	    _isBeforeWordDelimiter = function _isBeforeWordDelimiter(e, root, wordDelimiter) {
	  var next;

	  while (e && e !== root) {
	    next = e._next || e.nextSibling;

	    if (next) {
	      return next.textContent.charAt(0) === wordDelimiter;
	    }

	    e = e.parentNode || e._parent;
	  }
	},
	    _deWordify = function _deWordify(e) {
	  var children = _toArray(e.childNodes),
	      l = children.length,
	      i,
	      child;

	  for (i = 0; i < l; i++) {
	    child = children[i];

	    if (child._isSplit) {
	      _deWordify(child);
	    } else {
	      if (i && child.previousSibling.nodeType === 3) {
	        child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
	      } else if (child.nodeType !== 3) {
	        e.insertBefore(child.firstChild, child);
	      }

	      e.removeChild(child);
	    }
	  }
	},
	    _getStyleAsNumber = function _getStyleAsNumber(name, computedStyle) {
	  return parseFloat(computedStyle[name]) || 0;
	},
	    _setPositionsAfterSplit = function _setPositionsAfterSplit(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
	  var cs = _getComputedStyle(element),
	      paddingLeft = _getStyleAsNumber("paddingLeft", cs),
	      lineOffsetY = -999,
	      borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs),
	      borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs),
	      padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs),
	      padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs),
	      lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2),
	      textAlign = cs.textAlign,
	      charArray = [],
	      wordArray = [],
	      lineArray = [],
	      wordDelimiter = vars.wordDelimiter || " ",
	      tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
	      types = vars.type || vars.split || "chars,words,lines",
	      lines = allLines && ~types.indexOf("lines") ? [] : null,
	      words = ~types.indexOf("words"),
	      chars = ~types.indexOf("chars"),
	      absolute = _isAbsolute(vars),
	      linesClass = vars.linesClass,
	      iterateLine = ~(linesClass || "").indexOf("++"),
	      spaceNodesToRemove = [],
	      i,
	      j,
	      l,
	      node,
	      nodes,
	      isChild,
	      curLine,
	      addWordSpaces,
	      style,
	      lineNode,
	      lineWidth,
	      offset;

	  if (iterateLine) {
	    linesClass = linesClass.split("++").join("");
	  }

	  j = element.getElementsByTagName("*");
	  l = j.length;
	  nodes = [];

	  for (i = 0; i < l; i++) {
	    nodes[i] = j[i];
	  }

	  if (lines || absolute) {
	    for (i = 0; i < l; i++) {
	      node = nodes[i];
	      isChild = node.parentNode === element;

	      if (isChild || absolute || chars && !words) {
	        offset = node.offsetTop;

	        if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i === 0)) {
	          curLine = [];
	          lines.push(curLine);
	          lineOffsetY = offset;
	        }

	        if (absolute) {
	          node._x = node.offsetLeft;
	          node._y = offset;
	          node._w = node.offsetWidth;
	          node._h = node.offsetHeight;
	        }

	        if (lines) {
	          if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
	            curLine.push(node);
	            node._x -= paddingLeft;

	            if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
	              node._wordEnd = true;
	            }
	          }

	          if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i === 0)) {
	            lines.push([]);
	          }
	        }
	      }
	    }
	  }

	  for (i = 0; i < l; i++) {
	    node = nodes[i];
	    isChild = node.parentNode === element;

	    if (node.nodeName === "BR") {
	      if (lines || absolute) {
	        node.parentNode && node.parentNode.removeChild(node);
	        nodes.splice(i--, 1);
	        l--;
	      } else if (!words) {
	        element.appendChild(node);
	      }

	      continue;
	    }

	    if (absolute) {
	      style = node.style;

	      if (!words && !isChild) {
	        node._x += node.parentNode._x;
	        node._y += node.parentNode._y;
	      }

	      style.left = node._x + "px";
	      style.top = node._y + "px";
	      style.position = "absolute";
	      style.display = "block";
	      style.width = node._w + 1 + "px";
	      style.height = node._h + "px";
	    }

	    if (!words && chars) {
	      if (node._isSplit) {
	        node._next = node.nextSibling;
	        node.parentNode.appendChild(node);
	      } else if (node.parentNode._isSplit) {
	        node._parent = node.parentNode;

	        if (!node.previousSibling && node.firstChild) {
	          node.firstChild._isFirst = true;
	        }

	        if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
	          spaceNodesToRemove.push(node.nextSibling);
	        }

	        node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
	        node.parentNode.removeChild(node);
	        nodes.splice(i--, 1);
	        l--;
	      } else if (!isChild) {
	        offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);

	        if (node.parentNode._parent) {
	          node.parentNode._parent.appendChild(node);
	        }

	        offset && node.parentNode.appendChild(_doc.createTextNode(" "));

	        if (tag === "span") {
	          node.style.display = "inline";
	        }

	        charArray.push(node);
	      }
	    } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
	      wordArray.push(node);
	    } else if (chars && !node._isSplit) {
	      if (tag === "span") {
	        node.style.display = "inline";
	      }

	      charArray.push(node);
	    }
	  }

	  i = spaceNodesToRemove.length;

	  while (--i > -1) {
	    spaceNodesToRemove[i].parentNode.removeChild(spaceNodesToRemove[i]);
	  }

	  if (lines) {
	    if (absolute) {
	      lineNode = _doc.createElement(tag);
	      element.appendChild(lineNode);
	      lineWidth = lineNode.offsetWidth + "px";
	      offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
	      element.removeChild(lineNode);
	    }

	    style = element.style.cssText;
	    element.style.cssText = "display:none;";

	    while (element.firstChild) {
	      element.removeChild(element.firstChild);
	    }

	    addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);

	    for (i = 0; i < lines.length; i++) {
	      curLine = lines[i];
	      lineNode = _doc.createElement(tag);
	      lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");

	      if (linesClass) {
	        lineNode.className = linesClass + (iterateLine ? i + 1 : "");
	      }

	      lineArray.push(lineNode);
	      l = curLine.length;

	      for (j = 0; j < l; j++) {
	        if (curLine[j].nodeName !== "BR") {
	          node = curLine[j];
	          lineNode.appendChild(node);
	          addWordSpaces && node._wordEnd && lineNode.appendChild(_doc.createTextNode(" "));

	          if (absolute) {
	            if (j === 0) {
	              lineNode.style.top = node._y + "px";
	              lineNode.style.left = paddingLeft + offset + "px";
	            }

	            node.style.top = "0px";

	            if (offset) {
	              node.style.left = node._x - offset + "px";
	            }
	          }
	        }
	      }

	      if (l === 0) {
	        lineNode.innerHTML = "&nbsp;";
	      } else if (!words && !chars) {
	        _deWordify(lineNode);

	        _swapText(lineNode, String.fromCharCode(160), " ");
	      }

	      if (absolute) {
	        lineNode.style.width = lineWidth;
	        lineNode.style.height = node._h + "px";
	      }

	      element.appendChild(lineNode);
	    }

	    element.style.cssText = style;
	  }

	  if (absolute) {
	    if (origHeight > element.clientHeight) {
	      element.style.height = origHeight - padTopAndBottom + "px";

	      if (element.clientHeight < origHeight) {
	        element.style.height = origHeight + borderTopAndBottom + "px";
	      }
	    }

	    if (origWidth > element.clientWidth) {
	      element.style.width = origWidth - padLeftAndRight + "px";

	      if (element.clientWidth < origWidth) {
	        element.style.width = origWidth + borderLeftAndRight + "px";
	      }
	    }
	  }

	  _pushReversed(allChars, charArray);

	  if (words) {
	    _pushReversed(allWords, wordArray);
	  }

	  _pushReversed(allLines, lineArray);
	},
	    _splitRawText = function _splitRawText(element, vars, wordStart, charStart) {
	  var tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
	      types = vars.type || vars.split || "chars,words,lines",
	      chars = ~types.indexOf("chars"),
	      absolute = _isAbsolute(vars),
	      wordDelimiter = vars.wordDelimiter || " ",
	      space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ",
	      wordEnd = "</" + tag + ">",
	      wordIsOpen = 1,
	      specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null,
	      text,
	      splitText,
	      i,
	      j,
	      l,
	      character,
	      hasTagStart,
	      testResult,
	      container = _doc.createElement("div"),
	      parent = element.parentNode;

	  parent.insertBefore(container, element);
	  container.textContent = element.nodeValue;
	  parent.removeChild(element);
	  element = container;
	  text = getText(element);
	  hasTagStart = text.indexOf("<") !== -1;

	  if (vars.reduceWhiteSpace !== false) {
	    text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
	  }

	  if (hasTagStart) {
	    text = text.split("<").join("{{LT}}");
	  }

	  l = text.length;
	  splitText = (text.charAt(0) === " " ? space : "") + wordStart();

	  for (i = 0; i < l; i++) {
	    character = text.charAt(i);

	    if (specialChars && (testResult = specialChars(text.substr(i), vars.specialChars))) {
	      character = text.substr(i, testResult || 1);
	      splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
	      i += testResult - 1;
	    } else if (character === wordDelimiter && text.charAt(i - 1) !== wordDelimiter && i) {
	      splitText += wordIsOpen ? wordEnd : "";
	      wordIsOpen = 0;

	      while (text.charAt(i + 1) === wordDelimiter) {
	        splitText += space;
	        i++;
	      }

	      if (i === l - 1) {
	        splitText += space;
	      } else if (text.charAt(i + 1) !== ")") {
	        splitText += space + wordStart();
	        wordIsOpen = 1;
	      }
	    } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
	      splitText += chars ? charStart() + "{{LT}}" + "</" + tag + ">" : "{{LT}}";
	      i += 5;
	    } else if (character.charCodeAt(0) >= 0xD800 && character.charCodeAt(0) <= 0xDBFF || text.charCodeAt(i + 1) >= 0xFE00 && text.charCodeAt(i + 1) <= 0xFE0F) {
	      j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
	      splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
	      i += j - 1;
	    } else {
	      splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
	    }
	  }

	  element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");

	  if (hasTagStart) {
	    _swapText(parent, "{{LT}}", "<");
	  }
	},
	    _split = function _split(element, vars, wordStart, charStart) {
	  var children = _toArray(element.childNodes),
	      l = children.length,
	      absolute = _isAbsolute(vars),
	      i,
	      child;

	  if (element.nodeType !== 3 || l > 1) {
	    vars.absolute = false;

	    for (i = 0; i < l; i++) {
	      child = children[i];

	      if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
	        if (absolute && child.nodeType !== 3 && _getComputedStyle(child).display === "inline") {
	          child.style.display = "inline-block";
	          child.style.position = "relative";
	        }

	        child._isSplit = true;

	        _split(child, vars, wordStart, charStart);
	      }
	    }

	    vars.absolute = absolute;
	    element._isSplit = true;
	    return;
	  }

	  _splitRawText(element, vars, wordStart, charStart);
	};

	var SplitText = function () {
	  function SplitText(element, vars) {
	    _coreInitted || _initCore();
	    this.elements = _toArray(element);
	    this.chars = [];
	    this.words = [];
	    this.lines = [];
	    this._originals = [];
	    this.vars = vars || {};
	     this.split(vars);
	  }

	  var _proto = SplitText.prototype;

	  _proto.split = function split(vars) {
	    this.isSplit && this.revert();
	    this.vars = vars = vars || this.vars;
	    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

	    var i = this.elements.length,
	        tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
	        wordStart = _cssClassFunc(vars.wordsClass, tag),
	        charStart = _cssClassFunc(vars.charsClass, tag),
	        origHeight,
	        origWidth,
	        e;

	    while (--i > -1) {
	      e = this.elements[i];
	      this._originals[i] = e.innerHTML;
	      origHeight = e.clientHeight;
	      origWidth = e.clientWidth;

	      _split(e, vars, wordStart, charStart);

	      _setPositionsAfterSplit(e, vars, this.chars, this.words, this.lines, origWidth, origHeight);
	    }

	    this.chars.reverse();
	    this.words.reverse();
	    this.lines.reverse();
	    this.isSplit = true;
	    return this;
	  };

	  _proto.revert = function revert() {
	    var originals = this._originals;

	    if (!originals) {
	      throw "revert() call wasn't scoped properly.";
	    }

	    this.elements.forEach(function (e, i) {
	      return e.innerHTML = originals[i];
	    });
	    this.chars = [];
	    this.words = [];
	    this.lines = [];
	    this.isSplit = false;
	    return this;
	  };

	  SplitText.create = function create(element, vars) {
	    return new SplitText(element, vars);
	  };

	  return SplitText;
	}();
	SplitText.version = "3.5.1";

	exports.SplitText = SplitText;
	exports.default = SplitText;

	Object.defineProperty(exports, '__esModule', { value: true });

})));



//Draggable

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var _doc,
      _win,
      _docElement,
      _body,
      _divContainer,
      _svgContainer,
      _identityMatrix,
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _hasOffsetBug,
      _setDoc = function _setDoc(element) {
    var doc = element.ownerDocument || element;

    if (!(_transformProp in element.style) && "msTransform" in element.style) {
      _transformProp = "msTransform";
      _transformOriginProp = _transformProp + "Origin";
    }

    while (doc.parentNode && (doc = doc.parentNode)) {}

    _win = window;
    _identityMatrix = new Matrix2D();

    if (doc) {
      _doc = doc;
      _docElement = doc.documentElement;
      _body = doc.body;
      var d1 = doc.createElement("div"),
          d2 = doc.createElement("div");

      _body.appendChild(d1);

      d1.appendChild(d2);
      d1.style.position = "static";
      d1.style[_transformProp] = "translate3d(0,0,1px)";
      _hasOffsetBug = d2.offsetParent !== d1;

      _body.removeChild(d1);
    }

    return doc;
  },
      _forceNonZeroScale = function _forceNonZeroScale(e) {
    var a, cache;

    while (e && e !== _body) {
      cache = e._gsap;
      cache && cache.uncache && cache.get(e, "x");

      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }

      e = e.parentNode;
    }

    return a;
  },
      _svgTemps = [],
      _divTemps = [],
      _getDocScrollTop = function _getDocScrollTop() {
    return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
  },
      _getDocScrollLeft = function _getDocScrollLeft() {
    return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
  },
      _svgOwner = function _svgOwner(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  },
      _isFixed = function _isFixed(element) {
    if (_win.getComputedStyle(element).position === "fixed") {
      return true;
    }

    element = element.parentNode;

    if (element && element.nodeType === 1) {
      return _isFixed(element);
    }
  },
      _createSibling = function _createSibling(element, i) {
    if (element.parentNode && (_doc || _setDoc(element))) {
      var svg = _svgOwner(element),
          ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
          type = svg ? i ? "rect" : "g" : "div",
          x = i !== 2 ? 0 : 100,
          y = i === 3 ? 100 : 0,
          css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);

      if (i) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling(element);
            _divContainer.style.cssText = css;
          }

          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

          _divContainer.appendChild(e);
        } else {
          _svgContainer || (_svgContainer = _createSibling(element));
          e.setAttribute("width", 0.01);
          e.setAttribute("height", 0.01);
          e.setAttribute("transform", "translate(" + x + "," + y + ")");

          _svgContainer.appendChild(e);
        }
      }

      return e;
    }

    throw "Need document and parent.";
  },
      _consolidate = function _consolidate(m) {
    var c = new Matrix2D(),
        i = 0;

    for (; i < m.numberOfItems; i++) {
      c.multiply(m.getItem(i).matrix);
    }

    return c;
  },
      _placeSiblings = function _placeSiblings(element, adjustGOffset) {
    var svg = _svgOwner(element),
        isRootSVG = element === svg,
        siblings = svg ? _svgTemps : _divTemps,
        parent = element.parentNode,
        container,
        m,
        b,
        x,
        y,
        cs;

    if (element === _win) {
      return element;
    }

    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;

    if (svg) {
      b = isRootSVG ? {
        x: 0,
        y: 0
      } : element.getBBox();
      m = element.transform ? element.transform.baseVal : {};

      if (m.numberOfItems) {
        m = m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = _identityMatrix;
        x = b.x;
        y = b.y;
      }

      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }

      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;

      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;

        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }

      cs = _win.getComputedStyle(element);

      if (cs.position !== "absolute") {
        m = element.offsetParent;

        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }

      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp] = cs[_transformProp];
      b[_transformOriginProp] = cs[_transformOriginProp];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }

    return container;
  },
      _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
  };

  var Matrix2D = function () {
    function Matrix2D(a, b, c, d, e, f) {
      if (a === void 0) {
        a = 1;
      }

      if (b === void 0) {
        b = 0;
      }

      if (c === void 0) {
        c = 0;
      }

      if (d === void 0) {
        d = 1;
      }

      if (e === void 0) {
        e = 0;
      }

      if (f === void 0) {
        f = 0;
      }

      _setMatrix(this, a, b, c, d, e, f);
    }

    var _proto = Matrix2D.prototype;

    _proto.inverse = function inverse() {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f,
          determinant = a * d - b * c || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };

    _proto.multiply = function multiply(matrix) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f,
          a2 = matrix.a,
          b2 = matrix.c,
          c2 = matrix.b,
          d2 = matrix.d,
          e2 = matrix.e,
          f2 = matrix.f;
      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };

    _proto.clone = function clone() {
      return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
    };

    _proto.equals = function equals(matrix) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };

    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }

      var x = point.x,
          y = point.y,
          a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      decoratee.x = x * a + y * c + e || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };

    return Matrix2D;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }

    var zeroScales = _forceNonZeroScale(element),
        svg = _svgOwner(element),
        temps = svg ? _svgTemps : _divTemps,
        container = _placeSiblings(element, adjustGOffset),
        b1 = temps[0].getBoundingClientRect(),
        b2 = temps[1].getBoundingClientRect(),
        b3 = temps[2].getBoundingClientRect(),
        parent = container.parentNode,
        isFixed = !includeScrollInFixed && _isFixed(element),
        m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

    parent.removeChild(container);

    if (zeroScales) {
      b1 = zeroScales.length;

      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }

    return inverse ? m.inverse() : m;
  }

  var gsap,
      _win$1,
      _doc$1,
      _docElement$1,
      _body$1,
      _tempDiv,
      _placeholderDiv,
      _coreInitted,
      _checkPrefix,
      _toArray,
      _supportsPassive,
      _isTouchDevice,
      _touchEventLookup,
      _dragCount,
      _isMultiTouching,
      _isAndroid,
      InertiaPlugin,
      _defaultCursor,
      _supportsPointer,
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _emptyFunc = function _emptyFunc() {
    return false;
  },
      _transformProp$1 = "transform",
      _transformOriginProp$1 = "transformOrigin",
      _round = function _round(value) {
    return Math.round(value * 10000) / 10000;
  },
      _isArray = Array.isArray,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _RAD2DEG = 180 / Math.PI,
      _bigNum = 1e20,
      _identityMatrix$1 = new Matrix2D(),
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _renderQueue = [],
      _lookup = {},
      _lookupCount = 0,
      _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
      _lastDragTime = 0,
      _temp1 = {},
      _windowProxy = {},
      _copy = function _copy(obj, factor) {
    var copy = {},
        p;

    for (p in obj) {
      copy[p] = factor ? obj[p] * factor : obj[p];
    }

    return copy;
  },
      _extend = function _extend(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj)) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants(elements, value) {
    var i = elements.length,
        children;

    while (i--) {
      value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
      children = elements[i].children;
      children && children.length && _setTouchActionForAllDescendants(children, value);
    }
  },
      _renderQueueTick = function _renderQueueTick() {
    return _renderQueue.forEach(function (func) {
      return func();
    });
  },
      _addToRenderQueue = function _addToRenderQueue(func) {
    _renderQueue.push(func);

    if (_renderQueue.length === 1) {
      gsap.ticker.add(_renderQueueTick);
    }
  },
      _renderQueueTimeout = function _renderQueueTimeout() {
    return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
  },
      _removeFromRenderQueue = function _removeFromRenderQueue(func) {
    var i = _renderQueue.length;

    while (i--) {
      if (_renderQueue[i] === func) {
        _renderQueue.splice(i, 1);
      }
    }

    gsap.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj)) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _addListener = function _addListener(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.addEventListener(type, func, capture);
    }
  },
      _removeListener = function _removeListener(element, type, func) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func);
      touchType && type !== touchType && element.removeEventListener(type, func);
    }
  },
      _preventDefault = function _preventDefault(event) {
    event.preventDefault && event.preventDefault();
    event.preventManipulation && event.preventManipulation();
  },
      _hasTouchID = function _hasTouchID(list, ID) {
    var i = list.length;

    while (i--) {
      if (list[i].identifier === ID) {
        return true;
      }
    }
  },
      _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _onMultiTouchDocument = function _onMultiTouchDocument(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _getDocScrollTop$1 = function _getDocScrollTop(doc) {
    return _win$1.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
  },
      _getDocScrollLeft$1 = function _getDocScrollLeft(doc) {
    return _win$1.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
  },
      _addScrollListener = function _addScrollListener(e, callback) {
    _addListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _addScrollListener(e.parentNode, callback);
    }
  },
      _removeScrollListener = function _removeScrollListener(e, callback) {
    _removeListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _removeScrollListener(e.parentNode, callback);
    }
  },
      _isRoot = function _isRoot(e) {
    return !!(!e || e === _docElement$1 || e.nodeType === 9 || e === _doc$1.body || e === _win$1 || !e.nodeType || !e.parentNode);
  },
      _getMaxScroll = function _getMaxScroll(element, axis) {
    var dim = axis === "x" ? "Width" : "Height",
        scroll = "scroll" + dim,
        client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement$1[scroll], _body$1[scroll]) - (_win$1["inner" + dim] || _docElement$1[client] || _body$1[client]) : element[scroll] - element[client]);
  },
      _recordMaxScrolls = function _recordMaxScrolls(e, skipCurrent) {
    var x = _getMaxScroll(e, "x"),
        y = _getMaxScroll(e, "y");

    if (_isRoot(e)) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls(e.parentNode, skipCurrent);
    }

    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;

    if (!skipCurrent) {
      e._gsScrollX = e.scrollLeft || 0;
      e._gsScrollY = e.scrollTop || 0;
    }
  },
      _setStyle = function _setStyle(element, property, value) {
    var style = element.style;

    if (!style) {
      return;
    }

    if (_isUndefined(style[property])) {
      property = _checkPrefix(property, element) || property;
    }

    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  },
      _getComputedStyle = function _getComputedStyle(element) {
    return _win$1.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  },
      _tempRect = {},
      _parseRect = function _parseRect(e) {
    if (e === _win$1) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement$1.clientWidth || e.innerWidth || _body$1.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement$1.clientHeight ? _docElement$1.clientHeight : e.innerHeight || _body$1.clientHeight || 0;
      return _tempRect;
    }

    var doc = e.ownerDocument || _doc$1,
        r = !_isUndefined(e.pageX) ? {
      left: e.pageX - _getDocScrollLeft$1(doc),
      top: e.pageY - _getDocScrollTop$1(doc),
      right: e.pageX - _getDocScrollLeft$1(doc) + 1,
      bottom: e.pageY - _getDocScrollTop$1(doc) + 1
    } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();

    if (_isUndefined(r.right) && !_isUndefined(r.width)) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (_isUndefined(r.width)) {
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }

    return r;
  },
      _dispatchEvent = function _dispatchEvent(target, type, callbackName) {
    var vars = target.vars,
        callback = vars[callbackName],
        listeners = target._listeners[type],
        result;

    if (_isFunction(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }

    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }

    return result;
  },
      _getBounds = function _getBounds(target, context) {
    var e = _toArray(target)[0],
        top,
        left,
        offset;

    if (!e.nodeType && e !== _win$1) {
      if (!_isUndefined(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }

      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left: left,
        top: top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }

    return _getElementBounds(e, context);
  },
      _point1 = {},
      _getElementBounds = function _getElementBounds(element, context) {
    context = _toArray(context)[0];
    var isSVG = element.getBBox && element.ownerSVGElement,
        doc = element.ownerDocument || _doc$1,
        left,
        right,
        top,
        bottom,
        matrix,
        p1,
        p2,
        p3,
        p4,
        bbox,
        width,
        height,
        cs,
        contextParent;

    if (element === _win$1) {
      top = _getDocScrollTop$1(doc);
      left = _getDocScrollLeft$1(doc);
      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
    } else if (context === _win$1 || _isUndefined(context)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;

      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else {
        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
          left = bbox.x || 0;
          top = bbox.y || 0;
          width = bbox.width;
          height = bbox.height;
        }

        if (!width) {
          cs = _getComputedStyle(element);
          bbox = cs.boxSizing === "border-box";
          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
        }
      }

      right = width;
      bottom = height;
    }

    if (element === context) {
      return {
        left: left,
        top: top,
        width: right - left,
        height: bottom - top
      };
    }

    matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    contextParent = context.parentNode || {};
    return {
      left: left + (contextParent.scrollLeft || 0),
      top: top + (contextParent.scrollTop || 0),
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  },
      _parseInertia = function _parseInertia(draggable, snap, max, min, factor, forceZeroVelocity) {
    var vars = {},
        a,
        i,
        l;

    if (snap) {
      if (factor !== 1 && snap instanceof Array) {
        vars.end = a = [];
        l = snap.length;

        if (_isObject(snap[0])) {
          for (i = 0; i < l; i++) {
            a[i] = _copy(snap[i], factor);
          }
        } else {
          for (i = 0; i < l; i++) {
            a[i] = snap[i] * factor;
          }
        }

        max += 1.1;
        min -= 1.1;
      } else if (_isFunction(snap)) {
        vars.end = function (value) {
          var result = snap.call(draggable, value),
              copy,
              p;

          if (factor !== 1) {
            if (_isObject(result)) {
              copy = {};

              for (p in result) {
                copy[p] = result[p] * factor;
              }

              result = copy;
            } else {
              result *= factor;
            }
          }

          return result;
        };
      } else {
        vars.end = snap;
      }
    }

    if (max || max === 0) {
      vars.max = max;
    }

    if (min || min === 0) {
      vars.min = min;
    }

    if (forceZeroVelocity) {
      vars.velocity = 0;
    }

    return vars;
  },
      _isClickable = function _isClickable(element) {
    var data;
    return !element || !element.getAttribute || element === _body$1 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable(element.parentNode);
  },
      _setSelectable = function _setSelectable(elements, selectable) {
    var i = elements.length,
        e;

    while (i--) {
      e = elements[i];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
      gsap.set(e, {
        lazy: true,
        userSelect: selectable ? "text" : "none"
      });
    }
  },
      _isFixed$1 = function _isFixed(element) {
    if (_getComputedStyle(element).position === "fixed") {
      return true;
    }

    element = element.parentNode;

    if (element && element.nodeType === 1) {
      return _isFixed(element);
    }
  },
      _supports3D,
      _addPaddingBR,
      ScrollProxy = function ScrollProxy(element, vars) {
    element = gsap.utils.toArray(element)[0];
    vars = vars || {};
    var content = document.createElement("div"),
        style = content.style,
        node = element.firstChild,
        offsetTop = 0,
        offsetLeft = 0,
        prevTop = element.scrollTop,
        prevLeft = element.scrollLeft,
        scrollWidth = element.scrollWidth,
        scrollHeight = element.scrollHeight,
        extraPadRight = 0,
        maxLeft = 0,
        maxTop = 0,
        elementWidth,
        elementHeight,
        contentHeight,
        nextNode,
        transformStart,
        transformEnd;

    if (_supports3D && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp$1) {
      transformStart = "translate(";
      transformEnd = "px)";
    }

    this.scrollTop = function (value, force) {
      if (!arguments.length) {
        return -this.top();
      }

      this.top(-value, force);
    };

    this.scrollLeft = function (value, force) {
      if (!arguments.length) {
        return -this.left();
      }

      this.left(-value, force);
    };

    this.left = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }

      var dif = element.scrollLeft - prevLeft,
          oldOffset = offsetLeft;

      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        gsap.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value;

      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }

      if (offsetLeft || oldOffset) {
        if (!this._skip) {
          style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }

        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }

      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };

    this.top = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }

      var dif = element.scrollTop - prevTop,
          oldOffset = offsetTop;

      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        gsap.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value;

      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }

      if (offsetTop || oldOffset) {
        if (!this._skip) {
          style[_transformProp$1] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
      }

      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };

    this.maxScrollTop = function () {
      return maxTop;
    };

    this.maxScrollLeft = function () {
      return maxLeft;
    };

    this.disable = function () {
      node = content.firstChild;

      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }

      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };

    this.enable = function () {
      node = element.firstChild;

      if (node === content) {
        return;
      }

      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }

      element.appendChild(content);
      this.calibrate();
    };

    this.calibrate = function (force) {
      var widthMatches = element.clientWidth === elementWidth,
          cs,
          x,
          y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;

      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }

      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }

      cs = _getComputedStyle(element);

      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);

        if (extraPadRight) {
          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
      }

      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.boxSizing = "content-box";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";

      if (_addPaddingBR) {
        style.paddingBottom = cs.paddingBottom;
      }

      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";

      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };

    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
  },
      _initCore = function _initCore(required) {
    if (_windowExists() && document.body) {
      var nav = window && window.navigator;
      _win$1 = window;
      _doc$1 = document;
      _docElement$1 = _doc$1.documentElement;
      _body$1 = _doc$1.body;
      _tempDiv = _createElement("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _createElement("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
      _isTouchDevice = "ontouchstart" in _docElement$1 && "orientation" in _win$1 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);

      _addPaddingBR = function () {
        var div = _createElement("div"),
            child = _createElement("div"),
            childStyle = child.style,
            parent = _body$1,
            val;

        childStyle.display = "inline-block";
        childStyle.position = "relative";
        div.style.cssText = child.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
        div.appendChild(child);
        parent.appendChild(div);
        val = child.offsetHeight + 18 > div.scrollHeight;
        parent.removeChild(div);
        return val;
      }();

      _touchEventLookup = function (types) {
        var standard = types.split(","),
            converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
            obj = {},
            i = 4;

        while (--i > -1) {
          obj[standard[i]] = converted[i];
          obj[converted[i]] = standard[i];
        }

        try {
          _docElement$1.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e) {}

        return obj;
      }("touchstart,touchmove,touchend,touchcancel");

      _addListener(_doc$1, "touchcancel", _emptyFunc);

      _addListener(_win$1, "touchmove", _emptyFunc);

      _body$1 && _body$1.addEventListener("touchstart", _emptyFunc);

      _addListener(_doc$1, "contextmenu", function () {
        for (var p in _lookup) {
          if (_lookup[p].isPressed) {
            _lookup[p].endDrag();
          }
        }
      });

      gsap = _coreInitted = _getGSAP();
    }

    if (gsap) {
      InertiaPlugin = gsap.plugins.inertia;
      _checkPrefix = gsap.utils.checkPrefix;
      _transformProp$1 = _checkPrefix(_transformProp$1);
      _transformOriginProp$1 = _checkPrefix(_transformOriginProp$1);
      _toArray = gsap.utils.toArray;
      _supports3D = !!_checkPrefix("perspective");
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };

  var EventDispatcher = function () {
    function EventDispatcher(target) {
      this._listeners = {};
      this.target = target || this;
    }

    var _proto = EventDispatcher.prototype;

    _proto.addEventListener = function addEventListener(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);

      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };

    _proto.removeEventListener = function removeEventListener(type, callback) {
      var list = this._listeners[type],
          i = list && list.indexOf(callback) || -1;
      i > -1 && list.splice(i, 1);
    };

    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;

      var result;
      (this._listeners[type] || []).forEach(function (callback) {
        return callback.call(_this, {
          type: type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };

    return EventDispatcher;
  }();

  var Draggable = function (_EventDispatcher) {
    _inheritsLoose(Draggable, _EventDispatcher);

    function Draggable(target, vars) {
      var _this2;

      _this2 = _EventDispatcher.call(this) || this;
      _coreInitted || _initCore(1);
      target = _toArray(target)[0];

      if (!InertiaPlugin) {
        InertiaPlugin = gsap.plugins.inertia;
      }

      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap.getProperty(target, "x");

      var type = (vars.type || "x,y").toLowerCase(),
          xyMode = ~type.indexOf("x") || ~type.indexOf("y"),
          rotationMode = type.indexOf("rotation") !== -1,
          xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
          yProp = xyMode ? "y" : "top",
          allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"),
          allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"),
          minimumMovement = vars.minimumMovement || 2,
          self = _assertThisInitialized(_this2),
          triggers = _toArray(vars.trigger || vars.handle || target),
          killProps = {},
          dragEndTime = 0,
          checkAutoScrollBounds = false,
          autoScrollMarginTop = vars.autoScrollMarginTop || 40,
          autoScrollMarginRight = vars.autoScrollMarginRight || 40,
          autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
          autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
          isClickable = vars.clickableTest || _isClickable,
          clickTime = 0,
          gsCache = target._gsap || gsap.core.getCache(target),
          isFixed = _isFixed$1(target),
          getPropAsNum = function getPropAsNum(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      },
          ownerDoc = target.ownerDocument || _doc$1,
          enabled,
          scrollProxy,
          startPointerX,
          startPointerY,
          startElementX,
          startElementY,
          hasBounds,
          hasDragCallback,
          hasMoveCallback,
          maxX,
          minX,
          maxY,
          minY,
          touch,
          touchID,
          rotationOrigin,
          dirty,
          old,
          snapX,
          snapY,
          snapXY,
          isClicking,
          touchEventTarget,
          matrix,
          interrupted,
          allowNativeTouchScrolling,
          touchDragAxis,
          isDispatching,
          clickDispatch,
          trustedClickDispatch,
          isPreventingDefault,
          onContextMenu = function onContextMenu(e) {
        _preventDefault(e);

        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
      },
          render = function render(suppressEvents) {
        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
          var e = target,
              autoScrollFactor = self.autoScroll * 15,
              parent,
              isRoot,
              rect,
              pointerX,
              pointerY,
              changeX,
              changeY,
              gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
          _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
          pointerX = self.pointerX - _windowProxy.scrollLeft;
          pointerY = self.pointerY - _windowProxy.scrollTop;

          while (e && !isRoot) {
            isRoot = _isRoot(e.parentNode);
            parent = isRoot ? _windowProxy : e.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement$1.clientHeight, _win$1.innerHeight || 0),
              right: Math.max(_docElement$1.clientWidth, _win$1.innerWidth || 0),
              left: 0,
              top: 0
            } : parent.getBoundingClientRect();
            changeX = changeY = 0;

            if (allowY) {
              gap = parent._gsMaxScrollY - parent.scrollTop;

              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }

              if (changeY) {
                parent.scrollTop += changeY;
              }
            }

            if (allowX) {
              gap = parent._gsMaxScrollX - parent.scrollLeft;

              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }

              if (changeX) {
                parent.scrollLeft += changeX;
              }
            }

            if (isRoot && (changeX || changeY)) {
              _win$1.scrollTo(parent.scrollLeft, parent.scrollTop);

              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
            }

            e = parent;
          }
        }

        if (dirty) {
          var x = self.x,
              y = self.y;

          if (rotationMode) {
            self.deltaX = x - parseFloat(gsCache.rotation);
            self.rotation = x;
            gsCache.rotation = x + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (scrollProxy) {
              if (allowY) {
                self.deltaY = y - scrollProxy.top();
                scrollProxy.top(y);
              }

              if (allowX) {
                self.deltaX = x - scrollProxy.left();
                scrollProxy.left(x);
              }
            } else if (xyMode) {
              if (allowY) {
                self.deltaY = y - parseFloat(gsCache.y);
                gsCache.y = y + "px";
              }

              if (allowX) {
                self.deltaX = x - parseFloat(gsCache.x);
                gsCache.x = x + "px";
              }

              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self.deltaY = y - parseFloat(target.style.top || 0);
                target.style.top = y + "px";
              }

              if (allowX) {
                self.deltaX = x - parseFloat(target.style.left || 0);
                target.style.left = x + "px";
              }
            }
          }

          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;

            if (_dispatchEvent(self, "drag", "onDrag") === false) {
              if (allowX) {
                self.x -= self.deltaX;
              }

              if (allowY) {
                self.y -= self.deltaY;
              }

              render(true);
            }

            isDispatching = false;
          }
        }

        dirty = false;
      },
          syncXY = function syncXY(skipOnUpdate, skipSnap) {
        var x = self.x,
            y = self.y,
            snappedValue,
            cs;

        if (!target._gsap) {
          gsCache = gsap.core.getCache(target);
        }

        gsCache.uncache && gsap.getProperty(target, "x");

        if (xyMode) {
          self.x = parseFloat(gsCache.x);
          self.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self.x = self.rotation = parseFloat(gsCache.rotation);
        } else if (scrollProxy) {
          self.y = scrollProxy.top();
          self.x = scrollProxy.left();
        } else {
          self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
          self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
        }

        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
          if (snapXY) {
            _temp1.x = self.x;
            _temp1.y = self.y;
            snappedValue = snapXY(_temp1);

            if (snappedValue.x !== self.x) {
              self.x = snappedValue.x;
              dirty = true;
            }

            if (snappedValue.y !== self.y) {
              self.y = snappedValue.y;
              dirty = true;
            }
          }

          if (snapX) {
            snappedValue = snapX(self.x);

            if (snappedValue !== self.x) {
              self.x = snappedValue;

              if (rotationMode) {
                self.rotation = snappedValue;
              }

              dirty = true;
            }
          }

          if (snapY) {
            snappedValue = snapY(self.y);

            if (snappedValue !== self.y) {
              self.y = snappedValue;
            }

            dirty = true;
          }
        }

        dirty && render(true);

        if (!skipOnUpdate) {
          self.deltaX = self.x - x;
          self.deltaY = self.y - y;

          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
        }
      },
          buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
        if (min == null) {
          min = -_bigNum;
        }

        if (max == null) {
          max = _bigNum;
        }

        if (_isFunction(snap)) {
          return function (n) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
            return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
          };
        }

        if (_isArray(snap)) {
          return function (n) {
            var i = snap.length,
                closest = 0,
                absDif = _bigNum,
                val,
                dif;

            while (--i > -1) {
              val = snap[i];
              dif = val - n;

              if (dif < 0) {
                dif = -dif;
              }

              if (dif < absDif && val >= min && val <= max) {
                closest = i;
                absDif = dif;
              }
            }

            return snap[closest];
          };
        }

        return isNaN(snap) ? function (n) {
          return n;
        } : function () {
          return snap * factor;
        };
      },
          buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
        radius = radius && radius < _bigNum ? radius * radius : _bigNum;

        if (_isFunction(snap)) {
          return function (point) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
                x = point.x,
                y = point.y,
                result,
                dx,
                dy;
            point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
            point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
            result = snap.call(self, point);

            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }

            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }

            if (radius < _bigNum) {
              dx = point.x - x;
              dy = point.y - y;

              if (dx * dx + dy * dy > radius) {
                point.x = x;
                point.y = y;
              }
            }

            return point;
          };
        }

        if (_isArray(snap)) {
          return function (p) {
            var i = snap.length,
                closest = 0,
                minDist = _bigNum,
                x,
                y,
                point,
                dist;

            while (--i > -1) {
              point = snap[i];
              x = point.x - p.x;
              y = point.y - p.y;
              dist = x * x + y * y;

              if (dist < minDist) {
                closest = i;
                minDist = dist;
              }
            }

            return minDist <= radius ? snap[closest] : p;
          };
        }

        return function (n) {
          return n;
        };
      },
          calculateBounds = function calculateBounds() {
        var bounds, targetBounds, snap, snapIsRaw;
        hasBounds = false;

        if (scrollProxy) {
          scrollProxy.calibrate();
          self.minX = minX = -scrollProxy.maxScrollLeft();
          self.minY = minY = -scrollProxy.maxScrollTop();
          self.maxX = maxX = self.maxY = maxY = 0;
          hasBounds = true;
        } else if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);

          if (rotationMode) {
            self.minX = minX = bounds.left;
            self.maxX = maxX = bounds.left + bounds.width;
            self.minY = minY = self.maxY = maxY = 0;
          } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self.minX = minX = bounds.minX;
            self.minY = minY = bounds.minY;
            self.maxX = maxX = bounds.maxX;
            self.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left - 0.5);
            self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top - 0.5);
            self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
            self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
          }

          if (minX > maxX) {
            self.minX = maxX;
            self.maxX = maxX = minX;
            minX = self.minX;
          }

          if (minY > maxY) {
            self.minY = maxY;
            self.maxY = maxY = minY;
            minY = self.minY;
          }

          if (rotationMode) {
            self.minRotation = minX;
            self.maxRotation = maxX;
          }

          hasBounds = true;
        }

        if (vars.liveSnap) {
          snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray(snap) || _isFunction(snap);

          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
              }

              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
              }
            }
          }
        }
      },
          onThrowComplete = function onThrowComplete() {
        self.isThrowing = false;

        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
      },
          onThrowInterrupt = function onThrowInterrupt() {
        self.isThrowing = false;
      },
          animate = function animate(inertia, forceZeroVelocity) {
        var snap, snapIsRaw, tween, overshootTolerance;

        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray(snap) || _isFunction(snap);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
            };

            if (rotationMode) {
              inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
              }

              if (allowY) {
                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
              }

              if (snap.points || _isArray(snap) && _isObject(snap[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap.radius;
              }
            }
          }

          self.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;

          if (!inertia.duration) {
            inertia.duration = {
              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
              overshoot: overshootTolerance
            };
          }

          self.tween = tween = gsap.to(scrollProxy || target, {
            inertia: inertia,
            data: "_draggable",
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
          });

          if (!vars.fastMode) {
            if (scrollProxy) {
              scrollProxy._skip = true;
            }

            tween.render(1e9, true, true);
            syncXY(true, true);
            self.endX = self.x;
            self.endY = self.y;

            if (rotationMode) {
              self.endRotation = self.x;
            }

            tween.play(0);
            syncXY(true, true);

            if (scrollProxy) {
              scrollProxy._skip = false;
            }
          }
        } else if (hasBounds) {
          self.applyBounds();
        }
      },
          updateMatrix = function updateMatrix(shiftStart) {
        var start = matrix,
            p;
        matrix = getGlobalMatrix(target.parentNode, true);

        if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
          p = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p, p);
          startPointerX = p.x;
          startPointerY = p.y;
        }

        if (matrix.equals(_identityMatrix$1)) {
          matrix = null;
        }
      },
          recordStartPositions = function recordStartPositions() {
        var edgeTolerance = 1 - self.edgeResistance,
            offsetX = isFixed ? _getDocScrollLeft$1(ownerDoc) : 0,
            offsetY = isFixed ? _getDocScrollTop$1(ownerDoc) : 0,
            parsedOrigin,
            x,
            y;
        updateMatrix(false);
        _point1.x = self.pointerX - offsetX;
        _point1.y = self.pointerY - offsetY;
        matrix && matrix.apply(_point1, _point1);
        startPointerX = _point1.x;
        startPointerY = _point1.y;

        if (dirty) {
          setPointerPosition(self.pointerX, self.pointerY);
          render(true);
        }

        if (scrollProxy) {
          calculateBounds();
          startElementY = scrollProxy.top();
          startElementX = scrollProxy.left();
        } else {
          if (isTweening()) {
            syncXY(true, true);
            calculateBounds();
          } else {
            self.applyBounds();
          }

          if (rotationMode) {
            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp$1] || "0 0").split(" ");
            rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
              x: parseFloat(parsedOrigin[0]) || 0,
              y: parseFloat(parsedOrigin[1]) || 0
            });
            syncXY(true, true);
            x = self.pointerX - rotationOrigin.x - offsetX;
            y = rotationOrigin.y - self.pointerY + offsetY;
            startElementX = self.x;
            startElementY = self.y = Math.atan2(y, x) * _RAD2DEG;
          } else {
            startElementY = getPropAsNum(yProp, "px");
            startElementX = getPropAsNum(xProp, "px");
          }
        }

        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }

          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }

        self.startX = startElementX = _round(startElementX);
        self.startY = startElementY = _round(startElementY);
      },
          isTweening = function isTweening() {
        return self.tween && self.tween.isActive();
      },
          removePlaceholder = function removePlaceholder() {
        if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      },
          onPress = function onPress(e, force) {
        var i;

        if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        interrupted = isTweening();
        self.pointerEvent = e;

        if (_touchEventLookup[e.type]) {
          touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;

          _addListener(touchEventTarget, "touchend", onRelease);

          _addListener(touchEventTarget, "touchmove", onMove);

          _addListener(touchEventTarget, "touchcancel", onRelease);

          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;

          _addListener(ownerDoc, "mousemove", onMove);
        }

        touchDragAxis = null;

        if (!_supportsPointer || !touchEventTarget) {
          _addListener(ownerDoc, "mouseup", onRelease);

          e && e.target && _addListener(e.target, "mouseup", onRelease);
        }

        isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;

        if (isClicking) {
          _addListener(e.target, "change", onRelease);

          _dispatchEvent(self, "pressInit", "onPressInit");

          _dispatchEvent(self, "press", "onPress");

          _setSelectable(triggers, true);

          isPreventingDefault = false;
          return;
        }

        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
        isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;

        if (isPreventingDefault) {
          _preventDefault(e);

          _addListener(_win$1, "touchforcechange", _preventDefault);
        }

        if (e.changedTouches) {
          e = touch = e.changedTouches[0];
          touchID = e.identifier;
        } else if (e.pointerId) {
          touchID = e.pointerId;
        } else {
          touch = touchID = null;
        }

        _dragCount++;

        _addToRenderQueue(render);

        startPointerY = self.pointerY = e.pageY;
        startPointerX = self.pointerX = e.pageX;

        _dispatchEvent(self, "pressInit", "onPressInit");

        if (allowNativeTouchScrolling || self.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }

        if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }

        recordStartPositions();
        self.tween && self.tween.kill();
        self.isThrowing = false;
        gsap.killTweensOf(scrollProxy || target, killProps, true);
        scrollProxy && gsap.killTweensOf(target, {
          scrollTo: 1
        }, true);
        self.tween = self.lockedAxis = null;

        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable.zIndex++;
        }

        self.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self._listeners.move);

        if (!rotationMode && (vars.cursor !== false || vars.activeCursor)) {
          i = triggers.length;

          while (--i > -1) {
            gsap.set(triggers[i], {
              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
            });
          }
        }

        _dispatchEvent(self, "press", "onPress");
      },
          onMove = function onMove(e) {
        var originalEvent = e,
            touches,
            pointerX,
            pointerY,
            i,
            dx,
            dy;

        if (!enabled || _isMultiTouching || !self.isPressed || !e) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        self.pointerEvent = e;
        touches = e.changedTouches;

        if (touches) {
          e = touches[0];

          if (e !== touch && e.identifier !== touchID) {
            i = touches.length;

            while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

            if (i < 0) {
              return;
            }
          }
        } else if (e.pointerId && touchID && e.pointerId !== touchID) {
          return;
        }

        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e.pageX;
          _point1.y = e.pageY;
          matrix && matrix.apply(_point1, _point1);
          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);

          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";

            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win$1, "touchforcechange", _preventDefault);
            }

            if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              _isFunction(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
            }

            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }

        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);

          isPreventingDefault = true;
        } else if (isPreventingDefault) {
          isPreventingDefault = false;
        }

        if (self.autoScroll) {
          checkAutoScrollBounds = true;
        }

        setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
      },
          setPointerPosition = function setPointerPosition(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self.dragResistance,
            edgeTolerance = 1 - self.edgeResistance,
            prevPointerX = self.pointerX,
            prevPointerY = self.pointerY,
            prevStartElementY = startElementY,
            prevX = self.x,
            prevY = self.y,
            prevEndX = self.endX,
            prevEndY = self.endY,
            prevEndRotation = self.endRotation,
            prevDirty = dirty,
            xChange,
            yChange,
            x,
            y,
            dif,
            temp;
        self.pointerX = pointerX;
        self.pointerY = pointerY;

        if (isFixed) {
          pointerX -= _getDocScrollLeft$1(ownerDoc);
          pointerY -= _getDocScrollTop$1(ownerDoc);
        }

        if (rotationMode) {
          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
          dif = self.y - y;

          if (dif > 180) {
            startElementY -= 360;
            self.y = y;
          } else if (dif < -180) {
            startElementY += 360;
            self.y = y;
          }

          if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
            self.y = y;
            x = startElementX + (startElementY - y) * dragTolerance;
          } else {
            x = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }

          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;

          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }

          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }

          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
            temp = self.lockedAxis;

            if (!temp) {
              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;

              if (temp && _isFunction(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, self.pointerEvent);
              }
            }

            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }

          x = _round(startElementX + xChange * dragTolerance);
          y = _round(startElementY + yChange * dragTolerance);
        }

        if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x;
            _temp1.y = y;
            temp = snapXY(_temp1);
            x = _round(temp.x);
            y = _round(temp.y);
          }

          if (snapX) {
            x = _round(snapX(x));
          }

          if (snapY) {
            y = _round(snapY(y));
          }
        } else if (hasBounds) {
          if (x > maxX) {
            x = maxX + Math.round((x - maxX) * edgeTolerance);
          } else if (x < minX) {
            x = minX + Math.round((x - minX) * edgeTolerance);
          }

          if (!rotationMode) {
            if (y > maxY) {
              y = Math.round(maxY + (y - maxY) * edgeTolerance);
            } else if (y < minY) {
              y = Math.round(minY + (y - minY) * edgeTolerance);
            }
          }
        }

        if (self.x !== x || self.y !== y && !rotationMode) {
          if (rotationMode) {
            self.endRotation = self.x = self.endX = x;
            dirty = true;
          } else {
            if (allowY) {
              self.y = self.endY = y;
              dirty = true;
            }

            if (allowX) {
              self.x = self.endX = x;
              dirty = true;
            }
          }

          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
            if (!self.isDragging && self.isPressed) {
              self.isDragging = true;

              _dispatchEvent(self, "dragstart", "onDragStart");
            }
          } else {
            self.pointerX = prevPointerX;
            self.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self.x = prevX;
            self.y = prevY;
            self.endX = prevEndX;
            self.endY = prevEndY;
            self.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      },
          onRelease = function onRelease(e, force) {
        if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        self.isPressed = false;
        var originalEvent = e,
            wasDragging = self.isDragging,
            isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
            placeholderDelayedCall = gsap.delayedCall(0.001, removePlaceholder),
            touches,
            i,
            syntheticEvent,
            eventTarget,
            syntheticClick;

        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease);

          _removeListener(touchEventTarget, "touchmove", onMove);

          _removeListener(touchEventTarget, "touchcancel", onRelease);

          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(ownerDoc, "mousemove", onMove);
        }

        _removeListener(_win$1, "touchforcechange", _preventDefault);

        if (!_supportsPointer || !touchEventTarget) {
          _removeListener(ownerDoc, "mouseup", onRelease);

          e && e.target && _removeListener(e.target, "mouseup", onRelease);
        }

        dirty = false;

        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self.isDragging = false;
        }

        if (isClicking && !isContextMenuRelease) {
          if (e) {
            _removeListener(e.target, "change", onRelease);

            self.pointerEvent = originalEvent;
          }

          _setSelectable(triggers, false);

          _dispatchEvent(self, "release", "onRelease");

          _dispatchEvent(self, "click", "onClick");

          isClicking = false;
          return;
        }

        _removeFromRenderQueue(render);

        if (!rotationMode) {
          i = triggers.length;

          while (--i > -1) {
            _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
          }
        }

        _dragCount--;

        if (e) {
          touches = e.changedTouches;

          if (touches) {
            e = touches[0];

            if (e !== touch && e.identifier !== touchID) {
              i = touches.length;

              while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

              if (i < 0) {
                return;
              }
            }
          }

          self.pointerEvent = originalEvent;
          self.pointerX = e.pageX;
          self.pointerY = e.pageY;
        }

        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);

          isPreventingDefault = true;

          _dispatchEvent(self, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          isPreventingDefault = false;

          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }

          _dispatchEvent(self, "release", "onRelease");

          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self, "click", "onClick");

            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self, "doubleclick", "onDoubleClick");
            }

            eventTarget = originalEvent.target || target;
            clickTime = _getTime();

            syntheticClick = function syntheticClick() {
              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (ownerDoc.createEvent) {
                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };

            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);

          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            isPreventingDefault = true;

            _preventDefault(originalEvent);
          } else {
            isPreventingDefault = false;
          }

          _dispatchEvent(self, "release", "onRelease");
        }

        isTweening() && placeholderDelayedCall.duration(self.tween.duration());
        wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return true;
      },
          updateScroll = function updateScroll(e) {
        if (e && self.isDragging && !scrollProxy) {
          var parent = e.target || target.parentNode,
              deltaX = parent.scrollLeft - parent._gsScrollX,
              deltaY = parent.scrollTop - parent._gsScrollY;

          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }

            parent._gsScrollX += deltaX;
            parent._gsScrollY += deltaY;
            setPointerPosition(self.pointerX, self.pointerY);
          }
        }
      },
          onClick = function onClick(e) {
        var time = _getTime(),
            recentlyClicked = time - clickTime < 40,
            recentlyDragged = time - dragEndTime < 40,
            alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
            defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
            alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
            trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;

        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }

        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }

          clickDispatch = clickTime;
          return;
        }

        if (self.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e);
          }
        }

        if (!recentlyClicked && !recentlyDragged) {
          e && e.target && (self.pointerEvent = e);

          _dispatchEvent(self, "click", "onClick");
        }
      },
          localizePoint = function localizePoint(p) {
        return matrix ? {
          x: p.x * matrix.a + p.y * matrix.c + matrix.e,
          y: p.x * matrix.b + p.y * matrix.d + matrix.f
        } : {
          x: p.x,
          y: p.y
        };
      };

      old = Draggable.get(target);
      old && old.kill();

      _this2.startDrag = function (event, align) {
        var r1, r2, p1, p2;
        onPress(event || self.pointerEvent, true);

        if (align && !self.hitTest(event || self.pointerEvent)) {
          r1 = _parseRect(event || self.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }

        if (!self.isDragging) {
          self.isDragging = true;

          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      };

      _this2.drag = onMove;

      _this2.endDrag = function (e) {
        return onRelease(e || self.pointerEvent, true);
      };

      _this2.timeSinceDrag = function () {
        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
      };

      _this2.timeSinceClick = function () {
        return (_getTime() - clickTime) / 1000;
      };

      _this2.hitTest = function (target, threshold) {
        return Draggable.hitTest(self.target, target, threshold);
      };

      _this2.getDirection = function (from, diagonalThreshold) {
        var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start",
            xChange,
            yChange,
            ratio,
            direction,
            r1,
            r2;

        if (mode === "element") {
          r1 = _parseRect(self.target);
          r2 = _parseRect(from);
        }

        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);

        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";

          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }

            direction += yChange < 0 ? "up" : "down";
          }
        }

        return direction;
      };

      _this2.applyBounds = function (newBounds, sticky) {
        var x, y, forceZeroVelocity, e, parent, isRoot;

        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self.update(true, sticky);
        }

        syncXY(true);
        calculateBounds();

        if (hasBounds && !isTweening()) {
          x = self.x;
          y = self.y;

          if (x > maxX) {
            x = maxX;
          } else if (x < minX) {
            x = minX;
          }

          if (y > maxY) {
            y = maxY;
          } else if (y < minY) {
            y = minY;
          }

          if (self.x !== x || self.y !== y) {
            forceZeroVelocity = true;
            self.x = self.endX = x;

            if (rotationMode) {
              self.endRotation = x;
            } else {
              self.y = self.endY = y;
            }

            dirty = true;
            render(true);

            if (self.autoScroll && !self.isDragging) {
              _recordMaxScrolls(target.parentNode);

              e = target;
              _windowProxy.scrollTop = _win$1.pageYOffset != null ? _win$1.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
              _windowProxy.scrollLeft = _win$1.pageXOffset != null ? _win$1.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;

              while (e && !isRoot) {
                isRoot = _isRoot(e.parentNode);
                parent = isRoot ? _windowProxy : e.parentNode;

                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                  parent.scrollTop = parent._gsMaxScrollY;
                }

                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                  parent.scrollLeft = parent._gsMaxScrollX;
                }

                e = parent;
              }
            }
          }

          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }

        return self;
      };

      _this2.update = function (applyBounds, sticky, ignoreExternalChanges) {
        var x = self.x,
            y = self.y;
        updateMatrix(!sticky);

        if (applyBounds) {
          self.applyBounds();
        } else {
          dirty && ignoreExternalChanges && render(true);
          syncXY(true);
        }

        if (sticky) {
          setPointerPosition(self.pointerX, self.pointerY);
          dirty && render(true);
        }

        if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }

        if (self.autoScroll) {
          _recordMaxScrolls(target.parentNode, self.isDragging);

          checkAutoScrollBounds = self.isDragging;
          render(true);

          _removeScrollListener(target, updateScroll);

          _addScrollListener(target, updateScroll);
        }

        return self;
      };

      _this2.enable = function (type) {
        var setVars = {
          lazy: true
        },
            id,
            i,
            trigger;

        if (!rotationMode && vars.cursor !== false) {
          setVars.cursor = vars.cursor || _defaultCursor;
        }

        if (gsap.utils.checkPrefix("touchCallout")) {
          setVars.touchCallout = "none";
        }

        if (type !== "soft") {
          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");

          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];
            _supportsPointer || _addListener(trigger, "mousedown", onPress);

            _addListener(trigger, "touchstart", onPress);

            _addListener(trigger, "click", onClick, true);

            gsap.set(trigger, setVars);

            if (trigger.getBBox && trigger.ownerSVGElement) {
              gsap.set(trigger.ownerSVGElement, {
                touchAction: allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
              });
            }

            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
          }

          _setSelectable(triggers, false);
        }

        _addScrollListener(target, updateScroll);

        enabled = true;

        if (InertiaPlugin && type !== "soft") {
          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }

        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self;

        if (scrollProxy) {
          scrollProxy.enable();
          scrollProxy.element._gsDragID = id;
        }

        (vars.bounds || rotationMode) && recordStartPositions();
        vars.bounds && self.applyBounds();
        return self;
      };

      _this2.disable = function (type) {
        var dragging = self.isDragging,
            i,
            trigger;

        if (!rotationMode) {
          i = triggers.length;

          while (--i > -1) {
            _setStyle(triggers[i], "cursor", null);
          }
        }

        if (type !== "soft") {
          _setTouchActionForAllDescendants(triggers, null);

          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];

            _setStyle(trigger, "touchCallout", null);

            _removeListener(trigger, "mousedown", onPress);

            _removeListener(trigger, "touchstart", onPress);

            _removeListener(trigger, "click", onClick);

            _removeListener(trigger, "contextmenu", onContextMenu);
          }

          _setSelectable(triggers, true);

          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);

            _removeListener(touchEventTarget, "touchend", onRelease);

            _removeListener(touchEventTarget, "touchmove", onMove);
          }

          _removeListener(ownerDoc, "mouseup", onRelease);

          _removeListener(ownerDoc, "mousemove", onMove);
        }

        _removeScrollListener(target, updateScroll);

        enabled = false;
        InertiaPlugin && type !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        scrollProxy && scrollProxy.disable();

        _removeFromRenderQueue(render);

        self.isDragging = self.isPressed = isClicking = false;
        dragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return self;
      };

      _this2.enabled = function (value, type) {
        return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
      };

      _this2.kill = function () {
        self.isThrowing = false;
        self.tween && self.tween.kill();
        self.disable();
        gsap.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self;
      };

      if (~type.indexOf("scroll")) {
        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
          onKill: function onKill() {
            self.isPressed && onRelease(null);
          }
        }, vars));
        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
        target = scrollProxy.content;
      }

      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }

        if (allowY) {
          killProps[yProp] = 1;
        }
      }

      gsCache.force3D = "force3D" in vars ? vars.force3D : true;

      _this2.enable();

      return _this2;
    }

    Draggable.register = function register(core) {
      gsap = core;

      _initCore();
    };

    Draggable.create = function create(targets, vars) {
      _coreInitted || _initCore(true);
      return _toArray(targets).map(function (target) {
        return new Draggable(target, vars);
      });
    };

    Draggable.get = function get(target) {
      return _lookup[(_toArray(target)[0] || {})._gsDragID];
    };

    Draggable.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1000;
    };

    Draggable.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }

      var r1 = _parseRect(obj1),
          r2 = _parseRect(obj2),
          top = r1.top,
          left = r1.left,
          right = r1.right,
          bottom = r1.bottom,
          width = r1.width,
          height = r1.height,
          isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top,
          overlap,
          area,
          isRatio;

      if (isOutside || !threshold) {
        return !isOutside;
      }

      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;

      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }

      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }

      return overlap.width > threshold && overlap.height > threshold;
    };

    return Draggable;
  }(EventDispatcher);

  _setDefaults(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });

  Draggable.zIndex = 1000;
  Draggable.version = "3.6.1";
  _getGSAP() && gsap.registerPlugin(Draggable);

  exports.Draggable = Draggable;
  exports.default = Draggable;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

//Intertia

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var gsap,
	    _coreInitted,
	    _toArray,
	    _getUnit,
	    _first,
	    _ticker,
	    _time1,
	    _time2,
	    _getCache,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap);
	},
	    _lookup = {},
	    _round = function _round(value) {
	  return Math.round(value * 10000) / 10000;
	},
	    _getID = function _getID(target) {
	  return _getCache(target).id;
	},
	    _getByTarget = function _getByTarget(target) {
	  return _lookup[_getID(typeof target === "string" ? _toArray(target)[0] : target)];
	},
	    _onTick = function _onTick(time) {
	  var pt = _first,
	      val;

	  if (time - _time1 >= 0.05) {
	    _time2 = _time1;
	    _time1 = time;

	    while (pt) {
	      val = pt.g(pt.t, pt.p);

	      if (val !== pt.v1 || time - pt.t1 > 0.2) {
	        pt.v2 = pt.v1;
	        pt.v1 = val;
	        pt.t2 = pt.t1;
	        pt.t1 = time;
	      }

	      pt = pt._next;
	    }
	  }
	},
	    _types = {
	  deg: 360,
	  rad: Math.PI * 2
	},
	    _initCore = function _initCore() {
	  gsap = _getGSAP();

	  if (gsap) {
	    _toArray = gsap.utils.toArray;
	    _getUnit = gsap.utils.getUnit;
	    _getCache = gsap.core.getCache;
	    _ticker = gsap.ticker;
	    _coreInitted = 1;
	  }
	};

	var PropTracker = function PropTracker(target, property, type, next) {
	  this.t = target;
	  this.p = property;
	  this.g = target._gsap.get;
	  this.rCap = _types[type || _getUnit(this.g(target, property))];
	  this.v1 = this.v2 = 0;
	  this.t1 = this.t2 = _ticker.time;

	  if (next) {
	    this._next = next;
	    next._prev = this;
	  }
	};

	var VelocityTracker = function () {
	  function VelocityTracker(target, property) {
	    if (!_coreInitted) {
	      _initCore();
	    }

	    this.target = _toArray(target)[0];
	    _lookup[_getID(this.target)] = this;
	    this._props = {};
	    property && this.add(property);
	  }

	  VelocityTracker.register = function register(core) {
	    gsap = core;

	    _initCore();
	  };

	  var _proto = VelocityTracker.prototype;

	  _proto.get = function get(property, skipRecentTick) {
	    var pt = this._props[property] || console.warn("Not tracking " + property + " velocity."),
	        val,
	        dif,
	        rotationCap;
	    val = parseFloat(skipRecentTick ? pt.v1 : pt.g(pt.t, pt.p));
	    dif = val - parseFloat(pt.v2);
	    rotationCap = pt.rCap;

	    if (rotationCap) {
	      dif = dif % rotationCap;

	      if (dif !== dif % (rotationCap / 2)) {
	        dif = dif < 0 ? dif + rotationCap : dif - rotationCap;
	      }
	    }

	    return _round(dif / ((skipRecentTick ? pt.t1 : _ticker.time) - pt.t2));
	  };

	  _proto.getAll = function getAll() {
	    var result = {},
	        props = this._props,
	        p;

	    for (p in props) {
	      result[p] = this.get(p);
	    }

	    return result;
	  };

	  _proto.isTracking = function isTracking(property) {
	    return property in this._props;
	  };

	  _proto.add = function add(property, type) {
	    if (!(property in this._props)) {
	      if (!_first) {
	        _ticker.add(_onTick);

	        _time1 = _time2 = _ticker.time;
	      }

	      _first = this._props[property] = new PropTracker(this.target, property, type, _first);
	    }
	  };

	  _proto.remove = function remove(property) {
	    var pt = this._props[property],
	        prev,
	        next;

	    if (pt) {
	      prev = pt._prev;
	      next = pt._next;

	      if (prev) {
	        prev._next = next;
	      }

	      if (next) {
	        next._prev = prev;
	      } else if (_first === pt) {
	        _ticker.remove(_onTick);

	        _first = 0;
	      }

	      delete this._props[property];
	    }
	  };

	  _proto.kill = function kill(shallow) {
	    for (var p in this._props) {
	      this.remove(p);
	    }

	    if (!shallow) {
	      delete _lookup[_getID(this.target)];
	    }
	  };

	  VelocityTracker.track = function track(targets, properties, types) {
	    if (!_coreInitted) {
	      _initCore();
	    }

	    var result = [],
	        targs = _toArray(targets),
	        a = properties.split(","),
	        t = (types || "").split(","),
	        i = targs.length,
	        tracker,
	        j;

	    while (i--) {
	      tracker = _getByTarget(targs[i]) || new VelocityTracker(targs[i]);
	      j = a.length;

	      while (j--) {
	        tracker.add(a[j], t[j] || t[0]);
	      }

	      result.push(tracker);
	    }

	    return result;
	  };

	  VelocityTracker.untrack = function untrack(targets, properties) {
	    var props = (properties || "").split(",");

	    _toArray(targets).forEach(function (target) {
	      var tracker = _getByTarget(target);

	      if (tracker) {
	        if (!props.length) {
	          tracker.kill(1);
	        } else {
	          props.forEach(function (p) {
	            return tracker.remove(p);
	          });
	        }
	      }
	    });
	  };

	  VelocityTracker.isTracking = function isTracking(target, property) {
	    var tracker = _getByTarget(target);

	    return tracker && tracker.isTracking(property);
	  };

	  VelocityTracker.getVelocity = function getVelocity(target, property) {
	    var tracker = _getByTarget(target);

	    return !tracker || !tracker.isTracking(property) ? console.warn("Not tracking velocity of " + property) : tracker.get(property);
	  };

	  return VelocityTracker;
	}();
	VelocityTracker.getByTarget = _getByTarget;
	_getGSAP() && gsap.registerPlugin(VelocityTracker);

	/*!
	 * InertiaPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var gsap$1,
	    _coreInitted$1,
	    _parseEase,
	    _toArray$1,
	    _power3,
	    _config,
	    _getUnit$1,
	    PropTween,
	    _getCache$1,
	    _checkPointRatio,
	    _clamp,
	    _processingVars,
	    _getTracker = VelocityTracker.getByTarget,
	    _getGSAP$1 = function _getGSAP() {
	  return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _isObject = function _isObject(value) {
	  return typeof value === "object";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _bonusValidated = 1,
	    _isArray = Array.isArray,
	    _emptyFunc = function _emptyFunc(p) {
	  return p;
	},
	    _bigNum = 1e10,
	    _tinyNum = 1 / _bigNum,
	    _checkPoint = 0.05,
	    _round$1 = function _round(value) {
	  return Math.round(value * 10000) / 10000;
	},
	    _extend = function _extend(obj, defaults, exclude) {
	  for (var p in defaults) {
	    if (!(p in obj) && p !== exclude) {
	      obj[p] = defaults[p];
	    }
	  }

	  return obj;
	},
	    _deepClone = function _deepClone(obj) {
	  var copy = {},
	      p,
	      v;

	  for (p in obj) {
	    copy[p] = _isObject(v = obj[p]) ? _deepClone(v) : v;
	  }

	  return copy;
	},
	    _getClosest = function _getClosest(n, values, max, min, radius) {
	  var i = values.length,
	      closest = 0,
	      absDif = _bigNum,
	      val,
	      dif,
	      p,
	      dist;

	  if (_isObject(n)) {
	    while (i--) {
	      val = values[i];
	      dif = 0;

	      for (p in n) {
	        dist = val[p] - n[p];
	        dif += dist * dist;
	      }

	      if (dif < absDif) {
	        closest = i;
	        absDif = dif;
	      }
	    }

	    if ((radius || _bigNum) < _bigNum && radius < Math.sqrt(absDif)) {
	      return n;
	    }
	  } else {
	    while (i--) {
	      val = values[i];
	      dif = val - n;

	      if (dif < 0) {
	        dif = -dif;
	      }

	      if (dif < absDif && val >= min && val <= max) {
	        closest = i;
	        absDif = dif;
	      }
	    }
	  }

	  return values[closest];
	},
	    _parseEnd = function _parseEnd(curProp, end, max, min, name, radius) {
	  if (curProp.end === "auto") {
	    return curProp;
	  }

	  var endVar = curProp.end,
	      adjustedEnd,
	      p;
	  max = isNaN(max) ? _bigNum : max;
	  min = isNaN(min) ? -_bigNum : min;

	  if (_isObject(end)) {
	    adjustedEnd = end.calculated ? end : (_isFunction(endVar) ? endVar(end) : _getClosest(end, endVar, max, min, radius)) || end;

	    if (!end.calculated) {
	      for (p in adjustedEnd) {
	        end[p] = adjustedEnd[p];
	      }

	      end.calculated = true;
	    }

	    adjustedEnd = adjustedEnd[name];
	  } else {
	    adjustedEnd = _isFunction(endVar) ? endVar(end) : _isArray(endVar) ? _getClosest(end, endVar, max, min, radius) : parseFloat(endVar);
	  }

	  if (adjustedEnd > max) {
	    adjustedEnd = max;
	  } else if (adjustedEnd < min) {
	    adjustedEnd = min;
	  }

	  return {
	    max: adjustedEnd,
	    min: adjustedEnd,
	    unitFactor: curProp.unitFactor
	  };
	},
	    _getNumOrDefault = function _getNumOrDefault(vars, property, defaultValue) {
	  return isNaN(vars[property]) ? defaultValue : +vars[property];
	},
	    _calculateChange = function _calculateChange(velocity, duration) {
	  return duration * _checkPoint * velocity / _checkPointRatio;
	},
	    _calculateDuration = function _calculateDuration(start, end, velocity) {
	  return Math.abs((end - start) * _checkPointRatio / velocity / _checkPoint);
	},
	    _reservedProps = {
	  resistance: 1,
	  checkpoint: 1,
	  preventOvershoot: 1,
	  linkedProps: 1,
	  radius: 1,
	  duration: 1
	},
	    _processLinkedProps = function _processLinkedProps(target, vars, getVal, resistance) {
	  if (vars.linkedProps) {
	    var linkedPropNames = vars.linkedProps.split(","),
	        linkedProps = {},
	        i,
	        p,
	        curProp,
	        curVelocity,
	        tracker,
	        curDuration;

	    for (i = 0; i < linkedPropNames.length; i++) {
	      p = linkedPropNames[i];
	      curProp = vars[p];

	      if (curProp) {
	        if (_isNumber(curProp.velocity)) {
	          curVelocity = curProp.velocity;
	        } else {
	          tracker = tracker || _getTracker(target);
	          curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
	        }

	        curDuration = Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance));
	        linkedProps[p] = parseFloat(getVal(target, p)) + _calculateChange(curVelocity, curDuration);
	      }
	    }

	    return linkedProps;
	  }
	},
	    _calculateTweenDuration = function _calculateTweenDuration(target, vars, maxDuration, minDuration, overshootTolerance, recordEnd) {
	  if (maxDuration === void 0) {
	    maxDuration = 10;
	  }

	  if (minDuration === void 0) {
	    minDuration = 0.2;
	  }

	  if (overshootTolerance === void 0) {
	    overshootTolerance = 1;
	  }

	  if (recordEnd === void 0) {
	    recordEnd = 0;
	  }

	  _isString(target) && (target = _toArray$1(target)[0]);

	  if (!target) {
	    return 0;
	  }

	  var duration = 0,
	      clippedDuration = _bigNum,
	      inertiaVars = vars.inertia || vars,
	      getVal = _getCache$1(target).get,
	      resistance = _getNumOrDefault(inertiaVars, "resistance", _config.resistance),
	      p,
	      curProp,
	      curDuration,
	      curVelocity,
	      curVal,
	      end,
	      curClippedDuration,
	      tracker,
	      unitFactor,
	      linkedProps;

	  linkedProps = _processLinkedProps(target, inertiaVars, getVal, resistance);

	  for (p in inertiaVars) {
	    if (!_reservedProps[p]) {
	      curProp = inertiaVars[p];

	      if (!_isObject(curProp)) {
	        tracker = tracker || _getTracker(target);

	        if (tracker && tracker.isTracking(p)) {
	          curProp = _isNumber(curProp) ? {
	            velocity: curProp
	          } : {
	            velocity: tracker.get(p)
	          };
	        } else {
	          curVelocity = +curProp || 0;
	          curDuration = Math.abs(curVelocity / resistance);
	        }
	      }

	      if (_isObject(curProp)) {
	        if (_isNumber(curProp.velocity)) {
	          curVelocity = curProp.velocity;
	        } else {
	          tracker = tracker || _getTracker(target);
	          curVelocity = tracker && tracker.isTracking(p) ? tracker.get(p) : 0;
	        }

	        curDuration = _clamp(minDuration, maxDuration, Math.abs(curVelocity / _getNumOrDefault(curProp, "resistance", resistance)));
	        curVal = parseFloat(getVal(target, p)) || 0;
	        end = curVal + _calculateChange(curVelocity, curDuration);

	        if ("end" in curProp) {
	          curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, inertiaVars.radius);

	          if (recordEnd) {
	            _processingVars === vars && (_processingVars = inertiaVars = _deepClone(vars));
	            inertiaVars[p] = _extend(curProp, inertiaVars[p], "end");
	          }
	        }

	        if ("max" in curProp && end > +curProp.max + _tinyNum) {
	          unitFactor = curProp.unitFactor || _config.unitFactors[p] || 1;
	          curClippedDuration = curVal > curProp.max && curProp.min !== curProp.max || curVelocity * unitFactor > -15 && curVelocity * unitFactor < 45 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.max, curVelocity);

	          if (curClippedDuration + overshootTolerance < clippedDuration) {
	            clippedDuration = curClippedDuration + overshootTolerance;
	          }
	        } else if ("min" in curProp && end < +curProp.min - _tinyNum) {
	          unitFactor = curProp.unitFactor || _config.unitFactors[p] || 1;
	          curClippedDuration = curVal < curProp.min && curProp.min !== curProp.max || curVelocity * unitFactor > -45 && curVelocity * unitFactor < 15 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.min, curVelocity);

	          if (curClippedDuration + overshootTolerance < clippedDuration) {
	            clippedDuration = curClippedDuration + overshootTolerance;
	          }
	        }

	        curClippedDuration > duration && (duration = curClippedDuration);
	      }

	      curDuration > duration && (duration = curDuration);
	    }
	  }

	  duration > clippedDuration && (duration = clippedDuration);
	  return duration > maxDuration ? maxDuration : duration < minDuration ? minDuration : duration;
	},
	    _initCore$1 = function _initCore() {
	  gsap$1 = _getGSAP$1();

	  if (gsap$1) {
	    _parseEase = gsap$1.parseEase;
	    _toArray$1 = gsap$1.utils.toArray;
	    _getUnit$1 = gsap$1.utils.getUnit;
	    _getCache$1 = gsap$1.core.getCache;
	    _clamp = gsap$1.utils.clamp;
	    _power3 = _parseEase("power3");
	    _checkPointRatio = _power3(0.05);
	    PropTween = gsap$1.core.PropTween;
	    gsap$1.config({
	      resistance: 100,
	      unitFactors: {
	        time: 1000,
	        totalTime: 1000,
	        progress: 1000,
	        totalProgress: 1000
	      }
	    });
	    _config = gsap$1.config();
	    gsap$1.registerPlugin(VelocityTracker);
	    _coreInitted$1 = 1;
	  }
	};

	var InertiaPlugin = {
	  version: "3.6.1",
	  name: "inertia",
	  register: function register(core) {
	    gsap$1 = core;

	    _initCore$1();
	  },
	  init: function init(target, vars, tween, index, targets) {
	    _coreInitted$1 || _initCore$1();

	    var tracker = _getTracker(target);

	    if (vars === "auto") {
	      if (!tracker) {
	        console.warn("No inertia tracking on " + target + ". InertiaPlugin.track(target) first.");
	        return;
	      }

	      vars = tracker.getAll();
	    }

	    this.target = target;
	    this.tween = tween;
	    _processingVars = vars;

	    var cache = target._gsap,
	        getVal = cache.get,
	        dur = vars.duration,
	        durIsObj = _isObject(dur),
	        preventOvershoot = vars.preventOvershoot || durIsObj && dur.overshoot === 0,
	        resistance = _getNumOrDefault(vars, "resistance", _config.resistance),
	        duration = _isNumber(dur) ? dur : _calculateTweenDuration(target, vars, durIsObj && dur.max || 10, durIsObj && dur.min || 0.2, durIsObj && "overshoot" in dur ? +dur.overshoot : preventOvershoot ? 0 : 1, true),
	        p,
	        curProp,
	        curVal,
	        unit,
	        velocity,
	        change1,
	        end,
	        change2,
	        linkedProps;

	    vars = _processingVars;
	    _processingVars = 0;
	    linkedProps = _processLinkedProps(target, vars, getVal, resistance);

	    for (p in vars) {
	      if (!_reservedProps[p]) {
	        curProp = vars[p];
	        _isFunction(curProp) && (curProp = curProp(index, target, targets));

	        if (_isNumber(curProp)) {
	          velocity = curProp;
	        } else if (_isObject(curProp) && !isNaN(curProp.velocity)) {
	          velocity = +curProp.velocity;
	        } else {
	          if (tracker && tracker.isTracking(p)) {
	            velocity = tracker.get(p);
	          } else {
	            console.warn("ERROR: No velocity was defined for " + target + " property: " + p);
	          }
	        }

	        change1 = _calculateChange(velocity, duration);
	        change2 = 0;
	        curVal = getVal(target, p);
	        unit = _getUnit$1(curVal);
	        curVal = parseFloat(curVal);

	        if (_isObject(curProp)) {
	          end = curVal + change1;

	          if ("end" in curProp) {
	            curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, vars.radius);
	          }

	          if ("max" in curProp && +curProp.max < end) {
	            if (preventOvershoot || curProp.preventOvershoot) {
	              change1 = curProp.max - curVal;
	            } else {
	              change2 = curProp.max - curVal - change1;
	            }
	          } else if ("min" in curProp && +curProp.min > end) {
	            if (preventOvershoot || curProp.preventOvershoot) {
	              change1 = curProp.min - curVal;
	            } else {
	              change2 = curProp.min - curVal - change1;
	            }
	          }
	        }

	        this._props.push(p);

	        this._pt = new PropTween(this._pt, target, p, curVal, 0, _emptyFunc, 0, cache.set(target, p, this));
	        this._pt.u = unit || 0;
	        this._pt.c1 = change1;
	        this._pt.c2 = change2;
	      }
	    }

	    tween.duration(duration);
	    return _bonusValidated;
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt;
	    ratio = _power3(data.tween._time / data.tween._dur);

	    while (pt) {
	      pt.set(pt.t, pt.p, _round$1(pt.s + pt.c1 * ratio + pt.c2 * ratio * ratio) + pt.u, pt.d, ratio);
	      pt = pt._next;
	    }
	  }
	};
	"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function (name) {
	  return InertiaPlugin[name] = VelocityTracker[name];
	});
	_getGSAP$1() && gsap$1.registerPlugin(InertiaPlugin);

	exports.InertiaPlugin = InertiaPlugin;
	exports.VelocityTracker = VelocityTracker;
	exports.default = InertiaPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

// Scroll to

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * ScrollToPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _window,
	    _docEl,
	    _body,
	    _toArray,
	    _config,
	    _windowExists = function _windowExists() {
	  return typeof window !== "undefined";
	},
	    _getGSAP = function _getGSAP() {
	  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _max = function _max(element, axis) {
	  var dim = axis === "x" ? "Width" : "Height",
	      scroll = "scroll" + dim,
	      client = "client" + dim;
	  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
	},
	    _buildGetter = function _buildGetter(e, axis) {
	  var p = "scroll" + (axis === "x" ? "Left" : "Top");

	  if (e === _window) {
	    if (e.pageXOffset != null) {
	      p = "page" + axis.toUpperCase() + "Offset";
	    } else {
	      e = _docEl[p] != null ? _docEl : _body;
	    }
	  }

	  return function () {
	    return e[p];
	  };
	},
	    _clean = function _clean(value, index, target, targets) {
	  _isFunction(value) && (value = value(index, target, targets));

	  if (typeof value !== "object") {
	    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
	      x: value,
	      y: value
	    } : {
	      y: value
	    };
	  } else if (value.nodeType) {
	    return {
	      y: value,
	      x: value
	    };
	  } else {
	    var result = {},
	        p;

	    for (p in value) {
	      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
	    }

	    return result;
	  }
	},
	    _getOffset = function _getOffset(element, container) {
	  element = _toArray(element)[0];

	  if (!element || !element.getBoundingClientRect) {
	    return console.warn("scrollTo target doesn't exist. Using 0") || {
	      x: 0,
	      y: 0
	    };
	  }

	  var rect = element.getBoundingClientRect(),
	      isRoot = !container || container === _window || container === _body,
	      cRect = isRoot ? {
	    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
	    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
	  } : container.getBoundingClientRect(),
	      offsets = {
	    x: rect.left - cRect.left,
	    y: rect.top - cRect.top
	  };

	  if (!isRoot && container) {
	    offsets.x += _buildGetter(container, "x")();
	    offsets.y += _buildGetter(container, "y")();
	  }

	  return offsets;
	},
	    _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
	  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
	},
	    _initCore = function _initCore() {
	  gsap = _getGSAP();

	  if (_windowExists() && gsap && document.body) {
	    _window = window;
	    _body = document.body;
	    _docEl = document.documentElement;
	    _toArray = gsap.utils.toArray;
	    gsap.config({
	      autoKillThreshold: 7
	    });
	    _config = gsap.config();
	    _coreInitted = 1;
	  }
	};

	var ScrollToPlugin = {
	  version: "3.6.1",
	  name: "scrollTo",
	  rawVars: 1,
	  register: function register(core) {
	    gsap = core;

	    _initCore();
	  },
	  init: function init(target, value, tween, index, targets) {
	    _coreInitted || _initCore();
	    var data = this;
	    data.isWin = target === _window;
	    data.target = target;
	    data.tween = tween;
	    value = _clean(value, index, target, targets);
	    data.vars = value;
	    data.autoKill = !!value.autoKill;
	    data.getX = _buildGetter(target, "x");
	    data.getY = _buildGetter(target, "y");
	    data.x = data.xPrev = data.getX();
	    data.y = data.yPrev = data.getY();

	    if (value.x != null) {
	      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

	      data._props.push("scrollTo_x");
	    } else {
	      data.skipX = 1;
	    }

	    if (value.y != null) {
	      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

	      data._props.push("scrollTo_y");
	    } else {
	      data.skipY = 1;
	    }
	  },
	  render: function render(ratio, data) {
	    var pt = data._pt,
	        target = data.target,
	        tween = data.tween,
	        autoKill = data.autoKill,
	        xPrev = data.xPrev,
	        yPrev = data.yPrev,
	        isWin = data.isWin,
	        x,
	        y,
	        yDif,
	        xDif,
	        threshold;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    x = isWin || !data.skipX ? data.getX() : xPrev;
	    y = isWin || !data.skipY ? data.getY() : yPrev;
	    yDif = y - yPrev;
	    xDif = x - xPrev;
	    threshold = _config.autoKillThreshold;

	    if (data.x < 0) {
	      data.x = 0;
	    }

	    if (data.y < 0) {
	      data.y = 0;
	    }

	    if (autoKill) {
	      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
	        data.skipX = 1;
	      }

	      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
	        data.skipY = 1;
	      }

	      if (data.skipX && data.skipY) {
	        tween.kill();
	        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
	      }
	    }

	    if (isWin) {
	      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
	    } else {
	      data.skipY || (target.scrollTop = data.y);
	      data.skipX || (target.scrollLeft = data.x);
	    }

	    data.xPrev = data.x;
	    data.yPrev = data.y;
	  },
	  kill: function kill(property) {
	    var both = property === "scrollTo";

	    if (both || property === "scrollTo_x") {
	      this.skipX = 1;
	    }

	    if (both || property === "scrollTo_y") {
	      this.skipY = 1;
	    }
	  }
	};
	ScrollToPlugin.max = _max;
	ScrollToPlugin.getOffset = _getOffset;
	ScrollToPlugin.buildGetter = _buildGetter;
	_getGSAP() && gsap.registerPlugin(ScrollToPlugin);

	exports.ScrollToPlugin = ScrollToPlugin;
	exports.default = ScrollToPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

// Morph SVG

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
	    _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
	    _DEG2RAD = Math.PI / 180,
	    _sin = Math.sin,
	    _cos = Math.cos,
	    _abs = Math.abs,
	    _sqrt = Math.sqrt,
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _roundingNum = 1e5,
	    _round = function _round(value) {
	  return Math.round(value * _roundingNum) / _roundingNum || 0;
	};

	function getRawPath(value) {
	  value = _isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
	  var e = value.getAttribute ? value : 0,
	      rawPath;

	  if (e && (value = value.getAttribute("d"))) {
	    if (!e._gsPath) {
	      e._gsPath = {};
	    }

	    rawPath = e._gsPath[value];
	    return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
	  }

	  return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
	}
	function reverseSegment(segment) {
	  var i = 0,
	      y;
	  segment.reverse();

	  for (; i < segment.length; i += 2) {
	    y = segment[i];
	    segment[i] = segment[i + 1];
	    segment[i + 1] = y;
	  }

	  segment.reversed = !segment.reversed;
	}

	var _createPath = function _createPath(e, ignore) {
	  var path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
	      attr = [].slice.call(e.attributes),
	      i = attr.length,
	      name;
	  ignore = "," + ignore + ",";

	  while (--i > -1) {
	    name = attr[i].nodeName.toLowerCase();

	    if (ignore.indexOf("," + name + ",") < 0) {
	      path.setAttributeNS(null, name, attr[i].nodeValue);
	    }
	  }

	  return path;
	},
	    _typeAttrs = {
	  rect: "rx,ry,x,y,width,height",
	  circle: "r,cx,cy",
	  ellipse: "rx,ry,cx,cy",
	  line: "x1,x2,y1,y2"
	},
	    _attrToObj = function _attrToObj(e, attrs) {
	  var props = attrs ? attrs.split(",") : [],
	      obj = {},
	      i = props.length;

	  while (--i > -1) {
	    obj[props[i]] = +e.getAttribute(props[i]) || 0;
	  }

	  return obj;
	};

	function convertToPath(element, swap) {
	  var type = element.tagName.toLowerCase(),
	      circ = 0.552284749831,
	      data,
	      x,
	      y,
	      r,
	      ry,
	      path,
	      rcirc,
	      rycirc,
	      points,
	      w,
	      h,
	      x2,
	      x3,
	      x4,
	      x5,
	      x6,
	      y2,
	      y3,
	      y4,
	      y5,
	      y6,
	      attr;

	  if (type === "path" || !element.getBBox) {
	    return element;
	  }

	  path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
	  attr = _attrToObj(element, _typeAttrs[type]);

	  if (type === "rect") {
	    r = attr.rx;
	    ry = attr.ry || r;
	    x = attr.x;
	    y = attr.y;
	    w = attr.width - r * 2;
	    h = attr.height - ry * 2;

	    if (r || ry) {
	      x2 = x + r * (1 - circ);
	      x3 = x + r;
	      x4 = x3 + w;
	      x5 = x4 + r * circ;
	      x6 = x4 + r;
	      y2 = y + ry * (1 - circ);
	      y3 = y + ry;
	      y4 = y3 + h;
	      y5 = y4 + ry * circ;
	      y6 = y4 + ry;
	      data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
	    } else {
	      data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
	    }
	  } else if (type === "circle" || type === "ellipse") {
	    if (type === "circle") {
	      r = ry = attr.r;
	      rycirc = r * circ;
	    } else {
	      r = attr.rx;
	      ry = attr.ry;
	      rycirc = ry * circ;
	    }

	    x = attr.cx;
	    y = attr.cy;
	    rcirc = r * circ;
	    data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
	  } else if (type === "line") {
	    data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
	  } else if (type === "polyline" || type === "polygon") {
	    points = (element.getAttribute("points") + "").match(_numbersExp) || [];
	    x = points.shift();
	    y = points.shift();
	    data = "M" + x + "," + y + " L" + points.join(",");

	    if (type === "polygon") {
	      data += "," + x + "," + y + "z";
	    }
	  }

	  path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));

	  if (swap && element.parentNode) {
	    element.parentNode.insertBefore(path, element);
	    element.parentNode.removeChild(element);
	  }

	  return path;
	}

	function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
	  if (lastX === x && lastY === y) {
	    return;
	  }

	  rx = _abs(rx);
	  ry = _abs(ry);

	  var angleRad = angle % 360 * _DEG2RAD,
	      cosAngle = _cos(angleRad),
	      sinAngle = _sin(angleRad),
	      PI = Math.PI,
	      TWOPI = PI * 2,
	      dx2 = (lastX - x) / 2,
	      dy2 = (lastY - y) / 2,
	      x1 = cosAngle * dx2 + sinAngle * dy2,
	      y1 = -sinAngle * dx2 + cosAngle * dy2,
	      x1_sq = x1 * x1,
	      y1_sq = y1 * y1,
	      radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

	  if (radiiCheck > 1) {
	    rx = _sqrt(radiiCheck) * rx;
	    ry = _sqrt(radiiCheck) * ry;
	  }

	  var rx_sq = rx * rx,
	      ry_sq = ry * ry,
	      sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

	  if (sq < 0) {
	    sq = 0;
	  }

	  var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq),
	      cx1 = coef * (rx * y1 / ry),
	      cy1 = coef * -(ry * x1 / rx),
	      sx2 = (lastX + x) / 2,
	      sy2 = (lastY + y) / 2,
	      cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
	      cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
	      ux = (x1 - cx1) / rx,
	      uy = (y1 - cy1) / ry,
	      vx = (-x1 - cx1) / rx,
	      vy = (-y1 - cy1) / ry,
	      temp = ux * ux + uy * uy,
	      angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)),
	      angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));

	  isNaN(angleExtent) && (angleExtent = PI);

	  if (!sweepFlag && angleExtent > 0) {
	    angleExtent -= TWOPI;
	  } else if (sweepFlag && angleExtent < 0) {
	    angleExtent += TWOPI;
	  }

	  angleStart %= TWOPI;
	  angleExtent %= TWOPI;

	  var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
	      rawPath = [],
	      angleIncrement = angleExtent / segments,
	      controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)),
	      ma = cosAngle * rx,
	      mb = sinAngle * rx,
	      mc = sinAngle * -ry,
	      md = cosAngle * ry,
	      i;

	  for (i = 0; i < segments; i++) {
	    angle = angleStart + i * angleIncrement;
	    x1 = _cos(angle);
	    y1 = _sin(angle);
	    ux = _cos(angle += angleIncrement);
	    uy = _sin(angle);
	    rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
	  }

	  for (i = 0; i < rawPath.length; i += 2) {
	    x1 = rawPath[i];
	    y1 = rawPath[i + 1];
	    rawPath[i] = x1 * ma + y1 * mc + cx;
	    rawPath[i + 1] = x1 * mb + y1 * md + cy;
	  }

	  rawPath[i - 2] = x;
	  rawPath[i - 1] = y;
	  return rawPath;
	}

	function stringToRawPath(d) {
	  var a = (d + "").replace(_scientific, function (m) {
	    var n = +m;
	    return n < 0.0001 && n > -0.0001 ? 0 : n;
	  }).match(_svgPathExp) || [],
	      path = [],
	      relativeX = 0,
	      relativeY = 0,
	      twoThirds = 2 / 3,
	      elements = a.length,
	      points = 0,
	      errorMessage = "ERROR: malformed path: " + d,
	      i,
	      j,
	      x,
	      y,
	      command,
	      isRelative,
	      segment,
	      startX,
	      startY,
	      difX,
	      difY,
	      beziers,
	      prevCommand,
	      flag1,
	      flag2,
	      line = function line(sx, sy, ex, ey) {
	    difX = (ex - sx) / 3;
	    difY = (ey - sy) / 3;
	    segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
	  };

	  if (!d || !isNaN(a[0]) || isNaN(a[1])) {
	    console.log(errorMessage);
	    return path;
	  }

	  for (i = 0; i < elements; i++) {
	    prevCommand = command;

	    if (isNaN(a[i])) {
	      command = a[i].toUpperCase();
	      isRelative = command !== a[i];
	    } else {
	      i--;
	    }

	    x = +a[i + 1];
	    y = +a[i + 2];

	    if (isRelative) {
	      x += relativeX;
	      y += relativeY;
	    }

	    if (!i) {
	      startX = x;
	      startY = y;
	    }

	    if (command === "M") {
	      if (segment) {
	        if (segment.length < 8) {
	          path.length -= 1;
	        } else {
	          points += segment.length;
	        }
	      }

	      relativeX = startX = x;
	      relativeY = startY = y;
	      segment = [x, y];
	      path.push(segment);
	      i += 2;
	      command = "L";
	    } else if (command === "C") {
	      if (!segment) {
	        segment = [0, 0];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
	      i += 6;
	    } else if (command === "S") {
	      difX = relativeX;
	      difY = relativeY;

	      if (prevCommand === "C" || prevCommand === "S") {
	        difX += relativeX - segment[segment.length - 4];
	        difY += relativeY - segment[segment.length - 3];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
	      i += 4;
	    } else if (command === "Q") {
	      difX = relativeX + (x - relativeX) * twoThirds;
	      difY = relativeY + (y - relativeY) * twoThirds;

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      relativeX += a[i + 3] * 1;
	      relativeY += a[i + 4] * 1;
	      segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
	      i += 4;
	    } else if (command === "T") {
	      difX = relativeX - segment[segment.length - 4];
	      difY = relativeY - segment[segment.length - 3];
	      segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
	      i += 2;
	    } else if (command === "H") {
	      line(relativeX, relativeY, relativeX = x, relativeY);
	      i += 1;
	    } else if (command === "V") {
	      line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
	      i += 1;
	    } else if (command === "L" || command === "Z") {
	      if (command === "Z") {
	        x = startX;
	        y = startY;
	        segment.closed = true;
	      }

	      if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
	        line(relativeX, relativeY, x, y);

	        if (command === "L") {
	          i += 2;
	        }
	      }

	      relativeX = x;
	      relativeY = y;
	    } else if (command === "A") {
	      flag1 = a[i + 4];
	      flag2 = a[i + 5];
	      difX = a[i + 6];
	      difY = a[i + 7];
	      j = 7;

	      if (flag1.length > 1) {
	        if (flag1.length < 3) {
	          difY = difX;
	          difX = flag2;
	          j--;
	        } else {
	          difY = flag2;
	          difX = flag1.substr(2);
	          j -= 2;
	        }

	        flag2 = flag1.charAt(1);
	        flag1 = flag1.charAt(0);
	      }

	      beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
	      i += j;

	      if (beziers) {
	        for (j = 0; j < beziers.length; j++) {
	          segment.push(beziers[j]);
	        }
	      }

	      relativeX = segment[segment.length - 2];
	      relativeY = segment[segment.length - 1];
	    } else {
	      console.log(errorMessage);
	    }
	  }

	  i = segment.length;

	  if (i < 6) {
	    path.pop();
	    i = 0;
	  } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
	    segment.closed = true;
	  }

	  path.totalPoints = points + i;
	  return path;
	}
	function rawPathToString(rawPath) {
	  if (_isNumber(rawPath[0])) {
	    rawPath = [rawPath];
	  }

	  var result = "",
	      l = rawPath.length,
	      sl,
	      s,
	      i,
	      segment;

	  for (s = 0; s < l; s++) {
	    segment = rawPath[s];
	    result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
	    sl = segment.length;

	    for (i = 2; i < sl; i++) {
	      result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
	    }

	    if (segment.closed) {
	      result += "z";
	    }
	  }

	  return result;
	}

	/*!
	 * MorphSVGPlugin 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var gsap,
	    _toArray,
	    _lastLinkedAnchor,
	    _coreInitted,
	    PluginClass,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _atan2 = Math.atan2,
	    _cos$1 = Math.cos,
	    _sin$1 = Math.sin,
	    _sqrt$1 = Math.sqrt,
	    _PI = Math.PI,
	    _2PI = _PI * 2,
	    _angleMin = _PI * 0.3,
	    _angleMax = _PI * 0.7,
	    _bigNum = 1e20,
	    _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
	    _selectorExp$1 = /(^[#\.][a-z]|[a-y][a-z])/i,
	    _commands = /[achlmqstvz]/i,
	    _log = function _log(message) {
	  return console && console.warn(message);
	},
	    _bonusValidated = 1,
	    _getAverageXY = function _getAverageXY(segment) {
	  var l = segment.length,
	      x = 0,
	      y = 0,
	      i;

	  for (i = 0; i < l; i++) {
	    x += segment[i++];
	    y += segment[i];
	  }

	  return [x / (l / 2), y / (l / 2)];
	},
	    _getSize = function _getSize(segment) {
	  var l = segment.length,
	      xMax = segment[0],
	      xMin = xMax,
	      yMax = segment[1],
	      yMin = yMax,
	      x,
	      y,
	      i;

	  for (i = 6; i < l; i += 6) {
	    x = segment[i];
	    y = segment[i + 1];

	    if (x > xMax) {
	      xMax = x;
	    } else if (x < xMin) {
	      xMin = x;
	    }

	    if (y > yMax) {
	      yMax = y;
	    } else if (y < yMin) {
	      yMin = y;
	    }
	  }

	  segment.centerX = (xMax + xMin) / 2;
	  segment.centerY = (yMax + yMin) / 2;
	  return segment.size = (xMax - xMin) * (yMax - yMin);
	},
	    _getTotalSize = function _getTotalSize(rawPath, samplesPerBezier) {
	  if (samplesPerBezier === void 0) {
	    samplesPerBezier = 3;
	  }

	  var j = rawPath.length,
	      xMax = rawPath[0][0],
	      xMin = xMax,
	      yMax = rawPath[0][1],
	      yMin = yMax,
	      inc = 1 / samplesPerBezier,
	      l,
	      x,
	      y,
	      i,
	      segment,
	      k,
	      t,
	      inv,
	      x1,
	      y1,
	      x2,
	      x3,
	      x4,
	      y2,
	      y3,
	      y4;

	  while (--j > -1) {
	    segment = rawPath[j];
	    l = segment.length;

	    for (i = 6; i < l; i += 6) {
	      x1 = segment[i];
	      y1 = segment[i + 1];
	      x2 = segment[i + 2] - x1;
	      y2 = segment[i + 3] - y1;
	      x3 = segment[i + 4] - x1;
	      y3 = segment[i + 5] - y1;
	      x4 = segment[i + 6] - x1;
	      y4 = segment[i + 7] - y1;
	      k = samplesPerBezier;

	      while (--k > -1) {
	        t = inc * k;
	        inv = 1 - t;
	        x = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t + x1;
	        y = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t + y1;

	        if (x > xMax) {
	          xMax = x;
	        } else if (x < xMin) {
	          xMin = x;
	        }

	        if (y > yMax) {
	          yMax = y;
	        } else if (y < yMin) {
	          yMin = y;
	        }
	      }
	    }
	  }

	  rawPath.centerX = (xMax + xMin) / 2;
	  rawPath.centerY = (yMax + yMin) / 2;
	  rawPath.left = xMin;
	  rawPath.width = xMax - xMin;
	  rawPath.top = yMin;
	  rawPath.height = yMax - yMin;
	  return rawPath.size = (xMax - xMin) * (yMax - yMin);
	},
	    _sortByComplexity = function _sortByComplexity(a, b) {
	  return b.length - a.length;
	},
	    _sortBySize = function _sortBySize(a, b) {
	  var sizeA = a.size || _getSize(a),
	      sizeB = b.size || _getSize(b);

	  return Math.abs(sizeB - sizeA) < (sizeA + sizeB) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : sizeB - sizeA;
	},
	    _offsetSegment = function _offsetSegment(segment, shapeIndex) {
	  var a = segment.slice(0),
	      l = segment.length,
	      wrap = l - 2,
	      i,
	      index;
	  shapeIndex = shapeIndex | 0;

	  for (i = 0; i < l; i++) {
	    index = (i + shapeIndex) % wrap;
	    segment[i++] = a[index];
	    segment[i] = a[index + 1];
	  }
	},
	    _getTotalMovement = function _getTotalMovement(sb, eb, shapeIndex, offsetX, offsetY) {
	  var l = sb.length,
	      d = 0,
	      wrap = l - 2,
	      index,
	      i,
	      x,
	      y;
	  shapeIndex *= 6;

	  for (i = 0; i < l; i += 6) {
	    index = (i + shapeIndex) % wrap;
	    y = sb[index] - (eb[i] - offsetX);
	    x = sb[index + 1] - (eb[i + 1] - offsetY);
	    d += _sqrt$1(x * x + y * y);
	  }

	  return d;
	},
	    _getClosestShapeIndex = function _getClosestShapeIndex(sb, eb, checkReverse) {
	  var l = sb.length,
	      sCenter = _getAverageXY(sb),
	      eCenter = _getAverageXY(eb),
	      offsetX = eCenter[0] - sCenter[0],
	      offsetY = eCenter[1] - sCenter[1],
	      min = _getTotalMovement(sb, eb, 0, offsetX, offsetY),
	      minIndex = 0,
	      copy,
	      d,
	      i;

	  for (i = 6; i < l; i += 6) {
	    d = _getTotalMovement(sb, eb, i / 6, offsetX, offsetY);

	    if (d < min) {
	      min = d;
	      minIndex = i;
	    }
	  }

	  if (checkReverse) {
	    copy = sb.slice(0);
	    reverseSegment(copy);

	    for (i = 6; i < l; i += 6) {
	      d = _getTotalMovement(copy, eb, i / 6, offsetX, offsetY);

	      if (d < min) {
	        min = d;
	        minIndex = -i;
	      }
	    }
	  }

	  return minIndex / 6;
	},
	    _getClosestAnchor = function _getClosestAnchor(rawPath, x, y) {
	  var j = rawPath.length,
	      closestDistance = _bigNum,
	      closestX = 0,
	      closestY = 0,
	      segment,
	      dx,
	      dy,
	      d,
	      i,
	      l;

	  while (--j > -1) {
	    segment = rawPath[j];
	    l = segment.length;

	    for (i = 0; i < l; i += 6) {
	      dx = segment[i] - x;
	      dy = segment[i + 1] - y;
	      d = _sqrt$1(dx * dx + dy * dy);

	      if (d < closestDistance) {
	        closestDistance = d;
	        closestX = segment[i];
	        closestY = segment[i + 1];
	      }
	    }
	  }

	  return [closestX, closestY];
	},
	    _getClosestSegment = function _getClosestSegment(bezier, pool, startIndex, sortRatio, offsetX, offsetY) {
	  var l = pool.length,
	      index = 0,
	      minSize = Math.min(bezier.size || _getSize(bezier), pool[startIndex].size || _getSize(pool[startIndex])) * sortRatio,
	      min = _bigNum,
	      cx = bezier.centerX + offsetX,
	      cy = bezier.centerY + offsetY,
	      size,
	      i,
	      dx,
	      dy,
	      d;

	  for (i = startIndex; i < l; i++) {
	    size = pool[i].size || _getSize(pool[i]);

	    if (size < minSize) {
	      break;
	    }

	    dx = pool[i].centerX - cx;
	    dy = pool[i].centerY - cy;
	    d = _sqrt$1(dx * dx + dy * dy);

	    if (d < min) {
	      index = i;
	      min = d;
	    }
	  }

	  d = pool[index];
	  pool.splice(index, 1);
	  return d;
	},
	    _subdivideSegmentQty = function _subdivideSegmentQty(segment, quantity) {
	  var tally = 0,
	      max = 0.999999,
	      l = segment.length,
	      newPointsPerSegment = quantity / ((l - 2) / 6),
	      ax,
	      ay,
	      cp1x,
	      cp1y,
	      cp2x,
	      cp2y,
	      bx,
	      by,
	      x1,
	      y1,
	      x2,
	      y2,
	      i,
	      t;

	  for (i = 2; i < l; i += 6) {
	    tally += newPointsPerSegment;

	    while (tally > max) {
	      ax = segment[i - 2];
	      ay = segment[i - 1];
	      cp1x = segment[i];
	      cp1y = segment[i + 1];
	      cp2x = segment[i + 2];
	      cp2y = segment[i + 3];
	      bx = segment[i + 4];
	      by = segment[i + 5];
	      t = 1 / ((Math.floor(tally) || 1) + 1);
	      x1 = ax + (cp1x - ax) * t;
	      x2 = cp1x + (cp2x - cp1x) * t;
	      x1 += (x2 - x1) * t;
	      x2 += (cp2x + (bx - cp2x) * t - x2) * t;
	      y1 = ay + (cp1y - ay) * t;
	      y2 = cp1y + (cp2y - cp1y) * t;
	      y1 += (y2 - y1) * t;
	      y2 += (cp2y + (by - cp2y) * t - y2) * t;
	      segment.splice(i, 4, ax + (cp1x - ax) * t, ay + (cp1y - ay) * t, x1, y1, x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, x2, y2, cp2x + (bx - cp2x) * t, cp2y + (by - cp2y) * t);
	      i += 6;
	      l += 6;
	      tally--;
	    }
	  }

	  return segment;
	},
	    _equalizeSegmentQuantity = function _equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe) {
	  var dif = end.length - start.length,
	      longer = dif > 0 ? end : start,
	      shorter = dif > 0 ? start : end,
	      added = 0,
	      sortMethod = map === "complexity" ? _sortByComplexity : _sortBySize,
	      sortRatio = map === "position" ? 0 : typeof map === "number" ? map : 0.8,
	      i = shorter.length,
	      shapeIndices = typeof shapeIndex === "object" && shapeIndex.push ? shapeIndex.slice(0) : [shapeIndex],
	      reverse = shapeIndices[0] === "reverse" || shapeIndices[0] < 0,
	      log = shapeIndex === "log",
	      eb,
	      sb,
	      b,
	      x,
	      y,
	      offsetX,
	      offsetY;

	  if (!shorter[0]) {
	    return;
	  }

	  if (longer.length > 1) {
	    start.sort(sortMethod);
	    end.sort(sortMethod);
	    offsetX = longer.size || _getTotalSize(longer);
	    offsetX = shorter.size || _getTotalSize(shorter);
	    offsetX = longer.centerX - shorter.centerX;
	    offsetY = longer.centerY - shorter.centerY;

	    if (sortMethod === _sortBySize) {
	      for (i = 0; i < shorter.length; i++) {
	        longer.splice(i, 0, _getClosestSegment(shorter[i], longer, i, sortRatio, offsetX, offsetY));
	      }
	    }
	  }

	  if (dif) {
	    if (dif < 0) {
	      dif = -dif;
	    }

	    if (longer[0].length > shorter[0].length) {
	      _subdivideSegmentQty(shorter[0], (longer[0].length - shorter[0].length) / 6 | 0);
	    }

	    i = shorter.length;

	    while (added < dif) {
	      x = longer[i].size || _getSize(longer[i]);
	      b = _getClosestAnchor(shorter, longer[i].centerX, longer[i].centerY);
	      x = b[0];
	      y = b[1];
	      shorter[i++] = [x, y, x, y, x, y, x, y];
	      shorter.totalPoints += 8;
	      added++;
	    }
	  }

	  for (i = 0; i < start.length; i++) {
	    eb = end[i];
	    sb = start[i];
	    dif = eb.length - sb.length;

	    if (dif < 0) {
	      _subdivideSegmentQty(eb, -dif / 6 | 0);
	    } else if (dif > 0) {
	      _subdivideSegmentQty(sb, dif / 6 | 0);
	    }

	    if (reverse && fillSafe !== false && !sb.reversed) {
	      reverseSegment(sb);
	    }

	    shapeIndex = shapeIndices[i] || shapeIndices[i] === 0 ? shapeIndices[i] : "auto";

	    if (shapeIndex) {
	      if (sb.closed || Math.abs(sb[0] - sb[sb.length - 2]) < 0.5 && Math.abs(sb[1] - sb[sb.length - 1]) < 0.5) {
	        if (shapeIndex === "auto" || shapeIndex === "log") {
	          shapeIndices[i] = shapeIndex = _getClosestShapeIndex(sb, eb, !i || fillSafe === false);

	          if (shapeIndex < 0) {
	            reverse = true;
	            reverseSegment(sb);
	            shapeIndex = -shapeIndex;
	          }

	          _offsetSegment(sb, shapeIndex * 6);
	        } else if (shapeIndex !== "reverse") {
	          if (i && shapeIndex < 0) {
	            reverseSegment(sb);
	          }

	          _offsetSegment(sb, (shapeIndex < 0 ? -shapeIndex : shapeIndex) * 6);
	        }
	      } else if (!reverse && (shapeIndex === "auto" && Math.abs(eb[0] - sb[0]) + Math.abs(eb[1] - sb[1]) + Math.abs(eb[eb.length - 2] - sb[sb.length - 2]) + Math.abs(eb[eb.length - 1] - sb[sb.length - 1]) > Math.abs(eb[0] - sb[sb.length - 2]) + Math.abs(eb[1] - sb[sb.length - 1]) + Math.abs(eb[eb.length - 2] - sb[0]) + Math.abs(eb[eb.length - 1] - sb[1]) || shapeIndex % 2)) {
	        reverseSegment(sb);
	        shapeIndices[i] = -1;
	        reverse = true;
	      } else if (shapeIndex === "auto") {
	        shapeIndices[i] = 0;
	      } else if (shapeIndex === "reverse") {
	        shapeIndices[i] = -1;
	      }

	      if (sb.closed !== eb.closed) {
	        sb.closed = eb.closed = false;
	      }
	    }
	  }

	  log && _log("shapeIndex:[" + shapeIndices.join(",") + "]");
	  start.shapeIndex = shapeIndices;
	  return shapeIndices;
	},
	    _pathFilter = function _pathFilter(a, shapeIndex, map, precompile, fillSafe) {
	  var start = stringToRawPath(a[0]),
	      end = stringToRawPath(a[1]);

	  if (!_equalizeSegmentQuantity(start, end, shapeIndex || shapeIndex === 0 ? shapeIndex : "auto", map, fillSafe)) {
	    return;
	  }

	  a[0] = rawPathToString(start);
	  a[1] = rawPathToString(end);

	  if (precompile === "log" || precompile === true) {
	    _log('precompile:["' + a[0] + '","' + a[1] + '"]');
	  }
	},
	    _offsetPoints = function _offsetPoints(text, offset) {
	  if (!offset) {
	    return text;
	  }

	  var a = text.match(_numExp) || [],
	      l = a.length,
	      s = "",
	      inc,
	      i,
	      j;

	  if (offset === "reverse") {
	    i = l - 1;
	    inc = -2;
	  } else {
	    i = ((parseInt(offset, 10) || 0) * 2 + 1 + l * 100) % l;
	    inc = 2;
	  }

	  for (j = 0; j < l; j += 2) {
	    s += a[i - 1] + "," + a[i] + " ";
	    i = (i + inc) % l;
	  }

	  return s;
	},
	    _equalizePointQuantity = function _equalizePointQuantity(a, quantity) {
	  var tally = 0,
	      x = parseFloat(a[0]),
	      y = parseFloat(a[1]),
	      s = x + "," + y + " ",
	      max = 0.999999,
	      newPointsPerSegment,
	      i,
	      l,
	      j,
	      factor,
	      nextX,
	      nextY;
	  l = a.length;
	  newPointsPerSegment = quantity * 0.5 / (l * 0.5 - 1);

	  for (i = 0; i < l - 2; i += 2) {
	    tally += newPointsPerSegment;
	    nextX = parseFloat(a[i + 2]);
	    nextY = parseFloat(a[i + 3]);

	    if (tally > max) {
	      factor = 1 / (Math.floor(tally) + 1);
	      j = 1;

	      while (tally > max) {
	        s += (x + (nextX - x) * factor * j).toFixed(2) + "," + (y + (nextY - y) * factor * j).toFixed(2) + " ";
	        tally--;
	        j++;
	      }
	    }

	    s += nextX + "," + nextY + " ";
	    x = nextX;
	    y = nextY;
	  }

	  return s;
	},
	    _pointsFilter = function _pointsFilter(a) {
	  var startNums = a[0].match(_numExp) || [],
	      endNums = a[1].match(_numExp) || [],
	      dif = endNums.length - startNums.length;

	  if (dif > 0) {
	    a[0] = _equalizePointQuantity(startNums, dif);
	  } else {
	    a[1] = _equalizePointQuantity(endNums, -dif);
	  }
	},
	    _buildPointsFilter = function _buildPointsFilter(shapeIndex) {
	  return !isNaN(shapeIndex) ? function (a) {
	    _pointsFilter(a);

	    a[1] = _offsetPoints(a[1], parseInt(shapeIndex, 10));
	  } : _pointsFilter;
	},
	    _parseShape = function _parseShape(shape, forcePath, target) {
	  var isString = typeof shape === "string",
	      e,
	      type;

	  if (!isString || _selectorExp$1.test(shape) || (shape.match(_numExp) || []).length < 3) {
	    e = _toArray(shape)[0];

	    if (e) {
	      type = (e.nodeName + "").toUpperCase();

	      if (forcePath && type !== "PATH") {
	        e = convertToPath(e, false);
	        type = "PATH";
	      }

	      shape = e.getAttribute(type === "PATH" ? "d" : "points") || "";

	      if (e === target) {
	        shape = e.getAttributeNS(null, "data-original") || shape;
	      }
	    } else {
	      _log("WARNING: invalid morph to: " + shape);

	      shape = false;
	    }
	  }

	  return shape;
	},
	    _populateSmoothData = function _populateSmoothData(rawPath, tolerance) {
	  var j = rawPath.length,
	      limit = 0.2 * (tolerance || 1),
	      smooth,
	      segment,
	      x,
	      y,
	      x2,
	      y2,
	      i,
	      l,
	      a,
	      a2,
	      isSmooth,
	      smoothData;

	  while (--j > -1) {
	    segment = rawPath[j];
	    isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
	    smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
	    isSmooth.length = 4;
	    l = segment.length - 2;

	    for (i = 6; i < l; i += 6) {
	      x = segment[i] - segment[i - 2];
	      y = segment[i + 1] - segment[i - 1];
	      x2 = segment[i + 2] - segment[i];
	      y2 = segment[i + 3] - segment[i + 1];
	      a = _atan2(y, x);
	      a2 = _atan2(y2, x2);
	      smooth = Math.abs(a - a2) < limit;

	      if (smooth) {
	        smoothData[i - 2] = a;
	        smoothData[i + 2] = a2;
	        smoothData[i - 1] = _sqrt$1(x * x + y * y);
	        smoothData[i + 3] = _sqrt$1(x2 * x2 + y2 * y2);
	      }

	      isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
	    }

	    if (segment[l] === segment[0] && segment[l + 1] === segment[1]) {
	      x = segment[0] - segment[l - 2];
	      y = segment[1] - segment[l - 1];
	      x2 = segment[2] - segment[0];
	      y2 = segment[3] - segment[1];
	      a = _atan2(y, x);
	      a2 = _atan2(y2, x2);

	      if (Math.abs(a - a2) < limit) {
	        smoothData[l - 2] = a;
	        smoothData[2] = a2;
	        smoothData[l - 1] = _sqrt$1(x * x + y * y);
	        smoothData[3] = _sqrt$1(x2 * x2 + y2 * y2);
	        isSmooth[l - 2] = isSmooth[l - 1] = true;
	      }
	    }
	  }

	  return rawPath;
	},
	    _parseOriginFactors = function _parseOriginFactors(v) {
	  var a = v.trim().split(" "),
	      x = ~v.indexOf("left") ? 0 : ~v.indexOf("right") ? 100 : isNaN(parseFloat(a[0])) ? 50 : parseFloat(a[0]),
	      y = ~v.indexOf("top") ? 0 : ~v.indexOf("bottom") ? 100 : isNaN(parseFloat(a[1])) ? 50 : parseFloat(a[1]);
	  return {
	    x: x / 100,
	    y: y / 100
	  };
	},
	    _shortAngle = function _shortAngle(dif) {
	  return dif !== dif % _PI ? dif + (dif < 0 ? _2PI : -_2PI) : dif;
	},
	    _morphMessage = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
	    _tweenRotation = function _tweenRotation(start, end, i, linkedPT) {
	  var so = this._origin,
	      eo = this._eOrigin,
	      dx = start[i] - so.x,
	      dy = start[i + 1] - so.y,
	      d = _sqrt$1(dx * dx + dy * dy),
	      sa = _atan2(dy, dx),
	      angleDif,
	      _short;

	  dx = end[i] - eo.x;
	  dy = end[i + 1] - eo.y;
	  angleDif = _atan2(dy, dx) - sa;
	  _short = _shortAngle(angleDif);

	  if (!linkedPT && _lastLinkedAnchor && Math.abs(_short + _lastLinkedAnchor.ca) < _angleMin) {
	    linkedPT = _lastLinkedAnchor;
	  }

	  return this._anchorPT = _lastLinkedAnchor = {
	    _next: this._anchorPT,
	    t: start,
	    sa: sa,
	    ca: linkedPT && _short * linkedPT.ca < 0 && Math.abs(_short) > _angleMax ? angleDif : _short,
	    sl: d,
	    cl: _sqrt$1(dx * dx + dy * dy) - d,
	    i: i
	  };
	},
	    _initCore = function _initCore(required) {
	  gsap = _getGSAP();
	  PluginClass = PluginClass || gsap && gsap.plugins.morphSVG;

	  if (gsap && PluginClass) {
	    _toArray = gsap.utils.toArray;
	    PluginClass.prototype._tweenRotation = _tweenRotation;
	    _coreInitted = 1;
	  } else if (required) {
	    _log("Please gsap.registerPlugin(MorphSVGPlugin)");
	  }
	};

	var MorphSVGPlugin = {
	  version: "3.6.1",
	  name: "morphSVG",
	  rawVars: 1,
	  register: function register(core, Plugin) {
	    gsap = core;
	    PluginClass = Plugin;

	    _initCore();
	  },
	  init: function init(target, value, tween, index, targets) {
	    _coreInitted || _initCore(1);

	    if (!value) {
	      _log("invalid shape");

	      return false;
	    }

	    _isFunction(value) && (value = value.call(tween, index, target, targets));
	    var type, p, pt, shape, isPoly, shapeIndex, map, startSmooth, endSmooth, start, end, i, j, l, startSeg, endSeg, precompiled, sData, eData, originFactors, useRotation, offset;

	    if (typeof value === "string" || value.getBBox || value[0]) {
	      value = {
	        shape: value
	      };
	    } else if (typeof value === "object") {
	      type = {};

	      for (p in value) {
	        type[p] = _isFunction(value[p]) && p !== "render" ? value[p].call(tween, index, target, targets) : value[p];
	      }

	      value = type;
	    }

	    var cs = target.nodeType ? window.getComputedStyle(target) : {},
	        fill = cs.fill + "",
	        fillSafe = !(fill === "none" || (fill.match(_numExp) || [])[3] === "0" || cs.fillRule === "evenodd"),
	        origins = (value.origin || "50 50").split(",");
	    type = (target.nodeName + "").toUpperCase();
	    isPoly = type === "POLYLINE" || type === "POLYGON";

	    if (type !== "PATH" && !isPoly && !value.prop) {
	      _log("Cannot morph a <" + type + "> element. " + _morphMessage);

	      return false;
	    }

	    p = type === "PATH" ? "d" : "points";

	    if (!value.prop && !_isFunction(target.setAttribute)) {
	      return false;
	    }

	    shape = _parseShape(value.shape || value.d || value.points || "", p === "d", target);

	    if (isPoly && _commands.test(shape)) {
	      _log("A <" + type + "> cannot accept path data. " + _morphMessage);

	      return false;
	    }

	    shapeIndex = value.shapeIndex || value.shapeIndex === 0 ? value.shapeIndex : "auto";
	    map = value.map || MorphSVGPlugin.defaultMap;
	    this._prop = value.prop;
	    this._render = value.render || MorphSVGPlugin.defaultRender;
	    this._apply = "updateTarget" in value ? value.updateTarget : MorphSVGPlugin.defaultUpdateTarget;
	    this._rnd = Math.pow(10, isNaN(value.precision) ? 2 : +value.precision);
	    this._tween = tween;

	    if (shape) {
	      this._target = target;
	      precompiled = typeof value.precompile === "object";
	      start = this._prop ? target[this._prop] : target.getAttribute(p);

	      if (!this._prop && !target.getAttributeNS(null, "data-original")) {
	        target.setAttributeNS(null, "data-original", start);
	      }

	      if (p === "d" || this._prop) {
	        start = stringToRawPath(precompiled ? value.precompile[0] : start);
	        end = stringToRawPath(precompiled ? value.precompile[1] : shape);

	        if (!precompiled && !_equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe)) {
	          return false;
	        }

	        if (value.precompile === "log" || value.precompile === true) {
	          _log('precompile:["' + rawPathToString(start) + '","' + rawPathToString(end) + '"]');
	        }

	        useRotation = (value.type || MorphSVGPlugin.defaultType) !== "linear";

	        if (useRotation) {
	          start = _populateSmoothData(start, value.smoothTolerance);
	          end = _populateSmoothData(end, value.smoothTolerance);

	          if (!start.size) {
	            _getTotalSize(start);
	          }

	          if (!end.size) {
	            _getTotalSize(end);
	          }

	          originFactors = _parseOriginFactors(origins[0]);
	          this._origin = start.origin = {
	            x: start.left + originFactors.x * start.width,
	            y: start.top + originFactors.y * start.height
	          };

	          if (origins[1]) {
	            originFactors = _parseOriginFactors(origins[1]);
	          }

	          this._eOrigin = {
	            x: end.left + originFactors.x * end.width,
	            y: end.top + originFactors.y * end.height
	          };
	        }

	        this._rawPath = target._gsRawPath = start;
	        j = start.length;

	        while (--j > -1) {
	          startSeg = start[j];
	          endSeg = end[j];
	          startSmooth = startSeg.isSmooth || [];
	          endSmooth = endSeg.isSmooth || [];
	          l = startSeg.length;
	          _lastLinkedAnchor = 0;

	          for (i = 0; i < l; i += 2) {
	            if (endSeg[i] !== startSeg[i] || endSeg[i + 1] !== startSeg[i + 1]) {
	              if (useRotation) {
	                if (startSmooth[i] && endSmooth[i]) {
	                  sData = startSeg.smoothData;
	                  eData = endSeg.smoothData;
	                  offset = i + (i === l - 4 ? 7 - l : 5);
	                  this._controlPT = {
	                    _next: this._controlPT,
	                    i: i,
	                    j: j,
	                    l1s: sData[i + 1],
	                    l1c: eData[i + 1] - sData[i + 1],
	                    l2s: sData[offset],
	                    l2c: eData[offset] - sData[offset]
	                  };
	                  pt = this._tweenRotation(startSeg, endSeg, i + 2);

	                  this._tweenRotation(startSeg, endSeg, i, pt);

	                  this._tweenRotation(startSeg, endSeg, offset - 1, pt);

	                  i += 4;
	                } else {
	                  this._tweenRotation(startSeg, endSeg, i);
	                }
	              } else {
	                pt = this.add(startSeg, i, startSeg[i], endSeg[i]);
	                pt = this.add(startSeg, i + 1, startSeg[i + 1], endSeg[i + 1]) || pt;
	              }
	            }
	          }
	        }
	      } else {
	        pt = this.add(target, "setAttribute", target.getAttribute(p) + "", shape + "", index, targets, 0, _buildPointsFilter(shapeIndex), p);
	      }

	      if (useRotation) {
	        this.add(this._origin, "x", this._origin.x, this._eOrigin.x);
	        pt = this.add(this._origin, "y", this._origin.y, this._eOrigin.y);
	      }

	      if (pt) {
	        this._props.push("morphSVG");

	        pt.end = shape;
	        pt.endProp = p;
	      }
	    }

	    return _bonusValidated;
	  },
	  render: function render(ratio, data) {
	    var rawPath = data._rawPath,
	        controlPT = data._controlPT,
	        anchorPT = data._anchorPT,
	        rnd = data._rnd,
	        target = data._target,
	        pt = data._pt,
	        s,
	        space,
	        easeInOut,
	        segment,
	        l,
	        angle,
	        i,
	        j,
	        x,
	        y,
	        sin,
	        cos,
	        offset;

	    while (pt) {
	      pt.r(ratio, pt.d);
	      pt = pt._next;
	    }

	    if (ratio === 1 && data._apply) {
	      pt = data._pt;

	      while (pt) {
	        if (pt.end) {
	          if (data._prop) {
	            target[data._prop] = pt.end;
	          } else {
	            target.setAttribute(pt.endProp, pt.end);
	          }
	        }

	        pt = pt._next;
	      }
	    } else if (rawPath) {
	      while (anchorPT) {
	        angle = anchorPT.sa + ratio * anchorPT.ca;
	        l = anchorPT.sl + ratio * anchorPT.cl;
	        anchorPT.t[anchorPT.i] = data._origin.x + _cos$1(angle) * l;
	        anchorPT.t[anchorPT.i + 1] = data._origin.y + _sin$1(angle) * l;
	        anchorPT = anchorPT._next;
	      }

	      easeInOut = ratio < 0.5 ? 2 * ratio * ratio : (4 - 2 * ratio) * ratio - 1;

	      while (controlPT) {
	        i = controlPT.i;
	        segment = rawPath[controlPT.j];
	        offset = i + (i === segment.length - 4 ? 7 - segment.length : 5);
	        angle = _atan2(segment[offset] - segment[i + 1], segment[offset - 1] - segment[i]);
	        sin = _sin$1(angle);
	        cos = _cos$1(angle);
	        x = segment[i + 2];
	        y = segment[i + 3];
	        l = controlPT.l1s + easeInOut * controlPT.l1c;
	        segment[i] = x - cos * l;
	        segment[i + 1] = y - sin * l;
	        l = controlPT.l2s + easeInOut * controlPT.l2c;
	        segment[offset - 1] = x + cos * l;
	        segment[offset] = y + sin * l;
	        controlPT = controlPT._next;
	      }

	      target._gsRawPath = rawPath;

	      if (data._apply) {
	        s = "";
	        space = " ";

	        for (j = 0; j < rawPath.length; j++) {
	          segment = rawPath[j];
	          l = segment.length;
	          s += "M" + (segment[0] * rnd | 0) / rnd + space + (segment[1] * rnd | 0) / rnd + " C";

	          for (i = 2; i < l; i++) {
	            s += (segment[i] * rnd | 0) / rnd + space;
	          }
	        }

	        if (data._prop) {
	          target[data._prop] = s;
	        } else {
	          target.setAttribute("d", s);
	        }
	      }
	    }

	    data._render && rawPath && data._render.call(data._tween, rawPath, target);
	  },
	  kill: function kill(property) {
	    this._pt = this._rawPath = 0;
	  },
	  getRawPath: getRawPath,
	  stringToRawPath: stringToRawPath,
	  rawPathToString: rawPathToString,
	  normalizeStrings: function normalizeStrings(shape1, shape2, _ref) {
	    var shapeIndex = _ref.shapeIndex,
	        map = _ref.map;
	    var result = [shape1, shape2];

	    _pathFilter(result, shapeIndex, map);

	    return result;
	  },
	  pathFilter: _pathFilter,
	  pointsFilter: _pointsFilter,
	  getTotalSize: _getTotalSize,
	  equalizeSegmentQuantity: _equalizeSegmentQuantity,
	  convertToPath: function convertToPath$1(targets, swap) {
	    return _toArray(targets).map(function (target) {
	      return convertToPath(target, swap !== false);
	    });
	  },
	  defaultType: "linear",
	  defaultUpdateTarget: true,
	  defaultMap: "size"
	};
	_getGSAP() && gsap.registerPlugin(MorphSVGPlugin);

	exports.MorphSVGPlugin = MorphSVGPlugin;
	exports.default = MorphSVGPlugin;

	Object.defineProperty(exports, '__esModule', { value: true });

})));


// Custom Ease

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	    _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
	    _DEG2RAD = Math.PI / 180,
	    _sin = Math.sin,
	    _cos = Math.cos,
	    _abs = Math.abs,
	    _sqrt = Math.sqrt,
	    _isNumber = function _isNumber(value) {
	  return typeof value === "number";
	},
	    _roundingNum = 1e5,
	    _round = function _round(value) {
	  return Math.round(value * _roundingNum) / _roundingNum || 0;
	};
	function transformRawPath(rawPath, a, b, c, d, tx, ty) {
	  var j = rawPath.length,
	      segment,
	      l,
	      i,
	      x,
	      y;

	  while (--j > -1) {
	    segment = rawPath[j];
	    l = segment.length;

	    for (i = 0; i < l; i += 2) {
	      x = segment[i];
	      y = segment[i + 1];
	      segment[i] = x * a + y * c + tx;
	      segment[i + 1] = x * b + y * d + ty;
	    }
	  }

	  rawPath._dirty = 1;
	  return rawPath;
	}

	function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
	  if (lastX === x && lastY === y) {
	    return;
	  }

	  rx = _abs(rx);
	  ry = _abs(ry);

	  var angleRad = angle % 360 * _DEG2RAD,
	      cosAngle = _cos(angleRad),
	      sinAngle = _sin(angleRad),
	      PI = Math.PI,
	      TWOPI = PI * 2,
	      dx2 = (lastX - x) / 2,
	      dy2 = (lastY - y) / 2,
	      x1 = cosAngle * dx2 + sinAngle * dy2,
	      y1 = -sinAngle * dx2 + cosAngle * dy2,
	      x1_sq = x1 * x1,
	      y1_sq = y1 * y1,
	      radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

	  if (radiiCheck > 1) {
	    rx = _sqrt(radiiCheck) * rx;
	    ry = _sqrt(radiiCheck) * ry;
	  }

	  var rx_sq = rx * rx,
	      ry_sq = ry * ry,
	      sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

	  if (sq < 0) {
	    sq = 0;
	  }

	  var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq),
	      cx1 = coef * (rx * y1 / ry),
	      cy1 = coef * -(ry * x1 / rx),
	      sx2 = (lastX + x) / 2,
	      sy2 = (lastY + y) / 2,
	      cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
	      cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
	      ux = (x1 - cx1) / rx,
	      uy = (y1 - cy1) / ry,
	      vx = (-x1 - cx1) / rx,
	      vy = (-y1 - cy1) / ry,
	      temp = ux * ux + uy * uy,
	      angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)),
	      angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));

	  isNaN(angleExtent) && (angleExtent = PI);

	  if (!sweepFlag && angleExtent > 0) {
	    angleExtent -= TWOPI;
	  } else if (sweepFlag && angleExtent < 0) {
	    angleExtent += TWOPI;
	  }

	  angleStart %= TWOPI;
	  angleExtent %= TWOPI;

	  var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
	      rawPath = [],
	      angleIncrement = angleExtent / segments,
	      controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)),
	      ma = cosAngle * rx,
	      mb = sinAngle * rx,
	      mc = sinAngle * -ry,
	      md = cosAngle * ry,
	      i;

	  for (i = 0; i < segments; i++) {
	    angle = angleStart + i * angleIncrement;
	    x1 = _cos(angle);
	    y1 = _sin(angle);
	    ux = _cos(angle += angleIncrement);
	    uy = _sin(angle);
	    rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
	  }

	  for (i = 0; i < rawPath.length; i += 2) {
	    x1 = rawPath[i];
	    y1 = rawPath[i + 1];
	    rawPath[i] = x1 * ma + y1 * mc + cx;
	    rawPath[i + 1] = x1 * mb + y1 * md + cy;
	  }

	  rawPath[i - 2] = x;
	  rawPath[i - 1] = y;
	  return rawPath;
	}

	function stringToRawPath(d) {
	  var a = (d + "").replace(_scientific, function (m) {
	    var n = +m;
	    return n < 0.0001 && n > -0.0001 ? 0 : n;
	  }).match(_svgPathExp) || [],
	      path = [],
	      relativeX = 0,
	      relativeY = 0,
	      twoThirds = 2 / 3,
	      elements = a.length,
	      points = 0,
	      errorMessage = "ERROR: malformed path: " + d,
	      i,
	      j,
	      x,
	      y,
	      command,
	      isRelative,
	      segment,
	      startX,
	      startY,
	      difX,
	      difY,
	      beziers,
	      prevCommand,
	      flag1,
	      flag2,
	      line = function line(sx, sy, ex, ey) {
	    difX = (ex - sx) / 3;
	    difY = (ey - sy) / 3;
	    segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
	  };

	  if (!d || !isNaN(a[0]) || isNaN(a[1])) {
	    console.log(errorMessage);
	    return path;
	  }

	  for (i = 0; i < elements; i++) {
	    prevCommand = command;

	    if (isNaN(a[i])) {
	      command = a[i].toUpperCase();
	      isRelative = command !== a[i];
	    } else {
	      i--;
	    }

	    x = +a[i + 1];
	    y = +a[i + 2];

	    if (isRelative) {
	      x += relativeX;
	      y += relativeY;
	    }

	    if (!i) {
	      startX = x;
	      startY = y;
	    }

	    if (command === "M") {
	      if (segment) {
	        if (segment.length < 8) {
	          path.length -= 1;
	        } else {
	          points += segment.length;
	        }
	      }

	      relativeX = startX = x;
	      relativeY = startY = y;
	      segment = [x, y];
	      path.push(segment);
	      i += 2;
	      command = "L";
	    } else if (command === "C") {
	      if (!segment) {
	        segment = [0, 0];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
	      i += 6;
	    } else if (command === "S") {
	      difX = relativeX;
	      difY = relativeY;

	      if (prevCommand === "C" || prevCommand === "S") {
	        difX += relativeX - segment[segment.length - 4];
	        difY += relativeY - segment[segment.length - 3];
	      }

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
	      i += 4;
	    } else if (command === "Q") {
	      difX = relativeX + (x - relativeX) * twoThirds;
	      difY = relativeY + (y - relativeY) * twoThirds;

	      if (!isRelative) {
	        relativeX = relativeY = 0;
	      }

	      relativeX += a[i + 3] * 1;
	      relativeY += a[i + 4] * 1;
	      segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
	      i += 4;
	    } else if (command === "T") {
	      difX = relativeX - segment[segment.length - 4];
	      difY = relativeY - segment[segment.length - 3];
	      segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
	      i += 2;
	    } else if (command === "H") {
	      line(relativeX, relativeY, relativeX = x, relativeY);
	      i += 1;
	    } else if (command === "V") {
	      line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
	      i += 1;
	    } else if (command === "L" || command === "Z") {
	      if (command === "Z") {
	        x = startX;
	        y = startY;
	        segment.closed = true;
	      }

	      if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
	        line(relativeX, relativeY, x, y);

	        if (command === "L") {
	          i += 2;
	        }
	      }

	      relativeX = x;
	      relativeY = y;
	    } else if (command === "A") {
	      flag1 = a[i + 4];
	      flag2 = a[i + 5];
	      difX = a[i + 6];
	      difY = a[i + 7];
	      j = 7;

	      if (flag1.length > 1) {
	        if (flag1.length < 3) {
	          difY = difX;
	          difX = flag2;
	          j--;
	        } else {
	          difY = flag2;
	          difX = flag1.substr(2);
	          j -= 2;
	        }

	        flag2 = flag1.charAt(1);
	        flag1 = flag1.charAt(0);
	      }

	      beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
	      i += j;

	      if (beziers) {
	        for (j = 0; j < beziers.length; j++) {
	          segment.push(beziers[j]);
	        }
	      }

	      relativeX = segment[segment.length - 2];
	      relativeY = segment[segment.length - 1];
	    } else {
	      console.log(errorMessage);
	    }
	  }

	  i = segment.length;

	  if (i < 6) {
	    path.pop();
	    i = 0;
	  } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
	    segment.closed = true;
	  }

	  path.totalPoints = points + i;
	  return path;
	}
	function rawPathToString(rawPath) {
	  if (_isNumber(rawPath[0])) {
	    rawPath = [rawPath];
	  }

	  var result = "",
	      l = rawPath.length,
	      sl,
	      s,
	      i,
	      segment;

	  for (s = 0; s < l; s++) {
	    segment = rawPath[s];
	    result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
	    sl = segment.length;

	    for (i = 2; i < sl; i++) {
	      result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
	    }

	    if (segment.closed) {
	      result += "z";
	    }
	  }

	  return result;
	}

	/*!
	 * CustomEase 3.6.1
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/

	var gsap,
	    _coreInitted,
	    _getGSAP = function _getGSAP() {
	  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
	},
	    _initCore = function _initCore() {
	  gsap = _getGSAP();

	  if (gsap) {
	    gsap.registerEase("_CE", CustomEase.create);
	    _coreInitted = 1;
	  } else {
	    console.warn("Please gsap.registerPlugin(CustomEase)");
	  }
	},
	    _bigNum = 1e20,
	    _round$1 = function _round(value) {
	  return ~~(value * 1000 + (value < 0 ? -.5 : .5)) / 1000;
	},
	    _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
	    _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g,
	    _findMinimum = function _findMinimum(values) {
	  var l = values.length,
	      min = _bigNum,
	      i;

	  for (i = 1; i < l; i += 6) {
	    +values[i] < min && (min = +values[i]);
	  }

	  return min;
	},
	    _normalize = function _normalize(values, height, originY) {
	  if (!originY && originY !== 0) {
	    originY = Math.max(+values[values.length - 1], +values[1]);
	  }

	  var tx = +values[0] * -1,
	      ty = -originY,
	      l = values.length,
	      sx = 1 / (+values[l - 2] + tx),
	      sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty),
	      i;

	  if (sy) {
	    sy = 1 / sy;
	  } else {
	    sy = -sx;
	  }

	  for (i = 0; i < l; i += 2) {
	    values[i] = (+values[i] + tx) * sx;
	    values[i + 1] = (+values[i + 1] + ty) * sy;
	  }
	},
	    _bezierToPoints = function _bezierToPoints(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
	  var x12 = (x1 + x2) / 2,
	      y12 = (y1 + y2) / 2,
	      x23 = (x2 + x3) / 2,
	      y23 = (y2 + y3) / 2,
	      x34 = (x3 + x4) / 2,
	      y34 = (y3 + y4) / 2,
	      x123 = (x12 + x23) / 2,
	      y123 = (y12 + y23) / 2,
	      x234 = (x23 + x34) / 2,
	      y234 = (y23 + y34) / 2,
	      x1234 = (x123 + x234) / 2,
	      y1234 = (y123 + y234) / 2,
	      dx = x4 - x1,
	      dy = y4 - y1,
	      d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx),
	      d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx),
	      length;

	  if (!points) {
	    points = [{
	      x: x1,
	      y: y1
	    }, {
	      x: x4,
	      y: y4
	    }];
	    index = 1;
	  }

	  points.splice(index || points.length - 1, 0, {
	    x: x1234,
	    y: y1234
	  });

	  if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
	    length = points.length;

	    _bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);

	    _bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
	  }

	  return points;
	};

	var CustomEase = function () {
	  function CustomEase(id, data, config) {
	    _coreInitted || _initCore();
	    this.id = id;
	     this.setData(data, config);
	  }

	  var _proto = CustomEase.prototype;

	  _proto.setData = function setData(data, config) {
	    config = config || {};
	    data = data || "0,0,1,1";
	    var values = data.match(_numExp),
	        closest = 1,
	        points = [],
	        lookup = [],
	        precision = config.precision || 1,
	        fast = precision <= 1,
	        l,
	        a1,
	        a2,
	        i,
	        inc,
	        j,
	        point,
	        prevPoint,
	        p;
	    this.data = data;

	    if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
	      values = stringToRawPath(data)[0];
	    }

	    l = values.length;

	    if (l === 4) {
	      values.unshift(0, 0);
	      values.push(1, 1);
	      l = 8;
	    } else if ((l - 2) % 6) {
	      throw "Invalid CustomEase";
	    }

	    if (+values[0] !== 0 || +values[l - 2] !== 1) {
	      _normalize(values, config.height, config.originY);
	    }

	    this.segment = values;

	    for (i = 2; i < l; i += 6) {
	      a1 = {
	        x: +values[i - 2],
	        y: +values[i - 1]
	      };
	      a2 = {
	        x: +values[i + 4],
	        y: +values[i + 5]
	      };
	      points.push(a1, a2);

	      _bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 200000), points, points.length - 1);
	    }

	    l = points.length;

	    for (i = 0; i < l; i++) {
	      point = points[i];
	      prevPoint = points[i - 1] || point;

	      if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
	        prevPoint.cx = point.x - prevPoint.x;
	        prevPoint.cy = point.y - prevPoint.y;
	        prevPoint.n = point;
	        prevPoint.nx = point.x;

	        if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) {
	          fast = 0;
	        }

	        if (prevPoint.cx < closest) {
	          if (!prevPoint.cx) {
	            prevPoint.cx = 0.001;

	            if (i === l - 1) {
	              prevPoint.x -= 0.001;
	              closest = Math.min(closest, 0.001);
	              fast = 0;
	            }
	          } else {
	            closest = prevPoint.cx;
	          }
	        }
	      } else {
	        points.splice(i--, 1);
	        l--;
	      }
	    }

	    l = 1 / closest + 1 | 0;
	    inc = 1 / l;
	    j = 0;
	    point = points[0];

	    if (fast) {
	      for (i = 0; i < l; i++) {
	        p = i * inc;

	        if (point.nx < p) {
	          point = points[++j];
	        }

	        a1 = point.y + (p - point.x) / point.cx * point.cy;
	        lookup[i] = {
	          x: p,
	          cx: inc,
	          y: a1,
	          cy: 0,
	          nx: 9
	        };

	        if (i) {
	          lookup[i - 1].cy = a1 - lookup[i - 1].y;
	        }
	      }

	      lookup[l - 1].cy = points[points.length - 1].y - a1;
	    } else {
	      for (i = 0; i < l; i++) {
	        if (point.nx < i * inc) {
	          point = points[++j];
	        }

	        lookup[i] = point;
	      }

	      if (j < points.length - 1) {
	        lookup[i - 1] = points[points.length - 2];
	      }
	    }

	    this.ease = function (p) {
	      var point = lookup[p * l | 0] || lookup[l - 1];

	      if (point.nx < p) {
	        point = point.n;
	      }

	      return point.y + (p - point.x) / point.cx * point.cy;
	    };

	    this.ease.custom = this;
	    this.id && gsap.registerEase(this.id, this.ease);
	    return this;
	  };

	  _proto.getSVGData = function getSVGData(config) {
	    return CustomEase.getSVGData(this, config);
	  };

	  CustomEase.create = function create(id, data, config) {
	    return new CustomEase(id, data, config).ease;
	  };

	  CustomEase.register = function register(core) {
	    gsap = core;

	    _initCore();
	  };

	  CustomEase.get = function get(id) {
	    return gsap.parseEase(id);
	  };

	  CustomEase.getSVGData = function getSVGData(ease, config) {
	    config = config || {};
	    var width = config.width || 100,
	        height = config.height || 100,
	        x = config.x || 0,
	        y = (config.y || 0) + height,
	        e = gsap.utils.toArray(config.path)[0],
	        a,
	        slope,
	        i,
	        inc,
	        tx,
	        ty,
	        precision,
	        threshold,
	        prevX,
	        prevY;

	    if (config.invert) {
	      height = -height;
	      y = 0;
	    }

	    if (typeof ease === "string") {
	      ease = gsap.parseEase(ease);
	    }

	    if (ease.custom) {
	      ease = ease.custom;
	    }

	    if (ease instanceof CustomEase) {
	      a = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
	    } else {
	      a = [x, y];
	      precision = Math.max(5, (config.precision || 1) * 200);
	      inc = 1 / precision;
	      precision += 2;
	      threshold = 5 / precision;
	      prevX = _round$1(x + inc * width);
	      prevY = _round$1(y + ease(inc) * -height);
	      slope = (prevY - y) / (prevX - x);

	      for (i = 2; i < precision; i++) {
	        tx = _round$1(x + i * inc * width);
	        ty = _round$1(y + ease(i * inc) * -height);

	        if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
	          a.push(prevX, prevY);
	          slope = (ty - prevY) / (tx - prevX);
	        }

	        prevX = tx;
	        prevY = ty;
	      }

	      a = "M" + a.join(",");
	    }

	    e && e.setAttribute("d", a);
	    return a;
	  };

	  return CustomEase;
	}();
	_getGSAP() && gsap.registerPlugin(CustomEase);
	CustomEase.version = "3.6.1";

	exports.CustomEase = CustomEase;
	exports.default = CustomEase;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

/**
 * Swiper 6.8.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 22, 2021
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(){return(t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function a(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function i(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(s){void 0===e[s]?e[s]=t[s]:a(t[s])&&a(e[s])&&Object.keys(t[s]).length>0&&i(e[s],t[s])}))}var s={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function r(){var e="undefined"!=typeof document?document:{};return i(e,s),e}var n={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function l(){var e="undefined"!=typeof window?window:{};return i(e,n),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,a){return(u=p()?Reflect.construct:function(e,t,a){var i=[null];i.push.apply(i,t);var s=new(Function.bind.apply(e,i));return a&&d(s,a.prototype),s}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return u(e,arguments,o(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),d(i,e)})(e)}var h=function(e){var t,a;function i(t){var a,i,s;return a=e.call.apply(e,[this].concat(t))||this,i=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a),s=i.__proto__,Object.defineProperty(i,"__proto__",{get:function(){return s},set:function(e){s.__proto__=e}}),a}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i}(c(Array));function v(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,v(e)):t.push(e)})),t}function f(e,t){return Array.prototype.filter.call(e,t)}function m(e,t){var a=l(),i=r(),s=[];if(!t&&e instanceof h)return e;if(!e)return new h(s);if("string"==typeof e){var n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){var o="div";0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select");var d=i.createElement(o);d.innerHTML=n;for(var p=0;p<d.childNodes.length;p+=1)s.push(d.childNodes[p])}else s=function(e,t){if("string"!=typeof e)return[e];for(var a=[],i=t.querySelectorAll(e),s=0;s<i.length;s+=1)a.push(i[s]);return a}(e.trim(),t||i)}else if(e.nodeType||e===a||e===i)s.push(e);else if(Array.isArray(e)){if(e instanceof h)return e;s=e}return new h(function(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}(s))}m.fn=h.prototype;var g,b,y,w={addClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,i)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,i)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));return f(this,(function(e){return i.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=v(t.map((function(e){return e.split(" ")})));this.forEach((function(e){i.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var a=0;a<this.length;a+=1)if(2===arguments.length)this[a].setAttribute(e,t);else for(var i in e)this[a][i]=e[i],this[a].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];function l(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),m(t).is(s))r.apply(t,a);else for(var i=m(t).parents(),n=0;n<i.length;n+=1)m(i[n]).is(s)&&r.apply(i[n],a)}}function o(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var d,p=i.split(" "),u=0;u<this.length;u+=1){var c=this[u];if(s)for(d=0;d<p.length;d+=1){var h=p[d];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[h]||(c.dom7LiveListeners[h]=[]),c.dom7LiveListeners[h].push({listener:r,proxyListener:l}),c.addEventListener(h,l,n)}else for(d=0;d<p.length;d+=1){var v=p[d];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[v]||(c.dom7Listeners[v]=[]),c.dom7Listeners[v].push({listener:r,proxyListener:o}),c.addEventListener(v,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=t[0],r=t[1],n=t[2],s=void 0),n||(n=!1);for(var l=i.split(" "),o=0;o<l.length;o+=1)for(var d=l[o],p=0;p<this.length;p+=1){var u=this[p],c=void 0;if(!s&&u.dom7Listeners?c=u.dom7Listeners[d]:s&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[d]),c&&c.length)for(var h=c.length-1;h>=0;h-=1){var v=c[h];r&&v.listener===r||r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(u.removeEventListener(d,v.proxyListener,n),c.splice(h,1)):r||(u.removeEventListener(d,v.proxyListener,n),c.splice(h,1))}}return this},trigger:function(){for(var e=l(),t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];for(var s=a[0].split(" "),r=a[1],n=0;n<s.length;n+=1)for(var o=s[n],d=0;d<this.length;d+=1){var p=this[d];if(e.CustomEvent){var u=new e.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});p.dom7EventData=a.filter((function(e,t){return t>0})),p.dispatchEvent(u),p.dom7EventData=[],delete p.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function a(i){i.target===this&&(e.call(this,i),t.off("transitionend",a))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=l();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=l(),t=r(),a=this[0],i=a.getBoundingClientRect(),s=t.body,n=a.clientTop||s.clientTop||0,o=a.clientLeft||s.clientLeft||0,d=a===e?e.scrollY:a.scrollTop,p=a===e?e.scrollX:a.scrollLeft;return{top:i.top+d-n,left:i.left+p-o}}return null},css:function(e,t){var a,i=l();if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var s in e)this[a].style[s]=e[s];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,a){e.apply(t,[t,a])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=l(),s=r(),n=this[0];if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(t=m(e),a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}if(e===s)return n===s;if(e===i)return n===i;if(e.nodeType||e instanceof h){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===n)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return m([]);if(e<0){var a=t+e;return m(a<0?[]:[this[a]])}return m([this[e]])},append:function(){for(var e,t=r(),a=0;a<arguments.length;a+=1){e=a<0||arguments.length<=a?void 0:arguments[a];for(var i=0;i<this.length;i+=1)if("string"==typeof e){var s=t.createElement("div");for(s.innerHTML=e;s.firstChild;)this[i].appendChild(s.firstChild)}else if(e instanceof h)for(var n=0;n<e.length;n+=1)this[i].appendChild(e[n]);else this[i].appendChild(e)}return this},prepend:function(e){var t,a,i=r();for(t=0;t<this.length;t+=1)if("string"==typeof e){var s=i.createElement("div");for(s.innerHTML=e,a=s.childNodes.length-1;a>=0;a-=1)this[t].insertBefore(s.childNodes[a],this[t].childNodes[0])}else if(e instanceof h)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&m(this[0].nextElementSibling).is(e)?m([this[0].nextElementSibling]):m([]):this[0].nextElementSibling?m([this[0].nextElementSibling]):m([]):m([])},nextAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&m(t.previousElementSibling).is(e)?m([t.previousElementSibling]):m([]):t.previousElementSibling?m([t.previousElementSibling]):m([])}return m([])},prevAll:function(e){var t=[],a=this[0];if(!a)return m([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?m(i).is(e)&&t.push(i):t.push(i),a=i}return m(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?m(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return m(t)},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?m(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return m(t)},closest:function(e){var t=this;return void 0===e?m([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1){try{var i=this[a].querySelectorAll(e)}catch(t){console.log(e)}for(var s=0;s<i.length;s+=1)t.push(i[s])}return m(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].children,s=0;s<i.length;s+=1)e&&!m(i[s]).is(e)||t.push(i[s]);return m(t)},filter:function(e){return m(f(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function E(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function x(){return Date.now()}function T(e,t){void 0===t&&(t="x");var a,i,s,r=l(),n=function(e){var t,a=l();return a.getComputedStyle&&(t=a.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return r.WebKitCSSMatrix?((i=n.transform||n.webkitTransform).split(",").length>6&&(i=i.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),s=new r.WebKitCSSMatrix("none"===i?"":i)):a=(s=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=r.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=r.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function C(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function S(e){return"undefined"!=typeof window?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function M(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"],a=1;a<arguments.length;a+=1){var i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i&&!S(i))for(var s=Object.keys(Object(i)).filter((function(e){return t.indexOf(e)<0})),r=0,n=s.length;r<n;r+=1){var l=s[r],o=Object.getOwnPropertyDescriptor(i,l);void 0!==o&&o.enumerable&&(C(e[l])&&C(i[l])?i[l].__swiper__?e[l]=i[l]:M(e[l],i[l]):!C(e[l])&&C(i[l])?(e[l]={},i[l].__swiper__?e[l]=i[l]:M(e[l],i[l])):e[l]=i[l])}}return e}function z(e,t){Object.keys(t).forEach((function(a){C(t[a])&&Object.keys(t[a]).forEach((function(i){"function"==typeof t[a][i]&&(t[a][i]=t[a][i].bind(e))})),e[a]=t[a]}))}function P(e){return void 0===e&&(e=""),"."+e.trim().replace(/([\.:\/])/g,"\\$1").replace(/ /g,".")}function k(e,t,a,i){var s=r();return a&&Object.keys(i).forEach((function(a){if(!t[a]&&!0===t.auto){var r=s.createElement("div");r.className=i[a],e.append(r),t[a]=r}})),t}function $(){return g||(g=function(){var e=l(),t=r();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var a=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,a)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),g}function L(e){return void 0===e&&(e={}),b||(b=function(e){var t=(void 0===e?{}:e).userAgent,a=$(),i=l(),s=i.navigator.platform,r=t||i.navigator.userAgent,n={ios:!1,android:!1},o=i.screen.width,d=i.screen.height,p=r.match(/(Android);?[\s\/]+([\d.]+)?/),u=r.match(/(iPad).*OS\s([\d_]+)/),c=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v="Win32"===s,f="MacIntel"===s;return!u&&f&&a.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(o+"x"+d)>=0&&((u=r.match(/(Version)\/([\d.]+)/))||(u=[0,1,"13_0_0"]),f=!1),p&&!v&&(n.os="android",n.android=!0),(u||h||c)&&(n.os="ios",n.ios=!0),n}(e)),b}function I(){return y||(y=function(){var e,t=l();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),y}Object.keys(w).forEach((function(e){Object.defineProperty(m.fn,e,{value:w[e],writable:!0})}));var O={name:"resize",create:function(){var e=this;M(e,{resize:{observer:null,createObserver:function(){e&&!e.destroyed&&e.initialized&&(e.resize.observer=new ResizeObserver((function(t){var a=e.width,i=e.height,s=a,r=i;t.forEach((function(t){var a=t.contentBoxSize,i=t.contentRect,n=t.target;n&&n!==e.el||(s=i?i.width:(a[0]||a).inlineSize,r=i?i.height:(a[0]||a).blockSize)})),s===a&&r===i||e.resize.resizeHandler()})),e.resize.observer.observe(e.el))},removeObserver:function(){e.resize.observer&&e.resize.observer.unobserve&&e.el&&(e.resize.observer.unobserve(e.el),e.resize.observer=null)},resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=l();e.params.resizeObserver&&void 0!==l().ResizeObserver?e.resize.createObserver():(t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler))},destroy:function(e){var t=l();e.resize.removeObserver(),t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}},A={attach:function(e,t){void 0===t&&(t={});var a=l(),i=this,s=new(a.MutationObserver||a.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){var e=this;if(e.support.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},D={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){z(this,{observer:t({},A,{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}};function N(e){var t=this,a=r(),i=l(),s=t.touchEventsData,n=t.params,o=t.touches;if(t.enabled&&(!t.animating||!n.preventInteractionOnTransition)){var d=e;d.originalEvent&&(d=d.originalEvent);var p=m(d.target);if("wrapper"!==n.touchEventsTarget||p.closest(t.wrapperEl).length)if(s.isTouchEvent="touchstart"===d.type,s.isTouchEvent||!("which"in d)||3!==d.which)if(!(!s.isTouchEvent&&"button"in d&&d.button>0))if(!s.isTouched||!s.isMoved)if(!!n.noSwipingClass&&""!==n.noSwipingClass&&d.target&&d.target.shadowRoot&&e.path&&e.path[0]&&(p=m(e.path[0])),n.noSwiping&&p.closest(n.noSwipingSelector?n.noSwipingSelector:"."+n.noSwipingClass)[0])t.allowClick=!0;else if(!n.swipeHandler||p.closest(n.swipeHandler)[0]){o.currentX="touchstart"===d.type?d.targetTouches[0].pageX:d.pageX,o.currentY="touchstart"===d.type?d.targetTouches[0].pageY:d.pageY;var u=o.currentX,c=o.currentY,h=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,v=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(h&&(u<=v||u>=i.innerWidth-v)){if("prevent"!==h)return;e.preventDefault()}if(M(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=u,o.startY=c,s.touchStartTime=x(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1),"touchstart"!==d.type){var f=!0;p.is(s.focusableElements)&&(f=!1),a.activeElement&&m(a.activeElement).is(s.focusableElements)&&a.activeElement!==p[0]&&a.activeElement.blur();var g=f&&t.allowTouchMove&&n.touchStartPreventDefault;!n.touchStartForcePreventDefault&&!g||p[0].isContentEditable||d.preventDefault()}t.emit("touchStart",d)}}}function G(e){var t=r(),a=this,i=a.touchEventsData,s=a.params,n=a.touches,l=a.rtlTranslate;if(a.enabled){var o=e;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===o.type){var d="touchmove"===o.type&&o.targetTouches&&(o.targetTouches[0]||o.changedTouches[0]),p="touchmove"===o.type?d.pageX:o.pageX,u="touchmove"===o.type?d.pageY:o.pageY;if(o.preventedByNestedSwiper)return n.startX=p,void(n.startY=u);if(!a.allowTouchMove)return a.allowClick=!1,void(i.isTouched&&(M(n,{startX:p,startY:u,currentX:p,currentY:u}),i.touchStartTime=x()));if(i.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(a.isVertical()){if(u<n.startY&&a.translate<=a.maxTranslate()||u>n.startY&&a.translate>=a.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<n.startX&&a.translate<=a.maxTranslate()||p>n.startX&&a.translate>=a.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&o.target===t.activeElement&&m(o.target).is(i.focusableElements))return i.isMoved=!0,void(a.allowClick=!1);if(i.allowTouchCallbacks&&a.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){n.currentX=p,n.currentY=u;var c=n.currentX-n.startX,h=n.currentY-n.startY;if(!(a.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(h,2))<a.params.threshold)){var v;if(void 0===i.isScrolling)a.isHorizontal()&&n.currentY===n.startY||a.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:c*c+h*h>=25&&(v=180*Math.atan2(Math.abs(h),Math.abs(c))/Math.PI,i.isScrolling=a.isHorizontal()?v>s.touchAngle:90-v>s.touchAngle);if(i.isScrolling&&a.emit("touchMoveOpposite",o),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){a.allowClick=!1,!s.cssMode&&o.cancelable&&o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation(),i.isMoved||(s.loop&&a.loopFix(),i.startTranslate=a.getTranslate(),a.setTransition(0),a.animating&&a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!s.grabCursor||!0!==a.allowSlideNext&&!0!==a.allowSlidePrev||a.setGrabCursor(!0),a.emit("sliderFirstMove",o)),a.emit("sliderMove",o),i.isMoved=!0;var f=a.isHorizontal()?c:h;n.diff=f,f*=s.touchRatio,l&&(f=-f),a.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var g=!0,b=s.resistanceRatio;if(s.touchReleaseOnEdges&&(b=0),f>0&&i.currentTranslate>a.minTranslate()?(g=!1,s.resistance&&(i.currentTranslate=a.minTranslate()-1+Math.pow(-a.minTranslate()+i.startTranslate+f,b))):f<0&&i.currentTranslate<a.maxTranslate()&&(g=!1,s.resistance&&(i.currentTranslate=a.maxTranslate()+1-Math.pow(a.maxTranslate()-i.startTranslate-f,b))),g&&(o.preventedByNestedSwiper=!0),!a.allowSlideNext&&"next"===a.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!a.allowSlidePrev&&"prev"===a.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.allowSlidePrev||a.allowSlideNext||(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(f)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=a.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}s.followFinger&&!s.cssMode&&((s.freeMode||s.watchSlidesProgress||s.watchSlidesVisibility)&&(a.updateActiveIndex(),a.updateSlidesClasses()),s.freeMode&&(0===i.velocities.length&&i.velocities.push({position:n[a.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:n[a.isHorizontal()?"currentX":"currentY"],time:x()})),a.updateProgress(i.currentTranslate),a.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&a.emit("touchMoveOpposite",o)}}function B(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,l=t.slidesGrid,o=t.snapGrid;if(t.enabled){var d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,u=x(),c=u-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap click",d),c<300&&u-a.lastClickTime<300&&t.emit("doubleTap doubleClick",d)),a.lastClickTime=x(),E((function(){t.destroyed||(t.allowClick=!0)})),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,!i.cssMode)if(i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(a.velocities.length>1){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(m>150||x()-h.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,y=t.translate+b;r&&(y=-y);var w,T,C=!1,S=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),w=t.maxTranslate(),C=!0,a.allowMomentumBounce=!0):y=t.maxTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),w=t.minTranslate(),C=!0,a.allowMomentumBounce=!0):y=t.minTranslate(),i.loop&&i.centeredSlides&&(T=!0);else if(i.freeModeSticky){for(var M,z=0;z<o.length;z+=1)if(o[z]>-y){M=z;break}y=-(y=Math.abs(o[M]-y)<Math.abs(o[M-1]-y)||"next"===t.swipeDirection?o[M]:o[M-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(g=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),i.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),k=t.slidesSizesGrid[t.activeIndex];g=P<k?i.speed:P<2*k?1.5*i.speed:2.5*i.speed}}else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&C?(t.updateProgress(w),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),setTimeout((function(){t.setTranslate(w),n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(g),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):(t.emit("_freeModeNoMomentumRelease"),t.updateProgress(y)),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(i.freeModeSticky)return void t.slideToClosest();i.freeMode&&t.emit("_freeModeNoMomentumRelease")}(!i.freeModeMomentum||c>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var $=0,L=t.slidesSizesGrid[0],I=0;I<l.length;I+=I<i.slidesPerGroupSkip?1:i.slidesPerGroup){var O=I<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==l[I+O]?p>=l[I]&&p<l[I+O]&&($=I,L=l[I+O]-l[I]):p>=l[I]&&($=I,L=l[l.length-1]-l[l.length-2])}var A=(p-l[$])/L,D=$<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(c>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(A>=i.longSwipesRatio?t.slideTo($+D):t.slideTo($)),"prev"===t.swipeDirection&&(A>1-i.longSwipesRatio?t.slideTo($+D):t.slideTo($))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(d.target===t.navigation.nextEl||d.target===t.navigation.prevEl)?d.target===t.navigation.nextEl?t.slideTo($+D):t.slideTo($):("next"===t.swipeDirection&&t.slideTo($+D),"prev"===t.swipeDirection&&t.slideTo($))}}}}function H(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}function R(e){var t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function X(){var e=this,t=e.wrapperEl,a=e.rtlTranslate;if(e.enabled){e.previousTranslate=e.translate,e.isHorizontal()?e.translate=a?t.scrollWidth-t.offsetWidth-t.scrollLeft:-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();var i=e.maxTranslate()-e.minTranslate();(0===i?0:(e.translate-e.minTranslate())/i)!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}}var Y=!1;function V(){}var W={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!1,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1},F={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a];i.params&&M(e,i.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(a){var i=t.modules[a],s=e[a]||{};i.on&&t.on&&Object.keys(i.on).forEach((function(e){t.on(e,i.on[e])})),i.create&&i.create.bind(t)(s)}))}},eventsEmitter:{on:function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach((function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once:function(e,t,a){var i=this;if("function"!=typeof t)return i;function s(){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy;for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];t.apply(i,r)}return s.__emitterProxy=t,i.on(e,s,a)},onAny:function(e,t){var a=this;if("function"!=typeof e)return a;var i=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[i](e),a},offAny:function(e){var t=this;if(!t.eventsAnyListeners)return t;var a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off:function(e,t){var a=this;return a.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?a.eventsListeners[e]=[]:a.eventsListeners[e]&&a.eventsListeners[e].forEach((function(i,s){(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&a.eventsListeners[e].splice(s,1)}))})),a):a},emit:function(){var e,t,a,i=this;if(!i.eventsListeners)return i;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),a=i):(e=r[0].events,t=r[0].data,a=r[0].context||i),t.unshift(a);var l=Array.isArray(e)?e:e.split(" ");return l.forEach((function(e){i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach((function(i){i.apply(a,[e].concat(t))})),i.eventsListeners&&i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(e){e.apply(a,t)}))})),i}},update:{updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width&&null!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height&&null!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),M(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function a(e,a){return parseFloat(e.getPropertyValue(t(a))||0)}var i=e.params,s=e.$wrapperEl,r=e.size,n=e.rtlTranslate,l=e.wrongRTL,o=e.virtual&&i.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,p=s.children("."+e.params.slideClass),u=o?e.virtual.slides.length:p.length,c=[],h=[],v=[],f=i.slidesOffsetBefore;"function"==typeof f&&(f=i.slidesOffsetBefore.call(e));var m=i.slidesOffsetAfter;"function"==typeof m&&(m=i.slidesOffsetAfter.call(e));var g=e.snapGrid.length,b=e.slidesGrid.length,y=i.spaceBetween,w=-f,E=0,x=0;if(void 0!==r){var T,C;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*r),e.virtualSize=-y,n?p.css({marginLeft:"",marginTop:""}):p.css({marginRight:"",marginBottom:""}),i.slidesPerColumn>1&&(T=Math.floor(u/i.slidesPerColumn)===u/e.params.slidesPerColumn?u:Math.ceil(u/i.slidesPerColumn)*i.slidesPerColumn,"auto"!==i.slidesPerView&&"row"===i.slidesPerColumnFill&&(T=Math.max(T,i.slidesPerView*i.slidesPerColumn)));for(var S,z,P,k=i.slidesPerColumn,$=T/k,L=Math.floor(u/i.slidesPerColumn),I=0;I<u;I+=1){C=0;var O=p.eq(I);if(i.slidesPerColumn>1){var A=void 0,D=void 0,N=void 0;if("row"===i.slidesPerColumnFill&&i.slidesPerGroup>1){var G=Math.floor(I/(i.slidesPerGroup*i.slidesPerColumn)),B=I-i.slidesPerColumn*i.slidesPerGroup*G,H=0===G?i.slidesPerGroup:Math.min(Math.ceil((u-G*k*i.slidesPerGroup)/k),i.slidesPerGroup);A=(D=B-(N=Math.floor(B/H))*H+G*i.slidesPerGroup)+N*T/k,O.css({"-webkit-box-ordinal-group":A,"-moz-box-ordinal-group":A,"-ms-flex-order":A,"-webkit-order":A,order:A})}else"column"===i.slidesPerColumnFill?(N=I-(D=Math.floor(I/k))*k,(D>L||D===L&&N===k-1)&&(N+=1)>=k&&(N=0,D+=1)):D=I-(N=Math.floor(I/$))*$;O.css(t("margin-top"),0!==N?i.spaceBetween&&i.spaceBetween+"px":"")}if("none"!==O.css("display")){if("auto"===i.slidesPerView){var R=getComputedStyle(O[0]),X=O[0].style.transform,Y=O[0].style.webkitTransform;if(X&&(O[0].style.transform="none"),Y&&(O[0].style.webkitTransform="none"),i.roundLengths)C=e.isHorizontal()?O.outerWidth(!0):O.outerHeight(!0);else{var V=a(R,"width"),W=a(R,"padding-left"),F=a(R,"padding-right"),_=a(R,"margin-left"),q=a(R,"margin-right"),j=R.getPropertyValue("box-sizing");if(j&&"border-box"===j)C=V+_+q;else{var U=O[0],K=U.clientWidth;C=V+W+F+_+q+(U.offsetWidth-K)}}X&&(O[0].style.transform=X),Y&&(O[0].style.webkitTransform=Y),i.roundLengths&&(C=Math.floor(C))}else C=(r-(i.slidesPerView-1)*y)/i.slidesPerView,i.roundLengths&&(C=Math.floor(C)),p[I]&&(p[I].style[t("width")]=C+"px");p[I]&&(p[I].swiperSlideSize=C),v.push(C),i.centeredSlides?(w=w+C/2+E/2+y,0===E&&0!==I&&(w=w-r/2-y),0===I&&(w=w-r/2-y),Math.abs(w)<.001&&(w=0),i.roundLengths&&(w=Math.floor(w)),x%i.slidesPerGroup==0&&c.push(w),h.push(w)):(i.roundLengths&&(w=Math.floor(w)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup==0&&c.push(w),h.push(w),w=w+C+y),e.virtualSize+=C+y,E=C,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+m,n&&l&&("slide"===i.effect||"coverflow"===i.effect)&&s.css({width:e.virtualSize+i.spaceBetween+"px"}),i.setWrapperSize)s.css(((z={})[t("width")]=e.virtualSize+i.spaceBetween+"px",z));if(i.slidesPerColumn>1)if(e.virtualSize=(C+i.spaceBetween)*T,e.virtualSize=Math.ceil(e.virtualSize/i.slidesPerColumn)-i.spaceBetween,s.css(((P={})[t("width")]=e.virtualSize+i.spaceBetween+"px",P)),i.centeredSlides){S=[];for(var Z=0;Z<c.length;Z+=1){var J=c[Z];i.roundLengths&&(J=Math.floor(J)),c[Z]<e.virtualSize+c[0]&&S.push(J)}c=S}if(!i.centeredSlides){S=[];for(var Q=0;Q<c.length;Q+=1){var ee=c[Q];i.roundLengths&&(ee=Math.floor(ee)),c[Q]<=e.virtualSize-r&&S.push(ee)}c=S,Math.floor(e.virtualSize-r)-Math.floor(c[c.length-1])>1&&c.push(e.virtualSize-r)}if(0===c.length&&(c=[0]),0!==i.spaceBetween){var te,ae=e.isHorizontal()&&n?"marginLeft":t("marginRight");p.filter((function(e,t){return!i.cssMode||t!==p.length-1})).css(((te={})[ae]=y+"px",te))}if(i.centeredSlides&&i.centeredSlidesBounds){var ie=0;v.forEach((function(e){ie+=e+(i.spaceBetween?i.spaceBetween:0)}));var se=(ie-=i.spaceBetween)-r;c=c.map((function(e){return e<0?-f:e>se?se+m:e}))}if(i.centerInsufficientSlides){var re=0;if(v.forEach((function(e){re+=e+(i.spaceBetween?i.spaceBetween:0)})),(re-=i.spaceBetween)<r){var ne=(r-re)/2;c.forEach((function(e,t){c[t]=e-ne})),h.forEach((function(e,t){h[t]=e+ne}))}}M(e,{slides:p,snapGrid:c,slidesGrid:h,slidesSizesGrid:v}),u!==d&&e.emit("slidesLengthChange"),c.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),(i.watchSlidesProgress||i.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=a.virtual&&a.params.virtual.enabled,r=0;"number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed);var n=function(e){return s?a.slides.filter((function(t){return parseInt(t.getAttribute("data-swiper-slide-index"),10)===e}))[0]:a.slides.eq(e)[0]};if("auto"!==a.params.slidesPerView&&a.params.slidesPerView>1)if(a.params.centeredSlides)a.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var l=a.activeIndex+t;if(l>a.slides.length&&!s)break;i.push(n(l))}else i.push(n(a.activeIndex));for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var o=i[t].offsetHeight;r=o>r?o:r}r&&a.$wrapperEl.css("height",r+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var l=i[n],o=(r+(a.centeredSlides?t.minTranslate():0)-l.swiperSlideOffset)/(l.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility||a.centeredSlides&&a.autoHeight){var d=-(r-l.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}l.progress=s?-o:o}t.visibleSlides=m(t.visibleSlides)}},updateProgress:function(e){var t=this;if(void 0===e){var a=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*a||0}var i=t.params,s=t.maxTranslate()-t.minTranslate(),r=t.progress,n=t.isBeginning,l=t.isEnd,o=n,d=l;0===s?(r=0,n=!0,l=!0):(n=(r=(e-t.minTranslate())/s)<=0,l=r>=1),M(t,{progress:r,isBeginning:n,isEnd:l}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),n&&!o&&t.emit("reachBeginning toEdge"),l&&!d&&t.emit("reachEnd toEdge"),(o&&!n||d&&!l)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,l=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=l?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),t.emitSlidesClasses()},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,l=a.activeIndex,o=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var u=0;u<s.length;u+=1)void 0!==s[u+1]?i>=s[u]&&i<s[u+1]-(s[u+1]-s[u])/2?p=u:i>=s[u]&&i<s[u+1]&&(p=u+1):i>=s[u]&&(p=u);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if(r.indexOf(i)>=0)t=r.indexOf(i);else{var c=Math.min(n.slidesPerGroupSkip,p);t=c+Math.floor((p-c)/n.slidesPerGroup)}if(t>=r.length&&(t=r.length-1),p!==l){var h=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);M(a,{snapIndex:t,realIndex:h,previousIndex:l,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),o!==h&&a.emit("realIndexChange"),(a.initialized||a.params.runCallbacksOnInit)&&a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t,a=this,i=a.params,s=m(e.target).closest("."+i.slideClass)[0],r=!1;if(s)for(var n=0;n<a.slides.length;n+=1)if(a.slides[n]===s){r=!0,t=n;break}if(!s||!r)return a.clickedSlide=void 0,void(a.clickedIndex=void 0);a.clickedSlide=s,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(m(s).attr("data-swiper-slide-index"),10):a.clickedIndex=t,i.slideToClickedSlide&&void 0!==a.clickedIndex&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}},translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,a=t.params,i=t.rtlTranslate,s=t.translate,r=t.$wrapperEl;if(a.virtualTranslate)return i?-s:s;if(a.cssMode)return s;var n=T(r[0],e);return i&&(n=-n),n||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.wrapperEl,l=a.progress,o=0,d=0;a.isHorizontal()?o=i?-e:e:d=e,s.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.cssMode?n[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-o:-d:s.virtualTranslate||r.transform("translate3d("+o+"px, "+d+"px, 0px)"),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:d;var p=a.maxTranslate()-a.minTranslate();(0===p?0:(e-a.minTranslate())/p)!==l&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,a,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),void 0===i&&(i=!0);var r=this,n=r.params,l=r.wrapperEl;if(r.animating&&n.preventInteractionOnTransition)return!1;var o,d=r.minTranslate(),p=r.maxTranslate();if(o=i&&e>d?d:i&&e<p?p:e,r.updateProgress(o),n.cssMode){var u,c=r.isHorizontal();if(0===t)l[c?"scrollLeft":"scrollTop"]=-o;else if(l.scrollTo)l.scrollTo(((u={})[c?"left":"top"]=-o,u.behavior="smooth",u));else l[c?"scrollLeft":"scrollTop"]=-o;return!0}return 0===t?(r.setTransition(0),r.setTranslate(o),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(o),a&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,a&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){var a=this;a.params.cssMode||a.$wrapperEl.transition(e),a.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;if(!s.cssMode){s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=i>r?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex,r=a.params;if(a.animating=!1,!r.cssMode){a.setTransition(0);var n=t;if(n||(n=i>s?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===n)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===n?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}}},slide:{slideTo:function(e,t,a,i,s){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var r=parseInt(e,10);if(!isFinite(r))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=r}var n=this,l=e;l<0&&(l=0);var o=n.params,d=n.snapGrid,p=n.slidesGrid,u=n.previousIndex,c=n.activeIndex,h=n.rtlTranslate,v=n.wrapperEl,f=n.enabled;if(n.animating&&o.preventInteractionOnTransition||!f&&!i&&!s)return!1;var m=Math.min(n.params.slidesPerGroupSkip,l),g=m+Math.floor((l-m)/n.params.slidesPerGroup);g>=d.length&&(g=d.length-1),(c||o.initialSlide||0)===(u||0)&&a&&n.emit("beforeSlideChangeStart");var b,y=-d[g];if(n.updateProgress(y),o.normalizeSlideIndex)for(var w=0;w<p.length;w+=1){var E=-Math.floor(100*y),x=Math.floor(100*p[w]),T=Math.floor(100*p[w+1]);void 0!==p[w+1]?E>=x&&E<T-(T-x)/2?l=w:E>=x&&E<T&&(l=w+1):E>=x&&(l=w)}if(n.initialized&&l!==c){if(!n.allowSlideNext&&y<n.translate&&y<n.minTranslate())return!1;if(!n.allowSlidePrev&&y>n.translate&&y>n.maxTranslate()&&(c||0)!==l)return!1}if(b=l>c?"next":l<c?"prev":"reset",h&&-y===n.translate||!h&&y===n.translate)return n.updateActiveIndex(l),o.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),"slide"!==o.effect&&n.setTranslate(y),"reset"!==b&&(n.transitionStart(a,b),n.transitionEnd(a,b)),!1;if(o.cssMode){var C,S=n.isHorizontal(),M=-y;if(h&&(M=v.scrollWidth-v.offsetWidth-M),0===t)v[S?"scrollLeft":"scrollTop"]=M;else if(v.scrollTo)v.scrollTo(((C={})[S?"left":"top"]=M,C.behavior="smooth",C));else v[S?"scrollLeft":"scrollTop"]=M;return!0}return 0===t?(n.setTransition(0),n.setTranslate(y),n.updateActiveIndex(l),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,i),n.transitionStart(a,b),n.transitionEnd(a,b)):(n.setTransition(t),n.setTranslate(y),n.updateActiveIndex(l),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,i),n.transitionStart(a,b),n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(a,b))}),n.$wrapperEl[0].addEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;return s.params.loop&&(r+=s.loopedSlides),s.slideTo(r,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;if(!i.enabled)return i;var n=i.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return i.slideTo(i.activeIndex+n,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,l=i.slidesGrid,o=i.rtlTranslate;if(!i.enabled)return i;if(s.loop){if(r&&s.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,u=d(o?i.translate:-i.translate),c=n.map((function(e){return d(e)})),h=n[c.indexOf(u)-1];return void 0===h&&s.cssMode&&n.forEach((function(e){!h&&u>=e&&(h=e)})),void 0!==h&&(p=l.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);var s=this,r=s.activeIndex,n=Math.min(s.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/s.params.slidesPerGroup),o=s.rtlTranslate?s.translate:-s.translate;if(o>=s.snapGrid[l]){var d=s.snapGrid[l];o-d>(s.snapGrid[l+1]-d)*i&&(r+=s.params.slidesPerGroup)}else{var p=s.snapGrid[l-1];o-p<=(s.snapGrid[l]-p)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),E((function(){t.slideTo(r)}))):t.slideTo(r)}else t.slideTo(r)}},loop:{loopCreate:function(){var e=this,t=r(),a=e.params,i=e.$wrapperEl;i.children("."+a.slideClass+"."+a.slideDuplicateClass).remove();var s=i.children("."+a.slideClass);if(a.loopFillGroupWithBlank){var n=a.slidesPerGroup-s.length%a.slidesPerGroup;if(n!==a.slidesPerGroup){for(var l=0;l<n;l+=1){var o=m(t.createElement("div")).addClass(a.slideClass+" "+a.slideBlankClass);i.append(o)}s=i.children("."+a.slideClass)}}"auto"!==a.slidesPerView||a.loopedSlides||(a.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(a.loopedSlides||a.slidesPerView,10)),e.loopedSlides+=a.loopAdditionalSlides,e.loopedSlides>s.length&&(e.loopedSlides=s.length);var d=[],p=[];s.each((function(t,a){var i=m(t);a<e.loopedSlides&&p.push(t),a<s.length&&a>=s.length-e.loopedSlides&&d.push(t),i.attr("data-swiper-slide-index",a)}));for(var u=0;u<p.length;u+=1)i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass))},loopFix:function(){var e=this;e.emit("beforeLoopFix");var t,a=e.activeIndex,i=e.slides,s=e.loopedSlides,r=e.allowSlidePrev,n=e.allowSlideNext,l=e.snapGrid,o=e.rtlTranslate;e.allowSlidePrev=!0,e.allowSlideNext=!0;var d=-l[a]-e.getTranslate();if(a<s)t=i.length-3*s+a,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((o?-e.translate:e.translate)-d);else if(a>=i.length-s){t=-i.length+a+s,t+=s,e.slideTo(t,0,!1,!0)&&0!==d&&e.setTranslate((o?-e.translate:e.translate)-d)}e.allowSlidePrev=r,e.allowSlideNext=n,e.emit("loopFix")},loopDestroy:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides;t.children("."+a.slideClass+"."+a.slideDuplicateClass+",."+a.slideClass+"."+a.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){var t=this;if(!(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)){var a=t.el;a.style.cursor="move",a.style.cursor=e?"-webkit-grabbing":"-webkit-grab",a.style.cursor=e?"-moz-grabbin":"-moz-grab",a.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor="")}},manipulation:{appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&t.support.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(e>=n)a.appendSlide(t);else{for(var l=r>e?r+1:r,o=[],d=n-1;d>=e;d-=1){var p=a.slides.eq(d);p.remove(),o.unshift(p)}if("object"==typeof t&&"length"in t){for(var u=0;u<t.length;u+=1)t[u]&&i.append(t[u]);l=r>e?r+t.length:r}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&a.loopCreate(),s.observer&&a.support.observer||a.update(),s.loop?a.slideTo(l+a.loopedSlides,0,!1):a.slideTo(l,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var l=0;l<e.length;l+=1)r=e[l],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&t.support.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},events:{attachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,l=e.device,o=e.support;e.onTouchStart=N.bind(e),e.onTouchMove=G.bind(e),e.onTouchEnd=B.bind(e),a.cssMode&&(e.onScroll=X.bind(e)),e.onClick=R.bind(e);var d=!!a.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,e.onTouchStart,!1),t.addEventListener(i.move,e.onTouchMove,d),t.addEventListener(i.end,e.onTouchEnd,!1);else{if(o.touch){var p=!("touchstart"!==i.start||!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,e.onTouchStart,p),s.addEventListener(i.move,e.onTouchMove,o.passiveListener?{passive:!1,capture:d}:d),s.addEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.addEventListener(i.cancel,e.onTouchEnd,p),Y||(t.addEventListener("touchstart",V),Y=!0)}(a.simulateTouch&&!l.ios&&!l.android||a.simulateTouch&&!o.touch&&l.ios)&&(s.addEventListener("mousedown",e.onTouchStart,!1),t.addEventListener("mousemove",e.onTouchMove,d),t.addEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.addEventListener("click",e.onClick,!0),a.cssMode&&n.addEventListener("scroll",e.onScroll),a.updateOnWindowResize?e.on(l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",H,!0):e.on("observerUpdate",H,!0)},detachEvents:function(){var e=this,t=r(),a=e.params,i=e.touchEvents,s=e.el,n=e.wrapperEl,l=e.device,o=e.support,d=!!a.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,e.onTouchStart,!1),t.removeEventListener(i.move,e.onTouchMove,d),t.removeEventListener(i.end,e.onTouchEnd,!1);else{if(o.touch){var p=!("onTouchStart"!==i.start||!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,e.onTouchStart,p),s.removeEventListener(i.move,e.onTouchMove,d),s.removeEventListener(i.end,e.onTouchEnd,p),i.cancel&&s.removeEventListener(i.cancel,e.onTouchEnd,p)}(a.simulateTouch&&!l.ios&&!l.android||a.simulateTouch&&!o.touch&&l.ios)&&(s.removeEventListener("mousedown",e.onTouchStart,!1),t.removeEventListener("mousemove",e.onTouchMove,d),t.removeEventListener("mouseup",e.onTouchEnd,!1))}(a.preventClicks||a.preventClicksPropagation)&&s.removeEventListener("click",e.onClick,!0),a.cssMode&&n.removeEventListener("scroll",e.onScroll),e.off(l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",H)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides,s=void 0===i?0:i,r=e.params,n=e.$el,l=r.breakpoints;if(l&&(!l||0!==Object.keys(l).length)){var o=e.getBreakpoint(l,e.params.breakpointsBase,e.el);if(o&&e.currentBreakpoint!==o){var d=o in l?l[o]:void 0;d&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=d[e];void 0!==t&&(d[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var p=d||e.originalParams,u=r.slidesPerColumn>1,c=p.slidesPerColumn>1,h=r.enabled;u&&!c?(n.removeClass(r.containerModifierClass+"multirow "+r.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!u&&c&&(n.addClass(r.containerModifierClass+"multirow"),"column"===p.slidesPerColumnFill&&n.addClass(r.containerModifierClass+"multirow-column"),e.emitContainerClasses());var v=p.direction&&p.direction!==r.direction,f=r.loop&&(p.slidesPerView!==r.slidesPerView||v);v&&a&&e.changeDirection(),M(e.params,p);var m=e.params.enabled;M(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!m?e.disable():!h&&m&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",p),f&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-s+e.loopedSlides,0,!1)),e.emit("breakpoint",p)}}},getBreakpoint:function(e,t,a){if(void 0===t&&(t="window"),e&&("container"!==t||a)){var i=!1,s=l(),r="window"===t?s.innerHeight:a.clientHeight,n=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));n.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var o=0;o<n.length;o+=1){var d=n[o],p=d.point,u=d.value;"window"===t?s.matchMedia("(min-width: "+u+"px)").matches&&(i=p):u<=a.clientWidth&&(i=p)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.params,a=e.isLocked,i=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&i?e.isLocked=i<=e.size:e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,a!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),a&&a!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}},classes:{addClasses:function(){var e,t,a,i=this,s=i.classNames,r=i.params,n=i.rtl,l=i.$el,o=i.device,d=i.support,p=(e=["initialized",r.direction,{"pointer-events":d.pointerEvents&&!d.touch},{"free-mode":r.freeMode},{autoheight:r.autoHeight},{rtl:n},{multirow:r.slidesPerColumn>1},{"multirow-column":r.slidesPerColumn>1&&"column"===r.slidesPerColumnFill},{android:o.android},{ios:o.ios},{"css-mode":r.cssMode}],t=r.containerModifierClass,a=[],e.forEach((function(e){"object"==typeof e?Object.keys(e).forEach((function(i){e[i]&&a.push(t+i)})):"string"==typeof e&&a.push(t+e)})),a);s.push.apply(s,p),l.addClass([].concat(s).join(" ")),i.emitContainerClasses()},removeClasses:function(){var e=this,t=e.$el,a=e.classNames;t.removeClass(a.join(" ")),e.emitContainerClasses()}},images:{loadImage:function(e,t,a,i,s,r){var n,o=l();function d(){r&&r()}m(e).parent("picture")[0]||e.complete&&s?d():t?((n=new o.Image).onload=d,n.onerror=d,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):d()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},_={},q=function(){function t(){for(var e,a,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];if(1===s.length&&s[0].constructor&&"Object"===Object.prototype.toString.call(s[0]).slice(8,-1)?a=s[0]:(e=s[0],a=s[1]),a||(a={}),a=M({},a),e&&!a.el&&(a.el=e),a.el&&m(a.el).length>1){var n=[];return m(a.el).each((function(e){var i=M({},a,{el:e});n.push(new t(i))})),n}var l=this;l.__swiper__=!0,l.support=$(),l.device=L({userAgent:a.userAgent}),l.browser=I(),l.eventsListeners={},l.eventsAnyListeners=[],void 0===l.modules&&(l.modules={}),Object.keys(l.modules).forEach((function(e){var t=l.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===a[i]&&(a[i]={auto:!0}),!(i in a)||!("enabled"in s))return;!0===a[i]&&(a[i]={enabled:!0}),"object"!=typeof a[i]||"enabled"in a[i]||(a[i].enabled=!0),a[i]||(a[i]={enabled:!1})}}));var o,d,p=M({},W);return l.useParams(p),l.params=M({},p,_,a),l.originalParams=M({},l.params),l.passedParams=M({},a),l.params&&l.params.on&&Object.keys(l.params.on).forEach((function(e){l.on(e,l.params.on[e])})),l.params&&l.params.onAny&&l.onAny(l.params.onAny),l.$=m,M(l,{enabled:l.params.enabled,el:e,classNames:[],slides:m(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===l.params.direction},isVertical:function(){return"vertical"===l.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:(o=["touchstart","touchmove","touchend","touchcancel"],d=["mousedown","mousemove","mouseup"],l.support.pointerEvents&&(d=["pointerdown","pointermove","pointerup"]),l.touchEventsTouch={start:o[0],move:o[1],end:o[2],cancel:o[3]},l.touchEventsDesktop={start:d[0],move:d[1],end:d[2]},l.support.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:x(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.useModules(),l.emit("_swiper"),l.params.init&&l.init(),l}var a,i,s,n=t.prototype;return n.enable=function(){var e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))},n.disable=function(){var e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))},n.setProgress=function(e,t){var a=this;e=Math.min(Math.max(e,0),1);var i=a.minTranslate(),s=(a.maxTranslate()-i)*e+i;a.translateTo(s,void 0===t?0:t),a.updateActiveIndex(),a.updateSlidesClasses()},n.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},n.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},n.emitSlidesClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=[];e.slides.each((function(a){var i=e.getSlideClasses(a);t.push({slideEl:a,classNames:i}),e.emit("_slideClass",a,i)})),e.emit("_slideClasses",t)}},n.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var l,o=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!l&&(n+=1,(o+=a[d].swiperSlideSize)>s&&(l=!0));for(var p=r-1;p>=0;p-=1)a[p]&&!l&&(n+=1,(o+=a[p].swiperSlideSize)>s&&(l=!0))}else for(var u=r+1;u<a.length;u+=1)i[u]-i[r]<s&&(n+=1);return n},n.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,a=e.params;a.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(i(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||i(),a.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function i(){var t=e.rtlTranslate?-1*e.translate:e.translate,a=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}},n.changeDirection=function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(a.$el.removeClass(""+a.params.containerModifierClass+i).addClass(""+a.params.containerModifierClass+e),a.emitContainerClasses(),a.params.direction=e,a.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),a.emit("changeDirection"),t&&a.update()),a},n.mount=function(e){var t=this;if(t.mounted)return!0;var a=m(e||t.params.el);if(!(e=a[0]))return!1;e.swiper=t;var i=function(){return"."+(t.params.wrapperClass||"").trim().split(" ").join(".")},s=function(){if(e&&e.shadowRoot&&e.shadowRoot.querySelector){var t=m(e.shadowRoot.querySelector(i()));return t.children=function(e){return a.children(e)},t}return a.children(i())}();if(0===s.length&&t.params.createElements){var n=r().createElement("div");s=m(n),n.className=t.params.wrapperClass,a.append(n),a.children("."+t.params.slideClass).each((function(e){s.append(e)}))}return M(t,{$el:a,el:e,$wrapperEl:s,wrapperEl:s[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===a.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===a.css("direction")),wrongRTL:"-webkit-box"===s.css("display")}),!0},n.init=function(e){var t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t},n.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a,i=this,s=i.params,r=i.$el,n=i.$wrapperEl,l=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),r.removeAttr("style"),n.removeAttr("style"),l&&l.length&&l.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,a=i,Object.keys(a).forEach((function(e){try{a[e]=null}catch(e){}try{delete a[e]}catch(e){}}))),i.destroyed=!0),null},t.extendDefaults=function(e){M(_,e)},t.installModule=function(e){t.prototype.modules||(t.prototype.modules={});var a=e.name||Object.keys(t.prototype.modules).length+"_"+x();t.prototype.modules[a]=e},t.use=function(e){return Array.isArray(e)?(e.forEach((function(e){return t.installModule(e)})),t):(t.installModule(e),t)},a=t,s=[{key:"extendedDefaults",get:function(){return _}},{key:"defaults",get:function(){return W}}],(i=null)&&e(a.prototype,i),s&&e(a,s),t}();Object.keys(F).forEach((function(e){Object.keys(F[e]).forEach((function(t){q.prototype[t]=F[e][t]}))})),q.use([O,D]);var j={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,l=n.addSlidesBefore,o=n.addSlidesAfter,d=t.virtual,p=d.from,u=d.to,c=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,y=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var w=Math.max((y||0)-b,0),E=Math.min((y||0)+g,c.length-1),x=(t.slidesGrid[w]||0)-(t.slidesGrid[0]||0);function T(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(M(t.virtual,{from:w,to:E,offset:x,slidesGrid:t.slidesGrid}),p===w&&u===E&&!e)return t.slidesGrid!==h&&x!==f&&t.slides.css(m,x+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:x,from:w,to:E,slides:function(){for(var e=[],t=w;t<=E;t+=1)e.push(c[t]);return e}()}),void(t.params.virtual.renderExternalUpdate&&T());var C=[],S=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var z=p;z<=u;z+=1)(z<w||z>E)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+z+'"]').remove();for(var P=0;P<c.length;P+=1)P>=w&&P<=E&&(void 0===u||e?S.push(P):(P>u&&S.push(P),P<p&&C.push(P)));S.forEach((function(e){t.$wrapperEl.append(v(c[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(v(c[e],e))})),t.$wrapperEl.children(".swiper-slide").css(m,x+"px"),T()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?m(i.renderSlide.call(a,e,t)):m('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){var t=this;if("object"==typeof e&&"length"in e)for(var a=0;a<e.length;a+=1)e[a]&&t.virtual.slides.push(e[a]);else t.virtual.slides.push(e);t.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,l={};Object.keys(n).forEach((function(e){var t=n[e],a=t.attr("data-swiper-slide-index");a&&t.attr("data-swiper-slide-index",parseInt(a,10)+1),l[parseInt(e,10)+s]=t})),t.virtual.cache=l}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},U={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}},create:function(){z(this,{virtual:t({},j,{slides:this.params.virtual.slides,cache:{}})})},on:{beforeInit:function(e){if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};M(e.params,t),M(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(e){e.params.virtual.enabled&&e.virtual.update()}}},K={handle:function(e){var t=this;if(t.enabled){var a=l(),i=r(),s=t.rtlTranslate,n=e;n.originalEvent&&(n=n.originalEvent);var o=n.keyCode||n.charCode,d=t.params.keyboard.pageUpDown,p=d&&33===o,u=d&&34===o,c=37===o,h=39===o,v=38===o,f=40===o;if(!t.allowSlideNext&&(t.isHorizontal()&&h||t.isVertical()&&f||u))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&c||t.isVertical()&&v||p))return!1;if(!(n.shiftKey||n.altKey||n.ctrlKey||n.metaKey||i.activeElement&&i.activeElement.nodeName&&("input"===i.activeElement.nodeName.toLowerCase()||"textarea"===i.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(p||u||c||h||v||f)){var m=!1;if(t.$el.parents("."+t.params.slideClass).length>0&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var g=t.$el,b=g[0].clientWidth,y=g[0].clientHeight,w=a.innerWidth,E=a.innerHeight,x=t.$el.offset();s&&(x.left-=t.$el[0].scrollLeft);for(var T=[[x.left,x.top],[x.left+b,x.top],[x.left,x.top+y],[x.left+b,x.top+y]],C=0;C<T.length;C+=1){var S=T[C];if(S[0]>=0&&S[0]<=w&&S[1]>=0&&S[1]<=E){if(0===S[0]&&0===S[1])continue;m=!0}}if(!m)return}t.isHorizontal()?((p||u||c||h)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),((u||h)&&!s||(p||c)&&s)&&t.slideNext(),((p||c)&&!s||(u||h)&&s)&&t.slidePrev()):((p||u||v||f)&&(n.preventDefault?n.preventDefault():n.returnValue=!1),(u||f)&&t.slideNext(),(p||v)&&t.slidePrev()),t.emit("keyPress",o)}}},enable:function(){var e=this,t=r();e.keyboard.enabled||(m(t).on("keydown",e.keyboard.handle),e.keyboard.enabled=!0)},disable:function(){var e=this,t=r();e.keyboard.enabled&&(m(t).off("keydown",e.keyboard.handle),e.keyboard.enabled=!1)}},Z={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}},create:function(){z(this,{keyboard:t({enabled:!1},K)})},on:{init:function(e){e.params.keyboard.enabled&&e.keyboard.enable()},destroy:function(e){e.keyboard.enabled&&e.keyboard.disable()}}};var J={lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return l().navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e=r(),t="onwheel",a=t in e;if(!a){var i=e.createElement("div");i.setAttribute(t,"return;"),a="function"==typeof i.onwheel}return!a&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(a=e.implementation.hasFeature("Events.wheel","3.0")),a}()?"wheel":"mousewheel"},normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),e.shiftKey&&!i&&(i=s,s=0),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.enabled&&(this.mouseEntered=!0)},handleMouseLeave:function(){this.enabled&&(this.mouseEntered=!1)},handle:function(e){var t=e,a=this;if(a.enabled){var i=a.params.mousewheel;a.params.cssMode&&t.preventDefault();var s=a.$el;if("container"!==a.params.mousewheel.eventsTarget&&(s=m(a.params.mousewheel.eventsTarget)),!a.mouseEntered&&!s[0].contains(t.target)&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var r=0,n=a.rtlTranslate?-1:1,l=J.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(l.pixelX)>Math.abs(l.pixelY)))return!0;r=-l.pixelX*n}else{if(!(Math.abs(l.pixelY)>Math.abs(l.pixelX)))return!0;r=-l.pixelY}else r=Math.abs(l.pixelX)>Math.abs(l.pixelY)?-l.pixelX*n:-l.pixelY;if(0===r)return!0;i.invert&&(r=-r);var o=a.getTranslate()+r*i.sensitivity;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),(!!a.params.loop||!(o===a.minTranslate()||o===a.maxTranslate()))&&a.params.nested&&t.stopPropagation(),a.params.freeMode){var d={time:x(),delta:Math.abs(r),direction:Math.sign(r)},p=a.mousewheel.lastEventBeforeSnap,u=p&&d.time<p.time+500&&d.delta<=p.delta&&d.direction===p.direction;if(!u){a.mousewheel.lastEventBeforeSnap=void 0,a.params.loop&&a.loopFix();var c=a.getTranslate()+r*i.sensitivity,h=a.isBeginning,v=a.isEnd;if(c>=a.minTranslate()&&(c=a.minTranslate()),c<=a.maxTranslate()&&(c=a.maxTranslate()),a.setTransition(0),a.setTranslate(c),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!h&&a.isBeginning||!v&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky){clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=void 0;var f=a.mousewheel.recentWheelEvents;f.length>=15&&f.shift();var g=f.length?f[f.length-1]:void 0,b=f[0];if(f.push(d),g&&(d.delta>g.delta||d.direction!==g.direction))f.splice(0);else if(f.length>=15&&d.time-b.time<500&&b.delta-d.delta>=1&&d.delta<=6){var y=r>0?.8:.2;a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.mousewheel.timeout=E((function(){a.slideToClosest(a.params.speed,!0,void 0,y)}),0)}a.mousewheel.timeout||(a.mousewheel.timeout=E((function(){a.mousewheel.lastEventBeforeSnap=d,f.splice(0),a.slideToClosest(a.params.speed,!0,void 0,.5)}),500))}if(u||a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),c===a.minTranslate()||c===a.maxTranslate())return!0}}else{var w={time:x(),delta:Math.abs(r),direction:Math.sign(r),raw:e},T=a.mousewheel.recentWheelEvents;T.length>=2&&T.shift();var C=T.length?T[T.length-1]:void 0;if(T.push(w),C?(w.direction!==C.direction||w.delta>C.delta||w.time>C.time+150)&&a.mousewheel.animateSlider(w):a.mousewheel.animateSlider(w),a.mousewheel.releaseScroll(w))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1}},animateSlider:function(e){var t=this,a=l();return!(this.params.mousewheel.thresholdDelta&&e.delta<this.params.mousewheel.thresholdDelta)&&(!(this.params.mousewheel.thresholdTime&&x()-t.mousewheel.lastScrollTime<this.params.mousewheel.thresholdTime)&&(e.delta>=6&&x()-t.mousewheel.lastScrollTime<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),t.emit("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),t.emit("scroll",e.raw)),t.mousewheel.lastScrollTime=(new a.Date).getTime(),!1)))},releaseScroll:function(e){var t=this,a=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&a.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&a.releaseOnEdges)return!0;return!1},enable:function(){var e=this,t=J.event();if(e.params.cssMode)return e.wrapperEl.removeEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.on("mouseenter",e.mousewheel.handleMouseEnter),a.on("mouseleave",e.mousewheel.handleMouseLeave),a.on(t,e.mousewheel.handle),e.mousewheel.enabled=!0,!0},disable:function(){var e=this,t=J.event();if(e.params.cssMode)return e.wrapperEl.addEventListener(t,e.mousewheel.handle),!0;if(!t)return!1;if(!e.mousewheel.enabled)return!1;var a=e.$el;return"container"!==e.params.mousewheel.eventsTarget&&(a=m(e.params.mousewheel.eventsTarget)),a.off(t,e.mousewheel.handle),e.mousewheel.enabled=!1,!0}},Q={toggleEl:function(e,t){e[t?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t)},update:function(){var e=this,t=e.params.navigation,a=e.navigation.toggleEl;if(!e.params.loop){var i=e.navigation,s=i.$nextEl,r=i.$prevEl;r&&r.length>0&&(e.isBeginning?a(r,!0):a(r,!1),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](t.lockClass)),s&&s.length>0&&(e.isEnd?a(s,!0):a(s,!1),e.params.watchOverflow&&e.enabled&&s[e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(a.params.navigation=k(a.$el,a.params.navigation,a.params.createElements,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),i.nextEl||i.prevEl)&&(i.nextEl&&(e=m(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=m(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",a.navigation.onNextClick),t&&t.length>0&&t.on("click",a.navigation.onPrevClick),M(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}),a.enabled||(e&&e.addClass(i.lockClass),t&&t.addClass(i.lockClass)))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},ee={update:function(){var e=this,t=e.rtl,a=e.params.pagination;if(a.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var i,s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,n=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((i=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>s-1-2*e.loopedSlides&&(i-=s-2*e.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==e.params.paginationType&&(i=n+i)):i=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===a.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var l,o,d,p=e.pagination.bullets;if(a.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(a.dynamicMainBullets+4)+"px"),a.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=i-e.previousIndex,e.pagination.dynamicBulletIndex>a.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=a.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),l=i-e.pagination.dynamicBulletIndex,d=((o=l+(Math.min(p.length,a.dynamicMainBullets)-1))+l)/2),p.removeClass(a.bulletActiveClass+" "+a.bulletActiveClass+"-next "+a.bulletActiveClass+"-next-next "+a.bulletActiveClass+"-prev "+a.bulletActiveClass+"-prev-prev "+a.bulletActiveClass+"-main"),r.length>1)p.each((function(e){var t=m(e),s=t.index();s===i&&t.addClass(a.bulletActiveClass),a.dynamicBullets&&(s>=l&&s<=o&&t.addClass(a.bulletActiveClass+"-main"),s===l&&t.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),s===o&&t.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next"))}));else{var u=p.eq(i),c=u.index();if(u.addClass(a.bulletActiveClass),a.dynamicBullets){for(var h=p.eq(l),v=p.eq(o),f=l;f<=o;f+=1)p.eq(f).addClass(a.bulletActiveClass+"-main");if(e.params.loop)if(c>=p.length-a.dynamicMainBullets){for(var g=a.dynamicMainBullets;g>=0;g-=1)p.eq(p.length-g).addClass(a.bulletActiveClass+"-main");p.eq(p.length-a.dynamicMainBullets-1).addClass(a.bulletActiveClass+"-prev")}else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next");else h.prev().addClass(a.bulletActiveClass+"-prev").prev().addClass(a.bulletActiveClass+"-prev-prev"),v.next().addClass(a.bulletActiveClass+"-next").next().addClass(a.bulletActiveClass+"-next-next")}}if(a.dynamicBullets){var b=Math.min(p.length,a.dynamicMainBullets+4),y=(e.pagination.bulletSize*b-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,w=t?"right":"left";p.css(e.isHorizontal()?w:"top",y+"px")}}if("fraction"===a.type&&(r.find(P(a.currentClass)).text(a.formatFractionCurrent(i+1)),r.find(P(a.totalClass)).text(a.formatFractionTotal(n))),"progressbar"===a.type){var E;E=a.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,C=1;"horizontal"===E?T=x:C=x,r.find(P(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+C+")").transition(e.params.speed)}"custom"===a.type&&a.renderCustom?(r.html(a.renderCustom(e,i+1,n)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](a.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&r>a&&(r=a);for(var n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find(P(t.bulletClass))}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=k(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var t=e.params.pagination;if(t.el){var a=m(t.el);0!==a.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&a.length>1&&(a=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&a.addClass(t.clickableClass),a.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(a.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&a.addClass(t.progressbarOppositeClass),t.clickable&&a.on("click",P(t.bulletClass),(function(t){t.preventDefault();var a=m(this).index()*e.params.slidesPerGroup;e.params.loop&&(a+=e.loopedSlides),e.slideTo(a)})),M(e.pagination,{$el:a,el:a[0]}),e.enabled||a.addClass(t.lockClass))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click",P(t.bulletClass))}}},te={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,l=t.$el,o=e.params.scrollbar,d=s,p=(r-s)*i;a?(p=-p)>0?(d=s-p,p=0):-p+s>r&&(d=r+p):p<0?(d=s+p,p=0):p+s>r&&(d=r-p),e.isHorizontal()?(n.transform("translate3d("+p+"px, 0, 0)"),n[0].style.width=d+"px"):(n.transform("translate3d(0px, "+p+"px, 0)"),n[0].style.height=d+"px"),o.hide&&(clearTimeout(e.scrollbar.timeout),l[0].style.opacity=1,e.scrollbar.timeout=setTimeout((function(){l[0].style.opacity=0,l.transition(400)}),1e3))}},setTransition:function(e){var t=this;t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,l=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=n>=1?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),M(t,{trackSize:r,divider:n,moveDivider:l,dragSize:s}),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,l=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-r.offset()[a.isHorizontal()?"left":"top"]-(null!==o?o:n/2))/(l-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var d=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(d),a.setTranslate(d),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,t.scrollbar.dragStartPos=e.target===n[0]||e.target===n?i.getPointerPosition(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this,a=t.scrollbar,i=t.$wrapperEl,s=a.$el,r=a.$dragEl;t.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),i.transition(0),s.transition(0),r.transition(0),t.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),s.transition("")),a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=E((function(){r.css("opacity",0),r.transition(400)}),1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,l=e.support,o=a.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};o&&(l.touch?(o.addEventListener(i.start,e.scrollbar.onDragStart,d),o.addEventListener(i.move,e.scrollbar.onDragMove,d),o.addEventListener(i.end,e.scrollbar.onDragEnd,p)):(o.addEventListener(s.start,e.scrollbar.onDragStart,d),t.addEventListener(s.move,e.scrollbar.onDragMove,d),t.addEventListener(s.end,e.scrollbar.onDragEnd,p)))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=r(),a=e.scrollbar,i=e.touchEventsTouch,s=e.touchEventsDesktop,n=e.params,l=e.support,o=a.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};o&&(l.touch?(o.removeEventListener(i.start,e.scrollbar.onDragStart,d),o.removeEventListener(i.move,e.scrollbar.onDragMove,d),o.removeEventListener(i.end,e.scrollbar.onDragEnd,p)):(o.removeEventListener(s.start,e.scrollbar.onDragStart,d),t.removeEventListener(s.move,e.scrollbar.onDragMove,d),t.removeEventListener(s.end,e.scrollbar.onDragEnd,p)))}},init:function(){var e=this,t=e.scrollbar,a=e.$el;e.params.scrollbar=k(a,e.params.scrollbar,e.params.createElements,{el:"swiper-scrollbar"});var i=e.params.scrollbar;if(i.el){var s=m(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&s.length>1&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=m('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),M(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable(),s&&s[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}},destroy:function(){this.scrollbar.disableDraggable()}},ae={setTransform:function(e,t){var a=this.rtl,i=m(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),l=i.attr("data-swiper-parallax-y"),o=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||l?(n=n||"0",l=l||"0"):this.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*t*s+"%":n*t*s+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==o)i.transform("translate3d("+n+", "+l+", 0px)");else{var u=o-(o-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+l+", 0px) scale("+u+")")}},setTranslate:function(){var e=this,t=e.$el,a=e.slides,i=e.progress,s=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,i)})),a.each((function(t,a){var r=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(r+=Math.ceil(a/2)-i*(s.length-1)),r=Math.min(Math.max(r,-1),1),m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){e.parallax.setTransform(t,r)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t){var a=m(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),a.transition(i)}))}},ie={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(s.fakeGestureTouched=!1,s.fakeGestureMoved=!1,!a.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;s.fakeGestureTouched=!0,r.scaleStart=ie.getDistanceBetweenTouches(e)}r.$slideEl&&r.$slideEl.length||(r.$slideEl=m(e.target).closest("."+t.params.slideClass),0===r.$slideEl.length&&(r.$slideEl=t.slides.eq(t.activeIndex)),r.$imageEl=r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),r.$imageWrapEl=r.$imageEl.parent("."+i.containerClass),r.maxRatio=r.$imageWrapEl.attr("data-swiper-zoom")||i.maxRatio,0!==r.$imageWrapEl.length)?(r.$imageEl&&r.$imageEl.transition(0),t.zoom.isScaling=!0):r.$imageEl=void 0},onGestureChange:function(e){var t=this,a=t.support,i=t.params.zoom,s=t.zoom,r=s.gesture;if(!a.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;s.fakeGestureMoved=!0,r.scaleMove=ie.getDistanceBetweenTouches(e)}r.$imageEl&&0!==r.$imageEl.length?(a.gestures?s.scale=e.scale*s.currentScale:s.scale=r.scaleMove/r.scaleStart*s.currentScale,s.scale>r.maxRatio&&(s.scale=r.maxRatio-1+Math.pow(s.scale-r.maxRatio+1,.5)),s.scale<i.minRatio&&(s.scale=i.minRatio+1-Math.pow(i.minRatio-s.scale+1,.5)),r.$imageEl.transform("translate3d(0,0,0) scale("+s.scale+")")):"gesturechange"===e.type&&s.onGestureStart(e)},onGestureEnd:function(e){var t=this,a=t.device,i=t.support,s=t.params.zoom,r=t.zoom,n=r.gesture;if(!i.gestures){if(!r.fakeGestureTouched||!r.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!a.android)return;r.fakeGestureTouched=!1,r.fakeGestureMoved=!1}n.$imageEl&&0!==n.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,n.maxRatio),s.minRatio),n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale("+r.scale+")"),r.currentScale=r.scale,r.isScaling=!1,1===r.scale&&(n.$slideEl=void 0))},onTouchStart:function(e){var t=this.device,a=this.zoom,i=a.gesture,s=a.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(t.android&&e.cancelable&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=T(i.$imageWrapEl[0],"x")||0,s.startY=T(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0));var n=s.width*a.scale,l=s.height*a.scale;if(!(n<i.slideWidth&&l<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-l/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,l=a.currentX+n,o=i.y*r,d=a.currentY+o;0!==i.x&&(s=Math.abs((l-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=l,a.currentY=d;var u=a.width*e.scale,c=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-u/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-c/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this,t=e.zoom,a=t.gesture;a.$slideEl&&e.previousIndex!==e.activeIndex&&(a.$imageEl&&a.$imageEl.transform("translate3d(0,0,0) scale(1)"),a.$imageWrapEl&&a.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,t.currentScale=1,a.$slideEl=void 0,a.$imageEl=void 0,a.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,d,p,u,c,h,v,f,g,b,y=this,w=l(),E=y.zoom,x=y.params.zoom,T=E.gesture,C=E.image;(T.$slideEl||(e&&e.target&&(T.$slideEl=m(e.target).closest("."+y.params.slideClass)),T.$slideEl||(y.params.virtual&&y.params.virtual.enabled&&y.virtual?T.$slideEl=y.$wrapperEl.children("."+y.params.slideActiveClass):T.$slideEl=y.slides.eq(y.activeIndex)),T.$imageEl=T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),T.$imageWrapEl=T.$imageEl.parent("."+x.containerClass)),T.$imageEl&&0!==T.$imageEl.length&&T.$imageWrapEl&&0!==T.$imageWrapEl.length)&&(T.$slideEl.addClass(""+x.zoomedSlideClass),void 0===C.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=C.touchesStart.x,a=C.touchesStart.y),E.scale=T.$imageWrapEl.attr("data-swiper-zoom")||x.maxRatio,E.currentScale=T.$imageWrapEl.attr("data-swiper-zoom")||x.maxRatio,e?(g=T.$slideEl[0].offsetWidth,b=T.$slideEl[0].offsetHeight,i=T.$slideEl.offset().left+w.scrollX+g/2-t,s=T.$slideEl.offset().top+w.scrollY+b/2-a,o=T.$imageEl[0].offsetWidth,d=T.$imageEl[0].offsetHeight,p=o*E.scale,u=d*E.scale,v=-(c=Math.min(g/2-p/2,0)),f=-(h=Math.min(b/2-u/2,0)),(r=i*E.scale)<c&&(r=c),r>v&&(r=v),(n=s*E.scale)<h&&(n=h),n>f&&(n=f)):(r=0,n=0),T.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),T.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+E.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?i.$slideEl=e.$wrapperEl.children("."+e.params.slideActiveClass):i.$slideEl=e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&i.$imageWrapEl&&0!==i.$imageWrapEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},toggleGestures:function(e){var t=this,a=t.zoom,i=a.slideSelector,s=a.passiveListener;t.$wrapperEl[e]("gesturestart",i,a.onGestureStart,s),t.$wrapperEl[e]("gesturechange",i,a.onGestureChange,s),t.$wrapperEl[e]("gestureend",i,a.onGestureEnd,s)},enableGestures:function(){this.zoom.gesturesEnabled||(this.zoom.gesturesEnabled=!0,this.zoom.toggleGestures("on"))},disableGestures:function(){this.zoom.gesturesEnabled&&(this.zoom.gesturesEnabled=!1,this.zoom.toggleGestures("off"))},enable:function(){var e=this,t=e.support,a=e.zoom;if(!a.enabled){a.enabled=!0;var i=!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!t.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;e.zoom.passiveListener=i,e.zoom.slideSelector=r,t.gestures?(e.$wrapperEl.on(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.on(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,a.onGestureStart,i),e.$wrapperEl.on(e.touchEvents.move,r,a.onGestureChange,s),e.$wrapperEl.on(e.touchEvents.end,r,a.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,a.onGestureEnd,i)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,a.onTouchMove,s)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){var a=e.support;e.zoom.enabled=!1;var i=!("touchstart"!==e.touchEvents.start||!a.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},s=!a.passiveListener||{passive:!1,capture:!0},r="."+e.params.slideClass;a.gestures?(e.$wrapperEl.off(e.touchEvents.start,e.zoom.enableGestures,i),e.$wrapperEl.off(e.touchEvents.end,e.zoom.disableGestures,i)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,t.onGestureStart,i),e.$wrapperEl.off(e.touchEvents.move,r,t.onGestureChange,s),e.$wrapperEl.off(e.touchEvents.end,r,t.onGestureEnd,i),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,t.onGestureEnd,i)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove,s)}}},se={loadInSlide:function(e,t){void 0===t&&(t=!0);var a=this,i=a.params.lazy;if(void 0!==e&&0!==a.slides.length){var s=a.virtual&&a.params.virtual.enabled?a.$wrapperEl.children("."+a.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):a.slides.eq(e),r=s.find("."+i.elementClass+":not(."+i.loadedClass+"):not(."+i.loadingClass+")");!s.hasClass(i.elementClass)||s.hasClass(i.loadedClass)||s.hasClass(i.loadingClass)||r.push(s[0]),0!==r.length&&r.each((function(e){var r=m(e);r.addClass(i.loadingClass);var n=r.attr("data-background"),l=r.attr("data-src"),o=r.attr("data-srcset"),d=r.attr("data-sizes"),p=r.parent("picture");a.loadImage(r[0],l||n,o,d,!1,(function(){if(null!=a&&a&&(!a||a.params)&&!a.destroyed){if(n?(r.css("background-image",'url("'+n+'")'),r.removeAttr("data-background")):(o&&(r.attr("srcset",o),r.removeAttr("data-srcset")),d&&(r.attr("sizes",d),r.removeAttr("data-sizes")),p.length&&p.children("source").each((function(e){var t=m(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),l&&(r.attr("src",l),r.removeAttr("data-src"))),r.addClass(i.loadedClass).removeClass(i.loadingClass),s.find("."+i.preloaderClass).remove(),a.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(a.params.slideDuplicateClass)){var u=a.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+a.params.slideDuplicateClass+")");a.lazy.loadInSlide(u.index(),!1)}else{var c=a.$wrapperEl.children("."+a.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');a.lazy.loadInSlide(c.index(),!1)}}a.emit("lazyImageReady",s[0],r[0]),a.params.autoHeight&&a.updateAutoHeight()}})),a.emit("lazyImageLoad",s[0],r[0])}))}},load:function(){var e=this,t=e.$wrapperEl,a=e.params,i=e.slides,s=e.activeIndex,r=e.virtual&&a.virtual.enabled,n=a.lazy,l=a.slidesPerView;function o(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(i[e])return!0;return!1}function d(e){return r?m(e).attr("data-swiper-slide-index"):m(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each((function(t){var a=r?m(t).attr("data-swiper-slide-index"):m(t).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=s;p<s+l;p+=1)o(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(s);if(n.loadPrevNext)if(l>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){for(var u=n.loadPrevNextAmount,c=l,h=Math.min(s+c+Math.max(u,c),i.length),v=Math.max(s-Math.max(c,u),0),f=s+l;f<h;f+=1)o(f)&&e.lazy.loadInSlide(f);for(var g=v;g<s;g+=1)o(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+a.slideNextClass);b.length>0&&e.lazy.loadInSlide(d(b));var y=t.children("."+a.slidePrevClass);y.length>0&&e.lazy.loadInSlide(d(y))}},checkInViewOnLoad:function(){var e=l(),t=this;if(t&&!t.destroyed){var a=t.params.lazy.scrollingElement?m(t.params.lazy.scrollingElement):m(e),i=a[0]===e,s=i?e.innerWidth:a[0].offsetWidth,r=i?e.innerHeight:a[0].offsetHeight,n=t.$el.offset(),o=!1;t.rtlTranslate&&(n.left-=t.$el[0].scrollLeft);for(var d=[[n.left,n.top],[n.left+t.width,n.top],[n.left,n.top+t.height],[n.left+t.width,n.top+t.height]],p=0;p<d.length;p+=1){var u=d[p];if(u[0]>=0&&u[0]<=s&&u[1]>=0&&u[1]<=r){if(0===u[0]&&0===u[1])continue;o=!0}}var c=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};o?(t.lazy.load(),a.off("scroll",t.lazy.checkInViewOnLoad,c)):t.lazy.scrollHandlerAttached||(t.lazy.scrollHandlerAttached=!0,a.on("scroll",t.lazy.checkInViewOnLoad,c))}}},re={LinearSpline:function(e,t){var a,i,s,r,n,l=function(e,t){for(i=-1,a=e.length;a-i>1;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=l(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new re.LinearSpline(t.slidesGrid,e.slidesGrid):new re.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control,n=s.constructor;function l(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof n&&l(r[o]);else r instanceof n&&t!==r&&l(r)},setTransition:function(e,t){var a,i=this,s=i.constructor,r=i.controller.control;function n(t){t.setTransition(e,i),0!==e&&(t.transitionStart(),t.params.autoHeight&&E((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){r&&(t.params.loop&&"slide"===i.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(r))for(a=0;a<r.length;a+=1)r[a]!==t&&r[a]instanceof s&&n(r[a]);else r instanceof s&&t!==r&&n(r)}},ne={getRandomNumber:function(e){void 0===e&&(e=16);return"x".repeat(e).replace(/x/g,(function(){return Math.round(16*Math.random()).toString(16)}))},makeElFocusable:function(e){return e.attr("tabIndex","0"),e},makeElNotFocusable:function(e){return e.attr("tabIndex","-1"),e},addElRole:function(e,t){return e.attr("role",t),e},addElRoleDescription:function(e,t){return e.attr("aria-roledescription",t),e},addElControls:function(e,t){return e.attr("aria-controls",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},addElId:function(e,t){return e.attr("id",t),e},addElLive:function(e,t){return e.attr("aria-live",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterOrSpaceKey:function(e){if(13===e.keyCode||32===e.keyCode){var t=this,a=t.params.a11y,i=m(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is(P(t.params.pagination.bulletClass))&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop&&e.navigation){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&i.length>0&&(e.isBeginning?(e.a11y.disableEl(i),e.a11y.makeElNotFocusable(i)):(e.a11y.enableEl(i),e.a11y.makeElFocusable(i))),a&&a.length>0&&(e.isEnd?(e.a11y.disableEl(a),e.a11y.makeElNotFocusable(a)):(e.a11y.enableEl(a),e.a11y.makeElFocusable(a)))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(a){var i=m(a);e.a11y.makeElFocusable(i),e.params.pagination.renderBullet||(e.a11y.addElRole(i,"button"),e.a11y.addElLabel(i,t.paginationBulletMessage.replace(/\{\{index\}\}/,i.index()+1)))}))},init:function(){var e=this,t=e.params.a11y;e.$el.append(e.a11y.liveRegion);var a=e.$el;t.containerRoleDescriptionMessage&&e.a11y.addElRoleDescription(a,t.containerRoleDescriptionMessage),t.containerMessage&&e.a11y.addElLabel(a,t.containerMessage);var i=e.$wrapperEl,s=i.attr("id")||"swiper-wrapper-"+e.a11y.getRandomNumber(16),r=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";e.a11y.addElId(i,s),e.a11y.addElLive(i,r),t.itemRoleDescriptionMessage&&e.a11y.addElRoleDescription(m(e.slides),t.itemRoleDescriptionMessage),e.a11y.addElRole(m(e.slides),t.slideRole);var n,l,o=e.params.loop?e.slides.filter((function(t){return!t.classList.contains(e.params.slideDuplicateClass)})).length:e.slides.length;e.slides.each((function(a,i){var s=m(a),r=e.params.loop?parseInt(s.attr("data-swiper-slide-index"),10):i,n=t.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,o);e.a11y.addElLabel(s,n)})),e.navigation&&e.navigation.$nextEl&&(n=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(l=e.navigation.$prevEl),n&&n.length&&(e.a11y.makeElFocusable(n),"BUTTON"!==n[0].tagName&&(e.a11y.addElRole(n,"button"),n.on("keydown",e.a11y.onEnterOrSpaceKey)),e.a11y.addElLabel(n,t.nextSlideMessage),e.a11y.addElControls(n,s)),l&&l.length&&(e.a11y.makeElFocusable(l),"BUTTON"!==l[0].tagName&&(e.a11y.addElRole(l,"button"),l.on("keydown",e.a11y.onEnterOrSpaceKey)),e.a11y.addElLabel(l,t.prevSlideMessage),e.a11y.addElControls(l,s)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown",P(e.params.pagination.bulletClass),e.a11y.onEnterOrSpaceKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&a.a11y.liveRegion.length>0&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterOrSpaceKey),t&&t.off("keydown",a.a11y.onEnterOrSpaceKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown",P(a.params.pagination.bulletClass),a.a11y.onEnterOrSpaceKey)}},le={init:function(){var e=this,t=l();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var a=e.history;a.initialized=!0,a.paths=le.getPathValues(e.params.url),(a.paths.key||a.paths.value)&&(a.scrollToSlide(0,a.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){var e=l();this.params.history.replaceState||e.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){var e=this;e.history.paths=le.getPathValues(e.params.url),e.history.scrollToSlide(e.params.speed,e.history.paths.value,!1)},getPathValues:function(e){var t=l(),a=(e?new URL(e):t.location).pathname.slice(1).split("/").filter((function(e){return""!==e})),i=a.length;return{key:a[i-2],value:a[i-1]}},setHistory:function(e,t){var a=this,i=l();if(a.history.initialized&&a.params.history.enabled){var s;s=a.params.url?new URL(a.params.url):i.location;var r=a.slides.eq(t),n=le.slugify(r.attr("data-history"));if(a.params.history.root.length>0){var o=a.params.history.root;"/"===o[o.length-1]&&(o=o.slice(0,o.length-1)),n=o+"/"+e+"/"+n}else s.pathname.includes(e)||(n=e+"/"+n);var d=i.history.state;d&&d.value===n||(a.params.history.replaceState?i.history.replaceState({value:n},null,n):i.history.pushState({value:n},null,n))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(le.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var l=n.index();i.slideTo(l,e,a)}}else i.slideTo(0,e,a)}},oe={onHashChange:function(){var e=this,t=r();e.emit("hashChange");var a=t.location.hash.replace("#","");if(a!==e.slides.eq(e.activeIndex).attr("data-hash")){var i=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+a+'"]').index();if(void 0===i)return;e.slideTo(i)}},setHash:function(){var e=this,t=l(),a=r();if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||""),e.emit("hashSet");else{var i=e.slides.eq(e.activeIndex),s=i.attr("data-hash")||i.attr("data-history");a.location.hash=s||"",e.emit("hashSet")}},init:function(){var e=this,t=r(),a=l();if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var i=t.location.hash.replace("#","");if(i)for(var s=0,n=e.slides.length;s<n;s+=1){var o=e.slides.eq(s);if((o.attr("data-hash")||o.attr("data-history"))===i&&!o.hasClass(e.params.slideDuplicateClass)){var d=o.index();e.slideTo(d,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&m(a).on("hashchange",e.hashNavigation.onHashChange)}},destroy:function(){var e=l();this.params.hashNavigation.watchState&&m(e).off("hashchange",this.hashNavigation.onHashChange)}},de={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=E((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].addEventListener(e,t.autoplay.onTransitionEnd)})):(t.autoplay.paused=!1,t.autoplay.run())))},onVisibilityChange:function(){var e=this,t=r();"hidden"===t.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===t.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(e){var t=this;t&&!t.destroyed&&t.$wrapperEl&&e.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].removeEventListener(e,t.autoplay.onTransitionEnd)})),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())},onMouseEnter:function(){var e=this;e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(t){e.$wrapperEl[0].removeEventListener(t,e.autoplay.onTransitionEnd)}))},onMouseLeave:function(){var e=this;e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,e.autoplay.run())},attachMouseEvents:function(){var e=this;e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",e.autoplay.onMouseEnter),e.$el.on("mouseleave",e.autoplay.onMouseLeave))},detachMouseEvents:function(){var e=this;e.$el.off("mouseenter",e.autoplay.onMouseEnter),e.$el.off("mouseleave",e.autoplay.onMouseLeave)}},pe={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var t=this,a=t.slides,i=t.$wrapperEl;if(a.transition(e),t.params.virtualTranslate&&0!==e){var s=!1;a.transitionEnd((function(){if(!s&&t&&!t.destroyed){s=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)i.trigger(e[a])}}))}}},ue={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,l=t.rtlTranslate,o=t.size,d=t.browser,p=t.params.cubeEffect,u=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,h=0;p.shadow&&(u?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=m('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var v=0;v<s.length;v+=1){var f=s.eq(v),g=v;c&&(g=parseInt(f.attr("data-swiper-slide-index"),10));var b=90*g,y=Math.floor(b/360);l&&(b=-b,y=Math.floor(-b/360));var w=Math.max(Math.min(f[0].progress,1),-1),E=0,x=0,T=0;g%4==0?(E=4*-y*o,T=0):(g-1)%4==0?(E=0,T=4*-y*o):(g-2)%4==0?(E=o+4*y*o,T=o):(g-3)%4==0&&(E=-o,T=3*o+4*o*y),l&&(E=-E),u||(x=E,E=0);var C="rotateX("+(u?0:-b)+"deg) rotateY("+(u?b:0)+"deg) translate3d("+E+"px, "+x+"px, "+T+"px)";if(w<=1&&w>-1&&(h=90*g+90*w,l&&(h=90*-g-90*w)),f.transform(C),p.slideShadows){var S=u?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=u?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(u?"left":"top")+'"></div>'),f.append(S)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(u?"right":"bottom")+'"></div>'),f.append(M)),S.length&&(S[0].style.opacity=Math.max(-w,0)),M.length&&(M[0].style.opacity=Math.max(w,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+o/2+"px","-moz-transform-origin":"50% 50% -"+o/2+"px","-ms-transform-origin":"50% 50% -"+o/2+"px","transform-origin":"50% 50% -"+o/2+"px"}),p.shadow)if(u)e.transform("translate3d(0px, "+(r/2+p.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+p.shadowScale+")");else{var z=Math.abs(h)-90*Math.floor(Math.abs(h)/90),P=1.5-(Math.sin(2*z*Math.PI/360)/2+Math.cos(2*z*Math.PI/360)/2),k=p.shadowScale,$=p.shadowScale/P,L=p.shadowOffset;e.transform("scale3d("+k+", 1, "+$+") translate3d(0px, "+(n/2+L)+"px, "+-n/2/$+"px) rotateX(-90deg)")}var I=d.isSafari||d.isWebView?-o/2:0;i.transform("translate3d(0px,0,"+I+"px) rotateX("+(t.isHorizontal()?0:h)+"deg) rotateY("+(t.isHorizontal()?-h:0)+"deg)")},setTransition:function(e){var t=this,a=t.$el;t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&a.find(".swiper-cube-shadow").transition(e)}},ce={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,l=0,o=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=o,o=0,l=-n,n=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),u=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===u.length&&(u=m('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(u)),p.length&&(p[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+o+"px, "+d+"px, 0px) rotateX("+l+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,a=t.slides,i=t.activeIndex,s=t.$wrapperEl;if(a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;a.eq(i).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],a=0;a<e.length;a+=1)s.trigger(e[a])}}))}}},he={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.slidesSizesGrid,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:a/2-l,d=n?r.rotate:-r.rotate,p=r.depth,u=0,c=i.length;u<c;u+=1){var h=i.eq(u),v=s[u],f=(o-h[0].swiperSlideOffset-v/2)/v*r.modifier,g=n?d*f:0,b=n?0:d*f,y=-p*Math.abs(f),w=r.stretch;"string"==typeof w&&-1!==w.indexOf("%")&&(w=parseFloat(r.stretch)/100*v);var E=n?0:w*f,x=n?w*f:0,T=1-(1-r.scale)*Math.abs(f);Math.abs(x)<.001&&(x=0),Math.abs(E)<.001&&(E=0),Math.abs(y)<.001&&(y=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0),Math.abs(T)<.001&&(T=0);var C="translate3d("+x+"px,"+E+"px,"+y+"px)  rotateX("+b+"deg) rotateY("+g+"deg) scale("+T+")";if(h.transform(C),h[0].style.zIndex=1-Math.abs(Math.round(f)),r.slideShadows){var S=n?h.find(".swiper-slide-shadow-left"):h.find(".swiper-slide-shadow-top"),M=n?h.find(".swiper-slide-shadow-right"):h.find(".swiper-slide-shadow-bottom");0===S.length&&(S=m('<div class="swiper-slide-shadow-'+(n?"left":"top")+'"></div>'),h.append(S)),0===M.length&&(M=m('<div class="swiper-slide-shadow-'+(n?"right":"bottom")+'"></div>'),h.append(M)),S.length&&(S[0].style.opacity=f>0?f:0),M.length&&(M[0].style.opacity=-f>0?-f:0)}}},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ve={init:function(){var e=this,t=e.params.thumbs;if(e.thumbs.initialized)return!1;e.thumbs.initialized=!0;var a=e.constructor;return t.swiper instanceof a?(e.thumbs.swiper=t.swiper,M(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),M(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):C(t.swiper)&&(e.thumbs.swiper=new a(M({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick),!0},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&m(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),l=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?l:void 0===l?n:l-r<r-n?l:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView,s=t.params.thumbs.autoScrollOffset,r=s&&!a.params.loop;if(t.realIndex!==a.realIndex||r){var n,l,o=a.activeIndex;if(a.params.loop){a.slides.eq(o).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,o=a.activeIndex);var d=a.slides.eq(o).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),p=a.slides.eq(o).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();n=void 0===d?p:void 0===p?d:p-o==o-d?a.params.slidesPerGroup>1?p:o:p-o<o-d?p:d,l=t.activeIndex>t.previousIndex?"next":"prev"}else l=(n=t.realIndex)>t.previousIndex?"next":"prev";r&&(n+="next"===l?s:-1*s),a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(n)<0&&(a.params.centeredSlides?n=n>o?n-Math.floor(i/2)+1:n+Math.floor(i/2)-1:n>o&&a.params.slidesPerGroup,a.slideTo(n,e?0:void 0))}var u=1,c=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(u=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),a.slides.removeClass(c),a.params.loop||a.params.virtual&&a.params.virtual.enabled)for(var h=0;h<u;h+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+h)+'"]').addClass(c);else for(var v=0;v<u;v+=1)a.slides.eq(t.realIndex+v).addClass(c)}}},fe=[U,Z,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}},create:function(){z(this,{mousewheel:{enabled:!1,lastScrollTime:x(),lastEventBeforeSnap:void 0,recentWheelEvents:[],enable:J.enable,disable:J.disable,handle:J.handle,handleMouseEnter:J.handleMouseEnter,handleMouseLeave:J.handleMouseLeave,animateSlider:J.animateSlider,releaseScroll:J.releaseScroll}})},on:{init:function(e){!e.params.mousewheel.enabled&&e.params.cssMode&&e.mousewheel.disable(),e.params.mousewheel.enabled&&e.mousewheel.enable()},destroy:function(e){e.params.cssMode&&e.mousewheel.enable(),e.mousewheel.enabled&&e.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){z(this,{navigation:t({},Q)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},"enable disable":function(e){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)},click:function(e,t){var a=e.navigation,i=a.$nextEl,s=a.$prevEl,r=t.target;if(e.params.navigation.hideOnClick&&!m(r).is(s)&&!m(r).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===r||e.pagination.el.contains(r)))return;var n;i?n=i.hasClass(e.params.navigation.hiddenClass):s&&(n=s.hasClass(e.params.navigation.hiddenClass)),!0===n?e.emit("navigationShow"):e.emit("navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),s&&s.toggleClass(e.params.navigation.hiddenClass)}}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){z(this,{pagination:t({dynamicBulletIndex:0},ee)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var t=e.pagination.$el;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,t){var a=t.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!m(a).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&a===e.navigation.nextEl||e.navigation.prevEl&&a===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){z(this,{scrollbar:t({isTouched:!1,timeout:null,dragTimeout:null},te)})},on:{init:function(e){e.scrollbar.init(),e.scrollbar.updateSize(),e.scrollbar.setTranslate()},update:function(e){e.scrollbar.updateSize()},resize:function(e){e.scrollbar.updateSize()},observerUpdate:function(e){e.scrollbar.updateSize()},setTranslate:function(e){e.scrollbar.setTranslate()},setTransition:function(e,t){e.scrollbar.setTransition(t)},"enable disable":function(e){var t=e.scrollbar.$el;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)},destroy:function(e){e.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){z(this,{parallax:t({},ae)})},on:{beforeInit:function(e){e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},init:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTranslate:function(e){e.params.parallax.enabled&&e.parallax.setTranslate()},setTransition:function(e,t){e.params.parallax.enabled&&e.parallax.setTransition(t)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this;z(e,{zoom:t({enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}},ie)});var a=1;Object.defineProperty(e.zoom,"scale",{get:function(){return a},set:function(t){if(a!==t){var i=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,s=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,i,s)}a=t}})},on:{init:function(e){e.params.zoom.enabled&&e.zoom.enable()},destroy:function(e){e.zoom.disable()},touchStart:function(e,t){e.zoom.enabled&&e.zoom.onTouchStart(t)},touchEnd:function(e,t){e.zoom.enabled&&e.zoom.onTouchEnd(t)},doubleTap:function(e,t){!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&e.zoom.toggle(t)},transitionEnd:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.zoom.onTransitionEnd()},slideChange:function(e){e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&e.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){z(this,{lazy:t({initialImageLoaded:!1},se)})},on:{beforeInit:function(e){e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)},init:function(e){e.params.lazy.enabled&&!e.params.loop&&0===e.params.initialSlide&&(e.params.lazy.checkInView?e.lazy.checkInViewOnLoad():e.lazy.load())},scroll:function(e){e.params.freeMode&&!e.params.freeModeSticky&&e.lazy.load()},"scrollbarDragMove resize _freeModeNoMomentumRelease":function(e){e.params.lazy.enabled&&e.lazy.load()},transitionStart:function(e){e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(e){e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&e.lazy.load()},slideChange:function(e){var t=e.params,a=t.lazy,i=t.cssMode,s=t.watchSlidesVisibility,r=t.watchSlidesProgress,n=t.touchReleaseOnEdges,l=t.resistanceRatio;a.enabled&&(i||(s||r)&&(n||0===l))&&e.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){z(this,{controller:t({control:this.params.controller.control},re)})},on:{update:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},resize:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},observerUpdate:function(e){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)},setTranslate:function(e,t,a){e.controller.control&&e.controller.setTranslate(t,a)},setTransition:function(e,t,a){e.controller.control&&e.controller.setTransition(t,a)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}},create:function(){z(this,{a11y:t({},ne,{liveRegion:m('<span class="'+this.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')})})},on:{afterInit:function(e){e.params.a11y.enabled&&(e.a11y.init(),e.a11y.updateNavigation())},toEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},fromEdge:function(e){e.params.a11y.enabled&&e.a11y.updateNavigation()},paginationUpdate:function(e){e.params.a11y.enabled&&e.a11y.updatePagination()},destroy:function(e){e.params.a11y.enabled&&e.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,root:"",replaceState:!1,key:"slides"}},create:function(){z(this,{history:t({},le)})},on:{init:function(e){e.params.history.enabled&&e.history.init()},destroy:function(e){e.params.history.enabled&&e.history.destroy()},"transitionEnd _freeModeNoMomentumRelease":function(e){e.history.initialized&&e.history.setHistory(e.params.history.key,e.activeIndex)},slideChange:function(e){e.history.initialized&&e.params.cssMode&&e.history.setHistory(e.params.history.key,e.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){z(this,{hashNavigation:t({initialized:!1},oe)})},on:{init:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.init()},destroy:function(e){e.params.hashNavigation.enabled&&e.hashNavigation.destroy()},"transitionEnd _freeModeNoMomentumRelease":function(e){e.hashNavigation.initialized&&e.hashNavigation.setHash()},slideChange:function(e){e.hashNavigation.initialized&&e.params.cssMode&&e.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){z(this,{autoplay:t({},de,{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),r().addEventListener("visibilitychange",e.autoplay.onVisibilityChange),e.autoplay.attachMouseEvents())},beforeTransitionStart:function(e,t,a){e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.detachMouseEvents(),e.autoplay.running&&e.autoplay.stop(),r().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){z(this,{fadeEffect:t({},pe)})},on:{beforeInit:function(e){if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};M(e.params,t),M(e.originalParams,t)}},setTranslate:function(e){"fade"===e.params.effect&&e.fadeEffect.setTranslate()},setTransition:function(e,t){"fade"===e.params.effect&&e.fadeEffect.setTransition(t)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){z(this,{cubeEffect:t({},ue)})},on:{beforeInit:function(e){if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};M(e.params,t),M(e.originalParams,t)}},setTranslate:function(e){"cube"===e.params.effect&&e.cubeEffect.setTranslate()},setTransition:function(e,t){"cube"===e.params.effect&&e.cubeEffect.setTransition(t)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){z(this,{flipEffect:t({},ce)})},on:{beforeInit:function(e){if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};M(e.params,t),M(e.originalParams,t)}},setTranslate:function(e){"flip"===e.params.effect&&e.flipEffect.setTranslate()},setTransition:function(e,t){"flip"===e.params.effect&&e.flipEffect.setTransition(t)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}},create:function(){z(this,{coverflowEffect:t({},he)})},on:{beforeInit:function(e){"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(e){"coverflow"===e.params.effect&&e.coverflowEffect.setTranslate()},setTransition:function(e,t){"coverflow"===e.params.effect&&e.coverflowEffect.setTransition(t)}}},{name:"thumbs",params:{thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){z(this,{thumbs:t({swiper:null,initialized:!1},ve)})},on:{beforeInit:function(e){var t=e.params.thumbs;t&&t.swiper&&(e.thumbs.init(),e.thumbs.update(!0))},slideChange:function(e){e.thumbs.swiper&&e.thumbs.update()},update:function(e){e.thumbs.swiper&&e.thumbs.update()},resize:function(e){e.thumbs.swiper&&e.thumbs.update()},observerUpdate:function(e){e.thumbs.swiper&&e.thumbs.update()},setTransition:function(e,t){var a=e.thumbs.swiper;a&&a.setTransition(t)},beforeDestroy:function(e){var t=e.thumbs.swiper;t&&e.thumbs.swiperCreated&&t&&t.destroy()}}}];return q.use(fe),q}));
//# sourceMappingURL=swiper-bundle.min.js.map


// Plyr

"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e="undefined"!=typeof globalThis?globalThis:e||self).Plyr=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={addCSS:!0,thumbWidth:15,watch:!0};function y(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var b=function(e){return null!=e?e.constructor:null},v=function(e,t){return!!(e&&t&&e instanceof t)},w=function(e){return null==e},k=function(e){return b(e)===Object},T=function(e){return b(e)===String},C=function(e){return Array.isArray(e)},A=function(e){return v(e,NodeList)},S=T,P=C,E=A,N=function(e){return v(e,Element)},M=function(e){return v(e,Event)},x=function(e){return w(e)||(T(e)||C(e)||A(e))&&!e.length||k(e)&&!Object.keys(e).length};function I(e,t){if(1>t){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}var L,O,_,j=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),N(t)?this.element=t:S(t)&&(this.element=document.querySelector(t)),N(this.element)&&x(this.element.rangeTouch)&&(this.config=f({},g,{},n),this.init())}return function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)}(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[n](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(t){if(!e.enabled||!M(t))return null;var n,i=t.target,a=t.changedTouches[0],r=parseFloat(i.getAttribute("min"))||0,o=parseFloat(i.getAttribute("max"))||100,s=parseFloat(i.getAttribute("step"))||1,l=i.getBoundingClientRect(),c=100/l.width*(this.config.thumbWidth/2)/100;return 0>(n=100/l.width*(a.clientX-l.left))?n=0:100<n&&(n=100),50>n?n-=(100-2*n)*c:50<n&&(n+=2*(n-50)*c),r+I(n/100*(o-r),s)}},{key:"set",value:function(t){e.enabled&&M(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t,{bubbles:!0});e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=null;if(x(t)||S(t)?i=Array.from(document.querySelectorAll(S(t)?t:'input[type="range"]')):N(t)?i=[t]:E(t)?i=Array.from(t):P(t)&&(i=t.filter(N)),x(i))return null;var a=f({},g,{},n);if(S(t)&&a.watch){var r=new MutationObserver((function(n){Array.from(n).forEach((function(n){Array.from(n.addedNodes).forEach((function(n){N(n)&&y(n,t)&&new e(n,a)}))}))}));r.observe(document.body,{childList:!0,subtree:!0})}return i.map((function(t){return new e(t,n)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}(),D=function(e){return null!=e?e.constructor:null},q=function(e,t){return Boolean(e&&t&&e instanceof t)},H=function(e){return null==e},F=function(e){return D(e)===Object},R=function(e){return D(e)===String},V=function(e){return D(e)===Function},B=function(e){return Array.isArray(e)},U=function(e){return q(e,NodeList)},W=function(e){return H(e)||(R(e)||B(e)||U(e))&&!e.length||F(e)&&!Object.keys(e).length},z=H,K=F,Y=function(e){return D(e)===Number&&!Number.isNaN(e)},Q=R,X=function(e){return D(e)===Boolean},$=V,J=B,G=U,Z=function(t){return null!==t&&"object"===e(t)&&1===t.nodeType&&"object"===e(t.style)&&"object"===e(t.ownerDocument)},ee=function(e){return q(e,Event)},te=function(e){return q(e,KeyboardEvent)},ne=function(e){return q(e,TextTrack)||!H(e)&&R(e.kind)},ie=function(e){return q(e,Promise)&&V(e.then)},ae=function(e){if(q(e,window.URL))return!0;if(!R(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!W(new URL(t).hostname)}catch(e){return!1}},re=W,oe=(L=document.createElement("span"),O={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},_=Object.keys(O).find((function(e){return void 0!==L.style[e]})),!!Q(_)&&O[_]);function se(e,t){setTimeout((function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}}),t)}var le={isIE:
/* @cc_on!@ */
!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)};function ce(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}function ue(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!n.length)return e;var r=n.shift();return K(r)?(Object.keys(r).forEach((function(t){K(r[t])?(Object.keys(e).includes(t)||Object.assign(e,a({},t,{})),ue(e[t],r[t])):Object.assign(e,a({},t,r[t]))})),ue.apply(void 0,[e].concat(n))):e}function de(e,t){var n=e.length?e:[e];Array.from(n).reverse().forEach((function(e,n){var i=n>0?t.cloneNode(!0):t,a=e.parentNode,r=e.nextSibling;i.appendChild(e),r?a.insertBefore(i,r):a.appendChild(i)}))}function he(e,t){Z(e)&&!re(t)&&Object.entries(t).filter((function(e){var t=l(e,2)[1];return!z(t)})).forEach((function(t){var n=l(t,2),i=n[0],a=n[1];return e.setAttribute(i,a)}))}function me(e,t,n){var i=document.createElement(e);return K(t)&&he(i,t),Q(n)&&(i.innerText=n),i}function pe(e,t,n,i){Z(t)&&t.appendChild(me(e,n,i))}function fe(e){G(e)||J(e)?Array.from(e).forEach(fe):Z(e)&&Z(e.parentNode)&&e.parentNode.removeChild(e)}function ge(e){if(Z(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function ye(e,t){return Z(t)&&Z(t.parentNode)&&Z(e)?(t.parentNode.replaceChild(e,t),e):null}function be(e,t){if(!Q(e)||re(e))return{};var n={},i=ue({},t);return e.split(",").forEach((function(e){var t=e.trim(),a=t.replace(".",""),r=t.replace(/[[\]]/g,"").split("="),o=l(r,1)[0],s=r.length>1?r[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":Q(i.class)?n.class="".concat(i.class," ").concat(a):n.class=a;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=s}})),ue(i,n)}function ve(e,t){if(Z(e)){var n=t;X(n)||(n=!e.hidden),e.hidden=n}}function we(e,t,n){if(G(e))return Array.from(e).map((function(e){return we(e,t,n)}));if(Z(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function ke(e,t){return Z(e)&&e.classList.contains(t)}function Te(e,t){var n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(){return Array.from(document.querySelectorAll(t)).includes(this)}).call(e,t)}function Ce(e){return this.elements.container.querySelectorAll(e)}function Ae(e){return this.elements.container.querySelector(e)}function Se(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Z(e)&&(e.focus({preventScroll:!0}),t&&we(e,this.config.classNames.tabFocus))}var Pe,Ee={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},Ne={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=le.isIPhone&&n&&Ne.playsinline,a=Ne[e]||"html5"!==t;return{api:a,ui:a&&Ne.rangeInput&&("video"!==e||!le.isIPhone||i)}},pip:!(le.isIPhone||!$(me("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||me("video").disablePictureInPicture)),airplay:$(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(re(e))return!1;var t=l(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(Ee).includes(n)&&(n+='; codecs="'.concat(Ee[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(Pe=document.createElement("input"),Pe.type="range","range"===Pe.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==oe,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},Me=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function xe(e,t,n){var i=this,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!re(t)&&$(n)){var s=t.split(" "),l=o;Me&&(l={passive:r,capture:o}),s.forEach((function(t){i&&i.eventListeners&&a&&i.eventListeners.push({element:e,type:t,callback:n,options:l}),e[a?"addEventListener":"removeEventListener"](t,n,l)}))}}function Ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];xe.call(this,e,t,n,!0,i,a)}function Le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];xe.call(this,e,t,n,!1,i,a)}function Oe(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function o(){Le(e,n,o,a,r);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];i.apply(t,l)};xe.call(this,e,n,o,!0,a,r)}function _e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Z(e)&&!re(t)){var a=new CustomEvent(t,{bubbles:n,detail:o(o({},i),{},{plyr:this})});e.dispatchEvent(a)}}function je(){this&&this.eventListeners&&(this.eventListeners.forEach((function(e){var t=e.element,n=e.type,i=e.callback,a=e.options;t.removeEventListener(n,i,a)})),this.eventListeners=[])}function De(){var e=this;return new Promise((function(t){return e.ready?setTimeout(t,0):Ie.call(e,e.elements.container,"ready",t)})).then((function(){}))}function qe(e){ie(e)&&e.then(null,(function(){}))}function He(e){return!!(J(e)||Q(e)&&e.includes(":"))&&(J(e)?e:e.split(":")).map(Number).every(Y)}function Fe(e){if(!J(e)||!e.every(Y))return null;var t=l(e,2),n=t[0],i=t[1],a=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/a,i/a]}function Re(e){var t=function(e){return He(e)?e.split(":").map(Number):null},n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!re(this.embed)&&J(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=Fe([i.videoWidth,i.videoHeight])}return n}function Ve(e){if(!this.isVideo)return{};var t=this.elements.wrapper,n=Re.call(this,e),i=l(J(n)?n:[0,0],2),a=100/i[0]*i[1];if(t.style.paddingBottom="".concat(a,"%"),this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){var r=100/this.media.offsetWidth*parseInt(window.getComputedStyle(this.media).paddingBottom,10),o=(r-a)/(r/50);this.fullscreen.active?t.style.paddingBottom=null:this.media.style.transform="translateY(-".concat(o,"%)")}else this.isHTML5&&t.classList.toggle(this.config.classNames.videoFixedRatio,null!==n);return{padding:a,ratio:n}}var Be={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter((function(t){var n=t.getAttribute("type");return!!re(n)||Ne.mime.call(e,n)})):[]},getQualityOptions:function(){return this.config.quality.forced?this.config.quality.options:Be.getSources.call(this).map((function(e){return Number(e.getAttribute("size"))})).filter(Boolean)},setup:function(){if(this.isHTML5){var e=this;e.options.speed=e.config.speed.options,re(this.config.ratio)||Ve.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=Be.getSources.call(e).find((function(t){return t.getAttribute("src")===e.source}));return t&&Number(t.getAttribute("size"))},set:function(t){if(e.quality!==t){if(e.config.quality.forced&&$(e.config.quality.onChange))e.config.quality.onChange(t);else{var n=Be.getSources.call(e).find((function(e){return Number(e.getAttribute("size"))===t}));if(!n)return;var i=e.media,a=i.currentTime,r=i.paused,o=i.preload,s=i.readyState,l=i.playbackRate;e.media.src=n.getAttribute("src"),("none"!==o||s)&&(e.once("loadedmetadata",(function(){e.speed=l,e.currentTime=a,r||qe(e.play())})),e.media.load())}_e.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(fe(Be.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function Ue(e){return J(e)?e.filter((function(t,n){return e.indexOf(t)===n})):e}function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return re(e)?e:e.toString().replace(/{(\d+)}/g,(function(e,t){return n[t].toString()}))}var ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString())},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toString().replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))};function Ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return t=ze(t,"-"," "),t=ze(t,"_"," "),t=Ke(t),ze(t," ","")}function Qe(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}var Xe={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(re(e)||re(t))return"";var n=ce(t.i18n,e);if(re(n))return Object.keys(Xe).includes(e)?Xe[e]:"";var i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach((function(e){var t=l(e,2),i=t[0],a=t[1];n=ze(n,i,a)})),n},Je=function(){function e(n){var i=this;t(this,e),a(this,"get",(function(t){if(!e.supported||!i.enabled)return null;var n=window.localStorage.getItem(i.key);if(re(n))return null;var a=JSON.parse(n);return Q(t)&&t.length?a[t]:a})),a(this,"set",(function(t){if(e.supported&&i.enabled&&K(t)){var n=i.get();re(n)&&(n={}),ue(n,t),window.localStorage.setItem(i.key,JSON.stringify(n))}})),this.enabled=n.config.storage.enabled,this.key=n.config.storage.key}return i(e,null,[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;var e="___test";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}}}]),e}();function Ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise((function(n,i){try{var a=new XMLHttpRequest;if(!("withCredentials"in a))return;a.addEventListener("load",(function(){if("text"===t)try{n(JSON.parse(a.responseText))}catch(e){n(a.responseText)}else n(a.response)})),a.addEventListener("error",(function(){throw new Error(a.status)})),a.open("GET",e,!0),a.responseType=t,a.send()}catch(e){i(e)}}))}function Ze(e,t){if(Q(e)){var n="cache",i=Q(t),a=function(){return null!==document.getElementById(t)},r=function(e,t){e.innerHTML=t,i&&a()||document.body.insertAdjacentElement("afterbegin",e)};if(!i||!a()){var o=Je.supported,s=document.createElement("div");if(s.setAttribute("hidden",""),i&&s.setAttribute("id",t),o){var l=window.localStorage.getItem("".concat(n,"-").concat(t));if(null!==l){var c=JSON.parse(l);r(s,c.content)}}Ge(e).then((function(e){re(e)||(o&&window.localStorage.setItem("".concat(n,"-").concat(t),JSON.stringify({content:e})),r(s,e))})).catch((function(){}))}}}var et=function(e){return Math.trunc(e/60/60%60,10)},tt=function(e){return Math.trunc(e/60%60,10)},nt=function(e){return Math.trunc(e%60,10)};function it(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!Y(e))return it(void 0,t,n);var i=function(e){return"0".concat(e).slice(-2)},a=et(e),r=tt(e),o=nt(e);return a=t||a>0?"".concat(a,":"):"","".concat(n&&e>0?"-":"").concat(a).concat(i(r),":").concat(i(o))}var at={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||le.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=Ae.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:Ce.call(this,this.config.selectors.buttons.play),pause:Ae.call(this,this.config.selectors.buttons.pause),restart:Ae.call(this,this.config.selectors.buttons.restart),rewind:Ae.call(this,this.config.selectors.buttons.rewind),fastForward:Ae.call(this,this.config.selectors.buttons.fastForward),mute:Ae.call(this,this.config.selectors.buttons.mute),pip:Ae.call(this,this.config.selectors.buttons.pip),airplay:Ae.call(this,this.config.selectors.buttons.airplay),settings:Ae.call(this,this.config.selectors.buttons.settings),captions:Ae.call(this,this.config.selectors.buttons.captions),fullscreen:Ae.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Ae.call(this,this.config.selectors.progress),this.elements.inputs={seek:Ae.call(this,this.config.selectors.inputs.seek),volume:Ae.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Ae.call(this,this.config.selectors.display.buffer),currentTime:Ae.call(this,this.config.selectors.display.currentTime),duration:Ae.call(this,this.config.selectors.display.duration)},Z(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n="http://www.w3.org/2000/svg",i=at.getIconUrl.call(this),a="".concat(i.cors?"":i.url,"#").concat(this.config.iconPrefix),r=document.createElementNS(n,"svg");he(r,ue(t,{"aria-hidden":"true",focusable:"false"}));var o=document.createElementNS(n,"use"),s="".concat(a,"-").concat(e);return"href"in o&&o.setAttributeNS("http://www.w3.org/1999/xlink","href",s),o.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s),r.appendChild(o),r},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=$e(e,this.config),i=o(o({},t),{},{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")});return me("span",i,n)},createBadge:function(e){if(re(e))return null;var t=me("span",{class:this.config.classNames.menu.value});return t.appendChild(me("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=ue({},t),a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return(e=Ye(e)).charAt(0).toLowerCase()+e.slice(1)}(e),r={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach((function(e){Object.keys(i).includes(e)&&(r[e]=i[e],delete i[e])})),"button"!==r.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some((function(e){return e===n.config.classNames.control}))||ue(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":r.toggle=!0,r.label="play",r.labelPressed="pause",r.icon="play",r.iconPressed="pause";break;case"mute":r.toggle=!0,r.label="mute",r.labelPressed="unmute",r.icon="volume",r.iconPressed="muted";break;case"captions":r.toggle=!0,r.label="enableCaptions",r.labelPressed="disableCaptions",r.icon="captions-off",r.iconPressed="captions-on";break;case"fullscreen":r.toggle=!0,r.label="enterFullscreen",r.labelPressed="exitFullscreen",r.icon="enter-fullscreen",r.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),a="play",r.label="play",r.icon="play";break;default:re(r.label)&&(r.label=a),re(r.icon)&&(r.icon=e)}var o=me(r.element);return r.toggle?(o.appendChild(at.createIcon.call(this,r.iconPressed,{class:"icon--pressed"})),o.appendChild(at.createIcon.call(this,r.icon,{class:"icon--not-pressed"})),o.appendChild(at.createLabel.call(this,r.labelPressed,{class:"label--pressed"})),o.appendChild(at.createLabel.call(this,r.label,{class:"label--not-pressed"}))):(o.appendChild(at.createIcon.call(this,r.icon)),o.appendChild(at.createLabel.call(this,r.label))),ue(i,be(this.config.selectors.buttons[a],i)),he(o,i),"play"===a?(J(this.elements.buttons[a])||(this.elements.buttons[a]=[]),this.elements.buttons[a].push(o)):this.elements.buttons[a]=o,o},createRange:function(e,t){var n=me("input",ue(be(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":$e(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,at.updateRangeFill.call(this,n),j.setup(n),n},createProgress:function(e,t){var n=me("progress",ue(be(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(me("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],a=i?$e(i,this.config):"";n.innerText="% ".concat(a.toLowerCase())}return this.elements.display[e]=n,n},createTime:function(e,t){var n=be(this.config.selectors.display[e],t),i=me("div",ue(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":$e(e,this.config)}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts:function(e,t){var n=this;Ie.call(this,e,"keydown keyup",(function(i){if([32,38,39,40].includes(i.which)&&(i.preventDefault(),i.stopPropagation(),"keydown"!==i.type)){var a,r=Te(e,'[role="menuitemradio"]');if(!r&&[32,39].includes(i.which))at.showMenuPanel.call(n,t,!0);else 32!==i.which&&(40===i.which||r&&39===i.which?(a=e.nextElementSibling,Z(a)||(a=e.parentNode.firstElementChild)):(a=e.previousElementSibling,Z(a)||(a=e.parentNode.lastElementChild)),Se.call(n,a,!0))}}),!1),Ie.call(this,e,"keyup",(function(e){13===e.which&&at.focusFirstMenuItem.call(n,null,!0)}))},createMenuItem:function(e){var t=this,n=e.value,i=e.list,a=e.type,r=e.title,o=e.badge,s=void 0===o?null:o,l=e.checked,c=void 0!==l&&l,u=be(this.config.selectors.inputs[a]),d=me("button",ue(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),h=me("span");h.innerHTML=r,Z(s)&&h.appendChild(s),d.appendChild(h),Object.defineProperty(d,"checked",{enumerable:!0,get:function(){return"true"===d.getAttribute("aria-checked")},set:function(e){e&&Array.from(d.parentNode.children).filter((function(e){return Te(e,'[role="menuitemradio"]')})).forEach((function(e){return e.setAttribute("aria-checked","false")})),d.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(d,"click keyup",(function(e){if(!te(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),d.checked=!0,a){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}at.showMenuPanel.call(t,"home",te(e))}}),a,!1),at.bindMenuItemShortcuts.call(this,d,a),i.appendChild(d)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!Y(e))return e;var n=et(this.duration)>0;return it(e,n,t)},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Z(e)&&Y(t)&&(e.innerText=at.formatTime(t,n))},updateVolume:function(){this.supported.ui&&(Z(this.elements.inputs.volume)&&at.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),Z(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Z(e)&&(e.value=t,at.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&ee(e)){var n,i,a=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":n=this.currentTime,i=this.duration,a=0===n||0===i||Number.isNaN(n)||Number.isNaN(i)?0:(n/i*100).toFixed(2),"timeupdate"===e.type&&at.setRange.call(this,this.elements.inputs.seek,a);break;case"playing":case"progress":!function(e,n){var i=Y(n)?n:0,a=Z(e)?e:t.elements.display.buffer;if(Z(a)){a.value=i;var r=a.getElementsByTagName("span")[0];Z(r)&&(r.childNodes[0].nodeValue=i)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=ee(e)?e.target:e;if(Z(t)&&"range"===t.getAttribute("type")){if(Te(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=at.formatTime(this.currentTime),i=at.formatTime(this.duration),a=$e("seekLabel",this.config);t.setAttribute("aria-valuetext",a.replace("{currentTime}",n).replace("{duration}",i))}else if(Te(t,this.config.selectors.inputs.volume)){var r=100*t.value;t.setAttribute("aria-valuenow",r),t.setAttribute("aria-valuetext","".concat(r.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);le.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&Z(this.elements.inputs.seek)&&Z(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return we(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var a=0,r=this.elements.progress.getBoundingClientRect();if(ee(e))a=100/r.width*(e.pageX-r.left);else{if(!ke(this.elements.display.seekTooltip,n))return;a=parseFloat(this.elements.display.seekTooltip.style.left,10)}a<0?a=0:a>100&&(a=100),at.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*a),this.elements.display.seekTooltip.style.left="".concat(a,"%"),ee(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!Z(this.elements.display.duration)&&this.config.invertTime;at.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||at.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return ve(this.elements.display.currentTime,!0),void ve(this.elements.progress,!0);Z(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=Z(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&at.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&at.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),at.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){ve(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],a=null,r=t;if("captions"===e)a=this.currentTrack;else{if(a=re(n)?this[e]:n,re(a)&&(a=this.config[e].default),!re(this.options[e])&&!this.options[e].includes(a))return void this.debug.warn("Unsupported value of '".concat(a,"' for ").concat(e));if(!this.config[e].options.includes(a))return void this.debug.warn("Disabled value of '".concat(a,"' for ").concat(e))}if(Z(r)||(r=i&&i.querySelector('[role="menu"]')),Z(r)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=at.getLabel.call(this,e,a);var o=r&&r.querySelector('[value="'.concat(a,'"]'));Z(o)&&(o.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?$e("normal",this.config):"".concat(t,"&times;");case"quality":if(Y(t)){var n=$e("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return Ke(t);case"captions":return st.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(Z(this.elements.settings.panels.quality)){var n="quality",i=this.elements.settings.panels.quality.querySelector('[role="menu"]');J(e)&&(this.options.quality=Ue(e).filter((function(e){return t.config.quality.options.includes(e)})));var a=!re(this.options.quality)&&this.options.quality.length>1;if(at.toggleMenuButton.call(this,n,a),ge(i),at.checkMenu.call(this),a){var r=function(e){var n=$e("qualityBadge.".concat(e),t.config);return n.length?at.createBadge.call(t,n):null};this.options.quality.sort((function(e,n){var i=t.config.quality.options;return i.indexOf(e)>i.indexOf(n)?1:-1})).forEach((function(e){at.createMenuItem.call(t,{value:e,list:i,type:n,title:at.getLabel.call(t,"quality",e),badge:r(e)})})),at.updateSetting.call(this,n,i)}}},setCaptionsMenu:function(){var e=this;if(Z(this.elements.settings.panels.captions)){var t="captions",n=this.elements.settings.panels.captions.querySelector('[role="menu"]'),i=st.getTracks.call(this),a=Boolean(i.length);if(at.toggleMenuButton.call(this,t,a),ge(n),at.checkMenu.call(this),a){var r=i.map((function(t,i){return{value:i,checked:e.captions.toggled&&e.currentTrack===i,title:st.getLabel.call(e,t),badge:t.language&&at.createBadge.call(e,t.language.toUpperCase()),list:n,type:"language"}}));r.unshift({value:-1,checked:!this.captions.toggled,title:$e("disabled",this.config),list:n,type:"language"}),r.forEach(at.createMenuItem.bind(this)),at.updateSetting.call(this,t,n)}}},setSpeedMenu:function(){var e=this;if(Z(this.elements.settings.panels.speed)){var t="speed",n=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter((function(t){return t>=e.minimumSpeed&&t<=e.maximumSpeed}));var i=!re(this.options.speed)&&this.options.speed.length>1;at.toggleMenuButton.call(this,t,i),ge(n),at.checkMenu.call(this),i&&(this.options.speed.forEach((function(i){at.createMenuItem.call(e,{value:i,list:n,type:t,title:at.getLabel.call(e,"speed",i)})})),at.updateSetting.call(this,t,n))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!re(e)&&Object.values(e).some((function(e){return!e.hidden}));ve(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var n=e;Z(n)||(n=Object.values(this.elements.settings.panels).find((function(e){return!e.hidden})));var i=n.querySelector('[role^="menuitem"]');Se.call(this,i,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(Z(t)&&Z(n)){var i=t.hidden,a=i;if(X(e))a=e;else if(te(e)&&27===e.which)a=!1;else if(ee(e)){var r=$(e.composedPath)?e.composedPath()[0]:e.target,o=t.contains(r);if(o||!o&&e.target!==n&&a)return}n.setAttribute("aria-expanded",a),ve(t,!a),we(this.elements.container,this.config.classNames.menu.open,a),a&&te(e)?at.focusFirstMenuItem.call(this,null,!0):a||i||Se.call(this,n,te(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return fe(t),{width:n,height:i}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(Z(i)){var a=i.parentNode,r=Array.from(a.children).find((function(e){return!e.hidden}));if(Ne.transitions&&!Ne.reducedMotion){a.style.width="".concat(r.scrollWidth,"px"),a.style.height="".concat(r.scrollHeight,"px");var o=at.getMenuSize.call(this,i),s=function t(n){n.target===a&&["width","height"].includes(n.propertyName)&&(a.style.width="",a.style.height="",Le.call(e,a,oe,t))};Ie.call(this,a,oe,s),a.style.width="".concat(o.width,"px"),a.style.height="".concat(o.height,"px")}ve(r,!0),ve(i,!1),at.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:function(){var e=this.elements.buttons.download;Z(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,n=at.bindMenuItemShortcuts,i=at.createButton,a=at.createProgress,r=at.createRange,o=at.createTime,s=at.setQualityMenu,l=at.setSpeedMenu,c=at.showMenuPanel;this.elements.controls=null,J(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));var u=me("div",be(this.config.selectors.controls.wrapper));this.elements.controls=u;var d={class:"plyr__controls__item"};return Ue(J(this.config.controls)?this.config.controls:[]).forEach((function(s){if("restart"===s&&u.appendChild(i.call(t,"restart",d)),"rewind"===s&&u.appendChild(i.call(t,"rewind",d)),"play"===s&&u.appendChild(i.call(t,"play",d)),"fast-forward"===s&&u.appendChild(i.call(t,"fast-forward",d)),"progress"===s){var l=me("div",{class:"".concat(d.class," plyr__progress__container")}),h=me("div",be(t.config.selectors.progress));if(h.appendChild(r.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),h.appendChild(a.call(t,"buffer")),t.config.tooltips.seek){var m=me("span",{class:t.config.classNames.tooltip},"00:00");h.appendChild(m),t.elements.display.seekTooltip=m}t.elements.progress=h,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===s&&u.appendChild(o.call(t,"currentTime",d)),"duration"===s&&u.appendChild(o.call(t,"duration",d)),"mute"===s||"volume"===s){var p=t.elements.volume;if(Z(p)&&u.contains(p)||(p=me("div",ue({},d,{class:"".concat(d.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===s&&p.appendChild(i.call(t,"mute")),"volume"===s&&!le.isIos){var f={max:1,step:.05,value:t.config.volume};p.appendChild(r.call(t,"volume",ue(f,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===s&&u.appendChild(i.call(t,"captions",d)),"settings"===s&&!re(t.config.settings)){var g=me("div",ue({},d,{class:"".concat(d.class," plyr__menu").trim(),hidden:""}));g.appendChild(i.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var y=me("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),b=me("div"),v=me("div",{id:"plyr-settings-".concat(e.id,"-home")}),w=me("div",{role:"menu"});v.appendChild(w),b.appendChild(v),t.elements.settings.panels.home=v,t.config.settings.forEach((function(i){var a=me("button",ue(be(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));n.call(t,a,i),Ie.call(t,a,"click",(function(){c.call(t,i,!1)}));var r=me("span",null,$e(i,t.config)),o=me("span",{class:t.config.classNames.menu.value});o.innerHTML=e[i],r.appendChild(o),a.appendChild(r),w.appendChild(a);var s=me("div",{id:"plyr-settings-".concat(e.id,"-").concat(i),hidden:""}),l=me("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(me("span",{"aria-hidden":!0},$e(i,t.config))),l.appendChild(me("span",{class:t.config.classNames.hidden},$e("menuBack",t.config))),Ie.call(t,s,"keydown",(function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))}),!1),Ie.call(t,l,"click",(function(){c.call(t,"home",!1)})),s.appendChild(l),s.appendChild(me("div",{role:"menu"})),b.appendChild(s),t.elements.settings.buttons[i]=a,t.elements.settings.panels[i]=s})),y.appendChild(b),g.appendChild(y),u.appendChild(g),t.elements.settings.popup=y,t.elements.settings.menu=g}if("pip"===s&&Ne.pip&&u.appendChild(i.call(t,"pip",d)),"airplay"===s&&Ne.airplay&&u.appendChild(i.call(t,"airplay",d)),"download"===s){var k=ue({},d,{element:"a",href:t.download,target:"_blank"});t.isHTML5&&(k.download="");var T=t.config.urls.download;!ae(T)&&t.isEmbed&&ue(k,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(i.call(t,"download",k))}"fullscreen"===s&&u.appendChild(i.call(t,"fullscreen",d))})),this.isHTML5&&s.call(this,Be.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=at.getIconUrl.call(this);t.cors&&Ze(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},a=!0;$(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),Z(this.config.controls)||Q(this.config.controls)?n=this.config.controls:(n=at.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:st.getLabel.call(this)}),a=!1);var r,o;if(a&&Q(this.config.controls)&&(r=n,Object.entries(i).forEach((function(e){var t=l(e,2),n=t[0],i=t[1];r=ze(r,"{".concat(n,"}"),i)})),n=r),Q(this.config.selectors.controls.container)&&(o=document.querySelector(this.config.selectors.controls.container)),Z(o)||(o=this.elements.container),o[Z(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),Z(this.elements.controls)||at.findElements.call(this),!re(this.elements.buttons)){var s=function(t){var n=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return ke(t,n)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];we(t,n,e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach((function(e){J(e)||G(e)?Array.from(e).filter(Boolean).forEach(s):s(e)}))}if(le.isEdge&&se(o),this.config.tooltips.controls){var c=this.config,u=c.classNames,d=c.selectors,h="".concat(d.controls.wrapper," ").concat(d.labels," .").concat(u.hidden),m=Ce.call(this,h);Array.from(m).forEach((function(t){we(t,e.config.classNames.hidden,!1),we(t,e.config.classNames.tooltip,!0)}))}}};function rt(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e;if(t){var i=document.createElement("a");i.href=n,n=i.href}try{return new URL(n)}catch(e){return null}}function ot(e){var t=new URLSearchParams;return K(e)&&Object.entries(e).forEach((function(e){var n=l(e,2),i=n[0],a=n[1];t.set(i,a)})),t}var st={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!Ne.textTracks)J(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&at.setCaptionsMenu.call(this);else{if(Z(this.elements.captions)||(this.elements.captions=me("div",be(this.config.selectors.captions)),function(e,t){Z(e)&&Z(t)&&t.parentNode.insertBefore(e,t.nextSibling)}(this.elements.captions,this.elements.wrapper)),le.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach((function(e){var t=e.getAttribute("src"),n=rt(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&Ge(t,"blob").then((function(t){e.setAttribute("src",window.URL.createObjectURL(t))})).catch((function(){fe(e)}))}))}var t=Ue((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map((function(e){return e.split("-")[0]}))),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=l(t,1)[0];var i=this.storage.get("captions");if(X(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var a=this.config.captions.update?"addtrack removetrack":"removetrack";Ie.call(this,this.media.textTracks,a,st.update.bind(this))}setTimeout(st.update.bind(this),0)}},update:function(){var e=this,t=st.getTracks.call(this,!0),n=this.captions,i=n.active,a=n.language,r=n.meta,o=n.currentTrackNode,s=Boolean(t.find((function(e){return e.language===a})));this.isHTML5&&this.isVideo&&t.filter((function(e){return!r.get(e)})).forEach((function(t){e.debug.log("Track added",t),r.set(t,{default:"showing"===t.mode}),"showing"===t.mode&&(t.mode="hidden"),Ie.call(e,t,"cuechange",(function(){return st.updateCues.call(e)}))})),(s&&this.language!==a||!t.includes(o))&&(st.setLanguage.call(this,a),st.toggle.call(this,i&&s)),we(this.elements.container,this.config.classNames.captions.enabled,!re(t)),J(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&at.setCaptionsMenu.call(this)},toggle:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var i=this.captions.toggled,a=this.config.classNames.captions.active,r=z(e)?!i:e;if(r!==i){if(n||(this.captions.active=r,this.storage.set({captions:r})),!this.language&&r&&!n){var o=st.getTracks.call(this),s=st.findTrack.call(this,[this.captions.language].concat(c(this.captions.languages)),!0);return this.captions.language=s.language,void st.set.call(this,o.indexOf(s))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=r),we(this.elements.container,a,r),this.captions.toggled=r,at.updateSetting.call(this,"captions"),_e.call(this,this.media,r?"captionsenabled":"captionsdisabled")}setTimeout((function(){r&&t.captions.toggled&&(t.captions.currentTrackNode.mode="hidden")}))}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=st.getTracks.call(this);if(-1!==e)if(Y(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],a=i||{},r=a.language;this.captions.currentTrackNode=i,at.updateSetting.call(this,"captions"),t||(this.captions.language=r,this.storage.set({language:r})),this.isVimeo&&this.embed.enableTextTrack(r),_e.call(this,this.media,"languagechange")}st.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&st.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else st.toggle.call(this,!1,t)},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Q(e)){var n=e.toLowerCase();this.captions.language=n;var i=st.getTracks.call(this),a=st.findTrack.call(this,[n]);st.set.call(this,i.indexOf(a),t)}else this.debug.warn("Invalid language argument",e)},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Array.from((this.media||{}).textTracks||[]);return n.filter((function(n){return!e.isHTML5||t||e.captions.meta.has(n)})).filter((function(e){return["captions","subtitles"].includes(e.kind)}))},findTrack:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=st.getTracks.call(this),r=function(e){return Number((n.captions.meta.get(e)||{}).default)},o=Array.from(a).sort((function(e,t){return r(t)-r(e)}));return e.every((function(e){return!(t=o.find((function(t){return t.language===e})))})),t||(i?o[0]:void 0)},getCurrentTrack:function(){return st.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!ne(t)&&Ne.textTracks&&this.captions.toggled&&(t=st.getCurrentTrack.call(this)),ne(t)?re(t.label)?re(t.language)?$e("enabled",this.config):e.language.toUpperCase():t.label:$e("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(Z(this.elements.captions))if(z(e)||Array.isArray(e)){var t=e;if(!t){var n=st.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map((function(e){return e.getCueAsHTML()})).map(Qe)}var i=t.map((function(e){return e.trim()})).join("\n");if(i!==this.elements.captions.innerHTML){ge(this.elements.captions);var a=me("span",be(this.config.selectors.caption));a.innerHTML=i,this.elements.captions.appendChild(a),_e.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},lt={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.6.4/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1}},ct="picture-in-picture",ut="inline",dt={html5:"html5",youtube:"youtube",vimeo:"vimeo"},ht="audio",mt="video";var pt=function(){},ft=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t(this,e),this.enabled=window.console&&n,this.enabled&&this.log("Debugging enabled")}return i(e,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):pt}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):pt}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):pt}}]),e}(),gt=function(){function e(n){var i=this;t(this,e),a(this,"onChange",(function(){if(i.enabled){var e=i.player.elements.buttons.fullscreen;Z(e)&&(e.pressed=i.active);var t=i.target===i.player.media?i.target:i.player.elements.container;_e.call(i.player,t,i.active?"enterfullscreen":"exitfullscreen",!0)}})),a(this,"toggleFallback",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?i.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(i.scrollPosition.x,i.scrollPosition.y),document.body.style.overflow=e?"hidden":"",we(i.target,i.player.config.classNames.fullscreen.fallback,e),le.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var a=Q(t.content)&&t.content.includes(n);e?(i.cleanupViewport=!a,a||(t.content+=",".concat(n))):i.cleanupViewport&&(t.content=t.content.split(",").filter((function(e){return e.trim()!==n})).join(","))}i.onChange()})),a(this,"trapFocus",(function(e){if(!le.isIos&&i.active&&"Tab"===e.key&&9===e.keyCode){var t=document.activeElement,n=Ce.call(i.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),a=l(n,1)[0],r=n[n.length-1];t!==r||e.shiftKey?t===a&&e.shiftKey&&(r.focus(),e.preventDefault()):(a.focus(),e.preventDefault())}})),a(this,"update",(function(){var t;i.enabled?(t=i.forceFallback?"Fallback (forced)":e.native?"Native":"Fallback",i.player.debug.log("".concat(t," fullscreen enabled"))):i.player.debug.log("Fullscreen not supported and fallback disabled");we(i.player.elements.container,i.player.config.classNames.fullscreen.enabled,i.enabled)})),a(this,"enter",(function(){i.enabled&&(le.isIos&&i.player.config.fullscreen.iosNative?i.player.isVimeo?i.player.embed.requestFullscreen():i.target.webkitEnterFullscreen():!e.native||i.forceFallback?i.toggleFallback(!0):i.prefix?re(i.prefix)||i.target["".concat(i.prefix,"Request").concat(i.property)]():i.target.requestFullscreen({navigationUI:"hide"}))})),a(this,"exit",(function(){if(i.enabled)if(le.isIos&&i.player.config.fullscreen.iosNative)i.target.webkitExitFullscreen(),qe(i.player.play());else if(!e.native||i.forceFallback)i.toggleFallback(!1);else if(i.prefix){if(!re(i.prefix)){var t="moz"===i.prefix?"Cancel":"Exit";document["".concat(i.prefix).concat(t).concat(i.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)})),a(this,"toggle",(function(){i.active?i.exit():i.enter()})),this.player=n,this.prefix=e.prefix,this.property=e.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===n.config.fullscreen.fallback,this.player.elements.fullscreen=n.config.fullscreen.container&&function(e,t){return(Element.prototype.closest||function(){var e=this;do{if(Te.matches(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}).call(e,t)}(this.player.elements.container,n.config.fullscreen.container),Ie.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),(function(){i.onChange()})),Ie.call(this.player,this.player.elements.container,"dblclick",(function(e){Z(i.player.elements.controls)&&i.player.elements.controls.contains(e.target)||i.player.listeners.proxy(e,i.toggle,"fullscreen")})),Ie.call(this,this.player.elements.container,"keydown",(function(e){return i.trapFocus(e)})),this.update()}return i(e,[{key:"usingNative",get:function(){return e.native&&!this.forceFallback}},{key:"enabled",get:function(){return(e.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){if(!this.enabled)return!1;if(!e.native||this.forceFallback)return ke(this.target,this.player.config.classNames.fullscreen.fallback);var t=this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement;return t&&t.shadowRoot?t===this.target.getRootNode().host:t===this.target}},{key:"target",get:function(){return le.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.fullscreen||this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if($(document.exitFullscreen))return"";var e="";return["webkit","moz","ms"].some((function(t){return!(!$(document["".concat(t,"ExitFullscreen")])&&!$(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)})),e}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),e}();function yt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise((function(n,i){var a=new Image,r=function(){delete a.onload,delete a.onerror,(a.naturalWidth>=t?n:i)(a)};Object.assign(a,{onload:r,onerror:r,src:e})}))}var bt={addStyleHook:function(){we(this.elements.container,this.config.selectors.container.replace(".",""),!0),we(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void bt.toggleNativeControls.call(this,!0);Z(this.elements.controls)||(at.inject.call(this),this.listeners.controls()),bt.toggleNativeControls.call(this),this.isHTML5&&st.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,at.updateVolume.call(this),at.timeUpdate.call(this),bt.checkPlaying.call(this),we(this.elements.container,this.config.classNames.pip.supported,Ne.pip&&this.isHTML5&&this.isVideo),we(this.elements.container,this.config.classNames.airplay.supported,Ne.airplay&&this.isHTML5),we(this.elements.container,this.config.classNames.isIos,le.isIos),we(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout((function(){_e.call(e,e.media,"ready")}),0),bt.setTitle.call(this),this.poster&&bt.setPoster.call(this,this.poster,!1).catch((function(){})),this.config.duration&&at.durationUpdate.call(this)},setTitle:function(){var e=$e("play",this.config);if(Q(this.config.title)&&!re(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach((function(t){t.setAttribute("aria-label",e)})),this.isEmbed){var t=Ae.call(this,"iframe");if(!Z(t))return;var n=re(this.config.title)?"video":this.config.title,i=$e("frameTitle",this.config);t.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){we(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("data-poster",e),this.elements.poster.removeAttribute("hidden"),De.call(this).then((function(){return yt(e)})).catch((function(n){throw e===t.poster&&bt.togglePoster.call(t,!1),n})).then((function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")})).then((function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),bt.togglePoster.call(t,!0),e})))},checkPlaying:function(e){var t=this;we(this.elements.container,this.config.classNames.playing,this.playing),we(this.elements.container,this.config.classNames.paused,this.paused),we(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach((function(e){Object.assign(e,{pressed:t.playing}),e.setAttribute("aria-label",$e(t.playing?"pause":"play",t.config))})),ee(e)&&"timeupdate"===e.type||bt.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout((function(){we(t.elements.container,t.config.classNames.loading,t.loading),bt.toggleControls.call(t)}),this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}},migrateStyles:function(){var e=this;Object.values(o({},this.media.style)).filter((function(e){return!re(e)&&Q(e)&&e.startsWith("--plyr")})).forEach((function(t){e.elements.container.style.setProperty(t,e.media.style.getPropertyValue(t)),e.media.style.removeProperty(t)})),re(this.media.style)&&this.media.removeAttribute("style")}},vt=function(){function e(n){var i=this;t(this,e),a(this,"firstTouch",(function(){var e=i.player,t=e.elements;e.touch=!0,we(t.container,e.config.classNames.isTouch,!0)})),a(this,"setTabFocus",(function(e){var t=i.player,n=t.elements;if(clearTimeout(i.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(i.lastKeyDown=e.timeStamp);var a,r=e.timeStamp-i.lastKeyDown<=20;if("focus"!==e.type||r)a=t.config.classNames.tabFocus,we(Ce.call(t,".".concat(a)),a,!1),"focusout"!==e.type&&(i.focusTimer=setTimeout((function(){var e=document.activeElement;n.container.contains(e)&&we(document.activeElement,t.config.classNames.tabFocus,!0)}),10))}})),a(this,"global",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=i.player;t.config.keyboard.global&&xe.call(t,window,"keydown keyup",i.handleKey,e,!1),xe.call(t,document.body,"click",i.toggleMenu,e),Oe.call(t,document.body,"touchstart",i.firstTouch),xe.call(t,document.body,"keydown focus blur focusout",i.setTabFocus,e,!1,!0)})),a(this,"container",(function(){var e=i.player,t=e.config,n=e.elements,a=e.timers;!t.keyboard.global&&t.keyboard.focused&&Ie.call(e,n.container,"keydown keyup",i.handleKey,!1),Ie.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",(function(t){var i=n.controls;i&&"enterfullscreen"===t.type&&(i.pressed=!1,i.hover=!1);var r=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(bt.toggleControls.call(e,!0),r=e.touch?3e3:2e3),clearTimeout(a.controls),a.controls=setTimeout((function(){return bt.toggleControls.call(e,!1)}),r)}));var r=function(t){if(!t)return Ve.call(e);var i=n.container.getBoundingClientRect(),a=i.width,r=i.height;return Ve.call(e,"".concat(a,":").concat(r))},o=function(){clearTimeout(a.resized),a.resized=setTimeout(r,50)};Ie.call(e,n.container,"enterfullscreen exitfullscreen",(function(t){var i=e.fullscreen,a=i.target,s=i.usingNative;if(a===n.container&&(e.isEmbed||!re(e.config.ratio))){var c="enterfullscreen"===t.type,u=r(c);u.padding;!function(t,n,i){if(e.isVimeo&&!e.config.vimeo.premium){var a=e.elements.wrapper.firstChild,r=l(t,2)[1],o=l(Re.call(e),2),s=o[0],c=o[1];a.style.maxWidth=i?"".concat(r/c*s,"px"):null,a.style.margin=i?"0 auto":null}}(u.ratio,0,c),c&&setTimeout((function(){return se(n.container)}),100),s||(c?Ie.call(e,window,"resize",o):Le.call(e,window,"resize",o))}}))})),a(this,"media",(function(){var e=i.player,t=e.elements;if(Ie.call(e,e.media,"timeupdate seeking seeked",(function(t){return at.timeUpdate.call(e,t)})),Ie.call(e,e.media,"durationchange loadeddata loadedmetadata",(function(t){return at.durationUpdate.call(e,t)})),Ie.call(e,e.media,"ended",(function(){e.isHTML5&&e.isVideo&&e.config.resetOnEnd&&(e.restart(),e.pause())})),Ie.call(e,e.media,"progress playing seeking seeked",(function(t){return at.updateProgress.call(e,t)})),Ie.call(e,e.media,"volumechange",(function(t){return at.updateVolume.call(e,t)})),Ie.call(e,e.media,"playing play pause ended emptied timeupdate",(function(t){return bt.checkPlaying.call(e,t)})),Ie.call(e,e.media,"waiting canplay seeked playing",(function(t){return bt.checkLoading.call(e,t)})),e.supported.ui&&e.config.clickToPlay&&!e.isAudio){var n=Ae.call(e,".".concat(e.config.classNames.video));if(!Z(n))return;Ie.call(e,t.container,"click",(function(a){([t.container,n].includes(a.target)||n.contains(a.target))&&(e.touch&&e.config.hideControls||(e.ended?(i.proxy(a,e.restart,"restart"),i.proxy(a,(function(){qe(e.play())}),"play")):i.proxy(a,(function(){qe(e.togglePlay())}),"play")))}))}e.supported.ui&&e.config.disableContextMenu&&Ie.call(e,t.wrapper,"contextmenu",(function(e){e.preventDefault()}),!1),Ie.call(e,e.media,"volumechange",(function(){e.storage.set({volume:e.volume,muted:e.muted})})),Ie.call(e,e.media,"ratechange",(function(){at.updateSetting.call(e,"speed"),e.storage.set({speed:e.speed})})),Ie.call(e,e.media,"qualitychange",(function(t){at.updateSetting.call(e,"quality",null,t.detail.quality)})),Ie.call(e,e.media,"ready qualitychange",(function(){at.setDownloadUrl.call(e)}));var a=e.config.events.concat(["keyup","keydown"]).join(" ");Ie.call(e,e.media,a,(function(n){var i=n.detail,a=void 0===i?{}:i;"error"===n.type&&(a=e.media.error),_e.call(e,t.container,n.type,!0,a)}))})),a(this,"proxy",(function(e,t,n){var a=i.player,r=a.config.listeners[n],o=!0;$(r)&&(o=r.call(a,e)),!1!==o&&$(t)&&t.call(a,e)})),a(this,"bind",(function(e,t,n,a){var r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=i.player,s=o.config.listeners[a],l=$(s);Ie.call(o,e,t,(function(e){return i.proxy(e,n,a)}),r&&!l)})),a(this,"controls",(function(){var e=i.player,t=e.elements,n=le.isIE?"change":"input";if(t.buttons.play&&Array.from(t.buttons.play).forEach((function(t){i.bind(t,"click",(function(){qe(e.togglePlay())}),"play")})),i.bind(t.buttons.restart,"click",e.restart,"restart"),i.bind(t.buttons.rewind,"click",(function(){e.lastSeekTime=Date.now(),e.rewind()}),"rewind"),i.bind(t.buttons.fastForward,"click",(function(){e.lastSeekTime=Date.now(),e.forward()}),"fastForward"),i.bind(t.buttons.mute,"click",(function(){e.muted=!e.muted}),"mute"),i.bind(t.buttons.captions,"click",(function(){return e.toggleCaptions()})),i.bind(t.buttons.download,"click",(function(){_e.call(e,e.media,"download")}),"download"),i.bind(t.buttons.fullscreen,"click",(function(){e.fullscreen.toggle()}),"fullscreen"),i.bind(t.buttons.pip,"click",(function(){e.pip="toggle"}),"pip"),i.bind(t.buttons.airplay,"click",e.airplay,"airplay"),i.bind(t.buttons.settings,"click",(function(t){t.stopPropagation(),t.preventDefault(),at.toggleMenu.call(e,t)}),null,!1),i.bind(t.buttons.settings,"keyup",(function(t){var n=t.which;[13,32].includes(n)&&(13!==n?(t.preventDefault(),t.stopPropagation(),at.toggleMenu.call(e,t)):at.focusFirstMenuItem.call(e,null,!0))}),null,!1),i.bind(t.settings.menu,"keydown",(function(t){27===t.which&&at.toggleMenu.call(e,t)})),i.bind(t.inputs.seek,"mousedown mousemove",(function(e){var n=t.progress.getBoundingClientRect(),i=100/n.width*(e.pageX-n.left);e.currentTarget.setAttribute("seek-value",i)})),i.bind(t.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",(function(t){var n=t.currentTarget,i=t.keyCode?t.keyCode:t.which,a="play-on-seeked";if(!te(t)||39===i||37===i){e.lastSeekTime=Date.now();var r=n.hasAttribute(a),o=["mouseup","touchend","keyup"].includes(t.type);r&&o?(n.removeAttribute(a),qe(e.play())):!o&&e.playing&&(n.setAttribute(a,""),e.pause())}})),le.isIos){var a=Ce.call(e,'input[type="range"]');Array.from(a).forEach((function(e){return i.bind(e,n,(function(e){return se(e.target)}))}))}i.bind(t.inputs.seek,n,(function(t){var n=t.currentTarget,i=n.getAttribute("seek-value");re(i)&&(i=n.value),n.removeAttribute("seek-value"),e.currentTime=i/n.max*e.duration}),"seek"),i.bind(t.progress,"mouseenter mouseleave mousemove",(function(t){return at.updateSeekTooltip.call(e,t)})),i.bind(t.progress,"mousemove touchmove",(function(t){var n=e.previewThumbnails;n&&n.loaded&&n.startMove(t)})),i.bind(t.progress,"mouseleave touchend click",(function(){var t=e.previewThumbnails;t&&t.loaded&&t.endMove(!1,!0)})),i.bind(t.progress,"mousedown touchstart",(function(t){var n=e.previewThumbnails;n&&n.loaded&&n.startScrubbing(t)})),i.bind(t.progress,"mouseup touchend",(function(t){var n=e.previewThumbnails;n&&n.loaded&&n.endScrubbing(t)})),le.isWebkit&&Array.from(Ce.call(e,'input[type="range"]')).forEach((function(t){i.bind(t,"input",(function(t){return at.updateRangeFill.call(e,t.target)}))})),e.config.toggleInvert&&!Z(t.display.duration)&&i.bind(t.display.currentTime,"click",(function(){0!==e.currentTime&&(e.config.invertTime=!e.config.invertTime,at.timeUpdate.call(e))})),i.bind(t.inputs.volume,n,(function(t){e.volume=t.target.value}),"volume"),i.bind(t.controls,"mouseenter mouseleave",(function(n){t.controls.hover=!e.touch&&"mouseenter"===n.type})),t.fullscreen&&Array.from(t.fullscreen.children).filter((function(e){return!e.contains(t.container)})).forEach((function(n){i.bind(n,"mouseenter mouseleave",(function(n){t.controls.hover=!e.touch&&"mouseenter"===n.type}))})),i.bind(t.controls,"mousedown mouseup touchstart touchend touchcancel",(function(e){t.controls.pressed=["mousedown","touchstart"].includes(e.type)})),i.bind(t.controls,"focusin",(function(){var n=e.config,a=e.timers;we(t.controls,n.classNames.noTransition,!0),bt.toggleControls.call(e,!0),setTimeout((function(){we(t.controls,n.classNames.noTransition,!1)}),0);var r=i.touch?3e3:4e3;clearTimeout(a.controls),a.controls=setTimeout((function(){return bt.toggleControls.call(e,!1)}),r)})),i.bind(t.inputs.volume,"wheel",(function(t){var n=t.webkitDirectionInvertedFromDevice,i=l([t.deltaX,-t.deltaY].map((function(e){return n?-e:e})),2),a=i[0],r=i[1],o=Math.sign(Math.abs(a)>Math.abs(r)?a:r);e.increaseVolume(o/50);var s=e.media.volume;(1===o&&s<1||-1===o&&s>0)&&t.preventDefault()}),"volume",!1)})),this.player=n,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return i(e,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,a="keydown"===e.type,r=a&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&Y(i)){if(a){var o=document.activeElement;if(Z(o)){var s=t.config.selectors.editable;if(o!==n.inputs.seek&&Te(o,s))return;if(32===e.which&&Te(o,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:r||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:r||qe(t.togglePlay());break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:r||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:r||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){at.toggleMenu.call(this.player,e)}}]),e}();"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var wt=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function a(e,t){e=e.push?e:[e];var a,r,o,s=[],l=e.length,c=l;for(a=function(e,n){n.length&&s.push(e),--c||t(s)};l--;)r=e[l],(o=n[r])?a(r,o):(i[r]=i[r]||[]).push(a)}function r(e,t){if(e){var a=i[e];if(n[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function o(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function s(t,n,i,a){var r,o,l=document,c=i.async,u=(i.numRetries||0)+1,d=i.before||e,h=t.replace(/[\?|#].*$/,""),m=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(h)?((o=l.createElement("link")).rel="stylesheet",o.href=m,(r="hideFocus"in o)&&o.relList&&(r=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)?(o=l.createElement("img")).src=m:((o=l.createElement("script")).src=t,o.async=void 0===c||c),o.onload=o.onerror=o.onbeforeload=function(e){var l=e.type[0];if(r)try{o.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((a+=1)<u)return s(t,n,i,a)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==d(t,o)&&l.head.appendChild(o)}function l(e,t,n){var i,a,r=(e=e.push?e:[e]).length,o=r,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--r||t(l)},a=0;a<o;a++)s(e[a],i,n)}function c(e,n,i){var a,s;if(n&&n.trim&&(a=n),s=(a?i:n)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function c(t,n){l(e,(function(e){o(s,e),t&&o({success:t,error:n},e),r(a,e)}),s)}if(s.returnPromise)return new Promise(c);c()}return c.ready=function(e,t){return a(e,(function(e){o(t,e)})),c},c.done=function(e){r(e,[])},c.reset=function(){t={},n={},i={}},c.isDefined=function(e){return e in t},c}()}));function kt(e){return new Promise((function(t,n){wt(e,{success:t,error:n})}))}function Tt(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,_e.call(this,this.media,e?"play":"pause"))}var Ct={setup:function(){var e=this;we(e.elements.wrapper,e.config.classNames.embed,!0),e.options.speed=e.config.speed.options,Ve.call(e),K(window.Vimeo)?Ct.ready.call(e):kt(e.config.urls.vimeo.sdk).then((function(){Ct.ready.call(e)})).catch((function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t)}))},ready:function(){var e=this,t=this,n=t.config.vimeo,i=n.premium,a=n.referrerPolicy,r=s(n,["premium","referrerPolicy"]);i&&Object.assign(r,{controls:!1,sidedock:!1});var c=ot(o({loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},r)),u=t.media.getAttribute("src");re(u)&&(u=t.media.getAttribute(t.config.attributes.embed.id));var d,h=re(d=u)?null:Y(Number(d))?d:d.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:d,m=me("iframe"),p=We(t.config.urls.vimeo.iframe,h,c);if(m.setAttribute("src",p),m.setAttribute("allowfullscreen",""),m.setAttribute("allow",["autoplay","fullscreen","picture-in-picture"].join("; ")),re(a)||m.setAttribute("referrerPolicy",a),i||!n.customControls)m.setAttribute("data-poster",t.poster),t.media=ye(m,t.media);else{var f=me("div",{class:t.config.classNames.embedContainer,"data-poster":t.poster});f.appendChild(m),t.media=ye(f,t.media)}n.customControls||Ge(We(t.config.urls.vimeo.api,p)).then((function(e){!re(e)&&e.thumbnail_url&&bt.setPoster.call(t,e.thumbnail_url).catch((function(){}))})),t.embed=new window.Vimeo.Player(m,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return Tt.call(t,!0),t.embed.play()},t.media.pause=function(){return Tt.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0};var g=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return g},set:function(e){var n=t.embed,i=t.media,a=t.paused,r=t.volume,o=a&&!n.hasPlayed;i.seeking=!0,_e.call(t,i,"seeking"),Promise.resolve(o&&n.setVolume(0)).then((function(){return n.setCurrentTime(e)})).then((function(){return o&&n.pause()})).then((function(){return o&&n.setVolume(r)})).catch((function(){}))}});var y=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return y},set:function(e){t.embed.setPlaybackRate(e).then((function(){y=e,_e.call(t,t.media,"ratechange")})).catch((function(){t.options.speed=[1]}))}});var b=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return b},set:function(e){t.embed.setVolume(e).then((function(){b=e,_e.call(t,t.media,"volumechange")}))}});var v=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return v},set:function(e){var n=!!X(e)&&e;t.embed.setVolume(n?0:t.config.volume).then((function(){v=n,_e.call(t,t.media,"volumechange")}))}});var w,k=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return k},set:function(e){var n=X(e)?e:t.config.loop.active;t.embed.setLoop(n).then((function(){k=n}))}}),t.embed.getVideoUrl().then((function(e){w=e,at.setDownloadUrl.call(t)})).catch((function(t){e.debug.warn(t)})),Object.defineProperty(t.media,"currentSrc",{get:function(){return w}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then((function(n){var i=l(n,2),a=i[0],r=i[1];t.embed.ratio=[a,r],Ve.call(e)})),t.embed.setAutopause(t.config.autopause).then((function(e){t.config.autopause=e})),t.embed.getVideoTitle().then((function(n){t.config.title=n,bt.setTitle.call(e)})),t.embed.getCurrentTime().then((function(e){g=e,_e.call(t,t.media,"timeupdate")})),t.embed.getDuration().then((function(e){t.media.duration=e,_e.call(t,t.media,"durationchange")})),t.embed.getTextTracks().then((function(e){t.media.textTracks=e,st.setup.call(t)})),t.embed.on("cuechange",(function(e){var n=e.cues,i=(void 0===n?[]:n).map((function(e){return function(e){var t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)}));st.updateCues.call(t,i)})),t.embed.on("loaded",(function(){(t.embed.getPaused().then((function(e){Tt.call(t,!e),e||_e.call(t,t.media,"playing")})),Z(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1)})),t.embed.on("bufferstart",(function(){_e.call(t,t.media,"waiting")})),t.embed.on("bufferend",(function(){_e.call(t,t.media,"playing")})),t.embed.on("play",(function(){Tt.call(t,!0),_e.call(t,t.media,"playing")})),t.embed.on("pause",(function(){Tt.call(t,!1)})),t.embed.on("timeupdate",(function(e){t.media.seeking=!1,g=e.seconds,_e.call(t,t.media,"timeupdate")})),t.embed.on("progress",(function(e){t.media.buffered=e.percent,_e.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&_e.call(t,t.media,"canplaythrough"),t.embed.getDuration().then((function(e){e!==t.media.duration&&(t.media.duration=e,_e.call(t,t.media,"durationchange"))}))})),t.embed.on("seeked",(function(){t.media.seeking=!1,_e.call(t,t.media,"seeked")})),t.embed.on("ended",(function(){t.media.paused=!0,_e.call(t,t.media,"ended")})),t.embed.on("error",(function(e){t.media.error=e,_e.call(t,t.media,"error")})),n.customControls&&setTimeout((function(){return bt.build.call(t)}),0)}};function At(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,_e.call(this,this.media,e?"play":"pause"))}function St(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var Pt={setup:function(){var e=this;if(we(this.elements.wrapper,this.config.classNames.embed,!0),K(window.YT)&&$(window.YT.Player))Pt.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){$(t)&&t(),Pt.ready.call(e)},kt(this.config.urls.youtube.sdk).catch((function(t){e.debug.warn("YouTube API failed to load",t)}))}},getTitle:function(e){var t=this;Ge(We(this.config.urls.youtube.api,e)).then((function(e){if(K(e)){var n=e.title,i=e.height,a=e.width;t.config.title=n,bt.setTitle.call(t),t.embed.ratio=[a,i]}Ve.call(t)})).catch((function(){Ve.call(t)}))},ready:function(){var e=this,t=e.config.youtube,n=e.media&&e.media.getAttribute("id");if(re(n)||!n.startsWith("youtube-")){var i=e.media.getAttribute("src");re(i)&&(i=e.media.getAttribute(this.config.attributes.embed.id));var a,r,o=re(a=i)?null:a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:a,s=me("div",{id:(r=e.provider,"".concat(r,"-").concat(Math.floor(1e4*Math.random()))),"data-poster":t.customControls?e.poster:void 0});if(e.media=ye(s,e.media),t.customControls){var l=function(e){return"https://i.ytimg.com/vi/".concat(o,"/").concat(e,"default.jpg")};yt(l("maxres"),121).catch((function(){return yt(l("sd"),121)})).catch((function(){return yt(l("hq"))})).then((function(t){return bt.setPoster.call(e,t.src)})).then((function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")})).catch((function(){}))}e.embed=new window.YT.Player(e.media,{videoId:o,host:St(t),playerVars:ue({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui&&t.customControls?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},t),events:{onError:function(t){if(!e.media.error){var n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occured";e.media.error={code:n,message:i},_e.call(e,e.media,"error")}},onPlaybackRateChange:function(t){var n=t.target;e.media.playbackRate=n.getPlaybackRate(),_e.call(e,e.media,"ratechange")},onReady:function(n){if(!$(e.media.play)){var i=n.target;Pt.getTitle.call(e,o),e.media.play=function(){At.call(e,!0),i.playVideo()},e.media.pause=function(){At.call(e,!1),i.pauseVideo()},e.media.stop=function(){i.stopVideo()},e.media.duration=i.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(i.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,_e.call(e,e.media,"seeking"),i.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return i.getPlaybackRate()},set:function(e){i.setPlaybackRate(e)}});var a=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return a},set:function(t){a=t,i.setVolume(100*a),_e.call(e,e.media,"volumechange")}});var r=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return r},set:function(t){var n=X(t)?t:r;r=n,i[n?"mute":"unMute"](),i.setVolume(100*a),_e.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return i.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}});var s=i.getAvailablePlaybackRates();e.options.speed=s.filter((function(t){return e.config.speed.options.includes(t)})),e.supported.ui&&t.customControls&&e.media.setAttribute("tabindex",-1),_e.call(e,e.media,"timeupdate"),_e.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval((function(){e.media.buffered=i.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&_e.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),_e.call(e,e.media,"canplaythrough"))}),200),t.customControls&&setTimeout((function(){return bt.build.call(e)}),50)}},onStateChange:function(n){var i=n.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(n.data)&&(e.media.seeking=!1,_e.call(e,e.media,"seeked")),n.data){case-1:_e.call(e,e.media,"timeupdate"),e.media.buffered=i.getVideoLoadedFraction(),_e.call(e,e.media,"progress");break;case 0:At.call(e,!1),e.media.loop?(i.stopVideo(),i.playVideo()):_e.call(e,e.media,"ended");break;case 1:t.customControls&&!e.config.autoplay&&e.media.paused&&!e.embed.hasPlayed?e.media.pause():(At.call(e,!0),_e.call(e,e.media,"playing"),e.timers.playing=setInterval((function(){_e.call(e,e.media,"timeupdate")}),50),e.media.duration!==i.getDuration()&&(e.media.duration=i.getDuration(),_e.call(e,e.media,"durationchange")));break;case 2:e.muted||e.embed.unMute(),At.call(e,!1);break;case 3:_e.call(e,e.media,"waiting")}_e.call(e,e.elements.container,"statechange",!1,{code:n.data})}}})}}},Et={setup:function(){this.media?(we(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),we(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&we(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=me("div",{class:this.config.classNames.video}),de(this.media,this.elements.wrapper),this.elements.poster=me("div",{class:this.config.classNames.poster,hidden:""}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?Be.setup.call(this):this.isYouTube?Pt.setup.call(this):this.isVimeo&&Ct.setup.call(this)):this.debug.warn("No media element found!")}},Nt=function(){function e(n){var i=this;t(this,e),a(this,"load",(function(){i.enabled&&(K(window.google)&&K(window.google.ima)?i.ready():kt(i.player.config.urls.googleIMA.sdk).then((function(){i.ready()})).catch((function(){i.trigger("error",new Error("Google IMA SDK failed to load"))})))})),a(this,"ready",(function(){var e;i.enabled||((e=i).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),i.startSafetyTimer(12e3,"ready()"),i.managerPromise.then((function(){i.clearSafetyTimer("onAdsManagerLoaded()")})),i.listeners(),i.setupIMA()})),a(this,"setupIMA",(function(){i.elements.container=me("div",{class:i.player.config.classNames.ads}),i.player.elements.container.appendChild(i.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(i.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(i.player.config.playsinline),i.elements.displayContainer=new google.ima.AdDisplayContainer(i.elements.container,i.player.media),i.loader=new google.ima.AdsLoader(i.elements.displayContainer),i.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,(function(e){return i.onAdsManagerLoaded(e)}),!1),i.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(function(e){return i.onAdError(e)}),!1),i.requestAds()})),a(this,"requestAds",(function(){var e=i.player.elements.container;try{var t=new google.ima.AdsRequest;t.adTagUrl=i.tagUrl,t.linearAdSlotWidth=e.offsetWidth,t.linearAdSlotHeight=e.offsetHeight,t.nonLinearAdSlotWidth=e.offsetWidth,t.nonLinearAdSlotHeight=e.offsetHeight,t.forceNonLinearFullSlot=!1,t.setAdWillPlayMuted(!i.player.muted),i.loader.requestAds(t)}catch(e){i.onAdError(e)}})),a(this,"pollCountdown",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!e)return clearInterval(i.countdownTimer),void i.elements.container.removeAttribute("data-badge-text");var t=function(){var e=it(Math.max(i.manager.getRemainingTime(),0)),t="".concat($e("advertisement",i.player.config)," - ").concat(e);i.elements.container.setAttribute("data-badge-text",t)};i.countdownTimer=setInterval(t,100)})),a(this,"onAdsManagerLoaded",(function(e){if(i.enabled){var t=new google.ima.AdsRenderingSettings;t.restoreCustomPlaybackStateOnAdBreakComplete=!0,t.enablePreloading=!0,i.manager=e.getAdsManager(i.player,t),i.cuePoints=i.manager.getCuePoints(),i.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(function(e){return i.onAdError(e)})),Object.keys(google.ima.AdEvent.Type).forEach((function(e){i.manager.addEventListener(google.ima.AdEvent.Type[e],(function(e){return i.onAdEvent(e)}))})),i.trigger("loaded")}})),a(this,"addCuePoints",(function(){re(i.cuePoints)||i.cuePoints.forEach((function(e){if(0!==e&&-1!==e&&e<i.player.duration){var t=i.player.elements.progress;if(Z(t)){var n=100/i.player.duration*e,a=me("span",{class:i.player.config.classNames.cues});a.style.left="".concat(n.toString(),"%"),t.appendChild(a)}}}))})),a(this,"onAdEvent",(function(e){var t=i.player.elements.container,n=e.getAd(),a=e.getAdData();switch(function(e){_e.call(i.player,i.player.media,"ads".concat(e.replace(/_/g,"").toLowerCase()))}(e.type),e.type){case google.ima.AdEvent.Type.LOADED:i.trigger("loaded"),i.pollCountdown(!0),n.isLinear()||(n.width=t.offsetWidth,n.height=t.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:i.manager.setVolume(i.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:i.player.ended?i.loadAds():i.loader.contentComplete();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:i.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:i.pollCountdown(),i.resumeContent();break;case google.ima.AdEvent.Type.LOG:a.adError&&i.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))}})),a(this,"onAdError",(function(e){i.cancel(),i.player.debug.warn("Ads error",e)})),a(this,"listeners",(function(){var e,t=i.player.elements.container;i.player.on("canplay",(function(){i.addCuePoints()})),i.player.on("ended",(function(){i.loader.contentComplete()})),i.player.on("timeupdate",(function(){e=i.player.currentTime})),i.player.on("seeked",(function(){var t=i.player.currentTime;re(i.cuePoints)||i.cuePoints.forEach((function(n,a){e<n&&n<t&&(i.manager.discardAdBreak(),i.cuePoints.splice(a,1))}))})),window.addEventListener("resize",(function(){i.manager&&i.manager.resize(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL)}))})),a(this,"play",(function(){var e=i.player.elements.container;i.managerPromise||i.resumeContent(),i.managerPromise.then((function(){i.manager.setVolume(i.player.volume),i.elements.displayContainer.initialize();try{i.initialized||(i.manager.init(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL),i.manager.start()),i.initialized=!0}catch(e){i.onAdError(e)}})).catch((function(){}))})),a(this,"resumeContent",(function(){i.elements.container.style.zIndex="",i.playing=!1,qe(i.player.media.play())})),a(this,"pauseContent",(function(){i.elements.container.style.zIndex=3,i.playing=!0,i.player.media.pause()})),a(this,"cancel",(function(){i.initialized&&i.resumeContent(),i.trigger("error"),i.loadAds()})),a(this,"loadAds",(function(){i.managerPromise.then((function(){i.manager&&i.manager.destroy(),i.managerPromise=new Promise((function(e){i.on("loaded",e),i.player.debug.log(i.manager)})),i.initialized=!1,i.requestAds()})).catch((function(){}))})),a(this,"trigger",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=i.events[e];J(r)&&r.forEach((function(e){$(e)&&e.apply(i,n)}))})),a(this,"on",(function(e,t){return J(i.events[e])||(i.events[e]=[]),i.events[e].push(t),i})),a(this,"startSafetyTimer",(function(e,t){i.player.debug.log("Safety timer invoked from: ".concat(t)),i.safetyTimer=setTimeout((function(){i.cancel(),i.clearSafetyTimer("startSafetyTimer()")}),e)})),a(this,"clearSafetyTimer",(function(e){z(i.safetyTimer)||(i.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(i.safetyTimer),i.safetyTimer=null)})),this.player=n,this.config=n.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise((function(e,t){i.on("loaded",e),i.on("error",t)})),this.load()}return i(e,[{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!re(e.publisherId)||ae(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(ae(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(ot(t))}}]),e}(),Mt=function(e,t){var n={};return e>t.width/t.height?(n.width=t.width,n.height=1/e*t.width):(n.height=t.height,n.width=e*t.height),n},xt=function(){function e(n){var i=this;t(this,e),a(this,"load",(function(){i.player.elements.display.seekTooltip&&(i.player.elements.display.seekTooltip.hidden=i.enabled),i.enabled&&i.getThumbnails().then((function(){i.enabled&&(i.render(),i.determineContainerAutoSizing(),i.loaded=!0)}))})),a(this,"getThumbnails",(function(){return new Promise((function(e){var t=i.player.config.previewThumbnails.src;if(re(t))throw new Error("Missing previewThumbnails.src config attribute");var n=function(){i.thumbnails.sort((function(e,t){return e.height-t.height})),i.player.debug.log("Preview thumbnails",i.thumbnails),e()};if($(t))t((function(e){i.thumbnails=e,n()}));else{var a=(Q(t)?[t]:t).map((function(e){return i.getThumbnail(e)}));Promise.all(a).then(n)}}))})),a(this,"getThumbnail",(function(e){return new Promise((function(t){Ge(e).then((function(n){var a,r,o={frames:(a=n,r=[],a.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e){var t={};e.split(/\r\n|\n|\r/).forEach((function(e){if(Y(t.startTime)){if(!re(e.trim())&&re(t.text)){var n=e.trim().split("#xywh="),i=l(n,1);if(t.text=i[0],n[1]){var a=l(n[1].split(","),4);t.x=a[0],t.y=a[1],t.w=a[2],t.h=a[3]}}}else{var r=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);r&&(t.startTime=60*Number(r[1]||0)*60+60*Number(r[2])+Number(r[3])+Number("0.".concat(r[4])),t.endTime=60*Number(r[6]||0)*60+60*Number(r[7])+Number(r[8])+Number("0.".concat(r[9])))}})),t.text&&r.push(t)})),r),height:null,urlPrefix:""};o.frames[0].text.startsWith("/")||o.frames[0].text.startsWith("http://")||o.frames[0].text.startsWith("https://")||(o.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var s=new Image;s.onload=function(){o.height=s.naturalHeight,o.width=s.naturalWidth,i.thumbnails.push(o),t()},s.src=o.urlPrefix+o.frames[0].text}))}))})),a(this,"startMove",(function(e){if(i.loaded&&ee(e)&&["touchmove","mousemove"].includes(e.type)&&i.player.media.duration){if("touchmove"===e.type)i.seekTime=i.player.media.duration*(i.player.elements.inputs.seek.value/100);else{var t=i.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);i.seekTime=i.player.media.duration*(n/100),i.seekTime<0&&(i.seekTime=0),i.seekTime>i.player.media.duration-1&&(i.seekTime=i.player.media.duration-1),i.mousePosX=e.pageX,i.elements.thumb.time.innerText=it(i.seekTime)}i.showImageAtCurrentTime()}})),a(this,"endMove",(function(){i.toggleThumbContainer(!1,!0)})),a(this,"startScrubbing",(function(e){(z(e.button)||!1===e.button||0===e.button)&&(i.mouseDown=!0,i.player.media.duration&&(i.toggleScrubbingContainer(!0),i.toggleThumbContainer(!1,!0),i.showImageAtCurrentTime()))})),a(this,"endScrubbing",(function(){i.mouseDown=!1,Math.ceil(i.lastTime)===Math.ceil(i.player.media.currentTime)?i.toggleScrubbingContainer(!1):Oe.call(i.player,i.player.media,"timeupdate",(function(){i.mouseDown||i.toggleScrubbingContainer(!1)}))})),a(this,"listeners",(function(){i.player.on("play",(function(){i.toggleThumbContainer(!1,!0)})),i.player.on("seeked",(function(){i.toggleThumbContainer(!1)})),i.player.on("timeupdate",(function(){i.lastTime=i.player.media.currentTime}))})),a(this,"render",(function(){i.elements.thumb.container=me("div",{class:i.player.config.classNames.previewThumbnails.thumbContainer}),i.elements.thumb.imageContainer=me("div",{class:i.player.config.classNames.previewThumbnails.imageContainer}),i.elements.thumb.container.appendChild(i.elements.thumb.imageContainer);var e=me("div",{class:i.player.config.classNames.previewThumbnails.timeContainer});i.elements.thumb.time=me("span",{},"00:00"),e.appendChild(i.elements.thumb.time),i.elements.thumb.container.appendChild(e),Z(i.player.elements.progress)&&i.player.elements.progress.appendChild(i.elements.thumb.container),i.elements.scrubbing.container=me("div",{class:i.player.config.classNames.previewThumbnails.scrubbingContainer}),i.player.elements.wrapper.appendChild(i.elements.scrubbing.container)})),a(this,"destroy",(function(){i.elements.thumb.container&&i.elements.thumb.container.remove(),i.elements.scrubbing.container&&i.elements.scrubbing.container.remove()})),a(this,"showImageAtCurrentTime",(function(){i.mouseDown?i.setScrubbingContainerSize():i.setThumbContainerSizeAndPos();var e=i.thumbnails[0].frames.findIndex((function(e){return i.seekTime>=e.startTime&&i.seekTime<=e.endTime})),t=e>=0,n=0;i.mouseDown||i.toggleThumbContainer(t),t&&(i.thumbnails.forEach((function(t,a){i.loadedImages.includes(t.frames[e].text)&&(n=a)})),e!==i.showingThumb&&(i.showingThumb=e,i.loadImage(n)))})),a(this,"loadImage",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=i.showingThumb,n=i.thumbnails[e],a=n.urlPrefix,r=n.frames[t],o=n.frames[t].text,s=a+o;if(i.currentImageElement&&i.currentImageElement.dataset.filename===o)i.showImage(i.currentImageElement,r,e,t,o,!1),i.currentImageElement.dataset.index=t,i.removeOldImages(i.currentImageElement);else{i.loadingImage&&i.usingSprites&&(i.loadingImage.onload=null);var l=new Image;l.src=s,l.dataset.index=t,l.dataset.filename=o,i.showingThumbFilename=o,i.player.debug.log("Loading image: ".concat(s)),l.onload=function(){return i.showImage(l,r,e,t,o,!0)},i.loadingImage=l,i.removeOldImages(l)}})),a(this,"showImage",(function(e,t,n,a,r){var o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];i.player.debug.log("Showing thumb: ".concat(r,". num: ").concat(a,". qual: ").concat(n,". newimg: ").concat(o)),i.setImageSizeAndOffset(e,t),o&&(i.currentImageContainer.appendChild(e),i.currentImageElement=e,i.loadedImages.includes(r)||i.loadedImages.push(r)),i.preloadNearby(a,!0).then(i.preloadNearby(a,!1)).then(i.getHigherQuality(n,e,t,r))})),a(this,"removeOldImages",(function(e){Array.from(i.currentImageContainer.children).forEach((function(t){if("img"===t.tagName.toLowerCase()){var n=i.usingSprites?500:1e3;if(t.dataset.index!==e.dataset.index&&!t.dataset.deleting){t.dataset.deleting=!0;var a=i.currentImageContainer;setTimeout((function(){a.removeChild(t),i.player.debug.log("Removing thumb: ".concat(t.dataset.filename))}),n)}}}))})),a(this,"preloadNearby",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise((function(n){setTimeout((function(){var a=i.thumbnails[0].frames[e].text;if(i.showingThumbFilename===a){var r;r=t?i.thumbnails[0].frames.slice(e):i.thumbnails[0].frames.slice(0,e).reverse();var o=!1;r.forEach((function(e){var t=e.text;if(t!==a&&!i.loadedImages.includes(t)){o=!0,i.player.debug.log("Preloading thumb filename: ".concat(t));var r=i.thumbnails[0].urlPrefix+t,s=new Image;s.src=r,s.onload=function(){i.player.debug.log("Preloaded thumb filename: ".concat(t)),i.loadedImages.includes(t)||i.loadedImages.push(t),n()}}})),o||n()}}),300)}))})),a(this,"getHigherQuality",(function(e,t,n,a){if(e<i.thumbnails.length-1){var r=t.naturalHeight;i.usingSprites&&(r=n.h),r<i.thumbContainerHeight&&setTimeout((function(){i.showingThumbFilename===a&&(i.player.debug.log("Showing higher quality thumb for: ".concat(a)),i.loadImage(e+1))}),300)}})),a(this,"toggleThumbContainer",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i.player.config.classNames.previewThumbnails.thumbContainerShown;i.elements.thumb.container.classList.toggle(n,e),!e&&t&&(i.showingThumb=null,i.showingThumbFilename=null)})),a(this,"toggleScrubbingContainer",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=i.player.config.classNames.previewThumbnails.scrubbingContainerShown;i.elements.scrubbing.container.classList.toggle(t,e),e||(i.showingThumb=null,i.showingThumbFilename=null)})),a(this,"determineContainerAutoSizing",(function(){(i.elements.thumb.imageContainer.clientHeight>20||i.elements.thumb.imageContainer.clientWidth>20)&&(i.sizeSpecifiedInCSS=!0)})),a(this,"setThumbContainerSizeAndPos",(function(){if(i.sizeSpecifiedInCSS){if(i.elements.thumb.imageContainer.clientHeight>20&&i.elements.thumb.imageContainer.clientWidth<20){var e=Math.floor(i.elements.thumb.imageContainer.clientHeight*i.thumbAspectRatio);i.elements.thumb.imageContainer.style.width="".concat(e,"px")}else if(i.elements.thumb.imageContainer.clientHeight<20&&i.elements.thumb.imageContainer.clientWidth>20){var t=Math.floor(i.elements.thumb.imageContainer.clientWidth/i.thumbAspectRatio);i.elements.thumb.imageContainer.style.height="".concat(t,"px")}}else{var n=Math.floor(i.thumbContainerHeight*i.thumbAspectRatio);i.elements.thumb.imageContainer.style.height="".concat(i.thumbContainerHeight,"px"),i.elements.thumb.imageContainer.style.width="".concat(n,"px")}i.setThumbContainerPos()})),a(this,"setThumbContainerPos",(function(){var e=i.player.elements.progress.getBoundingClientRect(),t=i.player.elements.container.getBoundingClientRect(),n=i.elements.thumb.container,a=t.left-e.left+10,r=t.right-e.left-n.clientWidth-10,o=i.mousePosX-e.left-n.clientWidth/2;o<a&&(o=a),o>r&&(o=r),n.style.left="".concat(o,"px")})),a(this,"setScrubbingContainerSize",(function(){var e=Mt(i.thumbAspectRatio,{width:i.player.media.clientWidth,height:i.player.media.clientHeight}),t=e.width,n=e.height;i.elements.scrubbing.container.style.width="".concat(t,"px"),i.elements.scrubbing.container.style.height="".concat(n,"px")})),a(this,"setImageSizeAndOffset",(function(e,t){if(i.usingSprites){var n=i.thumbContainerHeight/t.h;e.style.height="".concat(e.naturalHeight*n,"px"),e.style.width="".concat(e.naturalWidth*n,"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}})),this.player=n,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return i(e,[{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?Mt(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight}).height:this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),e}(),It={insertElements:function(e,t){var n=this;Q(t)?pe(e,this.media,{src:t}):J(t)&&t.forEach((function(t){pe(e,n.media,t)}))},change:function(e){var t=this;ce(e,"sources.length")?(Be.cancelRequests.call(this),this.destroy.call(this,(function(){t.options.quality=[],fe(t.media),t.media=null,Z(t.elements.container)&&t.elements.container.removeAttribute("class");var n=e.sources,i=e.type,a=l(n,1)[0],r=a.provider,o=void 0===r?dt.html5:r,s=a.src,c="html5"===o?i:"div",u="html5"===o?{}:{src:s};Object.assign(t,{provider:o,type:i,supported:Ne.check(i,o,t.config.playsinline),media:me(c,u)}),t.elements.container.appendChild(t.media),X(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),re(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),bt.addStyleHook.call(t),t.isHTML5&&It.insertElements.call(t,"source",n),t.config.title=e.title,Et.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&It.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&bt.build.call(t),t.isHTML5&&t.media.load(),re(e.previewThumbnails)||(Object.assign(t.config.previewThumbnails,e.previewThumbnails),t.previewThumbnails&&t.previewThumbnails.loaded&&(t.previewThumbnails.destroy(),t.previewThumbnails=null),t.config.previewThumbnails.enabled&&(t.previewThumbnails=new xt(t))),t.fullscreen.update()}),!0)):this.debug.warn("Invalid source format")}};var Lt,Ot=function(){function e(n,i){var r=this;if(t(this,e),a(this,"play",(function(){return $(r.media.play)?(r.ads&&r.ads.enabled&&r.ads.managerPromise.then((function(){return r.ads.play()})).catch((function(){return qe(r.media.play())})),r.media.play()):null})),a(this,"pause",(function(){return r.playing&&$(r.media.pause)?r.media.pause():null})),a(this,"togglePlay",(function(e){return(X(e)?e:!r.playing)?r.play():r.pause()})),a(this,"stop",(function(){r.isHTML5?(r.pause(),r.restart()):$(r.media.stop)&&r.media.stop()})),a(this,"restart",(function(){r.currentTime=0})),a(this,"rewind",(function(e){r.currentTime-=Y(e)?e:r.config.seekTime})),a(this,"forward",(function(e){r.currentTime+=Y(e)?e:r.config.seekTime})),a(this,"increaseVolume",(function(e){var t=r.media.muted?0:r.volume;r.volume=t+(Y(e)?e:0)})),a(this,"decreaseVolume",(function(e){r.increaseVolume(-e)})),a(this,"airplay",(function(){Ne.airplay&&r.media.webkitShowPlaybackTargetPicker()})),a(this,"toggleControls",(function(e){if(r.supported.ui&&!r.isAudio){var t=ke(r.elements.container,r.config.classNames.hideControls),n=void 0===e?void 0:!e,i=we(r.elements.container,r.config.classNames.hideControls,n);if(i&&J(r.config.controls)&&r.config.controls.includes("settings")&&!re(r.config.settings)&&at.toggleMenu.call(r,!1),i!==t){var a=i?"controlshidden":"controlsshown";_e.call(r,r.media,a)}return!i}return!1})),a(this,"on",(function(e,t){Ie.call(r,r.elements.container,e,t)})),a(this,"once",(function(e,t){Oe.call(r,r.elements.container,e,t)})),a(this,"off",(function(e,t){Le(r.elements.container,e,t)})),a(this,"destroy",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r.ready){var n=function(){document.body.style.overflow="",r.embed=null,t?(Object.keys(r.elements).length&&(fe(r.elements.buttons.play),fe(r.elements.captions),fe(r.elements.controls),fe(r.elements.wrapper),r.elements.buttons.play=null,r.elements.captions=null,r.elements.controls=null,r.elements.wrapper=null),$(e)&&e()):(je.call(r),Be.cancelRequests.call(r),ye(r.elements.original,r.elements.container),_e.call(r,r.elements.original,"destroyed",!0),$(e)&&e.call(r.elements.original),r.ready=!1,setTimeout((function(){r.elements=null,r.media=null}),200))};r.stop(),clearTimeout(r.timers.loading),clearTimeout(r.timers.controls),clearTimeout(r.timers.resized),r.isHTML5?(bt.toggleNativeControls.call(r,!0),n()):r.isYouTube?(clearInterval(r.timers.buffering),clearInterval(r.timers.playing),null!==r.embed&&$(r.embed.destroy)&&r.embed.destroy(),n()):r.isVimeo&&(null!==r.embed&&r.embed.unload().then(n),setTimeout(n,200))}})),a(this,"supports",(function(e){return Ne.mime.call(r,e)})),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=Ne.touch,this.media=n,Q(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||G(this.media)||J(this.media))&&(this.media=this.media[0]),this.config=ue({},lt,e.defaults,i||{},function(){try{return JSON.parse(r.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,fullscreen:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new ft(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",Ne),!z(this.media)&&Z(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(Ne.check().api){var o=this.media.cloneNode(!0);o.autoplay=!1,this.elements.original=o;var s=this.media.tagName.toLowerCase(),l=null,c=null;switch(s){case"div":if(l=this.media.querySelector("iframe"),Z(l)){if(c=rt(l.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?dt.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?dt.vimeo:null}(c.toString()),this.elements.container=this.media,this.media=l,this.elements.container.className="",c.search.length){var u=["1","true"];u.includes(c.searchParams.get("autoplay"))&&(this.config.autoplay=!0),u.includes(c.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=u.includes(c.searchParams.get("playsinline")),this.config.youtube.hl=c.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(re(this.provider)||!Object.values(dt).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=mt;break;case"video":case"audio":this.type=s,this.provider=dt.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=Ne.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new vt(this),this.storage=new Je(this),this.media.plyr=this,Z(this.elements.container)||(this.elements.container=me("div",{tabindex:0}),de(this.media,this.elements.container)),bt.migrateStyles.call(this),bt.addStyleHook.call(this),Et.setup.call(this),this.config.debug&&Ie.call(this,this.elements.container,this.config.events.join(" "),(function(e){r.debug.log("event: ".concat(e.type))})),this.fullscreen=new gt(this),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&bt.build.call(this),this.listeners.container(),this.listeners.global(),this.config.ads.enabled&&(this.ads=new Nt(this)),this.isHTML5&&this.config.autoplay&&this.once("canplay",(function(){return qe(r.play())})),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new xt(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return i(e,[{key:"toggleCaptions",value:function(e){st.toggle.call(this,e,!1)}},{key:"isHTML5",get:function(){return this.provider===dt.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===dt.youtube}},{key:"isVimeo",get:function(){return this.provider===dt.vimeo}},{key:"isVideo",get:function(){return this.type===mt}},{key:"isAudio",get:function(){return this.type===ht}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=Y(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return Y(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=Y(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;Q(t)&&(t=Number(t)),Y(t)||(t=this.storage.get("volume")),Y(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!re(e)&&this.muted&&t>0&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;X(t)||(t=this.storage.get("muted")),X(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;Y(e)&&(n=e),Y(n)||(n=this.storage.get("speed")),Y(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,a=this.maximumSpeed;n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),n)}(n,i,a),this.config.speed.selected=n,setTimeout((function(){t.media.playbackRate=n}),0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,c(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,c(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i=[!re(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(Y),a=!0;if(!n.includes(i)){var r=function(e,t){return J(e)&&e.length?e.reduce((function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e})):null}(n,i);this.debug.warn("Unsupported quality option: ".concat(i,", using ").concat(r," instead")),i=r,a=!1}t.selected=i,this.media.quality=i,a&&this.storage.set({quality:i})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=X(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){It.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return ae(e)?e:this.source},set:function(e){ae(e)&&(this.config.urls.download=e,at.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?bt.setPoster.call(this,e,!1).catch((function(){})):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster")||this.media.getAttribute("data-poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=Fe(Re.call(this));return J(e)?e.join(":"):e},set:function(e){this.isVideo?Q(e)&&He(e)?(this.config.ratio=e,Ve.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=X(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){st.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){st.setLanguage.call(this,e,!1)},get:function(){return(st.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(Ne.pip){var t=X(e)?e:!this.pip;$(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?ct:ut),$(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return Ne.pip?re(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===ct:null}}],[{key:"supported",value:function(e,t,n){return Ne.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return Ze(e,t)}},{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return Q(t)?i=Array.from(document.querySelectorAll(t)):G(t)?i=Array.from(t):J(t)&&(i=t.filter(Z)),re(i)?null:i.map((function(t){return new e(t,n)}))}}]),e}();return Ot.defaults=(Lt=lt,JSON.parse(JSON.stringify(Lt))),Ot}));
//# sourceMappingURL=plyr.min.js.map


// Magnific Popup

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(a){var u,r,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],f=Array.prototype.slice;if(a.event.fixHooks)for(var n=e.length;n;)a.event.fixHooks[e[--n]]=a.event.mouseHooks;var d=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],i,!1);else this.onmousewheel=i;a.data(this,"mousewheel-line-height",d.getLineHeight(this)),a.data(this,"mousewheel-page-height",d.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],i,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=a(e),e=t["offsetParent"in a.fn?"offsetParent":"parent"]();return e.length||(e=a("body")),parseInt(e.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return a(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function i(e){var t,n=e||window.event,i=f.call(arguments,1),o=0,l=0,s=0,h=0;if((e=a.event.fix(n)).type="mousewheel","detail"in n&&(s=-1*n.detail),"wheelDelta"in n&&(s=n.wheelDelta),"wheelDeltaY"in n&&(s=n.wheelDeltaY),"wheelDeltaX"in n&&(l=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in n&&(o=s=-1*n.deltaY),"deltaX"in n&&(l=n.deltaX,0===s&&(o=-1*l)),0!==s||0!==l)return 1===n.deltaMode?(o*=t=a.data(this,"mousewheel-line-height"),s*=t,l*=t):2===n.deltaMode&&(o*=t=a.data(this,"mousewheel-page-height"),s*=t,l*=t),h=Math.max(Math.abs(s),Math.abs(l)),(!r||h<r)&&c(n,r=h)&&(r/=40),c(n,h)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/r),l=Math[1<=l?"floor":"ceil"](l/r),s=Math[1<=s?"floor":"ceil"](s/r),d.settings.normalizeOffset&&this.getBoundingClientRect&&(h=this.getBoundingClientRect(),e.offsetX=e.clientX-h.left,e.offsetY=e.clientY-h.top),e.deltaX=l,e.deltaY=s,e.deltaFactor=r,e.deltaMode=0,i.unshift(e,o,l,s),u&&window.clearTimeout(u),u=window.setTimeout(w,200),(a.event.dispatch||a.event.handle).apply(this,i)}function w(){r=null}function c(e,t){return d.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}a.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});
