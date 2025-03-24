"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [313],
  {
    69617: (e, t, r) => {
      r.r(t), r.d(t, { default: () => an });
      var n = r(8788),
        l = r.n(n),
        a = r(36233),
        o = r(61801),
        i = r(88029),
        s = r(87536),
        c = r(35997),
        d = r(380),
        m = r(56578),
        p = r(96157),
        u = r(96114),
        E = r(35294),
        f = r(66713),
        g = r(66879),
        y = r(68085),
        h = r(85727),
        v = r(67509),
        b = r(90927),
        A = r(88462),
        C = r(35324);
      const w = ({
        filterGroup: e,
        filtersInitiallyCollapsed: t,
        onFilterSelect: r,
        options: n = [],
        selectedFilters: a,
        title: o,
      }) =>
        0 === n.length
          ? null
          : l().createElement(
              C.ou,
              {
                collapsible: !0,
                initialCollapseState: t,
                renderTitle: ({ isCollapsed: e, toggleCollapsed: t }) =>
                  l().createElement(C.f7, {
                    isCollapsed: e,
                    text: o,
                    toggleCollapsed: t,
                  }),
              },
              n.map(({ id: t, name: n }) => {
                const o = a.includes(t);
                return l().createElement(C.Dp, {
                  checked: o,
                  key: t,
                  onClick: () => r({ checked: o, group: e, id: t }),
                  text: n,
                });
              }),
            );
      var I = r(51251),
        S = r(41637);
      const O = ({
        filters: e = {},
        onClear: t,
        onDone: r,
        onOverlayClick: n,
      }) => {
        const {
            dispatch: a,
            wishlistUndoState: { selectedFilterIds: o },
          } = (0, I.G)(),
          i = (0, p.useLocalization)(),
          { feature: s, genre: c, event: d, platform: m } = e,
          u = c || [],
          E = s || [],
          g = d || [],
          y = m || [],
          h = !0,
          C = (null == o ? void 0 : o.length) || 0,
          O = ({ checked: e, id: t }) => {
            a(
              e
                ? { type: S.d.REMOVE_FILTERS, payload: { filterIds: [t] } }
                : { type: S.d.ADD_FILTERS, payload: { filterIds: [t] } },
            );
          },
          L = () => a({ type: S.d.RESET_FILTERS }),
          x = (0, f.P)(v.l, { numSelectedFilters: C, resetFilters: L }),
          T = (0, f.ZX)(
            w,
            {
              filterGroup: b.I8.Event,
              filtersInitiallyCollapsed: h,
              onFilterSelect: O,
              options: g,
              selectedFilters: o,
              title: i("diesel.store.browse.events") || "",
            },
            g.length > 0,
          ),
          P = (0, f.ZX)(
            w,
            {
              filterGroup: b.I8.Genre,
              filtersInitiallyCollapsed: h,
              onFilterSelect: O,
              options: u,
              selectedFilters: o,
              title: i("diesel.store.browse.genre") || "",
            },
            u.length > 0,
          ),
          H = (0, f.ZX)(
            w,
            {
              filterGroup: b.I8.Feature,
              filtersInitiallyCollapsed: h,
              onFilterSelect: O,
              options: E,
              selectedFilters: o,
              title: i("diesel.store.browse.features") || "",
            },
            E.length > 0,
          ),
          N = (0, f.ZX)(
            w,
            {
              filterGroup: b.I8.Platform,
              filtersInitiallyCollapsed: h,
              onFilterSelect: O,
              options: y,
              selectedFilters: o,
              title: i("diesel.products.about.meta.platform") || "",
            },
            y.length > 0,
          );
        return l().createElement(
          A.P,
          {
            onClear: () => {
              L(), t && t();
            },
            onDone: r,
            onOverlayClick: n,
          },
          x && x(),
          T && T(),
          P && P(),
          H && H(),
          N && N(),
        );
      };
      var L = r(17245);
      const x = ({ count: e = 0, onClick: t }) => {
        const r = (0, p.useLocalization)();
        return l().createElement(
          L.A,
          { onClick: t },
          r("diesel.store.browse.filter", e > 0 ? [`(${e})`] : [""]),
        );
      };
      var T = r(34988),
        P = r(56764),
        H = r(60263),
        N = r(97116);
      const j = {
          contentWrapper: (0, T.AH)({
            height: "100%",
            "& > div": {
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }),
        },
        _ = ({ children: e }) =>
          l().createElement(N.A, { className: j.contentWrapper }, e),
        F = ({ children: e, renderSidebar: t }) =>
          l().createElement(
            N.A,
            { className: j.contentWrapper },
            l().createElement(P.d, { renderRightSidebar: t }, e),
          ),
        k = ({
          children: e,
          renderSidebar: t,
          renderHeader: r,
          renderCommsBanner: n,
        }) =>
          l().createElement(
            H.A,
            null,
            r && r(),
            n && n(),
            t
              ? l().createElement(F, { renderSidebar: t }, e)
              : l().createElement(_, null, e),
          );
      var D = r(76794),
        R = r(78273),
        W = r(64886),
        M = r(8867),
        B = r(3324),
        U = r(54303),
        z = r(68641),
        V = r(35688),
        G = r(49498),
        Z = r(49912),
        $ = r(53248),
        K = r(27954),
        X = r(83823),
        q = r(59849),
        Q = r(28079),
        Y = r(99277),
        J = r(34421),
        ee = r(85327),
        te = r(71335);
      const re = (e) => {
          if (!e) return !1;
          const { effectiveDate: t } = e;
          return !!t && new Date(t).getTime() > Date.now();
        },
        ne = (e) => {
          if (!e) return !1;
          const { expiryDate: t } = e;
          return !!t && new Date(t).getTime() < Date.now();
        },
        le = (e) => !!e && e.status === X.Zt.ACTIVE && !e.isCodeRedemptionOnly,
        ae = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.offer) ? void 0 : t.title;
        },
        oe = (e) => {
          var t, r, n;
          return null ==
            (n =
              null ==
              (r =
                null == (t = null == e ? void 0 : e.offer) ? void 0 : t.price)
                ? void 0
                : r.totalPrice)
            ? void 0
            : n.discountPrice;
        },
        ie = (0, Y.A)((e) =>
          e && e.created ? new Date(e.created).getTime() : null,
        ),
        se = (0, J.A)(oe),
        ce = (0, Y.A)(oe),
        de = (0, Y.A)((e) => {
          const t = ((e) => {
            var t, r;
            return null ==
              (r =
                null == (t = null == e ? void 0 : e.offer) ? void 0 : t.price)
              ? void 0
              : r.totalPrice;
          })(e);
          if (!t) return null;
          const { originalPrice: r, discountPrice: n } = t;
          return 0 === r && 0 === n ? 0 : Math.round(100 * (1 - n / r));
        }),
        me = (e, t) => (re(e.offer) ? 1 : 0) - (re(t.offer) ? 1 : 0),
        pe = (e, t) => {
          const r = le(e.offer) && !ne(e.offer) ? 1 : 0;
          return (le(t.offer) && !ne(t.offer) ? 1 : 0) - r;
        },
        ue = (0, ee.A)((e, t) => {
          const r = ae(e),
            n = ae(t);
          return r.localeCompare(n);
        }),
        Ee = (0, ee.A)(ie),
        fe = (0, te.A)([pe, me, se, ie]),
        ge = (0, te.A)([pe, me, ce, ie]),
        ye = (0, te.A)([pe, me, de, ie]),
        he = ({ onClick: e, title: t, isLoading: r }) =>
          l().createElement(
            W.$,
            {
              variant: G.ml.OUTLINE,
              loading: r,
              loadingLabel: t,
              onClick: e,
              disabled: r,
              title: t,
            },
            l().createElement(K.QB, { code: "egstore.wishlist.undo" }),
          ),
        ve = ({ onClick: e, title: t }) =>
          l().createElement(W.$, {
            variant: G.ml.GHOST,
            onClick: e,
            icon: l().createElement(M.f, null),
            title: t,
          }),
        be = ({
          addFromWishlistView: e,
          namespace: t,
          offer: r,
          offerId: a,
          isUndoLoading: o,
        }) => {
          const i = (0, $.j)(),
            [s, c] = (0, n.useState)(!1),
            d = (0, p.useLocalization)(),
            m = l().useCallback(() => {
              e({ namespace: t, offerId: a }),
                i({
                  eventAction: q.kv.ADD_FROM_WISHLIST_VIEW,
                  eventCategory: Q.nT,
                  eventLabel: Q.jX,
                  eventValue: (0, V.A)({ offer: { namespace: t, offerId: a } }),
                  interactionType: Z.HH.Interaction,
                });
            }, [t, a]),
            u = () => {
              c(!0);
            },
            E = r.status === X.Zt.ACTIVE && !r.isCodeRedemptionOnly && !ne(r),
            f = l().useCallback(
              () =>
                E
                  ? l().createElement(he, {
                      onClick: m,
                      isLoading: o,
                      title:
                        d("egstore.wishlist.undo.removed", [r.title]) || "",
                    })
                  : l().createElement(ve, {
                      onClick: u,
                      title: d("diesel.main.navigation.close") || "",
                    }),
              [E, o, m, r.title, u],
            );
          return s
            ? null
            : l().createElement(U.T, {
                type: z.v.OTHER,
                icon: l().createElement(B.u, { color: G.tV.CRITICAL }),
                content: l().createElement(K.QB, {
                  code: "egstore.wishlist.undo.removed",
                  args: [r.title],
                }),
                cta: l().createElement(f, null),
              });
        };
      var Ae = r(87553),
        Ce = r(55922),
        we = Object.defineProperty,
        Ie = Object.defineProperties,
        Se = Object.getOwnPropertyDescriptors,
        Oe = Object.getOwnPropertySymbols,
        Le = Object.prototype.hasOwnProperty,
        xe = Object.prototype.propertyIsEnumerable,
        Te = (e, t, r) =>
          t in e
            ? we(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Pe = { wrapper: (0, T.AH)({ width: "100%" }) },
        He = (e) => {
          var t, r, a, o;
          const { dispatch: i } = (0, I.G)(),
            { namespace: s, offer: c, isUndo: d } = e,
            m = null == c ? void 0 : c.id,
            p =
              null != (r = null == (t = c.catalogNs) ? void 0 : t.store)
                ? r
                : "",
            u =
              null != (o = null == (a = c.catalogNs) ? void 0 : a.parent)
                ? o
                : "",
            [E, f] = (0, n.useState)(!1),
            [g, y] = (0, Ce.n)({ offerId: m, sandboxId: s }),
            h = (0, n.useCallback)(() => {
              y.isLoading ||
                g().then((e) => {
                  var t;
                  e &&
                    (null == (t = e.data) ? void 0 : t.success) &&
                    i({ type: S.d.REMOVE_UNDO, payload: { offerId: m } });
                });
            }, [s, m, y.isLoading]);
          return d
            ? l().createElement(
                be,
                ((v = ((e, t) => {
                  for (var r in t || (t = {})) Le.call(t, r) && Te(e, r, t[r]);
                  if (Oe) for (var r of Oe(t)) xe.call(t, r) && Te(e, r, t[r]);
                  return e;
                })({}, e)),
                (b = { isUndoLoading: y.isLoading, addFromWishlistView: h }),
                Ie(v, Se(b))),
              )
            : l().createElement(
                D.Ay,
                {
                  disabled: E,
                  rootMargin: "10%",
                  onChange: ({ isIntersecting: e }) => {
                    f(e);
                  },
                },
                l().createElement(
                  "div",
                  { className: Pe.wrapper },
                  E
                    ? l().createElement(R.lF, {
                        offerId: m,
                        sandboxId: s,
                        store: p,
                        productId: u,
                      })
                    : l().createElement(Ae.G, null),
                ),
              );
          var v, b;
        };
      var Ne = r(92619),
        je = Object.defineProperty,
        _e = Object.defineProperties,
        Fe = Object.getOwnPropertyDescriptors,
        ke = Object.getOwnPropertySymbols,
        De = Object.prototype.hasOwnProperty,
        Re = Object.prototype.propertyIsEnumerable,
        We = (e, t, r) =>
          t in e
            ? je(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Me = {
          wishlistItem: (0, T.AH)({
            listStyle: "none outside none",
            padding: 0,
            margin: 0,
            display: "flex",
            width: "100%",
            marginBottom: 15,
          }),
          wishlist: (0, T.AH)({ padding: 0, width: "100%" }),
        },
        Be = (e) => {
          return n.createElement(
            Ne.B,
            ((t = ((e, t) => {
              for (var r in t || (t = {})) De.call(t, r) && We(e, r, t[r]);
              if (ke) for (var r of ke(t)) Re.call(t, r) && We(e, r, t[r]);
              return e;
            })({}, e)),
            _e(
              t,
              Fe({ className: Me.wishlist, itemClassName: Me.wishlistItem }),
            )),
          );
          var t;
        },
        Ue = ({ count: e, animation: t }) => {
          const r = [...Array(e).keys()];
          return l().createElement(Be, { data: r }, () =>
            l().createElement(Ae.G, { animation: t }),
          );
        };
      var ze = Object.defineProperty,
        Ve = Object.getOwnPropertySymbols,
        Ge = Object.prototype.hasOwnProperty,
        Ze = Object.prototype.propertyIsEnumerable,
        $e = (e, t, r) =>
          t in e
            ? ze(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Ke = ({ items: e = [], isLoading: t }) => {
        const r = 0 === e.length;
        return l().createElement(
          l().Fragment,
          null,
          t && r
            ? l().createElement(Ue, { count: Q.aX })
            : l().createElement(Be, { data: e }, (e) =>
                l().createElement(
                  He,
                  ((e, t) => {
                    for (var r in t || (t = {}))
                      Ge.call(t, r) && $e(e, r, t[r]);
                    if (Ve)
                      for (var r of Ve(t)) Ze.call(t, r) && $e(e, r, t[r]);
                    return e;
                  })({}, e),
                ),
              ),
        );
      };
      var Xe = r(41791),
        qe = r(39278),
        Qe = r(65784),
        Ye = r(54741),
        Je = r(91749),
        et = r(8497),
        tt = r(54699),
        rt = r(44904),
        nt = r(47035),
        lt = r(68813),
        at = r(76957),
        ot = r(19281),
        it = r(705),
        st = r(38210),
        ct = r(22357),
        dt = r(34475),
        mt = r(10288);
      const pt = (0, T.AH)(),
        ut = ({ to: e }) => {
          const t = (0, Xe.useSelector)(mt.k),
            r = (0, dt.E)(),
            a = (0, n.useMemo)(
              () =>
                ((e) => ({
                  root: (0, T.AH)({
                    display: "flex",
                    alignItems: "center",
                    color: e.textSecondary,
                    [`.${pt}`]: {
                      color: e.textSecondary,
                      borderBottom: `1px solid ${e.accentOverlay}`,
                    },
                    "&:hover": {
                      color: e.textPrimary,
                      [`.${pt}`]: {
                        color: e.textPrimary,
                        borderColor: e.textPrimary,
                      },
                    },
                  }),
                  externalLinkIcon: (0, T.AH)((0, ct.S$)(3), (0, ct.hz)(10), {
                    marginTop: 2,
                  }),
                }))(r),
              [r],
            ),
            o = (0, st.A)(),
            i = (0, h.N1)(o) ? at.A : lt.Ay;
          return t
            ? l().createElement(
                ot.n,
                { variant: G.S$.PRIMARY, size: G.mM.SM, to: e },
                l().createElement(K.QB, {
                  code: "egstore.email.preferences_v2",
                }),
              )
            : l().createElement(
                "div",
                { className: a.root },
                l().createElement(
                  it.A,
                  { to: e },
                  l().createElement(
                    i,
                    null,
                    l().createElement(
                      "span",
                      { className: pt },
                      l().createElement(K.QB, {
                        code: "egstore.email.preferences_v2",
                      }),
                    ),
                  ),
                ),
                l().createElement(
                  "div",
                  { className: a.externalLinkIcon },
                  l().createElement(nt.t, { size: G.sp.SM }),
                ),
              );
        },
        Et = () => {
          const e = (0, Xe.useSelector)(rt.Gp),
            t = (0, p.useLocalizationLocale)();
          return l().createElement(ut, { to: `${e}?lang=${t}` });
        };
      var ft = r(74819),
        gt = r(98186),
        yt = r(64032);
      const ht = {
          wrapper: (0, T.AH)({ display: "flex", color: yt.E4 }),
          textWrapper: (0, T.AH)((0, ct.S$)(12)),
        },
        vt = () =>
          l().createElement(U.T, {
            type: z.v.ERROR,
            content: l().createElement(K.QB, {
              code: "egstore.email.opt_in_error",
            }),
          }),
        bt = () =>
          l().createElement(
            "div",
            { className: ht.wrapper },
            l().createElement(tt.A, { icon: ft.T, size: gt.A.XXSMALL }),
            l().createElement(
              "div",
              { className: ht.textWrapper },
              l().createElement(
                lt.Ay,
                null,
                l().createElement(K.QB, { code: "egstore.email.opt_in_error" }),
              ),
            ),
          );
      var At = r(2758),
        Ct = r(45580),
        wt = Object.defineProperty,
        It = Object.getOwnPropertySymbols,
        St = Object.prototype.hasOwnProperty,
        Ot = Object.prototype.propertyIsEnumerable,
        Lt = (e, t, r) =>
          t in e
            ? wt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        xt = (e, t) => {
          for (var r in t || (t = {})) St.call(t, r) && Lt(e, r, t[r]);
          if (It) for (var r of It(t)) Ot.call(t, r) && Lt(e, r, t[r]);
          return e;
        };
      const Tt = {
          wrapper: (0, T.AH)({ display: "flex", flexDirection: "column" }),
          text: (e) =>
            (0, T.AH)(
              xt(
                { display: "inline-flex", alignItems: "center" },
                e && xt({}, (0, ct.hz)(25)),
              ),
            ),
          leftCol: (0, T.AH)({ display: "flex" }),
          iconWrapper: (e) =>
            (0, T.AH)((0, ct.hz)(e ? 8 : 20), {
              display: "none",
              [Ct.aq.sm]: {
                height: e ? void 0 : 40,
                width: e ? void 0 : 40,
                display: "flex",
                alignItems: e ? "flex-start" : "center",
                justifyContent: "center",
              },
            }),
          error: (0, T.AH)({ marginTop: 12, minHeight: 20 }),
          content: (e) =>
            (0, T.AH)({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: e ? void 0 : 40,
            }),
        },
        Pt = ({
          renderMessage: e,
          renderToggle: t,
          renderIcon: r,
          renderError: n,
          Container: a = l().Fragment,
        }) => {
          const o = (0, Xe.useSelector)(mt.k);
          return o
            ? l().createElement(
                "div",
                {
                  "data-testid": "opt-in-toggle-layout",
                  className: Tt.wrapper,
                },
                l().createElement(At.NN, {
                  content: l().createElement(
                    "div",
                    { className: Tt.content(o) },
                    l().createElement(
                      "div",
                      { className: Tt.leftCol },
                      r &&
                        l().createElement(
                          "div",
                          { className: Tt.iconWrapper(o) },
                          r(),
                        ),
                      l().createElement("div", { className: Tt.text(o) }, e()),
                    ),
                    t(),
                  ),
                }),
                l().createElement("div", { className: Tt.error }, n && n()),
              )
            : l().createElement(
                "div",
                {
                  "data-testid": "opt-in-toggle-layout",
                  className: Tt.wrapper,
                },
                l().createElement(
                  a,
                  null,
                  l().createElement(
                    "div",
                    { className: Tt.content(o) },
                    l().createElement(
                      "div",
                      { className: Tt.leftCol },
                      r &&
                        l().createElement(
                          "div",
                          { className: Tt.iconWrapper(o) },
                          r(),
                        ),
                      l().createElement("div", { className: Tt.text(o) }, e()),
                    ),
                    t(),
                  ),
                ),
                l().createElement("div", { className: Tt.error }, n && n()),
              );
        };
      var Ht = r(57805),
        Nt = Object.defineProperty,
        jt = Object.getOwnPropertySymbols,
        _t = Object.prototype.hasOwnProperty,
        Ft = Object.prototype.propertyIsEnumerable,
        kt = (e, t, r) =>
          t in e
            ? Nt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Dt = (e, t) => {
          for (var r in t || (t = {})) _t.call(t, r) && kt(e, r, t[r]);
          if (jt) for (var r of jt(t)) Ft.call(t, r) && kt(e, r, t[r]);
          return e;
        };
      const Rt = { primary: (0, T.AH)((0, ct.hz)(8), { display: "inline" }) },
        Wt = ({ code: e, id: t, renderSecondary: r, shouldStackOnWrap: n }) => {
          const a = (0, Xe.useSelector)(mt.k),
            o = ((e, { shouldStackOnWrap: t }) => ({
              root: (0, T.AH)(
                Dt(
                  { display: "flex", alignItems: "center" },
                  t
                    ? {
                        [Ct.aq.underLg]: {
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                      }
                    : {},
                ),
              ),
              secondary: (0, T.AH)({
                display: "inline-block",
                [Ct.aq.underLg]: { marginTop: t ? 5 : 0 },
              }),
              primary: (0, T.AH)((0, ct.hz)(25), {
                display: "inline",
                color: e.textSecondary,
              }),
            }))((0, dt.E)(), { shouldStackOnWrap: n });
          return a
            ? l().createElement(
                "div",
                { className: o.root },
                l().createElement(
                  Ht.E,
                  { variant: G.ZJ.UIMD, color: G.Uf.PRIMARY },
                  l().createElement(
                    "div",
                    { className: Rt.primary },
                    l().createElement(K.QB, { id: t, code: e }),
                  ),
                ),
                l().createElement("div", { className: o.secondary }, r && r()),
              )
            : l().createElement(
                lt.Ay,
                null,
                l().createElement(
                  "div",
                  { className: o.root },
                  l().createElement(
                    "div",
                    { className: o.primary },
                    l().createElement(K.QB, { id: t, code: e }),
                  ),
                  l().createElement(
                    "div",
                    { className: o.secondary },
                    r && r(),
                  ),
                ),
              );
        };
      var Mt = r(38981);
      const Bt = (
        ({ Container: e = l().Fragment }) =>
        ({
          channelType: t,
          settingKeys: r,
          selectedSettingKey: a,
          icon: o,
          toggleTextId: i,
          enabledMessage: s,
          disabledMessage: c,
          secondary: d,
          iconSize: m,
          ariaLabelCode: u,
        }) => {
          var E, f;
          const g = (0, Xe.useSelector)(mt.k),
            y = (0, Xe.useSelector)(Qe.ic),
            h = (0, p.useLocalization)(),
            { settings: v } = (0, Ye.Ay)(
              { identity: y, settingKeyPrefix: t, settingKeys: r },
              { refetchOnMount: "always" },
            ),
            b =
              null !=
                (f =
                  null == (E = v.find((e) => e.settingKey === a))
                    ? void 0
                    : E.settingValue) && f,
            [A, C] = (0, Je.P)({ settingKey: a, settingKeyPrefix: t }),
            w = (0, n.useCallback)(
              (e) => {
                return (
                  (t = void 0),
                  (r = null),
                  (n = function* () {
                    yield A(!e);
                  }),
                  new Promise((e, l) => {
                    var a = (e) => {
                        try {
                          i(n.next(e));
                        } catch (e) {
                          l(e);
                        }
                      },
                      o = (e) => {
                        try {
                          i(n.throw(e));
                        } catch (e) {
                          l(e);
                        }
                      },
                      i = (t) =>
                        t.done
                          ? e(t.value)
                          : Promise.resolve(t.value).then(a, o);
                    i((n = n.apply(t, r)).next());
                  })
                );
                var t, r, n;
              },
              [A],
            ),
            I = (0, n.useCallback)(
              () =>
                l().createElement(Mt.A, {
                  checked: b,
                  onChange: () => w(b),
                  tabIndex: 0,
                  ariaLabelledBy: i,
                  ariaLabel: u && h(u),
                  size: 20,
                }),
              [b, w, i],
            ),
            S = (0, n.useCallback)(
              () =>
                l().createElement(Wt, {
                  code: b ? s : c,
                  id: i,
                  renderSecondary: b ? () => l().createElement(Et, null) : d,
                  shouldStackOnWrap: b,
                }),
              [b, s, c, i, d],
            ),
            O = (0, n.useMemo)(() => {
              const e = g
                ? l().createElement(qe.u, { color: G.tV.SELECT })
                : l().createElement(tt.A, { icon: o, size: m });
              return o ? () => e : void 0;
            }, [o]),
            L = (0, n.useMemo)(
              () =>
                C.isError
                  ? () =>
                      g
                        ? l().createElement(vt, null)
                        : l().createElement(bt, null)
                  : void 0,
              [C.isError, g],
            );
          return l().createElement(Pt, {
            renderToggle: I,
            renderMessage: S,
            renderIcon: O,
            renderError: L,
            Container: e,
          });
        }
      )({ Container: et.A });
      var Ut = r(38365);
      const zt = {
          textWrapper: (0, T.AH)({
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }),
          toggleSkeleton: (0, T.AH)({ borderRadius: 26 }),
          lineOne: (0, T.AH)({
            width: 400,
            height: 14,
            [Ct.aq.underSm]: { width: 200 },
          }),
          lineTwo: (0, T.AH)({
            width: 180,
            height: 14,
            [Ct.aq.underSm]: { width: 160 },
          }),
        },
        Vt = ({ className: e, animation: t }) =>
          l().createElement(Ut.EA, {
            variant: Ut.qd.Text,
            animation: t,
            className: e,
          }),
        Gt = ({ animation: e }) =>
          l().createElement(Ut.EA, {
            variant: Ut.qd.Rect,
            animation: e,
            width: 32,
            height: 20,
            className: zt.toggleSkeleton,
          }),
        Zt = ({ animation: e }) =>
          l().createElement(Pt, {
            renderMessage: () =>
              l().createElement(Vt, { className: zt.lineOne, animation: e }),
            renderToggle: () => l().createElement(Gt, { animation: e }),
            renderIcon: () =>
              l().createElement(Ut.EA, { height: 36, width: 36, animation: e }),
            Container: et.A,
          }),
        $t = {
          viewBox: "0 0 36 36",
          data: l().createElement(
            l().Fragment,
            null,
            l().createElement("path", {
              d: "M21.5284 11.2948C22.256 11.0999 23.0038 11.5316 23.1987 12.2591L26.4436 24.3664C26.6386 25.0939 26.2068 25.8418 25.4793 26.0367L7.18597 30.939C6.45845 31.134 5.71062 30.7023 5.51566 29.9747L2.27109 17.8673C2.07614 17.1398 2.50785 16.392 3.23536 16.197L21.5284 11.2948Z",
              fill: "#C4C4C4",
            }),
            l().createElement("path", {
              d: "M12.6961 21.5614L13.3991 21.8883C14.1695 22.2466 15.0859 22.001 15.5738 21.3056L16.0187 20.6715L26.2814 25.4443C26.1048 25.7258 25.8256 25.9437 25.4794 26.0365L7.18667 30.9388C6.84019 31.0317 6.4891 30.9824 6.19532 30.8267L12.6961 21.5614Z",
              fill: "#A6A6A6",
            }),
            l().createElement(
              "g",
              { style: { mixBlendMode: "multiply" } },
              l().createElement("path", {
                d: "M21.528 11.2954L3.23487 16.1976C2.88889 16.2904 2.60981 16.5081 2.43322 16.7892L13.3858 23.1168C14.37 23.6854 15.6287 23.3481 16.1967 22.3637L22.5186 11.4072C22.225 11.2518 21.8742 11.2026 21.528 11.2954Z",
                fill: "#ECECEC",
              }),
            ),
            l().createElement("path", {
              d: "M21.5289 11.2954L3.23585 16.1976C2.88987 16.2904 2.61079 16.5081 2.43419 16.7892L13.3998 21.8889C14.1702 22.2471 15.0866 22.0016 15.5746 21.3061L22.5196 11.4072C22.226 11.2518 21.8751 11.2026 21.5289 11.2954Z",
              fill: "#ECECEC",
            }),
            l().createElement("path", {
              d: "M23.6807 1.85819C23.6235 1.65158 23.2857 1.65158 23.2283 1.85819C23.0687 2.43365 22.8364 3.12459 22.5693 3.46321C22.2733 3.83858 21.5346 4.1598 20.9748 4.36119C20.7875 4.42839 20.7875 4.74244 20.9748 4.80964C21.5346 5.01103 22.2733 5.33225 22.5693 5.7074C22.8364 6.04602 23.0687 6.73696 23.2283 7.31242C23.2857 7.51925 23.6235 7.51925 23.6807 7.31242C23.8403 6.73696 24.0726 6.04602 24.3396 5.7074C24.6358 5.33225 25.3744 5.01103 25.9344 4.80964C26.1215 4.74244 26.1215 4.42839 25.9344 4.36119C25.3744 4.1598 24.6358 3.83858 24.3396 3.46321C24.0726 3.12459 23.8403 2.43365 23.6807 1.85819Z",
              fill: "white",
            }),
            l().createElement("path", {
              d: "M29.6923 6.20397C29.6164 5.9296 29.1678 5.9296 29.0916 6.20397C28.8796 6.96818 28.5711 7.88573 28.2165 8.33542C27.8234 8.83391 26.8423 9.26049 26.0989 9.52793C25.8502 9.61717 25.8502 10.0342 26.0989 10.1235C26.8423 10.3909 27.8234 10.8175 28.2165 11.3157C28.5711 11.7654 28.8796 12.6829 29.0916 13.4471C29.1678 13.7218 29.6164 13.7218 29.6923 13.4471C29.9043 12.6829 30.2128 11.7654 30.5674 11.3157C30.9608 10.8175 31.9416 10.3909 32.6853 10.1235C32.9337 10.0342 32.9337 9.61717 32.6853 9.52793C31.9416 9.26049 30.9608 8.83391 30.5674 8.33542C30.2128 7.88573 29.9043 6.96818 29.6923 6.20397Z",
              fill: "white",
            }),
          ),
        };
      var Kt = r(79829);
      const Xt = () =>
        l().createElement(
          o.tY,
          { fallback: l().createElement(Zt, null) },
          l().createElement(Bt, {
            channelType: "email",
            settingKeys: [Kt.T.EMAIL, Kt.T.WISHLIST_EMAIL],
            selectedSettingKey: Kt.T.WISHLIST_EMAIL,
            toggleTextId: "wishlist-toggle-label",
            enabledMessage: "egstore.wishlist.notification_toggle_enabled",
            disabledMessage: "egstore.wishlist.notification_toggle_tooltip",
            ariaLabelCode: "egstore.wishlist.notification_toggle.switch",
            icon: $t,
            iconSize: gt.A.SMALL,
          }),
        );
      var qt = r(25355);
      const Qt = {
          container: (0, T.AH)({
            marginTop: 8,
            marginBottom: 30,
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            [Ct.aq.md]: { alignItems: "center", flexDirection: "row" },
          }),
          title: (0, T.AH)({
            [Ct.aq.underMd]: {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            },
          }),
        },
        Yt = ({ animation: e }) =>
          l().createElement(
            "div",
            { className: Qt.container },
            l().createElement(
              "div",
              { className: Qt.title },
              l().createElement(Ut.EA, {
                height: 50,
                width: 120,
                animation: e,
              }),
            ),
          ),
        Jt = ({ renderWallet: e }) =>
          l().createElement(
            "div",
            { className: Qt.container },
            l().createElement(
              "div",
              { className: Qt.title },
              l().createElement(
                Ht.E,
                { variant: G.ZJ.H2XL, color: G.Uf.PRIMARY, as: "h1" },
                l().createElement(qt.A, {
                  code: "diesel.main.navigation.wishlist",
                }),
              ),
            ),
            e && e(),
          );
      var er = r(77108),
        tr = r(46571),
        rr = r(11783),
        nr = r(66448),
        lr = Object.defineProperty,
        ar = Object.defineProperties,
        or = Object.getOwnPropertyDescriptors,
        ir = Object.getOwnPropertySymbols,
        sr = Object.prototype.hasOwnProperty,
        cr = Object.prototype.propertyIsEnumerable,
        dr = (e, t, r) =>
          t in e
            ? lr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        mr = (e, t) => {
          for (var r in t || (t = {})) sr.call(t, r) && dr(e, r, t[r]);
          if (ir) for (var r of ir(t)) cr.call(t, r) && dr(e, r, t[r]);
          return e;
        };
      const pr = ({
          onSort: e = () => {},
          sortingOptions: t,
          sortValue: r = "",
        }) => {
          const a = (0, nr.A)(),
            o = (0, n.useMemo)(
              () =>
                ((e) => {
                  return {
                    main: (0, T.AH)({
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }),
                    sortWrapper: (0, T.AH)({
                      display: "flex",
                      flexDirection: "row",
                      flexGrow: 1,
                    }),
                    totalWrapper: (0, T.AH)(
                      ((t = mr({}, rr.Il.text8)),
                      (r = {
                        textAlign: "right",
                        [tr.aq.xs]: { display: "none" },
                      }),
                      ar(t, or(r))),
                    ),
                    layoutWrapper: (0, T.AH)({ textAlign: "right" }),
                    layoutButton: (0, T.AH)((0, ct.wv)(1), {
                      transition: "background-color 125ms ease-in-out",
                      height: "100%",
                      color: e.textPrimary,
                      backgroundColor: "transparent",
                      padding: 0,
                    }),
                    border: (0, T.AH)({
                      border: `1px solid ${e.backgroundOverlay}`,
                    }),
                    transparentBorder: (0, T.AH)({
                      border: "1px solid transparent",
                    }),
                  };
                  var t, r;
                })(a),
              [a],
            );
          return l().createElement(
            "div",
            { className: o.main },
            l().createElement(
              "div",
              { className: o.sortWrapper },
              t &&
                l().createElement(
                  l().Fragment,
                  null,
                  l().createElement(er.w, {
                    id: "sort-dropdown",
                    label: l().createElement(K.QB, {
                      code: "egstore.library.sort.title",
                    }),
                    options: t,
                    selectedValue: r,
                    onChange: (t) => e(t),
                  }),
                ),
            ),
          );
        },
        ur = {
          root: (0, T.AH)({
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }),
        },
        Er = ({
          sortType: e,
          setSortType: t,
          wishlistSortingOptions: r,
          renderFilterToggle: n,
        }) =>
          l().createElement(
            "div",
            { "data-testid": "wishlist-sort-layout", className: ur.root },
            l().createElement(pr, {
              onSort: (e) => t(e),
              sortingOptions: r,
              sortValue: e,
            }),
            n && n(),
          );
      var fr = r(62619),
        gr = r(94815),
        yr = r(89744),
        hr = r(8631);
      const vr = (e = [], t = []) => {
        const r = e.reduce(
          (e, r) =>
            ((e, t) => !!(0, gr.A)((0, yr.A)("id", e), t))(r, t)
              ? [...e, !0]
              : [...e, !1],
          [],
        );
        return (0, hr.A)((0, m.A)(!0), r);
      };
      var br = r(68971),
        Ar = r(51449),
        Cr = r(11654),
        wr = r(86394),
        Ir = r(71188),
        Sr = Object.defineProperty,
        Or = Object.defineProperties,
        Lr = Object.getOwnPropertyDescriptors,
        xr = Object.getOwnPropertySymbols,
        Tr = Object.prototype.hasOwnProperty,
        Pr = Object.prototype.propertyIsEnumerable,
        Hr = (e, t, r) =>
          t in e
            ? Sr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Nr = (e, t) => {
          for (var r in t || (t = {})) Tr.call(t, r) && Hr(e, r, t[r]);
          if (xr) for (var r of xr(t)) Pr.call(t, r) && Hr(e, r, t[r]);
          return e;
        },
        jr = (e, t) => Or(e, Lr(t));
      const _r = (0, te.A)([
          (0, Y.A)((0, Cr.A)("count")),
          (0, J.A)((0, Cr.A)("name")),
        ]),
        Fr = (0, Ir.A)(
          (e = []) =>
            e.reduce((e, t) => {
              var r;
              return (
                null == (r = null == t ? void 0 : t.offer) ? void 0 : r.tags
              )
                ? [...e, ...t.offer.tags]
                : e;
            }, []),
          (e = []) =>
            e.reduce((e, t) => {
              if (!t.groupName) return e;
              const r = e[t.groupName] || [];
              return jr(Nr({}, e), { [t.groupName]: [...r, t] });
            }, {}),
          (e = {}) => {
            const t = ((e = {}) => (0, br.A)((0, Ar.A)((0, Cr.A)("id")), e))(e);
            return (0, br.A)((e, r) => {
              const n = t[r];
              return (0, wr.A)(e).map((e) => jr(Nr({}, e), { count: n[e.id] }));
            }, e);
          },
          (e = {}) => (0, br.A)(_r, e),
        );
      var kr = r(28637),
        Dr = r(40440),
        Rr = r(48559);
      const Wr = () => {
          const e = (0, p.useLocalization)(),
            t = e("egstore.wishlist.empty_results.message");
          return l().createElement(Rr.W, {
            contentIcon: Dr.A.STRESSED_FACE_EDS,
            title: l().createElement("span", null, t),
            body: l().createElement(
              kr.v,
              { variant: G.ml.PRIMARY, to: "/" },
              e("egstore.wishlist.empty_results.shop_discover"),
            ),
          });
        },
        Mr = ({ onReset: e }) => {
          const t = (0, p.useLocalization)(),
            r = (0, dt.E)(),
            a = (0, n.useMemo)(
              () =>
                ((e) => ({
                  wrapper: (0, T.AH)({
                    marginTop: 30,
                    '[data-component="Icon"]': { path: { fill: yt.OF } },
                  }),
                  link: (0, T.AH)({
                    borderBottom: `1px solid ${e.accentOverlay}`,
                    color: e.textSecondary,
                    "&:hover": {
                      borderBottom: `1px solid ${e.textPrimary}`,
                      color: e.textPrimary,
                    },
                  }),
                }))(r),
              [r],
            );
          return l().createElement(
            "div",
            { className: a.wrapper },
            l().createElement(Rr.W, {
              contentIcon: Dr.A.STRESSED_FACE_EDS,
              title: t("diesel.common.search.noResults.title"),
              body: l().createElement(
                it.A,
                {
                  onClick: (t) => {
                    t.preventDefault(), e && e();
                  },
                  className: a.link,
                },
                t("egstore.filters.remove_filters"),
              ),
            }),
          );
        },
        Br = {
          [X.Fj.ALPHABETICAL]: ue,
          [X.Fj.RECENTLY_ADDED]: Ee,
          [X.Fj.LOWEST_PRICE]: fe,
          [X.Fj.HIGHEST_PRICE]: ge,
          [X.Fj.ON_SALE]: ye,
        },
        Ur = ({ breakpoint: e }) => {
          const t = (0, u.H)(),
            r = (0, p.useLocalization)(),
            [a, o] = (0, n.useState)(X.Fj.ON_SALE),
            [i, s] = (0, n.useState)([]),
            [c, v] = (0, n.useState)(!1),
            {
              wishlistItems: b,
              isError: A,
              isFetching: C,
              isSuccess: w,
            } = (0, fr.A)(),
            {
              dispatch: L,
              wishlistUndoState: { wishlistWithUndo: T, selectedFilterIds: P },
            } = (0, I.G)(),
            H = (0, h.tU)(e),
            N = (0, Q.yb)(r),
            j = Fr(T) || {},
            _ = Object.keys(j).length,
            F = () => v(!c),
            D = (0, n.useCallback)((e = []) => Br[a](e), [a]);
          (0, n.useEffect)(() => {
            L({ type: S.d.SET_WISHLIST, payload: { wishlist: b } });
          }, [b]),
            (0, n.useEffect)(() => {
              const e = ((e = [], t = []) =>
                t.reduce((t, r) => {
                  var n;
                  const l =
                    (null == (n = null == r ? void 0 : r.offer)
                      ? void 0
                      : n.tags) || [];
                  return vr(e, l) ? [...t, r] : t;
                }, []))(P, T);
              (0, m.A)(e, i) || s(() => e);
            }, [P, T]),
            (0, n.useEffect)(() => {
              L({ type: S.d.RESET_WISHLIST, payload: { wishlist: b } });
            }, [a]);
          const R = (0, f.P)(O, { filters: j }),
            W = (0, f.P)(O, {
              filters: j,
              onClear: F,
              onDone: F,
              onOverlayClick: F,
            }),
            M = (0, f.ZX)(x, { count: P.length, onClick: F }, H),
            B = (0, f.P)(Jt, {
              renderWallet: () =>
                l().createElement(
                  l().Fragment,
                  null,
                  l().createElement(E.dd, null),
                ),
            });
          return A
            ? l().createElement(g.A, { type: y.A.SERVER_ERROR })
            : l().createElement(
                l().Fragment,
                null,
                l().createElement(d.m, {
                  title: r("diesel.main.navigation.wishlist"),
                }),
                l().createElement(
                  k,
                  {
                    renderHeader: B,
                    renderCommsBanner: () =>
                      t ? null : l().createElement(Xt, null),
                    renderSidebar: !H && _ ? R : void 0,
                  },
                  H && c && W && W(),
                  b.length &&
                    l().createElement(Er, {
                      sortType: a,
                      setSortType: o,
                      wishlistSortingOptions: N,
                      renderFilterToggle: _ ? M : void 0,
                    }),
                  0 === i.length &&
                    P.length > 0 &&
                    l().createElement(Mr, {
                      onReset: () => L({ type: S.d.RESET_FILTERS }),
                    }),
                  0 === ((null == b ? void 0 : b.length) || 0) &&
                    0 === T.length &&
                    w
                    ? l().createElement(Wr, null)
                    : l().createElement(Ke, { isLoading: C, items: D(i) }),
                ),
              );
        },
        zr = { placeholder: (0, T.AH)({ marginTop: 30 }) },
        Vr = ({ animation: e }) =>
          l().createElement(
            k,
            {
              renderHeader: () => l().createElement(Yt, { animation: e }),
              renderCommsBanner: () => l().createElement(Zt, { animation: e }),
            },
            l().createElement(
              "div",
              { className: zr.placeholder },
              l().createElement(Ue, { count: Q.aX, animation: e }),
            ),
          );
      var Gr = r(76004),
        Zr = r(27855),
        $r = r(46532),
        Kr = Object.defineProperty,
        Xr = Object.defineProperties,
        qr = Object.getOwnPropertyDescriptors,
        Qr = Object.getOwnPropertySymbols,
        Yr = Object.prototype.hasOwnProperty,
        Jr = Object.prototype.propertyIsEnumerable,
        en = (e, t, r) =>
          t in e
            ? Kr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tn = (e, t) => {
          for (var r in t || (t = {})) Yr.call(t, r) && en(e, r, t[r]);
          if (Qr) for (var r of Qr(t)) Jr.call(t, r) && en(e, r, t[r]);
          return e;
        },
        rn = (e, t) => Xr(e, qr(t));
      const nn = ({
        children: e,
        initialUndoItems: t = [],
        initialWishlist: r = [],
        initialSelectedFilterIds: a = [],
      }) => {
        const o = {
            undoItems: t,
            wishlist: r,
            wishlistWithUndo: r,
            selectedFilterIds: a,
          },
          [i, s] = (0, n.useReducer)((e, t) => {
            switch (t.type) {
              case S.d.SET_WISHLIST: {
                const { wishlist: r } = t.payload;
                if ((0, m.A)(e.wishlist, r)) return e;
                if (
                  (null == r ? void 0 : r.length) &&
                  0 === e.wishlistWithUndo.length
                )
                  return rn(tn({}, e), { wishlistWithUndo: r, wishlist: r });
                const { undoItems: n } = e,
                  l = ((e, t) => {
                    const r = e.map(({ offerId: e }) => e).sort(),
                      n = t.map(({ offerId: e }) => e).sort();
                    return (0, m.A)(r, n);
                  })(e.wishlistWithUndo, r),
                  a =
                    0 !== n.length || l
                      ? ((e = [], t = []) =>
                          0 === e.length
                            ? e
                            : e.reduce(
                                (e, r) =>
                                  (0, gr.A)((e) => e === r.offerId)(t)
                                    ? [...e, rn(tn({}, r), { isUndo: !0 })]
                                    : [...e, rn(tn({}, r), { isUndo: !1 })],
                                [],
                              ))(e.wishlistWithUndo, n)
                      : r;
                return rn(tn({}, e), { wishlistWithUndo: a, wishlist: r });
              }
              case S.d.RESET_WISHLIST: {
                const { wishlist: r } = t.payload;
                return rn(tn({}, e), { wishlistWithUndo: r, wishlist: r });
              }
              case S.d.ADD_UNDO: {
                const { offerId: r } = t.payload;
                return r
                  ? rn(tn({}, e), { undoItems: (0, wr.A)([...e.undoItems, r]) })
                  : e;
              }
              case S.d.REMOVE_UNDO: {
                const { offerId: r } = t.payload;
                if (!r) return e;
                const n = (0, Gr.A)((e) => e !== r, e.undoItems);
                return rn(tn({}, e), { undoItems: n });
              }
              case S.d.ADD_FILTERS: {
                const { filterIds: r = [] } = t.payload;
                return rn(tn({}, e), {
                  selectedFilterIds: (0, wr.A)([...e.selectedFilterIds, ...r]),
                });
              }
              case S.d.REMOVE_FILTERS: {
                const { filterIds: r = [] } = t.payload;
                return rn(tn({}, e), {
                  selectedFilterIds: (0, Zr.A)(r, e.selectedFilterIds),
                });
              }
              case S.d.RESET_FILTERS:
                return rn(tn({}, e), { selectedFilterIds: [] });
              default:
                return e;
            }
          }, o),
          c = { wishlistUndoState: i, dispatch: s };
        return l().createElement($r.h.Provider, { value: c }, e);
      };
      var ln = r(6415);
      const an = () =>
        (0, i.A)()
          ? l().createElement(
              s.A,
              null,
              l().createElement(
                nn,
                null,
                l().createElement(
                  o.tY,
                  { fallback: l().createElement(Vr, null) },
                  l().createElement(c.A, { render: Ur }),
                ),
              ),
            )
          : l().createElement(ln.A, { to: (0, a.getPath)() });
    },
  },
]);
//# sourceMappingURL=WishlistView.egstore-site.49d40bbe769d53cfa3bc.js.map
