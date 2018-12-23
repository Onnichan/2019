! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (S, t) {
    function s(t) {
        var e = !!t && "length" in t && t.length,
            n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function e(t, n, i) {
        if (ft.isFunction(n)) return ft.grep(t, function (t, e) {
            return !!n.call(t, e, t) !== i
        });
        if (n.nodeType) return ft.grep(t, function (t) {
            return t === n !== i
        });
        if ("string" == typeof n) {
            if (St.test(n)) return ft.filter(n, t, i);
            n = ft.filter(n, t)
        }
        return ft.grep(t, function (t) {
            return -1 < ft.inArray(t, n) !== i
        })
    }

    function n(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function c(t) {
        var n = {};
        return ft.each(t.match(Et) || [], function (t, e) {
            n[e] = !0
        }), n
    }

    function o() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", r), S.removeEventListener("load", r)) : (it.detachEvent("onreadystatechange", r), S.detachEvent("onload", r))
    }

    function r() {
        (it.addEventListener || "load" === S.event.type || "complete" === it.readyState) && (o(), ft.ready())
    }

    function l(t, e, n) {
        if (n === undefined && 1 === t.nodeType) {
            var i = "data-" + e.replace(Bt, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Mt.test(n) ? ft.parseJSON(n) : n)
                } catch (o) {}
                ft.data(t, e, n)
            } else n = undefined
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function i(t, e, n, i) {
        if (It(t)) {
            var o, r, a = ft.expando,
                s = t.nodeType,
                l = s ? ft.cache : t,
                u = s ? t[a] : t[a] && a;
            if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof e) return u || (u = s ? t[a] = nt.pop() || ft.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: ft.noop
            }), "object" != typeof e && "function" != typeof e || (i ? l[u] = ft.extend(l[u], e) : l[u].data = ft.extend(l[u].data, e)), r = l[u], i || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[ft.camelCase(e)] = n), "string" == typeof e ? null == (o = r[e]) && (o = r[ft.camelCase(e)]) : o = r, o
        }
    }

    function a(t, e, n) {
        if (It(t)) {
            var i, o, r = t.nodeType,
                a = r ? ft.cache : t,
                s = r ? t[ft.expando] : ft.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    o = (e = ft.isArray(e) ? e.concat(ft.map(e, ft.camelCase)) : e in i ? [e] : (e = ft.camelCase(e)) in i ? [e] : e.split(" ")).length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !u(i) : !ft.isEmptyObject(i)) return
                }(n || (delete a[s].data, u(a[s]))) && (r ? ft.cleanData([t], !0) : ht.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    function h(t, e, n, i) {
        var o, r = 1,
            a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return ft.css(t, e, "")
            },
            l = s(),
            u = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
            c = (ft.cssNumber[e] || "px" !== u && +l) && Ot.exec(ft.css(t, e));
        if (c && c[3] !== u)
            for (u = u || c[3], n = n || [], c = +l || 1; c /= r = r || ".5", ft.style(t, e, c + u), r !== (r = s() / l) && 1 !== r && --a;);
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }

    function g(t) {
        var e = Vt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function v(t, e) {
        var n, i, o = 0,
            r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!r)
            for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || ft.nodeName(i, e) ? r.push(i) : ft.merge(r, v(i, e));
        return e === undefined || e && ft.nodeName(t, e) ? ft.merge([t], r) : r
    }

    function y(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
    }

    function _(t) {
        qt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function m(t, e, n, i, o) {
        for (var r, a, s, l, u, c, h, d = t.length, f = g(e), p = [], m = 0; m < d; m++)
            if ((a = t[m]) || 0 === a)
                if ("object" === ft.type(a)) ft.merge(p, a.nodeType ? [a] : a);
                else if (Qt.test(a)) {
            for (l = l || f.appendChild(e.createElement("div")), u = (Wt.exec(a) || ["", ""])[1].toLowerCase(), h = Gt[u] || Gt._default, l.innerHTML = h[1] + ft.htmlPrefilter(a) + h[2], r = h[0]; r--;) l = l.lastChild;
            if (!ht.leadingWhitespace && Ut.test(a) && p.push(e.createTextNode(Ut.exec(a)[0])), !ht.tbody)
                for (r = (a = "table" !== u || Kt.test(a) ? "<table>" !== h[1] || Kt.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; r--;) ft.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (ft.merge(p, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = f.lastChild
        } else p.push(e.createTextNode(a));
        for (l && f.removeChild(l), ht.appendChecked || ft.grep(v(p, "input"), _), m = 0; a = p[m++];)
            if (i && -1 < ft.inArray(a, i)) o && o.push(a);
            else if (s = ft.contains(a.ownerDocument, a), l = v(f.appendChild(a), "script"), s && y(l), n)
            for (r = 0; a = l[r++];) Zt.test(a.type || "") && n.push(a);
        return l = null, f
    }

    function d() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return it.activeElement
        } catch (t) {}
    }

    function b(t, e, n, i, o, r) {
        var a, s;
        if ("object" == typeof e) {
            for (s in "string" != typeof n && (i = i || n, n = undefined), e) b(t, s, n, i, e[s], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = undefined) : null == o && ("string" == typeof n ? (o = i, i = undefined) : (o = i, i = n, n = undefined)), !1 === o) o = f;
        else if (!o) return t;
        return 1 === r && (a = o, (o = function (t) {
            return ft().off(t), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = ft.guid++)), t.each(function () {
            ft.event.add(this, e, o, i, n)
        })
    }

    function x(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function w(t) {
        return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
    }

    function T(t) {
        var e = se.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function C(t, e) {
        if (1 === e.nodeType && ft.hasData(t)) {
            var n, i, o, r = ft._data(t),
                a = ft._data(e, r),
                s = r.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (i = 0, o = s[n].length; i < o; i++) ft.event.add(e, n, s[n][i]);
            a.data && (a.data = ft.extend({}, a.data))
        }
    }

    function k(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ht.noCloneEvent && e[ft.expando]) {
                for (i in (o = ft._data(e)).events) ft.removeEvent(e, i, o.handle);
                e.removeAttribute(ft.expando)
            }
            "script" === n && e.text !== t.text ? (w(e).text = t.text, T(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ht.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && qt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function L(n, i, o, r) {
        i = rt.apply([], i);
        var t, e, a, s, l, u, c = 0,
            h = n.length,
            d = h - 1,
            f = i[0],
            p = ft.isFunction(f);
        if (p || 1 < h && "string" == typeof f && !ht.checkClone && ae.test(f)) return n.each(function (t) {
            var e = n.eq(t);
            p && (i[0] = f.call(this, t, e.html())), L(e, i, o, r)
        });
        if (h && (t = (u = m(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === u.childNodes.length && (u = t), t || r)) {
            for (a = (s = ft.map(v(u, "script"), w)).length; c < h; c++) e = u, c !== d && (e = ft.clone(e, !0, !0), a && ft.merge(s, v(e, "script"))), o.call(n[c], e, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, ft.map(s, T), c = 0; c < a; c++) e = s[c], Zt.test(e.type || "") && !ft._data(e, "globalEval") && ft.contains(l, e) && (e.src ? ft._evalUrl && ft._evalUrl(e.src) : ft.globalEval((e.text || e.textContent || e.innerHTML || "").replace(le, "")));
            u = t = null
        }
        return n
    }

    function D(t, e, n) {
        for (var i, o = e ? ft.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ft.cleanData(v(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function P(t, e) {
        var n = ft(e.createElement(t)).appendTo(e.body),
            i = ft.css(n[0], "display");
        return n.detach(), i
    }

    function E(t) {
        var e = it,
            n = he[t];
        return n || ("none" !== (n = P(t, e)) && n || ((e = ((ce = (ce || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || ce[0].contentDocument).document).write(), e.close(), n = P(t, e), ce.detach()), he[t] = n), n
    }

    function A(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function I(t) {
        if (t in ke) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;)
            if ((t = Ce[n] + e) in ke) return t
    }

    function M(t, e) {
        for (var n, i, o, r = [], a = 0, s = t.length; a < s; a++)(i = t[a]).style && (r[a] = ft._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $t(i) && (r[a] = ft._data(i, "olddisplay", E(i.nodeName)))) : (o = $t(i), (n && "none" !== n || !o) && ft._data(i, "olddisplay", o ? n : ft.css(i, "display"))));
        for (a = 0; a < s; a++)(i = t[a]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
        return t
    }

    function B(t, e, n) {
        var i = we.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function R(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += ft.css(t, n + Ft[r], !0, o)), i ? ("content" === n && (a -= ft.css(t, "padding" + Ft[r], !0, o)), "margin" !== n && (a -= ft.css(t, "border" + Ft[r] + "Width", !0, o))) : (a += ft.css(t, "padding" + Ft[r], !0, o), "padding" !== n && (a += ft.css(t, "border" + Ft[r] + "Width", !0, o)));
        return a
    }

    function j(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ge(t),
            a = ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = ve(t, e, r)) < 0 || null == o) && (o = t.style[e]), fe.test(o)) return o;
            i = a && (ht.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + R(t, e, n || (a ? "border" : "content"), i, r) + "px"
    }

    function N(t, e, n, i, o) {
        return new N.prototype.init(t, e, n, i, o)
    }

    function z() {
        return S.setTimeout(function () {
            Le = undefined
        }), Le = ft.now()
    }

    function O(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; o < 4; o += 2 - e) i["margin" + (n = Ft[o])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function F(t, e, n) {
        for (var i, o = (q.tweeners[e] || []).concat(q.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function $(e, t, n) {
        var i, o, r, a, s, l, u, c = this,
            h = {},
            d = e.style,
            f = e.nodeType && $t(e),
            p = ft._data(e, "fxshow");
        for (i in n.queue || (null == (s = ft._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, c.always(function () {
                c.always(function () {
                    s.unqueued--, ft.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (u = ft.css(e, "display")) ? ft._data(e, "olddisplay") || E(e.nodeName) : u) && "none" === ft.css(e, "float") && (ht.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ht.shrinkWrapBlocks() || c.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            })), t)
            if (o = t[i], Be.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !p || p[i] === undefined) continue;
                    f = !0
                }
                h[i] = p && p[i] || ft.style(e, i)
            } else u = undefined;
        if (ft.isEmptyObject(h)) "inline" === ("none" === u ? E(e.nodeName) : u) && (d.display = u);
        else
            for (i in p ? "hidden" in p && (f = p.hidden) : p = ft._data(e, "fxshow", {}), r && (p.hidden = !f), f ? ft(e).show() : c.done(function () {
                    ft(e).hide()
                }), c.done(function () {
                    var t;
                    for (t in ft._removeData(e, "fxshow"), h) ft.style(e, t, h[t])
                }), h) a = F(f ? p[i] : 0, i, c), i in p || (p[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
    }

    function H(t, e) {
        var n, i, o, r, a;
        for (n in t)
            if (o = e[i = ft.camelCase(n)], r = t[n], ft.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (a = ft.cssHooks[i]) && "expand" in a)
                for (n in r = a.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
            else e[i] = o
    }

    function q(r, t, e) {
        var n, a, i = 0,
            o = q.prefilters.length,
            s = ft.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (a) return !1;
                for (var t = Le || z(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(n);
                return s.notifyWith(r, [u, n, e]), n < 1 && o ? e : (s.resolveWith(r, [u]), !1)
            },
            u = s.promise({
                elem: r,
                props: ft.extend({}, t),
                opts: ft.extend(!0, {
                    specialEasing: {},
                    easing: ft.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Le || z(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var n = ft.Tween(r, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (t) {
                    var e = 0,
                        n = t ? u.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; e < n; e++) u.tweens[e].run(1);
                    return t ? (s.notifyWith(r, [u, 1, 0]), s.resolveWith(r, [u, t])) : s.rejectWith(r, [u, t]), this
                }
            }),
            c = u.props;
        for (H(c, u.opts.specialEasing); i < o; i++)
            if (n = q.prefilters[i].call(u, r, c, u.opts)) return ft.isFunction(n.stop) && (ft._queueHooks(u.elem, u.opts.queue).stop = ft.proxy(n.stop, n)), n;
        return ft.map(c, F, u), ft.isFunction(u.opts.start) && u.opts.start.call(r, u), ft.fx.timer(ft.extend(l, {
            elem: r,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(t) {
        return ft.attr(t, "class") || ""
    }

    function Z(r) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, i = 0,
                o = t.toLowerCase().match(Et) || [];
            if (ft.isFunction(e))
                for (; n = o[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e)
        }
    }

    function U(e, o, r, a) {
        function s(t) {
            var i;
            return l[t] = !0, ft.each(e[t] || [], function (t, e) {
                var n = e(o, r, a);
                return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (o.dataTypes.unshift(n), s(n), !1)
            }), i
        }
        var l = {},
            u = e === an;
        return s(o.dataTypes[0]) || !l["*"] && s("*")
    }

    function V(t, e) {
        var n, i, o = ft.ajaxSettings.flatOptions || {};
        for (i in e) e[i] !== undefined && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ft.extend(!0, t, n), t
    }

    function G(t, e, n) {
        for (var i, o, r, a, s = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), o === undefined && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function Q(t, e, n, i) {
        var o, r, a, s, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(a = u[l + " " + r] || u["* " + r]))
                for (o in u)
                    if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        !0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && t["throws"]) e = a(e);
                else try {
                    e = a(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: a ? h : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function K(t) {
        return t.style && t.style.display || ft.css(t, "display")
    }

    function X(t) {
        if (!ft.contains(t.ownerDocument || it, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === K(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function J(n, t, i, o) {
        var e;
        if (ft.isArray(t)) ft.each(t, function (t, e) {
            i || hn.test(n) ? o(n, e) : J(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, o)
        });
        else if (i || "object" !== ft.type(t)) o(n, t);
        else
            for (e in t) J(n + "[" + e + "]", t[e], i, o)
    }

    function Y() {
        try {
            return new S.XMLHttpRequest
        } catch (t) {}
    }

    function tt() {
        try {
            return new S.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function et(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
        it = S.document,
        ot = nt.slice,
        rt = nt.concat,
        at = nt.push,
        st = nt.indexOf,
        lt = {},
        ut = lt.toString,
        ct = lt.hasOwnProperty,
        ht = {},
        dt = "1.12.4",
        ft = function (t, e) {
            return new ft.fn.init(t, e)
        },
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        gt = /-([\da-z])/gi,
        vt = function (t, e) {
            return e.toUpperCase()
        };
    ft.fn = ft.prototype = {
        jquery: dt,
        constructor: ft,
        selector: "",
        length: 0,
        toArray: function () {
            return ot.call(this)
        },
        get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : ot.call(this)
        },
        pushStack: function (t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t) {
            return ft.each(this, t)
        },
        map: function (n) {
            return this.pushStack(ft.map(this, function (t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice
    }, ft.extend = ft.fn.extend = function (t) {
        var e, n, i, o, r, a, s = t || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" == typeof s || ft.isFunction(s) || (s = {}), l === u && (s = this, l--); l < u; l++)
            if (null != (r = arguments[l]))
                for (o in r) e = s[o], s !== (i = r[o]) && (c && i && (ft.isPlainObject(i) || (n = ft.isArray(i))) ? (a = n ? (n = !1, e && ft.isArray(e) ? e : []) : e && ft.isPlainObject(e) ? e : {}, s[o] = ft.extend(c, a, i)) : i !== undefined && (s[o] = i));
        return s
    }, ft.extend({
        expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === ft.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === ft.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            var e = t && t.toString();
            return !ft.isArray(t) && 0 <= e - parseFloat(e) + 1
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!ht.ownFirst)
                for (e in t) return ct.call(t, e);
            for (e in t);
            return e === undefined || ct.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            t && ft.trim(t) && (S.execScript || function (t) {
                S.eval.call(S, t)
            })(t)
        },
        camelCase: function (t) {
            return t.replace(mt, "ms-").replace(gt, vt)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var n, i = 0;
            if (s(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(pt, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (s(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n
        },
        inArray: function (t, e, n) {
            var i;
            if (e) {
                if (st) return st.call(e, t, n);
                for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n;) t[o++] = e[i++];
            if (n != n)
                for (; e[i] !== undefined;) t[o++] = e[i++];
            return t.length = o, t
        },
        grep: function (t, e, n) {
            for (var i = [], o = 0, r = t.length, a = !n; o < r; o++) !e(t[o], o) !== a && i.push(t[o]);
            return i
        },
        map: function (t, e, n) {
            var i, o, r = 0,
                a = [];
            if (s(t))
                for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && a.push(o);
            else
                for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e], e = t, t = o), ft.isFunction(t) ? (n = ot.call(arguments, 2), (i = function () {
                return t.apply(e || this, n.concat(ot.call(arguments)))
            }).guid = t.guid = t.guid || ft.guid++, i) : undefined
        },
        now: function () {
            return +new Date
        },
        support: ht
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = nt[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function (n) {
        function b(t, e, n, i) {
            var o, r, a, s, l, u, c, h, d = e && e.ownerDocument,
                f = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((e ? e.ownerDocument || e : F) !== I && A(e), e = e || I, B)) {
                if (11 !== f && (u = vt.exec(t)))
                    if (o = u[1]) {
                        if (9 === f) {
                            if (!(a = e.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (d && (a = d.getElementById(o)) && z(e, a) && a.id === o) return n.push(a), n
                    } else {
                        if (u[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = u[3]) && v.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(o)), n
                    } if (v.qsa && !Z[t + " "] && (!R || !R.test(t))) {
                    if (1 !== f) d = e, h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(_t, "\\$&") : e.setAttribute("id", s = O), r = (c = C(t)).length, l = dt.test(s) ? "#" + s : "[id='" + s + "']"; r--;) c[r] = l + " " + g(c[r]);
                        h = c.join(","), d = yt.test(t) && m(e.parentNode) || e
                    }
                    if (h) try {
                        return J.apply(n, d.querySelectorAll(h)), n
                    } catch (p) {} finally {
                        s === O && e.removeAttribute("id")
                    }
                }
            }
            return L(t.replace(st, "$1"), e, n, i)
        }

        function t() {
            function n(t, e) {
                return i.push(t + " ") > w.cacheLength && delete n[i.shift()], n[t + " "] = e
            }
            var i = [];
            return n
        }

        function l(t) {
            return t[O] = !0, t
        }

        function o(t) {
            var e = I.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function e(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = e
        }

        function u(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function i(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function r(n) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function a(a) {
            return l(function (r) {
                return r = +r, l(function (t, e) {
                    for (var n, i = a([], t.length, r), o = i.length; o--;) t[n = i[o]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function m(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function s() {}

        function g(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function h(s, t, e) {
            var l = t.dir,
                u = e && "parentNode" === l,
                c = H++;
            return t.first ? function (t, e, n) {
                for (; t = t[l];)
                    if (1 === t.nodeType || u) return s(t, e, n)
            } : function (t, e, n) {
                var i, o, r, a = [$, c];
                if (n) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || u) && s(t, e, n)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || u) {
                            if ((i = (o = (r = t[O] || (t[O] = {}))[t.uniqueID] || (r[t.uniqueID] = {}))[l]) && i[0] === $ && i[1] === c) return a[2] = i[2];
                            if ((o[l] = a)[2] = s(t, e, n)) return !0
                        }
            }
        }

        function d(o) {
            return 1 < o.length ? function (t, e, n) {
                for (var i = o.length; i--;)
                    if (!o[i](t, e, n)) return !1;
                return !0
            } : o[0]
        }

        function y(t, e, n) {
            for (var i = 0, o = e.length; i < o; i++) b(t, e[i], n);
            return n
        }

        function x(t, e, n, i, o) {
            for (var r, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), u && e.push(s)));
            return a
        }

        function _(f, p, m, g, v, t) {
            return g && !g[O] && (g = _(g)), v && !v[O] && (v = _(v, t)), l(function (t, e, n, i) {
                var o, r, a, s = [],
                    l = [],
                    u = e.length,
                    c = t || y(p || "*", n.nodeType ? [n] : n, []),
                    h = !f || !t && p ? c : x(c, s, f, n, i),
                    d = m ? v || (t ? f : u || g) ? [] : e : h;
                if (m && m(h, d, n, i), g)
                    for (o = x(d, l), g(o, [], n, i), r = o.length; r--;)(a = o[r]) && (d[l[r]] = !(h[l[r]] = a));
                if (t) {
                    if (v || f) {
                        if (v) {
                            for (o = [], r = d.length; r--;)(a = d[r]) && o.push(h[r] = a);
                            v(null, d = [], o, i)
                        }
                        for (r = d.length; r--;)(a = d[r]) && -1 < (o = v ? tt(t, a) : s[r]) && (t[o] = !(e[o] = a))
                    }
                } else d = x(d === e ? d.splice(u, d.length) : d), v ? v(null, e, d, i) : J.apply(e, d)
            })
        }

        function f(t) {
            for (var o, e, n, i = t.length, r = w.relative[t[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = h(function (t) {
                    return t === o
                }, a, !0), u = h(function (t) {
                    return -1 < tt(o, t)
                }, a, !0), c = [function (t, e, n) {
                    var i = !r && (n || e !== D) || ((o = e).nodeType ? l(t, e, n) : u(t, e, n));
                    return o = null, i
                }]; s < i; s++)
                if (e = w.relative[t[s].type]) c = [h(d(c), e)];
                else {
                    if ((e = w.filter[t[s].type].apply(null, t[s].matches))[O]) {
                        for (n = ++s; n < i && !w.relative[t[n].type]; n++);
                        return _(1 < s && d(c), 1 < s && g(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(st, "$1"), e, s < n && f(t.slice(s, n)), n < i && f(t = t.slice(n)), n < i && g(t))
                    }
                    c.push(e)
                } return d(c)
        }

        function c(g, v) {
            var y = 0 < v.length,
                _ = 0 < g.length,
                t = function (t, e, n, i, o) {
                    var r, a, s, l = 0,
                        u = "0",
                        c = t && [],
                        h = [],
                        d = D,
                        f = t || _ && w.find.TAG("*", o),
                        p = $ += null == d ? 1 : Math.random() || .1,
                        m = f.length;
                    for (o && (D = e === I || e || o); u !== m && null != (r = f[u]); u++) {
                        if (_ && r) {
                            for (a = 0, e || r.ownerDocument === I || (A(r), n = !B); s = g[a++];)
                                if (s(r, e || I, n)) {
                                    i.push(r);
                                    break
                                } o && ($ = p)
                        }
                        y && ((r = !s && r) && l--, t && c.push(r))
                    }
                    if (l += u, y && u !== l) {
                        for (a = 0; s = v[a++];) s(c, h, e, n);
                        if (t) {
                            if (0 < l)
                                for (; u--;) c[u] || h[u] || (h[u] = K.call(i));
                            h = x(h)
                        }
                        J.apply(i, h), o && !t && 0 < h.length && 1 < l + v.length && b.uniqueSort(i)
                    }
                    return o && ($ = p, D = d), c
                };
            return y ? l(t) : t
        }
        var p, v, w, S, T, C, k, L, D, P, E, A, I, M, B, R, j, N, z, O = "sizzle" + 1 * new Date,
            F = n.document,
            $ = 0,
            H = 0,
            q = t(),
            W = t(),
            Z = t(),
            U = function (t, e) {
                return t === e && (E = !0), 0
            },
            V = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            X = Q.push,
            J = Q.push,
            Y = Q.slice,
            tt = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(rt),
            dt = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            _t = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            xt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            wt = function () {
                A()
            };
        try {
            J.apply(Q = Y.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
        } catch (St) {
            J = {
                apply: Q.length ? function (t, e) {
                    X.apply(t, Y.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        for (p in v = b.support = {}, T = b.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, A = b.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : F;
                return i !== I && 9 === i.nodeType && i.documentElement && (M = (I = i).documentElement, B = !T(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), v.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), v.getElementsByTagName = o(function (t) {
                    return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length
                }), v.getElementsByClassName = gt.test(I.getElementsByClassName), v.getById = o(function (t) {
                    return M.appendChild(t).id = O, !I.getElementsByName || !I.getElementsByName(O).length
                }), v.getById ? (w.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && B) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, w.filter.ID = function (t) {
                    var e = t.replace(bt, xt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function (t) {
                    var n = t.replace(bt, xt);
                    return function (t) {
                        var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === n
                    }
                }), w.find.TAG = v.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : v.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" !== t) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, w.find.CLASS = v.getElementsByClassName && function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && B) return e.getElementsByClassName(t)
                }, j = [], R = [], (v.qsa = gt.test(I.querySelectorAll)) && (o(function (t) {
                    M.appendChild(t).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + O + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + O + "+*").length || R.push(".#.+[+~]")
                }), o(function (t) {
                    var e = I.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
                })), (v.matchesSelector = gt.test(N = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function (t) {
                    v.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), j.push("!=", rt)
                }), R = R.length && new RegExp(R.join("|")), j = j.length && new RegExp(j.join("|")), e = gt.test(M.compareDocumentPosition), z = e || gt.test(M.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function (t, e) {
                    if (t === e) return E = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !v.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === F && z(F, t) ? -1 : e === I || e.ownerDocument === F && z(F, e) ? 1 : P ? tt(P, t) - tt(P, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return E = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        s = [e];
                    if (!o || !r) return t === I ? -1 : e === I ? 1 : o ? -1 : r ? 1 : P ? tt(P, t) - tt(P, e) : 0;
                    if (o === r) return u(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? u(a[i], s[i]) : a[i] === F ? -1 : s[i] === F ? 1 : 0
                }), I
            }, b.matches = function (t, e) {
                return b(t, null, null, e)
            }, b.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== I && A(t), e = e.replace(ct, "='$1']"), v.matchesSelector && B && !Z[e + " "] && (!j || !j.test(e)) && (!R || !R.test(e))) try {
                    var n = N.call(t, e);
                    if (n || v.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (St) {}
                return 0 < b(e, I, null, [t]).length
            }, b.contains = function (t, e) {
                return (t.ownerDocument || t) !== I && A(t), z(t, e)
            }, b.attr = function (t, e) {
                (t.ownerDocument || t) !== I && A(t);
                var n = w.attrHandle[e.toLowerCase()],
                    i = n && G.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !B) : undefined;
                return i !== undefined ? i : v.attributes || !B ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, b.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, b.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (E = !v.detectDuplicates, P = !v.sortStable && t.slice(0), t.sort(U), E) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return P = null, t
            }, S = b.getText = function (t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += S(e);
                return n
            }, (w = b.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(bt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || b.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && b.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && q(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, o) {
                        return function (t) {
                            var e = b.attr(t, n);
                            return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === o : "!=" === i ? e !== o : "^=" === i ? o && 0 === e.indexOf(o) : "*=" === i ? o && -1 < e.indexOf(o) : "$=" === i ? o && e.slice(-o.length) === o : "~=" === i ? -1 < (" " + e.replace(at, " ") + " ").indexOf(o) : "|=" === i && (e === o || e.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function (p, t, e, m, g) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            _ = "of-type" === t;
                        return 1 === m && 0 === g ? function (t) {
                            return !!t.parentNode
                        } : function (t, e, n) {
                            var i, o, r, a, s, l, u = v !== y ? "nextSibling" : "previousSibling",
                                c = t.parentNode,
                                h = _ && t.nodeName.toLowerCase(),
                                d = !n && !_,
                                f = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (a = t; a = a[u];)
                                            if (_ ? a.nodeName.toLowerCase() === h : 1 === a.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                    for (f = (s = (i = (o = (r = (a = c)[O] || (a[O] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === $ && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (f = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++f && a === t) {
                                            o[p] = [$, s, f];
                                            break
                                        }
                                } else if (d && (f = s = (i = (o = (r = (a = t)[O] || (a[O] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === $ && i[1]), !1 === f)
                                    for (;
                                        (a = ++s && a && a[u] || (f = s = 0) || l.pop()) && ((_ ? a.nodeName.toLowerCase() !== h : 1 !== a.nodeType) || !++f || (d && ((o = (r = a[O] || (a[O] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] = [$, f]), a !== t)););
                                return (f -= g) === m || f % m == 0 && 0 <= f / m
                            }
                        }
                    },
                    PSEUDO: function (t, r) {
                        var e, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || b.error("unsupported pseudo: " + t);
                        return a[O] ? a(r) : 1 < a.length ? (e = [t, t, "", r], w.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function (t, e) {
                            for (var n, i = a(t, r), o = i.length; o--;) t[n = tt(t, i[o])] = !(e[n] = i[o])
                        }) : function (t) {
                            return a(t, 0, e)
                        }) : a
                    }
                },
                pseudos: {
                    not: l(function (t) {
                        var i = [],
                            o = [],
                            s = k(t.replace(st, "$1"));
                        return s[O] ? l(function (t, e, n, i) {
                            for (var o, r = s(t, null, i, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, e, n) {
                            return i[0] = t, s(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: l(function (e) {
                        return function (t) {
                            return 0 < b(e, t).length
                        }
                    }),
                    contains: l(function (e) {
                        return e = e.replace(bt, xt),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || S(t)).indexOf(e)
                            }
                    }),
                    lang: l(function (n) {
                        return dt.test(n || "") || b.error("unsupported lang: " + n), n = n.replace(bt, xt).toLowerCase(),
                            function (t) {
                                var e;
                                do {
                                    if (e = B ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var e = n.location && n.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function (t) {
                        return t === M
                    },
                    focus: function (t) {
                        return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return !1 === t.disabled
                    },
                    disabled: function (t) {
                        return !0 === t.disabled
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !w.pseudos.empty(t)
                    },
                    header: function (t) {
                        return mt.test(t.nodeName)
                    },
                    input: function (t) {
                        return pt.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: a(function () {
                        return [0]
                    }),
                    last: a(function (t, e) {
                        return [e - 1]
                    }),
                    eq: a(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: a(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: a(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: a(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
                        return t
                    }),
                    gt: a(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[p] = i(p);
        for (p in {
                submit: !0,
                reset: !0
            }) w.pseudos[p] = r(p);
        return s.prototype = w.filters = w.pseudos, w.setFilters = new s, C = b.tokenize = function (t, e) {
            var n, i, o, r, a, s, l, u = W[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, s = [], l = w.preFilter; a;) {
                for (r in n && !(i = lt.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = ut.exec(a)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(st, " ")
                    }), a = a.slice(n.length)), w.filter) !(i = ft[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? b.error(t) : W(t, s).slice(0)
        }, k = b.compile = function (t, e) {
            var n, i = [],
                o = [],
                r = Z[t + " "];
            if (!r) {
                for (e || (e = C(t)), n = e.length; n--;)(r = f(e[n]))[O] ? i.push(r) : o.push(r);
                (r = Z(t, c(o, i))).selector = t
            }
            return r
        }, L = b.select = function (t, e, n, i) {
            var o, r, a, s, l, u = "function" == typeof t && t,
                c = !i && C(t = u.selector || t);
            if (n = n || [], 1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && v.getById && 9 === e.nodeType && B && w.relative[r[1].type]) {
                    if (!(e = (w.find.ID(a.matches[0].replace(bt, xt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (i = l(a.matches[0].replace(bt, xt), yt.test(r[0].type) && m(e.parentNode) || e))) {
                        if (r.splice(o, 1), !(t = i.length && g(r))) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || k(t, c))(i, e, !B, n, !e || yt.test(t) && m(e.parentNode) || e), n
        }, v.sortStable = O.split("").sort(U).join("") === O, v.detectDuplicates = !!E, A(), v.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(I.createElement("div"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), v.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || e("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || e(et, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), b
    }(S);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains;
    var _t = function (t, e, n) {
            for (var i = [], o = n !== undefined;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && ft(t).is(n)) break;
                    i.push(t)
                } return i
        },
        bt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        xt = ft.expr.match.needsContext,
        wt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        St = /^.[^:#\[\.,]*$/;
    ft.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ft.fn.extend({
        find: function (t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
                for (e = 0; e < o; e++)
                    if (ft.contains(i[e], this)) return !0
            }));
            for (e = 0; e < o; e++) ft.find(t, i[e], n);
            return (n = this.pushStack(1 < o ? ft.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function (t) {
            return this.pushStack(e(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(e(this, t || [], !0))
        },
        is: function (t) {
            return !!e(this, "string" == typeof t && xt.test(t) ? ft(t) : t || [], !1).length
        }
    });
    var Tt, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ft.fn.init = function (t, e, n) {
        var i, o;
        if (!t) return this;
        if (n = n || Tt, "string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this));
        if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : Ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
            if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), wt.test(i[1]) && ft.isPlainObject(e))
                for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        if ((o = it.getElementById(i[2])) && o.parentNode) {
            if (o.id !== i[2]) return Tt.find(t);
            this.length = 1, this[0] = o
        }
        return this.context = it, this.selector = t, this
    }).prototype = ft.fn, Tt = ft(it);
    var kt = /^(?:parents|prev(?:Until|All))/,
        Lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ft.fn.extend({
        has: function (t) {
            var e, n = ft(t, this),
                i = n.length;
            return this.filter(function () {
                for (e = 0; e < i; e++)
                    if (ft.contains(this, n[e])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, i = 0, o = this.length, r = [], a = xt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    } return this.pushStack(1 < r.length ? ft.uniqueSort(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ft.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return _t(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return _t(t, "parentNode", n)
        },
        next: function (t) {
            return n(t, "nextSibling")
        },
        prev: function (t) {
            return n(t, "previousSibling")
        },
        nextAll: function (t) {
            return _t(t, "nextSibling")
        },
        prevAll: function (t) {
            return _t(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return _t(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return _t(t, "previousSibling", n)
        },
        siblings: function (t) {
            return bt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return bt(t.firstChild)
        },
        contents: function (t) {
            return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
        }
    }, function (i, o) {
        ft.fn[i] = function (t, e) {
            var n = ft.map(this, o, t);
            return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = ft.filter(e, n)), 1 < this.length && (Lt[i] || (n = ft.uniqueSort(n)), kt.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var Dt, Pt, Et = /\S+/g;
    for (Pt in ft.Callbacks = function (i) {
            i = "string" == typeof i ? c(i) : ft.extend({}, i);
            var o, t, e, n, r = [],
                a = [],
                s = -1,
                l = function () {
                    for (n = i.once, e = o = !0; a.length; s = -1)
                        for (t = a.shift(); ++s < r.length;) !1 === r[s].apply(t[0], t[1]) && i.stopOnFalse && (s = r.length, t = !1);
                    i.memory || (t = !1), o = !1, n && (r = t ? [] : "")
                },
                u = {
                    add: function () {
                        return r && (t && !o && (s = r.length - 1, a.push(t)), function n(t) {
                            ft.each(t, function (t, e) {
                                ft.isFunction(e) ? i.unique && u.has(e) || r.push(e) : e && e.length && "string" !== ft.type(e) && n(e)
                            })
                        }(arguments), t && !o && l()), this
                    },
                    remove: function () {
                        return ft.each(arguments, function (t, e) {
                            for (var n; - 1 < (n = ft.inArray(e, r, n));) r.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function (t) {
                        return t ? -1 < ft.inArray(t, r) : 0 < r.length
                    },
                    empty: function () {
                        return r && (r = []), this
                    },
                    disable: function () {
                        return n = a = [], r = t = "", this
                    },
                    disabled: function () {
                        return !r
                    },
                    lock: function () {
                        return n = !0, t || u.disable(), this
                    },
                    locked: function () {
                        return !!n
                    },
                    fireWith: function (t, e) {
                        return n || (e = [t, (e = e || []).slice ? e.slice() : e], a.push(e), o || l()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!e
                    }
                };
            return u
        }, ft.extend({
            Deferred: function (t) {
                var r = [
                        ["resolve", "done", ft.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ft.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ft.Callbacks("memory")]
                    ],
                    o = "pending",
                    a = {
                        state: function () {
                            return o
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var o = arguments;
                            return ft.Deferred(function (i) {
                                ft.each(r, function (t, e) {
                                    var n = ft.isFunction(o[t]) && o[t];
                                    s[e[1]](function () {
                                        var t = n && n.apply(this, arguments);
                                        t && ft.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this === a ? i.promise() : this, n ? [t] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        promise: function (t) {
                            return null != t ? ft.extend(t, a) : a
                        }
                    },
                    s = {};
                return a.pipe = a.then, ft.each(r, function (t, e) {
                    var n = e[2],
                        i = e[3];
                    a[e[1]] = n.add, i && n.add(function () {
                        o = i
                    }, r[1 ^ t][2].disable, r[2][2].lock), s[e[0]] = function () {
                        return s[e[0] + "With"](this === s ? a : this, arguments), this
                    }, s[e[0] + "With"] = n.fireWith
                }), a.promise(s), t && t.call(s, s), s
            },
            when: function (t) {
                var o, e, n, i = 0,
                    r = ot.call(arguments),
                    a = r.length,
                    s = 1 !== a || t && ft.isFunction(t.promise) ? a : 0,
                    l = 1 === s ? t : ft.Deferred(),
                    u = function (e, n, i) {
                        return function (t) {
                            n[e] = this, i[e] = 1 < arguments.length ? ot.call(arguments) : t, i === o ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (1 < a)
                    for (o = new Array(a), e = new Array(a), n = new Array(a); i < a; i++) r[i] && ft.isFunction(r[i].promise) ? r[i].promise().progress(u(i, e, o)).done(u(i, n, r)).fail(l.reject) : --s;
                return s || l.resolveWith(n, r), l.promise()
            }
        }), ft.fn.ready = function (t) {
            return ft.ready.promise().done(t), this
        }, ft.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? ft.readyWait++ : ft.ready(!0)
            },
            ready: function (t) {
                (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0) !== t && 0 < --ft.readyWait || (Dt.resolveWith(it, [ft]), ft.fn.triggerHandler && (ft(it).triggerHandler("ready"), ft(it).off("ready")))
            }
        }), ft.ready.promise = function (t) {
            if (!Dt)
                if (Dt = ft.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) S.setTimeout(ft.ready);
                else if (it.addEventListener) it.addEventListener("DOMContentLoaded", r), S.addEventListener("load", r);
            else {
                it.attachEvent("onreadystatechange", r), S.attachEvent("onload", r);
                var e = !1;
                try {
                    e = null == S.frameElement && it.documentElement
                } catch (n) {}
                e && e.doScroll && function i() {
                    if (!ft.isReady) {
                        try {
                            e.doScroll("left")
                        } catch (n) {
                            return S.setTimeout(i, 50)
                        }
                        o(), ft.ready()
                    }
                }()
            }
            return Dt.promise(t)
        }, ft.ready.promise(), ft(ht)) break;
    ht.ownFirst = "0" === Pt, ht.inlineBlockNeedsLayout = !1, ft(function () {
            var t, e, n, i;
            (n = it.getElementsByTagName("body")[0]) && n.style && (e = it.createElement("div"), (i = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function () {
            var t = it.createElement("div");
            ht.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ht.deleteExpando = !1
            }
            t = null
        }();
    var At, It = function (t) {
            var e = ft.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
        },
        Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Bt = /([A-Z])/g;
    ft.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return !!(t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando]) && !u(t)
        },
        data: function (t, e, n) {
            return i(t, e, n)
        },
        removeData: function (t, e) {
            return a(t, e)
        },
        _data: function (t, e, n) {
            return i(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return a(t, e, !0)
        }
    }), ft.fn.extend({
        data: function (t, e) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (t !== undefined) return "object" == typeof t ? this.each(function () {
                ft.data(this, t)
            }) : 1 < arguments.length ? this.each(function () {
                ft.data(this, t, e)
            }) : r ? l(r, t, ft.data(r, t)) : undefined;
            if (this.length && (o = ft.data(r), 1 === r.nodeType && !ft._data(r, "parsedAttrs"))) {
                for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && l(r, i = ft.camelCase(i.slice(5)), o[i]);
                ft._data(r, "parsedAttrs", !0)
            }
            return o
        },
        removeData: function (t) {
            return this.each(function () {
                ft.removeData(this, t)
            })
        }
    }), ft.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = ft.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = ft._queueHooks(t, e),
                a = function () {
                    ft.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return ft._data(t, n) || ft._data(t, n, {
                empty: ft.Callbacks("once memory").add(function () {
                    ft._removeData(t, e + "queue"), ft._removeData(t, n)
                })
            })
        }
    }), ft.fn.extend({
        queue: function (e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? ft.queue(this[0], e) : n === undefined ? this : this.each(function () {
                var t = ft.queue(this, e, n);
                ft._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ft.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                ft.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                o = ft.Deferred(),
                r = this,
                a = this.length,
                s = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; a--;)(n = ft._data(r[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(e)
        }
    }), ht.shrinkWrapBlocks = function () {
        return null != At ? At : (At = !1, (e = it.getElementsByTagName("body")[0]) && e.style ? (t = it.createElement("div"), (n = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(it.createElement("div")).style.width = "5px", At = 3 !== t.offsetWidth), e.removeChild(n), At) : void 0);
        var t, e, n
    };
    var Rt, jt, Nt, zt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ot = new RegExp("^(?:([+-])=|)(" + zt + ")([a-z%]*)$", "i"),
        Ft = ["Top", "Right", "Bottom", "Left"],
        $t = function (t, e) {
            return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
        },
        Ht = function (t, e, n, i, o, r, a) {
            var s = 0,
                l = t.length,
                u = null == n;
            if ("object" === ft.type(n))
                for (s in o = !0, n) Ht(t, e, s, n[s], !0, r, a);
            else if (i !== undefined && (o = !0, ft.isFunction(i) || (a = !0), u && (e = a ? (e.call(t, i), null) : (u = e, function (t, e, n) {
                    return u.call(ft(t), n)
                })), e))
                for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
            return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
        },
        qt = /^(?:checkbox|radio)$/i,
        Wt = /<([\w:-]+)/,
        Zt = /^$|\/(?:java|ecma)script/i,
        Ut = /^\s+/,
        Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    Rt = it.createElement("div"), jt = it.createDocumentFragment(), Nt = it.createElement("input"), Rt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ht.leadingWhitespace = 3 === Rt.firstChild.nodeType, ht.tbody = !Rt.getElementsByTagName("tbody").length, ht.htmlSerialize = !!Rt.getElementsByTagName("link").length, ht.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, Nt.type = "checkbox", Nt.checked = !0, jt.appendChild(Nt), ht.appendChecked = Nt.checked, Rt.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!Rt.cloneNode(!0).lastChild.defaultValue, jt.appendChild(Rt), (Nt = it.createElement("input")).setAttribute("type", "radio"), Nt.setAttribute("checked", "checked"), Nt.setAttribute("name", "t"), Rt.appendChild(Nt), ht.checkClone = Rt.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.noCloneEvent = !!Rt.addEventListener, Rt[ft.expando] = 1, ht.attributes = !Rt.getAttribute(ft.expando);
    var Gt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td;
    var Qt = /<|&#?\w+;/,
        Kt = /<tbody/i;
    ! function () {
        var t, e, n = it.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) e = "on" + t, (ht[t] = e in S) || (n.setAttribute(e, "t"), ht[t] = !1 === n.attributes[e].expando);
        n = null
    }();
    var Xt = /^(?:input|select|textarea)$/i,
        Jt = /^key/,
        Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        te = /^(?:focusinfocus|focusoutblur)$/,
        ee = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var r, a, s, l, u, c, h, d, f, p, m, g = ft._data(t);
            if (g) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = ft.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function (t) {
                        return void 0 === ft || t && ft.event.triggered === t.type ? undefined : ft.event.dispatch.apply(c.elem, arguments)
                    }).elem = t), s = (e = (e || "").match(Et) || [""]).length; s--;) f = m = (r = ee.exec(e[s]) || [])[1], p = (r[2] || "").split(".").sort(), f && (u = ft.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ft.event.special[f] || {}, h = ft.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ft.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, l), (d = a[f]) || ((d = a[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, c) || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), ft.event.global[f] = !0);
                t = null
            }
        },
        remove: function (t, e, n, i, o) {
            var r, a, s, l, u, c, h, d, f, p, m, g = ft.hasData(t) && ft._data(t);
            if (g && (c = g.events)) {
                for (u = (e = (e || "").match(Et) || [""]).length; u--;)
                    if (f = m = (s = ee.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
                        for (h = ft.event.special[f] || {}, d = c[f = (i ? h.delegateType : h.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) a = d[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(r, 1), a.selector && d.delegateCount--, h.remove && h.remove.call(t, a));
                        l && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, g.handle) || ft.removeEvent(t, f, g.handle), delete c[f])
                    } else
                        for (f in c) ft.event.remove(t, f + e[u], n, i, !0);
                ft.isEmptyObject(c) && (delete g.handle, ft._removeData(t, "events"))
            }
        },
        trigger: function (t, e, n, i) {
            var o, r, a, s, l, u, c, h = [n || it],
                d = ct.call(t, "type") ? t.type : t,
                f = ct.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = n = n || it, 3 !== n.nodeType && 8 !== n.nodeType && !te.test(d + ft.event.triggered) && (-1 < d.indexOf(".") && (d = (f = d.split(".")).shift(), f.sort()), r = d.indexOf(":") < 0 && "on" + d, (t = t[ft.expando] ? t : new ft.Event(d, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = n), e = null == e ? [t] : ft.makeArray(e, [t]), l = ft.event.special[d] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, e))) {
                if (!i && !l.noBubble && !ft.isWindow(n)) {
                    for (s = l.delegateType || d, te.test(s + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                    u === (n.ownerDocument || it) && h.push(u.defaultView || u.parentWindow || S)
                }
                for (c = 0;
                    (a = h[c++]) && !t.isPropagationStopped();) t.type = 1 < c ? s : l.bindType || d, (o = (ft._data(a, "events") || {})[t.type] && ft._data(a, "handle")) && o.apply(a, e), (o = r && a[r]) && o.apply && It(a) && (t.result = o.apply(a, e), !1 === t.result && t.preventDefault());
                if (t.type = d, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(h.pop(), e)) && It(n) && r && n[d] && !ft.isWindow(n)) {
                    (u = n[r]) && (n[r] = null), ft.event.triggered = d;
                    try {
                        n[d]()
                    } catch (p) {}
                    ft.event.triggered = undefined, u && (n[r] = u)
                }
                return t.result
            }
        },
        dispatch: function (t) {
            t = ft.event.fix(t);
            var e, n, i, o, r, a = [],
                s = ot.call(arguments),
                l = (ft._data(this, "events") || {})[t.type] || [],
                u = ft.event.special[t.type] || {};
            if ((s[0] = t).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (a = ft.event.handlers.call(this, t, l), e = 0;
                    (o = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, (i = ((ft.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) !== undefined && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, o, r, a = [],
                s = e.delegateCount,
                l = t.target;
            if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [], n = 0; n < s; n++) i[o = (r = e[n]).selector + " "] === undefined && (i[o] = r.needsContext ? -1 < ft(o, this).index(l) : ft.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        fix: function (t) {
            if (t[ft.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Yt.test(o) ? this.mouseHooks : Jt.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new ft.Event(r), e = i.length; e--;) t[n = i[e]] = r[n];
            return t.target || (t.target = r.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, o, r = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || it).documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || r === undefined || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === p() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function (t) {
                    return ft.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n) {
            var i = ft.extend(new ft.Event, n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ft.removeEvent = it.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, ft.Event = function (t, e) {
        if (!(this instanceof ft.Event)) return new ft.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? d : f) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), this[ft.expando] = !0
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        ft.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function (t) {
                var e, n = this,
                    i = t.relatedTarget,
                    o = t.handleObj;
                return i && (i === n || ft.contains(n, i)) || (t.type = o.origType, e = o.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), ht.submit || (ft.event.special.submit = {
        setup: function () {
            if (ft.nodeName(this, "form")) return !1;
            ft.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : undefined;
                n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function (t) {
                    t._submitBubble = !0
                }), ft._data(n, "submit", !0))
            })
        },
        postDispatch: function (t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
        },
        teardown: function () {
            if (ft.nodeName(this, "form")) return !1;
            ft.event.remove(this, "._submit")
        }
    }), ht.change || (ft.event.special.change = {
        setup: function () {
            if (Xt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ft.event.add(this, "click._change", function (t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
            })), !1;
            ft.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Xt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
                }), ft._data(e, "change", !0))
            })
        },
        handle: function (t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return ft.event.remove(this, "._change"), !Xt.test(this.nodeName)
        }
    }), ht.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        var o = function (t) {
            ft.event.simulate(i, t.target, ft.event.fix(t))
        };
        ft.event.special[i] = {
            setup: function () {
                var t = this.ownerDocument || this,
                    e = ft._data(t, i);
                e || t.addEventListener(n, o, !0), ft._data(t, i, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this,
                    e = ft._data(t, i) - 1;
                e ? ft._data(t, i, e) : (t.removeEventListener(n, o, !0), ft._removeData(t, i))
            }
        }
    }), ft.fn.extend({
        on: function (t, e, n, i) {
            return b(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return b(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = f), this.each(function () {
                ft.event.remove(this, t, n, e)
            });
            for (o in t) this.off(o, e, t[o]);
            return this
        },
        trigger: function (t, e) {
            return this.each(function () {
                ft.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return ft.event.trigger(t, e, n, !0)
        }
    });
    var ne = / jQuery\d+="(?:null|\d+)"/g,
        ie = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        re = /<script|<style|<link/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ue = g(it).appendChild(it.createElement("div"));
    ft.extend({
        htmlPrefilter: function (t) {
            return t.replace(oe, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, o, r, a, s, l = ft.contains(t.ownerDocument, t);
            if (ht.html5Clone || ft.isXMLDoc(t) || !ie.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(r = ue.firstChild)), !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                for (i = v(r), s = v(t), a = 0; null != (o = s[a]); ++a) i[a] && k(o, i[a]);
            if (e)
                if (n)
                    for (s = s || v(t), i = i || v(r), a = 0; null != (o = s[a]); a++) C(o, i[a]);
                else C(t, r);
            return 0 < (i = v(r, "script")).length && y(i, !l && v(t, "script")), i = s = o = null, r
        },
        cleanData: function (t, e) {
            for (var n, i, o, r, a = 0, s = ft.expando, l = ft.cache, u = ht.attributes, c = ft.event.special; null != (n = t[a]); a++)
                if ((e || It(n)) && (r = (o = n[s]) && l[o])) {
                    if (r.events)
                        for (i in r.events) c[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), nt.push(o))
                }
        }
    }), ft.fn.extend({
        domManip: L,
        detach: function (t) {
            return D(this, t, !0)
        },
        remove: function (t) {
            return D(this, t)
        },
        text: function (t) {
            return Ht(this, function (t) {
                return t === undefined ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return L(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || x(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return L(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return L(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return L(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ft.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ft.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ft.clone(this, t, e)
            })
        },
        html: function (t) {
            return Ht(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(ne, "") : undefined;
                if ("string" == typeof t && !re.test(t) && (ht.htmlSerialize || !ie.test(t)) && (ht.leadingWhitespace || !Ut.test(t)) && !Gt[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ft.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return L(this, arguments, function (t) {
                var e = this.parentNode;
                ft.inArray(this, n) < 0 && (ft.cleanData(v(this)), e && e.replaceChild(t, this))
            }, n)
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, a) {
        ft.fn[t] = function (t) {
            for (var e, n = 0, i = [], o = ft(t), r = o.length - 1; n <= r; n++) e = n === r ? this : this.clone(!0), ft(o[n])[a](e), at.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var ce, he = {
            HTML: "block",
            BODY: "block"
        },
        de = /^margin/,
        fe = new RegExp("^(" + zt + ")(?!px)[a-z%]+$", "i"),
        pe = function (t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            for (r in o = n.apply(t, i || []), e) t.style[r] = a[r];
            return o
        },
        me = it.documentElement;
    ! function () {
        function t() {
            var t, e, n = it.documentElement;
            n.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = r = l = !1, o = s = !0, S.getComputedStyle && (e = S.getComputedStyle(c), i = "1%" !== (e || {}).top, l = "2px" === (e || {}).marginLeft, r = "4px" === (e || {
                width: "4px"
            }).width, c.style.marginRight = "50%", o = "4px" === (e || {
                marginRight: "4px"
            }).marginRight, (t = c.appendChild(it.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", s = !parseFloat((S.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (t = c.getElementsByTagName(
                "td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", a = 0 === t[0].offsetHeight)), n.removeChild(u)
        }
        var i, o, r, a, s, l, u = it.createElement("div"),
            c = it.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", ht.opacity = "0.5" === c.style.opacity, ht.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === c.style.backgroundClip, (u = it.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), ht.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ft.extend(ht, {
            reliableHiddenOffsets: function () {
                return null == i && t(), a
            },
            boxSizingReliable: function () {
                return null == i && t(), r
            },
            pixelMarginRight: function () {
                return null == i && t(), o
            },
            pixelPosition: function () {
                return null == i && t(), i
            },
            reliableMarginRight: function () {
                return null == i && t(), s
            },
            reliableMarginLeft: function () {
                return null == i && t(), l
            }
        }))
    }();
    var ge, ve, ye = /^(top|right|bottom|left)$/;
    S.getComputedStyle ? (ge = function (t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = S), e.getComputedStyle(t)
    }, ve = function (t, e, n) {
        var i, o, r, a, s = t.style;
        return "" !== (a = (n = n || ge(t)) ? n.getPropertyValue(e) || n[e] : undefined) && a !== undefined || ft.contains(t.ownerDocument, t) || (a = ft.style(t, e)), n && !ht.pixelMarginRight() && fe.test(a) && de.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), a === undefined ? a : a + ""
    }) : me.currentStyle && (ge = function (t) {
        return t.currentStyle
    }, ve = function (t, e, n) {
        var i, o, r, a, s = t.style;
        return null == (a = (n = n || ge(t)) ? n[e] : undefined) && s && s[e] && (a = s[e]), fe.test(a) && !ye.test(e) && (i = s.left, (r = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), a === undefined ? a : a + "" || "auto"
    });
    var _e = /alpha\([^)]*\)/i,
        be = /opacity\s*=\s*([^)]*)/i,
        xe = /^(none|table(?!-c[ea]).+)/,
        we = new RegExp("^(" + zt + ")(.*)$", "i"),
        Se = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Te = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ce = ["Webkit", "O", "Moz", "ms"],
        ke = it.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = ve(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        cssProps: {
            "float": ht.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = ft.camelCase(e),
                    l = t.style;
                if (e = ft.cssProps[s] || (ft.cssProps[s] = I(s) || s), a = ft.cssHooks[e] || ft.cssHooks[s], n === undefined) return a && "get" in a && (o = a.get(t, !1, i)) !== undefined ? o : l[e];
                if ("string" === (r = typeof n) && (o = Ot.exec(n)) && o[1] && (n = h(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (ft.cssNumber[s] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && (n = a.set(t, n, i)) === undefined))) try {
                    l[e] = n
                } catch (u) {}
            }
        },
        css: function (t, e, n, i) {
            var o, r, a, s = ft.camelCase(e);
            return e = ft.cssProps[s] || (ft.cssProps[s] = I(s) || s), (a = ft.cssHooks[e] || ft.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), r === undefined && (r = ve(t, e, i)), "normal" === r && e in Te && (r = Te[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), ft.each(["height", "width"], function (t, o) {
        ft.cssHooks[o] = {
            get: function (t, e, n) {
                if (e) return xe.test(ft.css(t, "display")) && 0 === t.offsetWidth ? pe(t, Se, function () {
                    return j(t, o, n)
                }) : j(t, o, n)
            },
            set: function (t, e, n) {
                var i = n && ge(t);
                return B(t, e, n ? R(t, o, n, ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ht.opacity || (ft.cssHooks.opacity = {
        get: function (t, e) {
            return be.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= e || "" === e) && "" === ft.trim(r.replace(_e, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = _e.test(r) ? r.replace(_e, o) : r + " " + o)
        }
    }), ft.cssHooks.marginRight = A(ht.reliableMarginRight, function (t, e) {
        if (e) return pe(t, {
            display: "inline-block"
        }, ve, [t, "marginRight"])
    }), ft.cssHooks.marginLeft = A(ht.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(ve(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - pe(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (o, r) {
        ft.cssHooks[o + r] = {
            expand: function (t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[o + Ft[e] + r] = i[e] || i[e - 2] || i[0];
                return n
            }
        }, de.test(o) || (ft.cssHooks[o + r].set = B)
    }), ft.fn.extend({
        css: function (t, e) {
            return Ht(this, function (t, e, n) {
                var i, o, r = {},
                    a = 0;
                if (ft.isArray(e)) {
                    for (i = ge(t), o = e.length; a < o; a++) r[e[a]] = ft.css(t, e[a], !1, i);
                    return r
                }
                return n !== undefined ? ft.style(t, e, n) : ft.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function () {
            return M(this, !0)
        },
        hide: function () {
            return M(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                $t(this) ? ft(this).show() : ft(this).hide()
            })
        }
    }), (ft.Tween = N).prototype = {
        constructor: N,
        init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ft.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = N.propHooks[this.prop];
            return t && t.get ? t.get(this) : N.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = N.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ft.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ft.fx = N.prototype.init, ft.fx.step = {};
    var Le, De, Pe, Ee, Ae, Ie, Me, Be = /^(?:toggle|show|hide)$/,
        Re = /queueHooks$/;
    ft.Animation = ft.extend(q, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return h(n.elem, t, Ot.exec(e), n), n
            }]
        },
        tweener: function (t, e) {
            for (var n, i = 0, o = (t = ft.isFunction(t) ? (e = t, ["*"]) : t.match(Et)).length; i < o; i++) n = t[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(e)
        },
        prefilters: [$],
        prefilter: function (t, e) {
            e ? q.prefilters.unshift(t) : q.prefilters.push(t)
        }
    }), ft.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: n || !n && e || ft.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ft.isFunction(e) && e
        };
        return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
        }, i
    }, ft.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter($t).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (e, t, n, i) {
            var o = ft.isEmptyObject(e),
                r = ft.speed(t, n, i),
                a = function () {
                    var t = q(this, ft.extend({}, e), r);
                    (o || ft._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function (o, t, r) {
            var a = function (t) {
                var e = t.stop;
                delete t.stop, e(r)
            };
            return "string" != typeof o && (r = t, t = o, o = undefined), t && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                var t = !0,
                    e = null != o && o + "queueHooks",
                    n = ft.timers,
                    i = ft._data(this);
                if (e) i[e] && i[e].stop && a(i[e]);
                else
                    for (e in i) i[e] && i[e].stop && Re.test(e) && a(i[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
                !t && r || ft.dequeue(this, o)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var t, e = ft._data(this),
                    n = e[a + "queue"],
                    i = e[a + "queueHooks"],
                    o = ft.timers,
                    r = n ? n.length : 0;
                for (e.finish = !0, ft.queue(this, a, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === a && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), ft.each(["toggle", "show", "hide"], function (t, i) {
        var o = ft.fn[i];
        ft.fn[i] = function (t, e, n) {
            return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(O(i, !0), t, e, n)
        }
    }), ft.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, i) {
        ft.fn[t] = function (t, e, n) {
            return this.animate(i, t, e, n)
        }
    }), ft.timers = [], ft.fx.tick = function () {
        var t, e = ft.timers,
            n = 0;
        for (Le = ft.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || ft.fx.stop(), Le = undefined
    }, ft.fx.timer = function (t) {
        ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
    }, ft.fx.interval = 13, ft.fx.start = function () {
        De || (De = S.setInterval(ft.fx.tick, ft.fx.interval))
    }, ft.fx.stop = function () {
        S.clearInterval(De), De = null
    }, ft.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ft.fn.delay = function (i, t) {
        return i = ft.fx && ft.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
            var n = S.setTimeout(t, i);
            e.stop = function () {
                S.clearTimeout(n)
            }
        })
    }, Ee = it.createElement("input"), Ae = it.createElement("div"), Ie = it.createElement("select"), Me = Ie.appendChild(it.createElement("option")), (Ae = it.createElement("div")).setAttribute("className", "t"), Ae.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Pe = Ae.getElementsByTagName("a")[0], Ee.setAttribute("type", "checkbox"), Ae.appendChild(Ee), (Pe = Ae.getElementsByTagName("a")[0]).style.cssText = "top:1px", ht.getSetAttribute = "t" !== Ae.className, ht.style = /top/.test(Pe.getAttribute("style")), ht.hrefNormalized = "/a" === Pe.getAttribute("href"), ht.checkOn = !!Ee.value, ht.optSelected = Me.selected, ht.enctype = !!it.createElement("form").enctype, Ie.disabled = !0, ht.optDisabled = !Me.disabled, (Ee = it.createElement("input")).setAttribute("value", ""), ht.input = "" === Ee.getAttribute("value"), Ee.value = "t", Ee.setAttribute("type", "radio"), ht.radioValue = "t" === Ee.value;
    var je = /\r/g,
        Ne = /[\x20\t\r\n\f]+/g;
    ft.fn.extend({
        val: function (n) {
            var i, t, o, e = this[0];
            return arguments.length ? (o = ft.isFunction(n), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = o ? n.call(this, t, ft(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : ft.isArray(e) && (e = ft.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (i = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, e, "value") !== undefined || (this.value = e))
            })) : e ? (i = ft.valHooks[e.type] || ft.valHooks[e.nodeName.toLowerCase()]) && "get" in i && (t = i.get(e, "value")) !== undefined ? t : "string" == typeof (t = e.value) ? t.replace(je, "") : null == t ? "" : t : void 0
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : ft.trim(ft.text(t)).replace(Ne, " ")
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                        if (((n = i[l]).selected || l === o) && (ht.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ft(n).val(), r) return e;
                            a.push(e)
                        } return a
                },
                set: function (t, e) {
                    for (var n, i, o = t.options, r = ft.makeArray(e), a = o.length; a--;)
                        if (i = o[a], -1 < ft.inArray(ft.valHooks.option.get(i), r)) try {
                            i.selected = n = !0
                        } catch (s) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ft.each(["radio", "checkbox"], function () {
        ft.valHooks[this] = {
            set: function (t, e) {
                if (ft.isArray(e)) return t.checked = -1 < ft.inArray(ft(t).val(), e)
            }
        }, ht.checkOn || (ft.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ze, Oe, Fe = ft.expr.attrHandle,
        $e = /^(?:checked|selected)$/i,
        He = ht.getSetAttribute,
        qe = ht.input;
    ft.fn.extend({
        attr: function (t, e) {
            return Ht(this, ft.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                ft.removeAttr(this, t)
            })
        }
    }), ft.extend({
        attr: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === r && ft.isXMLDoc(t) || (e = e.toLowerCase(), o = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? Oe : ze)), n !== undefined ? null === n ? void ft.removeAttr(t, e) : o && "set" in o && (i = o.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = ft.find.attr(t, e)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ht.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i, o = 0,
                r = e && e.match(Et);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? qe && He || !$e.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(He ? n : i)
        }
    }), Oe = {
        set: function (t, e, n) {
            return !1 === e ? ft.removeAttr(t, n) : qe && He || !$e.test(n) ? t.setAttribute(!He && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var r = Fe[e] || ft.find.attr;
        qe && He || !$e.test(e) ? Fe[e] = function (t, e, n) {
            var i, o;
            return n || (o = Fe[e], Fe[e] = i, i = null != r(t, e, n) ? e.toLowerCase() : null, Fe[e] = o), i
        } : Fe[e] = function (t, e, n) {
            if (!n) return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), qe && He || (ft.attrHooks.value = {
        set: function (t, e, n) {
            if (!ft.nodeName(t, "input")) return ze && ze.set(t, e, n);
            t.defaultValue = e
        }
    }), He || (ze = {
        set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    }, Fe.id = Fe.name = Fe.coords = function (t, e, n) {
        var i;
        if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, ft.valHooks.button = {
        get: function (t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: ze.set
    }, ft.attrHooks.contenteditable = {
        set: function (t, e, n) {
            ze.set(t, "" !== e && e, n)
        }
    }, ft.each(["width", "height"], function (t, n) {
        ft.attrHooks[n] = {
            set: function (t, e) {
                if ("" === e) return t.setAttribute(n, "auto"), e
            }
        }
    })), ht.style || (ft.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || undefined
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var We = /^(?:input|select|textarea|button|object)$/i,
        Ze = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function (t, e) {
            return Ht(this, ft.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (e) {
            return e = ft.propFix[e] || e, this.each(function () {
                try {
                    this[e] = undefined, delete this[e]
                } catch (t) {}
            })
        }
    }), ft.extend({
        prop: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, o = ft.propHooks[e]), n !== undefined ? o && "set" in o && (i = o.set(t, n, e)) !== undefined ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : We.test(t.nodeName) || Ze.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ht.hrefNormalized || ft.each(["href", "src"], function (t, e) {
        ft.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ht.optSelected || (ft.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ft.propFix[this.toLowerCase()] = this
    }), ht.enctype || (ft.propFix.enctype = "encoding");
    var Ue = /[\t\r\n\f]/g;
    ft.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (ft.isFunction(e)) return this.each(function (t) {
                ft(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Et) || []; n = this[l++];)
                    if (o = W(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ue, " ")) {
                        for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (s = ft.trim(i)) && ft.attr(n, "class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (ft.isFunction(e)) return this.each(function (t) {
                ft(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Et) || []; n = this[l++];)
                    if (o = W(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ue, " ")) {
                        for (a = 0; r = t[a++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (s = ft.trim(i)) && ft.attr(n, "class", s)
                    } return this
        },
        toggleClass: function (o, e) {
            var r = typeof o;
            return "boolean" == typeof e && "string" === r ? e ? this.addClass(o) : this.removeClass(o) : ft.isFunction(o) ? this.each(function (t) {
                ft(this).toggleClass(o.call(this, t, W(this), e), e)
            }) : this.each(function () {
                var t, e, n, i;
                if ("string" === r)
                    for (e = 0, n = ft(this), i = o.match(Et) || []; t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else o !== undefined && "boolean" !== r || ((t = W(this)) && ft._data(this, "__className__", t), ft.attr(this, "class", t || !1 === o ? "" : ft._data(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + W(n) + " ").replace(Ue, " ").indexOf(e)) return !0;
            return !1
        }
    }), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, n) {
        ft.fn[n] = function (t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }), ft.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Ve = S.location,
        Ge = ft.now(),
        Qe = /\?/,
        Ke = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ft.parseJSON = function (t) {
        if (S.JSON && S.JSON.parse) return S.JSON.parse(t + "");
        var o, r = null,
            e = ft.trim(t + "");
        return e && !ft.trim(e.replace(Ke, function (t, e, n, i) {
            return o && e && (r = 0), 0 === r ? t : (o = n || e, r += !i - !n, "")
        })) ? Function("return " + e)() : ft.error("Invalid JSON: " + t)
    }, ft.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            S.DOMParser ? e = (new S.DOMParser).parseFromString(t, "text/xml") : ((e = new S.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
        } catch (n) {
            e = undefined
        }
        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + t), e
    };
    var Xe = /#.*$/,
        Je = /([?&])_=[^&]*/,
        Ye = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        en = /^(?:GET|HEAD)$/,
        nn = /^\/\//,
        on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        rn = {},
        an = {},
        sn = "*/".concat("*"),
        ln = Ve.href,
        un = on.exec(ln.toLowerCase()) || [];
    ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ln,
            type: "GET",
            isLocal: tn.test(un[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ft.parseJSON,
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? V(V(t, ft.ajaxSettings), e) : V(ft.ajaxSettings, t)
        },
        ajaxPrefilter: Z(rn),
        ajaxTransport: Z(an),
        ajax: function (t, e) {
            function n(t, e, n, i) {
                var o, r, a, s, l, u = e;
                2 !== x && (x = 2, d && S.clearTimeout(d), p = undefined, h = i || "", w.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, n && (s = G(m, w, n)), s = Q(m, s, w, o), o ? (m.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (ft.lastModified[c] = l), (l = w.getResponseHeader("etag")) && (ft.etag[c] = l)), 204 === t || "HEAD" === m.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = s.state, r = s.data, o = !(a = s.error))) : (a = u, !t && u || (u = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || u) + "", o ? y.resolveWith(g, [r, u, w]) : y.rejectWith(g, [w, u, a]), w.statusCode(b), b = undefined, f && v.trigger(o ? "ajaxSuccess" : "ajaxError", [w, m, o ? r : a]), _.fireWith(g, [w, u]), f && (v.trigger("ajaxComplete", [w, m]), --ft.active || ft.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = undefined), e = e || {};
            var i, o, c, h, d, f, p, r, m = ft.ajaxSetup({}, e),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? ft(g) : ft.event,
                y = ft.Deferred(),
                _ = ft.Callbacks("once memory"),
                b = m.statusCode || {},
                a = {},
                s = {},
                x = 0,
                l = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === x) {
                            if (!r)
                                for (r = {}; e = Ye.exec(h);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? h : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return x || (t = s[n] = s[n] || t, a[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return x || (m.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (x < 2)
                                for (e in t) b[e] = [b[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || l;
                        return p && p.abort(e), n(0, e), this
                    }
                };
            if (y.promise(w).complete = _.add, w.success = w.done, w.error = w.fail, m.url = ((t || m.url || ln) + "").replace(Xe, "").replace(nn, un[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = ft.trim(m.dataType || "*").toLowerCase().match(Et) || [""], null == m.crossDomain && (i = on.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === un[1] && i[2] === un[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ft.param(m.data, m.traditional)), U(rn, m, e, w), 2 === x) return w;
            for (o in (f = ft.event && m.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !en.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Qe.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Je.test(c) ? c.replace(Je, "$1_=" + Ge++) : c + (Qe.test(c) ? "&" : "?") + "_=" + Ge++)), m.ifModified && (ft.lastModified[c] && w.setRequestHeader("If-Modified-Since", ft.lastModified[c]), ft.etag[c] && w.setRequestHeader("If-None-Match", ft.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, w, m) || 2 === x)) return w.abort();
            for (o in l = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](m[o]);
            if (p = U(an, m, e, w)) {
                if (w.readyState = 1, f && v.trigger("ajaxSend", [w, m]), 2 === x) return w;
                m.async && 0 < m.timeout && (d = S.setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    x = 1, p.send(a, n)
                } catch (u) {
                    if (!(x < 2)) throw u;
                    n(-1, u)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (t, e, n) {
            return ft.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return ft.get(t, undefined, e, "script")
        }
    }), ft.each(["get", "post"], function (t, o) {
        ft[o] = function (t, e, n, i) {
            return ft.isFunction(e) && (i = i || n, n = e, e = undefined), ft.ajax(ft.extend({
                url: t,
                type: o,
                dataType: i,
                data: e,
                success: n
            }, ft.isPlainObject(t) && t))
        }
    }), ft._evalUrl = function (t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ft.fn.extend({
        wrapAll: function (e) {
            if (ft.isFunction(e)) return this.each(function (t) {
                ft(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ft(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return ft.isFunction(n) ? this.each(function (t) {
                ft(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = ft(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (e) {
            var n = ft.isFunction(e);
            return this.each(function (t) {
                ft(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ft.expr.filters.hidden = function (t) {
        return ht.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : X(t)
    }, ft.expr.filters.visible = function (t) {
        return !ft.expr.filters.hidden(t)
    };
    var cn = /%20/g,
        hn = /\[\]$/,
        dn = /\r?\n/g,
        fn = /^(?:submit|button|image|reset|file)$/i,
        pn = /^(?:input|select|textarea|keygen)/i;
    ft.param = function (t, e) {
        var n, i = [],
            o = function (t, e) {
                e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (e === undefined && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
            o(this.name, this.value)
        });
        else
            for (n in t) J(n, t[n], e, o);
        return i.join("&").replace(cn, "+")
    }, ft.fn.extend({
        serialize: function () {
            return ft.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && pn.test(this.nodeName) && !fn.test(t) && (this.checked || !qt.test(t))
            }).map(function (t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(dn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(dn, "\r\n")
                }
            }).get()
        }
    }), ft.ajaxSettings.xhr = S.ActiveXObject !== undefined ? function () {
        return this.isLocal ? tt() : 8 < it.documentMode ? Y() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || tt()
    } : Y;
    var mn = 0,
        gn = {},
        vn = ft.ajaxSettings.xhr();
    S.attachEvent && S.attachEvent("onunload", function () {
        for (var t in gn) gn[t](undefined, !0)
    }), ht.cors = !!vn && "withCredentials" in vn, (vn = ht.ajax = !!vn) && ft.ajaxTransport(function (u) {
        var c;
        if (!u.crossDomain || ht.cors) return {
            send: function (t, a) {
                var e, s = u.xhr(),
                    l = ++mn;
                if (s.open(u.type, u.url, u.async, u.username, u.password), u.xhrFields)
                    for (e in u.xhrFields) s[e] = u.xhrFields[e];
                for (e in u.mimeType && s.overrideMimeType && s.overrideMimeType(u.mimeType), u.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) t[e] !== undefined && s.setRequestHeader(e, t[e] + "");
                s.send(u.hasContent && u.data || null), c = function (t, e) {
                    var n, i, o;
                    if (c && (e || 4 === s.readyState))
                        if (delete gn[l], c = undefined, s.onreadystatechange = ft.noop, e) 4 !== s.readyState && s.abort();
                        else {
                            o = {}, n = s.status, "string" == typeof s.responseText && (o.text = s.responseText);
                            try {
                                i = s.statusText
                            } catch (r) {
                                i = ""
                            }
                            n || !u.isLocal || u.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                        } o && a(n, i, o, s.getAllResponseHeaders())
                }, u.async ? 4 === s.readyState ? S.setTimeout(c) : s.onreadystatechange = gn[l] = c : c()
            },
            abort: function () {
                c && c(undefined, !0)
            }
        }
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return ft.globalEval(t), t
            }
        }
    }), ft.ajaxPrefilter("script", function (t) {
        t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ft.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, o = it.head || ft("head")[0] || it.documentElement;
            return {
                send: function (t, n) {
                    (i = it.createElement("script")).async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (t, e) {
                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
                    }, o.insertBefore(i, o.firstChild)
                },
                abort: function () {
                    i && i.onload(undefined, !0)
                }
            }
        }
    });
    var yn = [],
        _n = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = yn.pop() || ft.expando + "_" + Ge++;
            return this[t] = !0, t
        }
    }), ft.ajaxPrefilter("json jsonp", function (t, e, n) {
        var i, o, r, a = !1 !== t.jsonp && (_n.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _n.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ft.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(_n, "$1" + i) : !1 !== t.jsonp && (t.url += (Qe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return r || ft.error(i + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = S[i], S[i] = function () {
            r = arguments
        }, n.always(function () {
            o === undefined ? ft(S).removeProp(i) : S[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, yn.push(i)), r && ft.isFunction(o) && o(r[0]), r = o = undefined
        }), "script"
    }), ft.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || it;
        var i = wt.exec(t),
            o = !n && [];
        return i ? [e.createElement(i[1])] : (i = m([t], e, o), o && o.length && ft(o).remove(), ft.merge([], i.childNodes))
    };
    var bn = ft.fn.load;
    ft.fn.load = function (t, e, n) {
        if ("string" != typeof t && bn) return bn.apply(this, arguments);
        var i, o, r, a = this,
            s = t.indexOf(" ");
        return -1 < s && (i = ft.trim(t.slice(s, t.length)), t = t.slice(0, s)), ft.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (o = "POST"), 0 < a.length && ft.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, a.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            a.each(function () {
                n.apply(this, r || [t.responseText, e, t])
            })
        }), this
    }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ft.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ft.expr.filters.animated = function (e) {
        return ft.grep(ft.timers, function (t) {
            return e === t.elem
        }).length
    }, ft.offset = {
        setOffset: function (t, e, n) {
            var i, o, r, a, s, l, u = ft.css(t, "position"),
                c = ft(t),
                h = {};
            "static" === u && (t.style.position = "relative"), s = c.offset(), r = ft.css(t, "top"), l = ft.css(t, "left"), o = ("absolute" === u || "fixed" === u) && -1 < ft.inArray("auto", [r, l]) ? (a = (i = c.position()).top, i.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, s))), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + o), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, ft.fn.extend({
        offset: function (e) {
            if (arguments.length) return e === undefined ? this : this.each(function (t) {
                ft.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, ft.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = et(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ft.css(i, "marginTop", !0),
                    left: e.left - n.left - ft.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
                return t || me
            })
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, o) {
        var r = /Y/.test(o);
        ft.fn[e] = function (t) {
            return Ht(this, function (t, e, n) {
                var i = et(t);
                if (n === undefined) return i ? o in i ? i[o] : i.document.documentElement[e] : t[e];
                i ? i.scrollTo(r ? ft(i).scrollLeft() : n, r ? n : ft(i).scrollTop()) : t[e] = n
            }, e, t, arguments.length, null)
        }
    }), ft.each(["top", "left"], function (t, n) {
        ft.cssHooks[n] = A(ht.pixelPosition, function (t, e) {
            if (e) return e = ve(t, n), fe.test(e) ? ft(t).position()[n] + "px" : e
        })
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function (r, a) {
        ft.each({
            padding: "inner" + r,
            content: a,
            "": "outer" + r
        }, function (i, t) {
            ft.fn[t] = function (t, e) {
                var n = arguments.length && (i || "boolean" != typeof t),
                    o = i || (!0 === t || !0 === e ? "margin" : "border");
                return Ht(this, function (t, e, n) {
                    var i;
                    return ft.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + r], i["scroll" + r], t.body["offset" + r], i["offset" + r], i["client" + r])) : n === undefined ? ft.css(t, e, o) : ft.style(t, e, n, o)
                }, a, n ? t : undefined, n, null)
            }
        })
    }), ft.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ft.fn.size = function () {
        return this.length
    }, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ft
    });
    var xn = S.jQuery,
        wn = S.$;
    return ft.noConflict = function (t) {
        return S.$ === ft && (S.$ = wn), t && S.jQuery === ft && (S.jQuery = xn), ft
    }, t || (S.jQuery = S.$ = ft), ft
});
var RetinaTag = RetinaTag || {};
RetinaTag.init = function () {
        window.matchMedia("(-webkit-device-pixel-ratio:1)").addListener(RetinaTag.updateImages), document.addEventListener("page:load", RetinaTag.updateImages), document.addEventListener("retina_tag:refresh", RetinaTag.updateImages)
    }, RetinaTag.updateImages = function () {
        for (var t = document.getElementsByTagName("img"), e = 0; e < t.length; e++) t[e].getAttribute("data-lazy-load") || RetinaTag.refreshImage(t[e])
    }, RetinaTag.refreshImage = function (t) {
        var e = t.getAttribute("data-lazy-load"),
            n = t.src,
            i = t.getAttribute("data-hidpi-src"),
            o = t.getAttribute("data-lowdpi-src");
        i && (e && t.removeAttribute("data-lazy-load"), 1 < window.devicePixelRatio && n != i ? (o || t.setAttribute("data-lowdpi-src", n), t.src = i) : (!window.devicePixelRatio || window.devicePixelRatio <= 1) && (n == i || o && n != o) && (t.src = o))
    }, window.devicePixelRatio !== undefined && (RetinaTag.init(), $(document).ready(RetinaTag.updateImages)),
    function (c, l) {
        "use strict";
        var u;
        c.rails !== l && c.error("jquery-ujs has already been loaded!");
        var t = c(document);
        c.rails = u = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function () {
                return c("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function () {
                return c("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function (t) {
                var e = u.csrfToken();
                e && t.setRequestHeader("X-CSRF-Token", e)
            },
            refreshCSRFTokens: function () {
                c('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken())
            },
            fire: function (t, e, n) {
                var i = c.Event(e);
                return t.trigger(i, n), !1 !== i.result
            },
            confirm: function (t) {
                return confirm(t)
            },
            ajax: function (t) {
                return c.ajax(t)
            },
            href: function (t) {
                return t[0].href
            },
            isRemote: function (t) {
                return t.data("remote") !== l && !1 !== t.data("remote")
            },
            handleRemote: function (i) {
                var t, e, n, o, r, a;
                if (u.fire(i, "ajax:before")) {
                    if (o = i.data("with-credentials") || null, r = i.data("type") || c.ajaxSettings && c.ajaxSettings.dataType, i.is("form")) {
                        t = i.data("ujs:submit-button-formmethod") || i.attr("method"), e = i.data("ujs:submit-button-formaction") || i.attr("action"), n = c(i[0]).serializeArray();
                        var s = i.data("ujs:submit-button");
                        s && (n.push(s), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(u.inputChangeSelector) ? (t = i.data("method"), e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(u.buttonClickSelector) ? (t = i.data("method") || "get", e = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (t = i.data("method"), e = u.href(i), n = i.data("params") || null);
                    return a = {
                        type: t || "GET",
                        data: n,
                        dataType: r,
                        beforeSend: function (t, e) {
                            if (e.dataType === l && t.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), !u.fire(i, "ajax:beforeSend", [t, e])) return !1;
                            i.trigger("ajax:send", t)
                        },
                        success: function (t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function (t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function (t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: u.isCrossDomain(e)
                    }, o && (a.xhrFields = {
                        withCredentials: o
                    }), e && (a.url = e), u.ajax(a)
                }
                return !1
            },
            isCrossDomain: function (t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function (t) {
                var e = u.href(t),
                    n = t.data("method"),
                    i = t.attr("target"),
                    o = u.csrfToken(),
                    r = u.csrfParam(),
                    a = c('<form method="post" action="' + e + '"></form>'),
                    s = '<input name="_method" value="' + n + '" type="hidden" />';
                r === l || o === l || u.isCrossDomain(e) || (s += '<input name="' + r + '" value="' + o + '" type="hidden" />'), i && a.attr("target", i), a.hide().append(s).appendTo("body"), a.submit()
            },
            formElements: function (t, e) {
                return t.is("form") ? c(t[0].elements).filter(e) : t.find(e)
            },
            disableFormElements: function (t) {
                u.formElements(t, u.disableSelector).each(function () {
                    u.disableFormElement(c(this))
                })
            },
            disableFormElement: function (t) {
                var e, n;
                e = t.is("button") ? "html" : "val", (n = t.data("disable-with")) !== l && (t.data("ujs:enable-with", t[e]()), t[e](n)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
            },
            enableFormElements: function (t) {
                u.formElements(t, u.enableSelector).each(function () {
                    u.enableFormElement(c(this))
                })
            },
            enableFormElement: function (t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") !== l && (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
            },
            allowAction: function (t) {
                var e, n = t.data("confirm"),
                    i = !1;
                if (!n) return !0;
                if (u.fire(t, "confirm")) {
                    try {
                        i = u.confirm(n)
                    } catch (o) {
                        (console.error || console.log).call(console, o.stack || o)
                    }
                    e = u.fire(t, "confirm:complete", [i])
                }
                return i && e
            },
            blankInputs: function (t, e, n) {
                var i, o, r, a = c(),
                    s = e || "input,textarea",
                    l = t.find(s),
                    u = {};
                return l.each(function () {
                    (i = c(this)).is("input[type=radio]") ? (r = i.attr("name"), u[r] || (0 === t.find('input[type=radio]:checked[name="' + r + '"]').length && (o = t.find('input[type=radio][name="' + r + '"]'), a = a.add(o)), u[r] = r)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (a = a.add(i))
                }), !!a.length && a
            },
            nonBlankInputs: function (t, e) {
                return u.blankInputs(t, e, !0)
            },
            stopEverything: function (t) {
                return c(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function (t) {
                var e = t.data("disable-with");
                e !== l && (t.data("ujs:enable-with", t.html()), t.html(e)), t.bind("click.railsDisable", function (t) {
                    return u.stopEverything(t)
                }), t.data("ujs:disabled", !0)
            },
            enableElement: function (t) {
                t.data("ujs:enable-with") !== l && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
            }
        }, u.fire(t, "rails:attachBindings") && (c.ajaxPrefilter(function (t, e, n) {
            t.crossDomain || u.CSRFProtection(n)
        }), c(window).on("pageshow.rails", function () {
            c(c.rails.enableSelector).each(function () {
                var t = c(this);
                t.data("ujs:disabled") && c.rails.enableFormElement(t)
            }), c(c.rails.linkDisableSelector).each(function () {
                var t = c(this);
                t.data("ujs:disabled") && c.rails.enableElement(t)
            })
        }), t.on("ajax:complete", u.linkDisableSelector, function () {
            u.enableElement(c(this))
        }), t.on("ajax:complete", u.buttonDisableSelector, function () {
            u.enableFormElement(c(this))
        }), t.on("click.rails", u.linkClickSelector, function (t) {
            var e = c(this),
                n = e.data("method"),
                i = e.data("params"),
                o = t.metaKey || t.ctrlKey;
            if (!u.allowAction(e)) return u.stopEverything(t);
            if (!o && e.is(u.linkDisableSelector) && u.disableElement(e), u.isRemote(e)) {
                if (o && (!n || "GET" === n) && !i) return !0;
                var r = u.handleRemote(e);
                return !1 === r ? u.enableElement(e) : r.fail(function () {
                    u.enableElement(e)
                }), !1
            }
            return n ? (u.handleMethod(e), !1) : void 0
        }), t.on("click.rails", u.buttonClickSelector, function (t) {
            var e = c(this);
            if (!u.allowAction(e) || !u.isRemote(e)) return u.stopEverything(t);
            e.is(u.buttonDisableSelector) && u.disableFormElement(e);
            var n = u.handleRemote(e);
            return !1 === n ? u.enableFormElement(e) : n.fail(function () {
                u.enableFormElement(e)
            }), !1
        }), t.on("change.rails", u.inputChangeSelector, function (t) {
            var e = c(this);
            return u.allowAction(e) && u.isRemote(e) ? (u.handleRemote(e), !1) : u.stopEverything(t)
        }), t.on("submit.rails", u.formSubmitSelector, function (t) {
            var e, n, i = c(this),
                o = u.isRemote(i);
            if (!u.allowAction(i)) return u.stopEverything(t);
            if (i.attr("novalidate") === l)
                if (i.data("ujs:formnovalidate-button") === l) {
                    if ((e = u.blankInputs(i, u.requiredInputSelector, !1)) && u.fire(i, "ajax:aborted:required", [e])) return u.stopEverything(t)
                } else i.data("ujs:formnovalidate-button", l);
            if (o) {
                if (n = u.nonBlankInputs(i, u.fileInputSelector)) {
                    setTimeout(function () {
                        u.disableFormElements(i)
                    }, 13);
                    var r = u.fire(i, "ajax:aborted:file", [n]);
                    return r || setTimeout(function () {
                        u.enableFormElements(i)
                    }, 13), r
                }
                return u.handleRemote(i), !1
            }
            setTimeout(function () {
                u.disableFormElements(i)
            }, 13)
        }), t.on("click.rails", u.formInputClickSelector, function (t) {
            var e = c(this);
            if (!u.allowAction(e)) return u.stopEverything(t);
            var n = e.attr("name"),
                i = n ? {
                    name: n,
                    value: e.val()
                } : null,
                o = e.closest("form");
            0 === o.length && (o = c("#" + e.attr("form"))), o.data("ujs:submit-button", i), o.data("ujs:formnovalidate-button", e.attr("formnovalidate")), o.data("ujs:submit-button-formaction", e.attr("formaction")), o.data("ujs:submit-button-formmethod", e.attr("formmethod"))
        }), t.on("ajax:send.rails", u.formSubmitSelector, function (t) {
            this === t.target && u.disableFormElements(c(this))
        }), t.on("ajax:complete.rails", u.formSubmitSelector, function (t) {
            this === t.target && u.enableFormElements(c(this))
        }), c(function () {
            u.refreshCSRFTokens()
        }))
    }(jQuery),
    function () {
        var t = this;
        (function () {
            (function () {
                this.Turbolinks = {
                    supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
                    visit: function (t, e) {
                        return c.controller.visit(t, e)
                    },
                    clearCache: function () {
                        return c.controller.clearCache()
                    },
                    setProgressBarDelay: function (t) {
                        return c.controller.setProgressBarDelay(t)
                    }
                }
            }).call(this)
        }).call(t);
        var c = t.Turbolinks;
        (function () {
            (function () {
                var n, i, l, t, e, o, r, a, s, u = [].slice;
                c.copyObject = function (t) {
                    var e, n, i;
                    for (e in n = {}, t) i = t[e], n[e] = i;
                    return n
                }, c.closest = function (t, e) {
                    return n.call(t, e)
                }, n = null != (s = document.documentElement.closest) ? s : function (t) {
                    var e;
                    for (e = this; e;) {
                        if (e.nodeType === Node.ELEMENT_NODE && i.call(e, t)) return e;
                        e = e.parentNode
                    }
                }, c.defer = function (t) {
                    return setTimeout(t, 1)
                }, c.throttle = function (n) {
                    var i;
                    return i = null,
                        function () {
                            var t, e;
                            return t = 1 <= arguments.length ? u.call(arguments, 0) : [], null != i ? i : i = requestAnimationFrame((e = this, function () {
                                return i = null, n.apply(e, t)
                            }))
                        }
                }, c.dispatch = function (t, e) {
                    var n, i, o, r, a, s;
                    return s = (a = null != e ? e : {}).target, n = a.cancelable, i = a.data, (o = document.createEvent("Events")).initEvent(t, !0, !0 === n), o.data = null != i ? i : {}, o.cancelable && !l && (r = o.preventDefault, o.preventDefault = function () {
                        return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                            get: function () {
                                return !0
                            }
                        }), r.call(this)
                    }), (null != s ? s : document).dispatchEvent(o), o
                }, (a = document.createEvent("Events")).initEvent("test", !0, !0), a.preventDefault(), l = a.defaultPrevented, c.match = function (t, e) {
                    return i.call(t, e)
                }, i = null != (e = null != (o = null != (r = (t = document.documentElement).matchesSelector) ? r : t.webkitMatchesSelector) ? o : t.msMatchesSelector) ? e : t.mozMatchesSelector, c.uuid = function () {
                    var t, e, n;
                    for (n = "", t = e = 1; e <= 36; t = ++e) n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                    return n
                }
            }).call(this),
                function () {
                    c.Location = function () {
                        function t(t) {
                            var e, n;
                            null == t && (t = ""), (n = document.createElement("a")).href = t.toString(), this.absoluteURL = n.href, (e = n.hash.length) < 2 ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = n.hash.slice(1))
                        }
                        var e, n, i, o;
                        return t.wrap = function (t) {
                            return t instanceof this ? t : new this(t)
                        }, t.prototype.getOrigin = function () {
                            return this.absoluteURL.split("/", 3).join("/")
                        }, t.prototype.getPath = function () {
                            var t, e;
                            return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
                        }, t.prototype.getPathComponents = function () {
                            return this.getPath().split("/").slice(1)
                        }, t.prototype.getLastPathComponent = function () {
                            return this.getPathComponents().slice(-1)[0]
                        }, t.prototype.getExtension = function () {
                            var t, e;
                            return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
                        }, t.prototype.isHTML = function () {
                            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                        }, t.prototype.isPrefixedBy = function (t) {
                            var e;
                            return e = n(t), this.isEqualTo(t) || o(this.absoluteURL, e)
                        }, t.prototype.isEqualTo = function (t) {
                            return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
                        }, t.prototype.toCacheKey = function () {
                            return this.requestURL
                        }, t.prototype.toJSON = function () {
                            return this.absoluteURL
                        }, t.prototype.toString = function () {
                            return this.absoluteURL
                        }, t.prototype.valueOf = function () {
                            return this.absoluteURL
                        }, n = function (t) {
                            return e(t.getOrigin() + t.getPath())
                        }, e = function (t) {
                            return i(t, "/") ? t : t + "/"
                        }, o = function (t, e) {
                            return t.slice(0, e.length) === e
                        }, i = function (t, e) {
                            return t.slice(-e.length) === e
                        }, t
                    }()
                }.call(this),
                function () {
                    var i = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    };
                    c.HttpRequest = function () {
                        function t(t, e, n) {
                            this.delegate = t, this.requestCanceled = i(this.requestCanceled, this), this.requestTimedOut = i(this.requestTimedOut, this), this.requestFailed = i(this.requestFailed, this), this.requestLoaded = i(this.requestLoaded, this), this.requestProgressed = i(this.requestProgressed, this), this.url = c.Location.wrap(e).requestURL, this.referrer = c.Location.wrap(n).absoluteURL, this.createXHR()
                        }
                        return t.NETWORK_FAILURE = 0, t.TIMEOUT_FAILURE = -1, t.timeout = 60, t.prototype.send = function () {
                            var t;
                            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
                        }, t.prototype.cancel = function () {
                            return this.xhr && this.sent ? this.xhr.abort() : void 0
                        }, t.prototype.requestProgressed = function (t) {
                            return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
                        }, t.prototype.requestLoaded = function () {
                            return this.endRequest((e = this, function () {
                                var t;
                                return 200 <= (t = e.xhr.status) && t < 300 ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
                            }));
                            var e
                        }, t.prototype.requestFailed = function () {
                            return this.endRequest((t = this, function () {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                            }));
                            var t
                        }, t.prototype.requestTimedOut = function () {
                            return this.endRequest((t = this, function () {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                            }));
                            var t
                        }, t.prototype.requestCanceled = function () {
                            return this.endRequest()
                        }, t.prototype.notifyApplicationBeforeRequestStart = function () {
                            return c.dispatch("turbolinks:request-start", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, t.prototype.notifyApplicationAfterRequestEnd = function () {
                            return c.dispatch("turbolinks:request-end", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, t.prototype.createXHR = function () {
                            return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                        }, t.prototype.endRequest = function (t) {
                            return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
                        }, t.prototype.setProgress = function (t) {
                            var e;
                            return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
                        }, t.prototype.destroy = function () {
                            var t;
                            return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
                        }, t
                    }()
                }.call(this),
                function () {
                    var n = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    };
                    c.ProgressBar = function () {
                        function t() {
                            this.trickle = n(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                        }
                        var e;
                        return e = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + e + "ms ease-out, opacity " + e / 2 + "ms " + e / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function () {
                            return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                        }, t.prototype.hide = function () {
                            return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((t = this, function () {
                                return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1
                            }))) : void 0;
                            var t
                        }, t.prototype.setValue = function (t) {
                            return this.value = t, this.refresh()
                        }, t.prototype.installStylesheetElement = function () {
                            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                        }, t.prototype.installProgressElement = function () {
                            return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                        }, t.prototype.fadeProgressElement = function (t) {
                            return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * e)
                        }, t.prototype.uninstallProgressElement = function () {
                            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                        }, t.prototype.startTrickling = function () {
                            return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, e)
                        }, t.prototype.stopTrickling = function () {
                            return clearInterval(this.trickleInterval), this.trickleInterval = null
                        }, t.prototype.trickle = function () {
                            return this.setValue(this.value + Math.random() / 100)
                        }, t.prototype.refresh = function () {
                            return requestAnimationFrame((t = this, function () {
                                return t.progressElement.style.width = 10 + 90 * t.value + "%"
                            }));
                            var t
                        }, t.prototype.createStylesheetElement = function () {
                            var t;
                            return (t = document.createElement("style")).type = "text/css", t.textContent = this.constructor.defaultCSS, t
                        }, t.prototype.createProgressElement = function () {
                            var t;
                            return (t = document.createElement("div")).className = "turbolinks-progress-bar", t
                        }, t
                    }()
                }.call(this),
                function () {
                    var o = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    };
                    c.BrowserAdapter = function () {
                        function t(t) {
                            this.controller = t, this.showProgressBar = o(this.showProgressBar, this), this.progressBar = new c.ProgressBar
                        }
                        var n, i, e;
                        return e = c.HttpRequest, n = e.NETWORK_FAILURE, i = e.TIMEOUT_FAILURE, t.prototype.visitProposedToLocationWithAction = function (t, e) {
                            return this.controller.startVisitToLocationWithAction(t, e)
                        }, t.prototype.visitStarted = function (t) {
                            return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                        }, t.prototype.visitRequestStarted = function (t) {
                            return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                        }, t.prototype.visitRequestProgressed = function (t) {
                            return this.progressBar.setValue(t.progress)
                        }, t.prototype.visitRequestCompleted = function (t) {
                            return t.loadResponse()
                        }, t.prototype.visitRequestFailedWithStatusCode = function (t, e) {
                            switch (e) {
                                case n:
                                case i:
                                    return this.reload();
                                default:
                                    return t.loadResponse()
                            }
                        }, t.prototype.visitRequestFinished = function () {
                            return this.hideProgressBar()
                        }, t.prototype.visitCompleted = function (t) {
                            return t.followRedirect()
                        }, t.prototype.pageInvalidated = function () {
                            return this.reload()
                        }, t.prototype.showProgressBarAfterDelay = function () {
                            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
                        }, t.prototype.showProgressBar = function () {
                            return this.progressBar.show()
                        }, t.prototype.hideProgressBar = function () {
                            return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                        }, t.prototype.reload = function () {
                            return window.location.reload()
                        }, t
                    }()
                }.call(this),
                function () {
                    var e = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    };
                    c.History = function () {
                        function t(t) {
                            this.delegate = t, this.onPageLoad = e(this.onPageLoad, this), this.onPopState = e(this.onPopState, this)
                        }
                        return t.prototype.start = function () {
                            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
                        }, t.prototype.stop = function () {
                            return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
                        }, t.prototype.push = function (t, e) {
                            return t = c.Location.wrap(t), this.update("push", t, e)
                        }, t.prototype.replace = function (t, e) {
                            return t = c.Location.wrap(t), this.update("replace", t, e)
                        }, t.prototype.onPopState = function (t) {
                            var e, n, i, o;
                            return this.shouldHandlePopState() && (o = null != (n = t.state) ? n.turbolinks : void 0) ? (e = c.Location.wrap(window.location), i = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(e, i)) : void 0
                        }, t.prototype.onPageLoad = function () {
                            return c.defer((t = this, function () {
                                return t.pageLoaded = !0
                            }));
                            var t
                        }, t.prototype.shouldHandlePopState = function () {
                            return this.pageIsLoaded()
                        }, t.prototype.pageIsLoaded = function () {
                            return this.pageLoaded || "complete" === document.readyState
                        }, t.prototype.update = function (t, e, n) {
                            var i;
                            return i = {
                                turbolinks: {
                                    restorationIdentifier: n
                                }
                            }, history[t + "State"](i, null, e)
                        }, t
                    }()
                }.call(this),
                function () {
                    c.HeadDetails = function () {
                        function t(t) {
                            var e, n, i, o, r;
                            for (this.elements = {}, n = 0, o = t.length; n < o; n++)(r = t[n]).nodeType === Node.ELEMENT_NODE && (i = r.outerHTML, (null != (e = this.elements)[i] ? e[i] : e[i] = {
                                type: s(r),
                                tracked: a(r),
                                elements: []
                            }).elements.push(r))
                        }
                        var r, e, n, a, s;
                        return t.fromHeadElement = function (t) {
                            var e;
                            return new this(null != (e = null != t ? t.childNodes : void 0) ? e : [])
                        }, t.prototype.hasElementWithKey = function (t) {
                            return t in this.elements
                        }, t.prototype.getTrackedElementSignature = function () {
                            var n;
                            return function () {
                                var t, e;
                                for (n in e = [], t = this.elements) t[n].tracked && e.push(n);
                                return e
                            }.call(this).join("")
                        }, t.prototype.getScriptElementsNotInDetails = function (t) {
                            return this.getElementsMatchingTypeNotInDetails("script", t)
                        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
                            return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
                        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
                            var n, i, o, r, a, s;
                            for (i in a = [], o = this.elements) s = (r = o[i]).type, n = r.elements, s !== t || e.hasElementWithKey(i) || a.push(n[0]);
                            return a
                        }, t.prototype.getProvisionalElements = function () {
                            var t, e, n, i, o, r, a;
                            for (e in n = [], i = this.elements) a = (o = i[e]).type, r = o.tracked, t = o.elements, null != a || r ? 1 < t.length && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
                            return n
                        }, t.prototype.getMetaValue = function (t) {
                            var e;
                            return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0
                        }, t.prototype.findMetaElementByName = function (t) {
                            var e, n, i, o;
                            for (i in e = void 0, o = this.elements) n = o[i].elements, r(n[0], t) && (e = n[0]);
                            return e
                        }, s = function (t) {
                            return e(t) ? "script" : n(t) ? "stylesheet" : void 0
                        }, a = function (t) {
                            return "reload" === t.getAttribute("data-turbolinks-track")
                        }, e = function (t) {
                            return "script" === t.tagName.toLowerCase()
                        }, n = function (t) {
                            var e;
                            return "style" === (e = t.tagName.toLowerCase()) || "link" === e && "stylesheet" === t.getAttribute("rel")
                        }, r = function (t, e) {
                            return "meta" === t.tagName.toLowerCase() && t.getAttribute("name") === e
                        }, t
                    }()
                }.call(this),
                function () {
                    c.Snapshot = function () {
                        function t(t, e) {
                            this.headDetails = t, this.bodyElement = e
                        }
                        return t.wrap = function (t) {
                            return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t)
                        }, t.fromHTMLString = function (t) {
                            var e;
                            return (e = document.createElement("html")).innerHTML = t, this.fromHTMLElement(e)
                        }, t.fromHTMLElement = function (t) {
                            var e, n, i;
                            return n = t.querySelector("head"), e = null != (i = t.querySelector("body")) ? i : document.createElement("body"), new this(c.HeadDetails.fromHeadElement(n), e)
                        }, t.prototype.clone = function () {
                            return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0))
                        }, t.prototype.getRootLocation = function () {
                            var t, e;
                            return e = null != (t = this.getSetting("root")) ? t : "/", new c.Location(e)
                        }, t.prototype.getCacheControlValue = function () {
                            return this.getSetting("cache-control")
                        }, t.prototype.getElementForAnchor = function (t) {
                            try {
                                return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']")
                            } catch (c) {}
                        }, t.prototype.getPermanentElements = function () {
                            return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
                        }, t.prototype.getPermanentElementById = function (t) {
                            return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]")
                        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
                            var e, n, i, o, r;
                            for (r = [], n = 0, i = (o = this.getPermanentElements()).length; n < i; n++) e = o[n], t.getPermanentElementById(e.id) && r.push(e);
                            return r
                        }, t.prototype.findFirstAutofocusableElement = function () {
                            return this.bodyElement.querySelector("[autofocus]")
                        }, t.prototype.hasAnchor = function (t) {
                            return null != this.getElementForAnchor(t)
                        }, t.prototype.isPreviewable = function () {
                            return "no-preview" !== this.getCacheControlValue()
                        }, t.prototype.isCacheable = function () {
                            return "no-cache" !== this.getCacheControlValue()
                        }, t.prototype.isVisitable = function () {
                            return "reload" !== this.getSetting("visit-control")
                        }, t.prototype.getSetting = function (t) {
                            return this.headDetails.getMetaValue("turbolinks-" + t)
                        }, t
                    }()
                }.call(this),
                function () {
                    var r = [].slice;
                    c.Renderer = function () {
                        function t() {}
                        var n;
                        return t.render = function (t, e) {
                            var n, i, o;
                            return i = t, n = e, (o = function (t, e, n) {
                                n.prototype = t.prototype;
                                var i = new n,
                                    o = t.apply(i, e);
                                return Object(o) === o ? o : i
                            }(this, 3 <= arguments.length ? r.call(arguments, 2) : [], function () {})).delegate = i, o.render(n), o
                        }, t.prototype.renderView = function (t) {
                            return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
                        }, t.prototype.invalidateView = function () {
                            return this.delegate.viewInvalidated()
                        }, t.prototype.createScriptElement = function (t) {
                            var e;
                            return "false" === t.getAttribute("data-turbolinks-eval") ? t : ((e = document.createElement("script")).textContent = t.textContent, e.async = !1, n(e, t), e)
                        }, n = function (t, e) {
                            var n, i, o, r, a, s, l;
                            for (s = [], n = 0, i = (r = e.attributes).length; n < i; n++) o = (a = r[n]).name, l = a.value, s.push(t.setAttribute(o, l));
                            return s
                        }, t
                    }()
                }.call(this),
                function () {
                    var s, l, n = function (t, e) {
                            function n() {
                                this.constructor = t
                            }
                            for (var i in e) o.call(e, i) && (t[i] = e[i]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                        },
                        o = {}.hasOwnProperty;
                    c.SnapshotRenderer = function (t) {
                        function e(t, e, n) {
                            this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = n, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement
                        }
                        return n(e, t), e.prototype.render = function (t) {
                            return this.shouldRender() ? (this.mergeHead(), this.renderView((e = this, function () {
                                return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t()
                            }))) : this.invalidateView();
                            var e
                        }, e.prototype.mergeHead = function () {
                            return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                        }, e.prototype.replaceBody = function () {
                            var t;
                            return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t)
                        }, e.prototype.shouldRender = function () {
                            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
                        }, e.prototype.trackedElementsAreIdentical = function () {
                            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                        }, e.prototype.copyNewHeadStylesheetElements = function () {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getNewHeadStylesheetElements()).length; e < n; e++) t = i[e], o.push(document.head.appendChild(t));
                            return o
                        }, e.prototype.copyNewHeadScriptElements = function () {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getNewHeadScriptElements()).length; e < n; e++) t = i[e], o.push(document.head.appendChild(this.createScriptElement(t)));
                            return o
                        }, e.prototype.removeCurrentHeadProvisionalElements = function () {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getCurrentHeadProvisionalElements()).length; e < n; e++) t = i[e], o.push(document.head.removeChild(t));
                            return o
                        }, e.prototype.copyNewHeadProvisionalElements = function () {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getNewHeadProvisionalElements()).length; e < n; e++) t = i[e], o.push(document.head.appendChild(t));
                            return o
                        }, e.prototype.relocateCurrentBodyPermanentElements = function () {
                            var t, e, n, i, o, r, a;
                            for (a = [], t = 0, e = (r = this.getCurrentBodyPermanentElements()).length; t < e; t++) i = r[t], o = s(i), n = this.newSnapshot.getPermanentElementById(i.id), l(i, o.element), l(n, i), a.push(o);
                            return a
                        }, e.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
                            var e, n, i, o, r, a;
                            for (a = [], i = 0, o = t.length; i < o; i++) n = (r = t[i]).element, e = r.permanentElement.cloneNode(!0), a.push(l(n, e));
                            return a
                        }, e.prototype.activateNewBodyScriptElements = function () {
                            var t, e, n, i, o, r;
                            for (r = [], e = 0, i = (o = this.getNewBodyScriptElements()).length; e < i; e++) n = o[e], t = this.createScriptElement(n), r.push(l(n, t));
                            return r
                        }, e.prototype.assignNewBody = function () {
                            return document.body = this.newBody
                        }, e.prototype.focusFirstAutofocusableElement = function () {
                            var t;
                            return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0
                        }, e.prototype.getNewHeadStylesheetElements = function () {
                            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                        }, e.prototype.getNewHeadScriptElements = function () {
                            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                        }, e.prototype.getCurrentHeadProvisionalElements = function () {
                            return this.currentHeadDetails.getProvisionalElements()
                        }, e.prototype.getNewHeadProvisionalElements = function () {
                            return this.newHeadDetails.getProvisionalElements()
                        }, e.prototype.getCurrentBodyPermanentElements = function () {
                            return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
                        }, e.prototype.getNewBodyScriptElements = function () {
                            return this.newBody.querySelectorAll("script")
                        }, e
                    }(c.Renderer), s = function (t) {
                        var e;
                        return (e = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
                            element: e,
                            permanentElement: t
                        }
                    }, l = function (t, e) {
                        var n;
                        return (n = t.parentNode) ? n.replaceChild(e, t) : void 0
                    }
                }.call(this),
                function () {
                    var n = function (t, e) {
                            function n() {
                                this.constructor = t
                            }
                            for (var i in e) o.call(e, i) && (t[i] = e[i]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                        },
                        o = {}.hasOwnProperty;
                    c.ErrorRenderer = function (t) {
                        function e(t) {
                            var e;
                            (e = document.createElement("html")).innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body")
                        }
                        return n(e, t), e.prototype.render = function (t) {
                            return this.renderView((e = this, function () {
                                return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t()
                            }));
                            var e
                        }, e.prototype.replaceHeadAndBody = function () {
                            var t, e;
                            return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t)
                        }, e.prototype.activateBodyScriptElements = function () {
                            var t, e, n, i, o, r;
                            for (r = [], e = 0, n = (i = this.getScriptElements()).length; e < n; e++) o = i[e], t = this.createScriptElement(o), r.push(o.parentNode.replaceChild(t, o));
                            return r
                        }, e.prototype.getScriptElements = function () {
                            return document.documentElement.querySelectorAll("script")
                        }, e
                    }(c.Renderer)
                }.call(this),
                function () {
                    c.View = function () {
                        function t(t) {
                            this.delegate = t, this.htmlElement = document.documentElement
                        }
                        return t.prototype.getRootLocation = function () {
                            return this.getSnapshot().getRootLocation()
                        }, t.prototype.getElementForAnchor = function (t) {
                            return this.getSnapshot().getElementForAnchor(t)
                        }, t.prototype.getSnapshot = function () {
                            return c.Snapshot.fromHTMLElement(this.htmlElement)
                        }, t.prototype.render = function (t, e) {
                            var n, i, o;
                            return o = t.snapshot, n = t.error, i = t.isPreview, this.markAsPreview(i), null != o ? this.renderSnapshot(o, i, e) : this.renderError(n, e)
                        }, t.prototype.markAsPreview = function (t) {
                            return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
                        }, t.prototype.renderSnapshot = function (t, e, n) {
                            return c.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), c.Snapshot.wrap(t), e)
                        }, t.prototype.renderError = function (t, e) {
                            return c.ErrorRenderer.render(this.delegate, e, t)
                        }, t
                    }()
                }.call(this),
                function () {
                    var e = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    };
                    c.ScrollManager = function () {
                        function t(t) {
                            this.delegate = t, this.onScroll = e(this.onScroll, this), this.onScroll = c.throttle(this.onScroll)
                        }
                        return t.prototype.start = function () {
                            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                        }, t.prototype.stop = function () {
                            return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                        }, t.prototype.scrollToElement = function (t) {
                            return t.scrollIntoView()
                        }, t.prototype.scrollToPosition = function (t) {
                            var e, n;
                            return e = t.x, n = t.y, window.scrollTo(e, n)
                        }, t.prototype.onScroll = function () {
                            return this.updatePosition({
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            })
                        }, t.prototype.updatePosition = function (t) {
                            var e;
                            return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
                        }, t
                    }()
                }.call(this),
                function () {
                    c.SnapshotCache = function () {
                        function t(t) {
                            this.size = t, this.keys = [], this.snapshots = {}
                        }
                        var i;
                        return t.prototype.has = function (t) {
                            return i(t) in this.snapshots
                        }, t.prototype.get = function (t) {
                            var e;
                            if (this.has(t)) return e = this.read(t), this.touch(t), e
                        }, t.prototype.put = function (t, e) {
                            return this.write(t, e), this.touch(t), e
                        }, t.prototype.read = function (t) {
                            var e;
                            return e = i(t), this.snapshots[e]
                        }, t.prototype.write = function (t, e) {
                            var n;
                            return n = i(t), this.snapshots[n] = e
                        }, t.prototype.touch = function (t) {
                            var e, n;
                            return n = i(t), -1 < (e = this.keys.indexOf(n)) && this.keys.splice(e, 1), this.keys.unshift(n), this.trim()
                        }, t.prototype.trim = function () {
                            var t, e, n, i, o;
                            for (o = [], t = 0, n = (i = this.keys.splice(this.size)).length; t < n; t++) e = i[t], o.push(delete this.snapshots[e]);
                            return o
                        }, i = function (t) {
                            return c.Location.wrap(t).toCacheKey()
                        }, t
                    }()
                }.call(this),
                function () {
                    var i = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    };
                    c.Visit = function () {
                        function t(t, e, n) {
                            this.controller = t, this.action = n, this.performScroll = i(this.performScroll, this), this.identifier = c.uuid(), this.location = c.Location.wrap(e), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                        }
                        var n;
                        return t.prototype.start = function () {
                            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                        }, t.prototype.cancel = function () {
                            var t;
                            return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                        }, t.prototype.complete = function () {
                            var t;
                            return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                        }, t.prototype.fail = function () {
                            var t;
                            return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
                        }, t.prototype.changeHistory = function () {
                            var t, e;
                            return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0)
                        }, t.prototype.issueRequest = function () {
                            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new c.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                        }, t.prototype.getCachedSnapshot = function () {
                            var t;
                            return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
                        }, t.prototype.hasCachedSnapshot = function () {
                            return null != this.getCachedSnapshot()
                        }, t.prototype.loadCachedSnapshot = function () {
                            var e, n;
                            return (n = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function () {
                                var t;
                                return this.cacheSnapshot(), this.controller.render({
                                    snapshot: n,
                                    isPreview: e
                                }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), e ? void 0 : this.complete()
                            })) : void 0
                        }, t.prototype.loadResponse = function () {
                            return null != this.response ? this.render(function () {
                                var t, e;
                                return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                                    error: this.response
                                }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
                                    snapshot: this.response
                                }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                            }) : void 0
                        }, t.prototype.followRedirect = function () {
                            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                        }, t.prototype.requestStarted = function () {
                            var t;
                            return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
                        }, t.prototype.requestProgressed = function (t) {
                            var e;
                            return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
                        }, t.prototype.requestCompletedWithResponse = function (t, e) {
                            return this.response = t, null != e && (this.redirectedToLocation = c.Location.wrap(e)), this.adapter.visitRequestCompleted(this)
                        }, t.prototype.requestFailedWithStatusCode = function (t, e) {
                            return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
                        }, t.prototype.requestFinished = function () {
                            var t;
                            return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
                        }, t.prototype.performScroll = function () {
                            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                        }, t.prototype.scrollToRestoredPosition = function () {
                            var t, e;
                            return null != (t = null != (e = this.restorationData) ? e.scrollPosition : void 0) ? (this.controller.scrollToPosition(t), !0) : void 0
                        }, t.prototype.scrollToAnchor = function () {
                            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                        }, t.prototype.scrollToTop = function () {
                            return this.controller.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, t.prototype.recordTimingMetric = function (t) {
                            var e;
                            return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
                        }, t.prototype.getTimingMetrics = function () {
                            return c.copyObject(this.timingMetrics)
                        }, n = function (t) {
                            switch (t) {
                                case "replace":
                                    return "replaceHistoryWithLocationAndRestorationIdentifier";
                                case "advance":
                                case "restore":
                                    return "pushHistoryWithLocationAndRestorationIdentifier"
                            }
                        }, t.prototype.shouldIssueRequest = function () {
                            return "restore" !== this.action || !this.hasCachedSnapshot()
                        }, t.prototype.cacheSnapshot = function () {
                            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                        }, t.prototype.render = function (t) {
                            return this.cancelRender(), this.frame = requestAnimationFrame((e = this, function () {
                                return e.frame = null, t.call(e)
                            }));
                            var e
                        }, t.prototype.cancelRender = function () {
                            return this.frame ? cancelAnimationFrame(this.frame) : void 0
                        }, t
                    }()
                }.call(this),
                function () {
                    var e = function (t, e) {
                        return function () {
                            return t.apply(e, arguments)
                        }
                    };
                    c.Controller = function () {
                        function t() {
                            this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new c.History(this), this.view = new c.View(this), this.scrollManager = new c.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
                        }
                        return t.prototype.start = function () {
                            return c.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                        }, t.prototype.disable = function () {
                            return this.enabled = !1
                        }, t.prototype.stop = function () {
                            return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                        }, t.prototype.clearCache = function () {
                            return this.cache = new c.SnapshotCache(10)
                        }, t.prototype.visit = function (t, e) {
                            var n, i;
                            return null == e && (e = {}), t = c.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (i = e.action) ? i : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0
                        }, t.prototype.startVisitToLocationWithAction = function (t, e, n) {
                            var i;
                            return c.supported ? (i = this.getRestorationDataForIdentifier(n), this.startVisit(t, e, {
                                restorationData: i
                            })) : window.location = t
                        }, t.prototype.setProgressBarDelay = function (t) {
                            return this.progressBarDelay = t
                        }, t.prototype.startHistory = function () {
                            return this.location = c.Location.wrap(window.location), this.restorationIdentifier = c.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                        }, t.prototype.stopHistory = function () {
                            return this.history.stop()
                        }, t.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, e) {
                            return this.restorationIdentifier = e, this.location = c.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier)
                        }, t.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, e) {
                            return this.restorationIdentifier = e, this.location = c.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier)
                        }, t.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, e) {
                            var n;
                            return this.restorationIdentifier = e, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
                                restorationIdentifier: this.restorationIdentifier,
                                restorationData: n,
                                historyChanged: !0
                            }), this.location = c.Location.wrap(t)) : this.adapter.pageInvalidated()
                        }, t.prototype.getCachedSnapshotForLocation = function (t) {
                            var e;
                            return null != (e = this.cache.get(t)) ? e.clone() : void 0
                        }, t.prototype.shouldCacheSnapshot = function () {
                            return this.view.getSnapshot().isCacheable()
                        }, t.prototype.cacheSnapshot = function () {
                            var t, e, n;
                            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), e = this.view.getSnapshot(), t = this.lastRenderedLocation, c.defer((n = this, function () {
                                return n.cache.put(t, e.clone())
                            }))) : void 0
                        }, t.prototype.scrollToAnchor = function (t) {
                            var e;
                            return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, t.prototype.scrollToElement = function (t) {
                            return this.scrollManager.scrollToElement(t)
                        }, t.prototype.scrollToPosition = function (t) {
                            return this.scrollManager.scrollToPosition(t)
                        }, t.prototype.scrollPositionChanged = function (t) {
                            return this.getCurrentRestorationData().scrollPosition = t
                        }, t.prototype.render = function (t, e) {
                            return this.view.render(t, e)
                        }, t.prototype.viewInvalidated = function () {
                            return this.adapter.pageInvalidated()
                        }, t.prototype.viewWillRender = function (t) {
                            return this.notifyApplicationBeforeRender(t)
                        }, t.prototype.viewRendered = function () {
                            return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                        }, t.prototype.pageLoaded = function () {
                            return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                        }, t.prototype.clickCaptured = function () {
                            return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                        }, t.prototype.clickBubbled = function (t) {
                            var e, n, i;
                            return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(i, {
                                action: e
                            })) : void 0
                        }, t.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
                            return !this.notifyApplicationAfterClickingLinkToLocation(t, e).defaultPrevented
                        }, t.prototype.applicationAllowsVisitingLocation = function (t) {
                            return !this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented
                        }, t.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, e) {
                            return c.dispatch("turbolinks:click", {
                                target: t,
                                data: {
                                    url: e.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, t.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
                            return c.dispatch("turbolinks:before-visit", {
                                data: {
                                    url: t.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, t.prototype.notifyApplicationAfterVisitingLocation = function (t) {
                            return c.dispatch("turbolinks:visit", {
                                data: {
                                    url: t.absoluteURL
                                }
                            })
                        }, t.prototype.notifyApplicationBeforeCachingSnapshot = function () {
                            return c.dispatch("turbolinks:before-cache")
                        }, t.prototype.notifyApplicationBeforeRender = function (t) {
                            return c.dispatch("turbolinks:before-render", {
                                data: {
                                    newBody: t
                                }
                            })
                        }, t.prototype.notifyApplicationAfterRender = function () {
                            return c.dispatch("turbolinks:render")
                        }, t.prototype.notifyApplicationAfterPageLoad = function (t) {
                            return null == t && (t = {}), c.dispatch("turbolinks:load", {
                                data: {
                                    url: this.location.absoluteURL,
                                    timing: t
                                }
                            })
                        }, t.prototype.startVisit = function (t, e, n) {
                            var i;
                            return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
                        }, t.prototype.createVisit = function (t, e, n) {
                            var i, o, r, a, s;
                            return a = (o = null != n ? n : {}).restorationIdentifier, r = o.restorationData, i = o.historyChanged, (s = new c.Visit(this, t, e)).restorationIdentifier = null != a ? a : c.uuid(), s.restorationData = c.copyObject(r), s.historyChanged = i, s.referrer = this.location, s
                        }, t.prototype.visitCompleted = function (t) {
                            return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
                        }, t.prototype.clickEventIsSignificant = function (t) {
                            return !(t.defaultPrevented || t.target.isContentEditable || 1 < t.which || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
                        }, t.prototype.getVisitableLinkForNode = function (t) {
                            return this.nodeIsVisitable(t) ? c.closest(t, "a[href]:not([target]):not([download])") : void 0
                        }, t.prototype.getVisitableLocationForLink = function (t) {
                            var e;
                            return e = new c.Location(t.getAttribute("href")), this.locationIsVisitable(e) ? e : void 0
                        }, t.prototype.getActionForLink = function (t) {
                            var e;
                            return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
                        }, t.prototype.nodeIsVisitable = function (t) {
                            var e;
                            return !(e = c.closest(t, "[data-turbolinks]")) || "false" !== e.getAttribute("data-turbolinks")
                        }, t.prototype.locationIsVisitable = function (t) {
                            return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                        }, t.prototype.getCurrentRestorationData = function () {
                            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                        }, t.prototype.getRestorationDataForIdentifier = function (t) {
                            var e;
                            return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
                        }, t
                    }()
                }.call(this),
                function () {
                    ! function () {
                        var t, e;
                        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning"))
                            for (; t = t.parentNode;)
                                if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML)
                    }()
                }.call(this),
                function () {
                    var t, e, n;
                    c.start = function () {
                        return e() ? (null == c.controller && (c.controller = t()), c.controller.start()) : void 0
                    }, e = function () {
                        return null == window.Turbolinks && (window.Turbolinks = c), n()
                    }, t = function () {
                        var t;
                        return (t = new c.Controller).adapter = new c.BrowserAdapter(t), t
                    }, (n = function () {
                        return window.Turbolinks === c
                    })() && c.start()
                }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = c : "function" == typeof define && define.amd && define(c)
    }.call(this),
    function (u) {
        u.fn.responsiveTruncate = function (l) {
            function t(t) {
                t.each(function () {
                    if (0 == u(".responsiveTruncate", u(this)).length) {
                        var e, t = u(this),
                            n = u(this).css("font-size"),
                            i = u(this).css("line-height") ? u(this).css("line-height").replace("px", "") : Math.floor(1.5 * parseInt(n.replace("px", ""))),
                            o = (Math.ceil(t.height() / i), u.extend({
                                lines: 3,
                                height: null,
                                more: "more",
                                less: "less"
                            }, l));
                        if (e = o.height ? o.height : i * o.lines, t.height() > e) {
                            var r = t.html();
                            t.html("<div style='height: " + e + "px; overflow: hidden;' class='responsiveTruncate'></div>");
                            var a = u(".responsiveTruncate", t);
                            a.html(r), a.after("<a class='responsiveTruncatorToggle' href='#'>" + o.more + "</a>");
                            var s = u(".responsiveTruncatorToggle", t);
                            s.click(function () {
                                var t = s.text() == o.more ? o.less : o.more;
                                return s.text(t), a.height() == e ? a.css({
                                    height: "100%"
                                }) : a.css({
                                    height: e
                                }), !1
                            })
                        }
                    }
                })
            }

            function e(t) {
                t.each(function () {
                    0 < u(".responsiveTruncate", u(this)).length && (u(this).html(u(".responsiveTruncate", u(this)).html()), u(".responsiveTruncatorToggle", u(this)).remove())
                })
            }
            var n = this;
            u(window).bind("resize", function () {
                e(n), t(n)
            }), t(n)
        }
    }(jQuery),
    function (g) {
        function i(t) {
            this.$element = g(t), this.original_text = this.$element.html(), this.settings = g.extend({}, g.fn.trunk8.defaults)
        }

        function v(t) {
            var e = document.createElement("DIV");
            return e.innerHTML = t, "undefined" != typeof e.textContent ? e.textContent : e.innerText
        }

        function y(t) {
            if (v(t) === t) return t.split(/\s/g);
            for (var e, n, i = [], o = /<([a-z]+)([^<]*)(?:>(.*?(?!<\1>)*)<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/gi, r = o.exec(t); r && e !== o.lastIndex;) e = o.lastIndex, r[5] ? i.push(r[5]) : r[1] && i.push({
                tag: r[1],
                attribs: r[2],
                content: r[3],
                after: r[4]
            }), r = o.exec(t);
            for (n = 0; n < i.length; n++) "string" != typeof i[n] && i[n].content && (i[n].content = y(i[n].content));
            return i
        }

        function _(s, t, l) {
            s = s.replace(l, "");
            var u = function (t, e) {
                    var n, i, o, r, a = "";
                    for (r = 0; r < t.length; r++) n = t[r], o = g.trim(s).split(" ").length, g.trim(s).length && ("string" == typeof n ? (/<br\s*\/?>/.test(n) || (s = 1 === o && g.trim(s).length <= n.length ? (n = s, "p" !== e && "div" !== e || (n += l), "") : s.replace(n, "")), a += g.trim(n) + (r === t.length - 1 || o <= 1 ? "" : " ")) : (i = u(n.content, n.tag), n.after && (s = s.replace(n.after, "")), i && (n.after || (n.after = " "), a += "<" + n.tag + n.attribs + ">" + i + "</" + n.tag + ">" + n.after)));
                    return a
                },
                e = u(t);
            return e.slice(e.length - l.length) === l && (e += l), e
        }

        function o() {
            var t, e, n, i, o, r, a = this.data("trunk8"),
                s = a.settings,
                l = s.width,
                u = s.side,
                c = s.fill,
                h = s.parseHTML,
                d = b.getLineHeight(this) * s.lines,
                f = a.original_text,
                p = f.length,
                m = "";
            if (this.html(f), o = this.text(), h && v(f) !== f && (r = y(f), p = (f = v(f)).length), l === x.auto) {
                if (this.height() <= d) return;
                for (t = 0, e = p - 1; t <= e;) n = t + (e - t >> 1), i = b.eatStr(f, u, p - n, c), h && r && (i = _(i, r, c)), this.html(i), this.height() > d ? e = n - 1 : (t = n + 1, m = m.length > i.length ? m : i);
                this.html(""), this.html(m), s.tooltip && this.attr("title", o)
            } else isNaN(l) ? g.error('Invalid width "' + l + '".') : (n = p - l, i = b.eatStr(f, u, n, c), this.html(i), s.tooltip && this.attr("title", f))
        }
        var e, b, l = {
                center: "center",
                left: "left",
                right: "right"
            },
            x = {
                auto: "auto"
            };
        i.prototype.updateSettings = function (t) {
            this.settings = g.extend(this.settings, t)
        }, e = {
            init: function (n) {
                return this.each(function () {
                    var t = g(this),
                        e = t.data("trunk8");
                    e || t.data("trunk8", e = new i(this)), e.updateSettings(n), o.call(t)
                })
            },
            update: function (e) {
                return this.each(function () {
                    var t = g(this);
                    e && (t.data("trunk8").original_text = e), o.call(t)
                })
            },
            revert: function () {
                return this.each(function () {
                    var t = g(this).data("trunk8").original_text;
                    g(this).html(t)
                })
            },
            getSettings: function () {
                return g(this.get(0)).data("trunk8").settings
            }
        }, (b = {
            eatStr: function (t, e, n, i) {
                var o, r, a = t.length,
                    s = b.eatStr.generateKey.apply(null, arguments);
                if (b.eatStr.cache[s]) return b.eatStr.cache[s];
                if ("string" == typeof t && 0 !== a || g.error('Invalid source string "' + t + '".'), n < 0 || a < n) g.error('Invalid bite size "' + n + '".');
                else if (0 === n) return t;
                switch ("string" != typeof (i + "") && g.error("Fill unable to be converted to a string."), e) {
                    case l.right:
                        return b.eatStr.cache[s] = g.trim(t.substr(0, a - n)) + i;
                    case l.left:
                        return b.eatStr.cache[s] = i + g.trim(t.substr(n));
                    case l.center:
                        return o = a >> 1, r = n >> 1, b.eatStr.cache[s] = g.trim(b.eatStr(t.substr(0, a - o), l.right, n - r, "")) + i + g.trim(b.eatStr(t.substr(a - o), l.left, r, ""));
                    default:
                        g.error('Invalid side "' + e + '".')
                }
            },
            getLineHeight: function (t) {
                var e = g(t).css("float");
                "none" !== e && g(t).css("float", "none");
                var n = g(t).css("position");
                "absolute" === n && g(t).css("position", "static");
                var i, o = g(t).html(),
                    r = "line-height-test";
                return g(t).html("i").wrap('<div id="' + r + '" />'), i = g("#" + r).innerHeight(), g(t).html(o).css({
                    "float": e,
                    position: n
                }).unwrap(), i
            }
        }).eatStr.cache = {}, b.eatStr.generateKey = function () {
            return Array.prototype.join.call(arguments, "")
        }, g.fn.trunk8 = function (t) {
            return e[t] ? e[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void g.error("Method " + t + " does not exist on jQuery.trunk8") : e.init.apply(this, arguments)
        }, g.fn.trunk8.defaults = {
            fill: "&hellip;",
            lines: 1,
            side: l.right,
            tooltip: !0,
            width: x.auto,
            parseHTML: !1
        }
    }(jQuery),
    function (h, n) {
        h.fn.extend({
            scrollspy: function (t) {
                var e = {
                    min: 0,
                    max: 0,
                    mode: "vertical",
                    buffer: 0,
                    container: n,
                    onEnter: t.onEnter ? t.onEnter : [],
                    onLeave: t.onLeave ? t.onLeave : [],
                    onTick: t.onTick ? t.onTick : []
                };
                t = h.extend({}, e, t);
                return this.each(function () {
                    var o = this,
                        r = t,
                        a = h(r.container),
                        s = r.mode,
                        l = r.buffer,
                        u = leaves = 0,
                        c = !1;
                    a.on("scroll touchmove", function () {
                        var t = {
                                top: h(this).scrollTop(),
                                left: h(this).scrollLeft()
                            },
                            e = "vertical" == s ? t.top + l : t.left + l,
                            n = r.max,
                            i = r.min;
                        h.isFunction(r.max) && (n = r.max()), h.isFunction(r.min) && (i = r.min()), 0 == n && (n = "vertical" == s ? a.height() : a.outerWidth() + h(o).outerWidth()), i <= e && e <= n ? (c || (c = !0, u++, h(o).trigger("scrollEnter", {
                            position: t
                        }), h.isFunction(r.onEnter) && r.onEnter(o, t)), h(o).trigger("scrollTick", {
                            position: t,
                            inside: c,
                            enters: u,
                            leaves: leaves
                        }), h.isFunction(r.onTick) && r.onTick(o, t, c, u, leaves)) : c && (c = !1, leaves++, h(o).trigger("scrollLeave", {
                            position: t,
                            leaves: leaves
                        }), h.isFunction(r.onLeave) && r.onLeave(o, t))
                    })
                })
            }
        })
    }(jQuery, window), jQuery(function () {
        !!("createElementNS" in document && document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) ? jQuery("body").addClass("svg"): (jQuery("body").addClass("no-svg"), jQuery("img").each(function () {
            var t = jQuery(this),
                e = t.attr("src").split(".");
            "svg" == e.pop().toLowerCase() && (t.attr("data-svg-fallback") !== undefined ? (t.attr("src", t.attr("data-svg-fallback")), t.removeAttr("data-svg-fallback")) : t.attr("src", e.join(".") + ".png"))
        }))
    }),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
    }(this, function (t) {
        "use strict";

        function l(t) {
            var e, n, i, o;
            for (n = 1, i = arguments.length; n < i; n++)
                for (e in o = arguments[n]) t[e] = o[e];
            return t
        }

        function s(t, e) {
            var n = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
            var i = n.call(arguments, 2);
            return function () {
                return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
            }
        }

        function u(t) {
            return t._leaflet_id = t._leaflet_id || ++me, t._leaflet_id
        }

        function e(t, e, n) {
            var i, o, r, a;
            return a = function () {
                i = !1, o && (r.apply(n, o), o = !1)
            }, r = function () {
                i ? o = arguments : (t.apply(n, arguments), setTimeout(a, e), i = !0)
            }
        }

        function n(t, e, n) {
            var i = e[1],
                o = e[0],
                r = i - o;
            return t === i && n ? t : ((t - o) % r + r) % r + o
        }

        function c() {
            return !1
        }

        function i(t, e) {
            var n = Math.pow(10, e === undefined ? 6 : e);
            return Math.round(t * n) / n
        }

        function o(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function h(t) {
            return o(t).split(/\s+/)
        }

        function a(t, e) {
            for (var n in t.hasOwnProperty("options") || (t.options = t.options ? pe(t.options) : {}), e) t.options[n] = e[n];
            return t.options
        }

        function d(t, e, n) {
            var i = [];
            for (var o in t) i.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
        }

        function r(t, i) {
            return t.replace(ge, function (t, e) {
                var n = i[e];
                if (n === undefined) throw new Error("No value provided for variable " + t);
                return "function" == typeof n && (n = n(i)), n
            })
        }

        function f(t, e) {
            for (var n = 0; n < t.length; n++)
                if (t[n] === e) return n;
            return -1
        }

        function p(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
        }

        function m(t) {
            var e = +new Date,
                n = Math.max(0, 16 - (e - _e));
            return _e = e + n, window.setTimeout(t, n)
        }

        function T(t, e, n) {
            if (!n || be !== m) return be.call(window, s(t, e));
            t.call(e)
        }

        function g(t) {
            t && xe.call(window, t)
        }

        function v() {}

        function y(t) {
            if ("undefined" != typeof L && L && L.Mixin) {
                t = ve(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }

        function _(t, e, n) {
            this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e
        }

        function b(t, e, n) {
            return t instanceof _ ? t : ve(t) ? new _(t[0], t[1]) : t === undefined || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new _(t.x, t.y) : new _(t, e, n)
        }

        function x(t, e) {
            if (t)
                for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i])
        }

        function w(t, e) {
            return !t || t instanceof x ? t : new x(t, e)
        }

        function S(t, e) {
            if (t)
                for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i])
        }

        function C(t, e) {
            return t instanceof S ? t : new S(t, e)
        }

        function k(t, e, n) {
            if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = +t, this.lng = +e, n !== undefined && (this.alt = +n)
        }

        function D(t, e, n) {
            return t instanceof k ? t : ve(t) && "object" != typeof t[0] ? 3 === t.length ? new k(t[0], t[1], t[2]) : 2 === t.length ? new k(t[0], t[1]) : null : t === undefined || null === t ? t : "object" == typeof t && "lat" in t ? new k(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === undefined ? null : new k(t, e, n)
        }

        function P(t, e, n, i) {
            if (ve(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
            this._a = t, this._b = e, this._c = n, this._d = i
        }

        function E(t, e, n, i) {
            return new P(t, e, n, i)
        }

        function A(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }

        function I(t, e) {
            var n, i, o, r, a, s, l = "";
            for (n = 0, o = t.length; n < o; n++) {
                for (i = 0, r = (a = t[n]).length; i < r; i++) l += (i ? "L" : "M") + (s = a[i]).x + " " + s.y;
                l += e ? gn ? "z" : "x" : ""
            }
            return l || "M0 0"
        }

        function M(t) {
            return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
        }

        function B(t, e, n, i) {
            return "touchstart" === e ? j(t, n, i) : "touchmove" === e ? $(t, n, i) : "touchend" === e && H(t, n, i), this
        }

        function R(t, e, n) {
            var i = t["_leaflet_" + e + n];
            return "touchstart" === e ? t.removeEventListener(_n, i, !1) : "touchmove" === e ? t.removeEventListener(bn, i, !1) : "touchend" === e && (t.removeEventListener(xn, i, !1), t.removeEventListener(wn, i, !1)), this
        }

        function j(t, e, n) {
            var i = s(function (t) {
                if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                    if (!(Sn.indexOf(t.target.tagName) < 0)) return;
                    J(t)
                }
                F(t, e)
            });
            t["_leaflet_touchstart" + n] = i, t.addEventListener(_n, i, !1), Cn || (document.documentElement.addEventListener(_n, N, !0), document.documentElement.addEventListener(bn, z, !0), document.documentElement.addEventListener(xn, O, !0), document.documentElement.addEventListener(wn, O, !0), Cn = !0)
        }

        function N(t) {
            Tn[t.pointerId] = t, kn++
        }

        function z(t) {
            Tn[t.pointerId] && (Tn[t.pointerId] = t)
        }

        function O(t) {
            delete Tn[t.pointerId], kn--
        }

        function F(t, e) {
            for (var n in t.touches = [], Tn) t.touches.push(Tn[n]);
            t.changedTouches = [t], e(t)
        }

        function $(t, e, n) {
            var i = function (t) {
                (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && F(t, e)
            };
            t["_leaflet_touchmove" + n] = i, t.addEventListener(bn, i, !1)
        }

        function H(t, e, n) {
            var i = function (t) {
                F(t, e)
            };
            t["_leaflet_touchend" + n] = i, t.addEventListener(xn, i, !1), t.addEventListener(wn, i, !1)
        }

        function q(t, o, e) {
            function n(t) {
                var e;
                if (cn) {
                    if (!He || "mouse" === t.pointerType) return;
                    e = kn
                } else e = t.touches.length;
                if (!(1 < e)) {
                    var n = Date.now(),
                        i = n - (r || n);
                    a = t.touches ? t.touches[0] : t, s = 0 < i && i <= l, r = n
                }
            }

            function i(t) {
                if (s && !a.cancelBubble) {
                    if (cn) {
                        if (!He || "mouse" === t.pointerType) return;
                        var e, n, i = {};
                        for (n in a) e = a[n], i[n] = e && e.bind ? e.bind(a) : e;
                        a = i
                    }
                    a.type = "dblclick", o(a), r = null
                }
            }
            var r, a, s = !1,
                l = 250;
            return t[Pn + Ln + e] = n, t[Pn + Dn + e] = i, t[Pn + "dblclick" + e] = o, t.addEventListener(Ln, n, !1), t.addEventListener(Dn, i, !1), t.addEventListener("dblclick", o, !1), this
        }

        function W(t, e) {
            var n = t[Pn + Ln + e],
                i = t[Pn + Dn + e],
                o = t[Pn + "dblclick" + e];
            return t.removeEventListener(Ln, n, !1), t.removeEventListener(Dn, i, !1), He || t.removeEventListener("dblclick", o, !1), this
        }

        function Z(t, e, n, i) {
            if ("object" == typeof e)
                for (var o in e) V(t, o, e[o], n);
            else
                for (var r = 0, a = (e = h(e)).length; r < a; r++) V(t, e[r], n, i);
            return this
        }

        function U(t, e, n, i) {
            if ("object" == typeof e)
                for (var o in e) G(t, o, e[o], n);
            else if (e)
                for (var r = 0, a = (e = h(e)).length; r < a; r++) G(t, e[r], n, i);
            else {
                for (var s in t[En]) G(t, s, t[En][s]);
                delete t[En]
            }
            return this
        }

        function V(e, t, n, i) {
            var o = t + u(n) + (i ? "_" + u(i) : "");
            if (e[En] && e[En][o]) return this;
            var r = function (t) {
                    return n.call(i || e, t || window.event)
                },
                a = r;
            cn && 0 === t.indexOf("touch") ? B(e, t, r, o) : !hn || "dblclick" !== t || !q || cn && Qe ? "addEventListener" in e ? "mousewheel" === t ? e.addEventListener("onwheel" in e ? "wheel" : "mousewheel", r, !1) : "mouseenter" === t || "mouseleave" === t ? (r = function (t) {
                t = t || window.event, ot(e, t) && a(t)
            }, e.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", r, !1)) : ("click" === t && We && (r = function (t) {
                rt(t, a)
            }), e.addEventListener(t, r, !1)) : "attachEvent" in e && e.attachEvent("on" + t, r) : q(e, r, o), e[En] = e[En] || {}, e[En][o] = r
        }

        function G(t, e, n, i) {
            var o = e + u(n) + (i ? "_" + u(i) : ""),
                r = t[En] && t[En][o];
            if (!r) return this;
            cn && 0 === e.indexOf("touch") ? R(t, e, o) : !hn || "dblclick" !== e || !W || cn && Qe ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, r, !1) : "detachEvent" in t && t.detachEvent("on" + e, r) : W(t, o), t[En][o] = null
        }

        function Q(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, it(t), this
        }

        function K(t) {
            return V(t, "mousewheel", Q), this
        }

        function X(t) {
            return Z(t, "mousedown touchstart dblclick", Q), V(t, "click", nt), this
        }

        function J(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        }

        function Y(t) {
            return J(t), Q(t), this
        }

        function tt(t, e) {
            if (!e) return new _(t.clientX, t.clientY);
            var n = e.getBoundingClientRect(),
                i = n.width / e.offsetWidth || 1,
                o = n.height / e.offsetHeight || 1;
            return new _(t.clientX / i - n.left - e.clientLeft, t.clientY / o - n.top - e.clientTop)
        }

        function et(t) {
            return He ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / An : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
        }

        function nt(t) {
            In[t.type] = !0
        }

        function it(t) {
            var e = In[t.type];
            return In[t.type] = !1, e
        }

        function ot(t, e) {
            var n = e.relatedTarget;
            if (!n) return !0;
            try {
                for (; n && n !== t;) n = n.parentNode
            } catch (i) {
                return !1
            }
            return n !== t
        }

        function rt(t, e) {
            var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                i = Ae && n - Ae;
            i && 100 < i && i < 500 || t.target._simulatedClick && !t._simulated ? Y(t) : (Ae = n, e(t))
        }

        function at(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }

        function st(t, e) {
            var n = t.style[e] || t.currentStyle && t.currentStyle[e];
            if ((!n || "auto" === n) && document.defaultView) {
                var i = document.defaultView.getComputedStyle(t, null);
                n = i ? i[e] : null
            }
            return "auto" === n ? null : n
        }

        function lt(t, e, n) {
            var i = document.createElement(t);
            return i.className = e || "", n && n.appendChild(i), i
        }

        function ut(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }

        function ct(t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
        }

        function ht(t) {
            var e = t.parentNode;
            e.lastChild !== t && e.appendChild(t)
        }

        function dt(t) {
            var e = t.parentNode;
            e.firstChild !== t && e.insertBefore(t, e.firstChild)
        }

        function ft(t, e) {
            if (t.classList !== undefined) return t.classList.contains(e);
            var n = vt(t);
            return 0 < n.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
        }

        function pt(t, e) {
            if (t.classList !== undefined)
                for (var n = h(e), i = 0, o = n.length; i < o; i++) t.classList.add(n[i]);
            else if (!ft(t, e)) {
                var r = vt(t);
                gt(t, (r ? r + " " : "") + e)
            }
        }

        function mt(t, e) {
            t.classList !== undefined ? t.classList.remove(e) : gt(t, o((" " + vt(t) + " ").replace(" " + e + " ", " ")))
        }

        function gt(t, e) {
            t.className.baseVal === undefined ? t.className = e : t.className.baseVal = e
        }

        function vt(t) {
            return t.className.baseVal === undefined ? t.className : t.className.baseVal
        }

        function yt(t, e) {
            "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && _t(t, e)
        }

        function _t(t, e) {
            var n = !1,
                i = "DXImageTransform.Microsoft.Alpha";
            try {
                n = t.filters.item(i)
            } catch (o) {
                if (1 === e) return
            }
            e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
        }

        function bt(t) {
            for (var e = document.documentElement.style, n = 0; n < t.length; n++)
                if (t[n] in e) return t[n];
            return !1
        }

        function xt(t, e, n) {
            var i = e || new _(0, 0);
            t.style[Bn] = (en ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (n ? " scale(" + n + ")" : "")
        }

        function wt(t, e) {
            t._leaflet_pos = e, rn ? xt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
        }

        function St(t) {
            return t._leaflet_pos || new _(0, 0)
        }

        function Tt() {
            Z(window, "dragstart", J)
        }

        function Ct() {
            U(window, "dragstart", J)
        }

        function kt(t) {
            for (; - 1 === t.tabIndex;) t = t.parentNode;
            t.style && (Lt(), je = (Re = t).style.outline, t.style.outline = "none", Z(window, "keydown", Lt))
        }

        function Lt() {
            Re && (Re.style.outline = je, Re = undefined, je = undefined, U(window, "keydown", Lt))
        }

        function Dt(t, e) {
            return new Fn(t, e)
        }

        function Pt(t, e) {
            if (!e || !t.length) return t.slice();
            var n = e * e;
            return t = It(t = Bt(t, n), n)
        }

        function Et(t, e, n) {
            return Math.sqrt(Ot(t, e, n, !0))
        }

        function At(t, e, n) {
            return Ot(t, e, n)
        }

        function It(t, e) {
            var n = t.length,
                i = new(typeof Uint8Array != undefined + "" ? Uint8Array : Array)(n);
            i[0] = i[n - 1] = 1, Mt(t, i, e, 0, n - 1);
            var o, r = [];
            for (o = 0; o < n; o++) i[o] && r.push(t[o]);
            return r
        }

        function Mt(t, e, n, i, o) {
            var r, a, s, l = 0;
            for (a = i + 1; a <= o - 1; a++) l < (s = Ot(t[a], t[i], t[o], !0)) && (r = a, l = s);
            n < l && (e[r] = 1, Mt(t, e, n, i, r), Mt(t, e, n, r, o))
        }

        function Bt(t, e) {
            for (var n = [t[0]], i = 1, o = 0, r = t.length; i < r; i++) zt(t[i], t[o]) > e && (n.push(t[i]), o = i);
            return o < r - 1 && n.push(t[r - 1]), n
        }

        function Rt(t, e, n, i, o) {
            var r, a, s, l = i ? Jn : Nt(t, n),
                u = Nt(e, n);
            for (Jn = u;;) {
                if (!(l | u)) return [t, e];
                if (l & u) return !1;
                s = Nt(a = jt(t, e, r = l || u, n, o), n), r === l ? (t = a, l = s) : (e = a, u = s)
            }
        }

        function jt(t, e, n, i, o) {
            var r, a, s = e.x - t.x,
                l = e.y - t.y,
                u = i.min,
                c = i.max;
            return 8 & n ? (r = t.x + s * (c.y - t.y) / l, a = c.y) : 4 & n ? (r = t.x + s * (u.y - t.y) / l, a = u.y) : 2 & n ? (r = c.x, a = t.y + l * (c.x - t.x) / s) : 1 & n && (r = u.x, a = t.y + l * (u.x - t.x) / s), new _(r, a, o)
        }

        function Nt(t, e) {
            var n = 0;
            return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n
        }

        function zt(t, e) {
            var n = e.x - t.x,
                i = e.y - t.y;
            return n * n + i * i
        }

        function Ot(t, e, n, i) {
            var o, r = e.x,
                a = e.y,
                s = n.x - r,
                l = n.y - a,
                u = s * s + l * l;
            return 0 < u && (1 < (o = ((t.x - r) * s + (t.y - a) * l) / u) ? (r = n.x, a = n.y) : 0 < o && (r += s * o, a += l * o)), s = t.x - r, l = t.y - a, i ? s * s + l * l : new _(r, a)
        }

        function Ft(t) {
            return !ve(t[0]) || "object" != typeof t[0][0] && "undefined" != typeof t[0][0]
        }

        function $t(t) {
            return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ft(t)
        }

        function Ht(t, e, n) {
            var i, o, r, a, s, l, u, c, h, d = [1, 4, 2, 8];
            for (o = 0, u = t.length; o < u; o++) t[o]._code = Nt(t[o], e);
            for (a = 0; a < 4; a++) {
                for (c = d[a], i = [], o = 0, r = (u = t.length) - 1; o < u; r = o++) s = t[o], l = t[r], s._code & c ? l._code & c || ((h = jt(l, s, c, e, n))._code = Nt(h, e), i.push(h)) : (l._code & c && ((h = jt(l, s, c, e, n))._code = Nt(h, e), i.push(h)), i.push(s));
                t = i
            }
            return t
        }

        function qt(t) {
            return new yi(t)
        }

        function Wt(t, e) {
            return new xi(t, e)
        }

        function Zt(t, e) {
            return new Si(t, e)
        }

        function Ut(t, e, n) {
            return new Ti(t, e, n)
        }

        function Vt(t, e) {
            return new Ci(t, e)
        }

        function Gt(t, e) {
            return new ki(t, e)
        }

        function Qt(t, e) {
            var n, i, o, r, a = "Feature" === t.type ? t.geometry : t,
                s = a ? a.coordinates : null,
                l = [],
                u = e && e.pointToLayer,
                c = e && e.coordsToLatLng || Kt;
            if (!s && !a) return null;
            switch (a.type) {
                case "Point":
                    return n = c(s), u ? u(t, n) : new xi(n);
                case "MultiPoint":
                    for (o = 0, r = s.length; o < r; o++) n = c(s[o]), l.push(u ? u(t, n) : new xi(n));
                    return new gi(l);
                case "LineString":
                case "MultiLineString":
                    return i = Xt(s, "LineString" === a.type ? 0 : 1, c), new Ci(i, e);
                case "Polygon":
                case "MultiPolygon":
                    return i = Xt(s, "Polygon" === a.type ? 1 : 2, c), new ki(i, e);
                case "GeometryCollection":
                    for (o = 0, r = a.geometries.length; o < r; o++) {
                        var h = Qt({
                            geometry: a.geometries[o],
                            type: "Feature",
                            properties: t.properties
                        }, e);
                        h && l.push(h)
                    }
                    return new gi(l);
                default:
                    throw new Error("Invalid GeoJSON object.")
            }
        }

        function Kt(t) {
            return new k(t[1], t[0], t[2])
        }

        function Xt(t, e, n) {
            for (var i, o = [], r = 0, a = t.length; r < a; r++) i = e ? Xt(t[r], e - 1, n) : (n || Kt)(t[r]), o.push(i);
            return o
        }

        function Jt(t, e) {
            return e = "number" == typeof e ? e : 6, t.alt !== undefined ? [i(t.lng, e), i(t.lat, e), i(t.alt, e)] : [i(t.lng, e), i(t.lat, e)]
        }

        function Yt(t, e, n, i) {
            for (var o = [], r = 0, a = t.length; r < a; r++) o.push(e ? Yt(t[r], e - 1, n, i) : Jt(t[r], i));
            return !e && n && o.push(o[0]), o
        }

        function te(t, e) {
            return t.feature ? l({}, t.feature, {
                geometry: e
            }) : ee(e)
        }

        function ee(t) {
            return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                type: "Feature",
                properties: {},
                geometry: t
            }
        }

        function ne(t, e) {
            return new Li(t, e)
        }

        function ie(t, e, n) {
            return new Ii(t, e, n)
        }

        function oe(t) {
            return new zi(t)
        }

        function re(t) {
            return new Oi(t)
        }

        function ae(t, e) {
            return new Fi(t, e)
        }

        function se(t, e) {
            return new $i(t, e)
        }

        function le(t) {
            return mn ? new qi(t) : null
        }

        function ue(t) {
            return gn || vn ? new Vi(t) : null
        }

        function ce(t, e) {
            return new Gi(t, e)
        }

        function he() {
            return window.L = no, this
        }
        var de = "1.3.1+HEAD.ba6f97f",
            fe = Object.freeze;
        Object.freeze = function (t) {
            return t
        };
        var pe = Object.create || function () {
                function e() {}
                return function (t) {
                    return e.prototype = t, new e
                }
            }(),
            me = 0,
            ge = /\{ *([\w_-]+) *\}/g,
            ve = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            ye = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
            _e = 0,
            be = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
            xe = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function (t) {
                window.clearTimeout(t)
            },
            we = (Object.freeze || Object)({
                freeze: fe,
                extend: l,
                create: pe,
                bind: s,
                lastId: me,
                stamp: u,
                throttle: e,
                wrapNum: n,
                falseFn: c,
                formatNum: i,
                trim: o,
                splitWords: h,
                setOptions: a,
                getParamString: d,
                template: r,
                isArray: ve,
                indexOf: f,
                emptyImageUrl: ye,
                requestFn: be,
                cancelFn: xe,
                requestAnimFrame: T,
                cancelAnimFrame: g
            });
        v.extend = function (t) {
            var e = function () {
                    this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                },
                n = e.__super__ = this.prototype,
                i = pe(n);
            for (var o in (i.constructor = e).prototype = i, this) this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (e[o] = this[o]);
            return t.statics && (l(e, t.statics), delete t.statics), t.includes && (y(t.includes), l.apply(null, [i].concat(t.includes)), delete t.includes), i.options && (t.options = l(pe(i.options), t.options)), l(i, t), i._initHooks = [], i.callInitHooks = function () {
                if (!this._initHooksCalled) {
                    n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                    for (var t = 0, e = i._initHooks.length; t < e; t++) i._initHooks[t].call(this)
                }
            }, e
        }, v.include = function (t) {
            return l(this.prototype, t), this
        }, v.mergeOptions = function (t) {
            return l(this.prototype.options, t), this
        }, v.addInitHook = function (t) {
            var e = Array.prototype.slice.call(arguments, 1),
                n = "function" == typeof t ? t : function () {
                    this[t].apply(this, e)
                };
            return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n), this
        };
        var Se = {
            on: function (t, e, n) {
                if ("object" == typeof t)
                    for (var i in t) this._on(i, t[i], e);
                else
                    for (var o = 0, r = (t = h(t)).length; o < r; o++) this._on(t[o], e, n);
                return this
            },
            off: function (t, e, n) {
                if (t)
                    if ("object" == typeof t)
                        for (var i in t) this._off(i, t[i], e);
                    else
                        for (var o = 0, r = (t = h(t)).length; o < r; o++) this._off(t[o], e, n);
                else delete this._events;
                return this
            },
            _on: function (t, e, n) {
                this._events = this._events || {};
                var i = this._events[t];
                i || (i = [], this._events[t] = i), n === this && (n = undefined);
                for (var o = {
                        fn: e,
                        ctx: n
                    }, r = i, a = 0, s = r.length; a < s; a++)
                    if (r[a].fn === e && r[a].ctx === n) return;
                r.push(o)
            },
            _off: function (t, e, n) {
                var i, o, r;
                if (this._events && (i = this._events[t]))
                    if (e) {
                        if (n === this && (n = undefined), i)
                            for (o = 0, r = i.length; o < r; o++) {
                                var a = i[o];
                                if (a.ctx === n && a.fn === e) return a.fn = c, this._firingCount && (this._events[t] = i = i.slice()), void i.splice(o, 1)
                            }
                    } else {
                        for (o = 0, r = i.length; o < r; o++) i[o].fn = c;
                        delete this._events[t]
                    }
            },
            fire: function (t, e, n) {
                if (!this.listens(t, n)) return this;
                var i = l({}, e, {
                    type: t,
                    target: this,
                    sourceTarget: e && e.sourceTarget || this
                });
                if (this._events) {
                    var o = this._events[t];
                    if (o) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var r = 0, a = o.length; r < a; r++) {
                            var s = o[r];
                            s.fn.call(s.ctx || this, i)
                        }
                        this._firingCount--
                    }
                }
                return n && this._propagateEvent(i), this
            },
            listens: function (t, e) {
                var n = this._events && this._events[t];
                if (n && n.length) return !0;
                if (e)
                    for (var i in this._eventParents)
                        if (this._eventParents[i].listens(t, e)) return !0;
                return !1
            },
            once: function (t, e, n) {
                if ("object" == typeof t) {
                    for (var i in t) this.once(i, t[i], e);
                    return this
                }
                var o = s(function () {
                    this.off(t, e, n).off(t, o, n)
                }, this);
                return this.on(t, e, n).on(t, o, n)
            },
            addEventParent: function (t) {
                return this._eventParents = this._eventParents || {}, this._eventParents[u(t)] = t, this
            },
            removeEventParent: function (t) {
                return this._eventParents && delete this._eventParents[u(t)], this
            },
            _propagateEvent: function (t) {
                for (var e in this._eventParents) this._eventParents[e].fire(t.type, l({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0)
            }
        };
        Se.addEventListener = Se.on, Se.removeEventListener = Se.clearAllEventListeners = Se.off, Se.addOneTimeEventListener = Se.once, Se.fireEvent = Se.fire, Se.hasEventListeners = Se.listens;
        var Te = v.extend(Se),
            Ce = Math.trunc || function (t) {
                return 0 < t ? Math.floor(t) : Math.ceil(t)
            };
        _.prototype = {
            clone: function () {
                return new _(this.x, this.y)
            },
            add: function (t) {
                return this.clone()._add(b(t))
            },
            _add: function (t) {
                return this.x += t.x, this.y += t.y, this
            },
            subtract: function (t) {
                return this.clone()._subtract(b(t))
            },
            _subtract: function (t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function (t) {
                return this.clone()._divideBy(t)
            },
            _divideBy: function (t) {
                return this.x /= t, this.y /= t, this
            },
            multiplyBy: function (t) {
                return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function (t) {
                return this.x *= t, this.y *= t, this
            },
            scaleBy: function (t) {
                return new _(this.x * t.x, this.y * t.y)
            },
            unscaleBy: function (t) {
                return new _(this.x / t.x, this.y / t.y)
            },
            round: function () {
                return this.clone()._round()
            },
            _round: function () {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function () {
                return this.clone()._floor()
            },
            _floor: function () {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function () {
                return this.clone()._ceil()
            },
            _ceil: function () {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            trunc: function () {
                return this.clone()._trunc()
            },
            _trunc: function () {
                return this.x = Ce(this.x), this.y = Ce(this.y), this
            },
            distanceTo: function (t) {
                var e = (t = b(t)).x - this.x,
                    n = t.y - this.y;
                return Math.sqrt(e * e + n * n)
            },
            equals: function (t) {
                return (t = b(t)).x === this.x && t.y === this.y
            },
            contains: function (t) {
                return t = b(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function () {
                return "Point(" + i(this.x) + ", " + i(this.y) + ")"
            }
        }, x.prototype = {
            extend: function (t) {
                return t = b(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
            },
            getCenter: function (t) {
                return new _((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function () {
                return new _(this.min.x, this.max.y)
            },
            getTopRight: function () {
                return new _(this.max.x, this.min.y)
            },
            getTopLeft: function () {
                return this.min
            },
            getBottomRight: function () {
                return this.max
            },
            getSize: function () {
                return this.max.subtract(this.min)
            },
            contains: function (t) {
                var e, n;
                return (t = "number" == typeof t[0] || t instanceof _ ? b(t) : w(t)) instanceof x ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
            },
            intersects: function (t) {
                t = w(t);
                var e = this.min,
                    n = this.max,
                    i = t.min,
                    o = t.max,
                    r = o.x >= e.x && i.x <= n.x,
                    a = o.y >= e.y && i.y <= n.y;
                return r && a
            },
            overlaps: function (t) {
                t = w(t);
                var e = this.min,
                    n = this.max,
                    i = t.min,
                    o = t.max,
                    r = o.x > e.x && i.x < n.x,
                    a = o.y > e.y && i.y < n.y;
                return r && a
            },
            isValid: function () {
                return !(!this.min || !this.max)
            }
        }, S.prototype = {
            extend: function (t) {
                var e, n, i = this._southWest,
                    o = this._northEast;
                if (t instanceof k) n = e = t;
                else {
                    if (!(t instanceof S)) return t ? this.extend(D(t) || C(t)) : this;
                    if (e = t._southWest, n = t._northEast, !e || !n) return this
                }
                return i || o ? (i.lat = Math.min(e.lat, i.lat), i.lng = Math.min(e.lng, i.lng), o.lat = Math.max(n.lat, o.lat), o.lng = Math.max(n.lng, o.lng)) : (this._southWest = new k(e.lat, e.lng), this._northEast = new k(n.lat, n.lng)), this
            },
            pad: function (t) {
                var e = this._southWest,
                    n = this._northEast,
                    i = Math.abs(e.lat - n.lat) * t,
                    o = Math.abs(e.lng - n.lng) * t;
                return new S(new k(e.lat - i, e.lng - o), new k(n.lat + i, n.lng + o))
            },
            getCenter: function () {
                return new k((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function () {
                return this._southWest
            },
            getNorthEast: function () {
                return this._northEast
            },
            getNorthWest: function () {
                return new k(this.getNorth(), this.getWest())
            },
            getSouthEast: function () {
                return new k(this.getSouth(), this.getEast())
            },
            getWest: function () {
                return this._southWest.lng
            },
            getSouth: function () {
                return this._southWest.lat
            },
            getEast: function () {
                return this._northEast.lng
            },
            getNorth: function () {
                return this._northEast.lat
            },
            contains: function (t) {
                t = "number" == typeof t[0] || t instanceof k || "lat" in t ? D(t) : C(t);
                var e, n, i = this._southWest,
                    o = this._northEast;
                return t instanceof S ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= o.lat && e.lng >= i.lng && n.lng <= o.lng
            },
            intersects: function (t) {
                t = C(t);
                var e = this._southWest,
                    n = this._northEast,
                    i = t.getSouthWest(),
                    o = t.getNorthEast(),
                    r = o.lat >= e.lat && i.lat <= n.lat,
                    a = o.lng >= e.lng && i.lng <= n.lng;
                return r && a
            },
            overlaps: function (t) {
                t = C(t);
                var e = this._southWest,
                    n = this._northEast,
                    i = t.getSouthWest(),
                    o = t.getNorthEast(),
                    r = o.lat > e.lat && i.lat < n.lat,
                    a = o.lng > e.lng && i.lng < n.lng;
                return r && a
            },
            toBBoxString: function () {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function (t, e) {
                return !!t && (t = C(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
            },
            isValid: function () {
                return !(!this._southWest || !this._northEast)
            }
        };
        var ke, Le = {
                latLngToPoint: function (t, e) {
                    var n = this.projection.project(t),
                        i = this.scale(e);
                    return this.transformation._transform(n, i)
                },
                pointToLatLng: function (t, e) {
                    var n = this.scale(e),
                        i = this.transformation.untransform(t, n);
                    return this.projection.unproject(i)
                },
                project: function (t) {
                    return this.projection.project(t)
                },
                unproject: function (t) {
                    return this.projection.unproject(t)
                },
                scale: function (t) {
                    return 256 * Math.pow(2, t)
                },
                zoom: function (t) {
                    return Math.log(t / 256) / Math.LN2
                },
                getProjectedBounds: function (t) {
                    if (this.infinite) return null;
                    var e = this.projection.bounds,
                        n = this.scale(t);
                    return new x(this.transformation.transform(e.min, n), this.transformation.transform(e.max, n))
                },
                infinite: !(k.prototype = {
                    equals: function (t, e) {
                        return !!t && (t = D(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (e === undefined ? 1e-9 : e))
                    },
                    toString: function (t) {
                        return "LatLng(" + i(this.lat, t) + ", " + i(this.lng, t) + ")"
                    },
                    distanceTo: function (t) {
                        return De.distance(this, D(t))
                    },
                    wrap: function () {
                        return De.wrapLatLng(this)
                    },
                    toBounds: function (t) {
                        var e = 180 * t / 40075017,
                            n = e / Math.cos(Math.PI / 180 * this.lat);
                        return C([this.lat - e, this.lng - n], [this.lat + e, this.lng + n])
                    },
                    clone: function () {
                        return new k(this.lat, this.lng, this.alt)
                    }
                }),
                wrapLatLng: function (t) {
                    var e = this.wrapLng ? n(t.lng, this.wrapLng, !0) : t.lng;
                    return new k(this.wrapLat ? n(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
                },
                wrapLatLngBounds: function (t) {
                    var e = t.getCenter(),
                        n = this.wrapLatLng(e),
                        i = e.lat - n.lat,
                        o = e.lng - n.lng;
                    if (0 === i && 0 === o) return t;
                    var r = t.getSouthWest(),
                        a = t.getNorthEast();
                    return new S(new k(r.lat - i, r.lng - o), new k(a.lat - i, a.lng - o))
                }
            },
            De = l({}, Le, {
                wrapLng: [-180, 180],
                R: 6371e3,
                distance: function (t, e) {
                    var n = Math.PI / 180,
                        i = t.lat * n,
                        o = e.lat * n,
                        r = Math.sin((e.lat - t.lat) * n / 2),
                        a = Math.sin((e.lng - t.lng) * n / 2),
                        s = r * r + Math.cos(i) * Math.cos(o) * a * a,
                        l = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
                    return this.R * l
                }
            }),
            Pe = {
                R: 6378137,
                MAX_LATITUDE: 85.0511287798,
                project: function (t) {
                    var e = Math.PI / 180,
                        n = this.MAX_LATITUDE,
                        i = Math.max(Math.min(n, t.lat), -n),
                        o = Math.sin(i * e);
                    return new _(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
                },
                unproject: function (t) {
                    var e = 180 / Math.PI;
                    return new k((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
                },
                bounds: (ke = 6378137 * Math.PI, new x([-ke, -ke], [ke, ke]))
            };
        P.prototype = {
            transform: function (t, e) {
                return this._transform(t.clone(), e)
            },
            _transform: function (t, e) {
                return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function (t, e) {
                return e = e || 1, new _((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
        };
        var Ee, Ae, Ie, Me, Be, Re, je, Ne = l({}, De, {
                code: "EPSG:3857",
                projection: Pe,
                transformation: (Ee = .5 / (Math.PI * Pe.R), E(Ee, .5, -Ee, .5))
            }),
            ze = l({}, Ne, {
                code: "EPSG:900913"
            }),
            Oe = document.documentElement.style,
            Fe = "ActiveXObject" in window,
            $e = Fe && !document.addEventListener,
            He = "msLaunchUri" in navigator && !("documentMode" in document),
            qe = M("webkit"),
            We = M("android"),
            Ze = M("android 2") || M("android 3"),
            Ue = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            Ve = We && M("Google") && Ue < 537 && !("AudioNode" in window),
            Ge = !!window.opera,
            Qe = M("chrome"),
            Ke = M("gecko") && !qe && !Ge && !Fe,
            Xe = !Qe && M("safari"),
            Je = M("phantom"),
            Ye = "OTransition" in Oe,
            tn = 0 === navigator.platform.indexOf("Win"),
            en = Fe && "transition" in Oe,
            nn = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !Ze,
            on = "MozPerspective" in Oe,
            rn = !window.L_DISABLE_3D && (en || nn || on) && !Ye && !Je,
            an = "undefined" != typeof orientation || M("mobile"),
            sn = an && qe,
            ln = an && nn,
            un = !window.PointerEvent && window.MSPointerEvent,
            cn = !(!window.PointerEvent && !un),
            hn = !window.L_NO_TOUCH && (cn || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            dn = an && Ge,
            fn = an && Ke,
            pn = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
            mn = !!document.createElement("canvas").getContext,
            gn = !(!document.createElementNS || !A("svg").createSVGRect),
            vn = !gn && function () {
                try {
                    var t = document.createElement("div");
                    t.innerHTML = '<v:shape adj="1"/>';
                    var e = t.firstChild;
                    return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                } catch (n) {
                    return !1
                }
            }(),
            yn = (Object.freeze || Object)({
                ie: Fe,
                ielt9: $e,
                edge: He,
                webkit: qe,
                android: We,
                android23: Ze,
                androidStock: Ve,
                opera: Ge,
                chrome: Qe,
                gecko: Ke,
                safari: Xe,
                phantom: Je,
                opera12: Ye,
                win: tn,
                ie3d: en,
                webkit3d: nn,
                gecko3d: on,
                any3d: rn,
                mobile: an,
                mobileWebkit: sn,
                mobileWebkit3d: ln,
                msPointer: un,
                pointer: cn,
                touch: hn,
                mobileOpera: dn,
                mobileGecko: fn,
                retina: pn,
                canvas: mn,
                svg: gn,
                vml: vn
            }),
            _n = un ? "MSPointerDown" : "pointerdown",
            bn = un ? "MSPointerMove" : "pointermove",
            xn = un ? "MSPointerUp" : "pointerup",
            wn = un ? "MSPointerCancel" : "pointercancel",
            Sn = ["INPUT", "SELECT", "OPTION"],
            Tn = {},
            Cn = !1,
            kn = 0,
            Ln = un ? "MSPointerDown" : cn ? "pointerdown" : "touchstart",
            Dn = un ? "MSPointerUp" : cn ? "pointerup" : "touchend",
            Pn = "_leaflet_",
            En = "_leaflet_events",
            An = tn && Qe ? 2 * window.devicePixelRatio : Ke ? window.devicePixelRatio : 1,
            In = {},
            Mn = (Object.freeze || Object)({
                on: Z,
                off: U,
                stopPropagation: Q,
                disableScrollPropagation: K,
                disableClickPropagation: X,
                preventDefault: J,
                stop: Y,
                getMousePosition: tt,
                getWheelDelta: et,
                fakeStop: nt,
                skipped: it,
                isExternalTarget: ot,
                addListener: Z,
                removeListener: U
            }),
            Bn = bt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
            Rn = bt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
            jn = "webkitTransition" === Rn || "OTransition" === Rn ? Rn + "End" : "transitionend";
        if ("onselectstart" in document) Ie = function () {
            Z(window, "selectstart", J)
        }, Me = function () {
            U(window, "selectstart", J)
        };
        else {
            var Nn = bt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            Ie = function () {
                if (Nn) {
                    var t = document.documentElement.style;
                    Be = t[Nn], t[Nn] = "none"
                }
            }, Me = function () {
                Nn && (document.documentElement.style[Nn] = Be, Be = undefined)
            }
        }
        var zn = (Object.freeze || Object)({
                TRANSFORM: Bn,
                TRANSITION: Rn,
                TRANSITION_END: jn,
                get: at,
                getStyle: st,
                create: lt,
                remove: ut,
                empty: ct,
                toFront: ht,
                toBack: dt,
                hasClass: ft,
                addClass: pt,
                removeClass: mt,
                setClass: gt,
                getClass: vt,
                setOpacity: yt,
                testProp: bt,
                setTransform: xt,
                setPosition: wt,
                getPosition: St,
                disableTextSelection: Ie,
                enableTextSelection: Me,
                disableImageDrag: Tt,
                enableImageDrag: Ct,
                preventOutline: kt,
                restoreOutline: Lt
            }),
            On = Te.extend({
                run: function (t, e, n, i) {
                    this.stop(), this._el = t, this._inProgress = !0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = St(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                },
                stop: function () {
                    this._inProgress && (this._step(!0), this._complete())
                },
                _animate: function () {
                    this._animId = T(this._animate, this), this._step()
                },
                _step: function (t) {
                    var e = +new Date - this._startTime,
                        n = 1e3 * this._duration;
                    e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete())
                },
                _runFrame: function (t, e) {
                    var n = this._startPos.add(this._offset.multiplyBy(t));
                    e && n._round(), wt(this._el, n), this.fire("step")
                },
                _complete: function () {
                    g(this._animId), this._inProgress = !1, this.fire("end")
                },
                _easeOut: function (t) {
                    return 1 - Math.pow(1 - t, this._easeOutPower)
                }
            }),
            Fn = Te.extend({
                options: {
                    crs: Ne,
                    center: undefined,
                    zoom: undefined,
                    minZoom: undefined,
                    maxZoom: undefined,
                    layers: [],
                    maxBounds: undefined,
                    renderer: undefined,
                    zoomAnimation: !0,
                    zoomAnimationThreshold: 4,
                    fadeAnimation: !0,
                    markerZoomAnimation: !0,
                    transform3DLimit: 8388608,
                    zoomSnap: 1,
                    zoomDelta: 1,
                    trackResize: !0
                },
                initialize: function (t, e) {
                    e = a(this, e), this._initContainer(t), this._initLayout(), this._onResize = s(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== undefined && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== undefined && this.setView(D(e.center), e.zoom, {
                        reset: !0
                    }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = Rn && rn && !dn && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Z(this._proxy, jn, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                },
                setView: function (t, e, n) {
                    if ((e = e === undefined ? this._zoom : this._limitZoom(e), t = this._limitCenter(D(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n) && (n.animate !== undefined && (n.zoom = l({
                            animate: n.animate
                        }, n.zoom), n.pan = l({
                            animate: n.animate,
                            duration: n.duration
                        }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan))) return clearTimeout(this._sizeTimer), this;
                    return this._resetView(t, e), this
                },
                setZoom: function (t, e) {
                    return this._loaded ? this.setView(this.getCenter(), t, {
                        zoom: e
                    }) : (this._zoom = t, this)
                },
                zoomIn: function (t, e) {
                    return t = t || (rn ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
                },
                zoomOut: function (t, e) {
                    return t = t || (rn ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
                },
                setZoomAround: function (t, e, n) {
                    var i = this.getZoomScale(e),
                        o = this.getSize().divideBy(2),
                        r = (t instanceof _ ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / i),
                        a = this.containerPointToLatLng(o.add(r));
                    return this.setView(a, e, {
                        zoom: n
                    })
                },
                _getBoundsCenterZoom: function (t, e) {
                    e = e || {}, t = t.getBounds ? t.getBounds() : C(t);
                    var n = b(e.paddingTopLeft || e.padding || [0, 0]),
                        i = b(e.paddingBottomRight || e.padding || [0, 0]),
                        o = this.getBoundsZoom(t, !1, n.add(i));
                    if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === Infinity) return {
                        center: t.getCenter(),
                        zoom: o
                    };
                    var r = i.subtract(n).divideBy(2),
                        a = this.project(t.getSouthWest(), o),
                        s = this.project(t.getNorthEast(), o);
                    return {
                        center: this.unproject(a.add(s).divideBy(2).add(r), o),
                        zoom: o
                    }
                },
                fitBounds: function (t, e) {
                    if (!(t = C(t)).isValid()) throw new Error("Bounds are not valid.");
                    var n = this._getBoundsCenterZoom(t, e);
                    return this.setView(n.center, n.zoom, e)
                },
                fitWorld: function (t) {
                    return this.fitBounds([
                        [-90, -180],
                        [90, 180]
                    ], t)
                },
                panTo: function (t, e) {
                    return this.setView(t, this._zoom, {
                        pan: e
                    })
                },
                panBy: function (t, e) {
                    if (e = e || {}, !(t = b(t).round()).x && !t.y) return this.fire("moveend");
                    if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                    if (this._panAnim || (this._panAnim = new On, this._panAnim.on({
                            step: this._onPanTransitionStep,
                            end: this._onPanTransitionEnd
                        }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                        pt(this._mapPane, "leaflet-pan-anim");
                        var n = this._getMapPanePos().subtract(t).round();
                        this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
                    } else this._rawPanBy(t), this.fire("move").fire("moveend");
                    return this
                },
                flyTo: function (n, i, t) {
                    function e(t) {
                        var e = (g * g - m * m + (t ? -1 : 1) * _ * _ * v * v) / (2 * (t ? g : m) * _ * v),
                            n = Math.sqrt(e * e + 1) - e;
                        return n < 1e-9 ? -18 : Math.log(n)
                    }

                    function o(t) {
                        return (Math.exp(t) - Math.exp(-t)) / 2
                    }

                    function r(t) {
                        return (Math.exp(t) + Math.exp(-t)) / 2
                    }

                    function a(t) {
                        return o(t) / r(t)
                    }

                    function s(t) {
                        return m * (r(b) / r(b + y * t))
                    }

                    function l(t) {
                        return m * (r(b) * a(b + y * t) - o(b)) / _
                    }

                    function u(t) {
                        return 1 - Math.pow(1 - t, 1.5)
                    }

                    function c() {
                        var t = (Date.now() - x) / S,
                            e = u(t) * w;
                        t <= 1 ? (this._flyToFrame = T(c, this), this._move(this.unproject(h.add(d.subtract(h).multiplyBy(l(e) / v)), p), this.getScaleZoom(m / s(e), p), {
                            flyTo: !0
                        })) : this._move(n, i)._moveEnd(!0)
                    }
                    if (!1 === (t = t || {}).animate || !rn) return this.setView(n, i, t);
                    this._stop();
                    var h = this.project(this.getCenter()),
                        d = this.project(n),
                        f = this.getSize(),
                        p = this._zoom;
                    n = D(n), i = i === undefined ? p : i;
                    var m = Math.max(f.x, f.y),
                        g = m * this.getZoomScale(p, i),
                        v = d.distanceTo(h) || 1,
                        y = 1.42,
                        _ = y * y,
                        b = e(0),
                        x = Date.now(),
                        w = (e(1) - b) / y,
                        S = t.duration ? 1e3 * t.duration : 1e3 * w * .8;
                    return this._moveStart(!0, t.noMoveStart), c.call(this), this
                },
                flyToBounds: function (t, e) {
                    var n = this._getBoundsCenterZoom(t, e);
                    return this.flyTo(n.center, n.zoom, e)
                },
                setMaxBounds: function (t) {
                    return (t = C(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
                },
                setMinZoom: function (t) {
                    var e = this.options.minZoom;
                    return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                },
                setMaxZoom: function (t) {
                    var e = this.options.maxZoom;
                    return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                },
                panInsideBounds: function (t, e) {
                    this._enforcingBounds = !0;
                    var n = this.getCenter(),
                        i = this._limitCenter(n, this._zoom, C(t));
                    return n.equals(i) || this.panTo(i, e), this._enforcingBounds = !1, this
                },
                invalidateSize: function (t) {
                    if (!this._loaded) return this;
                    t = l({
                        animate: !1,
                        pan: !0
                    }, !0 === t ? {
                        animate: !0
                    } : t);
                    var e = this.getSize();
                    this._sizeChanged = !0, this._lastCenter = null;
                    var n = this.getSize(),
                        i = e.divideBy(2).round(),
                        o = n.divideBy(2).round(),
                        r = i.subtract(o);
                    return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(s(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                        oldSize: e,
                        newSize: n
                    })) : this
                },
                stop: function () {
                    return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                },
                locate: function (t) {
                    if (t = this._locateOptions = l({
                            timeout: 1e4,
                            watch: !1
                        }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                        code: 0,
                        message: "Geolocation not supported."
                    }), this;
                    var e = s(this._handleGeolocationResponse, this),
                        n = s(this._handleGeolocationError, this);
                    return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t) : navigator.geolocation.getCurrentPosition(e, n, t), this
                },
                stopLocate: function () {
                    return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                },
                _handleGeolocationError: function (t) {
                    var e = t.code,
                        n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                    this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                        code: e,
                        message: "Geolocation error: " + n + "."
                    })
                },
                _handleGeolocationResponse: function (t) {
                    var e = new k(t.coords.latitude, t.coords.longitude),
                        n = e.toBounds(t.coords.accuracy),
                        i = this._locateOptions;
                    if (i.setView) {
                        var o = this.getBoundsZoom(n);
                        this.setView(e, i.maxZoom ? Math.min(o, i.maxZoom) : o)
                    }
                    var r = {
                        latlng: e,
                        bounds: n,
                        timestamp: t.timestamp
                    };
                    for (var a in t.coords) "number" == typeof t.coords[a] && (r[a] = t.coords[a]);
                    this.fire("locationfound", r)
                },
                addHandler: function (t, e) {
                    if (!e) return this;
                    var n = this[t] = new e(this);
                    return this._handlers.push(n), this.options[t] && n.enable(), this
                },
                remove: function () {
                    if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                    try {
                        delete this._container._leaflet_id, delete this._containerId
                    } catch (e) {
                        this._container._leaflet_id = undefined, this._containerId = undefined
                    }
                    var t;
                    for (t in this._locationWatchId !== undefined && this.stopLocate(), this._stop(), ut(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                    for (t in this._panes) ut(this._panes[t]);
                    return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                },
                createPane: function (t, e) {
                    var n = lt("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                    return t && (this._panes[t] = n), n
                },
                getCenter: function () {
                    return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                },
                getZoom: function () {
                    return this._zoom
                },
                getBounds: function () {
                    var t = this.getPixelBounds();
                    return new S(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
                },
                getMinZoom: function () {
                    return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom
                },
                getMaxZoom: function () {
                    return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom
                },
                getBoundsZoom: function (t, e, n) {
                    t = C(t), n = b(n || [0, 0]);
                    var i = this.getZoom() || 0,
                        o = this.getMinZoom(),
                        r = this.getMaxZoom(),
                        a = t.getNorthWest(),
                        s = t.getSouthEast(),
                        l = this.getSize().subtract(n),
                        u = w(this.project(s, i), this.project(a, i)).getSize(),
                        c = rn ? this.options.zoomSnap : 1,
                        h = l.x / u.x,
                        d = l.y / u.y,
                        f = e ? Math.max(h, d) : Math.min(h, d);
                    return i = this.getScaleZoom(f, i), c && (i = Math.round(i / (c / 100)) * (c / 100), i = e ? Math.ceil(i / c) * c : Math.floor(i / c) * c), Math.max(o, Math.min(r, i))
                },
                getSize: function () {
                    return this._size && !this._sizeChanged || (this._size = new _(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                },
                getPixelBounds: function (t, e) {
                    var n = this._getTopLeftPoint(t, e);
                    return new x(n, n.add(this.getSize()))
                },
                getPixelOrigin: function () {
                    return this._checkIfLoaded(), this._pixelOrigin
                },
                getPixelWorldBounds: function (t) {
                    return this.options.crs.getProjectedBounds(t === undefined ? this.getZoom() : t)
                },
                getPane: function (t) {
                    return "string" == typeof t ? this._panes[t] : t
                },
                getPanes: function () {
                    return this._panes
                },
                getContainer: function () {
                    return this._container
                },
                getZoomScale: function (t, e) {
                    var n = this.options.crs;
                    return e = e === undefined ? this._zoom : e, n.scale(t) / n.scale(e)
                },
                getScaleZoom: function (t, e) {
                    var n = this.options.crs;
                    e = e === undefined ? this._zoom : e;
                    var i = n.zoom(t * n.scale(e));
                    return isNaN(i) ? Infinity : i
                },
                project: function (t, e) {
                    return e = e === undefined ? this._zoom : e, this.options.crs.latLngToPoint(D(t), e)
                },
                unproject: function (t, e) {
                    return e = e === undefined ? this._zoom : e, this.options.crs.pointToLatLng(b(t), e)
                },
                layerPointToLatLng: function (t) {
                    var e = b(t).add(this.getPixelOrigin());
                    return this.unproject(e)
                },
                latLngToLayerPoint: function (t) {
                    return this.project(D(t))._round()._subtract(this.getPixelOrigin())
                },
                wrapLatLng: function (t) {
                    return this.options.crs.wrapLatLng(D(t))
                },
                wrapLatLngBounds: function (t) {
                    return this.options.crs.wrapLatLngBounds(C(t))
                },
                distance: function (t, e) {
                    return this.options.crs.distance(D(t), D(e))
                },
                containerPointToLayerPoint: function (t) {
                    return b(t).subtract(this._getMapPanePos())
                },
                layerPointToContainerPoint: function (t) {
                    return b(t).add(this._getMapPanePos())
                },
                containerPointToLatLng: function (t) {
                    var e = this.containerPointToLayerPoint(b(t));
                    return this.layerPointToLatLng(e)
                },
                latLngToContainerPoint: function (t) {
                    return this.layerPointToContainerPoint(this.latLngToLayerPoint(D(t)))
                },
                mouseEventToContainerPoint: function (t) {
                    return tt(t, this._container)
                },
                mouseEventToLayerPoint: function (t) {
                    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                },
                mouseEventToLatLng: function (t) {
                    return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                },
                _initContainer: function (t) {
                    var e = this._container = at(t);
                    if (!e) throw new Error("Map container not found.");
                    if (e._leaflet_id) throw new Error("Map container is already initialized.");
                    Z(e, "scroll", this._onScroll, this), this._containerId = u(e)
                },
                _initLayout: function () {
                    var t = this._container;
                    this._fadeAnimated = this.options.fadeAnimation && rn, pt(t, "leaflet-container" + (hn ? " leaflet-touch" : "") + (pn ? " leaflet-retina" : "") + ($e ? " leaflet-oldie" : "") + (Xe ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                    var e = st(t, "position");
                    "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                },
                _initPanes: function () {
                    var t = this._panes = {};
                    this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), wt(this._mapPane, new _(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pt(t.markerPane, "leaflet-zoom-hide"), pt(t.shadowPane, "leaflet-zoom-hide"))
                },
                _resetView: function (t, e) {
                    wt(this._mapPane, new _(0, 0));
                    var n = !this._loaded;
                    this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                    var i = this._zoom !== e;
                    this._moveStart(i, !1)._move(t, e)._moveEnd(i), this.fire("viewreset"), n && this.fire("load")
                },
                _moveStart: function (t, e) {
                    return t && this.fire("zoomstart"), e || this.fire("movestart"), this
                },
                _move: function (t, e, n) {
                    e === undefined && (e = this._zoom);
                    var i = this._zoom !== e;
                    return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (i || n && n.pinch) && this.fire("zoom", n), this.fire("move", n)
                },
                _moveEnd: function (t) {
                    return t && this.fire("zoomend"), this.fire("moveend")
                },
                _stop: function () {
                    return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                },
                _rawPanBy: function (t) {
                    wt(this._mapPane, this._getMapPanePos().subtract(t))
                },
                _getZoomSpan: function () {
                    return this.getMaxZoom() - this.getMinZoom()
                },
                _panInsideMaxBounds: function () {
                    this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                },
                _checkIfLoaded: function () {
                    if (!this._loaded) throw new Error("Set map center and zoom first.")
                },
                _initEvents: function (t) {
                    this._targets = {};
                    var e = t ? U : Z;
                    e((this._targets[u(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), rn && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                },
                _onResize: function () {
                    g(this._resizeRequest), this._resizeRequest = T(function () {
                        this.invalidateSize({
                            debounceMoveend: !0
                        })
                    }, this)
                },
                _onScroll: function () {
                    this._container.scrollTop = 0, this._container.scrollLeft = 0
                },
                _onMoveEnd: function () {
                    var t = this._getMapPanePos();
                    Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                },
                _findEventTargets: function (t, e) {
                    for (var n, i = [], o = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, a = !1; r;) {
                        if ((n = this._targets[u(r)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(n)) {
                            a = !0;
                            break
                        }
                        if (n && n.listens(e, !0)) {
                            if (o && !ot(r, t)) break;
                            if (i.push(n), o) break
                        }
                        if (r === this._container) break;
                        r = r.parentNode
                    }
                    return i.length || a || o || !ot(r, t) || (i = [this]), i
                },
                _handleDOMEvent: function (t) {
                    if (this._loaded && !it(t)) {
                        var e = t.type;
                        "mousedown" !== e && "keypress" !== e || kt(t.target || t.srcElement), this._fireDOMEvent(t, e)
                    }
                },
                _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                _fireDOMEvent: function (t, e, n) {
                    if ("click" === t.type) {
                        var i = l({}, t);
                        i.type = "preclick", this._fireDOMEvent(i, i.type, n)
                    }
                    if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                        var o = n[0];
                        "contextmenu" === e && o.listens(e, !0) && J(t);
                        var r = {
                            originalEvent: t
                        };
                        if ("keypress" !== t.type) {
                            var a = o.getLatLng && (!o._radius || o._radius <= 10);
                            r.containerPoint = a ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? o.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                        }
                        for (var s = 0; s < n.length; s++)
                            if (n[s].fire(e, r, !0), r.originalEvent._stopped || !1 === n[s].options.bubblingMouseEvents && -1 !== f(this._mouseEvents, e)) return
                    }
                },
                _draggableMoved: function (t) {
                    return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                },
                _clearHandlers: function () {
                    for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
                },
                whenReady: function (t, e) {
                    return this._loaded ? t.call(e || this, {
                        target: this
                    }) : this.on("load", t, e), this
                },
                _getMapPanePos: function () {
                    return St(this._mapPane) || new _(0, 0)
                },
                _moved: function () {
                    var t = this._getMapPanePos();
                    return t && !t.equals([0, 0])
                },
                _getTopLeftPoint: function (t, e) {
                    return (t && e !== undefined ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                },
                _getNewPixelOrigin: function (t, e) {
                    var n = this.getSize()._divideBy(2);
                    return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round()
                },
                _latLngToNewLayerPoint: function (t, e, n) {
                    var i = this._getNewPixelOrigin(n, e);
                    return this.project(t, e)._subtract(i)
                },
                _latLngBoundsToNewLayerBounds: function (t, e, n) {
                    var i = this._getNewPixelOrigin(n, e);
                    return w([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
                },
                _getCenterLayerPoint: function () {
                    return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                },
                _getCenterOffset: function (t) {
                    return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                },
                _limitCenter: function (t, e, n) {
                    if (!n) return t;
                    var i = this.project(t, e),
                        o = this.getSize().divideBy(2),
                        r = new x(i.subtract(o), i.add(o)),
                        a = this._getBoundsOffset(r, n, e);
                    return a.round().equals([0, 0]) ? t : this.unproject(i.add(a), e)
                },
                _limitOffset: function (t, e) {
                    if (!e) return t;
                    var n = this.getPixelBounds(),
                        i = new x(n.min.add(t), n.max.add(t));
                    return t.add(this._getBoundsOffset(i, e))
                },
                _getBoundsOffset: function (t, e, n) {
                    var i = w(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
                        o = i.min.subtract(t.min),
                        r = i.max.subtract(t.max);
                    return new _(this._rebound(o.x, -r.x), this._rebound(o.y, -r.y))
                },
                _rebound: function (t, e) {
                    return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                },
                _limitZoom: function (t) {
                    var e = this.getMinZoom(),
                        n = this.getMaxZoom(),
                        i = rn ? this.options.zoomSnap : 1;
                    return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t))
                },
                _onPanTransitionStep: function () {
                    this.fire("move")
                },
                _onPanTransitionEnd: function () {
                    mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                },
                _tryAnimatedPan: function (t, e) {
                    var n = this._getCenterOffset(t)._trunc();
                    return !(!0 !== (e && e.animate) && !this.getSize().contains(n)) && (this.panBy(n, e), !0)
                },
                _createAnimProxy: function () {
                    var t = this._proxy = lt("div", "leaflet-proxy leaflet-zoom-animated");
                    this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
                        var e = Bn,
                            n = this._proxy.style[e];
                        xt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                    }, this), this.on("load moveend", function () {
                        var t = this.getCenter(),
                            e = this.getZoom();
                        xt(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                    }, this), this._on("unload", this._destroyAnimProxy, this)
                },
                _destroyAnimProxy: function () {
                    ut(this._proxy), delete this._proxy
                },
                _catchTransitionEnd: function (t) {
                    this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
                },
                _nothingToAnimate: function () {
                    return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                },
                _tryAnimatedZoom: function (t, e, n) {
                    if (this._animatingZoom) return !0;
                    if (n = n || {}, !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                    var i = this.getZoomScale(e),
                        o = this._getCenterOffset(t)._divideBy(1 - 1 / i);
                    return !(!0 !== n.animate && !this.getSize().contains(o)) && (T(function () {
                        this._moveStart(!0, !1)._animateZoom(t, e, !0)
                    }, this), !0)
                },
                _animateZoom: function (t, e, n, i) {
                    this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, pt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                        center: t,
                        zoom: e,
                        noUpdate: i
                    }), setTimeout(s(this._onZoomTransitionEnd, this), 250))
                },
                _onZoomTransitionEnd: function () {
                    this._animatingZoom && (this._mapPane && mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), T(function () {
                        this._moveEnd(!0)
                    }, this))
                }
            }),
            $n = v.extend({
                options: {
                    position: "topright"
                },
                initialize: function (t) {
                    a(this, t)
                },
                getPosition: function () {
                    return this.options.position
                },
                setPosition: function (t) {
                    var e = this._map;
                    return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                },
                getContainer: function () {
                    return this._container
                },
                addTo: function (t) {
                    this.remove(), this._map = t;
                    var e = this._container = this.onAdd(t),
                        n = this.getPosition(),
                        i = t._controlCorners[n];
                    return pt(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this
                },
                remove: function () {
                    return this._map && (ut(this._container), this.onRemove && this.onRemove(this._map), this._map = null), this
                },
                _refocusOnMap: function (t) {
                    this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
                }
            }),
            Hn = function (t) {
                return new $n(t)
            };
        Fn.include({
            addControl: function (t) {
                return t.addTo(this), this
            },
            removeControl: function (t) {
                return t.remove(), this
            },
            _initControlPos: function () {
                function t(t, e) {
                    var n = o + t + " " + o + e;
                    i[t + e] = lt("div", n, r)
                }
                var i = this._controlCorners = {},
                    o = "leaflet-",
                    r = this._controlContainer = lt("div", o + "control-container", this._container);
                t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
            },
            _clearControlPos: function () {
                for (var t in this._controlCorners) ut(this._controlCorners[t]);
                ut(this._controlContainer), delete this._controlCorners, delete this._controlContainer
            }
        });
        var qn = $n.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function (t, e, n, i) {
                        return n < i ? -1 : i < n ? 1 : 0
                    }
                },
                initialize: function (t, e, n) {
                    for (var i in a(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[i], i);
                    for (i in e) this._addLayer(e[i], i, !0)
                },
                onAdd: function (t) {
                    this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
                    for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                    return this._container
                },
                addTo: function (t) {
                    return $n.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                },
                onRemove: function () {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                },
                addBaseLayer: function (t, e) {
                    return this._addLayer(t, e), this._map ? this._update() : this
                },
                addOverlay: function (t, e) {
                    return this._addLayer(t, e, !0), this._map ? this._update() : this
                },
                removeLayer: function (t) {
                    t.off("add remove", this._onLayerChange, this);
                    var e = this._getLayer(u(t));
                    return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
                },
                expand: function () {
                    pt(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                    var t = this._map.getSize().y - (this._container.offsetTop + 50);
                    return t < this._form.clientHeight ? (pt(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : mt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                },
                collapse: function () {
                    return mt(this._container, "leaflet-control-layers-expanded"), this
                },
                _initLayout: function () {
                    var t = "leaflet-control-layers",
                        e = this._container = lt("div", t),
                        n = this.options.collapsed;
                    e.setAttribute("aria-haspopup", !0), X(e), K(e);
                    var i = this._form = lt("form", t + "-list");
                    n && (this._map.on("click", this.collapse, this), We || Z(e, {
                        mouseenter: this.expand,
                        mouseleave: this.collapse
                    }, this));
                    var o = this._layersLink = lt("a", t + "-toggle", e);
                    o.href = "#", o.title = "Layers", hn ? (Z(o, "click", Y), Z(o, "click", this.expand, this)) : Z(o, "focus", this.expand, this), n || this.expand(), this._baseLayersList = lt("div", t + "-base", i), this._separator = lt("div", t + "-separator", i), this._overlaysList = lt("div", t + "-overlays", i), e.appendChild(i)
                },
                _getLayer: function (t) {
                    for (var e = 0; e < this._layers.length; e++)
                        if (this._layers[e] && u(this._layers[e].layer) === t) return this._layers[e]
                },
                _addLayer: function (t, e, n) {
                    this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                        layer: t,
                        name: e,
                        overlay: n
                    }), this.options.sortLayers && this._layers.sort(s(function (t, e) {
                        return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                    }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                },
                _update: function () {
                    if (!this._container) return this;
                    ct(this._baseLayersList), ct(this._overlaysList), this._layerControlInputs = [];
                    var t, e, n, i, o = 0;
                    for (n = 0; n < this._layers.length; n++) i = this._layers[n], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, o += i.overlay ? 0 : 1;
                    return this.options.hideSingleBase && (t = t && 1 < o, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
                },
                _onLayerChange: function (t) {
                    this._handlingClick || this._update();
                    var e = this._getLayer(u(t.target)),
                        n = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                    n && this._map.fire(n, e)
                },
                _createRadioElement: function (t, e) {
                    var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                        i = document.createElement("div");
                    return i.innerHTML = n, i.firstChild
                },
                _addItem: function (t) {
                    var e, n = document.createElement("label"),
                        i = this._map.hasLayer(t.layer);
                    t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = i) : e = this._createRadioElement("leaflet-base-layers", i), this._layerControlInputs.push(e), e.layerId = u(t.layer), Z(e, "click", this._onInputClick, this);
                    var o = document.createElement("span");
                    o.innerHTML = " " + t.name;
                    var r = document.createElement("div");
                    return n.appendChild(r), r.appendChild(e), r.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(n), this._checkDisabledLayers(), n
                },
                _onInputClick: function () {
                    var t, e, n = this._layerControlInputs,
                        i = [],
                        o = [];
                    this._handlingClick = !0;
                    for (var r = n.length - 1; 0 <= r; r--) t = n[r], e = this._getLayer(t.layerId).layer, t.checked ? i.push(e) : t.checked || o.push(e);
                    for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
                    for (r = 0; r < i.length; r++) this._map.hasLayer(i[r]) || this._map.addLayer(i[r]);
                    this._handlingClick = !1, this._refocusOnMap()
                },
                _checkDisabledLayers: function () {
                    for (var t, e, n = this._layerControlInputs, i = this._map.getZoom(), o = n.length - 1; 0 <= o; o--) t = n[o], e = this._getLayer(t.layerId).layer, t.disabled = e.options.minZoom !== undefined && i < e.options.minZoom || e.options.maxZoom !== undefined && i > e.options.maxZoom
                },
                _expandIfNotCollapsed: function () {
                    return this._map && !this.options.collapsed && this.expand(), this
                },
                _expand: function () {
                    return this.expand()
                },
                _collapse: function () {
                    return this.collapse()
                }
            }),
            Wn = function (t, e, n) {
                return new qn(t, e, n)
            },
            Zn = $n.extend({
                options: {
                    position: "topleft",
                    zoomInText: "+",
                    zoomInTitle: "Zoom in",
                    zoomOutText: "&#x2212;",
                    zoomOutTitle: "Zoom out"
                },
                onAdd: function (t) {
                    var e = "leaflet-control-zoom",
                        n = lt("div", e + " leaflet-bar"),
                        i = this.options;
                    return this._zoomInButton = this._createButton(i.zoomInText, i.zoomInTitle, e + "-in", n, this._zoomIn), this._zoomOutButton = this._createButton(i.zoomOutText, i.zoomOutTitle, e + "-out", n, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n
                },
                onRemove: function (t) {
                    t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                },
                disable: function () {
                    return this._disabled = !0, this._updateDisabled(), this
                },
                enable: function () {
                    return this._disabled = !1, this._updateDisabled(), this
                },
                _zoomIn: function (t) {
                    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _zoomOut: function (t) {
                    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _createButton: function (t, e, n, i, o) {
                    var r = lt("a", n, i);
                    return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), X(r), Z(r, "click", Y), Z(r, "click", o, this), Z(r, "click", this._refocusOnMap, this), r
                },
                _updateDisabled: function () {
                    var t = this._map,
                        e = "leaflet-disabled";
                    mt(this._zoomInButton, e), mt(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && pt(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && pt(this._zoomInButton, e)
                }
            });
        Fn.mergeOptions({
            zoomControl: !0
        }), Fn.addInitHook(function () {
            this.options.zoomControl && (this.zoomControl = new Zn, this.addControl(this.zoomControl))
        });
        var Un = function (t) {
                return new Zn(t)
            },
            Vn = $n.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0
                },
                onAdd: function (t) {
                    var e = "leaflet-control-scale",
                        n = lt("div", e),
                        i = this.options;
                    return this._addScales(i, e + "-line", n), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), n
                },
                onRemove: function (t) {
                    t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                },
                _addScales: function (t, e, n) {
                    t.metric && (this._mScale = lt("div", e, n)), t.imperial && (this._iScale = lt("div", e, n))
                },
                _update: function () {
                    var t = this._map,
                        e = t.getSize().y / 2,
                        n = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                    this._updateScales(n)
                },
                _updateScales: function (t) {
                    this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                },
                _updateMetric: function (t) {
                    var e = this._getRoundNum(t),
                        n = e < 1e3 ? e + " m" : e / 1e3 + " km";
                    this._updateScale(this._mScale, n, e / t)
                },
                _updateImperial: function (t) {
                    var e, n, i, o = 3.2808399 * t;
                    5280 < o ? (e = o / 5280, n = this._getRoundNum(e), this._updateScale(this._iScale, n + " mi", n / e)) : (i = this._getRoundNum(o), this._updateScale(this._iScale, i + " ft", i / o))
                },
                _updateScale: function (t, e, n) {
                    t.style.width = Math.round(this.options.maxWidth * n) + "px", t.innerHTML = e
                },
                _getRoundNum: function (t) {
                    var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                        n = t / e;
                    return e * (n = 10 <= n ? 10 : 5 <= n ? 5 : 3 <= n ? 3 : 2 <= n ? 2 : 1)
                }
            }),
            Gn = function (t) {
                return new Vn(t)
            },
            Qn = $n.extend({
                options: {
                    position: "bottomright",
                    prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                },
                initialize: function (t) {
                    a(this, t), this._attributions = {}
                },
                onAdd: function (t) {
                    for (var e in (t.attributionControl = this)._container = lt("div", "leaflet-control-attribution"), X(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                    return this._update(), this._container
                },
                setPrefix: function (t) {
                    return this.options.prefix = t, this._update(), this
                },
                addAttribution: function (t) {
                    return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this
                },
                removeAttribution: function (t) {
                    return t && this._attributions[t] && (this._attributions[t]--, this._update()), this
                },
                _update: function () {
                    if (this._map) {
                        var t = [];
                        for (var e in this._attributions) this._attributions[e] && t.push(e);
                        var n = [];
                        this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ")
                    }
                }
            });
        Fn.mergeOptions({
            attributionControl: !0
        }), Fn.addInitHook(function () {
            this.options.attributionControl && (new Qn).addTo(this)
        });
        var Kn = function (t) {
            return new Qn(t)
        };
        $n.Layers = qn, $n.Zoom = Zn, $n.Scale = Vn, $n.Attribution = Qn, Hn.layers = Wn, Hn.zoom = Un, Hn.scale = Gn, Hn.attribution = Kn;
        var Xn = v.extend({
            initialize: function (t) {
                this._map = t
            },
            enable: function () {
                return this._enabled || (this._enabled = !0, this.addHooks()), this
            },
            disable: function () {
                return this._enabled && (this._enabled = !1, this.removeHooks()), this
            },
            enabled: function () {
                return !!this._enabled
            }
        });
        Xn.addTo = function (t, e) {
            return t.addHandler(e, this), this
        };
        var Jn, Yn, ti = {
                Events: Se
            },
            ei = hn ? "touchstart mousedown" : "mousedown",
            ni = {
                mousedown: "mouseup",
                touchstart: "touchend",
                pointerdown: "touchend",
                MSPointerDown: "touchend"
            },
            ii = {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            },
            oi = Te.extend({
                options: {
                    clickTolerance: 3
                },
                initialize: function (t, e, n, i) {
                    a(this, i), this._element = t, this._dragStartTarget = e || t, this._preventOutline = n
                },
                enable: function () {
                    this._enabled || (Z(this._dragStartTarget, ei, this._onDown, this), this._enabled = !0)
                },
                disable: function () {
                    this._enabled && (oi._dragging === this && this.finishDrag(), U(this._dragStartTarget, ei, this._onDown, this), this._enabled = !1, this._moved = !1)
                },
                _onDown: function (t) {
                    if (!t._simulated && this._enabled && (this._moved = !1, !ft(this._element, "leaflet-zoom-anim") && !(oi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((oi._dragging = this)._preventOutline && kt(this._element), Tt(), Ie(), this._moving)))) {
                        this.fire("down");
                        var e = t.touches ? t.touches[0] : t;
                        this._startPoint = new _(e.clientX, e.clientY), Z(document, ii[t.type], this._onMove, this), Z(document, ni[t.type], this._onUp, this)
                    }
                },
                _onMove: function (t) {
                    if (!t._simulated && this._enabled)
                        if (t.touches && 1 < t.touches.length) this._moved = !0;
                        else {
                            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                n = new _(e.clientX, e.clientY).subtract(this._startPoint);
                            (n.x || n.y) && (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (J(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = St(this._element).subtract(n), pt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = T(this._updatePosition, this, !0)))
                        }
                },
                _updatePosition: function () {
                    var t = {
                        originalEvent: this._lastEvent
                    };
                    this.fire("predrag", t), wt(this._element, this._newPos), this.fire("drag", t)
                },
                _onUp: function (t) {
                    !t._simulated && this._enabled && this.finishDrag()
                },
                finishDrag: function () {
                    for (var t in mt(document.body, "leaflet-dragging"), this._lastTarget && (mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ii) U(document, ii[t], this._onMove, this), U(document, ni[t], this._onUp, this);
                    Ct(), Me(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
                        distance: this._newPos.distanceTo(this._startPos)
                    })), this._moving = !1, oi._dragging = !1
                }
            }),
            ri = (Object.freeze || Object)({
                simplify: Pt,
                pointToSegmentDistance: Et,
                closestPointOnSegment: At,
                clipSegment: Rt,
                _getEdgeIntersection: jt,
                _getBitCode: Nt,
                _sqClosestPointOnSegment: Ot,
                isFlat: Ft,
                _flat: $t
            }),
            ai = (Object.freeze || Object)({
                clipPolygon: Ht
            }),
            si = {
                project: function (t) {
                    return new _(t.lng, t.lat)
                },
                unproject: function (t) {
                    return new k(t.y, t.x)
                },
                bounds: new x([-180, -90], [180, 90])
            },
            li = {
                R: 6378137,
                R_MINOR: 6356752.314245179,
                bounds: new x([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                project: function (t) {
                    var e = Math.PI / 180,
                        n = this.R,
                        i = t.lat * e,
                        o = this.R_MINOR / n,
                        r = Math.sqrt(1 - o * o),
                        a = r * Math.sin(i),
                        s = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - a) / (1 + a), r / 2);
                    return i = -n * Math.log(Math.max(s, 1e-10)), new _(t.lng * e * n, i)
                },
                unproject: function (t) {
                    for (var e, n = 180 / Math.PI, i = this.R, o = this.R_MINOR / i, r = Math.sqrt(1 - o * o), a = Math.exp(-t.y / i), s = Math.PI / 2 - 2 * Math.atan(a), l = 0, u = .1; l < 15 && 1e-7 < Math.abs(u); l++) e = r * Math.sin(s), e = Math.pow((1 - e) / (1 + e), r / 2), s += u = Math.PI / 2 - 2 * Math.atan(a * e) - s;
                    return new k(s * n, t.x * n / i)
                }
            },
            ui = (Object.freeze || Object)({
                LonLat: si,
                Mercator: li,
                SphericalMercator: Pe
            }),
            ci = l({}, De, {
                code: "EPSG:3395",
                projection: li,
                transformation: (Yn = .5 / (Math.PI * li.R), E(Yn, .5, -Yn, .5))
            }),
            hi = l({}, De, {
                code: "EPSG:4326",
                projection: si,
                transformation: E(1 / 180, 1, -1 / 180, .5)
            }),
            di = l({}, Le, {
                projection: si,
                transformation: E(1, 0, -1, 0),
                scale: function (t) {
                    return Math.pow(2, t)
                },
                zoom: function (t) {
                    return Math.log(t) / Math.LN2
                },
                distance: function (t, e) {
                    var n = e.lng - t.lng,
                        i = e.lat - t.lat;
                    return Math.sqrt(n * n + i * i)
                },
                infinite: !0
            });
        Le.Earth = De, Le.EPSG3395 = ci, Le.EPSG3857 = Ne, Le.EPSG900913 = ze, Le.EPSG4326 = hi, Le.Simple = di;
        var fi = Te.extend({
            options: {
                pane: "overlayPane",
                attribution: null,
                bubblingMouseEvents: !0
            },
            addTo: function (t) {
                return t.addLayer(this), this
            },
            remove: function () {
                return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function (t) {
                return t && t.removeLayer(this), this
            },
            getPane: function (t) {
                return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function (t) {
                return this._map._targets[u(t)] = this
            },
            removeInteractiveTarget: function (t) {
                return delete this._map._targets[u(t)], this
            },
            getAttribution: function () {
                return this.options.attribution
            },
            _layerAdd: function (t) {
                var e = t.target;
                if (e.hasLayer(this)) {
                    if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                        var n = this.getEvents();
                        e.on(n, this), this.once("remove", function () {
                            e.off(n, this)
                        }, this)
                    }
                    this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                        layer: this
                    })
                }
            }
        });
        Fn.include({
            addLayer: function (t) {
                if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                var e = u(t);
                return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
            },
            removeLayer: function (t) {
                var e = u(t);
                return this._layers[e] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                    layer: t
                }), t.fire("remove")), t._map = t._mapToAdd = null), this
            },
            hasLayer: function (t) {
                return !!t && u(t) in this._layers
            },
            eachLayer: function (t, e) {
                for (var n in this._layers) t.call(e, this._layers[n]);
                return this
            },
            _addLayers: function (t) {
                for (var e = 0, n = (t = t ? ve(t) ? t : [t] : []).length; e < n; e++) this.addLayer(t[e])
            },
            _addZoomLimit: function (t) {
                !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[u(t)] = t, this._updateZoomLevels())
            },
            _removeZoomLimit: function (t) {
                var e = u(t);
                this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
            },
            _updateZoomLevels: function () {
                var t = Infinity,
                    e = -Infinity,
                    n = this._getZoomSpan();
                for (var i in this._zoomBoundLayers) {
                    var o = this._zoomBoundLayers[i].options;
                    t = o.minZoom === undefined ? t : Math.min(t, o.minZoom), e = o.maxZoom === undefined ? e : Math.max(e, o.maxZoom)
                }
                this._layersMaxZoom = e === -Infinity ? undefined : e, this._layersMinZoom = t === Infinity ? undefined : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
            }
        });
        var pi = fi.extend({
                initialize: function (t, e) {
                    var n, i;
                    if (a(this, e), this._layers = {}, t)
                        for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n])
                },
                addLayer: function (t) {
                    var e = this.getLayerId(t);
                    return this._layers[e] = t, this._map && this._map.addLayer(t), this
                },
                removeLayer: function (t) {
                    var e = t in this._layers ? t : this.getLayerId(t);
                    return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                },
                hasLayer: function (t) {
                    return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
                },
                clearLayers: function () {
                    return this.eachLayer(this.removeLayer, this)
                },
                invoke: function (t) {
                    var e, n, i = Array.prototype.slice.call(arguments, 1);
                    for (e in this._layers)(n = this._layers[e])[t] && n[t].apply(n, i);
                    return this
                },
                onAdd: function (t) {
                    this.eachLayer(t.addLayer, t)
                },
                onRemove: function (t) {
                    this.eachLayer(t.removeLayer, t)
                },
                eachLayer: function (t, e) {
                    for (var n in this._layers) t.call(e, this._layers[n]);
                    return this
                },
                getLayer: function (t) {
                    return this._layers[t]
                },
                getLayers: function () {
                    var t = [];
                    return this.eachLayer(t.push, t), t
                },
                setZIndex: function (t) {
                    return this.invoke("setZIndex", t)
                },
                getLayerId: function (t) {
                    return u(t)
                }
            }),
            mi = function (t, e) {
                return new pi(t, e)
            },
            gi = pi.extend({
                addLayer: function (t) {
                    return this.hasLayer(t) ? this : (t.addEventParent(this), pi.prototype.addLayer.call(this, t), this.fire("layeradd", {
                        layer: t
                    }))
                },
                removeLayer: function (t) {
                    return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), pi.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                        layer: t
                    })) : this
                },
                setStyle: function (t) {
                    return this.invoke("setStyle", t)
                },
                bringToFront: function () {
                    return this.invoke("bringToFront")
                },
                bringToBack: function () {
                    return this.invoke("bringToBack")
                },
                getBounds: function () {
                    var t = new S;
                    for (var e in this._layers) {
                        var n = this._layers[e];
                        t.extend(n.getBounds ? n.getBounds() : n.getLatLng())
                    }
                    return t
                }
            }),
            vi = function (t) {
                return new gi(t)
            },
            yi = v.extend({
                options: {
                    popupAnchor: [0, 0],
                    tooltipAnchor: [0, 0]
                },
                initialize: function (t) {
                    a(this, t)
                },
                createIcon: function (t) {
                    return this._createIcon("icon", t)
                },
                createShadow: function (t) {
                    return this._createIcon("shadow", t)
                },
                _createIcon: function (t, e) {
                    var n = this._getIconUrl(t);
                    if (!n) {
                        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null
                    }
                    var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
                    return this._setIconStyles(i, t), i
                },
                _setIconStyles: function (t, e) {
                    var n = this.options,
                        i = n[e + "Size"];
                    "number" == typeof i && (i = [i, i]);
                    var o = b(i),
                        r = b("shadow" === e && n.shadowAnchor || n.iconAnchor || o && o.divideBy(2, !0));
                    t.className = "leaflet-marker-" + e + " " + (n.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                },
                _createImg: function (t, e) {
                    return (e = e || document.createElement("img")).src = t, e
                },
                _getIconUrl: function (t) {
                    return pn && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                }
            }),
            _i = yi.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function (t) {
                    return _i.imagePath || (_i.imagePath = this._detectIconPath()), (this.options.imagePath || _i.imagePath) + yi.prototype._getIconUrl.call(this, t)
                },
                _detectIconPath: function () {
                    var t = lt("div", "leaflet-default-icon-path", document.body),
                        e = st(t, "background-image") || st(t, "backgroundImage");
                    return document.body.removeChild(t), e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
                }
            }),
            bi = Xn.extend({
                initialize: function (t) {
                    this._marker = t
                },
                addHooks: function () {
                    var t = this._marker._icon;
                    this._draggable || (this._draggable = new oi(t, t, !0)), this._draggable.on({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).enable(), pt(t, "leaflet-marker-draggable")
                },
                removeHooks: function () {
                    this._draggable.off({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).disable(), this._marker._icon && mt(this._marker._icon, "leaflet-marker-draggable")
                },
                moved: function () {
                    return this._draggable && this._draggable._moved
                },
                _adjustPan: function (t) {
                    var e = this._marker,
                        n = e._map,
                        i = this._marker.options.autoPanSpeed,
                        o = this._marker.options.autoPanPadding,
                        r = L.DomUtil.getPosition(e._icon),
                        a = n.getPixelBounds(),
                        s = n.getPixelOrigin(),
                        l = w(a.min._subtract(s).add(o), a.max._subtract(s).subtract(o));
                    if (!l.contains(r)) {
                        var u = b((Math.max(l.max.x, r.x) - l.max.x) / (a.max.x - l.max.x) - (Math.min(l.min.x, r.x) - l.min.x) / (a.min.x - l.min.x), (Math.max(l.max.y, r.y) - l.max.y) / (a.max.y - l.max.y) - (Math.min(l.min.y, r.y) - l.min.y) / (a.min.y - l.min.y)).multiplyBy(i);
                        n.panBy(u, {
                            animate: !1
                        }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), L.DomUtil.setPosition(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = T(this._adjustPan.bind(this, t))
                    }
                },
                _onDragStart: function () {
                    this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
                },
                _onPreDrag: function (t) {
                    this._marker.options.autoPan && (g(this._panRequest), this._panRequest = T(this._adjustPan.bind(this, t)))
                },
                _onDrag: function (t) {
                    var e = this._marker,
                        n = e._shadow,
                        i = St(e._icon),
                        o = e._map.layerPointToLatLng(i);
                    n && wt(n, i), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
                },
                _onDragEnd: function (t) {
                    g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                }
            }),
            xi = fi.extend({
                options: {
                    icon: new _i,
                    interactive: !0,
                    draggable: !1,
                    autoPan: !1,
                    autoPanPadding: [50, 50],
                    autoPanSpeed: 10,
                    keyboard: !0,
                    title: "",
                    alt: "",
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250,
                    pane: "markerPane",
                    bubblingMouseEvents: !1
                },
                initialize: function (t, e) {
                    a(this, e), this._latlng = D(t)
                },
                onAdd: function (t) {
                    this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                },
                onRemove: function (t) {
                    this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                },
                getEvents: function () {
                    return {
                        zoom: this.update,
                        viewreset: this.update
                    }
                },
                getLatLng: function () {
                    return this._latlng
                },
                setLatLng: function (t) {
                    var e = this._latlng;
                    return this._latlng = D(t), this.update(), this.fire("move", {
                        oldLatLng: e,
                        latlng: this._latlng
                    })
                },
                setZIndexOffset: function (t) {
                    return this.options.zIndexOffset = t, this.update()
                },
                setIcon: function (t) {
                    return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                },
                getElement: function () {
                    return this._icon
                },
                update: function () {
                    if (this._icon && this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng).round();
                        this._setPos(t)
                    }
                    return this
                },
                _initIcon: function () {
                    var t = this.options,
                        e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                        n = t.icon.createIcon(this._icon),
                        i = !1;
                    n !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (n.title = t.title), "IMG" === n.tagName && (n.alt = t.alt || "")), pt(n, e), t.keyboard && (n.tabIndex = "0"), this._icon = n, t.riseOnHover && this.on({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    });
                    var o = t.icon.createShadow(this._shadow),
                        r = !1;
                    o !== this._shadow && (this._removeShadow(), r = !0), o && (pt(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction(), o && r && this.getPane("shadowPane").appendChild(this._shadow)
                },
                _removeIcon: function () {
                    this.options.riseOnHover && this.off({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }), ut(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                },
                _removeShadow: function () {
                    this._shadow && ut(this._shadow), this._shadow = null
                },
                _setPos: function (t) {
                    wt(this._icon, t), this._shadow && wt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                },
                _updateZIndex: function (t) {
                    this._icon.style.zIndex = this._zIndex + t
                },
                _animateZoom: function (t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                    this._setPos(e)
                },
                _initInteraction: function () {
                    if (this.options.interactive && (pt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), bi)) {
                        var t = this.options.draggable;
                        this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new bi(this), t && this.dragging.enable()
                    }
                },
                setOpacity: function (t) {
                    return this.options.opacity = t, this._map && this._updateOpacity(), this
                },
                _updateOpacity: function () {
                    var t = this.options.opacity;
                    yt(this._icon, t), this._shadow && yt(this._shadow, t)
                },
                _bringToFront: function () {
                    this._updateZIndex(this.options.riseOffset)
                },
                _resetZIndex: function () {
                    this._updateZIndex(0)
                },
                _getPopupAnchor: function () {
                    return this.options.icon.options.popupAnchor
                },
                _getTooltipAnchor: function () {
                    return this.options.icon.options.tooltipAnchor
                }
            }),
            wi = fi.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    fillRule: "evenodd",
                    interactive: !0,
                    bubblingMouseEvents: !0
                },
                beforeAdd: function (t) {
                    this._renderer = t.getRenderer(this)
                },
                onAdd: function () {
                    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                },
                onRemove: function () {
                    this._renderer._removePath(this)
                },
                redraw: function () {
                    return this._map && this._renderer._updatePath(this), this
                },
                setStyle: function (t) {
                    return a(this, t), this._renderer && this._renderer._updateStyle(this), this
                },
                bringToFront: function () {
                    return this._renderer && this._renderer._bringToFront(this), this
                },
                bringToBack: function () {
                    return this._renderer && this._renderer._bringToBack(this), this
                },
                getElement: function () {
                    return this._path
                },
                _reset: function () {
                    this._project(), this._update()
                },
                _clickTolerance: function () {
                    return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
                }
            }),
            Si = wi.extend({
                options: {
                    fill: !0,
                    radius: 10
                },
                initialize: function (t, e) {
                    a(this, e), this._latlng = D(t), this._radius = this.options.radius
                },
                setLatLng: function (t) {
                    return this._latlng = D(t), this.redraw(), this.fire("move", {
                        latlng: this._latlng
                    })
                },
                getLatLng: function () {
                    return this._latlng
                },
                setRadius: function (t) {
                    return this.options.radius = this._radius = t, this.redraw()
                },
                getRadius: function () {
                    return this._radius
                },
                setStyle: function (t) {
                    var e = t && t.radius || this._radius;
                    return wi.prototype.setStyle.call(this, t), this.setRadius(e), this
                },
                _project: function () {
                    this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                },
                _updateBounds: function () {
                    var t = this._radius,
                        e = this._radiusY || t,
                        n = this._clickTolerance(),
                        i = [t + n, e + n];
                    this._pxBounds = new x(this._point.subtract(i), this._point.add(i))
                },
                _update: function () {
                    this._map && this._updatePath()
                },
                _updatePath: function () {
                    this._renderer._updateCircle(this)
                },
                _empty: function () {
                    return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                },
                _containsPoint: function (t) {
                    return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                }
            }),
            Ti = Si.extend({
                initialize: function (t, e, n) {
                    if ("number" == typeof e && (e = l({}, n, {
                            radius: e
                        })), a(this, e), this._latlng = D(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                    this._mRadius = this.options.radius
                },
                setRadius: function (t) {
                    return this._mRadius = t, this.redraw()
                },
                getRadius: function () {
                    return this._mRadius
                },
                getBounds: function () {
                    var t = [this._radius, this._radiusY || this._radius];
                    return new S(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
                },
                setStyle: wi.prototype.setStyle,
                _project: function () {
                    var t = this._latlng.lng,
                        e = this._latlng.lat,
                        n = this._map,
                        i = n.options.crs;
                    if (i.distance === De.distance) {
                        var o = Math.PI / 180,
                            r = this._mRadius / De.R / o,
                            a = n.project([e + r, t]),
                            s = n.project([e - r, t]),
                            l = a.add(s).divideBy(2),
                            u = n.unproject(l).lat,
                            c = Math.acos((Math.cos(r * o) - Math.sin(e * o) * Math.sin(u * o)) / (Math.cos(e * o) * Math.cos(u * o))) / o;
                        (isNaN(c) || 0 === c) && (c = r / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(n.getPixelOrigin()), this._radius = isNaN(c) ? 0 : l.x - n.project([u, t - c]).x, this._radiusY = l.y - a.y
                    } else {
                        var h = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
                        this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(h).x
                    }
                    this._updateBounds()
                }
            }),
            Ci = wi.extend({
                options: {
                    smoothFactor: 1,
                    noClip: !1
                },
                initialize: function (t, e) {
                    a(this, e), this._setLatLngs(t)
                },
                getLatLngs: function () {
                    return this._latlngs
                },
                setLatLngs: function (t) {
                    return this._setLatLngs(t), this.redraw()
                },
                isEmpty: function () {
                    return !this._latlngs.length
                },
                closestLayerPoint: function (t) {
                    for (var e, n, i = Infinity, o = null, r = Ot, a = 0, s = this._parts.length; a < s; a++)
                        for (var l = this._parts[a], u = 1, c = l.length; u < c; u++) {
                            var h = r(t, e = l[u - 1], n = l[u], !0);
                            h < i && (i = h, o = r(t, e, n))
                        }
                    return o && (o.distance = Math.sqrt(i)), o
                },
                getCenter: function () {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    var t, e, n, i, o, r, a, s = this._rings[0],
                        l = s.length;
                    if (!l) return null;
                    for (e = t = 0; t < l - 1; t++) e += s[t].distanceTo(s[t + 1]) / 2;
                    if (0 === e) return this._map.layerPointToLatLng(s[0]);
                    for (i = t = 0; t < l - 1; t++)
                        if (o = s[t], r = s[t + 1], e < (i += n = o.distanceTo(r))) return a = (i - e) / n, this._map.layerPointToLatLng([r.x - a * (r.x - o.x), r.y - a * (r.y - o.y)])
                },
                getBounds: function () {
                    return this._bounds
                },
                addLatLng: function (t, e) {
                    return e = e || this._defaultShape(), t = D(t), e.push(t), this._bounds.extend(t), this.redraw()
                },
                _setLatLngs: function (t) {
                    this._bounds = new S, this._latlngs = this._convertLatLngs(t)
                },
                _defaultShape: function () {
                    return Ft(this._latlngs) ? this._latlngs : this._latlngs[0]
                },
                _convertLatLngs: function (t) {
                    for (var e = [], n = Ft(t), i = 0, o = t.length; i < o; i++) n ? (e[i] = D(t[i]), this._bounds.extend(e[i])) : e[i] = this._convertLatLngs(t[i]);
                    return e
                },
                _project: function () {
                    var t = new x;
                    this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                    var e = this._clickTolerance(),
                        n = new _(e, e);
                    this._bounds.isValid() && t.isValid() && (t.min._subtract(n), t.max._add(n), this._pxBounds = t)
                },
                _projectLatlngs: function (t, e, n) {
                    var i, o, r = t[0] instanceof k,
                        a = t.length;
                    if (r) {
                        for (o = [], i = 0; i < a; i++) o[i] = this._map.latLngToLayerPoint(t[i]), n.extend(o[i]);
                        e.push(o)
                    } else
                        for (i = 0; i < a; i++) this._projectLatlngs(t[i], e, n)
                },
                _clipPoints: function () {
                    var t = this._renderer._bounds;
                    if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip) this._parts = this._rings;
                        else {
                            var e, n, i, o, r, a, s, l = this._parts;
                            for (i = e = 0, o = this._rings.length; e < o; e++)
                                for (n = 0, r = (s = this._rings[e]).length; n < r - 1; n++)(a = Rt(s[n], s[n + 1], t, n, !0)) && (l[i] = l[i] || [], l[i].push(a[0]), a[1] === s[n + 1] && n !== r - 2 || (l[i].push(a[1]), i++))
                        }
                },
                _simplifyPoints: function () {
                    for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++) t[n] = Pt(t[n], e)
                },
                _update: function () {
                    this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                },
                _updatePath: function () {
                    this._renderer._updatePoly(this)
                },
                _containsPoint: function (t, e) {
                    var n, i, o, r, a, s, l = this._clickTolerance();
                    if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                    for (n = 0, r = this._parts.length; n < r; n++)
                        for (i = 0, o = (a = (s = this._parts[n]).length) - 1; i < a; o = i++)
                            if ((e || 0 !== i) && Et(t, s[o], s[i]) <= l) return !0;
                    return !1
                }
            });
        Ci._flat = $t;
        var ki = Ci.extend({
                options: {
                    fill: !0
                },
                isEmpty: function () {
                    return !this._latlngs.length || !this._latlngs[0].length
                },
                getCenter: function () {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    var t, e, n, i, o, r, a, s, l, u = this._rings[0],
                        c = u.length;
                    if (!c) return null;
                    for (r = a = s = 0, t = 0, e = c - 1; t < c; e = t++) n = u[t], i = u[e], o = n.y * i.x - i.y * n.x, a += (n.x + i.x) * o, s += (n.y + i.y) * o, r += 3 * o;
                    return l = 0 === r ? u[0] : [a / r, s / r], this._map.layerPointToLatLng(l)
                },
                _convertLatLngs: function (t) {
                    var e = Ci.prototype._convertLatLngs.call(this, t),
                        n = e.length;
                    return 2 <= n && e[0] instanceof k && e[0].equals(e[n - 1]) && e.pop(), e
                },
                _setLatLngs: function (t) {
                    Ci.prototype._setLatLngs.call(this, t), Ft(this._latlngs) && (this._latlngs = [this._latlngs])
                },
                _defaultShape: function () {
                    return Ft(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                },
                _clipPoints: function () {
                    var t = this._renderer._bounds,
                        e = this.options.weight,
                        n = new _(e, e);
                    if (t = new x(t.min.subtract(n), t.max.add(n)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip) this._parts = this._rings;
                        else
                            for (var i, o = 0, r = this._rings.length; o < r; o++)(i = Ht(this._rings[o], t, !0)).length && this._parts.push(i)
                },
                _updatePath: function () {
                    this._renderer._updatePoly(this, !0)
                },
                _containsPoint: function (t) {
                    var e, n, i, o, r, a, s, l, u = !1;
                    if (!this._pxBounds.contains(t)) return !1;
                    for (o = 0, s = this._parts.length; o < s; o++)
                        for (r = 0, a = (l = (e = this._parts[o]).length) - 1; r < l; a = r++) n = e[r], i = e[a], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (u = !u);
                    return u || Ci.prototype._containsPoint.call(this, t, !0)
                }
            }),
            Li = gi.extend({
                initialize: function (t, e) {
                    a(this, e), this._layers = {}, t && this.addData(t)
                },
                addData: function (t) {
                    var e, n, i, o = ve(t) ? t : t.features;
                    if (o) {
                        for (e = 0, n = o.length; e < n; e++)((i = o[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
                        return this
                    }
                    var r = this.options;
                    if (r.filter && !r.filter(t)) return this;
                    var a = Qt(t, r);
                    return a ? (a.feature = ee(t), a.defaultOptions = a.options, this.resetStyle(a), r.onEachFeature && r.onEachFeature(t, a), this.addLayer(a)) : this
                },
                resetStyle: function (t) {
                    return t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
                },
                setStyle: function (e) {
                    return this.eachLayer(function (t) {
                        this._setLayerStyle(t, e)
                    }, this)
                },
                _setLayerStyle: function (t, e) {
                    "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
                }
            }),
            Di = {
                toGeoJSON: function (t) {
                    return te(this, {
                        type: "Point",
                        coordinates: Jt(this.getLatLng(), t)
                    })
                }
            };
        xi.include(Di), Ti.include(Di), Si.include(Di), Ci.include({
            toGeoJSON: function (t) {
                var e = !Ft(this._latlngs);
                return te(this, {
                    type: (e ? "Multi" : "") + "LineString",
                    coordinates: Yt(this._latlngs, e ? 1 : 0, !1, t)
                })
            }
        }), ki.include({
            toGeoJSON: function (t) {
                var e = !Ft(this._latlngs),
                    n = e && !Ft(this._latlngs[0]),
                    i = Yt(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
                return e || (i = [i]), te(this, {
                    type: (n ? "Multi" : "") + "Polygon",
                    coordinates: i
                })
            }
        }), pi.include({
            toMultiPoint: function (e) {
                var n = [];
                return this.eachLayer(function (t) {
                    n.push(t.toGeoJSON(e).geometry.coordinates)
                }), te(this, {
                    type: "MultiPoint",
                    coordinates: n
                })
            },
            toGeoJSON: function (i) {
                var t = this.feature && this.feature.geometry && this.feature.geometry.type;
                if ("MultiPoint" === t) return this.toMultiPoint(i);
                var o = "GeometryCollection" === t,
                    r = [];
                return this.eachLayer(function (t) {
                    if (t.toGeoJSON) {
                        var e = t.toGeoJSON(i);
                        if (o) r.push(e.geometry);
                        else {
                            var n = ee(e);
                            "FeatureCollection" === n.type ? r.push.apply(r, n.features) : r.push(n)
                        }
                    }
                }), o ? te(this, {
                    geometries: r,
                    type: "GeometryCollection"
                }) : {
                    type: "FeatureCollection",
                    features: r
                }
            }
        });
        var Pi = ne,
            Ei = fi.extend({
                options: {
                    opacity: 1,
                    alt: "",
                    interactive: !1,
                    crossOrigin: !1,
                    errorOverlayUrl: "",
                    zIndex: 1,
                    className: ""
                },
                initialize: function (t, e, n) {
                    this._url = t, this._bounds = C(e), a(this, n)
                },
                onAdd: function () {
                    this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                },
                onRemove: function () {
                    ut(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                },
                setOpacity: function (t) {
                    return this.options.opacity = t, this._image && this._updateOpacity(), this
                },
                setStyle: function (t) {
                    return t.opacity && this.setOpacity(t.opacity), this
                },
                bringToFront: function () {
                    return this._map && ht(this._image), this
                },
                bringToBack: function () {
                    return this._map && dt(this._image), this
                },
                setUrl: function (t) {
                    return this._url = t, this._image && (this._image.src = t), this
                },
                setBounds: function (t) {
                    return this._bounds = C(t), this._map && this._reset(), this
                },
                getEvents: function () {
                    var t = {
                        zoom: this._reset,
                        viewreset: this._reset
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                setZIndex: function (t) {
                    return this.options.zIndex = t, this._updateZIndex(), this
                },
                getBounds: function () {
                    return this._bounds
                },
                getElement: function () {
                    return this._image
                },
                _initImage: function () {
                    var t = "IMG" === this._url.tagName,
                        e = this._image = t ? this._url : lt("img");
                    pt(e, "leaflet-image-layer"), this._zoomAnimated && pt(e, "leaflet-zoom-animated"), this.options.className && pt(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onload = s(this.fire, this, "load"), e.onerror = s(this._overlayOnError, this, "error"), this.options.crossOrigin && (e.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
                },
                _animateZoom: function (t) {
                    var e = this._map.getZoomScale(t.zoom),
                        n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                    xt(this._image, n, e)
                },
                _reset: function () {
                    var t = this._image,
                        e = new x(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                        n = e.getSize();
                    wt(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px"
                },
                _updateOpacity: function () {
                    yt(this._image, this.options.opacity)
                },
                _updateZIndex: function () {
                    this._image && this.options.zIndex !== undefined && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                },
                _overlayOnError: function () {
                    this.fire("error");
                    var t = this.options.errorOverlayUrl;
                    t && this._url !== t && (this._url = t, this._image.src = t)
                }
            }),
            Ai = function (t, e, n) {
                return new Ei(t, e, n)
            },
            Ii = Ei.extend({
                options: {
                    autoplay: !0,
                    loop: !0
                },
                _initImage: function () {
                    var t = "VIDEO" === this._url.tagName,
                        e = this._image = t ? this._url : lt("video");
                    if (pt(e, "leaflet-image-layer"), this._zoomAnimated && pt(e, "leaflet-zoom-animated"), e.onselectstart = c, e.onmousemove = c, e.onloadeddata = s(this.fire, this, "load"), t) {
                        for (var n = e.getElementsByTagName("source"), i = [], o = 0; o < n.length; o++) i.push(n[o].src);
                        this._url = 0 < n.length ? i : [e.src]
                    } else {
                        ve(this._url) || (this._url = [this._url]), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                        for (var r = 0; r < this._url.length; r++) {
                            var a = lt("source");
                            a.src = this._url[r], e.appendChild(a)
                        }
                    }
                }
            }),
            Mi = fi.extend({
                options: {
                    offset: [0, 7],
                    className: "",
                    pane: "popupPane"
                },
                initialize: function (t, e) {
                    a(this, t), this._source = e
                },
                onAdd: function (t) {
                    this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && yt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && yt(this._container, 1), this.bringToFront()
                },
                onRemove: function (t) {
                    t._fadeAnimated ? (yt(this._container, 0), this._removeTimeout = setTimeout(s(ut, undefined, this._container), 200)) : ut(this._container)
                },
                getLatLng: function () {
                    return this._latlng
                },
                setLatLng: function (t) {
                    return this._latlng = D(t), this._map && (this._updatePosition(), this._adjustPan()), this
                },
                getContent: function () {
                    return this._content
                },
                setContent: function (t) {
                    return this._content = t, this.update(), this
                },
                getElement: function () {
                    return this._container
                },
                update: function () {
                    this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                },
                getEvents: function () {
                    var t = {
                        zoom: this._updatePosition,
                        viewreset: this._updatePosition
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                isOpen: function () {
                    return !!this._map && this._map.hasLayer(this)
                },
                bringToFront: function () {
                    return this._map && ht(this._container), this
                },
                bringToBack: function () {
                    return this._map && dt(this._container), this
                },
                _updateContent: function () {
                    if (this._content) {
                        var t = this._contentNode,
                            e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                        if ("string" == typeof e) t.innerHTML = e;
                        else {
                            for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                            t.appendChild(e)
                        }
                        this.fire("contentupdate")
                    }
                },
                _updatePosition: function () {
                    if (this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng),
                            e = b(this.options.offset),
                            n = this._getAnchor();
                        this._zoomAnimated ? wt(this._container, t.add(n)) : e = e.add(t).add(n);
                        var i = this._containerBottom = -e.y,
                            o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                        this._container.style.bottom = i + "px", this._container.style.left = o + "px"
                    }
                },
                _getAnchor: function () {
                    return [0, 0]
                }
            }),
            Bi = Mi.extend({
                options: {
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: ""
                },
                openOn: function (t) {
                    return t.openPopup(this), this
                },
                onAdd: function (t) {
                    Mi.prototype.onAdd.call(this, t), t.fire("popupopen", {
                        popup: this
                    }), this._source && (this._source.fire("popupopen", {
                        popup: this
                    }, !0), this._source instanceof wi || this._source.on("preclick", Q))
                },
                onRemove: function (t) {
                    Mi.prototype.onRemove.call(this, t), t.fire("popupclose", {
                        popup: this
                    }), this._source && (this._source.fire("popupclose", {
                        popup: this
                    }, !0), this._source instanceof wi || this._source.off("preclick", Q))
                },
                getEvents: function () {
                    var t = Mi.prototype.getEvents.call(this);
                    return (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                },
                _close: function () {
                    this._map && this._map.closePopup(this)
                },
                _initLayout: function () {
                    var t = "leaflet-popup",
                        e = this._container = lt("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                        n = this._wrapper = lt("div", t + "-content-wrapper", e);
                    if (this._contentNode = lt("div", t + "-content", n), X(n), K(this._contentNode), Z(n, "contextmenu", Q), this._tipContainer = lt("div", t + "-tip-container", e), this._tip = lt("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                        var i = this._closeButton = lt("a", t + "-close-button", e);
                        i.href = "#close", i.innerHTML = "&#215;", Z(i, "click", this._onCloseButtonClick, this)
                    }
                },
                _updateLayout: function () {
                    var t = this._contentNode,
                        e = t.style;
                    e.width = "", e.whiteSpace = "nowrap";
                    var n = t.offsetWidth;
                    n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
                    var i = t.offsetHeight,
                        o = this.options.maxHeight,
                        r = "leaflet-popup-scrolled";
                    o && o < i ? (e.height = o + "px", pt(t, r)) : mt(t, r), this._containerWidth = this._container.offsetWidth
                },
                _animateZoom: function (t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                        n = this._getAnchor();
                    wt(this._container, e.add(n))
                },
                _adjustPan: function () {
                    if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                        var t = this._map,
                            e = parseInt(st(this._container, "marginBottom"), 10) || 0,
                            n = this._container.offsetHeight + e,
                            i = this._containerWidth,
                            o = new _(this._containerLeft, -n - this._containerBottom);
                        o._add(St(this._container));
                        var r = t.layerPointToContainerPoint(o),
                            a = b(this.options.autoPanPadding),
                            s = b(this.options.autoPanPaddingTopLeft || a),
                            l = b(this.options.autoPanPaddingBottomRight || a),
                            u = t.getSize(),
                            c = 0,
                            h = 0;
                        r.x + i + l.x > u.x && (c = r.x + i - u.x + l.x), r.x - c - s.x < 0 && (c = r.x - s.x), r.y + n + l.y > u.y && (h = r.y + n - u.y + l.y), r.y - h - s.y < 0 && (h = r.y - s.y), (c || h) && t.fire("autopanstart").panBy([c, h])
                    }
                },
                _onCloseButtonClick: function (t) {
                    this._close(), Y(t)
                },
                _getAnchor: function () {
                    return b(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                }
            }),
            Ri = function (t, e) {
                return new Bi(t, e)
            };
        Fn.mergeOptions({
            closePopupOnClick: !0
        }), Fn.include({
            openPopup: function (t, e, n) {
                return t instanceof Bi || (t = new Bi(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
            },
            closePopup: function (t) {
                return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
            }
        }), fi.include({
            bindPopup: function (t, e) {
                return t instanceof Bi ? (a(t, e), (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new Bi(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function () {
                return this._popup && (this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !1, this._popup = null), this
            },
            openPopup: function (t, e) {
                if (t instanceof fi || (e = t, t = this), t instanceof gi)
                    for (var n in this._layers) {
                        t = this._layers[n];
                        break
                    }
                return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
            },
            closePopup: function () {
                return this._popup && this._popup._close(), this
            },
            togglePopup: function (t) {
                return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
            },
            isPopupOpen: function () {
                return !!this._popup && this._popup.isOpen()
            },
            setPopupContent: function (t) {
                return this._popup && this._popup.setContent(t), this
            },
            getPopup: function () {
                return this._popup
            },
            _openPopup: function (t) {
                var e = t.layer || t.target;
                this._popup && this._map && (Y(t), e instanceof wi ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
            },
            _movePopup: function (t) {
                this._popup.setLatLng(t.latlng)
            },
            _onKeyPress: function (t) {
                13 === t.originalEvent.keyCode && this._openPopup(t)
            }
        });
        var ji = Mi.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    interactive: !1,
                    opacity: .9
                },
                onAdd: function (t) {
                    Mi.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                        tooltip: this
                    }), this._source && this._source.fire("tooltipopen", {
                        tooltip: this
                    }, !0)
                },
                onRemove: function (t) {
                    Mi.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                        tooltip: this
                    }), this._source && this._source.fire("tooltipclose", {
                        tooltip: this
                    }, !0)
                },
                getEvents: function () {
                    var t = Mi.prototype.getEvents.call(this);
                    return hn && !this.options.permanent && (t.preclick = this._close), t
                },
                _close: function () {
                    this._map && this._map.closeTooltip(this)
                },
                _initLayout: function () {
                    var t = "leaflet-tooltip" + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = lt("div", t)
                },
                _updateLayout: function () {},
                _adjustPan: function () {},
                _setPosition: function (t) {
                    var e = this._map,
                        n = this._container,
                        i = e.latLngToContainerPoint(e.getCenter()),
                        o = e.layerPointToContainerPoint(t),
                        r = this.options.direction,
                        a = n.offsetWidth,
                        s = n.offsetHeight,
                        l = b(this.options.offset),
                        u = this._getAnchor();
                    t = "top" === r ? t.add(b(-a / 2 + l.x, -s + l.y + u.y, !0)) : "bottom" === r ? t.subtract(b(a / 2 - l.x, -l.y, !0)) : "center" === r ? t.subtract(b(a / 2 + l.x, s / 2 - u.y + l.y, !0)) : "right" === r || "auto" === r && o.x < i.x ? (r = "right", t.add(b(l.x + u.x, u.y - s / 2 + l.y, !0))) : (r = "left", t.subtract(b(a + u.x - l.x, s / 2 - u.y - l.y, !0))), mt(n, "leaflet-tooltip-right"), mt(n, "leaflet-tooltip-left"), mt(n, "leaflet-tooltip-top"), mt(n, "leaflet-tooltip-bottom"), pt(n, "leaflet-tooltip-" + r), wt(n, t)
                },
                _updatePosition: function () {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t)
                },
                setOpacity: function (t) {
                    this.options.opacity = t, this._container && yt(this._container, t)
                },
                _animateZoom: function (t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                    this._setPosition(e)
                },
                _getAnchor: function () {
                    return b(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                }
            }),
            Ni = function (t, e) {
                return new ji(t, e)
            };
        Fn.include({
            openTooltip: function (t, e, n) {
                return t instanceof ji || (t = new ji(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
            },
            closeTooltip: function (t) {
                return t && this.removeLayer(t), this
            }
        }), fi.include({
            bindTooltip: function (t, e) {
                return t instanceof ji ? (a(t, e), (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new ji(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
            },
            unbindTooltip: function () {
                return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
            },
            _initTooltipInteractions: function (t) {
                if (t || !this._tooltipHandlersAdded) {
                    var e = t ? "off" : "on",
                        n = {
                            remove: this.closeTooltip,
                            move: this._moveTooltip
                        };
                    this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), hn && (n.click = this._openTooltip)), this[e](n), this._tooltipHandlersAdded = !t
                }
            },
            openTooltip: function (t, e) {
                if (t instanceof fi || (e = t, t = this), t instanceof gi)
                    for (var n in this._layers) {
                        t = this._layers[n];
                        break
                    }
                return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (pt(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
            },
            closeTooltip: function () {
                return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
            },
            toggleTooltip: function (t) {
                return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
            },
            isTooltipOpen: function () {
                return this._tooltip.isOpen()
            },
            setTooltipContent: function (t) {
                return this._tooltip && this._tooltip.setContent(t), this
            },
            getTooltip: function () {
                return this._tooltip
            },
            _openTooltip: function (t) {
                var e = t.layer || t.target;
                this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : undefined)
            },
            _moveTooltip: function (t) {
                var e, n, i = t.latlng;
                this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(e), i = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(i)
            }
        });
        var zi = yi.extend({
            options: {
                iconSize: [12, 12],
                html: !1,
                bgPos: null,
                className: "leaflet-div-icon"
            },
            createIcon: function (t) {
                var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                    n = this.options;
                if (e.innerHTML = !1 !== n.html ? n.html : "", n.bgPos) {
                    var i = b(n.bgPos);
                    e.style.backgroundPosition = -i.x + "px " + -i.y + "px"
                }
                return this._setIconStyles(e, "icon"), e
            },
            createShadow: function () {
                return null
            }
        });
        yi.Default = _i;
        var Oi = fi.extend({
                options: {
                    tileSize: 256,
                    opacity: 1,
                    updateWhenIdle: an,
                    updateWhenZooming: !0,
                    updateInterval: 200,
                    zIndex: 1,
                    bounds: null,
                    minZoom: 0,
                    maxZoom: undefined,
                    maxNativeZoom: undefined,
                    minNativeZoom: undefined,
                    noWrap: !1,
                    pane: "tilePane",
                    className: "",
                    keepBuffer: 2
                },
                initialize: function (t) {
                    a(this, t)
                },
                onAdd: function () {
                    this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
                },
                beforeAdd: function (t) {
                    t._addZoomLimit(this)
                },
                onRemove: function (t) {
                    this._removeAllTiles(), ut(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = undefined
                },
                bringToFront: function () {
                    return this._map && (ht(this._container), this._setAutoZIndex(Math.max)), this
                },
                bringToBack: function () {
                    return this._map && (dt(this._container), this._setAutoZIndex(Math.min)), this
                },
                getContainer: function () {
                    return this._container
                },
                setOpacity: function (t) {
                    return this.options.opacity = t, this._updateOpacity(), this
                },
                setZIndex: function (t) {
                    return this.options.zIndex = t, this._updateZIndex(), this
                },
                isLoading: function () {
                    return this._loading
                },
                redraw: function () {
                    return this._map && (this._removeAllTiles(), this._update()), this
                },
                getEvents: function () {
                    var t = {
                        viewprereset: this._invalidateAll,
                        viewreset: this._resetView,
                        zoom: this._resetView,
                        moveend: this._onMoveEnd
                    };
                    return this.options.updateWhenIdle || (this._onMove || (this._onMove = e(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                createTile: function () {
                    return document.createElement("div")
                },
                getTileSize: function () {
                    var t = this.options.tileSize;
                    return t instanceof _ ? t : new _(t, t)
                },
                _updateZIndex: function () {
                    this._container && this.options.zIndex !== undefined && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                },
                _setAutoZIndex: function (t) {
                    for (var e, n = this.getPane().children, i = -t(-Infinity, Infinity), o = 0, r = n.length; o < r; o++) e = n[o].style.zIndex, n[o] !== this._container && e && (i = t(i, +e));
                    isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex())
                },
                _updateOpacity: function () {
                    if (this._map && !$e) {
                        yt(this._container, this.options.opacity);
                        var t = +new Date,
                            e = !1,
                            n = !1;
                        for (var i in this._tiles) {
                            var o = this._tiles[i];
                            if (o.current && o.loaded) {
                                var r = Math.min(1, (t - o.loaded) / 200);
                                yt(o.el, r), r < 1 ? e = !0 : (o.active ? n = !0 : this._onOpaqueTile(o), o.active = !0)
                            }
                        }
                        n && !this._noPrune && this._pruneTiles(), e && (g(this._fadeFrame), this._fadeFrame = T(this._updateOpacity, this))
                    }
                },
                _onOpaqueTile: c,
                _initContainer: function () {
                    this._container || (this._container = lt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                },
                _updateLevels: function () {
                    var t = this._tileZoom,
                        e = this.options.maxZoom;
                    if (t === undefined) return undefined;
                    for (var n in this._levels) this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (ut(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
                    var i = this._levels[t],
                        o = this._map;
                    return i || ((i = this._levels[t] = {}).el = lt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), i.el.style.zIndex = e, i.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), i.zoom = t, this._setZoomTransform(i, o.getCenter(), o.getZoom()), c(i.el.offsetWidth), this._onCreateLevel(i)), this._level = i
                },
                _onUpdateLevel: c,
                _onRemoveLevel: c,
                _onCreateLevel: c,
                _pruneTiles: function () {
                    if (this._map) {
                        var t, e, n = this._map.getZoom();
                        if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                        else {
                            for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                            for (t in this._tiles)
                                if ((e = this._tiles[t]).current && !e.active) {
                                    var i = e.coords;
                                    this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2)
                                } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                        }
                    }
                },
                _removeTilesAtZoom: function (t) {
                    for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
                },
                _removeAllTiles: function () {
                    for (var t in this._tiles) this._removeTile(t)
                },
                _invalidateAll: function () {
                    for (var t in this._levels) ut(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                    this._removeAllTiles(), this._tileZoom = undefined
                },
                _retainParent: function (t, e, n, i) {
                    var o = Math.floor(t / 2),
                        r = Math.floor(e / 2),
                        a = n - 1,
                        s = new _(+o, +r);
                    s.z = +a;
                    var l = this._tileCoordsToKey(s),
                        u = this._tiles[l];
                    return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), i < a && this._retainParent(o, r, a, i))
                },
                _retainChildren: function (t, e, n, i) {
                    for (var o = 2 * t; o < 2 * t + 2; o++)
                        for (var r = 2 * e; r < 2 * e + 2; r++) {
                            var a = new _(o, r);
                            a.z = n + 1;
                            var s = this._tileCoordsToKey(a),
                                l = this._tiles[s];
                            l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), n + 1 < i && this._retainChildren(o, r, n + 1, i))
                        }
                },
                _resetView: function (t) {
                    var e = t && (t.pinch || t.flyTo);
                    this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
                },
                _animateZoom: function (t) {
                    this._setView(t.center, t.zoom, !0, t.noUpdate)
                },
                _clampZoom: function (t) {
                    var e = this.options;
                    return undefined !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : undefined !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
                },
                _setView: function (t, e, n, i) {
                    var o = this._clampZoom(Math.round(e));
                    (this.options.maxZoom !== undefined && o > this.options.maxZoom || this.options.minZoom !== undefined && o < this.options.minZoom) && (o = undefined);
                    var r = this.options.updateWhenZooming && o !== this._tileZoom;
                    i && !r || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== undefined && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e)
                },
                _setZoomTransforms: function (t, e) {
                    for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e)
                },
                _setZoomTransform: function (t, e, n) {
                    var i = this._map.getZoomScale(n, t.zoom),
                        o = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
                    rn ? xt(t.el, o, i) : wt(t.el, o)
                },
                _resetGrid: function () {
                    var t = this._map,
                        e = t.options.crs,
                        n = this._tileSize = this.getTileSize(),
                        i = this._tileZoom,
                        o = this._map.getPixelWorldBounds(this._tileZoom);
                    o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x), Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x), Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y)]
                },
                _onMoveEnd: function () {
                    this._map && !this._map._animatingZoom && this._update()
                },
                _getTiledPixelBounds: function (t) {
                    var e = this._map,
                        n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                        i = e.getZoomScale(n, this._tileZoom),
                        o = e.project(t, this._tileZoom).floor(),
                        r = e.getSize().divideBy(2 * i);
                    return new x(o.subtract(r), o.add(r))
                },
                _update: function (t) {
                    var e = this._map;
                    if (e) {
                        var n = this._clampZoom(e.getZoom());
                        if (t === undefined && (t = e.getCenter()), this._tileZoom !== undefined) {
                            var i = this._getTiledPixelBounds(t),
                                o = this._pxBoundsToTileRange(i),
                                r = o.getCenter(),
                                a = [],
                                s = this.options.keepBuffer,
                                l = new x(o.getBottomLeft().subtract([s, -s]), o.getTopRight().add([s, -s]));
                            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                            for (var u in this._tiles) {
                                var c = this._tiles[u].coords;
                                c.z === this._tileZoom && l.contains(new _(c.x, c.y)) || (this._tiles[u].current = !1)
                            }
                            if (1 < Math.abs(n - this._tileZoom)) this._setView(t, n);
                            else {
                                for (var h = o.min.y; h <= o.max.y; h++)
                                    for (var d = o.min.x; d <= o.max.x; d++) {
                                        var f = new _(d, h);
                                        if (f.z = this._tileZoom, this._isValidTile(f)) {
                                            var p = this._tiles[this._tileCoordsToKey(f)];
                                            p ? p.current = !0 : a.push(f)
                                        }
                                    }
                                if (a.sort(function (t, e) {
                                        return t.distanceTo(r) - e.distanceTo(r)
                                    }), 0 !== a.length) {
                                    this._loading || (this._loading = !0, this.fire("loading"));
                                    var m = document.createDocumentFragment();
                                    for (d = 0; d < a.length; d++) this._addTile(a[d], m);
                                    this._level.el.appendChild(m)
                                }
                            }
                        }
                    }
                },
                _isValidTile: function (t) {
                    var e = this._map.options.crs;
                    if (!e.infinite) {
                        var n = this._globalTileRange;
                        if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1
                    }
                    if (!this.options.bounds) return !0;
                    var i = this._tileCoordsToBounds(t);
                    return C(this.options.bounds).overlaps(i)
                },
                _keyToBounds: function (t) {
                    return this._tileCoordsToBounds(this._keyToTileCoords(t))
                },
                _tileCoordsToNwSe: function (t) {
                    var e = this._map,
                        n = this.getTileSize(),
                        i = t.scaleBy(n),
                        o = i.add(n);
                    return [e.unproject(i, t.z), e.unproject(o, t.z)]
                },
                _tileCoordsToBounds: function (t) {
                    var e = this._tileCoordsToNwSe(t),
                        n = new S(e[0], e[1]);
                    return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n
                },
                _tileCoordsToKey: function (t) {
                    return t.x + ":" + t.y + ":" + t.z
                },
                _keyToTileCoords: function (t) {
                    var e = t.split(":"),
                        n = new _(+e[0], +e[1]);
                    return n.z = +e[2], n
                },
                _removeTile: function (t) {
                    var e = this._tiles[t];
                    e && (Ve || e.el.setAttribute("src", ye), ut(e.el), delete this._tiles[t], this.fire("tileunload", {
                        tile: e.el,
                        coords: this._keyToTileCoords(t)
                    }))
                },
                _initTile: function (t) {
                    pt(t, "leaflet-tile");
                    var e = this.getTileSize();
                    t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = c, t.onmousemove = c, $e && this.options.opacity < 1 && yt(t, this.options.opacity), We && !Ze && (t.style.WebkitBackfaceVisibility = "hidden")
                },
                _addTile: function (t, e) {
                    var n = this._getTilePos(t),
                        i = this._tileCoordsToKey(t),
                        o = this.createTile(this._wrapCoords(t), s(this._tileReady, this, t));
                    this._initTile(o), this.createTile.length < 2 && T(s(this._tileReady, this, t, null, o)), wt(o, n), this._tiles[i] = {
                        el: o,
                        coords: t,
                        current: !0
                    }, e.appendChild(o), this.fire("tileloadstart", {
                        tile: o,
                        coords: t
                    })
                },
                _tileReady: function (t, e, n) {
                    if (this._map) {
                        e && this.fire("tileerror", {
                            error: e,
                            tile: n,
                            coords: t
                        });
                        var i = this._tileCoordsToKey(t);
                        (n = this._tiles[i]) && (n.loaded = +new Date, this._map._fadeAnimated ? (yt(n.el, 0), g(this._fadeFrame), this._fadeFrame = T(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (pt(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                            tile: n.el,
                            coords: t
                        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), $e || !this._map._fadeAnimated ? T(this._pruneTiles, this) : setTimeout(s(this._pruneTiles, this), 250)))
                    }
                },
                _getTilePos: function (t) {
                    return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                },
                _wrapCoords: function (t) {
                    var e = new _(this._wrapX ? n(t.x, this._wrapX) : t.x, this._wrapY ? n(t.y,
                        this._wrapY) : t.y);
                    return e.z = t.z, e
                },
                _pxBoundsToTileRange: function (t) {
                    var e = this.getTileSize();
                    return new x(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
                },
                _noTilesToLoad: function () {
                    for (var t in this._tiles)
                        if (!this._tiles[t].loaded) return !1;
                    return !0
                }
            }),
            Fi = Oi.extend({
                options: {
                    minZoom: 0,
                    maxZoom: 18,
                    subdomains: "abc",
                    errorTileUrl: "",
                    zoomOffset: 0,
                    tms: !1,
                    zoomReverse: !1,
                    detectRetina: !1,
                    crossOrigin: !1
                },
                initialize: function (t, e) {
                    this._url = t, (e = a(this, e)).detectRetina && pn && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), We || this.on("tileunload", this._onTileRemove)
                },
                setUrl: function (t, e) {
                    return this._url = t, e || this.redraw(), this
                },
                createTile: function (t, e) {
                    var n = document.createElement("img");
                    return Z(n, "load", s(this._tileOnLoad, this, e, n)), Z(n, "error", s(this._tileOnError, this, e, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
                },
                getTileUrl: function (t) {
                    var e = {
                        r: pn ? "@2x" : "",
                        s: this._getSubdomain(t),
                        x: t.x,
                        y: t.y,
                        z: this._getZoomForUrl()
                    };
                    if (this._map && !this._map.options.crs.infinite) {
                        var n = this._globalTileRange.max.y - t.y;
                        this.options.tms && (e.y = n), e["-y"] = n
                    }
                    return r(this._url, l(e, this.options))
                },
                _tileOnLoad: function (t, e) {
                    $e ? setTimeout(s(t, this, null, e), 0) : t(null, e)
                },
                _tileOnError: function (t, e, n) {
                    var i = this.options.errorTileUrl;
                    i && e.getAttribute("src") !== i && (e.src = i), t(n, e)
                },
                _onTileRemove: function (t) {
                    t.tile.onload = null
                },
                _getZoomForUrl: function () {
                    var t = this._tileZoom,
                        e = this.options.maxZoom;
                    return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
                },
                _getSubdomain: function (t) {
                    var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                    return this.options.subdomains[e]
                },
                _abortLoading: function () {
                    var t, e;
                    for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = c, e.onerror = c, e.complete || (e.src = ye, ut(e), delete this._tiles[t]))
                }
            }),
            $i = Fi.extend({
                defaultWmsParams: {
                    service: "WMS",
                    request: "GetMap",
                    layers: "",
                    styles: "",
                    format: "image/jpeg",
                    transparent: !1,
                    version: "1.1.1"
                },
                options: {
                    crs: null,
                    uppercase: !1
                },
                initialize: function (t, e) {
                    this._url = t;
                    var n = l({}, this.defaultWmsParams);
                    for (var i in e) i in this.options || (n[i] = e[i]);
                    var o = (e = a(this, e)).detectRetina && pn ? 2 : 1,
                        r = this.getTileSize();
                    n.width = r.x * o, n.height = r.y * o, this.wmsParams = n
                },
                onAdd: function (t) {
                    this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                    var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
                    this.wmsParams[e] = this._crs.code, Fi.prototype.onAdd.call(this, t)
                },
                getTileUrl: function (t) {
                    var e = this._tileCoordsToNwSe(t),
                        n = this._crs,
                        i = w(n.project(e[0]), n.project(e[1])),
                        o = i.min,
                        r = i.max,
                        a = (1.3 <= this._wmsVersion && this._crs === hi ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(","),
                        s = L.TileLayer.prototype.getTileUrl.call(this, t);
                    return s + d(this.wmsParams, s, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + a
                },
                setParams: function (t, e) {
                    return l(this.wmsParams, t), e || this.redraw(), this
                }
            });
        Fi.WMS = $i, ae.wms = se;
        var Hi = fi.extend({
                options: {
                    padding: .1,
                    tolerance: 0
                },
                initialize: function (t) {
                    a(this, t), u(this), this._layers = this._layers || {}
                },
                onAdd: function () {
                    this._container || (this._initContainer(), this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                },
                onRemove: function () {
                    this.off("update", this._updatePaths, this), this._destroyContainer()
                },
                getEvents: function () {
                    var t = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd
                    };
                    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                },
                _onAnimZoom: function (t) {
                    this._updateTransform(t.center, t.zoom)
                },
                _onZoom: function () {
                    this._updateTransform(this._map.getCenter(), this._map.getZoom())
                },
                _updateTransform: function (t, e) {
                    var n = this._map.getZoomScale(e, this._zoom),
                        i = St(this._container),
                        o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                        r = this._map.project(this._center, e),
                        a = this._map.project(t, e).subtract(r),
                        s = o.multiplyBy(-n).add(i).add(o).subtract(a);
                    rn ? xt(this._container, s, n) : wt(this._container, s)
                },
                _reset: function () {
                    for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
                },
                _onZoomEnd: function () {
                    for (var t in this._layers) this._layers[t]._project()
                },
                _updatePaths: function () {
                    for (var t in this._layers) this._layers[t]._update()
                },
                _update: function () {
                    var t = this.options.padding,
                        e = this._map.getSize(),
                        n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                    this._bounds = new x(n, n.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                }
            }),
            qi = Hi.extend({
                getEvents: function () {
                    var t = Hi.prototype.getEvents.call(this);
                    return t.viewprereset = this._onViewPreReset, t
                },
                _onViewPreReset: function () {
                    this._postponeUpdatePaths = !0
                },
                onAdd: function () {
                    Hi.prototype.onAdd.call(this), this._draw()
                },
                _initContainer: function () {
                    var t = this._container = document.createElement("canvas");
                    Z(t, "mousemove", e(this._onMouseMove, 32, this), this), Z(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Z(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
                },
                _destroyContainer: function () {
                    delete this._ctx, ut(this._container), U(this._container), delete this._container
                },
                _updatePaths: function () {
                    if (!this._postponeUpdatePaths) {
                        for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                        this._redraw()
                    }
                },
                _update: function () {
                    if (!this._map._animatingZoom || !this._bounds) {
                        this._drawnLayers = {}, Hi.prototype._update.call(this);
                        var t = this._bounds,
                            e = this._container,
                            n = t.getSize(),
                            i = pn ? 2 : 1;
                        wt(e, t.min), e.width = i * n.x, e.height = i * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", pn && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                    }
                },
                _reset: function () {
                    Hi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                },
                _initPath: function (t) {
                    this._updateDashArray(t);
                    var e = (this._layers[u(t)] = t)._order = {
                        layer: t,
                        prev: this._drawLast,
                        next: null
                    };
                    this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
                },
                _addPath: function (t) {
                    this._requestRedraw(t)
                },
                _removePath: function (t) {
                    var e = t._order,
                        n = e.next,
                        i = e.prev;
                    n ? n.prev = i : this._drawLast = i, i ? i.next = n : this._drawFirst = n, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t)
                },
                _updatePath: function (t) {
                    this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                },
                _updateStyle: function (t) {
                    this._updateDashArray(t), this._requestRedraw(t)
                },
                _updateDashArray: function (t) {
                    if (t.options.dashArray) {
                        var e, n = t.options.dashArray.split(","),
                            i = [];
                        for (e = 0; e < n.length; e++) i.push(Number(n[e]));
                        t.options._dashArray = i
                    }
                },
                _requestRedraw: function (t) {
                    this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || T(this._redraw, this))
                },
                _extendRedrawBounds: function (t) {
                    if (t._pxBounds) {
                        var e = (t.options.weight || 0) + 1;
                        this._redrawBounds = this._redrawBounds || new x, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                    }
                },
                _redraw: function () {
                    this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                },
                _clear: function () {
                    var t = this._redrawBounds;
                    if (t) {
                        var e = t.getSize();
                        this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                    } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
                },
                _draw: function () {
                    var t, e = this._redrawBounds;
                    if (this._ctx.save(), e) {
                        var n = e.getSize();
                        this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip()
                    }
                    this._drawing = !0;
                    for (var i = this._drawFirst; i; i = i.next) t = i.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                    this._drawing = !1, this._ctx.restore()
                },
                _updatePoly: function (t, e) {
                    if (this._drawing) {
                        var n, i, o, r, a = t._parts,
                            s = a.length,
                            l = this._ctx;
                        if (s) {
                            for (this._drawnLayers[t._leaflet_id] = t, l.beginPath(), n = 0; n < s; n++) {
                                for (i = 0, o = a[n].length; i < o; i++) r = a[n][i], l[i ? "lineTo" : "moveTo"](r.x, r.y);
                                e && l.closePath()
                            }
                            this._fillStroke(l, t)
                        }
                    }
                },
                _updateCircle: function (t) {
                    if (this._drawing && !t._empty()) {
                        var e = t._point,
                            n = this._ctx,
                            i = Math.max(Math.round(t._radius), 1),
                            o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
                        this._drawnLayers[t._leaflet_id] = t, 1 !== o && (n.save(), n.scale(1, o)), n.beginPath(), n.arc(e.x, e.y / o, i, 0, 2 * Math.PI, !1), 1 !== o && n.restore(), this._fillStroke(n, t)
                    }
                },
                _fillStroke: function (t, e) {
                    var n = e.options;
                    n.fill && (t.globalAlpha = n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && 0 !== n.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = n.opacity, t.lineWidth = n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke())
                },
                _onClick: function (t) {
                    for (var e, n, i = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
                    n && (nt(t), this._fireEvent([n], t))
                },
                _onMouseMove: function (t) {
                    if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                        var e = this._map.mouseEventToLayerPoint(t);
                        this._handleMouseHover(t, e)
                    }
                },
                _handleMouseOut: function (t) {
                    var e = this._hoveredLayer;
                    e && (mt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
                },
                _handleMouseHover: function (t, e) {
                    for (var n, i, o = this._drawFirst; o; o = o.next)(n = o.layer).options.interactive && n._containsPoint(e) && (i = n);
                    i !== this._hoveredLayer && (this._handleMouseOut(t), i && (pt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseover"), this._hoveredLayer = i)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
                },
                _fireEvent: function (t, e, n) {
                    this._map._fireDOMEvent(e, n || e.type, t)
                },
                _bringToFront: function (t) {
                    var e = t._order,
                        n = e.next,
                        i = e.prev;
                    n && ((n.prev = i) ? i.next = n : n && (this._drawFirst = n), e.prev = this._drawLast, (this._drawLast.next = e).next = null, this._drawLast = e, this._requestRedraw(t))
                },
                _bringToBack: function (t) {
                    var e = t._order,
                        n = e.next,
                        i = e.prev;
                    i && ((i.next = n) ? n.prev = i : i && (this._drawLast = i), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
                }
            }),
            Wi = function () {
                try {
                    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function (t) {
                            return document.createElement("<lvml:" + t + ' class="lvml">')
                        }
                } catch (t) {
                    return function (t) {
                        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }
            }(),
            Zi = {
                _initContainer: function () {
                    this._container = lt("div", "leaflet-vml-container")
                },
                _update: function () {
                    this._map._animatingZoom || (Hi.prototype._update.call(this), this.fire("update"))
                },
                _initPath: function (t) {
                    var e = t._container = Wi("shape");
                    pt(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Wi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[u(t)] = t
                },
                _addPath: function (t) {
                    var e = t._container;
                    this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
                },
                _removePath: function (t) {
                    var e = t._container;
                    ut(e), t.removeInteractiveTarget(e), delete this._layers[u(t)]
                },
                _updateStyle: function (t) {
                    var e = t._stroke,
                        n = t._fill,
                        i = t.options,
                        o = t._container;
                    o.stroked = !!i.stroke, o.filled = !!i.fill, i.stroke ? (e || (e = t._stroke = Wi("stroke")), o.appendChild(e), e.weight = i.weight + "px", e.color = i.color, e.opacity = i.opacity, i.dashArray ? e.dashStyle = ve(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = i.lineCap.replace("butt", "flat"), e.joinstyle = i.lineJoin) : e && (o.removeChild(e), t._stroke = null), i.fill ? (n || (n = t._fill = Wi("fill")), o.appendChild(n), n.color = i.fillColor || i.color, n.opacity = i.fillOpacity) : n && (o.removeChild(n), t._fill = null)
                },
                _updateCircle: function (t) {
                    var e = t._point.round(),
                        n = Math.round(t._radius),
                        i = Math.round(t._radiusY || n);
                    this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600")
                },
                _setPath: function (t, e) {
                    t._path.v = e
                },
                _bringToFront: function (t) {
                    ht(t._container)
                },
                _bringToBack: function (t) {
                    dt(t._container)
                }
            },
            Ui = vn ? Wi : A,
            Vi = Hi.extend({
                getEvents: function () {
                    var t = Hi.prototype.getEvents.call(this);
                    return t.zoomstart = this._onZoomStart, t
                },
                _initContainer: function () {
                    this._container = Ui("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Ui("g"), this._container.appendChild(this._rootGroup)
                },
                _destroyContainer: function () {
                    ut(this._container), U(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                },
                _onZoomStart: function () {
                    this._update()
                },
                _update: function () {
                    if (!this._map._animatingZoom || !this._bounds) {
                        Hi.prototype._update.call(this);
                        var t = this._bounds,
                            e = t.getSize(),
                            n = this._container;
                        this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), wt(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                    }
                },
                _initPath: function (t) {
                    var e = t._path = Ui("path");
                    t.options.className && pt(e, t.options.className), t.options.interactive && pt(e, "leaflet-interactive"), this._updateStyle(t), this._layers[u(t)] = t
                },
                _addPath: function (t) {
                    this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                },
                _removePath: function (t) {
                    ut(t._path), t.removeInteractiveTarget(t._path), delete this._layers[u(t)]
                },
                _updatePath: function (t) {
                    t._project(), t._update()
                },
                _updateStyle: function (t) {
                    var e = t._path,
                        n = t.options;
                    e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                },
                _updatePoly: function (t, e) {
                    this._setPath(t, I(t._parts, e))
                },
                _updateCircle: function (t) {
                    var e = t._point,
                        n = Math.max(Math.round(t._radius), 1),
                        i = "a" + n + "," + (Math.max(Math.round(t._radiusY), 1) || n) + " 0 1,0 ",
                        o = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + i + 2 * n + ",0 " + i + 2 * -n + ",0 ";
                    this._setPath(t, o)
                },
                _setPath: function (t, e) {
                    t._path.setAttribute("d", e)
                },
                _bringToFront: function (t) {
                    ht(t._path)
                },
                _bringToBack: function (t) {
                    dt(t._path)
                }
            });
        vn && Vi.include(Zi), Fn.include({
            getRenderer: function (t) {
                var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                return e || (e = this._renderer = this.options.preferCanvas && le() || ue()), this.hasLayer(e) || this.addLayer(e), e
            },
            _getPaneRenderer: function (t) {
                if ("overlayPane" === t || t === undefined) return !1;
                var e = this._paneRenderers[t];
                return e === undefined && (e = Vi && ue({
                    pane: t
                }) || qi && le({
                    pane: t
                }), this._paneRenderers[t] = e), e
            }
        });
        var Gi = ki.extend({
            initialize: function (t, e) {
                ki.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function (t) {
                return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function (t) {
                return [(t = C(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
        });
        Vi.create = Ui, Vi.pointsToPath = I, Li.geometryToLayer = Qt, Li.coordsToLatLng = Kt, Li.coordsToLatLngs = Xt, Li.latLngToCoords = Jt, Li.latLngsToCoords = Yt, Li.getFeature = te, Li.asFeature = ee, Fn.mergeOptions({
            boxZoom: !0
        });
        var Qi = Xn.extend({
            initialize: function (t) {
                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
            },
            addHooks: function () {
                Z(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function () {
                U(this._container, "mousedown", this._onMouseDown, this)
            },
            moved: function () {
                return this._moved
            },
            _destroy: function () {
                ut(this._pane), delete this._pane
            },
            _resetState: function () {
                this._resetStateTimeout = 0, this._moved = !1
            },
            _clearDeferredResetState: function () {
                0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
            },
            _onMouseDown: function (t) {
                if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                this._clearDeferredResetState(), this._resetState(), Ie(), Tt(), this._startPoint = this._map.mouseEventToContainerPoint(t), Z(document, {
                    contextmenu: Y,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseMove: function (t) {
                this._moved || (this._moved = !0, this._box = lt("div", "leaflet-zoom-box", this._container), pt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                var e = new x(this._point, this._startPoint),
                    n = e.getSize();
                wt(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px"
            },
            _finish: function () {
                this._moved && (ut(this._box), mt(this._container, "leaflet-crosshair")), Me(), Ct(), U(document, {
                    contextmenu: Y,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseUp: function (t) {
                if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                    this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(s(this._resetState, this), 0);
                    var e = new S(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                    this._map.fitBounds(e).fire("boxzoomend", {
                        boxZoomBounds: e
                    })
                }
            },
            _onKeyDown: function (t) {
                27 === t.keyCode && this._finish()
            }
        });
        Fn.addInitHook("addHandler", "boxZoom", Qi), Fn.mergeOptions({
            doubleClickZoom: !0
        });
        var Ki = Xn.extend({
            addHooks: function () {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function () {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function (t) {
                var e = this._map,
                    n = e.getZoom(),
                    i = e.options.zoomDelta,
                    o = t.originalEvent.shiftKey ? n - i : n + i;
                "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
            }
        });
        Fn.addInitHook("addHandler", "doubleClickZoom", Ki), Fn.mergeOptions({
            dragging: !0,
            inertia: !Ze,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: Infinity,
            easeLinearity: .2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
        });
        var Xi = Xn.extend({
            addHooks: function () {
                if (!this._draggable) {
                    var t = this._map;
                    this._draggable = new oi(t._mapPane, t._container), this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                }
                pt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
            },
            removeHooks: function () {
                mt(this._map._container, "leaflet-grab"), mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
            },
            moved: function () {
                return this._draggable && this._draggable._moved
            },
            moving: function () {
                return this._draggable && this._draggable._moving
            },
            _onDragStart: function () {
                var t = this._map;
                if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                    var e = C(this._map.options.maxBounds);
                    this._offsetLimit = w(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                } else this._offsetLimit = null;
                t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function (t) {
                if (this._map.options.inertia) {
                    var e = this._lastTime = +new Date,
                        n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                    this._positions.push(n), this._times.push(e), this._prunePositions(e)
                }
                this._map.fire("move", t).fire("drag", t)
            },
            _prunePositions: function (t) {
                for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift()
            },
            _onZoomEnd: function () {
                var t = this._map.getSize().divideBy(2),
                    e = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
            },
            _viscousLimit: function (t, e) {
                return t - (t - e) * this._viscosity
            },
            _onPreDragLimit: function () {
                if (this._viscosity && this._offsetLimit) {
                    var t = this._draggable._newPos.subtract(this._draggable._startPos),
                        e = this._offsetLimit;
                    t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                }
            },
            _onPreDragWrap: function () {
                var t = this._worldWidth,
                    e = Math.round(t / 2),
                    n = this._initialWorldOffset,
                    i = this._draggable._newPos.x,
                    o = (i - e + n) % t + e - n,
                    r = (i + e + n) % t - e - n,
                    a = Math.abs(o + n) < Math.abs(r + n) ? o : r;
                this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
            },
            _onDragEnd: function (t) {
                var e = this._map,
                    n = e.options,
                    i = !n.inertia || this._times.length < 2;
                if (e.fire("dragend", t), i) e.fire("moveend");
                else {
                    this._prunePositions(+new Date);
                    var o = this._lastPos.subtract(this._positions[0]),
                        r = (this._lastTime - this._times[0]) / 1e3,
                        a = n.easeLinearity,
                        s = o.multiplyBy(a / r),
                        l = s.distanceTo([0, 0]),
                        u = Math.min(n.inertiaMaxSpeed, l),
                        c = s.multiplyBy(u / l),
                        h = u / (n.inertiaDeceleration * a),
                        d = c.multiplyBy(-h / 2).round();
                    d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), T(function () {
                        e.panBy(d, {
                            duration: h,
                            easeLinearity: a,
                            noMoveStart: !0,
                            animate: !0
                        })
                    })) : e.fire("moveend")
                }
            }
        });
        Fn.addInitHook("addHandler", "dragging", Xi), Fn.mergeOptions({
            keyboard: !0,
            keyboardPanDelta: 80
        });
        var Ji = Xn.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 54, 173]
            },
            initialize: function (t) {
                this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
            },
            addHooks: function () {
                var t = this._map._container;
                t.tabIndex <= 0 && (t.tabIndex = "0"), Z(t, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.on({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            removeHooks: function () {
                this._removeHooks(), U(this._map._container, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.off({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            _onMouseDown: function () {
                if (!this._focused) {
                    var t = document.body,
                        e = document.documentElement,
                        n = t.scrollTop || e.scrollTop,
                        i = t.scrollLeft || e.scrollLeft;
                    this._map._container.focus(), window.scrollTo(i, n)
                }
            },
            _onFocus: function () {
                this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function () {
                this._focused = !1, this._map.fire("blur")
            },
            _setPanDelta: function (t) {
                var e, n, i = this._panKeys = {},
                    o = this.keyCodes;
                for (e = 0, n = o.left.length; e < n; e++) i[o.left[e]] = [-1 * t, 0];
                for (e = 0, n = o.right.length; e < n; e++) i[o.right[e]] = [t, 0];
                for (e = 0, n = o.down.length; e < n; e++) i[o.down[e]] = [0, t];
                for (e = 0, n = o.up.length; e < n; e++) i[o.up[e]] = [0, -1 * t]
            },
            _setZoomDelta: function (t) {
                var e, n, i = this._zoomKeys = {},
                    o = this.keyCodes;
                for (e = 0, n = o.zoomIn.length; e < n; e++) i[o.zoomIn[e]] = t;
                for (e = 0, n = o.zoomOut.length; e < n; e++) i[o.zoomOut[e]] = -t
            },
            _addHooks: function () {
                Z(document, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function () {
                U(document, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function (t) {
                if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                    var e, n = t.keyCode,
                        i = this._map;
                    if (n in this._panKeys) {
                        if (i._panAnim && i._panAnim._inProgress) return;
                        e = this._panKeys[n], t.shiftKey && (e = b(e).multiplyBy(3)), i.panBy(e), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
                    } else if (n in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                    else {
                        if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey) return;
                        i.closePopup()
                    }
                    Y(t)
                }
            }
        });
        Fn.addInitHook("addHandler", "keyboard", Ji), Fn.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60
        });
        var Yi = Xn.extend({
            addHooks: function () {
                Z(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
            },
            removeHooks: function () {
                U(this._map._container, "mousewheel", this._onWheelScroll, this)
            },
            _onWheelScroll: function (t) {
                var e = et(t),
                    n = this._map.options.wheelDebounceTime;
                this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                var i = Math.max(n - (+new Date - this._startTime), 0);
                clearTimeout(this._timer), this._timer = setTimeout(s(this._performZoom, this), i), Y(t)
            },
            _performZoom: function () {
                var t = this._map,
                    e = t.getZoom(),
                    n = this._map.options.zoomSnap || 0;
                t._stop();
                var i = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                    o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(i)))) / Math.LN2,
                    r = n ? Math.ceil(o / n) * n : o,
                    a = t._limitZoom(e + (0 < this._delta ? r : -r)) - e;
                this._delta = 0, this._startTime = null, a && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + a) : t.setZoomAround(this._lastMousePos, e + a))
            }
        });
        Fn.addInitHook("addHandler", "scrollWheelZoom", Yi), Fn.mergeOptions({
            tap: !0,
            tapTolerance: 15
        });
        var to = Xn.extend({
            addHooks: function () {
                Z(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function () {
                U(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function (t) {
                if (t.touches) {
                    if (J(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                    var e = t.touches[0],
                        n = e.target;
                    this._startPos = this._newPos = new _(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && pt(n, "leaflet-active"), this._holdTimeout = setTimeout(s(function () {
                        this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                    }, this), 1e3), this._simulateEvent("mousedown", e), Z(document, {
                        touchmove: this._onMove,
                        touchend: this._onUp
                    }, this)
                }
            },
            _onUp: function (t) {
                if (clearTimeout(this._holdTimeout), U(document, {
                        touchmove: this._onMove,
                        touchend: this._onUp
                    }, this), this._fireClick && t && t.changedTouches) {
                    var e = t.changedTouches[0],
                        n = e.target;
                    n && n.tagName && "a" === n.tagName.toLowerCase() && mt(n, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
                }
            },
            _isTapValid: function () {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function (t) {
                var e = t.touches[0];
                this._newPos = new _(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
            },
            _simulateEvent: function (t, e) {
                var n = document.createEvent("MouseEvents");
                n._simulated = !0, e.target._simulatedClick = !0, n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
            }
        });
        hn && !cn && Fn.addInitHook("addHandler", "tap", to), Fn.mergeOptions({
            touchZoom: hn && !Ze,
            bounceAtZoomLimits: !0
        });
        var eo = Xn.extend({
            addHooks: function () {
                pt(this._map._container, "leaflet-touch-zoom"), Z(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function () {
                mt(this._map._container, "leaflet-touch-zoom"), U(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function (t) {
                var e = this._map;
                if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                    var n = e.mouseEventToContainerPoint(t.touches[0]),
                        i = e.mouseEventToContainerPoint(t.touches[1]);
                    this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))), this._startDist = n.distanceTo(i), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Z(document, "touchmove", this._onTouchMove, this), Z(document, "touchend", this._onTouchEnd, this), J(t)
                }
            },
            _onTouchMove: function (t) {
                if (t.touches && 2 === t.touches.length && this._zooming) {
                    var e = this._map,
                        n = e.mouseEventToContainerPoint(t.touches[0]),
                        i = e.mouseEventToContainerPoint(t.touches[1]),
                        o = n.distanceTo(i) / this._startDist;
                    if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                        if (this._center = this._startLatLng, 1 === o) return
                    } else {
                        var r = n._add(i)._divideBy(2)._subtract(this._centerPoint);
                        if (1 === o && 0 === r.x && 0 === r.y) return;
                        this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                    }
                    this._moved || (e._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
                    var a = s(e._move, e, this._center, this._zoom, {
                        pinch: !0,
                        round: !1
                    });
                    this._animRequest = T(a, this, !0), J(t)
                }
            },
            _onTouchEnd: function () {
                this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), U(document, "touchmove", this._onTouchMove), U(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
            }
        });
        Fn.addInitHook("addHandler", "touchZoom", eo), Fn.BoxZoom = Qi, Fn.DoubleClickZoom = Ki, Fn.Drag = Xi, Fn.Keyboard = Ji, Fn.ScrollWheelZoom = Yi, Fn.Tap = to, Fn.TouchZoom = eo;
        var no = window.L;
        window.L = t, Object.freeze = fe, t.version = de, t.noConflict = he, t.Control = $n, t.control = Hn, t.Browser = yn, t.Evented = Te, t.Mixin = ti, t.Util = we, t.Class = v, t.Handler = Xn, t.extend = l, t.bind = s, t.stamp = u, t.setOptions = a, t.DomEvent = Mn, t.DomUtil = zn, t.PosAnimation = On, t.Draggable = oi, t.LineUtil = ri, t.PolyUtil = ai, t.Point = _, t.point = b, t.Bounds = x, t.bounds = w, t.Transformation = P, t.transformation = E, t.Projection = ui, t.LatLng = k, t.latLng = D, t.LatLngBounds = S, t.latLngBounds = C, t.CRS = Le, t.GeoJSON = Li, t.geoJSON = ne, t.geoJson = Pi, t.Layer = fi, t.LayerGroup = pi, t.layerGroup = mi, t.FeatureGroup = gi, t.featureGroup = vi, t.ImageOverlay = Ei, t.imageOverlay = Ai, t.VideoOverlay = Ii, t.videoOverlay = ie, t.DivOverlay = Mi, t.Popup = Bi, t.popup = Ri, t.Tooltip = ji, t.tooltip = Ni, t.Icon = yi, t.icon = qt, t.DivIcon = zi, t.divIcon = oe, t.Marker = xi, t.marker = Wt, t.TileLayer = Fi, t.tileLayer = ae, t.GridLayer = Oi, t.gridLayer = re, t.SVG = Vi, t.svg = ue, t.Renderer = Hi, t.Canvas = qi, t.canvas = le, t.Path = wi, t.CircleMarker = Si, t.circleMarker = Zt, t.Circle = Ti, t.circle = Ut, t.Polyline = Ci, t.polyline = Vt, t.Polygon = ki, t.polygon = Gt, t.Rectangle = Gi, t.rectangle = ce, t.Map = Fn, t.map = Dt
    }), L.Icon.Default = L.Icon.Default.extend({
        _getIconUrl: function (t) {
            return {
                "icon-2x.png": "/assets/marker-icon-2x-00179c4c1ee830d3a108412ae0d294f55776cfeb085c60129a39aa6fc4ae2528.png",
                "shadow.png": "/assets/marker-shadow-264f5c640339f042dd729062cfc04c17f8ea0f29882b538e3848ed8f10edb4da.png",
                "icon.png": "/assets/marker-icon-574c3a5cca85f4114085b6841596d62f00d7c892c7b03f28cbfa301deb1dc437.png"
            } [t + ".png"]
        },
        _detectIconPath: function () {
            return ""
        }
    }), L.Marker = L.Marker.extend({
        options: {
            icon: new L.Icon.Default
        }
    }), L.marker = function (t, e) {
        return new L.Marker(t, e)
    },
    function (n) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t || (t = window), e || (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (F, D, y, $) {
        "use strict";

        function a(e) {
            var n, i, o = "a aa ai ao as b fn i m o s ",
                r = {};
            F.each(e, function (t) {
                (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== o.indexOf(n[1] + " ") && (i = t.replace(n[0], n[2].toLowerCase()), r[i] = t, "o" === n[1] && a(e[t]))
            }), e._hungarianMap = r
        }

        function A(e, n, i) {
            var o;
            e._hungarianMap || a(e), F.each(n, function (t) {
                (o = e._hungarianMap[t]) === $ || !i && n[o] !== $ || ("o" === o.charAt(0) ? (n[o] || (n[o] = {}), F.extend(!0, n[o], n[t]), A(e[o], n[o], i)) : n[o] = n[t])
            })
        }

        function I(t) {
            var e = Ut.defaults.oLanguage,
                n = t.sZeroRecords;
            !t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && Rt(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && Rt(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands);
            var i = t.sDecimal;
            i && Wt(i)
        }

        function M(t) {
            ge(t, "ordering", "bSort"), ge(t, "orderMulti", "bSortMulti"), ge(t, "orderClasses", "bSortClasses"), ge(t, "orderCellsTop", "bSortCellsTop"), ge(t, "order", "aaSorting"), ge(t, "orderFixed", "aaSortingFixed"), ge(t, "paging", "bPaginate"), ge(t, "pagingType", "sPaginationType"), ge(t, "pageLength", "iDisplayLength"), ge(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
            var e = t.aoSearchCols;
            if (e)
                for (var n = 0, i = e.length; n < i; n++) e[n] && A(Ut.models.oSearch, e[n])
        }

        function B(t) {
            ge(t, "orderable", "bSortable"), ge(t, "orderData", "aDataSort"), ge(t, "orderSequence", "asSorting"), ge(t, "orderDataType", "sortDataType");
            var e = t.aDataSort;
            e && !F.isArray(e) && (t.aDataSort = [e])
        }

        function R(t) {
            if (!Ut.__browser) {
                var e = {};
                Ut.__browser = e;
                var n = F("<div/>").css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: 1,
                        width: 1,
                        overflow: "hidden"
                    }).append(F("<div/>").css({
                        position: "absolute",
                        top: 1,
                        left: 1,
                        width: 100,
                        overflow: "scroll"
                    }).append(F("<div/>").css({
                        width: "100%",
                        height: 10
                    }))).appendTo("body"),
                    i = n.children(),
                    o = i.children();
                e.barWidth = i[0].offsetWidth - i[0].clientWidth, e.bScrollOversize = 100 === o[0].offsetWidth && 100 !== i[0].clientWidth, e.bScrollbarLeft = 1 !== Math.round(o.offset().left), e.bBounding = !!n[0].getBoundingClientRect().width, n.remove()
            }
            F.extend(t.oBrowser, Ut.__browser), t.oScroll.iBarWidth = Ut.__browser.barWidth
        }

        function n(t, e, n, i, o, r) {
            var a, s = i,
                l = !1;
            for (n !== $ && (a = n, l = !0); s !== o;) t.hasOwnProperty(s) && (a = l ? e(a, t[s], s, t) : t[s], l = !0, s += r);
            return a
        }

        function j(t, e) {
            var n = Ut.defaults.column,
                i = t.aoColumns.length,
                o = F.extend({}, Ut.models.oColumn, n, {
                    nTh: e || y.createElement("th"),
                    sTitle: n.sTitle ? n.sTitle : e ? e.innerHTML : "",
                    aDataSort: n.aDataSort ? n.aDataSort : [i],
                    mData: n.mData ? n.mData : i,
                    idx: i
                });
            t.aoColumns.push(o);
            var r = t.aoPreSearchCols;
            r[i] = F.extend({}, Ut.models.oSearch, r[i]), N(t, i, F(e).data())
        }

        function N(t, e, n) {
            var i = t.aoColumns[e],
                o = t.oClasses,
                r = F(i.nTh);
            if (!i.sWidthOrig) {
                i.sWidthOrig = r.attr("width") || null;
                var a = (r.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                a && (i.sWidthOrig = a[1])
            }
            n !== $ && null !== n && (B(n), A(Ut.defaults.column, n), n.mDataProp === $ || n.mData || (n.mData = n.mDataProp), n.sType && (i._sManualType = n.sType), n.className && !n.sClass && (n.sClass = n.className), F.extend(i, n), Rt(i, n, "sWidth", "sWidthOrig"), n.iDataSort !== $ && (i.aDataSort = [n.iDataSort]), Rt(i, n, "aDataSort"));
            var s = i.mData,
                l = Z(s),
                u = i.mRender ? Z(i.mRender) : null,
                c = function (t) {
                    return "string" == typeof t && -1 !== t.indexOf("@")
                };
            i._bAttrSrc = F.isPlainObject(s) && (c(s.sort) || c(s.type) || c(s.filter)), i.fnGetData = function (t, e, n) {
                var i = l(t, e, $, n);
                return u && e ? u(i, e, t, n) : i
            }, i.fnSetData = function (t, e, n) {
                return _(s)(t, e, n)
            }, "number" != typeof s && (t._rowReadObject = !0), t.oFeatures.bSort || (i.bSortable = !1, r.addClass(o.sSortableNone));
            var h = -1 !== F.inArray("asc", i.asSorting),
                d = -1 !== F.inArray("desc", i.asSorting);
            i.bSortable && (h || d) ? i.sSortingClassJUI = h && !d ? (i.sSortingClass = o.sSortableAsc, o.sSortJUIAscAllowed) : !h && d ? (i.sSortingClass = o.sSortableDesc, o.sSortJUIDescAllowed) : (i.sSortingClass = o.sSortable, o.sSortJUI) : (i.sSortingClass = o.sSortableNone, i.sSortingClassJUI = "")
        }

        function H(t) {
            if (!1 !== t.oFeatures.bAutoWidth) {
                var e = t.aoColumns;
                yt(t);
                for (var n = 0, i = e.length; n < i; n++) e[n].nTh.style.width = e[n].sWidth
            }
            var o = t.oScroll;
            "" === o.sY && "" === o.sX || gt(t), Ot(t, null, "column-sizing", [t])
        }

        function q(t, e) {
            var n = E(t, "bVisible");
            return "number" == typeof n[e] ? n[e] : null
        }

        function c(t, e) {
            var n = E(t, "bVisible"),
                i = F.inArray(e, n);
            return -1 !== i ? i : null
        }

        function P(t) {
            return E(t, "bVisible").length
        }

        function E(t, n) {
            var i = [];
            return F.map(t.aoColumns, function (t, e) {
                t[n] && i.push(e)
            }), i
        }

        function l(t) {
            var e, n, i, o, r, a, s, l, u, c = t.aoColumns,
                h = t.aoData,
                d = Ut.ext.type.detect;
            for (e = 0, n = c.length; e < n; e++)
                if (u = [], !(s = c[e]).sType && s._sManualType) s.sType = s._sManualType;
                else if (!s.sType) {
                for (i = 0, o = d.length; i < o; i++) {
                    for (r = 0, a = h.length; r < a && (u[r] === $ && (u[r] = m(t, r, e, "type")), (l = d[i](u[r], t)) || i === d.length - 1) && "html" !== l; r++);
                    if (l) {
                        s.sType = l;
                        break
                    }
                }
                s.sType || (s.sType = "string")
            }
        }

        function z(t, e, n, i) {
            var o, r, a, s, l, u, c, h = t.aoColumns;
            if (e)
                for (o = e.length - 1; 0 <= o; o--) {
                    var d = (c = e[o]).targets !== $ ? c.targets : c.aTargets;
                    for (F.isArray(d) || (d = [d]), a = 0, s = d.length; a < s; a++)
                        if ("number" == typeof d[a] && 0 <= d[a]) {
                            for (; h.length <= d[a];) j(t);
                            i(d[a], c)
                        } else if ("number" == typeof d[a] && d[a] < 0) i(h.length + d[a], c);
                    else if ("string" == typeof d[a])
                        for (l = 0, u = h.length; l < u; l++)("_all" == d[a] || F(h[l].nTh).hasClass(d[a])) && i(l, c)
                }
            if (n)
                for (o = 0, r = n.length; o < r; o++) i(o, n[o])
        }

        function O(t, e, n, i) {
            var o = t.aoData.length,
                r = F.extend(!0, {}, Ut.models.oRow, {
                    src: n ? "dom" : "data",
                    idx: o
                });
            r._aData = e, t.aoData.push(r);
            for (var a = t.aoColumns, s = 0, l = a.length; s < l; s++) a[s].sType = null;
            t.aiDisplayMaster.push(o);
            var u = t.rowIdFn(e);
            return u !== $ && (t.aIds[u] = r), !n && t.oFeatures.bDeferRender || w(t, o, n, i), o
        }

        function W(n, t) {
            var i;
            return t instanceof F || (t = F(t)), t.map(function (t, e) {
                return i = h(n, e), O(n, i.data, e, i.cells)
            })
        }

        function t(t, e) {
            return e._DT_RowIndex !== $ ? e._DT_RowIndex : null
        }

        function e(t, e, n) {
            return F.inArray(n, t.aoData[e].anCells)
        }

        function m(t, e, n, i) {
            var o = t.iDraw,
                r = t.aoColumns[n],
                a = t.aoData[e]._aData,
                s = r.sDefaultContent,
                l = r.fnGetData(a, i, {
                    settings: t,
                    row: e,
                    col: n
                });
            if (l === $) return t.iDrawError != o && null === s && (Bt(t, 0, "Requested unknown parameter " + ("function" == typeof r.mData ? "{function}" : "'" + r.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = o), s;
            if (l !== a && null !== l || null === s) {
                if ("function" == typeof l) return l.call(a)
            } else l = s;
            return null === l && "display" == i ? "" : l
        }

        function i(t, e, n, i) {
            var o = t.aoColumns[n],
                r = t.aoData[e]._aData;
            o.fnSetData(r, i, {
                settings: t,
                row: e,
                col: n
            })
        }

        function g(t) {
            return F.map(t.match(/(\\.|[^\.])+/g) || [""], function (t) {
                return t.replace(/\\./g, ".")
            })
        }

        function Z(o) {
            if (F.isPlainObject(o)) {
                var r = {};
                return F.each(o, function (t, e) {
                        e && (r[t] = Z(e))
                    }),
                    function (t, e, n, i) {
                        var o = r[e] || r._;
                        return o !== $ ? o(t, e, n, i) : t
                    }
            }
            if (null === o) return function (t) {
                return t
            };
            if ("function" == typeof o) return function (t, e, n, i) {
                return o(t, e, n, i)
            };
            if ("string" != typeof o || -1 === o.indexOf(".") && -1 === o.indexOf("[") && -1 === o.indexOf("(")) return function (t) {
                return t[o]
            };
            var f = function (t, e, n) {
                var i, o, r, a;
                if ("" !== n)
                    for (var s = g(n), l = 0, u = s.length; l < u; l++) {
                        if (i = s[l].match(ve), o = s[l].match(ye), i) {
                            if (s[l] = s[l].replace(ve, ""), "" !== s[l] && (t = t[s[l]]), r = [], s.splice(0, l + 1), a = s.join("."), F.isArray(t))
                                for (var c = 0, h = t.length; c < h; c++) r.push(f(t[c], e, a));
                            var d = i[0].substring(1, i[0].length - 1);
                            t = "" === d ? r : r.join(d);
                            break
                        }
                        if (o) s[l] = s[l].replace(ye, ""), t = t[s[l]]();
                        else {
                            if (null === t || t[s[l]] === $) return $;
                            t = t[s[l]]
                        }
                    }
                return t
            };
            return function (t, e) {
                return f(t, e, o)
            }
        }

        function _(i) {
            if (F.isPlainObject(i)) return _(i._);
            if (null === i) return function () {};
            if ("function" == typeof i) return function (t, e, n) {
                i(t, "set", e, n)
            };
            if ("string" != typeof i || -1 === i.indexOf(".") && -1 === i.indexOf("[") && -1 === i.indexOf("(")) return function (t, e) {
                t[i] = e
            };
            var p = function (t, e, n) {
                for (var i, o, r, a, s, l = g(n), u = l[l.length - 1], c = 0, h = l.length - 1; c < h; c++) {
                    if (o = l[c].match(ve), r = l[c].match(ye), o) {
                        if (l[c] = l[c].replace(ve, ""), t[l[c]] = [], (i = l.slice()).splice(0, c + 1), s = i.join("."), F.isArray(e))
                            for (var d = 0, f = e.length; d < f; d++) p(a = {}, e[d], s), t[l[c]].push(a);
                        else t[l[c]] = e;
                        return
                    }
                    r && (l[c] = l[c].replace(ye, ""), t = t[l[c]](e)), null !== t[l[c]] && t[l[c]] !== $ || (t[l[c]] = {}), t = t[l[c]]
                }
                u.match(ye) ? t = t[u.replace(ye, "")](e) : t[u.replace(ve, "")] = e
            };
            return function (t, e) {
                return p(t, e, i)
            }
        }

        function x(t) {
            return ce(t.aoData, "_aData")
        }

        function u(t) {
            t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {}
        }

        function f(t, e, n) {
            for (var i = -1, o = 0, r = t.length; o < r; o++) t[o] == e ? i = o : t[o] > e && t[o]--; - 1 != i && n === $ && t.splice(i, 1)
        }

        function o(n, i, t, e) {
            var o, r, a = n.aoData[i],
                s = function (t, e) {
                    for (; t.childNodes.length;) t.removeChild(t.firstChild);
                    t.innerHTML = m(n, i, e, "display")
                };
            if ("dom" !== t && (t && "auto" !== t || "dom" !== a.src)) {
                var l = a.anCells;
                if (l)
                    if (e !== $) s(l[e], e);
                    else
                        for (o = 0, r = l.length; o < r; o++) s(l[o], o)
            } else a._aData = h(n, a, e, e === $ ? $ : a._aData).data;
            a._aSortData = null, a._aFilterData = null;
            var u = n.aoColumns;
            if (e !== $) u[e].sType = null;
            else {
                for (o = 0, r = u.length; o < r; o++) u[o].sType = null;
                d(n, a)
            }
        }

        function h(t, e, n, o) {
            var i, r, a, s = [],
                l = e.firstChild,
                u = 0,
                c = t.aoColumns,
                h = t._rowReadObject;
            o = o !== $ ? o : h ? {} : [];
            var d = function (t, e) {
                    if ("string" == typeof t) {
                        var n = t.indexOf("@");
                        if (-1 !== n) {
                            var i = t.substring(n + 1);
                            _(t)(o, e.getAttribute(i))
                        }
                    }
                },
                f = function (t) {
                    n !== $ && n !== u || (r = c[u], a = F.trim(t.innerHTML), r && r._bAttrSrc ? (_(r.mData._)(o, a), d(r.mData.sort, t), d(r.mData.type, t), d(r.mData.filter, t)) : h ? (r._setter || (r._setter = _(r.mData)), r._setter(o, a)) : o[u] = a);
                    u++
                };
            if (l)
                for (; l;) "TD" != (i = l.nodeName.toUpperCase()) && "TH" != i || (f(l), s.push(l)), l = l.nextSibling;
            else
                for (var p = 0, m = (s = e.anCells).length; p < m; p++) f(s[p]);
            var g = e.firstChild ? e : e.nTr;
            if (g) {
                var v = g.getAttribute("id");
                v && _(t.rowId)(o, v)
            }
            return {
                data: o,
                cells: s
            }
        }

        function w(t, e, n, i) {
            var o, r, a, s, l, u = t.aoData[e],
                c = u._aData,
                h = [];
            if (null === u.nTr) {
                for (o = n || y.createElement("tr"), u.nTr = o, u.anCells = h, o._DT_RowIndex = e, d(t, u), s = 0, l = t.aoColumns.length; s < l; s++) a = t.aoColumns[s], (r = n ? i[s] : y.createElement(a.sCellType))._DT_CellIndex = {
                    row: e,
                    column: s
                }, h.push(r), n && !a.mRender && a.mData === s || (r.innerHTML = m(t, e, s, "display")), a.sClass && (r.className += " " + a.sClass), a.bVisible && !n ? o.appendChild(r) : !a.bVisible && n && r.parentNode.removeChild(r), a.fnCreatedCell && a.fnCreatedCell.call(t.oInstance, r, m(t, e, s), c, e, s);
                Ot(t, "aoRowCreatedCallback", null, [o, c, e])
            }
            u.nTr.setAttribute("role", "row")
        }

        function d(t, e) {
            var n = e.nTr,
                i = e._aData;
            if (n) {
                var o = t.rowIdFn(i);
                if (o && (n.id = o), i.DT_RowClass) {
                    var r = i.DT_RowClass.split(" ");
                    e.__rowc = e.__rowc ? me(e.__rowc.concat(r)) : r, F(n).removeClass(e.__rowc.join(" ")).addClass(i.DT_RowClass)
                }
                i.DT_RowAttr && F(n).attr(i.DT_RowAttr), i.DT_RowData && F(n).data(i.DT_RowData)
            }
        }

        function p(t) {
            var e, n, i, o, r, a = t.nTHead,
                s = t.nTFoot,
                l = 0 === F("th, td", a).length,
                u = t.oClasses,
                c = t.aoColumns;
            for (l && (o = F("<tr/>").appendTo(a)), e = 0, n = c.length; e < n; e++) r = c[e], i = F(r.nTh).addClass(r.sClass), l && i.appendTo(o), t.oFeatures.bSort && (i.addClass(r.sSortingClass), !1 !== r.bSortable && (i.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), Dt(t, r.nTh, e))), r.sTitle != i[0].innerHTML && i.html(r.sTitle), $t(t, "header")(t, i, r, u);
            if (l && U(t.aoHeader, a), F(a).find(">tr").attr("role", "row"), F(a).find(">tr>th, >tr>td").addClass(u.sHeaderTH), F(s).find(">tr>th, >tr>td").addClass(u.sFooterTH), null !== s) {
                var h = t.aoFooter[0];
                for (e = 0, n = h.length; e < n; e++)(r = c[e]).nTf = h[e].cell, r.sClass && F(r.nTf).addClass(r.sClass)
            }
        }

        function v(t, e, n) {
            var i, o, r, a, s, l, u, c, h, d = [],
                f = [],
                p = t.aoColumns.length;
            if (e) {
                for (n === $ && (n = !1), i = 0, o = e.length; i < o; i++) {
                    for (d[i] = e[i].slice(), d[i].nTr = e[i].nTr, r = p - 1; 0 <= r; r--) t.aoColumns[r].bVisible || n || d[i].splice(r, 1);
                    f.push([])
                }
                for (i = 0, o = d.length; i < o; i++) {
                    if (u = d[i].nTr)
                        for (; l = u.firstChild;) u.removeChild(l);
                    for (r = 0, a = d[i].length; r < a; r++)
                        if (h = c = 1, f[i][r] === $) {
                            for (u.appendChild(d[i][r].cell), f[i][r] = 1; d[i + c] !== $ && d[i][r].cell == d[i + c][r].cell;) f[i + c][r] = 1, c++;
                            for (; d[i][r + h] !== $ && d[i][r].cell == d[i][r + h].cell;) {
                                for (s = 0; s < c; s++) f[i + s][r + h] = 1;
                                h++
                            }
                            F(d[i][r].cell).attr("rowspan", c).attr("colspan", h)
                        }
                }
            }
        }

        function b(t) {
            var e = Ot(t, "aoPreDrawCallback", "preDraw", [t]);
            if (-1 === F.inArray(!1, e)) {
                var n = [],
                    i = 0,
                    o = t.asStripeClasses,
                    r = o.length,
                    a = (t.aoOpenRows.length, t.oLanguage),
                    s = t.iInitDisplayStart,
                    l = "ssp" == Ht(t),
                    u = t.aiDisplay;
                t.bDrawing = !0, s !== $ && -1 !== s && (t._iDisplayStart = l ? s : s >= t.fnRecordsDisplay() ? 0 : s, t.iInitDisplayStart = -1);
                var c = t._iDisplayStart,
                    h = t.fnDisplayEnd();
                if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, pt(t, !1);
                else if (l) {
                    if (!t.bDestroying && !k(t)) return
                } else t.iDraw++;
                if (0 !== u.length)
                    for (var d = l ? 0 : c, f = l ? t.aoData.length : h, p = d; p < f; p++) {
                        var m = u[p],
                            g = t.aoData[m];
                        null === g.nTr && w(t, m);
                        var v = g.nTr;
                        if (0 !== r) {
                            var y = o[i % r];
                            g._sRowStripe != y && (F(v).removeClass(g._sRowStripe).addClass(y), g._sRowStripe = y)
                        }
                        Ot(t, "aoRowCallback", null, [v, g._aData, i, p]), n.push(v), i++
                    } else {
                        var _ = a.sZeroRecords;
                        1 == t.iDraw && "ajax" == Ht(t) ? _ = a.sLoadingRecords : a.sEmptyTable && 0 === t.fnRecordsTotal() && (_ = a.sEmptyTable), n[0] = F("<tr/>", {
                            "class": r ? o[0] : ""
                        }).append(F("<td />", {
                            valign: "top",
                            colSpan: P(t),
                            "class": t.oClasses.sRowEmpty
                        }).html(_))[0]
                    }
                Ot(t, "aoHeaderCallback", "header", [F(t.nTHead).children("tr")[0], x(t), c, h, u]), Ot(t, "aoFooterCallback", "footer", [F(t.nTFoot).children("tr")[0], x(t), c, h, u]);
                var b = F(t.nTBody);
                b.children().detach(), b.append(F(n)), Ot(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
            } else pt(t, !1)
        }

        function S(t, e) {
            var n = t.oFeatures,
                i = n.bSort,
                o = n.bFilter;
            i && Ct(t), o ? Q(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, b(t), t._drawHold = !1
        }

        function T(t) {
            var e = t.oClasses,
                n = F(t.nTable),
                i = F("<div/>").insertBefore(n),
                o = t.oFeatures,
                r = F("<div/>", {
                    id: t.sTableId + "_wrapper",
                    "class": e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter)
                });
            t.nHolding = i[0], t.nTableWrapper = r[0], t.nTableReinsertBefore = t.nTable.nextSibling;
            for (var a, s, l, u, c, h, d = t.sDom.split(""), f = 0; f < d.length; f++) {
                if (a = null, "<" == (s = d[f])) {
                    if (l = F("<div/>")[0], "'" == (u = d[f + 1]) || '"' == u) {
                        for (c = "", h = 2; d[f + h] != u;) c += d[f + h], h++;
                        if ("H" == c ? c = e.sJUIHeader : "F" == c && (c = e.sJUIFooter), -1 != c.indexOf(".")) {
                            var p = c.split(".");
                            l.id = p[0].substr(1, p[0].length - 1), l.className = p[1]
                        } else "#" == c.charAt(0) ? l.id = c.substr(1, c.length - 1) : l.className = c;
                        f += h
                    }
                    r.append(l), r = F(l)
                } else if (">" == s) r = r.parent();
                else if ("l" == s && o.bPaginate && o.bLengthChange) a = ct(t);
                else if ("f" == s && o.bFilter) a = G(t);
                else if ("r" == s && o.bProcessing) a = ft(t);
                else if ("t" == s) a = mt(t);
                else if ("i" == s && o.bInfo) a = ot(t);
                else if ("p" == s && o.bPaginate) a = ht(t);
                else if (0 !== Ut.ext.feature.length)
                    for (var m = Ut.ext.feature, g = 0, v = m.length; g < v; g++)
                        if (s == m[g].cFeature) {
                            a = m[g].fnInit(t);
                            break
                        } if (a) {
                    var y = t.aanFeatures;
                    y[s] || (y[s] = []), y[s].push(a), r.append(a)
                }
            }
            i.replaceWith(r), t.nHolding = null
        }

        function U(t, e) {
            var n, i, o, r, a, s, l, u, c, h, d, f = F(e).children("tr"),
                p = function (t, e, n) {
                    for (var i = t[e]; i[n];) n++;
                    return n
                };
            for (t.splice(0, t.length), o = 0, s = f.length; o < s; o++) t.push([]);
            for (o = 0, s = f.length; o < s; o++)
                for (u = 0, i = (n = f[o]).firstChild; i;) {
                    if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase())
                        for (c = (c = 1 * i.getAttribute("colspan")) && 0 !== c && 1 !== c ? c : 1, h = (h = 1 * i.getAttribute("rowspan")) && 0 !== h && 1 !== h ? h : 1, l = p(t, o, u), d = 1 === c, a = 0; a < c; a++)
                            for (r = 0; r < h; r++) t[o + r][l + a] = {
                                cell: i,
                                unique: d
                            }, t[o + r].nTr = n;
                    i = i.nextSibling
                }
        }

        function V(t, e, n) {
            var i = [];
            n || (n = t.aoHeader, e && U(n = [], e));
            for (var o = 0, r = n.length; o < r; o++)
                for (var a = 0, s = n[o].length; a < s; a++) !n[o][a].unique || i[a] && t.bSortCellsTop || (i[a] = n[o][a].cell);
            return i
        }

        function C(i, t, e) {
            if (Ot(i, "aoServerParams", "serverParams", [t]), t && F.isArray(t)) {
                var o = {},
                    r = /(.*?)\[\]$/;
                F.each(t, function (t, e) {
                    var n = e.name.match(r);
                    if (n) {
                        var i = n[0];
                        o[i] || (o[i] = []), o[i].push(e.value)
                    } else o[e.name] = e.value
                }), t = o
            }
            var n, a = i.ajax,
                s = i.oInstance,
                l = function (t) {
                    Ot(i, null, "xhr", [i, t, i.jqXHR]), e(t)
                };
            if (F.isPlainObject(a) && a.data) {
                n = a.data;
                var u = F.isFunction(n) ? n(t, i) : n;
                t = F.isFunction(n) && u ? u : F.extend(!0, t, u), delete a.data
            }
            var c = {
                data: t,
                success: function (t) {
                    var e = t.error || t.sError;
                    e && Bt(i, 0, e), i.json = t, l(t)
                },
                dataType: "json",
                cache: !1,
                type: i.sServerMethod,
                error: function (t, e) {
                    var n = Ot(i, null, "xhr", [i, null, i.jqXHR]); - 1 === F.inArray(!0, n) && ("parsererror" == e ? Bt(i, 0, "Invalid JSON response", 1) : 4 === t.readyState && Bt(i, 0, "Ajax error", 7)), pt(i, !1)
                }
            };
            i.oAjaxData = t, Ot(i, null, "preXhr", [i, t]), i.fnServerData ? i.fnServerData.call(s, i.sAjaxSource, F.map(t, function (t, e) {
                return {
                    name: e,
                    value: t
                }
            }), l, i) : i.sAjaxSource || "string" == typeof a ? i.jqXHR = F.ajax(F.extend(c, {
                url: a || i.sAjaxSource
            })) : F.isFunction(a) ? i.jqXHR = a.call(s, t, l, i) : (i.jqXHR = F.ajax(F.extend(c, a)), a.data = n)
        }

        function k(e) {
            return !e.bAjaxDataGet || (e.iDraw++, pt(e, !0), C(e, r(e), function (t) {
                s(e, t)
            }), !1)
        }

        function r(t) {
            var e, n, i, o, r = t.aoColumns,
                a = r.length,
                s = t.oFeatures,
                l = t.oPreviousSearch,
                u = t.aoPreSearchCols,
                c = [],
                h = Tt(t),
                d = t._iDisplayStart,
                f = !1 !== s.bPaginate ? t._iDisplayLength : -1,
                p = function (t, e) {
                    c.push({
                        name: t,
                        value: e
                    })
                };
            p("sEcho", t.iDraw), p("iColumns", a), p("sColumns", ce(r, "sName").join(",")), p("iDisplayStart", d), p("iDisplayLength", f);
            var m = {
                draw: t.iDraw,
                columns: [],
                order: [],
                start: d,
                length: f,
                search: {
                    value: l.sSearch,
                    regex: l.bRegex
                }
            };
            for (e = 0; e < a; e++) i = r[e], o = u[e], n = "function" == typeof i.mData ? "function" : i.mData, m.columns.push({
                data: n,
                name: i.sName,
                searchable: i.bSearchable,
                orderable: i.bSortable,
                search: {
                    value: o.sSearch,
                    regex: o.bRegex
                }
            }), p("mDataProp_" + e, n), s.bFilter && (p("sSearch_" + e, o.sSearch), p("bRegex_" + e, o.bRegex), p("bSearchable_" + e, i.bSearchable)), s.bSort && p("bSortable_" + e, i.bSortable);
            s.bFilter && (p("sSearch", l.sSearch), p("bRegex", l.bRegex)), s.bSort && (F.each(h, function (t, e) {
                m.order.push({
                    column: e.col,
                    dir: e.dir
                }), p("iSortCol_" + t, e.col), p("sSortDir_" + t, e.dir)
            }), p("iSortingCols", h.length));
            var g = Ut.ext.legacy.ajax;
            return null === g ? t.sAjaxSource ? c : m : g ? c : m
        }

        function s(t, n) {
            var e = function (t, e) {
                    return n[t] !== $ ? n[t] : n[e]
                },
                i = L(t, n),
                o = e("sEcho", "draw"),
                r = e("iTotalRecords", "recordsTotal"),
                a = e("iTotalDisplayRecords", "recordsFiltered");
            if (o) {
                if (1 * o < t.iDraw) return;
                t.iDraw = 1 * o
            }
            u(t), t._iRecordsTotal = parseInt(r, 10), t._iRecordsDisplay = parseInt(a, 10);
            for (var s = 0, l = i.length; s < l; s++) O(t, i[s]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, b(t), t._bInitComplete || lt(t, n), t.bAjaxDataGet = !0, pt(t, !1)
        }

        function L(t, e) {
            var n = F.isPlainObject(t.ajax) && t.ajax.dataSrc !== $ ? t.ajax.dataSrc : t.sAjaxDataProp;
            return "data" === n ? e.aaData || e[n] : "" !== n ? Z(n)(e) : e
        }

        function G(i) {
            var t = i.oClasses,
                e = i.sTableId,
                n = i.oLanguage,
                o = i.oPreviousSearch,
                r = i.aanFeatures,
                a = '<input type="search" class="' + t.sFilterInput + '"/>',
                s = n.sSearch;
            s = s.match(/_INPUT_/) ? s.replace("_INPUT_", a) : s + a;
            var l = F("<div/>", {
                    id: r.f ? null : e + "_filter",
                    "class": t.sFilter
                }).append(F("<label/>").append(s)),
                u = function () {
                    r.f;
                    var t = this.value ? this.value : "";
                    t != o.sSearch && (Q(i, {
                        sSearch: t,
                        bRegex: o.bRegex,
                        bSmart: o.bSmart,
                        bCaseInsensitive: o.bCaseInsensitive
                    }), i._iDisplayStart = 0, b(i))
                },
                c = null !== i.searchDelay ? i.searchDelay : "ssp" === Ht(i) ? 400 : 0,
                h = F("input", l).val(o.sSearch).attr("placeholder", n.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", c ? _t(u, c) : u).bind("keypress.DT", function (t) {
                    if (13 == t.keyCode) return !1
                }).attr("aria-controls", e);
            return F(i.nTable).on("search.dt.DT", function (t, e) {
                if (i === e) try {
                    h[0] !== y.activeElement && h.val(o.sSearch)
                } catch (n) {}
            }), l[0]
        }

        function Q(t, e, n) {
            var i = t.oPreviousSearch,
                o = t.aoPreSearchCols,
                r = function (t) {
                    i.sSearch = t.sSearch, i.bRegex = t.bRegex, i.bSmart = t.bSmart, i.bCaseInsensitive = t.bCaseInsensitive
                },
                a = function (t) {
                    return t.bEscapeRegex !== $ ? !t.bEscapeRegex : t.bRegex
                };
            if (l(t), "ssp" != Ht(t)) {
                J(t, e.sSearch, n, a(e), e.bSmart, e.bCaseInsensitive), r(e);
                for (var s = 0; s < o.length; s++) X(t, o[s].sSearch, s, a(o[s]), o[s].bSmart, o[s].bCaseInsensitive);
                K(t)
            } else r(e);
            t.bFiltered = !0, Ot(t, null, "search", [t])
        }

        function K(t) {
            for (var e, n, i = Ut.ext.search, o = t.aiDisplay, r = 0, a = i.length; r < a; r++) {
                for (var s = [], l = 0, u = o.length; l < u; l++) n = o[l], e = t.aoData[n], i[r](t, e._aFilterData, n, e._aData, l) && s.push(n);
                o.length = 0, F.merge(o, s)
            }
        }

        function X(t, e, n, i, o, r) {
            if ("" !== e)
                for (var a, s = t.aiDisplay, l = Y(e, i, o, r), u = s.length - 1; 0 <= u; u--) a = t.aoData[s[u]]._aFilterData[n], l.test(a) || s.splice(u, 1)
        }

        function J(t, e, n, i, o, r) {
            var a, s, l, u = Y(e, i, o, r),
                c = t.oPreviousSearch.sSearch,
                h = t.aiDisplayMaster;
            if (0 !== Ut.ext.search.length && (n = !0), s = et(t), e.length <= 0) t.aiDisplay = h.slice();
            else
                for ((s || n || c.length > e.length || 0 !== e.indexOf(c) || t.bSorted) && (t.aiDisplay = h.slice()), l = (a = t.aiDisplay).length - 1; 0 <= l; l--) u.test(t.aoData[a[l]]._sFilterRow) || a.splice(l, 1)
        }

        function Y(t, e, n, i) {
            (t = e ? t : tt(t), n) && (t = "^(?=.*?" + F.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
                if ('"' === t.charAt(0)) {
                    var e = t.match(/^"(.*)"$/);
                    t = e ? e[1] : t
                }
                return t.replace('"', "")
            }).join(")(?=.*?") + ").*$");
            return new RegExp(t, i ? "i" : "")
        }

        function tt(t) {
            return t.replace(ne, "\\$1")
        }

        function et(t) {
            var e, n, i, o, r, a, s, l, u = t.aoColumns,
                c = Ut.ext.type.search,
                h = !1;
            for (n = 0, o = t.aoData.length; n < o; n++)
                if (!(l = t.aoData[n])._aFilterData) {
                    for (a = [], i = 0, r = u.length; i < r; i++)(e = u[i]).bSearchable ? (s = m(t, n, i, "filter"), c[e.sType] && (s = c[e.sType](s)), null === s && (s = ""), "string" != typeof s && s.toString && (s = s.toString())) : s = "", s.indexOf && -1 !== s.indexOf("&") && (_e.innerHTML = s, s = be ? _e.textContent : _e.innerText), s.replace && (s = s.replace(/[\r\n]/g, "")), a.push(s);
                    l._aFilterData = a, l._sFilterRow = a.join("  "), h = !0
                } return h
        }

        function nt(t) {
            return {
                search: t.sSearch,
                smart: t.bSmart,
                regex: t.bRegex,
                caseInsensitive: t.bCaseInsensitive
            }
        }

        function it(t) {
            return {
                sSearch: t.search,
                bSmart: t.smart,
                bRegex: t.regex,
                bCaseInsensitive: t.caseInsensitive
            }
        }

        function ot(t) {
            var e = t.sTableId,
                n = t.aanFeatures.i,
                i = F("<div/>", {
                    "class": t.oClasses.sInfo,
                    id: n ? null : e + "_info"
                });
            return n || (t.aoDrawCallback.push({
                fn: rt,
                sName: "information"
            }), i.attr("role", "status").attr("aria-live", "polite"), F(t.nTable).attr("aria-describedby", e + "_info")), i[0]
        }

        function rt(t) {
            var e = t.aanFeatures.i;
            if (0 !== e.length) {
                var n = t.oLanguage,
                    i = t._iDisplayStart + 1,
                    o = t.fnDisplayEnd(),
                    r = t.fnRecordsTotal(),
                    a = t.fnRecordsDisplay(),
                    s = a ? n.sInfo : n.sInfoEmpty;
                a !== r && (s += " " + n.sInfoFiltered), s = at(t, s += n.sInfoPostFix);
                var l = n.fnInfoCallback;
                null !== l && (s = l.call(t.oInstance, t, i, o, r, a, s)), F(e).html(s)
            }
        }

        function at(t, e) {
            var n = t.fnFormatNumber,
                i = t._iDisplayStart + 1,
                o = t._iDisplayLength,
                r = t.fnRecordsDisplay(),
                a = -1 === o;
            return e.replace(/_START_/g, n.call(t, i)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, r)).replace(/_PAGE_/g, n.call(t, a ? 1 : Math.ceil(i / o))).replace(/_PAGES_/g, n.call(t, a ? 1 : Math.ceil(r / o)))
        }

        function st(n) {
            var i, t, e, o = n.iInitDisplayStart,
                r = n.aoColumns,
                a = n.oFeatures,
                s = n.bDeferLoading;
            if (n.bInitialised) {
                for (T(n), p(n), v(n, n.aoHeader), v(n, n.aoFooter), pt(n, !0), a.bAutoWidth && yt(n), i = 0, t = r.length; i < t; i++)(e = r[i]).sWidth && (e.nTh.style.width = St(e.sWidth));
                Ot(n, null, "preInit", [n]), S(n);
                var l = Ht(n);
                ("ssp" != l || s) && ("ajax" == l ? C(n, [], function (t) {
                    var e = L(n, t);
                    for (i = 0; i < e.length; i++) O(n, e[i]);
                    n.iInitDisplayStart = o, S(n), pt(n, !1), lt(n, t)
                }, n) : (pt(n, !1), lt(n)))
            } else setTimeout(function () {
                st(n)
            }, 200)
        }

        function lt(t, e) {
            t._bInitComplete = !0, (e || t.oInit.aaData) && H(t), Ot(t, null, "plugin-init", [t, e]), Ot(t, "aoInitComplete", "init", [t, e])
        }

        function ut(t, e) {
            var n = parseInt(e, 10);
            t._iDisplayLength = n, Ft(t), Ot(t, null, "length", [t, n])
        }

        function ct(i) {
            for (var t = i.oClasses, e = i.sTableId, n = i.aLengthMenu, o = F.isArray(n[0]), r = o ? n[0] : n, a = o ? n[1] : n, s = F("<select/>", {
                    name: e + "_length",
                    "aria-controls": e,
                    "class": t.sLengthSelect
                }), l = 0, u = r.length; l < u; l++) s[0][l] = new Option(a[l], r[l]);
            var c = F("<div><label/></div>").addClass(t.sLength);
            return i.aanFeatures.l || (c[0].id = e + "_length"), c.children().append(i.oLanguage.sLengthMenu.replace("_MENU_", s[0].outerHTML)), F("select", c).val(i._iDisplayLength).bind("change.DT", function () {
                ut(i, F(this).val()), b(i)
            }), F(i.nTable).bind("length.dt.DT", function (t, e, n) {
                i === e && F("select", c).val(n)
            }), c[0]
        }

        function ht(t) {
            var e = t.sPaginationType,
                c = Ut.ext.pager[e],
                h = "function" == typeof c,
                d = function (t) {
                    b(t)
                },
                n = F("<div/>").addClass(t.oClasses.sPaging + e)[0],
                f = t.aanFeatures;
            return h || c.fnInit(t, n, d), f.p || (n.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
                fn: function (t) {
                    if (h) {
                        var e, n, i = t._iDisplayStart,
                            o = t._iDisplayLength,
                            r = t.fnRecordsDisplay(),
                            a = -1 === o,
                            s = a ? 0 : Math.ceil(i / o),
                            l = a ? 1 : Math.ceil(r / o),
                            u = c(s, l);
                        for (e = 0, n = f.p.length; e < n; e++) $t(t, "pageButton")(t, f.p[e], e, u, s, l)
                    } else c.fnUpdate(t, d)
                },
                sName: "pagination"
            })), n
        }

        function dt(t, e, n) {
            var i = t._iDisplayStart,
                o = t._iDisplayLength,
                r = t.fnRecordsDisplay();
            0 === r || -1 === o ? i = 0 : "number" == typeof e ? r < (i = e * o) && (i = 0) : "first" == e ? i = 0 : "previous" == e ? (i = 0 <= o ? i - o : 0) < 0 && (i = 0) : "next" == e ? i + o < r && (i += o) : "last" == e ? i = Math.floor((r - 1) / o) * o : Bt(t, 0, "Unknown paging action: " + e, 5);
            var a = t._iDisplayStart !== i;
            return t._iDisplayStart = i, a && (Ot(t, null, "page", [t]), n && b(t)), a
        }

        function ft(t) {
            return F("<div/>", {
                id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                "class": t.oClasses.sProcessing
            }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
        }

        function pt(t, e) {
            t.oFeatures.bProcessing && F(t.aanFeatures.r).css("display", e ? "block" : "none"), Ot(t, null, "processing", [t, e])
        }

        function mt(t) {
            var e = F(t.nTable);
            e.attr("role", "grid");
            var n = t.oScroll;
            if ("" === n.sX && "" === n.sY) return t.nTable;
            var i = n.sX,
                o = n.sY,
                r = t.oClasses,
                a = e.children("caption"),
                s = a.length ? a[0]._captionSide : null,
                l = F(e[0].cloneNode(!1)),
                u = F(e[0].cloneNode(!1)),
                c = e.children("tfoot"),
                h = "<div/>",
                d = function (t) {
                    return t ? St(t) : null
                };
            c.length || (c = null);
            var f = F(h, {
                "class": r.sScrollWrapper
            }).append(F(h, {
                "class": r.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: i ? d(i) : "100%"
            }).append(F(h, {
                "class": r.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: n.sXInner || "100%"
            }).append(l.removeAttr("id").css("margin-left", 0).append("top" === s ? a : null).append(e.children("thead"))))).append(F(h, {
                "class": r.sScrollBody
            }).css({
                position: "relative",
                overflow: "auto",
                width: d(i)
            }).append(e));
            c && f.append(F(h, {
                "class": r.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: i ? d(i) : "100%"
            }).append(F(h, {
                "class": r.sScrollFootInner
            }).append(u.removeAttr("id").css("margin-left", 0).append("bottom" === s ? a : null).append(e.children("tfoot")))));
            var p = f.children(),
                m = p[0],
                g = p[1],
                v = c ? p[2] : null;
            return i && F(g).on("scroll.DT", function () {
                var t = this.scrollLeft;
                m.scrollLeft = t, c && (v.scrollLeft = t)
            }), F(g).css(o && n.bCollapse ? "max-height" : "height", o), t.nScrollHead = m, t.nScrollBody = g, t.nScrollFoot = v, t.aoDrawCallback.push({
                fn: gt,
                sName: "scrolling"
            }), f[0]
        }

        function gt(n) {
            var t, e, i, o, r, a, s, l, u, c = n.oScroll,
                h = c.sX,
                d = c.sXInner,
                f = c.sY,
                p = c.iBarWidth,
                m = F(n.nScrollHead),
                g = m[0].style,
                v = m.children("div"),
                y = v[0].style,
                _ = v.children("table"),
                b = n.nScrollBody,
                x = F(b),
                w = b.style,
                S = F(n.nScrollFoot).children("div"),
                T = S.children("table"),
                C = F(n.nTHead),
                k = F(n.nTable),
                L = k[0],
                D = L.style,
                P = n.nTFoot ? F(n.nTFoot) : null,
                E = n.oBrowser,
                A = E.bScrollOversize,
                I = [],
                M = [],
                B = [],
                R = function (t) {
                    var e = t.style;
                    e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
                },
                j = b.scrollHeight > b.clientHeight;
            if (n.scrollBarVis !== j && n.scrollBarVis !== $) return n.scrollBarVis = j, void H(n);
            n.scrollBarVis = j, k.children("thead, tfoot").remove(), r = C.clone().prependTo(k), t = C.find("tr"), i = r.find("tr"), r.find("th, td").removeAttr("tabindex"), P && (a = P.clone().prependTo(k), e = P.find("tr"), o = a.find("tr")), h || (w.width = "100%", m[0].style.width = "100%"), F.each(V(n, r), function (t, e) {
                s = q(n, t), e.style.width = n.aoColumns[s].sWidth
            }), P && vt(function (t) {
                t.style.width = ""
            }, o), u = k.outerWidth(), "" === h ? (D.width = "100%", A && (k.find("tbody").height() > b.offsetHeight || "scroll" == x.css("overflow-y")) && (D.width = St(k.outerWidth() - p)), u = k.outerWidth()) : "" !== d && (D.width = St(d), u = k.outerWidth()), vt(R, i), vt(function (t) {
                B.push(t.innerHTML), I.push(St(F(t).css("width")))
            }, i), vt(function (t, e) {
                t.style.width = I[e]
            }, t), F(i).height(0), P && (vt(R, o), vt(function (t) {
                M.push(St(F(t).css("width")))
            }, o), vt(function (t, e) {
                t.style.width = M[e]
            }, e), F(o).height(0)), vt(function (t, e) {
                t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + B[e] + "</div>", t.style.width = I[e]
            }, i), P && vt(function (t, e) {
                t.innerHTML = "", t.style.width = M[e]
            }, o), k.outerWidth() < u ? (l = b.scrollHeight > b.offsetHeight || "scroll" == x.css("overflow-y") ? u + p : u, A && (b.scrollHeight > b.offsetHeight || "scroll" == x.css("overflow-y")) && (D.width = St(l - p)), "" !== h && "" === d || Bt(n, 1, "Possible column misalignment", 6)) : l = "100%", w.width = St(l), g.width = St(l), P && (n.nScrollFoot.style.width = St(l)), f || A && (w.height = St(L.offsetHeight + p));
            var N = k.outerWidth();
            _[0].style.width = St(N), y.width = St(N);
            var z = k.height() > b.clientHeight || "scroll" == x.css("overflow-y"),
                O = "padding" + (E.bScrollbarLeft ? "Left" : "Right");
            y[O] = z ? p + "px" : "0px", P && (T[0].style.width = St(N), S[0].style.width = St(N), S[0].style[O] = z ? p + "px" : "0px"), x.scroll(), !n.bSorted && !n.bFiltered || n._drawHold || (b.scrollTop = 0)
        }

        function vt(t, e, n) {
            for (var i, o, r = 0, a = 0, s = e.length; a < s;) {
                for (i = e[a].firstChild, o = n ? n[a].firstChild : null; i;) 1 === i.nodeType && (n ? t(i, o, r) : t(i, r), r++), i = i.nextSibling, o = n ? o.nextSibling : null;
                a++
            }
        }

        function yt(t) {
            var e, n, i, o = t.nTable,
                r = t.aoColumns,
                a = t.oScroll,
                s = a.sY,
                l = a.sX,
                u = a.sXInner,
                c = r.length,
                h = E(t, "bVisible"),
                d = F("th", t.nTHead),
                f = o.getAttribute("width"),
                p = o.parentNode,
                m = !1,
                g = t.oBrowser,
                v = g.bScrollOversize,
                y = o.style.width;
            for (y && -1 !== y.indexOf("%") && (f = y), e = 0; e < h.length; e++) null !== (n = r[h[e]]).sWidth && (n.sWidth = bt(n.sWidthOrig, p), m = !0);
            if (v || !m && !l && !s && c == P(t) && c == d.length)
                for (e = 0; e < c; e++) {
                    var _ = q(t, e);
                    null !== _ && (r[_].sWidth = St(d.eq(e).width()))
                } else {
                    var b = F(o).clone().css("visibility", "hidden").removeAttr("id");
                    b.find("tbody tr").remove();
                    var x = F("<tr/>").appendTo(b.find("tbody"));
                    for (b.find("thead, tfoot").remove(), b.append(F(t.nTHead).clone()).append(F(t.nTFoot).clone()), b.find("tfoot th, tfoot td").css("width", ""), d = V(t, b.find("thead")[0]), e = 0; e < h.length; e++) n = r[h[e]], d[e].style.width = null !== n.sWidthOrig && "" !== n.sWidthOrig ? St(n.sWidthOrig) : "", n.sWidthOrig && l && F(d[e]).append(F("<div/>").css({
                        width: n.sWidthOrig,
                        margin: 0,
                        padding: 0,
                        border: 0,
                        height: 1
                    }));
                    if (t.aoData.length)
                        for (e = 0; e < h.length; e++) n = r[i = h[e]], F(xt(t, i)).clone(!1).append(n.sContentPadding).appendTo(x);
                    var w = F("<div/>").css(l || s ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 1,
                        right: 0,
                        overflow: "hidden"
                    } : {}).append(b).appendTo(p);
                    l && u ? b.width(u) : l ? (b.css("width", "auto"), b.removeAttr("width"), b.width() < p.clientWidth && f && b.width(p.clientWidth)) : s ? b.width(p.clientWidth) : f && b.width(f);
                    var S = 0;
                    for (e = 0; e < h.length; e++) {
                        var T = F(d[e]),
                            C = T.outerWidth() - T.width(),
                            k = g.bBounding ? Math.ceil(d[e].getBoundingClientRect().width) : T.outerWidth();
                        S += k, r[h[e]].sWidth = St(k - C)
                    }
                    o.style.width = St(S), w.remove()
                }
            if (f && (o.style.width = St(f)), (f || l) && !t._reszEvt) {
                var L = function () {
                    F(D).bind("resize.DT-" + t.sInstance, _t(function () {
                        H(t)
                    }))
                };
                v ? setTimeout(L, 1e3) : L(), t._reszEvt = !0
            }
        }

        function _t(i, t) {
            var o, r, a = t !== $ ? t : 200;
            return function () {
                var t = this,
                    e = +new Date,
                    n = arguments;
                o && e < o + a ? (clearTimeout(r), r = setTimeout(function () {
                    o = $, i.apply(t, n)
                }, a)) : (o = e, i.apply(t, n))
            }
        }

        function bt(t, e) {
            if (!t) return 0;
            var n = F("<div/>").css("width", St(t)).appendTo(e || y.body),
                i = n[0].offsetWidth;
            return n.remove(), i
        }

        function xt(t, e) {
            var n = wt(t, e);
            if (n < 0) return null;
            var i = t.aoData[n];
            return i.nTr ? i.anCells[e] : F("<td/>").html(m(t, n, e, "display"))[0]
        }

        function wt(t, e) {
            for (var n, i = -1, o = -1, r = 0, a = t.aoData.length; r < a; r++)(n = (n = (n = m(t, r, e, "display") + "").replace(xe, "")).replace(/&nbsp;/g, " ")).length > i && (i = n.length, o = r);
            return o
        }

        function St(t) {
            return null === t ? "0px" : "number" == typeof t ? t < 0 ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
        }

        function Tt(t) {
            var e, n, i, o, r, a, s, l = [],
                u = t.aoColumns,
                c = t.aaSortingFixed,
                h = F.isPlainObject(c),
                d = [],
                f = function (t) {
                    t.length && !F.isArray(t[0]) ? d.push(t) : F.merge(d, t)
                };
            for (F.isArray(c) && f(c), h && c.pre && f(c.pre), f(t.aaSorting), h && c.post && f(c.post), e = 0; e < d.length; e++)
                for (n = 0, i = (o = u[s = d[e][0]].aDataSort).length; n < i; n++) a = u[r = o[n]].sType || "string", d[e]._idx === $ && (d[e]._idx = F.inArray(d[e][1], u[r].asSorting)), l.push({
                    src: s,
                    col: r,
                    dir: d[e][1],
                    index: d[e]._idx,
                    type: a,
                    formatter: Ut.ext.type.order[a + "-pre"]
                });
            return l
        }

        function Ct(t) {
            var e, n, i, o, c, h = [],
                d = Ut.ext.type.order,
                f = t.aoData,
                r = (t.aoColumns, 0),
                a = t.aiDisplayMaster;
            for (l(t), e = 0, n = (c = Tt(t)).length; e < n; e++)(o = c[e]).formatter && r++, Et(t, o.col);
            if ("ssp" != Ht(t) && 0 !== c.length) {
                for (e = 0, i = a.length; e < i; e++) h[a[e]] = e;
                r === c.length ? a.sort(function (t, e) {
                    var n, i, o, r, a, s = c.length,
                        l = f[t]._aSortData,
                        u = f[e]._aSortData;
                    for (o = 0; o < s; o++)
                        if (0 !== (r = (n = l[(a = c[o]).col]) < (i = u[a.col]) ? -1 : i < n ? 1 : 0)) return "asc" === a.dir ? r : -r;
                    return (n = h[t]) < (i = h[e]) ? -1 : i < n ? 1 : 0
                }) : a.sort(function (t, e) {
                    var n, i, o, r, a, s = c.length,
                        l = f[t]._aSortData,
                        u = f[e]._aSortData;
                    for (o = 0; o < s; o++)
                        if (n = l[(a = c[o]).col], i = u[a.col], 0 !== (r = (d[a.type + "-" + a.dir] || d["string-" + a.dir])(n, i))) return r;
                    return (n = h[t]) < (i = h[e]) ? -1 : i < n ? 1 : 0
                })
            }
            t.bSorted = !0
        }

        function kt(t) {
            for (var e, n = t.aoColumns, i = Tt(t), o = t.oLanguage.oAria, r = 0, a = n.length; r < a; r++) {
                var s = n[r],
                    l = s.asSorting,
                    u = s.sTitle.replace(/<.*?>/g, ""),
                    c = s.nTh;
                c.removeAttribute("aria-sort"), e = s.bSortable ? u + ("asc" === (0 < i.length && i[0].col == r ? (c.setAttribute("aria-sort", "asc" == i[0].dir ? "ascending" : "descending"), l[i[0].index + 1] || l[0]) : l[0]) ? o.sSortAscending : o.sSortDescending) : u, c.setAttribute("aria-label", e)
            }
        }

        function Lt(t, e, n, i) {
            var o, r = t.aoColumns[e],
                a = t.aaSorting,
                s = r.asSorting,
                l = function (t, e) {
                    var n = t._idx;
                    return n === $ && (n = F.inArray(t[1], s)), n + 1 < s.length ? n + 1 : e ? null : 0
                };
            if ("number" == typeof a[0] && (a = t.aaSorting = [a]), n && t.oFeatures.bSortMulti) {
                var u = F.inArray(e, ce(a, "0")); - 1 !== u ? (null === (o = l(a[u], !0)) && 1 === a.length && (o = 0), null === o ? a.splice(u, 1) : (a[u][1] = s[o], a[u]._idx = o)) : (a.push([e, s[0], 0]), a[a.length - 1]._idx = 0)
            } else a.length && a[0][0] == e ? (o = l(a[0]), a.length = 1, a[0][1] = s[o], a[0]._idx = o) : (a.length = 0, a.push([e, s[0]]), a[0]._idx = 0);
            S(t), "function" == typeof i && i(t)
        }

        function Dt(e, t, n, i) {
            var o = e.aoColumns[n];
            Nt(t, {}, function (t) {
                !1 !== o.bSortable && (e.oFeatures.bProcessing ? (pt(e, !0), setTimeout(function () {
                    Lt(e, n, t.shiftKey, i), "ssp" !== Ht(e) && pt(e, !1)
                }, 0)) : Lt(e, n, t.shiftKey, i))
            })
        }

        function Pt(t) {
            var e, n, i, o = t.aLastSort,
                r = t.oClasses.sSortColumn,
                a = Tt(t),
                s = t.oFeatures;
            if (s.bSort && s.bSortClasses) {
                for (e = 0, n = o.length; e < n; e++) i = o[e].src, F(ce(t.aoData, "anCells", i)).removeClass(r + (e < 2 ? e + 1 : 3));
                for (e = 0, n = a.length; e < n; e++) i = a[e].src, F(ce(t.aoData, "anCells", i)).addClass(r + (e < 2 ? e + 1 : 3))
            }
            t.aLastSort = a
        }

        function Et(t, e) {
            var n, i, o, r = t.aoColumns[e],
                a = Ut.ext.order[r.sSortDataType];
            a && (n = a.call(t.oInstance, t, e, c(t, e)));
            for (var s = Ut.ext.type.order[r.sType + "-pre"], l = 0, u = t.aoData.length; l < u; l++)(i = t.aoData[l])._aSortData || (i._aSortData = []), i._aSortData[e] && !a || (o = a ? n[l] : m(t, l, e, "sort"), i._aSortData[e] = s ? s(o) : o)
        }

        function At(n) {
            if (n.oFeatures.bStateSave && !n.bDestroying) {
                var t = {
                    time: +new Date,
                    start: n._iDisplayStart,
                    length: n._iDisplayLength,
                    order: F.extend(!0, [], n.aaSorting),
                    search: nt(n.oPreviousSearch),
                    columns: F.map(n.aoColumns, function (t, e) {
                        return {
                            visible: t.bVisible,
                            search: nt(n.aoPreSearchCols[e])
                        }
                    })
                };
                Ot(n, "aoStateSaveParams", "stateSaveParams", [n, t]), n.oSavedState = t, n.fnStateSaveCallback.call(n.oInstance, n, t)
            }
        }

        function It(n) {
            var t, e, i = n.aoColumns;
            if (n.oFeatures.bStateSave) {
                var o = n.fnStateLoadCallback.call(n.oInstance, n);
                if (o && o.time) {
                    var r = Ot(n, "aoStateLoadParams", "stateLoadParams", [n, o]);
                    if (-1 === F.inArray(!1, r)) {
                        var a = n.iStateDuration;
                        if (!(0 < a && o.time < +new Date - 1e3 * a) && i.length === o.columns.length) {
                            for (n.oLoadedState = F.extend(!0, {}, o), o.start !== $ && (n._iDisplayStart = o.start, n.iInitDisplayStart = o.start), o.length !== $ && (n._iDisplayLength = o.length), o.order !== $ && (n.aaSorting = [], F.each(o.order, function (t, e) {
                                    n.aaSorting.push(e[0] >= i.length ? [0, e[1]] : e)
                                })), o.search !== $ && F.extend(n.oPreviousSearch, it(o.search)), t = 0, e = o.columns.length; t < e; t++) {
                                var s = o.columns[t];
                                s.visible !== $ && (i[t].bVisible = s.visible), s.search !== $ && F.extend(n.aoPreSearchCols[t], it(s.search))
                            }
                            Ot(n, "aoStateLoaded", "stateLoaded", [n, o])
                        }
                    }
                }
            }
        }

        function Mt(t) {
            var e = Ut.settings,
                n = F.inArray(t, ce(e, "nTable"));
            return -1 !== n ? e[n] : null
        }

        function Bt(t, e, n, i) {
            if (n = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + n, i && (n += ". For more information about this error, please see http://datatables.net/tn/" + i), e) D.console && console.log && console.log(n);
            else {
                var o = Ut.ext,
                    r = o.sErrMode || o.errMode;
                if (t && Ot(t, null, "error", [t, i, n]), "alert" == r) alert(n);
                else {
                    if ("throw" == r) throw new Error(n);
                    "function" == typeof r && r(t, i, n)
                }
            }
        }

        function Rt(n, i, t, e) {
            F.isArray(t) ? F.each(t, function (t, e) {
                F.isArray(e) ? Rt(n, i, e[0], e[1]) : Rt(n, i, e)
            }) : (e === $ && (e = t), i[t] !== $ && (n[e] = i[t]))
        }

        function jt(t, e, n) {
            var i;
            for (var o in e) e.hasOwnProperty(o) && (i = e[o], F.isPlainObject(i) ? (F.isPlainObject(t[o]) || (t[o] = {}), F.extend(!0, t[o], i)) : n && "data" !== o && "aaData" !== o && F.isArray(i) ? t[o] = i.slice() : t[o] = i);
            return t
        }

        function Nt(e, t, n) {
            F(e).bind("click.DT", t, function (t) {
                e.blur(), n(t)
            }).bind("keypress.DT", t, function (t) {
                13 === t.which && (t.preventDefault(), n(t))
            }).bind("selectstart.DT", function () {
                return !1
            })
        }

        function zt(t, e, n, i) {
            n && t[e].push({
                fn: n,
                sName: i
            })
        }

        function Ot(e, t, n, i) {
            var o = [];
            if (t && (o = F.map(e[t].slice().reverse(), function (t) {
                    return t.fn.apply(e.oInstance, i)
                })), null !== n) {
                var r = F.Event(n + ".dt");
                F(e.nTable).trigger(r, i), o.push(r.result)
            }
            return o
        }

        function Ft(t) {
            var e = t._iDisplayStart,
                n = t.fnDisplayEnd(),
                i = t._iDisplayLength;
            n <= e && (e = n - i), e -= e % i, (-1 === i || e < 0) && (e = 0), t._iDisplayStart = e
        }

        function $t(t, e) {
            var n = t.renderer,
                i = Ut.ext.renderer[e];
            return F.isPlainObject(n) && n[e] ? i[n[e]] || i._ : "string" == typeof n && i[n] || i._
        }

        function Ht(t) {
            return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
        }

        function qt(t, e) {
            var n = [],
                i = Ve.numbers_length,
                o = Math.floor(i / 2);
            return e <= i ? n = de(0, e) : t <= o ? ((n = de(0, i - 2)).push("ellipsis"), n.push(e - 1)) : (e - 1 - o <= t ? (n = de(e - (i - 2), e)).splice(0, 0, "ellipsis") : ((n = de(t - o + 2, t + o - 1)).push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis")), n.splice(0, 0, 0)), n.DT_el = "span", n
        }

        function Wt(n) {
            F.each({
                num: function (t) {
                    return Ge(t, n)
                },
                "num-fmt": function (t) {
                    return Ge(t, n, ie)
                },
                "html-num": function (t) {
                    return Ge(t, n, Yt)
                },
                "html-num-fmt": function (t) {
                    return Ge(t, n, Yt, ie)
                }
            }, function (t, e) {
                Vt.type.order[t + n + "-pre"] = e, t.match(/^html\-/) && (Vt.type.search[t + n] = Vt.type.search.html)
            })
        }

        function Zt(e) {
            return function () {
                var t = [Mt(this[Ut.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return Ut.ext.internal[e].apply(this, t)
            }
        }
        var Ut, Vt, Gt, Qt, Kt, Xt = {},
            Jt = /[\r\n]/g,
            Yt = /<.*?>/g,
            te = /^[\w\+\-]/,
            ee = /[\w\+\-]$/,
            ne = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
            ie = /[',$\xa3\u20ac\xa5%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            oe = function (t) {
                return !t || !0 === t || "-" === t
            },
            re = function (t) {
                var e = parseInt(t, 10);
                return !isNaN(e) && isFinite(t) ? e : null
            },
            ae = function (t, e) {
                return Xt[e] || (Xt[e] = new RegExp(tt(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Xt[e], ".") : t
            },
            se = function (t, e, n) {
                var i = "string" == typeof t;
                return !!oe(t) || (e && i && (t = ae(t, e)), n && i && (t = t.replace(ie, "")), !isNaN(parseFloat(t)) && isFinite(t))
            },
            le = function (t) {
                return oe(t) || "string" == typeof t
            },
            ue = function (t, e, n) {
                return !!oe(t) || (le(t) && !!se(pe(t), e, n) || null)
            },
            ce = function (t, e, n) {
                var i = [],
                    o = 0,
                    r = t.length;
                if (n !== $)
                    for (; o < r; o++) t[o] && t[o][e] && i.push(t[o][e][n]);
                else
                    for (; o < r; o++) t[o] && i.push(t[o][e]);
                return i
            },
            he = function (t, e, n, i) {
                var o = [],
                    r = 0,
                    a = e.length;
                if (i !== $)
                    for (; r < a; r++) t[e[r]][n] && o.push(t[e[r]][n][i]);
                else
                    for (; r < a; r++) o.push(t[e[r]][n]);
                return o
            },
            de = function (t, e) {
                var n, i = [];
                e === $ ? (e = 0, n = t) : (n = e, e = t);
                for (var o = e; o < n; o++) i.push(o);
                return i
            },
            fe = function (t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) t[n] && e.push(t[n]);
                return e
            },
            pe = function (t) {
                return t.replace(Yt, "")
            },
            me = function (t) {
                var e, n, i, o = [],
                    r = t.length,
                    a = 0;
                t: for (n = 0; n < r; n++) {
                    for (e = t[n], i = 0; i < a; i++)
                        if (o[i] === e) continue t;
                    o.push(e), a++
                }
                return o
            },
            ge = function (t, e, n) {
                t[e] !== $ && (t[n] = t[e])
            },
            ve = /\[.*?\]$/,
            ye = /\(\)$/,
            _e = F("<div>")[0],
            be = _e.textContent !== $,
            xe = /<.*?>/g;
        Ut = function (L) {
            this.$ = function (t, e) {
                return this.api(!0).$(t, e)
            }, this._ = function (t, e) {
                return this.api(!0).rows(t, e).data()
            }, this.api = function (t) {
                return new Gt(t ? Mt(this[Vt.iApiIndex]) : this)
            }, this.fnAddData = function (t, e) {
                var n = this.api(!0),
                    i = F.isArray(t) && (F.isArray(t[0]) || F.isPlainObject(t[0])) ? n.rows.add(t) : n.row.add(t);
                return (e === $ || e) && n.draw(), i.flatten().toArray()
            }, this.fnAdjustColumnSizing = function (t) {
                var e = this.api(!0).columns.adjust(),
                    n = e.settings()[0],
                    i = n.oScroll;
                t === $ || t ? e.draw(!1) : "" === i.sX && "" === i.sY || gt(n)
            }, this.fnClearTable = function (t) {
                var e = this.api(!0).clear();
                (t === $ || t) && e.draw()
            }, this.fnClose = function (t) {
                this.api(!0).row(t).child.hide()
            }, this.fnDeleteRow = function (t, e, n) {
                var i = this.api(!0),
                    o = i.rows(t),
                    r = o.settings()[0],
                    a = r.aoData[o[0][0]];
                return o.remove(), e && e.call(this, r, a), (n === $ || n) && i.draw(), a
            }, this.fnDestroy = function (t) {
                this.api(!0).destroy(t)
            }, this.fnDraw = function (t) {
                this.api(!0).draw(t)
            }, this.fnFilter = function (t, e, n, i, o, r) {
                var a = this.api(!0);
                null === e || e === $ ? a.search(t, n, i, r) : a.column(e).search(t, n, i, r), a.draw()
            }, this.fnGetData = function (t, e) {
                var n = this.api(!0);
                if (t === $) return n.data().toArray();
                var i = t.nodeName ? t.nodeName.toLowerCase() : "";
                return e !== $ || "td" == i || "th" == i ? n.cell(t, e).data() : n.row(t).data() || null
            }, this.fnGetNodes = function (t) {
                var e = this.api(!0);
                return t !== $ ? e.row(t).node() : e.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function (t) {
                var e = this.api(!0),
                    n = t.nodeName.toUpperCase();
                if ("TR" == n) return e.row(t).index();
                if ("TD" != n && "TH" != n) return null;
                var i = e.cell(t).index();
                return [i.row, i.columnVisible, i.column]
            }, this.fnIsOpen = function (t) {
                return this.api(!0).row(t).child.isShown()
            }, this.fnOpen = function (t, e, n) {
                return this.api(!0).row(t).child(e, n).show().child()[0]
            }, this.fnPageChange = function (t, e) {
                var n = this.api(!0).page(t);
                (e === $ || e) && n.draw(!1)
            }, this.fnSetColumnVis = function (t, e, n) {
                var i = this.api(!0).column(t).visible(e);
                (n === $ || n) && i.columns.adjust().draw()
            }, this.fnSettings = function () {
                return Mt(this[Vt.iApiIndex])
            }, this.fnSort = function (t) {
                this.api(!0).order(t).draw()
            }, this.fnSortListener = function (t, e, n) {
                this.api(!0).order.listener(t, e, n)
            }, this.fnUpdate = function (t, e, n, i, o) {
                var r = this.api(!0);
                return n === $ || null === n ? r.row(e).data(t) : r.cell(e, n).data(t), (o === $ || o) && r.columns.adjust(), (i === $ || i) && r.draw(), 0
            }, this.fnVersionCheck = Vt.fnVersionCheck;
            var D = this,
                P = L === $,
                E = this.length;
            for (var t in P && (L = {}), this.oApi = this.internal = Vt.internal, Ut.ext.internal) t && (this[t] = Zt(t));
            return this.each(function () {
                var t, e = 1 < E ? jt({}, L, !0) : L,
                    n = 0,
                    i = this.getAttribute("id"),
                    o = !1,
                    r = Ut.defaults,
                    a = F(this);
                if ("table" == this.nodeName.toLowerCase()) {
                    M(r), B(r.column), A(r, r, !0), A(r.column, r.column, !0), A(r, F.extend(e, a.data()));
                    var s = Ut.settings;
                    for (n = 0, t = s.length; n < t; n++) {
                        var l = s[n];
                        if (l.nTable == this || l.nTHead.parentNode == this || l.nTFoot && l.nTFoot.parentNode == this) {
                            var u = e.bRetrieve !== $ ? e.bRetrieve : r.bRetrieve,
                                c = e.bDestroy !== $ ? e.bDestroy : r.bDestroy;
                            if (P || u) return l.oInstance;
                            if (c) {
                                l.oInstance.fnDestroy();
                                break
                            }
                            return void Bt(l, 0, "Cannot reinitialise DataTable", 3)
                        }
                        if (l.sTableId == this.id) {
                            s.splice(n, 1);
                            break
                        }
                    }
                    null !== i && "" !== i || (i = "DataTables_Table_" + Ut.ext._unique++, this.id = i);
                    var h = F.extend(!0, {}, Ut.models.oSettings, {
                        sDestroyWidth: a[0].style.width,
                        sInstance: i,
                        sTableId: i
                    });
                    h.nTable = this, h.oApi = D.internal, h.oInit = e, s.push(h), h.oInstance = 1 === D.length ? D : a.dataTable(), M(e), e.oLanguage && I(e.oLanguage), e.aLengthMenu && !e.iDisplayLength && (e.iDisplayLength = F.isArray(e.aLengthMenu[0]) ? e.aLengthMenu[0][0] : e.aLengthMenu[0]), e = jt(F.extend(!0, {}, r), e), Rt(h.oFeatures, e, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), Rt(h, e, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]), Rt(h.oScroll, e, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]), Rt(h.oLanguage, e, "fnInfoCallback"), zt(h, "aoDrawCallback", e.fnDrawCallback, "user"), zt(h, "aoServerParams", e.fnServerParams, "user"), zt(h, "aoStateSaveParams", e.fnStateSaveParams, "user"), zt(h, "aoStateLoadParams", e.fnStateLoadParams, "user"), zt(h, "aoStateLoaded", e.fnStateLoaded, "user"), zt(h, "aoRowCallback", e.fnRowCallback, "user"), zt(h, "aoRowCreatedCallback", e.fnCreatedRow, "user"), zt(h, "aoHeaderCallback", e.fnHeaderCallback, "user"), zt(h, "aoFooterCallback", e.fnFooterCallback, "user"), zt(h, "aoInitComplete", e.fnInitComplete, "user"), zt(h, "aoPreDrawCallback", e.fnPreDrawCallback, "user"), h.rowIdFn = Z(e.rowId), R(h);
                    var d = h.oClasses;
                    if (e.bJQueryUI ? (F.extend(d, Ut.ext.oJUIClasses, e.oClasses), e.sDom === r.sDom && "lfrtip" === r.sDom && (h.sDom = '<"H"lfr>t<"F"ip>'), h.renderer ? F.isPlainObject(h.renderer) && !h.renderer.header && (h.renderer.header = "jqueryui") : h.renderer = "jqueryui") : F.extend(d, Ut.ext.classes, e.oClasses), a.addClass(d.sTable), h.iInitDisplayStart === $ && (h.iInitDisplayStart = e.iDisplayStart, h._iDisplayStart = e.iDisplayStart), null !== e.iDeferLoading) {
                        h.bDeferLoading = !0;
                        var f = F.isArray(e.iDeferLoading);
                        h._iRecordsDisplay = f ? e.iDeferLoading[0] : e.iDeferLoading, h._iRecordsTotal = f ? e.iDeferLoading[1] : e.iDeferLoading
                    }
                    var p = h.oLanguage;
                    F.extend(!0, p, e.oLanguage), "" !== p.sUrl && (F.ajax({
                        dataType: "json",
                        url: p.sUrl,
                        success: function (t) {
                            I(t), A(r.oLanguage, t), F.extend(!0, p, t), st(h)
                        },
                        error: function () {
                            st(h)
                        }
                    }), o = !0), null === e.asStripeClasses && (h.asStripeClasses = [d.sStripeOdd, d.sStripeEven]);
                    var m = h.asStripeClasses,
                        g = a.children("tbody").find("tr").eq(0); - 1 !== F.inArray(!0, F.map(m, function (t) {
                        return g.hasClass(t)
                    })) && (F("tbody tr", this).removeClass(m.join(" ")), h.asDestroyStripes = m.slice());
                    var v, y = [],
                        _ = this.getElementsByTagName("thead");
                    if (0 !== _.length && (U(h.aoHeader, _[0]), y = V(h)), null === e.aoColumns)
                        for (v = [], n = 0, t = y.length; n < t; n++) v.push(null);
                    else v = e.aoColumns;
                    for (n = 0, t = v.length; n < t; n++) j(h, y ? y[n] : null);
                    if (z(h, e.aoColumnDefs, v, function (t, e) {
                            N(h, t, e)
                        }), g.length) {
                        var b = function (t, e) {
                            return null !== t.getAttribute("data-" + e) ? e : null
                        };
                        F(g[0]).children("th, td").each(function (t, e) {
                            var n = h.aoColumns[t];
                            if (n.mData === t) {
                                var i = b(e, "sort") || b(e, "order"),
                                    o = b(e, "filter") || b(e, "search");
                                null === i && null === o || (n.mData = {
                                    _: t + ".display",
                                    sort: null !== i ? t + ".@data-" + i : $,
                                    type: null !== i ? t + ".@data-" + i : $,
                                    filter: null !== o ? t + ".@data-" + o : $
                                }, N(h, t))
                            }
                        })
                    }
                    var x = h.oFeatures;
                    if (e.bStateSave && (x.bStateSave = !0, It(h, e), zt(h, "aoDrawCallback", At, "state_save")), e.aaSorting === $) {
                        var w = h.aaSorting;
                        for (n = 0, t = w.length; n < t; n++) w[n][1] = h.aoColumns[n].asSorting[0]
                    }
                    Pt(h), x.bSort && zt(h, "aoDrawCallback", function () {
                        if (h.bSorted) {
                            var t = Tt(h),
                                n = {};
                            F.each(t, function (t, e) {
                                n[e.src] = e.dir
                            }), Ot(h, null, "order", [h, t, n]), kt(h)
                        }
                    }), zt(h, "aoDrawCallback", function () {
                        (h.bSorted || "ssp" === Ht(h) || x.bDeferRender) && Pt(h)
                    }, "sc");
                    var S = a.children("caption").each(function () {
                            this._captionSide = a.css("caption-side")
                        }),
                        T = a.children("thead");
                    0 === T.length && (T = F("<thead/>").appendTo(this)), h.nTHead = T[0];
                    var C = a.children("tbody");
                    0 === C.length && (C = F("<tbody/>").appendTo(this)), h.nTBody = C[0];
                    var k = a.children("tfoot");
                    if (0 === k.length && 0 < S.length && ("" !== h.oScroll.sX || "" !== h.oScroll.sY) && (k = F("<tfoot/>").appendTo(this)), 0 === k.length || 0 === k.children().length ? a.addClass(d.sNoFooter) : 0 < k.length && (h.nTFoot = k[0], U(h.aoFooter, h.nTFoot)), e.aaData)
                        for (n = 0; n < e.aaData.length; n++) O(h, e.aaData[n]);
                    else(h.bDeferLoading || "dom" == Ht(h)) && W(h, F(h.nTBody).children("tr"));
                    h.aiDisplay = h.aiDisplayMaster.slice(), !(h.bInitialised = !0) === o && st(h)
                } else Bt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2)
            }), D = null, this
        };
        var we = [],
            Se = Array.prototype,
            Te = function (t) {
                var e, n, i = Ut.settings,
                    o = F.map(i, function (t) {
                        return t.nTable
                    });
                return t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? -1 !== (e = F.inArray(t, o)) ? [i[e]] : null : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? n = F(t) : t instanceof F && (n = t), n ? n.map(function () {
                    return -1 !== (e = F.inArray(this, o)) ? i[e] : null
                }).toArray() : void 0) : []
            };
        Gt = function (t, e) {
            if (!(this instanceof Gt)) return new Gt(t, e);
            var n = [],
                i = function (t) {
                    var e = Te(t);
                    e && (n = n.concat(e))
                };
            if (F.isArray(t))
                for (var o = 0, r = t.length; o < r; o++) i(t[o]);
            else i(t);
            this.context = me(n), e && F.merge(this, e), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Gt.extend(this, this, we)
        }, Ut.Api = Gt, F.extend(Gt.prototype, {
            any: function () {
                return 0 !== this.count()
            },
            concat: Se.concat,
            context: [],
            count: function () {
                return this.flatten().length
            },
            each: function (t) {
                for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
                return this
            },
            eq: function (t) {
                var e = this.context;
                return e.length > t ? new Gt(e[t], this[t]) : null
            },
            filter: function (t) {
                var e = [];
                if (Se.filter) e = Se.filter.call(this, t, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) t.call(this, this[n], n, this) && e.push(this[n]);
                return new Gt(this.context, e)
            },
            flatten: function () {
                var t = [];
                return new Gt(this.context, t.concat.apply(t, this.toArray()))
            },
            join: Se.join,
            indexOf: Se.indexOf || function (t, e) {
                for (var n = e || 0, i = this.length; n < i; n++)
                    if (this[n] === t) return n;
                return -1
            },
            iterator: function (t, e, n, i) {
                var o, r, a, s, l, u, c, h, d = [],
                    f = this.context,
                    p = this.selector;
                for ("string" == typeof t && (i = n, n = e, e = t, t = !1), r = 0, a = f.length; r < a; r++) {
                    var m = new Gt(f[r]);
                    if ("table" === e)(o = n.call(m, f[r], r)) !== $ && d.push(o);
                    else if ("columns" === e || "rows" === e)(o = n.call(m, f[r], this[r], r)) !== $ && d.push(o);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (c = this[r], "column-rows" === e && (u = Ee(f[r], p.opts)), s = 0, l = c.length; s < l; s++) h = c[s], (o = "cell" === e ? n.call(m, f[r], h.row, h.column, r, s) : n.call(m, f[r], h, r, s, u)) !== $ && d.push(o)
                }
                if (d.length || i) {
                    var g = new Gt(f, t ? d.concat.apply([], d) : d),
                        v = g.selector;
                    return v.rows = p.rows, v.cols = p.cols, v.opts = p.opts, g
                }
                return this
            },
            lastIndexOf: Se.lastIndexOf || function () {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function (t) {
                var e = [];
                if (Se.map) e = Se.map.call(this, t, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) e.push(t.call(this, this[n], n));
                return new Gt(this.context, e)
            },
            pluck: function (e) {
                return this.map(function (t) {
                    return t[e]
                })
            },
            pop: Se.pop,
            push: Se.push,
            reduce: Se.reduce || function (t, e) {
                return n(this, t, e, 0, this.length, 1)
            },
            reduceRight: Se.reduceRight || function (t, e) {
                return n(this, t, e, this.length - 1, -1, -1)
            },
            reverse: Se.reverse,
            selector: null,
            shift: Se.shift,
            sort: Se.sort,
            splice: Se.splice,
            toArray: function () {
                return Se.slice.call(this)
            },
            to$: function () {
                return F(this)
            },
            toJQuery: function () {
                return F(this)
            },
            unique: function () {
                return new Gt(this.context, me(this))
            },
            unshift: Se.unshift
        }), Gt.extend = function (t, e, n) {
            if (n.length && e && (e instanceof Gt || e.__dt_wrapper)) {
                var i, o, r, a = function (e, n, i) {
                    return function () {
                        var t = n.apply(e, arguments);
                        return Gt.extend(t, t, i.methodExt), t
                    }
                };
                for (i = 0, o = n.length; i < o; i++) e[(r = n[i]).name] = "function" == typeof r.val ? a(t, r.val, r) : F.isPlainObject(r.val) ? {} : r.val, e[r.name].__dt_wrapper = !0, Gt.extend(t, e[r.name], r.propExt)
            }
        }, Gt.register = Qt = function (t, e) {
            if (F.isArray(t))
                for (var n = 0, i = t.length; n < i; n++) Gt.register(t[n], e);
            else {
                var o, r, a, s, l = t.split("."),
                    u = we,
                    c = function (t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n].name === e) return t[n];
                        return null
                    };
                for (o = 0, r = l.length; o < r; o++) {
                    var h = c(u, a = (s = -1 !== l[o].indexOf("()")) ? l[o].replace("()", "") : l[o]);
                    h || (h = {
                        name: a,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, u.push(h)), o === r - 1 ? h.val = e : u = s ? h.methodExt : h.propExt
                }
            }
        }, Gt.registerPlural = Kt = function (t, e, n) {
            Gt.register(t, n), Gt.register(e, function () {
                var t = n.apply(this, arguments);
                return t === this ? this : t instanceof Gt ? t.length ? F.isArray(t[0]) ? new Gt(t.context, t[0]) : t[0] : $ : t
            })
        };
        var Ce = function (t, e) {
            if ("number" == typeof t) return [e[t]];
            var n = F.map(e, function (t) {
                return t.nTable
            });
            return F(n).filter(t).map(function () {
                var t = F.inArray(this, n);
                return e[t]
            }).toArray()
        };
        Qt("tables()", function (t) {
            return t ? new Gt(Ce(t, this.context)) : this
        }), Qt("table()", function (t) {
            var e = this.tables(t),
                n = e.context;
            return n.length ? new Gt(n[0]) : e
        }), Kt("tables().nodes()", "table().node()", function () {
            return this.iterator("table", function (t) {
                return t.nTable
            }, 1)
        }), Kt("tables().body()", "table().body()", function () {
            return this.iterator("table", function (t) {
                return t.nTBody
            }, 1)
        }), Kt("tables().header()", "table().header()", function () {
            return this.iterator("table", function (t) {
                return t.nTHead
            }, 1)
        }), Kt("tables().footer()", "table().footer()", function () {
            return this.iterator("table", function (t) {
                return t.nTFoot
            }, 1)
        }), Kt("tables().containers()", "table().container()", function () {
            return this.iterator("table", function (t) {
                return t.nTableWrapper
            }, 1)
        }), Qt("draw()", function (e) {
            return this.iterator("table", function (t) {
                "page" === e ? b(t) : ("string" == typeof e && (e = "full-hold" !== e), S(t, !1 === e))
            })
        }), Qt("page()", function (e) {
            return e === $ ? this.page.info().page : this.iterator("table", function (t) {
                dt(t, e)
            })
        }), Qt("page.info()", function () {
            if (0 === this.context.length) return $;
            var t = this.context[0],
                e = t._iDisplayStart,
                n = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
                i = t.fnRecordsDisplay(),
                o = -1 === n;
            return {
                page: o ? 0 : Math.floor(e / n),
                pages: o ? 1 : Math.ceil(i / n),
                start: e,
                end: t.fnDisplayEnd(),
                length: n,
                recordsTotal: t.fnRecordsTotal(),
                recordsDisplay: i,
                serverSide: "ssp" === Ht(t)
            }
        }), Qt("page.len()", function (e) {
            return e === $ ? 0 !== this.context.length ? this.context[0]._iDisplayLength : $ : this.iterator("table", function (t) {
                ut(t, e)
            })
        });
        var ke = function (o, r, t) {
            if (t) {
                var e = new Gt(o);
                e.one("draw", function () {
                    t(e.ajax.json())
                })
            }
            if ("ssp" == Ht(o)) S(o, r);
            else {
                pt(o, !0);
                var n = o.jqXHR;
                n && 4 !== n.readyState && n.abort(), C(o, [], function (t) {
                    u(o);
                    for (var e = L(o, t), n = 0, i = e.length; n < i; n++) O(o, e[n]);
                    S(o, r), pt(o, !1)
                })
            }
        };
        Qt("ajax.json()", function () {
            var t = this.context;
            if (0 < t.length) return t[0].json
        }), Qt("ajax.params()", function () {
            var t = this.context;
            if (0 < t.length) return t[0].oAjaxData
        }), Qt("ajax.reload()", function (e, n) {
            return this.iterator("table", function (t) {
                ke(t, !1 === n, e)
            })
        }), Qt("ajax.url()", function (e) {
            var t = this.context;
            return e === $ ? 0 === t.length ? $ : (t = t[0]).ajax ? F.isPlainObject(t.ajax) ? t.ajax.url : t.ajax : t.sAjaxSource : this.iterator("table", function (t) {
                F.isPlainObject(t.ajax) ? t.ajax.url = e : t.ajax = e
            })
        }), Qt("ajax.url().load()", function (e, n) {
            return this.iterator("table", function (t) {
                ke(t, !1 === n, e)
            })
        });
        var Le = function (t, e, n, i, o) {
                var r, a, s, l, u, c, h = [],
                    d = typeof e;
                for (e && "string" !== d && "function" !== d && e.length !== $ || (e = [e]), s = 0, l = e.length; s < l; s++)
                    for (u = 0, c = (a = e[s] && e[s].split ? e[s].split(",") : [e[s]]).length; u < c; u++)(r = n("string" == typeof a[u] ? F.trim(a[u]) : a[u])) && r.length && (h = h.concat(r));
                var f = Vt.selector[t];
                if (f.length)
                    for (s = 0, l = f.length; s < l; s++) h = f[s](i, o, h);
                return me(h)
            },
            De = function (t) {
                return t || (t = {}), t.filter && t.search === $ && (t.search = t.filter), F.extend({
                    search: "none",
                    order: "current",
                    page: "all"
                }, t)
            },
            Pe = function (t) {
                for (var e = 0, n = t.length; e < n; e++)
                    if (0 < t[e].length) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
                return t.length = 0, t
            },
            Ee = function (t, e) {
                var n, i, o, r = [],
                    a = t.aiDisplay,
                    s = t.aiDisplayMaster,
                    l = e.search,
                    u = e.order,
                    c = e.page;
                if ("ssp" == Ht(t)) return "removed" === l ? [] : de(0, s.length);
                if ("current" == c)
                    for (n = t._iDisplayStart, i = t.fnDisplayEnd(); n < i; n++) r.push(a[n]);
                else if ("current" == u || "applied" == u) r = "none" == l ? s.slice() : "applied" == l ? a.slice() : F.map(s, function (t) {
                    return -1 === F.inArray(t, a) ? t : null
                });
                else if ("index" == u || "original" == u)
                    for (n = 0, i = t.aoData.length; n < i; n++) "none" == l ? r.push(n) : (-1 === (o = F.inArray(n, a)) && "removed" == l || 0 <= o && "applied" == l) && r.push(n);
                return r
            },
            Ae = function (r, t, a) {
                return Le("row", t, function (n) {
                    var t = re(n);
                    if (null !== t && !a) return [t];
                    var e = Ee(r, a);
                    if (null !== t && -1 !== F.inArray(t, e)) return [t];
                    if (!n) return e;
                    if ("function" == typeof n) return F.map(e, function (t) {
                        var e = r.aoData[t];
                        return n(t, e._aData, e.nTr) ? t : null
                    });
                    var i = fe(he(r.aoData, e, "nTr"));
                    if (n.nodeName && -1 !== F.inArray(n, i)) return [n._DT_RowIndex];
                    if ("string" == typeof n && "#" === n.charAt(0)) {
                        var o = r.aIds[n.replace(/^#/, "")];
                        if (o !== $) return [o.idx]
                    }
                    return F(i).filter(n).map(function () {
                        return this._DT_RowIndex
                    }).toArray()
                }, r, a)
            };
        Qt("rows()", function (e, n) {
            e === $ ? e = "" : F.isPlainObject(e) && (n = e, e = ""), n = De(n);
            var t = this.iterator("table", function (t) {
                return Ae(t, e, n)
            }, 1);
            return t.selector.rows = e, t.selector.opts = n, t
        }), Qt("rows().nodes()", function () {
            return this.iterator("row", function (t, e) {
                return t.aoData[e].nTr || $
            }, 1)
        }), Qt("rows().data()", function () {
            return this.iterator(!0, "rows", function (t, e) {
                return he(t.aoData, e, "_aData")
            }, 1)
        }), Kt("rows().cache()", "row().cache()", function (i) {
            return this.iterator("row", function (t, e) {
                var n = t.aoData[e];
                return "search" === i ? n._aFilterData : n._aSortData
            }, 1)
        }), Kt("rows().invalidate()", "row().invalidate()", function (n) {
            return this.iterator("row", function (t, e) {
                o(t, e, n)
            })
        }), Kt("rows().indexes()", "row().index()", function () {
            return this.iterator("row", function (t, e) {
                return e
            }, 1)
        }), Kt("rows().ids()", "row().id()", function (t) {
            for (var e = [], n = this.context, i = 0, o = n.length; i < o; i++)
                for (var r = 0, a = this[i].length; r < a; r++) {
                    var s = n[i].rowIdFn(n[i].aoData[this[i][r]]._aData);
                    e.push((!0 === t ? "#" : "") + s)
                }
            return new Gt(n, e)
        }), Kt("rows().remove()", "row().remove()", function () {
            var d = this;
            return this.iterator("row", function (t, e, n) {
                var i, o, r, a, s, l, u = t.aoData,
                    c = u[e];
                for (u.splice(e, 1), i = 0, o = u.length; i < o; i++)
                    if (l = (s = u[i]).anCells, null !== s.nTr && (s.nTr._DT_RowIndex = i), null !== l)
                        for (r = 0, a = l.length; r < a; r++) l[r]._DT_CellIndex.row = i;
                f(t.aiDisplayMaster, e), f(t.aiDisplay, e), f(d[n], e, !1), Ft(t);
                var h = t.rowIdFn(c._aData);
                h !== $ && delete t.aIds[h]
            }), this.iterator("table", function (t) {
                for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e
            }), this
        }), Qt("rows.add()", function (r) {
            var t = this.iterator("table", function (t) {
                    var e, n, i, o = [];
                    for (n = 0, i = r.length; n < i; n++)(e = r[n]).nodeName && "TR" === e.nodeName.toUpperCase() ? o.push(W(t, e)[0]) : o.push(O(t, e));
                    return o
                }, 1),
                e = this.rows(-1);
            return e.pop(), F.merge(e, t), e
        }), Qt("row()", function (t, e) {
            return Pe(this.rows(t, e))
        }), Qt("row().data()", function (t) {
            var e = this.context;
            return t === $ ? e.length && this.length ? e[0].aoData[this[0]]._aData : $ : (e[0].aoData[this[0]]._aData = t, o(e[0], this[0], "data"), this)
        }), Qt("row().node()", function () {
            var t = this.context;
            return t.length && this.length && t[0].aoData[this[0]].nTr || null
        }), Qt("row.add()", function (e) {
            e instanceof F && e.length && (e = e[0]);
            var t = this.iterator("table", function (t) {
                return e.nodeName && "TR" === e.nodeName.toUpperCase() ? W(t, e)[0] : O(t, e)
            });
            return this.row(t[0])
        });
        var Ie = function (r, t, e, n) {
                var a = [],
                    s = function (t, e) {
                        if (F.isArray(t) || t instanceof F)
                            for (var n = 0, i = t.length; n < i; n++) s(t[n], e);
                        else if (t.nodeName && "tr" === t.nodeName.toLowerCase()) a.push(t);
                        else {
                            var o = F("<tr><td/></tr>").addClass(e);
                            F("td", o).addClass(e).html(t)[0].colSpan = P(r), a.push(o[0])
                        }
                    };
                s(e, n), t._details && t._details.remove(), t._details = F(a), t._detailsShow && t._details.insertAfter(t.nTr)
            },
            Me = function (t, e) {
                var n = t.context;
                if (n.length) {
                    var i = n[0].aoData[e !== $ ? e : t[0]];
                    i && i._details && (i._details.remove(), i._detailsShow = $, i._details = $)
                }
            },
            Be = function (t, e) {
                var n = t.context;
                if (n.length && t.length) {
                    var i = n[0].aoData[t[0]];
                    i._details && ((i._detailsShow = e) ? i._details.insertAfter(i.nTr) : i._details.detach(), Re(n[0]))
                }
            },
            Re = function (a) {
                var o = new Gt(a),
                    t = ".dt.DT_details",
                    e = "draw" + t,
                    n = "column-visibility" + t,
                    i = "destroy" + t,
                    s = a.aoData;
                o.off(e + " " + n + " " + i), 0 < ce(s, "_details").length && (o.on(e, function (t, e) {
                    a === e && o.rows({
                        page: "current"
                    }).eq(0).each(function (t) {
                        var e = s[t];
                        e._detailsShow && e._details.insertAfter(e.nTr)
                    })
                }), o.on(n, function (t, e) {
                    if (a === e)
                        for (var n, i = P(e), o = 0, r = s.length; o < r; o++)(n = s[o])._details && n._details.children("td[colspan]").attr("colspan", i)
                }), o.on(i, function (t, e) {
                    if (a === e)
                        for (var n = 0, i = s.length; n < i; n++) s[n]._details && Me(o, n)
                }))
            },
            je = "" + "row().child",
            Ne = je + "()";
        Qt(Ne, function (t, e) {
            var n = this.context;
            return t === $ ? n.length && this.length ? n[0].aoData[this[0]]._details : $ : (!0 === t ? this.child.show() : !1 === t ? Me(this) : n.length && this.length && Ie(n[0], n[0].aoData[this[0]], t, e), this)
        }), Qt([je + ".show()", Ne + ".show()"], function () {
            return Be(this, !0), this
        }), Qt([je + ".hide()", Ne + ".hide()"], function () {
            return Be(this, !1), this
        }), Qt([je + ".remove()", Ne + ".remove()"], function () {
            return Me(this), this
        }), Qt(je + ".isShown()", function () {
            var t = this.context;
            return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1
        });
        var ze = /^(.+):(name|visIdx|visible)$/,
            Oe = function (t, e, n, i, o) {
                for (var r = [], a = 0, s = o.length; a < s; a++) r.push(m(t, o[a], e));
                return r
            },
            Fe = function (a, t, s) {
                var l = a.aoColumns,
                    u = ce(l, "sName"),
                    c = ce(l, "nTh");
                return Le("column", t, function (n) {
                    var t = re(n);
                    if ("" === n) return de(l.length);
                    if (null !== t) return [0 <= t ? t : l.length + t];
                    if ("function" == typeof n) {
                        var i = Ee(a, s);
                        return F.map(l, function (t, e) {
                            return n(e, Oe(a, e, 0, 0, i), c[e]) ? e : null
                        })
                    }
                    var o = "string" == typeof n ? n.match(ze) : "";
                    if (!o) return F(c).filter(n).map(function () {
                        return F.inArray(this, c)
                    }).toArray();
                    switch (o[2]) {
                        case "visIdx":
                        case "visible":
                            var e = parseInt(o[1], 10);
                            if (e < 0) {
                                var r = F.map(l, function (t, e) {
                                    return t.bVisible ? e : null
                                });
                                return [r[r.length + e]]
                            }
                            return [q(a, e)];
                        case "name":
                            return F.map(u, function (t, e) {
                                return t === o[1] ? e : null
                            })
                    }
                }, a, s)
            },
            $e = function (t, e, n, i) {
                var o, r, a, s, l = t.aoColumns,
                    u = l[e],
                    c = t.aoData;
                if (n === $) return u.bVisible;
                if (u.bVisible !== n) {
                    if (n) {
                        var h = F.inArray(!0, ce(l, "bVisible"), e + 1);
                        for (r = 0, a = c.length; r < a; r++) s = c[r].nTr, o = c[r].anCells, s && s.insertBefore(o[e], o[h] || null)
                    } else F(ce(t.aoData, "anCells", e)).detach();
                    u.bVisible = n, v(t, t.aoHeader), v(t, t.aoFooter), (i === $ || i) && (H(t), (t.oScroll.sX || t.oScroll.sY) && gt(t)), Ot(t, null, "column-visibility", [t, e, n, i]), At(t)
                }
            };
        Qt("columns()", function (e, n) {
            e === $ ? e = "" : F.isPlainObject(e) && (n = e, e = ""), n = De(n);
            var t = this.iterator("table", function (t) {
                return Fe(t, e, n)
            }, 1);
            return t.selector.cols = e, t.selector.opts = n, t
        }), Kt("columns().header()", "column().header()", function () {
            return this.iterator("column", function (t, e) {
                return t.aoColumns[e].nTh
            }, 1)
        }), Kt("columns().footer()", "column().footer()", function () {
            return this.iterator("column", function (t, e) {
                return t.aoColumns[e].nTf
            }, 1)
        }), Kt("columns().data()", "column().data()", function () {
            return this.iterator("column-rows", Oe, 1)
        }), Kt("columns().dataSrc()", "column().dataSrc()", function () {
            return this.iterator("column", function (t, e) {
                return t.aoColumns[e].mData
            }, 1)
        }), Kt("columns().cache()", "column().cache()", function (r) {
            return this.iterator("column-rows", function (t, e, n, i, o) {
                return he(t.aoData, o, "search" === r ? "_aFilterData" : "_aSortData", e)
            }, 1)
        }), Kt("columns().nodes()", "column().nodes()", function () {
            return this.iterator("column-rows", function (t, e, n, i, o) {
                return he(t.aoData, o, "anCells", e)
            }, 1)
        }), Kt("columns().visible()", "column().visible()", function (n, i) {
            return this.iterator("column", function (t, e) {
                if (n === $) return t.aoColumns[e].bVisible;
                $e(t, e, n, i)
            })
        }), Kt("columns().indexes()", "column().index()", function (n) {
            return this.iterator("column", function (t, e) {
                return "visible" === n ? c(t, e) : e
            }, 1)
        }), Qt("columns.adjust()", function () {
            return this.iterator("table", function (t) {
                H(t)
            }, 1)
        }), Qt("column.index()", function (t, e) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === t || "toData" === t) return q(n, e);
                if ("fromData" === t || "toVisible" === t) return c(n, e)
            }
        }), Qt("column()", function (t, e) {
            return Pe(this.columns(t, e))
        });
        var He, qe, We, Ze, Ue = function (n, t, e) {
            var i, o, r, a, s, l, u, c = n.aoData,
                h = Ee(n, e),
                d = fe(he(c, h, "anCells")),
                f = F([].concat.apply([], d)),
                p = n.aoColumns.length;
            return Le("cell", t, function (t) {
                var e = "function" == typeof t;
                if (null === t || t === $ || e) {
                    for (o = [], r = 0, a = h.length; r < a; r++)
                        for (i = h[r], s = 0; s < p; s++) l = {
                            row: i,
                            column: s
                        }, e ? (u = c[i], t(l, m(n, i, s), u.anCells ? u.anCells[s] : null) && o.push(l)) : o.push(l);
                    return o
                }
                return F.isPlainObject(t) ? [t] : f.filter(t).map(function (t, e) {
                    return {
                        row: e._DT_CellIndex.row,
                        column: e._DT_CellIndex.column
                    }
                }).toArray()
            }, n, e)
        };
        Qt("cells()", function (e, t, n) {
            if (F.isPlainObject(e) && (e.row === $ ? (n = e, e = null) : (n = t, t = null)), F.isPlainObject(t) && (n = t, t = null), null === t || t === $) return this.iterator("table", function (t) {
                return Ue(t, e, De(n))
            });
            var i, o, r, a, s, l = this.columns(t, n),
                u = this.rows(e, n),
                c = this.iterator("table", function (t, e) {
                    for (i = [], o = 0, r = u[e].length; o < r; o++)
                        for (a = 0, s = l[e].length; a < s; a++) i.push({
                            row: u[e][o],
                            column: l[e][a]
                        });
                    return i
                }, 1);
            return F.extend(c.selector, {
                cols: t,
                rows: e,
                opts: n
            }), c
        }), Kt("cells().nodes()", "cell().node()", function () {
            return this.iterator("cell", function (t, e, n) {
                var i = t.aoData[e].anCells;
                return i ? i[n] : $
            }, 1)
        }), Qt("cells().data()", function () {
            return this.iterator("cell", function (t, e, n) {
                return m(t, e, n)
            }, 1)
        }), Kt("cells().cache()", "cell().cache()", function (i) {
            return i = "search" === i ? "_aFilterData" : "_aSortData", this.iterator("cell", function (t, e, n) {
                return t.aoData[e][i][n]
            }, 1)
        }), Kt("cells().render()", "cell().render()", function (i) {
            return this.iterator("cell", function (t, e, n) {
                return m(t, e, n, i)
            }, 1)
        }), Kt("cells().indexes()", "cell().index()", function () {
            return this.iterator("cell", function (t, e, n) {
                return {
                    row: e,
                    column: n,
                    columnVisible: c(t, n)
                }
            }, 1)
        }), Kt("cells().invalidate()", "cell().invalidate()", function (i) {
            return this.iterator("cell", function (t, e, n) {
                o(t, e, i, n)
            })
        }), Qt("cell()", function (t, e, n) {
            return Pe(this.cells(t, e, n))
        }), Qt("cell().data()", function (t) {
            var e = this.context,
                n = this[0];
            return t === $ ? e.length && n.length ? m(e[0], n[0].row, n[0].column) : $ : (i(e[0], n[0].row, n[0].column, t), o(e[0], n[0].row, "data", n[0].column), this)
        }), Qt("order()", function (e, t) {
            var n = this.context;
            return e === $ ? 0 !== n.length ? n[0].aaSorting : $ : ("number" == typeof e ? e = [
                [e, t]
            ] : F.isArray(e[0]) || (e = Array.prototype.slice.call(arguments)), this.iterator("table", function (t) {
                t.aaSorting = e.slice()
            }))
        }), Qt("order.listener()", function (e, n, i) {
            return this.iterator("table", function (t) {
                Dt(t, e, n, i)
            })
        }), Qt("order.fixed()", function (e) {
            if (e) return this.iterator("table", function (t) {
                t.aaSortingFixed = F.extend(!0, {}, e)
            });
            var t = this.context,
                n = t.length ? t[0].aaSortingFixed : $;
            return F.isArray(n) ? {
                pre: n
            } : n
        }), Qt(["columns().order()", "column().order()"], function (i) {
            var o = this;
            return this.iterator("table", function (t, e) {
                var n = [];
                F.each(o[e], function (t, e) {
                    n.push([e, i])
                }), t.aaSorting = n
            })
        }), Qt("search()", function (e, n, i, o) {
            var t = this.context;
            return e === $ ? 0 !== t.length ? t[0].oPreviousSearch.sSearch : $ : this.iterator("table", function (t) {
                t.oFeatures.bFilter && Q(t, F.extend({}, t.oPreviousSearch, {
                    sSearch: e + "",
                    bRegex: null !== n && n,
                    bSmart: null === i || i,
                    bCaseInsensitive: null === o || o
                }), 1)
            })
        }), Kt("columns().search()", "column().search()", function (i, o, r, a) {
            return this.iterator("column", function (t, e) {
                var n = t.aoPreSearchCols;
                if (i === $) return n[e].sSearch;
                t.oFeatures.bFilter && (F.extend(n[e], {
                    sSearch: i + "",
                    bRegex: null !== o && o,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === a || a
                }), Q(t, t.oPreviousSearch, 1))
            })
        }), Qt("state()", function () {
            return this.context.length ? this.context[0].oSavedState : null
        }), Qt("state.clear()", function () {
            return this.iterator("table", function (t) {
                t.fnStateSaveCallback.call(t.oInstance, t, {})
            })
        }), Qt("state.loaded()", function () {
            return this.context.length ? this.context[0].oLoadedState : null
        }), Qt("state.save()", function () {
            return this.iterator("table", function (t) {
                At(t)
            })
        }), Ut.versionCheck = Ut.fnVersionCheck = function (t) {
            for (var e, n, i = Ut.version.split("."), o = t.split("."), r = 0, a = o.length; r < a; r++)
                if ((e = parseInt(i[r], 10) || 0) !== (n = parseInt(o[r], 10) || 0)) return n < e;
            return !0
        }, Ut.isDataTable = Ut.fnIsDataTable = function (t) {
            var o = F(t).get(0),
                r = !1;
            return F.each(Ut.settings, function (t, e) {
                var n = e.nScrollHead ? F("table", e.nScrollHead)[0] : null,
                    i = e.nScrollFoot ? F("table", e.nScrollFoot)[0] : null;
                e.nTable !== o && n !== o && i !== o || (r = !0)
            }), r
        }, Ut.tables = Ut.fnTables = function (e) {
            var t = !1;
            F.isPlainObject(e) && (t = e.api, e = e.visible);
            var n = F.map(Ut.settings, function (t) {
                if (!e || e && F(t.nTable).is(":visible")) return t.nTable
            });
            return t ? new Gt(n) : n
        }, Ut.util = {
            throttle: _t,
            escapeRegex: tt
        }, Ut.camelToHungarian = A, Qt("$()", function (t, e) {
            var n = this.rows(e).nodes(),
                i = F(n);
            return F([].concat(i.filter(t).toArray(), i.find(t).toArray()))
        }), F.each(["on", "one", "off"], function (t, n) {
            Qt(n + "()", function () {
                var t = Array.prototype.slice.call(arguments);
                t[0].match(/\.dt\b/) || (t[0] += ".dt");
                var e = F(this.tables().nodes());
                return e[n].apply(e, t), this
            })
        }), Qt("clear()", function () {
            return this.iterator("table", function (t) {
                u(t)
            })
        }), Qt("settings()", function () {
            return new Gt(this.context, this.context)
        }), Qt("init()", function () {
            var t = this.context;
            return t.length ? t[0].oInit : null
        }), Qt("data()", function () {
            return this.iterator("table", function (t) {
                return ce(t.aoData, "_aData")
            }).flatten()
        }), Qt("destroy()", function (p) {
            return p = p || !1, this.iterator("table", function (e) {
                var n, t = e.nTableWrapper.parentNode,
                    i = e.oClasses,
                    o = e.nTable,
                    r = e.nTBody,
                    a = e.nTHead,
                    s = e.nTFoot,
                    l = F(o),
                    u = F(r),
                    c = F(e.nTableWrapper),
                    h = F.map(e.aoData, function (t) {
                        return t.nTr
                    });
                e.bDestroying = !0, Ot(e, "aoDestroyCallback", "destroy", [e]), p || new Gt(e).columns().visible(!0), c.unbind(".DT").find(":not(tbody *)").unbind(".DT"), F(D).unbind(".DT-" + e.sInstance), o != a.parentNode && (l.children("thead").detach(), l.append(a)), s && o != s.parentNode && (l.children("tfoot").detach(), l.append(s)), e.aaSorting = [], e.aaSortingFixed = [], Pt(e), F(h).removeClass(e.asStripeClasses.join(" ")), F("th, td", a).removeClass(i.sSortable + " " + i.sSortableAsc + " " + i.sSortableDesc + " " + i.sSortableNone), e.bJUI && (F("th span." + i.sSortIcon + ", td span." + i.sSortIcon, a).detach(), F("th, td", a).each(function () {
                    var t = F("div." + i.sSortJUIWrapper, this);
                    F(this).append(t.contents()), t.detach()
                })), u.children().detach(), u.append(h);
                var d = p ? "remove" : "detach";
                l[d](), c[d](), !p && t && (t.insertBefore(o, e.nTableReinsertBefore), l.css("width", e.sDestroyWidth).removeClass(i.sTable), (n = e.asDestroyStripes.length) && u.children().each(function (t) {
                    F(this).addClass(e.asDestroyStripes[t % n])
                }));
                var f = F.inArray(e, Ut.settings); - 1 !== f && Ut.settings.splice(f, 1)
            })
        }), F.each(["column", "row", "cell"], function (t, l) {
            Qt(l + "s().every()", function (r) {
                var a = this.selector.opts,
                    s = this;
                return this.iterator(l, function (t, e, n, i, o) {
                    r.call(s[l](e, "cell" === l ? n : a, "cell" === l ? a : $), e, n, i, o)
                })
            })
        }), Qt("i18n()", function (t, e, n) {
            var i = this.context[0],
                o = Z(t)(
                    i.oLanguage);
            return o === $ && (o = e), n !== $ && F.isPlainObject(o) && (o = o[n] !== $ ? o[n] : o._), o.replace("%d", n)
        }), Ut.version = "1.10.10", Ut.settings = [], Ut.models = {}, Ut.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, Ut.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1
        }, Ut.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, Ut.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function (t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function (t) {
                try {
                    return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
                } catch (e) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function (t, e) {
                try {
                    (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
                } catch (n) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: F.extend({}, Ut.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        }, a(Ut.defaults), Ut.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, a(Ut.defaults.column), Ut.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1,
                bBounding: !1,
                barWidth: 0
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: $,
            oAjaxData: $,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function () {
                return "ssp" == Ht(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function () {
                return "ssp" == Ht(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function () {
                var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    n = e + t,
                    i = this.aiDisplay.length,
                    o = this.oFeatures,
                    r = o.bPaginate;
                return o.bServerSide ? !1 === r || -1 === t ? e + i : Math.min(e + t, this._iRecordsDisplay) : !r || i < n || -1 === t ? i : n
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        }, Ut.ext = Vt = {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: {
                cell: [],
                column: [],
                row: []
            },
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: Ut.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Ut.version
        }, F.extend(Vt, {
            afnFiltering: Vt.search,
            aTypes: Vt.type.detect,
            ofnSearch: Vt.type.search,
            oSort: Vt.type.order,
            afnSortData: Vt.order,
            aoFeatures: Vt.feature,
            oApi: Vt.internal,
            oStdClasses: Vt.classes,
            oPagination: Vt.pager
        }), F.extend(Ut.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        }), qe = (He = He = "") + "ui-state-default", We = He + "css_right ui-icon ui-icon-", Ze = He + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix", F.extend(Ut.ext.oJUIClasses, Ut.ext.classes, {
            sPageButton: "fg-button ui-button " + qe,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: qe + " sorting_asc",
            sSortDesc: qe + " sorting_desc",
            sSortable: qe + " sorting",
            sSortableAsc: qe + " sorting_asc_disabled",
            sSortableDesc: qe + " sorting_desc_disabled",
            sSortableNone: qe + " sorting_disabled",
            sSortJUIAsc: We + "triangle-1-n",
            sSortJUIDesc: We + "triangle-1-s",
            sSortJUI: We + "carat-2-n-s",
            sSortJUIAscAllowed: We + "carat-1-n",
            sSortJUIDescAllowed: We + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + qe,
            sScrollFoot: "dataTables_scrollFoot " + qe,
            sHeaderTH: qe,
            sFooterTH: qe,
            sJUIHeader: Ze + " ui-corner-tl ui-corner-tr",
            sJUIFooter: Ze + " ui-corner-bl ui-corner-br"
        });
        var Ve = Ut.ext.pager;
        F.extend(Ve, {
            simple: function () {
                return ["previous", "next"]
            },
            full: function () {
                return ["first", "previous", "next", "last"]
            },
            numbers: function (t, e) {
                return [qt(t, e)]
            },
            simple_numbers: function (t, e) {
                return ["previous", qt(t, e), "next"]
            },
            full_numbers: function (t, e) {
                return ["first", "previous", qt(t, e), "next", "last"]
            },
            _numbers: qt,
            numbers_length: 7
        }), F.extend(!0, Ut.ext.renderer, {
            pageButton: {
                _: function (s, t, l, e, u, c) {
                    var h, d, n, f = s.oClasses,
                        p = s.oLanguage.oPaginate,
                        m = s.oLanguage.oAria.paginate || {},
                        g = 0,
                        v = function (t, e) {
                            var n, i, o, r = function (t) {
                                dt(s, t.data.action, !0)
                            };
                            for (n = 0, i = e.length; n < i; n++)
                                if (o = e[n], F.isArray(o)) {
                                    var a = F("<" + (o.DT_el || "div") + "/>").appendTo(t);
                                    v(a, o)
                                } else {
                                    switch (h = null, d = "", o) {
                                        case "ellipsis":
                                            t.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            h = p.sFirst, d = o + (0 < u ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            h = p.sPrevious, d = o + (0 < u ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            h = p.sNext, d = o + (u < c - 1 ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            h = p.sLast, d = o + (u < c - 1 ? "" : " " + f.sPageButtonDisabled);
                                            break;
                                        default:
                                            h = o + 1, d = u === o ? f.sPageButtonActive : ""
                                    }
                                    null !== h && (Nt(F("<a>", {
                                        "class": f.sPageButton + " " + d,
                                        "aria-controls": s.sTableId,
                                        "aria-label": m[o],
                                        "data-dt-idx": g,
                                        tabindex: s.iTabIndex,
                                        id: 0 === l && "string" == typeof o ? s.sTableId + "_" + o : null
                                    }).html(h).appendTo(t), {
                                        action: o
                                    }, r), g++)
                                }
                        };
                    try {
                        n = F(t).find(y.activeElement).data("dt-idx")
                    } catch (i) {}
                    v(F(t).empty(), e), n && F(t).find("[data-dt-idx=" + n + "]").focus()
                }
            }
        }), F.extend(Ut.ext.type.detect, [function (t, e) {
            var n = e.oLanguage.sDecimal;
            return se(t, n) ? "num" + n : null
        }, function (t) {
            if (t && !(t instanceof Date) && (!te.test(t) || !ee.test(t))) return null;
            var e = Date.parse(t);
            return null !== e && !isNaN(e) || oe(t) ? "date" : null
        }, function (t, e) {
            var n = e.oLanguage.sDecimal;
            return se(t, n, !0) ? "num-fmt" + n : null
        }, function (t, e) {
            var n = e.oLanguage.sDecimal;
            return ue(t, n) ? "html-num" + n : null
        }, function (t, e) {
            var n = e.oLanguage.sDecimal;
            return ue(t, n, !0) ? "html-num-fmt" + n : null
        }, function (t) {
            return oe(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
        }]), F.extend(Ut.ext.type.search, {
            html: function (t) {
                return oe(t) ? t : "string" == typeof t ? t.replace(Jt, " ").replace(Yt, "") : ""
            },
            string: function (t) {
                return oe(t) ? t : "string" == typeof t ? t.replace(Jt, " ") : t
            }
        });
        var Ge = function (t, e, n, i) {
            return 0 === t || t && "-" !== t ? (e && (t = ae(t, e)), t.replace && (n && (t = t.replace(n, "")), i && (t = t.replace(i, ""))), 1 * t) : -Infinity
        };
        return F.extend(Vt.type.order, {
            "date-pre": function (t) {
                return Date.parse(t) || 0
            },
            "html-pre": function (t) {
                return oe(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
            },
            "string-pre": function (t) {
                return oe(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
            },
            "string-asc": function (t, e) {
                return t < e ? -1 : e < t ? 1 : 0
            },
            "string-desc": function (t, e) {
                return t < e ? 1 : e < t ? -1 : 0
            }
        }), Wt(""), F.extend(!0, Ut.ext.renderer, {
            header: {
                _: function (r, a, s, l) {
                    F(r.nTable).on("order.dt.DT", function (t, e, n, i) {
                        if (r === e) {
                            var o = s.idx;
                            a.removeClass(s.sSortingClass + " " + l.sSortAsc + " " + l.sSortDesc).addClass("asc" == i[o] ? l.sSortAsc : "desc" == i[o] ? l.sSortDesc : s.sSortingClass)
                        }
                    })
                },
                jqueryui: function (r, a, s, l) {
                    F("<div/>").addClass(l.sSortJUIWrapper).append(a.contents()).append(F("<span/>").addClass(l.sSortIcon + " " + s.sSortingClassJUI)).appendTo(a), F(r.nTable).on("order.dt.DT", function (t, e, n, i) {
                        if (r === e) {
                            var o = s.idx;
                            a.removeClass(l.sSortAsc + " " + l.sSortDesc).addClass("asc" == i[o] ? l.sSortAsc : "desc" == i[o] ? l.sSortDesc : s.sSortingClass), a.find("span." + l.sSortIcon).removeClass(l.sSortJUIAsc + " " + l.sSortJUIDesc + " " + l.sSortJUI + " " + l.sSortJUIAscAllowed + " " + l.sSortJUIDescAllowed).addClass("asc" == i[o] ? l.sSortJUIAsc : "desc" == i[o] ? l.sSortJUIDesc : s.sSortingClassJUI)
                        }
                    })
                }
            }
        }), Ut.render = {
            number: function (r, a, s, l, u) {
                return {
                    display: function (t) {
                        if ("number" != typeof t && "string" != typeof t) return t;
                        var e = t < 0 ? "-" : "",
                            n = parseFloat(t);
                        if (isNaN(n)) return t;
                        t = Math.abs(n);
                        var i = parseInt(t, 10),
                            o = s ? a + (t - i).toFixed(s).substring(2) : "";
                        return e + (l || "") + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r) + o + (u || "")
                    }
                }
            },
            text: function () {
                return {
                    display: function (t) {
                        return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t
                    }
                }
            }
        }, F.extend(Ut.ext.internal, {
            _fnExternApiFunc: Zt,
            _fnBuildAjax: C,
            _fnAjaxUpdate: k,
            _fnAjaxParameters: r,
            _fnAjaxUpdateDraw: s,
            _fnAjaxDataSrc: L,
            _fnAddColumn: j,
            _fnColumnOptions: N,
            _fnAdjustColumnSizing: H,
            _fnVisibleToColumnIndex: q,
            _fnColumnIndexToVisible: c,
            _fnVisbleColumns: P,
            _fnGetColumns: E,
            _fnColumnTypes: l,
            _fnApplyColumnDefs: z,
            _fnHungarianMap: a,
            _fnCamelToHungarian: A,
            _fnLanguageCompat: I,
            _fnBrowserDetect: R,
            _fnAddData: O,
            _fnAddTr: W,
            _fnNodeToDataIndex: t,
            _fnNodeToColumnIndex: e,
            _fnGetCellData: m,
            _fnSetCellData: i,
            _fnSplitObjNotation: g,
            _fnGetObjectDataFn: Z,
            _fnSetObjectDataFn: _,
            _fnGetDataMaster: x,
            _fnClearTable: u,
            _fnDeleteIndex: f,
            _fnInvalidate: o,
            _fnGetRowElements: h,
            _fnCreateTr: w,
            _fnBuildHead: p,
            _fnDrawHead: v,
            _fnDraw: b,
            _fnReDraw: S,
            _fnAddOptionsHtml: T,
            _fnDetectHeader: U,
            _fnGetUniqueThs: V,
            _fnFeatureHtmlFilter: G,
            _fnFilterComplete: Q,
            _fnFilterCustom: K,
            _fnFilterColumn: X,
            _fnFilter: J,
            _fnFilterCreateSearch: Y,
            _fnEscapeRegex: tt,
            _fnFilterData: et,
            _fnFeatureHtmlInfo: ot,
            _fnUpdateInfo: rt,
            _fnInfoMacros: at,
            _fnInitialise: st,
            _fnInitComplete: lt,
            _fnLengthChange: ut,
            _fnFeatureHtmlLength: ct,
            _fnFeatureHtmlPaginate: ht,
            _fnPageChange: dt,
            _fnFeatureHtmlProcessing: ft,
            _fnProcessingDisplay: pt,
            _fnFeatureHtmlTable: mt,
            _fnScrollDraw: gt,
            _fnApplyToChildren: vt,
            _fnCalculateColumnWidths: yt,
            _fnThrottle: _t,
            _fnConvertToWidth: bt,
            _fnGetWidestNode: xt,
            _fnGetMaxLenString: wt,
            _fnStringToCss: St,
            _fnSortFlatten: Tt,
            _fnSort: Ct,
            _fnSortAria: kt,
            _fnSortListener: Lt,
            _fnSortAttachListener: Dt,
            _fnSortingClasses: Pt,
            _fnSortData: Et,
            _fnSaveState: At,
            _fnLoadState: It,
            _fnSettingsFromNode: Mt,
            _fnLog: Bt,
            _fnMap: Rt,
            _fnBindAction: Nt,
            _fnCallbackReg: zt,
            _fnCallbackFire: Ot,
            _fnLengthOverflow: Ft,
            _fnRenderer: $t,
            _fnDataSource: Ht,
            _fnRowAttributes: d,
            _fnCalculateEnd: function () {}
        }), ((F.fn.dataTable = Ut).$ = F).fn.dataTableSettings = Ut.settings, F.fn.dataTableExt = Ut.ext, F.fn.DataTable = function (t) {
            return F(this).dataTable(t).api()
        }, F.each(Ut, function (t, e) {
            F.fn.DataTable[t] = e
        }), F.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t || (t = window), e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (_, t, o) {
        "use strict";
        var r = _.fn.dataTable;
        return _.extend(!0, r.defaults, {
            dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
            renderer: "bootstrap"
        }), _.extend(r.ext.classes, {
            sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
            sFilterInput: "form-control input-sm",
            sLengthSelect: "form-control input-sm",
            sProcessing: "dataTables_processing panel panel-default"
        }), r.ext.renderer.pageButton.bootstrap = function (s, t, l, e, u, c) {
            var h, d, n, f = new r.Api(s),
                p = s.oClasses,
                m = s.oLanguage.oPaginate,
                g = s.oLanguage.oAria.paginate || {},
                v = 0,
                y = function (t, e) {
                    var n, i, o, r, a = function (t) {
                        t.preventDefault(), _(t.currentTarget).hasClass("disabled") || f.page() == t.data.action || f.page(t.data.action).draw("page")
                    };
                    for (n = 0, i = e.length; n < i; n++)
                        if (r = e[n], _.isArray(r)) y(t, r);
                        else {
                            switch (d = h = "", r) {
                                case "ellipsis":
                                    h = "&#x2026;", d = "disabled";
                                    break;
                                case "first":
                                    h = m.sFirst, d = r + (0 < u ? "" : " disabled");
                                    break;
                                case "previous":
                                    h = m.sPrevious, d = r + (0 < u ? "" : " disabled");
                                    break;
                                case "next":
                                    h = m.sNext, d = r + (u < c - 1 ? "" : " disabled");
                                    break;
                                case "last":
                                    h = m.sLast, d = r + (u < c - 1 ? "" : " disabled");
                                    break;
                                default:
                                    h = r + 1, d = u === r ? "active" : ""
                            }
                            h && (o = _("<li>", {
                                "class": p.sPageButton + " " + d,
                                id: 0 === l && "string" == typeof r ? s.sTableId + "_" + r : null
                            }).append(_("<a>", {
                                href: "#",
                                "aria-controls": s.sTableId,
                                "aria-label": g[r],
                                "data-dt-idx": v,
                                tabindex: s.iTabIndex
                            }).html(h)).appendTo(t), s.oApi._fnBindAction(o, {
                                action: r
                            }, a), v++)
                        }
                };
            try {
                n = _(t).find(o.activeElement).data("dt-idx")
            } catch (i) {}
            y(_(t).empty().html('<ul class="pagination"/>').children("ul"), e), n && _(t).find("[data-dt-idx=" + n + "]").focus()
        }, r.TableTools && (_.extend(!0, r.TableTools.classes, {
            container: "DTTT btn-group",
            buttons: {
                normal: "btn btn-default",
                disabled: "disabled"
            },
            collection: {
                container: "DTTT_dropdown dropdown-menu",
                buttons: {
                    normal: "",
                    disabled: "disabled"
                }
            },
            print: {
                info: "DTTT_print_info"
            },
            select: {
                row: "active"
            }
        }), _.extend(!0, r.TableTools.DEFAULTS.oTags, {
            collection: {
                container: "ul",
                button: "li",
                liner: "a"
            }
        })), r
    }),
    function (s) {
        "use strict";

        function e(n) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.tab");
                e || t.data("bs.tab", e = new a(this)), "string" == typeof n && e[n]()
            })
        }
        var a = function (t) {
            this.element = s(t)
        };
        a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.show = function () {
            var t = this.element,
                e = t.closest("ul:not(.dropdown-menu)"),
                n = t.data("target");
            if (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var i = e.find(".active:last a"),
                    o = s.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    r = s.Event("show.bs.tab", {
                        relatedTarget: i[0]
                    });
                if (i.trigger(o), t.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var a = s(n);
                    this.activate(t.closest("li"), e), this.activate(a, a.parent(), function () {
                        i.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: i[0]
                        })
                    })
                }
            }
        }, a.prototype.activate = function (t, e, n) {
            function i() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
            }
            var o = e.find("> .active"),
                r = n && s.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
            o.length && r ? o.one("bsTransitionEnd", i).emulateTransitionEnd(a.TRANSITION_DURATION) : i(), o.removeClass("in")
        };
        var t = s.fn.tab;
        s.fn.tab = e, s.fn.tab.Constructor = a, s.fn.tab.noConflict = function () {
            return s.fn.tab = t, this
        };
        var n = function (t) {
            t.preventDefault(), e.call(s(this), "show")
        };
        s(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
    }(jQuery), Blacklight = function () {
        var e = new Array;
        return {
            onLoad: function (t) {
                e.push(t)
            },
            activate: function () {
                for (var t = 0; t < e.length; t++) e[t].call()
            }
        }
    }(), "undefined" != typeof Turbolinks && Turbolinks.supported ? Turbolinks.BrowserAdapter ? $(document).on("turbolinks:load", function () {
        Blacklight.activate()
    }) : ($(document).on("page:load", function () {
        Blacklight.activate()
    }), $(document).ready(function () {
        Blacklight.activate()
    })) : $(document).ready(function () {
        Blacklight.activate()
    }), Blacklight.onLoad(function () {
        "use strict";
        $('[data-autocomplete-enabled="true"]').each(function () {
            var t = $(this);
            if (!t.hasClass("tt-hint")) {
                var e = t.data().autocompletePath,
                    n = new Bloodhound({
                        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        remote: {
                            url: e + "?q=%QUERY",
                            wildcard: "%QUERY"
                        }
                    });
                n.initialize(), t.typeahead({
                    hint: !0,
                    highlight: !0,
                    minLength: 2
                }, {
                    name: "terms",
                    displayKey: "term",
                    source: n.ttAdapter()
                })
            }
        })
    }),
    function (c) {
        c.fn.bl_checkbox_submit = function (u) {
            return this.each(function () {
                function i(t) {
                    s.prop("checked", t), l.toggleClass("checked", t), t ? (r.find("input[name=_method]").val("delete"), e.text(r.attr("data-present"))) : (r.find("input[name=_method]").val("put"), e.text(r.attr("data-absent")))
                }
                var o = c.extend({}, c.fn.bl_checkbox_submit.defaults, u),
                    r = c(this);
                r.children().hide(), r.find("input[type=submit]").remove(), r.addClass("form-horizontal");
                var t = r.attr("data-doc-id") || Math.random(),
                    a = 0 != r.find("input[name=_method][value=delete]").length,
                    s = c('<input type="checkbox">').addClass(o.css_class).attr("id", o.css_class + "_" + t),
                    l = c("<label>").addClass(o.css_class).attr("for", o.css_class + "_" + t).attr("title", r.attr("title") || ""),
                    e = c("<span>");
                l.append(s), l.append(" "), l.append(e);
                var n = c("<div class='checkbox' />").addClass(o.css_class).append(l);
                r.append(n), i(a), s.click(function () {
                    return e.text(r.attr("data-inprogress")), l.attr("disabled", "disabled"), s.attr("disabled", "disabled"), c.ajax({
                        url: r.attr("action"),
                        dataType: "json",
                        type: r.attr("method").toUpperCase(),
                        data: r.serialize(),
                        error: function () {
                            l.removeAttr("disabled"), s.removeAttr("disabled"), o.error.call()
                        },
                        success: function (t, e, n) {
                            0 != n.status ? (i(a = !a), l.removeAttr("disabled"), s.removeAttr("disabled"), o.success.call(r, a, n.responseJSON)) : (l.removeAttr("disabled"), s.removeAttr("disabled"), o.error.call())
                        }
                    }), !1
                })
            }), this
        }, c.fn.bl_checkbox_submit.defaults = {
            css_class: "bl_checkbox_submit",
            error: function () {
                alert("Error")
            },
            success: function () {}
        }
    }(jQuery),
    function (n) {
        Blacklight.do_bookmark_toggle_behavior = function () {
            n(Blacklight.do_bookmark_toggle_behavior.selector).bl_checkbox_submit({
                css_class: "toggle_bookmark",
                error: function () {
                    alert("'Select' has encountered a problem it can't recover from. Try again later.")
                },
                success: function (t, e) {
                    e.bookmarks && n("[data-role=bookmark-counter]").text(e.bookmarks.count)
                }
            })
        }, Blacklight.do_bookmark_toggle_behavior.selector = "form.bookmark_toggle", Blacklight.onLoad(function () {
            Blacklight.do_bookmark_toggle_behavior()
        })
    }(jQuery),
    function (t) {
        Blacklight.onLoad(function () {
            t(document).on("click", "a[data-toggle=collapse][href='#'], [data-toggle=collapse] a[href='#']", function (t) {
                t.preventDefault()
            })
        })
    }(jQuery),
    function (n) {
        "use strict";
        Blacklight.doResizeFacetLabelsAndCounts = function () {
            function e(t, e) {
                return e.textContent.length - t.textContent.length
            }
            n("ul.facet-values, ul.pivot-facet").each(function () {
                var t = n(this).find("span.facet-count").sort(e).first().clone().css("visibility", "hidden").css("width", "auto");
                n("body").append(t), n(this).find(".facet-count").first().width(t.width()), t.remove()
            })
        }, Blacklight.onLoad(function () {
            Blacklight.doResizeFacetLabelsAndCounts()
        })
    }(jQuery), Blacklight.ajaxModal === undefined && (Blacklight.ajaxModal = {}), Blacklight.ajaxModal.modalSelector = "#ajax-modal", Blacklight.ajaxModal.triggerLinkSelector = "a[data-ajax-modal~=trigger], a.lightboxLink,a.more_facets_link,.ajax_modal_launch", Blacklight.ajaxModal.triggerFormSelector = "form[data-ajax-modal~=trigger], form.ajax_form", Blacklight.ajaxModal.preserveLinkSelector = Blacklight.ajaxModal.modalSelector + " a[data-ajax-modal~=preserve]", Blacklight.ajaxModal.preserveFormSelector = Blacklight.ajaxModal.modalSelector + " form[data-ajax-modal~=preserve]", Blacklight.ajaxModal.containerSelector = "[data-ajax-modal~=container]", Blacklight.ajaxModal.modalCloseSelector = "[data-ajax-modal~=close], span.ajax-close-modal", Blacklight.ajaxModal.onFailure = function () {
        var t = "<div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>\xd7</button>Network Error</div>";
        $(Blacklight.ajaxModal.modalSelector).find(".modal-content").html(t), $(Blacklight.ajaxModal.modalSelector).modal("show")
    }, Blacklight.ajaxModal.receiveAjax = function (t) {
        var e = $("<div>").append(jQuery.parseHTML(t)).find(Blacklight.ajaxModal.containerSelector).first();
        0 !== e.length && (t = e.html()), $(Blacklight.ajaxModal.modalSelector).find(".modal-content").html(t);
        var n = $.Event("loaded.blacklight.ajax-modal");
        $(Blacklight.ajaxModal.modalSelector).trigger(n), n.isDefaultPrevented() || $(Blacklight.ajaxModal.modalSelector).modal("show")
    }, Blacklight.ajaxModal.modalAjaxLinkClick = function (t) {
        t.preventDefault(), $.ajax({
            url: $(this).attr("href")
        }).fail(Blacklight.ajaxModal.onFailure).done(Blacklight.ajaxModal.receiveAjax)
    }, Blacklight.ajaxModal.modalAjaxFormSubmit = function (t) {
        t.preventDefault(), $.ajax({
            url: $(this).attr("action"),
            data: $(this).serialize(),
            type: $(this).attr("method")
        }).fail(Blacklight.ajaxModal.onFailure).done(Blacklight.ajaxModal.receiveAjax)
    }, Blacklight.ajaxModal.setup_modal = function () {
        var t = $.Event("setup.blacklight.ajax-modal");
        $("body").trigger(t), t.isDefaultPrevented() || ($("body").on("click", Blacklight.ajaxModal.triggerLinkSelector + ", " + Blacklight.ajaxModal.preserveLinkSelector, Blacklight.ajaxModal.modalAjaxLinkClick), $("body").on("submit", Blacklight.ajaxModal.triggerFormSelector + ", " + Blacklight.ajaxModal.preserveFormSelector, Blacklight.ajaxModal.modalAjaxFormSubmit), $("body").on("loaded.blacklight.ajax-modal", Blacklight.ajaxModal.check_close_ajax_modal), $("body ").on("click", Blacklight.ajaxModal.modalSelector + " a[data-dismiss~=modal]", function (t) {
            t.preventDefault()
        }))
    }, Blacklight.ajaxModal.check_close_ajax_modal = function (t) {
        $(t.target).find(Blacklight.ajaxModal.modalCloseSelector).length && (modal_flashes = $(this).find(".flash_messages"), $(t.target).modal("hide"), t.preventDefault(), main_flashes = $("#main-flashes"), main_flashes.append(modal_flashes), modal_flashes.fadeIn(500))
    }, Blacklight.onLoad(function () {
        Blacklight.ajaxModal.setup_modal()
    }),
    function (c) {
        Blacklight.do_search_context_behavior = function () {
            c("a[data-context-href]").on("click.search-context", Blacklight.handleSearchContextMethod)
        }, Blacklight.handleSearchContextMethod = function (t) {
            var e = c(this),
                n = e.data("context-href"),
                i = "post",
                o = e.attr("target"),
                r = c("meta[name=csrf-token]").attr("content"),
                a = c("meta[name=csrf-param]").attr("content"),
                s = c('<form method="post" action="' + n + '"></form>'),
                l = '<input name="_method" value="' + i + '" type="hidden" />',
                u = '<input name="redirect" value="' + e.attr("href") + '" type="hidden" />';
            return (t.metaKey || t.ctrlKey) && (o = "_blank"), a !== undefined && r !== undefined && (l += '<input name="' + a + '" value="' + r + '" type="hidden" />'), o && s.attr("target", o), s.hide().append(l).append(u).appendTo("body"), s.submit(), !1
        }, Blacklight.onLoad(function () {
            Blacklight.do_search_context_behavior()
        })
    }(jQuery),
    function (t) {
        Blacklight.do_search_autofocus_fallback = function () {
            "undefined" != typeof Modernizer && Modernizr.autofocus || t("input[autofocus]").focus()
        }, Blacklight.onLoad(function () {
            Blacklight.do_search_autofocus_fallback()
        })
    }(jQuery),
    function (i) {
        "use strict";

        function t() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (t.style[n] !== undefined) return {
                    end: e[n]
                };
            return !1
        }
        i.fn.emulateTransitionEnd = function (t) {
            var e = !1,
                n = this;
            return i(this).one("bsTransitionEnd", function () {
                e = !0
            }), setTimeout(function () {
                e || i(n).trigger(i.support.transition.end)
            }, t), this
        }, i(function () {
            i.support.transition = t(), i.support.transition && (i.event.special.bsTransitionEnd = {
                bindType: i.support.transition.end,
                delegateType: i.support.transition.end,
                handle: function (t) {
                    if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    function (a) {
        "use strict";

        function o(t) {
            var e, n = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
            return a(n)
        }

        function s(i) {
            return this.each(function () {
                var t = a(this),
                    e = t.data("bs.collapse"),
                    n = a.extend({}, l.DEFAULTS, t.data(), "object" == typeof i && i);
                !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || t.data("bs.collapse", e = new l(this, n)), "string" == typeof i && e[i]()
            })
        }
        var l = function (t, e) {
            this.$element = a(t), this.options = a.extend({}, l.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        l.VERSION = "3.3.7", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
            toggle: !0
        }, l.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, l.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                    var n = a.Event("show.bs.collapse");
                    if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                        e && e.length && (s.call(e, "hide"), t || e.data("bs.collapse", null));
                        var i = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var o = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition) return o.call(this);
                        var r = a.camelCase(["scroll", i].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][r])
                    }
                }
            }
        }, l.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = a.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var e = this.dimension();
                    this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var n = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!a.support.transition) return n.call(this);
                    this.$element[e](0).one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION)
                }
            }
        }, l.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, l.prototype.getParent = function () {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (t, e) {
                var n = a(e);
                this.addAriaAndCollapsedClass(o(n), n)
            }, this)).end()
        }, l.prototype.addAriaAndCollapsedClass = function (t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var t = a.fn.collapse;
        a.fn.collapse = s, a.fn.collapse.Constructor = l, a.fn.collapse.noConflict = function () {
            return a.fn.collapse = t, this
        }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
            var e = a(this);
            e.attr("data-target") || t.preventDefault();
            var n = o(e),
                i = n.data("bs.collapse") ? "toggle" : e.data();
            s.call(n, i)
        })
    }(jQuery),
    function (s) {
        "use strict";

        function l(t) {
            var e = t.attr("data-target");
            e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
            var n = e && s(e);
            return n && n.length ? n : t.parent()
        }

        function r(i) {
            i && 3 === i.which || (s(e).remove(), s(u).each(function () {
                var t = s(this),
                    e = l(t),
                    n = {
                        relatedTarget: this
                    };
                e.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && s.contains(e[0], i.target) || (e.trigger(i = s.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(s.Event("hidden.bs.dropdown", n)))))
            }))
        }

        function t(n) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.dropdown");
                e || t.data("bs.dropdown", e = new i(this)), "string" == typeof n && e[n].call(t)
            })
        }
        var e = ".dropdown-backdrop",
            u = '[data-toggle="dropdown"]',
            i = function (t) {
                s(t).on("click.bs.dropdown", this.toggle)
            };
        i.VERSION = "3.3.7", i.prototype.toggle = function (t) {
            var e = s(this);
            if (!e.is(".disabled, :disabled")) {
                var n = l(e),
                    i = n.hasClass("open");
                if (r(), !i) {
                    "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", r);
                    var o = {
                        relatedTarget: this
                    };
                    if (n.trigger(t = s.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
                    e.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", o))
                }
                return !1
            }
        }, i.prototype.keydown = function (t) {
            if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                var e = s(this);
                if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                    var n = l(e),
                        i = n.hasClass("open");
                    if (!i && 27 != t.which || i && 27 == t.which) return 27 == t.which && n.find(u).trigger("focus"), e.trigger("click");
                    var o = " li:not(.disabled):visible a",
                        r = n.find(".dropdown-menu" + o);
                    if (r.length) {
                        var a = r.index(t.target);
                        38 == t.which && 0 < a && a--, 40 == t.which && a < r.length - 1 && a++, ~a || (a = 0), r.eq(a).trigger("focus")
                    }
                }
            }
        };
        var n = s.fn.dropdown;
        s.fn.dropdown = t, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function () {
            return s.fn.dropdown = n, this
        }, s(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", u, i.prototype.toggle).on("keydown.bs.dropdown.data-api", u, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
    }(jQuery),
    function (r) {
        "use strict";

        function t(n) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("bs.alert");
                e || t.data("bs.alert", e = new a(this)), "string" == typeof n && e[n].call(t)
            })
        }
        var e = '[data-dismiss="alert"]',
            a = function (t) {
                r(t).on("click", e, this.close)
            };
        a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.close = function (t) {
            function e() {
                o.detach().trigger("closed.bs.alert").remove()
            }
            var n = r(this),
                i = n.attr("data-target");
            i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var o = r("#" === i ? [] : i);
            t && t.preventDefault(), o.length || (o = n.closest(".alert")), o.trigger(t = r.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), r.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(a.TRANSITION_DURATION) : e())
        };
        var n = r.fn.alert;
        r.fn.alert = t, r.fn.alert.Constructor = a, r.fn.alert.noConflict = function () {
            return r.fn.alert = n, this
        }, r(document).on("click.bs.alert.data-api", e, a.prototype.close)
    }(jQuery),
    function (r) {
        "use strict";

        function a(i, o) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("bs.modal"),
                    n = r.extend({}, s.DEFAULTS, t.data(), "object" == typeof i && i);
                e || t.data("bs.modal", e = new s(this, n)), "string" == typeof i ? e[i](o) : n.show && e.show(o)
            })
        }
        var s = function (t, e) {
            this.options = e, this.$body = r(document.body), this.$element = r(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, r.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        s.VERSION = "3.3.7", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, s.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, s.prototype.show = function (n) {
            var i = this,
                t = r.Event("show.bs.modal", {
                    relatedTarget: n
                });
            this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', r.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                    r(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var t = r.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), t && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var e = r.Event("shown.bs.modal", {
                    relatedTarget: n
                });
                t ? i.$dialog.one("bsTransitionEnd", function () {
                    i.$element.trigger("focus").trigger(e)
                }).emulateTransitionEnd(s.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(e)
            }))
        }, s.prototype.hide = function (t) {
            t && t.preventDefault(), t = r.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), r(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), r.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", r.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal())
        }, s.prototype.enforceFocus = function () {
            r(document).off("focusin.bs.modal").on("focusin.bs.modal", r.proxy(function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, s.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", r.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, s.prototype.resize = function () {
            this.isShown ? r(window).on("resize.bs.modal", r.proxy(this.handleUpdate, this)) : r(window).off("resize.bs.modal")
        }, s.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, s.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, s.prototype.backdrop = function (t) {
            var e = this,
                n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = r.support.transition && n;
                if (this.$backdrop = r(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", r.proxy(function (t) {
                        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function () {
                    e.removeBackdrop(), t && t()
                };
                r.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : o()
            } else t && t()
        }, s.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, s.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, s.prototype.resetAdjustments = function () {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, s.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, s.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, s.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, s.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var t = r.fn.modal;
        r.fn.modal = a, r.fn.modal.Constructor = s, r.fn.modal.noConflict = function () {
            return r.fn.modal = t, this
        }, r(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
            var e = r(this),
                n = e.attr("href"),
                i = r(e.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
                o = i.data("bs.modal") ? "toggle" : r.extend({
                    remote: !/#/.test(n) && n
                }, i.data(), e.data());
            e.is("a") && t.preventDefault(), i.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || i.one("hidden.bs.modal", function () {
                    e.is(":visible") && e.trigger("focus")
                })
            }), a.call(i, o, this)
        })
    }(jQuery),
    function (e, n) {
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return e.Bloodhound = n(t)
        }) : "object" == typeof exports ? module.exports = n(require("jquery")) : e.Bloodhound = n(jQuery)
    }(this, function (f) {
        var p = function () {
                "use strict";
                return {
                    isMsie: function () {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    },
                    isBlankString: function (t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function (t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function (t) {
                        return "string" == typeof t
                    },
                    isNumber: function (t) {
                        return "number" == typeof t
                    },
                    isArray: f.isArray,
                    isFunction: f.isFunction,
                    isObject: f.isPlainObject,
                    isUndefined: function (t) {
                        return void 0 === t
                    },
                    isElement: function (t) {
                        return !(!t || 1 !== t.nodeType)
                    },
                    isJQuery: function (t) {
                        return t instanceof f
                    },
                    toStr: function e(t) {
                        return p.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: f.proxy,
                    each: function (t, n) {
                        function e(t, e) {
                            return n(e, t)
                        }
                        f.each(t, e)
                    },
                    map: f.map,
                    filter: f.grep,
                    every: function (n, i) {
                        var o = !0;
                        return n ? (f.each(n, function (t, e) {
                            if (!(o = i.call(null, e, t, n))) return !1
                        }), !!o) : o
                    },
                    some: function (n, i) {
                        var o = !1;
                        return n ? (f.each(n, function (t, e) {
                            if (o = i.call(null, e, t, n)) return !1
                        }), !!o) : o
                    },
                    mixin: f.extend,
                    identity: function (t) {
                        return t
                    },
                    clone: function (t) {
                        return f.extend(!0, {}, t)
                    },
                    getIdGenerator: function () {
                        var t = 0;
                        return function () {
                            return t++
                        }
                    },
                    templatify: function n(t) {
                        function e() {
                            return String(t)
                        }
                        return f.isFunction(t) ? t : e
                    },
                    defer: function (t) {
                        setTimeout(t, 0)
                    },
                    debounce: function (o, r, a) {
                        var s, l;
                        return function () {
                            var t, e, n = this,
                                i = arguments;
                            return t = function () {
                                s = null, a || (l = o.apply(n, i))
                            }, e = a && !s, clearTimeout(s), s = setTimeout(t, r), e && (l = o.apply(n, i)), l
                        }
                    },
                    throttle: function (n, i) {
                        var o, r, a, s, l, u;
                        return l = 0, u = function () {
                                l = new Date, a = null, s = n.apply(o, r)
                            },
                            function () {
                                var t = new Date,
                                    e = i - (t - l);
                                return o = this, r = arguments, e <= 0 ? (clearTimeout(a), a = null, l = t, s = n.apply(o, r)) : a || (a = setTimeout(u, e)), s
                            }
                    },
                    stringify: function (t) {
                        return p.isString(t) ? t : JSON.stringify(t)
                    },
                    noop: function () {}
                }
            }(),
            l = "0.11.1",
            m = function () {
                "use strict";

                function t(t) {
                    return (t = p.toStr(t)) ? t.split(/\s+/) : []
                }

                function e(t) {
                    return (t = p.toStr(t)) ? t.split(/\W+/) : []
                }

                function n(o) {
                    return function e(t) {
                        return t = p.isArray(t) ? t : [].slice.call(arguments, 0),
                            function i(e) {
                                var n = [];
                                return p.each(t, function (t) {
                                    n = n.concat(o(p.toStr(e[t])))
                                }), n
                            }
                    }
                }
                return {
                    nonword: e,
                    whitespace: t,
                    obj: {
                        nonword: n(e),
                        whitespace: n(t)
                    }
                }
            }(),
            r = function () {
                "use strict";

                function t(t) {
                    this.maxSize = p.isNumber(t) ? t : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = f.noop)
                }

                function e() {
                    this.head = this.tail = null
                }

                function o(t, e) {
                    this.key = t, this.val = e, this.prev = this.next = null
                }
                return p.mixin(t.prototype, {
                    set: function r(t, e) {
                        var n, i = this.list.tail;
                        this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key], this.size--), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new o(t, e), this.list.add(n), this.hash[t] = n, this.size++)
                    },
                    get: function n(t) {
                        var e = this.hash[t];
                        if (e) return this.list.moveToFront(e), e.val
                    },
                    reset: function i() {
                        this.size = 0, this.hash = {}, this.list = new e
                    }
                }), p.mixin(e.prototype, {
                    add: function a(t) {
                        this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                    },
                    remove: function s(t) {
                        t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                    },
                    moveToFront: function (t) {
                        this.remove(t), this.add(t)
                    }
                }), t
            }(),
            a = function () {
                "use strict";

                function t(t, e) {
                    this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + p.escapeRegExChars(this.prefix)), this.ls = e || a, !this.ls && this._noop()
                }

                function i() {
                    return (new Date).getTime()
                }

                function o(t) {
                    return JSON.stringify(p.isUndefined(t) ? null : t)
                }

                function n(t) {
                    return f.parseJSON(t)
                }

                function r(t) {
                    var e, n, i = [],
                        o = a.length;
                    for (e = 0; e < o; e++)(n = a.key(e)).match(t) && i.push(n.replace(t, ""));
                    return i
                }
                var a;
                try {
                    (a = window.localStorage).setItem("~~~", "!"), a.removeItem("~~~")
                } catch (s) {
                    a = null
                }
                return p.mixin(t.prototype, {
                    _prefix: function (t) {
                        return this.prefix + t
                    },
                    _ttlKey: function (t) {
                        return this._prefix(t) + this.ttlKey
                    },
                    _noop: function () {
                        this.get = this.set = this.remove = this.clear = this.isExpired = p.noop
                    },
                    _safeSet: function (t, e) {
                        try {
                            this.ls.setItem(t, e)
                        } catch (s) {
                            "QuotaExceededError" === s.name && (this.clear(), this._noop())
                        }
                    },
                    get: function (t) {
                        return this.isExpired(t) && this.remove(t), n(this.ls.getItem(this._prefix(t)))
                    },
                    set: function (t, e, n) {
                        return p.isNumber(n) ? this._safeSet(this._ttlKey(t), o(i() + n)) : this.ls.removeItem(this._ttlKey(t)), this._safeSet(this._prefix(t), o(e))
                    },
                    remove: function (t) {
                        return this.ls.removeItem(this._ttlKey(t)), this.ls.removeItem(this._prefix(t)), this
                    },
                    clear: function () {
                        var t, e = r(this.keyMatcher);
                        for (t = e.length; t--;) this.remove(e[t]);
                        return this
                    },
                    isExpired: function (t) {
                        var e = n(this.ls.getItem(this._ttlKey(t)));
                        return !!(p.isNumber(e) && i() > e)
                    }
                }), t
            }(),
            g = function () {
                "use strict";

                function t(t) {
                    t = t || {}, this.cancelled = !1, this.lastReq = null, this._send = t.transport, this._get = t.limiter ? t.limiter(this._get) : this._get, this._cache = !1 === t.cache ? new r(0) : e
                }
                var l = 0,
                    u = {},
                    c = 6,
                    e = new r(10);
                return t.setMaxPendingRequests = function n(t) {
                    c = t
                }, t.resetCache = function i() {
                    e.reset()
                }, p.mixin(t.prototype, {
                    _fingerprint: function o(t) {
                        return (t = t || {}).url + t.type + f.param(t.data || {})
                    },
                    _get: function (t, e) {
                        function n(t) {
                            e(null, t), s._cache.set(r, t)
                        }

                        function i() {
                            e(!0)
                        }

                        function o() {
                            l--, delete u[r], s.onDeckRequestArgs && (s._get.apply(s, s.onDeckRequestArgs), s.onDeckRequestArgs = null)
                        }
                        var r, a, s = this;
                        r = this._fingerprint(t), this.cancelled || r !== this.lastReq || ((a = u[r]) ? a.done(n).fail(i) : l < c ? (l++, u[r] = this._send(t).done(n).fail(i).always(o)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                    },
                    get: function (t, e) {
                        var n, i;
                        e = e || f.noop, t = p.isString(t) ? {
                            url: t
                        } : t || {}, i = this._fingerprint(t), this.cancelled = !1, this.lastReq = i, (n = this._cache.get(i)) ? e(null, n) : this._get(t, e)
                    },
                    cancel: function () {
                        this.cancelled = !0
                    }
                }), t
            }(),
            v = window.SearchIndex = function () {
                "use strict";

                function t(t) {
                    (t = t || {}).datumTokenizer && t.queryTokenizer || f.error("datumTokenizer and queryTokenizer are both required"), this.identify = t.identify || p.stringify, this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.matchAnyQueryToken = t.matchAnyQueryToken, this.reset()
                }

                function n(t) {
                    return t = p.filter(t, function (t) {
                        return !!t
                    }), t = p.map(t, function (t) {
                        return t.toLowerCase()
                    })
                }

                function a() {
                    var t = {};
                    return t[u] = [], t[l] = {}, t
                }

                function i(t) {
                    for (var e = {}, n = [], i = 0, o = t.length; i < o; i++) e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
                    return n
                }

                function s(t, e) {
                    var n = 0,
                        i = 0,
                        o = [];
                    t = t.sort(), e = e.sort();
                    for (var r = t.length, a = e.length; n < r && i < a;) t[n] < e[i] ? n++ : (t[n] > e[i] || (o.push(t[n]), n++), i++);
                    return o
                }
                var l = "c",
                    u = "i";
                return p.mixin(t.prototype, {
                    bootstrap: function e(t) {
                        this.datums = t.datums, this.trie = t.trie
                    },
                    add: function (t) {
                        var r = this;
                        t = p.isArray(t) ? t : [t], p.each(t, function (t) {
                            var o, e;
                            r.datums[o = r.identify(t)] = t, e = n(r.datumTokenizer(t)), p.each(e, function (t) {
                                var e, n, i;
                                for (e = r.trie, n = t.split(""); i = n.shift();)(e = e[l][i] || (e[l][i] = a()))[u].push(o)
                            })
                        })
                    },
                    get: function o(t) {
                        var e = this;
                        return p.map(t, function (t) {
                            return e.datums[t]
                        })
                    },
                    search: function c(t) {
                        var e, r, a = this;
                        return e = n(this.queryTokenizer(t)), p.each(e, function (t) {
                            var e, n, i, o;
                            if (r && 0 === r.length && !a.matchAnyQueryToken) return !1;
                            for (e = a.trie, n = t.split(""); e && (i = n.shift());) e = e[l][i];
                            if (e && 0 === n.length) o = e[u].slice(0), r = r ? s(r, o) : o;
                            else if (!a.matchAnyQueryToken) return !(r = [])
                        }), r ? p.map(i(r), function (t) {
                            return a.datums[t]
                        }) : []
                    },
                    all: function r() {
                        var t = [];
                        for (var e in this.datums) t.push(this.datums[e]);
                        return t
                    },
                    reset: function h() {
                        this.datums = {}, this.trie = a()
                    },
                    serialize: function d() {
                        return {
                            datums: this.datums,
                            trie: this.trie
                        }
                    }
                }), t
            }(),
            y = function () {
                "use strict";

                function t(t) {
                    this.url = t.url, this.ttl = t.ttl, this.cache = t.cache, this.prepare = t.prepare, this.transform = t.transform, this.transport = t.transport, this.thumbprint = t.thumbprint, this.storage = new a(t.cacheKey)
                }
                var n;
                return n = {
                    data: "data",
                    protocol: "protocol",
                    thumbprint: "thumbprint"
                }, p.mixin(t.prototype, {
                    _settings: function e() {
                        return {
                            url: this.url,
                            type: "GET",
                            dataType: "json"
                        }
                    },
                    store: function i(t) {
                        this.cache && (this.storage.set(n.data, t, this.ttl), this.storage.set(n.protocol, location.protocol, this.ttl), this.storage.set(n.thumbprint, this.thumbprint, this.ttl))
                    },
                    fromCache: function o() {
                        var t, e = {};
                        return this.cache ? (e.data = this.storage.get(n.data), e.protocol = this.storage.get(n.protocol), e.thumbprint = this.storage.get(n.thumbprint), t = e.thumbprint !== this.thumbprint || e.protocol !== location.protocol, e.data && !t ? e.data : null) : null
                    },
                    fromNetwork: function (e) {
                        function t() {
                            e(!0)
                        }

                        function n(t) {
                            e(null, o.transform(t))
                        }
                        var i, o = this;
                        e && (i = this.prepare(this._settings()), this.transport(i).fail(t).done(n))
                    },
                    clear: function r() {
                        return this.storage.clear(), this
                    }
                }), t
            }(),
            _ = function () {
                "use strict";

                function t(t) {
                    this.url = t.url, this.prepare = t.prepare, this.transform = t.transform, this.indexResponse = t.indexResponse, this.transport = new g({
                        cache: t.cache,
                        limiter: t.limiter,
                        transport: t.transport
                    })
                }
                return p.mixin(t.prototype, {
                    _settings: function e() {
                        return {
                            url: this.url,
                            type: "GET",
                            dataType: "json"
                        }
                    },
                    get: function r(t, n) {
                        function e(t, e) {
                            n(t ? [] : o.transform(e))
                        }
                        var i, o = this;
                        if (n) return t = t || "", i = this.prepare(t, this._settings()), this.transport.get(i, e)
                    },
                    cancelLastRequest: function n() {
                        this.transport.cancel()
                    }
                }), t
            }(),
            b = function () {
                "use strict";

                function i(t) {
                    var e;
                    return t ? (e = {
                        url: null,
                        ttl: 864e5,
                        cache: !0,
                        cacheKey: null,
                        thumbprint: "",
                        prepare: p.identity,
                        transform: p.identity,
                        transport: null
                    }, t = p.isString(t) ? {
                        url: t
                    } : t, !(t = p.mixin(e, t)).url && f.error("prefetch requires url to be set"), t.transform = t.filter || t.transform, t.cacheKey = t.cacheKey || t.url, t.thumbprint = l + t.thumbprint, t.transport = t.transport ? a(t.transport) : f.ajax, t) : null
                }

                function o(t) {
                    var e;
                    if (t) return e = {
                        url: null,
                        cache: !0,
                        prepare: null,
                        replace: null,
                        wildcard: null,
                        limiter: null,
                        rateLimitBy: "debounce",
                        rateLimitWait: 300,
                        transform: p.identity,
                        transport: null
                    }, t = p.isString(t) ? {
                        url: t
                    } : t, !(t = p.mixin(e, t)).url && f.error("remote requires url to be set"), t.transform = t.filter || t.transform, t.prepare = n(t), t.limiter = r(t), t.transport = t.transport ? a(t.transport) : f.ajax, delete t.replace, delete t.wildcard, delete t.rateLimitBy, delete t.rateLimitWait, t
                }

                function n(t) {
                    function e(t, e) {
                        return e.url = r(e.url, t), e
                    }

                    function n(t, e) {
                        return e.url = e.url.replace(a, encodeURIComponent(t)), e
                    }

                    function i(t, e) {
                        return e
                    }
                    var o, r, a;
                    return o = t.prepare, r = t.replace, a = t.wildcard, o || (o = r ? e : t.wildcard ? n : i)
                }

                function r(t) {
                    function e(e) {
                        return function n(t) {
                            return p.debounce(t, e)
                        }
                    }

                    function n(e) {
                        return function n(t) {
                            return p.throttle(t, e)
                        }
                    }
                    var i, o, r;
                    return i = t.limiter, o = t.rateLimitBy, r = t.rateLimitWait, i || (i = /^throttle$/i.test(o) ? n(r) : e(r)), i
                }

                function a(o) {
                    return function r(t) {
                        function e(t) {
                            p.defer(function () {
                                i.resolve(t)
                            })
                        }

                        function n(t) {
                            p.defer(function () {
                                i.reject(t)
                            })
                        }
                        var i = f.Deferred();
                        return o(t, e, n), i
                    }
                }
                return function s(t) {
                    var e, n;
                    return e = {
                        initialize: !0,
                        identify: p.stringify,
                        datumTokenizer: null,
                        queryTokenizer: null,
                        matchAnyQueryToken: !1,
                        sufficient: 5,
                        indexRemote: !1,
                        sorter: null,
                        local: [],
                        prefetch: null,
                        remote: null
                    }, !(t = p.mixin(e, t || {})).datumTokenizer && f.error("datumTokenizer is required"), !t.queryTokenizer && f.error("queryTokenizer is required"), n = t.sorter, t.sorter = n ? function (t) {
                        return t.sort(n)
                    } : p.identity, t.local = p.isFunction(t.local) ? t.local() : t.local, t.prefetch = i(t.prefetch), t.remote = o(t.remote), t
                }
            }();
        return function () {
            "use strict";

            function t(t) {
                t = b(t), this.sorter = t.sorter, this.identify = t.identify, this.sufficient = t.sufficient, this.indexRemote = t.indexRemote, this.local = t.local, this.remote = t.remote ? new _(t.remote) : null, this.prefetch = t.prefetch ? new y(t.prefetch) : null, this.index = new v({
                    identify: this.identify,
                    datumTokenizer: t.datumTokenizer,
                    queryTokenizer: t.queryTokenizer
                }), !1 !== t.initialize && this.initialize()
            }
            var e;
            return e = window && window.Bloodhound, t.noConflict = function n() {
                return window && (window.Bloodhound = e), t
            }, t.tokenizers = m, p.mixin(t.prototype, {
                __ttAdapter: function o() {
                    function t(t, e, n) {
                        return i.search(t, e, n)
                    }

                    function e(t, e) {
                        return i.search(t, e)
                    }
                    var i = this;
                    return this.remote ? t : e
                },
                _loadPrefetch: function r() {
                    function t(t, e) {
                        if (t) return n.reject();
                        i.add(e), i.prefetch.store(i.index.serialize()), n.resolve()
                    }
                    var n, e, i = this;
                    return n = f.Deferred(), this.prefetch ? (e = this.prefetch.fromCache()) ? (this.index.bootstrap(e), n.resolve()) : this.prefetch.fromNetwork(t) : n.resolve(), n.promise()
                },
                _initialize: function i() {
                    function t() {
                        e.add(e.local)
                    }
                    var e = this;
                    return this.clear(), (this.initPromise = this._loadPrefetch()).done(t), this.initPromise
                },
                initialize: function i(t) {
                    return !this.initPromise || t ? this._initialize() : this.initPromise
                },
                add: function a(t) {
                    return this.index.add(t), this
                },
                get: function s(t) {
                    return t = p.isArray(t) ? t : [].slice.call(arguments), this.index.get(t)
                },
                search: function l(t, e, i) {
                    function n(t) {
                        var n = [];
                        p.each(t, function (e) {
                            !p.some(o, function (t) {
                                return r.identify(e) === r.identify(t)
                            }) && n.push(e)
                        }), r.indexRemote && r.add(n), i(n)
                    }
                    var o, r = this;
                    return e = e || p.noop, i = i || p.noop, o = this.sorter(this.index.search(t)), e(this.remote ? o.slice() : o), this.remote && o.length < this.sufficient ? this.remote.get(t, n) : this.remote && this.remote.cancelLastRequest(), this
                },
                all: function u() {
                    return this.index.all()
                },
                clear: function c() {
                    return this.index.reset(), this
                },
                clearPrefetchCache: function h() {
                    return this.prefetch && this.prefetch.clear(), this
                },
                clearRemoteCache: function d() {
                    return g.resetCache(), this
                },
                ttAdapter: function o() {
                    return this.__ttAdapter()
                }
            }), t
        }()
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function (t) {
            return e(t)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(0, function (O) {
        var F = function () {
                "use strict";
                return {
                    isMsie: function () {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    },
                    isBlankString: function (t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function (t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function (t) {
                        return "string" == typeof t
                    },
                    isNumber: function (t) {
                        return "number" == typeof t
                    },
                    isArray: O.isArray,
                    isFunction: O.isFunction,
                    isObject: O.isPlainObject,
                    isUndefined: function (t) {
                        return void 0 === t
                    },
                    isElement: function (t) {
                        return !(!t || 1 !== t.nodeType)
                    },
                    isJQuery: function (t) {
                        return t instanceof O
                    },
                    toStr: function e(t) {
                        return F.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: O.proxy,
                    each: function (t, n) {
                        function e(t, e) {
                            return n(e, t)
                        }
                        O.each(t, e)
                    },
                    map: O.map,
                    filter: O.grep,
                    every: function (n, i) {
                        var o = !0;
                        return n ? (O.each(n, function (t, e) {
                            if (!(o = i.call(null, e, t, n))) return !1
                        }), !!o) : o
                    },
                    some: function (n, i) {
                        var o = !1;
                        return n ? (O.each(n, function (t, e) {
                            if (o = i.call(null, e, t, n)) return !1
                        }), !!o) : o
                    },
                    mixin: O.extend,
                    identity: function (t) {
                        return t
                    },
                    clone: function (t) {
                        return O.extend(!0, {}, t)
                    },
                    getIdGenerator: function () {
                        var t = 0;
                        return function () {
                            return t++
                        }
                    },
                    templatify: function n(t) {
                        function e() {
                            return String(t)
                        }
                        return O.isFunction(t) ? t : e
                    },
                    defer: function (t) {
                        setTimeout(t, 0)
                    },
                    debounce: function (o, r, a) {
                        var s, l;
                        return function () {
                            var t, e, n = this,
                                i = arguments;
                            return t = function () {
                                s = null, a || (l = o.apply(n, i))
                            }, e = a && !s, clearTimeout(s), s = setTimeout(t, r), e && (l = o.apply(n, i)), l
                        }
                    },
                    throttle: function (n, i) {
                        var o, r, a, s, l, u;
                        return l = 0, u = function () {
                                l = new Date, a = null, s = n.apply(o, r)
                            },
                            function () {
                                var t = new Date,
                                    e = i - (t - l);
                                return o = this, r = arguments, e <= 0 ? (clearTimeout(a), a = null, l = t, s = n.apply(o, r)) : a || (a = setTimeout(u, e)), s
                            }
                    },
                    stringify: function (t) {
                        return F.isString(t) ? t : JSON.stringify(t)
                    },
                    noop: function () {}
                }
            }(),
            C = function () {
                "use strict";

                function t(t) {
                    var e, n;
                    return n = F.mixin({}, a, t), {
                        css: (e = {
                            css: r(),
                            classes: n,
                            html: i(n),
                            selectors: o(n)
                        }).css,
                        html: e.html,
                        classes: e.classes,
                        selectors: e.selectors,
                        mixin: function (t) {
                            F.mixin(t, e)
                        }
                    }
                }

                function i(t) {
                    return {
                        wrapper: '<span class="' + t.wrapper + '"></span>',
                        menu: '<div class="' + t.menu + '"></div>'
                    }
                }

                function o(t) {
                    var n = {};
                    return F.each(t, function (t, e) {
                        n[e] = "." + t
                    }), n
                }

                function r() {
                    var t = {
                        wrapper: {
                            position: "relative",
                            display: "inline-block"
                        },
                        hint: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            borderColor: "transparent",
                            boxShadow: "none",
                            opacity: "1"
                        },
                        input: {
                            position: "relative",
                            verticalAlign: "top",
                            backgroundColor: "transparent"
                        },
                        inputWithNoHint: {
                            position: "relative",
                            verticalAlign: "top"
                        },
                        menu: {
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            zIndex: "100",
                            display: "none"
                        },
                        ltr: {
                            left: "0",
                            right: "auto"
                        },
                        rtl: {
                            left: "auto",
                            right: " 0"
                        }
                    };
                    return F.isMsie() && F.mixin(t.input, {
                        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                    }), t
                }
                var a = {
                    wrapper: "twitter-typeahead",
                    input: "tt-input",
                    hint: "tt-hint",
                    menu: "tt-menu",
                    dataset: "tt-dataset",
                    suggestion: "tt-suggestion",
                    selectable: "tt-selectable",
                    empty: "tt-empty",
                    open: "tt-open",
                    cursor: "tt-cursor",
                    highlight: "tt-highlight"
                };
                return t
            }(),
            k = function () {
                "use strict";

                function t(t) {
                    t && t.el || O.error("EventBus initialized without el"), this.$el = O(t.el)
                }
                var i, n;
                return i = "typeahead:", n = {
                    render: "rendered",
                    cursorchange: "cursorchanged",
                    select: "selected",
                    autocomplete: "autocompleted"
                }, F.mixin(t.prototype, {
                    _trigger: function (t, e) {
                        var n;
                        return n = O.Event(i + t), (e = e || []).unshift(n), this.$el.trigger.apply(this.$el, e), n
                    },
                    before: function (t) {
                        var e;
                        return e = [].slice.call(arguments, 1), this._trigger("before" + t, e).isDefaultPrevented()
                    },
                    trigger: function (t) {
                        var e;
                        this._trigger(t, [].slice.call(arguments, 1)), (e = n[t]) && this._trigger(e, [].slice.call(arguments, 1))
                    }
                }), t
            }(),
            D = function () {
                "use strict";

                function i(t, e, n, i) {
                    var o;
                    if (!n) return this;
                    for (e = e.split(l), n = i ? s(n, i) : n, this._callbacks = this._callbacks || {}; o = e.shift();) this._callbacks[o] = this._callbacks[o] || {
                        sync: [],
                        async: []
                    }, this._callbacks[o][t].push(n);
                    return this
                }

                function t(t, e, n) {
                    return i.call(this, "async", t, e, n)
                }

                function e(t, e, n) {
                    return i.call(this, "sync", t, e, n)
                }

                function n(t) {
                    var e;
                    if (!this._callbacks) return this;
                    for (t = t.split(l); e = t.shift();) delete this._callbacks[e];
                    return this
                }

                function o(t) {
                    var e, n, i, o, r;
                    if (!this._callbacks) return this;
                    for (t = t.split(l), i = [].slice.call(arguments, 1);
                        (e = t.shift()) && (n = this._callbacks[e]);) o = a(n.sync, this, [e].concat(i)), r = a(n.async, this, [e].concat(i)), o() && u(r);
                    return this
                }

                function a(i, o, r) {
                    function t() {
                        for (var t, e = 0, n = i.length; !t && e < n; e += 1) t = !1 === i[e].apply(o, r);
                        return !t
                    }
                    return t
                }

                function r() {
                    return window.setImmediate ? function e(t) {
                        setImmediate(function () {
                            t()
                        })
                    } : function n(t) {
                        setTimeout(function () {
                            t()
                        }, 0)
                    }
                }

                function s(t, e) {
                    return t.bind ? t.bind(e) : function () {
                        t.apply(e, [].slice.call(arguments, 0))
                    }
                }
                var l = /\s+/,
                    u = r();
                return {
                    onSync: e,
                    onAsync: t,
                    off: n,
                    trigger: o
                }
            }(),
            S = function (s) {
                "use strict";

                function e(t, e, n) {
                    for (var i, o = [], r = 0, a = t.length; r < a; r++) o.push(F.escapeRegExChars(t[r]));
                    return i = n ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", e ? new RegExp(i) : new RegExp(i, "i")
                }
                var n = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function i(o) {
                    function t(t) {
                        var e, n, i;
                        return (e = a.exec(t.data)) && (i = s.createElement(o.tagName), o.className && (i.className = o.className), (n = t.splitText(e.index)).splitText(e[0].length), i.appendChild(n.cloneNode(!0)), t.parentNode.replaceChild(i, n)), !!e
                    }

                    function r(t, e) {
                        for (var n, i = 3, o = 0; o < t.childNodes.length; o++)(n = t.childNodes[o]).nodeType === i ? o += e(n) ? 1 : 0 : r(n, e)
                    }
                    var a;
                    (o = F.mixin({}, n, o)).node && o.pattern && (o.pattern = F.isArray(o.pattern) ? o.pattern : [o.pattern], a = e(o.pattern, o.caseSensitive, o.wordsOnly), r(o.node, t))
                }
            }(window.document),
            $ = function () {
                "use strict";

                function n(t, e) {
                    (t = t || {}).input || O.error("input is missing"), e.mixin(this), this.$hint = O(t.hint), this.$input = O(t.input), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = i(this.$input), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = F.noop)
                }

                function i(t) {
                    return O('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: t.css("font-family"),
                        fontSize: t.css("font-size"),
                        fontStyle: t.css("font-style"),
                        fontVariant: t.css("font-variant"),
                        fontWeight: t.css("font-weight"),
                        wordSpacing: t.css("word-spacing"),
                        letterSpacing: t.css("letter-spacing"),
                        textIndent: t.css("text-indent"),
                        textRendering: t.css("text-rendering"),
                        textTransform: t.css("text-transform")
                    }).insertAfter(t)
                }

                function o(t, e) {
                    return n.normalizeQuery(t) === n.normalizeQuery(e)
                }

                function r(t) {
                    return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                }
                var a;
                return a = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, n.normalizeQuery = function (t) {
                    return F.toStr(t).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, F.mixin(n.prototype, D, {
                    _onBlur: function t() {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function e() {
                        this.queryWhenFocused = this.query, this.trigger("focused")
                    },
                    _onKeydown: function s(t) {
                        var e = a[t.which || t.keyCode];
                        this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                    },
                    _onInput: function l() {
                        this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
                    },
                    _managePreventDefault: function u(t, e) {
                        var n;
                        switch (t) {
                            case "up":
                            case "down":
                                n = !r(e);
                                break;
                            default:
                                n = !1
                        }
                        n && e.preventDefault()
                    },
                    _shouldTrigger: function c(t, e) {
                        var n;
                        switch (t) {
                            case "tab":
                                n = !r(e);
                                break;
                            default:
                                n = !0
                        }
                        return n
                    },
                    _checkLanguageDirection: function h() {
                        var t = (this.$input.css("direction") || "ltr").toLowerCase();
                        this.dir !== t && (this.dir = t, this.$hint.attr("dir", t), this.trigger("langDirChanged", t))
                    },
                    _setQuery: function d(t, e) {
                        var n, i;
                        i = !!(n = o(t, this.query)) && this.query.length !== t.length, this.query = t, e || n ? !e && i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    bind: function () {
                        var t, e, n, i, o = this;
                        return t = F.bind(this._onBlur, this), e = F.bind(this._onFocus, this), n = F.bind(this._onKeydown, this), i = F.bind(this._onInput, this), this.$input.on("blur.tt", t).on("focus.tt", e).on("keydown.tt", n), !F.isMsie() || 9 < F.isMsie() ? this.$input.on("input.tt", i) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (t) {
                            a[t.which || t.keyCode] || F.defer(F.bind(o._onInput, o, t))
                        }), this
                    },
                    focus: function f() {
                        this.$input.focus()
                    },
                    blur: function p() {
                        this.$input.blur()
                    },
                    getLangDir: function m() {
                        return this.dir
                    },
                    getQuery: function g() {
                        return this.query || ""
                    },
                    setQuery: function d(t, e) {
                        this.setInputValue(t), this._setQuery(t, e)
                    },
                    hasQueryChangedSinceLastFocus: function v() {
                        return this.query !== this.queryWhenFocused
                    },
                    getInputValue: function y() {
                        return this.$input.val()
                    },
                    setInputValue: function _(t) {
                        this.$input.val(t), this.clearHintIfInvalid(), this._checkLanguageDirection()
                    },
                    resetInputValue: function b() {
                        this.setInputValue(this.query)
                    },
                    getHint: function x() {
                        return this.$hint.val()
                    },
                    setHint: function w(t) {
                        this.$hint.val(t)
                    },
                    clearHint: function S() {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function T() {
                        var t, e, n;
                        n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint()
                    },
                    hasFocus: function C() {
                        return this.$input.is(":focus")
                    },
                    hasOverflow: function k() {
                        var t = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                    },
                    isCursorAtEnd: function () {
                        var t, e, n;
                        return t = this.$input.val().length, e = this.$input[0].selectionStart, F.isNumber(e) ? e === t : !document.selection || ((n = document.selection.createRange()).moveStart("character", -t), t === n.text.length)
                    },
                    destroy: function L() {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = O("<div>")
                    }
                }), n
            }(),
            x = function () {
                "use strict";

                function t(t, e) {
                    (t = t || {}).templates = t.templates || {}, t.templates.notFound = t.templates.notFound || t.templates.empty, t.source || O.error("missing source"), t.node || O.error("missing node"), t.name && !o(t.name) && O.error("invalid dataset name: " + t.name), e.mixin(this), this.highlight = !!t.highlight, this.name = t.name || r(), this.limit = t.limit || 5, this.displayFn = n(t.display || t.displayKey), this.templates = i(t.templates, this.displayFn), this.source = t.source.__ttAdapter ? t.source.__ttAdapter() : t.source, this.async = F.isUndefined(t.async) ? 2 < this.source.length : !!t.async, this._resetLastSuggestion(), this.$el = O(t.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
                }

                function n(e) {
                    function t(t) {
                        return t[e]
                    }
                    return e = e || F.stringify, F.isFunction(e) ? e : t
                }

                function i(t, e) {
                    function n(t) {
                        return O("<div>").text(e(t))
                    }
                    return {
                        notFound: t.notFound && F.templatify(t.notFound),
                        pending: t.pending && F.templatify(t.pending),
                        header: t.header && F.templatify(t.header),
                        footer: t.footer && F.templatify(t.footer),
                        suggestion: t.suggestion || n
                    }
                }

                function o(t) {
                    return /^[_a-zA-Z0-9-]+$/.test(t)
                }
                var s, r;
                return s = {
                    val: "tt-selectable-display",
                    obj: "tt-selectable-object"
                }, r = F.getIdGenerator(), t.extractData = function a(t) {
                    var e = O(t);
                    return e.data(s.obj) ? {
                        val: e.data(s.val) || "",
                        obj: e.data(s.obj) || null
                    } : null
                }, F.mixin(t.prototype, D, {
                    _overwrite: function l(t, e) {
                        (e = e || []).length ? this._renderSuggestions(t, e) : this.async && this.templates.pending ? this._renderPending(t) : !this.async && this.templates.notFound ? this._renderNotFound(t) : this._empty(), this.trigger("rendered", this.name, e, !1)
                    },
                    _append: function u(t, e) {
                        (e = e || []).length && this.$lastSuggestion.length ? this._appendSuggestions(t, e) : e.length ? this._renderSuggestions(t, e) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(t), this.trigger("rendered", this.name, e, !0)
                    },
                    _renderSuggestions: function c(t, e) {
                        var n;
                        n = this._getSuggestionsFragment(t, e), this.$lastSuggestion = n.children().last(), this.$el.html(n).prepend(this._getHeader(t, e)).append(this._getFooter(t, e))
                    },
                    _appendSuggestions: function h(t, e) {
                        var n, i;
                        i = (n = this._getSuggestionsFragment(t, e)).children().last(), this.$lastSuggestion.after(n), this.$lastSuggestion = i
                    },
                    _renderPending: function d(t) {
                        var e = this.templates.pending;
                        this._resetLastSuggestion(), e && this.$el.html(e({
                            query: t,
                            dataset: this.name
                        }))
                    },
                    _renderNotFound: function f(t) {
                        var e = this.templates.notFound;
                        this._resetLastSuggestion(), e && this.$el.html(e({
                            query: t,
                            dataset: this.name
                        }))
                    },
                    _empty: function e() {
                        this.$el.empty(), this._resetLastSuggestion()
                    },
                    _getSuggestionsFragment: function p(i, t) {
                        var o, r = this;
                        return o = document.createDocumentFragment(), F.each(t, function a(t) {
                            var e, n;
                            n = r._injectQuery(i, t), e = O(r.templates.suggestion(n)).data(s.obj, t).data(s.val, r.displayFn(t)).addClass(r.classes.suggestion + " " + r.classes.selectable), o.appendChild(e[0])
                        }), this.highlight && S({
                            className: this.classes.highlight,
                            node: o,
                            pattern: i
                        }), O(o)
                    },
                    _getFooter: function m(t, e) {
                        return this.templates.footer ? this.templates.footer({
                            query: t,
                            suggestions: e,
                            dataset: this.name
                        }) : null
                    },
                    _getHeader: function g(t, e) {
                        return this.templates.header ? this.templates.header({
                            query: t,
                            suggestions: e,
                            dataset: this.name
                        }) : null
                    },
                    _resetLastSuggestion: function v() {
                        this.$lastSuggestion = O()
                    },
                    _injectQuery: function y(t, e) {
                        return F.isObject(e) ? F.mixin({
                            _query: t
                        }, e) : e
                    },
                    update: function _(e) {
                        function t(t) {
                            r || (r = !0, t = (t || []).slice(0, i.limit), a = t.length, i._overwrite(e, t), a < i.limit && i.async && i.trigger("asyncRequested", e))
                        }

                        function n(t) {
                            t = t || [], !o && a < i.limit && (i.cancel = O.noop, i._append(e, t.slice(0, i.limit - a)), a += t.length, i.async && i.trigger("asyncReceived", e))
                        }
                        var i = this,
                            o = !1,
                            r = !1,
                            a = 0;
                        this.cancel(), this.cancel = function s() {
                            o = !0, i.cancel = O.noop, i.async && i.trigger("asyncCanceled", e)
                        }, this.source(e, t, n), !r && t([])
                    },
                    cancel: O.noop,
                    clear: function b() {
                        this._empty(), this.cancel(), this.trigger("cleared")
                    },
                    isEmpty: function x() {
                        return this.$el.is(":empty")
                    },
                    destroy: function w() {
                        this.$el = O("<div>")
                    }
                }), t
            }(),
            L = function () {
                "use strict";

                function t(t, n) {
                    function e(t) {
                        var e = i.$node.find(t.node).first();
                        return t.node = e.length ? e : O("<div>").appendTo(i.$node), new x(t, n)
                    }
                    var i = this;
                    (t = t || {}).node || O.error("node is required"), n.mixin(this), this.$node = O(t.node), this.query = null, this.datasets = F.map(t.datasets, e)
                }
                return F.mixin(t.prototype, D, {
                    _onSelectableClick: function e(t) {
                        this.trigger("selectableClicked", O(t.currentTarget))
                    },
                    _onRendered: function o(t, e, n, i) {
                        this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", e, n, i)
                    },
                    _onCleared: function n() {
                        this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
                    },
                    _propagate: function i() {
                        this.trigger.apply(this, arguments)
                    },
                    _allDatasetsEmpty: function r() {
                        function t(t) {
                            return t.isEmpty()
                        }
                        return F.every(this.datasets, t)
                    },
                    _getSelectables: function a() {
                        return this.$node.find(this.selectors.selectable)
                    },
                    _removeCursor: function s() {
                        var t = this.getActiveSelectable();
                        t && t.removeClass(this.classes.cursor)
                    },
                    _ensureVisible: function l(t) {
                        var e, n, i, o;
                        n = (e = t.position().top) + t.outerHeight(!0), i = this.$node.scrollTop(), o = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), e < 0 ? this.$node.scrollTop(i + e) : o < n && this.$node.scrollTop(i + (n - o))
                    },
                    bind: function () {
                        var t, e = this;
                        return t = F.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, t), F.each(this.datasets, function (t) {
                            t.onSync("asyncRequested", e._propagate, e).onSync("asyncCanceled", e._propagate, e).onSync("asyncReceived", e._propagate, e).onSync("rendered", e._onRendered, e).onSync("cleared", e._onCleared, e)
                        }), this
                    },
                    isOpen: function u() {
                        return this.$node.hasClass(this.classes.open)
                    },
                    open: function c() {
                        this.$node.scrollTop(0), this.$node.addClass(this.classes.open)
                    },
                    close: function h() {
                        this.$node.removeClass(this.classes.open), this._removeCursor()
                    },
                    setLanguageDirection: function d(t) {
                        this.$node.attr("dir", t)
                    },
                    selectableRelativeToCursor: function f(t) {
                        var e, n, i;
                        return n = this.getActiveSelectable(), e = this._getSelectables(), -1 === (i = (i = ((i = (n ? e.index(n) : -1) + t) + 1) % (e.length + 1) - 1) < -1 ? e.length - 1 : i) ? null : e.eq(i)
                    },
                    setCursor: function p(t) {
                        this._removeCursor(), (t = t && t.first()) && (t.addClass(this.classes.cursor), this._ensureVisible(t))
                    },
                    getSelectableData: function m(t) {
                        return t && t.length ? x.extractData(t) : null
                    },
                    getActiveSelectable: function g() {
                        var t = this._getSelectables().filter(this.selectors.cursor).first();
                        return t.length ? t : null
                    },
                    getTopSelectable: function v() {
                        var t = this._getSelectables().first();
                        return t.length ? t : null
                    },
                    update: function y(e) {
                        function t(t) {
                            t.update(e)
                        }
                        var n = e !== this.query;
                        return n && (this.query = e, F.each(this.datasets, t)), n
                    },
                    empty: function _() {
                        function t(t) {
                            t.clear()
                        }
                        F.each(this.datasets, t), this.query = null, this.$node.addClass(this.classes.empty)
                    },
                    destroy: function b() {
                        function t(t) {
                            t.destroy()
                        }
                        this.$node.off(".tt"), this.$node = O("<div>"), F.each(this.datasets, t)
                    }
                }), t
            }(),
            P = function () {
                "use strict";

                function t() {
                    L.apply(this, [].slice.call(arguments, 0))
                }
                var e = L.prototype;
                return F.mixin(t.prototype, L.prototype, {
                    open: function n() {
                        return !this._allDatasetsEmpty() && this._show(), e.open.apply(this, [].slice.call(arguments, 0))
                    },
                    close: function i() {
                        return this._hide(), e.close.apply(this, [].slice.call(arguments, 0))
                    },
                    _onRendered: function o() {
                        return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), e._onRendered.apply(this, [].slice.call(arguments, 0))
                    },
                    _onCleared: function r() {
                        return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), e._onCleared.apply(this, [].slice.call(arguments, 0))
                    },
                    setLanguageDirection: function a(t) {
                        return this.$node.css("ltr" === t ? this.css.ltr : this.css.rtl), e.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
                    },
                    _hide: function s() {
                        this.$node.hide()
                    },
                    _show: function l() {
                        this.$node.css("display", "block")
                    }
                }), t
            }(),
            E = function () {
                "use strict";

                function t(t, e) {
                    var n, i, o, r, a, s, l, u, c, h, d;
                    (t = t || {}).input || O.error("missing input"), t.menu || O.error("missing menu"), t.eventBus || O.error("missing event bus"), e.mixin(this), this.eventBus = t.eventBus, this.minLength = F.isNumber(t.minLength) ? t.minLength : 1, this.input = t.input, this.menu = t.menu, this.enabled = !0, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), n = f(this, "activate", "open", "_onFocused"), i = f(this, "deactivate", "_onBlurred"), o = f(this, "isActive", "isOpen", "_onEnterKeyed"), r = f(this, "isActive", "isOpen", "_onTabKeyed"), a = f(this, "isActive", "_onEscKeyed"), s = f(this, "isActive", "open", "_onUpKeyed"), l = f(this, "isActive", "open", "_onDownKeyed"), u = f(this, "isActive", "isOpen", "_onLeftKeyed"), c = f(this, "isActive", "isOpen", "_onRightKeyed"), h = f(this, "_openIfActive", "_onQueryChanged"), d = f(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", n, this).onSync("blurred", i, this).onSync("enterKeyed", o, this).onSync("tabKeyed", r, this).onSync("escKeyed", a, this).onSync("upKeyed", s, this).onSync("downKeyed", l, this).onSync("leftKeyed", u, this).onSync("rightKeyed", c, this).onSync("queryChanged", h, this).onSync("whitespaceChanged", d, this).onSync("langDirChanged", this._onLangDirChanged, this)
                }

                function f(n) {
                    var t = [].slice.call(arguments, 1);
                    return function () {
                        var e = [].slice.call(arguments);
                        F.each(t, function (t) {
                            return n[t].apply(n, e)
                        })
                    }
                }
                return F.mixin(t.prototype, {
                    _hacks: function e() {
                        var o, r;
                        o = this.input.$input || O("<div>"), r = this.menu.$node || O("<div>"), o.on("blur.tt", function (t) {
                            var e, n, i;
                            e = document.activeElement, n = r.is(e), i = 0 < r.has(e).length, F.isMsie() && (n || i) && (t.preventDefault(), t.stopImmediatePropagation(), F.defer(function () {
                                o.focus()
                            }))
                        }), r.on("mousedown.tt", function (t) {
                            t.preventDefault()
                        })
                    },
                    _onSelectableClicked: function n(t, e) {
                        this.select(e)
                    },
                    _onDatasetCleared: function i() {
                        this._updateHint()
                    },
                    _onDatasetRendered: function o(t, e, n, i) {
                        this._updateHint(), this.eventBus.trigger("render", n, i, e)
                    },
                    _onAsyncRequested: function r(t, e, n) {
                        this.eventBus.trigger("asyncrequest", n, e)
                    },
                    _onAsyncCanceled: function a(t, e, n) {
                        this.eventBus.trigger("asynccancel", n, e)
                    },
                    _onAsyncReceived: function s(t, e, n) {
                        this.eventBus.trigger("asyncreceive", n, e)
                    },
                    _onFocused: function l() {
                        this._minLengthMet() && this.menu.update(this.input.getQuery())
                    },
                    _onBlurred: function u() {
                        this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
                    },
                    _onEnterKeyed: function c(t, e) {
                        var n;
                        (n = this.menu.getActiveSelectable()) && this.select(n) && e.preventDefault()
                    },
                    _onTabKeyed: function h(t, e) {
                        var n;
                        (n = this.menu.getActiveSelectable()) ? this.select(n) && e.preventDefault(): (n = this.menu.getTopSelectable()) && this.autocomplete(n) && e.preventDefault()
                    },
                    _onEscKeyed: function d() {
                        this.close()
                    },
                    _onUpKeyed: function p() {
                        this.moveCursor(-1)
                    },
                    _onDownKeyed: function m() {
                        this.moveCursor(1)
                    },
                    _onLeftKeyed: function g() {
                        "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                    },
                    _onRightKeyed: function v() {
                        "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                    },
                    _onQueryChanged: function y(t, e) {
                        this._minLengthMet(e) ? this.menu.update(e) : this.menu.empty()
                    },
                    _onWhitespaceChanged: function _() {
                        this._updateHint()
                    },
                    _onLangDirChanged: function b(t, e) {
                        this.dir !== e && (this.dir = e, this.menu.setLanguageDirection(e))
                    },
                    _openIfActive: function x() {
                        this.isActive() && this.open()
                    },
                    _minLengthMet: function w(t) {
                        return (t = F.isString(t) ? t : this.input.getQuery() || "").length >= this.minLength
                    },
                    _updateHint: function S() {
                        var t, e, n, i, o, r;
                        t = this.menu.getTopSelectable(), e = this.menu.getSelectableData(t), n = this.input.getInputValue(), !e || F.isBlankString(n) || this.input.hasOverflow() ? this.input.clearHint() : (i = $.normalizeQuery(n), o = F.escapeRegExChars(i), (r = new RegExp("^(?:" + o + ")(.+$)", "i").exec(e.val)) && this.input.setHint(n + r[1]))
                    },
                    isEnabled: function T() {
                        return this.enabled
                    },
                    enable: function C() {
                        this.enabled = !0
                    },
                    disable: function k() {
                        this.enabled = !1
                    },
                    isActive: function L() {
                        return this.active
                    },
                    activate: function D() {
                        return !!this.isActive() || !(!this.isEnabled() || this.eventBus.before("active")) && (this.active = !0, this.eventBus.trigger("active"), !0)
                    },
                    deactivate: function P() {
                        return !this.isActive() || !this.eventBus.before("idle") && (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0)
                    },
                    isOpen: function E() {
                        return this.menu.isOpen()
                    },
                    open: function A() {
                        return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
                    },
                    close: function I() {
                        return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
                    },
                    setVal: function M(t) {
                        this.input.setQuery(F.toStr(t))
                    },
                    getVal: function B() {
                        return this.input.getQuery()
                    },
                    select: function R(t) {
                        var e = this.menu.getSelectableData(t);
                        return !(!e || this.eventBus.before("select", e.obj)) && (this.input.setQuery(e.val, !0), this.eventBus.trigger("select", e.obj), this.close(), !0)
                    },
                    autocomplete: function j(t) {
                        var e, n;
                        return e = this.input.getQuery(), !(!((n = this.menu.getSelectableData(t)) && e !== n.val) || this.eventBus.before("autocomplete", n.obj)) && (this.input.setQuery(n.val), this.eventBus.trigger("autocomplete", n.obj), !0)
                    },
                    moveCursor: function N(t) {
                        var e, n, i, o;
                        return e = this.input.getQuery(), n = this.menu.selectableRelativeToCursor(t), o = (i = this.menu.getSelectableData(n)) ? i.obj : null, !(this._minLengthMet() && this.menu.update(e)) && !this.eventBus.before("cursorchange", o) && (this.menu.setCursor(n), i ? this.input.setInputValue(i.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", o), !0)
                    },
                    destroy: function z() {
                        this.input.destroy(), this.menu.destroy()
                    }
                }), t
            }();
        ! function () {
            "use strict";

            function i(t, n) {
                t.each(function () {
                    var t, e = O(this);
                    (t = e.data(v.typeahead)) && n(t, e)
                })
            }

            function p(t, e) {
                return t.clone().addClass(e.classes.hint).removeData().css(e.css.hint).css(n(t)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                    autocomplete: "off",
                    spellcheck: "false",
                    tabindex: -1
                })
            }

            function m(t, e) {
                t.data(v.attrs, {
                    dir: t.attr("dir"),
                    autocomplete: t.attr("autocomplete"),
                    spellcheck: t.attr("spellcheck"),
                    style: t.attr("style")
                }), t.addClass(e.classes.input).attr({
                    autocomplete: "off",
                    spellcheck: !1
                });
                try {
                    !t.attr("dir") && t.attr("dir", "auto")
                } catch (n) {}
                return t
            }

            function n(t) {
                return {
                    backgroundAttachment: t.css("background-attachment"),
                    backgroundClip: t.css("background-clip"),
                    backgroundColor: t.css("background-color"),
                    backgroundImage: t.css("background-image"),
                    backgroundOrigin: t.css("background-origin"),
                    backgroundPosition: t.css("background-position"),
                    backgroundRepeat: t.css("background-repeat"),
                    backgroundSize: t.css("background-size")
                }
            }

            function o(n) {
                var t, e;
                t = n.data(v.www), e = n.parent().filter(t.selectors.wrapper), F.each(n.data(v.attrs), function (t, e) {
                    F.isUndefined(t) ? n.removeAttr(e) : n.attr(e, t)
                }), n.removeData(v.typeahead).removeData(v.www).removeData(v.attr).removeClass(t.classes.input), e.length && (n.detach().insertAfter(e), e.remove())
            }

            function g(t) {
                var e;
                return (e = F.isJQuery(t) || F.isElement(t) ? O(t).first() : []).length ? e : null
            }
            var t, v, e;
            t = O.fn.typeahead, v = {
                www: "tt-www",
                attrs: "tt-attrs",
                typeahead: "tt-typeahead"
            }, e = {
                initialize: function r(h, d) {
                    function t() {
                        var t, e, n, i, o, r, a, s, l, u, c;
                        F.each(d, function (t) {
                            t.highlight = !!h.highlight
                        }), t = O(this), e = O(f.html.wrapper), n = g(h.hint), i = g(h.menu), o = !1 !== h.hint && !n, r = !1 !== h.menu && !i, o && (n = p(t, f)), r && (i = O(f.html.menu).css(f.css.menu)), n && n.val(""), t = m(t, f), (o || r) && (e.css(f.css.wrapper), t.css(o ? f.css.input : f.css.inputWithNoHint), t.wrap(e).parent().prepend(o ? n : null).append(r ? i : null)), c = r ? P : L, a = new k({
                            el: t
                        }), s = new $({
                            hint: n,
                            input: t
                        }, f), l = new c({
                            node: i,
                            datasets: d
                        }, f), u = new E({
                            input: s,
                            menu: l,
                            eventBus: a,
                            minLength: h.minLength
                        }, f), t.data(v.www, f), t.data(v.typeahead, u)
                    }
                    var f;
                    return d = F.isArray(d) ? d : [].slice.call(arguments, 1), f = C((h = h || {}).classNames), this.each(t)
                },
                isEnabled: function a() {
                    var e;
                    return i(this.first(), function (t) {
                        e = t.isEnabled()
                    }), e
                },
                enable: function s() {
                    return i(this, function (t) {
                        t.enable()
                    }), this
                },
                disable: function l() {
                    return i(this, function (t) {
                        t.disable()
                    }), this
                },
                isActive: function u() {
                    var e;
                    return i(this.first(), function (t) {
                        e = t.isActive()
                    }), e
                },
                activate: function c() {
                    return i(this, function (t) {
                        t.activate()
                    }), this
                },
                deactivate: function h() {
                    return i(this, function (t) {
                        t.deactivate()
                    }), this
                },
                isOpen: function d() {
                    var e;
                    return i(this.first(), function (t) {
                        e = t.isOpen()
                    }), e
                },
                open: function f() {
                    return i(this, function (t) {
                        t.open()
                    }), this
                },
                close: function y() {
                    return i(this, function (t) {
                        t.close()
                    }), this
                },
                select: function _(t) {
                    var e = !1,
                        n = O(t);
                    return i(this.first(), function (t) {
                        e = t.select(n)
                    }), e
                },
                autocomplete: function b(t) {
                    var e = !1,
                        n = O(t);
                    return i(this.first(), function (t) {
                        e = t.autocomplete(n)
                    }), e
                },
                moveCursor: function x(e) {
                    var n = !1;
                    return i(this.first(), function (t) {
                        n = t.moveCursor(e)
                    }), n
                },
                val: function w(e) {
                    var n;
                    return arguments.length ? (i(this, function (t) {
                        t.setVal(F.toStr(e))
                    }), this) : (i(this.first(), function (t) {
                        n = t.getVal()
                    }), n)
                },
                destroy: function S() {
                    return i(this, function (t, e) {
                        o(e), t.destroy()
                    }), this
                }
            }, O.fn.typeahead = function (t) {
                return e[t] ? e[t].apply(this, [].slice.call(arguments, 1)) : e.initialize.apply(this, arguments)
            }, O.fn.typeahead.noConflict = function T() {
                return O.fn.typeahead = t, this
            }
        }()
    }), $(".no-js").removeClass("no-js").addClass("js"),
    function (t) {
        function u(t, n) {
            var i = [];
            return t.filter(function (t) {
                return "Source type" === t.label || "Resource type" === t.label
            }).forEach(function (e) {
                e.items.sort(function (t, e) {
                    return e.hits - t.hits
                }).slice(0, 5).forEach(function (t) {
                    linkedUrl = n + "&f[" + e.name + "][]=" + encodeURI(t.value), linkText = t.label + " (" + parseInt(t.hits).toLocaleString() + ")", i.push('<a href="' + linkedUrl + '">' + linkText + "</a>")
                })
            }), i.join(" - ")
        }
        var e = {
            init: function (t) {
                var e = $(t),
                    i = e.data(),
                    n = $("#documents"),
                    o = e.find(".alternate-catalog-title"),
                    r = e.find(".alternate-catalog-body"),
                    a = e.find(".alternate-catalog-count"),
                    s = e.find(".alternate-catalog-close"),
                    l = e.find(".alternate-catalog-facets");
                s.click(function () {
                    e.hide()
                }), 0 === n.find(".document-position-2").after(e).length && n.append(e), o.text("Searching..."), $.getJSON({
                    url: i.alternateCatalog
                }).done(function (t) {
                    var e = t.response.pages.total_count;
                    if (0 < e) {
                        o.text("Your search also found results in"), a.text(parseInt(e).toLocaleString());
                        var n = u(t.response.facets, i.alternateCatalog);
                        l.html(n), r.show()
                    } else o.text("No additional results were found in"), r.find("a.btn").remove(), r.find("dl").remove(), r.show()
                })
            }
        };
        t.AlternateCatalog = e
    }(this), Blacklight.onLoad(function () {
        "use strict";
        $("[data-alternate-catalog]").each(function (t, e) {
            AlternateCatalog.init(e)
        })
    }), GoogleAnalytics = function () {
        function n() {}
        return n.load = function () {
            var t, e;
            window._gaq = [], n.analyticsId = n.getAnalyticsId(), window._gaq.push(["_setAccount", n.analyticsId]), (e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t)
        }, n.trackPageview = function (t) {
            if (!n.isLocalRequest()) return t ? window._gaq.push(["_trackPageview", t]) : window._gaq.push(["_trackPageview"]), window._gaq.push(["_trackPageLoadTime"])
        }, n.isLocalRequest = function () {
            return n.documentDomainIncludes("local")
        }, n.documentDomainIncludes = function (t) {
            return -1 !== document.domain.indexOf(t)
        }, n.getAnalyticsId = function () {
            return $("[data-analytics-id]").data("analytics-id")
        }, n
    }(), Blacklight.onLoad(function () {
        GoogleAnalytics.load(), GoogleAnalytics.analyticsId && GoogleAnalytics.trackPageview(), $(".iiif-dnd").on("click", function (t) {
            t.preventDefault();
            var e = $(t.currentTarget),
                n = e.data().manifest;
            window._gaq.push(["_trackEvent", "IIIF DnD", "clicked", n]), window.location = e.attr("href")
        }), $(".iiif-dnd").on("dragstart", function (t) {
            var e = $(t.currentTarget).data().manifest;
            window._gaq.push(["_trackEvent", "IIIF DnD", "dragged", e])
        }), $('a[href]:not([href^="/"],[href^="#"],[data-behavior="requests-modal"],[href=""])').on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = this,
                n = $(t.currentTarget);
            try {
                n[0].host !== window.location.host && window._gaq.push(["_trackEvent", "External link", "clicked", n.attr("href")])
            } finally {
                window.location.href = e.href
            }
        })
    }), Blacklight.onLoad(function () {
        $("#toggleFulltext").on("show.bs.collapse", function () {
            $("#fulltextToggleBar").html('<h2>Hide full text <i class="fa fa-chevron-down"></i></h2>')
        }), $("#toggleFulltext").on("hide.bs.collapse", function () {
            $("#fulltextToggleBar").html('<h2>Show full text <i class="fa fa-chevron-right"></i></h2>')
        }), $("#research-starter-body").on("hide.bs.collapse", function () {
            $("#research-starter-close-icon").removeClass("fa-times-circle").addClass("fa-plus-circle")
        }), $("#research-starter-body").on("show.bs.collapse", function () {
            $("#research-starter-close-icon").removeClass("fa-plus-circle").addClass("fa-times-circle")
        })
    });
var AsyncCollectionMembers = function () {
    var t = '[data-behavior="async-collection-members"]';
    return {
        init: function () {
            var t = this;
            $.each(this.collectionMemberElements(), function () {
                t.replaceCollectionMemberContent($(this))
            })
        },
        replaceCollectionMemberContent: function (e) {
            var n = this,
                t = '<div class="async-placeholder"><h3 class="col-md-9"></h3><p class="col-md-6"></p><p class="col-md-12"></p><p class="col-md-3"></p></div>';
            e.html(t), $.ajax(e.data().collectionMembersPath).success(function (t) {
                e.hide().html(t.html).fadeIn(500), e.find(".image-filmstrip").renderFilmstrip(), e.find('*[data-behavior="preview-filmstrip"]').previewFilmstrip(), n.showAndUpdateDigitalContentCount(t)
            })
        },
        collectionMemberElements: function () {
            return $(t)
        },
        showAndUpdateDigitalContentCount: function (t) {
            $('[data-behavior="display-digital-content-count"][data-document-id="' + t.id + '"]').show();
            var e = $('[data-behavior="update-digital-content-count"][data-document-id="' + t.id + '"]');
            e.text().match(/\d+/) || e.show().text(t.total + " " + (1 < t.total ? e.text() + "s" : e.text()))
        }
    }
}();
Blacklight.onLoad(function () {
        AsyncCollectionMembers.init()
    }), Blacklight.onLoad(function () {
        $("[data-behavior='backend-lookup']").backendLookup()
    }),
    function (i, o, e) {
        function n(t, e) {
            this.element = t, this.options = i.extend({}, e), this._name = a, this.init()
        }

        function r(t, e) {
            var n = i(e).html();
            n += " <strong>finds " + t + " results</strong>", i(e).html(n)
        }
        var a = "backendLookup";
        n.prototype = {
            init: function () {
                var t = this;
                $url = i(t.element).data("lookup"), t.onScreen() ? t.lookupResults() : i(e).on("scroll", function () {
                    t.onScreen() && t.lookupResults()
                })
            },
            onScreen: function () {
                var t = i(this.element),
                    e = {};
                e.top = i(o).scrollTop(), e.bottom = e.top + i(o).height();
                var n = {};
                return n.top = t.offset().top, n.bottom = n.top + t.outerHeight(), n.top <= e.bottom && n.bottom >= e.top
            },
            lookupResults: function () {
                var e = this.element;
                i(e).data(a + "_processed") || (i(e).data(a + "_processed", !0), i.getJSON($url, function (t) {
                    $response = t.response, $total_count = parseInt($response.pages.total_count).toLocaleString(), r($total_count, e)
                }))
            }
        }, i.fn[a] = function (t) {
            return this.each(function () {
                i.data(this, "plugin_" + a) || i.data(this, "plugin_" + a, new n(this, t))
            })
        }
    }(jQuery, window, document),
    function (o) {
        var r = function (t, e) {
            this.$element = o(t), this.options = e, this.paused = !1, this.activeIndex = 0, this.init = function () {
                this.$items = this.$element.find(".item")
            }, this.attachEvents(), this.init()
        };
        r.prototype = {
            slide: function (t) {
                var e = o(t),
                    n = e.find(".frame");
                return this.$items.hide(), e.show(), Math.round(e.height() - n.height()) / 2, this.activeIndex = this.$items.index(t), this.options.autoPlay && !this.paused && this.play(), this
            },
            play: function () {
                this.paused = !1, this.interval && clearInterval(this.interval), this.interval = setInterval(o.proxy(this.next, this), this.options.interval)
            },
            pause: function () {
                return this.paused = !0, this.interval = clearInterval(this.interval), this
            },
            startAt: function (t) {
                this.to(t)
            },
            next: function () {
                return this.to("next")
            },
            to: function (t) {
                return "next" === t && (t = this.activeIndex + 1), "prev" === t && (t = this.activeIndex - 1), this.slide(this.$items[this.getValidIndex(t)])
            },
            getValidIndex: function (t) {
                return (void 0 === t || t > this.$items.length - 1) && (t = 0), t < 0 && (t = this.$items.length - 1), t
            },
            attachEvents: function () {
                var t = this.$element.find(".frame img"),
                    e = this;
                t.on("mouseenter", function () {
                    e.pause()
                }), t.on("mouseleave", function () {
                    e.options.autoPlay && e.play()
                }), o(document).on("click", "[data-slide], [data-slide-to]", function (t) {
                    t.preventDefault(), pos = parseInt(o(this).attr("data-slide-to"), 10) || o(this).attr("data-slide"), "next" !== pos && "prev" !== pos || e.pause(), e.to(pos)
                }), o("#slideshow-modal").on("hidden.bs.modal", function () {
                    e.pause()
                })
            }
        }, r.DEFAULTS = {
            autoPlay: !0,
            interval: 5e3
        }, o.fn.slideshow = function (i) {
            return this.each(function () {
                var t = o(this),
                    e = t.data("slideshow"),
                    n = o.extend({}, r.DEFAULTS, t.data(), "object" == typeof i && i);
                e || t.data("slideshow", e = new r(this, n))
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("#slideshow").slideshow()
    }), Blacklight.onLoad(function () {
        Blacklight.do_hierarchical_facet_expand_contract_behavior()
    }),
    function (e) {
        Blacklight.do_hierarchical_facet_expand_contract_behavior = function () {
            e(Blacklight.do_hierarchical_facet_expand_contract_behavior.selector).each(Blacklight.hierarchical_facet_expand_contract)
        }, Blacklight.do_hierarchical_facet_expand_contract_behavior.selector = "li.h-node", Blacklight.hierarchical_facet_expand_contract = function () {
            var t = e(this);
            e("ul", this).each(function () {
                t.addClass("twiddle"), 0 == e("span.selected", this).length ? e(this).hide() : t.addClass("twiddle-open")
            }), t.click(function (t) {
                t.target == this && (e(this).toggleClass("twiddle-open"), e(this).children("ul").slideToggle())
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        function t() {
            $activePaginateBtn = $("#course-reserves-browse_wrapper").find("li.paginate_button.active"), $activePaginateBtn.find("a").replaceWith(function () {
                return $("<span />").append($(this).contents())
            }), $nextPaginateBtn = $("#course-reserves-browse_wrapper").find("li.paginate_button.next").detach(), $previousPaginateBtn = $("#course-reserves-browse_wrapper").find("li.paginate_button.previous"), $previousPaginateBtn.after($nextPaginateBtn)
        }
        var e = $("#course-reserves-browse").DataTable({
            sDom: '<<"row table-top-bar"<"col-md-6"f><"col-md-6"<<"col-md-6"i><"col-md-6"l>>>><t><"row"<"col-md-12"p>>>',
            language: {
                info: "_START_ to _END_ of _TOTAL_ reserve lists",
                lengthMenu: "_MENU_ per page",
                search: "Search by course ID, description, or instructor ",
                paginate: {
                    previous: "<i class='fa fa-arrow-left'></i> Previous",
                    next: "Next <i class='fa fa-arrow-right'></i>"
                }
            },
            iDisplayLength: 25
        });
        t(), e.on("draw", function () {
            t()
        })
    }),
    function (t) {
        "use strict";
        var e;
        e = {
            init: function (t) {
                var e = $(t),
                    n = e.data(),
                    i = e.find("input.range_begin"),
                    o = e.find("input.range_end"),
                    r = n.edsDateMin,
                    a = n.edsDateMax,
                    s = n.edsDateBegin,
                    l = n.edsDateEnd,
                    u = $(e.find(".eds-slider")[0]),
                    c = $('<input type="text" data-slider-placeholder="true" style="width:100%;">').appendTo(u);
                c.slider !== undefined && c.slider({
                    min: n.edsDateMin,
                    max: n.edsDateMax,
                    value: [s, l],
                    tooltip: "hide"
                }), u.find(".slider").css("width", "100%"), i.val(s), o.val(l), c.slider().on("slide", function (t) {
                    i.val(t.value[0]), o.val(t.value[1])
                }), i.change(function () {
                    var t = BlacklightRangeLimit.parseNum($(this).val());
                    (isNaN(t) || t < r) && (t = r);
                    var e = c.data("slider").getValue();
                    e[0] = t, c.slider("setValue", e)
                }), o.change(function () {
                    var t = BlacklightRangeLimit.parseNum($(this).val());
                    (isNaN(t) || a < t) && (t = a);
                    var e = c.data("slider").getValue();
                    e[1] = t, c.slider("setValue", e)
                })
            }
        }, t.EdsRangeLimit = e
    }(this), Blacklight.onLoad(function () {
        $(".eds_range_slider").each(function (t, e) {
            EdsRangeLimit.init(e)
        })
    }),
    function (c) {
        c.fn.embedBrowse = function () {
            var e = 194;
            return GalleryDocs = function (t) {
                this.item = t, this.embedViewport = c(t.data("embed-viewport")), this.startDoc = t.data("start"), this.embedContainer = this.embedViewport.find(".gallery"), this.url = t.data("url"), this.browseUrl = t.data("index-path"), this.docs = [], this.currentDoc = this.startDoc
            }, GalleryDocs.prototype.updateDocs = function () {
                this.docs = this.embedViewport.find(".gallery-document").map(function () {
                    return c(this).data("doc-id")
                })
            }, GalleryDocs.prototype.hasContent = function () {
                return !!this.docs.length
            }, GalleryDocs.prototype.docById = function () {
                return this.embedViewport.find('.gallery-document[data-doc-id="' + this.currentDoc + '"]')
            }, GalleryDocs.prototype.currentPosition = function () {
                return c.inArray(this.currentDoc, this.docs)
            }, GalleryDocs.prototype.calculateDocsPerView = function () {
                var t = c(this.embedViewport).outerWidth();
                this.docsPerView = Math.floor(t / e), this.scrollOffset = t / 2 - e / 2 - e
            }, GalleryDocs.prototype.addBrowseLinkDivs = function () {
                var t = '<div class="gallery-document"><div class="browse-link"><a href="';
                t += this.browseUrl, t += '">Continue to full page</a></div></div>', this.embedContainer.append(t), this.embedContainer.prepend(t)
            }, this.each(function () {
                function t() {
                    l.item.on("click", function (t) {
                        t.preventDefault(), u.attr("href", l.browseUrl), e(), n()
                    }), r(), c('[data-behavior="embed-browse"]').first().click()
                }

                function e() {
                    c('[data-behavior="embed-browse"]').each(function (t, e) {
                        var n = c(e);
                        if (n.removeClass("active"), n[0] !== l.item[0]) {
                            if (n.hasClass("collapsed")) return;
                            n.trigger("click")
                        }
                    })
                }

                function n() {
                    l.item.hasClass("collapsed") ? (l.item.removeClass("collapsed").addClass("active"), l.item.attr("aria-expanded", "true"), l.embedViewport.attr("aria-expanded", "true"), l.embedViewport.slideDown(function () {
                        l.calculateDocsPerView(), i()
                    })) : (l.item.addClass("collapsed"), l.item.attr("aria-expanded", "false"), l.embedViewport.slideUp(function () {}), l.embedViewport.attr("aria-expanded", "false"))
                }

                function i() {
                    l.hasContent() || PreviewContent.append(l.url, l.embedContainer).done(function () {
                        l.updateDocs(), Blacklight.do_bookmark_toggle_behavior(), c(".gallery-document h3.index_title a").trunk8({
                            lines: 4
                        }), o(), l.embedContainer.find('*[data-behavior="preview-gallery"]').previewEmbedBrowse(), l.addBrowseLinkDivs(), a()
                    })
                }

                function o() {
                    var t = l.embedContainer.find(".preview-container");
                    l.embedViewport.append(t)
                }

                function r() {}

                function a() {
                    var t, e = l.docById();
                    e.length && (t = e.position().left - e.parent().width() / 2 + e.innerWidth() / 2, e.addClass("current-document"), l.embedViewport.find(".gallery").animate({
                        scrollLeft: t
                    }, 200))
                }
                var s = c(this),
                    l = new GalleryDocs(s),
                    u = c(".view-full-page a");
                t()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $('*[data-behavior="embed-browse"]').embedBrowse()
    });
var FacetOptionsCheckboxes = function () {
    function t() {
        return $(r)
    }

    function e() {
        return t().find(a)
    }

    function n() {
        return t().find(s)
    }

    function i(t) {
        e().each(function () {
            t != $(this).find("a").prop("href") && $(this).find("a").prop("href", "#"), $(this).find('input[type="checkbox"]').prop("disabled", !0)
        })
    }

    function o(t) {
        t.prop("checked", !t.prop("checked"))
    }
    var r = '[data-behavior="facet-options-checkboxes"]',
        a = '[data-behavior="facet-options-checkbox"]',
        s = '[data-behavior="loading-spinner"]';
    return {
        init: function () {
            var n = this;
            e().each(function () {
                var t = $(this),
                    e = $(this).find('input[type="checkbox"]');
                e.on("click", function () {
                    o(e), t.find("a")[0].click()
                }), t.find("a").on("click", function () {
                    e.prop("disabled") || (o(e), n.enableLoadingSpinner(), i($(this).prop("href")))
                })
            })
        },
        enableLoadingSpinner: function () {
            n().show()
        }
    }
}();
Blacklight.onLoad(function () {
        FacetOptionsCheckboxes.init()
    }), Blacklight.onLoad(function () {
        $("#feedback-form").feedbackForm(), $("#connection-form").feedbackForm()
    }),
    function (r, a) {
        function e(t, e) {
            this.element = t, this.options = r.extend({}, e), this._name = o, this.init()
        }

        function n(i, o) {
            o.each(function (t, n) {
                if (location !== n.action) {
                    var e = r(n);
                    e.find("#user_agent").val(navigator.userAgent), e.find("#viewport").val("width:" + a.innerWidth + " height:" + innerHeight), e.on("submit", function (t) {
                        t.preventDefault();
                        var e = r(this).serialize();
                        return r.ajax({
                            url: n.action,
                            data: e,
                            type: "post"
                        }).success(function (t) {
                            s(t) && (r(i).collapse("hide"), r(o)[0].reset()), l(t)
                        }), !1
                    })
                }
            })
        }

        function s(t) {
            switch (t[0][0]) {
                case "success":
                    return !0;
                default:
                    return !1
            }
        }

        function l(t) {
            r.each(t, function (t, e) {
                var n = "<div class='alert alert-" + e[0] + "'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + e[1] + "</div>";
                r("div.flash_messages").html(n)
            })
        }

        function i(t, e) {
            var n = {};
            r.each(e[0].attributes, function (t, e) {
                n[e.nodeName] = e.value
            }), n["class"] = "cancel-link btn btn-link", e.replaceWith(function () {
                return r("<button />", n).append(r(this).contents())
            }), t.find("button.cancel-link").on("click", function (t) {
                t.preventDefault()
            })
        }
        var o = "feedbackForm";
        e.prototype = {
            init: function () {
                var t = r(this.element),
                    e = r(t).find("form");
                i(t, t.find(".cancel-link")), n(t, e), r('*[data-target="#' + this.element.id + '"]').attr("href", "#"), r("span.reporting-from-field").html(location.href), r("input.reporting-from-field").val(location.href), r("#" + this.element.id).on("shown.bs.collapse", function () {
                    e.find(".form-control").first().focus()
                })
            }
        }, r.fn[o] = function (t) {
            return this.each(function () {
                r.data(this, "plugin_" + o) || r.data(this, "plugin_" + o, new e(this, t))
            })
        }
    }(jQuery, window, document),
    function (i) {
        i.fn.homePageFacetCollapse = function () {
            function t(t, n) {
                t.each(function () {
                    i(".home-facet", i(this)).each(function () {
                        var t = i(".panel-heading", i(this)),
                            e = i(t.data("target"));
                        i(window).width() <= "768" ? (t.addClass("collapsed"), e.removeClass("in")) : n && !e.data("toggle-default") && (t.removeClass("collapsed"), e.addClass("in"), e.css("height", "auto"))
                    })
                })
            }
            var e = this;
            i(window).bind("resize", function () {
                t(e, !0)
            }), t(e, !1)
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("[data-home-page-facet-collapse='true']").homePageFacetCollapse()
    }),
    function (s) {
        s.fn.accordionSection = function () {
            return this.each(function () {
                function t() {
                    n.on("click", s.proxy(function (t) {
                        var e = n.find("span.glyphicon");
                        e.hasClass(r) ? (e.removeClass(r).addClass(a), i.show(), o.hide(), i.attr("aria-expanded", !0), s(t.target).attr("aria-expanded", !0)) : (e.removeClass(a).addClass(r), i.hide(), o.show(), i.attr("aria-expanded", !1), s(t.target).attr("aria-expanded", !1))
                    }, this))
                }
                var n = s(this),
                    i = s(n.data("accordion-section-target")),
                    o = s(n.data("accordion-section-target") + "-snippet"),
                    r = "glyphicon-chevron-right",
                    a = "glyphicon-chevron-down";
                t()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("*[data-accordion-section-target]").accordionSection()
    }),
    function (l) {
        l.fn.clearInputText = function () {
            return this.each(function () {
                function t() {
                    a.parent().prepend(s), a.css("padding-right", s.outerWidth()), i(a), e()
                }

                function e() {
                    s.css({
                        left: a.position().left + a.outerWidth() - s.outerWidth(),
                        "line-height": a.outerHeight() + "px"
                    })
                }

                function n() {
                    a.on("input propertychange paste", function () {
                        i(a)
                    }), s.on("click", function () {
                        a.val("").focus(), o()
                    }), l(window).resize(function () {
                        e()
                    })
                }

                function i(t) {
                    0 < t.val().length ? r() : o()
                }

                function o() {
                    s.css("visibility", "hidden")
                }

                function r() {
                    s.css("visibility", "visible")
                }
                var a = l(this),
                    s = l('<a class="clear-input-text"><span class="sr-only">Clear search box</span><i class="fa fa-times-circle"></i></a>');
                t(), n()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("#search-navbar input#q.search_q.q.form-control").clearInputText()
    }),
    function (s) {
        s.fn.renderFilmstrip = function () {
            return this.each(function () {
                function t() {
                    var t = 0;
                    i = r.find(".viewport"), o = i.find(".container-images"), (a = o.find("li a img")).width(r.data("thumb-width")).height(r.data("thumb-height")), t = (a.length + 1) * (r.data("thumb-width") + 10), o.width(t).height(r.data("thumb-height")), s.each(a, function () {
                        var t = s(this);
                        t.prop("alt", t.data("alt")), t.removeAttr("data-alt")
                    }), n(), e()
                }

                function e() {
                    o.find("li").each(function () {
                        var t = s(this),
                            e = t.find("a img").first();
                        0 < t.position().left + e.width() && t.position().left < i.width() && e.attr("src", e.data("url"))
                    })
                }

                function n() {
                    i.scrollStop(function () {
                        e()
                    }), s(window).resize(function () {
                        e()
                    })
                }
                var i, o, r = s(this),
                    a = [];
                t()
            })
        }
    }(jQuery), jQuery.fn.scrollStop = function (n) {
        $(this).scroll(function () {
            var t = this,
                e = $(t);
            e.data("scrollTimeout") && clearTimeout(e.data("scrollTimeout")), e.data("scrollTimeout", setTimeout(n, 250, t))
        })
    }, Blacklight.onLoad(function () {
        $(".image-filmstrip").renderFilmstrip()
    }),
    function (l) {
        l.fn.libraryH3lp = function () {
            return this.each(function () {
                function t() {
                    e()
                }

                function e() {
                    var t = s.split("@");
                    l.ajax({
                        url: "https://libraryh3lp.com/presence/jid/" + t[0] + "/" + t[1] + "/js?cb=?",
                        dataType: "jsonp"
                    }).done(function () {
                        l.each(jabber_resources, function (t, e) {
                            "available" === e.show ? n() : i()
                        })
                    })
                }

                function n() {
                    a.removeClass("image-icon-message-away"), a.addClass("image-icon-message-available"), r.removeClass("disabled"), o.on("click", function (t) {
                        t.preventDefault(), window.open("//libraryh3lp.com/chat/" + s + "?skin=16208&sounds=true", "chat", "resizable=1,width=420,height=400")
                    })
                }

                function i() {
                    a.removeClass("image-icon-message-available"), a.addClass("image-icon-message-away"), r.addClass("disabled"), o.off("click"), o.on("click", function (t) {
                        t.preventDefault()
                    })
                }
                var o = l(this),
                    r = o.find("a").first(),
                    a = o.find("span.image-icon"),
                    s = o.data("jid");
                t()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("[data-library-h3lp]").libraryH3lp()
    }),
    function (u) {
        u.fn.liveLookup = function () {
            function t() {
                u.getJSON(n, function (t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = JSON.parse(t[e]),
                            o = u("[data-barcode='" + i.barcode + "']"),
                            r = u(o.data("status-target"), o),
                            a = u(".current-location", o),
                            s = r.next(".status-text");
                        if (i.current_location && a.html(i.current_location), i.due_date && a.append(" Due " + i.due_date), i.due_date && (r.hasClass("unknown") || r.hasClass("page")) && (r.removeClass("unknown"), r.removeClass("page"), r.addClass("unavailable"), s.text(""), r.attr("title") && r.attr("title", s.data("unavailable-text")), o.data("request-url"))) {
                            var l = u("<a data-behavior='requests-modal' rel='nofollow' class='btn btn-default btn-xs request-button' href='" + o.data("request-url") + "'>Request</a>");
                            u(".request-link", o).html(l), l.requestsModal()
                        }!i.due_date && 0 < o.length && r.hasClass("unknown") && (r.removeClass("unknown"), r.addClass("available"), s.text(s.data("available-text")), r.attr("title") && r.attr("title", s.data("available-text")))
                    }
                })
            }

            function e(t) {
                var e = u("[data-live-lookup-url]").data("live-lookup-url"),
                    n = [],
                    o = r(t);
                for (i = 0; i < o.length; i++) n.push("ids[]=" + o[i]);
                return e + "?" + n.join("&")
            }

            function r(t) {
                var e = [];
                return u("[data-live-lookup-id]", t).each(function () {
                    e.push(u(this).data("live-lookup-id"))
                }), u.unique(e)
            }
            var n = e(this);
            if (0 < u("[data-live-lookup-url]").length) return t()
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("body").liveLookup()
    }), jQuery, $.fn.longList = function () {
        return this.each(function () {
            function t() {
                5 < n.length && (n.hide().slice(0, 5).show(), o.on("click", function (t) {
                    t.preventDefault(), n.fadeIn(), o.hide(), r.fadeIn()
                }), r.on("click", function (t) {
                    t.preventDefault(), n.hide().slice(0, 5).show(), r.hide(), o.fadeIn()
                }), $googleBooks = e.find("li>div.google-books, .google-books"), 0 < $googleBooks.length ? $googleBooks.before(o) : e.append(o), r.insertAfter(o).hide())
            }
            var e = $(this),
                n = e.children().not(".google-books").filter(function () {
                    return 0 === $(this).find("div.google-books").length
                }),
                i = e.data("list-type"),
                o = $('<button class="btn btn-default btn-xs">show all<span class="sr-only"> at ' + i + "</span></button>"),
                r = $('<button class="btn btn-default btn-xs">show less<span class="sr-only"> at ' + i + "</span></button>");
            t()
        })
    }, Blacklight.onLoad(function () {
        $("[data-long-list]").longList()
    }),
    function (o) {
        "use strict";

        function e(t, e) {
            n = o(t), this.options = o.extend({}, r, e), this._defaults = r, this._name = i, this.init()
        }
        var n, i = "managedPurl",
            r = {};
        e.prototype = {
            init: function () {
                this.embedIframe(n.find("li").first()), this.setupListeners()
            },
            setupListeners: function () {
                var t = this;
                n.find("li").on("click", function () {
                    n.find("li").removeClass("active"), t.embedIframe(o(this))
                })
            },
            embedIframe: function (t) {
                t.addClass("active");
                var e = t.data(),
                    n = o(".managed-purl-embed"),
                    i = '<iframe src="' + e.embedProvider.replace(/\/embed$/, "/iframe") + "?url=" + e.embedTarget + '&hide_title=true&maxheight=500" frameborder=0 width="100%" scrolling="no" allowfullscreen=true style="height: 520px;"><iframe>';
                n.html(i)
            }
        }, o.fn[i] = function (t) {
            return this.each(function () {
                o.data(this, "plugin_" + i) || o.data(this, "plugin_" + i, new e(this, t))
            })
        }
    }(jQuery, window, document), Blacklight.onLoad(function () {
        $(".managed-purl-panel").managedPurl()
    }),
    function (e) {
        e.fn.makeElementClickable = function () {
            return this.each(function () {
                var t = e(this).data("no-link-href");
                e(this).css("cursor", "pointer").on("click.no-link", function () {
                    window.location = t
                })
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("[data-no-link-href]").makeElementClickable()
    }),
    function (m) {
        m.fn.plugGoogleBookContent = function () {
            function t() {
                for (var t = n(), e = t.length; 0 < e;) p.push(t.splice(0, d)), e = t.length;
                i()
            }

            function n() {
                return h.find(e)
            }

            function i() {
                m.each(p, function (t, e) {
                    var n = l(e),
                        i = f + n;
                    m.ajax({
                        type: "GET",
                        url: i,
                        contentType: "application/json",
                        dataType: "jsonp",
                        success: function (t) {
                            o(t)
                        },
                        error: function (t) {
                            console.log(t)
                        }
                    })
                })
            }

            function o(i) {
                m.each(n(), function (t, e) {
                    var n = r(i, e);
                    void 0 !== n && (a(n.bibkey, n.data), s(n.bibkey, n.data))
                })
            }

            function r(n, t) {
                var i, e = m(t),
                    o = e.data("oclc").split(","),
                    r = e.data("lccn").split(","),
                    a = e.data("isbn").split(",");
                return m.each(o, function (t, e) {
                    if (n[e] && "undefined" != typeof n[e].thumbnail_url) return !(i = {
                        bibkey: e,
                        data: n[e]
                    })
                }), void 0 === i && m.each(r, function (t, e) {
                    if (n[e] && "undefined" != typeof n[e].thumbnail_url) return !(i = {
                        bibkey: e,
                        data: n[e]
                    })
                }), void 0 === i && m.each(a, function (t, e) {
                    if (n[e] && "undefined" != typeof n[e].thumbnail_url) return !(i = {
                        bibkey: e,
                        data: n[e]
                    })
                }), i
            }

            function a(t, e) {
                if ("undefined" != typeof e.thumbnail_url) {
                    var n = e.thumbnail_url,
                        i = "img." + t;
                    n = (n = n.replace(/zoom=5/, "zoom=1")).replace(/&?edge=curl/, "");
                    var o = h.find(i);
                    void 0 === o.attr("src") && (o.attr("src", n).removeClass("hide").addClass("show"), o.parent().parent().find("span.fake-cover").addClass("hide"))
                }
            }

            function s(t, r) {
                if ("undefined" != typeof r.info_url) {
                    var e = m.unique(h.find(".google-books." + t));
                    m.each(e, function (t, e) {
                        var n = m(e),
                            i = n.find(".full-view"),
                            o = n.find(".limited-preview");
                        "full" === r.preview ? (i.attr("href", r.preview_url), c(n, i), u(n, ".panel-online")) : "partial" !== r.preview && "noview" !== r.preview || (o.attr("href", r.preview_url), u(n, ".panel-related"))
                    })
                }
            }

            function l(t) {
                var o = "";
                return m.each(t, function () {
                    var t = m(this),
                        e = t.data("isbn") || "",
                        n = t.data("oclc") || "",
                        i = t.data("lccn") || "";
                    o += [e, n, i].join(",") + ","
                }), o = (o = (o = o.replace(/,{2,}/, ",")).replace(/^,/, "")).replace(/,$/, "")
            }

            function u(t, e) {
                var n = t.parents(e);
                0 < n.length && (n.removeClass("hide").addClass("show"), t.show())
            }

            function c(t) {
                $resultsOnlineSection = t.parents('[data-behavior="results-online-section"]'), 0 < $resultsOnlineSection.length && ($resultsOnlineSection.removeClass("hide").addClass("show"), t.removeClass("hide").addClass("show"), t.parents("[data-behavior='truncate-results-online-links']").responsiveTruncate({
                    lines: 2,
                    more: "more...",
                    less: "less..."
                }))
            }
            var h, d = 15,
                f = "https://books.google.com/books?jscmd=viewapi&bibkeys=",
                e = "img.cover-image",
                p = [];
            return this.each(function () {
                h = m(this), t()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("body").plugGoogleBookContent()
    }),
    function (c) {
        c.fn.previewBrief = function () {
            return this.each(function () {
                function t() {
                    l.addClass("preview").empty(), l.append('<div class="preview-arrow"></div>'), PreviewContent.append(u, l), o.addClass("preview-open").html("Close"), r.hide(), l.removeClass("hidden"), l.show()
                }

                function e() {
                    a.find(o).on("click", function () {
                        c(this).hasClass("preview-open") ? n() : t()
                    })
                }

                function n() {
                    l.removeClass("preview").hide(), r.show(), o.removeClass("preview-open").html("Preview")
                }

                function i() {
                    o = a.find('*[data-behavior="preview-button-trigger"]'), r = a.find(".brief-container .col-md-8")
                }
                var o, r, a = c(this),
                    s = a.data("preview-target"),
                    l = c(s),
                    u = a.data("preview-url");
                i(), e()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $('*[data-behavior="preview-brief"]').previewBrief()
    }),
    function (f) {
        f.fn.previewEmbedBrowse = function () {
            return this.each(function () {
                function t() {
                    var t = h.data("preview-url");
                    d.addClass("preview").empty(), PreviewContent.append(t, d), d.css("display", "inline-block"), d.append(u).show(), e(d), l.html("Close"), r(), l.addClass("preview-open")
                }

                function e(t) {
                    t.append(c);
                    var e = t.width() - c.width() - 1,
                        n = parseInt(h.offset().left + h.width() / 2 - t.offset().left);
                    n < 0 && (n = 0), e < n && (n = e), c.css("left", n)
                }

                function n() {
                    h.find(l).on("click", f.proxy(function () {
                        o() ? a() : t()
                    }, this)), f("#content").on("click", f.proxy(function (t) {
                        i(t) || void 0 !== f(t.target).data("accordion-section-target") || a()
                    }, this))
                }

                function i(t) {
                    return 0 < f(t.target).parents(".preview-container").length || t.target === l[0]
                }

                function o() {
                    return !!l.hasClass("preview-open")
                }

                function r() {
                    d.find(u).on("click", f.proxy(function () {
                        a()
                    }, this))
                }

                function a() {
                    d.removeClass("preview"), l.removeClass("preview-open"), d.hide(), l.html("Preview")
                }

                function s() {
                    l = h.find('*[data-behavior="preview-button-trigger"]'), u = f('<a class="preview-close"><span class="glyphicon glyphicon-remove"></span></a>'), c = f('<div class="preview-arrow"></div>')
                }
                var l, u, c, h = f(this),
                    d = (f(h.data("doc-id"))[0], f(h.data("preview-target")));
                s(), n()
            })
        }
    }(jQuery),
    function (g) {
        g.fn.previewFilmstrip = function () {
            return this.each(function () {
                function t() {
                    f.append(s).append(l), i()
                }

                function e() {
                    var t = f.data("preview-url"),
                        e = g('<div class="preview-content"></div>');
                    p.addClass("preview").empty(), m && n(p), PreviewContent.append(t, e), p.append(e).append(u).show(), d.css("overflow-x", "hidden"), o()
                }

                function n(t) {
                    t.append(c), maxLeft = t.width() - c.width() - 1, arrowLeft = parseInt(f.position().left + f.width() / 2 - 20), arrowLeft < 0 && (arrowLeft = 0), arrowLeft > maxLeft && (arrowLeft = maxLeft), c.css("left", arrowLeft)
                }

                function i() {
                    f.on("mouseenter", function () {
                        g(this).find(s).hide(), g(this).find(l).fadeIn("fast")
                    }), f.on("mouseleave", function () {
                        g(this).find(l).hide(), g(this).find(s).show()
                    }), f.find(s).on("click", g.proxy(function () {
                        e()
                    }, this)), f.find(l).on("click", g.proxy(function () {
                        e()
                    }, this)), h.find(".prev, .next").on("click", g.proxy(function () {
                        r()
                    }, this))
                }

                function o() {
                    p.find(u).on("click", g.proxy(function () {
                        r()
                    }, this))
                }

                function r() {
                    d.css("overflow-x", "scroll"), p.empty().hide()
                }

                function a() {
                    s = g("<div/>").addClass("preview-trigger-btn preview-opacity").html('<span class="glyphicon glyphicon-chevron-down small">'), l = g("<div/>").addClass("preview-trigger-focus preview-opacity").html('Preview <span class="glyphicon glyphicon-chevron-down small">'), u = g('<a class="preview-close"><span class="glyphicon glyphicon-remove"></span></a>'), c = g('<div class="preview-arrow"></div>'), h = f.closest(".image-filmstrip"), d = h.find(".viewport")
                }
                var s, l, u, c, h, d, f = g(this),
                    p = g(f.data("preview-target")),
                    m = !0;
                a(), t()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $('*[data-behavior="preview-filmstrip"]').previewFilmstrip()
    }),
    function (y) {
        y.fn.previewGallery = function () {
            return this.each(function () {
                function t() {
                    var t = g.data("preview-url");
                    v.addClass("preview").empty(), PreviewContent.append(t, v), e(v), v.css("display", "inline-block"), v.append(h).show(), c.html("Close"), r(), c.addClass("preview-open")
                }

                function e(t) {
                    t.append(d), maxLeft = t.width() - d.width() - 1, arrowLeft = parseInt(g.position().left + g.width() / 2 - 20), arrowLeft < 0 && (arrowLeft = 0), arrowLeft > maxLeft && (arrowLeft = maxLeft), d.css("left", arrowLeft)
                }

                function n() {
                    g.find(c).on("click", y.proxy(function () {
                        o() ? a() : t()
                    }, this)), y("#documents").on("click", y.proxy(function (t) {
                        i(t) || a()
                    }, this))
                }

                function i(t) {
                    return 0 < y(t.target).parents(".preview-container").length || t.target === c[0]
                }

                function o() {
                    return !!c.hasClass("preview-open")
                }

                function r() {
                    v.find(h).on("click", y.proxy(function () {
                        a()
                    }, this))
                }

                function a() {
                    v.removeClass("preview"), c.removeClass("preview-open"), v.hide(), c.html("Preview")
                }

                function s() {
                    var t = y("#documents").width();
                    return Math.floor(t / m)
                }

                function l() {
                    var t = y(".preview-container"),
                        e = t.index(v) + 1;
                    if ((p = s()) !== NaN && 0 !== p && e % p != 0) {
                        for (; e % p != 0;) e++;
                        e > t.length && (e = t.length);
                        v.detach();
                        y(f[e - 1]).after(v)
                    }
                }

                function u() {
                    m = g.outerWidth() + 10, c = g.find('*[data-behavior="preview-button-trigger"]'), h = y('<a class="preview-close"><span class="glyphicon glyphicon-remove"></span></a>'), d = y('<div class="preview-arrow"></div>'), f = y(".gallery-document"), l()
                }
                var c, h, d, f, p, m, g = y(this),
                    v = (y(g.data("doc-id"))[0], y(g.data("preview-target")));
                u(), n()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $('*[data-behavior="preview-gallery"]').previewGallery()
    }), jQuery, $.fn.purlEmbed = function () {
        return this.each(function () {
            function t() {
                $.getJSON(n, function (t) {
                    null !== t && e.html(t.html)
                })
            }
            var e = $(this),
                n = e.data("embed-url");
            t()
        })
    }, Blacklight.onLoad(function () {
        $('[data-behavior="purl-embed"]').purlEmbed()
    }), jQuery, $.fn.requestsModal = function () {
        return this.each(function () {
            function t() {
                g.on("click", function (t) {
                    t.preventDefault(), e()
                })
            }

            function e() {
                p() || (o(), i()), n()
            }

            function n() {
                h().modal("show")
            }

            function i() {
                $("body").append(m()), r(), a()
            }

            function o() {
                $(".requests-modal").each(function () {
                    $(this).remove()
                })
            }

            function r() {
                f().on("click", function () {
                    h().modal("hide"), h().remove()
                })
            }

            function a() {
                var n;
                $(window).on("message onmessage", function (t) {
                    null !== n && window.clearTimeout(n);
                    var e = t.originalEvent.data;
                    l(e.contentHeight), u(e.successPage), c(e.closeModal), n = window.setTimeout(function () {
                        s()
                    }, 2500)
                })
            }

            function s() {
                d().height("900px")
            }

            function l(t) {
                var e = d().height(),
                    n = parseInt(t, 10);
                e != n && 0 < t && d().height(n + "px")
            }

            function u(t) {
                t && f().text("Close")
            }

            function c(t) {
                t && h().modal("hide")
            }

            function h() {
                return $('[data-request-modal-url="' + v + '"]')
            }

            function d() {
                return h().find("iframe")
            }

            function f() {
                return h().find('[data-behavior="cancel-link"]')
            }

            function p() {
                return 0 < h().length
            }

            function m() {
                return ['<div class="modal requests-modal" tabindex="-1" role="modal" data-request-modal-url="' + v + '">', '<div class="modal-dialog">', '<div class="modal-content">', '<div class="modal-body">', '<iframe width="100%" height="90%" frameborder="0" scrolling="no" src="' + y + '" />', '<div class="form-group cancel-footer">', '<button data-behavior="cancel-link" class="cancel-link btn btn-link">Cancel</button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join("\n")
            }
            var g = $(this),
                v = g.attr("href"),
                y = v + "&modal=true";
            t()
        })
    }, Blacklight.onLoad(function () {
        $('[data-behavior="requests-modal"]').requestsModal()
    }),
    function (u) {
        u.fn.rotateHelper = function (l) {
            return this.each(function () {
                function t() {
                    var t = a.parent(),
                        e = u(a.data("target"));
                    return 0 !== e.length && (t = e), t
                }

                function e() {
                    var t = a,
                        e = a.find(".icon-to-rotate");
                    return 0 !== e.length && (t = e), t
                }

                function n() {
                    return r = s, void 0 !== l && "90cw" === l && (r = s), r
                }
                var i, o, r, a = u(this),
                    s = "search-navbar-dropdown-btn-rotate-90";
                r = n(), o = t(), i = e(), o.on("show.bs.collapse", function () {
                    i.addClass(r)
                }), o.on("show.bs.dropdown", function () {
                    i.addClass(r)
                }), o.on("hide.bs.collapse", function () {
                    i.removeClass(r)
                }), o.on("hide.bs.dropdown", function () {
                    i.removeClass(r)
                })
            })
        }
    }(jQuery),
    function (s) {
        s.fn.addSideNavMinimap = function () {
            var a = s(".side-nav-minimap");
            return this.each(function () {
                function t() {
                    e(), n(), o()
                }

                function e() {
                    a.find("li button").each(function () {
                        var t = s(this),
                            e = r.find("#" + t.data("target-id"));
                        if (0 !== e.length) {
                            var n = Math.round(e.offset().top);
                            e.scrollspy({
                                min: n,
                                max: n + s(this).height(),
                                onEnter: function () {
                                    i(t)
                                }
                            }), t.on("click", function () {
                                s(window).scrollTop(e.offset().top + 1), i(s(this))
                            })
                        } else t.hide()
                    })
                }

                function i(t) {
                    a.find("li button").removeClass("active"), t.addClass("active")
                }

                function n() {
                    var t = Math.round((s(window).height() - a.outerHeight()) / 2);
                    a.css({
                        top: t + "px"
                    })
                }

                function o() {
                    document.body.scrollHeight > s("body").height() ? a.show() : a.hide()
                }
                var r = s("body");
                s(window).resize(function () {
                    t()
                }), t()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("#content").addSideNavMinimap()
    }),
    function (l) {
        l.fn.stackMap = function () {
            return this.each(function () {
                function e(t) {
                    var e = t.results.maps;
                    a.find(".callnumber").html(t.results.callno), l.each(e, function (t, e) {
                        var n = s.clone(),
                            i = (n.find(".range-info"), n.find(".zoom-controls"));
                        e.ranges[0];
                        a.find(".library").html(e.library), a.find(".floorname").html(e.floorname), n.find(".osd").attr("id", "osd-" + t), n.find(".text-directions").html(e.directions), i.find(".zoom-in").attr("id", "zoom-in-" + t), i.find(".zoom-out").attr("id", "zoom-out-" + t), i.find(".zoom-fit").attr("id", "zoom-fit-" + t), s.replaceWith(n), o(e, t, i), r(t)
                    })
                }

                function o(t, e, n) {
                    var i = L.map("osd-" + e, {
                            crs: L.CRS.Simple,
                            minZoom: -2,
                            zoomControl: !1,
                            attributionControl: !1
                        }),
                        o = [
                            [0, 0],
                            [t.height, t.width]
                        ];
                    L.imageOverlay(t.mapurl + "&marker=1&type=.png", o).addTo(i);
                    i.fitBounds(o), n.find(".zoom-in").on("click", function (t) {
                        t.preventDefault(), i.zoomIn()
                    }), n.find(".zoom-out").on("click", function (t) {
                        t.preventDefault(), i.zoomOut()
                    }), n.find(".zoom-fit").on("click", function (t) {
                        t.preventDefault(), i.fitBounds(o)
                    })
                }

                function r() {
                    a.find(".show-description a").click(function (t) {
                        var e = l(this),
                            n = e.find(".text-swap"),
                            i = e.parents(".map-template"),
                            o = i.find(".osd"),
                            r = i.find(".text-directions"),
                            a = i.find(".zoom-controls");
                        /show/i.test(n.text()) ? (n.text("Hide"), o.hide(), a.css("visibility", "hidden"), r.show()) : (n.text("Show"), o.show(), a.css("visibility", "visible"), r.hide()), t.preventDefault()
                    })
                }
                var a = l(this),
                    t = a.data("stackmap-url"),
                    n = a.data("location"),
                    s = a.find(".map-template"),
                    i = {
                        callno: a.data("callnumber"),
                        library: a.data("library"),
                        location: n
                    };
                l.getJSON(t + "?callback=?", i, function (t) {
                    "OK" === t.stat && 0 < t.results.maps.length ? e(t) : a.html("").html("<p>No map available for this item</p>")
                })
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("*[data-behavior=stackmap]").stackMap(), $("#ajax-modal").on("shown.bs.modal", function () {
            $("*[data-behavior=stackmap]").stackMap()
        })
    }), $(document).on("page:before-change", function () {
        $("body").css("cursor", "wait")
    }), $(document).on("page:change", function () {
        $("body").css("cursor", "auto")
    }), Blacklight.onLoad(function () {
        $("[data-hours-route]").each(function (t, e) {
            $(e).locationHours()
        })
    }),
    function (o) {
        function e(t, e) {
            this.element = t, this.options = o.extend({}, e), this._name = u, this.init()
        }

        function n(t) {
            return o(t).find(".location-hours-today")
        }

        function r(t, e) {
            return "12a" == t && "12a" == e ? "Closed today" : "12a" == t && "11:59p" == e ? "Open 24hr today" : "Today's hours: " + t + " - " + e
        }

        function a(t) {
            var e = new Date(t.opens_at);
            return e = i(e.getHours(), e.getMinutes())
        }

        function s(t) {
            var e = new Date(t.closes_at);
            return e = i(e.getHours(), e.getMinutes())
        }

        function i(t, e) {
            var n = 12 <= t && 24 !== t ? "p" : "a";
            return (0 === (t %= 12) ? "12" : t.toString()) + l(e) + n
        }

        function l(t) {
            return 0 === t ? "" : 1 === t.toString().length ? ":0" + t : ":" + t
        }
        var u = "locationHours";
        e.prototype = {
            init: function () {
                this.element;
                var i = n(this.element),
                    t = o(this.element).data("hours-route");
                o.getJSON(t, function (t) {
                    if (t.error) o(i).html(t.error);
                    else if (null !== t) {
                        var e = a(t[0]),
                            n = s(t[0]);
                        o(i).html(r(e, n))
                    }
                })
            }
        }, o.fn[u] = function (t) {
            return this.each(function () {
                o.data(this, "plugin_" + u) || o.data(this, "plugin_" + u, new e(this, t))
            })
        }
    }(jQuery, window, document);
var PreviewContent = function () {
    function i(t, e, n) {
        var i = window.previewCache[t];
        s && void 0 !== i ? r(e, i, n) : o(t, e, n)
    }

    function o(n, e, i) {
        var t = $.ajax({
            url: n,
            type: "GET",
            dataType: "html"
        });
        t.done(function (t) {
            r(e, t, i), s && (window.previewCache[n] = t)
        }), t.fail(function (t, e) {
            console.log("GET request for " + n + " failed: " + e)
        })
    }

    function r(t, e, n) {
        switch (a) {
            case "append":
                t.append(e).plugGoogleBookContent().find(".image-filmstrip").renderFilmstrip(), t.find("*[data-accordion-section-target]").accordionSection(), t.find("[data-behavior='trunk8']").trunk8({
                    tooltip: !1
                }), t.find("[data-live-lookup-url]").liveLookup(), n.resolve(e);
                break;
            case "prepend":
                t.prepend(e).plugGoogleBookContent().find(".image-filmstrip").renderFilmstrip(), t.find("*[data-accordion-section-target]").accordionSection(), t.find("[data-behavior='trunk8']").trunk8({
                    tooltip: !1
                }), t.find("[data-live-lookup-url]").liveLookup(), n.resolve(e);
                break;
            case "returnOnly":
                n.resolve(e)
        }
    }
    var a, s = !0;
    return window.previewCache = window.previewCache || {}, {
        append: function (t, e) {
            a = "append";
            var n = new $.Deferred;
            return i(t, e, n), n.promise()
        },
        prepend: function (t, e) {
            a = "prepend";
            var n = new $.Deferred;
            return i(t, e, n), n.promise()
        },
        returnOnly: function (t, e) {
            a = "returnOnly";
            var n = new $.Deferred;
            return i(t, e, n), n.promise()
        }
    }
}();
Blacklight.onLoad(function () {
        $('[data-behavior="recent-selections"]').recentSelections()
    }),
    function (i) {
        function e(t, e) {
            this.element = t, this.options = i.extend({}, e), this._name = n, this.updated = !0, this.init()
        }
        var n = "recentSelections";
        e.prototype = {
            init: function () {
                var t = this,
                    e = this.element,
                    n = i(e).data("url");
                i(e).on("show.bs.dropdown", function () {
                    t.updated && t.getRecentSelections(n)
                }), i("input.toggle_bookmark").on("change", function () {
                    t.updated = !0
                })
            },
            getRecentSelections: function (t) {
                var e = this;
                i.ajax({
                    url: t,
                    type: "GET",
                    dataType: "html"
                }).done(function (t) {
                    e.updateLinks(t), e.updateList(t), e.updated = !1
                })
            },
            updateLinks: function (t) {
                "" == i.trim(t) ? (i("li#show-list").addClass("disabled"), i("li#clear-list").addClass("disabled")) : (i("li#show-list").removeClass("disabled"), i("li#clear-list").removeClass("disabled"))
            },
            updateList: function (t) {
                var e = i('[data-attribute="added-list"]');
                0 === e.length ? i("li#show-list").append(t) : e.html(t)
            }
        }, i.fn[n] = function (t) {
            return this.each(function () {
                i.data(this, "plugin_" + n) || i.data(this, "plugin_" + n, new e(this, t))
            })
        }
    }(jQuery, window, document), Blacklight.onLoad(function () {
        $(".document-thumbnail div[data-context-href], .item-thumb div[data-context-href]").addClass("cursor-pointer").on("click.search-context", Blacklight.handleSearchContextMethod)
    }), Blacklight.onLoad(function () {
        $("#search-navbar .navbar-header .dropdown-toggle").rotateHelper(), $(".navbar-toggle").rotateHelper()
    }),
    function (u) {
        u.fn.selectUnSelectAll = function () {
            return this.each(function () {
                function t() {
                    i.on("click", function () {
                        var o = s.is(":visible");
                        bookmarkSelectors = u(l);
                        var r = !1,
                            a = new u.Deferred;
                        bookmarkSelectors.each(function (t, e) {
                            if (!r) {
                                var n = u(e);
                                if (n.is(":checked") !== o) {
                                    var i = n.next("span");
                                    r = !0, n.prop("checked", !o).click(), i.on("DOMSubtreeModified", function () {
                                        a.resolve()
                                    })
                                }
                            }
                        }), u.when(a).done(function () {
                            bookmarkSelectors.each(function (t, e) {
                                var n = u(e);
                                n.is(":checked") !== o && n.prop("checked", !o).click()
                            })
                        }), n()
                    })
                }

                function e() {
                    0 !== u(l + ":checked").length && n()
                }

                function n() {
                    s.toggle(), o.toggle()
                }
                var i = u(this),
                    s = i.find("span.select-all"),
                    o = i.find("span.unselect-all"),
                    l = "input.toggle_bookmark";
                e(), t()
            })
        }
    }(jQuery), Blacklight.onLoad(function () {
        $("#select_all-dropdown").selectUnSelectAll()
    });
var SfxPanel = function () {
    function e(t) {
        $.ajax(t).done(function (t) {
            n(t), i().show()
        }).fail(function () {
            n("Unable to connect to SFX")
        })
    }

    function n(t) {
        o().html(t)
    }

    function i() {
        return $(t)
    }

    function o() {
        return $(r)
    }
    var t = '[data-behavior="sfx-panel"]',
        r = '[data-behavior="sfx-panel-body"]';
    return {
        init: function () {
            if (0 < i().length) {
                var t = i().data("sfx-url");
                t !== undefined && e(t)
            }
        }
    }
}();
Blacklight.onLoad(function () {
    SfxPanel.init()
}), Blacklight.onLoad(function () {
    function t() {
        var t = location.hash.substring(1);
        if (t) {
            var e = $('[href="#' + t + '"]'),
                n = $("#" + t);
            i(n), n.focus(), e.on("click", function () {
                n.focus()
            })
        }
    }

    function i(t) {
        t && e(t) && t.attr("tabIndex", -1)
    }

    function e(t) {
        return !/^(?:a|select|input|button|textarea)$/i.test(t.attr("name"))
    }
    t(), window.addEventListener("hashchange", function () {
        var t = $("#" + location.hash.substring(1));
        t && (i(t), t.focus())
    }, !1)
}), Blacklight.onLoad(function () {
    $('[data-toggle="tooltip"]').tooltip()
}), Blacklight.onLoad(function () {
    $("[data-behavior='metadata-truncate']").responsiveTruncate({
        height: 40,
        more: "more...",
        less: "less..."
    }), $("[data-behavior='truncate-results-online-links']").responsiveTruncate({
        lines: 2,
        more: "more...",
        less: "less..."
    }), $("[data-behavior='truncate']").responsiveTruncate({
        height: 60
    }), $("[data-behavior='trunk8']").trunk8({
        tooltip: !1
    }), $(".gallery-document h3.index_title a").trunk8({
        lines: 4
    })
});
var UpdateHiddenInputsByCheckbox = function () {
    function t() {
        return $(r)
    }

    function e() {
        return $(r + ":checked")
    }

    function o(t) {
        return $(t.data("targetSelector"))
    }

    function n(t) {
        var e = t.prop("id"),
            n = t.prop("name"),
            i = t.prop("value");
        o(t).append($('<input type="hidden" id="hidden_' + e + '" name="' + n + '" value="' + i + '">'))
    }

    function i(t) {
        var e = "#hidden_" + t.prop("id");
        $(e).remove()
    }
    var r = '[data-behavior="update-hidden-inputs-by-checkbox"]';
    return {
        init: function () {
            this.setInitialSelection(), this.addOnChangeBehavior()
        },
        setInitialSelection: function () {
            n(e())
        },
        addOnChangeBehavior: function () {
            t().each(function () {
                var t = $(this);
                t.on("change", function () {
                    t.prop("checked") ? n(t) : i(t)
                })
            })
        }
    }
}();
Blacklight.onLoad(function () {
        UpdateHiddenInputsByCheckbox.init()
    }),
    function (r) {
        r.color = {}, r.color.make = function (t, e, n, i) {
            var o = {};
            return o.r = t || 0, o.g = e || 0, o.b = n || 0, o.a = null != i ? i : 1, o.add = function (t, e) {
                for (var n = 0; n < t.length; ++n) o[t.charAt(n)] += e;
                return o.normalize()
            }, o.scale = function (t, e) {
                for (var n = 0; n < t.length; ++n) o[t.charAt(n)] *= e;
                return o.normalize()
            }, o.toString = function () {
                return 1 <= o.a ? "rgb(" + [o.r, o.g, o.b].join(",") + ")" : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
            }, o.normalize = function () {
                function t(t, e, n) {
                    return e < t ? t : n < e ? n : e
                }
                return o.r = t(0, parseInt(o.r), 255), o.g = t(0, parseInt(o.g), 255), o.b = t(0, parseInt(o.b), 255), o.a = t(0, o.a, 1), o
            }, o.clone = function () {
                return r.color.make(o.r, o.b, o.g, o.a)
            }, o.normalize()
        }, r.color.extract = function (t, e) {
            var n;
            do {
                if ("" != (n = t.css(e).toLowerCase()) && "transparent" != n) break;
                t = t.parent()
            } while (t.length && !r.nodeName(t.get(0), "body"));
            return "rgba(0, 0, 0, 0)" == n && (n = "transparent"), r.color.parse(n)
        }, r.color.parse = function (t) {
            var e, n = r.color.make;
            if (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) return n(parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10));
            if (e = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(t)) return n(parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), parseFloat(e[4]));
            if (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) return n(2.55 * parseFloat(e[1]), 2.55 * parseFloat(e[2]), 2.55 * parseFloat(e[3]));
            if (e = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(t)) return n(2.55 * parseFloat(e[1]), 2.55 * parseFloat(e[2]), 2.55 * parseFloat(e[3]), parseFloat(e[4]));
            if (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) return n(parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16));
            if (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) return n(parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16));
            var i = r.trim(t).toLowerCase();
            return "transparent" == i ? n(255, 255, 255, 0) : n((e = o[i] || [0, 0, 0])[0], e[1], e[2])
        };
        var o = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0]
        }
    }(jQuery),
    function (gt) {
        function vt(t, e) {
            var n = e.children("." + t)[0];
            if (null == n && ((n = document.createElement("canvas")).className = t, gt(n).css({
                    direction: "ltr",
                    position: "absolute",
                    left: 0,
                    top: 0
                }).appendTo(e), !n.getContext)) {
                if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                n = window.G_vmlCanvasManager.initElement(n)
            }
            this.element = n;
            var i = this.context = n.getContext("2d"),
                o = window.devicePixelRatio || 1,
                r = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1;
            this.pixelRatio = o / r, this.resize(e.width(), e.height()), this.textContainer = null, this.text = {}, this._textCache = {}
        }

        function i(g, t, e, i) {
            function T(t, e) {
                e = [ft].concat(e);
                for (var n = 0; n < t.length; ++n) t[n].apply(this, e)
            }

            function n() {
                for (var t = {
                        Canvas: vt
                    }, e = 0; e < i.length; ++e) {
                    var n = i[e];
                    n.init(ft, t), n.options && gt.extend(!0, et, n.options)
                }
            }

            function o(t) {
                gt.extend(!0, et, t), t && t.colors && (et.colors = t.colors), null == et.xaxis.color && (et.xaxis.color = gt.color.parse(et.grid.color).scale("a", .22).toString()), null == et.yaxis.color && (et.yaxis.color = gt.color.parse(et.grid.color).scale("a", .22).toString()), null == et.xaxis.tickColor && (et.xaxis.tickColor = et.grid.tickColor || et.xaxis.color), null == et.yaxis.tickColor && (et.yaxis.tickColor = et.grid.tickColor || et.yaxis.color), null == et.grid.borderColor && (et.grid.borderColor = et.grid.color), null == et.grid.tickColor && (et.grid.tickColor = gt.color.parse(et.grid.color).scale("a", .22).toString());
                var e, n, i, o = g.css("font-size"),
                    r = o ? +o.replace("px", "") : 13,
                    a = {
                        style: g.css("font-style"),
                        size: Math.round(.8 * r),
                        variant: g.css("font-variant"),
                        weight: g.css("font-weight"),
                        family: g.css("font-family")
                    };
                for (i = et.xaxes.length || 1, e = 0; e < i; ++e)(n = et.xaxes[e]) && !n.tickColor && (n.tickColor = n.color), n = gt.extend(!0, {}, et.xaxis, n), (et.xaxes[e] = n).font && (n.font = gt.extend({}, a, n.font), n.font.color || (n.font.color = n.color), n.font.lineHeight || (n.font.lineHeight = Math.round(1.15 * n.font.size)));
                for (i = et.yaxes.length || 1, e = 0; e < i; ++e)(n = et.yaxes[e]) && !n.tickColor && (n.tickColor = n.color), n = gt.extend(!0, {}, et.yaxis, n), (et.yaxes[e] = n).font && (n.font = gt.extend({}, a, n.font), n.font.color || (n.font.color = n.color), n.font.lineHeight || (n.font.lineHeight = Math.round(1.15 * n.font.size)));
                for (et.xaxis.noTicks && null == et.xaxis.ticks && (et.xaxis.ticks = et.xaxis.noTicks), et.yaxis.noTicks && null == et.yaxis.ticks && (et.yaxis.ticks = et.yaxis.noTicks), et.x2axis && (et.xaxes[1] = gt.extend(!0, {}, et.xaxis, et.x2axis), et.xaxes[1].position = "top"), et.y2axis && (et.yaxes[1] = gt.extend(!0, {}, et.yaxis, et.y2axis), et.yaxes[1].position = "right"), et.grid.coloredAreas && (et.grid.markings = et.grid.coloredAreas), et.grid.coloredAreasColor && (et.grid.markingsColor = et.grid.coloredAreasColor), et.lines && gt.extend(!0, et.series.lines, et.lines), et.points && gt.extend(!0, et.series.points, et.points), et.bars && gt.extend(!0, et.series.bars, et.bars), null != et.shadowSize && (et.series.shadowSize = et.shadowSize), null != et.highlightColor && (et.series.highlightColor = et.highlightColor), e = 0; e < et.xaxes.length; ++e) p(st, e + 1).options = et.xaxes[e];
                for (e = 0; e < et.yaxes.length; ++e) p(lt, e + 1).options = et.yaxes[e];
                for (var s in dt) et.hooks[s] && et.hooks[s].length && (dt[s] = dt[s].concat(et.hooks[s]));
                T(dt.processOptions, [et])
            }

            function r(t) {
                tt = a(t), l(), u()
            }

            function a(t) {
                for (var e = [], n = 0; n < t.length; ++n) {
                    var i = gt.extend(!0, {}, et.series);
                    null != t[n].data ? (i.data = t[n].data, delete t[n].data, gt.extend(!0, i, t[n]), t[n].data = i.data) : i.data = t[n], e.push(i)
                }
                return e
            }

            function f(t, e) {
                var n = t[e + "axis"];
                return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n
            }

            function C() {
                return gt.grep(st.concat(lt), function (t) {
                    return t
                })
            }

            function c(t) {
                var e, n, i = {};
                for (e = 0; e < st.length; ++e)(n = st[e]) && n.used && (i["x" + n.n] = n.c2p(t.left));
                for (e = 0; e < lt.length; ++e)(n = lt[e]) && n.used && (i["y" + n.n] = n.c2p(t.top));
                return i.x1 !== undefined && (i.x = i.x1), i.y1 !== undefined && (i.y = i.y1), i
            }

            function s(t) {
                var e, n, i, o = {};
                for (e = 0; e < st.length; ++e)
                    if ((n = st[e]) && n.used && (null == t[i = "x" + n.n] && 1 == n.n && (i = "x"), null != t[i])) {
                        o.left = n.p2c(t[i]);
                        break
                    } for (e = 0; e < lt.length; ++e)
                    if ((n = lt[e]) && n.used && (null == t[i = "y" + n.n] && 1 == n.n && (i = "y"), null != t[i])) {
                        o.top = n.p2c(t[i]);
                        break
                    } return o
            }

            function p(t, e) {
                return t[e - 1] || (t[e - 1] = {
                    n: e,
                    direction: t == st ? "x" : "y",
                    options: gt.extend(!0, {}, t == st ? et.xaxis : et.yaxis)
                }), t[e - 1]
            }

            function l() {
                var t, e = tt.length,
                    n = -1;
                for (t = 0; t < tt.length; ++t) {
                    var i = tt[t].color;
                    null != i && (e--, "number" == typeof i && n < i && (n = i))
                }
                e <= n && (e = n + 1);
                var o, r = [],
                    a = et.colors,
                    s = a.length,
                    l = 0;
                for (t = 0; t < e; t++) o = gt.color.parse(a[t % s] || "#666"), t % s == 0 && t && (l = 0 <= l ? l < .5 ? -l - .2 : 0 : -l), r[t] = o.scale("rgb", 1 + l);
                var u, c = 0;
                for (t = 0; t < tt.length; ++t) {
                    if (null == (u = tt[t]).color ? (u.color = r[c].toString(), ++c) : "number" == typeof u.color && (u.color = r[u.color].toString()), null == u.lines.show) {
                        var h, d = !0;
                        for (h in u)
                            if (u[h] && u[h].show) {
                                d = !1;
                                break
                            } d && (u.lines.show = !0)
                    }
                    null == u.lines.zero && (u.lines.zero = !!u.lines.fill), u.xaxis = p(st, f(u, "x")), u.yaxis = p(lt, f(u, "y"))
                }
            }

            function u() {
                function t(t, e, n) {
                    e < t.datamin && e != -m && (t.datamin = e), n > t.datamax && n != m && (t.datamax = n)
                }
                var e, n, i, o, r, a, s, l, u, c, h, d, f = Number.POSITIVE_INFINITY,
                    p = Number.NEGATIVE_INFINITY,
                    m = Number.MAX_VALUE;
                for (gt.each(C(), function (t, e) {
                        e.datamin = f, e.datamax = p, e.used = !1
                    }), e = 0; e < tt.length; ++e)(r = tt[e]).datapoints = {
                    points: []
                }, T(dt.processRawData, [r, r.data, r.datapoints]);
                for (e = 0; e < tt.length; ++e) {
                    if (h = (r = tt[e]).data, !(d = r.datapoints.format)) {
                        if ((d = []).push({
                                x: !0,
                                number: !0,
                                required: !0
                            }), d.push({
                                y: !0,
                                number: !0,
                                required: !0
                            }), r.bars.show || r.lines.show && r.lines.fill) {
                            var g = !!(r.bars.show && r.bars.zero || r.lines.show && r.lines.zero);
                            d.push({
                                y: !0,
                                number: !0,
                                required: !1,
                                defaultValue: 0,
                                autoscale: g
                            }), r.bars.horizontal && (delete d[d.length - 1].y, d[d.length - 1].x = !0)
                        }
                        r.datapoints.format = d
                    }
                    if (null == r.datapoints.pointsize) {
                        r.datapoints.pointsize = d.length, s = r.datapoints.pointsize, a = r.datapoints.points;
                        var v = r.lines.show && r.lines.steps;
                        for (r.xaxis.used = r.yaxis.used = !0, n = i = 0; n < h.length; ++n, i += s) {
                            var y = null == (c = h[n]);
                            if (!y)
                                for (o = 0; o < s; ++o) l = c[o], (u = d[o]) && (u.number && null != l && (l = +l, isNaN(l) ? l = null : l == Infinity ? l = m : l == -Infinity && (l = -m)), null == l && (u.required && (y = !0), null != u.defaultValue && (l = u.defaultValue))), a[i + o] = l;
                            if (y)
                                for (o = 0; o < s; ++o) null != (l = a[i + o]) && !1 !== (u = d[o]).autoscale && (u.x && t(r.xaxis, l, l), u.y && t(r.yaxis, l, l)), a[i + o] = null;
                            else if (v && 0 < i && null != a[i - s] && a[i - s] != a[i] && a[i - s + 1] != a[i + 1]) {
                                for (o = 0; o < s; ++o) a[i + s + o] = a[i + o];
                                a[i + 1] = a[i - s + 1], i += s
                            }
                        }
                    }
                }
                for (e = 0; e < tt.length; ++e) r = tt[e], T(dt.processDatapoints, [r, r.datapoints]);
                for (e = 0; e < tt.length; ++e) {
                    a = (r = tt[e]).datapoints.points, s = r.datapoints.pointsize, d = r.datapoints.format;
                    var _ = f,
                        b = f,
                        x = p,
                        w = p;
                    for (n = 0; n < a.length; n += s)
                        if (null != a[n])
                            for (o = 0; o < s; ++o) l = a[n + o], (u = d[o]) && !1 !== u.autoscale && l != m && l != -m && (u.x && (l < _ && (_ = l), x < l && (x = l)), u.y && (l < b && (b = l), w < l && (w = l)));
                    if (r.bars.show) {
                        var S;
                        switch (r.bars.align) {
                            case "left":
                                S = 0;
                                break;
                            case "right":
                                S = -r.bars.barWidth;
                                break;
                            default:
                                S = -r.bars.barWidth / 2
                        }
                        r.bars.horizontal ? (b += S, w += S + r.bars.barWidth) : (_ += S, x += S + r.bars.barWidth)
                    }
                    t(r.xaxis, _, x), t(r.yaxis, b, w)
                }
                gt.each(C(), function (t, e) {
                    e.datamin == f && (e.datamin = null), e.datamax == p && (e.datamax = null)
                })
            }

            function h() {
                g.css("padding", 0).children().filter(function () {
                    return !gt(this).hasClass("flot-overlay") && !gt(this).hasClass("flot-base")
                }).remove(), "static" == g.css("position") && g.css("position", "relative"), nt = new vt("flot-base", g), it = new vt("flot-overlay", g), rt = nt.context, at = it.context, ot = gt(it.element).unbind();
                var t = g.data("plot");
                t && (t.shutdown(),
                    it.clear()), g.data("plot", ft)
            }

            function d() {
                et.grid.hoverable && (ot.mousemove(H), ot.bind("mouseleave", q)), et.grid.clickable && ot.click(W), T(dt.bindEvents, [ot])
            }

            function m() {
                mt && clearTimeout(mt), ot.unbind("mousemove", H), ot.unbind("mouseleave", q), ot.unbind("click", W), T(dt.shutdown, [ot])
            }

            function v(t) {
                function e(t) {
                    return t
                }
                var n, i, o = t.options.transform || e,
                    r = t.options.inverseTransform;
                i = "x" == t.direction ? (n = t.scale = ct / Math.abs(o(t.max) - o(t.min)), Math.min(o(t.max), o(t.min))) : (n = -(n = t.scale = ht / Math.abs(o(t.max) - o(t.min))), Math.max(o(t.max), o(t.min))), t.p2c = o == e ? function (t) {
                    return (t - i) * n
                } : function (t) {
                    return (o(t) - i) * n
                }, t.c2p = r ? function (t) {
                    return r(i + t / n)
                } : function (t) {
                    return i + t / n
                }
            }

            function y(t) {
                for (var e = t.options, n = t.ticks || [], i = e.labelWidth || 0, o = e.labelHeight || 0, r = i || ("x" == t.direction ? Math.floor(nt.width / (n.length || 1)) : null), a = t.direction + "Axis " + t.direction + t.n + "Axis", s = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + a, l = e.font || "flot-tick-label tickLabel", u = 0; u < n.length; ++u) {
                    var c = n[u];
                    if (c.label) {
                        var h = nt.getTextInfo(s, c.label, l, null, r);
                        i = Math.max(i, h.width), o = Math.max(o, h.height)
                    }
                }
                t.labelWidth = e.labelWidth || i, t.labelHeight = e.labelHeight || o
            }

            function _(n) {
                var t = n.labelWidth,
                    e = n.labelHeight,
                    i = n.options.position,
                    o = "x" === n.direction,
                    r = n.options.tickLength,
                    a = et.grid.axisMargin,
                    s = et.grid.labelMargin,
                    l = !0,
                    u = !0,
                    c = !0,
                    h = !1;
                gt.each(o ? st : lt, function (t, e) {
                    e && e.reserveSpace && (e === n ? h = !0 : e.options.position === i && (h ? u = !1 : l = !1), h || (c = !1))
                }), u && (a = 0), null == r && (r = c ? "full" : 5), isNaN(+r) || (s += +r), o ? (e += s, "bottom" == i ? (ut.bottom += e + a, n.box = {
                    top: nt.height - ut.bottom,
                    height: e
                }) : (n.box = {
                    top: ut.top + a,
                    height: e
                }, ut.top += e + a)) : (t += s, "left" == i ? (n.box = {
                    left: ut.left + a,
                    width: t
                }, ut.left += t + a) : (ut.right += t + a, n.box = {
                    left: nt.width - ut.right,
                    width: t
                })), n.position = i, n.tickLength = r, n.box.padding = s, n.innermost = l
            }

            function b(t) {
                "x" == t.direction ? (t.box.left = ut.left - t.labelWidth / 2, t.box.width = nt.width - ut.left - ut.right + t.labelWidth) : (t.box.top = ut.top - t.labelHeight / 2, t.box.height = nt.height - ut.bottom - ut.top + t.labelHeight)
            }

            function x() {
                var t, e = et.grid.minBorderMargin;
                if (null == e)
                    for (t = e = 0; t < tt.length; ++t) e = Math.max(e, 2 * (tt[t].points.radius + tt[t].points.lineWidth / 2));
                var i = {
                    left: e,
                    right: e,
                    top: e,
                    bottom: e
                };
                gt.each(C(), function (t, e) {
                    if (e.reserveSpace && e.ticks && e.ticks.length) {
                        var n = e.ticks[e.ticks.length - 1];
                        "x" === e.direction ? (i.left = Math.max(i.left, e.labelWidth / 2), n.v <= e.max && (i.right = Math.max(i.right, e.labelWidth / 2))) : (i.bottom = Math.max(i.bottom, e.labelHeight / 2), n.v <= e.max && (i.top = Math.max(i.top, e.labelHeight / 2)))
                    }
                }), ut.left = Math.ceil(Math.max(i.left, ut.left)), ut.right = Math.ceil(Math.max(i.right, ut.right)), ut.top = Math.ceil(Math.max(i.top, ut.top)), ut.bottom = Math.ceil(Math.max(i.bottom, ut.bottom))
            }

            function w() {
                var t, e = C(),
                    n = et.grid.show;
                for (var i in ut) {
                    var o = et.grid.margin || 0;
                    ut[i] = "number" == typeof o ? o : o[i] || 0
                }
                for (var i in T(dt.processOffset, [ut]), ut) "object" == typeof et.grid.borderWidth ? ut[i] += n ? et.grid.borderWidth[i] : 0 : ut[i] += n ? et.grid.borderWidth : 0;
                if (gt.each(e, function (t, e) {
                        e.show = e.options.show, null == e.show && (e.show = e.used), e.reserveSpace = e.show || e.options.reserveSpace, S(e)
                    }), n) {
                    var r = gt.grep(e, function (t) {
                        return t.reserveSpace
                    });
                    for (gt.each(r, function (t, e) {
                            k(e), L(e), D(e, e.ticks), y(e)
                        }), t = r.length - 1; 0 <= t; --t) _(r[t]);
                    x(), gt.each(r, function (t, e) {
                        b(e)
                    })
                }
                ct = nt.width - ut.left - ut.right, ht = nt.height - ut.bottom - ut.top, gt.each(e, function (t, e) {
                    v(e)
                }), n && M(), F()
            }

            function S(t) {
                var e = t.options,
                    n = +(null != e.min ? e.min : t.datamin),
                    i = +(null != e.max ? e.max : t.datamax),
                    o = i - n;
                if (0 == o) {
                    var r = 0 == i ? 1 : .01;
                    null == e.min && (n -= r), null != e.max && null == e.min || (i += r)
                } else {
                    var a = e.autoscaleMargin;
                    null != a && (null == e.min && (n -= o * a) < 0 && null != t.datamin && 0 <= t.datamin && (n = 0), null == e.max && 0 < (i += o * a) && null != t.datamax && t.datamax <= 0 && (i = 0))
                }
                t.min = n, t.max = i
            }

            function k(t) {
                var e, n = t.options;
                e = "number" == typeof n.ticks && 0 < n.ticks ? n.ticks : .3 * Math.sqrt("x" == t.direction ? nt.width : nt.height);
                var i = (t.max - t.min) / e,
                    o = -Math.floor(Math.log(i) / Math.LN10),
                    r = n.tickDecimals;
                null != r && r < o && (o = r);
                var a, s = Math.pow(10, -o),
                    l = i / s;
                if (l < 1.5 ? a = 1 : l < 3 ? (a = 2, 2.25 < l && (null == r || o + 1 <= r) && (a = 2.5, ++o)) : a = l < 7.5 ? 5 : 10, a *= s, null != n.minTickSize && a < n.minTickSize && (a = n.minTickSize), t.delta = i, t.tickDecimals = Math.max(0, null != r ? r : o), t.tickSize = n.tickSize || a, "time" == n.mode && !t.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                if (t.tickGenerator || (t.tickGenerator = function (t) {
                        for (var e, n = [], i = yt(t.min, t.tickSize), o = 0, r = Number.NaN; e = r, r = i + o * t.tickSize, n.push(r), ++o, r < t.max && r != e;);
                        return n
                    }, t.tickFormatter = function (t, e) {
                        var n = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
                            i = "" + Math.round(t * n) / n;
                        if (null != e.tickDecimals) {
                            var o = i.indexOf("."),
                                r = -1 == o ? 0 : i.length - o - 1;
                            if (r < e.tickDecimals) return (r ? i : i + ".") + ("" + n).substr(1, e.tickDecimals - r)
                        }
                        return i
                    }), gt.isFunction(n.tickFormatter) && (t.tickFormatter = function (t, e) {
                        return "" + n.tickFormatter(t, e)
                    }), null != n.alignTicksWithAxis) {
                    var u = ("x" == t.direction ? st : lt)[n.alignTicksWithAxis - 1];
                    if (u && u.used && u != t) {
                        var c = t.tickGenerator(t);
                        if (0 < c.length && (null == n.min && (t.min = Math.min(t.min, c[0])), null == n.max && 1 < c.length && (t.max = Math.max(t.max, c[c.length - 1]))), t.tickGenerator = function (t) {
                                var e, n, i = [];
                                for (n = 0; n < u.ticks.length; ++n) e = (u.ticks[n].v - u.min) / (u.max - u.min), e = t.min + e * (t.max - t.min), i.push(e);
                                return i
                            }, !t.mode && null == n.tickDecimals) {
                            var h = Math.max(0, 1 - Math.floor(Math.log(t.delta) / Math.LN10)),
                                d = t.tickGenerator(t);
                            1 < d.length && /\..*0$/.test((d[1] - d[0]).toFixed(h)) || (t.tickDecimals = h)
                        }
                    }
                }
            }

            function L(t) {
                var e, n, i = t.options.ticks,
                    o = [];
                for (null == i || "number" == typeof i && 0 < i ? o = t.tickGenerator(t) : i && (o = gt.isFunction(i) ? i(t) : i), t.ticks = [], e = 0; e < o.length; ++e) {
                    var r = null,
                        a = o[e];
                    "object" == typeof a ? (n = +a[0], 1 < a.length && (r = a[1])) : n = +a, null == r && (r = t.tickFormatter(n, t)), isNaN(n) || t.ticks.push({
                        v: n,
                        label: r
                    })
                }
            }

            function D(t, e) {
                t.options.autoscaleMargin && 0 < e.length && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && 1 < e.length && (t.max = Math.max(t.max, e[e.length - 1].v)))
            }

            function P() {
                nt.clear(), T(dt.drawBackground, [rt]);
                var t = et.grid;
                t.show && t.backgroundColor && A(), t.show && !t.aboveData && I();
                for (var e = 0; e < tt.length; ++e) T(dt.drawSeries, [rt, tt[e]]), B(tt[e]);
                T(dt.draw, [rt]), t.show && t.aboveData && I(), nt.render(), U()
            }

            function E(t, e) {
                for (var n, i, o, r, a = C(), s = 0; s < a.length; ++s)
                    if ((n = a[s]).direction == e && (t[r = e + n.n + "axis"] || 1 != n.n || (r = e + "axis"), t[r])) {
                        i = t[r].from, o = t[r].to;
                        break
                    } if (t[r] || (n = "x" == e ? st[0] : lt[0], i = t[e + "1"], o = t[e + "2"]), null != i && null != o && o < i) {
                    var l = i;
                    i = o, o = l
                }
                return {
                    from: i,
                    to: o,
                    axis: n
                }
            }

            function A() {
                rt.save(), rt.translate(ut.left, ut.top), rt.fillStyle = Y(et.grid.backgroundColor, ht, 0, "rgba(255, 255, 255, 0)"), rt.fillRect(0, 0, ct, ht), rt.restore()
            }

            function I() {
                var t, e, n, i;
                rt.save(), rt.translate(ut.left, ut.top);
                var o = et.grid.markings;
                if (o)
                    for (gt.isFunction(o) && ((e = ft.getAxes()).xmin = e.xaxis.min, e.xmax = e.xaxis.max, e.ymin = e.yaxis.min, e.ymax = e.yaxis.max, o = o(e)), t = 0; t < o.length; ++t) {
                        var r = o[t],
                            a = E(r, "x"),
                            s = E(r, "y");
                        null == a.from && (a.from = a.axis.min), null == a.to && (a.to = a.axis.max), null == s.from && (s.from = s.axis.min), null == s.to && (s.to = s.axis.max), a.to < a.axis.min || a.from > a.axis.max || s.to < s.axis.min || s.from > s.axis.max || (a.from = Math.max(a.from, a.axis.min), a.to = Math.min(a.to, a.axis.max), s.from = Math.max(s.from, s.axis.min), s.to = Math.min(s.to, s.axis.max), a.from == a.to && s.from == s.to || (a.from = a.axis.p2c(a.from), a.to = a.axis.p2c(a.to), s.from = s.axis.p2c(s.from), s.to = s.axis.p2c(s.to), a.from == a.to || s.from == s.to ? (rt.beginPath(), rt.strokeStyle = r.color || et.grid.markingsColor, rt.lineWidth = r.lineWidth || et.grid.markingsLineWidth, rt.moveTo(a.from, s.from), rt.lineTo(a.to, s.to), rt.stroke()) : (rt.fillStyle = r.color || et.grid.markingsColor, rt.fillRect(a.from, s.to, a.to - a.from, s.from - s.to))))
                    }
                e = C(), n = et.grid.borderWidth;
                for (var l = 0; l < e.length; ++l) {
                    var u, c, h, d, f = e[l],
                        p = f.box,
                        m = f.tickLength;
                    if (f.show && 0 != f.ticks.length) {
                        for (rt.lineWidth = 1, "x" == f.direction ? (u = 0, c = "full" == m ? "top" == f.position ? 0 : ht : p.top - ut.top + ("top" == f.position ? p.height : 0)) : (c = 0, u = "full" == m ? "left" == f.position ? 0 : ct : p.left - ut.left + ("left" == f.position ? p.width : 0)), f.innermost || (rt.strokeStyle = f.options.color, rt.beginPath(), h = d = 0, "x" == f.direction ? h = ct + 1 : d = ht + 1, 1 == rt.lineWidth && ("x" == f.direction ? c = Math.floor(c) + .5 : u = Math.floor(u) + .5), rt.moveTo(u, c), rt.lineTo(u + h, c + d), rt.stroke()), rt.strokeStyle = f.options.tickColor, rt.beginPath(), t = 0; t < f.ticks.length; ++t) {
                            var g = f.ticks[t].v;
                            h = d = 0, isNaN(g) || g < f.min || g > f.max || "full" == m && ("object" == typeof n && 0 < n[f.position] || 0 < n) && (g == f.min || g == f.max) || ("x" == f.direction ? (u = f.p2c(g), d = "full" == m ? -ht : m, "top" == f.position && (d = -d)) : (c = f.p2c(g), h = "full" == m ? -ct : m, "left" == f.position && (h = -h)), 1 == rt.lineWidth && ("x" == f.direction ? u = Math.floor(u) + .5 : c = Math.floor(c) + .5), rt.moveTo(u, c), rt.lineTo(u + h, c + d))
                        }
                        rt.stroke()
                    }
                }
                n && (i = et.grid.borderColor, "object" == typeof n || "object" == typeof i ? ("object" != typeof n && (n = {
                    top: n,
                    right: n,
                    bottom: n,
                    left: n
                }), "object" != typeof i && (i = {
                    top: i,
                    right: i,
                    bottom: i,
                    left: i
                }), 0 < n.top && (rt.strokeStyle = i.top, rt.lineWidth = n.top, rt.beginPath(), rt.moveTo(0 - n.left, 0 - n.top / 2), rt.lineTo(ct, 0 - n.top / 2), rt.stroke()), 0 < n.right && (rt.strokeStyle = i.right, rt.lineWidth = n.right, rt.beginPath(), rt.moveTo(ct + n.right / 2, 0 - n.top), rt.lineTo(ct + n.right / 2, ht), rt.stroke()), 0 < n.bottom && (rt.strokeStyle = i.bottom, rt.lineWidth = n.bottom, rt.beginPath(), rt.moveTo(ct + n.right, ht + n.bottom / 2), rt.lineTo(0, ht + n.bottom / 2), rt.stroke()), 0 < n.left && (rt.strokeStyle = i.left, rt.lineWidth = n.left, rt.beginPath(), rt.moveTo(0 - n.left / 2, ht + n.bottom), rt.lineTo(0 - n.left / 2, 0), rt.stroke())) : (rt.lineWidth = n, rt.strokeStyle = et.grid.borderColor, rt.strokeRect(-n / 2, -n / 2, ct + n, ht + n))), rt.restore()
            }

            function M() {
                gt.each(C(), function (t, e) {
                    var n, i, o, r, a, s = e.box,
                        l = e.direction + "Axis " + e.direction + e.n + "Axis",
                        u = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + l,
                        c = e.options.font || "flot-tick-label tickLabel";
                    if (nt.removeText(u), e.show && 0 != e.ticks.length)
                        for (var h = 0; h < e.ticks.length; ++h) !(n = e.ticks[h]).label || n.v < e.min || n.v > e.max || ("x" == e.direction ? (r = "center", i = ut.left + e.p2c(n.v), "bottom" == e.position ? o = s.top + s.padding : (o = s.top + s.height - s.padding, a = "bottom")) : (a = "middle", o = ut.top + e.p2c(n.v), "left" == e.position ? (i = s.left + s.width - s.padding, r = "right") : i = s.left + s.padding), nt.addText(u, i, o, n.label, c, null, null, r, a))
                })
            }

            function B(t) {
                t.lines.show && R(t), t.bars.show && z(t), t.points.show && j(t)
            }

            function R(t) {
                function e(t, e, n, i, o) {
                    var r = t.points,
                        a = t.pointsize,
                        s = null,
                        l = null;
                    rt.beginPath();
                    for (var u = a; u < r.length; u += a) {
                        var c = r[u - a],
                            h = r[u - a + 1],
                            d = r[u],
                            f = r[u + 1];
                        if (null != c && null != d) {
                            if (h <= f && h < o.min) {
                                if (f < o.min) continue;
                                c = (o.min - h) / (f - h) * (d - c) + c, h = o.min
                            } else if (f <= h && f < o.min) {
                                if (h < o.min) continue;
                                d = (o.min - h) / (f - h) * (d - c) + c, f = o.min
                            }
                            if (f <= h && h > o.max) {
                                if (f > o.max) continue;
                                c = (o.max - h) / (f - h) * (d - c) + c, h = o.max
                            } else if (h <= f && f > o.max) {
                                if (h > o.max) continue;
                                d = (o.max - h) / (f - h) * (d - c) + c, f = o.max
                            }
                            if (c <= d && c < i.min) {
                                if (d < i.min) continue;
                                h = (i.min - c) / (d - c) * (f - h) + h, c = i.min
                            } else if (d <= c && d < i.min) {
                                if (c < i.min) continue;
                                f = (i.min - c) / (d - c) * (f - h) + h, d = i.min
                            }
                            if (d <= c && c > i.max) {
                                if (d > i.max) continue;
                                h = (i.max - c) / (d - c) * (f - h) + h, c = i.max
                            } else if (c <= d && d > i.max) {
                                if (c > i.max) continue;
                                f = (i.max - c) / (d - c) * (f - h) + h, d = i.max
                            }
                            c == s && h == l || rt.moveTo(i.p2c(c) + e, o.p2c(h) + n), s = d, l = f, rt.lineTo(i.p2c(d) + e, o.p2c(f) + n)
                        }
                    }
                    rt.stroke()
                }

                function n(t, e, n) {
                    for (var i = t.points, o = t.pointsize, r = Math.min(Math.max(0, n.min), n.max), a = 0, s = !1, l = 1, u = 0, c = 0; !(0 < o && a > i.length + o);) {
                        var h = i[(a += o) - o],
                            d = i[a - o + l],
                            f = i[a],
                            p = i[a + l];
                        if (s) {
                            if (0 < o && null != h && null == f) {
                                c = a, o = -o, l = 2;
                                continue
                            }
                            if (o < 0 && a == u + o) {
                                rt.fill(), s = !1, l = 1, a = u = c + (o = -o);
                                continue
                            }
                        }
                        if (null != h && null != f) {
                            if (h <= f && h < e.min) {
                                if (f < e.min) continue;
                                d = (e.min - h) / (f - h) * (p - d) + d, h = e.min
                            } else if (f <= h && f < e.min) {
                                if (h < e.min) continue;
                                p = (e.min - h) / (f - h) * (p - d) + d, f = e.min
                            }
                            if (f <= h && h > e.max) {
                                if (f > e.max) continue;
                                d = (e.max - h) / (f - h) * (p - d) + d, h = e.max
                            } else if (h <= f && f > e.max) {
                                if (h > e.max) continue;
                                p = (e.max - h) / (f - h) * (p - d) + d, f = e.max
                            }
                            if (s || (rt.beginPath(), rt.moveTo(e.p2c(h), n.p2c(r)), s = !0), d >= n.max && p >= n.max) rt.lineTo(e.p2c(h), n.p2c(n.max)), rt.lineTo(e.p2c(f), n.p2c(n.max));
                            else if (d <= n.min && p <= n.min) rt.lineTo(e.p2c(h), n.p2c(n.min)), rt.lineTo(e.p2c(f), n.p2c(n.min));
                            else {
                                var m = h,
                                    g = f;
                                d <= p && d < n.min && p >= n.min ? (h = (n.min - d) / (p - d) * (f - h) + h, d = n.min) : p <= d && p < n.min && d >= n.min && (f = (n.min - d) / (p - d) * (f - h) + h, p = n.min), p <= d && d > n.max && p <= n.max ? (h = (n.max - d) / (p - d) * (f - h) + h, d = n.max) : d <= p && p > n.max && d <= n.max && (f = (n.max - d) / (p - d) * (f - h) + h, p = n.max), h != m && rt.lineTo(e.p2c(m), n.p2c(d)), rt.lineTo(e.p2c(h), n.p2c(d)), rt.lineTo(e.p2c(f), n.p2c(p)), f != g && (rt.lineTo(e.p2c(f), n.p2c(p)), rt.lineTo(e.p2c(g), n.p2c(p)))
                            }
                        }
                    }
                }
                rt.save(), rt.translate(ut.left, ut.top), rt.lineJoin = "round";
                var i = t.lines.lineWidth,
                    o = t.shadowSize;
                if (0 < i && 0 < o) {
                    rt.lineWidth = o, rt.strokeStyle = "rgba(0,0,0,0.1)";
                    var r = Math.PI / 18;
                    e(t.datapoints, Math.sin(r) * (i / 2 + o / 2), Math.cos(r) * (i / 2 + o / 2), t.xaxis, t.yaxis), rt.lineWidth = o / 2, e(t.datapoints, Math.sin(r) * (i / 2 + o / 4), Math.cos(r) * (i / 2 + o / 4), t.xaxis, t.yaxis)
                }
                rt.lineWidth = i, rt.strokeStyle = t.color;
                var a = O(t.lines, t.color, 0, ht);
                a && (rt.fillStyle = a, n(t.datapoints, t.xaxis, t.yaxis)), 0 < i && e(t.datapoints, 0, 0, t.xaxis, t.yaxis), rt.restore()
            }

            function j(t) {
                function e(t, e, n, i, o, r, a, s) {
                    for (var l = t.points, u = t.pointsize, c = 0; c < l.length; c += u) {
                        var h = l[c],
                            d = l[c + 1];
                        null == h || h < r.min || h > r.max || d < a.min || d > a.max || (rt.beginPath(), h = r.p2c(h), d = a.p2c(d) + i, "circle" == s ? rt.arc(h, d, e, 0, o ? Math.PI : 2 * Math.PI, !1) : s(rt, h, d, e, o), rt.closePath(), n && (rt.fillStyle = n, rt.fill()), rt.stroke())
                    }
                }
                rt.save(), rt.translate(ut.left, ut.top);
                var n = t.points.lineWidth,
                    i = t.shadowSize,
                    o = t.points.radius,
                    r = t.points.symbol;
                if (0 == n && (n = 1e-4), 0 < n && 0 < i) {
                    var a = i / 2;
                    rt.lineWidth = a, rt.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, o, null, a + a / 2, !0, t.xaxis, t.yaxis, r), rt.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, o, null, a / 2, !0, t.xaxis, t.yaxis, r)
                }
                rt.lineWidth = n, rt.strokeStyle = t.color, e(t.datapoints, o, O(t.points, t.color), 0, !1, t.xaxis, t.yaxis, r), rt.restore()
            }

            function N(t, e, n, i, o, r, a, s, l, u, c) {
                var h, d, f, p, m, g, v, y, _;
                u ? (y = g = v = !0, m = !1, p = e + i, f = e + o, (d = t) < (h = n) && (_ = d, d = h, h = _, g = !(m = !0))) : (m = g = v = !0, y = !1, h = t + i, d = t + o, (p = e) < (f = n) && (_ = p, p = f, f = _, v = !(y = !0))), d < a.min || h > a.max || p < s.min || f > s.max || (h < a.min && (h = a.min, m = !1), d > a.max && (d = a.max, g = !1), f < s.min && (f = s.min, y = !1), p > s.max && (p = s.max, v = !1), h = a.p2c(h), f = s.p2c(f), d = a.p2c(d), p = s.p2c(p), r && (l.fillStyle = r(f, p), l.fillRect(h, p, d - h, f - p)), 0 < c && (m || g || v || y) && (l.beginPath(), l.moveTo(h, f), m ? l.lineTo(h, p) : l.moveTo(h, p), v ? l.lineTo(d, p) : l.moveTo(d, p), g ? l.lineTo(d, f) : l.moveTo(d, f), y ? l.lineTo(h, f) : l.moveTo(h, f), l.stroke()))
            }

            function z(u) {
                function t(t, e, n, i, o, r) {
                    for (var a = t.points, s = t.pointsize, l = 0; l < a.length; l += s) null != a[l] && N(a[l], a[l + 1], a[l + 2], e, n, i, o, r, rt, u.bars.horizontal, u.bars.lineWidth)
                }
                var e;
                switch (rt.save(), rt.translate(ut.left, ut.top), rt.lineWidth = u.bars.lineWidth, rt.strokeStyle = u.color, u.bars.align) {
                    case "left":
                        e = 0;
                        break;
                    case "right":
                        e = -u.bars.barWidth;
                        break;
                    default:
                        e = -u.bars.barWidth / 2
                }
                var n = u.bars.fill ? function (t, e) {
                    return O(u.bars, u.color, t, e)
                } : null;
                t(u.datapoints, e, e + u.bars.barWidth, n, u.xaxis, u.yaxis), rt.restore()
            }

            function O(t, e, n, i) {
                var o = t.fill;
                if (!o) return null;
                if (t.fillColor) return Y(t.fillColor, n, i, e);
                var r = gt.color.parse(e);
                return r.a = "number" == typeof o ? o : .4, r.normalize(), r.toString()
            }

            function F() {
                if (null != et.legend.container ? gt(et.legend.container).html("") : g.find(".legend").remove(), et.legend.show) {
                    for (var t, e, n = [], i = [], o = !1, r = et.legend.labelFormatter, a = 0; a < tt.length; ++a)(t = tt[a]).label && (e = r ? r(t.label, t) : t.label) && i.push({
                        label: e,
                        color: t.color
                    });
                    if (et.legend.sorted)
                        if (gt.isFunction(et.legend.sorted)) i.sort(et.legend.sorted);
                        else if ("reverse" == et.legend.sorted) i.reverse();
                    else {
                        var s = "descending" != et.legend.sorted;
                        i.sort(function (t, e) {
                            return t.label == e.label ? 0 : t.label < e.label != s ? 1 : -1
                        })
                    }
                    for (a = 0; a < i.length; ++a) {
                        var l = i[a];
                        a % et.legend.noColumns == 0 && (o && n.push("</tr>"), n.push("<tr>"), o = !0), n.push('<td class="legendColorBox"><div style="border:1px solid ' + et.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + l.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + l.label + "</td>")
                    }
                    if (o && n.push("</tr>"), 0 != n.length) {
                        var u = '<table style="font-size:smaller;color:' + et.grid.color + '">' + n.join("") + "</table>";
                        if (null != et.legend.container) gt(et.legend.container).html(u);
                        else {
                            var c = "",
                                h = et.legend.position,
                                d = et.legend.margin;
                            null == d[0] && (d = [d, d]), "n" == h.charAt(0) ? c += "top:" + (d[1] + ut.top) + "px;" : "s" == h.charAt(0) && (c += "bottom:" + (d[1] + ut.bottom) + "px;"), "e" == h.charAt(1) ? c += "right:" + (d[0] + ut.right) + "px;" : "w" == h.charAt(1) && (c += "left:" + (d[0] + ut.left) + "px;");
                            var f = gt('<div class="legend">' + u.replace('style="', 'style="position:absolute;' + c + ";") + "</div>").appendTo(g);
                            if (0 != et.legend.backgroundOpacity) {
                                var p = et.legend.backgroundColor;
                                null == p && ((p = (p = et.grid.backgroundColor) && "string" == typeof p ? gt.color.parse(p) : gt.color.extract(f, "background-color")).a = 1, p = p.toString());
                                var m = f.children();
                                gt('<div style="position:absolute;width:' + m.width() + "px;height:" + m.height() + "px;" + c + "background-color:" + p + ';"> </div>').prependTo(f).css("opacity", et.legend.backgroundOpacity)
                            }
                        }
                    }
                }
            }

            function $(t, e, n) {
                var i, o, r, a = et.grid.mouseActiveRadius,
                    s = a * a + 1,
                    l = null;
                for (i = tt.length - 1; 0 <= i; --i)
                    if (n(tt[i])) {
                        var u = tt[i],
                            c = u.xaxis,
                            h = u.yaxis,
                            d = u.datapoints.points,
                            f = c.c2p(t),
                            p = h.c2p(e),
                            m = a / c.scale,
                            g = a / h.scale;
                        if (r = u.datapoints.pointsize, c.options.inverseTransform && (m = Number.MAX_VALUE), h.options.inverseTransform && (g = Number.MAX_VALUE), u.lines.show || u.points.show)
                            for (o = 0; o < d.length; o += r) {
                                var v = d[o],
                                    y = d[o + 1];
                                if (null != v && !(m < v - f || v - f < -m || g < y - p || y - p < -g)) {
                                    var _ = Math.abs(c.p2c(v) - t),
                                        b = Math.abs(h.p2c(y) - e),
                                        x = _ * _ + b * b;
                                    x < s && (s = x, l = [i, o / r])
                                }
                            }
                        if (u.bars.show && !l) {
                            var w, S;
                            switch (u.bars.align) {
                                case "left":
                                    w = 0;
                                    break;
                                case "right":
                                    w = -u.bars.barWidth;
                                    break;
                                default:
                                    w = -u.bars.barWidth / 2
                            }
                            for (S = w + u.bars.barWidth, o = 0; o < d.length; o += r) {
                                v = d[o], y = d[o + 1];
                                var T = d[o + 2];
                                null != v && ((tt[i].bars.horizontal ? f <= Math.max(T, v) && f >= Math.min(T, v) && y + w <= p && p <= y + S : v + w <= f && f <= v + S && p >= Math.min(T, y) && p <= Math.max(T, y)) && (l = [i, o / r]))
                            }
                        }
                    } return l ? (i = l[0], o = l[1], r = tt[i].datapoints.pointsize, {
                    datapoint: tt[i].datapoints.points.slice(o * r, (o + 1) * r),
                    dataIndex: o,
                    series: tt[i],
                    seriesIndex: i
                }) : null
            }

            function H(t) {
                et.grid.hoverable && Z("plothover", t, function (t) {
                    return 0 != t.hoverable
                })
            }

            function q(t) {
                et.grid.hoverable && Z("plothover", t, function () {
                    return !1
                })
            }

            function W(t) {
                Z("plotclick", t, function (t) {
                    return 0 != t.clickable
                })
            }

            function Z(t, e, n) {
                var i = ot.offset(),
                    o = e.pageX - i.left - ut.left,
                    r = e.pageY - i.top - ut.top,
                    a = c({
                        left: o,
                        top: r
                    });
                a.pageX = e.pageX, a.pageY = e.pageY;
                var s = $(o, r, n);
                if (s && (s.pageX = parseInt(s.series.xaxis.p2c(s.datapoint[0]) + i.left + ut.left, 10), s.pageY = parseInt(s.series.yaxis.p2c(s.datapoint[1]) + i.top + ut.top, 10)), et.grid.autoHighlight) {
                    for (var l = 0; l < pt.length; ++l) {
                        var u = pt[l];
                        u.auto != t || s && u.series == s.series && u.point[0] == s.datapoint[0] && u.point[1] == s.datapoint[1] || Q(u.series, u.point)
                    }
                    s && G(s.series, s.datapoint, t)
                }
                g.trigger(t, [a, s])
            }

            function U() {
                var t = et.interaction.redrawOverlayInterval; - 1 != t ? mt || (mt = setTimeout(V, t)) : V()
            }

            function V() {
                var t, e;
                for (mt = null, at.save(), it.clear(), at.translate(ut.left, ut.top), t = 0; t < pt.length; ++t)(e = pt[t]).series.bars.show ? J(e.series, e.point) : X(e.series, e.point);
                at.restore(), T(dt.drawOverlay, [at])
            }

            function G(t, e, n) {
                if ("number" == typeof t && (t = tt[t]), "number" == typeof e) {
                    var i = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(i * e, i * (e + 1))
                }
                var o = K(t, e); - 1 == o ? (pt.push({
                    series: t,
                    point: e,
                    auto: n
                }), U()) : n || (pt[o].auto = !1)
            }

            function Q(t, e) {
                if (null == t && null == e) return pt = [], void U();
                if ("number" == typeof t && (t = tt[t]), "number" == typeof e) {
                    var n = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(n * e, n * (e + 1))
                }
                var i = K(t, e); - 1 != i && (pt.splice(i, 1), U())
            }

            function K(t, e) {
                for (var n = 0; n < pt.length; ++n) {
                    var i = pt[n];
                    if (i.series == t && i.point[0] == e[0] && i.point[1] == e[1]) return n
                }
                return -1
            }

            function X(t, e) {
                var n = e[0],
                    i = e[1],
                    o = t.xaxis,
                    r = t.yaxis,
                    a = "string" == typeof t.highlightColor ? t.highlightColor : gt.color.parse(t.color).scale("a", .5).toString();
                if (!(n < o.min || n > o.max || i < r.min || i > r.max)) {
                    var s = t.points.radius + t.points.lineWidth / 2;
                    at.lineWidth = s, at.strokeStyle = a;
                    var l = 1.5 * s;
                    n = o.p2c(n), i = r.p2c(i), at.beginPath(), "circle" == t.points.symbol ? at.arc(n, i, l, 0, 2 * Math.PI, !1) : t.points.symbol(at, n, i, l, !1), at.closePath(), at.stroke()
                }
            }

            function J(t, e) {
                var n, i = "string" == typeof t.highlightColor ? t.highlightColor : gt.color.parse(t.color).scale("a", .5).toString(),
                    o = i;
                switch (t.bars.align) {
                    case "left":
                        n = 0;
                        break;
                    case "right":
                        n = -t.bars.barWidth;
                        break;
                    default:
                        n = -t.bars.barWidth / 2
                }
                at.lineWidth = t.bars.lineWidth, at.strokeStyle = i, N(e[0], e[1], e[2] || 0, n, n + t.bars.barWidth, function () {
                    return o
                }, t.xaxis, t.yaxis, at, t.bars.horizontal, t.bars.lineWidth)
            }

            function Y(t, e, n, i) {
                if ("string" == typeof t) return t;
                for (var o = rt.createLinearGradient(0, n, 0, e), r = 0, a = t.colors.length; r < a; ++r) {
                    var s = t.colors[r];
                    if ("string" != typeof s) {
                        var l = gt.color.parse(i);
                        null != s.brightness && (l = l.scale("rgb", s.brightness)), null != s.opacity && (l.a *= s.opacity), s = l.toString()
                    }
                    o.addColorStop(r / (a - 1), s)
                }
                return o
            }
            var tt = [],
                et = {
                    colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                    legend: {
                        show: !0,
                        noColumns: 1,
                        labelFormatter: null,
                        labelBoxBorderColor: "#ccc",
                        container: null,
                        position: "ne",
                        margin: 5,
                        backgroundColor: null,
                        backgroundOpacity: .85,
                        sorted: null
                    },
                    xaxis: {
                        show: null,
                        position: "bottom",
                        mode: null,
                        font: null,
                        color: null,
                        tickColor: null,
                        transform: null,
                        inverseTransform: null,
                        min: null,
                        max: null,
                        autoscaleMargin: null,
                        ticks: null,
                        tickFormatter: null,
                        labelWidth: null,
                        labelHeight: null,
                        reserveSpace: null,
                        tickLength: null,
                        alignTicksWithAxis: null,
                        tickDecimals: null,
                        tickSize: null,
                        minTickSize: null
                    },
                    yaxis: {
                        autoscaleMargin: .02,
                        position: "left"
                    },
                    xaxes: [],
                    yaxes: [],
                    series: {
                        points: {
                            show: !1,
                            radius: 3,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: "#ffffff",
                            symbol: "circle"
                        },
                        lines: {
                            lineWidth: 2,
                            fill: !1,
                            fillColor: null,
                            steps: !1
                        },
                        bars: {
                            show: !1,
                            lineWidth: 2,
                            barWidth: 1,
                            fill: !0,
                            fillColor: null,
                            align: "left",
                            horizontal: !1,
                            zero: !0
                        },
                        shadowSize: 3,
                        highlightColor: null
                    },
                    grid: {
                        show: !0,
                        aboveData: !1,
                        color: "#545454",
                        backgroundColor: null,
                        borderColor: null,
                        tickColor: null,
                        margin: 0,
                        labelMargin: 5,
                        axisMargin: 8,
                        borderWidth: 2,
                        minBorderMargin: null,
                        markings: null,
                        markingsColor: "#f4f4f4",
                        markingsLineWidth: 2,
                        clickable: !1,
                        hoverable: !1,
                        autoHighlight: !0,
                        mouseActiveRadius: 10
                    },
                    interaction: {
                        redrawOverlayInterval: 1e3 / 60
                    },
                    hooks: {}
                },
                nt = null,
                it = null,
                ot = null,
                rt = null,
                at = null,
                st = [],
                lt = [],
                ut = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                ct = 0,
                ht = 0,
                dt = {
                    processOptions: [],
                    processRawData: [],
                    processDatapoints: [],
                    processOffset: [],
                    drawBackground: [],
                    drawSeries: [],
                    draw: [],
                    bindEvents: [],
                    drawOverlay: [],
                    shutdown: []
                },
                ft = this;
            ft.setData = r, ft.setupGrid = w, ft.draw = P, ft.getPlaceholder = function () {
                return g
            }, ft.getCanvas = function () {
                return nt.element
            }, ft.getPlotOffset = function () {
                return ut
            }, ft.width = function () {
                return ct
            }, ft.height = function () {
                return ht
            }, ft.offset = function () {
                var t = ot.offset();
                return t.left += ut.left, t.top += ut.top, t
            }, ft.getData = function () {
                return tt
            }, ft.getAxes = function () {
                var n = {};
                return gt.each(st.concat(lt), function (t, e) {
                    e && (n[e.direction + (1 != e.n ? e.n : "") + "axis"] = e)
                }), n
            }, ft.getXAxes = function () {
                return st
            }, ft.getYAxes = function () {
                return lt
            }, ft.c2p = c, ft.p2c = s, ft.getOptions = function () {
                return et
            }, ft.highlight = G, ft.unhighlight = Q, ft.triggerRedrawOverlay = U, ft.pointOffset = function (t) {
                return {
                    left: parseInt(st[f(t, "x") - 1].p2c(+t.x) + ut.left, 10),
                    top: parseInt(lt[f(t, "y") - 1].p2c(+t.y) + ut.top, 10)
                }
            }, ft.shutdown = m, ft.destroy = function () {
                m(), g.removeData("plot").empty(), tt = [], st = [], lt = [], pt = [], ft = dt = at = rt = ot = it = nt = et = null
            }, ft.resize = function () {
                var t = g.width(),
                    e = g.height();
                nt.resize(t, e), it.resize(t, e)
            }, ft.hooks = dt, n(ft), o(e), h(), r(t), w(), P(), d();
            var pt = [],
                mt = null
        }

        function yt(t, e) {
            return e * Math.floor(t / e)
        }
        var f = Object.prototype.hasOwnProperty;
        vt.prototype.resize = function (t, e) {
            if (t <= 0 || e <= 0) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
            var n = this.element,
                i = this.context,
                o = this.pixelRatio;
            this.width != t && (n.width = t * o, n.style.width = t + "px", this.width = t), this.height != e && (n.height = e * o, n.style.height = e + "px", this.height = e), i.restore(), i.save(), i.scale(o, o)
        }, vt.prototype.clear = function () {
            this.context.clearRect(0, 0, this.width, this.height)
        }, vt.prototype.render = function () {
            var t = this._textCache;
            for (var e in t)
                if (f.call(t, e)) {
                    var n = this.getTextLayer(e),
                        i = t[e];
                    for (var o in n.hide(), i)
                        if (f.call(i, o)) {
                            var r = i[o];
                            for (var a in r)
                                if (f.call(r, a)) {
                                    for (var s, l = r[a].positions, u = 0; s = l[u]; u++) s.active ? s.rendered || (n.append(s.element), s.rendered = !0) : (l.splice(u--, 1), s.rendered && s.element.detach());
                                    0 == l.length && delete r[a]
                                }
                        } n.show()
                }
        }, vt.prototype.getTextLayer = function (t) {
            var e = this.text[t];
            return null == e && (null == this.textContainer && (this.textContainer = gt("<div class='flot-text'></div>").css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                "font-size": "smaller",
                color: "#545454"
            }).insertAfter(this.element)), e = this.text[t] = gt("<div></div>").addClass(t).css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }).appendTo(this.textContainer)), e
        }, vt.prototype.getTextInfo = function (t, e, n, i, o) {
            var r, a, s, l;
            if (e = "" + e, r = "object" == typeof n ? n.style + " " + n.variant + " " + n.weight + " " + n.size + "px/" + n.lineHeight + "px " + n.family : n, null == (a = this._textCache[t]) && (a = this._textCache[t] = {}), null == (s = a[r]) && (s = a[r] = {}), null == (l = s[e])) {
                var u = gt("<div></div>").html(e).css({
                    position: "absolute",
                    "max-width": o,
                    top: -9999
                }).appendTo(this.getTextLayer(t));
                "object" == typeof n ? u.css({
                    font: r,
                    color: n.color
                }) : "string" == typeof n && u.addClass(n), l = s[e] = {
                    width: u.outerWidth(!0),
                    height: u.outerHeight(!0),
                    element: u,
                    positions: []
                }, u.detach()
            }
            return l
        }, vt.prototype.addText = function (t, e, n, i, o, r, a, s, l) {
            var u = this.getTextInfo(t, i, o, r, a),
                c = u.positions;
            "center" == s ? e -= u.width / 2 : "right" == s && (e -= u.width), "middle" == l ? n -= u.height / 2 : "bottom" == l && (n -= u.height);
            for (var h, d = 0; h = c[d]; d++)
                if (h.x == e && h.y == n) return void(h.active = !0);
            h = {
                active: !0,
                rendered: !1,
                element: c.length ? u.element.clone() : u.element,
                x: e,
                y: n
            }, c.push(h), h.element.css({
                top: Math.round(n),
                left: Math.round(e),
                "text-align": s
            })
        }, vt.prototype.removeText = function (t, e, n, i, o, r) {
            if (null == i) {
                var a = this._textCache[t];
                if (null != a)
                    for (var s in a)
                        if (f.call(a, s)) {
                            var l = a[s];
                            for (var u in l)
                                if (f.call(l, u))
                                    for (var c = l[u].positions, h = 0; d = c[h]; h++) d.active = !1
                        }
            } else {
                var d;
                for (c = this.getTextInfo(t, i, o, r).positions, h = 0; d = c[h]; h++) d.x == e && d.y == n && (d.active = !1)
            }
        }, gt.plot = function (t, e, n) {
            return new i(gt(t), e, n, gt.plot.plugins)
        }, gt.plot.version = "0.8.2", gt.plot.plugins = [], gt.fn.plot = function (t, e) {
            return this.each(function () {
                gt.plot(this, t, e)
            })
        }
    }(jQuery),
    function (g) {
        function t(u) {
            function n(t) {
                f.active && (l(t), u.getPlaceholder().trigger("plotselecting", [o()]))
            }

            function i(t) {
                1 == t.which && (document.body.focus(), document.onselectstart !== undefined && null == p.onselectstart && (p.onselectstart = document.onselectstart, document.onselectstart = function () {
                    return !1
                }), document.ondrag !== undefined && null == p.ondrag && (p.ondrag = document.ondrag, document.ondrag = function () {
                    return !1
                }), s(f.first, t), f.active = !0, m = function (t) {
                    e(t)
                }, g(document).one("mouseup", m))
            }

            function e(t) {
                return m = null, document.onselectstart !== undefined && (document.onselectstart = p.onselectstart), document.ondrag !== undefined && (document.ondrag = p.ondrag), f.active = !1, l(t), d() ? r() : (u.getPlaceholder().trigger("plotunselected", []), u.getPlaceholder().trigger("plotselecting", [null])), !1
            }

            function o() {
                if (!d()) return null;
                if (!f.show) return null;
                var o = {},
                    r = f.first,
                    a = f.second;
                return g.each(u.getAxes(), function (t, e) {
                    if (e.used) {
                        var n = e.c2p(r[e.direction]),
                            i = e.c2p(a[e.direction]);
                        o[t] = {
                            from: Math.min(n, i),
                            to: Math.max(n, i)
                        }
                    }
                }), o
            }

            function r() {
                var t = o();
                u.getPlaceholder().trigger("plotselected", [t]), t.xaxis && t.yaxis && u.getPlaceholder().trigger("selected", [{
                    x1: t.xaxis.from,
                    y1: t.yaxis.from,
                    x2: t.xaxis.to,
                    y2: t.yaxis.to
                }])
            }

            function a(t, e, n) {
                return e < t ? t : n < e ? n : e
            }

            function s(t, e) {
                var n = u.getOptions(),
                    i = u.getPlaceholder().offset(),
                    o = u.getPlotOffset();
                t.x = a(0, e.pageX - i.left - o.left, u.width()), t.y = a(0, e.pageY - i.top - o.top, u.height()), "y" == n.selection.mode && (t.x = t == f.first ? 0 : u.width()), "x" == n.selection.mode && (t.y = t == f.first ? 0 : u.height())
            }

            function l(t) {
                null != t.pageX && (s(f.second, t), d() ? (f.show = !0, u.triggerRedrawOverlay()) : c(!0))
            }

            function c(t) {
                f.show && (f.show = !1, u.triggerRedrawOverlay(), t || u.getPlaceholder().trigger("plotunselected", []))
            }

            function h(t, e) {
                var n, i, o, r, a = u.getAxes();
                for (var s in a)
                    if ((n = a[s]).direction == e && (t[r = e + n.n + "axis"] || 1 != n.n || (r = e + "axis"), t[r])) {
                        i = t[r].from, o = t[r].to;
                        break
                    } if (t[r] || (n = "x" == e ? u.getXAxes()[0] : u.getYAxes()[0], i = t[e + "1"], o = t[e + "2"]), null != i && null != o && o < i) {
                    var l = i;
                    i = o, o = l
                }
                return {
                    from: i,
                    to: o,
                    axis: n
                }
            }

            function t(t, e) {
                var n, i = u.getOptions();
                "y" == i.selection.mode ? (f.first.x = 0, f.second.x = u.width()) : (n = h(t, "x"), f.first.x = n.axis.p2c(n.from), f.second.x = n.axis.p2c(n.to)), "x" == i.selection.mode ? (f.first.y = 0, f.second.y = u.height()) : (n = h(t, "y"), f.first.y = n.axis.p2c(n.from), f.second.y = n.axis.p2c(n.to)), f.show = !0, u.triggerRedrawOverlay(), !e && d() && r()
            }

            function d() {
                var t = u.getOptions().selection.minSize;
                return Math.abs(f.second.x - f.first.x) >= t && Math.abs(f.second.y - f.first.y) >= t
            }
            var f = {
                    first: {
                        x: -1,
                        y: -1
                    },
                    second: {
                        x: -1,
                        y: -1
                    },
                    show: !1,
                    active: !1
                },
                p = {},
                m = null;
            u.clearSelection = c, u.setSelection = t, u.getSelection = o, u.hooks.bindEvents.push(function (t, e) {
                null != t.getOptions().selection.mode && (e.mousemove(n), e.mousedown(i))
            }), u.hooks.drawOverlay.push(function (t, e) {
                if (f.show && d()) {
                    var n = t.getPlotOffset(),
                        i = t.getOptions();
                    e.save(), e.translate(n.left, n.top);
                    var o = g.color.parse(i.selection.color);
                    e.strokeStyle = o.scale("a", .8).toString(), e.lineWidth = 1, e.lineJoin = i.selection.shape, e.fillStyle = o.scale("a", .4).toString();
                    var r = Math.min(f.first.x, f.second.x) + .5,
                        a = Math.min(f.first.y, f.second.y) + .5,
                        s = Math.abs(f.second.x - f.first.x) - 1,
                        l = Math.abs(f.second.y - f.first.y) - 1;
                    e.fillRect(r, a, s, l), e.strokeRect(r, a, s, l), e.restore()
                }
            }), u.hooks.shutdown.push(function (t, e) {
                e.unbind("mousemove", n), e.unbind("mousedown", i), m && g(document).unbind("mouseup", m)
            })
        }
        g.plot.plugins.push({
            init: t,
            options: {
                selection: {
                    mode: null,
                    color: "#e8cfac",
                    shape: "round",
                    minSize: 5
                }
            },
            name: "selection",
            version: "1.1"
        })
    }(jQuery),
    function (r) {
        var a = function (t, e) {
            this.element = r(t), this.picker = r('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element), this.id = this.element.data("slider-id") || e.id, this.id && (this.picker[0].id = this.id), "undefined" != typeof Modernizr && Modernizr.touch && (this.touchCapable = !0);
            var n = this.element.data("slider-tooltip") || e.tooltip;
            switch (this.tooltip = this.picker.find(".tooltip"), this.tooltipInner = this.tooltip.find("div.tooltip-inner"), this.orientation = this.element.data("slider-orientation") || e.orientation, this.orientation) {
                case "vertical":
                    this.picker.addClass("slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight", this.tooltip.addClass("right")[0].style.left = "100%";
                    break;
                default:
                    this.picker.addClass("slider-horizontal").css("width", this.element.outerWidth()), this.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth", this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
            }
            switch (this.min = this.element.data("slider-min") || e.min, this.max = this.element.data("slider-max") || e.max, this.step = this.element.data("slider-step") || e.step, this.value = this.element.data("slider-value") || e.value, this.value[1] && (this.range = !0), this.selection = this.element.data("slider-selection") || e.selection, this.selectionEl = this.picker.find(".slider-selection"), "none" === this.selection && this.selectionEl.addClass("hide"), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find(".slider-handle:first"), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find(".slider-handle:last"), this.handle2Stype = this.handle2[0].style, this.element.data("slider-handle") || e.handle) {
                case "round":
                    this.handle1.addClass("round"), this.handle2.addClass("round");
                    break;
                case "triangle":
                    this.handle1.addClass("triangle"), this.handle2.addClass("triangle")
            }
            this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos], this.formater = e.formater, this.layout(), this.touchCapable ? this.picker.on({
                touchstart: r.proxy(this.mousedown, this)
            }) : this.picker.on({
                mousedown: r.proxy(this.mousedown, this)
            }), "show" === n ? this.picker.on({
                mouseenter: r.proxy(this.showTooltip, this),
                mouseleave: r.proxy(this.hideTooltip, this)
            }) : this.tooltip.addClass("hide")
        };
        a.prototype = {
            constructor: a,
            over: !1,
            inDrag: !1,
            showTooltip: function () {
                this.tooltip.addClass("in"), this.over = !0
            },
            hideTooltip: function () {
                !1 === this.inDrag && this.tooltip.removeClass("in"), this.over = !1
            },
            layout: function () {
                this.handle1Stype[this.stylePos] = this.percentage[0] + "%", this.handle2Stype[this.stylePos] = this.percentage[1] + "%", "vertical" == this.orientation ? (this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.height = Math.abs(
                    this.percentage[0] - this.percentage[1]) + "%") : (this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + "%"), this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - ("vertical" === this.orientation ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
            },
            mousedown: function (t) {
                this.touchCapable && "touchstart" === t.type && (t = t.originalEvent), this.offset = this.picker.offset(), this.size = this.picker[0][this.sizePos];
                var e = this.getPercentage(t);
                if (this.range) {
                    var n = Math.abs(this.percentage[0] - e),
                        i = Math.abs(this.percentage[1] - e);
                    this.dragged = n < i ? 0 : 1
                } else this.dragged = 0;
                this.percentage[this.dragged] = e, this.layout(), this.touchCapable ? r(document).on({
                    touchmove: r.proxy(this.mousemove, this),
                    touchend: r.proxy(this.mouseup, this)
                }) : r(document).on({
                    mousemove: r.proxy(this.mousemove, this),
                    mouseup: r.proxy(this.mouseup, this)
                }), this.inDrag = !0;
                var o = this.calculateValue();
                return this.element.trigger({
                    type: "slideStart",
                    value: o
                }).trigger({
                    type: "slide",
                    value: o
                }), !1
            },
            mousemove: function (t) {
                this.touchCapable && "touchmove" === t.type && (t = t.originalEvent);
                var e = this.getPercentage(t);
                this.range && (0 === this.dragged && this.percentage[1] < e ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : 1 === this.dragged && this.percentage[0] > e && (this.percentage[1] = this.percentage[0], this.dragged = 0)), this.percentage[this.dragged] = e, this.layout();
                var n = this.calculateValue();
                return this.element.trigger({
                    type: "slide",
                    value: n
                }).data("value", n).prop("value", n), !1
            },
            mouseup: function () {
                this.touchCapable ? r(document).off({
                    touchmove: this.mousemove,
                    touchend: this.mouseup
                }) : r(document).off({
                    mousemove: this.mousemove,
                    mouseup: this.mouseup
                }), this.inDrag = !1, 0 == this.over && this.hideTooltip(), this.element;
                var t = this.calculateValue();
                return this.element.trigger({
                    type: "slideStop",
                    value: t
                }).data("value", t).prop("value", t), !1
            },
            calculateValue: function () {
                var t;
                return this.range ? (t = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step], this.value = t) : (t = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.value = [t, this.value[1]]), t
            },
            getPercentage: function (t) {
                this.touchCapable && (t = t.touches[0]);
                var e = 100 * (t[this.mousePos] - this.offset[this.stylePos]) / this.size;
                return e = Math.round(e / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, e))
            },
            getValue: function () {
                return this.range ? this.value : this.value[0]
            },
            setValue: function (t) {
                this.value = t, this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), "after" == this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.percentage = [100 * (this.value[0] - this.min) / this.diff, 100 * (this.value[1] - this.min) / this.diff, 100 * this.step / this.diff], this.layout()
            }
        }, r.fn.slider = function (i, o) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("slider"),
                    n = "object" == typeof i && i;
                e || t.data("slider", e = new a(this, r.extend({}, r.fn.slider.defaults, n))), "string" == typeof i && e[i](o)
            })
        }, r.fn.slider.defaults = {
            min: 0,
            max: 10,
            step: 1,
            orientation: "horizontal",
            value: 5,
            selection: "before",
            tooltip: "show",
            handle: "round",
            formater: function (t) {
                return t
            }
        }, r.fn.slider.Constructor = a
    }(window.jQuery),
    function (m) {
        "use strict";

        function t(i) {
            return this.each(function () {
                var t = m(this),
                    e = t.data("bs.tooltip"),
                    n = "object" == typeof i && i;
                !e && /destroy|hide/.test(i) || (e || t.data("bs.tooltip", e = new g(this, n)), "string" == typeof i && e[i]())
            })
        }
        var g = function (t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        g.VERSION = "3.3.7", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, g.prototype.init = function (t, e, n) {
            if (this.enabled = !0, this.type = t, this.$element = m(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                var r = i[o];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var a = "hover" == r ? "mouseenter" : "focusin",
                        s = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, m.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = m.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, g.prototype.getDefaults = function () {
            return g.DEFAULTS
        }, g.prototype.getOptions = function (t) {
            return (t = m.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, g.prototype.getDelegateOptions = function () {
            var n = {},
                i = this.getDefaults();
            return this._options && m.each(this._options, function (t, e) {
                i[t] != e && (n[t] = e)
            }), n
        }, g.prototype.enter = function (t) {
            var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
            if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";
            else {
                if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
                e.timeout = setTimeout(function () {
                    "in" == e.hoverState && e.show()
                }, e.options.delay.show)
            }
        }, g.prototype.isInStateTrue = function () {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, g.prototype.leave = function (t) {
            var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
            if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
                if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
                e.timeout = setTimeout(function () {
                    "out" == e.hoverState && e.hide()
                }, e.options.delay.hide)
            }
        }, g.prototype.show = function () {
            var t = m.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var e = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !e) return;
                var n = this,
                    i = this.tip(),
                    o = this.getUID(this.type);
                this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                    a = /\s?auto?\s?/i,
                    s = a.test(r);
                s && (r = r.replace(a, "") || "top"), i.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(r).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var l = this.getPosition(),
                    u = i[0].offsetWidth,
                    c = i[0].offsetHeight;
                if (s) {
                    var h = r,
                        d = this.getPosition(this.$viewport);
                    r = "bottom" == r && l.bottom + c > d.bottom ? "top" : "top" == r && l.top - c < d.top ? "bottom" : "right" == r && l.right + u > d.width ? "left" : "left" == r && l.left - u < d.left ? "right" : r, i.removeClass(h).addClass(r)
                }
                var f = this.getCalculatedOffset(r, l, u, c);
                this.applyPlacement(f, r);
                var p = function () {
                    var t = n.hoverState;
                    n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
                };
                m.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", p).emulateTransitionEnd(g.TRANSITION_DURATION) : p()
            }
        }, g.prototype.applyPlacement = function (t, e) {
            var n = this.tip(),
                i = n[0].offsetWidth,
                o = n[0].offsetHeight,
                r = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(a) && (a = 0), t.top += r, t.left += a, m.offset.setOffset(n[0], m.extend({
                using: function (t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, t), 0), n.addClass("in");
            var s = n[0].offsetWidth,
                l = n[0].offsetHeight;
            "top" == e && l != o && (t.top = t.top + o - l);
            var u = this.getViewportAdjustedDelta(e, t, s, l);
            u.left ? t.left += u.left : t.top += u.top;
            var c = /top|bottom/.test(e),
                h = c ? 2 * u.left - i + s : 2 * u.top - o + l,
                d = c ? "offsetWidth" : "offsetHeight";
            n.offset(t), this.replaceArrow(h, n[0][d], c)
        }, g.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, g.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, g.prototype.hide = function (t) {
            function e() {
                "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t()
            }
            var n = this,
                i = m(this.$tip),
                o = m.Event("hide.bs." + this.type);
            if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), m.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(g.TRANSITION_DURATION) : e(), this.hoverState = null, this
        }, g.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, g.prototype.hasContent = function () {
            return this.getTitle()
        }, g.prototype.getPosition = function (t) {
            var e = (t = t || this.$element)[0],
                n = "BODY" == e.tagName,
                i = e.getBoundingClientRect();
            null == i.width && (i = m.extend({}, i, {
                width: i.right - i.left,
                height: i.bottom - i.top
            }));
            var o = window.SVGElement && e instanceof window.SVGElement,
                r = n ? {
                    top: 0,
                    left: 0
                } : o ? null : t.offset(),
                a = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                s = n ? {
                    width: m(window).width(),
                    height: m(window).height()
                } : null;
            return m.extend({}, i, a, s, r)
        }, g.prototype.getCalculatedOffset = function (t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, g.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var s = e.top - r - a.scroll,
                    l = e.top + r - a.scroll + i;
                s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
            } else {
                var u = e.left - r,
                    c = e.left + r + n;
                u < a.left ? o.left = a.left - u : c > a.right && (o.left = a.left + a.width - c)
            }
            return o
        }, g.prototype.getTitle = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, g.prototype.getUID = function (t) {
            for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
            return t
        }, g.prototype.tip = function () {
            if (!this.$tip && (this.$tip = m(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, g.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, g.prototype.enable = function () {
            this.enabled = !0
        }, g.prototype.disable = function () {
            this.enabled = !1
        }, g.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, g.prototype.toggle = function (t) {
            var e = this;
            t && ((e = m(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
        }, g.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide(function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            })
        };
        var e = m.fn.tooltip;
        m.fn.tooltip = t, m.fn.tooltip.Constructor = g, m.fn.tooltip.noConflict = function () {
            return m.fn.tooltip = e, this
        }
    }(jQuery), Blacklight.onLoad(function () {
        function n(t) {
            if (t && 0 < t.width()) {
                t.height(t.width() * r);
                var e = t.data("plot");
                if (e) e.resize(), e.setupGrid(), e.draw(), $(t).closest(".limit_content").find("form.range_limit").find("input.range_begin").trigger("change"), $(t).trigger(a)
            }
        }

        function i(t, e) {
            if (0 < t.width()) {
                var n = t.width() * r;
                t.height(n), o($(t)), $(t).trigger(a)
            } else 0 < e && setTimeout(function () {
                i(t, e - 50)
            }, 50)
        }

        function o(a) {
            if (m()) {
                var o = new Array,
                    r = new Array,
                    s = new Array,
                    t = BlacklightRangeLimit.parseNum($(a).find("ul li:first-child span.from").text()),
                    e = BlacklightRangeLimit.parseNum($(a).find("ul li:last-child span.to").text());
                $(a).find("ul li").each(function () {
                    var t = BlacklightRangeLimit.parseNum($(this).find("span.from").text()),
                        e = BlacklightRangeLimit.parseNum($(this).find("span.to").text()),
                        n = BlacklightRangeLimit.parseNum($(this).find("span.count").text()),
                        i = n / (e - t + 1);
                    o.push([t, i]), o.push([e + 1, i]), s.push(t), r.push({
                        from: t,
                        to: e,
                        count: n,
                        label: $(this).find(".facet_select").text()
                    })
                });
                var n, i = BlacklightRangeLimit.parseNum($(a).find("ul li:last-child span.to").text()) + 1;
                s.push(i);
                var l = $(a).closest(".facet_limit").data("plot-config") || {};
                try {
                    n = $.plot($(a), [o], $.extend(!0, l, {
                        yaxis: {
                            ticks: [],
                            min: 0,
                            autoscaleMargin: .1
                        },
                        xaxis: {
                            tickDecimals: 0
                        },
                        series: {
                            lines: {
                                fill: !0,
                                steps: !0
                            }
                        },
                        grid: {
                            clickable: !0,
                            hoverable: !0,
                            autoHighlight: !1
                        },
                        selection: {
                            mode: "x"
                        }
                    }))
                } catch (h) {
                    alert(h)
                }
                find_segment_for = p(r);
                var u = null;
                $(".distribution").tooltip({
                    placement: "bottom",
                    trigger: "manual",
                    delay: {
                        show: 0,
                        hide: 100
                    }
                }), $(a).bind("plothover", function (t, e) {
                    if (segment = find_segment_for(e.x), segment != u) {
                        var n = find_segment_for(e.x).label + " (" + BlacklightRangeLimit.parseNum(segment.count) + ")";
                        $(".distribution").attr("title", n).tooltip("fixTitle").tooltip("show"), u = segment
                    }
                }), $(a).bind("mouseout", function () {
                    u = null, $(".distribution").tooltip("hide")
                }), $(a).bind("plotclick", function (t, e) {
                    null == n.getSelection() && (segment = find_segment_for(e.x), n.setSelection(d(segment.from, segment.to)))
                }), $(a).bind("plotselected plotselecting", function (t, e) {
                    if (null != e) {
                        var n = Math.floor(e.xaxis.from),
                            i = Math.floor(e.xaxis.to),
                            o = $(a).closest(".limit_content").find("form.range_limit");
                        o.find("input.range_begin").val(n), o.find("input.range_end").val(i);
                        var r = $(a).closest(".limit_content").find("[data-slider-placeholder]");
                        r && r.slider("setValue", [n, i + 1])
                    }
                });
                var c = $(a).closest(".limit_content").find("form.range_limit");
                c.find("input.range_begin, input.range_end").change(function () {
                    n.setSelection(f(c, t, e), !0)
                }), $(a).closest(".limit_content").find(".profile .range").on("slide", function (t) {
                    var e = $(t.target).data("slider").getValue();
                    c.find("input.range_begin").val(e[0]), c.find("input.range_end").val(e[1]), n.setSelection(d(e[0], Math.max(e[0], e[1] - 1)), !0)
                }), n.setSelection({
                    xaxis: {
                        from: t,
                        to: e + .9999
                    }
                })
            }
        }

        function d(t, e) {
            return {
                xaxis: {
                    from: t,
                    to: e += .99999
                }
            }
        }

        function f(t, e, n) {
            var i = BlacklightRangeLimit.parseNum($(t).find("input.range_begin").val());
            (isNaN(i) || i < e) && (i = e);
            var o = BlacklightRangeLimit.parseNum($(t).find("input.range_end").val());
            return (isNaN(o) || n < o) && (o = n), d(i, o)
        }

        function p(i) {
            return function (t) {
                for (var e = i.length - 1; 0 <= e; e--) {
                    var n = i[e];
                    if (t >= n.from) return n
                }
                return i[0]
            }
        }

        function m() {
            var t = "undefined" != typeof $.plot,
                e = "undefined" != typeof document.createElement("canvas").getContext || "undefined" != typeof window.CanvasRenderingContext2D || "undefined" != typeof G_vmlCanvasManager;
            return t && e
        }
        var r = 1 / 3.236,
            a = "plotDrawn.blacklight.rangeLimit";
        $(".range_limit .profile .distribution.chart_js ul").each(function () {
            i($(this).parent())
        }), $(".range_limit .profile .distribution a.load_distribution").each(function () {
            var n = $(this).parent("div.distribution");
            $(n).load($(this).attr("href"), function (t, e) {
                $(n).hasClass("chart_js") && "success" == e && i(n)
            })
        }), $("body").on("show.bs.collapse", function (t) {
            var e = $(t.target).filter(".facet-content").find(".chart_js");
            e && 0 == e.find("canvas").length && i(e, 1100)
        }), $("body").on("shown.bs.collapse", function (t) {
            n($(t.target).filter(".facet-content").find(".chart_js"))
        }), debounce = function (o, r, a) {
            var s;
            return function () {
                var t = this,
                    e = arguments,
                    n = function () {
                        s = null, a || o.apply(t, e)
                    },
                    i = a && !s;
                clearTimeout(s), s = setTimeout(n, r), i && o.apply(t, e)
            }
        }, $(window).on("resize", debounce(function () {
            $(".chart_js").each(function (t, e) {
                n($(e))
            })
        }, 350))
    }),
    function (t) {
        "use strict";

        function e(t) {
            this.options = t || {}
        }
        var n = t.BlacklightRangeLimit;
        e.noConflict = function i() {
            return t.BlacklightRangeLimit = n, e
        }, e.parseNum = function o(t) {
            return t = String(t).replace(/[^0-9]/g, ""), parseInt(t, 10)
        }, t.BlacklightRangeLimit = e
    }(this), Blacklight.onLoad(function () {
        function d(t) {
            var e = $(t).closest(".limit_content.range_limit").find(".current"),
                n = max = BlacklightRangeLimit.parseNum(e.find(".single").text());
            return isNaN(n) && (n = BlacklightRangeLimit.parseNum(e.find(".from").first().text()), max = BlacklightRangeLimit.parseNum(e.find(".to").first().text())), (isNaN(n) || isNaN(max)) && (n = BlacklightRangeLimit.parseNum($(t).find(".min").first().text()), max = BlacklightRangeLimit.parseNum($(t).find(".max").first().text())), [n, max]
        }

        function f(t) {
            return t % 1 == 0
        }
        $(".range_limit .profile .range.slider_js").each(function () {
            var t = $(this),
                e = d(this),
                n = e[0],
                i = e[1];
            if (f(n) && f(i)) {
                $(this).contents().wrapAll('<div style="display:none" />');
                t = $(this);
                var o = (h = $(t).closest(".range_limit").find("form.range_limit")).find("input.range_begin"),
                    r = h.find("input.range_end"),
                    a = $('<input type="text" data-slider-placeholder="true" style="width:100%;">').appendTo(t);
                if (a.slider !== undefined) {
                    a.slider({
                        min: n,
                        max: i + 1,
                        value: [n, i + 1],
                        tooltip: "hide"
                    });
                    var s = t.closest(".range_limit"),
                        l = s.find(".chart_js").data("plot"),
                        u = s.find(".slider");
                    l && u ? (u.width(l.width()), u.css("display", "block"), u.css("margin-right", "auto"), u.css("margin-left", "auto")) : u && u.css("width", "100%")
                }
                var c = $(this).parent(),
                    h = $(c).closest(".limit_content").find("form.range_limit");
                $(c).closest(".limit_content").find(".profile .range").on("slide", function (t) {
                    var e = $(t.target).data("slider").getValue();
                    h.find("input.range_begin").val(e[0]), h.find("input.range_end").val(e[1])
                })
            }
            o.val(n), r.val(i), o.change(function () {
                var t = BlacklightRangeLimit.parseNum($(this).val());
                (isNaN(t) || t < n) && (t = n);
                var e = a.data("slider").getValue();
                e[0] = t, a.slider("setValue", e)
            }), r.change(function () {
                var t = BlacklightRangeLimit.parseNum($(this).val());
                (isNaN(t) || i < t) && (t = i);
                var e = a.data("slider").getValue();
                e[1] = t, a.slider("setValue", e)
            })
        }), $("body").on("plotDrawn.blacklight.rangeLimit", function (t) {
            var e = $(t.target).closest(".limit_content.range_limit"),
                n = e.find(".chart_js").data("plot"),
                i = e.find(".slider");
            n && i && (i.width(n.width()), i.css("display", "block"), i.css("margin-right", "auto"), i.css("margin-left", "auto"))
        })
    });