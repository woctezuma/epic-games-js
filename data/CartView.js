(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [737],
  {
    38725: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { CartView: () => pn, default: () => fn }));
      var n = r(45418),
        l = r.n(n),
        a = r(37922),
        o = r(74758),
        c = r(22463),
        i = r(41725),
        s = r(91156),
        d = r(57742),
        u = r(98142),
        m = r(41412),
        v = r(8807),
        p = r(1672);
      const f = ({ children: e }) => {
        const [t, r] = (0, n.useReducer)(v.tQ, {
            voucherWarnings: [],
            checkoutError: void 0,
          }),
          a = (0, n.useMemo)(() => ({ cartState: t, dispatch: r }), [t, r]);
        return l().createElement(p.A.Provider, { value: a }, e);
      };
      var E = r(52389),
        g = r(7933),
        y = r(28901),
        b = r(96039),
        h = r(50452);
      const O = {
          cardMargin: (0, y.iv)({
            marginBottom: 15,
            "&:last-of-type": { marginBottom: 0 },
          }),
        },
        C = () =>
          l().createElement(
            l().Fragment,
            null,
            l().createElement(b.Z, null),
            l().createElement(b.Z, null),
            l().createElement(b.Z, null),
          ),
        x = () => {
          const { cartItems: e } = (0, g.N)();
          return l().createElement(
            l().Fragment,
            null,
            null == e
              ? void 0
              : e.map((e) =>
                  l().createElement(
                    "div",
                    { className: O.cardMargin, key: e.id },
                    l().createElement(h.PP, {
                      offerId: e.offerId,
                      sandboxId: e.namespace,
                      cartItemId: e.id,
                      productId: e.catalogNs.parent,
                      store: e.catalogNs.store,
                    }),
                  ),
                ),
          );
        },
        N = () =>
          l().createElement(
            E.n4,
            { fallback: l().createElement(C, null) },
            l().createElement(x, null),
          );
      var I = r(38764),
        P = r(69936),
        w = r(68125),
        S = r(35477),
        D = r(27350),
        k = r(17613),
        Z = Object.defineProperty,
        R = Object.defineProperties,
        L = Object.getOwnPropertyDescriptors,
        _ = Object.getOwnPropertySymbols,
        A = Object.prototype.hasOwnProperty,
        T = Object.prototype.propertyIsEnumerable,
        j = (e, t, r) =>
          t in e
            ? Z(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        B = (e, t) => {
          for (var r in t || (t = {})) A.call(t, r) && j(e, r, t[r]);
          if (_) for (var r of _(t)) T.call(t, r) && j(e, r, t[r]);
          return e;
        },
        M = (e, t) => R(e, L(t));
      const W = {
          container: (0, y.iv)({
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            [I.Uc.md]: { flexWrap: "nowrap" },
          }),
          mainContent: (0, y.iv)({
            flexGrow: 1,
            marginBottom: 30,
            [I.Uc.md]: { marginBottom: 0 },
          }),
          sidebar: (0, y.iv)({
            width: "100%",
            flexShrink: 0,
            [I.Uc.md]: M(B({}, (0, k.oI)(32)), { width: 256 }),
            [I.Uc.lg]: M(B({}, (0, k.oI)(36)), { width: 296 }),
          }),
        },
        U = ({ renderMain: e, renderSidebar: t }) =>
          l().createElement(
            "div",
            { className: W.container },
            l().createElement(
              "div",
              { className: W.mainContent, "data-testid": "cart-layout-main" },
              e,
            ),
            t &&
              l().createElement(
                "div",
                { className: W.sidebar, "data-testid": "cart-layout-sidebar" },
                t,
              ),
          ),
        q = {
          container: (0, y.iv)({ marginTop: 15, [I.Uc.md]: { marginTop: 0 } }),
          warnings: (0, y.iv)({
            width: "100%",
            marginBottom: 50,
            ":empty": { display: "none" },
          }),
          title: (0, y.iv)({
            marginBottom: 50,
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            [I.Uc.md]: { alignItems: "center", flexDirection: "row" },
          }),
        },
        H =
          ({
            renderMain: e,
            renderSidebar: t,
            renderWarnings: r,
            renderWallet: n,
          }) =>
          () =>
            l().createElement(
              P.Z,
              null,
              l().createElement(
                w.Z,
                { className: q.container },
                r &&
                  l().createElement(
                    "div",
                    { className: q.warnings, "data-testid": "cart-warnings" },
                    r,
                  ),
                l().createElement(
                  "div",
                  { className: q.title },
                  l().createElement(
                    S.Z.Heading,
                    { headingLevel: 1 },
                    l().createElement(D.Z, { code: "egstore.cart.my_cart" }),
                  ),
                  n && n,
                ),
                l().createElement(U, { renderMain: e, renderSidebar: t }),
              ),
            );
      var G = r(83242),
        $ = r(82996),
        K = r(11629),
        z = r(96545),
        F = r(77574);
      const V = {
        viewBox: "0 0 45 52",
        data: l().createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          l().createElement("path", {
            d: "M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z",
            fill: "currentColor",
          }),
          l().createElement("path", {
            stroke: "#FFF",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5",
          }),
        ),
      };
      var Y = r(14794),
        X = r(51187);
      const J = {
          container: (0, y.iv)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }),
          icon: (0, y.iv)({ marginBottom: 30 }),
          title: (0, y.iv)({ marginBottom: 12 }),
        },
        Q = { icon: (0, y.iv)({ color: z.JD }) },
        ee = (
          ({ renderIcon: e }) =>
          ({ renderTitle: t, renderBody: r }) =>
            l().createElement(
              "div",
              { className: J.container },
              e &&
                l().createElement(
                  "div",
                  { className: J.icon, "data-testid": "icon" },
                  e,
                ),
              l().createElement(
                "div",
                { className: J.title, "data-testid": "title" },
                l().createElement(Y.Z.Text, null, t),
              ),
              r &&
                l().createElement(
                  "div",
                  { "data-testid": "body" },
                  l().createElement(X.ZP, null, r),
                ),
            )
        )({
          renderIcon: l().createElement(F.Z, {
            icon: V,
            className: Q.icon,
            size: K.J7.XLARGE,
          }),
        }),
        te = () => {
          const e = ((e) => ({
            link: (0, y.iv)({
              borderBottom: `1px solid ${e.accentOverlay}`,
              color: e.textSecondary,
              "&:hover": { color: e.textPrimary, borderColor: e.textPrimary },
            }),
          }))((0, G.y)());
          return l().createElement(
            $.Z,
            { to: "/", className: e.link },
            l().createElement(D.Z, {
              code: "egstore.wishlist.empty_results.shop_discover",
            }),
          );
        },
        re = () =>
          l().createElement(ee, {
            renderTitle: l().createElement(D.Z, {
              code: "egstore.cart.empty_cart_title",
            }),
            renderBody: l().createElement(te, null),
          });
      var ne = r(23588),
        le = r(34218),
        ae = r(71403);
      const oe = ({
        renderCouponDiscount: e,
        renderCTA: t,
        renderPrice: r,
        renderSaleDiscount: n,
        renderSubtotal: a,
        renderTaxes: o,
      }) => {
        const c = ((e) => ({
          wrapper: (0, y.iv)({ display: "flex", flexDirection: "column" }),
          title: (0, y.iv)({
            marginBottom: 20,
            [I.Uc.mdOnly]: { marginBottom: 16 },
          }),
          lineItem: (0, y.iv)({ marginTop: 15, ":empty": { display: "none" } }),
          subtotal: (0, y.iv)({
            marginTop: 20,
            borderTop: `1px solid ${e.accentOverlay}`,
            paddingTop: 20,
          }),
          cta: (0, y.iv)({ marginTop: 20, [I.Uc.mdOnly]: { marginTop: 40 } }),
        }))((0, ae.Z)());
        return l().createElement(
          "div",
          { className: c.wrapper },
          l().createElement(
            "div",
            { className: c.title },
            l().createElement(
              Y.Z.Text,
              null,
              l().createElement(D.Z, {
                code: "egstore.cart.summary.title_games",
              }),
            ),
          ),
          r &&
            l().createElement(
              "div",
              { className: c.lineItem, "data-testid": "cart-summary-price" },
              r,
            ),
          n &&
            l().createElement(
              "div",
              { className: c.lineItem, "data-testid": "cart-summary-sale" },
              n,
            ),
          e &&
            l().createElement(
              "div",
              { className: c.lineItem, "data-testid": "cart-summary-coupon" },
              e,
            ),
          o &&
            l().createElement(
              "div",
              { className: c.lineItem, "data-testid": "cart-summary-taxes" },
              o,
            ),
          l().createElement(
            "div",
            { className: c.subtotal, "data-testid": "cart-summary-subtotal" },
            a,
          ),
          t &&
            l().createElement(
              "div",
              { className: c.cta, "data-testid": "cart-summary-cta" },
              t,
            ),
        );
      };
      var ce = r(17751);
      const ie = {
          wrapper: (0, y.iv)({
            display: "flex",
            justifyContent: "space-between",
          }),
          title: (0, y.iv)((0, k.wz)(20)),
        },
        se = ({ renderTitle: e, renderValue: t }) =>
          l().createElement(
            "div",
            { className: ie.wrapper },
            l().createElement("div", { className: ie.title }, e),
            t,
          ),
        de = ({ code: e, textLevel: t, textWeight: r = X.G0.NORMAL }) =>
          l().createElement(
            X.ZP,
            { weight: r, textLevel: t },
            l().createElement(i.v0, { code: e }),
          ),
        ue = () =>
          l().createElement(se, {
            renderTitle: l().createElement(de, {
              code: "egstore.cart.summary.subtotal",
              textWeight: X.G0.BOLD,
            }),
            renderValue: l().createElement(de, {
              textLevel: ce.N.SECONDARY,
              code: "egstore.cart.summary.taxes_calculation",
            }),
          });
      var me = r(57247),
        ve = r(70888),
        pe = r(42061);
      const fe = (e, t, r) => {
        if (!(0, me.Z)(e) && !(0, me.Z)(t) && r)
          return (0, ve.xG)((0, pe.z9)({ price: e, decimals: t }), r, {
            maximumFractionDigits: t,
            minimumFractionDigits: t,
          });
      };
      var Ee = r(76069);
      const ge =
          ({ component: e = X.ZP }) =>
          ({ currencyCode: t, decimals: r, price: a }) => {
            const o = (0, n.useMemo)(() => fe(a, r, t), [a, t, r]);
            return l().createElement(e, null, o);
          },
        ye = ge({ component: X.ZP }),
        be = ge({
          component: ({ children: e }) =>
            l().createElement(X.ZP, { weight: X.G0.BOLD }, e),
        }),
        he = ge({
          component: ({ children: e }) =>
            l().createElement(Ee.Z, { textLevel: ce.N.PRIMARY }, e),
        }),
        Oe =
          ({ labelComponent: e, priceComponent: t }) =>
          ({ currencyCode: r, decimals: n, messageCode: a, price: o }) =>
            l().createElement(se, {
              renderTitle: l().createElement(e, { code: a }),
              renderValue: l().createElement(t, {
                currencyCode: r,
                decimals: n,
                price: o,
              }),
            }),
        Ce = Oe({ labelComponent: de, priceComponent: ye }),
        xe = Oe({
          labelComponent: ({ code: e, textLevel: t }) =>
            l().createElement(de, {
              code: e,
              textLevel: t,
              textWeight: X.G0.BOLD,
            }),
          priceComponent: be,
        });
      var Ne = r(26008),
        Ie = r(78683);
      var Pe = r(87353),
        we = r(24438);
      const Se = r.n(we)()`
    query getBulkOffersSubtotal($lineOffers: [NsOffersLineOfferReq]!, $country: String!, $merchantGroup: String = "EGS_MKT", $voucherCode: String = null) {
  PriceEngine {
    bulkNsOffersPrice(
      country: $country
      calculateTax: false
      merchantGroup: $merchantGroup
      lineOffers: $lineOffers
      voucherCode: $voucherCode
    ) {
      country
      totalPrice {
        currencyCode
        originalPrice
        discountPrice
        discount
        discountPercentage
        voucherDiscount
        voucherDiscountPercentage
        currencyInfo {
          decimals
        }
      }
      lineOffers {
        offerId
        namespace
        price {
          discountPrice
          voucherDiscount
        }
        voucherNotApplyReason
      }
      voucherNotApplyReason
    }
  }
}
    `;
      var De = Object.defineProperty,
        ke = Object.defineProperties,
        Ze = Object.getOwnPropertyDescriptors,
        Re = Object.getOwnPropertySymbols,
        Le = Object.prototype.hasOwnProperty,
        _e = Object.prototype.propertyIsEnumerable,
        Ae = (e, t, r) =>
          t in e
            ? De(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Te = (e, t) => {
          for (var r in t || (t = {})) Le.call(t, r) && Ae(e, r, t[r]);
          if (Re) for (var r of Re(t)) _e.call(t, r) && Ae(e, r, t[r]);
          return e;
        };
      const je = (e) => {
          var t;
          return (
            (null == (t = null == e ? void 0 : e.PriceEngine)
              ? void 0
              : t.bulkNsOffersPrice) || void 0
          );
        },
        Be = ({ queryName: e, queryId: t }, r) => {
          const n = (null == r ? void 0 : r.lineOffers) || [];
          return [
            e,
            null == r ? void 0 : r.country,
            ...n,
            null == r ? void 0 : r.voucherCode,
            t,
          ];
        },
        Me = ({ lineOffers: e, voucherCode: t }, r) => {
          var n;
          const l = (0, a.useSelector)(s.vR),
            o = (0, a.useSelector)(s.eV),
            c =
              Boolean(null == e ? void 0 : e.length) &&
              Boolean(l) &&
              (null == (n = null == r ? void 0 : r.enabled) || n),
            i = (0, Pe.qM)({
              query: Se,
              variables: { country: o, lineOffers: e, voucherCode: t },
              reducer: je,
              config: ((u = Te({}, r)), (m = { enabled: c }), ke(u, Ze(m))),
              queryKeyFn: Be,
            }),
            { data: d } = i;
          var u, m;
          return {
            bulkOffersPrice: d,
            query: ((e, t) => {
              var r = {};
              for (var n in e)
                Le.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
              if (null != e && Re)
                for (var n of Re(e))
                  t.indexOf(n) < 0 && _e.call(e, n) && (r[n] = e[n]);
              return r;
            })(i, ["data"]),
          };
        };
      var We = Object.getOwnPropertySymbols,
        Ue = Object.prototype.hasOwnProperty,
        qe = Object.prototype.propertyIsEnumerable;
      const He = ({ voucherCode: e } = {}) => {
        const { cartItems: t } = (0, g.N)(),
          r = (0, n.useMemo)(
            () =>
              ((e) => {
                if (e)
                  return e.length > 0
                    ? null == e
                      ? void 0
                      : e.map((e) => ({
                          namespace: e.namespace,
                          offerId: e.offerId,
                          quantity: e.quantity,
                        }))
                    : [];
              })(t),
            [t],
          ),
          l = Me({ lineOffers: r || [], voucherCode: e }),
          { bulkOffersPrice: a } = l;
        return {
          cartSubtotal: a,
          query: ((e, t) => {
            var r = {};
            for (var n in e) Ue.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && We)
              for (var n of We(e))
                t.indexOf(n) < 0 && qe.call(e, n) && (r[n] = e[n]);
            return r;
          })(l, ["bulkOffersPrice"]),
        };
      };
      var Ge = r(68080),
        $e = r(30838),
        Ke = r(29945);
      const ze = {
          container: (0, y.iv)({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }),
          checkmark: (0, y.iv)({
            color: $e.$w,
            marginLeft: 8,
            marginRight: 8,
            width: 9,
            height: 9,
            flexShrink: 0,
            flexGrow: 0,
            [I.Uc.md]: { marginLeft: 7, marginRight: 7, width: 7, height: 7 },
            [I.Uc.xxl]: { width: 11, height: 11 },
          }),
        },
        Fe = () =>
          l().createElement(F.Z, {
            icon: K.kf.CHECK_MARK_THICK,
            className: ze.checkmark,
            size: Ke.Z.CUSTOM,
          }),
        Ve = ({ couponName: e, isCouponActive: t }) =>
          l().createElement(
            "div",
            { className: ze.container },
            t && l().createElement(Fe, null),
            l().createElement(Ge.Z, null, e),
          );
      var Ye = r(27542),
        Xe = r(64482),
        Je = r(84647);
      const Qe = {
          listItem: (0, y.iv)({
            marginBottom: 5,
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }),
          listPrice: (0, y.iv)((0, k.oI)(5), { flexShrink: 0 }),
        },
        et = ({ currencyCode: e, decimals: t, price: r, title: n }) =>
          l().createElement(
            "li",
            null,
            l().createElement(
              Ee.Z,
              { textLevel: ce.N.PRIMARY },
              l().createElement(
                "div",
                { className: Qe.listItem },
                l().createElement(Je.Z, { text: n, lines: 1 }),
                l().createElement(
                  "div",
                  { className: Qe.listPrice },
                  l().createElement(he, {
                    currencyCode: e,
                    decimals: t,
                    price: -r,
                  }),
                ),
              ),
            ),
          ),
        tt = ({
          currencyCode: e,
          decimals: t,
          offerId: r,
          price: n,
          sandboxId: a,
        }) => {
          const { title: o } = (0, Xe.Z)({ offerId: r, sandboxId: a });
          return o && e && n && !(0, me.Z)(t)
            ? l().createElement(et, {
                title: o,
                decimals: t,
                currencyCode: e,
                price: n,
              })
            : null;
        },
        rt = {
          detailsList: (0, y.iv)({
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }),
        },
        nt = ({ children: e }) => {
          const t = (0, Ye.useLocalization)()(
            "egstore.coupons.use.aria.discount_list_description",
          );
          return l().createElement(
            "ul",
            { className: rt.detailsList, "aria-label": t },
            e,
          );
        },
        lt = ({ couponCode: e }) => {
          var t, r, n, a, o;
          const { cartSubtotal: c } = He({ voucherCode: e }),
            i =
              null !=
              (r =
                null == (t = null == c ? void 0 : c.totalPrice)
                  ? void 0
                  : t.currencyCode)
                ? r
                : void 0,
            s =
              null !=
              (o =
                null ==
                (a =
                  null == (n = null == c ? void 0 : c.totalPrice)
                    ? void 0
                    : n.currencyInfo)
                  ? void 0
                  : a.decimals)
                ? o
                : void 0,
            d = ((e) => {
              const t = (null == e ? void 0 : e.lineOffers) || [];
              return null == t
                ? void 0
                : t.reduce((e, t) => {
                    var r;
                    return (null == t ? void 0 : t.offerId) &&
                      (null == t ? void 0 : t.namespace) &&
                      (null == (r = null == t ? void 0 : t.price)
                        ? void 0
                        : r.voucherDiscount)
                      ? [...e, t]
                      : e;
                  }, []);
            })(c);
          return d.length && i && !(0, me.Z)(s)
            ? l().createElement(
                nt,
                null,
                d.map((e) =>
                  l().createElement(tt, {
                    key: e.offerId,
                    currencyCode: i,
                    decimals: s,
                    offerId: e.offerId,
                    price: e.price.voucherDiscount,
                    sandboxId: e.namespace,
                  }),
                ),
              )
            : null;
        };
      var at = r(47610),
        ot = Object.defineProperty,
        ct = Object.defineProperties,
        it = Object.getOwnPropertyDescriptors,
        st = Object.getOwnPropertySymbols,
        dt = Object.prototype.hasOwnProperty,
        ut = Object.prototype.propertyIsEnumerable,
        mt = (e, t, r) =>
          t in e
            ? ot(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        vt = (e, t) => {
          for (var r in t || (t = {})) dt.call(t, r) && mt(e, r, t[r]);
          if (st) for (var r of st(t)) ut.call(t, r) && mt(e, r, t[r]);
          return e;
        };
      const pt = (e) => {
          var t;
          return (
            (null == (t = null == e ? void 0 : e.PriceEngine)
              ? void 0
              : t.salesEvent) || void 0
          );
        },
        ft = ({ salesEventId: e, config: t }) => {
          var r;
          const n = (0, Ye.useLocalizationLocale)(),
            l =
              Boolean(e) && (null == (r = null == t ? void 0 : t.enabled) || r),
            a = (0, Pe.qM)({
              query: at.d,
              variables: { salesEventId: e, locale: n },
              config: ((c = vt({}, t)), (i = { enabled: l }), ct(c, it(i))),
              reducer: pt,
            }),
            { data: o } = a;
          var c, i;
          return {
            salesEvent: o,
            query: ((e, t) => {
              var r = {};
              for (var n in e)
                dt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
              if (null != e && st)
                for (var n of st(e))
                  t.indexOf(n) < 0 && ut.call(e, n) && (r[n] = e[n]);
              return r;
            })(a, ["data"]),
          };
        };
      var Et = r(39299),
        gt = r(14688);
      const yt = ({ to: e, children: t }) => {
          const r = ((e) => ({
            link: (0, y.iv)({
              color: e.textSecondary,
              textDecoration: "underline",
              "&:active": { color: e.textPrimary, textDecoration: "underline" },
              "&:hover": { color: e.textPrimary, textDecoration: "none" },
            }),
          }))((0, G.y)());
          return l().createElement(
            $.Z,
            { to: e, className: r.link },
            l().createElement(Ee.Z, { textLevel: ce.N.SECONDARY }, t),
          );
        },
        bt = ({
          discountString: e,
          isCouponActive: t,
          thresholdString: r,
          url: n,
        }) => {
          const a = (0, Ye.useLocalization)(),
            o = a("egstore.coupons.use.discount_eligible_description", [e, r]),
            c = a("egstore.coupons.use.discount_ineligible_description", [
              e,
              r,
            ]),
            i = a("egstore.coupons.use.view_details");
          return l().createElement(
            Ee.Z,
            { textLevel: ce.N.SECONDARY },
            t ? o : c,
            " ",
            n && l().createElement(yt, { to: n }, i),
          );
        },
        ht = ({
          currencyCode: e,
          decimals: t,
          isCouponActive: r,
          salesEventId: n,
        }) => {
          var a, o, c, i, s;
          const d = (0, Ye.useLocalizationLocale)(),
            { salesEvent: u } = ft({
              salesEventId: n,
              config: { enabled: Boolean(n) },
            });
          if (!u) return null;
          const m = (0, Et.eb)(u),
            v =
              null !=
              (o =
                null == (a = u.currencyRewards)
                  ? void 0
                  : a.find((t) => {
                      var r;
                      return (
                        (null == (r = null == t ? void 0 : t.currency)
                          ? void 0
                          : r.code) === e
                      );
                    }))
                ? o
                : void 0,
            p = null != (c = null == v ? void 0 : v.minSalePrice) ? c : void 0,
            f = fe(p, t, e);
          if (!p || !f) return null;
          if (u.voucherDiscountType === gt.I.DISCOUNT_AMOUNT) {
            const n = null != (i = null == v ? void 0 : v.reward) ? i : void 0,
              a = fe(n, t, e);
            return n && a
              ? l().createElement(bt, {
                  discountString: a,
                  isCouponActive: r,
                  thresholdString: f,
                  url: m,
                })
              : null;
          }
          if (u.voucherDiscountType === gt.I.DISCOUNT_PERCENTAGE) {
            const e =
                null != (s = null == v ? void 0 : v.discountPercentage)
                  ? s
                  : void 0,
              t = e ? (0, ve.rl)(100 - e, {}, d) : void 0;
            return t
              ? l().createElement(bt, {
                  discountString: t,
                  isCouponActive: r,
                  thresholdString: f,
                  url: m,
                })
              : null;
          }
          return null;
        },
        Ot = ({ renderHeader: e, renderDescription: t, renderList: r }) => {
          const n = ((e) => ({
            container: (0, y.iv)({
              backgroundColor: e.level1,
              padding: 10,
              borderRadius: Ne.E0,
            }),
            list: (0, y.iv)({ marginTop: 15, ":empty": { display: "none" } }),
            description: (0, y.iv)({ marginTop: 2 }),
          }))((0, G.y)());
          return l().createElement(
            "div",
            { className: n.container },
            e,
            l().createElement("div", { className: n.description }, t),
            l().createElement("div", { className: n.list }, r),
          );
        },
        Ct = ({ couponCode: e }) => {
          var t, r, n, a, o, c, i, s, d, u;
          const { cartSubtotal: m } = He({ voucherCode: e }),
            { coupons: v } = (0, Ie.N)(),
            p =
              null !=
              (t =
                null == v
                  ? void 0
                  : v.find((t) => (null == t ? void 0 : t.code) === e))
                ? t
                : void 0,
            f =
              null !=
              (n =
                null == (r = null == p ? void 0 : p.salesEvent) ? void 0 : r.id)
                ? n
                : void 0,
            E = !(null == m ? void 0 : m.voucherNotApplyReason),
            g =
              null !=
              (o =
                null == (a = null == p ? void 0 : p.salesEvent)
                  ? void 0
                  : a.voucherName)
                ? o
                : "",
            y =
              null !=
              (i =
                null == (c = null == m ? void 0 : m.totalPrice)
                  ? void 0
                  : c.currencyCode)
                ? i
                : void 0,
            b =
              null !=
              (u =
                null ==
                (d =
                  null == (s = null == m ? void 0 : m.totalPrice)
                    ? void 0
                    : s.currencyInfo)
                  ? void 0
                  : d.decimals)
                ? u
                : void 0,
            h = (0, ne.SO)(Ve, { couponName: g, isCouponActive: E }),
            O = (0, ne.SO)(lt, { couponCode: e }),
            C = (0, ne.R)(
              ht,
              {
                currencyCode: y,
                decimals: b,
                isCouponActive: E,
                salesEventId: f,
              },
              Boolean(f) && Boolean(y) && !(0, me.Z)(b),
            );
          return l().createElement(Ot, {
            renderHeader: null == h ? void 0 : h(),
            renderDescription: null == C ? void 0 : C(),
            renderList: null == O ? void 0 : O(),
          });
        },
        xt = { couponDetails: (0, y.iv)({ marginTop: 10 }) },
        Nt = ({ renderLineItem: e, renderDetails: t }) =>
          l().createElement(
            "div",
            null,
            e,
            t &&
              l().createElement(
                "div",
                {
                  className: xt.couponDetails,
                  "data-testid": "coupon-details",
                },
                t,
              ),
          ),
        It = ({ couponCode: e, currencyCode: t, decimals: r, price: n }) => {
          const o = (0, a.useSelector)(d.cI),
            c = (0, ne.R)(
              Ce,
              {
                currencyCode: t,
                decimals: r,
                messageCode: "egstore.cart.summary.coupon_discount",
                price: -n,
              },
              n > 0 || o,
            ),
            i = (0, ne.R)(Ct, { couponCode: e }, o);
          return c
            ? l().createElement(Nt, {
                renderLineItem: c(),
                renderDetails: null == i ? void 0 : i(),
              })
            : null;
        },
        Pt = { taxesMsg: (0, y.iv)((0, k.yd)("right")) },
        wt = () =>
          l().createElement(
            "div",
            { className: Pt.taxesMsg },
            l().createElement(de, {
              textLevel: ce.N.SECONDARY,
              code: "egstore.cart.summary.taxes_calculation",
            }),
          ),
        St = () =>
          l().createElement(se, {
            renderTitle: l().createElement(de, {
              code: "egstore.cart.summary.taxes",
            }),
            renderValue: l().createElement(wt, null),
          });
      var Dt = r(22538),
        kt = r(55794),
        Zt = r(1558);
      var Rt = r(10063),
        Lt = r(55186);
      const _t = () => {
        const e = (0, a.useSelector)(s.eV),
          { cartItems: t } = (0, g.N)(),
          r = (({ offers: e }) => {
            const { data: t } = (0, Zt.mr)({
              fields: [
                Zt.Hd.countriesBlacklist,
                Zt.Hd.countriesWhitelist,
                Zt.Hd.id,
                Zt.Hd.namespace,
              ],
              offers: e,
            });
            return t;
          })({ offers: t ? (0, Rt.t)(t) : [] });
        return (0, n.useMemo)(
          () =>
            null == r
              ? void 0
              : r.reduce(
                  (t, r) =>
                    (0, Lt.H)({
                      countriesBlacklist:
                        null == r ? void 0 : r.countriesBlacklist,
                      countriesWhitelist:
                        null == r ? void 0 : r.countriesWhitelist,
                      country: e,
                    })
                      ? [
                          ...t,
                          {
                            offerId: null == r ? void 0 : r.id,
                            namespace: null == r ? void 0 : r.namespace,
                          },
                        ]
                      : t,
                  [],
                ),
          [r],
        );
      };
      var At = r(68623),
        Tt = r(28093),
        jt = r(75410),
        Bt = r(54850),
        Mt = r(27801);
      const Wt = () => {
          const e = (0, Dt.useHistory)(),
            { dispatch: t } = (0, At.i)(),
            { cartValidation: r } = (0, kt.H)(),
            a = _t() || [],
            { actions: o, state: c } = (0, Mt.A)(),
            i = (0, n.useCallback)(() => {
              var r;
              (e.push({ search: "" }),
                "inactive" === c &&
                  (null == (r = null == o ? void 0 : o.inactive) || r.start(),
                  t({ type: Tt.$.CLEAR_CHECKOUT_ERROR })));
            }, [t, c, o]),
            {
              conflictingOffers: s = [],
              fullyOwnedOffers: d = [],
              missingPrerequisites: u = [],
            } = r || {},
            m = s.length + d.length + u.length + a.length;
          return l().createElement(
            l().Fragment,
            null,
            l().createElement(
              Bt.gg,
              { buttonWidth: jt.WL.BLOCK, disabled: m > 0, onClick: i },
              l().createElement(D.Z, { code: "egstore.common.cta.check_out" }),
            ),
          );
        },
        Ut = ({
          couponCode: e,
          couponDiscount: t,
          currencyCode: r,
          decimals: n,
          originalPrice: o,
          saleDiscount: c,
          subtotalPrice: i,
        }) => {
          const s = (0, a.useSelector)(d.Zb),
            u = (0, ne.SO)(Ce, {
              currencyCode: r,
              decimals: n,
              messageCode: "egstore.cart.summary.price",
              price: o,
            }),
            m = (0, ne.R)(
              Ce,
              {
                currencyCode: r,
                decimals: n,
                messageCode: "egstore.cart.summary.sale_discount",
                price: -c,
              },
              c > 0,
            ),
            v = (0, ne.R)(
              It,
              { currencyCode: r, decimals: n, price: t, couponCode: e },
              s && Boolean(e),
            ),
            p = (0, ne.SO)(xe, {
              currencyCode: r,
              decimals: n,
              messageCode: "egstore.cart.summary.subtotal",
              price: i,
            });
          return l().createElement(oe, {
            renderCouponDiscount: v && v(),
            renderCTA: l().createElement(Wt, null),
            renderPrice: u && u(),
            renderSaleDiscount: m && m(),
            renderSubtotal: p && p(),
            renderTaxes: l().createElement(St, null),
          });
        },
        qt = () => l().createElement(le.Od, { height: 20 }),
        Ht = () =>
          l().createElement(oe, {
            renderCTA: l().createElement(le.Od, { height: 50 }),
            renderPrice: l().createElement(qt, null),
            renderSubtotal: l().createElement(qt, null),
            renderTaxes: l().createElement(qt, null),
          }),
        Gt = () =>
          l().createElement(oe, {
            renderSubtotal: l().createElement(ue, null),
            renderCTA: l().createElement(Wt, null),
          });
      var $t = r(43296),
        Kt = r(83736),
        zt = r(81820),
        Ft = r(2939),
        Vt = r(12388),
        Yt = r(73575),
        Xt = Object.defineProperty,
        Jt = Object.defineProperties,
        Qt = Object.getOwnPropertyDescriptors,
        er = Object.getOwnPropertySymbols,
        tr = Object.prototype.hasOwnProperty,
        rr = Object.prototype.propertyIsEnumerable,
        nr = (e, t, r) =>
          t in e
            ? Xt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lr = (e, t) => {
          for (var r in t || (t = {})) tr.call(t, r) && nr(e, r, t[r]);
          if (er) for (var r of er(t)) rr.call(t, r) && nr(e, r, t[r]);
          return e;
        };
      const ar = ({ onClick: e, className: t }) =>
          l().createElement(
            "div",
            { className: t },
            l().createElement(
              Ft.h,
              { onClick: e },
              l().createElement(F.Z, {
                icon: Yt.Z.CLOSE_THIN,
                size: Ke.$.XXXSMALL,
              }),
            ),
          ),
        or = (
          ({ renderIcon: e }) =>
          ({ children: t, onClose: r, renderCTA: n, type: a = zt.N.INFO }) => {
            const o = Boolean(e),
              c = ((e, t, r) => {
                const n =
                    t === zt.N.ERROR
                      ? { color: $e.yF, borderRadius: "100%" }
                      : t === zt.N.WARNING
                        ? { color: $e.Kr }
                        : {},
                  l = r ? (0, k.oI)(50) : {};
                return {
                  container: (0, y.iv)({
                    borderRadius: Ne.E0,
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px 15px",
                    background: e.level2,
                    [I.Uc.sm]: { flexDirection: "row" },
                  }),
                  main: (0, y.iv)({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    width: "100%",
                  }),
                  icon: (0, y.iv)(
                    (0, k.wz)(10),
                    lr(
                      {
                        display: "flex",
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 0,
                        flexShrink: 0,
                      },
                      n,
                    ),
                  ),
                  message: (0, y.iv)({ flexGrow: 1, alignSelf: "center" }),
                  close: (0, y.iv)((0, k.oI)(10), {
                    width: 44,
                    height: 44,
                    color: e.textPrimary,
                    "&:hover": { color: e.textSecondary },
                    "&:focus": {
                      border: `1px solid ${e.accent}`,
                      borderRadius: Ne.E0,
                    },
                  }),
                  desktopCta: (0, y.iv)((0, k.oI)(15), {
                    display: "none",
                    [I.Uc.sm]: { display: "block" },
                  }),
                  mobileCta: (0, y.iv)(
                    ((a = lr(
                      { display: "block", width: "100%", marginTop: 15 },
                      l,
                    )),
                    (o = { [I.Uc.sm]: { display: "none" } }),
                    Jt(a, Qt(o))),
                  ),
                };
                var a, o;
              })((0, G.y)(), a, o);
            return l().createElement(
              "div",
              { className: c.container },
              l().createElement(
                "div",
                { className: c.main },
                e &&
                  l().createElement(
                    "div",
                    { className: c.icon, "data-testid": "alert-icon" },
                    e,
                  ),
                l().createElement(
                  "div",
                  { className: c.message },
                  l().createElement(X.ZP, null, t),
                ),
                n &&
                  l().createElement(
                    "div",
                    { className: c.desktopCta, "data-testid": "cta-desktop" },
                    n,
                  ),
                r &&
                  l().createElement(ar, {
                    className: c.close,
                    onClick: r,
                    "data-testid": "alert-close",
                  }),
              ),
              n &&
                l().createElement(
                  "div",
                  { className: c.mobileCta, "data-testid": "cta-mobile" },
                  n,
                ),
            );
          }
        )({
          renderIcon: l().createElement(F.Z, {
            icon: Vt.E,
            size: Ke.$.XXSMALL,
          }),
        });
      var cr = r(1768),
        ir = r(97477),
        sr = r(31745),
        dr = r(37455),
        ur = r(79830);
      const mr = ({ to: e }) =>
          l().createElement(
            cr.Mm,
            { to: e, buttonHeight: jt.Ey.DENSED },
            l().createElement(D.Z, { code: "egstore.common.cta.view_product" }),
          ),
        vr = ({ sandboxId: e, offerId: t, missingPrerequisiteItems: r }) => {
          const a = (0, Ye.useLocalization)(),
            { productHomeLinkTo: o } = (0, ir.f)({ sandboxId: e }),
            { title: c } = (0, Xe.Z)({ sandboxId: e, offerId: t }),
            i = (0, Kt.k)({ items: (0, sr.l7)(r) }),
            s = o ? l().createElement(mr, { to: o }) : null,
            d = a("egstore.common.inline_list.separator"),
            u =
              a("egstore.cart.validation.page_level.error.missing_prereq", [
                c || "",
                (0, n.useMemo)(() => (0, dr.o)(i, d), [i, d]),
              ]) || "";
          return l().createElement(
            or,
            { type: zt.N.ERROR, renderCTA: s },
            l().createElement(ur.T, { source: u }),
          );
        };
      var pr = Object.getOwnPropertySymbols,
        fr = Object.prototype.hasOwnProperty,
        Er = Object.prototype.propertyIsEnumerable;
      const gr = (e) => {
        var t = e,
          { code: r, type: n } = t,
          a = ((e, t) => {
            var r = {};
            for (var n in e) fr.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && pr)
              for (var n of pr(e))
                t.indexOf(n) < 0 && Er.call(e, n) && (r[n] = e[n]);
            return r;
          })(t, ["code", "type"]);
        const { title: o } = (0, Xe.Z)(a);
        return l().createElement(
          or,
          { type: n },
          l().createElement(D.Z, { code: r, args: [o || ""] }),
        );
      };
      var yr = Object.defineProperty,
        br = Object.getOwnPropertySymbols,
        hr = Object.prototype.hasOwnProperty,
        Or = Object.prototype.propertyIsEnumerable,
        Cr = (e, t, r) =>
          t in e
            ? yr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        xr = (e, t) => {
          for (var r in t || (t = {})) hr.call(t, r) && Cr(e, r, t[r]);
          if (br) for (var r of br(t)) Or.call(t, r) && Cr(e, r, t[r]);
          return e;
        };
      const Nr = () =>
          l().createElement(
            or,
            { type: zt.N.ERROR },
            l().createElement(D.Z, {
              code: "egstore.cart.validation.page_level.error.general",
            }),
          ),
        Ir = () =>
          l().createElement(
            or,
            { type: zt.N.WARNING },
            l().createElement(D.Z, {
              code: "egstore.cart.validation.page_level.warning.general",
            }),
          ),
        Pr = () =>
          l().createElement(
            or,
            { type: zt.N.ERROR },
            l().createElement(D.Z, {
              code: "egstore.cart.validation.page_level.error.checkout",
            }),
          ),
        wr = (e) =>
          l().createElement(
            gr,
            xr(
              {
                code: "egstore.cart.validation.page_level.error.in_library",
                type: zt.N.ERROR,
              },
              e,
            ),
          ),
        Sr = (e) =>
          l().createElement(
            gr,
            xr(
              {
                code: "egstore.cart.validation.page_level.info.partial_upgrade",
                type: zt.N.INFO,
              },
              e,
            ),
          ),
        Dr = (e) =>
          l().createElement(
            gr,
            xr(
              {
                code: "egstore.cart.validation.page_level.warning.no_partial_upgrade",
                type: zt.N.WARNING,
              },
              e,
            ),
          ),
        kr = () => {
          const {
              cartState: { voucherWarnings: e, checkoutError: t },
            } = (0, At.i)(),
            { cartValidation: r } = (0, kt.H)(),
            n = _t() || [];
          if (!r) return null;
          if (t) return l().createElement(Pr, null);
          const {
              conflictingOffers: a = [],
              fullyOwnedOffers: o = [],
              missingPrerequisites: c = [],
              possiblePartialUpgradeOffers: i = [],
              unablePartiallyUpgradeOffers: s = [],
            } = r,
            d = a.length + o.length + c.length + n.length,
            u = d + (i.length + s.length + e.length);
          if (0 === u) return null;
          if (u > 1)
            return d > 0
              ? l().createElement(Nr, null)
              : l().createElement(Ir, null);
          if (c.length) {
            const [e] = c,
              t = (null == e ? void 0 : e.missingPrerequisiteItems)
                ? e.missingPrerequisiteItems.reduce($t.c, [])
                : [];
            return e
              ? l().createElement(vr, {
                  offerId: e.offerId,
                  sandboxId: e.namespace,
                  missingPrerequisiteItems: t,
                })
              : null;
          }
          if (o.length) {
            const [e] = o;
            return l().createElement(wr, {
              offerId: null == e ? void 0 : e.offerId,
              sandboxId: null == e ? void 0 : e.namespace,
            });
          }
          if (n.length) return l().createElement(Nr, null);
          if (i.length) {
            const [e] = i;
            return l().createElement(Sr, {
              offerId: null == e ? void 0 : e.offerId,
              sandboxId: null == e ? void 0 : e.namespace,
            });
          }
          if (s.length) {
            const [e] = s;
            return l().createElement(Dr, {
              offerId: null == e ? void 0 : e.offerId,
              sandboxId: null == e ? void 0 : e.namespace,
            });
          }
          return e.length ? l().createElement(Ir, null) : null;
        },
        Zr = () =>
          l().createElement(
            E.n4,
            { fallback: null },
            l().createElement(kr, null),
          ),
        Rr = () => {
          var e, t, r, o, c, i, s, u;
          const { dispatch: m } = (0, At.i)(),
            v = (0, a.useSelector)(d.Zb),
            { coupons: p } = (0, Ie.N)({
              enabled: v,
              refetchOnMount: "always",
            }),
            f =
              (null == (e = null == p ? void 0 : p[0]) ? void 0 : e.code) ||
              void 0,
            { cartSubtotal: E } = He({ voucherCode: f }),
            g =
              null != (t = null == E ? void 0 : E.totalPrice.currencyCode)
                ? t
                : void 0,
            y =
              null !=
              (o =
                null == (r = null == E ? void 0 : E.totalPrice.currencyInfo)
                  ? void 0
                  : r.decimals)
                ? o
                : void 0,
            b =
              null != (c = null == E ? void 0 : E.totalPrice.originalPrice)
                ? c
                : void 0,
            h =
              null != (i = null == E ? void 0 : E.totalPrice.discount) ? i : 0,
            O =
              null != (s = null == E ? void 0 : E.totalPrice.voucherDiscount)
                ? s
                : 0,
            C =
              null != (u = null == E ? void 0 : E.totalPrice.discountPrice)
                ? u
                : void 0,
            x = v ? (null == E ? void 0 : E.lineOffers) : void 0;
          return (
            (0, n.useEffect)(() => {
              v &&
                x &&
                m({
                  type: Tt.$.SET_VOUCHER_WARNINGS,
                  payload: { lineOffers: x },
                });
            }, [x, v]),
            (0, me.Z)(b) || (0, me.Z)(C) || !g || (0, me.Z)(y)
              ? l().createElement(Gt, null)
              : l().createElement(Ut, {
                  couponDiscount: O,
                  couponCode: f,
                  currencyCode: g,
                  decimals: y,
                  originalPrice: b,
                  saleDiscount: h,
                  subtotalPrice: C,
                })
          );
        },
        Lr = () =>
          l().createElement(
            E.n4,
            { fallback: l().createElement(Ht, null) },
            l().createElement(Rr, null),
          );
      var _r = r(48235),
        Ar = r(97618),
        Tr = r(78746),
        jr = r(20239);
      const Br = ({ children: e, renderLabel: t }) => {
          const r = ((e) => ({
            container: (0, y.iv)((0, k.yd)("left"), {
              width: "100%",
              borderColor: e.backgroundOverlay,
              borderWidth: 1,
              borderStyle: "solid",
              padding: 20,
              borderRadius: Ne.VY,
            }),
            label: (0, y.iv)({ marginBottom: 10 }),
            list: (0, y.iv)({
              padding: 0,
              margin: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }),
          }))((0, ae.Z)());
          return l().createElement(
            "div",
            { className: r.container },
            t &&
              l().createElement(
                "div",
                { className: r.label },
                l().createElement(Ge.Z, { textLevel: ce.N.SECONDARY }, t),
              ),
            l().createElement("ul", { className: r.list }, e),
          );
        },
        Mr = {
          modalContent: (0, y.iv)({
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            [I.Uc.sm]: (0, y.iv)({ maxWidth: 360 }),
          }),
          list: (0, y.iv)({ marginTop: 10, marginBottom: 10 }),
          buttons: (0, y.iv)({
            width: "100%",
            display: "flex",
            marginTop: 60,
            flexDirection: "column",
            gap: 10,
            [I.Uc.sm]: (0, y.iv)({
              marginTop: 40,
              flexDirection: "row",
              gap: 20,
            }),
          }),
        },
        Wr =
          ({ titles: e }) =>
          ({ next: t, cancel: r }) => ({
            Step: l().createElement(
              "div",
              { className: Mr.modalContent },
              l().createElement(
                Y.Z.Heading,
                { headingLevel: 2 },
                l().createElement(D.Z, {
                  code: "egstore.cart.checkout.partial_entitlement.title",
                }),
              ),
              l().createElement(
                "div",
                { className: Mr.list },
                l().createElement(
                  X.ZP,
                  { textLevel: ce.N.SECONDARY },
                  l().createElement(
                    Br,
                    {
                      renderLabel: l().createElement(D.Z, {
                        code: "egstore.common.product",
                      }),
                    },
                    null == e
                      ? void 0
                      : e.map((e) => l().createElement("li", { key: e }, e)),
                  ),
                ),
              ),
              l().createElement(
                X.ZP,
                { textLevel: ce.N.SECONDARY },
                l().createElement(D.Z, {
                  code: "egstore.cart.checkout.partial_entitlement.detail",
                }),
              ),
              l().createElement(
                "div",
                { className: Mr.buttons },
                l().createElement(
                  Tr.K,
                  { onClick: t, buttonWidth: jt.WL.BLOCK },
                  l().createElement(D.Z, {
                    code: "egstore.cart.checkout.cta.continue_checkout",
                  }),
                ),
                l().createElement(
                  Bt.gg,
                  { onClick: r, buttonWidth: jt.WL.BLOCK },
                  l().createElement(D.Z, {
                    code: "egstore.cart.checkout.cta.review_purchase",
                  }),
                ),
              ),
            ),
            modalVariant: jr.v.DIALOG,
          });
      var Ur = r(28434);
      const qr = () => {
        var e, t, r, a;
        const { cartValidation: o } = (0, kt.H)(),
          { actions: c, state: i } = (0, Mt.A)(),
          s = "entitlement" === i,
          d = [
            ...(null !=
            (e = null == o ? void 0 : o.possiblePartialUpgradeOffers)
              ? e
              : []),
            ...(null !=
            (t = null == o ? void 0 : o.unablePartiallyUpgradeOffers)
              ? t
              : []),
          ],
          u = (0, Rt.t)(d),
          m = (0, Ar.f)({ offers: u }),
          v = (0, n.useMemo)(
            () =>
              (null == m
                ? void 0
                : m.reduce(
                    (e, t) =>
                      (null == t ? void 0 : t.title) ? [...e, t.title] : e,
                    [],
                  )) || [],
            [m],
          );
        return (
          (0, n.useEffect)(() => {
            var e;
            ((s && 0 === d.length) || (s && 0 === v.length)) &&
              (null == (e = null == c ? void 0 : c.entitlement) || e.next());
          }, [d, v, i]),
          l().createElement(Ur.Z, {
            isOpen: s && v.length > 0,
            onClose:
              null == (r = null == c ? void 0 : c.entitlement)
                ? void 0
                : r.cancel,
            onComplete:
              null == (a = null == c ? void 0 : c.entitlement)
                ? void 0
                : a.next,
            steps: [Wr({ titles: v })],
          })
        );
      };
      var Hr = r(10225),
        Gr = r(91532),
        $r = r(24990),
        Kr = r(69765),
        zr = r(87919);
      var Fr = r(67100),
        Vr = r(6874),
        Yr = r(55215),
        Xr = Object.getOwnPropertySymbols,
        Jr = Object.prototype.hasOwnProperty,
        Qr = Object.prototype.propertyIsEnumerable;
      const en = (e) => {
          const t = (0, Dt.useHistory)(),
            r = (0, a.useSelector)(Gr.Gb),
            { dispatch: l } = (0, At.i)(),
            o = (0, a.useDispatch)(),
            {
              query: { invalidate: i },
            } = (0, Yr.e)({ config: { enabled: !1 } }),
            s = (0, a.useSelector)(Gr.zd),
            {
              query: { invalidate: d },
            } = (0, Kr.Y)({ enabled: !1 }),
            u = (0, $r.n)(),
            { invalidateAllUserProductPurchasability: m } = (() => {
              const e = (0, Hr.NL)();
              return {
                invalidateAllUserProductPurchasability: () =>
                  e.invalidateQueries({ queryKey: [zr.c] }),
              };
            })(),
            v = (0, n.useCallback)(() => (0, Vr.ll)(e), [e]),
            p = (0, Hr.Db)(v, {
              onError: (e) => {
                l({ type: Tt.$.SET_CHECKOUT_ERROR, payload: { error: e } });
              },
              onSuccess: (e) => {
                (i(), "platform" === u && m());
                const n = ((e) =>
                    null == e
                      ? void 0
                      : e.map((e) => ({
                          offerId:
                            (null == e ? void 0 : e.OfferId) ||
                            (null == e ? void 0 : e.offerid),
                          sandboxId:
                            (null == e ? void 0 : e.OfferNamespace) ||
                            (null == e ? void 0 : e.offernamespace),
                        })))(
                    (null == e ? void 0 : e.Offers) ||
                      (null == e ? void 0 : e.offers),
                  ),
                  l =
                    (null == e ? void 0 : e.formattedEarnedEpicRewards) ||
                    (null == e ? void 0 : e.formattedearnedepicrewards);
                (null == n ||
                  n.forEach((t) => {
                    o(Fr.ZP.purchaseSuccess(t.sandboxId, t.offerId, e, s));
                  }),
                  t.push({
                    pathname: (0, c.generateRoutePath)(
                      r ? "/thank-you" : "/cart/success",
                    ),
                    state: {
                      transactionId:
                        (null == e ? void 0 : e.TransactionId) ||
                        (null == e ? void 0 : e.transactionid),
                      offers: n,
                      earnedEpicRewards: l,
                    },
                  }));
              },
              onSettled: () => {
                s && d();
              },
            }),
            { mutate: f } = p,
            E = ((e, t) => {
              var r = {};
              for (var n in e)
                Jr.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
              if (null != e && Xr)
                for (var n of Xr(e))
                  t.indexOf(n) < 0 && Qr.call(e, n) && (r[n] = e[n]);
              return r;
            })(p, ["mutate"]);
          return (0, n.useMemo)(() => ({ startCheckout: f, query: E }), [f, E]);
        },
        tn = () => {
          const { actions: e, state: t } = (0, Mt.A)(),
            { cartItems: r } = (0, g.N)(),
            l =
              ((e) => {
                if (e)
                  return e.length > 0
                    ? null == e
                      ? void 0
                      : e.map((e) => ({
                          offerNamespace: e.namespace,
                          offerId: e.offerId,
                          quantity: e.quantity,
                        }))
                    : [];
              })(r) || [],
            { startCheckout: a } = en(l);
          return (
            (0, n.useEffect)(() => {
              var r;
              "checkout" === t &&
                (null == (r = null == e ? void 0 : e.checkout) || r.next(),
                a());
            }, [t, e]),
            null
          );
        },
        rn = () =>
          l().createElement(
            E.n4,
            { fallback: null },
            l().createElement(_r.Z, null),
            l().createElement(qr, null),
            l().createElement(tn, null),
          );
      var nn = r(96357),
        ln = r(16030),
        an = r(2563);
      const on = H({
          renderMain: l().createElement(N, null),
          renderSidebar: l().createElement(Lr, null),
          renderWarnings: l().createElement(Zr, null),
          renderWallet: l().createElement(an.pp, null),
        }),
        cn = H({
          renderMain: l().createElement(re, null),
          renderSidebar: null,
          renderWarnings: null,
          renderWallet: l().createElement(an.pp, null),
        }),
        sn = H({
          renderMain: l().createElement(C, null),
          renderSidebar: l().createElement(Ht, null),
          renderWarnings: null,
          renderWallet: l().createElement(an.N0, null),
        }),
        dn = () => {
          const e = (0, nn.k)(),
            { cartItems: t } = (0, g.N)({
              refetchOnMount: "always",
              refetchOnWindowFocus: !0,
              staleTime: 3e4,
            });
          return e
            ? l().createElement(ln.w, null)
            : l().createElement(
                l().Fragment,
                null,
                l().createElement(rn, null),
                (null == t ? void 0 : t.length)
                  ? l().createElement(on, null)
                  : l().createElement(cn, null),
              );
        },
        un = () =>
          l().createElement(
            E.n4,
            { fallback: l().createElement(sn, null) },
            l().createElement(dn, null),
          ),
        mn = ["inactive", "eula", "entitlement", "checkout"],
        vn = () => {
          const { setPurchaseStates: e } = (0, Mt.A)();
          return (
            (0, n.useEffect)(() => {
              e(mn);
            }, []),
            null
          );
        },
        pn = () => {
          const e = (0, a.useSelector)(d.WG),
            t = (0, a.useSelector)(s.vR),
            r = Boolean(t),
            n = (0, i.ql)();
          return e
            ? r
              ? l().createElement(
                  m.Z,
                  null,
                  l().createElement(o.q, { title: n("egstore.cart.cart") }),
                  l().createElement(vn, null),
                  l().createElement(
                    "div",
                    { "data-testid": "cart-view" },
                    l().createElement(f, null, l().createElement(un, null)),
                  ),
                )
              : l().createElement(u.Z, { to: (0, c.getPath)() })
            : l().createElement(u.Z, {
                to: (0, c.generateRoutePath)("/not-found"),
              });
        },
        fn = pn;
    },
  },
]);
//# sourceMappingURL=CartView.egstore-site.f368b715e99941dd4b5b.js.map
