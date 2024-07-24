"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [313],
  {
    50492: (e, t, r) => {
      r.r(t), r.d(t, { default: () => qn });
      var n = r(8788),
        a = r.n(n),
        l = r(61801),
        o = r(36233),
        i = r(6415),
        s = r(380),
        c = r(3493),
        d = r(56578),
        m = r(96157),
        p = r(96114),
        u = r(35294),
        g = r(66713),
        E = r(66879),
        h = r(68085),
        f = r(85727),
        y = r(10288),
        v = r(67509),
        b = r(90927),
        A = r(88462),
        w = r(35324);
      const C = ({
        filterGroup: e,
        filtersInitiallyCollapsed: t,
        onFilterSelect: r,
        options: n = [],
        selectedFilters: l,
        title: o,
      }) =>
        0 === n.length
          ? null
          : a().createElement(
              w.ou,
              {
                collapsible: !0,
                initialCollapseState: t,
                renderTitle: ({ isCollapsed: e, toggleCollapsed: t }) =>
                  a().createElement(w.f7, {
                    isCollapsed: e,
                    text: o,
                    toggleCollapsed: t,
                  }),
              },
              n.map(({ id: t, name: n }) => {
                const o = l.includes(t);
                return a().createElement(w.Dp, {
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
            dispatch: l,
            wishlistUndoState: { selectedFilterIds: o },
          } = (0, I.G)(),
          i = (0, m.useLocalization)(),
          { feature: s, genre: c, event: d, platform: p } = e,
          u = c || [],
          E = s || [],
          h = d || [],
          f = p || [],
          y = !0,
          w = (null == o ? void 0 : o.length) || 0,
          O = ({ checked: e, id: t }) => {
            l(
              e
                ? { type: S.d.REMOVE_FILTERS, payload: { filterIds: [t] } }
                : { type: S.d.ADD_FILTERS, payload: { filterIds: [t] } },
            );
          },
          x = () => l({ type: S.d.RESET_FILTERS }),
          L = (0, g.P)(v.l, { numSelectedFilters: w, resetFilters: x }),
          T = (0, g.ZX)(
            C,
            {
              filterGroup: b.I8.Event,
              filtersInitiallyCollapsed: y,
              onFilterSelect: O,
              options: h,
              selectedFilters: o,
              title: i("diesel.store.browse.events") || "",
            },
            h.length > 0,
          ),
          H = (0, g.ZX)(
            C,
            {
              filterGroup: b.I8.Genre,
              filtersInitiallyCollapsed: y,
              onFilterSelect: O,
              options: u,
              selectedFilters: o,
              title: i("diesel.store.browse.genre") || "",
            },
            u.length > 0,
          ),
          k = (0, g.ZX)(
            C,
            {
              filterGroup: b.I8.Feature,
              filtersInitiallyCollapsed: y,
              onFilterSelect: O,
              options: E,
              selectedFilters: o,
              title: i("diesel.store.browse.features") || "",
            },
            E.length > 0,
          ),
          N = (0, g.ZX)(
            C,
            {
              filterGroup: b.I8.Platform,
              filtersInitiallyCollapsed: y,
              onFilterSelect: O,
              options: f,
              selectedFilters: o,
              title: i("diesel.products.about.meta.platform") || "",
            },
            f.length > 0,
          );
        return a().createElement(
          A.P,
          {
            onClear: () => {
              x(), t && t();
            },
            onDone: r,
            onOverlayClick: n,
          },
          L && L(),
          T && T(),
          H && H(),
          k && k(),
          N && N(),
        );
      };
      var x = r(17245);
      const L = ({ count: e = 0, onClick: t }) => {
        const r = (0, m.useLocalization)();
        return a().createElement(
          x.A,
          { onClick: t },
          r("diesel.store.browse.filter", e > 0 ? [`(${e})`] : [""]),
        );
      };
      var T = r(11923),
        H = r(56764),
        k = r(60263),
        N = r(97116);
      const P = {
          contentWrapper: (0, T.AH)({
            height: "100%",
            "& > div": {
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }),
          content: (e) => (0, T.AH)({ marginTop: e ? 0 : 12 }),
        },
        j = ({ children: e }) =>
          a().createElement(N.A, { className: P.contentWrapper }, e),
        _ = ({ children: e, renderSidebar: t }) => {
          const r = (0, c.useSelector)(y.k);
          return a().createElement(
            N.A,
            { className: P.contentWrapper },
            a().createElement(
              H.d,
              { renderRightSidebar: t },
              a().createElement("div", { className: P.content(r) }, e),
            ),
          );
        },
        R = ({
          children: e,
          renderSidebar: t,
          renderHeader: r,
          renderCommsBanner: n,
        }) =>
          a().createElement(
            k.A,
            null,
            r && r(),
            n && n(),
            t
              ? a().createElement(_, { renderSidebar: t }, e)
              : a().createElement(j, null, e),
          );
      var F = r(76794),
        M = r(78273),
        D = r(14492),
        W = r(8867),
        B = r(3324),
        U = r(54303),
        z = r(14025),
        V = r(54699),
        q = r(68641),
        G = r(98186),
        X = r(40440),
        Z = r(35688),
        $ = r(34475),
        Q = r(49498),
        K = r(53248),
        Y = r(64032),
        J = r(69945),
        ee = r(22357),
        te = r(66448),
        re = Object.defineProperty,
        ne = Object.defineProperties,
        ae = Object.getOwnPropertyDescriptors,
        le = Object.getOwnPropertySymbols,
        oe = Object.prototype.hasOwnProperty,
        ie = Object.prototype.propertyIsEnumerable,
        se = (e, t, r) =>
          t in e
            ? re(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ce = (e, t) => {
          for (var r in t || (t = {})) oe.call(t, r) && se(e, r, t[r]);
          if (le) for (var r of le(t)) ie.call(t, r) && se(e, r, t[r]);
          return e;
        },
        de = (e, t) => ne(e, ae(t));
      const me = {
          listItem: (0, T.AH)({
            height: "70px",
            width: "100%",
            marginBottom: "5px",
            position: "relative",
            "&.gridLayout": { width: "100%", height: "auto", marginBottom: 0 },
          }),
          content: ({ isInstalled: e, cssTheme: t }) =>
            (0, T.AH)(
              de(
                ce(
                  de(ce({}, Y.bm.smooth("background-color", "125ms")), {
                    backgroundColor: e ? t.level2 : t.level1,
                    color: t.textPrimary,
                    width: "100%",
                    height: "100%",
                  }),
                  (0, ee.zG)(8),
                ),
                {
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  borderRadius: Y.Vq,
                  ".gridLayout &": de(
                    ce({ backgroundColor: "transparent" }, (0, ee.zG)(0)),
                    { paddingBottom: "6px", display: "block" },
                  ),
                  ".hasHover:hover &, .active &": {
                    cursor: "pointer",
                    backgroundColor: t.accent,
                    color: t.accentText,
                  },
                  ".gridLayout.hasHover:hover &, .gridLayout.active &": {
                    backgroundColor: "transparent",
                  },
                  "& > div": { height: "100%" },
                },
              ),
            ),
          wrapperActionButton: (e) =>
            (0, T.AH)(
              {
                flex: 1,
                backgroundColor: "transparent",
                color: "inherit",
                fontWeight: 400,
                padding: 0,
                borderRadius: 0,
                [Y.aq.lgOnly]: { height: "auto" },
                "&.disabled": { pointerEvents: "none" },
                ".gridLayout &": {},
              },
              e
                ? {
                    width: "100%",
                    height: "auto",
                    backgroundColor: "transparent",
                    flex: "none",
                  }
                : {
                    height: "50px !important",
                    [Y.aq.lgOnly]: { height: "50px !important" },
                  },
            ),
          buttonInner: (0, T.AH)(
            de(ce({}, J.A), {
              display: "flex",
              textTransform: "none",
              ".gridLayout &": { display: "block", position: "relative" },
            }),
          ),
        },
        pe = ({
          children: e,
          className: t,
          onClick: r,
          isGridLayout: a,
          isInstalled: l = !1,
          isMenuOpen: o,
          renderMenu: i,
          renderEndcap: s,
        }) => {
          const c = (0, T.cx)(
              me.listItem,
              { gridLayout: a, active: o, hasHover: !!r },
              t,
            ),
            d = (0, te.A)();
          return n.createElement(
            "div",
            { className: c, role: "listitem" },
            n.createElement(
              "div",
              {
                className: me.content({ isInstalled: l, cssTheme: d }),
                "data-testid": "listitem-content",
              },
              n.createElement(
                z.A,
                {
                  className: me.wrapperActionButton(a),
                  disabled: o,
                  hasMinWidth: !1,
                  hasHover: !1,
                  onClick: r,
                  "data-testid": "primary-button",
                },
                n.createElement("div", { className: me.buttonInner }, e),
              ),
              s && s(),
            ),
            i && i(),
          );
        };
      var ue = r(42209),
        ge = r(78487),
        Ee = r(83823),
        he = r(59849),
        fe = r(28079),
        ye = r(99277),
        ve = r(34421),
        be = r(85327),
        Ae = r(71335);
      r(98985),
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const we = (e) => {
          if (!e) return !1;
          const { effectiveDate: t } = e;
          return !!t && new Date(t).getTime() > Date.now();
        },
        Ce = (e) => {
          if (!e) return !1;
          const { expiryDate: t } = e;
          return !!t && new Date(t).getTime() < Date.now();
        },
        Ie = (e) => !!e && e.status === Ee.Zt.ACTIVE && !e.isCodeRedemptionOnly,
        Se = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.offer) ? void 0 : t.title;
        },
        Oe = (e) => {
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
        xe = (0, ye.A)((e) =>
          e && e.created ? new Date(e.created).getTime() : null,
        ),
        Le = (0, ve.A)(Oe),
        Te = (0, ye.A)(Oe),
        He = (0, ye.A)((e) => {
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
        ke = (e, t) => (we(e.offer) ? 1 : 0) - (we(t.offer) ? 1 : 0),
        Ne = (e, t) => {
          const r = Ie(e.offer) && !Ce(e.offer) ? 1 : 0;
          return (Ie(t.offer) && !Ce(t.offer) ? 1 : 0) - r;
        },
        Pe = (0, be.A)((e, t) => {
          const r = Se(e),
            n = Se(t);
          return r.localeCompare(n);
        }),
        je = (0, be.A)(xe),
        _e = (0, Ae.A)([Ne, ke, Le, xe]),
        Re = (0, Ae.A)([Ne, ke, Te, xe]),
        Fe = (0, Ae.A)([Ne, ke, He, xe]);
      var Me = r(76221),
        De = r(11783),
        We = Object.defineProperty,
        Be = Object.defineProperties,
        Ue = Object.getOwnPropertyDescriptors,
        ze = Object.getOwnPropertySymbols,
        Ve = Object.prototype.hasOwnProperty,
        qe = Object.prototype.propertyIsEnumerable,
        Ge = (e, t, r) =>
          t in e
            ? We(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Xe = (e, t) => {
          for (var r in t || (t = {})) Ve.call(t, r) && Ge(e, r, t[r]);
          if (ze) for (var r of ze(t)) qe.call(t, r) && Ge(e, r, t[r]);
          return e;
        },
        Ze = (e, t) => Be(e, Ue(t));
      const $e = (0, T.AH)(
          Ze(Xe({}, De.Il.text6), {
            display: "flex",
            height: "100%",
            alignItems: "center",
            width: "100%",
            position: "relative",
            [Y.aq.underMd]: { overflow: "hidden" },
          }),
        ),
        Qe = (0, T.AH)({
          textTransform: "none",
          marginLeft: 21,
          textAlign: "left",
          whiteSpace: "normal",
          "[dir=rtl] &": { textAlign: "right" },
          [Y.aq.underMd]: { marginBottom: 6 },
        }),
        Ke = (0, T.AH)({
          display: "flex",
          "& > div": { backgroundColor: "transparent" },
          [Y.aq.underMd]: { minHeight: 70 },
        }),
        Ye = (0, T.AH)({
          whiteSpace: "normal",
          alignItems: "baseline",
          textAlign: "left",
        }),
        Je = {
          itemContainer: $e,
          removeButton: (e) =>
            (0, T.AH)({
              transition: "background-color 125ms ease-in-out",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: "100%",
              backgroundColor: "transparent",
              color: e.textPrimary,
              pointerEvents: "auto",
              "[dir=rtl] &": { marginRight: 16 },
              "&:hover": {
                backgroundColor: e.accent,
                color: e.accentText,
                "&:after": Ze(Xe(Xe({}, Me.j), J.A), {
                  backgroundColor: e.accentOverlay,
                }),
              },
              [Y.aq.lgOnly]: { height: "100%" },
            }),
          title: Qe,
          undoButton: (0, T.AH)({
            position: "relative",
            whiteSpace: "normal",
            wordBreak: "break-all",
            padding: "0 2px",
          }),
          undoItem: Ke,
          undoTitle: Ye,
          wishlistItem: ({ inactive: e, isUndo: t, cssTheme: r }) =>
            (0, T.AH)(
              {
                button: { cursor: e ? "default" : void 0 },
                [Y.aq.underMd]: {
                  height: "auto",
                  "& > div": { height: "auto" },
                  "& > div > button:first-child": {
                    padding: "10px 0",
                    height: "auto !important",
                    "& > span > div": { position: "relative" },
                  },
                  "& > div > div": { height: "auto" },
                },
                [Y.aq.xs]: { "& > div": { paddingLeft: "0 !important" } },
              },
              t
                ? { pointerEvents: "none" }
                : {
                    "> div": {
                      "&:hover": {
                        backgroundColor: r.accent,
                        color: r.accentText,
                        svg: {
                          path: { stroke: r.accentText, fill: r.accentText },
                        },
                      },
                      a: { color: "inherit" },
                      div: { color: "inherit" },
                    },
                  },
            ),
          undoTextWrapper: (0, T.AH)({
            position: "relative",
            opacity: 1,
            transition: "opacity 5ms ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }),
          undoTextTransition: (0, T.AH)({ opacity: 0 }),
          loading: (0, T.AH)({
            margin: "0 auto",
            left: 0,
            right: 0,
            position: "absolute",
            transition: "opacity 5m ease-in-out",
          }),
        },
        et = ({ onClick: e, title: t, isLoading: r }) => {
          const n = (0, c.useSelector)(y.k),
            l = (0, $.E)();
          return n
            ? a().createElement(
                D.$,
                {
                  variant: Q.ml.OUTLINE,
                  loading: r,
                  loadingLabel: t,
                  onClick: e,
                  disabled: r,
                  title: t,
                },
                a().createElement(ue.QB, { code: "egstore.wishlist.undo" }),
              )
            : a().createElement(
                z.A,
                {
                  className: (0, T.cx)(Je.removeButton(l), Je.undoButton),
                  hasMinWidth: !1,
                  hasHover: !1,
                  onClick: e,
                  title: t,
                  disabled: r,
                },
                a().createElement(
                  "div",
                  { className: Je.undoTextWrapper },
                  a().createElement(ue.QB, {
                    className: (0, T.cx)({ [Je.undoTextTransition]: r }),
                    code: "egstore.wishlist.undo",
                  }),
                  r &&
                    a().createElement(V.A, {
                      icon: X.A.CIRCLE_LOADING,
                      size: G.A.XXSMALL,
                      className: Je.loading,
                    }),
                ),
              );
        },
        tt = ({ onClick: e, title: t }) => {
          const r = (0, c.useSelector)(y.k),
            n = (0, $.E)();
          return r
            ? a().createElement(D.$, {
                variant: Q.ml.GHOST,
                onClick: e,
                icon: a().createElement(W.f, null),
                title: t,
              })
            : a().createElement(
                z.A,
                {
                  className: (0, T.cx)(Je.removeButton(n), Je.undoButton),
                  hasMinWidth: !1,
                  hasHover: !1,
                  onClick: e,
                  title: t,
                },
                a().createElement(V.A, { icon: X.A.CLOSE, size: G.A.XXXSMALL }),
              );
        },
        rt = ({
          addFromWishlistView: e,
          namespace: t,
          offer: r,
          offerId: l,
          isUndoLoading: o,
        }) => {
          const i = (0, K.j)(),
            [s, c] = (0, n.useState)(!1),
            d = (0, m.useLocalization)(),
            p = a().useCallback(() => {
              e({ namespace: t, offerId: l }),
                i({
                  eventAction: he.kv.ADD_FROM_WISHLIST_VIEW,
                  eventCategory: fe.nT,
                  eventLabel: fe.jX,
                  eventValue: (0, Z.A)({ offer: { namespace: t, offerId: l } }),
                  interactionType: ge.HH.Interaction,
                });
            }, [t, l]),
            u = () => {
              c(!0);
            },
            g = r.status === Ee.Zt.ACTIVE && !r.isCodeRedemptionOnly && !Ce(r),
            E = a().useCallback(
              () =>
                g
                  ? a().createElement(et, {
                      onClick: p,
                      isLoading: o,
                      title:
                        d("egstore.wishlist.undo.removed", [r.title]) || "",
                    })
                  : a().createElement(tt, {
                      onClick: u,
                      title: d("diesel.main.navigation.close") || "",
                    }),
              [g, o, p, r.title, u],
            );
          return s
            ? null
            : a().createElement(U.T, {
                type: q.v.OTHER,
                icon: a().createElement(B.u, { color: Q.tV.CRITICAL }),
                content: a().createElement(ue.QB, {
                  code: "egstore.wishlist.undo.removed",
                  args: [r.title],
                }),
                cta: a().createElement(E, null),
              });
        },
        nt = ({
          addFromWishlistView: e,
          namespace: t,
          offer: r,
          offerId: l,
          isUndoLoading: o,
        }) => {
          const i = (0, K.j)(),
            [s, c] = (0, n.useState)(!1),
            d = (0, $.E)(),
            p = (0, m.useLocalization)(),
            u = a().useCallback(() => {
              e({ namespace: t, offerId: l }),
                i({
                  eventAction: he.kv.ADD_FROM_WISHLIST_VIEW,
                  eventCategory: fe.nT,
                  eventLabel: fe.jX,
                  eventValue: (0, Z.A)({ offer: { namespace: t, offerId: l } }),
                  interactionType: ge.HH.Interaction,
                });
            }, [t, l]),
            g = () => {
              c(!0);
            },
            E = r.status === Ee.Zt.ACTIVE && !r.isCodeRedemptionOnly && !Ce(r);
          return s
            ? null
            : a().createElement(
                a().Fragment,
                null,
                a().createElement(
                  pe,
                  {
                    className: (0, T.cx)(
                      Je.wishlistItem({
                        inactive: !E,
                        isUndo: !0,
                        cssTheme: d,
                      }),
                      Je.undoItem,
                    ),
                    isGridLayout: !1,
                    isMenuOpen: !1,
                    renderEndcap: E
                      ? () =>
                          a().createElement(et, {
                            onClick: u,
                            isLoading: o,
                            title:
                              p("egstore.wishlist.undo.removed", [r.title]) ||
                              "",
                          })
                      : () =>
                          a().createElement(tt, {
                            onClick: g,
                            title: p("diesel.main.navigation.close") || "",
                          }),
                  },
                  a().createElement(
                    "div",
                    { className: Je.itemContainer },
                    a().createElement(
                      "div",
                      { className: (0, T.cx)(Je.title, Je.undoTitle) },
                      p("egstore.wishlist.undo.removed", [r.title]),
                    ),
                  ),
                ),
              );
        };
      var at = r(87553),
        lt = r(55922),
        ot = Object.defineProperty,
        it = Object.defineProperties,
        st = Object.getOwnPropertyDescriptors,
        ct = Object.getOwnPropertySymbols,
        dt = Object.prototype.hasOwnProperty,
        mt = Object.prototype.propertyIsEnumerable,
        pt = (e, t, r) =>
          t in e
            ? ot(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ut = (e, t) => {
          for (var r in t || (t = {})) dt.call(t, r) && pt(e, r, t[r]);
          if (ct) for (var r of ct(t)) mt.call(t, r) && pt(e, r, t[r]);
          return e;
        },
        gt = (e, t) => it(e, st(t));
      const Et = { wrapper: (0, T.AH)({ width: "100%" }) },
        ht = (e) => {
          var t, r, l, o;
          const i = (0, c.useSelector)(y.k),
            { dispatch: s } = (0, I.G)(),
            { namespace: d, offer: m, isUndo: p } = e,
            u = null == m ? void 0 : m.id,
            g =
              null != (r = null == (t = m.catalogNs) ? void 0 : t.store)
                ? r
                : "",
            E =
              null != (o = null == (l = m.catalogNs) ? void 0 : l.parent)
                ? o
                : "",
            [h, f] = (0, n.useState)(!1),
            [v, b] = (0, lt.n)({ offerId: u, sandboxId: d }),
            A = (0, n.useCallback)(() => {
              b.isLoading ||
                v().then((e) => {
                  var t;
                  e &&
                    (null == (t = e.data) ? void 0 : t.success) &&
                    s({ type: S.d.REMOVE_UNDO, payload: { offerId: u } });
                });
            }, [d, u, b.isLoading]);
          return p
            ? i
              ? a().createElement(
                  rt,
                  gt(ut({}, e), {
                    isUndoLoading: b.isLoading,
                    addFromWishlistView: A,
                  }),
                )
              : a().createElement(
                  nt,
                  gt(ut({}, e), {
                    isUndoLoading: b.isLoading,
                    addFromWishlistView: A,
                  }),
                )
            : a().createElement(
                F.Ay,
                {
                  disabled: h,
                  rootMargin: "10%",
                  onChange: ({ isIntersecting: e }) => {
                    f(e);
                  },
                },
                a().createElement(
                  "div",
                  { className: Et.wrapper },
                  h
                    ? a().createElement(M.lF, {
                        offerId: u,
                        sandboxId: d,
                        store: g,
                        productId: E,
                      })
                    : a().createElement(at.G, null),
                ),
              );
        };
      var ft = r(92619),
        yt = Object.defineProperty,
        vt = Object.defineProperties,
        bt = Object.getOwnPropertyDescriptors,
        At = Object.getOwnPropertySymbols,
        wt = Object.prototype.hasOwnProperty,
        Ct = Object.prototype.propertyIsEnumerable,
        It = (e, t, r) =>
          t in e
            ? yt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const St = {
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
        Ot = (e) => {
          return n.createElement(
            ft.B,
            ((t = ((e, t) => {
              for (var r in t || (t = {})) wt.call(t, r) && It(e, r, t[r]);
              if (At) for (var r of At(t)) Ct.call(t, r) && It(e, r, t[r]);
              return e;
            })({}, e)),
            vt(
              t,
              bt({ className: St.wishlist, itemClassName: St.wishlistItem }),
            )),
          );
          var t;
        },
        xt = ({ count: e, animation: t }) => {
          const r = [...Array(e).keys()];
          return a().createElement(Ot, { data: r }, () =>
            a().createElement(at.G, { animation: t }),
          );
        };
      var Lt = Object.defineProperty,
        Tt = Object.getOwnPropertySymbols,
        Ht = Object.prototype.hasOwnProperty,
        kt = Object.prototype.propertyIsEnumerable,
        Nt = (e, t, r) =>
          t in e
            ? Lt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Pt = ({ items: e = [], isLoading: t }) => {
        const r = 0 === e.length;
        return a().createElement(
          a().Fragment,
          null,
          t && r
            ? a().createElement(xt, { count: fe.aX })
            : a().createElement(Ot, { data: e }, (e) =>
                a().createElement(
                  ht,
                  ((e, t) => {
                    for (var r in t || (t = {}))
                      Ht.call(t, r) && Nt(e, r, t[r]);
                    if (Tt)
                      for (var r of Tt(t)) kt.call(t, r) && Nt(e, r, t[r]);
                    return e;
                  })({}, e),
                ),
              ),
        );
      };
      var jt = r(44316),
        _t = r(39278),
        Rt = r(65784),
        Ft = r(54741),
        Mt = r(91749),
        Dt = r(8497),
        Wt = r(44904),
        Bt = r(47035),
        Ut = r(68813),
        zt = r(76957),
        Vt = r(19281),
        qt = r(705),
        Gt = r(38210);
      const Xt = (0, T.AH)(),
        Zt = ({ to: e }) => {
          const t = (0, c.useSelector)(y.k),
            r = (0, $.E)(),
            l = (0, n.useMemo)(
              () =>
                ((e) => ({
                  root: (0, T.AH)({
                    display: "flex",
                    alignItems: "center",
                    color: e.textSecondary,
                    [`.${Xt}`]: {
                      color: e.textSecondary,
                      borderBottom: `1px solid ${e.accentOverlay}`,
                    },
                    "&:hover": {
                      color: e.textPrimary,
                      [`.${Xt}`]: {
                        color: e.textPrimary,
                        borderColor: e.textPrimary,
                      },
                    },
                  }),
                  externalLinkIcon: (0, T.AH)((0, ee.S$)(3), (0, ee.hz)(10), {
                    marginTop: 2,
                  }),
                }))(r),
              [r],
            ),
            o = (0, Gt.A)(),
            i = (0, f.N1)(o) ? zt.A : Ut.Ay;
          return t
            ? a().createElement(
                Vt.n,
                { variant: Q.S$.PRIMARY, size: Q.mM.SM, to: e },
                a().createElement(ue.QB, {
                  code: "egstore.email.preferences_v2",
                }),
              )
            : a().createElement(
                "div",
                { className: l.root },
                a().createElement(
                  qt.A,
                  { to: e },
                  a().createElement(
                    i,
                    null,
                    a().createElement(
                      "span",
                      { className: Xt },
                      a().createElement(ue.QB, {
                        code: "egstore.email.preferences_v2",
                      }),
                    ),
                  ),
                ),
                a().createElement(
                  "div",
                  { className: l.externalLinkIcon },
                  a().createElement(Bt.t, { size: Q.sp.SM }),
                ),
              );
        },
        $t = () => {
          const e = (0, c.useSelector)(Wt.Gp),
            t = (0, m.useLocalizationLocale)();
          return a().createElement(Zt, { to: `${e}?lang=${t}` });
        };
      var Qt = r(74819);
      const Kt = {
          wrapper: (0, T.AH)({ display: "flex", color: Y.E4 }),
          textWrapper: (0, T.AH)((0, ee.S$)(12)),
        },
        Yt = () =>
          a().createElement(U.T, {
            type: q.v.ERROR,
            content: a().createElement(ue.QB, {
              code: "egstore.email.opt_in_error",
            }),
          }),
        Jt = () =>
          a().createElement(
            "div",
            { className: Kt.wrapper },
            a().createElement(V.A, { icon: Qt.T, size: G.A.XXSMALL }),
            a().createElement(
              "div",
              { className: Kt.textWrapper },
              a().createElement(
                Ut.Ay,
                null,
                a().createElement(ue.QB, {
                  code: "egstore.email.opt_in_error",
                }),
              ),
            ),
          );
      var er = r(2758),
        tr = r(45580),
        rr = Object.defineProperty,
        nr = Object.getOwnPropertySymbols,
        ar = Object.prototype.hasOwnProperty,
        lr = Object.prototype.propertyIsEnumerable,
        or = (e, t, r) =>
          t in e
            ? rr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ir = (e, t) => {
          for (var r in t || (t = {})) ar.call(t, r) && or(e, r, t[r]);
          if (nr) for (var r of nr(t)) lr.call(t, r) && or(e, r, t[r]);
          return e;
        };
      const sr = {
          wrapper: (0, T.AH)({ display: "flex", flexDirection: "column" }),
          text: (e) =>
            (0, T.AH)(
              ir(
                { display: "inline-flex", alignItems: "center" },
                e && ir({}, (0, ee.hz)(25)),
              ),
            ),
          leftCol: (0, T.AH)({ display: "flex" }),
          iconWrapper: (e) =>
            (0, T.AH)((0, ee.hz)(e ? 8 : 20), {
              display: "none",
              [tr.aq.sm]: {
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
        cr = ({
          renderMessage: e,
          renderToggle: t,
          renderIcon: r,
          renderError: n,
          Container: l = a().Fragment,
        }) => {
          const o = (0, c.useSelector)(y.k);
          return o
            ? a().createElement(
                "div",
                {
                  "data-testid": "opt-in-toggle-layout",
                  className: sr.wrapper,
                },
                a().createElement(er.NN, {
                  content: a().createElement(
                    "div",
                    { className: sr.content(o) },
                    a().createElement(
                      "div",
                      { className: sr.leftCol },
                      r &&
                        a().createElement(
                          "div",
                          { className: sr.iconWrapper(o) },
                          r(),
                        ),
                      a().createElement("div", { className: sr.text(o) }, e()),
                    ),
                    t(),
                  ),
                }),
                a().createElement("div", { className: sr.error }, n && n()),
              )
            : a().createElement(
                "div",
                {
                  "data-testid": "opt-in-toggle-layout",
                  className: sr.wrapper,
                },
                a().createElement(
                  l,
                  null,
                  a().createElement(
                    "div",
                    { className: sr.content(o) },
                    a().createElement(
                      "div",
                      { className: sr.leftCol },
                      r &&
                        a().createElement(
                          "div",
                          { className: sr.iconWrapper(o) },
                          r(),
                        ),
                      a().createElement("div", { className: sr.text(o) }, e()),
                    ),
                    t(),
                  ),
                ),
                a().createElement("div", { className: sr.error }, n && n()),
              );
        };
      var dr = r(57805),
        mr = Object.defineProperty,
        pr = Object.getOwnPropertySymbols,
        ur = Object.prototype.hasOwnProperty,
        gr = Object.prototype.propertyIsEnumerable,
        Er = (e, t, r) =>
          t in e
            ? mr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        hr = (e, t) => {
          for (var r in t || (t = {})) ur.call(t, r) && Er(e, r, t[r]);
          if (pr) for (var r of pr(t)) gr.call(t, r) && Er(e, r, t[r]);
          return e;
        };
      const fr = { primary: (0, T.AH)((0, ee.hz)(8), { display: "inline" }) },
        yr = ({ code: e, id: t, renderSecondary: r, shouldStackOnWrap: n }) => {
          const l = (0, c.useSelector)(y.k),
            o = ((e, { shouldStackOnWrap: t }) => ({
              root: (0, T.AH)(
                hr(
                  { display: "flex", alignItems: "center" },
                  t
                    ? {
                        [tr.aq.underLg]: {
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                      }
                    : {},
                ),
              ),
              secondary: (0, T.AH)({
                display: "inline-block",
                [tr.aq.underLg]: { marginTop: t ? 5 : 0 },
              }),
              primary: (0, T.AH)((0, ee.hz)(25), {
                display: "inline",
                color: e.textSecondary,
              }),
            }))((0, $.E)(), { shouldStackOnWrap: n });
          return l
            ? a().createElement(
                "div",
                { className: o.root },
                a().createElement(
                  dr.E,
                  { variant: Q.ZJ.UIMD, color: Q.Uf.PRIMARY },
                  a().createElement(
                    "div",
                    { className: fr.primary },
                    a().createElement(ue.QB, { id: t, code: e }),
                  ),
                ),
                a().createElement("div", { className: o.secondary }, r && r()),
              )
            : a().createElement(
                Ut.Ay,
                null,
                a().createElement(
                  "div",
                  { className: o.root },
                  a().createElement(
                    "div",
                    { className: o.primary },
                    a().createElement(ue.QB, { id: t, code: e }),
                  ),
                  a().createElement(
                    "div",
                    { className: o.secondary },
                    r && r(),
                  ),
                ),
              );
        };
      var vr = r(38981);
      const br = (
        ({ Container: e = a().Fragment }) =>
        ({
          channelType: t,
          settingKeys: r,
          selectedSettingKey: l,
          icon: o,
          toggleTextId: i,
          enabledMessage: s,
          disabledMessage: d,
          secondary: p,
          iconSize: u,
          ariaLabelCode: g,
        }) => {
          var E, h;
          const f = (0, c.useSelector)(y.k),
            v = (0, c.useSelector)(Rt.ic),
            b = (0, m.useLocalization)(),
            { settings: A } = (0, Ft.Ay)(
              { identity: v, settingKeyPrefix: t, settingKeys: r },
              { refetchOnMount: "always" },
            ),
            w =
              null !=
                (h =
                  null == (E = A.find((e) => e.settingKey === l))
                    ? void 0
                    : E.settingValue) && h,
            [C, I] = (0, Mt.P)({ settingKey: l, settingKeyPrefix: t }),
            S = (0, n.useCallback)(
              (e) => {
                return (
                  (t = void 0),
                  (r = null),
                  (n = function* () {
                    yield C(!e);
                  }),
                  new Promise((e, a) => {
                    var l = (e) => {
                        try {
                          i(n.next(e));
                        } catch (e) {
                          a(e);
                        }
                      },
                      o = (e) => {
                        try {
                          i(n.throw(e));
                        } catch (e) {
                          a(e);
                        }
                      },
                      i = (t) =>
                        t.done
                          ? e(t.value)
                          : Promise.resolve(t.value).then(l, o);
                    i((n = n.apply(t, r)).next());
                  })
                );
                var t, r, n;
              },
              [C],
            ),
            O = (0, n.useCallback)(
              () =>
                a().createElement(vr.A, {
                  checked: w,
                  onChange: () => S(w),
                  tabIndex: 0,
                  ariaLabelledBy: i,
                  ariaLabel: g && b(g),
                  size: 20,
                }),
              [w, S, i],
            ),
            x = (0, n.useCallback)(
              () =>
                a().createElement(yr, {
                  code: w ? s : d,
                  id: i,
                  renderSecondary: w ? () => a().createElement($t, null) : p,
                  shouldStackOnWrap: w,
                }),
              [w, s, d, i, p],
            ),
            L = (0, n.useMemo)(() => {
              const e = f
                ? a().createElement(_t.u, { color: Q.tV.SELECT })
                : a().createElement(V.A, { icon: o, size: u });
              return o ? () => e : void 0;
            }, [o]),
            T = (0, n.useMemo)(
              () =>
                I.isError
                  ? () =>
                      f
                        ? a().createElement(Yt, null)
                        : a().createElement(Jt, null)
                  : void 0,
              [I.isError, f],
            );
          return a().createElement(cr, {
            renderToggle: O,
            renderMessage: x,
            renderIcon: L,
            renderError: T,
            Container: e,
          });
        }
      )({ Container: Dt.A });
      var Ar = r(38365);
      const wr = {
          textWrapper: (0, T.AH)({
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }),
          toggleSkeleton: (0, T.AH)({ borderRadius: 26 }),
          lineOne: (0, T.AH)({
            width: 400,
            height: 14,
            [tr.aq.underSm]: { width: 200 },
          }),
          lineTwo: (0, T.AH)({
            width: 180,
            height: 14,
            [tr.aq.underSm]: { width: 160 },
          }),
        },
        Cr = ({ className: e, animation: t }) =>
          a().createElement(Ar.EA, {
            variant: Ar.qd.Text,
            animation: t,
            className: e,
          }),
        Ir = ({ animation: e }) =>
          a().createElement(Ar.EA, {
            variant: Ar.qd.Rect,
            animation: e,
            width: 32,
            height: 20,
            className: wr.toggleSkeleton,
          }),
        Sr = ({ animation: e }) =>
          a().createElement(cr, {
            renderMessage: () =>
              a().createElement(Cr, { className: wr.lineOne, animation: e }),
            renderToggle: () => a().createElement(Ir, { animation: e }),
            renderIcon: () =>
              a().createElement(Ar.EA, { height: 36, width: 36, animation: e }),
            Container: Dt.A,
          });
      var Or = r(90413),
        xr = r(10558);
      const Lr = ({ message: e }) => {
          const t = (0, $.E)(),
            r = (0, n.useMemo)(
              () =>
                (({ cssTheme: e }) => ({
                  wrapper: (0, T.AH)({ [tr.aq.underSm]: { display: "none" } }),
                  icon: (0, T.AH)({
                    color: e.textPrimary,
                    height: 16,
                    width: 16,
                    "&:hover": { cursor: "help" },
                  }),
                  message: (0, T.AH)({ maxWidth: 300, textAlign: "left" }),
                }))({ cssTheme: t }),
              [t],
            ),
            l = a().createRef();
          return a().createElement(
            "div",
            { className: r.wrapper },
            a().createElement(
              "div",
              { ref: l },
              a().createElement(V.A, {
                icon: xr.U,
                size: G.A.CUSTOM,
                className: r.icon,
              }),
            ),
            a().createElement(
              Or.m,
              { hideOnClick: !1, anchorRef: l, className: r.message },
              a().createElement(ue.QB, { code: e }),
            ),
          );
        },
        Tr = {
          viewBox: "0 0 36 36",
          data: a().createElement(
            a().Fragment,
            null,
            a().createElement("path", {
              d: "M21.5284 11.2948C22.256 11.0999 23.0038 11.5316 23.1987 12.2591L26.4436 24.3664C26.6386 25.0939 26.2068 25.8418 25.4793 26.0367L7.18597 30.939C6.45845 31.134 5.71062 30.7023 5.51566 29.9747L2.27109 17.8673C2.07614 17.1398 2.50785 16.392 3.23536 16.197L21.5284 11.2948Z",
              fill: "#C4C4C4",
            }),
            a().createElement("path", {
              d: "M12.6961 21.5614L13.3991 21.8883C14.1695 22.2466 15.0859 22.001 15.5738 21.3056L16.0187 20.6715L26.2814 25.4443C26.1048 25.7258 25.8256 25.9437 25.4794 26.0365L7.18667 30.9388C6.84019 31.0317 6.4891 30.9824 6.19532 30.8267L12.6961 21.5614Z",
              fill: "#A6A6A6",
            }),
            a().createElement(
              "g",
              { style: { mixBlendMode: "multiply" } },
              a().createElement("path", {
                d: "M21.528 11.2954L3.23487 16.1976C2.88889 16.2904 2.60981 16.5081 2.43322 16.7892L13.3858 23.1168C14.37 23.6854 15.6287 23.3481 16.1967 22.3637L22.5186 11.4072C22.225 11.2518 21.8742 11.2026 21.528 11.2954Z",
                fill: "#ECECEC",
              }),
            ),
            a().createElement("path", {
              d: "M21.5289 11.2954L3.23585 16.1976C2.88987 16.2904 2.61079 16.5081 2.43419 16.7892L13.3998 21.8889C14.1702 22.2471 15.0866 22.0016 15.5746 21.3061L22.5196 11.4072C22.226 11.2518 21.8751 11.2026 21.5289 11.2954Z",
              fill: "#ECECEC",
            }),
            a().createElement("path", {
              d: "M23.6807 1.85819C23.6235 1.65158 23.2857 1.65158 23.2283 1.85819C23.0687 2.43365 22.8364 3.12459 22.5693 3.46321C22.2733 3.83858 21.5346 4.1598 20.9748 4.36119C20.7875 4.42839 20.7875 4.74244 20.9748 4.80964C21.5346 5.01103 22.2733 5.33225 22.5693 5.7074C22.8364 6.04602 23.0687 6.73696 23.2283 7.31242C23.2857 7.51925 23.6235 7.51925 23.6807 7.31242C23.8403 6.73696 24.0726 6.04602 24.3396 5.7074C24.6358 5.33225 25.3744 5.01103 25.9344 4.80964C26.1215 4.74244 26.1215 4.42839 25.9344 4.36119C25.3744 4.1598 24.6358 3.83858 24.3396 3.46321C24.0726 3.12459 23.8403 2.43365 23.6807 1.85819Z",
              fill: "white",
            }),
            a().createElement("path", {
              d: "M29.6923 6.20397C29.6164 5.9296 29.1678 5.9296 29.0916 6.20397C28.8796 6.96818 28.5711 7.88573 28.2165 8.33542C27.8234 8.83391 26.8423 9.26049 26.0989 9.52793C25.8502 9.61717 25.8502 10.0342 26.0989 10.1235C26.8423 10.3909 27.8234 10.8175 28.2165 11.3157C28.5711 11.7654 28.8796 12.6829 29.0916 13.4471C29.1678 13.7218 29.6164 13.7218 29.6923 13.4471C29.9043 12.6829 30.2128 11.7654 30.5674 11.3157C30.9608 10.8175 31.9416 10.3909 32.6853 10.1235C32.9337 10.0342 32.9337 9.61717 32.6853 9.52793C31.9416 9.26049 30.9608 8.83391 30.5674 8.33542C30.2128 7.88573 29.9043 6.96818 29.6923 6.20397Z",
              fill: "white",
            }),
          ),
        };
      var Hr = r(79829),
        kr = r(79575),
        Nr = r(5983);
      const Pr = () => {
        var e;
        const t = (0, c.useSelector)(y.k),
          r = (0, $.E)();
        return a().createElement(
          l.tY,
          { fallback: a().createElement(Sr, null) },
          a().createElement(
            Nr.A,
            {
              themeOverrides: t
                ? void 0
                : {
                    accent:
                      null == (e = (0, jt.LV)(kr.X[r.mode].success))
                        ? void 0
                        : e.rgb(),
                  },
            },
            a().createElement(br, {
              channelType: "email",
              settingKeys: [Hr.T.EMAIL, Hr.T.WISHLIST_EMAIL],
              selectedSettingKey: Hr.T.WISHLIST_EMAIL,
              toggleTextId: "wishlist-toggle-label",
              enabledMessage: "egstore.wishlist.notification_toggle_enabled",
              disabledMessage: t
                ? "egstore.wishlist.notification_toggle_tooltip"
                : "egstore.wishlist.notification_toggle",
              ariaLabelCode: "egstore.wishlist.notification_toggle.switch",
              icon: Tr,
              iconSize: G.A.SMALL,
              secondary: () =>
                t
                  ? void 0
                  : a().createElement(Lr, {
                      message: "egstore.wishlist.notification_toggle_tooltip",
                    }),
            }),
          ),
        );
      };
      var jr = r(25355),
        _r = r(14531);
      const Rr = {
          container: (0, T.AH)({
            marginTop: 8,
            marginBottom: 30,
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            [tr.aq.md]: { alignItems: "center", flexDirection: "row" },
          }),
          title: (0, T.AH)({
            [tr.aq.underMd]: {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            },
          }),
        },
        Fr = ({ animation: e }) =>
          a().createElement(
            "div",
            { className: Rr.container },
            a().createElement(
              "div",
              { className: Rr.title },
              a().createElement(Ar.EA, {
                height: 50,
                width: 120,
                animation: e,
              }),
            ),
          ),
        Mr = ({ renderWallet: e }) => {
          const t = (0, c.useSelector)(y.k),
            r = (0, m.useLocalization)();
          return t
            ? a().createElement(
                "div",
                { className: Rr.container },
                a().createElement(
                  "div",
                  { className: Rr.title },
                  a().createElement(
                    dr.E,
                    { variant: Q.ZJ.H2XL, color: Q.Uf.PRIMARY, as: "h1" },
                    a().createElement(jr.A, {
                      code: "diesel.main.navigation.wishlist",
                    }),
                  ),
                ),
                e && e(),
              )
            : a().createElement(
                "div",
                { className: Rr.container },
                a().createElement(
                  "div",
                  { className: Rr.title },
                  a().createElement(
                    _r.A.Heading,
                    { headingLevel: 1 },
                    r("diesel.main.navigation.wishlist"),
                  ),
                ),
                e && e(),
              );
        };
      var Dr = r(77108),
        Wr = r(46571),
        Br = Object.defineProperty,
        Ur = Object.defineProperties,
        zr = Object.getOwnPropertyDescriptors,
        Vr = Object.getOwnPropertySymbols,
        qr = Object.prototype.hasOwnProperty,
        Gr = Object.prototype.propertyIsEnumerable,
        Xr = (e, t, r) =>
          t in e
            ? Br(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Zr = (e, t) => {
          for (var r in t || (t = {})) qr.call(t, r) && Xr(e, r, t[r]);
          if (Vr) for (var r of Vr(t)) Gr.call(t, r) && Xr(e, r, t[r]);
          return e;
        };
      const $r = ({
          onSort: e = () => {},
          sortingOptions: t,
          sortValue: r = "",
        }) => {
          const l = (0, te.A)(),
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
                      ((t = Zr({}, De.Il.text8)),
                      (r = {
                        textAlign: "right",
                        [Wr.aq.xs]: { display: "none" },
                      }),
                      Ur(t, zr(r))),
                    ),
                    layoutWrapper: (0, T.AH)({ textAlign: "right" }),
                    layoutButton: (0, T.AH)((0, ee.wv)(1), {
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
                })(l),
              [l],
            );
          return a().createElement(
            "div",
            { className: o.main },
            a().createElement(
              "div",
              { className: o.sortWrapper },
              t &&
                a().createElement(
                  a().Fragment,
                  null,
                  a().createElement(Dr.w, {
                    id: "sort-dropdown",
                    label: a().createElement(ue.QB, {
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
        Qr = {
          root: (0, T.AH)({
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }),
        },
        Kr = ({
          sortType: e,
          setSortType: t,
          wishlistSortingOptions: r,
          renderFilterToggle: n,
        }) =>
          a().createElement(
            "div",
            { "data-testid": "wishlist-sort-layout", className: Qr.root },
            a().createElement($r, {
              onSort: (e) => t(e),
              sortingOptions: r,
              sortValue: e,
            }),
            n && n(),
          );
      var Yr = r(62619),
        Jr = r(94815),
        en = r(89744),
        tn = r(8631);
      const rn = (e = [], t = []) => {
        const r = e.reduce(
          (e, r) =>
            ((e, t) => !!(0, Jr.A)((0, en.A)("id", e), t))(r, t)
              ? [...e, !0]
              : [...e, !1],
          [],
        );
        return (0, tn.A)((0, d.A)(!0), r);
      };
      var nn = r(68971),
        an = r(51449),
        ln = r(11654),
        on = r(86394),
        sn = r(71188),
        cn = Object.defineProperty,
        dn = Object.defineProperties,
        mn = Object.getOwnPropertyDescriptors,
        pn = Object.getOwnPropertySymbols,
        un = Object.prototype.hasOwnProperty,
        gn = Object.prototype.propertyIsEnumerable,
        En = (e, t, r) =>
          t in e
            ? cn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        hn = (e, t) => {
          for (var r in t || (t = {})) un.call(t, r) && En(e, r, t[r]);
          if (pn) for (var r of pn(t)) gn.call(t, r) && En(e, r, t[r]);
          return e;
        },
        fn = (e, t) => dn(e, mn(t));
      const yn = (0, Ae.A)([
          (0, ye.A)((0, ln.A)("count")),
          (0, ve.A)((0, ln.A)("name")),
        ]),
        vn = (0, sn.A)(
          (e = []) =>
            e.reduce((e, t) => {
              var r, n;
              return (
                null == (r = null == t ? void 0 : t.offer) ? void 0 : r.tags
              )
                ? [...e, ...(null == (n = t.offer) ? void 0 : n.tags)]
                : e;
            }, []),
          (e = []) =>
            e.reduce((e, t) => {
              if (!t.groupName) return e;
              const r = e[t.groupName] || [];
              return fn(hn({}, e), { [t.groupName]: [...r, t] });
            }, {}),
          (e = {}) => {
            const t = ((e = {}) => (0, nn.A)((0, an.A)((0, ln.A)("id")), e))(e);
            return (0, nn.A)((e, r) => {
              const n = t[r];
              return (0, on.A)(e).map((e) => fn(hn({}, e), { count: n[e.id] }));
            }, e);
          },
          (e = {}) => (0, nn.A)(yn, e),
        );
      var bn = r(28637),
        An = r(48559);
      const wn = (e) => ({
          wrapper: (0, T.AH)({
            marginTop: 30,
            '[data-component="Icon"]': { path: { fill: Y.OF } },
          }),
          link: (0, T.AH)({
            borderBottom: `1px solid ${e.accentOverlay}`,
            color: e.textSecondary,
            "&:hover": {
              borderBottom: `1px solid ${e.textPrimary}`,
              color: e.textPrimary,
            },
          }),
        }),
        Cn = () => {
          const e = (0, c.useSelector)(y.k),
            t = (0, m.useLocalization)(),
            r = (0, $.E)(),
            l = (0, n.useMemo)(() => wn(r), [r]),
            o = t("egstore.wishlist.empty_results.message"),
            i = () =>
              a().createElement(
                qt.A,
                { to: "/", className: l.link },
                t("egstore.wishlist.empty_results.shop_discover"),
              );
          return e
            ? a().createElement(An.W, {
                contentIcon: X.A.STRESSED_FACE_EDS,
                title: a().createElement("span", null, o),
                body: a().createElement(
                  bn.v,
                  { variant: Q.ml.PRIMARY, to: "/" },
                  a().createElement(ue.QB, {
                    code: "egstore.wishlist.empty_results.shop_discover",
                  }),
                ),
              })
            : a().createElement(
                "div",
                { className: l.wrapper },
                a().createElement(An.W, {
                  contentIcon: X.A.STRESSED_FACE,
                  title: a().createElement("span", null, o),
                  body: a().createElement(i, null),
                }),
              );
        },
        In = ({ onReset: e }) => {
          const t = (0, c.useSelector)(y.k),
            r = (0, m.useLocalization)(),
            l = (0, $.E)(),
            o = (0, n.useMemo)(() => wn(l), [l]);
          return a().createElement(
            "div",
            { className: o.wrapper },
            a().createElement(An.W, {
              contentIcon: t ? X.A.STRESSED_FACE_EDS : X.A.STRESSED_FACE,
              title: r("diesel.common.search.noResults.title"),
              body: a().createElement(
                qt.A,
                {
                  onClick: (t) => {
                    t.preventDefault(), e && e();
                  },
                  className: o.link,
                },
                r("egstore.filters.remove_filters"),
              ),
            }),
          );
        },
        Sn = {
          [Ee.Fj.ALPHABETICAL]: Pe,
          [Ee.Fj.RECENTLY_ADDED]: je,
          [Ee.Fj.LOWEST_PRICE]: _e,
          [Ee.Fj.HIGHEST_PRICE]: Re,
          [Ee.Fj.ON_SALE]: Fe,
        },
        On = ({ breakpoint: e }) => {
          const t = (0, c.useSelector)(y.k),
            r = (0, p.H)(),
            l = (0, m.useLocalization)(),
            [o, i] = (0, n.useState)(Ee.Fj.ON_SALE),
            [v, b] = (0, n.useState)([]),
            [A, w] = (0, n.useState)(!1),
            {
              wishlistItems: C,
              isError: x,
              isFetching: T,
              isSuccess: H,
            } = (0, Yr.A)(),
            {
              dispatch: k,
              wishlistUndoState: { wishlistWithUndo: N, selectedFilterIds: P },
            } = (0, I.G)(),
            j = (0, f.tU)(e),
            _ = (0, fe.yb)(l),
            F = vn(N) || {},
            M = Object.keys(F).length,
            D = () => w(!A),
            W = (0, n.useCallback)((e = []) => Sn[o](e), [o]);
          (0, n.useEffect)(() => {
            k({ type: S.d.SET_WISHLIST, payload: { wishlist: C } });
          }, [C]),
            (0, n.useEffect)(() => {
              const e = ((e = [], t = []) =>
                t.reduce((t, r) => {
                  var n;
                  const a =
                    (null == (n = null == r ? void 0 : r.offer)
                      ? void 0
                      : n.tags) || [];
                  return rn(e, a) ? [...t, r] : t;
                }, []))(P, N);
              (0, d.A)(e, v) || b(() => e);
            }, [P, N]),
            (0, n.useEffect)(() => {
              k({ type: S.d.RESET_WISHLIST, payload: { wishlist: C } });
            }, [o]);
          const B = (0, g.P)(O, { filters: F }),
            U = (0, g.P)(O, {
              filters: F,
              onClear: D,
              onDone: D,
              onOverlayClick: D,
            }),
            z = (0, g.ZX)(L, { count: P.length, onClick: D }, j),
            V = (0, g.P)(Mr, {
              renderWallet: () =>
                a().createElement(
                  a().Fragment,
                  null,
                  a().createElement(u.dd, null),
                ),
            }),
            q = a().useMemo(() => !(t && !C.length), [t, C.length]);
          return x
            ? a().createElement(E.A, { type: h.A.SERVER_ERROR })
            : a().createElement(
                a().Fragment,
                null,
                a().createElement(s.m, {
                  title: l("diesel.main.navigation.wishlist"),
                }),
                a().createElement(
                  R,
                  {
                    renderHeader: V,
                    renderCommsBanner: () =>
                      r ? null : a().createElement(Pr, null),
                    renderSidebar: !j && M ? B : void 0,
                  },
                  j && A && U && U(),
                  q &&
                    a().createElement(Kr, {
                      sortType: o,
                      setSortType: i,
                      wishlistSortingOptions: _,
                      renderFilterToggle: M ? z : void 0,
                    }),
                  0 === v.length &&
                    P.length > 0 &&
                    a().createElement(In, {
                      onReset: () => k({ type: S.d.RESET_FILTERS }),
                    }),
                  0 === ((null == C ? void 0 : C.length) || 0) &&
                    0 === N.length &&
                    H
                    ? a().createElement(Cn, null)
                    : a().createElement(Pt, { isLoading: T, items: W(v) }),
                ),
              );
        };
      var xn = r(87536),
        Ln = r(76004),
        Tn = r(27855),
        Hn = r(46532),
        kn = Object.defineProperty,
        Nn = Object.defineProperties,
        Pn = Object.getOwnPropertyDescriptors,
        jn = Object.getOwnPropertySymbols,
        _n = Object.prototype.hasOwnProperty,
        Rn = Object.prototype.propertyIsEnumerable,
        Fn = (e, t, r) =>
          t in e
            ? kn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Mn = (e, t) => {
          for (var r in t || (t = {})) _n.call(t, r) && Fn(e, r, t[r]);
          if (jn) for (var r of jn(t)) Rn.call(t, r) && Fn(e, r, t[r]);
          return e;
        },
        Dn = (e, t) => Nn(e, Pn(t));
      const Wn = ({
          children: e,
          initialUndoItems: t = [],
          initialWishlist: r = [],
          initialSelectedFilterIds: l = [],
        }) => {
          const o = {
              undoItems: t,
              wishlist: r,
              wishlistWithUndo: r,
              selectedFilterIds: l,
            },
            [i, s] = (0, n.useReducer)((e, t) => {
              switch (t.type) {
                case S.d.SET_WISHLIST: {
                  const { wishlist: r } = t.payload;
                  if ((0, d.A)(e.wishlist, r)) return e;
                  if (
                    (null == r ? void 0 : r.length) &&
                    0 === e.wishlistWithUndo.length
                  )
                    return Dn(Mn({}, e), { wishlistWithUndo: r, wishlist: r });
                  const { undoItems: n } = e,
                    a = ((e, t) => {
                      const r = e.map(({ offerId: e }) => e).sort(),
                        n = t.map(({ offerId: e }) => e).sort();
                      return (0, d.A)(r, n);
                    })(e.wishlistWithUndo, r),
                    l =
                      0 !== n.length || a
                        ? ((e = [], t = []) =>
                            0 === e.length
                              ? e
                              : e.reduce(
                                  (e, r) =>
                                    (0, Jr.A)((e) => e === r.offerId)(t)
                                      ? [...e, Dn(Mn({}, r), { isUndo: !0 })]
                                      : [...e, Dn(Mn({}, r), { isUndo: !1 })],
                                  [],
                                ))(e.wishlistWithUndo, n)
                        : r;
                  return Dn(Mn({}, e), { wishlistWithUndo: l, wishlist: r });
                }
                case S.d.RESET_WISHLIST: {
                  const { wishlist: r } = t.payload;
                  return Dn(Mn({}, e), { wishlistWithUndo: r, wishlist: r });
                }
                case S.d.ADD_UNDO: {
                  const { offerId: r } = t.payload;
                  return r
                    ? Dn(Mn({}, e), {
                        undoItems: (0, on.A)([...e.undoItems, r]),
                      })
                    : e;
                }
                case S.d.REMOVE_UNDO: {
                  const { offerId: r } = t.payload;
                  if (!r) return e;
                  const n = (0, Ln.A)((e) => e !== r, e.undoItems);
                  return Dn(Mn({}, e), { undoItems: n });
                }
                case S.d.ADD_FILTERS: {
                  const { filterIds: r = [] } = t.payload;
                  return Dn(Mn({}, e), {
                    selectedFilterIds: (0, on.A)([
                      ...e.selectedFilterIds,
                      ...r,
                    ]),
                  });
                }
                case S.d.REMOVE_FILTERS: {
                  const { filterIds: r = [] } = t.payload;
                  return Dn(Mn({}, e), {
                    selectedFilterIds: (0, Tn.A)(r, e.selectedFilterIds),
                  });
                }
                case S.d.RESET_FILTERS:
                  return Dn(Mn({}, e), { selectedFilterIds: [] });
                default:
                  return e;
              }
            }, o),
            c = { wishlistUndoState: i, dispatch: s };
          return a().createElement(Hn.h.Provider, { value: c }, e);
        },
        Bn = { placeholder: (0, T.AH)({ marginTop: 30 }) },
        Un = ({ animation: e }) =>
          a().createElement(
            R,
            {
              renderHeader: () => a().createElement(Fr, { animation: e }),
              renderCommsBanner: () => a().createElement(Sr, { animation: e }),
            },
            a().createElement(
              "div",
              { className: Bn.placeholder },
              a().createElement(xt, { count: fe.aX, animation: e }),
            ),
          );
      var zn = r(35997),
        Vn = r(88029);
      const qn = () =>
        (0, Vn.A)()
          ? a().createElement(
              xn.A,
              null,
              a().createElement(
                Wn,
                null,
                a().createElement(
                  l.tY,
                  { fallback: a().createElement(Un, null) },
                  a().createElement(zn.A, { render: On }),
                ),
              ),
            )
          : a().createElement(i.A, { to: (0, o.getPath)() });
    },
  },
]);
//# sourceMappingURL=WishlistView.egstore-site.8bbed835d025f1e5ab3e.js.map
