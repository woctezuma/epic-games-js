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
        c = r(77915),
        m = r(14058),
        d = r(24668),
        p = r(10035),
        u = r(11003),
        v = r(67526),
        g = r(32042);
      var f = r(22538),
        b = r(28901),
        E = r(29498),
        y = r(43651),
        h = r(61651);
      const w = (0, r(96685).L)(
        a.createElement("path", {
          d: "M11.526 1.405a.5.5 0 0 1 .948 0l2.244 6.658a.5.5 0 0 0 .474.34h7.222a.5.5 0 0 1 .287.91l-5.81 4.07a.5.5 0 0 0-.188.568l2.227 6.607a.5.5 0 0 1-.76.569l-5.883-4.12a.5.5 0 0 0-.574 0l-5.883 4.12a.5.5 0 0 1-.76-.57l2.227-6.606a.5.5 0 0 0-.187-.569l-5.811-4.07a.5.5 0 0 1 .287-.909h7.222a.5.5 0 0 0 .474-.34l2.244-6.658Z",
        }),
        "Star",
      );
      var x = r(31265),
        O = r(85858),
        L = r(92270),
        I = r(34272),
        N = r(79546);
      const P = (0, L.i)((e) => ({
          newsMeta: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }),
          newsMetaItem: (0, b.iv)({
            margin: "0 5px",
            "&:first-child": (0, I.oI)(0),
            "&:last-child": (0, I.wz)(0),
            "> span": { lineHeight: "inherit" },
          }),
          sep: (0, b.iv)({ width: 1, height: 12, background: e.textSecondary }),
          star: (0, b.iv)((0, I.wz)(5), { color: e.textSecondary }),
        })),
        j = ({ date: e, hasStar: t, tags: r }) => {
          const a = P(),
            l = (0, p.useLocalizationMessages)(),
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
                  { className: (0, b.cx)(a.newsMetaItem, a.star) },
                  n().createElement(w, null),
                ),
              o &&
                o.map((e) =>
                  n().createElement(
                    n().Fragment,
                    null,
                    n().createElement(
                      "div",
                      { key: e, className: a.newsMetaItem },
                      n().createElement(x.Z, { textLevel: O.N.SECONDARY }, e),
                    ),
                    n().createElement("div", {
                      className: (0, b.cx)(a.newsMetaItem, a.sep),
                    }),
                  ),
                ),
              n().createElement(
                "div",
                { className: a.newsMetaItem },
                n().createElement(
                  x.Z,
                  { textLevel: O.N.SECONDARY },
                  (0, N.SY)(e, l),
                ),
              ),
            ),
          );
        };
      var S = r(93026),
        k = r(92954),
        Z = r(72420),
        D = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        z = Object.prototype.propertyIsEnumerable,
        R = (e, t, r) =>
          t in e
            ? D(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        _ = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && R(e, r, t[r]);
          if (A) for (var r of A(t)) z.call(t, r) && R(e, r, t[r]);
          return e;
        };
      const M = (0, b.iv)({
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }),
        U = (0, b.iv)({ display: "flex" }),
        $ = (0, b.iv)({ marginBottom: 5 }),
        B = (0, b.iv)({ margin: "14px 0" }),
        W = (0, b.iv)({ display: "inline-flex", alignItems: "flex-end" }),
        T = (e) =>
          (0, b.iv)(
            _(
              {
                color: (0, Z.$)(e) ? k.ix : k.Sn,
                [`& .${W}`]: {
                  borderBottom: `1px solid ${(0, Z.$)(e) ? k.tL : k.QL}`,
                  transition: "all ease 0.5s",
                  "&:hover": { borderColor: (0, Z.$)(e) ? k.ix : k.Sn },
                },
                [S.Uc.xs]: { marginTop: 15 },
                marginTop: "auto",
              },
              (0, I.wz)("auto"),
            ),
          ),
        F = (0, b.iv)(_({ marginBottom: 3 }, (0, I.oI)(3)));
      var X = r(17654),
        K = r(72668),
        H = r(58532),
        Y = r(37817),
        V = r(87869),
        q = r(7301);
      const G = ({
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
        const d = (0, q.Z)(),
          p = !m && n;
        return a.createElement(
          "div",
          { className: M },
          a.createElement(
            "div",
            { className: $, "data-testid": "news-item-meta" },
            a.createElement(j, { date: s, hasStar: p, tags: c }),
          ),
          e &&
            a.createElement(
              "h2",
              { id: m ? r : "" },
              a.createElement(
                Y.Z,
                { to: l, ariaLabelledby: r, className: U },
                a.createElement(
                  X.ZP,
                  { textLevel: O.N.PRIMARY, weight: X.G0.BOLD },
                  m ? e : a.createElement(H.Z, { lines: 3, text: e }),
                ),
              ),
            ),
          t &&
            a.createElement(
              "div",
              { className: B },
              a.createElement(
                X.ZP,
                { textLevel: O.N.SECONDARY },
                m ? t : a.createElement(H.Z, { lines: 5, text: t }),
              ),
            ),
          o &&
            a.createElement(
              Y.Z,
              { className: T(d), to: l, ariaLabel: o, rel: "nofollow" },
              a.createElement(
                "span",
                { className: W },
                o,
                i &&
                  a.createElement(K.Z, {
                    icon: V.kf.EXTERNAL_LINK,
                    size: V.J7.XXXSMALL,
                    className: F,
                  }),
              ),
            ),
        );
      };
      var J = r(23752),
        Q = r(21650),
        ee = r(87690),
        te = r(71630),
        re = r(91575),
        ae = Object.defineProperty,
        ne = Object.defineProperties,
        le = Object.getOwnPropertyDescriptors,
        oe = Object.getOwnPropertySymbols,
        ie = Object.prototype.hasOwnProperty,
        se = Object.prototype.propertyIsEnumerable,
        ce = (e, t, r) =>
          t in e
            ? ae(e, t, {
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
        },
        de = (e, t) => ne(e, le(t));
      const pe = (0, b.iv)(
          de(me({ width: "100%" }, (0, I.wz)(20)), {
            padding: 0,
            position: "relative",
            "&:last-child": (0, I.wz)(0),
            [S.Uc.xs]: me({ marginBottom: 20 }, (0, I.wz)(0)),
            "& > div": { height: "100%" },
          }),
        ),
        ue = {
          rowWrapper: (e) =>
            (0, b.iv)({
              display: "flex",
              color: (0, Z.$)(e) ? k.ix : k.Sn,
              flexDirection: "column",
              height: "100%",
              flex: 1,
            }),
          imageWrapper: (0, b.iv)(
            de(
              me(
                {
                  position: "relative",
                  borderRadius: Q.E0,
                  overflow: "hidden",
                },
                (0, J.fF)(J.oM.x16x9),
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
                  background: `linear-gradient(0deg, ${k.tL}, ${k.tL})`,
                  transition: "all ease 0.5s",
                  opacity: 0,
                  zIndex: 3,
                },
                "&:hover::after": { opacity: 1 },
              },
            ),
          ),
          content: (0, b.iv)({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }),
          headerWrapper: (0, b.iv)({ display: "flex", flex: 1, marginTop: 15 }),
        },
        ve = ({
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
          const m = (0, te.y)();
          return n().createElement(
            "div",
            { className: pe },
            n().createElement(
              re.mJ,
              {
                event: {
                  eventAction: re.DI.NEWS_CLICK,
                  eventLabel: l,
                  eventValue: (0, ee.Z)({
                    module: "news",
                    moduleId: "promo_feed",
                  }),
                },
              },
              n().createElement(
                "div",
                { className: ue.rowWrapper(m) },
                n().createElement(
                  Y.Z,
                  { to: l, ariaLabelledby: a, rel: "nofollow" },
                  n().createElement(
                    "div",
                    { className: ue.imageWrapper },
                    n().createElement("div", { className: ue.content }, s()),
                  ),
                ),
                n().createElement(
                  "div",
                  { className: ue.headerWrapper },
                  n().createElement(G, {
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
        };
      var ge = r(42723),
        fe = r.n(ge);
      const be = ({ url: e, externalLink: t }) => {
        if (t) return t;
        const r = `${fe().appContext}${e}`;
        return (0, s.generateRoutePath)(r);
      };
      var Ee = r(98095);
      const ye = (0, b.iv)({
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }),
        he = ({
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
          const d = (0, p.useLocalization)(),
            u = N.qU.RATIO_16X9_480,
            v = e || t,
            g = v ? { [V.AV.name.XSMALL]: (0, N.fp)(v, u) } : null,
            f = d(
              s.includes("/p/") || s.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            );
          return a.createElement(ve, {
            url: be({ url: s, externalLink: m }),
            date: n,
            slug: i,
            title: l,
            short: o,
            cta: f,
            externalLink: m,
            renderMain: () =>
              g
                ? a.createElement(Ee.Z, { title: r, className: ye, srcSet: g })
                : null,
            tags: c,
          });
        };
      var we = r(10567),
        xe = r(65067);
      const Oe = {
          image: (0, b.iv)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
          videoContainer: (0, b.iv)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
        },
        Le = ({ date: e, title: t, button: r, srcSet: l, video: o }) => {
          const { text: i, url: s } = r,
            c = (0, y.dD)(),
            m = (0, p.useLocalization)()("diesel.main.home.sections.featured");
          return n().createElement(ve, {
            url: s,
            date: e,
            title: t,
            cta: i,
            renderMain: () => {
              const e =
                l &&
                ((0, N.K3)(l[V.js.HORIZONTAL]) || (0, N.K3)(l[V.js.VERTICAL]));
              return n().createElement(
                a.Fragment,
                null,
                o && !c
                  ? n().createElement(
                      "div",
                      { className: Oe.videoContainer },
                      n().createElement(xe.Z, {
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
                    ? n().createElement(Ee.Z, {
                        className: Oe.image,
                        srcSet: {
                          [we.L.XSMALL]: (0, N.K3)(l[V.js.VERTICAL]),
                          [we.L.LARGE]: (0, N.K3)(l[V.js.HORIZONTAL]),
                        },
                      })
                    : null,
              );
            },
            tags: m,
          });
        };
      var Ie = Object.defineProperty,
        Ne = Object.getOwnPropertySymbols,
        Pe = Object.prototype.hasOwnProperty,
        je = Object.prototype.propertyIsEnumerable,
        Se = (e, t, r) =>
          t in e
            ? Ie(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ke = (e, t) => {
          for (var r in t || (t = {})) Pe.call(t, r) && Se(e, r, t[r]);
          if (Ne) for (var r of Ne(t)) je.call(t, r) && Se(e, r, t[r]);
          return e;
        };
      const Ze = {
          wrapper: (0, b.iv)({
            display: "flex",
            justifyContent: "space-between",
            [E.Uc.xs]: { flexDirection: "column" },
          }),
        },
        De = ({ items: e }) =>
          a.createElement(
            "div",
            { className: Ze.wrapper },
            e.map((e) => {
              const { type: t } = e;
              return t === h.ProductSectionType.HERO
                ? a.createElement(Le, ke({ key: t }, e))
                : a.createElement(he, ke({ key: e.id }, e));
            }),
          );
      var Ae = r(66273),
        Ce = r(25185),
        ze = Object.defineProperty,
        Re = Object.getOwnPropertySymbols,
        _e = Object.prototype.hasOwnProperty,
        Me = Object.prototype.propertyIsEnumerable,
        Ue = (e, t, r) =>
          t in e
            ? ze(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        $e = (e, t) => {
          for (var r in t || (t = {})) _e.call(t, r) && Ue(e, r, t[r]);
          if (Re) for (var r of Re(t)) Me.call(t, r) && Ue(e, r, t[r]);
          return e;
        };
      const Be = {
          slider: (0, b.iv)({ overflow: "visible !important" }),
          slideItem: (0, b.iv)((0, I.oI)(10), { width: "calc(100% - 10px)" }),
          firstSlideItem: (0, b.iv)((0, I.oI)(0)),
        },
        We = ({ items: e }) => {
          const t = (0, y.Su)(),
            r = e.map((e, t) => {
              const r = (0, b.cx)(Be.slideItem, {
                  [Be.firstSlideItem]: 0 === t,
                }),
                { type: n } = e;
              return n === h.ProductSectionType.HERO
                ? a.createElement(
                    "div",
                    { className: r, key: n },
                    a.createElement(Le, $e({ key: n }, e)),
                  )
                : a.createElement(
                    "div",
                    { className: r, key: e.id },
                    a.createElement(he, $e({}, e)),
                  );
            }),
            { activeIndex: n, changeIndex: l } = (0, Ce.Z)({
              initialIndex: 0,
              slidesLength: r.length,
              beforeChange: () => {},
            });
          return a.createElement(
            Ae.Z,
            { className: Be.slider, changeIndex: l, index: n, isRTL: t },
            r,
          );
        },
        Te = {
          promoSection: (0, b.iv)({
            marginBottom: 60,
            [E.Uc.maxWidth]: { marginLeft: 10, marginRight: 10 },
          }),
        },
        Fe = ({ items: e }) => {
          const t = (0, y.dD)();
          return a.createElement(
            "div",
            { className: Te.promoSection, "data-testid": "feed-promo" },
            t
              ? a.createElement(We, { items: e })
              : a.createElement(De, { items: e }),
          );
        };
      var Xe = r(71535),
        Ke = r(43653),
        He = r.n(Ke),
        Ye = r(72051);
      const Ve = (e = "en-US") => {
        return (
          (t = void 0),
          (r = null),
          (a = function* () {
            var t;
            try {
              const t = yield He().get(
                Ye.X.contentServiceUrl(`${e}/content/blog/root`),
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
      var qe = Object.defineProperty,
        Ge = Object.defineProperties,
        Je = Object.getOwnPropertyDescriptors,
        Qe = Object.getOwnPropertySymbols,
        et = Object.prototype.hasOwnProperty,
        tt = Object.prototype.propertyIsEnumerable,
        rt = (e, t, r) =>
          t in e
            ? qe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const at = (e) => {
        var t;
        const r = (0, p.useLocalizationLocale)(),
          a = (0, Xe.aM)(
            `news-page::${r}`,
            () => Ve(r),
            ((l = ((e, t) => {
              for (var r in t || (t = {})) et.call(t, r) && rt(e, r, t[r]);
              if (Qe) for (var r of Qe(t)) tt.call(t, r) && rt(e, r, t[r]);
              return e;
            })({}, e)),
            (o = {
              enabled: null != (t = null == e ? void 0 : e.enabled) ? t : !!r,
            }),
            Ge(l, Je(o))),
          ),
          { data: n } = a;
        var l, o;
        return {
          newsPage: n,
          query: ((e, t) => {
            var r = {};
            for (var a in e) et.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
            if (null != e && Qe)
              for (var a of Qe(e))
                t.indexOf(a) < 0 && tt.call(e, a) && (r[a] = e[a]);
            return r;
          })(a, ["data"]),
        };
      };
      var nt = r(79394),
        lt = r(33055),
        ot = Object.defineProperty,
        it = Object.getOwnPropertySymbols,
        st = Object.prototype.hasOwnProperty,
        ct = Object.prototype.propertyIsEnumerable,
        mt = (e, t, r) =>
          t in e
            ? ot(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const dt = () => {
        const e = (0, p.useLocalization)(),
          { newsPage: t } = at();
        return (null == t ? void 0 : t.meta)
          ? n().createElement(
              nt.Z,
              ((e, t) => {
                for (var r in t || (t = {})) st.call(t, r) && mt(e, r, t[r]);
                if (it) for (var r of it(t)) ct.call(t, r) && mt(e, r, t[r]);
                return e;
              })({}, (0, lt.S)(e, t.meta)),
            )
          : null;
      };
      var pt = r(35070),
        ut = r(84244),
        vt = Object.defineProperty,
        gt = Object.defineProperties,
        ft = Object.getOwnPropertyDescriptors,
        bt = Object.getOwnPropertySymbols,
        Et = Object.prototype.hasOwnProperty,
        yt = Object.prototype.propertyIsEnumerable,
        ht = (e, t, r) =>
          t in e
            ? vt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const wt = (e) => {
          return (0, b.iv)(
            ((t = ((e, t) => {
              for (var r in t || (t = {})) Et.call(t, r) && ht(e, r, t[r]);
              if (bt) for (var r of bt(t)) yt.call(t, r) && ht(e, r, t[r]);
              return e;
            })({}, E.cp.text12)),
            (r = {
              color: (0, Z.$)(e) ? E.ix : E.Sn,
              marginBottom: 10,
              [E.Uc.maxWidth]: { marginLeft: 10, marginRight: 10 },
            }),
            gt(t, ft(r))),
          );
          var t, r;
        },
        xt = () => {
          const e = (0, te.y)();
          return n().createElement(
            pt.Z,
            { className: wt(e), level: 1 },
            n().createElement(ut.v0, {
              code: "diesel.main.home.sections.news",
            }),
          );
        };
      var Ot = r(43989),
        Lt = r(43146),
        It = r(42925),
        Nt = Object.defineProperty,
        Pt = Object.defineProperties,
        jt = Object.getOwnPropertyDescriptors,
        St = Object.getOwnPropertySymbols,
        kt = Object.prototype.hasOwnProperty,
        Zt = Object.prototype.propertyIsEnumerable,
        Dt = (e, t, r) =>
          t in e
            ? Nt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        At = (e, t) => {
          for (var r in t || (t = {})) kt.call(t, r) && Dt(e, r, t[r]);
          if (St) for (var r of St(t)) Zt.call(t, r) && Dt(e, r, t[r]);
          return e;
        },
        Ct = (e, t) => Pt(e, jt(t));
      const zt = (0, L.i)((e) => ({
          item: (0, b.iv)({
            width: "100%",
            marginTop: 0,
            position: "relative",
          }),
          link: (0, b.iv)(
            Ct(At({}, (0, It.Bt)(e)), {
              display: "flex",
              [E.Uc.xs]: { flexDirection: "column" },
              border: "1px solid transparent",
            }),
          ),
          rowWrapper: (0, b.iv)({
            display: "flex",
            [E.Uc.xs]: { flexDirection: "column" },
          }),
          linkWrapper: (0, b.iv)((0, I.wz)(20)),
          imageWrapper: (0, b.iv)({
            position: "relative",
            borderRadius: E.E0,
            overflow: "hidden",
            "&::after": {
              content: "''",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: "block",
              background: `linear-gradient(0deg, ${E.tL}, ${E.tL})`,
              transition: "all ease 0.5s",
              opacity: 0,
            },
            "&:hover::after": { opacity: 1 },
            [E.Uc.xs]: Ct(At({}, (0, I.wz)(0)), { marginBottom: 10 }),
          }),
          image: (0, b.iv)({
            position: "relative",
            width: 200,
            display: "block",
            [E.Uc.xs]: { width: "100%" },
            background: e.level1,
          }),
        })),
        Rt = ({
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
          index: d = 0,
          short: u,
        }) => {
          const v = (0, p.useLocalization)(),
            g = zt(),
            f = (0, N.fp)(e || t, N.qU.RATIO_16X9_320),
            b = v(
              i.includes("/p/") || i.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            ),
            y = be({ url: i, externalLink: m });
          return a.createElement(
            "article",
            { className: g.item },
            a.createElement(
              re.mJ,
              {
                event: {
                  eventAction: re.DI.NEWS_CLICK,
                  eventLabel: y,
                  eventValue: (0, ee.Z)({
                    module: "news",
                    moduleId: "feed",
                    position: d,
                  }),
                },
              },
              a.createElement(
                "div",
                { className: g.rowWrapper },
                a.createElement(
                  "div",
                  { className: g.linkWrapper },
                  a.createElement(
                    Y.Z,
                    { to: y, ariaLabelledby: o, rel: "nofollow" },
                    a.createElement(
                      "div",
                      { className: g.imageWrapper },
                      a.createElement(
                        "div",
                        { className: g.image },
                        a.createElement(
                          Ot.Z,
                          { aspectRatio: E.oM.x16x9 },
                          a.createElement(Lt.w, {
                            src: f,
                            alt: r || l,
                            showBrokenOnError: !0,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                a.createElement(G, {
                  title: l,
                  short: u,
                  slug: o,
                  sticky: c,
                  date: n,
                  externalLink: m,
                  ctaLabel: b,
                  linkUrl: y,
                  tags: s,
                }),
              ),
            ),
          );
        };
      var _t = Object.defineProperty,
        Mt = Object.defineProperties,
        Ut = Object.getOwnPropertyDescriptors,
        $t = Object.getOwnPropertySymbols,
        Bt = Object.prototype.hasOwnProperty,
        Wt = Object.prototype.propertyIsEnumerable,
        Tt = (e, t, r) =>
          t in e
            ? _t(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Ft = ({ feedItem: e, index: t }) => {
        return a.createElement(
          Rt,
          ((r = ((e, t) => {
            for (var r in t || (t = {})) Bt.call(t, r) && Tt(e, r, t[r]);
            if ($t) for (var r of $t(t)) Wt.call(t, r) && Tt(e, r, t[r]);
            return e;
          })({}, e)),
          Mt(r, Ut({ index: t }))),
        );
        var r;
      };
      var Xt = r(6232),
        Kt = r(13405);
      const Ht = (0, L.i)(() => ({
          wrapper: (0, b.iv)({ paddingBottom: 16 }),
          listItems: (0, b.iv)({
            borderTop: `1px solid ${E.tL}`,
            paddingTop: 20,
            "&:not(:last-child)": {
              marginBottom: 30,
              [Kt.Uc[Kt.Uo.xxl]]: { marginBottom: 20 },
            },
          }),
        })),
        Yt = n().memo(({ data: e, feedPromoItems: t }) => {
          const r = Ht(),
            a = e.length || (null == t ? void 0 : t.length),
            l = n().createElement(
              "div",
              { className: r.wrapper },
              n().createElement(xt, null),
              t && t.length > 0 && n().createElement(Fe, { items: t }),
              e.length &&
                n().createElement(
                  n().Fragment,
                  null,
                  n().createElement(dt, null),
                  n().createElement(
                    "div",
                    { "data-testid": "feed-items-list" },
                    n().createElement(
                      Xt.a,
                      { data: e, itemClassName: r.listItems },
                      (e, t) =>
                        n().createElement(Ft, { feedItem: e, index: t }),
                    ),
                  ),
                ),
            );
          return a ? l : n().createElement(xt, null);
        });
      var Vt = r(35934),
        qt = r(93844),
        Gt = r(60353);
      const { selector: Jt } = (0, Gt.F)({
        name: "news-pagination",
        defaultConfig: { pageSize: 10 },
      });
      var Qt = r(37922);
      const er = (e, t, r) => {
          t.set("page", String(r)),
            e.push({ search: String(t), pathname: "news" });
        },
        tr = () => {
          const e = (0, f.useHistory)(),
            { pageSize: t } = (0, Qt.useSelector)(Jt),
            { search: r } = (0, f.useLocation)(),
            l = new URLSearchParams(r),
            o = l.get("page"),
            i = Boolean(o),
            s = i ? Number(o) : 1,
            c = er.bind(null, e, l),
            m = (0, a.useCallback)(
              (e) => {
                c(e);
              },
              [c],
            ),
            d = 1 === s,
            {
              blogList: b,
              stickyPosts: E,
              paging: y,
            } = ((e, t) => {
              var r, a;
              const n = (0, p.useLocalizationLocale)(),
                l = (0, v.stringify)((0, g.Z)((e) => !!e, { locale: n })),
                o = (0, v.stringify)(
                  (0, g.Z)((e) => !!e, { count: t, locale: n, start: e * t }),
                ),
                i =
                  null == (r = (0, u.Z)({ path: `content/blog/sticky?${l}` }))
                    ? void 0
                    : r.data,
                s =
                  null == (a = (0, u.Z)({ path: `content/blog-posts?${o}` }))
                    ? void 0
                    : a.data;
              return {
                blogList: (null == s ? void 0 : s.elements) || [],
                stickyPosts: i || [],
                paging: null == s ? void 0 : s.paging,
              };
            })(s - 1, t),
            { data: h, feedPromoItems: w } = (0, a.useMemo)(
              () => (0, qt.s$)(b, E, d),
              [b, E, d],
            ),
            x = (null == y ? void 0 : y.total) ? Math.ceil(y.total / t) : 0,
            O = x && x > 1;
          return (
            x < s && c(x),
            ((s < 1 && i) || isNaN(s)) && c(1),
            n().createElement(
              n().Fragment,
              null,
              n().createElement(Yt, { data: h, feedPromoItems: w }),
              O
                ? n().createElement(Vt.Z, {
                    totalPages: x,
                    page: s,
                    itemsPerPage: t,
                    onChange: (e, t) => {
                      m(t);
                    },
                  })
                : null,
            )
          );
        };
      var rr = r(90783),
        ar = r(73142),
        nr = r(85449);
      const lr = {
          content: (0, b.iv)({
            [E.Uc.md]: { flexDirection: "row" },
            display: "flex",
            flexDirection: "column-reverse",
            position: "relative",
            [E.Uc.underMd]: { overflowX: "hidden" },
          }),
          innerWrapper: (0, b.iv)({ flexGrow: 1 }),
        },
        or = ({ children: e }) =>
          n().createElement(
            "div",
            { className: lr.content },
            n().createElement("div", { className: lr.innerWrapper }, e),
          ),
        ir = (e) =>
          (0, b.iv)({
            background: e.level1,
            position: "relative",
            width: "100%",
          }),
        sr = (0, b.iv)({
          width: "100%",
          padding: "45px 35px",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "flex-start",
          pointerEvents: "none",
          overflow: "hidden",
        }),
        cr = (0, b.iv)(E.cp.text2, {
          marginBottom: "10px",
          height: "0.8em",
          width: "40%",
        }),
        mr = (0, b.iv)(E.cp.text6, {
          display: "flex",
          width: "100%",
          alignItems: "center",
        }),
        dr = (0, b.iv)((0, I.wz)(10), {
          borderRadius: "50%",
          width: "20px",
          height: "20px",
        }),
        pr = (0, b.iv)({ width: "22%", height: "0.8em" }),
        ur = (e) =>
          (0, b.iv)({
            backgroundColor: e.level2,
            width: "100%",
            height: "260px",
          });
      var vr = r(85569);
      const gr = () => {
          const e = (0, q.Z)();
          return a.createElement(
            "div",
            { className: ir(e) },
            a.createElement(
              "div",
              { className: sr },
              a.createElement(vr.Z, { className: cr }),
              a.createElement(
                "div",
                { className: mr },
                a.createElement(vr.Z, { className: dr }),
                a.createElement(vr.Z, { className: pr }),
              ),
            ),
            a.createElement("div", { className: ur(e) }),
          );
        },
        fr = () =>
          a.createElement(
            a.Fragment,
            null,
            a.createElement(gr, null),
            a.createElement(gr, null),
          );
      var br = Object.defineProperty,
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
          news: (0, b.iv)({ "&.title": { fontSize: 24, margin: "10px 0" } }),
        },
        Or = () => {
          const e = (0, Qt.useSelector)(ar.$u),
            t = (0, p.useLocalization)(),
            { newsPage: r } = at({ enabled: e });
          return e
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  nt.Z,
                  ((e, t) => {
                    for (var r in t || (t = {}))
                      yr.call(t, r) && wr(e, r, t[r]);
                    if (Er)
                      for (var r of Er(t)) hr.call(t, r) && wr(e, r, t[r]);
                    return e;
                  })({}, (0, lt.S)(t, r.meta)),
                ),
                a.createElement(tr, null),
              )
            : a.createElement(d.Z, { type: V.aB.OFFLINE });
        },
        Lr = () =>
          a.createElement(
            rr.Z,
            null,
            a.createElement(
              c.Yn,
              null,
              a.createElement(
                or,
                null,
                a.createElement(
                  m.Z,
                  { className: xr.news },
                  a.createElement(
                    nr.n4,
                    {
                      fallback: a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(xt, null),
                        a.createElement(fr, null),
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
//# sourceMappingURL=NewsView.egstore-site.a0d996eec1b80c3c6f59.js.map
