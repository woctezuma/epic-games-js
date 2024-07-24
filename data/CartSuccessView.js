"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [761],
  {
    16195: (e, t, n) => {
      n.r(t), n.d(t, { CartSuccessView: () => H, default: () => N });
      var a = n(8788),
        l = n.n(a),
        r = n(380),
        o = n(36233),
        i = n(86394),
        c = n(9738),
        d = n(9971),
        s = n(9146);
      const u = ({ offers: e }) => {
        const {
            query: { invalidate: t },
          } = (0, c.M)({ enabled: !1 }),
          n = (0, a.useMemo)(
            () =>
              ((e) => {
                const t =
                  null == e
                    ? void 0
                    : e.reduce(
                        (e, t) =>
                          (null == t ? void 0 : t.sandboxId)
                            ? [...e, t.sandboxId]
                            : e,
                        [],
                      );
                return t ? (0, i.A)(t) : void 0;
              })(e) || [],
            [e],
          ),
          { invalidateSandboxEntitlements: l } = (0, d.E)(n),
          {
            query: { invalidate: r },
          } = (0, s.N)({ config: { enabled: !1 } });
        return (
          (0, a.useEffect)(() => {
            t(), r(), l();
          }, [n]),
          null
        );
      };
      var v = n(3493),
        m = n(11923),
        f = n(25548),
        E = n(35482),
        p = n(45580),
        x = n(34475),
        b = n(10288),
        A = Object.defineProperty,
        g = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        y = (e, t, n) =>
          t in e
            ? A(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      const h = (e) =>
          (0, m.AH)({
            [p.aq.sm]: {
              maxWidth: 520,
              margin: "0 auto",
              padding: "30px 40px",
              borderRadius: 8,
              background: e.level2,
            },
            [p.aq.xxl]: { maxWidth: 620 },
          }),
        I = (e) =>
          (0, m.AH)({
            display: "flex",
            flexDirection: "column",
            gap: 32,
            [p.aq.sm]: {
              maxWidth: 520,
              margin: "0 auto",
              padding: "30px 40px",
              borderRadius: 8,
              background: e.level2,
            },
            [p.aq.xxl]: { maxWidth: 620 },
          }),
        D = (e) => {
          var t = e,
            { transactionId: n, count: a } = t,
            r = ((e, t) => {
              var n = {};
              for (var a in e)
                O.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
              if (null != e && g)
                for (var a of g(e))
                  t.indexOf(a) < 0 && _.call(e, a) && (n[a] = e[a]);
              return n;
            })(t, ["transactionId", "count"]);
          const o = (0, x.E)(),
            i = (0, v.useSelector)(b.k) ? I(o) : h(o);
          return l().createElement(
            "div",
            { className: i },
            l().createElement(f.C, { transactionId: n, count: a }),
            l().createElement(
              E.A,
              ((e, t) => {
                for (var n in t || (t = {})) O.call(t, n) && y(e, n, t[n]);
                if (g) for (var n of g(t)) _.call(t, n) && y(e, n, t[n]);
                return e;
              })({}, r),
            ),
          );
        };
      var q = n(42209),
        w = n(60263),
        L = n(82033),
        S = n(6415),
        C = n(87536),
        j = n(97116);
      const H = ({ history: e }) => {
          var t, n, a, i, c, d;
          const s =
              null ==
              (n =
                null == (t = null == e ? void 0 : e.location)
                  ? void 0
                  : t.state)
                ? void 0
                : n.transactionId,
            v =
              null ==
              (i =
                null == (a = null == e ? void 0 : e.location)
                  ? void 0
                  : a.state)
                ? void 0
                : i.offers,
            m =
              null ==
              (d =
                null == (c = null == e ? void 0 : e.location)
                  ? void 0
                  : c.state)
                ? void 0
                : d.earnedEpicRewards,
            f = (0, q.B2)(),
            E = (0, L.A)(v);
          return s
            ? l().createElement(
                C.A,
                null,
                l().createElement(r.m, {
                  title: f("egstore.cart.success.title"),
                  meta: [{ name: "robots", content: "noindex" }],
                }),
                l().createElement(
                  w.A,
                  null,
                  l().createElement(
                    j.A,
                    null,
                    l().createElement(u, { offers: v }),
                    l().createElement(D, {
                      transactionId: s,
                      count: null == v ? void 0 : v.length,
                      earnedEpicRewards: m,
                      customCTA: E,
                    }),
                  ),
                ),
              )
            : l().createElement(S.A, { to: (0, o.getPath)() });
        },
        N = H;
    },
  },
]);
//# sourceMappingURL=CartSuccessView.egstore-site.17904606446b601a6d6c.js.map
