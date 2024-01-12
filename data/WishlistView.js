(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [937],
  {
    58504: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Gr });
      var n = r(45418),
        l = r.n(n),
        o = r(85449),
        i = r(32396),
        a = r(16618),
        s = r(77909),
        c = r(50203),
        d = r(13986),
        m = r(24668),
        p = r(87869),
        u = r(79546),
        f = r(10035),
        g = r(69926),
        h = r(13623),
        v = r(98889),
        E = r(80509);
      const y = ({
        filterGroup: e,
        filtersInitiallyCollapsed: t,
        onFilterSelect: r,
        options: n = [],
        selectedFilters: o,
        title: i,
      }) =>
        0 === n.length
          ? null
          : l().createElement(
              E.Oy,
              {
                collapsible: !0,
                initialCollapseState: t,
                renderTitle: ({ isCollapsed: e, toggleCollapsed: t }) =>
                  l().createElement(E.c4, {
                    isCollapsed: e,
                    text: i,
                    toggleCollapsed: t,
                  }),
              },
              n.map(({ id: t, name: n }) => {
                const i = o.includes(t);
                return l().createElement(E.kD, {
                  checked: i,
                  key: t,
                  onClick: () => r({ checked: i, group: e, id: t }),
                  text: n,
                });
              }),
            );
      var b = r(37808),
        w = r(25635);
      const C = ({
        filters: e = {},
        onClear: t,
        onDone: r,
        onOverlayClick: n,
      }) => {
        const {
            dispatch: o,
            wishlistUndoState: { selectedFilterIds: i },
          } = (0, b.Q)(),
          a = (0, f.useLocalization)(),
          { feature: s, genre: c, event: m, platform: p } = e,
          u = c || [],
          E = s || [],
          C = m || [],
          O = p || [],
          S = !0,
          I = (null == i ? void 0 : i.length) || 0,
          L = ({ checked: e, id: t }) => {
            o(
              e
                ? { type: w.S.REMOVE_FILTERS, payload: { filterIds: [t] } }
                : { type: w.S.ADD_FILTERS, payload: { filterIds: [t] } },
            );
          },
          x = () => o({ type: w.S.RESET_FILTERS }),
          T = (0, d.SO)(g.H, { numSelectedFilters: I, resetFilters: x }),
          Z = (0, d.R)(
            y,
            {
              filterGroup: h.e_.Event,
              filtersInitiallyCollapsed: S,
              onFilterSelect: L,
              options: C,
              selectedFilters: i,
              title: a("diesel.store.browse.events") || "",
            },
            C.length > 0,
          ),
          P = (0, d.R)(
            y,
            {
              filterGroup: h.e_.Genre,
              filtersInitiallyCollapsed: S,
              onFilterSelect: L,
              options: u,
              selectedFilters: i,
              title: a("diesel.store.browse.genre") || "",
            },
            u.length > 0,
          ),
          k = (0, d.R)(
            y,
            {
              filterGroup: h.e_.Feature,
              filtersInitiallyCollapsed: S,
              onFilterSelect: L,
              options: E,
              selectedFilters: i,
              title: a("diesel.store.browse.features") || "",
            },
            E.length > 0,
          ),
          _ = (0, d.R)(
            y,
            {
              filterGroup: h.e_.Platform,
              filtersInitiallyCollapsed: S,
              onFilterSelect: L,
              options: O,
              selectedFilters: i,
              title: a("diesel.products.about.meta.platform") || "",
            },
            O.length > 0,
          );
        return l().createElement(
          v.W,
          {
            onClear: () => {
              x(), t && t();
            },
            onDone: r,
            onOverlayClick: n,
          },
          T && T(),
          Z && Z(),
          P && P(),
          k && k(),
          _ && _(),
        );
      };
      var O = r(24408);
      const S = ({ count: e = 0, onClick: t }) => {
        const r = (0, f.useLocalization)();
        return l().createElement(
          O.Z,
          { onClick: t },
          r("diesel.store.browse.filter", e > 0 ? [`(${e})`] : [""]),
        );
      };
      var I = r(28901),
        L = r(89697),
        x = r(86376),
        T = r(14058);
      const Z = {
          contentWrapper: (0, I.iv)({
            height: "100%",
            "& > div": {
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }),
          content: (0, I.iv)({ marginTop: 12 }),
        },
        P = ({ children: e }) =>
          l().createElement(T.Z, { className: Z.contentWrapper }, e),
        k = ({ children: e, renderSidebar: t }) =>
          l().createElement(
            T.Z,
            { className: Z.contentWrapper },
            l().createElement(
              L.H,
              { renderRightSidebar: t },
              l().createElement("div", { className: Z.content }, e),
            ),
          ),
        _ = ({
          children: e,
          renderSidebar: t,
          renderHeader: r,
          renderCommsBanner: n,
        }) =>
          l().createElement(
            x.Z,
            null,
            r && r(),
            n && n(),
            t
              ? l().createElement(k, { renderSidebar: t }, e)
              : l().createElement(P, null, e),
          );
      var j = r(86674),
        D = r(29498),
        A = r(47411),
        R = r(34272),
        F = r(7301),
        N = Object.defineProperty,
        M = Object.defineProperties,
        W = Object.getOwnPropertyDescriptors,
        U = Object.getOwnPropertySymbols,
        B = Object.prototype.hasOwnProperty,
        H = Object.prototype.propertyIsEnumerable,
        V = (e, t, r) =>
          t in e
            ? N(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        z = (e, t) => {
          for (var r in t || (t = {})) B.call(t, r) && V(e, r, t[r]);
          if (U) for (var r of U(t)) H.call(t, r) && V(e, r, t[r]);
          return e;
        },
        G = (e, t) => M(e, W(t));
      const X = {
          listItem: (0, I.iv)({
            height: "70px",
            width: "100%",
            marginBottom: "5px",
            position: "relative",
            "&.gridLayout": { width: "100%", height: "auto", marginBottom: 0 },
          }),
          content: ({ isInstalled: e, cssTheme: t }) =>
            (0, I.iv)(
              G(
                z(
                  G(z({}, D.pB.smooth("background-color", "125ms")), {
                    backgroundColor: e ? t.level2 : t.level1,
                    color: t.textPrimary,
                    width: "100%",
                    height: "100%",
                  }),
                  (0, R.rv)(8),
                ),
                {
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  borderRadius: D.E0,
                  ".gridLayout &": G(
                    z({ backgroundColor: "transparent" }, (0, R.rv)(0)),
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
            (0, I.iv)(
              {
                flex: 1,
                backgroundColor: "transparent",
                color: "inherit",
                fontWeight: 400,
                padding: 0,
                borderRadius: 0,
                [D.Uc.lgOnly]: { height: "auto" },
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
                    [D.Uc.lgOnly]: { height: "50px !important" },
                  },
            ),
          buttonInner: (0, I.iv)(
            G(z({}, A.a), {
              display: "flex",
              textTransform: "none",
              ".gridLayout &": { display: "block", position: "relative" },
            }),
          ),
        },
        K = ({
          children: e,
          className: t,
          onClick: r,
          isGridLayout: l,
          isInstalled: o = !1,
          isMenuOpen: i,
          renderMenu: a,
          renderEndcap: s,
        }) => {
          const c = (0, I.cx)(
              X.listItem,
              { gridLayout: l, active: i, hasHover: !!r },
              t,
            ),
            d = (0, F.Z)();
          return n.createElement(
            "div",
            { className: c, role: "listitem" },
            n.createElement(
              "div",
              {
                className: X.content({ isInstalled: o, cssTheme: d }),
                "data-testid": "listitem-content",
              },
              n.createElement(
                j.Z,
                {
                  className: X.wrapperActionButton(l),
                  disabled: i,
                  hasMinWidth: !1,
                  hasHover: !1,
                  onClick: r,
                  "data-testid": "primary-button",
                },
                n.createElement("div", { className: X.buttonInner }, e),
              ),
              s && s(),
            ),
            a && a(),
          );
        };
      var $ = r(72668),
        Q = r(84244),
        q = r(52350),
        J = r(87690),
        Y = r(67873),
        ee = r(68292),
        te = r(239),
        re = r(51078),
        ne = r(50821),
        le = r(302),
        oe = r(78660),
        ie = r(90585);
      r(72124),
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const ae = (e) => {
          if (!e) return !1;
          const { effectiveDate: t } = e;
          return !!t && new Date(t).getTime() > Date.now();
        },
        se = (e) => {
          if (!e) return !1;
          const { expiryDate: t } = e;
          return !!t && new Date(t).getTime() < Date.now();
        },
        ce = (e) => !!e && e.status === te.PV.ACTIVE && !e.isCodeRedemptionOnly,
        de = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.offer) ? void 0 : t.title;
        },
        me = (e) => {
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
        pe = (0, ne.Z)((e) =>
          e && e.created ? new Date(e.created).getTime() : null,
        ),
        ue = (0, le.Z)(me),
        fe = (0, ne.Z)(me),
        ge = (0, ne.Z)((e) => {
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
        he = (e, t) => (ae(e.offer) ? 1 : 0) - (ae(t.offer) ? 1 : 0),
        ve = (e, t) => {
          const r = ce(e.offer) && !se(e.offer) ? 1 : 0;
          return (ce(t.offer) && !se(t.offer) ? 1 : 0) - r;
        },
        Ee = (0, oe.Z)((e, t) => {
          const r = de(e),
            n = de(t);
          return r.localeCompare(n);
        }),
        ye = (0, oe.Z)(pe),
        be = (0, ie.Z)([ve, he, ue, pe]),
        we = (0, ie.Z)([ve, he, fe, pe]),
        Ce = (0, ie.Z)([ve, he, ge, pe]);
      var Oe = r(62444),
        Se = r(24779),
        Ie = Object.defineProperty,
        Le = Object.defineProperties,
        xe = Object.getOwnPropertyDescriptors,
        Te = Object.getOwnPropertySymbols,
        Ze = Object.prototype.hasOwnProperty,
        Pe = Object.prototype.propertyIsEnumerable,
        ke = (e, t, r) =>
          t in e
            ? Ie(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        _e = (e, t) => {
          for (var r in t || (t = {})) Ze.call(t, r) && ke(e, r, t[r]);
          if (Te) for (var r of Te(t)) Pe.call(t, r) && ke(e, r, t[r]);
          return e;
        },
        je = (e, t) => Le(e, xe(t));
      const De = (0, I.iv)(
          je(_e({}, Oe.cp.text6), {
            display: "flex",
            height: "100%",
            alignItems: "center",
            width: "100%",
            position: "relative",
            [D.Uc.underMd]: { overflow: "hidden" },
          }),
        ),
        Ae = (0, I.iv)({
          textTransform: "none",
          marginLeft: 21,
          textAlign: "left",
          whiteSpace: "normal",
          "[dir=rtl] &": { textAlign: "right" },
          [D.Uc.underMd]: { marginBottom: 6 },
        }),
        Re = (0, I.iv)({
          display: "flex",
          "& > div": { backgroundColor: "transparent" },
          [D.Uc.underMd]: { minHeight: 70 },
        }),
        Fe = (0, I.iv)({
          whiteSpace: "normal",
          alignItems: "baseline",
          textAlign: "left",
        }),
        Ne = {
          itemContainer: De,
          removeButton: (e) =>
            (0, I.iv)({
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
                "&:after": je(_e(_e({}, Se.d), A.a), {
                  backgroundColor: e.accentOverlay,
                }),
              },
              [D.Uc.lgOnly]: { height: "100%" },
            }),
          title: Ae,
          undoButton: (0, I.iv)({
            whiteSpace: "normal",
            wordBreak: "break-all",
            padding: "0 2px",
          }),
          undoItem: Re,
          undoTitle: Fe,
          wishlistItem: ({ inactive: e, isUndo: t, cssTheme: r }) =>
            (0, I.iv)(
              {
                button: { cursor: e ? "default" : void 0 },
                [D.Uc.underMd]: {
                  height: "auto",
                  "& > div": { height: "auto" },
                  "& > div > button:first-child": {
                    padding: "10px 0",
                    height: "auto !important",
                    "& > span > div": { position: "relative" },
                  },
                  "& > div > div": { height: "auto" },
                },
                [D.Uc.xs]: { "& > div": { paddingLeft: "0 !important" } },
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
        };
      var Me = r(71630);
      const We = ({ onClick: e, title: t }) => {
          const r = (0, Me.y)();
          return l().createElement(
            j.Z,
            {
              className: (0, I.cx)(Ne.removeButton(r), Ne.undoButton),
              hasMinWidth: !1,
              hasHover: !1,
              onClick: e,
              title: t,
            },
            l().createElement(Q.v0, { code: "egstore.wishlist.undo" }),
          );
        },
        Ue = ({ onClick: e, title: t }) => {
          const r = (0, Me.y)();
          return l().createElement(
            j.Z,
            {
              className: (0, I.cx)(Ne.removeButton(r), Ne.undoButton),
              hasMinWidth: !1,
              hasHover: !1,
              onClick: e,
              title: t,
            },
            l().createElement($.Z, { icon: p.kf.CLOSE, size: p.J7.XXXSMALL }),
          );
        },
        Be = ({
          addFromWishlistView: e,
          namespace: t,
          offer: r,
          offerId: o,
        }) => {
          const i = (0, q.K)(),
            [a, s] = (0, n.useState)(!1),
            c = (0, Me.y)(),
            d = (0, f.useLocalization)(),
            m = l().useCallback(() => {
              e({ namespace: t, offerId: o }),
                i({
                  eventAction: ee.hO.ADD_FROM_WISHLIST_VIEW,
                  eventCategory: re.u9,
                  eventLabel: re.rq,
                  eventValue: (0, J.Z)({ offer: { namespace: t, offerId: o } }),
                  interactionType: Y.md.Interaction,
                });
            }, [t, o]),
            p = () => {
              s(!0);
            },
            u = r.status === te.PV.ACTIVE && !r.isCodeRedemptionOnly && !se(r);
          return a
            ? null
            : l().createElement(
                l().Fragment,
                null,
                l().createElement(
                  K,
                  {
                    className: (0, I.cx)(
                      Ne.wishlistItem({
                        inactive: !u,
                        isUndo: !0,
                        cssTheme: c,
                      }),
                      Ne.undoItem,
                    ),
                    isGridLayout: !1,
                    isMenuOpen: !1,
                    renderEndcap: u
                      ? () =>
                          l().createElement(We, {
                            onClick: m,
                            title:
                              d("egstore.wishlist.undo.removed", [r.title]) ||
                              "",
                          })
                      : () =>
                          l().createElement(Ue, {
                            onClick: p,
                            title: d("diesel.main.navigation.close") || "",
                          }),
                  },
                  l().createElement(
                    "div",
                    { className: Ne.itemContainer },
                    l().createElement(
                      "div",
                      { className: (0, I.cx)(Ne.title, Ne.undoTitle) },
                      d("egstore.wishlist.undo.removed", [r.title]),
                    ),
                  ),
                ),
              );
        };
      var He = r(59918),
        Ve = r(74737),
        ze = r(89040),
        Ge = r(7572),
        Xe = Object.defineProperty,
        Ke = Object.defineProperties,
        $e = Object.getOwnPropertyDescriptors,
        Qe = Object.getOwnPropertySymbols,
        qe = Object.prototype.hasOwnProperty,
        Je = Object.prototype.propertyIsEnumerable,
        Ye = (e, t, r) =>
          t in e
            ? Xe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const et = { wrapper: (0, I.iv)({ width: "100%" }) },
        tt = (e) => {
          var t, r, o, i;
          const { dispatch: a } = (0, b.Q)(),
            { namespace: s, offer: c, isUndo: d } = e,
            m = null == c ? void 0 : c.id,
            p =
              null != (r = null == (t = c.catalogNs) ? void 0 : t.store)
                ? r
                : "",
            u =
              null != (i = null == (o = c.catalogNs) ? void 0 : o.parent)
                ? i
                : "",
            [f, g] = (0, n.useState)(!1),
            [h, v] = (0, He.x)({ offerId: m, sandboxId: s }),
            E = (0, n.useCallback)(() => {
              v.isLoading ||
                h().then((e) => {
                  var t;
                  e &&
                    (null == (t = e.data) ? void 0 : t.success) &&
                    a({ type: w.S.REMOVE_UNDO, payload: { offerId: m } });
                });
            }, [s, m, v.isLoading]);
          return d
            ? l().createElement(
                Be,
                ((y = ((e, t) => {
                  for (var r in t || (t = {})) qe.call(t, r) && Ye(e, r, t[r]);
                  if (Qe) for (var r of Qe(t)) Je.call(t, r) && Ye(e, r, t[r]);
                  return e;
                })({}, e)),
                Ke(y, $e({ addFromWishlistView: E }))),
              )
            : l().createElement(
                Ve.ZP,
                {
                  disabled: f,
                  rootMargin: "10%",
                  onChange: ({ isIntersecting: e }) => {
                    g(e);
                  },
                },
                l().createElement(
                  "div",
                  { className: et.wrapper },
                  f
                    ? l().createElement(Ge.m1, {
                        offerId: m,
                        sandboxId: s,
                        store: p,
                        productId: u,
                      })
                    : l().createElement(ze.A, null),
                ),
              );
          var y;
        };
      var rt = r(6232),
        nt = Object.defineProperty,
        lt = Object.defineProperties,
        ot = Object.getOwnPropertyDescriptors,
        it = Object.getOwnPropertySymbols,
        at = Object.prototype.hasOwnProperty,
        st = Object.prototype.propertyIsEnumerable,
        ct = (e, t, r) =>
          t in e
            ? nt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const dt = {
          wishlistItem: (0, I.iv)({
            listStyle: "none outside none",
            padding: 0,
            margin: 0,
            display: "flex",
            width: "100%",
            marginBottom: 15,
          }),
          wishlist: (0, I.iv)({ padding: 0, width: "100%" }),
        },
        mt = (e) => {
          return n.createElement(
            rt.a,
            ((t = ((e, t) => {
              for (var r in t || (t = {})) at.call(t, r) && ct(e, r, t[r]);
              if (it) for (var r of it(t)) st.call(t, r) && ct(e, r, t[r]);
              return e;
            })({}, e)),
            lt(
              t,
              ot({ className: dt.wishlist, itemClassName: dt.wishlistItem }),
            )),
          );
          var t;
        },
        pt = ({ count: e, animation: t }) => {
          const r = [...Array(e).keys()];
          return l().createElement(mt, { data: r }, () =>
            l().createElement(ze.A, { animation: t }),
          );
        };
      var ut = Object.defineProperty,
        ft = Object.getOwnPropertySymbols,
        gt = Object.prototype.hasOwnProperty,
        ht = Object.prototype.propertyIsEnumerable,
        vt = (e, t, r) =>
          t in e
            ? ut(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const Et = ({ items: e = [], isLoading: t }) => {
        const r = 0 === e.length;
        return l().createElement(
          l().Fragment,
          null,
          t && r
            ? l().createElement(pt, { count: re.zL })
            : l().createElement(mt, { data: e }, (e) =>
                l().createElement(
                  tt,
                  ((e, t) => {
                    for (var r in t || (t = {}))
                      gt.call(t, r) && vt(e, r, t[r]);
                    if (ft)
                      for (var r of ft(t)) ht.call(t, r) && vt(e, r, t[r]);
                    return e;
                  })({}, e),
                ),
              ),
        );
      };
      var yt = r(50694),
        bt = r(13405),
        wt = r(53288);
      const Ct = {
          container: (0, I.iv)({
            marginTop: 8,
            marginBottom: 30,
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            [bt.Uc.md]: { alignItems: "center", flexDirection: "row" },
          }),
          title: (0, I.iv)({
            [bt.Uc.underMd]: {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            },
          }),
        },
        Ot = ({ animation: e }) =>
          l().createElement(
            "div",
            { className: Ct.container },
            l().createElement(
              "div",
              { className: Ct.title },
              l().createElement(wt.Od, {
                height: 50,
                width: 120,
                animation: e,
              }),
            ),
          ),
        St = ({ renderWallet: e }) => {
          const t = (0, f.useLocalization)();
          return l().createElement(
            "div",
            { className: Ct.container },
            l().createElement(
              "div",
              { className: Ct.title },
              l().createElement(
                yt.Z.Heading,
                { headingLevel: 1 },
                t("diesel.main.navigation.wishlist"),
              ),
            ),
            e && e(),
          );
        };
      var It = r(87250),
        Lt = r(75187),
        xt = r(42958),
        Tt = r(7531),
        Zt = r(55156);
      const Pt = (e = [], t = []) => {
        const r = e.reduce(
          (e, r) =>
            ((e, t) => !!(0, Lt.Z)((0, xt.Z)("id", e), t))(r, t)
              ? [...e, !0]
              : [...e, !1],
          [],
        );
        return (0, Tt.Z)((0, Zt.Z)(!0), r);
      };
      var kt = r(22202),
        _t = r(3858),
        jt = r(1049),
        Dt = r(21810),
        At = r(6977),
        Rt = Object.defineProperty,
        Ft = Object.defineProperties,
        Nt = Object.getOwnPropertyDescriptors,
        Mt = Object.getOwnPropertySymbols,
        Wt = Object.prototype.hasOwnProperty,
        Ut = Object.prototype.propertyIsEnumerable,
        Bt = (e, t, r) =>
          t in e
            ? Rt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ht = (e, t) => {
          for (var r in t || (t = {})) Wt.call(t, r) && Bt(e, r, t[r]);
          if (Mt) for (var r of Mt(t)) Ut.call(t, r) && Bt(e, r, t[r]);
          return e;
        },
        Vt = (e, t) => Ft(e, Nt(t));
      const zt = (0, ie.Z)([
          (0, ne.Z)((0, jt.Z)("count")),
          (0, le.Z)((0, jt.Z)("name")),
        ]),
        Gt = (0, At.Z)(
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
              return Vt(Ht({}, e), { [t.groupName]: [...r, t] });
            }, {}),
          (e = {}) => {
            const t = ((e = {}) => (0, kt.Z)((0, _t.Z)((0, jt.Z)("id")), e))(e);
            return (0, kt.Z)((e, r) => {
              const n = t[r];
              return (0, Dt.Z)(e).map((e) => Vt(Ht({}, e), { count: n[e.id] }));
            }, e);
          },
          (e = {}) => (0, kt.Z)(zt, e),
        );
      var Xt = r(74758),
        Kt = r(37922),
        $t = r(37817),
        Qt = r(65128),
        qt = r(50560);
      const Jt = (e) => ({
          wrapper: (0, I.iv)({
            marginTop: 30,
            '[data-component="Icon"]': { path: { fill: D.JD } },
          }),
          link: (0, I.iv)({
            borderBottom: `1px solid ${e.accentOverlay}`,
            color: e.textSecondary,
            "&:hover": {
              borderBottom: `1px solid ${e.textPrimary}`,
              color: e.textPrimary,
            },
          }),
        }),
        Yt = () => {
          const e = (0, Kt.useSelector)(qt.e),
            t = (0, f.useLocalization)(),
            r = (0, Me.y)(),
            o = (0, n.useMemo)(() => Jt(r), [r]),
            i = t("egstore.wishlist.empty_results.message"),
            a = () =>
              l().createElement(
                $t.Z,
                { to: "/", className: o.link },
                t("egstore.wishlist.empty_results.shop_discover"),
              );
          return l().createElement(
            "div",
            { className: o.wrapper },
            l().createElement(Qt.D, {
              contentIcon: e ? p.kf.STRESSED_FACE_EDS : p.kf.STRESSED_FACE,
              title: l().createElement("span", null, i),
              body: l().createElement(a, null),
            }),
          );
        },
        er = ({ onReset: e }) => {
          const t = (0, Kt.useSelector)(qt.e),
            r = (0, f.useLocalization)(),
            o = (0, Me.y)(),
            i = (0, n.useMemo)(() => Jt(o), [o]);
          return l().createElement(
            "div",
            { className: i.wrapper },
            l().createElement(Qt.D, {
              contentIcon: t ? p.kf.STRESSED_FACE_EDS : p.kf.STRESSED_FACE,
              title: r("diesel.common.search.noResults.title"),
              body: l().createElement(
                $t.Z,
                {
                  onClick: (t) => {
                    t.preventDefault(), e && e();
                  },
                  className: i.link,
                },
                r("egstore.filters.remove_filters"),
              ),
            }),
          );
        };
      var tr = r(29992),
        rr = r(15522),
        nr = r(55219),
        lr = r(46741),
        or = r(71065),
        ir = r(29177);
      const ar = ({ message: e }) => {
          const t = (0, Me.y)(),
            r = (0, n.useMemo)(
              () =>
                (({ cssTheme: e }) => ({
                  wrapper: (0, I.iv)({ [bt.Uc.underSm]: { display: "none" } }),
                  icon: (0, I.iv)({
                    color: e.textPrimary,
                    height: 16,
                    width: 16,
                    "&:hover": { cursor: "help" },
                  }),
                  message: (0, I.iv)({ maxWidth: 300, textAlign: "left" }),
                }))({ cssTheme: t }),
              [t],
            ),
            o = l().createRef();
          return l().createElement(
            "div",
            { className: r.wrapper },
            l().createElement(
              "div",
              { ref: o },
              l().createElement($.Z, {
                icon: ir.A,
                size: lr.Z.CUSTOM,
                className: r.icon,
              }),
            ),
            l().createElement(
              or.u,
              { hideOnClick: !1, anchorRef: o, className: r.message },
              l().createElement(Q.v0, { code: e }),
            ),
          );
        },
        sr = {
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
      var cr = r(14267),
        dr = r(89484),
        mr = r(40467);
      const pr = () => {
        var e;
        const t = (0, Me.y)();
        return l().createElement(
          o.n4,
          { fallback: l().createElement(nr.a, null) },
          l().createElement(
            mr.Z,
            {
              themeOverrides: {
                accent:
                  null == (e = (0, tr.re)(dr.g[t.mode].success))
                    ? void 0
                    : e.rgb(),
              },
            },
            l().createElement(rr.M4, {
              channelType: "email",
              settingKeys: [cr.p.EMAIL, cr.p.WISHLIST_EMAIL],
              selectedSettingKey: cr.p.WISHLIST_EMAIL,
              toggleTextId: "wishlist-toggle-label",
              enabledMessage: "egstore.wishlist.notification_toggle_enabled",
              disabledMessage: "egstore.wishlist.notification_toggle",
              ariaLabelCode: "egstore.wishlist.notification_toggle.switch",
              icon: sr,
              iconSize: lr.Z.SMALL,
              secondary: () =>
                l().createElement(ar, {
                  message: "egstore.wishlist.notification_toggle_tooltip",
                }),
            }),
          ),
        );
      };
      var ur = r(78512),
        fr = r(93026),
        gr = Object.defineProperty,
        hr = Object.defineProperties,
        vr = Object.getOwnPropertyDescriptors,
        Er = Object.getOwnPropertySymbols,
        yr = Object.prototype.hasOwnProperty,
        br = Object.prototype.propertyIsEnumerable,
        wr = (e, t, r) =>
          t in e
            ? gr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Cr = (e, t) => {
          for (var r in t || (t = {})) yr.call(t, r) && wr(e, r, t[r]);
          if (Er) for (var r of Er(t)) br.call(t, r) && wr(e, r, t[r]);
          return e;
        };
      const Or = ({
          onSort: e = () => {},
          sortingOptions: t,
          sortValue: r = "",
        }) => {
          const o = (0, F.Z)(),
            i = (0, n.useMemo)(
              () =>
                ((e) => {
                  return {
                    main: (0, I.iv)({
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }),
                    sortWrapper: (0, I.iv)({
                      display: "flex",
                      flexDirection: "row",
                      flexGrow: 1,
                    }),
                    totalWrapper: (0, I.iv)(
                      ((t = Cr({}, Oe.cp.text8)),
                      (r = {
                        textAlign: "right",
                        [fr.Uc.xs]: { display: "none" },
                      }),
                      hr(t, vr(r))),
                    ),
                    layoutWrapper: (0, I.iv)({ textAlign: "right" }),
                    layoutButton: (0, I.iv)((0, R.WL)(1), {
                      transition: "background-color 125ms ease-in-out",
                      height: "100%",
                      color: e.textPrimary,
                      backgroundColor: "transparent",
                      padding: 0,
                    }),
                    border: (0, I.iv)({
                      border: `1px solid ${e.backgroundOverlay}`,
                    }),
                    transparentBorder: (0, I.iv)({
                      border: "1px solid transparent",
                    }),
                  };
                  var t, r;
                })(o),
              [o],
            );
          return l().createElement(
            "div",
            { className: i.main },
            l().createElement(
              "div",
              { className: i.sortWrapper },
              t &&
                l().createElement(
                  l().Fragment,
                  null,
                  l().createElement(ur.Z, {
                    id: "sort-dropdown",
                    label: l().createElement(Q.v0, {
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
        Sr = {
          root: (0, I.iv)({
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }),
        },
        Ir = ({
          sortType: e,
          setSortType: t,
          wishlistSortingOptions: r,
          renderFilterToggle: n,
        }) =>
          l().createElement(
            "div",
            { className: Sr.root },
            l().createElement(Or, {
              onSort: (e) => t(e),
              sortingOptions: r,
              sortValue: e,
            }),
            n && n(),
          ),
        Lr = {
          [te.AX.ALPHABETICAL]: Ee,
          [te.AX.RECENTLY_ADDED]: ye,
          [te.AX.LOWEST_PRICE]: be,
          [te.AX.HIGHEST_PRICE]: we,
          [te.AX.ON_SALE]: Ce,
        },
        xr = ({ breakpoint: e }) => {
          const t = (0, c.s)(),
            r = (0, f.useLocalization)(),
            [o, i] = (0, n.useState)(te.AX.ON_SALE),
            [a, g] = (0, n.useState)([]),
            [h, v] = (0, n.useState)(!1),
            {
              wishlistItems: E,
              isError: y,
              isFetching: O,
              isSuccess: I,
            } = (0, It.Z)(),
            {
              dispatch: L,
              wishlistUndoState: { wishlistWithUndo: x, selectedFilterIds: T },
            } = (0, b.Q)(),
            Z = (0, u.DX)(e),
            P = (0, re.UT)(r),
            k = Gt(x) || {},
            j = Object.keys(k).length,
            D = () => v(!h),
            A = (0, n.useCallback)((e = []) => Lr[o](e), [o]);
          (0, n.useEffect)(() => {
            L({ type: w.S.SET_WISHLIST, payload: { wishlist: E } });
          }, [E]),
            (0, n.useEffect)(() => {
              const e = ((e = [], t = []) =>
                t.reduce((t, r) => {
                  var n;
                  const l =
                    (null == (n = null == r ? void 0 : r.offer)
                      ? void 0
                      : n.tags) || [];
                  return Pt(e, l) ? [...t, r] : t;
                }, []))(T, x);
              (0, Zt.Z)(e, a) || g(() => e);
            }, [T, x]),
            (0, n.useEffect)(() => {
              L({ type: w.S.RESET_WISHLIST, payload: { wishlist: E } });
            }, [o]);
          const R = (0, d.SO)(C, { filters: k }),
            F = (0, d.SO)(C, {
              filters: k,
              onClear: D,
              onDone: D,
              onOverlayClick: D,
            }),
            N = (0, d.R)(S, { count: T.length, onClick: D }, Z),
            M = (0, d.SO)(St, {
              renderWallet: () =>
                l().createElement(
                  l().Fragment,
                  null,
                  l().createElement(s.pp, null),
                ),
            });
          return y
            ? l().createElement(m.Z, { type: p.aB.SERVER_ERROR })
            : l().createElement(
                l().Fragment,
                null,
                l().createElement(Xt.q, {
                  title: r("diesel.main.navigation.wishlist"),
                }),
                l().createElement(
                  _,
                  {
                    renderHeader: M,
                    renderCommsBanner: () =>
                      t ? null : l().createElement(pr, null),
                    renderSidebar: !Z && j ? R : void 0,
                  },
                  Z && h && F && F(),
                  l().createElement(Ir, {
                    sortType: o,
                    setSortType: i,
                    wishlistSortingOptions: P,
                    renderFilterToggle: j ? N : void 0,
                  }),
                  0 === a.length &&
                    T.length > 0 &&
                    l().createElement(er, {
                      onReset: () => L({ type: w.S.RESET_FILTERS }),
                    }),
                  0 === ((null == E ? void 0 : E.length) || 0) &&
                    0 === x.length &&
                    I
                    ? l().createElement(Yt, null)
                    : l().createElement(Et, { isLoading: O, items: A(a) }),
                ),
              );
        };
      var Tr = r(79705),
        Zr = r(32042),
        Pr = r(61340),
        kr = r(45305),
        _r = Object.defineProperty,
        jr = Object.defineProperties,
        Dr = Object.getOwnPropertyDescriptors,
        Ar = Object.getOwnPropertySymbols,
        Rr = Object.prototype.hasOwnProperty,
        Fr = Object.prototype.propertyIsEnumerable,
        Nr = (e, t, r) =>
          t in e
            ? _r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Mr = (e, t) => {
          for (var r in t || (t = {})) Rr.call(t, r) && Nr(e, r, t[r]);
          if (Ar) for (var r of Ar(t)) Fr.call(t, r) && Nr(e, r, t[r]);
          return e;
        },
        Wr = (e, t) => jr(e, Dr(t));
      const Ur = ({
          children: e,
          initialUndoItems: t = [],
          initialWishlist: r = [],
          initialSelectedFilterIds: o = [],
        }) => {
          const i = {
              undoItems: t,
              wishlist: r,
              wishlistWithUndo: r,
              selectedFilterIds: o,
            },
            [a, s] = (0, n.useReducer)((e, t) => {
              switch (t.type) {
                case w.S.SET_WISHLIST: {
                  const { wishlist: r } = t.payload;
                  if ((0, Zt.Z)(e.wishlist, r)) return e;
                  if (
                    (null == r ? void 0 : r.length) &&
                    0 === e.wishlistWithUndo.length
                  )
                    return Wr(Mr({}, e), { wishlistWithUndo: r, wishlist: r });
                  const { undoItems: n } = e,
                    l = ((e, t) => {
                      const r = e.map(({ offerId: e }) => e).sort(),
                        n = t.map(({ offerId: e }) => e).sort();
                      return (0, Zt.Z)(r, n);
                    })(e.wishlistWithUndo, r),
                    o =
                      0 !== n.length || l
                        ? ((e = [], t = []) =>
                            0 === e.length
                              ? e
                              : e.reduce(
                                  (e, r) =>
                                    (0, Lt.Z)((e) => e === r.offerId)(t)
                                      ? [...e, Wr(Mr({}, r), { isUndo: !0 })]
                                      : [...e, Wr(Mr({}, r), { isUndo: !1 })],
                                  [],
                                ))(e.wishlistWithUndo, n)
                        : r;
                  return Wr(Mr({}, e), { wishlistWithUndo: o, wishlist: r });
                }
                case w.S.RESET_WISHLIST: {
                  const { wishlist: r } = t.payload;
                  return Wr(Mr({}, e), { wishlistWithUndo: r, wishlist: r });
                }
                case w.S.ADD_UNDO: {
                  const { offerId: r } = t.payload;
                  return r
                    ? Wr(Mr({}, e), {
                        undoItems: (0, Dt.Z)([...e.undoItems, r]),
                      })
                    : e;
                }
                case w.S.REMOVE_UNDO: {
                  const { offerId: r } = t.payload;
                  if (!r) return e;
                  const n = (0, Zr.Z)((e) => e !== r, e.undoItems);
                  return Wr(Mr({}, e), { undoItems: n });
                }
                case w.S.ADD_FILTERS: {
                  const { filterIds: r = [] } = t.payload;
                  return Wr(Mr({}, e), {
                    selectedFilterIds: (0, Dt.Z)([
                      ...e.selectedFilterIds,
                      ...r,
                    ]),
                  });
                }
                case w.S.REMOVE_FILTERS: {
                  const { filterIds: r = [] } = t.payload;
                  return Wr(Mr({}, e), {
                    selectedFilterIds: (0, Pr.Z)(r, e.selectedFilterIds),
                  });
                }
                case w.S.RESET_FILTERS:
                  return Wr(Mr({}, e), { selectedFilterIds: [] });
                default:
                  return e;
              }
            }, i),
            c = { wishlistUndoState: a, dispatch: s };
          return l().createElement(kr.D.Provider, { value: c }, e);
        },
        Br = { placeholder: (0, I.iv)({ marginTop: 30 }) },
        Hr = ({ animation: e }) =>
          l().createElement(
            _,
            {
              renderHeader: () => l().createElement(Ot, { animation: e }),
              renderCommsBanner: () =>
                l().createElement(nr.a, { animation: e }),
            },
            l().createElement(
              "div",
              { className: Br.placeholder },
              l().createElement(pt, { count: re.zL, animation: e }),
            ),
          );
      var Vr = r(81508),
        zr = r(12766);
      const Gr = () =>
        (0, zr.Z)()
          ? l().createElement(
              Tr.Z,
              null,
              l().createElement(
                Ur,
                null,
                l().createElement(
                  o.n4,
                  { fallback: l().createElement(Hr, null) },
                  l().createElement(Vr.Z, { render: xr }),
                ),
              ),
            )
          : l().createElement(a.Z, { to: (0, i.getPath)() });
    },
  },
]);
//# sourceMappingURL=WishlistView.egstore-site.77efd8c3318ed6594db4.js.map
