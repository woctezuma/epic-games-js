(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [481],
  {
    62645: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => sO });
      var n = a(45418),
        r = a.n(n),
        l = a(30423),
        o = a(71232),
        i = a(98988),
        c = a(39977);
      const s = (e) => () => {
        const {
          isOpenById: t,
          openModalById: a,
          closeModalById: r,
          getData: l,
        } = (0, c.vR)();
        return (0, n.useMemo)(
          () => ({
            isOpen: t(e),
            openModal: (t) => a(e, t),
            closeModal: () => r(e),
            cancelModal: () => r(e, c.tn.Cancel),
            getData: () => l(e),
          }),
          [t, a, r, l],
        );
      };
      var d = a(61629),
        u = a(77135),
        m = a(92270),
        p = a(13405),
        b = a(28901),
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
          for (var n in e) f.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && y)
            for (var n of y(e))
              t.indexOf(n) < 0 && h.call(e, n) && (a[n] = e[n]);
          return a;
        };
      const w = [p.Uo.xs, p.Uo.sm, p.Uo.md, p.Uo.lg, p.Uo.xl, p.Uo.xxl],
        x = (e) =>
          w.reduce(
            (t, a) => (
              (0, g.Z)(1, e + 1).forEach((n) => {
                t[`&.egs-span-${a}-${n}`] =
                  "xs" === a
                    ? { width: (n / e) * 100 + "%" }
                    : { [p.Uc[a]]: { width: (n / e) * 100 + "%" } };
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
            { children: a, spacing: r = 0, columns: l = 12 } = t,
            o = I(t, ["children", "spacing", "columns"]);
          const i = P({ columns: l, spacing: r }),
            c = (0, v.Z)(["className"], o);
          return n.createElement(d.x, C({ className: i.root }, c), a);
        },
        L = (e) => {
          var t = e,
            { children: a, xs: r, sm: l, md: o, lg: i, xl: c, xxl: s } = t,
            u = I(t, ["children", "xs", "sm", "md", "lg", "xl", "xxl"]);
          const m = k(),
            p = (0, b.cx)(m.root, "egs-grid-item", {
              [m.autoLayout]: !0 === r,
              [`egs-span-xs-${r}`]: !!r,
              [`egs-span-sm-${l}`]: !!l,
              [`egs-span-md-${o}`]: !!o,
              [`egs-span-lg-${i}`]: !!i,
              [`egs-span-xl-${c}`]: !!c,
              [`egs-span-xxl-${s}`]: !!s,
            }),
            g = (0, v.Z)(["className"], u);
          return n.createElement(d.E, C({ className: p }, g), a);
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
        H = Object.getOwnPropertyDescriptors,
        $ = Object.getOwnPropertySymbols,
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
          if ($) for (var a of $(t)) q.call(t, a) && Y(e, a, t[a]);
          return e;
        };
      const X = J({}, R.Ey),
        Q = (0, m.i)(
          (e, { background: t, noBackground: a, noBorder: n, error: r }) => ({
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
                n
                  ? {}
                  : {
                      border: `1px solid ${
                        r ? K.g[e.mode].error : e.textSecondary
                      }`,
                      "&:not(:focus)": {
                        borderColor: r ? K.g[e.mode].error : e.textSecondary,
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
              error: r = !1,
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
              for (var n in e)
                G.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && $)
                for (var n of $(e))
                  t.indexOf(n) < 0 && q.call(e, n) && (a[n] = e[n]);
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
              error: r,
            }),
            g = (0, b.cx)(p.input, D.Z.buttonHeights[i]),
            v = n.useRef(null);
          return (
            n.useEffect(() => {
              u && v.current && v.current.focus();
            }, []),
            n.createElement(
              "div",
              J(
                { className: p.root, "data-testid": "TextInput" },
                r ? { "data-haserror": !0 } : {},
              ),
              c &&
                n.createElement(
                  "label",
                  { htmlFor: o },
                  n.createElement(
                    "div",
                    { className: p.label },
                    n.createElement(Z.Z, null, c),
                  ),
                ),
              n.createElement(
                "input",
                J(
                  ((E = J({}, m)),
                  V(E, H({ ref: v, className: g, type: "text" }))),
                  r && l ? { "aria-errormessage": l } : {},
                ),
              ),
              n.createElement(
                "div",
                {
                  className: (0, b.cx)(
                    p.helperText,
                    r ? p.errorColor : p.helperColor,
                  ),
                },
                n.createElement(
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
        ne = a(75364),
        re = a(34272),
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
              ((a = be({ position: "absolute" }, (0, re.F2)(20))),
              (n = { top: 30, zIndex: le.W.overlay, [p.Uc.lg]: { top: 35 } }),
              ce(a, se(n))),
            ),
          };
          var a, n;
        }),
        ve = ({
          isEditing: e,
          hasError: t,
          onCancelClick: a,
          onCreateClick: n,
          onValueChange: l,
          setHasError: o,
          value: i,
        }) => {
          const c = (0, oe.useLocalization)(),
            [s, m] = r().useState(25),
            p = ge(e);
          return (
            r().useEffect(() => {
              i.length && m(25 - i.length);
            }, [i]),
            r().createElement(A.P, {
              header: r().createElement(
                _.x,
                { onCloseClick: a },
                r().createElement(
                  ae.ZP,
                  { weight: ae.G0.BOLD },
                  r().createElement(te.Z, {
                    code: e
                      ? "egstore.library.collections_modal.create_edit.edit_collection"
                      : "egstore.library.collections_modal.create_edit.new_collection",
                  }),
                ),
              ),
              content: r().createElement(
                N,
                {
                  role: "form",
                  "aria-label": "Create Edit Collection",
                  justify: u.jf.Center,
                  alignItems: u.Ks.Center,
                  direction: u.jO.Column,
                  fillParent: !0,
                },
                r().createElement(
                  L,
                  null,
                  r().createElement(
                    ne.Z.Heading,
                    { headingLevel: 1 },
                    r().createElement(
                      "div",
                      { className: p.heading },
                      r().createElement(te.Z, {
                        code: e
                          ? "egstore.library.collections_modal.create_edit.edit_title"
                          : "egstore.library.collections_modal.create_edit.title",
                      }),
                    ),
                  ),
                ),
                !e &&
                  r().createElement(
                    L,
                    null,
                    r().createElement(
                      ae.ZP,
                      null,
                      r().createElement(te.Z, {
                        code: "egstore.library.collections_modal.create_edit.text",
                      }),
                    ),
                  ),
                r().createElement(
                  L,
                  { xs: 8 },
                  r().createElement(
                    "div",
                    { className: p.inputDiv },
                    r().createElement(ee, {
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
                      label: r().createElement(te.Z, {
                        code: "egstore.library.collections_modal.create_edit.label",
                      }),
                    }),
                    r().createElement(
                      "div",
                      { className: p.count },
                      r().createElement(
                        B.Z,
                        null,
                        r().createElement(te.Z, {
                          code: "diesel.common.time.time_left",
                          args: [s],
                        }),
                      ),
                    ),
                  ),
                ),
                r().createElement(
                  L,
                  { xs: 12 },
                  r().createElement(
                    d.x,
                    { justify: u.jf.Center },
                    r().createElement(
                      ae.ZP,
                      null,
                      r().createElement(te.Z, {
                        code: "egstore.library.collections_modal.create_edit.drag_text",
                      }),
                    ),
                  ),
                ),
              ),
              footer: r().createElement(
                T.m,
                null,
                r().createElement(
                  M.d,
                  { onClick: a },
                  r().createElement(te.Z, {
                    code: "diesel.common.smart_button.cancel",
                  }),
                ),
                r().createElement(
                  j.N,
                  {
                    onClick: n,
                    disabled: Boolean(t || !(null == i ? void 0 : i.trim())),
                  },
                  r().createElement(te.Z, {
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
        hasHeader: r,
        hasPrimaryButton: l,
        hasSecondaryButton: o,
        titleWidth: i = 80,
      }) =>
        n.createElement(A.P, {
          "data-testid": "ModalSkeleton",
          header: r
            ? n.createElement(
                _.x,
                { onCloseClick: () => {} },
                n.createElement(Ee.Od, {
                  variant: Ee.Jy.Text,
                  width: i,
                  height: 40,
                  animation: e,
                }),
              )
            : void 0,
          content: t || n.createElement("div", null),
          footer: a
            ? n.createElement(
                T.m,
                null,
                l &&
                  n.createElement(Ee.Od, {
                    width: 160,
                    height: 40,
                    animation: e,
                  }),
                o &&
                  n.createElement(Ee.Od, {
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
          icon: (0, b.iv)((0, re.wz)(20)),
        })),
        Ne = (e) => {
          const t = ke();
          return r().createElement(
            ye,
            ((a = Pe({}, e)),
            (n = {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: r().createElement(
                d.x,
                { direction: u.jO.Column, centerContent: !0, fillParent: !0 },
                r().createElement(
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
                r().createElement(
                  Ee.Od,
                  Pe({ variant: Ee.Jy.Text, width: 380, height: 30 }, e),
                ),
                r().createElement(
                  d.x,
                  { className: t.fakeInput, alignItems: u.Ks.Center },
                  r().createElement(
                    Ee.Od,
                    Pe({ className: t.icon, width: 24, height: 26 }, e),
                  ),
                  r().createElement(
                    Ee.Od,
                    Pe({ variant: Ee.Jy.Text, width: 100, height: 20 }, e),
                  ),
                ),
              ),
            }),
            Oe(a, Ce(n))),
          );
          var a, n;
        };
      var Le = a(58882),
        je = a(60193),
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
            ((n = ((e, t) => {
              for (var a in t || (t = {})) Re.call(t, a) && Ze(e, a, t[a]);
              if (De) for (var a of De(t)) Be.call(t, a) && Ze(e, a, t[a]);
              return e;
            })({}, e)),
            (r = { enabled: !1 !== (null == e ? void 0 : e.enabled) }),
            Te(n, _e(r))),
          ),
          { data: a } = t;
        var n, r;
        return {
          collections: a,
          query: ((e, t) => {
            var a = {};
            for (var n in e) Re.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
            if (null != e && De)
              for (var n of De(e))
                t.indexOf(n) < 0 && Be.call(e, n) && (a[n] = e[n]);
            return a;
          })(t, ["data"]),
        };
      };
      var Ue = Object.defineProperty,
        We = Object.defineProperties,
        Ke = Object.getOwnPropertyDescriptors,
        ze = Object.getOwnPropertySymbols,
        Ve = Object.prototype.hasOwnProperty,
        He = Object.prototype.propertyIsEnumerable,
        $e = (e, t, a) =>
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
          ((r = ((e, t) => {
            for (var a in t || (t = {})) Ve.call(t, a) && $e(e, a, t[a]);
            if (ze) for (var a of ze(t)) He.call(t, a) && $e(e, a, t[a]);
            return e;
          })({}, t)),
          (l = {
            enabled: Boolean(e) && !1 !== (null == t ? void 0 : t.enabled),
          }),
          We(r, Ke(l))),
        );
        var r, l;
        return (0, n.useMemo)(
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
          const [e, t] = r().useState(""),
            [a, l] = r().useState(!1),
            o = (() => {
              const e = (0, qe.useDispatch)();
              return (0, n.useCallback)(
                (t) => {
                  e((0, Me.BL)(t));
                },
                [e],
              );
            })(),
            i = (() => {
              const e = (0, qe.useDispatch)();
              return (0, n.useCallback)(
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
          r().useEffect(() => {
            u && (t(u.name), l(!1));
          }, [u]);
          const g = r().useCallback(() => {
              const t = Xe(e);
              if (!t) return !1;
              if (t === Xe(b("egstore.library.filter.all"))) return !1;
              if (t === Xe(b("egstore.library.collections.tabs.favorites")))
                return !1;
              return !(null == p ? void 0 : p.some((e) => Xe(e.name) === t));
            }, [e, p]),
            v = (0, n.useCallback)(() => {
              g()
                ? (m && u ? i(u.collectionId, e.trim()) : o(e.trim()), c())
                : l(!0);
            }, [g, m, u, c]);
          return r().createElement(ve, {
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
          return r().createElement(
            Le.u,
            { isOpen: e, onClose: t },
            r().createElement(
              Ye.n4,
              { fallback: r().createElement(Ne, null) },
              r().createElement(Qe, null),
            ),
          );
        };
      var tt = a(55637),
        at = a(46603),
        nt = a(71065),
        rt = a(72374),
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
            buttonDiv: (0, b.iv)((0, re.oI)(10), {
              button:
                ((a = mt(
                  mt({}, (0, rt.ip)("border-color")),
                  (0, rt.ip)("transform", "350ms"),
                )),
                (n = {
                  height: "100%",
                  width: "100%",
                  padding: 10,
                  boxShadow: `0 0 1px 2px ${
                    t ? e.textSecondary : e.textPrimary
                  }`,
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
                ot(a, it(n))),
            }),
          };
          var a, n;
        }),
        bt = ({ onClick: e, isOnline: t, canCreateCollection: a }) => {
          const n = r().useMemo(() => !a || !t, [a, t]),
            l = pt(n),
            o = r().useRef(null),
            i = a
              ? "egstore.library.collections.add_collection_tooltip"
              : "egstore.library.collections.add_collection_tooltip_max";
          return r().createElement(
            r().Fragment,
            null,
            r().createElement(
              "div",
              {
                className: l.buttonDiv,
                ref: o,
                "data-testid": "add-button-div",
              },
              r().createElement(
                tt.h,
                {
                  onClick: e,
                  buttonHeight: R.Ey.DENSED,
                  buttonWidth: R.WL.BLOCK,
                  disabled: n,
                  pill: !0,
                },
                r().createElement(at.p, null),
              ),
            ),
            t &&
              r().createElement(
                nt.u,
                { anchorRef: o },
                r().createElement(te.Z, { code: i }),
              ),
          );
        },
        gt = () => {
          const { collections: e } = Fe({ suspense: !1 });
          return (0, n.useMemo)(
            () => !e || (null == e ? void 0 : e.length) <= 11,
            [e],
          );
        },
        vt = () => {
          const e = (0, i.c)(),
            t = gt(),
            { openModal: a } = Je();
          return r().createElement(bt, {
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
        Ct = Object.defineProperty,
        It = Object.defineProperties,
        wt = Object.getOwnPropertyDescriptors,
        xt = Object.getOwnPropertySymbols,
        St = Object.prototype.hasOwnProperty,
        Pt = Object.prototype.propertyIsEnumerable,
        kt = (e, t, a) =>
          t in e
            ? Ct(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Nt = (e, t) => {
          for (var a in t || (t = {})) St.call(t, a) && kt(e, a, t[a]);
          if (xt) for (var a of xt(t)) Pt.call(t, a) && kt(e, a, t[a]);
          return e;
        },
        Lt = (e, t) => It(e, wt(t));
      const jt = 15,
        Mt = (e) => `title-${e}`,
        At = (e, t) =>
          (0, b.iv)(
            (0, re.NS)((0, re.rv)(t === Et.U.ALL ? 0 : jt), (0, re.WL)(jt)),
            Lt(Nt({}, (0, rt.ip)("color")), {
              minWidth: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              "&:hover": { color: e.textPrimary },
            }),
          ),
        Tt = (0, m.i)((e, { id: t }) => ({
          tabsButtonRoot: (0, b.iv)({ position: "relative" }),
          active: (0, b.iv)({
            color: e.textPrimary,
            "&::after": Nt(
              { opacity: 1, backgroundColor: e.textPrimary },
              (0, re.NS)((0, re.wz)(jt), (0, re.oI)(t === Et.U.ALL ? 0 : jt)),
            ),
          }),
          button: (0, b.iv)(
            Lt(Nt({ width: "100%" }, (0, rt.ip)("color")), {
              position: "relative",
              paddingTop: 5,
              paddingBottom: 5,
              "&::after": Lt(Nt({}, Ot.d), {
                position: "absolute",
                height: 2,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: e.textPrimary,
                opacity: 0,
              }),
              "&:focus-visible": Lt(Nt({}, (0, W.Bt)(e)), {
                [`#${Mt(t)}`]: { color: e.textPrimary },
              }),
            }),
          ),
          title: At(e, t),
          nonDraggableTabs: (0, b.iv)({ flex: "0 0 auto" }),
        })),
        _t = ({
          count: e = 0,
          draggable: t = !0,
          enableTooltip: a = !0,
          id: n,
          isSelected: l,
          isTruncated: o,
          onTabClick: i,
          title: c,
          onContextMenu: s,
          onKeyDown: d,
        }) => {
          const [u, m] = r().useState(!1),
            p = r().useRef(null),
            g = Tt({ id: n }),
            v = (0, yt.o)();
          r().useEffect(() => {
            var e;
            if (n !== c) {
              const t =
                null == (e = p.current)
                  ? void 0
                  : e.querySelector(`[id=${Mt(n)}]`);
              t && m(t.scrollWidth > t.clientWidth);
            }
          }, [n]);
          const E = r().useMemo(
              () =>
                (!o && !u) || l
                  ? r().createElement(te.Z, {
                      code: "egstore.library.collections.tooltip",
                      args: [null != e ? e : 0],
                    })
                  : `${c} (${e})`,
              [o, u, l, c, e],
            ),
            y = (0, b.cx)(g.tabsButtonRoot, {
              [g.active]: l,
              [g.nonDraggableTabs]: !t,
            });
          return r().createElement(
            "div",
            { className: y, "data-testid": "CollectionTabsButton" },
            r().createElement(
              ft.Z,
              {
                ref: p,
                id: n,
                onClick: () => i(n),
                className: (0, b.cx)(g.button, { [g.active]: l }),
                role: "tab",
                "aria-selected": l,
                onContextMenu: s,
                onKeyDown: d,
              },
              r().createElement(
                ht.Z.Text,
                { textLevel: l ? F.N.PRIMARY : F.N.SECONDARY },
                r().createElement(
                  "div",
                  {
                    className: g.title,
                    "data-dropzoneitem": (n !== v && n !== Et.U.ALL) || void 0,
                    id: Mt(n),
                  },
                  c,
                ),
              ),
            ),
            a && r().createElement(nt.u, { anchorRef: p }, E),
          );
        };
      var Dt = a(36306),
        Rt = a(79253),
        Bt = a(45216),
        Zt = a(54729),
        Ft = a(94799),
        Ut = a(44846),
        Wt = a(6977),
        Kt = a(32042),
        zt = a(58777);
      const Vt = (e) =>
          Boolean(
            !(null == e ? void 0 : e.appName) || !e.appName.startsWith("UE_5"),
          ),
        Ht = (e) =>
          Boolean(
            !(null == e ? void 0 : e.namespace) || "poodle" !== e.namespace,
          ),
        $t = (0, Ft.Z)([
          Rt.uX,
          (e) => !(0, Rt.uq)(e) || (0, Rt.lr)(e),
          (0, Ut.Z)([
            (0, Rt.D9)(Bt.CR),
            (0, Rt.D9)(Bt.Bv),
            (0, Rt.D9)(Bt.kV),
            (0, Rt.D9)(Bt.Km),
            (0, Rt.D9)(Bt.ze),
          ]),
        ]),
        Gt = (0, Ft.Z)([
          Rt.uX,
          (e) => !(0, Rt.uq)(e),
          (0, Ut.Z)([
            (0, Rt.D9)(Bt.CR),
            (0, Rt.D9)(Bt.Bv),
            (0, Rt.D9)(Bt.kV),
            (0, Rt.D9)(Bt.Km),
            (0, Rt.D9)(Bt.ze),
          ]),
        ]),
        qt = (e, t) =>
          (0, Wt.Z)(
            (0, Kt.Z)((t) => (e ? $t(t.catalogItem) : Gt(t.catalogItem))),
            (0, Kt.Z)(t ? () => !0 : Ht),
            (0, Kt.Z)(Vt),
            (0, zt.Z)(
              (() => {
                let e = !1;
                return (t, a) =>
                  a
                    ? a.namespace === Zt.M
                      ? e || a.catalogItemId !== Zt.g
                        ? t
                        : ((e = !0), [...t, a])
                      : [...t, a]
                    : t;
              })(),
              [],
            ),
          );
      var Yt = a(78623),
        Jt = Object.defineProperty,
        Xt = Object.defineProperties,
        Qt = Object.getOwnPropertyDescriptors,
        ea = Object.getOwnPropertySymbols,
        ta = Object.prototype.hasOwnProperty,
        aa = Object.prototype.propertyIsEnumerable,
        na = (e, t, a) =>
          t in e
            ? Jt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ra = (e, t) => {
        const a = (0, je.P)(
            ((e) => (0, Yt.P1)(Me.$4, (t) => (e ? t[e] : void 0)))(e),
            () => (0, Me.R7)({ collectionId: e }),
            ((r = ((e, t) => {
              for (var a in t || (t = {})) ta.call(t, a) && na(e, a, t[a]);
              if (ea) for (var a of ea(t)) aa.call(t, a) && na(e, a, t[a]);
              return e;
            })({}, t)),
            (l = {
              enabled:
                Boolean(e) &&
                e !== Et.U.ALL &&
                !1 !== (null == t ? void 0 : t.enabled),
            }),
            Xt(r, Qt(l))),
          ),
          { data: n } = a;
        var r, l;
        return {
          items: n,
          query: ((e, t) => {
            var a = {};
            for (var n in e) ta.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
            if (null != e && ea)
              for (var n of ea(e))
                t.indexOf(n) < 0 && aa.call(e, n) && (a[n] = e[n]);
            return a;
          })(a, ["data"]),
        };
      };
      var la = a(84342),
        oa = a(6580),
        ia = a(5983),
        ca = a(57247),
        sa = Object.defineProperty,
        da = Object.defineProperties,
        ua = Object.getOwnPropertyDescriptors,
        ma = Object.getOwnPropertySymbols,
        pa = Object.prototype.hasOwnProperty,
        ba = Object.prototype.propertyIsEnumerable,
        ga = (e, t, a) =>
          t in e
            ? sa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const va = (e = Et.U.ALL, t) => {
        const { records: a, query: r } = (0, la.Ud)(),
          { items: l, query: o } = ra(
            e,
            ((i = ((e, t) => {
              for (var a in t || (t = {})) pa.call(t, a) && ga(e, a, t[a]);
              if (ma) for (var a of ma(t)) ba.call(t, a) && ga(e, a, t[a]);
              return e;
            })({}, t)),
            (c = { suspense: Boolean(null == t ? void 0 : t.suspense) }),
            da(i, ua(c))),
          );
        var i, c;
        const s = (0, qe.useSelector)(oa.H);
        return (0, n.useMemo)(() => {
          const t = qt((0, Dt.ZP)().supportsLaunchableAddonsFlow(), s)(a),
            n = (
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
                return (0, ia.Z)(ca.Z, a);
              }
            )(l);
          return {
            records: e !== Et.U.ALL ? n(t) : t,
            query: {
              isFetching: r.isFetching || o.isFetching,
              isSuccess: r.isSuccess && o.isSuccess,
            },
          };
        }, [a, l, r.isFetching, r.isSuccess, o.isFetching, o.isSuccess]);
      };
      var Ea = ((e) => (
        (e.INSTALLED = "installed"),
        (e.GENRE = "genre"),
        (e.FEATURE = "feature"),
        (e.CATEGORY = "category"),
        (e.PLATFORM = "platform"),
        (e.KEYWORD = "keyword"),
        (e.COLLECTION = "collection"),
        (e.CATALOG_ITEM_ID = "catalogItemId"),
        e
      ))(Ea || {});
      const ya = {
        installed: [],
        genre: [],
        feature: [],
        category: [],
        platform: [],
        keyword: "",
        collection: Et.U.ALL,
        catalogItemId: [],
      };
      var fa = ((e) => (
          (e.WINDOWS = "Windows"), (e.WIN32 = "Win32"), (e.MAC = "Mac"), e
        ))(fa || {}),
        ha = ((e) => (
          (e.GAMES = "games"),
          (e.SOFTWARE = "software"),
          (e.ENGINES = "engines"),
          (e.DIGITAL_EXTRAS = "digitalextras"),
          e
        ))(ha || {}),
        Oa = a(50746);
      const Ca = ({ items: e, selectedFilters: t, type: a }) => {
          const n = [];
          if (t && a) {
            const r = t[a];
            e.filter((e) => {
              const t = ((e, t) => {
                var a, n, r, l, o, i;
                if (e === Ea.PLATFORM)
                  return null !=
                    (l =
                      null ==
                      (r = (
                        null !=
                        (n =
                          null == (a = t.catalogItem) ? void 0 : a.releaseInfo)
                          ? n
                          : []
                      )[0])
                        ? void 0
                        : r.platform)
                    ? l
                    : [];
                if (e === Ea.CATEGORY)
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
              r.every((e) => t.includes(e)) && n.push(e);
            });
          }
          return n;
        },
        Ia = ({ items: e, installedRecords: t }) =>
          t ? e.filter((e) => Boolean(t[e.relationshipId])) : [],
        wa = {
          [Ea.INSTALLED]: Ia,
          [Ea.GENRE]: ({ items: e, selectedFilters: t }) =>
            Ca({ items: e, selectedFilters: t, type: Ea.GENRE }),
          [Ea.FEATURE]: ({ items: e, selectedFilters: t }) =>
            Ca({ items: e, selectedFilters: t, type: Ea.FEATURE }),
          [Ea.CATEGORY]: ({ items: e, selectedFilters: t }) =>
            Ca({ items: e, selectedFilters: t, type: Ea.CATEGORY }),
          [Ea.PLATFORM]: ({ items: e, selectedFilters: t }) =>
            Ca({ items: e, selectedFilters: t, type: Ea.PLATFORM }),
          [Ea.KEYWORD]: ({ items: e, selectedFilters: t }) => {
            const a = t && t[Ea.KEYWORD];
            return a
              ? e.filter((e) => {
                  var t, n;
                  return RegExp(
                    ((n = a), n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
                    "gi",
                  ).test(
                    (null == (t = e.catalogItem) ? void 0 : t.title) ||
                      e.appName ||
                      "",
                  );
                })
              : [];
          },
          [Ea.COLLECTION]: void 0,
          [Ea.CATALOG_ITEM_ID]: ({ items: e, selectedFilters: t }) => {
            const a = t && t[Ea.CATALOG_ITEM_ID];
            return (null == a ? void 0 : a.length)
              ? e.filter((e) =>
                  null == a ? void 0 : a.includes(e.catalogItemId),
                )
              : [];
          },
        },
        xa = (e) => {
          const t = [];
          return (
            Object.keys(e).reduce((t, a) => {
              var n;
              if (null == (n = e[a]) ? void 0 : n.length) {
                const e = wa[a];
                e && t.push(e);
              }
              return t;
            }, t),
            t
          );
        };
      var Sa = Object.defineProperty,
        Pa = Object.getOwnPropertySymbols,
        ka = Object.prototype.hasOwnProperty,
        Na = Object.prototype.propertyIsEnumerable,
        La = (e, t, a) =>
          t in e
            ? Sa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ja = ({ type: e, name: t, id: a, selectedFilters: n }) => {
        const r = ((e, t) => {
          for (var a in t || (t = {})) ka.call(t, a) && La(e, a, t[a]);
          if (Pa) for (var a of Pa(t)) Na.call(t, a) && La(e, a, t[a]);
          return e;
        })({}, n);
        if (e === Ea.CATALOG_ITEM_ID) return (r[e] = []), r;
        const l = e === Ea.GENRE || e === Ea.FEATURE ? a : t;
        return (
          n[e] &&
            l &&
            (n[e].includes(l)
              ? (r[e] = n[e].filter((e) => e !== l))
              : (r[e] = [...n[e], l])),
          r
        );
      };
      var Ma = a(71535),
        Aa = a(65845),
        Ta = a(79546),
        _a = a(83868),
        Da = a(73172),
        Ra = (e, t, a) =>
          new Promise((n, r) => {
            var l = (e) => {
                try {
                  i(a.next(e));
                } catch (e) {
                  r(e);
                }
              },
              o = (e) => {
                try {
                  i(a.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              i = (e) =>
                e.done ? n(e.value) : Promise.resolve(e.value).then(l, o);
            i((a = a.apply(e, t)).next());
          });
      const Ba = (0, Ta.uB)("userLibraryConfigApi"),
        Za = () => !Aa.r2.isSsr() && (0, Da.Y)().indexedDB;
      var Fa = Object.defineProperty,
        Ua = Object.defineProperties,
        Wa = Object.getOwnPropertyDescriptors,
        Ka = Object.getOwnPropertySymbols,
        za = Object.prototype.hasOwnProperty,
        Va = Object.prototype.propertyIsEnumerable,
        Ha = (e, t, a) =>
          t in e
            ? Fa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const $a = (e) => {
        const {
            queryKey: t,
            indexedDBKeyFn: a,
            initialValue: n,
            config: r = { enabled: !0 },
          } = e,
          l = (0, Ma.aM)(
            t,
            () =>
              ((e, t) =>
                Ra(void 0, null, function* () {
                  if (!Za()) return Promise.resolve(t);
                  try {
                    const t = yield _a.gd.get(e);
                    return Promise.resolve(null == t ? void 0 : t.data);
                  } catch (a) {
                    return (
                      Ba.warn(
                        "getCachedUserLibraryConfig",
                        `failed IDB get for - ${e}`,
                        { error: a.message },
                      ),
                      Promise.resolve(t)
                    );
                  }
                }))(a(), n),
            ((i = ((e, t) => {
              for (var a in t || (t = {})) za.call(t, a) && Ha(e, a, t[a]);
              if (Ka) for (var a of Ka(t)) Va.call(t, a) && Ha(e, a, t[a]);
              return e;
            })({ refetchOnReconnect: !1, refetchOnWindowFocus: !1 }, r)),
            (c = { enabled: !Aa.r2.isSsr() && r.enabled }),
            Ua(i, Wa(c))),
          ),
          { data: o } = l;
        var i, c;
        return {
          data: o,
          query: ((e, t) => {
            var a = {};
            for (var n in e) za.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
            if (null != e && Ka)
              for (var n of Ka(e))
                t.indexOf(n) < 0 && Va.call(e, n) && (a[n] = e[n]);
            return a;
          })(l, ["data"]),
        };
      };
      var Ga = Object.defineProperty,
        qa = Object.defineProperties,
        Ya = Object.getOwnPropertyDescriptors,
        Ja = Object.getOwnPropertySymbols,
        Xa = Object.prototype.hasOwnProperty,
        Qa = Object.prototype.propertyIsEnumerable,
        en = (e, t, a) =>
          t in e
            ? Ga(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        tn = (e, t) => {
          for (var a in t || (t = {})) Xa.call(t, a) && en(e, a, t[a]);
          if (Ja) for (var a of Ja(t)) Qa.call(t, a) && en(e, a, t[a]);
          return e;
        };
      const an = "local-storage-item",
        nn = ({
          keyFn: e = () => "",
          initialValue: t,
          localStorageEnabled: a = !1,
          allowedValues: r,
          config: l,
        }) => {
          const o = (0, Ma.NL)(),
            { data: i, query: c } = $a({
              queryKey: [an, e()],
              indexedDBKeyFn: e,
              initialValue: t,
              config:
                ((s = tn({}, l)),
                (d = {
                  enabled: a,
                  initialData: t,
                  initialDataUpdatedAt: 0,
                  refetchOnReconnect: !1,
                  refetchOnWindowFocus: !1,
                }),
                qa(s, Ya(d))),
            });
          var s, d;
          const u = (0, n.useCallback)((e) => e && (!r || r.includes(e)), [r]),
            m = (0, n.useCallback)(
              (t) => {
                var n, r;
                u(t) &&
                  (o.setQueryData([an, e()], t),
                  a &&
                    ((n = e()),
                    (r = t),
                    Ra(void 0, null, function* () {
                      if (!n || !Za()) return;
                      const e = { id: n, data: r };
                      _a.gd.put(e).catch((e) => {
                        Ba.warn(
                          "setCachedUserLibraryConfig",
                          `failed IDB put for - ${n}`,
                          { error: e.message },
                        );
                      });
                    })));
              },
              [u, a],
            );
          return { value: u(i) ? i : t, setValue: m, query: c };
        };
      var rn = a(19057),
        ln = a(94655),
        on = a(5761);
      const cn = (e) =>
          Object.values(e).some((e) => !!Array.isArray(e) && e.length > 0),
        sn = (e) => {
          var t;
          return Boolean(null == (t = e[Ea.KEYWORD]) ? void 0 : t.length);
        },
        dn = (e) => e[Ea.COLLECTION] !== Et.U.ALL;
      var un = Object.defineProperty,
        mn = Object.defineProperties,
        pn = Object.getOwnPropertyDescriptors,
        bn = Object.getOwnPropertySymbols,
        gn = Object.prototype.hasOwnProperty,
        vn = Object.prototype.propertyIsEnumerable,
        En = (e, t, a) =>
          t in e
            ? un(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        yn = (e, t) => {
          for (var a in t || (t = {})) gn.call(t, a) && En(e, a, t[a]);
          if (bn) for (var a of bn(t)) vn.call(t, a) && En(e, a, t[a]);
          return e;
        },
        fn = (e, t) => mn(e, pn(t));
      const hn = () => {
        const e = (0, qe.useSelector)(on.vR),
          t = (0, qe.useSelector)(ln.xp),
          { value: a, setValue: r } = nn({
            keyFn: () => `${rn.UY}_${e || Oa.v.ANONYMOUS}`,
            localStorageEnabled: !0,
            initialValue: yn({}, ya),
          }),
          l = (0, n.useMemo)(() => yn(yn({}, ya), a), [a]),
          o = (0, n.useMemo)(() => l[Ea.KEYWORD] || "", [l]),
          i = (0, n.useCallback)(
            (e) => {
              r(fn(yn({}, l), { [Ea.KEYWORD]: e }));
            },
            [r, l],
          ),
          c = (0, n.useCallback)(
            ({ type: e, name: t, id: a }) => {
              if (!e || (!t && !a) || !l) return;
              const n = ja({ type: e, name: t, id: a, selectedFilters: l });
              r(yn({}, n));
            },
            [l],
          ),
          s = (0, n.useCallback)(
            (e) => {
              const a = xa(l).reduce(
                (e, a) =>
                  a({
                    items: e,
                    selectedFilters: l,
                    installedRecords: t.latestValue,
                  }),
                e,
              );
              return ((e) => sn(e) || dn(e) || cn(e))(l) ? a : e;
            },
            [t.latestValue, l],
          ),
          d = (0, n.useCallback)(() => {
            const e = l[Ea.COLLECTION];
            r(fn(yn({}, ya), { [Ea.COLLECTION]: e }));
          }, [l]),
          u = (0, n.useMemo)(() => {
            let e = ((e) => {
              let t = 0;
              return (
                Object.keys(e).forEach((a) => {
                  a !== Ea.KEYWORD &&
                    a !== Ea.COLLECTION &&
                    a !== Ea.CATALOG_ITEM_ID &&
                    (t += e[a].length);
                }),
                t
              );
            })(l);
            return (sn(l) || Boolean(l[Ea.CATALOG_ITEM_ID].length)) && e++, e;
          }, [l]);
        return {
          applySelectedFilters: s,
          onFilterClick: c,
          selectedFilters: l,
          setSelectedFilters: r,
          resetFilters: d,
          keywordValue: o,
          setKeywordValue: i,
          numberActiveFilters: u,
        };
      };
      var On = Object.defineProperty,
        Cn = Object.defineProperties,
        In = Object.getOwnPropertyDescriptors,
        wn = Object.getOwnPropertySymbols,
        xn = Object.prototype.hasOwnProperty,
        Sn = Object.prototype.propertyIsEnumerable,
        Pn = (e, t, a) =>
          t in e
            ? On(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const kn = () => {
          const { selectedFilters: e, setSelectedFilters: t } = hn();
          return {
            selectedCollectionId: (0, n.useMemo)(
              () => e[Ea.COLLECTION] || Et.U.ALL,
              [e],
            ),
            setSelectedCollectionId: (0, n.useCallback)(
              (a = Et.U.ALL) => {
                var n, r;
                t(
                  ((n = ((e, t) => {
                    for (var a in t || (t = {}))
                      xn.call(t, a) && Pn(e, a, t[a]);
                    if (wn)
                      for (var a of wn(t)) Sn.call(t, a) && Pn(e, a, t[a]);
                    return e;
                  })({}, e)),
                  (r = { [Ea.COLLECTION]: a }),
                  Cn(n, In(r))),
                );
              },
              [t, e],
            ),
          };
        },
        Nn = () => {
          var e;
          const { selectedCollectionId: t, setSelectedCollectionId: a } = kn(),
            { records: n } = va();
          return r().createElement(_t, {
            count: null != (e = null == n ? void 0 : n.length) ? e : 0,
            draggable: !1,
            id: Et.U.ALL,
            isSelected: t === Et.U.ALL,
            onTabClick: () => a(Et.U.ALL),
            title: r().createElement(te.Z, {
              code: "egstore.library.filter.all",
            }),
          });
        };
      var Ln = a(20455),
        jn = Object.defineProperty,
        Mn = Object.getOwnPropertySymbols,
        An = Object.prototype.hasOwnProperty,
        Tn = Object.prototype.propertyIsEnumerable,
        _n = (e, t, a) =>
          t in e
            ? jn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Dn = (e, t) => {
          for (var a in t || (t = {})) An.call(t, a) && _n(e, a, t[a]);
          if (Mn) for (var a of Mn(t)) Tn.call(t, a) && _n(e, a, t[a]);
          return e;
        };
      const Rn = (0, m.i)(() => ({
          root: (0, b.iv)(
            Dn(
              { display: "flex", alignItems: "center", marginBottom: 34 },
              (0, re.wz)(33),
            ),
          ),
          box: (0, b.iv)({ overflow: "hidden" }),
        })),
        Bn = ({
          allTab: e,
          favoritesTab: t,
          tabs: a,
          addCollectionButton: n,
        }) => {
          const l = Rn(),
            { setNodeRef: o } = (0, Ln.Zj)({ id: Et.S });
          return r().createElement(
            "div",
            { className: l.root, ref: o },
            e,
            t,
            r().createElement(
              d.x,
              {
                alignItems: u.Ks.Center,
                justify: u.jf.Start,
                wrap: u.Jm.NoWrap,
                className: l.box,
              },
              a,
            ),
            n,
          );
        };
      var Zn = a(67445),
        Fn = Object.defineProperty,
        Un = Object.defineProperties,
        Wn = Object.getOwnPropertyDescriptors,
        Kn = Object.getOwnPropertySymbols,
        zn = Object.prototype.hasOwnProperty,
        Vn = Object.prototype.propertyIsEnumerable,
        Hn = (e, t, a) =>
          t in e
            ? Fn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        $n = (e, t) => {
          for (var a in t || (t = {})) zn.call(t, a) && Hn(e, a, t[a]);
          if (Kn) for (var a of Kn(t)) Vn.call(t, a) && Hn(e, a, t[a]);
          return e;
        },
        Gn = (e, t) => Un(e, Wn(t));
      const qn = (0, m.i)(() => ({
          root: (0, b.iv)({
            minWidth: 0,
            maxWidth: "max-content",
            flex: "1 1 0",
            overflow: "hidden",
          }),
          dragging: (0, b.iv)({ opacity: 0.25 }),
          selected: (0, b.iv)({ flexGrow: 10 }),
        })),
        Yn = (e) => {
          var t = e,
            { forwardRef: a, id: n, isSelected: l } = t,
            o = ((e, t) => {
              var a = {};
              for (var n in e)
                zn.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Kn)
                for (var n of Kn(e))
                  t.indexOf(n) < 0 && Vn.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["forwardRef", "id", "isSelected"]);
          const {
              active: i,
              attributes: c,
              isDragging: s,
              listeners: d,
            } = (0, Zn.nB)({ id: n }),
            u = qn();
          return r().createElement(
            "div",
            Gn(
              $n(
                $n(
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
            r().createElement(
              _t,
              Gn($n({}, o), {
                draggable: !0,
                enableTooltip: !i,
                id: n,
                isSelected: l,
              }),
            ),
          );
        },
        Jn = (0, m.i)(() => ({
          content: (0, b.iv)({ textAlign: "center", padding: "0 40px" }),
          heading: (0, b.iv)({ marginBottom: 20 }),
        })),
        Xn = ({
          modalTitle: e,
          onCloseClick: t,
          primaryButton: a,
          secondaryButton: n,
          subTitle: l,
          title: o,
        }) => {
          const i = Jn();
          return r().createElement(A.P, {
            header: r().createElement(
              _.x,
              { onCloseClick: t },
              r().createElement(ae.ZP, { weight: ae.G0.BOLD }, e),
            ),
            content: r().createElement(
              d.x,
              { alignItems: u.Ks.Center, justify: u.jf.Center, fillParent: !0 },
              r().createElement(
                "div",
                { className: i.content },
                r().createElement(
                  "div",
                  { className: i.heading },
                  r().createElement(ne.Z.Heading, { headingLevel: 1 }, o),
                ),
                r().createElement(ae.ZP, null, l),
              ),
            ),
            footer: r().createElement(T.m, null, n, a),
          });
        },
        Qn = ({ collectionName: e, onRemoveClick: t, onCancelClick: a }) =>
          r().createElement(Xn, {
            modalTitle: r().createElement(te.Z, {
              code: "egstore.library.collection_delete_confirm_modal.title",
            }),
            onCloseClick: a,
            title: r().createElement(te.Z, {
              code: "egstore.library.collection_delete_confirm_modal.text_question",
              args: [e],
            }),
            subTitle: r().createElement(te.Z, {
              code: "egstore.library.collection_delete_confirm_modal.text_info",
            }),
            secondaryButton: r().createElement(
              M.d,
              { onClick: a },
              r().createElement(te.Z, {
                code: "egstore.library.collection_delete_confirm_modal.cancel",
              }),
            ),
            primaryButton: r().createElement(
              j.N,
              { onClick: t },
              r().createElement(te.Z, {
                code: "egstore.library.collection_delete_confirm_modal.confirm",
              }),
            ),
          });
      var er = Object.defineProperty,
        tr = Object.defineProperties,
        ar = Object.getOwnPropertyDescriptors,
        nr = Object.getOwnPropertySymbols,
        rr = Object.prototype.hasOwnProperty,
        lr = Object.prototype.propertyIsEnumerable,
        or = (e, t, a) =>
          t in e
            ? er(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ir = (e, t) => {
          for (var a in t || (t = {})) rr.call(t, a) && or(e, a, t[a]);
          if (nr) for (var a of nr(t)) lr.call(t, a) && or(e, a, t[a]);
          return e;
        },
        cr = (e, t) => tr(e, ar(t));
      const sr = (e) =>
          n.createElement(
            ye,
            cr(ir({}, e), {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: n.createElement(
                d.x,
                {
                  alignItems: u.Ks.Center,
                  justify: u.jf.Center,
                  fillParent: !0,
                },
                n.createElement(
                  d.x,
                  { direction: u.jO.Column, alignItems: u.Ks.Center },
                  n.createElement(
                    Ee.Od,
                    ir({ variant: Ee.Jy.Text, width: 500, height: 50 }, e),
                  ),
                  n.createElement(
                    Ee.Od,
                    cr(ir({ variant: Ee.Jy.Text, width: 300, height: 50 }, e), {
                      style: { margin: "-10px 0 10px" },
                    }),
                  ),
                  n.createElement(
                    Ee.Od,
                    ir({ variant: Ee.Jy.Text, width: 260, height: 30 }, e),
                  ),
                ),
              ),
            }),
          ),
        dr = s("collection-remove-confirm-modal"),
        ur = () => {
          const { closeModal: e, cancelModal: t, getData: a } = dr(),
            l = (() => {
              const e = (0, qe.useDispatch)(),
                { selectedCollectionId: t, setSelectedCollectionId: a } = kn();
              return (0, n.useCallback)(
                (n) => {
                  e((0, Me.C5)(n)), t === n.collectionId && a(Et.U.ALL);
                },
                [e, t, a],
              );
            })(),
            o = Ge(a()),
            i = r().useCallback(() => {
              o && l(o), e();
            }, [o]);
          return r().createElement(
            r().Fragment,
            null,
            r().createElement(Qn, {
              collectionName: (null == o ? void 0 : o.name) || "",
              onRemoveClick: i,
              onCancelClick: t,
            }),
          );
        },
        mr = () => {
          const { isOpen: e, cancelModal: t } = dr();
          return r().createElement(
            Le.u,
            { isOpen: e, onClose: t },
            r().createElement(
              Ye.n4,
              { fallback: r().createElement(sr, null) },
              r().createElement(ur, null),
            ),
          );
        };
      var pr = a(8909),
        br = a(59637);
      const gr = ({ disabled: e, onClick: t }) =>
          r().createElement(br.c, {
            horizontal: !0,
            title: r().createElement(te.Z, {
              code: "diesel.library.settings.remove_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        vr = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, pr.U)(),
            a = (0, i.c)({ suspense: !1 }),
            n = (0, yt.o)(),
            { openModal: l } = dr(),
            o = r().useCallback(() => {
              e && e !== Et.U.ALL && e !== n && l(e), t(void 0);
            }, [e, t, l]);
          return r().createElement(gr, { onClick: o, disabled: !a });
        },
        Er = ({ disabled: e, onClick: t }) =>
          r().createElement(br.c, {
            horizontal: !0,
            title: r().createElement(te.Z, {
              code: "diesel.library.settings.rename_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        yr = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, pr.U)(),
            a = (0, i.c)({ suspense: !1 }),
            n = (0, yt.o)(),
            { openModal: l } = Je(),
            o = r().useCallback(() => {
              e && e !== Et.U.ALL && e !== n && l(e), t(void 0);
            }, [e, t, l]);
          return r().createElement(Er, { onClick: o, disabled: !a });
        };
      var fr = a(28267),
        hr = a(20997),
        Or = a(27491);
      const Cr = () => {};
      var Ir = a(13275);
      const wr = (0, m.i)(() => ({
          root: (0, b.iv)({ position: "fixed", zIndex: le.W.navDropdown }),
        })),
        xr = ({
          anchorElement: e,
          anchorPosition: t,
          children: a,
          isOpen: r = !1,
          onClose: l,
        }) => {
          const o = wr(),
            [i, c] = n.useState(null),
            s = (0, n.useRef)((0, Ta.N6)("egs-context-menu")),
            d = (({
              isOpen: e = !1,
              onClose: t = Cr,
              anchorPosition: a,
              popperElement: r,
              anchorElement: l,
            }) => {
              const o = (0, n.useCallback)(() => {
                  t();
                }, [t]),
                i = (0, n.useCallback)(
                  (e) => {
                    r && !r.contains(null == e ? void 0 : e.target) && t();
                  },
                  [r, t],
                ),
                c = (0, n.useCallback)(
                  (e) => {
                    r &&
                      r.contains(null == e ? void 0 : e.target) &&
                      e.preventDefault(),
                      l && e.target !== l && !l.contains(e.target) && t();
                  },
                  [l, r, t],
                ),
                s = (0, n.useCallback)(
                  (e) => {
                    r && !r.contains(e.relatedTarget) && t();
                  },
                  [r, t],
                ),
                d = (0, n.useCallback)(
                  (a) => {
                    if (!e || !r) return;
                    (a.key !== hr.et.ArrowUp && a.key !== hr.et.ArrowDown) ||
                      a.preventDefault();
                    const n = r.querySelector("ul"),
                      l = (0, fr.B9)(n),
                      o = (0, fr.u$)(n);
                    a.key === hr.et.ArrowUp &&
                      (o > 0
                        ? (0, fr.jc)(o - 1, n)
                        : l.length && (0, fr.jc)(l.length - 1, n)),
                      a.key === hr.et.ArrowDown &&
                        (l.length && o < l.length - 1
                          ? (0, fr.jc)(o + 1, n)
                          : (0, fr.jc)(0, n)),
                      a.key === hr.et.Escape && t();
                  },
                  [e, t, r],
                ),
                u = (0, n.useMemo)(() => {
                  const { innerWidth: e, innerHeight: t } = (0, Da.Y)(),
                    n = (0, Ta.Iv)(r),
                    l = Math.max(0, e - n.width),
                    o = Math.max(0, t - n.height);
                  return {
                    left: (0, Or.Z)(0, l, (null == a ? void 0 : a.left) || 0),
                    top: (0, Or.Z)(0, o, (null == a ? void 0 : a.top) || 0),
                  };
                }, [a, r]);
              return (
                (0, n.useEffect)(() => {
                  const t = (0, Da.Y)();
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
              isOpen: r,
              popperElement: i,
              anchorElement: e,
              anchorPosition: t,
              onClose: l,
            });
          return s.current && r
            ? (0, Ir.createPortal)(
                n.createElement(
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
      var Sr = a(83792),
        Pr = Object.defineProperty,
        kr = Object.getOwnPropertySymbols,
        Nr = Object.prototype.hasOwnProperty,
        Lr = Object.prototype.propertyIsEnumerable,
        jr = (e, t, a) =>
          t in e
            ? Pr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Mr = (0, m.i)(() => ({
          root: (0, b.iv)({ width: "max-content" }),
        })),
        Ar = (e) => {
          var t = e,
            { selectedCollectionId: a } = t,
            n = ((e, t) => {
              var a = {};
              for (var n in e)
                Nr.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && kr)
                for (var n of kr(e))
                  t.indexOf(n) < 0 && Lr.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["selectedCollectionId"]);
          const l = Mr();
          return r().createElement(
            xr,
            ((e, t) => {
              for (var a in t || (t = {})) Nr.call(t, a) && jr(e, a, t[a]);
              if (kr) for (var a of kr(t)) Lr.call(t, a) && jr(e, a, t[a]);
              return e;
            })({}, n),
            r().createElement(
              "div",
              { className: l.root },
              r().createElement(
                Sr.v,
                { dense: !0, noBorder: !0 },
                r().createElement(yr, { collectionId: a }),
                r().createElement(vr, { collectionId: a }),
              ),
            ),
          );
        },
        Tr = (e) => {
          const { activeMenu: t, setActiveMenu: a } = (0, pr.U)(),
            [l, o] = r().useState(void 0),
            i = r().useCallback(
              (t) => {
                t.preventDefault(),
                  o(l ? void 0 : { left: t.clientX, top: t.clientY }),
                  a(e);
              },
              [o, a, l],
            ),
            c = r().useCallback(() => {
              o(void 0), t === e && a(void 0);
            }, [o, a]),
            s = r().useCallback(
              (t) => {
                t.key === hr.et.F10 &&
                  t.shiftKey &&
                  (t.preventDefault(),
                  l ? c() : (o({ left: 0, top: 0 }), a(e)));
              },
              [o, a, l],
            );
          return (
            r().useEffect(() => {
              !t && Boolean(l) && c();
            }, [t]),
            (0, n.useMemo)(
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
      var _r = Object.defineProperty,
        Dr = Object.getOwnPropertySymbols,
        Rr = Object.prototype.hasOwnProperty,
        Br = Object.prototype.propertyIsEnumerable,
        Zr = (e, t, a) =>
          t in e
            ? _r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Fr = ({ collectionId: e, isTruncated: t }) => {
          const a = r().useRef(null),
            { active: n, setNodeRef: l } = (0, Zn.nB)({ id: e }),
            { selectedCollectionId: o, setSelectedCollectionId: i } = kn(),
            {
              openContextMenu: c,
              openContextMenuWithKeyboard: s,
              contextMenuProps: d,
            } = Tr(`collection_tab_context:${e}`),
            u = Ge(e),
            { records: m } = va(e),
            p = o === e;
          r().useEffect(() => {
            n && d.onClose();
          }, [n]);
          const b = r().useCallback(
            (e) => {
              l(e), (a.current = e);
            },
            [l],
          );
          return r().createElement(
            r().Fragment,
            null,
            r().createElement(Yn, {
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
            r().createElement(
              Ar,
              ((e, t) => {
                for (var a in t || (t = {})) Rr.call(t, a) && Zr(e, a, t[a]);
                if (Dr) for (var a of Dr(t)) Br.call(t, a) && Zr(e, a, t[a]);
                return e;
              })({ selectedCollectionId: e, anchorElement: a.current }, d),
            ),
          );
        },
        Ur = (0, m.i)((e) => ({
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
        Wr = ({ name: e, id: t }) => {
          var a;
          const n = Ur(),
            { items: l } = ra(t);
          return r().createElement(
            "div",
            { className: n.dragImage },
            r().createElement(
              ae.ZP,
              { textLevel: F.N.PRIMARY },
              e,
              " (",
              null != (a = null == l ? void 0 : l.length) ? a : 0,
              ")",
            ),
          );
        },
        Kr = () => {
          var e;
          const { selectedCollectionId: t, setSelectedCollectionId: a } = kn(),
            n = (0, yt.o)(),
            { records: l } = va(n);
          return r().createElement(_t, {
            count: null != (e = null == l ? void 0 : l.length) ? e : 0,
            draggable: !1,
            id: n,
            isSelected: t === n,
            onTabClick: () => a(n),
            title: r().createElement(te.Z, {
              code: "egstore.library.collections.tabs.favorites",
            }),
          });
        },
        zr = (e) => {
          const t = (0, yt.o)();
          return Ge(t, e);
        },
        Vr = (e) => {
          const { selectedCollectionId: t } = kn(),
            { collections: a } = Fe(e),
            r = (0, yt.o)();
          return (0, n.useMemo)(
            () =>
              (null == a ? void 0 : a.length)
                ? a.filter((e) => e.collectionId !== r)
                : [],
            [a, r, t],
          );
        },
        Hr = (e) => {
          const t = r().useRef();
          return (
            r().useEffect(() => {
              t.current = e;
            }, [e]),
            t.current
          );
        };
      var $r = a(95339),
        Gr = a(55156);
      const qr = (0, m.i)((e) => ({
          draggingRight: (0, b.iv)(
            (0, re.vQ)({ style: "solid", size: 2, color: e.accent }),
            (0, re.WL)(13),
          ),
          draggingLeft: (0, b.iv)(
            (0, re.sc)({ style: "solid", size: 2, color: e.accent }),
            (0, re.rv)(13),
          ),
          title: At(e),
        })),
        Yr = () => {
          const e = qr(),
            t = Vr(),
            a = zr(),
            { selectedCollectionId: l } = kn(),
            o = (() => {
              const e = Vr(),
                t = (0, oe.useLocalization)(),
                a = (0, n.useCallback)(
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
                onDragOver: ({ active: e, over: n }) =>
                  n
                    ? t(
                        "egstore.library.collections.announcements.drag_over_enter",
                        [a(e.id), a(n.id)],
                      )
                    : t(
                        "egstore.library.collections.announcements.drag_over_leave",
                        [a(e.id)],
                      ),
                onDragEnd: ({ active: e, over: n }) =>
                  n
                    ? t(
                        "egstore.library.collections.announcements.drag_end_over",
                        [a(e.id), a(n.id)],
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
              return (0, n.useCallback)(
                (t) => {
                  e((0, Me.Fv)(t));
                },
                [e],
              );
            })(),
            c = (0, yt.o)(),
            s = r().useRef(null),
            [d, u] = r().useState(null),
            [m, p] = r().useState({}),
            [g, v] = r().useState([]),
            [E, y] = r().useState(null),
            [f, h] = r().useState(0),
            [O, C] = r().useState(""),
            [I, w] = r().useState(0),
            [x, S] = r().useState(null),
            [P, k] = r().useState(!1),
            N = (0, Ln.Dy)(
              (0, Ln.VT)(Ln.we, { activationConstraint: { distance: 20 } }),
              (0, Ln.VT)(Ln.Lg, {
                coordinateGetter: Zn.is,
                keyboardCodes: {
                  start: [hr.et.Space],
                  cancel: [hr.et.Escape],
                  end: [hr.et.Space, hr.et.Enter],
                },
              }),
            ),
            L = Hr(f),
            j = Hr(O),
            M = Hr(I);
          r().useEffect(() => {
            null === d && I && u(I);
          }, [I]);
          const A = r().useCallback((t) => {
              t &&
                (t.classList.remove(...t.classList), t.classList.add(e.title));
            }, []),
            T = r().useCallback(() => {
              y(null), S(null), w(0), h(0), k(!1), u(null);
            }, []),
            _ = (e) => {
              if (
                ((e.code !== hr.et.ArrowLeft && e.code !== hr.et.ArrowRight) ||
                  S(e.code),
                e.code === hr.et.Escape && s.current)
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
          r().useEffect(
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
          const D = r().useCallback(
              (e) => {
                var a;
                const n =
                  null == (a = s.current)
                    ? void 0
                    : a.querySelectorAll("[data-dropzoneitem=true]");
                n &&
                  n.forEach((e) => {
                    A(e);
                  }),
                  (function ({
                    ev: e,
                    customCollections: t,
                    dragDirection: a,
                    isOverSame: n,
                    initialDragDirection: r,
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
                      n && a !== r && (-1 === a ? s-- : s++);
                      const d = (0, Zn.Rp)(t, e, s);
                      if (!(0, Gr.Z)(d, t)) {
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
            R = r().useCallback(
              (e) => {
                const a = t.find((t) => t.collectionId === e.active.id);
                a && y(a);
              },
              [t],
            ),
            B = r().useCallback(
              (t) => {
                var a, n, r, l, o;
                h(t.delta.x);
                const i =
                  x || (null == (a = t.over) ? void 0 : a.id) === j
                    ? null == (r = s.current)
                      ? void 0
                      : r.querySelector(
                          `[id=${Mt(null == (n = t.over) ? void 0 : n.id)}]`,
                        )
                    : null == (l = s.current)
                      ? void 0
                      : l.querySelector(`[id=${Mt(j)}]`);
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
            Z = r().useCallback(
              (t) => {
                var a, n, r, l, o;
                if (t.active.id === (null == (a = t.over) ? void 0 : a.id))
                  return;
                let i;
                k(!1),
                  C(
                    null != (r = null == (n = t.over) ? void 0 : n.id) ? r : "",
                  ),
                  (i = 1 === I ? e.draggingRight : e.draggingLeft);
                const c =
                  null == (o = s.current)
                    ? void 0
                    : o.querySelector(
                        `[id=${Mt(null == (l = t.over) ? void 0 : l.id)}]`,
                      );
                c && c.classList.add((0, b.cx)(e.title, i));
              },
              [I],
            );
          return (
            r().useEffect(() => {
              x
                ? x === hr.et.ArrowRight
                  ? w(1)
                  : x === hr.et.ArrowLeft && w(-1)
                : L && f && (L < f ? w(1) : L > f && w(-1));
            }, [L, f, x]),
            r().useEffect(() => {
              if (s.current) {
                const e = Array.from(
                  s.current.querySelectorAll("[data-dropzoneitem=true]"),
                );
                v(e);
              }
            }, [t]),
            r().useEffect(() => {
              const e = {};
              g.forEach((t) => {
                const a = t.id.substring(t.id.indexOf("-") + 1);
                e[a] = t.scrollWidth > t.clientWidth;
              }),
                p(e);
            }, [g, l, t]),
            r().createElement(
              r().Fragment,
              null,
              r().createElement(
                Ln.LB,
                {
                  sensors: N,
                  collisionDetection: Ln.ey,
                  onDragEnd: D,
                  onDragStart: R,
                  onDragOver: Z,
                  onDragMove: B,
                  accessibility: { announcements: o },
                },
                r().createElement(
                  Zn.Fo,
                  { items: t.map((e) => e.collectionId), strategy: Zn.PG },
                  r().createElement(
                    "div",
                    { ref: s, role: "tablist" },
                    a &&
                      r().createElement(Bn, {
                        allTab: r().createElement(Nn, null),
                        favoritesTab: r().createElement(Kr, null),
                        tabs: t.map((e) =>
                          r().createElement(Fr, {
                            key: e.collectionId,
                            collectionId: e.collectionId,
                            isTruncated: m[e.collectionId],
                          }),
                        ),
                        addCollectionButton: r().createElement(vt, null),
                      }),
                  ),
                ),
                s.current
                  ? (0, Ir.createPortal)(
                      r().createElement(
                        Ln.y9,
                        { style: { cursor: "copy" }, modifiers: [$r.K7] },
                        E
                          ? r().createElement(Wr, {
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
      const Jr = ({ animation: e }) =>
        r().createElement(Bn, {
          allTab: r().createElement(Ee.Od, {
            height: 30,
            width: 40,
            animation: e,
          }),
          favoritesTab: r().createElement(Ee.Od, {
            height: 30,
            width: 70,
            style: { marginRight: "30px", marginLeft: "30px" },
            animation: e,
          }),
          tabs: [],
          addCollectionButton: r().createElement(Ee.Od, {
            variant: Ee.Jy.Circle,
            height: 50,
            width: 50,
            animation: e,
          }),
        });
      var Xr = a(30052),
        Qr = a.n(Xr);
      const el = (0, m.i)((e) => ({
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
            "button:first-child": (0, re.wz)(10),
            [p.Uc.xl]: {
              marginTop: 0,
              height: "100%",
              width: "100%",
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            },
          }),
        })),
        tl = ({
          image: e,
          title: t,
          body: a,
          hideButton: n,
          newCollectionButton: l,
        }) => {
          const o = el();
          return r().createElement(
            "div",
            {
              className: o.root,
              "data-testid": "library-collections-intro-banner",
            },
            r().createElement("div", { className: o.image }, e),
            r().createElement(
              "div",
              { className: o.content },
              r().createElement(
                "div",
                { className: o.textContent },
                r().createElement(
                  "div",
                  { className: o.title },
                  r().createElement(ne.Z.Heading, { headingLevel: 1 }, t),
                ),
                r().createElement(
                  "div",
                  { className: o.body },
                  r().createElement(ae.ZP, { textLevel: F.N.SECONDARY }, a),
                ),
              ),
              r().createElement("div", { className: o.buttonDiv }, n, l),
            ),
          );
        };
      var al = a(67764),
        nl = a(6958),
        rl = a(43146);
      const ll = () => {
        const e = (0, qe.useSelector)(on.vR),
          t = (0, i.c)(),
          a = Vr(),
          { openModal: n } = Je(),
          { value: l, setValue: o } = nn({
            keyFn: () => `EGS_LIBRARY_INTRO_BANNER_HIDDEN_${e}`,
            localStorageEnabled: Boolean(e),
            initialValue: !1,
          }),
          c = r().useMemo(
            () => !l && !(null == a ? void 0 : a.length) && t,
            [l, a, t],
          );
        return (
          r().useEffect(() => {
            (null == a ? void 0 : a.length) && !l && o(!0);
          }, [null == a ? void 0 : a.length]),
          c
            ? r().createElement(
                r().Fragment,
                null,
                r().createElement(tl, {
                  image: r().createElement(rl.w, {
                    src: Qr(),
                    showBrokenOnError: !0,
                  }),
                  title: r().createElement(te.Z, {
                    code: "egstore.library.favorites_folders.intro.title",
                  }),
                  body: r().createElement(te.Z, {
                    code: "egstore.library.favorites_folders.intro.text",
                  }),
                  hideButton: r().createElement(
                    al.f5,
                    {
                      buttonWidth: R.WL.AUTO,
                      buttonHeight: R.Ey.DENSED,
                      onClick: () => o(!0),
                    },
                    r().createElement(te.Z, {
                      code: "egstore.library.favorites_folders.intro.button.hide",
                    }),
                  ),
                  newCollectionButton: r().createElement(
                    nl.gg,
                    {
                      buttonWidth: R.WL.AUTO,
                      buttonHeight: R.Ey.DENSED,
                      onClick: () => n(),
                    },
                    r().createElement(te.Z, {
                      code: "egstore.library.favorites_folders.intro.button.new",
                    }),
                  ),
                }),
              )
            : null
        );
      };
      var ol = a(43651);
      const il = (0, m.i)(() => ({
          root: (0, b.iv)({ marginTop: 40, textAlign: "center" }),
          image: (0, b.iv)({
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
          }),
          titleDiv: (0, b.iv)({ marginBottom: 30 }),
        })),
        cl = ({
          image: e,
          title: t,
          subtitle: a,
          buttonText: n,
          onButtonClick: l,
        }) => {
          const o = il();
          return r().createElement(
            "div",
            { className: o.root, "data-testid": "EmptyCollectionMessage" },
            r().createElement(
              N,
              null,
              r().createElement(L, { xs: 2 }),
              r().createElement(
                L,
                { xs: 8 },
                r().createElement(
                  d.x,
                  { centerContent: !0, direction: u.jO.Column },
                  e && r().createElement("div", { className: o.image }, e),
                  r().createElement(
                    "div",
                    { className: o.titleDiv },
                    r().createElement(ne.Z.Heading, { headingLevel: 2 }, t),
                    a &&
                      r().createElement(ne.Z.Heading, { headingLevel: 3 }, a),
                  ),
                  r().createElement(nl.gg, { onClick: l }, n),
                ),
              ),
              r().createElement(L, { xs: 2 }),
            ),
          );
        };
      var sl = a(29992),
        dl = a(29702),
        ul = a(24958),
        ml = a(47411),
        pl = Object.defineProperty,
        bl = Object.defineProperties,
        gl = Object.getOwnPropertyDescriptors,
        vl = Object.getOwnPropertySymbols,
        El = Object.prototype.hasOwnProperty,
        yl = Object.prototype.propertyIsEnumerable,
        fl = (e, t, a) =>
          t in e
            ? pl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        hl = (e, t) => {
          for (var a in t || (t = {})) El.call(t, a) && fl(e, a, t[a]);
          if (vl) for (var a of vl(t)) yl.call(t, a) && fl(e, a, t[a]);
          return e;
        },
        Ol = (e, t) => bl(e, gl(t));
      const Cl = (0, m.i)((e) => ({
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
            Ol(hl(hl({}, rt.ZP.quick("right")), ml.a), { overflow: "hidden" }),
          ),
          logoImage: (0, b.iv)(
            Ol(hl({}, ml.a), {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }),
          ),
          logoInner: (0, b.iv)({ width: "70%", backgroundSize: "contain" }),
          grayscale: (0, b.iv)(rt.ZP.quick("filter"), {
            filter: "grayscale(100%)",
            opacity: "0.3",
          }),
          indeterminate: (0, b.iv)(ul.Z.fadeInAndOut()),
        })),
        Il = ({
          image: e,
          indeterminate: t = !1,
          logo: a,
          percent: r = 0,
          children: l,
        }) => {
          const o = Cl(),
            i = n.createRef(),
            [c, s] = n.useState({ width: "100%", height: "100%" }),
            d = (0, Or.Z)(0, 1, r),
            u = d > 0 && d < 1 && !t,
            m = 100 * (1 - d),
            p = u;
          n.useEffect(() => {
            if (!i.current) return;
            const { offsetWidth: e, offsetHeight: t } = i.current;
            (c.width === e && c.height === t) || s({ width: e, height: t });
          }, [e, r]);
          const g = (0, b.cx)(o.image, {
              [o.grayscale]: p,
              [o.indeterminate]: t,
            }),
            v = (0, b.cx)(o.logoImage, { [o.grayscale]: p });
          return n.createElement(
            "div",
            { className: o.root },
            n.createElement(
              "div",
              { className: g, "data-testid": "base-image", ref: i },
              n.createElement("div", { className: o.imageInner }, e),
            ),
            u &&
              e &&
              n.createElement(
                "div",
                {
                  className: o.progressImageFrame,
                  style: { right: `${m}%` },
                  "data-testid": "progress-image",
                  "aria-hidden": !0,
                },
                n.createElement(
                  "div",
                  { className: o.imageInner, style: c },
                  e,
                ),
              ),
            a &&
              n.createElement(
                "div",
                {
                  className: v,
                  "data-testid": "logo-image",
                  "aria-hidden": !0,
                },
                n.createElement("div", { className: o.logoInner }, a),
              ),
            l,
          );
        };
      var wl = a(18356),
        xl = a(19166),
        Sl = Object.defineProperty,
        Pl = Object.defineProperties,
        kl = Object.getOwnPropertyDescriptors,
        Nl = Object.getOwnPropertySymbols,
        Ll = Object.prototype.hasOwnProperty,
        jl = Object.prototype.propertyIsEnumerable,
        Ml = (e, t, a) =>
          t in e
            ? Sl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Al = (e, t) => {
          for (var a in t || (t = {})) Ll.call(t, a) && Ml(e, a, t[a]);
          if (Nl) for (var a of Nl(t)) jl.call(t, a) && Ml(e, a, t[a]);
          return e;
        },
        Tl = (e, t) => Pl(e, kl(t));
      const _l = le.W.overlay,
        Dl = (0, m.i)((e, { landscape: t }) => ({
          overlay: (0, b.iv)(
            Tl(
              Al(
                { position: "absolute", top: t ? 10 : 0 },
                (0, re.t$)(t ? 10 : 0),
              ),
              {
                zIndex: _l,
                paddingBottom: t ? void 0 : "calc(4 / 3 * 100%)",
                width: t ? xl.nx : "100%",
                height: t ? xl.bg : void 0,
                pointerEvents: "none",
              },
            ),
          ),
          badges: (0, b.iv)(
            Tl(Al({ position: "absolute", bottom: 0 }, (0, re.F2)(0)), {
              padding: 10,
            }),
          ),
        })),
        Rl = ({ landscape: e, favorite: t, badges: a }) => {
          const n = Dl({ landscape: e });
          return r().createElement(
            "div",
            { className: n.overlay },
            t,
            a && !e
              ? r().createElement("div", { className: n.badges }, a)
              : null,
          );
        };
      var Bl = Object.defineProperty,
        Zl = Object.defineProperties,
        Fl = Object.getOwnPropertyDescriptors,
        Ul = Object.getOwnPropertySymbols,
        Wl = Object.prototype.hasOwnProperty,
        Kl = Object.prototype.propertyIsEnumerable,
        zl = (e, t, a) =>
          t in e
            ? Bl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Vl = (e, t) => {
          for (var a in t || (t = {})) Wl.call(t, a) && zl(e, a, t[a]);
          if (Ul) for (var a of Ul(t)) Kl.call(t, a) && zl(e, a, t[a]);
          return e;
        },
        Hl = (e, t) => Zl(e, Fl(t));
      const $l = (0, m.i)((e) => {
          const t = (0, b.iv)({ width: "100%", height: "100%" });
          return {
            component: t,
            root: (0, b.iv)({
              position: "relative",
              width: "100%",
              height: "100%",
            }),
            button: (0, b.iv)({
              position: "relative",
              "&:focus": { outline: "none" },
              "&::before": Hl(
                Vl(Vl({}, (0, rt.ip)("background-color")), Ot.d),
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
              "&::after": Hl(
                Vl(Vl(Vl({}, (0, rt.ip)("opacity")), ml.a), Ot.d),
                {
                  backgroundColor: fe.ix,
                  opacity: 0,
                  borderRadius: U.E0,
                  ".hasHover:hover &, .active &": { opacity: 0.15 },
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
              Hl(Vl({ position: "absolute" }, (0, re.F2)(0)), {
                bottom: 45,
                [p.Uc[p.Uo.lg]]: { bottom: 60 },
              }),
            ),
            settingsButton: (0, b.iv)({ width: 32, height: 22 }),
            settingsMenu: (0, b.iv)({
              width: "max-content",
              minWidth: 280,
              [p.Uc.lg]: { minWidth: 315 },
              [p.Uc.xl]: { minWidth: 340 },
            }),
            favoriteDiv: (0, b.iv)(
              Hl(Vl({ top: 10 }, (0, re.F2)(10)), {
                [`.${t}:hover &`]: { opacity: 1 },
              }),
            ),
          };
        }),
        Gl = ({
          active: e,
          badges: t,
          contextMenu: a,
          hasHover: n,
          renderSettingsMenu: l,
          subtitle: o,
          title: i,
          achievements: c,
          renderFavorite: s,
          image: d,
          forwardedRef: u,
          onClick: m,
          disabled: p,
          onContextMenu: g,
          onKeyDown: v,
        }) => {
          const E = $l(),
            y = (0, b.cx)(E.inner, E.button),
            f = (0, b.cx)(E.root, { active: e, hasHover: n }),
            h = r().createElement(
              r().Fragment,
              null,
              r().createElement("div", { className: E.image }, d),
              r().createElement(
                "div",
                { className: E.body },
                r().createElement(
                  "div",
                  { className: E.title },
                  r().createElement(ae.ZP, { textLevel: F.N.PRIMARY }, i),
                ),
                c,
                o,
              ),
            );
          return r().createElement(
            "div",
            {
              className: E.component,
              ref: u,
              onContextMenu: g,
              onKeyDown: v,
              "data-testid": "card",
            },
            r().createElement(
              "div",
              { className: f },
              m
                ? r().createElement(
                    ft.Z,
                    {
                      className: y,
                      onClick: m,
                      disabled: p,
                      "data-testid": "card-btn",
                    },
                    h,
                  )
                : r().createElement("div", { className: E.inner }, h),
              r().createElement(
                r().Fragment,
                null,
                r().createElement(Rl, {
                  landscape: !1,
                  favorite: s && s(E.favoriteDiv),
                  badges: t,
                }),
                l &&
                  r().createElement(
                    "div",
                    { className: E.settings },
                    l({ button: E.settingsButton, menu: E.settingsMenu }),
                  ),
                a,
              ),
            ),
          );
        },
        ql = (0, b.iv)({
          userSelect: "none",
          width: 32,
          height: 35,
          display: "inline-block",
          fill: "currentColor",
          flexShrink: 0,
          fontSize: "inherit",
        }),
        Yl = () =>
          r().createElement(
            "svg",
            {
              className: ql,
              viewBox: "0 0 32 35",
              xmlns: "http://www.w3.org/2000/svg",
            },
            r().createElement(
              "g",
              null,
              r().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.4411 18.599L26.4055 15.7685L5 4L11.2404 27.6167L15.9136 20.5737L21.5086 27.735L24.0361 25.7603L18.4411 18.599V18.599Z",
                fill: "currentColor",
              }),
              r().createElement("path", {
                d: "M26.5729 16.2396L27.6221 15.8667L26.6464 15.3303L5.24089 3.56185L4.21854 2.99978L4.51659 4.12773L10.757 27.7445L11.0415 28.8209L11.6571 27.8932L15.9467 21.4282L21.1146 28.0428L21.4225 28.4368L21.8165 28.129L24.344 26.1543L24.738 25.8464L24.4302 25.4524L19.2622 18.8378L26.5729 16.2396Z",
                stroke: "black",
                strokeOpacity: "0.8",
              }),
            ),
          );
      var Jl = a(29550),
        Xl = Object.defineProperty,
        Ql = Object.defineProperties,
        eo = Object.getOwnPropertyDescriptors,
        to = Object.getOwnPropertySymbols,
        ao = Object.prototype.hasOwnProperty,
        no = Object.prototype.propertyIsEnumerable,
        ro = (e, t, a) =>
          t in e
            ? Xl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const lo = (0, m.i)(() => ({
          root: (0, b.iv)({
            "> button": { width: "100%", height: "100%", padding: 0 },
          }),
        })),
        oo = n.forwardRef((e, t) => {
          var a = e,
            { onClick: r } = a,
            l = ((e, t) => {
              var a = {};
              for (var n in e)
                ao.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && to)
                for (var n of to(e))
                  t.indexOf(n) < 0 && no.call(e, n) && (a[n] = e[n]);
              return a;
            })(a, ["onClick"]);
          const o = lo(),
            i = (0, oe.useLocalization)();
          return n.createElement(
            "span",
            { className: o.root, "data-testid": "toggle" },
            n.createElement(
              tt.h,
              ((c = ((e, t) => {
                for (var a in t || (t = {})) ao.call(t, a) && ro(e, a, t[a]);
                if (to) for (var a of to(t)) no.call(t, a) && ro(e, a, t[a]);
                return e;
              })({ onClick: r }, l)),
              Ql(c, eo({ forwardRef: t }))),
              n.createElement(Jl.n, {
                titleAccess: i(
                  "diesel.common.smart_button.ariaLabel.toggleSettings",
                ),
              }),
            ),
          );
          var c;
        });
      var io = a(96685);
      const co = (0, io.L)(
        n.createElement(
          n.Fragment,
          null,
          n.createElement("path", {
            d: "M2.54611 3.01118H4.91013L4.91013 4.51118H2.54611L2.54418 4.51122V6.9462C2.54418 7.9908 2.97877 9.00017 3.76472 9.75007C4.1056 10.0753 4.50043 10.3399 4.93013 10.5354C4.9768 11.1312 5.10413 11.7056 5.30173 12.2485C4.33972 12.0056 3.4499 11.5229 2.72924 10.8353C1.65476 9.81014 1.04418 8.41196 1.04418 6.9462V4.47862C1.04418 3.63538 1.75019 3.01118 2.54611 3.01118Z",
          }),
          n.createElement("path", {
            d: "M16.9676 12.4289C17.217 11.9629 17.3962 11.457 17.4919 10.924C17.5445 10.631 17.5717 10.3299 17.5717 10.0227V2.95508C17.5717 2.87301 17.5116 2.79334 17.3984 2.71734C17.3752 2.70178 17.3498 2.68637 17.3223 2.67113C16.6192 2.28231 14.5108 2 12.019 2C8.95219 2 6.46606 2.42766 6.46606 2.95518L6.46607 10.0228C6.46607 11.9582 7.55378 13.6513 9.17779 14.5759C10.009 15.0491 10.9806 15.3209 12.0188 15.3209C14.1776 15.3209 16.0489 14.1455 16.9676 12.4289Z",
          }),
          n.createElement("path", {
            d: "M19.2274 12.1013C19.0662 12.1573 18.9023 12.2064 18.7363 12.2484C18.9339 11.7054 19.0612 11.131 19.1079 10.5352C19.5377 10.3396 19.9321 10.075 20.2726 9.75007C21.0586 9.00017 21.4932 7.9908 21.4932 6.9462V4.51122L21.4913 4.51118H19.1892V3.01118H21.4913C22.2872 3.01118 22.9932 3.63538 22.9932 4.47862V6.9462C22.9932 8.41196 22.3826 9.81014 21.3081 10.8353C20.7117 11.4044 19.9995 11.8329 19.2274 12.1013Z",
          }),
          n.createElement("path", {
            d: "M16.8006 20.2556C16.8006 21.219 14.6597 22 12.0188 22C9.37795 22 7.2371 21.219 7.2371 20.2556C7.2371 19.9407 7.46578 19.6453 7.86585 19.3903L7.86997 19.3876L8.77579 18.8998C9.65602 18.4256 10.3873 17.7355 10.8937 16.9008C11.0344 16.6691 11.3974 16.4983 12.0188 16.4983C12.6402 16.4983 13.0033 16.6691 13.1439 16.9008C13.6504 17.7355 14.3816 18.4256 15.2619 18.8998L16.1677 19.3876L16.1793 19.3951C16.5747 19.649 16.8006 19.9426 16.8006 20.2556Z",
          }),
        ),
        "Trophy",
      );
      var so = a(83206);
      const uo = (0, m.i)((e) => ({
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
        mo = () => {
          const e = uo();
          return n.createElement("div", {
            className: e.separator,
            role: "none",
          });
        };
      var po = a(238),
        bo = a(69459),
        go = a(56917),
        vo = Object.defineProperty,
        Eo = Object.defineProperties,
        yo = Object.getOwnPropertyDescriptors,
        fo = Object.getOwnPropertySymbols,
        ho = Object.prototype.hasOwnProperty,
        Oo = Object.prototype.propertyIsEnumerable,
        Co = (e, t, a) =>
          t in e
            ? vo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Io = (e, t) => {
          for (var a in t || (t = {})) ho.call(t, a) && Co(e, a, t[a]);
          if (fo) for (var a of fo(t)) Oo.call(t, a) && Co(e, a, t[a]);
          return e;
        },
        wo = (e, t) => Eo(e, yo(t));
      const xo = (0, m.i)(() => ({
          root: (0, b.iv)({ position: "relative" }),
          submenu: (0, b.iv)({ position: "absolute" }),
          icon: (0, b.iv)(
            (0, re.N2)(),
            Io({ display: "flex" }, (0, re.oI)(10)),
          ),
        })),
        So = (e) => {
          var t = e,
            { subMenu: a, selected: l, disabled: o } = t,
            i = ((e, t) => {
              var a = {};
              for (var n in e)
                ho.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && fo)
                for (var n of fo(e))
                  t.indexOf(n) < 0 && Oo.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["subMenu", "selected", "disabled"]);
          const c = xo(),
            s = (0, ol.Su)(),
            d = (0, n.useRef)(),
            [u, m] = r().useState(!1),
            [p, b] = r().useState(null),
            [g, v] = r().useState(null),
            {
              styles: E,
              attributes: y,
              update: f,
            } = (0, go.D)(p, g, {
              placement: s ? "left-start" : "right-start",
              modifiers: [
                { name: "offset", options: { offset: [-10, -5] } },
                { name: "computeStyles", options: { gpuAcceleration: !0 } },
                { name: "eventListeners", enabled: u },
              ],
            });
          (0, bo.P)(() => {
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
          return r().createElement(
            "div",
            {
              ref: b,
              className: c.root,
              onMouseLeave: o ? void 0 : O,
              onKeyDown: o
                ? void 0
                : (e) => {
                    e.key === hr.et.Tab &&
                      p &&
                      requestAnimationFrame(() => {
                        p.querySelector("button:focus") || O();
                      });
                  },
              role: "none",
              "data-testid": "MenuItemWithSubMenu",
            },
            r().createElement(
              br.c,
              wo(Io({ selected: l || u }, i), {
                "aria-expanded": u,
                onMouseOver: o ? void 0 : h,
                onKeyDown: o
                  ? void 0
                  : (e) => {
                      e.key === hr.et.Enter && m(!u),
                        e.key === hr.et.Escape && m(!1);
                    },
                horizontal: !0,
                disabled: o,
              }),
              r().createElement(
                "span",
                { className: c.icon },
                r().createElement(po.o, null),
              ),
            ),
            u &&
              r().createElement(
                "div",
                wo(
                  Io(
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
      var Po = Object.defineProperty,
        ko = Object.defineProperties,
        No = Object.getOwnPropertyDescriptors,
        Lo = Object.getOwnPropertySymbols,
        jo = Object.prototype.hasOwnProperty,
        Mo = Object.prototype.propertyIsEnumerable,
        Ao = (e, t, a) =>
          t in e
            ? Po(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        To = (e, t) => {
          for (var a in t || (t = {})) jo.call(t, a) && Ao(e, a, t[a]);
          if (Lo) for (var a of Lo(t)) Mo.call(t, a) && Ao(e, a, t[a]);
          return e;
        },
        _o = (e, t) => ko(e, No(t));
      const Do = (0, m.i)((e) => ({
          root: (0, b.iv)({
            position: "relative",
            height: 310,
            overflow: "hidden",
            pointerEvents: "none",
            width: 380,
            [p.Uc.xl]: { width: 420 },
          }),
          libraryCard: (0, b.iv)(
            _o(
              To(
                { position: "absolute", opacity: 0.6 },
                (0, re.NS)((0, re.t$)(16), (0, re.yd)("left")),
              ),
              {
                top: -110,
                width: 160,
                [p.Uc.xl]: { top: -160, width: 190 },
                "&::before": _o(To({}, Ot.d), {
                  position: "absolute",
                  right: -16,
                  top: -16,
                  left: -16,
                  bottom: -16,
                  borderRadius: fe.VY,
                  backgroundColor: e.backgroundOverlay,
                }),
              },
            ),
          ),
          achievements: (0, b.iv)({ display: "flex", alignItems: "center" }),
          trophyIcon: (0, b.iv)((0, re.wz)(4), {
            width: 15,
            height: 15,
            fontSize: 14,
            color: e.textSecondary,
          }),
          toggleBtn: (0, b.iv)({ bottom: 20 }),
          menu: (0, b.iv)(
            _o(To({ position: "absolute", top: 140 }, (0, re.t$)(134)), {
              boxShadow: `0 0 20px 0 ${fe.lu}`,
              width: 240,
              [p.Uc.xl]: { width: 280 },
            }),
          ),
          gradiant: (0, b.iv)({
            position: "absolute",
            width: "100%",
            height: 100,
            background: (0, dl.TR)({
              direction: { vertical: "top" },
              colors: [(0, sl.re)(e.background, 0).rgb(), e.background],
            }),
          }),
          cursor: (0, b.iv)(
            To({ position: "absolute", bottom: 0 }, (0, re.t$)(220)),
          ),
        })),
        Ro = ({ title: e, imageSrc: t }) => {
          const a = r().useRef(null),
            n = Do();
          return (
            r().useEffect(() => {
              var e;
              if (a.current) {
                (null == (e = a.current)
                  ? void 0
                  : e.querySelectorAll("button")
                ).forEach((e) => {
                  e.setAttribute("tabIndex", "-1");
                });
              }
            }, []),
            r().createElement(
              "div",
              { ref: a, className: n.root, "data-testid": "TutorialImage" },
              r().createElement(
                "div",
                { className: n.libraryCard },
                r().createElement(Gl, {
                  image: r().createElement(Il, {
                    image: r().createElement(rl.w, { alt: e, src: t }),
                  }),
                  title: r().createElement("span", null, e),
                  achievements: r().createElement(
                    "div",
                    { className: n.achievements },
                    r().createElement(
                      "div",
                      { className: n.trophyIcon },
                      r().createElement(co, null),
                    ),
                    r().createElement(
                      B.Z,
                      { textLevel: F.N.SECONDARY },
                      "33/100",
                    ),
                  ),
                  subtitle: r().createElement(wl.L6, null),
                  renderSettingsMenu: ({ button: e }) =>
                    r().createElement(
                      "div",
                      { className: (0, b.cx)(n.toggleBtn, e) },
                      r().createElement(oo, null),
                    ),
                }),
              ),
              r().createElement(
                "div",
                { className: n.menu },
                r().createElement(
                  Sr.v,
                  { dense: !0, noBorder: !0 },
                  r().createElement(so.s, {
                    title: r().createElement(te.Z, {
                      code: "diesel.library.settings.go_to_store_page",
                    }),
                  }),
                  r().createElement(mo, null),
                  r().createElement(so.s, {
                    title: r().createElement(te.Z, {
                      code: "diesel.library.settings.add_to_favorites",
                    }),
                  }),
                  r().createElement(So, {
                    title: r().createElement(te.Z, {
                      code: "diesel.library.settings.add_to_collection",
                    }),
                    selected: !0,
                  }),
                ),
              ),
              r().createElement("div", { className: n.gradiant }),
              r().createElement(
                "div",
                { className: n.cursor },
                r().createElement(Yl, null),
              ),
            )
          );
        };
      var Bo = a(95705),
        Zo = a(84244);
      const Fo = ({
          libraryItemTitle: e,
          libraryItemImageSrc: t = "",
          onButtonClick: a,
        }) => {
          const n = (0, Zo.ql)(),
            l = e || n("diesel.main.navigation.epic_games") || "";
          return r().createElement(cl, {
            image: r().createElement(Ro, { title: l, imageSrc: t }),
            title: r().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_custom.title",
            }),
            buttonText: r().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_custom.button",
            }),
            onButtonClick: a,
          });
        },
        Uo = ({ onActionClick: e }) => {
          const { records: t } = va(),
            a = r().useMemo(() => {
              var e;
              const a = Math.floor(Math.random() * t.length - 1);
              return null == (e = t[a]) ? void 0 : e.catalogItem;
            }, [t]),
            n = r().useMemo(() => (0, Bo.X3)(a), [a]);
          return r().createElement(Fo, {
            libraryItemTitle: null == a ? void 0 : a.title,
            libraryItemImageSrc: n,
            onButtonClick: e,
          });
        },
        Wo = (0, io.L)(
          n.createElement("path", {
            d: "M20.49 5.397C19.482 4.466 18.162 4 16.842 4c-1.32 0-2.64.466-3.647 1.397L12 6.503l-1.196-1.106C9.797 4.466 8.477 4 7.158 4c-1.32 0-2.64.466-3.647 1.397-2.013 1.861-2.015 4.878-.005 6.741L11.984 20l.016-.015.017.015 8.477-7.862c2.01-1.864 2.008-4.88-.005-6.74z",
          }),
          "Heart",
        ),
        Ko = ({ onActionClick: e }) =>
          r().createElement(cl, {
            image: r().createElement(
              "div",
              { style: { fontSize: 36 } },
              r().createElement(Wo, null),
            ),
            title: r().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_favorites.title",
            }),
            subtitle: r().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_favorites.text",
            }),
            buttonText: r().createElement(te.Z, {
              code: "egstore.library.collections.empty_collection_favorites.button",
            }),
            onButtonClick: e,
          });
      var zo = a(95771),
        Vo = a(35658),
        Ho = a(37559);
      const $o = ({
        title: e,
        activeFilters: t,
        type: a,
        filters: n,
        storeTags: l,
      }) => {
        const [o, i] = r().useState(!1);
        return (
          r().useEffect(() => {
            const e = l.filter((e) => e.count > 0);
            t.length || e.length || i(!0);
          }, [l, t]),
          r().useEffect(() => {
            o && i(!1);
          }, [o]),
          r().createElement(
            Vo.Z,
            {
              "data-testid": `library-filter-section-${a}`,
              renderTitle: ({ isCollapsed: t, toggleCollapsed: a }) => (
                o && !t && a(),
                r().createElement(Ho.Z, {
                  isCollapsed: t,
                  text: e || "",
                  toggleCollapsed: a,
                })
              ),
              initialCollapseState: !t.length,
              collapsible: !0,
            },
            n,
          )
        );
      };
      var Go = a(77960);
      const qo = ({
          title: e,
          storeTags: t,
          onFilterClick: a,
          activeFilters: n,
          type: l,
        }) =>
          r().createElement($o, {
            title: e,
            type: l,
            activeFilters: n,
            storeTags: t,
            filters: t.map((e) => {
              const t = !!n && (n.includes(e.name) || n.includes(e.id)),
                o = 0 === e.count;
              let i;
              return (
                (i = o && t ? "(0)" : o ? "" : `(${e.count})`),
                r().createElement(Go.Z, {
                  onClick: () => a({ type: l, name: e.name, id: e.id }),
                  text:
                    l === Ea.GENRE || l === Ea.FEATURE
                      ? `${e.name} ${i}`
                      : r().createElement(Zo.v0, {
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
        Yo = ({ onFilterClick: e, storeTags: t, activeFilters: a }) =>
          r().createElement(qo, {
            title: r().createElement(Zo.v0, {
              code: "diesel.store.browse.categories",
            }),
            storeTags: t || [],
            onFilterClick: e,
            activeFilters: a,
            type: Ea.CATEGORY,
          });
      var Jo = a(41402),
        Xo = a(22538),
        Qo = a(8280),
        ei = a(32396),
        ti = a(29985);
      const ai = () => {
        const e = (0, Xo.useLocation)(),
          t = (0, qe.useDispatch)(),
          a = (0, n.useMemo)(
            () => new URLSearchParams(e.search || ""),
            [e.search],
          ),
          r = (0, n.useCallback)(() => {
            t(
              (0, Qo.VF)((0, ei.generateRoutePath)(ti.s.LibraryPath), {
                search: "",
              }),
            );
          }, [t]);
        return (0, n.useMemo)(() => {
          var e, t, n, l, o, i, c;
          const s = null != (e = a.get("action")) ? e : void 0,
            d = null != (t = a.get("sort")) ? t : void 0,
            u = null != (n = a.get("appName")) ? n : "",
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
            resetQueryParams: r,
            offerItem: v,
            catalogItem: E,
            collectionId: y,
          };
        }, [a, r]);
      };
      var ni = a(58532);
      const ri = (0, m.i)((e) => ({
          icon: (0, b.iv)((0, re.rv)(10), {
            svg: {
              fontSize: 10,
              path: { stroke: e.textPrimary, strokeWidth: 2 },
            },
          }),
        })),
        li = ({ onFilterClick: e }) => {
          const t = ri(),
            { resetQueryParams: a } = ai(),
            { value: n } = nn({
              keyFn: () => rn.Cd,
              localStorageEnabled: !0,
              initialValue: "",
            });
          return r().createElement(Vo.Z, {
            "data-testid": "library-filter-section-custom-results",
            renderTitle: () =>
              r().createElement(Go.Z, {
                onClick: () => {
                  e({ type: Ea.CATALOG_ITEM_ID, name: Ea.CATALOG_ITEM_ID }),
                    a();
                },
                text: r().createElement(ni.Z, {
                  lines: 2,
                  text: null != n ? n : "",
                }),
                checked: !0,
                icon: r().createElement(
                  "div",
                  { className: t.icon },
                  r().createElement(Jo.T, null),
                ),
              }),
          });
        },
        oi = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          r().createElement(qo, {
            title: r().createElement(Zo.v0, {
              code: "diesel.store.browse.features",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: Ea.FEATURE,
          }),
        ii = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          r().createElement(qo, {
            title: r().createElement(Zo.v0, {
              code: "diesel.store.browse.genre",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: Ea.GENRE,
          });
      var ci = Object.defineProperty,
        si = Object.defineProperties,
        di = Object.getOwnPropertyDescriptors,
        ui = Object.getOwnPropertySymbols,
        mi = Object.prototype.hasOwnProperty,
        pi = Object.prototype.propertyIsEnumerable,
        bi = (e, t, a) =>
          t in e
            ? ci(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const gi = ({
          tagsForDisplay: e,
          currentTags: t,
          name: a,
          message: n,
        }) => {
          const r = t.find((e) => e.name === a),
            l = e.find((e) => e.name === a);
          if (l) l.count = l.count + 1;
          else {
            const t =
              ((o = ((e, t) => {
                for (var a in t || (t = {})) mi.call(t, a) && bi(e, a, t[a]);
                if (ui) for (var a of ui(t)) pi.call(t, a) && bi(e, a, t[a]);
                return e;
              })({}, r)),
              si(o, di({ message: n, count: 1 })));
            e.push(t);
          }
          var o, i;
          return (
            (i = "message"),
            e.sort((e, t) => {
              var a, n;
              const r = (null == (a = e[i]) ? void 0 : a.toUpperCase()) || "",
                l = (null == (n = t[i]) ? void 0 : n.toUpperCase()) || "";
              return r.localeCompare(l);
            })
          );
        },
        vi = (e, t) =>
          e.map((e) => {
            const a = t.find((t) => t.id === e.id);
            return a || ((e.count = 0), e);
          }),
        Ei = [
          {
            id: `${ha.GAMES}-filter`,
            name: ha.GAMES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${ha.ENGINES}-filter`,
            name: ha.ENGINES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${ha.SOFTWARE}-filter`,
            name: ha.SOFTWARE,
            groupName: "category",
            count: 0,
          },
          {
            id: `${ha.DIGITAL_EXTRAS}-filter`,
            name: ha.DIGITAL_EXTRAS,
            groupName: "category",
            count: 0,
          },
        ],
        yi = (e, t) => {
          const a = [];
          return (
            e.forEach((e) => {
              var n, r;
              const l = (
                null !=
                (r = null == (n = e.catalogItem) ? void 0 : n.categories)
                  ? r
                  : []
              ).map((e) => {
                var t;
                return null != (t = null == e ? void 0 : e.path) ? t : "";
              });
              Object.values(ha).forEach((e) => {
                if (l.includes(e)) {
                  const n = t(`egstore.library.filter_side_panel.${e}`) || "";
                  gi({
                    tagsForDisplay: a,
                    currentTags: Ei,
                    name: e,
                    message: n,
                  });
                }
              });
            }),
            a
          );
        },
        fi = () => {
          const { selectedCollectionId: e } = kn(),
            { records: t } = va(),
            { records: a } = va(e),
            r = (0, Zo.ql)();
          return (0, n.useMemo)(() => {
            const n = yi(t, r);
            return e !== Et.U.ALL
              ? ((e, t, a) => {
                  const n = yi(e, t);
                  return vi(a, n);
                })(a, r, n)
              : n;
          }, [t, e, a]);
        };
      var hi = Object.defineProperty,
        Oi = Object.defineProperties,
        Ci = Object.getOwnPropertyDescriptors,
        Ii = Object.getOwnPropertySymbols,
        wi = Object.prototype.hasOwnProperty,
        xi = Object.prototype.propertyIsEnumerable,
        Si = (e, t, a) =>
          t in e
            ? hi(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Pi = (e, t) => {
          const a = e.reduce(
              (e, t) => (
                (t.tags || []).forEach((t) => {
                  e[t] = (e[t] || 0) + 1;
                }),
                e
              ),
              {},
            ),
            n = Object.keys(a);
          return t.reduce((e, t) => {
            var r, l;
            return (
              n.includes(t.id) &&
                e.push(
                  ((r = ((e, t) => {
                    for (var a in t || (t = {}))
                      wi.call(t, a) && Si(e, a, t[a]);
                    if (Ii)
                      for (var a of Ii(t)) xi.call(t, a) && Si(e, a, t[a]);
                    return e;
                  })({}, t)),
                  (l = { count: a[t.id] }),
                  Oi(r, Ci(l))),
                ),
              e
            );
          }, []);
        },
        ki = ({
          records: e,
          collectionRecords: t,
          storeTags: a = [],
          selectedCollectionId: n,
        }) => {
          const r = Pi(e, a);
          return n !== Et.U.ALL
            ? ((e, t, a) => {
                const n = Pi(t, a);
                return vi(e, n);
              })(r, t, a)
            : r;
        };
      var Ni = a(74272),
        Li = a(24438);
      const ji = a.n(Li)()`
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
      var Mi = a(4663),
        Ai = a(73525),
        Ti = (e, t, a) =>
          new Promise((n, r) => {
            var l = (e) => {
                try {
                  i(a.next(e));
                } catch (e) {
                  r(e);
                }
              },
              o = (e) => {
                try {
                  i(a.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              i = (e) =>
                e.done ? n(e.value) : Promise.resolve(e.value).then(l, o);
            i((a = a.apply(e, t)).next());
          });
      const _i = (0, Ta.uB)("storeTagApi"),
        Di = (e, t) => `${e}:${t}`,
        Ri = (e, t) =>
          Ti(
            void 0,
            [e, t],
            function* (
              e,
              { groupName: t, isOnline: a, locale: n, sortBy: r, sortDir: l },
            ) {
              const { cached: o, isExpired: i } = yield ((e) =>
                Ti(void 0, [e], function* ({ groupName: e, locale: t }) {
                  try {
                    const a = yield _a.CV.get(Di(e, t)),
                      n = (0, Ta.bs)((null == a ? void 0 : a._expiresAt) || 0);
                    return {
                      cached: null == a ? void 0 : a.data,
                      isExpired: n,
                    };
                  } catch (e) {
                    return (
                      _i.warn("getCachedStoreTags", "failed IDB get", {
                        error: e.message,
                      }),
                      { cached: void 0, isExpired: !0 }
                    );
                  }
                }))({ groupName: t, locale: n });
              if (o && o.length && !i)
                return (
                  _i.log("getCachedOrRemote", "using indexedDB", {
                    records: o,
                  }),
                  o
                );
              if (!a)
                return (
                  _i.log(
                    "getCachedOrRemoteStoreTags",
                    "user is not online, using indexedDB",
                    { records: o },
                  ),
                  o || []
                );
              const c = yield ((e, t) =>
                Ti(
                  void 0,
                  [e, t],
                  function* (
                    e,
                    { groupName: t, locale: a, sortBy: n, sortDir: r },
                  ) {
                    var l, o;
                    try {
                      const i = yield (0, Ai.J)({
                        httpLink: e,
                        query: ji,
                        variables: {
                          groupName: t,
                          locale: a,
                          sortBy: n,
                          sortDir: r,
                        },
                      });
                      return (
                        _i.log("getRemoteStoreTags", "success", i),
                        null == (o = null == (l = i.Catalog) ? void 0 : l.tags)
                          ? void 0
                          : o.elements
                      );
                    } catch (e) {
                      return void _i.warn("getRemoteStoreTags", "failed", {
                        error: e.message,
                      });
                    }
                  },
                ))(e, { groupName: t, locale: n, sortBy: r, sortDir: l });
              return (
                _i.log("getCachedOrRemoteStoreTags", "using GQL item", {
                  groupName: t,
                  locale: n,
                }),
                c && c.length
                  ? (c &&
                      (_i.log(
                        "getCachedOrRemoteStoreTags",
                        "updating local cache",
                        { groupName: t },
                      ),
                      (({ groupName: e, tags: t, locale: a }) => {
                        if (!t.length || !a) return;
                        const n = {
                          _expiresAt: (0, Ta.g6)(Ni.ed),
                          groupName: e,
                          id: Di(e, a),
                          data: t,
                        };
                        _a.CV.put(n).catch((e) => {
                          _i.warn("setCachedStoreTags", "failed IDB put", {
                            error: e.message,
                          });
                        });
                      })({ groupName: t, tags: c, locale: n })),
                    c)
                  : (_i.log(
                      "getCachedOrRemoteStoreTags",
                      "remote tags failed to load, using indexedDB",
                      { records: o },
                    ),
                    o || [])
              );
            },
          );
      var Bi = a(73323);
      const Zi = ({ groupName: e, sortBy: t, sortDir: a }) => {
          const n = (0, oe.useLocalizationLocale)(),
            r = (0, i.c)(),
            l = (0, Bi.xj)(),
            o = (0, Mi.O)({
              query: ji,
              variables: { groupName: e, locale: n, sortBy: t, sortDir: a },
            }),
            { data: c } = (0, Ma.aM)(o, () =>
              Ri(l, {
                groupName: e,
                isOnline: r,
                locale: n,
                sortBy: t,
                sortDir: a,
              }),
            );
          return c;
        },
        Fi = [
          {
            id: `${fa.WINDOWS}-filter`,
            name: fa.WINDOWS,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${fa.WIN32}-filter`,
            name: fa.WIN32,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${fa.MAC}-filter`,
            name: fa.MAC,
            groupName: "platform",
            count: 0,
          },
        ],
        Ui = (e, t) => {
          const a = [];
          return (
            e.forEach((e) => {
              var n, r, l, o;
              const i =
                null !=
                (o =
                  null ==
                  (l = (
                    null !=
                    (r = null == (n = e.catalogItem) ? void 0 : n.releaseInfo)
                      ? r
                      : []
                  )[0])
                    ? void 0
                    : l.platform)
                  ? o
                  : [];
              Object.values(fa).forEach((e) => {
                if (i.includes(e)) {
                  const n = t(`egstore.library.filter_side_panel.${e}`) || "";
                  gi({
                    tagsForDisplay: a,
                    currentTags: Fi,
                    name: e,
                    message: n,
                  });
                }
              });
            }),
            a
          );
        },
        Wi = () => {
          const { selectedCollectionId: e } = kn(),
            { records: t } = va(),
            { records: a } = va(e),
            r = (0, oe.useLocalization)();
          return (0, n.useMemo)(() => {
            const n = Ui(t, r);
            return e !== Et.U.ALL
              ? ((e, t, a) => {
                  const n = Ui(e, t);
                  return vi(a, n);
                })(a, r, n)
              : n;
          }, [t, e, a]);
        },
        Ki = ({ onFilterClick: e, activeFilters: t, numberOfItems: a = 0 }) => {
          const n = !!t && t.includes(Ea.INSTALLED),
            l = 0 === a;
          let o;
          return (
            (o = l && n ? "(0)" : l ? "" : `(${a})`),
            r().createElement(Vo.Z, {
              "data-testid": "library-filter-section-installed",
              renderTitle: () =>
                r().createElement(Go.Z, {
                  onClick: () => e({ type: Ea.INSTALLED, name: Ea.INSTALLED }),
                  text: r().createElement(Zo.v0, {
                    code: "egstore.library.filter_side_panel.installed",
                    args: [o],
                  }),
                  checked: n,
                  disabled: l,
                }),
            })
          );
        };
      var zi = a(10658);
      const Vi = r().forwardRef(({ onChange: e, onClear: t, value: a }, n) => {
          const l = (0, oe.useLocalization)();
          return r().createElement(zi.Z, {
            "data-testid": "library-filter-section-keyword",
            ref: n,
            onChange: e,
            onClear: t,
            placeholder: l(
              "egstore.library.hub.product.list.search_placeholder",
            ),
            value: a,
          });
        }),
        Hi = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          r().createElement(qo, {
            title: r().createElement(Zo.v0, {
              code: "diesel.products.about.meta.platform",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: Ea.PLATFORM,
          });
      var $i = a(73497);
      const Gi = (0, m.i)((e) => ({
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
        qi = ({
          sectionTitle: e,
          filterByKeyword: t,
          customResults: a,
          installed: n,
          genres: l,
          features: o,
          categories: i,
          platforms: c,
        }) => {
          const s = Gi();
          return r().createElement(
            $i.Z,
            null,
            r().createElement("div", { className: s.titleDiv }, e),
            r().createElement("div", { className: s.keywordFilter }, t),
            a,
            n,
            l,
            o,
            i,
            c,
          );
        },
        Yi = { padding: "10px 0", marginLeft: 12 },
        Ji = { paddingBottom: 10, marginLeft: 12 },
        Xi = ({ animation: e }) =>
          r().createElement(
            "div",
            { style: Yi },
            r().createElement(Ee.Od, { animation: e, height: 14, width: 100 }),
          ),
        Qi = ({ animation: e }) =>
          r().createElement(qi, {
            sectionTitle: r().createElement(
              "div",
              { style: Ji },
              r().createElement(Ee.Od, { animation: e, height: 14, width: 50 }),
            ),
            filterByKeyword: r().createElement(Ee.Od, {
              animation: e,
              height: 40,
              width: 160,
            }),
            genres: r().createElement(
              Vo.Z,
              {
                renderTitle: () =>
                  r().createElement(
                    "div",
                    { style: Yi },
                    r().createElement(Ee.Od, {
                      animation: e,
                      height: 14,
                      width: 50,
                    }),
                  ),
              },
              r().createElement(Xi, { animation: e }),
              r().createElement(Xi, { animation: e }),
              r().createElement(Xi, { animation: e }),
            ),
          });
      var ec = a(36751),
        tc = a(257);
      const ac = () => {
          const {
              selectedFilters: e,
              resetFilters: t,
              keywordValue: a,
              setKeywordValue: l,
              numberActiveFilters: o,
              onFilterClick: i,
            } = hn(),
            { selectedCollectionId: c } = kn(),
            { records: s } = va(c),
            d = (0, qe.useSelector)(ln.xp),
            { resetQueryParams: u } = ai(),
            m = fi(),
            p = Wi(),
            b = (() => {
              const { selectedCollectionId: e } = kn(),
                t = Zi({ groupName: Ea.GENRE, sortBy: Ni.sH, sortDir: Ni.NV }),
                { records: a } = va(),
                { records: r } = va(e);
              return (0, n.useMemo)(
                () =>
                  ki({
                    records: a,
                    collectionRecords: r,
                    storeTags: t,
                    selectedCollectionId: e,
                  }),
                [a, r, t, e],
              );
            })(),
            g = (() => {
              const { selectedCollectionId: e } = kn(),
                t = Zi({
                  groupName: Ea.FEATURE,
                  sortBy: Ni.sH,
                  sortDir: Ni.NV,
                }),
                a = Zi({
                  groupName: "epicfeature",
                  sortBy: Ni.sH,
                  sortDir: Ni.NV,
                }),
                r = (0, n.useMemo)(() => {
                  if (t && a) return [...a, ...t];
                }, [t, a]),
                { records: l } = va(),
                { records: o } = va(e);
              return (0, n.useMemo)(
                () =>
                  ki({
                    records: l,
                    collectionRecords: o,
                    storeTags: r,
                    selectedCollectionId: e,
                  }),
                [l, o, r, e],
              );
            })(),
            v = r().useMemo(
              () => Ia({ items: s, installedRecords: d.latestValue }).length,
              [s, d.latestValue],
            ),
            [E, y] = (0, n.useState)(a),
            [f] = (0, zo.Z)(E, 100, { trailing: !0 });
          r().useEffect(() => {
            l(null != f ? f : "");
          }, [f]),
            r().useEffect(() => {
              a !== f && y(a);
            }, [a]);
          return r().createElement(qi, {
            sectionTitle: r().createElement(
              r().Fragment,
              null,
              r().createElement(tc.Z, {
                text: r().createElement(te.Z, {
                  code: "diesel.store.browse.filters",
                  args: o > 0 ? [`(${o})`] : [""],
                }),
              }),
              o > 0 &&
                r().createElement(ec.Z, {
                  onClick: () => {
                    t(), u();
                  },
                  text: r().createElement(te.Z, {
                    code: "diesel.store.browse.reset",
                  }),
                }),
            ),
            filterByKeyword: r().createElement(Vi, {
              onChange: (e) => y(e.target.value),
              onClear: () => {
                y(""), l("");
              },
              value: E,
            }),
            installed: r().createElement(Ki, {
              onFilterClick: i,
              activeFilters: e[Ea.INSTALLED],
              numberOfItems: v,
            }),
            customResults: e[Ea.CATALOG_ITEM_ID].length
              ? r().createElement(li, { onFilterClick: i })
              : null,
            genres: b.length
              ? r().createElement(ii, {
                  onFilterClick: i,
                  storeTags: b,
                  activeFilters: e[Ea.GENRE],
                })
              : null,
            features: g.length
              ? r().createElement(oi, {
                  onFilterClick: i,
                  storeTags: g,
                  activeFilters: e[Ea.FEATURE],
                })
              : null,
            categories: m.length
              ? r().createElement(Yo, {
                  onFilterClick: i,
                  storeTags: m,
                  activeFilters: e[Ea.CATEGORY],
                })
              : null,
            platforms: p.length
              ? r().createElement(Hi, {
                  onFilterClick: i,
                  storeTags: p,
                  activeFilters: e[Ea.PLATFORM],
                })
              : null,
          });
        },
        nc = () =>
          r().createElement(
            Ye.n4,
            { fallback: r().createElement(Qi, null) },
            r().createElement(ac, null),
          ),
        rc = (0, io.L)(
          n.createElement("path", {
            d: "M5 4a1 1 0 00-1 1v5.2a1 1 0 001 1h5.2a1 1 0 001-1V5a1 1 0 00-1-1H5zm8.8 0a1 1 0 00-1 1v5.2a1 1 0 001 1H19a1 1 0 001-1V5a1 1 0 00-1-1h-5.2zM4 13.8a1 1 0 011-1h5.2a1 1 0 011 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.2zm9.8-1a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-5.2a1 1 0 00-1-1h-5.2z",
          }),
          "Library",
        ),
        lc = (0, io.L)(
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22 2H8v2h14V2zm0 18H8v2h14v-2zM8 11h14v2H8v-2zm-2.5 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
          }),
          "List",
        );
      var oc = a(91575),
        ic = Object.defineProperty,
        cc = Object.defineProperties,
        sc = Object.getOwnPropertyDescriptors,
        dc = Object.getOwnPropertySymbols,
        uc = Object.prototype.hasOwnProperty,
        mc = Object.prototype.propertyIsEnumerable,
        pc = (e, t, a) =>
          t in e
            ? ic(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        bc = (e, t) => {
          for (var a in t || (t = {})) uc.call(t, a) && pc(e, a, t[a]);
          if (dc) for (var a of dc(t)) mc.call(t, a) && pc(e, a, t[a]);
          return e;
        };
      const gc = (0, m.i)((e, { isGridSelected: t }) => {
          return {
            gridSelected: (0, b.iv)(
              ((a = bc(
                {
                  cursor: t ? "default" : "pointer",
                  backgroundColor: t ? e.backgroundOverlay : void 0,
                  padding: 3,
                  height: 30,
                },
                (0, re.wz)(3),
              )),
              (n = {
                "&::after, &::hover": t
                  ? { backgroundColor: "transparent", opacity: 0 }
                  : {},
              }),
              cc(a, sc(n))),
            ),
            listSelected: (0, b.iv)({
              cursor: t ? "pointer" : "default",
              backgroundColor: t ? void 0 : e.backgroundOverlay,
              padding: 6,
              height: 30,
              "&::after, &::hover": t
                ? {}
                : { backgroundColor: "transparent", opacity: 0 },
            }),
            gridIcon: (0, b.iv)({ fontSize: 24 }),
          };
          var a, n;
        }),
        vc = ({ value: e, onChange: t }) => {
          const a = e === rn.ms.Grid,
            r = gc({ isGridSelected: a }),
            l = n.useCallback(() => t(rn.ms.Grid), [t]),
            o = n.useCallback(() => t(rn.ms.List), [t]);
          return n.createElement(
            d.x,
            null,
            n.createElement(
              oc.mJ,
              {
                event: {
                  eventAction: "library-hubs-click-grid-layout",
                  eventLabel: "library-hubs-grid-layout",
                  eventValue: e,
                },
              },
              n.createElement(
                tt.h,
                {
                  "aria-label": "grid",
                  disabled: e === rn.ms.Grid,
                  buttonWidth: R.WL.AUTO,
                  buttonHeight: R.Ey.DENSED,
                  onClick: l,
                  variantClassName: r.gridSelected,
                },
                n.createElement(
                  "span",
                  { className: r.gridIcon },
                  n.createElement(rc, null),
                ),
              ),
            ),
            n.createElement(
              oc.mJ,
              {
                event: {
                  eventAction: "library-hubs-click-list-layout",
                  eventLabel: "library-hubs-list-layout",
                  eventValue: e,
                },
              },
              n.createElement(
                tt.h,
                {
                  "aria-label": "list",
                  disabled: e === rn.ms.List,
                  buttonWidth: R.WL.AUTO,
                  buttonHeight: R.Ey.DENSED,
                  onClick: o,
                  variantClassName: r.listSelected,
                },
                n.createElement(lc, null),
              ),
            ),
          );
        },
        Ec = (0, m.i)(() => ({
          sortMenu: (0, b.iv)((0, re.wz)(10), { minWidth: 210 }),
          rightPadding: (0, b.iv)((0, re.wz)(3)),
        })),
        yc = ({ layoutToggle: e, sortMenu: t }) => {
          const a = Ec();
          return n.createElement(
            d.x,
            { alignItems: u.Ks.Center, justify: u.jf.SpaceBetween },
            n.createElement(
              "div",
              { className: a.sortMenu, "data-testid": "sort-menu" },
              t,
            ),
            n.createElement(
              d.x,
              { justify: u.jf.End, "data-testid": "layout-toggle" },
              e,
            ),
          );
        };
      var fc = a(71737),
        hc = a(56480),
        Oc = Object.defineProperty,
        Cc = Object.defineProperties,
        Ic = Object.getOwnPropertyDescriptors,
        wc = Object.getOwnPropertySymbols,
        xc = Object.prototype.hasOwnProperty,
        Sc = Object.prototype.propertyIsEnumerable,
        Pc = (e, t, a) =>
          t in e
            ? Oc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const kc = (e) => {
        const t = (0, je.P)(
            hc.$n,
            hc.A2,
            ((n = ((e, t) => {
              for (var a in t || (t = {})) xc.call(t, a) && Pc(e, a, t[a]);
              if (wc) for (var a of wc(t)) Sc.call(t, a) && Pc(e, a, t[a]);
              return e;
            })({}, e)),
            (r = { enabled: !1 !== (null == e ? void 0 : e.enabled) }),
            Cc(n, Ic(r))),
          ),
          { data: a } = t;
        var n, r;
        return {
          totalPlaytime: a,
          query: ((e, t) => {
            var a = {};
            for (var n in e) xc.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
            if (null != e && wc)
              for (var n of wc(e))
                t.indexOf(n) < 0 && Sc.call(e, n) && (a[n] = e[n]);
            return a;
          })(t, ["data"]),
        };
      };
      var Nc = a(10968),
        Lc = Object.defineProperty,
        jc = Object.defineProperties,
        Mc = Object.getOwnPropertyDescriptors,
        Ac = Object.getOwnPropertySymbols,
        Tc = Object.prototype.hasOwnProperty,
        _c = Object.prototype.propertyIsEnumerable,
        Dc = (e, t, a) =>
          t in e
            ? Lc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Rc = [
          rn.ER.Recent_Played,
          rn.ER.Recent_Purchased,
          rn.ER.Alphabetical_ASC,
          rn.ER.Alphabetical_DESC,
          rn.ER.Time_Played,
        ],
        Bc = (e) => {
          const { value: t, setValue: a } = nn(
            ((r = ((e, t) => {
              for (var a in t || (t = {})) Tc.call(t, a) && Dc(e, a, t[a]);
              if (Ac) for (var a of Ac(t)) _c.call(t, a) && Dc(e, a, t[a]);
              return e;
            })({}, e)),
            (l = { initialValue: rn.ER.Alphabetical_ASC, allowedValues: Rc }),
            jc(r, Mc(l))),
          );
          var r, l;
          const { recordsMap: o } = (0, fc.B$)(),
            { totalPlaytime: i } = kc({ suspense: !1 }),
            c = (0, n.useCallback)(
              (e) => {
                switch (t) {
                  case rn.ER.Alphabetical_ASC:
                    return (0, Nc.He)(e, rn.Sr.ASC);
                  case rn.ER.Alphabetical_DESC:
                    return (0, Nc.He)(e, rn.Sr.DESC);
                  case rn.ER.Recent_Played:
                    return (0, Nc.vG)(o, e);
                  case rn.ER.Recent_Purchased:
                    return (0, Nc.K_)(e);
                  case rn.ER.Time_Played:
                    return (0, Nc.IR)(e, i);
                  default:
                    return e;
                }
              },
              [o, t, i],
            );
          return { sortType: t, setSortType: a, applySortType: c };
        };
      var Zc = a(78512);
      const Fc = ({ sortType: e = rn.ER.Alphabetical_ASC, onChange: t }) => {
          const a = (0, Zo.ql)(),
            r = n.useMemo(
              () =>
                ((e) => [
                  {
                    label:
                      e("egstore.library.sort.recently_played") ||
                      rn.ER.Recent_Played,
                    value: rn.ER.Recent_Played,
                  },
                  {
                    label:
                      e("egstore.library.sort.recently_purchased") ||
                      rn.ER.Recent_Purchased,
                    value: rn.ER.Recent_Purchased,
                  },
                  {
                    label:
                      e("egstore.library.sort.alphabetical.asc") ||
                      rn.ER.Alphabetical_ASC,
                    value: rn.ER.Alphabetical_ASC,
                  },
                  {
                    label:
                      e("egstore.library.sort.alphabetical.desc") ||
                      rn.ER.Alphabetical_DESC,
                    value: rn.ER.Alphabetical_DESC,
                  },
                  {
                    label:
                      e("egstore.library.sort.time_played") ||
                      rn.ER.Time_Played,
                    value: rn.ER.Time_Played,
                  },
                ])(a),
              [a],
            );
          return n.createElement(Zc.Z, {
            id: "sort-dropdown",
            label: n.createElement(Zo.v0, {
              code: "egstore.library.sort.title",
            }),
            options: r,
            selectedValue: e,
            onChange: t,
          });
        },
        Uc = ({
          layoutType: e = rn.ms.Grid,
          onLayoutChange: t,
          onSortChange: a,
          sortType: r = rn.ER.Alphabetical_ASC,
        }) =>
          n.createElement(yc, {
            sortMenu: n.createElement(Fc, { sortType: r, onChange: a }),
            layoutToggle: n.createElement(vc, { value: e, onChange: t }),
          });
      var Wc = Object.defineProperty,
        Kc = Object.defineProperties,
        zc = Object.getOwnPropertyDescriptors,
        Vc = Object.getOwnPropertySymbols,
        Hc = Object.prototype.hasOwnProperty,
        $c = Object.prototype.propertyIsEnumerable,
        Gc = (e, t, a) =>
          t in e
            ? Wc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const qc = () => {
        const e = (0, qe.useSelector)(on.vR),
          t = {
            keyFn: () => `${rn.i3}_${e || Oa.v.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          {
            value: a,
            setValue: n,
            query: r,
          } = nn(
            ((l = ((e, t) => {
              for (var a in t || (t = {})) Hc.call(t, a) && Gc(e, a, t[a]);
              if (Vc) for (var a of Vc(t)) $c.call(t, a) && Gc(e, a, t[a]);
              return e;
            })({}, t)),
            (o = {
              initialValue: rn.ms.Grid,
              allowedValues: [rn.ms.Grid, rn.ms.List],
            }),
            Kc(l, zc(o))),
          );
        var l, o;
        return { layoutType: a, setLayoutType: n, isLoaded: r.isSuccess };
      };
      var Yc = Object.defineProperty,
        Jc = Object.defineProperties,
        Xc = Object.getOwnPropertyDescriptors,
        Qc = Object.getOwnPropertySymbols,
        es = Object.prototype.hasOwnProperty,
        ts = Object.prototype.propertyIsEnumerable,
        as = (e, t, a) =>
          t in e
            ? Yc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ns = (e, t) => {
          for (var a in t || (t = {})) es.call(t, a) && as(e, a, t[a]);
          if (Qc) for (var a of Qc(t)) ts.call(t, a) && as(e, a, t[a]);
          return e;
        },
        rs = (e, t) => Jc(e, Xc(t));
      const ls = (xl.bg - 24) / 2,
        os = (xl.nx - 24) / 2,
        is = (0, m.i)((e) => {
          const t = (0, b.iv)({ width: "100%" });
          return {
            component: t,
            root: (0, b.iv)(
              rs(ns({}, (0, rt.ip)("background-color")), {
                position: "relative",
                backgroundColor: e.level1,
                height: xl.Zg,
                border: 0,
                borderRadius: U.E0,
                display: "flex",
                alignItems: "center",
                "&.hasHover:hover, &.active": {
                  backgroundColor: e.level2,
                  color: e.accentText,
                },
              }),
            ),
            image: (0, b.iv)({
              position: "relative",
              borderRadius: U.E0,
              margin: 10,
              height: xl.bg,
              width: xl.nx,
              backgroundColor: e.backgroundOverlay,
              "&::after": rs(
                ns(ns(ns({}, (0, rt.ip)("opacity")), ml.a), Ot.d),
                {
                  borderRadius: U.E0,
                  backgroundColor: fe.ix,
                  opacity: 0,
                  ".hasHover:hover &, .active &": { opacity: 0.15 },
                },
              ),
            }),
            title: (0, b.iv)((0, re.WL)(5), {
              "button:hover &, button:focus &": { textDecoration: "underline" },
            }),
            settings: (0, b.iv)((0, re.NS)((0, re.WL)(10), (0, re.rv)(35)), {
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
              rs(ns({ top: ls }, (0, re.F2)(os)), {
                [`.${t}:hover &`]: { opacity: 1 },
              }),
            ),
            infoText: (0, b.iv)({ fontSize: 12, color: e.textPrimary }),
          };
        }),
        cs = ({
          achievements: e,
          active: t,
          badges: a,
          contextMenu: r,
          hasHover: l,
          image: o,
          installSize: i,
          playtime: c,
          renderSettingsMenu: s,
          subtitle: m,
          title: p,
          renderFavorite: g,
          onClick: v,
          disabled: E,
          forwardedRef: y,
          onContextMenu: f,
          onKeyDown: h,
        }) => {
          const O = is(),
            C = (0, b.cx)(O.root, { active: t, hasHover: l }),
            I = n.useMemo(
              () =>
                v && l
                  ? n.createElement(
                      ft.Z,
                      { onClick: v, "data-testid": "card-btn", disabled: E },
                      n.createElement(
                        ae.ZP,
                        { textLevel: F.N.PRIMARY },
                        n.createElement("div", { className: O.title }, p),
                      ),
                      m,
                    )
                  : n.createElement(
                      n.Fragment,
                      null,
                      n.createElement(
                        ae.ZP,
                        { textLevel: F.N.PRIMARY },
                        n.createElement("div", { className: O.title }, p),
                      ),
                      m,
                    ),
              [p, l, v],
            );
          return n.createElement(
            "div",
            {
              className: O.component,
              ref: y,
              onContextMenu: f,
              onKeyDown: h,
              "data-testid": "card",
            },
            n.createElement(
              "div",
              { className: C },
              n.createElement("div", { className: O.image }, o),
              n.createElement(
                N,
                { justify: u.jf.SpaceBetween },
                n.createElement(L, { xs: 4, alignSelf: u.Nn.Center }, I),
                n.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  n.createElement(d.x, { centerContent: !0 }, e),
                ),
                n.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  n.createElement(
                    d.x,
                    { centerContent: !0 },
                    null != a ? a : "-",
                  ),
                ),
                n.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  n.createElement(
                    d.x,
                    { centerContent: !0 },
                    n.createElement("div", { className: O.infoText }, c),
                  ),
                ),
                n.createElement(
                  L,
                  { xs: 2, alignSelf: u.Nn.Center },
                  n.createElement(
                    d.x,
                    { centerContent: !0 },
                    n.createElement("div", { className: O.infoText }, i),
                  ),
                ),
              ),
              n.createElement(Rl, {
                landscape: !0,
                favorite: g && g(O.favoriteDiv),
              }),
              s
                ? n.createElement(
                    "div",
                    { className: O.settings },
                    s({ button: O.settingsButton, menu: O.settingsMenu }),
                  )
                : n.createElement("div", { className: O.settingsSpacer }),
              r,
            ),
          );
        };
      var ss = Object.defineProperty,
        ds = Object.defineProperties,
        us = Object.getOwnPropertyDescriptors,
        ms = Object.getOwnPropertySymbols,
        ps = Object.prototype.hasOwnProperty,
        bs = Object.prototype.propertyIsEnumerable,
        gs = (e, t, a) =>
          t in e
            ? ss(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        vs = (e, t) => {
          for (var a in t || (t = {})) ps.call(t, a) && gs(e, a, t[a]);
          if (ms) for (var a of ms(t)) bs.call(t, a) && gs(e, a, t[a]);
          return e;
        },
        Es = (e, t) => ds(e, us(t));
      const ys = {
          imageWrapper: (0, b.iv)(
            Es(vs({}, (0, fe.fF)(fe.oM.x3x4)), { borderRadius: fe.E0 }),
          ),
          fakeImage: (0, b.iv)(Es(vs({}, ml.a), { height: "auto" })),
        },
        fs =
          ({ Image: e, Layout: t }) =>
          ({ animation: a }) => {
            const r = {
              title: n.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                height: 20,
                width: "100%",
                animation: a,
              }),
              subtitle: n.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                height: 15,
                width: "50%",
                animation: a,
              }),
              image: n.createElement(e, { animation: a }),
            };
            return n.createElement(t, vs({}, r));
          },
        hs = fs({
          Image: ({ animation: e }) =>
            n.createElement(
              "div",
              { className: ys.imageWrapper },
              n.createElement(Ee.Od, {
                width: "100%",
                className: ys.fakeImage,
                animation: e,
              }),
            ),
          Layout: Gl,
        }),
        Os = fs({
          Image: ({ animation: e }) =>
            n.createElement(Ee.Od, {
              width: xl.nx,
              height: xl.bg,
              animation: e,
            }),
          Layout: cs,
        }),
        Cs = ({ animation: e }) =>
          n.createElement(yc, {
            sortMenu: n.createElement(Ee.Od, {
              width: 200,
              height: 30,
              animation: e,
            }),
            layoutToggle: n.createElement(
              d.x,
              null,
              n.createElement(Ee.Od, {
                width: 30,
                height: 30,
                style: { margin: "0 3px" },
                animation: e,
              }),
              n.createElement(Ee.Od, { width: 30, height: 30, animation: e }),
            ),
          });
      var Is = a(43442),
        ws = a(8132);
      const xs = (0, m.i)((e, t) => ({
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
        Ss = ({ onClick: e, numItems: t, code: a }) => {
          const n = xs(t);
          return r().createElement(
            ft.Z,
            {
              onClick: e,
              className: n.root,
              "data-testid": "empty-library-card",
            },
            r().createElement(
              "div",
              { className: n.body },
              r().createElement(
                "div",
                { className: n.title },
                r().createElement(
                  "div",
                  { className: n.icon },
                  r().createElement(ws.l, null),
                ),
                r().createElement(
                  ae.ZP,
                  { textLevel: F.N.PRIMARY },
                  r().createElement(te.Z, { code: a }),
                ),
              ),
            ),
          );
        };
      var Ps = Object.defineProperty,
        ks = Object.defineProperties,
        Ns = Object.getOwnPropertyDescriptors,
        Ls = Object.getOwnPropertySymbols,
        js = Object.prototype.hasOwnProperty,
        Ms = Object.prototype.propertyIsEnumerable,
        As = (e, t, a) =>
          t in e
            ? Ps(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ts = (e, t) => {
          for (var a in t || (t = {})) js.call(t, a) && As(e, a, t[a]);
          if (Ls) for (var a of Ls(t)) Ms.call(t, a) && As(e, a, t[a]);
          return e;
        };
      const _s = (0, m.i)((e) => {
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
              ((t = Ts({ fontSize: 11.25 }, (0, re.wz)(12))),
              (a = {
                marginTop: 2,
                [p.Uc.lg]: Ts({ fontSize: 15, marginTop: 3 }, (0, re.wz)(12.5)),
              }),
              ks(t, Ns(a))),
            ),
          };
          var t, a;
        }),
        Ds = ({ onClick: e, code: t }) => {
          const a = _s();
          return r().createElement(
            ft.Z,
            {
              onClick: e,
              className: a.root,
              "data-testid": "empty-library-card",
            },
            r().createElement(
              "div",
              { className: a.body },
              r().createElement(
                "div",
                { className: a.title },
                r().createElement(
                  "div",
                  { className: a.icon },
                  r().createElement(ws.l, null),
                ),
                r().createElement(
                  ae.ZP,
                  { textLevel: F.N.PRIMARY },
                  r().createElement(te.Z, { code: t }),
                ),
              ),
            ),
          );
        },
        Rs = ({ layout: e, numItems: t }) => {
          const a = (0, qe.useDispatch)(),
            n = (0, qe.useSelector)(on.LF),
            l = (0, Xo.useLocation)(),
            o = r().useCallback(
              () =>
                n === Oa.v.OFFLINE
                  ? a(Is.ZP.requestSignIn(l.pathname))
                  : a((0, Qo.VF)((0, ei.generateRoutePath)("/"))),
              [n],
            ),
            i = r().useMemo(
              () =>
                n === Oa.v.OFFLINE
                  ? "diesel.library.cards.shopOffline"
                  : "diesel.library.cards.shop",
              [n],
            );
          return e === rn.ms.Grid
            ? r().createElement(Ss, { onClick: o, numItems: t, code: i })
            : r().createElement(Ds, { onClick: o, code: i });
        };
      var Bs = a(88325);
      const Zs = (0, m.i)((e) => ({
          root: (0, b.iv)({
            width: "100%",
            borderTop: `1px solid ${e.backgroundOverlay}`,
            padding: "10px 0",
            display: "flex",
          }),
          title: (0, b.iv)((0, re.oI)(-65)),
          imageSpacer: (0, b.iv)({ width: 65 }),
          settingsSpacer: (0, b.iv)({ width: 77, height: "100%" }),
        })),
        Fs = () => {
          const e = Zs();
          return n.createElement(
            "div",
            { className: e.root },
            n.createElement("div", { className: e.imageSpacer }),
            n.createElement(
              N,
              null,
              n.createElement(
                L,
                { xs: 4 },
                n.createElement(
                  d.x,
                  { className: e.title, fillParent: !0, justify: u.jf.Start },
                  n.createElement(Bs.x, {
                    code: "egstore.library.hub.product.list.search_placeholder",
                  }),
                ),
              ),
              n.createElement(
                L,
                { xs: 2 },
                n.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  n.createElement(Bs.x, { code: "egstore.achievements" }),
                ),
              ),
              n.createElement(
                L,
                { xs: 2 },
                n.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  n.createElement(Bs.x, { code: "diesel.products.addons" }),
                ),
              ),
              n.createElement(
                L,
                { xs: 2 },
                n.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  n.createElement(Bs.x, {
                    code: "egstore.library.column.timePlayed",
                  }),
                ),
              ),
              n.createElement(
                L,
                { xs: 2 },
                n.createElement(
                  d.x,
                  { fillParent: !0, centerContent: !0 },
                  n.createElement(Bs.x, {
                    code: "egstore.library.column.size",
                  }),
                ),
              ),
            ),
            n.createElement("div", { className: e.settingsSpacer }),
          );
        },
        Us = (0, m.i)((e) => ({
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
            zIndex: _l + 1,
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
        Ws = ({
          footer: e,
          header: t,
          items: a,
          totalItems: r,
          layout: l,
          renderItem: o,
          shouldShowEmptyLibraryCard: i,
          renderEmptySearch: c,
          renderEmptyCollection: s,
          renderFilterSidePanel: d,
        }) => {
          const u = Us();
          return n.createElement(
            "div",
            {
              className: u.root,
              "data-testid": "ProductListSectionLayout",
              "data-layout": l,
            },
            n.createElement(
              N,
              { spacing: 20 },
              n.createElement(
                L,
                { xs: d ? 9 : 12, xxl: d ? 10 : 12 },
                t &&
                  !s &&
                  n.createElement(
                    "div",
                    {
                      className: u.header,
                      "data-testid": "product-list-section-header",
                    },
                    t,
                  ),
                n.createElement(
                  "div",
                  {
                    "data-layout": l,
                    "data-testid": "product-list-section-main",
                  },
                  l === rn.ms.List &&
                    !s &&
                    !c &&
                    n.createElement(
                      "div",
                      { "data-testid": "product-list-section-column-header" },
                      n.createElement(Fs, null),
                    ),
                  c,
                  s,
                  a &&
                    o &&
                    n.createElement(
                      "div",
                      { className: l === rn.ms.Grid ? u.cssGrid : u.cssList },
                      a.map((e, t) =>
                        n.createElement(
                          "div",
                          { key: e.relationshipId },
                          o(e, t),
                        ),
                      ),
                      i
                        ? n.createElement(
                            "div",
                            null,
                            n.createElement(Rs, {
                              layout: l,
                              numItems: r || 0,
                            }),
                          )
                        : null,
                    ),
                  n.createElement("div", { className: u.footer }, e),
                ),
              ),
              d &&
                n.createElement(
                  L,
                  { xs: 3, xxl: 2 },
                  n.createElement("aside", null, d),
                ),
            ),
          );
        };
      var Ks = Object.defineProperty,
        zs = Object.getOwnPropertySymbols,
        Vs = Object.prototype.hasOwnProperty,
        Hs = Object.prototype.propertyIsEnumerable,
        $s = (e, t, a) =>
          t in e
            ? Ks(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Gs = (e, t) => {
          for (var a in t || (t = {})) Vs.call(t, a) && $s(e, a, t[a]);
          if (zs) for (var a of zs(t)) Hs.call(t, a) && $s(e, a, t[a]);
          return e;
        };
      const qs = {
          footer: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
          }),
          pagination: (0, b.iv)({
            [fe.Uc.lg]: Gs({}, (0, re.wz)(31)),
            [fe.Uc.xl]: Gs({}, (0, re.wz)(42)),
            [fe.Uc.maxWidth]: Gs({}, (0, re.wz)(57)),
          }),
        },
        Ys = ({ animation: e }) =>
          r().createElement(
            "div",
            { className: qs.footer },
            r().createElement(Ee.Od, {
              variant: Ee.Jy.Rect,
              animation: e,
              width: 150,
              height: 30,
            }),
            r().createElement(
              "div",
              { className: qs.pagination },
              r().createElement(Ee.Od, {
                variant: Ee.Jy.Rect,
                animation: e,
                width: 150,
                height: 30,
              }),
            ),
            r().createElement(Ee.Od, {
              variant: Ee.Jy.Rect,
              animation: e,
              width: 100,
              height: 30,
            }),
          );
      var Js = a(81198);
      const Xs = new Array(12).fill(0).map((e, t) =>
          (0, Js.fS)({
            namespace: "skeleton",
            catalogItemId: `${t}`,
            appName: `app${t}`,
          }),
        ),
        Qs = ({ layout: e, animation: t }) => {
          const a = (0, ol.dD)(),
            n = e === rn.ms.Grid ? hs : Os;
          return r().createElement(Ws, {
            header: r().createElement(Cs, { animation: t }),
            footer: r().createElement(Ys, { animation: t }),
            items: Xs,
            layout: e,
            renderItem: () => r().createElement(n, { animation: t }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: a
              ? null
              : r().createElement(Qi, { animation: t }),
          });
        };
      var ed = a(8825);
      const td = () => {};
      var ad = a(83161),
        nd = a(78317),
        rd = a(83231),
        ld = a(6009),
        od = a(20147),
        id = a(22850);
      const cd = (0, b.iv)({
          verticalAlign: "top",
          "& span": {
            textTransform: "none",
            [fe.Uc.lgOnly]: { fontSize: 12 },
            [fe.Uc.maxWidth]: { fontSize: 12, lineHeight: "15px" },
          },
        }),
        sd = ({ children: e }) =>
          r().createElement(
            "span",
            { className: cd, "data-testid": "AchievementStatusText" },
            r().createElement(B.Z, { textLevel: F.N.SECONDARY }, e),
          );
      var dd = a(72668),
        ud = a(87869),
        md = Object.defineProperty,
        pd = Object.getOwnPropertySymbols,
        bd = Object.prototype.hasOwnProperty,
        gd = Object.prototype.propertyIsEnumerable,
        vd = (e, t, a) =>
          t in e
            ? md(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ed = (e, t) => {
          for (var a in t || (t = {})) bd.call(t, a) && vd(e, a, t[a]);
          if (pd) for (var a of pd(t)) gd.call(t, a) && vd(e, a, t[a]);
          return e;
        };
      const yd = (0, m.i)(() => ({
          status: (0, b.iv)({ display: "flex", alignItems: "center" }),
          icon: (0, b.iv)(Ed({}, (0, re.wz)(4))),
        })),
        fd = ({ totalValue: e, progressionValue: t, platinumEarned: a }) => {
          const r = yd();
          return n.createElement(
            "div",
            { className: r.status, "data-testid": "AchievementsStatus" },
            a &&
              n.createElement(
                "div",
                { className: r.icon },
                n.createElement(dd.Z, {
                  icon: ud.kf.PLATINUM_TROPHY,
                  size: ud.J7.XXXSMALL,
                }),
              ),
            n.createElement(
              sd,
              null,
              n.createElement(Zo.v0, {
                code: "egstore.achievements.achievements",
                args: [t, e],
              }),
            ),
          );
        };
      var hd = a(62245),
        Od = a(55132),
        Cd = a(68356),
        Id = a(45145);
      var wd = a(4798);
      const xd = (e, t) => {
        const { achievementsLinkTo: a } = (({ sandboxId: e }, t) => ({
          achievementsLinkTo: (0, Id.Z)({ sandboxId: e }, t),
        }))({ sandboxId: e }, t);
        return { achievementsLinkTo: a, gotoAchievements: (0, wd.X)(a) };
      };
      var Sd = a(84498);
      const Pd = (e) =>
          Sd.Z.trackEvent({
            eventCategory: oc.ro.EGS_USER_INTERACTION,
            interactionType: oc.B8.CLICK,
            eventAction: oc.DI.EGS_ACHIEVEMENTS_LIBRARY_CLICK,
            eventValue: e,
          }),
        kd = (0, m.i)(() => ({
          button: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "15px 10px",
          }),
          progress: (0, b.iv)({
            width: 60,
            borderRadius: 25,
            borderWidth: 5,
            borderStyle: "solid",
            borderColor: "transparent",
            "button:hover &, button:focus &": {
              borderColor: fe.yS,
              "& > [role='progressbar']": { background: fe.e1 },
            },
            [p.Uc.lg]: { width: 75 },
            [p.Uc.xxl]: { width: 100 },
          }),
        })),
        Nd = ({ percent: e, tooltipText: t }) => {
          const a = kd(),
            n = r().useRef(null),
            { namespace: l } = (0, hd.wK)(),
            o = (0, qe.useDispatch)(),
            { gotoAchievements: i, achievementsLinkTo: c } = xd(l, {
              suspense: !1,
            }),
            s = r().useCallback(() => {
              o(Pd(c)), i();
            }, [i, c, o]);
          return r().createElement(
            r().Fragment,
            null,
            r().createElement(
              ft.Z,
              { className: a.button, onClick: s, ref: n },
              r().createElement(
                "div",
                { className: a.progress },
                r().createElement(Cd.E, {
                  percent: e,
                  variant: Cd.M.GREYSCALE,
                }),
              ),
            ),
            r().createElement(nt.u, { anchorRef: n, delay: 500 }, t),
          );
        };
      var Ld = Object.defineProperty,
        jd = Object.defineProperties,
        Md = Object.getOwnPropertyDescriptors,
        Ad = Object.getOwnPropertySymbols,
        Td = Object.prototype.hasOwnProperty,
        _d = Object.prototype.propertyIsEnumerable,
        Dd = (e, t, a) =>
          t in e
            ? Ld(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Rd = (e, t) => {
          for (var a in t || (t = {})) Td.call(t, a) && Dd(e, a, t[a]);
          if (Ad) for (var a of Ad(t)) _d.call(t, a) && Dd(e, a, t[a]);
          return e;
        };
      const Bd = ({ isGridView: e }) => {
          const t = (0, qe.useSelector)(rd.gB),
            { namespace: a, catalogItemId: r, appName: l } = (0, hd.wK)(),
            o = (0, Od.K)(a, r, l),
            c = (0, qe.useSelector)(nd.vR) || "",
            s = (0, i.c)(),
            d =
              (null == o ? void 0 : o.catalogItem) &&
              !(0, Bt.kV)(o.catalogItem.categories) &&
              !(0, Bt.Bv)(o.catalogItem.categories) &&
              !(0, Bt.ZT)(o.catalogItem.categories),
            { data: u } = (0, od.y)(
              { epicAccountId: c, sandboxId: a },
              { enabled: s },
            ),
            { productAchievements: m } = (0, ld.R)(
              { sandboxId: a },
              { enabled: Boolean(s && a) },
            ),
            p = u
              ? ((b = Rd({}, u)), jd(b, Md({ totalXP: 0 })))
              : {
                  achievementSets: [],
                  totalXP: 0,
                  totalUnlocked: 0,
                  playerAwards: [],
                };
          var b;
          const g =
              null != m
                ? m
                : {
                    achievementSets: [],
                    totalProductXP: 0,
                    totalAchievements: 0,
                  },
            {
              platinum: v,
              totalAchievements: E,
              totalUnlocked: y,
            } = (0, id.XA)(g, p, t),
            f = n.useMemo(() => (E > 0 ? y / E : 0), [y, E]);
          return d && E > 0
            ? e
              ? n.createElement(fd, {
                  totalValue: E,
                  progressionValue: y,
                  platinumEarned: v,
                })
              : n.createElement(Nd, { percent: f, tooltipText: `${y}/${E}` })
            : null;
        },
        Zd = (e) =>
          n.createElement(
            Ye.n4,
            { fallback: null },
            n.createElement(Bd, Rd({}, e)),
          );
      var Fd = a(73142),
        Ud = a(43077),
        Wd = a(92964);
      const Kd = () => {
          const e = (0, qe.useDispatch)();
          return (0, n.useCallback)(
            (t, a) => {
              e((0, Me.w0)({ collection: t, item: a }));
            },
            [e],
          );
        },
        zd = ({ disabled: e, onClick: t }) =>
          r().createElement(br.c, {
            horizontal: !0,
            title: r().createElement(te.Z, {
              code: "diesel.library.settings.add_to_favorites",
            }),
            onClick: t,
            disabled: e,
          }),
        Vd = () => {
          const e = (0, hd.wK)(),
            { namespace: t, catalogItemId: a, appName: n } = e,
            { setActiveMenu: l } = (0, pr.U)(),
            o = (0, i.c)({ suspense: !1 }),
            c = zr({ suspense: !1 }),
            s = (0, Od.K)(t, a, n),
            d = Kd(),
            u = r().useCallback(() => {
              c && s && d(c, s), l(void 0);
            }, [d, c, s, l]);
          return r().createElement(zd, { onClick: u, disabled: !o });
        },
        Hd = (e) => {
          const t = Object.values(e);
          return !!t.length && t.every(Boolean);
        },
        $d = (e, t) => {
          const { collections: a = [] } = Fe(t),
            r = (0, qe.useSelector)(Me.$4),
            l = (0, yt.o)(),
            o = (0, n.useMemo)(
              () =>
                a.reduce((t, a) => {
                  var n;
                  const l =
                    null == (n = r[a.collectionId]) ? void 0 : n.latestValue;
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
              [e, a, r],
            ),
            i = (0, n.useMemo)(() => Hd(o), [o]),
            c = (0, n.useMemo)(() => Hd((0, v.Z)([l], o)), [l, o]);
          return {
            foundInCollectionMap: o,
            isInAllCollections: i,
            isInAllCollectionsIgnoreFavorites: c,
          };
        },
        Gd = (e, t, a) => {
          const { foundInCollectionMap: r } = $d(t, a);
          return (0, n.useMemo)(() => Boolean(e && r[e]), [r, e]);
        },
        qd = (0, io.L)(
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.707 7.707 9 18.414l-4.707-4.707 1.414-1.414L9 15.586l9.293-9.293 1.414 1.414Z",
          }),
          "Check",
        );
      var Yd = Object.defineProperty,
        Jd = Object.defineProperties,
        Xd = Object.getOwnPropertyDescriptors,
        Qd = Object.getOwnPropertySymbols,
        eu = Object.prototype.hasOwnProperty,
        tu = Object.prototype.propertyIsEnumerable,
        au = (e, t, a) =>
          t in e
            ? Yd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const nu = (0, m.i)((e) => ({
          icon: (0, b.iv)({ color: e.textSecondary, fontSize: 24 }),
        })),
        ru = (e) => {
          var t,
            a = e,
            { collectionName: n } = a,
            l = ((e, t) => {
              var a = {};
              for (var n in e)
                eu.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Qd)
                for (var n of Qd(e))
                  t.indexOf(n) < 0 && tu.call(e, n) && (a[n] = e[n]);
              return a;
            })(a, ["collectionName"]);
          return r().createElement(
            br.c,
            ((t = ((e, t) => {
              for (var a in t || (t = {})) eu.call(t, a) && au(e, a, t[a]);
              if (Qd) for (var a of Qd(t)) tu.call(t, a) && au(e, a, t[a]);
              return e;
            })({}, l)),
            Jd(
              t,
              Xd({ horizontal: !0, title: r().createElement("span", null, n) }),
            )),
          );
        },
        lu = ({ collectionId: e }) => {
          const t = nu(),
            a = (0, hd.wK)(),
            { namespace: n, catalogItemId: l, appName: o } = a,
            { setActiveMenu: c } = (0, pr.U)(),
            s = (0, i.c)({ suspense: !1 }),
            d = Ge(e, { suspense: !1 }),
            u = (0, Od.K)(n, l, o),
            m = Kd(),
            p = Gd(e, a, { suspense: !1 }),
            b = r().useCallback(() => {
              d && u && m(d, u), c(void 0);
            }, [m, d, u, c]);
          return r().createElement(ru, {
            collectionName: (null == d ? void 0 : d.name) || "",
            onClick: () => b(),
            disabled: !s || p,
            icon: p
              ? r().createElement(
                  "span",
                  { className: t.icon },
                  r().createElement(qd, null),
                )
              : void 0,
          });
        };
      var ou = Object.defineProperty,
        iu = Object.getOwnPropertySymbols,
        cu = Object.prototype.hasOwnProperty,
        su = Object.prototype.propertyIsEnumerable,
        du = (e, t, a) =>
          t in e
            ? ou(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const uu = (e) =>
          r().createElement(
            br.c,
            ((e, t) => {
              for (var a in t || (t = {})) cu.call(t, a) && du(e, a, t[a]);
              if (iu) for (var a of iu(t)) su.call(t, a) && du(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: r().createElement(te.Z, {
                  code: "diesel.library.settings.create_collection",
                }),
              },
              e,
            ),
          ),
        mu = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            n = (0, i.c)({ suspense: !1 }),
            { setActiveMenu: l } = (0, pr.U)(),
            { openModal: o } = Je(),
            c = (0, qe.useDispatch)(),
            s = (0, Od.K)(e, t, a),
            d = gt(),
            u = r().useCallback(() => {
              s && c((0, Me.bo)(s)), o(), l(void 0);
            }, [o, l, s]);
          return r().createElement(uu, { onClick: u, disabled: !n || !d });
        },
        pu = (0, m.i)(() => ({
          root: (0, b.iv)({ width: "max-content", minWidth: 280 }),
        })),
        bu = () => {
          const e = (0, hd.wK)(),
            t = pu(),
            a = Vr({ suspense: !1 }),
            l = (0, n.useMemo)(() => (null == a ? void 0 : a.length) > 0, [a]),
            { isInAllCollectionsIgnoreFavorites: o } = $d(e, { suspense: !1 }),
            i = l && !o;
          return r().createElement(
            "div",
            { className: t.root },
            r().createElement(
              Sr.v,
              { dense: !0, noBorder: !0 },
              l &&
                a.map(({ collectionId: e }) =>
                  r().createElement(lu, { key: e, collectionId: e }),
                ),
              i && r().createElement(mo, null),
              r().createElement(mu, null),
            ),
          );
        },
        gu = ({ subMenu: e, disabled: t }) =>
          r().createElement(So, {
            horizontal: !0,
            title: r().createElement(te.Z, {
              code: "diesel.library.settings.add_to_collection",
            }),
            subMenu: e,
            disabled: t,
          }),
        vu = () => {
          const e = (0, hd.wK)(),
            t = (0, i.c)({ suspense: !1 }),
            a = gt(),
            { isInAllCollectionsIgnoreFavorites: n } = $d(e, { suspense: !1 }),
            l = !t || (n && !a);
          return r().createElement(gu, {
            subMenu: r().createElement(bu, null),
            disabled: l,
          });
        };
      var Eu = a(74905);
      const yu = (e = "", t = "", a = "") => {
          const { installState: r } = (0, Ud.e)(e, t, a);
          return (0, n.useMemo)(
            () =>
              ((e) =>
                (0, Wd.Pb)(e) &&
                !(0, Wd.fm)(e) &&
                !(0, Wd.B1)(e) &&
                !(0, Wd.yK)(e) &&
                (null == e ? void 0 : e.updatestatus) !== Dt.uB.PleaseWait)(r),
            [r],
          );
        },
        fu = ({ disabled: e, isUninstalling: t, onClick: a }) =>
          n.createElement(br.c, {
            disabled: e,
            onClick: a,
            title: t
              ? n.createElement(te.Z, {
                  code: "diesel.library.settings.cancel_uninstall",
                })
              : n.createElement(te.Z, {
                  code: "diesel.library.settings.cancel_install",
                }),
          }),
        hu = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            { installState: l } = (0, Ud.e)(e, t, a),
            o = (0, Eu.m)(),
            i = yu(e, t, a),
            c = n.useMemo(() => (0, Wd.Pb)(l), [l]),
            s = (0, Wd.QE)(l),
            d = n.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), r(void 0);
            }, [o, e, t, a, r]);
          return c
            ? n.createElement(fu, {
                disabled: !i,
                onClick: d,
                isUninstalling: s,
              })
            : null;
        };
      var Ou = a(62098);
      const Cu = (0, Ou.u)("cancelWaitingRoom"),
        Iu = ({ onClick: e }) =>
          n.createElement(br.c, {
            onClick: e,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.cancel_waiting_room",
            }),
          }),
        wu = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            { installState: l } = (0, Ud.e)(e, t, a),
            o = Cu(),
            i = n.useMemo(() => (0, Wd.aV)(l) && (0, Wd.yK)(l), [l]),
            c = n.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), r(void 0);
            }, [o, e, t, a, r]);
          return i ? n.createElement(Iu, { onClick: c }) : null;
        };
      var xu = a(96038);
      const Su = ({ onClick: e, disabled: t }) =>
          n.createElement(br.c, {
            onClick: e,
            disabled: t,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.explore_addons",
            }),
          }),
        Pu = () => {
          const { namespace: e } = (0, hd.wK)(),
            { setActiveMenu: t } = (0, pr.U)(),
            { gotoAllAddons: a, allAddonsLinkTo: r } = (0, xu.R)(e, {
              suspense: !1,
            }),
            l = n.useCallback(() => {
              t(void 0), a();
            }, [t, a]);
          return n.createElement(Su, { onClick: l, disabled: !r });
        };
      var ku = a(70055),
        Nu = a(47179);
      var Lu = a(50919);
      const ju = ({ onClick: e, disabled: t }) =>
          n.createElement(br.c, {
            onClick: e,
            disabled: t,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.explore_mods",
            }),
          }),
        Mu = () => {
          const { namespace: e } = (0, hd.wK)(),
            { setActiveMenu: t } = (0, pr.U)(),
            { gotoAllMods: a, allModsLinkTo: r } = (0, Lu.M)(e, {
              suspense: !1,
            }),
            l = n.useCallback(() => {
              t(void 0), a();
            }, [t, a]);
          return n.createElement(ju, { onClick: l, disabled: !r });
        };
      var Au = a(9765),
        Tu = a(8474);
      const _u = (e, t, a, r, l) => {
        const { isModsEnabled: o = !1 } = (0, Tu.Z)(
            { productId: r, store: "EGS" },
            l,
          ),
          i = (0, Au.c)(e, t, a);
        return (0, n.useMemo)(
          () =>
            ((e, t) => !(!e || !(0, Bt.CR)(null == t ? void 0 : t.categories)))(
              o,
              i,
            ),
          [i, o],
        );
      };
      var Du = a(45382),
        Ru = a(10247),
        Bu = a(67126),
        Zu = a(51025),
        Fu = a(43221),
        Uu = a(18497),
        Wu = a(58727),
        Ku = a(51794),
        zu = a(15839),
        Vu = a(99282);
      const Hu = /^extraLaunchOption_.*_Name$/,
        $u = (e, t) => {
          const a = (e && e.key) || "",
            n = (t && t.key) || "";
          return a.localeCompare(n);
        },
        Gu = (e, t) =>
          e
            .reduce((e, a) => {
              const { customAttributes: n } = a.catalogItem || {};
              return (
                n &&
                  n.forEach((r) => {
                    const { key: l, value: o } = r;
                    if (Hu.test(l) && o) {
                      const [r] = l.split(
                        Ku.eL.EXTRA_LAUNCH_OPTION_NAME_SUFFIX,
                      );
                      ((e) => {
                        const { customAttributes: t, key: a, platform: n } = e,
                          r = `${a}${Ku.eL.EXTRA_LAUNCH_OPTION_PLATFORM_RESTRICTION_SUFFIX}`,
                          l = `${a}${Ku.eL.EXTRA_LAUNCH_OPTION_ARGS_SUFFIX}`,
                          o = (0, zu.P)(r, t),
                          i = o
                            ? (0, Ru.Z)(
                                (0, Wt.Z)(Bu.Z, Zu.Z),
                                (0, Fu.Z)(",", o),
                              )
                            : [],
                          c = !!(0, zu.P)(l, t),
                          s = !o || (0, Uu.Z)((0, Zu.Z)(n), i);
                        return c && s;
                      })({ customAttributes: n, key: r, platform: t }) &&
                        e.push({
                          id: `${a.relationshipId}:${r}`,
                          key: r,
                          name: o,
                          params: (0, Wu.Z)(
                            ["namespace", "catalogItemId", "appName"],
                            a,
                          ),
                        });
                    }
                  }),
                e
              );
            }, [])
            .sort($u);
      var qu = a(8543),
        Yu = a(50801);
      const Ju = (e, t, a) => {
        const r = (0, Au.c)(e, t, a);
        return (0, n.useMemo)(
          () => (0, Yu.K)(null == r ? void 0 : r.customAttributes),
          [null == r ? void 0 : r.customAttributes],
        );
      };
      var Xu = a(30332),
        Qu = a(61318),
        em = a(46514),
        tm = a(97748),
        am = Object.defineProperty,
        nm = Object.defineProperties,
        rm = Object.getOwnPropertyDescriptors,
        lm = Object.getOwnPropertySymbols,
        om = Object.prototype.hasOwnProperty,
        im = Object.prototype.propertyIsEnumerable,
        cm = (e, t, a) =>
          t in e
            ? am(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const sm = (e = [], t) => {
        const a = (0, tm.D)(e.map((e) => (0, Xu.b)(Qu.M.Ubisoft, e))),
          r = (0, em.qb)(
            a,
            ((l = ((e, t) => {
              for (var a in t || (t = {})) om.call(t, a) && cm(e, a, t[a]);
              if (lm) for (var a of lm(t)) im.call(t, a) && cm(e, a, t[a]);
              return e;
            })({}, t)),
            (o = {
              enabled:
                Boolean(null == a ? void 0 : a.length) &&
                !1 !== (null == t ? void 0 : t.enabled),
            }),
            nm(l, rm(o))),
          );
        var l, o;
        return (0, n.useMemo)(
          () =>
            !!(null == a ? void 0 : a.length) &&
            (!(
              !(null == a ? void 0 : a.length) ||
              (null == r ? void 0 : r.length)
            ) ||
              !r.every((e) => (null == e ? void 0 : e.redeemedOnUplay))),
          [a, r],
        );
      };
      var dm = a(92277),
        um = a(71573);
      const mm = (e = "", t = "", a = "") => {
        const n = (0, Od.K)(e, t, a);
        return Boolean(null == n ? void 0 : n.owned);
      };
      var pm = a(98197),
        bm = a(82904);
      const gm = (e = "", t = "", a = "") => {
        const { installState: r } = (0, Ud.e)(e, t, a),
          l = mm(e, t, a);
        return (0, n.useMemo)(
          () => ((e, t = !1) => !!e && (0, Wd.Gd)(e) && !t)(r, l),
          [r, l],
        );
      };
      var vm = a(79334),
        Em = a(38765);
      const ym = () => {
          const e = (0, qe.useSelector)(nd.Bc);
          return (0, n.useMemo)(() => (0, Em.J)(e), [e]);
        },
        fm = (e = "", t = "", a = "") => {
          const r = (0, dm.M)(e, t, a),
            l = (0, qe.useSelector)(on.LF),
            o = (0, um.wO)(e, t, a),
            i = ((e = "", t = "", a = "") => {
              const { installState: r } = (0, Ud.e)(e, t, a),
                l = mm(e, t, a);
              return (0, n.useMemo)(
                () => !(!r || r.serverstatus !== Dt.J0.Offline || l),
                [r, l],
              );
            })(e, t, a),
            c = gm(e, t, a),
            s = (0, pm.B)(e, t, a),
            d = mm(e, t, a),
            u = Ju(e, t, a),
            m = ym(),
            p = ((e, t, a) => {
              const r = (0, Vu.c)(e, t, a, {
                  includeMainGameItem: !0,
                  includeHiddenAddons: !0,
                }),
                l = (0, n.useMemo)(
                  () =>
                    (0, tm.D)(
                      r.map((e) => {
                        var t;
                        return null == (t = e.catalogItem)
                          ? void 0
                          : t.customAttributes;
                      }),
                    ),
                  [r],
                );
              return sm(l, {
                enabled: Boolean(null == l ? void 0 : l.length),
                suspense: !1,
              });
            })(e, t, a),
            { installState: b } = (0, Ud.e)(e, t, a),
            g = (0, bm.a)(e, t, a);
          return (0, n.useMemo)(
            () =>
              (0, vm.y)({
                allowMultipleInstances: r,
                authMode: l,
                availableDate: o,
                forceGet: i,
                forceUninstall: c,
                isUnsupported: s,
                isUplayGame: u,
                isUplayLinked: m,
                isUserEntitledToBuild: d,
                needsUplayRedemption: p,
                installState: b,
                isThirdPartyManagedApp: g,
              }),
            [r, l, o, i, c, s, u, m, d, p, b, g],
          );
        };
      var hm = a(93038);
      const Om = ({ options: e, onClick: t }) =>
          n.createElement(
            n.Fragment,
            null,
            e.map(({ id: e, key: a, name: r, params: l }) =>
              n.createElement(br.c, {
                key: e,
                onClick: () => t(l, a),
                title: n.createElement(te.Z, { code: r }),
              }),
            ),
          ),
        Cm = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            l = ((e = "", t = "", a = "") => {
              const [r, ...l] = (0, Vu.c)(e, t, a, { includeMainGameItem: !0 }),
                o = (0, qe.useSelector)(ln.xp),
                i = (0, qe.useSelector)(on.ek);
              return (0, n.useMemo)(() => {
                var e;
                const t =
                  (null == (e = o.latestValue)
                    ? void 0
                    : e[r.relationshipId]) && r.catalogItem
                    ? Gu([r], i)
                    : [];
                let a = [];
                return (
                  (0, Dt.ZP)().supportsLaunchableAddonsFlow() &&
                    (a = (l || []).reduce((e, t) => {
                      var a;
                      const n =
                        null == (a = o.latestValue)
                          ? void 0
                          : a[t.relationshipId];
                      return t.catalogItem && n && e.push(t), e;
                    }, [])),
                  [...t, ...(a.length ? Gu(a, i) : [])]
                );
              }, [o.latestValue, i, r, l]);
            })(e, t, a),
            o = fm(e, t, a),
            i = (0, Du.n)(),
            { isThirdPartyManaged: c, triggerLaunchToast: s } = (0, qu.K)(
              e,
              t,
              a,
            ),
            d = n.useCallback(
              (e, t) => {
                i({
                  namespace: e.namespace,
                  catalogId: e.catalogItemId,
                  appName: e.appName,
                  optionKey: t,
                }).then((e) => {
                  e && c && s();
                }),
                  r(void 0);
              },
              [i, e, t, a, r, c, s],
            );
          return (o === hm.W.CanLaunch ||
            o === hm.W.CanLaunchRestricted ||
            o === hm.W.CanLaunchMultiple) &&
            l.length > 0
            ? n.createElement(Om, { options: l, onClick: d })
            : null;
        },
        Im = ({ onClick: e, disabled: t }) =>
          n.createElement(br.c, {
            onClick: e,
            disabled: t,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.game_achievements",
            }),
          }),
        wm = () => {
          const { namespace: e } = (0, hd.wK)(),
            { setActiveMenu: t } = (0, pr.U)(),
            a = (0, qe.useDispatch)(),
            { gotoAchievements: r, achievementsLinkTo: l } = xd(e, {
              suspense: !1,
            }),
            o = n.useCallback(() => {
              t(void 0), a(Pd(l)), r();
            }, [r, l, a, t]);
          return n.createElement(Im, { onClick: o, disabled: !l });
        };
      var xm = a(62374);
      var Sm = a(12967);
      const Pm = (e, t) => {
          const { productHomeLinkTo: a } = (0, Sm.f)({ sandboxId: e }, t);
          return { productHomeLinkTo: a, gotoProductHome: (0, wd.X)(a) };
        },
        km = ({ onClick: e, disabled: t }) =>
          n.createElement(br.c, {
            onClick: e,
            disabled: t,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.go_to_store_page",
            }),
          }),
        Nm = () => {
          const { namespace: e } = (0, hd.wK)(),
            { setActiveMenu: t } = (0, pr.U)(),
            { gotoProductHome: a, productHomeLinkTo: r } = Pm(e, {
              suspense: !1,
            }),
            l = n.useCallback(() => {
              t(void 0), a();
            }, [a, t]);
          return n.createElement(km, { onClick: l, disabled: !r });
        },
        Lm = (0, Ou.u)("showInstallerOptions"),
        jm = ({ onClick: e }) =>
          n.createElement(br.c, {
            onClick: e,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.options",
            }),
          }),
        Mm = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            { installState: l } = (0, Ud.e)(e, t, a),
            o = Lm(),
            i = n.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), r(void 0);
            }, [o, e, t, a, r]);
          return n.useMemo(() => (0, Wd.t9)(l), [l])
            ? n.createElement(jm, { onClick: i })
            : null;
        },
        Am = (e) => () => {
          const {
            isOpenById: t,
            openModalById: a,
            closeModalById: r,
            getData: l,
          } = (0, c.vR)();
          return (0, n.useMemo)(
            () => ({
              isOpen: t(e),
              openModal: (t) => a(e, t),
              closeModal: () => r(e),
              cancelModal: () => r(e, c.tn.Cancel),
              getData: () => l(e),
            }),
            [t, a, r, l],
          );
        },
        Tm = ({ title: e, content: t, onCloseClick: a }) =>
          n.createElement(A.P, {
            header: n.createElement(
              _.x,
              { onCloseClick: a },
              n.createElement(ae.ZP, { weight: ae.G0.BOLD }, e),
            ),
            content: t,
          });
      var _m = Object.defineProperty,
        Dm = Object.getOwnPropertySymbols,
        Rm = Object.prototype.hasOwnProperty,
        Bm = Object.prototype.propertyIsEnumerable,
        Zm = (e, t, a) =>
          t in e
            ? _m(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Fm = (e, t) => {
          for (var a in t || (t = {})) Rm.call(t, a) && Zm(e, a, t[a]);
          if (Dm) for (var a of Dm(t)) Bm.call(t, a) && Zm(e, a, t[a]);
          return e;
        };
      const Um = {
          icon: (0, b.iv)(Fm({ display: "inherit" }, (0, re.wz)(14))),
        },
        Wm = (e) => {
          var t = e,
            { title: a, subtitle: r, children: l, icon: o } = t,
            i = ((e, t) => {
              var a = {};
              for (var n in e)
                Rm.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Dm)
                for (var n of Dm(e))
                  t.indexOf(n) < 0 && Bm.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["title", "subtitle", "children", "icon"]);
          return n.createElement(
            so.s,
            Fm(
              {
                title: n.createElement(
                  d.x,
                  { alignItems: u.Ks.Center },
                  n.createElement("div", { className: Um.icon }, o),
                  a,
                ),
                subtitle: r,
              },
              i,
            ),
            l && n.createElement(d.x, { justify: u.jf.End }, l),
          );
        };
      var Km = a(88810),
        zm = Object.defineProperty,
        Vm = Object.defineProperties,
        Hm = Object.getOwnPropertyDescriptors,
        $m = Object.getOwnPropertySymbols,
        Gm = Object.prototype.hasOwnProperty,
        qm = Object.prototype.propertyIsEnumerable,
        Ym = (e, t, a) =>
          t in e
            ? zm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Jm = (e, t) => {
          for (var a in t || (t = {})) Gm.call(t, a) && Ym(e, a, t[a]);
          if ($m) for (var a of $m(t)) qm.call(t, a) && Ym(e, a, t[a]);
          return e;
        },
        Xm = (e, t) => Vm(e, Hm(t));
      const Qm = {
          secondaryButton: (0, b.iv)(
            Xm(Jm({ width: 30, height: 30 }, (0, re.wz)(14)), {
              "> button": { width: "100%", height: "100%", padding: 0 },
            }),
          ),
        },
        ep = ({
          title: e,
          subtitle: t,
          icon: a,
          secondaryButton: r,
          primaryButton: l,
          footer: o,
          variant: i = Km.O.TwoColumn,
        }) => {
          const c = {
              title: e,
              subtitle: t,
              borderRadius: fe.E0,
              hasBackground: !0,
              footer: o,
            },
            s = n.createElement(
              n.Fragment,
              null,
              n.createElement(
                d.x,
                { alignItems: u.Ks.Center },
                r &&
                  n.createElement("div", { className: Qm.secondaryButton }, r),
                l,
              ),
            );
          return a
            ? n.createElement(Wm, Xm(Jm({ icon: a }, c), { variant: i }), s)
            : n.createElement(so.s, Xm(Jm({}, c), { variant: i }), s);
        };
      var tp = Object.defineProperty,
        ap = Object.getOwnPropertySymbols,
        np = Object.prototype.hasOwnProperty,
        rp = Object.prototype.propertyIsEnumerable,
        lp = (e, t, a) =>
          t in e
            ? tp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        op = (e, t) => {
          for (var a in t || (t = {})) np.call(t, a) && lp(e, a, t[a]);
          if (ap) for (var a of ap(t)) rp.call(t, a) && lp(e, a, t[a]);
          return e;
        };
      const ip = (e) =>
        n.createElement(ye, {
          hasHeader: !0,
          titleWidth: 200,
          content: n.createElement(
            Sr.v,
            { noBorder: !0, noShadow: !0, noBackground: !0, spacing: 10 },
            n.createElement(ep, {
              title: n.createElement(
                Ee.Od,
                op({ variant: Ee.Jy.Text, width: 80, height: 20 }, e),
              ),
              icon: n.createElement(Ee.Od, op({ width: 20, height: 20 }, e)),
              primaryButton: n.createElement(
                Ee.Od,
                op({ width: 100, height: 40 }, e),
              ),
            }),
            n.createElement(ep, {
              title: n.createElement(
                Ee.Od,
                op({ variant: Ee.Jy.Text, width: 180, height: 20 }, e),
              ),
              icon: n.createElement(Ee.Od, op({ width: 20, height: 20 }, e)),
              primaryButton: n.createElement(
                Ee.Od,
                op({ width: 40, height: 25 }, e),
              ),
            }),
            n.createElement(ep, {
              title: n.createElement(
                Ee.Od,
                op({ variant: Ee.Jy.Text, width: 90, height: 30 }, e),
              ),
              subtitle: n.createElement(
                Ee.Od,
                op({ variant: Ee.Jy.Text, width: 200, height: 20 }, e),
              ),
              icon: n.createElement(Ee.Od, op({ width: 20, height: 20 }, e)),
              secondaryButton: n.createElement(
                Ee.Od,
                op({ variant: Ee.Jy.Circle, width: "100%", height: "100%" }, e),
              ),
              primaryButton: n.createElement(
                Ee.Od,
                op({ width: 40, height: 25 }, e),
              ),
            }),
          ),
        });
      var cp = a(67541);
      const sp = (0, m.i)((e) => ({
          button: (0, b.iv)((0, W.Bt)(e), {
            position: "relative",
            padding: "2px",
          }),
          toggle: (0, b.iv)({ pointerEvents: "none" }),
        })),
        dp = ({ checked: e, onClick: t, disabled: a, id: r }) => {
          const l = sp();
          return n.createElement(
            ft.Z,
            { className: l.button, onClick: t, disabled: a },
            n.createElement(cp.Z, {
              className: l.toggle,
              checked: e,
              disabled: a,
              id: r,
            }),
          );
        };
      var up = a(8604),
        mp = a(25198),
        pp = a(30941);
      const bp = (e = "", t = "", a = "", n = { enabled: !0 }) => {
        const r = (0, qe.useSelector)(up.Ip),
          { data: l, query: o } = (0, pp.Y)({
            bridge: (0, Dt.ZP)(),
            method: "getAutoUpdate",
            args: [e, t, a],
            queryKey: mp.L6.settingDetail(e, t, a, mp.nM.AutoUpdate),
            config: { enabled: r && Boolean(e && t && a) && n.enabled },
          });
        return { autoUpdate: l, query: o };
      };
      var gp = a(36182);
      const vp = (0, Ta.uB)("useProductBridgeMutation"),
        Ep = "setAutoUpdate",
        yp = (
          e = "",
          t = "",
          a = "",
          n = oc.Nd.LIBRARY,
          r = { enabled: !0 },
        ) => {
          const { autoUpdate: l, query: o } = bp(e, t, a, r),
            { mutateAsync: i } = (0, Ma.Db)((r) => {
              return (
                (i = void 0),
                (c = null),
                (s = function* () {
                  if (l !== r) {
                    vp.log(Ep, {
                      namespace: e,
                      catalogId: t,
                      appName: a,
                      nextAutoUpdate: r,
                    });
                    try {
                      return (
                        yield (0, Dt.ZP)().setAutoUpdate(e, t, a, r, n),
                        o.refetch()
                      );
                    } catch (e) {
                      vp.warn(Ep, "error", { error: e.message }), (0, gp.pN)(e);
                    }
                  }
                }),
                new Promise((e, t) => {
                  var a = (e) => {
                      try {
                        r(s.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    n = (e) => {
                      try {
                        r(s.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    r = (t) =>
                      t.done ? e(t.value) : Promise.resolve(t.value).then(a, n);
                  r((s = s.apply(i, c)).next());
                })
              );
              var i, c, s;
            });
          return i;
        },
        fp = (0, io.L)(
          n.createElement(
            "g",
            null,
            n.createElement("path", {
              d: "M4.92901 4.9289C6.81762 3.04029 9.3291 1.99965 12.0004 2C14.6718 2.00035 17.1829 3.04064 19.0711 4.9289C20.9594 6.81716 21.9997 9.32829 22 11.9996H20.0003C19.9999 9.86277 19.1678 7.854 17.6569 6.34311C16.146 4.83223 14.1373 4.00013 12.0004 3.99979C9.86357 3.99944 7.85411 4.83223 6.34323 6.34311L8.46455 8.46443L2.10059 9.17154L2.80769 2.80758L4.92901 4.9289Z",
            }),
            n.createElement("path", {
              d: "M11.9996 20.0001C14.1365 20.0005 16.1459 19.1677 17.6568 17.6568L15.5355 15.5355L21.8995 14.8284L21.1924 21.1923L19.071 19.071C17.1824 20.9596 14.671 22.0003 11.9996 21.9999C9.32829 21.9996 6.81716 20.9593 4.9289 19.071C3.04063 17.1828 2.00035 14.6716 2 12.0003H3.99979C4.00013 14.1372 4.83223 16.1459 6.34311 17.6568C7.854 19.1677 9.86277 19.9998 11.9996 20.0001Z",
            }),
          ),
          "Retry",
        ),
        hp = () =>
          n.createElement(so.s, {
            title: n.createElement(Ee.Od, {
              variant: Ee.Jy.Text,
              width: "80%",
              height: "100%",
            }),
          }),
        Op = ({ disabled: e, checked: t, onClick: a }) =>
          n.createElement(ep, {
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.autoUpdate",
            }),
            icon: n.createElement(fp, null),
            primaryButton: n.createElement(dp, {
              checked: t,
              disabled: e,
              onClick: a,
              id: "autoUpdate-toggle",
            }),
          }),
        Cp = () => {
          const {
            query: e,
            autoUpdateState: t,
            onClick: a,
          } = (() => {
            const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
              { autoUpdate: r, query: l } = bp(e, t, a),
              [o, i] = n.useState(Boolean(r)),
              c = yp(e, t, a),
              s = n.useCallback(() => {
                i(!r), c(!r);
              }, [c, i, r]);
            return (
              n.useEffect(() => {
                void 0 !== r && r !== o && i(r);
              }, [r]),
              { query: l, autoUpdateState: o, onClick: s }
            );
          })();
          return n.createElement(
            Ye.n4,
            { fallback: n.createElement(hp, null) },
            n.createElement(Op, {
              disabled: !e.isSuccess,
              checked: t,
              onClick: a,
            }),
          );
        },
        Ip = (e = "", t = "", a = "", n = { enabled: !0 }) => {
          const r = (0, qe.useSelector)(up.Ip),
            { data: l = !1, query: o } = (0, pp.Y)({
              bridge: (0, Dt.ZP)(),
              method: "getCloudSave",
              args: [e, t, a],
              queryKey: mp.L6.settingDetail(e, t, a, mp.nM.CloudSave),
              config: { enabled: r && Boolean(e && t && a) && n.enabled },
            });
          return { cloudSave: l, query: o };
        };
      const wp = (0, Ta.uB)("useSetProductCloudSave"),
        xp = "setCloudSave",
        Sp = (
          e = "",
          t = "",
          a = "",
          n = oc.Nd.LIBRARY,
          r = { enabled: !0 },
        ) => {
          const { cloudSave: l, query: o } = Ip(e, t, a, r),
            { mutateAsync: i } = (0, Ma.Db)((r) => {
              return (
                (i = void 0),
                (c = null),
                (s = function* () {
                  if (l === r) return !1;
                  wp.log(xp, {
                    namespace: e,
                    catalogId: t,
                    appName: a,
                    nextCloudSave: r,
                  });
                  try {
                    const l = yield (0, Dt.ZP)().setCloudSave(e, t, a, r, n);
                    return o.refetch(), l;
                  } catch (e) {
                    wp.warn(xp, "error", { error: e.message }), (0, gp.pN)(e);
                  }
                }),
                new Promise((e, t) => {
                  var a = (e) => {
                      try {
                        r(s.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    n = (e) => {
                      try {
                        r(s.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    r = (t) =>
                      t.done ? e(t.value) : Promise.resolve(t.value).then(a, n);
                  r((s = s.apply(i, c)).next());
                })
              );
              var i, c, s;
            });
          return i;
        },
        Pp = (0, Ou.u)("syncCloudSave");
      var kp = Object.defineProperty,
        Np = Object.getOwnPropertySymbols,
        Lp = Object.prototype.hasOwnProperty,
        jp = Object.prototype.propertyIsEnumerable,
        Mp = (e, t, a) =>
          t in e
            ? kp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ap = (e) => {
          var t = e,
            { icon: a, toolTipCode: r } = t,
            l = ((e, t) => {
              var a = {};
              for (var n in e)
                Lp.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Np)
                for (var n of Np(e))
                  t.indexOf(n) < 0 && jp.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["icon", "toolTipCode"]);
          const o = n.useRef(null);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              tt.h,
              ((e, t) => {
                for (var a in t || (t = {})) Lp.call(t, a) && Mp(e, a, t[a]);
                if (Np) for (var a of Np(t)) jp.call(t, a) && Mp(e, a, t[a]);
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
            r &&
              n.createElement(
                nt.u,
                { anchorRef: o, zIndex: le.W.toolTip },
                n.createElement(Zo.v0, { code: r || "" }),
              ),
          );
        },
        Tp = (0, io.L)(
          n.createElement("path", {
            d: "M18.784 10.649c-.052 0-.101.005-.152.008C18.084 7.447 15.265 5 11.868 5a6.87 6.87 0 00-6.061 3.608C3.115 8.834 1 11.068 1 13.794c0 2.788 2.214 5.065 4.997 5.2V19h12.787C21.113 19 23 17.13 23 14.825c0-2.306-1.887-4.176-4.216-4.176zM12 17.294l-4.107-4.075h2.665V8.65c0-.38.312-.69.696-.69h1.491c.385 0 .696.31.696.69v4.57h2.666L12 17.294z",
          }),
          "CloudSaved",
        ),
        _p = (0, io.L)(
          n.createElement("path", {
            d: "M18.0005 3.9978L14.0005 7.9978H17.0005V14.9978C17.0005 16.0978 16.1005 16.9978 15.0005 16.9978C13.9005 16.9978 13.0005 16.0978 13.0005 14.9978V7.9978C13.0005 5.7878 11.2105 3.9978 9.00049 3.9978C6.79049 3.9978 5.00049 5.7878 5.00049 7.9978V14.9978H2.00049L6.00049 18.9978L10.0005 14.9978H7.00049V7.9978C7.00049 6.8978 7.90049 5.9978 9.00049 5.9978C10.1005 5.9978 11.0005 6.8978 11.0005 7.9978V14.9978C11.0005 17.2078 12.7905 18.9978 15.0005 18.9978C17.2105 18.9978 19.0005 17.2078 19.0005 14.9978V7.9978H22.0005L18.0005 3.9978Z",
          }),
          "Sync",
        );
      var Dp = a(93882);
      const Rp = (0, b.iv)({ pointerEvents: "none" }),
        Bp = ({
          onSyncClick: e,
          onToggleClick: t,
          formattedDate: a,
          disabled: n = !1,
          cloudSaveState: l,
        }) =>
          r().createElement(ep, {
            title: r().createElement(Zo.v0, {
              code: "egstore.library.manage_products_modal.cloud_save",
            }),
            subtitle: r().createElement(Zo.v0, {
              code: "diesel.library.settings.cloud_sync.desc",
              args: [a],
            }),
            icon: r().createElement(Tp, null),
            secondaryButton: r().createElement(Ap, {
              icon: r().createElement(_p, null),
              onClick: e,
              toolTipCode: l ? "diesel.library.settings.cloud_sync" : "",
            }),
            primaryButton: r().createElement(dp, {
              className: Rp,
              checked: l,
              onClick: t,
              disabled: n,
              id: "cloudSave-toggle",
            }),
          }),
        Zp = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { installState: n } = (0, Ud.e)(e, t, a),
            l = Pp(),
            o = (0, Dp.C)(),
            { cloudSave: i, query: c } = Ip(e, t, a),
            s = Sp(e, t, a),
            [d, u] = r().useState(Boolean(i)),
            { closeModal: m } = Xb(),
            p = r().useMemo(() => (0, Wd.O7)(o, n), [o, n]),
            b = r().useCallback(() => {
              u(!i), s(!i);
            }, [s, u, i]);
          r().useEffect(() => {
            i !== d && u(i);
          }, [i]);
          const g = r().useCallback(() => {
            d && m(), l({ namespace: e, catalogId: t, appName: a });
          }, [d, m, l, e, t, a]);
          return r().createElement(Bp, {
            onSyncClick: g,
            formattedDate: p,
            onToggleClick: b,
            disabled: !c.isSuccess,
            cloudSaveState: d,
          });
        },
        Fp = (0, Ou.u)("createShortcut");
      var Up = Object.defineProperty,
        Wp = Object.getOwnPropertySymbols,
        Kp = Object.prototype.hasOwnProperty,
        zp = Object.prototype.propertyIsEnumerable,
        Vp = (e, t, a) =>
          t in e
            ? Up(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Hp = (e) => {
          var t = e,
            { children: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var n in e)
                Kp.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Wp)
                for (var n of Wp(e))
                  t.indexOf(n) < 0 && zp.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["children"]);
          return n.createElement(
            al.f5,
            ((e, t) => {
              for (var a in t || (t = {})) Kp.call(t, a) && Vp(e, a, t[a]);
              if (Wp) for (var a of Wp(t)) zp.call(t, a) && Vp(e, a, t[a]);
              return e;
            })(
              {
                buttonHeight: R.Ey.DENSED,
                buttonWidth: R.WL.AUTO,
                "data-testid": "MenuItemPrimaryButton",
              },
              r,
            ),
            a,
          );
        },
        $p = (0, io.L)(
          n.createElement("path", {
            d: "M18.864 4H4.136c-.9 0-1.636.72-1.636 1.6v9.6c0 .88.736 1.6 1.636 1.6h5.728v1.6H8.227V20h6.546v-1.6h-1.637v-1.6h5.728c.9 0 1.636-.72 1.636-1.6V5.6c0-.88-.736-1.6-1.636-1.6zm0 11.2H4.136V5.6h14.728v9.6z",
          }),
          "ResolutionExtraLarge",
        ),
        Gp = ({ onClick: e }) =>
          r().createElement(ep, {
            title: r().createElement(Zo.v0, {
              code: "egstore.library.manage_products_modal.create_desktop_shortcut",
            }),
            icon: r().createElement($p, null),
            primaryButton: r().createElement(
              Hp,
              { onClick: e },
              r().createElement(Zo.v0, {
                code: "egstore.library.manage_products_modal.create",
              }),
            ),
          }),
        qp = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { closeModal: n } = Xb(),
            l = Fp(),
            o = r().useCallback(() => {
              n(),
                l({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: oc.Nd.MANAGE_PRODUCT_MODAL,
                });
            }, [n, l, e, t, a]);
          return r().createElement(Gp, { onClick: o });
        },
        Yp = (0, Ou.u)("showInstallLocation"),
        Jp = (0, Ou.g)(
          "uninstall",
          ({
            namespace: e,
            catalogId: t,
            appName: a,
            funnelId: n = oc.Nd.LIBRARY,
            options: r,
          }) => (0, Dt.ZP)().uninstall(e, t, a, n, r),
        );
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
      const nb = (0, m.i)(() => ({
          tooltip: (0, b.iv)({ textAlign: "left" }),
          warning: (0, b.iv)({ marginTop: 20, maxWidth: 275 }),
        })),
        rb = (e) => {
          const t = nb();
          return n.createElement(
            nt.u,
            ((e, t) => {
              for (var a in t || (t = {})) eb.call(t, a) && ab(e, a, t[a]);
              if (Qp) for (var a of Qp(t)) tb.call(t, a) && ab(e, a, t[a]);
              return e;
            })({}, e),
            n.createElement(
              "div",
              { className: t.tooltip },
              n.createElement(Zo.v0, {
                code: "egstore.library.manage_products_modal.install_location",
              }),
              n.createElement(
                "div",
                { className: t.warning },
                n.createElement(Zo.v0, {
                  code: "egstore.library.manage_products_modal.install_location_warning",
                }),
              ),
            ),
          );
        },
        lb = ({ title: e, onUninstallClick: t, onCancelClick: a }) =>
          r().createElement(Xn, {
            modalTitle: r().createElement(te.Z, {
              code: "diesel.common.smart_button.uninstall",
            }),
            title: r().createElement(te.Z, {
              code: "egstore.library.uninstall_modal_confirm.text_question",
              args: [e],
            }),
            subTitle: r().createElement(te.Z, {
              code: "egstore.library.uninstall_modal_confirm.text_info",
            }),
            secondaryButton: r().createElement(
              M.d,
              { onClick: a },
              r().createElement(te.Z, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: r().createElement(
              j.N,
              { onClick: t },
              r().createElement(te.Z, {
                code: "diesel.common.smart_button.uninstall",
              }),
            ),
            onCloseClick: a,
          });
      var ob = Object.defineProperty,
        ib = Object.defineProperties,
        cb = Object.getOwnPropertyDescriptors,
        sb = Object.getOwnPropertySymbols,
        db = Object.prototype.hasOwnProperty,
        ub = Object.prototype.propertyIsEnumerable,
        mb = (e, t, a) =>
          t in e
            ? ob(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        pb = (e, t) => {
          for (var a in t || (t = {})) db.call(t, a) && mb(e, a, t[a]);
          if (sb) for (var a of sb(t)) ub.call(t, a) && mb(e, a, t[a]);
          return e;
        },
        bb = (e, t) => ib(e, cb(t));
      const gb = (e) =>
        n.createElement(
          ye,
          bb(pb({}, e), {
            hasHeader: !0,
            hasFooter: !0,
            hasPrimaryButton: !0,
            hasSecondaryButton: !0,
            content: n.createElement(
              d.x,
              { alignItems: u.Ks.Center, justify: u.jf.Center, fillParent: !0 },
              n.createElement(
                d.x,
                { direction: u.jO.Column, alignItems: u.Ks.Center },
                n.createElement(
                  Ee.Od,
                  pb({ variant: Ee.Jy.Text, width: 500, height: 50 }, e),
                ),
                n.createElement(
                  Ee.Od,
                  bb(pb({ variant: Ee.Jy.Text, width: 300, height: 50 }, e), {
                    style: { margin: "-10px 0 10px" },
                  }),
                ),
                n.createElement(
                  Ee.Od,
                  pb({ variant: Ee.Jy.Text, width: 260, height: 30 }, e),
                ),
              ),
            ),
          }),
        );
      var vb = a(11199);
      const Eb = Am("uninstall-confirm-modal"),
        yb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            n = (0, vb.V)(e, t, a),
            l = Jp(),
            { closeModal: o, cancelModal: i } = Eb(),
            c = r().useCallback(() => {
              o(),
                l({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: oc.Nd.MANAGE_PRODUCT_MODAL,
                  options: { disableConfirmation: !0 },
                });
            }, [o, l, e, t, a]);
          return r().createElement(lb, {
            title: n,
            onUninstallClick: c,
            onCancelClick: i,
          });
        },
        fb = () => {
          const { isOpen: e, cancelModal: t, getData: a } = Eb(),
            n = a();
          return n
            ? r().createElement(
                Le.u,
                { isOpen: e, onClose: t },
                r().createElement(
                  Ye.n4,
                  { fallback: r().createElement(gb, null) },
                  r().createElement(
                    hd.wi.Provider,
                    { value: n },
                    r().createElement(yb, null),
                  ),
                ),
              )
            : null;
        },
        hb = (e, t, a) => {
          const { installState: r } = (0, Ud.e)(e, t, a);
          return (0, n.useMemo)(() => (0, Wd.b8)(r), [r]);
        };
      var Ob = a(31e3),
        Cb = a(17998),
        Ib = a(41786);
      const wb = (e, t) =>
          (0, Js.fS)({
            namespace: e.namespace,
            catalogid: e.catalogItemId,
            appname: e.appName,
            bshouldbeinstalled: t,
          }),
        xb = () => {},
        Sb = (e = "", t = "", a = "") => {
          const r = (0, Ib.R)(e, t, a),
            l = (0, Cb.I)(e, t, a),
            o = (0, Ob.$)(
              l ? (null == r ? void 0 : r.namespace) : "",
              l ? (null == r ? void 0 : r.catalogItemId) : "",
              l ? (null == r ? void 0 : r.appName) : "",
            );
          return (0, n.useMemo)(() => {
            const n = { namespace: e, catalogItemId: t, appName: a },
              r = (0, Dt.ZP)().supportsLaunchableAddonsFlow() && l;
            return {
              isLaunchableAddon: l,
              install: r ? () => o([wb(n, !0)]) : xb,
              uninstall: r ? () => o([wb(n, !1)]) : xb,
            };
          }, [e, t, a, l]);
        };
      var Pb = a(16087);
      const kb = (0, io.L)(
          n.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6a2 2 0 012-2h7l2 2h9v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm18 2H4v10h16V8z",
          }),
          "FolderEmpty",
        ),
        Nb = ({ size: e, onFolderLocationClick: t, onUninstallClick: a }) => {
          const r = n.useRef(null);
          return n.createElement(ep, {
            title: n.createElement(Zo.v0, {
              code: "egstore.library.manage_products_modal.installation",
            }),
            subtitle: n.createElement(Zo.v0, {
              code: "egstore.library.manage_products_modal.install_size",
              args: [e],
            }),
            icon: n.createElement(Pb.X, null),
            secondaryButton: n.createElement(
              n.Fragment,
              null,
              n.createElement(Ap, {
                forwardRef: r,
                icon: n.createElement(kb, null),
                onClick: t,
              }),
              n.createElement(rb, { anchorRef: r }),
            ),
            primaryButton: n.createElement(
              Hp,
              { onClick: a },
              n.createElement(Zo.v0, {
                code: "diesel.common.smart_button.uninstall",
              }),
            ),
          });
        },
        Lb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            r = hb(e, t, a),
            { closeModal: l } = Xb(),
            { openModal: o } = Eb(),
            i = Yp(),
            c = Jp(),
            { isLaunchableAddon: s, uninstall: d } = Sb(e, t, a),
            u = n.useCallback(() => {
              i({ namespace: e, catalogId: t, appName: a });
            }, [i, e, t, a]),
            m = n.useCallback(() => {
              l(),
                s && !(0, Dt.ZP)().supportsLaunchableAddonsV2Flow()
                  ? d()
                  : (0, Dt.ZP)().supportsWebClientUninstallFlow()
                    ? o({ namespace: e, catalogItemId: t, appName: a })
                    : c({ namespace: e, catalogId: t, appName: a });
            }, [l, o, s, c, d, e, t, a]);
          return n.createElement(Nb, {
            size: r,
            onFolderLocationClick: u,
            onUninstallClick: m,
          });
        };
      var jb = a(22467);
      const Mb = (0, io.L)(
          n.createElement("path", {
            d: "M6 2.8C4.894 2.8 4 3.694 4 4.8V20.8C4 21.906 4.894 22.8 6 22.8H10.051L7.57 20.331L12.55\n        15.381L15.693 18.506L20 14.222V7.8L15 2.8H6ZM15.693 24.8L24 16.541L22.651 15.2L15.693 22.117L12.549\n        18.994L11.2 20.334L15.693 24.8Z",
            fill: "white",
          }),
          "File",
        ),
        Ab = ({ onClick: e }) =>
          n.createElement(ep, {
            title: n.createElement(te.Z, {
              code: "egstore.library.manage_products_modal.verify_files",
            }),
            icon: n.createElement(Mb, null),
            primaryButton: n.createElement(
              Hp,
              { onClick: e },
              n.createElement(te.Z, {
                code: "egstore.library.manage_products_modal.verify",
              }),
            ),
          }),
        Tb = () => {
          const { closeModal: e } = Xb(),
            { namespace: t, catalogItemId: a, appName: r } = (0, hd.wK)(),
            l = (0, jb.h)(),
            o = n.useCallback(() => {
              l({
                namespace: t,
                catalogId: a,
                appName: r,
                funnelId: oc.Nd.MANAGE_PRODUCT_MODAL,
              }),
                e();
            }, [l, t, a, r, e]);
          return n.createElement(Ab, { onClick: o });
        };
      var _b = a(4136);
      var Db = a(43730);
      const Rb = (e, t, a) => {
          const { installState: r } = (0, Ud.e)(e, t, a),
            l = (0, Au.c)(e, t, a),
            o = (0, n.useMemo)(() => (0, Rt.uD)(l), [l]),
            i = (0, n.useMemo)(() => (0, Bo.mW)(l), [l]),
            { globalAutoUpdate: c } = (0, Db.t)(),
            s = (0, Cb.I)(e, t, a);
          return (0, n.useMemo)(
            () =>
              ((e) => {
                const {
                    installState: t,
                    isModKit: a = !1,
                    isNeverUpdate: n = !1,
                    globalAutoUpdate: r = !1,
                    isLaunchableAddon: l = !1,
                  } = e,
                  o = (0, Wd.Pb)(t),
                  i = (0, Wd.aV)(t),
                  c = (0, Wd.yK)(t);
                return !l && !a && !o && !c && !n && i && r;
              })({
                installState: r,
                isModKit: o,
                isNeverUpdate: i,
                globalAutoUpdate: c,
                isLaunchableAddon: s,
              }),
            [r, o, i, c, s],
          );
        },
        Bb = (e = "", t = "", a = "") => {
          const r = (0, qe.useSelector)(on.LA),
            { installState: l } = (0, Ud.e)(e, t, a),
            o = mm(e, t, a);
          return (0, n.useMemo)(
            () =>
              (({ isOnline: e, isEntitledToLibraryItem: t, installState: a }) =>
                e &&
                t &&
                !(0, Wd.Gd)(a) &&
                !(0, Wd.Pb)(a) &&
                !(0, Wd.Ic)(a) &&
                !(0, Wd.Ct)(a))({
                installState: l,
                isOnline: r,
                isEntitledToLibraryItem: o,
              }),
            [l, r, o],
          );
        };
      var Zb = Object.defineProperty,
        Fb = Object.defineProperties,
        Ub = Object.getOwnPropertyDescriptors,
        Wb = Object.getOwnPropertySymbols,
        Kb = Object.prototype.hasOwnProperty,
        zb = Object.prototype.propertyIsEnumerable,
        Vb = (e, t, a) =>
          t in e
            ? Zb(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Hb = (e, t) => {
          for (var a in t || (t = {})) Kb.call(t, a) && Vb(e, a, t[a]);
          if (Wb) for (var a of Wb(t)) zb.call(t, a) && Vb(e, a, t[a]);
          return e;
        };
      const $b = (e = "", t = "", a = "", r = { enabled: !0 }) => {
          const l = (0, qe.useSelector)(up.Ip),
            o = (0, Ma.NL)(),
            i = (0, n.useMemo)(
              () => mp.L6.additionalCommandsDetail(e, t, a),
              [e, t, a],
            ),
            c = (0, n.useMemo)(
              () =>
                (0, Dt.ZP)().supportsAdditionalCommands() &&
                l &&
                r.enabled &&
                Boolean(e && a && t),
              [l, r.enabled],
            ),
            { data: s, query: d } = (0, pp.Y)({
              bridge: (0, Dt.ZP)(),
              method: "getAdditionalCommands",
              args: [e, t, a],
              queryKey: i,
              config:
                ((u = Hb({}, r)),
                (m = { enabled: c, refetchOnMount: "always" }),
                Fb(u, Ub(m))),
            });
          var u, m;
          const { mutate: p } = (0, Ma.Db)((n) => {
            return (
              (r = void 0),
              (l = null),
              (s = function* () {
                if (c)
                  try {
                    yield (0, Dt.ZP)().setAdditionalCommands(e, t, a, n),
                      yield o.invalidateQueries(i);
                  } catch (e) {
                    (0, gp.pN)(e);
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
                  n = (e) => {
                    try {
                      o(s.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  o = (t) =>
                    t.done ? e(t.value) : Promise.resolve(t.value).then(a, n);
                o((s = s.apply(r, l)).next());
              })
            );
            var r, l, s;
          });
          return { commands: s, setCommands: p, query: d };
        },
        Gb = ({ isEnabled: e, setIsEnabled: t, args: a, setArgs: n }) =>
          r().createElement(ep, {
            icon: r().createElement(po.o, null),
            title: r().createElement(te.Z, {
              code: "diesel.library.settings.custom_launch_args_title",
            }),
            subtitle: r().createElement(te.Z, {
              code: "diesel.library.settings.custom_launch_args_desc",
            }),
            primaryButton: r().createElement(dp, {
              checked: e,
              onClick: () => t(!e),
              id: "enable-custom-launch-args",
            }),
            footer: e
              ? r().createElement(ee, {
                  id: "custom-launch-args",
                  value: a,
                  onChange: (e) => n(e.target.value),
                })
              : void 0,
            variant: Km.O.TwoColumnWithFooter,
          }),
        qb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { commands: n, setCommands: l, query: o } = $b(e, t, a),
            [i, c] = r().useState(!1),
            [s, d] = r().useState(""),
            [u] = (0, zo.Z)(s, 200, { trailing: !0 });
          return (
            r().useEffect(() => {
              n && (d(n.value), c(n.enabled));
            }, [o.isSuccess]),
            r().useEffect(() => {
              !n ||
                (n.value === u && n.enabled === i) ||
                l({ value: u, enabled: i });
            }, [u, i]),
            r().createElement(Gb, {
              isEnabled: i,
              setIsEnabled: c,
              args: s,
              setArgs: d,
            })
          );
        },
        Yb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            r = ((e = "", t = "", a = "") => {
              const r = (0, qe.useSelector)(on.ek),
                { installState: l } = (0, Ud.e)(e, t, a);
              return (0, n.useMemo)(
                () =>
                  (r === _b.om.WINDOWS || r === _b.om.WIN32) && (0, Wd.aV)(l),
                [r, l],
              );
            })(e, t, a),
            l = Rb(e, t, a),
            o = ((e = "", t = "", a = "") => {
              const { installState: n } = (0, Ud.e)(e, t, a);
              return (0, Wd.jW)(n);
            })(e, t, a),
            i = Bb(e, t, a);
          return n.createElement(
            Sr.v,
            { noBorder: !0, noShadow: !0, noBackground: !0, spacing: 10 },
            i && n.createElement(Tb, null),
            l && n.createElement(Cp, null),
            o && n.createElement(Zp, null),
            r && n.createElement(qp, null),
            n.createElement(Lb, null),
            n.createElement(qb, null),
          );
        };
      var Jb = a(49464);
      const Xb = Am("manage-product-modal"),
        Qb = () => {
          const { cancelModal: e } = Xb();
          return n.createElement(Tm, {
            title: n.createElement(Jb.F, null),
            onCloseClick: e,
            content: n.createElement(Yb, null),
          });
        },
        eg = () => {
          const { isOpen: e, cancelModal: t, getData: a } = Xb(),
            r = a();
          return r
            ? n.createElement(
                Le.u,
                { isOpen: e, onClose: t },
                n.createElement(
                  Ye.n4,
                  { fallback: n.createElement(ip, null) },
                  n.createElement(
                    hd.wi.Provider,
                    { value: r },
                    n.createElement(Qb, null),
                  ),
                ),
              )
            : null;
        },
        tg = ({ onClick: e }) =>
          n.createElement(br.c, {
            onClick: e,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.manage",
            }),
          }),
        ag = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            { openModal: l } = Xb(),
            { installState: o } = (0, Ud.e)(e, t, a),
            i = n.useCallback(() => {
              r(void 0), l({ namespace: e, catalogItemId: t, appName: a });
            }, [l, r]);
          return n.useMemo(() => (0, Wd.aV)(o), [o])
            ? n.createElement(tg, { onClick: i })
            : null;
        },
        ng = (e, t, a) => {
          const r = ((e = "", t = "", a = "") =>
            (0, n.useMemo)(() => {
              if (e && t && a)
                return ti.s.ManageAddonsPath.replace(
                  ":namespace",
                  encodeURIComponent(e),
                )
                  .replace(":catalogId", encodeURIComponent(t))
                  .replace(":appName", encodeURIComponent(a));
            }, [e, t, a]))(e, t, a);
          return { manageAddonsLinkTo: r, gotoManageAddons: (0, wd.X)(r) };
        },
        rg = ({ onClick: e }) =>
          n.createElement(br.c, {
            onClick: e,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.manageDLC",
            }),
          }),
        lg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            l = (0, Vu.c)(e, t, a),
            { installState: o } = (0, Ud.e)(e, t, a),
            { manageAddonsLinkTo: i, gotoManageAddons: c } = ng(e, t, a),
            s = n.useMemo(() => (0, Wd.aV)(o), [o]),
            d = n.useMemo(() => (0, Wd.Ct)(o), [o]),
            u = n.useCallback(() => {
              r(void 0), c();
            }, [c, r]);
          return s && !d && l.length > 0 && !!i
            ? n.createElement(rg, { onClick: u })
            : null;
        };
      var og = a(25281);
      const ig = (e, t, a) => {
          const r = ((e = "", t = "", a = "") =>
            (0, n.useMemo)(() => {
              if (e && t && a)
                return ti.s.ManageModsPath.replace(
                  ":namespace",
                  encodeURIComponent(e),
                )
                  .replace(":catalogId", encodeURIComponent(t))
                  .replace(":appName", encodeURIComponent(a));
            }, [e, t]))(e, t, a);
          return { manageModsLinkTo: r, gotoManageMods: (0, wd.X)(r) };
        },
        cg = ({ onClick: e }) =>
          n.createElement(br.c, {
            onClick: e,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.manage_mods",
            }),
          }),
        sg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            { installState: l } = (0, Ud.e)(e, t, a),
            o = (0, og.L)(e, t, a),
            { manageModsLinkTo: i, gotoManageMods: c } = ig(e, t, a),
            s = n.useMemo(() => (0, Wd.aV)(l), [l]),
            d = n.useMemo(() => (0, Wd.Ct)(l), [l]),
            u = n.useCallback(() => {
              r(void 0), c();
            }, [c, r]);
          return s && !d && o.length > 0 && !!i
            ? n.createElement(cg, { onClick: u })
            : null;
        };
      var dg = a(33663);
      const ug = () => {
        const { appName: e } = (0, hd.wK)(),
          t = (0, Zo.AT)(),
          { playtime: a } = (0, dg.U)({ artifactId: e });
        return (0, n.useMemo)(() => {
          const { hours: e, minutes: n } = ((e) => {
            const t = Math.min(e, Number.MAX_SAFE_INTEGER) / 60,
              a = Math.floor(t % 60);
            return { hours: Math.floor(t / 60), minutes: a };
          })(null != a ? a : 0);
          if (0 === e) {
            if (0 === n) return;
            return n < 5
              ? (0, oe.getMessage)(t, "diesel.common.time.minutes.lessThan5")
              : (0, oe.getMessage)(t, "diesel.common.time.minutes", [n]);
          }
          if (e > 0 && e < 1e4) {
            const a = (0, oe.getMessage)(t, "diesel.common.time.hours", [e]),
              r = (0, oe.getMessage)(t, "diesel.common.time.minutes", [n]);
            return 0 === n ? a : `${a} ${r}`;
          }
          return (0, oe.getMessage)(
            t,
            "diesel.common.time.hours.moreThan10000",
          );
        }, [a]);
      };
      var mg = Object.defineProperty,
        pg = Object.getOwnPropertySymbols,
        bg = Object.prototype.hasOwnProperty,
        gg = Object.prototype.propertyIsEnumerable,
        vg = (e, t, a) =>
          t in e
            ? mg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Eg = ({ defaultValue: e = "0s" }) => {
          const t = ug();
          return r().createElement(
            "span",
            { "data-testid": "playtime" },
            t || e,
          );
        },
        yg = (e) =>
          r().createElement(
            Ye.n4,
            {
              fallback: r().createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                height: 15,
                width: 60,
              }),
            },
            r().createElement(
              Eg,
              ((e, t) => {
                for (var a in t || (t = {})) bg.call(t, a) && vg(e, a, t[a]);
                if (pg) for (var a of pg(t)) gg.call(t, a) && vg(e, a, t[a]);
                return e;
              })({}, e),
            ),
          ),
        fg = ({ playtime: e }) =>
          n.createElement(so.s, {
            horizontal: !0,
            title: n.createElement(te.Z, {
              code: "diesel.common.playerData.playtime.played_time",
            }),
            subtitle: e,
          }),
        hg = () => n.createElement(fg, { playtime: n.createElement(yg, null) }),
        Og = () => {
          const e = (0, qe.useDispatch)();
          return (0, n.useCallback)(
            (t, a) => {
              e((0, Me.$M)({ collection: t, item: a }));
            },
            [e],
          );
        };
      var Cg = Object.defineProperty,
        Ig = Object.getOwnPropertySymbols,
        wg = Object.prototype.hasOwnProperty,
        xg = Object.prototype.propertyIsEnumerable,
        Sg = (e, t, a) =>
          t in e
            ? Cg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Pg = (e) => {
          var t = e,
            { collectionName: a } = t,
            n = ((e, t) => {
              var a = {};
              for (var n in e)
                wg.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Ig)
                for (var n of Ig(e))
                  t.indexOf(n) < 0 && xg.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["collectionName"]);
          return r().createElement(
            br.c,
            ((e, t) => {
              for (var a in t || (t = {})) wg.call(t, a) && Sg(e, a, t[a]);
              if (Ig) for (var a of Ig(t)) xg.call(t, a) && Sg(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: r().createElement(te.Z, {
                  code: "diesel.library.settings.remove_from_collection",
                  args: [a],
                }),
              },
              n,
            ),
          );
        },
        kg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: n } = (0, pr.U)(),
            { selectedCollectionId: l } = kn(),
            o = (0, i.c)({ suspense: !1 }),
            c = Ge(l, { suspense: !1 }),
            s = (0, Od.K)(e, t, a),
            d = Og(),
            u = r().useCallback(() => {
              c && s && d(c, s), n(void 0);
            }, [d, c, s, n]);
          return r().createElement(Pg, {
            onClick: u,
            collectionName: (null == c ? void 0 : c.name) || "",
            disabled: !o || !c,
          });
        };
      var Ng = Object.defineProperty,
        Lg = Object.getOwnPropertySymbols,
        jg = Object.prototype.hasOwnProperty,
        Mg = Object.prototype.propertyIsEnumerable,
        Ag = (e, t, a) =>
          t in e
            ? Ng(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Tg = (e) =>
          r().createElement(
            br.c,
            ((e, t) => {
              for (var a in t || (t = {})) jg.call(t, a) && Ag(e, a, t[a]);
              if (Lg) for (var a of Lg(t)) Mg.call(t, a) && Ag(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: r().createElement(te.Z, {
                  code: "diesel.library.settings.remove_from_favorites",
                }),
              },
              e,
            ),
          ),
        _g = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: n } = (0, pr.U)(),
            l = (0, i.c)({ suspense: !1 }),
            o = zr({ suspense: !1 }),
            c = (0, Od.K)(e, t, a),
            s = Og(),
            d = r().useCallback(() => {
              o && c && s(o, c), n(void 0);
            }, [s, o, c, n]);
          return r().createElement(Tg, { onClick: d, disabled: !l || !o });
        },
        Dg = ({ onClick: e, formattedSize: t }) =>
          n.createElement(br.c, {
            dense: !0,
            horizontal: !0,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.uninstall",
            }),
            subtitle: n.createElement("span", null, t),
            onClick: e,
          }),
        Rg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { setActiveMenu: r } = (0, pr.U)(),
            l = Jp(),
            o = hb(e, t, a),
            { openModal: i } = Eb(),
            { isLaunchableAddon: c, uninstall: s } = Sb(e, t, a),
            d = n.useCallback(() => {
              c && !(0, Dt.ZP)().supportsLaunchableAddonsV2Flow()
                ? s()
                : (0, Dt.ZP)().supportsWebClientUninstallFlow()
                  ? i({ namespace: e, catalogItemId: t, appName: a })
                  : l({ namespace: e, catalogId: t, appName: a }),
                r(void 0);
            }, [l, e, t, a, r, c, s]);
          return n.createElement(Dg, { onClick: d, formattedSize: o });
        },
        Bg = ({ version: e }) =>
          n.createElement(so.s, {
            horizontal: !0,
            title: n.createElement(te.Z, {
              code: "diesel.library.settings.version",
            }),
            subtitle: n.createElement(
              "span",
              { style: { lineBreak: "anywhere" } },
              e,
            ),
          }),
        Zg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { installState: r } = (0, Ud.e)(e, t, a),
            l = n.useMemo(() => (0, Wd.pe)(r), [r]);
          return n.createElement(Bg, { version: l });
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
      const Vg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            r = (0, qe.useSelector)(Fd.LF),
            l = gm(e, t, a),
            o = (0, bm.a)(e, t, a),
            { installState: c } = (0, Ud.e)(e, t, a),
            s = n.useMemo(() => (0, Wd.aV)(c) && !(0, Wd.Pb)(c), [c]),
            d = n.useMemo(() => (0, Wd.Pb)(c) || (0, Wd.t9)(c), [c]),
            u = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, hd.wK)(),
                { installState: r } = (0, Ud.e)(e, t, a),
                l = (0, n.useMemo)(() => (0, Wd.aV)(r), [r]),
                o = (0, n.useMemo)(() => (0, Wd.Gd)(r), [r]),
                i = (0, n.useMemo)(() => (0, Wd.Pb)(r), [r]),
                c = (0, n.useMemo)(() => (0, Wd.yK)(r), [r]);
              return (l || o) && !(i || c);
            })(),
            m = ((e) => {
              const { namespace: t } = (0, hd.wK)(),
                a = (0, xm.l)({ sandboxId: t }),
                n = (0, i.c)(e);
              return Boolean(n && a);
            })({ suspense: !1 }),
            p = ((e) => {
              const { namespace: t } = (0, hd.wK)();
              return (
                (0, Nu.C)(
                  {
                    categories: [ku.WD.ADDONS, ku.WD.DIGITAL_EXTRAS],
                    sandboxId: t,
                  },
                  e,
                ).count > 0
              );
            })({ suspense: !1 }),
            b = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, hd.wK)(),
                n = (0, Od.K)(e, t, a);
              return _u(e, t, a, (null == n ? void 0 : n.productId) || "", {
                suspense: !1,
              });
            })(),
            g = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, hd.wK)(),
                { installState: r } = (0, Ud.e)(e, t, a);
              return n.useMemo(() => (0, Wd.aV)(r), [r]);
            })(),
            v = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, hd.wK)(),
                { installState: r } = (0, Ud.e)(e, t, a),
                l = (0, Au.c)(e, t, a),
                o = (0, n.useMemo)(() => (0, Bo.mW)(l), [l]),
                i = (0, n.useMemo)(() => (0, Wd.pe)(r), [r]);
              return (0, n.useMemo)(() => !o && Boolean(i), [o, i]);
            })(),
            E = (() => {
              const e = (0, hd.wK)(),
                t = (0, yt.o)();
              return !Gd(t, e, { suspense: !1 });
            })(),
            y = (() => {
              const { selectedCollectionId: e } = kn(),
                t = (0, yt.o)();
              return e !== Et.U.ALL && e !== t;
            })(),
            f = m || p || b,
            h = g || v,
            O = s || d || u;
          if (r === Oa.v.ANONYMOUS || l)
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(Nm, null),
              u && n.createElement(mo, null),
              u && n.createElement(Rg, null),
            );
          const C = n.createElement(
            n.Fragment,
            null,
            n.createElement(mo, null),
            E ? n.createElement(Vd, null) : n.createElement(_g, null),
            n.createElement(vu, null),
            y && n.createElement(kg, null),
          );
          if (o)
            return n.createElement(
              n.Fragment,
              null,
              n.createElement(Nm, null),
              C,
              g && n.createElement(mo, null),
              g && n.createElement(hg, null),
            );
          const I =
              f &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(mo, null),
                m && n.createElement(wm, null),
                p && n.createElement(Pu, null),
                b && n.createElement(Mu, null),
              ),
            w =
              h &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(mo, null),
                g && n.createElement(hg, null),
                v && n.createElement(Zg, null),
              );
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(Nm, null),
            C,
            I,
            O &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(mo, null),
                d &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(hu, null),
                    n.createElement(Mm, null),
                  ),
                s &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(wu, null),
                    n.createElement(Cm, null),
                    n.createElement(sg, null),
                    n.createElement(lg, null),
                    n.createElement(ag, null),
                  ),
                u && n.createElement(Rg, null),
              ),
            w,
          );
        },
        Hg = n.forwardRef((e, t) => {
          var a = e,
            { id: r } = a,
            l = ((e, t) => {
              var a = {};
              for (var n in e)
                Wg.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Ug)
                for (var n of Ug(e))
                  t.indexOf(n) < 0 && Kg.call(e, n) && (a[n] = e[n]);
              return a;
            })(a, ["id"]);
          return n.createElement(
            Sr.v,
            ((e, t) => {
              for (var a in t || (t = {})) Wg.call(t, a) && zg(e, a, t[a]);
              if (Ug) for (var a of Ug(t)) Kg.call(t, a) && zg(e, a, t[a]);
              return e;
            })({ ref: t, id: r, dense: !0, noBorder: !0 }, l),
            n.createElement(Vg, null),
          );
        });
      var $g = Object.defineProperty,
        Gg = Object.getOwnPropertySymbols,
        qg = Object.prototype.hasOwnProperty,
        Yg = Object.prototype.propertyIsEnumerable,
        Jg = (e, t, a) =>
          t in e
            ? $g(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Xg = (0, m.i)(() => ({
          root: (0, b.iv)({ width: "max-content", minWidth: 280 }),
        })),
        Qg = (e) => {
          var t = e,
            { id: a } = t,
            n = ((e, t) => {
              var a = {};
              for (var n in e)
                qg.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && Gg)
                for (var n of Gg(e))
                  t.indexOf(n) < 0 && Yg.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["id"]);
          const l = Xg();
          return r().createElement(
            xr,
            ((e, t) => {
              for (var a in t || (t = {})) qg.call(t, a) && Jg(e, a, t[a]);
              if (Gg) for (var a of Gg(t)) Yg.call(t, a) && Jg(e, a, t[a]);
              return e;
            })({}, n),
            r().createElement(
              "div",
              { className: l.root },
              r().createElement(Hg, { id: a }),
            ),
          );
        };
      var ev = a(10499);
      const tv = ({ animation: e }) =>
          n.createElement(
            Sr.v,
            { dense: !0, noBorder: !0 },
            n.createElement(so.s, {
              title: n.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "80%",
                height: "100%",
                animation: e,
              }),
            }),
            n.createElement(so.s, {
              title: n.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "50%",
                animation: e,
              }),
            }),
            n.createElement(so.s, {
              title: n.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "40%",
                animation: e,
              }),
            }),
            n.createElement(mo, null),
            n.createElement(so.s, {
              title: n.createElement(Ee.Od, {
                variant: Ee.Jy.Text,
                width: "50%",
                animation: e,
              }),
            }),
          ),
        av = (e) => {
          const { activeMenu: t, setActiveMenu: a } = (0, pr.U)(),
            r = t === e,
            l = (0, n.useCallback)(() => a(r ? void 0 : e), [r, e, a]),
            o = (0, n.useCallback)(() => a(void 0), [a]);
          return { isOpen: r, toggleMenu: l, closeMenu: o };
        };
      var nv = Object.defineProperty,
        rv = Object.defineProperties,
        lv = Object.getOwnPropertyDescriptors,
        ov = Object.getOwnPropertySymbols,
        iv = Object.prototype.hasOwnProperty,
        cv = Object.prototype.propertyIsEnumerable,
        sv = (e, t, a) =>
          t in e
            ? nv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const dv = ({
        id: e,
        toggleClassName: t,
        menuClassName: a,
        renderMenu: r,
      }) => {
        const { isOpen: l, toggleMenu: o, closeMenu: i } = av(e);
        return n.createElement(ev.L, {
          id: e,
          isOpen: l,
          onClose: i,
          popperConfig: { reversePlacement: !0 },
          renderToggle: (e) => {
            return n.createElement(
              "div",
              { className: t },
              n.createElement(
                oo,
                ((a = ((e, t) => {
                  for (var a in t || (t = {})) iv.call(t, a) && sv(e, a, t[a]);
                  if (ov) for (var a of ov(t)) cv.call(t, a) && sv(e, a, t[a]);
                  return e;
                })({}, e)),
                rv(a, lv({ onClick: o }))),
              ),
            );
            var a;
          },
          renderMenu: (e) =>
            n.createElement(
              "div",
              { className: a },
              n.createElement(
                Ye.n4,
                { fallback: n.createElement(tv, null) },
                r(e),
              ),
            ),
        });
      };
      var uv = Object.defineProperty,
        mv = Object.getOwnPropertySymbols,
        pv = Object.prototype.hasOwnProperty,
        bv = Object.prototype.propertyIsEnumerable,
        gv = (e, t, a) =>
          t in e
            ? uv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const vv = ({ id: e, toggleClassName: t, menuClassName: a }) =>
        n.createElement(dv, {
          id: e,
          toggleClassName: t,
          menuClassName: a,
          renderMenu: (e) =>
            n.createElement(
              Hg,
              ((e, t) => {
                for (var a in t || (t = {})) pv.call(t, a) && gv(e, a, t[a]);
                if (mv) for (var a of mv(t)) bv.call(t, a) && gv(e, a, t[a]);
                return e;
              })({}, e),
            ),
        });
      var Ev = a(27429);
      const yv = ({ children: e }) => {
        const { namespace: t, catalogItemId: a, appName: r } = (0, hd.wK)(),
          l = (0, Au.c)(t, a, r),
          { installState: o } = (0, Ud.e)(t, a, r),
          i = (0, vb.V)(t, a, r),
          c = n.useMemo(() => (0, Bo.X3)(l), [l]),
          s = n.useMemo(() => (0, Bo.X5)(l), [l]),
          d = (0, Wd.HO)(o),
          u =
            (0, Wd.aV)(o) && !(0, Wd.Pb)(o)
              ? 1
              : null == o
                ? void 0
                : o.progress;
        return n.createElement(
          Il,
          {
            image: c
              ? n.createElement(Ev.E, { alt: i, src: c, showBrokenOnError: !0 })
              : void 0,
            logo: s ? n.createElement(Ev.E, { alt: i, src: s }) : void 0,
            percent: u,
            indeterminate: d,
          },
          e,
        );
      };
      var fv = ((e) => (
        (e.BackgroundOverlay = "backgroundOverlay"),
        (e.AccentOverlay = "accentOverlay"),
        (e.Accent = "accent"),
        (e.Level1 = "level1"),
        (e.Level2 = "level2"),
        e
      ))(fv || {});
      const hv = (0, m.i)((e, { variant: t }) => ({
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
        Ov = ({
          children: e,
          variant: t = "backgroundOverlay",
          pill: a = !1,
        }) => {
          const r = hv({ variant: t }),
            l = (0, b.cx)(r.root, { [r.pill]: a });
          return n.createElement(
            "span",
            { className: l, "data-testid": "Badge" },
            n.createElement(Z.Z, null, e),
          );
        },
        Cv = ({ count: e }) => {
          const t = "diesel.library.dlc" + (e > 1 ? ".plural" : "");
          return n.createElement(
            Ov,
            { variant: fv.Level2 },
            n.createElement(te.Z, { code: t, args: [e] }),
          );
        },
        Iv = (0, m.i)(() => ({
          button: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: fe.E0,
            height: 34,
            width: 43,
          }),
          count: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: fe.E0,
            height: 24,
            width: 35,
            fontSize: 12,
            "button:hover &, button:focus &": { background: fe.yS },
          }),
        })),
        wv = ({ count: e }) => {
          const t = n.useRef(null),
            a = Iv(),
            { namespace: r, catalogItemId: l, appName: o } = (0, hd.wK)(),
            { gotoManageAddons: i } = ng(r, l, o),
            { installState: c } = (0, Ud.e)(r, l, o),
            s = n.useMemo(() => (0, Wd.aV)(c) && !(0, Wd.Pb)(c), [c]),
            d = n.useCallback(() => i(), [r, i]);
          return n.useMemo(
            () =>
              s
                ? n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(
                      ft.Z,
                      { className: a.button, onClick: d, ref: t },
                      n.createElement(
                        "div",
                        { className: a.count },
                        e >= 99 ? "99+" : e,
                      ),
                    ),
                    n.createElement(
                      nt.u,
                      { anchorRef: t, delay: 500 },
                      n.createElement(te.Z, {
                        code: "diesel.library.settings.manageDLC",
                      }),
                    ),
                  )
                : n.createElement("span", null, "-"),
            [s],
          );
        },
        xv = (0, io.L)(
          n.createElement(
            "g",
            null,
            n.createElement(
              "defs",
              null,
              n.createElement("path", {
                id: "heart",
                d: "M20.49 5.397C19.482 4.466 18.162 4 16.842 4c-1.32 0-2.64.466-3.647 1.397L12 6.503l-1.196-1.106C9.797 4.466 8.477 4 7.158 4c-1.32 0-2.64.466-3.647 1.397-2.013 1.861-2.015 4.878-.005 6.741L11.984 20l.016-.015.017.015 8.477-7.862c2.01-1.864 2.008-4.88-.005-6.74z",
              }),
              n.createElement(
                "mask",
                { id: "outerHeartOnly" },
                n.createElement("rect", {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                }),
                n.createElement("use", { xlinkHref: "#heart", fill: "black" }),
              ),
            ),
            n.createElement("use", {
              xlinkHref: "#heart",
              strokeWidth: "6",
              stroke: "rgb(245,245,245)",
              fill: "none",
              mask: "url(#outerHeartOnly)",
            }),
          ),
          "HeartOutline",
        );
      var Sv = Object.defineProperty,
        Pv = Object.defineProperties,
        kv = Object.getOwnPropertyDescriptors,
        Nv = Object.getOwnPropertySymbols,
        Lv = Object.prototype.hasOwnProperty,
        jv = Object.prototype.propertyIsEnumerable,
        Mv = (e, t, a) =>
          t in e
            ? Sv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Av = (e, t) => {
          for (var a in t || (t = {})) Lv.call(t, a) && Mv(e, a, t[a]);
          if (Nv) for (var a of Nv(t)) jv.call(t, a) && Mv(e, a, t[a]);
          return e;
        };
      const Tv = (0, m.i)((e, { isInCollection: t, showFullIcon: a }) => {
          return {
            root: (0, b.iv)(
              ((n = Av(
                {
                  position: "absolute",
                  height: 24,
                  width: 24,
                  opacity: t ? 1 : 0,
                },
                (0, rt.ip)("opacity"),
              )),
              (r = {
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
              Pv(n, kv(r))),
            ),
          };
          var n, r;
        }),
        _v = ({
          className: e,
          onClick: t,
          onKeyDown: a,
          isInCollection: n = !1,
          isOnline: l,
        }) => {
          const [o, i] = r().useState(!1),
            c = Tv({ isInCollection: n, showFullIcon: o }),
            s = r().useCallback(() => {
              n || i(!0);
            }, [n]),
            d = r().useCallback(() => {
              n || i(!1);
            }, [n]),
            u = r().useCallback(() => {
              i(n);
            }, [n]);
          return r().createElement(
            "div",
            {
              className: (0, b.cx)(c.root, e),
              "data-wrapperid": "favoriteWrapper",
            },
            r().createElement(
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
              o || n
                ? r().createElement(Wo, null)
                : r().createElement(xv, null),
            ),
          );
        },
        Dv = ({ className: e }) => {
          const t = (0, hd.wK)(),
            { namespace: a, catalogItemId: r, appName: l } = t,
            o = (0, Od.K)(a, r, l),
            c = zr(),
            s = Gd(null == c ? void 0 : c.collectionId, t),
            d = Kd(),
            u = Og(),
            m = (0, i.c)(),
            p = (e) => {
              c && o && (e ? u(c, o) : d(c, o));
            },
            b = n.useCallback(() => {
              p(s);
            }, [t, s]),
            g = n.useCallback(
              (e) => {
                e.key === hr.et.Enter && (e.preventDefault(), p(s));
              },
              [t, s],
            );
          return n.createElement(_v, {
            className: e,
            isOnline: m,
            isInCollection: s,
            onClick: b,
            onKeyDown: g,
          });
        };
      var Rv = a(92954),
        Bv = ((e) => (
          (e.BLUE = "blue"),
          (e.DEFAULT = "black"),
          (e.GREEN = "green"),
          (e.PURPLE = "purple"),
          e
        ))(Bv || {});
      const Zv = {
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
          blue: (0, b.iv)({ backgroundColor: Rv.St }),
          black: (0, b.iv)({ backgroundColor: Rv.Fi }),
          green: (0, b.iv)({ backgroundColor: Rv.$w }),
          purple: (0, b.iv)({ backgroundColor: Rv.Yh }),
        },
        Fv = ({ color: e = "black", children: t }) => {
          const a = (0, b.cx)(Zv.root, Zv[e]);
          return n.createElement(
            "div",
            { className: a, "data-testid": "StatusBar" },
            n.createElement(
              Z.Z,
              null,
              n.createElement("span", { className: Zv.lineClamp }, t),
            ),
          );
        },
        Uv = (e) => {
          switch (e.toUpperCase()) {
            case rn.PP.Stage:
              return Bv.BLUE;
            case rn.PP.Live:
              return Bv.PURPLE;
            default:
              return Bv.GREEN;
          }
        },
        Wv = () => {
          const { namespace: e, appName: t, catalogItemId: a } = (0, hd.wK)(),
            n = (0, Od.K)(e, a, t);
          if (
            (null == n ? void 0 : n.sandboxType) === rn.Dj.Private &&
            (null == n ? void 0 : n.sandboxName)
          ) {
            const e = n.sandboxName;
            return r().createElement(Fv, { color: Uv(e) }, e);
          }
          return null;
        };
      var Kv = Object.defineProperty,
        zv = Object.defineProperties,
        Vv = Object.getOwnPropertyDescriptors,
        Hv = Object.getOwnPropertySymbols,
        $v = Object.prototype.hasOwnProperty,
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
          for (var a in t || (t = {})) $v.call(t, a) && qv(e, a, t[a]);
          if (Hv) for (var a of Hv(t)) Gv.call(t, a) && qv(e, a, t[a]);
          return e;
        };
      const Jv = ({
          namespace: e,
          catalogItemId: t,
          appName: a,
          defaultValue: r = "0B",
        }) => {
          const l = hb(e, t, a);
          return n.createElement(
            "span",
            { "data-testid": "InstallSizeOnDisk" },
            l || r,
          );
        },
        Xv = () =>
          n.createElement(Ee.Od, {
            variant: Ee.Jy.Text,
            height: "100%",
            width: 50,
          }),
        Qv = (e) =>
          n.createElement(
            Ye.n4,
            { fallback: n.createElement(Xv, null) },
            n.createElement(Jv, Yv({}, e)),
          ),
        eE = ({ defaultValue: e }) => {
          const t = (0, hd.wK)();
          return n.createElement(
            Qv,
            ((a = Yv({}, t)), zv(a, Vv({ defaultValue: e }))),
          );
          var a;
        };
      var tE = Object.defineProperty,
        aE = Object.getOwnPropertySymbols,
        nE = Object.prototype.hasOwnProperty,
        rE = Object.prototype.propertyIsEnumerable,
        lE = (e, t, a) =>
          t in e
            ? tE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        oE = (e, t) => {
          for (var a in t || (t = {})) nE.call(t, a) && lE(e, a, t[a]);
          if (aE) for (var a of aE(t)) rE.call(t, a) && lE(e, a, t[a]);
          return e;
        };
      const iE =
          ({
            hasSettingsMenu: e = !0,
            Layout: t,
            SubtitleComponent: a,
            useButtonAction: r,
            isGridView: l,
          }) =>
          () => {
            const o = (0, hd.wK)(),
              { namespace: i, catalogItemId: c, appName: s } = o,
              d = `settings_${(0, Js.ue)(i, c, s)}`,
              u = `${d}_context`,
              m = (0, ad.E)(),
              p = r(o),
              b = (0, qe.useSelector)(on.vR) || Oa.v.ANONYMOUS,
              g = n.useRef(null),
              { isOpen: v, closeMenu: E } = av(d),
              {
                openContextMenu: y,
                openContextMenuWithKeyboard: f,
                contextMenuProps: h,
              } = Tr(u),
              O = e,
              C = n.useMemo(
                () =>
                  O
                    ? n.createElement(
                        Qg,
                        oE({ id: u, anchorElement: g.current }, h),
                      )
                    : void 0,
                [u, h.anchorPosition, h.isOpen, h.onClose, O],
              ),
              I = n.useMemo(
                () =>
                  e
                    ? (e) =>
                        n.createElement(vv, {
                          id: d,
                          toggleClassName: e.button,
                          menuClassName: e.menu,
                        })
                    : void 0,
                [d, e],
              );
            return n.createElement(t, {
              forwardedRef: g,
              title: n.createElement(Jb.F, { hasTooltip: !0, lineClamp: !l }),
              subtitle: n.createElement(a, { isGridView: l }),
              image: n.createElement(yv, null, n.createElement(Wv, null)),
              renderFavorite: (e) => n.createElement(Dv, { className: e }),
              onContextMenu: O
                ? (e) => {
                    E(), y(e);
                  }
                : void 0,
              onKeyDown: O ? f : void 0,
              contextMenu: C,
              renderSettingsMenu: I,
              badges: m.length
                ? l
                  ? n.createElement(Cv, { count: m.length })
                  : n.createElement(wv, { count: m.length })
                : void 0,
              active: v || h.isOpen,
              hasHover: !!p,
              onClick: p,
              playtime: n.createElement(yg, { defaultValue: "-" }),
              installSize: n.createElement(eE, { defaultValue: "-" }),
              achievements: b ? n.createElement(Zd, { isGridView: l }) : void 0,
            });
          },
        cE = (e) => ({
          GridCard: iE(oE({ Layout: Gl, isGridView: !0 }, e)),
          ListCard: iE(oE({ Layout: cs, isGridView: !1 }, e)),
        }),
        sE = cE({
          useButtonAction: td,
          SubtitleComponent: ed.c,
          hasSettingsMenu: !0,
        });
      var dE = a(20766);
      const uE = (0, Ou.g)(
        "installWithOptions",
        ({ namespace: e, catalogId: t, appName: a, options: n }) =>
          (0, Dt.ZP)().installWithOptions(e, t, a, n),
      );
      const mE = (0, Ou.g)("chooseInstallLocation", (e) => {
          return (
            (t = void 0),
            (a = [e]),
            (n = function* ({ namespace: e, catalogId: t, appName: a }) {
              return (0, Dt.ZP)().chooseInstallLocation(e, t, a);
            }),
            new Promise((e, r) => {
              var l = (e) => {
                  try {
                    i(n.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                o = (e) => {
                  try {
                    i(n.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                i = (t) =>
                  t.done ? e(t.value) : Promise.resolve(t.value).then(l, o);
              i((n = n.apply(t, a)).next());
            })
          );
          var t, a, n;
        }),
        pE = (0, Ou.u)("install");
      var bE = a(51460);
      const gE = (0, m.i)(() => ({
          pathInfo: (0, b.iv)({
            margin: "10px 0 20px 0",
            width: "100%",
            wordBreak: "break-all",
          }),
          textLabel: (0, b.iv)((0, re.wz)(4)),
          spacingTop: (0, b.iv)({ marginTop: 10 }),
          hasError: (0, b.iv)({ opacity: 1, height: "auto" }),
          autoUpdateLabel: (0, b.iv)((0, re.oI)(10)),
          buttonDiv: (0, b.iv)({ marginTop: 20 }),
        })),
        vE = ({ path: e }) => {
          const t = gE();
          return n.createElement(
            "div",
            { className: t.pathInfo },
            n.createElement(
              "span",
              { className: t.textLabel },
              n.createElement(
                ae.ZP,
                { weight: ae.G0.BOLD, textLevel: F.N.SECONDARY },
                n.createElement(Zo.v0, {
                  code: "egstore.library.install_location_modal.path",
                }),
              ),
            ),
            n.createElement(
              "span",
              { "data-testid": "path" },
              n.createElement(ae.ZP, { textLevel: F.N.SECONDARY }, e),
            ),
          );
        },
        EE = ({
          directoryPath: e = "",
          downloadSize: t = "",
          error: a = "",
          hasInstallOptions: r = !1,
          isInstallDisabled: l = !1,
          onBrowseClick: o,
          onCancelClick: i,
          onInstallClick: c,
          onInstallOptionsClick: s,
          options: m,
          path: p = "",
          requiredSpace: b = "",
        }) => {
          const g = gE();
          return n.createElement(A.P, {
            header: n.createElement(
              _.x,
              { onCloseClick: i },
              n.createElement(
                ae.ZP,
                { weight: ae.G0.BOLD },
                n.createElement(Zo.v0, {
                  code: "egstore.library.install_location_modal.title",
                }),
              ),
            ),
            content: n.createElement(
              N,
              {
                spacing: 10,
                role: "form",
                "aria-label": "Choose Install Location",
              },
              n.createElement(
                L,
                { xs: 9 },
                n.createElement(ee, {
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
                  label: n.createElement(Zo.v0, {
                    code: "egstore.library.install_location_modal.folder",
                  }),
                }),
                r && n.createElement(vE, { path: p }),
              ),
              n.createElement(
                L,
                { xs: 3 },
                n.createElement(
                  "div",
                  { className: g.buttonDiv },
                  n.createElement(
                    nl.gg,
                    {
                      buttonHeight: R.Ey.DENSED,
                      buttonWidth: R.WL.BLOCK,
                      onClick: o,
                      "data-testid": "BrowseButton",
                    },
                    n.createElement(
                      bE.Z,
                      null,
                      n.createElement(Zo.v0, {
                        code: "egstore.library.install_location_modal.browse",
                      }),
                    ),
                  ),
                  r &&
                    n.createElement(
                      "div",
                      { className: g.spacingTop },
                      n.createElement(
                        al.f5,
                        {
                          buttonHeight: R.Ey.DENSED,
                          buttonWidth: R.WL.BLOCK,
                          onClick: s,
                          "data-testid": "OptionsButton",
                        },
                        n.createElement(
                          bE.Z,
                          null,
                          n.createElement(Zo.v0, {
                            code: "egstore.library.install_location_modal.options",
                          }),
                        ),
                      ),
                    ),
                ),
              ),
              !r &&
                n.createElement(
                  L,
                  { xs: 12 },
                  n.createElement(vE, { path: p }),
                ),
              m,
            ),
            footer: n.createElement(
              T.m,
              {
                content: n.createElement(
                  "div",
                  null,
                  t &&
                    n.createElement(
                      d.x,
                      { alignItems: u.Ks.Center },
                      n.createElement(
                        "span",
                        { className: g.textLabel },
                        n.createElement(
                          Z.Z,
                          { textLevel: F.N.SECONDARY },
                          n.createElement(Zo.v0, {
                            code: "egstore.library.install_location_modal.download_size",
                          }),
                        ),
                      ),
                      n.createElement(
                        "span",
                        { "data-testid": "downloadSize" },
                        n.createElement(Z.Z, null, t),
                      ),
                    ),
                  b &&
                    n.createElement(
                      d.x,
                      { alignItems: u.Ks.Center },
                      n.createElement(
                        "span",
                        { className: g.textLabel },
                        n.createElement(
                          Z.Z,
                          { textLevel: F.N.SECONDARY },
                          n.createElement(Zo.v0, {
                            code: "egstore.library.install_location_modal.required_space",
                          }),
                        ),
                      ),
                      n.createElement(
                        "span",
                        { "data-testid": "requiredSpace" },
                        n.createElement(Z.Z, null, b),
                      ),
                    ),
                ),
              },
              n.createElement(
                M.d,
                { onClick: i, "data-testid": "CancelButton" },
                n.createElement(Zo.v0, {
                  code: "diesel.common.smart_button.cancel",
                }),
              ),
              n.createElement(
                j.N,
                { disabled: l, onClick: c, "data-testid": "InstallButton" },
                n.createElement(Zo.v0, {
                  code: "diesel.common.smart_button.install",
                }),
              ),
            ),
          });
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
      const wE = (e) =>
        n.createElement(ye, {
          hasHeader: !0,
          hasFooter: !0,
          hasPrimaryButton: !0,
          hasSecondaryButton: !0,
          titleWidth: 200,
          content: n.createElement(
            N,
            {
              spacing: 10,
              role: "form",
              "aria-label": "Choose Install Location",
            },
            n.createElement(
              L,
              { xs: 12 },
              n.createElement(
                Ee.Od,
                IE({ variant: Ee.Jy.Text, width: 50, height: 20 }, e),
              ),
            ),
            n.createElement(
              L,
              { xs: 9 },
              n.createElement(Ee.Od, IE({ width: "100%", height: 40 }, e)),
            ),
            n.createElement(
              L,
              { xs: 3 },
              n.createElement(Ee.Od, IE({ width: "100%", height: 40 }, e)),
            ),
            n.createElement(
              L,
              { xs: 12 },
              n.createElement(
                "div",
                { style: { margin: "20px 0" } },
                n.createElement(
                  Ee.Od,
                  IE({ variant: Ee.Jy.Text, width: "80%", height: 25 }, e),
                ),
              ),
            ),
          ),
        });
      var xE = a(4329);
      const SE = (0, m.i)(() => ({ textLabel: (0, b.iv)((0, re.oI)(10)) })),
        PE = ({ ariaLabel: e, checked: t, id: a, label: r, onClick: l }) => {
          const o = SE();
          return n.createElement(
            L,
            { xs: 12 },
            n.createElement(
              d.x,
              { alignItems: u.Ks.Center },
              n.createElement(xE.X, {
                id: a,
                ariaLabel: e,
                checked: t,
                onClick: l,
              }),
              n.createElement(
                "span",
                { className: o.textLabel },
                n.createElement(
                  "label",
                  { htmlFor: a, "data-testid": "label" },
                  n.createElement(ae.ZP, null, r),
                ),
              ),
            ),
          );
        },
        kE =
          (e) =>
          ({ value: t, onClick: a }) => {
            const r = (0, Zo.ql)();
            return n.createElement(PE, {
              id: e.id,
              ariaLabel: r(e.titleCode),
              label: n.createElement(Zo.v0, { code: e.titleCode }),
              checked: t,
              onClick: a,
            });
          },
        NE = kE({
          id: "installAutoUpdate",
          titleCode: "egstore.library.install_location_modal.auto_update",
        }),
        LE = kE({
          id: "createShortcut",
          titleCode: "egstore.library.install_location_modal.create_shortcut",
        });
      var jE = a(63236);
      const ME = Am("install-location-modal"),
        AE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            { closeModal: r, cancelModal: l, getData: o } = ME(),
            { additionalInstalls: i } = o() || {},
            c = mE(),
            s = Lm(),
            d = uE(),
            { installState: u } = (0, Ud.e)(e, t, a),
            [m, p] = n.useState(!0),
            [b, g] = n.useState(!0),
            { path: v, directoryPath: E } = ((e, t, a) => {
              const { installState: r } = (0, Ud.e)(e, t, a),
                l = n.useMemo(() => (0, Wd.Kk)(r), [r]),
                o = n.useMemo(
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
              const r = (0, Au.c)(e, t, a),
                { globalAutoUpdate: l } = (0, Db.t)(),
                o = (0, n.useMemo)(() => (0, Bo.mW)(r), [r]),
                i = (0, n.useMemo)(
                  () => (0, Bt.Bv)(null == r ? void 0 : r.categories),
                  [r],
                );
              return !o && l && !i;
            })(e, t, a),
            f = (() => {
              const e = (0, qe.useSelector)(on.ek);
              return e === _b.om.WINDOWS || e === _b.om.WIN32;
            })(),
            h = ((e, t, a) => {
              const { installState: r } = (0, Ud.e)(e, t, a);
              return (0, n.useMemo)(() => (0, Wd.t9)(r), [r]);
            })(e, t, a),
            { metadata: O } = ((e = "", t = "") => {
              const a = (0, qe.useDispatch)(),
                r = (0, n.useMemo)(() => (0, ln.KG)(t), [t]),
                l = (0, qe.useSelector)(r),
                o = Boolean(e && t),
                i =
                  !(null == l ? void 0 : l.state) ||
                  (null == l ? void 0 : l.state) === jE.s.notAsked;
              return (
                (0, n.useEffect)(() => {
                  o && i && a((0, hc.X4)({ sandboxId: e, artifactId: t }));
                }, [o, i]),
                (0, n.useMemo)(
                  () => ({
                    metadata: null == l ? void 0 : l.latestValue,
                    query: {
                      isFetching:
                        (null == l ? void 0 : l.state) === jE.s.fetching,
                      isSuccess:
                        (null == l ? void 0 : l.state) === jE.s.success,
                    },
                  }),
                  [
                    null == l ? void 0 : l.latestValue,
                    null == l ? void 0 : l.state,
                  ],
                )
              );
            })(e, a),
            C = (0, Wd.td)((null == O ? void 0 : O.downloadSizeBytes) || 0),
            I = (0, Wd.td)((null == O ? void 0 : O.installedSizeBytes) || 0),
            w = n.useMemo(() => (0, Wd.Ii)(u), [u]),
            x = n.useMemo(
              () => Boolean(!v || w),
              [v, null == u ? void 0 : u.stateerror],
            ),
            S = n.useCallback(() => {
              c({ namespace: e, catalogId: t, appName: a });
            }, [c, e, t, a]),
            P = n.useCallback(() => {
              s({ namespace: e, catalogId: t, appName: a });
            }, [s, e, t, a]),
            k = n.useCallback(() => {
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
                r();
            }, [r, d, e, t, a, m, b, i]);
          return n.createElement(EE, {
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
            options: n.createElement(
              n.Fragment,
              null,
              y &&
                n.createElement(NE, { value: m, onClick: () => p((e) => !e) }),
              f &&
                n.createElement(LE, { value: b, onClick: () => g((e) => !e) }),
            ),
          });
        },
        TE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            r = pE(),
            { closeModal: l } = ME(),
            o = (0, Dt.ZP)().supportsWebClientInstallFlow(),
            { isThirdPartyManaged: i, triggerInstallToast: c } = (0, qu.K)(
              e,
              t,
              a,
            );
          return (
            n.useEffect(() => {
              (!i && o) ||
                (r({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: oc.Nd.MANAGE_PRODUCT_MODAL,
                }),
                i && c(),
                l());
            }, [i]),
            !i && o ? n.createElement(AE, null) : n.createElement(wE, null)
          );
        },
        _E = () => {
          const { isOpen: e, cancelModal: t, getData: a } = ME(),
            r = a();
          return r
            ? n.createElement(
                Le.u,
                { isOpen: e, onClose: t },
                n.createElement(
                  Ye.n4,
                  { fallback: n.createElement(wE, null) },
                  n.createElement(
                    hd.wi.Provider,
                    { value: r },
                    n.createElement(TE, null),
                  ),
                ),
              )
            : null;
        },
        DE = (e) => {
          const { namespace: t, catalogItemId: a, appName: r } = e,
            { openModal: l } = ME(),
            o = uE(),
            i = (0, Ib.R)(t, a, r),
            { isLaunchableAddon: c, install: s } = Sb(t, a, r),
            { installState: d } = (0, Ud.e)(
              c ? (null == i ? void 0 : i.namespace) : "",
              c ? (null == i ? void 0 : i.catalogItemId) : "",
              c ? (null == i ? void 0 : i.appName) : "",
            );
          return (0, n.useCallback)(() => {
            const t = (0, Wd.aV)(d),
              a = (0, Wd.Pb)(d),
              n = (0, Wd.Gd)(d);
            if (c && d)
              if ((0, Dt.ZP)().supportsLaunchableAddonsV2Flow()) {
                if (t || a || n)
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
        RE = cE({
          useButtonAction: DE,
          SubtitleComponent: dE.y,
          hasSettingsMenu: !0,
        }),
        BE = cE({
          useButtonAction: DE,
          SubtitleComponent: dE.v,
          hasSettingsMenu: !0,
        });
      var ZE = a(47789);
      const FE = cE({
          useButtonAction: ZE.v,
          SubtitleComponent: wl.L6,
          hasSettingsMenu: !0,
        }),
        UE = cE({
          useButtonAction: ZE.v,
          SubtitleComponent: wl.WL,
          hasSettingsMenu: !0,
        }),
        WE = cE({
          useButtonAction: ZE.v,
          SubtitleComponent: wl.YA,
          hasSettingsMenu: !0,
        });
      var KE = a(33506);
      const zE = cE({
        useButtonAction: td,
        SubtitleComponent: KE.D,
        hasSettingsMenu: !1,
      });
      var VE = a(52687),
        HE = a(86680);
      const $E = cE({
        useButtonAction: HE.v,
        SubtitleComponent: VE.c,
        hasSettingsMenu: !0,
      });
      var GE = a(63366);
      const qE = cE({
        useButtonAction: ({ namespace: e }) => {
          const { gotoProductHome: t } = Pm(e, { suspense: !1 });
          return t;
        },
        SubtitleComponent: GE.g,
        hasSettingsMenu: !0,
      });
      var YE = a(42113),
        JE = a(89331);
      const XE = (0, JE.f)(Jp),
        QE = cE({
          useButtonAction: XE,
          SubtitleComponent: YE.g,
          hasSettingsMenu: !1,
        });
      var ey = a(19602);
      const ty = cE({
        useButtonAction: () => (0, wd.X)("UE"),
        SubtitleComponent: ey.u,
        hasSettingsMenu: !1,
      });
      var ay = a(5190),
        ny = a(86416),
        ry = a(66685);
      const ly = (0, JE.f)(ay.$),
        oy = (0, JE.f)(ny.z),
        iy = cE({
          useButtonAction: td,
          SubtitleComponent: ry.ob,
          hasSettingsMenu: !1,
        }),
        cy = cE({
          useButtonAction: ly,
          SubtitleComponent: ry.zQ,
          hasSettingsMenu: !0,
        }),
        sy = cE({
          useButtonAction: oy,
          SubtitleComponent: ry.Jy,
          hasSettingsMenu: !0,
        }),
        dy = cE({
          useButtonAction: td,
          SubtitleComponent: o.z,
          hasSettingsMenu: !1,
        });
      var uy = a(9800);
      const my = cE({
        useButtonAction: td,
        SubtitleComponent: uy.V,
        hasSettingsMenu: !0,
      });
      var py = a(93088),
        by = a(48912);
      const gy = cE({
        useButtonAction: by.m,
        SubtitleComponent: py.l,
        hasSettingsMenu: !0,
      });
      var vy = a(60331);
      const Ey = cE({
        useButtonAction: td,
        SubtitleComponent: vy.i,
        hasSettingsMenu: !0,
      });
      var yy = a(92679);
      const fy = cE({
        useButtonAction: td,
        SubtitleComponent: yy.t,
        hasSettingsMenu: !0,
      });
      var hy = a(40762);
      const Oy = cE({
        useButtonAction: td,
        SubtitleComponent: hy.K,
        hasSettingsMenu: !0,
      });
      cE({ useButtonAction: td, SubtitleComponent: hy.d, hasSettingsMenu: !0 });
      var Cy = a(52976);
      const Iy = cE({
        useButtonAction: td,
        SubtitleComponent: Cy.i,
        hasSettingsMenu: !1,
      });
      var wy = a(41015),
        xy = a(99907);
      const Sy = cE({
        useButtonAction: wy.e,
        SubtitleComponent: xy.d,
        hasSettingsMenu: !0,
      });
      var Py = a(98405);
      const ky = cE({
        useButtonAction: td,
        SubtitleComponent: Py.l,
        hasSettingsMenu: !0,
      });
      var Ny = a(31820);
      const Ly = cE({
        useButtonAction: td,
        SubtitleComponent: Ny.O,
        hasSettingsMenu: !0,
      });
      var jy = a(48874),
        My = a(10911);
      const Ay = cE({
        useButtonAction: My.s,
        SubtitleComponent: jy.I,
        hasSettingsMenu: !0,
      });
      var Ty = a(89701),
        _y = a(29878);
      const Dy = (e) =>
          (0, Xu.b)(Qu.M.Ubisoft, null == e ? void 0 : e.customAttributes),
        Ry = cE({
          useButtonAction: ({ namespace: e, catalogItemId: t, appName: a }) => {
            const r = (0, qe.useDispatch)(),
              { uplayCodes: l } = (0, em.Rb)(),
              o = (0, Vu.c)(e, t, a, {
                includeMainGameItem: !0,
                includeHiddenAddons: !0,
              }),
              i = (0, n.useMemo)(() => {
                const e = o.map((e) => e.catalogItem);
                return (0, tm.D)(e.map(Dy)).filter(
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
            return (0, n.useCallback)(() => {
              (null == i ? void 0 : i.length) &&
                r((0, _y.E)({ partnerGameIds: i }));
            }, [i, r]);
          },
          SubtitleComponent: Ty.o,
          hasSettingsMenu: !1,
        }),
        By = () => {
          const e = (0, qe.useDispatch)();
          return (0, n.useCallback)(() => {
            e(Is.ZP.startUplayLinkProcess());
          }, [e]);
        };
      var Zy = a(24859);
      const Fy = cE({
        useButtonAction: By,
        SubtitleComponent: Zy.H,
        hasSettingsMenu: !1,
      });
      var Uy = a(73389),
        Wy = a(18144),
        Ky = a(91139);
      const zy = (0, Uy.o)({
          icon: n.createElement(Ky.Z, null),
          Component: Wy.YU,
        }),
        Vy = cE({
          useButtonAction: td,
          SubtitleComponent: zy,
          hasSettingsMenu: !0,
        }),
        Hy = {
          [hm.W.Banned]: sE,
          [hm.W.CanInstall]: RE,
          [hm.W.CanLaunch]: FE,
          [hm.W.CanLaunchMultiple]: UE,
          [hm.W.CanLaunchRestricted]: WE,
          [hm.W.CanPreInstall]: BE,
          [hm.W.CloudSyncing]: zE,
          [hm.W.Corrupted]: $E,
          [hm.W.ForceGet]: qE,
          [hm.W.ForceUninstall]: QE,
          [hm.W.GotoHub]: ty,
          [hm.W.Installing]: cy,
          [hm.W.InstallingPaused]: sy,
          [hm.W.InstallingPreparing]: iy,
          [hm.W.Loading]: dy,
          [hm.W.Offline]: my,
          [hm.W.PartiallyInstalled]: gy,
          [hm.W.PreInstalled]: Ey,
          [hm.W.PrePurchased]: fy,
          [hm.W.Queued]: Oy,
          [hm.W.QueuedForUpdate]: Oy,
          [hm.W.Running]: Iy,
          [hm.W.SelfUpdate]: dy,
          [hm.W.SignIn]: Sy,
          [hm.W.Unavailable]: ky,
          [hm.W.Unsupported]: Ly,
          [hm.W.Update]: Ay,
          [hm.W.UplaySignIn]: Fy,
          [hm.W.UplayRedeem]: Ry,
          [hm.W.WaitingInLine]: Vy,
        };
      var $y = a(74737),
        Gy = Object.defineProperty,
        qy = Object.getOwnPropertySymbols,
        Yy = Object.prototype.hasOwnProperty,
        Jy = Object.prototype.propertyIsEnumerable,
        Xy = (e, t, a) =>
          t in e
            ? Gy(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Qy = ({
          layout: e,
          namespace: t,
          catalogItemId: a,
          appName: r,
        }) => {
          const { GridCard: l, ListCard: o } = (({
              namespace: e,
              catalogItemId: t,
              appName: a,
            }) => {
              const n = fm(e, t, a);
              return Hy[n];
            })({ namespace: t, catalogItemId: a, appName: r }),
            i = n.useMemo(() => (e === rn.ms.Grid ? l : o), [e, l, o]),
            c = n.useMemo(
              () => ({ namespace: t, catalogItemId: a, appName: r }),
              [t, a, r],
            );
          return n.createElement(
            hd.wi.Provider,
            { value: c },
            n.createElement(i, null),
          );
        },
        ef = (e) => {
          var t = e,
            { index: a = -1, layout: r } = t,
            l = ((e, t) => {
              var a = {};
              for (var n in e)
                Yy.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && qy)
                for (var n of qy(e))
                  t.indexOf(n) < 0 && Jy.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["index", "layout"]);
          const [o, i] = n.useState(a >= 0 && a < 24),
            c = (0, n.useCallback)(
              ({ isIntersecting: e }) => {
                i(e);
              },
              [i],
            ),
            s = n.useMemo(() => (r === rn.ms.Grid ? hs : Os), [r]);
          return n.createElement(
            $y.ZP,
            { disabled: o, rootMargin: "50%", onChange: c },
            n.createElement(
              "div",
              null,
              o
                ? n.createElement(
                    Ye.n4,
                    { fallback: n.createElement(s, { animation: Ee.ru.None }) },
                    n.createElement(
                      Qy,
                      ((e, t) => {
                        for (var a in t || (t = {}))
                          Yy.call(t, a) && Xy(e, a, t[a]);
                        if (qy)
                          for (var a of qy(t)) Jy.call(t, a) && Xy(e, a, t[a]);
                        return e;
                      })({ layout: r }, l),
                    ),
                  )
                : n.createElement(s, { animation: Ee.ru.None }),
            ),
          );
        };
      var tf = a(50694);
      const af = (0, m.i)(() => ({
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
        nf = () => {
          const e = af(),
            { resetFilters: t } = hn(),
            { selectedCollectionId: a } = kn(),
            r = n.useMemo(
              () =>
                a === Et.U.ALL
                  ? "egstore.library.empty_filter_results.title.all"
                  : "egstore.library.empty_filter_results.title.collection",
              [a],
            ),
            l = n.useMemo(
              () =>
                a === Et.U.ALL
                  ? "egstore.library.empty_filter_results.button.all"
                  : "egstore.library.empty_filter_results.button.collection",
              [a],
            );
          return n.createElement(
            "div",
            {
              className: e.wrapper,
              "data-testid": "empty-filter-result-alert",
            },
            n.createElement(
              "div",
              { "aria-live": "polite", role: "alert", className: e.title },
              n.createElement(
                tf.Z.Heading,
                { headingLevel: 1 },
                n.createElement(te.Z, { code: r }),
              ),
            ),
            n.createElement(
              al.f5,
              { onClick: () => t() },
              n.createElement(te.Z, { code: l }),
            ),
          );
        },
        rf = ({ pageSize: e, options: t, onChange: a, layout: n }) =>
          r().createElement(Zc.Z, {
            id: "page-size-dropdown",
            label: r().createElement(te.Z, {
              code: `egstore.library.page_size.title.${n.toLowerCase()}`,
            }),
            options: t,
            selectedValue: e,
            onChange: a,
          });
      var lf = ((e) => (
        (e.Page = "page"),
        (e.Previous = "previous"),
        (e.StartEllipsis = "start-ellipsis"),
        (e.Next = "next"),
        (e.EndEllipsis = "end-ellipsis"),
        e
      ))(lf || {});
      const of = (e, t) => {
        const a = t - e + 1;
        return Array.from({ length: a }, (t, a) => e + a);
      };
      var cf = a(19451),
        sf = a(79494),
        df = Object.defineProperty,
        uf = Object.getOwnPropertySymbols,
        mf = Object.prototype.hasOwnProperty,
        pf = Object.prototype.propertyIsEnumerable,
        bf = (e, t, a) =>
          t in e
            ? df(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        gf = (e, t) => {
          for (var a in t || (t = {})) mf.call(t, a) && bf(e, a, t[a]);
          if (uf) for (var a of uf(t)) pf.call(t, a) && bf(e, a, t[a]);
          return e;
        };
      const vf = (0, m.i)((e) => ({
          delimiter: (0, b.iv)({ color: e.textSecondary }),
          number: (0, b.iv)({
            'button:hover:not([disabled]) &, button[aria-current="true"] &': {
              color: e.textPrimary,
              fontWeight: fe.Ue.bold,
            },
            "button:disabled &": { display: "none" },
          }),
          icon: (0, b.iv)((0, re.N2)("rtl")),
        })),
        Ef = (e) => {
          var t = e,
            {
              page: a,
              selected: r = !1,
              disabled: l = !1,
              type: o = lf.Page,
              onClick: i,
            } = t,
            c = ((e, t) => {
              var a = {};
              for (var n in e)
                mf.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
              if (null != e && uf)
                for (var n of uf(e))
                  t.indexOf(n) < 0 && pf.call(e, n) && (a[n] = e[n]);
              return a;
            })(t, ["page", "selected", "disabled", "type", "onClick"]);
          const s = vf(),
            d = ((e, t, a) => {
              const r = (0, oe.useLocalization)();
              return n.useMemo(
                () =>
                  e === lf.Page
                    ? r(
                        a
                          ? "epic.store.pagination.page"
                          : "epic.store.pagination.go_to_page",
                        [t],
                      )
                    : r("epic.store.pagination.go_to_page", [t]),
                [e, a, t],
              );
            })(o, a, r);
          return o === lf.StartEllipsis || o === lf.EndEllipsis
            ? n.createElement("div", { className: s.delimiter }, "…")
            : o === lf.Previous
              ? n.createElement(
                  "div",
                  { className: s.icon, "data-testid": "previous" },
                  n.createElement(
                    tt.h,
                    gf(
                      { disabled: l, onClick: () => i(a - 1), "aria-label": d },
                      c,
                    ),
                    n.createElement(cf.v, null),
                  ),
                )
              : o === lf.Next
                ? n.createElement(
                    "div",
                    { className: s.icon, "data-testid": "next" },
                    n.createElement(
                      tt.h,
                      gf(
                        {
                          disabled: l,
                          onClick: () => i(a + 1),
                          "aria-label": d,
                        },
                        c,
                      ),
                      n.createElement(sf.E, null),
                    ),
                  )
                : n.createElement(
                    nl.F6,
                    gf(
                      gf(
                        {
                          buttonWidth: R.WL.AUTO,
                          disabled: l,
                          onClick: () => i(a),
                          "aria-label": d,
                        },
                        c,
                      ),
                      r ? { "aria-current": !0 } : {},
                    ),
                    n.createElement(
                      B.Z,
                      { textLevel: F.N.SECONDARY },
                      n.createElement("span", { className: s.number }, a),
                    ),
                  );
        };
      var yf = a(6232),
        ff = Object.defineProperty,
        hf = Object.defineProperties,
        Of = Object.getOwnPropertyDescriptors,
        Cf = Object.getOwnPropertySymbols,
        If = Object.prototype.hasOwnProperty,
        wf = Object.prototype.propertyIsEnumerable,
        xf = (e, t, a) =>
          t in e
            ? ff(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Sf = {
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
            "&:first-of-type": (0, re.wz)(8),
          }),
        },
        Pf = ({ page: e, totalPages: t, onClick: a }) => {
          const r = n.useRef(null),
            l = (0, oe.useLocalization)(),
            { items: o } = (({ totalPages: e, page: t }) => {
              const a = (0, n.useMemo)(() => of(1, Math.min(1, e)), [e]),
                r = (0, n.useMemo)(() => of(Math.max(e - 1 + 1, 2), e), [e]),
                l = Math.max(Math.min(t - 1, e - 1 - 2 - 1), 3),
                o = Math.min(
                  Math.max(t + 1, 5),
                  r.length > 0 ? r[0] - 2 : e - 1,
                );
              return {
                items: (0, n.useMemo)(
                  () => [
                    "previous",
                    ...a,
                    ...(l > 3 ? ["start-ellipsis"] : 2 < e - 1 ? [2] : []),
                    ...of(l, o),
                    ...(o < e - 1 - 1
                      ? ["end-ellipsis"]
                      : e - 1 > 1
                        ? [e - 1]
                        : []),
                    ...r,
                    "next",
                  ],
                  [a, l, o, r, e],
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
          return n.createElement(
            "nav",
            {
              ref: r,
              "data-testid": "library-pagination",
              role: "navigation",
              "aria-label": l("epic.store.pagination.pagination_navigation"),
            },
            n.createElement(
              yf.a,
              { data: o, className: Sf.list, itemClassName: Sf.listItem },
              (e, t) => {
                return n.createElement(
                  Ef,
                  ((r = ((e, t) => {
                    for (var a in t || (t = {}))
                      If.call(t, a) && xf(e, a, t[a]);
                    if (Cf)
                      for (var a of Cf(t)) wf.call(t, a) && xf(e, a, t[a]);
                    return e;
                  })({}, e)),
                  (l = { onClick: a, key: `${e.page}-${t}` }),
                  hf(r, Of(l))),
                );
                var r, l;
              },
            ),
          );
        };
      var kf = Object.defineProperty,
        Nf = Object.getOwnPropertySymbols,
        Lf = Object.prototype.hasOwnProperty,
        jf = Object.prototype.propertyIsEnumerable,
        Mf = (e, t, a) =>
          t in e
            ? kf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Af = (e, t) => {
          for (var a in t || (t = {})) Lf.call(t, a) && Mf(e, a, t[a]);
          if (Nf) for (var a of Nf(t)) jf.call(t, a) && Mf(e, a, t[a]);
          return e;
        };
      const Tf = {
          footer: (0, b.iv)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }),
          pagination: (0, b.iv)({
            [fe.Uc.lg]: Af({}, (0, re.wz)(31)),
            [fe.Uc.xl]: Af({}, (0, re.wz)(42)),
            [fe.Uc.maxWidth]: Af({}, (0, re.wz)(57)),
          }),
        },
        _f = ({
          totalItems: e,
          totalPages: t,
          page: a,
          setPage: n,
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
            g = Hr(c),
            v = r().useMemo(
              () =>
                u === e
                  ? r().createElement(
                      "div",
                      { "data-testid": "shortened-text" },
                      r().createElement(te.Z, {
                        code: "egstore.library.hub.product.plugins.showing_last",
                        args: [u, e],
                      }),
                    )
                  : r().createElement(
                      "div",
                      { "data-testid": "full-text" },
                      r().createElement(te.Z, {
                        code: "egstore.library.hub.product.plugins.showing",
                        args: [u, p, e],
                      }),
                    ),
              [u, p, e],
            );
          r().useEffect(
            () => (l >= e || c !== g ? n(1) : a >= t ? n(t) : void 0),
            [l, e, c],
          );
          const E = r().useCallback(
            (e) => {
              a !== e && n(e),
                (0, Da.Y)().window.scrollTo({ top: 0, behavior: "smooth" });
            },
            [a, l, e],
          );
          return r().createElement(
            "div",
            { className: Tf.footer },
            r().createElement(ae.ZP, { textLevel: F.N.SECONDARY }, v),
            b &&
              r().createElement(
                "div",
                { className: Tf.pagination },
                r().createElement(Pf, { page: a, totalPages: t, onClick: E }),
              ),
            e > i[0].value
              ? r().createElement(rf, {
                  pageSize: l,
                  onChange: o,
                  options: i,
                  layout: s,
                })
              : null,
          );
        };
      var Df = Object.defineProperty,
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
      const Kf = ({ totalItems: e, options: t, key: a }) => {
        const l = (0, qe.useSelector)(on.vR),
          o = t[0].value,
          [i, c] = (0, n.useState)(1),
          s = {
            keyFn: () => `${a}_${l || Oa.v.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          { value: d, setValue: u } = nn(
            ((m = ((e, t) => {
              for (var a in t || (t = {})) Ff.call(t, a) && Wf(e, a, t[a]);
              if (Zf) for (var a of Zf(t)) Uf.call(t, a) && Wf(e, a, t[a]);
              return e;
            })({}, s)),
            Rf(m, Bf({ initialValue: o }))),
          );
        var m;
        const p = (0, n.useMemo)(() => {
            const t = Math.ceil(e / (null != d ? d : o));
            return t > 0 ? t : 1;
          }, [e, d]),
          b = (0, n.useCallback)(
            (e) => {
              c((0, Or.Z)(1, p, e));
            },
            [p, c],
          ),
          g = (0, n.useCallback)(
            (e) => {
              u(e), c(1);
            },
            [u, c],
          ),
          v = r().useCallback(
            (e) =>
              ((e, t, a) => {
                const n = t * a - a;
                return e.slice(n, n + a);
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
      var zf = ((e) => (
        (e.TEN = "TEN"),
        (e.TWELVE = "TWELVE"),
        (e.TWENTY_FOUR = "TWENTY_FOUR"),
        e
      ))(zf || {});
      var Vf = a(8086),
        Hf = a(61621),
        $f = a(21810),
        Gf = a(95337);
      const qf = (0, Wt.Z)(
          (0, Ru.Z)((e) => {
            var t;
            return null != (t = null == e ? void 0 : e.id) ? t : null;
          }),
          (0, ia.Z)(ca.Z),
        ),
        Yf = ({ offerItem: e, catalogItem: t }) => {
          const {
              offer: a,
              offerSubItems: r,
              isBundle: l,
            } = ((e) => {
              const { data: t } = (0, Vf.wH)(
                  {
                    fields: [Vf.Hd.items, Vf.Hd.title, Vf.Hd.categories],
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                ),
                { offerSubItems: a } = (0, Hf.h)(
                  {
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                );
              return {
                offer: t,
                offerSubItems: a,
                isBundle: (0, Bt.Mf)(null == t ? void 0 : t.categories),
              };
            })(e),
            { records: o } = va(),
            { data: i } = (0, Gf.ab)(
              {
                fields: [Gf.eZ.title],
                itemId: null == t ? void 0 : t.catalogItemId,
                sandboxId: null == t ? void 0 : t.sandboxId,
              },
              { enabled: Boolean(t) },
            );
          return (0, n.useMemo)(() => {
            var n;
            const c = o.filter(
              (t) => t.namespace === (null == e ? void 0 : e.sandboxId),
            );
            return {
              catalogItemIds:
                l || Boolean(t)
                  ? ((e, t, a) => {
                      var n;
                      if (e) return [e.catalogItemId];
                      const r = qf(
                          null != (n = null == t ? void 0 : t.items) ? n : [],
                        ),
                        l = qf(null != a ? a : []);
                      return (0, $f.Z)([...r, ...l]);
                    })(t, a, null != r ? r : [])
                  : c.map((e) => e.catalogItemId),
              title: i
                ? i.title
                : null != (n = null == a ? void 0 : a.title)
                  ? n
                  : "",
            };
          }, [e, a, r, t, i, l, o]);
        };
      var Jf = a(75299),
        Xf = Object.defineProperty,
        Qf = Object.defineProperties,
        eh = Object.getOwnPropertyDescriptors,
        th = Object.getOwnPropertySymbols,
        ah = Object.prototype.hasOwnProperty,
        nh = Object.prototype.propertyIsEnumerable,
        rh = (e, t, a) =>
          t in e
            ? Xf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const lh = ({ setSortType: e }) => {
        const {
            sort: t,
            offerItem: a,
            catalogItem: r,
            collectionId: l,
            resetQueryParams: o,
          } = ai(),
          { catalogItemIds: i, title: c } = Yf({
            offerItem: a,
            catalogItem: r,
          }),
          { setSelectedFilters: s } = hn(),
          { setValue: d } = nn({
            keyFn: () => rn.Cd,
            localStorageEnabled: !0,
            initialValue: "",
          });
        (0, n.useEffect)(() => {
          var a, n;
          t === Jf.D.PurchaseDate && i.length && c
            ? (e(rn.ER.Recent_Purchased),
              s(
                ((a = ((e, t) => {
                  for (var a in t || (t = {})) ah.call(t, a) && rh(e, a, t[a]);
                  if (th) for (var a of th(t)) nh.call(t, a) && rh(e, a, t[a]);
                  return e;
                })({}, ya)),
                (n = { [Ea.CATALOG_ITEM_ID]: i }),
                Qf(a, eh(n))),
              ),
              d(c))
            : t === Jf.D.PurchaseDate && l === Et.U.ALL
              ? (s(ya), e(rn.ER.Recent_Purchased), o())
              : t === Jf.D.PurchaseDate && (e(rn.ER.Recent_Purchased), o());
        }, [t, i, c, l]);
      };
      var oh = Object.defineProperty,
        ih = Object.defineProperties,
        ch = Object.getOwnPropertyDescriptors,
        sh = Object.getOwnPropertySymbols,
        dh = Object.prototype.hasOwnProperty,
        uh = Object.prototype.propertyIsEnumerable,
        mh = (e, t, a) =>
          t in e
            ? oh(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ph = ({ layout: e, setLayout: t }) => {
          const { selectedCollectionId: a, setSelectedCollectionId: r } = kn(),
            {
              selectedFilters: l,
              setSelectedFilters: o,
              applySelectedFilters: i,
            } = hn(),
            { records: c, query: s } = va(a),
            d = (0, yt.o)(),
            u = (0, qe.useSelector)(on.vR),
            {
              sortType: m,
              setSortType: p,
              applySortType: b,
            } = ((e) =>
              Bc({
                keyFn: () => `${rn.rv}_${e || Oa.v.ANONYMOUS}`,
                localStorageEnabled: !0,
              }))(u),
            g = (0, ol.dD)(),
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
              return (0, n.useMemo)(() => a[e], [e]);
            })(zf.TWENTY_FOUR),
            E = (0, Xo.useHistory)();
          lh({ setSortType: p });
          const y = n.useMemo(() => (0, Wt.Z)(i, b)(c), [c, b, i]),
            f = y.length,
            {
              page: h,
              setPage: O,
              totalPages: C,
              pageSize: I,
              setPageSize: w,
              applyPagination: x,
            } = Kf({
              totalItems: f,
              options: v,
              key: rn.Bi.EGS_LIBRARY_PAGE_SIZE,
            }),
            S = n.useMemo(() => x(y), [x, y]);
          n.useEffect(() => {
            O(1);
          }, [m, l, a]),
            n.useEffect(() => {
              const e = E.listen((e) => {
                var t, a;
                e.pathname.includes(ti.s.LibraryPath) ||
                  o(
                    ((t = ((e, t) => {
                      for (var a in t || (t = {}))
                        dh.call(t, a) && mh(e, a, t[a]);
                      if (sh)
                        for (var a of sh(t)) uh.call(t, a) && mh(e, a, t[a]);
                      return e;
                    })({}, l)),
                    (a = { [Ea.CATALOG_ITEM_ID]: [] }),
                    ih(t, ch(a))),
                  );
              });
              return () => {
                e();
              };
            }, [l]);
          const P = () => {
              r(Et.U.ALL), p(rn.ER.Recent_Played);
            },
            k = () => {
              r(Et.U.ALL), p(rn.ER.Time_Played);
            },
            N = n.useMemo(() => g || !c.length, [g, c]),
            L = dn(l),
            j = sn(l),
            M = n.useMemo(() => cn(l), [l]),
            A = !L && c.length < 2 && !M && !j,
            T = L && N,
            _ = (j || M) && !y.length && !N,
            D = n.useMemo(
              () =>
                a === d
                  ? n.createElement(Ko, { onActionClick: k })
                  : n.createElement(Uo, { onActionClick: P }),
              [a, d],
            );
          return s.isFetching && !c.length
            ? n.createElement(Qs, { layout: e })
            : n.createElement(Ws, {
                header: n.createElement(Uc, {
                  layoutType: e,
                  onLayoutChange: t,
                  sortType: m,
                  onSortChange: p,
                }),
                footer: S.length
                  ? n.createElement(_f, {
                      totalItems: f,
                      totalPages: C,
                      page: h,
                      setPage: O,
                      pageSize: I,
                      setPageSize: w,
                      options: v,
                      layout: e,
                      keyword: l[Ea.KEYWORD],
                    })
                  : null,
                items: S,
                totalItems: f,
                shouldShowEmptyLibraryCard: A,
                renderFilterSidePanel: N ? null : n.createElement(nc, null),
                renderEmptySearch: _ ? n.createElement(nf, null) : null,
                renderEmptyCollection: T ? D : null,
                layout: e,
                renderItem: (
                  { namespace: t, catalogItemId: a, appName: r },
                  l,
                ) =>
                  n.createElement(ef, {
                    index: l,
                    namespace: t,
                    catalogItemId: a,
                    appName: r,
                    layout: e,
                  }),
              });
        },
        bh = () => {
          const { layoutType: e, setLayoutType: t, isLoaded: a } = qc();
          return n.createElement(
            n.Fragment,
            null,
            a &&
              e &&
              n.createElement(
                Ye.n4,
                { fallback: n.createElement(Qs, { layout: e }) },
                n.createElement(ph, { layout: e, setLayout: t }),
              ),
          );
        },
        gh = ({ animation: e }) => {
          const t = (0, ol.dD)();
          return r().createElement(Ws, {
            header: r().createElement(Cs, { animation: e }),
            footer: r().createElement(Ys, { animation: e }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: t
              ? null
              : r().createElement(Qi, { animation: e }),
          });
        };
      var vh = a(77800),
        Eh = Object.defineProperty,
        yh = Object.defineProperties,
        fh = Object.getOwnPropertyDescriptors,
        hh = Object.getOwnPropertySymbols,
        Oh = Object.prototype.hasOwnProperty,
        Ch = Object.prototype.propertyIsEnumerable,
        Ih = (e, t, a) =>
          t in e
            ? Eh(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        wh = (e, t) => {
          for (var a in t || (t = {})) Oh.call(t, a) && Ih(e, a, t[a]);
          if (hh) for (var a of hh(t)) Ch.call(t, a) && Ih(e, a, t[a]);
          return e;
        };
      const xh = (0, b.F4)({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        }),
        Sh = (0, m.i)((e) => {
          return {
            buttonDiv: (0, b.iv)({
              button:
                ((t = wh({}, (0, rt.ip)("opacity"))),
                (a = {
                  color: e.textPrimary,
                  opacity: 0.4,
                  "&:hover, &:active, &:focus": { opacity: 1 },
                }),
                yh(t, fh(a))),
            }),
            icon: (0, b.iv)({ fontSize: 17 }),
            spin: (0, b.iv)({ svg: { animation: `${xh} 2s linear infinite` } }),
          };
          var t, a;
        }),
        Ph = ({ onClick: e, disabled: t, animateIcon: a }) => {
          const r = (0, oe.useLocalization)(),
            l = n.useRef(null),
            o = r("egstore.library.reload.a11y.reload_library"),
            i = Sh();
          return n.createElement(
            "div",
            { className: i.buttonDiv },
            n.createElement(
              vh.Z,
              {
                "aria-label": o,
                onClick: e,
                disabled: t,
                "data-testid": "reload-button",
                buttonWidth: R.WL.AUTO,
                forwardRef: l,
              },
              n.createElement(
                "span",
                { className: (0, b.cx)({ [i.icon]: !0, [i.spin]: a }) },
                n.createElement(fp, null),
              ),
            ),
            n.createElement(
              nt.u,
              { anchorRef: l },
              n.createElement(te.Z, {
                code: "egstore.library.reload.reload_library",
              }),
            ),
          );
        },
        kh = (0, m.i)(() => ({
          root: (0, b.iv)({ marginTop: 10, marginBottom: 34 }),
          title: (0, b.iv)((0, re.wz)(3)),
        })),
        Nh = ({ reloadButton: e }) => {
          const t = kh();
          return n.createElement(
            d.x,
            { alignItems: u.Ks.Center, className: t.root },
            n.createElement(
              "div",
              { className: t.title },
              n.createElement(
                tf.Z.Heading,
                { headingLevel: 1 },
                n.createElement(te.Z, {
                  code: "diesel.common.page.library.title",
                }),
              ),
            ),
            e,
          );
        },
        Lh = (e) => {
          const t = (() => {
              const e = (0, qe.useDispatch)();
              return (0, n.useCallback)(() => {
                e((0, hc.kQ)());
              }, [e]);
            })(),
            [a, r] = (0, n.useState)(e),
            l = (0, n.useCallback)(() => {
              r(!0), t();
            }, [r, t]);
          return (
            (0, n.useEffect)(() => {
              r(e);
            }, [e]),
            { isReloading: a, reloadLibrary: l }
          );
        },
        jh = () => {
          const { query: e } = va(),
            { isReloading: t, reloadLibrary: a } = Lh(e.isFetching),
            r = (0, i.c)();
          return n.createElement(Nh, {
            reloadButton: r
              ? n.createElement(Ph, { onClick: a, disabled: t, animateIcon: t })
              : void 0,
          });
        },
        Mh = ({ animation: e }) =>
          n.createElement(Nh, {
            reloadButton: n.createElement(Ee.Od, {
              width: 57,
              height: 40,
              animation: e,
              style: { marginLeft: 10 },
            }),
          }),
        Ah = () =>
          r().createElement(
            r().Fragment,
            null,
            r().createElement(et, null),
            r().createElement(mr, null),
          ),
        Th = ({ title: e, onRetryClick: t, onCancelClick: a }) =>
          r().createElement(Xn, {
            modalTitle: r().createElement(te.Z, {
              code: "diesel.common.smart_button.uninstall",
            }),
            title: r().createElement(te.Z, {
              code: "egstore.library.uninstall_close_instances.text_question",
              args: [e],
            }),
            secondaryButton: r().createElement(
              M.d,
              { onClick: a },
              r().createElement(te.Z, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: r().createElement(
              j.N,
              { onClick: t },
              r().createElement(te.Z, {
                code: "diesel.common.smart_button.retry",
              }),
            ),
            onCloseClick: a,
          });
      var _h = Object.defineProperty,
        Dh = Object.defineProperties,
        Rh = Object.getOwnPropertyDescriptors,
        Bh = Object.getOwnPropertySymbols,
        Zh = Object.prototype.hasOwnProperty,
        Fh = Object.prototype.propertyIsEnumerable,
        Uh = (e, t, a) =>
          t in e
            ? _h(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Wh = (e, t) => {
          for (var a in t || (t = {})) Zh.call(t, a) && Uh(e, a, t[a]);
          if (Bh) for (var a of Bh(t)) Fh.call(t, a) && Uh(e, a, t[a]);
          return e;
        },
        Kh = (e, t) => Dh(e, Rh(t));
      const zh = (e) =>
          n.createElement(
            ye,
            Kh(Wh({}, e), {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: n.createElement(
                d.x,
                {
                  alignItems: u.Ks.Center,
                  justify: u.jf.Center,
                  fillParent: !0,
                },
                n.createElement(
                  d.x,
                  { direction: u.jO.Column, alignItems: u.Ks.Center },
                  n.createElement(
                    Ee.Od,
                    Wh({ variant: Ee.Jy.Text, width: 500, height: 50 }, e),
                  ),
                  n.createElement(
                    Ee.Od,
                    Kh(Wh({ variant: Ee.Jy.Text, width: 300, height: 50 }, e), {
                      style: { margin: "-10px 0 0" },
                    }),
                  ),
                ),
              ),
            }),
          ),
        Vh = Am("uninstall-close-instances-modal"),
        Hh = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, hd.wK)(),
            n = (0, vb.V)(e, t, a),
            { closeModal: l, cancelModal: o } = Vh(),
            i = Jp(),
            c = r().useCallback(() => {
              l(),
                i({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: oc.Nd.MANAGE_PRODUCT_MODAL,
                  options: { disableConfirmation: !0 },
                });
            }, [l, i, e, t, a]);
          return r().createElement(Th, {
            title: n,
            onRetryClick: c,
            onCancelClick: o,
          });
        },
        $h = () => {
          const { isOpen: e, cancelModal: t, getData: a } = Vh(),
            n = a();
          return n
            ? r().createElement(
                Le.u,
                { isOpen: e, onClose: t },
                r().createElement(
                  Ye.n4,
                  { fallback: r().createElement(zh, null) },
                  r().createElement(
                    hd.wi.Provider,
                    { value: n },
                    r().createElement(Hh, null),
                  ),
                ),
              )
            : null;
        },
        Gh = () => {
          const { action: e, item: t } = ai(),
            { openModal: a } = ME();
          r().useEffect(() => {
            e === Jf.M.Install && t && a(t);
          }, [e, t]);
          const { isOpen: n, openModal: l } = Vh();
          return (
            r().useEffect(
              () =>
                (0, Dt.ZP)()
                  .getEmitter()
                  .subscribe(
                    () => "LibraryItemModalsSection",
                    Dt.Rl.UninstallRetry,
                    (e) => {
                      e &&
                        !n &&
                        l({
                          namespace: e.namespace,
                          catalogItemId: e.catalogid,
                          appName: e.appname,
                        });
                    },
                  ),
              [],
            ),
            r().createElement(
              r().Fragment,
              null,
              r().createElement(_E, null),
              r().createElement(eg, null),
              r().createElement(fb, null),
              r().createElement($h, null),
            )
          );
        },
        qh = () =>
          r().createElement(
            r().Fragment,
            null,
            r().createElement(
              Ye.n4,
              { fallback: r().createElement(Mh, null) },
              r().createElement(jh, null),
            ),
            r().createElement(
              Ye.n4,
              { fallback: null },
              r().createElement(ll, null),
            ),
            r().createElement(
              Ye.n4,
              { fallback: r().createElement(Jr, null) },
              r().createElement(Yr, null),
            ),
            r().createElement(
              Ye.n4,
              { fallback: r().createElement(gh, null) },
              r().createElement(bh, null),
            ),
            r().createElement(Gh, null),
            r().createElement(Ah, null),
          );
      var Yh = a(15141),
        Jh = a(17653);
      const Xh = (0, Yh.xo)("hook-mounted");
      let Qh = !1;
      const eO = (0, Ta.uB)("useMeasureLibraryRenderTime"),
        tO = (0, Yh.xo)("render-sync"),
        [aO, nO] = (0, Yh.sM)("render-duration-sync"),
        rO = (0, Yh.xo)("render-async"),
        [lO, oO] = (0, Yh.sM)("render-duration-async");
      function iO({
        dom: e,
        componentName: t,
        labels: a,
        stateChangeCallback: n,
        predicate: r,
      }) {
        return new Promise((l) => {
          if (e.current) {
            const o = performance.now(),
              i = r(e.current);
            eO.log("querying for predicate time: " + (performance.now() - o)),
              i &&
                (eO.log("non observer paint start"),
                performance.mark(a.start, { detail: { componentName: t } }),
                n("measuring"),
                setTimeout(() => {
                  eO.log("non observer paint end"),
                    n("complete"),
                    performance.mark(a.timeFromPageLoad, {
                      detail: { componentName: t },
                    }),
                    performance.mark(a.end, { detail: { componentName: t } }),
                    l();
                }));
          } else l();
        });
      }
      var cO = a(14951);
      const sO = () => {
        const e = r().useRef(null),
          t = (0, Zo.ql)();
        return (
          (function () {
            const e = (0, qe.useSelector)(Jh.S);
            r().useEffect(() => {
              if (!e) return;
              if (Aa.r2.isSsr()) return;
              if (Qh)
                return void console.warn(
                  "useLibraryPerformance is already mounted. Please ensure only one instance of this hook exists at any point",
                );
              const t = new Yh.SH();
              return (
                t.connect(),
                (Qh = !0),
                performance.mark(Xh),
                () => {
                  t.disconnect(), (Qh = !1);
                }
              );
            }, []);
          })(),
          (function (e, t, a) {
            const n = (0, qe.useSelector)(Jh.S),
              l = r().useRef("idle");
            r().useEffect(() => {
              if (!n) return;
              if (Aa.r2.isSsr())
                return void eO.log("skipping measuring of render time on SSR.");
              function r(e) {
                l.current = e;
              }
              eO.log("starting useMeasureLibraryRenderTime"),
                iO({
                  dom: e,
                  componentName: t,
                  labels: { start: aO, end: nO, timeFromPageLoad: tO },
                  stateChangeCallback: r,
                  predicate: a,
                });
              const o = performance,
                i = new MutationObserver((n, i) => {
                  (performance = o),
                    "complete" !== l.current
                      ? "measuring" !== l.current &&
                        iO({
                          dom: e,
                          componentName: t,
                          labels: { start: lO, end: oO, timeFromPageLoad: rO },
                          stateChangeCallback: r,
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
                n = new RegExp(`\\b${a}\\b`, "i"),
                r = t.querySelector(`[data-component=${l.c}]`),
                i = null == r ? void 0 : r.textContent;
              return !!i && null === i.match(n);
            })(t),
          ),
          r().createElement(
            cO.z,
            null,
            r().createElement("div", { ref: e }, r().createElement(qh, null)),
          )
        );
      };
    },
    30052: (e, t, a) => {
      e.exports = a.p + "d71da1c195d3183df5799e7892e9b1a1.png";
    },
  },
]);
//# sourceMappingURL=ManageProductsPage.egstore-site.61c4f5b901b9147d693b.js.map
