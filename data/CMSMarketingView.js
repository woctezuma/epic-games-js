(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [517],
  {
    88140: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => Yr });
      var a = l(45418),
        r = l.n(a),
        n = l(85449),
        o = l(77915),
        i = l(84244),
        s = l(2899),
        c = l(86376),
        u = l(13405),
        d = l(56470),
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
      var N = l(27061),
        O = l(10035),
        f = l(98095),
        h = l(84258),
        y = l(79546);
      const S = {
          imageWrapper: (0, d.iv)({ height: "100%" }),
          picture: (0, d.iv)({ width: "100%", height: "100%" }),
        },
        R = ({ image: e }) => {
          const t = (0, O.useLocalization)();
          return r().createElement(
            "div",
            { className: S.imageWrapper },
            r().createElement(f.Z, {
              className: S.picture,
              srcSet: e.srcSet,
              showBrokenOnError: !0,
              alt: t("egstore.profile.meta.social.image_alt.profile"),
            }),
          );
        };
      var C = l(37922),
        x = l(94358),
        T = l(6958),
        M = l(72668),
        D = l(46741),
        L = l(34272),
        w = l(91575);
      const P = {
          downloadButton: (0, d.iv)({
            marginTop: 50,
            [u.Uc.underMd]: { marginTop: 20 },
          }),
          iconWrapper: (0, d.iv)((0, L.wz)(10)),
        },
        U = () => {
          const e = (0, i.ql)(),
            t = (0, C.useSelector)(x.G5),
            l = (0, C.useSelector)(x.LZ),
            a = (0, C.useSelector)(x.F6),
            n = t ? `?trackingId=${t}` : "",
            o = `${(0, N.V5)() ? l : a}${n}`,
            s = (0, N.V5)() ? h.kf.MAC : h.kf.WINDOWS,
            c = {
              eventAction: w.DI.EGS_DOWNLOAD_LAUNCHER,
              eventLabel: t,
              eventValue: o,
            };
          return r().createElement(
            "div",
            { className: P.downloadButton, "data-testid": "download-cta" },
            r().createElement(
              w.mJ,
              { event: c },
              r().createElement(
                T.ml,
                { to: o },
                r().createElement(
                  "div",
                  {
                    className: P.iconWrapper,
                    "data-testid":
                      "" + ((0, N.V5)() ? "mac-icon" : "windows-icon"),
                  },
                  r().createElement(M.Z, { icon: s, size: D.Z.XXSMALL }),
                ),
                e("epic.diesel.download.launcher"),
              ),
            ),
          );
        };
      var k = l(29992),
        G = l(46451),
        B = l(29498),
        j = l(7301);
      const F = ({ cssTheme: e }) =>
          (0, d.iv)({
            background: e.background,
            color: e.textPrimary,
            position: "relative",
            borderRadius: B.E0,
          }),
        _ = ({ children: e }) => {
          const t = (0, j.Z)();
          return a.createElement(
            "section",
            { className: F({ cssTheme: t }) },
            e,
          );
        };
      var Z = l(17654),
        V = l(50694),
        H = l(85858),
        W = l(90966),
        $ = l(71630),
        K = l(71991);
      const Y = { text: (0, d.iv)({ fontWeight: "bold" }) },
        q = ({ linkText: e, src: t }) =>
          e && e.length > 0
            ? r().createElement(
                "div",
                { "data-testid": "banner-cta" },
                r().createElement(
                  T.ml,
                  { to: t },
                  r().createElement("span", { className: Y.text }, e),
                ),
              )
            : null;
      var z = l(24779),
        X = l(31265),
        Q = l(65817),
        J = Object.defineProperty,
        ee = Object.defineProperties,
        te = Object.getOwnPropertyDescriptors,
        le = Object.getOwnPropertySymbols,
        ae = Object.prototype.hasOwnProperty,
        re = Object.prototype.propertyIsEnumerable,
        ne = (e, t, l) =>
          t in e
            ? J(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        oe = (e, t) => {
          for (var l in t || (t = {})) ae.call(t, l) && ne(e, l, t[l]);
          if (le) for (var l of le(t)) re.call(t, l) && ne(e, l, t[l]);
          return e;
        },
        ie = (e, t) => ee(e, te(t));
      const se = ({ ribbonColor: e, cssTheme: t }) =>
          (0, d.iv)(
            ie(
              oe(
                {
                  position: "absolute",
                  top: 0,
                  zIndex: Q.W.foreground,
                  span: { color: e ? t.textPrimary : t.accentText },
                },
                (0, L.hU)({
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
                "&::before, &::after": ie(oe({}, z.d), {
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
        ce = ({ ribbonText: e, ribbonColor: t }) => {
          const l = (0, $.y)();
          return r().createElement(
            "div",
            {
              className: se({ ribbonColor: t, cssTheme: l }),
              "data-testid": "ribbon",
            },
            r().createElement(X.Z, null, e),
          );
        };
      var ue = l(87227),
        de = l(45035),
        be = Object.defineProperty,
        me = Object.defineProperties,
        ve = Object.getOwnPropertyDescriptors,
        pe = Object.getOwnPropertySymbols,
        Ee = Object.prototype.hasOwnProperty,
        ge = Object.prototype.propertyIsEnumerable,
        Ae = (e, t, l) =>
          t in e
            ? be(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Ie = (e, t, l = 0) => {
          const a = (0, ue.vC)(e),
            r = (0, de.Sl)(a[0]),
            n =
              a.length > 1
                ? { direction: t, colors: a.map((e) => (0, k.re)(e).rgb()) }
                : void 0,
            o = n
              ? {
                  type: K.Eo.LINEAR_GRADIENT,
                  color: (0, k.re)(a[l]).rgb(),
                  properties: { image: n },
                }
              : { type: K.Eo.COLOR, color: (0, k.re)(a[0]).rgb() };
          return (
            (i = ((e, t) => {
              for (var l in t || (t = {})) Ee.call(t, l) && Ae(e, l, t[l]);
              if (pe) for (var l of pe(t)) ge.call(t, l) && Ae(e, l, t[l]);
              return e;
            })({}, r)),
            me(i, ve({ background: o }))
          );
          var i;
        },
        Ne = ({ backgroundColors: e, gradientDirection: t, colorIndex: l }) =>
          (0, a.useMemo)(() => Ie(e, t, l), [e]),
        Oe = ["#420A9F", "#524AFA"],
        fe = ["#200e43", "#030556", "#040418"],
        he = ({
          renderCTA: e,
          cta: t,
          title: l,
          subTitle: n,
          link: o,
          logoImage: i,
          ribbonText: s,
          ribbonColor: c,
          backgroundImage: b,
          isDownloadSlug: m,
        }) => {
          var v, p, E, g, A, I;
          const N = (0, $.y)(),
            O = (0, a.useMemo)(
              () => ({
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
                  "a:focus-visible::before": { outline: `${B.Sn} auto 1px;` },
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
              [],
            ),
            f =
              b && b.src
                ? { src: b.src, altText: b.altText || l || void 0 }
                : null,
            h = Ne({
              backgroundColors: m ? Oe : fe,
              gradientDirection: m ? -45 : 315,
              colorIndex: m ? 0 : 1,
            });
          return r().createElement(
            W.f6,
            { themeOverrides: h },
            r().createElement(
              _,
              null,
              r().createElement(
                "div",
                { className: O.bannerContainer },
                s &&
                  r().createElement(
                    W.f6,
                    {
                      themeOverrides: {
                        accent:
                          null == (v = (0, k.re)(N.textPrimary))
                            ? void 0
                            : v.rgb(),
                        accentText:
                          null == (p = (0, k.re)(N.background))
                            ? void 0
                            : p.rgb(),
                      },
                    },
                    r().createElement(ce, { ribbonText: s, ribbonColor: c }),
                  ),
                f &&
                  r().createElement(
                    "div",
                    { className: O.imageWrapper },
                    r().createElement("img", {
                      src: f.src,
                      alt: f.altText,
                      className: O.image,
                    }),
                  ),
                r().createElement(
                  "div",
                  { className: O.content },
                  i &&
                    r().createElement(
                      "div",
                      { className: O.logo, "data-testid": "logo" },
                      r().createElement(R, { image: i }),
                    ),
                  l &&
                    r().createElement(
                      V.Z.Heading,
                      { headingLevel: 1, textLevel: H.N.PRIMARY },
                      r().createElement("span", { className: O.title }, l),
                    ),
                  e
                    ? r().createElement(
                        W.f6,
                        {
                          themeOverrides: {
                            accent:
                              null == (E = (0, k.re)(N.textPrimary))
                                ? void 0
                                : E.rgb(),
                            accentText:
                              null == (g = (0, k.re)(N.background))
                                ? void 0
                                : g.rgb(),
                            mode: K.hY.LIGHT,
                          },
                        },
                        r().createElement(
                          "span",
                          { className: O.ctaWrapper },
                          e(),
                        ),
                      )
                    : t && (null == t ? void 0 : t.src)
                      ? r().createElement(
                          W.f6,
                          {
                            themeOverrides: {
                              accent:
                                null == (A = (0, k.re)(N.textPrimary))
                                  ? void 0
                                  : A.rgb(),
                              accentText:
                                null == (I = (0, k.re)(N.background))
                                  ? void 0
                                  : I.rgb(),
                              mode: K.hY.LIGHT,
                            },
                          },
                          r().createElement(
                            "span",
                            { className: O.ctaWrapper },
                            r().createElement(q, {
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
                      r().createElement(Z.ZP, null, n),
                    ),
                  o &&
                    r().createElement(
                      G.Mx,
                      { to: (null == o ? void 0 : o.src) || "" },
                      o.linkText,
                    ),
                ),
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
                    ? (0, N.GA)()
                      ? l("egstore.download.mobile")
                      : (0, N.V5)()
                        ? l("egstore.download.alsoAvailable.windows")
                        : l("egstore.download.alsoAvailable.mac")
                    : t)({ isDownloadSlug: v, subTitle: o, getMessage: m }),
              [v, o, m],
            ),
            E = v && !(0, N.GA)() ? () => r().createElement(U, null) : void 0,
            g = (0, a.useMemo)(() => {
              return (e = l)
                ? {
                    srcSet: {
                      [h.AV.name.XSMALL]: (0, y.fp)(
                        null == e ? void 0 : e.src,
                        y.qU.RATIO_4X3_720,
                      ),
                    },
                  }
                : void 0;
              var e;
            }, [l]);
          return r().createElement(he, {
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
      var Se = l(6232),
        Re = l(75364),
        Ce = l(22480),
        xe = l(67511),
        Te = l(6938);
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
      var De = l(92270),
        Le = l(42925),
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
          question: (0, d.iv)((0, L.yd)("left"), {
            flex: 1,
            [u.Uc.underSm]: Be({}, (0, L.wz)(10)),
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
                  { headingLevel: 3, textLevel: H.N.PRIMARY },
                  n,
                ),
              ),
              r().createElement(M.Z, {
                icon: o ? h.kf.PLUS_SIGN : Me,
                size: D.Z.XXSMALL,
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
      (0, $e.XB)("checked", (e, t) => !!t),
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
        (0, $e.XB)("w9form", (e, t) => !!t);
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
          super(...arguments),
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
            });
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
              e(!0), r && r();
            }, a);
          }
          lt(l, [rt, ot]) && this.setPristine(!1),
            e && (this.updateInputsWithError(t), this.setPristine(!1));
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
      tt(it, "propTypes", {
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
        tt(it, "defaultProps", { errorMessages: {} });
      var st = l(92954),
        ct = l(408),
        ut = l.n(ct),
        dt = Object.defineProperty,
        bt = Object.defineProperties,
        mt = Object.getOwnPropertyDescriptors,
        vt = Object.getOwnPropertySymbols,
        pt = Object.prototype.hasOwnProperty,
        Et = Object.prototype.propertyIsEnumerable,
        gt = (e, t, l) =>
          t in e
            ? dt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        At = (e, t) => {
          for (var l in t || (t = {})) pt.call(t, l) && gt(e, l, t[l]);
          if (vt) for (var l of vt(t)) Et.call(t, l) && gt(e, l, t[l]);
          return e;
        },
        It = (e, t) => bt(e, mt(t));
      const Nt = (0, $e.pd)(
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
          errorMessage: O,
          formatValue: f,
          setValue: h,
          onChange: y,
        }) => {
          const S = (0, $.y)(),
            R = (0, a.useMemo)(
              () =>
                (({ cssTheme: e, type: t }) => ({
                  input: (0, d.iv)({
                    position: "relative",
                    "& input": {
                      width: "100%",
                      padding: 20,
                      borderRadius: B.E0,
                      backgroundColor: "transparent",
                      color: e.textPrimary,
                      boxSizing: "border-box",
                      "::-webkit-calendar-picker-indicator": {
                        filter: e.mode === K.hY.DARK ? "invert(1)" : void 0,
                      },
                      "& ~ label": At(
                        It(At({ top: 21 }, (0, L.t$)(20)), {
                          fontWeight: B.Ue.reg,
                          fontSize: 12,
                          position: "absolute",
                          transition: "0.2s ease all",
                          color: e.textSecondary,
                          pointerEvents: "none",
                        }),
                        "date" === t &&
                          It(At({ top: 3 }, (0, L.t$)(20)), {
                            fontSize: 12,
                            color: e.textSecondary,
                          }),
                      ),
                      "&:focus": {
                        borderColor: e.textPrimary,
                        boxShadow: e.backgroundOverlay,
                        outline: "none",
                        "& ~ label": It(At({ top: 3 }, (0, L.t$)(20)), {
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
                      borderRadius: B.E0,
                      fontSize: "0.9em",
                      margin: "1em 0 0.5em",
                      display: "inline-block",
                      position: "relative",
                      color: e.textPrimary,
                    },
                    "span::after": It(
                      At(
                        At({}, (0, z.B)(" ")),
                        (0, L.NS)((0, L.t$)(40), (0, L.oI)(-10)),
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
                  active: (0, d.iv)({
                    border: `1px solid ${st.Q6} !important`,
                  }),
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
                  calendarIcon: (0, d.iv)((0, L.F2)(20), {
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
                }))({ cssTheme: S, type: b }),
              [S, b],
            ),
            C = -1 !== ["hidden", "range"].indexOf(b) ? null : e,
            x = c || u ? R.outlined : R.active;
          return r().createElement(
            "div",
            { className: (0, d.cx)(R.input, { [R.filled]: !!s }, C) },
            r().createElement("input", {
              className: x,
              id: l,
              type: b || "text",
              name: t,
              disabled: m,
              value: s || v,
              onMouseEnter: p,
              onMouseLeave: E,
              onChange: (e) => {
                let { value: t } = e.currentTarget;
                n && " " === t && (t = ""),
                  f && (t = f(t)),
                  h && h(t),
                  y && ((e.currentTarget.value = t), y(e));
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
                      className: R.asterisk,
                      "data-testid": "required-asterisk",
                    },
                    " ",
                    "*",
                  ),
              ),
            ((0, N.VK)("firefox") || (0, N.VK)("safari")) &&
              "date" === b &&
              r().createElement(
                "div",
                { className: R.calendarIcon },
                r().createElement(M.Z, { icon: ut(), size: D.Z.XXXSMALL }),
              ),
            O && !c && I && r().createElement("span", null, O),
          );
        },
      );
      var Ot = Object.defineProperty,
        ft = Object.defineProperties,
        ht = Object.getOwnPropertyDescriptors,
        yt = Object.getOwnPropertySymbols,
        St = Object.prototype.hasOwnProperty,
        Rt = Object.prototype.propertyIsEnumerable,
        Ct = (e, t, l) =>
          t in e
            ? Ot(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const xt = {
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
          dropListIcon: (0, d.iv)((0, L.wz)(10), (0, L.F2)("0%"), {
            position: "absolute",
            top: "33%",
            pointerEvents: "none",
          }),
          asterisk: (0, d.iv)({ color: st.Kr, display: "inline" }),
        },
        Tt = (0, a.forwardRef)((e, t) => {
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
                St.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
              if (null != e && yt)
                for (var a of yt(e))
                  t.indexOf(a) < 0 && Rt.call(e, a) && (l[a] = e[a]);
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
          const p = (0, $.y)();
          return r().createElement(
            "div",
            { className: (0, d.cx)(xt.dropList, a, { [xt.disabled(p)]: n }) },
            c &&
              r().createElement(
                "label",
                { htmlFor: `${b}-droplist-input`, "aria-label": c },
                c,
                s &&
                  r().createElement("span", { className: xt.asterisk }, " *"),
              ),
            r().createElement(
              "input",
              ((E = ((e, t) => {
                for (var l in t || (t = {})) St.call(t, l) && Ct(e, l, t[l]);
                if (yt) for (var l of yt(t)) Rt.call(t, l) && Ct(e, l, t[l]);
                return e;
              })({ ref: t, "data-testid": "droplist-input" }, v)),
              (g = {
                className: xt.input(p),
                placeholder: i,
                value: o,
                name: u,
                id: `${b}-droplist-input`,
                "aria-controls": `${b}-listbox`,
                "aria-expanded": m,
                "aria-haspopup": "listbox",
                role: "combobox",
              }),
              ft(E, ht(g))),
            ),
            r().createElement(M.Z, {
              className: xt.dropListIcon,
              icon: h.kf.CARET_DOWN,
              size: h.J7.XSMALL,
            }),
          );
          var E, g;
        });
      var Mt = Object.defineProperty,
        Dt = Object.defineProperties,
        Lt = Object.getOwnPropertyDescriptors,
        wt = Object.getOwnPropertySymbols,
        Pt = Object.prototype.hasOwnProperty,
        Ut = Object.prototype.propertyIsEnumerable,
        kt = (e, t, l) =>
          t in e
            ? Mt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Gt = (e, t) => {
          for (var l in t || (t = {})) Pt.call(t, l) && kt(e, l, t[l]);
          if (wt) for (var l of wt(t)) Ut.call(t, l) && kt(e, l, t[l]);
          return e;
        },
        Bt = (e, t) => {
          var l = {};
          for (var a in e) Pt.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
          if (null != e && wt)
            for (var a of wt(e))
              t.indexOf(a) < 0 && Ut.call(e, a) && (l[a] = e[a]);
          return l;
        };
      const jt = {
          select: (e) =>
            (0, d.iv)((0, L.t$)(0), (0, L.yd)("left"), {
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
              borderRadius: B.E0,
              boxShadow: `0 2px 35px 0 ${B.lu}`,
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
        Ft = (e) => {
          var t = e,
            {
              label: l,
              value: a,
              index: n,
              selectId: o,
              shouldHighlight: i,
              isSelected: s,
            } = t,
            c = Bt(t, [
              "label",
              "value",
              "index",
              "selectId",
              "shouldHighlight",
              "isSelected",
            ]);
          const u = (0, $.y)();
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
              ((d = Gt(
                {
                  "data-testid": "menu-item",
                  tabIndex: -1,
                  type: "button",
                  className: jt.list(u, i, s),
                },
                c,
              )),
              Dt(d, Lt({ value: a }))),
              l,
            ),
          );
          var d;
        },
        _t = (e) => {
          var t = e,
            {
              filterOptions: l,
              listClass: n,
              highlighted: o,
              selectedValue: i,
              selectId: s,
            } = t,
            c = Bt(t, [
              "filterOptions",
              "listClass",
              "highlighted",
              "selectedValue",
              "selectId",
            ]);
          const u = (0, a.useRef)(null),
            b = (0, $.y)();
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
              { className: jt.select(b), ref: u, "data-testid": "menu-list" },
              r().createElement(
                "div",
                {
                  className: (0, d.cx)(jt.options, n),
                  role: "listbox",
                  id: `${s}-listbox`,
                  tabIndex: -1,
                  "aria-labelledby": `${s}-droplist-input`,
                },
                l.length > 0 &&
                  l.map((e, t) =>
                    r().createElement(
                      Ft,
                      Gt(
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
      var Zt = l(98633),
        Vt = l.n(Zt),
        Ht = Object.defineProperty,
        Wt = Object.defineProperties,
        $t = Object.getOwnPropertyDescriptors,
        Kt = Object.getOwnPropertySymbols,
        Yt = Object.prototype.hasOwnProperty,
        qt = Object.prototype.propertyIsEnumerable,
        zt = (e, t, l) =>
          t in e
            ? Ht(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Xt = (e, t) => {
          for (var l in t || (t = {})) Yt.call(t, l) && zt(e, l, t[l]);
          if (Kt) for (var l of Kt(t)) qt.call(t, l) && zt(e, l, t[l]);
          return e;
        };
      const Qt = ({
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
        const v = (0, $.y)(),
          [p] = (0, a.useState)(Vt()()),
          E = (0, a.useMemo)(
            () =>
              ((e) => ({
                wrapper: (0, d.iv)({
                  position: "relative",
                  outline: "none",
                  cursor: "pointer",
                  border: `1px solid ${e.textPrimary}`,
                  borderColor: `${e.textPrimary} !important`,
                  borderRadius: B.E0,
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
              }))(v),
            [v],
          ),
          g = (0, a.useMemo)(
            () =>
              t.map((e, t) => {
                return (
                  (l = Xt({}, e)),
                  (a = { _id: `${e.value}`, index: t }),
                  Wt(l, $t(a))
                );
                var l, a;
              }),
            [t],
          ),
          [A, I] = (0, a.useState)(!1),
          [N, O] = (0, a.useState)(""),
          [f, y] = (0, a.useState)(-1),
          [S, R] = (0, a.useState)(""),
          [C, x] = (0, a.useState)(g),
          T = (0, a.useRef)(null),
          M = (0, a.useMemo)(
            () => g.find((e) => e.value === N) || null,
            [g, N],
          ),
          D = A ? S : M ? M.label : "",
          L = (0, a.useCallback)(() => {
            I(!1), y(-1), R(""), x(g), T && T.current && T.current.blur();
          }, [I, y, R, T]),
          w = (0, a.useCallback)(
            (t) => {
              const l = t ? C.find((e) => e.value === t) : C[f];
              O(l.value), s(e, l.value);
            },
            [s, C, f],
          ),
          P = (0, a.useCallback)(
            (e) => {
              e.preventDefault(),
                T && T.current && T.current.blur(),
                I(!1),
                w(e.currentTarget.value);
            },
            [w, I, T],
          ),
          U = (0, a.useCallback)(
            (e) => {
              const { keyCode: t } = e,
                l = e.target;
              if (t === h.Do.UP || t === h.Do.DOWN) {
                e.preventDefault(), e.stopPropagation();
                const a = ((e, t) => {
                  const { keyCode: l, options: a } = t,
                    r = a.length - 1;
                  let n = e;
                  switch (l) {
                    case h.Do.DOWN:
                      n = e + 1;
                      break;
                    case h.Do.UP:
                      n = e - 1;
                  }
                  return n < 0 ? (n = r) : n > r && (n = 0), n;
                })(f, { keyCode: t, options: C });
                l.setAttribute("aria-activedescendant", `${p}-option-${a}`),
                  y(a);
              } else l.removeAttribute("aria-activedescendant");
            },
            [f, C],
          ),
          k = (0, a.useCallback)(
            (e) => {
              const { keyCode: t } = e.nativeEvent;
              t === h.Do.RETURN &&
                (e.preventDefault(), e.stopPropagation(), w(), L());
            },
            [w, L],
          ),
          G = (0, a.useCallback)(
            (e) => {
              const { keyCode: t } = e;
              t === h.Do.ESCAPE &&
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
              x(l), R(t);
            },
            onMouseDown: () => {
              I((e) => !e);
            },
            onBlur: L,
            onFocus: () => {
              I(!0);
            },
            onKeyPress: k,
            onKeyDown: U,
            onKeyUp: G,
          },
          F = { onMouseDown: P, onKeyDown: U, onKeyPress: k, onBlur: L };
        return r().createElement(
          "div",
          {
            className: (0, d.cx)(E.wrapper, l, { [E.active]: A, [i]: A }),
            "aria-label": m || n,
          },
          r().createElement(
            Tt,
            Xt(
              {
                ref: T,
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
                _t,
                Xt(
                  {
                    listClass: o,
                    filterOptions: C,
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
      var Jt = Object.defineProperty,
        el = Object.getOwnPropertySymbols,
        tl = Object.prototype.hasOwnProperty,
        ll = Object.prototype.propertyIsEnumerable,
        al = (e, t, l) =>
          t in e
            ? Jt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const rl = (0, $e.pd)((e) => {
        const t = (0, $.y)(),
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
                icon: (0, d.iv)((0, L.wz)(10), (0, L.F2)("0%"), {
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
            for (var a in e) tl.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
            if (null != e && el)
              for (var a of el(e))
                t.indexOf(a) < 0 && ll.call(e, a) && (l[a] = e[a]);
            return l;
          })(r, [
            "className",
            "isPristine",
            "showRequired",
            "disabled",
            "label",
          ]),
          b = a.createElement(M.Z, {
            className: l.icon,
            icon: h.kf.CARET_DOWN,
            size: h.J7.XSMALL,
          });
        return a.createElement(
          Qt,
          ((e, t) => {
            for (var l in t || (t = {})) tl.call(t, l) && al(e, l, t[l]);
            if (el) for (var l of el(t)) ll.call(t, l) && al(e, l, t[l]);
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
      var nl = Object.defineProperty,
        ol = Object.defineProperties,
        il = Object.getOwnPropertyDescriptors,
        sl = Object.getOwnPropertySymbols,
        cl = Object.prototype.hasOwnProperty,
        ul = Object.prototype.propertyIsEnumerable,
        dl = (e, t, l) =>
          t in e
            ? nl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        bl = (e, t) => {
          for (var l in t || (t = {})) cl.call(t, l) && dl(e, l, t[l]);
          if (sl) for (var l of sl(t)) ul.call(t, l) && dl(e, l, t[l]);
          return e;
        },
        ml = (e, t) => ol(e, il(t));
      const vl = (0, $e.pd)(
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
            const O = (0, $.y)(),
              f = (0, a.useMemo)(
                () =>
                  ((e) => ({
                    textarea: (0, d.iv)({
                      position: "relative",
                      "& textarea": {
                        width: "100%",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: 50,
                        maxHeight: 250,
                        padding: 20,
                        borderRadius: B.E0,
                        backgroundColor: "transparent",
                        color: e.textPrimary,
                        boxSizing: "border-box",
                        "& ~ label": ml(bl({}, (0, L.t$)(20)), {
                          top: 21,
                          fontWeight: B.Ue.reg,
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
                          "& ~ label": ml(bl({}, (0, L.t$)(20)), {
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
                        borderRadius: B.E0,
                        fontSize: "0.9em",
                        margin: "1em 0 0.5em",
                        display: "inline-block",
                        position: "relative",
                        color: e.textPrimary,
                      },
                      "& span::after": ml(
                        bl(
                          bl({}, (0, z.B)(" ")),
                          (0, L.NS)((0, L.t$)(40), (0, L.oI)(-10)),
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
                    active: (0, d.iv)({
                      border: `1px solid ${st.Q6} !important`,
                    }),
                    outlined: (0, d.iv)({
                      border: `1px solid ${e.textPrimary} !important`,
                    }),
                    filled: (0, d.iv)({
                      "& label": ml(bl({}, (0, L.t$)(20)), {
                        top: "3px !important",
                        fontSize: 12,
                        color: e.textSecondary,
                      }),
                    }),
                    error: (0, d.iv)({
                      margin: "0 20px 20px 0",
                      "& input": { borderColor: st.Q6 },
                    }),
                    asterisk: (0, d.iv)({
                      color: "#FFA640",
                      display: "inline",
                    }),
                  }))(O),
                [O],
              ),
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
                  v && " " === t && (t = ""),
                    g && (t = g(t)),
                    A && ((e.currentTarget.value = t), A(e));
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
        pl = [
          { value: "UE4", label: "UE4" },
          { value: "UNITY", label: "Unity" },
          { value: "INTERNAL", label: "Internal" },
          { value: "OTHER", label: "Other" },
        ];
      var El = Object.defineProperty,
        gl = Object.getOwnPropertySymbols,
        Al = Object.prototype.hasOwnProperty,
        Il = Object.prototype.propertyIsEnumerable,
        Nl = (e, t, l) =>
          t in e
            ? El(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Ol = (e, t) => {
          for (var l in t || (t = {})) Al.call(t, l) && Nl(e, l, t[l]);
          if (gl) for (var l of gl(t)) Il.call(t, l) && Nl(e, l, t[l]);
          return e;
        };
      const fl = ({
        validation: e,
        getMessage: t,
        required: l,
        maxLength: a,
      }) => {
        const r = Ol(Ol({}, a ? { maxLength: a } : {}), e && { [e]: !0 });
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
      var hl = Object.defineProperty,
        yl = Object.defineProperties,
        Sl = Object.getOwnPropertyDescriptors,
        Rl = Object.getOwnPropertySymbols,
        Cl = Object.prototype.hasOwnProperty,
        xl = Object.prototype.propertyIsEnumerable,
        Tl = (e, t, l) =>
          t in e
            ? hl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Ml = (e, t) => {
          for (var l in t || (t = {})) Cl.call(t, l) && Tl(e, l, t[l]);
          if (Rl) for (var l of Rl(t)) xl.call(t, l) && Tl(e, l, t[l]);
          return e;
        },
        Dl = (e, t) => yl(e, Sl(t));
      const Ll = ({
        component: e,
        label: t,
        id: l,
        required: n,
        validation: o,
        maxLength: s,
        onChange: c,
        value: u,
      }) => {
        const b = (0, $.y)(),
          m = (0, a.useMemo)(
            () =>
              ((e) => ({
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
                    borderRadius: B.E0,
                    backgroundColor: "transparent",
                    color: e.textPrimary,
                    boxSizing: "border-box",
                  },
                  "& label": Dl(Ml({ top: 21 }, (0, L.t$)(20)), {
                    fontWeight: B.Ue.reg,
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
                    "& label": Dl(Ml({ top: 3 }, (0, L.t$)(20)), {
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
              }))(b),
            [b],
          ),
          v = (0, i.ql)(),
          {
            validations: p,
            validationMessages: E,
            type: g,
          } = (0, a.useMemo)(
            () =>
              fl({ validation: o, getMessage: v, required: n, maxLength: s }),
            [o, v, n, s],
          );
        return r().createElement(
          "div",
          { className: m.wrapper },
          (() => {
            switch (e) {
              case Ve.input:
                return r().createElement(Nt, {
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
                  r().createElement(rl, {
                    required: n,
                    name: l,
                    value: u || "",
                    validationErrors: E,
                    disabled: !1,
                    onChange: c,
                    options: "Current_Engine__c" === l ? pl : [],
                    className: (0, d.cx)(m.select, { [m.filled]: !!u }),
                    placeholder: "",
                    label: t,
                  }),
                );
              case Ve.textArea:
                return r().createElement(vl, {
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
      var wl = l(75420),
        Pl = l(74898),
        Ul = l(32396),
        kl = l(67764),
        Gl = l(22538);
      const Bl = {
          wrapper: (0, d.iv)({
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }),
          title: (0, d.iv)({ marginBottom: 20 }),
          cta: (0, d.iv)({ marginTop: 60, marginBottom: 20 }),
        },
        jl = () => {
          const e = (0, Gl.useHistory)(),
            t = (0, C.useDispatch)();
          return r().createElement(
            "div",
            { className: Bl.wrapper },
            r().createElement(
              "div",
              { className: Bl.title },
              r().createElement(
                Re.Z.Text,
                null,
                r().createElement(i.v0, {
                  code: "epic.diesel.publishform.title",
                }),
              ),
            ),
            r().createElement(
              Z.ZP,
              null,
              r().createElement(i.v0, {
                code: "epic.diesel.publishform.success",
              }),
            ),
            r().createElement(
              "div",
              { className: Bl.cta },
              r().createElement(
                kl.f5,
                {
                  onClick: () => {
                    t(Pl.ZP.fetchAboutPageReset()),
                      e && e.push((0, Ul.generateRoutePath)("/publish"));
                  },
                },
                r().createElement(i.v0, {
                  code: "epic.diesel.publishform.cta",
                }),
              ),
            ),
          );
        };
      var Fl = l(43442),
        _l = l(78317),
        Zl = l(8696),
        Vl = l(63236);
      const Hl = (e) => e.get("about"),
        Wl = (e) => Hl(e).devFormSubmitted,
        $l = [
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
      var Kl = l(87690),
        Yl = l(85569);
      const ql = {
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
        zl = () =>
          r().createElement(
            "div",
            { className: ql.wrapper },
            r().createElement(Yl.Z, { className: ql.title }),
            r().createElement(Yl.Z, { className: ql.subtitle }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.input }),
            r().createElement(Yl.Z, { className: ql.cta }),
            r().createElement(Yl.Z, { className: ql.link }),
          );
      var Xl = l(4329);
      const Ql = {
          checkboxGroup: (0, d.iv)({
            margin: "1em",
            display: "flex",
            alignItems: "flex-start",
          }),
        },
        Jl = (0, $e.pd)(
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
              { className: Ql.checkboxGroup, "data-testid": "formsy-checkbox" },
              r().createElement(Xl.X, {
                checked: t,
                id: e,
                onClick: (e) => {
                  const { value: t } = e.currentTarget;
                  o && o(t), l && l(e);
                },
                required: n,
                ariaLabel: i,
              }),
              a && a(),
            ),
        );
      var ea = Object.defineProperty,
        ta = Object.defineProperties,
        la = Object.getOwnPropertyDescriptors,
        aa = Object.getOwnPropertySymbols,
        ra = Object.prototype.hasOwnProperty,
        na = Object.prototype.propertyIsEnumerable,
        oa = (e, t, l) =>
          t in e
            ? ea(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        ia = (e, t) => {
          for (var l in t || (t = {})) ra.call(t, l) && oa(e, l, t[l]);
          if (aa) for (var l of aa(t)) na.call(t, l) && oa(e, l, t[l]);
          return e;
        },
        sa = (e, t) => ta(e, la(t));
      const ca = ({
        submitText: e,
        subTitle: t,
        link: l,
        title: n,
        formField: o,
      }) => {
        const [s, c] = (0, a.useState)(!1),
          [u, b] = (0, a.useState)({}),
          m = (0, C.useSelector)(Wl),
          v = m.latestValue || s,
          p = (0, i.bu)(),
          [E, g] = (0, a.useState)(m.state),
          A = (0, C.useSelector)(_l.dG),
          I = (0, C.useSelector)(Zl.Kt),
          N = (0, C.useDispatch)(),
          [O, f] = r().useState(!1);
        (0, a.useEffect)(() => {
          g(m.state);
        }, [m]),
          (0, a.useEffect)(() => {
            A || N(Fl.ZP.requestSignIn(I));
          }, [A, I]);
        const y = {
            eventAction: Pl.mw.SUBMIT_DEV_FORM,
            eventCategory: Pl.Oz,
            eventLabel: Pl._5,
            eventValue: (0, Kl.Z)({ formData: u }),
            interactionType: w.md.Interaction,
          },
          S = (e) => {
            const { name: t, value: l } = e.target;
            b(sa(ia({}, u), { [t]: l }));
          },
          R = (e, t) => {
            b(sa(ia({}, u), { [e]: t }));
          },
          x = (0, $.y)(),
          P = (0, a.useMemo)(
            () =>
              ((e) => ({
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
                  [B.Uc.underMd]: { width: "100%" },
                }),
                ctaWrapper: (0, d.iv)({
                  display: "flex",
                  justifyContent: "center",
                  margin: "1em",
                  marginTop: 50,
                  [B.Uc.mdOnly]: { marginTop: 30 },
                  [B.Uc.underMd]: { marginTop: 20 },
                }),
                form: (0, d.iv)({
                  padding: "0 1em",
                  width: "100%",
                  "& form": { margin: "0 auto" },
                }),
                link: (0, d.iv)({
                  borderBottom: `1px solid ${e.textSecondary}`,
                }),
                header: (0, d.iv)({
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }),
                label: (0, d.iv)(
                  sa(ia({}, (0, L.oI)(18)), { lineHeight: "unset" }),
                ),
              }))(x),
            [x],
          ),
          U = (0, i.ql)(),
          k = fl({ getMessage: U, required: !0, validation: void 0 }),
          G = `[${U("diesel.products.privacy_link")}](https://www.epicgames.com/site/${p}/privacypolicy)`,
          j = U("egstore.publish.form.privacy_checkbox", [G]);
        return A
          ? r().createElement(
              "div",
              { className: P.wrapper },
              r().createElement(
                "div",
                { className: P.content },
                E !== Vl.s.success &&
                  r().createElement(
                    r().Fragment,
                    null,
                    r().createElement(
                      "div",
                      { className: P.header },
                      r().createElement(Re.Z.Text, null, n),
                      r().createElement(Z.ZP, null, t),
                    ),
                    r().createElement(
                      "div",
                      { className: P.form },
                      r().createElement(
                        it,
                        {
                          submitForm: () => {
                            if (!s) {
                              c(!0);
                              const { label: e = "" } =
                                  $l.find(
                                    ({ value: e, label: t }) =>
                                      e ===
                                        (null == u ? void 0 : u.CountryCode) &&
                                      t,
                                  ) || {},
                                t = sa(ia({}, u), {
                                  country: e,
                                  privacyCheckbox: void 0,
                                });
                              N(Pl.ZP.submitDevForm(t));
                            }
                          },
                          callbackDelay: 1e3,
                        },
                        o.map((e) => {
                          const t =
                            (null == e ? void 0 : e.component) === Ve.select;
                          return r().createElement(
                            Ll,
                            sa(
                              ia(
                                {
                                  key: `form-field-${null == e ? void 0 : e.id}`,
                                },
                                e,
                              ),
                              { onChange: t ? R : S, value: u[e.id] },
                            ),
                          );
                        }),
                        r().createElement(Jl, {
                          id: "publish-form-privacy-checkbox",
                          name: "publish-form-privacy-checkbox",
                          checked: O,
                          onClick: () => {
                            b(sa(ia({}, u), { privacyCheckbox: !O })), f(!O);
                          },
                          validations: k.validations,
                          required: !0,
                          ariaLabel: j,
                          renderLabel: () =>
                            r().createElement(
                              "label",
                              {
                                "aria-label": j,
                                className: P.label,
                                htmlFor: "publish-form-privacy-checkbox",
                              },
                              r().createElement(Te.Z, { source: j }),
                            ),
                        }),
                        r().createElement(
                          "div",
                          {
                            className: P.ctaWrapper,
                            "data-testid": "submit-form",
                          },
                          r().createElement(
                            w.mJ,
                            { event: y },
                            r().createElement(
                              T.gg,
                              {
                                disabled: v && E !== Vl.s.error,
                                type: h.UH.SUBMIT,
                                "data-testid": "submit-button",
                              },
                              e,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                E === Vl.s.error &&
                  r().createElement(i.v0, {
                    code: "egstore.publish.form.error",
                  }),
                E === Vl.s.fetching &&
                  r().createElement(M.Z, {
                    icon: h.kf.CIRCLE_LOADING,
                    size: D.Z.XLARGE,
                  }),
                E === Vl.s.success && r().createElement(jl, null),
                (null == l ? void 0 : l.src) &&
                  r().createElement(
                    wl.Z,
                    { to: null == l ? void 0 : l.src, className: P.link },
                    r().createElement(
                      Z.ZP,
                      null,
                      null == l ? void 0 : l.linkText,
                    ),
                  ),
              ),
            )
          : r().createElement(zl, null);
      };
      var ua = ((e) => (
        (e.TOP_BANNER = "topBanner"),
        (e.INFO_CARDS = "infoCards"),
        (e.INTERACTIVE_CARDS = "interactiveCards"),
        (e.MARKDOWN_CARDS = "markdownCards"),
        (e.FAQ = "faq"),
        (e.STORE_FORM = "storeForm"),
        e
      ))(ua || {});
      const da = () => ({
        TopBanner: ye,
        MarketingCards: I,
        FAQ: Ze,
        StoreForm: ca,
      });
      var ba = l(90783),
        ma = l(82059),
        va = l(67873);
      const pa = { wrapper: (0, d.iv)({ marginBottom: 20 }) },
        Ea = ({ children: e }) =>
          r().createElement("div", { className: pa.wrapper }, e);
      var ga = l(80898);
      const Aa = ({ children: e }) => {
          const t = (0, $.y)(),
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
        Ia = {
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
        Na = ({ image: e, title: t, subTitle: l }) =>
          r().createElement(
            Aa,
            null,
            r().createElement(
              "div",
              { className: Ia.content },
              (null == e ? void 0 : e.src)
                ? r().createElement(
                    "div",
                    {
                      className: Ia.imageWrapper,
                      "data-testid": "marketing-card-image",
                    },
                    r().createElement("img", {
                      src: e.src,
                      alt: e.altText,
                      className: Ia.image,
                    }),
                  )
                : null,
              r().createElement(
                "div",
                { className: Ia.textWrapper },
                r().createElement(
                  Re.Z.Heading,
                  { textLevel: H.N.PRIMARY, headingLevel: 2 },
                  t,
                ),
                l &&
                  r().createElement(
                    "div",
                    { "data-testid": "marketing-card-subtitle" },
                    r().createElement(
                      ga.Z.Heading,
                      { textLevel: H.N.SECONDARY, headingLevel: 3 },
                      l,
                    ),
                  ),
              ),
            ),
          );
      var Oa = l(43146),
        fa = l(99875),
        ha = l(51001),
        ya = l(43651),
        Sa = Object.defineProperty,
        Ra = Object.defineProperties,
        Ca = Object.getOwnPropertyDescriptors,
        xa = Object.getOwnPropertySymbols,
        Ta = Object.prototype.hasOwnProperty,
        Ma = Object.prototype.propertyIsEnumerable,
        Da = (e, t, l) =>
          t in e
            ? Sa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        La = (e, t) => {
          for (var l in t || (t = {})) Ta.call(t, l) && Da(e, l, t[l]);
          if (xa) for (var l of xa(t)) Ma.call(t, l) && Da(e, l, t[l]);
          return e;
        },
        wa = (e, t) => Ra(e, Ca(t));
      const Pa = ({ isMobile: e, isImageTheme: t, isRTL: l }) => {
          let a = "right";
          return (
            t ? l || (a = "left") : l && (a = "left"),
            { vertical: e ? "bottom" : void 0, horizontal: a }
          );
        },
        Ua = ({ backgroundColors: e, isImageTheme: t }) => {
          const l = (0, ya.Su)(),
            r = (0, ha.Z)(),
            n = (0, y.wS)(r);
          return (0, a.useMemo)(
            () =>
              (({
                backgroundColors: e,
                isMobile: t,
                isImageTheme: l,
                isRTL: a = !1,
              }) => {
                const r = (0, ue.vC)(e),
                  n = (0, de.Sl)(r[0]),
                  o = (0, k.re)(r[0]),
                  i =
                    r.length > 0
                      ? {
                          direction:
                            t && l
                              ? 180
                              : La(
                                  {},
                                  Pa({
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
                              color: wa(La({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.8,
                              }),
                              stopPoint: 46,
                            },
                            {
                              color: wa(La({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.1,
                              }),
                              stopPoint: 63,
                            },
                            {
                              color: wa(La({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.1,
                              }),
                              stopPoint: 82,
                            },
                          ],
                        }
                      : void 0,
                  s = i
                    ? {
                        type: K.Eo.LINEAR_GRADIENT,
                        color: wa(La({}, null == o ? void 0 : o.rgb()), {
                          alpha: 0,
                        }),
                        properties: { image: i },
                      }
                    : { type: K.Eo.COLOR, color: null == o ? void 0 : o.rgb() };
                return wa(La({}, n), { background: s });
              })({
                backgroundColors: e,
                isMobile: n,
                isImageTheme: t,
                isRTL: l,
              }),
            [e, n, t, l],
          );
        };
      var ka = Object.defineProperty,
        Ga = Object.defineProperties,
        Ba = Object.getOwnPropertyDescriptors,
        ja = Object.getOwnPropertySymbols,
        Fa = Object.prototype.hasOwnProperty,
        _a = Object.prototype.propertyIsEnumerable,
        Za = (e, t, l) =>
          t in e
            ? ka(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Va = (e, t) => {
          for (var l in t || (t = {})) Fa.call(t, l) && Za(e, l, t[l]);
          if (ja) for (var l of ja(t)) _a.call(t, l) && Za(e, l, t[l]);
          return e;
        };
      const Ha = ({
          title: e,
          ctaLink: t,
          backgroundImage: l,
          backgroundColors: n,
          isInset: o = !1,
        }) => {
          const i = (0, $.y)(),
            s = (0, a.useMemo)(
              () =>
                (({ cssTheme: e, isInset: t }) => {
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
                      [u.Uc.underSm]: {
                        order: 1,
                        paddingBottom: 0,
                        width: "100%",
                      },
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
                        ((l = Va(
                          {
                            borderBottom: `1px solid ${e.backgroundOverlay}`,
                            color: e.textSecondary,
                          },
                          B.pB.smooth("all"),
                        )),
                        (a = {
                          "&:hover": {
                            color: e.textPrimary,
                            borderColor: e.textPrimary,
                          },
                        }),
                        Ga(l, Ba(a))),
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
                })({ cssTheme: i, isInset: o }),
              [i, o],
            ),
            c = {
              eventAction: "interactiveCardLink",
              eventLabel: "interactiveCardLink",
              eventValue: null == t ? void 0 : t.src,
            },
            b = Ua({ backgroundColors: n || [i.background] });
          return r().createElement(
            W.f6,
            { themeOverrides: b },
            r().createElement(
              Aa,
              null,
              r().createElement(
                "div",
                { className: s.wrapper },
                r().createElement(
                  "div",
                  { className: s.imageWrapper },
                  l &&
                    r().createElement(Oa.w, {
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
                      fa.Z.Text,
                      { textLevel: H.N.SECONDARY },
                      e,
                    ),
                    r().createElement(
                      w.mJ,
                      { event: c },
                      r().createElement(
                        wl.Z,
                        { to: null == t ? void 0 : t.src, className: s.link },
                        r().createElement(
                          Z.ZP,
                          { textLevel: H.N.PRIMARY },
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
        Wa = {
          content: (0, d.iv)({ padding: 40 }),
          title: (0, d.iv)({ marginBottom: 20 }),
        },
        $a = ({ title: e, content: t }) =>
          r().createElement(
            Aa,
            null,
            r().createElement(
              "div",
              { className: Wa.content },
              e &&
                r().createElement(
                  "div",
                  { className: Wa.title },
                  r().createElement(
                    fa.Z.Heading,
                    { textLevel: H.N.PRIMARY, headingLevel: 2 },
                    e,
                  ),
                ),
              t &&
                r().createElement(
                  Z.ZP,
                  { textLevel: H.N.SECONDARY },
                  r().createElement(Te.Z, { source: t }),
                ),
            ),
          );
      var Ka = Object.defineProperty,
        Ya = Object.defineProperties,
        qa = Object.getOwnPropertyDescriptors,
        za = Object.getOwnPropertySymbols,
        Xa = Object.prototype.hasOwnProperty,
        Qa = Object.prototype.propertyIsEnumerable,
        Ja = (e, t, l) =>
          t in e
            ? Ka(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        er = (e, t) => {
          for (var l in t || (t = {})) Xa.call(t, l) && Ja(e, l, t[l]);
          if (za) for (var l of za(t)) Qa.call(t, l) && Ja(e, l, t[l]);
          return e;
        },
        tr = (e, t) => Ya(e, qa(t));
      const lr = (function (e) {
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
                                      moduleId: `${t}-${null == e ? void 0 : e.__typename}`,
                                      position: l,
                                      type: n,
                                    },
                                    b = {
                                      eventAction:
                                        va.DI.MARKETING_SECTION_IN_VIEW,
                                      eventLabel: `${n}: ${null == e ? void 0 : e.__typename}`,
                                      eventValue: JSON.stringify(d),
                                    };
                                  switch (n) {
                                    case ua.TOP_BANNER:
                                      return a.createElement(
                                        ma.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          Ea,
                                          null,
                                          a.createElement(
                                            o,
                                            tr(er({}, e), { slug: t }),
                                          ),
                                        ),
                                      );
                                    case ua.INFO_CARDS:
                                      return a.createElement(
                                        ma.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          Ea,
                                          null,
                                          a.createElement(
                                            i,
                                            tr(er({}, e), { Card: Na }),
                                          ),
                                        ),
                                      );
                                    case ua.INTERACTIVE_CARDS:
                                      return a.createElement(
                                        ma.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          Ea,
                                          null,
                                          a.createElement(
                                            i,
                                            tr(er({}, e), { Card: Ha }),
                                          ),
                                        ),
                                      );
                                    case ua.MARKDOWN_CARDS:
                                      return a.createElement(
                                        ma.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          Ea,
                                          null,
                                          a.createElement(
                                            i,
                                            tr(er({}, e), {
                                              Card: $a,
                                              multipleCols: !0,
                                            }),
                                          ),
                                        ),
                                      );
                                    case ua.FAQ:
                                      return a.createElement(
                                        ma.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          Ea,
                                          null,
                                          a.createElement(s, er({}, e)),
                                        ),
                                      );
                                    case ua.STORE_FORM:
                                      return a.createElement(
                                        ma.Z,
                                        { event: b, key: u },
                                        a.createElement(
                                          Ea,
                                          null,
                                          a.createElement(c, er({}, e)),
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
            ba.Z,
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
      })({ useMarketingLayout: da });
      var ar = l(16618),
        rr = l(47867),
        nr = l(24438),
        or = l.n(nr);
      const ir = or()`
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
      var sr = Object.defineProperty,
        cr = Object.defineProperties,
        ur = Object.getOwnPropertyDescriptors,
        dr = Object.getOwnPropertySymbols,
        br = Object.prototype.hasOwnProperty,
        mr = Object.prototype.propertyIsEnumerable,
        vr = (e, t, l) =>
          t in e
            ? sr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        pr = (e, t) => {
          for (var l in t || (t = {})) br.call(t, l) && vr(e, l, t[l]);
          if (dr) for (var l of dr(t)) mr.call(t, l) && vr(e, l, t[l]);
          return e;
        };
      const Er = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.StoreCMSPage)
            ? void 0
            : t.modules;
        },
        gr = ({ slug: e }, t) => {
          var l;
          const a = (0, i.bu)();
          var r, n;
          return (0, rr.qM)({
            query: ir,
            variables: { locale: a, slug: e },
            config:
              ((r = pr({}, t)),
              (n = {
                enabled:
                  Boolean(a) &&
                  Boolean(e) &&
                  (null == (l = null == t ? void 0 : t.enabled) || l),
              }),
              cr(r, ur(n))),
            reducer: Er,
          });
        },
        Ar = ({ slug: e }) => {
          const t = gr({ slug: e }),
            l = (0, i.ql)()("epic.store.discover.navtitle");
          return (null == t ? void 0 : t.data)
            ? a.createElement(
                c.Z,
                null,
                a.createElement("h1", { className: s.jy }, l),
                a.createElement(lr, {
                  slug: e,
                  data: null == t ? void 0 : t.data,
                }),
              )
            : a.createElement(ar.Z, {
                to: (0, Ul.generateRoutePath)("/not-found"),
                "data-testid": "redirect-to-not-found",
              });
        },
        Ir = or()`
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
      var Nr = Object.defineProperty,
        Or = Object.defineProperties,
        fr = Object.getOwnPropertyDescriptors,
        hr = Object.getOwnPropertySymbols,
        yr = Object.prototype.hasOwnProperty,
        Sr = Object.prototype.propertyIsEnumerable,
        Rr = (e, t, l) =>
          t in e
            ? Nr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Cr = (e, t) => {
          for (var l in t || (t = {})) yr.call(t, l) && Rr(e, l, t[l]);
          if (hr) for (var l of hr(t)) Sr.call(t, l) && Rr(e, l, t[l]);
          return e;
        };
      const xr = (e) => {
          var t, l;
          return null ==
            (l =
              null == (t = null == e ? void 0 : e.StoreCMSPage)
                ? void 0
                : t.modules)
            ? void 0
            : l.seo;
        },
        Tr = ({ slug: e }, t) => {
          var l;
          const a = (0, i.bu)();
          var r, n;
          return (0, rr.qM)({
            query: Ir,
            reducer: xr,
            variables: { slug: e, locale: a },
            config:
              ((r = Cr({}, t)),
              (n = {
                enabled:
                  Boolean(e) &&
                  Boolean(a) &&
                  (null == (l = null == t ? void 0 : t.enabled) || l),
              }),
              Or(r, fr(n))),
          });
        };
      var Mr = l(79394),
        Dr = l(33055),
        Lr = Object.defineProperty,
        wr = Object.getOwnPropertySymbols,
        Pr = Object.prototype.hasOwnProperty,
        Ur = Object.prototype.propertyIsEnumerable,
        kr = (e, t, l) =>
          t in e
            ? Lr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Gr = ({ slug: e }) => {
          const t = Tr({ slug: e }),
            l = (0, O.useLocalization)(),
            r = null == t ? void 0 : t.data;
          return r
            ? a.createElement(
                Mr.Z,
                ((e, t) => {
                  for (var l in t || (t = {})) Pr.call(t, l) && kr(e, l, t[l]);
                  if (wr) for (var l of wr(t)) Ur.call(t, l) && kr(e, l, t[l]);
                  return e;
                })({}, (0, Dr.S)(l, r)),
              )
            : null;
        },
        Br = () => {
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
          }))((0, $.y)());
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(
              "div",
              { className: e.content },
              r().createElement(Yl.Z, { className: e.icon }),
              r().createElement(Yl.Z, { className: e.title }),
              r().createElement(Yl.Z, { className: e.subtitle }),
            ),
          );
        },
        jr = () => {
          const e = ((e) => ({
            wrapper: (0, d.iv)({
              display: "flex",
              borderRadius: 16,
              border: `1px solid ${e.backgroundOverlay}`,
              width: "100%",
              height: 300,
              overflow: "hidden",
              background: e.background,
              [B.Uc.underMd]: { height: 345 },
            }),
            content: (0, d.iv)({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              [B.Uc.underMd]: { flexDirection: "column" },
            }),
            title: (0, d.iv)({ width: "80%", height: "20%" }),
            image: (0, d.iv)({
              width: "30%",
              height: "80%",
              marginLeft: 10,
              [B.Uc.underMd]: { order: 1, marginLeft: 0, marginBottom: 10 },
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
          }))((0, $.y)());
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(
              "div",
              { className: e.content },
              r().createElement(Yl.Z, { className: e.image }),
              r().createElement(
                "div",
                { className: e.rightCol },
                r().createElement(Yl.Z, { className: e.title }),
                r().createElement(Yl.Z, { className: e.cta }),
              ),
            ),
          );
        },
        Fr = {
          wrapper: (0, d.iv)({
            display: "flex",
            gap: 16,
            [B.Uc.underLg]: { flexDirection: "column" },
          }),
        },
        _r = ({ children: e }) =>
          r().createElement("div", { className: Fr.wrapper }, e),
        Zr = {
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
        Vr = () =>
          r().createElement(
            "div",
            { className: Zr.group },
            r().createElement(Yl.Z, { className: Zr.question }),
            r().createElement(Yl.Z, { className: Zr.icon }),
          ),
        Hr = () =>
          r().createElement(
            "div",
            { className: Zr.wrapper },
            r().createElement(Vr, null),
            r().createElement(Vr, null),
            r().createElement(Vr, null),
          ),
        Wr = () => {
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
          }))({ cssTheme: (0, $.y)() });
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(Yl.Z, { className: e.title }),
            r().createElement(Yl.Z, { className: e.cta }),
            r().createElement(Yl.Z, { className: e.subtitle }),
            r().createElement(Yl.Z, { className: e.link }),
          );
        },
        $r = { spacer: (0, d.iv)({ display: "block", height: 20 }) },
        Kr = ({ slug: e }) => {
          const t = "download" === e,
            l = "publish" === e,
            a = "publish-form" === e;
          return r().createElement(
            r().Fragment,
            null,
            !a && r().createElement(Wr, null),
            r().createElement("div", { className: $r.spacer }),
            t &&
              r().createElement(
                _r,
                null,
                r().createElement(jr, null),
                r().createElement(jr, null),
              ),
            l &&
              r().createElement(
                r().Fragment,
                null,
                r().createElement(
                  _r,
                  null,
                  r().createElement(Br, null),
                  r().createElement(Br, null),
                  r().createElement(Br, null),
                ),
                r().createElement("div", { className: $r.spacer }),
                r().createElement(Hr, null),
              ),
            a && r().createElement(zl, null),
          );
        },
        Yr = ({ slug: e }) =>
          a.createElement(
            n.n4,
            {
              fallback: a.createElement(
                o.Yn,
                null,
                a.createElement(Kr, { slug: e }),
              ),
            },
            a.createElement(Gr, { slug: e }),
            a.createElement(Ar, { slug: e }),
          );
    },
    408: (e) => {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDJIOFY0SDE2VjJIMThWNEgxOUMyMC4xMDQ2IDQgMjEgNC44OTU0MyAyMSA2VjE4QzIxIDE5LjEwNDYgMjAuMTA0NiAyMCAxOSAyMEg1QzMuODk1NDMgMjAgMyAxOS4xMDQ2IDMgMThWNkMzIDQuODk1NDMgMy44OTU0MyA0IDUgNEg2VjJaTTUgMTBIMTlWMThINVYxMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
    },
  },
]);
//# sourceMappingURL=CMSMarketingView.egstore-site.1a8c4b9bfb8917521bb3.js.map
