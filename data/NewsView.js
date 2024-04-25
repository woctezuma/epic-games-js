(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [661],
  {
    24312: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Ir });
      var a = r(45418),
        n = r.n(a),
        l = r(79705),
        o = r(71297),
        i = r(16618),
        s = r(32396),
        c = r(37922),
        m = r(56470),
        d = r(10035),
        p = r(85449),
        u = r(73142),
        v = r(29498),
        g = r(72420),
        f = r(71630),
        b = r(35070),
        E = r(84244),
        y = Object.defineProperty,
        h = Object.defineProperties,
        w = Object.getOwnPropertyDescriptors,
        x = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        L = Object.prototype.propertyIsEnumerable,
        I = (e, t, r) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const N = (e) => {
          return (0, m.iv)(
            ((t = ((e, t) => {
              for (var r in t || (t = {})) O.call(t, r) && I(e, r, t[r]);
              if (x) for (var r of x(t)) L.call(t, r) && I(e, r, t[r]);
              return e;
            })({}, v.cp.text12)),
            (r = {
              color: (0, g.$)(e) ? v.ix : v.Sn,
              marginBottom: 10,
              [v.Uc.maxWidth]: { marginLeft: 10, marginRight: 10 },
            }),
            h(t, w(r))),
          );
          var t, r;
        },
        P = () => {
          const e = (0, f.y)();
          return n().createElement(
            b.Z,
            { className: N(e), level: 1 },
            n().createElement(E.v0, { code: "diesel.main.home.sections.news" }),
          );
        };
      var j = r(34272);
      const S = (e) =>
          (0, m.iv)({
            background: e.level1,
            position: "relative",
            width: "100%",
          }),
        k = (0, m.iv)({
          width: "100%",
          padding: "45px 35px",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "flex-start",
          pointerEvents: "none",
          overflow: "hidden",
        }),
        Z = (0, m.iv)(v.cp.text2, {
          marginBottom: "10px",
          height: "0.8em",
          width: "40%",
        }),
        D = (0, m.iv)(v.cp.text6, {
          display: "flex",
          width: "100%",
          alignItems: "center",
        }),
        A = (0, m.iv)((0, j.wz)(10), {
          borderRadius: "50%",
          width: "20px",
          height: "20px",
        }),
        C = (0, m.iv)({ width: "22%", height: "0.8em" }),
        z = (e) =>
          (0, m.iv)({
            backgroundColor: e.level2,
            width: "100%",
            height: "260px",
          });
      var R = r(85569),
        _ = r(7301);
      const M = () => {
          const e = (0, _.Z)();
          return a.createElement(
            "div",
            { className: S(e) },
            a.createElement(
              "div",
              { className: k },
              a.createElement(R.Z, { className: Z }),
              a.createElement(
                "div",
                { className: D },
                a.createElement(R.Z, { className: A }),
                a.createElement(R.Z, { className: C }),
              ),
            ),
            a.createElement("div", { className: z(e) }),
          );
        },
        U = () =>
          a.createElement(
            a.Fragment,
            null,
            a.createElement(M, null),
            a.createElement(M, null),
          );
      var $ = r(11003),
        B = r(67526),
        W = r(32042);
      var T = r(22538),
        F = r(43651),
        X = r(61651),
        K = r(98095),
        H = r(84258),
        Y = r(10567),
        V = r(79546),
        q = r(15418);
      const G = (0, r(96685).L)(
        a.createElement("path", {
          d: "M11.526 1.405a.5.5 0 0 1 .948 0l2.244 6.658a.5.5 0 0 0 .474.34h7.222a.5.5 0 0 1 .287.91l-5.81 4.07a.5.5 0 0 0-.188.568l2.227 6.607a.5.5 0 0 1-.76.569l-5.883-4.12a.5.5 0 0 0-.574 0l-5.883 4.12a.5.5 0 0 1-.76-.57l2.227-6.606a.5.5 0 0 0-.187-.569l-5.811-4.07a.5.5 0 0 1 .287-.909h7.222a.5.5 0 0 0 .474-.34l2.244-6.658Z",
        }),
        "Star",
      );
      var J = r(31265),
        Q = r(85858),
        ee = r(92270);
      const te = (0, ee.i)((e) => ({
          newsMeta: (0, m.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }),
          newsMetaItem: (0, m.iv)({
            margin: "0 5px",
            "&:first-child": (0, j.oI)(0),
            "&:last-child": (0, j.wz)(0),
            "> span": { lineHeight: "inherit" },
          }),
          sep: (0, m.iv)({ width: 1, height: 12, background: e.textSecondary }),
          star: (0, m.iv)((0, j.wz)(5), { color: e.textSecondary }),
        })),
        re = ({ date: e, hasStar: t, tags: r }) => {
          const a = te(),
            l = (0, d.useLocalizationMessages)(),
            o = (r && r.split(",")) || null;
          return n().createElement(
            "div",
            { "data-testid": "NewsItemMeta" },
            n().createElement(
              "div",
              { className: a.newsMeta },
              t &&
                n().createElement(
                  "div",
                  { className: (0, m.cx)(a.newsMetaItem, a.star) },
                  n().createElement(G, null),
                ),
              o &&
                o.map((e) =>
                  n().createElement(
                    n().Fragment,
                    null,
                    n().createElement(
                      "div",
                      { key: e, className: a.newsMetaItem },
                      n().createElement(J.Z, { textLevel: Q.N.SECONDARY }, e),
                    ),
                    n().createElement("div", {
                      className: (0, m.cx)(a.newsMetaItem, a.sep),
                    }),
                  ),
                ),
              n().createElement(
                "div",
                { className: a.newsMetaItem },
                n().createElement(
                  J.Z,
                  { textLevel: Q.N.SECONDARY },
                  (0, V.SY)(e, l),
                ),
              ),
            ),
          );
        };
      var ae = r(93026),
        ne = r(92954),
        le = Object.defineProperty,
        oe = Object.getOwnPropertySymbols,
        ie = Object.prototype.hasOwnProperty,
        se = Object.prototype.propertyIsEnumerable,
        ce = (e, t, r) =>
          t in e
            ? le(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        me = (e, t) => {
          for (var r in t || (t = {})) ie.call(t, r) && ce(e, r, t[r]);
          if (oe) for (var r of oe(t)) se.call(t, r) && ce(e, r, t[r]);
          return e;
        };
      const de = (0, m.iv)({
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }),
        pe = (0, m.iv)({ display: "flex" }),
        ue = (0, m.iv)({ marginBottom: 5 }),
        ve = (0, m.iv)({ margin: "14px 0" }),
        ge = (0, m.iv)({ display: "inline-flex", alignItems: "flex-end" }),
        fe = (e) =>
          (0, m.iv)(
            me(
              {
                color: (0, g.$)(e) ? ne.ix : ne.Sn,
                [`& .${ge}`]: {
                  borderBottom: `1px solid ${(0, g.$)(e) ? ne.tL : ne.QL}`,
                  transition: "all ease 0.5s",
                  "&:hover": { borderColor: (0, g.$)(e) ? ne.ix : ne.Sn },
                },
                [ae.Uc.xs]: { marginTop: 15 },
                marginTop: "auto",
              },
              (0, j.wz)("auto"),
            ),
          ),
        be = (0, m.iv)(me({ marginBottom: 3 }, (0, j.oI)(3)));
      var Ee = r(17654),
        ye = r(72668),
        he = r(58532),
        we = r(75420);
      const xe = ({
        title: e,
        short: t,
        slug: r,
        sticky: n,
        linkUrl: l,
        ctaLabel: o,
        externalLink: i,
        date: s,
        tags: c,
        isPromoCard: m = !1,
      }) => {
        const d = (0, _.Z)(),
          p = !m && n;
        return a.createElement(
          "div",
          { className: de },
          a.createElement(
            "div",
            { className: ue, "data-testid": "news-item-meta" },
            a.createElement(re, { date: s, hasStar: p, tags: c }),
          ),
          e &&
            a.createElement(
              "h2",
              { id: m ? r : "" },
              a.createElement(
                we.Z,
                { to: l, ariaLabelledby: r, className: pe },
                a.createElement(
                  Ee.ZP,
                  { textLevel: Q.N.PRIMARY, weight: Ee.G0.BOLD },
                  m ? e : a.createElement(he.Z, { lines: 3, text: e }),
                ),
              ),
            ),
          t &&
            a.createElement(
              "div",
              { className: ve },
              a.createElement(
                Ee.ZP,
                { textLevel: Q.N.SECONDARY },
                m ? t : a.createElement(he.Z, { lines: 5, text: t }),
              ),
            ),
          o &&
            a.createElement(
              we.Z,
              { className: fe(d), to: l, ariaLabel: o, rel: "nofollow" },
              a.createElement(
                "span",
                { className: ge },
                o,
                i &&
                  a.createElement(ye.Z, {
                    icon: H.kf.EXTERNAL_LINK,
                    size: H.J7.XXXSMALL,
                    className: be,
                  }),
              ),
            ),
        );
      };
      var Oe = r(23752),
        Le = r(21650),
        Ie = r(87690),
        Ne = r(91575),
        Pe = Object.defineProperty,
        je = Object.defineProperties,
        Se = Object.getOwnPropertyDescriptors,
        ke = Object.getOwnPropertySymbols,
        Ze = Object.prototype.hasOwnProperty,
        De = Object.prototype.propertyIsEnumerable,
        Ae = (e, t, r) =>
          t in e
            ? Pe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ce = (e, t) => {
          for (var r in t || (t = {})) Ze.call(t, r) && Ae(e, r, t[r]);
          if (ke) for (var r of ke(t)) De.call(t, r) && Ae(e, r, t[r]);
          return e;
        },
        ze = (e, t) => je(e, Se(t));
      const Re = (0, m.iv)(
          ze(Ce({ width: "100%" }, (0, j.wz)(20)), {
            padding: 0,
            position: "relative",
            "&:last-child": (0, j.wz)(0),
            [ae.Uc.xs]: Ce({ marginBottom: 20 }, (0, j.wz)(0)),
            "& > div": { height: "100%" },
          }),
        ),
        _e = {
          rowWrapper: (e) =>
            (0, m.iv)({
              display: "flex",
              color: (0, g.$)(e) ? ne.ix : ne.Sn,
              flexDirection: "column",
              height: "100%",
              flex: 1,
            }),
          imageWrapper: (0, m.iv)(
            ze(
              Ce(
                {
                  position: "relative",
                  borderRadius: Le.E0,
                  overflow: "hidden",
                },
                (0, Oe.fF)(Oe.oM.x16x9),
              ),
              {
                "&::after": {
                  content: "''",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: "block",
                  background: `linear-gradient(0deg, ${ne.tL}, ${ne.tL})`,
                  transition: "all ease 0.5s",
                  opacity: 0,
                  zIndex: 3,
                },
                "&:hover::after": { opacity: 1 },
              },
            ),
          ),
          content: (0, m.iv)({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }),
          headerWrapper: (0, m.iv)({ display: "flex", flex: 1, marginTop: 15 }),
        },
        Me = ({
          date: e,
          title: t,
          short: r,
          slug: a,
          url: l,
          cta: o,
          tags: i,
          renderMain: s,
          externalLink: c,
        }) => {
          const m = (0, f.y)();
          return n().createElement(
            "div",
            { className: Re },
            n().createElement(
              Ne.mJ,
              {
                event: {
                  eventAction: Ne.DI.NEWS_CLICK,
                  eventLabel: l,
                  eventValue: (0, Ie.Z)({
                    module: "news",
                    moduleId: "promo_feed",
                  }),
                },
              },
              n().createElement(
                "div",
                { className: _e.rowWrapper(m) },
                n().createElement(
                  we.Z,
                  { to: l, ariaLabelledby: a, rel: "nofollow" },
                  n().createElement(
                    "div",
                    { className: _e.imageWrapper },
                    n().createElement("div", { className: _e.content }, s()),
                  ),
                ),
                n().createElement(
                  "div",
                  { className: _e.headerWrapper },
                  n().createElement(xe, {
                    title: t,
                    short: r,
                    slug: a,
                    date: e,
                    externalLink: c,
                    ctaLabel: o,
                    linkUrl: l,
                    tags: i,
                    isPromoCard: !0,
                  }),
                ),
              ),
            ),
          );
        },
        Ue = {
          image: (0, m.iv)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
          videoContainer: (0, m.iv)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
        },
        $e = ({ date: e, title: t, button: r, srcSet: l, video: o }) => {
          const { text: i, url: s } = r,
            c = (0, F.dD)(),
            m = (0, d.useLocalization)()("diesel.main.home.sections.featured");
          return n().createElement(Me, {
            url: s,
            date: e,
            title: t,
            cta: i,
            renderMain: () => {
              const e =
                l &&
                ((0, V.K3)(l[H.js.HORIZONTAL]) || (0, V.K3)(l[H.js.VERTICAL]));
              return n().createElement(
                a.Fragment,
                null,
                o && !c
                  ? n().createElement(
                      "div",
                      { className: Ue.videoContainer },
                      n().createElement(q.Z, {
                        contentId: o.contentId,
                        sources: o.sources,
                        autoplay: !0,
                        loop: !0,
                        hasControls: !1,
                        title: t,
                        type: o.type,
                        poster: e,
                      }),
                    )
                  : l
                    ? n().createElement(K.Z, {
                        className: Ue.image,
                        srcSet: {
                          [Y.L.XSMALL]: (0, V.K3)(l[H.js.VERTICAL]),
                          [Y.L.LARGE]: (0, V.K3)(l[H.js.HORIZONTAL]),
                        },
                      })
                    : null,
              );
            },
            tags: m,
          });
        };
      var Be = r(42723),
        We = r.n(Be);
      const Te = ({ url: e, externalLink: t }) => {
          if (t) return t;
          const r = `${We().appContext}${e}`;
          return (0, s.generateRoutePath)(r);
        },
        Fe = (0, m.iv)({
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }),
        Xe = ({
          shareImage: e,
          trendingImage: t,
          trendingImageAlt: r,
          date: n,
          title: l,
          short: o,
          slug: i,
          url: s,
          tags: c,
          externalLink: m,
        }) => {
          const p = (0, d.useLocalization)(),
            u = V.qU.RATIO_16X9_480,
            v = e || t,
            g = v ? { [H.AV.name.XSMALL]: (0, V.fp)(v, u) } : null,
            f = p(
              s.includes("/p/") || s.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            );
          return a.createElement(Me, {
            url: Te({ url: s, externalLink: m }),
            date: n,
            slug: i,
            title: l,
            short: o,
            cta: f,
            externalLink: m,
            renderMain: () =>
              g
                ? a.createElement(K.Z, { title: r, className: Fe, srcSet: g })
                : null,
            tags: c,
          });
        };
      var Ke = Object.defineProperty,
        He = Object.getOwnPropertySymbols,
        Ye = Object.prototype.hasOwnProperty,
        Ve = Object.prototype.propertyIsEnumerable,
        qe = (e, t, r) =>
          t in e
            ? Ke(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ge = (e, t) => {
          for (var r in t || (t = {})) Ye.call(t, r) && qe(e, r, t[r]);
          if (He) for (var r of He(t)) Ve.call(t, r) && qe(e, r, t[r]);
          return e;
        };
      const Je = {
          wrapper: (0, m.iv)({
            display: "flex",
            justifyContent: "space-between",
            [v.Uc.xs]: { flexDirection: "column" },
          }),
        },
        Qe = ({ items: e }) =>
          a.createElement(
            "div",
            { className: Je.wrapper },
            e.map((e) => {
              const { type: t } = e;
              return t === X.ProductSectionType.HERO
                ? a.createElement($e, Ge({ key: t }, e))
                : a.createElement(Xe, Ge({ key: e.id }, e));
            }),
          );
      var et = r(66273),
        tt = r(25185),
        rt = Object.defineProperty,
        at = Object.getOwnPropertySymbols,
        nt = Object.prototype.hasOwnProperty,
        lt = Object.prototype.propertyIsEnumerable,
        ot = (e, t, r) =>
          t in e
            ? rt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        it = (e, t) => {
          for (var r in t || (t = {})) nt.call(t, r) && ot(e, r, t[r]);
          if (at) for (var r of at(t)) lt.call(t, r) && ot(e, r, t[r]);
          return e;
        };
      const st = {
          slider: (0, m.iv)({ overflow: "visible !important" }),
          slideItem: (0, m.iv)((0, j.oI)(10), { width: "calc(100% - 10px)" }),
          firstSlideItem: (0, m.iv)((0, j.oI)(0)),
        },
        ct = ({ items: e }) => {
          const t = (0, F.Su)(),
            r = e.map((e, t) => {
              const r = (0, m.cx)(st.slideItem, {
                  [st.firstSlideItem]: 0 === t,
                }),
                { type: n } = e;
              return n === X.ProductSectionType.HERO
                ? a.createElement(
                    "div",
                    { className: r, key: n },
                    a.createElement($e, it({ key: n }, e)),
                  )
                : a.createElement(
                    "div",
                    { className: r, key: e.id },
                    a.createElement(Xe, it({}, e)),
                  );
            }),
            { activeIndex: n, changeIndex: l } = (0, tt.Z)({
              initialIndex: 0,
              slidesLength: r.length,
              beforeChange: () => {},
            });
          return a.createElement(
            et.Z,
            { className: st.slider, changeIndex: l, index: n, isRTL: t },
            r,
          );
        },
        mt = {
          promoSection: (0, m.iv)({
            marginBottom: 60,
            [v.Uc.maxWidth]: { marginLeft: 10, marginRight: 10 },
          }),
        },
        dt = ({ items: e }) => {
          const t = (0, F.dD)();
          return a.createElement(
            "div",
            { className: mt.promoSection, "data-testid": "feed-promo" },
            t
              ? a.createElement(ct, { items: e })
              : a.createElement(Qe, { items: e }),
          );
        };
      var pt = r(71535),
        ut = r(43653),
        vt = r.n(ut),
        gt = r(72051);
      const ft = (e = "en-US") => {
        return (
          (t = void 0),
          (r = null),
          (a = function* () {
            var t;
            try {
              const t = yield vt().get(
                gt.X.contentServiceUrl(`${e}/content/blog/root`),
              );
              return (t && t.data) || { code: 204 };
            } catch (e) {
              if (404 === (null == (t = e.response) ? void 0 : t.status))
                return { code: 404 };
              throw (
                (console.error("Failed to get diesel home page %s", e.message),
                console.error(e),
                e)
              );
            }
          }),
          new Promise((e, n) => {
            var l = (e) => {
                try {
                  i(a.next(e));
                } catch (e) {
                  n(e);
                }
              },
              o = (e) => {
                try {
                  i(a.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              i = (t) =>
                t.done ? e(t.value) : Promise.resolve(t.value).then(l, o);
            i((a = a.apply(t, r)).next());
          })
        );
        var t, r, a;
      };
      var bt = Object.defineProperty,
        Et = Object.defineProperties,
        yt = Object.getOwnPropertyDescriptors,
        ht = Object.getOwnPropertySymbols,
        wt = Object.prototype.hasOwnProperty,
        xt = Object.prototype.propertyIsEnumerable,
        Ot = (e, t, r) =>
          t in e
            ? bt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Lt = (e) => {
        var t;
        const r = (0, d.useLocalizationLocale)(),
          a = (0, pt.aM)(
            `news-page::${r}`,
            () => ft(r),
            ((l = ((e, t) => {
              for (var r in t || (t = {})) wt.call(t, r) && Ot(e, r, t[r]);
              if (ht) for (var r of ht(t)) xt.call(t, r) && Ot(e, r, t[r]);
              return e;
            })({}, e)),
            (o = {
              enabled: null != (t = null == e ? void 0 : e.enabled) ? t : !!r,
            }),
            Et(l, yt(o))),
          ),
          { data: n } = a;
        var l, o;
        return {
          newsPage: n,
          query: ((e, t) => {
            var r = {};
            for (var a in e) wt.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
            if (null != e && ht)
              for (var a of ht(e))
                t.indexOf(a) < 0 && xt.call(e, a) && (r[a] = e[a]);
            return r;
          })(a, ["data"]),
        };
      };
      var It = r(79394),
        Nt = r(33055),
        Pt = Object.defineProperty,
        jt = Object.getOwnPropertySymbols,
        St = Object.prototype.hasOwnProperty,
        kt = Object.prototype.propertyIsEnumerable,
        Zt = (e, t, r) =>
          t in e
            ? Pt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Dt = () => {
        const e = (0, d.useLocalization)(),
          { newsPage: t } = Lt();
        return (null == t ? void 0 : t.meta)
          ? n().createElement(
              It.Z,
              ((e, t) => {
                for (var r in t || (t = {})) St.call(t, r) && Zt(e, r, t[r]);
                if (jt) for (var r of jt(t)) kt.call(t, r) && Zt(e, r, t[r]);
                return e;
              })({}, (0, Nt.S)(e, t.meta)),
            )
          : null;
      };
      var At = r(43989),
        Ct = r(43146),
        zt = r(42925),
        Rt = Object.defineProperty,
        _t = Object.defineProperties,
        Mt = Object.getOwnPropertyDescriptors,
        Ut = Object.getOwnPropertySymbols,
        $t = Object.prototype.hasOwnProperty,
        Bt = Object.prototype.propertyIsEnumerable,
        Wt = (e, t, r) =>
          t in e
            ? Rt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Tt = (e, t) => {
          for (var r in t || (t = {})) $t.call(t, r) && Wt(e, r, t[r]);
          if (Ut) for (var r of Ut(t)) Bt.call(t, r) && Wt(e, r, t[r]);
          return e;
        },
        Ft = (e, t) => _t(e, Mt(t));
      const Xt = (0, ee.i)((e) => ({
          item: (0, m.iv)({
            width: "100%",
            marginTop: 0,
            position: "relative",
          }),
          link: (0, m.iv)(
            Ft(Tt({}, (0, zt.Bt)(e)), {
              display: "flex",
              [v.Uc.xs]: { flexDirection: "column" },
              border: "1px solid transparent",
            }),
          ),
          rowWrapper: (0, m.iv)({
            display: "flex",
            [v.Uc.xs]: { flexDirection: "column" },
          }),
          linkWrapper: (0, m.iv)((0, j.wz)(20)),
          imageWrapper: (0, m.iv)({
            position: "relative",
            borderRadius: v.E0,
            overflow: "hidden",
            "&::after": {
              content: "''",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: "block",
              background: `linear-gradient(0deg, ${v.tL}, ${v.tL})`,
              transition: "all ease 0.5s",
              opacity: 0,
            },
            "&:hover::after": { opacity: 1 },
            [v.Uc.xs]: Ft(Tt({}, (0, j.wz)(0)), { marginBottom: 10 }),
          }),
          image: (0, m.iv)({
            position: "relative",
            width: 200,
            display: "block",
            [v.Uc.xs]: { width: "100%" },
            background: e.level1,
          }),
        })),
        Kt = ({
          shareImage: e,
          trendingImage: t,
          trendingImageAlt: r,
          date: n,
          title: l,
          slug: o,
          url: i,
          tags: s,
          sticky: c,
          externalLink: m,
          index: p = 0,
          short: u,
        }) => {
          const g = (0, d.useLocalization)(),
            f = Xt(),
            b = (0, V.fp)(e || t, V.qU.RATIO_16X9_320),
            E = g(
              i.includes("/p/") || i.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            ),
            y = Te({ url: i, externalLink: m });
          return a.createElement(
            "article",
            { className: f.item },
            a.createElement(
              Ne.mJ,
              {
                event: {
                  eventAction: Ne.DI.NEWS_CLICK,
                  eventLabel: y,
                  eventValue: (0, Ie.Z)({
                    module: "news",
                    moduleId: "feed",
                    position: p,
                  }),
                },
              },
              a.createElement(
                "div",
                { className: f.rowWrapper },
                a.createElement(
                  "div",
                  { className: f.linkWrapper },
                  a.createElement(
                    we.Z,
                    { to: y, ariaLabelledby: o, rel: "nofollow" },
                    a.createElement(
                      "div",
                      { className: f.imageWrapper },
                      a.createElement(
                        "div",
                        { className: f.image },
                        a.createElement(
                          At.Z,
                          { aspectRatio: v.oM.x16x9 },
                          a.createElement(Ct.w, {
                            src: b,
                            alt: r || l,
                            showBrokenOnError: !0,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                a.createElement(xe, {
                  title: l,
                  short: u,
                  slug: o,
                  sticky: c,
                  date: n,
                  externalLink: m,
                  ctaLabel: E,
                  linkUrl: y,
                  tags: s,
                }),
              ),
            ),
          );
        };
      var Ht = Object.defineProperty,
        Yt = Object.defineProperties,
        Vt = Object.getOwnPropertyDescriptors,
        qt = Object.getOwnPropertySymbols,
        Gt = Object.prototype.hasOwnProperty,
        Jt = Object.prototype.propertyIsEnumerable,
        Qt = (e, t, r) =>
          t in e
            ? Ht(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const er = ({ feedItem: e, index: t }) => {
        return a.createElement(
          Kt,
          ((r = ((e, t) => {
            for (var r in t || (t = {})) Gt.call(t, r) && Qt(e, r, t[r]);
            if (qt) for (var r of qt(t)) Jt.call(t, r) && Qt(e, r, t[r]);
            return e;
          })({}, e)),
          Yt(r, Vt({ index: t }))),
        );
        var r;
      };
      var tr = r(6232),
        rr = r(13405);
      const ar = (0, ee.i)(() => ({
          wrapper: (0, m.iv)({ paddingBottom: 16 }),
          listItems: (0, m.iv)({
            borderTop: `1px solid ${v.tL}`,
            paddingTop: 20,
            "&:not(:last-child)": {
              marginBottom: 30,
              [rr.Uc[rr.Uo.xxl]]: { marginBottom: 20 },
            },
          }),
        })),
        nr = n().memo(({ data: e, feedPromoItems: t }) => {
          const r = ar(),
            a = e.length || (null == t ? void 0 : t.length),
            l = n().createElement(
              "div",
              { className: r.wrapper },
              n().createElement(P, null),
              t && t.length > 0 && n().createElement(dt, { items: t }),
              e.length &&
                n().createElement(
                  n().Fragment,
                  null,
                  n().createElement(Dt, null),
                  n().createElement(
                    "div",
                    { "data-testid": "feed-items-list" },
                    n().createElement(
                      tr.a,
                      { data: e, itemClassName: r.listItems },
                      (e, t) =>
                        n().createElement(er, { feedItem: e, index: t }),
                    ),
                  ),
                ),
            );
          return a ? l : n().createElement(P, null);
        });
      var lr = r(35934),
        or = r(93844),
        ir = r(60353);
      const { selector: sr } = (0, ir.F)({
          name: "news-pagination",
          defaultConfig: { pageSize: 10 },
        }),
        cr = (e, t, r) => {
          t.set("page", String(r)),
            e.push({ search: String(t), pathname: "news" });
        },
        mr = () => {
          const e = (0, T.useHistory)(),
            { pageSize: t } = (0, c.useSelector)(sr),
            { search: r } = (0, T.useLocation)(),
            l = new URLSearchParams(r),
            o = l.get("page"),
            i = Boolean(o),
            s = i ? Number(o) : 1,
            m = cr.bind(null, e, l),
            p = (0, a.useCallback)(
              (e) => {
                m(e);
              },
              [m],
            ),
            u = 1 === s,
            {
              blogList: v,
              stickyPosts: g,
              paging: f,
            } = ((e, t) => {
              var r, a;
              const n = (0, d.useLocalizationLocale)(),
                l = (0, B.stringify)((0, W.Z)((e) => !!e, { locale: n })),
                o = (0, B.stringify)(
                  (0, W.Z)((e) => !!e, { count: t, locale: n, start: e * t }),
                ),
                i =
                  null == (r = (0, $.Z)({ path: `content/blog/sticky?${l}` }))
                    ? void 0
                    : r.data,
                s =
                  null == (a = (0, $.Z)({ path: `content/blog-posts?${o}` }))
                    ? void 0
                    : a.data;
              return {
                blogList: (null == s ? void 0 : s.elements) || [],
                stickyPosts: i || [],
                paging: null == s ? void 0 : s.paging,
              };
            })(s - 1, t),
            { data: b, feedPromoItems: E } = (0, a.useMemo)(
              () => (0, or.s$)(v, g, u),
              [v, g, u],
            ),
            y = (null == f ? void 0 : f.total) ? Math.ceil(f.total / t) : 0,
            h = y && y > 1;
          return (
            y < s && m(y),
            ((s < 1 && i) || isNaN(s)) && m(1),
            n().createElement(
              n().Fragment,
              null,
              n().createElement(nr, { data: b, feedPromoItems: E }),
              h
                ? n().createElement(lr.Z, {
                    totalPages: y,
                    page: s,
                    itemsPerPage: t,
                    onChange: (e, t) => {
                      p(t);
                    },
                  })
                : null,
            )
          );
        },
        dr = {
          content: (0, m.iv)({
            [v.Uc.md]: { flexDirection: "row" },
            display: "flex",
            flexDirection: "column-reverse",
            position: "relative",
            [v.Uc.underMd]: { overflowX: "hidden" },
          }),
          innerWrapper: (0, m.iv)({ flexGrow: 1 }),
        },
        pr = ({ children: e }) =>
          n().createElement(
            "div",
            { className: dr.content },
            n().createElement("div", { className: dr.innerWrapper }, e),
          );
      var ur = r(24668),
        vr = r(14058),
        gr = r(90783),
        fr = r(77915),
        br = Object.defineProperty,
        Er = Object.getOwnPropertySymbols,
        yr = Object.prototype.hasOwnProperty,
        hr = Object.prototype.propertyIsEnumerable,
        wr = (e, t, r) =>
          t in e
            ? br(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const xr = {
          news: (0, m.iv)({ "&.title": { fontSize: 24, margin: "10px 0" } }),
        },
        Or = () => {
          const e = (0, c.useSelector)(u.$u),
            t = (0, d.useLocalization)(),
            { newsPage: r } = Lt({ enabled: e });
          return e
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  It.Z,
                  ((e, t) => {
                    for (var r in t || (t = {}))
                      yr.call(t, r) && wr(e, r, t[r]);
                    if (Er)
                      for (var r of Er(t)) hr.call(t, r) && wr(e, r, t[r]);
                    return e;
                  })({}, (0, Nt.S)(t, r.meta)),
                ),
                a.createElement(mr, null),
              )
            : a.createElement(ur.Z, { type: H.aB.OFFLINE });
        },
        Lr = () =>
          a.createElement(
            gr.Z,
            null,
            a.createElement(
              fr.Yn,
              null,
              a.createElement(
                pr,
                null,
                a.createElement(
                  vr.Z,
                  { className: xr.news },
                  a.createElement(
                    p.n4,
                    {
                      fallback: a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(P, null),
                        a.createElement(U, null),
                      ),
                    },
                    a.createElement(Or, null),
                  ),
                ),
              ),
            ),
          ),
        Ir = () =>
          (0, o.Z)(["/home"])
            ? n().createElement(i.y, {
                to: (0, s.generateRoutePath)("/news"),
                "data-testid": "redirect-to-news",
              })
            : n().createElement(l.Z, null, n().createElement(Lr, null));
    },
  },
]);
//# sourceMappingURL=NewsView.egstore-site.151b49abd8eaec10bdd5.js.map
