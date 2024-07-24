"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [421],
  {
    91062: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Pa });
      var r = a(8788),
        l = a.n(r),
        n = a(87536),
        o = a(26816),
        i = a(6415),
        s = a(36233),
        c = a(3493),
        m = a(11923),
        d = a(96157),
        p = a(61801),
        u = a(54232),
        g = a(64032),
        v = a(90568),
        b = a(34475),
        f = a(20406),
        E = a(42209),
        y = Object.defineProperty,
        h = Object.defineProperties,
        w = Object.getOwnPropertyDescriptors,
        A = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        I = (e, t, a) =>
          t in e
            ? y(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const N = (e) => {
          return (0, m.AH)(
            ((t = ((e, t) => {
              for (var a in t || (t = {})) O.call(t, a) && I(e, a, t[a]);
              if (A) for (var a of A(t)) x.call(t, a) && I(e, a, t[a]);
              return e;
            })({}, g.Il.text12)),
            (a = {
              color: (0, v.g)(e) ? g.ON : g.Ql,
              marginBottom: 10,
              [g.aq.maxWidth]: { marginLeft: 10, marginRight: 10 },
            }),
            h(t, w(a))),
          );
          var t, a;
        },
        L = () => {
          const e = (0, b.E)();
          return l().createElement(
            f.A,
            { className: N(e), level: 1 },
            l().createElement(E.QB, { code: "diesel.main.home.sections.news" }),
          );
        };
      var P = a(22357);
      const H = (e) =>
          (0, m.AH)({
            background: e.level1,
            position: "relative",
            width: "100%",
          }),
        j = (0, m.AH)({
          width: "100%",
          padding: "45px 35px",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          alignItems: "flex-start",
          pointerEvents: "none",
          overflow: "hidden",
        }),
        S = (0, m.AH)(g.Il.text2, {
          marginBottom: "10px",
          height: "0.8em",
          width: "40%",
        }),
        k = (0, m.AH)(g.Il.text6, {
          display: "flex",
          width: "100%",
          alignItems: "center",
        }),
        C = (0, m.AH)((0, P.hz)(10), {
          borderRadius: "50%",
          width: "20px",
          height: "20px",
        }),
        z = (0, m.AH)({ width: "22%", height: "0.8em" }),
        R = (e) =>
          (0, m.AH)({
            backgroundColor: e.level2,
            width: "100%",
            height: "260px",
          });
      var D = a(6576),
        _ = a(66448);
      const W = () => {
          const e = (0, _.A)();
          return r.createElement(
            "div",
            { className: H(e) },
            r.createElement(
              "div",
              { className: j },
              r.createElement(D.A, { className: S }),
              r.createElement(
                "div",
                { className: k },
                r.createElement(D.A, { className: C }),
                r.createElement(D.A, { className: z }),
              ),
            ),
            r.createElement("div", { className: R(e) }),
          );
        },
        B = () =>
          r.createElement(
            r.Fragment,
            null,
            r.createElement(W, null),
            r.createElement(W, null),
          );
      var M = a(22784),
        q = a(76004),
        T = a(14198);
      var $ = a(13758),
        F = a(63246),
        X = a(8003),
        V = a(91105),
        U = a(76387),
        K = ((e) => (
          (e.HORIZONTAL = "horizontal"), (e.VERTICAL = "vertical"), e
        ))(K || {});
      const Q = K;
      var Y = a(85727),
        Z = a(21483),
        G = a(47035);
      const J = (0, a(15498).K)(
        r.createElement("path", {
          d: "M11.526 1.405a.5.5 0 0 1 .948 0l2.244 6.658a.5.5 0 0 0 .474.34h7.222a.5.5 0 0 1 .287.91l-5.81 4.07a.5.5 0 0 0-.188.568l2.227 6.607a.5.5 0 0 1-.76.569l-5.883-4.12a.5.5 0 0 0-.574 0l-5.883 4.12a.5.5 0 0 1-.76-.57l2.227-6.606a.5.5 0 0 0-.187-.569l-5.811-4.07a.5.5 0 0 1 .287-.909h7.222a.5.5 0 0 0 .474-.34l2.244-6.658Z",
        }),
        "Star",
      );
      var ee = a(67671),
        te = a(84904),
        ae = a(17673);
      const re = (0, ae.W)((e) => ({
          newsMeta: (0, m.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }),
          newsMetaItem: (0, m.AH)({
            margin: "0 5px",
            "&:first-child": (0, P.S$)(0),
            "&:last-child": (0, P.hz)(0),
            "> span": { lineHeight: "inherit" },
          }),
          sep: (0, m.AH)({ width: 1, height: 12, background: e.textSecondary }),
          star: (0, m.AH)((0, P.hz)(5), { color: e.textSecondary }),
        })),
        le = ({ date: e, hasStar: t, tags: a }) => {
          const r = re(),
            n = (0, d.useLocalizationMessages)(),
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
                  { className: (0, m.cx)(r.newsMetaItem, r.star) },
                  l().createElement(J, null),
                ),
              o &&
                o.map((e) =>
                  l().createElement(
                    l().Fragment,
                    null,
                    l().createElement(
                      "div",
                      { key: e, className: r.newsMetaItem },
                      l().createElement(
                        ee.A,
                        { textLevel: te.qo.SECONDARY },
                        e,
                      ),
                    ),
                    l().createElement("div", {
                      className: (0, m.cx)(r.newsMetaItem, r.sep),
                    }),
                  ),
                ),
              l().createElement(
                "div",
                { className: r.newsMetaItem },
                l().createElement(
                  ee.A,
                  { textLevel: te.qo.SECONDARY },
                  (0, Y.fw)(e, n),
                ),
              ),
            ),
          );
        };
      var ne = a(46571),
        oe = a(14226),
        ie = Object.defineProperty,
        se = Object.getOwnPropertySymbols,
        ce = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable,
        de = (e, t, a) =>
          t in e
            ? ie(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        pe = (e, t) => {
          for (var a in t || (t = {})) ce.call(t, a) && de(e, a, t[a]);
          if (se) for (var a of se(t)) me.call(t, a) && de(e, a, t[a]);
          return e;
        };
      const ue = (0, m.AH)({
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }),
        ge = (0, m.AH)({ display: "flex" }),
        ve = (0, m.AH)({ marginBottom: 5 }),
        be = (0, m.AH)({ margin: "14px 0" }),
        fe = (0, m.AH)({ display: "inline-flex", alignItems: "flex-end" }),
        Ee = (e) =>
          (0, m.AH)(
            pe(
              {
                color: (0, v.g)(e) ? oe.ON : oe.Ql,
                [`& .${fe}`]: {
                  borderBottom: `1px solid ${(0, v.g)(e) ? oe.I3 : oe.ef}`,
                  transition: "all ease 0.5s",
                  "&:hover": { borderColor: (0, v.g)(e) ? oe.ON : oe.Ql },
                },
                [ne.aq.xs]: { marginTop: 15 },
                marginTop: "auto",
              },
              (0, P.hz)("auto"),
            ),
          ),
        ye = (0, m.AH)(pe({ marginBottom: -3 }, (0, P.S$)(3)));
      var he = a(68813),
        we = a(55326),
        Ae = a(705),
        Oe = a(49498);
      const xe = ({
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
        const d = (0, _.A)(),
          p = !m && l;
        return r.createElement(
          "div",
          { className: ue },
          r.createElement(
            "div",
            { className: ve, "data-testid": "news-item-meta" },
            r.createElement(le, { date: s, hasStar: p, tags: c }),
          ),
          e &&
            r.createElement(
              "h2",
              { id: m ? a : "" },
              r.createElement(
                Ae.A,
                { to: n, ariaLabelledby: a, className: ge },
                r.createElement(
                  he.Ay,
                  { textLevel: te.qo.PRIMARY, weight: he.EU.BOLD },
                  m ? e : r.createElement(we.A, { lines: 3, text: e }),
                ),
              ),
            ),
          t &&
            r.createElement(
              "div",
              { className: be },
              r.createElement(
                he.Ay,
                { textLevel: te.qo.SECONDARY },
                m ? t : r.createElement(we.A, { lines: 5, text: t }),
              ),
            ),
          o &&
            r.createElement(
              Ae.A,
              { className: Ee(d), to: n, ariaLabel: o, rel: "nofollow" },
              r.createElement(
                "span",
                { className: fe },
                o,
                i &&
                  r.createElement(
                    "div",
                    { className: ye },
                    r.createElement(G.t, { size: Oe.sp.SM }),
                  ),
              ),
            ),
        );
      };
      var Ie = a(55115),
        Ne = a(62195),
        Le = a(35688),
        Pe = a(49912),
        He = Object.defineProperty,
        je = Object.defineProperties,
        Se = Object.getOwnPropertyDescriptors,
        ke = Object.getOwnPropertySymbols,
        Ce = Object.prototype.hasOwnProperty,
        ze = Object.prototype.propertyIsEnumerable,
        Re = (e, t, a) =>
          t in e
            ? He(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        De = (e, t) => {
          for (var a in t || (t = {})) Ce.call(t, a) && Re(e, a, t[a]);
          if (ke) for (var a of ke(t)) ze.call(t, a) && Re(e, a, t[a]);
          return e;
        },
        _e = (e, t) => je(e, Se(t));
      const We = (0, m.AH)(
          _e(De({ width: "100%" }, (0, P.hz)(20)), {
            padding: 0,
            position: "relative",
            "&:last-child": (0, P.hz)(0),
            [ne.aq.xs]: De({ marginBottom: 20 }, (0, P.hz)(0)),
            "& > div": { height: "100%" },
          }),
        ),
        Be = {
          rowWrapper: (e) =>
            (0, m.AH)({
              display: "flex",
              color: (0, v.g)(e) ? oe.ON : oe.Ql,
              flexDirection: "column",
              height: "100%",
              flex: 1,
            }),
          imageWrapper: (0, m.AH)(
            _e(
              De(
                {
                  position: "relative",
                  borderRadius: Ne.Vq,
                  overflow: "hidden",
                },
                (0, Ie.ko)(Ie.gl.x16x9),
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
                  background: `linear-gradient(0deg, ${oe.I3}, ${oe.I3})`,
                  transition: "all ease 0.5s",
                  opacity: 0,
                  zIndex: 3,
                },
                "&:hover::after": { opacity: 1 },
              },
            ),
          ),
          content: (0, m.AH)({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }),
          headerWrapper: (0, m.AH)({ display: "flex", flex: 1, marginTop: 15 }),
        },
        Me = ({
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
          const m = (0, b.E)();
          return l().createElement(
            "div",
            { className: We },
            l().createElement(
              Pe.Iu,
              {
                event: {
                  eventAction: Pe.yn.NEWS_CLICK,
                  eventLabel: n,
                  eventValue: (0, Le.A)({
                    module: "news",
                    moduleId: "promo_feed",
                  }),
                },
              },
              l().createElement(
                "div",
                { className: Be.rowWrapper(m) },
                l().createElement(
                  Ae.A,
                  { to: n, ariaLabelledby: r, rel: "nofollow" },
                  l().createElement(
                    "div",
                    { className: Be.imageWrapper },
                    l().createElement("div", { className: Be.content }, s()),
                  ),
                ),
                l().createElement(
                  "div",
                  { className: Be.headerWrapper },
                  l().createElement(xe, {
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
        qe = {
          image: (0, m.AH)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
          videoContainer: (0, m.AH)({
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }),
        },
        Te = ({ date: e, title: t, button: a, srcSet: n, video: o }) => {
          const { text: i, url: s } = a,
            c = (0, F.al)(),
            m = (0, d.useLocalization)()("diesel.main.home.sections.featured");
          return l().createElement(Me, {
            url: s,
            date: e,
            title: t,
            cta: i,
            renderMain: () => {
              const e =
                n && ((0, Y.OX)(n[Q.HORIZONTAL]) || (0, Y.OX)(n[Q.VERTICAL]));
              return l().createElement(
                r.Fragment,
                null,
                o && !c
                  ? l().createElement(
                      "div",
                      { className: qe.videoContainer },
                      l().createElement(Z.A, {
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
                    ? l().createElement(V.A, {
                        className: qe.image,
                        srcSet: {
                          [U.F.XSMALL]: (0, Y.OX)(n[Q.VERTICAL]),
                          [U.F.LARGE]: (0, Y.OX)(n[Q.HORIZONTAL]),
                        },
                      })
                    : null,
              );
            },
            tags: m,
          });
        };
      var $e = a(23269),
        Fe = a.n($e);
      const Xe = ({ url: e, externalLink: t }) => {
          if (t) return t;
          const a = `${Fe().appContext}${e}`;
          return (0, s.generateRoutePath)(a);
        },
        Ve = (0, m.AH)({
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }),
        Ue = ({
          shareImage: e,
          trendingImage: t,
          trendingImageAlt: a,
          date: l,
          title: n,
          short: o,
          slug: i,
          url: s,
          tags: c,
          externalLink: m,
        }) => {
          const p = (0, d.useLocalization)(),
            u = Y.SB.RATIO_16X9_480,
            g = e || t,
            v = g ? { [U.A.name.XSMALL]: (0, Y.Vw)(g, u) } : null,
            b = p(
              s.includes("/p/") || s.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            );
          return r.createElement(Me, {
            url: Xe({ url: s, externalLink: m }),
            date: l,
            slug: i,
            title: n,
            short: o,
            cta: b,
            externalLink: m,
            renderMain: () =>
              v
                ? r.createElement(V.A, { title: a, className: Ve, srcSet: v })
                : null,
            tags: c,
          });
        };
      var Ke = Object.defineProperty,
        Qe = Object.getOwnPropertySymbols,
        Ye = Object.prototype.hasOwnProperty,
        Ze = Object.prototype.propertyIsEnumerable,
        Ge = (e, t, a) =>
          t in e
            ? Ke(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Je = (e, t) => {
          for (var a in t || (t = {})) Ye.call(t, a) && Ge(e, a, t[a]);
          if (Qe) for (var a of Qe(t)) Ze.call(t, a) && Ge(e, a, t[a]);
          return e;
        };
      const et = {
          wrapper: (0, m.AH)({
            display: "flex",
            justifyContent: "space-between",
            [g.aq.xs]: { flexDirection: "column" },
          }),
        },
        tt = ({ items: e }) =>
          r.createElement(
            "div",
            { className: et.wrapper },
            e.map((e) => {
              const { type: t } = e;
              return t === X.ProductSectionType.HERO
                ? r.createElement(Te, Je({ key: t }, e))
                : r.createElement(Ue, Je({ key: e.id }, e));
            }),
          );
      var at = a(64704),
        rt = a(61182),
        lt = Object.defineProperty,
        nt = Object.getOwnPropertySymbols,
        ot = Object.prototype.hasOwnProperty,
        it = Object.prototype.propertyIsEnumerable,
        st = (e, t, a) =>
          t in e
            ? lt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ct = (e, t) => {
          for (var a in t || (t = {})) ot.call(t, a) && st(e, a, t[a]);
          if (nt) for (var a of nt(t)) it.call(t, a) && st(e, a, t[a]);
          return e;
        };
      const mt = {
          slider: (0, m.AH)({ overflow: "visible !important" }),
          slideItem: (0, m.AH)((0, P.S$)(10), { width: "calc(100% - 10px)" }),
          firstSlideItem: (0, m.AH)((0, P.S$)(0)),
        },
        dt = ({ items: e }) => {
          const t = (0, F.Qo)(),
            a = e.map((e, t) => {
              const a = (0, m.cx)(mt.slideItem, {
                  [mt.firstSlideItem]: 0 === t,
                }),
                { type: l } = e;
              return l === X.ProductSectionType.HERO
                ? r.createElement(
                    "div",
                    { className: a, key: l },
                    r.createElement(Te, ct({ key: l }, e)),
                  )
                : r.createElement(
                    "div",
                    { className: a, key: e.id },
                    r.createElement(Ue, ct({}, e)),
                  );
            }),
            { activeIndex: l, changeIndex: n } = (0, rt.A)({
              initialIndex: 0,
              slidesLength: a.length,
              beforeChange: () => {},
            });
          return r.createElement(
            at.A,
            { className: mt.slider, changeIndex: n, index: l, isRTL: t },
            a,
          );
        },
        pt = {
          promoSection: (0, m.AH)({
            marginBottom: 60,
            [g.aq.maxWidth]: { marginLeft: 10, marginRight: 10 },
          }),
        },
        ut = ({ items: e }) => {
          const t = (0, F.al)();
          return r.createElement(
            "div",
            { className: pt.promoSection, "data-testid": "feed-promo" },
            t
              ? r.createElement(dt, { items: e })
              : r.createElement(tt, { items: e }),
          );
        };
      var gt = a(66623),
        vt = a(26899),
        bt = a.n(vt),
        ft = a(38092);
      const Et = (e = "en-US") => {
        return (
          (t = void 0),
          (a = null),
          (r = function* () {
            var t;
            try {
              const t = yield bt().get(
                ft.p.contentServiceUrl(`${e}/content/blog/root`),
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
      var yt = Object.defineProperty,
        ht = Object.defineProperties,
        wt = Object.getOwnPropertyDescriptors,
        At = Object.getOwnPropertySymbols,
        Ot = Object.prototype.hasOwnProperty,
        xt = Object.prototype.propertyIsEnumerable,
        It = (e, t, a) =>
          t in e
            ? yt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Nt = (e) => {
        var t;
        const a = (0, d.useLocalizationLocale)(),
          r = (0, gt.IT)(
            `news-page::${a}`,
            () => Et(a),
            ((n = ((e, t) => {
              for (var a in t || (t = {})) Ot.call(t, a) && It(e, a, t[a]);
              if (At) for (var a of At(t)) xt.call(t, a) && It(e, a, t[a]);
              return e;
            })({}, e)),
            (o = {
              enabled: null != (t = null == e ? void 0 : e.enabled) ? t : !!a,
            }),
            ht(n, wt(o))),
          ),
          { data: l } = r;
        var n, o;
        return {
          newsPage: l,
          query: ((e, t) => {
            var a = {};
            for (var r in e) Ot.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && At)
              for (var r of At(e))
                t.indexOf(r) < 0 && xt.call(e, r) && (a[r] = e[r]);
            return a;
          })(r, ["data"]),
        };
      };
      var Lt = a(20665),
        Pt = a(29200),
        Ht = Object.defineProperty,
        jt = Object.getOwnPropertySymbols,
        St = Object.prototype.hasOwnProperty,
        kt = Object.prototype.propertyIsEnumerable,
        Ct = (e, t, a) =>
          t in e
            ? Ht(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const zt = () => {
        const e = (0, d.useLocalization)(),
          { newsPage: t } = Nt();
        return (null == t ? void 0 : t.meta)
          ? l().createElement(
              Lt.A,
              ((e, t) => {
                for (var a in t || (t = {})) St.call(t, a) && Ct(e, a, t[a]);
                if (jt) for (var a of jt(t)) kt.call(t, a) && Ct(e, a, t[a]);
                return e;
              })({}, (0, Pt.K)(e, t.meta)),
            )
          : null;
      };
      var Rt = a(1319),
        Dt = a(92637),
        _t = a(83700),
        Wt = Object.defineProperty,
        Bt = Object.defineProperties,
        Mt = Object.getOwnPropertyDescriptors,
        qt = Object.getOwnPropertySymbols,
        Tt = Object.prototype.hasOwnProperty,
        $t = Object.prototype.propertyIsEnumerable,
        Ft = (e, t, a) =>
          t in e
            ? Wt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Xt = (e, t) => {
          for (var a in t || (t = {})) Tt.call(t, a) && Ft(e, a, t[a]);
          if (qt) for (var a of qt(t)) $t.call(t, a) && Ft(e, a, t[a]);
          return e;
        },
        Vt = (e, t) => Bt(e, Mt(t));
      const Ut = (0, ae.W)((e) => ({
          item: (0, m.AH)({
            width: "100%",
            marginTop: 0,
            position: "relative",
          }),
          link: (0, m.AH)(
            Vt(Xt({}, (0, _t.HE)(e)), {
              display: "flex",
              [g.aq.xs]: { flexDirection: "column" },
              border: "1px solid transparent",
            }),
          ),
          rowWrapper: (0, m.AH)({
            display: "flex",
            [g.aq.xs]: { flexDirection: "column" },
          }),
          linkWrapper: (0, m.AH)((0, P.hz)(20)),
          imageWrapper: (0, m.AH)({
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
            [g.aq.xs]: Vt(Xt({}, (0, P.hz)(0)), { marginBottom: 10 }),
          }),
          image: (0, m.AH)({
            position: "relative",
            width: 200,
            display: "block",
            [g.aq.xs]: { width: "100%" },
            background: e.level1,
          }),
        })),
        Kt = ({
          shareImage: e,
          trendingImage: t,
          trendingImageAlt: a,
          date: l,
          title: n,
          slug: o,
          url: i,
          tags: s,
          sticky: c,
          externalLink: m,
          index: p = 0,
          short: u,
        }) => {
          const v = (0, d.useLocalization)(),
            b = Ut(),
            f = (0, Y.Vw)(e || t, Y.SB.RATIO_16X9_320),
            E = v(
              i.includes("/p/") || i.includes("/product/")
                ? "diesel.common.post.view_game"
                : "diesel.common.post.read_more",
            ),
            y = Xe({ url: i, externalLink: m });
          return r.createElement(
            "article",
            { className: b.item },
            r.createElement(
              Pe.Iu,
              {
                event: {
                  eventAction: Pe.yn.NEWS_CLICK,
                  eventLabel: y,
                  eventValue: (0, Le.A)({
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
                    Ae.A,
                    { to: y, ariaLabelledby: o, rel: "nofollow" },
                    r.createElement(
                      "div",
                      { className: b.imageWrapper },
                      r.createElement(
                        "div",
                        { className: b.image },
                        r.createElement(
                          Rt.A,
                          { aspectRatio: g.gl.x16x9 },
                          r.createElement(Dt.o, {
                            src: f,
                            alt: a || n,
                            showBrokenOnError: !0,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                r.createElement(xe, {
                  title: n,
                  short: u,
                  slug: o,
                  sticky: c,
                  date: l,
                  externalLink: m,
                  ctaLabel: E,
                  linkUrl: y,
                  tags: s,
                }),
              ),
            ),
          );
        };
      var Qt = Object.defineProperty,
        Yt = Object.defineProperties,
        Zt = Object.getOwnPropertyDescriptors,
        Gt = Object.getOwnPropertySymbols,
        Jt = Object.prototype.hasOwnProperty,
        ea = Object.prototype.propertyIsEnumerable,
        ta = (e, t, a) =>
          t in e
            ? Qt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const aa = ({ feedItem: e, index: t }) => {
        return r.createElement(
          Kt,
          ((a = ((e, t) => {
            for (var a in t || (t = {})) Jt.call(t, a) && ta(e, a, t[a]);
            if (Gt) for (var a of Gt(t)) ea.call(t, a) && ta(e, a, t[a]);
            return e;
          })({}, e)),
          Yt(a, Zt({ index: t }))),
        );
        var a;
      };
      var ra = a(92619),
        la = a(45580);
      const na = (0, ae.W)(() => ({
          wrapper: (0, m.AH)({ paddingBottom: 16 }),
          listItems: (0, m.AH)({
            borderTop: `1px solid ${g.I3}`,
            paddingTop: 20,
            "&:not(:last-child)": {
              marginBottom: 30,
              [la.aq[la.EA.xxl]]: { marginBottom: 20 },
            },
          }),
        })),
        oa = l().memo(({ data: e, feedPromoItems: t }) => {
          const a = na(),
            r = e.length || (null == t ? void 0 : t.length),
            n = l().createElement(
              "div",
              { className: a.wrapper },
              l().createElement(L, null),
              t && t.length > 0 && l().createElement(ut, { items: t }),
              e.length &&
                l().createElement(
                  l().Fragment,
                  null,
                  l().createElement(zt, null),
                  l().createElement(
                    "div",
                    { "data-testid": "feed-items-list" },
                    l().createElement(
                      ra.B,
                      { data: e, itemClassName: a.listItems },
                      (e, t) =>
                        l().createElement(aa, { feedItem: e, index: t }),
                    ),
                  ),
                ),
            );
          return r ? n : l().createElement(L, null);
        });
      var ia = a(96416),
        sa = a(15503),
        ca = a(90743);
      const { selector: ma } = (0, ca.C)({
          name: "news-pagination",
          defaultConfig: { pageSize: 10 },
        }),
        da = (e, t, a) => {
          t.set("page", String(a)),
            e.push({ search: String(t), pathname: "news" });
        },
        pa = () => {
          const e = (0, $.useHistory)(),
            { pageSize: t } = (0, c.useSelector)(ma),
            { search: a } = (0, $.useLocation)(),
            n = new URLSearchParams(a),
            o = n.get("page"),
            i = Boolean(o),
            s = i ? Number(o) : 1,
            m = da.bind(null, e, n),
            p = (0, r.useCallback)(
              (e) => {
                m(e);
              },
              [m],
            ),
            u = 1 === s,
            {
              blogList: g,
              stickyPosts: v,
              paging: b,
            } = ((e, t) => {
              var a, r;
              const l = (0, d.useLocalizationLocale)(),
                n = (0, M.stringify)((0, q.A)((e) => !!e, { locale: l })),
                o = (0, M.stringify)(
                  (0, q.A)((e) => !!e, { count: t, locale: l, start: e * t }),
                ),
                i =
                  null == (a = (0, T.X)({ path: `content/blog/sticky?${n}` }))
                    ? void 0
                    : a.data,
                s =
                  null == (r = (0, T.X)({ path: `content/blog-posts?${o}` }))
                    ? void 0
                    : r.data;
              return {
                blogList: (null == s ? void 0 : s.elements) || [],
                stickyPosts: i || [],
                paging: null == s ? void 0 : s.paging,
              };
            })(s - 1, t),
            { data: f, feedPromoItems: E } = (0, r.useMemo)(
              () => (0, sa.g5)(g, v, u),
              [g, v, u],
            ),
            y = (null == b ? void 0 : b.total) ? Math.ceil(b.total / t) : 0,
            h = y && y > 1;
          return (
            y < s && m(y),
            ((s < 1 && i) || isNaN(s)) && m(1),
            l().createElement(
              l().Fragment,
              null,
              l().createElement(oa, { data: f, feedPromoItems: E }),
              h
                ? l().createElement(ia.A, {
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
        ua = {
          content: (0, m.AH)({
            [g.aq.md]: { flexDirection: "row" },
            display: "flex",
            flexDirection: "column-reverse",
            position: "relative",
            [g.aq.underMd]: { overflowX: "hidden" },
          }),
          innerWrapper: (0, m.AH)({ flexGrow: 1 }),
        },
        ga = ({ children: e }) =>
          l().createElement(
            "div",
            { className: ua.content },
            l().createElement("div", { className: ua.innerWrapper }, e),
          );
      var va = a(66879),
        ba = a(97116),
        fa = a(68085),
        Ea = a(60885),
        ya = a(22404),
        ha = Object.defineProperty,
        wa = Object.getOwnPropertySymbols,
        Aa = Object.prototype.hasOwnProperty,
        Oa = Object.prototype.propertyIsEnumerable,
        xa = (e, t, a) =>
          t in e
            ? ha(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ia = {
          news: (0, m.AH)({ "&.title": { fontSize: 24, margin: "10px 0" } }),
        },
        Na = () => {
          const e = (0, c.useSelector)(u.VI),
            t = (0, d.useLocalization)(),
            { newsPage: a } = Nt({ enabled: e });
          return e
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  Lt.A,
                  ((e, t) => {
                    for (var a in t || (t = {}))
                      Aa.call(t, a) && xa(e, a, t[a]);
                    if (wa)
                      for (var a of wa(t)) Oa.call(t, a) && xa(e, a, t[a]);
                    return e;
                  })({}, (0, Pt.K)(t, a.meta)),
                ),
                r.createElement(pa, null),
              )
            : r.createElement(va.A, { type: fa.A.OFFLINE });
        },
        La = () =>
          r.createElement(
            Ea.A,
            null,
            r.createElement(
              ya.fN,
              null,
              r.createElement(
                ga,
                null,
                r.createElement(
                  ba.A,
                  { className: Ia.news },
                  r.createElement(
                    p.tY,
                    {
                      fallback: r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(L, null),
                        r.createElement(B, null),
                      ),
                    },
                    r.createElement(Na, null),
                  ),
                ),
              ),
            ),
          ),
        Pa = () =>
          (0, o.A)(["/home"])
            ? l().createElement(i.T, {
                to: (0, s.generateRoutePath)("/news"),
                "data-testid": "redirect-to-news",
              })
            : l().createElement(n.A, null, l().createElement(La, null));
    },
  },
]);
//# sourceMappingURL=NewsView.egstore-site.e88bcf4909278452f1e8.js.map
