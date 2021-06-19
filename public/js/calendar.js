var FullCalendar = function (e) {
    "use strict";
    var t = function (e, n) {
        return (t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, n)
    };

    function n(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function r() {
            this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }

    var r = function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function o(e, t) {
        for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
        return e
    }

    var i, a, s, l, u, c = {},
    d = [],
    p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function f(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function h(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function v(e, t, n) {
        var r, o, i, a = arguments,
            s = {};
        for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3)
            for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
        if (null != n && (s.children = n), "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return g(e, s, r, o, null)
    }

    function g(e, t, n, r, o) {
        var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++i.__v : o
        };
        return null != i.vnode && i.vnode(a), a
    }

    function m(e) {
        return e.children
    }

    function y(e, t) {
        this.props = e, this.context = t
    }

    function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? S(e) : null
    }

    function E(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return E(e)
        }
    }

    function b(e) {
        (!e.__d && (e.__d = !0) && a.push(e) && !C.__r++ || l !== i.debounceRendering) && ((l = i.debounceRendering) || s)(C)
    }

    function C() {
        for (var e; C.__r = a.length;) e = a.sort((function (e, t) {
            return e.__v.__b - t.__v.__b
        })), a = [], e.some((function (e) {
            var t, n, r, o, i, a;
            e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = f({}, o)).__v = o.__v + 1, P(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? S(o) : i, o.__h), I(n, o), o.__e != i && E(o)))
        }))
    }

    function D(e, t, n, r, o, i, a, s, l, u) {
        var p, f, h, v, y, E, b, C = r && r.__k || d,
            D = C.length;
        for (n.__k = [], p = 0; p < t.length; p++)
            if (null != (v = n.__k[p] = null == (v = t[p]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? g(null, v, null, null, v) : Array.isArray(v) ? g(m, {
                    children: v
                }, null, null, null) : v.__b > 0 ? g(v.type, v.props, v.key, null, v.__v) : v)) {
                if (v.__ = n, v.__b = n.__b + 1, null === (h = C[p]) || h && v.key == h.key && v.type === h.type) C[p] = void 0;
                else
                    for (f = 0; f < D; f++) {
                        if ((h = C[f]) && v.key == h.key && v.type === h.type) {
                            C[f] = void 0;
                            break
                        }
                        h = null
                    }
                P(e, v, h = h || c, o, i, a, s, l, u), y = v.__e, (f = v.ref) && h.ref != f && (b || (b = []), h.ref && b.push(h.ref, null, v), b.push(f, v.__c || y, v)), null != y ? (null == E && (E = y), "function" == typeof v.type && null != v.__k && v.__k === h.__k ? v.__d = l = R(v, l, e) : l = T(e, v, h, C, y, l), u || "option" !== n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && h.__e == l && l.parentNode != e && (l = S(h))
            }
        for (n.__e = E, p = D; p--;) null != C[p] && ("function" == typeof n.type && null != C[p].__e && C[p].__e == n.__d && (n.__d = S(r, p + 1)), O(C[p], C[p]));
        if (b)
            for (p = 0; p < b.length; p++) H(b[p], b[++p], b[++p])
    }

    function R(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++)(o = e.__k[r]) && (o.__ = e, t = "function" == typeof o.type ? R(o, t, n) : T(n, o, o, e.__k, o.__e, t));
        return t
    }

    function w(e, t) {
        return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) {
            w(e, t)
        })) : t.push(e)), t
    }

    function T(e, t, n, r, o, i) {
        var a, s, l;
        if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
        else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
            else {
                for (s = i, l = 0;
                    (s = s.nextSibling) && l < r.length; l += 2)
                    if (s == o) break e;
                e.insertBefore(o, i), a = i
            }
        return void 0 !== a ? a : o.nextSibling
    }

    function _(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px"
    }

    function x(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || _(e.style, t, "");
                if (n)
                    for (t in n) r && n[t] === r[t] || _(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? M : k, i) : e.removeEventListener(t, i ? M : k, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }

    function k(e) {
        this.l[e.type + !1](i.event ? i.event(e) : e)
    }

    function M(e) {
        this.l[e.type + !0](i.event ? i.event(e) : e)
    }

    function P(e, t, n, r, o, a, s, l, u) {
        var c, d, p, h, v, g, S, E, b, C, R, w = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, a = [l]), (c = i.__b) && c(t);
        try {
            e: if ("function" == typeof w) {
                if (E = t.props, b = (c = w.contextType) && r[c.__c], C = c ? b ? b.props.value : c.__ : r, n.__c ? S = (d = t.__c = n.__c).__ = d.__E : ("prototype" in w && w.prototype.render ? t.__c = d = new w(E, C) : (t.__c = d = new y(E, C), d.constructor = w, d.render = A), b && b.sub(d), d.props = E, d.state || (d.state = {}), d.context = C, d.__n = r, p = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != w.getDerivedStateFromProps && (d.__s == d.state && (d.__s = f({}, d.__s)), f(d.__s, w.getDerivedStateFromProps(E, d.__s))), h = d.props, v = d.state, p) null == w.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (null == w.getDerivedStateFromProps && E !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(E, C), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(E, d.__s, C) || t.__v === n.__v) {
                        d.props = E, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function (e) {
                            e && (e.__ = t)
                        })), d.__h.length && s.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(E, d.__s, C), null != d.componentDidUpdate && d.__h.push((function () {
                        d.componentDidUpdate(h, v, g)
                    }))
                }
                d.context = C, d.props = E, d.state = d.__s, (c = i.__r) && c(t), d.__d = !1, d.__v = t, d.__P = e, c = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (r = f(f({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(h, v)), R = null != c && c.type === m && null == c.key ? c.props.children : c, D(e, Array.isArray(R) ? R : [R], t, n, r, o, a, s, l, u), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), S && (d.__E = d.__ = null), d.__e = !1
            } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, r, o, a, s, u);
            (c = i.diffed) && c(t)
        }
        catch (e) {
            t.__v = null, (u || null != a) && (t.__e = l, t.__h = !!u, a[a.indexOf(l)] = null), i.__e(e, t, n)
        }
    }

    function I(e, t) {
        i.__c && i.__c(t, e), e.some((function (t) {
            try {
                e = t.__h, t.__h = [], e.some((function (e) {
                    e.call(t)
                }))
            } catch (e) {
                i.__e(e, t.__v)
            }
        }))
    }

    function N(e, t, n, r, o, i, a, s) {
        var l, u, p, f, v = n.props,
            g = t.props,
            m = t.type,
            y = 0;
        if ("svg" === m && (o = !0), null != i)
            for (; y < i.length; y++)
                if ((l = i[y]) && (l === e || (m ? l.localName == m : 3 == l.nodeType))) {
                    e = l, i[y] = null;
                    break
                }
        if (null == e) {
            if (null === m) return document.createTextNode(g);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, g.is && g), i = null, s = !1
        }
        if (null === m) v === g || s && e.data === g || (e.data = g);
        else {
            if (i = i && d.slice.call(e.childNodes), u = (v = n.props || c).dangerouslySetInnerHTML, p = g.dangerouslySetInnerHTML, !s) {
                if (null != i)
                    for (v = {}, f = 0; f < e.attributes.length; f++) v[e.attributes[f].name] = e.attributes[f].value;
                (p || u) && (p && (u && p.__html == u.__html || p.__html === e.innerHTML) || (e.innerHTML = p && p.__html || ""))
            }
            if (function (e, t, n, r, o) {
                    var i;
                    for (i in n) "children" === i || "key" === i || i in t || x(e, i, null, n[i], r);
                    for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || x(e, i, t[i], n[i], r)
                }(e, g, v, o, s), p) t.__k = [];
            else if (y = t.props.children, D(e, Array.isArray(y) ? y : [y], t, n, r, o && "foreignObject" !== m, i, a, e.firstChild, s), null != i)
                for (y = i.length; y--;) null != i[y] && h(i[y]);
            s || ("value" in g && void 0 !== (y = g.value) && (y !== e.value || "progress" === m && !y) && x(e, "value", y, v.value, !1), "checked" in g && void 0 !== (y = g.checked) && y !== e.checked && x(e, "checked", y, v.checked, !1))
        }
        return e
    }

    function H(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            i.__e(e, n)
        }
    }

    function O(e, t, n) {
        var r, o, a;
        if (i.unmount && i.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                i.__e(e, t)
            }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (a = 0; a < r.length; a++) r[a] && O(r[a], t, n);
        null != o && h(o)
    }

    function A(e, t, n) {
        return this.constructor(e, n)
    }

    function W(e, t, n) {
        var r, o, a;
        i.__ && i.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, a = [], P(t, e = (!r && n || t).__k = v(m, null, [e]), o || c, c, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? d.slice.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r), I(a, e)
    }
    
    i = {
        __e: function (e, t) {
            for (var n, r, o; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        },
        __v: 0
    }, y.prototype.setState = function (e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof e && (e = e(f({}, n), this.props)), e && f(n, e), null != e && this.__v && (t && this.__h.push(t), b(this))
    }, y.prototype.forceUpdate = function (e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), b(this))
    }, y.prototype.render = m, a = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, C.__r = 0, u = 0;
    var L, U = [],
        B = i.__b,
        z = i.__r,
        V = i.diffed,
        F = i.__c,
        G = i.unmount;

    function j() {
        U.forEach((function (e) {
            if (e.__P) try {
                e.__H.__h.forEach(Y), e.__H.__h.forEach(Z), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], i.__e(t, e.__v)
            }
        })), U = []
    }
    i.__b = function (e) {
        B && B(e)
    }, i.__r = function (e) {
        z && z(e);
        var t = e.__c.__H;
        t && (t.__h.forEach(Y), t.__h.forEach(Z), t.__h = [])
    }, i.diffed = function (e) {
        V && V(e);
        var t = e.__c;
        t && t.__H && t.__H.__h.length && (1 !== U.push(t) && L === i.requestAnimationFrame || ((L = i.requestAnimationFrame) || function (e) {
            var t, n = function () {
                    clearTimeout(r), q && cancelAnimationFrame(t), setTimeout(e)
                },
                r = setTimeout(n, 100);
            q && (t = requestAnimationFrame(n))
        })(j))
    }, i.__c = function (e, t) {
        t.some((function (e) {
            try {
                e.__h.forEach(Y), e.__h = e.__h.filter((function (e) {
                    return !e.__ || Z(e)
                }))
            } catch (n) {
                t.some((function (e) {
                    e.__h && (e.__h = [])
                })), t = [], i.__e(n, e.__v)
            }
        })), F && F(e, t)
    }, i.unmount = function (e) {
        G && G(e);
        var t = e.__c;
        if (t && t.__H) try {
            t.__H.__.forEach(Y)
        } catch (e) {
            i.__e(e, t.__v)
        }
    };
    var q = "function" == typeof requestAnimationFrame;

    function Y(e) {
        "function" == typeof e.__c && e.__c()
    }

    function Z(e) {
        e.__c = e.__()
    }

    function X(e, t) {
        for (var n in e)
            if ("__source" !== n && !(n in t)) return !0;
        for (var r in t)
            if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1
    }

    function K(e) {
        this.props = e
    }(K.prototype = new y).isPureReactComponent = !0, K.prototype.shouldComponentUpdate = function (e, t) {
        return X(this.props, e) || X(this.state, t)
    };
    var $ = i.__b;
    i.__b = function (e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), $ && $(e)
    };
    var J = i.__e;
    i.__e = function (e, t, n) {
        if (e.then)
            for (var r, o = t; o = o.__;)
                if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
        J(e, t, n)
    };
    var Q = i.unmount;

    function ee() {
        this.__u = 0, this.t = null, this.__b = null
    }

    function te(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e)
    }

    function ne() {
        this.u = null, this.o = null
    }
    i.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Q && Q(e)
    }, (ee.prototype = new y).__c = function (e, t) {
        var n = t.__c,
            r = this;
        null == r.t && (r.t = []), r.t.push(n);
        var o = te(r.__v),
            i = !1,
            a = function () {
                i || (i = !0, n.__R = null, o ? o(s) : s())
            };
        n.__R = a;
        var s = function () {
                if (!--r.__u) {
                    if (r.state.__e) {
                        var e = r.state.__e;
                        r.__v.__k[0] = function e(t, n, r) {
                            return t && (t.__v = null, t.__k = t.__k && t.__k.map((function (t) {
                                return e(t, n, r)
                            })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                        }(e, e.__c.__P, e.__c.__O)
                    }
                    var t;
                    for (r.setState({
                            __e: r.__b = null
                        }); t = r.t.pop();) t.forceUpdate()
                }
            },
            l = !0 === t.__h;
        r.__u++ || l || r.setState({
            __e: r.__b = r.__v.__k[0]
        }), e.then(a, a)
    }, ee.prototype.componentWillUnmount = function () {
        this.t = []
    }, ee.prototype.render = function (e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    r = this.__v.__k[0].__c;
                this.__v.__k[0] = function e(t, n, r) {
                    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function (e) {
                        "function" == typeof e.__c && e.__c()
                    })), t.__c.__H = null), null != (t = function (e, t) {
                        for (var n in t) e[n] = t[n];
                        return e
                    }({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function (t) {
                        return e(t, n, r)
                    }))), t
                }(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var o = t.__e && v(m, null, e.fallback);
        return o && (o.__h = null), [v(m, null, t.__e ? null : e.children), o]
    };
    var re = function (e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
            for (n = e.u; n;) {
                for (; n.length > 3;) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2]
            }
    };

    function oe(e) {
        return this.getChildContext = function () {
            return e.context
        }, e.children
    }

    function ie(e) {
        var t = this,
            n = e.i;
        t.componentWillUnmount = function () {
            W(null, t.l), t.l = null, t.i = null
        }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (e) {
                this.childNodes.push(e), t.i.appendChild(e)
            },
            insertBefore: function (e, n) {
                this.childNodes.push(e), t.i.appendChild(e)
            },
            removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
            }
        }), W(v(oe, {
            context: t.context
        }, e.__v), t.l)) : t.l && t.componentWillUnmount()
    }(ne.prototype = new y).__e = function (e) {
        var t = this,
            n = te(t.__v),
            r = t.o.get(e);
        return r[0]++,
            function (o) {
                var i = function () {
                    t.props.revealOrder ? (r.push(o), re(t, e, r)) : o()
                };
                n ? n(i) : i()
            }
    }, ne.prototype.render = function (e) {
        this.u = null, this.o = new Map;
        var t = w(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
        return e.children
    }, ne.prototype.componentDidUpdate = ne.prototype.componentDidMount = function () {
        var e = this;
        this.o.forEach((function (t, n) {
            re(e, n, t)
        }))
    };
    var ae = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        se = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        le = function (e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
        };
    y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
        Object.defineProperty(y.prototype, e, {
            configurable: !0,
            get: function () {
                return this["UNSAFE_" + e]
            },
            set: function (t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    }));
    var ue = i.event;

    function ce() {}

    function de() {
        return this.cancelBubble
    }

    function pe() {
        return this.defaultPrevented
    }
    i.event = function (e) {
        return ue && (e = ue(e)), e.persist = ce, e.isPropagationStopped = de, e.isDefaultPrevented = pe, e.nativeEvent = e
    };
    var fe = {
            configurable: !0,
            get: function () {
                return this.class
            }
        },
        he = i.vnode;
    i.vnode = function (e) {
        var t = e.type,
            n = e.props,
            r = n;
        if ("string" == typeof t) {
            for (var o in r = {}, n) {
                var i = n[o];
                "value" === o && "defaultValue" in n && null == i || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !le(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : se.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i)
            }
            "select" == t && r.multiple && Array.isArray(r.value) && (r.value = w(n.children).forEach((function (e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value)
            }))), "select" == t && null != r.defaultValue && (r.value = w(n.children).forEach((function (e) {
                e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
            }))), e.props = r
        }
        t && n.class != n.className && (fe.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", fe)), e.$$typeof = ae, he && he(e)
    };
    var ve = i.__r;
    i.__r = function (e) {
        ve && ve(e)
    }, "object" == typeof performance && "function" == typeof performance.now && performance.now.bind(performance);
    var ge = "undefined" != typeof globalThis ? globalThis : window;
    ge.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : ge.FullCalendarVDom = {
        Component: y,
        createElement: v,
        render: W,
        createRef: function () {
            return {
                current: null
            }
        },
        Fragment: m,
        createContext: function (e) {
            var t = function (e, t) {
                    var n = {
                        __c: t = "__cC" + u++,
                        __: e,
                        Consumer: function (e, t) {
                            return e.children(t)
                        },
                        Provider: function (e) {
                            var n, r;
                            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
                                return r
                            }, this.shouldComponentUpdate = function (e) {
                                this.props.value !== e.value && n.some(b)
                            }, this.sub = function (e) {
                                n.push(e);
                                var t = e.componentWillUnmount;
                                e.componentWillUnmount = function () {
                                    n.splice(n.indexOf(e), 1), t && t.call(e)
                                }
                            }), e.children
                        }
                    };
                    return n.Provider.__ = n.Consumer.contextType = n
                }(e),
                n = t.Provider;
            return t.Provider = function () {
                var e = this,
                    t = !this.getChildContext,
                    r = n.apply(this, arguments);
                if (t) {
                    var o = [];
                    this.shouldComponentUpdate = function (t) {
                        e.props.value !== t.value && o.forEach((function (e) {
                            e.context = t.value, e.forceUpdate()
                        }))
                    }, this.sub = function (e) {
                        o.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            o.splice(o.indexOf(e), 1), t && t.call(e)
                        }
                    }
                }
                return r
            }, t
        },
        createPortal: function (e, t) {
            return v(ie, {
                __v: e,
                i: t
            })
        },
        flushToDom: function () {
            var e = i.debounceRendering,
                t = [];

            function n(e) {
                t.push(e)
            }
            i.debounceRendering = n, W(v(me, {}), document.createElement("div"));
            for (; t.length;) t.shift()();
            i.debounceRendering = e
        },
        unmountComponentAtNode: function (e) {
            W(null, e)
        }
    };
    var me = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function () {
            return v("div", {})
        }, t.prototype.componentDidMount = function () {
            this.setState({})
        }, t
    }(y);
    var ye = function () {
        function e(e, t) {
            this.context = e, this.internalEventSource = t
        }
        return e.prototype.remove = function () {
            this.context.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: this.internalEventSource.sourceId
            })
        }, e.prototype.refetch = function () {
            this.context.dispatch({
                type: "FETCH_EVENT_SOURCES",
                sourceIds: [this.internalEventSource.sourceId],
                isRefetch: !0
            })
        }, Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "url", {
            get: function () {
                return this.internalEventSource.meta.url
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "format", {
            get: function () {
                return this.internalEventSource.meta.format
            },
            enumerable: !1,
            configurable: !0
        }), e
    }();

    function Se(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function Ee(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (be(e, t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    }

    function be(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
    }

    function Ce(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
            for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
        return r
    }

    function De(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
            for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                var s = i[a];
                t && !be(s, t) || r.push(s)
            }
        return r
    }
    var Re = /(top|left|right|bottom|width|height)$/i;

    function we(e, t) {
        for (var n in t) Te(e, n, t[n])
    }

    function Te(e, t, n) {
        null == n ? e.style[t] = "" : "number" == typeof n && Re.test(t) ? e.style[t] = n + "px" : e.style[t] = n
    }

    function _e(e) {
        var t, n;
        return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target
    }

    function xe(e) {
        e.preventDefault()
    }

    function ke(e, t) {
        return function (n) {
            var r = Ee(n.target, e);
            r && t.call(r, n, r)
        }
    }

    function Me(e, t, n, r) {
        var o = ke(n, r);
        return e.addEventListener(t, o),
            function () {
                e.removeEventListener(t, o)
            }
    }
    var Pe = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

    function Ie(e, t) {
        var n = function (r) {
            t(r), Pe.forEach((function (t) {
                e.removeEventListener(t, n)
            }))
        };
        Pe.forEach((function (t) {
            e.addEventListener(t, n)
        }))
    }
    var Ne = 0;

    function He() {
        return String(Ne += 1)
    }

    function Oe() {
        document.body.classList.add("fc-not-allowed")
    }

    function Ae() {
        document.body.classList.remove("fc-not-allowed")
    }

    function We(e) {
        e.classList.add("fc-unselectable"), e.addEventListener("selectstart", xe)
    }

    function Le(e) {
        e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", xe)
    }

    function Ue(e) {
        e.addEventListener("contextmenu", xe)
    }

    function Be(e) {
        e.removeEventListener("contextmenu", xe)
    }

    function ze(e) {
        var t, n, r = [],
            o = [];
        for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1) "string" == typeof (n = o[t]) ? r.push("-" === n.charAt(0) ? {
            field: n.substring(1),
            order: -1
        } : {
            field: n,
            order: 1
        }) : "function" == typeof n && r.push({
            func: n
        });
        return r
    }

    function Ve(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r += 1)
            if (o = Fe(e, t, n[r])) return o;
        return 0
    }

    function Fe(e, t, n) {
        return n.func ? n.func(e, t) : Ge(e[n.field], t[n.field]) * (n.order || 1)
    }

    function Ge(e, t) {
        return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
    }

    function je(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n
    }

    function qe(e, t) {
        return e - t
    }

    function Ye(e) {
        return e % 1 == 0
    }

    function Ze(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
    }
    var Xe = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

    function Ke(e, t) {
        var n = ut(e);
        return n[2] += 7 * t, ct(n)
    }

    function $e(e, t) {
        var n = ut(e);
        return n[2] += t, ct(n)
    }

    function Je(e, t) {
        var n = ut(e);
        return n[6] += t, ct(n)
    }

    function Qe(e, t) {
        return et(e, t) / 7
    }

    function et(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }

    function tt(e, t) {
        var n = ot(e),
            r = ot(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(et(n, r)),
            milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
        }
    }

    function nt(e, t) {
        var n = rt(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null
    }

    function rt(e, t) {
        return pt(e) === pt(t) ? Math.round(et(e, t)) : null
    }

    function ot(e) {
        return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }

    function it(e, t, n, r) {
        var o = ct([t, 0, 1 + at(t, n, r)]),
            i = ot(e),
            a = Math.round(et(o, i));
        return Math.floor(a / 7) + 1
    }

    function at(e, t, n) {
        var r = 7 + t - n;
        return -((7 + ct([e, 0, r]).getUTCDay() - t) % 7) + r - 1
    }

    function st(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
    }

    function lt(e) {
        return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0)
    }

    function ut(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
    }

    function ct(e) {
        return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
    }

    function dt(e) {
        return !isNaN(e.valueOf())
    }

    function pt(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    }

    function ft(e, t, n, r) {
        return {
            instanceId: He(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r
        }
    }
    var ht = Object.prototype.hasOwnProperty;

    function vt(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break
                    }
                }
                o.length && (n[r] = vt(o))
            }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s) l in n || (n[l] = s[l])
        }
        return n
    }

    function gt(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n
    }

    function mt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
    }

    function yt(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0
        }
        return t
    }

    function St(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t
    }

    function Et(e, t) {
        if (e === t) return !0;
        for (var n in e)
            if (ht.call(e, n) && !(n in t)) return !1;
        for (var n in t)
            if (ht.call(t, n) && e[n] !== t[n]) return !1;
        return !0
    }

    function bt(e, t) {
        var n = [];
        for (var r in e) ht.call(e, r) && (r in t || n.push(r));
        for (var r in t) ht.call(t, r) && e[r] !== t[r] && n.push(r);
        return n
    }

    function Ct(e, t, n) {
        if (void 0 === n && (n = {}), e === t) return !0;
        for (var r in t)
            if (!(r in e) || !Dt(e[r], t[r], n[r])) return !1;
        for (var r in e)
            if (!(r in t)) return !1;
        return !0
    }

    function Dt(e, t, n) {
        return e === t || !0 === n || !!n && n(e, t)
    }

    function Rt(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a)
        }
        return o
    }

    function wt(e, t, n) {
        var r = n.dateEnv,
            o = n.pluginHooks,
            i = n.options,
            a = e.defs,
            s = e.instances;
        for (var l in s = gt(s, (function (e) {
                return !a[e.defId].recurringDef
            })), a) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c || (c = u.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
                for (var d = 0, p = Tt(u, c, t, r, o.recurringTypes); d < p.length; d++) {
                    var f = p[d],
                        h = ft(l, {
                            start: f,
                            end: r.add(f, c)
                        });
                    s[h.instanceId] = h
                }
            }
        }
        return {
            defs: a,
            instances: s
        }
    }

    function Tt(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
            start: r.subtract(n.start, t),
            end: n.end
        }, r);
        return e.allDay && (i = i.map(ot)), i
    }
    var _t = ["years", "months", "days", "milliseconds"],
        xt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

    function kt(e, t) {
        var n;
        return "string" == typeof e ? function (e) {
            var t = xt.exec(e);
            if (t) {
                var n = t[1] ? -1 : 1;
                return {
                    years: 0,
                    months: 0,
                    days: n * (t[2] ? parseInt(t[2], 10) : 0),
                    milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                }
            }
            return null
        }(e) : "object" == typeof e && e ? Mt(e) : "number" == typeof e ? Mt(((n = {})[t || "milliseconds"] = e, n)) : null
    }

    function Mt(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
            },
            n = e.weeks || e.week;
        return n && (t.days += 7 * n, t.specifiedWeeks = !0), t
    }

    function Pt(e) {
        return e.years || e.months || e.milliseconds ? 0 : e.days
    }

    function It(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds
        }
    }

    function Nt(e, t) {
        return {
            years: e.years * t,
            months: e.months * t,
            days: e.days * t,
            milliseconds: e.milliseconds * t
        }
    }

    function Ht(e) {
        return Wt(e) / 864e5
    }

    function Ot(e) {
        return Wt(e) / 6e4
    }

    function At(e) {
        return Wt(e) / 1e3
    }

    function Wt(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    }

    function Lt(e, t) {
        for (var n = null, r = 0; r < _t.length; r += 1) {
            var o = _t[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!Ye(i) || null !== n && n !== i) return null;
                n = i
            } else if (e[o]) return null
        }
        return n
    }

    function Ut(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return {
                unit: "millisecond",
                value: t
            };
            if (t % 6e4 != 0) return {
                unit: "second",
                value: t / 1e3
            };
            if (t % 36e5 != 0) return {
                unit: "minute",
                value: t / 6e4
            };
            if (t) return {
                unit: "hour",
                value: t / 36e5
            }
        }
        return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
            unit: "week",
            value: e.days / 7
        } : {
            unit: "day",
            value: e.days
        } : e.months ? {
            unit: "month",
            value: e.months
        } : e.years ? {
            unit: "year",
            value: e.years
        } : {
            unit: "millisecond",
            value: 0
        }
    }

    function Bt(e, t, n) {
        void 0 === n && (n = !1);
        var r = e.toISOString();
        return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", Ft(t, !0)))), r
    }

    function zt(e) {
        return e.toISOString().replace(/T.*$/, "")
    }

    function Vt(e) {
        return je(e.getUTCHours(), 2) + ":" + je(e.getUTCMinutes(), 2) + ":" + je(e.getUTCSeconds(), 2)
    }

    function Ft(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            o = Math.floor(r / 60),
            i = Math.round(r % 60);
        return t ? n + je(o, 2) + ":" + je(i, 2) : "GMT" + n + o + (i ? ":" + je(i, 2) : "")
    }

    function Gt(e, t) {
        for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
        return n
    }

    function jt(e, t, n) {
        if (e === t) return !0;
        var r, o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1)
            if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0
    }

    function qt(e, t, n) {
        var r, o;
        return function () {
            for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
            if (r) {
                if (!jt(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    t && t(s, o) || (o = s)
                }
            } else o = e.apply(this, i);
            return r = i, o
        }
    }

    function Yt(e, t, n) {
        var r, o, i = this;
        return function (a) {
            if (r) {
                if (!Et(r, a)) {
                    n && n(o);
                    var s = e.call(i, a);
                    t && t(s, o) || (o = s)
                }
            } else o = e.call(i, a);
            return r = a, o
        }
    }

    function Zt(e, t, n) {
        var r = this,
            o = [],
            i = [];
        return function (a) {
            for (var s = o.length, l = a.length, u = 0; u < s; u += 1)
                if (a[u]) {
                    if (!jt(o[u], a[u])) {
                        n && n(i[u]);
                        var c = e.apply(r, a[u]);
                        t && t(c, i[u]) || (i[u] = c)
                    }
                } else n && n(i[u]);
            for (; u < l; u += 1) i[u] = e.apply(r, a[u]);
            return o = a, i.splice(l), i
        }
    }

    function Xt(e, t, n) {
        var r = this,
            o = {},
            i = {};
        return function (a) {
            var s = {};
            for (var l in a)
                if (i[l])
                    if (jt(o[l], a[l])) s[l] = i[l];
                    else {
                        n && n(i[l]);
                        var u = e.apply(r, a[l]);
                        s[l] = t && t(u, i[l]) ? i[l] : u
                    }
            else s[l] = e.apply(r, a[l]);
            return o = a, i = s, s
        }
    }
    var Kt = {
            week: 3,
            separator: 0,
            omitZeroMinute: 0,
            meridiem: 0,
            omitCommas: 0
        },
        $t = {
            timeZoneName: 7,
            era: 6,
            year: 5,
            month: 4,
            day: 2,
            weekday: 2,
            hour: 1,
            minute: 1,
            second: 1
        },
        Jt = /\s*([ap])\.?m\.?/i,
        Qt = /,/g,
        en = /\s+/g,
        tn = /\u200e/g,
        nn = /UTC|GMT/,
        rn = function () {
            function e(e) {
                var t = {},
                    n = {},
                    r = 0;
                for (var o in e) o in Kt ? (n[o] = e[o], r = Math.max(Kt[o], r)) : (t[o] = e[o], o in $t && (r = Math.max($t[o], r)));
                this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = qt(on)
            }
            return e.prototype.format = function (e, t) {
                return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
            }, e.prototype.formatRange = function (e, t, n, r) {
                var o = this.standardDateProps,
                    i = this.extendedSettings,
                    a = function (e, t, n) {
                        if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
                        if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
                        if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
                        if (pt(e) !== pt(t)) return 1;
                        return 0
                    }(e.marker, t.marker, n.calendarSystem);
                if (!a) return this.format(e, n);
                var s = a;
                !(s > 1) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (s = 1);
                var l = this.format(e, n),
                    u = this.format(t, n);
                if (l === u) return l;
                var c = on(function (e, t) {
                        var n = {};
                        for (var r in e)(!(r in $t) || $t[r] <= t) && (n[r] = e[r]);
                        return n
                    }(o, s), i, n),
                    d = c(e),
                    p = c(t),
                    f = function (e, t, n, r) {
                        var o = 0;
                        for (; o < e.length;) {
                            var i = e.indexOf(t, o);
                            if (-1 === i) break;
                            var a = e.substr(0, i);
                            o = i + t.length;
                            for (var s = e.substr(o), l = 0; l < n.length;) {
                                var u = n.indexOf(r, l);
                                if (-1 === u) break;
                                var c = n.substr(0, u);
                                l = u + r.length;
                                var d = n.substr(l);
                                if (a === c && s === d) return {
                                    before: a,
                                    after: s
                                }
                            }
                        }
                        return null
                    }(l, d, u, p),
                    h = i.separator || r || n.defaultSeparator || "";
                return f ? f.before + d + h + p + f.after : l + h + u
            }, e.prototype.getLargestUnit = function () {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    case 2:
                        return "day";
                    default:
                        return "time"
                }
            }, e
        }();

    function on(e, t, n) {
        var o = Object.keys(e).length;
        return 1 === o && "short" === e.timeZoneName ? function (e) {
            return Ft(e.timeZoneOffset)
        } : 0 === o && t.week ? function (e) {
            return function (e, t, n, r) {
                var o = [];
                "narrow" === r ? o.push(t) : "short" === r && o.push(t, " ");
                o.push(n.simpleNumberFormat.format(e)), "rtl" === n.options.direction && o.reverse();
                return o.join("")
            }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week)
        } : function (e, t, n) {
            e = r({}, e), t = r({}, t),
                function (e, t) {
                    e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
                    "long" === e.timeZoneName && (e.timeZoneName = "short");
                    t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
                }(e, t), e.timeZone = "UTC";
            var o, i = new Intl.DateTimeFormat(n.locale.codes, e);
            if (t.omitZeroMinute) {
                var a = r({}, e);
                delete a.minute, o = new Intl.DateTimeFormat(n.locale.codes, a)
            }
            return function (r) {
                var a = r.marker;
                return function (e, t, n, r, o) {
                    e = e.replace(tn, ""), "short" === n.timeZoneName && (e = function (e, t) {
                        var n = !1;
                        e = e.replace(nn, (function () {
                            return n = !0, t
                        })), n || (e += " " + t);
                        return e
                    }(e, "UTC" === o.timeZone || null == t.timeZoneOffset ? "UTC" : Ft(t.timeZoneOffset)));
                    r.omitCommas && (e = e.replace(Qt, "").trim());
                    r.omitZeroMinute && (e = e.replace(":00", ""));
                    !1 === r.meridiem ? e = e.replace(Jt, "").trim() : "narrow" === r.meridiem ? e = e.replace(Jt, (function (e, t) {
                        return t.toLocaleLowerCase()
                    })) : "short" === r.meridiem ? e = e.replace(Jt, (function (e, t) {
                        return t.toLocaleLowerCase() + "m"
                    })) : "lowercase" === r.meridiem && (e = e.replace(Jt, (function (e) {
                        return e.toLocaleLowerCase()
                    })));
                    return e = (e = e.replace(en, " ")).trim()
                }((o && !a.getUTCMinutes() ? o : i).format(a), r, e, t, n)
            }
        }(e, t, n)
    }

    function an(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6]
        }
    }

    function sn(e, t, n, r) {
        var o = an(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t ? an(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator
        }
    }
    var ln = function () {
            function e(e) {
                this.cmdStr = e
            }
            return e.prototype.format = function (e, t, n) {
                return t.cmdFormatter(this.cmdStr, sn(e, null, t, n))
            }, e.prototype.formatRange = function (e, t, n, r) {
                return n.cmdFormatter(this.cmdStr, sn(e, t, n, r))
            }, e
        }(),
        un = function () {
            function e(e) {
                this.func = e
            }
            return e.prototype.format = function (e, t, n) {
                return this.func(sn(e, null, t, n))
            }, e.prototype.formatRange = function (e, t, n, r) {
                return this.func(sn(e, t, n, r))
            }, e
        }();

    function cn(e) {
        return "object" == typeof e && e ? new rn(e) : "string" == typeof e ? new ln(e) : "function" == typeof e ? new un(e) : null
    }
    var dn = {
            navLinkDayClick: En,
            navLinkWeekClick: En,
            duration: kt,
            bootstrapFontAwesome: En,
            buttonIcons: En,
            customButtons: En,
            defaultAllDayEventDuration: kt,
            defaultTimedEventDuration: kt,
            nextDayThreshold: kt,
            scrollTime: kt,
            scrollTimeReset: Boolean,
            slotMinTime: kt,
            slotMaxTime: kt,
            dayPopoverFormat: cn,
            slotDuration: kt,
            snapDuration: kt,
            headerToolbar: En,
            footerToolbar: En,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: cn,
            dayHeaderClassNames: En,
            dayHeaderContent: En,
            dayHeaderDidMount: En,
            dayHeaderWillUnmount: En,
            dayCellClassNames: En,
            dayCellContent: En,
            dayCellDidMount: En,
            dayCellWillUnmount: En,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: En,
            weekNumbers: Boolean,
            weekNumberClassNames: En,
            weekNumberContent: En,
            weekNumberDidMount: En,
            weekNumberWillUnmount: En,
            editable: Boolean,
            viewClassNames: En,
            viewDidMount: En,
            viewWillUnmount: En,
            nowIndicator: Boolean,
            nowIndicatorClassNames: En,
            nowIndicatorContent: En,
            nowIndicatorDidMount: En,
            nowIndicatorWillUnmount: En,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: En,
            locale: En,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: En,
            eventOrder: ze,
            eventOrderStrict: Boolean,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: En,
            contentHeight: En,
            direction: String,
            weekNumberFormat: cn,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            progressiveEventRendering: Boolean,
            businessHours: En,
            initialDate: En,
            now: En,
            eventDataTransform: En,
            stickyHeaderDates: En,
            stickyFooterScrollbar: En,
            viewHeight: En,
            defaultAllDay: Boolean,
            eventSourceFailure: En,
            eventSourceSuccess: En,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: En,
            eventConstraint: En,
            eventAllow: En,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: En,
            eventContent: En,
            eventDidMount: En,
            eventWillUnmount: En,
            selectConstraint: En,
            selectOverlap: En,
            selectAllow: En,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: En,
            slotLaneClassNames: En,
            slotLaneContent: En,
            slotLaneDidMount: En,
            slotLaneWillUnmount: En,
            slotLabelClassNames: En,
            slotLabelContent: En,
            slotLabelDidMount: En,
            slotLabelWillUnmount: En,
            dayMaxEvents: En,
            dayMaxEventRows: En,
            dayMinWidth: Number,
            slotLabelInterval: kt,
            allDayText: String,
            allDayClassNames: En,
            allDayContent: En,
            allDayDidMount: En,
            allDayWillUnmount: En,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: cn,
            rerenderDelay: Number,
            moreLinkText: En,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMaxStack: Number,
            eventMinHeight: Number,
            eventMinWidth: Number,
            eventShortHeight: Number,
            slotEventOverlap: Boolean,
            plugins: En,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: kt,
            hiddenDays: En,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: En,
            visibleRange: En,
            titleFormat: En,
            noEventsText: String,
            moreLinkClick: En,
            moreLinkClassNames: En,
            moreLinkContent: En,
            moreLinkDidMount: En,
            moreLinkWillUnmount: En
        },
        pn = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: {
                day: 1
            },
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {
                start: "title",
                center: "",
                end: "today prev,next"
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            scrollTimeReset: !0,
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1,
            eventMinHeight: 15,
            eventMinWidth: 30,
            eventShortHeight: 30
        },
        fn = {
            datesSet: En,
            eventsSet: En,
            eventAdd: En,
            eventChange: En,
            eventRemove: En,
            windowResize: En,
            eventClick: En,
            eventMouseEnter: En,
            eventMouseLeave: En,
            select: En,
            unselect: En,
            loading: En,
            _unmount: En,
            _beforeprint: En,
            _afterprint: En,
            _noEventDrop: En,
            _noEventResize: En,
            _resize: En,
            _scrollRequest: En
        },
        hn = {
            buttonText: En,
            views: En,
            plugins: En,
            initialEvents: En,
            events: En,
            eventSources: En
        },
        vn = {
            headerToolbar: gn,
            footerToolbar: gn,
            buttonText: gn,
            buttonIcons: gn
        };

    function gn(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t ? Et(e, t) : e === t
    }
    var mn = {
        type: String,
        component: En,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: En,
        usesMinMaxTime: Boolean,
        classNames: En,
        content: En,
        didMount: En,
        willUnmount: En
    };

    function yn(e) {
        return vt(e, vn)
    }

    function Sn(e, t) {
        var n = {},
            r = {};
        for (var o in t) o in e && (n[o] = t[o](e[o]));
        for (var o in e) o in t || (r[o] = e[o]);
        return {
            refined: n,
            extra: r
        }
    }

    function En(e) {
        return e
    }

    function bn(e, t, n, r) {
        for (var o = {
                defs: {},
                instances: {}
            }, i = Ln(n), a = 0, s = e; a < s.length; a++) {
            var l = An(s[a], t, n, r, i);
            l && Cn(l, o)
        }
        return o
    }

    function Cn(e, t) {
        return void 0 === t && (t = {
            defs: {},
            instances: {}
        }), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t
    }

    function Dn(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId],
                o = Tn(e, (function (e) {
                    return t = r, n = e, Boolean(t.groupId && t.groupId === n.groupId);
                    var t, n
                }));
            return o.defs[r.defId] = r, o.instances[n.instanceId] = n, o
        }
        return {
            defs: {},
            instances: {}
        }
    }

    function Rn() {
        return {
            defs: {},
            instances: {}
        }
    }

    function wn(e, t) {
        return {
            defs: r(r({}, e.defs), t.defs),
            instances: r(r({}, e.instances), t.instances)
        }
    }

    function Tn(e, t) {
        var n = gt(e.defs, t),
            r = gt(e.instances, (function (e) {
                return n[e.defId]
            }));
        return {
            defs: n,
            instances: r
        }
    }

    function _n(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
    }
    var xn = {
            display: String,
            editable: Boolean,
            startEditable: Boolean,
            durationEditable: Boolean,
            constraint: En,
            overlap: En,
            allow: En,
            className: _n,
            classNames: _n,
            color: String,
            backgroundColor: String,
            borderColor: String,
            textColor: String
        },
        kn = {
            display: null,
            startEditable: null,
            durationEditable: null,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
        };

    function Mn(e, t) {
        var n = function (e, t) {
            return Array.isArray(e) ? bn(e, null, t, !0) : "object" == typeof e && e ? bn([e], null, t, !0) : null != e ? String(e) : null
        }(e.constraint, t);
        return {
            display: e.display || null,
            startEditable: null != e.startEditable ? e.startEditable : e.editable,
            durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || [])
        }
    }

    function Pn(e) {
        return e.reduce(In, kn)
    }

    function In(e, t) {
        return {
            display: null != t.display ? t.display : e.display,
            startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames)
        }
    }
    var Nn = {
            id: String,
            groupId: String,
            title: String,
            url: String
        },
        Hn = {
            start: En,
            end: En,
            date: En,
            allDay: Boolean
        },
        On = r(r(r({}, Nn), Hn), {
            extendedProps: En
        });

    function An(e, t, n, r, o) {
        void 0 === o && (o = Ln(n));
        var i = Wn(e, n, o),
            a = i.refined,
            s = i.extra,
            l = function (e, t) {
                var n = null;
                e && (n = e.defaultAllDay);
                null == n && (n = t.options.defaultAllDay);
                return n
            }(t, n),
            u = function (e, t, n, r) {
                for (var o = 0; o < r.length; o += 1) {
                    var i = r[o].parse(e, n);
                    if (i) {
                        var a = e.allDay;
                        return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1), {
                            allDay: a,
                            duration: i.duration,
                            typeData: i.typeData,
                            typeId: o
                        }
                    }
                }
                return null
            }(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u) return (c = Un(a, s, t ? t.sourceId : "", u.allDay, Boolean(u.duration), n)).recurringDef = {
            typeId: u.typeId,
            typeData: u.typeData,
            duration: u.duration
        }, {
            def: c,
            instance: null
        };
        var c, d = function (e, t, n, r) {
            var o, i, a = e.allDay,
                s = null,
                l = !1,
                u = null,
                c = null != e.start ? e.start : e.date;
            if (o = n.dateEnv.createMarkerMeta(c)) s = o.marker;
            else if (!r) return null;
            null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
            null == a && (a = null != t ? t : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified));
            a && s && (s = ot(s));
            i && (u = i.marker, a && (u = ot(u)), s && u <= s && (u = null));
            u ? l = !0 : r || (l = n.options.forceEventDuration || !1, u = n.dateEnv.add(s, a ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
            return {
                allDay: a,
                hasEnd: l,
                range: {
                    start: s,
                    end: u
                },
                forcedStartTzo: o ? o.forcedTzo : null,
                forcedEndTzo: i ? i.forcedTzo : null
            }
        }(a, l, n, r);
        return d ? {
            def: c = Un(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n),
            instance: ft(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo)
        } : null
    }

    function Wn(e, t, n) {
        return void 0 === n && (n = Ln(t)), Sn(e, n)
    }

    function Ln(e) {
        return r(r(r({}, xn), On), e.pluginHooks.eventRefiners)
    }

    function Un(e, t, n, o, i, a) {
        for (var s = {
                title: e.title || "",
                groupId: e.groupId || "",
                publicId: e.id || "",
                url: e.url || "",
                recurringDef: null,
                defId: He(),
                sourceId: n,
                allDay: o,
                hasEnd: i,
                ui: Mn(e, a),
                extendedProps: r(r({}, e.extendedProps || {}), t)
            }, l = 0, u = a.pluginHooks.eventDefMemberAdders; l < u.length; l++) {
            var c = u[l];
            r(s, c(e))
        }
        return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s
    }

    function Bn(e) {
        var t = Math.floor(et(e.start, e.end)) || 1,
            n = ot(e.start);
        return {
            start: n,
            end: $e(n, t)
        }
    }

    function zn(e, t) {
        void 0 === t && (t = kt(0));
        var n = null,
            r = null;
        if (e.end) {
            r = ot(e.end);
            var o = e.end.valueOf() - r.valueOf();
            o && o >= Wt(t) && (r = $e(r, 1))
        }
        return e.start && (n = ot(e.start), r && r <= n && (r = $e(n, 1))), {
            start: n,
            end: r
        }
    }

    function Vn(e) {
        var t = zn(e);
        return et(t.start, t.end) > 1
    }

    function Fn(e, t, n, r) {
        return "year" === r ? kt(n.diffWholeYears(e, t), "year") : "month" === r ? kt(n.diffWholeMonths(e, t), "month") : tt(e, t)
    }

    function Gn(e, t) {
        var n, r, o = [],
            i = t.start;
        for (e.sort(jn), n = 0; n < e.length; n += 1)(r = e[n]).start > i && o.push({
            start: i,
            end: r.start
        }), r.end > i && (i = r.end);
        return i < t.end && o.push({
            start: i,
            end: t.end
        }), o
    }

    function jn(e, t) {
        return e.start.valueOf() - t.start.valueOf()
    }

    function qn(e, t) {
        var n = e.start,
            r = e.end,
            o = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (o = {
            start: n,
            end: r
        }), o
    }

    function Yn(e, t) {
        return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
    }

    function Zn(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
    }

    function Xn(e, t) {
        return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
    }

    function Kn(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
    }

    function $n(e, t, n, r) {
        var o = {},
            i = {},
            a = {},
            s = [],
            l = [],
            u = tr(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(E = e.defs[c]).defId]).display && (E.groupId ? (o[E.groupId] = [], a[E.groupId] || (a[E.groupId] = E)) : i[c] = [])
        }
        for (var d in e.instances) {
            var p = e.instances[d],
                f = u[(E = e.defs[p.defId]).defId],
                h = p.range,
                v = !E.allDay && r ? zn(h, r) : h,
                g = qn(v, n);
            g && ("inverse-background" === f.display ? E.groupId ? o[E.groupId].push(g) : i[p.defId].push(g) : "none" !== f.display && ("background" === f.display ? s : l).push({
                def: E,
                ui: f,
                instance: p,
                range: g,
                isStart: v.start && v.start.valueOf() === g.start.valueOf(),
                isEnd: v.end && v.end.valueOf() === g.end.valueOf()
            }))
        }
        for (var m in o)
            for (var y = 0, S = Gn(o[m], n); y < S.length; y++) {
                var E, b = S[y];
                f = u[(E = a[m]).defId];
                s.push({
                    def: E,
                    ui: f,
                    instance: null,
                    range: b,
                    isStart: !1,
                    isEnd: !1
                })
            }
        for (var c in i)
            for (var C = 0, D = Gn(i[c], n); C < D.length; C++) {
                b = D[C];
                s.push({
                    def: e.defs[c],
                    ui: u[c],
                    instance: null,
                    range: b,
                    isStart: !1,
                    isEnd: !1
                })
            }
        return {
            bg: s,
            fg: l
        }
    }

    function Jn(e) {
        return "background" === e.ui.display || "inverse-background" === e.ui.display
    }

    function Qn(e, t) {
        e.fcSeg = t
    }

    function er(e) {
        return e.fcSeg || e.parentNode.fcSeg || null
    }

    function tr(e, t) {
        return mt(e, (function (e) {
            return nr(e, t)
        }))
    }

    function nr(e, t) {
        var n = [];
        return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Pn(n)
    }

    function rr(e, t) {
        var n = e.map(or);
        return n.sort((function (e, n) {
            return Ve(e, n, t)
        })), n.map((function (e) {
            return e._seg
        }))
    }

    function or(e) {
        var t = e.eventRange,
            n = t.def,
            o = t.instance ? t.instance.range : t.range,
            i = o.start ? o.start.valueOf() : 0,
            a = o.end ? o.end.valueOf() : 0;
        return r(r(r({}, n.extendedProps), n), {
            id: n.publicId,
            start: i,
            end: a,
            duration: a - i,
            allDay: Number(n.allDay),
            _seg: e
        })
    }

    function ir(e, t) {
        for (var n = t.pluginHooks.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, a = i.startEditable, s = 0, l = n; s < l.length; s++) {
            a = (0, l[s])(a, o, i, t)
        }
        return a
    }

    function ar(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
    }

    function sr(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable
    }

    function lr(e, t, n, r, o, i, a) {
        var s = n.dateEnv,
            l = n.options,
            u = l.displayEventTime,
            c = l.displayEventEnd,
            d = e.eventRange.def,
            p = e.eventRange.instance;
        null == u && (u = !1 !== r), null == c && (c = !1 !== o);
        var f = p.range.start,
            h = p.range.end,
            v = i || e.start || e.eventRange.range.start,
            g = a || e.end || e.eventRange.range.end,
            m = ot(f).valueOf() === ot(v).valueOf(),
            y = ot(Je(h, -1)).valueOf() === ot(Je(g, -1)).valueOf();
        return u && !d.allDay && (m || y) ? (v = m ? f : v, g = y ? h : g, c && d.hasEnd ? s.formatRange(v, g, t, {
            forcedStartTzo: i ? null : p.forcedStartTzo,
            forcedEndTzo: a ? null : p.forcedEndTzo
        }) : s.format(v, t, {
            forcedTzo: i ? null : p.forcedStartTzo
        })) : ""
    }

    function ur(e, t, n) {
        var r = e.eventRange.range;
        return {
            isPast: r.end < (n || t.start),
            isFuture: r.start >= (n || t.end),
            isToday: t && Kn(t, r.start)
        }
    }

    function cr(e) {
        var t = ["fc-event"];
        return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t
    }

    function dr(e) {
        return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString()
    }
    var pr = {
        start: En,
        end: En,
        allDay: Boolean
    };

    function fr(e, t, n) {
        var o = function (e, t) {
                var n = Sn(e, pr),
                    o = n.refined,
                    i = n.extra,
                    a = o.start ? t.createMarkerMeta(o.start) : null,
                    s = o.end ? t.createMarkerMeta(o.end) : null,
                    l = o.allDay;
                null == l && (l = a && a.isTimeUnspecified && (!s || s.isTimeUnspecified));
                return r({
                    range: {
                        start: a ? a.marker : null,
                        end: s ? s.marker : null
                    },
                    allDay: l
                }, i)
            }(e, t),
            i = o.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n)
        }
        return o
    }

    function hr(e, t) {
        return Yn(e.range, t.range) && e.allDay === t.allDay && function (e, t) {
            for (var n in t)
                if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
            for (var n in e)
                if (!(n in t)) return !1;
            return !0
        }(e, t)
    }

    function vr(e, t, n) {
        return r(r({}, gr(e, t, n)), {
            timeZone: t.timeZone
        })
    }

    function gr(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, {
                omitTime: n
            }),
            endStr: t.formatIso(e.end, {
                omitTime: n
            })
        }
    }

    function mr(e, t, n) {
        var r = Wn({
                editable: !1
            }, n),
            o = Un(r.refined, r.extra, "", e.allDay, !0, n);
        return {
            def: o,
            ui: nr(o, t),
            instance: ft(o.defId, e.range),
            range: e.range,
            isStart: !0,
            isEnd: !0
        }
    }

    function yr(e, t, n) {
        n.emitter.trigger("select", r(r({}, Sr(e, n)), {
            jsEvent: t ? t.origEvent : null,
            view: n.viewApi || n.calendarApi.view
        }))
    }

    function Sr(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, o = t.dateEnv, r(r({}, gr(n.range, o, n.allDay)), {
            allDay: n.allDay
        }))), i
    }

    function Er(e, t, n) {
        var r = n.dateEnv,
            o = n.options,
            i = t;
        return e ? (i = ot(i), i = r.add(i, o.defaultAllDayEventDuration)) : i = r.add(i, o.defaultTimedEventDuration), i
    }

    function br(e, t, n, r) {
        var o = tr(e.defs, t),
            i = {
                defs: {},
                instances: {}
            };
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = Cr(s, o[a], n, r)
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = Dr(u, s, o[u.defId], n, r)
        }
        return i
    }

    function Cr(e, t, n, o) {
        var i = n.standardProps || {};
        null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
        var a = r(r(r({}, e), i), {
            ui: r(r({}, e.ui), i.ui)
        });
        n.extendedProps && (a.extendedProps = r(r({}, a.extendedProps), n.extendedProps));
        for (var s = 0, l = o.pluginHooks.eventDefMutationAppliers; s < l.length; s++) {
            (0, l[s])(a, n, o)
        }
        return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a
    }

    function Dr(e, t, n, o, i) {
        var a = i.dateEnv,
            s = o.standardProps && !0 === o.standardProps.allDay,
            l = o.standardProps && !1 === o.standardProps.hasEnd,
            u = r({}, e);
        return s && (u.range = Bn(u.range)), o.datesDelta && n.startEditable && (u.range = {
            start: a.add(u.range.start, o.datesDelta),
            end: a.add(u.range.end, o.datesDelta)
        }), o.startDelta && n.durationEditable && (u.range = {
            start: a.add(u.range.start, o.startDelta),
            end: u.range.end
        }), o.endDelta && n.durationEditable && (u.range = {
            start: u.range.start,
            end: a.add(u.range.end, o.endDelta)
        }), l && (u.range = {
            start: u.range.start,
            end: Er(t.allDay, u.range.start, i)
        }), t.allDay && (u.range = {
            start: ot(u.range.start),
            end: ot(u.range.end)
        }), u.range.end < u.range.start && (u.range.end = Er(t.allDay, u.range.start, i)), u
    }
    var Rr = function () {
            function e(e, t, n) {
                this.type = e, this.getCurrentData = t, this.dateEnv = n
            }
            return Object.defineProperty(e.prototype, "calendar", {
                get: function () {
                    return this.getCurrentData().calendarApi
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "title", {
                get: function () {
                    return this.getCurrentData().viewTitle
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "activeStart", {
                get: function () {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "activeEnd", {
                get: function () {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "currentStart", {
                get: function () {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "currentEnd", {
                get: function () {
                    return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.getOption = function (e) {
                return this.getCurrentData().options[e]
            }, e
        }(),
        wr = {
            id: String,
            defaultAllDay: Boolean,
            url: String,
            format: String,
            events: En,
            eventDataTransform: En,
            success: En,
            failure: En
        };

    function Tr(e, t, n) {
        var r;
        if (void 0 === n && (n = _r(t)), "string" == typeof e ? r = {
                url: e
            } : "function" == typeof e || Array.isArray(e) ? r = {
                events: e
            } : "object" == typeof e && e && (r = e), r) {
            var o = Sn(r, n),
                i = o.refined,
                a = o.extra,
                s = function (e, t) {
                    for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; r >= 0; r -= 1) {
                        var o = n[r].parseMeta(e);
                        if (o) return {
                            sourceDefId: r,
                            meta: o
                        }
                    }
                    return null
                }(i, t);
            if (s) return {
                _raw: e,
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null,
                defaultAllDay: i.defaultAllDay,
                eventDataTransform: i.eventDataTransform,
                success: i.success,
                failure: i.failure,
                publicId: i.id || "",
                sourceId: He(),
                sourceDefId: s.sourceDefId,
                meta: s.meta,
                ui: Mn(i, t),
                extendedProps: a
            }
        }
        return null
    }

    function _r(e) {
        return r(r(r({}, xn), wr), e.pluginHooks.eventSourceRefiners)
    }

    function xr(e, t) {
        return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e)
    }
    var kr = function () {
            function e() {}
            return e.prototype.getCurrentData = function () {
                return this.currentDataManager.getCurrentData()
            }, e.prototype.dispatch = function (e) {
                return this.currentDataManager.dispatch(e)
            }, Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this.getCurrentData().viewApi
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.batchRendering = function (e) {
                e()
            }, e.prototype.updateSize = function () {
                this.trigger("_resize", !0)
            }, e.prototype.setOption = function (e, t) {
                this.dispatch({
                    type: "SET_OPTION",
                    optionName: e,
                    rawOptionValue: t
                })
            }, e.prototype.getOption = function (e) {
                return this.currentDataManager.currentCalendarOptionsInput[e]
            }, e.prototype.getAvailableLocaleCodes = function () {
                return Object.keys(this.getCurrentData().availableRawLocales)
            }, e.prototype.on = function (e, t) {
                var n = this.currentDataManager;
                n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'")
            }, e.prototype.off = function (e, t) {
                this.currentDataManager.emitter.off(e, t)
            }, e.prototype.trigger = function (e) {
                for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                (t = this.currentDataManager.emitter).trigger.apply(t, o([e], n))
            }, e.prototype.changeView = function (e, t) {
                var n = this;
                this.batchRendering((function () {
                    if (n.unselect(), t)
                        if (t.start && t.end) n.dispatch({
                            type: "CHANGE_VIEW_TYPE",
                            viewType: e
                        }), n.dispatch({
                            type: "SET_OPTION",
                            optionName: "visibleRange",
                            rawOptionValue: t
                        });
                        else {
                            var r = n.getCurrentData().dateEnv;
                            n.dispatch({
                                type: "CHANGE_VIEW_TYPE",
                                viewType: e,
                                dateMarker: r.createMarker(t)
                            })
                        }
                    else n.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: e
                    })
                }))
            }, e.prototype.zoomTo = function (e, t) {
                var n;
                t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
                    type: "CHANGE_VIEW_TYPE",
                    viewType: n.type,
                    dateMarker: e
                }) : this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e
                })
            }, e.prototype.getUnitViewSpec = function (e) {
                var t, n, r = this.getCurrentData(),
                    o = r.viewSpecs,
                    i = r.toolbarConfig,
                    a = [].concat(i.viewsWithButtons);
                for (var s in o) a.push(s);
                for (t = 0; t < a.length; t += 1)
                    if ((n = o[a[t]]) && n.singleUnit === e) return n;
                return null
            }, e.prototype.prev = function () {
                this.unselect(), this.dispatch({
                    type: "PREV"
                })
            }, e.prototype.next = function () {
                this.unselect(), this.dispatch({
                    type: "NEXT"
                })
            }, e.prototype.prevYear = function () {
                var e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e.dateEnv.addYears(e.currentDate, -1)
                })
            }, e.prototype.nextYear = function () {
                var e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e.dateEnv.addYears(e.currentDate, 1)
                })
            }, e.prototype.today = function () {
                var e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: xr(e.calendarOptions.now, e.dateEnv)
                })
            }, e.prototype.gotoDate = function (e) {
                var t = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: t.dateEnv.createMarker(e)
                })
            }, e.prototype.incrementDate = function (e) {
                var t = this.getCurrentData(),
                    n = kt(e);
                n && (this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: t.dateEnv.add(t.currentDate, n)
                }))
            }, e.prototype.getDate = function () {
                var e = this.getCurrentData();
                return e.dateEnv.toDate(e.currentDate)
            }, e.prototype.formatDate = function (e, t) {
                var n = this.getCurrentData().dateEnv;
                return n.format(n.createMarker(e), cn(t))
            }, e.prototype.formatRange = function (e, t, n) {
                var r = this.getCurrentData().dateEnv;
                return r.formatRange(r.createMarker(e), r.createMarker(t), cn(n), n)
            }, e.prototype.formatIso = function (e, t) {
                var n = this.getCurrentData().dateEnv;
                return n.formatIso(n.createMarker(e), {
                    omitTime: t
                })
            }, e.prototype.select = function (e, t) {
                var n;
                n = null == t ? null != e.start ? e : {
                    start: e,
                    end: null
                } : {
                    start: e,
                    end: t
                };
                var r = this.getCurrentData(),
                    o = fr(n, r.dateEnv, kt({
                        days: 1
                    }));
                o && (this.dispatch({
                    type: "SELECT_DATES",
                    selection: o
                }), yr(o, null, r))
            }, e.prototype.unselect = function (e) {
                var t = this.getCurrentData();
                t.dateSelection && (this.dispatch({
                    type: "UNSELECT_DATES"
                }), function (e, t) {
                    t.emitter.trigger("unselect", {
                        jsEvent: e ? e.origEvent : null,
                        view: t.viewApi || t.calendarApi.view
                    })
                }(e, t))
            }, e.prototype.addEvent = function (e, t) {
                if (e instanceof Mr) {
                    var n = e._def,
                        r = e._instance;
                    return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
                        type: "ADD_EVENTS",
                        eventStore: Cn({
                            def: n,
                            instance: r
                        })
                    }), this.triggerEventAdd(e)), e
                }
                var o, i = this.getCurrentData();
                if (t instanceof ye) o = t.internalEventSource;
                else if ("boolean" == typeof t) t && (o = St(i.eventSources)[0]);
                else if (null != t) {
                    var a = this.getEventSourceById(t);
                    if (!a) return console.warn('Could not find an event source with ID "' + t + '"'), null;
                    o = a.internalEventSource
                }
                var s = An(e, o, i, !1);
                if (s) {
                    var l = new Mr(i, s.def, s.def.recurringDef ? null : s.instance);
                    return this.dispatch({
                        type: "ADD_EVENTS",
                        eventStore: Cn(s)
                    }), this.triggerEventAdd(l), l
                }
                return null
            }, e.prototype.triggerEventAdd = function (e) {
                var t = this;
                this.getCurrentData().emitter.trigger("eventAdd", {
                    event: e,
                    relatedEvents: [],
                    revert: function () {
                        t.dispatch({
                            type: "REMOVE_EVENTS",
                            eventStore: Pr(e)
                        })
                    }
                })
            }, e.prototype.getEventById = function (e) {
                var t = this.getCurrentData(),
                    n = t.eventStore,
                    r = n.defs,
                    o = n.instances;
                for (var i in e = String(e), r) {
                    var a = r[i];
                    if (a.publicId === e) {
                        if (a.recurringDef) return new Mr(t, a, null);
                        for (var s in o) {
                            var l = o[s];
                            if (l.defId === a.defId) return new Mr(t, a, l)
                        }
                    }
                }
                return null
            }, e.prototype.getEvents = function () {
                var e = this.getCurrentData();
                return Ir(e.eventStore, e)
            }, e.prototype.removeAllEvents = function () {
                this.dispatch({
                    type: "REMOVE_ALL_EVENTS"
                })
            }, e.prototype.getEventSources = function () {
                var e = this.getCurrentData(),
                    t = e.eventSources,
                    n = [];
                for (var r in t) n.push(new ye(e, t[r]));
                return n
            }, e.prototype.getEventSourceById = function (e) {
                var t = this.getCurrentData(),
                    n = t.eventSources;
                for (var r in e = String(e), n)
                    if (n[r].publicId === e) return new ye(t, n[r]);
                return null
            }, e.prototype.addEventSource = function (e) {
                var t = this.getCurrentData();
                if (e instanceof ye) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                    type: "ADD_EVENT_SOURCES",
                    sources: [e.internalEventSource]
                }), e;
                var n = Tr(e, t);
                return n ? (this.dispatch({
                    type: "ADD_EVENT_SOURCES",
                    sources: [n]
                }), new ye(t, n)) : null
            }, e.prototype.removeAllEventSources = function () {
                this.dispatch({
                    type: "REMOVE_ALL_EVENT_SOURCES"
                })
            }, e.prototype.refetchEvents = function () {
                this.dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    isRefetch: !0
                })
            }, e.prototype.scrollToTime = function (e) {
                var t = kt(e);
                t && this.trigger("_scrollRequest", {
                    time: t
                })
            }, e
        }(),
        Mr = function () {
            function e(e, t, n) {
                this._context = e, this._def = t, this._instance = n || null
            }
            return e.prototype.setProp = function (e, t) {
                var n, r;
                if (e in Hn) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
                else if ("id" === e) t = Nn[e](t), this.mutate({
                    standardProps: {
                        publicId: t
                    }
                });
                else if (e in Nn) t = Nn[e](t), this.mutate({
                    standardProps: (n = {}, n[e] = t, n)
                });
                else if (e in xn) {
                    var o = xn[e](t);
                    "color" === e ? o = {
                        backgroundColor: t,
                        borderColor: t
                    } : "editable" === e ? o = {
                        startEditable: t,
                        durationEditable: t
                    } : ((r = {})[e] = t, o = r), this.mutate({
                        standardProps: {
                            ui: o
                        }
                    })
                } else console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.")
            }, e.prototype.setExtendedProp = function (e, t) {
                var n;
                this.mutate({
                    extendedProps: (n = {}, n[e] = t, n)
                })
            }, e.prototype.setStart = function (e, t) {
                void 0 === t && (t = {});
                var n = this._context.dateEnv,
                    r = n.createMarker(e);
                if (r && this._instance) {
                    var o = Fn(this._instance.range.start, r, n, t.granularity);
                    t.maintainDuration ? this.mutate({
                        datesDelta: o
                    }) : this.mutate({
                        startDelta: o
                    })
                }
            }, e.prototype.setEnd = function (e, t) {
                void 0 === t && (t = {});
                var n, r = this._context.dateEnv;
                if ((null == e || (n = r.createMarker(e))) && this._instance)
                    if (n) {
                        var o = Fn(this._instance.range.end, n, r, t.granularity);
                        this.mutate({
                            endDelta: o
                        })
                    } else this.mutate({
                        standardProps: {
                            hasEnd: !1
                        }
                    })
            }, e.prototype.setDates = function (e, t, n) {
                void 0 === n && (n = {});
                var r, o, i, a = this._context.dateEnv,
                    s = {
                        allDay: n.allDay
                    },
                    l = a.createMarker(e);
                if (l && ((null == t || (r = a.createMarker(t))) && this._instance)) {
                    var u = this._instance.range;
                    !0 === n.allDay && (u = Bn(u));
                    var c = Fn(u.start, l, a, n.granularity);
                    if (r) {
                        var d = Fn(u.end, r, a, n.granularity);
                        i = d, (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds ? this.mutate({
                            datesDelta: c,
                            standardProps: s
                        }) : this.mutate({
                            startDelta: c,
                            endDelta: d,
                            standardProps: s
                        })
                    } else s.hasEnd = !1, this.mutate({
                        datesDelta: c,
                        standardProps: s
                    })
                }
            }, e.prototype.moveStart = function (e) {
                var t = kt(e);
                t && this.mutate({
                    startDelta: t
                })
            }, e.prototype.moveEnd = function (e) {
                var t = kt(e);
                t && this.mutate({
                    endDelta: t
                })
            }, e.prototype.moveDates = function (e) {
                var t = kt(e);
                t && this.mutate({
                    datesDelta: t
                })
            }, e.prototype.setAllDay = function (e, t) {
                void 0 === t && (t = {});
                var n = {
                        allDay: e
                    },
                    r = t.maintainDuration;
                null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({
                    standardProps: n
                })
            }, e.prototype.formatRange = function (e) {
                var t = this._context.dateEnv,
                    n = this._instance,
                    r = cn(e);
                return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
                    forcedStartTzo: n.forcedStartTzo,
                    forcedEndTzo: n.forcedEndTzo
                }) : t.format(n.range.start, r, {
                    forcedTzo: n.forcedStartTzo
                })
            }, e.prototype.mutate = function (t) {
                var n = this._instance;
                if (n) {
                    var r = this._def,
                        o = this._context,
                        i = o.getCurrentData().eventStore,
                        a = Dn(i, n.instanceId);
                    a = br(a, {
                        "": {
                            display: "",
                            startEditable: !0,
                            durationEditable: !0,
                            constraints: [],
                            overlap: null,
                            allows: [],
                            backgroundColor: "",
                            borderColor: "",
                            textColor: "",
                            classNames: []
                        }
                    }, t, o);
                    var s = new e(o, r, n);
                    this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], o.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: a
                    }), o.emitter.trigger("eventChange", {
                        oldEvent: s,
                        event: this,
                        relatedEvents: Ir(a, o, n),
                        revert: function () {
                            o.dispatch({
                                type: "RESET_EVENTS",
                                eventStore: i
                            })
                        }
                    })
                }
            }, e.prototype.remove = function () {
                var e = this._context,
                    t = Pr(this);
                e.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: t
                }), e.emitter.trigger("eventRemove", {
                    event: this,
                    relatedEvents: [],
                    revert: function () {
                        e.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: t
                        })
                    }
                })
            }, Object.defineProperty(e.prototype, "source", {
                get: function () {
                    var e = this._def.sourceId;
                    return e ? new ye(this._context, this._context.getCurrentData().eventSources[e]) : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "start", {
                get: function () {
                    return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "end", {
                get: function () {
                    return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "startStr", {
                get: function () {
                    var e = this._instance;
                    return e ? this._context.dateEnv.formatIso(e.range.start, {
                        omitTime: this._def.allDay,
                        forcedTzo: e.forcedStartTzo
                    }) : ""
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "endStr", {
                get: function () {
                    var e = this._instance;
                    return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                        omitTime: this._def.allDay,
                        forcedTzo: e.forcedEndTzo
                    }) : ""
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._def.publicId
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "groupId", {
                get: function () {
                    return this._def.groupId
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "allDay", {
                get: function () {
                    return this._def.allDay
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "title", {
                get: function () {
                    return this._def.title
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "url", {
                get: function () {
                    return this._def.url
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "display", {
                get: function () {
                    return this._def.ui.display || "auto"
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "startEditable", {
                get: function () {
                    return this._def.ui.startEditable
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "durationEditable", {
                get: function () {
                    return this._def.ui.durationEditable
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "constraint", {
                get: function () {
                    return this._def.ui.constraints[0] || null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "overlap", {
                get: function () {
                    return this._def.ui.overlap
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "allow", {
                get: function () {
                    return this._def.ui.allows[0] || null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "backgroundColor", {
                get: function () {
                    return this._def.ui.backgroundColor
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "borderColor", {
                get: function () {
                    return this._def.ui.borderColor
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "textColor", {
                get: function () {
                    return this._def.ui.textColor
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "classNames", {
                get: function () {
                    return this._def.ui.classNames
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "extendedProps", {
                get: function () {
                    return this._def.extendedProps
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.toPlainObject = function (e) {
                void 0 === e && (e = {});
                var t = this._def,
                    n = t.ui,
                    o = this.startStr,
                    i = this.endStr,
                    a = {};
                return t.title && (a.title = t.title), o && (a.start = o), i && (a.end = i), t.publicId && (a.id = t.publicId), t.groupId && (a.groupId = t.groupId), t.url && (a.url = t.url), n.display && "auto" !== n.display && (a.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? a.color = n.backgroundColor : (n.backgroundColor && (a.backgroundColor = n.backgroundColor), n.borderColor && (a.borderColor = n.borderColor)), n.textColor && (a.textColor = n.textColor), n.classNames.length && (a.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? r(a, t.extendedProps) : a.extendedProps = t.extendedProps), a
            }, e.prototype.toJSON = function () {
                return this.toPlainObject()
            }, e
        }();

    function Pr(e) {
        var t, n, r = e._def,
            o = e._instance;
        return {
            defs: (t = {}, t[r.defId] = r, t),
            instances: o ? (n = {}, n[o.instanceId] = o, n) : {}
        }
    }

    function Ir(e, t, n) {
        var r = e.defs,
            o = e.instances,
            i = [],
            a = n ? n.instanceId : "";
        for (var s in o) {
            var l = o[s],
                u = r[l.defId];
            l.instanceId !== a && i.push(new Mr(t, u, l))
        }
        return i
    }
    var Nr = {};
    var Hr, Or = function () {
        function e() {}
        return e.prototype.getMarkerYear = function (e) {
            return e.getUTCFullYear()
        }, e.prototype.getMarkerMonth = function (e) {
            return e.getUTCMonth()
        }, e.prototype.getMarkerDay = function (e) {
            return e.getUTCDate()
        }, e.prototype.arrayToMarker = function (e) {
            return ct(e)
        }, e.prototype.markerToArray = function (e) {
            return ut(e)
        }, e
    }();
    Hr = Or, Nr["gregory"] = Hr;
    var Ar = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

    function Wr(e) {
        var t = Ar.exec(e);
        if (t) {
            var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
            if (dt(n)) {
                var r = null;
                return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
                    marker: n,
                    isTimeUnspecified: !t[6],
                    timeZoneOffset: r
                }
            }
        }
        return null
    }
    var Lr = function () {
            function e(e) {
                var t = this.timeZone = e.timeZone,
                    n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function (e) {
                    return new Nr[e]
                }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator
            }
            return e.prototype.createMarker = function (e) {
                var t = this.createMarkerMeta(e);
                return null === t ? null : t.marker
            }, e.prototype.createNowMarker = function () {
                return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : ct(st(new Date))
            }, e.prototype.createMarkerMeta = function (e) {
                if ("string" == typeof e) return this.parse(e);
                var t = null;
                return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = ct(e)), null !== t && dt(t) ? {
                    marker: t,
                    isTimeUnspecified: !1,
                    forcedTzo: null
                } : null
            }, e.prototype.parse = function (e) {
                var t = Wr(e);
                if (null === t) return null;
                var n = t.marker,
                    r = null;
                return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
                    marker: n,
                    isTimeUnspecified: t.isTimeUnspecified,
                    forcedTzo: r
                }
            }, e.prototype.getYear = function (e) {
                return this.calendarSystem.getMarkerYear(e)
            }, e.prototype.getMonth = function (e) {
                return this.calendarSystem.getMarkerMonth(e)
            }, e.prototype.add = function (e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.subtract = function (e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.addYears = function (e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[0] += t, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.addMonths = function (e, t) {
                var n = this.calendarSystem.markerToArray(e);
                return n[1] += t, this.calendarSystem.arrayToMarker(n)
            }, e.prototype.diffWholeYears = function (e, t) {
                var n = this.calendarSystem;
                return pt(e) === pt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
            }, e.prototype.diffWholeMonths = function (e, t) {
                var n = this.calendarSystem;
                return pt(e) === pt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
            }, e.prototype.greatestWholeUnit = function (e, t) {
                var n = this.diffWholeYears(e, t);
                return null !== n ? {
                    unit: "year",
                    value: n
                } : null !== (n = this.diffWholeMonths(e, t)) ? {
                    unit: "month",
                    value: n
                } : null !== (n = nt(e, t)) ? {
                    unit: "week",
                    value: n
                } : null !== (n = rt(e, t)) ? {
                    unit: "day",
                    value: n
                } : Ye(n = function (e, t) {
                    return (t.valueOf() - e.valueOf()) / 36e5
                }(e, t)) ? {
                    unit: "hour",
                    value: n
                } : Ye(n = function (e, t) {
                    return (t.valueOf() - e.valueOf()) / 6e4
                }(e, t)) ? {
                    unit: "minute",
                    value: n
                } : Ye(n = function (e, t) {
                    return (t.valueOf() - e.valueOf()) / 1e3
                }(e, t)) ? {
                    unit: "second",
                    value: n
                } : {
                    unit: "millisecond",
                    value: t.valueOf() - e.valueOf()
                }
            }, e.prototype.countDurationsBetween = function (e, t, n) {
                var r;
                return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (Ht(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function (e) {
                    return Ht(e) / 30
                }(n) : n.days && null !== (r = rt(e, t)) ? r / Ht(n) : (t.valueOf() - e.valueOf()) / Wt(n)
            }, e.prototype.startOf = function (e, t) {
                return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? ot(e) : "hour" === t ? function (e) {
                    return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
                }(e) : "minute" === t ? function (e) {
                    return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
                }(e) : "second" === t ? function (e) {
                    return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
                }(e) : null
            }, e.prototype.startOfYear = function (e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
            }, e.prototype.startOfMonth = function (e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
            }, e.prototype.startOfWeek = function (e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
            }, e.prototype.computeWeekNumber = function (e) {
                return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function (e, t, n) {
                    var r = e.getUTCFullYear(),
                        o = it(e, r, t, n);
                    if (o < 1) return it(e, r - 1, t, n);
                    var i = it(e, r + 1, t, n);
                    return i >= 1 ? Math.min(o, i) : o
                }(e, this.weekDow, this.weekDoy)
            }, e.prototype.format = function (e, t, n) {
                return void 0 === n && (n = {}), t.format({
                    marker: e,
                    timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
                }, this)
            }, e.prototype.formatRange = function (e, t, n, r) {
                return void 0 === r && (r = {}), r.isEndExclusive && (t = Je(t, -1)), n.formatRange({
                    marker: e,
                    timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
                }, {
                    marker: t,
                    timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
                }, this, r.defaultSeparator)
            }, e.prototype.formatIso = function (e, t) {
                void 0 === t && (t = {});
                var n = null;
                return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), Bt(e, n, t.omitTime)
            }, e.prototype.timestampToMarker = function (e) {
                return "local" === this.timeZone ? ct(st(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? ct(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
            }, e.prototype.offsetForMarker = function (e) {
                return "local" === this.timeZone ? -lt(ut(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(ut(e)) : null
            }, e.prototype.toDate = function (e, t) {
                return "local" === this.timeZone ? lt(ut(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(ut(e)) * 60) : new Date(e.valueOf() - (t || 0))
            }, e
        }(),
        Ur = [],
        Br = {
            code: "en",
            week: {
                dow: 0,
                doy: 4
            },
            direction: "ltr",
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day",
                list: "list"
            },
            weekText: "W",
            allDayText: "all-day",
            moreLinkText: "more",
            noEventsText: "No events to display"
        };

    function zr(e) {
        for (var t = e.length > 0 ? e[0].code : "en", n = Ur.concat(e), r = {
                en: Br
            }, o = 0, i = n; o < i.length; o++) {
            var a = i[o];
            r[a.code] = a
        }
        return {
            map: r,
            defaultCode: t
        }
    }

    function Vr(e, t) {
        return "object" != typeof e || Array.isArray(e) ? function (e, t) {
            var n = [].concat(e || []),
                r = function (e, t) {
                    for (var n = 0; n < e.length; n += 1)
                        for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; o > 0; o -= 1) {
                            var i = r.slice(0, o).join("-");
                            if (t[i]) return t[i]
                        }
                    return null
                }(n, t) || Br;
            return Fr(e, n, r)
        }(e, t) : Fr(e.code, [e.code], e)
    }

    function Fr(e, t, n) {
        var r = vt([Br, n], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return delete r.week, {
            codeArg: e,
            codes: t,
            week: o,
            simpleNumberFormat: new Intl.NumberFormat(e),
            options: r
        }
    }

    function Gr(e) {
        var t = Vr(e.locale || "en", zr([]).map);
        return new Lr(r(r({
            timeZone: pn.timeZone,
            calendarSystem: "gregory"
        }, e), {
            locale: t
        }))
    }
    var jr, qr = {
        startTime: "09:00",
        endTime: "17:00",
        daysOfWeek: [1, 2, 3, 4, 5],
        display: "inverse-background",
        classNames: "fc-non-business",
        groupId: "_businessHours"
    };

    function Yr(e, t) {
        return bn(function (e) {
            var t;
            t = !0 === e ? [{}] : Array.isArray(e) ? e.filter((function (e) {
                return e.daysOfWeek
            })) : "object" == typeof e && e ? [e] : [];
            return t = t.map((function (e) {
                return r(r({}, qr), e)
            }))
        }(e), null, t)
    }

    function Zr(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    }

    function Xr(e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }

    function Kr(e, t, n) {
        return {
            left: e.left + t,
            right: e.right + t,
            top: e.top + n,
            bottom: e.bottom + n
        }
    }

    function $r(e, t) {
        return {
            left: Math.min(Math.max(e.left, t.left), t.right),
            top: Math.min(Math.max(e.top, t.top), t.bottom)
        }
    }

    function Jr(e) {
        return {
            left: (e.left + e.right) / 2,
            top: (e.top + e.bottom) / 2
        }
    }

    function Qr(e, t) {
        return {
            left: e.left - t.left,
            top: e.top - t.top
        }
    }

    function eo() {
        return null == jr && (jr = function () {
            if ("undefined" == typeof document) return !0;
            var e = document.createElement("div");
            e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
            var t = e.querySelector("div").offsetHeight > 0;
            return document.body.removeChild(e), t
        }()), jr
    }
    var to = {
            defs: {},
            instances: {}
        },
        no = function () {
            function e() {
                this.getKeysForEventDefs = qt(this._getKeysForEventDefs), this.splitDateSelection = qt(this._splitDateSpan), this.splitEventStore = qt(this._splitEventStore), this.splitIndividualUi = qt(this._splitIndividualUi), this.splitEventDrag = qt(this._splitInteraction), this.splitEventResize = qt(this._splitInteraction), this.eventUiBuilders = {}
            }
            return e.prototype.splitProps = function (e) {
                var t = this,
                    n = this.getKeyInfo(e),
                    r = this.getKeysForEventDefs(e.eventStore),
                    o = this.splitDateSelection(e.dateSelection),
                    i = this.splitIndividualUi(e.eventUiBases, r),
                    a = this.splitEventStore(e.eventStore, r),
                    s = this.splitEventDrag(e.eventDrag),
                    l = this.splitEventResize(e.eventResize),
                    u = {};
                for (var c in this.eventUiBuilders = mt(n, (function (e, n) {
                        return t.eventUiBuilders[n] || qt(ro)
                    })), n) {
                    var d = n[c],
                        p = a[c] || to,
                        f = this.eventUiBuilders[c];
                    u[c] = {
                        businessHours: d.businessHours || e.businessHours,
                        dateSelection: o[c] || null,
                        eventStore: p,
                        eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                        eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                        eventDrag: s[c] || null,
                        eventResize: l[c] || null
                    }
                }
                return u
            }, e.prototype._splitDateSpan = function (e) {
                var t = {};
                if (e)
                    for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
                        t[r[n]] = e
                    }
                return t
            }, e.prototype._getKeysForEventDefs = function (e) {
                var t = this;
                return mt(e.defs, (function (e) {
                    return t.getKeysForEventDef(e)
                }))
            }, e.prototype._splitEventStore = function (e, t) {
                var n = e.defs,
                    r = e.instances,
                    o = {};
                for (var i in n)
                    for (var a = 0, s = t[i]; a < s.length; a++) {
                        o[p = s[a]] || (o[p] = {
                            defs: {},
                            instances: {}
                        }), o[p].defs[i] = n[i]
                    }
                for (var l in r)
                    for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
                        var p;
                        o[p = d[c]] && (o[p].instances[l] = u)
                    }
                return o
            }, e.prototype._splitIndividualUi = function (e, t) {
                var n = {};
                for (var r in e)
                    if (r)
                        for (var o = 0, i = t[r]; o < i.length; o++) {
                            var a = i[o];
                            n[a] || (n[a] = {}), n[a][r] = e[r]
                        }
                return n
            }, e.prototype._splitInteraction = function (e) {
                var t = {};
                if (e) {
                    var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
                        r = this._getKeysForEventDefs(e.mutatedEvents),
                        o = this._splitEventStore(e.mutatedEvents, r),
                        i = function (r) {
                            t[r] || (t[r] = {
                                affectedEvents: n[r] || to,
                                mutatedEvents: o[r] || to,
                                isEvent: e.isEvent
                            })
                        };
                    for (var a in n) i(a);
                    for (var a in o) i(a)
                }
                return t
            }, e
        }();

    function ro(e, t, n) {
        var o = [];
        e && o.push(e), t && o.push(t);
        var i = {
            "": Pn(o)
        };
        return n && r(i, n), i
    }

    function oo(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !Kn(r.activeRange, e)),
            isOther: Boolean(r && !Kn(r.currentRange, e)),
            isToday: Boolean(t && Kn(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? e > n : !!t && e >= t.end)
        }
    }

    function io(e, t) {
        var n = ["fc-day", "fc-day-" + Xe[e.dow]];
        return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
    }

    function ao(e, t) {
        var n = ["fc-slot", "fc-slot-" + Xe[e.dow]];
        return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n
    }

    function so(e, t) {
        return void 0 === t && (t = "day"), JSON.stringify({
            date: zt(e),
            type: t
        })
    }
    var lo, uo = null;

    function co() {
        return null === uo && (uo = function () {
            var e = document.createElement("div");
            we(e, {
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }), e.innerHTML = "<div></div>", document.body.appendChild(e);
            var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return Se(e), t
        }()), uo
    }

    function po() {
        return lo || (lo = function () {
            var e = document.createElement("div");
            e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
            var t = fo(e);
            return document.body.removeChild(e), t
        }()), lo
    }

    function fo(e) {
        return {
            x: e.offsetHeight - e.clientHeight,
            y: e.offsetWidth - e.clientWidth
        }
    }

    function ho(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0,
            i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            s = fo(e),
            l = s.y - r - o,
            u = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0
            };
        return co() && "rtl" === n.direction ? u.scrollbarLeft = l : u.scrollbarRight = l, t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u
    }

    function vo(e, t, n) {
        void 0 === t && (t = !1);
        var r = n ? e.getBoundingClientRect() : go(e),
            o = ho(e, t),
            i = {
                left: r.left + o.borderLeft + o.scrollbarLeft,
                right: r.right - o.borderRight - o.scrollbarRight,
                top: r.top + o.borderTop,
                bottom: r.bottom - o.borderBottom - o.scrollbarBottom
            };
        return t && (i.left += o.paddingLeft, i.right -= o.paddingRight, i.top += o.paddingTop, i.bottom -= o.paddingBottom), i
    }

    function go(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset
        }
    }

    function mo(e) {
        for (var t = []; e instanceof HTMLElement;) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode
        }
        return t
    }

    function yo(e, t, n) {
        var r = !1,
            o = function () {
                r || (r = !0, t.apply(this, arguments))
            },
            i = function () {
                r || (r = !0, n && n.apply(this, arguments))
            },
            a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i)
    }
    var So = function () {
        function e() {
            this.handlers = {}, this.thisContext = null
        }
        return e.prototype.setThisContext = function (e) {
            this.thisContext = e
        }, e.prototype.setOptions = function (e) {
            this.options = e
        }, e.prototype.on = function (e, t) {
            ! function (e, t, n) {
                (e[t] || (e[t] = [])).push(n)
            }(this.handlers, e, t)
        }, e.prototype.off = function (e, t) {
            ! function (e, t, n) {
                n ? e[t] && (e[t] = e[t].filter((function (e) {
                    return e !== n
                }))) : delete e[t]
            }(this.handlers, e, t)
        }, e.prototype.trigger = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = [].concat(o || [], r), a = 0, s = i; a < s.length; a++) {
                var l = s[a];
                l.apply(this.thisContext, t)
            }
        }, e.prototype.hasHandlers = function (e) {
            return this.handlers[e] && this.handlers[e].length || this.options && this.options[e]
        }, e
    }();
    var Eo = function () {
            function e(e, t, n, r) {
                this.els = t;
                var o = this.originClientRect = e.getBoundingClientRect();
                n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top)
            }
            return e.prototype.buildElHorizontals = function (e) {
                for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                    var i = o[r].getBoundingClientRect();
                    t.push(i.left - e), n.push(i.right - e)
                }
                this.lefts = t, this.rights = n
            }, e.prototype.buildElVerticals = function (e) {
                for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                    var i = o[r].getBoundingClientRect();
                    t.push(i.top - e), n.push(i.bottom - e)
                }
                this.tops = t, this.bottoms = n
            }, e.prototype.leftToIndex = function (e) {
                var t, n = this.lefts,
                    r = this.rights,
                    o = n.length;
                for (t = 0; t < o; t += 1)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.topToIndex = function (e) {
                var t, n = this.tops,
                    r = this.bottoms,
                    o = n.length;
                for (t = 0; t < o; t += 1)
                    if (e >= n[t] && e < r[t]) return t
            }, e.prototype.getWidth = function (e) {
                return this.rights[e] - this.lefts[e]
            }, e.prototype.getHeight = function (e) {
                return this.bottoms[e] - this.tops[e]
            }, e
        }(),
        bo = function () {
            function e() {}
            return e.prototype.getMaxScrollTop = function () {
                return this.getScrollHeight() - this.getClientHeight()
            }, e.prototype.getMaxScrollLeft = function () {
                return this.getScrollWidth() - this.getClientWidth()
            }, e.prototype.canScrollVertically = function () {
                return this.getMaxScrollTop() > 0
            }, e.prototype.canScrollHorizontally = function () {
                return this.getMaxScrollLeft() > 0
            }, e.prototype.canScrollUp = function () {
                return this.getScrollTop() > 0
            }, e.prototype.canScrollDown = function () {
                return this.getScrollTop() < this.getMaxScrollTop()
            }, e.prototype.canScrollLeft = function () {
                return this.getScrollLeft() > 0
            }, e.prototype.canScrollRight = function () {
                return this.getScrollLeft() < this.getMaxScrollLeft()
            }, e
        }(),
        Co = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.el = t, n
            }
            return n(t, e), t.prototype.getScrollTop = function () {
                return this.el.scrollTop
            }, t.prototype.getScrollLeft = function () {
                return this.el.scrollLeft
            }, t.prototype.setScrollTop = function (e) {
                this.el.scrollTop = e
            }, t.prototype.setScrollLeft = function (e) {
                this.el.scrollLeft = e
            }, t.prototype.getScrollWidth = function () {
                return this.el.scrollWidth
            }, t.prototype.getScrollHeight = function () {
                return this.el.scrollHeight
            }, t.prototype.getClientHeight = function () {
                return this.el.clientHeight
            }, t.prototype.getClientWidth = function () {
                return this.el.clientWidth
            }, t
        }(bo),
        Do = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.getScrollTop = function () {
                return window.pageYOffset
            }, t.prototype.getScrollLeft = function () {
                return window.pageXOffset
            }, t.prototype.setScrollTop = function (e) {
                window.scroll(window.pageXOffset, e)
            }, t.prototype.setScrollLeft = function (e) {
                window.scroll(e, window.pageYOffset)
            }, t.prototype.getScrollWidth = function () {
                return document.documentElement.scrollWidth
            }, t.prototype.getScrollHeight = function () {
                return document.documentElement.scrollHeight
            }, t.prototype.getClientHeight = function () {
                return document.documentElement.clientHeight
            }, t.prototype.getClientWidth = function () {
                return document.documentElement.clientWidth
            }, t
        }(bo),
        Ro = function () {
            function e(e) {
                this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
            }
            return e.prototype.setIconOverride = function (e) {
                var t, n;
                if ("object" == typeof e && e) {
                    for (n in t = r({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t
                } else !1 === e && (this.iconClasses = {})
            }, e.prototype.applyIconOverridePrefix = function (e) {
                var t = this.iconOverridePrefix;
                return t && 0 !== e.indexOf(t) && (e = t + e), e
            }, e.prototype.getClass = function (e) {
                return this.classes[e] || ""
            }, e.prototype.getIconClass = function (e, t) {
                var n;
                return (n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]) ? this.baseIconClass + " " + n : ""
            }, e.prototype.getCustomButtonIconClass = function (e) {
                var t;
                return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
            }, e
        }();
    if (Ro.prototype.classes = {}, Ro.prototype.iconClasses = {}, Ro.prototype.baseIconClass = "", Ro.prototype.iconOverridePrefix = "", "undefined" == typeof FullCalendarVDom) throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var wo = FullCalendarVDom.Component,
        To = FullCalendarVDom.createElement,
        _o = FullCalendarVDom.render,
        xo = FullCalendarVDom.createRef,
        ko = FullCalendarVDom.Fragment,
        Mo = FullCalendarVDom.createContext,
        Po = FullCalendarVDom.createPortal,
        Io = FullCalendarVDom.flushToDom,
        No = FullCalendarVDom.unmountComponentAtNode,
        Ho = function () {
            function e(e, t, n, o) {
                var i = this;
                this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = o, this.handleScrollRequest = function (e) {
                    i.queuedRequest = r({}, i.queuedRequest || {}, e), i.drain()
                }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll()
            }
            return e.prototype.detach = function () {
                this.emitter.off("_scrollRequest", this.handleScrollRequest)
            }, e.prototype.update = function (e) {
                e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
            }, e.prototype.fireInitialScroll = function () {
                this.handleScrollRequest({
                    time: this.scrollTime
                })
            }, e.prototype.drain = function () {
                this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
            }, e
        }(),
        Oo = Mo({});

    function Ao(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e)
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e)
            },
            createScrollResponder: function (e) {
                return new Ho(e, u, kt(n.scrollTime), n.scrollTimeReset)
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p
        }
    }
    var Wo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.shouldComponentUpdate = function (e, t) {
            return this.debug && console.log(bt(e, this.props), bt(t, this.state)), !Ct(this.props, e, this.propEquality) || !Ct(this.state, t, this.stateEquality)
        }, t.addPropsEquality = Uo, t.addStateEquality = Bo, t.contextType = Oo, t
    }(wo);
    Wo.prototype.propEquality = {}, Wo.prototype.stateEquality = {};
    var Lo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.contextType = Oo, t
    }(Wo);

    function Uo(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e), this.prototype.propEquality = t
    }

    function Bo(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e), this.prototype.stateEquality = t
    }

    function zo(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
    }
    var Vo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.uid = He(), t
        }
        return n(t, e), t.prototype.prepareHits = function () {}, t.prototype.queryHit = function (e, t, n, r) {
            return null
        }, t.prototype.isValidSegDownEl = function (e) {
            return !this.props.eventDrag && !this.props.eventResize && !Ee(e, ".fc-event-mirror")
        }, t.prototype.isValidDateDownEl = function (e) {
            return !(Ee(e, ".fc-event:not(.fc-bg-event)") || Ee(e, ".fc-more-link") || Ee(e, "a[data-navlink]") || Ee(e, ".fc-popover"))
        }, t
    }(Lo);

    function Fo(e) {
        return {
            id: He(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {}
        }
    }

    function Go() {
        var e, t = [],
            n = [];
        return function (o, i) {
            return e && jt(o, t) && jt(i, n) || (e = function (e, t) {
                var n = {},
                    o = {
                        reducers: [],
                        isLoadingFuncs: [],
                        contextInit: [],
                        eventRefiners: {},
                        eventDefMemberAdders: [],
                        eventSourceRefiners: {},
                        isDraggableTransformers: [],
                        eventDragMutationMassagers: [],
                        eventDefMutationAppliers: [],
                        dateSelectionTransformers: [],
                        datePointTransforms: [],
                        dateSpanTransforms: [],
                        views: {},
                        viewPropsTransformers: [],
                        isPropsValid: null,
                        externalDefTransforms: [],
                        viewContainerAppends: [],
                        eventDropTransformers: [],
                        componentInteractions: [],
                        calendarInteractions: [],
                        themeClasses: {},
                        eventSourceDefs: [],
                        cmdFormatter: null,
                        recurringTypes: [],
                        namedTimeZonedImpl: null,
                        initialView: "",
                        elementDraggingImpl: null,
                        optionChangeHandlers: {},
                        scrollGridImpl: null,
                        contentTypeHandlers: {},
                        listenerRefiners: {},
                        optionRefiners: {},
                        propSetHandlers: {}
                    };

                function i(e) {
                    for (var t = 0, a = e; t < a.length; t++) {
                        var s = a[t];
                        n[s.id] || (n[s.id] = !0, i(s.deps), u = s, o = {
                            reducers: (l = o).reducers.concat(u.reducers),
                            isLoadingFuncs: l.isLoadingFuncs.concat(u.isLoadingFuncs),
                            contextInit: l.contextInit.concat(u.contextInit),
                            eventRefiners: r(r({}, l.eventRefiners), u.eventRefiners),
                            eventDefMemberAdders: l.eventDefMemberAdders.concat(u.eventDefMemberAdders),
                            eventSourceRefiners: r(r({}, l.eventSourceRefiners), u.eventSourceRefiners),
                            isDraggableTransformers: l.isDraggableTransformers.concat(u.isDraggableTransformers),
                            eventDragMutationMassagers: l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),
                            eventDefMutationAppliers: l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),
                            dateSelectionTransformers: l.dateSelectionTransformers.concat(u.dateSelectionTransformers),
                            datePointTransforms: l.datePointTransforms.concat(u.datePointTransforms),
                            dateSpanTransforms: l.dateSpanTransforms.concat(u.dateSpanTransforms),
                            views: r(r({}, l.views), u.views),
                            viewPropsTransformers: l.viewPropsTransformers.concat(u.viewPropsTransformers),
                            isPropsValid: u.isPropsValid || l.isPropsValid,
                            externalDefTransforms: l.externalDefTransforms.concat(u.externalDefTransforms),
                            viewContainerAppends: l.viewContainerAppends.concat(u.viewContainerAppends),
                            eventDropTransformers: l.eventDropTransformers.concat(u.eventDropTransformers),
                            calendarInteractions: l.calendarInteractions.concat(u.calendarInteractions),
                            componentInteractions: l.componentInteractions.concat(u.componentInteractions),
                            themeClasses: r(r({}, l.themeClasses), u.themeClasses),
                            eventSourceDefs: l.eventSourceDefs.concat(u.eventSourceDefs),
                            cmdFormatter: u.cmdFormatter || l.cmdFormatter,
                            recurringTypes: l.recurringTypes.concat(u.recurringTypes),
                            namedTimeZonedImpl: u.namedTimeZonedImpl || l.namedTimeZonedImpl,
                            initialView: l.initialView || u.initialView,
                            elementDraggingImpl: l.elementDraggingImpl || u.elementDraggingImpl,
                            optionChangeHandlers: r(r({}, l.optionChangeHandlers), u.optionChangeHandlers),
                            scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
                            contentTypeHandlers: r(r({}, l.contentTypeHandlers), u.contentTypeHandlers),
                            listenerRefiners: r(r({}, l.listenerRefiners), u.listenerRefiners),
                            optionRefiners: r(r({}, l.optionRefiners), u.optionRefiners),
                            propSetHandlers: r(r({}, l.propSetHandlers), u.propSetHandlers)
                        })
                    }
                    var l, u
                }
                return e && i(e), i(t), o
            }(o, i)), t = o, n = i, e
        }
    }
    var jo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t
    }(Ro);

    function qo(e, t, n, o) {
        if (t[e]) return t[e];
        var i = function (e, t, n, o) {
            var i = n[e],
                a = o[e],
                s = function (e) {
                    return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null
                },
                l = s("component"),
                u = s("superType"),
                c = null;
            if (u) {
                if (u === e) throw new Error("Can't have a custom view type that references itself");
                c = qo(u, t, n, o)
            }!l && c && (l = c.component);
            if (!l) return null;
            return {
                type: e,
                component: l,
                defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
                overrides: r(r({}, c ? c.overrides : {}), a ? a.rawOptions : {})
            }
        }(e, t, n, o);
        return i && (t[e] = i), i
    }
    jo.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active"
    }, jo.prototype.baseIconClass = "fc-icon", jo.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
    }, jo.prototype.rtlIconClasses = {
        prev: "fc-icon-chevron-right",
        next: "fc-icon-chevron-left",
        prevYear: "fc-icon-chevrons-right",
        nextYear: "fc-icon-chevrons-left"
    }, jo.prototype.iconOverrideOption = "buttonIcons", jo.prototype.iconOverrideCustomButtonOption = "icon", jo.prototype.iconOverridePrefix = "fc-icon-";
    var Yo = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = xo(), t.handleRootEl = function (e) {
                    zo(t.rootElRef, e), t.props.elRef && zo(t.props.elRef, e)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = t.hookProps;
                return To($o, {
                    hookProps: n,
                    didMount: t.didMount,
                    willUnmount: t.willUnmount,
                    elRef: this.handleRootEl
                }, (function (r) {
                    return To(Xo, {
                        hookProps: n,
                        content: t.content,
                        defaultContent: t.defaultContent,
                        backupElRef: e.rootElRef
                    }, (function (e, o) {
                        return t.children(r, Qo(t.classNames, n), e, o)
                    }))
                }))
            }, t
        }(Lo),
        Zo = Mo(0);

    function Xo(e) {
        return To(Zo.Consumer, null, (function (t) {
            return To(Ko, r({
                renderId: t
            }, e))
        }))
    }
    var Ko = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.innerElRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                return this.props.children(this.innerElRef, this.renderInnerContent())
            }, t.prototype.componentDidMount = function () {
                this.updateCustomContent()
            }, t.prototype.componentDidUpdate = function () {
                this.updateCustomContent()
            }, t.prototype.componentWillUnmount = function () {
                this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy()
            }, t.prototype.renderInnerContent = function () {
                var e = this.context.pluginHooks.contentTypeHandlers,
                    t = this.props,
                    n = this.customContentInfo,
                    o = ei(t.content, t.hookProps),
                    i = null;
                if (void 0 === o && (o = ei(t.defaultContent, t.hookProps)), void 0 !== o) {
                    if (n) n.contentVal = o[n.contentKey];
                    else if ("object" == typeof o)
                        for (var a in e)
                            if (void 0 !== o[a]) {
                                var s = e[a]();
                                n = this.customContentInfo = r({
                                    contentKey: a,
                                    contentVal: o[a]
                                }, s);
                                break
                            }
                    i = n ? [] : o
                }
                return i
            }, t.prototype.updateCustomContent = function () {
                this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal)
            }, t
        }(Lo),
        $o = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function (e) {
                    t.rootEl = e, t.props.elRef && zo(t.props.elRef, e)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                return this.props.children(this.handleRootEl)
            }, t.prototype.componentDidMount = function () {
                var e = this.props.didMount;
                e && e(r(r({}, this.props.hookProps), {
                    el: this.rootEl
                }))
            }, t.prototype.componentWillUnmount = function () {
                var e = this.props.willUnmount;
                e && e(r(r({}, this.props.hookProps), {
                    el: this.rootEl
                }))
            }, t
        }(Lo);

    function Jo() {
        var e, t, n = [];
        return function (r, o) {
            return t && Et(t, o) && r === e || (e = r, t = o, n = Qo(r, o)), n
        }
    }

    function Qo(e, t) {
        return "function" == typeof e && (e = e(t)), _n(e)
    }

    function ei(e, t) {
        return "function" == typeof e ? e(t, To) : e
    }
    var ti = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.normalizeClassNames = Jo(), t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = this.context,
                n = t.options,
                r = {
                    view: t.viewApi
                },
                o = this.normalizeClassNames(n.viewClassNames, r);
            return To($o, {
                hookProps: r,
                didMount: n.viewDidMount,
                willUnmount: n.viewWillUnmount,
                elRef: e.elRef
            }, (function (t) {
                return e.children(t, ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o))
            }))
        }, t
    }(Lo);

    function ni(e) {
        return mt(e, ri)
    }

    function ri(e) {
        var t, n = "function" == typeof e ? {
                component: e
            } : e,
            o = n.component;
        return n.content && (t = n, o = function (e) {
            return To(Oo.Consumer, null, (function (n) {
                return To(ti, {
                    viewSpec: n.viewSpec
                }, (function (o, i) {
                    var a = r(r({}, e), {
                        nextDayThreshold: n.options.nextDayThreshold
                    });
                    return To(Yo, {
                        hookProps: a,
                        classNames: t.classNames,
                        content: t.content,
                        didMount: t.didMount,
                        willUnmount: t.willUnmount,
                        elRef: o
                    }, (function (e, t, n, r) {
                        return To("div", {
                            className: i.concat(t).join(" "),
                            ref: e
                        }, r)
                    }))
                }))
            }))
        }), {
            superType: n.type,
            component: o,
            rawOptions: n
        }
    }

    function oi(e, t, n, o) {
        var i = ni(e),
            a = ni(t.views);
        return mt(function (e, t) {
            var n, r = {};
            for (n in e) qo(n, r, e, t);
            for (n in t) qo(n, r, e, t);
            return r
        }(i, a), (function (e) {
            return function (e, t, n, o, i) {
                var a = e.overrides.duration || e.defaults.duration || o.duration || n.duration,
                    s = null,
                    l = "",
                    u = "",
                    c = {};
                if (a && (s = function (e) {
                        var t = JSON.stringify(e),
                            n = ii[t];
                        void 0 === n && (n = kt(e), ii[t] = n);
                        return n
                    }(a))) {
                    var d = Ut(s);
                    l = d.unit, 1 === d.value && (u = l, c = t[l] ? t[l].rawOptions : {})
                }
                var p = function (t) {
                    var n = t.buttonText || {},
                        r = e.defaults.buttonTextKey;
                    return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[u] ? n[u] : null
                };
                return {
                    type: e.type,
                    component: e.component,
                    duration: s,
                    durationUnit: l,
                    singleUnit: u,
                    optionDefaults: e.defaults,
                    optionOverrides: r(r({}, c), e.overrides),
                    buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
                    buttonTextDefault: p(i) || e.defaults.buttonText || p(pn) || e.type
                }
            }(e, a, t, n, o)
        }))
    }
    var ii = {};
    var ai = function () {
        function e(e) {
            this.props = e, this.nowDate = xr(e.nowInput, e.dateEnv), this.initHiddenDays()
        }
        return e.prototype.buildPrev = function (e, t, n) {
            var r = this.props.dateEnv,
                o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, -1, n)
        }, e.prototype.buildNext = function (e, t, n) {
            var r = this.props.dateEnv,
                o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, 1, n)
        }, e.prototype.build = function (e, t, n) {
            void 0 === n && (n = !0);
            var r, o, i, a, s, l, u, c, d = this.props;
            return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (u = e, e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u), o = this.buildCurrentRangeInfo(e, t), i = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i), s = a = this.trimHiddenDays(a), d.showNonCurrentDates || (s = qn(s, o.range)), s = qn(s = this.adjustActiveRange(s), r), l = Zn(o.range, r), {
                validRange: r,
                currentRange: o.range,
                currentRangeUnit: o.unit,
                isRangeAllDay: i,
                activeRange: s,
                renderRange: a,
                slotMinTime: d.slotMinTime,
                slotMaxTime: d.slotMaxTime,
                isValid: l,
                dateIncrement: this.buildDateIncrement(o.duration)
            }
        }, e.prototype.buildValidRange = function () {
            var e = this.props.validRangeInput,
                t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
            return this.refineRange(t) || {
                start: null,
                end: null
            }
        }, e.prototype.buildCurrentRangeInfo = function (e, t) {
            var n, r = this.props,
                o = null,
                i = null,
                a = null;
            return r.duration ? (o = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = Ut(o = this.getFallbackDuration()).unit, a = this.buildRangeFromDuration(e, t, o, i)), {
                duration: o,
                unit: i,
                range: a
            }
        }, e.prototype.getFallbackDuration = function () {
            return kt({
                day: 1
            })
        }, e.prototype.adjustActiveRange = function (e) {
            var t = this.props,
                n = t.dateEnv,
                r = t.usesMinMaxTime,
                o = t.slotMinTime,
                i = t.slotMaxTime,
                a = e.start,
                s = e.end;
            return r && (Ht(o) < 0 && (a = ot(a), a = n.add(a, o)), Ht(i) > 1 && (s = $e(s = ot(s), -1), s = n.add(s, i))), {
                start: a,
                end: s
            }
        }, e.prototype.buildRangeFromDuration = function (e, t, n, r) {
            var o, i, a, s = this.props,
                l = s.dateEnv,
                u = s.dateAlignment;
            if (!u) {
                var c = this.props.dateIncrement;
                u = c && Wt(c) < Wt(n) ? Ut(c).unit : r
            }

            function d() {
                o = l.startOf(e, u), i = l.add(o, n), a = {
                    start: o,
                    end: i
                }
            }
            return Ht(n) <= 1 && this.isHiddenDay(o) && (o = ot(o = this.skipHiddenDays(o, t))), d(), this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), d()), a
        }, e.prototype.buildRangeFromDayCount = function (e, t, n) {
            var r, o = this.props,
                i = o.dateEnv,
                a = o.dateAlignment,
                s = 0,
                l = e;
            a && (l = i.startOf(l, a)), l = ot(l), r = l = this.skipHiddenDays(l, t);
            do {
                r = $e(r, 1), this.isHiddenDay(r) || (s += 1)
            } while (s < n);
            return {
                start: l,
                end: r
            }
        }, e.prototype.buildCustomVisibleRange = function (e) {
            var t = this.props,
                n = t.visibleRangeInput,
                r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
                o = this.refineRange(r);
            return !o || null != o.start && null != o.end ? o : null
        }, e.prototype.buildRenderRange = function (e, t, n) {
            return e
        }, e.prototype.buildDateIncrement = function (e) {
            var t, n = this.props.dateIncrement;
            return n || ((t = this.props.dateAlignment) ? kt(1, t) : e || kt({
                days: 1
            }))
        }, e.prototype.refineRange = function (e) {
            if (e) {
                var t = (n = e, r = this.props.dateEnv, o = null, i = null, n.start && (o = r.createMarker(n.start)), n.end && (i = r.createMarker(n.end)), o || i ? o && i && i < o ? null : {
                    start: o,
                    end: i
                } : null);
                return t && (t = zn(t)), t
            }
            var n, r, o, i;
            return null
        }, e.prototype.initHiddenDays = function () {
            var e, t = this.props.hiddenDays || [],
                n = [],
                r = 0;
            for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)(n[e] = -1 !== t.indexOf(e)) || (r += 1);
            if (!r) throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
        }, e.prototype.trimHiddenDays = function (e) {
            var t = e.start,
                n = e.end;
            return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
                start: t,
                end: n
            } : null
        }, e.prototype.isHiddenDay = function (e) {
            return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
        }, e.prototype.skipHiddenDays = function (e, t, n) {
            for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = $e(e, t);
            return e
        }, e
    }();

    function si(e, t, n) {
        var r = t ? t.activeRange : null;
        return ci({}, function (e, t) {
            var n = _r(t),
                r = [].concat(e.eventSources || []),
                o = [];
            e.initialEvents && r.unshift(e.initialEvents);
            e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
                var s = Tr(a[i], t, n);
                s && o.push(s)
            }
            return o
        }(e, n), r, n)
    }

    function li(e, t, n, o) {
        var i, a, s = n ? n.activeRange : null;
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return ci(e, t.sources, s, o);
            case "REMOVE_EVENT_SOURCE":
                return i = e, a = t.sourceId, gt(i, (function (e) {
                    return e.sourceId !== a
                }));
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return n ? di(e, s, o) : e;
            case "FETCH_EVENT_SOURCES":
                return pi(e, t.sourceIds ? yt(t.sourceIds) : hi(e, o), s, t.isRefetch || !1, o);
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return function (e, t, n, o) {
                    var i, a = e[t];
                    if (a && n === a.latestFetchId) return r(r({}, e), ((i = {})[t] = r(r({}, a), {
                        isFetching: !1,
                        fetchRange: o
                    }), i));
                    return e
                }(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
    }

    function ui(e) {
        for (var t in e)
            if (e[t].isFetching) return !0;
        return !1
    }

    function ci(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l
        }
        return n && (i = di(i, n, o)), r(r({}, e), i)
    }

    function di(e, t, n) {
        return pi(e, gt(e, (function (e) {
            return function (e, t, n) {
                if (!vi(e, n)) return !e.latestFetchId;
                return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end
            }(e, t, n)
        })), t, !1, n)
    }

    function pi(e, t, n, r, o) {
        var i = {};
        for (var a in e) {
            var s = e[a];
            t[a] ? i[a] = fi(s, n, r, o) : i[a] = s
        }
        return i
    }

    function fi(e, t, n, o) {
        var i = o.options,
            a = o.calendarApi,
            s = o.pluginHooks.eventSourceDefs[e.sourceDefId],
            l = He();
        return s.fetch({
            eventSource: e,
            range: t,
            isRefetch: n,
            context: o
        }, (function (n) {
            var r = n.rawEvents;
            i.eventSourceSuccess && (r = i.eventSourceSuccess.call(a, r, n.xhr) || r), e.success && (r = e.success.call(a, r, n.xhr) || r), o.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: e.sourceId,
                fetchId: l,
                fetchRange: t,
                rawEvents: r
            })
        }), (function (n) {
            console.warn(n.message, n), i.eventSourceFailure && i.eventSourceFailure.call(a, n), e.failure && e.failure(n), o.dispatch({
                type: "RECEIVE_EVENT_ERROR",
                sourceId: e.sourceId,
                fetchId: l,
                fetchRange: t,
                error: n
            })
        })), r(r({}, e), {
            isFetching: !0,
            latestFetchId: l
        })
    }

    function hi(e, t) {
        return gt(e, (function (e) {
            return vi(e, t)
        }))
    }

    function vi(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
    }

    function gi(e, t, n, r, o) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = bn(function (e, t, n) {
                            var r = n.options.eventDataTransform,
                                o = t ? t.eventDataTransform : null;
                            o && (e = mi(e, o));
                            r && (e = mi(e, r));
                            return e
                        }(o, t, i), t, i);
                        return r && (a = wt(a, r, i)), wn(yi(e, t.sourceId), a)
                    }
                    return e
                }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case "ADD_EVENTS":
                return function (e, t, n, r) {
                    n && (t = wt(t, n, r));
                    return wn(e, t)
                }(e, t.eventStore, r ? r.activeRange : null, o);
            case "RESET_EVENTS":
                return t.eventStore;
            case "MERGE_EVENTS":
                return wn(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return r ? wt(e, r.activeRange, o) : e;
            case "REMOVE_EVENTS":
                return function (e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {},
                        i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r) !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return {
                        defs: o,
                        instances: i
                    }
                }(e, t.eventStore);
            case "REMOVE_EVENT_SOURCE":
                return yi(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return Tn(e, (function (e) {
                    return !e.sourceId
                }));
            case "REMOVE_ALL_EVENTS":
                return {
                    defs: {},
                        instances: {}
                };
            default:
                return e
        }
    }

    function mi(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a ? n.push(a) : null == a && n.push(i)
            }
        } else n = e;
        return n
    }

    function yi(e, t) {
        return Tn(e, (function (e) {
            return e.sourceId !== t
        }))
    }

    function Si(e, t) {
        switch (t.type) {
            case "UNSELECT_DATES":
                return null;
            case "SELECT_DATES":
                return t.selection;
            default:
                return e
        }
    }

    function Ei(e, t) {
        switch (t.type) {
            case "UNSELECT_EVENT":
                return "";
            case "SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e
        }
    }

    function bi(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_DRAG":
                return null;
            case "SET_EVENT_DRAG":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                        mutatedEvents: n.mutatedEvents,
                        isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function Ci(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_RESIZE":
                return null;
            case "SET_EVENT_RESIZE":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                        mutatedEvents: n.mutatedEvents,
                        isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function Di(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar ? Ri(e.headerToolbar, e, t, n, r, o, i) : null,
            footerToolbar: e.footerToolbar ? Ri(e.footerToolbar, e, t, n, r, o, i) : null,
            viewsWithButtons: i
        }
    }

    function Ri(e, t, n, r, o, i, a) {
        return mt(e, (function (e) {
            return function (e, t, n, r, o, i, a) {
                var s = "rtl" === t.direction,
                    l = t.customButtons || {},
                    u = n.buttonText || {},
                    c = t.buttonText || {};
                return (e ? e.split(" ") : []).map((function (e) {
                    return e.split(",").map((function (e) {
                        return "title" === e ? {
                            buttonName: e
                        } : ((t = l[e]) ? (d = function (e) {
                            t.click && t.click.call(e.target, e, e.target)
                        }, (p = r.getCustomButtonIconClass(t)) || (p = r.getIconClass(e, s)) || (f = t.text)) : (n = o[e]) ? (a.push(e), d = function () {
                            i.changeView(e)
                        }, (f = n.buttonTextOverride) || (p = r.getIconClass(e, s)) || (f = n.buttonTextDefault)) : i[e] && (d = function () {
                            i[e]()
                        }, (f = u[e]) || (p = r.getIconClass(e, s)) || (f = c[e])), {
                            buttonName: e,
                            buttonClick: d,
                            buttonIcon: p,
                            buttonText: f
                        });
                        var t, n, d, p, f
                    }))
                }))
            }(e, t, n, r, o, i, a)
        }))
    }

    function wi(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase()) ? t = function (e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + Ti(t)
        }(t, n): i = Ti(n);
        var a = new XMLHttpRequest;
        a.open(e, t, !0), "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onload = function () {
            if (a.status >= 200 && a.status < 400) {
                var e = !1,
                    t = void 0;
                try {
                    t = JSON.parse(a.responseText), e = !0
                } catch (e) {}
                e ? r(t, a) : o("Failure parsing JSON", a)
            } else o("Request failed", a)
        }, a.onerror = function () {
            o("Request failed", a)
        }, a.send(i)
    }

    function Ti(e) {
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }

    function _i(e, t) {
        for (var n = St(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                    n.splice(l, 1), s = !0;
                    break
                }
            s || r.push(a)
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: d.sourceId
            })
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h)
        }
    }
    var xi = [Fo({
        eventSourceDefs: [{
            ignoreRange: !0,
            parseMeta: function (e) {
                return Array.isArray(e.events) ? e.events : null
            },
            fetch: function (e, t) {
                t({
                    rawEvents: e.eventSource.meta
                })
            }
        }]
    }), Fo({
        eventSourceDefs: [{
            parseMeta: function (e) {
                return "function" == typeof e.events ? e.events : null
            },
            fetch: function (e, t, n) {
                var r = e.context.dateEnv;
                yo(e.eventSource.meta.bind(null, vr(e.range, r)), (function (e) {
                    t({
                        rawEvents: e
                    })
                }), n)
            }
        }]
    }), Fo({
        eventSourceRefiners: {
            method: String,
            extraParams: En,
            startParam: String,
            endParam: String,
            timeZoneParam: String
        },
        eventSourceDefs: [{
            parseMeta: function (e) {
                return !e.url || "json" !== e.format && e.format ? null : {
                    url: e.url,
                    format: "json",
                    method: (e.method || "GET").toUpperCase(),
                    extraParams: e.extraParams,
                    startParam: e.startParam,
                    endParam: e.endParam,
                    timeZoneParam: e.timeZoneParam
                }
            },
            fetch: function (e, t, n) {
                var o = e.eventSource.meta,
                    i = function (e, t, n) {
                        var o, i, a, s, l = n.dateEnv,
                            u = n.options,
                            c = {};
                        null == (o = e.startParam) && (o = u.startParam);
                        null == (i = e.endParam) && (i = u.endParam);
                        null == (a = e.timeZoneParam) && (a = u.timeZoneParam);
                        s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                        r(c, s), c[o] = l.formatIso(t.start), c[i] = l.formatIso(t.end), "local" !== l.timeZone && (c[a] = l.timeZone);
                        return c
                    }(o, e.range, e.context);
                wi(o.method, o.url, i, (function (e, n) {
                    t({
                        rawEvents: e,
                        xhr: n
                    })
                }), (function (e, t) {
                    n({
                        message: e,
                        xhr: t
                    })
                }))
            }
        }]
    }), Fo({
        recurringTypes: [{
            parse: function (e, t) {
                if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                    var n = {
                            daysOfWeek: e.daysOfWeek || null,
                            startTime: e.startTime || null,
                            endTime: e.endTime || null,
                            startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                            endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                        },
                        r = void 0;
                    return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (o = e.endTime, i = e.startTime, r = {
                        years: o.years - i.years,
                        months: o.months - i.months,
                        days: o.days - i.days,
                        milliseconds: o.milliseconds - i.milliseconds
                    }), {
                        allDayGuess: Boolean(!e.startTime && !e.endTime),
                        duration: r,
                        typeData: n
                    }
                }
                var o, i;
                return null
            },
            expand: function (e, t, n) {
                var r = qn(t, {
                    start: e.startRecur,
                    end: e.endRecur
                });
                return r ? function (e, t, n, r) {
                    var o = e ? yt(e) : null,
                        i = ot(n.start),
                        a = n.end,
                        s = [];
                    for (; i < a;) {
                        var l = void 0;
                        o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i, s.push(l)), i = $e(i, 1)
                    }
                    return s
                }(e.daysOfWeek, e.startTime, r, n) : []
            }
        }],
        eventRefiners: {
            daysOfWeek: En,
            startTime: kt,
            endTime: kt,
            duration: kt,
            startRecur: En,
            endRecur: En
        }
    }), Fo({
        optionChangeHandlers: {
            events: function (e, t) {
                _i([e], t)
            },
            eventSources: _i
        }
    }), Fo({
        isLoadingFuncs: [function (e) {
            return ui(e.eventSources)
        }],
        contentTypeHandlers: {
            html: function () {
                return {
                    render: ki
                }
            },
            domNodes: function () {
                return {
                    render: Mi
                }
            }
        },
        propSetHandlers: {
            dateProfile: function (e, t) {
                t.emitter.trigger("datesSet", r(r({}, vr(e.activeRange, t.dateEnv)), {
                    view: t.viewApi
                }))
            },
            eventStore: function (e, t) {
                var n = t.emitter;
                n.hasHandlers("eventsSet") && n.trigger("eventsSet", Ir(e, t))
            }
        }
    })];

    function ki(e, t) {
        e.innerHTML = t
    }

    function Mi(e, t) {
        var n = Array.prototype.slice.call(e.childNodes),
            r = Array.prototype.slice.call(t);
        if (!jt(n, r)) {
            for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a)
            }
            n.forEach(Se)
        }
    }
    var Pi = function () {
            function e(e) {
                this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0
            }
            return e.prototype.request = function (e) {
                this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
            }, e.prototype.pause = function (e) {
                void 0 === e && (e = "");
                var t = this.pauseDepths;
                t[e] = (t[e] || 0) + 1, this.clearTimeout()
            }, e.prototype.resume = function (e, t) {
                void 0 === e && (e = "");
                var n = this.pauseDepths;
                if (e in n) {
                    if (t) delete n[e];
                    else n[e] -= 1, n[e] <= 0 && delete n[e];
                    this.tryDrain()
                }
            }, e.prototype.isPaused = function () {
                return Object.keys(this.pauseDepths).length
            }, e.prototype.tryDrain = function () {
                if (!this.isRunning && !this.isPaused()) {
                    for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
                    this.isRunning = !1
                }
            }, e.prototype.clear = function () {
                this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {}
            }, e.prototype.clearTimeout = function () {
                this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
            }, e.prototype.drained = function () {
                this.drainedOption && this.drainedOption()
            }, e
        }(),
        Ii = function () {
            function e(e, t) {
                this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new Pi(this.drain.bind(this))
            }
            return e.prototype.request = function (e, t) {
                this.queue.push(e), this.delayedRunner.request(t)
            }, e.prototype.pause = function (e) {
                this.delayedRunner.pause(e)
            }, e.prototype.resume = function (e, t) {
                this.delayedRunner.resume(e, t)
            }, e.prototype.drain = function () {
                for (var e = this.queue; e.length;) {
                    for (var t = [], n = void 0; n = e.shift();) this.runTask(n), t.push(n);
                    this.drained(t)
                }
            }, e.prototype.runTask = function (e) {
                this.runTaskOption && this.runTaskOption(e)
            }, e.prototype.drained = function (e) {
                this.drainedOption && this.drainedOption(e)
            }, e
        }();

    function Ni(e, t, n) {
        var r;
        return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, cn(t.titleFormat || function (e) {
            var t = e.currentRangeUnit;
            if ("year" === t) return {
                year: "numeric"
            };
            if ("month" === t) return {
                year: "numeric",
                month: "long"
            };
            var n = rt(e.currentRange.start, e.currentRange.end);
            if (null !== n && n > 1) return {
                year: "numeric",
                month: "short",
                day: "numeric"
            };
            return {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        }(e)), {
            isEndExclusive: e.isRangeAllDay,
            defaultSeparator: t.titleRangeSeparator
        })
    }
    var Hi = function () {
        function e(e) {
            var t = this;
            this.computeOptionsData = qt(this._computeOptionsData), this.computeCurrentViewData = qt(this._computeCurrentViewData), this.organizeRawLocales = qt(zr), this.buildLocale = qt(Vr), this.buildPluginHooks = Go(), this.buildDateEnv = qt(Oi), this.buildTheme = qt(Ai), this.parseToolbars = qt(Di), this.buildViewSpecs = qt(oi), this.buildDateProfileGenerator = Yt(Wi), this.buildViewApi = qt(Li), this.buildViewUiProps = Yt(zi), this.buildEventUiBySource = qt(Ui, Et), this.buildEventUiBases = qt(Bi), this.parseContextBusinessHours = Yt(Fi), this.buildTitle = qt(Ni), this.emitter = new So, this.actionRunner = new Ii(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function () {
                return t.data
            }, this.dispatch = function (e) {
                t.actionRunner.request(e)
            }, this.props = e, this.actionRunner.pause();
            var n = {},
                o = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
                i = o.calendarOptions.initialView || o.pluginHooks.initialView,
                a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
            e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(a.options);
            var s, l, u, c = (s = o.calendarOptions, l = o.dateEnv, null != (u = s.initialDate) ? l.createMarker(u) : xr(s.now, l)),
                d = a.dateProfileGenerator.build(c);
            Kn(d.activeRange, c) || (c = d.currentRange.start);
            for (var p = {
                    dateEnv: o.dateEnv,
                    options: o.calendarOptions,
                    pluginHooks: o.pluginHooks,
                    calendarApi: e.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, f = 0, h = o.pluginHooks.contextInit; f < h.length; f++) {
                (0, h[f])(p)
            }
            for (var v = si(o.calendarOptions, d, p), g = {
                    dynamicOptionOverrides: n,
                    currentViewType: i,
                    currentDate: c,
                    dateProfile: d,
                    businessHours: this.parseContextBusinessHours(p),
                    eventSources: v,
                    eventUiBases: {},
                    eventStore: {
                        defs: {},
                        instances: {}
                    },
                    renderableEventStore: {
                        defs: {},
                        instances: {}
                    },
                    dateSelection: null,
                    eventSelection: "",
                    eventDrag: null,
                    eventResize: null,
                    selectionConfig: this.buildViewUiProps(p).selectionConfig
                }, m = r(r({}, p), g), y = 0, S = o.pluginHooks.reducers; y < S.length; y++) {
                var E = S[y];
                r(g, E(null, null, m))
            }
            Vi(g, p) && this.emitter.trigger("loading", !0), this.state = g, this.updateData(), this.actionRunner.resume()
        }
        return e.prototype.resetOptions = function (e, t) {
            var n = this.props;
            n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e, this.actionRunner.request({
                type: "NOTHING"
            })
        }, e.prototype._handleAction = function (e) {
            var t = this,
                n = t.props,
                o = t.state,
                i = t.emitter,
                a = function (e, t) {
                    var n;
                    switch (t.type) {
                        case "SET_OPTION":
                            return r(r({}, e), ((n = {})[t.optionName] = t.rawOptionValue, n));
                        default:
                            return e
                    }
                }(o.dynamicOptionOverrides, e),
                s = this.computeOptionsData(n.optionOverrides, a, n.calendarApi),
                l = function (e, t) {
                    switch (t.type) {
                        case "CHANGE_VIEW_TYPE":
                            e = t.viewType
                    }
                    return e
                }(o.currentViewType, e),
                u = this.computeCurrentViewData(l, s, n.optionOverrides, a);
            n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(u.options);
            var c = {
                    dateEnv: s.dateEnv,
                    options: s.calendarOptions,
                    pluginHooks: s.pluginHooks,
                    calendarApi: n.calendarApi,
                    dispatch: this.dispatch,
                    emitter: i,
                    getCurrentData: this.getCurrentData
                },
                d = o.currentDate,
                p = o.dateProfile;
            this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (p = u.dateProfileGenerator.build(d)), p = function (e, t, n, r) {
                var o;
                switch (t.type) {
                    case "CHANGE_VIEW_TYPE":
                        return r.build(t.dateMarker || n);
                    case "CHANGE_DATE":
                        if (!e.activeRange || !Kn(e.currentRange, t.dateMarker)) return r.build(t.dateMarker);
                        break;
                    case "PREV":
                        if ((o = r.buildPrev(e, n)).isValid) return o;
                        break;
                    case "NEXT":
                        if ((o = r.buildNext(e, n)).isValid) return o
                }
                return e
            }(p, e, d = function (e, t) {
                switch (t.type) {
                    case "CHANGE_DATE":
                        return t.dateMarker;
                    default:
                        return e
                }
            }(d, e), u.dateProfileGenerator), Kn(p.currentRange, d) || (d = p.currentRange.start);
            for (var f = li(o.eventSources, e, p, c), h = gi(o.eventStore, e, f, p, c), v = ui(f) && !u.options.progressiveEventRendering && o.renderableEventStore || h, g = this.buildViewUiProps(c), m = g.eventUiSingleBase, y = g.selectionConfig, S = this.buildEventUiBySource(f), E = {
                    dynamicOptionOverrides: a,
                    currentViewType: l,
                    currentDate: d,
                    dateProfile: p,
                    eventSources: f,
                    eventStore: h,
                    renderableEventStore: v,
                    selectionConfig: y,
                    eventUiBases: this.buildEventUiBases(v.defs, m, S),
                    businessHours: this.parseContextBusinessHours(c),
                    dateSelection: Si(o.dateSelection, e),
                    eventSelection: Ei(o.eventSelection, e),
                    eventDrag: bi(o.eventDrag, e),
                    eventResize: Ci(o.eventResize, e)
                }, b = r(r({}, c), E), C = 0, D = s.pluginHooks.reducers; C < D.length; C++) {
                var R = D[C];
                r(E, R(o, e, b))
            }
            var w = Vi(o, c),
                T = Vi(E, c);
            !w && T ? i.trigger("loading", !0) : w && !T && i.trigger("loading", !1), this.state = E, n.onAction && n.onAction(e)
        }, e.prototype.updateData = function () {
            var e, t, n, o, i = this.props,
                a = this.state,
                s = this.data,
                l = this.computeOptionsData(i.optionOverrides, a.dynamicOptionOverrides, i.calendarApi),
                u = this.computeCurrentViewData(a.currentViewType, l, i.optionOverrides, a.dynamicOptionOverrides),
                c = this.data = r(r(r({
                    viewTitle: this.buildTitle(a.dateProfile, u.options, l.dateEnv),
                    calendarApi: i.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, l), u), a),
                d = l.pluginHooks.optionChangeHandlers,
                p = s && s.calendarOptions,
                f = l.calendarOptions;
            if (p && p !== f)
                for (var h in p.timeZone !== f.timeZone && (a.eventSources = c.eventSources = (e = c.eventSources, t = a.dateProfile, n = c, o = t ? t.activeRange : null, pi(e, hi(e, n), o, !0, n)), a.eventStore = c.eventStore = function (e, t, n) {
                        var o = e.defs,
                            i = mt(e.instances, (function (e) {
                                var i = o[e.defId];
                                return i.allDay || i.recurringDef ? e : r(r({}, e), {
                                    range: {
                                        start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                                        end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                                    },
                                    forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                                    forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
                                })
                            }));
                        return {
                            defs: o,
                            instances: i
                        }
                    }(c.eventStore, s.dateEnv, c.dateEnv)), d) p[h] !== f[h] && d[h](f[h], c);
            i.onData && i.onData(c)
        }, e.prototype._computeOptionsData = function (e, t, n) {
            var r = this.processRawCalendarOptions(e, t),
                o = r.refinedOptions,
                i = r.pluginHooks,
                a = r.localeDefaults,
                s = r.availableLocaleData;
            Gi(r.extra);
            var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
                u = this.buildViewSpecs(i.views, e, t, a),
                c = this.buildTheme(o, i);
            return {
                calendarOptions: o,
                pluginHooks: i,
                dateEnv: l,
                viewSpecs: u,
                theme: c,
                toolbarConfig: this.parseToolbars(o, e, c, u, n),
                localeDefaults: a,
                availableRawLocales: s.map
            }
        }, e.prototype.processRawCalendarOptions = function (e, t) {
            var n = yn([pn, e, t]),
                o = n.locales,
                i = n.locale,
                a = this.organizeRawLocales(o),
                s = a.map,
                l = this.buildLocale(i || a.defaultCode, s).options,
                u = this.buildPluginHooks(e.plugins || [], xi),
                c = this.currentCalendarOptionsRefiners = r(r(r(r(r({}, dn), fn), hn), u.listenerRefiners), u.optionRefiners),
                d = {},
                p = yn([pn, l, e, t]),
                f = {},
                h = this.currentCalendarOptionsInput,
                v = this.currentCalendarOptionsRefined,
                g = !1;
            for (var m in p) "plugins" !== m && (p[m] === h[m] || vn[m] && m in h && vn[m](h[m], p[m]) ? f[m] = v[m] : c[m] ? (f[m] = c[m](p[m]), g = !0) : d[m] = h[m]);
            return g && (this.currentCalendarOptionsInput = p, this.currentCalendarOptionsRefined = f), {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks: u,
                availableLocaleData: a,
                localeDefaults: l,
                extra: d
            }
        }, e.prototype._computeCurrentViewData = function (e, t, n, r) {
            var o = t.viewSpecs[e];
            if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
            var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r),
                a = i.refinedOptions;
            return Gi(i.extra), {
                viewSpec: o,
                options: a,
                dateProfileGenerator: this.buildDateProfileGenerator({
                    dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                    duration: o.duration,
                    durationUnit: o.durationUnit,
                    usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                    dateEnv: t.dateEnv,
                    calendarApi: this.props.calendarApi,
                    slotMinTime: a.slotMinTime,
                    slotMaxTime: a.slotMaxTime,
                    showNonCurrentDates: a.showNonCurrentDates,
                    dayCount: a.dayCount,
                    dateAlignment: a.dateAlignment,
                    dateIncrement: a.dateIncrement,
                    hiddenDays: a.hiddenDays,
                    weekends: a.weekends,
                    nowInput: a.now,
                    validRangeInput: a.validRange,
                    visibleRangeInput: a.visibleRange,
                    monthMode: a.monthMode,
                    fixedWeekCount: a.fixedWeekCount
                }),
                viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
            }
        }, e.prototype.processRawViewOptions = function (e, t, n, o, i) {
            var a = yn([pn, e.optionDefaults, n, o, e.optionOverrides, i]),
                s = r(r(r(r(r(r({}, dn), fn), hn), mn), t.listenerRefiners), t.optionRefiners),
                l = {},
                u = this.currentViewOptionsInput,
                c = this.currentViewOptionsRefined,
                d = !1,
                p = {};
            for (var f in a) a[f] === u[f] ? l[f] = c[f] : (a[f] === this.currentCalendarOptionsInput[f] ? f in this.currentCalendarOptionsRefined && (l[f] = this.currentCalendarOptionsRefined[f]) : s[f] ? l[f] = s[f](a[f]) : p[f] = a[f], d = !0);
            return d && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = l), {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra: p
            }
        }, e
    }();

    function Oi(e, t, n, r, o, i, a, s) {
        var l = Vr(t || a.defaultCode, a.map);
        return new Lr({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s
        })
    }

    function Ai(e, t) {
        return new(t.themeClasses[e.themeSystem] || jo)(e)
    }

    function Wi(e) {
        return new(e.dateProfileGeneratorClass || ai)(e)
    }

    function Li(e, t, n) {
        return new Rr(e, t, n)
    }

    function Ui(e) {
        return mt(e, (function (e) {
            return e.ui
        }))
    }

    function Bi(e, t, n) {
        var r = {
            "": t
        };
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId])
        }
        return r
    }

    function zi(e) {
        var t = e.options;
        return {
            eventUiSingleBase: Mn({
                display: t.eventDisplay,
                editable: t.editable,
                startEditable: t.eventStartEditable,
                durationEditable: t.eventDurationEditable,
                constraint: t.eventConstraint,
                overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                allow: t.eventAllow,
                backgroundColor: t.eventBackgroundColor,
                borderColor: t.eventBorderColor,
                textColor: t.eventTextColor,
                color: t.eventColor
            }, e),
            selectionConfig: Mn({
                constraint: t.selectConstraint,
                overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                allow: t.selectAllow
            }, e)
        }
    }

    function Vi(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
            if ((0, r[n])(e)) return !0
        }
        return !1
    }

    function Fi(e) {
        return Yr(e.options.businessHours, e)
    }

    function Gi(e, t) {
        for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""))
    }
    var ji = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleData = function (e) {
                n.dataManager ? n.setState(e) : n.state = e
            }, n.dataManager = new Hi({
                optionOverrides: t.optionOverrides,
                calendarApi: t.calendarApi,
                onData: n.handleData
            }), n
        }
        return n(t, e), t.prototype.render = function () {
            return this.props.children(this.state)
        }, t.prototype.componentDidUpdate = function (e) {
            var t = this.props.optionOverrides;
            t !== e.optionOverrides && this.dataManager.resetOptions(t)
        }, t
    }(wo);
    var qi = function (e) {
            this.timeZoneName = e
        },
        Yi = function () {
            function e() {
                this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {}
            }
            return e.prototype.addSegs = function (e) {
                for (var t = [], n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    this.insertEntry({
                        segInput: o,
                        spanStart: o.spanStart,
                        spanEnd: o.spanEnd,
                        thickness: o.thickness
                    }, t)
                }
                return t
            }, e.prototype.insertEntry = function (e, t) {
                var n = this.findInsertion(e);
                return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t)
            }, e.prototype.isInsertionValid = function (e, t) {
                return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
            }, e.prototype.handleInvalidInsertion = function (e, t, n) {
                return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0)
            }, e.prototype.splitEntry = function (e, t, n) {
                var i = 0,
                    a = [];
                return e.spanStart < t.spanStart && (i += this.insertEntry(r(r({}, e), {
                    spanStart: e.spanStart,
                    spanEnd: t.spanStart
                }), a)), t.spanEnd < e.spanEnd && (i += this.insertEntry(r(r({}, e), {
                    spanStart: t.spanEnd,
                    spanEnd: e.spanEnd
                }), a)), i ? (n.push.apply(n, o([r(r({}, e), {
                    spanStart: Math.max(t.spanStart, e.spanStart),
                    spanEnd: Math.min(t.spanEnd, e.spanEnd)
                })], a)), i) : (n.push(e), 0)
            }, e.prototype.insertEntryAt = function (e, t) {
                var n = t.nextLevel;
                !n || this.levelCoords[n - 1] < t.levelCoord ? ($i(this.levelCoords, n, t.levelCoord), $i(this.entriesByLevel, n, [e])) : $i(this.entriesByLevel[n - 1], t.lateralEnd, e), this.stackCnts[Xi(e)] = t.stackCnt
            }, e.prototype.findInsertion = function (e) {
                var t, n, r = this,
                    o = r.levelCoords,
                    i = r.entriesByLevel,
                    a = r.stackCnts,
                    s = r.strictOrder,
                    l = o.length,
                    u = 0,
                    c = 0,
                    d = 0,
                    p = null;
                for (t = 0; t < l && (n = o[t], s || !(n >= d + e.thickness)); t += 1) {
                    var f = i[t],
                        h = void 0,
                        v = Ji(f, e.spanStart, Zi);
                    for (c = u = v[0] + v[1];
                        (h = f[c]) && h.spanStart < e.spanEnd;)(s || d < n + h.thickness && d + e.thickness > n) && (p = h, d = n + h.thickness), c += 1
                }
                return {
                    levelCoord: d,
                    nextLevel: t,
                    lateralStart: u,
                    lateralEnd: c,
                    touchingEntry: p,
                    stackCnt: p ? a[Xi(p)] + 1 : 0
                }
            }, e.prototype.toRects = function () {
                for (var e = this.entriesByLevel, t = this.levelCoords, n = e.length, o = [], i = 0; i < n; i += 1)
                    for (var a = e[i], s = t[i], l = 0, u = a; l < u.length; l++) {
                        var c = u[l];
                        o.push(r(r({}, c), {
                            levelCoord: s
                        }))
                    }
                return o
            }, e
        }();

    function Zi(e) {
        return e.spanEnd
    }

    function Xi(e) {
        return e.segInput.index + ":" + e.spanStart
    }

    function Ki(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            for (var o = r[n], i = [], a = {
                    spanStart: o.spanStart,
                    spanEnd: o.spanEnd,
                    entries: [o]
                }, s = 0, l = t; s < l.length; s++) {
                var u = l[s];
                u.spanStart < a.spanEnd && u.spanEnd > a.spanStart ? a = {
                    spanStart: Math.min(u.spanStart, a.spanStart),
                    spanEnd: Math.max(u.spanEnd, a.spanEnd),
                    entries: u.entries.concat(a.entries)
                } : i.push(u)
            }
            i.push(a), t = i
        }
        return t
    }

    function $i(e, t, n) {
        e.splice(t, 0, n)
    }

    function Ji(e, t, n) {
        var r = 0,
            o = e.length;
        if (!o || t < n(e[r])) return [0, 0];
        if (t > n(e[o - 1])) return [o, 0];
        for (; r < o;) {
            var i = Math.floor(r + (o - r) / 2),
                a = n(e[i]);
            if (t < a) o = i;
            else {
                if (!(t > a)) return [i, 1];
                r = i + 1
            }
        }
        return [r, 0]
    }
    var Qi = function () {
        function e(e) {
            this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null
        }
        return e.prototype.destroy = function () {}, e
    }();

    function ea(e, t) {
        return {
            component: e,
            el: t.el,
            useEventCenter: null == t.useEventCenter || t.useEventCenter,
            isHitComboAllowed: t.isHitComboAllowed || null
        }
    }

    function ta(e) {
        var t;
        return (t = {})[e.component.uid] = e, t
    }
    var na = {},
        ra = function () {
            function e(e, t) {
                this.emitter = new So
            }
            return e.prototype.destroy = function () {}, e.prototype.setMirrorIsVisible = function (e) {}, e.prototype.setMirrorNeedsRevert = function (e) {}, e.prototype.setAutoScrollEnabled = function (e) {}, e
        }(),
        oa = {},
        ia = {
            startTime: kt,
            duration: kt,
            create: Boolean,
            sourceId: String
        };

    function aa(e) {
        var t = Sn(e, ia),
            n = t.refined,
            r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r
        }
    }
    var sa = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props.widgetGroups.map((function (t) {
                        return e.renderWidgetGroup(t)
                    }));
                return To.apply(void 0, o(["div", {
                    className: "fc-toolbar-chunk"
                }], t))
            }, t.prototype.renderWidgetGroup = function (e) {
                for (var t = this.props, n = this.context.theme, i = [], a = !0, s = 0, l = e; s < l.length; s++) {
                    var u = l[s],
                        c = u.buttonName,
                        d = u.buttonClick,
                        p = u.buttonText,
                        f = u.buttonIcon;
                    if ("title" === c) a = !1, i.push(To("h2", {
                        className: "fc-toolbar-title"
                    }, t.title));
                    else {
                        var h = f ? {
                                "aria-label": c
                            } : {},
                            v = ["fc-" + c + "-button", n.getClass("button")];
                        c === t.activeButton && v.push(n.getClass("buttonActive"));
                        var g = !t.isTodayEnabled && "today" === c || !t.isPrevEnabled && "prev" === c || !t.isNextEnabled && "next" === c;
                        i.push(To("button", r({
                            disabled: g,
                            className: v.join(" "),
                            onClick: d,
                            type: "button"
                        }, h), p || (f ? To("span", {
                            className: f
                        }) : "")))
                    }
                }
                if (i.length > 1) {
                    var m = a && n.getClass("buttonGroup") || "";
                    return To.apply(void 0, o(["div", {
                        className: m
                    }], i))
                }
                return i[0]
            }, t
        }(Lo),
        la = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e, t, n = this.props,
                    r = n.model,
                    o = n.extraClassName,
                    i = !1,
                    a = r.center;
                return r.left ? (i = !0, e = r.left) : e = r.start, r.right ? (i = !0, t = r.right) : t = r.end, To("div", {
                    className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
                }, this.renderSection("start", e || []), this.renderSection("center", a || []), this.renderSection("end", t || []))
            }, t.prototype.renderSection = function (e, t) {
                var n = this.props;
                return To(sa, {
                    key: e,
                    widgetGroups: t,
                    title: n.title,
                    activeButton: n.activeButton,
                    isTodayEnabled: n.isTodayEnabled,
                    isPrevEnabled: n.isPrevEnabled,
                    isNextEnabled: n.isNextEnabled
                })
            }, t
        }(Lo),
        ua = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    availableWidth: null
                }, t.handleEl = function (e) {
                    t.el = e, zo(t.props.elRef, e), t.updateAvailableWidth()
                }, t.handleResize = function () {
                    t.updateAvailableWidth()
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.state,
                    n = e.aspectRatio,
                    r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
                    o = "",
                    i = "";
                return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "", To("div", {
                    ref: this.handleEl,
                    onClick: e.onClick,
                    className: r.join(" "),
                    style: {
                        height: o,
                        paddingBottom: i
                    }
                }, e.children)
            }, t.prototype.componentDidMount = function () {
                this.context.addResizeHandler(this.handleResize)
            }, t.prototype.componentWillUnmount = function () {
                this.context.removeResizeHandler(this.handleResize)
            }, t.prototype.updateAvailableWidth = function () {
                this.el && this.props.aspectRatio && this.setState({
                    availableWidth: this.el.offsetWidth
                })
            }, t
        }(Lo),
        ca = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.handleSegClick = function (e, t) {
                    var r = n.component,
                        o = r.context,
                        i = er(t);
                    if (i && r.isValidSegDownEl(e.target)) {
                        var a = Ee(e.target, ".fc-event-forced-url"),
                            s = a ? a.querySelector("a[href]").href : "";
                        o.emitter.trigger("eventClick", {
                            el: t,
                            event: new Mr(r.context, i.eventRange.def, i.eventRange.instance),
                            jsEvent: e,
                            view: o.viewApi
                        }), s && !e.defaultPrevented && (window.location.href = s)
                    }
                }, n.destroy = Me(t.el, "click", ".fc-event", n.handleSegClick), n
            }
            return n(t, e), t
        }(Qi),
        da = function (e) {
            function t(t) {
                var n, r, o, i, a, s = e.call(this, t) || this;
                return s.handleEventElRemove = function (e) {
                    e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl)
                }, s.handleSegEnter = function (e, t) {
                    er(t) && (s.currentSegEl = t, s.triggerEvent("eventMouseEnter", e, t))
                }, s.handleSegLeave = function (e, t) {
                    s.currentSegEl && (s.currentSegEl = null, s.triggerEvent("eventMouseLeave", e, t))
                }, s.removeHoverListeners = (n = t.el, r = ".fc-event", o = s.handleSegEnter, i = s.handleSegLeave, Me(n, "mouseover", r, (function (e, t) {
                    if (t !== a) {
                        a = t, o(e, t);
                        var n = function (e) {
                            a = null, i(e, t), t.removeEventListener("mouseleave", n)
                        };
                        t.addEventListener("mouseleave", n)
                    }
                }))), s
            }
            return n(t, e), t.prototype.destroy = function () {
                this.removeHoverListeners()
            }, t.prototype.triggerEvent = function (e, t, n) {
                var r = this.component,
                    o = r.context,
                    i = er(n);
                t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
                    el: n,
                    event: new Mr(o, i.eventRange.def, i.eventRange.instance),
                    jsEvent: t,
                    view: o.viewApi
                })
            }, t
        }(Qi),
        pa = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildViewContext = qt(Ao), t.buildViewPropTransformers = qt(ha), t.buildToolbarProps = qt(fa), t.handleNavLinkClick = ke("a[data-navlink]", t._handleNavLinkClick.bind(t)), t.headerRef = xo(), t.footerRef = xo(), t.interactionsStore = {}, t.registerInteractiveComponent = function (e, n) {
                    var r = ea(e, n),
                        o = [ca, da].concat(t.props.pluginHooks.componentInteractions).map((function (e) {
                            return new e(r)
                        }));
                    t.interactionsStore[e.uid] = o, na[e.uid] = r
                }, t.unregisterInteractiveComponent = function (e) {
                    for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
                        r[n].destroy()
                    }
                    delete t.interactionsStore[e.uid], delete na[e.uid]
                }, t.resizeRunner = new Pi((function () {
                    t.props.emitter.trigger("_resize", !0), t.props.emitter.trigger("windowResize", {
                        view: t.props.viewApi
                    })
                })), t.handleWindowResize = function (e) {
                    var n = t.props.options;
                    n.handleWindowResize && e.target === window && t.resizeRunner.request(n.windowResizeDelay)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e, t = this.props,
                    n = t.toolbarConfig,
                    o = t.options,
                    i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, xr(t.options.now, t.dateEnv), t.viewTitle),
                    a = !1,
                    s = "";
                t.isHeightAuto || t.forPrint ? s = "" : null != o.height ? a = !0 : null != o.contentHeight ? s = o.contentHeight : e = Math.max(o.aspectRatio, .5);
                var l = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
                return To(Oo.Provider, {
                    value: l
                }, n.headerToolbar && To(la, r({
                    ref: this.headerRef,
                    extraClassName: "fc-header-toolbar",
                    model: n.headerToolbar
                }, i)), To(ua, {
                    liquid: a,
                    height: s,
                    aspectRatio: e,
                    onClick: this.handleNavLinkClick
                }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && To(la, r({
                    ref: this.footerRef,
                    extraClassName: "fc-footer-toolbar",
                    model: n.footerToolbar
                }, i)))
            }, t.prototype.componentDidMount = function () {
                var e = this.props;
                this.calendarInteractions = e.pluginHooks.calendarInteractions.map((function (t) {
                    return new t(e)
                })), window.addEventListener("resize", this.handleWindowResize);
                var t = e.pluginHooks.propSetHandlers;
                for (var n in t) t[n](e[n], e)
            }, t.prototype.componentDidUpdate = function (e) {
                var t = this.props,
                    n = t.pluginHooks.propSetHandlers;
                for (var r in n) t[r] !== e[r] && n[r](t[r], t)
            }, t.prototype.componentWillUnmount = function () {
                window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
                for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                    t[e].destroy()
                }
                this.props.emitter.trigger("_unmount")
            }, t.prototype._handleNavLinkClick = function (e, t) {
                var n = this.props,
                    r = n.dateEnv,
                    o = n.options,
                    i = n.calendarApi,
                    a = t.getAttribute("data-navlink");
                a = a ? JSON.parse(a) : {};
                var s = r.createMarker(a.date),
                    l = a.type,
                    u = "day" === l ? o.navLinkDayClick : "week" === l ? o.navLinkWeekClick : null;
                "function" == typeof u ? u.call(i, r.toDate(s), e) : ("string" == typeof u && (l = u), i.zoomTo(s, l))
            }, t.prototype.buildAppendContent = function () {
                var e = this.props,
                    t = e.pluginHooks.viewContainerAppends.map((function (t) {
                        return t(e)
                    }));
                return To.apply(void 0, o([ko, {}], t))
            }, t.prototype.renderView = function (e) {
                for (var t = e.pluginHooks, n = e.viewSpec, o = {
                        dateProfile: e.dateProfile,
                        businessHours: e.businessHours,
                        eventStore: e.renderableEventStore,
                        eventUiBases: e.eventUiBases,
                        dateSelection: e.dateSelection,
                        eventSelection: e.eventSelection,
                        eventDrag: e.eventDrag,
                        eventResize: e.eventResize,
                        isHeightAuto: e.isHeightAuto,
                        forPrint: e.forPrint
                    }, i = 0, a = this.buildViewPropTransformers(t.viewPropsTransformers); i < a.length; i++) {
                    var s = a[i];
                    r(o, s.transform(o, e))
                }
                var l = n.component;
                return To(l, r({}, o))
            }, t
        }(Wo);

    function fa(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !Kn(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid
        }
    }

    function ha(e) {
        return e.map((function (e) {
            return new e
        }))
    }
    var va = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                forPrint: !1
            }, t.handleBeforePrint = function () {
                t.setState({
                    forPrint: !0
                })
            }, t.handleAfterPrint = function () {
                t.setState({
                    forPrint: !1
                })
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = e.options,
                n = this.state.forPrint,
                r = n || "auto" === t.height || "auto" === t.contentHeight,
                o = r || null == t.height ? "" : t.height,
                i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
            return eo() || i.push("fc-liquid-hack"), e.children(i, o, r, n)
        }, t.prototype.componentDidMount = function () {
            var e = this.props.emitter;
            e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint)
        }, t.prototype.componentWillUnmount = function () {
            var e = this.props.emitter;
            e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint)
        }, t
    }(Lo);

    function ga(e, t) {
        return cn(!e || t > 10 ? {
            weekday: "short"
        } : t > 1 ? {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            omitCommas: !0
        } : {
            weekday: "long"
        })
    }
    var ma = "fc-col-header-cell";

    function ya(e) {
        return e.text
    }
    var Sa = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.context,
                    t = e.dateEnv,
                    n = e.options,
                    o = e.theme,
                    i = e.viewApi,
                    a = this.props,
                    s = a.date,
                    l = a.dateProfile,
                    u = oo(s, a.todayRange, null, l),
                    c = [ma].concat(io(u, o)),
                    d = t.format(s, a.dayHeaderFormat),
                    p = n.navLinks && !u.isDisabled && a.colCnt > 1 ? {
                        "data-navlink": so(s),
                        tabIndex: 0
                    } : {},
                    f = r(r(r({
                        date: t.toDate(s),
                        view: i
                    }, a.extraHookProps), {
                        text: d
                    }), u);
                return To(Yo, {
                    hookProps: f,
                    classNames: n.dayHeaderClassNames,
                    content: n.dayHeaderContent,
                    defaultContent: ya,
                    didMount: n.dayHeaderDidMount,
                    willUnmount: n.dayHeaderWillUnmount
                }, (function (e, t, n, o) {
                    return To("th", r({
                        ref: e,
                        className: c.concat(t).join(" "),
                        "data-date": u.isDisabled ? void 0 : zt(s),
                        colSpan: a.colSpan
                    }, a.extraDataAttrs), To("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, !u.isDisabled && To("a", r({
                        ref: n,
                        className: ["fc-col-header-cell-cushion", a.isSticky ? "fc-sticky" : ""].join(" ")
                    }, p), o)))
                }))
            }, t
        }(Lo),
        Ea = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    o = t.theme,
                    i = t.viewApi,
                    a = t.options,
                    s = $e(new Date(2592e5), e.dow),
                    l = {
                        dow: e.dow,
                        isDisabled: !1,
                        isFuture: !1,
                        isPast: !1,
                        isToday: !1,
                        isOther: !1
                    },
                    u = [ma].concat(io(l, o), e.extraClassNames || []),
                    c = n.format(s, e.dayHeaderFormat),
                    d = r(r(r(r({
                        date: s
                    }, l), {
                        view: i
                    }), e.extraHookProps), {
                        text: c
                    });
                return To(Yo, {
                    hookProps: d,
                    classNames: a.dayHeaderClassNames,
                    content: a.dayHeaderContent,
                    defaultContent: ya,
                    didMount: a.dayHeaderDidMount,
                    willUnmount: a.dayHeaderWillUnmount
                }, (function (t, n, o, i) {
                    return To("th", r({
                        ref: t,
                        className: u.concat(n).join(" "),
                        colSpan: e.colSpan
                    }, e.extraDataAttrs), To("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, To("a", {
                        className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                        ref: o
                    }, i)))
                }))
            }, t
        }(Lo),
        ba = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.initialNowDate = xr(n.options.now, n.dateEnv), r.initialNowQueriedMs = (new Date).valueOf(), r.state = r.computeTiming().currentState, r
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.state;
                return e.children(t.nowDate, t.todayRange)
            }, t.prototype.componentDidMount = function () {
                this.setTimeout()
            }, t.prototype.componentDidUpdate = function (e) {
                e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
            }, t.prototype.componentWillUnmount = function () {
                this.clearTimeout()
            }, t.prototype.computeTiming = function () {
                var e = this.props,
                    t = this.context,
                    n = Je(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs),
                    r = t.dateEnv.startOf(n, e.unit),
                    o = t.dateEnv.add(r, kt(1, e.unit)),
                    i = o.valueOf() - n.valueOf();
                return i = Math.min(864e5, i), {
                    currentState: {
                        nowDate: r,
                        todayRange: Ca(r)
                    },
                    nextState: {
                        nowDate: o,
                        todayRange: Ca(o)
                    },
                    waitMs: i
                }
            }, t.prototype.setTimeout = function () {
                var e = this,
                    t = this.computeTiming(),
                    n = t.nextState,
                    r = t.waitMs;
                this.timeoutId = setTimeout((function () {
                    e.setState(n, (function () {
                        e.setTimeout()
                    }))
                }), r)
            }, t.prototype.clearTimeout = function () {
                this.timeoutId && clearTimeout(this.timeoutId)
            }, t.contextType = Oo, t
        }(wo);

    function Ca(e) {
        var t = ot(e);
        return {
            start: t,
            end: $e(t, 1)
        }
    }
    var Da = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.createDayHeaderFormatter = qt(Ra), t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.context,
                t = this.props,
                n = t.dates,
                r = t.dateProfile,
                o = t.datesRepDistinctDays,
                i = t.renderIntro,
                a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
            return To(ba, {
                unit: "day"
            }, (function (e, t) {
                return To("tr", null, i && i("day"), n.map((function (e) {
                    return o ? To(Sa, {
                        key: e.toISOString(),
                        date: e,
                        dateProfile: r,
                        todayRange: t,
                        colCnt: n.length,
                        dayHeaderFormat: a
                    }) : To(Ea, {
                        key: e.getUTCDay(),
                        dow: e.getUTCDay(),
                        dayHeaderFormat: a
                    })
                })))
            }))
        }, t
    }(Lo);

    function Ra(e, t, n) {
        return e || ga(t, n)
    }
    var wa = function () {
            function e(e, t) {
                for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) t.isHiddenDay(n) ? o.push(a + .5) : (a += 1, o.push(a), i.push(n)), n = $e(n, 1);
                this.dates = i, this.indices = o, this.cnt = i.length
            }
            return e.prototype.sliceRange = function (e) {
                var t = this.getDateDayIndex(e.start),
                    n = this.getDateDayIndex($e(e.end, -1)),
                    r = Math.max(0, t),
                    o = Math.min(this.cnt - 1, n);
                return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? {
                    firstIndex: r,
                    lastIndex: o,
                    isStart: t === r,
                    isEnd: n === o
                } : null
            }, e.prototype.getDateDayIndex = function (e) {
                var t = this.indices,
                    n = Math.floor(et(this.dates[0], e));
                return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
            }, e
        }(),
        Ta = function () {
            function e(e, t) {
                var n, r, o, i = e.dates;
                if (t) {
                    for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1);
                    o = Math.ceil(i.length / n)
                } else o = 1, n = i.length;
                this.rowCnt = o, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
            }
            return e.prototype.buildCells = function () {
                for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                    for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
                    e.push(n)
                }
                return e
            }, e.prototype.buildCell = function (e, t) {
                var n = this.daySeries.dates[e * this.colCnt + t];
                return {
                    key: n.toISOString(),
                    date: n
                }
            }, e.prototype.buildHeaderDates = function () {
                for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
                return e
            }, e.prototype.sliceRange = function (e) {
                var t = this.colCnt,
                    n = this.daySeries.sliceRange(e),
                    r = [];
                if (n)
                    for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
                        var s = Math.floor(a / t),
                            l = Math.min((s + 1) * t, i + 1);
                        r.push({
                            row: s,
                            firstCol: a % t,
                            lastCol: (l - 1) % t,
                            isStart: n.isStart && a === o,
                            isEnd: n.isEnd && l - 1 === i
                        }), a = l
                    }
                return r
            }, e
        }(),
        _a = function () {
            function e() {
                this.sliceBusinessHours = qt(this._sliceBusinessHours), this.sliceDateSelection = qt(this._sliceDateSpan), this.sliceEventStore = qt(this._sliceEventStore), this.sliceEventDrag = qt(this._sliceInteraction), this.sliceEventResize = qt(this._sliceInteraction), this.forceDayIfListItem = !1
            }
            return e.prototype.sliceProps = function (e, t, n, r) {
                for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
                var s = e.eventUiBases,
                    l = this.sliceEventStore.apply(this, o([e.eventStore, s, t, n], i));
                return {
                    dateSelectionSegs: this.sliceDateSelection.apply(this, o([e.dateSelection, s, r], i)),
                    businessHourSegs: this.sliceBusinessHours.apply(this, o([e.businessHours, t, n, r], i)),
                    fgEventSegs: l.fg,
                    bgEventSegs: l.bg,
                    eventDrag: this.sliceEventDrag.apply(this, o([e.eventDrag, s, t, n], i)),
                    eventResize: this.sliceEventResize.apply(this, o([e.eventResize, s, t, n], i)),
                    eventSelection: e.eventSelection
                }
            }, e.prototype.sliceNowDate = function (e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                return this._sliceDateSpan.apply(this, o([{
                    range: {
                        start: e,
                        end: Je(e, 1)
                    },
                    allDay: !1
                }, {}, t], n))
            }, e.prototype._sliceBusinessHours = function (e, t, n, r) {
                for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
                return e ? this._sliceEventStore.apply(this, o([wt(e, xa(t, Boolean(n)), r), {}, t, n], i)).bg : []
            }, e.prototype._sliceEventStore = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                if (e) {
                    var a = $n(e, t, xa(n, Boolean(r)), r);
                    return {
                        bg: this.sliceEventRanges(a.bg, o),
                        fg: this.sliceEventRanges(a.fg, o)
                    }
                }
                return {
                    bg: [],
                    fg: []
                }
            }, e.prototype._sliceInteraction = function (e, t, n, r) {
                for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
                if (!e) return null;
                var a = $n(e.mutatedEvents, t, xa(n, Boolean(r)), r);
                return {
                    segs: this.sliceEventRanges(a.fg, o),
                    affectedInstances: e.affectedEvents.instances,
                    isEvent: e.isEvent
                }
            }, e.prototype._sliceDateSpan = function (e, t, n) {
                for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                if (!e) return [];
                for (var a = mr(e, t, n), s = this.sliceRange.apply(this, o([e.range], r)), l = 0, u = s; l < u.length; l++) {
                    var c = u[l];
                    c.eventRange = a
                }
                return s
            }, e.prototype.sliceEventRanges = function (e, t) {
                for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.push.apply(n, this.sliceEventRange(i, t))
                }
                return n
            }, e.prototype.sliceEventRange = function (e, t) {
                var n = e.range;
                this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
                    start: n.start,
                    end: $e(n.start, 1)
                });
                for (var r = this.sliceRange.apply(this, o([n], t)), i = 0, a = r; i < a.length; i++) {
                    var s = a[i];
                    s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd
                }
                return r
            }, e
        }();

    function xa(e, t) {
        var n = e.activeRange;
        return t ? n : {
            start: Je(n.start, e.slotMinTime.milliseconds),
            end: Je(n.end, e.slotMaxTime.milliseconds - 864e5)
        }
    }

    function ka(e, t, n) {
        var r = e.mutatedEvents.instances;
        for (var o in r)
            if (!Xn(t.validRange, r[o].range)) return !1;
        return Pa({
            eventDrag: e
        }, n)
    }

    function Ma(e, t, n) {
        return !!Xn(t.validRange, e.range) && Pa({
            dateSelection: e
        }, n)
    }

    function Pa(e, t) {
        var n = t.getCurrentData(),
            o = r({
                businessHours: n.businessHours,
                dateSelection: "",
                eventStore: n.eventStore,
                eventUiBases: n.eventUiBases,
                eventSelection: "",
                eventDrag: null,
                eventResize: null
            }, e);
        return (t.pluginHooks.isPropsValid || Ia)(o, t)
    }

    function Ia(e, t, n, o) {
        return void 0 === n && (n = {}), !(e.eventDrag && ! function (e, t, n, o) {
            var i = t.getCurrentData(),
                a = e.eventDrag,
                s = a.mutatedEvents,
                l = s.defs,
                u = s.instances,
                c = tr(l, a.isEvent ? e.eventUiBases : {
                    "": i.selectionConfig
                });
            o && (c = mt(c, o));
            var d = (v = e.eventStore, g = a.affectedEvents.instances, {
                    defs: v.defs,
                    instances: gt(v.instances, (function (e) {
                        return !g[e.instanceId]
                    }))
                }),
                p = d.defs,
                f = d.instances,
                h = tr(p, e.eventUiBases);
            var v, g;
            for (var m in u) {
                var y = u[m],
                    S = y.range,
                    E = c[y.defId],
                    b = l[y.defId];
                if (!Na(E.constraints, S, d, e.businessHours, t)) return !1;
                var C = t.options.eventOverlap,
                    D = "function" == typeof C ? C : null;
                for (var R in f) {
                    var w = f[R];
                    if (Zn(S, w.range)) {
                        if (!1 === h[w.defId].overlap && a.isEvent) return !1;
                        if (!1 === E.overlap) return !1;
                        if (D && !D(new Mr(t, p[w.defId], w), new Mr(t, b, y))) return !1
                    }
                }
                for (var T = i.eventStore, _ = 0, x = E.allows; _ < x.length; _++) {
                    var k = x[_],
                        M = r(r({}, n), {
                            range: y.range,
                            allDay: b.allDay
                        }),
                        P = T.defs[b.defId],
                        I = T.instances[m],
                        N = void 0;
                    if (N = P ? new Mr(t, P, I) : new Mr(t, b), !k(Sr(M, t), N)) return !1
                }
            }
            return !0
        }(e, t, n, o)) && !(e.dateSelection && ! function (e, t, n, o) {
            var i = e.eventStore,
                a = i.defs,
                s = i.instances,
                l = e.dateSelection,
                u = l.range,
                c = t.getCurrentData().selectionConfig;
            o && (c = o(c));
            if (!Na(c.constraints, u, i, e.businessHours, t)) return !1;
            var d = t.options.selectOverlap,
                p = "function" == typeof d ? d : null;
            for (var f in s) {
                var h = s[f];
                if (Zn(u, h.range)) {
                    if (!1 === c.overlap) return !1;
                    if (p && !p(new Mr(t, a[h.defId], h), null)) return !1
                }
            }
            for (var v = 0, g = c.allows; v < g.length; v++) {
                if (!(0, g[v])(Sr(r(r({}, n), l), t), null)) return !1
            }
            return !0
        }(e, t, n, o))
    }

    function Na(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!Aa(Ha(a[i], t, n, r, o), t)) return !1
        }
        return !0
    }

    function Ha(e, t, n, r, o) {
        return "businessHours" === e ? Oa(wt(r, t, o)) : "string" == typeof e ? Oa(Tn(n, (function (t) {
            return t.groupId === e
        }))) : "object" == typeof e && e ? Oa(wt(e, t, o)) : []
    }

    function Oa(e) {
        var t = e.instances,
            n = [];
        for (var r in t) n.push(t[r].range);
        return n
    }

    function Aa(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (Xn(r[n], t)) return !0
        }
        return !1
    }
    var Wa = /^(visible|hidden)$/,
        La = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleEl = function (e) {
                    t.el = e, zo(t.props.elRef, e)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = e.liquid,
                    n = e.liquidIsAbsolute,
                    r = t && n,
                    o = ["fc-scroller"];
                return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), To("div", {
                    ref: this.handleEl,
                    className: o.join(" "),
                    style: {
                        overflowX: e.overflowX,
                        overflowY: e.overflowY,
                        left: r && -(e.overcomeLeft || 0) || "",
                        right: r && -(e.overcomeRight || 0) || "",
                        bottom: r && -(e.overcomeBottom || 0) || "",
                        marginLeft: !r && -(e.overcomeLeft || 0) || "",
                        marginRight: !r && -(e.overcomeRight || 0) || "",
                        marginBottom: !r && -(e.overcomeBottom || 0) || "",
                        maxHeight: e.maxHeight || ""
                    }
                }, e.children)
            }, t.prototype.needsXScrolling = function () {
                if (Wa.test(this.props.overflowX)) return !1;
                for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                    if (n[r].getBoundingClientRect().width > t) return !0
                }
                return !1
            }, t.prototype.needsYScrolling = function () {
                if (Wa.test(this.props.overflowY)) return !1;
                for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                    if (n[r].getBoundingClientRect().height > t) return !0
                }
                return !1
            }, t.prototype.getXScrollbarWidth = function () {
                return Wa.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
            }, t.prototype.getYScrollbarWidth = function () {
                return Wa.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
            }, t
        }(Lo),
        Ua = function () {
            function e(e) {
                var t = this;
                this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function (e, n) {
                    var r = t,
                        o = r.depths,
                        i = r.currentMap,
                        a = !1,
                        s = !1;
                    null !== e ? (a = n in i, i[n] = e, o[n] = (o[n] || 0) + 1, s = !0) : (o[n] -= 1, o[n] || (delete i[n], delete t.callbackMap[n], a = !0)), t.masterCallback && (a && t.masterCallback(null, String(n)), s && t.masterCallback(e, String(n)))
                }
            }
            return e.prototype.createRef = function (e) {
                var t = this,
                    n = this.callbackMap[e];
                return n || (n = this.callbackMap[e] = function (n) {
                    t.handleValue(n, String(e))
                }), n
            }, e.prototype.collect = function (e, t, n) {
                return Rt(this.currentMap, e, t, n)
            }, e.prototype.getAll = function () {
                return St(this.currentMap)
            }, e
        }();

    function Ba(e) {
        for (var t = 0, n = 0, r = Ce(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
            var o = r[n];
            t = Math.max(t, Ze(o))
        }
        return Math.ceil(t)
    }

    function za(e, t) {
        return e.liquid && t.liquid
    }

    function Va(e, t) {
        return null != t.maxHeight || za(e, t)
    }

    function Fa(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content ? t.content(n) : To("table", {
            className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
            style: {
                minWidth: n.tableMinWidth,
                width: n.clientWidth,
                height: r ? n.clientHeight : ""
            }
        }, n.tableColGroupNode, To("tbody", {}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
    }

    function Ga(e, t) {
        return jt(e, t, Et)
    }

    function ja(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++)
            for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1) n.push(To("col", {
                style: {
                    width: "shrink" === a.width ? qa(t) : a.width || "",
                    minWidth: a.minWidth || ""
                }
            }));
        return To.apply(void 0, o(["colgroup", {}], n))
    }

    function qa(e) {
        return null == e ? 4 : e
    }

    function Ya(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) return !0
        }
        return !1
    }

    function Za(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"), n
    }

    function Xa(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n
    }

    function Ka(e) {
        return To("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        })
    }

    function $a(e) {
        var t = e.stickyHeaderDates;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }

    function Ja(e) {
        var t = e.stickyFooterScrollbar;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }
    var Qa = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processCols = qt((function (e) {
                return e
            }), Ga), t.renderMicroColGroup = qt(ja), t.scrollerRefs = new Ua, t.scrollerElRefs = new Ua(t._handleScrollerEl.bind(t)), t.state = {
                shrinkWidth: null,
                forceYScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {}
            }, t.handleSizing = function () {
                t.setState(r({
                    shrinkWidth: t.computeShrinkWidth()
                }, t.computeScrollerDims()))
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = e.props,
                n = e.state,
                r = e.context,
                i = t.sections || [],
                a = this.processCols(t.cols),
                s = this.renderMicroColGroup(a, n.shrinkWidth),
                l = Za(t.liquid, r);
            t.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
            for (var u, c = i.length, d = 0, p = [], f = [], h = []; d < c && "header" === (u = i[d]).type;) p.push(this.renderSection(u, s)), d += 1;
            for (; d < c && "body" === (u = i[d]).type;) f.push(this.renderSection(u, s)), d += 1;
            for (; d < c && "footer" === (u = i[d]).type;) h.push(this.renderSection(u, s)), d += 1;
            var v = !eo();
            return To("table", {
                className: l.join(" "),
                style: {
                    height: t.height
                }
            }, Boolean(!v && p.length) && To.apply(void 0, o(["thead", {}], p)), Boolean(!v && f.length) && To.apply(void 0, o(["tbody", {}], f)), Boolean(!v && h.length) && To.apply(void 0, o(["tfoot", {}], h)), v && To.apply(void 0, o(o(o(["tbody", {}], p), f), h)))
        }, t.prototype.renderSection = function (e, t) {
            return "outerContent" in e ? To(ko, {
                key: e.key
            }, e.outerContent) : To("tr", {
                key: e.key,
                className: Xa(e, this.props.liquid).join(" ")
            }, this.renderChunkTd(e, t, e.chunk))
        }, t.prototype.renderChunkTd = function (e, t, n) {
            if ("outerContent" in n) return n.outerContent;
            var r = this.props,
                o = this.state,
                i = o.forceYScrollbars,
                a = o.scrollerClientWidths,
                s = o.scrollerClientHeights,
                l = Va(r, e),
                u = za(r, e),
                c = r.liquid ? i ? "scroll" : l ? "auto" : "hidden" : "visible",
                d = e.key,
                p = Fa(e, n, {
                    tableColGroupNode: t,
                    tableMinWidth: "",
                    clientWidth: r.collapsibleWidth || void 0 === a[d] ? null : a[d],
                    clientHeight: void 0 !== s[d] ? s[d] : null,
                    expandRows: e.expandRows,
                    syncRowHeights: !1,
                    rowSyncHeights: [],
                    reportRowHeightChange: function () {}
                });
            return To("td", {
                ref: n.elRef
            }, To("div", {
                className: "fc-scroller-harness" + (u ? " fc-scroller-harness-liquid" : "")
            }, To(La, {
                ref: this.scrollerRefs.createRef(d),
                elRef: this.scrollerElRefs.createRef(d),
                overflowY: c,
                overflowX: r.liquid ? "hidden" : "visible",
                maxHeight: e.maxHeight,
                liquid: u,
                liquidIsAbsolute: !0
            }, p)))
        }, t.prototype._handleScrollerEl = function (e, t) {
            var n = function (e, t) {
                for (var n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    if (o.key === t) return o
                }
                return null
            }(this.props.sections, t);
            n && zo(n.chunk.scrollerElRef, e)
        }, t.prototype.componentDidMount = function () {
            this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
        }, t.prototype.componentDidUpdate = function () {
            this.handleSizing()
        }, t.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleSizing)
        }, t.prototype.computeShrinkWidth = function () {
            return Ya(this.props.cols) ? Ba(this.scrollerElRefs.getAll()) : 0
        }, t.prototype.computeScrollerDims = function () {
            var e = po(),
                t = this.scrollerRefs,
                n = this.scrollerElRefs,
                r = !1,
                o = {},
                i = {};
            for (var a in t.currentMap) {
                var s = t.currentMap[a];
                if (s && s.needsYScrolling()) {
                    r = !0;
                    break
                }
            }
            for (var l = 0, u = this.props.sections; l < u.length; l++) {
                a = u[l].key;
                var c = n.currentMap[a];
                if (c) {
                    var d = c.parentNode;
                    o[a] = Math.floor(d.getBoundingClientRect().width - (r ? e.y : 0)), i[a] = Math.floor(d.getBoundingClientRect().height)
                }
            }
            return {
                forceYScrollbars: r,
                scrollerClientWidths: o,
                scrollerClientHeights: i
            }
        }, t
    }(Lo);
    Qa.addStateEquality({
        scrollerClientWidths: Et,
        scrollerClientHeights: Et
    });
    var es = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.elRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = e.seg,
                    o = r.eventRange,
                    i = o.ui,
                    a = {
                        event: new Mr(t, o.def, o.instance),
                        view: t.viewApi,
                        timeText: e.timeText,
                        textColor: i.textColor,
                        backgroundColor: i.backgroundColor,
                        borderColor: i.borderColor,
                        isDraggable: !e.disableDragging && ir(r, t),
                        isStartResizable: !e.disableResizing && ar(r, t),
                        isEndResizable: !e.disableResizing && sr(r),
                        isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                        isStart: Boolean(r.isStart),
                        isEnd: Boolean(r.isEnd),
                        isPast: Boolean(e.isPast),
                        isFuture: Boolean(e.isFuture),
                        isToday: Boolean(e.isToday),
                        isSelected: Boolean(e.isSelected),
                        isDragging: Boolean(e.isDragging),
                        isResizing: Boolean(e.isResizing)
                    },
                    s = cr(a).concat(i.classNames);
                return To(Yo, {
                    hookProps: a,
                    classNames: n.eventClassNames,
                    content: n.eventContent,
                    defaultContent: e.defaultContent,
                    didMount: n.eventDidMount,
                    willUnmount: n.eventWillUnmount,
                    elRef: this.elRef
                }, (function (t, n, r, o) {
                    return e.children(t, s.concat(n), r, o, a)
                }))
            }, t.prototype.componentDidMount = function () {
                Qn(this.elRef.current, this.props.seg)
            }, t.prototype.componentDidUpdate = function (e) {
                var t = this.props.seg;
                t !== e.seg && Qn(this.elRef.current, t)
            }, t
        }(Lo),
        ts = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = e.seg,
                    o = t.options.eventTimeFormat || e.defaultTimeFormat,
                    i = lr(n, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
                return To(es, {
                    seg: n,
                    timeText: i,
                    disableDragging: e.disableDragging,
                    disableResizing: e.disableResizing,
                    defaultContent: e.defaultContent || ns,
                    isDragging: e.isDragging,
                    isResizing: e.isResizing,
                    isDateSelecting: e.isDateSelecting,
                    isSelected: e.isSelected,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday
                }, (function (t, o, i, a, s) {
                    return To("a", r({
                        className: e.extraClassNames.concat(o).join(" "),
                        style: {
                            borderColor: s.borderColor,
                            backgroundColor: s.backgroundColor
                        },
                        ref: t
                    }, function (e) {
                        var t = e.eventRange.def.url;
                        return t ? {
                            href: t
                        } : {}
                    }(n)), To("div", {
                        className: "fc-event-main",
                        ref: i,
                        style: {
                            color: s.textColor
                        }
                    }, a), s.isStartResizable && To("div", {
                        className: "fc-event-resizer fc-event-resizer-start"
                    }), s.isEndResizable && To("div", {
                        className: "fc-event-resizer fc-event-resizer-end"
                    }))
                }))
            }, t
        }(Lo);

    function ns(e) {
        return To("div", {
            className: "fc-event-main-frame"
        }, e.timeText && To("div", {
            className: "fc-event-time"
        }, e.timeText), To("div", {
            className: "fc-event-title-container"
        }, To("div", {
            className: "fc-event-title fc-sticky"
        }, e.event.title || To(ko, null, " "))))
    }
    var rs = function (e) {
            return To(Oo.Consumer, null, (function (t) {
                var n = t.options,
                    r = {
                        isAxis: e.isAxis,
                        date: t.dateEnv.toDate(e.date),
                        view: t.viewApi
                    };
                return To(Yo, {
                    hookProps: r,
                    classNames: n.nowIndicatorClassNames,
                    content: n.nowIndicatorContent,
                    didMount: n.nowIndicatorDidMount,
                    willUnmount: n.nowIndicatorWillUnmount
                }, e.children)
            }))
        },
        os = cn({
            day: "numeric"
        }),
        is = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = as({
                        date: e.date,
                        dateProfile: e.dateProfile,
                        todayRange: e.todayRange,
                        showDayNumber: e.showDayNumber,
                        extraProps: e.extraHookProps,
                        viewApi: t.viewApi,
                        dateEnv: t.dateEnv
                    });
                return To(Xo, {
                    hookProps: r,
                    content: n.dayCellContent,
                    defaultContent: e.defaultContent
                }, e.children)
            }, t
        }(Lo);

    function as(e) {
        var t = e.date,
            n = e.dateEnv,
            o = oo(t, e.todayRange, null, e.dateProfile);
        return r(r(r({
            date: n.toDate(t),
            view: e.viewApi
        }, o), {
            dayNumberText: e.showDayNumber ? n.format(t, os) : ""
        }), e.extraProps)
    }
    var ss = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = Yt(as), t.normalizeClassNames = Jo(), t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = this.context,
                n = t.options,
                r = this.refineHookProps({
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    showDayNumber: e.showDayNumber,
                    extraProps: e.extraHookProps,
                    viewApi: t.viewApi,
                    dateEnv: t.dateEnv
                }),
                o = io(r, t.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
                i = r.isDisabled ? {} : {
                    "data-date": zt(e.date)
                };
            return To($o, {
                hookProps: r,
                didMount: n.dayCellDidMount,
                willUnmount: n.dayCellWillUnmount,
                elRef: e.elRef
            }, (function (t) {
                return e.children(t, o, i, r.isDisabled)
            }))
        }, t
    }(Lo);

    function ls(e) {
        return To("div", {
            className: "fc-" + e
        })
    }
    var us = function (e) {
        return To(es, {
            defaultContent: cs,
            seg: e.seg,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday
        }, (function (e, t, n, r, o) {
            return To("div", {
                ref: e,
                className: ["fc-bg-event"].concat(t).join(" "),
                style: {
                    backgroundColor: o.backgroundColor
                }
            }, r)
        }))
    };

    function cs(e) {
        return e.event.title && To("div", {
            className: "fc-event-title"
        }, e.event.title)
    }
    var ds = function (e) {
        return To(Oo.Consumer, null, (function (t) {
            var n = t.dateEnv,
                r = t.options,
                o = e.date,
                i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o),
                s = n.format(o, i);
            return To(Yo, {
                hookProps: {
                    num: a,
                    text: s,
                    date: o
                },
                classNames: r.weekNumberClassNames,
                content: r.weekNumberContent,
                defaultContent: ps,
                didMount: r.weekNumberDidMount,
                willUnmount: r.weekNumberWillUnmount
            }, e.children)
        }))
    };

    function ps(e) {
        return e.text
    }
    var fs = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function (e) {
                    t.rootEl = e, t.props.elRef && zo(t.props.elRef, e)
                }, t.handleDocumentMousedown = function (e) {
                    var n = _e(e);
                    t.rootEl.contains(n) || t.handleCloseClick()
                }, t.handleCloseClick = function () {
                    var e = t.props.onClose;
                    e && e()
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.context.theme,
                    t = this.props,
                    n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
                return Po(To("div", r({
                    className: n.join(" ")
                }, t.extraAttrs, {
                    ref: this.handleRootEl
                }), To("div", {
                    className: "fc-popover-header " + e.getClass("popoverHeader")
                }, To("span", {
                    className: "fc-popover-title"
                }, t.title), To("span", {
                    className: "fc-popover-close " + e.getIconClass("close"),
                    onClick: this.handleCloseClick
                })), To("div", {
                    className: "fc-popover-body " + e.getClass("popoverContent")
                }, t.children)), t.parentEl)
            }, t.prototype.componentDidMount = function () {
                document.addEventListener("mousedown", this.handleDocumentMousedown), this.updateSize()
            }, t.prototype.componentWillUnmount = function () {
                document.removeEventListener("mousedown", this.handleDocumentMousedown)
            }, t.prototype.updateSize = function () {
                var e = this.context.isRtl,
                    t = this.props,
                    n = t.alignmentEl,
                    r = t.alignGridTop,
                    o = this.rootEl,
                    i = function (e) {
                        for (var t = mo(e), n = e.getBoundingClientRect(), r = 0, o = t; r < o.length; r++) {
                            var i = Xr(n, o[r].getBoundingClientRect());
                            if (!i) return null;
                            n = i
                        }
                        return n
                    }(n);
                if (i) {
                    var a = o.getBoundingClientRect(),
                        s = r ? Ee(n, ".fc-scrollgrid").getBoundingClientRect().top : i.top,
                        l = e ? i.right - a.width : i.left;
                    s = Math.max(s, 10), l = Math.min(l, document.documentElement.clientWidth - 10 - a.width), l = Math.max(l, 10);
                    var u = o.offsetParent.getBoundingClientRect();
                    we(o, {
                        top: s - u.top,
                        left: l - u.left
                    })
                }
            }, t
        }(Lo),
        hs = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleRootEl = function (e) {
                    t.rootEl = e, e ? t.context.registerInteractiveComponent(t, {
                        el: e,
                        useEventCenter: !1
                    }) : t.context.unregisterInteractiveComponent(t)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.context,
                    t = e.options,
                    n = e.dateEnv,
                    r = this.props,
                    o = r.startDate,
                    i = r.todayRange,
                    a = r.dateProfile,
                    s = n.format(o, t.dayPopoverFormat);
                return To(ss, {
                    date: o,
                    dateProfile: a,
                    todayRange: i,
                    elRef: this.handleRootEl
                }, (function (e, t, n) {
                    return To(fs, {
                        elRef: e,
                        title: s,
                        extraClassNames: ["fc-more-popover"].concat(t),
                        extraAttrs: n,
                        parentEl: r.parentEl,
                        alignmentEl: r.alignmentEl,
                        alignGridTop: r.alignGridTop,
                        onClose: r.onClose
                    }, To(is, {
                        date: o,
                        dateProfile: a,
                        todayRange: i
                    }, (function (e, t) {
                        return t && To("div", {
                            className: "fc-more-popover-misc",
                            ref: e
                        }, t)
                    })), r.children)
                }))
            }, t.prototype.queryHit = function (e, t, n, o) {
                var i = this.rootEl,
                    a = this.props;
                return e >= 0 && e < n && t >= 0 && t < o ? {
                    dateProfile: a.dateProfile,
                    dateSpan: r({
                        allDay: !0,
                        range: {
                            start: a.startDate,
                            end: a.endDate
                        }
                    }, a.extraDateSpan),
                    dayEl: i,
                    rect: {
                        left: 0,
                        top: 0,
                        right: n,
                        bottom: o
                    },
                    layer: 1
                } : null
            }, t
        }(Vo),
        vs = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.linkElRef = xo(), t.state = {
                    isPopoverOpen: !1
                }, t.handleClick = function (e) {
                    var n = t,
                        r = n.props,
                        o = n.context,
                        i = o.options.moreLinkClick,
                        a = ms(r).start;

                    function s(e) {
                        var t = e.eventRange,
                            n = t.def,
                            r = t.instance,
                            i = t.range;
                        return {
                            event: new Mr(o, n, r),
                            start: o.dateEnv.toDate(i.start),
                            end: o.dateEnv.toDate(i.end),
                            isStart: e.isStart,
                            isEnd: e.isEnd
                        }
                    }
                    "function" == typeof i && (i = i({
                        date: a,
                        allDay: Boolean(r.allDayDate),
                        allSegs: r.allSegs.map(s),
                        hiddenSegs: r.hiddenSegs.map(s),
                        jsEvent: e,
                        view: o.viewApi
                    })), i && "popover" !== i ? "string" == typeof i && o.calendarApi.zoomTo(a, i) : t.setState({
                        isPopoverOpen: !0
                    })
                }, t.handlePopoverClose = function () {
                    t.setState({
                        isPopoverOpen: !1
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props;
                return To(Oo.Consumer, null, (function (n) {
                    var r = n.viewApi,
                        o = n.options,
                        i = n.calendarApi,
                        a = o.moreLinkText,
                        s = t.moreCnt,
                        l = ms(t),
                        u = {
                            num: s,
                            shortText: "+" + s,
                            text: "function" == typeof a ? a.call(i, s) : "+" + s + " " + a,
                            view: r
                        };
                    return To(ko, null, Boolean(t.moreCnt) && To(Yo, {
                        elRef: e.linkElRef,
                        hookProps: u,
                        classNames: o.moreLinkClassNames,
                        content: o.moreLinkContent,
                        defaultContent: t.defaultContent || gs,
                        didMount: o.moreLinkDidMount,
                        willUnmount: o.moreLinkWillUnmount
                    }, (function (n, r, o, i) {
                        return t.children(n, ["fc-more-link"].concat(r), o, i, e.handleClick)
                    })), e.state.isPopoverOpen && To(hs, {
                        startDate: l.start,
                        endDate: l.end,
                        dateProfile: t.dateProfile,
                        todayRange: t.todayRange,
                        extraDateSpan: t.extraDateSpan,
                        parentEl: e.parentEl,
                        alignmentEl: t.alignmentElRef.current,
                        alignGridTop: t.alignGridTop,
                        onClose: e.handlePopoverClose
                    }, t.popoverContent()))
                }))
            }, t.prototype.componentDidMount = function () {
                this.updateParentEl()
            }, t.prototype.componentDidUpdate = function () {
                this.updateParentEl()
            }, t.prototype.updateParentEl = function () {
                this.linkElRef.current && (this.parentEl = Ee(this.linkElRef.current, ".fc-view-harness"))
            }, t
        }(Lo);

    function gs(e) {
        return e.text
    }

    function ms(e) {
        if (e.allDayDate) return {
            start: e.allDayDate,
            end: $e(e.allDayDate, 1)
        };
        var t, n = e.hiddenSegs;
        return {
            start: ys(n),
            end: (t = n, t.reduce(Es).eventRange.range.end)
        }
    }

    function ys(e) {
        return e.reduce(Ss).eventRange.range.start
    }

    function Ss(e, t) {
        return e.eventRange.range.start < t.eventRange.range.start ? e : t
    }

    function Es(e, t) {
        return e.eventRange.range.end > t.eventRange.range.end ? e : t
    }
    var bs = function (e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var o = e.call(this) || this;
            return o.isRendering = !1, o.isRendered = !1, o.currentClassNames = [], o.customContentRenderId = 0, o.handleAction = function (e) {
                switch (e.type) {
                    case "SET_EVENT_DRAG":
                    case "SET_EVENT_RESIZE":
                        o.renderRunner.tryDrain()
                }
            }, o.handleData = function (e) {
                o.currentData = e, o.renderRunner.request(e.calendarOptions.rerenderDelay)
            }, o.handleRenderRequest = function () {
                if (o.isRendering) {
                    o.isRendered = !0;
                    var e = o.currentData;
                    _o(To(va, {
                        options: e.calendarOptions,
                        theme: e.theme,
                        emitter: e.emitter
                    }, (function (t, n, i, a) {
                        return o.setClassNames(t), o.setHeight(n), To(Zo.Provider, {
                            value: o.customContentRenderId
                        }, To(pa, r({
                            isHeightAuto: i,
                            forPrint: a
                        }, e)))
                    })), o.el)
                } else o.isRendered && (o.isRendered = !1, No(o.el), o.setClassNames([]), o.setHeight(""));
                Io()
            }, o.el = t, o.renderRunner = new Pi(o.handleRenderRequest), new Hi({
                optionOverrides: n,
                calendarApi: o,
                onAction: o.handleAction,
                onData: o.handleData
            }), o
        }
        return n(t, e), Object.defineProperty(t.prototype, "view", {
            get: function () {
                return this.currentData.viewApi
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.render = function () {
            var e = this.isRendering;
            e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize()
        }, t.prototype.destroy = function () {
            this.isRendering && (this.isRendering = !1, this.renderRunner.request())
        }, t.prototype.updateSize = function () {
            e.prototype.updateSize.call(this), Io()
        }, t.prototype.batchRendering = function (e) {
            this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering")
        }, t.prototype.pauseRendering = function () {
            this.renderRunner.pause("pauseRendering")
        }, t.prototype.resumeRendering = function () {
            this.renderRunner.resume("pauseRendering", !0)
        }, t.prototype.resetOptions = function (e, t) {
            this.currentDataManager.resetOptions(e, t)
        }, t.prototype.setClassNames = function (e) {
            if (!jt(e, this.currentClassNames)) {
                for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
                    var o = r[n];
                    t.remove(o)
                }
                for (var i = 0, a = e; i < a.length; i++) {
                    o = a[i];
                    t.add(o)
                }
                this.currentClassNames = e
            }
        }, t.prototype.setHeight = function (e) {
            Te(this.el, "height", e)
        }, t
    }(kr);
    oa.touchMouseIgnoreWait = 500;
    var Cs = 0,
        Ds = 0,
        Rs = !1,
        ws = function () {
            function e(e) {
                var t = this;
                this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function (e) {
                    if (!t.shouldIgnoreMouse() && function (e) {
                            return 0 === e.button && !e.ctrlKey
                        }(e) && t.tryStart(e)) {
                        var n = t.createEventFromMouse(e, !0);
                        t.emitter.trigger("pointerdown", n), t.initScrollWatch(n), t.shouldIgnoreMove || document.addEventListener("mousemove", t.handleMouseMove), document.addEventListener("mouseup", t.handleMouseUp)
                    }
                }, this.handleMouseMove = function (e) {
                    var n = t.createEventFromMouse(e);
                    t.recordCoords(n), t.emitter.trigger("pointermove", n)
                }, this.handleMouseUp = function (e) {
                    document.removeEventListener("mousemove", t.handleMouseMove), document.removeEventListener("mouseup", t.handleMouseUp), t.emitter.trigger("pointerup", t.createEventFromMouse(e)), t.cleanup()
                }, this.handleTouchStart = function (e) {
                    if (t.tryStart(e)) {
                        t.isTouchDragging = !0;
                        var n = t.createEventFromTouch(e, !0);
                        t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
                        var r = e.target;
                        t.shouldIgnoreMove || r.addEventListener("touchmove", t.handleTouchMove), r.addEventListener("touchend", t.handleTouchEnd), r.addEventListener("touchcancel", t.handleTouchEnd), window.addEventListener("scroll", t.handleTouchScroll, !0)
                    }
                }, this.handleTouchMove = function (e) {
                    var n = t.createEventFromTouch(e);
                    t.recordCoords(n), t.emitter.trigger("pointermove", n)
                }, this.handleTouchEnd = function (e) {
                    if (t.isDragging) {
                        var n = e.target;
                        n.removeEventListener("touchmove", t.handleTouchMove), n.removeEventListener("touchend", t.handleTouchEnd), n.removeEventListener("touchcancel", t.handleTouchEnd), window.removeEventListener("scroll", t.handleTouchScroll, !0), t.emitter.trigger("pointerup", t.createEventFromTouch(e)), t.cleanup(), t.isTouchDragging = !1, Cs += 1, setTimeout((function () {
                            Cs -= 1
                        }), oa.touchMouseIgnoreWait)
                    }
                }, this.handleTouchScroll = function () {
                    t.wasTouchScroll = !0
                }, this.handleScroll = function (e) {
                    if (!t.shouldIgnoreMove) {
                        var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
                            r = window.pageYOffset - t.prevScrollY + t.prevPageY;
                        t.emitter.trigger("pointermove", {
                            origEvent: e,
                            isTouch: t.isTouchDragging,
                            subjectEl: t.subjectEl,
                            pageX: n,
                            pageY: r,
                            deltaX: n - t.origPageX,
                            deltaY: r - t.origPageY
                        })
                    }
                }, this.containerEl = e, this.emitter = new So, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), 1 === (Ds += 1) && window.addEventListener("touchmove", Ts, {
                    passive: !1
                })
            }
            return e.prototype.destroy = function () {
                this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), (Ds -= 1) || window.removeEventListener("touchmove", Ts, {
                    passive: !1
                })
            }, e.prototype.tryStart = function (e) {
                var t = this.querySubjectEl(e),
                    n = e.target;
                return !(!t || this.handleSelector && !Ee(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0)
            }, e.prototype.cleanup = function () {
                Rs = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch()
            }, e.prototype.querySubjectEl = function (e) {
                return this.selector ? Ee(e.target, this.selector) : this.containerEl
            }, e.prototype.shouldIgnoreMouse = function () {
                return Cs || this.isTouchDragging
            }, e.prototype.cancelTouchScroll = function () {
                this.isDragging && (Rs = !0)
            }, e.prototype.initScrollWatch = function (e) {
                this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
            }, e.prototype.recordCoords = function (e) {
                this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
            }, e.prototype.destroyScrollWatch = function () {
                this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
            }, e.prototype.createEventFromMouse = function (e, t) {
                var n = 0,
                    r = 0;
                return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                    origEvent: e,
                    isTouch: !1,
                    subjectEl: this.subjectEl,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    deltaX: n,
                    deltaY: r
                }
            }, e.prototype.createEventFromTouch = function (e, t) {
                var n, r, o = e.touches,
                    i = 0,
                    a = 0;
                return o && o.length ? (n = o[0].pageX, r = o[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (i = n - this.origPageX, a = r - this.origPageY), {
                    origEvent: e,
                    isTouch: !0,
                    subjectEl: this.subjectEl,
                    pageX: n,
                    pageY: r,
                    deltaX: i,
                    deltaY: a
                }
            }, e
        }();

    function Ts(e) {
        Rs && e.preventDefault()
    }
    var _s = function () {
            function e() {
                this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
            }
            return e.prototype.start = function (e, t, n) {
                this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
            }, e.prototype.handleMove = function (e, t) {
                this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
            }, e.prototype.setIsVisible = function (e) {
                e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
            }, e.prototype.stop = function (e, t) {
                var n = this,
                    r = function () {
                        n.cleanup(), t()
                    };
                e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
            }, e.prototype.doRevertAnimation = function (e, t) {
                var n = this.mirrorEl,
                    r = this.sourceEl.getBoundingClientRect();
                n.style.transition = "top " + t + "ms,left " + t + "ms", we(n, {
                    left: r.left,
                    top: r.top
                }), Ie(n, (function () {
                    n.style.transition = "", e()
                }))
            }, e.prototype.cleanup = function () {
                this.mirrorEl && (Se(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
            }, e.prototype.updateElPosition = function () {
                this.sourceEl && this.isVisible && we(this.getMirrorEl(), {
                    left: this.sourceElRect.left + this.deltaX,
                    top: this.sourceElRect.top + this.deltaY
                })
            }, e.prototype.getMirrorEl = function () {
                var e = this.sourceElRect,
                    t = this.mirrorEl;
                return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), we(t, {
                    position: "fixed",
                    zIndex: this.zIndex,
                    visibility: "",
                    boxSizing: "border-box",
                    width: e.right - e.left,
                    height: e.bottom - e.top,
                    right: "auto",
                    bottom: "auto",
                    margin: 0
                }), this.parentNode.appendChild(t)), t
            }, e
        }(),
        xs = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.handleScroll = function () {
                    r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange()
                }, r.scrollController = t, r.doesListening = n, r.scrollTop = r.origScrollTop = t.getScrollTop(), r.scrollLeft = r.origScrollLeft = t.getScrollLeft(), r.scrollWidth = t.getScrollWidth(), r.scrollHeight = t.getScrollHeight(), r.clientWidth = t.getClientWidth(), r.clientHeight = t.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r
            }
            return n(t, e), t.prototype.destroy = function () {
                this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
            }, t.prototype.getScrollTop = function () {
                return this.scrollTop
            }, t.prototype.getScrollLeft = function () {
                return this.scrollLeft
            }, t.prototype.setScrollTop = function (e) {
                this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
            }, t.prototype.setScrollLeft = function (e) {
                this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
            }, t.prototype.getClientWidth = function () {
                return this.clientWidth
            }, t.prototype.getClientHeight = function () {
                return this.clientHeight
            }, t.prototype.getScrollWidth = function () {
                return this.scrollWidth
            }, t.prototype.getScrollHeight = function () {
                return this.scrollHeight
            }, t.prototype.handleScrollChange = function () {}, t
        }(bo),
        ks = function (e) {
            function t(t, n) {
                return e.call(this, new Co(t), n) || this
            }
            return n(t, e), t.prototype.getEventTarget = function () {
                return this.scrollController.el
            }, t.prototype.computeClientRect = function () {
                return vo(this.scrollController.el)
            }, t
        }(xs),
        Ms = function (e) {
            function t(t) {
                return e.call(this, new Do, t) || this
            }
            return n(t, e), t.prototype.getEventTarget = function () {
                return window
            }, t.prototype.computeClientRect = function () {
                return {
                    left: this.scrollLeft,
                    right: this.scrollLeft + this.clientWidth,
                    top: this.scrollTop,
                    bottom: this.scrollTop + this.clientHeight
                }
            }, t.prototype.handleScrollChange = function () {
                this.clientRect = this.computeClientRect()
            }, t
        }(xs),
        Ps = "function" == typeof performance ? performance.now : Date.now,
        Is = function () {
            function e() {
                var e = this;
                this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function () {
                    if (e.isAnimating) {
                        console.log(e.isAnimating);
                        var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                        if (t) {
                            var n = Ps();
                            e.handleSide(t, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n)
                        } else e.isAnimating = !1
                    }
                }
            }
            return e.prototype.start = function (e, t) {
                this.isEnabled && (this.scrollCaches = this.buildCaches(), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
            }, e.prototype.handleMove = function (e, t) {
                if (this.isEnabled) {
                    var n = e - window.pageXOffset,
                        r = t - window.pageYOffset,
                        o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                        i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                    o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), i < 0 ? this.everMovedLeft = !0 : i > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Ps()))
                }
            }, e.prototype.stop = function () {
                if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                        t[e].destroy()
                    }
                    this.scrollCaches = null
                }
            }, e.prototype.requestAnimation = function (e) {
                this.msSinceRequest = e, requestAnimationFrame(this.animate)
            }, e.prototype.handleSide = function (e, t) {
                var n = e.scrollCache,
                    r = this.edgeThreshold,
                    o = r - e.distance,
                    i = o * o / (r * r) * this.maxVelocity * t,
                    a = 1;
                switch (e.name) {
                    case "left":
                        a = -1;
                    case "right":
                        n.setScrollLeft(n.getScrollLeft() + i * a);
                        break;
                    case "top":
                        a = -1;
                    case "bottom":
                        n.setScrollTop(n.getScrollTop() + i * a)
                }
            }, e.prototype.computeBestEdge = function (e, t) {
                for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
                    var a = i[o],
                        s = a.clientRect,
                        l = e - s.left,
                        u = s.right - e,
                        c = t - s.top,
                        d = s.bottom - t;
                    l >= 0 && u >= 0 && c >= 0 && d >= 0 && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
                        scrollCache: a,
                        name: "top",
                        distance: c
                    }), d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
                        scrollCache: a,
                        name: "bottom",
                        distance: d
                    }), l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
                        scrollCache: a,
                        name: "left",
                        distance: l
                    }), u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
                        scrollCache: a,
                        name: "right",
                        distance: u
                    }))
                }
                return r
            }, e.prototype.buildCaches = function () {
                return this.queryScrollEls().map((function (e) {
                    return e === window ? new Ms(!1) : new ks(e, !1)
                }))
            }, e.prototype.queryScrollEls = function () {
                for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                    var r = n[t];
                    "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
                }
                return e
            }, e
        }(),
        Ns = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function (e) {
                    r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, We(document.body), Ue(document.body), e.isTouch || e.origEvent.preventDefault(), r.emitter.trigger("pointerdown", e), r.isInteracting && !r.pointer.shouldIgnoreMove && (r.mirror.setIsVisible(!1), r.mirror.start(e.subjectEl, e.pageX, e.pageY), r.startDelay(e), r.minDistance || r.handleDistanceSurpassed(e)))
                }, r.onPointerMove = function (e) {
                    if (r.isInteracting) {
                        if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
                            var t = r.minDistance,
                                n = e.deltaX,
                                o = e.deltaY;
                            n * n + o * o >= t * t && r.handleDistanceSurpassed(e)
                        }
                        r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY), r.autoScroller.handleMove(e.pageX, e.pageY)), r.emitter.trigger("dragmove", e))
                    }
                }, r.onPointerUp = function (e) {
                    r.isInteracting && (r.isInteracting = !1, Le(document.body), Be(document.body), r.emitter.trigger("pointerup", e), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null))
                };
                var o = r.pointer = new ws(t);
                return o.emitter.on("pointerdown", r.onPointerDown), o.emitter.on("pointermove", r.onPointerMove), o.emitter.on("pointerup", r.onPointerUp), n && (o.selector = n), r.mirror = new _s, r.autoScroller = new Is, r
            }
            return n(t, e), t.prototype.destroy = function () {
                this.pointer.destroy(), this.onPointerUp({})
            }, t.prototype.startDelay = function (e) {
                var t = this;
                "number" == typeof this.delay ? this.delayTimeoutId = setTimeout((function () {
                    t.delayTimeoutId = null, t.handleDelayEnd(e)
                }), this.delay) : this.handleDelayEnd(e)
            }, t.prototype.handleDelayEnd = function (e) {
                this.isDelayEnded = !0, this.tryStartDrag(e)
            }, t.prototype.handleDistanceSurpassed = function (e) {
                this.isDistanceSurpassed = !0, this.tryStartDrag(e)
            }, t.prototype.tryStartDrag = function (e) {
                this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
            }, t.prototype.tryStopDrag = function (e) {
                this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
            }, t.prototype.stopDrag = function (e) {
                this.isDragging = !1, this.emitter.trigger("dragend", e)
            }, t.prototype.setIgnoreMove = function (e) {
                this.pointer.shouldIgnoreMove = e
            }, t.prototype.setMirrorIsVisible = function (e) {
                this.mirror.setIsVisible(e)
            }, t.prototype.setMirrorNeedsRevert = function (e) {
                this.mirrorNeedsRevert = e
            }, t.prototype.setAutoScrollEnabled = function (e) {
                this.autoScroller.isEnabled = e
            }, t
        }(ra),
        Hs = function () {
            function e(e) {
                this.origRect = go(e), this.scrollCaches = mo(e).map((function (e) {
                    return new ks(e, !0)
                }))
            }
            return e.prototype.destroy = function () {
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy()
                }
            }, e.prototype.computeLeft = function () {
                for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollLeft - r.getScrollLeft()
                }
                return e
            }, e.prototype.computeTop = function () {
                for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                    var r = n[t];
                    e += r.origScrollTop - r.getScrollTop()
                }
                return e
            }, e.prototype.isWithinClipping = function (e, t) {
                for (var n, r, o = {
                        left: e,
                        top: t
                    }, i = 0, a = this.scrollCaches; i < a.length; i++) {
                    var s = a[i];
                    if (n = s.getEventTarget(), r = void 0, "HTML" !== (r = n.tagName) && "BODY" !== r && !Zr(o, s.clientRect)) return !1
                }
                return !0
            }, e
        }();
    var Os = function () {
        function e(e, t) {
            var n = this;
            this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function (e) {
                var t = n.dragging;
                n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
            }, this.handleDragStart = function (e) {
                n.emitter.trigger("dragstart", e), n.handleMove(e, !0)
            }, this.handleDragMove = function (e) {
                n.emitter.trigger("dragmove", e), n.handleMove(e)
            }, this.handlePointerUp = function (e) {
                n.releaseHits(), n.emitter.trigger("pointerup", e)
            }, this.handleDragEnd = function (e) {
                n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", e)
            }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new So
        }
        return e.prototype.processFirstCoord = function (e) {
            var t, n = {
                    left: e.pageX,
                    top: e.pageY
                },
                r = n,
                o = e.subjectEl;
            o !== document && (r = $r(r, t = go(o)));
            var i = this.initialHit = this.queryHitForOffset(r.left, r.top);
            if (i) {
                if (this.useSubjectCenter && t) {
                    var a = Xr(t, i.rect);
                    a && (r = Jr(a))
                }
                this.coordAdjust = Qr(r, n)
            } else this.coordAdjust = {
                left: 0,
                top: 0
            }
        }, e.prototype.handleMove = function (e, t) {
            var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
            !t && As(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
        }, e.prototype.prepareHits = function () {
            this.offsetTrackers = mt(this.droppableStore, (function (e) {
                return e.component.prepareHits(), new Hs(e.el)
            }))
        }, e.prototype.releaseHits = function () {
            var e = this.offsetTrackers;
            for (var t in e) e[t].destroy();
            this.offsetTrackers = {}
        }, e.prototype.queryHitForOffset = function (e, t) {
            var n = this.droppableStore,
                r = this.offsetTrackers,
                o = null;
            for (var i in n) {
                var a = n[i].component,
                    s = r[i];
                if (s && s.isWithinClipping(e, t)) {
                    var l = s.computeLeft(),
                        u = s.computeTop(),
                        c = e - l,
                        d = t - u,
                        p = s.origRect,
                        f = p.right - p.left,
                        h = p.bottom - p.top;
                    if (c >= 0 && c < f && d >= 0 && d < h) {
                        var v = a.queryHit(c, d, f, h);
                        v && Xn(v.dateProfile.activeRange, v.dateSpan.range) && (!o || v.layer > o.layer) && (v.componentId = i, v.context = a.context, v.rect.left += l, v.rect.right += l, v.rect.top += u, v.rect.bottom += u, o = v)
                    }
                }
            }
            return o
        }, e
    }();

    function As(e, t) {
        return !e && !t || Boolean(e) === Boolean(t) && hr(e.dateSpan, t.dateSpan)
    }

    function Ws(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, {
            date: (o = t.dateEnv).toDate(n.range.start),
            dateStr: o.formatIso(n.range.start, {
                omitTime: n.allDay
            }),
            allDay: n.allDay
        })), i
    }
    var Ls = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handlePointerDown = function (e) {
                    var t = n.dragging,
                        r = e.origEvent.target;
                    t.setIgnoreMove(!n.component.isValidDateDownEl(r))
                }, n.handleDragEnd = function (e) {
                    var t = n.component;
                    if (!n.dragging.pointer.wasTouchScroll) {
                        var o = n.hitDragging,
                            i = o.initialHit,
                            a = o.finalHit;
                        if (i && a && As(i, a)) {
                            var s = t.context,
                                l = r(r({}, Ws(i.dateSpan, s)), {
                                    dayEl: i.dayEl,
                                    jsEvent: e.origEvent,
                                    view: s.viewApi || s.calendarApi.view
                                });
                            s.emitter.trigger("dateClick", l)
                        }
                    }
                }, n.dragging = new Ns(t.el), n.dragging.autoScroller.isEnabled = !1;
                var o = n.hitDragging = new Os(n.dragging, ta(t));
                return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragend", n.handleDragEnd), n
            }
            return n(t, e), t.prototype.destroy = function () {
                this.dragging.destroy()
            }, t
        }(Qi),
        Us = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.dragSelection = null, n.handlePointerDown = function (e) {
                    var t = n,
                        r = t.component,
                        o = t.dragging,
                        i = r.context.options.selectable && r.isValidDateDownEl(e.origEvent.target);
                    o.setIgnoreMove(!i), o.delay = e.isTouch ? function (e) {
                        var t = e.context.options,
                            n = t.selectLongPressDelay;
                        null == n && (n = t.longPressDelay);
                        return n
                    }(r) : null
                }, n.handleDragStart = function (e) {
                    n.component.context.calendarApi.unselect(e)
                }, n.handleHitUpdate = function (e, t) {
                    var o = n.component.context,
                        i = null,
                        a = !1;
                    if (e) {
                        var s = n.hitDragging.initialHit;
                        e.componentId === s.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(s, e) || (i = function (e, t, n) {
                            var o = e.dateSpan,
                                i = t.dateSpan,
                                a = [o.range.start, o.range.end, i.range.start, i.range.end];
                            a.sort(qe);
                            for (var s = {}, l = 0, u = n; l < u.length; l++) {
                                var c = (0, u[l])(e, t);
                                if (!1 === c) return null;
                                c && r(s, c)
                            }
                            return s.range = {
                                start: a[0],
                                end: a[3]
                            }, s.allDay = o.allDay, s
                        }(s, e, o.pluginHooks.dateSelectionTransformers)), i && Ma(i, e.dateProfile, o) || (a = !0, i = null)
                    }
                    i ? o.dispatch({
                        type: "SELECT_DATES",
                        selection: i
                    }) : t || o.dispatch({
                        type: "UNSELECT_DATES"
                    }), a ? Oe() : Ae(), t || (n.dragSelection = i)
                }, n.handlePointerUp = function (e) {
                    n.dragSelection && (yr(n.dragSelection, e, n.component.context), n.dragSelection = null)
                };
                var o = t.component.context.options,
                    i = n.dragging = new Ns(t.el);
                i.touchScrollAllowed = !1, i.minDistance = o.selectMinDistance || 0, i.autoScroller.isEnabled = o.dragScroll;
                var a = n.hitDragging = new Os(n.dragging, ta(t));
                return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("pointerup", n.handlePointerUp), n
            }
            return n(t, e), t.prototype.destroy = function () {
                this.dragging.destroy()
            }, t
        }(Qi);
    var Bs = function (e) {
        function t(n) {
            var o = e.call(this, n) || this;
            o.subjectEl = null, o.subjectSeg = null, o.isDragging = !1, o.eventRange = null, o.relevantEvents = null, o.receivingContext = null, o.validMutation = null, o.mutatedRelevantEvents = null, o.handlePointerDown = function (e) {
                var t = e.origEvent.target,
                    n = o,
                    r = n.component,
                    i = n.dragging,
                    a = i.mirror,
                    s = r.context.options,
                    l = r.context;
                o.subjectEl = e.subjectEl;
                var u = o.subjectSeg = er(e.subjectEl),
                    c = (o.eventRange = u.eventRange).instance.instanceId;
                o.relevantEvents = Dn(l.getCurrentData().eventStore, c), i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, i.delay = e.isTouch && c !== r.props.eventSelection ? function (e) {
                    var t = e.context.options,
                        n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(r) : null, s.fixedMirrorParent ? a.parentNode = s.fixedMirrorParent : a.parentNode = Ee(t, ".fc"), a.revertDuration = s.dragRevertDuration;
                var d = r.isValidSegDownEl(t) && !Ee(t, ".fc-event-resizer");
                i.setIgnoreMove(!d), o.isDragging = d && e.subjectEl.classList.contains("fc-event-draggable")
            }, o.handleDragStart = function (e) {
                var t = o.component.context,
                    n = o.eventRange,
                    r = n.instance.instanceId;
                e.isTouch ? r !== o.component.props.eventSelection && t.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: r
                }) : t.dispatch({
                    type: "UNSELECT_EVENT"
                }), o.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
                    el: o.subjectEl,
                    event: new Mr(t, n.def, n.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }))
            }, o.handleHitUpdate = function (e, t) {
                if (o.isDragging) {
                    var n = o.relevantEvents,
                        r = o.hitDragging.initialHit,
                        i = o.component.context,
                        a = null,
                        s = null,
                        l = null,
                        u = !1,
                        c = {
                            affectedEvents: n,
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: !0
                        };
                    if (e) {
                        var d = (a = e.context).options;
                        i === a || d.editable && d.droppable ? (s = function (e, t, n) {
                            var r = e.dateSpan,
                                o = t.dateSpan,
                                i = r.range.start,
                                a = o.range.start,
                                s = {};
                            r.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = t.context.options.allDayMaintainDuration, o.allDay && (i = ot(i)));
                            var l = Fn(i, a, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
                            l.milliseconds && (s.allDay = !1);
                            for (var u = {
                                    datesDelta: l,
                                    standardProps: s
                                }, c = 0, d = n; c < d.length; c++) {
                                (0, d[c])(u, e, t)
                            }
                            return u
                        }(r, e, a.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (l = br(n, a.getCurrentData().eventUiBases, s, a), c.mutatedEvents = l, ka(c, e.dateProfile, a) || (u = !0, s = null, l = null, c.mutatedEvents = {
                            defs: {},
                            instances: {}
                        })) : a = null
                    }
                    o.displayDrag(a, c), u ? Oe() : Ae(), t || (i === a && As(r, e) && (s = null), o.dragging.setMirrorNeedsRevert(!s), o.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-event-mirror")), o.receivingContext = a, o.validMutation = s, o.mutatedRelevantEvents = l)
                }
            }, o.handlePointerUp = function () {
                o.isDragging || o.cleanup()
            }, o.handleDragEnd = function (e) {
                if (o.isDragging) {
                    var t = o.component.context,
                        n = t.viewApi,
                        i = o,
                        a = i.receivingContext,
                        s = i.validMutation,
                        l = o.eventRange.def,
                        u = o.eventRange.instance,
                        c = new Mr(t, l, u),
                        d = o.relevantEvents,
                        p = o.mutatedRelevantEvents,
                        f = o.hitDragging.finalHit;
                    if (o.clearDrag(), t.emitter.trigger("eventDragStop", {
                            el: o.subjectEl,
                            event: c,
                            jsEvent: e.origEvent,
                            view: n
                        }), s) {
                        if (a === t) {
                            var h = new Mr(t, p.defs[l.defId], u ? p.instances[u.instanceId] : null);
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: p
                            });
                            for (var v = {
                                    oldEvent: c,
                                    event: h,
                                    relatedEvents: Ir(p, t, u),
                                    revert: function () {
                                        t.dispatch({
                                            type: "MERGE_EVENTS",
                                            eventStore: d
                                        })
                                    }
                                }, g = {}, m = 0, y = t.getCurrentData().pluginHooks.eventDropTransformers; m < y.length; m++) {
                                var S = y[m];
                                r(g, S(s, t))
                            }
                            t.emitter.trigger("eventDrop", r(r(r({}, v), g), {
                                el: e.subjectEl,
                                delta: s.datesDelta,
                                jsEvent: e.origEvent,
                                view: n
                            })), t.emitter.trigger("eventChange", v)
                        } else if (a) {
                            var E = {
                                event: c,
                                relatedEvents: Ir(d, t, u),
                                revert: function () {
                                    t.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: d
                                    })
                                }
                            };
                            t.emitter.trigger("eventLeave", r(r({}, E), {
                                draggedEl: e.subjectEl,
                                view: n
                            })), t.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: d
                            }), t.emitter.trigger("eventRemove", E);
                            var b = p.defs[l.defId],
                                C = p.instances[u.instanceId],
                                D = new Mr(a, b, C);
                            a.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: p
                            });
                            var R = {
                                event: D,
                                relatedEvents: Ir(p, a, C),
                                revert: function () {
                                    a.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: p
                                    })
                                }
                            };
                            a.emitter.trigger("eventAdd", R), e.isTouch && a.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: u.instanceId
                            }), a.emitter.trigger("drop", r(r({}, Ws(f.dateSpan, a)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: f.context.viewApi
                            })), a.emitter.trigger("eventReceive", r(r({}, R), {
                                draggedEl: e.subjectEl,
                                view: f.context.viewApi
                            }))
                        }
                    } else t.emitter.trigger("_noEventDrop")
                }
                o.cleanup()
            };
            var i = o.component.context.options,
                a = o.dragging = new Ns(n.el);
            a.pointer.selector = t.SELECTOR, a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.dragScroll;
            var s = o.hitDragging = new Os(o.dragging, na);
            return s.useSubjectCenter = n.useEventCenter, s.emitter.on("pointerdown", o.handlePointerDown), s.emitter.on("dragstart", o.handleDragStart), s.emitter.on("hitupdate", o.handleHitUpdate), s.emitter.on("pointerup", o.handlePointerUp), s.emitter.on("dragend", o.handleDragEnd), o
        }
        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t.prototype.displayDrag = function (e, t) {
            var n = this.component.context,
                r = this.receivingContext;
            r && r !== e && (r === n ? r.dispatch({
                type: "SET_EVENT_DRAG",
                state: {
                    affectedEvents: t.affectedEvents,
                    mutatedEvents: {
                        defs: {},
                        instances: {}
                    },
                    isEvent: !0
                }
            }) : r.dispatch({
                type: "UNSET_EVENT_DRAG"
            })), e && e.dispatch({
                type: "SET_EVENT_DRAG",
                state: t
            })
        }, t.prototype.clearDrag = function () {
            var e = this.component.context,
                t = this.receivingContext;
            t && t.dispatch({
                type: "UNSET_EVENT_DRAG"
            }), e !== t && e.dispatch({
                type: "UNSET_EVENT_DRAG"
            })
        }, t.prototype.cleanup = function () {
            this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null
        }, t.SELECTOR = ".fc-event-draggable, .fc-event-resizable", t
    }(Qi);
    var zs = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function (e) {
                var t = n.component,
                    r = er(n.querySegEl(e)),
                    o = n.eventRange = r.eventRange;
                n.dragging.minDistance = t.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && n.component.props.eventSelection !== o.instance.instanceId)
            }, n.handleDragStart = function (e) {
                var t = n.component.context,
                    r = n.eventRange;
                n.relevantEvents = Dn(t.getCurrentData().eventStore, n.eventRange.instance.instanceId);
                var o = n.querySegEl(e);
                n.draggingSegEl = o, n.draggingSeg = er(o), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
                    el: o,
                    event: new Mr(t, r.def, r.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                })
            }, n.handleHitUpdate = function (e, t, r) {
                var o = n.component.context,
                    i = n.relevantEvents,
                    a = n.hitDragging.initialHit,
                    s = n.eventRange.instance,
                    l = null,
                    u = null,
                    c = !1,
                    d = {
                        affectedEvents: i,
                        mutatedEvents: {
                            defs: {},
                            instances: {}
                        },
                        isEvent: !0
                    };
                e && (e.componentId === a.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(a, e) || (l = function (e, t, n, r) {
                    var o = e.context.dateEnv,
                        i = e.dateSpan.range.start,
                        a = t.dateSpan.range.start,
                        s = Fn(i, a, o, e.largeUnit);
                    if (n) {
                        if (o.add(r.start, s) < r.end) return {
                            startDelta: s
                        }
                    } else if (o.add(r.end, s) > r.start) return {
                        endDelta: s
                    };
                    return null
                }(a, e, r.subjectEl.classList.contains("fc-event-resizer-start"), s.range)));
                l && (u = br(i, o.getCurrentData().eventUiBases, l, o), d.mutatedEvents = u, ka(d, e.dateProfile, o) || (c = !0, l = null, u = null, d.mutatedEvents = null)), u ? o.dispatch({
                    type: "SET_EVENT_RESIZE",
                    state: d
                }) : o.dispatch({
                    type: "UNSET_EVENT_RESIZE"
                }), c ? Oe() : Ae(), t || (l && As(a, e) && (l = null), n.validMutation = l, n.mutatedRelevantEvents = u)
            }, n.handleDragEnd = function (e) {
                var t = n.component.context,
                    o = n.eventRange.def,
                    i = n.eventRange.instance,
                    a = new Mr(t, o, i),
                    s = n.relevantEvents,
                    l = n.mutatedRelevantEvents;
                if (t.emitter.trigger("eventResizeStop", {
                        el: n.draggingSegEl,
                        event: a,
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    }), n.validMutation) {
                    var u = new Mr(t, l.defs[o.defId], i ? l.instances[i.instanceId] : null);
                    t.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: l
                    });
                    var c = {
                        oldEvent: a,
                        event: u,
                        relatedEvents: Ir(l, t, i),
                        revert: function () {
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: s
                            })
                        }
                    };
                    t.emitter.trigger("eventResize", r(r({}, c), {
                        el: n.draggingSegEl,
                        startDelta: n.validMutation.startDelta || kt(0),
                        endDelta: n.validMutation.endDelta || kt(0),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    })), t.emitter.trigger("eventChange", c)
                } else t.emitter.trigger("_noEventResize");
                n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null
            };
            var o = t.component,
                i = n.dragging = new Ns(t.el);
            i.pointer.selector = ".fc-event-resizer", i.touchScrollAllowed = !1, i.autoScroller.isEnabled = o.context.options.dragScroll;
            var a = n.hitDragging = new Os(n.dragging, ta(t));
            return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("dragend", n.handleDragEnd), n
        }
        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t.prototype.querySegEl = function (e) {
            return Ee(e.subjectEl, ".fc-event")
        }, t
    }(Qi);
    var Vs = function () {
            function e(e) {
                var t = this;
                this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function (e) {
                    e.jsEvent && (t.isRecentPointerDateSelect = !0)
                }, this.onDocumentPointerDown = function (e) {
                    var n = t.context.options.unselectCancel,
                        r = e.origEvent.target;
                    t.matchesCancel = !!Ee(r, n), t.matchesEvent = !!Ee(r, Bs.SELECTOR)
                }, this.onDocumentPointerUp = function (e) {
                    var n = t.context,
                        r = t.documentPointer,
                        o = n.getCurrentData();
                    if (!r.wasTouchScroll) {
                        if (o.dateSelection && !t.isRecentPointerDateSelect) {
                            var i = n.options.unselectAuto;
                            !i || i && t.matchesCancel || n.calendarApi.unselect(e)
                        }
                        o.eventSelection && !t.matchesEvent && n.dispatch({
                            type: "UNSELECT_EVENT"
                        })
                    }
                    t.isRecentPointerDateSelect = !1
                };
                var n = this.documentPointer = new ws(document);
                n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect)
            }
            return e.prototype.destroy = function () {
                this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy()
            }, e
        }(),
        Fs = {
            fixedMirrorParent: En
        },
        Gs = {
            dateClick: En,
            eventDragStart: En,
            eventDragStop: En,
            eventDrop: En,
            eventResizeStart: En,
            eventResizeStop: En,
            eventResize: En,
            drop: En,
            eventReceive: En,
            eventLeave: En
        },
        js = function () {
            function e(e, t) {
                var n = this;
                this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function (e) {
                    n.dragMeta = n.buildDragMeta(e.subjectEl)
                }, this.handleHitUpdate = function (e, t, o) {
                    var i = n.hitDragging.dragging,
                        a = null,
                        s = null,
                        l = !1,
                        u = {
                            affectedEvents: {
                                defs: {},
                                instances: {}
                            },
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: n.dragMeta.create
                        };
                    e && (a = e.context, n.canDropElOnCalendar(o.subjectEl, a) && (s = function (e, t, n) {
                        for (var o = r({}, t.leftoverProps), i = 0, a = n.pluginHooks.externalDefTransforms; i < a.length; i++) {
                            var s = a[i];
                            r(o, s(e, t))
                        }
                        var l = Wn(o, n),
                            u = l.refined,
                            c = l.extra,
                            d = Un(u, c, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
                            p = e.range.start;
                        e.allDay && t.startTime && (p = n.dateEnv.add(p, t.startTime));
                        var f = t.duration ? n.dateEnv.add(p, t.duration) : Er(e.allDay, p, n),
                            h = ft(d.defId, {
                                start: p,
                                end: f
                            });
                        return {
                            def: d,
                            instance: h
                        }
                    }(e.dateSpan, n.dragMeta, a), u.mutatedEvents = Cn(s), (l = !ka(u, e.dateProfile, a)) && (u.mutatedEvents = {
                        defs: {},
                        instances: {}
                    }, s = null))), n.displayDrag(a, u), i.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")), l ? Oe() : Ae(), t || (i.setMirrorNeedsRevert(!s), n.receivingContext = a, n.droppableEvent = s)
                }, this.handleDragEnd = function (e) {
                    var t = n,
                        o = t.receivingContext,
                        i = t.droppableEvent;
                    if (n.clearDrag(), o && i) {
                        var a = n.hitDragging.finalHit,
                            s = a.context.viewApi,
                            l = n.dragMeta;
                        if (o.emitter.trigger("drop", r(r({}, Ws(a.dateSpan, o)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: s
                            })), l.create) {
                            var u = Cn(i);
                            o.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: u
                            }), e.isTouch && o.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: i.instance.instanceId
                            }), o.emitter.trigger("eventReceive", {
                                event: new Mr(o, i.def, i.instance),
                                relatedEvents: [],
                                revert: function () {
                                    o.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: u
                                    })
                                },
                                draggedEl: e.subjectEl,
                                view: s
                            })
                        }
                    }
                    n.receivingContext = null, n.droppableEvent = null
                };
                var o = this.hitDragging = new Os(e, na);
                o.requireInitial = !1, o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t
            }
            return e.prototype.buildDragMeta = function (e) {
                return "object" == typeof this.suppliedDragMeta ? aa(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? aa(this.suppliedDragMeta(e)) : aa((t = function (e, t) {
                    var n = oa.dataAttrPrefix,
                        r = (n ? n + "-" : "") + t;
                    return e.getAttribute("data-" + r) || ""
                }(e, "event")) ? JSON.parse(t) : {
                    create: !1
                });
                var t
            }, e.prototype.displayDrag = function (e, t) {
                var n = this.receivingContext;
                n && n !== e && n.dispatch({
                    type: "UNSET_EVENT_DRAG"
                }), e && e.dispatch({
                    type: "SET_EVENT_DRAG",
                    state: t
                })
            }, e.prototype.clearDrag = function () {
                this.receivingContext && this.receivingContext.dispatch({
                    type: "UNSET_EVENT_DRAG"
                })
            }, e.prototype.canDropElOnCalendar = function (e, t) {
                var n = t.options.dropAccept;
                return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(be(e, n))
            }, e
        }();
    oa.dataAttrPrefix = "";
    var qs = function () {
            function e(e, t) {
                var n = this;
                void 0 === t && (t = {}), this.handlePointerDown = function (e) {
                    var t = n.dragging,
                        r = n.settings,
                        o = r.minDistance,
                        i = r.longPressDelay;
                    t.minDistance = null != o ? o : e.isTouch ? 0 : pn.eventDragMinDistance, t.delay = e.isTouch ? null != i ? i : pn.longPressDelay : 0
                }, this.handleDragStart = function (e) {
                    e.isTouch && n.dragging.delay && e.subjectEl.classList.contains("fc-event") && n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
                }, this.settings = t;
                var r = this.dragging = new Ns(e);
                r.touchScrollAllowed = !1, null != t.itemSelector && (r.pointer.selector = t.itemSelector), null != t.appendTo && (r.mirror.parentNode = t.appendTo), r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), new js(r, t.eventData)
            }
            return e.prototype.destroy = function () {
                this.dragging.destroy()
            }, e
        }(),
        Ys = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function (e) {
                    n.emitter.trigger("pointerdown", e), n.shouldIgnoreMove || n.emitter.trigger("dragstart", e)
                }, n.handlePointerMove = function (e) {
                    n.shouldIgnoreMove || n.emitter.trigger("dragmove", e)
                }, n.handlePointerUp = function (e) {
                    n.emitter.trigger("pointerup", e), n.shouldIgnoreMove || n.emitter.trigger("dragend", e)
                };
                var r = n.pointer = new ws(t);
                return r.emitter.on("pointerdown", n.handlePointerDown), r.emitter.on("pointermove", n.handlePointerMove), r.emitter.on("pointerup", n.handlePointerUp), n
            }
            return n(t, e), t.prototype.destroy = function () {
                this.pointer.destroy()
            }, t.prototype.setIgnoreMove = function (e) {
                this.shouldIgnoreMove = e
            }, t.prototype.setMirrorIsVisible = function (e) {
                if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
                else {
                    var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
                    t && (this.currentMirrorEl = t, t.style.visibility = "hidden")
                }
            }, t
        }(ra),
        Zs = function () {
            function e(e, t) {
                var n = document;
                e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
                var r = this.dragging = new Ys(n);
                "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new js(r, t.eventData)
            }
            return e.prototype.destroy = function () {
                this.dragging.destroy()
            }, e
        }(),
        Xs = Fo({
            componentInteractions: [Ls, Us, Bs, zs],
            calendarInteractions: [Vs],
            elementDraggingImpl: Ns,
            optionRefiners: Fs,
            listenerRefiners: Gs
        }),
        Ks = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.headerElRef = xo(), t
            }
            return n(t, e), t.prototype.renderSimpleLayout = function (e, t) {
                var n = this.props,
                    r = this.context,
                    o = [],
                    i = $a(r.options);
                return e && o.push({
                    type: "header",
                    key: "header",
                    isSticky: i,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }), o.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunk: {
                        content: t
                    }
                }), To(ti, {
                    viewSpec: r.viewSpec
                }, (function (e, t) {
                    return To("div", {
                        ref: e,
                        className: ["fc-daygrid"].concat(t).join(" ")
                    }, To(Qa, {
                        liquid: !n.isHeightAuto && !n.forPrint,
                        collapsibleWidth: n.forPrint,
                        cols: [],
                        sections: o
                    }))
                }))
            }, t.prototype.renderHScrollLayout = function (e, t, n, r) {
                var o = this.context.pluginHooks.scrollGridImpl;
                if (!o) throw new Error("No ScrollGrid implementation");
                var i = this.props,
                    a = this.context,
                    s = !i.forPrint && $a(a.options),
                    l = !i.forPrint && Ja(a.options),
                    u = [];
                return e && u.push({
                    type: "header",
                    key: "header",
                    isSticky: s,
                    chunks: [{
                        key: "main",
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }]
                }), u.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunks: [{
                        key: "main",
                        content: t
                    }]
                }), l && u.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "main",
                        content: Ka
                    }]
                }), To(ti, {
                    viewSpec: a.viewSpec
                }, (function (e, t) {
                    return To("div", {
                        ref: e,
                        className: ["fc-daygrid"].concat(t).join(" ")
                    }, To(o, {
                        liquid: !i.isHeightAuto && !i.forPrint,
                        collapsibleWidth: i.forPrint,
                        colGroups: [{
                            cols: [{
                                span: n,
                                minWidth: r
                            }]
                        }],
                        sections: u
                    }))
                }))
            }, t
        }(Vo);

    function $s(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a)
        }
        return n
    }

    function Js(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a)
        }
        return n
    }

    function Qs(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {
                affectedInstances: e.affectedInstances,
                isEvent: e.isEvent,
                segs: []
            };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }
    var el = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = this.context.options.navLinks ? {
                    "data-navlink": so(e.date),
                    tabIndex: 0
                } : {};
            return To(is, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraHookProps: e.extraHookProps,
                defaultContent: tl
            }, (function (n, o) {
                return (o || e.forceDayTop) && To("div", {
                    className: "fc-daygrid-day-top",
                    ref: n
                }, To("a", r({
                    className: "fc-daygrid-day-number"
                }, t), o || To(ko, null, " ")))
            }))
        }, t
    }(Lo);

    function tl(e) {
        return e.dayNumberText
    }
    var nl = cn({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "narrow"
    });

    function rl(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
    }
    var ol = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props;
                return To(ts, r({}, e, {
                    extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
                    defaultTimeFormat: nl,
                    defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                    disableResizing: !e.seg.eventRange.def.allDay
                }))
            }, t
        }(Lo),
        il = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options.eventTimeFormat || nl,
                    o = lr(e.seg, n, t, !0, e.defaultDisplayEventEnd);
                return To(es, {
                    seg: e.seg,
                    timeText: o,
                    defaultContent: al,
                    isDragging: e.isDragging,
                    isResizing: !1,
                    isDateSelecting: !1,
                    isSelected: e.isSelected,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday
                }, (function (t, n, o, i) {
                    return To("a", r({
                        className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(n).join(" "),
                        ref: t
                    }, (a = e.seg, (s = a.eventRange.def.url) ? {
                        href: s
                    } : {})), i);
                    var a, s
                }))
            }, t
        }(Lo);

    function al(e) {
        return To(ko, null, To("div", {
            className: "fc-daygrid-event-dot",
            style: {
                borderColor: e.borderColor || e.backgroundColor
            }
        }), e.timeText && To("div", {
            className: "fc-event-time"
        }, e.timeText), To("div", {
            className: "fc-event-title"
        }, e.event.title || To(ko, null, " ")))
    }
    var sl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.compileSegs = qt(ll), t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = this.compileSegs(e.singlePlacements),
                n = t.allSegs,
                o = t.invisibleSegs;
            return To(vs, {
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                allDayDate: e.allDayDate,
                moreCnt: e.moreCnt,
                allSegs: n,
                hiddenSegs: o,
                alignmentElRef: e.alignmentElRef,
                alignGridTop: e.alignGridTop,
                extraDateSpan: e.extraDateSpan,
                popoverContent: function () {
                    var t = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
                    return To(ko, null, n.map((function (n) {
                        var o = n.eventRange.instance.instanceId;
                        return To("div", {
                            className: "fc-daygrid-event-harness",
                            key: o,
                            style: {
                                visibility: t[o] ? "hidden" : ""
                            }
                        }, rl(n) ? To(il, r({
                            seg: n,
                            isDragging: !1,
                            isSelected: o === e.eventSelection,
                            defaultDisplayEventEnd: !1
                        }, ur(n, e.todayRange))) : To(ol, r({
                            seg: n,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: o === e.eventSelection,
                            defaultDisplayEventEnd: !1
                        }, ur(n, e.todayRange))))
                    })))
                }
            }, (function (e, t, n, r, o) {
                return To("a", {
                    ref: e,
                    className: ["fc-daygrid-more-link"].concat(t).join(" "),
                    onClick: o
                }, r)
            }))
        }, t
    }(Lo);

    function ll(e) {
        for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            t.push(i.seg), i.isVisible || n.push(i.seg)
        }
        return {
            allSegs: t,
            invisibleSegs: n
        }
    }
    var ul = cn({
            week: "narrow"
        }),
        cl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = xo(), t.handleRootEl = function (e) {
                    zo(t.rootElRef, e), zo(t.props.elRef, e)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = e.props,
                    n = e.context,
                    o = e.rootElRef,
                    i = n.options,
                    a = t.date,
                    s = t.dateProfile,
                    l = i.navLinks ? {
                        "data-navlink": so(a, "week"),
                        tabIndex: 0
                    } : {};
                return To(ss, {
                    date: a,
                    dateProfile: s,
                    todayRange: t.todayRange,
                    showDayNumber: t.showDayNumber,
                    extraHookProps: t.extraHookProps,
                    elRef: this.handleRootEl
                }, (function (e, n, i, u) {
                    return To("td", r({
                        ref: e,
                        className: ["fc-daygrid-day"].concat(n, t.extraClassNames || []).join(" ")
                    }, i, t.extraDataAttrs), To("div", {
                        className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                        ref: t.innerElRef
                    }, t.showWeekNumber && To(ds, {
                        date: a,
                        defaultFormat: ul
                    }, (function (e, t, n, o) {
                        return To("a", r({
                            ref: e,
                            className: ["fc-daygrid-week-number"].concat(t).join(" ")
                        }, l), o)
                    })), !u && To(el, {
                        date: a,
                        dateProfile: s,
                        showDayNumber: t.showDayNumber,
                        forceDayTop: t.forceDayTop,
                        todayRange: t.todayRange,
                        extraHookProps: t.extraHookProps
                    }), To("div", {
                        className: "fc-daygrid-day-events",
                        ref: t.fgContentElRef
                    }, t.fgContent, To("div", {
                        className: "fc-daygrid-day-bottom",
                        style: {
                            marginTop: t.moreMarginTop
                        }
                    }, To(sl, {
                        allDayDate: a,
                        singlePlacements: t.singlePlacements,
                        moreCnt: t.moreCnt,
                        alignmentElRef: o,
                        alignGridTop: !t.showDayNumber,
                        extraDateSpan: t.extraDateSpan,
                        dateProfile: t.dateProfile,
                        eventSelection: t.eventSelection,
                        eventDrag: t.eventDrag,
                        eventResize: t.eventResize,
                        todayRange: t.todayRange
                    }))), To("div", {
                        className: "fc-daygrid-day-bg"
                    }, t.bgContent)))
                }))
            }, t
        }(Vo);

    function dl(e, t, n, r, o, i, a) {
        var s = new fl;
        s.allowReslicing = !0, s.strictOrder = r, !0 === t || !0 === n ? (s.maxCoord = i, s.hiddenConsumes = !0) : "number" == typeof t ? s.maxStackCnt = t : "number" == typeof n && (s.maxStackCnt = n, s.hiddenConsumes = !0);
        for (var l = [], u = [], c = 0; c < e.length; c += 1) {
            var d = o[(w = e[c]).eventRange.instance.instanceId];
            null != d ? l.push({
                index: c,
                spanStart: w.firstCol,
                spanEnd: w.lastCol + 1,
                thickness: d
            }) : u.push(w)
        }
        for (var p = s.addSegs(l), f = function (e, t, n) {
                for (var r = function (e, t) {
                        for (var n = [], r = 0; r < t; r += 1) n.push([]);
                        for (var o = 0, i = e; o < i.length; o++) {
                            var a = i[o];
                            for (r = a.spanStart; r < a.spanEnd; r += 1) n[r].push(a)
                        }
                        return n
                    }(e, n.length), o = [], i = [], a = [], s = 0; s < n.length; s += 1) {
                    for (var l = r[s], u = [], c = 0, d = 0, p = 0, f = l; p < f.length; p++) {
                        var h = t[(y = f[p]).segInput.index];
                        u.push({
                            seg: pl(h, s, s + 1, n),
                            isVisible: !0,
                            isAbsolute: !1,
                            absoluteTop: 0,
                            marginTop: y.levelCoord - c
                        }), c = y.levelCoord + y.thickness
                    }
                    var v = [];
                    c = 0, d = 0;
                    for (var g = 0, m = l; g < m.length; g++) {
                        h = t[(y = m[g]).segInput.index];
                        var y, S = y.spanEnd - y.spanStart > 1,
                            E = y.spanStart === s;
                        d += y.levelCoord - c, c = y.levelCoord + y.thickness, S ? (d += y.thickness, E && v.push({
                            seg: pl(h, y.spanStart, y.spanEnd, n),
                            isVisible: !0,
                            isAbsolute: !0,
                            absoluteTop: y.levelCoord,
                            marginTop: 0
                        })) : E && (v.push({
                            seg: pl(h, y.spanStart, y.spanEnd, n),
                            isVisible: !0,
                            isAbsolute: !1,
                            absoluteTop: 0,
                            marginTop: d
                        }), d = 0)
                    }
                    o.push(u), i.push(v), a.push(d)
                }
                return {
                    singleColPlacements: o,
                    multiColPlacements: i,
                    leftoverMargins: a
                }
            }(s.toRects(), e, a), h = f.singleColPlacements, v = f.multiColPlacements, g = f.leftoverMargins, m = [], y = [], S = 0, E = u; S < E.length; S++) {
            v[(w = E[S]).firstCol].push({
                seg: w,
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0
            });
            for (var b = w.firstCol; b <= w.lastCol; b += 1) h[b].push({
                seg: pl(w, b, b + 1, a),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0
            })
        }
        for (b = 0; b < a.length; b += 1) m.push(0);
        for (var C = 0, D = p; C < D.length; C++) {
            var R = D[C],
                w = e[R.segInput.index];
            v[R.spanStart].push({
                seg: w,
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0
            });
            for (b = R.spanStart; b < R.spanEnd; b += 1) m[b] += 1, h[b].push({
                seg: pl(w, b, b + 1, a),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0
            })
        }
        for (b = 0; b < a.length; b += 1) y.push(g[b]);
        return {
            singleColPlacements: h,
            multiColPlacements: v,
            moreCnts: m,
            moreMarginTops: y
        }
    }

    function pl(e, t, n, o) {
        if (e.firstCol === t && e.lastCol === n - 1) return e;
        var i = e.eventRange,
            a = i.range,
            s = qn(a, {
                start: o[t].date,
                end: $e(o[n - 1].date, 1)
            });
        return r(r({}, e), {
            firstCol: t,
            lastCol: n - 1,
            eventRange: {
                def: i.def,
                ui: r(r({}, i.ui), {
                    durationEditable: !1
                }),
                instance: i.instance,
                range: s
            },
            isStart: e.isStart && s.start.valueOf() === a.start.valueOf(),
            isEnd: e.isEnd && s.end.valueOf() === a.end.valueOf()
        })
    }
    var fl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hiddenConsumes = !1, t.forceHidden = {}, t
            }
            return n(t, e), t.prototype.addSegs = function (t) {
                for (var n = this, r = e.prototype.addSegs.call(this, t), o = this.entriesByLevel, i = function (e) {
                        return !n.forceHidden[Xi(e)]
                    }, a = 0; a < o.length; a += 1) o[a] = o[a].filter(i);
                return r
            }, t.prototype.handleInvalidInsertion = function (t, n, o) {
                var i = this.entriesByLevel,
                    a = this.forceHidden,
                    s = t.nextLevel - 1;
                if (this.hiddenConsumes && s >= 0)
                    for (var l = t.lateralStart; l < t.lateralEnd; l += 1) {
                        var u = i[s][l];
                        if (this.allowReslicing) {
                            var c = r(r({}, u), {
                                spanStart: Math.max(u.spanStart, n.spanStart),
                                spanEnd: Math.min(u.spanEnd, n.spanEnd)
                            });
                            a[d = Xi(c)] || (a[d] = !0, i[s][l] = c, this.splitEntry(u, n, o))
                        } else {
                            var d;
                            a[d = Xi(u)] || (a[d] = !0, o.push(u))
                        }
                    }
                return e.prototype.handleInvalidInsertion.call(this, t, n, o)
            }, t
        }(Yi),
        hl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.cellElRefs = new Ua, t.frameElRefs = new Ua, t.fgElRefs = new Ua, t.segHarnessRefs = new Ua, t.rootElRef = xo(), t.state = {
                    framePositions: null,
                    maxContentHeight: null,
                    eventInstanceHeights: {}
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this,
                    n = t.props,
                    r = t.state,
                    o = t.context.options,
                    i = n.cells.length,
                    a = Js(n.businessHourSegs, i),
                    s = Js(n.bgEventSegs, i),
                    l = Js(this.getHighlightSegs(), i),
                    u = Js(this.getMirrorSegs(), i),
                    c = dl(rr(n.fgEventSegs, o.eventOrder), n.dayMaxEvents, n.dayMaxEventRows, o.eventOrderStrict, r.eventInstanceHeights, r.maxContentHeight, n.cells),
                    d = c.singleColPlacements,
                    p = c.multiColPlacements,
                    f = c.moreCnts,
                    h = c.moreMarginTops,
                    v = n.eventDrag && n.eventDrag.affectedInstances || n.eventResize && n.eventResize.affectedInstances || {};
                return To("tr", {
                    ref: this.rootElRef
                }, n.renderIntro && n.renderIntro(), n.cells.map((function (t, r) {
                    var o = e.renderFgSegs(r, n.forPrint ? d[r] : p[r], n.todayRange, v),
                        i = e.renderFgSegs(r, function (e, t) {
                            if (!e.length) return [];
                            var n = function (e) {
                                for (var t = {}, n = 0, r = e; n < r.length; n++)
                                    for (var o = 0, i = r[n]; o < i.length; o++) {
                                        var a = i[o];
                                        t[a.seg.eventRange.instance.instanceId] = a.absoluteTop
                                    }
                                return e
                            }(t);
                            return e.map((function (e) {
                                return {
                                    seg: e,
                                    isVisible: !0,
                                    isAbsolute: !0,
                                    absoluteTop: n[e.eventRange.instance.instanceId],
                                    marginTop: 0
                                }
                            }))
                        }(u[r], p), n.todayRange, {}, Boolean(n.eventDrag), Boolean(n.eventResize), !1);
                    return To(cl, {
                        key: t.key,
                        elRef: e.cellElRefs.createRef(t.key),
                        innerElRef: e.frameElRefs.createRef(t.key),
                        dateProfile: n.dateProfile,
                        date: t.date,
                        showDayNumber: n.showDayNumbers,
                        showWeekNumber: n.showWeekNumbers && 0 === r,
                        forceDayTop: n.showWeekNumbers,
                        todayRange: n.todayRange,
                        eventSelection: n.eventSelection,
                        eventDrag: n.eventDrag,
                        eventResize: n.eventResize,
                        extraHookProps: t.extraHookProps,
                        extraDataAttrs: t.extraDataAttrs,
                        extraClassNames: t.extraClassNames,
                        extraDateSpan: t.extraDateSpan,
                        moreCnt: f[r],
                        moreMarginTop: h[r],
                        singlePlacements: d[r],
                        fgContentElRef: e.fgElRefs.createRef(t.key),
                        fgContent: To(ko, null, To(ko, null, o), To(ko, null, i)),
                        bgContent: To(ko, null, e.renderFillSegs(l[r], "highlight"), e.renderFillSegs(a[r], "non-business"), e.renderFillSegs(s[r], "bg-event"))
                    })
                })))
            }, t.prototype.componentDidMount = function () {
                this.updateSizing(!0)
            }, t.prototype.componentDidUpdate = function (e, t) {
                var n = this.props;
                this.updateSizing(!Et(e, n))
            }, t.prototype.getHighlightSegs = function () {
                var e = this.props;
                return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
            }, t.prototype.getMirrorSegs = function () {
                var e = this.props;
                return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
            }, t.prototype.renderFgSegs = function (e, t, n, o, i, a, s) {
                var l = this.context,
                    u = this.props.eventSelection,
                    c = this.state.framePositions,
                    d = 1 === this.props.cells.length,
                    p = i || a || s,
                    f = [];
                if (c)
                    for (var h = 0, v = t; h < v.length; h++) {
                        var g = v[h],
                            m = g.seg,
                            y = m.eventRange.instance.instanceId,
                            S = y + ":" + e,
                            E = g.isVisible && !o[y],
                            b = g.isAbsolute,
                            C = "",
                            D = "";
                        b && (l.isRtl ? (D = 0, C = c.lefts[m.lastCol] - c.lefts[m.firstCol]) : (C = 0, D = c.rights[m.firstCol] - c.rights[m.lastCol])), f.push(To("div", {
                            className: "fc-daygrid-event-harness" + (b ? " fc-daygrid-event-harness-abs" : ""),
                            key: S,
                            ref: p ? null : this.segHarnessRefs.createRef(S),
                            style: {
                                visibility: E ? "" : "hidden",
                                marginTop: b ? "" : g.marginTop,
                                top: b ? g.absoluteTop : "",
                                left: C,
                                right: D
                            }
                        }, rl(m) ? To(il, r({
                            seg: m,
                            isDragging: i,
                            isSelected: y === u,
                            defaultDisplayEventEnd: d
                        }, ur(m, n))) : To(ol, r({
                            seg: m,
                            isDragging: i,
                            isResizing: a,
                            isDateSelecting: s,
                            isSelected: y === u,
                            defaultDisplayEventEnd: d
                        }, ur(m, n)))))
                    }
                return f
            }, t.prototype.renderFillSegs = function (e, t) {
                var n = this.context.isRtl,
                    i = this.props.todayRange,
                    a = this.state.framePositions,
                    s = [];
                if (a)
                    for (var l = 0, u = e; l < u.length; l++) {
                        var c = u[l],
                            d = n ? {
                                right: 0,
                                left: a.lefts[c.lastCol] - a.lefts[c.firstCol]
                            } : {
                                left: 0,
                                right: a.rights[c.firstCol] - a.rights[c.lastCol]
                            };
                        s.push(To("div", {
                            key: dr(c.eventRange),
                            className: "fc-daygrid-bg-harness",
                            style: d
                        }, "bg-event" === t ? To(us, r({
                            seg: c
                        }, ur(c, i))) : ls(t)))
                    }
                return To.apply(void 0, o([ko, {}], s))
            }, t.prototype.updateSizing = function (e) {
                var t = this.props,
                    n = this.frameElRefs;
                if (!t.forPrint && null !== t.clientWidth) {
                    if (e) {
                        var r = t.cells.map((function (e) {
                            return n.currentMap[e.key]
                        }));
                        if (r.length) {
                            var o = this.rootElRef.current;
                            this.setState({
                                framePositions: new Eo(o, r, !0, !1)
                            })
                        }
                    }
                    var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                    this.setState({
                        eventInstanceHeights: this.queryEventInstanceHeights(),
                        maxContentHeight: i ? this.computeMaxContentHeight() : null
                    })
                }
            }, t.prototype.queryEventInstanceHeights = function () {
                var e = this.segHarnessRefs.currentMap,
                    t = {};
                for (var n in e) {
                    var r = Math.round(e[n].getBoundingClientRect().height),
                        o = n.split(":")[0];
                    t[o] = Math.max(t[o] || 0, r)
                }
                return t
            }, t.prototype.computeMaxContentHeight = function () {
                var e = this.props.cells[0].key,
                    t = this.cellElRefs.currentMap[e],
                    n = this.fgElRefs.currentMap[e];
                return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
            }, t.prototype.getCellEls = function () {
                var e = this.cellElRefs.currentMap;
                return this.props.cells.map((function (t) {
                    return e[t.key]
                }))
            }, t
        }(Vo);
    hl.addStateEquality({
        eventInstanceHeights: Et
    });
    var vl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitBusinessHourSegs = qt($s), t.splitBgEventSegs = qt($s), t.splitFgEventSegs = qt($s), t.splitDateSelectionSegs = qt($s), t.splitEventDrag = qt(Qs), t.splitEventResize = qt(Qs), t.rowRefs = new Ua, t.handleRootEl = function (e) {
                t.rootEl = e, e ? t.context.registerInteractiveComponent(t, {
                    el: e,
                    isHitComboAllowed: t.props.isHitComboAllowed
                }) : t.context.unregisterInteractiveComponent(t)
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = this.props,
                n = t.dateProfile,
                r = t.dayMaxEventRows,
                o = t.dayMaxEvents,
                i = t.expandRows,
                a = t.cells.length,
                s = this.splitBusinessHourSegs(t.businessHourSegs, a),
                l = this.splitBgEventSegs(t.bgEventSegs, a),
                u = this.splitFgEventSegs(t.fgEventSegs, a),
                c = this.splitDateSelectionSegs(t.dateSelectionSegs, a),
                d = this.splitEventDrag(t.eventDrag, a),
                p = this.splitEventResize(t.eventResize, a),
                f = !0 === o || !0 === r;
            return f && !i && (f = !1, r = null, o = null), To("div", {
                className: ["fc-daygrid-body", f ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", i ? "" : "fc-daygrid-body-natural"].join(" "),
                ref: this.handleRootEl,
                style: {
                    width: t.clientWidth,
                    minWidth: t.tableMinWidth
                }
            }, To(ba, {
                unit: "day"
            }, (function (f, h) {
                return To(ko, null, To("table", {
                    className: "fc-scrollgrid-sync-table",
                    style: {
                        width: t.clientWidth,
                        minWidth: t.tableMinWidth,
                        height: i ? t.clientHeight : ""
                    }
                }, t.colGroupNode, To("tbody", null, t.cells.map((function (i, f) {
                    return To(hl, {
                        ref: e.rowRefs.createRef(f),
                        key: i.length ? i[0].date.toISOString() : f,
                        showDayNumbers: a > 1,
                        showWeekNumbers: t.showWeekNumbers,
                        todayRange: h,
                        dateProfile: n,
                        cells: i,
                        renderIntro: t.renderRowIntro,
                        businessHourSegs: s[f],
                        eventSelection: t.eventSelection,
                        bgEventSegs: l[f].filter(gl),
                        fgEventSegs: u[f],
                        dateSelectionSegs: c[f],
                        eventDrag: d[f],
                        eventResize: p[f],
                        dayMaxEvents: o,
                        dayMaxEventRows: r,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: t.forPrint
                    })
                })))))
            })))
        }, t.prototype.prepareHits = function () {
            this.rowPositions = new Eo(this.rootEl, this.rowRefs.collect().map((function (e) {
                return e.getCellEls()[0]
            })), !1, !0), this.colPositions = new Eo(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
        }, t.prototype.queryHit = function (e, t) {
            var n = this.colPositions,
                o = this.rowPositions,
                i = n.leftToIndex(e),
                a = o.topToIndex(t);
            if (null != a && null != i) {
                var s = this.props.cells[a][i];
                return {
                    dateProfile: this.props.dateProfile,
                    dateSpan: r({
                        range: this.getCellRange(a, i),
                        allDay: !0
                    }, s.extraDateSpan),
                    dayEl: this.getCellEl(a, i),
                    rect: {
                        left: n.lefts[i],
                        right: n.rights[i],
                        top: o.tops[a],
                        bottom: o.bottoms[a]
                    },
                    layer: 0
                }
            }
            return null
        }, t.prototype.getCellEl = function (e, t) {
            return this.rowRefs.currentMap[e].getCellEls()[t]
        }, t.prototype.getCellRange = function (e, t) {
            var n = this.props.cells[e][t].date;
            return {
                start: n,
                end: $e(n, 1)
            }
        }, t
    }(Vo);

    function gl(e) {
        return e.eventRange.def.allDay
    }
    var ml = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.forceDayIfListItem = !0, t
            }
            return n(t, e), t.prototype.sliceRange = function (e, t) {
                return t.sliceRange(e)
            }, t
        }(_a),
        yl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.slicer = new ml, t.tableRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return To(vl, r({
                    ref: this.tableRef
                }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                    dateProfile: e.dateProfile,
                    cells: e.dayTableModel.cells,
                    colGroupNode: e.colGroupNode,
                    tableMinWidth: e.tableMinWidth,
                    renderRowIntro: e.renderRowIntro,
                    dayMaxEvents: e.dayMaxEvents,
                    dayMaxEventRows: e.dayMaxEventRows,
                    showWeekNumbers: e.showWeekNumbers,
                    expandRows: e.expandRows,
                    headerAlignElRef: e.headerAlignElRef,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    forPrint: e.forPrint
                }))
            }, t
        }(Vo),
        Sl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDayTableModel = qt(El), t.headerRef = xo(), t.tableRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.context,
                    n = t.options,
                    r = t.dateProfileGenerator,
                    o = this.props,
                    i = this.buildDayTableModel(o.dateProfile, r),
                    a = n.dayHeaders && To(Da, {
                        ref: this.headerRef,
                        dateProfile: o.dateProfile,
                        dates: i.headerDates,
                        datesRepDistinctDays: 1 === i.rowCnt
                    }),
                    s = function (t) {
                        return To(yl, {
                            ref: e.tableRef,
                            dateProfile: o.dateProfile,
                            dayTableModel: i,
                            businessHours: o.businessHours,
                            dateSelection: o.dateSelection,
                            eventStore: o.eventStore,
                            eventUiBases: o.eventUiBases,
                            eventSelection: o.eventSelection,
                            eventDrag: o.eventDrag,
                            eventResize: o.eventResize,
                            nextDayThreshold: n.nextDayThreshold,
                            colGroupNode: t.tableColGroupNode,
                            tableMinWidth: t.tableMinWidth,
                            dayMaxEvents: n.dayMaxEvents,
                            dayMaxEventRows: n.dayMaxEventRows,
                            showWeekNumbers: n.weekNumbers,
                            expandRows: !o.isHeightAuto,
                            headerAlignElRef: e.headerElRef,
                            clientWidth: t.clientWidth,
                            clientHeight: t.clientHeight,
                            forPrint: o.forPrint
                        })
                    };
                return n.dayMinWidth ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(a, s)
            }, t
        }(Ks);

    function El(e, t) {
        var n = new wa(e.renderRange, t);
        return new Ta(n, /year|month|week/.test(e.currentRangeUnit))
    }
    var bl = Fo({
            initialView: "dayGridMonth",
            views: {
                dayGrid: {
                    component: Sl,
                    dateProfileGeneratorClass: function (e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return n(t, e), t.prototype.buildRenderRange = function (t, n, r) {
                            var o, i = this.props.dateEnv,
                                a = e.prototype.buildRenderRange.call(this, t, n, r),
                                s = a.start,
                                l = a.end;
                            (/^(year|month)$/.test(n) && (s = i.startOfWeek(s), (o = i.startOfWeek(l)).valueOf() !== l.valueOf() && (l = Ke(o, 1))), this.props.monthMode && this.props.fixedWeekCount) && (l = Ke(l, 6 - Math.ceil(Qe(s, l))));
                            return {
                                start: s,
                                end: l
                            }
                        }, t
                    }(ai)
                },
                dayGridDay: {
                    type: "dayGrid",
                    duration: {
                        days: 1
                    }
                },
                dayGridWeek: {
                    type: "dayGrid",
                    duration: {
                        weeks: 1
                    }
                },
                dayGridMonth: {
                    type: "dayGrid",
                    duration: {
                        months: 1
                    },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        }),
        Cl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.getKeyInfo = function () {
                return {
                    allDay: {},
                    timed: {}
                }
            }, t.prototype.getKeysForDateSpan = function (e) {
                return e.allDay ? ["allDay"] : ["timed"]
            }, t.prototype.getKeysForEventDef = function (e) {
                return e.allDay ? Jn(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
            }, t
        }(no),
        Dl = cn({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "short"
        });

    function Rl(e) {
        var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
        return To(Oo.Consumer, null, (function (n) {
            if (!e.isLabeled) return To("td", {
                className: t.join(" "),
                "data-time": e.isoTimeStr
            });
            var r = n.dateEnv,
                o = n.options,
                i = n.viewApi,
                a = null == o.slotLabelFormat ? Dl : Array.isArray(o.slotLabelFormat) ? cn(o.slotLabelFormat[0]) : cn(o.slotLabelFormat),
                s = {
                    level: 0,
                    time: e.time,
                    date: r.toDate(e.date),
                    view: i,
                    text: r.format(e.date, a)
                };
            return To(Yo, {
                hookProps: s,
                classNames: o.slotLabelClassNames,
                content: o.slotLabelContent,
                defaultContent: wl,
                didMount: o.slotLabelDidMount,
                willUnmount: o.slotLabelWillUnmount
            }, (function (n, r, o, i) {
                return To("td", {
                    ref: n,
                    className: t.concat(r).join(" "),
                    "data-time": e.isoTimeStr
                }, To("div", {
                    className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
                }, To("div", {
                    className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                    ref: o
                }, i)))
            }))
        }))
    }

    function wl(e) {
        return e.text
    }
    var Tl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                return this.props.slatMetas.map((function (e) {
                    return To("tr", {
                        key: e.key
                    }, To(Rl, r({}, e)))
                }))
            }, t
        }(Lo),
        _l = cn({
            week: "short"
        }),
        xl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.allDaySplitter = new Cl, t.headerElRef = xo(), t.rootElRef = xo(), t.scrollerElRef = xo(), t.state = {
                    slatCoords: null
                }, t.handleScrollTopRequest = function (e) {
                    var n = t.scrollerElRef.current;
                    n && (n.scrollTop = e)
                }, t.renderHeadAxis = function (e, n) {
                    void 0 === n && (n = "");
                    var o = t.context.options,
                        i = t.props.dateProfile.renderRange,
                        a = et(i.start, i.end),
                        s = o.navLinks && 1 === a ? {
                            "data-navlink": so(i.start, "week"),
                            tabIndex: 0
                        } : {};
                    return o.weekNumbers && "day" === e ? To(ds, {
                        date: i.start,
                        defaultFormat: _l
                    }, (function (e, t, o, i) {
                        return To("th", {
                            ref: e,
                            className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
                        }, To("div", {
                            className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                            style: {
                                height: n
                            }
                        }, To("a", r({
                            ref: o,
                            className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
                        }, s), i)))
                    })) : To("th", {
                        className: "fc-timegrid-axis"
                    }, To("div", {
                        className: "fc-timegrid-axis-frame",
                        style: {
                            height: n
                        }
                    }))
                }, t.renderTableRowAxis = function (e) {
                    var n = t.context,
                        r = n.options,
                        o = n.viewApi,
                        i = {
                            text: r.allDayText,
                            view: o
                        };
                    return To(Yo, {
                        hookProps: i,
                        classNames: r.allDayClassNames,
                        content: r.allDayContent,
                        defaultContent: kl,
                        didMount: r.allDayDidMount,
                        willUnmount: r.allDayWillUnmount
                    }, (function (t, n, r, o) {
                        return To("td", {
                            ref: t,
                            className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
                        }, To("div", {
                            className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == e ? " fc-timegrid-axis-frame-liquid" : ""),
                            style: {
                                height: e
                            }
                        }, To("span", {
                            className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                            ref: r
                        }, o)))
                    }))
                }, t.handleSlatCoords = function (e) {
                    t.setState({
                        slatCoords: e
                    })
                }, t
            }
            return n(t, e), t.prototype.renderSimpleLayout = function (e, t, n) {
                var r = this.context,
                    o = this.props,
                    i = [],
                    a = $a(r.options);
                return e && i.push({
                    type: "header",
                    key: "header",
                    isSticky: a,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }), t && (i.push({
                    type: "body",
                    key: "all-day",
                    chunk: {
                        content: t
                    }
                }), i.push({
                    type: "body",
                    key: "all-day-divider",
                    outerContent: To("tr", {
                        className: "fc-scrollgrid-section"
                    }, To("td", {
                        className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
                    }))
                })), i.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(r.options.expandRows),
                    chunk: {
                        scrollerElRef: this.scrollerElRef,
                        content: n
                    }
                }), To(ti, {
                    viewSpec: r.viewSpec,
                    elRef: this.rootElRef
                }, (function (e, t) {
                    return To("div", {
                        className: ["fc-timegrid"].concat(t).join(" "),
                        ref: e
                    }, To(Qa, {
                        liquid: !o.isHeightAuto && !o.forPrint,
                        collapsibleWidth: o.forPrint,
                        cols: [{
                            width: "shrink"
                        }],
                        sections: i
                    }))
                }))
            }, t.prototype.renderHScrollLayout = function (e, t, n, r, o, i, a) {
                var s = this,
                    l = this.context.pluginHooks.scrollGridImpl;
                if (!l) throw new Error("No ScrollGrid implementation");
                var u = this.context,
                    c = this.props,
                    d = !c.forPrint && $a(u.options),
                    p = !c.forPrint && Ja(u.options),
                    f = [];
                e && f.push({
                    type: "header",
                    key: "header",
                    isSticky: d,
                    syncRowHeights: !0,
                    chunks: [{
                        key: "axis",
                        rowContent: function (e) {
                            return To("tr", null, s.renderHeadAxis("day", e.rowSyncHeights[0]))
                        }
                    }, {
                        key: "cols",
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }]
                }), t && (f.push({
                    type: "body",
                    key: "all-day",
                    syncRowHeights: !0,
                    chunks: [{
                        key: "axis",
                        rowContent: function (e) {
                            return To("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]))
                        }
                    }, {
                        key: "cols",
                        content: t
                    }]
                }), f.push({
                    key: "all-day-divider",
                    type: "body",
                    outerContent: To("tr", {
                        className: "fc-scrollgrid-section"
                    }, To("td", {
                        colSpan: 2,
                        className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
                    }))
                }));
                var h = u.options.nowIndicator;
                return f.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(u.options.expandRows),
                    chunks: [{
                        key: "axis",
                        content: function (e) {
                            return To("div", {
                                className: "fc-timegrid-axis-chunk"
                            }, To("table", {
                                style: {
                                    height: e.expandRows ? e.clientHeight : ""
                                }
                            }, e.tableColGroupNode, To("tbody", null, To(Tl, {
                                slatMetas: i
                            }))), To("div", {
                                className: "fc-timegrid-now-indicator-container"
                            }, To(ba, {
                                unit: h ? "minute" : "day"
                            }, (function (e) {
                                var t = h && a && a.safeComputeTop(e);
                                return "number" == typeof t ? To(rs, {
                                    isAxis: !0,
                                    date: e
                                }, (function (e, n, r, o) {
                                    return To("div", {
                                        ref: e,
                                        className: ["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),
                                        style: {
                                            top: t
                                        }
                                    }, o)
                                })) : null
                            }))))
                        }
                    }, {
                        key: "cols",
                        scrollerElRef: this.scrollerElRef,
                        content: n
                    }]
                }), p && f.push({
                    key: "footer",
                    type: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "axis",
                        content: Ka
                    }, {
                        key: "cols",
                        content: Ka
                    }]
                }), To(ti, {
                    viewSpec: u.viewSpec,
                    elRef: this.rootElRef
                }, (function (e, t) {
                    return To("div", {
                        className: ["fc-timegrid"].concat(t).join(" "),
                        ref: e
                    }, To(l, {
                        liquid: !c.isHeightAuto && !c.forPrint,
                        collapsibleWidth: !1,
                        colGroups: [{
                            width: "shrink",
                            cols: [{
                                width: "shrink"
                            }]
                        }, {
                            cols: [{
                                span: r,
                                minWidth: o
                            }]
                        }],
                        sections: f
                    }))
                }))
            }, t.prototype.getAllDayMaxEventProps = function () {
                var e = this.context.options,
                    t = e.dayMaxEvents,
                    n = e.dayMaxEventRows;
                return !0 !== t && !0 !== n || (t = void 0, n = 5), {
                    dayMaxEvents: t,
                    dayMaxEventRows: n
                }
            }, t
        }(Vo);

    function kl(e) {
        return e.text
    }
    var Ml = function () {
            function e(e, t, n) {
                this.positions = e, this.dateProfile = t, this.slotDuration = n
            }
            return e.prototype.safeComputeTop = function (e) {
                var t = this.dateProfile;
                if (Kn(t.currentRange, e)) {
                    var n = ot(e),
                        r = e.valueOf() - n.valueOf();
                    if (r >= Wt(t.slotMinTime) && r < Wt(t.slotMaxTime)) return this.computeTimeTop(kt(r))
                }
                return null
            }, e.prototype.computeDateTop = function (e, t) {
                return t || (t = ot(e)), this.computeTimeTop(kt(e.valueOf() - t.valueOf()))
            }, e.prototype.computeTimeTop = function (e) {
                var t, n, r = this.positions,
                    o = this.dateProfile,
                    i = r.els.length,
                    a = (e.milliseconds - Wt(o.slotMinTime)) / Wt(this.slotDuration);
                return a = Math.max(0, a), a = Math.min(i, a), t = Math.floor(a), n = a - (t = Math.min(t, i - 1)), r.tops[t] + r.getHeight(t) * n
            }, e
        }(),
        Pl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    o = e.slatElRefs;
                return To("tbody", null, e.slatMetas.map((function (i, a) {
                    var s = {
                            time: i.time,
                            date: t.dateEnv.toDate(i.date),
                            view: t.viewApi
                        },
                        l = ["fc-timegrid-slot", "fc-timegrid-slot-lane", i.isLabeled ? "" : "fc-timegrid-slot-minor"];
                    return To("tr", {
                        key: i.key,
                        ref: o.createRef(i.key)
                    }, e.axis && To(Rl, r({}, i)), To(Yo, {
                        hookProps: s,
                        classNames: n.slotLaneClassNames,
                        content: n.slotLaneContent,
                        didMount: n.slotLaneDidMount,
                        willUnmount: n.slotLaneWillUnmount
                    }, (function (e, t, n, r) {
                        return To("td", {
                            ref: e,
                            className: l.concat(t).join(" "),
                            "data-time": i.isoTimeStr
                        }, r)
                    })))
                })))
            }, t
        }(Lo),
        Il = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = xo(), t.slatElRefs = new Ua, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return To("div", {
                    className: "fc-timegrid-slots",
                    ref: this.rootElRef
                }, To("table", {
                    className: t.theme.getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth,
                        height: e.minHeight
                    }
                }, e.tableColGroupNode, To(Pl, {
                    slatElRefs: this.slatElRefs,
                    axis: e.axis,
                    slatMetas: e.slatMetas
                })))
            }, t.prototype.componentDidMount = function () {
                this.updateSizing()
            }, t.prototype.componentDidUpdate = function () {
                this.updateSizing()
            }, t.prototype.componentWillUnmount = function () {
                this.props.onCoords && this.props.onCoords(null)
            }, t.prototype.updateSizing = function () {
                var e, t = this.context,
                    n = this.props;
                n.onCoords && null !== n.clientWidth && (this.rootElRef.current.offsetHeight && n.onCoords(new Ml(new Eo(this.rootElRef.current, (e = this.slatElRefs.currentMap, n.slatMetas.map((function (t) {
                    return e[t.key]
                }))), !1, !0), this.props.dateProfile, t.options.slotDuration)))
            }, t
        }(Lo);

    function Nl(e, t) {
        var n, r = [];
        for (n = 0; n < t; n += 1) r.push([]);
        if (e)
            for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
        return r
    }

    function Hl(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {
                affectedInstances: e.affectedInstances,
                isEvent: e.isEvent,
                segs: []
            };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }
    var Ol = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = xo(), t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = this.props;
            return To(vs, {
                allDayDate: null,
                moreCnt: t.hiddenSegs.length,
                allSegs: t.hiddenSegs,
                hiddenSegs: t.hiddenSegs,
                alignmentElRef: this.rootElRef,
                defaultContent: Al,
                extraDateSpan: t.extraDateSpan,
                dateProfile: t.dateProfile,
                todayRange: t.todayRange,
                popoverContent: function () {
                    return ql(t.hiddenSegs, t)
                }
            }, (function (n, r, o, i, a) {
                return To("a", {
                    ref: function (t) {
                        zo(n, t), zo(e.rootElRef, t)
                    },
                    className: ["fc-timegrid-more-link"].concat(r).join(" "),
                    style: {
                        top: t.top,
                        bottom: t.bottom
                    },
                    onClick: a
                }, To("div", {
                    ref: o,
                    className: "fc-timegrid-more-link-inner fc-sticky"
                }, i))
            }))
        }, t
    }(Lo);

    function Al(e) {
        return e.shortText
    }

    function Wl(e, t, n) {
        var o = new Yi;
        null != t && (o.strictOrder = t), null != n && (o.maxStackCnt = n);
        var i, a, s, l = Ki(o.addSegs(e)),
            u = function (e) {
                var t = e.entriesByLevel,
                    n = zl((function (e, t) {
                        return e + ":" + t
                    }), (function (o, i) {
                        var a = Ll(function (e, t, n) {
                                for (var r = e.levelCoords, o = e.entriesByLevel, i = o[t][n], a = r[t] + i.thickness, s = r.length, l = t; l < s && r[l] < a; l += 1);
                                for (; l < s; l += 1) {
                                    for (var u = o[l], c = void 0, d = Ji(u, i.spanStart, Zi), p = d[0] + d[1], f = p;
                                        (c = u[f]) && c.spanStart < i.spanEnd;) f += 1;
                                    if (p < f) return {
                                        level: l,
                                        lateralStart: p,
                                        lateralEnd: f
                                    }
                                }
                                return null
                            }(e, o, i), n),
                            s = t[o][i];
                        return [r(r({}, s), {
                            nextLevelNodes: a[0]
                        }), s.thickness + a[1]]
                    }));
                return Ll(t.length ? {
                    level: 0,
                    lateralStart: 0,
                    lateralEnd: t[0].length
                } : null, n)[0]
            }(o);
        return i = u, a = 1, s = zl((function (e, t, n) {
            return Xi(e)
        }), (function (e, t, n) {
            var o, i = e.nextLevelNodes,
                l = e.thickness,
                u = l + n,
                c = l / u,
                d = [];
            if (i.length)
                for (var p = 0, f = i; p < f.length; p++) {
                    var h = f[p];
                    if (void 0 === o) o = (v = s(h, t, u))[0], d.push(v[1]);
                    else {
                        var v = s(h, o, 0);
                        d.push(v[1])
                    }
                } else o = a;
            var g = (o - t) * c;
            return [o - g, r(r({}, e), {
                thickness: g,
                nextLevelNodes: d
            })]
        })), {
            segRects: function (e) {
                var t = [],
                    n = zl((function (e, t, n) {
                        return Xi(e)
                    }), (function (e, n, i) {
                        var a = r(r({}, e), {
                            levelCoord: n,
                            stackDepth: i,
                            stackForward: 0
                        });
                        return t.push(a), a.stackForward = o(e.nextLevelNodes, n + e.thickness, i + 1) + 1
                    }));

                function o(e, t, r) {
                    for (var o = 0, i = 0, a = e; i < a.length; i++) {
                        var s = a[i];
                        o = Math.max(n(s, t, r), o)
                    }
                    return o
                }
                return o(e, 0, 0), t
            }(u = i.map((function (e) {
                return s(e, 0, 0)[1]
            }))),
            hiddenGroups: l
        }
    }

    function Ll(e, t) {
        if (!e) return [
            [], 0
        ];
        for (var n = e.level, r = e.lateralStart, o = e.lateralEnd, i = r, a = []; i < o;) a.push(t(n, i)), i += 1;
        return a.sort(Ul), [a.map(Bl), a[0][1]]
    }

    function Ul(e, t) {
        return t[1] - e[1]
    }

    function Bl(e) {
        return e[0]
    }

    function zl(e, t) {
        var n = {};
        return function () {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            var i = e.apply(void 0, r);
            return i in n ? n[i] : n[i] = t.apply(void 0, r)
        }
    }
    var Vl = cn({
            hour: "numeric",
            minute: "2-digit",
            meridiem: !1
        }),
        Fl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = ["fc-timegrid-event", "fc-v-event"];
                return this.props.isShort && e.push("fc-timegrid-event-short"), To(ts, r({}, this.props, {
                    defaultTimeFormat: Vl,
                    extraClassNames: e
                }))
            }, t
        }(Lo),
        Gl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props;
                return To(is, {
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    extraHookProps: e.extraHookProps
                }, (function (e, t) {
                    return t && To("div", {
                        className: "fc-timegrid-col-misc",
                        ref: e
                    }, t)
                }))
            }, t
        }(Lo),
        jl = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.sortEventSegs = qt(rr), t.computeFgSegPlacements = qt(Wl), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = n.options.selectMirror,
                    i = t.eventDrag && t.eventDrag.segs || t.eventResize && t.eventResize.segs || o && t.dateSelectionSegs || [],
                    a = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {},
                    s = this.sortEventSegs(t.fgEventSegs, n.options.eventOrder);
                return To(ss, {
                    elRef: t.elRef,
                    date: t.date,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps
                }, (function (n, l, u) {
                    return To("td", r({
                        ref: n,
                        className: ["fc-timegrid-col"].concat(l, t.extraClassNames || []).join(" ")
                    }, u, t.extraDataAttrs), To("div", {
                        className: "fc-timegrid-col-frame"
                    }, To("div", {
                        className: "fc-timegrid-col-bg"
                    }, e.renderFillSegs(t.businessHourSegs, "non-business"), e.renderFillSegs(t.bgEventSegs, "bg-event"), e.renderFillSegs(t.dateSelectionSegs, "highlight")), To("div", {
                        className: "fc-timegrid-col-events"
                    }, e.renderFgSegs(s, a)), To("div", {
                        className: "fc-timegrid-col-events"
                    }, e.renderFgSegs(i, {}, Boolean(t.eventDrag), Boolean(t.eventResize), Boolean(o))), To("div", {
                        className: "fc-timegrid-now-indicator-container"
                    }, e.renderNowIndicator(t.nowIndicatorSegs)), To(Gl, {
                        date: t.date,
                        dateProfile: t.dateProfile,
                        todayRange: t.todayRange,
                        extraHookProps: t.extraHookProps
                    })))
                }))
            }, t.prototype.renderFgSegs = function (e, t, n, r, o) {
                var i = this.props;
                return i.forPrint ? ql(e, i) : i.slatCoords ? this.renderPositionedFgSegs(e, t, n, r, o) : null
            }, t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
                var a = this,
                    s = this.context.options,
                    l = s.eventMaxStack,
                    u = s.eventShortHeight,
                    c = s.eventOrderStrict,
                    d = this.props,
                    p = d.eventSelection,
                    f = d.todayRange,
                    h = d.nowDate,
                    v = n || o || i,
                    g = this.buildSegInputs(e),
                    m = v ? Wl(g) : this.computeFgSegPlacements(g, c, l),
                    y = m.segRects,
                    S = m.hiddenGroups;
                return To(ko, null, this.renderHiddenGroups(S, e), y.map((function (s) {
                    var l = e[s.segInput.index],
                        c = l.eventRange.instance.instanceId,
                        d = r(r({}, a.computeSegTopBottomCss(s.segInput)), v ? {
                            left: 0,
                            right: 0
                        } : a.computeSegLeftRightCss(s));
                    return To("div", {
                        className: "fc-timegrid-event-harness" + (s.stackForward > 0 ? " fc-timegrid-event-harness-inset" : ""),
                        key: c,
                        style: r({
                            visibility: t[c] ? "hidden" : ""
                        }, d)
                    }, To(Fl, r({
                        seg: l,
                        isDragging: n,
                        isResizing: o,
                        isDateSelecting: i,
                        isSelected: c === p,
                        isShort: s.spanEnd - s.spanStart < u
                    }, ur(l, f, h))))
                })))
            }, t.prototype.renderHiddenGroups = function (e, t) {
                var n = this,
                    r = this.props,
                    o = r.extraDateSpan,
                    i = r.dateProfile,
                    a = r.todayRange,
                    s = r.nowDate,
                    l = r.eventSelection,
                    u = r.eventDrag,
                    c = r.eventResize;
                return To(ko, null, e.map((function (e) {
                    var r, d, p = n.computeSegTopBottomCss(e),
                        f = (r = e.entries, d = t, r.map((function (e) {
                            return d[e.segInput.index]
                        })));
                    return To(Ol, {
                        key: Bt(ys(f)),
                        hiddenSegs: f,
                        top: p.top,
                        bottom: p.bottom,
                        extraDateSpan: o,
                        dateProfile: i,
                        todayRange: a,
                        nowDate: s,
                        eventSelection: l,
                        eventDrag: u,
                        eventResize: c
                    })
                })))
            }, t.prototype.buildSegInputs = function (e) {
                for (var t = this.props, n = t.date, r = t.slatCoords, o = this.context.options.eventMinHeight, i = [], a = 0; a < e.length; a += 1) {
                    var s = e[a],
                        l = r.computeDateTop(s.start, n),
                        u = Math.max(l + (o || 0), r.computeDateTop(s.end, n));
                    i.push({
                        index: a,
                        spanStart: Math.round(l),
                        spanEnd: Math.round(u),
                        thickness: 1
                    })
                }
                return i
            }, t.prototype.renderFillSegs = function (e, t) {
                var n = this,
                    o = this.props;
                if (!o.slatCoords) return null;
                var i = this.buildSegInputs(e).map((function (i) {
                    var a = e[i.index];
                    return To("div", {
                        key: dr(a.eventRange),
                        className: "fc-timegrid-bg-harness",
                        style: n.computeSegTopBottomCss(i)
                    }, "bg-event" === t ? To(us, r({
                        seg: a
                    }, ur(a, o.todayRange, o.nowDate))) : ls(t))
                }));
                return To(ko, null, i)
            }, t.prototype.renderNowIndicator = function (e) {
                var t = this.props,
                    n = t.slatCoords,
                    r = t.date;
                return n ? e.map((function (e, t) {
                    return To(rs, {
                        isAxis: !1,
                        date: r,
                        key: t
                    }, (function (t, o, i, a) {
                        return To("div", {
                            ref: t,
                            className: ["fc-timegrid-now-indicator-line"].concat(o).join(" "),
                            style: {
                                top: n.computeDateTop(e.start, r)
                            }
                        }, a)
                    }))
                })) : null
            }, t.prototype.computeSegTopBottomCss = function (e) {
                return {
                    top: e.spanStart,
                    bottom: -e.spanEnd
                }
            }, t.prototype.computeSegLeftRightCss = function (e) {
                var t, n, r = this.context,
                    o = r.isRtl,
                    i = r.options.slotEventOverlap,
                    a = e.levelCoord,
                    s = e.levelCoord + e.thickness;
                i && (s = Math.min(1, a + 2 * (s - a))), o ? (t = 1 - s, n = a) : (t = a, n = 1 - s);
                var l = {
                    zIndex: e.stackDepth + 1,
                    left: 100 * t + "%",
                    right: 100 * n + "%"
                };
                return i && !e.stackForward && (l[o ? "marginLeft" : "marginRight"] = 20), l
            }, t
        }(Lo);

    function ql(e, t) {
        var n = t.todayRange,
            o = t.nowDate,
            i = t.eventSelection,
            a = t.eventDrag,
            s = t.eventResize,
            l = (a ? a.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
        return To(ko, null, e.map((function (e) {
            var t = e.eventRange.instance.instanceId;
            return To("div", {
                key: t,
                style: {
                    visibility: l[t] ? "hidden" : ""
                }
            }, To(Fl, r({
                seg: e,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: t === i,
                isShort: !1
            }, ur(e, n, o))))
        })))
    }
    var Yl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitFgEventSegs = qt(Nl), t.splitBgEventSegs = qt(Nl), t.splitBusinessHourSegs = qt(Nl), t.splitNowIndicatorSegs = qt(Nl), t.splitDateSelectionSegs = qt(Nl), t.splitEventDrag = qt(Hl), t.splitEventResize = qt(Hl), t.rootElRef = xo(), t.cellElRefs = new Ua, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = this.props,
                n = this.context.options.nowIndicator && t.slatCoords && t.slatCoords.safeComputeTop(t.nowDate),
                r = t.cells.length,
                o = this.splitFgEventSegs(t.fgEventSegs, r),
                i = this.splitBgEventSegs(t.bgEventSegs, r),
                a = this.splitBusinessHourSegs(t.businessHourSegs, r),
                s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
                l = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
                u = this.splitEventDrag(t.eventDrag, r),
                c = this.splitEventResize(t.eventResize, r);
            return To("div", {
                className: "fc-timegrid-cols",
                ref: this.rootElRef
            }, To("table", {
                style: {
                    minWidth: t.tableMinWidth,
                    width: t.clientWidth
                }
            }, t.tableColGroupNode, To("tbody", null, To("tr", null, t.axis && To("td", {
                className: "fc-timegrid-col fc-timegrid-axis"
            }, To("div", {
                className: "fc-timegrid-col-frame"
            }, To("div", {
                className: "fc-timegrid-now-indicator-container"
            }, "number" == typeof n && To(rs, {
                isAxis: !0,
                date: t.nowDate
            }, (function (e, t, r, o) {
                return To("div", {
                    ref: e,
                    className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
                    style: {
                        top: n
                    }
                }, o)
            }))))), t.cells.map((function (n, r) {
                return To(jl, {
                    key: n.key,
                    elRef: e.cellElRefs.createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    nowDate: t.nowDate,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    extraDateSpan: n.extraDateSpan,
                    fgEventSegs: o[r],
                    bgEventSegs: i[r],
                    businessHourSegs: a[r],
                    nowIndicatorSegs: s[r],
                    dateSelectionSegs: l[r],
                    eventDrag: u[r],
                    eventResize: c[r],
                    slatCoords: t.slatCoords,
                    eventSelection: t.eventSelection,
                    forPrint: t.forPrint
                })
            }))))))
        }, t.prototype.componentDidMount = function () {
            this.updateCoords()
        }, t.prototype.componentDidUpdate = function () {
            this.updateCoords()
        }, t.prototype.updateCoords = function () {
            var e, t = this.props;
            t.onColCoords && null !== t.clientWidth && t.onColCoords(new Eo(this.rootElRef.current, (e = this.cellElRefs.currentMap, t.cells.map((function (t) {
                return e[t.key]
            }))), !0, !1))
        }, t
    }(Lo);
    var Zl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processSlotOptions = qt(Xl), t.state = {
                slatCoords: null
            }, t.handleRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e,
                    isHitComboAllowed: t.props.isHitComboAllowed
                }) : t.context.unregisterInteractiveComponent(t)
            }, t.handleScrollRequest = function (e) {
                var n = t.props.onScrollTopRequest,
                    r = t.state.slatCoords;
                if (n && r) {
                    if (e.time) {
                        var o = r.computeTimeTop(e.time);
                        (o = Math.ceil(o)) && (o += 1), n(o)
                    }
                    return !0
                }
                return !1
            }, t.handleColCoords = function (e) {
                t.colCoords = e
            }, t.handleSlatCoords = function (e) {
                t.setState({
                    slatCoords: e
                }), t.props.onSlatCoords && t.props.onSlatCoords(e)
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = this.state;
            return To("div", {
                className: "fc-timegrid-body",
                ref: this.handleRootEl,
                style: {
                    width: e.clientWidth,
                    minWidth: e.tableMinWidth
                }
            }, To(Il, {
                axis: e.axis,
                dateProfile: e.dateProfile,
                slatMetas: e.slatMetas,
                clientWidth: e.clientWidth,
                minHeight: e.expandRows ? e.clientHeight : "",
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                onCoords: this.handleSlatCoords
            }), To(Yl, {
                cells: e.cells,
                axis: e.axis,
                dateProfile: e.dateProfile,
                businessHourSegs: e.businessHourSegs,
                bgEventSegs: e.bgEventSegs,
                fgEventSegs: e.fgEventSegs,
                dateSelectionSegs: e.dateSelectionSegs,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                todayRange: e.todayRange,
                nowDate: e.nowDate,
                nowIndicatorSegs: e.nowIndicatorSegs,
                clientWidth: e.clientWidth,
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.tableColGroupNode,
                slatCoords: t.slatCoords,
                onColCoords: this.handleColCoords,
                forPrint: e.forPrint
            }))
        }, t.prototype.componentDidMount = function () {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
        }, t.prototype.componentDidUpdate = function (e) {
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
        }, t.prototype.componentWillUnmount = function () {
            this.scrollResponder.detach()
        }, t.prototype.queryHit = function (e, t) {
            var n = this.context,
                o = n.dateEnv,
                i = n.options,
                a = this.colCoords,
                s = this.props.dateProfile,
                l = this.state.slatCoords,
                u = this.processSlotOptions(this.props.slotDuration, i.snapDuration),
                c = u.snapDuration,
                d = u.snapsPerSlot,
                p = a.leftToIndex(e),
                f = l.positions.topToIndex(t);
            if (null != p && null != f) {
                var h = this.props.cells[p],
                    v = l.positions.tops[f],
                    g = l.positions.getHeight(f),
                    m = (t - v) / g,
                    y = f * d + Math.floor(m * d),
                    S = this.props.cells[p].date,
                    E = It(s.slotMinTime, Nt(c, y)),
                    b = o.add(S, E),
                    C = o.add(b, c);
                return {
                    dateProfile: s,
                    dateSpan: r({
                        range: {
                            start: b,
                            end: C
                        },
                        allDay: !1
                    }, h.extraDateSpan),
                    dayEl: a.els[p],
                    rect: {
                        left: a.lefts[p],
                        right: a.rights[p],
                        top: v,
                        bottom: v + g
                    },
                    layer: 0
                }
            }
            return null
        }, t
    }(Vo);

    function Xl(e, t) {
        var n = t || e,
            r = Lt(e, n);
        return null === r && (n = e, r = 1), {
            snapDuration: n,
            snapsPerSlot: r
        }
    }
    var Kl = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.sliceRange = function (e, t) {
                for (var n = [], r = 0; r < t.length; r += 1) {
                    var o = qn(e, t[r]);
                    o && n.push({
                        start: o.start,
                        end: o.end,
                        isStart: o.start.valueOf() === e.start.valueOf(),
                        isEnd: o.end.valueOf() === e.end.valueOf(),
                        col: r
                    })
                }
                return n
            }, t
        }(_a),
        $l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDayRanges = qt(Jl), t.slicer = new Kl, t.timeColsRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = t.dateProfile,
                    i = t.dayTableModel,
                    a = n.options.nowIndicator,
                    s = this.buildDayRanges(i, o, n.dateEnv);
                return To(ba, {
                    unit: a ? "minute" : "day"
                }, (function (l, u) {
                    return To(Zl, r({
                        ref: e.timeColsRef
                    }, e.slicer.sliceProps(t, o, null, n, s), {
                        forPrint: t.forPrint,
                        axis: t.axis,
                        dateProfile: o,
                        slatMetas: t.slatMetas,
                        slotDuration: t.slotDuration,
                        cells: i.cells[0],
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        expandRows: t.expandRows,
                        nowDate: l,
                        nowIndicatorSegs: a && e.slicer.sliceNowDate(l, n, s),
                        todayRange: u,
                        onScrollTopRequest: t.onScrollTopRequest,
                        onSlatCoords: t.onSlatCoords
                    }))
                }))
            }, t
        }(Vo);

    function Jl(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime)
            })
        }
        return r
    }
    var Ql = [{
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        seconds: 30
    }, {
        seconds: 15
    }];

    function eu(e, t, n, r, o) {
        for (var i = new Date(0), a = e, s = kt(0), l = n || function (e) {
                var t, n, r;
                for (t = Ql.length - 1; t >= 0; t -= 1)
                    if (null !== (r = Lt(n = kt(Ql[t]), e)) && r > 1) return n;
                return e
            }(r), u = []; Wt(a) < Wt(t);) {
            var c = o.add(i, a),
                d = null !== Lt(s, l);
            u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: Vt(c),
                isLabeled: d
            }), a = It(a, r), s = It(s, r)
        }
        return u
    }
    var tu = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildTimeColsModel = qt(nu), t.buildSlatMetas = qt(eu), t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = this.context,
                n = t.options,
                o = t.dateEnv,
                i = t.dateProfileGenerator,
                a = this.props,
                s = a.dateProfile,
                l = this.buildTimeColsModel(s, i),
                u = this.allDaySplitter.splitProps(a),
                c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, n.slotLabelInterval, n.slotDuration, o),
                d = n.dayMinWidth,
                p = !d,
                f = d,
                h = n.dayHeaders && To(Da, {
                    dates: l.headerDates,
                    dateProfile: s,
                    datesRepDistinctDays: !0,
                    renderIntro: p ? this.renderHeadAxis : null
                }),
                v = !1 !== n.allDaySlot && function (t) {
                    return To(yl, r({}, u.allDay, {
                        dateProfile: s,
                        dayTableModel: l,
                        nextDayThreshold: n.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: p ? e.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: a.forPrint
                    }, e.getAllDayMaxEventProps()))
                },
                g = function (t) {
                    return To($l, r({}, u.timed, {
                        dayTableModel: l,
                        dateProfile: s,
                        axis: p,
                        slotDuration: n.slotDuration,
                        slatMetas: c,
                        forPrint: a.forPrint,
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        onSlatCoords: e.handleSlatCoords,
                        expandRows: t.expandRows,
                        onScrollTopRequest: e.handleScrollTopRequest
                    }))
                };
            return f ? this.renderHScrollLayout(h, v, g, l.colCnt, d, c, this.state.slatCoords) : this.renderSimpleLayout(h, v, g)
        }, t
    }(xl);

    function nu(e, t) {
        var n = new wa(e.renderRange, t);
        return new Ta(n, !1)
    }
    var ru = Fo({
            initialView: "timeGridWeek",
            optionRefiners: {
                allDaySlot: Boolean
            },
            views: {
                timeGrid: {
                    component: tu,
                    usesMinMaxTime: !0,
                    allDaySlot: !0,
                    slotDuration: "00:30:00",
                    slotEventOverlap: !0
                },
                timeGridDay: {
                    type: "timeGrid",
                    duration: {
                        days: 1
                    }
                },
                timeGridWeek: {
                    type: "timeGrid",
                    duration: {
                        weeks: 1
                    }
                }
            }
        }),
        ou = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = e.dayDate,
                    n = e.todayRange,
                    o = this.context,
                    i = o.theme,
                    a = o.dateEnv,
                    s = o.options,
                    l = o.viewApi,
                    u = oo(t, n),
                    c = s.listDayFormat ? a.format(t, s.listDayFormat) : "",
                    d = s.listDaySideFormat ? a.format(t, s.listDaySideFormat) : "",
                    p = s.navLinks ? so(t) : null,
                    f = r({
                        date: a.toDate(t),
                        view: l,
                        text: c,
                        sideText: d,
                        navLinkData: p
                    }, u),
                    h = ["fc-list-day"].concat(io(u, i));
                return To(Yo, {
                    hookProps: f,
                    classNames: s.dayHeaderClassNames,
                    content: s.dayHeaderContent,
                    defaultContent: iu,
                    didMount: s.dayHeaderDidMount,
                    willUnmount: s.dayHeaderWillUnmount
                }, (function (e, n, r, o) {
                    return To("tr", {
                        ref: e,
                        className: h.concat(n).join(" "),
                        "data-date": zt(t)
                    }, To("th", {
                        colSpan: 3
                    }, To("div", {
                        className: "fc-list-day-cushion " + i.getClass("tableCellShaded"),
                        ref: r
                    }, o)))
                }))
            }, t
        }(Lo);

    function iu(e) {
        var t = e.navLinkData ? {
            "data-navlink": e.navLinkData,
            tabIndex: 0
        } : {};
        return To(ko, null, e.text && To("a", r({
            className: "fc-list-day-text"
        }, t), e.text), e.sideText && To("a", r({
            className: "fc-list-day-side-text"
        }, t), e.sideText))
    }
    var au = cn({
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short"
        }),
        su = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = e.seg,
                    r = t.options.eventTimeFormat || au;
                return To(es, {
                    seg: n,
                    timeText: "",
                    disableDragging: !0,
                    disableResizing: !0,
                    defaultContent: lu,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday,
                    isSelected: e.isSelected,
                    isDragging: e.isDragging,
                    isResizing: e.isResizing,
                    isDateSelecting: e.isDateSelecting
                }, (function (e, o, i, a, s) {
                    return To("tr", {
                        className: ["fc-list-event", s.event.url ? "fc-event-forced-url" : ""].concat(o).join(" "),
                        ref: e
                    }, function (e, t, n) {
                        var r = n.options;
                        if (!1 !== r.displayEventTime) {
                            var o = e.eventRange.def,
                                i = e.eventRange.instance,
                                a = !1,
                                s = void 0;
                            if (o.allDay ? a = !0 : Vn(e.eventRange.range) ? e.isStart ? s = lr(e, t, n, null, null, i.range.start, e.end) : e.isEnd ? s = lr(e, t, n, null, null, e.start, i.range.end) : a = !0 : s = lr(e, t, n), a) {
                                var l = {
                                    text: n.options.allDayText,
                                    view: n.viewApi
                                };
                                return To(Yo, {
                                    hookProps: l,
                                    classNames: r.allDayClassNames,
                                    content: r.allDayContent,
                                    defaultContent: uu,
                                    didMount: r.allDayDidMount,
                                    willUnmount: r.allDayWillUnmount
                                }, (function (e, t, n, r) {
                                    return To("td", {
                                        className: ["fc-list-event-time"].concat(t).join(" "),
                                        ref: e
                                    }, r)
                                }))
                            }
                            return To("td", {
                                className: "fc-list-event-time"
                            }, s)
                        }
                        return null
                    }(n, r, t), To("td", {
                        className: "fc-list-event-graphic"
                    }, To("span", {
                        className: "fc-list-event-dot",
                        style: {
                            borderColor: s.borderColor || s.backgroundColor
                        }
                    })), To("td", {
                        className: "fc-list-event-title",
                        ref: i
                    }, a))
                }))
            }, t
        }(Lo);

    function lu(e) {
        var t = e.event,
            n = t.url;
        return To("a", r({}, n ? {
            href: n
        } : {}), t.title)
    }

    function uu(e) {
        return e.text
    }
    var cu = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeDateVars = qt(pu), t.eventStoreToSegs = qt(t._eventStoreToSegs), t.setRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = this.props,
                n = this.context,
                r = ["fc-list", n.theme.getClass("table"), !1 !== n.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                o = this.computeDateVars(t.dateProfile),
                i = o.dayDates,
                a = o.dayRanges,
                s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
            return To(ti, {
                viewSpec: n.viewSpec,
                elRef: this.setRootEl
            }, (function (n, o) {
                return To("div", {
                    ref: n,
                    className: r.concat(o).join(" ")
                }, To(La, {
                    liquid: !t.isHeightAuto,
                    overflowX: t.isHeightAuto ? "visible" : "hidden",
                    overflowY: t.isHeightAuto ? "visible" : "auto"
                }, s.length > 0 ? e.renderSegList(s, i) : e.renderEmptyMessage()))
            }))
        }, t.prototype.renderEmptyMessage = function () {
            var e = this.context,
                t = e.options,
                n = e.viewApi,
                r = {
                    text: t.noEventsText,
                    view: n
                };
            return To(Yo, {
                hookProps: r,
                classNames: t.noEventsClassNames,
                content: t.noEventsContent,
                defaultContent: du,
                didMount: t.noEventsDidMount,
                willUnmount: t.noEventsWillUnmount
            }, (function (e, t, n, r) {
                return To("div", {
                    className: ["fc-list-empty"].concat(t).join(" "),
                    ref: e
                }, To("div", {
                    className: "fc-list-empty-cushion",
                    ref: n
                }, r))
            }))
        }, t.prototype.renderSegList = function (e, t) {
            var n = this.context,
                o = n.theme,
                i = n.options,
                a = function (e) {
                    var t, n, r = [];
                    for (t = 0; t < e.length; t += 1)(r[(n = e[t]).dayIndex] || (r[n.dayIndex] = [])).push(n);
                    return r
                }(e);
            return To(ba, {
                unit: "day"
            }, (function (e, n) {
                for (var s = [], l = 0; l < a.length; l += 1) {
                    var u = a[l];
                    if (u) {
                        var c = t[l].toISOString();
                        s.push(To(ou, {
                            key: c,
                            dayDate: t[l],
                            todayRange: n
                        }));
                        for (var d = 0, p = u = rr(u, i.eventOrder); d < p.length; d++) {
                            var f = p[d];
                            s.push(To(su, r({
                                key: c + ":" + f.eventRange.instance.instanceId,
                                seg: f,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: !1
                            }, ur(f, n, e))))
                        }
                    }
                }
                return To("table", {
                    className: "fc-list-table " + o.getClass("table")
                }, To("tbody", null, s))
            }))
        }, t.prototype._eventStoreToSegs = function (e, t, n) {
            return this.eventRangesToSegs($n(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
        }, t.prototype.eventRangesToSegs = function (e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.eventRangeToSegs(i, t))
            }
            return n
        }, t.prototype.eventRangeToSegs = function (e, t) {
            var n, r, o, i = this.context.dateEnv,
                a = this.context.options.nextDayThreshold,
                s = e.range,
                l = e.def.allDay,
                u = [];
            for (n = 0; n < t.length; n += 1)
                if ((r = qn(s, t[n])) && (o = {
                        component: this,
                        eventRange: e,
                        start: r.start,
                        end: r.end,
                        isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
                        isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
                        dayIndex: n
                    }, u.push(o), !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a))) {
                    o.end = s.end, o.isEnd = !0;
                    break
                }
            return u
        }, t
    }(Vo);

    function du(e) {
        return e.text
    }

    function pu(e) {
        for (var t = ot(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n;) r.push(t), o.push({
            start: t,
            end: $e(t, 1)
        }), t = $e(t, 1);
        return {
            dayDates: r,
            dayRanges: o
        }
    }

    function fu(e) {
        return !1 === e ? null : cn(e)
    }
    var hu = Fo({
            optionRefiners: {
                listDayFormat: fu,
                listDaySideFormat: fu,
                noEventsClassNames: En,
                noEventsContent: En,
                noEventsDidMount: En,
                noEventsWillUnmount: En
            },
            views: {
                list: {
                    component: cu,
                    buttonTextKey: "list",
                    listDayFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listDay: {
                    type: "list",
                    duration: {
                        days: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    }
                },
                listWeek: {
                    type: "list",
                    duration: {
                        weeks: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    },
                    listDaySideFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listMonth: {
                    type: "list",
                    duration: {
                        month: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                },
                listYear: {
                    type: "list",
                    duration: {
                        year: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                }
            }
        }),
        vu = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t
        }(Ro);
    vu.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body"
    }, vu.prototype.baseIconClass = "fa", vu.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
    }, vu.prototype.rtlIconClasses = {
        prev: "fa-chevron-right",
        next: "fa-chevron-left",
        prevYear: "fa-angle-double-right",
        nextYear: "fa-angle-double-left"
    }, vu.prototype.iconOverrideOption = "bootstrapFontAwesome", vu.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", vu.prototype.iconOverridePrefix = "fa-";
    var gu = Fo({
            themeClasses: {
                bootstrap: vu
            }
        }),
        mu = "https://www.googleapis.com/calendar/v3/calendars";
    var yu = Fo({
            eventSourceDefs: [{
                parseMeta: function(e) {
                    var t = e.googleCalendarId;
                    return !t && e.url && (t = function(e) {
                        var t;
                        if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)) return e;
                        if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))) return decodeURIComponent(t[1]);
                        return null
                    }(e.url)), t ? {
                        googleCalendarId: t,
                        googleCalendarApiKey: e.googleCalendarApiKey,
                        googleCalendarApiBase: e.googleCalendarApiBase,
                        extraParams: e.extraParams
                    } : null
                },
                fetch: function(e, t, n) {
                    var o = e.context,
                        i = o.dateEnv,
                        a = o.options,
                        s = e.eventSource.meta,
                        l = s.googleCalendarApiKey || a.googleCalendarApiKey;
                    if (l) {
                        var u = function(e) {
                                var t = e.googleCalendarApiBase;
                                t || (t = mu);
                                return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
                            }(s),
                            c = s.extraParams,
                            d = "function" == typeof c ? c() : c,
                            p = function(e, t, n, o) {
                                var i, a, s;
                                o.canComputeOffset ? (a = o.formatIso(e.start), s = o.formatIso(e.end)) : (a = $e(e.start, -1).toISOString(), s = $e(e.end, 1).toISOString());
                                i = r(r({}, n || {}), {
                                    key: t,
                                    timeMin: a,
                                    timeMax: s,
                                    singleEvents: !0,
                                    maxResults: 9999
                                }), "local" !== o.timeZone && (i.timeZone = o.timeZone);
                                return i
                            }(e.range, l, d, i);
                        wi("GET", u, p, (function(e, r) {
                            var o, i;
                            e.error ? n({
                                message: "Google Calendar API: " + e.error.message,
                                errors: e.error.errors,
                                xhr: r
                            }) : t({
                                rawEvents: (o = e.items, i = p.timeZone, o.map((function(e) {
                                    return function(e, t) {
                                        var n = e.htmlLink || null;
                                        n && t && (n = function(e, t) {
                                            return e.replace(/(\?.*?)?(#|$)/, (function(e, n, r) {
                                                return (n ? n + "&" : "?") + t + r
                                            }))
                                        }(n, "ctz=" + t));
                                        return {
                                            id: e.id,
                                            title: e.summary,
                                            start: e.start.dateTime || e.start.date,
                                            end: e.end.dateTime || e.end.date,
                                            url: n,
                                            location: e.location,
                                            description: e.description,
                                            attachments: e.attachments || [],
                                            extendedProps: (e.extendedProperties || {}).shared || {}
                                        }
                                    }(e, i)
                                }))),
                                xhr: r
                            })
                        }), (function(e, t) {
                            n({
                                message: e,
                                xhr: t
                            })
                        }))
                    } else n({
                        // message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
                    })
                }
            }],
            optionRefiners: {
                googleCalendarApiKey: String
            },
            eventSourceRefiners: {
                googleCalendarApiKey: String,
                googleCalendarId: String,
                googleCalendarApiBase: String,
                extraParams: En
            }
        }),
    Su = "2021-06-04",
        Eu = ["GPL-My-Project-Is-Open-Source", "CC-Attribution-NonCommercial-NoDerivatives"],
        bu = {
            position: "absolute",
            zIndex: 99999,
            bottom: "1px",
            left: "1px",
            background: "#eee",
            borderColor: "#ddd",
            borderStyle: "solid",
            borderWidth: "1px 1px 0 0",
            padding: "2px 4px",
            fontSize: "12px",
            borderTopRightRadius: "3px"
        };
    var Cu, Du = Fo({
            optionRefiners: {
                schedulerLicenseKey: String
            },
            // viewContainerAppends: [function(e) {
            //     var t = e.options.schedulerLicenseKey,
            //         n = "undefined" != typeof window ? window.location.href : "";
            //     if (!/\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(n)) {
            //         var r = function(e) {
            //             if (-1 !== Eu.indexOf(e)) return "valid";
            //             var t = (e || "").match(/^(\d+)-fcs-(\d+)$/);
            //             if (t && 10 === t[1].length) {
            //                 var n = new Date(1e3 * parseInt(t[2], 10)),
            //                     r = new Date(oa.mockSchedulerReleaseDate || Su);
            //                 if (dt(r)) return $e(r, -372) < n ? "valid" : "outdated"
            //             }
            //             return "invalid"
            //         }(t);
            //         if ("valid" !== r) return To("div", {
            //             className: "fc-license-message",
            //             style: bu
            //         }, "outdated" === r ? To(ko, null, "Your license key is too old to work with this version. ", To("a", {
            //             href: "http://fullcalendar.io/docs/schedulerLicenseKey#outdated"
            //         }, "More Info")) : To(ko, null, "Your license key is invalid. ", To("a", {
            //             href: "http://fullcalendar.io/docs/schedulerLicenseKey#invalid"
            //         }, "More Info")))
            //     }
            //     return null
            // }]
        }),
        Ru = "wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" "),
        wu = function () {
            function e(e) {
                var t = this;
                this.el = e, this.emitter = new So, this.isScrolling = !1, this.isTouching = !1, this.isRecentlyWheeled = !1, this.isRecentlyScrolled = !1, this.wheelWaiter = new Pi(this._handleWheelWaited.bind(this)), this.scrollWaiter = new Pi(this._handleScrollWaited.bind(this)), this.handleScroll = function () {
                    t.startScroll(), t.emitter.trigger("scroll", t.isRecentlyWheeled, t.isTouching), t.isRecentlyScrolled = !0, t.scrollWaiter.request(500)
                }, this.handleWheel = function () {
                    t.isRecentlyWheeled = !0, t.wheelWaiter.request(500)
                }, this.handleTouchStart = function () {
                    t.isTouching = !0
                }, this.handleTouchEnd = function () {
                    t.isTouching = !1, t.isRecentlyScrolled || t.endScroll()
                }, e.addEventListener("scroll", this.handleScroll), e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), e.addEventListener("touchend", this.handleTouchEnd);
                for (var n = 0, r = Ru; n < r.length; n++) {
                    var o = r[n];
                    e.addEventListener(o, this.handleWheel)
                }
            }
            return e.prototype.destroy = function () {
                var e = this.el;
                e.removeEventListener("scroll", this.handleScroll), e.removeEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), e.removeEventListener("touchend", this.handleTouchEnd);
                for (var t = 0, n = Ru; t < n.length; t++) {
                    var r = n[t];
                    e.removeEventListener(r, this.handleWheel)
                }
            }, e.prototype.startScroll = function () {
                this.isScrolling || (this.isScrolling = !0, this.emitter.trigger("scrollStart", this.isRecentlyWheeled, this.isTouching))
            }, e.prototype.endScroll = function () {
                this.isScrolling && (this.emitter.trigger("scrollEnd"), this.isScrolling = !1, this.isRecentlyScrolled = !0, this.isRecentlyWheeled = !1, this.scrollWaiter.clear(), this.wheelWaiter.clear())
            }, e.prototype._handleScrollWaited = function () {
                this.isRecentlyScrolled = !1, this.isTouching || this.endScroll()
            }, e.prototype._handleWheelWaited = function () {
                this.isRecentlyWheeled = !1
            }, e
        }();

    function Tu(e) {
        var t = e.scrollLeft;
        if ("rtl" === window.getComputedStyle(e).direction) switch (xu()) {
            case "negative":
                t = e.scrollWidth - e.clientWidth + t;
                break;
            case "reverse":
                t = e.scrollWidth - e.clientWidth - t
        }
        return t
    }

    function _u(e, t) {
        if ("rtl" === window.getComputedStyle(e).direction) switch (xu()) {
            case "positive":
                t = e.scrollWidth - e.clientWidth + t;
                break;
            case "reverse":
                t = -t
        }
        e.scrollLeft = t
    }

    function xu() {
        return Cu || (Cu = function () {
            var e, t = document.createElement("div");
            t.style.position = "absolute", t.style.top = "-1000px", t.style.width = "1px", t.style.height = "1px", t.style.overflow = "scroll", t.style.direction = "rtl", t.style.fontSize = "100px", t.innerHTML = "A", document.body.appendChild(t), t.scrollLeft > 0 ? e = "positive" : (t.scrollLeft = 1, e = t.scrollLeft > 0 ? "reverse" : "negative");
            return Se(t), e
        }())
    }
    var ku = "undefined" != typeof navigator && /Edge/.test(navigator.userAgent),
        Mu = function () {
            function e(e, t) {
                var n = this;
                this.scrollEl = e, this.isRtl = t, this.usingRelative = null, this.updateSize = function () {
                    var e = n.scrollEl,
                        t = Ce(e, ".fc-sticky"),
                        r = n.queryElGeoms(t),
                        o = e.clientWidth,
                        i = e.clientHeight;
                    n.usingRelative ? function (e, t, n, r, o) {
                        e.forEach((function (e, i) {
                            var a, s, l = t[i],
                                u = l.naturalBound,
                                c = l.parentBound,
                                d = c.right - c.left,
                                p = c.bottom - c.bottom;
                            d > r || p > o ? (a = n[i].left - u.left, s = n[i].top - u.top) : (a = "", s = ""), we(e, {
                                position: "relative",
                                left: a,
                                right: -a,
                                top: s
                            })
                        }))
                    }(t, r, n.computeElDestinations(r, o), o, i) : function (e, t, n) {
                        e.forEach((function (e, r) {
                            var o, i = t[r],
                                a = i.textAlign,
                                s = i.elWidth,
                                l = i.parentBound,
                                u = l.right - l.left;
                            we(e, {
                                left: o = "center" === a && u > n ? (n - s) / 2 : "",
                                right: o,
                                top: 0
                            })
                        }))
                    }(t, r, o)
                }, this.usingRelative = ! function () {
                    var e = document.createElement("div");
                    e.className = "fc-sticky", document.body.appendChild(e);
                    var t = window.getComputedStyle(e).position;
                    if (Se(e), -1 !== t.indexOf("sticky")) return t;
                    return null
                }() || ku && t, this.usingRelative && (this.listener = new wu(e), this.listener.emitter.on("scrollEnd", this.updateSize))
            }
            return e.prototype.destroy = function () {
                this.listener && this.listener.destroy()
            }, e.prototype.queryElGeoms = function (e) {
                for (var t = this.scrollEl, n = this.isRtl, r = function (e) {
                        var t = e.getBoundingClientRect(),
                            n = ho(e);
                        return {
                            left: t.left + n.borderLeft + n.scrollbarLeft - Tu(e),
                            top: t.top + n.borderTop - e.scrollTop
                        }
                    }(t), o = [], i = 0, a = e; i < a.length; i++) {
                    var s = a[i],
                        l = Kr(vo(s.parentNode, !0, !0), -r.left, -r.top),
                        u = s.getBoundingClientRect(),
                        c = window.getComputedStyle(s),
                        d = window.getComputedStyle(s.parentNode).textAlign,
                        p = null;
                    "start" === d ? d = n ? "right" : "left" : "end" === d && (d = n ? "left" : "right"), "sticky" !== c.position && (p = Kr(u, -r.left - (parseFloat(c.left) || 0), -r.top - (parseFloat(c.top) || 0))), o.push({
                        parentBound: l,
                        naturalBound: p,
                        elWidth: u.width,
                        elHeight: u.height,
                        textAlign: d
                    })
                }
                return o
            }, e.prototype.computeElDestinations = function (e, t) {
                var n = this.scrollEl,
                    r = n.scrollTop,
                    o = Tu(n),
                    i = o + t;
                return e.map((function (e) {
                    var t, n, a = e.elWidth,
                        s = e.elHeight,
                        l = e.parentBound,
                        u = e.naturalBound;
                    switch (e.textAlign) {
                        case "left":
                            t = o;
                            break;
                        case "right":
                            t = i - a;
                            break;
                        case "center":
                            t = (o + i) / 2 - a / 2
                    }
                    return t = Math.min(t, l.right - a), t = Math.max(t, l.left), n = r, n = Math.min(n, l.bottom - s), {
                        left: t,
                        top: n = Math.max(n, u.top)
                    }
                }))
            }, e
        }();
    var Pu = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.elRef = xo(), t.state = {
                    xScrollbarWidth: 0,
                    yScrollbarWidth: 0
                }, t.handleScroller = function (e) {
                    t.scroller = e, zo(t.props.scrollerRef, e)
                }, t.handleSizing = function () {
                    var e = t.props;
                    "scroll-hidden" === e.overflowY && t.setState({
                        yScrollbarWidth: t.scroller.getYScrollbarWidth()
                    }), "scroll-hidden" === e.overflowX && t.setState({
                        xScrollbarWidth: t.scroller.getXScrollbarWidth()
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = e.props,
                    n = e.state,
                    r = e.context.isRtl && co(),
                    o = 0,
                    i = 0,
                    a = 0;
                return "scroll-hidden" === t.overflowX && (a = n.xScrollbarWidth), "scroll-hidden" === t.overflowY && null != n.yScrollbarWidth && (r ? o = n.yScrollbarWidth : i = n.yScrollbarWidth), To("div", {
                    ref: this.elRef,
                    className: "fc-scroller-harness" + (t.liquid ? " fc-scroller-harness-liquid" : "")
                }, To(La, {
                    ref: this.handleScroller,
                    elRef: this.props.scrollerElRef,
                    overflowX: "scroll-hidden" === t.overflowX ? "scroll" : t.overflowX,
                    overflowY: "scroll-hidden" === t.overflowY ? "scroll" : t.overflowY,
                    overcomeLeft: o,
                    overcomeRight: i,
                    overcomeBottom: a,
                    maxHeight: "number" == typeof t.maxHeight ? t.maxHeight + ("scroll-hidden" === t.overflowX ? n.xScrollbarWidth : 0) : "",
                    liquid: t.liquid,
                    liquidIsAbsolute: !0
                }, t.children))
            }, t.prototype.componentDidMount = function () {
                this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
            }, t.prototype.componentDidUpdate = function (e) {
                Et(e, this.props) || this.handleSizing()
            }, t.prototype.componentWillUnmount = function () {
                this.context.removeResizeHandler(this.handleSizing)
            }, t.prototype.needsXScrolling = function () {
                return this.scroller.needsXScrolling()
            }, t.prototype.needsYScrolling = function () {
                return this.scroller.needsYScrolling()
            }, t
        }(Lo),
        Iu = function () {
            function e(e, t) {
                var n = this;
                this.isVertical = e, this.scrollEls = t, this.isPaused = !1, this.scrollListeners = t.map((function (e) {
                    return n.bindScroller(e)
                }))
            }
            return e.prototype.destroy = function () {
                for (var e = 0, t = this.scrollListeners; e < t.length; e++) {
                    t[e].destroy()
                }
            }, e.prototype.bindScroller = function (e) {
                var t = this,
                    n = this.scrollEls,
                    r = this.isVertical,
                    o = new wu(e);
                return o.emitter.on("scroll", (function (o, i) {
                    if (!t.isPaused && ((!t.masterEl || t.masterEl !== e && (o || i)) && t.assignMaster(e), t.masterEl === e))
                        for (var a = 0, s = n; a < s.length; a++) {
                            var l = s[a];
                            l !== e && (r ? l.scrollTop = e.scrollTop : l.scrollLeft = e.scrollLeft)
                        }
                })), o.emitter.on("scrollEnd", (function () {
                    t.masterEl === e && (t.masterEl = null)
                })), o
            }, e.prototype.assignMaster = function (e) {
                this.masterEl = e;
                for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                    var r = n[t];
                    r.el !== e && r.endScroll()
                }
            }, e.prototype.forceScrollLeft = function (e) {
                this.isPaused = !0;
                for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                    _u(n[t].el, e)
                }
                this.isPaused = !1
            }, e.prototype.forceScrollTop = function (e) {
                this.isPaused = !0;
                for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                    n[t].el.scrollTop = e
                }
                this.isPaused = !1
            }, e
        }(),
        Nu = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.compileColGroupStats = Zt(Wu, Bu), t.renderMicroColGroups = Zt(ja), t.clippedScrollerRefs = new Ua, t.scrollerElRefs = new Ua(t._handleScrollerEl.bind(t)), t.chunkElRefs = new Ua(t._handleChunkEl.bind(t)), t.getStickyScrolling = Zt(Fu, null, Gu), t.getScrollSyncersBySection = Xt(zu.bind(t, !0), null, Vu), t.getScrollSyncersByColumn = Xt(zu.bind(t, !1), null, Vu), t.stickyScrollings = [], t.scrollSyncersBySection = {}, t.scrollSyncersByColumn = {}, t.rowUnstableMap = new Map, t.rowInnerMaxHeightMap = new Map, t.anyRowHeightsChanged = !1, t.recentSizingCnt = 0, t.state = {
                    shrinkWidths: [],
                    forceYScrollbars: !1,
                    forceXScrollbars: !1,
                    scrollerClientWidths: {},
                    scrollerClientHeights: {},
                    sectionRowMaxHeights: []
                }, t.handleSizing = function (e, n) {
                    if (t.allowSizing()) {
                        n || (t.anyRowHeightsChanged = !0);
                        var o = {};
                        (e || !n && !t.rowUnstableMap.size) && (o.sectionRowMaxHeights = t.computeSectionRowMaxHeights()), t.setState(r(r({
                            shrinkWidths: t.computeShrinkWidths()
                        }, t.computeScrollerDims()), o), (function () {
                            t.rowUnstableMap.size || t.updateStickyScrolling()
                        }))
                    }
                }, t.handleRowHeightChange = function (e, n) {
                    var r = t,
                        o = r.rowUnstableMap,
                        i = r.rowInnerMaxHeightMap;
                    if (n) {
                        o.delete(e);
                        var a = Ou(e);
                        i.has(e) && i.get(e) === a || (i.set(e, a), t.anyRowHeightsChanged = !0), !o.size && t.anyRowHeightsChanged && (t.anyRowHeightsChanged = !1, t.setState({
                            sectionRowMaxHeights: t.computeSectionRowMaxHeights()
                        }))
                    } else o.set(e, !0)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = e.props,
                    n = e.state,
                    r = e.context,
                    i = n.shrinkWidths,
                    a = this.compileColGroupStats(t.colGroups.map((function (e) {
                        return [e]
                    }))),
                    s = this.renderMicroColGroups(a.map((function (e, t) {
                        return [e.cols, i[t]]
                    }))),
                    l = Za(t.liquid, r),
                    u = this.getDims();
                u[0], u[1];
                for (var c, d = t.sections, p = d.length, f = 0, h = [], v = [], g = []; f < p && "header" === (c = d[f]).type;) h.push(this.renderSection(c, f, a, s, n.sectionRowMaxHeights)), f += 1;
                for (; f < p && "body" === (c = d[f]).type;) v.push(this.renderSection(c, f, a, s, n.sectionRowMaxHeights)), f += 1;
                for (; f < p && "footer" === (c = d[f]).type;) g.push(this.renderSection(c, f, a, s, n.sectionRowMaxHeights)), f += 1;
                var m = !eo();
                return To("table", {
                    ref: t.elRef,
                    className: l.join(" ")
                }, function (e, t) {
                    var n = e.map((function (e, n) {
                        var r = e.width;
                        return "shrink" === r && (r = e.totalColWidth + qa(t[n]) + 1), To("col", {
                            style: {
                                width: r
                            }
                        })
                    }));
                    return To.apply(void 0, o(["colgroup", {}], n))
                }(a, i), Boolean(!m && h.length) && To.apply(void 0, o(["thead", {}], h)), Boolean(!m && v.length) && To.apply(void 0, o(["tbody", {}], v)), Boolean(!m && g.length) && To.apply(void 0, o(["tfoot", {}], g)), m && To.apply(void 0, o(o(o(["tbody", {}], h), v), g)))
            }, t.prototype.renderSection = function (e, t, n, r, o) {
                var i = this;
                return "outerContent" in e ? To(ko, {
                    key: e.key
                }, e.outerContent) : To("tr", {
                    key: e.key,
                    className: Xa(e, this.props.liquid).join(" ")
                }, e.chunks.map((function (a, s) {
                    return i.renderChunk(e, t, n[s], r[s], a, s, (o[t] || [])[s] || [])
                })))
            }, t.prototype.renderChunk = function (e, t, n, r, o, i, a) {
                if ("outerContent" in o) return To(ko, {
                    key: o.key
                }, o.outerContent);
                var s = this.state,
                    l = s.scrollerClientWidths,
                    u = s.scrollerClientHeights,
                    c = this.getDims(),
                    d = c[0],
                    p = c[1],
                    f = t * p + i,
                    h = i === (!this.context.isRtl || co() ? p - 1 : 0),
                    v = t === d - 1,
                    g = v && s.forceXScrollbars,
                    m = h && s.forceYScrollbars,
                    y = n && n.allowXScrolling,
                    S = Va(this.props, e),
                    E = za(this.props, e),
                    b = e.expandRows && E,
                    C = Fa(e, o, {
                        tableColGroupNode: r,
                        tableMinWidth: n && n.totalColMinWidth || "",
                        clientWidth: void 0 !== l[f] ? l[f] : null,
                        clientHeight: void 0 !== u[f] ? u[f] : null,
                        expandRows: b,
                        syncRowHeights: Boolean(e.syncRowHeights),
                        rowSyncHeights: a,
                        reportRowHeightChange: this.handleRowHeightChange
                    }),
                    D = g ? v ? "scroll" : "scroll-hidden" : y ? v ? "auto" : "scroll-hidden" : "hidden",
                    R = m ? h ? "scroll" : "scroll-hidden" : S ? h ? "auto" : "scroll-hidden" : "hidden";
                return C = To(Pu, {
                    ref: this.clippedScrollerRefs.createRef(f),
                    scrollerElRef: this.scrollerElRefs.createRef(f),
                    overflowX: D,
                    overflowY: R,
                    liquid: E,
                    maxHeight: e.maxHeight
                }, C), To("td", {
                    key: o.key,
                    ref: this.chunkElRefs.createRef(f)
                }, C)
            }, t.prototype.componentDidMount = function () {
                this.updateScrollSyncers(), this.handleSizing(!1), this.context.addResizeHandler(this.handleSizing)
            }, t.prototype.componentDidUpdate = function (e, t) {
                this.updateScrollSyncers(), this.handleSizing(!1, t.sectionRowMaxHeights !== this.state.sectionRowMaxHeights)
            }, t.prototype.componentWillUnmount = function () {
                this.context.removeResizeHandler(this.handleSizing), this.destroyStickyScrolling(), this.destroyScrollSyncers()
            }, t.prototype.allowSizing = function () {
                var e = new Date;
                return !this.lastSizingDate || e.valueOf() > this.lastSizingDate.valueOf() + oa.SCROLLGRID_RESIZE_INTERVAL ? (this.lastSizingDate = e, this.recentSizingCnt = 0, !0) : (this.recentSizingCnt += 1) <= 10
            }, t.prototype.computeShrinkWidths = function () {
                var e = this,
                    t = this.compileColGroupStats(this.props.colGroups.map((function (e) {
                        return [e]
                    }))),
                    n = this.getDims(),
                    r = n[0],
                    o = n[1],
                    i = r * o,
                    a = [];
                return t.forEach((function (t, n) {
                    if (t.hasShrinkCol) {
                        var r = e.chunkElRefs.collect(n, i, o);
                        a[n] = Ba(r)
                    }
                })), a
            }, t.prototype.computeSectionRowMaxHeights = function () {
                for (var e = new Map, t = this.getDims(), n = t[0], r = t[1], o = [], i = 0; i < n; i += 1) {
                    var a = this.props.sections[i],
                        s = [];
                    if (a && a.syncRowHeights) {
                        for (var l = [], u = 0; u < r; u += 1) {
                            var c = i * r + u,
                                d = [],
                                p = this.chunkElRefs.currentMap[c];
                            d = p ? Ce(p, ".fc-scrollgrid-sync-table tr").map((function (t) {
                                var n = Ou(t);
                                return e.set(t, n), n
                            })) : [], l.push(d)
                        }
                        var f = l[0].length,
                            h = !0;
                        for (u = 1; u < r; u += 1) {
                            if (!(a.chunks[u] && void 0 !== a.chunks[u].outerContent) && l[u].length !== f) {
                                h = !1;
                                break
                            }
                        }
                        if (h) {
                            for (u = 0; u < r; u += 1) s.push([]);
                            for (E = 0; E < f; E += 1) {
                                var v = [];
                                for (u = 0; u < r; u += 1) {
                                    var g = l[u][E];
                                    null != g && v.push(g)
                                }
                                var m = Math.max.apply(Math, v);
                                for (u = 0; u < r; u += 1) s[u].push(m)
                            }
                        } else {
                            for (var y = [], u = 0; u < r; u += 1) y.push(Hu(l[u]) + l[u].length);
                            for (var S = Math.max.apply(Math, y), u = 0; u < r; u += 1) {
                                var E, b = l[u].length,
                                    C = S - b,
                                    D = Math.floor(C / b),
                                    R = C - D * (b - 1),
                                    w = [];
                                for ((E = 0) < b && (w.push(R), E += 1); E < b;) w.push(D), E += 1;
                                s.push(w)
                            }
                        }
                    }
                    o.push(s)
                }
                return this.rowInnerMaxHeightMap = e, o
            }, t.prototype.computeScrollerDims = function () {
                for (var e = po(), t = this.getDims(), n = t[0], r = t[1], o = !this.context.isRtl || co() ? r - 1 : 0, i = n - 1, a = this.clippedScrollerRefs.currentMap, s = this.scrollerElRefs.currentMap, l = !1, u = !1, c = {}, d = {}, p = 0; p < n; p += 1) {
                    if ((h = a[v = p * r + o]) && h.needsYScrolling()) {
                        l = !0;
                        break
                    }
                }
                for (var f = 0; f < r; f += 1) {
                    var h;
                    if ((h = a[v = i * r + f]) && h.needsXScrolling()) {
                        u = !0;
                        break
                    }
                }
                for (p = 0; p < n; p += 1)
                    for (f = 0; f < r; f += 1) {
                        var v, g = s[v = p * r + f];
                        if (g) {
                            var m = g.parentNode;
                            c[v] = Math.floor(m.getBoundingClientRect().width - (f === o && l ? e.y : 0)), d[v] = Math.floor(m.getBoundingClientRect().height - (p === i && u ? e.x : 0))
                        }
                    }
                return {
                    forceYScrollbars: l,
                    forceXScrollbars: u,
                    scrollerClientWidths: c,
                    scrollerClientHeights: d
                }
            }, t.prototype.updateStickyScrolling = function () {
                var e = this.context.isRtl,
                    t = this.scrollerElRefs.getAll().map((function (t) {
                        return [t, e]
                    })),
                    n = this.getStickyScrolling(t);
                n.forEach((function (e) {
                    return e.updateSize()
                })), this.stickyScrollings = n
            }, t.prototype.destroyStickyScrolling = function () {
                this.stickyScrollings.forEach(Gu)
            }, t.prototype.updateScrollSyncers = function () {
                for (var e = this.getDims(), t = e[0], n = e[1], r = t * n, o = {}, i = {}, a = this.scrollerElRefs.currentMap, s = 0; s < t; s += 1) {
                    var l = s * n,
                        u = l + n;
                    o[s] = Rt(a, l, u, 1)
                }
                for (var c = 0; c < n; c += 1) i[c] = this.scrollerElRefs.collect(c, r, n);
                this.scrollSyncersBySection = this.getScrollSyncersBySection(o), this.scrollSyncersByColumn = this.getScrollSyncersByColumn(i)
            }, t.prototype.destroyScrollSyncers = function () {
                mt(this.scrollSyncersBySection, Vu), mt(this.scrollSyncersByColumn, Vu)
            }, t.prototype.getChunkConfigByIndex = function (e) {
                var t = this.getDims()[1],
                    n = Math.floor(e / t),
                    r = e % t,
                    o = this.props.sections[n];
                return o && o.chunks[r]
            }, t.prototype.forceScrollLeft = function (e, t) {
                var n = this.scrollSyncersByColumn[e];
                n && n.forceScrollLeft(t)
            }, t.prototype.forceScrollTop = function (e, t) {
                var n = this.scrollSyncersBySection[e];
                n && n.forceScrollTop(t)
            }, t.prototype._handleChunkEl = function (e, t) {
                var n = this.getChunkConfigByIndex(parseInt(t, 10));
                n && zo(n.elRef, e)
            }, t.prototype._handleScrollerEl = function (e, t) {
                var n = this.getChunkConfigByIndex(parseInt(t, 10));
                n && zo(n.scrollerElRef, e)
            }, t.prototype.getDims = function () {
                var e = this.props.sections.length;
                return [e, e ? this.props.sections[0].chunks.length : 0]
            }, t
        }(Lo);

    function Hu(e) {
        for (var t = 0, n = 0, r = e; n < r.length; n++) {
            t += r[n]
        }
        return t
    }

    function Ou(e) {
        var t = Ce(e, ".fc-scrollgrid-sync-inner").map(Au);
        return t.length ? Math.max.apply(Math, t) : 0
    }

    function Au(e) {
        return e.offsetHeight
    }

    function Wu(e) {
        var t = Lu(e.cols, "width"),
            n = Lu(e.cols, "minWidth"),
            r = Ya(e.cols);
        return {
            hasShrinkCol: r,
            totalColWidth: t,
            totalColMinWidth: n,
            allowXScrolling: "shrink" !== e.width && Boolean(t || n || r),
            cols: e.cols,
            width: e.width
        }
    }

    function Lu(e, t) {
        for (var n = 0, r = 0, o = e; r < o.length; r++) {
            var i = o[r],
                a = i[t];
            "number" == typeof a && (n += a * (i.span || 1))
        }
        return n
    }
    Nu.addStateEquality({
        shrinkWidths: jt,
        scrollerClientWidths: Et,
        scrollerClientHeights: Et
    });
    var Uu = {
        cols: Ga
    };

    function Bu(e, t) {
        return Ct(e, t, Uu)
    }

    function zu(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return new Iu(e, t)
    }

    function Vu(e) {
        e.destroy()
    }

    function Fu(e, t) {
        return new Mu(e, t)
    }

    function Gu(e) {
        e.destroy()
    }
    var ju = Fo({
        deps: [Du],
        scrollGridImpl: Nu
    });
    oa.SCROLLGRID_RESIZE_INTERVAL = 500, oa.COLLAPSIBLE_WIDTH_THRESHOLD = 1200;
    var qu = [],
        Yu = [],
        Zu = Fo({
            deps: [Du],
            contextInit: function (e) {
                qu.length || (window.addEventListener("beforeprint", Xu), window.addEventListener("afterprint", Ku)), qu.push(e), e.calendarApi.on("_unmount", (function () {
                    Gt(qu, e), qu.length || (window.removeEventListener("beforeprint", Xu), window.removeEventListener("afterprint", Ku))
                }))
            }
        });

    function Xu() {
        for (var e = Ce(document.body, ".fc-scroller-harness > .fc-scroller"), t = e.map((function (e) {
                var t = window.getComputedStyle(e);
                return {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop,
                    overflowX: t.overflowX,
                    overflowY: t.overflowY,
                    marginBottom: t.marginBottom
                }
            })), n = 0, r = qu; n < r.length; n++) {
            r[n].emitter.trigger("_beforeprint")
        }
        Io(),
            function (e, t) {
                e.forEach((function (e, n) {
                    e.style.overflowX = "visible", e.style.overflowY = "visible", e.style.marginBottom = "", e.style.left = -t[n].scrollLeft + "px"
                }))
            }(e, t), Yu.push((function () {
                return function (e, t) {
                    e.forEach((function (e, n) {
                        var r = t[n];
                        e.style.overflowX = r.overflowX, e.style.overflowY = r.overflowY, e.style.marginBottom = r.marginBottom, e.style.left = "", e.scrollLeft = r.scrollLeft, e.scrollTop = r.scrollTop
                    }))
                }(e, t)
            })), Yu.push(function () {
                var e = Ce(document.body, ".fc-scrollgrid");
                return e.forEach($u),
                    function () {
                        return e.forEach(Ju)
                    }
            }())
    }

    function Ku() {
        for (var e = 0, t = qu; e < t.length; e++) {
            t[e].emitter.trigger("_afterprint")
        }
        for (Io(); Yu.length;) Yu.shift()()
    }

    function $u(e) {
        var t = e.getBoundingClientRect().width;
        (!e.classList.contains("fc-scrollgrid-collapsible") || t < oa.COLLAPSIBLE_WIDTH_THRESHOLD) && (e.style.width = t + "px")
    }

    function Ju(e) {
        e.style.width = ""
    }
    oa.MAX_TIMELINE_SLOTS = 1e3;
    var Qu = [{
        years: 1
    }, {
        months: 1
    }, {
        days: 1
    }, {
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        minutes: 10
    }, {
        minutes: 5
    }, {
        minutes: 1
    }, {
        seconds: 30
    }, {
        seconds: 15
    }, {
        seconds: 10
    }, {
        seconds: 5
    }, {
        seconds: 1
    }, {
        milliseconds: 500
    }, {
        milliseconds: 100
    }, {
        milliseconds: 10
    }, {
        milliseconds: 1
    }];

    function ec(e, t, n, r) {
        var o = {
            labelInterval: n.slotLabelInterval,
            slotDuration: n.slotDuration
        };
        ! function (e, t, n) {
            var r = t.currentRange;
            if (e.labelInterval) {
                n.countDurationsBetween(r.start, r.end, e.labelInterval) > oa.MAX_TIMELINE_SLOTS && (console.warn("slotLabelInterval results in too many cells"), e.labelInterval = null)
            }
            if (e.slotDuration) {
                n.countDurationsBetween(r.start, r.end, e.slotDuration) > oa.MAX_TIMELINE_SLOTS && (console.warn("slotDuration results in too many cells"), e.slotDuration = null)
            }
            if (e.labelInterval && e.slotDuration) {
                var o = Lt(e.labelInterval, e.slotDuration);
                (null === o || o < 1) && (console.warn("slotLabelInterval must be a multiple of slotDuration"), e.slotDuration = null)
            }
        }(o, e, t), rc(o, e, t),
            function (e, t, n) {
                var r = t.currentRange,
                    o = e.slotDuration;
                if (!o) {
                    for (var i = rc(e, t, n), a = 0, s = Qu; a < s.length; a++) {
                        var l = kt(s[a]),
                            u = Lt(i, l);
                        if (null !== u && u > 1 && u <= 6) {
                            o = l;
                            break
                        }
                    }
                    if (o) n.countDurationsBetween(r.start, r.end, o) > 200 && (o = null);
                    o || (o = i), e.slotDuration = o
                }
            }(o, e, t);
        var i = n.slotLabelFormat,
            a = Array.isArray(i) ? i : null != i ? [i] : function (e, t, n, r) {
                var o, i, a = e.labelInterval,
                    s = Ut(a).unit,
                    l = r.weekNumbers,
                    u = o = i = null;
                "week" !== s || l || (s = "day");
                switch (s) {
                    case "year":
                        u = {
                            year: "numeric"
                        };
                        break;
                    case "month":
                        oc("years", t, n) > 1 && (u = {
                            year: "numeric"
                        }), o = {
                            month: "short"
                        };
                        break;
                    case "week":
                        oc("years", t, n) > 1 && (u = {
                            year: "numeric"
                        }), o = {
                            week: "narrow"
                        };
                        break;
                    case "day":
                        oc("years", t, n) > 1 ? u = {
                            year: "numeric",
                            month: "long"
                        } : oc("months", t, n) > 1 && (u = {
                            month: "long"
                        }), l && (o = {
                            week: "short"
                        }), i = {
                            weekday: "narrow",
                            day: "numeric"
                        };
                        break;
                    case "hour":
                        l && (u = {
                            week: "short"
                        }), oc("days", t, n) > 1 && (o = {
                            weekday: "short",
                            day: "numeric",
                            month: "numeric",
                            omitCommas: !0
                        }), i = {
                            hour: "numeric",
                            minute: "2-digit",
                            omitZeroMinute: !0,
                            meridiem: "short"
                        };
                        break;
                    case "minute":
                        Ot(a) / 60 >= 6 ? (u = {
                            hour: "numeric",
                            meridiem: "short"
                        }, o = function (e) {
                            return ":" + je(e.date.minute, 2)
                        }) : u = {
                            hour: "numeric",
                            minute: "numeric",
                            meridiem: "short"
                        };
                        break;
                    case "second":
                        At(a) / 60 >= 6 ? (u = {
                            hour: "numeric",
                            minute: "2-digit",
                            meridiem: "lowercase"
                        }, o = function (e) {
                            return ":" + je(e.date.second, 2)
                        }) : u = {
                            hour: "numeric",
                            minute: "2-digit",
                            second: "2-digit",
                            meridiem: "lowercase"
                        };
                        break;
                    case "millisecond":
                        u = {
                            hour: "numeric",
                            minute: "2-digit",
                            second: "2-digit",
                            meridiem: "lowercase"
                        }, o = function (e) {
                            return "." + je(e.millisecond, 3)
                        }
                }
                return [].concat(u || [], o || [], i || [])
            }(o, e, t, n);
        o.headerFormats = a.map((function (e) {
            return cn(e)
        })), o.isTimeScale = Boolean(o.slotDuration.milliseconds);
        var s = null;
        if (!o.isTimeScale) {
            var l = Ut(o.slotDuration).unit;
            /year|month|week/.test(l) && (s = l)
        }
        o.largeUnit = s, o.emphasizeWeeks = 1 === Pt(o.slotDuration) && oc("weeks", e, t) >= 2 && !n.businessHours;
        var u, c, d = n.snapDuration;
        d && (u = kt(d), c = Lt(o.slotDuration, u)), null == c && (u = o.slotDuration, c = 1), o.snapDuration = u, o.snapsPerSlot = c;
        var p = Wt(e.slotMaxTime) - Wt(e.slotMinTime),
            f = tc(e.renderRange.start, o, t),
            h = tc(e.renderRange.end, o, t);
        o.isTimeScale && (f = t.add(f, e.slotMinTime), h = t.add($e(h, -1), e.slotMaxTime)), o.timeWindowMs = p, o.normalizedRange = {
            start: f,
            end: h
        };
        for (var v = [], g = f; g < h;) nc(g, o, e, r) && v.push(g), g = t.add(g, o.slotDuration);
        o.slotDates = v;
        var m = -1,
            y = 0,
            S = [],
            E = [];
        for (g = f; g < h;) nc(g, o, e, r) ? (m += 1, S.push(m), E.push(y)) : S.push(m + .5), g = t.add(g, o.snapDuration), y += 1;
        return o.snapDiffToIndex = S, o.snapIndexToDiff = E, o.snapCnt = m + 1, o.slotCnt = o.snapCnt / o.snapsPerSlot, o.isWeekStarts = function (e, t) {
            for (var n = e.slotDates, r = e.emphasizeWeeks, o = null, i = [], a = 0, s = n; a < s.length; a++) {
                var l = s[a],
                    u = t.computeWeekNumber(l),
                    c = r && null !== o && o !== u;
                o = u, i.push(c)
            }
            return i
        }(o, t), o.cellRows = function (e, t) {
            for (var n = e.slotDates, r = e.headerFormats, o = r.map((function () {
                    return []
                })), i = Pt(e.slotDuration), a = 7 === i ? "week" : 1 === i ? "day" : null, s = r.map((function (e) {
                    return e.getLargestUnit ? e.getLargestUnit() : null
                })), l = 0; l < n.length; l += 1)
                for (var u = n[l], c = e.isWeekStarts[l], d = 0; d < r.length; d += 1) {
                    var p = r[d],
                        f = o[d],
                        h = f[f.length - 1],
                        v = d === r.length - 1,
                        g = r.length > 1 && !v,
                        m = null,
                        y = s[d] || (v ? a : null);
                    if (g) {
                        var S = t.format(u, p);
                        h && h.text === S ? h.colspan += 1 : m = ic(u, S, y)
                    } else if (!h || Ye(t.countDurationsBetween(e.normalizedRange.start, u, e.labelInterval))) {
                        m = ic(u, S = t.format(u, p), y)
                    } else h.colspan += 1;
                    m && (m.weekStart = c, f.push(m))
                }
            return o
        }(o, t), o.slotsPerLabel = Lt(o.labelInterval, o.slotDuration), o
    }

    function tc(e, t, n) {
        var r = e;
        return t.isTimeScale || (r = ot(r), t.largeUnit && (r = n.startOf(r, t.largeUnit))), r
    }

    function nc(e, t, n, r) {
        if (r.isHiddenDay(e)) return !1;
        if (t.isTimeScale) {
            var o = ot(e),
                i = e.valueOf() - o.valueOf() - Wt(n.slotMinTime);
            return (i = (i % 864e5 + 864e5) % 864e5) < t.timeWindowMs
        }
        return !0
    }

    function rc(e, t, n) {
        var r = t.currentRange,
            o = e.labelInterval;
        if (!o) {
            if (e.slotDuration) {
                for (var i = 0, a = Qu; i < a.length; i++) {
                    var s = kt(a[i]),
                        l = Lt(s, e.slotDuration);
                    if (null !== l && l <= 6) {
                        o = s;
                        break
                    }
                }
                o || (o = e.slotDuration)
            } else
                for (var u = 0, c = Qu; u < c.length; u++) {
                    if (o = kt(c[u]), n.countDurationsBetween(r.start, r.end, o) >= 18) break
                }
            e.labelInterval = o
        }
        return o
    }

    function oc(e, t, n) {
        var r = t.currentRange,
            o = null;
        return "years" === e ? o = n.diffWholeYears(r.start, r.end) : "months" === e || "weeks" === e ? o = n.diffWholeMonths(r.start, r.end) : "days" === e && (o = rt(r.start, r.end)), o || 0
    }

    function ic(e, t, n) {
        return {
            date: e,
            text: t,
            rowUnit: n,
            colspan: 1,
            isWeekStart: !1
        }
    }
    var ac = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = this.context,
                n = e.navLinkData ? {
                    "data-navlink": e.navLinkData,
                    tabIndex: 0
                } : {};
            return To(Xo, {
                hookProps: e.hookProps,
                content: t.options.slotLabelContent,
                defaultContent: sc
            }, (function (t, o) {
                return To("a", r({
                    ref: t,
                    className: "fc-timeline-slot-cushion fc-scrollgrid-sync-inner" + (e.isSticky ? " fc-sticky" : "")
                }, n), o)
            }))
        }, t
    }(Lo);

    function sc(e) {
        // console.log(e.text);
        return e.text
    }

    function lc(e) {
        return {
            level: e.level,
            date: e.dateEnv.toDate(e.dateMarker),
            view: e.viewApi,
            text: e.text
        }
    }
    var uc = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refineHookProps = Yt(lc), t.normalizeClassNames = Jo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    r = t.options,
                    o = e.cell,
                    i = e.dateProfile,
                    a = e.tDateProfile,
                    s = oo(o.date, e.todayRange, e.nowDate, i),
                    l = ["fc-timeline-slot", "fc-timeline-slot-label"].concat("time" === o.rowUnit ? ao(s, t.theme) : io(s, t.theme));
                o.isWeekStart && l.push("fc-timeline-slot-em");
                var u = r.navLinks && o.rowUnit && "time" !== o.rowUnit ? so(o.date, o.rowUnit) : null,
                    c = this.refineHookProps({
                        level: e.rowLevel,
                        dateMarker: o.date,
                        text: o.text,
                        dateEnv: t.dateEnv,
                        viewApi: t.viewApi
                    }),
                    d = this.normalizeClassNames(r.slotLabelClassNames, c);
                return To($o, {
                    hookProps: c,
                    didMount: r.slotLabelDidMount,
                    willUnmount: r.slotLabelWillUnmount
                }, (function (t) {
                    return To("th", {
                        ref: t,
                        className: l.concat(d).join(" "),
                        "data-date": n.formatIso(o.date, {
                            omitTime: !a.isTimeScale,
                            omitTimeZoneOffset: !0
                        }),
                        colSpan: o.colspan
                    }, To("div", {
                        className: "fc-timeline-slot-frame",
                        style: {
                            height: e.rowInnerHeight
                        }
                    }, To(ac, {
                        hookProps: c,
                        isSticky: e.isSticky,
                        navLinkData: u
                    })))
                }))
            }, t
        }(Lo),
        cc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = e.dateProfile,
                    n = e.tDateProfile,
                    r = e.rowInnerHeights,
                    o = e.todayRange,
                    i = e.nowDate,
                    a = n.cellRows;
                return To(ko, null, a.map((function (e, s) {
                    var l = s === a.length - 1,
                        u = n.isTimeScale && l;
                    return To("tr", {
                        key: s,
                        className: ["fc-timeline-header-row", u ? "fc-timeline-header-row-chrono" : ""].join(" ")
                    }, e.map((function (e) {
                        return To(uc, {
                            key: e.date.toISOString(),
                            cell: e,
                            rowLevel: s,
                            dateProfile: t,
                            tDateProfile: n,
                            todayRange: o,
                            nowDate: i,
                            rowInnerHeight: r && r[s],
                            isSticky: !l
                        })
                    })))
                })))
            }, t
        }(Lo),
        dc = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = Ut(t.tDateProfile.slotDuration).unit,
                    o = t.slatCoords && t.slatCoords.dateProfile === t.dateProfile ? t.slatCoords : null;
                return To(ba, {
                    unit: r
                }, (function (r, i) {
                    return To("div", {
                        className: "fc-timeline-header",
                        ref: e.rootElRef
                    }, To("table", {
                        className: "fc-scrollgrid-sync-table",
                        style: {
                            minWidth: t.tableMinWidth,
                            width: t.clientWidth
                        }
                    }, t.tableColGroupNode, To("tbody", null, To(cc, {
                        dateProfile: t.dateProfile,
                        tDateProfile: t.tDateProfile,
                        nowDate: r,
                        todayRange: i,
                        rowInnerHeights: t.rowInnerHeights
                    }))), n.options.nowIndicator && To("div", {
                        className: "fc-timeline-now-indicator-container"
                    }, o && o.isDateInRange(r) && To(rs, {
                        isAxis: !0,
                        date: r
                    }, (function (e, t, n, i) {
                        return To("div", {
                            ref: e,
                            className: ["fc-timeline-now-indicator-arrow"].concat(t).join(" "),
                            style: {
                                left: o.dateToCoord(r)
                            }
                        }, i)
                    }))))
                }))
            }, t.prototype.componentDidMount = function () {
                this.updateSize()
            }, t.prototype.componentDidUpdate = function () {
                this.updateSize()
            }, t.prototype.updateSize = function () {
                this.props.onMaxCushionWidth && this.props.onMaxCushionWidth(this.computeMaxCushionWidth())
            }, t.prototype.computeMaxCushionWidth = function () {
                return Math.max.apply(Math, Ce(this.rootElRef.current, ".fc-timeline-header-row:last-child .fc-timeline-slot-cushion").map((function (e) {
                    return e.getBoundingClientRect().width
                })))
            }, t
        }(Lo),
        pc = function () {
            function e(e, t, n, r, o, i) {
                this.slatRootEl = e, this.dateProfile = n, this.tDateProfile = r, this.dateEnv = o, this.isRtl = i, this.outerCoordCache = new Eo(e, t, !0, !1), this.innerCoordCache = new Eo(e, De(t, "div"), !0, !1)
            }
            return e.prototype.rangeToCoords = function (e) {
                return this.isRtl ? {
                    right: this.dateToCoord(e.start),
                    left: this.dateToCoord(e.end)
                } : {
                    left: this.dateToCoord(e.start),
                    right: this.dateToCoord(e.end)
                }
            }, e.prototype.isDateInRange = function (e) {
                return Kn(this.dateProfile.currentRange, e)
            }, e.prototype.dateToCoord = function (e) {
                var t = this.tDateProfile,
                    n = this.computeDateSnapCoverage(e) / t.snapsPerSlot,
                    r = Math.floor(n),
                    o = n - (r = Math.min(r, t.slotCnt - 1)),
                    i = this.innerCoordCache,
                    a = this.outerCoordCache;
                return this.isRtl ? a.rights[r] - i.getWidth(r) * o - a.originClientRect.width : a.lefts[r] + i.getWidth(r) * o
            }, e.prototype.computeDateSnapCoverage = function (e) {
                return fc(e, this.tDateProfile, this.dateEnv)
            }, e.prototype.computeDurationLeft = function (e) {
                var t = this,
                    n = t.dateProfile,
                    r = t.tDateProfile,
                    o = t.dateEnv,
                    i = t.isRtl,
                    a = 0;
                if (n) {
                    var s = o.add(n.activeRange.start, e);
                    r.isTimeScale || (s = ot(s)), a = this.dateToCoord(s), !i && a && (a += 1)
                }
                return a
            }, e
        }();

    function fc(e, t, n) {
        var r = n.countDurationsBetween(t.normalizedRange.start, e, t.snapDuration);
        if (r < 0) return 0;
        if (r >= t.snapDiffToIndex.length) return t.snapCnt;
        var o = Math.floor(r),
            i = t.snapDiffToIndex[o];
        return Ye(i) ? i += r - o : i = Math.ceil(i), i
    }
    var hc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.dateEnv,
                    o = t.options,
                    i = t.theme,
                    a = e.date,
                    s = e.tDateProfile,
                    l = e.isEm,
                    u = oo(e.date, e.todayRange, e.nowDate, e.dateProfile),
                    c = ["fc-timeline-slot", "fc-timeline-slot-lane"],
                    d = {
                        "data-date": n.formatIso(a, {
                            omitTimeZoneOffset: !0,
                            omitTime: !s.isTimeScale
                        })
                    },
                    p = r(r({
                        date: n.toDate(e.date)
                    }, u), {
                        view: t.viewApi
                    });
                return l && c.push("fc-timeline-slot-em"), s.isTimeScale && c.push(Ye(n.countDurationsBetween(s.normalizedRange.start, e.date, s.labelInterval)) ? "fc-timeline-slot-major" : "fc-timeline-slot-minor"), c.push.apply(c, e.isDay ? io(u, i) : ao(u, i)), To(Yo, {
                    hookProps: p,
                    classNames: o.slotLaneClassNames,
                    content: o.slotLaneContent,
                    didMount: o.slotLaneDidMount,
                    willUnmount: o.slotLaneWillUnmount,
                    elRef: e.elRef
                }, (function (e, t, n, o) {
                    return To("td", r({
                        ref: e,
                        className: c.concat(t).join(" ")
                    }, d), To("div", {
                        ref: n
                    }, o))
                }))
            }, t
        }(Lo),
        vc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = e.tDateProfile,
                    n = e.cellElRefs,
                    r = t.slotDates,
                    o = t.isWeekStarts,
                    i = !t.isTimeScale && !t.largeUnit;
                return To("tbody", null, To("tr", null, r.map((function (r, a) {
                    var s = r.toISOString();
                    return To(hc, {
                        key: s,
                        elRef: n.createRef(s),
                        date: r,
                        dateProfile: e.dateProfile,
                        tDateProfile: t,
                        nowDate: e.nowDate,
                        todayRange: e.todayRange,
                        isEm: o[a],
                        isDay: i
                    })
                }))))
            }, t
        }(Lo),
        gc = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = xo(), t.cellElRefs = new Ua, t.handleScrollRequest = function (e) {
                    var n = t.props.onScrollLeftRequest,
                        r = t.coords;
                    if (n && r) {
                        if (e.time) n(r.computeDurationLeft(e.time));
                        return !0
                    }
                    return null
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return To("div", {
                    className: "fc-timeline-slots",
                    ref: this.rootElRef
                }, To("table", {
                    className: t.theme.getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth
                    }
                }, e.tableColGroupNode, To(vc, {
                    cellElRefs: this.cellElRefs,
                    dateProfile: e.dateProfile,
                    tDateProfile: e.tDateProfile,
                    nowDate: e.nowDate,
                    todayRange: e.todayRange
                })))
            }, t.prototype.componentDidMount = function () {
                this.updateSizing(), this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
            }, t.prototype.componentDidUpdate = function (e) {
                this.updateSizing(), this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
            }, t.prototype.componentWillUnmount = function () {
                this.scrollResponder.detach(), this.props.onCoords && this.props.onCoords(null)
            }, t.prototype.updateSizing = function () {
                var e, t = this.props,
                    n = this.context;
                null !== t.clientWidth && this.scrollResponder && (this.rootElRef.current.offsetWidth && (this.coords = new pc(this.rootElRef.current, (e = this.cellElRefs.currentMap, t.tDateProfile.slotDates.map((function (t) {
                    var n = t.toISOString();
                    return e[n]
                }))), t.dateProfile, t.tDateProfile, n.dateEnv, n.isRtl), t.onCoords && t.onCoords(this.coords), this.scrollResponder.update(!1)))
            }, t.prototype.positionToHit = function (e) {
                var t = this.coords.outerCoordCache,
                    n = this.context,
                    r = n.dateEnv,
                    o = n.isRtl,
                    i = this.props.tDateProfile,
                    a = t.leftToIndex(e);
                if (null != a) {
                    var s = t.getWidth(a),
                        l = o ? (t.rights[a] - e) / s : (e - t.lefts[a]) / s,
                        u = Math.floor(l * i.snapsPerSlot),
                        c = r.add(i.slotDates[a], Nt(i.snapDuration, u));
                    return {
                        dateSpan: {
                            range: {
                                start: c,
                                end: r.add(c, i.snapDuration)
                            },
                            allDay: !this.props.tDateProfile.isTimeScale
                        },
                        dayEl: this.cellElRefs.currentMap[a],
                        left: t.lefts[a],
                        right: t.rights[a]
                    }
                }
                return null
            }, t
        }(Lo);
    var mc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = [].concat(e.eventResizeSegs, e.dateSelectionSegs);
                return e.timelineCoords && To("div", {
                    className: "fc-timeline-bg"
                }, this.renderSegs(e.businessHourSegs || [], e.timelineCoords, "non-business"), this.renderSegs(e.bgEventSegs || [], e.timelineCoords, "bg-event"), this.renderSegs(t, e.timelineCoords, "highlight"))
            }, t.prototype.renderSegs = function (e, t, n) {
                var o = this.props,
                    i = o.todayRange,
                    a = o.nowDate,
                    s = e.map((function (e) {
                        var o = t.rangeToCoords(e);
                        return To("div", {
                            key: dr(e.eventRange),
                            className: "fc-timeline-bg-harness",
                            style: {
                                left: o.left,
                                right: -o.right
                            }
                        }, "bg-event" === n ? To(us, r({
                            seg: e
                        }, ur(e, i, a))) : ls(n))
                    }));
                return To(ko, null, s)
            }, t
        }(Lo),
        yc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.sliceRange = function (e, t, n, r, o) {
                var i = function (e, t, n) {
                        if (!t.isTimeScale && (e = zn(e), t.largeUnit)) {
                            var r = e;
                            ((e = {
                                start: n.startOf(e.start, t.largeUnit),
                                end: n.startOf(e.end, t.largeUnit)
                            }).end.valueOf() !== r.end.valueOf() || e.end <= e.start) && (e = {
                                start: e.start,
                                end: n.add(e.end, t.slotDuration)
                            })
                        }
                        return e
                    }(e, r, o),
                    a = [];
                if (fc(i.start, r, o) < fc(i.end, r, o)) {
                    var s = qn(i, r.normalizedRange);
                    s && a.push({
                        start: s.start,
                        end: s.end,
                        isStart: s.start.valueOf() === i.start.valueOf() && nc(s.start, r, t, n),
                        isEnd: s.end.valueOf() === i.end.valueOf() && nc(Je(s.end, -1), r, t, n)
                    })
                }
                return a
            }, t
        }(_a),
        Sc = cn({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "narrow"
        }),
        Ec = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props;
                return To(ts, r({}, e, {
                    extraClassNames: ["fc-timeline-event", "fc-h-event"],
                    defaultTimeFormat: Sc,
                    defaultDisplayEventTime: !e.isTimeScale
                }))
            }, t
        }(Lo),
        bc = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = t.hiddenSegs,
                    o = t.elRef,
                    i = t.placement,
                    a = t.resourceId,
                    s = a ? {
                        resourceId: a
                    } : {};
                return To(vs, {
                    allDayDate: null,
                    moreCnt: n.length,
                    allSegs: n,
                    hiddenSegs: n,
                    alignmentElRef: this.rootElRef,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraDateSpan: s,
                    popoverContent: function () {
                        return To(ko, null, n.map((function (e) {
                            var n = e.eventRange.instance.instanceId;
                            return To("div", {
                                key: n,
                                style: {
                                    visibility: t.isForcedInvisible[n] ? "hidden" : ""
                                }
                            }, To(Ec, r({
                                isTimeScale: t.isTimeScale,
                                seg: e,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: n === t.eventSelection
                            }, ur(e, t.todayRange, t.nowDate))))
                        })))
                    }
                }, (function (t, n, r, a, s) {
                    return To("a", {
                        ref: function (n) {
                            zo(t, n), zo(o, n), zo(e.rootElRef, n)
                        },
                        className: ["fc-timeline-more-link"].concat(n).join(" "),
                        style: {
                            left: i.left,
                            right: -i.right,
                            top: i.top,
                            visibility: i.isVisible ? "" : "hidden"
                        },
                        onClick: s
                    }, To("div", {
                        ref: r,
                        className: "fc-timeline-more-link-inner fc-sticky"
                    }, a))
                }))
            }, t
        }(Lo);

    function Cc(e, t, n, r, o, i, a, s) {
        var l = [],
            u = [];
        if (t)
            for (var c = 0; c < e.length; c += 1) {
                var d = e[c],
                    p = n[d.eventRange.instance.instanceId],
                    f = t.rangeToCoords(d),
                    h = Math.round(f.left),
                    v = Math.round(f.right);
                v - h < o && (i ? h = v - o : v = h + o), null != p ? l.push({
                    index: c,
                    spanStart: h,
                    spanEnd: v,
                    thickness: p
                }) : u.push({
                    seg: d,
                    isVisible: !1,
                    left: h,
                    right: v,
                    top: 0
                })
            }
        var g = new Yi;
        null != a && (g.strictOrder = a), null != s && (g.maxStackCnt = s);
        var m = g.addSegs(l),
            y = m.map((function (t) {
                return {
                    seg: e[t.segInput.index],
                    isVisible: !1,
                    left: t.spanStart,
                    right: t.spanEnd,
                    top: 0
                }
            })),
            S = Ki(m),
            E = [],
            b = [],
            C = function (t) {
                return e[t.segInput.index]
            };
        for (c = 0; c < S.length; c += 1) {
            var D = S[c],
                R = D.entries.map(C);
            null != (p = r[Bt(ys(R))]) ? E.push({
                index: e.length + c,
                spanStart: D.spanStart,
                spanEnd: D.spanEnd,
                thickness: p
            }) : b.push({
                seg: R,
                isVisible: !1,
                left: D.spanStart,
                right: D.spanEnd,
                top: 0
            })
        }
        g.maxStackCnt = -1, g.addSegs(E);
        for (var w = [], T = 0, _ = 0, x = g.toRects(); _ < x.length; _++) {
            var k = x[_],
                M = k.segInput.index;
            w.push({
                seg: M < e.length ? e[M] : S[M - e.length].entries.map(C),
                isVisible: !0,
                left: k.spanStart,
                right: k.spanEnd,
                top: k.levelCoord
            }), T = Math.max(T, k.levelCoord + k.thickness)
        }
        return [w.concat(u, y, b), T]
    }
    var Dc = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.slicer = new yc, t.sortEventSegs = qt(rr), t.computeFgSegPlacements = qt(Cc), t.harnessElRefs = new Ua, t.moreElRefs = new Ua, t.innerElRef = xo(), t.state = {
                eventInstanceHeights: {},
                moreLinkHeights: {}
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = e.props,
                n = e.state,
                r = e.context,
                o = r.options,
                i = t.dateProfile,
                a = t.tDateProfile,
                s = this.slicer.sliceProps(t, i, a.isTimeScale ? null : t.nextDayThreshold, r, i, r.dateProfileGenerator, a, r.dateEnv),
                l = (s.eventDrag ? s.eventDrag.segs : null) || (s.eventResize ? s.eventResize.segs : null) || [],
                u = this.sortEventSegs(s.fgEventSegs, o.eventOrder),
                c = this.computeFgSegPlacements(u, t.timelineCoords, n.eventInstanceHeights, n.moreLinkHeights, o.eventMinWidth, r.isRtl, o.eventOrderStrict, o.eventMaxStack),
                d = c[0],
                p = c[1],
                f = (s.eventDrag ? s.eventDrag.affectedInstances : null) || (s.eventResize ? s.eventResize.affectedInstances : null) || {};
            return To(ko, null, To(mc, {
                businessHourSegs: s.businessHourSegs,
                bgEventSegs: s.bgEventSegs,
                timelineCoords: t.timelineCoords,
                eventResizeSegs: s.eventResize ? s.eventResize.segs : [],
                dateSelectionSegs: s.dateSelectionSegs,
                nowDate: t.nowDate,
                todayRange: t.todayRange
            }), To("div", {
                className: "fc-timeline-events fc-scrollgrid-sync-inner",
                ref: this.innerElRef,
                style: {
                    height: p
                }
            }, this.renderFgSegs(d, f), this.renderFgSegs(function (e, t, n) {
                if (!e.length || !t) return [];
                var r = function (e) {
                    for (var t = {}, n = 0, r = e; n < r.length; n++) {
                        var o = r[n],
                            i = o.seg;
                        Array.isArray(i) || (t[i.eventRange.instance.instanceId] = o.top)
                    }
                    return t
                }(n);
                return e.map((function (e) {
                    var n = t.rangeToCoords(e);
                    return {
                        seg: e,
                        isVisible: !0,
                        left: n.left,
                        right: n.right,
                        top: r[e.eventRange.instance.instanceId]
                    }
                }))
            }(l, t.timelineCoords, d), {}, Boolean(s.eventDrag), Boolean(s.eventResize), !1)))
        }, t.prototype.componentDidMount = function () {
            this.updateSize()
        }, t.prototype.componentDidUpdate = function (e, t) {
            e.eventStore === this.props.eventStore && e.timelineCoords === this.props.timelineCoords && t.moreLinkHeights === this.state.moreLinkHeights || this.updateSize()
        }, t.prototype.updateSize = function () {
            var e = this,
                t = this.props,
                n = t.timelineCoords;
            t.onHeightChange && t.onHeightChange(this.innerElRef.current, !1), n && this.setState({
                eventInstanceHeights: mt(this.harnessElRefs.currentMap, (function (e) {
                    return Math.round(e.getBoundingClientRect().height)
                })),
                moreLinkHeights: mt(this.moreElRefs.currentMap, (function (e) {
                    return Math.round(e.getBoundingClientRect().height)
                }))
            }, (function () {
                t.onHeightChange && t.onHeightChange(e.innerElRef.current, !0)
            }))
        }, t.prototype.renderFgSegs = function (e, t, n, o, i) {
            var a = this,
                s = a.harnessElRefs,
                l = a.moreElRefs,
                u = a.props,
                c = n || o || i;
            return To(ko, null, e.map((function (e) {
                var a = e.seg;
                if (Array.isArray(a)) {
                    var d = Bt(ys(a));
                    return To(bc, {
                        key: "m:" + d,
                        elRef: l.createRef(d),
                        hiddenSegs: a,
                        placement: e,
                        dateProfile: u.dateProfile,
                        nowDate: u.nowDate,
                        todayRange: u.todayRange,
                        isTimeScale: u.tDateProfile.isTimeScale,
                        eventSelection: u.eventSelection,
                        resourceId: u.resourceId,
                        isForcedInvisible: t
                    })
                }
                var p = a.eventRange.instance.instanceId,
                    f = e.isVisible && !t[p];
                return To("div", {
                    key: "e:" + p,
                    ref: c ? null : s.createRef(p),
                    className: "fc-timeline-event-harness",
                    style: {
                        left: e.left,
                        right: -e.right,
                        top: e.top,
                        visibility: f ? "" : "hidden"
                    }
                }, To(Ec, r({
                    isTimeScale: u.tDateProfile.isTimeScale,
                    seg: a,
                    isDragging: n,
                    isResizing: o,
                    isDateSelecting: i,
                    isSelected: p === u.eventSelection
                }, ur(a, u.todayRange, u.nowDate))))
            })))
        }, t
    }(Lo);
    Dc.addStateEquality({
        eventInstanceHeights: Et,
        moreLinkHeights: Et
    });
    var Rc = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.slatsRef = xo(), t.state = {
                    coords: null
                }, t.handeEl = function (e) {
                    e ? t.context.registerInteractiveComponent(t, {
                        el: e
                    }) : t.context.unregisterInteractiveComponent(t)
                }, t.handleCoords = function (e) {
                    t.setState({
                        coords: e
                    }), t.props.onSlatCoords && t.props.onSlatCoords(e)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this,
                    n = t.props,
                    r = t.state,
                    o = t.context.options,
                    i = n.dateProfile,
                    a = n.tDateProfile,
                    s = Ut(a.slotDuration).unit;
                return To("div", {
                    className: "fc-timeline-body",
                    ref: this.handeEl,
                    style: {
                        minWidth: n.tableMinWidth,
                        height: n.clientHeight,
                        width: n.clientWidth
                    }
                }, To(ba, {
                    unit: s
                }, (function (t, s) {
                    return To(ko, null, To(gc, {
                        ref: e.slatsRef,
                        dateProfile: i,
                        tDateProfile: a,
                        nowDate: t,
                        todayRange: s,
                        clientWidth: n.clientWidth,
                        tableColGroupNode: n.tableColGroupNode,
                        tableMinWidth: n.tableMinWidth,
                        onCoords: e.handleCoords,
                        onScrollLeftRequest: n.onScrollLeftRequest
                    }), To(Dc, {
                        dateProfile: i,
                        tDateProfile: n.tDateProfile,
                        nowDate: t,
                        todayRange: s,
                        nextDayThreshold: o.nextDayThreshold,
                        businessHours: n.businessHours,
                        eventStore: n.eventStore,
                        eventUiBases: n.eventUiBases,
                        dateSelection: n.dateSelection,
                        eventSelection: n.eventSelection,
                        eventDrag: n.eventDrag,
                        eventResize: n.eventResize,
                        timelineCoords: r.coords
                    }), o.nowIndicator && r.coords && r.coords.isDateInRange(t) && To("div", {
                        className: "fc-timeline-now-indicator-container"
                    }, To(rs, {
                        isAxis: !1,
                        date: t
                    }, (function (e, n, o, i) {
                        return To("div", {
                            ref: e,
                            className: ["fc-timeline-now-indicator-line"].concat(n).join(" "),
                            style: {
                                left: r.coords.dateToCoord(t)
                            }
                        }, i)
                    }))))
                })))
            }, t.prototype.queryHit = function (e, t, n, r) {
                var o = this.slatsRef.current.positionToHit(e);
                return o ? {
                    dateProfile: this.props.dateProfile,
                    dateSpan: o.dateSpan,
                    rect: {
                        left: o.left,
                        right: o.right,
                        top: 0,
                        bottom: r
                    },
                    dayEl: o.dayEl,
                    layer: 0
                } : null
            }, t
        }(Vo),
        wc = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildTimelineDateProfile = qt(ec), t.scrollGridRef = xo(), t.state = {
                    slatCoords: null,
                    slotCushionMaxWidth: null
                }, t.handleSlatCoords = function (e) {
                    t.setState({
                        slatCoords: e
                    })
                }, t.handleScrollLeftRequest = function (e) {
                    t.scrollGridRef.current.forceScrollLeft(0, e)
                }, t.handleMaxCushionWidth = function (e) {
                    t.setState({
                        slotCushionMaxWidth: Math.ceil(e)
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this,
                    n = t.props,
                    o = t.state,
                    i = t.context,
                    a = i.options,
                    s = !n.forPrint && $a(a),
                    l = !n.forPrint && Ja(a),
                    u = this.buildTimelineDateProfile(n.dateProfile, i.dateEnv, a, i.dateProfileGenerator),
                    c = ["fc-timeline", !1 === a.eventOverlap ? "fc-timeline-overlap-disabled" : ""],
                    d = a.slotMinWidth,
                    p = Tc(u, d || this.computeFallbackSlotMinWidth(u)),
                    f = [{
                        type: "header",
                        key: "header",
                        isSticky: s,
                        chunks: [{
                            key: "timeline",
                            content: function (t) {
                                return To(dc, {
                                    dateProfile: n.dateProfile,
                                    clientWidth: t.clientWidth,
                                    clientHeight: t.clientHeight,
                                    tableMinWidth: t.tableMinWidth,
                                    tableColGroupNode: t.tableColGroupNode,
                                    tDateProfile: u,
                                    slatCoords: o.slatCoords,
                                    onMaxCushionWidth: d ? null : e.handleMaxCushionWidth
                                })
                            }
                        }]
                    }, {
                        type: "body",
                        key: "body",
                        liquid: !0,
                        chunks: [{
                            key: "timeline",
                            content: function (t) {
                                return To(Rc, r({}, n, {
                                    clientWidth: t.clientWidth,
                                    clientHeight: t.clientHeight,
                                    tableMinWidth: t.tableMinWidth,
                                    tableColGroupNode: t.tableColGroupNode,
                                    tDateProfile: u,
                                    onSlatCoords: e.handleSlatCoords,
                                    onScrollLeftRequest: e.handleScrollLeftRequest
                                }))
                            }
                        }]
                    }];
                return l && f.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "timeline",
                        content: Ka
                    }]
                }), To(ti, {
                    viewSpec: i.viewSpec
                }, (function (t, r) {
                    return To("div", {
                        ref: t,
                        className: c.concat(r).join(" ")
                    }, To(Nu, {
                        ref: e.scrollGridRef,
                        liquid: !n.isHeightAuto && !n.forPrint,
                        collapsibleWidth: !1,
                        colGroups: [{
                            cols: p
                        }],
                        sections: f
                    }))
                }))
            }, t.prototype.computeFallbackSlotMinWidth = function (e) {
                return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
            }, t
        }(Vo);

    function Tc(e, t) {
        return [{
            span: e.slotCnt,
            minWidth: t || 1
        }]
    }
    var _c = Fo({
        deps: [Du],
        initialView: "timelineDay",
        views: {
            timeline: {
                component: wc,
                usesMinMaxTime: !0,
                eventResizableFromStart: !0
            },
            timelineDay: {
                type: "timeline",
                duration: {
                    days: 1
                }
            },
            timelineWeek: {
                type: "timeline",
                duration: {
                    weeks: 1
                }
            },
            timelineMonth: {
                type: "timeline",
                duration: {
                    months: 1
                }
            },
            timelineYear: {
                type: "timeline",
                duration: {
                    years: 1
                }
            }
        }
    });

    function xc(e, t) {
        var n = e.resourceEditable;
        if (null == n) {
            var r = e.sourceId && t.getCurrentData().eventSources[e.sourceId];
            r && (n = r.extendedProps.resourceEditable), null == n && null == (n = t.options.eventResourceEditable) && (n = t.options.editable)
        }
        return n
    }
    var kc = function () {
        function e() {
            this.filterResources = qt(Mc)
        }
        return e.prototype.transform = function (e, t) {
            return t.viewSpec.optionDefaults.needsResourceData ? {
                resourceStore: this.filterResources(t.resourceStore, t.options.filterResourcesWithEvents, t.eventStore, t.dateProfile.activeRange),
                resourceEntityExpansions: t.resourceEntityExpansions
            } : null
        }, e
    }();

    function Mc(e, t, n, o) {
        if (t) {
            var i = function (e, t) {
                var n = {};
                for (var r in e)
                    for (var o = 0, i = t[e[r].defId].resourceIds; o < i.length; o++) {
                        n[i[o]] = !0
                    }
                return n
            }(function (e, t) {
                return gt(e, (function (e) {
                    return Zn(e.range, t)
                }))
            }(n.instances, o), n.defs);
            return r(i, function (e, t) {
                var n = {};
                for (var r in e)
                    for (var o = void 0;
                        (o = t[r]) && (r = o.parentId);) n[r] = !0;
                return n
            }(i, e)), gt(e, (function (e, t) {
                return i[t]
            }))
        }
        return e
    }
    var Pc = function () {
        function e() {
            this.buildResourceEventUis = qt(Ic, Et), this.injectResourceEventUis = qt(Nc)
        }
        return e.prototype.transform = function (e, t) {
            return t.viewSpec.optionDefaults.needsResourceData ? null : {
                eventUiBases: this.injectResourceEventUis(e.eventUiBases, e.eventStore.defs, this.buildResourceEventUis(t.resourceStore))
            }
        }, e
    }();

    function Ic(e) {
        return mt(e, (function (e) {
            return e.ui
        }))
    }

    function Nc(e, t, n) {
        return mt(e, (function (e, r) {
            return r ? function (e, t, n) {
                for (var r = [], o = 0, i = t.resourceIds; o < i.length; o++) {
                    var a = i[o];
                    n[a] && r.unshift(n[a])
                }
                return r.unshift(e), Pn(r)
            }(e, t[r], n) : e
        }))
    }
    var Hc = [];

    function Oc(e) {
        Hc.push(e)
    }

    function Ac(e) {
        return Hc[e]
    }

    function Wc() {
        return Hc
    }
    var Lc = {
        id: String,
        resources: En,
        url: String,
        method: String,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
        extraParams: En
    };

    function Uc(e) {
        var t;
        if ("string" == typeof e ? t = {
                url: e
            } : "function" == typeof e || Array.isArray(e) ? t = {
                resources: e
            } : "object" == typeof e && e && (t = e), t) {
            var n = Sn(t, Lc),
                r = n.refined;
            ! function (e) {
                for (var t in e) console.warn("Unknown resource prop '" + t + "'")
            }(n.extra);
            var o = function (e) {
                for (var t = Wc(), n = t.length - 1; n >= 0; n -= 1) {
                    var r = t[n].parseMeta(e);
                    if (r) return {
                        meta: r,
                        sourceDefId: n
                    }
                }
                return null
            }(r);
            if (o) return {
                _raw: e,
                sourceId: He(),
                sourceDefId: o.sourceDefId,
                meta: o.meta,
                publicId: r.id || "",
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null
            }
        }
        return null
    }

    function Bc(e, t, n) {
        var o = n.options,
            i = n.dateProfile;
        if (!e || !t) return zc(o.initialResources || o.resources, i.activeRange, o.refetchResourcesOnNavigate, n);
        switch (t.type) {
            case "RESET_RESOURCE_SOURCE":
                return zc(t.resourceSourceInput, i.activeRange, o.refetchResourcesOnNavigate, n);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return function (e, t, n, r) {
                    if (n && ! function (e) {
                            return Boolean(Ac(e.sourceDefId).ignoreRange)
                        }(e) && (!e.fetchRange || !Yn(e.fetchRange, t))) return Vc(e, t, r);
                    return e
                }(e, i.activeRange, o.refetchResourcesOnNavigate, n);
            case "RECEIVE_RESOURCES":
            case "RECEIVE_RESOURCE_ERROR":
                return function (e, t, n) {
                    if (t === e.latestFetchId) return r(r({}, e), {
                        isFetching: !1,
                        fetchRange: n
                    });
                    return e
                }(e, t.fetchId, t.fetchRange);
            case "REFETCH_RESOURCES":
                return Vc(e, i.activeRange, n);
            default:
                return e
        }
    }

    function zc(e, t, n, r) {
        if (e) {
            var o = Uc(e);
            return o = Vc(o, n ? t : null, r)
        }
        return null
    }

    function Vc(e, t, n) {
        var o = Ac(e.sourceDefId),
            i = He();
        return o.fetch({
            resourceSource: e,
            range: t,
            context: n
        }, (function (e) {
            n.dispatch({
                type: "RECEIVE_RESOURCES",
                fetchId: i,
                fetchRange: t,
                rawResources: e.rawResources
            })
        }), (function (e) {
            n.dispatch({
                type: "RECEIVE_RESOURCE_ERROR",
                fetchId: i,
                fetchRange: t,
                error: e
            })
        })), r(r({}, e), {
            isFetching: !0,
            latestFetchId: i
        })
    }
    var Fc = "_fc:",
        Gc = {
            id: String,
            parentId: String,
            children: En,
            title: String,
            businessHours: En,
            extendedProps: En,
            eventEditable: Boolean,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventConstraint: En,
            eventOverlap: Boolean,
            eventAllow: En,
            eventClassNames: _n,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String
        };

    function jc(e, t, n, o) {
        void 0 === t && (t = "");
        var i = Sn(e, Gc),
            a = i.refined,
            s = i.extra,
            l = {
                id: a.id || Fc + He(),
                parentId: a.parentId || t,
                title: a.title || "",
                businessHours: a.businessHours ? Yr(a.businessHours, o) : null,
                ui: Mn({
                    editable: a.eventEditable,
                    startEditable: a.eventStartEditable,
                    durationEditable: a.eventDurationEditable,
                    constraint: a.eventConstraint,
                    overlap: a.eventOverlap,
                    allow: a.eventAllow,
                    classNames: a.eventClassNames,
                    backgroundColor: a.eventBackgroundColor,
                    borderColor: a.eventBorderColor,
                    textColor: a.eventTextColor,
                    color: a.eventColor
                }, o),
                extendedProps: r(r({}, s), a.extendedProps)
            };
        if (Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), n[l.id]);
        else if (n[l.id] = l, a.children)
            for (var u = 0, c = a.children; u < c.length; u++) {
                jc(c[u], l.id, n, o)
            }
        return l
    }

    function qc(e) {
        return 0 === e.indexOf(Fc) ? "" : e
    }

    function Yc(e, t, n, o) {
        if (!e || !t) return {};
        switch (t.type) {
            case "RECEIVE_RESOURCES":
                return function (e, t, n, r, o) {
                    if (r.latestFetchId === n) {
                        for (var i = {}, a = 0, s = t; a < s.length; a++) {
                            jc(s[a], "", i, o)
                        }
                        return i
                    }
                    return e
                }(e, t.rawResources, t.fetchId, n, o);
            case "ADD_RESOURCE":
                return i = e, a = t.resourceHash, r(r({}, i), a);
            case "REMOVE_RESOURCE":
                return function (e, t) {
                    var n = r({}, e);
                    for (var o in delete n[t], n) n[o].parentId === t && (n[o] = r(r({}, n[o]), {
                        parentId: ""
                    }));
                    return n
                }(e, t.resourceId);
            case "SET_RESOURCE_PROP":
                return function (e, t, n, o) {
                    var i, a, s = e[t];
                    if (s) return r(r({}, e), ((i = {})[t] = r(r({}, s), ((a = {})[n] = o, a)), i));
                    return e
                }(e, t.resourceId, t.propName, t.propValue);
            case "SET_RESOURCE_EXTENDED_PROP":
                return function (e, t, n, o) {
                    var i, a, s = e[t];
                    if (s) return r(r({}, e), ((i = {})[t] = r(r({}, s), {
                        extendedProps: r(r({}, s.extendedProps), (a = {}, a[n] = o, a))
                    }), i));
                    return e
                }(e, t.resourceId, t.propName, t.propValue);
            default:
                return e
        }
        var i, a
    }
    var Zc = {
        resourceId: String,
        resourceIds: En,
        resourceEditable: Boolean
    };
    var Xc = function () {
        function e(e, t) {
            this._context = e, this._resource = t
        }
        return e.prototype.setProp = function (e, t) {
            var n = this._resource;
            this._context.dispatch({
                type: "SET_RESOURCE_PROP",
                resourceId: n.id,
                propName: e,
                propValue: t
            }), this.sync(n)
        }, e.prototype.setExtendedProp = function (e, t) {
            var n = this._resource;
            this._context.dispatch({
                type: "SET_RESOURCE_EXTENDED_PROP",
                resourceId: n.id,
                propName: e,
                propValue: t
            }), this.sync(n)
        }, e.prototype.sync = function (t) {
            var n = this._context,
                r = t.id;
            this._resource = n.getCurrentData().resourceStore[r], n.emitter.trigger("resourceChange", {
                oldResource: new e(n, t),
                resource: this,
                revert: function () {
                    var e;
                    n.dispatch({
                        type: "ADD_RESOURCE",
                        resourceHash: (e = {}, e[r] = t, e)
                    })
                }
            })
        }, e.prototype.remove = function () {
            var e = this._context,
                t = this._resource,
                n = t.id;
            e.dispatch({
                type: "REMOVE_RESOURCE",
                resourceId: n
            }), e.emitter.trigger("resourceRemove", {
                resource: this,
                revert: function () {
                    var r;
                    e.dispatch({
                        type: "ADD_RESOURCE",
                        resourceHash: (r = {}, r[n] = t, r)
                    })
                }
            })
        }, e.prototype.getParent = function () {
            var t = this._context,
                n = this._resource.parentId;
            return n ? new e(t, t.getCurrentData().resourceSource[n]) : null
        }, e.prototype.getChildren = function () {
            var t = this._resource.id,
                n = this._context,
                r = n.getCurrentData().resourceStore,
                o = [];
            for (var i in r) r[i].parentId === t && o.push(new e(n, r[i]));
            return o
        }, e.prototype.getEvents = function () {
            var e = this._resource.id,
                t = this._context,
                n = t.getCurrentData().eventStore,
                r = n.defs,
                o = n.instances,
                i = [];
            for (var a in o) {
                var s = o[a],
                    l = r[s.defId]; - 1 !== l.resourceIds.indexOf(e) && i.push(new Mr(t, l, s))
            }
            return i
        }, Object.defineProperty(e.prototype, "id", {
            get: function () {
                return qc(this._resource.id)
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "title", {
            get: function () {
                return this._resource.title
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventConstraint", {
            get: function () {
                return this._resource.ui.constraints[0] || null
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventOverlap", {
            get: function () {
                return this._resource.ui.overlap
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventAllow", {
            get: function () {
                return this._resource.ui.allows[0] || null
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventBackgroundColor", {
            get: function () {
                return this._resource.ui.backgroundColor
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventBorderColor", {
            get: function () {
                return this._resource.ui.borderColor
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventTextColor", {
            get: function () {
                return this._resource.ui.textColor
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "eventClassNames", {
            get: function () {
                return this._resource.ui.classNames
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "extendedProps", {
            get: function () {
                return this._resource.extendedProps
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.toPlainObject = function (e) {
            void 0 === e && (e = {});
            var t = this._resource,
                n = t.ui,
                o = this.id,
                i = {};
            return o && (i.id = o), t.title && (i.title = t.title), e.collapseEventColor && n.backgroundColor && n.backgroundColor === n.borderColor ? i.eventColor = n.backgroundColor : (n.backgroundColor && (i.eventBackgroundColor = n.backgroundColor), n.borderColor && (i.eventBorderColor = n.borderColor)), n.textColor && (i.eventTextColor = n.textColor), n.classNames.length && (i.eventClassNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? r(i, t.extendedProps) : i.extendedProps = t.extendedProps), i
        }, e.prototype.toJSON = function () {
            return this.toPlainObject()
        }, e
    }();
    kr.prototype.addResource = function (e, t) {
        var n, r = this;
        void 0 === t && (t = !0);
        var o, i, a = this.getCurrentData();
        e instanceof Xc ? ((n = {})[(i = e._resource).id] = i, o = n) : i = jc(e, "", o = {}, a), this.dispatch({
            type: "ADD_RESOURCE",
            resourceHash: o
        }), t && this.trigger("_scrollRequest", {
            resourceId: i.id
        });
        var s = new Xc(a, i);
        return a.emitter.trigger("resourceAdd", {
            resource: s,
            revert: function () {
                r.dispatch({
                    type: "REMOVE_RESOURCE",
                    resourceId: i.id
                })
            }
        }), s
    }, kr.prototype.getResourceById = function (e) {
        e = String(e);
        var t = this.getCurrentData();
        if (t.resourceStore) {
            var n = t.resourceStore[e];
            if (n) return new Xc(t, n)
        }
        return null
    }, kr.prototype.getResources = function () {
        var e = this.getCurrentData(),
            t = e.resourceStore,
            n = [];
        if (t)
            for (var r in t) n.push(new Xc(e, t[r]));
        return n
    }, kr.prototype.getTopLevelResources = function () {
        var e = this.getCurrentData(),
            t = e.resourceStore,
            n = [];
        if (t)
            for (var r in t) t[r].parentId || n.push(new Xc(e, t[r]));
        return n
    }, kr.prototype.refetchResources = function () {
        this.dispatch({
            type: "REFETCH_RESOURCES"
        })
    };
    var Kc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.getKeyInfo = function (e) {
            return r({
                "": {}
            }, e.resourceStore)
        }, t.prototype.getKeysForDateSpan = function (e) {
            return [e.resourceId || ""]
        }, t.prototype.getKeysForEventDef = function (e) {
            var t = e.resourceIds;
            return t.length ? t : [""]
        }, t
    }(no);

    function $c(e, t) {
        return r(r({}, t), {
            constraints: Jc(e, t.constraints)
        })
    }

    function Jc(e, t) {
        return t.map((function (t) {
            var n = t.defs;
            if (n)
                for (var r in n) {
                    var o = n[r].resourceIds;
                    if (o.length && -1 === o.indexOf(e)) return !1
                }
            return t
        }))
    }
    Mr.prototype.getResources = function () {
        var e = this._context.calendarApi;
        return this._def.resourceIds.map((function (t) {
            return e.getResourceById(t)
        }))
    }, Mr.prototype.setResources = function (e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n],
                i = null;
            "string" == typeof o ? i = o : "number" == typeof o ? i = String(o) : o instanceof Xc ? i = o.id : console.warn("unknown resource type: " + o), i && t.push(i)
        }
        this.mutate({
            standardProps: {
                resourceIds: t
            }
        })
    };
    var Qc = {
        resources: function (e, t) {
            t.getCurrentData().resourceSource._raw !== e && t.dispatch({
                type: "RESET_RESOURCE_SOURCE",
                resourceSourceInput: e
            })
        }
    };
    var ed = ze("id,title");
    var td = {
            initialResources: En,
            resources: En,
            eventResourceEditable: Boolean,
            refetchResourcesOnNavigate: Boolean,
            resourceOrder: ze,
            filterResourcesWithEvents: Boolean,
            resourceGroupField: String,
            resourceAreaWidth: En,
            resourceAreaColumns: En,
            resourcesInitiallyExpanded: Boolean,
            datesAboveResources: Boolean,
            needsResourceData: Boolean,
            resourceAreaHeaderClassNames: En,
            resourceAreaHeaderContent: En,
            resourceAreaHeaderDidMount: En,
            resourceAreaHeaderWillUnmount: En,
            resourceGroupLabelClassNames: En,
            resourceGroupLabelContent: En,
            resourceGroupLabelDidMount: En,
            resourceGroupLabelWillUnmount: En,
            resourceLabelClassNames: En,
            resourceLabelContent: En,
            resourceLabelDidMount: En,
            resourceLabelWillUnmount: En,
            resourceLaneClassNames: En,
            resourceLaneContent: En,
            resourceLaneDidMount: En,
            resourceLaneWillUnmount: En,
            resourceGroupLaneClassNames: En,
            resourceGroupLaneContent: En,
            resourceGroupLaneDidMount: En,
            resourceGroupLaneWillUnmount: En
        },
        nd = {
            resourcesSet: En,
            resourceAdd: En,
            resourceChange: En,
            resourceRemove: En
        };

    function rd(e) {
        return To(Oo.Consumer, null, (function (t) {
            var n = t.options,
                r = {
                    resource: new Xc(t, e.resource),
                    date: e.date ? t.dateEnv.toDate(e.date) : null,
                    view: t.viewApi
                },
                o = {
                    "data-resource-id": e.resource.id,
                    "data-date": e.date ? zt(e.date) : void 0
                };
            return To(Yo, {
                hookProps: r,
                classNames: n.resourceLabelClassNames,
                content: n.resourceLabelContent,
                defaultContent: od,
                didMount: n.resourceLabelDidMount,
                willUnmount: n.resourceLabelWillUnmount
            }, (function (t, n, r, i) {
                return e.children(t, n, o, r, i)
            }))
        }))
    }

    function od(e) {
        return e.resource.title || e.resource.id
    }
    Oc({
        ignoreRange: !0,
        parseMeta: function (e) {
            return Array.isArray(e.resources) ? e.resources : null
        },
        fetch: function (e, t) {
            t({
                rawResources: e.resourceSource.meta
            })
        }
    }), Oc({
        parseMeta: function (e) {
            return "function" == typeof e.resources ? e.resources : null
        },
        fetch: function (e, t, n) {
            var r = e.context.dateEnv,
                o = e.resourceSource.meta,
                i = e.range ? {
                    start: r.toDate(e.range.start),
                    end: r.toDate(e.range.end),
                    startStr: r.formatIso(e.range.start),
                    endStr: r.formatIso(e.range.end),
                    timeZone: r.timeZone
                } : {};
            yo(o.bind(null, i), (function (e) {
                t({
                    rawResources: e
                })
            }), n)
        }
    }), Oc({
        parseMeta: function (e) {
            return e.url ? {
                url: e.url,
                method: (e.method || "GET").toUpperCase(),
                extraParams: e.extraParams
            } : null
        },
        fetch: function (e, t, n) {
            var o = e.resourceSource.meta,
                i = function (e, t, n) {
                    var o, i, a, s, l = n.dateEnv,
                        u = n.options,
                        c = {};
                    t && (null == (o = e.startParam) && (o = u.startParam), null == (i = e.endParam) && (i = u.endParam), null == (a = e.timeZoneParam) && (a = u.timeZoneParam), c[o] = l.formatIso(t.start), c[i] = l.formatIso(t.end), "local" !== l.timeZone && (c[a] = l.timeZone));
                    s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                    return r(c, s), c
                }(o, e.range, e.context);
            wi(o.method, o.url, i, (function (e, n) {
                t({
                    rawResources: e,
                    xhr: n
                })
            }), (function (e, t) {
                n({
                    message: e,
                    xhr: t
                })
            }))
        }
    });
    var id = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props;
                return To(rd, {
                    resource: e.resource,
                    date: e.date
                }, (function (t, n, o, i, a) {
                    return To("th", r({
                        ref: t,
                        className: ["fc-col-header-cell", "fc-resource"].concat(n).join(" "),
                        colSpan: e.colSpan
                    }, o), To("div", {
                        className: "fc-scrollgrid-sync-inner"
                    }, To("span", {
                        className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                        ref: i
                    }, a)))
                }))
            }, t
        }(Lo),
        ad = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDateFormat = qt(sd), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = this.buildDateFormat(n.options.dayHeaderFormat, t.datesRepDistinctDays, t.dates.length);
                return To(ba, {
                    unit: "day"
                }, (function (o, i) {
                    return 1 === t.dates.length ? e.renderResourceRow(t.resources, t.dates[0]) : n.options.datesAboveResources ? e.renderDayAndResourceRows(t.dates, r, i, t.resources) : e.renderResourceAndDayRows(t.resources, t.dates, r, i)
                }))
            }, t.prototype.renderResourceRow = function (e, t) {
                var n = e.map((function (e) {
                    return To(id, {
                        key: e.id,
                        resource: e,
                        colSpan: 1,
                        date: t
                    })
                }));
                return this.buildTr(n, "resources")
            }, t.prototype.renderDayAndResourceRows = function (e, t, n, r) {
                for (var o = [], i = [], a = 0, s = e; a < s.length; a++) {
                    var l = s[a];
                    o.push(this.renderDateCell(l, t, n, r.length, null, !0));
                    for (var u = 0, c = r; u < c.length; u++) {
                        var d = c[u];
                        i.push(To(id, {
                            key: d.id + ":" + l.toISOString(),
                            resource: d,
                            colSpan: 1,
                            date: l
                        }))
                    }
                }
                return To(ko, null, this.buildTr(o, "day"), this.buildTr(i, "resources"))
            }, t.prototype.renderResourceAndDayRows = function (e, t, n, r) {
                for (var o = [], i = [], a = 0, s = e; a < s.length; a++) {
                    var l = s[a];
                    o.push(To(id, {
                        key: l.id,
                        resource: l,
                        colSpan: t.length,
                        isSticky: !0
                    }));
                    for (var u = 0, c = t; u < c.length; u++) {
                        var d = c[u];
                        i.push(this.renderDateCell(d, n, r, 1, l))
                    }
                }
                return To(ko, null, this.buildTr(o, "resources"), this.buildTr(i, "day"))
            }, t.prototype.renderDateCell = function (e, t, n, r, o, i) {
                var a = this.props,
                    s = o ? ":" + o.id : "",
                    l = o ? {
                        resource: new Xc(this.context, o)
                    } : {},
                    u = o ? {
                        "data-resource-id": o.id
                    } : {};
                return a.datesRepDistinctDays ? To(Sa, {
                    key: e.toISOString() + s,
                    date: e,
                    dateProfile: a.dateProfile,
                    todayRange: n,
                    colCnt: a.dates.length * a.resources.length,
                    dayHeaderFormat: t,
                    colSpan: r,
                    isSticky: i,
                    extraHookProps: l,
                    extraDataAttrs: u
                }) : To(Ea, {
                    key: e.getUTCDay() + s,
                    dow: e.getUTCDay(),
                    dayHeaderFormat: t,
                    colSpan: r,
                    isSticky: i,
                    extraHookProps: l,
                    extraDataAttrs: u
                })
            }, t.prototype.buildTr = function (e, t) {
                var n = this.props.renderIntro;
                return e.length || (e = [To("td", {
                    key: 0
                }, " ")]), To("tr", {
                    key: t
                }, n && n(t), e)
            }, t
        }(Lo);

    function sd(e, t, n) {
        return e || ga(t, n)
    }
    var ld = function (e) {
            for (var t = {}, n = [], r = 0; r < e.length; r += 1) {
                var o = e[r].id;
                n.push(o), t[o] = r
            }
            this.ids = n, this.indicesById = t, this.length = e.length
        },
        ud = function () {
            function e(e, t, n) {
                this.dayTableModel = e, this.resources = t, this.context = n, this.resourceIndex = new ld(t), this.rowCnt = e.rowCnt, this.colCnt = e.colCnt * t.length, this.cells = this.buildCells()
            }
            return e.prototype.buildCells = function () {
                for (var e = this, t = e.rowCnt, n = e.dayTableModel, r = e.resources, o = [], i = 0; i < t; i += 1) {
                    for (var a = [], s = 0; s < n.colCnt; s += 1)
                        for (var l = 0; l < r.length; l += 1) {
                            var u = r[l],
                                c = {
                                    resource: new Xc(this.context, u)
                                },
                                d = {
                                    "data-resource-id": u.id
                                },
                                p = {
                                    resourceId: u.id
                                },
                                f = n.cells[i][s].date;
                            a[this.computeCol(s, l)] = {
                                key: u.id + ":" + f.toISOString(),
                                date: f,
                                extraHookProps: c,
                                extraDataAttrs: d,
                                extraClassNames: ["fc-resource"],
                                extraDateSpan: p
                            }
                        }
                    o.push(a)
                }
                return o
            }, e
        }(),
        cd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.computeCol = function (e, t) {
                return t * this.dayTableModel.colCnt + e
            }, t.prototype.computeColRanges = function (e, t, n) {
                return [{
                    firstCol: this.computeCol(e, n),
                    lastCol: this.computeCol(t, n),
                    isStart: !0,
                    isEnd: !0
                }]
            }, t
        }(ud),
        dd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.computeCol = function (e, t) {
                return e * this.resources.length + t
            }, t.prototype.computeColRanges = function (e, t, n) {
                for (var r = [], o = e; o <= t; o += 1) {
                    var i = this.computeCol(o, n);
                    r.push({
                        firstCol: i,
                        lastCol: i,
                        isStart: o === e,
                        isEnd: o === t
                    })
                }
                return r
            }, t
        }(ud),
        pd = [],
        fd = function () {
            function e() {
                this.joinDateSelection = qt(this.joinSegs), this.joinBusinessHours = qt(this.joinSegs), this.joinFgEvents = qt(this.joinSegs), this.joinBgEvents = qt(this.joinSegs), this.joinEventDrags = qt(this.joinInteractions), this.joinEventResizes = qt(this.joinInteractions)
            }
            return e.prototype.joinProps = function (e, t) {
                for (var n = [], r = [], i = [], a = [], s = [], l = [], u = "", c = 0, d = t.resourceIndex.ids.concat([""]); c < d.length; c++) {
                    var p = d[c],
                        f = e[p];
                    n.push(f.dateSelectionSegs), r.push(p ? f.businessHourSegs : pd), i.push(p ? f.fgEventSegs : pd), a.push(f.bgEventSegs), s.push(f.eventDrag), l.push(f.eventResize), u = u || f.eventSelection
                }
                return {
                    dateSelectionSegs: this.joinDateSelection.apply(this, o([t], n)),
                    businessHourSegs: this.joinBusinessHours.apply(this, o([t], r)),
                    fgEventSegs: this.joinFgEvents.apply(this, o([t], i)),
                    bgEventSegs: this.joinBgEvents.apply(this, o([t], a)),
                    eventDrag: this.joinEventDrags.apply(this, o([t], s)),
                    eventResize: this.joinEventResizes.apply(this, o([t], l)),
                    eventSelection: u
                }
            }, e.prototype.joinSegs = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var r = e.resources.length, o = [], i = 0; i < r; i += 1) {
                    for (var a = 0, s = t[i]; a < s.length; a++) {
                        var l = s[a];
                        o.push.apply(o, this.transformSeg(l, e, i))
                    }
                    for (var u = 0, c = t[r]; u < c.length; u++) {
                        l = c[u];
                        o.push.apply(o, this.transformSeg(l, e, i))
                    }
                }
                return o
            }, e.prototype.expandSegs = function (e, t) {
                for (var n = e.resources.length, r = [], o = 0; o < n; o += 1)
                    for (var i = 0, a = t; i < a.length; i++) {
                        var s = a[i];
                        r.push.apply(r, this.transformSeg(s, e, o))
                    }
                return r
            }, e.prototype.joinInteractions = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                for (var o = e.resources.length, i = {}, a = [], s = !1, l = !1, u = 0; u < o; u += 1) {
                    var c = t[u];
                    if (c) {
                        s = !0;
                        for (var d = 0, p = c.segs; d < p.length; d++) {
                            var f = p[d];
                            a.push.apply(a, this.transformSeg(f, e, u))
                        }
                        r(i, c.affectedInstances), l = l || c.isEvent
                    }
                    if (t[o])
                        for (var h = 0, v = t[o].segs; h < v.length; h++) {
                            f = v[h];
                            a.push.apply(a, this.transformSeg(f, e, u))
                        }
                }
                return s ? {
                    affectedInstances: i,
                    segs: a,
                    isEvent: l
                } : null
            }, e
        }(),
        hd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.getKeyInfo = function (e) {
                var t = e.resourceDayTableModel,
                    n = mt(t.resourceIndex.indicesById, (function (e) {
                        return t.resources[e]
                    }));
                return n[""] = {}, n
            }, t.prototype.getKeysForDateSpan = function (e) {
                return [e.resourceId || ""]
            }, t.prototype.getKeysForEventDef = function (e) {
                var t = e.resourceIds;
                return t.length ? t : [""]
            }, t
        }(no);

    function vd(e, t) {
        return gd(e, [], t, !1, {}, !0).map((function (e) {
            return e.resource
        }))
    }

    function gd(e, t, n, r, o, i) {
        var a = [];
        return md(function (e, t, n, r) {
            var o = function (e, t) {
                    var n = {};
                    for (var r in e) {
                        var o = e[r];
                        n[r] = {
                            resource: o,
                            resourceFields: Ed(o),
                            children: []
                        }
                    }
                    for (var r in e) {
                        if ((o = e[r]).parentId) {
                            var i = n[o.parentId];
                            i && Sd(n[r], i.children, t)
                        }
                    }
                    return n
                }(e, r),
                i = [];
            for (var a in o) {
                var s = o[a];
                s.resource.parentId || yd(s, i, n, 0, t, r)
            }
            return i
        }(e, r ? -1 : 1, t, n), a, r, [], 0, o, i), a
    }

    function md(e, t, n, r, o, i, a) {
        for (var s = 0; s < e.length; s += 1) {
            var l = e[s],
                u = l.group;
            if (u)
                if (n) {
                    var c = t.length,
                        d = r.length;
                    if (md(l.children, t, n, r.concat(0), o, i, a), c < t.length) {
                        var p = t[c];
                        (p.rowSpans = p.rowSpans.slice())[d] = t.length - c
                    }
                } else {
                    var f = null != i[h = u.spec.field + ":" + u.value] ? i[h] : a;
                    t.push({
                        id: h,
                        group: u,
                        isExpanded: f
                    }), f && md(l.children, t, n, r, o + 1, i, a)
                }
            else if (l.resource) {
                var h;
                f = null != i[h = l.resource.id] ? i[h] : a;
                t.push({
                    id: h,
                    rowSpans: r,
                    depth: o,
                    isExpanded: f,
                    hasChildren: Boolean(l.children.length),
                    resource: l.resource,
                    resourceFields: l.resourceFields
                }), f && md(l.children, t, n, r, o + 1, i, a)
            }
        }
    }

    function yd(e, t, n, r, o, i) {
        n.length && (-1 === o || r <= o) ? yd(e, function (e, t, n) {
            var r, o, i = e.resourceFields[n.field];
            if (n.order)
                for (o = 0; o < t.length; o += 1) {
                    if ((s = t[o]).group) {
                        var a = Ge(i, s.group.value) * n.order;
                        if (0 === a) {
                            r = s;
                            break
                        }
                        if (a < 0) break
                    }
                } else
                    for (o = 0; o < t.length; o += 1) {
                        var s;
                        if ((s = t[o]).group && i === s.group.value) {
                            r = s;
                            break
                        }
                    }
            r || (r = {
                group: {
                    value: i,
                    spec: n
                },
                children: []
            }, t.splice(o, 0, r));
            return r
        }(e, t, n[0]).children, n.slice(1), r + 1, o, i) : Sd(e, t, i)
    }

    function Sd(e, t, n) {
        var r;
        for (r = 0; r < t.length; r += 1) {
            if (Ve(t[r].resourceFields, e.resourceFields, n) > 0) break
        }
        t.splice(r, 0, e)
    }

    function Ed(e) {
        var t = r(r(r({}, e.extendedProps), e.ui), e);
        return delete t.ui, delete t.extendedProps, t
    }

    function bd(e, t) {
        return e.spec === t.spec && e.value === t.value
    }
    var Cd = Fo({
            deps: [Du],
            reducers: [function (e, t, n) {
                var o = Bc(e && e.resourceSource, t, n);
                return {
                    resourceSource: o,
                    resourceStore: Yc(e && e.resourceStore, t, o, n),
                    resourceEntityExpansions: function (e, t) {
                        var n;
                        if (!e || !t) return {};
                        switch (t.type) {
                            case "SET_RESOURCE_ENTITY_EXPANDED":
                                return r(r({}, e), ((n = {})[t.id] = t.isExpanded, n));
                            default:
                                return e
                        }
                    }(e && e.resourceEntityExpansions, t)
                }
            }],
            isLoadingFuncs: [function (e) {
                return e.resourceSource && e.resourceSource.isFetching
            }],
            eventRefiners: Zc,
            eventDefMemberAdders: [function (e) {
                return {
                    resourceIds: (t = e.resourceIds, (t || []).map((function (e) {
                        return String(e)
                    }))).concat(e.resourceId ? [e.resourceId] : []),
                    resourceEditable: e.resourceEditable
                };
                var t
            }],
            isDraggableTransformers: [function (e, t, n, r) {
                if (!e) {
                    var o = r.getCurrentData();
                    if (o.viewSpecs[o.currentViewType].optionDefaults.needsResourceData && xc(t, r)) return !0
                }
                return e
            }],
            eventDragMutationMassagers: [function (e, t, n) {
                var r = t.dateSpan.resourceId,
                    o = n.dateSpan.resourceId;
                r && o && r !== o && (e.resourceMutation = {
                    matchResourceId: r,
                    setResourceId: o
                })
            }],
            eventDefMutationAppliers: [function (e, t, n) {
                var r = t.resourceMutation;
                if (r && xc(e, n)) {
                    var o = e.resourceIds.indexOf(r.matchResourceId);
                    if (-1 !== o) {
                        var i = e.resourceIds.slice();
                        i.splice(o, 1), -1 === i.indexOf(r.setResourceId) && i.push(r.setResourceId), e.resourceIds = i
                    }
                }
            }],
            dateSelectionTransformers: [function (e, t) {
                var n = e.dateSpan.resourceId,
                    r = t.dateSpan.resourceId;
                return n && r ? {
                    resourceId: n
                } : null
            }],
            datePointTransforms: [function (e, t) {
                return e.resourceId ? {
                    resource: t.calendarApi.getResourceById(e.resourceId)
                } : {}
            }],
            dateSpanTransforms: [function (e, t) {
                return e.resourceId ? {
                    resource: t.calendarApi.getResourceById(e.resourceId)
                } : {}
            }],
            viewPropsTransformers: [kc, Pc],
            isPropsValid: function (e, t) {
                var n = (new Kc).splitProps(r(r({}, e), {
                    resourceStore: t.getCurrentData().resourceStore
                }));
                for (var o in n) {
                    var i = n[o];
                    if (o && n[""] && (i = r(r({}, i), {
                            eventStore: wn(n[""].eventStore, i.eventStore),
                            eventUiBases: r(r({}, n[""].eventUiBases), i.eventUiBases)
                        })), !Ia(i, t, {
                            resourceId: o
                        }, $c.bind(null, o))) return !1
                }
                return !0
            },
            externalDefTransforms: [function (e) {
                return e.resourceId ? {
                    resourceId: e.resourceId
                } : {}
            }],
            eventDropTransformers: [function (e, t) {
                var n = e.resourceMutation;
                if (n) {
                    var r = t.calendarApi;
                    return {
                        oldResource: r.getResourceById(n.matchResourceId),
                        newResource: r.getResourceById(n.setResourceId)
                    }
                }
                return {
                    oldResource: null,
                    newResource: null
                }
            }],
            optionChangeHandlers: Qc,
            optionRefiners: td,
            listenerRefiners: nd,
            propSetHandlers: {
                resourceStore: function (e, t) {
                    var n = t.emitter;
                    n.hasHandlers("resourcesSet") && n.trigger("resourcesSet", function (e, t) {
                        var n = [];
                        for (var r in e) n.push(new Xc(t, e[r]));
                        return n
                    }(e, t))
                }
            }
        }),
        Dd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.transformSeg = function (e, t, n) {
                return t.computeColRanges(e.firstCol, e.lastCol, n).map((function (t) {
                    return r(r(r({}, e), t), {
                        isStart: e.isStart && t.isStart,
                        isEnd: e.isEnd && t.isEnd
                    })
                }))
            }, t
        }(fd),
        Rd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.splitter = new hd, t.slicers = {}, t.joiner = new Dd, t.tableRef = xo(), t.isHitComboAllowed = function (e, n) {
                    return 1 === t.props.resourceDayTableModel.dayTableModel.colCnt || e.dateSpan.resourceId === n.dateSpan.resourceId
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = t.resourceDayTableModel,
                    i = t.nextDayThreshold,
                    a = t.dateProfile,
                    s = this.splitter.splitProps(t);
                this.slicers = mt(s, (function (t, n) {
                    return e.slicers[n] || new ml
                }));
                var l = mt(this.slicers, (function (e, t) {
                    return e.sliceProps(s[t], a, i, n, o.dayTableModel)
                }));
                return To(vl, r({
                    forPrint: t.forPrint,
                    ref: this.tableRef
                }, this.joiner.joinProps(l, o), {
                    cells: o.cells,
                    dateProfile: a,
                    colGroupNode: t.colGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    renderRowIntro: t.renderRowIntro,
                    dayMaxEvents: t.dayMaxEvents,
                    dayMaxEventRows: t.dayMaxEventRows,
                    showWeekNumbers: t.showWeekNumbers,
                    expandRows: t.expandRows,
                    headerAlignElRef: t.headerAlignElRef,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    isHitComboAllowed: this.isHitComboAllowed
                }))
            }, t
        }(Vo),
        wd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.flattenResources = qt(vd), t.buildResourceDayTableModel = qt(Td), t.headerRef = xo(), t.tableRef = xo(), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = n.options,
                    o = r.resourceOrder || ed,
                    i = this.flattenResources(t.resourceStore, o),
                    a = this.buildResourceDayTableModel(t.dateProfile, n.dateProfileGenerator, i, r.datesAboveResources, n),
                    s = r.dayHeaders && To(ad, {
                        ref: this.headerRef,
                        resources: i,
                        dateProfile: t.dateProfile,
                        dates: a.dayTableModel.headerDates,
                        datesRepDistinctDays: !0
                    }),
                    l = function (n) {
                        return To(Rd, {
                            ref: e.tableRef,
                            dateProfile: t.dateProfile,
                            resourceDayTableModel: a,
                            businessHours: t.businessHours,
                            eventStore: t.eventStore,
                            eventUiBases: t.eventUiBases,
                            dateSelection: t.dateSelection,
                            eventSelection: t.eventSelection,
                            eventDrag: t.eventDrag,
                            eventResize: t.eventResize,
                            nextDayThreshold: r.nextDayThreshold,
                            tableMinWidth: n.tableMinWidth,
                            colGroupNode: n.tableColGroupNode,
                            dayMaxEvents: r.dayMaxEvents,
                            dayMaxEventRows: r.dayMaxEventRows,
                            showWeekNumbers: r.weekNumbers,
                            expandRows: !t.isHeightAuto,
                            headerAlignElRef: e.headerElRef,
                            clientWidth: n.clientWidth,
                            clientHeight: n.clientHeight,
                            forPrint: t.forPrint
                        })
                    };
                return r.dayMinWidth ? this.renderHScrollLayout(s, l, a.colCnt, r.dayMinWidth) : this.renderSimpleLayout(s, l)
            }, t
        }(Ks);

    function Td(e, t, n, r, o) {
        var i = El(e, t);
        return r ? new dd(i, n, o) : new cd(i, n, o)
    }
    var _d = Fo({
            deps: [Du, Cd, bl],
            initialView: "resourceDayGridDay",
            views: {
                resourceDayGrid: {
                    type: "dayGrid",
                    component: wd,
                    needsResourceData: !0
                },
                resourceDayGridDay: {
                    type: "resourceDayGrid",
                    duration: {
                        days: 1
                    }
                },
                resourceDayGridWeek: {
                    type: "resourceDayGrid",
                    duration: {
                        weeks: 1
                    }
                },
                resourceDayGridMonth: {
                    type: "resourceDayGrid",
                    duration: {
                        months: 1
                    },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        }),
        xd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.transformSeg = function (e, t, n) {
                return [r(r({}, e), {
                    col: t.computeCol(e.col, n)
                })]
            }, t
        }(fd),
        kd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.buildDayRanges = qt(Jl), t.splitter = new hd, t.slicers = {}, t.joiner = new xd, t.timeColsRef = xo(), t.isHitComboAllowed = function (e, n) {
                    return 1 === t.dayRanges.length || e.dateSpan.resourceId === n.dateSpan.resourceId
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = n.dateEnv,
                    i = n.options,
                    a = t.dateProfile,
                    s = t.resourceDayTableModel,
                    l = this.dayRanges = this.buildDayRanges(s.dayTableModel, a, o),
                    u = this.splitter.splitProps(t);
                this.slicers = mt(u, (function (t, n) {
                    return e.slicers[n] || new Kl
                }));
                var c = mt(this.slicers, (function (e, t) {
                    return e.sliceProps(u[t], a, null, n, l)
                }));
                return To(ba, {
                    unit: i.nowIndicator ? "minute" : "day"
                }, (function (n, o) {
                    return To(Zl, r({
                        ref: e.timeColsRef
                    }, e.joiner.joinProps(c, s), {
                        dateProfile: a,
                        axis: t.axis,
                        slotDuration: t.slotDuration,
                        slatMetas: t.slatMetas,
                        cells: s.cells[0],
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        expandRows: t.expandRows,
                        nowDate: n,
                        nowIndicatorSegs: i.nowIndicator && e.buildNowIndicatorSegs(n),
                        todayRange: o,
                        onScrollTopRequest: t.onScrollTopRequest,
                        forPrint: t.forPrint,
                        onSlatCoords: t.onSlatCoords,
                        isHitComboAllowed: e.isHitComboAllowed
                    }))
                }))
            }, t.prototype.buildNowIndicatorSegs = function (e) {
                var t = this.slicers[""].sliceNowDate(e, this.context, this.dayRanges);
                return this.joiner.expandSegs(this.props.resourceDayTableModel, t)
            }, t
        }(Vo),
        Md = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.flattenResources = qt(vd), t.buildResourceTimeColsModel = qt(Pd), t.buildSlatMetas = qt(eu), t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = n.options,
                    i = n.dateEnv,
                    a = t.dateProfile,
                    s = this.allDaySplitter.splitProps(t),
                    l = o.resourceOrder || ed,
                    u = this.flattenResources(t.resourceStore, l),
                    c = this.buildResourceTimeColsModel(a, n.dateProfileGenerator, u, o.datesAboveResources, n),
                    d = this.buildSlatMetas(a.slotMinTime, a.slotMaxTime, o.slotLabelInterval, o.slotDuration, i),
                    p = o.dayMinWidth,
                    f = !p,
                    h = p,
                    v = o.dayHeaders && To(ad, {
                        resources: u,
                        dates: c.dayTableModel.headerDates,
                        dateProfile: a,
                        datesRepDistinctDays: !0,
                        renderIntro: f ? this.renderHeadAxis : null
                    }),
                    g = !1 !== o.allDaySlot && function (n) {
                        return To(Rd, r({}, s.allDay, {
                            dateProfile: a,
                            resourceDayTableModel: c,
                            nextDayThreshold: o.nextDayThreshold,
                            tableMinWidth: n.tableMinWidth,
                            colGroupNode: n.tableColGroupNode,
                            renderRowIntro: f ? e.renderTableRowAxis : null,
                            showWeekNumbers: !1,
                            expandRows: !1,
                            headerAlignElRef: e.headerElRef,
                            clientWidth: n.clientWidth,
                            clientHeight: n.clientHeight,
                            forPrint: t.forPrint
                        }, e.getAllDayMaxEventProps()))
                    },
                    m = function (n) {
                        return To(kd, r({}, s.timed, {
                            dateProfile: a,
                            axis: f,
                            slotDuration: o.slotDuration,
                            slatMetas: d,
                            resourceDayTableModel: c,
                            tableColGroupNode: n.tableColGroupNode,
                            tableMinWidth: n.tableMinWidth,
                            clientWidth: n.clientWidth,
                            clientHeight: n.clientHeight,
                            onSlatCoords: e.handleSlatCoords,
                            expandRows: n.expandRows,
                            forPrint: t.forPrint,
                            onScrollTopRequest: e.handleScrollTopRequest
                        }))
                    };
                return h ? this.renderHScrollLayout(v, g, m, c.colCnt, p, d, this.state.slatCoords) : this.renderSimpleLayout(v, g, m)
            }, t
        }(xl);

    function Pd(e, t, n, r, o) {
        var i = nu(e, t);
        return r ? new dd(i, n, o) : new cd(i, n, o)
    }
    var Id = Fo({
        deps: [Du, Cd, ru],
        initialView: "resourceTimeGridDay",
        views: {
            resourceTimeGrid: {
                type: "timeGrid",
                component: Md,
                needsResourceData: !0
            },
            resourceTimeGridDay: {
                type: "resourceTimeGrid",
                duration: {
                    days: 1
                }
            },
            resourceTimeGridWeek: {
                type: "resourceTimeGrid",
                duration: {
                    weeks: 1
                }
            }
        }
    });

    function Nd(e) {
        for (var t = e.depth, n = e.hasChildren, r = e.isExpanded, i = e.onExpanderClick, a = [], s = 0; s < t; s += 1) a.push(To("span", {
            className: "fc-icon"
        }));
        var l = ["fc-icon"];
        return n && (r ? l.push("fc-icon-minus-square") : l.push("fc-icon-plus-square")), a.push(To("span", {
            className: "fc-datagrid-expander" + (n ? "" : " fc-datagrid-expander-placeholder"),
            onClick: i
        }, To("span", {
            className: l.join(" ")
        }))), To.apply(void 0, o([ko, {}], a))
    }

    function Hd(e) {
        return {
            resource: new Xc(e.context, e.resource),
            fieldValue: e.fieldValue,
            view: e.context.viewApi
        }
    }
    var Od = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props;
            return To(Xo, {
                hookProps: e.hookProps,
                content: e.colSpec.cellContent,
                defaultContent: Ad
            }, (function (e, t) {
                return To("span", {
                    className: "fc-datagrid-cell-main",
                    ref: e
                }, t)
            }))
        }, t
    }(Lo);

    function Ad(e) {
        return e.fieldValue || To(ko, null, " ")
    }
    var Wd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refineHookProps = Yt(Hd), t.normalizeClassNames = Jo(), t.onExpanderClick = function (e) {
                    var n = t.props;
                    n.hasChildren && t.context.dispatch({
                        type: "SET_RESOURCE_ENTITY_EXPANDED",
                        id: n.resource.id,
                        isExpanded: !n.isExpanded
                    })
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = t.colSpec,
                    o = this.refineHookProps({
                        resource: t.resource,
                        fieldValue: t.fieldValue,
                        context: n
                    }),
                    i = this.normalizeClassNames(r.cellClassNames, o);
                return To($o, {
                    hookProps: o,
                    didMount: r.cellDidMount,
                    willUnmount: r.cellWillUnmount
                }, (function (n) {
                    return To("td", {
                        ref: n,
                        "data-resource-id": t.resource.id,
                        className: ["fc-datagrid-cell", "fc-resource"].concat(i).join(" ")
                    }, To("div", {
                        className: "fc-datagrid-cell-frame",
                        style: {
                            height: t.innerHeight
                        }
                    }, To("div", {
                        className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                    }, r.isMain && To(Nd, {
                        depth: t.depth,
                        hasChildren: t.hasChildren,
                        isExpanded: t.isExpanded,
                        onExpanderClick: e.onExpanderClick
                    }), To(Od, {
                        hookProps: o,
                        colSpec: r
                    }))))
                }))
            }, t
        }(Lo),
        Ld = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = e.colSpec,
                    r = {
                        groupValue: e.fieldValue,
                        view: t.viewApi
                    };
                return To(Yo, {
                    hookProps: r,
                    classNames: n.cellClassNames,
                    content: n.cellContent,
                    defaultContent: Ud,
                    didMount: n.cellDidMount,
                    willUnmount: n.cellWillUnmount
                }, (function (t, n, r, o) {
                    return To("td", {
                        className: ["fc-datagrid-cell", "fc-resource-group"].concat(n).join(" "),
                        rowSpan: e.rowSpan,
                        ref: t
                    }, To("div", {
                        className: "fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid"
                    }, To("div", {
                        className: "fc-datagrid-cell-cushion fc-sticky",
                        ref: r
                    }, o)))
                }))
            }, t
        }(Lo);

    function Ud(e) {
        return e.groupValue || To(ko, null, " ")
    }
    var Bd = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n(t, e), t.prototype.render = function () {
            var e = this.props,
                t = e.resource,
                n = e.rowSpans,
                r = e.depth,
                o = Ed(t);
            return To("tr", null, e.colSpecs.map((function (i, a) {
                var s = n[a];
                if (0 === s) return null;
                null == s && (s = 1);
                var l = i.field ? o[i.field] : t.title || qc(t.id);
                return s > 1 ? To(Ld, {
                    key: a,
                    colSpec: i,
                    fieldValue: l,
                    rowSpan: s
                }) : To(Wd, {
                    key: a,
                    colSpec: i,
                    resource: t,
                    fieldValue: l,
                    depth: r,
                    hasChildren: e.hasChildren,
                    isExpanded: e.isExpanded,
                    innerHeight: e.innerHeight
                })
            })))
        }, t
    }(Lo);
    Bd.addPropsEquality({
        rowSpans: jt
    });
    var zd = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.innerInnerRef = xo(), t.onExpanderClick = function () {
                var e = t.props;
                t.context.dispatch({
                    type: "SET_RESOURCE_ENTITY_EXPANDED",
                    id: e.id,
                    isExpanded: !e.isExpanded
                })
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = this.props,
                n = this.context,
                r = {
                    groupValue: t.group.value,
                    view: n.viewApi
                },
                o = t.group.spec;
            return To("tr", null, To(Yo, {
                hookProps: r,
                classNames: o.labelClassNames,
                content: o.labelContent,
                defaultContent: Vd,
                didMount: o.labelDidMount,
                willUnmount: o.labelWillUnmount
            }, (function (r, o, i, a) {
                return To("td", {
                    ref: r,
                    colSpan: t.spreadsheetColCnt,
                    className: ["fc-datagrid-cell", "fc-resource-group", n.theme.getClass("tableCellShaded")].concat(o).join(" ")
                }, To("div", {
                    className: "fc-datagrid-cell-frame",
                    style: {
                        height: t.innerHeight
                    }
                }, To("div", {
                    className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
                    ref: e.innerInnerRef
                }, To(Nd, {
                    depth: 0,
                    hasChildren: !0,
                    isExpanded: t.isExpanded,
                    onExpanderClick: e.onExpanderClick
                }), To("span", {
                    className: "fc-datagrid-cell-main",
                    ref: i
                }, a))))
            })))
        }, t
    }(Lo);

    function Vd(e) {
        return e.groupValue || To(ko, null, " ")
    }
    zd.addPropsEquality({
        group: bd
    });
    var Fd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.resizerElRefs = new Ua(t._handleColResizerEl.bind(t)), t.colDraggings = {}, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = t.colSpecs,
                    r = t.superHeaderRendering,
                    o = t.rowInnerHeights,
                    i = {
                        view: this.context.viewApi
                    },
                    a = [];
                if (o = o.slice(), r) {
                    var s = o.shift();
                    a.push(To("tr", {
                        key: "row-super"
                    }, To(Yo, {
                        hookProps: i,
                        classNames: r.headerClassNames,
                        content: r.headerContent,
                        didMount: r.headerDidMount,
                        willUnmount: r.headerWillUnmount
                    }, (function (e, t, r, o) {
                        return To("th", {
                            colSpan: n.length,
                            ref: e,
                            className: ["fc-datagrid-cell", "fc-datagrid-cell-super"].concat(t).join(" ")
                        }, To("div", {
                            className: "fc-datagrid-cell-frame",
                            style: {
                                height: s
                            }
                        }, To("div", {
                            className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
                            ref: r
                        }, o)))
                    }))))
                }
                var l = o.shift();
                return a.push(To("tr", {
                    key: "row"
                }, n.map((function (t, r) {
                    var o = r === n.length - 1;
                    return To(Yo, {
                        key: r,
                        hookProps: i,
                        classNames: t.headerClassNames,
                        content: t.headerContent,
                        didMount: t.headerDidMount,
                        willUnmount: t.headerWillUnmount
                    }, (function (n, i, a, s) {
                        return To("th", {
                            ref: n,
                            className: ["fc-datagrid-cell"].concat(i).join(" ")
                        }, To("div", {
                            className: "fc-datagrid-cell-frame",
                            style: {
                                height: l
                            }
                        }, To("div", {
                            className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                        }, t.isMain && To("span", {
                            className: "fc-datagrid-expander fc-datagrid-expander-placeholder"
                        }, To("span", {
                            className: "fc-icon"
                        })), To("span", {
                            className: "fc-datagrid-cell-main",
                            ref: a
                        }, s)), !o && To("div", {
                            className: "fc-datagrid-cell-resizer",
                            ref: e.resizerElRefs.createRef(r)
                        })))
                    }))
                })))), To(ko, null, a)
            }, t.prototype._handleColResizerEl = function (e, t) {
                var n, r = this.colDraggings;
                e ? (n = this.initColResizing(e, parseInt(t, 10))) && (r[t] = n) : (n = r[t]) && (n.destroy(), delete r[t])
            }, t.prototype.initColResizing = function (e, t) {
                var n = this.context,
                    r = n.pluginHooks,
                    o = n.isRtl,
                    i = this.props.onColWidthChange,
                    a = r.elementDraggingImpl;
                if (a) {
                    var s, l, u = new a(e);
                    return u.emitter.on("dragstart", (function () {
                        var n = Ce(Ee(e, "tr"), "th");
                        l = n.map((function (e) {
                            return e.getBoundingClientRect().width
                        })), s = l[t]
                    })), u.emitter.on("dragmove", (function (e) {
                        l[t] = Math.max(s + e.deltaX * (o ? -1 : 1), 20), i && i(l.slice())
                    })), u.setAutoScrollEnabled(!1), u
                }
                return null
            }, t
        }(Lo),
        Gd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = {
                        resource: new Xc(t, e.resource)
                    };
                return To(Xo, {
                    hookProps: n,
                    content: t.options.resourceLaneContent
                }, (function (e, t) {
                    return t && To("div", {
                        className: "fc-timeline-lane-misc",
                        ref: e
                    }, t)
                }))
            }, t
        }(Lo),
        jd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.refineHookProps = Yt(qd), t.normalizeClassNames = Jo(), t.handleHeightChange = function (e, n) {
                    t.props.onHeightChange && t.props.onHeightChange(Ee(e, "tr"), n)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = n.options,
                    o = this.refineHookProps({
                        resource: t.resource,
                        context: n
                    }),
                    i = this.normalizeClassNames(r.resourceLaneClassNames, o);
                return To("tr", {
                    ref: t.elRef
                }, To($o, {
                    hookProps: o,
                    didMount: r.resourceLaneDidMount,
                    willUnmount: r.resourceLaneWillUnmount
                }, (function (n) {
                    return To("td", {
                        ref: n,
                        className: ["fc-timeline-lane", "fc-resource"].concat(i).join(" "),
                        "data-resource-id": t.resource.id
                    }, To("div", {
                        className: "fc-timeline-lane-frame",
                        style: {
                            height: t.innerHeight
                        }
                    }, To(Gd, {
                        resource: t.resource
                    }), To(Dc, {
                        dateProfile: t.dateProfile,
                        tDateProfile: t.tDateProfile,
                        nowDate: t.nowDate,
                        todayRange: t.todayRange,
                        nextDayThreshold: t.nextDayThreshold,
                        businessHours: t.businessHours,
                        eventStore: t.eventStore,
                        eventUiBases: t.eventUiBases,
                        dateSelection: t.dateSelection,
                        eventSelection: t.eventSelection,
                        eventDrag: t.eventDrag,
                        eventResize: t.eventResize,
                        timelineCoords: t.timelineCoords,
                        onHeightChange: e.handleHeightChange,
                        resourceId: t.resource.id
                    })))
                })))
            }, t
        }(Lo);

    function qd(e) {
        return {
            resource: new Xc(e.context, e.resource)
        }
    }
    var Yd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.props.renderingHooks,
                    r = {
                        groupValue: t.groupValue,
                        view: this.context.viewApi
                    };
                return To("tr", {
                    ref: t.elRef
                }, To(Yo, {
                    hookProps: r,
                    classNames: n.laneClassNames,
                    content: n.laneContent,
                    didMount: n.laneDidMount,
                    willUnmount: n.laneWillUnmount
                }, (function (n, r, o, i) {
                    return To("td", {
                        ref: n,
                        className: ["fc-timeline-lane", "fc-resource-group", e.context.theme.getClass("tableCellShaded")].concat(r).join(" ")
                    }, To("div", {
                        style: {
                            height: t.innerHeight
                        },
                        ref: o
                    }, i))
                })))
            }, t
        }(Lo),
        Zd = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = e.rowElRefs,
                    o = e.innerHeights;
                return To("tbody", null, e.rowNodes.map((function (i, a) {
                    if (i.group) return To(Yd, {
                        key: i.id,
                        elRef: n.createRef(i.id),
                        groupValue: i.group.value,
                        renderingHooks: i.group.spec,
                        innerHeight: o[a] || ""
                    });
                    if (i.resource) {
                        var s = i.resource;
                        return To(jd, r({
                            key: i.id,
                            elRef: n.createRef(i.id)
                        }, e.splitProps[s.id], {
                            resource: s,
                            dateProfile: e.dateProfile,
                            tDateProfile: e.tDateProfile,
                            nowDate: e.nowDate,
                            todayRange: e.todayRange,
                            nextDayThreshold: t.options.nextDayThreshold,
                            businessHours: s.businessHours || e.fallbackBusinessHours,
                            innerHeight: o[a] || "",
                            timelineCoords: e.slatCoords,
                            onHeightChange: e.onRowHeightChange
                        }))
                    }
                    return null
                })))
            }, t
        }(Lo),
        Xd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rootElRef = xo(), t.rowElRefs = new Ua, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this.props,
                    t = this.context;
                return To("table", {
                    ref: this.rootElRef,
                    className: "fc-scrollgrid-sync-table " + t.theme.getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth,
                        height: e.minHeight
                    }
                }, To(Zd, {
                    rowElRefs: this.rowElRefs,
                    rowNodes: e.rowNodes,
                    dateProfile: e.dateProfile,
                    tDateProfile: e.tDateProfile,
                    nowDate: e.nowDate,
                    todayRange: e.todayRange,
                    splitProps: e.splitProps,
                    fallbackBusinessHours: e.fallbackBusinessHours,
                    slatCoords: e.slatCoords,
                    innerHeights: e.innerHeights,
                    onRowHeightChange: e.onRowHeightChange
                }))
            }, t.prototype.componentDidMount = function () {
                this.updateCoords()
            }, t.prototype.componentDidUpdate = function () {
                this.updateCoords()
            }, t.prototype.componentWillUnmount = function () {
                this.props.onRowCoords && this.props.onRowCoords(null)
            }, t.prototype.updateCoords = function () {
                var e, t = this.props;
                t.onRowCoords && null !== t.clientWidth && this.props.onRowCoords(new Eo(this.rootElRef.current, (e = this.rowElRefs.currentMap, t.rowNodes.map((function (t) {
                    return e[t.id]
                }))), !1, !0))
            }, t
        }(Lo);
    var Kd = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeHasResourceBusinessHours = qt($d), t.resourceSplitter = new Kc, t.bgSlicer = new yc, t.slatsRef = xo(), t.state = {
                slatCoords: null
            }, t.handleEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }, t.handleSlatCoords = function (e) {
                t.setState({
                    slatCoords: e
                }), t.props.onSlatCoords && t.props.onSlatCoords(e)
            }, t.handleRowCoords = function (e) {
                t.rowCoords = e, t.props.onRowCoords && t.props.onRowCoords(e)
            }, t
        }
        return n(t, e), t.prototype.render = function () {
            var e = this,
                t = this,
                n = t.props,
                r = t.state,
                o = t.context,
                i = n.dateProfile,
                a = n.tDateProfile,
                s = Ut(a.slotDuration).unit,
                l = this.computeHasResourceBusinessHours(n.rowNodes),
                u = this.resourceSplitter.splitProps(n),
                c = u[""],
                d = this.bgSlicer.sliceProps(c, i, a.isTimeScale ? null : n.nextDayThreshold, o, i, o.dateProfileGenerator, a, o.dateEnv),
                p = r.slatCoords && r.slatCoords.dateProfile === n.dateProfile ? r.slatCoords : null;
            return To("div", {
                ref: this.handleEl,
                className: ["fc-timeline-body", n.expandRows ? "fc-timeline-body-expandrows" : ""].join(" "),
                style: {
                    minWidth: n.tableMinWidth
                }
            }, To(ba, {
                unit: s
            }, (function (t, r) {
                return To(ko, null, To(gc, {
                    ref: e.slatsRef,
                    dateProfile: i,
                    tDateProfile: a,
                    nowDate: t,
                    todayRange: r,
                    clientWidth: n.clientWidth,
                    tableColGroupNode: n.tableColGroupNode,
                    tableMinWidth: n.tableMinWidth,
                    onCoords: e.handleSlatCoords,
                    onScrollLeftRequest: n.onScrollLeftRequest
                }), To(mc, {
                    businessHourSegs: l ? null : d.businessHourSegs,
                    bgEventSegs: d.bgEventSegs,
                    timelineCoords: p,
                    eventResizeSegs: d.eventResize ? d.eventResize.segs : [],
                    dateSelectionSegs: d.dateSelectionSegs,
                    nowDate: t,
                    todayRange: r
                }), To(Xd, {
                    rowNodes: n.rowNodes,
                    dateProfile: i,
                    tDateProfile: n.tDateProfile,
                    nowDate: t,
                    todayRange: r,
                    splitProps: u,
                    fallbackBusinessHours: l ? n.businessHours : null,
                    clientWidth: n.clientWidth,
                    minHeight: n.expandRows ? n.clientHeight : "",
                    tableMinWidth: n.tableMinWidth,
                    innerHeights: n.rowInnerHeights,
                    slatCoords: p,
                    onRowCoords: e.handleRowCoords,
                    onRowHeightChange: n.onRowHeightChange
                }), o.options.nowIndicator && p && p.isDateInRange(t) && To("div", {
                    className: "fc-timeline-now-indicator-container"
                }, To(rs, {
                    isAxis: !1,
                    date: t
                }, (function (e, n, r, o) {
                    return To("div", {
                        ref: e,
                        className: ["fc-timeline-now-indicator-line"].concat(n).join(" "),
                        style: {
                            left: p.dateToCoord(t)
                        }
                    }, o)
                }))))
            })))
        }, t.prototype.queryHit = function (e, t) {
            var n = this.rowCoords,
                r = n.topToIndex(t);
            if (null != r) {
                var o = this.props.rowNodes[r].resource;
                if (o) {
                    var i = this.slatsRef.current.positionToHit(e);
                    if (i) return {
                        dateProfile: this.props.dateProfile,
                        dateSpan: {
                            range: i.dateSpan.range,
                            allDay: i.dateSpan.allDay,
                            resourceId: o.id
                        },
                        rect: {
                            left: i.left,
                            right: i.right,
                            top: n.tops[r],
                            bottom: n.bottoms[r]
                        },
                        dayEl: i.dayEl,
                        layer: 0
                    }
                }
            }
            return null
        }, t
    }(Vo);

    function $d(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t].resource;
            if (r && r.businessHours) return !0
        }
        return !1
    }
    var Jd = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scrollGridRef = xo(), t.timeBodyScrollerElRef = xo(), t.spreadsheetHeaderChunkElRef = xo(), t.rootElRef = xo(), t.ensureScrollGridResizeId = 0, t.state = {
                    resourceAreaWidthOverride: null
                }, t.ensureScrollGridResize = function () {
                    t.ensureScrollGridResizeId && clearTimeout(t.ensureScrollGridResizeId), t.ensureScrollGridResizeId = setTimeout((function () {
                        t.scrollGridRef.current.handleSizing(!1)
                    }), oa.SCROLLGRID_RESIZE_INTERVAL + 1)
                }, t
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = e.props,
                    n = e.state,
                    r = e.context,
                    o = r.options,
                    i = !t.forPrint && $a(o),
                    a = !t.forPrint && Ja(o),
                    s = [{
                        type: "header",
                        key: "header",
                        syncRowHeights: !0,
                        isSticky: i,
                        chunks: [{
                            key: "datagrid",
                            elRef: this.spreadsheetHeaderChunkElRef,
                            tableClassName: "fc-datagrid-header",
                            rowContent: t.spreadsheetHeaderRows
                        }, {
                            key: "divider",
                            outerContent: To("td", {
                                className: "fc-resource-timeline-divider " + r.theme.getClass("tableCellShaded")
                            })
                        }, {
                            key: "timeline",
                            content: t.timeHeaderContent
                        }]
                    }, {
                        type: "body",
                        key: "body",
                        syncRowHeights: !0,
                        liquid: !0,
                        expandRows: Boolean(o.expandRows),
                        chunks: [{
                            key: "datagrid",
                            tableClassName: "fc-datagrid-body",
                            rowContent: t.spreadsheetBodyRows
                        }, {
                            key: "divider",
                            outerContent: To("td", {
                                className: "fc-resource-timeline-divider " + r.theme.getClass("tableCellShaded")
                            })
                        }, {
                            key: "timeline",
                            scrollerElRef: this.timeBodyScrollerElRef,
                            content: t.timeBodyContent
                        }]
                    }];
                a && s.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "datagrid",
                        content: Ka
                    }, {
                        key: "divider",
                        outerContent: To("td", {
                            className: "fc-resource-timeline-divider " + r.theme.getClass("tableCellShaded")
                        })
                    }, {
                        key: "timeline",
                        content: Ka
                    }]
                });
                var l = null != n.resourceAreaWidthOverride ? n.resourceAreaWidthOverride : o.resourceAreaWidth;
                return To(Nu, {
                    ref: this.scrollGridRef,
                    elRef: this.rootElRef,
                    liquid: !t.isHeightAuto && !t.forPrint,
                    collapsibleWidth: !1,
                    colGroups: [{
                        cols: t.spreadsheetCols,
                        width: l
                    }, {
                        cols: []
                    }, {
                        cols: t.timeCols
                    }],
                    sections: s
                })
            }, t.prototype.forceTimeScroll = function (e) {
                this.scrollGridRef.current.forceScrollLeft(2, e)
            }, t.prototype.forceResourceScroll = function (e) {
                this.scrollGridRef.current.forceScrollTop(1, e)
            }, t.prototype.getResourceScroll = function () {
                return this.timeBodyScrollerElRef.current.scrollTop
            }, t.prototype.componentDidMount = function () {
                this.initSpreadsheetResizing()
            }, t.prototype.componentWillUnmount = function () {
                this.destroySpreadsheetResizing()
            }, t.prototype.initSpreadsheetResizing = function () {
                var e = this,
                    t = this.context,
                    n = t.isRtl,
                    r = t.pluginHooks.elementDraggingImpl,
                    o = this.spreadsheetHeaderChunkElRef.current;
                if (r) {
                    var i, a, s = this.rootElRef.current,
                        l = this.spreadsheetResizerDragging = new r(s, ".fc-resource-timeline-divider");
                    l.emitter.on("dragstart", (function () {
                        i = o.getBoundingClientRect().width, a = s.getBoundingClientRect().width
                    })), l.emitter.on("dragmove", (function (t) {
                        var r = i + t.deltaX * (n ? -1 : 1);
                        r = Math.max(r, 30), r = Math.min(r, a - 30), e.setState({
                            resourceAreaWidthOverride: r
                        }, e.ensureScrollGridResize)
                    })), l.setAutoScrollEnabled(!1)
                }
            }, t.prototype.destroySpreadsheetResizing = function () {
                this.spreadsheetResizerDragging && this.spreadsheetResizerDragging.destroy()
            }, t
        }(Lo),
        Qd = function (e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return r.processColOptions = qt(rp), r.buildTimelineDateProfile = qt(ec), r.hasNesting = qt(np), r.buildRowNodes = qt(gd), r.layoutRef = xo(), r.rowNodes = [], r.renderedRowNodes = [], r.buildRowIndex = qt(ep), r.handleSlatCoords = function (e) {
                    r.setState({
                        slatCoords: e
                    })
                }, r.handleRowCoords = function (e) {
                    r.rowCoords = e, r.scrollResponder.update(!1)
                }, r.handleMaxCushionWidth = function (e) {
                    r.setState({
                        slotCushionMaxWidth: Math.ceil(e)
                    })
                }, r.handleScrollLeftRequest = function (e) {
                    r.layoutRef.current.forceTimeScroll(e)
                }, r.handleScrollRequest = function (e) {
                    var t = r.rowCoords,
                        n = r.layoutRef.current,
                        o = e.rowId || e.resourceId;
                    if (t) {
                        if (o) {
                            var i = r.buildRowIndex(r.renderedRowNodes)[o];
                            if (null != i) {
                                var a = null != e.fromBottom ? t.bottoms[i] - e.fromBottom : t.tops[i];
                                n.forceResourceScroll(a)
                            }
                        }
                        return !0
                    }
                    return null
                }, r.handleColWidthChange = function (e) {
                    r.setState({
                        spreadsheetColWidths: e
                    })
                }, r.state = {
                    resourceAreaWidth: n.options.resourceAreaWidth,
                    spreadsheetColWidths: []
                }, r
            }
            return n(t, e), t.prototype.render = function () {
                var e = this,
                    t = this,
                    n = t.props,
                    r = t.state,
                    o = t.context,
                    i = o.options,
                    a = o.viewSpec,
                    s = this.processColOptions(o.options),
                    l = s.superHeaderRendering,
                    u = s.groupSpecs,
                    c = s.orderSpecs,
                    d = s.isVGrouping,
                    p = s.colSpecs,
                    f = this.buildTimelineDateProfile(n.dateProfile, o.dateEnv, i, o.dateProfileGenerator),
                    h = this.rowNodes = this.buildRowNodes(n.resourceStore, u, c, d, n.resourceEntityExpansions, i.resourcesInitiallyExpanded),
                    v = ["fc-resource-timeline", this.hasNesting(h) ? "" : "fc-resource-timeline-flat", "fc-timeline", !1 === i.eventOverlap ? "fc-timeline-overlap-disabled" : "fc-timeline-overlap-enabled"],
                    g = i.slotMinWidth,
                    m = Tc(f, g || this.computeFallbackSlotMinWidth(f));
                return To(ti, {
                    viewSpec: a
                }, (function (t, i) {
                    return To("div", {
                        ref: t,
                        className: v.concat(i).join(" ")
                    }, To(Jd, {
                        ref: e.layoutRef,
                        forPrint: n.forPrint,
                        isHeightAuto: n.isHeightAuto,
                        spreadsheetCols: tp(p, r.spreadsheetColWidths, ""),
                        spreadsheetHeaderRows: function (t) {
                            return To(Fd, {
                                superHeaderRendering: l,
                                colSpecs: p,
                                onColWidthChange: e.handleColWidthChange,
                                rowInnerHeights: t.rowSyncHeights
                            })
                        },
                        spreadsheetBodyRows: function (t) {
                            return To(ko, null, e.renderSpreadsheetRows(h, p, t.rowSyncHeights))
                        },
                        timeCols: m,
                        timeHeaderContent: function (t) {
                            return To(dc, {
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                tableMinWidth: t.tableMinWidth,
                                tableColGroupNode: t.tableColGroupNode,
                                dateProfile: n.dateProfile,
                                tDateProfile: f,
                                slatCoords: r.slatCoords,
                                rowInnerHeights: t.rowSyncHeights,
                                onMaxCushionWidth: g ? null : e.handleMaxCushionWidth
                            })
                        },
                        timeBodyContent: function (t) {
                            return To(Kd, {
                                dateProfile: n.dateProfile,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                tableMinWidth: t.tableMinWidth,
                                tableColGroupNode: t.tableColGroupNode,
                                expandRows: t.expandRows,
                                tDateProfile: f,
                                rowNodes: h,
                                businessHours: n.businessHours,
                                dateSelection: n.dateSelection,
                                eventStore: n.eventStore,
                                eventUiBases: n.eventUiBases,
                                eventSelection: n.eventSelection,
                                eventDrag: n.eventDrag,
                                eventResize: n.eventResize,
                                resourceStore: n.resourceStore,
                                nextDayThreshold: o.options.nextDayThreshold,
                                rowInnerHeights: t.rowSyncHeights,
                                onSlatCoords: e.handleSlatCoords,
                                onRowCoords: e.handleRowCoords,
                                onScrollLeftRequest: e.handleScrollLeftRequest,
                                onRowHeightChange: t.reportRowHeightChange
                            })
                        }
                    }))
                }))
            }, t.prototype.renderSpreadsheetRows = function (e, t, n) {
                return e.map((function (e, r) {
                    return e.group ? To(zd, {
                        key: e.id,
                        id: e.id,
                        spreadsheetColCnt: t.length,
                        isExpanded: e.isExpanded,
                        group: e.group,
                        innerHeight: n[r] || ""
                    }) : e.resource ? To(Bd, {
                        key: e.id,
                        colSpecs: t,
                        rowSpans: e.rowSpans,
                        depth: e.depth,
                        isExpanded: e.isExpanded,
                        hasChildren: e.hasChildren,
                        resource: e.resource,
                        innerHeight: n[r] || ""
                    }) : null
                }))
            }, t.prototype.componentDidMount = function () {
                this.renderedRowNodes = this.rowNodes, this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
            }, t.prototype.getSnapshotBeforeUpdate = function () {
                return this.props.forPrint ? {} : {
                    resourceScroll: this.queryResourceScroll()
                }
            }, t.prototype.componentDidUpdate = function (e, t, n) {
                this.renderedRowNodes = this.rowNodes, this.scrollResponder.update(e.dateProfile !== this.props.dateProfile), n.resourceScroll && this.handleScrollRequest(n.resourceScroll)
            }, t.prototype.componentWillUnmount = function () {
                this.scrollResponder.detach()
            }, t.prototype.computeFallbackSlotMinWidth = function (e) {
                return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
            }, t.prototype.queryResourceScroll = function () {
                var e = this.rowCoords,
                    t = this.renderedRowNodes;
                if (e) {
                    for (var n = this.layoutRef.current, r = e.bottoms, o = n.getResourceScroll(), i = {}, a = 0; a < r.length; a += 1) {
                        var s = t[a],
                            l = r[a] - o;
                        if (l > 0) {
                            i.rowId = s.id, i.fromBottom = l;
                            break
                        }
                    }
                    return i
                }
                return null
            }, t
        }(Lo);

    function ep(e) {
        for (var t = {}, n = 0; n < e.length; n += 1) t[e[n].id] = n;
        return t
    }

    function tp(e, t, n) {
        return void 0 === n && (n = ""), e.map((function (e, r) {
            return {
                className: e.isMain ? "fc-main-col" : "",
                width: t[r] || e.width || n
            }
        }))
    }

    function np(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t];
            if (r.group) return !0;
            if (r.resource && r.hasChildren) return !0
        }
        return !1
    }

    function rp(e) {
        var t = e.resourceAreaColumns || [],
            n = null;
        t.length ? e.resourceAreaHeaderContent && (n = {
            headerClassNames: e.resourceAreaHeaderClassNames,
            headerContent: e.resourceAreaHeaderContent,
            headerDidMount: e.resourceAreaHeaderDidMount,
            headerWillUnmount: e.resourceAreaHeaderWillUnmount
        }) : t.push({
            headerClassNames: e.resourceAreaHeaderClassNames,
            headerContent: e.resourceAreaHeaderContent || "Resources",
            headerDidMount: e.resourceAreaHeaderDidMount,
            headerWillUnmount: e.resourceAreaHeaderWillUnmount
        });
        for (var o = [], i = [], a = [], s = !1, l = 0, u = t; l < u.length; l++) {
            var c = u[l];
            c.group ? i.push(r(r({}, c), {
                cellClassNames: c.cellClassNames || e.resourceGroupLabelClassNames,
                cellContent: c.cellContent || e.resourceGroupLabelContent,
                cellDidMount: c.cellDidMount || e.resourceGroupLabelDidMount,
                cellWillUnmount: c.cellWillUnmount || e.resourceGroupLaneWillUnmount
            })) : o.push(c)
        }
        var d = o[0];
        if (d.isMain = !0, d.cellClassNames = d.cellClassNames || e.resourceLabelClassNames, d.cellContent = d.cellContent || e.resourceLabelContent, d.cellDidMount = d.cellDidMount || e.resourceLabelDidMount, d.cellWillUnmount = d.cellWillUnmount || e.resourceLabelWillUnmount, i.length) a = i, s = !0;
        else {
            var p = e.resourceGroupField;
            p && a.push({
                field: p,
                labelClassNames: e.resourceGroupLabelClassNames,
                labelContent: e.resourceGroupLabelContent,
                labelDidMount: e.resourceGroupLabelDidMount,
                labelWillUnmount: e.resourceGroupLabelWillUnmount,
                laneClassNames: e.resourceGroupLaneClassNames,
                laneContent: e.resourceGroupLaneContent,
                laneDidMount: e.resourceGroupLaneDidMount,
                laneWillUnmount: e.resourceGroupLaneWillUnmount
            })
        }
        for (var f = [], h = 0, v = e.resourceOrder || ed; h < v.length; h++) {
            for (var g = v[h], m = !1, y = 0, S = a; y < S.length; y++) {
                var E = S[y];
                if (E.field === g.field) {
                    E.order = g.order, m = !0;
                    break
                }
            }
            m || f.push(g)
        }
        return {
            superHeaderRendering: n,
            isVGrouping: s,
            groupSpecs: a,
            colSpecs: i.concat(o),
            orderSpecs: f
        }
    }
    Qd.addStateEquality({
        spreadsheetColWidths: jt
    });
    var op = Fo({
        deps: [Du, Cd, _c],
        initialView: "resourceTimelineDay",
        views: {
            resourceTimeline: {
                type: "timeline",
                component: Qd,
                needsResourceData: !0,
                resourceAreaWidth: "30%",
                resourcesInitiallyExpanded: !0,
                eventResizableFromStart: !0
            },
            resourceTimelineDay: {
                type: "resourceTimeline",
                duration: {
                    days: 1
                }
            },
            resourceTimelineWeek: {
                type: "resourceTimeline",
                duration: {
                    weeks: 1
                }
            },
            resourceTimelineMonth: {
                type: "resourceTimeline",
                duration: {
                    months: 1
                }
            },
            resourceTimelineYear: {
                type: "resourceTimeline",
                duration: {
                    years: 1
                }
            }
        }
    });
    return xi.push(Xs, bl, ru, hu, gu, yu, ju, Zu, _c, Cd, _d, Id, op), e.AbstractResourceDayTableModel = ud, e.BASE_OPTION_DEFAULTS = pn, e.BASE_OPTION_REFINERS = dn, e.BaseComponent = Lo, e.BgEvent = us, e.BootstrapTheme = vu, e.Calendar = bs, e.CalendarApi = kr, e.CalendarContent = pa, e.CalendarDataManager = Hi, e.CalendarDataProvider = ji, e.CalendarRoot = va, e.Component = wo, e.ContentHook = Xo, e.CustomContentRenderContext = Zo, e.DEFAULT_RESOURCE_ORDER = ed, e.DateComponent = Vo, e.DateEnv = Lr, e.DateProfileGenerator = ai, e.DayCellContent = is, e.DayCellRoot = ss, e.DayGridView = Sl, e.DayHeader = Da, e.DayResourceTableModel = dd, e.DaySeriesModel = wa, e.DayTable = yl, e.DayTableModel = Ta, e.DayTableSlicer = ml, e.DayTimeCols = $l, e.DayTimeColsSlicer = Kl, e.DayTimeColsView = tu, e.DelayedRunner = Pi, e.Draggable = qs, e.ElementDragging = ra, e.ElementScrollController = Co, e.Emitter = So, e.EventApi = Mr, e.EventRoot = es, e.EventSourceApi = ye, e.FeaturefulElementDragging = Ns, e.Fragment = ko, e.Interaction = Qi, e.ListView = cu, e.MoreLinkRoot = vs, e.MountHook = $o, e.NamedTimeZoneImpl = qi, e.NowIndicatorRoot = rs, e.NowTimer = ba, e.PointerDragging = ws, e.PositionCache = Eo, e.RefMap = Ua, e.RenderHook = Yo, e.ResourceApi = Xc, e.ResourceDayHeader = ad, e.ResourceDayTable = Rd, e.ResourceDayTableModel = cd, e.ResourceDayTableView = wd, e.ResourceDayTimeCols = kd, e.ResourceDayTimeColsView = Md, e.ResourceLabelRoot = rd, e.ResourceSplitter = Kc, e.ResourceTimelineLane = jd, e.ResourceTimelineView = Qd, e.ScrollController = bo, e.ScrollGrid = Nu, e.ScrollResponder = Ho, e.Scroller = La, e.SegHierarchy = Yi, e.SimpleScrollGrid = Qa, e.Slicer = _a, e.Splitter = no, e.SpreadsheetRow = Bd, e.StandardEvent = ts, e.Table = vl, e.TableDateCell = Sa, e.TableDowCell = Ea, e.TableView = Ks, e.Theme = Ro, e.ThirdPartyDraggable = Zs, e.TimeCols = Zl, e.TimeColsSlatsCoords = Ml, e.TimeColsView = xl, e.TimelineCoords = pc, e.TimelineHeader = dc, e.TimelineHeaderRows = cc, e.TimelineLane = Dc, e.TimelineLaneBg = mc, e.TimelineLaneSlicer = yc, e.TimelineSlats = gc, e.TimelineView = wc, e.VResourceJoiner = fd, e.VResourceSplitter = hd, e.ViewApi = Rr, e.ViewContextType = Oo, e.ViewRoot = ti, e.WeekNumberRoot = ds, e.WindowScrollController = Do, e.addDays = $e, e.addDurations = It, e.addMs = Je, e.addWeeks = Ke, e.allowContextMenu = Be, e.allowSelection = Le, e.applyMutationToEventStore = br, e.applyStyle = we, e.applyStyleProp = Te, e.asCleanDays = Pt, e.asRoughMinutes = Ot, e.asRoughMs = Wt, e.asRoughSeconds = At, e.binarySearch = Ji, e.buildClassNameNormalizer = Jo, e.buildDayRanges = Jl, e.buildDayTableModel = El, e.buildEntryKey = Xi, e.buildEventApis = Ir, e.buildEventRangeKey = dr, e.buildHashFromArray = function (e, t) {
        for (var n = {}, r = 0; r < e.length; r += 1) {
            var o = t(e[r], r);
            n[o[0]] = o[1]
        }
        return n
    }, e.buildIsoString = Bt, e.buildNavLinkData = so, e.buildResourceFields = Ed, e.buildRowNodes = gd, e.buildSegCompareObj = or, e.buildSegTimeText = lr, e.buildSlatCols = Tc, e.buildSlatMetas = eu, e.buildTimeColsModel = nu, e.buildTimelineDateProfile = ec, e.collectFromHash = Rt, e.combineEventUis = Pn, e.compareByFieldSpec = Fe, e.compareByFieldSpecs = Ve, e.compareNumbers = qe, e.compareObjs = Ct, e.computeEarliestSegStart = ys, e.computeEdges = ho, e.computeFallbackHeaderFormat = ga, e.computeHeightAndMargins = function (e) {
        return e.getBoundingClientRect().height + function (e) {
            var t = window.getComputedStyle(e);
            return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
        }(e)
    }, e.computeInnerRect = vo, e.computeRect = go, e.computeSegDraggable = ir, e.computeSegEndResizable = sr, e.computeSegStartResizable = ar, e.computeShrinkWidth = Ba, e.computeSmallestCellWidth = Ze, e.computeVisibleDayRange = zn, e.config = oa, e.constrainPoint = $r, e.createContext = Mo, e.createDuration = kt, e.createElement = To, e.createEmptyEventStore = Rn, e.createEventInstance = ft, e.createEventUi = Mn, e.createFormatter = cn, e.createPlugin = Fo, e.createPortal = Po, e.createRef = xo, e.diffDates = Fn, e.diffDayAndTime = tt, e.diffDays = et, e.diffPoints = Qr, e.diffWeeks = Qe, e.diffWholeDays = rt, e.diffWholeWeeks = nt, e.disableCursor = Oe, e.elementClosest = Ee, e.elementMatches = be, e.enableCursor = Ae, e.eventTupleToStore = Cn, e.filterEventStoreDefs = Tn, e.filterHash = gt, e.findDirectChildren = De, e.findElements = Ce, e.flattenResources = vd, e.flexibleCompare = Ge, e.flushToDom = Io, e.formatDate = function (e, t) {
        void 0 === t && (t = {});
        var n = Gr(t),
            r = cn(t),
            o = n.createMarkerMeta(e);
        return o ? n.format(o.marker, r, {
            forcedTzo: o.forcedTzo
        }) : ""
    }, e.formatDayString = zt, e.formatIsoTimeString = Vt, e.formatRange = function (e, t, n) {
        var r = Gr("object" == typeof n && n ? n : {}),
            o = cn(n),
            i = r.createMarkerMeta(e),
            a = r.createMarkerMeta(t);
        return i && a ? r.formatRange(i.marker, a.marker, o, {
            forcedStartTzo: i.forcedTzo,
            forcedEndTzo: a.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: pn.defaultRangeSeparator
        }) : ""
    }, e.getAllowYScrolling = Va, e.getCanVGrowWithinCell = eo, e.getClippingParents = mo, e.getDateMeta = oo, e.getDayClassNames = io, e.getDefaultEventEnd = Er, e.getElSeg = er, e.getEntrySpanEnd = Zi, e.getEventClassNames = cr, e.getIsRtlScrollbarOnLeft = co, e.getPublicId = qc, e.getRectCenter = Jr, e.getRelevantEvents = Dn, e.getScrollGridClassNames = Za, e.getScrollbarWidths = po, e.getSectionClassNames = Xa, e.getSectionHasLiquidHeight = za, e.getSegMeta = ur, e.getSlotClassNames = ao, e.getStickyFooterScrollbar = Ja, e.getStickyHeaderDates = $a, e.getUnequalProps = bt, e.globalLocales = Ur, e.globalPlugins = xi, e.greatestDurationDenominator = Ut, e.groupIntersectingEntries = Ki, e.guid = He, e.hasBgRendering = Jn, e.hasShrinkWidth = Ya, e.identity = En, e.interactionSettingsStore = na, e.interactionSettingsToStore = ta, e.intersectRanges = qn, e.intersectRects = Xr, e.isArraysEqual = jt, e.isColPropsEqual = Ga, e.isDateSelectionValid = Ma, e.isDateSpansEqual = hr, e.isGroupsEqual = bd, e.isInt = Ye, e.isInteractionValid = ka, e.isMultiDayRange = Vn, e.isPropsEqual = Et, e.isPropsValid = Ia, e.isValidDate = dt, e.listenBySelector = Me, e.mapHash = mt, e.memoize = qt, e.memoizeArraylike = Zt, e.memoizeHashlike = Xt, e.memoizeObjArg = Yt, e.mergeEventStores = wn, e.multiplyDuration = Nt, e.padStart = je, e.parseBusinessHours = Yr, e.parseClassNames = _n, e.parseDragMeta = aa, e.parseEventDef = Un, e.parseFieldSpecs = ze, e.parseMarker = Wr, e.pointInsideRect = Zr, e.preventContextMenu = Ue, e.preventDefault = xe, e.preventSelection = We, e.rangeContainsMarker = Kn, e.rangeContainsRange = Xn, e.rangesEqual = Yn, e.rangesIntersect = Zn, e.refineEventDef = Wn, e.refineProps = Sn, e.removeElement = Se, e.removeExact = Gt, e.render = _o, e.renderChunkContent = Fa, e.renderFill = ls, e.renderMicroColGroup = ja, e.renderScrollShim = Ka, e.requestJson = wi, e.sanitizeShrinkWidth = qa, e.setElSeg = Qn, e.setRef = zo, e.setScrollFromStartingEdge = _u, e.sliceEventStore = $n, e.sliceEvents = function (e, t) {
        return $n(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg
    }, e.sortEventSegs = rr, e.startOfDay = ot, e.translateRect = Kr, e.triggerDateSelect = yr, e.unmountComponentAtNode = No, e.unpromisify = yo, e.version = "5.7.2", e.whenTransitionDone = Ie, e.wholeDivideDurations = Lt, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
}({});
