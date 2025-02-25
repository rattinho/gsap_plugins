/*!
 * PhysicsPropsPlugin 3.12.3
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";

    function i() {
        return a || "undefined" != typeof window && (a = window.gsap) && a.registerPlugin && a
    }

    function j(e) {
        return Math.round(1e4 * e) / 1e4
    }

    function m() {
        return String.fromCharCode.apply(null, arguments)
    }

    function r(e) {
        a = e || i(), l || (c = a.utils.getUnit, d = a.core.getStyleSaver, h = a.core.reverting || function () { }, l = 1)
    }

    function s(e, t, n, i, o, s) {
        var r = e._gsap,
            a = r.get(e, t);
        this.p = t, this.set = r.set(e, t), this.s = this.val = parseFloat(a), this.u = c(a) || 0, this.vel = n || 0, this.v = this.vel / s, i || 0 === i ? (this.acc = i, this.a = this.acc / (s * s)) : this.acc = this.a = 0, this.fr = 1 - (o || 0)
    }
    var a, l, c, d, h, f = "PhysicsPropsPlugin",
        u = m(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        p = m(103, 115, 97, 112, 46, 99, 111, 109),
        v = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
        t = (function (e) {
            var t = "undefined" != typeof window,
                n = 0 === (t ? window.location.href : "").indexOf(m(102, 105, 108, 101, 58, 47, 47)) || -1 !== e.indexOf(m(108, 111, 99, 97, 108, 104, 111, 115, 116)) || v.test(e),
                i = [u, url_rtt, p, m(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), m(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), m(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), m(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), m(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), m(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), m(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), m(99, 100, 112, 110, 46, 105, 111), m(112, 101, 110, 115, 46, 105, 111), m(103, 97, 110, 110, 111, 110, 46, 116, 118), m(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), m(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), m(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), m(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), m(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), m(112, 108, 110, 107, 114, 46, 99, 111), m(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), m(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), m(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), m(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), m(99, 115, 98, 46, 97, 112, 112), m(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), m(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), m(99, 111, 100, 105, 101, 114, 46, 105, 111), m(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), m(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), m(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), m(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), m(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), m(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
                o = i.length;
            for (setTimeout(function checkWarn() {
                if (t)
                    if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", checkWarn);
                    else {
                        document.removeEventListener("readystatechange", checkWarn);
                        var e = "object" == typeof a ? a : t && window.gsap;
                        // t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().trialWarn && (console.log(m(37, 99, 87, 97, 114, 110, 105, 110, 103), m(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(m(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + f + m(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(m(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), m(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                    }
            }, 50); - 1 < --o;)
                if (-1 !== e.indexOf(i[o])) return;
            n || setTimeout(function () {
                t && (window.location.href = m(104, 116, 116, 112, 115, 58, 47, 47) + u + m(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + f + "&source=trial")
            }, 4e3)
        }("undefined" != typeof window ? window.location.host : ""), {
            version: "3.12.3",
            name: "physicsProps",
            register: r,
            init: function init(e, t, n) {
                l || r();
                var i, o = this;
                for (i in o.styles = d && d(e), o.target = e, o.tween = n, o.step = 0, o.sps = 30, o.vProps = [], t) {
                    var a = t[i],
                        c = a.velocity,
                        f = a.acceleration,
                        m = a.friction;
                    (c || f) && (o.vProps.push(new s(e, i, c, f, m, o.sps)), o._props.push(i), d && o.styles.save(i), m && (o.hasFr = 1))
                }
            },
            render: function render(e, t) {
                var n, i, o, s, r, a = t.vProps,
                    c = t.tween,
                    f = t.target,
                    m = t.step,
                    l = t.hasFr,
                    d = t.sps,
                    u = a.length,
                    p = c._from ? c._dur - c._time : c._time;
                if (c._time || !h())
                    if (l) {
                        if ((i = (0 | (p *= d)) - m) < 0) {
                            for (; u--;)(n = a[u]).v = n.vel / d, n.val = n.s;
                            u = a.length, t.step = m = 0, i = 0 | p
                        }
                        for (o = p % 1; u--;) {
                            for (n = a[u], s = i; s--;) n.v += n.a, n.v *= n.fr, n.val += n.v;
                            n.set(f, n.p, j(n.val + n.v * o * n.fr) + n.u)
                        }
                        t.step += i
                    } else
                        for (r = p * p * .5; u--;)(n = a[u]).set(f, n.p, j(n.s + n.vel * p + n.acc * r) + n.u);
                else t.styles.revert()
            },
            kill: function kill(e) {
                for (var t = this.vProps, n = t.length; n--;) t[n].p === e && t.splice(n, 1)
            }
        });
    i() && a.registerPlugin(t), e.PhysicsPropsPlugin = t, e.default = t;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});