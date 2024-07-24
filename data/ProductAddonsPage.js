"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [304],
  {
    32433: (e, t, a) => {
      a.r(t), a.d(t, { default: () => T });
      var l = a(98534),
        n = a(73596),
        r = a(29183),
        c = a(47730),
        o = a(8788),
        s = a.n(o),
        d = a(3493),
        i = a(41354),
        m = a(14492),
        E = a(22972),
        C = a(11220),
        p = a(34036),
        u = a(11277),
        b = a(63721),
        _ = a(86257),
        g = a(42209),
        A = a(54303),
        I = a(22792);
      const H = (0, a(15498).K)(
        o.createElement("path", {
          d: "M11.0952 3C9.78 3 8.71429 4.06571 8.71429 5.38095V6.80952H4.90476C3.85238 6.80952 3 7.6619 3 8.71429V11.5714C3 12.0971 3.42667 12.5238 3.95238 12.5238H4.29278C5.5385 12.5238 6.67174 13.4202 6.7965 14.6592C6.93936 16.0849 5.82476 17.2857 4.42857 17.2857H3.95238C3.42667 17.2857 3 17.7124 3 18.2381V21.0952C3 22.1476 3.85238 23 4.90476 23H7.7619C8.28762 23 8.71429 22.5733 8.71429 22.0476V21.7072C8.71429 20.4615 9.61066 19.3283 10.8497 19.2035C12.2754 19.0606 13.4762 20.1752 13.4762 21.5714V22.0476C13.4762 22.5733 13.9029 23 14.4286 23H17.2857C18.3381 23 19.1905 22.1476 19.1905 21.0952V17.2857H20.619C21.9343 17.2857 23 16.22 23 14.9048C23 13.5895 21.9343 12.5238 20.619 12.5238H19.1905V8.71429C19.1905 7.6619 18.3381 6.80952 17.2857 6.80952H13.4762V5.38095C13.4762 4.06571 12.4105 3 11.0952 3Z",
        }),
        "Addons",
      );
      var N = a(68641),
        L = a(49498),
        V = a(10288);
      const v = ({ title: e, onClick: t, disabled: a }) =>
          s().createElement(p.B, {
            icon: s().createElement(H, null),
            button: s().createElement(
              I.rp,
              { onClick: t, disabled: a },
              s().createElement(g.QB, {
                code: "diesel.library.settings.explore_addons",
              }),
            ),
            title: s().createElement(g.QB, {
              code: "egstore.library.additional_content.banner.title",
            }),
            subtitle: s().createElement(g.QB, {
              code: "egstore.library.additional_content.banner.addons.subtitle",
              args: [e],
            }),
          }),
        y = () => {
          const e = (0, d.useSelector)(V.k),
            { namespace: t, catalogItemId: a, appName: l } = (0, b.Jm)(),
            n = (0, E.$)(),
            r = (0, u.q)(t, a, l),
            { gotoAllAddons: c, allAddonsLinkTo: o } = (0, _.h)(t, {
              suspense: !1,
            });
          return e
            ? n
              ? s().createElement(A.T, {
                  type: N.v.INFO,
                  icon: s().createElement(i.m, { color: L.tV.SELECT }),
                  content: s().createElement(C.g, {
                    subTitle: s().createElement(g.QB, {
                      code: "egstore.library.additional_content.banner.addons.subtitle",
                      args: [r],
                    }),
                  }),
                  cta: s().createElement(
                    m.$,
                    { variant: L.ml.OUTLINE, onClick: c, disabled: !o },
                    s().createElement(g.QB, {
                      code: "diesel.library.settings.explore_addons",
                    }),
                  ),
                })
              : null
            : n
              ? s().createElement(v, { onClick: c, disabled: !o, title: r })
              : null;
        };
      var B = a(53540),
        D = a(76834),
        k = a(61801);
      const O = (0, c.i)({
          contentType: r.d.ADDONS,
          useRecords: B.H,
          useSetConfig: n.I,
          useGetConfig: l.m,
          titleCode: "diesel.library.dlc.plural",
          banner: s().createElement(y, null),
        }),
        f = ({ namespace: e, catalogItemId: t, appName: a }) =>
          s().createElement(
            b.AZ.Provider,
            { value: { namespace: e, catalogItemId: t, appName: a } },
            s().createElement(
              k.tY,
              { fallback: s().createElement(D.J, null) },
              s().createElement(O, null),
            ),
          );
      var S = a(64511);
      const T = ({ match: e }) => {
        const { namespace: t, catalogId: a, appName: l } = e.params;
        return s().createElement(
          S.c,
          null,
          s().createElement(f, { namespace: t, catalogItemId: a, appName: l }),
        );
      };
    },
  },
]);
//# sourceMappingURL=ProductAddonsPage.egstore-site.5d943b6a38277184523f.js.map
