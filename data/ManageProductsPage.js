(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [481],
  {
    63374: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => SO });
      var r = a(45418),
        n = a.n(r),
        l = a(30423),
        o = a(71232),
        i = a(98988),
        c = a(39977);
      const s = (e) => () => {
        const {
          isOpenById: t,
          openModalById: a,
          closeModalById: n,
          getData: l,
        } = (0, c.vR)();
        return (0, r.useMemo)(
          () => ({
            isOpen: t(e),
            openModal: (t) => a(e, t),
            closeModal: () => n(e),
            cancelModal: () => n(e, c.tn.Cancel),
            getData: () => l(e),
          }),
          [t, a, n, l],
        );
      };
      var d = a(61629),
        u = a(77135),
        m = a(92270),
        p = a(13405),
        b = a(56470),
        g = a(73625),
        v = a(94203),
        E = Object.defineProperty,
        y = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        O = (e, t, a) =>
          t in e
            ? E(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        C = (e, t) => {
          for (var a in t || (t = {})) f.call(t, a) && O(e, a, t[a]);
          if (y) for (var a of y(t)) h.call(t, a) && O(e, a, t[a]);
          return e;
        },
        I = (e, t) => {
          var a = {};
          for (var r in e) f.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && y)
            for (var r of y(e))
              t.indexOf(r) < 0 && h.call(e, r) && (a[r] = e[r]);
          return a;
        };
      const w = [p.Uo.xs, p.Uo.sm, p.Uo.md, p.Uo.lg, p.Uo.xl, p.Uo.xxl],
        x = (e) =>
          w.reduce(
            (t, a) => (
              (0, g.Z)(1, e + 1).forEach((r) => {
                t[`&.egs-span-${a}-${r}`] =
                  "xs" === a
                    ? { width: (r / e) * 100 + "%" }
                    : { [p.Uc[a]]: { width: (r / e) * 100 + "%" } };
              }, {}),
              t
            ),
            {},
          ),
        S = { 12: x(12), 16: x(16) },
        P = (0, m.i)((e, { columns: t, spacing: a }) => ({
          root: (0, b.iv)({
            display: "flex",
            flexWrap: "wrap",
            flexBasis: 0,
            flexGrow: 1,
            marginTop: -1 * a,
            marginRight: a / -2,
            marginLeft: a / -2,
            "> .egs-grid-item": C(
              { paddingRight: a / 2, paddingLeft: a / 2, marginTop: a },
              S[t],
            ),
          }),
          fillParent: (0, b.iv)({ width: "100%", height: "100%" }),
        })),
        k = (0, m.i)(() => ({
          root: (0, b.iv)({
            boxSizing: "border-box",
            flex: "0 0 auto",
            maxWidth: "100%",
          }),
          autoLayout: (0, b.iv)({
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: "100%",
          }),
        })),
        N = (e) => {
          var t = e,
            { children: a, spacing: n = 0, columns: l = 12 } = t,
            o = I(t, ["children", "spacing", "columns"]);
          const i = P({ columns: l, spacing: n }),
            c = (0, v.Z)(["className"], o);
          return r.createElement(d.x, C({ className: i.root }, c), a);
        },
        L = (e) => {
          var t = e,
            { children: a, xs: n, sm: l, md: o, lg: i, xl: c, xxl: s } = t,
            u = I(t, ["children", "xs", "sm", "md", "lg", "xl", "xxl"]);
          const m = k(),
            p = (0, b.cx)(m.root, "egs-grid-item", {
              [m.autoLayout]: !0 === n,
              [`egs-span-xs-${n}`]: !!n,
              [`egs-span-sm-${l}`]: !!l,
              [`egs-span-md-${o}`]: !!o,
              [`egs-span-lg-${i}`]: !!i,
              [`egs-span-xl-${c}`]: !!c,
              [`egs-span-xxl-${s}`]: !!s,
            }),
            g = (0, v.Z)(["className"], u);
          return r.createElement(d.E, C({ className: p }, g), a);
        };
      var j = a(52933),
        M = a(18310),
        A = a(80199),
        T = a(60180),
        _ = a(21624),
        D = a(24428),
        R = a(7464),
        B = a(2139),
        Z = a(31265),
        F = a(85858),
        U = a(21650),
        W = a(42925),
        K = a(89484),
        z = Object.defineProperty,
        V = Object.defineProperties,
        $ = Object.getOwnPropertyDescriptors,
        H = Object.getOwnPropertySymbols,
        G = Object.prototype.hasOwnProperty,
        q = Object.prototype.propertyIsEnumerable,
        Y = (e, t, a) =>
          t in e
            ? z(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        J = (e, t) => {
          for (var a in t || (t = {})) G.call(t, a) && Y(e, a, t[a]);
          if (H) for (var a of H(t)) q.call(t, a) && Y(e, a, t[a]);
          return e;
        };
      const X = J({}, R.Ey),
        Q = (0, m.i)(
          (e, { background: t, noBackground: a, noBorder: r, error: n }) => ({
            root: (0, b.iv)({
              display: "inline-flex",
              flexDirection: "column",
              position: "relative",
              width: "100%",
              minWidth: 0,
              padding: 0,
              margin: 0,
              border: 0,
              verticalAlign: "top",
            }),
            input: (0, b.iv)(
              (0, W.Bt)(e),
              J(
                {
                  color: e.textPrimary,
                  backgroundColor: a ? "transparent" : e[t],
                  width: "100%",
                  padding: "0 20px",
                  borderRadius: U.E0,
                  boxSizing: "border-box !important",
                  "&::placeholder": { color: `${e.textSecondary} !important` },
                },
                r
                  ? {}
                  : {
                      border: `1px solid ${n ? K.g[e.mode].error : e.textSecondary}`,
                      "&:not(:focus)": {
                        borderColor: n ? K.g[e.mode].error : e.textSecondary,
                      },
                    },
              ),
            ),
            helperText: (0, b.iv)({
              position: "absolute",
              bottom: -20,
              left: 0,
            }),
            helperColor: (0, b.iv)({ color: e.textSecondary }),
            errorColor: (0, b.iv)({ color: K.g[e.mode].error }),
            label: (0, b.iv)({ marginBottom: 5 }),
          }),
        ),
        ee = (e) => {
          var t = e,
            {
              background: a = "level1",
              error: n = !1,
              helperText: l = "",
              id: o,
              inputHeight: i = X.STANDARD,
              label: c,
              noBackground: s = !1,
              noBorder: d = !1,
              shouldAutoFocus: u,
            } = t,
            m = ((e, t) => {
              var a = {};
              for (var r in e)
                G.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && H)
                for (var r of H(e))
                  t.indexOf(r) < 0 && q.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, [
              "background",
              "error",
              "helperText",
              "id",
              "inputHeight",
              "label",
              "noBackground",
              "noBorder",
              "shouldAutoFocus",
            ]);
          const p = Q({
              background: a,
              noBackground: s,
              noBorder: d,
              error: n,
            }),
            g = (0, b.cx)(p.input, D.Z.buttonHeights[i]),
            v = r.useRef(null);
          return (
            r.useEffect(() => {
              u && v.current && v.current.focus();
            }, []),
            r.createElement(
              "div",
              J(
                { className: p.root, "data-testid": "TextInput" },
                n ? { "data-haserror": !0 } : {},
              ),
              c &&
                r.createElement(
                  "label",
                  { htmlFor: o },
                  r.createElement(
                    "div",
                    { className: p.label },
                    r.createElement(Z.Z, null, c),
                  ),
                ),
              r.createElement(
                "input",
                J(
                  ((E = J({}, m)),
                  V(E, $({ ref: v, className: g, type: "text" }))),
                  n && l ? { "aria-errormessage": l } : {},
                ),
              ),
              r.createElement(
                "div",
                {
                  className: (0, b.cx)(
                    p.helperText,
                    n ? p.errorColor : p.helperColor,
                  ),
                },
                r.createElement(
                  B.Z,
                  { textLevel: F.N.INHERIT },
                  null != l ? l : "",
                ),
              ),
            )
          );
          var E;
        };
      var te = a(9177),
        ae = a(17654),
        re = a(75364),
        ne = a(34272),
        le = a(65817),
        oe = a(10035),
        ie = Object.defineProperty,
        ce = Object.defineProperties,
        se = Object.getOwnPropertyDescriptors,
        de = Object.getOwnPropertySymbols,
        ue = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable,
        pe = (e, t, a) =>
          t in e
            ? ie(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        be = (e, t) => {
          for (var a in t || (t = {})) ue.call(t, a) && pe(e, a, t[a]);
          if (de) for (var a of de(t)) me.call(t, a) && pe(e, a, t[a]);
          return e;
        };
      const ge = (0, m.i)((e, t) => {
          return {
            heading: (0, b.iv)({ marginBottom: t ? 0 : 17, marginTop: 17 }),
            inputDiv: (0, b.iv)({
              position: "relative",
              marginTop: 30,
              marginBottom: 67,
            }),
            count: (0, b.iv)(
              ((a = be({ position: "absolute" }, (0, ne.F2)(20))),
              (r = { top: 30, zIndex: le.W.overlay, [p.Uc.lg]: { top: 35 } }),
              ce(a, se(r))),
            ),
          };
          var a, r;
        }),
        ve = ({
          isEditing: e,
          hasError: t,
          onCancelClick: a,
          onCreateClick: r,
          onValueChange: l,
          setHasError: o,
          value: i,
        }) => {
          const c = (0, oe.useLocalization)(),
            [s, m] = n().useState(25),
            p = ge(e);
          return (
            n().useEffect(() => {
              i.length && m(25 - i.length);
            }, [i]),
            n().createElement(A.P, {
              header: n().createElement(
                _.x,
                { onCloseClick: a },
                n().createElement(
                  ae.ZP,
                  { weight: ae.G0.BOLD },
                  n().createElement(te.Z, {
                    code: e
                      ? "egstore.library.collections_modal.create_edit.edit_collection"
                      : "egstore.library.collections_modal.create_edit.new_collection",
                  }),
                ),
              ),
              content: n().createElement(
                N,
                {
                  role: "form",
                  "aria-label": "Create Edit Collection",
                  justify: u.jf.Center,
                  alignItems: u.Ks.Center,
                  direction: u.jO.Column,
                  fillParent: !0,
                },
                n().createElement(
                  L,
                  null,
                  n().createElement(
                    re.Z.Heading,
                    { headingLevel: 1 },
                    n().createElement(
                      "div",
                      { className: p.heading },
                      n().createElement(te.Z, {
                        code: e
                          ? "egstore.library.collections_modal.create_edit.edit_title"
                          : "egstore.library.collections_modal.create_edit.title",
                      }),
                    ),
                  ),
                ),
                !e &&
                  n().createElement(
                    L,
                    null,
                    n().createElement(
                      ae.ZP,
                      null,
                      n().createElement(te.Z, {
                        code: "egstore.library.collections_modal.create_edit.text",
                      }),
                    ),
                  ),
                n().createElement(
                  L,
                  { xs: 8 },
                  n().createElement(
                    "div",
                    { className: p.inputDiv },
                    n().createElement(ee, {
                      id: "create-edit-modal",
                      error: t,
                      defaultValue: i,
                      shouldAutoFocus: !0,
                      onChange: (e) => {
                        const t = e.currentTarget.value;
                        m(25 - t.length), l(t), o(t.length > 25);
                      },
                      maxLength: 25,
                      helperText: t
                        ? c(
                            "egstore.library.collections_modal.create_edit.error_text",
                          )
                        : void 0,
                      label: n().createElement(te.Z, {
                        code: "egstore.library.collections_modal.create_edit.label",
                      }),
                    }),
                    n().createElement(
                      "div",
                      { className: p.count },
                      n().createElement(
                        B.Z,
                        null,
                        n().createElement(te.Z, {
                          code: "diesel.common.time.time_left",
                          args: [s],
                        }),
                      ),
                    ),
                  ),
                ),
                n().createElement(
                  L,
                  { xs: 12 },
                  n().createElement(
                    d.x,
                    { justify: u.jf.Center },
                    n().createElement(
                      ae.ZP,
                      null,
                      n().createElement(te.Z, {
                        code: "egstore.library.collections_modal.create_edit.drag_text",
                      }),
                    ),
                  ),
                ),
              ),
              footer: n().createElement(
                T.m,
                null,
                n().createElement(
                  M.d,
                  { onClick: a },
                  n().createElement(te.Z, {
                    code: "diesel.common.smart_button.cancel",
                  }),
                ),
                n().createElement(
                  j.N,
                  {
                    onClick: r,
                    disabled: Boolean(t || !(null == i ? void 0 : i.trim())),
                  },
                  n().createElement(te.Z, {
                    code: e
                      ? "egstore.library.collections_modal.edit.button_primary"
                      : "egstore.library.collections_modal.create.button_primary",
                  }),
                ),
              ),
            })
          );
        };
      var Ee = a(53288);
      const ye = ({
        animation: e,
        content: t,
        hasFooter: a,
        hasHeader: n,
        hasPrimaryButton: l,
        hasSecondaryButton: o,
        titleWidth: i = 80,
      }) =>
        r.createElement(A.P, {
          "data-testid": "ModalSkeleton",
          header: n
            ? r.createElement(
                _.x,
                { onCloseClick: () => {} },
                r.createElement(Ee.Od, {
                  variant: Ee.Jy.Text,
                  width: i,
                  height: 40,
                  animation: e,
                }),
              )
            : void 0,
          content: t || r.createElement("div", null),
          footer: a
            ? r.createElement(
                T.m,
                null,
                l &&
                  r.createElement(Ee.Od, {
                    width: 160,
                    height: 40,
                    animation: e,
                  }),
                o &&
                  r.createElement(Ee.Od, {
                    width: 160,
                    height: 40,
                    animation: e,
                  }),
              )
            : void 0,
        });
      var fe = a(29498),
        he = Object.defineProperty,
        Oe = Object.defineProperties,
        Ce = Object.getOwnPropertyDescriptors,
        Ie = Object.getOwnPropertySymbols,
        we = Object.prototype.hasOwnProperty,
        xe = Object.prototype.propertyIsEnumerable,
        Se = (e, t, a) =>
          t in e
            ? he(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Pe = (e, t) => {
          for (var a in t || (t = {})) we.call(t, a) && Se(e, a, t[a]);
          if (Ie) for (var a of Ie(t)) xe.call(t, a) && Se(e, a, t[a]);
          return e;
        };
      const ke = (0, m.i)((e) => ({
          spacing: (0, b.iv)({ marginBottom: 14 }),
          fakeInput: (0, b.iv)({
            marginTop: 34,
            border: `1px solid ${e.textSecondary}`,
            width: 425,
            height: 50,
            padding: "0 20px",
            borderRadius: fe.E0,
          }),
          icon: (0, b.iv)((0, ne.wz)(20)),
        })),
        Ne = (e) => {
          const t = ke();
          return n().createElement(
            ye,
            ((a = Pe({}, e)),
            (r = {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: n().createElement(
                d.x,
                { direction: u.jO.Column, centerContent: !0, fillParent: !0 },
                n().createElement(
                  Ee.Od,
                  Pe(
                    {
                      className: t.spacing,
                      variant: Ee.Jy.Text,
                      width: 330,
                      height: 60,
                    },
                    e,
                  ),
                ),
                n().createElement(
                  Ee.Od,
                  Pe({ variant: Ee.Jy.Text, width: 380, height: 30 }, e),
                ),
                n().createElement(
                  d.x,
                  { className: t.fakeInput, alignItems: u.Ks.Center },
                  n().createElement(
                    Ee.Od,
                    Pe({ className: t.icon, width: 24, height: 26 }, e),
                  ),
                  n().createElement(
                    Ee.Od,
                    Pe({ variant: Ee.Jy.Text, width: 100, height: 20 }, e),
                  ),
                ),
              ),
            }),
            Oe(a, Ce(r))),
          );
          var a, r;
        };
      var Le = a(58882),
        je = a(29245),
        Me = a(7953),
        Ae = Object.defineProperty,
        Te = Object.defineProperties,
        _e = Object.getOwnPropertyDescriptors,
        De = Object.getOwnPropertySymbols,
        Re = Object.prototype.hasOwnProperty,
        Be = Object.prototype.propertyIsEnumerable,
        Ze = (e, t, a) =>
          t in e
            ? Ae(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Fe = (e) => {
        const t = (0, je.P)(
            Me.Z2,
            Me.XK,
            ((r = ((e, t) => {
              for (var a in t || (t = {})) Re.call(t, a) && Ze(e, a, t[a]);
              if (De) for (var a of De(t)) Be.call(t, a) && Ze(e, a, t[a]);
              return e;
            })({}, e)),
            (n = { enabled: !1 !== (null == e ? void 0 : e.enabled) }),
            Te(r, _e(n))),
          ),
          { data: a } = t;
        var r, n;
        return {
          collections: a,
          query: ((e, t) => {
            var a = {};
            for (var r in e) Re.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && De)
              for (var r of De(e))
                t.indexOf(r) < 0 && Be.call(e, r) && (a[r] = e[r]);
            return a;
          })(t, ["data"]),
        };
      };
      var Ue = Object.defineProperty,
        We = Object.defineProperties,
        Ke = Object.getOwnPropertyDescriptors,
        ze = Object.getOwnPropertySymbols,
        Ve = Object.prototype.hasOwnProperty,
        $e = Object.prototype.propertyIsEnumerable,
        He = (e, t, a) =>
          t in e
            ? Ue(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ge = (e, t) => {
        const { collections: a } = Fe(
          ((n = ((e, t) => {
            for (var a in t || (t = {})) Ve.call(t, a) && He(e, a, t[a]);
            if (ze) for (var a of ze(t)) $e.call(t, a) && He(e, a, t[a]);
            return e;
          })({}, t)),
          (l = {
            enabled: Boolean(e) && !1 !== (null == t ? void 0 : t.enabled),
          }),
          We(n, Ke(l))),
        );
        var n, l;
        return (0, r.useMemo)(
          () => (null == a ? void 0 : a.find((t) => t.collectionId === e)),
          [a, e],
        );
      };
      var qe = a(37922);
      var Ye = a(85449);
      const Je = s("create-edit-collection-modal"),
        Xe = (e) => {
          var t;
          return null !=
            (t = null == e ? void 0 : e.replace(/ /g, "").toLowerCase().trim())
            ? t
            : "";
        },
        Qe = () => {
          const [e, t] = n().useState(""),
            [a, l] = n().useState(!1),
            o = (() => {
              const e = (0, qe.useDispatch)();
              return (0, r.useCallback)(
                (t) => {
                  e((0, Me.BL)(t));
                },
                [e],
              );
            })(),
            i = (() => {
              const e = (0, qe.useDispatch)();
              return (0, r.useCallback)(
                (t, a) => {
                  e((0, Me.LU)({ collectionId: t, name: a }));
                },
                [e],
              );
            })(),
            { closeModal: c, cancelModal: s, getData: d } = Je(),
            u = Ge(d()),
            m = Boolean(null == u ? void 0 : u.collectionId),
            { collections: p } = Fe(),
            b = (0, oe.useLocalization)();
          n().useEffect(() => {
            u && (t(u.name), l(!1));
          }, [u]);
          const g = n().useCallback(() => {
              const t = Xe(e);
              if (!t) return !1;
              if (t === Xe(b("egstore.library.filter.all"))) return !1;
              if (t === Xe(b("egstore.library.collections.tabs.favorites")))
                return !1;
              return !(null == p ? void 0 : p.some((e) => Xe(e.name) === t));
            }, [e, p]),
            v = (0, r.useCallback)(() => {
              g()
                ? (m && u ? i(u.collectionId, e.trim()) : o(e.trim()), c())
                : l(!0);
            }, [g, m, u, c]);
          return n().createElement(ve, {
            onCreateClick: v,
            onCancelClick: s,
            value: e,
            onValueChange: t,
            hasError: a,
            setHasError: l,
            isEditing: m,
          });
        },
        et = () => {
          const { isOpen: e, cancelModal: t } = Je();
          return n().createElement(
            Le.u,
            { isOpen: e, onClose: t },
            n().createElement(
              Ye.n4,
              { fallback: n().createElement(Ne, null) },
              n().createElement(Qe, null),
            ),
          );
        };
      var tt = a(55637),
        at = a(46603),
        rt = a(71065),
        nt = a(72374),
        lt = Object.defineProperty,
        ot = Object.defineProperties,
        it = Object.getOwnPropertyDescriptors,
        ct = Object.getOwnPropertySymbols,
        st = Object.prototype.hasOwnProperty,
        dt = Object.prototype.propertyIsEnumerable,
        ut = (e, t, a) =>
          t in e
            ? lt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        mt = (e, t) => {
          for (var a in t || (t = {})) st.call(t, a) && ut(e, a, t[a]);
          if (ct) for (var a of ct(t)) dt.call(t, a) && ut(e, a, t[a]);
          return e;
        };
      const pt = (0, m.i)((e, t) => {
          return {
            buttonDiv: (0, b.iv)((0, ne.oI)(10), {
              button:
                ((a = mt(
                  mt({}, (0, nt.ip)("border-color")),
                  (0, nt.ip)("transform", "350ms"),
                )),
                (r = {
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
                }),
                ot(a, it(r))),
            }),
          };
          var a, r;
        }),
        bt = ({ onClick: e, isOnline: t, canCreateCollection: a }) => {
          const r = n().useMemo(() => !a || !t, [a, t]),
            l = pt(r),
            o = n().useRef(null),
            i = a
              ? "egstore.library.collections.add_collection_tooltip"
              : "egstore.library.collections.add_collection_tooltip_max";
          return n().createElement(
            n().Fragment,
            null,
            n().createElement(
              "div",
              {
                className: l.buttonDiv,
                ref: o,
                "data-testid": "add-button-div",
              },
              n().createElement(
                tt.h,
                {
                  onClick: e,
                  buttonHeight: R.Ey.DENSED,
                  buttonWidth: R.WL.BLOCK,
                  disabled: r,
                  pill: !0,
                },
                n().createElement(at.p, null),
              ),
            ),
            t &&
              n().createElement(
                rt.u,
                { anchorRef: o },
                n().createElement(te.Z, { code: i }),
              ),
          );
        },
        gt = () => {
          const { collections: e } = Fe();
          return (0, r.useMemo)(
            () => !e || (null == e ? void 0 : e.length) <= 11,
            [e],
          );
        },
        vt = () => {
          const e = (0, i.c)(),
            t = gt(),
            { openModal: a } = Je();
          return n().createElement(bt, {
            onClick: () => a(),
            canCreateCollection: t,
            isOnline: e,
          });
        };
      var Et = a(23265),
        yt = a(12899),
        ft = a(22480),
        ht = a(80898),
        Ot = a(24779),
        Ct = a(43222),
        It = a(50560),
        wt = Object.defineProperty,
        xt = Object.defineProperties,
        St = Object.getOwnPropertyDescriptors,
        Pt = Object.getOwnPropertySymbols,
        kt = Object.prototype.hasOwnProperty,
        Nt = Object.prototype.propertyIsEnumerable,
        Lt = (e, t, a) =>
          t in e
            ? wt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        jt = (e, t) => {
          for (var a in t || (t = {})) kt.call(t, a) && Lt(e, a, t[a]);
          if (Pt) for (var a of Pt(t)) Nt.call(t, a) && Lt(e, a, t[a]);
          return e;
        },
        Mt = (e, t) => xt(e, St(t));
      const At = 15,
        Tt = (e) => `title-${e}`,
        _t = (e, t) =>
          (0, b.iv)(
            (0, ne.NS)((0, ne.rv)(t === Et.U.ALL ? 0 : At), (0, ne.WL)(At)),
            Mt(jt({}, (0, nt.ip)("color")), {
              minWidth: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              "&:hover": { color: e.textPrimary },
            }),
          ),
        Dt = (0, m.i)((e, { id: t, isEnabledEDSPhase1: a }) => ({
          tabsButtonRoot: (0, b.iv)({ position: "relative" }),
          active: (0, b.iv)({
            color: e.textPrimary,
            "&::after": jt(
              {
                opacity: 1,
                backgroundColor: a ? Ct.K8.primary.hover : e.textPrimary,
              },
              (0, ne.NS)((0, ne.wz)(At), (0, ne.oI)(t === Et.U.ALL ? 0 : At)),
            ),
          }),
          button: (0, b.iv)(
            Mt(jt({ width: "100%" }, (0, nt.ip)("color")), {
              position: "relative",
              paddingTop: 5,
              paddingBottom: 5,
              "&::after": Mt(jt({}, Ot.d), {
                position: "absolute",
                height: 2,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
              }),
              "&:focus-visible": Mt(jt({}, (0, W.Bt)(e)), {
                [`#${Tt(t)}`]: { color: e.textPrimary },
              }),
            }),
          ),
          title: _t(e, t),
          nonDraggableTabs: (0, b.iv)({ flex: "0 0 auto" }),
        })),
        Rt = ({
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
          const u = (0, qe.useSelector)(It.e),
            [m, p] = n().useState(!1),
            g = n().useRef(null),
            v = Dt({ id: r, isEnabledEDSPhase1: u }),
            E = (0, yt.o)();
          n().useEffect(() => {
            var e;
            if (r !== c) {
              const t =
                null == (e = g.current)
                  ? void 0
                  : e.querySelector(`[id=${Tt(r)}]`);
              t && p(t.scrollWidth > t.clientWidth);
            }
          }, [r]);
          const y = n().useMemo(
              () =>
                (!o && !m) || l
                  ? n().createElement(te.Z, {
                      code: "egstore.library.collections.tooltip",
                      args: [null != e ? e : 0],
                    })
                  : `${c} (${e})`,
              [o, m, l, c, e],
            ),
            f = (0, b.cx)(v.tabsButtonRoot, {
              [v.active]: l,
              [v.nonDraggableTabs]: !t,
            });
          return n().createElement(
            "div",
            { className: f, "data-testid": "CollectionTabsButton" },
            n().createElement(
              ft.Z,
              {
                ref: g,
                id: r,
                onClick: () => i(r),
                className: (0, b.cx)(v.button, { [v.active]: l }),
                role: "tab",
                "aria-selected": l,
                onContextMenu: s,
                onKeyDown: d,
              },
              n().createElement(
                ht.Z.Text,
                { textLevel: l ? F.N.PRIMARY : F.N.SECONDARY },
                n().createElement(
                  "div",
                  {
                    className: v.title,
                    "data-dropzoneitem": (r !== E && r !== Et.U.ALL) || void 0,
                    id: Tt(r),
                  },
                  c,
                ),
              ),
            ),
            a && n().createElement(rt.u, { anchorRef: g }, y),
          );
        };
      var Bt = a(5983),
        Zt = a(57247),
        Ft = a(36306),
        Ut = a(94799),
        Wt = a(44846),
        Kt = a(6977),
        zt = a(32042),
        Vt = a(58777),
        $t = a(79253),
        Ht = a(45216),
        Gt = a(54729);
      const qt = (e) =>
          Boolean(
            !(null == e ? void 0 : e.appName) || !e.appName.startsWith("UE_5"),
          ),
        Yt = (e) =>
          Boolean(
            !(null == e ? void 0 : e.namespace) || "poodle" !== e.namespace,
          ),
        Jt = (0, Ut.Z)([
          $t.uX,
          (e) => !(0, $t.uq)(e) || (0, $t.lr)(e),
          (0, Wt.Z)([
            (0, $t.D9)(Ht.CR),
            (0, $t.D9)(Ht.Bv),
            (0, $t.D9)(Ht.kV),
            (0, $t.D9)(Ht.Km),
            (0, $t.D9)(Ht.ze),
            (0, $t.D9)(Ht.L3),
          ]),
        ]),
        Xt = (0, Ut.Z)([
          $t.uX,
          (e) => !(0, $t.uq)(e),
          (0, Wt.Z)([
            (0, $t.D9)(Ht.CR),
            (0, $t.D9)(Ht.Bv),
            (0, $t.D9)(Ht.kV),
            (0, $t.D9)(Ht.Km),
            (0, $t.D9)(Ht.ze),
            (0, $t.D9)(Ht.L3),
          ]),
        ]),
        Qt = (e, t) =>
          (0, Kt.Z)(
            (0, zt.Z)((t) => (e ? Jt(t.catalogItem) : Xt(t.catalogItem))),
            (0, zt.Z)(t ? () => !0 : Yt),
            (0, zt.Z)(qt),
            (0, Vt.Z)(
              (() => {
                let e = !1;
                return (t, a) =>
                  a
                    ? a.namespace === Gt.M
                      ? e || a.catalogItemId !== Gt.g
                        ? t
                        : ((e = !0), [...t, a])
                      : [...t, a]
                    : t;
              })(),
              [],
            ),
          );
      var ea = a(78623),
        ta = Object.defineProperty,
        aa = Object.defineProperties,
        ra = Object.getOwnPropertyDescriptors,
        na = Object.getOwnPropertySymbols,
        la = Object.prototype.hasOwnProperty,
        oa = Object.prototype.propertyIsEnumerable,
        ia = (e, t, a) =>
          t in e
            ? ta(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ca = (e, t) => {
        const a = (0, je.P)(
            ((e) => (0, ea.P1)(Me.$4, (t) => (e ? t[e] : void 0)))(e),
            () => (0, Me.R7)({ collectionId: e }),
            ((n = ((e, t) => {
              for (var a in t || (t = {})) la.call(t, a) && ia(e, a, t[a]);
              if (na) for (var a of na(t)) oa.call(t, a) && ia(e, a, t[a]);
              return e;
            })({}, t)),
            (l = {
              enabled:
                Boolean(e) &&
                e !== Et.U.ALL &&
                !1 !== (null == t ? void 0 : t.enabled),
            }),
            aa(n, ra(l))),
          ),
          { data: r } = a;
        var n, l;
        return {
          items: r,
          query: ((e, t) => {
            var a = {};
            for (var r in e) la.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && na)
              for (var r of na(e))
                t.indexOf(r) < 0 && oa.call(e, r) && (a[r] = e[r]);
            return a;
          })(a, ["data"]),
        };
      };
      var sa = a(84342),
        da = a(6580);
      const ua = (e = Et.U.ALL, t) => {
        const { records: a, query: n } = (0, sa.Ud)(),
          { items: l, query: o } = ca(e, t),
          i = (0, qe.useSelector)(da.H);
        return (0, r.useMemo)(() => {
          const t = Qt((0, Ft.ZP)().supportsLaunchableAddonsFlow(), i)(a),
            r = (
              (e = []) =>
              (t) => {
                const a = e.map((e) => {
                  return t.find(
                    ((a = e),
                    (e) =>
                      a.sandbox === (null == e ? void 0 : e.namespace) &&
                      a.catalogId === (null == e ? void 0 : e.catalogItemId) &&
                      a.artifactId === (null == e ? void 0 : e.appName)),
                  );
                  var a;
                });
                return (0, Bt.Z)(Zt.Z, a);
              }
            )(l);
          return {
            records: e !== Et.U.ALL ? r(t) : t,
            recordsAll: t,
            query: {
              isFetching: n.isFetching || o.isFetching,
              isSuccess: n.isSuccess && o.isSuccess,
            },
          };
        }, [a, l, n.isFetching, n.isSuccess, o.isFetching, o.isSuccess]);
      };
      var ma = ((e) => (
        (e.INSTALLED = "installed"),
        (e.GENRE = "genre"),
        (e.FEATURE = "feature"),
        (e.CATEGORY = "category"),
        (e.PLATFORM = "platform"),
        (e.KEYWORD = "keyword"),
        (e.COLLECTION = "collection"),
        (e.CATALOG_ITEM_ID = "catalogItemId"),
        e
      ))(ma || {});
      const pa = {
        installed: [],
        genre: [],
        feature: [],
        category: [],
        platform: [],
        keyword: "",
        collection: Et.U.ALL,
        catalogItemId: [],
      };
      var ba = ((e) => (
          (e.WINDOWS = "Windows"), (e.WIN32 = "Win32"), (e.MAC = "Mac"), e
        ))(ba || {}),
        ga = ((e) => (
          (e.GAMES = "games"),
          (e.SOFTWARE = "software"),
          (e.ENGINES = "engines"),
          (e.DIGITAL_EXTRAS = "digitalextras"),
          e
        ))(ga || {}),
        va = a(50746);
      const Ea = ({ items: e, selectedFilters: t, type: a }) => {
          const r = [];
          if (t && a) {
            const n = t[a];
            e.filter((e) => {
              const t = ((e, t) => {
                var a, r, n, l, o, i;
                if (e === ma.PLATFORM)
                  return null !=
                    (l =
                      null ==
                      (n = (
                        null !=
                        (r =
                          null == (a = t.catalogItem) ? void 0 : a.releaseInfo)
                          ? r
                          : []
                      )[0])
                        ? void 0
                        : n.platform)
                    ? l
                    : [];
                if (e === ma.CATEGORY)
                  return (
                    null !=
                    (i = null == (o = t.catalogItem) ? void 0 : o.categories)
                      ? i
                      : []
                  ).map((e) => {
                    var t;
                    return null != (t = null == e ? void 0 : e.path) ? t : "";
                  });
                {
                  const e = t.tags || [];
                  return e.length ? e.map((e) => e.toString()) : [];
                }
              })(a, e);
              n.every((e) => t.includes(e)) && r.push(e);
            });
          }
          return r;
        },
        ya = ({ items: e, installedRecords: t }) =>
          t ? e.filter((e) => Boolean(t[e.relationshipId])) : [],
        fa = {
          [ma.INSTALLED]: ya,
          [ma.GENRE]: ({ items: e, selectedFilters: t }) =>
            Ea({ items: e, selectedFilters: t, type: ma.GENRE }),
          [ma.FEATURE]: ({ items: e, selectedFilters: t }) =>
            Ea({ items: e, selectedFilters: t, type: ma.FEATURE }),
          [ma.CATEGORY]: ({ items: e, selectedFilters: t }) =>
            Ea({ items: e, selectedFilters: t, type: ma.CATEGORY }),
          [ma.PLATFORM]: ({ items: e, selectedFilters: t }) =>
            Ea({ items: e, selectedFilters: t, type: ma.PLATFORM }),
          [ma.KEYWORD]: ({ items: e, selectedFilters: t }) => {
            const a = t && t[ma.KEYWORD];
            return a
              ? e.filter((e) => {
                  var t, r;
                  return RegExp(
                    ((r = a), r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
                    "gi",
                  ).test(
                    (null == (t = e.catalogItem) ? void 0 : t.title) ||
                      e.appName ||
                      "",
                  );
                })
              : [];
          },
          [ma.COLLECTION]: void 0,
          [ma.CATALOG_ITEM_ID]: ({ items: e, selectedFilters: t }) => {
            const a = t && t[ma.CATALOG_ITEM_ID];
            return (null == a ? void 0 : a.length)
              ? e.filter((e) =>
                  null == a ? void 0 : a.includes(e.catalogItemId),
                )
              : [];
          },
        },
        ha = (e) => {
          const t = [];
          return (
            Object.keys(e).reduce((t, a) => {
              var r;
              if (null == (r = e[a]) ? void 0 : r.length) {
                const e = fa[a];
                e && t.push(e);
              }
              return t;
            }, t),
            t
          );
        };
      var Oa = Object.defineProperty,
        Ca = Object.getOwnPropertySymbols,
        Ia = Object.prototype.hasOwnProperty,
        wa = Object.prototype.propertyIsEnumerable,
        xa = (e, t, a) =>
          t in e
            ? Oa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Sa = ({ type: e, name: t, id: a, selectedFilters: r }) => {
        const n = ((e, t) => {
          for (var a in t || (t = {})) Ia.call(t, a) && xa(e, a, t[a]);
          if (Ca) for (var a of Ca(t)) wa.call(t, a) && xa(e, a, t[a]);
          return e;
        })({}, r);
        if (e === ma.CATALOG_ITEM_ID) return (n[e] = []), n;
        const l = e === ma.GENRE || e === ma.FEATURE ? a : t;
        return (
          r[e] &&
            l &&
            (r[e].includes(l)
              ? (n[e] = r[e].filter((e) => e !== l))
              : (n[e] = [...r[e], l])),
          n
        );
      };
      var Pa = a(71535),
        ka = a(65845),
        Na = a(79546),
        La = a(83868),
        ja = a(73172),
        Ma = (e, t, a) =>
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
      const Aa = (0, Na.uB)("userLibraryConfigApi"),
        Ta = () => !ka.r2.isSsr() && (0, ja.Y)().indexedDB;
      var _a = Object.defineProperty,
        Da = Object.defineProperties,
        Ra = Object.getOwnPropertyDescriptors,
        Ba = Object.getOwnPropertySymbols,
        Za = Object.prototype.hasOwnProperty,
        Fa = Object.prototype.propertyIsEnumerable,
        Ua = (e, t, a) =>
          t in e
            ? _a(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Wa = (e) => {
        const {
            queryKey: t,
            indexedDBKeyFn: a,
            initialValue: r,
            config: n = { enabled: !0 },
          } = e,
          l = (0, Pa.aM)(
            t,
            () =>
              ((e, t) =>
                Ma(void 0, null, function* () {
                  if (!Ta()) return Promise.resolve(t);
                  try {
                    const t = yield La.gd.get(e);
                    return Promise.resolve(null == t ? void 0 : t.data);
                  } catch (a) {
                    return (
                      Aa.warn(
                        "getCachedUserLibraryConfig",
                        `failed IDB get for - ${e}`,
                        { error: a.message },
                      ),
                      Promise.resolve(t)
                    );
                  }
                }))(a(), r),
            ((i = ((e, t) => {
              for (var a in t || (t = {})) Za.call(t, a) && Ua(e, a, t[a]);
              if (Ba) for (var a of Ba(t)) Fa.call(t, a) && Ua(e, a, t[a]);
              return e;
            })({ refetchOnReconnect: !1, refetchOnWindowFocus: !1 }, n)),
            (c = { enabled: !ka.r2.isSsr() && n.enabled }),
            Da(i, Ra(c))),
          ),
          { data: o } = l;
        var i, c;
        return {
          data: o,
          query: ((e, t) => {
            var a = {};
            for (var r in e) Za.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && Ba)
              for (var r of Ba(e))
                t.indexOf(r) < 0 && Fa.call(e, r) && (a[r] = e[r]);
            return a;
          })(l, ["data"]),
        };
      };
      var Ka = Object.defineProperty,
        za = Object.defineProperties,
        Va = Object.getOwnPropertyDescriptors,
        $a = Object.getOwnPropertySymbols,
        Ha = Object.prototype.hasOwnProperty,
        Ga = Object.prototype.propertyIsEnumerable,
        qa = (e, t, a) =>
          t in e
            ? Ka(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ya = (e, t) => {
          for (var a in t || (t = {})) Ha.call(t, a) && qa(e, a, t[a]);
          if ($a) for (var a of $a(t)) Ga.call(t, a) && qa(e, a, t[a]);
          return e;
        };
      const Ja = "local-storage-item",
        Xa = ({
          keyFn: e = () => "",
          initialValue: t,
          localStorageEnabled: a = !1,
          allowedValues: n,
          config: l,
        }) => {
          const o = (0, Pa.NL)(),
            { data: i, query: c } = Wa({
              queryKey: [Ja, e()],
              indexedDBKeyFn: e,
              initialValue: t,
              config:
                ((s = Ya({}, l)),
                (d = {
                  enabled: a,
                  initialData: t,
                  initialDataUpdatedAt: 0,
                  refetchOnReconnect: !1,
                  refetchOnWindowFocus: !1,
                }),
                za(s, Va(d))),
            });
          var s, d;
          const u = (0, r.useCallback)((e) => e && (!n || n.includes(e)), [n]),
            m = (0, r.useCallback)(
              (t) => {
                var r, n;
                u(t) &&
                  (o.setQueryData([Ja, e()], t),
                  a &&
                    ((r = e()),
                    (n = t),
                    Ma(void 0, null, function* () {
                      if (!r || !Ta()) return;
                      const e = { id: r, data: n };
                      La.gd.put(e).catch((e) => {
                        Aa.warn(
                          "setCachedUserLibraryConfig",
                          `failed IDB put for - ${r}`,
                          { error: e.message },
                        );
                      });
                    })));
              },
              [u, a],
            );
          return { value: u(i) ? i : t, setValue: m, query: c };
        };
      var Qa = a(19057),
        er = a(94655),
        tr = a(5761);
      const ar = (e) =>
          Object.values(e).some((e) => !!Array.isArray(e) && e.length > 0),
        rr = (e) => {
          var t;
          return Boolean(null == (t = e[ma.KEYWORD]) ? void 0 : t.length);
        },
        nr = (e) => e[ma.COLLECTION] !== Et.U.ALL;
      var lr = Object.defineProperty,
        or = Object.defineProperties,
        ir = Object.getOwnPropertyDescriptors,
        cr = Object.getOwnPropertySymbols,
        sr = Object.prototype.hasOwnProperty,
        dr = Object.prototype.propertyIsEnumerable,
        ur = (e, t, a) =>
          t in e
            ? lr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        mr = (e, t) => {
          for (var a in t || (t = {})) sr.call(t, a) && ur(e, a, t[a]);
          if (cr) for (var a of cr(t)) dr.call(t, a) && ur(e, a, t[a]);
          return e;
        },
        pr = (e, t) => or(e, ir(t));
      const br = () => {
        const e = (0, qe.useSelector)(tr.vR),
          t = (0, qe.useSelector)(er.xp),
          { value: a, setValue: n } = Xa({
            keyFn: () => `${Qa.UY}_${e || va.v.ANONYMOUS}`,
            localStorageEnabled: !0,
            initialValue: mr({}, pa),
          }),
          l = (0, r.useMemo)(() => mr(mr({}, pa), a), [a]),
          o = (0, r.useMemo)(() => l[ma.KEYWORD] || "", [l]),
          i = (0, r.useCallback)(
            (e) => {
              n(pr(mr({}, l), { [ma.KEYWORD]: e }));
            },
            [n, l],
          ),
          c = (0, r.useCallback)(
            ({ type: e, name: t, id: a }) => {
              if (!e || (!t && !a) || !l) return;
              const r = Sa({ type: e, name: t, id: a, selectedFilters: l });
              n(mr({}, r));
            },
            [l],
          ),
          s = (0, r.useCallback)(
            (e) => {
              const a = ha(l).reduce(
                (e, a) =>
                  a({
                    items: e,
                    selectedFilters: l,
                    installedRecords: t.latestValue,
                  }),
                e,
              );
              return ((e) => rr(e) || nr(e) || ar(e))(l) ? a : e;
            },
            [t.latestValue, l],
          ),
          d = (0, r.useCallback)(() => {
            const e = l[ma.COLLECTION];
            n(pr(mr({}, pa), { [ma.COLLECTION]: e }));
          }, [l]),
          u = (0, r.useMemo)(() => {
            let e = ((e) => {
              let t = 0;
              return (
                Object.keys(e).forEach((a) => {
                  a !== ma.KEYWORD &&
                    a !== ma.COLLECTION &&
                    a !== ma.CATALOG_ITEM_ID &&
                    (t += e[a].length);
                }),
                t
              );
            })(l);
            return (rr(l) || Boolean(l[ma.CATALOG_ITEM_ID].length)) && e++, e;
          }, [l]);
        return {
          applySelectedFilters: s,
          onFilterClick: c,
          selectedFilters: l,
          setSelectedFilters: n,
          resetFilters: d,
          keywordValue: o,
          setKeywordValue: i,
          numberActiveFilters: u,
        };
      };
      var gr = Object.defineProperty,
        vr = Object.defineProperties,
        Er = Object.getOwnPropertyDescriptors,
        yr = Object.getOwnPropertySymbols,
        fr = Object.prototype.hasOwnProperty,
        hr = Object.prototype.propertyIsEnumerable,
        Or = (e, t, a) =>
          t in e
            ? gr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Cr = () => {
          const { selectedFilters: e, setSelectedFilters: t } = br();
          return {
            selectedCollectionId: (0, r.useMemo)(
              () => e[ma.COLLECTION] || Et.U.ALL,
              [e],
            ),
            setSelectedCollectionId: (0, r.useCallback)(
              (a = Et.U.ALL) => {
                var r, n;
                t(
                  ((r = ((e, t) => {
                    for (var a in t || (t = {}))
                      fr.call(t, a) && Or(e, a, t[a]);
                    if (yr)
                      for (var a of yr(t)) hr.call(t, a) && Or(e, a, t[a]);
                    return e;
                  })({}, e)),
                  (n = { [ma.COLLECTION]: a }),
                  vr(r, Er(n))),
                );
              },
              [t, e],
            ),
          };
        },
        Ir = () => {
          var e;
          const { selectedCollectionId: t, setSelectedCollectionId: a } = Cr(),
            { records: r } = ua();
          return n().createElement(Rt, {
            count: null != (e = null == r ? void 0 : r.length) ? e : 0,
            draggable: !1,
            id: Et.U.ALL,
            isSelected: t === Et.U.ALL,
            onTabClick: () => a(Et.U.ALL),
            title: n().createElement(te.Z, {
              code: "egstore.library.filter.all",
            }),
          });
        };
      var wr = a(20455),
        xr = Object.defineProperty,
        Sr = Object.getOwnPropertySymbols,
        Pr = Object.prototype.hasOwnProperty,
        kr = Object.prototype.propertyIsEnumerable,
        Nr = (e, t, a) =>
          t in e
            ? xr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Lr = (e, t) => {
          for (var a in t || (t = {})) Pr.call(t, a) && Nr(e, a, t[a]);
          if (Sr) for (var a of Sr(t)) kr.call(t, a) && Nr(e, a, t[a]);
          return e;
        };
      const jr = (0, m.i)(() => ({
          root: (0, b.iv)(
            Lr(
              { display: "flex", alignItems: "center", marginBottom: 34 },
              (0, ne.wz)(33),
            ),
          ),
          box: (0, b.iv)({ overflow: "hidden" }),
        })),
        Mr = ({
          allTab: e,
          favoritesTab: t,
          tabs: a,
          addCollectionButton: r,
        }) => {
          const l = jr(),
            { setNodeRef: o } = (0, wr.Zj)({ id: Et.S });
          return n().createElement(
            "div",
            { className: l.root, ref: o },
            e,
            t,
            n().createElement(
              d.x,
              {
                alignItems: u.Ks.Center,
                justify: u.jf.Start,
                wrap: u.Jm.NoWrap,
                className: l.box,
              },
              a,
            ),
            r,
          );
        };
      var Ar = a(67445),
        Tr = Object.defineProperty,
        _r = Object.defineProperties,
        Dr = Object.getOwnPropertyDescriptors,
        Rr = Object.getOwnPropertySymbols,
        Br = Object.prototype.hasOwnProperty,
        Zr = Object.prototype.propertyIsEnumerable,
        Fr = (e, t, a) =>
          t in e
            ? Tr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ur = (e, t) => {
          for (var a in t || (t = {})) Br.call(t, a) && Fr(e, a, t[a]);
          if (Rr) for (var a of Rr(t)) Zr.call(t, a) && Fr(e, a, t[a]);
          return e;
        },
        Wr = (e, t) => _r(e, Dr(t));
      const Kr = (0, m.i)(() => ({
          root: (0, b.iv)({
            minWidth: 0,
            maxWidth: "max-content",
            flex: "1 1 0",
            overflow: "hidden",
          }),
          dragging: (0, b.iv)({ opacity: 0.25 }),
          selected: (0, b.iv)({ flexGrow: 10 }),
        })),
        zr = (e) => {
          var t = e,
            { forwardRef: a, id: r, isSelected: l } = t,
            o = ((e, t) => {
              var a = {};
              for (var r in e)
                Br.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Rr)
                for (var r of Rr(e))
                  t.indexOf(r) < 0 && Zr.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["forwardRef", "id", "isSelected"]);
          const {
              active: i,
              attributes: c,
              isDragging: s,
              listeners: d,
            } = (0, Ar.nB)({ id: r }),
            u = Kr();
          return n().createElement(
            "div",
            Wr(
              Ur(
                Ur(
                  {
                    ref: a,
                    className: (0, b.cx)(u.root, {
                      [u.selected]: l,
                      [u.dragging]: s,
                    }),
                  },
                  c,
                ),
                d,
              ),
              { tabIndex: -1 },
            ),
            n().createElement(
              Rt,
              Wr(Ur({}, o), {
                draggable: !0,
                enableTooltip: !i,
                id: r,
                isSelected: l,
              }),
            ),
          );
        },
        Vr = (0, m.i)(() => ({
          content: (0, b.iv)({ textAlign: "center", padding: "0 40px" }),
          heading: (0, b.iv)({ marginBottom: 20 }),
        })),
        $r = ({
          modalTitle: e,
          onCloseClick: t,
          primaryButton: a,
          secondaryButton: r,
          subTitle: l,
          title: o,
        }) => {
          const i = Vr();
          return n().createElement(A.P, {
            header: n().createElement(
              _.x,
              { onCloseClick: t },
              n().createElement(ae.ZP, { weight: ae.G0.BOLD }, e),
            ),
            content: n().createElement(
              d.x,
              { alignItems: u.Ks.Center, justify: u.jf.Center, fillParent: !0 },
              n().createElement(
                "div",
                { className: i.content },
                n().createElement(
                  "div",
                  { className: i.heading },
                  n().createElement(re.Z.Heading, { headingLevel: 1 }, o),
                ),
                n().createElement(ae.ZP, null, l),
              ),
            ),
            footer: n().createElement(T.m, null, r, a),
          });
        },
        Hr = ({ collectionName: e, onRemoveClick: t, onCancelClick: a }) =>
          n().createElement($r, {
            modalTitle: n().createElement(te.Z, {
              code: "egstore.library.collection_delete_confirm_modal.title",
            }),
            onCloseClick: a,
            title: n().createElement(te.Z, {
              code: "egstore.library.collection_delete_confirm_modal.text_question",
              args: [e],
            }),
            subTitle: n().createElement(te.Z, {
              code: "egstore.library.collection_delete_confirm_modal.text_info",
            }),
            secondaryButton: n().createElement(
              M.d,
              { onClick: a },
              n().createElement(te.Z, {
                code: "egstore.library.collection_delete_confirm_modal.cancel",
              }),
            ),
            primaryButton: n().createElement(
              j.N,
              { onClick: t },
              n().createElement(te.Z, {
                code: "egstore.library.collection_delete_confirm_modal.confirm",
              }),
            ),
          });
      var Gr = Object.defineProperty,
        qr = Object.defineProperties,
        Yr = Object.getOwnPropertyDescriptors,
        Jr = Object.getOwnPropertySymbols,
        Xr = Object.prototype.hasOwnProperty,
        Qr = Object.prototype.propertyIsEnumerable,
        en = (e, t, a) =>
          t in e
            ? Gr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        tn = (e, t) => {
          for (var a in t || (t = {})) Xr.call(t, a) && en(e, a, t[a]);
          if (Jr) for (var a of Jr(t)) Qr.call(t, a) && en(e, a, t[a]);
          return e;
        },
        an = (e, t) => qr(e, Yr(t));
      const rn = (e) =>
          r.createElement(
            ye,
            an(tn({}, e), {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: r.createElement(
                d.x,
                {
                  alignItems: u.Ks.Center,
                  justify: u.jf.Center,
                  fillParent: !0,
                },
                r.createElement(
                  d.x,
                  { direction: u.jO.Column, alignItems: u.Ks.Center },
                  r.createElement(
                    Ee.Od,
                    tn({ variant: Ee.Jy.Text, width: 500, height: 50 }, e),
                  ),
                  r.createElement(
                    Ee.Od,
                    an(tn({ variant: Ee.Jy.Text, width: 300, height: 50 }, e), {
                      style: { margin: "-10px 0 10px" },
                    }),
                  ),
                  r.createElement(
                    Ee.Od,
                    tn({ variant: Ee.Jy.Text, width: 260, height: 30 }, e),
                  ),
                ),
              ),
            }),
          ),
        nn = s("collection-remove-confirm-modal"),
        ln = () => {
          const { closeModal: e, cancelModal: t, getData: a } = nn(),
            l = (() => {
              const e = (0, qe.useDispatch)(),
                { selectedCollectionId: t, setSelectedCollectionId: a } = Cr();
              return (0, r.useCallback)(
                (r) => {
                  e((0, Me.C5)(r)), t === r.collectionId && a(Et.U.ALL);
                },
                [e, t, a],
              );
            })(),
            o = Ge(a()),
            i = n().useCallback(() => {
              o && l(o), e();
            }, [o]);
          return n().createElement(
            n().Fragment,
            null,
            n().createElement(Hr, {
              collectionName: (null == o ? void 0 : o.name) || "",
              onRemoveClick: i,
              onCancelClick: t,
            }),
          );
        },
        on = () => {
          const { isOpen: e, cancelModal: t } = nn();
          return n().createElement(
            Le.u,
            { isOpen: e, onClose: t },
            n().createElement(
              Ye.n4,
              { fallback: n().createElement(rn, null) },
              n().createElement(ln, null),
            ),
          );
        };
      var cn = a(8909),
        sn = a(59637);
      const dn = ({ disabled: e, onClick: t }) =>
          n().createElement(sn.c, {
            horizontal: !0,
            title: n().createElement(te.Z, {
              code: "diesel.library.settings.remove_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        un = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, cn.U)(),
            a = (0, i.c)({ suspense: !1 }),
            r = (0, yt.o)(),
            { openModal: l } = nn(),
            o = n().useCallback(() => {
              e && e !== Et.U.ALL && e !== r && l(e), t(void 0);
            }, [e, t, l]);
          return n().createElement(dn, { onClick: o, disabled: !a });
        },
        mn = ({ disabled: e, onClick: t }) =>
          n().createElement(sn.c, {
            horizontal: !0,
            title: n().createElement(te.Z, {
              code: "diesel.library.settings.rename_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        pn = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, cn.U)(),
            a = (0, i.c)({ suspense: !1 }),
            r = (0, yt.o)(),
            { openModal: l } = Je(),
            o = n().useCallback(() => {
              e && e !== Et.U.ALL && e !== r && l(e), t(void 0);
            }, [e, t, l]);
          return n().createElement(mn, { onClick: o, disabled: !a });
        };
      var bn = a(28267),
        gn = a(20997),
        vn = a(27491);
      const En = () => {};
      var yn = a(13275);
      const fn = (0, m.i)(() => ({
          root: (0, b.iv)({ position: "fixed", zIndex: le.W.navDropdown }),
        })),
        hn = ({
          anchorElement: e,
          anchorPosition: t,
          children: a,
          isOpen: n = !1,
          onClose: l,
        }) => {
          const o = fn(),
            [i, c] = r.useState(null),
            s = (0, r.useRef)((0, Na.N6)("egs-context-menu")),
            d = (({
              isOpen: e = !1,
              onClose: t = En,
              anchorPosition: a,
              popperElement: n,
              anchorElement: l,
            }) => {
              const o = (0, r.useCallback)(() => {
                  t();
                }, [t]),
                i = (0, r.useCallback)(
                  (e) => {
                    n && !n.contains(null == e ? void 0 : e.target) && t();
                  },
                  [n, t],
                ),
                c = (0, r.useCallback)(
                  (e) => {
                    n &&
                      n.contains(null == e ? void 0 : e.target) &&
                      e.preventDefault(),
                      l && e.target !== l && !l.contains(e.target) && t();
                  },
                  [l, n, t],
                ),
                s = (0, r.useCallback)(
                  (e) => {
                    n && !n.contains(e.relatedTarget) && t();
                  },
                  [n, t],
                ),
                d = (0, r.useCallback)(
                  (a) => {
                    if (!e || !n) return;
                    (a.key !== gn.et.ArrowUp && a.key !== gn.et.ArrowDown) ||
                      a.preventDefault();
                    const r = n.querySelector("ul"),
                      l = (0, bn.B9)(r),
                      o = (0, bn.u$)(r);
                    a.key === gn.et.ArrowUp &&
                      (o > 0
                        ? (0, bn.jc)(o - 1, r)
                        : l.length && (0, bn.jc)(l.length - 1, r)),
                      a.key === gn.et.ArrowDown &&
                        (l.length && o < l.length - 1
                          ? (0, bn.jc)(o + 1, r)
                          : (0, bn.jc)(0, r)),
                      a.key === gn.et.Escape && t();
                  },
                  [e, t, n],
                ),
                u = (0, r.useMemo)(() => {
                  const { innerWidth: e, innerHeight: t } = (0, ja.Y)(),
                    r = (0, Na.Iv)(n),
                    l = Math.max(0, e - r.width),
                    o = Math.max(0, t - r.height);
                  return {
                    left: (0, vn.Z)(0, l, (null == a ? void 0 : a.left) || 0),
                    top: (0, vn.Z)(0, o, (null == a ? void 0 : a.top) || 0),
                  };
                }, [a, n]);
              return (
                (0, r.useEffect)(() => {
                  const t = (0, ja.Y)();
                  return (
                    e &&
                      (t.addEventListener("resize", o),
                      t.addEventListener("scroll", o),
                      t.addEventListener("contextmenu", c),
                      t.addEventListener("click", i),
                      t.addEventListener("blur", s),
                      t.addEventListener("keydown", d)),
                    () => {
                      t.removeEventListener("resize", o),
                        t.removeEventListener("scroll", o),
                        t.removeEventListener("contextmenu", c),
                        t.removeEventListener("click", i),
                        t.removeEventListener("blur", s),
                        t.removeEventListener("keydown", d);
                    }
                  );
                }, [e, o, c, i, s, d]),
                u
              );
            })({
              isOpen: n,
              popperElement: i,
              anchorElement: e,
              anchorPosition: t,
              onClose: l,
            });
          return s.current && n
            ? (0, yn.createPortal)(
                r.createElement(
                  "div",
                  {
                    ref: c,
                    className: o.root,
                    style: d,
                    "data-testid": "ContextMenu",
                  },
                  a,
                ),
                s.current,
              )
            : null;
        };
      var On = a(83792),
        Cn = Object.defineProperty,
        In = Object.getOwnPropertySymbols,
        wn = Object.prototype.hasOwnProperty,
        xn = Object.prototype.propertyIsEnumerable,
        Sn = (e, t, a) =>
          t in e
            ? Cn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Pn = (0, m.i)(() => ({
          root: (0, b.iv)({ width: "max-content" }),
        })),
        kn = (e) => {
          var t = e,
            { selectedCollectionId: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var r in e)
                wn.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && In)
                for (var r of In(e))
                  t.indexOf(r) < 0 && xn.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["selectedCollectionId"]);
          const l = Pn();
          return n().createElement(
            hn,
            ((e, t) => {
              for (var a in t || (t = {})) wn.call(t, a) && Sn(e, a, t[a]);
              if (In) for (var a of In(t)) xn.call(t, a) && Sn(e, a, t[a]);
              return e;
            })({}, r),
            n().createElement(
              "div",
              { className: l.root },
              n().createElement(
                On.v,
                { dense: !0, noBorder: !0 },
                n().createElement(pn, { collectionId: a }),
                n().createElement(un, { collectionId: a }),
              ),
            ),
          );
        },
        Nn = (e) => {
          const { activeMenu: t, setActiveMenu: a } = (0, cn.U)(),
            [l, o] = n().useState(void 0),
            i = n().useCallback(
              (t) => {
                t.preventDefault(),
                  o(l ? void 0 : { left: t.clientX, top: t.clientY }),
                  a(e);
              },
              [o, a, l],
            ),
            c = n().useCallback(() => {
              o(void 0), t === e && a(void 0);
            }, [o, a]),
            s = n().useCallback(
              (t) => {
                t.key === gn.et.F10 &&
                  t.shiftKey &&
                  (t.preventDefault(),
                  l ? c() : (o({ left: 0, top: 0 }), a(e)));
              },
              [o, a, l],
            );
          return (
            n().useEffect(() => {
              !t && Boolean(l) && c();
            }, [t]),
            (0, r.useMemo)(
              () => ({
                openContextMenu: i,
                closeContextMenu: c,
                openContextMenuWithKeyboard: s,
                contextMenuProps: {
                  isOpen: Boolean(l),
                  anchorPosition: l,
                  onClose: c,
                },
              }),
              [l, i, c, s],
            )
          );
        };
      var Ln = Object.defineProperty,
        jn = Object.getOwnPropertySymbols,
        Mn = Object.prototype.hasOwnProperty,
        An = Object.prototype.propertyIsEnumerable,
        Tn = (e, t, a) =>
          t in e
            ? Ln(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const _n = ({ collectionId: e, isTruncated: t }) => {
          const a = n().useRef(null),
            { active: r, setNodeRef: l } = (0, Ar.nB)({ id: e }),
            { selectedCollectionId: o, setSelectedCollectionId: i } = Cr(),
            {
              openContextMenu: c,
              openContextMenuWithKeyboard: s,
              contextMenuProps: d,
            } = Nn(`collection_tab_context:${e}`),
            u = Ge(e),
            { records: m } = ua(e),
            p = o === e;
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
            n().createElement(zr, {
              count: (null == m ? void 0 : m.length) || 0,
              forwardRef: b,
              id: e,
              isSelected: p,
              isTruncated: t,
              onContextMenu: c,
              onKeyDown: s,
              onTabClick: () => i(e),
              title: (null == u ? void 0 : u.name) || "",
            }),
            n().createElement(
              kn,
              ((e, t) => {
                for (var a in t || (t = {})) Mn.call(t, a) && Tn(e, a, t[a]);
                if (jn) for (var a of jn(t)) An.call(t, a) && Tn(e, a, t[a]);
                return e;
              })({ selectedCollectionId: e, anchorElement: a.current }, d),
            ),
          );
        },
        Dn = (0, m.i)((e) => ({
          dragImage: (0, b.iv)({
            position: "relative",
            top: -30,
            height: "auto",
            width: "max-content",
            padding: "10px 20px",
            borderRadius: fe.E0,
            boxShadow: `0px 5px 10px ${fe.S}`,
            background: e.level1,
            textAlign: "center",
          }),
        })),
        Rn = ({ name: e, id: t }) => {
          var a;
          const r = Dn(),
            { items: l } = ca(t);
          return n().createElement(
            "div",
            { className: r.dragImage },
            n().createElement(
              ae.ZP,
              { textLevel: F.N.PRIMARY },
              e,
              " (",
              null != (a = null == l ? void 0 : l.length) ? a : 0,
              ")",
            ),
          );
        },
        Bn = () => {
          var e;
          const { selectedCollectionId: t, setSelectedCollectionId: a } = Cr(),
            r = (0, yt.o)(),
            { records: l } = ua(r);
          return n().createElement(Rt, {
            count: null != (e = null == l ? void 0 : l.length) ? e : 0,
            draggable: !1,
            id: r,
            isSelected: t === r,
            onTabClick: () => a(r),
            title: n().createElement(te.Z, {
              code: "egstore.library.collections.tabs.favorites",
            }),
          });
        },
        Zn = (e) => {
          const t = (0, yt.o)();
          return Ge(t, e);
        },
        Fn = (e) => {
          const { selectedCollectionId: t } = Cr(),
            { collections: a } = Fe(e),
            n = (0, yt.o)();
          return (0, r.useMemo)(
            () =>
              (null == a ? void 0 : a.length)
                ? a.filter((e) => e.collectionId !== n)
                : [],
            [a, n, t],
          );
        },
        Un = (e) => {
          const t = n().useRef();
          return (
            n().useEffect(() => {
              t.current = e;
            }, [e]),
            t.current
          );
        };
      var Wn = a(95339),
        Kn = a(55156);
      const zn = (0, m.i)((e) => ({
          draggingRight: (0, b.iv)(
            (0, ne.vQ)({ style: "solid", size: 2, color: e.accent }),
            (0, ne.WL)(13),
          ),
          draggingLeft: (0, b.iv)(
            (0, ne.sc)({ style: "solid", size: 2, color: e.accent }),
            (0, ne.rv)(13),
          ),
          title: _t(e),
        })),
        Vn = () => {
          const e = zn(),
            t = Fn(),
            a = Zn(),
            { selectedCollectionId: l } = Cr(),
            o = (() => {
              const e = Fn(),
                t = (0, oe.useLocalization)(),
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
              const e = (0, qe.useDispatch)();
              return (0, r.useCallback)(
                (t) => {
                  e((0, Me.Fv)(t));
                },
                [e],
              );
            })(),
            c = (0, yt.o)(),
            s = n().useRef(null),
            [d, u] = n().useState(null),
            [m, p] = n().useState({}),
            [g, v] = n().useState([]),
            [E, y] = n().useState(null),
            [f, h] = n().useState(0),
            [O, C] = n().useState(""),
            [I, w] = n().useState(0),
            [x, S] = n().useState(null),
            [P, k] = n().useState(!1),
            N = (0, wr.Dy)(
              (0, wr.VT)(wr.we, { activationConstraint: { distance: 20 } }),
              (0, wr.VT)(wr.Lg, {
                coordinateGetter: Ar.is,
                keyboardCodes: {
                  start: [gn.et.Space],
                  cancel: [gn.et.Escape],
                  end: [gn.et.Space, gn.et.Enter],
                },
              }),
            ),
            L = Un(f),
            j = Un(O),
            M = Un(I);
          n().useEffect(() => {
            null === d && I && u(I);
          }, [I]);
          const A = n().useCallback((t) => {
              t &&
                (t.classList.remove(...t.classList), t.classList.add(e.title));
            }, []),
            T = n().useCallback(() => {
              y(null), S(null), w(0), h(0), k(!1), u(null);
            }, []),
            _ = (e) => {
              if (
                ((e.code !== gn.et.ArrowLeft && e.code !== gn.et.ArrowRight) ||
                  S(e.code),
                e.code === gn.et.Escape && s.current)
              ) {
                S(null);
                const e = s.current.querySelectorAll(
                  "[data-dropzoneitem=true]",
                );
                e &&
                  e.forEach((e) => {
                    A(e);
                  });
              }
            };
          n().useEffect(
            () => (
              s.current && s.current.addEventListener("keydown", _),
              () => {
                var e;
                return null == (e = s.current)
                  ? void 0
                  : e.removeEventListener("keydown", _);
              }
            ),
            [s.current],
          );
          const D = n().useCallback(
              (e) => {
                var a;
                const r =
                  null == (a = s.current)
                    ? void 0
                    : a.querySelectorAll("[data-dropzoneitem=true]");
                r &&
                  r.forEach((e) => {
                    A(e);
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
                      const d = (0, Ar.Rp)(t, e, s);
                      if (!(0, Kn.Z)(d, t)) {
                        const e = d.map((e) => e.collectionId);
                        e.unshift(o), l(e);
                      }
                    }
                  })({
                    ev: e,
                    customCollections: t,
                    dragDirection: I,
                    isOverSame: P,
                    initialDragDirection: d,
                    reorderCollections: i,
                    favCollectionId: c,
                  }),
                  T();
              },
              [j, I, P, d],
            ),
            R = n().useCallback(
              (e) => {
                const a = t.find((t) => t.collectionId === e.active.id);
                a && y(a);
              },
              [t],
            ),
            B = n().useCallback(
              (t) => {
                var a, r, n, l, o;
                h(t.delta.x);
                const i =
                  x || (null == (a = t.over) ? void 0 : a.id) === j
                    ? null == (n = s.current)
                      ? void 0
                      : n.querySelector(
                          `[id=${Tt(null == (r = t.over) ? void 0 : r.id)}]`,
                        )
                    : null == (l = s.current)
                      ? void 0
                      : l.querySelector(`[id=${Tt(j)}]`);
                if ((null == (o = t.over) ? void 0 : o.id) !== j || x) A(i);
                else {
                  let t;
                  I !== M &&
                    (k(!0),
                    (t = 1 === I ? e.draggingRight : e.draggingLeft),
                    A(i),
                    i && i.classList.add((0, b.cx)(e.title, t)));
                }
              },
              [j, x, I, M],
            ),
            Z = n().useCallback(
              (t) => {
                var a, r, n, l, o;
                if (t.active.id === (null == (a = t.over) ? void 0 : a.id))
                  return;
                let i;
                k(!1),
                  C(
                    null != (n = null == (r = t.over) ? void 0 : r.id) ? n : "",
                  ),
                  (i = 1 === I ? e.draggingRight : e.draggingLeft);
                const c =
                  null == (o = s.current)
                    ? void 0
                    : o.querySelector(
                        `[id=${Tt(null == (l = t.over) ? void 0 : l.id)}]`,
                      );
                c && c.classList.add((0, b.cx)(e.title, i));
              },
              [I],
            );
          return (
            n().useEffect(() => {
              x
                ? x === gn.et.ArrowRight
                  ? w(1)
                  : x === gn.et.ArrowLeft && w(-1)
                : L && f && (L < f ? w(1) : L > f && w(-1));
            }, [L, f, x]),
            n().useEffect(() => {
              if (s.current) {
                const e = Array.from(
                  s.current.querySelectorAll("[data-dropzoneitem=true]"),
                );
                v(e);
              }
            }, [t]),
            n().useEffect(() => {
              const e = {};
              g.forEach((t) => {
                const a = t.id.substring(t.id.indexOf("-") + 1);
                e[a] = t.scrollWidth > t.clientWidth;
              }),
                p(e);
            }, [g, l, t]),
            n().createElement(
              n().Fragment,
              null,
              n().createElement(
                wr.LB,
                {
                  sensors: N,
                  collisionDetection: wr.ey,
                  onDragEnd: D,
                  onDragStart: R,
                  onDragOver: Z,
                  onDragMove: B,
                  accessibility: { announcements: o },
                },
                n().createElement(
                  Ar.Fo,
                  { items: t.map((e) => e.collectionId), strategy: Ar.PG },
                  n().createElement(
                    "div",
                    { ref: s, role: "tablist" },
                    a &&
                      n().createElement(Mr, {
                        allTab: n().createElement(Ir, null),
                        favoritesTab: n().createElement(Bn, null),
                        tabs: t.map((e) =>
                          n().createElement(_n, {
                            key: e.collectionId,
                            collectionId: e.collectionId,
                            isTruncated: m[e.collectionId],
                          }),
                        ),
                        addCollectionButton: n().createElement(vt, null),
                      }),
                  ),
                ),
                s.current
                  ? (0, yn.createPortal)(
                      n().createElement(
                        wr.y9,
                        { style: { cursor: "copy" }, modifiers: [Wn.K7] },
                        E
                          ? n().createElement(Rn, {
                              name: E.name,
                              id: E.collectionId,
                            })
                          : null,
                      ),
                      s.current,
                    )
                  : null,
              ),
            )
          );
        };
      const $n = ({ animation: e }) =>
        n().createElement(Mr, {
          allTab: n().createElement(Ee.Od, {
            height: 30,
            width: 40,
            animation: e,
          }),
          favoritesTab: n().createElement(Ee.Od, {
            height: 30,
            width: 70,
            style: { marginRight: "30px", marginLeft: "30px" },
            animation: e,
          }),
          tabs: [],
          addCollectionButton: n().createElement(Ee.Od, {
            variant: Ee.Jy.Circle,
            height: 50,
            width: 50,
            animation: e,
          }),
        });
      var Hn = a(30052),
        Gn = a.n(Hn);
      const qn = (0, m.i)((e) => ({
          root: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            background: e.backgroundOverlay,
            borderRadius: fe.VY,
            marginBottom: 40,
          }),
          content: (0, b.iv)({
            display: "flex",
            flexDirection: "column",
            padding: 20,
            width: "100%",
            [p.Uc.xl]: { alignItems: "center", flexDirection: "row" },
          }),
          textContent: (0, b.iv)({ [p.Uc.md]: { maxWidth: 700 } }),
          title: (0, b.iv)({
            marginBottom: 5,
            [p.Uc.xxl]: { marginBottom: 8 },
            h1: {
              fontSize: 22,
              lineHeight: "32px",
              [p.Uc.xxl]: { fontSize: 26, lineHeight: "38px" },
            },
          }),
          body: (0, b.iv)({
            span: {
              fontSize: 14,
              lineHeight: "20px",
              [p.Uc.xxl]: { fontSize: 16, lineHeight: "22px" },
            },
          }),
          image: (0, b.iv)({ height: 160, width: 160, flexShrink: 0 }),
          buttonDiv: (0, b.iv)({
            display: "flex",
            marginTop: 15,
            "button:first-child": (0, ne.wz)(10),
            [p.Uc.xl]: {
              marginTop: 0,
              height: "100%",
              width: "100%",
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            },
          }),
        })),
        Yn = ({
          image: e,
          title: t,
          body: a,
          hideButton: r,
          newCollectionButton: l,
        }) => {
          const o = qn();
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
                  n().createElement(re.Z.Heading, { headingLevel: 1 }, t),
                ),
                n().createElement(
                  "div",
                  { className: o.body },
                  n().createElement(ae.ZP, { textLevel: F.N.SECONDARY }, a),
                ),
              ),
              n().createElement("div", { className: o.buttonDiv }, r, l),
            ),
          );
        };
      var Jn = a(67764),
        Xn = a(6958),
        Qn = a(43146);
      const el = () => {
        const e = (0, qe.useSelector)(tr.vR),
          t = (0, i.c)(),
          a = Fn(),
          { openModal: r } = Je(),
          { value: l, setValue: o } = Xa({
            keyFn: () => `EGS_LIBRARY_INTRO_BANNER_HIDDEN_${e}`,
            localStorageEnabled: Boolean(e),
            initialValue: !1,
          }),
          c = n().useMemo(
            () => !l && !(null == a ? void 0 : a.length) && t,
            [l, a, t],
          );
        return (
          n().useEffect(() => {
            (null == a ? void 0 : a.length) && !l && o(!0);
          }, [null == a ? void 0 : a.length]),
          c
            ? n().createElement(
                n().Fragment,
                null,
                n().createElement(Yn, {
                  image: n().createElement(Qn.w, {
                    src: Gn(),
                    showBrokenOnError: !0,
                  }),
                  title: n().createElement(te.Z, {
                    code: "egstore.library.favorites_folders.intro.title",
                  }),
                  body: n().createElement(te.Z, {
                    code: "egstore.library.favorites_folders.intro.text",
                  }),
                  hideButton: n().createElement(
                    Jn.f5,
                    {
                      buttonWidth: R.WL.AUTO,
                      buttonHeight: R.Ey.DENSED,
                      onClick: () => o(!0),
                    },
                    n().createElement(te.Z, {
                      code: "egstore.library.favorites_folders.intro.button.hide",
                    }),
                  ),
                  newCollectionButton: n().createElement(
                    Xn.gg,
                    {
                      buttonWidth: R.WL.AUTO,
                      buttonHeight: R.Ey.DENSED,
                      onClick: () => r(),
                    },
                    n().createElement(te.Z, {
                      code: "egstore.library.favorites_folders.intro.button.new",
                    }),
                  ),
                }),
              )
            : null
        );
      };
      var tl = a(43651);
      const al = (0, m.i)(() => ({
          root: (0, b.iv)({ marginTop: 40, textAlign: "center" }),
          image: (0, b.iv)({
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
          }),
          titleDiv: (0, b.iv)({ marginBottom: 30 }),
        })),
        rl = ({
          image: e,
          title: t,
          subtitle: a,
          buttonText: r,
          onButtonClick: l,
        }) => {
          const o = al();
          return n().createElement(
            "div",
            { className: o.root, "data-testid": "EmptyCollectionMessage" },
            n().createElement(
              N,
              null,
              n().createElement(L, { xs: 2 }),
              n().createElement(
                L,
                { xs: 8 },
                n().createElement(
                  d.x,
                  { centerContent: !0, direction: u.jO.Column },
                  e && n().createElement("div", { className: o.image }, e),
                  n().createElement(
                    "div",
                    { className: o.titleDiv },
                    n().createElement(re.Z.Heading, { headingLevel: 2 }, t),
                    a &&
                      n().createElement(re.Z.Heading, { headingLevel: 3 }, a),
                  ),
                  n().createElement(Xn.gg, { onClick: l }, r),
                ),
              ),
              n().createElement(L, { xs: 2 }),
            ),
          );
        };
      var nl = a(29992),
        ll = a(29702),
        ol = a(24958),
        il = a(47411),
        cl = Object.defineProperty,
        sl = Object.defineProperties,
        dl = Object.getOwnPropertyDescriptors,
        ul = Object.getOwnPropertySymbols,
        ml = Object.prototype.hasOwnProperty,
        pl = Object.prototype.propertyIsEnumerable,
        bl = (e, t, a) =>
          t in e
            ? cl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        gl = (e, t) => {
          for (var a in t || (t = {})) ml.call(t, a) && bl(e, a, t[a]);
          if (ul) for (var a of ul(t)) pl.call(t, a) && bl(e, a, t[a]);
          return e;
        },
        vl = (e, t) => sl(e, dl(t));
      const El = (0, m.i)((e) => ({
          root: (0, b.iv)({
            overflow: "hidden",
            position: "relative",
            backgroundColor: e.backgroundOverlay,
            borderRadius: fe.E0,
          }),
          image: (0, b.iv)((0, fe.fF)(fe.oM.x3x4)),
          imageInner: (0, b.iv)({
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            img: {
              objectFit: "cover",
              maxWidth: "none",
              maxHeight: "100%",
              width: "auto",
              height: "100%",
            },
          }),
          progressImageFrame: (0, b.iv)(
            vl(gl(gl({}, nt.ZP.quick("right")), il.a), { overflow: "hidden" }),
          ),
          logoImage: (0, b.iv)(
            vl(gl({}, il.a), {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }),
          ),
          logoInner: (0, b.iv)({ width: "70%", backgroundSize: "contain" }),
          grayscale: (0, b.iv)(nt.ZP.quick("filter"), {
            filter: "grayscale(100%)",
            opacity: "0.3",
          }),
          indeterminate: (0, b.iv)(ol.Z.fadeInAndOut()),
        })),
        yl = ({
          image: e,
          indeterminate: t = !1,
          logo: a,
          percent: n = 0,
          children: l,
        }) => {
          const o = El(),
            i = r.createRef(),
            [c, s] = r.useState({ width: "100%", height: "100%" }),
            d = (0, vn.Z)(0, 1, n),
            u = d > 0 && d < 1 && !t,
            m = 100 * (1 - d),
            p = u;
          r.useEffect(() => {
            if (!i.current) return;
            const { offsetWidth: e, offsetHeight: t } = i.current;
            (c.width === e && c.height === t) || s({ width: e, height: t });
          }, [e, n]);
          const g = (0, b.cx)(o.image, {
              [o.grayscale]: p,
              [o.indeterminate]: t,
            }),
            v = (0, b.cx)(o.logoImage, { [o.grayscale]: p });
          return r.createElement(
            "div",
            { className: o.root },
            r.createElement(
              "div",
              { className: g, "data-testid": "base-image", ref: i },
              r.createElement("div", { className: o.imageInner }, e),
            ),
            u &&
              e &&
              r.createElement(
                "div",
                {
                  className: o.progressImageFrame,
                  style: { right: `${m}%` },
                  "data-testid": "progress-image",
                  "aria-hidden": !0,
                },
                r.createElement(
                  "div",
                  { className: o.imageInner, style: c },
                  e,
                ),
              ),
            a &&
              r.createElement(
                "div",
                {
                  className: v,
                  "data-testid": "logo-image",
                  "aria-hidden": !0,
                },
                r.createElement("div", { className: o.logoInner }, a),
              ),
            l,
          );
        };
      var fl = a(18356),
        hl = a(19166),
        Ol = Object.defineProperty,
        Cl = Object.defineProperties,
        Il = Object.getOwnPropertyDescriptors,
        wl = Object.getOwnPropertySymbols,
        xl = Object.prototype.hasOwnProperty,
        Sl = Object.prototype.propertyIsEnumerable,
        Pl = (e, t, a) =>
          t in e
            ? Ol(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        kl = (e, t) => {
          for (var a in t || (t = {})) xl.call(t, a) && Pl(e, a, t[a]);
          if (wl) for (var a of wl(t)) Sl.call(t, a) && Pl(e, a, t[a]);
          return e;
        },
        Nl = (e, t) => Cl(e, Il(t));
      const Ll = le.W.overlay,
        jl = (0, m.i)((e, { landscape: t }) => ({
          overlay: (0, b.iv)(
            Nl(
              kl(
                { position: "absolute", top: t ? 10 : 0 },
                (0, ne.t$)(t ? 10 : 0),
              ),
              {
                zIndex: Ll,
                paddingBottom: t ? void 0 : "calc(4 / 3 * 100%)",
                width: t ? hl.nx : "100%",
                height: t ? hl.bg : void 0,
                pointerEvents: "none",
              },
            ),
          ),
          badges: (0, b.iv)(
            Nl(kl({ position: "absolute", bottom: 0 }, (0, ne.F2)(0)), {
              padding: 10,
            }),
          ),
        })),
        Ml = ({ badges: e, favorite: t, landscape: a, update: r }) => {
          const l = jl({ landscape: a });
          return n().createElement(
            "div",
            { className: l.overlay },
            r,
            t,
            e && !a
              ? n().createElement("div", { className: l.badges }, e)
              : null,
          );
        };
      var Al = a(96685);
      const Tl = (0, Al.L)(
        r.createElement(
          "g",
          null,
          r.createElement("path", {
            d: "M4.92901 4.9289C6.81762 3.04029 9.3291 1.99965 12.0004 2C14.6718 2.00035 17.1829 3.04064 19.0711 4.9289C20.9594 6.81716 21.9997 9.32829 22 11.9996H20.0003C19.9999 9.86277 19.1678 7.854 17.6569 6.34311C16.146 4.83223 14.1373 4.00013 12.0004 3.99979C9.86357 3.99944 7.85411 4.83223 6.34323 6.34311L8.46455 8.46443L2.10059 9.17154L2.80769 2.80758L4.92901 4.9289Z",
          }),
          r.createElement("path", {
            d: "M11.9996 20.0001C14.1365 20.0005 16.1459 19.1677 17.6568 17.6568L15.5355 15.5355L21.8995 14.8284L21.1924 21.1923L19.071 19.071C17.1824 20.9596 14.671 22.0003 11.9996 21.9999C9.32829 21.9996 6.81716 20.9593 4.9289 19.071C3.04063 17.1828 2.00035 14.6716 2 12.0003H3.99979C4.00013 14.1372 4.83223 16.1459 6.34311 17.6568C7.854 19.1677 9.86277 19.9998 11.9996 20.0001Z",
          }),
        ),
        "Retry",
      );
      var _l = Object.defineProperty,
        Dl = Object.getOwnPropertySymbols,
        Rl = Object.prototype.hasOwnProperty,
        Bl = Object.prototype.propertyIsEnumerable,
        Zl = (e, t, a) =>
          t in e
            ? _l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Fl = (e, t) => {
          for (var a in t || (t = {})) Rl.call(t, a) && Zl(e, a, t[a]);
          if (Dl) for (var a of Dl(t)) Bl.call(t, a) && Zl(e, a, t[a]);
          return e;
        };
      const Ul = (0, m.i)((e) => ({
          root: (0, b.iv)({ position: "absolute", backgroundColor: fe.Bo }),
          blueCircle: (0, b.iv)({
            display: "flex",
            backgroundColor: e.accent,
            justifyContent: "center",
            alignItems: "center",
            svg: { transform: "scaleX(-1)" },
          }),
          blueCircleGrid: (0, b.iv)({
            width: 34,
            height: 34,
            borderRadius: 34,
            boxShadow: `0px 8px 16px 0px ${fe.e1}, \n                    0px 6px 8px 0px ${fe.e1}, \n                    0px 4px 4px 0px ${fe.e1}, \n                    0px 2px 2px 0px ${fe.e1}, \n                    0px 1px 1px 0px ${fe.e1}`,
            fontSize: 22,
          }),
          blueCircleList: (0, b.iv)(
            Fl(
              {
                width: 16,
                height: 16,
                borderRadius: 16,
                boxShadow: `0px 5.333px 10.667px 0px ${fe.e1}, \n                    0px 4px 5.333px 0px ${fe.e1}, \n                    0px 2.667px 2.667px 0px ${fe.e1}, \n                    0px 1.333px 1.333px 0px ${fe.e1}, \n                    0px 0.667px 0.667px 0px ${fe.e1}`,
                fontSize: 12,
                position: "absolute",
                top: -6,
              },
              (0, ne.F2)(-6),
            ),
          ),
        })),
        Wl = ({ isGridView: e }) => {
          const t = Ul(),
            a = e ? t.blueCircleGrid : t.blueCircleList;
          return n().createElement(
            d.x,
            {
              className: t.root,
              "data-testid": "UpdateIconOverlay",
              centerContent: !0,
              fillParent: !0,
            },
            n().createElement(
              "div",
              { className: (0, b.cx)(t.blueCircle, a) },
              n().createElement(Tl, null),
            ),
          );
        };
      var Kl = Object.defineProperty,
        zl = Object.defineProperties,
        Vl = Object.getOwnPropertyDescriptors,
        $l = Object.getOwnPropertySymbols,
        Hl = Object.prototype.hasOwnProperty,
        Gl = Object.prototype.propertyIsEnumerable,
        ql = (e, t, a) =>
          t in e
            ? Kl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Yl = (e, t) => {
          for (var a in t || (t = {})) Hl.call(t, a) && ql(e, a, t[a]);
          if ($l) for (var a of $l(t)) Gl.call(t, a) && ql(e, a, t[a]);
          return e;
        },
        Jl = (e, t) => zl(e, Vl(t));
      const Xl = (0, m.i)((e, t) => {
          const a = t
              ? (0, b.iv)({
                  position: "relative",
                  "&:focus": { outline: "none" },
                })
              : (0, b.iv)({
                  position: "relative",
                  "&:focus": { outline: "none" },
                  "&::before": Jl(
                    Yl(Yl({}, (0, nt.ip)("background-color")), Ot.d),
                    {
                      position: "absolute",
                      right: -16,
                      top: -16,
                      left: -16,
                      bottom: -16,
                      width: "calc(100% + 32px)",
                      borderRadius: U.VY,
                      pointerEvents: "none",
                    },
                  ),
                  "&:hover::before, &:focus::before": {
                    backgroundColor: e.backgroundOverlay,
                  },
                }),
            r = (0, b.iv)({ width: "100%", height: "100%" });
          return {
            component: r,
            root: (0, b.iv)({
              position: "relative",
              width: "100%",
              height: "100%",
            }),
            darken: (0, b.iv)({ opacity: 0.5 }),
            button: a,
            inner: (0, b.iv)({
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              minWidth: 0,
              wordWrap: "break-word",
              height: "100%",
              width: "100%",
              flexGrow: 1,
              borderRadius: U.E0,
            }),
            image: (0, b.iv)({
              position: "relative",
              borderRadius: U.E0,
              backgroundColor: e.backgroundOverlay,
              "&::after": Jl(
                Yl(Yl(Yl({}, (0, nt.ip)("opacity")), il.a), Ot.d),
                {
                  backgroundColor: fe.ix,
                  opacity: 0,
                  borderRadius: U.E0,
                  ".hasHover:hover &, .active &": { opacity: t ? 0.16 : 0.15 },
                },
              ),
            }),
            body: (0, b.iv)({
              height: 76,
              paddingTop: 10,
              [p.Uc[p.Uo.lg]]: { height: 91 },
            }),
            title: (0, b.iv)({
              width: "calc(100% - 32px)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }),
            settings: (0, b.iv)(
              Jl(Yl({ position: "absolute" }, (0, ne.F2)(0)), {
                bottom: 45,
                [p.Uc[p.Uo.lg]]: { bottom: 60 },
              }),
            ),
            settingsButton: (0, b.iv)(
              Yl(
                { width: 32, height: 22 },
                t && {
                  borderRadius: U.E0,
                  "&:hover": { background: Ct.K8.tertiary.hover },
                },
              ),
            ),
            settingsMenu: (0, b.iv)({
              width: "max-content",
              minWidth: 280,
              [p.Uc.lg]: { minWidth: 315 },
              [p.Uc.xl]: { minWidth: 340 },
            }),
            favoriteDiv: (0, b.iv)(
              Jl(Yl({ top: 10 }, (0, ne.F2)(10)), {
                [`.${r}:hover &`]: { opacity: 1 },
              }),
            ),
          };
        }),
        Ql = ({
          achievements: e,
          active: t,
          badges: a,
          contextMenu: r,
          darken: l,
          disabled: o,
          forwardedRef: i,
          hasHover: c,
          hasUpdate: s,
          image: d,
          onClick: u,
          onContextMenu: m,
          onKeyDown: p,
          renderFavorite: g,
          renderSettingsMenu: v,
          subtitle: E,
          title: y,
        }) => {
          const f = (0, qe.useSelector)(It.e),
            h = Xl(f),
            O = (0, b.cx)(h.inner, h.button),
            C = (0, b.cx)(h.root, { active: t, hasHover: c, [h.darken]: l }),
            I = n().createElement(
              n().Fragment,
              null,
              n().createElement("div", { className: h.image }, d),
              n().createElement(
                "div",
                { className: h.body },
                n().createElement(
                  "div",
                  { className: h.title },
                  n().createElement(ae.ZP, { textLevel: F.N.PRIMARY }, y),
                ),
                e,
                E,
              ),
            );
          return n().createElement(
            "div",
            {
              className: h.component,
              ref: i,
              onContextMenu: m,
              onKeyDown: p,
              "data-testid": "card",
            },
            n().createElement(
              "div",
              { className: C },
              u
                ? n().createElement(
                    ft.Z,
                    {
                      className: O,
                      onClick: u,
                      disabled: o,
                      "data-testid": "card-btn",
                    },
                    I,
                  )
                : n().createElement("div", { className: h.inner }, I),
              n().createElement(
                n().Fragment,
                null,
                n().createElement(Ml, {
                  landscape: !1,
                  favorite: g && g(h.favoriteDiv),
                  badges: a,
                  update: s
                    ? n().createElement(Wl, { isGridView: !0 })
                    : void 0,
                }),
                v &&
                  n().createElement(
                    "div",
                    { className: h.settings },
                    v({ button: h.settingsButton, menu: h.settingsMenu }),
                  ),
                r,
              ),
            ),
          );
        },
        eo = (0, b.iv)({
          userSelect: "none",
          width: 32,
          height: 35,
          display: "inline-block",
          fill: "currentColor",
          flexShrink: 0,
          fontSize: "inherit",
        }),
        to = () =>
          n().createElement(
            "svg",
            {
              className: eo,
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
      var ao = a(29550),
        ro = Object.defineProperty,
        no = Object.defineProperties,
        lo = Object.getOwnPropertyDescriptors,
        oo = Object.getOwnPropertySymbols,
        io = Object.prototype.hasOwnProperty,
        co = Object.prototype.propertyIsEnumerable,
        so = (e, t, a) =>
          t in e
            ? ro(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const uo = (0, m.i)(() => ({
          root: (0, b.iv)({
            "> button": { width: "100%", height: "100%", padding: 0 },
          }),
        })),
        mo = r.forwardRef((e, t) => {
          var a = e,
            { onClick: n } = a,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                io.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && oo)
                for (var r of oo(e))
                  t.indexOf(r) < 0 && co.call(e, r) && (a[r] = e[r]);
              return a;
            })(a, ["onClick"]);
          const o = uo(),
            i = (0, oe.useLocalization)();
          return r.createElement(
            "span",
            { className: o.root, "data-testid": "toggle" },
            r.createElement(
              tt.h,
              ((c = ((e, t) => {
                for (var a in t || (t = {})) io.call(t, a) && so(e, a, t[a]);
                if (oo) for (var a of oo(t)) co.call(t, a) && so(e, a, t[a]);
                return e;
              })({ onClick: n }, l)),
              no(c, lo({ forwardRef: t }))),
              r.createElement(ao.n, {
                titleAccess: i(
                  "diesel.common.smart_button.ariaLabel.toggleSettings",
                ),
              }),
            ),
          );
          var c;
        }),
        po = (0, Al.L)(
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
      var bo = a(83206);
      const go = (0, m.i)((e) => ({
          separator: (0, b.iv)({
            width: "100%",
            height: 10,
            backgroundColor: e.backgroundOverlay,
            ".egs-menu-no-border &": {
              marginTop: 5,
              height: 5,
              borderTop: `1px solid ${e.backgroundOverlay}`,
              backgroundColor: "transparent",
            },
          }),
        })),
        vo = () => {
          const e = go();
          return r.createElement("div", {
            className: e.separator,
            role: "none",
          });
        };
      var Eo = a(238),
        yo = a(69459),
        fo = a(56917),
        ho = Object.defineProperty,
        Oo = Object.defineProperties,
        Co = Object.getOwnPropertyDescriptors,
        Io = Object.getOwnPropertySymbols,
        wo = Object.prototype.hasOwnProperty,
        xo = Object.prototype.propertyIsEnumerable,
        So = (e, t, a) =>
          t in e
            ? ho(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Po = (e, t) => {
          for (var a in t || (t = {})) wo.call(t, a) && So(e, a, t[a]);
          if (Io) for (var a of Io(t)) xo.call(t, a) && So(e, a, t[a]);
          return e;
        },
        ko = (e, t) => Oo(e, Co(t));
      const No = (0, m.i)(() => ({
          root: (0, b.iv)({ position: "relative" }),
          submenu: (0, b.iv)({ position: "absolute" }),
          icon: (0, b.iv)(
            (0, ne.N2)(),
            Po({ display: "flex" }, (0, ne.oI)(10)),
          ),
        })),
        Lo = (e) => {
          var t = e,
            { subMenu: a, selected: l, disabled: o } = t,
            i = ((e, t) => {
              var a = {};
              for (var r in e)
                wo.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Io)
                for (var r of Io(e))
                  t.indexOf(r) < 0 && xo.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["subMenu", "selected", "disabled"]);
          const c = No(),
            s = (0, tl.Su)(),
            d = (0, r.useRef)(),
            [u, m] = n().useState(!1),
            [p, b] = n().useState(null),
            [g, v] = n().useState(null),
            {
              styles: E,
              attributes: y,
              update: f,
            } = (0, fo.D)(p, g, {
              placement: s ? "left-start" : "right-start",
              modifiers: [
                { name: "offset", options: { offset: [-10, -5] } },
                { name: "computeStyles", options: { gpuAcceleration: !0 } },
                { name: "eventListeners", enabled: u },
              ],
            });
          (0, yo.P)(() => {
            u && f && f();
          }, [u]);
          const h = () => {
              clearTimeout(d.current), m(!0);
            },
            O = () => {
              clearTimeout(d.current),
                (d.current = setTimeout(() => {
                  m(!1);
                }, 200));
            };
          return n().createElement(
            "div",
            {
              ref: b,
              className: c.root,
              onMouseLeave: o ? void 0 : O,
              onKeyDown: o
                ? void 0
                : (e) => {
                    e.key === gn.et.Tab &&
                      p &&
                      requestAnimationFrame(() => {
                        p.querySelector("button:focus") || O();
                      });
                  },
              role: "none",
              "data-testid": "MenuItemWithSubMenu",
            },
            n().createElement(
              sn.c,
              ko(Po({ selected: l || u }, i), {
                "aria-expanded": u,
                onMouseOver: o ? void 0 : h,
                onKeyDown: o
                  ? void 0
                  : (e) => {
                      e.key === gn.et.Enter && m(!u),
                        e.key === gn.et.Escape && m(!1);
                    },
                horizontal: !0,
                disabled: o,
              }),
              n().createElement(
                "span",
                { className: c.icon },
                n().createElement(Eo.o, null),
              ),
            ),
            u &&
              n().createElement(
                "div",
                ko(
                  Po(
                    {
                      ref: v,
                      className: c.submenu,
                      onMouseOver: h,
                      onFocus: h,
                      style: E.popper,
                    },
                    y.popper,
                  ),
                  { "data-testid": "MenuItemWithSubMenu-submenu" },
                ),
                a,
              ),
          );
        };
      var jo = Object.defineProperty,
        Mo = Object.defineProperties,
        Ao = Object.getOwnPropertyDescriptors,
        To = Object.getOwnPropertySymbols,
        _o = Object.prototype.hasOwnProperty,
        Do = Object.prototype.propertyIsEnumerable,
        Ro = (e, t, a) =>
          t in e
            ? jo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Bo = (e, t) => {
          for (var a in t || (t = {})) _o.call(t, a) && Ro(e, a, t[a]);
          if (To) for (var a of To(t)) Do.call(t, a) && Ro(e, a, t[a]);
          return e;
        },
        Zo = (e, t) => Mo(e, Ao(t));
      const Fo = (0, m.i)((e, t) => ({
          root: (0, b.iv)({
            position: "relative",
            height: 310,
            overflow: "hidden",
            pointerEvents: "none",
            width: 380,
            [p.Uc.xl]: { width: 420 },
          }),
          libraryCard: (0, b.iv)(
            Zo(
              Bo(
                { position: "absolute", opacity: 0.6 },
                (0, ne.NS)((0, ne.t$)(16), (0, ne.yd)("left")),
              ),
              {
                top: -110,
                width: 160,
                [p.Uc.xl]: { top: -160, width: 190 },
                "&::before": Bo(
                  Zo(Bo({}, Ot.d), {
                    position: "absolute",
                    right: -16,
                    top: -16,
                    left: -16,
                    bottom: -16,
                    borderRadius: fe.VY,
                  }),
                  !t && { backgroundColor: e.backgroundOverlay },
                ),
              },
            ),
          ),
          achievements: (0, b.iv)({ display: "flex", alignItems: "center" }),
          trophyIcon: (0, b.iv)((0, ne.wz)(4), {
            width: 15,
            height: 15,
            fontSize: 14,
            color: e.textSecondary,
          }),
          toggleBtn: (0, b.iv)({ bottom: 20 }),
          menu: (0, b.iv)(
            Zo(Bo({ position: "absolute", top: 140 }, (0, ne.t$)(134)), {
              boxShadow: `0 0 20px 0 ${fe.lu}`,
              width: 240,
              [p.Uc.xl]: { width: 280 },
            }),
          ),
          gradiant: (0, b.iv)({
            position: "absolute",
            width: "100%",
            height: 100,
            background: (0, ll.TR)({
              direction: { vertical: "top" },
              colors: [(0, nl.re)(e.background, 0).rgb(), e.background],
            }),
          }),
          cursor: (0, b.iv)(
            Bo({ position: "absolute", bottom: 0 }, (0, ne.t$)(220)),
          ),
        })),
        Uo = ({ title: e, imageSrc: t }) => {
          const a = (0, qe.useSelector)(It.e),
            r = n().useRef(null),
            l = Fo(a);
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
                n().createElement(Ql, {
                  image: n().createElement(yl, {
                    image: n().createElement(Qn.w, { alt: e, src: t }),
                  }),
                  title: n().createElement("span", null, e),
                  achievements: n().createElement(
                    "div",
                    { className: l.achievements },
                    n().createElement(
                      "div",
                      { className: l.trophyIcon },
                      n().createElement(po, null),
                    ),
                    n().createElement(
                      B.Z,
                      { textLevel: F.N.SECONDARY },
                      "33/100",
                    ),
                  ),
                  subtitle: n().createElement(fl.L6, null),
                  renderSettingsMenu: ({ button: e }) =>
                    n().createElement(
                      "div",
                      { className: (0, b.cx)(l.toggleBtn, e) },
                      n().createElement(mo, null),
                    ),
                }),
              ),
              n().createElement(
                "div",
                { className: l.menu },
                n().createElement(
                  On.v,
                  { dense: !0, noBorder: !0 },
                  n().createElement(bo.s, {
                    title: n().createElement(te.Z, {
                      code: "diesel.library.settings.go_to_store_page",
                    }),
                  }),
                  n().createElement(vo, null),
                  n().createElement(bo.s, {
                    title: n().createElement(te.Z, {
                      code: "diesel.library.settings.add_to_favorites",
                    }),
                  }),
                  n().createElement(Lo, {
                    title: n().createElement(te.Z, {
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
                n().createElement(to, null),
              ),
            )
          );
        };
      var Wo = a(95705),
        Ko = a(84244);
      const zo = ({
          libraryItemTitle: e,
          libraryItemImageSrc: t = "",
          onButtonClick: a,
        }) => {
          const r = (0, Ko.ql)(),
            l = e || r("diesel.main.navigation.epic_games") || "";
          return n().createElement(rl, {
            image: n().createElement(Uo, { title: l, imageSrc: t }),
            title: n().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_custom.title",
            }),
            buttonText: n().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_custom.button",
            }),
            onButtonClick: a,
          });
        },
        Vo = ({ onActionClick: e }) => {
          const { records: t } = ua(),
            a = n().useMemo(() => {
              var e;
              const a = Math.floor(Math.random() * t.length - 1);
              return null == (e = t[a]) ? void 0 : e.catalogItem;
            }, [t]),
            r = n().useMemo(() => (0, Wo.X3)(a), [a]);
          return n().createElement(zo, {
            libraryItemTitle: null == a ? void 0 : a.title,
            libraryItemImageSrc: r,
            onButtonClick: e,
          });
        },
        $o = (0, Al.L)(
          r.createElement("path", {
            d: "M20.49 5.397C19.482 4.466 18.162 4 16.842 4c-1.32 0-2.64.466-3.647 1.397L12 6.503l-1.196-1.106C9.797 4.466 8.477 4 7.158 4c-1.32 0-2.64.466-3.647 1.397-2.013 1.861-2.015 4.878-.005 6.741L11.984 20l.016-.015.017.015 8.477-7.862c2.01-1.864 2.008-4.88-.005-6.74z",
          }),
          "Heart",
        ),
        Ho = ({ onActionClick: e }) =>
          n().createElement(rl, {
            image: n().createElement(
              "div",
              { style: { fontSize: 36 } },
              n().createElement($o, null),
            ),
            title: n().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_favorites.title",
            }),
            subtitle: n().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_favorites.text",
            }),
            buttonText: n().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_favorites.button",
            }),
            onButtonClick: e,
          });
      var Go = a(95771),
        qo = a(35658),
        Yo = a(37559);
      const Jo = ({
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
            qo.Z,
            {
              "data-testid": `library-filter-section-${a}`,
              renderTitle: ({ isCollapsed: t, toggleCollapsed: a }) => (
                o && !t && a(),
                n().createElement(Yo.Z, {
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
      var Xo = a(77960);
      const Qo = ({
          title: e,
          storeTags: t,
          onFilterClick: a,
          activeFilters: r,
          type: l,
        }) =>
          n().createElement(Jo, {
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
                n().createElement(Xo.Z, {
                  onClick: () => a({ type: l, name: e.name, id: e.id }),
                  text:
                    l === ma.GENRE || l === ma.FEATURE
                      ? `${e.name} ${i}`
                      : n().createElement(Ko.v0, {
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
        ei = ({ onFilterClick: e, storeTags: t, activeFilters: a }) =>
          n().createElement(Qo, {
            title: n().createElement(Ko.v0, {
              code: "diesel.store.browse.categories",
            }),
            storeTags: t || [],
            onFilterClick: e,
            activeFilters: a,
            type: ma.CATEGORY,
          });
      var ti = a(41402),
        ai = a(22538),
        ri = a(8280),
        ni = a(32396),
        li = a(29985);
      const oi = () => {
        const e = (0, ai.useLocation)(),
          t = (0, qe.useDispatch)(),
          a = (0, r.useMemo)(
            () => new URLSearchParams(e.search || ""),
            [e.search],
          ),
          n = (0, r.useCallback)(() => {
            t(
              (0, ri.VF)((0, ni.generateRoutePath)(li.s.LibraryPath), {
                search: "",
              }),
            );
          }, [t]);
        return (0, r.useMemo)(() => {
          var e, t, r, l, o, i, c;
          const s = null != (e = a.get("action")) ? e : void 0,
            d = null != (t = a.get("sort")) ? t : void 0,
            u = null != (r = a.get("appName")) ? r : "",
            m = null != (l = a.get("sandboxId")) ? l : "",
            p = null != (o = a.get("offerId")) ? o : "",
            b = null != (i = a.get("catalogItemId")) ? i : "",
            g =
              m && b && u
                ? { namespace: m, catalogItemId: b, appName: u }
                : void 0,
            v = p && m ? { offerId: p, sandboxId: m } : void 0,
            E = b && m ? { catalogItemId: b, sandboxId: m } : void 0,
            y = null != (c = a.get("collectionId")) ? c : void 0;
          return {
            action: s,
            item: g,
            sort: d,
            resetQueryParams: n,
            offerItem: v,
            catalogItem: E,
            collectionId: y,
          };
        }, [a, n]);
      };
      var ii = a(58532);
      const ci = (0, m.i)((e) => ({
          icon: (0, b.iv)((0, ne.rv)(10), {
            svg: {
              fontSize: 10,
              path: { stroke: e.textPrimary, strokeWidth: 2 },
            },
          }),
        })),
        si = ({ onFilterClick: e }) => {
          const t = ci(),
            { resetQueryParams: a } = oi(),
            { value: r } = Xa({
              keyFn: () => Qa.Cd,
              localStorageEnabled: !0,
              initialValue: "",
            });
          return n().createElement(qo.Z, {
            "data-testid": "library-filter-section-custom-results",
            renderTitle: () =>
              n().createElement(Xo.Z, {
                onClick: () => {
                  e({ type: ma.CATALOG_ITEM_ID, name: ma.CATALOG_ITEM_ID }),
                    a();
                },
                text: n().createElement(ii.Z, {
                  lines: 2,
                  text: null != r ? r : "",
                }),
                checked: !0,
                icon: n().createElement(
                  "div",
                  { className: t.icon },
                  n().createElement(ti.T, null),
                ),
              }),
          });
        },
        di = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(Qo, {
            title: n().createElement(Ko.v0, {
              code: "diesel.store.browse.features",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: ma.FEATURE,
          }),
        ui = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(Qo, {
            title: n().createElement(Ko.v0, {
              code: "diesel.store.browse.genre",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: ma.GENRE,
          });
      var mi = Object.defineProperty,
        pi = Object.defineProperties,
        bi = Object.getOwnPropertyDescriptors,
        gi = Object.getOwnPropertySymbols,
        vi = Object.prototype.hasOwnProperty,
        Ei = Object.prototype.propertyIsEnumerable,
        yi = (e, t, a) =>
          t in e
            ? mi(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const fi = ({
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
                for (var a in t || (t = {})) vi.call(t, a) && yi(e, a, t[a]);
                if (gi) for (var a of gi(t)) Ei.call(t, a) && yi(e, a, t[a]);
                return e;
              })({}, n)),
              pi(o, bi({ message: r, count: 1 })));
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
        hi = (e, t) =>
          e.map((e) => {
            const a = t.find((t) => t.id === e.id);
            return a || ((e.count = 0), e);
          }),
        Oi = [
          {
            id: `${ga.GAMES}-filter`,
            name: ga.GAMES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${ga.ENGINES}-filter`,
            name: ga.ENGINES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${ga.SOFTWARE}-filter`,
            name: ga.SOFTWARE,
            groupName: "category",
            count: 0,
          },
          {
            id: `${ga.DIGITAL_EXTRAS}-filter`,
            name: ga.DIGITAL_EXTRAS,
            groupName: "category",
            count: 0,
          },
        ],
        Ci = (e, t) => {
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
              Object.values(ga).forEach((e) => {
                if (l.includes(e)) {
                  const r = t(`egstore.library.filter_side_panel.${e}`) || "";
                  fi({
                    tagsForDisplay: a,
                    currentTags: Oi,
                    name: e,
                    message: r,
                  });
                }
              });
            }),
            a
          );
        },
        Ii = () => {
          const { selectedCollectionId: e } = Cr(),
            { records: t, recordsAll: a } = ua(e),
            n = (0, Ko.ql)();
          return (0, r.useMemo)(() => {
            const r = Ci(a, n);
            return e !== Et.U.ALL
              ? ((e, t, a) => {
                  const r = Ci(e, t);
                  return hi(a, r);
                })(t, n, r)
              : r;
          }, [a, e, t]);
        };
      var wi = Object.defineProperty,
        xi = Object.defineProperties,
        Si = Object.getOwnPropertyDescriptors,
        Pi = Object.getOwnPropertySymbols,
        ki = Object.prototype.hasOwnProperty,
        Ni = Object.prototype.propertyIsEnumerable,
        Li = (e, t, a) =>
          t in e
            ? wi(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ji = (e, t) => {
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
                      ki.call(t, a) && Li(e, a, t[a]);
                    if (Pi)
                      for (var a of Pi(t)) Ni.call(t, a) && Li(e, a, t[a]);
                    return e;
                  })({}, t)),
                  (l = { count: a[t.id] }),
                  xi(n, Si(l))),
                ),
              e
            );
          }, []);
        },
        Mi = ({
          records: e,
          collectionRecords: t,
          storeTags: a = [],
          selectedCollectionId: r,
        }) => {
          const n = ji(e, a);
          return r !== Et.U.ALL
            ? ((e, t, a) => {
                const r = ji(t, a);
                return hi(e, r);
              })(n, t, a)
            : n;
        };
      var Ai = a(74272),
        Ti = a(24438);
      const _i = a.n(Ti)()`
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
      var Di = a(4663),
        Ri = a(73525),
        Bi = (e, t, a) =>
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
      const Zi = (0, Na.uB)("storeTagApi"),
        Fi = (e, t) => `${e}:${t}`,
        Ui = (e, t) =>
          Bi(
            void 0,
            [e, t],
            function* (
              e,
              { groupName: t, isOnline: a, locale: r, sortBy: n, sortDir: l },
            ) {
              const { cached: o, isExpired: i } = yield ((e) =>
                Bi(void 0, [e], function* ({ groupName: e, locale: t }) {
                  try {
                    const a = yield La.CV.get(Fi(e, t)),
                      r = (0, Na.bs)((null == a ? void 0 : a._expiresAt) || 0);
                    return {
                      cached: null == a ? void 0 : a.data,
                      isExpired: r,
                    };
                  } catch (e) {
                    return (
                      Zi.warn("getCachedStoreTags", "failed IDB get", {
                        error: e.message,
                      }),
                      { cached: void 0, isExpired: !0 }
                    );
                  }
                }))({ groupName: t, locale: r });
              if (o && o.length && !i)
                return (
                  Zi.log("getCachedOrRemote", "using indexedDB", {
                    records: o,
                  }),
                  o
                );
              if (!a)
                return (
                  Zi.log(
                    "getCachedOrRemoteStoreTags",
                    "user is not online, using indexedDB",
                    { records: o },
                  ),
                  o || []
                );
              const c = yield ((e, t) =>
                Bi(
                  void 0,
                  [e, t],
                  function* (
                    e,
                    { groupName: t, locale: a, sortBy: r, sortDir: n },
                  ) {
                    var l, o;
                    try {
                      const i = yield (0, Ri.J)({
                        httpLink: e,
                        query: _i,
                        variables: {
                          groupName: t,
                          locale: a,
                          sortBy: r,
                          sortDir: n,
                        },
                      });
                      return (
                        Zi.log("getRemoteStoreTags", "success", i),
                        null == (o = null == (l = i.Catalog) ? void 0 : l.tags)
                          ? void 0
                          : o.elements
                      );
                    } catch (e) {
                      return void Zi.warn("getRemoteStoreTags", "failed", {
                        error: e.message,
                      });
                    }
                  },
                ))(e, { groupName: t, locale: r, sortBy: n, sortDir: l });
              return (
                Zi.log("getCachedOrRemoteStoreTags", "using GQL item", {
                  groupName: t,
                  locale: r,
                }),
                c && c.length
                  ? (c &&
                      (Zi.log(
                        "getCachedOrRemoteStoreTags",
                        "updating local cache",
                        { groupName: t },
                      ),
                      (({ groupName: e, tags: t, locale: a }) => {
                        if (!t.length || !a) return;
                        const r = {
                          _expiresAt: (0, Na.g6)(Ai.ed),
                          groupName: e,
                          id: Fi(e, a),
                          data: t,
                        };
                        La.CV.put(r).catch((e) => {
                          Zi.warn("setCachedStoreTags", "failed IDB put", {
                            error: e.message,
                          });
                        });
                      })({ groupName: t, tags: c, locale: r })),
                    c)
                  : (Zi.log(
                      "getCachedOrRemoteStoreTags",
                      "remote tags failed to load, using indexedDB",
                      { records: o },
                    ),
                    o || [])
              );
            },
          );
      var Wi = a(73323);
      const Ki = ({ groupName: e, sortBy: t, sortDir: a }) => {
          const r = (0, oe.useLocalizationLocale)(),
            n = (0, i.c)(),
            l = (0, Wi.xj)(),
            o = (0, Di.O)({
              query: _i,
              variables: { groupName: e, locale: r, sortBy: t, sortDir: a },
            }),
            { data: c } = (0, Pa.aM)(o, () =>
              Ui(l, {
                groupName: e,
                isOnline: n,
                locale: r,
                sortBy: t,
                sortDir: a,
              }),
            );
          return c;
        },
        zi = [
          {
            id: `${ba.WINDOWS}-filter`,
            name: ba.WINDOWS,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${ba.WIN32}-filter`,
            name: ba.WIN32,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${ba.MAC}-filter`,
            name: ba.MAC,
            groupName: "platform",
            count: 0,
          },
        ],
        Vi = (e, t) => {
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
              Object.values(ba).forEach((e) => {
                if (i.includes(e)) {
                  const r = t(`egstore.library.filter_side_panel.${e}`) || "";
                  fi({
                    tagsForDisplay: a,
                    currentTags: zi,
                    name: e,
                    message: r,
                  });
                }
              });
            }),
            a
          );
        },
        $i = () => {
          const { selectedCollectionId: e } = Cr(),
            { records: t, recordsAll: a } = ua(e),
            n = (0, oe.useLocalization)();
          return (0, r.useMemo)(() => {
            const r = Vi(a, n);
            return e !== Et.U.ALL
              ? ((e, t, a) => {
                  const r = Vi(e, t);
                  return hi(a, r);
                })(t, n, r)
              : r;
          }, [a, e, t]);
        },
        Hi = ({ onFilterClick: e, activeFilters: t, numberOfItems: a = 0 }) => {
          const r = !!t && t.includes(ma.INSTALLED),
            l = 0 === a;
          let o;
          return (
            (o = l && r ? "(0)" : l ? "" : `(${a})`),
            n().createElement(qo.Z, {
              "data-testid": "library-filter-section-installed",
              renderTitle: () =>
                n().createElement(Xo.Z, {
                  onClick: () => e({ type: ma.INSTALLED, name: ma.INSTALLED }),
                  text: n().createElement(Ko.v0, {
                    code: "egstore.library.filter_side_panel.installed",
                    args: [o],
                  }),
                  checked: r,
                  disabled: l,
                }),
            })
          );
        };
      var Gi = a(10658);
      const qi = n().forwardRef(({ onChange: e, onClear: t, value: a }, r) => {
          const l = (0, oe.useLocalization)();
          return n().createElement(Gi.Z, {
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
        Yi = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(Qo, {
            title: n().createElement(Ko.v0, {
              code: "diesel.products.about.meta.platform",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: ma.PLATFORM,
          });
      var Ji = a(73497);
      const Xi = (0, m.i)((e) => ({
          titleDiv: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 7,
            "& > button": { paddingTop: 0, paddingBottom: 0 },
          }),
          keywordFilter: (0, b.iv)({
            padding: "12px 0",
            margin: "18px 12px 6px 12px",
            borderBottom: `1px solid ${e.backgroundOverlay}`,
          }),
        })),
        Qi = ({
          sectionTitle: e,
          filterByKeyword: t,
          customResults: a,
          installed: r,
          genres: l,
          features: o,
          categories: i,
          platforms: c,
        }) => {
          const s = Xi();
          return n().createElement(
            Ji.Z,
            null,
            n().createElement("div", { className: s.titleDiv }, e),
            n().createElement("div", { className: s.keywordFilter }, t),
            a,
            r,
            l,
            o,
            i,
            c,
          );
        },
        ec = { padding: "10px 0", marginLeft: 12 },
        tc = { paddingBottom: 10, marginLeft: 12 },
        ac = ({ animation: e }) =>
          n().createElement(
            "div",
            { style: ec },
            n().createElement(Ee.Od, { animation: e, height: 14, width: 100 }),
          ),
        rc = ({ animation: e }) =>
          n().createElement(Qi, {
            sectionTitle: n().createElement(
              "div",
              { style: tc },
              n().createElement(Ee.Od, { animation: e, height: 14, width: 50 }),
            ),
            filterByKeyword: n().createElement(Ee.Od, {
              animation: e,
              height: 40,
              width: 160,
            }),
            genres: n().createElement(
              qo.Z,
              {
                renderTitle: () =>
                  n().createElement(
                    "div",
                    { style: ec },
                    n().createElement(Ee.Od, {
                      animation: e,
                      height: 14,
                      width: 50,
                    }),
                  ),
              },
              n().createElement(ac, { animation: e }),
              n().createElement(ac, { animation: e }),
              n().createElement(ac, { animation: e }),
            ),
          });
      var nc = a(36751),
        lc = a(257);
      const oc = () => {
          const {
              selectedFilters: e,
              resetFilters: t,
              keywordValue: a,
              setKeywordValue: l,
              numberActiveFilters: o,
              onFilterClick: i,
            } = br(),
            { selectedCollectionId: c } = Cr(),
            { records: s } = ua(c),
            d = (0, qe.useSelector)(er.xp),
            { resetQueryParams: u } = oi(),
            m = Ii(),
            p = $i(),
            b = (() => {
              const { selectedCollectionId: e } = Cr(),
                t = Ki({ groupName: ma.GENRE, sortBy: Ai.sH, sortDir: Ai.NV }),
                { records: a, recordsAll: n } = ua(e);
              return (0, r.useMemo)(
                () =>
                  Mi({
                    records: n,
                    collectionRecords: a,
                    storeTags: t,
                    selectedCollectionId: e,
                  }),
                [n, a, t, e],
              );
            })(),
            g = (() => {
              const { selectedCollectionId: e } = Cr(),
                t = Ki({
                  groupName: ma.FEATURE,
                  sortBy: Ai.sH,
                  sortDir: Ai.NV,
                }),
                a = Ki({
                  groupName: "epicfeature",
                  sortBy: Ai.sH,
                  sortDir: Ai.NV,
                }),
                n = (0, r.useMemo)(() => {
                  if (t && a) return [...a, ...t];
                }, [t, a]),
                { records: l, recordsAll: o } = ua(e);
              return (0, r.useMemo)(
                () =>
                  Mi({
                    records: o,
                    collectionRecords: l,
                    storeTags: n,
                    selectedCollectionId: e,
                  }),
                [o, l, n, e],
              );
            })(),
            v = n().useMemo(
              () => ya({ items: s, installedRecords: d.latestValue }).length,
              [s, d.latestValue],
            ),
            [E, y] = (0, r.useState)(a),
            [f] = (0, Go.Z)(E, 100, { trailing: !0 });
          n().useEffect(() => {
            l(null != f ? f : "");
          }, [f]),
            n().useEffect(() => {
              a !== f && y(a);
            }, [a]);
          return n().createElement(Qi, {
            sectionTitle: n().createElement(
              n().Fragment,
              null,
              n().createElement(lc.Z, {
                text: n().createElement(te.Z, {
                  code: "diesel.store.browse.filters",
                  args: o > 0 ? [`(${o})`] : [""],
                }),
              }),
              o > 0 &&
                n().createElement(nc.Z, {
                  onClick: () => {
                    t(), u();
                  },
                  text: n().createElement(te.Z, {
                    code: "diesel.store.browse.reset",
                  }),
                }),
            ),
            filterByKeyword: n().createElement(qi, {
              onChange: (e) => y(e.target.value),
              onClear: () => {
                y(""), l("");
              },
              value: E,
            }),
            installed: n().createElement(Hi, {
              onFilterClick: i,
              activeFilters: e[ma.INSTALLED],
              numberOfItems: v,
            }),
            customResults: e[ma.CATALOG_ITEM_ID].length
              ? n().createElement(si, { onFilterClick: i })
              : null,
            genres: b.length
              ? n().createElement(ui, {
                  onFilterClick: i,
                  storeTags: b,
                  activeFilters: e[ma.GENRE],
                })
              : null,
            features: g.length
              ? n().createElement(di, {
                  onFilterClick: i,
                  storeTags: g,
                  activeFilters: e[ma.FEATURE],
                })
              : null,
            categories: m.length
              ? n().createElement(ei, {
                  onFilterClick: i,
                  storeTags: m,
                  activeFilters: e[ma.CATEGORY],
                })
              : null,
            platforms: p.length
              ? n().createElement(Yi, {
                  onFilterClick: i,
                  storeTags: p,
                  activeFilters: e[ma.PLATFORM],
                })
              : null,
          });
        },
        ic = () =>
          n().createElement(
            Ye.n4,
            { fallback: n().createElement(rc, null) },
            n().createElement(oc, null),
          ),
        cc = (0, Al.L)(
          r.createElement("path", {
            d: "M5 4a1 1 0 00-1 1v5.2a1 1 0 001 1h5.2a1 1 0 001-1V5a1 1 0 00-1-1H5zm8.8 0a1 1 0 00-1 1v5.2a1 1 0 001 1H19a1 1 0 001-1V5a1 1 0 00-1-1h-5.2zM4 13.8a1 1 0 011-1h5.2a1 1 0 011 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.2zm9.8-1a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-5.2a1 1 0 00-1-1h-5.2z",
          }),
          "Library",
        ),
        sc = (0, Al.L)(
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22 2H8v2h14V2zm0 18H8v2h14v-2zM8 11h14v2H8v-2zm-2.5 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
          }),
          "List",
        );
      var dc = a(91575),
        uc = Object.defineProperty,
        mc = Object.defineProperties,
        pc = Object.getOwnPropertyDescriptors,
        bc = Object.getOwnPropertySymbols,
        gc = Object.prototype.hasOwnProperty,
        vc = Object.prototype.propertyIsEnumerable,
        Ec = (e, t, a) =>
          t in e
            ? uc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        yc = (e, t) => {
          for (var a in t || (t = {})) gc.call(t, a) && Ec(e, a, t[a]);
          if (bc) for (var a of bc(t)) vc.call(t, a) && Ec(e, a, t[a]);
          return e;
        };
      const fc = (0, m.i)((e, { isGridSelected: t, isEnabledEDSPhase1: a }) => {
          return {
            gridSelected: (0, b.iv)(
              ((r = yc(
                {
                  cursor: t ? "default" : "pointer",
                  backgroundColor: t
                    ? a
                      ? Ct.K8.tertiary.select
                      : e.backgroundOverlay
                    : void 0,
                  padding: 3,
                  height: 30,
                },
                (0, ne.wz)(3),
              )),
              (n = {
                "&::after, &::hover": t
                  ? { backgroundColor: "transparent", opacity: 0 }
                  : {},
              }),
              mc(r, pc(n))),
            ),
            listSelected: (0, b.iv)({
              cursor: t ? "pointer" : "default",
              backgroundColor: t
                ? void 0
                : a
                  ? Ct.K8.tertiary.select
                  : e.backgroundOverlay,
              padding: 6,
              height: 30,
              "&::after, &::hover": t
                ? {}
                : { backgroundColor: "transparent", opacity: 0 },
            }),
            listIcon: (0, b.iv)(
              yc(
                {},
                a && { svg: { fill: t ? e.textPrimary : Ct.TR.selectDefault } },
              ),
            ),
            gridIcon: (0, b.iv)(
              yc(
                { fontSize: 24 },
                a && { svg: { fill: t ? Ct.TR.selectDefault : e.textPrimary } },
              ),
            ),
          };
          var r, n;
        }),
        hc = ({ value: e, onChange: t }) => {
          const a = (0, qe.useSelector)(It.e),
            n = e === Qa.ms.Grid,
            l = fc({ isGridSelected: n, isEnabledEDSPhase1: a }),
            o = r.useCallback(() => t(Qa.ms.Grid), [t]),
            i = r.useCallback(() => t(Qa.ms.List), [t]);
          return r.createElement(
            d.x,
            null,
            r.createElement(
              dc.mJ,
              {
                event: {
                  eventAction: "library-hubs-click-grid-layout",
                  eventLabel: "library-hubs-grid-layout",
                  eventValue: e,
                },
              },
              r.createElement(
                tt.h,
                {
                  "aria-label": "grid",
                  disabled: e === Qa.ms.Grid,
                  buttonWidth: R.WL.AUTO,
                  buttonHeight: R.Ey.DENSED,
                  onClick: o,
                  variantClassName: l.gridSelected,
                },
                r.createElement(
                  "span",
                  { className: l.gridIcon },
                  r.createElement(cc, null),
                ),
              ),
            ),
            r.createElement(
              dc.mJ,
              {
                event: {
                  eventAction: "library-hubs-click-list-layout",
                  eventLabel: "library-hubs-list-layout",
                  eventValue: e,
                },
              },
              r.createElement(
                tt.h,
                {
                  "aria-label": "list",
                  disabled: e === Qa.ms.List,
                  buttonWidth: R.WL.AUTO,
                  buttonHeight: R.Ey.DENSED,
                  onClick: i,
                  variantClassName: l.listSelected,
                },
                r.createElement(
                  "span",
                  { className: l.listIcon },
                  r.createElement(sc, null),
                ),
              ),
            ),
          );
        },
        Oc = (0, m.i)(() => ({
          sortMenu: (0, b.iv)((0, ne.wz)(10), { minWidth: 210 }),
          rightPadding: (0, b.iv)((0, ne.wz)(3)),
        })),
        Cc = ({ layoutToggle: e, sortMenu: t }) => {
          const a = Oc();
          return r.createElement(
            d.x,
            { alignItems: u.Ks.Center, justify: u.jf.SpaceBetween },
            r.createElement(
              "div",
              { className: a.sortMenu, "data-testid": "sort-menu" },
              t,
            ),
            r.createElement(
              d.x,
              { justify: u.jf.End, "data-testid": "layout-toggle" },
              e,
            ),
          );
        };
      var Ic = a(71737),
        wc = a(56480),
        xc = Object.defineProperty,
        Sc = Object.defineProperties,
        Pc = Object.getOwnPropertyDescriptors,
        kc = Object.getOwnPropertySymbols,
        Nc = Object.prototype.hasOwnProperty,
        Lc = Object.prototype.propertyIsEnumerable,
        jc = (e, t, a) =>
          t in e
            ? xc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Mc = (e) => {
        const t = (0, je.P)(
            wc.$n,
            wc.A2,
            ((r = ((e, t) => {
              for (var a in t || (t = {})) Nc.call(t, a) && jc(e, a, t[a]);
              if (kc) for (var a of kc(t)) Lc.call(t, a) && jc(e, a, t[a]);
              return e;
            })({}, e)),
            (n = { enabled: !1 !== (null == e ? void 0 : e.enabled) }),
            Sc(r, Pc(n))),
          ),
          { data: a } = t;
        var r, n;
        return {
          totalPlaytime: a,
          query: ((e, t) => {
            var a = {};
            for (var r in e) Nc.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && kc)
              for (var r of kc(e))
                t.indexOf(r) < 0 && Lc.call(e, r) && (a[r] = e[r]);
            return a;
          })(t, ["data"]),
        };
      };
      var Ac = a(10968),
        Tc = Object.defineProperty,
        _c = Object.defineProperties,
        Dc = Object.getOwnPropertyDescriptors,
        Rc = Object.getOwnPropertySymbols,
        Bc = Object.prototype.hasOwnProperty,
        Zc = Object.prototype.propertyIsEnumerable,
        Fc = (e, t, a) =>
          t in e
            ? Tc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Uc = [
          Qa.ER.Recent_Played,
          Qa.ER.Recent_Purchased,
          Qa.ER.Alphabetical_ASC,
          Qa.ER.Alphabetical_DESC,
          Qa.ER.Time_Played,
        ],
        Wc = (e) => {
          const { value: t, setValue: a } = Xa(
            ((n = ((e, t) => {
              for (var a in t || (t = {})) Bc.call(t, a) && Fc(e, a, t[a]);
              if (Rc) for (var a of Rc(t)) Zc.call(t, a) && Fc(e, a, t[a]);
              return e;
            })({}, e)),
            (l = { initialValue: Qa.ER.Alphabetical_ASC, allowedValues: Uc }),
            _c(n, Dc(l))),
          );
          var n, l;
          const { recordsMap: o } = (0, Ic.B$)(),
            { totalPlaytime: i } = Mc(),
            c = (0, r.useCallback)(
              (e) => {
                switch (t) {
                  case Qa.ER.Alphabetical_ASC:
                    return (0, Ac.He)(e, Qa.Sr.ASC);
                  case Qa.ER.Alphabetical_DESC:
                    return (0, Ac.He)(e, Qa.Sr.DESC);
                  case Qa.ER.Recent_Played:
                    return (0, Ac.vG)(o, e);
                  case Qa.ER.Recent_Purchased:
                    return (0, Ac.K_)(e);
                  case Qa.ER.Time_Played:
                    return (0, Ac.IR)(e, i);
                  default:
                    return e;
                }
              },
              [o, t, i],
            );
          return { sortType: t, setSortType: a, applySortType: c };
        };
      var Kc = a(78512);
      const zc = ({ sortType: e = Qa.ER.Alphabetical_ASC, onChange: t }) => {
          const a = (0, Ko.ql)(),
            n = r.useMemo(
              () =>
                ((e) => [
                  {
                    label:
                      e("egstore.library.sort.recently_played") ||
                      Qa.ER.Recent_Played,
                    value: Qa.ER.Recent_Played,
                  },
                  {
                    label:
                      e("egstore.library.sort.recently_purchased") ||
                      Qa.ER.Recent_Purchased,
                    value: Qa.ER.Recent_Purchased,
                  },
                  {
                    label:
                      e("egstore.library.sort.alphabetical.asc") ||
                      Qa.ER.Alphabetical_ASC,
                    value: Qa.ER.Alphabetical_ASC,
                  },
                  {
                    label:
                      e("egstore.library.sort.alphabetical.desc") ||
                      Qa.ER.Alphabetical_DESC,
                    value: Qa.ER.Alphabetical_DESC,
                  },
                  {
                    label:
                      e("egstore.library.sort.time_played") ||
                      Qa.ER.Time_Played,
                    value: Qa.ER.Time_Played,
                  },
                ])(a),
              [a],
            );
          return r.createElement(Kc.Z, {
            id: "sort-dropdown",
            label: r.createElement(Ko.v0, {
              code: "egstore.library.sort.title",
            }),
            options: n,
            selectedValue: e,
            onChange: t,
          });
        },
        Vc = ({
          layoutType: e = Qa.ms.Grid,
          onLayoutChange: t,
          onSortChange: a,
          sortType: n = Qa.ER.Alphabetical_ASC,
        }) =>
          r.createElement(Cc, {
            sortMenu: r.createElement(zc, { sortType: n, onChange: a }),
            layoutToggle: r.createElement(hc, { value: e, onChange: t }),
          });
      var $c = Object.defineProperty,
        Hc = Object.defineProperties,
        Gc = Object.getOwnPropertyDescriptors,
        qc = Object.getOwnPropertySymbols,
        Yc = Object.prototype.hasOwnProperty,
        Jc = Object.prototype.propertyIsEnumerable,
        Xc = (e, t, a) =>
          t in e
            ? $c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Qc = () => {
        const e = (0, qe.useSelector)(tr.vR),
          t = {
            keyFn: () => `${Qa.i3}_${e || va.v.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          {
            value: a,
            setValue: r,
            query: n,
          } = Xa(
            ((l = ((e, t) => {
              for (var a in t || (t = {})) Yc.call(t, a) && Xc(e, a, t[a]);
              if (qc) for (var a of qc(t)) Jc.call(t, a) && Xc(e, a, t[a]);
              return e;
            })({}, t)),
            (o = {
              initialValue: Qa.ms.Grid,
              allowedValues: [Qa.ms.Grid, Qa.ms.List],
            }),
            Hc(l, Gc(o))),
          );
        var l, o;
        return { layoutType: a, setLayoutType: r, isLoaded: n.isSuccess };
      };
      var es = Object.defineProperty,
        ts = Object.defineProperties,
        as = Object.getOwnPropertyDescriptors,
        rs = Object.getOwnPropertySymbols,
        ns = Object.prototype.hasOwnProperty,
        ls = Object.prototype.propertyIsEnumerable,
        os = (e, t, a) =>
          t in e
            ? es(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        is = (e, t) => {
          for (var a in t || (t = {})) ns.call(t, a) && os(e, a, t[a]);
          if (rs) for (var a of rs(t)) ls.call(t, a) && os(e, a, t[a]);
          return e;
        },
        cs = (e, t) => ts(e, as(t));
      const ss = (hl.bg - 24) / 2,
        ds = (hl.nx - 24) / 2,
        us = (0, m.i)((e, t) => {
          const a = (0, b.iv)({ width: "100%" });
          return {
            component: a,
            root: (0, b.iv)(
              cs(is({}, (0, nt.ip)("background-color")), {
                position: "relative",
                backgroundColor: t ? Ct.RU.elevated.high.default : e.level1,
                height: hl.Zg,
                border: 0,
                borderRadius: t ? fe.VY : U.E0,
                display: "flex",
                alignItems: "center",
                "&.hasHover:hover, &.active": {
                  backgroundColor: t ? Ct.RU.elevated.high.hover : e.level2,
                  color: t ? void 0 : e.accentText,
                },
              }),
            ),
            darken: (0, b.iv)({ opacity: 0.5 }),
            image: (0, b.iv)({
              position: "relative",
              borderRadius: U.E0,
              margin: 10,
              height: hl.bg,
              width: hl.nx,
              backgroundColor: e.backgroundOverlay,
              "&::after": cs(
                is(is(is({}, (0, nt.ip)("opacity")), il.a), Ot.d),
                {
                  borderRadius: U.E0,
                  backgroundColor: fe.ix,
                  opacity: 0,
                  ".hasHover:hover &, .active &": { opacity: 0.15 },
                },
              ),
            }),
            title: (0, b.iv)((0, ne.WL)(5), {
              "button:hover &, button:focus &": { textDecoration: "underline" },
            }),
            settings: (0, b.iv)((0, ne.NS)((0, ne.WL)(10), (0, ne.rv)(35)), {
              position: "relative",
              height: 34,
              display: "flex",
              alignItems: "center",
            }),
            settingsButton: (0, b.iv)({ width: 32, height: 24 }),
            settingsMenu: (0, b.iv)({
              width: "max-content",
              minWidth: 280,
              [p.Uc.lg]: { minWidth: 315 },
              [p.Uc.xl]: { minWidth: 340 },
            }),
            settingsSpacer: (0, b.iv)({ width: 77, height: "100%" }),
            favoriteDiv: (0, b.iv)(
              cs(is({ top: ss }, (0, ne.F2)(ds)), {
                [`.${a}:hover &`]: { opacity: 1 },
              }),
            ),
            infoText: (0, b.iv)({
              fontSize: 12,
              color: t ? e.textSecondary : e.textPrimary,
            }),
          };
        }),
        ms = ({
          achievements: e,
          active: t,
          badges: a,
          contextMenu: n,
          darken: l,
          disabled: o,
          forwardedRef: i,
          hasHover: c,
          hasUpdate: s,
          image: m,
          installSize: p,
          onClick: g,
          onContextMenu: v,
          onKeyDown: E,
          playtime: y,
          renderFavorite: f,
          renderSettingsMenu: h,
          subtitle: O,
          title: C,
        }) => {
          const I = (0, qe.useSelector)(It.e),
            w = us(I),
            x = (0, b.cx)(w.root, { active: t, hasHover: c, [w.darken]: l }),
            S = r.useMemo(
              () =>
                g && c
                  ? r.createElement(
                      ft.Z,
                      { onClick: g, "data-testid": "card-btn", disabled: o },
                      r.createElement(
                        ae.ZP,
                        { textLevel: F.N.PRIMARY },
                        r.createElement("div", { className: w.title }, C),
                      ),
                      O,
                    )
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(
                        ae.ZP,
                        { textLevel: F.N.PRIMARY },
                        r.createElement("div", { className: w.title }, C),
                      ),
                      O,
                    ),
              [C, c, g],
            ),
            P = r.createElement(
              "span",
              { style: I ? { color: Ct.cM.secondary } : void 0 },
              "-",
            );
          return r.createElement(
            "div",
            {
              className: w.component,
              ref: i,
              onContextMenu: v,
              onKeyDown: E,
              "data-testid": "card",
            },
            r.createElement(
              "div",
              { className: x },
              r.createElement("div", { className: w.image }, m),
              r.createElement(
                N,
                { justify: u.jf.SpaceBetween },
                r.createElement(L, { xs: 4, alignSelf: u.Nn.Center }, S),
                r.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  r.createElement(d.x, { centerContent: !0 }, e),
                ),
                r.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  r.createElement(
                    d.x,
                    { centerContent: !0 },
                    null != a ? a : P,
                  ),
                ),
                r.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  r.createElement(
                    d.x,
                    { centerContent: !0 },
                    r.createElement("div", { className: w.infoText }, y),
                  ),
                ),
                r.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  r.createElement(
                    d.x,
                    { centerContent: !0 },
                    r.createElement("div", { className: w.infoText }, p),
                  ),
                ),
              ),
              r.createElement(Ml, {
                landscape: !0,
                favorite: f && f(w.favoriteDiv),
                update: s ? r.createElement(Wl, null) : void 0,
              }),
              h
                ? r.createElement(
                    "div",
                    { className: w.settings },
                    h({ button: w.settingsButton, menu: w.settingsMenu }),
                  )
                : r.createElement("div", { className: w.settingsSpacer }),
              n,
            ),
          );
        };
      var ps = Object.defineProperty,
        bs = Object.defineProperties,
        gs = Object.getOwnPropertyDescriptors,
        vs = Object.getOwnPropertySymbols,
        Es = Object.prototype.hasOwnProperty,
        ys = Object.prototype.propertyIsEnumerable,
        fs = (e, t, a) =>
          t in e
            ? ps(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        hs = (e, t) => {
          for (var a in t || (t = {})) Es.call(t, a) && fs(e, a, t[a]);
          if (vs) for (var a of vs(t)) ys.call(t, a) && fs(e, a, t[a]);
          return e;
        },
        Os = (e, t) => bs(e, gs(t));
      const Cs = {
          imageWrapper: (0, b.iv)(
            Os(hs({}, (0, fe.fF)(fe.oM.x3x4)), { borderRadius: fe.E0 }),
          ),
          fakeImage: (0, b.iv)(Os(hs({}, il.a), { height: "auto" })),
        },
        Is =
          ({ Image: e, Layout: t }) =>
          ({ animation: a }) => {
            const n = {
              title: r.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                height: 20,
                width: "100%",
                animation: a,
              }),
              subtitle: r.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                height: 15,
                width: "50%",
                animation: a,
              }),
              image: r.createElement(e, { animation: a }),
            };
            return r.createElement(t, hs({}, n));
          },
        ws = Is({
          Image: ({ animation: e }) =>
            r.createElement(
              "div",
              { className: Cs.imageWrapper },
              r.createElement(Ee.Od, {
                width: "100%",
                className: Cs.fakeImage,
                animation: e,
              }),
            ),
          Layout: Ql,
        }),
        xs = Is({
          Image: ({ animation: e }) =>
            r.createElement(Ee.Od, {
              width: hl.nx,
              height: hl.bg,
              animation: e,
            }),
          Layout: ms,
        }),
        Ss = ({ animation: e }) =>
          r.createElement(Cc, {
            sortMenu: r.createElement(Ee.Od, {
              width: 200,
              height: 30,
              animation: e,
            }),
            layoutToggle: r.createElement(
              d.x,
              null,
              r.createElement(Ee.Od, {
                width: 30,
                height: 30,
                style: { margin: "0 3px" },
                animation: e,
              }),
              r.createElement(Ee.Od, { width: 30, height: 30, animation: e }),
            ),
          });
      var Ps = a(43442),
        ks = a(8132);
      const Ns = (0, m.i)((e, t) => ({
          root: (0, b.iv)({
            position: "relative",
            width: "100%",
            height: "100%",
            border: 0,
            paddingBottom: t > 0 ? 95 : 0,
            [p.Uc.lg]: { paddingBottom: t > 0 ? 105 : 0 },
            "& :hover": { backgroundColor: e.backgroundOverlay },
          }),
          body: (0, b.iv)({
            height: "100%",
            paddingBottom: t > 0 ? 0 : "calc(4 / 3 * 41%)",
            borderRadius: fe.E0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: e.level1,
          }),
          title: (0, b.iv)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: t > 0 ? 0 : "50%",
            textAlign: "center",
            padding: "0 10px",
            pointerEvents: "none",
          }),
          icon: (0, b.iv)({
            fontSize: 22.5,
            paddingBottom: 13.75,
            [p.Uc.lg]: { paddingBottom: 18.75, fontSize: 22.5 },
            [p.Uc.xl]: { fontSize: 24 },
          }),
        })),
        Ls = ({ onClick: e, numItems: t, code: a }) => {
          const r = Ns(t);
          return n().createElement(
            ft.Z,
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
                  n().createElement(ks.l, null),
                ),
                n().createElement(
                  ae.ZP,
                  { textLevel: F.N.PRIMARY },
                  n().createElement(te.Z, { code: a }),
                ),
              ),
            ),
          );
        };
      var js = Object.defineProperty,
        Ms = Object.defineProperties,
        As = Object.getOwnPropertyDescriptors,
        Ts = Object.getOwnPropertySymbols,
        _s = Object.prototype.hasOwnProperty,
        Ds = Object.prototype.propertyIsEnumerable,
        Rs = (e, t, a) =>
          t in e
            ? js(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Bs = (e, t) => {
          for (var a in t || (t = {})) _s.call(t, a) && Rs(e, a, t[a]);
          if (Ts) for (var a of Ts(t)) Ds.call(t, a) && Rs(e, a, t[a]);
          return e;
        };
      const Zs = (0, m.i)((e) => {
          return {
            root: (0, b.iv)({
              position: "relative",
              width: "100%",
              height: "100%",
              border: 0,
              "& :hover": { backgroundColor: e.backgroundOverlay },
            }),
            body: (0, b.iv)({
              height: 75,
              borderRadius: fe.E0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: e.level1,
              [p.Uc.lg]: { height: 80 },
            }),
            title: (0, b.iv)({
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              pointerEvents: "none",
            }),
            icon: (0, b.iv)(
              ((t = Bs({ fontSize: 11.25 }, (0, ne.wz)(12))),
              (a = {
                marginTop: 2,
                [p.Uc.lg]: Bs({ fontSize: 15, marginTop: 3 }, (0, ne.wz)(12.5)),
              }),
              Ms(t, As(a))),
            ),
          };
          var t, a;
        }),
        Fs = ({ onClick: e, code: t }) => {
          const a = Zs();
          return n().createElement(
            ft.Z,
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
                  n().createElement(ks.l, null),
                ),
                n().createElement(
                  ae.ZP,
                  { textLevel: F.N.PRIMARY },
                  n().createElement(te.Z, { code: t }),
                ),
              ),
            ),
          );
        },
        Us = ({ layout: e, numItems: t }) => {
          const a = (0, qe.useDispatch)(),
            r = (0, qe.useSelector)(tr.LF),
            l = (0, ai.useLocation)(),
            o = n().useCallback(
              () =>
                r === va.v.OFFLINE
                  ? a(Ps.ZP.requestSignIn(l.pathname))
                  : a((0, ri.VF)((0, ni.generateRoutePath)("/"))),
              [r],
            ),
            i = n().useMemo(
              () =>
                r === va.v.OFFLINE
                  ? "diesel.library.cards.shopOffline"
                  : "diesel.library.cards.shop",
              [r],
            );
          return e === Qa.ms.Grid
            ? n().createElement(Ls, { onClick: o, numItems: t, code: i })
            : n().createElement(Fs, { onClick: o, code: i });
        };
      var Ws = a(88325);
      const Ks = (0, m.i)((e) => ({
          root: (0, b.iv)({
            width: "100%",
            borderTop: `1px solid ${e.backgroundOverlay}`,
            padding: "10px 0",
            display: "flex",
          }),
          title: (0, b.iv)((0, ne.oI)(-65)),
          imageSpacer: (0, b.iv)({ width: 65 }),
          settingsSpacer: (0, b.iv)({ width: 77, height: "100%" }),
        })),
        zs = () => {
          const e = Ks();
          return r.createElement(
            "div",
            { className: e.root },
            r.createElement("div", { className: e.imageSpacer }),
            r.createElement(
              N,
              null,
              r.createElement(
                L,
                { xs: 4 },
                r.createElement(
                  d.x,
                  { className: e.title, fillParent: !0, justify: u.jf.Start },
                  r.createElement(Ws.x, {
                    code: "egstore.library.hub.product.list.search_placeholder",
                  }),
                ),
              ),
              r.createElement(
                L,
                { xs: 2 },
                r.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Ws.x, { code: "egstore.achievements" }),
                ),
              ),
              r.createElement(
                L,
                { xs: 2 },
                r.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Ws.x, { code: "diesel.products.addons" }),
                ),
              ),
              r.createElement(
                L,
                { xs: 2 },
                r.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Ws.x, {
                    code: "egstore.library.column.timePlayed",
                  }),
                ),
              ),
              r.createElement(
                L,
                { xs: 2 },
                r.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(Ws.x, {
                    code: "egstore.library.column.size",
                  }),
                ),
              ),
            ),
            r.createElement("div", { className: e.settingsSpacer }),
          );
        },
        Vs = (0, m.i)((e) => ({
          root: (0, b.iv)({
            display: "flex",
            flexDirection: "column",
            paddingBottom: 50,
          }),
          header: (0, b.iv)({
            position: "sticky",
            top: 100,
            minHeight: 40,
            margin: "0 -16px 16px -16px",
            padding: "0 16px",
            zIndex: Ll + 1,
            background: e.background,
          }),
          footer: (0, b.iv)({ marginTop: 20, [p.Uc.xl]: { marginTop: 30 } }),
          cssGrid: (0, b.iv)({
            display: "grid",
            gap: 32,
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            [p.Uc.xl]: {
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            },
            [p.Uc.xxl]: {
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            },
          }),
          cssList: (0, b.iv)({
            display: "grid",
            gap: 6,
            gridTemplateColumns: "repeat(auto-fill, 100%)",
          }),
        })),
        $s = ({
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
          const u = Vs();
          return r.createElement(
            "div",
            {
              className: u.root,
              "data-testid": "ProductListSectionLayout",
              "data-layout": l,
            },
            r.createElement(
              N,
              { spacing: 20 },
              r.createElement(
                L,
                { xs: d ? 9 : 12, xxl: d ? 10 : 12 },
                t &&
                  !s &&
                  r.createElement(
                    "div",
                    {
                      className: u.header,
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
                  l === Qa.ms.List &&
                    !s &&
                    !c &&
                    r.createElement(
                      "div",
                      { "data-testid": "product-list-section-column-header" },
                      r.createElement(zs, null),
                    ),
                  c,
                  s,
                  a &&
                    o &&
                    r.createElement(
                      "div",
                      { className: l === Qa.ms.Grid ? u.cssGrid : u.cssList },
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
                            r.createElement(Us, {
                              layout: l,
                              numItems: n || 0,
                            }),
                          )
                        : null,
                    ),
                  r.createElement("div", { className: u.footer }, e),
                ),
              ),
              d &&
                r.createElement(
                  L,
                  { xs: 3, xxl: 2 },
                  r.createElement("aside", null, d),
                ),
            ),
          );
        };
      var Hs = Object.defineProperty,
        Gs = Object.getOwnPropertySymbols,
        qs = Object.prototype.hasOwnProperty,
        Ys = Object.prototype.propertyIsEnumerable,
        Js = (e, t, a) =>
          t in e
            ? Hs(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Xs = (e, t) => {
          for (var a in t || (t = {})) qs.call(t, a) && Js(e, a, t[a]);
          if (Gs) for (var a of Gs(t)) Ys.call(t, a) && Js(e, a, t[a]);
          return e;
        };
      const Qs = {
          footer: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
          }),
          pagination: (0, b.iv)({
            [fe.Uc.lg]: Xs({}, (0, ne.wz)(31)),
            [fe.Uc.xl]: Xs({}, (0, ne.wz)(42)),
            [fe.Uc.maxWidth]: Xs({}, (0, ne.wz)(57)),
          }),
        },
        ed = ({ animation: e }) =>
          n().createElement(
            "div",
            { className: Qs.footer },
            n().createElement(Ee.Od, {
              variant: Ee.Jy.Rect,
              animation: e,
              width: 150,
              height: 30,
            }),
            n().createElement(
              "div",
              { className: Qs.pagination },
              n().createElement(Ee.Od, {
                variant: Ee.Jy.Rect,
                animation: e,
                width: 150,
                height: 30,
              }),
            ),
            n().createElement(Ee.Od, {
              variant: Ee.Jy.Rect,
              animation: e,
              width: 100,
              height: 30,
            }),
          );
      var td = a(81198);
      const ad = new Array(12)
          .fill(0)
          .map((e, t) =>
            (0, td.fS)({
              namespace: "skeleton",
              catalogItemId: `${t}`,
              appName: `app${t}`,
            }),
          ),
        rd = ({ layout: e, animation: t }) => {
          const a = (0, tl.dD)(),
            r = e === Qa.ms.Grid ? ws : xs;
          return n().createElement($s, {
            header: n().createElement(Ss, { animation: t }),
            footer: n().createElement(ed, { animation: t }),
            items: ad,
            layout: e,
            renderItem: () => n().createElement(r, { animation: t }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: a
              ? null
              : n().createElement(rc, { animation: t }),
          });
        };
      var nd = a(8825);
      const ld = () => {};
      var od = a(83161),
        id = a(78317),
        cd = a(83231),
        sd = a(6009),
        dd = a(20147),
        ud = a(22850),
        md = a(84498);
      const pd = (e) =>
        md.Z.trackEvent({
          eventCategory: dc.ro.EGS_USER_INTERACTION,
          interactionType: dc.B8.CLICK,
          eventAction: dc.DI.EGS_ACHIEVEMENTS_LIBRARY_CLICK,
          eventValue: e,
        });
      var bd = a(62245),
        gd = a(45145);
      var vd = a(4798);
      const Ed = (e, t) => {
        const { achievementsLinkTo: a } = (({ sandboxId: e }, t) => ({
          achievementsLinkTo: (0, gd.Z)({ sandboxId: e }, t),
        }))({ sandboxId: e }, t);
        return { achievementsLinkTo: a, gotoAchievements: (0, vd.X)(a) };
      };
      var yd = a(68356),
        fd = Object.defineProperty,
        hd = Object.defineProperties,
        Od = Object.getOwnPropertyDescriptors,
        Cd = Object.getOwnPropertySymbols,
        Id = Object.prototype.hasOwnProperty,
        wd = Object.prototype.propertyIsEnumerable,
        xd = (e, t, a) =>
          t in e
            ? fd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Sd = (e, t) => {
          for (var a in t || (t = {})) Id.call(t, a) && xd(e, a, t[a]);
          if (Cd) for (var a of Cd(t)) wd.call(t, a) && xd(e, a, t[a]);
          return e;
        };
      const Pd = (0, m.i)((e, t) => {
          return {
            button: (0, b.iv)({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "15px 10px",
            }),
            progress: (0, b.iv)(
              ((a = Sd(
                { width: 60, borderRadius: 25 },
                !t && { border: "5px solid transparent" },
              )),
              (r = {
                "button:hover &, button:focus &": Sd(
                  Sd(
                    {},
                    !t && {
                      borderColor: fe.yS,
                      "& > [role='progressbar']": { background: fe.e1 },
                    },
                  ),
                  t && {
                    "& > [role='progressbar'] > div": {
                      background: Ct.K8.primary.hover,
                    },
                  },
                ),
                [p.Uc.lg]: { width: 75 },
                [p.Uc.xxl]: { width: 100 },
              }),
              hd(a, Od(r))),
            ),
          };
          var a, r;
        }),
        kd = ({ percent: e, tooltipText: t }) => {
          const a = (0, qe.useSelector)(It.e),
            r = Pd(a),
            l = n().useRef(null),
            { namespace: o } = (0, bd.wK)(),
            i = (0, qe.useDispatch)(),
            { gotoAchievements: c, achievementsLinkTo: s } = Ed(o, {
              suspense: !1,
            }),
            d = n().useCallback(() => {
              i(pd(s)), c();
            }, [c, s, i]);
          return n().createElement(
            n().Fragment,
            null,
            n().createElement(
              ft.Z,
              { className: r.button, onClick: d, ref: l },
              n().createElement(
                "div",
                { className: r.progress },
                n().createElement(yd.E, {
                  percent: e,
                  variant: a ? void 0 : yd.M.GREYSCALE,
                }),
              ),
            ),
            n().createElement(rt.u, { anchorRef: l, delay: 500 }, t),
          );
        },
        Nd = (0, b.iv)({
          verticalAlign: "top",
          "& span": {
            textTransform: "none",
            [fe.Uc.lgOnly]: { fontSize: 12 },
            [fe.Uc.maxWidth]: { fontSize: 12, lineHeight: "15px" },
          },
        }),
        Ld = ({ children: e }) =>
          n().createElement(
            "span",
            { className: Nd, "data-testid": "AchievementStatusText" },
            n().createElement(B.Z, { textLevel: F.N.SECONDARY }, e),
          );
      var jd = a(72668),
        Md = a(84258),
        Ad = Object.defineProperty,
        Td = Object.getOwnPropertySymbols,
        _d = Object.prototype.hasOwnProperty,
        Dd = Object.prototype.propertyIsEnumerable,
        Rd = (e, t, a) =>
          t in e
            ? Ad(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Bd = (e, t) => {
          for (var a in t || (t = {})) _d.call(t, a) && Rd(e, a, t[a]);
          if (Td) for (var a of Td(t)) Dd.call(t, a) && Rd(e, a, t[a]);
          return e;
        };
      const Zd = (0, m.i)(() => ({
          status: (0, b.iv)({ display: "flex", alignItems: "center" }),
          icon: (0, b.iv)(Bd({}, (0, ne.wz)(4))),
        })),
        Fd = ({ totalValue: e, progressionValue: t, platinumEarned: a }) => {
          const n = Zd();
          return r.createElement(
            "div",
            { className: n.status, "data-testid": "AchievementsStatus" },
            a &&
              r.createElement(
                "div",
                { className: n.icon },
                r.createElement(jd.Z, {
                  icon: Md.kf.PLATINUM_TROPHY,
                  size: Md.J7.XXXSMALL,
                }),
              ),
            r.createElement(
              Ld,
              null,
              r.createElement(Ko.v0, {
                code: "egstore.achievements.achievements",
                args: [t, e],
              }),
            ),
          );
        };
      var Ud = a(55132);
      const Wd = (e = "", t = "", a = "") => {
        const r = (0, Ud.K)(e, t, a);
        return Boolean(null == r ? void 0 : r.owned);
      };
      var Kd = Object.defineProperty,
        zd = Object.defineProperties,
        Vd = Object.getOwnPropertyDescriptors,
        $d = Object.getOwnPropertySymbols,
        Hd = Object.prototype.hasOwnProperty,
        Gd = Object.prototype.propertyIsEnumerable,
        qd = (e, t, a) =>
          t in e
            ? Kd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Yd = (e, t) => {
          for (var a in t || (t = {})) Hd.call(t, a) && qd(e, a, t[a]);
          if ($d) for (var a of $d(t)) Gd.call(t, a) && qd(e, a, t[a]);
          return e;
        };
      const Jd = ({ isGridView: e }) => {
          const t = (0, qe.useSelector)(cd.gB),
            { namespace: a, catalogItemId: n, appName: l } = (0, bd.wK)(),
            o = (0, Ud.K)(a, n, l),
            c = Wd(a, n, l),
            s = (0, qe.useSelector)(id.vR) || "",
            d = (0, i.c)(),
            u =
              c &&
              (null == o ? void 0 : o.catalogItem) &&
              !(0, Ht.kV)(o.catalogItem.categories) &&
              !(0, Ht.Bv)(o.catalogItem.categories) &&
              !(0, Ht.ZT)(o.catalogItem.categories),
            { data: m } = (0, dd.y)(
              { epicAccountId: s, sandboxId: a },
              { enabled: d && c },
            ),
            { productAchievements: p } = (0, sd.R)(
              { sandboxId: a },
              { enabled: Boolean(d && a) && c },
            ),
            b = m
              ? ((g = Yd({}, m)), zd(g, Vd({ totalXP: 0 })))
              : {
                  achievementSets: [],
                  totalXP: 0,
                  totalUnlocked: 0,
                  playerAwards: [],
                };
          var g;
          const v =
              null != p
                ? p
                : {
                    achievementSets: [],
                    totalProductXP: 0,
                    totalAchievements: 0,
                  },
            {
              platinum: E,
              totalAchievements: y,
              totalUnlocked: f,
            } = (0, ud.XA)(v, b, t),
            h = r.useMemo(() => (y > 0 ? f / y : 0), [f, y]);
          return u && y > 0
            ? e
              ? r.createElement(Fd, {
                  totalValue: y,
                  progressionValue: f,
                  platinumEarned: E,
                })
              : r.createElement(kd, { percent: h, tooltipText: `${f}/${y}` })
            : null;
        },
        Xd = (e) =>
          r.createElement(
            Ye.n4,
            { fallback: null },
            r.createElement(Jd, Yd({}, e)),
          );
      var Qd = a(73142),
        eu = a(43077),
        tu = a(92964);
      const au = () => {
          const e = (0, qe.useDispatch)();
          return (0, r.useCallback)(
            (t, a) => {
              e((0, Me.w0)({ collection: t, item: a }));
            },
            [e],
          );
        },
        ru = ({ disabled: e, onClick: t }) =>
          n().createElement(sn.c, {
            horizontal: !0,
            title: n().createElement(te.Z, {
              code: "diesel.library.settings.add_to_favorites",
            }),
            onClick: t,
            disabled: e,
          }),
        nu = () => {
          const e = (0, bd.wK)(),
            { namespace: t, catalogItemId: a, appName: r } = e,
            { setActiveMenu: l } = (0, cn.U)(),
            o = (0, i.c)({ suspense: !1 }),
            c = Zn(),
            s = (0, Ud.K)(t, a, r),
            d = au(),
            u = n().useCallback(() => {
              c && s && d(c, s), l(void 0);
            }, [d, c, s, l]);
          return n().createElement(ru, { onClick: u, disabled: !o });
        },
        lu = (e) => {
          const t = Object.values(e);
          return !!t.length && t.every(Boolean);
        },
        ou = (e, t) => {
          const { collections: a = [] } = Fe(t),
            n = (0, qe.useSelector)(Me.$4),
            l = (0, yt.o)(),
            o = (0, r.useMemo)(
              () =>
                a.reduce((t, a) => {
                  var r;
                  const l =
                    null == (r = n[a.collectionId]) ? void 0 : r.latestValue;
                  return (
                    (t[a.collectionId] =
                      !(!l || !e) &&
                      l.some(
                        (
                          (e) => (t) =>
                            e.namespace === t.sandbox &&
                            e.catalogItemId === t.catalogId &&
                            e.appName === t.artifactId
                        )(e),
                      )),
                    t
                  );
                }, {}),
              [e, a, n],
            ),
            i = (0, r.useMemo)(() => lu(o), [o]),
            c = (0, r.useMemo)(() => lu((0, v.Z)([l], o)), [l, o]);
          return {
            foundInCollectionMap: o,
            isInAllCollections: i,
            isInAllCollectionsIgnoreFavorites: c,
          };
        },
        iu = (e, t, a) => {
          const { foundInCollectionMap: n } = ou(t, a);
          return (0, r.useMemo)(() => Boolean(e && n[e]), [n, e]);
        },
        cu = (0, Al.L)(
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.707 7.707 9 18.414l-4.707-4.707 1.414-1.414L9 15.586l9.293-9.293 1.414 1.414Z",
          }),
          "Check",
        );
      var su = Object.defineProperty,
        du = Object.defineProperties,
        uu = Object.getOwnPropertyDescriptors,
        mu = Object.getOwnPropertySymbols,
        pu = Object.prototype.hasOwnProperty,
        bu = Object.prototype.propertyIsEnumerable,
        gu = (e, t, a) =>
          t in e
            ? su(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const vu = (0, m.i)((e) => ({
          icon: (0, b.iv)({ color: e.textSecondary, fontSize: 24 }),
        })),
        Eu = (e) => {
          var t,
            a = e,
            { collectionName: r } = a,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                pu.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && mu)
                for (var r of mu(e))
                  t.indexOf(r) < 0 && bu.call(e, r) && (a[r] = e[r]);
              return a;
            })(a, ["collectionName"]);
          return n().createElement(
            sn.c,
            ((t = ((e, t) => {
              for (var a in t || (t = {})) pu.call(t, a) && gu(e, a, t[a]);
              if (mu) for (var a of mu(t)) bu.call(t, a) && gu(e, a, t[a]);
              return e;
            })({}, l)),
            du(
              t,
              uu({ horizontal: !0, title: n().createElement("span", null, r) }),
            )),
          );
        },
        yu = ({ collectionId: e }) => {
          const t = vu(),
            a = (0, bd.wK)(),
            { namespace: r, catalogItemId: l, appName: o } = a,
            { setActiveMenu: c } = (0, cn.U)(),
            s = (0, i.c)({ suspense: !1 }),
            d = Ge(e),
            u = (0, Ud.K)(r, l, o),
            m = au(),
            p = iu(e, a),
            b = n().useCallback(() => {
              d && u && m(d, u), c(void 0);
            }, [m, d, u, c]);
          return n().createElement(Eu, {
            collectionName: (null == d ? void 0 : d.name) || "",
            onClick: () => b(),
            disabled: !s || p,
            icon: p
              ? n().createElement(
                  "span",
                  { className: t.icon },
                  n().createElement(cu, null),
                )
              : void 0,
          });
        };
      var fu = Object.defineProperty,
        hu = Object.getOwnPropertySymbols,
        Ou = Object.prototype.hasOwnProperty,
        Cu = Object.prototype.propertyIsEnumerable,
        Iu = (e, t, a) =>
          t in e
            ? fu(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const wu = (e) =>
          n().createElement(
            sn.c,
            ((e, t) => {
              for (var a in t || (t = {})) Ou.call(t, a) && Iu(e, a, t[a]);
              if (hu) for (var a of hu(t)) Cu.call(t, a) && Iu(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: n().createElement(te.Z, {
                  code: "diesel.library.settings.create_collection",
                }),
              },
              e,
            ),
          ),
        xu = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            r = (0, i.c)({ suspense: !1 }),
            { setActiveMenu: l } = (0, cn.U)(),
            { openModal: o } = Je(),
            c = (0, qe.useDispatch)(),
            s = (0, Ud.K)(e, t, a),
            d = gt(),
            u = n().useCallback(() => {
              s && c((0, Me.bo)(s)), o(), l(void 0);
            }, [o, l, s]);
          return n().createElement(wu, { onClick: u, disabled: !r || !d });
        },
        Su = (0, m.i)(() => ({
          root: (0, b.iv)({ width: "max-content", minWidth: 280 }),
        })),
        Pu = () => {
          const e = (0, bd.wK)(),
            t = Su(),
            a = Fn(),
            l = (0, r.useMemo)(() => (null == a ? void 0 : a.length) > 0, [a]),
            { isInAllCollectionsIgnoreFavorites: o } = ou(e),
            i = l && !o;
          return n().createElement(
            "div",
            { className: t.root },
            n().createElement(
              On.v,
              { dense: !0, noBorder: !0 },
              l &&
                a.map(({ collectionId: e }) =>
                  n().createElement(yu, { key: e, collectionId: e }),
                ),
              i && n().createElement(vo, null),
              n().createElement(xu, null),
            ),
          );
        },
        ku = ({ subMenu: e, disabled: t }) =>
          n().createElement(Lo, {
            horizontal: !0,
            title: n().createElement(te.Z, {
              code: "diesel.library.settings.add_to_collection",
            }),
            subMenu: e,
            disabled: t,
          }),
        Nu = () => {
          const e = (0, bd.wK)(),
            t = (0, i.c)({ suspense: !1 }),
            a = gt(),
            { isInAllCollectionsIgnoreFavorites: r } = ou(e),
            l = !t || (r && !a);
          return n().createElement(ku, {
            subMenu: n().createElement(Pu, null),
            disabled: l,
          });
        };
      var Lu = a(74905),
        ju = a(12117);
      const Mu = ({ disabled: e, isUninstalling: t, onClick: a }) =>
          r.createElement(sn.c, {
            disabled: e,
            onClick: a,
            title: t
              ? r.createElement(te.Z, {
                  code: "diesel.library.settings.cancel_uninstall",
                })
              : r.createElement(te.Z, {
                  code: "diesel.library.settings.cancel_install",
                }),
          }),
        Au = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            { installState: l } = (0, eu.e)(e, t, a),
            o = (0, Lu.m)(),
            i = (0, ju.u)(e, t, a),
            c = r.useMemo(() => (0, tu.Pb)(l), [l]),
            s = (0, tu.QE)(l),
            d = r.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), n(void 0);
            }, [o, e, t, a, n]);
          return c
            ? r.createElement(Mu, {
                disabled: !i,
                onClick: d,
                isUninstalling: s,
              })
            : null;
        };
      var Tu = a(62098);
      const _u = (0, Tu.u)("cancelWaitingRoom"),
        Du = ({ onClick: e }) =>
          r.createElement(sn.c, {
            onClick: e,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.cancel_waiting_room",
            }),
          }),
        Ru = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            { installState: l } = (0, eu.e)(e, t, a),
            o = _u(),
            i = r.useMemo(() => (0, tu.aV)(l) && (0, tu.yK)(l), [l]),
            c = r.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), n(void 0);
            }, [o, e, t, a, n]);
          return i ? r.createElement(Du, { onClick: c }) : null;
        };
      var Bu = a(96038);
      const Zu = ({ onClick: e, disabled: t }) =>
          r.createElement(sn.c, {
            onClick: e,
            disabled: t,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.explore_addons",
            }),
          }),
        Fu = () => {
          const { namespace: e } = (0, bd.wK)(),
            { setActiveMenu: t } = (0, cn.U)(),
            { gotoAllAddons: a, allAddonsLinkTo: n } = (0, Bu.R)(e, {
              suspense: !1,
            }),
            l = r.useCallback(() => {
              t(void 0), a();
            }, [t, a]);
          return r.createElement(Zu, { onClick: l, disabled: !n });
        };
      var Uu = a(70055),
        Wu = a(47179);
      var Ku = a(50919);
      const zu = ({ onClick: e, disabled: t }) =>
          r.createElement(sn.c, {
            onClick: e,
            disabled: t,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.explore_mods",
            }),
          }),
        Vu = () => {
          const { namespace: e } = (0, bd.wK)(),
            { setActiveMenu: t } = (0, cn.U)(),
            { gotoAllMods: a, allModsLinkTo: n } = (0, Ku.M)(e, {
              suspense: !1,
            }),
            l = r.useCallback(() => {
              t(void 0), a();
            }, [t, a]);
          return r.createElement(zu, { onClick: l, disabled: !n });
        };
      var $u = a(9765),
        Hu = a(8474);
      const Gu = (e, t, a, n, l) => {
        const { isModsEnabled: o = !1 } = (0, Hu.Z)(
            { productId: n, store: "EGS" },
            l,
          ),
          i = (0, $u.c)(e, t, a);
        return (0, r.useMemo)(
          () =>
            ((e, t) => !(!e || !(0, Ht.CR)(null == t ? void 0 : t.categories)))(
              o,
              i,
            ),
          [i, o],
        );
      };
      var qu = a(45382),
        Yu = a(10247),
        Ju = a(67126),
        Xu = a(51025),
        Qu = a(43221),
        em = a(18497),
        tm = a(58727),
        am = a(51794),
        rm = a(15839),
        nm = a(99282);
      const lm = /^extraLaunchOption_.*_Name$/,
        om = (e, t) => {
          const a = (e && e.key) || "",
            r = (t && t.key) || "";
          return a.localeCompare(r);
        },
        im = (e, t) =>
          e
            .reduce((e, a) => {
              const { customAttributes: r } = a.catalogItem || {};
              return (
                r &&
                  r.forEach((n) => {
                    const { key: l, value: o } = n;
                    if (lm.test(l) && o) {
                      const [n] = l.split(
                        am.eL.EXTRA_LAUNCH_OPTION_NAME_SUFFIX,
                      );
                      ((e) => {
                        const { customAttributes: t, key: a, platform: r } = e,
                          n = `${a}${am.eL.EXTRA_LAUNCH_OPTION_PLATFORM_RESTRICTION_SUFFIX}`,
                          l = `${a}${am.eL.EXTRA_LAUNCH_OPTION_ARGS_SUFFIX}`,
                          o = (0, rm.P)(n, t),
                          i = o
                            ? (0, Yu.Z)(
                                (0, Kt.Z)(Ju.Z, Xu.Z),
                                (0, Qu.Z)(",", o),
                              )
                            : [],
                          c = !!(0, rm.P)(l, t),
                          s = !o || (0, em.Z)((0, Xu.Z)(r), i);
                        return c && s;
                      })({ customAttributes: r, key: n, platform: t }) &&
                        e.push({
                          id: `${a.relationshipId}:${n}`,
                          key: n,
                          name: o,
                          params: (0, tm.Z)(
                            ["namespace", "catalogItemId", "appName"],
                            a,
                          ),
                        });
                    }
                  }),
                e
              );
            }, [])
            .sort(om);
      var cm = a(8543),
        sm = a(50801);
      const dm = (e, t, a) => {
        const n = (0, $u.c)(e, t, a);
        return (0, r.useMemo)(
          () => (0, sm.K)(null == n ? void 0 : n.customAttributes),
          [null == n ? void 0 : n.customAttributes],
        );
      };
      var um = a(30332),
        mm = a(61318),
        pm = a(99512),
        bm = a(97748),
        gm = Object.defineProperty,
        vm = Object.defineProperties,
        Em = Object.getOwnPropertyDescriptors,
        ym = Object.getOwnPropertySymbols,
        fm = Object.prototype.hasOwnProperty,
        hm = Object.prototype.propertyIsEnumerable,
        Om = (e, t, a) =>
          t in e
            ? gm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Cm = (e = [], t) => {
        const a = (0, bm.D)(e.map((e) => (0, um.b)(mm.M.Ubisoft, e))),
          n = (0, pm.qb)(
            a,
            ((l = ((e, t) => {
              for (var a in t || (t = {})) fm.call(t, a) && Om(e, a, t[a]);
              if (ym) for (var a of ym(t)) hm.call(t, a) && Om(e, a, t[a]);
              return e;
            })({}, t)),
            (o = {
              enabled:
                Boolean(null == a ? void 0 : a.length) &&
                !1 !== (null == t ? void 0 : t.enabled),
            }),
            vm(l, Em(o))),
          );
        var l, o;
        return (0, r.useMemo)(
          () =>
            !!(null == a ? void 0 : a.length) &&
            (!(
              !(null == a ? void 0 : a.length) ||
              (null == n ? void 0 : n.length)
            ) ||
              !n.every((e) => (null == e ? void 0 : e.redeemedOnUplay))),
          [a, n],
        );
      };
      var Im = a(92277),
        wm = a(71573),
        xm = a(98197),
        Sm = a(82904);
      const Pm = (e = "", t = "", a = "") => {
        const { installState: n } = (0, eu.e)(e, t, a),
          l = Wd(e, t, a);
        return (0, r.useMemo)(
          () => ((e, t = !1) => !!e && (0, tu.Gd)(e) && !t)(n, l),
          [n, l],
        );
      };
      var km = a(79334),
        Nm = a(38765);
      const Lm = () => {
          const e = (0, qe.useSelector)(id.Bc);
          return (0, r.useMemo)(() => (0, Nm.J)(e), [e]);
        },
        jm = (e = "", t = "", a = "") => {
          const n = (0, Im.M)(e, t, a),
            l = (0, qe.useSelector)(tr.LF),
            o = (0, wm.wO)(e, t, a),
            i = ((e = "", t = "", a = "") => {
              const { installState: n } = (0, eu.e)(e, t, a),
                l = Wd(e, t, a);
              return (0, r.useMemo)(
                () => !(!n || n.serverstatus !== Ft.J0.Offline || l),
                [n, l],
              );
            })(e, t, a),
            c = Pm(e, t, a),
            s = (0, xm.B)(e, t, a),
            d = Wd(e, t, a),
            u = dm(e, t, a),
            m = ((e, t, a) => {
              const n = (0, $u.c)(e, t, a);
              return (0, r.useMemo)(
                () => (0, Ht.L3)(null == n ? void 0 : n.categories),
                [null == n ? void 0 : n.categories],
              );
            })(e, t, a),
            p = Lm(),
            b = ((e, t, a) => {
              const n = (0, nm.c)(e, t, a, {
                  includeMainGameItem: !0,
                  includeHiddenAddons: !0,
                }),
                l = (0, r.useMemo)(
                  () =>
                    (0, bm.D)(
                      n.map((e) => {
                        var t;
                        return null == (t = e.catalogItem)
                          ? void 0
                          : t.customAttributes;
                      }),
                    ),
                  [n],
                );
              return Cm(l, {
                enabled: Boolean(null == l ? void 0 : l.length),
                suspense: !1,
              });
            })(e, t, a),
            { installState: g } = (0, eu.e)(e, t, a),
            v = (0, Sm.a)(e, t, a);
          return (0, r.useMemo)(
            () =>
              (0, km.y)({
                allowMultipleInstances: n,
                authMode: l,
                availableDate: o,
                forceGet: i,
                forceUninstall: c,
                installState: g,
                isSubscription: m,
                isThirdPartyManagedApp: v,
                isUnsupported: s,
                isUplayGame: u,
                isUplayLinked: p,
                isUserEntitledToBuild: d,
                needsUplayRedemption: b,
              }),
            [n, l, o, i, c, g, m, v, s, u, p, d, b],
          );
        };
      var Mm = a(93038);
      const Am = ({ options: e, onClick: t }) =>
          r.createElement(
            r.Fragment,
            null,
            e.map(({ id: e, key: a, name: n, params: l }) =>
              r.createElement(sn.c, {
                key: e,
                onClick: () => t(l, a),
                title: r.createElement(te.Z, { code: n }),
              }),
            ),
          ),
        Tm = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            l = ((e = "", t = "", a = "") => {
              const [n, ...l] = (0, nm.c)(e, t, a, { includeMainGameItem: !0 }),
                o = (0, qe.useSelector)(er.xp),
                i = (0, qe.useSelector)(tr.ek);
              return (0, r.useMemo)(() => {
                var e;
                const t =
                  (null == (e = o.latestValue)
                    ? void 0
                    : e[n.relationshipId]) && n.catalogItem
                    ? im([n], i)
                    : [];
                let a = [];
                return (
                  (0, Ft.ZP)().supportsLaunchableAddonsFlow() &&
                    (a = (l || []).reduce((e, t) => {
                      var a;
                      const r =
                        null == (a = o.latestValue)
                          ? void 0
                          : a[t.relationshipId];
                      return t.catalogItem && r && e.push(t), e;
                    }, [])),
                  [...t, ...(a.length ? im(a, i) : [])]
                );
              }, [o.latestValue, i, n, l]);
            })(e, t, a),
            o = jm(e, t, a),
            i = (0, qu.n)(),
            { isThirdPartyManaged: c, triggerLaunchToast: s } = (0, cm.K)(
              e,
              t,
              a,
            ),
            d = r.useCallback(
              (e, t) => {
                i({
                  namespace: e.namespace,
                  catalogId: e.catalogItemId,
                  appName: e.appName,
                  optionKey: t,
                }).then((e) => {
                  e && c && s();
                }),
                  n(void 0);
              },
              [i, e, t, a, n, c, s],
            );
          return (o === Mm.W.CanLaunch ||
            o === Mm.W.CanLaunchRestricted ||
            o === Mm.W.CanLaunchMultiple) &&
            l.length > 0
            ? r.createElement(Am, { options: l, onClick: d })
            : null;
        },
        _m = ({ onClick: e, disabled: t }) =>
          r.createElement(sn.c, {
            onClick: e,
            disabled: t,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.game_achievements",
            }),
          }),
        Dm = () => {
          const { namespace: e } = (0, bd.wK)(),
            { setActiveMenu: t } = (0, cn.U)(),
            a = (0, qe.useDispatch)(),
            { gotoAchievements: n, achievementsLinkTo: l } = Ed(e, {
              suspense: !1,
            }),
            o = r.useCallback(() => {
              t(void 0), a(pd(l)), n();
            }, [n, l, a, t]);
          return r.createElement(_m, { onClick: o, disabled: !l });
        };
      var Rm = a(7541);
      var Bm = a(12967);
      const Zm = (e, t) => {
          const { productHomeLinkTo: a } = (0, Bm.f)({ sandboxId: e }, t);
          return { productHomeLinkTo: a, gotoProductHome: (0, vd.X)(a) };
        },
        Fm = ({ onClick: e, disabled: t }) =>
          r.createElement(sn.c, {
            onClick: e,
            disabled: t,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.go_to_store_page",
            }),
          }),
        Um = () => {
          const { namespace: e } = (0, bd.wK)(),
            { setActiveMenu: t } = (0, cn.U)(),
            { gotoProductHome: a, productHomeLinkTo: n } = Zm(e, {
              suspense: !1,
            }),
            l = r.useCallback(() => {
              t(void 0), a();
            }, [a, t]);
          return r.createElement(Fm, { onClick: l, disabled: !n });
        },
        Wm = (0, Tu.u)("showInstallerOptions"),
        Km = ({ onClick: e }) =>
          r.createElement(sn.c, {
            onClick: e,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.options",
            }),
          }),
        zm = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            { installState: l } = (0, eu.e)(e, t, a),
            o = Wm(),
            i = r.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), n(void 0);
            }, [o, e, t, a, n]);
          return r.useMemo(() => (0, tu.t9)(l), [l])
            ? r.createElement(Km, { onClick: i })
            : null;
        },
        Vm = (e) => () => {
          const {
            isOpenById: t,
            openModalById: a,
            closeModalById: n,
            getData: l,
          } = (0, c.vR)();
          return (0, r.useMemo)(
            () => ({
              isOpen: t(e),
              openModal: (t) => a(e, t),
              closeModal: () => n(e),
              cancelModal: () => n(e, c.tn.Cancel),
              getData: () => l(e),
            }),
            [t, a, n, l],
          );
        },
        $m = ({ title: e, content: t, onCloseClick: a }) =>
          r.createElement(A.P, {
            header: r.createElement(
              _.x,
              { onCloseClick: a },
              r.createElement(ae.ZP, { weight: ae.G0.BOLD }, e),
            ),
            content: t,
          });
      var Hm = Object.defineProperty,
        Gm = Object.getOwnPropertySymbols,
        qm = Object.prototype.hasOwnProperty,
        Ym = Object.prototype.propertyIsEnumerable,
        Jm = (e, t, a) =>
          t in e
            ? Hm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Xm = (e, t) => {
          for (var a in t || (t = {})) qm.call(t, a) && Jm(e, a, t[a]);
          if (Gm) for (var a of Gm(t)) Ym.call(t, a) && Jm(e, a, t[a]);
          return e;
        };
      const Qm = {
          icon: (0, b.iv)(Xm({ display: "inherit" }, (0, ne.wz)(14))),
        },
        ep = (e) => {
          var t = e,
            { title: a, subtitle: n, children: l, icon: o } = t,
            i = ((e, t) => {
              var a = {};
              for (var r in e)
                qm.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Gm)
                for (var r of Gm(e))
                  t.indexOf(r) < 0 && Ym.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["title", "subtitle", "children", "icon"]);
          return r.createElement(
            bo.s,
            Xm(
              {
                title: r.createElement(
                  d.x,
                  { alignItems: u.Ks.Center },
                  r.createElement("div", { className: Qm.icon }, o),
                  a,
                ),
                subtitle: n,
              },
              i,
            ),
            l && r.createElement(d.x, { justify: u.jf.End }, l),
          );
        };
      var tp = a(88810),
        ap = Object.defineProperty,
        rp = Object.defineProperties,
        np = Object.getOwnPropertyDescriptors,
        lp = Object.getOwnPropertySymbols,
        op = Object.prototype.hasOwnProperty,
        ip = Object.prototype.propertyIsEnumerable,
        cp = (e, t, a) =>
          t in e
            ? ap(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        sp = (e, t) => {
          for (var a in t || (t = {})) op.call(t, a) && cp(e, a, t[a]);
          if (lp) for (var a of lp(t)) ip.call(t, a) && cp(e, a, t[a]);
          return e;
        },
        dp = (e, t) => rp(e, np(t));
      const up = {
          secondaryButton: (0, b.iv)(
            dp(sp({ width: 30, height: 30 }, (0, ne.wz)(14)), {
              "> button": { width: "100%", height: "100%", padding: 0 },
            }),
          ),
        },
        mp = ({
          title: e,
          subtitle: t,
          icon: a,
          secondaryButton: n,
          primaryButton: l,
          footer: o,
          variant: i = tp.O.TwoColumn,
        }) => {
          const c = {
              title: e,
              subtitle: t,
              borderRadius: fe.E0,
              hasBackground: !0,
              footer: o,
            },
            s = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                d.x,
                { alignItems: u.Ks.Center },
                n &&
                  r.createElement("div", { className: up.secondaryButton }, n),
                l,
              ),
            );
          return a
            ? r.createElement(ep, dp(sp({ icon: a }, c), { variant: i }), s)
            : r.createElement(bo.s, dp(sp({}, c), { variant: i }), s);
        };
      var pp = Object.defineProperty,
        bp = Object.getOwnPropertySymbols,
        gp = Object.prototype.hasOwnProperty,
        vp = Object.prototype.propertyIsEnumerable,
        Ep = (e, t, a) =>
          t in e
            ? pp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        yp = (e, t) => {
          for (var a in t || (t = {})) gp.call(t, a) && Ep(e, a, t[a]);
          if (bp) for (var a of bp(t)) vp.call(t, a) && Ep(e, a, t[a]);
          return e;
        };
      const fp = (e) =>
        r.createElement(ye, {
          hasHeader: !0,
          titleWidth: 200,
          content: r.createElement(
            On.v,
            { noBorder: !0, noShadow: !0, noBackground: !0, spacing: 10 },
            r.createElement(mp, {
              title: r.createElement(
                Ee.Od,
                yp({ variant: Ee.Jy.Text, width: 80, height: 20 }, e),
              ),
              icon: r.createElement(Ee.Od, yp({ width: 20, height: 20 }, e)),
              primaryButton: r.createElement(
                Ee.Od,
                yp({ width: 100, height: 40 }, e),
              ),
            }),
            r.createElement(mp, {
              title: r.createElement(
                Ee.Od,
                yp({ variant: Ee.Jy.Text, width: 180, height: 20 }, e),
              ),
              icon: r.createElement(Ee.Od, yp({ width: 20, height: 20 }, e)),
              primaryButton: r.createElement(
                Ee.Od,
                yp({ width: 40, height: 25 }, e),
              ),
            }),
            r.createElement(mp, {
              title: r.createElement(
                Ee.Od,
                yp({ variant: Ee.Jy.Text, width: 90, height: 30 }, e),
              ),
              subtitle: r.createElement(
                Ee.Od,
                yp({ variant: Ee.Jy.Text, width: 200, height: 20 }, e),
              ),
              icon: r.createElement(Ee.Od, yp({ width: 20, height: 20 }, e)),
              secondaryButton: r.createElement(
                Ee.Od,
                yp({ variant: Ee.Jy.Circle, width: "100%", height: "100%" }, e),
              ),
              primaryButton: r.createElement(
                Ee.Od,
                yp({ width: 40, height: 25 }, e),
              ),
            }),
          ),
        });
      var hp = a(67541);
      const Op = (0, m.i)((e) => ({
          button: (0, b.iv)((0, W.Bt)(e), {
            position: "relative",
            padding: "2px",
          }),
          toggle: (0, b.iv)({ pointerEvents: "none" }),
        })),
        Cp = ({ checked: e, onClick: t, disabled: a, id: n }) => {
          const l = Op();
          return r.createElement(
            ft.Z,
            { className: l.button, onClick: t, disabled: a },
            r.createElement(hp.Z, {
              className: l.toggle,
              checked: e,
              disabled: a,
              id: n,
            }),
          );
        };
      var Ip = a(8604),
        wp = a(25198),
        xp = a(30941);
      const Sp = (e = "", t = "", a = "", r = { enabled: !0 }) => {
        const n = (0, qe.useSelector)(Ip.Ip),
          { data: l, query: o } = (0, xp.Y)({
            bridge: (0, Ft.ZP)(),
            method: "getAutoUpdate",
            args: [e, t, a],
            queryKey: wp.L6.settingDetail(e, t, a, wp.nM.AutoUpdate),
            config: { enabled: n && Boolean(e && t && a) && r.enabled },
          });
        return { autoUpdate: l, query: o };
      };
      var Pp = a(36182);
      const kp = (0, Na.uB)("useProductBridgeMutation"),
        Np = "setAutoUpdate",
        Lp = (
          e = "",
          t = "",
          a = "",
          r = dc.Nd.LIBRARY,
          n = { enabled: !0 },
        ) => {
          const { autoUpdate: l, query: o } = Sp(e, t, a, n),
            { mutateAsync: i } = (0, Pa.Db)((n) => {
              return (
                (i = void 0),
                (c = null),
                (s = function* () {
                  if (l !== n) {
                    kp.log(Np, {
                      namespace: e,
                      catalogId: t,
                      appName: a,
                      nextAutoUpdate: n,
                    });
                    try {
                      return (
                        yield (0, Ft.ZP)().setAutoUpdate(e, t, a, n, r),
                        o.refetch()
                      );
                    } catch (e) {
                      kp.warn(Np, "error", { error: e.message }), (0, Pp.pN)(e);
                    }
                  }
                }),
                new Promise((e, t) => {
                  var a = (e) => {
                      try {
                        n(s.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    r = (e) => {
                      try {
                        n(s.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    n = (t) =>
                      t.done ? e(t.value) : Promise.resolve(t.value).then(a, r);
                  n((s = s.apply(i, c)).next());
                })
              );
              var i, c, s;
            });
          return i;
        },
        jp = () =>
          r.createElement(bo.s, {
            title: r.createElement(Ee.Od, {
              variant: Ee.Jy.Text,
              width: "80%",
              height: "100%",
            }),
          }),
        Mp = ({ disabled: e, checked: t, onClick: a }) =>
          r.createElement(mp, {
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.autoUpdate",
            }),
            icon: r.createElement(Tl, null),
            primaryButton: r.createElement(Cp, {
              checked: t,
              disabled: e,
              onClick: a,
              id: "autoUpdate-toggle",
            }),
          }),
        Ap = () => {
          const {
            query: e,
            autoUpdateState: t,
            onClick: a,
          } = (() => {
            const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
              { autoUpdate: n, query: l } = Sp(e, t, a),
              [o, i] = r.useState(Boolean(n)),
              c = Lp(e, t, a),
              s = r.useCallback(() => {
                i(!n), c(!n);
              }, [c, i, n]);
            return (
              r.useEffect(() => {
                void 0 !== n && n !== o && i(n);
              }, [n]),
              { query: l, autoUpdateState: o, onClick: s }
            );
          })();
          return r.createElement(
            Ye.n4,
            { fallback: r.createElement(jp, null) },
            r.createElement(Mp, {
              disabled: !e.isSuccess,
              checked: t,
              onClick: a,
            }),
          );
        },
        Tp = (e = "", t = "", a = "", r = { enabled: !0 }) => {
          const n = (0, qe.useSelector)(Ip.Ip),
            { data: l = !1, query: o } = (0, xp.Y)({
              bridge: (0, Ft.ZP)(),
              method: "getCloudSave",
              args: [e, t, a],
              queryKey: wp.L6.settingDetail(e, t, a, wp.nM.CloudSave),
              config: { enabled: n && Boolean(e && t && a) && r.enabled },
            });
          return { cloudSave: l, query: o };
        };
      const _p = (0, Na.uB)("useSetProductCloudSave"),
        Dp = "setCloudSave",
        Rp = (
          e = "",
          t = "",
          a = "",
          r = dc.Nd.LIBRARY,
          n = { enabled: !0 },
        ) => {
          const { cloudSave: l, query: o } = Tp(e, t, a, n),
            { mutateAsync: i } = (0, Pa.Db)((n) => {
              return (
                (i = void 0),
                (c = null),
                (s = function* () {
                  if (l === n) return !1;
                  _p.log(Dp, {
                    namespace: e,
                    catalogId: t,
                    appName: a,
                    nextCloudSave: n,
                  });
                  try {
                    const l = yield (0, Ft.ZP)().setCloudSave(e, t, a, n, r);
                    return o.refetch(), l;
                  } catch (e) {
                    _p.warn(Dp, "error", { error: e.message }), (0, Pp.pN)(e);
                  }
                }),
                new Promise((e, t) => {
                  var a = (e) => {
                      try {
                        n(s.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    r = (e) => {
                      try {
                        n(s.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    n = (t) =>
                      t.done ? e(t.value) : Promise.resolve(t.value).then(a, r);
                  n((s = s.apply(i, c)).next());
                })
              );
              var i, c, s;
            });
          return i;
        },
        Bp = (0, Tu.u)("syncCloudSave");
      var Zp = Object.defineProperty,
        Fp = Object.getOwnPropertySymbols,
        Up = Object.prototype.hasOwnProperty,
        Wp = Object.prototype.propertyIsEnumerable,
        Kp = (e, t, a) =>
          t in e
            ? Zp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const zp = (e) => {
          var t = e,
            { icon: a, toolTipCode: n } = t,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                Up.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Fp)
                for (var r of Fp(e))
                  t.indexOf(r) < 0 && Wp.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["icon", "toolTipCode"]);
          const o = r.useRef(null);
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              tt.h,
              ((e, t) => {
                for (var a in t || (t = {})) Up.call(t, a) && Kp(e, a, t[a]);
                if (Fp) for (var a of Fp(t)) Wp.call(t, a) && Kp(e, a, t[a]);
                return e;
              })(
                {
                  forwardRef: o,
                  buttonHeight: R.Ey.DENSED,
                  buttonWidth: R.WL.BLOCK,
                  outline: !0,
                  pill: !0,
                  "data-testid": "MenuItemSecondaryButton",
                },
                l,
              ),
              a,
            ),
            n &&
              r.createElement(
                rt.u,
                { anchorRef: o, zIndex: le.W.toolTip },
                r.createElement(Ko.v0, { code: n || "" }),
              ),
          );
        },
        Vp = (0, Al.L)(
          r.createElement("path", {
            d: "M18.784 10.649c-.052 0-.101.005-.152.008C18.084 7.447 15.265 5 11.868 5a6.87 6.87 0 00-6.061 3.608C3.115 8.834 1 11.068 1 13.794c0 2.788 2.214 5.065 4.997 5.2V19h12.787C21.113 19 23 17.13 23 14.825c0-2.306-1.887-4.176-4.216-4.176zM12 17.294l-4.107-4.075h2.665V8.65c0-.38.312-.69.696-.69h1.491c.385 0 .696.31.696.69v4.57h2.666L12 17.294z",
          }),
          "CloudSaved",
        ),
        $p = (0, Al.L)(
          r.createElement("path", {
            d: "M18.0005 3.9978L14.0005 7.9978H17.0005V14.9978C17.0005 16.0978 16.1005 16.9978 15.0005 16.9978C13.9005 16.9978 13.0005 16.0978 13.0005 14.9978V7.9978C13.0005 5.7878 11.2105 3.9978 9.00049 3.9978C6.79049 3.9978 5.00049 5.7878 5.00049 7.9978V14.9978H2.00049L6.00049 18.9978L10.0005 14.9978H7.00049V7.9978C7.00049 6.8978 7.90049 5.9978 9.00049 5.9978C10.1005 5.9978 11.0005 6.8978 11.0005 7.9978V14.9978C11.0005 17.2078 12.7905 18.9978 15.0005 18.9978C17.2105 18.9978 19.0005 17.2078 19.0005 14.9978V7.9978H22.0005L18.0005 3.9978Z",
          }),
          "Sync",
        );
      var Hp = a(93882);
      const Gp = (0, b.iv)({ pointerEvents: "none" }),
        qp = ({
          onSyncClick: e,
          onToggleClick: t,
          formattedDate: a,
          disabled: r = !1,
          cloudSaveState: l,
        }) =>
          n().createElement(mp, {
            title: n().createElement(Ko.v0, {
              code: "egstore.library.manage_products_modal.cloud_save",
            }),
            subtitle: n().createElement(Ko.v0, {
              code: "diesel.library.settings.cloud_sync.desc",
              args: [a],
            }),
            icon: n().createElement(Vp, null),
            secondaryButton: n().createElement(zp, {
              icon: n().createElement($p, null),
              onClick: e,
              toolTipCode: l ? "diesel.library.settings.cloud_sync" : "",
            }),
            primaryButton: n().createElement(Cp, {
              className: Gp,
              checked: l,
              onClick: t,
              disabled: r,
              id: "cloudSave-toggle",
            }),
          }),
        Yp = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { installState: r } = (0, eu.e)(e, t, a),
            l = Bp(),
            o = (0, Hp.C)(),
            { cloudSave: i, query: c } = Tp(e, t, a),
            s = Rp(e, t, a),
            [d, u] = n().useState(Boolean(i)),
            { closeModal: m } = sg(),
            p = n().useMemo(() => (0, tu.O7)(o, r), [o, r]),
            b = n().useCallback(() => {
              u(!i), s(!i);
            }, [s, u, i]);
          n().useEffect(() => {
            i !== d && u(i);
          }, [i]);
          const g = n().useCallback(() => {
            d && m(), l({ namespace: e, catalogId: t, appName: a });
          }, [d, m, l, e, t, a]);
          return n().createElement(qp, {
            onSyncClick: g,
            formattedDate: p,
            onToggleClick: b,
            disabled: !c.isSuccess,
            cloudSaveState: d,
          });
        },
        Jp = (0, Tu.u)("createShortcut");
      var Xp = Object.defineProperty,
        Qp = Object.getOwnPropertySymbols,
        eb = Object.prototype.hasOwnProperty,
        tb = Object.prototype.propertyIsEnumerable,
        ab = (e, t, a) =>
          t in e
            ? Xp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const rb = (e) => {
          var t = e,
            { children: a } = t,
            n = ((e, t) => {
              var a = {};
              for (var r in e)
                eb.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Qp)
                for (var r of Qp(e))
                  t.indexOf(r) < 0 && tb.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["children"]);
          return r.createElement(
            Jn.f5,
            ((e, t) => {
              for (var a in t || (t = {})) eb.call(t, a) && ab(e, a, t[a]);
              if (Qp) for (var a of Qp(t)) tb.call(t, a) && ab(e, a, t[a]);
              return e;
            })(
              {
                buttonHeight: R.Ey.DENSED,
                buttonWidth: R.WL.AUTO,
                "data-testid": "MenuItemPrimaryButton",
              },
              n,
            ),
            a,
          );
        },
        nb = (0, Al.L)(
          r.createElement("path", {
            d: "M18.864 4H4.136c-.9 0-1.636.72-1.636 1.6v9.6c0 .88.736 1.6 1.636 1.6h5.728v1.6H8.227V20h6.546v-1.6h-1.637v-1.6h5.728c.9 0 1.636-.72 1.636-1.6V5.6c0-.88-.736-1.6-1.636-1.6zm0 11.2H4.136V5.6h14.728v9.6z",
          }),
          "ResolutionExtraLarge",
        ),
        lb = ({ onClick: e }) =>
          n().createElement(mp, {
            title: n().createElement(Ko.v0, {
              code: "egstore.library.manage_products_modal.create_desktop_shortcut",
            }),
            icon: n().createElement(nb, null),
            primaryButton: n().createElement(
              rb,
              { onClick: e },
              n().createElement(Ko.v0, {
                code: "egstore.library.manage_products_modal.create",
              }),
            ),
          }),
        ob = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { closeModal: r } = sg(),
            l = Jp(),
            o = n().useCallback(() => {
              r(),
                l({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: dc.Nd.MANAGE_PRODUCT_MODAL,
                });
            }, [r, l, e, t, a]);
          return n().createElement(lb, { onClick: o });
        },
        ib = (0, Tu.u)("showInstallLocation"),
        cb = (0, Tu.g)(
          "uninstall",
          ({
            namespace: e,
            catalogId: t,
            appName: a,
            funnelId: r = dc.Nd.LIBRARY,
            options: n,
          }) => (0, Ft.ZP)().uninstall(e, t, a, r, n),
        );
      var sb = Object.defineProperty,
        db = Object.getOwnPropertySymbols,
        ub = Object.prototype.hasOwnProperty,
        mb = Object.prototype.propertyIsEnumerable,
        pb = (e, t, a) =>
          t in e
            ? sb(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const bb = (0, m.i)(() => ({
          tooltip: (0, b.iv)({ textAlign: "left" }),
          warning: (0, b.iv)({ marginTop: 20, maxWidth: 275 }),
        })),
        gb = (e) => {
          const t = bb();
          return r.createElement(
            rt.u,
            ((e, t) => {
              for (var a in t || (t = {})) ub.call(t, a) && pb(e, a, t[a]);
              if (db) for (var a of db(t)) mb.call(t, a) && pb(e, a, t[a]);
              return e;
            })({}, e),
            r.createElement(
              "div",
              { className: t.tooltip },
              r.createElement(Ko.v0, {
                code: "egstore.library.manage_products_modal.install_location",
              }),
              r.createElement(
                "div",
                { className: t.warning },
                r.createElement(Ko.v0, {
                  code: "egstore.library.manage_products_modal.install_location_warning",
                }),
              ),
            ),
          );
        },
        vb = ({ title: e, onUninstallClick: t, onCancelClick: a }) =>
          n().createElement($r, {
            modalTitle: n().createElement(te.Z, {
              code: "diesel.common.smart_button.uninstall",
            }),
            title: n().createElement(te.Z, {
              code: "egstore.library.uninstall_modal_confirm.text_question",
              args: [e],
            }),
            subTitle: n().createElement(te.Z, {
              code: "egstore.library.uninstall_modal_confirm.text_info",
            }),
            secondaryButton: n().createElement(
              M.d,
              { onClick: a },
              n().createElement(te.Z, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: n().createElement(
              j.N,
              { onClick: t },
              n().createElement(te.Z, {
                code: "diesel.common.smart_button.uninstall",
              }),
            ),
            onCloseClick: a,
          });
      var Eb = Object.defineProperty,
        yb = Object.defineProperties,
        fb = Object.getOwnPropertyDescriptors,
        hb = Object.getOwnPropertySymbols,
        Ob = Object.prototype.hasOwnProperty,
        Cb = Object.prototype.propertyIsEnumerable,
        Ib = (e, t, a) =>
          t in e
            ? Eb(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        wb = (e, t) => {
          for (var a in t || (t = {})) Ob.call(t, a) && Ib(e, a, t[a]);
          if (hb) for (var a of hb(t)) Cb.call(t, a) && Ib(e, a, t[a]);
          return e;
        },
        xb = (e, t) => yb(e, fb(t));
      const Sb = (e) =>
        r.createElement(
          ye,
          xb(wb({}, e), {
            hasHeader: !0,
            hasFooter: !0,
            hasPrimaryButton: !0,
            hasSecondaryButton: !0,
            content: r.createElement(
              d.x,
              { alignItems: u.Ks.Center, justify: u.jf.Center, fillParent: !0 },
              r.createElement(
                d.x,
                { direction: u.jO.Column, alignItems: u.Ks.Center },
                r.createElement(
                  Ee.Od,
                  wb({ variant: Ee.Jy.Text, width: 500, height: 50 }, e),
                ),
                r.createElement(
                  Ee.Od,
                  xb(wb({ variant: Ee.Jy.Text, width: 300, height: 50 }, e), {
                    style: { margin: "-10px 0 10px" },
                  }),
                ),
                r.createElement(
                  Ee.Od,
                  wb({ variant: Ee.Jy.Text, width: 260, height: 30 }, e),
                ),
              ),
            ),
          }),
        );
      var Pb = a(11199);
      const kb = Vm("uninstall-confirm-modal"),
        Nb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            r = (0, Pb.V)(e, t, a),
            l = cb(),
            { closeModal: o, cancelModal: i } = kb(),
            c = n().useCallback(() => {
              o(),
                l({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: dc.Nd.MANAGE_PRODUCT_MODAL,
                  options: { disableConfirmation: !0 },
                });
            }, [o, l, e, t, a]);
          return n().createElement(vb, {
            title: r,
            onUninstallClick: c,
            onCancelClick: i,
          });
        },
        Lb = () => {
          const { isOpen: e, cancelModal: t, getData: a } = kb(),
            r = a();
          return r
            ? n().createElement(
                Le.u,
                { isOpen: e, onClose: t },
                n().createElement(
                  Ye.n4,
                  { fallback: n().createElement(Sb, null) },
                  n().createElement(
                    bd.wi.Provider,
                    { value: r },
                    n().createElement(Nb, null),
                  ),
                ),
              )
            : null;
        },
        jb = (e, t, a) => {
          const { installState: n } = (0, eu.e)(e, t, a);
          return (0, r.useMemo)(() => (0, tu.b8)(n), [n]);
        };
      var Mb = a(31e3),
        Ab = a(17998),
        Tb = a(41786);
      const _b = (e, t) =>
          (0, td.fS)({
            namespace: e.namespace,
            catalogid: e.catalogItemId,
            appname: e.appName,
            bshouldbeinstalled: t,
          }),
        Db = () => {},
        Rb = (e = "", t = "", a = "") => {
          const n = (0, Tb.R)(e, t, a),
            l = (0, Ab.I)(e, t, a),
            o = (0, Mb.$)(
              l ? (null == n ? void 0 : n.namespace) : "",
              l ? (null == n ? void 0 : n.catalogItemId) : "",
              l ? (null == n ? void 0 : n.appName) : "",
            );
          return (0, r.useMemo)(() => {
            const r = { namespace: e, catalogItemId: t, appName: a },
              n = (0, Ft.ZP)().supportsLaunchableAddonsFlow() && l;
            return {
              isLaunchableAddon: l,
              install: n ? () => o([_b(r, !0)]) : Db,
              uninstall: n ? () => o([_b(r, !1)]) : Db,
            };
          }, [e, t, a, l]);
        };
      var Bb = a(16087);
      const Zb = (0, Al.L)(
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6a2 2 0 012-2h7l2 2h9v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm18 2H4v10h16V8z",
          }),
          "FolderEmpty",
        ),
        Fb = ({ size: e, onFolderLocationClick: t, onUninstallClick: a }) => {
          const n = r.useRef(null);
          return r.createElement(mp, {
            title: r.createElement(Ko.v0, {
              code: "egstore.library.manage_products_modal.installation",
            }),
            subtitle: r.createElement(Ko.v0, {
              code: "egstore.library.manage_products_modal.install_size",
              args: [e],
            }),
            icon: r.createElement(Bb.X, null),
            secondaryButton: r.createElement(
              r.Fragment,
              null,
              r.createElement(zp, {
                forwardRef: n,
                icon: r.createElement(Zb, null),
                onClick: t,
              }),
              r.createElement(gb, { anchorRef: n }),
            ),
            primaryButton: r.createElement(
              rb,
              { onClick: a },
              r.createElement(Ko.v0, {
                code: "diesel.common.smart_button.uninstall",
              }),
            ),
          });
        },
        Ub = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            n = jb(e, t, a),
            { closeModal: l } = sg(),
            { openModal: o } = kb(),
            i = ib(),
            c = cb(),
            { isLaunchableAddon: s, uninstall: d } = Rb(e, t, a),
            u = r.useCallback(() => {
              i({ namespace: e, catalogId: t, appName: a });
            }, [i, e, t, a]),
            m = r.useCallback(() => {
              l(),
                s && !(0, Ft.ZP)().supportsLaunchableAddonsV2Flow()
                  ? d()
                  : (0, Ft.ZP)().supportsWebClientUninstallFlow()
                    ? o({ namespace: e, catalogItemId: t, appName: a })
                    : c({ namespace: e, catalogId: t, appName: a });
            }, [l, o, s, c, d, e, t, a]);
          return r.createElement(Fb, {
            size: n,
            onFolderLocationClick: u,
            onUninstallClick: m,
          });
        };
      var Wb = a(22467);
      const Kb = (0, Al.L)(
          r.createElement("path", {
            d: "M6 2.8C4.894 2.8 4 3.694 4 4.8V20.8C4 21.906 4.894 22.8 6 22.8H10.051L7.57 20.331L12.55\n        15.381L15.693 18.506L20 14.222V7.8L15 2.8H6ZM15.693 24.8L24 16.541L22.651 15.2L15.693 22.117L12.549\n        18.994L11.2 20.334L15.693 24.8Z",
            fill: "white",
          }),
          "File",
        ),
        zb = ({ onClick: e }) =>
          r.createElement(mp, {
            title: r.createElement(te.Z, {
              code: "egstore.library.manage_products_modal.verify_files",
            }),
            icon: r.createElement(Kb, null),
            primaryButton: r.createElement(
              rb,
              { onClick: e },
              r.createElement(te.Z, {
                code: "egstore.library.manage_products_modal.verify",
              }),
            ),
          }),
        Vb = () => {
          const { closeModal: e } = sg(),
            { namespace: t, catalogItemId: a, appName: n } = (0, bd.wK)(),
            l = (0, Wb.h)(),
            o = r.useCallback(() => {
              l({
                namespace: t,
                catalogId: a,
                appName: n,
                funnelId: dc.Nd.MANAGE_PRODUCT_MODAL,
              }),
                e();
            }, [l, t, a, n, e]);
          return r.createElement(zb, { onClick: o });
        };
      var $b = a(4136);
      var Hb = a(43730);
      const Gb = (e, t, a) => {
          const { installState: n } = (0, eu.e)(e, t, a),
            l = (0, $u.c)(e, t, a),
            o = (0, r.useMemo)(() => (0, $t.uD)(l), [l]),
            i = (0, r.useMemo)(() => (0, Wo.mW)(l), [l]),
            { globalAutoUpdate: c } = (0, Hb.t)(),
            s = (0, Ab.I)(e, t, a);
          return (0, r.useMemo)(
            () =>
              ((e) => {
                const {
                    installState: t,
                    isModKit: a = !1,
                    isNeverUpdate: r = !1,
                    globalAutoUpdate: n = !1,
                    isLaunchableAddon: l = !1,
                  } = e,
                  o = (0, tu.Pb)(t),
                  i = (0, tu.aV)(t),
                  c = (0, tu.yK)(t);
                return !l && !a && !o && !c && !r && i && n;
              })({
                installState: n,
                isModKit: o,
                isNeverUpdate: i,
                globalAutoUpdate: c,
                isLaunchableAddon: s,
              }),
            [n, o, i, c, s],
          );
        },
        qb = (e = "", t = "", a = "") => {
          const n = (0, qe.useSelector)(tr.LA),
            { installState: l } = (0, eu.e)(e, t, a),
            o = Wd(e, t, a),
            i = dm(e, t, a);
          return (0, r.useMemo)(
            () =>
              (({
                isOnline: e,
                isEntitledToLibraryItem: t,
                installState: a,
                isUplayGame: r,
              }) =>
                e &&
                t &&
                !(0, tu.Gd)(a) &&
                !(0, tu.Pb)(a) &&
                !(0, tu.Ic)(a) &&
                !(0, tu.Ct)(a) &&
                !r)({
                installState: l,
                isOnline: n,
                isEntitledToLibraryItem: o,
                isUplayGame: i,
              }),
            [l, n, o],
          );
        };
      var Yb = Object.defineProperty,
        Jb = Object.defineProperties,
        Xb = Object.getOwnPropertyDescriptors,
        Qb = Object.getOwnPropertySymbols,
        eg = Object.prototype.hasOwnProperty,
        tg = Object.prototype.propertyIsEnumerable,
        ag = (e, t, a) =>
          t in e
            ? Yb(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        rg = (e, t) => {
          for (var a in t || (t = {})) eg.call(t, a) && ag(e, a, t[a]);
          if (Qb) for (var a of Qb(t)) tg.call(t, a) && ag(e, a, t[a]);
          return e;
        };
      const ng = (e = "", t = "", a = "", n = { enabled: !0 }) => {
          const l = (0, qe.useSelector)(Ip.Ip),
            o = (0, Pa.NL)(),
            i = (0, r.useMemo)(
              () => wp.L6.additionalCommandsDetail(e, t, a),
              [e, t, a],
            ),
            c = (0, r.useMemo)(
              () =>
                (0, Ft.ZP)().supportsAdditionalCommands() &&
                l &&
                n.enabled &&
                Boolean(e && a && t),
              [l, n.enabled],
            ),
            { data: s, query: d } = (0, xp.Y)({
              bridge: (0, Ft.ZP)(),
              method: "getAdditionalCommands",
              args: [e, t, a],
              queryKey: i,
              config:
                ((u = rg({}, n)),
                (m = { enabled: c, refetchOnMount: "always" }),
                Jb(u, Xb(m))),
            });
          var u, m;
          const { mutate: p } = (0, Pa.Db)((r) => {
            return (
              (n = void 0),
              (l = null),
              (s = function* () {
                if (c)
                  try {
                    yield (0, Ft.ZP)().setAdditionalCommands(e, t, a, r),
                      yield o.invalidateQueries(i);
                  } catch (e) {
                    (0, Pp.pN)(e);
                  }
              }),
              new Promise((e, t) => {
                var a = (e) => {
                    try {
                      o(s.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  r = (e) => {
                    try {
                      o(s.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  o = (t) =>
                    t.done ? e(t.value) : Promise.resolve(t.value).then(a, r);
                o((s = s.apply(n, l)).next());
              })
            );
            var n, l, s;
          });
          return { commands: s, setCommands: p, query: d };
        },
        lg = ({ isEnabled: e, setIsEnabled: t, args: a, setArgs: r }) =>
          n().createElement(mp, {
            icon: n().createElement(Eo.o, null),
            title: n().createElement(te.Z, {
              code: "diesel.library.settings.custom_launch_args_title",
            }),
            subtitle: n().createElement(te.Z, {
              code: "diesel.library.settings.custom_launch_args_desc",
            }),
            primaryButton: n().createElement(Cp, {
              checked: e,
              onClick: () => t(!e),
              id: "enable-custom-launch-args",
            }),
            footer: e
              ? n().createElement(ee, {
                  id: "custom-launch-args",
                  value: a,
                  onChange: (e) => r(e.target.value),
                })
              : void 0,
            variant: tp.O.TwoColumnWithFooter,
          }),
        og = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { commands: r, setCommands: l, query: o } = ng(e, t, a),
            [i, c] = n().useState(!1),
            [s, d] = n().useState(""),
            [u] = (0, Go.Z)(s, 200, { trailing: !0 });
          return (
            n().useEffect(() => {
              r && (d(r.value), c(r.enabled));
            }, [o.isSuccess]),
            n().useEffect(() => {
              !r ||
                (r.value === u && r.enabled === i) ||
                l({ value: u, enabled: i });
            }, [u, i]),
            n().createElement(lg, {
              isEnabled: i,
              setIsEnabled: c,
              args: s,
              setArgs: d,
            })
          );
        },
        ig = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            n = ((e = "", t = "", a = "") => {
              const n = (0, qe.useSelector)(tr.ek),
                { installState: l } = (0, eu.e)(e, t, a);
              return (0, r.useMemo)(
                () =>
                  (n === $b.om.WINDOWS || n === $b.om.WIN32) && (0, tu.aV)(l),
                [n, l],
              );
            })(e, t, a),
            l = Gb(e, t, a),
            o = ((e = "", t = "", a = "") => {
              const { installState: r } = (0, eu.e)(e, t, a);
              return (0, tu.jW)(r);
            })(e, t, a),
            i = qb(e, t, a);
          return r.createElement(
            On.v,
            { noBorder: !0, noShadow: !0, noBackground: !0, spacing: 10 },
            i && r.createElement(Vb, null),
            l && r.createElement(Ap, null),
            o && r.createElement(Yp, null),
            n && r.createElement(ob, null),
            r.createElement(Ub, null),
            r.createElement(og, null),
          );
        };
      var cg = a(49464);
      const sg = Vm("manage-product-modal"),
        dg = () => {
          const { cancelModal: e } = sg();
          return r.createElement($m, {
            title: r.createElement(cg.F, null),
            onCloseClick: e,
            content: r.createElement(ig, null),
          });
        },
        ug = () => {
          const { isOpen: e, cancelModal: t, getData: a } = sg(),
            n = a();
          return n
            ? r.createElement(
                Le.u,
                { isOpen: e, onClose: t },
                r.createElement(
                  Ye.n4,
                  { fallback: r.createElement(fp, null) },
                  r.createElement(
                    bd.wi.Provider,
                    { value: n },
                    r.createElement(dg, null),
                  ),
                ),
              )
            : null;
        },
        mg = ({ onClick: e }) =>
          r.createElement(sn.c, {
            onClick: e,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.manage",
            }),
          }),
        pg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            { openModal: l } = sg(),
            { installState: o } = (0, eu.e)(e, t, a),
            i = r.useCallback(() => {
              n(void 0), l({ namespace: e, catalogItemId: t, appName: a });
            }, [l, n]);
          return r.useMemo(() => (0, tu.aV)(o), [o])
            ? r.createElement(mg, { onClick: i })
            : null;
        },
        bg = (e, t, a) => {
          const n = ((e = "", t = "", a = "") =>
            (0, r.useMemo)(() => {
              if (e && t && a)
                return li.s.ManageAddonsPath.replace(
                  ":namespace",
                  encodeURIComponent(e),
                )
                  .replace(":catalogId", encodeURIComponent(t))
                  .replace(":appName", encodeURIComponent(a));
            }, [e, t, a]))(e, t, a);
          return { manageAddonsLinkTo: n, gotoManageAddons: (0, vd.X)(n) };
        },
        gg = ({ onClick: e }) =>
          r.createElement(sn.c, {
            onClick: e,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.manageDLC",
            }),
          }),
        vg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            l = (0, nm.c)(e, t, a),
            { installState: o } = (0, eu.e)(e, t, a),
            { manageAddonsLinkTo: i, gotoManageAddons: c } = bg(e, t, a),
            s = r.useMemo(() => (0, tu.aV)(o), [o]),
            d = r.useMemo(() => (0, tu.Ct)(o), [o]),
            u = r.useCallback(() => {
              n(void 0), c();
            }, [c, n]);
          return s && !d && l.length > 0 && !!i
            ? r.createElement(gg, { onClick: u })
            : null;
        };
      var Eg = a(25281);
      const yg = (e, t, a) => {
          const n = ((e = "", t = "", a = "") =>
            (0, r.useMemo)(() => {
              if (e && t && a)
                return li.s.ManageModsPath.replace(
                  ":namespace",
                  encodeURIComponent(e),
                )
                  .replace(":catalogId", encodeURIComponent(t))
                  .replace(":appName", encodeURIComponent(a));
            }, [e, t]))(e, t, a);
          return { manageModsLinkTo: n, gotoManageMods: (0, vd.X)(n) };
        },
        fg = ({ onClick: e }) =>
          r.createElement(sn.c, {
            onClick: e,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.manage_mods",
            }),
          }),
        hg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            { installState: l } = (0, eu.e)(e, t, a),
            o = (0, Eg.L)(e, t, a),
            { manageModsLinkTo: i, gotoManageMods: c } = yg(e, t, a),
            s = r.useMemo(() => (0, tu.aV)(l), [l]),
            d = r.useMemo(() => (0, tu.Ct)(l), [l]),
            u = r.useCallback(() => {
              n(void 0), c();
            }, [c, n]);
          return s && !d && o.length > 0 && !!i
            ? r.createElement(fg, { onClick: u })
            : null;
        };
      var Og = a(77316);
      const Cg = () => {
        const { appName: e } = (0, bd.wK)(),
          t = (0, Ko.AT)(),
          { playtime: a } = (0, Og.U)({ artifactId: e });
        return (0, r.useMemo)(() => {
          const { hours: e, minutes: r } = ((e) => {
            const t = Math.min(e, Number.MAX_SAFE_INTEGER) / 60,
              a = Math.floor(t % 60);
            return { hours: Math.floor(t / 60), minutes: a };
          })(null != a ? a : 0);
          if (0 === e) {
            if (0 === r) return;
            return r < 5
              ? (0, oe.getMessage)(t, "diesel.common.time.minutes.lessThan5")
              : (0, oe.getMessage)(t, "diesel.common.time.minutes", [r]);
          }
          if (e > 0 && e < 1e4) {
            const a = (0, oe.getMessage)(t, "diesel.common.time.hours", [e]),
              n = (0, oe.getMessage)(t, "diesel.common.time.minutes", [r]);
            return 0 === r ? a : `${a} ${n}`;
          }
          return (0, oe.getMessage)(
            t,
            "diesel.common.time.hours.moreThan10000",
          );
        }, [a]);
      };
      var Ig = Object.defineProperty,
        wg = Object.getOwnPropertySymbols,
        xg = Object.prototype.hasOwnProperty,
        Sg = Object.prototype.propertyIsEnumerable,
        Pg = (e, t, a) =>
          t in e
            ? Ig(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const kg = ({ defaultValue: e = "0s" }) => {
          const t = Cg();
          return n().createElement(
            "span",
            { "data-testid": "playtime" },
            t || e,
          );
        },
        Ng = (e) =>
          n().createElement(
            Ye.n4,
            {
              fallback: n().createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                height: 15,
                width: 60,
              }),
            },
            n().createElement(
              kg,
              ((e, t) => {
                for (var a in t || (t = {})) xg.call(t, a) && Pg(e, a, t[a]);
                if (wg) for (var a of wg(t)) Sg.call(t, a) && Pg(e, a, t[a]);
                return e;
              })({}, e),
            ),
          ),
        Lg = ({ playtime: e }) =>
          r.createElement(bo.s, {
            horizontal: !0,
            title: r.createElement(te.Z, {
              code: "diesel.common.playerData.playtime.played_time",
            }),
            subtitle: e,
          }),
        jg = () => r.createElement(Lg, { playtime: r.createElement(Ng, null) }),
        Mg = () => {
          const e = (0, qe.useDispatch)();
          return (0, r.useCallback)(
            (t, a) => {
              e((0, Me.$M)({ collection: t, item: a }));
            },
            [e],
          );
        };
      var Ag = Object.defineProperty,
        Tg = Object.getOwnPropertySymbols,
        _g = Object.prototype.hasOwnProperty,
        Dg = Object.prototype.propertyIsEnumerable,
        Rg = (e, t, a) =>
          t in e
            ? Ag(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Bg = (e) => {
          var t = e,
            { collectionName: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var r in e)
                _g.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Tg)
                for (var r of Tg(e))
                  t.indexOf(r) < 0 && Dg.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["collectionName"]);
          return n().createElement(
            sn.c,
            ((e, t) => {
              for (var a in t || (t = {})) _g.call(t, a) && Rg(e, a, t[a]);
              if (Tg) for (var a of Tg(t)) Dg.call(t, a) && Rg(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: n().createElement(te.Z, {
                  code: "diesel.library.settings.remove_from_collection",
                  args: [a],
                }),
              },
              r,
            ),
          );
        },
        Zg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: r } = (0, cn.U)(),
            { selectedCollectionId: l } = Cr(),
            o = (0, i.c)({ suspense: !1 }),
            c = Ge(l),
            s = (0, Ud.K)(e, t, a),
            d = Mg(),
            u = n().useCallback(() => {
              c && s && d(c, s), r(void 0);
            }, [d, c, s, r]);
          return n().createElement(Bg, {
            onClick: u,
            collectionName: (null == c ? void 0 : c.name) || "",
            disabled: !o || !c,
          });
        };
      var Fg = Object.defineProperty,
        Ug = Object.getOwnPropertySymbols,
        Wg = Object.prototype.hasOwnProperty,
        Kg = Object.prototype.propertyIsEnumerable,
        zg = (e, t, a) =>
          t in e
            ? Fg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Vg = (e) =>
          n().createElement(
            sn.c,
            ((e, t) => {
              for (var a in t || (t = {})) Wg.call(t, a) && zg(e, a, t[a]);
              if (Ug) for (var a of Ug(t)) Kg.call(t, a) && zg(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: n().createElement(te.Z, {
                  code: "diesel.library.settings.remove_from_favorites",
                }),
              },
              e,
            ),
          ),
        $g = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: r } = (0, cn.U)(),
            l = (0, i.c)({ suspense: !1 }),
            o = Zn(),
            c = (0, Ud.K)(e, t, a),
            s = Mg(),
            d = n().useCallback(() => {
              o && c && s(o, c), r(void 0);
            }, [s, o, c, r]);
          return n().createElement(Vg, { onClick: d, disabled: !l || !o });
        },
        Hg = ({ onClick: e, formattedSize: t }) =>
          r.createElement(sn.c, {
            dense: !0,
            horizontal: !0,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.uninstall",
            }),
            subtitle: r.createElement("span", null, t),
            onClick: e,
          }),
        Gg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { setActiveMenu: n } = (0, cn.U)(),
            l = cb(),
            o = jb(e, t, a),
            { openModal: i } = kb(),
            { isLaunchableAddon: c, uninstall: s } = Rb(e, t, a),
            d = r.useCallback(() => {
              c && !(0, Ft.ZP)().supportsLaunchableAddonsV2Flow()
                ? s()
                : (0, Ft.ZP)().supportsWebClientUninstallFlow()
                  ? i({ namespace: e, catalogItemId: t, appName: a })
                  : l({ namespace: e, catalogId: t, appName: a }),
                n(void 0);
            }, [l, e, t, a, n, c, s]);
          return r.createElement(Hg, { onClick: d, formattedSize: o });
        },
        qg = ({ version: e }) =>
          r.createElement(bo.s, {
            horizontal: !0,
            title: r.createElement(te.Z, {
              code: "diesel.library.settings.version",
            }),
            subtitle: r.createElement(
              "span",
              { style: { lineBreak: "anywhere" } },
              e,
            ),
          }),
        Yg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { installState: n } = (0, eu.e)(e, t, a),
            l = r.useMemo(() => (0, tu.pe)(n), [n]);
          return r.createElement(qg, { version: l });
        };
      var Jg = Object.defineProperty,
        Xg = Object.getOwnPropertySymbols,
        Qg = Object.prototype.hasOwnProperty,
        ev = Object.prototype.propertyIsEnumerable,
        tv = (e, t, a) =>
          t in e
            ? Jg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const av = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            n = (0, qe.useSelector)(Qd.LF),
            l = Pm(e, t, a),
            o = (0, Sm.a)(e, t, a),
            { installState: c } = (0, eu.e)(e, t, a),
            s = Wd(e, t, a),
            d = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, bd.wK)(),
                { installState: n } = (0, eu.e)(e, t, a),
                l = (0, r.useMemo)(() => (0, tu.aV)(n), [n]),
                o = (0, r.useMemo)(() => (0, tu.Gd)(n), [n]),
                i = (0, r.useMemo)(() => (0, tu.Pb)(n), [n]),
                c = (0, r.useMemo)(() => (0, tu.yK)(n), [n]);
              return (l || o) && !(i || c);
            })(),
            u = ((e) => {
              const { namespace: t } = (0, bd.wK)(),
                a = (0, Rm.l)({ sandboxId: t }),
                r = (0, i.c)(e);
              return Boolean(r && a);
            })({ suspense: !1 }),
            m = ((e) => {
              const { namespace: t } = (0, bd.wK)();
              return (
                (0, Wu.C)(
                  {
                    categories: [Uu.WD.ADDONS, Uu.WD.DIGITAL_EXTRAS],
                    sandboxId: t,
                  },
                  e,
                ).count > 0
              );
            })({ suspense: !1 }),
            p = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, bd.wK)(),
                r = (0, Ud.K)(e, t, a);
              return Gu(e, t, a, (null == r ? void 0 : r.productId) || "", {
                suspense: !1,
              });
            })(),
            b = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, bd.wK)(),
                { installState: n } = (0, eu.e)(e, t, a);
              return r.useMemo(() => (0, tu.aV)(n), [n]);
            })(),
            g = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, bd.wK)(),
                { installState: n } = (0, eu.e)(e, t, a),
                l = (0, $u.c)(e, t, a),
                o = (0, r.useMemo)(() => (0, Wo.mW)(l), [l]),
                i = (0, r.useMemo)(() => (0, tu.pe)(n), [n]);
              return (0, r.useMemo)(() => !o && Boolean(i), [o, i]);
            })(),
            v = (() => {
              const e = (0, bd.wK)(),
                t = (0, yt.o)();
              return !iu(t, e);
            })(),
            E = (() => {
              const { selectedCollectionId: e } = Cr(),
                t = (0, yt.o)();
              return e !== Et.U.ALL && e !== t;
            })(),
            y = (0, tu.aV)(c) && !(0, tu.Pb)(c) && s,
            f = (0, tu.Pb)(c) || (0, tu.t9)(c),
            h = u || m || p,
            O = b || g,
            C = y || f || d;
          if (n === va.v.ANONYMOUS || l)
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(Um, null),
              d && r.createElement(vo, null),
              d && r.createElement(Gg, null),
            );
          const I = r.createElement(
            r.Fragment,
            null,
            r.createElement(vo, null),
            v ? r.createElement(nu, null) : r.createElement($g, null),
            r.createElement(Nu, null),
            E && r.createElement(Zg, null),
          );
          if (o)
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(Um, null),
              I,
              b && r.createElement(vo, null),
              b && r.createElement(jg, null),
            );
          const w =
              h &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(vo, null),
                u && r.createElement(Dm, null),
                m && r.createElement(Fu, null),
                p && r.createElement(Vu, null),
              ),
            x =
              O &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(vo, null),
                b && r.createElement(jg, null),
                g && r.createElement(Yg, null),
              );
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(Um, null),
            I,
            w,
            C &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(vo, null),
                f &&
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(Au, null),
                    r.createElement(zm, null),
                  ),
                y &&
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(Ru, null),
                    r.createElement(Tm, null),
                    r.createElement(hg, null),
                    r.createElement(vg, null),
                    r.createElement(pg, null),
                  ),
                d && r.createElement(Gg, null),
              ),
            x,
          );
        },
        rv = r.forwardRef((e, t) => {
          var a = e,
            { id: n } = a,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                Qg.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Xg)
                for (var r of Xg(e))
                  t.indexOf(r) < 0 && ev.call(e, r) && (a[r] = e[r]);
              return a;
            })(a, ["id"]);
          return r.createElement(
            On.v,
            ((e, t) => {
              for (var a in t || (t = {})) Qg.call(t, a) && tv(e, a, t[a]);
              if (Xg) for (var a of Xg(t)) ev.call(t, a) && tv(e, a, t[a]);
              return e;
            })({ ref: t, id: n, dense: !0, noBorder: !0 }, l),
            r.createElement(av, null),
          );
        });
      var nv = Object.defineProperty,
        lv = Object.getOwnPropertySymbols,
        ov = Object.prototype.hasOwnProperty,
        iv = Object.prototype.propertyIsEnumerable,
        cv = (e, t, a) =>
          t in e
            ? nv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const sv = (0, m.i)(() => ({
          root: (0, b.iv)({ width: "max-content", minWidth: 280 }),
        })),
        dv = (e) => {
          var t = e,
            { id: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var r in e)
                ov.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && lv)
                for (var r of lv(e))
                  t.indexOf(r) < 0 && iv.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["id"]);
          const l = sv();
          return n().createElement(
            hn,
            ((e, t) => {
              for (var a in t || (t = {})) ov.call(t, a) && cv(e, a, t[a]);
              if (lv) for (var a of lv(t)) iv.call(t, a) && cv(e, a, t[a]);
              return e;
            })({}, r),
            n().createElement(
              "div",
              { className: l.root },
              n().createElement(rv, { id: a }),
            ),
          );
        };
      var uv = a(10499);
      const mv = ({ animation: e }) =>
          r.createElement(
            On.v,
            { dense: !0, noBorder: !0 },
            r.createElement(bo.s, {
              title: r.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "80%",
                height: "100%",
                animation: e,
              }),
            }),
            r.createElement(bo.s, {
              title: r.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "50%",
                animation: e,
              }),
            }),
            r.createElement(bo.s, {
              title: r.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "40%",
                animation: e,
              }),
            }),
            r.createElement(vo, null),
            r.createElement(bo.s, {
              title: r.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "50%",
                animation: e,
              }),
            }),
          ),
        pv = (e) => {
          const { activeMenu: t, setActiveMenu: a } = (0, cn.U)(),
            n = t === e,
            l = (0, r.useCallback)(() => a(n ? void 0 : e), [n, e, a]),
            o = (0, r.useCallback)(() => a(void 0), [a]);
          return { isOpen: n, toggleMenu: l, closeMenu: o };
        };
      var bv = Object.defineProperty,
        gv = Object.defineProperties,
        vv = Object.getOwnPropertyDescriptors,
        Ev = Object.getOwnPropertySymbols,
        yv = Object.prototype.hasOwnProperty,
        fv = Object.prototype.propertyIsEnumerable,
        hv = (e, t, a) =>
          t in e
            ? bv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ov = ({
        id: e,
        toggleClassName: t,
        menuClassName: a,
        renderMenu: n,
      }) => {
        const { isOpen: l, toggleMenu: o, closeMenu: i } = pv(e);
        return r.createElement(uv.L, {
          id: e,
          isOpen: l,
          onClose: i,
          popperConfig: { reversePlacement: !0 },
          renderToggle: (e) => {
            return r.createElement(
              "div",
              { className: t },
              r.createElement(
                mo,
                ((a = ((e, t) => {
                  for (var a in t || (t = {})) yv.call(t, a) && hv(e, a, t[a]);
                  if (Ev) for (var a of Ev(t)) fv.call(t, a) && hv(e, a, t[a]);
                  return e;
                })({}, e)),
                gv(a, vv({ onClick: o }))),
              ),
            );
            var a;
          },
          renderMenu: (e) =>
            r.createElement(
              "div",
              { className: a },
              r.createElement(
                Ye.n4,
                { fallback: r.createElement(mv, null) },
                n(e),
              ),
            ),
        });
      };
      var Cv = Object.defineProperty,
        Iv = Object.getOwnPropertySymbols,
        wv = Object.prototype.hasOwnProperty,
        xv = Object.prototype.propertyIsEnumerable,
        Sv = (e, t, a) =>
          t in e
            ? Cv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Pv = ({ id: e, toggleClassName: t, menuClassName: a }) =>
        r.createElement(Ov, {
          id: e,
          toggleClassName: t,
          menuClassName: a,
          renderMenu: (e) =>
            r.createElement(
              rv,
              ((e, t) => {
                for (var a in t || (t = {})) wv.call(t, a) && Sv(e, a, t[a]);
                if (Iv) for (var a of Iv(t)) xv.call(t, a) && Sv(e, a, t[a]);
                return e;
              })({}, e),
            ),
        });
      var kv = a(27429);
      const Nv = ({ children: e }) => {
        const { namespace: t, catalogItemId: a, appName: n } = (0, bd.wK)(),
          l = (0, $u.c)(t, a, n),
          { installState: o } = (0, eu.e)(t, a, n),
          i = (0, Pb.V)(t, a, n),
          c = r.useMemo(() => (0, Wo.X3)(l), [l]),
          s = r.useMemo(() => (0, Wo.X5)(l), [l]),
          d = (0, tu.HO)(o),
          u =
            (0, tu.aV)(o) && !(0, tu.Pb)(o)
              ? 1
              : null == o
                ? void 0
                : o.progress;
        return r.createElement(
          yl,
          {
            image: c
              ? r.createElement(kv.E, { alt: i, src: c, showBrokenOnError: !0 })
              : void 0,
            logo: s ? r.createElement(kv.E, { alt: i, src: s }) : void 0,
            percent: u,
            indeterminate: d,
          },
          e,
        );
      };
      var Lv = ((e) => (
        (e.BackgroundOverlay = "backgroundOverlay"),
        (e.AccentOverlay = "accentOverlay"),
        (e.Accent = "accent"),
        (e.Level1 = "level1"),
        (e.Level2 = "level2"),
        e
      ))(Lv || {});
      const jv = (0, m.i)((e, { variant: t }) => ({
          root: (0, b.iv)({
            display: "inline-block",
            lineHeight: 1,
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "baseline",
            padding: "5px 10px",
            borderRadius: U.E0,
            backgroundColor: e[t],
          }),
          pill: (0, b.iv)({ borderRadius: "50rem" }),
        })),
        Mv = ({
          children: e,
          variant: t = "backgroundOverlay",
          pill: a = !1,
        }) => {
          const n = jv({ variant: t }),
            l = (0, b.cx)(n.root, { [n.pill]: a });
          return r.createElement(
            "span",
            { className: l, "data-testid": "Badge" },
            r.createElement(Z.Z, null, e),
          );
        },
        Av = ({ count: e }) => {
          const t = "diesel.library.dlc" + (e > 1 ? ".plural" : "");
          return r.createElement(
            Mv,
            { variant: Lv.Level2 },
            r.createElement(te.Z, { code: t, args: [e] }),
          );
        };
      var Tv = Object.defineProperty,
        _v = Object.getOwnPropertySymbols,
        Dv = Object.prototype.hasOwnProperty,
        Rv = Object.prototype.propertyIsEnumerable,
        Bv = (e, t, a) =>
          t in e
            ? Tv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Zv = (e, t) => {
          for (var a in t || (t = {})) Dv.call(t, a) && Bv(e, a, t[a]);
          if (_v) for (var a of _v(t)) Rv.call(t, a) && Bv(e, a, t[a]);
          return e;
        };
      const Fv = (0, m.i)((e, t) => ({
          button: (0, b.iv)(
            Zv(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: fe.E0,
                height: 34,
                width: 43,
              },
              t && { color: e.textSecondary },
            ),
          ),
          count: (0, b.iv)(
            Zv(
              Zv(
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  borderRadius: fe.E0,
                  height: 24,
                  width: 35,
                  fontSize: 12,
                },
                !t && {
                  "button:hover &, button:focus &": { background: fe.yS },
                },
              ),
              t && {
                "button:hover &, button:focus &": { color: Ct.cM.contrast },
              },
            ),
          ),
        })),
        Uv = ({ count: e }) => {
          const t = (0, qe.useSelector)(It.e),
            a = r.useRef(null),
            n = Fv(t),
            { namespace: l, catalogItemId: o, appName: i } = (0, bd.wK)(),
            { gotoManageAddons: c } = bg(l, o, i),
            { installState: s } = (0, eu.e)(l, o, i),
            d = r.useMemo(() => (0, tu.aV)(s) && !(0, tu.Pb)(s), [s]),
            u = r.useCallback(() => c(), [l, c]);
          return r.useMemo(
            () =>
              d
                ? r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      ft.Z,
                      { className: n.button, onClick: u, ref: a },
                      r.createElement(
                        "div",
                        { className: n.count },
                        e >= 99 ? "99+" : e,
                      ),
                    ),
                    r.createElement(
                      rt.u,
                      { anchorRef: a, delay: 500 },
                      r.createElement(te.Z, {
                        code: "diesel.library.settings.manageDLC",
                      }),
                    ),
                  )
                : r.createElement(
                    "span",
                    { style: t ? { color: Ct.cM.secondary } : void 0 },
                    "-",
                  ),
            [d],
          );
        },
        Wv = (0, Al.L)(
          r.createElement(
            "g",
            null,
            r.createElement(
              "defs",
              null,
              r.createElement("path", {
                id: "heart",
                d: "M20.49 5.397C19.482 4.466 18.162 4 16.842 4c-1.32 0-2.64.466-3.647 1.397L12 6.503l-1.196-1.106C9.797 4.466 8.477 4 7.158 4c-1.32 0-2.64.466-3.647 1.397-2.013 1.861-2.015 4.878-.005 6.741L11.984 20l.016-.015.017.015 8.477-7.862c2.01-1.864 2.008-4.88-.005-6.74z",
              }),
              r.createElement(
                "mask",
                { id: "outerHeartOnly" },
                r.createElement("rect", {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                }),
                r.createElement("use", { xlinkHref: "#heart", fill: "black" }),
              ),
            ),
            r.createElement("use", {
              xlinkHref: "#heart",
              strokeWidth: "6",
              stroke: "rgb(245,245,245)",
              fill: "none",
              mask: "url(#outerHeartOnly)",
            }),
          ),
          "HeartOutline",
        );
      var Kv = Object.defineProperty,
        zv = Object.defineProperties,
        Vv = Object.getOwnPropertyDescriptors,
        $v = Object.getOwnPropertySymbols,
        Hv = Object.prototype.hasOwnProperty,
        Gv = Object.prototype.propertyIsEnumerable,
        qv = (e, t, a) =>
          t in e
            ? Kv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Yv = (e, t) => {
          for (var a in t || (t = {})) Hv.call(t, a) && qv(e, a, t[a]);
          if ($v) for (var a of $v(t)) Gv.call(t, a) && qv(e, a, t[a]);
          return e;
        };
      const Jv = (0, m.i)((e, { isInCollection: t, showFullIcon: a }) => {
          return {
            root: (0, b.iv)(
              ((r = Yv(
                {
                  position: "absolute",
                  height: 24,
                  width: 24,
                  opacity: t ? 1 : 0,
                },
                (0, nt.ip)("opacity"),
              )),
              (n = {
                pointerEvents: "all",
                "&:focus-within": { opacity: 1 },
                button: {
                  height: "100%",
                  width: "100%",
                  padding: 10,
                  borderWidth: "2px",
                  borderStyle: "solid inset solid solid",
                  borderColor: t ? "transparent" : e.textPrimary,
                  background: e.background,
                  "&:before": { border: "none" },
                  "&:focus": {
                    visibility: t ? "visible" : "hidden",
                    "&:before": { border: "none" },
                  },
                  "&:focus-visible": {
                    visibility: "visible",
                    borderColor: e.textPrimary,
                  },
                  "&:hover": {
                    borderColor: e.textPrimary,
                    "&:after": { background: e.background },
                  },
                  svg: { fontSize: a || t ? 14 : 12 },
                },
              }),
              zv(r, Vv(n))),
            ),
          };
          var r, n;
        }),
        Xv = ({
          className: e,
          onClick: t,
          onKeyDown: a,
          isInCollection: r = !1,
          isOnline: l,
        }) => {
          const [o, i] = n().useState(!1),
            c = Jv({ isInCollection: r, showFullIcon: o }),
            s = n().useCallback(() => {
              r || i(!0);
            }, [r]),
            d = n().useCallback(() => {
              r || i(!1);
            }, [r]),
            u = n().useCallback(() => {
              i(r);
            }, [r]);
          return n().createElement(
            "div",
            {
              className: (0, b.cx)(c.root, e),
              "data-wrapperid": "favoriteWrapper",
            },
            n().createElement(
              tt.h,
              {
                pill: !0,
                solid: !0,
                onMouseDown: t,
                onKeyDown: a,
                onMouseLeave: d,
                onMouseEnter: s,
                onFocus: u,
                onBlur: d,
                "data-testid": "favorite-btn",
                disabled: !l,
              },
              o || r
                ? n().createElement($o, null)
                : n().createElement(Wv, null),
            ),
          );
        },
        Qv = ({ className: e }) => {
          const t = (0, bd.wK)(),
            { namespace: a, catalogItemId: n, appName: l } = t,
            o = (0, Ud.K)(a, n, l),
            c = Zn(),
            s = iu(null == c ? void 0 : c.collectionId, t),
            d = au(),
            u = Mg(),
            m = (0, i.c)(),
            p = (e) => {
              c && o && (e ? u(c, o) : d(c, o));
            },
            b = r.useCallback(() => {
              p(s);
            }, [t, s]),
            g = r.useCallback(
              (e) => {
                e.key === gn.et.Enter && (e.preventDefault(), p(s));
              },
              [t, s],
            );
          return r.createElement(Xv, {
            className: e,
            isOnline: m,
            isInCollection: s,
            onClick: b,
            onKeyDown: g,
          });
        };
      var eE = a(92954),
        tE = ((e) => (
          (e.BLUE = "blue"),
          (e.DEFAULT = "black"),
          (e.GREEN = "green"),
          (e.PURPLE = "purple"),
          e
        ))(tE || {});
      const aE = {
          root: (0, b.iv)({
            letterSpacing: 1,
            padding: "2px 5px",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            "> span": { width: "100%" },
          }),
          lineClamp: (0, b.iv)({
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }),
          blue: (0, b.iv)({ backgroundColor: eE.St }),
          black: (0, b.iv)({ backgroundColor: eE.Fi }),
          green: (0, b.iv)({ backgroundColor: eE.$w }),
          purple: (0, b.iv)({ backgroundColor: eE.Yh }),
        },
        rE = ({ color: e = "black", children: t }) => {
          const a = (0, b.cx)(aE.root, aE[e]);
          return r.createElement(
            "div",
            { className: a, "data-testid": "StatusBar" },
            r.createElement(
              Z.Z,
              null,
              r.createElement("span", { className: aE.lineClamp }, t),
            ),
          );
        },
        nE = (e) => {
          switch (e.toUpperCase()) {
            case Qa.PP.Stage:
              return tE.BLUE;
            case Qa.PP.Live:
              return tE.PURPLE;
            default:
              return tE.GREEN;
          }
        },
        lE = () => {
          const { namespace: e, appName: t, catalogItemId: a } = (0, bd.wK)(),
            r = (0, Ud.K)(e, a, t);
          if (
            (null == r ? void 0 : r.sandboxType) === Qa.Dj.Private &&
            (null == r ? void 0 : r.sandboxName)
          ) {
            const e = r.sandboxName;
            return n().createElement(rE, { color: nE(e) }, e);
          }
          return null;
        };
      var oE = Object.defineProperty,
        iE = Object.defineProperties,
        cE = Object.getOwnPropertyDescriptors,
        sE = Object.getOwnPropertySymbols,
        dE = Object.prototype.hasOwnProperty,
        uE = Object.prototype.propertyIsEnumerable,
        mE = (e, t, a) =>
          t in e
            ? oE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        pE = (e, t) => {
          for (var a in t || (t = {})) dE.call(t, a) && mE(e, a, t[a]);
          if (sE) for (var a of sE(t)) uE.call(t, a) && mE(e, a, t[a]);
          return e;
        };
      const bE = ({
          namespace: e,
          catalogItemId: t,
          appName: a,
          defaultValue: n = "0B",
        }) => {
          const l = jb(e, t, a);
          return r.createElement(
            "span",
            { "data-testid": "InstallSizeOnDisk" },
            l || n,
          );
        },
        gE = () =>
          r.createElement(Ee.Od, {
            variant: Ee.Jy.Text,
            height: "100%",
            width: 50,
          }),
        vE = (e) =>
          r.createElement(
            Ye.n4,
            { fallback: r.createElement(gE, null) },
            r.createElement(bE, pE({}, e)),
          ),
        EE = ({ defaultValue: e }) => {
          const t = (0, bd.wK)();
          return r.createElement(
            vE,
            ((a = pE({}, t)), iE(a, cE({ defaultValue: e }))),
          );
          var a;
        };
      var yE = Object.defineProperty,
        fE = Object.getOwnPropertySymbols,
        hE = Object.prototype.hasOwnProperty,
        OE = Object.prototype.propertyIsEnumerable,
        CE = (e, t, a) =>
          t in e
            ? yE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        IE = (e, t) => {
          for (var a in t || (t = {})) hE.call(t, a) && CE(e, a, t[a]);
          if (fE) for (var a of fE(t)) OE.call(t, a) && CE(e, a, t[a]);
          return e;
        };
      const wE =
          ({
            Layout: e,
            SubtitleComponent: t,
            hasSettingsMenu: a = !0,
            isDark: n = !1,
            hasUpdate: l = !1,
            isGridView: o,
            useButtonAction: i,
          }) =>
          () => {
            const c = (0, bd.wK)(),
              { namespace: s, catalogItemId: d, appName: u } = c,
              m = `settings_${(0, td.ue)(s, d, u)}`,
              p = `${m}_context`,
              b = (0, od.E)(),
              g = i(c),
              v = (0, qe.useSelector)(tr.vR) || va.v.ANONYMOUS,
              E = r.useRef(null),
              { isOpen: y, closeMenu: f } = pv(m),
              {
                openContextMenu: h,
                openContextMenuWithKeyboard: O,
                contextMenuProps: C,
              } = Nn(p),
              I = a,
              w = r.useMemo(
                () =>
                  I
                    ? r.createElement(
                        dv,
                        IE({ id: p, anchorElement: E.current }, C),
                      )
                    : void 0,
                [p, C.anchorPosition, C.isOpen, C.onClose, I],
              ),
              x = r.useMemo(
                () =>
                  a
                    ? (e) =>
                        r.createElement(Pv, {
                          id: m,
                          toggleClassName: e.button,
                          menuClassName: e.menu,
                        })
                    : void 0,
                [m, a],
              );
            return r.createElement(e, {
              forwardedRef: E,
              title: r.createElement(cg.F, { hasTooltip: !0, lineClamp: !o }),
              subtitle: r.createElement(t, { isGridView: o }),
              image: r.createElement(Nv, null, r.createElement(lE, null)),
              renderFavorite: (e) => r.createElement(Qv, { className: e }),
              onContextMenu: I
                ? (e) => {
                    f(), h(e);
                  }
                : void 0,
              onKeyDown: I ? O : void 0,
              contextMenu: w,
              renderSettingsMenu: x,
              badges: b.length
                ? o
                  ? r.createElement(Av, { count: b.length })
                  : r.createElement(Uv, { count: b.length })
                : void 0,
              active: y || C.isOpen,
              darken: n,
              hasHover: !!g,
              hasUpdate: l,
              onClick: g,
              playtime: r.createElement(Ng, { defaultValue: "-" }),
              installSize: r.createElement(EE, { defaultValue: "-" }),
              achievements: v ? r.createElement(Xd, { isGridView: o }) : void 0,
            });
          },
        xE = (e) => ({
          GridCard: wE(IE({ Layout: Ql, isGridView: !0 }, e)),
          ListCard: wE(IE({ Layout: ms, isGridView: !1 }, e)),
        }),
        SE = xE({
          useButtonAction: ld,
          SubtitleComponent: nd.c,
          hasSettingsMenu: !0,
        });
      var PE = a(20766);
      const kE = (0, Tu.g)(
        "installWithOptions",
        ({ namespace: e, catalogId: t, appName: a, options: r }) =>
          (0, Ft.ZP)().installWithOptions(e, t, a, r),
      );
      const NE = (0, Tu.g)("chooseInstallLocation", (e) => {
          return (
            (t = void 0),
            (a = [e]),
            (r = function* ({ namespace: e, catalogId: t, appName: a }) {
              return (0, Ft.ZP)().chooseInstallLocation(e, t, a);
            }),
            new Promise((e, n) => {
              var l = (e) => {
                  try {
                    i(r.next(e));
                  } catch (e) {
                    n(e);
                  }
                },
                o = (e) => {
                  try {
                    i(r.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                i = (t) =>
                  t.done ? e(t.value) : Promise.resolve(t.value).then(l, o);
              i((r = r.apply(t, a)).next());
            })
          );
          var t, a, r;
        }),
        LE = (0, Tu.u)("install");
      var jE = a(51460);
      const ME = (0, m.i)(() => ({
          pathInfo: (0, b.iv)({
            margin: "10px 0 20px 0",
            width: "100%",
            wordBreak: "break-all",
          }),
          textLabel: (0, b.iv)((0, ne.wz)(4)),
          spacingTop: (0, b.iv)({ marginTop: 10 }),
          hasError: (0, b.iv)({ opacity: 1, height: "auto" }),
          autoUpdateLabel: (0, b.iv)((0, ne.oI)(10)),
          buttonDiv: (0, b.iv)({ marginTop: 20 }),
        })),
        AE = ({ path: e }) => {
          const t = ME();
          return r.createElement(
            "div",
            { className: t.pathInfo },
            r.createElement(
              "span",
              { className: t.textLabel },
              r.createElement(
                ae.ZP,
                { weight: ae.G0.BOLD, textLevel: F.N.SECONDARY },
                r.createElement(Ko.v0, {
                  code: "egstore.library.install_location_modal.path",
                }),
              ),
            ),
            r.createElement(
              "span",
              { "data-testid": "path" },
              r.createElement(ae.ZP, { textLevel: F.N.SECONDARY }, e),
            ),
          );
        },
        TE = ({
          directoryPath: e = "",
          downloadSize: t = "",
          error: a = "",
          hasInstallOptions: n = !1,
          isInstallDisabled: l = !1,
          onBrowseClick: o,
          onCancelClick: i,
          onInstallClick: c,
          onInstallOptionsClick: s,
          options: m,
          path: p = "",
          requiredSpace: b = "",
        }) => {
          const g = ME();
          return r.createElement(A.P, {
            header: r.createElement(
              _.x,
              { onCloseClick: i },
              r.createElement(
                ae.ZP,
                { weight: ae.G0.BOLD },
                r.createElement(Ko.v0, {
                  code: "egstore.library.install_location_modal.title",
                }),
              ),
            ),
            content: r.createElement(
              N,
              {
                spacing: 10,
                role: "form",
                "aria-label": "Choose Install Location",
              },
              r.createElement(
                L,
                { xs: 9 },
                r.createElement(ee, {
                  id: "directoryPath",
                  name: "directoryPath",
                  inputHeight: R.Ey.DENSED,
                  placeholder: "/",
                  value: e,
                  noBackground: !0,
                  readOnly: !0,
                  error: !!a,
                  helperText: a,
                  "data-testid": "directoryPath",
                  label: r.createElement(Ko.v0, {
                    code: "egstore.library.install_location_modal.folder",
                  }),
                }),
                n && r.createElement(AE, { path: p }),
              ),
              r.createElement(
                L,
                { xs: 3 },
                r.createElement(
                  "div",
                  { className: g.buttonDiv },
                  r.createElement(
                    Xn.gg,
                    {
                      buttonHeight: R.Ey.DENSED,
                      buttonWidth: R.WL.BLOCK,
                      onClick: o,
                      "data-testid": "BrowseButton",
                    },
                    r.createElement(
                      jE.Z,
                      null,
                      r.createElement(Ko.v0, {
                        code: "egstore.library.install_location_modal.browse",
                      }),
                    ),
                  ),
                  n &&
                    r.createElement(
                      "div",
                      { className: g.spacingTop },
                      r.createElement(
                        Jn.f5,
                        {
                          buttonHeight: R.Ey.DENSED,
                          buttonWidth: R.WL.BLOCK,
                          onClick: s,
                          "data-testid": "OptionsButton",
                        },
                        r.createElement(
                          jE.Z,
                          null,
                          r.createElement(Ko.v0, {
                            code: "egstore.library.install_location_modal.options",
                          }),
                        ),
                      ),
                    ),
                ),
              ),
              !n &&
                r.createElement(
                  L,
                  { xs: 12 },
                  r.createElement(AE, { path: p }),
                ),
              m,
            ),
            footer: r.createElement(
              T.m,
              {
                content: r.createElement(
                  "div",
                  null,
                  t &&
                    r.createElement(
                      d.x,
                      { alignItems: u.Ks.Center },
                      r.createElement(
                        "span",
                        { className: g.textLabel },
                        r.createElement(
                          Z.Z,
                          { textLevel: F.N.SECONDARY },
                          r.createElement(Ko.v0, {
                            code: "egstore.library.install_location_modal.download_size",
                          }),
                        ),
                      ),
                      r.createElement(
                        "span",
                        { "data-testid": "downloadSize" },
                        r.createElement(Z.Z, null, t),
                      ),
                    ),
                  b &&
                    r.createElement(
                      d.x,
                      { alignItems: u.Ks.Center },
                      r.createElement(
                        "span",
                        { className: g.textLabel },
                        r.createElement(
                          Z.Z,
                          { textLevel: F.N.SECONDARY },
                          r.createElement(Ko.v0, {
                            code: "egstore.library.install_location_modal.required_space",
                          }),
                        ),
                      ),
                      r.createElement(
                        "span",
                        { "data-testid": "requiredSpace" },
                        r.createElement(Z.Z, null, b),
                      ),
                    ),
                ),
              },
              r.createElement(
                M.d,
                { onClick: i, "data-testid": "CancelButton" },
                r.createElement(Ko.v0, {
                  code: "diesel.common.smart_button.cancel",
                }),
              ),
              r.createElement(
                j.N,
                { disabled: l, onClick: c, "data-testid": "InstallButton" },
                r.createElement(Ko.v0, {
                  code: "diesel.common.smart_button.install",
                }),
              ),
            ),
          });
        };
      var _E = Object.defineProperty,
        DE = Object.getOwnPropertySymbols,
        RE = Object.prototype.hasOwnProperty,
        BE = Object.prototype.propertyIsEnumerable,
        ZE = (e, t, a) =>
          t in e
            ? _E(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        FE = (e, t) => {
          for (var a in t || (t = {})) RE.call(t, a) && ZE(e, a, t[a]);
          if (DE) for (var a of DE(t)) BE.call(t, a) && ZE(e, a, t[a]);
          return e;
        };
      const UE = (e) =>
        r.createElement(ye, {
          hasHeader: !0,
          hasFooter: !0,
          hasPrimaryButton: !0,
          hasSecondaryButton: !0,
          titleWidth: 200,
          content: r.createElement(
            N,
            {
              spacing: 10,
              role: "form",
              "aria-label": "Choose Install Location",
            },
            r.createElement(
              L,
              { xs: 12 },
              r.createElement(
                Ee.Od,
                FE({ variant: Ee.Jy.Text, width: 50, height: 20 }, e),
              ),
            ),
            r.createElement(
              L,
              { xs: 9 },
              r.createElement(Ee.Od, FE({ width: "100%", height: 40 }, e)),
            ),
            r.createElement(
              L,
              { xs: 3 },
              r.createElement(Ee.Od, FE({ width: "100%", height: 40 }, e)),
            ),
            r.createElement(
              L,
              { xs: 12 },
              r.createElement(
                "div",
                { style: { margin: "20px 0" } },
                r.createElement(
                  Ee.Od,
                  FE({ variant: Ee.Jy.Text, width: "80%", height: 25 }, e),
                ),
              ),
            ),
          ),
        });
      var WE = a(4329);
      const KE = (0, m.i)(() => ({ textLabel: (0, b.iv)((0, ne.oI)(10)) })),
        zE = ({ ariaLabel: e, checked: t, id: a, label: n, onClick: l }) => {
          const o = KE();
          return r.createElement(
            L,
            { xs: 12 },
            r.createElement(
              d.x,
              { alignItems: u.Ks.Center },
              r.createElement(WE.X, {
                id: a,
                ariaLabel: e,
                checked: t,
                onClick: l,
              }),
              r.createElement(
                "span",
                { className: o.textLabel },
                r.createElement(
                  "label",
                  { htmlFor: a, "data-testid": "label" },
                  r.createElement(ae.ZP, null, n),
                ),
              ),
            ),
          );
        },
        VE =
          (e) =>
          ({ value: t, onClick: a }) => {
            const n = (0, Ko.ql)();
            return r.createElement(zE, {
              id: e.id,
              ariaLabel: n(e.titleCode),
              label: r.createElement(Ko.v0, { code: e.titleCode }),
              checked: t,
              onClick: a,
            });
          },
        $E = VE({
          id: "installAutoUpdate",
          titleCode: "egstore.library.install_location_modal.auto_update",
        }),
        HE = VE({
          id: "createShortcut",
          titleCode: "egstore.library.install_location_modal.create_shortcut",
        });
      var GE = a(63236);
      const qE = Vm("install-location-modal"),
        YE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            { closeModal: n, cancelModal: l, getData: o } = qE(),
            { additionalInstalls: i } = o() || {},
            c = NE(),
            s = Wm(),
            d = kE(),
            { installState: u } = (0, eu.e)(e, t, a),
            [m, p] = r.useState(!0),
            [b, g] = r.useState(!0),
            { path: v, directoryPath: E } = ((e, t, a) => {
              const { installState: n } = (0, eu.e)(e, t, a),
                l = r.useMemo(() => (0, tu.Kk)(n), [n]),
                o = r.useMemo(
                  () =>
                    ((e) => {
                      var t;
                      return (
                        (null == (t = e.match(/(.*)[\\/]/)) ? void 0 : t[1]) ||
                        ""
                      );
                    })(l),
                  [l],
                );
              return { path: l, directoryPath: o };
            })(e, t, a),
            y = ((e, t, a) => {
              const n = (0, $u.c)(e, t, a),
                { globalAutoUpdate: l } = (0, Hb.t)(),
                o = (0, r.useMemo)(() => (0, Wo.mW)(n), [n]),
                i = (0, r.useMemo)(
                  () => (0, Ht.Bv)(null == n ? void 0 : n.categories),
                  [n],
                );
              return !o && l && !i;
            })(e, t, a),
            f = (() => {
              const e = (0, qe.useSelector)(tr.ek);
              return e === $b.om.WINDOWS || e === $b.om.WIN32;
            })(),
            h = ((e, t, a) => {
              const { installState: n } = (0, eu.e)(e, t, a);
              return (0, r.useMemo)(() => (0, tu.t9)(n), [n]);
            })(e, t, a),
            { metadata: O } = ((e = "", t = "") => {
              const a = (0, qe.useDispatch)(),
                n = (0, r.useMemo)(() => (0, er.KG)(t), [t]),
                l = (0, qe.useSelector)(n),
                o = Boolean(e && t),
                i =
                  !(null == l ? void 0 : l.state) ||
                  (null == l ? void 0 : l.state) === GE.s.notAsked;
              return (
                (0, r.useEffect)(() => {
                  o && i && a((0, wc.X4)({ sandboxId: e, artifactId: t }));
                }, [o, i]),
                (0, r.useMemo)(
                  () => ({
                    metadata: null == l ? void 0 : l.latestValue,
                    query: {
                      isFetching:
                        (null == l ? void 0 : l.state) === GE.s.fetching,
                      isSuccess:
                        (null == l ? void 0 : l.state) === GE.s.success,
                    },
                  }),
                  [
                    null == l ? void 0 : l.latestValue,
                    null == l ? void 0 : l.state,
                  ],
                )
              );
            })(e, a),
            C = (0, tu.td)((null == O ? void 0 : O.downloadSizeBytes) || 0),
            I = (0, tu.td)((null == O ? void 0 : O.installedSizeBytes) || 0),
            w = r.useMemo(() => (0, tu.Ii)(u), [u]),
            x = r.useMemo(
              () => Boolean(!v || w),
              [v, null == u ? void 0 : u.stateerror],
            ),
            S = r.useCallback(() => {
              c({ namespace: e, catalogId: t, appName: a });
            }, [c, e, t, a]),
            P = r.useCallback(() => {
              s({ namespace: e, catalogId: t, appName: a });
            }, [s, e, t, a]),
            k = r.useCallback(() => {
              d({
                namespace: e,
                catalogId: t,
                appName: a,
                options: { autoUpdate: m, createShortcut: b },
              }),
                i &&
                  i.forEach((e) => {
                    d({
                      namespace: e.namespace,
                      catalogId: e.catalogItemId,
                      appName: e.appName,
                      options: { autoUpdate: m, createShortcut: b },
                    });
                  }),
                n();
            }, [n, d, e, t, a, m, b, i]);
          return r.createElement(TE, {
            isInstallDisabled: x,
            hasInstallOptions: h,
            onBrowseClick: S,
            onCancelClick: l,
            onInstallClick: k,
            onInstallOptionsClick: P,
            path: v,
            directoryPath: E,
            error: w,
            downloadSize: C,
            requiredSpace: I,
            options: r.createElement(
              r.Fragment,
              null,
              y &&
                r.createElement($E, { value: m, onClick: () => p((e) => !e) }),
              f &&
                r.createElement(HE, { value: b, onClick: () => g((e) => !e) }),
            ),
          });
        },
        JE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            n = LE(),
            { closeModal: l } = qE(),
            o = (0, Ft.ZP)().supportsWebClientInstallFlow(),
            { isThirdPartyManaged: i, triggerInstallToast: c } = (0, cm.K)(
              e,
              t,
              a,
            );
          return (
            r.useEffect(() => {
              (!i && o) ||
                (n({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: dc.Nd.MANAGE_PRODUCT_MODAL,
                }),
                i && c(),
                l());
            }, [i]),
            !i && o ? r.createElement(YE, null) : r.createElement(UE, null)
          );
        },
        XE = () => {
          const { isOpen: e, cancelModal: t, getData: a } = qE(),
            n = a();
          return n
            ? r.createElement(
                Le.u,
                { isOpen: e, onClose: t },
                r.createElement(
                  Ye.n4,
                  { fallback: r.createElement(UE, null) },
                  r.createElement(
                    bd.wi.Provider,
                    { value: n },
                    r.createElement(JE, null),
                  ),
                ),
              )
            : null;
        },
        QE = (e) => {
          const { namespace: t, catalogItemId: a, appName: n } = e,
            { openModal: l } = qE(),
            o = kE(),
            i = (0, Tb.R)(t, a, n),
            { isLaunchableAddon: c, install: s } = Rb(t, a, n),
            { installState: d } = (0, eu.e)(
              c ? (null == i ? void 0 : i.namespace) : "",
              c ? (null == i ? void 0 : i.catalogItemId) : "",
              c ? (null == i ? void 0 : i.appName) : "",
            );
          return (0, r.useCallback)(() => {
            const t = (0, tu.aV)(d),
              a = (0, tu.Pb)(d),
              r = (0, tu.Gd)(d);
            if (c && d)
              if ((0, Ft.ZP)().supportsLaunchableAddonsV2Flow()) {
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
        ey = xE({
          useButtonAction: QE,
          SubtitleComponent: PE.y,
          hasSettingsMenu: !0,
        }),
        ty = xE({
          useButtonAction: QE,
          SubtitleComponent: PE.v,
          hasSettingsMenu: !0,
        });
      var ay = a(47789);
      const ry = xE({
          useButtonAction: ay.v,
          SubtitleComponent: fl.L6,
          hasSettingsMenu: !0,
        }),
        ny = xE({
          useButtonAction: ay.v,
          SubtitleComponent: fl.WL,
          hasSettingsMenu: !0,
        }),
        ly = xE({
          useButtonAction: ay.v,
          SubtitleComponent: fl.YA,
          hasSettingsMenu: !0,
        });
      var oy = a(33506);
      const iy = xE({
        useButtonAction: ld,
        SubtitleComponent: oy.D,
        hasSettingsMenu: !1,
      });
      var cy = a(52687),
        sy = a(86680);
      const dy = xE({
        useButtonAction: sy.v,
        SubtitleComponent: cy.c,
        hasSettingsMenu: !0,
      });
      var uy = a(63366);
      const my = xE({
        useButtonAction: ({ namespace: e }) => {
          const { gotoProductHome: t } = Zm(e, { suspense: !1 });
          return t;
        },
        SubtitleComponent: uy.g,
        hasSettingsMenu: !0,
        isDark: !0,
      });
      var py = a(42113),
        by = a(89331);
      const gy = (0, by.f)(cb),
        vy = xE({
          useButtonAction: gy,
          SubtitleComponent: py.g,
          hasSettingsMenu: !1,
        });
      var Ey = a(19602);
      const yy = xE({
        useButtonAction: () => (0, vd.X)("UE"),
        SubtitleComponent: Ey.u,
        hasSettingsMenu: !1,
      });
      var fy = a(5190),
        hy = a(86416),
        Oy = a(66685);
      const Cy = (0, by.f)(fy.$),
        Iy = (0, by.f)(hy.z),
        wy = xE({
          useButtonAction: ld,
          SubtitleComponent: Oy.ob,
          hasSettingsMenu: !1,
        }),
        xy = xE({
          useButtonAction: Cy,
          SubtitleComponent: Oy.zQ,
          hasSettingsMenu: !0,
        }),
        Sy = xE({
          useButtonAction: Iy,
          SubtitleComponent: Oy.Jy,
          hasSettingsMenu: !0,
        }),
        Py = xE({
          useButtonAction: ld,
          SubtitleComponent: o.z,
          hasSettingsMenu: !1,
        });
      var ky = a(9800);
      const Ny = xE({
        useButtonAction: ld,
        SubtitleComponent: ky.V,
        hasSettingsMenu: !0,
      });
      var Ly = a(93088),
        jy = a(48912);
      const My = xE({
        useButtonAction: jy.m,
        SubtitleComponent: Ly.l,
        hasSettingsMenu: !0,
      });
      var Ay = a(60331);
      const Ty = xE({
        useButtonAction: ld,
        SubtitleComponent: Ay.i,
        hasSettingsMenu: !0,
      });
      var _y = a(92679);
      const Dy = xE({
        useButtonAction: ld,
        SubtitleComponent: _y.t,
        hasSettingsMenu: !0,
      });
      var Ry = a(40762);
      const By = xE({
        useButtonAction: ld,
        SubtitleComponent: Ry.K,
        hasSettingsMenu: !0,
      });
      xE({ useButtonAction: ld, SubtitleComponent: Ry.d, hasSettingsMenu: !0 });
      var Zy = a(52976);
      const Fy = xE({
        useButtonAction: ld,
        SubtitleComponent: Zy.i,
        hasSettingsMenu: !1,
      });
      var Uy = a(41015),
        Wy = a(99907);
      const Ky = xE({
        useButtonAction: Uy.e,
        SubtitleComponent: Wy.d,
        hasSettingsMenu: !0,
      });
      var zy = a(98405);
      const Vy = xE({
        useButtonAction: ld,
        SubtitleComponent: zy.l,
        hasSettingsMenu: !0,
      });
      var $y = a(31820);
      const Hy = xE({
        useButtonAction: ld,
        SubtitleComponent: $y.O,
        hasSettingsMenu: !0,
      });
      var Gy = a(48874),
        qy = a(10911);
      const Yy = xE({
        useButtonAction: qy.s,
        SubtitleComponent: Gy.I,
        hasSettingsMenu: !0,
        hasUpdate: !0,
      });
      var Jy = a(89701),
        Xy = a(29878);
      const Qy = (e) =>
          (0, um.b)(mm.M.Ubisoft, null == e ? void 0 : e.customAttributes),
        ef = xE({
          useButtonAction: ({ namespace: e, catalogItemId: t, appName: a }) => {
            const n = (0, qe.useDispatch)(),
              { uplayCodes: l } = (0, pm.Rb)(),
              o = (0, nm.c)(e, t, a, {
                includeMainGameItem: !0,
                includeHiddenAddons: !0,
              }),
              i = (0, r.useMemo)(() => {
                const e = o.map((e) => e.catalogItem);
                return (0, bm.D)(e.map(Qy)).filter(
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
                n((0, Xy.E)({ partnerGameIds: i }));
            }, [i, n]);
          },
          SubtitleComponent: Jy.o,
          hasSettingsMenu: !1,
        }),
        tf = () => {
          const e = (0, qe.useDispatch)();
          return (0, r.useCallback)(() => {
            e(Ps.ZP.startUplayLinkProcess());
          }, [e]);
        };
      var af = a(24859);
      const rf = xE({
        useButtonAction: tf,
        SubtitleComponent: af.H,
        hasSettingsMenu: !1,
      });
      var nf = a(73389),
        lf = a(18144),
        of = a(91139);
      const cf = (0, nf.o)({
          icon: r.createElement(of.Z, null),
          Component: lf.YU,
        }),
        sf = xE({
          useButtonAction: ld,
          SubtitleComponent: cf,
          hasSettingsMenu: !0,
        }),
        df = {
          [Mm.W.Banned]: SE,
          [Mm.W.CanInstall]: ey,
          [Mm.W.CanLaunch]: ry,
          [Mm.W.CanLaunchMultiple]: ny,
          [Mm.W.CanLaunchRestricted]: ly,
          [Mm.W.CanPreInstall]: ty,
          [Mm.W.CloudSyncing]: iy,
          [Mm.W.Corrupted]: dy,
          [Mm.W.ForceGet]: my,
          [Mm.W.ForceUninstall]: vy,
          [Mm.W.GotoHub]: yy,
          [Mm.W.Installing]: xy,
          [Mm.W.InstallingPaused]: Sy,
          [Mm.W.InstallingPreparing]: wy,
          [Mm.W.Loading]: Py,
          [Mm.W.Offline]: Ny,
          [Mm.W.PartiallyInstalled]: My,
          [Mm.W.PreInstalled]: Ty,
          [Mm.W.PrePurchased]: Dy,
          [Mm.W.Queued]: By,
          [Mm.W.QueuedForUpdate]: By,
          [Mm.W.Running]: Fy,
          [Mm.W.SelfUpdate]: Py,
          [Mm.W.SignIn]: Ky,
          [Mm.W.Unavailable]: Vy,
          [Mm.W.Unsupported]: Hy,
          [Mm.W.Update]: Yy,
          [Mm.W.UplaySignIn]: rf,
          [Mm.W.UplayRedeem]: ef,
          [Mm.W.WaitingInLine]: sf,
        };
      var uf = a(74737),
        mf = Object.defineProperty,
        pf = Object.getOwnPropertySymbols,
        bf = Object.prototype.hasOwnProperty,
        gf = Object.prototype.propertyIsEnumerable,
        vf = (e, t, a) =>
          t in e
            ? mf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ef = ({
          layout: e,
          namespace: t,
          catalogItemId: a,
          appName: n,
        }) => {
          const { GridCard: l, ListCard: o } = (({
              namespace: e,
              catalogItemId: t,
              appName: a,
            }) => {
              const r = jm(e, t, a);
              return df[r];
            })({ namespace: t, catalogItemId: a, appName: n }),
            i = r.useMemo(() => (e === Qa.ms.Grid ? l : o), [e, l, o]),
            c = r.useMemo(
              () => ({ namespace: t, catalogItemId: a, appName: n }),
              [t, a, n],
            );
          return r.createElement(
            bd.wi.Provider,
            { value: c },
            r.createElement(i, null),
          );
        },
        yf = (e) => {
          var t = e,
            { index: a = -1, layout: n } = t,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                bf.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && pf)
                for (var r of pf(e))
                  t.indexOf(r) < 0 && gf.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["index", "layout"]);
          const [o, i] = r.useState(a >= 0 && a < 24),
            c = (0, r.useCallback)(
              ({ isIntersecting: e }) => {
                i(e);
              },
              [i],
            ),
            s = r.useMemo(() => (n === Qa.ms.Grid ? ws : xs), [n]);
          return r.createElement(
            uf.ZP,
            { disabled: o, rootMargin: "50%", onChange: c },
            r.createElement(
              "div",
              null,
              o
                ? r.createElement(
                    Ye.n4,
                    { fallback: r.createElement(s, { animation: Ee.ru.None }) },
                    r.createElement(
                      Ef,
                      ((e, t) => {
                        for (var a in t || (t = {}))
                          bf.call(t, a) && vf(e, a, t[a]);
                        if (pf)
                          for (var a of pf(t)) gf.call(t, a) && vf(e, a, t[a]);
                        return e;
                      })({ layout: n }, l),
                    ),
                  )
                : r.createElement(s, { animation: Ee.ru.None }),
            ),
          );
        };
      var ff = a(50694);
      const hf = (0, m.i)(() => ({
          wrapper: (0, b.iv)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "192px 0 20px 0",
            button: { marginTop: 30 },
          }),
          title: (0, b.iv)({ width: 608 }),
        })),
        Of = () => {
          const e = hf(),
            { resetFilters: t } = br(),
            { selectedCollectionId: a } = Cr(),
            n = r.useMemo(
              () =>
                a === Et.U.ALL
                  ? "egstore.library.empty_filter_results.title.all"
                  : "egstore.library.empty_filter_results.title.collection",
              [a],
            ),
            l = r.useMemo(
              () =>
                a === Et.U.ALL
                  ? "egstore.library.empty_filter_results.button.all"
                  : "egstore.library.empty_filter_results.button.collection",
              [a],
            );
          return r.createElement(
            "div",
            {
              className: e.wrapper,
              "data-testid": "empty-filter-result-alert",
            },
            r.createElement(
              "div",
              { "aria-live": "polite", role: "alert", className: e.title },
              r.createElement(
                ff.Z.Heading,
                { headingLevel: 1 },
                r.createElement(te.Z, { code: n }),
              ),
            ),
            r.createElement(
              Jn.f5,
              { onClick: () => t() },
              r.createElement(te.Z, { code: l }),
            ),
          );
        },
        Cf = ({ pageSize: e, options: t, onChange: a, layout: r }) =>
          n().createElement(Kc.Z, {
            id: "page-size-dropdown",
            label: n().createElement(te.Z, {
              code: `egstore.library.page_size.title.${r.toLowerCase()}`,
            }),
            options: t,
            selectedValue: e,
            onChange: a,
          });
      var If = ((e) => (
        (e.Page = "page"),
        (e.Previous = "previous"),
        (e.StartEllipsis = "start-ellipsis"),
        (e.Next = "next"),
        (e.EndEllipsis = "end-ellipsis"),
        e
      ))(If || {});
      const wf = (e, t) => {
        const a = t - e + 1;
        return Array.from({ length: a }, (t, a) => e + a);
      };
      var xf = a(19451),
        Sf = a(79494),
        Pf = Object.defineProperty,
        kf = Object.getOwnPropertySymbols,
        Nf = Object.prototype.hasOwnProperty,
        Lf = Object.prototype.propertyIsEnumerable,
        jf = (e, t, a) =>
          t in e
            ? Pf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Mf = (e, t) => {
          for (var a in t || (t = {})) Nf.call(t, a) && jf(e, a, t[a]);
          if (kf) for (var a of kf(t)) Lf.call(t, a) && jf(e, a, t[a]);
          return e;
        };
      const Af = (0, m.i)((e) => ({
          delimiter: (0, b.iv)({ color: e.textSecondary }),
          number: (0, b.iv)({
            'button:hover:not([disabled]) &, button[aria-current="true"] &': {
              color: e.textPrimary,
              fontWeight: fe.Ue.bold,
            },
            "button:disabled &": { display: "none" },
          }),
          icon: (0, b.iv)((0, ne.N2)("rtl")),
        })),
        Tf = (e) => {
          var t = e,
            {
              page: a,
              selected: n = !1,
              disabled: l = !1,
              type: o = If.Page,
              onClick: i,
            } = t,
            c = ((e, t) => {
              var a = {};
              for (var r in e)
                Nf.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && kf)
                for (var r of kf(e))
                  t.indexOf(r) < 0 && Lf.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["page", "selected", "disabled", "type", "onClick"]);
          const s = Af(),
            d = ((e, t, a) => {
              const n = (0, oe.useLocalization)();
              return r.useMemo(
                () =>
                  e === If.Page
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
          return o === If.StartEllipsis || o === If.EndEllipsis
            ? r.createElement("div", { className: s.delimiter }, "…")
            : o === If.Previous
              ? r.createElement(
                  "div",
                  { className: s.icon, "data-testid": "previous" },
                  r.createElement(
                    tt.h,
                    Mf(
                      { disabled: l, onClick: () => i(a - 1), "aria-label": d },
                      c,
                    ),
                    r.createElement(xf.v, null),
                  ),
                )
              : o === If.Next
                ? r.createElement(
                    "div",
                    { className: s.icon, "data-testid": "next" },
                    r.createElement(
                      tt.h,
                      Mf(
                        {
                          disabled: l,
                          onClick: () => i(a + 1),
                          "aria-label": d,
                        },
                        c,
                      ),
                      r.createElement(Sf.E, null),
                    ),
                  )
                : r.createElement(
                    Xn.F6,
                    Mf(
                      Mf(
                        {
                          buttonWidth: R.WL.AUTO,
                          disabled: l,
                          onClick: () => i(a),
                          "aria-label": d,
                        },
                        c,
                      ),
                      n ? { "aria-current": !0 } : {},
                    ),
                    r.createElement(
                      B.Z,
                      { textLevel: F.N.SECONDARY },
                      r.createElement("span", { className: s.number }, a),
                    ),
                  );
        };
      var _f = a(6232),
        Df = Object.defineProperty,
        Rf = Object.defineProperties,
        Bf = Object.getOwnPropertyDescriptors,
        Zf = Object.getOwnPropertySymbols,
        Ff = Object.prototype.hasOwnProperty,
        Uf = Object.prototype.propertyIsEnumerable,
        Wf = (e, t, a) =>
          t in e
            ? Df(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Kf = {
          list: (0, b.iv)({
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }),
          listItem: (0, b.iv)({
            width: 50,
            textAlign: "center",
            "&:first-of-type": (0, ne.wz)(8),
          }),
        },
        zf = ({ page: e, totalPages: t, onClick: a }) => {
          const n = r.useRef(null),
            l = (0, oe.useLocalization)(),
            { items: o } = (({ totalPages: e, page: t }) => {
              const a = (0, r.useMemo)(() => wf(1, Math.min(1, e)), [e]),
                n = (0, r.useMemo)(() => wf(Math.max(e - 1 + 1, 2), e), [e]),
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
                    ...wf(l, o),
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
              _f.a,
              { data: o, className: Kf.list, itemClassName: Kf.listItem },
              (e, t) => {
                return r.createElement(
                  Tf,
                  ((n = ((e, t) => {
                    for (var a in t || (t = {}))
                      Ff.call(t, a) && Wf(e, a, t[a]);
                    if (Zf)
                      for (var a of Zf(t)) Uf.call(t, a) && Wf(e, a, t[a]);
                    return e;
                  })({}, e)),
                  (l = { onClick: a, key: `${e.page}-${t}` }),
                  Rf(n, Bf(l))),
                );
                var n, l;
              },
            ),
          );
        };
      var Vf = Object.defineProperty,
        $f = Object.getOwnPropertySymbols,
        Hf = Object.prototype.hasOwnProperty,
        Gf = Object.prototype.propertyIsEnumerable,
        qf = (e, t, a) =>
          t in e
            ? Vf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Yf = (e, t) => {
          for (var a in t || (t = {})) Hf.call(t, a) && qf(e, a, t[a]);
          if ($f) for (var a of $f(t)) Gf.call(t, a) && qf(e, a, t[a]);
          return e;
        };
      const Jf = {
          footer: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }),
          pagination: (0, b.iv)({
            [fe.Uc.lg]: Yf({}, (0, ne.wz)(31)),
            [fe.Uc.xl]: Yf({}, (0, ne.wz)(42)),
            [fe.Uc.maxWidth]: Yf({}, (0, ne.wz)(57)),
          }),
        },
        Xf = ({
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
          const d = a * l - l,
            u = d + 1,
            m = e < l ? e : l,
            p = d + m > e ? e : d + m,
            b = t > 1,
            g = Un(c),
            v = n().useMemo(
              () =>
                u === e
                  ? n().createElement(
                      "div",
                      { "data-testid": "shortened-text" },
                      n().createElement(te.Z, {
                        code: "egstore.library.hub.product.plugins.showing_last",
                        args: [u, e],
                      }),
                    )
                  : n().createElement(
                      "div",
                      { "data-testid": "full-text" },
                      n().createElement(te.Z, {
                        code: "egstore.library.hub.product.plugins.showing",
                        args: [u, p, e],
                      }),
                    ),
              [u, p, e],
            );
          n().useEffect(
            () => (l >= e || c !== g ? r(1) : a >= t ? r(t) : void 0),
            [l, e, c],
          );
          const E = n().useCallback(
            (e) => {
              a !== e && r(e),
                (0, ja.Y)().window.scrollTo({ top: 0, behavior: "smooth" });
            },
            [a, l, e],
          );
          return n().createElement(
            "div",
            { className: Jf.footer },
            n().createElement(ae.ZP, { textLevel: F.N.SECONDARY }, v),
            b &&
              n().createElement(
                "div",
                { className: Jf.pagination },
                n().createElement(zf, { page: a, totalPages: t, onClick: E }),
              ),
            e > i[0].value
              ? n().createElement(Cf, {
                  pageSize: l,
                  onChange: o,
                  options: i,
                  layout: s,
                })
              : null,
          );
        };
      var Qf = Object.defineProperty,
        eh = Object.defineProperties,
        th = Object.getOwnPropertyDescriptors,
        ah = Object.getOwnPropertySymbols,
        rh = Object.prototype.hasOwnProperty,
        nh = Object.prototype.propertyIsEnumerable,
        lh = (e, t, a) =>
          t in e
            ? Qf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const oh = ({ totalItems: e, options: t, key: a }) => {
        const l = (0, qe.useSelector)(tr.vR),
          o = t[0].value,
          [i, c] = (0, r.useState)(1),
          s = {
            keyFn: () => `${a}_${l || va.v.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          { value: d, setValue: u } = Xa(
            ((m = ((e, t) => {
              for (var a in t || (t = {})) rh.call(t, a) && lh(e, a, t[a]);
              if (ah) for (var a of ah(t)) nh.call(t, a) && lh(e, a, t[a]);
              return e;
            })({}, s)),
            eh(m, th({ initialValue: o }))),
          );
        var m;
        const p = (0, r.useMemo)(() => {
            const t = Math.ceil(e / (null != d ? d : o));
            return t > 0 ? t : 1;
          }, [e, d]),
          b = (0, r.useCallback)(
            (e) => {
              c((0, vn.Z)(1, p, e));
            },
            [p, c],
          ),
          g = (0, r.useCallback)(
            (e) => {
              u(e), c(1);
            },
            [u, c],
          ),
          v = n().useCallback(
            (e) =>
              ((e, t, a) => {
                const r = t * a - a;
                return e.slice(r, r + a);
              })(e, i, d),
            [d, i],
          );
        return {
          page: i,
          setPage: b,
          totalPages: p,
          pageSize: null != d ? d : o,
          setPageSize: g,
          applyPagination: v,
        };
      };
      var ih = ((e) => (
        (e.TEN = "TEN"),
        (e.TWELVE = "TWELVE"),
        (e.TWENTY_FOUR = "TWENTY_FOUR"),
        e
      ))(ih || {});
      var ch = a(8086),
        sh = a(61621),
        dh = a(21810),
        uh = a(95337);
      const mh = (0, Kt.Z)(
          (0, Yu.Z)((e) => {
            var t;
            return null != (t = null == e ? void 0 : e.id) ? t : null;
          }),
          (0, Bt.Z)(Zt.Z),
        ),
        ph = ({ offerItem: e, catalogItem: t }) => {
          const {
              offer: a,
              offerSubItems: n,
              isBundle: l,
            } = ((e) => {
              const { data: t } = (0, ch.wH)(
                  {
                    fields: [ch.Hd.items, ch.Hd.title, ch.Hd.categories],
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                ),
                { offerSubItems: a } = (0, sh.h)(
                  {
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                );
              return {
                offer: t,
                offerSubItems: a,
                isBundle: (0, Ht.Mf)(null == t ? void 0 : t.categories),
              };
            })(e),
            { records: o } = ua(),
            { data: i } = (0, uh.ab)(
              {
                fields: [uh.eZ.title],
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
                      const n = mh(
                          null != (r = null == t ? void 0 : t.items) ? r : [],
                        ),
                        l = mh(null != a ? a : []);
                      return (0, dh.Z)([...n, ...l]);
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
      var bh = a(75299),
        gh = Object.defineProperty,
        vh = Object.defineProperties,
        Eh = Object.getOwnPropertyDescriptors,
        yh = Object.getOwnPropertySymbols,
        fh = Object.prototype.hasOwnProperty,
        hh = Object.prototype.propertyIsEnumerable,
        Oh = (e, t, a) =>
          t in e
            ? gh(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ch = ({ setSortType: e }) => {
        const {
            sort: t,
            offerItem: a,
            catalogItem: n,
            collectionId: l,
            resetQueryParams: o,
          } = oi(),
          { catalogItemIds: i, title: c } = ph({
            offerItem: a,
            catalogItem: n,
          }),
          { setSelectedFilters: s } = br(),
          { setValue: d } = Xa({
            keyFn: () => Qa.Cd,
            localStorageEnabled: !0,
            initialValue: "",
          });
        (0, r.useEffect)(() => {
          var a, r;
          t === bh.D.PurchaseDate && i.length && c
            ? (e(Qa.ER.Recent_Purchased),
              s(
                ((a = ((e, t) => {
                  for (var a in t || (t = {})) fh.call(t, a) && Oh(e, a, t[a]);
                  if (yh) for (var a of yh(t)) hh.call(t, a) && Oh(e, a, t[a]);
                  return e;
                })({}, pa)),
                (r = { [ma.CATALOG_ITEM_ID]: i }),
                vh(a, Eh(r))),
              ),
              d(c))
            : t === bh.D.PurchaseDate && l === Et.U.ALL
              ? (s(pa), e(Qa.ER.Recent_Purchased), o())
              : t === bh.D.PurchaseDate && (e(Qa.ER.Recent_Purchased), o());
        }, [t, i, c, l]);
      };
      var Ih = Object.defineProperty,
        wh = Object.defineProperties,
        xh = Object.getOwnPropertyDescriptors,
        Sh = Object.getOwnPropertySymbols,
        Ph = Object.prototype.hasOwnProperty,
        kh = Object.prototype.propertyIsEnumerable,
        Nh = (e, t, a) =>
          t in e
            ? Ih(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Lh = ({ layout: e, setLayout: t }) => {
          const { selectedCollectionId: a, setSelectedCollectionId: n } = Cr(),
            {
              selectedFilters: l,
              setSelectedFilters: o,
              applySelectedFilters: i,
            } = br(),
            { records: c, query: s } = ua(a),
            d = (0, yt.o)(),
            u = (0, qe.useSelector)(tr.vR),
            {
              sortType: m,
              setSortType: p,
              applySortType: b,
            } = ((e) =>
              Wc({
                keyFn: () => `${Qa.rv}_${e || va.v.ANONYMOUS}`,
                localStorageEnabled: !0,
              }))(u),
            g = (0, tl.dD)(),
            v = ((e) => {
              const t =
                  (0, oe.useLocalization)()("egstore.library.filter.all") ||
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
            })(ih.TWENTY_FOUR),
            E = (0, ai.useHistory)();
          Ch({ setSortType: p });
          const y = r.useMemo(() => (0, Kt.Z)(i, b)(c), [c, b, i]),
            f = y.length,
            {
              page: h,
              setPage: O,
              totalPages: C,
              pageSize: I,
              setPageSize: w,
              applyPagination: x,
            } = oh({
              totalItems: f,
              options: v,
              key: Qa.Bi.EGS_LIBRARY_PAGE_SIZE,
            }),
            S = r.useMemo(() => x(y), [x, y]);
          r.useEffect(() => {
            O(1);
          }, [m, l, a]),
            r.useEffect(() => {
              const e = E.listen((e) => {
                var t, a;
                e.pathname.includes(li.s.LibraryPath) ||
                  o(
                    ((t = ((e, t) => {
                      for (var a in t || (t = {}))
                        Ph.call(t, a) && Nh(e, a, t[a]);
                      if (Sh)
                        for (var a of Sh(t)) kh.call(t, a) && Nh(e, a, t[a]);
                      return e;
                    })({}, l)),
                    (a = { [ma.CATALOG_ITEM_ID]: [] }),
                    wh(t, xh(a))),
                  );
              });
              return () => {
                e();
              };
            }, [l]);
          const P = () => {
              n(Et.U.ALL), p(Qa.ER.Recent_Played);
            },
            k = () => {
              n(Et.U.ALL), p(Qa.ER.Time_Played);
            },
            N = r.useMemo(() => g || !c.length, [g, c]),
            L = nr(l),
            j = rr(l),
            M = r.useMemo(() => ar(l), [l]),
            A = !L && c.length < 2 && !M && !j,
            T = L && N,
            _ = (j || M) && !y.length && !N,
            D = r.useMemo(
              () =>
                a === d
                  ? r.createElement(Ho, { onActionClick: k })
                  : r.createElement(Vo, { onActionClick: P }),
              [a, d],
            );
          return s.isFetching && !c.length
            ? r.createElement(rd, { layout: e })
            : r.createElement($s, {
                header: r.createElement(Vc, {
                  layoutType: e,
                  onLayoutChange: t,
                  sortType: m,
                  onSortChange: p,
                }),
                footer: S.length
                  ? r.createElement(Xf, {
                      totalItems: f,
                      totalPages: C,
                      page: h,
                      setPage: O,
                      pageSize: I,
                      setPageSize: w,
                      options: v,
                      layout: e,
                      keyword: l[ma.KEYWORD],
                    })
                  : null,
                items: S,
                totalItems: f,
                shouldShowEmptyLibraryCard: A,
                renderFilterSidePanel: N ? null : r.createElement(ic, null),
                renderEmptySearch: _ ? r.createElement(Of, null) : null,
                renderEmptyCollection: T ? D : null,
                layout: e,
                renderItem: (
                  { namespace: t, catalogItemId: a, appName: n },
                  l,
                ) =>
                  r.createElement(yf, {
                    index: l,
                    namespace: t,
                    catalogItemId: a,
                    appName: n,
                    layout: e,
                  }),
              });
        },
        jh = () => {
          const { layoutType: e, setLayoutType: t, isLoaded: a } = Qc();
          return r.createElement(
            r.Fragment,
            null,
            a &&
              e &&
              r.createElement(
                Ye.n4,
                { fallback: r.createElement(rd, { layout: e }) },
                r.createElement(Lh, { layout: e, setLayout: t }),
              ),
          );
        },
        Mh = ({ animation: e }) => {
          const t = (0, tl.dD)();
          return n().createElement($s, {
            header: n().createElement(Ss, { animation: e }),
            footer: n().createElement(ed, { animation: e }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: t
              ? null
              : n().createElement(rc, { animation: e }),
          });
        };
      var Ah = a(77800),
        Th = Object.defineProperty,
        _h = Object.defineProperties,
        Dh = Object.getOwnPropertyDescriptors,
        Rh = Object.getOwnPropertySymbols,
        Bh = Object.prototype.hasOwnProperty,
        Zh = Object.prototype.propertyIsEnumerable,
        Fh = (e, t, a) =>
          t in e
            ? Th(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Uh = (e, t) => {
          for (var a in t || (t = {})) Bh.call(t, a) && Fh(e, a, t[a]);
          if (Rh) for (var a of Rh(t)) Zh.call(t, a) && Fh(e, a, t[a]);
          return e;
        };
      const Wh = (0, b.F4)({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        }),
        Kh = (0, m.i)((e) => {
          return {
            buttonDiv: (0, b.iv)({
              button:
                ((t = Uh({}, (0, nt.ip)("opacity"))),
                (a = {
                  color: e.textPrimary,
                  opacity: 0.4,
                  "&:hover, &:active, &:focus": { opacity: 1 },
                }),
                _h(t, Dh(a))),
            }),
            icon: (0, b.iv)({ fontSize: 17 }),
            spin: (0, b.iv)({ svg: { animation: `${Wh} 2s linear infinite` } }),
          };
          var t, a;
        }),
        zh = ({ onClick: e, disabled: t, animateIcon: a }) => {
          const n = (0, oe.useLocalization)(),
            l = r.useRef(null),
            o = n("egstore.library.reload.a11y.reload_library"),
            i = Kh();
          return r.createElement(
            "div",
            { className: i.buttonDiv },
            r.createElement(
              Ah.Z,
              {
                "aria-label": o,
                onClick: e,
                disabled: t,
                "data-testid": "reload-button",
                buttonWidth: R.WL.AUTO,
                forwardRef: l,
              },
              r.createElement(
                "span",
                { className: (0, b.cx)({ [i.icon]: !0, [i.spin]: a }) },
                r.createElement(Tl, null),
              ),
            ),
            r.createElement(
              rt.u,
              { anchorRef: l },
              r.createElement(te.Z, {
                code: "egstore.library.reload.reload_library",
              }),
            ),
          );
        },
        Vh = (0, m.i)(() => ({
          root: (0, b.iv)({ marginTop: 10, marginBottom: 34 }),
          title: (0, b.iv)((0, ne.wz)(3)),
        })),
        $h = ({ reloadButton: e }) => {
          const t = Vh();
          return r.createElement(
            d.x,
            { alignItems: u.Ks.Center, className: t.root },
            r.createElement(
              "div",
              { className: t.title },
              r.createElement(
                ff.Z.Heading,
                { headingLevel: 1 },
                r.createElement(te.Z, {
                  code: "diesel.common.page.library.title",
                }),
              ),
            ),
            e,
          );
        },
        Hh = (e) => {
          const t = (() => {
              const e = (0, qe.useDispatch)();
              return (0, r.useCallback)(() => {
                e((0, wc.kQ)());
              }, [e]);
            })(),
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
        },
        Gh = () => {
          const { query: e } = ua(),
            { isReloading: t, reloadLibrary: a } = Hh(e.isFetching),
            n = (0, i.c)();
          return r.createElement($h, {
            reloadButton: n
              ? r.createElement(zh, { onClick: a, disabled: t, animateIcon: t })
              : void 0,
          });
        },
        qh = ({ animation: e }) =>
          r.createElement($h, {
            reloadButton: r.createElement(Ee.Od, {
              width: 57,
              height: 40,
              animation: e,
              style: { marginLeft: 10 },
            }),
          }),
        Yh = () =>
          n().createElement(
            n().Fragment,
            null,
            n().createElement(et, null),
            n().createElement(on, null),
          ),
        Jh = ({ title: e, onRetryClick: t, onCancelClick: a }) =>
          n().createElement($r, {
            modalTitle: n().createElement(te.Z, {
              code: "diesel.common.smart_button.uninstall",
            }),
            title: n().createElement(te.Z, {
              code: "egstore.library.uninstall_close_instances.text_question",
              args: [e],
            }),
            secondaryButton: n().createElement(
              M.d,
              { onClick: a },
              n().createElement(te.Z, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: n().createElement(
              j.N,
              { onClick: t },
              n().createElement(te.Z, {
                code: "diesel.common.smart_button.retry",
              }),
            ),
            onCloseClick: a,
          });
      var Xh = Object.defineProperty,
        Qh = Object.defineProperties,
        eO = Object.getOwnPropertyDescriptors,
        tO = Object.getOwnPropertySymbols,
        aO = Object.prototype.hasOwnProperty,
        rO = Object.prototype.propertyIsEnumerable,
        nO = (e, t, a) =>
          t in e
            ? Xh(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        lO = (e, t) => {
          for (var a in t || (t = {})) aO.call(t, a) && nO(e, a, t[a]);
          if (tO) for (var a of tO(t)) rO.call(t, a) && nO(e, a, t[a]);
          return e;
        },
        oO = (e, t) => Qh(e, eO(t));
      const iO = (e) =>
          r.createElement(
            ye,
            oO(lO({}, e), {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: r.createElement(
                d.x,
                {
                  alignItems: u.Ks.Center,
                  justify: u.jf.Center,
                  fillParent: !0,
                },
                r.createElement(
                  d.x,
                  { direction: u.jO.Column, alignItems: u.Ks.Center },
                  r.createElement(
                    Ee.Od,
                    lO({ variant: Ee.Jy.Text, width: 500, height: 50 }, e),
                  ),
                  r.createElement(
                    Ee.Od,
                    oO(lO({ variant: Ee.Jy.Text, width: 300, height: 50 }, e), {
                      style: { margin: "-10px 0 0" },
                    }),
                  ),
                ),
              ),
            }),
          ),
        cO = Vm("uninstall-close-instances-modal"),
        sO = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, bd.wK)(),
            r = (0, Pb.V)(e, t, a),
            { closeModal: l, cancelModal: o } = cO(),
            i = cb(),
            c = n().useCallback(() => {
              l(),
                i({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: dc.Nd.MANAGE_PRODUCT_MODAL,
                  options: { disableConfirmation: !0 },
                });
            }, [l, i, e, t, a]);
          return n().createElement(Jh, {
            title: r,
            onRetryClick: c,
            onCancelClick: o,
          });
        },
        dO = () => {
          const { isOpen: e, cancelModal: t, getData: a } = cO(),
            r = a();
          return r
            ? n().createElement(
                Le.u,
                { isOpen: e, onClose: t },
                n().createElement(
                  Ye.n4,
                  { fallback: n().createElement(iO, null) },
                  n().createElement(
                    bd.wi.Provider,
                    { value: r },
                    n().createElement(sO, null),
                  ),
                ),
              )
            : null;
        },
        uO = () => {
          const { action: e, item: t } = oi(),
            { openModal: a } = qE();
          n().useEffect(() => {
            e === bh.M.Install && t && a(t);
          }, [e, t]);
          const { isOpen: r, openModal: l } = cO();
          return (
            n().useEffect(
              () =>
                (0, Ft.ZP)()
                  .getEmitter()
                  .subscribe(
                    () => "LibraryItemModalsSection",
                    Ft.Rl.UninstallRetry,
                    (e) => {
                      e &&
                        !r &&
                        l({
                          namespace: e.namespace,
                          catalogItemId: e.catalogid,
                          appName: e.appname,
                        });
                    },
                  ),
              [],
            ),
            n().createElement(
              n().Fragment,
              null,
              n().createElement(XE, null),
              n().createElement(ug, null),
              n().createElement(Lb, null),
              n().createElement(dO, null),
            )
          );
        },
        mO = () =>
          n().createElement(
            n().Fragment,
            null,
            n().createElement(
              Ye.n4,
              { fallback: n().createElement(qh, null) },
              n().createElement(Gh, null),
            ),
            n().createElement(
              Ye.n4,
              { fallback: null },
              n().createElement(el, null),
            ),
            n().createElement(
              Ye.n4,
              { fallback: n().createElement($n, null) },
              n().createElement(Vn, null),
            ),
            n().createElement(
              Ye.n4,
              { fallback: n().createElement(Mh, null) },
              n().createElement(jh, null),
            ),
            n().createElement(uO, null),
            n().createElement(Yh, null),
          );
      var pO = a(15141),
        bO = a(17653);
      const gO = (0, pO.xo)("hook-mounted");
      let vO = !1;
      const EO = (0, Na.uB)("useMeasureLibraryRenderTime"),
        yO = (0, pO.xo)("render-sync"),
        [fO, hO] = (0, pO.sM)("render-duration-sync"),
        OO = (0, pO.xo)("render-async"),
        [CO, IO] = (0, pO.sM)("render-duration-async");
      function wO({
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
            EO.log("querying for predicate time: " + (performance.now() - o)),
              i &&
                (EO.log("non observer paint start"),
                performance.mark(a.start, { detail: { componentName: t } }),
                r("measuring"),
                setTimeout(() => {
                  EO.log("non observer paint end"),
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
      var xO = a(14951);
      const SO = () => {
        const e = n().useRef(null),
          t = (0, Ko.ql)();
        return (
          (function () {
            const e = (0, qe.useSelector)(bO.S);
            n().useEffect(() => {
              if (!e) return;
              if (ka.r2.isSsr()) return;
              if (vO)
                return void console.warn(
                  "useLibraryPerformance is already mounted. Please ensure only one instance of this hook exists at any point",
                );
              const t = new pO.SH();
              return (
                t.connect(),
                (vO = !0),
                performance.mark(gO),
                () => {
                  t.disconnect(), (vO = !1);
                }
              );
            }, []);
          })(),
          (function (e, t, a) {
            const r = (0, qe.useSelector)(bO.S),
              l = n().useRef("idle");
            n().useEffect(() => {
              if (!r) return;
              if (ka.r2.isSsr())
                return void EO.log("skipping measuring of render time on SSR.");
              function n(e) {
                l.current = e;
              }
              EO.log("starting useMeasureLibraryRenderTime"),
                wO({
                  dom: e,
                  componentName: t,
                  labels: { start: fO, end: hO, timeFromPageLoad: yO },
                  stateChangeCallback: n,
                  predicate: a,
                });
              const o = performance,
                i = new MutationObserver((r, i) => {
                  (performance = o),
                    "complete" !== l.current
                      ? "measuring" !== l.current &&
                        wO({
                          dom: e,
                          componentName: t,
                          labels: { start: CO, end: IO, timeFromPageLoad: OO },
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
              const a = e(o.C),
                r = new RegExp(`\\b${a}\\b`, "i"),
                n = t.querySelector(`[data-component=${l.c}]`),
                i = null == n ? void 0 : n.textContent;
              return !!i && null === i.match(r);
            })(t),
          ),
          n().createElement(
            xO.z,
            null,
            n().createElement("div", { ref: e }, n().createElement(mO, null)),
          )
        );
      };
    },
    30052: (e, t, a) => {
      e.exports = a.p + "d71da1c195d3183df5799e7892e9b1a1.png";
    },
  },
]);
//# sourceMappingURL=ManageProductsPage.egstore-site.da2064304dd91798062a.js.map
