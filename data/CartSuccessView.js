(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [211],
  {
    35594: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { CartSuccessView: () => ft, default: () => Et });
      var r = n(45418),
        a = n.n(r),
        l = n(22463),
        i = n(98142),
        o = n(41412),
        c = n(69936),
        s = n(68125),
        d = n(21810),
        m = n(7933),
        u = n(88264),
        f = n(55215);
      const E = ({ offers: e }) => {
        const {
            query: { invalidate: t },
          } = (0, m.N)({ enabled: !1 }),
          n = (0, r.useMemo)(
            () =>
              ((e) => {
                const t =
                  null == e
                    ? void 0
                    : e.reduce(
                        (e, t) =>
                          (null == t ? void 0 : t.sandboxId)
                            ? [...e, t.sandboxId]
                            : e,
                        [],
                      );
                return t ? (0, d.Z)(t) : void 0;
              })(e) || [],
            [e],
          ),
          { invalidateSandboxEntitlements: a } = (0, u.B)(n),
          {
            query: { invalidate: l },
          } = (0, f.e)({ config: { enabled: !1 } });
        return (
          (0, r.useEffect)(() => {
            t(), l(), a();
          }, [n]),
          null
        );
      };
      var v = n(41725),
        p = n(74758),
        g = n(91532),
        b = n(37922),
        h = n(4082),
        I = n(28901),
        y = n(31293),
        A = n(79746),
        x = n.n(A),
        _ = n(11629),
        L = n(52389),
        O = n(48673),
        S = n(52099),
        w = n(34193),
        M = n(1036),
        N = n(78746),
        T = n(54850),
        Z = n(56635),
        D = n(62766),
        C = n(27542),
        B = n(52224),
        k = (n(75410), n(39053), n(51187));
      (0, I.iv)({ textAlign: "center" }),
        (0, I.iv)({ marginTop: 20 }),
        (0, I.iv)({ marginTop: 30, display: "flex", justifyContent: "center" });
      const R = () => (0, B.Z)().navigateToLibrary();
      var P = n(38764);
      const G = {
          wrapper: (0, I.iv)({
            display: "flex",
            gap: 20,
            [P.Uc.underSm]: { flexDirection: "column" },
          }),
        },
        j = ({ renderLeftAction: e, renderRightAction: t }) =>
          a().createElement("div", { className: G.wrapper }, e(), t()),
        H = () =>
          a().createElement(
            N.E,
            { to: (0, l.getPath)() },
            a().createElement(v.v0, {
              code: "egstore.common.cta.continue_browsing",
            }),
          ),
        U = ({ to: e }) =>
          a().createElement(
            T.ml,
            { to: e },
            a().createElement(v.v0, {
              code: "egstore.purchase.confirmation.download_launcher",
            }),
          ),
        W = () =>
          a().createElement(
            T.gg,
            { onClick: R },
            a().createElement(v.v0, {
              code: "egstore.purchase.confirmation.open_launcher",
            }),
          ),
        $ = () => {
          const e = (0, O.dD)(),
            t = (0, b.useSelector)(S.Ip),
            n = (0, b.useSelector)(M.G5),
            r = (0, b.useSelector)(M.LZ),
            l = (0, b.useSelector)(M.F6),
            i = n ? `?trackingId=${n}` : "",
            o = `${(0, Z.V5)() ? r : l}${i}`,
            c = {
              eventAction: D.DI.EGS_DOWNLOAD_LAUNCHER,
              eventLabel: n,
              eventValue: o,
            };
          return t
            ? a().createElement(j, {
                renderLeftAction: () => a().createElement(H, null),
                renderRightAction: () =>
                  a().createElement(w.R, {
                    code: "egstore.purchase.confirmation.manage_library",
                  }),
              })
            : e
              ? a().createElement(H, null)
              : a().createElement(j, {
                  renderLeftAction: () =>
                    a().createElement(
                      D.mJ,
                      { event: c },
                      a().createElement(U, { to: o }),
                    ),
                  renderRightAction: () => a().createElement(W, null),
                });
        };
      var q = n(35477),
        V = n(8448);
      const K = () =>
          a().createElement(
            q.Z.Heading,
            { headingLevel: 1 },
            a().createElement(v.v0, {
              code: "egstore.purchase.confirmation.title",
            }),
          ),
        F = ({ transactionId: e }) =>
          a().createElement(
            V.Z.Heading,
            { headingLevel: 5 },
            a().createElement(v.v0, {
              code: "egstore.purchase.confirmation.order_number",
              args: [e],
            }),
          ),
        J = {
          wrapper: (0, I.iv)({
            display: "flex",
            flexDirection: "column",
            maxWidth: 315,
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            [P.Uc.md]: { maxWidth: 430 },
            [P.Uc.xxl]: { maxWidth: 500 },
          }),
          eyebrow: (0, I.iv)({ marginBottom: 10, textAlign: "center" }),
          title: (0, I.iv)({ marginBottom: 15, textAlign: "center" }),
          container: (0, I.iv)({ marginBottom: 40 }),
          centerText: (0, I.iv)({ textAlign: "center" }),
          subtitle: (0, I.iv)({ marginBottom: 40, textAlign: "center" }),
        },
        Y = ({
          renderImage: e,
          renderEyebrow: t,
          renderSubtitle: n,
          renderAction: r,
          renderOptIn: l,
        }) =>
          a().createElement(
            "div",
            { className: J.wrapper },
            e && a().createElement("div", { className: J.container }, e()),
            t && a().createElement("div", { className: J.eyebrow }, t()),
            a().createElement(
              "div",
              { className: J.title },
              a().createElement(K, null),
            ),
            n && a().createElement("div", { className: J.subtitle }, n()),
            a().createElement("div", { className: J.container }, r()),
            l && a().createElement("div", { className: J.container }, l()),
          );
      var z = n(34218);
      const X = () =>
          a().createElement(z.Od, {
            variant: z.Jy.Rect,
            animation: z.ru.Pulsate,
            width: 205,
            height: 50,
          }),
        Q = () =>
          a().createElement(j, { renderLeftAction: X, renderRightAction: X }),
        ee = () =>
          a().createElement(z.Od, {
            variant: z.Jy.Text,
            animation: z.ru.Pulsate,
            width: 247,
            height: 20,
          }),
        te = () =>
          a().createElement(z.Od, {
            variant: z.Jy.Rect,
            animation: z.ru.Pulsate,
            width: 130,
            height: 130,
          }),
        ne = () =>
          a().createElement(Y, {
            renderAction: () => a().createElement(Q, null),
            renderImage: () => a().createElement(te, null),
            renderSubtitle: () => a().createElement(ee, null),
          });
      var re = n(91156),
        ae = n(81702),
        le = n(38705),
        ie = n(35362),
        oe = n(8909),
        ce = n(29945);
      const se = () => {
          var e;
          const t = (0, b.useSelector)(re.n2),
            { settings: n } = (0, ae.ZP)({
              identity: t,
              settingKeyPrefix: oe.D.EMAIL,
              settingKeys: [oe.p.EMAIL],
            }),
            l =
              null == (e = n.find((e) => e.settingKey === oe.p.EMAIL))
                ? void 0
                : e.settingValue,
            [i] = (0, r.useState)(l);
          return void 0 === i
            ? a().createElement(le.QN, {
                channelType: oe.D.EMAIL,
                settingKeys: [oe.p.EMAIL],
                selectedSettingKey: oe.p.EMAIL,
                toggleTextId: "global-email-toggle-label",
                enabledMessage: "egstore.email.opt_in_toggle_enabled",
                disabledMessage: "egstore.email.opt_in",
                iconSize: ce.Z.XXSMALL,
              })
            : null;
        },
        de = () =>
          a().createElement(
            L.n4,
            { fallback: a().createElement(ie.o, null) },
            a().createElement(se, null),
          ),
        me = ({ code: e }) =>
          a().createElement(k.ZP, null, a().createElement(v.v0, { code: e }));
      const ue = ({ transactionId: e, hasMultipleItems: t }) => {
          const n = (0, O.dD)(),
            l = "F" === e.charAt(0),
            i = (0, r.useMemo)(
              () =>
                (({ isFree: e, hasMultipleItems: t, isMobile: n }) =>
                  n
                    ? e
                      ? t
                        ? "egstore.purchase.confirmation.subtitle.mobile.free.cart"
                        : "egstore.purchase.confirmation.subtitle.mobile.free"
                      : t
                        ? "egstore.purchase.confirmation.subtitle.mobile.cart"
                        : "egstore.purchase.confirmation.subtitle.mobile"
                    : e
                      ? t
                        ? "egstore.purchase.confirmation.subtitle.free.cart"
                        : "egstore.purchase.confirmation.subtitle.free"
                      : t
                        ? "egstore.purchase.confirmation.subtitle.cart"
                        : "egstore.purchase.confirmation.subtitle")({
                  isFree: l,
                  hasMultipleItems: t,
                  isMobile: n,
                }),
              [l, n, t],
            );
          return a().createElement(me, { code: i });
        },
        fe = { image: (0, I.iv)({ width: 185, height: 200 }) },
        Ee = ({ transactionId: e, hasMultipleItems: t }) => {
          const n = { [_.AV.name.XSMALL]: x() };
          return a().createElement(Y, {
            renderEyebrow: e
              ? () => a().createElement(F, { transactionId: e })
              : void 0,
            renderAction: () => a().createElement($, null),
            renderOptIn: () => a().createElement(de, null),
            renderSubtitle: e
              ? () =>
                  a().createElement(ue, {
                    transactionId: e,
                    hasMultipleItems: t,
                  })
              : void 0,
            renderImage: () =>
              a().createElement(y.Z, {
                srcSet: n,
                className: fe.image,
                showBrokenOnError: !0,
              }),
          });
        },
        ve = ({ transactionId: e, hasMultipleItems: t }) =>
          a().createElement(
            L.n4,
            { fallback: a().createElement(ne, null) },
            a().createElement(Ee, { transactionId: e, hasMultipleItems: t }),
          );
      var pe = n(78857),
        ge = n(4069),
        be = n(59620),
        he = n(91994),
        Ie = n(76047),
        ye = n(84637),
        Ae = n(16679),
        xe = n(81855),
        _e = n(1558),
        Le = n(7066);
      const Oe = ({ offers: e }) => {
          const { data: t } = (0, _e.mr)(
            { fields: Object.values(_e.Hd), offers: e },
            { enabled: !(0, Le.Z)(e) },
          );
          return t;
        },
        Se = { blade: (0, I.iv)({ width: "100%" }) },
        we = ({
          offerBlade: e,
          position: t,
          cardGrid: n,
          container: l,
          eventAction: i,
          testId: o,
          filter: c,
        }) => {
          const { title: s, topicId: d, offerType: m, offers: u, link: f } = e,
            E = { module: s, moduleId: d, position: t, type: m },
            v = {
              eventAction: i,
              eventLabel: `${m}: ${s}`,
              eventValue: JSON.stringify(E),
            },
            p = Oe({ offers: u }),
            g = null == p ? void 0 : p.filter((e) => c(e)),
            b = (0, r.useMemo)(
              () => (null == g ? void 0 : g.slice(0, 5)) || [],
              [u],
            );
          return b && b.length
            ? a().createElement(
                "div",
                { className: Se.blade, "data-testid": o },
                a().createElement(
                  he.Z,
                  { event: v, key: t },
                  a().createElement(
                    l,
                    {
                      renderHeader: () => a().createElement(Ie.P, { title: s }),
                      renderCTA: () =>
                        (null == f ? void 0 : f.linkText) &&
                        a().createElement(
                          xe.Z,
                          {
                            ariaLabel: `${s} ${f.linkText}`,
                            to: f.src || "",
                            priority: Ae.Z.TERTIARY,
                          },
                          f.linkText,
                        ),
                    },
                    a().createElement(n, {
                      contextTitle: s || "",
                      cards: b,
                      cardRenderer: ({
                        card: e,
                        cardImageOrientation: t,
                        cardLayout: n,
                        groupTitle: r,
                        pagination: l,
                      }) =>
                        a().createElement(ye.Z, {
                          offer: e,
                          cardImageOrientation: t,
                          cardLayout: n,
                          trackingMeta: E,
                          title: r,
                          index: l.index,
                          total: l.total,
                        }),
                    }),
                  ),
                ),
              )
            : null;
        },
        Me = ({
          cardGrid: e,
          container: t,
          eventAction: n,
          testId: r,
          offerBlade: l,
          position: i,
          filter: o,
        }) =>
          a().createElement(
            L.n4,
            {
              fallback: a().createElement(pe.Z, { cardGrid: e, container: t }),
            },
            a().createElement(we, {
              cardGrid: e,
              container: t,
              offerBlade: l,
              position: i,
              eventAction: n,
              testId: r,
              filter: o,
            }),
          );
      var Ne = n(94187),
        Te = n(24438);
      const Ze = n.n(Te)()`
    query thankYouLayoutQuery($locale: String!) {
  Storefront {
    thankYouLayout(locale: $locale) {
      _locale
      _slug
      __typename
      _activeDate
      _urlPattern
      lastModified
      _noIndex
      data {
        offerBlades {
          offerType
          topicId
          hideTitle
          offerPresentation
          groupStyle
          type
          title
          titleIcon
          cardOrder
          link {
            src
            linkText
          }
          offers {
            id
            namespace
          }
        }
      }
    }
  }
}
    `;
      var De = n(87353),
        Ce = Object.getOwnPropertySymbols,
        Be = Object.prototype.hasOwnProperty,
        ke = Object.prototype.propertyIsEnumerable;
      const Re = (e) => {
          var t, n, r;
          return null ==
            (r =
              null ==
              (n =
                null == (t = null == e ? void 0 : e.Storefront)
                  ? void 0
                  : t.thankYouLayout)
                ? void 0
                : n.data)
            ? void 0
            : r.offerBlades;
        },
        Pe = () => {
          const e = (0, C.useLocalizationLocale)(),
            t = (0, De.qM)({
              query: Ze,
              reducer: Re,
              variables: { locale: e },
            }),
            { data: n } = t;
          return {
            offerBlades: n,
            query: ((e, t) => {
              var n = {};
              for (var r in e)
                Be.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
              if (null != e && Ce)
                for (var r of Ce(e))
                  t.indexOf(r) < 0 && ke.call(e, r) && (n[r] = e[r]);
              return n;
            })(t, ["data"]),
          };
        };
      var Ge = Object.defineProperty,
        je = Object.defineProperties,
        He = Object.getOwnPropertyDescriptors,
        Ue = Object.getOwnPropertySymbols,
        We = Object.prototype.hasOwnProperty,
        $e = Object.prototype.propertyIsEnumerable,
        qe = (e, t, n) =>
          t in e
            ? Ge(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        Ve = (e, t) => {
          for (var n in t || (t = {})) We.call(t, n) && qe(e, n, t[n]);
          if (Ue) for (var n of Ue(t)) $e.call(t, n) && qe(e, n, t[n]);
          return e;
        },
        Ke = (e, t) => je(e, He(t));
      const Fe = {
          bladesContainer: (0, I.iv)({
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginTop: 16,
          }),
        },
        Je = (e) => {
          var t, n;
          const r =
            null == (n = null == (t = e.offerBlade) ? void 0 : t.offers)
              ? void 0
              : n.map((e) => ({
                  offerId: null == e ? void 0 : e.id,
                  sandboxId: null == e ? void 0 : e.namespace,
                }));
          return a().createElement(
            Me,
            Ke(Ve({}, e), {
              offerBlade: Ke(Ve({}, e.offerBlade), { offers: r }),
            }),
          );
        },
        Ye = ({ CardGrid: e, moduleContainers: t }) => {
          const { offerBlades: n } = Pe(),
            r = (0, Ne._)();
          return n && n.length > 0
            ? a().createElement(
                "section",
                { className: Fe.bladesContainer },
                n.map((n, l) =>
                  a().createElement(Je, {
                    offerBlade: n,
                    position: l,
                    key: l,
                    cardGrid: e,
                    container: t.Standard,
                    eventAction:
                      be.DI.PURCHASE_CONFIRMATION_BLADE_SECTION_IN_VIEW,
                    testId: "purchase-confirmation-curated-blade",
                    filter: r,
                  }),
                ),
              )
            : null;
        },
        ze = () => {
          const { CardGrid: e, moduleContainers: t } = (0, ge.Z)();
          return a().createElement(
            L.n4,
            {
              fallback: a().createElement(pe.Z, {
                cardGrid: e,
                container: t.Standard,
              }),
            },
            a().createElement(Ye, { CardGrid: e, moduleContainers: t }),
          );
        };
      var Xe = n(10063),
        Qe = n(60630),
        et = n(20894),
        tt = n(88534),
        nt = n(60427);
      const rt = () => {
          const { wishlist: e } = (0, f.e)(),
            t = (0, O.dD)(),
            n = t ? tt.tH : tt.s1,
            l = t ? nt.r : nt.l,
            i = (0, Ne._)(),
            o = (0, r.useMemo)(
              () => (0, Xe.t)(e.filter(et.f).slice(0, 5)),
              [e],
            ),
            c = {
              title: (0, C.useLocalization)()(
                "egstore.wishlist.wishlist_blade",
              ),
              type: Qe.D.WISHLIST,
              offers: o,
            };
          return a().createElement(Me, {
            position: 0,
            offerBlade: c,
            cardGrid: n,
            container: l,
            eventAction: be.DI.PURCHASE_CONFIRMATION_BLADE_SECTION_IN_VIEW,
            testId: "purchase-confirmation-curated-blade",
            filter: i,
          });
        },
        at = () => {
          const { wishlist: e } = (0, f.e)();
          return ((null == e ? void 0 : e.length) || 0) <= 2
            ? a().createElement(ze, null)
            : a().createElement(rt, null);
        },
        lt = () => {
          const { CardGrid: e, moduleContainers: t } = (0, ge.Z)();
          return a().createElement(
            L.n4,
            {
              fallback: a().createElement(pe.Z, {
                cardGrid: e,
                container: t.Standard,
              }),
            },
            a().createElement(at, null),
          );
        },
        it = {
          wrapper: (0, I.iv)({ display: "flex", flexDirection: "column" }),
        },
        ot = ({ transactionId: e, hasMultipleItems: t = !1 }) =>
          a().createElement(
            "div",
            { className: it.wrapper },
            a().createElement(ve, { transactionId: e, hasMultipleItems: t }),
            a().createElement(h.Z, null),
            a().createElement(lt, null),
          );
      var ct = n(47306),
        st = n(93592),
        dt = n(83242);
      const mt = (e) =>
          (0, I.iv)({
            [P.Uc.sm]: {
              maxWidth: 520,
              margin: "0 auto",
              padding: "30px 40px",
              borderRadius: 8,
              background: e.level2,
            },
            [P.Uc.xxl]: { maxWidth: 620 },
          }),
        ut = ({ transactionId: e, count: t, earnedEpicRewards: n }) => {
          const r = (0, dt.y)();
          return a().createElement(
            "div",
            { className: mt(r) },
            a().createElement(st.m, { transactionId: e, count: t }),
            a().createElement(ct.Z, { earnedEpicRewards: n }),
          );
        },
        ft = ({ history: e }) => {
          var t, n, r, d, m, u, f, h, I, y;
          const A =
              null ==
              (n =
                null == (t = null == e ? void 0 : e.location)
                  ? void 0
                  : t.state)
                ? void 0
                : n.transactionId,
            x =
              void 0 !==
                (null ==
                (d =
                  null == (r = null == e ? void 0 : e.location)
                    ? void 0
                    : r.state)
                  ? void 0
                  : d.offers) &&
              (null ==
              (u =
                null == (m = null == e ? void 0 : e.location)
                  ? void 0
                  : m.state)
                ? void 0
                : u.offers.length) > 1,
            _ =
              null ==
              (h =
                null == (f = null == e ? void 0 : e.location)
                  ? void 0
                  : f.state)
                ? void 0
                : h.offers,
            L =
              null ==
              (y =
                null == (I = null == e ? void 0 : e.location)
                  ? void 0
                  : I.state)
                ? void 0
                : y.earnedEpicRewards,
            O = (0, v.ql)(),
            S = (0, b.useSelector)(g.Gb);
          return A
            ? a().createElement(
                o.Z,
                null,
                a().createElement(p.q, {
                  title: O("egstore.cart.success.title"),
                  meta: [{ name: "robots", content: "noindex" }],
                }),
                a().createElement(
                  c.Z,
                  null,
                  a().createElement(
                    s.Z,
                    null,
                    a().createElement(E, { offers: _ }),
                    S
                      ? a().createElement(ot, {
                          transactionId: A,
                          hasMultipleItems: x,
                        })
                      : a().createElement(ut, {
                          transactionId: A,
                          count: null == _ ? void 0 : _.length,
                          earnedEpicRewards: L,
                        }),
                  ),
                ),
              )
            : a().createElement(i.Z, { to: (0, l.getPath)() });
        },
        Et = ft;
    },
    79746: (e, t, n) => {
      e.exports = n.p + "cc5589238c45cc8f5c27ff5f1434b596.png";
    },
  },
]);
//# sourceMappingURL=CartSuccessView.egstore-site.12630191201b086ef0f5.js.map
