"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [588],
  {
    86448: (e, t, o) => {
      o.r(t), o.d(t, { default: () => ge });
      var a = o(8788),
        i = o.n(a),
        s = o(71318),
        n = o(29217),
        r = o(83773),
        l = o(41791),
        c = o(58361),
        m = o(30912);
      const d = (e) => ((e) => e.get("feed"))(e).blog;
      var g = o(13758),
        h = o(34988),
        p = o(36233),
        u = o(96157),
        b = o(22404),
        E = o(54883),
        v = o(66168),
        f = o(60885),
        x = o(6415),
        A = o(96687),
        S = o(27954),
        L = o(380),
        P = o(49942),
        N = o.n(P),
        y = o(54232);
      const H = ({ meta: e, title: t }) => {
        const { EPIC_SERVER_URL: o } = (0, l.useSelector)(y.sQ),
          a = N()(o || "https://epicgames.com"),
          { pathname: s } = (0, g.useLocation)(),
          n = N()(s);
        return (
          n.set("protocol", a.protocol),
          n.set("host", a.host),
          n.set("hash", ""),
          n.set("query", ""),
          i().createElement(
            L.m,
            { meta: e, title: t },
            i().createElement("link", {
              id: "page-link-canonical",
              "data-testid": "page-link-canonical",
              rel: "canonical",
              href: n.toString(),
            }),
          )
        );
      };
      var O = o(15503),
        k = o(54699),
        w = o(98186),
        C = o(40440),
        R = o(64032),
        _ = o(55115),
        I = o(24207),
        V = o(85392),
        D = Object.defineProperty,
        T = Object.defineProperties,
        B = Object.getOwnPropertyDescriptors,
        j = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        z = Object.prototype.propertyIsEnumerable,
        M = (e, t, o) =>
          t in e
            ? D(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[t] = o),
        q = (e, t) => {
          for (var o in t || (t = {})) X.call(t, o) && M(e, o, t[o]);
          if (j) for (var o of j(t)) z.call(t, o) && M(e, o, t[o]);
          return e;
        };
      const U = (0, h.AH)({ overflow: "hidden" }),
        W = (0, h.AH)(I.aJ, I.KG, (0, _.ko)(_.gl.x16x9), {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          [R.aq.lg]: { borderRadius: R.Vq },
        }),
        $ = (0, h.AH)({ width: "100%", opacity: 0, position: "absolute" }),
        K = (0, h.AH)({ marginTop: 40, [R.aq.xxl]: { padding: "0 72px" } }),
        Q = (0, h.AH)({ position: "relative" }),
        Y = (0, h.AH)({
          marginBottom: 40,
          h1:
            ((F = q({}, (0, R.Qq)(40, -0.5, 1))),
            (G = { fontWeight: R.Wy.bold, marginBottom: 20 }),
            T(F, B(G))),
        });
      var F, G;
      const J = (0, h.AH)({
          paddingRight: 5,
          marginRight: 5,
          borderRight: "1px solid #000",
        }),
        Z = (0, h.AH)({ marginTop: 40, fontSize: 16 }),
        ee = (0, h.AH)({
          img: {
            cursor: "pointer",
            border: "1px solid transparent",
            transition: "border 0.3s ease-in-out",
            pointerEvents: "all",
            "&:hover": { border: "1px solid black" },
          },
        }),
        te = (0, h.AH)({
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: R.xS,
          top: 0,
          left: 0,
          zIndex: V.f.modal,
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
      var oe = ((e) => (
        (e.CLOSE = "CLOSE"), (e.PREV = "PREV"), (e.NEXT = "NEXT"), e
      ))(oe || {});
      const ae = (e) =>
          (0, h.AH)(
            q(
              { color: R.Yk, position: "absolute", padding: 15 },
              "CLOSE" === e
                ? { right: 5, top: 5 }
                : "PREV" === e
                  ? { left: 0, top: "calc(50% - 10px)" }
                  : "NEXT" === e
                    ? { right: 0, top: "calc(50% - 10px)" }
                    : { top: "calc(50% - 10px)" },
            ),
          ),
        ie = (0, h.AH)({
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
        }),
        se = (0, h.AH)({ img: { pointerEvents: "auto" } });
      class ne extends i().PureComponent {
        constructor() {
          super(...arguments),
            (this.state = {
              current: -1,
              fixSocialPos: !1,
              topAlign: !1,
              bottomAlign: !1,
            }),
            (this.blogHeader = i().createRef()),
            (this.cmsContainer = i().createRef()),
            (this.images = []),
            (this.handleScroll = (e) => {
              if (!e) return;
              const t = this.blogHeader.current,
                o = this.cmsContainer.current,
                a = (function () {
                  const e = (0, A.c)();
                  return void 0 === e.document
                    ? 0
                    : e.pageYOffset || e.document.documentElement.scrollTop;
                })(),
                i = t ? t.offsetHeight + 52.8 : 0,
                s = a >= (o ? o.offsetHeight + 154 : 0),
                n = a > i && !s;
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
                0 !== a || s || this.setState({ bottomAlign: s });
            }),
            (this.showLightbox = (e) => {
              var t;
              (0, A.c)().document.body.className += ` ${U}`;
              const o = null == (t = e.target) ? void 0 : t.dataset,
                a = parseInt(o.idx || "0", 10) || 0;
              this.setState({ current: a });
            }),
            (this.hideLightbox = (e) => {
              e.preventDefault(),
                ((0, A.c)().document.body.className = (0,
                A.c)().document.body.className.replace(` ${U}`, "")),
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
          (0, A.c)().addEventListener("scroll", this.handleScroll),
            this.initLightbox(this.props.blog);
        }
        componentWillUnmount() {
          (0, A.c)().removeEventListener("scroll", this.handleScroll),
            this.images.length &&
              this.images.forEach((e) => {
                e.removeEventListener("click", this.showLightbox);
              });
        }
        componentDidUpdate(e) {
          const t = e.blog || {},
            o = this.props.blog || {};
          o.id && o.id !== t.id && this.initLightbox(o);
        }
        initLightbox(e) {
          var t;
          if (!e || !e.enableLightbox) return;
          const o = (0, A.c)().document.getElementById("cmsSection");
          if (!o) return;
          const a = o.getElementsByTagName("img");
          (this.images = [].slice.call(a || [])),
            (null == (t = this.images) ? void 0 : t.length) &&
              this.images.forEach((e, t) => {
                e.setAttribute("data-idx", t.toString()),
                  e.addEventListener("click", this.showLightbox);
              });
        }
        render() {
          const { locale: e, blog: t, getMessage: o } = this.props,
            {
              trendingImage: a,
              enableLightbox: s = !1,
              trendingImageAlt: n = "",
              content: r,
              title: l,
              author: c,
            } = t,
            m = (
              t.date
                ? new Date(t.date).toLocaleDateString(e.replace(/_/g, "-"), {
                    month: "numeric",
                    year: "numeric",
                    day: "numeric",
                  })
                : ""
            ).replace(/\//g, "."),
            d = !0 === t.noTopImage || !a,
            g = (0, O.X0)(e, t, void 0, l),
            p = d
              ? {}
              : { backgroundImage: `url("${a}")`, backgroundPosition: "top" };
          return i().createElement(
            "div",
            { className: se },
            i().createElement(H, {
              meta: g,
              title: o("egstore.store.meta.title.article", [l]),
            }),
            d
              ? null
              : i().createElement(
                  "div",
                  {
                    ref: this.blogHeader,
                    className: W,
                    style: p,
                    "data-testid": "header",
                  },
                  i().createElement("img", { className: $, alt: n, src: a }),
                ),
            i().createElement(
              "section",
              { className: K },
              i().createElement(
                "article",
                { "data-testid": "article" },
                i().createElement(
                  "div",
                  { ref: this.cmsContainer, className: Q },
                  i().createElement(
                    "div",
                    { className: Y },
                    i().createElement("h1", null, l),
                    i().createElement(
                      "div",
                      null,
                      t.subtitle
                        ? i().createElement(
                            "span",
                            { className: J },
                            t.subtitle,
                          )
                        : null,
                      i().createElement("span", null, m),
                    ),
                    c &&
                      i().createElement(
                        "div",
                        { className: Z },
                        i().createElement(S.QB, {
                          code: "egstore.blog.article.author",
                          args: [c],
                        }),
                      ),
                  ),
                  i().createElement("section", {
                    id: "cmsSection",
                    className: (0, h.cx)(ie, { [ee]: s }),
                    dangerouslySetInnerHTML: { __html: r },
                  }),
                ),
              ),
            ),
            this.state.current >= 0 &&
              i().createElement(
                "div",
                {
                  className: te,
                  onClick: this.hideLightbox,
                  role: "presentation",
                  "data-testid": "lightbox",
                },
                i().createElement("img", {
                  src: this.images[this.state.current].src,
                  alt: "",
                }),
                i().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ae(oe.CLOSE),
                    onClick: this.hideLightbox,
                    "data-testid": "lightbox-close",
                  },
                  i().createElement(k.A, { icon: C.A.CLOSE, size: w.o.XSMALL }),
                ),
                i().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ae(oe.PREV),
                    onClick: this.prevImage,
                    "data-testid": "lightbox-prev",
                  },
                  i().createElement(k.A, {
                    icon: C.A.CHEVRON_FLIPPED,
                    size: w.o.XSMALL,
                  }),
                ),
                i().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ae(oe.NEXT),
                    onClick: this.nextImage,
                    "data-testid": "lightbox-next",
                  },
                  i().createElement(k.A, {
                    icon: C.A.CHEVRON,
                    size: w.o.XSMALL,
                  }),
                ),
              ),
          );
        }
      }
      const re = (0, S.gj)(ne),
        le = (0, h.AH)({ minHeight: "100vh" }),
        ce = ({ isLauncher: e, blog: t, getBlogPost: o }) => {
          var a, n;
          const r = (0, u.useLocalizationLocale)(),
            l = (0, g.useParams)(),
            { newsSlug: c } = l || {};
          if (
            (i().useEffect(() => {
              const e = t.state === v.V.notAsked,
                a = t.state === v.V.success;
              (e || (a && t.latestValue.slug !== c)) && o(r, c);
            }, [c, t]),
            t.state === v.V.error)
          )
            return i().createElement(x.A, {
              to: `${(0, p.getPlainPath)()}/${r}/not-found`,
            });
          if (
            t.state === v.V.success &&
            (null == (n = null == (a = t.latestValue) ? void 0 : a.redirect)
              ? void 0
              : n.url)
          ) {
            const { url: e, code: o } = t.latestValue.redirect;
            return i().createElement(E.A, {
              to: (0, p.generateRoutePath)(e),
              status: o ? Number(o) : 301,
            });
          }
          return i().createElement(
            f.A,
            { pageTheme: s.m_ },
            i().createElement(
              b.fN,
              null,
              i().createElement(
                "div",
                { id: "storeNews", className: le },
                t.latestValue &&
                  i().createElement(re, {
                    blog: t.latestValue,
                    isLauncher: e,
                    disableShareIcons: !0,
                  }),
              ),
            ),
          );
        },
        me = (0, l.connect)(
          (e) => ({ blog: d(e), isLauncher: (0, c.xw)(e) }),
          (e) => ({ getBlogPost: (t, o) => e(m.k.getBlogPost(t, o)) }),
        )(ce);
      const de = () => a.createElement(me, null);
      de.getInitialProps = (e, t) => {
        return (
          (o = void 0),
          (a = [e, t]),
          (i = function* (e, { store: t }) {
            const o = e.params || {},
              { newsSlug: a, locale: i } = o;
            if ((t.dispatch(n.A.setSSRPageTheme(s.dA)), a))
              try {
                yield (0, r.fc)(t.dispatch, i, a);
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
                  r(i.next(e));
                } catch (e) {
                  t(e);
                }
              },
              n = (e) => {
                try {
                  r(i.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              r = (t) =>
                t.done ? e(t.value) : Promise.resolve(t.value).then(s, n);
            r((i = i.apply(o, a)).next());
          })
        );
        var o, a, i;
      };
      const ge = de;
    },
  },
]);
//# sourceMappingURL=ArticleView.egstore-site.e1f7fe17c1e2bcf1c051.js.map
