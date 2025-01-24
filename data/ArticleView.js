"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [588],
  {
    86448: (e, t, o) => {
      o.r(t), o.d(t, { default: () => he });
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
        x = o(10288),
        A = o(6415),
        S = o(96687),
        L = o(27954),
        P = o(380),
        N = o(49942),
        y = o.n(N),
        H = o(54232);
      const k = ({ meta: e, title: t }) => {
        const { EPIC_SERVER_URL: o } = (0, l.useSelector)(H.sQ),
          a = y()(o || "https://epicgames.com"),
          { pathname: s } = (0, g.useLocation)(),
          n = y()(s);
        return (
          n.set("protocol", a.protocol),
          n.set("host", a.host),
          n.set("hash", ""),
          n.set("query", ""),
          i().createElement(
            P.m,
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
        w = o(54699),
        C = o(98186),
        R = o(40440),
        _ = o(64032),
        I = o(55115),
        V = o(24207),
        D = o(85392),
        T = Object.defineProperty,
        B = Object.defineProperties,
        j = Object.getOwnPropertyDescriptors,
        X = Object.getOwnPropertySymbols,
        z = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        q = (e, t, o) =>
          t in e
            ? T(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[t] = o),
        U = (e, t) => {
          for (var o in t || (t = {})) z.call(t, o) && q(e, o, t[o]);
          if (X) for (var o of X(t)) M.call(t, o) && q(e, o, t[o]);
          return e;
        };
      const W = (0, h.AH)({ overflow: "hidden" }),
        $ = (0, h.AH)(V.aJ, V.KG, (0, I.ko)(I.gl.x16x9), {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          [_.aq.lg]: { borderRadius: _.Vq },
        }),
        K = (0, h.AH)({ width: "100%", opacity: 0, position: "absolute" }),
        Q = (0, h.AH)({ marginTop: 40, [_.aq.xxl]: { padding: "0 72px" } }),
        Y = (0, h.AH)({ position: "relative" }),
        F = (0, h.AH)({
          marginBottom: 40,
          h1:
            ((G = U({}, (0, _.Qq)(40, -0.5, 1))),
            (J = { fontWeight: _.Wy.bold, marginBottom: 20 }),
            B(G, j(J))),
        });
      var G, J;
      const Z = (0, h.AH)({
          paddingRight: 5,
          marginRight: 5,
          borderRight: "1px solid #000",
        }),
        ee = (0, h.AH)({ marginTop: 40, fontSize: 16 }),
        te = (0, h.AH)({
          img: {
            cursor: "pointer",
            border: "1px solid transparent",
            transition: "border 0.3s ease-in-out",
            pointerEvents: "all",
            "&:hover": { border: "1px solid black" },
          },
        }),
        oe = (0, h.AH)({
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: _.xS,
          top: 0,
          left: 0,
          zIndex: D.f.modal,
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
      var ae = ((e) => (
        (e.CLOSE = "CLOSE"), (e.PREV = "PREV"), (e.NEXT = "NEXT"), e
      ))(ae || {});
      const ie = (e) =>
          (0, h.AH)(
            U(
              { color: _.Yk, position: "absolute", padding: 15 },
              "CLOSE" === e
                ? { right: 5, top: 5 }
                : "PREV" === e
                  ? { left: 0, top: "calc(50% - 10px)" }
                  : "NEXT" === e
                    ? { right: 0, top: "calc(50% - 10px)" }
                    : { top: "calc(50% - 10px)" },
            ),
          ),
        se = (0, h.AH)({
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
        ne = (0, h.AH)({ img: { pointerEvents: "auto" } });
      class re extends i().PureComponent {
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
                  const e = (0, S.c)();
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
              (0, S.c)().document.body.className += ` ${W}`;
              const o = null == (t = e.target) ? void 0 : t.dataset,
                a = parseInt(o.idx || "0", 10) || 0;
              this.setState({ current: a });
            }),
            (this.hideLightbox = (e) => {
              e.preventDefault(),
                ((0, S.c)().document.body.className = (0,
                S.c)().document.body.className.replace(` ${W}`, "")),
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
          (0, S.c)().addEventListener("scroll", this.handleScroll),
            this.initLightbox(this.props.blog);
        }
        componentWillUnmount() {
          (0, S.c)().removeEventListener("scroll", this.handleScroll),
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
          const o = (0, S.c)().document.getElementById("cmsSection");
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
            { className: ne },
            i().createElement(k, {
              meta: g,
              title: o("egstore.store.meta.title.article", [l]),
            }),
            d
              ? null
              : i().createElement(
                  "div",
                  {
                    ref: this.blogHeader,
                    className: $,
                    style: p,
                    "data-testid": "header",
                  },
                  i().createElement("img", { className: K, alt: n, src: a }),
                ),
            i().createElement(
              "section",
              { className: Q },
              i().createElement(
                "article",
                { "data-testid": "article" },
                i().createElement(
                  "div",
                  { ref: this.cmsContainer, className: Y },
                  i().createElement(
                    "div",
                    { className: F },
                    i().createElement("h1", null, l),
                    i().createElement(
                      "div",
                      null,
                      t.subtitle
                        ? i().createElement(
                            "span",
                            { className: Z },
                            t.subtitle,
                          )
                        : null,
                      i().createElement("span", null, m),
                    ),
                    c &&
                      i().createElement(
                        "div",
                        { className: ee },
                        i().createElement(L.QB, {
                          code: "egstore.blog.article.author",
                          args: [c],
                        }),
                      ),
                  ),
                  i().createElement("section", {
                    id: "cmsSection",
                    className: (0, h.cx)(se, { [te]: s }),
                    dangerouslySetInnerHTML: { __html: r },
                  }),
                ),
              ),
            ),
            this.state.current >= 0 &&
              i().createElement(
                "div",
                {
                  className: oe,
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
                    className: ie(ae.CLOSE),
                    onClick: this.hideLightbox,
                    "data-testid": "lightbox-close",
                  },
                  i().createElement(w.A, { icon: R.A.CLOSE, size: C.o.XSMALL }),
                ),
                i().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ie(ae.PREV),
                    onClick: this.prevImage,
                    "data-testid": "lightbox-prev",
                  },
                  i().createElement(w.A, {
                    icon: R.A.CHEVRON_FLIPPED,
                    size: C.o.XSMALL,
                  }),
                ),
                i().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ie(ae.NEXT),
                    onClick: this.nextImage,
                    "data-testid": "lightbox-next",
                  },
                  i().createElement(w.A, {
                    icon: R.A.CHEVRON,
                    size: C.o.XSMALL,
                  }),
                ),
              ),
          );
        }
      }
      const le = (0, L.gj)(re),
        ce = (0, h.AH)({ minHeight: "100vh" }),
        me = ({ isLauncher: e, blog: t, getBlogPost: o }) => {
          var a, n;
          const r = (0, l.useSelector)(x.k),
            c = (0, u.useLocalizationLocale)(),
            m = (0, g.useParams)(),
            { newsSlug: d } = m || {};
          if (
            (i().useEffect(() => {
              const e = t.state === v.V.notAsked,
                a = t.state === v.V.success;
              (e || (a && t.latestValue.slug !== d)) && o(c, d);
            }, [d, t]),
            t.state === v.V.error)
          )
            return i().createElement(A.A, {
              to: `${(0, p.getPlainPath)()}/${c}/not-found`,
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
            { pageTheme: r ? s.m_ : s.dA },
            i().createElement(
              b.fN,
              null,
              i().createElement(
                "div",
                { id: "storeNews", className: ce },
                t.latestValue &&
                  i().createElement(le, {
                    blog: t.latestValue,
                    isLauncher: e,
                    disableShareIcons: !0,
                  }),
              ),
            ),
          );
        },
        de = (0, l.connect)(
          (e) => ({ blog: d(e), isLauncher: (0, c.xw)(e) }),
          (e) => ({ getBlogPost: (t, o) => e(m.k.getBlogPost(t, o)) }),
        )(me);
      const ge = () => a.createElement(de, null);
      ge.getInitialProps = (e, t) => {
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
      const he = ge;
    },
  },
]);
//# sourceMappingURL=ArticleView.egstore-site.aa2853a6ccd244df5409.js.map
