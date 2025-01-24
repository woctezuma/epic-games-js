"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [304],
  {
    32433: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Q });
      var l = a(8788),
        n = a.n(l),
        c = a(61801),
        r = a(98534),
        o = a(73596),
        s = a(29183),
        d = a(51708),
        i = a(76834),
        m = a(41791),
        E = a(41354),
        C = a(64886),
        p = a(22972),
        u = a(11220),
        b = a(34036),
        _ = a(11277),
        g = a(63721),
        I = a(86257),
        A = a(27954),
        H = a(54303),
        N = a(22792);
      const L = (0, a(15498).K)(
        l.createElement("path", {
          d: "M11.0952 3C9.78 3 8.71429 4.06571 8.71429 5.38095V6.80952H4.90476C3.85238 6.80952 3 7.6619 3 8.71429V11.5714C3 12.0971 3.42667 12.5238 3.95238 12.5238H4.29278C5.5385 12.5238 6.67174 13.4202 6.7965 14.6592C6.93936 16.0849 5.82476 17.2857 4.42857 17.2857H3.95238C3.42667 17.2857 3 17.7124 3 18.2381V21.0952C3 22.1476 3.85238 23 4.90476 23H7.7619C8.28762 23 8.71429 22.5733 8.71429 22.0476V21.7072C8.71429 20.4615 9.61066 19.3283 10.8497 19.2035C12.2754 19.0606 13.4762 20.1752 13.4762 21.5714V22.0476C13.4762 22.5733 13.9029 23 14.4286 23H17.2857C18.3381 23 19.1905 22.1476 19.1905 21.0952V17.2857H20.619C21.9343 17.2857 23 16.22 23 14.9048C23 13.5895 21.9343 12.5238 20.619 12.5238H19.1905V8.71429C19.1905 7.6619 18.3381 6.80952 17.2857 6.80952H13.4762V5.38095C13.4762 4.06571 12.4105 3 11.0952 3Z",
        }),
        "Addons",
      );
      var V = a(68641),
        y = a(49498),
        B = a(10288);
      const D = ({ title: e, onClick: t, disabled: a }) =>
          n().createElement(b.B, {
            icon: n().createElement(L, null),
            button: n().createElement(
              N.rp,
              { onClick: t, disabled: a },
              n().createElement(A.QB, {
                code: "diesel.library.settings.explore_addons",
              }),
            ),
            title: n().createElement(A.QB, {
              code: "egstore.library.additional_content.banner.title",
            }),
            subtitle: n().createElement(A.QB, {
              code: "egstore.library.additional_content.banner.addons.subtitle",
              args: [e],
            }),
          }),
        k = () => {
          const e = (0, m.useSelector)(B.k),
            { namespace: t, catalogItemId: a, appName: l } = (0, g.Jm)(),
            c = (0, p.$)(),
            r = (0, _.q)(t, a, l),
            { gotoAllAddons: o, allAddonsLinkTo: s } = (0, I.h)(t, {
              suspense: !1,
            });
          return e
            ? c
              ? n().createElement(H.T, {
                  type: V.v.INFO,
                  icon: n().createElement(E.m, { color: y.tV.SELECT }),
                  content: n().createElement(u.g, {
                    subTitle: n().createElement(A.QB, {
                      code: "egstore.library.additional_content.banner.addons.subtitle",
                      args: [r],
                    }),
                  }),
                  cta: n().createElement(
                    C.$,
                    { variant: y.ml.OUTLINE, onClick: o, disabled: !s },
                    n().createElement(A.QB, {
                      code: "diesel.library.settings.explore_addons",
                    }),
                  ),
                })
              : null
            : c
              ? n().createElement(D, { onClick: o, disabled: !s, title: r })
              : null;
        };
      var O = a(53540),
        f = a(7811);
      const v = (0, d.i)({
          contentType: s.d.ADDONS,
          useRecords: O.H,
          useSetConfig: o.I,
          useGetConfig: r.m,
          titleCode: "diesel.library.dlc.plural",
          banner: n().createElement(k, null),
        }),
        S = ({ namespace: e, catalogItemId: t, appName: a }) =>
          n().createElement(
            f.Y,
            { namespace: e, catalogItemId: t, appName: a },
            n().createElement(
              c.tY,
              { fallback: n().createElement(i.J, null) },
              n().createElement(v, null),
            ),
          );
      var T = a(64511);
      const Q = ({ match: e }) => {
        const { namespace: t, catalogId: a, appName: l } = e.params;
        return n().createElement(
          T.c,
          null,
          n().createElement(S, { namespace: t, catalogItemId: a, appName: l }),
        );
      };
    },
  },
]);
//# sourceMappingURL=ProductAddonsPage.egstore-site.12086f0467ed5928d413.js.map
