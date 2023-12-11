(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [484],
  {
    53915: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => de });
      var o = i(45418),
        a = i.n(o),
        s = i(37922);
      const n = (e) => ((e) => e.get("feed"))(e).blog;
      var r = i(28901),
        l = i(88583),
        c = i(10936),
        m = i(90920),
        d = i(27542),
        g = i(1847),
        h = i(41725),
        p = i(74758),
        u = i(96737),
        b = i.n(u),
        v = i(22538),
        E = i(18023);
      const f = ({ meta: e, title: t }) => {
        const { EPIC_SERVER_URL: i } = (0, s.useSelector)(E.f3),
          o = b()(i || "https://epicgames.com"),
          { pathname: n } = (0, v.useLocation)(),
          r = b()(n);
        return (
          r.set("protocol", o.protocol),
          r.set("host", o.host),
          r.set("hash", ""),
          r.set("query", ""),
          a().createElement(
            p.q,
            { meta: e, title: t },
            a().createElement("link", {
              id: "page-link-canonical",
              "data-testid": "page-link-canonical",
              rel: "canonical",
              href: r.toString(),
            }),
          )
        );
      };
      var x = i(22085),
        L = i(77574),
        S = i(29945),
        P = i(73575),
        N = i(96545),
        y = i(906),
        C = i(13179),
        O = i(73099),
        A = Object.defineProperty,
        I = Object.defineProperties,
        w = Object.getOwnPropertyDescriptors,
        R = Object.getOwnPropertySymbols,
        _ = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        D = (e, t, i) =>
          t in e
            ? A(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        H = (e, t) => {
          for (var i in t || (t = {})) _.call(t, i) && D(e, i, t[i]);
          if (R) for (var i of R(t)) k.call(t, i) && D(e, i, t[i]);
          return e;
        };
      const T = (0, r.iv)({ overflow: "hidden" }),
        V = (0, r.iv)(O.Hi, O.CX, (0, y.fF)(y.oM.x16x9), {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          [N.Uc.lg]: { borderRadius: N.E0 },
        }),
        B = (0, r.iv)({
          width: "100%",
          opacity: 0,
          position: "absolute",
          pointerEvents: "none",
        }),
        Y = (0, r.iv)({ marginTop: 40, [N.Uc.xxl]: { padding: "0 72px" } }),
        Z = (0, r.iv)({ position: "relative" }),
        X = (0, r.iv)({
          marginBottom: 40,
          h1:
            (($ = H({}, (0, N.fL)(40, -0.5, 1))),
            (U = { fontWeight: N.Ue.bold, marginBottom: 20 }),
            I($, w(U))),
        });
      var $, U;
      const j = (0, r.iv)({
          paddingRight: 5,
          marginRight: 5,
          borderRight: "1px solid #000",
        }),
        z = (0, r.iv)({ marginTop: 40, fontSize: 16 }),
        M = (0, r.iv)({
          img: {
            cursor: "pointer",
            border: "1px solid transparent",
            transition: "border 0.3s ease-in-out",
            pointerEvents: "all",
            "&:hover": { border: "1px solid black" },
          },
        }),
        W = (0, r.iv)({
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: N.CT,
          top: 0,
          left: 0,
          zIndex: C.W.modal,
          padding: 50,
          textAlign: "center",
          img: {
            cursor: "default",
            maxWidth: "100%",
            maxHeight: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            position: "relative",
          },
        });
      var q = ((e) => (
        (e.CLOSE = "CLOSE"), (e.PREV = "PREV"), (e.NEXT = "NEXT"), e
      ))(q || {});
      const F = (e) =>
          (0, r.iv)(
            H(
              { color: N.$e, position: "absolute", padding: 15 },
              "CLOSE" === e
                ? { right: 5, top: 5 }
                : "PREV" === e
                  ? { left: 0, top: "calc(50% - 10px)" }
                  : "NEXT" === e
                    ? { right: 0, top: "calc(50% - 10px)" }
                    : { top: "calc(50% - 10px)" },
            ),
          ),
        K = (0, r.iv)({
          img: { maxWidth: "100%", height: "auto !important", margin: "2em 0" },
          ".embed-responsive-16by9": { paddingBottom: "56.25% !important" },
          ".embed-responsive": {
            margin: "2em 0",
            position: "relative",
            display: "block",
            height: 0,
            padding: 0,
            overflow: "hidden",
          },
          ".embed-responsive .embed-responsive-item,\n    .embed-responsive embed,\n    .embed-responsive iframe,\n    .embed-responsive object,\n    .embed-responsive video":
            {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              border: 0,
            },
        });
      class G extends a().PureComponent {
        constructor() {
          super(...arguments),
            (this.state = {
              current: -1,
              fixSocialPos: !1,
              topAlign: !1,
              bottomAlign: !1,
            }),
            (this.blogHeader = a().createRef()),
            (this.cmsContainer = a().createRef()),
            (this.images = []),
            (this.handleScroll = (e) => {
              if (!e) return;
              const t = this.blogHeader.current,
                i = this.cmsContainer.current,
                o = (function () {
                  const e = (0, g.Y)();
                  return void 0 === e.document
                    ? 0
                    : e.pageYOffset || e.document.documentElement.scrollTop;
                })(),
                a = t ? t.offsetHeight + 52.8 : 0,
                s = o >= (i ? i.offsetHeight + 154 : 0),
                n = o > a && !s;
              ((n && !this.state.fixSocialPos) ||
                (!n && this.state.fixSocialPos)) &&
                this.setState({
                  fixSocialPos: n,
                  topAlign: n,
                  bottomAlign: !1,
                }),
                !s ||
                  n ||
                  this.state.bottomAlign ||
                  this.setState({ bottomAlign: s }),
                0 !== o || s || this.setState({ bottomAlign: s });
            }),
            (this.showLightbox = (e) => {
              var t;
              (0, g.Y)().document.body.className += ` ${T}`;
              const i = null == (t = e.target) ? void 0 : t.dataset,
                o = parseInt(i.idx || "0", 10) || 0;
              this.setState({ current: o });
            }),
            (this.hideLightbox = (e) => {
              e.preventDefault(),
                ((0, g.Y)().document.body.className = (0,
                g.Y)().document.body.className.replace(` ${T}`, "")),
                this.setState({ current: -1 });
            }),
            (this.prevImage = (e) => {
              e.stopPropagation();
              let t = this.state.current - 1;
              t < 0 && (t = this.images.length - 1),
                this.setState({ current: t });
            }),
            (this.nextImage = (e) => {
              e.stopPropagation();
              let t = this.state.current + 1;
              t >= this.images.length && (t = 0), this.setState({ current: t });
            });
        }
        componentDidMount() {
          (0, g.Y)().addEventListener("scroll", this.handleScroll),
            this.initLightbox(this.props.blog);
        }
        componentWillUnmount() {
          (0, g.Y)().removeEventListener("scroll", this.handleScroll),
            this.images.length &&
              this.images.forEach((e) => {
                e.removeEventListener("click", this.showLightbox);
              });
        }
        componentDidUpdate(e) {
          const t = e.blog || {},
            i = this.props.blog || {};
          i.id && i.id !== t.id && this.initLightbox(i);
        }
        initLightbox(e) {
          var t;
          if (!e || !e.enableLightbox) return;
          const i = (0, g.Y)().document.getElementById("cmsSection");
          if (!i) return;
          const o = i.getElementsByTagName("img");
          (this.images = [].slice.call(o || [])),
            (null == (t = this.images) ? void 0 : t.length) &&
              this.images.forEach((e, t) => {
                e.setAttribute("data-idx", t.toString()),
                  e.addEventListener("click", this.showLightbox);
              });
        }
        render() {
          const { locale: e, blog: t, getMessage: i } = this.props,
            {
              trendingImage: o,
              enableLightbox: s = !1,
              trendingImageAlt: n = "",
              content: l,
              title: c,
              author: m,
            } = t,
            d = (
              t.date
                ? new Date(t.date).toLocaleDateString(e.replace(/_/g, "-"), {
                    month: "numeric",
                    year: "numeric",
                    day: "numeric",
                  })
                : ""
            ).replace(/\//g, "."),
            g = !0 === t.noTopImage || !o,
            p = (0, x.LX)(e, t, void 0, c),
            u = g
              ? {}
              : { backgroundImage: `url("${o}")`, backgroundPosition: "top" };
          return a().createElement(
            "div",
            null,
            a().createElement(f, {
              meta: p,
              title: i("egstore.store.meta.title.article", [c]),
            }),
            g
              ? null
              : a().createElement(
                  "div",
                  {
                    ref: this.blogHeader,
                    className: V,
                    style: u,
                    "data-testid": "header",
                  },
                  a().createElement("img", { className: B, alt: n, src: o }),
                ),
            a().createElement(
              "section",
              { className: Y },
              a().createElement(
                "article",
                { "data-testid": "article" },
                a().createElement(
                  "div",
                  { ref: this.cmsContainer, className: Z },
                  a().createElement(
                    "div",
                    { className: X },
                    a().createElement("h1", null, c),
                    a().createElement(
                      "div",
                      null,
                      t.subtitle
                        ? a().createElement(
                            "span",
                            { className: j },
                            t.subtitle,
                          )
                        : null,
                      a().createElement("span", null, d),
                    ),
                    m &&
                      a().createElement(
                        "div",
                        { className: z },
                        a().createElement(h.v0, {
                          code: "egstore.blog.article.author",
                          args: [m],
                        }),
                      ),
                  ),
                  a().createElement("section", {
                    id: "cmsSection",
                    className: (0, r.cx)(K, { [M]: s }),
                    dangerouslySetInnerHTML: { __html: l },
                  }),
                ),
              ),
            ),
            this.state.current >= 0 &&
              a().createElement(
                "div",
                {
                  className: W,
                  onClick: this.hideLightbox,
                  role: "presentation",
                  "data-testid": "lightbox",
                },
                a().createElement("img", {
                  src: this.images[this.state.current].src,
                  alt: "",
                }),
                a().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: F(q.CLOSE),
                    onClick: this.hideLightbox,
                    "data-testid": "lightbox-close",
                  },
                  a().createElement(L.Z, { icon: P.Z.CLOSE, size: S.$.XSMALL }),
                ),
                a().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: F(q.PREV),
                    onClick: this.prevImage,
                    "data-testid": "lightbox-prev",
                  },
                  a().createElement(L.Z, {
                    icon: P.Z.CHEVRON_FLIPPED,
                    size: S.$.XSMALL,
                  }),
                ),
                a().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: F(q.NEXT),
                    onClick: this.nextImage,
                    "data-testid": "lightbox-next",
                  },
                  a().createElement(L.Z, {
                    icon: P.Z.CHEVRON,
                    size: S.$.XSMALL,
                  }),
                ),
              ),
          );
        }
      }
      const J = (0, h.in)(G);
      var Q = i(22463),
        ee = i(98142),
        te = i(87946),
        ie = i(91841);
      const oe = (0, r.iv)({ minHeight: "100vh" }),
        ae = ({ isLauncher: e, blog: t, getBlogPost: i }) => {
          var o, s;
          const n = (0, d.useLocalizationLocale)(),
            r = (0, v.useParams)(),
            { newsSlug: g } = r || {};
          if (
            (a().useEffect(() => {
              const e = t.state === te.s.notAsked,
                o = t.state === te.s.success;
              (e || (o && t.latestValue.slug !== g)) && i(n, g);
            }, [g, t]),
            t.state === te.s.error)
          )
            return a().createElement(ee.Z, {
              to: `${(0, Q.getPlainPath)()}/${n}/not-found`,
            });
          if (
            t.state === te.s.success &&
            (null == (s = null == (o = t.latestValue) ? void 0 : o.redirect)
              ? void 0
              : s.url)
          ) {
            const { url: e, code: i } = t.latestValue.redirect;
            return a().createElement(ie.Z, {
              to: (0, Q.generateRoutePath)(e),
              status: i ? Number(i) : 301,
            });
          }
          return a().createElement(
            m.Z,
            { pageTheme: c.f8 },
            a().createElement(
              l.Yn,
              null,
              a().createElement(
                "div",
                { id: "storeNews", className: oe },
                t.latestValue &&
                  a().createElement(J, {
                    blog: t.latestValue,
                    isLauncher: e,
                    disableShareIcons: !0,
                  }),
              ),
            ),
          );
        };
      var se = i(12890),
        ne = i(52099);
      const re = (0, s.connect)(
        (e) => ({ blog: n(e), isLauncher: (0, ne.Ip)(e) }),
        (e) => ({ getBlogPost: (t, i) => e(se.I.getBlogPost(t, i)) }),
      )(ae);
      var le = i(61264),
        ce = i(46786);
      const me = () => o.createElement(re, null);
      me.getInitialProps = (e, t) => {
        return (
          (i = void 0),
          (o = [e, t]),
          (a = function* (e, { store: t }) {
            const i = e.params || {},
              { newsSlug: o, locale: a } = i;
            if ((t.dispatch(ce.Z.setSSRPageTheme(c.f8)), o))
              try {
                yield (0, le.tn)(t.dispatch, a, o);
              } catch (e) {
                console.error(
                  "PromotionView SSR getInitialProps failed (%s)",
                  e.message,
                );
              }
          }),
          new Promise((e, t) => {
            var s = (e) => {
                try {
                  r(a.next(e));
                } catch (e) {
                  t(e);
                }
              },
              n = (e) => {
                try {
                  r(a.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              r = (t) =>
                t.done ? e(t.value) : Promise.resolve(t.value).then(s, n);
            r((a = a.apply(i, o)).next());
          })
        );
        var i, o, a;
      };
      const de = me;
    },
  },
]);
//# sourceMappingURL=ArticleView.egstore-site.0977996ba1e1b34412bd.js.map
