(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [477],
  {
    91029: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => Qr });
      var a = l(8788),
        r = l.n(a),
        n = l(61801),
        o = l(22404),
        i = l(42209),
        s = l(57246),
        c = l(60263),
        u = l(45580),
        d = l(11923),
        b = Object.defineProperty,
        m = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        A = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        g = (e, t, l) =>
          t in e
            ? b(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const N = ({ cards: e, Card: t, multipleCols: l = !1 }) => {
        const a = r().useMemo(
          () =>
            ((e) => ({
              wrapper: (0, d.AH)({
                display: "flex",
                gap: 16,
                [u.aq.underMd]: { flexDirection: e ? "row" : "column" },
                [u.aq.underSm]: { flexDirection: "column" },
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
                for (var l in t || (t = {})) v.call(t, l) && g(e, l, t[l]);
                if (A) for (var l of A(t)) E.call(t, l) && g(e, l, t[l]);
                return e;
              })({}, e)),
              (a = { key: `${e.title}` }),
              m(l, p(a))),
            );
            var l, a;
          }),
        );
      };
      var I = l(30640),
        O = l(96157),
        h = l(91105),
        f = l(76387),
        y = l(85727);
      const S = {
          imageWrapper: (0, d.AH)({ height: "100%" }),
          picture: (0, d.AH)({ width: "100%", height: "100%" }),
        },
        R = ({ image: e }) => {
          const t = (0, O.useLocalization)();
          return r().createElement(
            "div",
            { className: S.imageWrapper },
            r().createElement(h.A, {
              className: S.picture,
              srcSet: e.srcSet,
              showBrokenOnError: !0,
              alt: t("egstore.profile.meta.social.image_alt.profile"),
            }),
          );
        };
      var C = l(3493),
        x = l(82821),
        T = l(41503),
        M = l(54699),
        L = l(98186),
        w = l(40440),
        D = l(22357),
        P = l(49912);
      const H = {
          downloadButton: (0, d.AH)({
            marginTop: 50,
            [u.aq.underMd]: { marginTop: 20 },
          }),
          iconWrapper: (0, d.AH)((0, D.hz)(10)),
        },
        k = () => {
          const e = (0, i.B2)(),
            t = (0, C.useSelector)(x.uG),
            l = (0, C.useSelector)(x.NY),
            a = (0, C.useSelector)(x.Dp),
            n = t ? `?trackingId=${t}` : "",
            o = `${(0, I.cX)() ? l : a}${n}`,
            s = (0, I.cX)() ? w.A.MAC : w.A.WINDOWS,
            c = {
              eventAction: P.yn.EGS_DOWNLOAD_LAUNCHER,
              eventLabel: t,
              eventValue: o,
            };
          return r().createElement(
            "div",
            { className: H.downloadButton, "data-testid": "download-cta" },
            r().createElement(
              P.Iu,
              { event: c },
              r().createElement(
                T.gF,
                { to: o },
                r().createElement(
                  "div",
                  {
                    className: H.iconWrapper,
                    "data-testid":
                      "" + ((0, I.cX)() ? "mac-icon" : "windows-icon"),
                  },
                  r().createElement(M.A, { icon: s, size: L.A.XXSMALL }),
                ),
                e("epic.diesel.download.launcher"),
              ),
            ),
          );
        };
      var U = l(44316),
        G = l(20513),
        j = l(64032),
        B = l(66448);
      const F = ({ cssTheme: e }) =>
          (0, d.AH)({
            background: e.background,
            color: e.textPrimary,
            position: "relative",
            borderRadius: j.Vq,
          }),
        _ = ({ children: e }) => {
          const t = (0, B.A)();
          return a.createElement(
            "section",
            { className: F({ cssTheme: t }) },
            e,
          );
        };
      var V = l(68813),
        q = l(14531),
        W = l(84904),
        $ = l(2989),
        K = l(34475),
        Y = l(98855);
      const z = { text: (0, d.AH)({ fontWeight: "bold" }) },
        Z = ({ linkText: e, src: t }) =>
          e && e.length > 0
            ? r().createElement(
                "div",
                { "data-testid": "banner-cta" },
                r().createElement(
                  T.gF,
                  { to: t },
                  r().createElement("span", { className: z.text }, e),
                ),
              )
            : null;
      var Q = l(76221),
        X = l(67671),
        J = l(85392),
        ee = Object.defineProperty,
        te = Object.defineProperties,
        le = Object.getOwnPropertyDescriptors,
        ae = Object.getOwnPropertySymbols,
        re = Object.prototype.hasOwnProperty,
        ne = Object.prototype.propertyIsEnumerable,
        oe = (e, t, l) =>
          t in e
            ? ee(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        ie = (e, t) => {
          for (var l in t || (t = {})) re.call(t, l) && oe(e, l, t[l]);
          if (ae) for (var l of ae(t)) ne.call(t, l) && oe(e, l, t[l]);
          return e;
        },
        se = (e, t) => te(e, le(t));
      const ce = ({ ribbonColor: e, cssTheme: t }) =>
          (0, d.AH)(
            se(
              ie(
                {
                  position: "absolute",
                  top: 0,
                  zIndex: J.f.foreground,
                  span: { color: e ? t.textPrimary : t.accentText },
                },
                (0, D._z)({
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
                "&::before, &::after": se(ie({}, Q.j), {
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
        ue = ({ ribbonText: e, ribbonColor: t }) => {
          const l = (0, K.E)();
          return r().createElement(
            "div",
            {
              className: ce({ ribbonColor: t, cssTheme: l }),
              "data-testid": "ribbon",
            },
            r().createElement(X.A, null, e),
          );
        };
      var de = l(925),
        be = l(71318),
        me = Object.defineProperty,
        pe = Object.defineProperties,
        Ae = Object.getOwnPropertyDescriptors,
        ve = Object.getOwnPropertySymbols,
        Ee = Object.prototype.hasOwnProperty,
        ge = Object.prototype.propertyIsEnumerable,
        Ne = (e, t, l) =>
          t in e
            ? me(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Ie = (e, t, l = 0) => {
          const a = (0, de.l9)(e),
            r = (0, be.pf)(a[0]),
            n =
              a.length > 1
                ? { direction: t, colors: a.map((e) => (0, U.LV)(e).rgb()) }
                : void 0,
            o = n
              ? {
                  type: Y.hK.LINEAR_GRADIENT,
                  color: (0, U.LV)(a[l]).rgb(),
                  properties: { image: n },
                }
              : { type: Y.hK.COLOR, color: (0, U.LV)(a[0]).rgb() };
          return (
            (i = ((e, t) => {
              for (var l in t || (t = {})) Ee.call(t, l) && Ne(e, l, t[l]);
              if (ve) for (var l of ve(t)) ge.call(t, l) && Ne(e, l, t[l]);
              return e;
            })({}, r)),
            pe(i, Ae({ background: o }))
          );
          var i;
        },
        Oe = ({ backgroundColors: e, gradientDirection: t, colorIndex: l }) =>
          (0, a.useMemo)(() => Ie(e, t, l), [e]),
        he = ["#420A9F", "#524AFA"],
        fe = ["#200e43", "#030556", "#040418"],
        ye = ({
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
          var p, A, v, E, g, N;
          const I = (0, K.E)(),
            O = (0, a.useMemo)(
              () => ({
                bannerContainer: (0, d.AH)({
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "stretch",
                  borderRadius: 16,
                  border: "1px solid transparent",
                  overflow: "hidden",
                  position: "relative",
                }),
                content: (0, d.AH)({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 40,
                  flex: 1,
                  gap: 40,
                  textAlign: "center",
                  [u.aq.underMd]: { gap: 30 },
                }),
                logo: (0, d.AH)({
                  width: 64,
                  height: 100,
                  [u.aq.underSm]: { width: 45, height: 70 },
                  [u.aq.underMd]: { width: 40, height: 66 },
                }),
                ctaWrapper: (0, d.AH)({
                  "a:focus-visible::before": { outline: `${j.Ql} auto 1px;` },
                }),
                ctaIcon: (0, d.AH)({ width: 18, height: 18 }),
                imageWrapper: (0, d.AH)({
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  [u.aq.underSm]: { display: "none" },
                }),
                image: (0, d.AH)({ width: "100%" }),
                title: (0, d.AH)({ fontWeight: "bold" }),
              }),
              [],
            ),
            h =
              b && b.src
                ? { src: b.src, altText: b.altText || l || void 0 }
                : null,
            f = Oe({
              backgroundColors: m ? he : fe,
              gradientDirection: m ? -45 : 315,
              colorIndex: m ? 0 : 1,
            });
          return r().createElement(
            $.NP,
            { themeOverrides: f },
            r().createElement(
              _,
              null,
              r().createElement(
                "div",
                { className: O.bannerContainer },
                s &&
                  r().createElement(
                    $.NP,
                    {
                      themeOverrides: {
                        accent:
                          null == (p = (0, U.LV)(I.textPrimary))
                            ? void 0
                            : p.rgb(),
                        accentText:
                          null == (A = (0, U.LV)(I.background))
                            ? void 0
                            : A.rgb(),
                      },
                    },
                    r().createElement(ue, { ribbonText: s, ribbonColor: c }),
                  ),
                h &&
                  r().createElement(
                    "div",
                    { className: O.imageWrapper },
                    r().createElement("img", {
                      src: h.src,
                      alt: h.altText,
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
                      q.A.Heading,
                      { headingLevel: 1, textLevel: W.qo.PRIMARY },
                      r().createElement("span", { className: O.title }, l),
                    ),
                  e
                    ? r().createElement(
                        $.NP,
                        {
                          themeOverrides: {
                            accent:
                              null == (v = (0, U.LV)(I.textPrimary))
                                ? void 0
                                : v.rgb(),
                            accentText:
                              null == (E = (0, U.LV)(I.background))
                                ? void 0
                                : E.rgb(),
                            mode: Y.lG.LIGHT,
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
                          $.NP,
                          {
                            themeOverrides: {
                              accent:
                                null == (g = (0, U.LV)(I.textPrimary))
                                  ? void 0
                                  : g.rgb(),
                              accentText:
                                null == (N = (0, U.LV)(I.background))
                                  ? void 0
                                  : N.rgb(),
                              mode: Y.lG.LIGHT,
                            },
                          },
                          r().createElement(
                            "span",
                            { className: O.ctaWrapper },
                            r().createElement(Z, {
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
                      r().createElement(V.Ay, null, n),
                    ),
                  o &&
                    r().createElement(
                      G.ko,
                      { to: (null == o ? void 0 : o.src) || "" },
                      o.linkText,
                    ),
                ),
              ),
            ),
          );
        },
        Se = ({
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
          const m = (0, i.B2)(),
            p = "download" === b,
            A = (0, a.useMemo)(
              () =>
                (({ isDownloadSlug: e, subTitle: t, getMessage: l }) =>
                  e
                    ? (0, I.dG)()
                      ? l("egstore.download.mobile")
                      : (0, I.cX)()
                        ? l("egstore.download.alsoAvailable.windows")
                        : l("egstore.download.alsoAvailable.mac")
                    : t)({ isDownloadSlug: p, subTitle: o, getMessage: m }),
              [p, o, m],
            ),
            v = p && !(0, I.dG)() ? () => r().createElement(k, null) : void 0,
            E = (0, a.useMemo)(() => {
              return (e = l)
                ? {
                    srcSet: {
                      [f.A.name.XSMALL]: (0, y.Vw)(
                        null == e ? void 0 : e.src,
                        y.SB.RATIO_4X3_720,
                      ),
                    },
                  }
                : void 0;
              var e;
            }, [l]);
          return r().createElement(ye, {
            title: e,
            cta: n,
            logoImage: E,
            subTitle: A,
            link: t,
            ribbonText: s,
            renderCTA: v,
            ribbonColor: c,
            video: u,
            backgroundImage: d,
            isDownloadSlug: p,
          });
        };
      var Re = l(92619),
        Ce = l(14160),
        xe = l(34999),
        Te = l(75885),
        Me = l(96556);
      const Le = {
        viewBox: "0 0 20 20",
        data: r().createElement("rect", {
          x: "1.66699",
          y: "9.1665",
          width: "16.6667",
          height: "1.66667",
          fill: "currentColor",
        }),
      };
      var we = l(17673),
        De = l(83700),
        Pe = Object.defineProperty,
        He = Object.getOwnPropertySymbols,
        ke = Object.prototype.hasOwnProperty,
        Ue = Object.prototype.propertyIsEnumerable,
        Ge = (e, t, l) =>
          t in e
            ? Pe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        je = (e, t) => {
          for (var l in t || (t = {})) ke.call(t, l) && Ge(e, l, t[l]);
          if (He) for (var l of He(t)) Ue.call(t, l) && Ge(e, l, t[l]);
          return e;
        };
      const Be = (0, we.W)((e) => ({
          answer: (0, d.AH)({ marginTop: 3 }),
          question: (0, d.AH)((0, D.Jh)("left"), {
            flex: 1,
            [u.aq.underSm]: je({}, (0, D.hz)(10)),
          }),
          questionGroup: (0, d.AH)({
            padding: "1em 0",
            borderBottom: `1px solid ${e.level2}`,
          }),
          header: (0, d.AH)((0, De.HE)(e), {
            position: "relative",
            display: "flex",
            alignItems: "baseline",
            width: "100%",
            "&:hover": { h3: { color: e.accent }, svg: { color: e.accent } },
          }),
          body: (0, d.AH)({ marginTop: 20 }),
        })),
        Fe = ({ id: e, question: t, startsCollapsed: l = !0 }) => {
          const n = null == t ? void 0 : t.question,
            [o, i] = (0, a.useState)(l),
            s = Be();
          return r().createElement(
            "div",
            { className: s.questionGroup, key: n },
            r().createElement(
              xe.A,
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
                  Te.A.Heading,
                  { headingLevel: 3, textLevel: W.qo.PRIMARY },
                  n,
                ),
              ),
              r().createElement(M.A, {
                icon: o ? w.A.PLUS_SIGN : Le,
                size: L.A.XXSMALL,
              }),
            ),
            r().createElement(
              "div",
              je(
                { id: `collapsable-panel-${e}`, className: s.body },
                o ? { hidden: !0 } : {},
              ),
              !o &&
                r().createElement(Me.A, {
                  className: s.answer,
                  source: null == t ? void 0 : t.answer,
                }),
            ),
          );
        },
        _e = {
          wrapper: (0, d.AH)({ display: "flex", flexDirection: "column" }),
          headline: (0, d.AH)({ alignSelf: "center" }),
        },
        Ve = ({ title: e, list: t }) =>
          r().createElement(
            "div",
            { className: _e.wrapper },
            r().createElement(
              "section",
              { className: _e.headline, id: "faq" },
              r().createElement(Ce.A.Heading, { headingLevel: 2 }, e),
            ),
            r().createElement(Re.B, { data: t }, (e, t) =>
              r().createElement(Fe, {
                id: `marketing-question-${t}`,
                key: `marketing-question-${t}`,
                question: e,
                startsCollapsed: 0 !== t,
              }),
            ),
          );
      var qe = l(47041),
        We = l(66168);
      const $e = (e) => e.get("about"),
        Ke = (e) => $e(e).devFormSubmitted;
      var Ye = l(28281),
        ze = l(65784),
        Ze = ((e) => (
          (e.select = "select"),
          (e.input = "input"),
          (e.textArea = "textarea"),
          (e.selectMulti = "select-multi"),
          e
        ))(Ze || {}),
        Qe = l(4010),
        Xe = l(80653),
        Je = l(8430);
      const et = {
          checkboxGroup: (0, d.AH)({
            margin: "1em",
            display: "flex",
            alignItems: "flex-start",
          }),
        },
        tt = (0, Xe.N$)(
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
              { className: et.checkboxGroup, "data-testid": "formsy-checkbox" },
              r().createElement(Je.S, {
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
      var lt = l(97598),
        at = l.n(lt);
      const rt = /^[1234567890\-\(\)\+ ]{7,20}$/,
        nt = /^.{3}-.{2}-.{4}$/,
        ot = /^[a-zA-Z0-9\s]*$/,
        it =
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
        st = /^(20|21)\d{2}$/;
      (0, Xe.NU)("checked", (e, t) => !!t),
        (0, Xe.NU)("isMobileNumber", (e, t) => {
          if (t) {
            const e = t.replace(/-/g, "");
            return rt.test(e);
          }
          return !0;
        }),
        (0, Xe.NU)("isValidSSN", (e, t) => !t || nt.test(t)),
        (0, Xe.NU)("isValidBandAccountNo", (e, t) => !t || ot.test(t)),
        (0, Xe.NU)(
          "RichTextRequired",
          (e, t = "") => !!(t ? t.replace(/<\/?[^>]+(>|$)/g, "") : ""),
        ),
        (0, Xe.NU)("isWebsite", (e, t = "") => !t || it.test(t)),
        (0, Xe.NU)("isDate", (e, t) => {
          const l = new Date(t);
          return !!(
            l instanceof Date &&
            !isNaN(l.getTime()) &&
            st.test(l.getFullYear())
          );
        }),
        (0, Xe.NU)("isArray", (e, t) => Array.isArray(t)),
        (0, Xe.NU)("notEmptyImage", (e, t) => "object" == typeof t || t.length),
        (0, Xe.NU)(
          "validImageDimension",
          (e, t) =>
            Array.isArray(t) &&
            !t.filter((e) => e && "validImageDimension" === e.invalid).length,
        ),
        (0, Xe.NU)(
          "validImageType",
          (e, t) =>
            Array.isArray(t) &&
            !t.filter((e) => e && "imageType" === e.invalid).length,
        ),
        (0, Xe.NU)(
          "pngImage",
          (e, t) =>
            Array.isArray(t) &&
            t.every((e) => e && (e.url || "png" === e.extension)),
        ),
        (0, Xe.NU)(
          "perImageSize",
          (e, t, l) =>
            Array.isArray(t) && t.every((e) => e && (e.url || e.size <= l)),
        ),
        (0, Xe.NU)("totalImageSize", (e, t, l) => {
          if (!Array.isArray(t)) return !1;
          let a = 0;
          return (
            t.forEach((e) => {
              a += e.size;
            }),
            a <= l
          );
        }),
        (0, Xe.NU)(
          "imageName",
          (e, t) =>
            Array.isArray(t) &&
            t.every(
              (e) => e && (e.url || e.name.match(/\w*_screenshot[0-9]*\.png/)),
            ),
        ),
        (0, Xe.NU)("validRoutingNumber", (e, t) => {
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
        (0, Xe.NU)("w9form", (e, t) => !!t);
      const ct = Xe.Ay,
        ut = {
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
      var dt = Object.defineProperty,
        bt = (e, t, l) => (
          ((e, t, l) => {
            t in e
              ? dt(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (e[t] = l);
          })(e, "symbol" != typeof t ? t + "" : t, l),
          l
        );
      const mt = (e, t) => !!(t.indexOf(e) + 1),
        {
          FORM_SAVING_SUCCESS: pt,
          FORM_SAVING_FAILURE: At,
          FORM_PENDING_SAVING_SUCCESS: vt,
          FORM_PENDING_SAVING_FAILURE: Et,
        } = ut;
      class gt extends r().Component {
        constructor() {
          super(...arguments),
            bt(this, "updateInputsWithError", (e) => {
              const { formInstance: t } = this.props,
                l = t.reference;
              l && l.updateInputsWithError(e);
            }),
            bt(this, "setPristine", (e) => {
              const { formInstance: t } = this.props,
                l = t.reference;
              l && l.setFormPristine(e);
            }),
            bt(this, "onKeyPress", (e) => {
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
          if (mt(l, [pt, vt])) {
            const e = this.setPristine.bind(this);
            setTimeout(() => {
              e(!0), r && r();
            }, a);
          }
          mt(l, [At, Et]) && this.setPristine(!1),
            e && (this.updateInputsWithError(t), this.setPristine(!1));
        }
        render() {
          const { submitForm: e, invalidSubmit: t } = this.props;
          return r().createElement(
            ct,
            {
              onKeyPress: this.onKeyPress,
              onValidSubmit: e,
              onInvalidSubmit: t,
            },
            this.props.children,
          );
        }
      }
      bt(gt, "propTypes", {
        children: at().oneOfType([at().object, at().array]),
        formStatus: at().string,
        hasExternalValidationErrors: at().bool,
        submitForm: at().func,
        invalidSubmit: at().func,
        errorMessages: at().object,
        callbackDelay: at().number,
        successCallback: at().func,
        formInstance: at().object,
      }),
        bt(gt, "defaultProps", { errorMessages: {} });
      var Nt = l(705),
        It = l(79163);
      const Ot = [
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
        { label: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS", value: "GS" },
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
      var ht = l(35688),
        ft = l(14226),
        yt = l(59705),
        St = l.n(yt),
        Rt = Object.defineProperty,
        Ct = Object.defineProperties,
        xt = Object.getOwnPropertyDescriptors,
        Tt = Object.getOwnPropertySymbols,
        Mt = Object.prototype.hasOwnProperty,
        Lt = Object.prototype.propertyIsEnumerable,
        wt = (e, t, l) =>
          t in e
            ? Rt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Dt = (e, t) => {
          for (var l in t || (t = {})) Mt.call(t, l) && wt(e, l, t[l]);
          if (Tt) for (var l of Tt(t)) Lt.call(t, l) && wt(e, l, t[l]);
          return e;
        },
        Pt = (e, t) => Ct(e, xt(t));
      const Ht = (0, Xe.N$)(
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
          mask: p,
          onMouseEnter: A,
          onMouseLeave: v,
          autoComplete: E,
          pattern: g,
          showError: N,
          errorMessage: O,
          formatValue: h,
          setValue: f,
          onChange: y,
        }) => {
          const S = (0, K.E)(),
            R = (0, a.useMemo)(
              () =>
                (({ cssTheme: e, type: t }) => ({
                  input: (0, d.AH)({
                    position: "relative",
                    "& input": {
                      width: "100%",
                      padding: 20,
                      borderRadius: j.Vq,
                      backgroundColor: "transparent",
                      color: e.textPrimary,
                      boxSizing: "border-box",
                      "::-webkit-calendar-picker-indicator": {
                        filter: e.mode === Y.lG.DARK ? "invert(1)" : void 0,
                      },
                      "& ~ label": Dt(
                        Pt(Dt({ top: 21 }, (0, D.kb)(20)), {
                          fontWeight: j.Wy.reg,
                          fontSize: 12,
                          position: "absolute",
                          transition: "0.2s ease all",
                          color: e.textSecondary,
                          pointerEvents: "none",
                        }),
                        "date" === t &&
                          Pt(Dt({ top: 3 }, (0, D.kb)(20)), {
                            fontSize: 12,
                            color: e.textSecondary,
                          }),
                      ),
                      "&:focus": {
                        borderColor: e.textPrimary,
                        boxShadow: e.backgroundOverlay,
                        outline: "none",
                        "& ~ label": Pt(Dt({ top: 3 }, (0, D.kb)(20)), {
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
                      background: ft.wv,
                      padding: "1rem",
                      width: "100%",
                      borderRadius: j.Vq,
                      fontSize: "0.9em",
                      margin: "1em 0 0.5em",
                      display: "inline-block",
                      position: "relative",
                      color: e.textPrimary,
                    },
                    "span::after": Pt(
                      Dt(
                        Dt({}, (0, Q.l)(" ")),
                        (0, D.P8)((0, D.kb)(40), (0, D.S$)(-10)),
                      ),
                      {
                        bottom: "100%",
                        border: "solid transparent",
                        height: 0,
                        width: 0,
                        position: "absolute",
                        pointerEvents: "none",
                        borderColor: "rgba(136, 183, 213, 0)",
                        borderBottomColor: ft.wv,
                        borderWidth: 10,
                      },
                    ),
                  }),
                  active: (0, d.AH)({
                    border: `1px solid ${ft.wv} !important`,
                  }),
                  outlined: (0, d.AH)({
                    border: `1px solid ${e.textPrimary} !important`,
                  }),
                  filled: (0, d.AH)({
                    "& label": {
                      top: "3px !important",
                      fontSize: 12,
                      color: e.textSecondary,
                    },
                  }),
                  error: (0, d.AH)({
                    margin: "0 20px 20px 0",
                    "& input": { borderColor: `${ft.wv} !important` },
                  }),
                  asterisk: (0, d.AH)({ color: ft.zK, display: "inline" }),
                  calendarIcon: (0, d.AH)((0, D.pG)(20), {
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
              value: s || p,
              onMouseEnter: A,
              onMouseLeave: v,
              onChange: (e) => {
                let { value: t } = e.currentTarget;
                n && " " === t && (t = ""),
                  h && (t = h(t)),
                  f && f(t),
                  y && ((e.currentTarget.value = t), y(e));
              },
              autoComplete: E,
              pattern: g,
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
            ((0, I.fn)("firefox") || (0, I.fn)("safari")) &&
              "date" === b &&
              r().createElement(
                "div",
                { className: R.calendarIcon },
                r().createElement(M.A, { icon: St(), size: L.A.XXXSMALL }),
              ),
            O && !c && N && r().createElement("span", null, O),
          );
        },
      );
      var kt = l(43459),
        Ut = l.n(kt),
        Gt = l(35433),
        jt = Object.defineProperty,
        Bt = Object.defineProperties,
        Ft = Object.getOwnPropertyDescriptors,
        _t = Object.getOwnPropertySymbols,
        Vt = Object.prototype.hasOwnProperty,
        qt = Object.prototype.propertyIsEnumerable,
        Wt = (e, t, l) =>
          t in e
            ? jt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        $t = (e, t) => {
          for (var l in t || (t = {})) Vt.call(t, l) && Wt(e, l, t[l]);
          if (_t) for (var l of _t(t)) qt.call(t, l) && Wt(e, l, t[l]);
          return e;
        },
        Kt = (e, t) => {
          var l = {};
          for (var a in e) Vt.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
          if (null != e && _t)
            for (var a of _t(e))
              t.indexOf(a) < 0 && qt.call(e, a) && (l[a] = e[a]);
          return l;
        };
      const Yt = {
          select: (e) =>
            (0, d.AH)((0, D.kb)(0), (0, D.Jh)("left"), {
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
              borderRadius: j.Vq,
              boxShadow: `0 2px 35px 0 ${j.Fk}`,
            }),
          options: (0, d.AH)({ padding: 0, margin: 0, listStyle: "none" }),
          list: (e, t, l) =>
            (0, d.AH)(
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
        zt = (e) => {
          var t = e,
            {
              label: l,
              value: a,
              index: n,
              selectId: o,
              shouldHighlight: i,
              isSelected: s,
            } = t,
            c = Kt(t, [
              "label",
              "value",
              "index",
              "selectId",
              "shouldHighlight",
              "isSelected",
            ]);
          const u = (0, K.E)();
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
              ((d = $t(
                {
                  "data-testid": "menu-item",
                  tabIndex: -1,
                  type: "button",
                  className: Yt.list(u, i, s),
                },
                c,
              )),
              Bt(d, Ft({ value: a }))),
              l,
            ),
          );
          var d;
        },
        Zt = (e) => {
          var t = e,
            {
              filterOptions: l,
              listClass: n,
              highlighted: o,
              selectedValue: i,
              selectId: s,
            } = t,
            c = Kt(t, [
              "filterOptions",
              "listClass",
              "highlighted",
              "selectedValue",
              "selectId",
            ]);
          const u = (0, a.useRef)(null),
            b = (0, K.E)();
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
              { className: Yt.select(b), ref: u, "data-testid": "menu-list" },
              r().createElement(
                "div",
                {
                  className: (0, d.cx)(Yt.options, n),
                  role: "listbox",
                  id: `${s}-listbox`,
                  tabIndex: -1,
                  "aria-labelledby": `${s}-droplist-input`,
                },
                l.length > 0 &&
                  l.map((e, t) =>
                    r().createElement(
                      zt,
                      $t(
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
      var Qt = Object.defineProperty,
        Xt = Object.defineProperties,
        Jt = Object.getOwnPropertyDescriptors,
        el = Object.getOwnPropertySymbols,
        tl = Object.prototype.hasOwnProperty,
        ll = Object.prototype.propertyIsEnumerable,
        al = (e, t, l) =>
          t in e
            ? Qt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const rl = {
          dropList: (0, d.AH)({ position: "relative", display: "flex" }),
          disabled: (e) =>
            (0, d.AH)({ cursor: "not-allowed", backgroundColor: e.background }),
          input: (e) =>
            (0, d.AH)({
              flex: 1,
              backgroundColor: "transparent",
              color: e.textPrimary,
              padding: "1.28rem 10px",
              boxSizing: "border-box",
              cursor: "pointer",
              "&::selection": { background: "transparent" },
              "&:disabled": { cursor: "not-allowed" },
            }),
          dropListIcon: (0, d.AH)((0, D.hz)(10), (0, D.pG)("0%"), {
            position: "absolute",
            top: "33%",
            pointerEvents: "none",
          }),
          asterisk: (0, d.AH)({ color: ft.zK, display: "inline" }),
        },
        nl = (0, a.forwardRef)((e, t) => {
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
            p = ((e, t) => {
              var l = {};
              for (var a in e)
                tl.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
              if (null != e && el)
                for (var a of el(e))
                  t.indexOf(a) < 0 && ll.call(e, a) && (l[a] = e[a]);
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
          const A = (0, K.E)();
          return r().createElement(
            "div",
            { className: (0, d.cx)(rl.dropList, a, { [rl.disabled(A)]: n }) },
            c &&
              r().createElement(
                "label",
                { htmlFor: `${b}-droplist-input`, "aria-label": c },
                c,
                s &&
                  r().createElement("span", { className: rl.asterisk }, " *"),
              ),
            r().createElement(
              "input",
              ((v = ((e, t) => {
                for (var l in t || (t = {})) tl.call(t, l) && al(e, l, t[l]);
                if (el) for (var l of el(t)) ll.call(t, l) && al(e, l, t[l]);
                return e;
              })({ ref: t, "data-testid": "droplist-input" }, p)),
              (E = {
                className: rl.input(A),
                placeholder: i,
                value: o,
                name: u,
                id: `${b}-droplist-input`,
                "aria-controls": `${b}-listbox`,
                "aria-expanded": m,
                "aria-haspopup": "listbox",
                role: "combobox",
              }),
              Xt(v, Jt(E))),
            ),
            r().createElement(M.A, {
              className: rl.dropListIcon,
              icon: w.A.CARET_DOWN,
              size: L.A.XSMALL,
            }),
          );
          var v, E;
        });
      var ol = Object.defineProperty,
        il = Object.defineProperties,
        sl = Object.getOwnPropertyDescriptors,
        cl = Object.getOwnPropertySymbols,
        ul = Object.prototype.hasOwnProperty,
        dl = Object.prototype.propertyIsEnumerable,
        bl = (e, t, l) =>
          t in e
            ? ol(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        ml = (e, t) => {
          for (var l in t || (t = {})) ul.call(t, l) && bl(e, l, t[l]);
          if (cl) for (var l of cl(t)) dl.call(t, l) && bl(e, l, t[l]);
          return e;
        };
      const pl = ({
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
        const p = (0, K.E)(),
          [A] = (0, a.useState)(Ut()()),
          v = (0, a.useMemo)(
            () =>
              ((e) => ({
                wrapper: (0, d.AH)({
                  position: "relative",
                  outline: "none",
                  cursor: "pointer",
                  border: `1px solid ${e.textPrimary}`,
                  borderColor: `${e.textPrimary} !important`,
                  borderRadius: j.Vq,
                  backgroundColor: "transparent",
                  color: e.textPrimary,
                }),
                active: (0, d.AH)({
                  display: "block",
                  color: e.textPrimary,
                  zIndex: 9999,
                }),
                droplist: (0, d.AH)({ position: "relative", display: "flex" }),
                disabled: (0, d.AH)({
                  cursor: "not-allowed",
                  backgroundColor: e.background,
                }),
              }))(p),
            [p],
          ),
          E = (0, a.useMemo)(
            () =>
              t.map((e, t) => {
                return (
                  (l = ml({}, e)),
                  (a = { _id: `${e.value}`, index: t }),
                  il(l, sl(a))
                );
                var l, a;
              }),
            [t],
          ),
          [g, N] = (0, a.useState)(!1),
          [I, O] = (0, a.useState)(""),
          [h, f] = (0, a.useState)(-1),
          [y, S] = (0, a.useState)(""),
          [R, C] = (0, a.useState)(E),
          x = (0, a.useRef)(null),
          T = (0, a.useMemo)(
            () => E.find((e) => e.value === I) || null,
            [E, I],
          ),
          M = g ? y : T ? T.label : "",
          L = (0, a.useCallback)(() => {
            N(!1), f(-1), S(""), C(E), x && x.current && x.current.blur();
          }, [N, f, S, x]),
          w = (0, a.useCallback)(
            (t) => {
              const l = t ? R.find((e) => e.value === t) : R[h];
              O(l.value), s(e, l.value);
            },
            [s, R, h],
          ),
          D = (0, a.useCallback)(
            (e) => {
              e.preventDefault(),
                x && x.current && x.current.blur(),
                N(!1),
                w(e.currentTarget.value);
            },
            [w, N, x],
          ),
          P = (0, a.useCallback)(
            (e) => {
              const { keyCode: t } = e,
                l = e.target;
              if (t === Gt.Ay.UP || t === Gt.Ay.DOWN) {
                e.preventDefault(), e.stopPropagation();
                const a = ((e, t) => {
                  const { keyCode: l, options: a } = t,
                    r = a.length - 1;
                  let n = e;
                  switch (l) {
                    case Gt.Ay.DOWN:
                      n = e + 1;
                      break;
                    case Gt.Ay.UP:
                      n = e - 1;
                  }
                  return n < 0 ? (n = r) : n > r && (n = 0), n;
                })(h, { keyCode: t, options: R });
                l.setAttribute("aria-activedescendant", `${A}-option-${a}`),
                  f(a);
              } else l.removeAttribute("aria-activedescendant");
            },
            [h, R],
          ),
          H = (0, a.useCallback)(
            (e) => {
              const { keyCode: t } = e.nativeEvent;
              t === Gt.Ay.RETURN &&
                (e.preventDefault(), e.stopPropagation(), w(), L());
            },
            [w, L],
          ),
          k = (0, a.useCallback)(
            (e) => {
              const { keyCode: t } = e;
              t === Gt.Ay.ESCAPE &&
                (e.preventDefault(), e.stopPropagation(), L());
            },
            [L],
          ),
          U = {
            onChange: ({ target: e }) => {
              const { value: t } = e,
                l =
                  ((a = t),
                  E.filter(
                    (e) =>
                      !a ||
                      -1 !==
                        e.label.toLowerCase().indexOf(a.trim().toLowerCase()),
                  ));
              var a;
              C(l), S(t);
            },
            onMouseDown: () => {
              N((e) => !e);
            },
            onBlur: L,
            onFocus: () => {
              N(!0);
            },
            onKeyPress: H,
            onKeyDown: P,
            onKeyUp: k,
          },
          G = { onMouseDown: D, onKeyDown: P, onKeyPress: H, onBlur: L };
        return r().createElement(
          "div",
          {
            className: (0, d.cx)(v.wrapper, l, { [v.active]: g, [i]: g }),
            "aria-label": m || n,
          },
          r().createElement(
            nl,
            ml(
              {
                ref: x,
                disabled: c || !u,
                placeholder: n,
                className: l,
                inputValue: M,
                required: b,
                label: m,
                name: e,
                selectId: A,
                isDropdownOpen: g,
              },
              U,
            ),
          ),
          g
            ? r().createElement(
                Zt,
                ml(
                  {
                    listClass: o,
                    filterOptions: R,
                    highlighted: h,
                    selectedValue: I,
                    name: e,
                    selectId: A,
                  },
                  G,
                ),
              )
            : null,
        );
      };
      var Al = Object.defineProperty,
        vl = Object.getOwnPropertySymbols,
        El = Object.prototype.hasOwnProperty,
        gl = Object.prototype.propertyIsEnumerable,
        Nl = (e, t, l) =>
          t in e
            ? Al(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Il = (0, Xe.N$)((e) => {
        const t = (0, K.E)(),
          l = a.useMemo(
            () =>
              ((e) => ({
                select: (0, d.AH)({
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
                error: (0, d.AH)({
                  borderColor: `${ft.wv} !important`,
                  "> input": { borderColor: `${ft.wv} !important` },
                }),
                active: (0, d.AH)({ borderColor: e.textPrimary }),
                disabled: (0, d.AH)({ backgroundColor: e.level1 }),
                icon: (0, d.AH)((0, D.hz)(10), (0, D.pG)("0%"), {
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
            for (var a in e) El.call(e, a) && t.indexOf(a) < 0 && (l[a] = e[a]);
            if (null != e && vl)
              for (var a of vl(e))
                t.indexOf(a) < 0 && gl.call(e, a) && (l[a] = e[a]);
            return l;
          })(r, [
            "className",
            "isPristine",
            "showRequired",
            "disabled",
            "label",
          ]),
          b = a.createElement(M.A, {
            className: l.icon,
            icon: w.A.CARET_DOWN,
            size: L.A.XSMALL,
          });
        return a.createElement(
          pl,
          ((e, t) => {
            for (var l in t || (t = {})) El.call(t, l) && Nl(e, l, t[l]);
            if (vl) for (var l of vl(t)) gl.call(t, l) && Nl(e, l, t[l]);
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
      var Ol = Object.defineProperty,
        hl = Object.defineProperties,
        fl = Object.getOwnPropertyDescriptors,
        yl = Object.getOwnPropertySymbols,
        Sl = Object.prototype.hasOwnProperty,
        Rl = Object.prototype.propertyIsEnumerable,
        Cl = (e, t, l) =>
          t in e
            ? Ol(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        xl = (e, t) => {
          for (var l in t || (t = {})) Sl.call(t, l) && Cl(e, l, t[l]);
          if (yl) for (var l of yl(t)) Rl.call(t, l) && Cl(e, l, t[l]);
          return e;
        },
        Tl = (e, t) => hl(e, fl(t));
      const Ml = (0, Xe.N$)(
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
            required: p,
            placeholder: A,
            showError: v,
            formatValue: E,
            onChange: g,
            getErrorMessage: N,
            label: I,
          }) => {
            const O = (0, K.E)(),
              h = (0, a.useMemo)(
                () =>
                  ((e) => ({
                    textarea: (0, d.AH)({
                      position: "relative",
                      "& textarea": {
                        width: "100%",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: 50,
                        maxHeight: 250,
                        padding: 20,
                        borderRadius: j.Vq,
                        backgroundColor: "transparent",
                        color: e.textPrimary,
                        boxSizing: "border-box",
                        "& ~ label": Tl(xl({}, (0, D.kb)(20)), {
                          top: 21,
                          fontWeight: j.Wy.reg,
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
                          "& ~ label": Tl(xl({}, (0, D.kb)(20)), {
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
                        background: ft.wv,
                        padding: "1rem",
                        width: "100%",
                        borderRadius: j.Vq,
                        fontSize: "0.9em",
                        margin: "1em 0 0.5em",
                        display: "inline-block",
                        position: "relative",
                        color: e.textPrimary,
                      },
                      "& span::after": Tl(
                        xl(
                          xl({}, (0, Q.l)(" ")),
                          (0, D.P8)((0, D.kb)(40), (0, D.S$)(-10)),
                        ),
                        {
                          bottom: "100%",
                          border: "solid transparent",
                          height: 0,
                          width: 0,
                          position: "absolute",
                          pointerEvents: "none",
                          borderColor: "rgba(136, 183, 213, 0)",
                          borderBottomColor: ft.wv,
                          borderWidth: 10,
                        },
                      ),
                    }),
                    active: (0, d.AH)({
                      border: `1px solid ${ft.wv} !important`,
                    }),
                    outlined: (0, d.AH)({
                      border: `1px solid ${e.textPrimary} !important`,
                    }),
                    filled: (0, d.AH)({
                      "& label": Tl(xl({}, (0, D.kb)(20)), {
                        top: "3px !important",
                        fontSize: 12,
                        color: e.textSecondary,
                      }),
                    }),
                    error: (0, d.AH)({
                      margin: "0 20px 20px 0",
                      "& input": { borderColor: ft.wv },
                    }),
                    asterisk: (0, d.AH)({
                      color: "#FFA640",
                      display: "inline",
                    }),
                  }))(O),
                [O],
              ),
              f = n || o ? h.outlined : h.active;
            return r().createElement(
              "div",
              { className: (0, d.cx)(h.textarea, { [h.filled]: !!l }, e) },
              r().createElement("textarea", {
                className: f,
                id: i,
                name: t,
                value: l || s,
                disabled: c,
                onMouseEnter: u,
                onMouseLeave: b,
                onChange: (e) => {
                  let { value: t } = e.currentTarget;
                  p && " " === t && (t = ""),
                    E && (t = E(t)),
                    g && ((e.currentTarget.value = t), g(e));
                },
                autoComplete: m,
                required: p,
                "data-testid": "textarea",
              }),
              r().createElement(
                "label",
                { id: `label-${i || t}`, htmlFor: t },
                I || A || "",
                p &&
                  r().createElement(
                    "div",
                    {
                      className: h.asterisk,
                      "data-testid": "required-asterisk",
                    },
                    " ",
                    "*",
                  ),
              ),
              N && !n && v && r().createElement("span", null, N),
            );
          },
        ),
        Ll = [
          { value: "UE4", label: "UE4" },
          { value: "UNITY", label: "Unity" },
          { value: "INTERNAL", label: "Internal" },
          { value: "OTHER", label: "Other" },
        ];
      var wl = Object.defineProperty,
        Dl = Object.getOwnPropertySymbols,
        Pl = Object.prototype.hasOwnProperty,
        Hl = Object.prototype.propertyIsEnumerable,
        kl = (e, t, l) =>
          t in e
            ? wl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Ul = (e, t) => {
          for (var l in t || (t = {})) Pl.call(t, l) && kl(e, l, t[l]);
          if (Dl) for (var l of Dl(t)) Hl.call(t, l) && kl(e, l, t[l]);
          return e;
        };
      const Gl = ({
        validation: e,
        getMessage: t,
        required: l,
        maxLength: a,
      }) => {
        const r = Ul(Ul({}, a ? { maxLength: a } : {}), e && { [e]: !0 });
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
      var jl = Object.defineProperty,
        Bl = Object.defineProperties,
        Fl = Object.getOwnPropertyDescriptors,
        _l = Object.getOwnPropertySymbols,
        Vl = Object.prototype.hasOwnProperty,
        ql = Object.prototype.propertyIsEnumerable,
        Wl = (e, t, l) =>
          t in e
            ? jl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        $l = (e, t) => {
          for (var l in t || (t = {})) Vl.call(t, l) && Wl(e, l, t[l]);
          if (_l) for (var l of _l(t)) ql.call(t, l) && Wl(e, l, t[l]);
          return e;
        },
        Kl = (e, t) => Bl(e, Fl(t));
      const Yl = ({
        component: e,
        label: t,
        id: l,
        required: n,
        validation: o,
        maxLength: s,
        onChange: c,
        value: u,
      }) => {
        const b = (0, K.E)(),
          m = (0, a.useMemo)(
            () =>
              ((e) => ({
                formItemLabelWrapper: (0, d.AH)({
                  label: { color: e.textSecondary },
                }),
                label: (0, d.AH)({ fontSize: "0.9em" }),
                select: (0, d.AH)({
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
                    borderRadius: j.Vq,
                    backgroundColor: "transparent",
                    color: e.textPrimary,
                    boxSizing: "border-box",
                  },
                  "& label": Kl($l({ top: 21 }, (0, D.kb)(20)), {
                    fontWeight: j.Wy.reg,
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
                    "& label": Kl($l({ top: 3 }, (0, D.kb)(20)), {
                      fontSize: 12,
                      color: e.textSecondary,
                    }),
                  },
                }),
                textInput: (0, d.AH)({
                  "input, textarea": {
                    border: `1px solid ${e.backgroundOverlay} !important`,
                  },
                }),
                wrapper: (0, d.AH)({ margin: "1em" }),
                filled: (0, d.AH)({
                  "& label": {
                    top: "3px !important",
                    fontSize: 12,
                    color: e.textSecondary,
                  },
                }),
              }))(b),
            [b],
          ),
          p = (0, i.B2)(),
          {
            validations: A,
            validationMessages: v,
            type: E,
          } = (0, a.useMemo)(
            () =>
              Gl({ validation: o, getMessage: p, required: n, maxLength: s }),
            [o, p, n, s],
          );
        return r().createElement(
          "div",
          { className: m.wrapper },
          (() => {
            switch (e) {
              case Ze.input:
                return r().createElement(Ht, {
                  type: E,
                  name: l,
                  value: u || "",
                  placeholder: t,
                  validations: A,
                  validationErrors: v,
                  disabled: !1,
                  onChange: c,
                  autoComplete: "off",
                  required: n,
                  id: l,
                  className: m.textInput,
                });
              case Ze.select:
                return r().createElement(
                  "div",
                  {
                    className: m.formItemLabelWrapper,
                    "data-testid": "select-input",
                  },
                  r().createElement(Il, {
                    required: n,
                    name: l,
                    value: u || "",
                    validationErrors: v,
                    disabled: !1,
                    onChange: c,
                    options: "Current_Engine__c" === l ? Ll : [],
                    className: (0, d.cx)(m.select, { [m.filled]: !!u }),
                    placeholder: "",
                    label: t,
                  }),
                );
              case Ze.textArea:
                return r().createElement(Ml, {
                  name: t,
                  value: u || "",
                  placeholder: t,
                  validations: A,
                  validationErrors: v,
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
      var zl = l(6576);
      const Zl = {
          wrapper: (0, d.AH)({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }),
          input: (0, d.AH)({ width: "80%", height: 60 }),
          cta: (0, d.AH)({ width: "20%", height: 30 }),
          link: (0, d.AH)({ width: "15%", height: 10 }),
          title: (0, d.AH)({ width: "20%", height: 50 }),
          subtitle: (0, d.AH)({ width: "60%", height: 30 }),
        },
        Ql = () =>
          r().createElement(
            "div",
            { className: Zl.wrapper },
            r().createElement(zl.A, { className: Zl.title }),
            r().createElement(zl.A, { className: Zl.subtitle }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.input }),
            r().createElement(zl.A, { className: Zl.cta }),
            r().createElement(zl.A, { className: Zl.link }),
          );
      var Xl = l(36233),
        Jl = l(22792),
        ea = l(13758);
      const ta = {
          wrapper: (0, d.AH)({
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }),
          title: (0, d.AH)({ marginBottom: 20 }),
          cta: (0, d.AH)({ marginTop: 60, marginBottom: 20 }),
        },
        la = () => {
          const e = (0, ea.useHistory)(),
            t = (0, C.useDispatch)();
          return r().createElement(
            "div",
            { className: ta.wrapper },
            r().createElement(
              "div",
              { className: ta.title },
              r().createElement(
                Ce.A.Text,
                null,
                r().createElement(i.QB, {
                  code: "epic.diesel.publishform.title",
                }),
              ),
            ),
            r().createElement(
              V.Ay,
              null,
              r().createElement(i.QB, {
                code: "epic.diesel.publishform.success",
              }),
            ),
            r().createElement(
              "div",
              { className: ta.cta },
              r().createElement(
                Jl.rp,
                {
                  onClick: () => {
                    t(qe.Ay.fetchAboutPageReset()),
                      e && e.push((0, Xl.generateRoutePath)("/publish"));
                  },
                },
                r().createElement(i.QB, {
                  code: "epic.diesel.publishform.cta",
                }),
              ),
            ),
          );
        };
      var aa = Object.defineProperty,
        ra = Object.defineProperties,
        na = Object.getOwnPropertyDescriptors,
        oa = Object.getOwnPropertySymbols,
        ia = Object.prototype.hasOwnProperty,
        sa = Object.prototype.propertyIsEnumerable,
        ca = (e, t, l) =>
          t in e
            ? aa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        ua = (e, t) => {
          for (var l in t || (t = {})) ia.call(t, l) && ca(e, l, t[l]);
          if (oa) for (var l of oa(t)) sa.call(t, l) && ca(e, l, t[l]);
          return e;
        },
        da = (e, t) => ra(e, na(t));
      const ba = ({
        submitText: e,
        subTitle: t,
        link: l,
        title: n,
        formField: o,
      }) => {
        const [s, c] = (0, a.useState)(!1),
          [u, b] = (0, a.useState)({}),
          m = (0, C.useSelector)(Ke),
          p = m.latestValue || s,
          A = (0, i.Pc)(),
          [v, E] = (0, a.useState)(m.state),
          g = (0, C.useSelector)(ze.BE),
          N = (0, C.useSelector)(Qe.c1),
          I = (0, C.useDispatch)(),
          [O, h] = r().useState(!1);
        (0, a.useEffect)(() => {
          E(m.state);
        }, [m]),
          (0, a.useEffect)(() => {
            g || I(Ye.Ay.requestSignIn(N));
          }, [g, N]);
        const f = {
            eventAction: qe.yc.SUBMIT_DEV_FORM,
            eventCategory: qe.XX,
            eventLabel: qe.tK,
            eventValue: (0, ht.A)({ formData: u }),
            interactionType: P.HH.Interaction,
          },
          y = (e) => {
            const { name: t, value: l } = e.target;
            b(da(ua({}, u), { [t]: l }));
          },
          S = (e, t) => {
            b(da(ua({}, u), { [e]: t }));
          },
          R = (0, K.E)(),
          x = (0, a.useMemo)(
            () =>
              ((e) => ({
                wrapper: (0, d.AH)({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }),
                content: (0, d.AH)({
                  display: "flex",
                  flexDirection: "column",
                  width: "75%",
                  justifyContent: "center",
                  alignItems: "center",
                  form: { width: "100%" },
                  [j.aq.underMd]: { width: "100%" },
                }),
                ctaWrapper: (0, d.AH)({
                  display: "flex",
                  justifyContent: "center",
                  margin: "1em",
                  marginTop: 50,
                  [j.aq.mdOnly]: { marginTop: 30 },
                  [j.aq.underMd]: { marginTop: 20 },
                }),
                form: (0, d.AH)({
                  padding: "0 1em",
                  width: "100%",
                  "& form": { margin: "0 auto" },
                }),
                link: (0, d.AH)({
                  borderBottom: `1px solid ${e.textSecondary}`,
                }),
                header: (0, d.AH)({
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }),
                label: (0, d.AH)(
                  da(ua({}, (0, D.S$)(18)), { lineHeight: "unset" }),
                ),
              }))(R),
            [R],
          ),
          H = (0, i.B2)(),
          k = Gl({ getMessage: H, required: !0, validation: void 0 }),
          U = `[${H("diesel.products.privacy_link")}](https://www.epicgames.com/site/${A}/privacypolicy)`,
          G = H("egstore.publish.form.privacy_checkbox", [U]);
        return g
          ? r().createElement(
              "div",
              { className: x.wrapper },
              r().createElement(
                "div",
                { className: x.content },
                v !== We.V.success &&
                  r().createElement(
                    r().Fragment,
                    null,
                    r().createElement(
                      "div",
                      { className: x.header },
                      r().createElement(Ce.A.Text, null, n),
                      r().createElement(V.Ay, null, t),
                    ),
                    r().createElement(
                      "div",
                      { className: x.form },
                      r().createElement(
                        gt,
                        {
                          submitForm: () => {
                            if (!s) {
                              c(!0);
                              const { label: e = "" } =
                                  Ot.find(
                                    ({ value: e, label: t }) =>
                                      e ===
                                        (null == u ? void 0 : u.CountryCode) &&
                                      t,
                                  ) || {},
                                t = da(ua({}, u), {
                                  country: e,
                                  privacyCheckbox: void 0,
                                });
                              I(qe.Ay.submitDevForm(t));
                            }
                          },
                          callbackDelay: 1e3,
                        },
                        o.map((e) => {
                          const t =
                            (null == e ? void 0 : e.component) === Ze.select;
                          return r().createElement(
                            Yl,
                            da(
                              ua(
                                {
                                  key: `form-field-${null == e ? void 0 : e.id}`,
                                },
                                e,
                              ),
                              { onChange: t ? S : y, value: u[e.id] },
                            ),
                          );
                        }),
                        r().createElement(tt, {
                          id: "publish-form-privacy-checkbox",
                          name: "publish-form-privacy-checkbox",
                          checked: O,
                          onClick: () => {
                            b(da(ua({}, u), { privacyCheckbox: !O })), h(!O);
                          },
                          validations: k.validations,
                          required: !0,
                          ariaLabel: G,
                          renderLabel: () =>
                            r().createElement(
                              "label",
                              {
                                "aria-label": G,
                                className: x.label,
                                htmlFor: "publish-form-privacy-checkbox",
                              },
                              r().createElement(Me.A, { source: G }),
                            ),
                        }),
                        r().createElement(
                          "div",
                          {
                            className: x.ctaWrapper,
                            "data-testid": "submit-form",
                          },
                          r().createElement(
                            P.Iu,
                            { event: f },
                            r().createElement(
                              T.e6,
                              {
                                disabled: p && v !== We.V.error,
                                type: It.A.SUBMIT,
                                "data-testid": "submit-button",
                              },
                              e,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                v === We.V.error &&
                  r().createElement(i.QB, {
                    code: "egstore.publish.form.error",
                  }),
                v === We.V.fetching &&
                  r().createElement(M.A, {
                    icon: w.A.CIRCLE_LOADING,
                    size: L.A.XLARGE,
                  }),
                v === We.V.success && r().createElement(la, null),
                (null == l ? void 0 : l.src) &&
                  r().createElement(
                    Nt.A,
                    { to: null == l ? void 0 : l.src, className: x.link },
                    r().createElement(
                      V.Ay,
                      null,
                      null == l ? void 0 : l.linkText,
                    ),
                  ),
              ),
            )
          : r().createElement(Ql, null);
      };
      var ma = ((e) => (
        (e.TOP_BANNER = "topBanner"),
        (e.INFO_CARDS = "infoCards"),
        (e.INTERACTIVE_CARDS = "interactiveCards"),
        (e.MARKDOWN_CARDS = "markdownCards"),
        (e.FAQ = "faq"),
        (e.STORE_FORM = "storeForm"),
        e
      ))(ma || {});
      const pa = () => ({
        TopBanner: Se,
        MarketingCards: N,
        FAQ: Ve,
        StoreForm: ba,
      });
      var Aa = l(60885),
        va = l(30897),
        Ea = l(78487);
      const ga = { wrapper: (0, d.AH)({ marginBottom: 20 }) },
        Na = ({ children: e }) =>
          r().createElement("div", { className: ga.wrapper }, e);
      var Ia = l(75511);
      const Oa = ({ children: e }) => {
          const t = (0, K.E)(),
            l = (0, a.useMemo)(
              () =>
                ((e) => ({
                  wrapper: (0, d.AH)({
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
        ha = {
          content: (0, d.AH)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 40,
            gap: 20,
            [u.aq.underMd]: { flexDirection: "row", gap: 40 },
            [u.aq.underSm]: { flexDirection: "column", gap: 20 },
          }),
          imageWrapper: (0, d.AH)({
            width: 160,
            height: 160,
            [u.aq.mdOnly]: { width: 140, height: 140 },
            [u.aq.underMd]: { width: 120, height: 120 },
          }),
          image: (0, d.AH)({ width: "100%" }),
          textWrapper: (0, d.AH)({
            display: "flex",
            flexDirection: "column",
            gap: 20,
            textAlign: "center",
            flex: 1,
            [u.aq.smOnly]: { maxWidth: "70%" },
            [u.aq.underMd]: { textAlign: "left" },
            [u.aq.underSm]: { textAlign: "center" },
          }),
        },
        fa = ({ image: e, title: t, subTitle: l }) =>
          r().createElement(
            Oa,
            null,
            r().createElement(
              "div",
              { className: ha.content },
              (null == e ? void 0 : e.src)
                ? r().createElement(
                    "div",
                    {
                      className: ha.imageWrapper,
                      "data-testid": "marketing-card-image",
                    },
                    r().createElement("img", {
                      src: e.src,
                      alt: e.altText,
                      className: ha.image,
                    }),
                  )
                : null,
              r().createElement(
                "div",
                { className: ha.textWrapper },
                r().createElement(
                  Ce.A.Heading,
                  { textLevel: W.qo.PRIMARY, headingLevel: 2 },
                  t,
                ),
                l &&
                  r().createElement(
                    "div",
                    { "data-testid": "marketing-card-subtitle" },
                    r().createElement(
                      Ia.A.Heading,
                      { textLevel: W.qo.SECONDARY, headingLevel: 3 },
                      l,
                    ),
                  ),
              ),
            ),
          );
      var ya = l(92637),
        Sa = l(41714),
        Ra = l(38210),
        Ca = l(63246),
        xa = Object.defineProperty,
        Ta = Object.defineProperties,
        Ma = Object.getOwnPropertyDescriptors,
        La = Object.getOwnPropertySymbols,
        wa = Object.prototype.hasOwnProperty,
        Da = Object.prototype.propertyIsEnumerable,
        Pa = (e, t, l) =>
          t in e
            ? xa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Ha = (e, t) => {
          for (var l in t || (t = {})) wa.call(t, l) && Pa(e, l, t[l]);
          if (La) for (var l of La(t)) Da.call(t, l) && Pa(e, l, t[l]);
          return e;
        },
        ka = (e, t) => Ta(e, Ma(t));
      const Ua = ({ isMobile: e, isImageTheme: t, isRTL: l }) => {
          let a = "right";
          return (
            t ? l || (a = "left") : l && (a = "left"),
            { vertical: e ? "bottom" : void 0, horizontal: a }
          );
        },
        Ga = ({ backgroundColors: e, isImageTheme: t }) => {
          const l = (0, Ca.Qo)(),
            r = (0, Ra.A)(),
            n = (0, y.N1)(r);
          return (0, a.useMemo)(
            () =>
              (({
                backgroundColors: e,
                isMobile: t,
                isImageTheme: l,
                isRTL: a = !1,
              }) => {
                const r = (0, de.l9)(e),
                  n = (0, be.pf)(r[0]),
                  o = (0, U.LV)(r[0]),
                  i =
                    r.length > 0
                      ? {
                          direction:
                            t && l
                              ? 180
                              : Ha(
                                  {},
                                  Ua({
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
                              color: ka(Ha({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.8,
                              }),
                              stopPoint: 46,
                            },
                            {
                              color: ka(Ha({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.1,
                              }),
                              stopPoint: 63,
                            },
                            {
                              color: ka(Ha({}, null == o ? void 0 : o.rgb()), {
                                alpha: 0.1,
                              }),
                              stopPoint: 82,
                            },
                          ],
                        }
                      : void 0,
                  s = i
                    ? {
                        type: Y.hK.LINEAR_GRADIENT,
                        color: ka(Ha({}, null == o ? void 0 : o.rgb()), {
                          alpha: 0,
                        }),
                        properties: { image: i },
                      }
                    : { type: Y.hK.COLOR, color: null == o ? void 0 : o.rgb() };
                return ka(Ha({}, n), { background: s });
              })({
                backgroundColors: e,
                isMobile: n,
                isImageTheme: t,
                isRTL: l,
              }),
            [e, n, t, l],
          );
        };
      var ja = Object.defineProperty,
        Ba = Object.defineProperties,
        Fa = Object.getOwnPropertyDescriptors,
        _a = Object.getOwnPropertySymbols,
        Va = Object.prototype.hasOwnProperty,
        qa = Object.prototype.propertyIsEnumerable,
        Wa = (e, t, l) =>
          t in e
            ? ja(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        $a = (e, t) => {
          for (var l in t || (t = {})) Va.call(t, l) && Wa(e, l, t[l]);
          if (_a) for (var l of _a(t)) qa.call(t, l) && Wa(e, l, t[l]);
          return e;
        };
      const Ka = ({
          title: e,
          ctaLink: t,
          backgroundImage: l,
          backgroundColors: n,
          isInset: o = !1,
        }) => {
          const i = (0, K.E)(),
            s = (0, a.useMemo)(
              () =>
                (({ cssTheme: e, isInset: t }) => {
                  return {
                    wrapper: (0, d.AH)({
                      display: "flex",
                      position: "relative",
                      padding: t ? 40 : 0,
                      alignItems: "center",
                      gap: 15,
                      [u.aq.underSm]: { flexDirection: "column" },
                    }),
                    imageWrapper: (0, d.AH)({
                      position: "relative",
                      width: "60%",
                      [u.aq.underSm]: {
                        order: 1,
                        paddingBottom: 0,
                        width: "100%",
                      },
                    }),
                    content: (0, d.AH)({
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                      height: "100%",
                      [u.aq.underSm]: { position: "relative", marginTop: 20 },
                    }),
                    link: (0, d.AH)({
                      display: "block",
                      marginTop: 20,
                      span:
                        ((l = $a(
                          {
                            borderBottom: `1px solid ${e.backgroundOverlay}`,
                            color: e.textSecondary,
                          },
                          j.bm.smooth("all"),
                        )),
                        (a = {
                          "&:hover": {
                            color: e.textPrimary,
                            borderColor: e.textPrimary,
                          },
                        }),
                        Ba(l, Fa(a))),
                    }),
                    text: (0, d.AH)({
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
            b = Ga({ backgroundColors: n || [i.background] });
          return r().createElement(
            $.NP,
            { themeOverrides: b },
            r().createElement(
              Oa,
              null,
              r().createElement(
                "div",
                { className: s.wrapper },
                r().createElement(
                  "div",
                  { className: s.imageWrapper },
                  l &&
                    r().createElement(ya.o, {
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
                      Sa.A.Text,
                      { textLevel: W.qo.SECONDARY },
                      e,
                    ),
                    r().createElement(
                      P.Iu,
                      { event: c },
                      r().createElement(
                        Nt.A,
                        { to: null == t ? void 0 : t.src, className: s.link },
                        r().createElement(
                          V.Ay,
                          { textLevel: W.qo.PRIMARY },
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
        Ya = {
          content: (0, d.AH)({ padding: 40 }),
          title: (0, d.AH)({ marginBottom: 20 }),
        },
        za = ({ title: e, content: t }) =>
          r().createElement(
            Oa,
            null,
            r().createElement(
              "div",
              { className: Ya.content },
              e &&
                r().createElement(
                  "div",
                  { className: Ya.title },
                  r().createElement(
                    Sa.A.Heading,
                    { textLevel: W.qo.PRIMARY, headingLevel: 2 },
                    e,
                  ),
                ),
              t &&
                r().createElement(
                  V.Ay,
                  { textLevel: W.qo.SECONDARY },
                  r().createElement(Me.A, { source: t }),
                ),
            ),
          );
      var Za = Object.defineProperty,
        Qa = Object.defineProperties,
        Xa = Object.getOwnPropertyDescriptors,
        Ja = Object.getOwnPropertySymbols,
        er = Object.prototype.hasOwnProperty,
        tr = Object.prototype.propertyIsEnumerable,
        lr = (e, t, l) =>
          t in e
            ? Za(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        ar = (e, t) => {
          for (var l in t || (t = {})) er.call(t, l) && lr(e, l, t[l]);
          if (Ja) for (var l of Ja(t)) tr.call(t, l) && lr(e, l, t[l]);
          return e;
        },
        rr = (e, t) => Qa(e, Xa(t));
      const nr = (function (e) {
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
                                        Ea.yn.MARKETING_SECTION_IN_VIEW,
                                      eventLabel: `${n}: ${null == e ? void 0 : e.__typename}`,
                                      eventValue: JSON.stringify(d),
                                    };
                                  switch (n) {
                                    case ma.TOP_BANNER:
                                      return a.createElement(
                                        va.A,
                                        { event: b, key: u },
                                        a.createElement(
                                          Na,
                                          null,
                                          a.createElement(
                                            o,
                                            rr(ar({}, e), { slug: t }),
                                          ),
                                        ),
                                      );
                                    case ma.INFO_CARDS:
                                      return a.createElement(
                                        va.A,
                                        { event: b, key: u },
                                        a.createElement(
                                          Na,
                                          null,
                                          a.createElement(
                                            i,
                                            rr(ar({}, e), { Card: fa }),
                                          ),
                                        ),
                                      );
                                    case ma.INTERACTIVE_CARDS:
                                      return a.createElement(
                                        va.A,
                                        { event: b, key: u },
                                        a.createElement(
                                          Na,
                                          null,
                                          a.createElement(
                                            i,
                                            rr(ar({}, e), { Card: Ka }),
                                          ),
                                        ),
                                      );
                                    case ma.MARKDOWN_CARDS:
                                      return a.createElement(
                                        va.A,
                                        { event: b, key: u },
                                        a.createElement(
                                          Na,
                                          null,
                                          a.createElement(
                                            i,
                                            rr(ar({}, e), {
                                              Card: za,
                                              multipleCols: !0,
                                            }),
                                          ),
                                        ),
                                      );
                                    case ma.FAQ:
                                      return a.createElement(
                                        va.A,
                                        { event: b, key: u },
                                        a.createElement(
                                          Na,
                                          null,
                                          a.createElement(s, ar({}, e)),
                                        ),
                                      );
                                    case ma.STORE_FORM:
                                      return a.createElement(
                                        va.A,
                                        { event: b, key: u },
                                        a.createElement(
                                          Na,
                                          null,
                                          a.createElement(c, ar({}, e)),
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
            Aa.A,
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
      })({ useMarketingLayout: pa });
      var or = l(6415),
        ir = l(25837),
        sr = l(21884),
        cr = l.n(sr);
      const ur = cr()`
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
      var dr = Object.defineProperty,
        br = Object.defineProperties,
        mr = Object.getOwnPropertyDescriptors,
        pr = Object.getOwnPropertySymbols,
        Ar = Object.prototype.hasOwnProperty,
        vr = Object.prototype.propertyIsEnumerable,
        Er = (e, t, l) =>
          t in e
            ? dr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        gr = (e, t) => {
          for (var l in t || (t = {})) Ar.call(t, l) && Er(e, l, t[l]);
          if (pr) for (var l of pr(t)) vr.call(t, l) && Er(e, l, t[l]);
          return e;
        };
      const Nr = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.StoreCMSPage)
            ? void 0
            : t.modules;
        },
        Ir = ({ slug: e }, t) => {
          var l;
          const a = (0, i.Pc)();
          var r, n;
          return (0, ir.RU)({
            query: ur,
            variables: { locale: a, slug: e },
            config:
              ((r = gr({}, t)),
              (n = {
                enabled:
                  Boolean(a) &&
                  Boolean(e) &&
                  (null == (l = null == t ? void 0 : t.enabled) || l),
              }),
              br(r, mr(n))),
            reducer: Nr,
          });
        },
        Or = ({ slug: e }) => {
          const t = Ir({ slug: e }),
            l = (0, i.B2)()("epic.store.discover.navtitle");
          return (null == t ? void 0 : t.data)
            ? a.createElement(
                c.A,
                null,
                a.createElement("h1", { className: s.Qg }, l),
                a.createElement(nr, {
                  slug: e,
                  data: null == t ? void 0 : t.data,
                }),
              )
            : a.createElement(or.A, {
                to: (0, Xl.generateRoutePath)("/not-found"),
                "data-testid": "redirect-to-not-found",
              });
        },
        hr = cr()`
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
      var fr = Object.defineProperty,
        yr = Object.defineProperties,
        Sr = Object.getOwnPropertyDescriptors,
        Rr = Object.getOwnPropertySymbols,
        Cr = Object.prototype.hasOwnProperty,
        xr = Object.prototype.propertyIsEnumerable,
        Tr = (e, t, l) =>
          t in e
            ? fr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l),
        Mr = (e, t) => {
          for (var l in t || (t = {})) Cr.call(t, l) && Tr(e, l, t[l]);
          if (Rr) for (var l of Rr(t)) xr.call(t, l) && Tr(e, l, t[l]);
          return e;
        };
      const Lr = (e) => {
          var t, l;
          return null ==
            (l =
              null == (t = null == e ? void 0 : e.StoreCMSPage)
                ? void 0
                : t.modules)
            ? void 0
            : l.seo;
        },
        wr = ({ slug: e }, t) => {
          var l;
          const a = (0, i.Pc)();
          var r, n;
          return (0, ir.RU)({
            query: hr,
            reducer: Lr,
            variables: { slug: e, locale: a },
            config:
              ((r = Mr({}, t)),
              (n = {
                enabled:
                  Boolean(e) &&
                  Boolean(a) &&
                  (null == (l = null == t ? void 0 : t.enabled) || l),
              }),
              yr(r, Sr(n))),
          });
        };
      var Dr = l(20665),
        Pr = l(29200),
        Hr = Object.defineProperty,
        kr = Object.getOwnPropertySymbols,
        Ur = Object.prototype.hasOwnProperty,
        Gr = Object.prototype.propertyIsEnumerable,
        jr = (e, t, l) =>
          t in e
            ? Hr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (e[t] = l);
      const Br = ({ slug: e }) => {
          const t = wr({ slug: e }),
            l = (0, O.useLocalization)(),
            r = null == t ? void 0 : t.data;
          return r
            ? a.createElement(
                Dr.A,
                ((e, t) => {
                  for (var l in t || (t = {})) Ur.call(t, l) && jr(e, l, t[l]);
                  if (kr) for (var l of kr(t)) Gr.call(t, l) && jr(e, l, t[l]);
                  return e;
                })({}, (0, Pr.K)(l, r)),
              )
            : null;
        },
        Fr = () => {
          const e = ((e) => ({
            wrapper: (0, d.AH)({
              display: "flex",
              flexDirection: "column",
              borderRadius: 16,
              border: `1px solid ${e.backgroundOverlay}`,
              width: "100%",
              height: 300,
              overflow: "hidden",
              background: e.background,
            }),
            content: (0, d.AH)({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              marginTop: 50,
              marginBottom: 50,
              gap: 20,
            }),
            title: (0, d.AH)({ width: "30%", height: "20%" }),
            subtitle: (0, d.AH)({ width: "60%", height: "10%" }),
            icon: (0, d.AH)({ width: "10%", height: "35%" }),
          }))((0, K.E)());
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(
              "div",
              { className: e.content },
              r().createElement(zl.A, { className: e.icon }),
              r().createElement(zl.A, { className: e.title }),
              r().createElement(zl.A, { className: e.subtitle }),
            ),
          );
        },
        _r = () => {
          const e = ((e) => ({
            wrapper: (0, d.AH)({
              display: "flex",
              borderRadius: 16,
              border: `1px solid ${e.backgroundOverlay}`,
              width: "100%",
              height: 300,
              overflow: "hidden",
              background: e.background,
              [j.aq.underMd]: { height: 345 },
            }),
            content: (0, d.AH)({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              [j.aq.underMd]: { flexDirection: "column" },
            }),
            title: (0, d.AH)({ width: "80%", height: "20%" }),
            image: (0, d.AH)({
              width: "30%",
              height: "80%",
              marginLeft: 10,
              [j.aq.underMd]: { order: 1, marginLeft: 0, marginBottom: 10 },
            }),
            cta: (0, d.AH)({ width: "40%", height: "10%" }),
            rightCol: (0, d.AH)({
              display: "flex",
              flexDirection: "column",
              width: "70%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }),
          }))((0, K.E)());
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(
              "div",
              { className: e.content },
              r().createElement(zl.A, { className: e.image }),
              r().createElement(
                "div",
                { className: e.rightCol },
                r().createElement(zl.A, { className: e.title }),
                r().createElement(zl.A, { className: e.cta }),
              ),
            ),
          );
        },
        Vr = {
          wrapper: (0, d.AH)({
            display: "flex",
            gap: 16,
            [j.aq.underLg]: { flexDirection: "column" },
          }),
        },
        qr = ({ children: e }) =>
          r().createElement("div", { className: Vr.wrapper }, e),
        Wr = {
          wrapper: (0, d.AH)({
            display: "flex",
            flexDirection: "column",
            height: 400,
          }),
          group: (0, d.AH)({
            display: "flex",
            width: "100%",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }),
          question: (0, d.AH)({ width: "60%", height: "25%" }),
          icon: (0, d.AH)({ marginLeft: "auto", width: "10%", height: "10%" }),
        },
        $r = () =>
          r().createElement(
            "div",
            { className: Wr.group },
            r().createElement(zl.A, { className: Wr.question }),
            r().createElement(zl.A, { className: Wr.icon }),
          ),
        Kr = () =>
          r().createElement(
            "div",
            { className: Wr.wrapper },
            r().createElement($r, null),
            r().createElement($r, null),
            r().createElement($r, null),
          ),
        Yr = () => {
          const e = (({ cssTheme: e }) => ({
            wrapper: (0, d.AH)({
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
            title: (0, d.AH)({ width: "50%", height: "5%" }),
            cta: (0, d.AH)({ width: "25%", height: "10%" }),
            subtitle: (0, d.AH)({ width: "7%", height: "2%" }),
            link: (0, d.AH)({ width: "15%", height: "5%" }),
          }))({ cssTheme: (0, K.E)() });
          return r().createElement(
            "div",
            { className: e.wrapper },
            r().createElement(zl.A, { className: e.title }),
            r().createElement(zl.A, { className: e.cta }),
            r().createElement(zl.A, { className: e.subtitle }),
            r().createElement(zl.A, { className: e.link }),
          );
        },
        zr = { spacer: (0, d.AH)({ display: "block", height: 20 }) },
        Zr = ({ slug: e }) => {
          const t = "download" === e,
            l = "publish" === e,
            a = "publish-form" === e;
          return r().createElement(
            r().Fragment,
            null,
            !a && r().createElement(Yr, null),
            r().createElement("div", { className: zr.spacer }),
            t &&
              r().createElement(
                qr,
                null,
                r().createElement(_r, null),
                r().createElement(_r, null),
              ),
            l &&
              r().createElement(
                r().Fragment,
                null,
                r().createElement(
                  qr,
                  null,
                  r().createElement(Fr, null),
                  r().createElement(Fr, null),
                  r().createElement(Fr, null),
                ),
                r().createElement("div", { className: zr.spacer }),
                r().createElement(Kr, null),
              ),
            a && r().createElement(Ql, null),
          );
        },
        Qr = ({ slug: e }) =>
          a.createElement(
            n.tY,
            {
              fallback: a.createElement(
                o.fN,
                null,
                a.createElement(Zr, { slug: e }),
              ),
            },
            a.createElement(Br, { slug: e }),
            a.createElement(Or, { slug: e }),
          );
    },
    59705: (e) => {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDJIOFY0SDE2VjJIMThWNEgxOUMyMC4xMDQ2IDQgMjEgNC44OTU0MyAyMSA2VjE4QzIxIDE5LjEwNDYgMjAuMTA0NiAyMCAxOSAyMEg1QzMuODk1NDMgMjAgMyAxOS4xMDQ2IDMgMThWNkMzIDQuODk1NDMgMy44OTU0MyA0IDUgNEg2VjJaTTUgMTBIMTlWMThINVYxMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";
    },
  },
]);
//# sourceMappingURL=CMSMarketingView.egstore-site.914160cb6e5115510930.js.map
