"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [588],
  {
    86448: (e, t, o) => {
      o.r(t), o.d(t, { default: () => he });
      var a = o(8788),
        i = o.n(a),
        s = o(3493);
      const n = (e) => ((e) => e.get("feed"))(e).blog;
      var r = o(13758),
        l = o(11923),
        c = o(36233),
        m = o(96157),
        d = o(22404),
        g = o(54883),
        h = o(66168),
        p = o(60885),
        u = o(71318),
        b = o(10288),
        E = o(6415),
        v = o(96687),
        f = o(42209),
        x = o(380),
        A = o(49942),
        S = o.n(A),
        L = o(54232);
      const P = ({ meta: e, title: t }) => {
        const { EPIC_SERVER_URL: o } = (0, s.useSelector)(L.sQ),
          a = S()(o || "https://epicgames.com"),
          { pathname: n } = (0, r.useLocation)(),
          l = S()(n);
        return (
          l.set("protocol", a.protocol),
          l.set("host", a.host),
          l.set("hash", ""),
          l.set("query", ""),
          i().createElement(
            x.m,
            { meta: e, title: t },
            i().createElement("link", {
              id: "page-link-canonical",
              "data-testid": "page-link-canonical",
              rel: "canonical",
              href: l.toString(),
            }),
          )
        );
      };
      var N = o(15503),
        y = o(54699),
        H = o(98186),
        k = o(40440),
        O = o(64032),
        w = o(55115),
        C = o(24207),
        R = o(85392),
        _ = Object.defineProperty,
        I = Object.defineProperties,
        V = Object.getOwnPropertyDescriptors,
        D = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        j = (e, t, o) =>
          t in e
            ? _(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[t] = o),
        X = (e, t) => {
          for (var o in t || (t = {})) T.call(t, o) && j(e, o, t[o]);
          if (D) for (var o of D(t)) B.call(t, o) && j(e, o, t[o]);
          return e;
        };
      const z = (0, l.AH)({ overflow: "hidden" }),
        M = (0, l.AH)(C.aJ, C.KG, (0, w.ko)(w.gl.x16x9), {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          [O.aq.lg]: { borderRadius: O.Vq },
        }),
        q = (0, l.AH)({ width: "100%", opacity: 0, position: "absolute" }),
        U = (0, l.AH)({ marginTop: 40, [O.aq.xxl]: { padding: "0 72px" } }),
        W = (0, l.AH)({ position: "relative" }),
        $ = (0, l.AH)({
          marginBottom: 40,
          h1:
            ((K = X({}, (0, O.Qq)(40, -0.5, 1))),
            (Q = { fontWeight: O.Wy.bold, marginBottom: 20 }),
            I(K, V(Q))),
        });
      var K, Q;
      const Y = (0, l.AH)({
          paddingRight: 5,
          marginRight: 5,
          borderRight: "1px solid #000",
        }),
        F = (0, l.AH)({ marginTop: 40, fontSize: 16 }),
        G = (0, l.AH)({
          img: {
            cursor: "pointer",
            border: "1px solid transparent",
            transition: "border 0.3s ease-in-out",
            pointerEvents: "all",
            "&:hover": { border: "1px solid black" },
          },
        }),
        J = (0, l.AH)({
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: O.xS,
          top: 0,
          left: 0,
          zIndex: R.f.modal,
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
      var Z = ((e) => (
        (e.CLOSE = "CLOSE"), (e.PREV = "PREV"), (e.NEXT = "NEXT"), e
      ))(Z || {});
      const ee = (e) =>
          (0, l.AH)(
            X(
              { color: O.Yk, position: "absolute", padding: 15 },
              "CLOSE" === e
                ? { right: 5, top: 5 }
                : "PREV" === e
                  ? { left: 0, top: "calc(50% - 10px)" }
                  : "NEXT" === e
                    ? { right: 0, top: "calc(50% - 10px)" }
                    : { top: "calc(50% - 10px)" },
            ),
          ),
        te = (0, l.AH)({
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
        oe = (0, l.AH)({ img: { pointerEvents: "auto" } });
      class ae extends i().PureComponent {
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
                  const e = (0, v.c)();
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
              (0, v.c)().document.body.className += ` ${z}`;
              const o = null == (t = e.target) ? void 0 : t.dataset,
                a = parseInt(o.idx || "0", 10) || 0;
              this.setState({ current: a });
            }),
            (this.hideLightbox = (e) => {
              e.preventDefault(),
                ((0, v.c)().document.body.className = (0,
                v.c)().document.body.className.replace(` ${z}`, "")),
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
          (0, v.c)().addEventListener("scroll", this.handleScroll),
            this.initLightbox(this.props.blog);
        }
        componentWillUnmount() {
          (0, v.c)().removeEventListener("scroll", this.handleScroll),
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
          const o = (0, v.c)().document.getElementById("cmsSection");
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
            g = !0 === t.noTopImage || !a,
            h = (0, N.X0)(e, t, void 0, c),
            p = g
              ? {}
              : { backgroundImage: `url("${a}")`, backgroundPosition: "top" };
          return i().createElement(
            "div",
            { className: oe },
            i().createElement(P, {
              meta: h,
              title: o("egstore.store.meta.title.article", [c]),
            }),
            g
              ? null
              : i().createElement(
                  "div",
                  {
                    ref: this.blogHeader,
                    className: M,
                    style: p,
                    "data-testid": "header",
                  },
                  i().createElement("img", { className: q, alt: n, src: a }),
                ),
            i().createElement(
              "section",
              { className: U },
              i().createElement(
                "article",
                { "data-testid": "article" },
                i().createElement(
                  "div",
                  { ref: this.cmsContainer, className: W },
                  i().createElement(
                    "div",
                    { className: $ },
                    i().createElement("h1", null, c),
                    i().createElement(
                      "div",
                      null,
                      t.subtitle
                        ? i().createElement(
                            "span",
                            { className: Y },
                            t.subtitle,
                          )
                        : null,
                      i().createElement("span", null, d),
                    ),
                    m &&
                      i().createElement(
                        "div",
                        { className: F },
                        i().createElement(f.QB, {
                          code: "egstore.blog.article.author",
                          args: [m],
                        }),
                      ),
                  ),
                  i().createElement("section", {
                    id: "cmsSection",
                    className: (0, l.cx)(te, { [G]: s }),
                    dangerouslySetInnerHTML: { __html: r },
                  }),
                ),
              ),
            ),
            this.state.current >= 0 &&
              i().createElement(
                "div",
                {
                  className: J,
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
                    className: ee(Z.CLOSE),
                    onClick: this.hideLightbox,
                    "data-testid": "lightbox-close",
                  },
                  i().createElement(y.A, { icon: k.A.CLOSE, size: H.o.XSMALL }),
                ),
                i().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ee(Z.PREV),
                    onClick: this.prevImage,
                    "data-testid": "lightbox-prev",
                  },
                  i().createElement(y.A, {
                    icon: k.A.CHEVRON_FLIPPED,
                    size: H.o.XSMALL,
                  }),
                ),
                i().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ee(Z.NEXT),
                    onClick: this.nextImage,
                    "data-testid": "lightbox-next",
                  },
                  i().createElement(y.A, {
                    icon: k.A.CHEVRON,
                    size: H.o.XSMALL,
                  }),
                ),
              ),
          );
        }
      }
      const ie = (0, f.gj)(ae),
        se = (0, l.AH)({ minHeight: "100vh" }),
        ne = ({ isLauncher: e, blog: t, getBlogPost: o }) => {
          var a, n;
          const l = (0, s.useSelector)(b.k),
            v = (0, m.useLocalizationLocale)(),
            f = (0, r.useParams)(),
            { newsSlug: x } = f || {};
          if (
            (i().useEffect(() => {
              const e = t.state === h.V.notAsked,
                a = t.state === h.V.success;
              (e || (a && t.latestValue.slug !== x)) && o(v, x);
            }, [x, t]),
            t.state === h.V.error)
          )
            return i().createElement(E.A, {
              to: `${(0, c.getPlainPath)()}/${v}/not-found`,
            });
          if (
            t.state === h.V.success &&
            (null == (n = null == (a = t.latestValue) ? void 0 : a.redirect)
              ? void 0
              : n.url)
          ) {
            const { url: e, code: o } = t.latestValue.redirect;
            return i().createElement(g.A, {
              to: (0, c.generateRoutePath)(e),
              status: o ? Number(o) : 301,
            });
          }
          return i().createElement(
            p.A,
            { pageTheme: l ? u.m_ : u.dA },
            i().createElement(
              d.fN,
              null,
              i().createElement(
                "div",
                { id: "storeNews", className: se },
                t.latestValue &&
                  i().createElement(ie, {
                    blog: t.latestValue,
                    isLauncher: e,
                    disableShareIcons: !0,
                  }),
              ),
            ),
          );
        };
      var re = o(30912),
        le = o(58361);
      const ce = (0, s.connect)(
        (e) => ({ blog: n(e), isLauncher: (0, le.xw)(e) }),
        (e) => ({ getBlogPost: (t, o) => e(re.k.getBlogPost(t, o)) }),
      )(ne);
      var me = o(83773),
        de = o(29217);
      const ge = () => a.createElement(ce, null);
      ge.getInitialProps = (e, t) => {
        return (
          (o = void 0),
          (a = [e, t]),
          (i = function* (e, { store: t }) {
            const o = e.params || {},
              { newsSlug: a, locale: i } = o;
            if ((t.dispatch(de.A.setSSRPageTheme(u.dA)), a))
              try {
                yield (0, me.fc)(t.dispatch, i, a);
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
      const he = ge;
    },
  },
]);
//# sourceMappingURL=ArticleView.egstore-site.0150d3bd313ead801068.js.map
