"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [761],
  {
    16195: (e, t, n) => {
      n.r(t), n.d(t, { CartSuccessView: () => S, default: () => j });
      var l = n(8788),
        a = n.n(l),
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
          n = (0, l.useMemo)(
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
          { invalidateSandboxEntitlements: a } = (0, d.E)(n),
          {
            query: { invalidate: r },
          } = (0, s.N)({ config: { enabled: !1 } });
        return (
          (0, l.useEffect)(() => {
            t(), r(), a();
          }, [n]),
          null
        );
      };
      var v = n(34988),
        f = n(25548),
        m = n(35482),
        E = n(45580),
        b = n(34475),
        p = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        x = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        _ = (e, t, n) =>
          t in e
            ? p(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      const y = (e) =>
          (0, v.AH)({
            display: "flex",
            flexDirection: "column",
            gap: 32,
            [E.aq.sm]: {
              maxWidth: 520,
              margin: "0 auto",
              padding: "30px 40px",
              borderRadius: 8,
              background: e.level2,
            },
            [E.aq.xxl]: { maxWidth: 620 },
          }),
        g = (e) => {
          var t = e,
            { transactionId: n, count: l } = t,
            r = ((e, t) => {
              var n = {};
              for (var l in e)
                x.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
              if (null != e && A)
                for (var l of A(e))
                  t.indexOf(l) < 0 && O.call(e, l) && (n[l] = e[l]);
              return n;
            })(t, ["transactionId", "count"]);
          const o = (0, b.E)();
          return a().createElement(
            "div",
            { className: y(o) },
            a().createElement(f.C, { transactionId: n, count: l }),
            a().createElement(
              m.A,
              ((e, t) => {
                for (var n in t || (t = {})) x.call(t, n) && _(e, n, t[n]);
                if (A) for (var n of A(t)) O.call(t, n) && _(e, n, t[n]);
                return e;
              })({}, r),
            ),
          );
        };
      var I = n(27954),
        h = n(60263),
        D = n(82033),
        w = n(6415),
        L = n(87536),
        C = n(97116);
      const S = ({ history: e }) => {
          var t, n, l, i, c, d;
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
                null == (l = null == e ? void 0 : e.location)
                  ? void 0
                  : l.state)
                ? void 0
                : i.offers,
            f =
              null ==
              (d =
                null == (c = null == e ? void 0 : e.location)
                  ? void 0
                  : c.state)
                ? void 0
                : d.earnedEpicRewards,
            m = (0, I.B2)(),
            E = (0, D.A)(v);
          return s
            ? a().createElement(
                L.A,
                null,
                a().createElement(r.m, {
                  title: m("egstore.cart.success.title"),
                  meta: [{ name: "robots", content: "noindex" }],
                }),
                a().createElement(
                  h.A,
                  null,
                  a().createElement(
                    C.A,
                    null,
                    a().createElement(u, { offers: v }),
                    a().createElement(g, {
                      transactionId: s,
                      count: null == v ? void 0 : v.length,
                      earnedEpicRewards: f,
                      customCTA: E,
                    }),
                  ),
                ),
              )
            : a().createElement(w.A, { to: (0, o.getPath)() });
        },
        j = S;
    },
  },
]);
//# sourceMappingURL=CartSuccessView.egstore-site.b0bd5622b12fd6f37267.js.map
