"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [421],
  {
    91062: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Pa });
      var r = a(8788),
        l = a.n(r),
        n = a(36233),
        o = a(26816),
        i = a(41791),
        s = a(34988),
        c = a(96157),
        m = a(61801),
        d = a(54232),
        p = a(27954),
        u = a(20406),
        g = a(64032),
        v = a(34475),
        b = a(90568),
        f = Object.defineProperty,
        E = Object.defineProperties,
        y = Object.getOwnPropertyDescriptors,
        h = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        A = Object.prototype.propertyIsEnumerable,
        O = (e, t, a) =>
          t in e
            ? f(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const x = (e) => {
          return (0, s.AH)(
            ((t = ((e, t) => {
              for (var a in t || (t = {})) w.call(t, a) && O(e, a, t[a]);
              if (h) for (var a of h(t)) A.call(t, a) && O(e, a, t[a]);
              return e;
            })({}, g.Il.text12)),
            (a = {
              color: (0, b.g)(e) ? g.ON : g.Ql,
              marginBottom: 10,
              [g.aq.maxWidth]: { marginLeft: 10, marginRight: 10 },
            }),
            E(t, y(a))),
          );
          var t, a;
        },
        I = () => {
          const e = (0, v.E)();
          return l().createElement(
            u.A,
            { className: x(e), level: 1 },
            l().createElement(p.QB, { code: "diesel.main.home.sections.news" }),
          );
        };
      var N = a(6576),
        L = a(66448),
        P = a(22357);
      const H = (e) =>
          (0, s.AH)({
            background: e.level1,
            position: "relative",
            width: "100%",
          }),
        j = (0, s.AH)({
          width: "100%",
          padding: "45px 35px",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "flex-start",
          pointerEvents: "none",
          overflow: "hidden",
        }),
        S = (0, s.AH)(g.Il.text2, {
          marginBottom: "10px",
          height: "0.8em",
          width: "40%",
        }),
        k = (0, s.AH)(g.Il.text6, {
          display: "flex",
          width: "100%",
          alignItems: "center",
        }),
        C = (0, s.AH)((0, P.hz)(10), {
          borderRadius: "50%",
          width: "20px",
          height: "20px",
        }),
        z = (0, s.AH)({ width: "22%", height: "0.8em" }),
        R = (e) =>
          (0, s.AH)({
            backgroundColor: e.level2,
            width: "100%",
            height: "260px",
          }),
        D = () => {
          const e = (0, L.A)();
          return r.createElement(
            "div",
            { className: H(e) },
            r.createElement(
              "div",
              { className: j },
              r.createElement(N.A, { className: S }),
              r.createElement(
                "div",
                { className: k },
                r.createElement(N.A, { className: C }),
                r.createElement(N.A, { className: z }),
              ),
            ),
            r.createElement("div", { className: R(e) }),
          );
        },
        _ = () =>
          r.createElement(
            r.Fragment,
            null,
            r.createElement(D, null),
            r.createElement(D, null),
          );
      var W = a(13758),
        B = a(63246),
        M = a(8003),
        q = a(91105),
        T = a(76387),
        $ = ((e) => (
          (e.HORIZONTAL = "horizontal"), (e.VERTICAL = "vertical"), e
        ))($ || {});
      const F = $;
      var X = a(85727),
        V = a(21483),
        U = a(47035);
      const K = (0, a(15498).K)(
        r.createElement("path", {
          d: "M11.526 1.405a.5.5 0 0 1 .948 0l2.244 6.658a.5.5 0 0 0 .474.34h7.222a.5.5 0 0 1 .287.91l-5.81 4.07a.5.5 0 0 0-.188.568l2.227 6.607a.5.5 0 0 1-.76.569l-5.883-4.12a.5.5 0 0 0-.574 0l-5.883 4.12a.5.5 0 0 1-.76-.57l2.227-6.606a.5.5 0 0 0-.187-.569l-5.811-4.07a.5.5 0 0 1 .287-.909h7.222a.5.5 0 0 0 .474-.34l2.244-6.658Z",
        }),
        "Star",
      );
      var Q = a(67671),
        Y = a(84904),
        Z = a(17673);
      const G = (0, Z.W)((e) => ({
          newsMeta: (0, s.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }),
          newsMetaItem: (0, s.AH)({
            margin: "0 5px",
            "&:first-child": (0, P.S$)(0),
            "&:last-child": (0, P.hz)(0),
            "> span": { lineHeight: "inherit" },
          }),
          sep: (0, s.AH)({ width: 1, height: 12, background: e.textSecondary }),
          star: (0, s.AH)((0, P.hz)(5), { color: e.textSecondary }),
        })),
        J = ({ date: e, hasStar: t, tags: a }) => {
          const r = G(),
            n = (0, c.useLocalizationMessages)(),
            o = (a && a.split(",")) || null;
          return l().createElement(
            "div",
            { "data-testid": "NewsItemMeta" },
            l().createElement(
              "div",
              { className: r.newsMeta },
              t &&
                l().createElement(
                  "div",
                  { className: (0, s.cx)(r.newsMetaItem, r.star) },
                  l().createElement(K, null),
                ),
              o &&
                o.map((e) =>
                  l().createElement(
                    l().Fragment,
                    null,
                    l().createElement(
                      "div",
                      { key: e, className: r.newsMetaItem },
                      l().createElement(Q.A, { textLevel: Y.qo.SECONDARY }, e),
                    ),
                    l().createElement("div", {
                      className: (0, s.cx)(r.newsMetaItem, r.sep),
                    }),
                  ),
                ),
              l().createElement(
                "div",
                { className: r.newsMetaItem },
                l().createElement(
                  Q.A,
                  { textLevel: Y.qo.SECONDARY },
                  (0, X.fw)(e, n),
                ),
              ),
            ),
          );
        };
      var ee = a(46571),
        te = a(14226),
        ae = Object.defineProperty,
        re = Object.getOwnPropertySymbols,
        le = Object.prototype.hasOwnProperty,
        ne = Object.prototype.propertyIsEnumerable,
        oe = (e, t, a) =>
          t in e
            ? ae(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ie = (e, t) => {
          for (var a in t || (t = {})) le.call(t, a) && oe(e, a, t[a]);
          if (re) for (var a of re(t)) ne.call(t, a) && oe(e, a, t[a]);
          return e;
        };
      const se = (0, s.AH)({
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }),
        ce = (0, s.AH)({ display: "flex" }),
        me = (0, s.AH)({ marginBottom: 5 }),
        de = (0, s.AH)({ margin: "14px 0" }),
        pe = (0, s.AH)({ display: "inline-flex", alignItems: "flex-end" }),
        ue = (e) =>
          (0, s.AH)(
            ie(
              {
                color: (0, b.g)(e) ? te.ON : te.Ql,
                [`& .${pe}`]: {
                  borderBottom: `1px solid ${(0, b.g)(e) ? te.I3 : te.ef}`,
                  transition: "all ease 0.5s",
                  "&:hover": { borderColor: (0, b.g)(e) ? te.ON : te.Ql },
                },
                [ee.aq.xs]: { marginTop: 15 },
                marginTop: "auto",
              },
              (0, P.hz)("auto"),
            ),
          ),
        ge = (0, s.AH)(ie({ marginBottom: -3 }, (0, P.S$)(3)));
      var ve = a(68813),
        be = a(55326),
        fe = a(705),
        Ee = a(49498);
      const ye = ({
        title: e,
        short: t,
        slug: a,
        sticky: l,
        linkUrl: n,
        ctaLabel: o,
        externalLink: i,
        date: s,
        tags: c,
        isPromoCard: m = !1,
      }) => {
        const d = (0, L.A)(),
          p = !m && l;
        return r.createElement(
          "div",
          { className: se },
          r.createElement(
            "div",
            { className: me, "data-testid": "news-item-meta" },
            r.createElement(J, { date: s, hasStar: p, tags: c }),
          ),
          e &&
            r.createElement(
              "h2",
              { id: m ? a : "" },
              r.createElement(
                fe.A,
                { to: n, ariaLabelledby: a, className: ce },
                r.createElement(
                  ve.Ay,
                  { textLevel: Y.qo.PRIMARY, weight: ve.EU.BOLD },
                  m ? e : r.createElement(be.A, { lines: 3, text: e }),
                ),
              ),
            ),
          t &&
            r.createElement(
              "div",
              { className: de },
              r.createElement(
                ve.Ay,
                { textLevel: Y.qo.SECONDARY },
                m ? t : r.createElement(be.A, { lines: 5, text: t }),
              ),
            ),
          o &&
            r.createElement(
              fe.A,
              { className: ue(d), to: n, ariaLabel: o, rel: "nofollow" },
              r.createElement(
                "span",
                { className: pe },
                o,
                i &&
                  r.createElement(
                    "div",
                    { className: ge },
                    r.createElement(U.t, { size: Ee.sp.SM }),
                  ),
              ),
            ),
        );
      };
      var he = a(55115),
        we = a(62195),
        Ae = a(35688),
        Oe = a(49912),
        xe = Object.defineProperty,
        Ie = Object.defineProperties,
        Ne = Object.getOwnPropertyDescriptors,
        Le = Object.getOwnPropertySymbols,
        Pe = Object.prototype.hasOwnProperty,
        He = Object.prototype.propertyIsEnumerable,
        je = (e, t, a) =>
          t in e
            ? xe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Se = (e, t) => {
          for (var a in t || (t = {})) Pe.call(t, a) && je(e, a, t[a]);
          if (Le) for (var a of Le(t)) He.call(t, a) && je(e, a, t[a]);
          return e;
        },
        ke = (e, t) => Ie(e, Ne(t));
      const Ce = (0, s.AH)(
          ke(Se({ width: "100%" }, (0, P.hz)(20)), {
            padding: 0,
            position: "relative",
            "&:last-child": (0, P.hz)(0),
            [ee.aq.xs]: Se({ marginBottom: 20 }, (0, P.hz)(0)),
            "& > div": { height: "100%" },
          }),
        ),
        ze = {
          rowWrapper: (e) =>
            (0, s.AH)({
              display: "flex",
              color: (0, b.g)(e) ? te.ON : te.Ql,
              flexDirection: "column",
              height: "100%",
              flex: 1,
            }),
          imageWrapper: (0, s.AH)(
            ke(
              Se(
                {
                  position: "relative",
                  borderRadius: we.Vq,
                  overflow: "hidden",
                },
                (0, he.ko)(he.gl.x16x9),
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
                  background: `linear-gradient(0deg, ${te.I3}, ${te.I3})`,
                  transition: "all ease 0.5s",
                  opacity: 0,
                  zIndex: 3,
                },
                "&:hover::after": { opacity: 1 },
              },
            ),
          ),
          content: (0, s.AH)({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }),
          headerWrapper: (0, s.AH)({ display: "flex", flex: 1, marginTop: 15 }),
        },
        Re = ({
          date: e,
          title: t,
          short: a,
          slug: r,
          url: n,
          cta: o,
          tags: i,
          renderMain: s,
          externalLink: c,
        }) => {
          const m = (0, v.E)();
          return l().createElement(
            "div",
            { className: Ce },
            l().createElement(
              Oe.Iu,
              {
                event: {
                  eventAction: Oe.yn.NEWS_CLICK,
                  eventLabel: n,
                  eventValue: (0, Ae.A)({
                    module: "news",
                    moduleId: "promo_feed",
                  }),
                },
              },
              l().createElement(
                "div",
                { className: ze.rowWrapper(m) },
                l().createElement(
                  fe.A,
                  { to: n, ariaLabelledby: r, rel: "nofollow" },
                  l().createElement(
                    "div",
                    { className: ze.imageWrapper },
                    l().createElement("div", { className: ze.content }, s()),
                  ),
                ),
                l().createElement(
                  "div",
                  { className: ze.headerWrapper },
                  l().createElement(ye, {
                    title: t,
                    short: a,
                    slug: r,
                    date: e,
                    externalLink: c,
                    ctaLabel: o,
                    linkUrl: n,
                    tags: i,
                    isPromoCard: !0,
                  }),
                ),
              ),
            ),
          );
        },
        De = {
          image: (0, s.AH)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
          videoContainer: (0, s.AH)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
        },
        _e = ({ date: e, title: t, button: a, srcSet: n, video: o }) => {
          const { text: i, url: s } = a,
            m = (0, B.al)(),
            d = (0, c.useLocalization)()("diesel.main.home.sections.featured");
          return l().createElement(Re, {
            url: s,
            date: e,
            title: t,
            cta: i,
            renderMain: () => {
              const e =
                n && ((0, X.OX)(n[F.HORIZONTAL]) || (0, X.OX)(n[F.VERTICAL]));
              return l().createElement(
                r.Fragment,
                null,
                o && !m
                  ? l().createElement(
                      "div",
                      { className: De.videoContainer },
                      l().createElement(V.A, {
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
                  : n
                    ? l().createElement(q.A, {
                        className: De.image,
                        srcSet: {
                          [T.F.XSMALL]: (0, X.OX)(n[F.VERTICAL]),
                          [T.F.LARGE]: (0, X.OX)(n[F.HORIZONTAL]),
                        },
                      })
                    : null,
              );
            },
            tags: d,
          });
        };
      var We = a(23269),
        Be = a.n(We);
      const Me = ({ url: e, externalLink: t }) => {
          if (t) return t;
          const a = `${Be().appContext}${e}`;
          return (0, n.generateRoutePath)(a);
        },
        qe = (0, s.AH)({
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }),
        Te = ({
          shareImage: e,
          trendingImage: t,
          trendingImageAlt: a,
          date: l,
          title: n,
          short: o,
          slug: i,
          url: s,
          tags: m,
          externalLink: d,
        }) => {
          const p = (0, c.useLocalization)(),
            u = X.SB.RATIO_16X9_480,
            g = e || t,
            v = g ? { [T.A.name.XSMALL]: (0, X.Vw)(g, u) } : null,
            b = p(
              s.includes("/p/") || s.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            );
          return r.createElement(Re, {
            url: Me({ url: s, externalLink: d }),
            date: l,
            slug: i,
            title: n,
            short: o,
            cta: b,
            externalLink: d,
            renderMain: () =>
              v
                ? r.createElement(q.A, { title: a, className: qe, srcSet: v })
                : null,
            tags: m,
          });
        };
      var $e = Object.defineProperty,
        Fe = Object.getOwnPropertySymbols,
        Xe = Object.prototype.hasOwnProperty,
        Ve = Object.prototype.propertyIsEnumerable,
        Ue = (e, t, a) =>
          t in e
            ? $e(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ke = (e, t) => {
          for (var a in t || (t = {})) Xe.call(t, a) && Ue(e, a, t[a]);
          if (Fe) for (var a of Fe(t)) Ve.call(t, a) && Ue(e, a, t[a]);
          return e;
        };
      const Qe = {
          wrapper: (0, s.AH)({
            display: "flex",
            justifyContent: "space-between",
            [g.aq.xs]: { flexDirection: "column" },
          }),
        },
        Ye = ({ items: e }) =>
          r.createElement(
            "div",
            { className: Qe.wrapper },
            e.map((e) => {
              const { type: t } = e;
              return t === M.ProductSectionType.HERO
                ? r.createElement(_e, Ke({ key: t }, e))
                : r.createElement(Te, Ke({ key: e.id }, e));
            }),
          );
      var Ze = a(64704),
        Ge = a(61182),
        Je = Object.defineProperty,
        et = Object.getOwnPropertySymbols,
        tt = Object.prototype.hasOwnProperty,
        at = Object.prototype.propertyIsEnumerable,
        rt = (e, t, a) =>
          t in e
            ? Je(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        lt = (e, t) => {
          for (var a in t || (t = {})) tt.call(t, a) && rt(e, a, t[a]);
          if (et) for (var a of et(t)) at.call(t, a) && rt(e, a, t[a]);
          return e;
        };
      const nt = {
          slider: (0, s.AH)({ overflow: "visible !important" }),
          slideItem: (0, s.AH)((0, P.S$)(10), { width: "calc(100% - 10px)" }),
          firstSlideItem: (0, s.AH)((0, P.S$)(0)),
        },
        ot = ({ items: e }) => {
          const t = (0, B.Qo)(),
            a = e.map((e, t) => {
              const a = (0, s.cx)(nt.slideItem, {
                  [nt.firstSlideItem]: 0 === t,
                }),
                { type: l } = e;
              return l === M.ProductSectionType.HERO
                ? r.createElement(
                    "div",
                    { className: a, key: l },
                    r.createElement(_e, lt({ key: l }, e)),
                  )
                : r.createElement(
                    "div",
                    { className: a, key: e.id },
                    r.createElement(Te, lt({}, e)),
                  );
            }),
            { activeIndex: l, changeIndex: n } = (0, Ge.A)({
              initialIndex: 0,
              slidesLength: a.length,
              beforeChange: () => {},
            });
          return r.createElement(
            Ze.A,
            { className: nt.slider, changeIndex: n, index: l, isRTL: t },
            a,
          );
        },
        it = {
          promoSection: (0, s.AH)({
            marginBottom: 60,
            [g.aq.maxWidth]: { marginLeft: 10, marginRight: 10 },
          }),
        },
        st = ({ items: e }) => {
          const t = (0, B.al)();
          return r.createElement(
            "div",
            { className: it.promoSection, "data-testid": "feed-promo" },
            t
              ? r.createElement(ot, { items: e })
              : r.createElement(Ye, { items: e }),
          );
        };
      var ct = a(66623),
        mt = a(26899),
        dt = a.n(mt),
        pt = a(38092);
      const ut = (e = "en-US") => {
        return (
          (t = void 0),
          (a = null),
          (r = function* () {
            var t;
            try {
              const t = yield dt().get(
                pt.p.contentServiceUrl(`${e}/content/blog/root`),
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
          new Promise((e, l) => {
            var n = (e) => {
                try {
                  i(r.next(e));
                } catch (e) {
                  l(e);
                }
              },
              o = (e) => {
                try {
                  i(r.throw(e));
                } catch (e) {
                  l(e);
                }
              },
              i = (t) =>
                t.done ? e(t.value) : Promise.resolve(t.value).then(n, o);
            i((r = r.apply(t, a)).next());
          })
        );
        var t, a, r;
      };
      var gt = Object.defineProperty,
        vt = Object.defineProperties,
        bt = Object.getOwnPropertyDescriptors,
        ft = Object.getOwnPropertySymbols,
        Et = Object.prototype.hasOwnProperty,
        yt = Object.prototype.propertyIsEnumerable,
        ht = (e, t, a) =>
          t in e
            ? gt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const wt = (e) => {
        var t;
        const a = (0, c.useLocalizationLocale)(),
          r = (0, ct.IT)(
            `news-page::${a}`,
            () => ut(a),
            ((n = ((e, t) => {
              for (var a in t || (t = {})) Et.call(t, a) && ht(e, a, t[a]);
              if (ft) for (var a of ft(t)) yt.call(t, a) && ht(e, a, t[a]);
              return e;
            })({}, e)),
            (o = {
              enabled: null != (t = null == e ? void 0 : e.enabled) ? t : !!a,
            }),
            vt(n, bt(o))),
          ),
          { data: l } = r;
        var n, o;
        return {
          newsPage: l,
          query: ((e, t) => {
            var a = {};
            for (var r in e) Et.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && ft)
              for (var r of ft(e))
                t.indexOf(r) < 0 && yt.call(e, r) && (a[r] = e[r]);
            return a;
          })(r, ["data"]),
        };
      };
      var At = a(20665),
        Ot = a(29200),
        xt = Object.defineProperty,
        It = Object.getOwnPropertySymbols,
        Nt = Object.prototype.hasOwnProperty,
        Lt = Object.prototype.propertyIsEnumerable,
        Pt = (e, t, a) =>
          t in e
            ? xt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ht = () => {
        const e = (0, c.useLocalization)(),
          { newsPage: t } = wt();
        return (null == t ? void 0 : t.meta)
          ? l().createElement(
              At.A,
              ((e, t) => {
                for (var a in t || (t = {})) Nt.call(t, a) && Pt(e, a, t[a]);
                if (It) for (var a of It(t)) Lt.call(t, a) && Pt(e, a, t[a]);
                return e;
              })({}, (0, Ot.K)(e, t.meta)),
            )
          : null;
      };
      var jt = a(1319),
        St = a(92637),
        kt = a(83700),
        Ct = Object.defineProperty,
        zt = Object.defineProperties,
        Rt = Object.getOwnPropertyDescriptors,
        Dt = Object.getOwnPropertySymbols,
        _t = Object.prototype.hasOwnProperty,
        Wt = Object.prototype.propertyIsEnumerable,
        Bt = (e, t, a) =>
          t in e
            ? Ct(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Mt = (e, t) => {
          for (var a in t || (t = {})) _t.call(t, a) && Bt(e, a, t[a]);
          if (Dt) for (var a of Dt(t)) Wt.call(t, a) && Bt(e, a, t[a]);
          return e;
        },
        qt = (e, t) => zt(e, Rt(t));
      const Tt = (0, Z.W)((e) => ({
          item: (0, s.AH)({
            width: "100%",
            marginTop: 0,
            position: "relative",
          }),
          link: (0, s.AH)(
            qt(Mt({}, (0, kt.HE)(e)), {
              display: "flex",
              [g.aq.xs]: { flexDirection: "column" },
              border: "1px solid transparent",
            }),
          ),
          rowWrapper: (0, s.AH)({
            display: "flex",
            [g.aq.xs]: { flexDirection: "column" },
          }),
          linkWrapper: (0, s.AH)((0, P.hz)(20)),
          imageWrapper: (0, s.AH)({
            position: "relative",
            borderRadius: g.Vq,
            overflow: "hidden",
            "&::after": {
              content: "''",
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: "block",
              background: `linear-gradient(0deg, ${g.I3}, ${g.I3})`,
              transition: "all ease 0.5s",
              opacity: 0,
            },
            "&:hover::after": { opacity: 1 },
            [g.aq.xs]: qt(Mt({}, (0, P.hz)(0)), { marginBottom: 10 }),
          }),
          image: (0, s.AH)({
            position: "relative",
            width: 200,
            display: "block",
            [g.aq.xs]: { width: "100%" },
            background: e.level1,
          }),
        })),
        $t = ({
          shareImage: e,
          trendingImage: t,
          trendingImageAlt: a,
          date: l,
          title: n,
          slug: o,
          url: i,
          tags: s,
          sticky: m,
          externalLink: d,
          index: p = 0,
          short: u,
        }) => {
          const v = (0, c.useLocalization)(),
            b = Tt(),
            f = (0, X.Vw)(e || t, X.SB.RATIO_16X9_320),
            E = v(
              i.includes("/p/") || i.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            ),
            y = Me({ url: i, externalLink: d });
          return r.createElement(
            "article",
            { className: b.item },
            r.createElement(
              Oe.Iu,
              {
                event: {
                  eventAction: Oe.yn.NEWS_CLICK,
                  eventLabel: y,
                  eventValue: (0, Ae.A)({
                    module: "news",
                    moduleId: "feed",
                    position: p,
                  }),
                },
              },
              r.createElement(
                "div",
                { className: b.rowWrapper },
                r.createElement(
                  "div",
                  { className: b.linkWrapper },
                  r.createElement(
                    fe.A,
                    { to: y, ariaLabelledby: o, rel: "nofollow" },
                    r.createElement(
                      "div",
                      { className: b.imageWrapper },
                      r.createElement(
                        "div",
                        { className: b.image },
                        r.createElement(
                          jt.A,
                          { aspectRatio: g.gl.x16x9 },
                          r.createElement(St.o, {
                            src: f,
                            alt: a || n,
                            showBrokenOnError: !0,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                r.createElement(ye, {
                  title: n,
                  short: u,
                  slug: o,
                  sticky: m,
                  date: l,
                  externalLink: d,
                  ctaLabel: E,
                  linkUrl: y,
                  tags: s,
                }),
              ),
            ),
          );
        };
      var Ft = Object.defineProperty,
        Xt = Object.defineProperties,
        Vt = Object.getOwnPropertyDescriptors,
        Ut = Object.getOwnPropertySymbols,
        Kt = Object.prototype.hasOwnProperty,
        Qt = Object.prototype.propertyIsEnumerable,
        Yt = (e, t, a) =>
          t in e
            ? Ft(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Zt = ({ feedItem: e, index: t }) => {
        return r.createElement(
          $t,
          ((a = ((e, t) => {
            for (var a in t || (t = {})) Kt.call(t, a) && Yt(e, a, t[a]);
            if (Ut) for (var a of Ut(t)) Qt.call(t, a) && Yt(e, a, t[a]);
            return e;
          })({}, e)),
          Xt(a, Vt({ index: t }))),
        );
        var a;
      };
      var Gt = a(92619),
        Jt = a(45580);
      const ea = (0, Z.W)(() => ({
          wrapper: (0, s.AH)({ paddingBottom: 16 }),
          listItems: (0, s.AH)({
            borderTop: `1px solid ${g.I3}`,
            paddingTop: 20,
            "&:not(:last-child)": {
              marginBottom: 30,
              [Jt.aq[Jt.EA.xxl]]: { marginBottom: 20 },
            },
          }),
        })),
        ta = l().memo(({ data: e, feedPromoItems: t }) => {
          const a = ea(),
            r = e.length || (null == t ? void 0 : t.length),
            n = l().createElement(
              "div",
              { className: a.wrapper },
              l().createElement(I, null),
              t && t.length > 0 && l().createElement(st, { items: t }),
              e.length &&
                l().createElement(
                  l().Fragment,
                  null,
                  l().createElement(Ht, null),
                  l().createElement(
                    "div",
                    { "data-testid": "feed-items-list" },
                    l().createElement(
                      Gt.B,
                      { data: e, itemClassName: a.listItems },
                      (e, t) =>
                        l().createElement(Zt, { feedItem: e, index: t }),
                    ),
                  ),
                ),
            );
          return r ? n : l().createElement(I, null);
        });
      var aa = a(22784),
        ra = a(76004),
        la = a(14198);
      var na = a(90743);
      const { selector: oa } = (0, na.C)({
        name: "news-pagination",
        defaultConfig: { pageSize: 10 },
      });
      var ia = a(15503),
        sa = a(96416);
      const ca = (e, t, a) => {
          t.set("page", String(a)),
            e.push({ search: String(t), pathname: "news" });
        },
        ma = () => {
          const e = (0, W.useHistory)(),
            { pageSize: t } = (0, i.useSelector)(oa),
            { search: a } = (0, W.useLocation)(),
            n = new URLSearchParams(a),
            o = n.get("page"),
            s = Boolean(o),
            m = s ? Number(o) : 1,
            d = ca.bind(null, e, n),
            p = (0, r.useCallback)(
              (e) => {
                d(e);
              },
              [d],
            ),
            u = 1 === m,
            {
              blogList: g,
              stickyPosts: v,
              paging: b,
            } = ((e, t) => {
              var a, r;
              const l = (0, c.useLocalizationLocale)(),
                n = (0, aa.stringify)((0, ra.A)((e) => !!e, { locale: l })),
                o = (0, aa.stringify)(
                  (0, ra.A)((e) => !!e, { count: t, locale: l, start: e * t }),
                ),
                i =
                  null == (a = (0, la.X)({ path: `content/blog/sticky?${n}` }))
                    ? void 0
                    : a.data,
                s =
                  null == (r = (0, la.X)({ path: `content/blog-posts?${o}` }))
                    ? void 0
                    : r.data;
              return {
                blogList: (null == s ? void 0 : s.elements) || [],
                stickyPosts: i || [],
                paging: null == s ? void 0 : s.paging,
              };
            })(m - 1, t),
            { data: f, feedPromoItems: E } = (0, r.useMemo)(
              () => (0, ia.g5)(g, v, u),
              [g, v, u],
            ),
            y = (null == b ? void 0 : b.total) ? Math.ceil(b.total / t) : 0,
            h = y && y > 1;
          return (
            y < m && d(y),
            ((m < 1 && s) || isNaN(m)) && d(1),
            l().createElement(
              l().Fragment,
              null,
              l().createElement(ta, { data: f, feedPromoItems: E }),
              h
                ? l().createElement(sa.A, {
                    totalPages: y,
                    page: m,
                    itemsPerPage: t,
                    onChange: (e, t) => {
                      p(t);
                    },
                  })
                : null,
            )
          );
        },
        da = {
          content: (0, s.AH)({
            [g.aq.md]: { flexDirection: "row" },
            display: "flex",
            flexDirection: "column-reverse",
            position: "relative",
            [g.aq.underMd]: { overflowX: "hidden" },
          }),
          innerWrapper: (0, s.AH)({ flexGrow: 1 }),
        },
        pa = ({ children: e }) =>
          l().createElement(
            "div",
            { className: da.content },
            l().createElement("div", { className: da.innerWrapper }, e),
          );
      var ua = a(66879),
        ga = a(97116),
        va = a(68085),
        ba = a(60885),
        fa = a(22404),
        Ea = Object.defineProperty,
        ya = Object.getOwnPropertySymbols,
        ha = Object.prototype.hasOwnProperty,
        wa = Object.prototype.propertyIsEnumerable,
        Aa = (e, t, a) =>
          t in e
            ? Ea(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Oa = {
          news: (0, s.AH)({ "&.title": { fontSize: 24, margin: "10px 0" } }),
        },
        xa = () => {
          const e = (0, i.useSelector)(d.VI),
            t = (0, c.useLocalization)(),
            { newsPage: a } = wt({ enabled: e });
          return e
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  At.A,
                  ((e, t) => {
                    for (var a in t || (t = {}))
                      ha.call(t, a) && Aa(e, a, t[a]);
                    if (ya)
                      for (var a of ya(t)) wa.call(t, a) && Aa(e, a, t[a]);
                    return e;
                  })({}, (0, Ot.K)(t, a.meta)),
                ),
                r.createElement(ma, null),
              )
            : r.createElement(ua.A, { type: va.A.OFFLINE });
        },
        Ia = () =>
          r.createElement(
            ba.A,
            null,
            r.createElement(
              fa.fN,
              null,
              r.createElement(
                pa,
                null,
                r.createElement(
                  ga.A,
                  { className: Oa.news },
                  r.createElement(
                    m.tY,
                    {
                      fallback: r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(I, null),
                        r.createElement(_, null),
                      ),
                    },
                    r.createElement(xa, null),
                  ),
                ),
              ),
            ),
          );
      var Na = a(6415),
        La = a(87536);
      const Pa = () =>
        (0, o.A)(["/home"])
          ? l().createElement(Na.T, {
              to: (0, n.generateRoutePath)("/news"),
              "data-testid": "redirect-to-news",
            })
          : l().createElement(La.A, null, l().createElement(Ia, null));
    },
  },
]);
//# sourceMappingURL=NewsView.egstore-site.2dee0f74b9f05443ee61.js.map
