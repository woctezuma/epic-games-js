(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [937],
  {
    94445: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { default: () => zr }));
      var n = r(45418),
        l = r.n(n),
        i = r(52389),
        o = r(22463),
        a = r(98142),
        s = r(2563),
        c = r(64539),
        d = r(23588),
        m = r(2525),
        p = r(11629),
        u = r(56635),
        g = r(27542),
        h = r(85635),
        f = r(49727),
        v = r(84542),
        E = r(85546),
        y = r(25655),
        b = r(77434),
        w = r(44027);
      const C = ({
          filterGroup: e,
          filtersInitiallyCollapsed: t,
          onFilterSelect: r,
          options: n = [],
          selectedFilters: i,
          title: o,
        }) =>
          0 === n.length
            ? null
            : l().createElement(
                w.Oy,
                {
                  collapsible: !0,
                  initialCollapseState: t,
                  renderTitle: ({ isCollapsed: e, toggleCollapsed: t }) =>
                    l().createElement(w.c4, {
                      isCollapsed: e,
                      text: o,
                      toggleCollapsed: t,
                    }),
                },
                n.map(({ id: t, name: n }) => {
                  const o = i.includes(t);
                  return l().createElement(w.kD, {
                    checked: o,
                    key: t,
                    onClick: () => r({ checked: o, group: e, id: t }),
                    text: n,
                  });
                }),
              ),
        O = ({ filters: e = {}, onClear: t, onDone: r, onOverlayClick: n }) => {
          const {
              dispatch: i,
              wishlistUndoState: { selectedFilterIds: o },
            } = (0, E.Q)(),
            a = (0, h.Z)(),
            s = (0, g.useLocalization)(),
            { feature: c, genre: m, event: p, platform: w } = e,
            O = m || [],
            S = c || [],
            I = p || [],
            L = w || [],
            x = (0, u.P4)(a),
            Z = (null == o ? void 0 : o.length) || 0,
            T = ({ checked: e, id: t }) => {
              i(
                e
                  ? { type: v.S.REMOVE_FILTERS, payload: { filterIds: [t] } }
                  : { type: v.S.ADD_FILTERS, payload: { filterIds: [t] } },
              );
            },
            P = () => i({ type: v.S.RESET_FILTERS }),
            k = (0, d.SO)(b.H, { numSelectedFilters: Z, resetFilters: P }),
            j = (0, d.R)(
              C,
              {
                filterGroup: f.e_.Event,
                filtersInitiallyCollapsed: x,
                onFilterSelect: T,
                options: I,
                selectedFilters: o,
                title: s("diesel.store.browse.events") || "",
              },
              I.length > 0,
            ),
            _ = (0, d.R)(
              C,
              {
                filterGroup: f.e_.Genre,
                filtersInitiallyCollapsed: x,
                onFilterSelect: T,
                options: O,
                selectedFilters: o,
                title: s("diesel.store.browse.genre") || "",
              },
              O.length > 0,
            ),
            D = (0, d.R)(
              C,
              {
                filterGroup: f.e_.Feature,
                filtersInitiallyCollapsed: x,
                onFilterSelect: T,
                options: S,
                selectedFilters: o,
                title: s("diesel.store.browse.features") || "",
              },
              S.length > 0,
            ),
            A = (0, d.R)(
              C,
              {
                filterGroup: f.e_.Platform,
                filtersInitiallyCollapsed: x,
                onFilterSelect: T,
                options: L,
                selectedFilters: o,
                title: s("diesel.products.about.meta.platform") || "",
              },
              L.length > 0,
            );
          return l().createElement(
            y.W,
            {
              onClear: () => {
                (P(), t && t());
              },
              onDone: r,
              onOverlayClick: n,
            },
            k && k(),
            j && j(),
            _ && _(),
            D && D(),
            A && A(),
          );
        };
      var S = r(96003);
      const I = ({ count: e = 0, onClick: t }) => {
        const r = (0, g.useLocalization)();
        return l().createElement(
          S.Z,
          { onClick: t },
          r("diesel.store.browse.filter", e > 0 ? [`(${e})`] : [""]),
        );
      };
      var L = r(28901),
        x = r(56606),
        Z = r(69936),
        T = r(68125);
      const P = {
          contentWrapper: (0, L.iv)({
            height: "100%",
            "& > div": {
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }),
          content: (0, L.iv)({ marginTop: 12 }),
        },
        k = ({ children: e }) =>
          l().createElement(T.Z, { className: P.contentWrapper }, e),
        j = ({ children: e, renderSidebar: t }) =>
          l().createElement(
            T.Z,
            { className: P.contentWrapper },
            l().createElement(
              x.H,
              { renderRightSidebar: t },
              l().createElement("div", { className: P.content }, e),
            ),
          ),
        _ = ({
          children: e,
          renderSidebar: t,
          renderHeader: r,
          renderCommsBanner: n,
        }) =>
          l().createElement(
            Z.Z,
            null,
            r && r(),
            n && n(),
            t
              ? l().createElement(j, { renderSidebar: t }, e)
              : l().createElement(k, null, e),
          );
      var D = r(81855),
        A = r(96545),
        N = r(89772),
        R = r(17613),
        F = r(71403),
        M = Object.defineProperty,
        W = Object.defineProperties,
        U = Object.getOwnPropertyDescriptors,
        B = Object.getOwnPropertySymbols,
        H = Object.prototype.hasOwnProperty,
        V = Object.prototype.propertyIsEnumerable,
        z = (e, t, r) =>
          t in e
            ? M(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        G = (e, t) => {
          for (var r in t || (t = {})) H.call(t, r) && z(e, r, t[r]);
          if (B) for (var r of B(t)) V.call(t, r) && z(e, r, t[r]);
          return e;
        },
        X = (e, t) => W(e, U(t));
      const K = {
          listItem: (0, L.iv)({
            height: "70px",
            width: "100%",
            marginBottom: "5px",
            position: "relative",
            "&.gridLayout": { width: "100%", height: "auto", marginBottom: 0 },
          }),
          content: ({ isInstalled: e, cssTheme: t }) =>
            (0, L.iv)(
              X(
                G(
                  X(G({}, A.pB.smooth("background-color", "125ms")), {
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
                  borderRadius: A.E0,
                  ".gridLayout &": X(
                    G({ backgroundColor: "transparent" }, (0, R.rv)(0)),
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
            (0, L.iv)(
              {
                flex: 1,
                backgroundColor: "transparent",
                color: "inherit",
                fontWeight: 400,
                padding: 0,
                borderRadius: 0,
                [A.Uc.lgOnly]: { height: "auto" },
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
                    [A.Uc.lgOnly]: { height: "50px !important" },
                  },
            ),
          buttonInner: (0, L.iv)(
            X(G({}, N.a), {
              display: "flex",
              textTransform: "none",
              ".gridLayout &": { display: "block", position: "relative" },
            }),
          ),
        },
        $ = ({
          children: e,
          className: t,
          onClick: r,
          isGridLayout: l,
          isInstalled: i = !1,
          isMenuOpen: o,
          renderMenu: a,
          renderEndcap: s,
        }) => {
          const c = (0, L.cx)(
              K.listItem,
              { gridLayout: l, active: o, hasHover: !!r },
              t,
            ),
            d = (0, F.Z)();
          return n.createElement(
            "div",
            { className: c, role: "listitem" },
            n.createElement(
              "div",
              {
                className: K.content({ isInstalled: i, cssTheme: d }),
                "data-testid": "listitem-content",
              },
              n.createElement(
                D.Z,
                {
                  className: K.wrapperActionButton(l),
                  disabled: o,
                  hasMinWidth: !1,
                  hasHover: !1,
                  onClick: r,
                  "data-testid": "primary-button",
                },
                n.createElement("div", { className: K.buttonInner }, e),
              ),
              s && s(),
            ),
            a && a(),
          );
        };
      var Q = r(77574),
        q = r(41725),
        J = r(92366),
        Y = r(81934),
        ee = r(59620),
        te = r(47455),
        re = r(90879),
        ne = r(62829),
        le = r(50821),
        ie = r(302),
        oe = r(78660),
        ae = r(90585);
      (r(72124),
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable);
      const se = (e) => {
          if (!e) return !1;
          const { effectiveDate: t } = e;
          return !!t && new Date(t).getTime() > Date.now();
        },
        ce = (e) => {
          if (!e) return !1;
          const { expiryDate: t } = e;
          return !!t && new Date(t).getTime() < Date.now();
        },
        de = (e) => !!e && e.status === re.PV.ACTIVE && !e.isCodeRedemptionOnly,
        me = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.offer) ? void 0 : t.title;
        },
        pe = (e) => {
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
        ue = (0, le.Z)((e) =>
          e && e.created ? new Date(e.created).getTime() : null,
        ),
        ge = (0, ie.Z)(pe),
        he = (0, le.Z)(pe),
        fe = (0, le.Z)((e) => {
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
        ve = (e, t) => (se(e.offer) ? 1 : 0) - (se(t.offer) ? 1 : 0),
        Ee = (e, t) => {
          const r = de(e.offer) && !ce(e.offer) ? 1 : 0;
          return (de(t.offer) && !ce(t.offer) ? 1 : 0) - r;
        },
        ye = (0, oe.Z)((e, t) => {
          const r = me(e),
            n = me(t);
          return r.localeCompare(n);
        }),
        be = (0, oe.Z)(ue),
        we = (0, ae.Z)([Ee, ve, ge, ue]),
        Ce = (0, ae.Z)([Ee, ve, he, ue]),
        Oe = (0, ae.Z)([Ee, ve, fe, ue]);
      var Se = r(59038),
        Ie = r(28893),
        Le = Object.defineProperty,
        xe = Object.defineProperties,
        Ze = Object.getOwnPropertyDescriptors,
        Te = Object.getOwnPropertySymbols,
        Pe = Object.prototype.hasOwnProperty,
        ke = Object.prototype.propertyIsEnumerable,
        je = (e, t, r) =>
          t in e
            ? Le(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        _e = (e, t) => {
          for (var r in t || (t = {})) Pe.call(t, r) && je(e, r, t[r]);
          if (Te) for (var r of Te(t)) ke.call(t, r) && je(e, r, t[r]);
          return e;
        },
        De = (e, t) => xe(e, Ze(t));
      const Ae = (0, L.iv)(
          De(_e({}, Se.cp.text6), {
            display: "flex",
            height: "100%",
            alignItems: "center",
            width: "100%",
            position: "relative",
            [A.Uc.underMd]: { overflow: "hidden" },
          }),
        ),
        Ne = (0, L.iv)({
          textTransform: "none",
          marginLeft: 21,
          textAlign: "left",
          whiteSpace: "normal",
          "[dir=rtl] &": { textAlign: "right" },
          [A.Uc.underMd]: { marginBottom: 6 },
        }),
        Re = (0, L.iv)({
          display: "flex",
          "& > div": { backgroundColor: "transparent" },
          [A.Uc.underMd]: { minHeight: 70 },
        }),
        Fe = (0, L.iv)({
          whiteSpace: "normal",
          alignItems: "baseline",
          textAlign: "left",
        }),
        Me = {
          itemContainer: Ae,
          removeButton: (e) =>
            (0, L.iv)({
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
                "&:after": De(_e(_e({}, Ie.d), N.a), {
                  backgroundColor: e.accentOverlay,
                }),
              },
              [A.Uc.lgOnly]: { height: "100%" },
            }),
          title: Ne,
          undoButton: (0, L.iv)({
            whiteSpace: "normal",
            wordBreak: "break-all",
            padding: "0 2px",
          }),
          undoItem: Re,
          undoTitle: Fe,
          wishlistItem: ({ inactive: e, isUndo: t, cssTheme: r }) =>
            (0, L.iv)(
              {
                button: { cursor: e ? "default" : void 0 },
                [A.Uc.underMd]: {
                  height: "auto",
                  "& > div": { height: "auto" },
                  "& > div > button:first-child": {
                    padding: "10px 0",
                    height: "auto !important",
                    "& > span > div": { position: "relative" },
                  },
                  "& > div > div": { height: "auto" },
                },
                [A.Uc.xs]: { "& > div": { paddingLeft: "0 !important" } },
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
      var We = r(83242);
      const Ue = ({ onClick: e, title: t }) => {
          const r = (0, We.y)();
          return l().createElement(
            D.Z,
            {
              className: (0, L.cx)(Me.removeButton(r), Me.undoButton),
              hasMinWidth: !1,
              hasHover: !1,
              onClick: e,
              title: t,
            },
            l().createElement(q.v0, { code: "egstore.wishlist.undo" }),
          );
        },
        Be = ({ onClick: e, title: t }) => {
          const r = (0, We.y)();
          return l().createElement(
            D.Z,
            {
              className: (0, L.cx)(Me.removeButton(r), Me.undoButton),
              hasMinWidth: !1,
              hasHover: !1,
              onClick: e,
              title: t,
            },
            l().createElement(Q.Z, { icon: p.kf.CLOSE, size: p.J7.XXXSMALL }),
          );
        },
        He = ({
          addFromWishlistView: e,
          namespace: t,
          offer: r,
          offerId: i,
        }) => {
          const o = (0, J.K)(),
            [a, s] = (0, n.useState)(!1),
            c = (0, We.y)(),
            d = (0, g.useLocalization)(),
            m = l().useCallback(() => {
              (e({ namespace: t, offerId: i }),
                o({
                  eventAction: te.hO.ADD_FROM_WISHLIST_VIEW,
                  eventCategory: ne.u9,
                  eventLabel: ne.rq,
                  eventValue: (0, Y.Z)({ offer: { namespace: t, offerId: i } }),
                  interactionType: ee.md.Interaction,
                }));
            }, [t, i]),
            p = () => {
              s(!0);
            },
            u = r.status === re.PV.ACTIVE && !r.isCodeRedemptionOnly && !ce(r);
          return a
            ? null
            : l().createElement(
                l().Fragment,
                null,
                l().createElement(
                  $,
                  {
                    className: (0, L.cx)(
                      Me.wishlistItem({
                        inactive: !u,
                        isUndo: !0,
                        cssTheme: c,
                      }),
                      Me.undoItem,
                    ),
                    isGridLayout: !1,
                    isMenuOpen: !1,
                    renderEndcap: u
                      ? () =>
                          l().createElement(Ue, {
                            onClick: m,
                            title:
                              d("egstore.wishlist.undo.removed", [r.title]) ||
                              "",
                          })
                      : () =>
                          l().createElement(Be, {
                            onClick: p,
                            title: d("diesel.main.navigation.close") || "",
                          }),
                  },
                  l().createElement(
                    "div",
                    { className: Me.itemContainer },
                    l().createElement(
                      "div",
                      { className: (0, L.cx)(Me.title, Me.undoTitle) },
                      d("egstore.wishlist.undo.removed", [r.title]),
                    ),
                  ),
                ),
              );
        };
      var Ve = r(98738),
        ze = r(74737),
        Ge = r(73376),
        Xe = r(50452),
        Ke = Object.defineProperty,
        $e = Object.defineProperties,
        Qe = Object.getOwnPropertyDescriptors,
        qe = Object.getOwnPropertySymbols,
        Je = Object.prototype.hasOwnProperty,
        Ye = Object.prototype.propertyIsEnumerable,
        et = (e, t, r) =>
          t in e
            ? Ke(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const tt = { wrapper: (0, L.iv)({ width: "100%" }) },
        rt = (e) => {
          var t, r, i, o;
          const { dispatch: a } = (0, E.Q)(),
            { namespace: s, offer: c, isUndo: d } = e,
            m = null == c ? void 0 : c.id,
            p =
              null != (r = null == (t = c.catalogNs) ? void 0 : t.store)
                ? r
                : "",
            u =
              null != (o = null == (i = c.catalogNs) ? void 0 : i.parent)
                ? o
                : "",
            [g, h] = (0, n.useState)(!1),
            [f, y] = (0, Ve.x)({ offerId: m, sandboxId: s }),
            b = (0, n.useCallback)(() => {
              y.isLoading ||
                f().then((e) => {
                  var t;
                  e &&
                    (null == (t = e.data) ? void 0 : t.success) &&
                    a({ type: v.S.REMOVE_UNDO, payload: { offerId: m } });
                });
            }, [s, m, y.isLoading]);
          return d
            ? l().createElement(
                He,
                ((w = ((e, t) => {
                  for (var r in t || (t = {})) Je.call(t, r) && et(e, r, t[r]);
                  if (qe) for (var r of qe(t)) Ye.call(t, r) && et(e, r, t[r]);
                  return e;
                })({}, e)),
                $e(w, Qe({ addFromWishlistView: b }))),
              )
            : l().createElement(
                ze.ZP,
                {
                  disabled: g,
                  rootMargin: "10%",
                  onChange: ({ isIntersecting: e }) => {
                    h(e);
                  },
                },
                l().createElement(
                  "div",
                  { className: tt.wrapper },
                  g
                    ? l().createElement(Xe.m1, {
                        offerId: m,
                        sandboxId: s,
                        store: p,
                        productId: u,
                      })
                    : l().createElement(Ge.A, null),
                ),
              );
          var w;
        };
      var nt = r(11240),
        lt = Object.defineProperty,
        it = Object.defineProperties,
        ot = Object.getOwnPropertyDescriptors,
        at = Object.getOwnPropertySymbols,
        st = Object.prototype.hasOwnProperty,
        ct = Object.prototype.propertyIsEnumerable,
        dt = (e, t, r) =>
          t in e
            ? lt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const mt = {
          wishlistItem: (0, L.iv)({
            listStyle: "none outside none",
            padding: 0,
            margin: 0,
            display: "flex",
            width: "100%",
            marginBottom: 15,
          }),
          wishlist: (0, L.iv)({ padding: 0, width: "100%" }),
        },
        pt = (e) => {
          return n.createElement(
            nt.a,
            ((t = ((e, t) => {
              for (var r in t || (t = {})) st.call(t, r) && dt(e, r, t[r]);
              if (at) for (var r of at(t)) ct.call(t, r) && dt(e, r, t[r]);
              return e;
            })({}, e)),
            it(
              t,
              ot({ className: mt.wishlist, itemClassName: mt.wishlistItem }),
            )),
          );
          var t;
        },
        ut = ({ count: e, animation: t }) => {
          const r = [...Array(e).keys()];
          return l().createElement(pt, { data: r }, () =>
            l().createElement(Ge.A, { animation: t }),
          );
        };
      var gt = Object.defineProperty,
        ht = Object.getOwnPropertySymbols,
        ft = Object.prototype.hasOwnProperty,
        vt = Object.prototype.propertyIsEnumerable,
        Et = (e, t, r) =>
          t in e
            ? gt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      const yt = ({ items: e = [], isLoading: t }) => {
        const r = 0 === e.length;
        return l().createElement(
          l().Fragment,
          null,
          t && r
            ? l().createElement(ut, { count: ne.zL })
            : l().createElement(pt, { data: e }, (e) =>
                l().createElement(
                  rt,
                  ((e, t) => {
                    for (var r in t || (t = {}))
                      ft.call(t, r) && Et(e, r, t[r]);
                    if (ht)
                      for (var r of ht(t)) vt.call(t, r) && Et(e, r, t[r]);
                    return e;
                  })({}, e),
                ),
              ),
        );
      };
      var bt = r(35477),
        wt = r(38764),
        Ct = r(34218);
      const Ot = {
          container: (0, L.iv)({
            marginTop: 8,
            marginBottom: 30,
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "space-between",
            [wt.Uc.md]: { alignItems: "center", flexDirection: "row" },
          }),
          title: (0, L.iv)({
            [wt.Uc.underMd]: {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            },
          }),
        },
        St = ({ animation: e }) =>
          l().createElement(
            "div",
            { className: Ot.container },
            l().createElement(
              "div",
              { className: Ot.title },
              l().createElement(Ct.Od, {
                height: 50,
                width: 120,
                animation: e,
              }),
            ),
          ),
        It = ({ renderWallet: e }) => {
          const t = (0, g.useLocalization)();
          return l().createElement(
            "div",
            { className: Ot.container },
            l().createElement(
              "div",
              { className: Ot.title },
              l().createElement(
                bt.Z.Heading,
                { headingLevel: 1 },
                t("diesel.main.navigation.wishlist"),
              ),
            ),
            e && e(),
          );
        };
      var Lt = r(18755),
        xt = r(75187),
        Zt = r(42958),
        Tt = r(7531),
        Pt = r(55156);
      const kt = (e = [], t = []) => {
        const r = e.reduce(
          (e, r) =>
            ((e, t) => !!(0, xt.Z)((0, Zt.Z)("id", e), t))(r, t)
              ? [...e, !0]
              : [...e, !1],
          [],
        );
        return (0, Tt.Z)((0, Pt.Z)(!0), r);
      };
      var jt = r(22202),
        _t = r(3858),
        Dt = r(1049),
        At = r(21810),
        Nt = r(6977),
        Rt = Object.defineProperty,
        Ft = Object.defineProperties,
        Mt = Object.getOwnPropertyDescriptors,
        Wt = Object.getOwnPropertySymbols,
        Ut = Object.prototype.hasOwnProperty,
        Bt = Object.prototype.propertyIsEnumerable,
        Ht = (e, t, r) =>
          t in e
            ? Rt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Vt = (e, t) => {
          for (var r in t || (t = {})) Ut.call(t, r) && Ht(e, r, t[r]);
          if (Wt) for (var r of Wt(t)) Bt.call(t, r) && Ht(e, r, t[r]);
          return e;
        },
        zt = (e, t) => Ft(e, Mt(t));
      const Gt = (0, ae.Z)([
          (0, le.Z)((0, Dt.Z)("count")),
          (0, ie.Z)((0, Dt.Z)("name")),
        ]),
        Xt = (0, Nt.Z)(
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
              return zt(Vt({}, e), { [t.groupName]: [...r, t] });
            }, {}),
          (e = {}) => {
            const t = ((e = {}) => (0, jt.Z)((0, _t.Z)((0, Dt.Z)("id")), e))(e);
            return (0, jt.Z)((e, r) => {
              const n = t[r];
              return (0, At.Z)(e).map((e) => zt(Vt({}, e), { count: n[e.id] }));
            }, e);
          },
          (e = {}) => (0, jt.Z)(Gt, e),
        );
      var Kt = r(74758),
        $t = r(39363),
        Qt = r(82996);
      const qt = (e) => ({
          wrapper: (0, L.iv)({
            marginTop: 30,
            '[data-component="Icon"]': { path: { fill: A.JD } },
          }),
          link: (0, L.iv)({
            borderBottom: `1px solid ${e.accentOverlay}`,
            color: e.textSecondary,
            "&:hover": {
              borderBottom: `1px solid ${e.textPrimary}`,
              color: e.textPrimary,
            },
          }),
        }),
        Jt = () => {
          const e = (0, g.useLocalization)(),
            t = (0, We.y)(),
            r = (0, n.useMemo)(() => qt(t), [t]),
            i = e("egstore.wishlist.empty_results.message"),
            o = () =>
              l().createElement(
                Qt.Z,
                { to: "/", className: r.link },
                e("egstore.wishlist.empty_results.shop_discover"),
              );
          return l().createElement(
            "div",
            { className: r.wrapper },
            l().createElement($t.D, {
              contentIcon: p.kf.STRESSED_FACE,
              title: l().createElement("span", null, i),
              body: l().createElement(o, null),
            }),
          );
        },
        Yt = ({ onReset: e }) => {
          const t = (0, g.useLocalization)(),
            r = (0, We.y)(),
            i = (0, n.useMemo)(() => qt(r), [r]);
          return l().createElement(
            "div",
            { className: i.wrapper },
            l().createElement($t.D, {
              contentIcon: p.kf.STRESSED_FACE,
              title: t("diesel.common.search.noResults.title"),
              body: l().createElement(
                Qt.Z,
                {
                  onClick: (t) => {
                    (t.preventDefault(), e && e());
                  },
                  className: i.link,
                },
                t("egstore.filters.remove_filters"),
              ),
            }),
          );
        };
      var er = r(5844),
        tr = r(38705),
        rr = r(35362),
        nr = r(29945),
        lr = r(82565),
        ir = r(51011);
      const or = ({ message: e }) => {
          const t = (0, We.y)(),
            r = (0, n.useMemo)(
              () =>
                (({ cssTheme: e }) => ({
                  wrapper: (0, L.iv)({ [wt.Uc.underSm]: { display: "none" } }),
                  icon: (0, L.iv)({
                    color: e.textPrimary,
                    height: 16,
                    width: 16,
                    "&:hover": { cursor: "help" },
                  }),
                  message: (0, L.iv)({ maxWidth: 300, textAlign: "left" }),
                }))({ cssTheme: t }),
              [t],
            ),
            i = l().createRef();
          return l().createElement(
            "div",
            { className: r.wrapper },
            l().createElement(
              "div",
              { ref: i },
              l().createElement(Q.Z, {
                icon: ir.A,
                size: nr.Z.CUSTOM,
                className: r.icon,
              }),
            ),
            l().createElement(
              lr.u,
              { hideOnClick: !1, anchorRef: i, className: r.message },
              l().createElement(q.v0, { code: e }),
            ),
          );
        },
        ar = {
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
      var sr = r(8909),
        cr = r(60693),
        dr = r(98444);
      const mr = () => {
        var e;
        const t = (0, We.y)();
        return l().createElement(
          i.n4,
          { fallback: l().createElement(rr.a, null) },
          l().createElement(
            dr.Z,
            {
              themeOverrides: {
                accent:
                  null == (e = (0, er.re)(cr.g[t.mode].success))
                    ? void 0
                    : e.rgb(),
              },
            },
            l().createElement(tr.M4, {
              channelType: "email",
              settingKeys: [sr.p.EMAIL, sr.p.WISHLIST_EMAIL],
              selectedSettingKey: sr.p.WISHLIST_EMAIL,
              toggleTextId: "wishlist-toggle-label",
              enabledMessage: "egstore.wishlist.notification_toggle_enabled",
              disabledMessage: "egstore.wishlist.notification_toggle",
              ariaLabelCode: "egstore.wishlist.notification_toggle.switch",
              icon: ar,
              iconSize: nr.Z.SMALL,
              secondary: () =>
                l().createElement(or, {
                  message: "egstore.wishlist.notification_toggle_tooltip",
                }),
            }),
          ),
        );
      };
      var pr = r(11745),
        ur = r(63806),
        gr = Object.defineProperty,
        hr = Object.defineProperties,
        fr = Object.getOwnPropertyDescriptors,
        vr = Object.getOwnPropertySymbols,
        Er = Object.prototype.hasOwnProperty,
        yr = Object.prototype.propertyIsEnumerable,
        br = (e, t, r) =>
          t in e
            ? gr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        wr = (e, t) => {
          for (var r in t || (t = {})) Er.call(t, r) && br(e, r, t[r]);
          if (vr) for (var r of vr(t)) yr.call(t, r) && br(e, r, t[r]);
          return e;
        };
      const Cr = ({
          onSort: e = () => {},
          sortingOptions: t,
          sortValue: r = "",
        }) => {
          const i = (0, F.Z)(),
            o = (0, n.useMemo)(
              () =>
                ((e) => {
                  return {
                    main: (0, L.iv)({
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }),
                    sortWrapper: (0, L.iv)({
                      display: "flex",
                      flexDirection: "row",
                      flexGrow: 1,
                    }),
                    totalWrapper: (0, L.iv)(
                      ((t = wr({}, Se.cp.text8)),
                      (r = {
                        textAlign: "right",
                        [ur.Uc.xs]: { display: "none" },
                      }),
                      hr(t, fr(r))),
                    ),
                    layoutWrapper: (0, L.iv)({ textAlign: "right" }),
                    layoutButton: (0, L.iv)((0, R.WL)(1), {
                      transition: "background-color 125ms ease-in-out",
                      height: "100%",
                      color: e.textPrimary,
                      backgroundColor: "transparent",
                      padding: 0,
                    }),
                    border: (0, L.iv)({
                      border: `1px solid ${e.backgroundOverlay}`,
                    }),
                    transparentBorder: (0, L.iv)({
                      border: "1px solid transparent",
                    }),
                  };
                  var t, r;
                })(i),
              [i],
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
                  l().createElement(pr.Z, {
                    id: "sort-dropdown",
                    label: l().createElement(q.v0, {
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
        Or = {
          root: (0, L.iv)({
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }),
        },
        Sr = ({
          sortType: e,
          setSortType: t,
          wishlistSortingOptions: r,
          renderFilterToggle: n,
        }) =>
          l().createElement(
            "div",
            { className: Or.root },
            l().createElement(Cr, {
              onSort: (e) => t(e),
              sortingOptions: r,
              sortValue: e,
            }),
            n && n(),
          ),
        Ir = {
          [re.AX.ALPHABETICAL]: ye,
          [re.AX.RECENTLY_ADDED]: be,
          [re.AX.LOWEST_PRICE]: we,
          [re.AX.HIGHEST_PRICE]: Ce,
          [re.AX.ON_SALE]: Oe,
        },
        Lr = ({ breakpoint: e }) => {
          const t = (0, c.s)(),
            r = (0, g.useLocalization)(),
            [i, o] = (0, n.useState)(re.AX.ON_SALE),
            [a, h] = (0, n.useState)([]),
            [f, y] = (0, n.useState)(!1),
            {
              wishlistItems: b,
              isError: w,
              isFetching: C,
              isSuccess: S,
            } = (0, Lt.Z)(),
            {
              dispatch: L,
              wishlistUndoState: { wishlistWithUndo: x, selectedFilterIds: Z },
            } = (0, E.Q)(),
            T = (0, u.DX)(e),
            P = (0, ne.UT)(r),
            k = Xt(x) || {},
            j = Object.keys(k).length,
            D = () => y(!f),
            A = (0, n.useCallback)((e = []) => Ir[i](e), [i]);
          ((0, n.useEffect)(() => {
            L({ type: v.S.SET_WISHLIST, payload: { wishlist: b } });
          }, [b]),
            (0, n.useEffect)(() => {
              const e = ((e = [], t = []) =>
                t.reduce((t, r) => {
                  var n;
                  const l =
                    (null == (n = null == r ? void 0 : r.offer)
                      ? void 0
                      : n.tags) || [];
                  return kt(e, l) ? [...t, r] : t;
                }, []))(Z, x);
              (0, Pt.Z)(e, a) || h(() => e);
            }, [Z, x]),
            (0, n.useEffect)(() => {
              L({ type: v.S.RESET_WISHLIST, payload: { wishlist: b } });
            }, [i]));
          const N = (0, d.SO)(O, { filters: k }),
            R = (0, d.SO)(O, {
              filters: k,
              onClear: D,
              onDone: D,
              onOverlayClick: D,
            }),
            F = (0, d.R)(I, { count: Z.length, onClick: D }, T),
            M = (0, d.SO)(It, {
              renderWallet: () =>
                l().createElement(
                  l().Fragment,
                  null,
                  l().createElement(s.pp, null),
                ),
            });
          return w
            ? l().createElement(m.Z, { type: p.aB.SERVER_ERROR })
            : l().createElement(
                l().Fragment,
                null,
                l().createElement(Kt.q, {
                  title: r("diesel.main.navigation.wishlist"),
                }),
                l().createElement(
                  _,
                  {
                    renderHeader: M,
                    renderCommsBanner: () =>
                      t ? null : l().createElement(mr, null),
                    renderSidebar: !T && j ? N : void 0,
                  },
                  T && f && R && R(),
                  l().createElement(Sr, {
                    sortType: i,
                    setSortType: o,
                    wishlistSortingOptions: P,
                    renderFilterToggle: j ? F : void 0,
                  }),
                  0 === a.length &&
                    Z.length > 0 &&
                    l().createElement(Yt, {
                      onReset: () => L({ type: v.S.RESET_FILTERS }),
                    }),
                  0 === ((null == b ? void 0 : b.length) || 0) &&
                    0 === x.length &&
                    S
                    ? l().createElement(Jt, null)
                    : l().createElement(yt, { isLoading: C, items: A(a) }),
                ),
              );
        };
      var xr = r(41412),
        Zr = r(32042),
        Tr = r(61340),
        Pr = r(2714),
        kr = Object.defineProperty,
        jr = Object.defineProperties,
        _r = Object.getOwnPropertyDescriptors,
        Dr = Object.getOwnPropertySymbols,
        Ar = Object.prototype.hasOwnProperty,
        Nr = Object.prototype.propertyIsEnumerable,
        Rr = (e, t, r) =>
          t in e
            ? kr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Fr = (e, t) => {
          for (var r in t || (t = {})) Ar.call(t, r) && Rr(e, r, t[r]);
          if (Dr) for (var r of Dr(t)) Nr.call(t, r) && Rr(e, r, t[r]);
          return e;
        },
        Mr = (e, t) => jr(e, _r(t));
      const Wr = ({
          children: e,
          initialUndoItems: t = [],
          initialWishlist: r = [],
          initialSelectedFilterIds: i = [],
        }) => {
          const o = {
              undoItems: t,
              wishlist: r,
              wishlistWithUndo: r,
              selectedFilterIds: i,
            },
            [a, s] = (0, n.useReducer)((e, t) => {
              switch (t.type) {
                case v.S.SET_WISHLIST: {
                  const { wishlist: r } = t.payload;
                  if ((0, Pt.Z)(e.wishlist, r)) return e;
                  if (
                    (null == r ? void 0 : r.length) &&
                    0 === e.wishlistWithUndo.length
                  )
                    return Mr(Fr({}, e), { wishlistWithUndo: r, wishlist: r });
                  const { undoItems: n } = e,
                    l = ((e, t) => {
                      const r = e.map(({ offerId: e }) => e).sort(),
                        n = t.map(({ offerId: e }) => e).sort();
                      return (0, Pt.Z)(r, n);
                    })(e.wishlistWithUndo, r),
                    i =
                      0 !== n.length || l
                        ? ((e = [], t = []) =>
                            0 === e.length
                              ? e
                              : e.reduce(
                                  (e, r) =>
                                    (0, xt.Z)((e) => e === r.offerId)(t)
                                      ? [...e, Mr(Fr({}, r), { isUndo: !0 })]
                                      : [...e, Mr(Fr({}, r), { isUndo: !1 })],
                                  [],
                                ))(e.wishlistWithUndo, n)
                        : r;
                  return Mr(Fr({}, e), { wishlistWithUndo: i, wishlist: r });
                }
                case v.S.RESET_WISHLIST: {
                  const { wishlist: r } = t.payload;
                  return Mr(Fr({}, e), { wishlistWithUndo: r, wishlist: r });
                }
                case v.S.ADD_UNDO: {
                  const { offerId: r } = t.payload;
                  return r
                    ? Mr(Fr({}, e), {
                        undoItems: (0, At.Z)([...e.undoItems, r]),
                      })
                    : e;
                }
                case v.S.REMOVE_UNDO: {
                  const { offerId: r } = t.payload;
                  if (!r) return e;
                  const n = (0, Zr.Z)((e) => e !== r, e.undoItems);
                  return Mr(Fr({}, e), { undoItems: n });
                }
                case v.S.ADD_FILTERS: {
                  const { filterIds: r = [] } = t.payload;
                  return Mr(Fr({}, e), {
                    selectedFilterIds: (0, At.Z)([
                      ...e.selectedFilterIds,
                      ...r,
                    ]),
                  });
                }
                case v.S.REMOVE_FILTERS: {
                  const { filterIds: r = [] } = t.payload;
                  return Mr(Fr({}, e), {
                    selectedFilterIds: (0, Tr.Z)(r, e.selectedFilterIds),
                  });
                }
                case v.S.RESET_FILTERS:
                  return Mr(Fr({}, e), { selectedFilterIds: [] });
                default:
                  return e;
              }
            }, o),
            c = { wishlistUndoState: a, dispatch: s };
          return l().createElement(Pr.D.Provider, { value: c }, e);
        },
        Ur = { placeholder: (0, L.iv)({ marginTop: 30 }) },
        Br = ({ animation: e }) =>
          l().createElement(
            _,
            {
              renderHeader: () => l().createElement(St, { animation: e }),
              renderCommsBanner: () =>
                l().createElement(rr.a, { animation: e }),
            },
            l().createElement(
              "div",
              { className: Ur.placeholder },
              l().createElement(ut, { count: ne.zL, animation: e }),
            ),
          );
      var Hr = r(67063),
        Vr = r(58829);
      const zr = () =>
        (0, Vr.Z)()
          ? l().createElement(
              xr.Z,
              null,
              l().createElement(
                Wr,
                null,
                l().createElement(
                  i.n4,
                  { fallback: l().createElement(Br, null) },
                  l().createElement(Hr.Z, { render: Lr }),
                ),
              ),
            )
          : l().createElement(a.Z, { to: (0, o.getPath)() });
    },
  },
]);
//# sourceMappingURL=WishlistView.egstore-site.addd3a5063085a4b05b5.js.map
