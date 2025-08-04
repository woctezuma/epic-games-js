(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [517],
  {
    19224: (e, t, l) => {
      "use strict";
      (l.r(t), l.d(t, { default: () => ln }));
      var a = l(45418),
        r = l.n(a),
        n = l(52389),
        o = l(88583),
        i = l(41725),
        s = l(54904),
        c = l(69936),
        u = l(38764),
        d = l(28901),
        b = Object.defineProperty,
        m = Object.defineProperties,
        v = Object.getOwnPropertyDescriptors,
        p = Object.getOwnPropertySymbols,
        E = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        A = (e, t, l) =>
          t in e
            ? b(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const I = ({ cards: e, Card: t, multipleCols: l = !1 }) => {
        const a = r().useMemo(
          () =>
            ((e) => ({
              wrapper: (0, d.iv)({
                display: "flex",
                gap: 16,
                [u.Uc.underMd]: { flexDirection: e ? "row" : "column" },
                [u.Uc.underSm]: { flexDirection: "column" },
              }),
            }))(l),
          [l],
        );
        return r().createElement(
          "div",
          { className: a.wrapper },
          e.map((e) => {
            return r().createElement(
              t,
              ((l = ((e, t) => {
                for (var l in t || (t = {})) E.call(t, l) && A(e, l, t[l]);
                if (p) for (var l of p(t)) g.call(t, l) && A(e, l, t[l]);
                return e;
              })({}, e)),
              (a = { key: `${e.title}` }),
              m(l, v(a))),
            );
            var l, a;
          }),
        );
      };
      var N = l(5844),
        O = l(31495),
        f = l(96545),
        h = l(71403);
      const y = ({ cssTheme: e }) =>
          (0, d.iv)({
            background: e.background,
            color: e.textPrimary,
            position: "relative",
            borderRadius: f.E0,
          }),
        S = ({ children: e }) => {
          const t = (0, h.Z)();
          return a.createElement(
            "section",
            { className: y({ cssTheme: t }) },
            e,
          );
        };
      var R = l(51187),
        C = l(35477),
        x = l(17751),
        T = l(81526),
        M = l(83242),
        D = l(20688),
        L = l(27542),
        w = l(31293),
        P = l(11629),
        U = l(56635);
      const k = {
          imageWrapper: (0, d.iv)({ height: "100%" }),
          picture: (0, d.iv)({ width: "100%", height: "100%" }),
        },
        G = ({ image: e }) => {
          const t = (0, L.useLocalization)();
          return r().createElement(
            "div",
            { className: k.imageWrapper },
            r().createElement(w.Z, {
              className: k.picture,
              srcSet: e.srcSet,
              showBrokenOnError: !0,
              alt: t("egstore.profile.meta.social.image_alt.profile"),
            }),
          );
        };
      var B = l(54850);
      const j = { text: (0, d.iv)({ fontWeight: "bold" }) },
        F = ({ linkText: e, src: t }) =>
          e && e.length > 0
            ? r().createElement(
                "div",
                { "data-testid": "banner-cta" },
                r().createElement(
                  B.ml,
                  { to: t },
                  r().createElement("span", { className: j.text }, e),
                ),
              )
            : null;
      var _ = l(28893),
        Z = l(17613),
        V = l(68080),
        H = l(13179),
        W = Object.defineProperty,
        $ = Object.defineProperties,
        K = Object.getOwnPropertyDescriptors,
        Y = Object.getOwnPropertySymbols,
        q = Object.prototype.hasOwnProperty,
        z = Object.prototype.propertyIsEnumerable,
        X = (e, t, l) =>
          t in e
            ? W(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Q = (e, t) => {
          for (var l in t || (t = {})) q.call(t, l) && X(e, l, t[l]);
          if (Y) for (var l of Y(t)) z.call(t, l) && X(e, l, t[l]);
          return e;
        },
        J = (e, t) => $(e, K(t));
      const ee = ({ ribbonColor: e, cssTheme: t }) =>
          (0, d.iv)(
            J(
              Q(
                {
                  position: "absolute",
                  top: 0,
                  zIndex: H.W.foreground,
                  span: { color: e ? t.textPrimary : t.accentText },
                },
                (0, Z.hU)({
                  ltr: {
                    right: 0,
                    left: "auto",
                    transformOrigin: "top left",
                    transform: "translateX(30%) translateY(0%) rotate(45deg)",
                  },
                  rtl: {
                    left: 0,
                    right: "auto",
                    transformOrigin: "top right",
                    transform: "translateX(0%) translateY(30%) rotate(-45deg)",
                  },
                }),
              ),
              {
                backgroundColor: e || t.accent,
                "&::before, &::after": J(Q({}, _.d), {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  margin: "0 -1px",
                  backgroundColor: e || t.accent,
                }),
                "&::before": { right: "100%" },
                "&::after": { left: "100%" },
              },
            ),
          ),
        te = ({ ribbonText: e, ribbonColor: t }) => {
          const l = (0, M.y)();
          return r().createElement(
            "div",
            {
              className: ee({ ribbonColor: t, cssTheme: l }),
              "data-testid": "ribbon",
            },
            r().createElement(V.Z, null, e),
          );
        };
      var le = l(50995),
        ae = l(10936),
        re = Object.defineProperty,
        ne = Object.defineProperties,
        oe = Object.getOwnPropertyDescriptors,
        ie = Object.getOwnPropertySymbols,
        se = Object.prototype.hasOwnProperty,
        ce = Object.prototype.propertyIsEnumerable,
        ue = (e, t, l) =>
          t in e
            ? re(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const de = (e, t, l = 0) => {
          const a = (0, le.vC)(e),
            r = (0, ae.Sl)(a[0]),
            n =
              a.length > 1
                ? { direction: t, colors: a.map((e) => (0, N.re)(e).rgb()) }
                : void 0,
            o = n
              ? {
                  type: D.Eo.LINEAR_GRADIENT,
                  color: (0, N.re)(a[l]).rgb(),
                  properties: { image: n },
                }
              : { type: D.Eo.COLOR, color: (0, N.re)(a[0]).rgb() };
          return (
            (i = ((e, t) => {
              for (var l in t || (t = {})) se.call(t, l) && ue(e, l, t[l]);
              if (ie) for (var l of ie(t)) ce.call(t, l) && ue(e, l, t[l]);
              return e;
            })({}, r)),
            ne(i, oe({ background: o }))
          );
          var i;
        },
        be = ({ backgroundColors: e, gradientDirection: t, colorIndex: l }) =>
          (0, a.useMemo)(() => de(e, t, l), [e]),
        me = ["#420A9F", "#524AFA"],
        ve = ["#200e43", "#030556", "#040418"],
        pe = () => ({
          bannerContainer: (0, d.iv)({
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            borderRadius: 16,
            border: "1px solid transparent",
            overflow: "hidden",
            position: "relative",
          }),
          content: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 40,
            flex: 1,
            gap: 40,
            textAlign: "center",
            [u.Uc.underMd]: { gap: 30 },
          }),
          logo: (0, d.iv)({
            width: 64,
            height: 100,
            [u.Uc.underSm]: { width: 45, height: 70 },
            [u.Uc.underMd]: { width: 40, height: 66 },
          }),
          ctaWrapper: (0, d.iv)({
            "a:focus-visible::before": { outline: `${f.Sn} auto 1px;` },
          }),
          ctaIcon: (0, d.iv)({ width: 18, height: 18 }),
          imageWrapper: (0, d.iv)({
            width: "50%",
            display: "flex",
            alignItems: "center",
            [u.Uc.underSm]: { display: "none" },
          }),
          image: (0, d.iv)({ width: "100%" }),
          title: (0, d.iv)({ fontWeight: "bold" }),
        }),
        Ee = ({
          renderCTA: e,
          cta: t,
          title: l,
          subTitle: n,
          link: o,
          logoImage: i,
          ribbonText: s,
          ribbonColor: c,
          backgroundImage: u,
          isDownloadSlug: d,
        }) => {
          var b, m, v, p, E, g;
          const A = (0, M.y)(),
            I = (0, a.useMemo)(() => pe(), []),
            f =
              u && u.src
                ? { src: u.src, altText: u.altText || l || void 0 }
                : null,
            h = be({
              backgroundColors: d ? me : ve,
              gradientDirection: d ? -45 : 315,
              colorIndex: d ? 0 : 1,
            });
          return r().createElement(
            T.f6,
            { themeOverrides: h },
            r().createElement(
              S,
              null,
              r().createElement(
                "div",
                { className: I.bannerContainer },
                s &&
                  r().createElement(
                    T.f6,
                    {
                      themeOverrides: {
                        accent:
                          null == (b = (0, N.re)(A.textPrimary))
                            ? void 0
                            : b.rgb(),
                        accentText:
                          null == (m = (0, N.re)(A.background))
                            ? void 0
                            : m.rgb(),
                      },
                    },
                    r().createElement(te, { ribbonText: s, ribbonColor: c }),
                  ),
                f &&
                  r().createElement(
                    "div",
                    { className: I.imageWrapper },
                    r().createElement("img", {
                      src: f.src,
                      alt: f.altText,
                      className: I.image,
                    }),
                  ),
                r().createElement(
                  "div",
                  { className: I.content },
                  i &&
                    r().createElement(
                      "div",
                      { className: I.logo, "data-testid": "logo" },
                      r().createElement(G, { image: i }),
                    ),
                  l &&
                    r().createElement(
                      C.Z.Heading,
                      { headingLevel: 1, textLevel: x.N.PRIMARY },
                      r().createElement("span", { className: I.title }, l),
                    ),
                  e
                    ? r().createElement(
                        T.f6,
                        {
                          themeOverrides: {
                            accent:
                              null == (v = (0, N.re)(A.textPrimary))
                                ? void 0
                                : v.rgb(),
                            accentText:
                              null == (p = (0, N.re)(A.background))
                                ? void 0
                                : p.rgb(),
                            mode: D.hY.LIGHT,
                          },
                        },
                        r().createElement(
                          "span",
                          { className: I.ctaWrapper },
                          e(),
                        ),
                      )
                    : t && (null == t ? void 0 : t.src)
                      ? r().createElement(
                          T.f6,
                          {
                            themeOverrides: {
                              accent:
                                null == (E = (0, N.re)(A.textPrimary))
                                  ? void 0
                                  : E.rgb(),
                              accentText:
                                null == (g = (0, N.re)(A.background))
                                  ? void 0
                                  : g.rgb(),
                              mode: D.hY.LIGHT,
                            },
                          },
                          r().createElement(
                            "span",
                            { className: I.ctaWrapper },
                            r().createElement(F, {
                              linkText: t.linkText,
                              src: null == t ? void 0 : t.src,
                            }),
                          ),
                        )
                      : null,
                  n &&
                    r().createElement(
                      "div",
                      { "data-testid": "subtitle" },
                      r().createElement(R.ZP, null, n),
                    ),
                  o &&
                    r().createElement(
                      O.Mx,
                      { to: (null == o ? void 0 : o.src) || "" },
                      o.linkText,
                    ),
                ),
              ),
            ),
          );
        };
      var ge = l(1036),
        Ae = l(37922),
        Ie = l(77574),
        Ne = l(29945),
        Oe = l(62766);
      const fe = {
          downloadButton: (0, d.iv)({
            marginTop: 50,
            [u.Uc.underMd]: { marginTop: 20 },
          }),
          iconWrapper: (0, d.iv)((0, Z.wz)(10)),
        },
        he = () => {
          const e = (0, i.ql)(),
            t = (0, Ae.useSelector)(ge.G5),
            l = (0, Ae.useSelector)(ge.LZ),
            a = (0, Ae.useSelector)(ge.F6),
            n = t ? `?trackingId=${t}` : "",
            o = `${(0, U.V5)() ? l : a}${n}`,
            s = (0, U.V5)() ? P.kf.MAC : P.kf.WINDOWS,
            c = {
              eventAction: Oe.DI.EGS_DOWNLOAD_LAUNCHER,
              eventLabel: t,
              eventValue: o,
            };
          return r().createElement(
            "div",
            { className: fe.downloadButton, "data-testid": "download-cta" },
            r().createElement(
              Oe.mJ,
              { event: c },
              r().createElement(
                B.ml,
                { to: o },
                r().createElement(
                  "div",
                  {
                    className: fe.iconWrapper,
                    "data-testid":
                      "" + ((0, U.V5)() ? "mac-icon" : "windows-icon"),
                  },
                  r().createElement(Ie.Z, { icon: s, size: Ne.Z.XXSMALL }),
                ),
                e("epic.diesel.download.launcher"),
              ),
            ),
          );
        },
        ye = ({
          title: e,
          link: t,
          logo: l,
          cta: n,
          subTitle: o,
          ribbonText: s,
          ribbonColor: c,
          backgroundVideo: u,
          backgroundImage: d,
          slug: b,
        }) => {
          const m = (0, i.ql)(),
            v = "download" === b,
            p = (0, a.useMemo)(
              () =>
                (({ isDownloadSlug: e, subTitle: t, getMessage: l }) =>
                  e
                    ? (0, U.GA)()
                      ? l("egstore.download.mobile")
                      : (0, U.V5)()
                        ? l("egstore.download.alsoAvailable.windows")
                        : l("egstore.download.alsoAvailable.mac")
                    : t)({ isDownloadSlug: v, subTitle: o, getMessage: m }),
              [v, o, m],
            ),
            E = v && !(0, U.GA)() ? () => r().createElement(he, null) : void 0,
            g = (0, a.useMemo)(() => {
              return (e = l)
                ? {
                    srcSet: {
                      [P.AV.name.XSMALL]: (0, U.fp)(
                        null == e ? void 0 : e.src,
                        U.qU.RATIO_4X3_720,
                      ),
                    },
                  }
                : void 0;
              var e;
            }, [l]);
          return r().createElement(Ee, {
            title: e,
            cta: n,
            logoImage: g,
            subTitle: p,
            link: t,
            ribbonText: s,
            renderCTA: E,
            ribbonColor: c,
            video: u,
            backgroundImage: d,
            isDownloadSlug: v,
          });
        };
      var Se = l(11240),
        Re = l(14794),
        Ce = l(25999),
        xe = l(80145),
        Te = l(24424);
      const Me = {
        viewBox: "0 0 20 20",
        data: r().createElement("rect", {
          x: "1.66699",
          y: "9.1665",
          width: "16.6667",
          height: "1.66667",
          fill: "currentColor",
        }),
      };
      var De = l(45381),
        Le = l(12375),
        we = Object.defineProperty,
        Pe = Object.getOwnPropertySymbols,
        Ue = Object.prototype.hasOwnProperty,
        ke = Object.prototype.propertyIsEnumerable,
        Ge = (e, t, l) =>
          t in e
            ? we(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Be = (e, t) => {
          for (var l in t || (t = {})) Ue.call(t, l) && Ge(e, l, t[l]);
          if (Pe) for (var l of Pe(t)) ke.call(t, l) && Ge(e, l, t[l]);
          return e;
        };
      const je = (0, De.i)((e) => ({
          answer: (0, d.iv)({ marginTop: 3 }),
          question: (0, d.iv)((0, Z.yd)("left"), {
            flex: 1,
            [u.Uc.underSm]: Be({}, (0, Z.wz)(10)),
          }),
          questionGroup: (0, d.iv)({
            padding: "1em 0",
            borderBottom: `1px solid ${e.level2}`,
          }),
          header: (0, d.iv)((0, Le.Bt)(e), {
            position: "relative",
            display: "flex",
            alignItems: "baseline",
            width: "100%",
            "&:hover": { h3: { color: e.accent }, svg: { color: e.accent } },
          }),
          body: (0, d.iv)({ marginTop: 20 }),
        })),
        Fe = ({ id: e, question: t, startsCollapsed: l = !0 }) => {
          const n = null == t ? void 0 : t.question,
            [o, i] = (0, a.useState)(l),
            s = je();
          return r().createElement(
            "div",
            { className: s.questionGroup, key: n },
            r().createElement(
              Ce.Z,
              {
                "aria-expanded": !o,
                "aria-controls": `collapsable-panel-${e}`,
                "aria-label": n,
                className: s.header,
                onClick: () => i(!o),
              },
              r().createElement(
                "div",
                { className: s.question },
                r().createElement(
                  xe.Z.Heading,
                  { headingLevel: 3, textLevel: x.N.PRIMARY },
                  n,
                ),
              ),
              r().createElement(Ie.Z, {
                icon: o ? P.kf.PLUS_SIGN : Me,
                size: Ne.Z.XXSMALL,
              }),
            ),
            r().createElement(
              "div",
              Be(
                { id: `collapsable-panel-${e}`, className: s.body },
                o ? { hidden: !0 } : {},
              ),
              !o &&
                r().createElement(Te.Z, {
                  className: s.answer,
                  source: null == t ? void 0 : t.answer,
                }),
            ),
          );
        },
        _e = {
          wrapper: (0, d.iv)({ display: "flex", flexDirection: "column" }),
          headline: (0, d.iv)({ alignSelf: "center" }),
        },
        Ze = ({ title: e, list: t }) =>
          r().createElement(
            "div",
            { className: _e.wrapper },
            r().createElement(
              "section",
              { className: _e.headline, id: "faq" },
              r().createElement(Re.Z.Heading, { headingLevel: 2 }, e),
            ),
            r().createElement(Se.a, { data: t }, (e, t) =>
              r().createElement(Fe, {
                id: `marketing-question-${t}`,
                key: `marketing-question-${t}`,
                question: e,
                startsCollapsed: 0 !== t,
              }),
            ),
          );
      var Ve = ((e) => (
          (e.select = "select"),
          (e.input = "input"),
          (e.textArea = "textarea"),
          (e.selectMulti = "select-multi"),
          e
        ))(Ve || {}),
        He = l(60216),
        We = l.n(He),
        $e = l(7711);
      const Ke = /^[1234567890\-\(\)\+ ]{7,20}$/,
        Ye = /^.{3}-.{2}-.{4}$/,
        qe = /^[a-zA-Z0-9\s]*$/,
        ze =
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
        Xe = /^(20|21)\d{2}$/;
      ((0, $e.XB)("checked", (e, t) => !!t),
        (0, $e.XB)("isMobileNumber", (e, t) => {
          if (t) {
            const e = t.replace(/-/g, "");
            return Ke.test(e);
          }
          return !0;
        }),
        (0, $e.XB)("isValidSSN", (e, t) => !t || Ye.test(t)),
        (0, $e.XB)("isValidBandAccountNo", (e, t) => !t || qe.test(t)),
        (0, $e.XB)(
          "RichTextRequired",
          (e, t = "") => !!(t ? t.replace(/<\/?[^>]+(>|$)/g, "") : ""),
        ),
        (0, $e.XB)("isWebsite", (e, t = "") => !t || ze.test(t)),
        (0, $e.XB)("isDate", (e, t) => {
          const l = new Date(t);
          return !!(
            l instanceof Date &&
            !isNaN(l.getTime()) &&
            Xe.test(l.getFullYear())
          );
        }),
        (0, $e.XB)("isArray", (e, t) => Array.isArray(t)),
        (0, $e.XB)("notEmptyImage", (e, t) => "object" == typeof t || t.length),
        (0, $e.XB)(
          "validImageDimension",
          (e, t) =>
            Array.isArray(t) &&
            !t.filter((e) => e && "validImageDimension" === e.invalid).length,
        ),
        (0, $e.XB)(
          "validImageType",
          (e, t) =>
            Array.isArray(t) &&
            !t.filter((e) => e && "imageType" === e.invalid).length,
        ),
        (0, $e.XB)(
          "pngImage",
          (e, t) =>
            Array.isArray(t) &&
            t.every((e) => e && (e.url || "png" === e.extension)),
        ),
        (0, $e.XB)(
          "perImageSize",
          (e, t, l) =>
            Array.isArray(t) && t.every((e) => e && (e.url || e.size <= l)),
        ),
        (0, $e.XB)("totalImageSize", (e, t, l) => {
          if (!Array.isArray(t)) return !1;
          let a = 0;
          return (
            t.forEach((e) => {
              a += e.size;
            }),
            a <= l
          );
        }),
        (0, $e.XB)(
          "imageName",
          (e, t) =>
            Array.isArray(t) &&
            t.every(
              (e) => e && (e.url || e.name.match(/\w*_screenshot[0-9]*\.png/)),
            ),
        ),
        (0, $e.XB)("validRoutingNumber", (e, t) => {
          if (!t) return !0;
          if (9 !== t.length) return !1;
          if ("5" === t[0]) return !1;
          return (
            0 ===
            (7 *
              (parseInt(t.charAt(0), 10) +
                parseInt(t.charAt(3), 10) +
                parseInt(t.charAt(6), 10)) +
              3 *
                (parseInt(t.charAt(1), 10) +
                  parseInt(t.charAt(4), 10) +
                  parseInt(t.charAt(7), 10)) +
              9 *
                (parseInt(t.charAt(2), 10) +
                  parseInt(t.charAt(5), 10) +
                  parseInt(t.charAt(8), 10))) %
              10
          );
        }),
        (0, $e.XB)("w9form", (e, t) => !!t));
      const Qe = $e.ZP,
        Je = {
          FORM_SAVING: "FORM_SAVING",
          FORM_SAVING_SUCCESS: "FORM_SAVING_SUCCESS",
          FORM_SAVING_FAILURE: "FORM_SAVING_FAILURE",
          FORM_PENDING_SAVING: "FORM_PENDING_SAVING",
          FORM_PENDING_SAVING_SUCCESS: "FORM_PENDING_SAVING_SUCCESS",
          FORM_PENDING_SAVING_FAILURE: "FORM_PENDING_SAVING_FAILURE",
          FORM_PUBLISHING: "FORM_PUBLISHING",
          FORM_PUBLISHING_SUCCESS: "FORM_PUBLISHING_SUCCESS",
          FORM_PUBLISHING_FAILURE: "FORM_PUBLISHING_FAILURE",
          FORM_HIDING: "FORM_HIDING",
          FORM_HIDING_SUCCESS: "FORM_HIDING_SUCCESS",
          FORM_HIDING_FAILURE: "FORM_HIDING_FAILURE",
          FORM_REMOVING: "FORM_REMOVING",
          FORM_REMOVING_SUCCESS: "FORM_REMOVING_SUCCESS",
          FORM_REMOVING_FAILURE: "FORM_REMOVING_FAILURE",
          FORM_DRAFTING: "FORM_DRAFTING",
          FORM_DRAFTING_SUCCESS: "FORM_DRAFTING_SUCCESS",
          FORM_DRAFTING_FAILURE: "FORM_DRAFTING_FAILURE",
        };
      var et = Object.defineProperty,
        tt = (e, t, l) => (
          ((e, t, l) => {
            t in e
              ? et(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (e[t] = l);
          })(e, "symbol" != typeof t ? t + "" : t, l),
          l
        );
      const lt = (e, t) => !!(t.indexOf(e) + 1),
        {
          FORM_SAVING_SUCCESS: at,
          FORM_SAVING_FAILURE: rt,
          FORM_PENDING_SAVING_SUCCESS: nt,
          FORM_PENDING_SAVING_FAILURE: ot,
        } = Je;
      class it extends r().Component {
        constructor() {
          (super(...arguments),
            tt(this, "updateInputsWithError", (e) => {
              const { formInstance: t } = this.props,
                l = t.reference;
              l && l.updateInputsWithError(e);
            }),
            tt(this, "setPristine", (e) => {
              const { formInstance: t } = this.props,
                l = t.reference;
              l && l.setFormPristine(e);
            }),
            tt(this, "onKeyPress", (e) => {
              13 === e.which && e.preventDefault();
            }));
        }
        componentDidUpdate() {
          const {
            hasExternalValidationErrors: e,
            errorMessages: t,
            formStatus: l,
            callbackDelay: a,
            successCallback: r,
          } = this.props;
          if (lt(l, [at, nt])) {
            const e = this.setPristine.bind(this);
            setTimeout(() => {
              (e(!0), r && r());
            }, a);
          }
          (lt(l, [rt, ot]) && this.setPristine(!1),
            e && (this.updateInputsWithError(t), this.setPristine(!1)));
        }
        render() {
          const { submitForm: e, invalidSubmit: t } = this.props;
          return r().createElement(
            Qe,
            {
              onKeyPress: this.onKeyPress,
              onValidSubmit: e,
              onInvalidSubmit: t,
            },
            this.props.children,
          );
        }
      }
      (tt(it, "propTypes", {
        children: We().oneOfType([We().object, We().array]),
        formStatus: We().string,
        hasExternalValidationErrors: We().bool,
        submitForm: We().func,
        invalidSubmit: We().func,
        errorMessages: We().object,
        callbackDelay: We().number,
        successCallback: We().func,
        formInstance: We().object,
      }),
        tt(it, "defaultProps", { errorMessages: {} }));
      var st = l(30838),
        ct = l(408),
        ut = l.n(ct),
        dt = l(1701),
        bt = Object.defineProperty,
        mt = Object.defineProperties,
        vt = Object.getOwnPropertyDescriptors,
        pt = Object.getOwnPropertySymbols,
        Et = Object.prototype.hasOwnProperty,
        gt = Object.prototype.propertyIsEnumerable,
        At = (e, t, l) =>
          t in e
            ? bt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        It = (e, t) => {
          for (var l in t || (t = {})) Et.call(t, l) && At(e, l, t[l]);
          if (pt) for (var l of pt(t)) gt.call(t, l) && At(e, l, t[l]);
          return e;
        },
        Nt = (e, t) => mt(e, vt(t));
      const Ot = ({ cssTheme: e, type: t }) => ({
          input: (0, d.iv)({
            position: "relative",
            "& input": {
              width: "100%",
              padding: 20,
              borderRadius: f.E0,
              backgroundColor: "transparent",
              color: e.textPrimary,
              boxSizing: "border-box",
              "::-webkit-calendar-picker-indicator": {
                filter: e.mode === D.hY.DARK ? "invert(1)" : void 0,
              },
              "& ~ label": It(
                Nt(It({ top: 21 }, (0, Z.t$)(20)), {
                  fontWeight: f.Ue.reg,
                  fontSize: 12,
                  position: "absolute",
                  transition: "0.2s ease all",
                  color: e.textSecondary,
                  pointerEvents: "none",
                }),
                "date" === t &&
                  Nt(It({ top: 3 }, (0, Z.t$)(20)), {
                    fontSize: 12,
                    color: e.textSecondary,
                  }),
              ),
              "&:focus": {
                borderColor: e.textPrimary,
                boxShadow: e.backgroundOverlay,
                outline: "none",
                "& ~ label": Nt(It({ top: 3 }, (0, Z.t$)(20)), {
                  fontSize: 12,
                  color: e.textSecondary,
                }),
              },
              "&[disabled]": {
                cursor: "not-allowed",
                backgroundColor: e.level1,
              },
            },
            "& span": {
              background: st.Q6,
              padding: "1rem",
              width: "100%",
              borderRadius: f.E0,
              fontSize: "0.9em",
              margin: "1em 0 0.5em",
              display: "inline-block",
              position: "relative",
              color: e.textPrimary,
            },
            "span::after": Nt(
              It(
                It({}, (0, _.B)(" ")),
                (0, Z.NS)((0, Z.t$)(40), (0, Z.oI)(-10)),
              ),
              {
                bottom: "100%",
                border: "solid transparent",
                height: 0,
                width: 0,
                position: "absolute",
                pointerEvents: "none",
                borderColor: "rgba(136, 183, 213, 0)",
                borderBottomColor: st.Q6,
                borderWidth: 10,
              },
            ),
          }),
          active: (0, d.iv)({ border: `1px solid ${st.Q6} !important` }),
          outlined: (0, d.iv)({
            border: `1px solid ${e.textPrimary} !important`,
          }),
          filled: (0, d.iv)({
            "& label": {
              top: "3px !important",
              fontSize: 12,
              color: e.textSecondary,
            },
          }),
          error: (0, d.iv)({
            margin: "0 20px 20px 0",
            "& input": { borderColor: `${st.Q6} !important` },
          }),
          asterisk: (0, d.iv)({ color: st.Kr, display: "inline" }),
          calendarIcon: (0, d.iv)((0, Z.F2)(20), {
            position: "absolute",
            display: "inline-block",
            top: 21,
            width: 24,
            height: 24,
            span: {
              backgroundColor: "transparent !important",
              width: "100% !important",
              height: "100% !important",
              padding: "0 !important",
              margin: "0 !important",
              "::after": { display: "none" },
            },
          }),
        }),
        ft = (0, $e.pd)(
          ({
            className: e = "",
            name: t,
            id: l,
            required: n = !1,
            placeholder: o,
            label: i,
            value: s,
            isPristine: c,
            isValid: u,
            type: b,
            disabled: m = !1,
            mask: v,
            onMouseEnter: p,
            onMouseLeave: E,
            autoComplete: g,
            pattern: A,
            showError: I,
            errorMessage: N,
            formatValue: O,
            setValue: f,
            onChange: h,
          }) => {
            const y = (0, M.y)(),
              S = (0, a.useMemo)(() => Ot({ cssTheme: y, type: b }), [y, b]),
              R = -1 !== ["hidden", "range"].indexOf(b) ? null : e,
              C = c || u ? S.outlined : S.active;
            return r().createElement(
              "div",
              { className: (0, d.cx)(S.input, { [S.filled]: !!s }, R) },
              r().createElement("input", {
                className: C,
                id: l,
                type: b || "text",
                name: t,
                disabled: m,
                value: s || v,
                onMouseEnter: p,
                onMouseLeave: E,
                onChange: (e) => {
                  let { value: t } = e.currentTarget;
                  (n && " " === t && (t = ""),
                    O && (t = O(t)),
                    f && f(t),
                    h && ((e.currentTarget.value = t), h(e)));
                },
                autoComplete: g,
                pattern: A,
                required: n,
                "data-testid": `input-${l}`,
              }),
              "hidden" !== b &&
                r().createElement(
                  "label",
                  { id: `label-${l || t}`, htmlFor: t, "aria-label": i || o },
                  i || o || "",
                  n &&
                    r().createElement(
                      "div",
                      {
                        className: S.asterisk,
                        "data-testid": "required-asterisk",
                      },
                      " ",
                      "*",
                    ),
                ),
              ((0, dt.VK)("firefox") || (0, dt.VK)("safari")) &&
                "date" === b &&
                r().createElement(
                  "div",
                  { className: S.calendarIcon },
                  r().createElement(Ie.Z, { icon: ut(), size: Ne.Z.XXXSMALL }),
                ),
              N && !c && I && r().createElement("span", null, N),
            );
          },
        );
      var ht = Object.defineProperty,
        yt = Object.defineProperties,
        St = Object.getOwnPropertyDescriptors,
        Rt = Object.getOwnPropertySymbols,
        Ct = Object.prototype.hasOwnProperty,
        xt = Object.prototype.propertyIsEnumerable,
        Tt = (e, t, l) =>
          t in e
            ? ht(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Mt = {
          dropList: (0, d.iv)({ position: "relative", display: "flex" }),
          disabled: (e) =>
            (0, d.iv)({ cursor: "not-allowed", backgroundColor: e.background }),
          input: (e) =>
            (0, d.iv)({
              flex: 1,
              backgroundColor: "transparent",
              color: e.textPrimary,
              padding: "1.28rem 10px",
              boxSizing: "border-box",
              cursor: "pointer",
              "&::selection": { background: "transparent" },
              "&:disabled": { cursor: "not-allowed" },
            }),
          dropListIcon: (0, d.iv)((0, Z.wz)(10), (0, Z.F2)("0%"), {
            position: "absolute",
            top: "33%",
            pointerEvents: "none",
          }),
          asterisk: (0, d.iv)({ color: st.Kr, display: "inline" }),
        },
        Dt = (0, a.forwardRef)((e, t) => {
          var l = e,
            {
              className: a,
              disabled: n,
              inputValue: o,
              placeholder: i,
              required: s,
              label: c,
              name: u,
              selectId: b,
              isDropdownOpen: m,
            } = l,
            v = ((e, t) => {
              var l = {};
              for (var a in e)
                Ct.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
              if (null != e && Rt)
                for (var a of Rt(e))
                  t.indexOf(a) < 0 && xt.call(e, a) && (l[a] = e[a]);
              return l;
            })(l, [
              "className",
              "disabled",
              "inputValue",
              "placeholder",
              "required",
              "label",
              "name",
              "selectId",
              "isDropdownOpen",
            ]);
          const p = (0, M.y)();
          return r().createElement(
            "div",
            { className: (0, d.cx)(Mt.dropList, a, { [Mt.disabled(p)]: n }) },
            c &&
              r().createElement(
                "label",
                { htmlFor: `${b}-droplist-input`, "aria-label": c },
                c,
                s &&
                  r().createElement("span", { className: Mt.asterisk }, " *"),
              ),
            r().createElement(
              "input",
              ((E = ((e, t) => {
                for (var l in t || (t = {})) Ct.call(t, l) && Tt(e, l, t[l]);
                if (Rt) for (var l of Rt(t)) xt.call(t, l) && Tt(e, l, t[l]);
                return e;
              })({ ref: t, "data-testid": "droplist-input" }, v)),
              (g = {
                className: Mt.input(p),
                placeholder: i,
                value: o,
                name: u,
                id: `${b}-droplist-input`,
                "aria-controls": `${b}-listbox`,
                "aria-expanded": m,
                "aria-haspopup": "listbox",
                role: "combobox",
              }),
              yt(E, St(g))),
            ),
            r().createElement(Ie.Z, {
              className: Mt.dropListIcon,
              icon: P.kf.CARET_DOWN,
              size: P.J7.XSMALL,
            }),
          );
          var E, g;
        });
      var Lt = Object.defineProperty,
        wt = Object.defineProperties,
        Pt = Object.getOwnPropertyDescriptors,
        Ut = Object.getOwnPropertySymbols,
        kt = Object.prototype.hasOwnProperty,
        Gt = Object.prototype.propertyIsEnumerable,
        Bt = (e, t, l) =>
          t in e
            ? Lt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        jt = (e, t) => {
          for (var l in t || (t = {})) kt.call(t, l) && Bt(e, l, t[l]);
          if (Ut) for (var l of Ut(t)) Gt.call(t, l) && Bt(e, l, t[l]);
          return e;
        },
        Ft = (e, t) => {
          var l = {};
          for (var a in e) kt.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
          if (null != e && Ut)
            for (var a of Ut(e))
              t.indexOf(a) < 0 && Gt.call(e, a) && (l[a] = e[a]);
          return l;
        };
      const _t = {
          select: (e) =>
            (0, d.iv)((0, Z.t$)(0), (0, Z.yd)("left"), {
              position: "absolute",
              width: "auto",
              top: "calc(100% + 10px)",
              whiteSpace: "nowrap",
              padding: 0,
              margin: 0,
              maxHeight: 350,
              overflowY: "auto",
              minWidth: "100%",
              color: e.textPrimary,
              backgroundColor: e.level1,
              zIndex: 12,
              borderRadius: f.E0,
              boxShadow: `0 2px 35px 0 ${f.lu}`,
            }),
          options: (0, d.iv)({ padding: 0, margin: 0, listStyle: "none" }),
          list: (e, t, l) =>
            (0, d.iv)(
              {
                display: "block",
                width: "100%",
                height: 36,
                listStyle: "none",
                padding: "0 20px",
                border: "none",
                outline: "none",
                color: e.textPrimary,
                "&:hover": { backgroundColor: e.backgroundOverlay },
              },
              t && { backgroundColor: e.backgroundOverlay },
              l && { backgroundColor: e.textSecondary },
            ),
        },
        Zt = (e) => {
          var t = e,
            {
              label: l,
              value: a,
              index: n,
              selectId: o,
              shouldHighlight: i,
              isSelected: s,
            } = t,
            c = Ft(t, [
              "label",
              "value",
              "index",
              "selectId",
              "shouldHighlight",
              "isSelected",
            ]);
          const u = (0, M.y)();
          return r().createElement(
            "div",
            {
              role: "option",
              "data-index": n,
              "data-value": a,
              "aria-selected": s,
              id: `${o}-option-${n}`,
              "aria-label": l,
            },
            r().createElement(
              "button",
              ((d = jt(
                {
                  "data-testid": "menu-item",
                  tabIndex: -1,
                  type: "button",
                  className: _t.list(u, i, s),
                },
                c,
              )),
              wt(d, Pt({ value: a }))),
              l,
            ),
          );
          var d;
        },
        Vt = (e) => {
          var t = e,
            {
              filterOptions: l,
              listClass: n,
              highlighted: o,
              selectedValue: i,
              selectId: s,
            } = t,
            c = Ft(t, [
              "filterOptions",
              "listClass",
              "highlighted",
              "selectedValue",
              "selectId",
            ]);
          const u = (0, a.useRef)(null),
            b = (0, M.y)();
          return (
            (0, a.useEffect)(() => {
              const { current: e } = u;
              if (!e || (o < 0 && !i)) return;
              const t = o > -1 ? `[data-index="${o}"]` : `[data-value="${i}"]`,
                l = e.querySelector(t);
              if (l) {
                const t = e.offsetHeight,
                  a = l.offsetHeight;
                e.scrollTop = l.offsetTop - t / 2 + a / 2;
              }
            }, [i, o, u]),
            r().createElement(
              "div",
              { className: _t.select(b), ref: u, "data-testid": "menu-list" },
              r().createElement(
                "div",
                {
                  className: (0, d.cx)(_t.options, n),
                  role: "listbox",
                  id: `${s}-listbox`,
                  tabIndex: -1,
                  "aria-labelledby": `${s}-droplist-input`,
                },
                l.length > 0 &&
                  l.map((e, t) =>
                    r().createElement(
                      Zt,
                      jt(
                        {
                          key: e.value,
                          index: t,
                          label: e.label,
                          value: e.value,
                          selectId: s,
                          shouldHighlight: t === o,
                          isSelected: e.value === i,
                        },
                        c,
                      ),
                    ),
                  ),
              ),
            )
          );
        };
      var Ht = l(98633),
        Wt = l.n(Ht),
        $t = Object.defineProperty,
        Kt = Object.defineProperties,
        Yt = Object.getOwnPropertyDescriptors,
        qt = Object.getOwnPropertySymbols,
        zt = Object.prototype.hasOwnProperty,
        Xt = Object.prototype.propertyIsEnumerable,
        Qt = (e, t, l) =>
          t in e
            ? $t(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Jt = (e, t) => {
          for (var l in t || (t = {})) zt.call(t, l) && Qt(e, l, t[l]);
          if (qt) for (var l of qt(t)) Xt.call(t, l) && Qt(e, l, t[l]);
          return e;
        };
      const el = (e) => ({
          wrapper: (0, d.iv)({
            position: "relative",
            outline: "none",
            cursor: "pointer",
            border: `1px solid ${e.textPrimary}`,
            borderColor: `${e.textPrimary} !important`,
            borderRadius: f.E0,
            backgroundColor: "transparent",
            color: e.textPrimary,
          }),
          active: (0, d.iv)({
            display: "block",
            color: e.textPrimary,
            zIndex: 9999,
          }),
          droplist: (0, d.iv)({ position: "relative", display: "flex" }),
          disabled: (0, d.iv)({
            cursor: "not-allowed",
            backgroundColor: e.background,
          }),
        }),
        tl = ({
          name: e,
          options: t,
          className: l,
          placeholder: n = "",
          listClass: o,
          activeClass: i,
          onChange: s,
          disabled: c = !1,
          searchable: u = !0,
          required: b = !1,
          label: m,
        }) => {
          const v = (0, M.y)(),
            [p] = (0, a.useState)(Wt()()),
            E = (0, a.useMemo)(() => el(v), [v]),
            g = (0, a.useMemo)(
              () =>
                t.map((e, t) => {
                  return (
                    (l = Jt({}, e)),
                    (a = { _id: `${e.value}`, index: t }),
                    Kt(l, Yt(a))
                  );
                  var l, a;
                }),
              [t],
            ),
            [A, I] = (0, a.useState)(!1),
            [N, O] = (0, a.useState)(""),
            [f, h] = (0, a.useState)(-1),
            [y, S] = (0, a.useState)(""),
            [R, C] = (0, a.useState)(g),
            x = (0, a.useRef)(null),
            T = (0, a.useMemo)(
              () => g.find((e) => e.value === N) || null,
              [g, N],
            ),
            D = A ? y : T ? T.label : "",
            L = (0, a.useCallback)(() => {
              (I(!1), h(-1), S(""), C(g), x && x.current && x.current.blur());
            }, [I, h, S, x]),
            w = (0, a.useCallback)(
              (t) => {
                const l = t ? R.find((e) => e.value === t) : R[f];
                (O(l.value), s(e, l.value));
              },
              [s, R, f],
            ),
            U = (0, a.useCallback)(
              (e) => {
                (e.preventDefault(),
                  x && x.current && x.current.blur(),
                  I(!1),
                  w(e.currentTarget.value));
              },
              [w, I, x],
            ),
            k = (0, a.useCallback)(
              (e) => {
                const { keyCode: t } = e,
                  l = e.target;
                if (t === P.Do.UP || t === P.Do.DOWN) {
                  (e.preventDefault(), e.stopPropagation());
                  const a = ((e, t) => {
                    const { keyCode: l, options: a } = t,
                      r = a.length - 1;
                    let n = e;
                    switch (l) {
                      case P.Do.DOWN:
                        n = e + 1;
                        break;
                      case P.Do.UP:
                        n = e - 1;
                    }
                    return (n < 0 ? (n = r) : n > r && (n = 0), n);
                  })(f, { keyCode: t, options: R });
                  (l.setAttribute("aria-activedescendant", `${p}-option-${a}`),
                    h(a));
                } else l.removeAttribute("aria-activedescendant");
              },
              [f, R],
            ),
            G = (0, a.useCallback)(
              (e) => {
                const { keyCode: t } = e.nativeEvent;
                t === P.Do.RETURN &&
                  (e.preventDefault(), e.stopPropagation(), w(), L());
              },
              [w, L],
            ),
            B = (0, a.useCallback)(
              (e) => {
                const { keyCode: t } = e;
                t === P.Do.ESCAPE &&
                  (e.preventDefault(), e.stopPropagation(), L());
              },
              [L],
            ),
            j = {
              onChange: ({ target: e }) => {
                const { value: t } = e,
                  l =
                    ((a = t),
                    g.filter(
                      (e) =>
                        !a ||
                        -1 !==
                          e.label.toLowerCase().indexOf(a.trim().toLowerCase()),
                    ));
                var a;
                (C(l), S(t));
              },
              onMouseDown: () => {
                I((e) => !e);
              },
              onBlur: L,
              onFocus: () => {
                I(!0);
              },
              onKeyPress: G,
              onKeyDown: k,
              onKeyUp: B,
            },
            F = { onMouseDown: U, onKeyDown: k, onKeyPress: G, onBlur: L };
          return r().createElement(
            "div",
            {
              className: (0, d.cx)(E.wrapper, l, { [E.active]: A, [i]: A }),
              "aria-label": m || n,
            },
            r().createElement(
              Dt,
              Jt(
                {
                  ref: x,
                  disabled: c || !u,
                  placeholder: n,
                  className: l,
                  inputValue: D,
                  required: b,
                  label: m,
                  name: e,
                  selectId: p,
                  isDropdownOpen: A,
                },
                j,
              ),
            ),
            A
              ? r().createElement(
                  Vt,
                  Jt(
                    {
                      listClass: o,
                      filterOptions: R,
                      highlighted: f,
                      selectedValue: N,
                      name: e,
                      selectId: p,
                    },
                    F,
                  ),
                )
              : null,
          );
        };
      var ll = Object.defineProperty,
        al = Object.getOwnPropertySymbols,
        rl = Object.prototype.hasOwnProperty,
        nl = Object.prototype.propertyIsEnumerable,
        ol = (e, t, l) =>
          t in e
            ? ll(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const il = (0, $e.pd)((e) => {
        const t = (0, M.y)(),
          l = a.useMemo(
            () =>
              ((e) => ({
                select: (0, d.iv)({
                  borderRadius: "3px",
                  color: e.textPrimary,
                  "> label": {
                    display: "inline-block",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "calc(100% - 30px)",
                    whiteSpace: "nowrap",
                    color: e.textSecondary,
                  },
                  "> div": { top: "100%" },
                }),
                error: (0, d.iv)({
                  borderColor: `${st.Q6} !important`,
                  "> input": { borderColor: `${st.Q6} !important` },
                }),
                active: (0, d.iv)({ borderColor: e.textPrimary }),
                disabled: (0, d.iv)({ backgroundColor: e.level1 }),
                icon: (0, d.iv)((0, Z.wz)(10), (0, Z.F2)("0%"), {
                  position: "absolute",
                  top: "35%",
                  float: "right",
                  marginTop: -4,
                }),
              }))(t),
            [t],
          ),
          r = e,
          {
            className: n,
            isPristine: o,
            showRequired: i,
            disabled: s,
            label: c,
          } = r,
          u = ((e, t) => {
            var l = {};
            for (var a in e) rl.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
            if (null != e && al)
              for (var a of al(e))
                t.indexOf(a) < 0 && nl.call(e, a) && (l[a] = e[a]);
            return l;
          })(r, [
            "className",
            "isPristine",
            "showRequired",
            "disabled",
            "label",
          ]),
          b = a.createElement(Ie.Z, {
            className: l.icon,
            icon: P.kf.CARET_DOWN,
            size: P.J7.XSMALL,
          });
        return a.createElement(
          tl,
          ((e, t) => {
            for (var l in t || (t = {})) rl.call(t, l) && ol(e, l, t[l]);
            if (al) for (var l of al(t)) nl.call(t, l) && ol(e, l, t[l]);
            return e;
          })(
            {
              className: (0, d.cx)(l.select, n, { [l.error]: !o && i }),
              activeClass: l.active,
              icon: b,
              disabled: s,
              label: c,
              required: i,
            },
            u,
          ),
        );
      });
      var sl = Object.defineProperty,
        cl = Object.defineProperties,
        ul = Object.getOwnPropertyDescriptors,
        dl = Object.getOwnPropertySymbols,
        bl = Object.prototype.hasOwnProperty,
        ml = Object.prototype.propertyIsEnumerable,
        vl = (e, t, l) =>
          t in e
            ? sl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        pl = (e, t) => {
          for (var l in t || (t = {})) bl.call(t, l) && vl(e, l, t[l]);
          if (dl) for (var l of dl(t)) ml.call(t, l) && vl(e, l, t[l]);
          return e;
        },
        El = (e, t) => cl(e, ul(t));
      const gl = (e) => ({
          textarea: (0, d.iv)({
            position: "relative",
            "& textarea": {
              width: "100%",
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: 50,
              maxHeight: 250,
              padding: 20,
              borderRadius: f.E0,
              backgroundColor: "transparent",
              color: e.textPrimary,
              boxSizing: "border-box",
              "& ~ label": El(pl({}, (0, Z.t$)(20)), {
                top: 21,
                fontWeight: f.Ue.reg,
                fontSize: 12,
                position: "absolute",
                transition: "0.2s ease all",
                color: e.textSecondary,
                pointerEvents: "none",
              }),
              "&:focus": {
                borderColor: e.textPrimary,
                boxShadow: e.backgroundOverlay,
                outline: "none",
                "& ~ label": El(pl({}, (0, Z.t$)(20)), {
                  top: 3,
                  fontSize: 12,
                  color: e.textSecondary,
                }),
              },
              "&[disabled]": {
                cursor: "not-allowed",
                backgroundColor: e.level1,
              },
            },
            "& span": {
              background: st.Q6,
              padding: "1rem",
              width: "100%",
              borderRadius: f.E0,
              fontSize: "0.9em",
              margin: "1em 0 0.5em",
              display: "inline-block",
              position: "relative",
              color: e.textPrimary,
            },
            "& span::after": El(
              pl(
                pl({}, (0, _.B)(" ")),
                (0, Z.NS)((0, Z.t$)(40), (0, Z.oI)(-10)),
              ),
              {
                bottom: "100%",
                border: "solid transparent",
                height: 0,
                width: 0,
                position: "absolute",
                pointerEvents: "none",
                borderColor: "rgba(136, 183, 213, 0)",
                borderBottomColor: st.Q6,
                borderWidth: 10,
              },
            ),
          }),
          active: (0, d.iv)({ border: `1px solid ${st.Q6} !important` }),
          outlined: (0, d.iv)({
            border: `1px solid ${e.textPrimary} !important`,
          }),
          filled: (0, d.iv)({
            "& label": El(pl({}, (0, Z.t$)(20)), {
              top: "3px !important",
              fontSize: 12,
              color: e.textSecondary,
            }),
          }),
          error: (0, d.iv)({
            margin: "0 20px 20px 0",
            "& input": { borderColor: st.Q6 },
          }),
          asterisk: (0, d.iv)({ color: "#FFA640", display: "inline" }),
        }),
        Al = (0, $e.pd)(
          ({
            className: e,
            name: t,
            value: l,
            isPristine: n,
            isValid: o,
            id: i,
            mask: s,
            disabled: c,
            onMouseEnter: u,
            onMouseLeave: b,
            autoComplete: m,
            required: v,
            placeholder: p,
            showError: E,
            formatValue: g,
            onChange: A,
            getErrorMessage: I,
            label: N,
          }) => {
            const O = (0, M.y)(),
              f = (0, a.useMemo)(() => gl(O), [O]),
              h = n || o ? f.outlined : f.active;
            return r().createElement(
              "div",
              { className: (0, d.cx)(f.textarea, { [f.filled]: !!l }, e) },
              r().createElement("textarea", {
                className: h,
                id: i,
                name: t,
                value: l || s,
                disabled: c,
                onMouseEnter: u,
                onMouseLeave: b,
                onChange: (e) => {
                  let { value: t } = e.currentTarget;
                  (v && " " === t && (t = ""),
                    g && (t = g(t)),
                    A && ((e.currentTarget.value = t), A(e)));
                },
                autoComplete: m,
                required: v,
                "data-testid": "textarea",
              }),
              r().createElement(
                "label",
                { id: `label-${i || t}`, htmlFor: t },
                N || p || "",
                v &&
                  r().createElement(
                    "div",
                    {
                      className: f.asterisk,
                      "data-testid": "required-asterisk",
                    },
                    " ",
                    "*",
                  ),
              ),
              I && !n && E && r().createElement("span", null, I),
            );
          },
        ),
        Il = [
          { value: "UE4", label: "UE4" },
          { value: "UNITY", label: "Unity" },
          { value: "INTERNAL", label: "Internal" },
          { value: "OTHER", label: "Other" },
        ];
      var Nl = Object.defineProperty,
        Ol = Object.getOwnPropertySymbols,
        fl = Object.prototype.hasOwnProperty,
        hl = Object.prototype.propertyIsEnumerable,
        yl = (e, t, l) =>
          t in e
            ? Nl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Sl = (e, t) => {
          for (var l in t || (t = {})) fl.call(t, l) && yl(e, l, t[l]);
          if (Ol) for (var l of Ol(t)) hl.call(t, l) && yl(e, l, t[l]);
          return e;
        };
      const Rl = ({
        validation: e,
        getMessage: t,
        required: l,
        maxLength: a,
      }) => {
        const r = Sl(Sl({}, a ? { maxLength: a } : {}), e && { [e]: !0 });
        return {
          validations: r,
          validationMessages: {
            isDefaultRequiredValue: !!l && t("ui.form.required"),
            maxLength:
              a && t("errors.com.epicgames.validation.max_length", [a]),
            isWebsite:
              (null == r ? void 0 : r.isWebsite) &&
              t("errors.com.epicgames.validation.invalid.url"),
            isDate:
              (null == r ? void 0 : r.isDate) &&
              t("errors.com.epicgames.validation.invalid.date"),
            isEmail:
              (null == r ? void 0 : r.isEmail) &&
              t("errors.com.epicgames.validation.invalid", ["email"]),
          },
          type: ((e) => (e.isDate ? "date" : e.isEmail ? "email" : "text"))(r),
        };
      };
      var Cl = Object.defineProperty,
        xl = Object.defineProperties,
        Tl = Object.getOwnPropertyDescriptors,
        Ml = Object.getOwnPropertySymbols,
        Dl = Object.prototype.hasOwnProperty,
        Ll = Object.prototype.propertyIsEnumerable,
        wl = (e, t, l) =>
          t in e
            ? Cl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Pl = (e, t) => {
          for (var l in t || (t = {})) Dl.call(t, l) && wl(e, l, t[l]);
          if (Ml) for (var l of Ml(t)) Ll.call(t, l) && wl(e, l, t[l]);
          return e;
        },
        Ul = (e, t) => xl(e, Tl(t));
      const kl = (e) => ({
          formItemLabelWrapper: (0, d.iv)({
            label: { color: e.textSecondary },
          }),
          label: (0, d.iv)({ fontSize: "0.9em" }),
          select: (0, d.iv)({
            border: "1px solid !important",
            borderColor: `${e.backgroundOverlay} !important`,
            div: { border: "none !important" },
            input: { border: "none" },
            width: "100%",
            position: "relative",
            display: "flex",
            "& input": {
              width: "100%",
              padding: 20,
              borderRadius: f.E0,
              backgroundColor: "transparent",
              color: e.textPrimary,
              boxSizing: "border-box",
            },
            "& label": Ul(Pl({ top: 21 }, (0, Z.t$)(20)), {
              fontWeight: f.Ue.reg,
              fontSize: 12,
              position: "absolute",
              transition: "0.2s ease all",
              color: e.textSecondary,
              pointerEvents: "none",
            }),
            "::focus": {
              borderColor: e.textPrimary,
              boxShadow: e.backgroundOverlay,
              outline: "none",
              "& label": Ul(Pl({ top: 3 }, (0, Z.t$)(20)), {
                fontSize: 12,
                color: e.textSecondary,
              }),
            },
          }),
          textInput: (0, d.iv)({
            "input, textarea": {
              border: `1px solid ${e.backgroundOverlay} !important`,
            },
          }),
          wrapper: (0, d.iv)({ margin: "1em" }),
          filled: (0, d.iv)({
            "& label": {
              top: "3px !important",
              fontSize: 12,
              color: e.textSecondary,
            },
          }),
        }),
        Gl = ({
          component: e,
          label: t,
          id: l,
          required: n,
          validation: o,
          maxLength: s,
          onChange: c,
          value: u,
        }) => {
          const b = (0, M.y)(),
            m = (0, a.useMemo)(() => kl(b), [b]),
            v = (0, i.ql)(),
            {
              validations: p,
              validationMessages: E,
              type: g,
            } = (0, a.useMemo)(
              () =>
                Rl({ validation: o, getMessage: v, required: n, maxLength: s }),
              [o, v, n, s],
            );
          return r().createElement(
            "div",
            { className: m.wrapper },
            (() => {
              switch (e) {
                case Ve.input:
                  return r().createElement(ft, {
                    type: g,
                    name: l,
                    value: u || "",
                    placeholder: t,
                    validations: p,
                    validationErrors: E,
                    disabled: !1,
                    onChange: c,
                    autoComplete: "off",
                    required: n,
                    id: l,
                    className: m.textInput,
                  });
                case Ve.select:
                  return r().createElement(
                    "div",
                    {
                      className: m.formItemLabelWrapper,
                      "data-testid": "select-input",
                    },
                    r().createElement(il, {
                      required: n,
                      name: l,
                      value: u || "",
                      validationErrors: E,
                      disabled: !1,
                      onChange: c,
                      options: "Current_Engine__c" === l ? Il : [],
                      className: (0, d.cx)(m.select, { [m.filled]: !!u }),
                      placeholder: "",
                      label: t,
                    }),
                  );
                case Ve.textArea:
                  return r().createElement(Al, {
                    name: t,
                    value: u || "",
                    placeholder: t,
                    validations: p,
                    validationErrors: E,
                    disabled: !1,
                    onChange: c,
                    required: n,
                    id: l,
                    className: m.textInput,
                  });
                default:
                  return null;
              }
            })(),
          );
        };
      var Bl = l(82996),
        jl = l(20386),
        Fl = l(22463),
        _l = l(1768),
        Zl = l(22538);
      const Vl = {
          wrapper: (0, d.iv)({
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }),
          title: (0, d.iv)({ marginBottom: 20 }),
          cta: (0, d.iv)({ marginTop: 60, marginBottom: 20 }),
        },
        Hl = () => {
          const e = (0, Zl.useHistory)(),
            t = (0, Ae.useDispatch)();
          return r().createElement(
            "div",
            { className: Vl.wrapper },
            r().createElement(
              "div",
              { className: Vl.title },
              r().createElement(
                Re.Z.Text,
                null,
                r().createElement(i.v0, {
                  code: "epic.diesel.publishform.title",
                }),
              ),
            ),
            r().createElement(
              R.ZP,
              null,
              r().createElement(i.v0, {
                code: "epic.diesel.publishform.success",
              }),
            ),
            r().createElement(
              "div",
              { className: Vl.cta },
              r().createElement(
                _l.f5,
                {
                  onClick: () => {
                    (t(jl.ZP.fetchAboutPageReset()),
                      e && e.push((0, Fl.generateRoutePath)("/publish")));
                  },
                },
                r().createElement(i.v0, {
                  code: "epic.diesel.publishform.cta",
                }),
              ),
            ),
          );
        };
      var Wl = l(14742),
        $l = l(91156),
        Kl = l(12659),
        Yl = l(87946);
      const ql = (e) => e.get("about"),
        zl = (e) => ql(e).devFormSubmitted,
        Xl = [
          { label: "UNITED STATES", value: "US" },
          { label: "UNITED KINGDOM", value: "GB" },
          { label: "JAPAN", value: "JP" },
          { label: "KOREA, REPUBLIC OF", value: "KR" },
          { label: "CHINA", value: "CN" },
          { label: "AFGHANISTAN", value: "AF" },
          { label: "ÅLAND ISLANDS", value: "AX" },
          { label: "ALBANIA", value: "AL" },
          { label: "ALGERIA", value: "DZ" },
          { label: "AMERICAN SAMOA", value: "AS" },
          { label: "ANDORRA", value: "AD" },
          { label: "ANGOLA", value: "AO" },
          { label: "ANGUILLA", value: "AI" },
          { label: "ANTARCTICA", value: "AQ" },
          { label: "ANTIGUA AND BARBUDA", value: "AG" },
          { label: "ARGENTINA", value: "AR" },
          { label: "ARMENIA", value: "AM" },
          { label: "ARUBA", value: "AW" },
          { label: "AUSTRALIA", value: "AU" },
          { label: "AUSTRIA", value: "AT" },
          { label: "AZERBAIJAN", value: "AZ" },
          { label: "BAHAMAS", value: "BS" },
          { label: "BAHRAIN", value: "BH" },
          { label: "BANGLADESH", value: "BD" },
          { label: "BARBADOS", value: "BB" },
          { label: "BELARUS", value: "BY" },
          { label: "BELGIUM", value: "BE" },
          { label: "BELIZE", value: "BZ" },
          { label: "BENIN", value: "BJ" },
          { label: "BERMUDA", value: "BM" },
          { label: "BHUTAN", value: "BT" },
          { label: "BOLIVIA", value: "BO" },
          { label: "BOSNIA AND HERZEGOVINA", value: "BA" },
          { label: "BOTSWANA", value: "BW" },
          { label: "BOUVET ISLAND", value: "BV" },
          { label: "BRAZIL", value: "BR" },
          { label: "BRITISH INDIAN OCEAN TERRITORY", value: "IO" },
          { label: "BRUNEI DARUSSALAM", value: "BN" },
          { label: "BULGARIA", value: "BG" },
          { label: "BURKINA FASO", value: "BF" },
          { label: "BURUNDI", value: "BI" },
          { label: "CAMBODIA", value: "KH" },
          { label: "CAMEROON", value: "CM" },
          { label: "CANADA", value: "CA" },
          { label: "CAPE VERDE", value: "CV" },
          { label: "CAYMAN ISLANDS", value: "KY" },
          { label: "CENTRAL AFRICAN REPUBLIC", value: "CF" },
          { label: "CHAD", value: "TD" },
          { label: "CHILE", value: "CL" },
          { label: "CHRISTMAS ISLAND", value: "CX" },
          { label: "COCOS (KEELING) ISLANDS", value: "CC" },
          { label: "COLOMBIA", value: "CO" },
          { label: "COMOROS", value: "KM" },
          { label: "CONGO", value: "CG" },
          { label: "CONGO, DEMOCRATIC REPUBLIC OF THE", value: "CD" },
          { label: "COOK ISLANDS", value: "CK" },
          { label: "COSTA RICA", value: "CR" },
          { label: "COTE D'IVOIRE", value: "CI" },
          { label: "CROATIA", value: "HR" },
          { label: "CYPRUS", value: "CY" },
          { label: "CZECH REPUBLIC", value: "CZ" },
          { label: "DENMARK", value: "DK" },
          { label: "DJIBOUTI", value: "DJ" },
          { label: "DOMINICA", value: "DM" },
          { label: "DOMINICAN REPUBLIC", value: "DO" },
          { label: "ECUADOR", value: "EC" },
          { label: "EGYPT", value: "EG" },
          { label: "EL SALVADOR", value: "SV" },
          { label: "EQUATORIAL GUINEA", value: "GQ" },
          { label: "ERITREA", value: "ER" },
          { label: "ESTONIA", value: "EE" },
          { label: "ETHIOPIA", value: "ET" },
          { label: "FALKLAND ISLANDS (MALVINAS)", value: "FK" },
          { label: "FAROE ISLANDS", value: "FO" },
          { label: "FIJI", value: "FJ" },
          { label: "FINLAND", value: "FI" },
          { label: "FRANCE", value: "FR" },
          { label: "FRENCH GUIANA", value: "GF" },
          { label: "FRENCH POLYNESIA", value: "PF" },
          { label: "FRENCH SOUTHERN TERRITORIES", value: "TF" },
          { label: "GABON", value: "GA" },
          { label: "GAMBIA", value: "GM" },
          { label: "GEORGIA", value: "GE" },
          { label: "GERMANY", value: "DE" },
          { label: "GHANA", value: "GH" },
          { label: "GIBRALTAR", value: "GI" },
          { label: "GREECE", value: "GR" },
          { label: "GREENLAND", value: "GL" },
          { label: "GRENADA", value: "GD" },
          { label: "GUADELOUPE", value: "GP" },
          { label: "GUAM", value: "GU" },
          { label: "GUATEMALA", value: "GT" },
          { label: "GUERNSEY", value: "GG" },
          { label: "GUINEA-BISSAU", value: "GW" },
          { label: "GUINEA", value: "GN" },
          { label: "GUYANA", value: "GY" },
          { label: "HAITI", value: "HT" },
          { label: "HEARD ISLAND AND MCDONALD ISLANDS", value: "HM" },
          { label: "HOLY SEE (VATICAN CITY STATE)", value: "VA" },
          { label: "HONDURAS", value: "HN" },
          { label: "HONG KONG", value: "HK" },
          { label: "HUNGARY", value: "HU" },
          { label: "ICELAND", value: "IS" },
          { label: "INDIA", value: "IN" },
          { label: "INDONESIA", value: "ID" },
          { label: "IRAQ", value: "IQ" },
          { label: "IRELAND", value: "IE" },
          { label: "ISLE OF MAN", value: "IM" },
          { label: "ISRAEL", value: "IL" },
          { label: "ITALY", value: "IT" },
          { label: "JAMAICA", value: "JM" },
          { label: "JERSEY", value: "JE" },
          { label: "JORDAN", value: "JO" },
          { label: "KAZAKHSTAN", value: "KZ" },
          { label: "KENYA", value: "KE" },
          { label: "KIRIBATI", value: "KI" },
          { label: "KUWAIT", value: "KW" },
          { label: "KYRGYZSTAN", value: "KG" },
          { label: "KOSOVO", value: "XK" },
          { label: "LAO PEOPLE'S DEMOCRATIC REPUBLIC", value: "LA" },
          { label: "LATVIA", value: "LV" },
          { label: "LEBANON", value: "LB" },
          { label: "LESOTHO", value: "LS" },
          { label: "LIBYA", value: "LY" },
          { label: "LIECHTENSTEIN", value: "LI" },
          { label: "LITHUANIA", value: "LT" },
          { label: "LUXEMBOURG", value: "LU" },
          { label: "MACAO", value: "MO" },
          { label: "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF", value: "MK" },
          { label: "MADAGASCAR", value: "MG" },
          { label: "MALAWI", value: "MW" },
          { label: "MALAYSIA", value: "MY" },
          { label: "MALDIVES", value: "MV" },
          { label: "MALI", value: "ML" },
          { label: "MALTA", value: "MT" },
          { label: "MARSHALL ISLANDS", value: "MH" },
          { label: "MARTINIQUE", value: "MQ" },
          { label: "MAURITANIA", value: "MR" },
          { label: "MAURITIUS", value: "MU" },
          { label: "MAYOTTE", value: "YT" },
          { label: "MEXICO", value: "MX" },
          { label: "MICRONESIA, FEDERATED STATES OF", value: "FM" },
          { label: "MOLDOVA, REPUBLIC OF", value: "MD" },
          { label: "MONACO", value: "MC" },
          { label: "MONGOLIA", value: "MN" },
          { label: "MONTENEGRO", value: "ME" },
          { label: "MONTSERRAT", value: "MS" },
          { label: "MOROCCO", value: "MA" },
          { label: "MOZAMBIQUE", value: "MZ" },
          { label: "MYANMAR", value: "MM" },
          { label: "NAMIBIA", value: "NA" },
          { label: "NAURU", value: "NR" },
          { label: "NEPAL", value: "NP" },
          { label: "NETHERLANDS ANTILLES", value: "AN" },
          { label: "NETHERLANDS", value: "NL" },
          { label: "NEW CALEDONIA", value: "NC" },
          { label: "NEW ZEALAND", value: "NZ" },
          { label: "NICARAGUA", value: "NI" },
          { label: "NIGER", value: "NE" },
          { label: "NIGERIA", value: "NG" },
          { label: "NIUE", value: "NU" },
          { label: "NORFOLK ISLAND", value: "NF" },
          { label: "NORTHERN MARIANA ISLANDS", value: "MP" },
          { label: "NORWAY", value: "NO" },
          { label: "OMAN", value: "OM" },
          { label: "PAKISTAN", value: "PK" },
          { label: "PALAU", value: "PW" },
          { label: "PALESTINIAN TERRITORY, OCCUPIED", value: "PS" },
          { label: "PANAMA", value: "PA" },
          { label: "PAPUA NEW GUINEA", value: "PG" },
          { label: "PARAGUAY", value: "PY" },
          { label: "PERU", value: "PE" },
          { label: "PHILIPPINES", value: "PH" },
          { label: "PITCAIRN", value: "PN" },
          { label: "POLAND", value: "PL" },
          { label: "PORTUGAL", value: "PT" },
          { label: "PUERTO RICO", value: "PR" },
          { label: "QATAR", value: "QA" },
          { label: "REUNION", value: "RE" },
          { label: "ROMANIA", value: "RO" },
          { label: "RUSSIAN FEDERATION", value: "RU" },
          { label: "RWANDA", value: "RW" },
          { label: "SAINT HELENA", value: "SH" },
          { label: "SAINT KITTS AND NEVIS", value: "KN" },
          { label: "SAINT LUCIA", value: "LC" },
          { label: "SAINT PIERRE AND MIQUELON", value: "PM" },
          { label: "SAINT VINCENT AND THE GRENADINES", value: "VC" },
          { label: "SAMOA", value: "WS" },
          { label: "SAN MARINO", value: "SM" },
          { label: "SAO TOME AND PRINCIPE", value: "ST" },
          { label: "SAUDI ARABIA", value: "SA" },
          { label: "SENEGAL", value: "SN" },
          { label: "SEYCHELLES", value: "SC" },
          { label: "SERBIA", value: "RS" },
          { label: "SIERRA LEONE", value: "SL" },
          { label: "SINGAPORE", value: "SG" },
          { label: "SLOVAKIA", value: "SK" },
          { label: "SLOVENIA", value: "SI" },
          { label: "SOLOMON ISLANDS", value: "SB" },
          { label: "SOMALIA", value: "SO" },
          { label: "SOUTH AFRICA", value: "ZA" },
          {
            label: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
            value: "GS",
          },
          { label: "SPAIN", value: "ES" },
          { label: "SRI LANKA", value: "LK" },
          { label: "SURINAME", value: "SR" },
          { label: "SVALBARD AND JAN MAYEN", value: "SJ" },
          { label: "SWAZILAND", value: "SZ" },
          { label: "SWEDEN", value: "SE" },
          { label: "SWITZERLAND", value: "CH" },
          { label: "TAIWAN", value: "TW" },
          { label: "TAJIKISTAN", value: "TJ" },
          { label: "TANZANIA, UNITED REPUBLIC OF", value: "TZ" },
          { label: "THAILAND", value: "TH" },
          { label: "TIMOR-LESTE", value: "TL" },
          { label: "TOGO", value: "TG" },
          { label: "TOKELAU", value: "TK" },
          { label: "TONGA", value: "TO" },
          { label: "TRINIDAD AND TOBAGO", value: "TT" },
          { label: "TUNISIA", value: "TN" },
          { label: "TURKEY", value: "TR" },
          { label: "TURKMENISTAN", value: "TM" },
          { label: "TURKS AND CAICOS ISLANDS", value: "TC" },
          { label: "TUVALU", value: "TV" },
          { label: "UGANDA", value: "UG" },
          { label: "UKRAINE", value: "UA" },
          { label: "UNITED ARAB EMIRATES", value: "AE" },
          { label: "UNITED STATES MINOR OUTLYING ISLANDS", value: "UM" },
          { label: "URUGUAY", value: "UY" },
          { label: "UZBEKISTAN", value: "UZ" },
          { label: "VANUATU", value: "VU" },
          { label: "VENEZUELA", value: "VE" },
          { label: "VIETNAM", value: "VN" },
          { label: "VIRGIN ISLANDS, BRITISH", value: "VG" },
          { label: "VIRGIN ISLANDS, U.S.", value: "VI" },
          { label: "WALLIS AND FUTUNA", value: "WF" },
          { label: "WESTERN SAHARA", value: "EH" },
          { label: "YEMEN", value: "YE" },
          { label: "ZAMBIA", value: "ZM" },
          { label: "ZIMBABWE", value: "ZW" },
        ];
      var Ql = l(81934),
        Jl = l(88904);
      const ea = {
          wrapper: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }),
          input: (0, d.iv)({ width: "80%", height: 60 }),
          cta: (0, d.iv)({ width: "20%", height: 30 }),
          link: (0, d.iv)({ width: "15%", height: 10 }),
          title: (0, d.iv)({ width: "20%", height: 50 }),
          subtitle: (0, d.iv)({ width: "60%", height: 30 }),
        },
        ta = () =>
          r().createElement(
            "div",
            { className: ea.wrapper },
            r().createElement(Jl.Z, { className: ea.title }),
            r().createElement(Jl.Z, { className: ea.subtitle }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.input }),
            r().createElement(Jl.Z, { className: ea.cta }),
            r().createElement(Jl.Z, { className: ea.link }),
          );
      var la = l(25419);
      const aa = {
          checkboxGroup: (0, d.iv)({
            margin: "1em",
            display: "flex",
            alignItems: "flex-start",
          }),
        },
        ra = (0, $e.pd)(
          ({
            id: e,
            checked: t,
            onClick: l,
            renderLabel: a,
            required: n,
            setValue: o,
            ariaLabel: i = "",
          }) =>
            r().createElement(
              "div",
              { className: aa.checkboxGroup, "data-testid": "formsy-checkbox" },
              r().createElement(la.X, {
                checked: t,
                id: e,
                onClick: (e) => {
                  const { value: t } = e.currentTarget;
                  (o && o(t), l && l(e));
                },
                required: n,
                ariaLabel: i,
              }),
              a && a(),
            ),
        );
      var na = Object.defineProperty,
        oa = Object.defineProperties,
        ia = Object.getOwnPropertyDescriptors,
        sa = Object.getOwnPropertySymbols,
        ca = Object.prototype.hasOwnProperty,
        ua = Object.prototype.propertyIsEnumerable,
        da = (e, t, l) =>
          t in e
            ? na(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        ba = (e, t) => {
          for (var l in t || (t = {})) ca.call(t, l) && da(e, l, t[l]);
          if (sa) for (var l of sa(t)) ua.call(t, l) && da(e, l, t[l]);
          return e;
        },
        ma = (e, t) => oa(e, ia(t));
      const va = (e) => ({
          wrapper: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }),
          content: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            width: "75%",
            justifyContent: "center",
            alignItems: "center",
            form: { width: "100%" },
            [f.Uc.underMd]: { width: "100%" },
          }),
          ctaWrapper: (0, d.iv)({
            display: "flex",
            justifyContent: "center",
            margin: "1em",
            marginTop: 50,
            [f.Uc.mdOnly]: { marginTop: 30 },
            [f.Uc.underMd]: { marginTop: 20 },
          }),
          form: (0, d.iv)({
            padding: "0 1em",
            width: "100%",
            "& form": { margin: "0 auto" },
          }),
          link: (0, d.iv)({ borderBottom: `1px solid ${e.textSecondary}` }),
          header: (0, d.iv)({
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }),
          label: (0, d.iv)(ma(ba({}, (0, Z.oI)(18)), { lineHeight: "unset" })),
        }),
        pa = ({
          submitText: e,
          subTitle: t,
          link: l,
          title: n,
          formField: o,
        }) => {
          const [s, c] = (0, a.useState)(!1),
            [u, d] = (0, a.useState)({}),
            b = (0, Ae.useSelector)(zl),
            m = b.latestValue || s,
            v = (0, i.bu)(),
            [p, E] = (0, a.useState)(b.state),
            g = (0, Ae.useSelector)($l.dG),
            A = (0, Ae.useSelector)(Kl.Kt),
            I = (0, Ae.useDispatch)(),
            [N, O] = r().useState(!1);
          ((0, a.useEffect)(() => {
            E(b.state);
          }, [b]),
            (0, a.useEffect)(() => {
              g || I(Wl.ZP.requestSignIn(A));
            }, [g, A]));
          const f = {
              eventAction: jl.mw.SUBMIT_DEV_FORM,
              eventCategory: jl.Oz,
              eventLabel: jl._5,
              eventValue: (0, Ql.Z)({ formData: u }),
              interactionType: Oe.md.Interaction,
            },
            h = (e) => {
              const { name: t, value: l } = e.target;
              d(ma(ba({}, u), { [t]: l }));
            },
            y = (e, t) => {
              d(ma(ba({}, u), { [e]: t }));
            },
            S = (0, M.y)(),
            C = (0, a.useMemo)(() => va(S), [S]),
            x = (0, i.ql)(),
            T = Rl({ getMessage: x, required: !0, validation: void 0 }),
            D = `[${x(
              "diesel.products.privacy_link",
            )}](https://www.epicgames.com/site/${v}/privacypolicy)`,
            L = x("egstore.publish.form.privacy_checkbox", [D]);
          return g
            ? r().createElement(
                "div",
                { className: C.wrapper },
                r().createElement(
                  "div",
                  { className: C.content },
                  p !== Yl.s.success &&
                    r().createElement(
                      r().Fragment,
                      null,
                      r().createElement(
                        "div",
                        { className: C.header },
                        r().createElement(Re.Z.Text, null, n),
                        r().createElement(R.ZP, null, t),
                      ),
                      r().createElement(
                        "div",
                        { className: C.form },
                        r().createElement(
                          it,
                          {
                            submitForm: () => {
                              if (!s) {
                                c(!0);
                                const { label: e = "" } =
                                    Xl.find(
                                      ({ value: e, label: t }) =>
                                        e ===
                                          (null == u
                                            ? void 0
                                            : u.CountryCode) && t,
                                    ) || {},
                                  t = ma(ba({}, u), {
                                    country: e,
                                    privacyCheckbox: void 0,
                                  });
                                I(jl.ZP.submitDevForm(t));
                              }
                            },
                            callbackDelay: 1e3,
                          },
                          o.map((e) => {
                            const t =
                              (null == e ? void 0 : e.component) === Ve.select;
                            return r().createElement(
                              Gl,
                              ma(
                                ba(
                                  {
                                    key: `form-field-${
                                      null == e ? void 0 : e.id
                                    }`,
                                  },
                                  e,
                                ),
                                { onChange: t ? y : h, value: u[e.id] },
                              ),
                            );
                          }),
                          r().createElement(ra, {
                            id: "publish-form-privacy-checkbox",
                            name: "publish-form-privacy-checkbox",
                            checked: N,
                            onClick: () => {
                              (d(ma(ba({}, u), { privacyCheckbox: !N })),
                                O(!N));
                            },
                            validations: T.validations,
                            required: !0,
                            ariaLabel: L,
                            renderLabel: () =>
                              r().createElement(
                                "label",
                                {
                                  "aria-label": L,
                                  className: C.label,
                                  htmlFor: "publish-form-privacy-checkbox",
                                },
                                r().createElement(Te.Z, { source: L }),
                              ),
                          }),
                          r().createElement(
                            "div",
                            {
                              className: C.ctaWrapper,
                              "data-testid": "submit-form",
                            },
                            r().createElement(
                              Oe.mJ,
                              { event: f },
                              r().createElement(
                                B.gg,
                                {
                                  disabled: m && p !== Yl.s.error,
                                  type: P.UH.SUBMIT,
                                  "data-testid": "submit-button",
                                },
                                e,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  p === Yl.s.error &&
                    r().createElement(i.v0, {
                      code: "egstore.publish.form.error",
                    }),
                  p === Yl.s.fetching &&
                    r().createElement(Ie.Z, {
                      icon: P.kf.CIRCLE_LOADING,
                      size: Ne.Z.XLARGE,
                    }),
                  p === Yl.s.success && r().createElement(Hl, null),
                  (null == l ? void 0 : l.src) &&
                    r().createElement(
                      Bl.Z,
                      { to: null == l ? void 0 : l.src, className: C.link },
                      r().createElement(
                        R.ZP,
                        null,
                        null == l ? void 0 : l.linkText,
                      ),
                    ),
                ),
              )
            : r().createElement(ta, null);
        };
      var Ea = ((e) => (
        (e.TOP_BANNER = "topBanner"),
        (e.INFO_CARDS = "infoCards"),
        (e.INTERACTIVE_CARDS = "interactiveCards"),
        (e.MARKDOWN_CARDS = "markdownCards"),
        (e.FAQ = "faq"),
        (e.STORE_FORM = "storeForm"),
        e
      ))(Ea || {});
      const ga = () => ({
        TopBanner: ye,
        MarketingCards: I,
        FAQ: Ze,
        StoreForm: pa,
      });
      var Aa = l(90920),
        Ia = l(91994),
        Na = l(59620);
      const Oa = { wrapper: (0, d.iv)({ marginBottom: 20 }) },
        fa = ({ children: e }) =>
          r().createElement("div", { className: Oa.wrapper }, e);
      var ha = l(8448);
      const ya = ({ children: e }) => {
          const t = (0, M.y)(),
            l = (0, a.useMemo)(
              () =>
                ((e) => ({
                  wrapper: (0, d.iv)({
                    borderRadius: 16,
                    border: `1px solid ${e.backgroundOverlay}`,
                    width: "100%",
                    overflow: "hidden",
                    background: e.background,
                  }),
                }))(t),
              [t],
            );
          return r().createElement("div", { className: l.wrapper }, e);
        },
        Sa = {
          content: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 40,
            gap: 20,
            [u.Uc.underMd]: { flexDirection: "row", gap: 40 },
            [u.Uc.underSm]: { flexDirection: "column", gap: 20 },
          }),
          imageWrapper: (0, d.iv)({
            width: 160,
            height: 160,
            [u.Uc.mdOnly]: { width: 140, height: 140 },
            [u.Uc.underMd]: { width: 120, height: 120 },
          }),
          image: (0, d.iv)({ width: "100%" }),
          textWrapper: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            gap: 20,
            textAlign: "center",
            flex: 1,
            [u.Uc.smOnly]: { maxWidth: "70%" },
            [u.Uc.underMd]: { textAlign: "left" },
            [u.Uc.underSm]: { textAlign: "center" },
          }),
        },
        Ra = ({ image: e, title: t, subTitle: l }) =>
          r().createElement(
            ya,
            null,
            r().createElement(
              "div",
              { className: Sa.content },
              (null == e ? void 0 : e.src)
                ? r().createElement(
                    "div",
                    {
                      className: Sa.imageWrapper,
                      "data-testid": "marketing-card-image",
                    },
                    r().createElement("img", {
                      src: e.src,
                      alt: e.altText,
                      className: Sa.image,
                    }),
                  )
                : null,
              r().createElement(
                "div",
                { className: Sa.textWrapper },
                r().createElement(
                  Re.Z.Heading,
                  { textLevel: x.N.PRIMARY, headingLevel: 2 },
                  t,
                ),
                l &&
                  r().createElement(
                    "div",
                    { "data-testid": "marketing-card-subtitle" },
                    r().createElement(
                      ha.Z.Heading,
                      { textLevel: x.N.SECONDARY, headingLevel: 3 },
                      l,
                    ),
                  ),
              ),
            ),
          );
      var Ca = l(86216),
        xa = l(99183),
        Ta = l(85635),
        Ma = l(48673),
        Da = Object.defineProperty,
        La = Object.defineProperties,
        wa = Object.getOwnPropertyDescriptors,
        Pa = Object.getOwnPropertySymbols,
        Ua = Object.prototype.hasOwnProperty,
        ka = Object.prototype.propertyIsEnumerable,
        Ga = (e, t, l) =>
          t in e
            ? Da(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Ba = (e, t) => {
          for (var l in t || (t = {})) Ua.call(t, l) && Ga(e, l, t[l]);
          if (Pa) for (var l of Pa(t)) ka.call(t, l) && Ga(e, l, t[l]);
          return e;
        },
        ja = (e, t) => La(e, wa(t));
      const Fa = ({ isMobile: e, isImageTheme: t, isRTL: l }) => {
          let a = "right";
          return (
            t ? l || (a = "left") : l && (a = "left"),
            { vertical: e ? "bottom" : void 0, horizontal: a }
          );
        },
        _a = ({ backgroundColors: e, isImageTheme: t }) => {
          const l = (0, Ma.Su)(),
            r = (0, Ta.Z)(),
            n = (0, U.wS)(r);
          return (0, a.useMemo)(
            () =>
              (({
                backgroundColors: e,
                isMobile: t,
                isImageTheme: l,
                isRTL: a = !1,
              }) => {
                const r = (0, le.vC)(e),
                  n = (0, ae.Sl)(r[0]),
                  o = (0, N.re)(r[0]),
                  i =
                    r.length > 0
                      ? {
                          direction:
                            t && l
                              ? 180
                              : Ba(
                                  {},
                                  Fa({
                                    isMobile: t,
                                    isImageTheme: l,
                                    isRTL: a,
                                  }),
                                ),
                          colors: [
                            {
                              color: null == o ? void 0 : o.rgb(),
                              stopPoint: 31,
                            },
                            {
                              color: ja(Ba({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.8,
                              }),
                              stopPoint: 46,
                            },
                            {
                              color: ja(Ba({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.1,
                              }),
                              stopPoint: 63,
                            },
                            {
                              color: ja(Ba({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.1,
                              }),
                              stopPoint: 82,
                            },
                          ],
                        }
                      : void 0,
                  s = i
                    ? {
                        type: D.Eo.LINEAR_GRADIENT,
                        color: ja(Ba({}, null == o ? void 0 : o.rgb()), {
                          alpha: 0,
                        }),
                        properties: { image: i },
                      }
                    : { type: D.Eo.COLOR, color: null == o ? void 0 : o.rgb() };
                return ja(Ba({}, n), { background: s });
              })({
                backgroundColors: e,
                isMobile: n,
                isImageTheme: t,
                isRTL: l,
              }),
            [e, n, t, l],
          );
        };
      var Za = Object.defineProperty,
        Va = Object.defineProperties,
        Ha = Object.getOwnPropertyDescriptors,
        Wa = Object.getOwnPropertySymbols,
        $a = Object.prototype.hasOwnProperty,
        Ka = Object.prototype.propertyIsEnumerable,
        Ya = (e, t, l) =>
          t in e
            ? Za(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        qa = (e, t) => {
          for (var l in t || (t = {})) $a.call(t, l) && Ya(e, l, t[l]);
          if (Wa) for (var l of Wa(t)) Ka.call(t, l) && Ya(e, l, t[l]);
          return e;
        };
      const za = ({ cssTheme: e, isInset: t }) => {
          return {
            wrapper: (0, d.iv)({
              display: "flex",
              position: "relative",
              padding: t ? 40 : 0,
              alignItems: "center",
              gap: 15,
              [u.Uc.underSm]: { flexDirection: "column" },
            }),
            imageWrapper: (0, d.iv)({
              position: "relative",
              width: "60%",
              [u.Uc.underSm]: { order: 1, paddingBottom: 0, width: "100%" },
            }),
            content: (0, d.iv)({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              height: "100%",
              [u.Uc.underSm]: { position: "relative", marginTop: 20 },
            }),
            link: (0, d.iv)({
              display: "block",
              marginTop: 20,
              span:
                ((l = qa(
                  {
                    borderBottom: `1px solid ${e.backgroundOverlay}`,
                    color: e.textSecondary,
                  },
                  f.pB.smooth("all"),
                )),
                (a = {
                  "&:hover": {
                    color: e.textPrimary,
                    borderColor: e.textPrimary,
                  },
                }),
                Va(l, Ha(a))),
            }),
            text: (0, d.iv)({
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }),
          };
          var l, a;
        },
        Xa = ({
          title: e,
          ctaLink: t,
          backgroundImage: l,
          backgroundColors: n,
          isInset: o = !1,
        }) => {
          const i = (0, M.y)(),
            s = (0, a.useMemo)(() => za({ cssTheme: i, isInset: o }), [i, o]),
            c = {
              eventAction: "interactiveCardLink",
              eventLabel: "interactiveCardLink",
              eventValue: null == t ? void 0 : t.src,
            },
            u = _a({ backgroundColors: n || [i.background] });
          return r().createElement(
            T.f6,
            { themeOverrides: u },
            r().createElement(
              ya,
              null,
              r().createElement(
                "div",
                { className: s.wrapper },
                r().createElement(
                  "div",
                  { className: s.imageWrapper },
                  l &&
                    r().createElement(Ca.w, {
                      src: l.src,
                      alt: l.altText,
                      showBrokenOnError: !0,
                    }),
                ),
                r().createElement(
                  "div",
                  { className: s.content },
                  r().createElement(
                    "div",
                    { className: s.text },
                    r().createElement(
                      xa.Z.Text,
                      { textLevel: x.N.SECONDARY },
                      e,
                    ),
                    r().createElement(
                      Oe.mJ,
                      { event: c },
                      r().createElement(
                        Bl.Z,
                        { to: null == t ? void 0 : t.src, className: s.link },
                        r().createElement(
                          R.ZP,
                          { textLevel: x.N.PRIMARY },
                          null == t ? void 0 : t.linkText,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        Qa = {
          content: (0, d.iv)({ padding: 40 }),
          title: (0, d.iv)({ marginBottom: 20 }),
        },
        Ja = ({ title: e, content: t }) =>
          r().createElement(
            ya,
            null,
            r().createElement(
              "div",
              { className: Qa.content },
              e &&
                r().createElement(
                  "div",
                  { className: Qa.title },
                  r().createElement(
                    xa.Z.Heading,
                    { textLevel: x.N.PRIMARY, headingLevel: 2 },
                    e,
                  ),
                ),
              t &&
                r().createElement(
                  R.ZP,
                  { textLevel: x.N.SECONDARY },
                  r().createElement(Te.Z, { source: t }),
                ),
            ),
          );
      var er = Object.defineProperty,
        tr = Object.defineProperties,
        lr = Object.getOwnPropertyDescriptors,
        ar = Object.getOwnPropertySymbols,
        rr = Object.prototype.hasOwnProperty,
        nr = Object.prototype.propertyIsEnumerable,
        or = (e, t, l) =>
          t in e
            ? er(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        ir = (e, t) => {
          for (var l in t || (t = {})) rr.call(t, l) && or(e, l, t[l]);
          if (ar) for (var l of ar(t)) nr.call(t, l) && or(e, l, t[l]);
          return e;
        },
        sr = (e, t) => tr(e, lr(t));
      const cr = (function (e) {
        const { useMarketingLayout: t } = e;
        return ({ slug: e, data: l }) => {
          var r, n;
          const o = t(),
            i =
              null ==
              (n =
                null == (r = null == l ? void 0 : l.layout)
                  ? void 0
                  : r.section)
                ? void 0
                : n.map((t, l) => {
                    if (t) {
                      const r = [];
                      return (
                        Object.entries(t)
                          .filter(([, e]) => e && null !== e)
                          .forEach(([t, n]) => {
                            n &&
                              r.push(
                                (({
                                  module: e,
                                  slug: t,
                                  index: l,
                                  marketingLayout: r,
                                  moduleName: n,
                                }) => {
                                  const {
                                      TopBanner: o,
                                      MarketingCards: i,
                                      FAQ: s,
                                      StoreForm: c,
                                    } = r,
                                    u = `${n}-${t}`,
                                    d = {
                                      module: null == e ? void 0 : e.__typename,
                                      moduleId: `${t}-${
                                        null == e ? void 0 : e.__typename
                                      }`,
                                      position: l,
                                      type: n,
                                    },
                                    b = {
                                      eventAction:
                                        Na.DI.MARKETING_SECTION_IN_VIEW,
                                      eventLabel: `${n}: ${
                                        null == e ? void 0 : e.__typename
                                      }`,
                                      eventValue: JSON.stringify(d),
                                    };
                                  switch (n) {
                                    case Ea.TOP_BANNER:
                                      return a.createElement(
                                        Ia.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          fa,
                                          null,
                                          a.createElement(
                                            o,
                                            sr(ir({}, e), { slug: t }),
                                          ),
                                        ),
                                      );
                                    case Ea.INFO_CARDS:
                                      return a.createElement(
                                        Ia.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          fa,
                                          null,
                                          a.createElement(
                                            i,
                                            sr(ir({}, e), { Card: Ra }),
                                          ),
                                        ),
                                      );
                                    case Ea.INTERACTIVE_CARDS:
                                      return a.createElement(
                                        Ia.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          fa,
                                          null,
                                          a.createElement(
                                            i,
                                            sr(ir({}, e), { Card: Xa }),
                                          ),
                                        ),
                                      );
                                    case Ea.MARKDOWN_CARDS:
                                      return a.createElement(
                                        Ia.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          fa,
                                          null,
                                          a.createElement(
                                            i,
                                            sr(ir({}, e), {
                                              Card: Ja,
                                              multipleCols: !0,
                                            }),
                                          ),
                                        ),
                                      );
                                    case Ea.FAQ:
                                      return a.createElement(
                                        Ia.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          fa,
                                          null,
                                          a.createElement(s, ir({}, e)),
                                        ),
                                      );
                                    case Ea.STORE_FORM:
                                      return a.createElement(
                                        Ia.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          fa,
                                          null,
                                          a.createElement(c, ir({}, e)),
                                        ),
                                      );
                                    default:
                                      return null;
                                  }
                                })({
                                  module: n,
                                  slug: e,
                                  index: l,
                                  marketingLayout: o,
                                  moduleName: t,
                                }),
                              );
                          }),
                        r.find((e) => null != e)
                      );
                    }
                  });
          return a.createElement(
            Aa.Z,
            null,
            a.createElement(
              "div",
              null,
              null == i
                ? void 0
                : i.map((e, t) =>
                    a.createElement("div", { key: `marketing-${t}` }, e),
                  ),
            ),
          );
        };
      })({ useMarketingLayout: ga });
      var ur = l(98142),
        dr = l(87353),
        br = l(24438),
        mr = l.n(br);
      const vr = mr()`
    query marketingCMS($locale: String!, $slug: String!) {
  StoreCMSPage {
    __typename
    modules(locale: $locale, slug: $slug) {
      title
      layout {
        section {
          topBanner {
            cta {
              src
              linkText
            }
            subTitle
            ribbonColor
            ribbonText
            link {
              src
              linkText
            }
            logo {
              src
              altText
            }
            title
            backgroundVideo {
              sources {
                src
                type
              }
              loop
              autoplay
              muted
            }
            backgroundImage {
              src
              altText
            }
          }
          infoCards {
            cards {
              title
              subTitle
              image {
                altText
                src
              }
            }
          }
          markdownCards {
            cards {
              title
              content
            }
          }
          interactiveCards {
            cards {
              backgroundImage {
                altText
                src
              }
              backgroundColors
              title
              ctaLink {
                linkText
                src
              }
              ctaImage {
                src
                altText
              }
              isInset
            }
          }
          faq {
            title
            list {
              question
              answer
            }
          }
          storeForm {
            submitText
            subTitle
            link {
              src
              linkText
            }
            title
            formField {
              component
              label
              id
              required
              validation
              maxLength
            }
          }
        }
      }
    }
  }
}
    `;
      var pr = Object.defineProperty,
        Er = Object.defineProperties,
        gr = Object.getOwnPropertyDescriptors,
        Ar = Object.getOwnPropertySymbols,
        Ir = Object.prototype.hasOwnProperty,
        Nr = Object.prototype.propertyIsEnumerable,
        Or = (e, t, l) =>
          t in e
            ? pr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        fr = (e, t) => {
          for (var l in t || (t = {})) Ir.call(t, l) && Or(e, l, t[l]);
          if (Ar) for (var l of Ar(t)) Nr.call(t, l) && Or(e, l, t[l]);
          return e;
        };
      const hr = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.StoreCMSPage)
            ? void 0
            : t.modules;
        },
        yr = ({ slug: e }, t) => {
          var l;
          const a = (0, i.bu)();
          var r, n;
          return (0, dr.qM)({
            query: vr,
            variables: { locale: a, slug: e },
            config:
              ((r = fr({}, t)),
              (n = {
                enabled:
                  Boolean(a) &&
                  Boolean(e) &&
                  (null == (l = null == t ? void 0 : t.enabled) || l),
              }),
              Er(r, gr(n))),
            reducer: hr,
          });
        },
        Sr = ({ slug: e }) => {
          const t = yr({ slug: e }),
            l = (0, i.ql)()("epic.store.discover.navtitle");
          return (null == t ? void 0 : t.data)
            ? a.createElement(
                c.Z,
                null,
                a.createElement("h1", { className: s.jy }, l),
                a.createElement(cr, {
                  slug: e,
                  data: null == t ? void 0 : t.data,
                }),
              )
            : a.createElement(ur.Z, {
                to: (0, Fl.generateRoutePath)("/not-found"),
                "data-testid": "redirect-to-not-found",
              });
        };
      var Rr = l(10930),
        Cr = l(45178);
      const xr = mr()`
    query marketingMeta($locale: String!, $slug: String!) {
  StoreCMSPage {
    modules(locale: $locale, slug: $slug) {
      seo {
        title
        description
        keywords
        image {
          src
          altText
        }
        twitter {
          title
          description
        }
        og {
          title
          description
          image {
            src
            alt
            width
            height
          }
        }
      }
    }
  }
}
    `;
      var Tr = Object.defineProperty,
        Mr = Object.defineProperties,
        Dr = Object.getOwnPropertyDescriptors,
        Lr = Object.getOwnPropertySymbols,
        wr = Object.prototype.hasOwnProperty,
        Pr = Object.prototype.propertyIsEnumerable,
        Ur = (e, t, l) =>
          t in e
            ? Tr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        kr = (e, t) => {
          for (var l in t || (t = {})) wr.call(t, l) && Ur(e, l, t[l]);
          if (Lr) for (var l of Lr(t)) Pr.call(t, l) && Ur(e, l, t[l]);
          return e;
        };
      const Gr = (e) => {
          var t, l;
          return null ==
            (l =
              null == (t = null == e ? void 0 : e.StoreCMSPage)
                ? void 0
                : t.modules)
            ? void 0
            : l.seo;
        },
        Br = ({ slug: e }, t) => {
          var l;
          const a = (0, i.bu)();
          var r, n;
          return (0, dr.qM)({
            query: xr,
            reducer: Gr,
            variables: { slug: e, locale: a },
            config:
              ((r = kr({}, t)),
              (n = {
                enabled:
                  Boolean(e) &&
                  Boolean(a) &&
                  (null == (l = null == t ? void 0 : t.enabled) || l),
              }),
              Mr(r, Dr(n))),
          });
        };
      var jr = Object.defineProperty,
        Fr = Object.getOwnPropertySymbols,
        _r = Object.prototype.hasOwnProperty,
        Zr = Object.prototype.propertyIsEnumerable,
        Vr = (e, t, l) =>
          t in e
            ? jr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Hr = ({ slug: e }) => {
          const t = Br({ slug: e }),
            l = (0, L.useLocalization)(),
            r = null == t ? void 0 : t.data;
          return r
            ? a.createElement(
                Rr.Z,
                ((e, t) => {
                  for (var l in t || (t = {})) _r.call(t, l) && Vr(e, l, t[l]);
                  if (Fr) for (var l of Fr(t)) Zr.call(t, l) && Vr(e, l, t[l]);
                  return e;
                })({}, (0, Cr.S)(l, r)),
              )
            : null;
        },
        Wr = () => {
          const e = ((e) => ({
            wrapper: (0, d.iv)({
              display: "flex",
              flexDirection: "column",
              borderRadius: 16,
              border: `1px solid ${e.backgroundOverlay}`,
              width: "100%",
              height: 300,
              overflow: "hidden",
              background: e.background,
            }),
            content: (0, d.iv)({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              marginTop: 50,
              marginBottom: 50,
              gap: 20,
            }),
            title: (0, d.iv)({ width: "30%", height: "20%" }),
            subtitle: (0, d.iv)({ width: "60%", height: "10%" }),
            icon: (0, d.iv)({ width: "10%", height: "35%" }),
          }))((0, M.y)());
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(
              "div",
              { className: e.content },
              r().createElement(Jl.Z, { className: e.icon }),
              r().createElement(Jl.Z, { className: e.title }),
              r().createElement(Jl.Z, { className: e.subtitle }),
            ),
          );
        },
        $r = (e) => ({
          wrapper: (0, d.iv)({
            display: "flex",
            borderRadius: 16,
            border: `1px solid ${e.backgroundOverlay}`,
            width: "100%",
            height: 300,
            overflow: "hidden",
            background: e.background,
            [f.Uc.underMd]: { height: 345 },
          }),
          content: (0, d.iv)({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            [f.Uc.underMd]: { flexDirection: "column" },
          }),
          title: (0, d.iv)({ width: "80%", height: "20%" }),
          image: (0, d.iv)({
            width: "30%",
            height: "80%",
            marginLeft: 10,
            [f.Uc.underMd]: { order: 1, marginLeft: 0, marginBottom: 10 },
          }),
          cta: (0, d.iv)({ width: "40%", height: "10%" }),
          rightCol: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            width: "70%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }),
        }),
        Kr = () => {
          const e = (0, M.y)(),
            t = $r(e);
          return r().createElement(
            "div",
            { className: t.wrapper },
            r().createElement(
              "div",
              { className: t.content },
              r().createElement(Jl.Z, { className: t.image }),
              r().createElement(
                "div",
                { className: t.rightCol },
                r().createElement(Jl.Z, { className: t.title }),
                r().createElement(Jl.Z, { className: t.cta }),
              ),
            ),
          );
        },
        Yr = {
          wrapper: (0, d.iv)({
            display: "flex",
            gap: 16,
            [f.Uc.underLg]: { flexDirection: "column" },
          }),
        },
        qr = ({ children: e }) =>
          r().createElement("div", { className: Yr.wrapper }, e),
        zr = {
          wrapper: (0, d.iv)({
            display: "flex",
            flexDirection: "column",
            height: 400,
          }),
          group: (0, d.iv)({
            display: "flex",
            width: "100%",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }),
          question: (0, d.iv)({ width: "60%", height: "25%" }),
          icon: (0, d.iv)({ marginLeft: "auto", width: "10%", height: "10%" }),
        },
        Xr = () =>
          r().createElement(
            "div",
            { className: zr.group },
            r().createElement(Jl.Z, { className: zr.question }),
            r().createElement(Jl.Z, { className: zr.icon }),
          ),
        Qr = () =>
          r().createElement(
            "div",
            { className: zr.wrapper },
            r().createElement(Xr, null),
            r().createElement(Xr, null),
            r().createElement(Xr, null),
          ),
        Jr = () => {
          const e = (({ cssTheme: e }) => ({
            wrapper: (0, d.iv)({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
              border: "1px solid transparent",
              overflow: "hidden",
              position: "relative",
              backgroundColor: e.backgroundOverlay,
              height: 400,
              gap: 20,
            }),
            title: (0, d.iv)({ width: "50%", height: "5%" }),
            cta: (0, d.iv)({ width: "25%", height: "10%" }),
            subtitle: (0, d.iv)({ width: "7%", height: "2%" }),
            link: (0, d.iv)({ width: "15%", height: "5%" }),
          }))({ cssTheme: (0, M.y)() });
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(Jl.Z, { className: e.title }),
            r().createElement(Jl.Z, { className: e.cta }),
            r().createElement(Jl.Z, { className: e.subtitle }),
            r().createElement(Jl.Z, { className: e.link }),
          );
        },
        en = { spacer: (0, d.iv)({ display: "block", height: 20 }) },
        tn = ({ slug: e }) => {
          const t = "download" === e,
            l = "publish" === e,
            a = "publish-form" === e;
          return r().createElement(
            r().Fragment,
            null,
            !a && r().createElement(Jr, null),
            r().createElement("div", { className: en.spacer }),
            t &&
              r().createElement(
                qr,
                null,
                r().createElement(Kr, null),
                r().createElement(Kr, null),
              ),
            l &&
              r().createElement(
                r().Fragment,
                null,
                r().createElement(
                  qr,
                  null,
                  r().createElement(Wr, null),
                  r().createElement(Wr, null),
                  r().createElement(Wr, null),
                ),
                r().createElement("div", { className: en.spacer }),
                r().createElement(Qr, null),
              ),
            a && r().createElement(ta, null),
          );
        },
        ln = ({ slug: e }) =>
          a.createElement(
            n.n4,
            {
              fallback: a.createElement(
                o.Yn,
                null,
                a.createElement(tn, { slug: e }),
              ),
            },
            a.createElement(Hr, { slug: e }),
            a.createElement(Sr, { slug: e }),
          );
    },
    408: (e) => {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDJIOFY0SDE2VjJIMThWNEgxOUMyMC4xMDQ2IDQgMjEgNC44OTU0MyAyMSA2VjE4QzIxIDE5LjEwNDYgMjAuMTA0NiAyMCAxOSAyMEg1QzMuODk1NDMgMjAgMyAxOS4xMDQ2IDMgMThWNkMzIDQuODk1NDMgMy44OTU0MyA0IDUgNEg2VjJaTTUgMTBIMTlWMThINVYxMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
    },
  },
]);
//# sourceMappingURL=CMSMarketingView.egstore-site.a0459101bc6eed21211d.js.map
