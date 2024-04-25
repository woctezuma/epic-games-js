(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [484],
  {
    67925: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => he });
      var o = i(45418),
        a = i.n(o),
        s = i(37922);
      const n = (e) => ((e) => e.get("feed"))(e).blog;
      var r = i(22538),
        l = i(56470),
        c = i(32396),
        m = i(10035),
        d = i(77915),
        g = i(1255),
        h = i(63236),
        p = i(90783),
        u = i(45035),
        b = i(50560),
        v = i(16618),
        E = i(73172),
        f = i(84244),
        x = i(74758),
        L = i(96737),
        S = i.n(L),
        P = i(73142);
      const N = ({ meta: e, title: t }) => {
        const { EPIC_SERVER_URL: i } = (0, s.useSelector)(P.f3),
          o = S()(i || "https://epicgames.com"),
          { pathname: n } = (0, r.useLocation)(),
          l = S()(n);
        return (
          l.set("protocol", o.protocol),
          l.set("host", o.host),
          l.set("hash", ""),
          l.set("query", ""),
          a().createElement(
            x.q,
            { meta: e, title: t },
            a().createElement("link", {
              id: "page-link-canonical",
              "data-testid": "page-link-canonical",
              rel: "canonical",
              href: l.toString(),
            }),
          )
        );
      };
      var y = i(93844),
        C = i(72668),
        O = i(46741),
        A = i(81549),
        I = i(29498),
        w = i(23752),
        R = i(15130),
        _ = i(65817),
        k = Object.defineProperty,
        D = Object.defineProperties,
        H = Object.getOwnPropertyDescriptors,
        T = Object.getOwnPropertySymbols,
        V = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        Y = (e, t, i) =>
          t in e
            ? k(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        Z = (e, t) => {
          for (var i in t || (t = {})) V.call(t, i) && Y(e, i, t[i]);
          if (T) for (var i of T(t)) B.call(t, i) && Y(e, i, t[i]);
          return e;
        };
      const X = (0, l.iv)({ overflow: "hidden" }),
        $ = (0, l.iv)(R.Hi, R.CX, (0, w.fF)(w.oM.x16x9), {
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          [I.Uc.lg]: { borderRadius: I.E0 },
        }),
        j = (0, l.iv)({ width: "100%", opacity: 0, position: "absolute" }),
        U = (0, l.iv)({ marginTop: 40, [I.Uc.xxl]: { padding: "0 72px" } }),
        z = (0, l.iv)({ position: "relative" }),
        M = (0, l.iv)({
          marginBottom: 40,
          h1:
            ((W = Z({}, (0, I.fL)(40, -0.5, 1))),
            (F = { fontWeight: I.Ue.bold, marginBottom: 20 }),
            D(W, H(F))),
        });
      var W, F;
      const q = (0, l.iv)({
          paddingRight: 5,
          marginRight: 5,
          borderRight: "1px solid #000",
        }),
        K = (0, l.iv)({ marginTop: 40, fontSize: 16 }),
        G = (0, l.iv)({
          img: {
            cursor: "pointer",
            border: "1px solid transparent",
            transition: "border 0.3s ease-in-out",
            pointerEvents: "all",
            "&:hover": { border: "1px solid black" },
          },
        }),
        J = (0, l.iv)({
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: I.CT,
          top: 0,
          left: 0,
          zIndex: _.W.modal,
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
      var Q = ((e) => (
        (e.CLOSE = "CLOSE"), (e.PREV = "PREV"), (e.NEXT = "NEXT"), e
      ))(Q || {});
      const ee = (e) =>
          (0, l.iv)(
            Z(
              { color: I.$e, position: "absolute", padding: 15 },
              "CLOSE" === e
                ? { right: 5, top: 5 }
                : "PREV" === e
                  ? { left: 0, top: "calc(50% - 10px)" }
                  : "NEXT" === e
                    ? { right: 0, top: "calc(50% - 10px)" }
                    : { top: "calc(50% - 10px)" },
            ),
          ),
        te = (0, l.iv)({
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
        ie = (0, l.iv)({ img: { pointerEvents: "auto" } });
      class oe extends a().PureComponent {
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
                  const e = (0, E.Y)();
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
              (0, E.Y)().document.body.className += ` ${X}`;
              const i = null == (t = e.target) ? void 0 : t.dataset,
                o = parseInt(i.idx || "0", 10) || 0;
              this.setState({ current: o });
            }),
            (this.hideLightbox = (e) => {
              e.preventDefault(),
                ((0, E.Y)().document.body.className = (0,
                E.Y)().document.body.className.replace(` ${X}`, "")),
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
          (0, E.Y)().addEventListener("scroll", this.handleScroll),
            this.initLightbox(this.props.blog);
        }
        componentWillUnmount() {
          (0, E.Y)().removeEventListener("scroll", this.handleScroll),
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
          const i = (0, E.Y)().document.getElementById("cmsSection");
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
            g = !0 === t.noTopImage || !o,
            h = (0, y.LX)(e, t, void 0, c),
            p = g
              ? {}
              : { backgroundImage: `url("${o}")`, backgroundPosition: "top" };
          return a().createElement(
            "div",
            { className: ie },
            a().createElement(N, {
              meta: h,
              title: i("egstore.store.meta.title.article", [c]),
            }),
            g
              ? null
              : a().createElement(
                  "div",
                  {
                    ref: this.blogHeader,
                    className: $,
                    style: p,
                    "data-testid": "header",
                  },
                  a().createElement("img", { className: j, alt: n, src: o }),
                ),
            a().createElement(
              "section",
              { className: U },
              a().createElement(
                "article",
                { "data-testid": "article" },
                a().createElement(
                  "div",
                  { ref: this.cmsContainer, className: z },
                  a().createElement(
                    "div",
                    { className: M },
                    a().createElement("h1", null, c),
                    a().createElement(
                      "div",
                      null,
                      t.subtitle
                        ? a().createElement(
                            "span",
                            { className: q },
                            t.subtitle,
                          )
                        : null,
                      a().createElement("span", null, d),
                    ),
                    m &&
                      a().createElement(
                        "div",
                        { className: K },
                        a().createElement(f.v0, {
                          code: "egstore.blog.article.author",
                          args: [m],
                        }),
                      ),
                  ),
                  a().createElement("section", {
                    id: "cmsSection",
                    className: (0, l.cx)(te, { [G]: s }),
                    dangerouslySetInnerHTML: { __html: r },
                  }),
                ),
              ),
            ),
            this.state.current >= 0 &&
              a().createElement(
                "div",
                {
                  className: J,
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
                    className: ee(Q.CLOSE),
                    onClick: this.hideLightbox,
                    "data-testid": "lightbox-close",
                  },
                  a().createElement(C.Z, { icon: A.Z.CLOSE, size: O.$.XSMALL }),
                ),
                a().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ee(Q.PREV),
                    onClick: this.prevImage,
                    "data-testid": "lightbox-prev",
                  },
                  a().createElement(C.Z, {
                    icon: A.Z.CHEVRON_FLIPPED,
                    size: O.$.XSMALL,
                  }),
                ),
                a().createElement(
                  "span",
                  {
                    role: "presentation",
                    className: ee(Q.NEXT),
                    onClick: this.nextImage,
                    "data-testid": "lightbox-next",
                  },
                  a().createElement(C.Z, {
                    icon: A.Z.CHEVRON,
                    size: O.$.XSMALL,
                  }),
                ),
              ),
          );
        }
      }
      const ae = (0, f.in)(oe),
        se = (0, l.iv)({ minHeight: "100vh" }),
        ne = ({ isLauncher: e, blog: t, getBlogPost: i }) => {
          var o, n;
          const l = (0, s.useSelector)(b.e),
            E = (0, m.useLocalizationLocale)(),
            f = (0, r.useParams)(),
            { newsSlug: x } = f || {};
          if (
            (a().useEffect(() => {
              const e = t.state === h.s.notAsked,
                o = t.state === h.s.success;
              (e || (o && t.latestValue.slug !== x)) && i(E, x);
            }, [x, t]),
            t.state === h.s.error)
          )
            return a().createElement(v.Z, {
              to: `${(0, c.getPlainPath)()}/${E}/not-found`,
            });
          if (
            t.state === h.s.success &&
            (null == (n = null == (o = t.latestValue) ? void 0 : o.redirect)
              ? void 0
              : n.url)
          ) {
            const { url: e, code: i } = t.latestValue.redirect;
            return a().createElement(g.Z, {
              to: (0, c.generateRoutePath)(e),
              status: i ? Number(i) : 301,
            });
          }
          return a().createElement(
            p.Z,
            { pageTheme: l ? u.Fj : u.f8 },
            a().createElement(
              d.Yn,
              null,
              a().createElement(
                "div",
                { id: "storeNews", className: se },
                t.latestValue &&
                  a().createElement(ae, {
                    blog: t.latestValue,
                    isLauncher: e,
                    disableShareIcons: !0,
                  }),
              ),
            ),
          );
        };
      var re = i(68692),
        le = i(8604);
      const ce = (0, s.connect)(
        (e) => ({ blog: n(e), isLauncher: (0, le.Ip)(e) }),
        (e) => ({ getBlogPost: (t, i) => e(re.I.getBlogPost(t, i)) }),
      )(ne);
      var me = i(41846),
        de = i(18567);
      const ge = () => o.createElement(ce, null);
      ge.getInitialProps = (e, t) => {
        return (
          (i = void 0),
          (o = [e, t]),
          (a = function* (e, { store: t }) {
            const i = e.params || {},
              { newsSlug: o, locale: a } = i;
            if ((t.dispatch(de.Z.setSSRPageTheme(u.f8)), o))
              try {
                yield (0, me.tn)(t.dispatch, a, o);
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
      const he = ge;
    },
  },
]);
//# sourceMappingURL=ArticleView.egstore-site.9119317f9551349e77ce.js.map
