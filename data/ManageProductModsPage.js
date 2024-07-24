"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [705],
  {
    2950: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Q });
      var l = a(43340),
        n = a(75710),
        r = a(29183),
        c = a(47730),
        o = a(8788),
        s = a.n(o),
        d = a(3493),
        m = a(41354),
        L = a(14492),
        i = a(22972),
        C = a(11220),
        E = a(34036),
        p = a(11277),
        u = a(63721),
        b = a(44169),
        _ = a(42209),
        g = a(54303),
        I = a(22792);
      const v = (0, a(15498).K)(
        o.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.8139 14.9668C22.6844 14.8135 22.4993 14.7082 22.2924 14.6701C22.0855 14.632 21.8707 14.6637 21.6871 14.7594L13.0055 19.2793L4.32398 14.7594L4.20656 14.7071C3.99853 14.6301 3.7664 14.6293 3.55769 14.7047C3.34898 14.7801 3.17948 14.926 3.08388 15.1127C2.98828 15.2994 2.97382 15.5126 3.04346 15.7087C3.1131 15.9049 3.26157 16.0691 3.45847 16.1678L12.5093 20.8812L12.6457 20.9387C12.7846 20.9876 12.9335 21.0076 13.0819 20.9974C13.2302 20.9871 13.3742 20.9469 13.5036 20.8794L22.5526 16.1678L22.6605 16.1016C22.8266 15.9825 22.9408 15.8124 22.9821 15.6224C23.0235 15.4324 22.9893 15.235 22.8859 15.0662L22.8139 14.9668ZM22.8139 11.7299C22.6842 11.5769 22.499 11.4719 22.2921 11.4341C22.0852 11.3964 21.8705 11.4283 21.6871 11.5242L13.0055 16.0441L4.32398 11.5242L4.20656 11.4719C3.99853 11.3949 3.7664 11.3941 3.55769 11.4695C3.34898 11.5449 3.17948 11.6908 3.08388 11.8775C2.98828 12.0642 2.97382 12.2774 3.04346 12.4736C3.1131 12.6697 3.26157 12.8339 3.45847 12.9326L12.5093 17.6442L12.6457 17.7035C12.7846 17.7524 12.9335 17.7724 13.0819 17.7622C13.2302 17.752 13.3742 17.7117 13.5036 17.6442L22.5526 12.9326L22.6605 12.8664C22.8271 12.7472 22.9416 12.5769 22.9829 12.3864C23.0243 12.196 22.9899 11.9982 22.8859 11.8293L22.8139 11.7299ZM13.282 4.04284C13.1042 3.98572 12.9106 3.98572 12.7328 4.04284L12.6002 4.09688L3.86566 8.5226C3.74851 8.5831 3.64799 8.6675 3.57182 8.76934C3.49566 8.87117 3.44586 8.98772 3.42628 9.11003L3.41681 9.23204L3.42628 9.35406C3.45852 9.55923 3.57513 9.74518 3.75203 9.87351L3.86566 9.94323L12.5983 14.3655L12.8294 13.982L12.6021 14.3672L12.6855 14.4038C12.7439 14.4262 12.8049 14.4426 12.8673 14.4526L13.0055 14.4631L13.1002 14.4579C13.1622 14.4514 13.2232 14.4385 13.282 14.4195L13.4108 14.3672L13.1798 13.9837L13.4127 14.3655L22.1435 9.94323L22.259 9.87351C22.4355 9.7456 22.5521 9.56035 22.5848 9.3558L22.5961 9.23379L22.5848 9.11003C22.5653 8.98768 22.5156 8.87108 22.4394 8.76922C22.3632 8.66737 22.2626 8.583 22.1454 8.5226L13.4127 4.09862L13.2801 4.04459L13.282 4.04284Z",
        }),
        "Mods",
      );
      var y = a(68641),
        N = a(49498),
        A = a(10288);
      const B = ({ title: e, onClick: t, disabled: a }) =>
          s().createElement(E.B, {
            icon: s().createElement(v, null),
            button: s().createElement(
              I.rp,
              { onClick: t, disabled: a },
              s().createElement(_.QB, {
                code: "diesel.library.settings.explore_mods",
              }),
            ),
            title: s().createElement(_.QB, {
              code: "egstore.library.additional_content.banner.title",
            }),
            subtitle: s().createElement(_.QB, {
              code: "egstore.library.additional_content.banner.mods.subtitle",
              args: [e],
            }),
          }),
        f = () => {
          const e = (0, d.useSelector)(A.k),
            { namespace: t, catalogItemId: a, appName: l } = (0, u.Jm)(),
            n = (0, i.$)(),
            r = (0, p.q)(t, a, l),
            { gotoAllMods: c, allModsLinkTo: o } = (0, b.b)(t, {
              suspense: !1,
            });
          return e
            ? n
              ? s().createElement(g.T, {
                  type: y.v.INFO,
                  icon: s().createElement(m.m, { color: N.tV.SELECT }),
                  content: s().createElement(C.g, {
                    subTitle: s().createElement(_.QB, {
                      code: "egstore.library.additional_content.banner.mods.subtitle",
                      args: [r],
                    }),
                  }),
                  cta: s().createElement(
                    L.$,
                    { variant: N.ml.OUTLINE, onClick: c, disabled: !o },
                    s().createElement(_.QB, {
                      code: "diesel.library.settings.explore_mods",
                    }),
                  ),
                })
              : null
            : n
              ? s().createElement(B, { onClick: c, disabled: !o, title: r })
              : null;
        };
      var k = a(76834),
        D = a(62763),
        M = a(61801);
      const O = (0, c.i)({
          contentType: r.d.MODS,
          useRecords: D.n,
          useSetConfig: n.w,
          useGetConfig: l.y,
          titleCode: "egstore.library.mods.installed_mods",
          banner: s().createElement(f, null),
        }),
        S = ({ namespace: e, catalogItemId: t, appName: a }) =>
          s().createElement(
            u.AZ.Provider,
            { value: { namespace: e, catalogItemId: t, appName: a } },
            s().createElement(
              M.tY,
              { fallback: s().createElement(k.J, null) },
              s().createElement(O, null),
            ),
          );
      var T = a(64511);
      const Q = ({ match: e }) => {
        const { namespace: t, catalogId: a, appName: l } = e.params;
        return s().createElement(
          T.c,
          null,
          s().createElement(S, { namespace: t, catalogItemId: a, appName: l }),
        );
      };
    },
  },
]);
//# sourceMappingURL=ManageProductModsPage.egstore-site.315164bc311505d57af2.js.map
