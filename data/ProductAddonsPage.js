(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [230],
  {
    65047: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => N }));
      var l = a(89963),
        n = a(54874),
        c = a(29571),
        r = a(65708),
        o = a(16040),
        s = a(12092),
        d = a(17782),
        i = a(88023),
        m = a(76317),
        C = a(41725),
        p = a(1768),
        u = a(69175),
        E = a(45418),
        _ = a.n(E);
      const b = (0, u.L)(
          E.createElement("path", {
            d: "M11.0952 3C9.78 3 8.71429 4.06571 8.71429 5.38095V6.80952H4.90476C3.85238 6.80952 3 7.6619 3 8.71429V11.5714C3 12.0971 3.42667 12.5238 3.95238 12.5238H4.29278C5.5385 12.5238 6.67174 13.4202 6.7965 14.6592C6.93936 16.0849 5.82476 17.2857 4.42857 17.2857H3.95238C3.42667 17.2857 3 17.7124 3 18.2381V21.0952C3 22.1476 3.85238 23 4.90476 23H7.7619C8.28762 23 8.71429 22.5733 8.71429 22.0476V21.7072C8.71429 20.4615 9.61066 19.3283 10.8497 19.2035C12.2754 19.0606 13.4762 20.1752 13.4762 21.5714V22.0476C13.4762 22.5733 13.9029 23 14.4286 23H17.2857C18.3381 23 19.1905 22.1476 19.1905 21.0952V17.2857H20.619C21.9343 17.2857 23 16.22 23 14.9048C23 13.5895 21.9343 12.5238 20.619 12.5238H19.1905V8.71429C19.1905 7.6619 18.3381 6.80952 17.2857 6.80952H13.4762V5.38095C13.4762 4.06571 12.4105 3 11.0952 3Z",
          }),
          "Addons",
        ),
        g = ({ title: e, onClick: t, disabled: a }) =>
          _().createElement(s.Z, {
            icon: _().createElement(b, null),
            button: _().createElement(
              p.f5,
              { onClick: t, disabled: a },
              _().createElement(C.v0, {
                code: "diesel.library.settings.explore_addons",
              }),
            ),
            title: _().createElement(C.v0, {
              code: "egstore.library.additional_content.banner.title",
            }),
            subtitle: _().createElement(C.v0, {
              code: "egstore.library.additional_content.banner.addons.subtitle",
              args: [e],
            }),
          }),
        A = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, i.wK)(),
            l = (0, o.c)(),
            n = (0, d.V)(e, t, a),
            { gotoAllAddons: c, allAddonsLinkTo: r } = (0, m.R)(e, {
              suspense: !1,
            });
          return l
            ? _().createElement(g, { onClick: c, disabled: !r, title: n })
            : null;
        };
      var H = a(47250),
        v = a(83164),
        I = a(52389);
      const V = (0, r.a)({
          contentType: c.ot.ADDONS,
          useRecords: H.E,
          useSetConfig: n.$,
          useGetConfig: l.v,
          titleCode: "diesel.library.dlc.plural",
          banner: _().createElement(A, null),
        }),
        D = ({ namespace: e, catalogItemId: t, appName: a }) =>
          _().createElement(
            i.wi.Provider,
            { value: { namespace: e, catalogItemId: t, appName: a } },
            _().createElement(
              I.n4,
              { fallback: _().createElement(v.l, null) },
              _().createElement(V, null),
            ),
          );
      var L = a(29318);
      const N = ({ match: e }) => {
        const { namespace: t, catalogId: a, appName: l } = e.params;
        return _().createElement(
          L.z,
          null,
          _().createElement(D, { namespace: t, catalogItemId: a, appName: l }),
        );
      };
    },
  },
]);
//# sourceMappingURL=ProductAddonsPage.egstore-site.23237510591b4cf25ca0.js.map
