!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = a.document
      , m = "2.1.1"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"),
            b.text = a,
            l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (e = d.call(arguments, 2),
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: k
    }),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + L + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes),
            F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 9 === k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u] = !0,
            a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b = +b,
                hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {},
        f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e,
            o = e.documentElement,
            p = !f(e),
            g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })),
            c.attributes = ib(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }),
            c.getById = ib(function(a) {
                return o.appendChild(a).id = u,
                !e.getElementsByName || !e.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"),
                a.querySelectorAll(":checked").length || q.push(":checked")
            }),
            ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", Q)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            e) : n
        }
        ,
        fb.matches = function(a, b) {
            return fb(a, null, null, b)
        }
        ,
        fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }
        ,
        fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a),
                    a = a.replace(cb, db).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = lb(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = mb(b);
        function pb() {}
        pb.prototype = d.filters = d.pseudos,
        d.setFilters = new pb,
        g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        }
        ;
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)),
            e && !e[u] && (e = vb(e, f)),
            hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ub(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : I.apply(g, r)
            })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wb(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qb(j),
                        !a)
                            return I.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ib(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fb
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = n.expr.match.needsContext
      , v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
                v.test(c[1]) && n.isPlainObject(b))
                    for (c in b)
                        n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]),
            d && d.parentNode && (this.length = 1,
            this[0] = d),
            this.context = l,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    A.prototype = n.fn,
    y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = []
              , e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (C[a] || n.unique(e),
            B.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l,
            c = !0,
            g = e || 0,
            e = 0,
            f = h.length,
            d = !0; h && f > g; g++)
                if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1,
            h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments),
                    d ? f = h.length : b && (e = c,
                    j(b))
                }
                return this
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)
                        h.splice(c, 1),
                        d && (f >= c && f--,
                        g >= c && g--)
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                f = 0,
                this
            },
            disable: function() {
                return h = i = b = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                b || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [],
                b = [a, b.slice ? b.slice() : b],
                d ? i.push(b) : j(b)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return k
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]),
            n.fn.triggerHandler && (n(l).triggerHandler("ready"),
            n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1),
        a.removeEventListener("load", I, !1),
        n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(),
        "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1),
        a.addEventListener("load", I, !1))),
        H.promise(b)
    }
    ,
    n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
    ;
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
    ;
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = n.expando + Math.random()
    }
    K.uid = 1,
    K.accepts = n.acceptData,
    K.prototype = {
        key: function(a) {
            if (!K.accepts(a))
                return 0;
            var b = {}
              , c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c,
                    n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                b in g ? d = [b, e] : (d = e,
                d = d in g ? [d] : d.match(E) || [])),
                c = d.length;
                while (c--)
                    delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K
      , M = new K
      , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f),
                1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a),
                    void 0 !== c)
                        return c;
                    if (c = M.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b),
                        -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = L.get(a, b),
            c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = L.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , R = ["Top", "Right", "Bottom", "Left"]
      , S = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }
      , T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment()
          , b = a.appendChild(l.createElement("div"))
          , c = l.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin"in a;
    var V = /^key/
      , W = /^(?:mouse|pointer|contextmenu)|click/
      , X = /^(?:focusinfocus|focusoutblur)$/
      , Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0
    }
    function $() {
        return !1
    }
    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle,
                L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l,
            3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            k = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = r.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q,
                    X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g),
                        h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q,
                    m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"),
                    m && m.apply(g, c),
                    m = k && g[k],
                    m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k],
                h && (d[k] = null),
                n.event.triggered = q,
                d[q](),
                n.event.triggered = void 0,
                h && (d[k] = h)),
                b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g,
                        a.data = g.data,
                        e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== e && (a.result = e) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l,
                d = c.documentElement,
                e = c.body,
                a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new n.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = l),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = L.access(d, b);
                e || d.addEventListener(a, c, !0),
                L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0),
                L.remove(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d,
            d = function(a) {
                return n().off(a),
                f.apply(this, arguments)
            }
            ,
            d.guid = f.guid || (f.guid = n.guid++)),
            this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = $),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bb = /<([\w:]+)/
      , cb = /<|&#?\w+;/
      , db = /<(?:script|style|link)/i
      , eb = /checked\s*(?:[^=]|=\s*.checked.)/i
      , fb = /^$|\/(?:java|ecma)script/i
      , gb = /^true\/(.*)/
      , hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ib.optgroup = ib.option,
    ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead,
    ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a),
            g = L.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a),
            i = n.extend({}, h),
            M.set(b, i))
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h),
                f = ob(a),
                d = 0,
                e = f.length; e > d; d++)
                    pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a),
                    g = g || ob(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        nb(f[d], g[d]);
                else
                    nb(a, h);
            return g = ob(h, "script"),
            g.length > 0 && mb(g, !i && ob(a, "script")),
            h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m],
                e || 0 === e)
                    if ("object" === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement("div")),
                        g = (bb.exec(e) || ["", ""])[1].toLowerCase(),
                        h = ib[g] || ib._default,
                        f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2],
                        j = h[0];
                        while (j--)
                            f = f.lastChild;
                        n.merge(l, f.childNodes),
                        f = k.firstChild,
                        f.textContent = ""
                    } else
                        l.push(b.createTextNode(e));
            k.textContent = "",
            m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e),
                f = ob(k.appendChild(e), "script"),
                i && mb(f),
                c)) {
                    j = 0;
                    while (e = f[j++])
                        fb.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando],
                e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }),
    n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(ob(c)),
                c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(ob(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(ob(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                n.cleanData(ob(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this),
            d = c.firstChild,
            1 === c.childNodes.length && (c = d),
            d)) {
                for (f = n.map(ob(c, "script"), kb),
                g = f.length; l > j; j++)
                    h = c,
                    j !== o && (h = n.clone(h, !0, !0),
                    g && n.merge(f, ob(h, "script"))),
                    b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument,
                    n.map(f, lb),
                    j = 0; g > j; j++)
                        h = f[j],
                        fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0),
                n(e[h])[b](c),
                f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(),
        f
    }
    function tb(a) {
        var b = l
          , c = rb[a];
        return c || (c = sb(a, b),
        "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = qb[0].contentDocument,
        b.write(),
        b.close(),
        c = sb(a, b),
        qb.detach()),
        rb[a] = c),
        c
    }
    var ub = /^margin/
      , vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i")
      , wb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a),
        c && (g = c.getPropertyValue(b) || c[b]),
        c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        vb.test(g) && ub.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 !== g ? g + "" : g
    }
    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box",
            f.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === f.style.backgroundClip,
            e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
            e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                f.innerHTML = "",
                d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top,
                c = "4px" === g.width,
                d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(),
                    b
                },
                boxSizingReliable: function() {
                    return null == c && g(),
                    c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    f.style.width = "1px",
                    d.appendChild(e),
                    b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                    d.removeChild(e),
                    b
                }
            })
        }
    }(),
    n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var zb = /^(none|table(?!-c[ea]).+)/
      , Ab = new RegExp("^(" + Q + ")(.*)$","i")
      , Bb = new RegExp("^([+-])=(" + Q + ")","i")
      , Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Eb = ["Webkit", "O", "Moz", "ms"];
    function Fb(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1)
          , d = b
          , e = Eb.length;
        while (e--)
            if (b = Eb[e] + c,
            b in a)
                return b;
        return d
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + R[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }
    function Ib(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = wb(a)
          , g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            vb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = L.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d),
            "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
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
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = xb(a, b, d)),
            "normal" === e && b in Db && (e = Db[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }),
    n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a,b,c,d,e)
    }
    n.Tween = Kb,
    Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Kb.propHooks._default.set(this),
            this
        }
    },
    Kb.prototype.init.prototype = Kb.prototype,
    Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    n.fx = Kb.prototype.init,
    n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = Ob.exec(b)
              , f = e && e[3] || (n.cssNumber[a] ? "" : "px")
              , g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    n.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }),
        Lb = n.now()
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = R[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Nb.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ub(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts))
                return d;
        return n.map(k, Ub, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                Rb[c] = Rb[c] || [],
                Rb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        Lb = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        clearInterval(Mb),
        Mb = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a = l.createElement("input")
          , b = l.createElement("select")
          , c = b.appendChild(l.createElement("option"));
        a.type = "checkbox",
        k.checkOn = "" !== a.value,
        k.optSelected = c.selected,
        b.disabled = !0,
        k.optDisabled = !c.disabled,
        a = l.createElement("input"),
        a.value = "t",
        a.type = "radio",
        k.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b],
            $b[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            $b[b] = f),
            e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !n.isXMLDoc(a),
                f && (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }),
    k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now()
      , dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a)
            return null;
        try {
            c = new DOMParser,
            b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a),
        b
    }
    ;
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = l.createElement("a"),
        fc.href = "",
        fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function sc(a, b, c, d) {
        var e = {}
          , f = a === oc;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = ic.exec(e))
                                f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()),
            k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)),
            sc(nc, k, b, v),
            2 === t)
                return v;
            i = k.global,
            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !kc.test(k.type),
            d = k.url,
            k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)),
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1,
                i && m.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    c.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                c = void 0,
                e = h || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                f && (u = uc(k, v, f)),
                u = vc(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (n.lastModified[d] = w),
                w = v.getResponseHeader("etag"),
                w && (n.etag[d] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                i && (m.trigger("ajaxComplete", [v, k]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }
    ,
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    }
    ;
    var wc = /%20/g
      , xc = /\[\]$/
      , yc = /\r?\n/g
      , zc = /^(?:submit|button|image|reset|file)$/i
      , Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Bc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(yc, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    }
    ;
    var Cc = 0
      , Dc = {}
      , Ec = {
        0: 200,
        1223: 204
    }
      , Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Dc)
            Dc[a]()
    }),
    k.cors = !!Fc && "withCredentials"in Fc,
    k.ajax = Fc = !!Fc,
    n.ajaxTransport(function(a) {
        var b;
        return k.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g],
                        b = f.onload = f.onerror = null,
                        "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }
                ,
                f.onload = b(),
                f.onerror = b("error"),
                b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)
                        throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = []
      , Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || n.expando + "_" + cc++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Gc.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || l;
        var d = v.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e),
        e && e.length && n(e).remove(),
        n.merge([], d.childNodes))
    }
    ;
    var Ic = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var Jc = a.document.documentElement;
    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()),
                c = Kc(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Jc;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Jc
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b),
            vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.size = function() {
        return this.length
    }
    ,
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Lc = a.jQuery
      , Mc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Mc),
        b && a.jQuery === n && (a.jQuery = Lc),
        n
    }
    ,
    typeof b === U && (a.jQuery = a.$ = n),
    n
});
;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires
                  , t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            if (key && key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    }
    ;
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    }
    ;
}));
;if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }
    function n(n) {
        n && 3 === n.which || (t(a).remove(),
        t(o).each(function() {
            var i = t(this)
              , a = e(i)
              , o = {
                relatedTarget: this
            };
            a.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(a[0], n.target) || (a.trigger(n = t.Event("hide.bs.dropdown", o)),
            n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
            a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }
    function i(e) {
        return this.each(function() {
            var n = t(this)
              , i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)),
            "string" == typeof e && i[e].call(n)
        })
    }
    var a = ".dropdown-backdrop"
      , o = '[data-toggle="dropdown"]'
      , r = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.3.7",
    r.prototype.toggle = function(i) {
        var a = t(this);
        if (!a.is(".disabled, :disabled")) {
            var o = e(a)
              , r = o.hasClass("open");
            if (n(),
            !r) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", s)),
                i.isDefaultPrevented())
                    return;
                a.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }
    ,
    r.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled")) {
                var a = e(i)
                  , r = a.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which)
                    return 27 == n.which && a.find(o).trigger("focus"),
                    i.trigger("click");
                var s = " li:not(.disabled):visible a"
                  , l = a.find(".dropdown-menu" + s);
                if (l.length) {
                    var d = l.index(n.target);
                    38 == n.which && d > 0 && d--,
                    40 == n.which && d < l.length - 1 && d++,
                    ~d || (d = 0),
                    l.eq(d).trigger("focus")
                }
            }
        }
    }
    ;
    var s = t.fn.dropdown;
    t.fn.dropdown = i,
    t.fn.dropdown.Constructor = r,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this)
              , a = n.data("bs.collapse")
              , o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !a && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
            a || n.data("bs.collapse", a = new i(this,o)),
            "string" == typeof e && a[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e),
        this.options = t.extend({}, i.DEFAULTS, n),
        this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7",
    i.TRANSITION_DURATION = 350,
    i.DEFAULTS = {
        toggle: !0
    },
    i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }
    ,
    i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (e = a.data("bs.collapse"),
            e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o),
                !o.isDefaultPrevented()) {
                    a && a.length && (n.call(a, "hide"),
                    e || a.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return s.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }
    ,
    i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var a = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : a.call(this)
            }
        }
    }
    ,
    i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var a = t(i);
            this.addAriaAndCollapsedClass(e(a), a)
        }, this)).end()
    }
    ,
    i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
        e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var a = t.fn.collapse;
    t.fn.collapse = n,
    t.fn.collapse.Constructor = i,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = a,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var a = t(this);
        a.attr("data-target") || i.preventDefault();
        var o = e(a)
          , r = o.data("bs.collapse")
          , s = r ? "toggle" : a.data();
        n.call(o, s)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap")
          , e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1
          , i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var a = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(a, e),
        this
    }
    ,
    t(function() {
        t.support.transition = e(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);
;;(function($) {
    'use strict';
    var methods = {
        init: function(options) {
            return this.each(function() {
                this.self = $(this);
                methods.destroy.call(this.self);
                this.opt = $.extend(true, {}, $.fn.raty.defaults, options);
                methods._adjustCallback.call(this);
                methods._adjustNumber.call(this);
                methods._adjustHints.call(this);
                this.opt.score = methods._adjustedScore.call(this, this.opt.score);
                if (this.opt.starType !== 'img') {
                    methods._adjustStarType.call(this);
                }
                methods._adjustPath.call(this);
                methods._createStars.call(this);
                if (this.opt.cancel) {
                    methods._createCancel.call(this);
                }
                if (this.opt.precision) {
                    methods._adjustPrecision.call(this);
                }
                methods._createScore.call(this);
                methods._apply.call(this, this.opt.score);
                methods._setTitle.call(this, this.opt.score);
                methods._target.call(this, this.opt.score);
                if (this.opt.readOnly) {
                    methods._lock.call(this);
                } else {
                    this.style.cursor = 'pointer';
                    methods._binds.call(this);
                }
            });
        },
        _adjustCallback: function() {
            var options = ['number', 'readOnly', 'score', 'scoreName', 'target'];
            for (var i = 0; i < options.length; i++) {
                if (typeof this.opt[options[i]] === 'function') {
                    this.opt[options[i]] = this.opt[options[i]].call(this);
                }
            }
        },
        _adjustedScore: function(score) {
            if (!score) {
                return score;
            }
            return methods._between(score, 0, this.opt.number);
        },
        _adjustHints: function() {
            if (!this.opt.hints) {
                this.opt.hints = [];
            }
            if (!this.opt.halfShow && !this.opt.half) {
                return;
            }
            var steps = this.opt.precision ? 10 : 2;
            for (var i = 0; i < this.opt.number; i++) {
                var group = this.opt.hints[i];
                if (Object.prototype.toString.call(group) !== '[object Array]') {
                    group = [group];
                }
                this.opt.hints[i] = [];
                for (var j = 0; j < steps; j++) {
                    var hint = group[j]
                      , last = group[group.length - 1];
                    if (last === undefined) {
                        last = null;
                    }
                    this.opt.hints[i][j] = hint === undefined ? last : hint;
                }
            }
        },
        _adjustNumber: function() {
            this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax);
        },
        _adjustPath: function() {
            this.opt.path = this.opt.path || '';
            if (this.opt.path && this.opt.path.charAt(this.opt.path.length - 1) !== '/') {
                this.opt.path += '/';
            }
        },
        _adjustPrecision: function() {
            this.opt.half = true;
        },
        _adjustStarType: function() {
            var replaces = ['cancelOff', 'cancelOn', 'starHalf', 'starOff', 'starOn'];
            this.opt.path = '';
            for (var i = 0; i < replaces.length; i++) {
                this.opt[replaces[i]] = this.opt[replaces[i]].replace('.', '-');
            }
        },
        _apply: function(score) {
            methods._fill.call(this, score);
            if (score) {
                if (score > 0) {
                    this.score.val(score);
                }
                methods._roundStars.call(this, score);
            }
        },
        _between: function(value, min, max) {
            return Math.min(Math.max(parseFloat(value), min), max);
        },
        _binds: function() {
            if (this.cancel) {
                methods._bindOverCancel.call(this);
                methods._bindClickCancel.call(this);
                methods._bindOutCancel.call(this);
            }
            methods._bindOver.call(this);
            methods._bindClick.call(this);
            methods._bindOut.call(this);
        },
        _bindClick: function() {
            var that = this;
            that.stars.on('click.raty', function(evt) {
                var execute = true
                  , score = (that.opt.half || that.opt.precision) ? that.self.data('score') : (this.alt || $(this).data('alt'));
                if (that.opt.click) {
                    execute = that.opt.click.call(that, +score, evt);
                }
                if (execute || execute === undefined) {
                    if (that.opt.half && !that.opt.precision) {
                        score = methods._roundHalfScore.call(that, score);
                    }
                    methods._apply.call(that, score);
                }
            });
        },
        _bindClickCancel: function() {
            var that = this;
            that.cancel.on('click.raty', function(evt) {
                that.score.removeAttr('value');
                if (that.opt.click) {
                    that.opt.click.call(that, null, evt);
                }
            });
        },
        _bindOut: function() {
            var that = this;
            that.self.on('mouseleave.raty', function(evt) {
                var score = +that.score.val() || undefined;
                methods._apply.call(that, score);
                methods._target.call(that, score, evt);
                methods._resetTitle.call(that);
                if (that.opt.mouseout) {
                    that.opt.mouseout.call(that, score, evt);
                }
            });
        },
        _bindOutCancel: function() {
            var that = this;
            that.cancel.on('mouseleave.raty', function(evt) {
                var icon = that.opt.cancelOff;
                if (that.opt.starType !== 'img') {
                    icon = that.opt.cancelClass + ' ' + icon;
                }
                methods._setIcon.call(that, this, icon);
                if (that.opt.mouseout) {
                    var score = +that.score.val() || undefined;
                    that.opt.mouseout.call(that, score, evt);
                }
            });
        },
        _bindOver: function() {
            var that = this
              , action = that.opt.half ? 'mousemove.raty' : 'mouseover.raty';
            that.stars.on(action, function(evt) {
                var score = methods._getScoreByPosition.call(that, evt, this);
                methods._fill.call(that, score);
                if (that.opt.half) {
                    methods._roundStars.call(that, score, evt);
                    methods._setTitle.call(that, score, evt);
                    that.self.data('score', score);
                }
                methods._target.call(that, score, evt);
                if (that.opt.mouseover) {
                    that.opt.mouseover.call(that, score, evt);
                }
            });
        },
        _bindOverCancel: function() {
            var that = this;
            that.cancel.on('mouseover.raty', function(evt) {
                var starOff = that.opt.path + that.opt.starOff
                  , icon = that.opt.cancelOn;
                if (that.opt.starType === 'img') {
                    that.stars.attr('src', starOff);
                } else {
                    icon = that.opt.cancelClass + ' ' + icon;
                    that.stars.attr('class', starOff);
                }
                methods._setIcon.call(that, this, icon);
                methods._target.call(that, null, evt);
                if (that.opt.mouseover) {
                    that.opt.mouseover.call(that, null);
                }
            });
        },
        _buildScoreField: function() {
            return $('<input />', {
                name: this.opt.scoreName,
                type: 'hidden'
            }).appendTo(this);
        },
        _createCancel: function() {
            var icon = this.opt.path + this.opt.cancelOff
              , cancel = $('<' + this.opt.starType + ' />', {
                title: this.opt.cancelHint,
                'class': this.opt.cancelClass
            });
            if (this.opt.starType === 'img') {
                cancel.attr({
                    src: icon,
                    alt: 'x'
                });
            } else {
                cancel.attr('data-alt', 'x').addClass(icon);
            }
            if (this.opt.cancelPlace === 'left') {
                this.self.prepend('&#160;').prepend(cancel);
            } else {
                this.self.append('&#160;').append(cancel);
            }
            this.cancel = cancel;
        },
        _createScore: function() {
            var score = $(this.opt.targetScore);
            this.score = score.length ? score : methods._buildScoreField.call(this);
        },
        _createStars: function() {
            for (var i = 1; i <= this.opt.number; i++) {
                var name = methods._nameForIndex.call(this, i)
                  , attrs = {
                    alt: i,
                    src: this.opt.path + this.opt[name]
                };
                if (this.opt.starType !== 'img') {
                    attrs = {
                        'data-alt': i,
                        'class': attrs.src
                    };
                }
                attrs.title = methods._getHint.call(this, i);
                $('<' + this.opt.starType + ' />', attrs).appendTo(this);
                if (this.opt.space) {
                    this.self.append(i < this.opt.number ? '&#160;' : '');
                }
            }
            this.stars = this.self.children(this.opt.starType);
        },
        _error: function(message) {
            $(this).text(message);
            $.error(message);
        },
        _fill: function(score) {
            var hash = 0;
            for (var i = 1; i <= this.stars.length; i++) {
                var icon, star = this.stars[i - 1], turnOn = methods._turnOn.call(this, i, score);
                if (this.opt.iconRange && this.opt.iconRange.length > hash) {
                    var irange = this.opt.iconRange[hash];
                    icon = methods._getRangeIcon.call(this, irange, turnOn);
                    if (i <= irange.range) {
                        methods._setIcon.call(this, star, icon);
                    }
                    if (i === irange.range) {
                        hash++;
                    }
                } else {
                    icon = this.opt[turnOn ? 'starOn' : 'starOff'];
                    methods._setIcon.call(this, star, icon);
                }
            }
        },
        _getFirstDecimal: function(number) {
            var decimal = number.toString().split('.')[1]
              , result = 0;
            if (decimal) {
                result = parseInt(decimal.charAt(0), 10);
                if (decimal.slice(1, 5) === '9999') {
                    result++;
                }
            }
            return result;
        },
        _getRangeIcon: function(irange, turnOn) {
            return turnOn ? irange.on || this.opt.starOn : irange.off || this.opt.starOff;
        },
        _getScoreByPosition: function(evt, icon) {
            var score = parseInt(icon.alt || icon.getAttribute('data-alt'), 10);
            if (this.opt.half) {
                var size = methods._getWidth.call(this)
                  , percent = parseFloat((evt.pageX - $(icon).offset().left) / size);
                score = score - 1 + percent;
            }
            return score;
        },
        _getHint: function(score, evt) {
            if (score !== 0 && !score) {
                return this.opt.noRatedMsg;
            }
            var decimal = methods._getFirstDecimal.call(this, score)
              , integer = Math.ceil(score)
              , group = this.opt.hints[(integer || 1) - 1]
              , hint = group
              , set = !evt || this.move;
            if (this.opt.precision) {
                if (set) {
                    decimal = decimal === 0 ? 9 : decimal - 1;
                }
                hint = group[decimal];
            } else if (this.opt.halfShow || this.opt.half) {
                decimal = set && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;
                hint = group[decimal];
            }
            return hint === '' ? '' : hint || score;
        },
        _getWidth: function() {
            var width = this.stars[0].width || parseFloat(this.stars.eq(0).css('font-size'));
            if (!width) {
                methods._error.call(this, 'Could not get the icon width!');
            }
            return width;
        },
        _lock: function() {
            var hint = methods._getHint.call(this, this.score.val());
            this.style.cursor = '';
            this.title = hint;
            this.score.prop('readonly', true);
            this.stars.prop('title', hint);
            if (this.cancel) {
                this.cancel.hide();
            }
            this.self.data('readonly', true);
        },
        _nameForIndex: function(i) {
            return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff';
        },
        _resetTitle: function(star) {
            for (var i = 0; i < this.opt.number; i++) {
                this.stars[i].title = methods._getHint.call(this, i + 1);
            }
        },
        _roundHalfScore: function(score) {
            var integer = parseInt(score, 10)
              , decimal = methods._getFirstDecimal.call(this, score);
            if (decimal !== 0) {
                decimal = decimal > 5 ? 1 : 0.5;
            }
            return integer + decimal;
        },
        _roundStars: function(score, evt) {
            var decimal = (score % 1).toFixed(2), name;
            if (evt || this.move) {
                name = decimal > 0.5 ? 'starOn' : 'starHalf';
            } else if (decimal > this.opt.round.down) {
                name = 'starOn';
                if (this.opt.halfShow && decimal < this.opt.round.up) {
                    name = 'starHalf';
                } else if (decimal < this.opt.round.full) {
                    name = 'starOff';
                }
            }
            if (name) {
                var icon = this.opt[name]
                  , star = this.stars[Math.ceil(score) - 1];
                methods._setIcon.call(this, star, icon);
            }
        },
        _setIcon: function(star, icon) {
            star[this.opt.starType === 'img' ? 'src' : 'className'] = this.opt.path + icon;
        },
        _setTarget: function(target, score) {
            if (score) {
                score = this.opt.targetFormat.toString().replace('{score}', score);
            }
            if (target.is(':input')) {
                target.val(score);
            } else {
                target.html(score);
            }
        },
        _setTitle: function(score, evt) {
            if (score) {
                var integer = parseInt(Math.ceil(score), 10)
                  , star = this.stars[integer - 1];
                star.title = methods._getHint.call(this, score, evt);
            }
        },
        _target: function(score, evt) {
            if (this.opt.target) {
                var target = $(this.opt.target);
                if (!target.length) {
                    methods._error.call(this, 'Target selector invalid or missing!');
                }
                var mouseover = evt && evt.type === 'mouseover';
                if (score === undefined) {
                    score = this.opt.targetText;
                } else if (score === null) {
                    score = mouseover ? this.opt.cancelHint : this.opt.targetText;
                } else {
                    if (this.opt.targetType === 'hint') {
                        score = methods._getHint.call(this, score, evt);
                    } else if (this.opt.precision) {
                        score = parseFloat(score).toFixed(1);
                    }
                    var mousemove = evt && evt.type === 'mousemove';
                    if (!mouseover && !mousemove && !this.opt.targetKeep) {
                        score = this.opt.targetText;
                    }
                }
                methods._setTarget.call(this, target, score);
            }
        },
        _turnOn: function(i, score) {
            return this.opt.single ? (i === score) : (i <= score);
        },
        _unlock: function() {
            this.style.cursor = 'pointer';
            this.removeAttribute('title');
            this.score.removeAttr('readonly');
            this.self.data('readonly', false);
            for (var i = 0; i < this.opt.number; i++) {
                this.stars[i].title = methods._getHint.call(this, i + 1);
            }
            if (this.cancel) {
                this.cancel.css('display', '');
            }
        },
        cancel: function(click) {
            return this.each(function() {
                var self = $(this);
                if (self.data('readonly') !== true) {
                    methods[click ? 'click' : 'score'].call(self, null);
                    this.score.removeAttr('value');
                }
            });
        },
        click: function(score) {
            return this.each(function() {
                if ($(this).data('readonly') !== true) {
                    score = methods._adjustedScore.call(this, score);
                    methods._apply.call(this, score);
                    if (this.opt.click) {
                        this.opt.click.call(this, score, $.Event('click'));
                    }
                    methods._target.call(this, score);
                }
            });
        },
        destroy: function() {
            return this.each(function() {
                var self = $(this)
                  , raw = self.data('raw');
                if (raw) {
                    self.off('.raty').empty().css({
                        cursor: raw.style.cursor
                    }).removeData('readonly');
                } else {
                    self.data('raw', self.clone()[0]);
                }
            });
        },
        getScore: function() {
            var score = [], value;
            this.each(function() {
                value = this.score.val();
                score.push(value ? +value : undefined);
            });
            return (score.length > 1) ? score : score[0];
        },
        move: function(score) {
            return this.each(function() {
                var integer = parseInt(score, 10)
                  , decimal = methods._getFirstDecimal.call(this, score);
                if (integer >= this.opt.number) {
                    integer = this.opt.number - 1;
                    decimal = 10;
                }
                var width = methods._getWidth.call(this)
                  , steps = width / 10
                  , star = $(this.stars[integer])
                  , percent = star.offset().left + steps * decimal
                  , evt = $.Event('mousemove', {
                    pageX: percent
                });
                this.move = true;
                star.trigger(evt);
                this.move = false;
            });
        },
        readOnly: function(readonly) {
            return this.each(function() {
                var self = $(this);
                if (self.data('readonly') !== readonly) {
                    if (readonly) {
                        self.off('.raty').children('img').off('.raty');
                        methods._lock.call(this);
                    } else {
                        methods._binds.call(this);
                        methods._unlock.call(this);
                    }
                    self.data('readonly', readonly);
                }
            });
        },
        reload: function() {
            return methods.set.call(this, {});
        },
        score: function() {
            var self = $(this);
            return arguments.length ? methods.setScore.apply(self, arguments) : methods.getScore.call(self);
        },
        set: function(options) {
            return this.each(function() {
                $(this).raty($.extend({}, this.opt, options));
            });
        },
        setScore: function(score) {
            return this.each(function() {
                if ($(this).data('readonly') !== true) {
                    score = methods._adjustedScore.call(this, score);
                    methods._apply.call(this, score);
                    methods._target.call(this, score);
                }
            });
        }
    };
    $.fn.raty = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist!');
        }
    }
    ;
    $.fn.raty.defaults = {
        cancel: false,
        cancelClass: 'raty-cancel',
        cancelHint: 'Cancel this rating!',
        cancelOff: 'cancel-off.png',
        cancelOn: 'cancel-on.png',
        cancelPlace: 'left',
        click: undefined,
        half: false,
        halfShow: true,
        hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
        iconRange: undefined,
        mouseout: undefined,
        mouseover: undefined,
        noRatedMsg: 'Not rated yet!',
        number: 5,
        numberMax: 20,
        path: undefined,
        precision: false,
        readOnly: false,
        round: {
            down: 0.25,
            full: 0.6,
            up: 0.76
        },
        score: undefined,
        scoreName: 'score',
        single: false,
        space: true,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        starType: 'img',
        target: undefined,
        targetFormat: '{score}',
        targetKeep: false,
        targetScore: undefined,
        targetText: '',
        targetType: 'hint'
    };
}
)(jQuery);
;(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}
)(navigator.userAgent || navigator.vendor || window.opera);
;(function(a) {
    a.expr[":"].onScreen = function(b) {
        var c = a(window)
          , d = c.scrollTop()
          , e = c.height()
          , f = d + e
          , g = a(b)
          , h = g.offset().top
          , i = g.height()
          , j = h + i;
        return h >= d && h < f || j > d && j <= f || i > e && h <= d && j >= f
    }
}
)(jQuery);
;!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["postscribe"] = e() : t["postscribe"] = e()
}(this, function() {
    return function(t) {
        function e(n) {
            if (r[n])
                return r[n].exports;
            var o = r[n] = {
                "exports": {},
                "id": n,
                "loaded": !1
            };
            return t[n].call(o.exports, o, o.exports, e),
            o.loaded = !0,
            o.exports
        }
        var r = {};
        return e.m = t,
        e.c = r,
        e.p = "",
        e(0)
    }([function(t, e, r) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var o = r(1)
          , i = n(o);
        t.exports = i["default"]
    }
    , function(t, e, r) {
        "use strict";
        function n(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t,
            e
        }
        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function i() {}
        function a() {
            var t = m.shift();
            if (t) {
                var e = h.last(t);
                e.afterDequeue(),
                t.stream = s.apply(void 0, t),
                e.afterStreamStart()
            }
        }
        function s(t, e, r) {
            function n(t) {
                t = r.beforeWrite(t),
                g.write(t),
                r.afterWrite(t)
            }
            g = new p["default"](t,r),
            g.id = y++,
            g.name = r.name || g.id,
            u.streams[g.name] = g;
            var o = t.ownerDocument
              , s = {
                "close": o.close,
                "open": o.open,
                "write": o.write,
                "writeln": o.writeln
            };
            c(o, {
                "close": i,
                "open": i,
                "write": function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                        e[r] = arguments[r];
                    return n(e.join(""))
                },
                "writeln": function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                        e[r] = arguments[r];
                    return n(e.join("") + "\n")
                }
            });
            var l = g.win.onerror || i;
            return g.win.onerror = function(t, e, n) {
                r.error({
                    "msg": t + " - " + e + ": " + n
                }),
                l.apply(g.win, [t, e, n])
            }
            ,
            g.write(e, function() {
                c(o, s),
                g.win.onerror = l,
                r.done(),
                g = null,
                a()
            }),
            g
        }
        function u(t, e, r) {
            if (h.isFunction(r))
                r = {
                    "done": r
                };
            else if ("clear" === r)
                return m = [],
                g = null,
                void (y = 0);
            r = h.defaults(r, d),
            t = /^#/.test(t) ? window.document.getElementById(t.substr(1)) : t.jquery ? t[0] : t;
            var n = [t, e, r];
            return t.postscribe = {
                "cancel": function() {
                    n.stream ? n.stream.abort() : n[1] = i
                }
            },
            r.beforeEnqueue(n),
            m.push(n),
            g || a(),
            t.postscribe
        }
        e.__esModule = !0;
        var c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }
        ;
        e["default"] = u;
        var l = r(2)
          , p = o(l)
          , f = r(4)
          , h = n(f)
          , d = {
            "afterAsync": i,
            "afterDequeue": i,
            "afterStreamStart": i,
            "afterWrite": i,
            "autoFix": !0,
            "beforeEnqueue": i,
            "beforeWriteToken": function(t) {
                return t
            },
            "beforeWrite": function(t) {
                return t
            },
            "done": i,
            "error": function(t) {
                throw new Error(t.msg)
            },
            "releaseAsync": !1
        }
          , y = 0
          , m = []
          , g = null;
        c(u, {
            "streams": {},
            "queue": m,
            "WriteStream": p["default"]
        })
    }
    , function(t, e, r) {
        "use strict";
        function n(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e["default"] = t,
            e
        }
        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(t, e) {
            var r = d + e
              , n = t.getAttribute(r);
            return f.existy(n) ? String(n) : n
        }
        function s(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , n = d + e;
            f.existy(r) && "" !== r ? t.setAttribute(n, r) : t.removeAttribute(n)
        }
        e.__esModule = !0;
        var u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }
          , c = r(3)
          , l = o(c)
          , p = r(4)
          , f = n(p)
          , h = !1
          , d = "data-ps-"
          , y = "ps-style"
          , m = "ps-script"
          , g = function() {
            function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, t),
                this.root = e,
                this.options = r,
                this.doc = e.ownerDocument,
                this.win = this.doc.defaultView || this.doc.parentWindow,
                this.parser = new l["default"]("",{
                    "autoFix": r.autoFix
                }),
                this.actuals = [e],
                this.proxyHistory = "",
                this.proxyRoot = this.doc.createElement(e.nodeName),
                this.scriptStack = [],
                this.writeQueue = [],
                s(this.proxyRoot, "proxyof", 0)
            }
            return t.prototype.write = function() {
                var t;
                for ((t = this.writeQueue).push.apply(t, arguments); !this.deferredRemote && this.writeQueue.length; ) {
                    var e = this.writeQueue.shift();
                    f.isFunction(e) ? this._callFunction(e) : this._writeImpl(e)
                }
            }
            ,
            t.prototype._callFunction = function(t) {
                var e = {
                    "type": "function",
                    "value": t.name || t.toString()
                };
                this._onScriptStart(e),
                t.call(this.win, this.doc),
                this._onScriptDone(e)
            }
            ,
            t.prototype._writeImpl = function(t) {
                this.parser.append(t);
                for (var e = void 0, r = void 0, n = void 0, o = []; (e = this.parser.readToken()) && !(r = f.isScript(e)) && !(n = f.isStyle(e)); )
                    e = this.options.beforeWriteToken(e),
                    e && o.push(e);
                o.length > 0 && this._writeStaticTokens(o),
                r && this._handleScriptToken(e),
                n && this._handleStyleToken(e)
            }
            ,
            t.prototype._writeStaticTokens = function(t) {
                var e = this._buildChunk(t);
                return e.actual ? (e.html = this.proxyHistory + e.actual,
                this.proxyHistory += e.proxy,
                this.proxyRoot.innerHTML = e.html,
                h && (e.proxyInnerHTML = this.proxyRoot.innerHTML),
                this._walkChunk(),
                h && (e.actualInnerHTML = this.root.innerHTML),
                e) : null
            }
            ,
            t.prototype._buildChunk = function(t) {
                for (var e = this.actuals.length, r = [], n = [], o = [], i = t.length, a = 0; a < i; a++) {
                    var s = t[a]
                      , u = s.toString();
                    if (r.push(u),
                    s.attrs) {
                        if (!/^noscript$/i.test(s.tagName)) {
                            var c = e++;
                            n.push(u.replace(/(\/?>)/, " " + d + "id=" + c + " $1")),
                            s.attrs.id !== m && s.attrs.id !== y && o.push("atomicTag" === s.type ? "" : "<" + s.tagName + " " + d + "proxyof=" + c + (s.unary ? " />" : ">"))
                        }
                    } else
                        n.push(u),
                        o.push("endTag" === s.type ? u : "")
                }
                return {
                    "tokens": t,
                    "raw": r.join(""),
                    "actual": n.join(""),
                    "proxy": o.join("")
                }
            }
            ,
            t.prototype._walkChunk = function() {
                for (var t = void 0, e = [this.proxyRoot]; f.existy(t = e.shift()); ) {
                    var r = 1 === t.nodeType
                      , n = r && a(t, "proxyof");
                    if (!n) {
                        r && (this.actuals[a(t, "id")] = t,
                        s(t, "id"));
                        var o = t.parentNode && a(t.parentNode, "proxyof");
                        o && this.actuals[o].appendChild(t)
                    }
                    e.unshift.apply(e, f.toArray(t.childNodes))
                }
            }
            ,
            t.prototype._handleScriptToken = function(t) {
                var e = this
                  , r = this.parser.clear();
                r && this.writeQueue.unshift(r),
                t.src = t.attrs.src || t.attrs.SRC,
                t = this.options.beforeWriteToken(t),
                t && (t.src && this.scriptStack.length ? this.deferredRemote = t : this._onScriptStart(t),
                this._writeScriptToken(t, function() {
                    e._onScriptDone(t)
                }))
            }
            ,
            t.prototype._handleStyleToken = function(t) {
                var e = this.parser.clear();
                e && this.writeQueue.unshift(e),
                t.type = t.attrs.type || t.attrs.TYPE || "text/css",
                t = this.options.beforeWriteToken(t),
                t && this._writeStyleToken(t),
                e && this.write()
            }
            ,
            t.prototype._writeStyleToken = function(t) {
                var e = this._buildStyle(t);
                this._insertCursor(e, y),
                t.content && (e.styleSheet && !e.sheet ? e.styleSheet.cssText = t.content : e.appendChild(this.doc.createTextNode(t.content)))
            }
            ,
            t.prototype._buildStyle = function(t) {
                var e = this.doc.createElement(t.tagName);
                return e.setAttribute("type", t.type),
                f.eachKey(t.attrs, function(t, r) {
                    e.setAttribute(t, r)
                }),
                e
            }
            ,
            t.prototype._insertCursor = function(t, e) {
                this._writeImpl('<span id="' + e + '"/>');
                var r = this.doc.getElementById(e);
                r && r.parentNode.replaceChild(t, r)
            }
            ,
            t.prototype._onScriptStart = function(t) {
                t.outerWrites = this.writeQueue,
                this.writeQueue = [],
                this.scriptStack.unshift(t)
            }
            ,
            t.prototype._onScriptDone = function(t) {
                return t !== this.scriptStack[0] ? void this.options.error({
                    "msg": "Bad script nesting or script finished twice"
                }) : (this.scriptStack.shift(),
                this.write.apply(this, t.outerWrites),
                void (!this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote),
                this.deferredRemote = null)))
            }
            ,
            t.prototype._writeScriptToken = function(t, e) {
                var r = this._buildScript(t)
                  , n = this._shouldRelease(r)
                  , o = this.options.afterAsync;
                t.src && (r.src = t.src,
                this._scriptLoadHandler(r, n ? o : function() {
                    e(),
                    o()
                }
                ));
                try {
                    this._insertCursor(r, m),
                    r.src && !n || e()
                } catch (t) {
                    this.options.error(t),
                    e()
                }
            }
            ,
            t.prototype._buildScript = function(t) {
                var e = this.doc.createElement(t.tagName);
                return f.eachKey(t.attrs, function(t, r) {
                    e.setAttribute(t, r)
                }),
                t.content && (e.text = t.content),
                e
            }
            ,
            t.prototype._scriptLoadHandler = function(t, e) {
                function r() {
                    t = t.onload = t.onreadystatechange = t.onerror = null
                }
                function n() {
                    r(),
                    null != e && e(),
                    e = null
                }
                function o(t) {
                    r(),
                    a(t),
                    null != e && e(),
                    e = null
                }
                function i(t, e) {
                    var r = t["on" + e];
                    null != r && (t["_on" + e] = r)
                }
                var a = this.options.error;
                i(t, "load"),
                i(t, "error"),
                u(t, {
                    "onload": function() {
                        if (t._onload)
                            try {
                                t._onload.apply(this, Array.prototype.slice.call(arguments, 0))
                            } catch (e) {
                                o({
                                    "msg": "onload handler failed " + e + " @ " + t.src
                                })
                            }
                        n()
                    },
                    "onerror": function() {
                        if (t._onerror)
                            try {
                                t._onerror.apply(this, Array.prototype.slice.call(arguments, 0))
                            } catch (e) {
                                return void o({
                                    "msg": "onerror handler failed " + e + " @ " + t.src
                                })
                            }
                        o({
                            "msg": "remote script failed " + t.src
                        })
                    },
                    "onreadystatechange": function() {
                        /^(loaded|complete)$/.test(t.readyState) && n()
                    }
                })
            }
            ,
            t.prototype._shouldRelease = function(t) {
                var e = /^script$/i.test(t.nodeName);
                return !e || !!(this.options.releaseAsync && t.src && t.hasAttribute("async"))
            }
            ,
            t
        }();
        e["default"] = g
    }
    , function(t, e, r) {
        !function(e, r) {
            t.exports = r()
        }(this, function() {
            return function(t) {
                function e(n) {
                    if (r[n])
                        return r[n].exports;
                    var o = r[n] = {
                        "exports": {},
                        "id": n,
                        "loaded": !1
                    };
                    return t[n].call(o.exports, o, o.exports, e),
                    o.loaded = !0,
                    o.exports
                }
                var r = {};
                return e.m = t,
                e.c = r,
                e.p = "",
                e(0)
            }([function(t, e, r) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                var o = r(1)
                  , i = n(o);
                t.exports = i["default"]
            }
            , function(t, e, r) {
                "use strict";
                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                function o(t) {
                    if (t && t.__esModule)
                        return t;
                    var e = {};
                    if (null != t)
                        for (var r in t)
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e["default"] = t,
                    e
                }
                function i(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                e.__esModule = !0;
                var a = r(2)
                  , s = o(a)
                  , u = r(3)
                  , c = o(u)
                  , l = r(6)
                  , p = n(l)
                  , f = r(5)
                  , h = {
                    "comment": /^<!--/,
                    "endTag": /^<\//,
                    "atomicTag": /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                    "startTag": /^</,
                    "chars": /^[^<]/
                }
                  , d = function() {
                    function t() {
                        var e = this
                          , r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, t),
                        this.stream = r;
                        var o = !1
                          , a = {};
                        for (var u in s)
                            s.hasOwnProperty(u) && (n.autoFix && (a[u + "Fix"] = !0),
                            o = o || a[u + "Fix"]);
                        o ? (this._readToken = (0,
                        p["default"])(this, a, function() {
                            return e._readTokenImpl()
                        }),
                        this._peekToken = (0,
                        p["default"])(this, a, function() {
                            return e._peekTokenImpl()
                        })) : (this._readToken = this._readTokenImpl,
                        this._peekToken = this._peekTokenImpl)
                    }
                    return t.prototype.append = function(t) {
                        this.stream += t
                    }
                    ,
                    t.prototype.prepend = function(t) {
                        this.stream = t + this.stream
                    }
                    ,
                    t.prototype._readTokenImpl = function() {
                        var t = this._peekTokenImpl();
                        if (t)
                            return this.stream = this.stream.slice(t.length),
                            t
                    }
                    ,
                    t.prototype._peekTokenImpl = function() {
                        for (var t in h)
                            if (h.hasOwnProperty(t) && h[t].test(this.stream)) {
                                var e = c[t](this.stream);
                                if (e)
                                    return "startTag" === e.type && /script|style/i.test(e.tagName) ? null : (e.text = this.stream.substr(0, e.length),
                                    e)
                            }
                    }
                    ,
                    t.prototype.peekToken = function() {
                        return this._peekToken()
                    }
                    ,
                    t.prototype.readToken = function() {
                        return this._readToken()
                    }
                    ,
                    t.prototype.readTokens = function(t) {
                        for (var e = void 0; e = this.readToken(); )
                            if (t[e.type] && t[e.type](e) === !1)
                                return
                    }
                    ,
                    t.prototype.clear = function() {
                        var t = this.stream;
                        return this.stream = "",
                        t
                    }
                    ,
                    t.prototype.rest = function() {
                        return this.stream
                    }
                    ,
                    t
                }();
                e["default"] = d,
                d.tokenToString = function(t) {
                    return t.toString()
                }
                ,
                d.escapeAttributes = function(t) {
                    var e = {};
                    for (var r in t)
                        t.hasOwnProperty(r) && (e[r] = (0,
                        f.escapeQuotes)(t[r], null));
                    return e
                }
                ,
                d.supports = s;
                for (var y in s)
                    s.hasOwnProperty(y) && (d.browserHasFlaw = d.browserHasFlaw || !s[y] && y)
            }
            , function(t, e) {
                "use strict";
                e.__esModule = !0;
                var r = !1
                  , n = !1
                  , o = window.document.createElement("div");
                try {
                    var i = "<P><I></P></I>";
                    o.innerHTML = i,
                    e.tagSoup = r = o.innerHTML !== i
                } catch (t) {
                    e.tagSoup = r = !1
                }
                try {
                    o.innerHTML = "<P><i><P></P></i></P>",
                    e.selfClose = n = 2 === o.childNodes.length
                } catch (t) {
                    e.selfClose = n = !1
                }
                o = null,
                e.tagSoup = r,
                e.selfClose = n
            }
            , function(t, e, r) {
                "use strict";
                function n(t) {
                    var e = t.indexOf("-->");
                    if (e >= 0)
                        return new c.CommentToken(t.substr(4, e - 1),e + 3)
                }
                function o(t) {
                    var e = t.indexOf("<");
                    return new c.CharsToken(e >= 0 ? e : t.length)
                }
                function i(t) {
                    var e = t.indexOf(">");
                    if (e !== -1) {
                        var r = t.match(l.startTag);
                        if (r) {
                            var n = function() {
                                var t = {}
                                  , e = {}
                                  , n = r[2];
                                return r[2].replace(l.attr, function(r, o) {
                                    arguments[2] || arguments[3] || arguments[4] || arguments[5] ? arguments[5] ? (t[arguments[5]] = "",
                                    e[arguments[5]] = !0) : t[o] = arguments[2] || arguments[3] || arguments[4] || l.fillAttr.test(o) && o || "" : t[o] = "",
                                    n = n.replace(r, "")
                                }),
                                {
                                    "v": new c.StartTagToken(r[1],r[0].length,t,e,(!!r[3]),n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
                                }
                            }();
                            if ("object" === ("undefined" == typeof n ? "undefined" : u(n)))
                                return n.v
                        }
                    }
                }
                function a(t) {
                    var e = i(t);
                    if (e) {
                        var r = t.slice(e.length);
                        if (r.match(new RegExp("</\\s*" + e.tagName + "\\s*>","i"))) {
                            var n = r.match(new RegExp("([\\s\\S]*?)</\\s*" + e.tagName + "\\s*>","i"));
                            if (n)
                                return new c.AtomicTagToken(e.tagName,n[0].length + e.length,e.attrs,e.booleanAttrs,n[1])
                        }
                    }
                }
                function s(t) {
                    var e = t.match(l.endTag);
                    if (e)
                        return new c.EndTagToken(e[1],e[0].length)
                }
                e.__esModule = !0;
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ;
                e.comment = n,
                e.chars = o,
                e.startTag = i,
                e.atomicTag = a,
                e.endTag = s;
                var c = r(4)
                  , l = {
                    "startTag": /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                    "endTag": /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                    "attr": /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
                    "fillAttr": /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
                }
            }
            , function(t, e, r) {
                "use strict";
                function n(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                e.__esModule = !0,
                e.EndTagToken = e.AtomicTagToken = e.StartTagToken = e.TagToken = e.CharsToken = e.CommentToken = e.Token = void 0;
                var o = r(5)
                  , i = (e.Token = function t(e, r) {
                    n(this, t),
                    this.type = e,
                    this.length = r,
                    this.text = ""
                }
                ,
                e.CommentToken = function() {
                    function t(e, r) {
                        n(this, t),
                        this.type = "comment",
                        this.length = r || (e ? e.length : 0),
                        this.text = "",
                        this.content = e
                    }
                    return t.prototype.toString = function() {
                        return "<!--" + this.content
                    }
                    ,
                    t
                }(),
                e.CharsToken = function() {
                    function t(e) {
                        n(this, t),
                        this.type = "chars",
                        this.length = e,
                        this.text = ""
                    }
                    return t.prototype.toString = function() {
                        return this.text
                    }
                    ,
                    t
                }(),
                e.TagToken = function() {
                    function t(e, r, o, i, a) {
                        n(this, t),
                        this.type = e,
                        this.length = o,
                        this.text = "",
                        this.tagName = r,
                        this.attrs = i,
                        this.booleanAttrs = a,
                        this.unary = !1,
                        this.html5Unary = !1
                    }
                    return t.formatTag = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                          , r = "<" + t.tagName;
                        for (var n in t.attrs)
                            if (t.attrs.hasOwnProperty(n)) {
                                r += " " + n;
                                var i = t.attrs[n];
                                "undefined" != typeof t.booleanAttrs && "undefined" != typeof t.booleanAttrs[n] || (r += '="' + (0,
                                o.escapeQuotes)(i) + '"')
                            }
                        return t.rest && (r += " " + t.rest),
                        r += t.unary && !t.html5Unary ? "/>" : ">",
                        void 0 !== e && null !== e && (r += e + "</" + t.tagName + ">"),
                        r
                    }
                    ,
                    t
                }());
                e.StartTagToken = function() {
                    function t(e, r, o, i, a, s) {
                        n(this, t),
                        this.type = "startTag",
                        this.length = r,
                        this.text = "",
                        this.tagName = e,
                        this.attrs = o,
                        this.booleanAttrs = i,
                        this.html5Unary = !1,
                        this.unary = a,
                        this.rest = s
                    }
                    return t.prototype.toString = function() {
                        return i.formatTag(this)
                    }
                    ,
                    t
                }(),
                e.AtomicTagToken = function() {
                    function t(e, r, o, i, a) {
                        n(this, t),
                        this.type = "atomicTag",
                        this.length = r,
                        this.text = "",
                        this.tagName = e,
                        this.attrs = o,
                        this.booleanAttrs = i,
                        this.unary = !1,
                        this.html5Unary = !1,
                        this.content = a
                    }
                    return t.prototype.toString = function() {
                        return i.formatTag(this, this.content)
                    }
                    ,
                    t
                }(),
                e.EndTagToken = function() {
                    function t(e, r) {
                        n(this, t),
                        this.type = "endTag",
                        this.length = r,
                        this.text = "",
                        this.tagName = e
                    }
                    return t.prototype.toString = function() {
                        return "</" + this.tagName + ">"
                    }
                    ,
                    t
                }()
            }
            , function(t, e) {
                "use strict";
                function r(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return t ? t.replace(/([^"]*)"/g, function(t, e) {
                        return /\\/.test(e) ? e + '"' : e + '\\"'
                    }) : e
                }
                e.__esModule = !0,
                e.escapeQuotes = r
            }
            , function(t, e) {
                "use strict";
                function r(t) {
                    return t && "startTag" === t.type && (t.unary = s.test(t.tagName) || t.unary,
                    t.html5Unary = !/\/>$/.test(t.text)),
                    t
                }
                function n(t, e) {
                    var n = t.stream
                      , o = r(e());
                    return t.stream = n,
                    o
                }
                function o(t, e) {
                    var r = e.pop();
                    t.prepend("</" + r.tagName + ">")
                }
                function i() {
                    var t = [];
                    return t.last = function() {
                        return this[this.length - 1]
                    }
                    ,
                    t.lastTagNameEq = function(t) {
                        var e = this.last();
                        return e && e.tagName && e.tagName.toUpperCase() === t.toUpperCase()
                    }
                    ,
                    t.containsTagName = function(t) {
                        for (var e, r = 0; e = this[r]; r++)
                            if (e.tagName === t)
                                return !0;
                        return !1
                    }
                    ,
                    t
                }
                function a(t, e, a) {
                    function s() {
                        var e = n(t, a);
                        e && l[e.type] && l[e.type](e)
                    }
                    var c = i()
                      , l = {
                        "startTag": function(r) {
                            var n = r.tagName;
                            "TR" === n.toUpperCase() && c.lastTagNameEq("TABLE") ? (t.prepend("<TBODY>"),
                            s()) : e.selfCloseFix && u.test(n) && c.containsTagName(n) ? c.lastTagNameEq(n) ? o(t, c) : (t.prepend("</" + r.tagName + ">"),
                            s()) : r.unary || c.push(r)
                        },
                        "endTag": function(r) {
                            var n = c.last();
                            n ? e.tagSoupFix && !c.lastTagNameEq(r.tagName) ? o(t, c) : c.pop() : e.tagSoupFix && (a(),
                            s())
                        }
                    };
                    return function() {
                        return s(),
                        r(a())
                    }
                }
                e.__esModule = !0,
                e["default"] = a;
                var s = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i
                  , u = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i
            }
            ])
        })
    }
    , function(t, e) {
        "use strict";
        function r(t) {
            return void 0 !== t && null !== t
        }
        function n(t) {
            return "function" == typeof t
        }
        function o(t, e, r) {
            var n = void 0
              , o = t && t.length || 0;
            for (n = 0; n < o; n++)
                e.call(r, t[n], n)
        }
        function i(t, e, r) {
            for (var n in t)
                t.hasOwnProperty(n) && e.call(r, n, t[n])
        }
        function a(t, e) {
            return t = t || {},
            i(e, function(e, n) {
                r(t[e]) || (t[e] = n)
            }),
            t
        }
        function s(t) {
            try {
                return Array.prototype.slice.call(t)
            } catch (r) {
                var e = function() {
                    var e = [];
                    return o(t, function(t) {
                        e.push(t)
                    }),
                    {
                        "v": e
                    }
                }();
                if ("object" === ("undefined" == typeof e ? "undefined" : f(e)))
                    return e.v
            }
        }
        function u(t) {
            return t[t.length - 1]
        }
        function c(t, e) {
            return !(!t || "startTag" !== t.type && "atomicTag" !== t.type || !("tagName"in t)) && !!~t.tagName.toLowerCase().indexOf(e)
        }
        function l(t) {
            return c(t, "script")
        }
        function p(t) {
            return c(t, "style")
        }
        e.__esModule = !0;
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        e.existy = r,
        e.isFunction = n,
        e.each = o,
        e.eachKey = i,
        e.defaults = a,
        e.toArray = s,
        e.last = u,
        e.isTag = c,
        e.isScript = l,
        e.isStyle = p
    }
    ])
});
;var original_content;
function isNumber(e) {
    return !isNaN(parseFloat(e)) && isFinite(e)
}
function randomso(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}
function getmOS() {
    var e = navigator.userAgent || navigator.vendor || window.opera || navigator.platform;
    return e.match(/iPad/i) || e.match(/iPhone/i) || e.match(/iPod/i) ? "iOS" : e.match(/Android/i) ? "Android" : "unknown"
}
function ListChapProcess(e, t, a, n, o) {
    $("#list-chapter .pagination").replaceWith(n),
    $("#list-chapter>.row").html(o),
    $("html, body").animate({
        scrollTop: $("#list-chapter").offset().top
    }, "slow"),
    window.history.pushState({
        type: "list_chap",
        truyen_name: e,
        truyen_ascii: t,
        page: a
    }, "Truyện " + e + " - Trang " + a, "/" + t + "/trang-" + a + "/#list-chapter"),
    document.title = "Truyện " + e + " - Trang " + a,
    ga("send", "pageview", {
        page: "/" + t + "/trang-" + a + "/",
        title: "Truyện " + e + " - Trang " + a + " - Ajax"
    })
}
function FormError(e, t) {
    t ? $("#" + t + " .single-page-status").removeClass("alert-success hide").addClass("alert-danger").html(e) : ($(".single-page-status").removeClass("alert-success hide").addClass("alert-danger").html(e),
    $("html, body").animate({
        scrollTop: $(".single-page-status").offset().top
    }, "slow"))
}
function FormSuccess(e, t) {
    t ? $("#" + t + " .single-page-status").removeClass("alert-danger hide").addClass("alert-success").html(e) : ($(".single-page-status").removeClass("alert-danger hide").addClass("alert-success").html(e),
    $("html, body").animate({
        scrollTop: $(".single-page-status").offset().top
    }, "slow"))
}
function FormDisable(e) {
    $(e + " :input").attr("disabled", !0)
}
function FormEnable(e) {
    $(e + " :input").attr("disabled", !1)
}
function EmailValidate(e) {
    return e.match(/^\S+@\S+\.\S+$/)
}
function UsernameValidate(e) {
    if (e.match(/^[a-z][a-z0-9]*[_\.]?[a-z0-9]+$/) && (3 <= (e = e.length) && 18 >= e))
        return "ok"
}
function PasswordValidate(e) {
    if (6 <= (e = e.length) && 128 >= e)
        return "ok"
}
function quick_search(e) {
    $.get("/ajax.php", {
        type: "quick_search",
        str: e
    }).done((function(e) {
        $(".list-search-res").html(e)
    }
    ))
}
function load_comment(e, t, a) {
    if ("light",
    $("#" + e).html('<div class="fb-comments" data-href="http://truyenfull.io/' + t + '/" data-width="100%" width="100%" data-numposts="5" data-colorscheme="light"></div>'),
    "undefined" != typeof FB)
        FB.XFBML.parse(document.getElementById(e));
    else
        var n = setInterval((function() {
            "undefined" != typeof FB && (FB.XFBML.parse(document.getElementById(e)),
            clearInterval(n))
        }
        ), 100)
}
function update_views(e, t) {
    $.post("/ajax.php", {
        type: "update_views",
        tid: e,
        add: t,
        t: (new Date).getTime()
    })
}
$(document).ready((function() {
    if ($("body").is("#body_home")) {
        var e = $("#intro-index").width()
          , t = $("#intro-index").height()
          , a = $("#intro-index").offset().top
          , n = $("#intro-index").offset().left + parseInt($("#intro-index").css("padding-left"));
        $(".index-intro .item").each((function() {
            var o = $(this)
              , i = $("img", this)
              , r = $(o).width()
              , c = $(o).height()
              , s = $(o).offset().top;
            (o = $(o).offset().left) >= n && s >= a && o + r <= n + e && s + c <= a + t + 1 && (i.attr("src", i.attr("lazysrc")),
            i.attr("lazysrc", ""))
        }
        ))
    }
    $("body").is("#body_truyen") && !$.browser.mobile && (function() {
        var e = document.createElement("p")
          , t = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
        for (var a in document.body.insertBefore(e, null),
        t)
            if (t.hasOwnProperty(a) && void 0 !== e.style[a]) {
                e.style[a] = "translate3d(1px,1px,1px)";
                var n = window.getComputedStyle(e).getPropertyValue(t[a])
            }
        return document.body.removeChild(e),
        void 0 !== n && 0 < n.length && "none" !== n
    }() || $("#truyen").removeClass("csstransforms3d"));
    var o, i, r, c, s = $("#truyen-ascii").val(), l = $("#ten-truyen").val(), h = $("#truyen-id").val();
    if ($("body").is("#body_truyen") && update_views(h, "truyen"),
    $(".navbar, .overlay-container").on("click", ".login-link", (function() {
        $(".overlay-container > div").addClass("hide"),
        $(".overlay-container, .login-container").removeClass("hide")
    }
    )),
    $(".navbar, .overlay-container").on("click", ".register-link", (function() {
        $(".overlay-container > div").addClass("hide"),
        $(".overlay-container, .register-container").removeClass("hide")
    }
    )),
    $(".overlay-container").on("click", ".forgot-link", (function() {
        $(".overlay-container > div").addClass("hide"),
        $(".forgot-container .captcha-holder").html('<img src="/captcha/' + $("#form-secure").val() + '" id="captcha-img" alt="captcha">'),
        $(".overlay-container, .forgot-container").removeClass("hide")
    }
    )),
    $(".navbar").on("click", ".logout-link", (function() {
        $.post("/login.php", {
            type: "logout",
            hash: $(".logout-link").data("hash")
        }).done((function(e) {
            if ("success" == e.status)
                setTimeout((function() {
                    location.reload()
                }
                ), 1e3);
            else if ("error" == e.status)
                return alert("Có lỗi xảy ra, vui lòng báo cho admin nếu có thể."),
                !1
        }
        ))
    }
    )),
    $(".modal-close").click((function() {
        $(".overlay-container, .overlay-container > div").addClass("hide")
    }
    )),
    h) {
        "/" != window.location.pathname && (o = document,
        i = "script",
        r = "facebook-jssdk",
        c = o.getElementsByTagName(i)[0],
        o.getElementById(r) || ((o = o.createElement(i)).id = r,
        o.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0&appId=1008942907608935",
        c.parentNode.insertBefore(o, c)));
        var d = $("#truyen-comment").val()
    }
    var p = $.cookie("bgcolor-cookie")
      , u = "light";
    if ("#232323" == p && (u = "dark"),
    p && "#F4F4F4" != p && $("#truyen-background").val(p),
    $("#truyen-background").on("change", (function() {
        var e = this.value;
        l ? "hatsan" == e ? ($("body").css({
            "background-color": "#f2f2f2",
            "background-image": "url('//static.truyenfull.io/img/bg_op.png')",
            "background-repeat": "repeat"
        }).removeClass("dark-theme"),
        u = "light") : "sachcu" == e ? ($("body").css({
            "background-color": "#c2b49b",
            "background-image": "url('//static.truyenfull.io/img/bg_book_op.png')",
            "background-repeat": "repeat"
        }).removeClass("dark-theme"),
        u = "light") : "#232323" == e ? ($("body").css({
            "background-color": e,
            "background-image": "url('//static.truyenfull.io/img/bg_dark.gif')",
            "background-repeat": "repeat"
        }).addClass("dark-theme"),
        u = "dark") : ($("body").css({
            "background-color": e,
            "background-image": "none"
        }).removeClass("dark-theme"),
        u = "light") : "#232323" == e ? ($("body").addClass("dark-theme"),
        u = "dark") : ($("body").removeClass("dark-theme"),
        u = "light"),
        $.cookie("bgcolor-cookie", e, {
            expires: 365,
            path: "/"
        })
    }
    )),
    s && setTimeout((function() {
        load_comment("fb-comment-story", d, u)
    }
    ), 2e3),
    l) {
        p = $.cookie("font-cookie");
        var m = $.cookie("size-cookie")
          , g = $.cookie("lineheight-cookie")
          , f = $.cookie("fluid-switch-cookie")
          , v = $.cookie("onebreak-switch-cookie")
          , y = $("#chapter-bnum").val()
          , b = $("#chapter-num").val();
        1 == $("#chapter-sac").val() && ga("send", "event", "truyensac"),
        p ? $("#font-chu").val(p) : $.browser.mobile && $("#font-chu").val("Arial, sans-serif"),
        m ? $("#size-chu").val(m) : $.browser.mobile || $("#size-chu").val("22px"),
        g && "180%" != g ? $("#line-height").val(g) : $("#line-height").val("180%"),
        1 == f && ($("#fluid-no").attr("checked", !1),
        $("#fluid-yes").attr("checked", !0)),
        1 == v ? ($("#onebreak-no").attr("checked", !1),
        $("#onebreak-yes").attr("checked", !0)) : original_content = $(".chapter-c").html(),
        $("#font-chu").on("change", (function() {
            var e = this.value;
            $(".chapter-c").css("font-family", e),
            $.cookie("font-cookie", e, {
                expires: 365,
                path: "/"
            })
        }
        )),
        $("#size-chu").on("change", (function() {
            var e = this.value;
            $(".chapter-c").css("font-size", e),
            $.cookie("size-cookie", e, {
                expires: 365,
                path: "/"
            })
        }
        )),
        $("#line-height").on("change", (function() {
            var e = this.value;
            $(".chapter-c").css("line-height", e),
            $.cookie("lineheight-cookie", e, {
                expires: 365,
                path: "/"
            })
        }
        )),
        $(document.body).on("click", ".chapter .toggle-nav-open", (function() {
            1 == $.cookie("hidenav-cookie") ? ($(".navbar").slideDown(300),
            $(this).html('<span class="glyphicon glyphicon-menu-up"></span>'),
            $(".chapter").css("margin-top", "0"),
            $.removeCookie("hidenav-cookie", {
                path: "/"
            })) : ($(".navbar").slideUp(300),
            $(this).html('<span class="glyphicon glyphicon-menu-down"></span>'),
            $(".chapter").css("margin-top", "10px"),
            $.cookie("hidenav-cookie", 1, {
                expires: 365,
                path: "/"
            }))
        }
        )),
        $('input[name="fluid-switch"]').click((function() {
            "yes" == this.value ? ($(".chapter").removeClass("container").addClass("container-fluid"),
            $.cookie("fluid-switch-cookie", 1, {
                expires: 365,
                path: "/"
            })) : ($(".chapter").removeClass("container-fluid").addClass("container"),
            $.removeCookie("fluid-switch-cookie", {
                path: "/"
            }))
        }
        )),
        $('input[name="onebreak-switch"]').click((function() {
            "yes" == this.value ? ($(".chapter-c").html($(".chapter-c").html().replace(/(<br\s*\/?>\s*\n?(&nbsp;)?){2,}/gi, "<br>")),
            $.cookie("onebreak-switch-cookie", 1, {
                expires: 365,
                path: "/"
            })) : (original_content && $(".chapter-c").html(original_content),
            $.removeCookie("onebreak-switch-cookie", {
                path: "/"
            }))
        }
        )),
        $(document).keydown((function(e) {
            !1 !== $("input[type='text'], input[type='search']").is(":focus") || e.ctrlKey || (37 == e.which || 65 == e.which ? $("#prev_chap")[0].click() : 39 == e.which || 68 == e.which ? $("#next_chap")[0].click() : 83 == e.which ? (e = $(window).scrollTop(),
            $(window).scrollTop(e + 37)) : 87 == e.which && (e = $(window).scrollTop(),
            $(window).scrollTop(e - 37)))
        }
        )),
        $(".chapter-nav").on("click", "button.chapter_jump", (function() {
            $("button.chapter_jump").attr("disabled", !0),
            $.get("/ajax.php", {
                type: "chapter_option",
                data: h
            }).done((function(e) {
                var t = "";
                y && (t = "quyen-" + y + "-"),
                e = e.replace(new RegExp(t + "chuong-" + b + '">',"g"), t + "chuong-" + b + '" selected>'),
                $(".chapter_jump").replaceWith(e)
            }
            ))
        }
        )),
        $(".chapter-nav").on("click", "button#chapter_error", (function() {
            var e = prompt("Vui lòng mô tả lỗi", "");
            if (null === e || !1 === e)
                return !1;
            "" === e ? alert("Bạn chưa nhập mô tả. Báo lỗi không thành công.") : ($("button#chapter_error").addClass("hide"),
            $.post("/ajax.php", {
                type: "chapter_error",
                id: $("#chapter-id").val(),
                message: e
            }),
            alert("Cảm ơn bạn đã báo nha."))
        }
        )),
        $(".chapter-nav").on("click", "button#chapter_comment", (function() {
            load_comment("fb-comment-chapter", d, u)
        }
        )),
        p = $(".truyen-title").text(),
        $.post("/ajax.php", {
            type: "chapter_view_history",
            tid: h,
            tenfull: p,
            ten: l,
            bnum: y,
            num: b,
            t: (new Date).getTime()
        }),
        "*Chương này có nội dung ảnh, nếu bạn không thấy nội dung chương, vui lòng bật chế độ hiện hình ảnh của trình duyệt để đọc." === $(".chapter-c").text() && $(".chapter-c").addClass("no-br")
    }
    $(".dark-theme").on("mouseover", ".pagination li", (function() {
        $(this).next().hasClass("active") && $(this).children("a").css({
            "border-right": "0",
            "padding-right": "10px"
        })
    }
    ));
    var k = null;
    if ($("#search-input").keyup((function() {
        var e;
        clearTimeout(k),
        0 == (e = $(this).val()).length ? $(".list-search-res").html("").addClass("hide") : 3 <= e.length && ($(".list-search-res").html('<img src="//static.truyenfull.io/img/loading-search.gif" alt="loading">').removeClass("hide"),
        k = setTimeout((function() {
            quick_search(e)
        }
        ), 500))
    }
    )),
    $("#search-input").bind("paste", (function() {
        clearTimeout(k);
        var e = this;
        setTimeout((function() {
            var t = $(e).val();
            0 == t.length ? $(".list-search-res").html("").addClass("hide") : 3 <= t.length && ($(".list-search-res").html('<img src="//static.truyenfull.io/img/loading-search.gif" alt="loading">').removeClass("hide"),
            k = setTimeout((function() {
                quick_search(t)
            }
            ), 500))
        }
        ), 0)
    }
    )),
    $("html").click((function(e) {
        "#search-input" != e.target.id && $(".list-search-res").html("").addClass("hide")
    }
    )),
    $(".top-nav").on("click", "div", (function() {
        var e = $(this)
          , t = e.attr("data-type")
          , a = e.parent().attr("data-limit")
          , n = e.parent().attr("data-cat");
        if (e.hasClass("active"))
            return !1;
        e.css({
            cursor: "default",
            "pointer-events": "none",
            opacity: "0.6"
        }),
        $.get("/ajax.php", {
            type: "top_switch",
            data_type: t,
            data_limit: a,
            data_cat: n
        }).done((function(t) {
            $(".top-nav div").removeClass("active"),
            e.addClass("active"),
            e.css({
                cursor: "pointer",
                "pointer-events": "auto",
                opacity: "1"
            }),
            $(".top-item").remove(),
            $(".top-nav").after(t),
            $(".top-item").hide().fadeIn(300)
        }
        ))
    }
    )),
    $(".desc-text").prop("scrollHeight") > $(".desc-text").height() && $(".showmore .btn").removeClass("hide"),
    $(".dropdown-menu, #list-chapter").on("click", "form", (function(e) {
        e.stopPropagation()
    }
    )),
    $("#list-chapter").on("submit", "#page_jump", (function(e) {
        e.preventDefault();
        var t = $("#page_jump").find("button[type='submit']")
          , a = $("h1").text();
        e = $("#total-page").val();
        var n = parseInt($("input[name='page']").val(), 10);
        n > e && (n = e),
        isNumber(n) && 0 == n % 1 && (t.css({
            cursor: "default",
            "pointer-events": "none",
            opacity: "0.6"
        }),
        $.get("/ajax.php", {
            type: "list_chapter",
            tid: h,
            tascii: s,
            tname: a,
            page: n,
            totalp: e
        }).done((function(e) {
            ListChapProcess(a, s, n, e.page_list, e.chap_list),
            t.css({
                cursor: "pointer",
                "pointer-events": "auto",
                opacity: "1"
            })
        }
        )))
    }
    )),
    $("#list-chapter").on("click", ".pagination li a", (function(e) {
        var t = $(this)
          , a = $(this).attr("href");
        if ("javascript:void(0)" != a) {
            e.preventDefault(),
            t.css({
                cursor: "default",
                "pointer-events": "none",
                opacity: "0.6"
            });
            var n = $("h1").text();
            if (e = $("#total-page").val(),
            a == "https://truyenfull.io/" + s + "/#list-chapter")
                o = 1;
            else {
                var o = a.match(/(\d+)(?!.*\d)/);
                o = o[1]
            }
            $.get("/ajax.php", {
                type: "list_chapter",
                tid: h,
                tascii: s,
                tname: n,
                page: o,
                totalp: e
            }).done((function(e) {
                ListChapProcess(n, s, o, e.page_list, e.chap_list),
                t.css({
                    cursor: "pointer",
                    "pointer-events": "auto",
                    opacity: "1"
                })
            }
            ))
        }
    }
    )),
    $("#body_home").length) {
        var w = function() {
            $("#hot-select option:selected").next().val() ? $("#hot-select option:selected").prop("selected", !1).next().prop("selected", !0) : ($("#hot-select option:selected").prop("selected", !1),
            $("#hot-select option:eq(0)").prop("selected", !0)),
            id = $("#hot-select option:selected").val(),
            $.get("/ajax.php", {
                type: "hot_select",
                id: id
            }).done((function(e) {
                $(".index-intro").hide().html(e).fadeIn()
            }
            ))
        };
        $.get("/ajax.php", {
            type: "read_history",
            t: (new Date).getTime()
        }).done((function(e) {
            e && ($("#history-holder").replaceWith(e.main),
            $("#history-holder-side").replaceWith(e.side))
        }
        ));
        $("#hot-select").on("change", (function() {
            var e = $(this).find(":selected").val();
            $.get("/ajax.php", {
                type: "hot_select",
                id: e
            }).done((function(e) {
                $(".index-intro").hide().html(e).fadeIn()
            }
            ))
        }
        ))
    }
    if ($("#new-select").on("change", (function() {
        var e = $(this).find(":selected").val();
        $.get("/ajax.php", {
            type: "new_select",
            id: e
        }).done((function(e) {
            $(".list-new .row").remove(),
            $(".list-new .title-list").after(e),
            $(".list-new .row").hide().fadeIn()
        }
        ))
    }
    )),
    $("#contact-form").submit((function(e) {
        e.preventDefault(),
        e = $("#contact-name").val();
        var t = $("#contact-email").val()
          , a = $("#contact-subject").val()
          , n = $("#contact-message").val()
          , o = $("#contact-secure").val();
        if (!e || !a || !n)
            return FormError("Bạn vui lòng điền đủ thông tin liên hệ.", "contact-container"),
            !1;
        FormDisable(".single-page-form"),
        FormSuccess('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Chờ tí / Please wait...', "contact-container"),
        $.post("/ajax.php", {
            type: "contact",
            name: e,
            email: t,
            subject: a,
            message: n,
            secure: o
        }).done((function(e) {
            FormEnable(".single-page-form"),
            "success" == e.status ? (FormSuccess("Bạn đã gửi nội dung liên hệ thành công! / Your message was sent successfully!", "contact-container"),
            $("#contact-form").trigger("reset"),
            $("#contact-secure").val(e.token)) : FormError("Gửi nội dung liên hệ thất bại, bạn vui lòng thử lại sau hoặc gửi email trực tiếp đến contact@truyenfull.io / Error, please try again later or send email directly to contact@truyenfull.io", "contact-container")
        }
        ))
    }
    )),
    $(".pagination-container").on("submit", "#page_jump", (function(e) {
        e.preventDefault(),
        e = $("input[name='page_type']").val();
        var t = $("input[name='page']").val()
          , a = $("input[name='filter']").val();
        e ? isNumber(t) && 0 == t % 1 && (window.location.href = "https://truyenfull.io/" + e + "/" + s + a + "/trang-" + t + "/") : isNumber(t) && 0 == t % 1 && (window.location.href = "https://truyenfull.io/" + s + "/trang-" + t + "/#list-chapter")
    }
    )),
    $("#chapter-nav-top, #chapter-nav-bot").on("change", ".chapter_jump", (function() {
        $("option:selected", this);
        var e = this.value;
        e && l && (window.location.href = "https://truyenfull.io/" + l + "/" + e + "/")
    }
    )),
    $("#truyen").on("click", ".showmore .btn", (function(e) {
        e.preventDefault(),
        $(".desc-text").css("height", "auto"),
        $(".showmore").css("height", 0),
        $(this).addClass("hide")
    }
    )),
    $(".rate-holder").raty({
        number: 10,
        path: "//static.truyenfull.io/lib/raty/images",
        noRatedMsg: "Đã đánh giá",
        hints: "Không còn gì để nói...;WTF;Cái gì thế này ?!;Haizz;Tạm;Cũng được;Khá đấy;Được;Hay;Tuyệt đỉnh!".split(";"),
        target: ".rate-text",
        score: function() {
            return $(this).attr("data-score")
        },
        click: function(e) {
            $(".rate-holder").raty("readOnly", !0),
            $.post("/ajax.php", {
                type: "rate",
                data: e,
                id: h
            }),
            localStorage.setItem(h, "rated"),
            alert("Cảm ơn bạn đã đánh giá truyện!")
        },
        readOnly: function() {
            if ("rated" == localStorage.getItem(h))
                return !0
        }
    }),
    randomso(1, 8),
    $("div.lazyimg").length) {
        var C = function() {
            $("div.lazyimg").each((function() {
                if ($(this).is(":onScreen")) {
                    var e = $.browser.mobile ? $(this).data("image") : $(this).data("desk-image")
                      , t = $(this).data("classname")
                      , a = $(this).data("alt");
                    e = t ? '<img src="' + e + '" class="' + t + '" alt="' + a + '">' : '<img src="' + e + '" alt="' + a + '">',
                    $(this).replaceWith(e)
                }
            }
            ))
        };
        C(),
        $(window).scroll((function() {
            C()
        }
        ))
    }
    $.browser.mobile && $(".col-truyen-main").addClass("no-hover")
}
));
;/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function(a, b) {
    a(function() {
        "use strict";
        function a(a, b) {
            return null != a && null != b && a.toLowerCase() === b.toLowerCase()
        }
        function c(a, b) {
            var c, d, e = a.length;
            if (!e || !b)
                return !1;
            for (c = b.toLowerCase(),
            d = 0; d < e; ++d)
                if (c === a[d].toLowerCase())
                    return !0;
            return !1
        }
        function d(a) {
            for (var b in a)
                i.call(a, b) && (a[b] = new RegExp(a[b],"i"))
        }
        function e(a) {
            return (a || "").substr(0, 500)
        }
        function f(a, b) {
            this.ua = e(a),
            this._cache = {},
            this.maxPhoneWidth = b || 600
        }
        var g = {};
        g.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b",
                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                Pixel: "; \\bPixel\\b",
                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                NokiaLumia: "Lumia [0-9]{3,4}",
                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                Palm: "PalmSource|Palm",
                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                Alcatel: "Alcatel",
                Nintendo: "Nintendo (3DS|Switch)",
                Amoi: "Amoi",
                INQ: "INQ",
                OnePlus: "ONEPLUS",
                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            tablets: {
                iPad: "iPad|iPad.*Mobile",
                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                GoogleTablet: "Android.*Pixel C",
                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                BlackBerryTablet: "PlayBook|RIM Tablet",
                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                IRUTablet: "M702pro",
                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                NokiaLumiaTablet: "Lumia 2520",
                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                FlyTablet: "IQ310|Fly Vision",
                bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                NecTablet: "\\bN-06D|\\bN-08D",
                PantechTablet: "Pantech.*P4100",
                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                NabiTablet: "Android.*\\bNabi",
                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                PlaystationTablet: "Playstation.*(Portable|Vita)",
                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                DPSTablet: "DPS Dream 9|DPS Dual 7",
                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                iMobileTablet: "i-mobile i-note",
                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                AMPETablet: "Android.* A78 ",
                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                TecnoTablet: "TECNO P9|TECNO DP8D",
                JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                CaptivaTablet: "CAPTIVA PAD",
                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                JaytechTablet: "TPC-PA762",
                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                UbislateTablet: "UbiSlate[\\s]?7C",
                PocketBookTablet: "Pocketbook",
                KocasoTablet: "\\b(TB-1207)\\b",
                HisenseTablet: "\\b(F5281|E2371)\\b",
                Hudl: "Hudl HT7S3|Hudl 2",
                TelstraTablet: "T-Hub2",
                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
            },
            oss: {
                AndroidOS: "Android",
                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                iPadOS: "CPU OS 13",
                SailfishOS: "Sailfish",
                MeeGoOS: "MeeGo",
                MaemoOS: "Maemo",
                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                webOS: "webOS|hpwOS",
                badaOS: "\\bBada\\b",
                BREWOS: "BREW"
            },
            uas: {
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                Dolfin: "\\bDolfin\\b",
                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                Skyfire: "Skyfire",
                Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                IE: "IEMobile|MSIEMobile",
                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                Bolt: "bolt",
                TeaShark: "teashark",
                Blazer: "Blazer",
                Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                WeChat: "\\bMicroMessenger\\b",
                UCBrowser: "UC.*Browser|UCWEB",
                baiduboxapp: "baiduboxapp",
                baidubrowser: "baidubrowser",
                DiigoBrowser: "DiigoBrowser",
                Mercury: "\\bMercury\\b",
                ObigoBrowser: "Obigo",
                NetFront: "NF-Browser",
                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
            },
            props: {
                Mobile: "Mobile/[VER]",
                Build: "Build/[VER]",
                Version: "Version/[VER]",
                VendorID: "VendorID/[VER]",
                iPad: "iPad.*CPU[a-z ]+[VER]",
                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                iPod: "iPod.*CPU[a-z ]+[VER]",
                Kindle: "Kindle/[VER]",
                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                Coast: ["Coast/[VER]"],
                Dolfin: "Dolfin/[VER]",
                Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                Fennec: "Fennec/[VER]",
                Edge: "Edge/[VER]",
                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                NetFront: "NetFront/[VER]",
                NokiaBrowser: "NokiaBrowser/[VER]",
                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                "Opera Mini": "Opera Mini/[VER]",
                "Opera Mobi": "Version/[VER]",
                UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                MQQBrowser: "MQQBrowser/[VER]",
                MicroMessenger: "MicroMessenger/[VER]",
                baiduboxapp: "baiduboxapp/[VER]",
                baidubrowser: "baidubrowser/[VER]",
                SamsungBrowser: "SamsungBrowser/[VER]",
                Iron: "Iron/[VER]",
                Safari: ["Version/[VER]", "Safari/[VER]"],
                Skyfire: "Skyfire/[VER]",
                Tizen: "Tizen/[VER]",
                Webkit: "webkit[ /][VER]",
                PaleMoon: "PaleMoon/[VER]",
                SailfishBrowser: "SailfishBrowser/[VER]",
                Gecko: "Gecko/[VER]",
                Trident: "Trident/[VER]",
                Presto: "Presto/[VER]",
                Goanna: "Goanna/[VER]",
                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                Android: "Android [VER]",
                Sailfish: "Sailfish [VER]",
                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                BREW: "BREW [VER]",
                Java: "Java/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE/[VER]",
                "Windows NT": "Windows NT [VER]",
                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            },
            utils: {
                Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                DesktopMode: "WPDesktop",
                TV: "SonyDTV|HbbTV",
                WebKit: "(webkit)[ /]([\\w.]+)",
                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                Watch: "SM-V700"
            }
        },
        g.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };
        var h, i = Object.prototype.hasOwnProperty;
        return g.FALLBACK_PHONE = "UnknownPhone",
        g.FALLBACK_TABLET = "UnknownTablet",
        g.FALLBACK_MOBILE = "UnknownMobile",
        h = "isArray"in Array ? Array.isArray : function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }
        ,
        function() {
            var a, b, c, e, f, j, k = g.mobileDetectRules;
            for (a in k.props)
                if (i.call(k.props, a)) {
                    for (b = k.props[a],
                    h(b) || (b = [b]),
                    f = b.length,
                    e = 0; e < f; ++e)
                        c = b[e],
                        j = c.indexOf("[VER]"),
                        j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)),
                        b[e] = new RegExp(c,"i");
                    k.props[a] = b
                }
            d(k.oss),
            d(k.phones),
            d(k.tablets),
            d(k.uas),
            d(k.utils),
            k.oss0 = {
                WindowsPhoneOS: k.oss.WindowsPhoneOS,
                WindowsMobileOS: k.oss.WindowsMobileOS
            }
        }(),
        g.findMatch = function(a, b) {
            for (var c in a)
                if (i.call(a, c) && a[c].test(b))
                    return c;
            return null
        }
        ,
        g.findMatches = function(a, b) {
            var c = [];
            for (var d in a)
                i.call(a, d) && a[d].test(b) && c.push(d);
            return c
        }
        ,
        g.getVersionStr = function(a, b) {
            var c, d, e, f, h = g.mobileDetectRules.props;
            if (i.call(h, a))
                for (c = h[a],
                e = c.length,
                d = 0; d < e; ++d)
                    if (f = c[d].exec(b),
                    null !== f)
                        return f[1];
            return null
        }
        ,
        g.getVersion = function(a, b) {
            var c = g.getVersionStr(a, b);
            return c ? g.prepareVersionNo(c) : NaN
        }
        ,
        g.prepareVersionNo = function(a) {
            var b;
            return b = a.split(/[a-z._ \/\-]/i),
            1 === b.length && (a = b[0]),
            b.length > 1 && (a = b[0] + ".",
            b.shift(),
            a += b.join("")),
            Number(a)
        }
        ,
        g.isMobileFallback = function(a) {
            return g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
        }
        ,
        g.isTabletFallback = function(a) {
            return g.detectMobileBrowsers.tabletPattern.test(a)
        }
        ,
        g.prepareDetectionCache = function(a, c, d) {
            if (a.mobile === b) {
                var e, h, i;
                return (h = g.findMatch(g.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h,
                void (a.phone = null)) : (e = g.findMatch(g.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = e,
                void (a.tablet = null)) : void (g.isMobileFallback(c) ? (i = f.isPhoneSized(d),
                i === b ? (a.mobile = g.FALLBACK_MOBILE,
                a.tablet = a.phone = null) : i ? (a.mobile = a.phone = g.FALLBACK_PHONE,
                a.tablet = null) : (a.mobile = a.tablet = g.FALLBACK_TABLET,
                a.phone = null)) : g.isTabletFallback(c) ? (a.mobile = a.tablet = g.FALLBACK_TABLET,
                a.phone = null) : a.mobile = a.tablet = a.phone = null)
            }
        }
        ,
        g.mobileGrade = function(a) {
            var b = null !== a.mobile();
            return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2,
            "C")
        }
        ,
        g.detectOS = function(a) {
            return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a)
        }
        ,
        g.getDeviceSmallerSide = function() {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        }
        ,
        f.prototype = {
            constructor: f,
            mobile: function() {
                return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.mobile
            },
            phone: function() {
                return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.phone
            },
            tablet: function() {
                return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth),
                this._cache.tablet
            },
            userAgent: function() {
                return this._cache.userAgent === b && (this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)),
                this._cache.userAgent
            },
            userAgents: function() {
                return this._cache.userAgents === b && (this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)),
                this._cache.userAgents
            },
            os: function() {
                return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)),
                this._cache.os
            },
            version: function(a) {
                return g.getVersion(a, this.ua)
            },
            versionStr: function(a) {
                return g.getVersionStr(a, this.ua)
            },
            is: function(b) {
                return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(g.findMatches(g.mobileDetectRules.utils, this.ua), b)
            },
            match: function(a) {
                return a instanceof RegExp || (a = new RegExp(a,"i")),
                a.test(this.ua)
            },
            isPhoneSized: function(a) {
                return f.isPhoneSized(a || this.maxPhoneWidth)
            },
            mobileGrade: function() {
                return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)),
                this._cache.grade
            }
        },
        "undefined" != typeof window && window.screen ? f.isPhoneSized = function(a) {
            return a < 0 ? b : g.getDeviceSmallerSide() <= a
        }
        : f.isPhoneSized = function() {}
        ,
        f._impl = g,
        f.version = "1.4.5 2021-03-13",
        f
    })
}(function(a) {
    if ("undefined" != typeof module && module.exports)
        return function(a) {
            module.exports = a()
        }
        ;
    if ("function" == typeof define && define.amd)
        return define;
    if ("undefined" != typeof window)
        return function(a) {
            window.MobileDetect = a()
        }
        ;
    throw new Error("unknown environment")
}());
;(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }
    ,
    i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
}
)(window, document, 'script', '//static.truyenfull.io/js/analytics.js', 'ga');
ga('create', 'UA-189964694-6', 'auto');
ga('send', 'pageview');
;if ($('.chapter-c').length) {
    chapter_filter();
}
function chapter_filter() {
    var filter_words = {
        'An Đình Doanh': 'AĐD',
        'bán nước': 'b*n n**c',
        'biển Đông': 'bi*n đ*ng',
        'Bùi Minh Châu': 'BMC',
        'Bùi Nhật Quang': 'BNQ',
        'Bùi Thanh Sơn': 'BTS',
        'Bùi Thị Minh Hoài': 'BTMH',
        'Bùi Thị Quỳnh Vân': 'BTQV',
        'Bùi Văn Cường': 'BVC',
        'Bùi Văn Nghiêm': 'BVN',
        'Chẩu Văn Lâm': 'CVL',
        'Châu Văn Minh': 'CVM',
        'Chu Ngọc Anh': 'CAN',
        'Đặng Quốc Khánh': 'ĐQK',
        'Đặng Xuân Phong': 'ĐXP',
        'Đào Hồng Lan': 'ĐHL',
        'Đào Ngọc Dung': 'ĐND',
        'Điểu Kré': 'ĐK',
        'Đinh Tiến Dũng': 'ĐTD',
        'Đỗ Đức Duy': 'ĐĐD',
        'Đỗ Thanh Bình': 'ĐTB',
        'Đỗ Tiến Sỹ': 'ĐTS',
        'Đỗ Trọng Hưng': 'ĐTH',
        'Đỗ Văn Chiến': 'ĐVC',
        'Đoàn Hồng Phong': 'ĐHP',
        'Đoàn Minh Huấn': 'ĐMH',
        'Đông Sa': 'ĐS',
        'đường chín đoạn': 'đlb*',
        'đường chín khúc': 'đlb*',
        'đường chữ U': 'đlb*',
        'đường lưỡi bò': 'đlb*',
        'Dương Thanh Bình': 'DTB',
        'Dương Văn An': 'DVA',
        'Dương Văn Thái': 'DVT',
        'Dương Văn Trang': 'DVT',
        'Giàng Páo Mỷ': 'GPM',
        'Hà Thị Nga': 'HTN',
        'Hầu A Lềnh': 'HAL',
        'Hồ Đức Phớc': 'HĐP',
        'Hồ Quốc Dũng': 'HQD',
        'Hồ Văn Niên': 'HVN',
        'Hoàng Đăng Quang': 'HĐQ',
        'Hoàng Duy Chinh': 'HDC',
        'Hoàng Sa': 'HS',
        'Hoàng Thanh Tùng': 'HTT',
        'Hoàng Thị Thúy Lan': 'HTTL',
        'Hoàng Trung Dũng': 'HTD',
        'Hoàng Xuân Chiến': 'HXC',
        'Huỳnh Chiến Thắng': 'HCT',
        'Huỳnh Tấn Việt': 'HTV',
        'Huỳnh Thành Đạt': 'HTĐ',
        'Lại Xuân Môn': 'LXM',
        'Lâm Thị Phương Thanh': 'LTPT',
        'Lâm Văn Mẫn': 'LVM',
        'Lê Đức Thái': 'LĐT',
        'Lê Đức Thọ': 'LĐT',
        'Lê Hoài Trung': 'LHT',
        'Lê Hồng Quang': 'LHQ',
        'Lê Huy Vịnh': 'LHV',
        'Lê Khánh Hải': 'LKH',
        'Lê Minh Hoan': 'LMH',
        'Lê Minh Hưng': 'LMH',
        'Lê Minh Khái': 'LMK',
        'Lê Minh Trí': 'LMT',
        'Lê Ngọc Quang': 'LNQ',
        'Lê Quang Huy': 'LQH',
        'Lê Quang Mạnh': 'LQM',
        'Lê Quang Tùng': 'LQT',
        'Lê Quốc Hùng': 'LQH',
        'Lê Quốc Minh': 'LQM',
        'Lê Quốc Phong': 'LQP',
        'Lê Tấn Tới': 'LTT',
        'Lê Thành Long': 'LTL',
        'Lê Thị Nga': 'LTN',
        'Lê Thị Thủy': 'LTT',
        'Lê Tiến Châu': 'LTC',
        'Lê Trường Lưu': 'LTL',
        'Lê Văn Thành': 'LVT',
        'Lê Vĩnh Tân': 'LVT',
        'Lữ Văn Hùng': 'LVH',
        'Lương Cường': 'LC',
        'Lương Quốc Đoàn': 'LQĐ',
        'Lương Tam Quang': 'LTQ',
        'Mai Tiến Dũng': 'MTD',
        'Mai Văn Chính': 'MVC',
        'Nghiêm Xuân Thành': 'NXT',
        'Ngô Chí Cường': 'NCC',
        'Ngô Đông Hải': 'NĐH',
        'Ngô Văn Tuấn': 'NVT',
        'Ngô Xuân Lịch': 'NXL',
        'Nguyễn Anh Tuấn': 'NAT',
        'Nguyễn Chí Dũng': 'NCD',
        'Nguyễn Đắc Vinh': 'NĐV',
        'Nguyễn Đình Khang': 'NĐK',
        'Nguyễn Đình Trung': 'NĐT',
        'Nguyễn Doãn Anh': 'NDA',
        'Nguyễn Đức Hải': 'NĐH',
        'Nguyễn Đức Thanh': 'NĐT',
        'Nguyễn Duy Ngọc': 'NDN',
        'Nguyễn Hải Ninh': 'NHN',
        'Nguyễn Hòa Bình': 'NHB',
        'Nguyễn Hoàng Anh': 'NHA',
        'Nguyễn Hồng Diên': 'NHD',
        'Nguyễn Hồng Lĩnh': 'NHL',
        'Nguyễn Hồng Thái': 'NHT',
        'Nguyễn Hữu Đông': 'NHĐ',
        'Nguyễn Hữu Nghĩa': 'NHN',
        'Nguyễn Khắc Định': 'NKĐ',
        'Nguyễn Kim Sơn': 'NKS',
        'Nguyễn Mạnh Cường': 'NMC',
        'Nguyễn Mạnh Hùng': 'NMH',
        'Nguyễn Ngọc Thiện': 'NNT',
        'Nguyễn Phú Cường': 'NPC',
        'Nguyễn Phú Trọng': 'NPT',
        'Nguyễn Quang Dương': 'NQD',
        'Nguyễn Quang Ngọc': 'NQN',
        'Nguyễn Quốc Đoàn': 'NQĐ',
        'Nguyễn Tân Cương': 'NTC',
        'Nguyễn Thanh Hải': 'NTH',
        'Nguyễn Thanh Long': 'NTL',
        'Nguyễn Thanh Nghị': 'NTN',
        'Nguyễn Thành Phong': 'NTP',
        'Nguyễn Thành Tâm': 'NTT',
        'Nguyễn Thanh Thủy': 'NTT',
        'Nguyễn Thị Hồng': 'NTH',
        'Nguyễn Thị Thanh': 'NTT',
        'Nguyễn Thị Thu Hà': 'NTTH',
        'Nguyễn Thị Tuyến': 'NTT',
        'Nguyễn Thúy Anh': 'NTA',
        'Nguyễn Tiến Hải': 'NTH',
        'Nguyễn Trọng Nghĩa': 'NTN',
        'Nguyễn Trường Thắng': 'NTT',
        'Nguyễn Văn Danh': 'NVD',
        'Nguyễn Văn Được': 'NVĐ',
        'Nguyễn Văn Gấu': 'NVG',
        'Nguyễn Văn Hiền': 'NVH',
        'Nguyễn Văn Hùng': 'NVH',
        'Nguyễn Văn Lợi': 'NVL',
        'Nguyễn Văn Nên': 'NVN',
        'Nguyễn Văn Quảng': 'NVQ',
        'Nguyễn Văn Thắng': 'NVT',
        'Nguyễn Văn Thể': 'NVT',
        'Nguyễn Xuân Cường': 'NXC',
        'Nguyễn Xuân Ký': 'NXK',
        'Nguyễn Xuân Phúc': 'NXP',
        'Nguyễn Xuân Thắng': 'NXT',
        'Phạm Bình Minh': 'PBM',
        'Phạm Đại Dương': 'PĐD',
        'Phạm Gia Túc': 'PGT',
        'Phạm Hoài Nam': 'PHN',
        'Phạm Hồng Hà': 'PHH',
        'Phạm Minh Chính': 'PMC',
        'Phạm Tất Thắng': 'PTT',
        'Phạm Thị Thanh Trà': 'PTTT',
        'Phạm Viết Thanh': 'PVT',
        'Phạm Xuân Thăng': 'PXT',
        'Phan Đình Trạc': 'PĐT',
        'Phan Văn Giang': 'PVG',
        'Phan Văn Mãi': 'PVM',
        'Phan Việt Cường': 'PVC',
        'Phùng Xuân Nhạ': 'PXN',
        'South China Sea': 'NH',
        'Thái Đại Ngọc': 'TDN',
        'Thái Thanh Quý': 'TTQ',
        'Tô Lâm': 'TL',
        'Trần Cẩm Tú': 'TCT',
        'Trần Đức Quận': 'TĐQ',
        'Trần Đức Thắng': 'TĐT',
        'Trần Hồng Hà': 'THH',
        'Trần Hồng Minh': 'THM',
        'Trần Lưu Quang': 'TLQ',
        'Trần Quang Phương': 'TQP',
        'Trần Quốc Cường': 'TQC',
        'Trần Quốc Tỏ': 'TQT',
        'Trần Sỹ Thanh': 'TST',
        'Trần Thanh Mẫn': 'TTM',
        'Trần Thanh Nghiêm': 'TTN',
        'Trần Tiến Hưng': 'TTH',
        'Trần Tuấn Anh': 'TTA',
        'Trần Văn Nam': 'TVN',
        'Trần Văn Rón': 'TVR',
        'Trần Văn Sơn': 'TVS',
        'Trần Việt Khoa': 'TVK',
        'Trịnh Đình Dũng': 'TĐD',
        'Trịnh Văn Quyết': 'TVQ',
        'Trương Hòa Bình': 'THB',
        'Trường Sa': 'TS',
        'Trương Thị Mai': 'TTM',
        'việt tân': 'v*** t**',
        'việt cộng': 'v*** c***',
        'việt [+]': 'v*** +',
        'Võ Minh Lương': 'VML',
        'Võ Thị Ánh Xuân': 'VTAX',
        'Võ Văn Dũng': 'VVD',
        'Võ Văn Thưởng': 'VVT',
        'Vũ Đại Thắng': 'VĐT',
        'Vũ Đức Đam': 'VĐĐ',
        'Vũ Hải Hà': 'VHH',
        'Vũ Hải Quân': 'VHQ',
        'Vũ Hải Sản': 'VHS',
        'Vũ Hồng Thanh': 'VHT',
        'Vương Đình Huệ': 'VĐH',
        'Y Thanh Hà Niê Kdăm': 'YTHNK'
    };
    var end_chars = [' ', '.', ',', '!', '?', '"', "'", ';', '<'];
    var strChapter = $('.chapter-c').html();
    $.each(filter_words, function(str_find, str_replace) {
        var new_find = new RegExp(str_find,'ig');
        strChapter = strChapter.replace(new_find, str_replace);
    });
    $('.chapter-c').html(strChapter);
}
;console.log("social js 02012025_1");
var isMobile = $.browser.mobile && (window.innerWidth <= 568);
var ads_show = 1;
var ver_rs = "02012025_1";
var outbrain_check;
var chaptersac = $("#chapter-sac").val();
function nextNode_remove(id) {
    var nextNode = $("div#" + id)[0].nextSibling;
    if (nextNode && nextNode.nodeType != 3) {
        $('div#' + id).next('br').remove();
    }
    $('div#' + id).prev('br').remove();
}
function rotate_cookie_func(rorate_pos, min, max) {
    var rotate_cookie = $.cookie(rorate_pos);
    var rotate_val;
    if (rotate_cookie)
        rotate_val = rotate_cookie;
    else
        rotate_val = randomso(min, max);
    if (rotate_val >= max)
        $.cookie(rorate_pos, min, {
            expires: 1,
            path: '/'
        });
    else
        $.cookie(rorate_pos, (Number(rotate_val) + 1), {
            expires: 1,
            path: '/'
        });
    return rotate_val;
}

function createIframe(src, width, height, element, id) {
    let ifrm = document.createElement("iframe");
    let m_width = width
      , m_height = height;
    if (m_width == null)
        m_width = '100%';
    if (m_height == null)
        m_height = '100%';
    ifrm.setAttribute("src", src);
    ifrm.style.width = width;
    ifrm.setAttribute("data-id", id);
    ifrm.setAttribute("frameBorder", "0");
    ifrm.setAttribute("scrolling", "no");
    ifrm.setAttribute("overflow", "hidden");
    ifrm.setAttribute("border", "none");
    document.querySelector(element).appendChild(ifrm);
}