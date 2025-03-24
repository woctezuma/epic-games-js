(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [611],
  {
    51102: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Zm });
      var r = a(8788),
        n = a.n(r),
        l = a(30469),
        o = a(50443),
        i = a(61801),
        c = a(24232),
        s = a(10677),
        d = a(1273),
        m = a(37301),
        u = a(34988),
        p = a(56578),
        g = a(22972),
        b = a(41791),
        E = a(4845),
        y = a(83502),
        v = a(25355),
        f = a(64366),
        h = a(4446),
        A = a(32216),
        C = a(90413),
        I = a(17673),
        S = a(22357),
        O = a(748),
        x = a(49498),
        k = a(10288),
        P = Object.defineProperty,
        w = Object.defineProperties,
        N = Object.getOwnPropertyDescriptors,
        L = Object.getOwnPropertySymbols,
        _ = Object.prototype.hasOwnProperty,
        T = Object.prototype.propertyIsEnumerable,
        M = (e, t, a) =>
          t in e
            ? P(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        D = (e, t) => {
          for (var a in t || (t = {})) _.call(t, a) && M(e, a, t[a]);
          if (L) for (var a of L(t)) T.call(t, a) && M(e, a, t[a]);
          return e;
        },
        B = (e, t) => w(e, N(t));
      const R = (0, I.W)((e, t) => ({
          buttonDiv: (0, u.AH)((0, S.S$)(10), {
            button: B(
              D(
                D({}, (0, O.Jp)("border-color")),
                (0, O.Jp)("transform", "350ms"),
              ),
              {
                height: "100%",
                width: "100%",
                padding: 10,
                boxShadow: `0 0 1px 2px ${t ? e.textSecondary : e.textPrimary}`,
                borderRadius: "50%",
                svg: {
                  fontSize: 10,
                  path: {
                    stroke: t ? e.textSecondary : e.textPrimary,
                    strokeWidth: 2,
                  },
                },
                "&:hover, &:focus-visible": {
                  transform: t ? void 0 : "rotate(-180deg)",
                },
              },
            ),
          }),
          edsButton: (0, u.AH)((0, S.S$)(24), {
            cursor: t ? "not-allowed" : "pointer",
            svg: B(D({}, (0, O.Jp)("transform", "350ms")), {
              transform: t ? void 0 : "rotate(90deg)",
            }),
            "&:hover, &:focus-visible": {
              svg: B(D({}, (0, O.Jp)("transform", "350ms")), {
                transform: t ? void 0 : "rotate(-90deg)",
              }),
            },
          }),
        })),
        j = ({ onClick: e, isOnline: t, canCreateCollection: a }) => {
          const r = (0, b.useSelector)(k.k),
            l = n().useMemo(() => !a || !t, [a, t]),
            o = R(l),
            i = n().useRef(null),
            c = a
              ? "egstore.library.collections.add_collection_tooltip"
              : "egstore.library.collections.add_collection_tooltip_max";
          return r
            ? n().createElement(
                E.m,
                { label: n().createElement(v.A, { code: c }) },
                n().createElement(
                  "div",
                  {
                    ref: i,
                    className: o.edsButton,
                    "data-testid": "add-button-div",
                    onClick: l ? void 0 : () => e(),
                    role: "button",
                    tabIndex: 0,
                  },
                  n().createElement(y.G, {
                    size: x.sp.LG,
                    "aria-label": "add collection",
                    color: l ? x.tV.SECONDARY : x.tV.PRIMARY,
                  }),
                ),
              )
            : n().createElement(
                n().Fragment,
                null,
                n().createElement(
                  "div",
                  {
                    className: o.buttonDiv,
                    ref: i,
                    "data-testid": "add-button-div",
                  },
                  n().createElement(
                    h.K,
                    {
                      onClick: e,
                      buttonHeight: f.eL.DENSED,
                      buttonWidth: f.Rj.BLOCK,
                      disabled: l,
                      pill: !0,
                    },
                    n().createElement(A.c, null),
                  ),
                ),
                t &&
                  n().createElement(
                    C.m,
                    { anchorRef: i },
                    n().createElement(v.A, { code: c }),
                  ),
              );
        };
      var H = a(96586),
        F = a(19056);
      const $ = () => {
        const e = (0, g.$)(),
          t = (0, F.S)(),
          { openModal: a } = (0, H.$)();
        return n().createElement(j, {
          onClick: () => a(),
          canCreateCollection: t,
          isOnline: e,
        });
      };
      var z = a(57805),
        W = a(14950),
        q = a(77390),
        U = a(34999),
        V = a(75511),
        G = a(84904),
        Y = a(76221),
        Z = a(83700),
        J = a(40176),
        Q = Object.defineProperty,
        K = Object.defineProperties,
        X = Object.getOwnPropertyDescriptors,
        ee = Object.getOwnPropertySymbols,
        te = Object.prototype.hasOwnProperty,
        ae = Object.prototype.propertyIsEnumerable,
        re = (e, t, a) =>
          t in e
            ? Q(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ne = (e, t) => {
          for (var a in t || (t = {})) te.call(t, a) && re(e, a, t[a]);
          if (ee) for (var a of ee(t)) ae.call(t, a) && re(e, a, t[a]);
          return e;
        },
        le = (e, t) => K(e, X(t));
      const oe = 15,
        ie = (e) => `title-${e}`,
        ce = (e, t) =>
          (0, u.AH)(
            (0, S.P8)((0, S.zG)(t === W.V.ALL ? 0 : oe), (0, S.wv)(oe)),
            le(ne({}, (0, O.Jp)("color")), {
              minWidth: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              "&:hover": { color: e.textPrimary },
            }),
          ),
        se = (0, I.W)((e, { id: t, isEnabledEDSPhase1: a }) => ({
          tabsButtonRoot: (0, u.AH)({ position: "relative" }),
          active: (0, u.AH)({
            color: e.textPrimary,
            "&::after": ne(
              {
                opacity: 1,
                backgroundColor: a ? J.OS.primary.hover : e.textPrimary,
              },
              (0, S.P8)((0, S.hz)(oe), (0, S.S$)(t === W.V.ALL ? 0 : oe)),
            ),
          }),
          button: (0, u.AH)(
            le(ne({ width: "100%" }, (0, O.Jp)("color")), {
              position: "relative",
              paddingTop: 5,
              paddingBottom: 5,
              "&::after": le(ne({}, Y.j), {
                position: "absolute",
                height: 2,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
              }),
              "&:focus-visible": le(ne({}, (0, Z.HE)(e)), {
                [`#${ie(t)}`]: { color: e.textPrimary },
              }),
            }),
          ),
          title: ce(e, t),
          nonDraggableTabs: (0, u.AH)({ flex: "0 0 auto" }),
        })),
        de = ({
          count: e = 0,
          draggable: t = !0,
          enableTooltip: a = !0,
          id: r,
          isSelected: l,
          isTruncated: o,
          onTabClick: i,
          title: c,
          onContextMenu: s,
          onKeyDown: d,
        }) => {
          const m = (0, b.useSelector)(k.k),
            [p, g] = n().useState(!1),
            E = n().useRef(null),
            y = se({ id: r, isEnabledEDSPhase1: m }),
            f = (0, q.S)();
          n().useEffect(() => {
            var e;
            if (r !== c) {
              const t =
                null == (e = E.current)
                  ? void 0
                  : e.querySelector(`[id=${ie(r)}]`);
              t && g(t.scrollWidth > t.clientWidth);
            }
          }, [r]);
          const h = n().useMemo(
              () =>
                (!o && !p) || l
                  ? n().createElement(v.A, {
                      code: "egstore.library.collections.tooltip",
                      args: [null != e ? e : 0],
                    })
                  : `${c} (${e})`,
              [o, p, l, c, e],
            ),
            A = (0, u.cx)(y.tabsButtonRoot, {
              [y.active]: l,
              [y.nonDraggableTabs]: !t,
            }),
            I = n().useCallback(
              () =>
                m
                  ? n().createElement(
                      z.E,
                      {
                        variant: x.ZJ.UILG,
                        color: l ? x.Uf.PRIMARY : x.Uf.SECONDARY,
                      },
                      n().createElement(
                        "div",
                        {
                          className: y.title,
                          "data-dropzoneitem":
                            (r !== f && r !== W.V.ALL) || void 0,
                          id: ie(r),
                        },
                        c,
                      ),
                    )
                  : n().createElement(
                      V.A.Text,
                      { textLevel: l ? G.qo.PRIMARY : G.qo.SECONDARY },
                      n().createElement(
                        "div",
                        {
                          className: y.title,
                          "data-dropzoneitem":
                            (r !== f && r !== W.V.ALL) || void 0,
                          id: ie(r),
                        },
                        c,
                      ),
                    ),
              [m, l, r],
            );
          return n().createElement(
            "div",
            { className: A, "data-testid": "CollectionTabsButton" },
            n().createElement(
              U.A,
              {
                ref: E,
                id: r,
                onClick: () => i(r),
                className: (0, u.cx)(y.button, { [y.active]: l }),
                role: "tab",
                "aria-selected": l,
                onContextMenu: s,
                onKeyDown: d,
              },
              n().createElement(I, null),
            ),
            a && n().createElement(C.m, { anchorRef: E }, h),
          );
        };
      var me = a(88028),
        ue = a(89709),
        pe = a(70751),
        ge = a(71188),
        be = a(76004),
        Ee = a(76517),
        ye = a(64558),
        ve = a(9102),
        fe = a(44490);
      const he = (e) =>
          Boolean(
            !(null == e ? void 0 : e.appName) || !e.appName.startsWith("UE_5"),
          ),
        Ae = (0, ue.A)([
          ye.R9,
          (e) => !(0, ye.PU)(e) || (0, ye.Ef)(e),
          (0, pe.A)([(0, ye.Bb)(ve.wF), (0, ye.Bb)(ve.bQ)]),
          (0, pe.A)([
            (0, ye.In)(ve.zf),
            (0, ye.In)(ve.zl),
            (0, ye.In)(ve.mX),
            (0, ye.In)(ve.M6),
            (0, ye.In)(ve.eX),
            (0, ye.In)(ve.cs),
          ]),
        ]),
        Ce = (0, ue.A)([
          ye.R9,
          (e) => !(0, ye.PU)(e),
          (0, pe.A)([(0, ye.Bb)(ve.wF), (0, ye.Bb)(ve.bQ)]),
          (0, pe.A)([
            (0, ye.In)(ve.zf),
            (0, ye.In)(ve.zl),
            (0, ye.In)(ve.mX),
            (0, ye.In)(ve.M6),
            (0, ye.In)(ve.eX),
            (0, ye.In)(ve.cs),
          ]),
        ]),
        Ie = (e) =>
          (0, ge.A)(
            (0, be.A)((t) => (e ? Ae(t.catalogItem) : Ce(t.catalogItem))),
            (0, be.A)(he),
            (0, Ee.A)(
              (() => {
                let e = !1;
                return (t, a) =>
                  a
                    ? a.namespace === fe.u
                      ? e || a.catalogItemId !== fe.v
                        ? t
                        : ((e = !0), [...t, a])
                      : [...t, a]
                    : t;
              })(),
              [],
            ),
          );
      var Se = a(20171),
        Oe = a(77100),
        xe = a(24750),
        ke = Object.defineProperty,
        Pe = Object.defineProperties,
        we = Object.getOwnPropertyDescriptors,
        Ne = Object.getOwnPropertySymbols,
        Le = Object.prototype.hasOwnProperty,
        _e = Object.prototype.propertyIsEnumerable,
        Te = (e, t, a) =>
          t in e
            ? ke(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Me = (e, t) => {
        const a = (0, Oe.A)(
            ((e) => (0, Se.Mz)(xe.fM, (t) => (e ? t[e] : void 0)))(e),
            () => (0, xe.np)({ collectionId: e }),
            ((n = ((e, t) => {
              for (var a in t || (t = {})) Le.call(t, a) && Te(e, a, t[a]);
              if (Ne) for (var a of Ne(t)) _e.call(t, a) && Te(e, a, t[a]);
              return e;
            })({}, t)),
            (l = {
              enabled:
                Boolean(e) &&
                e !== W.V.ALL &&
                !1 !== (null == t ? void 0 : t.enabled),
            }),
            Pe(n, we(l))),
          ),
          { data: r } = a;
        var n, l;
        return {
          items: r,
          query: ((e, t) => {
            var a = {};
            for (var r in e) Le.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && Ne)
              for (var r of Ne(e))
                t.indexOf(r) < 0 && _e.call(e, r) && (a[r] = e[r]);
            return a;
          })(a, ["data"]),
        };
      };
      var De = a(78714),
        Be = Object.defineProperty,
        Re = Object.defineProperties,
        je = Object.getOwnPropertyDescriptors,
        He = Object.getOwnPropertySymbols,
        Fe = Object.prototype.hasOwnProperty,
        $e = Object.prototype.propertyIsEnumerable,
        ze = (e, t, a) =>
          t in e
            ? Be(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const We = (e = []) => {
          const t = e.reduce((e, t) => {
            return (
              (a = ((e, t) => {
                for (var a in t || (t = {})) Fe.call(t, a) && ze(e, a, t[a]);
                if (He) for (var a of He(t)) $e.call(t, a) && ze(e, a, t[a]);
                return e;
              })({}, e)),
              (r = { [t.sandbox]: 1, [t.catalogId]: 1 }),
              Re(a, je(r))
            );
            var a, r;
          }, {});
          return (e) => e.filter((e) => t[e.namespace] && t[e.catalogItemId]);
        },
        qe = () => [],
        Ue = (e = W.V.ALL, t) => {
          const { records: a, query: n } = (0, De.I)(),
            { items: l, query: o } = Me(e, t);
          return (0, r.useMemo)(() => {
            const t = Ie((0, me.default)().supportsLaunchableAddonsFlow())(a),
              r = e !== W.V.ALL ? We(l) : qe;
            return {
              records: e !== W.V.ALL ? r(t) : t,
              recordsAll: t,
              query: {
                isFetching: n.isFetching || o.isFetching,
                isSuccess: n.isSuccess && o.isSuccess,
              },
            };
          }, [a, l, n.isFetching, n.isSuccess, o.isFetching, o.isSuccess]);
        };
      var Ve = a(9588);
      const Ge = () => {
        var e;
        const { selectedCollectionId: t, setSelectedCollectionId: a } = (0,
          Ve.Z)(),
          { records: r } = Ue();
        return n().createElement(de, {
          count: null != (e = null == r ? void 0 : r.length) ? e : 0,
          draggable: !1,
          id: W.V.ALL,
          isSelected: t === W.V.ALL,
          onTabClick: () => a(W.V.ALL),
          title: n().createElement(v.A, { code: "egstore.library.filter.all" }),
        });
      };
      var Ye = a(30530),
        Ze = a(57506),
        Je = Object.defineProperty,
        Qe = Object.getOwnPropertySymbols,
        Ke = Object.prototype.hasOwnProperty,
        Xe = Object.prototype.propertyIsEnumerable,
        et = (e, t, a) =>
          t in e
            ? Je(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        tt = (e, t) => {
          for (var a in t || (t = {})) Ke.call(t, a) && et(e, a, t[a]);
          if (Qe) for (var a of Qe(t)) Xe.call(t, a) && et(e, a, t[a]);
          return e;
        };
      const at = (0, I.W)(() => ({
          root: (0, u.AH)(
            tt(
              { display: "flex", alignItems: "center", marginBottom: 34 },
              (0, S.hz)(33),
            ),
          ),
          box: (0, u.AH)({ overflow: "hidden" }),
        })),
        rt = ({
          allTab: e,
          favoritesTab: t,
          tabs: a,
          addCollectionButton: r,
        }) => {
          const l = at(),
            { setNodeRef: o } = (0, s.zM)({ id: W.w });
          return n().createElement(
            "div",
            { className: l.root, ref: o },
            e,
            t,
            n().createElement(
              Ye.a,
              {
                alignItems: Ze.ep.Center,
                justify: Ze.cn.Start,
                wrap: Ze.EM.NoWrap,
                className: l.box,
              },
              a,
            ),
            r,
          );
        };
      var nt = Object.defineProperty,
        lt = Object.defineProperties,
        ot = Object.getOwnPropertyDescriptors,
        it = Object.getOwnPropertySymbols,
        ct = Object.prototype.hasOwnProperty,
        st = Object.prototype.propertyIsEnumerable,
        dt = (e, t, a) =>
          t in e
            ? nt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        mt = (e, t) => {
          for (var a in t || (t = {})) ct.call(t, a) && dt(e, a, t[a]);
          if (it) for (var a of it(t)) st.call(t, a) && dt(e, a, t[a]);
          return e;
        },
        ut = (e, t) => lt(e, ot(t));
      const pt = (0, I.W)(() => ({
          root: (0, u.AH)({
            minWidth: 0,
            maxWidth: "max-content",
            flex: "1 1 0",
            overflow: "hidden",
          }),
          dragging: (0, u.AH)({ opacity: 0.25 }),
          selected: (0, u.AH)({ flexGrow: 10 }),
        })),
        gt = (e) => {
          var t = e,
            { forwardRef: a, id: r, isSelected: l } = t,
            o = ((e, t) => {
              var a = {};
              for (var r in e)
                ct.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && it)
                for (var r of it(e))
                  t.indexOf(r) < 0 && st.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["forwardRef", "id", "isSelected"]);
          const {
              active: i,
              attributes: c,
              isDragging: s,
              listeners: d,
            } = (0, m.gl)({ id: r }),
            p = pt();
          return n().createElement(
            "div",
            ut(
              mt(
                mt(
                  {
                    ref: a,
                    className: (0, u.cx)(p.root, {
                      [p.selected]: l,
                      [p.dragging]: s,
                    }),
                  },
                  c,
                ),
                d,
              ),
              { tabIndex: -1 },
            ),
            n().createElement(
              de,
              ut(mt({}, o), {
                draggable: !0,
                enableTooltip: !i,
                id: r,
                isSelected: l,
              }),
            ),
          );
        };
      var bt = a(54029),
        Et = a(12342),
        yt = a(14954),
        vt = a(36940);
      const ft = ({ collectionName: e, onRemoveClick: t, onCancelClick: a }) =>
        n().createElement(vt._, {
          modalTitle: n().createElement(v.A, {
            code: "egstore.library.collection_delete_confirm_modal.title",
          }),
          onCloseClick: a,
          title: n().createElement(v.A, {
            code: "egstore.library.collection_delete_confirm_modal.text_question",
            args: [e],
          }),
          subTitle: n().createElement(v.A, {
            code: "egstore.library.collection_delete_confirm_modal.text_info",
          }),
          secondaryButton: n().createElement(
            yt.u,
            { onClick: a },
            n().createElement(v.A, {
              code: "egstore.library.collection_delete_confirm_modal.cancel",
            }),
          ),
          primaryButton: n().createElement(
            Et.S,
            { onClick: t },
            n().createElement(v.A, {
              code: "egstore.library.collection_delete_confirm_modal.confirm",
            }),
          ),
        });
      var ht = a(25215),
        At = a(38365),
        Ct = Object.defineProperty,
        It = Object.defineProperties,
        St = Object.getOwnPropertyDescriptors,
        Ot = Object.getOwnPropertySymbols,
        xt = Object.prototype.hasOwnProperty,
        kt = Object.prototype.propertyIsEnumerable,
        Pt = (e, t, a) =>
          t in e
            ? Ct(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        wt = (e, t) => {
          for (var a in t || (t = {})) xt.call(t, a) && Pt(e, a, t[a]);
          if (Ot) for (var a of Ot(t)) kt.call(t, a) && Pt(e, a, t[a]);
          return e;
        },
        Nt = (e, t) => It(e, St(t));
      const Lt = (e) =>
        r.createElement(
          ht.T,
          Nt(wt({}, e), {
            hasHeader: !0,
            hasFooter: !0,
            hasPrimaryButton: !0,
            hasSecondaryButton: !0,
            content: r.createElement(
              Ye.a,
              {
                alignItems: Ze.ep.Center,
                justify: Ze.cn.Center,
                fillParent: !0,
              },
              r.createElement(
                Ye.a,
                { direction: Ze.NX.Column, alignItems: Ze.ep.Center },
                r.createElement(
                  At.EA,
                  wt({ variant: At.qd.Text, width: 500, height: 50 }, e),
                ),
                r.createElement(
                  At.EA,
                  Nt(wt({ variant: At.qd.Text, width: 300, height: 50 }, e), {
                    style: { margin: "-10px 0 10px" },
                  }),
                ),
                r.createElement(
                  At.EA,
                  wt({ variant: At.qd.Text, width: 260, height: 30 }, e),
                ),
              ),
            ),
          }),
        );
      var _t = a(28006),
        Tt = a(39460);
      const Mt = (0, bt.T)("collection-remove-confirm-modal"),
        Dt = () => {
          const { closeModal: e, cancelModal: t, getData: a } = Mt(),
            l = (() => {
              const e = (0, b.useDispatch)(),
                { selectedCollectionId: t, setSelectedCollectionId: a } = (0,
                Ve.Z)();
              return (0, r.useCallback)(
                (r) => {
                  e((0, xe.rV)(r)), t === r.collectionId && a(W.V.ALL);
                },
                [e, t, a],
              );
            })(),
            o = (0, Tt.i)(a()),
            i = n().useCallback(() => {
              o && l(o), e();
            }, [o]);
          return n().createElement(
            n().Fragment,
            null,
            n().createElement(ft, {
              collectionName: (null == o ? void 0 : o.name) || "",
              onRemoveClick: i,
              onCancelClick: t,
            }),
          );
        },
        Bt = () => {
          const { isOpen: e, cancelModal: t } = Mt();
          return n().createElement(
            _t.a,
            { isOpen: e, onClose: t },
            n().createElement(
              i.tY,
              { fallback: n().createElement(Lt, null) },
              n().createElement(Dt, null),
            ),
          );
        };
      var Rt = a(41063),
        jt = a(70997);
      const Ht = ({ disabled: e, onClick: t }) =>
          n().createElement(jt.T, {
            horizontal: !0,
            title: n().createElement(v.A, {
              code: "diesel.library.settings.remove_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        Ft = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, Rt.R)(),
            a = (0, g.$)({ suspense: !1 }),
            r = (0, q.S)(),
            { openModal: l } = Mt(),
            o = n().useCallback(() => {
              e && e !== W.V.ALL && e !== r && l(e), t(void 0);
            }, [e, t, l]);
          return n().createElement(Ht, { onClick: o, disabled: !a });
        },
        $t = ({ disabled: e, onClick: t }) =>
          n().createElement(jt.T, {
            horizontal: !0,
            title: n().createElement(v.A, {
              code: "diesel.library.settings.rename_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        zt = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, Rt.R)(),
            a = (0, g.$)({ suspense: !1 }),
            r = (0, q.S)(),
            { openModal: l } = (0, H.$)(),
            o = n().useCallback(() => {
              e && e !== W.V.ALL && e !== r && l(e), t(void 0);
            }, [e, t, l]);
          return n().createElement($t, { onClick: o, disabled: !a });
        };
      var Wt = a(33772),
        qt = a(12075),
        Ut = Object.defineProperty,
        Vt = Object.getOwnPropertySymbols,
        Gt = Object.prototype.hasOwnProperty,
        Yt = Object.prototype.propertyIsEnumerable,
        Zt = (e, t, a) =>
          t in e
            ? Ut(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Jt = (0, I.W)(() => ({
          root: (0, u.AH)({ width: "max-content" }),
        })),
        Qt = (e) => {
          var t = e,
            { selectedCollectionId: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var r in e)
                Gt.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Vt)
                for (var r of Vt(e))
                  t.indexOf(r) < 0 && Yt.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["selectedCollectionId"]);
          const l = Jt();
          return n().createElement(
            Wt.t,
            ((e, t) => {
              for (var a in t || (t = {})) Gt.call(t, a) && Zt(e, a, t[a]);
              if (Vt) for (var a of Vt(t)) Yt.call(t, a) && Zt(e, a, t[a]);
              return e;
            })({}, r),
            n().createElement(
              "div",
              { className: l.root },
              n().createElement(
                qt.W,
                { dense: !0, noBorder: !0 },
                n().createElement(zt, { collectionId: a }),
                n().createElement(Ft, { collectionId: a }),
              ),
            ),
          );
        };
      var Kt = a(3017),
        Xt = Object.defineProperty,
        ea = Object.getOwnPropertySymbols,
        ta = Object.prototype.hasOwnProperty,
        aa = Object.prototype.propertyIsEnumerable,
        ra = (e, t, a) =>
          t in e
            ? Xt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const na = ({ collectionId: e, isTruncated: t }) => {
        const a = n().useRef(null),
          { active: r, setNodeRef: l } = (0, m.gl)({ id: e }),
          { selectedCollectionId: o, setSelectedCollectionId: i } = (0, Ve.Z)(),
          {
            openContextMenu: c,
            openContextMenuWithKeyboard: s,
            contextMenuProps: d,
          } = (0, Kt.f)(`collection_tab_context:${e}`),
          u = (0, Tt.i)(e),
          { records: p } = Ue(e),
          g = o === e;
        n().useEffect(() => {
          r && d.onClose();
        }, [r]);
        const b = n().useCallback(
          (e) => {
            l(e), (a.current = e);
          },
          [l],
        );
        return n().createElement(
          n().Fragment,
          null,
          n().createElement(gt, {
            count: (null == p ? void 0 : p.length) || 0,
            forwardRef: b,
            id: e,
            isSelected: g,
            isTruncated: t,
            onContextMenu: c,
            onKeyDown: s,
            onTabClick: () => i(e),
            title: (null == u ? void 0 : u.name) || "",
          }),
          n().createElement(
            Qt,
            ((e, t) => {
              for (var a in t || (t = {})) ta.call(t, a) && ra(e, a, t[a]);
              if (ea) for (var a of ea(t)) aa.call(t, a) && ra(e, a, t[a]);
              return e;
            })({ selectedCollectionId: e, anchorElement: a.current }, d),
          ),
        );
      };
      var la = a(68813),
        oa = a(64032);
      const ia = (0, I.W)((e) => ({
          dragImage: (0, u.AH)({
            position: "relative",
            top: -30,
            height: "auto",
            width: "max-content",
            padding: "10px 20px",
            borderRadius: oa.Vq,
            boxShadow: `0px 5px 10px ${oa.hb}`,
            background: e.level1,
            textAlign: "center",
          }),
        })),
        ca = ({ name: e, id: t }) => {
          var a;
          const r = ia(),
            { items: l } = Me(t);
          return n().createElement(
            "div",
            { className: r.dragImage },
            n().createElement(
              la.Ay,
              { textLevel: G.qo.PRIMARY },
              e,
              " (",
              null != (a = null == l ? void 0 : l.length) ? a : 0,
              ")",
            ),
          );
        },
        sa = () => {
          var e;
          const { selectedCollectionId: t, setSelectedCollectionId: a } = (0,
            Ve.Z)(),
            r = (0, q.S)(),
            { records: l } = Ue(r);
          return n().createElement(de, {
            count: null != (e = null == l ? void 0 : l.length) ? e : 0,
            draggable: !1,
            id: r,
            isSelected: t === r,
            onTabClick: () => a(r),
            title: n().createElement(v.A, {
              code: "egstore.library.collections.tabs.favorites",
            }),
          });
        };
      var da = a(19155),
        ma = a(36255);
      var ua = a(96157);
      const pa = (e) => {
        const t = n().useRef();
        return (
          n().useEffect(() => {
            t.current = e;
          }, [e]),
          t.current
        );
      };
      var ga = a(35433);
      const ba = (0, I.W)((e) => ({
          draggingRight: (0, u.AH)(
            (0, S.fo)({ style: "solid", size: 2, color: e.accent }),
            (0, S.wv)(13),
          ),
          draggingLeft: (0, u.AH)(
            (0, S.Kz)({ style: "solid", size: 2, color: e.accent }),
            (0, S.zG)(13),
          ),
          title: ce(e),
        })),
        Ea = () => {
          const e = ba(),
            t = (0, ma.N)(),
            a = (0, da.Z)(),
            { selectedCollectionId: l } = (0, Ve.Z)(),
            o = (() => {
              const e = (0, ma.N)(),
                t = (0, ua.useLocalization)(),
                a = (0, r.useCallback)(
                  (t) => {
                    var a;
                    return (
                      (null == (a = e.find((e) => e.collectionId === t))
                        ? void 0
                        : a.name) || ""
                    );
                  },
                  [e],
                );
              return {
                onDragStart: ({ active: e }) =>
                  t("egstore.library.collections.announcements.drag_start", [
                    a(e.id),
                  ]),
                onDragOver: ({ active: e, over: r }) =>
                  r
                    ? t(
                        "egstore.library.collections.announcements.drag_over_enter",
                        [a(e.id), a(r.id)],
                      )
                    : t(
                        "egstore.library.collections.announcements.drag_over_leave",
                        [a(e.id)],
                      ),
                onDragEnd: ({ active: e, over: r }) =>
                  r
                    ? t(
                        "egstore.library.collections.announcements.drag_end_over",
                        [a(e.id), a(r.id)],
                      )
                    : t("egstore.library.collections.announcements.drag_end", [
                        a(e.id),
                      ]),
                onDragCancel: ({ active: e }) =>
                  t("egstore.library.collections.announcements.drag_cancel", [
                    a(e.id),
                  ]),
              };
            })(),
            i = (() => {
              const e = (0, b.useDispatch)();
              return (0, r.useCallback)(
                (t) => {
                  e((0, xe.Vi)(t));
                },
                [e],
              );
            })(),
            g = (0, q.S)(),
            E = n().useRef(null),
            [y, v] = n().useState(null),
            [f, h] = n().useState({}),
            [A, C] = n().useState([]),
            [I, S] = n().useState(null),
            [O, x] = n().useState(0),
            [k, P] = n().useState(""),
            [w, N] = n().useState(0),
            [L, _] = n().useState(null),
            [T, M] = n().useState(!1),
            D = (0, s.FR)(
              (0, s.MS)(s.AN, { activationConstraint: { distance: 20 } }),
              (0, s.MS)(s.uN, {
                coordinateGetter: m.JR,
                keyboardCodes: {
                  start: [ga.nC.Space],
                  cancel: [ga.nC.Escape],
                  end: [ga.nC.Space, ga.nC.Enter],
                },
              }),
            ),
            B = pa(O),
            R = pa(k),
            j = pa(w);
          n().useEffect(() => {
            null === y && w && v(w);
          }, [w]);
          const H = n().useCallback((t) => {
              t &&
                (t.classList.remove(...t.classList), t.classList.add(e.title));
            }, []),
            F = n().useCallback(() => {
              S(null), _(null), N(0), x(0), M(!1), v(null);
            }, []),
            z = (e) => {
              if (
                ((e.code !== ga.nC.ArrowLeft && e.code !== ga.nC.ArrowRight) ||
                  _(e.code),
                e.code === ga.nC.Escape && E.current)
              ) {
                _(null);
                const e = E.current.querySelectorAll(
                  "[data-dropzoneitem=true]",
                );
                e &&
                  e.forEach((e) => {
                    H(e);
                  });
              }
            };
          n().useEffect(
            () => (
              E.current && E.current.addEventListener("keydown", z),
              () => {
                var e;
                return null == (e = E.current)
                  ? void 0
                  : e.removeEventListener("keydown", z);
              }
            ),
            [E.current],
          );
          const W = n().useCallback(
              (e) => {
                var a;
                const r =
                  null == (a = E.current)
                    ? void 0
                    : a.querySelectorAll("[data-dropzoneitem=true]");
                r &&
                  r.forEach((e) => {
                    H(e);
                  }),
                  (function ({
                    ev: e,
                    customCollections: t,
                    dragDirection: a,
                    isOverSame: r,
                    initialDragDirection: n,
                    reorderCollections: l,
                    favCollectionId: o,
                  }) {
                    const { active: i, over: c } = e;
                    if (!c) return;
                    if (i.id !== c.id) {
                      const e = t.findIndex((e) => e.collectionId === i.id);
                      let s = t.findIndex((e) => e.collectionId === c.id);
                      if (-1 === e || -1 === s) return;
                      if (e - s === a) return;
                      r && a !== n && (-1 === a ? s-- : s++);
                      const d = (0, m.be)(t, e, s);
                      if (!(0, p.A)(d, t)) {
                        const e = d.map((e) => e.collectionId);
                        e.unshift(o), l(e);
                      }
                    }
                  })({
                    ev: e,
                    customCollections: t,
                    dragDirection: w,
                    isOverSame: T,
                    initialDragDirection: y,
                    reorderCollections: i,
                    favCollectionId: g,
                  }),
                  F();
              },
              [R, w, T, y],
            ),
            U = n().useCallback(
              (e) => {
                const a = t.find((t) => t.collectionId === e.active.id);
                a && S(a);
              },
              [t],
            ),
            V = n().useCallback(
              (t) => {
                var a, r, n, l, o;
                x(t.delta.x);
                const i =
                  L || (null == (a = t.over) ? void 0 : a.id) === R
                    ? null == (n = E.current)
                      ? void 0
                      : n.querySelector(
                          `[id=${ie(null == (r = t.over) ? void 0 : r.id)}]`,
                        )
                    : null == (l = E.current)
                      ? void 0
                      : l.querySelector(`[id=${ie(R)}]`);
                if ((null == (o = t.over) ? void 0 : o.id) !== R || L) H(i);
                else {
                  let t;
                  w !== j &&
                    (M(!0),
                    (t = 1 === w ? e.draggingRight : e.draggingLeft),
                    H(i),
                    i && i.classList.add((0, u.cx)(e.title, t)));
                }
              },
              [R, L, w, j],
            ),
            G = n().useCallback(
              (t) => {
                var a, r, n, l, o;
                if (t.active.id === (null == (a = t.over) ? void 0 : a.id))
                  return;
                let i;
                M(!1),
                  P(
                    null != (n = null == (r = t.over) ? void 0 : r.id) ? n : "",
                  ),
                  (i = 1 === w ? e.draggingRight : e.draggingLeft);
                const c =
                  null == (o = E.current)
                    ? void 0
                    : o.querySelector(
                        `[id=${ie(null == (l = t.over) ? void 0 : l.id)}]`,
                      );
                c && c.classList.add((0, u.cx)(e.title, i));
              },
              [w],
            );
          return (
            n().useEffect(() => {
              L
                ? L === ga.nC.ArrowRight
                  ? N(1)
                  : L === ga.nC.ArrowLeft && N(-1)
                : B && O && (B < O ? N(1) : B > O && N(-1));
            }, [B, O, L]),
            n().useEffect(() => {
              if (E.current) {
                const e = Array.from(
                  E.current.querySelectorAll("[data-dropzoneitem=true]"),
                );
                C(e);
              }
            }, [t]),
            n().useEffect(() => {
              const e = {};
              A.forEach((t) => {
                const a = t.id.substring(t.id.indexOf("-") + 1);
                e[a] = t.scrollWidth > t.clientWidth;
              }),
                h(e);
            }, [A, l, t]),
            n().createElement(
              n().Fragment,
              null,
              n().createElement(
                s.Mp,
                {
                  sensors: D,
                  collisionDetection: s.y$,
                  onDragEnd: W,
                  onDragStart: U,
                  onDragOver: G,
                  onDragMove: V,
                  accessibility: { announcements: o },
                },
                n().createElement(
                  m.gB,
                  { items: t.map((e) => e.collectionId), strategy: m.m$ },
                  n().createElement(
                    "div",
                    { ref: E, role: "tablist" },
                    a &&
                      n().createElement(rt, {
                        allTab: n().createElement(Ge, null),
                        favoritesTab: n().createElement(sa, null),
                        tabs: t.map((e) =>
                          n().createElement(na, {
                            key: e.collectionId,
                            collectionId: e.collectionId,
                            isTruncated: f[e.collectionId],
                          }),
                        ),
                        addCollectionButton: n().createElement($, null),
                      }),
                  ),
                ),
                E.current
                  ? (0, c.createPortal)(
                      n().createElement(
                        s.Hd,
                        { style: { cursor: "copy" }, modifiers: [d.dU] },
                        I
                          ? n().createElement(ca, {
                              name: I.name,
                              id: I.collectionId,
                            })
                          : null,
                      ),
                      E.current,
                    )
                  : null,
              ),
            )
          );
        };
      const ya = ({ animation: e }) =>
        n().createElement(rt, {
          allTab: n().createElement(At.EA, {
            height: 30,
            width: 40,
            animation: e,
          }),
          favoritesTab: n().createElement(At.EA, {
            height: 30,
            width: 70,
            style: { marginRight: "30px", marginLeft: "30px" },
            animation: e,
          }),
          tabs: [],
          addCollectionButton: n().createElement(At.EA, {
            variant: At.qd.Circle,
            height: 50,
            width: 50,
            animation: e,
          }),
        });
      var va = a(64886),
        fa = a(13372),
        ha = a.n(fa),
        Aa = a(14160),
        Ca = a(45580);
      const Ia = (0, I.W)((e) => ({
          root: (0, u.AH)({
            display: "flex",
            alignItems: "center",
            background: e.backgroundOverlay,
            borderRadius: oa.YM,
            marginBottom: 20,
          }),
          content: (0, u.AH)({
            display: "flex",
            flexDirection: "column",
            padding: 20,
            width: "100%",
            [Ca.aq.xl]: { alignItems: "center", flexDirection: "row" },
          }),
          textContent: (0, u.AH)({ [Ca.aq.md]: { maxWidth: 700 } }),
          title: (0, u.AH)({
            marginBottom: 5,
            [Ca.aq.xxl]: { marginBottom: 8 },
            h2: {
              fontSize: 22,
              lineHeight: "32px",
              [Ca.aq.xxl]: { fontSize: 26, lineHeight: "38px" },
            },
          }),
          body: (0, u.AH)({
            span: {
              fontSize: 14,
              lineHeight: "20px",
              [Ca.aq.xxl]: { fontSize: 16, lineHeight: "22px" },
            },
          }),
          image: (0, u.AH)({ height: 160, width: 160, flexShrink: 0 }),
          buttonDiv: (0, u.AH)({
            display: "flex",
            marginTop: 15,
            "button:first-child": (0, S.hz)(10),
            [Ca.aq.xl]: {
              marginTop: 0,
              height: "100%",
              width: "100%",
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            },
          }),
        })),
        Sa = ({
          image: e,
          title: t,
          body: a,
          hideButton: r,
          newCollectionButton: l,
        }) => {
          const o = Ia();
          return n().createElement(
            "div",
            {
              className: o.root,
              "data-testid": "library-collections-intro-banner",
            },
            n().createElement("div", { className: o.image }, e),
            n().createElement(
              "div",
              { className: o.content },
              n().createElement(
                "div",
                { className: o.textContent },
                n().createElement(
                  "div",
                  { className: o.title },
                  n().createElement(Aa.A.Heading, { headingLevel: 2 }, t),
                ),
                n().createElement(
                  "div",
                  { className: o.body },
                  n().createElement(la.Ay, { textLevel: G.qo.SECONDARY }, a),
                ),
              ),
              n().createElement("div", { className: o.buttonDiv }, r, l),
            ),
          );
        };
      var Oa = a(18442),
        xa = a(43380),
        ka = a(2758),
        Pa = a(22792),
        wa = a(41503),
        Na = a(92637);
      const La = (0, u.AH)({ marginBottom: 20 }),
        _a = () => {
          const e = (0, b.useSelector)(k.k),
            t = (0, b.useSelector)(xa.n9),
            a = (0, g.$)(),
            r = (0, ma.N)(),
            { openModal: l } = (0, H.$)(),
            { value: o, setValue: i } = (0, Oa.$)({
              keyFn: () => `EGS_LIBRARY_INTRO_BANNER_HIDDEN_${t}`,
              localStorageEnabled: Boolean(t),
              initialValue: !1,
            }),
            c = n().useMemo(
              () => !o && !(null == r ? void 0 : r.length) && a,
              [o, r, a],
            );
          n().useEffect(() => {
            (null == r ? void 0 : r.length) && !o && i(!0);
          }, [null == r ? void 0 : r.length]);
          const s = () =>
            e
              ? n().createElement(
                  "div",
                  { className: La },
                  n().createElement(ka.NN, {
                    image: n().createElement(Na.o, {
                      src: ha(),
                      showBrokenOnError: !0,
                    }),
                    title: n().createElement(v.A, {
                      code: "egstore.library.favorites_folders.intro.title",
                    }),
                    content: n().createElement(v.A, {
                      code: "egstore.library.favorites_folders.intro.text",
                    }),
                    cta: n().createElement(
                      va.$,
                      { variant: x.ml.PRIMARY, onClick: () => l() },
                      n().createElement(v.A, {
                        code: "egstore.library.favorites_folders.intro.button.new",
                      }),
                    ),
                    secondaryCta: n().createElement(
                      va.$,
                      { variant: x.ml.OUTLINE, onClick: () => i(!0) },
                      n().createElement(v.A, {
                        code: "egstore.library.favorites_folders.intro.button.hide",
                      }),
                    ),
                    imageOrientation: ka.GI.SQUARE,
                    noBorder: !0,
                  }),
                )
              : n().createElement(Sa, {
                  image: n().createElement(Na.o, {
                    src: ha(),
                    showBrokenOnError: !0,
                  }),
                  title: n().createElement(v.A, {
                    code: "egstore.library.favorites_folders.intro.title",
                  }),
                  body: n().createElement(v.A, {
                    code: "egstore.library.favorites_folders.intro.text",
                  }),
                  hideButton: n().createElement(
                    Pa.rp,
                    {
                      buttonWidth: f.Rj.AUTO,
                      buttonHeight: f.eL.DENSED,
                      onClick: () => i(!0),
                    },
                    n().createElement(v.A, {
                      code: "egstore.library.favorites_folders.intro.button.hide",
                    }),
                  ),
                  newCollectionButton: n().createElement(
                    wa.e6,
                    {
                      buttonWidth: f.Rj.AUTO,
                      buttonHeight: f.eL.DENSED,
                      onClick: () => l(),
                    },
                    n().createElement(v.A, {
                      code: "egstore.library.favorites_folders.intro.button.new",
                    }),
                  ),
                });
          return c ? n().createElement(s, null) : null;
        };
      var Ta = a(13758),
        Ma = a(63246),
        Da = a(90934),
        Ba = a(91328);
      const Ra = (0, I.W)(() => ({
          root: (0, u.AH)({ marginTop: 40, textAlign: "center" }),
          image: (0, u.AH)({
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
          }),
          titleDiv: (0, u.AH)({ marginBottom: 30 }),
        })),
        ja = ({
          image: e,
          title: t,
          subtitle: a,
          buttonText: r,
          onButtonClick: l,
        }) => {
          const o = (0, b.useSelector)(k.k),
            i = Ra(),
            c = () =>
              o
                ? n().createElement(
                    "div",
                    { className: i.titleDiv },
                    n().createElement(
                      z.E,
                      { variant: x.ZJ.HMD, color: x.Uf.PRIMARY },
                      t,
                    ),
                    a &&
                      n().createElement(
                        z.E,
                        { variant: x.ZJ.HMD, color: x.Uf.PRIMARY },
                        a,
                      ),
                  )
                : n().createElement(
                    "div",
                    { className: i.titleDiv },
                    n().createElement(Aa.A.Heading, { headingLevel: 2 }, t),
                    a &&
                      n().createElement(Aa.A.Heading, { headingLevel: 3 }, a),
                  ),
            s = () =>
              o
                ? n().createElement(
                    va.$,
                    { variant: x.ml.PRIMARY, size: x.sp.LG, onClick: l },
                    r,
                  )
                : n().createElement(wa.e6, { onClick: l }, r);
          return n().createElement(
            "div",
            { className: i.root, "data-testid": "EmptyCollectionMessage" },
            n().createElement(
              Ba.x.Container,
              null,
              n().createElement(Ba.x.Item, { xs: 2 }),
              n().createElement(
                Ba.x.Item,
                { xs: 8 },
                n().createElement(
                  Ye.a,
                  { centerContent: !0, direction: Ze.NX.Column },
                  e && n().createElement("div", { className: i.image }, e),
                  n().createElement(c, null),
                  n().createElement(s, null),
                ),
              ),
              n().createElement(Ba.x.Item, { xs: 2 }),
            ),
          );
        };
      var Ha = a(44316),
        Fa = a(72890),
        $a = a(2713),
        za = a(99734),
        Wa = a(4192);
      const qa = (0, u.AH)({
          userSelect: "none",
          width: 32,
          height: 35,
          display: "inline-block",
          fill: "currentColor",
          flexShrink: 0,
          fontSize: "inherit",
        }),
        Ua = () =>
          n().createElement(
            "svg",
            {
              className: qa,
              viewBox: "0 0 32 35",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n().createElement(
              "g",
              null,
              n().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.4411 18.599L26.4055 15.7685L5 4L11.2404 27.6167L15.9136 20.5737L21.5086 27.735L24.0361 25.7603L18.4411 18.599V18.599Z",
                fill: "currentColor",
              }),
              n().createElement("path", {
                d: "M26.5729 16.2396L27.6221 15.8667L26.6464 15.3303L5.24089 3.56185L4.21854 2.99978L4.51659 4.12773L10.757 27.7445L11.0415 28.8209L11.6571 27.8932L15.9467 21.4282L21.1146 28.0428L21.4225 28.4368L21.8165 28.129L24.344 26.1543L24.738 25.8464L24.4302 25.4524L19.2622 18.8378L26.5729 16.2396Z",
                stroke: "black",
                strokeOpacity: "0.8",
              }),
            ),
          );
      var Va = a(19469),
        Ga = a(15498);
      const Ya = (0, Ga.K)(
        r.createElement(
          r.Fragment,
          null,
          r.createElement("path", {
            d: "M2.54611 3.01118H4.91013L4.91013 4.51118H2.54611L2.54418 4.51122V6.9462C2.54418 7.9908 2.97877 9.00017 3.76472 9.75007C4.1056 10.0753 4.50043 10.3399 4.93013 10.5354C4.9768 11.1312 5.10413 11.7056 5.30173 12.2485C4.33972 12.0056 3.4499 11.5229 2.72924 10.8353C1.65476 9.81014 1.04418 8.41196 1.04418 6.9462V4.47862C1.04418 3.63538 1.75019 3.01118 2.54611 3.01118Z",
          }),
          r.createElement("path", {
            d: "M16.9676 12.4289C17.217 11.9629 17.3962 11.457 17.4919 10.924C17.5445 10.631 17.5717 10.3299 17.5717 10.0227V2.95508C17.5717 2.87301 17.5116 2.79334 17.3984 2.71734C17.3752 2.70178 17.3498 2.68637 17.3223 2.67113C16.6192 2.28231 14.5108 2 12.019 2C8.95219 2 6.46606 2.42766 6.46606 2.95518L6.46607 10.0228C6.46607 11.9582 7.55378 13.6513 9.17779 14.5759C10.009 15.0491 10.9806 15.3209 12.0188 15.3209C14.1776 15.3209 16.0489 14.1455 16.9676 12.4289Z",
          }),
          r.createElement("path", {
            d: "M19.2274 12.1013C19.0662 12.1573 18.9023 12.2064 18.7363 12.2484C18.9339 11.7054 19.0612 11.131 19.1079 10.5352C19.5377 10.3396 19.9321 10.075 20.2726 9.75007C21.0586 9.00017 21.4932 7.9908 21.4932 6.9462V4.51122L21.4913 4.51118H19.1892V3.01118H21.4913C22.2872 3.01118 22.9932 3.63538 22.9932 4.47862V6.9462C22.9932 8.41196 22.3826 9.81014 21.3081 10.8353C20.7117 11.4044 19.9995 11.8329 19.2274 12.1013Z",
          }),
          r.createElement("path", {
            d: "M16.8006 20.2556C16.8006 21.219 14.6597 22 12.0188 22C9.37795 22 7.2371 21.219 7.2371 20.2556C7.2371 19.9407 7.46578 19.6453 7.86585 19.3903L7.86997 19.3876L8.77579 18.8998C9.65602 18.4256 10.3873 17.7355 10.8937 16.9008C11.0344 16.6691 11.3974 16.4983 12.0188 16.4983C12.6402 16.4983 13.0033 16.6691 13.1439 16.9008C13.6504 17.7355 14.3816 18.4256 15.2619 18.8998L16.1677 19.3876L16.1793 19.3951C16.5747 19.649 16.8006 19.9426 16.8006 20.2556Z",
          }),
        ),
        "Trophy",
      );
      var Za = a(76957),
        Ja = a(99445),
        Qa = a(51496),
        Ka = a(37554),
        Xa = Object.defineProperty,
        er = Object.defineProperties,
        tr = Object.getOwnPropertyDescriptors,
        ar = Object.getOwnPropertySymbols,
        rr = Object.prototype.hasOwnProperty,
        nr = Object.prototype.propertyIsEnumerable,
        lr = (e, t, a) =>
          t in e
            ? Xa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        or = (e, t) => {
          for (var a in t || (t = {})) rr.call(t, a) && lr(e, a, t[a]);
          if (ar) for (var a of ar(t)) nr.call(t, a) && lr(e, a, t[a]);
          return e;
        },
        ir = (e, t) => er(e, tr(t));
      const cr = (0, I.W)((e, t) => ({
          root: (0, u.AH)({
            position: "relative",
            height: 310,
            overflow: "hidden",
            pointerEvents: "none",
            width: 380,
            [Ca.aq.xl]: { width: 420 },
          }),
          libraryCard: (0, u.AH)(
            ir(
              or(
                { position: "absolute", opacity: 0.6 },
                (0, S.P8)((0, S.kb)(16), (0, S.Jh)("left")),
              ),
              {
                top: -110,
                width: 160,
                [Ca.aq.xl]: { top: -160, width: 190 },
                "&::before": or(
                  ir(or({}, Y.j), {
                    position: "absolute",
                    right: -16,
                    top: -16,
                    left: -16,
                    bottom: -16,
                    borderRadius: oa.YM,
                  }),
                  !t && { backgroundColor: e.backgroundOverlay },
                ),
              },
            ),
          ),
          achievements: (0, u.AH)({ display: "flex", alignItems: "center" }),
          trophyIcon: (0, u.AH)((0, S.hz)(4), {
            width: 15,
            height: 15,
            fontSize: 14,
            color: e.textSecondary,
          }),
          toggleBtn: (0, u.AH)({ bottom: 20 }),
          menu: (0, u.AH)(
            ir(or({ position: "absolute", top: 140 }, (0, S.kb)(134)), {
              boxShadow: `0 0 20px 0 ${oa.Fk}`,
              width: 240,
              [Ca.aq.xl]: { width: 280 },
            }),
          ),
          gradiant: (0, u.AH)({
            position: "absolute",
            width: "100%",
            height: 100,
            background: (0, Fa.gz)({
              direction: { vertical: "top" },
              colors: [(0, Ha.LV)(e.background, 0).rgb(), e.background],
            }),
          }),
          cursor: (0, u.AH)(
            or({ position: "absolute", bottom: 0 }, (0, S.kb)(220)),
          ),
        })),
        sr = ({ title: e, imageSrc: t }) => {
          const a = (0, b.useSelector)(k.k),
            r = n().useRef(null),
            l = cr(a);
          return (
            n().useEffect(() => {
              var e;
              if (r.current) {
                (null == (e = r.current)
                  ? void 0
                  : e.querySelectorAll("button")
                ).forEach((e) => {
                  e.setAttribute("tabIndex", "-1");
                });
              }
            }, []),
            n().createElement(
              "div",
              { ref: r, className: l.root, "data-testid": "TutorialImage" },
              n().createElement(
                "div",
                { className: l.libraryCard },
                n().createElement(Wa.G, {
                  image: n().createElement($a.n, {
                    image: n().createElement(Na.o, { alt: e, src: t }),
                  }),
                  title: n().createElement("span", null, e),
                  achievements: n().createElement(
                    "div",
                    { className: l.achievements },
                    n().createElement(
                      "div",
                      { className: l.trophyIcon },
                      n().createElement(Ya, null),
                    ),
                    n().createElement(
                      Za.A,
                      { textLevel: G.qo.SECONDARY },
                      "33/100",
                    ),
                  ),
                  subtitle: n().createElement(za.h8, null),
                  renderSettingsMenu: ({ button: e }) =>
                    n().createElement(
                      "div",
                      { className: (0, u.cx)(l.toggleBtn, e) },
                      n().createElement(Va.k, null),
                    ),
                }),
              ),
              n().createElement(
                "div",
                { className: l.menu },
                n().createElement(
                  qt.W,
                  { dense: !0, noBorder: !0 },
                  n().createElement(Ja.D, {
                    title: n().createElement(v.A, {
                      code: "diesel.library.settings.go_to_store_page",
                    }),
                  }),
                  n().createElement(Qa.g, null),
                  n().createElement(Ja.D, {
                    title: n().createElement(v.A, {
                      code: "diesel.library.settings.add_to_favorites",
                    }),
                  }),
                  n().createElement(Ka.Y, {
                    title: n().createElement(v.A, {
                      code: "diesel.library.settings.add_to_collection",
                    }),
                    selected: !0,
                  }),
                ),
              ),
              n().createElement("div", { className: l.gradiant }),
              n().createElement(
                "div",
                { className: l.cursor },
                n().createElement(Ua, null),
              ),
            )
          );
        };
      var dr = a(3903),
        mr = a(27954);
      const ur = ({
          libraryItemTitle: e,
          libraryItemImageSrc: t = "",
          onButtonClick: a,
        }) => {
          const r = (0, mr.B2)(),
            l = e || r("diesel.main.navigation.epic_games") || "";
          return n().createElement(ja, {
            image: n().createElement(sr, { title: l, imageSrc: t }),
            title: n().createElement(v.A, {
              code: "egstore.library.collections.empty_collection_custom.title",
            }),
            buttonText: n().createElement(v.A, {
              code: "egstore.library.collections.empty_collection_custom.button",
            }),
            onButtonClick: a,
          });
        },
        pr = ({ onActionClick: e }) => {
          const { records: t } = Ue(),
            a = n().useMemo(() => {
              var e;
              const a = Math.floor(Math.random() * t.length - 1);
              return null == (e = t[a]) ? void 0 : e.catalogItem;
            }, [t]),
            r = n().useMemo(() => (0, dr.cG)(a), [a]);
          return n().createElement(ur, {
            libraryItemTitle: null == a ? void 0 : a.title,
            libraryItemImageSrc: r,
            onButtonClick: e,
          });
        };
      var gr = a(85516);
      const br = ({ onActionClick: e }) =>
        n().createElement(ja, {
          image: n().createElement(
            "div",
            { style: { fontSize: 36 } },
            n().createElement(gr.C, null),
          ),
          title: n().createElement(v.A, {
            code: "egstore.library.collections.empty_collection_favorites.title",
          }),
          subtitle: n().createElement(v.A, {
            code: "egstore.library.collections.empty_collection_favorites.text",
          }),
          buttonText: n().createElement(v.A, {
            code: "egstore.library.collections.empty_collection_favorites.button",
          }),
          onButtonClick: e,
        });
      var Er = a(82940),
        yr = a(80882),
        vr = a(36106),
        fr = a(53401);
      const hr = ({
        title: e,
        activeFilters: t,
        type: a,
        filters: r,
        storeTags: l,
      }) => {
        const [o, i] = n().useState(!1);
        return (
          n().useEffect(() => {
            const e = l.filter((e) => e.count > 0);
            t.length || e.length || i(!0);
          }, [l, t]),
          n().useEffect(() => {
            o && i(!1);
          }, [o]),
          n().createElement(
            vr.A,
            {
              "data-testid": `library-filter-section-${a}`,
              renderTitle: ({ isCollapsed: t, toggleCollapsed: a }) => (
                o && !t && a(),
                n().createElement(fr.A, {
                  isCollapsed: t,
                  text: e || "",
                  toggleCollapsed: a,
                })
              ),
              initialCollapseState: !t.length,
              collapsible: !0,
            },
            r,
          )
        );
      };
      var Ar = a(46673),
        Cr = a(88239);
      const Ir = ({
          title: e,
          storeTags: t,
          onFilterClick: a,
          activeFilters: r,
          type: l,
        }) =>
          n().createElement(hr, {
            title: e,
            type: l,
            activeFilters: r,
            storeTags: t,
            filters: t.map((e) => {
              const t = !!r && (r.includes(e.name) || r.includes(e.id)),
                o = 0 === e.count;
              let i;
              return (
                (i = o && t ? "(0)" : o ? "" : `(${e.count})`),
                n().createElement(Cr.A, {
                  onClick: () => a({ type: l, name: e.name, id: e.id }),
                  text:
                    l === Ar.bn.GENRE ||
                    l === Ar.bn.FEATURE ||
                    l === Ar.bn.SUBSCRIPTION
                      ? `${e.name} ${i}`
                      : n().createElement(mr.QB, {
                          code: `egstore.library.filter_side_panel.${e.name}`,
                          args: [i],
                        }),
                  key: e.id,
                  checked: t,
                  disabled: o,
                })
              );
            }),
          }),
        Sr = ({ onFilterClick: e, storeTags: t, activeFilters: a }) =>
          n().createElement(Ir, {
            title: n().createElement(mr.QB, {
              code: "diesel.store.browse.categories",
            }),
            storeTags: t || [],
            onFilterClick: e,
            activeFilters: a,
            type: Ar.bn.CATEGORY,
          });
      var Or = a(93541),
        xr = a(36233),
        kr = a(53631);
      const Pr = () => {
        const e = (0, Ta.useLocation)(),
          t = (0, b.useDispatch)(),
          a = (0, r.useMemo)(
            () => new URLSearchParams(e.search || ""),
            [e.search],
          ),
          n = (0, r.useCallback)(() => {
            t(
              (0, Or.VC)((0, xr.generateRoutePath)(kr.A.LibraryPath), {
                search: "",
              }),
            );
          }, [t]);
        return (0, r.useMemo)(() => {
          var e, t, r, l, o, i, c;
          const s = null != (e = a.get("action")) ? e : void 0,
            d = null != (t = a.get("sort")) ? t : void 0,
            m = null != (r = a.get("appName")) ? r : "",
            u = null != (l = a.get("sandboxId")) ? l : "",
            p = null != (o = a.get("offerId")) ? o : "",
            g = null != (i = a.get("catalogItemId")) ? i : "",
            b =
              u && g && m
                ? { namespace: u, catalogItemId: g, appName: m }
                : void 0,
            E = p && u ? { offerId: p, sandboxId: u } : void 0,
            y = g && u ? { catalogItemId: g, sandboxId: u } : void 0,
            v = null != (c = a.get("collectionId")) ? c : void 0;
          return {
            action: s,
            item: b,
            sort: d,
            resetQueryParams: n,
            offerItem: E,
            catalogItem: y,
            collectionId: v,
          };
        }, [a, n]);
      };
      var wr = a(13854),
        Nr = a(68196),
        Lr = a(55326);
      const _r = (0, I.W)((e) => ({
          icon: (0, u.AH)((0, S.zG)(10), {
            svg: {
              fontSize: 10,
              path: { stroke: e.textPrimary, strokeWidth: 2 },
            },
          }),
        })),
        Tr = ({ onFilterClick: e }) => {
          const t = _r(),
            { resetQueryParams: a } = Pr(),
            { value: r } = (0, Oa.$)({
              keyFn: () => wr.V,
              localStorageEnabled: !0,
              initialValue: "",
            });
          return n().createElement(vr.A, {
            "data-testid": "library-filter-section-custom-results",
            renderTitle: () =>
              n().createElement(Cr.A, {
                onClick: () => {
                  e({
                    type: Ar.bn.CATALOG_ITEM_ID,
                    name: Ar.bn.CATALOG_ITEM_ID,
                  }),
                    a();
                },
                text: n().createElement(Lr.A, {
                  lines: 2,
                  text: null != r ? r : "",
                }),
                checked: !0,
                icon: n().createElement(
                  "div",
                  { className: t.icon },
                  n().createElement(Nr.U, null),
                ),
              }),
          });
        },
        Mr = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(Ir, {
            title: n().createElement(mr.QB, {
              code: "diesel.store.browse.features",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: Ar.bn.FEATURE,
          }),
        Dr = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(Ir, {
            title: n().createElement(mr.QB, {
              code: "diesel.store.browse.genre",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: Ar.bn.GENRE,
          });
      var Br = Object.defineProperty,
        Rr = Object.defineProperties,
        jr = Object.getOwnPropertyDescriptors,
        Hr = Object.getOwnPropertySymbols,
        Fr = Object.prototype.hasOwnProperty,
        $r = Object.prototype.propertyIsEnumerable,
        zr = (e, t, a) =>
          t in e
            ? Br(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Wr = ({
          tagsForDisplay: e,
          currentTags: t,
          name: a,
          message: r,
        }) => {
          const n = t.find((e) => e.name === a),
            l = e.find((e) => e.name === a);
          if (l) l.count = l.count + 1;
          else {
            const t =
              ((o = ((e, t) => {
                for (var a in t || (t = {})) Fr.call(t, a) && zr(e, a, t[a]);
                if (Hr) for (var a of Hr(t)) $r.call(t, a) && zr(e, a, t[a]);
                return e;
              })({}, n)),
              Rr(o, jr({ message: r, count: 1 })));
            e.push(t);
          }
          var o, i;
          return (
            (i = "message"),
            e.sort((e, t) => {
              var a, r;
              const n = (null == (a = e[i]) ? void 0 : a.toUpperCase()) || "",
                l = (null == (r = t[i]) ? void 0 : r.toUpperCase()) || "";
              return n.localeCompare(l);
            })
          );
        },
        qr = (e, t) =>
          e.map((e) => {
            const a = t.find((t) => t.id === e.id);
            return a || ((e.count = 0), e);
          }),
        Ur = [
          {
            id: `${Ar.Ix.GAMES}-filter`,
            name: Ar.Ix.GAMES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${Ar.Ix.ENGINES}-filter`,
            name: Ar.Ix.ENGINES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${Ar.Ix.SOFTWARE}-filter`,
            name: Ar.Ix.SOFTWARE,
            groupName: "category",
            count: 0,
          },
          {
            id: `${Ar.Ix.DIGITAL_EXTRAS}-filter`,
            name: Ar.Ix.DIGITAL_EXTRAS,
            groupName: "category",
            count: 0,
          },
        ],
        Vr = (e, t) => {
          const a = [];
          return (
            e.forEach((e) => {
              var r, n;
              const l = (
                null !=
                (n = null == (r = e.catalogItem) ? void 0 : r.categories)
                  ? n
                  : []
              ).map((e) => {
                var t;
                return null != (t = null == e ? void 0 : e.path) ? t : "";
              });
              Object.values(Ar.Ix).forEach((e) => {
                if (l.includes(e)) {
                  const r = t(`egstore.library.filter_side_panel.${e}`) || "";
                  Wr({
                    tagsForDisplay: a,
                    currentTags: Ur,
                    name: e,
                    message: r,
                  });
                }
              });
            }),
            a
          );
        },
        Gr = () => {
          const { selectedCollectionId: e } = (0, Ve.Z)(),
            { records: t, recordsAll: a } = Ue(e),
            n = (0, mr.B2)();
          return (0, r.useMemo)(() => {
            const r = Vr(a, n);
            return e !== W.V.ALL
              ? ((e, t, a) => {
                  const r = Vr(e, t);
                  return qr(a, r);
                })(t, n, r)
              : r;
          }, [a, e, t]);
        };
      var Yr = Object.defineProperty,
        Zr = Object.defineProperties,
        Jr = Object.getOwnPropertyDescriptors,
        Qr = Object.getOwnPropertySymbols,
        Kr = Object.prototype.hasOwnProperty,
        Xr = Object.prototype.propertyIsEnumerable,
        en = (e, t, a) =>
          t in e
            ? Yr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const tn = (e, t) => {
          const a = e.reduce(
              (e, t) => (
                (t.tags || []).forEach((t) => {
                  e[t] = (e[t] || 0) + 1;
                }),
                e
              ),
              {},
            ),
            r = Object.keys(a);
          return t.reduce((e, t) => {
            var n, l;
            return (
              r.includes(t.id) &&
                e.push(
                  ((n = ((e, t) => {
                    for (var a in t || (t = {}))
                      Kr.call(t, a) && en(e, a, t[a]);
                    if (Qr)
                      for (var a of Qr(t)) Xr.call(t, a) && en(e, a, t[a]);
                    return e;
                  })({}, t)),
                  (l = { count: a[t.id] }),
                  Zr(n, Jr(l))),
                ),
              e
            );
          }, []);
        },
        an = ({
          records: e,
          collectionRecords: t,
          storeTags: a = [],
          selectedCollectionId: r,
        }) => {
          const n = tn(e, a);
          return r !== W.V.ALL
            ? ((e, t, a) => {
                const r = tn(t, a);
                return qr(e, r);
              })(n, t, a)
            : n;
        };
      var rn = a(18939),
        nn = a(91419),
        ln = a(66623),
        on = a(81060),
        cn = a(31315),
        sn = a(40014),
        dn = a(21884);
      const mn = a.n(dn)()`
    query getStoreTags($groupName: String, $locale: String, $sortBy: String, $sortDir: String) {
  Catalog {
    tags(
      count: 999
      groupName: $groupName
      locale: $locale
      sortBy: $sortBy
      sortDir: $sortDir
    ) {
      elements {
        id
        name
        groupName
      }
      paging {
        count
        total
      }
    }
  }
}
    `;
      var un = a(85727),
        pn = (e, t, a) =>
          new Promise((r, n) => {
            var l = (e) => {
                try {
                  i(a.next(e));
                } catch (e) {
                  n(e);
                }
              },
              o = (e) => {
                try {
                  i(a.throw(e));
                } catch (e) {
                  n(e);
                }
              },
              i = (e) =>
                e.done ? r(e.value) : Promise.resolve(e.value).then(l, o);
            i((a = a.apply(e, t)).next());
          });
      const gn = (0, un.lp)("storeTagApi"),
        bn = (e, t) => `${e}:${t}`,
        En = (e, t) =>
          pn(
            void 0,
            [e, t],
            function* (
              e,
              { groupName: t, isOnline: a, locale: r, sortBy: n, sortDir: l },
            ) {
              const { cached: o, isExpired: i } = yield ((e) =>
                pn(void 0, [e], function* ({ groupName: e, locale: t }) {
                  try {
                    const a = yield sn.WE.get(bn(e, t)),
                      r = (0, un.wU)((null == a ? void 0 : a._expiresAt) || 0);
                    return {
                      cached: null == a ? void 0 : a.data,
                      isExpired: r,
                    };
                  } catch (e) {
                    return (
                      gn.warn("getCachedStoreTags", "failed IDB get", {
                        error: e.message,
                      }),
                      { cached: void 0, isExpired: !0 }
                    );
                  }
                }))({ groupName: t, locale: r });
              if (o && o.length && !i)
                return (
                  gn.log("getCachedOrRemote", "using indexedDB", {
                    records: o,
                  }),
                  o
                );
              if (!a)
                return (
                  gn.log(
                    "getCachedOrRemoteStoreTags",
                    "user is not online, using indexedDB",
                    { records: o },
                  ),
                  o || []
                );
              const c = yield ((e, t) =>
                pn(
                  void 0,
                  [e, t],
                  function* (
                    e,
                    { groupName: t, locale: a, sortBy: r, sortDir: n },
                  ) {
                    var l, o;
                    try {
                      const i = yield (0, cn.e)({
                        httpLink: e,
                        query: mn,
                        variables: {
                          groupName: t,
                          locale: a,
                          sortBy: r,
                          sortDir: n,
                        },
                      });
                      return (
                        gn.log("getRemoteStoreTags", "success", i),
                        null == (o = null == (l = i.Catalog) ? void 0 : l.tags)
                          ? void 0
                          : o.elements
                      );
                    } catch (e) {
                      return void gn.warn("getRemoteStoreTags", "failed", {
                        error: e.message,
                      });
                    }
                  },
                ))(e, { groupName: t, locale: r, sortBy: n, sortDir: l });
              return (
                gn.log("getCachedOrRemoteStoreTags", "using GQL item", {
                  groupName: t,
                  locale: r,
                }),
                c && c.length
                  ? (c &&
                      (gn.log(
                        "getCachedOrRemoteStoreTags",
                        "updating local cache",
                        { groupName: t },
                      ),
                      (({ groupName: e, tags: t, locale: a }) => {
                        if (!t.length || !a) return;
                        const r = {
                          _expiresAt: (0, un.YD)(rn.$H),
                          groupName: e,
                          id: bn(e, a),
                          data: t,
                        };
                        sn.WE.put(r).catch((e) => {
                          gn.warn("setCachedStoreTags", "failed IDB put", {
                            error: e.message,
                          });
                        });
                      })({ groupName: t, tags: c, locale: r })),
                    c)
                  : (gn.log(
                      "getCachedOrRemoteStoreTags",
                      "remote tags failed to load, using indexedDB",
                      { records: o },
                    ),
                    o || [])
              );
            },
          ),
        yn = ({ groupName: e, sortBy: t, sortDir: a }) => {
          const r = (0, ua.useLocalizationLocale)(),
            n = (0, g.$)(),
            l = (0, nn.i2)(),
            o = (0, on.I)({
              query: mn,
              variables: { groupName: e, locale: r, sortBy: t, sortDir: a },
            }),
            { data: i } = (0, ln.IT)(o, () =>
              En(l, {
                groupName: e,
                isOnline: n,
                locale: r,
                sortBy: t,
                sortDir: a,
              }),
            );
          return i;
        },
        vn = [
          {
            id: `${Ar.ZW.WINDOWS}-filter`,
            name: Ar.ZW.WINDOWS,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${Ar.ZW.WIN32}-filter`,
            name: Ar.ZW.WIN32,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${Ar.ZW.MAC}-filter`,
            name: Ar.ZW.MAC,
            groupName: "platform",
            count: 0,
          },
        ],
        fn = (e, t) => {
          const a = [];
          return (
            e.forEach((e) => {
              var r, n, l, o;
              const i =
                null !=
                (o =
                  null ==
                  (l = (
                    null !=
                    (n = null == (r = e.catalogItem) ? void 0 : r.releaseInfo)
                      ? n
                      : []
                  )[0])
                    ? void 0
                    : l.platform)
                  ? o
                  : [];
              Object.values(Ar.ZW).forEach((e) => {
                if (i.includes(e)) {
                  const r = t(`egstore.library.filter_side_panel.${e}`) || "";
                  Wr({
                    tagsForDisplay: a,
                    currentTags: vn,
                    name: e,
                    message: r,
                  });
                }
              });
            }),
            a
          );
        },
        hn = () => {
          const { selectedCollectionId: e } = (0, Ve.Z)(),
            { records: t, recordsAll: a } = Ue(e),
            n = (0, ua.useLocalization)();
          return (0, r.useMemo)(() => {
            const r = fn(a, n);
            return e !== W.V.ALL
              ? ((e, t, a) => {
                  const r = fn(e, t);
                  return qr(a, r);
                })(t, n, r)
              : r;
          }, [a, e, t]);
        };
      var An = a(8384),
        Cn = a(47155);
      const In = (...e) => {
          if (e.length < 2) return e[0];
          const [t, a, ...r] = e;
          if (!t.length || !a.length) return [];
          const n = t.filter((e) => a.includes(e));
          return In([...new Set(n)], ...r);
        },
        Sn = ({ onFilterClick: e, activeFilters: t, numberOfItems: a = 0 }) => {
          const r = !!t && t.includes(Ar.bn.INSTALLED),
            l = 0 === a;
          let o;
          return (
            (o = l && r ? "(0)" : l ? "" : `(${a})`),
            n().createElement(vr.A, {
              "data-testid": "library-filter-section-installed",
              renderTitle: () =>
                n().createElement(Cr.A, {
                  onClick: () =>
                    e({ type: Ar.bn.INSTALLED, name: Ar.bn.INSTALLED }),
                  text: n().createElement(mr.QB, {
                    code: "egstore.library.filter_side_panel.installed",
                    args: [o],
                  }),
                  checked: r,
                  disabled: l,
                }),
            })
          );
        };
      var On = a(26445);
      const xn = n().forwardRef(({ onChange: e, onClear: t, value: a }, r) => {
          const l = (0, ua.useLocalization)();
          return n().createElement(On.A, {
            "data-testid": "library-filter-section-keyword",
            ref: r,
            onChange: e,
            onClear: t,
            placeholder: l(
              "egstore.library.hub.product.list.search_placeholder",
            ),
            value: a,
          });
        }),
        kn = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(Ir, {
            title: n().createElement(mr.QB, {
              code: "diesel.products.about.meta.platform",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: Ar.bn.PLATFORM,
          }),
        Pn = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(Ir, {
            title: n().createElement(mr.QB, {
              code: "diesel.store.browse.subscription",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: Ar.bn.SUBSCRIPTION,
          });
      var wn = a(86831);
      const Nn = (0, I.W)((e) => ({
          titleDiv: (0, u.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 7,
            "& > button": { paddingTop: 0, paddingBottom: 0 },
          }),
          keywordFilter: (0, u.AH)({
            padding: "12px 0",
            margin: "18px 12px 6px 12px",
            borderBottom: `1px solid ${e.backgroundOverlay}`,
          }),
        })),
        Ln = ({
          sectionTitle: e,
          filterByKeyword: t,
          customResults: a,
          installed: r,
          genres: l,
          features: o,
          categories: i,
          platforms: c,
          subscriptions: s,
        }) => {
          const d = Nn();
          return n().createElement(
            wn.A,
            null,
            n().createElement("div", { className: d.titleDiv }, e),
            n().createElement("div", { className: d.keywordFilter }, t),
            a,
            r,
            l,
            o,
            i,
            c,
            s,
          );
        },
        _n = { padding: "10px 0", marginLeft: 12 },
        Tn = { paddingBottom: 10, marginLeft: 12 },
        Mn = ({ animation: e }) =>
          n().createElement(
            "div",
            { style: _n },
            n().createElement(At.EA, { animation: e, height: 14, width: 100 }),
          ),
        Dn = ({ animation: e }) =>
          n().createElement(Ln, {
            sectionTitle: n().createElement(
              "div",
              { style: Tn },
              n().createElement(At.EA, { animation: e, height: 14, width: 50 }),
            ),
            filterByKeyword: n().createElement(At.EA, {
              animation: e,
              height: 40,
              width: 160,
            }),
            genres: n().createElement(
              vr.A,
              {
                renderTitle: () =>
                  n().createElement(
                    "div",
                    { style: _n },
                    n().createElement(At.EA, {
                      animation: e,
                      height: 14,
                      width: 50,
                    }),
                  ),
              },
              n().createElement(Mn, { animation: e }),
              n().createElement(Mn, { animation: e }),
              n().createElement(Mn, { animation: e }),
            ),
          });
      var Bn = a(37213),
        Rn = a(98207),
        jn = a(36484);
      const Hn = () => {
          const {
              selectedFilters: e,
              resetFilters: t,
              keywordValue: a,
              setKeywordValue: l,
              numberActiveFilters: o,
              onFilterClick: i,
            } = (0, Er.t)(),
            { selectedCollectionId: c } = (0, Ve.Z)(),
            { records: s } = Ue(c),
            d = (0, b.useSelector)(An.Si),
            m = (0, b.useSelector)(Cn.xA),
            { resetQueryParams: u } = Pr(),
            p = Gr(),
            g = hn(),
            E = (() => {
              const { selectedCollectionId: e } = (0, Ve.Z)(),
                t = yn({
                  groupName: Ar.bn.GENRE,
                  sortBy: rn.b3,
                  sortDir: rn.NZ,
                }),
                { records: a, recordsAll: n } = Ue(e);
              return (0, r.useMemo)(
                () =>
                  an({
                    records: n,
                    collectionRecords: a,
                    storeTags: t,
                    selectedCollectionId: e,
                  }),
                [n, a, t, e],
              );
            })(),
            y = (() => {
              const { selectedCollectionId: e } = (0, Ve.Z)(),
                t = yn({
                  groupName: Ar.bn.FEATURE,
                  sortBy: rn.b3,
                  sortDir: rn.NZ,
                }),
                a = yn({ groupName: Ar.cq, sortBy: rn.b3, sortDir: rn.NZ }),
                n = (0, r.useMemo)(() => {
                  if (t && a) return [...a, ...t];
                }, [t, a]),
                { records: l, recordsAll: o } = Ue(e);
              return (0, r.useMemo)(
                () =>
                  an({
                    records: o,
                    collectionRecords: l,
                    storeTags: n,
                    selectedCollectionId: e,
                  }),
                [o, l, n, e],
              );
            })(),
            f = (() => {
              const { selectedCollectionId: e } = (0, Ve.Z)(),
                { records: t } = Ue(e),
                a = (0, b.useSelector)(An.AL),
                n = (0, b.useSelector)(Cn.xA),
                l = (0, r.useMemo)(() => t.map((e) => e.relationshipId), [t]);
              return (0, r.useMemo)(
                () =>
                  a.map((e) => {
                    var t;
                    const a = n[e.relationshipId]
                      ? In(n[e.relationshipId], l)
                      : [];
                    return (
                      a.push(e.relationshipId),
                      {
                        id: e.relationshipId,
                        name:
                          (null == (t = null == e ? void 0 : e.catalogItem)
                            ? void 0
                            : t.title) || e.relationshipId,
                        groupName: Ar.bn.SUBSCRIPTION,
                        count: (null == a ? void 0 : a.length) || 0,
                      }
                    );
                  }),
                [a, l, n],
              );
            })(),
            h = n().useMemo(
              () =>
                (0, Bn.s)({
                  items: s,
                  filterTable: m,
                  installedRecords: d.latestValue,
                }).length,
              [s, m, d.latestValue],
            ),
            [A, C] = (0, r.useState)(a),
            [I] = (0, yr.A)(A, 100, { trailing: !0 });
          n().useEffect(() => {
            l(null != I ? I : "");
          }, [I]),
            n().useEffect(() => {
              a !== I && C(a);
            }, [a]);
          return n().createElement(Ln, {
            sectionTitle: n().createElement(
              n().Fragment,
              null,
              n().createElement(jn.A, {
                text: n().createElement(v.A, {
                  code: "diesel.store.browse.filters",
                  args: o > 0 ? [`(${o})`] : [""],
                }),
              }),
              o > 0 &&
                n().createElement(Rn.A, {
                  onClick: () => {
                    t(), u();
                  },
                  text: n().createElement(v.A, {
                    code: "diesel.store.browse.reset",
                  }),
                }),
            ),
            filterByKeyword: n().createElement(xn, {
              onChange: (e) => C(e.target.value),
              onClear: () => {
                C(""), l("");
              },
              value: A,
            }),
            installed: n().createElement(Sn, {
              onFilterClick: i,
              activeFilters: e[Ar.bn.INSTALLED],
              numberOfItems: h,
            }),
            customResults: e[Ar.bn.CATALOG_ITEM_ID].length
              ? n().createElement(Tr, { onFilterClick: i })
              : null,
            genres: E.length
              ? n().createElement(Dr, {
                  onFilterClick: i,
                  storeTags: E,
                  activeFilters: e[Ar.bn.GENRE],
                })
              : null,
            features: y.length
              ? n().createElement(Mr, {
                  onFilterClick: i,
                  storeTags: y,
                  activeFilters: e[Ar.bn.FEATURE],
                })
              : null,
            categories: p.length
              ? n().createElement(Sr, {
                  onFilterClick: i,
                  storeTags: p,
                  activeFilters: e[Ar.bn.CATEGORY],
                })
              : null,
            platforms: g.length
              ? n().createElement(kn, {
                  onFilterClick: i,
                  storeTags: g,
                  activeFilters: e[Ar.bn.PLATFORM],
                })
              : null,
            subscriptions: f.length
              ? n().createElement(Pn, {
                  onFilterClick: i,
                  storeTags: f,
                  activeFilters: e[Ar.bn.SUBSCRIPTION],
                })
              : null,
          });
        },
        Fn = () =>
          n().createElement(
            i.tY,
            { fallback: n().createElement(Dn, null) },
            n().createElement(Hn, null),
          ),
        $n = (0, Ga.K)(
          r.createElement("path", {
            d: "M5 4a1 1 0 00-1 1v5.2a1 1 0 001 1h5.2a1 1 0 001-1V5a1 1 0 00-1-1H5zm8.8 0a1 1 0 00-1 1v5.2a1 1 0 001 1H19a1 1 0 001-1V5a1 1 0 00-1-1h-5.2zM4 13.8a1 1 0 011-1h5.2a1 1 0 011 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.2zm9.8-1a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-5.2a1 1 0 00-1-1h-5.2z",
          }),
          "Library",
        ),
        zn = (0, Ga.K)(
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22 2H8v2h14V2zm0 18H8v2h14v-2zM8 11h14v2H8v-2zm-2.5 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
          }),
          "List",
        );
      var Wn = a(49912),
        qn = Object.defineProperty,
        Un = Object.defineProperties,
        Vn = Object.getOwnPropertyDescriptors,
        Gn = Object.getOwnPropertySymbols,
        Yn = Object.prototype.hasOwnProperty,
        Zn = Object.prototype.propertyIsEnumerable,
        Jn = (e, t, a) =>
          t in e
            ? qn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Qn = (e, t) => {
          for (var a in t || (t = {})) Yn.call(t, a) && Jn(e, a, t[a]);
          if (Gn) for (var a of Gn(t)) Zn.call(t, a) && Jn(e, a, t[a]);
          return e;
        };
      const Kn = (0, I.W)((e, { isGridSelected: t, isEnabledEDSPhase1: a }) => {
          return {
            gridSelected: (0, u.AH)(
              ((r = Qn(
                {
                  cursor: t ? "default" : "pointer",
                  backgroundColor: t
                    ? a
                      ? J.OS.tertiary.select.default
                      : e.backgroundOverlay
                    : void 0,
                  padding: 3,
                  height: 30,
                },
                (0, S.hz)(3),
              )),
              (n = {
                "&::after, &::hover": t
                  ? { backgroundColor: "transparent", opacity: 0 }
                  : {},
              }),
              Un(r, Vn(n))),
            ),
            listSelected: (0, u.AH)({
              cursor: t ? "pointer" : "default",
              backgroundColor: t
                ? void 0
                : a
                  ? J.OS.tertiary.select.default
                  : e.backgroundOverlay,
              padding: 6,
              height: 30,
              "&::after, &::hover": t
                ? {}
                : { backgroundColor: "transparent", opacity: 0 },
            }),
            listIcon: (0, u.AH)(
              Qn(
                {},
                a && { svg: { fill: t ? e.textPrimary : J.eM.selectDefault } },
              ),
            ),
            gridIcon: (0, u.AH)(
              Qn(
                { fontSize: 24 },
                a && { svg: { fill: t ? J.eM.selectDefault : e.textPrimary } },
              ),
            ),
          };
          var r, n;
        }),
        Xn = ({ value: e, onChange: t }) => {
          const a = (0, b.useSelector)(k.k),
            n = e === wr.p5.Grid,
            l = Kn({ isGridSelected: n, isEnabledEDSPhase1: a }),
            o = r.useCallback(() => t(wr.p5.Grid), [t]),
            i = r.useCallback(() => t(wr.p5.List), [t]);
          return r.createElement(
            Ye.a,
            null,
            r.createElement(
              Wn.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-grid-layout",
                  eventLabel: "library-hubs-grid-layout",
                  eventValue: e,
                },
              },
              r.createElement(
                h.K,
                {
                  "aria-label": "grid",
                  disabled: e === wr.p5.Grid,
                  buttonWidth: f.Rj.AUTO,
                  buttonHeight: f.eL.DENSED,
                  onClick: o,
                  variantClassName: l.gridSelected,
                },
                r.createElement(
                  "span",
                  { className: l.gridIcon },
                  r.createElement($n, null),
                ),
              ),
            ),
            r.createElement(
              Wn.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-list-layout",
                  eventLabel: "library-hubs-list-layout",
                  eventValue: e,
                },
              },
              r.createElement(
                h.K,
                {
                  "aria-label": "list",
                  disabled: e === wr.p5.List,
                  buttonWidth: f.Rj.AUTO,
                  buttonHeight: f.eL.DENSED,
                  onClick: i,
                  variantClassName: l.listSelected,
                },
                r.createElement(
                  "span",
                  { className: l.listIcon },
                  r.createElement(zn, null),
                ),
              ),
            ),
          );
        },
        el = (0, I.W)(() => ({
          sortMenu: (0, u.AH)((0, S.hz)(10), { minWidth: 210 }),
          rightPadding: (0, u.AH)((0, S.hz)(3)),
        })),
        tl = ({ layoutToggle: e, sortMenu: t }) => {
          const a = el();
          return r.createElement(
            Ye.a,
            { alignItems: Ze.ep.Center, justify: Ze.cn.SpaceBetween },
            r.createElement(
              "div",
              { className: a.sortMenu, "data-testid": "sort-menu" },
              t,
            ),
            r.createElement(
              Ye.a,
              { justify: Ze.cn.End, "data-testid": "layout-toggle" },
              e,
            ),
          );
        };
      var al = a(42678),
        rl = Object.defineProperty,
        nl = Object.defineProperties,
        ll = Object.getOwnPropertyDescriptors,
        ol = Object.getOwnPropertySymbols,
        il = Object.prototype.hasOwnProperty,
        cl = Object.prototype.propertyIsEnumerable,
        sl = (e, t, a) =>
          t in e
            ? rl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const dl = (e) => {
        const t = (0, Oe.A)(
            Cn.GL,
            Cn._c,
            ((r = ((e, t) => {
              for (var a in t || (t = {})) il.call(t, a) && sl(e, a, t[a]);
              if (ol) for (var a of ol(t)) cl.call(t, a) && sl(e, a, t[a]);
              return e;
            })({}, e)),
            (n = { enabled: !1 !== (null == e ? void 0 : e.enabled) }),
            nl(r, ll(n))),
          ),
          { data: a } = t;
        var r, n;
        return {
          totalPlaytime: a,
          query: ((e, t) => {
            var a = {};
            for (var r in e) il.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && ol)
              for (var r of ol(e))
                t.indexOf(r) < 0 && cl.call(e, r) && (a[r] = e[r]);
            return a;
          })(t, ["data"]),
        };
      };
      var ml = a(98850),
        ul = Object.defineProperty,
        pl = Object.defineProperties,
        gl = Object.getOwnPropertyDescriptors,
        bl = Object.getOwnPropertySymbols,
        El = Object.prototype.hasOwnProperty,
        yl = Object.prototype.propertyIsEnumerable,
        vl = (e, t, a) =>
          t in e
            ? ul(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const fl = [
          wr.r3.Recent_Played,
          wr.r3.Recent_Purchased,
          wr.r3.Alphabetical_ASC,
          wr.r3.Alphabetical_DESC,
          wr.r3.Time_Played,
        ],
        hl = (e) => {
          const { value: t, setValue: a } = (0, Oa.$)(
            ((n = ((e, t) => {
              for (var a in t || (t = {})) El.call(t, a) && vl(e, a, t[a]);
              if (bl) for (var a of bl(t)) yl.call(t, a) && vl(e, a, t[a]);
              return e;
            })({}, e)),
            (l = { initialValue: wr.r3.Alphabetical_ASC, allowedValues: fl }),
            pl(n, gl(l))),
          );
          var n, l;
          const { recordsMap: o } = (0, al.M)(),
            { totalPlaytime: i } = dl(),
            c = (0, r.useCallback)(
              (e) => {
                switch (t) {
                  case wr.r3.Alphabetical_ASC:
                    return (0, ml.sQ)(e, wr.UE.ASC);
                  case wr.r3.Alphabetical_DESC:
                    return (0, ml.sQ)(e, wr.UE.DESC);
                  case wr.r3.Recent_Played:
                    return (0, ml.Hc)(o, e);
                  case wr.r3.Recent_Purchased:
                    return (0, ml.l7)(e);
                  case wr.r3.Time_Played:
                    return (0, ml.ok)(e, i);
                  default:
                    return e;
                }
              },
              [o, t, i],
            );
          return { sortType: t, setSortType: a, applySortType: c };
        };
      var Al = a(77108);
      const Cl = ({ sortType: e = wr.r3.Alphabetical_ASC, onChange: t }) => {
        const a = (0, mr.B2)(),
          n = r.useMemo(
            () =>
              ((e) => [
                {
                  label:
                    e("egstore.library.sort.recently_played") ||
                    wr.r3.Recent_Played,
                  value: wr.r3.Recent_Played,
                },
                {
                  label:
                    e("egstore.library.sort.recently_purchased") ||
                    wr.r3.Recent_Purchased,
                  value: wr.r3.Recent_Purchased,
                },
                {
                  label:
                    e("egstore.library.sort.alphabetical.asc") ||
                    wr.r3.Alphabetical_ASC,
                  value: wr.r3.Alphabetical_ASC,
                },
                {
                  label:
                    e("egstore.library.sort.alphabetical.desc") ||
                    wr.r3.Alphabetical_DESC,
                  value: wr.r3.Alphabetical_DESC,
                },
                {
                  label:
                    e("egstore.library.sort.time_played") || wr.r3.Time_Played,
                  value: wr.r3.Time_Played,
                },
              ])(a),
            [a],
          );
        return r.createElement(Al.w, {
          id: "sort-dropdown",
          label: r.createElement(mr.QB, { code: "egstore.library.sort.title" }),
          options: n,
          selectedValue: e,
          onChange: t,
        });
      };
      var Il = a(70491),
        Sl = a(40466);
      const Ol = {
          root: (0, u.AH)({ display: "flex", gap: 8 }),
          selected: (0, u.AH)({
            backgroundColor: `${oa.Dz} !important`,
            opacity: "1 !important",
            svg: { fill: J.eM.selectDefault },
          }),
        },
        xl = ({ value: e, onChange: t }) => {
          var a, n;
          const l = (0, ua.useLocalization)(),
            o = r.useCallback(() => t(wr.p5.Grid), [t]),
            i = r.useCallback(() => t(wr.p5.List), [t]);
          return r.createElement(
            "div",
            { className: Ol.root },
            r.createElement(
              Wn.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-grid-layout",
                  eventLabel: "library-hubs-grid-layout",
                  eventValue: e,
                },
              },
              r.createElement(va.$, {
                variant: x.ml.GHOST,
                disabled: e === wr.p5.Grid,
                icon: r.createElement(Il.j, null),
                "aria-label":
                  null != (a = l("egstore.library.toggle.view_grid")) ? a : "",
                onClick: o,
                className: e === wr.p5.Grid ? Ol.selected : void 0,
              }),
            ),
            r.createElement(
              Wn.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-list-layout",
                  eventLabel: "library-hubs-list-layout",
                  eventValue: e,
                },
              },
              r.createElement(va.$, {
                variant: x.ml.GHOST,
                disabled: e === wr.p5.List,
                icon: r.createElement(Sl.m, null),
                "aria-label":
                  null != (n = l("egstore.library.toggle.view_list")) ? n : "",
                onClick: i,
                className: e === wr.p5.List ? Ol.selected : void 0,
              }),
            ),
          );
        },
        kl = ({
          layoutType: e = wr.p5.Grid,
          onLayoutChange: t,
          onSortChange: a,
          sortType: n = wr.r3.Alphabetical_ASC,
        }) => {
          const l = (0, b.useSelector)(k.k),
            o = () =>
              l
                ? r.createElement(xl, { value: e, onChange: t })
                : r.createElement(Xn, { value: e, onChange: t });
          return r.createElement(tl, {
            sortMenu: r.createElement(Cl, { sortType: n, onChange: a }),
            layoutToggle: r.createElement(o, null),
          });
        };
      var Pl = Object.defineProperty,
        wl = Object.defineProperties,
        Nl = Object.getOwnPropertyDescriptors,
        Ll = Object.getOwnPropertySymbols,
        _l = Object.prototype.hasOwnProperty,
        Tl = Object.prototype.propertyIsEnumerable,
        Ml = (e, t, a) =>
          t in e
            ? Pl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Dl = () => {
        const e = (0, b.useSelector)(xa.n9),
          t = {
            keyFn: () => `${wr.FN}_${e || Da.c.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          {
            value: a,
            setValue: r,
            query: n,
          } = (0, Oa.$)(
            ((l = ((e, t) => {
              for (var a in t || (t = {})) _l.call(t, a) && Ml(e, a, t[a]);
              if (Ll) for (var a of Ll(t)) Tl.call(t, a) && Ml(e, a, t[a]);
              return e;
            })({}, t)),
            (o = {
              initialValue: wr.p5.Grid,
              allowedValues: [wr.p5.Grid, wr.p5.List],
            }),
            wl(l, Nl(o))),
          );
        var l, o;
        return { layoutType: a, setLayoutType: r, isLoaded: n.isSuccess };
      };
      var Bl = a(12994),
        Rl = a(99804),
        jl = a(69945),
        Hl = Object.defineProperty,
        Fl = Object.defineProperties,
        $l = Object.getOwnPropertyDescriptors,
        zl = Object.getOwnPropertySymbols,
        Wl = Object.prototype.hasOwnProperty,
        ql = Object.prototype.propertyIsEnumerable,
        Ul = (e, t, a) =>
          t in e
            ? Hl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Vl = (e, t) => {
          for (var a in t || (t = {})) Wl.call(t, a) && Ul(e, a, t[a]);
          if (zl) for (var a of zl(t)) ql.call(t, a) && Ul(e, a, t[a]);
          return e;
        },
        Gl = (e, t) => Fl(e, $l(t));
      const Yl = {
          imageWrapper: (0, u.AH)(
            Gl(Vl({}, (0, oa.ko)(oa.gl.x3x4)), { borderRadius: oa.Vq }),
          ),
          fakeImage: (0, u.AH)(Gl(Vl({}, jl.A), { height: "auto" })),
        },
        Zl =
          ({ Image: e, Layout: t }) =>
          ({ animation: a }) => {
            const n = {
              title: r.createElement(At.EA, {
                variant: At.qd.Text,
                height: 20,
                width: "100%",
                animation: a,
              }),
              subtitle: r.createElement(At.EA, {
                variant: At.qd.Text,
                height: 15,
                width: "50%",
                animation: a,
              }),
              image: r.createElement(e, { animation: a }),
            };
            return r.createElement(t, Vl({}, n));
          },
        Jl = Zl({
          Image: ({ animation: e }) =>
            r.createElement(
              "div",
              { className: Yl.imageWrapper },
              r.createElement(At.EA, {
                width: "100%",
                className: Yl.fakeImage,
                animation: e,
              }),
            ),
          Layout: Wa.G,
        }),
        Ql = Zl({
          Image: ({ animation: e }) =>
            r.createElement(At.EA, {
              width: Bl.uf,
              height: Bl.vr,
              animation: e,
            }),
          Layout: Rl.g,
        }),
        Kl = ({ animation: e }) =>
          r.createElement(tl, {
            sortMenu: r.createElement(At.EA, {
              width: 200,
              height: 30,
              animation: e,
            }),
            layoutToggle: r.createElement(
              Ye.a,
              null,
              r.createElement(At.EA, {
                width: 30,
                height: 30,
                style: { margin: "0 3px" },
                animation: e,
              }),
              r.createElement(At.EA, { width: 30, height: 30, animation: e }),
            ),
          });
      var Xl = a(76071),
        eo = a(28281),
        to = a(84408);
      const ao = (0, I.W)((e, t) => ({
          root: (0, u.AH)({
            position: "relative",
            width: "100%",
            height: "100%",
            border: 0,
            paddingBottom: t > 0 ? 95 : 0,
            [Ca.aq.lg]: { paddingBottom: t > 0 ? 105 : 0 },
            "& :hover": { backgroundColor: e.backgroundOverlay },
          }),
          body: (0, u.AH)({
            height: "100%",
            paddingBottom: t > 0 ? 0 : "calc(4 / 3 * 41%)",
            borderRadius: oa.Vq,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: e.level1,
          }),
          title: (0, u.AH)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: t > 0 ? 0 : "50%",
            textAlign: "center",
            padding: "0 10px",
            pointerEvents: "none",
          }),
          icon: (0, u.AH)({
            fontSize: 22.5,
            paddingBottom: 13.75,
            [Ca.aq.lg]: { paddingBottom: 18.75, fontSize: 22.5 },
            [Ca.aq.xl]: { fontSize: 24 },
          }),
        })),
        ro = ({ onClick: e, numItems: t, code: a }) => {
          const r = ao(t);
          return n().createElement(
            U.A,
            {
              onClick: e,
              className: r.root,
              "data-testid": "empty-library-card",
            },
            n().createElement(
              "div",
              { className: r.body },
              n().createElement(
                "div",
                { className: r.title },
                n().createElement(
                  "div",
                  { className: r.icon },
                  n().createElement(to.g, null),
                ),
                n().createElement(
                  la.Ay,
                  { textLevel: G.qo.PRIMARY },
                  n().createElement(v.A, { code: a }),
                ),
              ),
            ),
          );
        };
      var no = Object.defineProperty,
        lo = Object.defineProperties,
        oo = Object.getOwnPropertyDescriptors,
        io = Object.getOwnPropertySymbols,
        co = Object.prototype.hasOwnProperty,
        so = Object.prototype.propertyIsEnumerable,
        mo = (e, t, a) =>
          t in e
            ? no(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        uo = (e, t) => {
          for (var a in t || (t = {})) co.call(t, a) && mo(e, a, t[a]);
          if (io) for (var a of io(t)) so.call(t, a) && mo(e, a, t[a]);
          return e;
        };
      const po = (0, I.W)((e) => {
          return {
            root: (0, u.AH)({
              position: "relative",
              width: "100%",
              height: "100%",
              border: 0,
              "& :hover": { backgroundColor: e.backgroundOverlay },
            }),
            body: (0, u.AH)({
              height: 75,
              borderRadius: oa.Vq,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: e.level1,
              [Ca.aq.lg]: { height: 80 },
            }),
            title: (0, u.AH)({
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              pointerEvents: "none",
            }),
            icon: (0, u.AH)(
              ((t = uo({ fontSize: 11.25 }, (0, S.hz)(12))),
              (a = {
                marginTop: 2,
                [Ca.aq.lg]: uo({ fontSize: 15, marginTop: 3 }, (0, S.hz)(12.5)),
              }),
              lo(t, oo(a))),
            ),
          };
          var t, a;
        }),
        go = ({ onClick: e, code: t }) => {
          const a = po();
          return n().createElement(
            U.A,
            {
              onClick: e,
              className: a.root,
              "data-testid": "empty-library-card",
            },
            n().createElement(
              "div",
              { className: a.body },
              n().createElement(
                "div",
                { className: a.title },
                n().createElement(
                  "div",
                  { className: a.icon },
                  n().createElement(to.g, null),
                ),
                n().createElement(
                  la.Ay,
                  { textLevel: G.qo.PRIMARY },
                  n().createElement(v.A, { code: t }),
                ),
              ),
            ),
          );
        },
        bo = ({ layout: e, numItems: t }) => {
          const a = (0, b.useDispatch)(),
            r = (0, b.useSelector)(xa.MF),
            l = (0, Ta.useLocation)(),
            o = n().useCallback(
              () =>
                r === Da.c.OFFLINE
                  ? a(eo.Ay.requestSignIn(l.pathname))
                  : a((0, Or.VC)((0, xr.generateRoutePath)("/"))),
              [r],
            ),
            i = n().useMemo(
              () =>
                r === Da.c.OFFLINE
                  ? "diesel.library.cards.shopOffline"
                  : "diesel.library.cards.shop",
              [r],
            );
          return e === wr.p5.Grid
            ? n().createElement(ro, { onClick: o, numItems: t, code: i })
            : n().createElement(go, { onClick: o, code: i });
        };
      var Eo = a(52637);
      const yo = (0, I.W)((e) => ({
          root: (0, u.AH)({
            width: "100%",
            borderTop: `1px solid ${e.backgroundOverlay}`,
            padding: "10px 0",
            display: "flex",
          }),
          title: (0, u.AH)((0, S.S$)(-65)),
          imageSpacer: (0, u.AH)({ width: 65 }),
          settingsSpacer: (0, u.AH)({ width: 77, height: "100%" }),
        })),
        vo = () => {
          const e = yo();
          return r.createElement(
            "div",
            { className: e.root },
            r.createElement("div", { className: e.imageSpacer }),
            r.createElement(
              Ba.x.Container,
              null,
              r.createElement(
                Ba.x.Item,
                { xs: 4 },
                r.createElement(
                  Ye.a,
                  { className: e.title, fillParent: !0, justify: Ze.cn.Start },
                  r.createElement(Eo.A, {
                    code: "egstore.library.hub.product.list.search_placeholder",
                  }),
                ),
              ),
              r.createElement(
                Ba.x.Item,
                { xs: 2 },
                r.createElement(
                  Ye.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Eo.A, { code: "egstore.achievements" }),
                ),
              ),
              r.createElement(
                Ba.x.Item,
                { xs: 2 },
                r.createElement(
                  Ye.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Eo.A, { code: "diesel.products.addons" }),
                ),
              ),
              r.createElement(
                Ba.x.Item,
                { xs: 2 },
                r.createElement(
                  Ye.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Eo.A, {
                    code: "egstore.library.column.timePlayed",
                  }),
                ),
              ),
              r.createElement(
                Ba.x.Item,
                { xs: 2 },
                r.createElement(
                  Ye.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Eo.A, {
                    code: "egstore.library.column.size",
                  }),
                ),
              ),
            ),
            r.createElement("div", { className: e.settingsSpacer }),
          );
        },
        fo = (0, I.W)((e) => ({
          root: (0, u.AH)({
            display: "flex",
            flexDirection: "column",
            paddingBottom: 50,
          }),
          header: (0, u.AH)({
            position: "sticky",
            top: 100,
            minHeight: 40,
            margin: "0 -16px 16px -16px",
            padding: "0 16px",
            zIndex: Xl.H + 1,
            background: e.background,
          }),
          footer: (0, u.AH)({ marginTop: 20, [Ca.aq.xl]: { marginTop: 30 } }),
          cssGrid: (0, u.AH)({
            display: "grid",
            gap: 32,
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            [Ca.aq.xl]: {
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            },
            [Ca.aq.xxl]: {
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            },
          }),
          cssList: (0, u.AH)({
            display: "grid",
            gap: 6,
            gridTemplateColumns: "repeat(auto-fill, 100%)",
          }),
        })),
        ho = ({
          footer: e,
          header: t,
          items: a,
          totalItems: n,
          layout: l,
          renderItem: o,
          shouldShowEmptyLibraryCard: i,
          renderEmptySearch: c,
          renderEmptyCollection: s,
          renderFilterSidePanel: d,
        }) => {
          const m = fo();
          return r.createElement(
            "div",
            {
              className: m.root,
              "data-testid": "ProductListSectionLayout",
              "data-layout": l,
            },
            r.createElement(
              Ba.x.Container,
              { spacing: 20 },
              r.createElement(
                Ba.x.Item,
                { xs: d ? 9 : 12, xxl: d ? 10 : 12 },
                t &&
                  !s &&
                  r.createElement(
                    "div",
                    {
                      className: m.header,
                      "data-testid": "product-list-section-header",
                    },
                    t,
                  ),
                r.createElement(
                  "div",
                  {
                    "data-layout": l,
                    "data-testid": "product-list-section-main",
                  },
                  l === wr.p5.List &&
                    !s &&
                    !c &&
                    r.createElement(
                      "div",
                      { "data-testid": "product-list-section-column-header" },
                      r.createElement(vo, null),
                    ),
                  c,
                  s,
                  a &&
                    o &&
                    r.createElement(
                      "div",
                      { className: l === wr.p5.Grid ? m.cssGrid : m.cssList },
                      a.map((e, t) =>
                        r.createElement(
                          "div",
                          { key: e.relationshipId },
                          o(e, t),
                        ),
                      ),
                      i
                        ? r.createElement(
                            "div",
                            null,
                            r.createElement(bo, {
                              layout: l,
                              numItems: n || 0,
                            }),
                          )
                        : null,
                    ),
                  r.createElement("div", { className: m.footer }, e),
                ),
              ),
              d &&
                r.createElement(
                  Ba.x.Item,
                  { xs: 3, xxl: 2 },
                  r.createElement("aside", null, d),
                ),
            ),
          );
        };
      var Ao = Object.defineProperty,
        Co = Object.getOwnPropertySymbols,
        Io = Object.prototype.hasOwnProperty,
        So = Object.prototype.propertyIsEnumerable,
        Oo = (e, t, a) =>
          t in e
            ? Ao(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        xo = (e, t) => {
          for (var a in t || (t = {})) Io.call(t, a) && Oo(e, a, t[a]);
          if (Co) for (var a of Co(t)) So.call(t, a) && Oo(e, a, t[a]);
          return e;
        };
      const ko = {
          footer: (0, u.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
          }),
          pagination: (0, u.AH)({
            [oa.aq.lg]: xo({}, (0, S.hz)(31)),
            [oa.aq.xl]: xo({}, (0, S.hz)(42)),
            [oa.aq.maxWidth]: xo({}, (0, S.hz)(57)),
          }),
        },
        Po = ({ animation: e }) =>
          n().createElement(
            "div",
            { className: ko.footer },
            n().createElement(At.EA, {
              variant: At.qd.Rect,
              animation: e,
              width: 150,
              height: 30,
            }),
            n().createElement(
              "div",
              { className: ko.pagination },
              n().createElement(At.EA, {
                variant: At.qd.Rect,
                animation: e,
                width: 150,
                height: 30,
              }),
            ),
            n().createElement(At.EA, {
              variant: At.qd.Rect,
              animation: e,
              width: 100,
              height: 30,
            }),
          );
      var wo = a(49788);
      const No = new Array(12).fill(0).map((e, t) =>
          (0, wo.V5)({
            namespace: "skeleton",
            catalogItemId: `${t}`,
            appName: `app${t}`,
          }),
        ),
        Lo = ({ layout: e, animation: t }) => {
          const a = (0, Ma.al)(),
            r = e === wr.p5.Grid ? Jl : Ql;
          return n().createElement(ho, {
            header: n().createElement(Kl, { animation: t }),
            footer: n().createElement(Po, { animation: t }),
            items: No,
            layout: e,
            renderItem: () => n().createElement(r, { animation: t }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: a
              ? null
              : n().createElement(Dn, { animation: t }),
          });
        };
      var _o = a(76794),
        To = a(7093);
      const Mo = () => {};
      var Do = a(74886);
      const Bo = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: To.W,
        hasSettingsMenu: !0,
      });
      var Ro = a(22464),
        jo = a(45189),
        Ho = a(73014);
      const Fo = (0, Ho.S)(
        "installWithOptions",
        ({ namespace: e, catalogId: t, appName: a, options: r }) =>
          (0, me.default)().installWithOptions(e, t, a, r),
      );
      var $o = a(60725),
        zo = a(8444),
        Wo = a(7835);
      const qo = (0, Ho.Z)("install");
      var Uo = a(17346),
        Vo = a(40695),
        Go = a(51750);
      var Yo = a(57340),
        Zo = a(59799),
        Jo = a(66395),
        Qo = a(82655),
        Ko = a(11957),
        Xo = a(98186),
        ei = a(75250),
        ti = a(34475);
      const ai = Ko.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,
        ri = ({ size: e, spinDuration: t }) => {
          const a = (0, ti.E)(),
            l = (0, r.useMemo)(
              () =>
                (({
                  cssTheme: e,
                  size: t = Xo.A.XXXSMALL,
                  spinDuration: a = 1,
                }) => ({
                  spinner: (0, u.AH)({
                    border: "1px solid transparent",
                    borderRadius: "50%",
                    borderTop: `1px solid ${e.textPrimary}`,
                    borderRight: `1px solid ${e.textPrimary}`,
                    borderBottom: `1px solid ${e.textPrimary}`,
                    animation: `${ai} ${a}s linear infinite`,
                    width: ei.L[t],
                    height: ei.L[t],
                  }),
                }))({ cssTheme: a, size: e, spinDuration: t }),
              [a, e, t],
            );
          return n().createElement("div", {
            className: l.spinner,
            "data-testid": "spinner",
          });
        },
        ni = (0, I.W)(() => ({
          pathInfo: (0, u.AH)({
            margin: "10px 0 20px 0",
            width: "100%",
            wordBreak: "break-all",
          }),
          textLabel: (0, u.AH)((0, S.hz)(4)),
          spacingTop: (0, u.AH)({ marginTop: 10 }),
          buttonDiv: (0, u.AH)({ marginTop: 24 }),
          spinnerDiv: (0, u.AH)({
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: 75,
          }),
        })),
        li = ({ path: e }) => {
          const t = ni();
          return r.createElement(
            "div",
            { className: t.pathInfo },
            r.createElement(
              z.E,
              {
                variant: x.ZJ.UISM,
                color: x.Uf.SECONDARY,
                "data-testid": "path",
              },
              r.createElement(
                "span",
                { className: t.textLabel },
                r.createElement(mr.QB, {
                  code: "egstore.library.install_location_modal.path",
                }),
              ),
              e,
            ),
          );
        },
        oi = ({
          directoryPath: e = "",
          downloadSize: t = "",
          error: a = "",
          hasInstallOptions: n = !1,
          isInstallDisabled: l = !1,
          isBusy: o = !1,
          onBrowseClick: i,
          onCancelClick: c,
          onInstallClick: s,
          onInstallOptionsClick: d,
          options: m,
          path: u = "",
          requiredSpace: p = "",
        }) => {
          const g = ni();
          return r.createElement(Yo.k, {
            "data-testid": "InstallLocationModal",
            header: r.createElement(Jo.d, {
              title: r.createElement(mr.QB, {
                code: "egstore.library.install_location_modal.title",
              }),
              onCloseClick: c,
            }),
            content: r.createElement(
              Ye.a,
              { fillParent: !0, alignItems: Ze.ep.Center },
              o
                ? r.createElement(
                    "div",
                    { className: g.spinnerDiv },
                    r.createElement(ri, {
                      size: Xo.A.LARGE,
                      spinDuration: 0.4,
                    }),
                  )
                : r.createElement(
                    Ba.x.Container,
                    {
                      spacing: 8,
                      role: "form",
                      "aria-label": "Choose Install Location",
                    },
                    r.createElement(
                      Ba.x.Item,
                      { xs: 10 },
                      r.createElement(Qo.ks, {
                        id: "directoryPath",
                        name: "directoryPath",
                        inputHeight: f.eL.DENSED,
                        placeholder: "/",
                        value: e,
                        noBackground: !0,
                        readOnly: !0,
                        error: !!a,
                        helperText: a,
                        "data-testid": "directoryPath",
                        label: r.createElement(mr.QB, {
                          code: "egstore.library.install_location_modal.folder",
                        }),
                      }),
                      n && r.createElement(li, { path: u }),
                    ),
                    r.createElement(
                      Ba.x.Item,
                      { xs: 2 },
                      r.createElement(
                        "div",
                        { className: g.buttonDiv },
                        r.createElement(
                          va.$,
                          {
                            variant: x.ml.OUTLINE,
                            size: x.sp.LG,
                            onClick: i,
                            fullWidth: !0,
                            "data-testid": "BrowseButton",
                          },
                          r.createElement(mr.QB, {
                            code: "egstore.library.install_location_modal.browse",
                          }),
                        ),
                        n &&
                          r.createElement(
                            "div",
                            { className: g.spacingTop },
                            r.createElement(
                              va.$,
                              {
                                variant: x.ml.OUTLINE,
                                size: x.sp.LG,
                                onClick: d,
                                fullWidth: !0,
                                "data-testid": "OptionsButton",
                              },
                              r.createElement(mr.QB, {
                                code: "egstore.library.install_location_modal.options",
                              }),
                            ),
                          ),
                      ),
                    ),
                    !n &&
                      r.createElement(
                        Ba.x.Item,
                        { xs: 12 },
                        r.createElement(li, { path: u }),
                      ),
                    m,
                  ),
            ),
            footer: r.createElement(
              Zo.j,
              {
                content: r.createElement(
                  "div",
                  null,
                  t &&
                    r.createElement(
                      Ye.a,
                      { alignItems: Ze.ep.Center },
                      r.createElement(
                        z.E,
                        {
                          as: "span",
                          variant: x.ZJ.UISM,
                          color: x.Uf.SECONDARY,
                        },
                        r.createElement(
                          "span",
                          { className: g.textLabel },
                          r.createElement(mr.QB, {
                            code: "egstore.library.install_location_modal.download_size",
                          }),
                        ),
                        r.createElement(
                          "span",
                          { "data-testid": "downloadSize" },
                          t,
                        ),
                      ),
                    ),
                  p &&
                    r.createElement(
                      Ye.a,
                      { alignItems: Ze.ep.Center },
                      r.createElement(
                        z.E,
                        {
                          as: "span",
                          variant: x.ZJ.UISM,
                          color: x.Uf.SECONDARY,
                        },
                        r.createElement(
                          "span",
                          { className: g.textLabel },
                          r.createElement(mr.QB, {
                            code: "egstore.library.install_location_modal.required_space",
                          }),
                        ),
                        r.createElement(
                          "span",
                          { "data-testid": "requiredSpace" },
                          p,
                        ),
                      ),
                    ),
                ),
              },
              r.createElement(
                yt.u,
                { disabled: o, onClick: c, "data-testid": "CancelButton" },
                r.createElement(mr.QB, {
                  code: "diesel.common.smart_button.cancel",
                }),
              ),
              r.createElement(
                Et.S,
                {
                  disabled: l || o,
                  onClick: s,
                  "data-testid": "InstallButton",
                },
                r.createElement(mr.QB, {
                  code: "diesel.common.smart_button.install",
                }),
              ),
            ),
          });
        };
      var ii = Object.defineProperty,
        ci = Object.getOwnPropertySymbols,
        si = Object.prototype.hasOwnProperty,
        di = Object.prototype.propertyIsEnumerable,
        mi = (e, t, a) =>
          t in e
            ? ii(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ui = (e, t) => {
          for (var a in t || (t = {})) si.call(t, a) && mi(e, a, t[a]);
          if (ci) for (var a of ci(t)) di.call(t, a) && mi(e, a, t[a]);
          return e;
        };
      const pi = (e) =>
        r.createElement(ht.T, {
          hasHeader: !0,
          hasFooter: !0,
          hasPrimaryButton: !0,
          hasSecondaryButton: !0,
          titleWidth: 200,
          content: r.createElement(
            Ba.x.Container,
            {
              spacing: 10,
              role: "form",
              "aria-label": "Choose Install Location",
              "data-testid": "InstallLocationModalSkeleton",
            },
            r.createElement(
              Ba.x.Item,
              { xs: 12 },
              r.createElement(
                At.EA,
                ui({ variant: At.qd.Text, width: 50, height: 20 }, e),
              ),
            ),
            r.createElement(
              Ba.x.Item,
              { xs: 9 },
              r.createElement(At.EA, ui({ width: "100%", height: 40 }, e)),
            ),
            r.createElement(
              Ba.x.Item,
              { xs: 3 },
              r.createElement(At.EA, ui({ width: "100%", height: 40 }, e)),
            ),
            r.createElement(
              Ba.x.Item,
              { xs: 12 },
              r.createElement(
                "div",
                { style: { margin: "20px 0" } },
                r.createElement(
                  At.EA,
                  ui({ variant: At.qd.Text, width: "80%", height: 25 }, e),
                ),
              ),
            ),
          ),
        });
      var gi = a(31588),
        bi = a(8430);
      const Ei = (0, I.W)(() => ({ textLabel: (0, u.AH)((0, S.S$)(10)) })),
        yi = ({
          ariaLabel: e,
          checked: t = !1,
          id: a,
          label: n,
          onClick: l,
        }) => {
          const o = (0, b.useSelector)(k.k),
            i = Ei();
          return o
            ? r.createElement(
                Ba.x.Item,
                { xs: 12 },
                r.createElement(
                  Ye.a,
                  { alignItems: Ze.ep.Center },
                  r.createElement(gi.S, {
                    id: a,
                    "aria-label": e,
                    label: n,
                    checked: t,
                    onChange: l,
                  }),
                ),
              )
            : r.createElement(
                Ba.x.Item,
                { xs: 12 },
                r.createElement(
                  Ye.a,
                  { alignItems: Ze.ep.Center },
                  r.createElement(bi.S, {
                    id: a,
                    ariaLabel: e,
                    checked: t,
                    onClick: l,
                  }),
                  r.createElement(
                    "span",
                    { className: i.textLabel },
                    r.createElement(
                      "label",
                      { htmlFor: a, "data-testid": "label" },
                      r.createElement(la.Ay, null, n),
                    ),
                  ),
                ),
              );
        },
        vi =
          (e) =>
          ({ value: t, onClick: a }) => {
            const n = (0, mr.B2)();
            return r.createElement(yi, {
              id: e.id,
              ariaLabel: n(e.titleCode),
              label: r.createElement(mr.QB, { code: e.titleCode }),
              checked: t,
              onClick: a,
            });
          },
        fi = vi({
          id: "installAutoUpdate",
          titleCode: "egstore.library.install_location_modal.auto_update",
        }),
        hi = vi({
          id: "createShortcut",
          titleCode: "egstore.library.install_location_modal.create_shortcut",
        });
      var Ai = a(33329);
      var Ci = a(20513);
      const Ii = (0, u.AH)((0, S.S$)(4)),
        Si = ({
          title: e,
          supportLinkTo: t,
          onOpenSettingsClick: a,
          onCancelClick: r,
        }) =>
          n().createElement(vt._, {
            modalTitle: n().createElement(v.A, {
              code: "egstore.library.launcher_upgrade_modal.update_required",
            }),
            title: n().createElement(v.A, {
              code: "egstore.library.launcher_upgrade_modal.title",
              args: [e],
            }),
            subTitle: n().createElement(
              n().Fragment,
              null,
              n().createElement(
                "p",
                null,
                n().createElement(v.A, {
                  code: "egstore.library.launcher_upgrade_modal.subtitle",
                  args: [e],
                }),
              ),
              n().createElement(
                "p",
                null,
                n().createElement(
                  Ci.Yq,
                  { to: t, isExternalUrl: !0 },
                  n().createElement(v.A, {
                    code: "egstore.library.launcher_upgrade_modal.link",
                  }),
                ),
                n().createElement(
                  "span",
                  { className: Ii },
                  n().createElement(v.A, {
                    code: "egstore.library.launcher_upgrade_modal.body",
                  }),
                ),
              ),
            ),
            secondaryButton: n().createElement(
              yt.u,
              { onClick: r },
              n().createElement(v.A, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: n().createElement(
              Et.S,
              { onClick: a },
              n().createElement(v.A, {
                code: "egstore.library.launcher_upgrade_modal.open_settings",
              }),
            ),
            onCloseClick: r,
          });
      var Oi = a(11277),
        xi = a(63721),
        ki = a(7811);
      const Pi = (0, Vo.P)("launcher-upgrade-modal"),
        wi = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, xi.Jm)(),
            l = (0, Oi.q)(e, t, a),
            o = (() => {
              const e = (0, ua.useLocalizationLocale)();
              return (0, r.useMemo)(
                () =>
                  "https://www.epicgames.com/help/{locale}/c-Category_EpicGamesStore/c-EpicGamesStore_ErrorCodes/launcher-update-required-when-trying-to-launch-a-ubisoft-game-a000089058".replace(
                    "{locale}",
                    e,
                  ),
                [e],
              );
            })(),
            { closeModal: i } = Pi(),
            c = (0, Ai.A)(),
            s = (0, r.useCallback)(() => {
              c(), i();
            }, [c, i]);
          return n().createElement(Si, {
            title: l,
            supportLinkTo: o,
            onOpenSettingsClick: s,
            onCancelClick: i,
          });
        },
        Ni = () => {
          const { isOpen: e, getData: t, cancelModal: a } = Pi(),
            r = t();
          return r
            ? n().createElement(
                _t.a,
                { isOpen: e, onClose: a },
                n().createElement(
                  ki.Y,
                  {
                    namespace: r.namespace,
                    catalogItemId: r.catalogItemId,
                    appName: r.appName,
                  },
                  n().createElement(wi, null),
                ),
              )
            : null;
        };
      var Li = a(66168);
      var _i = a(88830),
        Ti = a(80683);
      var Mi = a(24277);
      var Di = a(45654);
      const Bi = (0, Vo.P)("install-location-modal"),
        Ri = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, xi.Jm)(),
            { closeModal: n, cancelModal: l, getData: o } = Bi(),
            { additionalInstalls: i } = o() || {},
            c = (() => {
              const e = (0, b.useDispatch)();
              return (t) => {
                const a = (0, wo.Es)(t.namespace, t.catalogItemId, t.appName);
                e((0, Wo.ls)({ id: a })),
                  e(
                    (0, zo.Vc)({
                      params: {
                        namespace: t.namespace,
                        catalogId: t.catalogItemId,
                        appName: t.appName,
                      },
                    }),
                  );
              };
            })(),
            s = (0, Uo.E)(),
            d = Fo(),
            { installState: m } = (0, jo.z)(e, t, a),
            u = (0, jo.s)(),
            [p, g] = r.useState(!0),
            [E, y] = r.useState(!0),
            [v, f] = r.useState(!1),
            { path: h, directoryPath: A } = ((e, t, a) => {
              var n;
              const l = (0, wo.Es)(e, t, a),
                { data: o } = (0, Go.a)(l),
                i =
                  null != (n = null == o ? void 0 : o.installLocation) ? n : "",
                c = r.useMemo(
                  () =>
                    ((e) => {
                      var t;
                      return (
                        (null == (t = e.match(/(.*)[\\/]/)) ? void 0 : t[1]) ||
                        ""
                      );
                    })(null != i ? i : ""),
                  [i],
                );
              return { path: i, directoryPath: c };
            })(e, t, a),
            C = ((e, t, a) => {
              const n = (0, wo.$)(e, t, a),
                { data: l, isFetching: o } = (0, Go.a)(n),
                i = (0, Ti.f)(e, t, a),
                c = (0, r.useMemo)(() => (0, dr.U3)(i), [i]),
                s = (0, r.useMemo)(
                  () => (0, ve.zl)(null == i ? void 0 : i.categories),
                  [i],
                );
              return !(!l || o) && !c && !s && l.supportsAutoUpdate;
            })(e, t, a),
            I = (() => {
              const e = (0, b.useSelector)(xa.md);
              return e === Mi.B1.WINDOWS || e === Mi.B1.WIN32;
            })(),
            S = ((e, t, a) => {
              const { installState: n } = (0, jo.z)(e, t, a);
              return (0, r.useMemo)(() => (0, $o.Ur)(n), [n]);
            })(e, t, a),
            { metadata: O } = ((e = "", t = "") => {
              const a = (0, b.useDispatch)(),
                n = (0, r.useMemo)(() => (0, An.RY)(t), [t]),
                l = (0, b.useSelector)(n),
                o = Boolean(e && t),
                i =
                  !(null == l ? void 0 : l.state) ||
                  (null == l ? void 0 : l.state) === Li.V.notAsked;
              return (
                (0, r.useEffect)(() => {
                  o && i && a((0, Cn.Lk)({ sandboxId: e, artifactId: t }));
                }, [o, i]),
                (0, r.useMemo)(
                  () => ({
                    metadata: null == l ? void 0 : l.latestValue,
                    query: {
                      isFetching:
                        (null == l ? void 0 : l.state) === Li.V.fetching,
                      isSuccess:
                        (null == l ? void 0 : l.state) === Li.V.success,
                    },
                  }),
                  [
                    null == l ? void 0 : l.latestValue,
                    null == l ? void 0 : l.state,
                  ],
                )
              );
            })(e, a),
            x = (0, $o.z3)((null == O ? void 0 : O.downloadSizeBytes) || 0),
            k = (0, $o.z3)((null == O ? void 0 : O.installedSizeBytes) || 0);
          (0, r.useEffect)(
            () => (
              (0, me.default)()
                .installDialogOpen(e, t, a)
                .then(() => u(e, t, a)),
              () => {
                (0, me.default)().installDialogClosed(e, t, a).then();
              }
            ),
            [],
          );
          const P = r.useMemo(() => (0, $o.$A)(m), [m]),
            w = r.useMemo(
              () => Boolean(!h || P),
              [h, null == m ? void 0 : m.stateerror],
            ),
            N = r.useCallback(() => {
              c({ namespace: e, catalogItemId: t, appName: a });
            }, [c, e, t, a]),
            L = r.useCallback(() => {
              s({ namespace: e, catalogId: t, appName: a });
            }, [s, e, t, a]),
            _ = r.useCallback(() => {
              f(!0);
              var r, l, o;
              ((r = void 0),
              (l = null),
              (o = function* () {
                const r = yield d({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  options: { autoUpdate: p, createShortcut: E },
                });
                return (
                  i &&
                    (yield Promise.all(
                      i.map((e) =>
                        d({
                          namespace: e.namespace,
                          catalogId: e.catalogItemId,
                          appName: e.appName,
                          options: { autoUpdate: p, createShortcut: E },
                        }),
                      ),
                    )),
                  r
                );
              }),
              new Promise((e, t) => {
                var a = (e) => {
                    try {
                      i(o.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  n = (e) => {
                    try {
                      i(o.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  i = (t) =>
                    t.done ? e(t.value) : Promise.resolve(t.value).then(a, n);
                i((o = o.apply(r, l)).next());
              }))
                .then((e) => {
                  e && n();
                })
                .finally(() => {
                  f(!1);
                });
            }, [n, d, e, t, a, p, E, i]);
          return r.createElement(oi, {
            isInstallDisabled: w,
            hasInstallOptions: S,
            isBusy: v,
            onBrowseClick: N,
            onCancelClick: l,
            onInstallClick: _,
            onInstallOptionsClick: L,
            path: h,
            directoryPath: A,
            error: P,
            downloadSize: x,
            requiredSpace: k,
            options: r.createElement(
              r.Fragment,
              null,
              C &&
                r.createElement(fi, { value: p, onClick: () => g((e) => !e) }),
              I &&
                r.createElement(hi, { value: E, onClick: () => y((e) => !e) }),
            ),
          });
        },
        ji = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, xi.Jm)(),
            n = qo(),
            { closeModal: l } = Bi(),
            { openModal: o } = Pi(),
            i = (0, Ti.f)(e, t, a),
            { isThirdPartyManaged: c, triggerInstallToast: s } = (0, Di.K)(
              e,
              t,
              a,
            ),
            d = (0, me.default)().supportsWebClientInstallFlow(),
            m = (0, _i.r)(e, t, a),
            u = m && (0, dr.U3)(i),
            p = (0, me.default)().supportsUbisoftThirdPartyInstalls(),
            g = m && !p && !(0, dr.U3)(i);
          return (
            r.useEffect(() => {
              if (g)
                return (
                  o({ namespace: e, catalogItemId: t, appName: a }), void l()
                );
              (u && !p) ||
                (d && !c) ||
                (n({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: Wn.dE.MANAGE_PRODUCT_MODAL,
                }),
                c && s(),
                l());
            }, [g, p, u, d, c, e, t, a]),
            g
              ? r.createElement(pi, null)
              : (u && !p) || (d && !c)
                ? r.createElement(Ri, null)
                : r.createElement(pi, null)
          );
        },
        Hi = () => {
          const { isOpen: e, cancelModal: t, getData: a } = Bi(),
            n = a();
          return n
            ? r.createElement(
                _t.a,
                { isOpen: e, onClose: t },
                r.createElement(
                  i.tY,
                  { fallback: r.createElement(pi, null) },
                  r.createElement(
                    ki.Y,
                    {
                      namespace: n.namespace,
                      catalogItemId: n.catalogItemId,
                      appName: n.appName,
                    },
                    r.createElement(ji, null),
                  ),
                ),
              )
            : null;
        };
      var Fi = a(40970),
        $i = a(9909);
      const zi = (e) => {
          const { namespace: t, catalogItemId: a, appName: n } = e,
            { openModal: l } = Bi(),
            o = Fo(),
            i = (0, $i.b)(t, a, n),
            { isLaunchableAddon: c, install: s } = (0, Fi.G)(t, a, n),
            { installState: d } = (0, jo.z)(
              c ? (null == i ? void 0 : i.namespace) : "",
              c ? (null == i ? void 0 : i.catalogItemId) : "",
              c ? (null == i ? void 0 : i.appName) : "",
            );
          return (0, r.useCallback)(() => {
            const t = (0, $o.Wl)(d),
              a = (0, $o.Ji)(d),
              r = (0, $o.GM)(d);
            if (c && d)
              if ((0, me.default)().supportsLaunchableAddonsV2Flow()) {
                if (t || a || r)
                  return o({
                    namespace: e.namespace,
                    catalogId: e.catalogItemId,
                    appName: e.appName,
                    options: void 0,
                  });
                l({
                  namespace: d.namespace,
                  catalogItemId: d.catalogid,
                  appName: d.appname,
                  additionalInstalls: [e],
                });
              } else
                t
                  ? s()
                  : i &&
                    l({
                      namespace: i.namespace,
                      catalogItemId: i.catalogItemId,
                      appName: i.appName,
                    });
            else l(e);
          }, [c, s, o, l, e, i, d]);
        },
        Wi = (0, Do.n)({
          useButtonAction: zi,
          SubtitleComponent: Ro.N,
          hasSettingsMenu: !0,
        }),
        qi = (0, Do.n)({
          useButtonAction: zi,
          SubtitleComponent: Ro._,
          hasSettingsMenu: !0,
        });
      var Ui = a(42414);
      const Vi = (0, Do.n)({
          useButtonAction: Ui.b,
          SubtitleComponent: za.h8,
          hasSettingsMenu: !0,
        }),
        Gi = (0, Do.n)({
          useButtonAction: Ui.b,
          SubtitleComponent: za.Xp,
          hasSettingsMenu: !0,
        }),
        Yi = (0, Do.n)({
          useButtonAction: Ui.b,
          SubtitleComponent: za.ix,
          hasSettingsMenu: !0,
        });
      var Zi = a(33475);
      const Ji = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: Zi.Y,
        hasSettingsMenu: !1,
      });
      var Qi = a(90574),
        Ki = a(71180);
      const Xi = (0, Do.n)({
        useButtonAction: Ki.F,
        SubtitleComponent: Qi.E,
        hasSettingsMenu: !0,
      });
      var ec = a(88116),
        tc = a(33783),
        ac = a(21030);
      const rc = (0, a(66238).o)(tc.L),
        nc = (0, Do.n)({
          useButtonAction: rc,
          SubtitleComponent: ac.Z,
          hasSettingsMenu: !1,
        });
      var lc = a(80327),
        oc = a(84953);
      const ic = () => (0, oc.R)("UE"),
        cc = (0, Do.n)({
          useButtonAction: ic,
          SubtitleComponent: lc.w,
          hasSettingsMenu: !1,
        });
      var sc = a(4088),
        dc = a(10407),
        mc = a(90952),
        uc = a(45e3);
      const pc = (e) => !(0, uc.K)(e.namespace, e.catalogItemId, e.appName),
        gc = (0, Do.n)({
          useButtonAction: Mo,
          SubtitleComponent: mc.pl,
          hasSettingsMenu: !1,
        }),
        bc = (0, Do.n)({
          useButtonAction: sc.y,
          useIsButtonActionDisabled: pc,
          SubtitleComponent: mc.hb,
          hasSettingsMenu: !0,
        }),
        Ec = (0, Do.n)({
          useButtonAction: dc.T,
          SubtitleComponent: mc.Fo,
          hasSettingsMenu: !0,
        }),
        yc = (0, Do.n)({
          useButtonAction: Mo,
          SubtitleComponent: o.O,
          hasSettingsMenu: !1,
        });
      var vc = a(29516);
      const fc = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: vc.N,
        hasSettingsMenu: !0,
      });
      var hc = a(6521);
      const Ac = (0, Do.n)({
        useButtonAction: dc.T,
        SubtitleComponent: hc._,
        hasSettingsMenu: !0,
      });
      var Cc = a(92120);
      const Ic = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: Cc.N,
        hasSettingsMenu: !0,
      });
      var Sc = a(40303);
      const Oc = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: Sc.k,
        hasSettingsMenu: !0,
      });
      var xc = a(89716);
      const kc = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: xc.v,
        hasSettingsMenu: !0,
      });
      (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: xc.R,
        hasSettingsMenu: !0,
      });
      var Pc = a(84380);
      const wc = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: Pc.n,
        hasSettingsMenu: !1,
      });
      var Nc = a(47571),
        Lc = a(13583);
      const _c = (0, Do.n)({
        useButtonAction: Nc.Y,
        SubtitleComponent: Lc.o,
        hasSettingsMenu: !0,
      });
      var Tc = a(27920),
        Mc = a(98780);
      const Dc = ({ namespace: e }) => {
          const { gotoProductHome: t } = (0, Mc.r)(e, { suspense: !1 });
          return t;
        },
        Bc = (0, Do.n)({
          useButtonAction: Dc,
          SubtitleComponent: Tc.B,
          hasSettingsMenu: !0,
        });
      var Rc = a(34222);
      const jc = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: Rc.W,
        hasSettingsMenu: !0,
      });
      var Hc = a(34884);
      const Fc = (0, Do.n)({
        useButtonAction: Mo,
        SubtitleComponent: Hc.T,
        hasSettingsMenu: !0,
      });
      var $c = a(85660),
        zc = a(50647);
      const Wc = (0, Do.n)({
        useButtonAction: zc.L,
        SubtitleComponent: $c.T,
        hasSettingsMenu: !0,
        hasUpdate: !0,
      });
      var qc = a(16358),
        Uc = a(15319),
        Vc = a(17835),
        Gc = a(80378),
        Yc = a(39340),
        Zc = a(80446),
        Jc = a(27721);
      const Qc = (e) =>
          (0, Vc.f)(Gc.t.Ubisoft, null == e ? void 0 : e.customAttributes),
        Kc = ({ namespace: e, catalogItemId: t, appName: a }) => {
          const n = (0, b.useDispatch)(),
            { uplayCodes: l } = (0, Zc.iT)(),
            o = (0, Uc.t)(e, t, a, {
              includeMainGameItem: !0,
              includeHiddenAddons: !0,
            }),
            i = (0, r.useMemo)(() => {
              const e = o.map((e) => e.catalogItem);
              return (0, Jc.r)(e.map(Qc)).filter(
                ((e) => (t) => {
                  const a =
                    null == e
                      ? void 0
                      : e.find(
                          (
                            (e) => (t) =>
                              t.gameId === e
                          )(t),
                        );
                  return !(null == a ? void 0 : a.redeemedOnUplay);
                })(l),
              );
            }, [o, l]);
          return (0, r.useCallback)(() => {
            (null == i ? void 0 : i.length) &&
              n((0, Yc.E)({ partnerGameIds: i }));
          }, [i, n]);
        },
        Xc = (0, Do.n)({
          useButtonAction: Kc,
          SubtitleComponent: qc.T,
          hasSettingsMenu: !1,
        }),
        es = () => {
          const e = (0, b.useDispatch)();
          return (0, r.useCallback)(() => {
            e(eo.Ay.startUplayLinkProcess());
          }, [e]);
        };
      var ts = a(30848);
      const as = (0, Do.n)({
        useButtonAction: es,
        SubtitleComponent: ts.z,
        hasSettingsMenu: !1,
      });
      var rs = a(31739),
        ns = a(37245),
        ls = a(85701);
      const os = (0, rs.V)({
          icon: r.createElement(ls.T, null),
          Component: ns.Un,
        }),
        is = (0, Do.n)({
          useButtonAction: Mo,
          SubtitleComponent: os,
          hasSettingsMenu: !0,
        });
      var cs = a(94407),
        ss = a(51701);
      const ds = {
          [ss.r.Banned]: Bo,
          [ss.r.CanInstall]: Wi,
          [ss.r.CanLaunchMultiple]: Gi,
          [ss.r.CanLaunchRestricted]: Yi,
          [ss.r.CanLaunch]: Vi,
          [ss.r.CanPreInstall]: qi,
          [ss.r.CloudSyncing]: Ji,
          [ss.r.Corrupted]: Xi,
          [ss.r.ForceGet]: ec.$l,
          [ss.r.ForceUninstall]: nc,
          [ss.r.GotoHub]: cc,
          [ss.r.InstallingPaused]: Ec,
          [ss.r.InstallingPreparing]: gc,
          [ss.r.Installing]: bc,
          [ss.r.Loading]: yc,
          [ss.r.Offline]: fc,
          [ss.r.PartiallyInstalled]: Ac,
          [ss.r.PreInstalled]: Ic,
          [ss.r.PrePurchased]: Oc,
          [ss.r.QueuedForUpdate]: kc,
          [ss.r.Queued]: kc,
          [ss.r.Running]: wc,
          [ss.r.SelfUpdate]: yc,
          [ss.r.SignIn]: _c,
          [ss.r.Subscription]: Bc,
          [ss.r.Unavailable]: jc,
          [ss.r.Unsupported]: Fc,
          [ss.r.Update]: Wc,
          [ss.r.UplayRedeem]: Xc,
          [ss.r.UplaySignIn]: as,
          [ss.r.WaitingInLine]: is,
        },
        ms = ({ layout: e }) => {
          const { namespace: t, catalogItemId: a, appName: n } = (0, xi.Jm)(),
            { GridCard: l, ListCard: o } = (({
              namespace: e,
              catalogItemId: t,
              appName: a,
            }) => {
              const r = (0, cs.C)(e, t, a);
              return ds[r];
            })({ namespace: t, catalogItemId: a, appName: n });
          return e === wr.p5.Grid
            ? r.createElement(l, null)
            : r.createElement(o, null);
        },
        us = ({ index: e = -1, layout: t }) => {
          const [a, n] = r.useState(e >= 0 && e < 24),
            l = (0, r.useCallback)(
              ({ isIntersecting: e }) => {
                n(e);
              },
              [n],
            ),
            o = t === wr.p5.Grid ? Jl : Ql;
          return r.createElement(
            _o.Ay,
            { disabled: a, rootMargin: "50%", onChange: l },
            r.createElement(
              "div",
              null,
              a
                ? r.createElement(
                    i.tY,
                    { fallback: r.createElement(o, { animation: At.J6.None }) },
                    r.createElement(ms, { layout: t }),
                  )
                : r.createElement(o, { animation: At.J6.None }),
            ),
          );
        };
      var ps = a(14531),
        gs = a(54699),
        bs = a(40440);
      const Es = (0, I.W)((e, t) => ({
          wrapper: (0, u.AH)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: t ? "32px 48px" : "192px 0 20px 0",
            gap: 24,
          }),
          title: (0, u.AH)({ width: 608 }),
        })),
        ys = () => {
          const e = (0, b.useSelector)(k.k),
            t = Es(e),
            { resetFilters: a } = (0, Er.t)(),
            { selectedCollectionId: n } = (0, Ve.Z)(),
            l = r.useMemo(
              () =>
                n === W.V.ALL
                  ? "egstore.library.empty_filter_results.title.all"
                  : "egstore.library.empty_filter_results.title.collection",
              [n],
            ),
            o = r.useMemo(
              () =>
                n === W.V.ALL
                  ? "egstore.library.empty_filter_results.button.all"
                  : "egstore.library.empty_filter_results.button.collection",
              [n],
            ),
            i = () =>
              e
                ? r.createElement(
                    z.E,
                    { variant: x.ZJ.HMD, color: x.Uf.PRIMARY },
                    r.createElement(v.A, { code: l }),
                  )
                : r.createElement(
                    ps.A.Heading,
                    { headingLevel: 1 },
                    r.createElement(v.A, { code: l }),
                  ),
            c = () =>
              e
                ? r.createElement(
                    va.$,
                    {
                      variant: x.ml.PRIMARY,
                      size: x.sp.LG,
                      onClick: () => a(),
                    },
                    r.createElement(v.A, { code: o }),
                  )
                : r.createElement(
                    Pa.rp,
                    { onClick: () => a() },
                    r.createElement(v.A, { code: o }),
                  );
          return r.createElement(
            "div",
            {
              className: t.wrapper,
              "data-testid": "empty-filter-result-alert",
            },
            e &&
              r.createElement(gs.A, {
                icon: bs.A.STRESSED_FACE_EDS,
                size: Xo.A.LARGE,
              }),
            r.createElement(
              "div",
              { "aria-live": "polite", role: "alert", className: t.title },
              r.createElement(i, null),
            ),
            r.createElement(c, null),
          );
        };
      var vs = a(96687);
      const fs = ({ pageSize: e, options: t, onChange: a, layout: r }) =>
        n().createElement(Al.w, {
          id: "page-size-dropdown",
          label: n().createElement(v.A, {
            code: `egstore.library.page_size.title.${r.toLowerCase()}`,
          }),
          options: t,
          selectedValue: e,
          onChange: a,
        });
      var hs = ((e) => (
        (e.Page = "page"),
        (e.Previous = "previous"),
        (e.StartEllipsis = "start-ellipsis"),
        (e.Next = "next"),
        (e.EndEllipsis = "end-ellipsis"),
        e
      ))(hs || {});
      const As = (e, t) => {
        const a = t - e + 1;
        return Array.from({ length: a }, (t, a) => e + a);
      };
      var Cs = a(48412),
        Is = a(39279),
        Ss = Object.defineProperty,
        Os = Object.getOwnPropertySymbols,
        xs = Object.prototype.hasOwnProperty,
        ks = Object.prototype.propertyIsEnumerable,
        Ps = (e, t, a) =>
          t in e
            ? Ss(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ws = (e, t) => {
          for (var a in t || (t = {})) xs.call(t, a) && Ps(e, a, t[a]);
          if (Os) for (var a of Os(t)) ks.call(t, a) && Ps(e, a, t[a]);
          return e;
        };
      const Ns = (0, I.W)((e) => ({
          delimiter: (0, u.AH)({ color: e.textSecondary }),
          number: (0, u.AH)({
            'button:hover:not([disabled]) &, button[aria-current="true"] &': {
              color: e.textPrimary,
              fontWeight: oa.Wy.bold,
            },
            "button:disabled &": { display: "none" },
          }),
          icon: (0, u.AH)((0, S.hp)("rtl")),
        })),
        Ls = (e) => {
          var t = e,
            {
              page: a,
              selected: n = !1,
              disabled: l = !1,
              type: o = hs.Page,
              onClick: i,
            } = t,
            c = ((e, t) => {
              var a = {};
              for (var r in e)
                xs.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Os)
                for (var r of Os(e))
                  t.indexOf(r) < 0 && ks.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["page", "selected", "disabled", "type", "onClick"]);
          const s = Ns(),
            d = ((e, t, a) => {
              const n = (0, ua.useLocalization)();
              return r.useMemo(
                () =>
                  e === hs.Page
                    ? n(
                        a
                          ? "epic.store.pagination.page"
                          : "epic.store.pagination.go_to_page",
                        [t],
                      )
                    : n("epic.store.pagination.go_to_page", [t]),
                [e, a, t],
              );
            })(o, a, n);
          return o === hs.StartEllipsis || o === hs.EndEllipsis
            ? r.createElement("div", { className: s.delimiter }, "…")
            : o === hs.Previous
              ? r.createElement(
                  "div",
                  { className: s.icon, "data-testid": "previous" },
                  r.createElement(
                    h.K,
                    ws(
                      { disabled: l, onClick: () => i(a - 1), "aria-label": d },
                      c,
                    ),
                    r.createElement(Cs.Y, null),
                  ),
                )
              : o === hs.Next
                ? r.createElement(
                    "div",
                    { className: s.icon, "data-testid": "next" },
                    r.createElement(
                      h.K,
                      ws(
                        {
                          disabled: l,
                          onClick: () => i(a + 1),
                          "aria-label": d,
                        },
                        c,
                      ),
                      r.createElement(Is.f, null),
                    ),
                  )
                : r.createElement(
                    wa.B_,
                    ws(
                      ws(
                        {
                          buttonWidth: f.Rj.AUTO,
                          disabled: l,
                          onClick: () => i(a),
                          "aria-label": d,
                        },
                        c,
                      ),
                      n ? { "aria-current": !0 } : {},
                    ),
                    r.createElement(
                      Za.A,
                      { textLevel: G.qo.SECONDARY },
                      r.createElement("span", { className: s.number }, a),
                    ),
                  );
        };
      var _s = a(92619),
        Ts = Object.defineProperty,
        Ms = Object.defineProperties,
        Ds = Object.getOwnPropertyDescriptors,
        Bs = Object.getOwnPropertySymbols,
        Rs = Object.prototype.hasOwnProperty,
        js = Object.prototype.propertyIsEnumerable,
        Hs = (e, t, a) =>
          t in e
            ? Ts(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Fs = {
          list: (0, u.AH)({
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }),
          listItem: (0, u.AH)({
            width: 50,
            textAlign: "center",
            "&:first-of-type": (0, S.hz)(8),
          }),
        },
        $s = ({ page: e, totalPages: t, onClick: a }) => {
          const n = r.useRef(null),
            l = (0, ua.useLocalization)(),
            { items: o } = (({ totalPages: e, page: t }) => {
              const a = (0, r.useMemo)(() => As(1, Math.min(1, e)), [e]),
                n = (0, r.useMemo)(() => As(Math.max(e - 1 + 1, 2), e), [e]),
                l = Math.max(Math.min(t - 1, e - 1 - 2 - 1), 3),
                o = Math.min(
                  Math.max(t + 1, 5),
                  n.length > 0 ? n[0] - 2 : e - 1,
                );
              return {
                items: (0, r.useMemo)(
                  () => [
                    "previous",
                    ...a,
                    ...(l > 3 ? ["start-ellipsis"] : 2 < e - 1 ? [2] : []),
                    ...As(l, o),
                    ...(o < e - 1 - 1
                      ? ["end-ellipsis"]
                      : e - 1 > 1
                        ? [e - 1]
                        : []),
                    ...n,
                    "next",
                  ],
                  [a, l, o, n, e],
                ).map((a) =>
                  "number" == typeof a
                    ? {
                        type: "page",
                        page: a,
                        selected: a === t,
                        disabled: !1,
                        "aria-current": a === t ? "true" : void 0,
                      }
                    : {
                        type: a,
                        page: t,
                        selected: !1,
                        disabled:
                          -1 === a.indexOf("ellipsis") &&
                          ("next" === a ? t >= e : t <= 1),
                      },
                ),
              };
            })({ page: e, totalPages: t });
          return r.createElement(
            "nav",
            {
              ref: n,
              "data-testid": "library-pagination",
              role: "navigation",
              "aria-label": l("epic.store.pagination.pagination_navigation"),
            },
            r.createElement(
              _s.B,
              { data: o, className: Fs.list, itemClassName: Fs.listItem },
              (e, t) => {
                return r.createElement(
                  Ls,
                  ((n = ((e, t) => {
                    for (var a in t || (t = {}))
                      Rs.call(t, a) && Hs(e, a, t[a]);
                    if (Bs)
                      for (var a of Bs(t)) js.call(t, a) && Hs(e, a, t[a]);
                    return e;
                  })({}, e)),
                  (l = { onClick: a, key: `${e.page}-${t}` }),
                  Ms(n, Ds(l))),
                );
                var n, l;
              },
            ),
          );
        };
      var zs = a(96416),
        Ws = Object.defineProperty,
        qs = Object.getOwnPropertySymbols,
        Us = Object.prototype.hasOwnProperty,
        Vs = Object.prototype.propertyIsEnumerable,
        Gs = (e, t, a) =>
          t in e
            ? Ws(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ys = (e, t) => {
          for (var a in t || (t = {})) Us.call(t, a) && Gs(e, a, t[a]);
          if (qs) for (var a of qs(t)) Vs.call(t, a) && Gs(e, a, t[a]);
          return e;
        };
      const Zs = {
          footer: (0, u.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }),
          pagination: (0, u.AH)({
            [oa.aq.lg]: Ys({}, (0, S.hz)(31)),
            [oa.aq.xl]: Ys({}, (0, S.hz)(42)),
            [oa.aq.maxWidth]: Ys({}, (0, S.hz)(57)),
          }),
        },
        Js = ({
          totalItems: e,
          totalPages: t,
          page: a,
          setPage: r,
          pageSize: l,
          setPageSize: o,
          options: i,
          keyword: c,
          layout: s,
        }) => {
          const d = (0, b.useSelector)(k.k),
            m = a * l - l,
            u = m + 1,
            p = e < l ? e : l,
            g = m + p > e ? e : m + p,
            E = t > 1,
            y = pa(c),
            f = n().useMemo(
              () =>
                u === e
                  ? n().createElement(
                      "div",
                      { "data-testid": "shortened-text" },
                      n().createElement(v.A, {
                        code: "egstore.library.hub.product.plugins.showing_last",
                        args: [u, e],
                      }),
                    )
                  : n().createElement(
                      "div",
                      { "data-testid": "full-text" },
                      n().createElement(v.A, {
                        code: "egstore.library.hub.product.plugins.showing",
                        args: [u, g, e],
                      }),
                    ),
              [u, g, e],
            );
          n().useEffect(
            () => (l >= e || c !== y ? r(1) : a >= t ? r(t) : void 0),
            [l, e, c],
          );
          const h = n().useCallback(
              (e) => {
                a !== e && r(e),
                  (0, vs.c)().window.scrollTo({ top: 0, behavior: "smooth" });
              },
              [a, l, e],
            ),
            A = n().useCallback(
              () =>
                d
                  ? n().createElement(
                      z.E,
                      { variant: x.ZJ.UIMD, color: x.Uf.SECONDARY },
                      f,
                    )
                  : n().createElement(la.Ay, { textLevel: G.qo.SECONDARY }, f),
              [d, f],
            );
          return n().createElement(
            "div",
            { className: Zs.footer },
            n().createElement(A, null),
            E &&
              n().createElement(
                "div",
                { className: Zs.pagination },
                d
                  ? n().createElement(zs.A, {
                      totalPages: t,
                      itemsPerPage: l,
                      page: a,
                      onChange: (e, t) => h(t),
                    })
                  : n().createElement($s, {
                      page: a,
                      totalPages: t,
                      onClick: h,
                    }),
              ),
            e > i[0].value
              ? n().createElement(fs, {
                  pageSize: l,
                  onChange: o,
                  options: i,
                  layout: s,
                })
              : null,
          );
        };
      var Qs = a(91608);
      var Ks = Object.defineProperty,
        Xs = Object.defineProperties,
        ed = Object.getOwnPropertyDescriptors,
        td = Object.getOwnPropertySymbols,
        ad = Object.prototype.hasOwnProperty,
        rd = Object.prototype.propertyIsEnumerable,
        nd = (e, t, a) =>
          t in e
            ? Ks(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ld = ({ totalItems: e, options: t, key: a }) => {
        const l = (0, b.useSelector)(xa.n9),
          o = t[0].value,
          [i, c] = (0, r.useState)(1),
          s = {
            keyFn: () => `${a}_${l || Da.c.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          { value: d, setValue: m } = (0, Oa.$)(
            ((u = ((e, t) => {
              for (var a in t || (t = {})) ad.call(t, a) && nd(e, a, t[a]);
              if (td) for (var a of td(t)) rd.call(t, a) && nd(e, a, t[a]);
              return e;
            })({}, s)),
            Xs(u, ed({ initialValue: o }))),
          );
        var u;
        const p = (0, r.useMemo)(() => {
            const t = Math.ceil(e / (null != d ? d : o));
            return t > 0 ? t : 1;
          }, [e, d]),
          g = (0, r.useCallback)(
            (e) => {
              c((0, Qs.A)(1, p, e));
            },
            [p, c],
          ),
          E = (0, r.useCallback)(
            (e) => {
              m(e), c(1);
            },
            [m, c],
          ),
          y = n().useCallback(
            (e) =>
              ((e, t, a) => {
                const r = t * a - a;
                return e.slice(r, r + a);
              })(e, i, d),
            [d, i],
          );
        return {
          page: i,
          setPage: g,
          totalPages: p,
          pageSize: null != d ? d : o,
          setPageSize: E,
          applyPagination: y,
        };
      };
      var od = ((e) => (
        (e.TEN = "TEN"),
        (e.TWELVE = "TWELVE"),
        (e.TWENTY_FOUR = "TWENTY_FOUR"),
        e
      ))(od || {});
      var id = a(29964),
        cd = a(26767),
        sd = a(63008),
        dd = a(86394),
        md = a(4288),
        ud = a(75745),
        pd = a(34125);
      const gd = (0, ge.A)(
          (0, id.A)((e) => {
            var t;
            return null != (t = null == e ? void 0 : e.id) ? t : null;
          }),
          (0, cd.A)(sd.A),
        ),
        bd = ({ offerItem: e, catalogItem: t }) => {
          const {
              offer: a,
              offerSubItems: n,
              isBundle: l,
            } = ((e) => {
              const { data: t } = (0, ud._b)(
                  {
                    fields: [ud.rO.items, ud.rO.title, ud.rO.categories],
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                ),
                { offerSubItems: a } = (0, pd.Y)(
                  {
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                );
              return {
                offer: t,
                offerSubItems: a,
                isBundle: (0, ve.Ff)(null == t ? void 0 : t.categories),
              };
            })(e),
            { records: o } = Ue(),
            { data: i } = (0, md.R7)(
              {
                fields: [md.id.title],
                itemId: null == t ? void 0 : t.catalogItemId,
                sandboxId: null == t ? void 0 : t.sandboxId,
              },
              { enabled: Boolean(t) },
            );
          return (0, r.useMemo)(() => {
            var r;
            const c = o.filter(
              (t) => t.namespace === (null == e ? void 0 : e.sandboxId),
            );
            return {
              catalogItemIds:
                l || Boolean(t)
                  ? ((e, t, a) => {
                      var r;
                      if (e) return [e.catalogItemId];
                      const n = gd(
                          null != (r = null == t ? void 0 : t.items) ? r : [],
                        ),
                        l = gd(null != a ? a : []);
                      return (0, dd.A)([...n, ...l]);
                    })(t, a, null != n ? n : [])
                  : c.map((e) => e.catalogItemId),
              title: i
                ? i.title
                : null != (r = null == a ? void 0 : a.title)
                  ? r
                  : "",
            };
          }, [e, a, n, t, i, l, o]);
        };
      var Ed = a(80802),
        yd = Object.defineProperty,
        vd = Object.defineProperties,
        fd = Object.getOwnPropertyDescriptors,
        hd = Object.getOwnPropertySymbols,
        Ad = Object.prototype.hasOwnProperty,
        Cd = Object.prototype.propertyIsEnumerable,
        Id = (e, t, a) =>
          t in e
            ? yd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Sd = ({ setSortType: e }) => {
        const {
            sort: t,
            offerItem: a,
            catalogItem: n,
            collectionId: l,
            resetQueryParams: o,
          } = Pr(),
          { catalogItemIds: i, title: c } = bd({
            offerItem: a,
            catalogItem: n,
          }),
          { setSelectedFilters: s } = (0, Er.t)(),
          { setValue: d } = (0, Oa.$)({
            keyFn: () => wr.V,
            localStorageEnabled: !0,
            initialValue: "",
          });
        (0, r.useEffect)(() => {
          var a, r;
          t === Ed.i.PurchaseDate && i.length && c
            ? (e(wr.r3.Recent_Purchased),
              s(
                ((a = ((e, t) => {
                  for (var a in t || (t = {})) Ad.call(t, a) && Id(e, a, t[a]);
                  if (hd) for (var a of hd(t)) Cd.call(t, a) && Id(e, a, t[a]);
                  return e;
                })({}, Ar.S1)),
                (r = { [Ar.bn.CATALOG_ITEM_ID]: i }),
                vd(a, fd(r))),
              ),
              d(c))
            : t === Ed.i.PurchaseDate && l === W.V.ALL
              ? (s(Ar.S1), e(wr.r3.Recent_Purchased), o())
              : t === Ed.i.PurchaseDate && (e(wr.r3.Recent_Purchased), o());
        }, [t, i, c, l]);
      };
      var Od = a(57428),
        xd = Object.defineProperty,
        kd = Object.defineProperties,
        Pd = Object.getOwnPropertyDescriptors,
        wd = Object.getOwnPropertySymbols,
        Nd = Object.prototype.hasOwnProperty,
        Ld = Object.prototype.propertyIsEnumerable,
        _d = (e, t, a) =>
          t in e
            ? xd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Td = ({ layout: e, setLayout: t }) => {
          const { selectedCollectionId: a, setSelectedCollectionId: n } = (0,
            Ve.Z)(),
            {
              selectedFilters: l,
              setSelectedFilters: o,
              applySelectedFilters: i,
            } = (0, Er.t)(),
            { records: c, query: s } = Ue(a),
            d = (0, q.S)(),
            m = (0, b.useSelector)(xa.n9),
            {
              sortType: u,
              setSortType: p,
              applySortType: g,
            } = ((e) =>
              hl({
                keyFn: () => `${wr.Pd}_${e || Da.c.ANONYMOUS}`,
                localStorageEnabled: !0,
              }))(m),
            E = (0, Ma.al)(),
            y = ((e) => {
              const t =
                  (0, ua.useLocalization)()("egstore.library.filter.all") ||
                  "All",
                a = {
                  TEN: [
                    { label: "10", value: 10 },
                    { label: "20", value: 20 },
                    { label: "30", value: 30 },
                    { label: t, value: 99999 },
                  ],
                  TWELVE: [
                    { label: "12", value: 12 },
                    { label: "24", value: 24 },
                    { label: "36", value: 36 },
                    { label: t, value: 99999 },
                  ],
                  TWENTY_FOUR: [
                    { label: "24", value: 24 },
                    { label: "36", value: 36 },
                    { label: "48", value: 48 },
                    { label: t, value: 99999 },
                  ],
                };
              return (0, r.useMemo)(() => a[e], [e]);
            })(od.TWENTY_FOUR),
            v = (0, Ta.useHistory)();
          Sd({ setSortType: p });
          const f = r.useMemo(() => (0, ge.A)(i, g)(c), [c, g, i]),
            h = f.length,
            {
              page: A,
              setPage: C,
              totalPages: I,
              pageSize: S,
              setPageSize: O,
              applyPagination: x,
            } = ld({
              totalItems: h,
              options: y,
              key: wr.Xg.EGS_LIBRARY_PAGE_SIZE,
            }),
            k = r.useMemo(() => x(f), [x, f]);
          r.useEffect(() => {
            C(1);
          }, [u, l, a]),
            r.useEffect(() => {
              const e = v.listen((e) => {
                var t, a;
                e.pathname.includes(kr.A.LibraryPath) ||
                  o(
                    ((t = ((e, t) => {
                      for (var a in t || (t = {}))
                        Nd.call(t, a) && _d(e, a, t[a]);
                      if (wd)
                        for (var a of wd(t)) Ld.call(t, a) && _d(e, a, t[a]);
                      return e;
                    })({}, l)),
                    (a = { [Ar.bn.CATALOG_ITEM_ID]: [] }),
                    kd(t, Pd(a))),
                  );
              });
              return () => {
                e();
              };
            }, [l]);
          const P = () => {
              n(W.V.ALL), p(wr.r3.Recent_Played);
            },
            w = () => {
              n(W.V.ALL), p(wr.r3.Time_Played);
            },
            N = r.useMemo(() => E || !c.length, [E, c]),
            L = r.useMemo(
              () =>
                r.createElement(kl, {
                  layoutType: e,
                  onLayoutChange: t,
                  sortType: u,
                  onSortChange: p,
                }),
              [e, t, u, p],
            ),
            _ = r.useMemo(
              () =>
                k.length
                  ? r.createElement(Js, {
                      totalItems: h,
                      totalPages: I,
                      page: A,
                      setPage: C,
                      pageSize: S,
                      setPageSize: O,
                      options: y,
                      layout: e,
                      keyword: l[Ar.bn.KEYWORD],
                    })
                  : null,
              [h, I, A, C, S, O, y, e, l[Ar.bn.KEYWORD]],
            ),
            T = r.useCallback(
              ({ namespace: t, catalogItemId: a, appName: n }, l) =>
                r.createElement(
                  ki.Y,
                  { namespace: t, catalogItemId: a, appName: n },
                  r.createElement(us, { index: l, layout: e }),
                ),
              [e],
            ),
            M = (0, Od._)(l),
            D = (0, Od.L2)(l),
            B = r.useMemo(() => (0, Od.rv)(l), [l]),
            R = !M && c.length < 2 && !B && !D,
            j = M && N,
            H = (D || B) && !f.length && !N,
            F = r.useMemo(
              () =>
                a === d
                  ? r.createElement(br, { onActionClick: w })
                  : r.createElement(pr, { onActionClick: P }),
              [a, d],
            );
          return s.isFetching && !c.length
            ? r.createElement(Lo, { layout: e })
            : r.createElement(ho, {
                header: L,
                footer: _,
                items: k,
                totalItems: h,
                shouldShowEmptyLibraryCard: R,
                renderFilterSidePanel: N ? null : r.createElement(Fn, null),
                renderEmptySearch: H ? r.createElement(ys, null) : null,
                renderEmptyCollection: j ? F : null,
                layout: e,
                renderItem: T,
              });
        },
        Md = () => {
          const { layoutType: e, setLayoutType: t, isLoaded: a } = Dl();
          return r.createElement(
            r.Fragment,
            null,
            a &&
              e &&
              r.createElement(
                i.tY,
                { fallback: r.createElement(Lo, { layout: e }) },
                r.createElement(Td, { layout: e, setLayout: t }),
              ),
          );
        },
        Dd = ({ animation: e }) => {
          const t = (0, Ma.al)();
          return n().createElement(ho, {
            header: n().createElement(Kl, { animation: e }),
            footer: n().createElement(Po, { animation: e }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: t
              ? null
              : n().createElement(Dn, { animation: e }),
          });
        };
      var Bd = a(15031),
        Rd = a(9344),
        jd = a(5026),
        Hd = Object.defineProperty,
        Fd = Object.defineProperties,
        $d = Object.getOwnPropertyDescriptors,
        zd = Object.getOwnPropertySymbols,
        Wd = Object.prototype.hasOwnProperty,
        qd = Object.prototype.propertyIsEnumerable,
        Ud = (e, t, a) =>
          t in e
            ? Hd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Vd = (e, t) => {
          for (var a in t || (t = {})) Wd.call(t, a) && Ud(e, a, t[a]);
          if (zd) for (var a of zd(t)) qd.call(t, a) && Ud(e, a, t[a]);
          return e;
        };
      const Gd = (0, u.i7)({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        }),
        Yd = (0, I.W)((e) => {
          return {
            buttonDiv: (0, u.AH)({
              button:
                ((t = Vd({}, (0, O.Jp)("opacity"))),
                (a = {
                  color: e.textPrimary,
                  opacity: 0.4,
                  "&:hover, &:active, &:focus": { opacity: 1 },
                }),
                Fd(t, $d(a))),
            }),
            icon: (0, u.AH)({ fontSize: 17 }),
            spin: (0, u.AH)({ svg: { animation: `${Gd} 2s linear infinite` } }),
          };
          var t, a;
        }),
        Zd = (0, u.i7)({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        }),
        Jd = {
          button: (0, u.AH)({ borderRadius: J.pu.full }),
          spin: (0, u.AH)({ svg: { animation: `${Zd} 2s linear infinite` } }),
        },
        Qd = ({ onClick: e, disabled: t, animateIcon: a }) => {
          const n = (0, b.useSelector)(k.k),
            l = (0, ua.useLocalization)(),
            o = r.useRef(null),
            i = l("egstore.library.reload.a11y.reload_library"),
            c = Yd();
          return n
            ? r.createElement(
                E.m,
                {
                  label: r.createElement(v.A, {
                    code: "egstore.library.reload.reload_library",
                  }),
                },
                r.createElement(va.$, {
                  variant: x.ml.GHOST,
                  size: x.sp.LG,
                  icon: r.createElement(Bd.j, null),
                  "aria-label": i,
                  onClick: e,
                  disabled: t,
                  "data-testid": "reload-button",
                  className: (0, u.cx)(Jd.button, { [Jd.spin]: a }),
                }),
              )
            : r.createElement(
                "div",
                { className: c.buttonDiv },
                r.createElement(
                  Rd.A,
                  {
                    "aria-label": i,
                    onClick: e,
                    disabled: t,
                    "data-testid": "reload-button",
                    buttonWidth: f.Rj.AUTO,
                    forwardRef: o,
                  },
                  r.createElement(
                    "span",
                    { className: (0, u.cx)({ [c.icon]: !0, [c.spin]: a }) },
                    r.createElement(jd.m, null),
                  ),
                ),
                r.createElement(
                  C.m,
                  { anchorRef: o },
                  r.createElement(v.A, {
                    code: "egstore.library.reload.reload_library",
                  }),
                ),
              );
        };
      var Kd = a(98041);
      const Xd = (0, I.W)(() => ({
          root: (0, u.AH)({ marginTop: 10, marginBottom: 34 }),
          title: (0, u.AH)((0, S.hz)(3)),
        })),
        em = ({ reloadButton: e }) => {
          const t = (0, b.useSelector)(k.k),
            a = Xd(),
            n = () =>
              t
                ? r.createElement(
                    z.E,
                    { variant: x.ZJ.H2XL, color: x.Uf.PRIMARY },
                    r.createElement(v.A, {
                      code: "diesel.common.page.library.title",
                    }),
                  )
                : r.createElement(
                    ps.A.Heading,
                    { headingLevel: 1 },
                    r.createElement(v.A, {
                      code: "diesel.common.page.library.title",
                    }),
                  );
          return r.createElement(
            Ye.a,
            { alignItems: Ze.ep.Center, className: a.root },
            r.createElement(
              "div",
              { className: a.title },
              r.createElement(n, null),
            ),
            e,
          );
        },
        tm = () => {
          const { query: e } = Ue(),
            { isReloading: t, reloadLibrary: a } = ((e) => {
              const t = (0, Kd.$)(),
                [a, n] = (0, r.useState)(e),
                l = (0, r.useCallback)(() => {
                  n(!0), t();
                }, [n, t]);
              return (
                (0, r.useEffect)(() => {
                  n(e);
                }, [e]),
                { isReloading: a, reloadLibrary: l }
              );
            })(e.isFetching),
            n = (0, g.$)();
          return r.createElement(em, {
            reloadButton: n
              ? r.createElement(Qd, { onClick: a, disabled: t, animateIcon: t })
              : void 0,
          });
        },
        am = ({ animation: e }) =>
          r.createElement(em, {
            reloadButton: r.createElement(At.EA, {
              width: 57,
              height: 40,
              animation: e,
              style: { marginLeft: 10 },
            }),
          }),
        rm = () =>
          n().createElement(
            n().Fragment,
            null,
            n().createElement(H.U, null),
            n().createElement(Bt, null),
          );
      var nm = a(71105);
      const lm = ({ title: e, onRetryClick: t, onCancelClick: a }) =>
        n().createElement(vt._, {
          modalTitle: n().createElement(v.A, {
            code: "diesel.common.smart_button.uninstall",
          }),
          title: n().createElement(v.A, {
            code: "egstore.library.uninstall_close_instances.text_question",
            args: [e],
          }),
          secondaryButton: n().createElement(
            yt.u,
            { onClick: a },
            n().createElement(v.A, {
              code: "diesel.common.smart_button.cancel",
            }),
          ),
          primaryButton: n().createElement(
            Et.S,
            { onClick: t },
            n().createElement(v.A, {
              code: "diesel.common.smart_button.retry",
            }),
          ),
          onCloseClick: a,
        });
      var om = Object.defineProperty,
        im = Object.defineProperties,
        cm = Object.getOwnPropertyDescriptors,
        sm = Object.getOwnPropertySymbols,
        dm = Object.prototype.hasOwnProperty,
        mm = Object.prototype.propertyIsEnumerable,
        um = (e, t, a) =>
          t in e
            ? om(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        pm = (e, t) => {
          for (var a in t || (t = {})) dm.call(t, a) && um(e, a, t[a]);
          if (sm) for (var a of sm(t)) mm.call(t, a) && um(e, a, t[a]);
          return e;
        },
        gm = (e, t) => im(e, cm(t));
      const bm = (e) =>
          r.createElement(
            ht.T,
            gm(pm({}, e), {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: r.createElement(
                Ye.a,
                {
                  alignItems: Ze.ep.Center,
                  justify: Ze.cn.Center,
                  fillParent: !0,
                },
                r.createElement(
                  Ye.a,
                  { direction: Ze.NX.Column, alignItems: Ze.ep.Center },
                  r.createElement(
                    At.EA,
                    pm({ variant: At.qd.Text, width: 500, height: 50 }, e),
                  ),
                  r.createElement(
                    At.EA,
                    gm(pm({ variant: At.qd.Text, width: 300, height: 50 }, e), {
                      style: { margin: "-10px 0 0" },
                    }),
                  ),
                ),
              ),
            }),
          ),
        Em = (0, Vo.P)("uninstall-close-instances-modal"),
        ym = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, xi.Jm)(),
            r = (0, Oi.q)(e, t, a),
            { closeModal: l, cancelModal: o } = Em(),
            i = (0, tc.L)(),
            c = n().useCallback(() => {
              l(),
                i({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: Wn.dE.MANAGE_PRODUCT_MODAL,
                  options: { disableConfirmation: !0 },
                });
            }, [l, i, e, t, a]);
          return n().createElement(lm, {
            title: r,
            onRetryClick: c,
            onCancelClick: o,
          });
        },
        vm = () => {
          const { isOpen: e, cancelModal: t, getData: a } = Em(),
            r = a();
          return r
            ? n().createElement(
                _t.a,
                { isOpen: e, onClose: t },
                n().createElement(
                  i.tY,
                  { fallback: n().createElement(bm, null) },
                  n().createElement(
                    ki.Y,
                    {
                      namespace: r.namespace,
                      catalogItemId: r.catalogItemId,
                      appName: r.appName,
                    },
                    n().createElement(ym, null),
                  ),
                ),
              )
            : null;
        };
      var fm = a(45621);
      const hm = () => {
        const { action: e, item: t } = Pr(),
          { openModal: a } = Bi();
        n().useEffect(() => {
          e === Ed.I.Install && t && a(t);
        }, [e, t]);
        const { openModal: r } = Em();
        return (
          n().useEffect(() => {
            e === Ed.I.CloseInstances &&
              t &&
              r({
                namespace: t.namespace,
                catalogItemId: t.catalogItemId,
                appName: t.appName,
              });
          }, [e, t]),
          n().createElement(
            n().Fragment,
            null,
            n().createElement(Hi, null),
            n().createElement(nm.w, null),
            n().createElement(fm.o, null),
            n().createElement(vm, null),
            n().createElement(Ni, null),
          )
        );
      };
      var Am = a(8119),
        Cm = Object.defineProperty,
        Im = Object.getOwnPropertySymbols,
        Sm = Object.prototype.hasOwnProperty,
        Om = Object.prototype.propertyIsEnumerable,
        xm = (e, t, a) =>
          t in e
            ? Cm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        km = (e, t) => {
          for (var a in t || (t = {})) Sm.call(t, a) && xm(e, a, t[a]);
          if (Im) for (var a of Im(t)) Om.call(t, a) && xm(e, a, t[a]);
          return e;
        };
      const Pm = (0, I.W)(() => ({
          root: (0, u.AH)({
            display: "flex",
            width: "100%",
            minHeight: 60,
            padding: 15,
            marginBottom: 20,
            alignItems: "center",
            gap: 20,
            borderRadius: oa.Vq,
            background: `linear-gradient(266deg, ${Am.$k.EAP.secondaryBg} 0%, ${Am.$k.EAP.primaryBg} 93.29%)`,
          }),
          icon: (0, u.AH)(
            km({ color: Am.$k.EAP.primary }, Am.J2.EAP.dimensions.medium),
          ),
          content: (0, u.AH)({ flexGrow: 1, p: { margin: "0 0 5px" } }),
        })),
        wm = {
          root: (0, u.AH)(
            (0, S._z)({
              ltr: {
                background: `linear-gradient(90deg, ${Am.$k.EAP.primaryBg}, ${Am.$k.EAP.secondaryBg})`,
              },
              rtl: {
                background: `linear-gradient(-90deg, ${Am.$k.EAP.primaryBg}, ${Am.$k.EAP.secondaryBg})`,
              },
            }),
            {
              display: "flex",
              width: "100%",
              minHeight: 60,
              padding: 15,
              marginBottom: 20,
              alignItems: "center",
              gap: 20,
              borderRadius: J.pu.six,
            },
          ),
          content: (0, u.AH)({
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: 5,
          }),
          icon: (0, u.AH)(
            km({ color: Am.$k.EAP.primary }, Am.J2.EAP.dimensions.medium),
          ),
        },
        Nm = ({ onDismissClick: e }) => {
          const t = (0, b.useSelector)(k.k),
            a = Pm();
          return t
            ? n().createElement(
                "div",
                {
                  className: wm.root,
                  "data-testid": "EAPSubsIntroBannerLayout",
                },
                n().createElement(gs.A, {
                  className: wm.icon,
                  icon: Am.J2.EAP.svg,
                }),
                n().createElement(
                  "div",
                  { className: wm.content },
                  n().createElement(
                    z.E,
                    { variant: x.ZJ.UIMD, color: x.Uf.PRIMARY },
                    n().createElement(
                      "b",
                      null,
                      n().createElement(v.A, {
                        code: "egstore.library.subscription.banner.eap.title",
                      }),
                    ),
                  ),
                  n().createElement(
                    z.E,
                    { variant: x.ZJ.UIMD, color: x.Uf.SECONDARY },
                    n().createElement(v.A, {
                      code: "egstore.library.subscription.banner.eap.body",
                    }),
                  ),
                  n().createElement(
                    z.E,
                    { variant: x.ZJ.UIMD, color: x.Uf.SECONDARY },
                    n().createElement(v.A, {
                      code: "egstore.library.subscription.banner.eap.info",
                    }),
                  ),
                ),
                n().createElement(
                  va.$,
                  { variant: x.ml.OUTLINE, onClick: e },
                  n().createElement(v.A, {
                    code: "egstore.library.favorites_folders.intro.button.hide",
                  }),
                ),
              )
            : n().createElement(
                "div",
                {
                  className: a.root,
                  "data-testid": "EAPSubsIntroBannerLayout",
                },
                n().createElement(gs.A, {
                  className: a.icon,
                  icon: Am.J2.EAP.svg,
                }),
                n().createElement(
                  "div",
                  { className: a.content },
                  n().createElement(
                    "p",
                    null,
                    n().createElement(
                      la.Ay,
                      { textLevel: G.qo.PRIMARY },
                      n().createElement(v.A, {
                        code: "egstore.library.subscription.banner.eap.title",
                      }),
                    ),
                  ),
                  n().createElement(
                    "p",
                    null,
                    n().createElement(
                      la.Ay,
                      { textLevel: G.qo.SECONDARY },
                      n().createElement(v.A, {
                        code: "egstore.library.subscription.banner.eap.body",
                      }),
                    ),
                  ),
                  n().createElement(
                    "p",
                    null,
                    n().createElement(
                      la.Ay,
                      { textLevel: G.qo.SECONDARY },
                      n().createElement(v.A, {
                        code: "egstore.library.subscription.banner.eap.info",
                      }),
                    ),
                  ),
                ),
                n().createElement(
                  Pa.rp,
                  {
                    buttonWidth: f.Rj.AUTO,
                    buttonHeight: f.eL.DENSED,
                    onClick: e,
                  },
                  n().createElement(v.A, {
                    code: "egstore.library.favorites_folders.intro.button.hide",
                  }),
                ),
              );
        };
      var Lm = a(95060);
      const _m = {
          [a(68056).w.EAP]: () => {
            const { namespace: e, catalogItemId: t, appName: a } = (0, xi.Jm)(),
              l = (0, b.useSelector)(xa.n9),
              o = (0, Lm.O)(e, t, a),
              { value: i, setValue: c } = (0, Oa.$)({
                keyFn: () => `EGS_LIBRARY_INTRO_BANNER_EAP_HIDDEN_${l}`,
                localStorageEnabled: Boolean(l),
                initialValue: !1,
              }),
              s = (0, r.useMemo)(
                () =>
                  ((e) => {
                    if (!(null == e ? void 0 : e.acquisitionDate)) return !0;
                    const t = new Date(e.acquisitionDate);
                    return t.setDate(t.getDate() + 2), new Date() > t;
                  })(o),
                [o],
              ),
              d = n().useMemo(() => !s && !i, [s, i]);
            return n().createElement(
              n().Fragment,
              null,
              d && n().createElement(Nm, { onDismissClick: () => c(!0) }),
            );
          },
        },
        Tm = () => {
          const e = (0, b.useSelector)(An.GZ),
            t = (0, r.useMemo)(() => Object.keys(e), [e]),
            a = (0, r.useCallback)(
              (t) => {
                const a = _m[t];
                if (!a) return null;
                const { namespace: r, catalogItemId: l, appName: o } = e[t];
                return n().createElement(
                  ki.Y,
                  { key: t, namespace: r, catalogItemId: l, appName: o },
                  n().createElement(a, null),
                );
              },
              [e],
            );
          return n().createElement(
            n().Fragment,
            null,
            t.map((e) => a(e)),
          );
        },
        Mm = () =>
          n().createElement(
            n().Fragment,
            null,
            n().createElement(
              i.tY,
              { fallback: n().createElement(am, null) },
              n().createElement(tm, null),
            ),
            n().createElement(
              i.tY,
              { fallback: null },
              n().createElement(
                "div",
                { style: { paddingBottom: 20 } },
                n().createElement(_a, null),
                n().createElement(Tm, null),
              ),
            ),
            n().createElement(
              i.tY,
              { fallback: n().createElement(ya, null) },
              n().createElement(Ea, null),
            ),
            n().createElement(
              i.tY,
              { fallback: n().createElement(Dd, null) },
              n().createElement(Md, null),
            ),
            n().createElement(hm, null),
            n().createElement(rm, null),
          );
      var Dm = a(58163),
        Bm = a(9219),
        Rm = a(94127);
      const jm = (0, Bm.u8)("hook-mounted");
      let Hm = !1;
      const Fm = (0, un.lp)("useMeasureLibraryRenderTime"),
        $m = (0, Bm.u8)("render-sync"),
        [zm, Wm] = (0, Bm.Ji)("render-duration-sync"),
        qm = (0, Bm.u8)("render-async"),
        [Um, Vm] = (0, Bm.Ji)("render-duration-async");
      function Gm({
        dom: e,
        componentName: t,
        labels: a,
        stateChangeCallback: r,
        predicate: n,
      }) {
        return new Promise((l) => {
          if (e.current) {
            const o = performance.now(),
              i = n(e.current);
            Fm.log("querying for predicate time: " + (performance.now() - o)),
              i &&
                (Fm.log("non observer paint start"),
                performance.mark(a.start, { detail: { componentName: t } }),
                r("measuring"),
                setTimeout(() => {
                  Fm.log("non observer paint end"),
                    r("complete"),
                    performance.mark(a.timeFromPageLoad, {
                      detail: { componentName: t },
                    }),
                    performance.mark(a.end, { detail: { componentName: t } }),
                    l();
                }));
          } else l();
        });
      }
      var Ym = a(64511);
      const Zm = () => {
        const e = n().useRef(null),
          t = (0, mr.B2)();
        return (
          (function () {
            const e = (0, b.useSelector)(Rm.X);
            n().useEffect(() => {
              if (!e) return;
              if (Dm.Iw.isSsr()) return;
              if (Hm)
                return void console.warn(
                  "useLibraryPerformance is already mounted. Please ensure only one instance of this hook exists at any point",
                );
              const t = new Bm.tH();
              return (
                t.connect(),
                (Hm = !0),
                performance.mark(jm),
                () => {
                  t.disconnect(), (Hm = !1);
                }
              );
            }, []);
          })(),
          (function (e, t, a) {
            const r = (0, b.useSelector)(Rm.X),
              l = n().useRef("idle");
            n().useEffect(() => {
              if (!r) return;
              if (Dm.Iw.isSsr())
                return void Fm.log("skipping measuring of render time on SSR.");
              function n(e) {
                l.current = e;
              }
              Fm.log("starting useMeasureLibraryRenderTime"),
                Gm({
                  dom: e,
                  componentName: t,
                  labels: { start: zm, end: Wm, timeFromPageLoad: $m },
                  stateChangeCallback: n,
                  predicate: a,
                });
              const o = performance,
                i = new MutationObserver((r, i) => {
                  (performance = o),
                    "complete" !== l.current
                      ? "measuring" !== l.current &&
                        Gm({
                          dom: e,
                          componentName: t,
                          labels: { start: Um, end: Vm, timeFromPageLoad: qm },
                          stateChangeCallback: n,
                          predicate: a,
                        }).then(() => i.disconnect())
                      : i.disconnect();
                });
              return (
                e.current &&
                  i.observe(e.current, {
                    subtree: !0,
                    characterData: !0,
                    childList: !0,
                    attributes: !1,
                  }),
                () => {
                  i && i.disconnect();
                }
              );
            }, [t, a]);
          })(
            e,
            "LibraryBasePage",
            ((e) => (t) => {
              const a = e(o.t),
                r = new RegExp(`\\b${a}\\b`, "i"),
                n = t.querySelector(`[data-component=${l.L}]`),
                i = null == n ? void 0 : n.textContent;
              return !!i && null === i.match(r);
            })(t),
          ),
          n().createElement(
            Ym.c,
            null,
            n().createElement("div", { ref: e }, n().createElement(Mm, null)),
          )
        );
      };
    },
    13372: (e, t, a) => {
      e.exports = a.p + "d71da1c195d3183df5799e7892e9b1a1.png";
    },
  },
]);
//# sourceMappingURL=ManageProductsPage.egstore-site.742e51efeb10a94dfa68.js.map
