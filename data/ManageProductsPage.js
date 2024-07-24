(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [611],
  {
    2424: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => cO });
      var r = a(8788),
        n = a.n(r),
        l = a(30469),
        o = a(50443),
        i = a(61801),
        c = a(22972),
        s = a(3493),
        d = a(96157),
        m = a(5180);
      const u = (e) => () => {
        const {
          isOpenById: t,
          openModalById: a,
          closeModalById: n,
          getData: l,
        } = (0, m.k3)();
        return (0, r.useMemo)(
          () => ({
            isOpen: t(e),
            openModal: (t) => a(e, t),
            closeModal: () => n(e),
            cancelModal: () => n(e, m.XY.Cancel),
            getData: () => l(e),
          }),
          [t, a, n, l],
        );
      };
      var p = a(57805),
        g = a(11923),
        b = a(30530),
        E = a(57506),
        v = a(17673),
        f = a(45580),
        y = a(35859),
        h = a(74122),
        C = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        S = (e, t, a) =>
          t in e
            ? C(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        w = (e, t) => {
          for (var a in t || (t = {})) O.call(t, a) && S(e, a, t[a]);
          if (A) for (var a of A(t)) I.call(t, a) && S(e, a, t[a]);
          return e;
        },
        x = (e, t) => {
          var a = {};
          for (var r in e) O.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && A)
            for (var r of A(e))
              t.indexOf(r) < 0 && I.call(e, r) && (a[r] = e[r]);
          return a;
        };
      const k = [f.EA.xs, f.EA.sm, f.EA.md, f.EA.lg, f.EA.xl, f.EA.xxl],
        P = (e) =>
          k.reduce(
            (t, a) => (
              (0, y.A)(1, e + 1).forEach((r) => {
                t[`&.egs-span-${a}-${r}`] =
                  "xs" === a
                    ? { width: (r / e) * 100 + "%" }
                    : { [f.aq[a]]: { width: (r / e) * 100 + "%" } };
              }, {}),
              t
            ),
            {},
          ),
        N = { 12: P(12), 16: P(16) },
        M = (0, v.W)((e, { columns: t, spacing: a }) => ({
          root: (0, g.AH)({
            display: "flex",
            flexWrap: "wrap",
            flexBasis: 0,
            flexGrow: 1,
            marginTop: -1 * a,
            marginRight: a / -2,
            marginLeft: a / -2,
            "> .egs-grid-item": w(
              { paddingRight: a / 2, paddingLeft: a / 2, marginTop: a },
              N[t],
            ),
          }),
          fillParent: (0, g.AH)({ width: "100%", height: "100%" }),
        })),
        L = (0, v.W)(() => ({
          root: (0, g.AH)({
            boxSizing: "border-box",
            flex: "0 0 auto",
            maxWidth: "100%",
          }),
          autoLayout: (0, g.AH)({
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: "100%",
          }),
        })),
        j = (e) => {
          var t = e,
            { children: a, spacing: n = 0, columns: l = 12 } = t,
            o = x(t, ["children", "spacing", "columns"]);
          const i = M({ columns: l, spacing: n }),
            c = (0, h.A)(["className"], o);
          return r.createElement(b.a, w({ className: i.root }, c), a);
        },
        _ = (e) => {
          var t = e,
            { children: a, xs: n, sm: l, md: o, lg: i, xl: c, xxl: s } = t,
            d = x(t, ["children", "xs", "sm", "md", "lg", "xl", "xxl"]);
          const m = L(),
            u = (0, g.cx)(m.root, "egs-grid-item", {
              [m.autoLayout]: !0 === n,
              [`egs-span-xs-${n}`]: !!n,
              [`egs-span-sm-${l}`]: !!l,
              [`egs-span-md-${o}`]: !!o,
              [`egs-span-lg-${i}`]: !!i,
              [`egs-span-xl-${c}`]: !!c,
              [`egs-span-xxl-${s}`]: !!s,
            }),
            p = (0, h.A)(["className"], d);
          return r.createElement(b.t, w({ className: u }, p), a);
        };
      var T = a(12342),
        R = a(14954),
        D = a(57340),
        B = a(59799),
        H = a(66395),
        F = a(9697),
        z = a(64366),
        U = a(76957),
        V = a(67671),
        W = a(84904),
        q = a(62195),
        G = a(83700),
        $ = a(79575),
        Y = a(49498),
        J = a(40176),
        K = a(10288),
        Z = Object.defineProperty,
        Q = Object.defineProperties,
        X = Object.getOwnPropertyDescriptors,
        ee = Object.getOwnPropertySymbols,
        te = Object.prototype.hasOwnProperty,
        ae = Object.prototype.propertyIsEnumerable,
        re = (e, t, a) =>
          t in e
            ? Z(e, t, {
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
        };
      const le = ne({}, z.eL),
        oe = (0, v.W)(
          (e, { background: t, noBackground: a, noBorder: r, error: n }) => ({
            root: (0, g.AH)({
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
            input: (0, g.AH)(
              (0, G.HE)(e),
              ne(
                {
                  color: e.textPrimary,
                  backgroundColor: a ? "transparent" : e[t],
                  width: "100%",
                  padding: "0 20px",
                  borderRadius: q.Vq,
                  boxSizing: "border-box !important",
                  "&::placeholder": { color: `${e.textSecondary} !important` },
                },
                r
                  ? {}
                  : {
                      border: `1px solid ${n ? $.X[e.mode].error : e.textSecondary}`,
                      "&:not(:focus)": {
                        borderColor: n ? $.X[e.mode].error : e.textSecondary,
                      },
                    },
              ),
            ),
            helperText: (0, g.AH)({
              position: "absolute",
              bottom: -20,
              left: 0,
            }),
            helperColor: (0, g.AH)({ color: e.textSecondary }),
            errorColor: (0, g.AH)({ color: $.X[e.mode].error }),
            label: (0, g.AH)({ marginBottom: 5 }),
            edsInput: (0, g.AH)(
              ne(
                {
                  color: e.textPrimary,
                  backgroundColor: a ? "transparent" : e[t],
                  width: "100%",
                  padding: "0 20px",
                  borderRadius: J.pu.eight,
                  boxSizing: "border-box !important",
                  "&::placeholder": { color: `${e.textSecondary} !important` },
                },
                r
                  ? {}
                  : {
                      border: `2px solid ${n ? J.UM.critical : J.ld.default}`,
                      "&:not(:focus)": {
                        borderColor: n ? J.UM.critical : J.ld.default,
                      },
                    },
              ),
            ),
          }),
        ),
        ie = (e) => {
          var t = e,
            {
              background: a = "level1",
              error: n = !1,
              helperText: l = "",
              id: o,
              inputHeight: i = le.STANDARD,
              label: c,
              noBackground: d = !1,
              noBorder: m = !1,
              shouldAutoFocus: u,
            } = t,
            b = ((e, t) => {
              var a = {};
              for (var r in e)
                te.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && ee)
                for (var r of ee(e))
                  t.indexOf(r) < 0 && ae.call(e, r) && (a[r] = e[r]);
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
          const E = (0, s.useSelector)(K.k),
            v = oe({ background: a, noBackground: d, noBorder: m, error: n }),
            f = (0, g.cx)(E ? v.edsInput : v.input, F.A.buttonHeights[i]),
            y = r.useRef(null);
          r.useEffect(() => {
            u && y.current && y.current.focus();
          }, []);
          const h = () =>
              E
                ? r.createElement(
                    p.E,
                    { variant: Y.ZJ.UIMD, color: Y.Uf.SECONDARY },
                    c,
                  )
                : r.createElement(V.A, null, c),
            C = () =>
              E
                ? r.createElement(
                    p.E,
                    {
                      variant: Y.ZJ.UISM,
                      color: n ? Y.Uf.CRITICAL : Y.Uf.SECONDARY,
                    },
                    l,
                  )
                : r.createElement(
                    "div",
                    {
                      className: (0, g.cx)(
                        v.helperText,
                        n ? v.errorColor : v.helperColor,
                      ),
                    },
                    r.createElement(
                      U.A,
                      { textLevel: W.qo.INHERIT },
                      null != l ? l : "",
                    ),
                  );
          return r.createElement(
            "div",
            ne(
              { className: v.root, "data-testid": "TextInput" },
              n ? { "data-haserror": !0 } : {},
            ),
            c &&
              r.createElement(
                "label",
                { htmlFor: o },
                r.createElement(
                  "div",
                  { className: v.label },
                  r.createElement(h, null),
                ),
              ),
            r.createElement(
              "input",
              ne(
                ((A = ne({}, b)),
                Q(A, X({ ref: y, className: f, type: "text" }))),
                n && l ? { "aria-errormessage": l } : {},
              ),
            ),
            r.createElement(C, null),
          );
          var A;
        },
        ce = 25;
      var se = a(25355),
        de = a(68813),
        me = a(14160),
        ue = a(22357),
        pe = a(85392),
        ge = Object.defineProperty,
        be = Object.defineProperties,
        Ee = Object.getOwnPropertyDescriptors,
        ve = Object.getOwnPropertySymbols,
        fe = Object.prototype.hasOwnProperty,
        ye = Object.prototype.propertyIsEnumerable,
        he = (e, t, a) =>
          t in e
            ? ge(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ce = (e, t) => {
          for (var a in t || (t = {})) fe.call(t, a) && he(e, a, t[a]);
          if (ve) for (var a of ve(t)) ye.call(t, a) && he(e, a, t[a]);
          return e;
        },
        Ae = (e, t) => be(e, Ee(t));
      const Oe = (0, v.W)((e, t) => ({
          heading: (0, g.AH)({ marginBottom: t ? 0 : 17, marginTop: 17 }),
          inputDiv: (0, g.AH)({
            position: "relative",
            marginTop: 30,
            marginBottom: 67,
          }),
          count: (0, g.AH)(
            Ae(Ce({ position: "absolute" }, (0, ue.pG)(20)), {
              top: 30,
              zIndex: pe.f.overlay,
              [f.aq.lg]: { top: 35 },
            }),
          ),
          edsCount: (0, g.AH)(
            Ae(Ce({ position: "absolute" }, (0, ue.pG)(20)), {
              top: 32,
              zIndex: pe.f.overlay,
              [f.aq.lg]: { top: 37 },
            }),
          ),
          edsHeading: (0, g.AH)({ marginBottom: t ? 0 : 12, marginTop: 12 }),
          edsInputDiv: (0, g.AH)({
            position: "relative",
            margin: "24px 0px",
            width: "100%",
          }),
        })),
        Ie = ({
          isEditing: e,
          hasError: t,
          onCancelClick: a,
          onCreateClick: r,
          onValueChange: l,
          setHasError: o,
          value: i,
        }) => {
          const c = (0, d.useLocalization)(),
            [s, m] = n().useState(ce),
            u = Oe(e);
          return (
            n().useEffect(() => {
              i.length && m(ce - i.length);
            }, [i]),
            n().createElement(D.k, {
              header: n().createElement(
                H.r,
                { onCloseClick: a },
                n().createElement(
                  de.Ay,
                  { weight: de.EU.BOLD },
                  n().createElement(se.A, {
                    code: e
                      ? "egstore.library.collections_modal.create_edit.edit_collection"
                      : "egstore.library.collections_modal.create_edit.new_collection",
                  }),
                ),
              ),
              content: n().createElement(
                j,
                {
                  role: "form",
                  "aria-label": "Create Edit Collection",
                  justify: E.cn.Center,
                  alignItems: E.ep.Center,
                  direction: E.NX.Column,
                  fillParent: !0,
                },
                n().createElement(
                  _,
                  null,
                  n().createElement(
                    me.A.Heading,
                    { headingLevel: 1 },
                    n().createElement(
                      "div",
                      { className: u.heading },
                      n().createElement(se.A, {
                        code: e
                          ? "egstore.library.collections_modal.create_edit.edit_title"
                          : "egstore.library.collections_modal.create_edit.title",
                      }),
                    ),
                  ),
                ),
                !e &&
                  n().createElement(
                    _,
                    null,
                    n().createElement(
                      de.Ay,
                      null,
                      n().createElement(se.A, {
                        code: "egstore.library.collections_modal.create_edit.text",
                      }),
                    ),
                  ),
                n().createElement(
                  _,
                  { xs: 8 },
                  n().createElement(
                    "div",
                    { className: u.inputDiv },
                    n().createElement(ie, {
                      id: "create-edit-modal",
                      error: t,
                      defaultValue: i,
                      shouldAutoFocus: !0,
                      onChange: (e) => {
                        const t = e.currentTarget.value;
                        m(ce - t.length), l(t), o(t.length > ce);
                      },
                      maxLength: ce,
                      helperText: t
                        ? c(
                            "egstore.library.collections_modal.create_edit.error_text",
                          )
                        : void 0,
                      label: n().createElement(se.A, {
                        code: "egstore.library.collections_modal.create_edit.label",
                      }),
                    }),
                    n().createElement(
                      "div",
                      { className: u.count },
                      n().createElement(
                        U.A,
                        null,
                        n().createElement(se.A, {
                          code: "diesel.common.time.time_left",
                          args: [s],
                        }),
                      ),
                    ),
                  ),
                ),
                n().createElement(
                  _,
                  { xs: 12 },
                  n().createElement(
                    b.a,
                    { justify: E.cn.Center },
                    n().createElement(
                      de.Ay,
                      null,
                      n().createElement(se.A, {
                        code: "egstore.library.collections_modal.create_edit.drag_text",
                      }),
                    ),
                  ),
                ),
              ),
              footer: n().createElement(
                B.j,
                null,
                n().createElement(
                  R.u,
                  { onClick: a },
                  n().createElement(se.A, {
                    code: "diesel.common.smart_button.cancel",
                  }),
                ),
                n().createElement(
                  T.S,
                  {
                    onClick: r,
                    disabled: Boolean(t || !(null == i ? void 0 : i.trim())),
                  },
                  n().createElement(se.A, {
                    code: e
                      ? "egstore.library.collections_modal.edit.button_primary"
                      : "egstore.library.collections_modal.create.button_primary",
                  }),
                ),
              ),
            })
          );
        },
        Se = ({
          isEditing: e,
          hasError: t,
          onCancelClick: a,
          onCreateClick: r,
          onValueChange: l,
          setHasError: o,
          value: i,
        }) => {
          const c = (0, d.useLocalization)(),
            [s, m] = n().useState(ce),
            u = Oe(e);
          return (
            n().useEffect(() => {
              i.length && m(ce - i.length);
            }, [i]),
            n().createElement(D.k, {
              header: n().createElement(H.d, {
                title: n().createElement(se.A, {
                  code: e
                    ? "egstore.library.collections_modal.create_edit.edit_collection"
                    : "egstore.library.collections_modal.create_edit.new_collection",
                }),
                onCloseClick: a,
              }),
              content: n().createElement(
                j,
                {
                  role: "form",
                  "aria-label": "Create Edit Collection",
                  justify: E.cn.Center,
                  alignItems: E.ep.Center,
                  direction: E.NX.Column,
                  fillParent: !0,
                },
                n().createElement(
                  _,
                  null,
                  n().createElement(
                    p.E,
                    { variant: Y.ZJ.HXL, color: Y.Uf.PRIMARY },
                    n().createElement(
                      "div",
                      { className: u.edsHeading },
                      n().createElement(se.A, {
                        code: e
                          ? "egstore.library.collections_modal.create_edit.edit_title"
                          : "egstore.library.collections_modal.create_edit.title",
                      }),
                    ),
                  ),
                ),
                !e &&
                  n().createElement(
                    _,
                    null,
                    n().createElement(
                      p.E,
                      { variant: Y.ZJ.UIMD, color: Y.Uf.SECONDARY },
                      n().createElement(se.A, {
                        code: "egstore.library.collections_modal.create_edit.text",
                      }),
                    ),
                  ),
                n().createElement(
                  _,
                  { xs: 12 },
                  n().createElement(
                    "div",
                    { className: u.edsInputDiv },
                    n().createElement(ie, {
                      id: "create-edit-modal",
                      error: t,
                      defaultValue: i,
                      shouldAutoFocus: !0,
                      onChange: (e) => {
                        const t = e.currentTarget.value;
                        m(ce - t.length), l(t), o(t.length > ce);
                      },
                      maxLength: ce,
                      helperText: t
                        ? c(
                            "egstore.library.collections_modal.create_edit.error_text",
                          )
                        : void 0,
                      label: n().createElement(se.A, {
                        code: "egstore.library.collections_modal.create_edit.label",
                      }),
                    }),
                    n().createElement(
                      "div",
                      { className: u.edsCount },
                      n().createElement(
                        p.E,
                        { variant: Y.ZJ.UISM, color: Y.Uf.SECONDARY },
                        n().createElement(se.A, {
                          code: "diesel.common.time.time_left",
                          args: [s],
                        }),
                      ),
                    ),
                  ),
                ),
                n().createElement(
                  _,
                  { xs: 12 },
                  n().createElement(
                    b.a,
                    { justify: E.cn.Start },
                    n().createElement(
                      p.E,
                      { variant: Y.ZJ.UIMD, color: Y.Uf.SECONDARY },
                      n().createElement(se.A, {
                        code: "egstore.library.collections_modal.create_edit.drag_text",
                      }),
                    ),
                  ),
                ),
              ),
              footer: n().createElement(
                B.j,
                null,
                n().createElement(
                  R.u,
                  { onClick: a },
                  n().createElement(se.A, {
                    code: "diesel.common.smart_button.cancel",
                  }),
                ),
                n().createElement(
                  T.S,
                  {
                    onClick: r,
                    disabled: Boolean(t || !(null == i ? void 0 : i.trim())),
                  },
                  n().createElement(se.A, {
                    code: e
                      ? "egstore.library.collections_modal.edit.button_primary"
                      : "egstore.library.collections_modal.create.button_primary",
                  }),
                ),
              ),
            })
          );
        };
      var we = a(38365);
      const xe = ({
        animation: e,
        content: t,
        hasFooter: a,
        hasHeader: n,
        hasPrimaryButton: l,
        hasSecondaryButton: o,
        titleWidth: i = 80,
      }) =>
        r.createElement(D.k, {
          "data-testid": "ModalSkeleton",
          header: n
            ? r.createElement(
                H.r,
                { onCloseClick: () => {} },
                r.createElement(we.EA, {
                  variant: we.qd.Text,
                  width: i,
                  height: 40,
                  animation: e,
                }),
              )
            : void 0,
          content: t || r.createElement("div", null),
          footer: a
            ? r.createElement(
                B.j,
                null,
                l &&
                  r.createElement(we.EA, {
                    width: 160,
                    height: 40,
                    animation: e,
                  }),
                o &&
                  r.createElement(we.EA, {
                    width: 160,
                    height: 40,
                    animation: e,
                  }),
              )
            : void 0,
        });
      var ke = a(64032),
        Pe = Object.defineProperty,
        Ne = Object.defineProperties,
        Me = Object.getOwnPropertyDescriptors,
        Le = Object.getOwnPropertySymbols,
        je = Object.prototype.hasOwnProperty,
        _e = Object.prototype.propertyIsEnumerable,
        Te = (e, t, a) =>
          t in e
            ? Pe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Re = (e, t) => {
          for (var a in t || (t = {})) je.call(t, a) && Te(e, a, t[a]);
          if (Le) for (var a of Le(t)) _e.call(t, a) && Te(e, a, t[a]);
          return e;
        };
      const De = (0, v.W)((e) => ({
          spacing: (0, g.AH)({ marginBottom: 14 }),
          fakeInput: (0, g.AH)({
            marginTop: 34,
            border: `1px solid ${e.textSecondary}`,
            width: 425,
            height: 50,
            padding: "0 20px",
            borderRadius: ke.Vq,
          }),
          icon: (0, g.AH)((0, ue.hz)(20)),
        })),
        Be = (e) => {
          const t = De();
          return n().createElement(
            xe,
            ((a = Re({}, e)),
            (r = {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: n().createElement(
                b.a,
                { direction: E.NX.Column, centerContent: !0, fillParent: !0 },
                n().createElement(
                  we.EA,
                  Re(
                    {
                      className: t.spacing,
                      variant: we.qd.Text,
                      width: 330,
                      height: 60,
                    },
                    e,
                  ),
                ),
                n().createElement(
                  we.EA,
                  Re({ variant: we.qd.Text, width: 380, height: 30 }, e),
                ),
                n().createElement(
                  b.a,
                  { className: t.fakeInput, alignItems: E.ep.Center },
                  n().createElement(
                    we.EA,
                    Re({ className: t.icon, width: 24, height: 26 }, e),
                  ),
                  n().createElement(
                    we.EA,
                    Re({ variant: we.qd.Text, width: 100, height: 20 }, e),
                  ),
                ),
              ),
            }),
            Ne(a, Me(r))),
          );
          var a, r;
        };
      var He = a(28006),
        Fe = a(66168);
      const ze = (e, t, a) => {
        const n = (0, s.useSelector)(e),
          l = (0, s.useDispatch)(),
          o = !1 !== (null == a ? void 0 : a.enabled),
          i =
            !(null == n ? void 0 : n.state) ||
            (null == n ? void 0 : n.state) === Fe.V.notAsked;
        return (
          (0, r.useEffect)(() => {
            o && i && l(t());
          }, [i, o]),
          (0, r.useMemo)(
            () => ({
              data: null == n ? void 0 : n.latestValue,
              error: null == n ? void 0 : n.latestError,
              isError: (null == n ? void 0 : n.state) === Fe.V.error,
              isFetching: (null == n ? void 0 : n.state) === Fe.V.fetching,
              isIdle:
                !(null == n ? void 0 : n.state) ||
                (null == n ? void 0 : n.state) === Fe.V.notAsked,
              isSuccess: (null == n ? void 0 : n.state) === Fe.V.success,
              status: (null == n ? void 0 : n.state) || Fe.V.notAsked,
            }),
            [n],
          )
        );
      };
      var Ue = a(24750),
        Ve = Object.defineProperty,
        We = Object.defineProperties,
        qe = Object.getOwnPropertyDescriptors,
        Ge = Object.getOwnPropertySymbols,
        $e = Object.prototype.hasOwnProperty,
        Ye = Object.prototype.propertyIsEnumerable,
        Je = (e, t, a) =>
          t in e
            ? Ve(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Ke = (e) => {
        const t = ze(
            Ue.GF,
            Ue.An,
            ((r = ((e, t) => {
              for (var a in t || (t = {})) $e.call(t, a) && Je(e, a, t[a]);
              if (Ge) for (var a of Ge(t)) Ye.call(t, a) && Je(e, a, t[a]);
              return e;
            })({}, e)),
            (n = { enabled: !1 !== (null == e ? void 0 : e.enabled) }),
            We(r, qe(n))),
          ),
          { data: a } = t;
        var r, n;
        return {
          collections: a,
          query: ((e, t) => {
            var a = {};
            for (var r in e) $e.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && Ge)
              for (var r of Ge(e))
                t.indexOf(r) < 0 && Ye.call(e, r) && (a[r] = e[r]);
            return a;
          })(t, ["data"]),
        };
      };
      var Ze = Object.defineProperty,
        Qe = Object.defineProperties,
        Xe = Object.getOwnPropertyDescriptors,
        et = Object.getOwnPropertySymbols,
        tt = Object.prototype.hasOwnProperty,
        at = Object.prototype.propertyIsEnumerable,
        rt = (e, t, a) =>
          t in e
            ? Ze(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const nt = (e, t) => {
          const { collections: a } = Ke(
            ((n = ((e, t) => {
              for (var a in t || (t = {})) tt.call(t, a) && rt(e, a, t[a]);
              if (et) for (var a of et(t)) at.call(t, a) && rt(e, a, t[a]);
              return e;
            })({}, t)),
            (l = {
              enabled: Boolean(e) && !1 !== (null == t ? void 0 : t.enabled),
            }),
            Qe(n, Xe(l))),
          );
          var n, l;
          return (0, r.useMemo)(
            () => (null == a ? void 0 : a.find((t) => t.collectionId === e)),
            [a, e],
          );
        },
        lt = u("create-edit-collection-modal"),
        ot = (e) => {
          var t;
          return null !=
            (t = null == e ? void 0 : e.replace(/ /g, "").toLowerCase().trim())
            ? t
            : "";
        },
        it = () => {
          const e = (0, s.useSelector)(K.k),
            [t, a] = n().useState(""),
            [l, o] = n().useState(!1),
            i = (() => {
              const e = (0, s.useDispatch)();
              return (0, r.useCallback)(
                (t) => {
                  e((0, Ue.No)(t));
                },
                [e],
              );
            })(),
            c = (() => {
              const e = (0, s.useDispatch)();
              return (0, r.useCallback)(
                (t, a) => {
                  e((0, Ue.N3)({ collectionId: t, name: a }));
                },
                [e],
              );
            })(),
            { closeModal: m, cancelModal: u, getData: p } = lt(),
            g = nt(p()),
            b = Boolean(null == g ? void 0 : g.collectionId),
            { collections: E } = Ke(),
            v = (0, d.useLocalization)();
          n().useEffect(() => {
            g && (a(g.name), o(!1));
          }, [g]);
          const f = n().useCallback(() => {
              const e = ot(t);
              if (!e) return !1;
              if (e === ot(v("egstore.library.filter.all"))) return !1;
              if (e === ot(v("egstore.library.collections.tabs.favorites")))
                return !1;
              return !(null == E ? void 0 : E.some((t) => ot(t.name) === e));
            }, [t, E]),
            y = (0, r.useCallback)(() => {
              f()
                ? (b && g ? c(g.collectionId, t.trim()) : i(t.trim()), m())
                : o(!0);
            }, [f, b, g, m]),
            h = e ? Se : Ie;
          return n().createElement(h, {
            onCreateClick: y,
            onCancelClick: u,
            value: t,
            onValueChange: a,
            hasError: l,
            setHasError: o,
            isEditing: b,
          });
        },
        ct = () => {
          const { isOpen: e, cancelModal: t } = lt();
          return n().createElement(
            He.a,
            { isOpen: e, onClose: t },
            n().createElement(
              i.tY,
              { fallback: n().createElement(Be, null) },
              n().createElement(it, null),
            ),
          );
        };
      var st = a(76555),
        dt = a(83502),
        mt = a(4446),
        ut = a(32216),
        pt = a(90413),
        gt = a(748),
        bt = Object.defineProperty,
        Et = Object.defineProperties,
        vt = Object.getOwnPropertyDescriptors,
        ft = Object.getOwnPropertySymbols,
        yt = Object.prototype.hasOwnProperty,
        ht = Object.prototype.propertyIsEnumerable,
        Ct = (e, t, a) =>
          t in e
            ? bt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        At = (e, t) => {
          for (var a in t || (t = {})) yt.call(t, a) && Ct(e, a, t[a]);
          if (ft) for (var a of ft(t)) ht.call(t, a) && Ct(e, a, t[a]);
          return e;
        },
        Ot = (e, t) => Et(e, vt(t));
      const It = (0, v.W)((e, t) => ({
          buttonDiv: (0, g.AH)((0, ue.S$)(10), {
            button: Ot(
              At(
                At({}, (0, gt.Jp)("border-color")),
                (0, gt.Jp)("transform", "350ms"),
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
          edsButton: (0, g.AH)((0, ue.S$)(24), {
            cursor: t ? "not-allowed" : "pointer",
            svg: Ot(At({}, (0, gt.Jp)("transform", "350ms")), {
              transform: t ? void 0 : "rotate(90deg)",
            }),
            "&:hover, &:focus-visible": {
              svg: Ot(At({}, (0, gt.Jp)("transform", "350ms")), {
                transform: t ? void 0 : "rotate(-90deg)",
              }),
            },
          }),
        })),
        St = ({ onClick: e, isOnline: t, canCreateCollection: a }) => {
          const r = (0, s.useSelector)(K.k),
            l = n().useMemo(() => !a || !t, [a, t]),
            o = It(l),
            i = n().useRef(null),
            c = a
              ? "egstore.library.collections.add_collection_tooltip"
              : "egstore.library.collections.add_collection_tooltip_max";
          return r
            ? n().createElement(
                st.m,
                { label: n().createElement(se.A, { code: c }) },
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
                  n().createElement(dt.G, {
                    size: Y.sp.LG,
                    "aria-label": "add collection",
                    color: l ? Y.tV.SECONDARY : Y.tV.PRIMARY,
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
                    mt.K,
                    {
                      onClick: e,
                      buttonHeight: z.eL.DENSED,
                      buttonWidth: z.Rj.BLOCK,
                      disabled: l,
                      pill: !0,
                    },
                    n().createElement(ut.c, null),
                  ),
                ),
                t &&
                  n().createElement(
                    pt.m,
                    { anchorRef: i },
                    n().createElement(se.A, { code: c }),
                  ),
              );
        },
        wt = () => {
          const { collections: e } = Ke();
          return (0, r.useMemo)(
            () => !e || (null == e ? void 0 : e.length) <= 11,
            [e],
          );
        },
        xt = () => {
          const e = (0, c.$)(),
            t = wt(),
            { openModal: a } = lt();
          return n().createElement(St, {
            onClick: () => a(),
            canCreateCollection: t,
            isOnline: e,
          });
        };
      var kt = a(14950),
        Pt = a(77390),
        Nt = a(34999),
        Mt = a(75511),
        Lt = a(76221),
        jt = Object.defineProperty,
        _t = Object.defineProperties,
        Tt = Object.getOwnPropertyDescriptors,
        Rt = Object.getOwnPropertySymbols,
        Dt = Object.prototype.hasOwnProperty,
        Bt = Object.prototype.propertyIsEnumerable,
        Ht = (e, t, a) =>
          t in e
            ? jt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ft = (e, t) => {
          for (var a in t || (t = {})) Dt.call(t, a) && Ht(e, a, t[a]);
          if (Rt) for (var a of Rt(t)) Bt.call(t, a) && Ht(e, a, t[a]);
          return e;
        },
        zt = (e, t) => _t(e, Tt(t));
      const Ut = 15,
        Vt = (e) => `title-${e}`,
        Wt = (e, t) =>
          (0, g.AH)(
            (0, ue.P8)((0, ue.zG)(t === kt.V.ALL ? 0 : Ut), (0, ue.wv)(Ut)),
            zt(Ft({}, (0, gt.Jp)("color")), {
              minWidth: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              "&:hover": { color: e.textPrimary },
            }),
          ),
        qt = (0, v.W)((e, { id: t, isEnabledEDSPhase1: a }) => ({
          tabsButtonRoot: (0, g.AH)({ position: "relative" }),
          active: (0, g.AH)({
            color: e.textPrimary,
            "&::after": Ft(
              {
                opacity: 1,
                backgroundColor: a ? J.OS.primary.hover : e.textPrimary,
              },
              (0, ue.P8)((0, ue.hz)(Ut), (0, ue.S$)(t === kt.V.ALL ? 0 : Ut)),
            ),
          }),
          button: (0, g.AH)(
            zt(Ft({ width: "100%" }, (0, gt.Jp)("color")), {
              position: "relative",
              paddingTop: 5,
              paddingBottom: 5,
              "&::after": zt(Ft({}, Lt.j), {
                position: "absolute",
                height: 2,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
              }),
              "&:focus-visible": zt(Ft({}, (0, G.HE)(e)), {
                [`#${Vt(t)}`]: { color: e.textPrimary },
              }),
            }),
          ),
          title: Wt(e, t),
          nonDraggableTabs: (0, g.AH)({ flex: "0 0 auto" }),
        })),
        Gt = ({
          count: e = 0,
          draggable: t = !0,
          enableTooltip: a = !0,
          id: r,
          isSelected: l,
          isTruncated: o,
          onTabClick: i,
          title: c,
          onContextMenu: d,
          onKeyDown: m,
        }) => {
          const u = (0, s.useSelector)(K.k),
            [b, E] = n().useState(!1),
            v = n().useRef(null),
            f = qt({ id: r, isEnabledEDSPhase1: u }),
            y = (0, Pt.S)();
          n().useEffect(() => {
            var e;
            if (r !== c) {
              const t =
                null == (e = v.current)
                  ? void 0
                  : e.querySelector(`[id=${Vt(r)}]`);
              t && E(t.scrollWidth > t.clientWidth);
            }
          }, [r]);
          const h = n().useMemo(
              () =>
                (!o && !b) || l
                  ? n().createElement(se.A, {
                      code: "egstore.library.collections.tooltip",
                      args: [null != e ? e : 0],
                    })
                  : `${c} (${e})`,
              [o, b, l, c, e],
            ),
            C = (0, g.cx)(f.tabsButtonRoot, {
              [f.active]: l,
              [f.nonDraggableTabs]: !t,
            }),
            A = n().useCallback(
              () =>
                u
                  ? n().createElement(
                      p.E,
                      {
                        variant: Y.ZJ.UILG,
                        color: l ? Y.Uf.PRIMARY : Y.Uf.SECONDARY,
                      },
                      n().createElement(
                        "div",
                        {
                          className: f.title,
                          "data-dropzoneitem":
                            (r !== y && r !== kt.V.ALL) || void 0,
                          id: Vt(r),
                        },
                        c,
                      ),
                    )
                  : n().createElement(
                      Mt.A.Text,
                      { textLevel: l ? W.qo.PRIMARY : W.qo.SECONDARY },
                      n().createElement(
                        "div",
                        {
                          className: f.title,
                          "data-dropzoneitem":
                            (r !== y && r !== kt.V.ALL) || void 0,
                          id: Vt(r),
                        },
                        c,
                      ),
                    ),
              [u, l, r],
            );
          return n().createElement(
            "div",
            { className: C, "data-testid": "CollectionTabsButton" },
            n().createElement(
              Nt.A,
              {
                ref: v,
                id: r,
                onClick: () => i(r),
                className: (0, g.cx)(f.button, { [f.active]: l }),
                role: "tab",
                "aria-selected": l,
                onContextMenu: d,
                onKeyDown: m,
              },
              n().createElement(A, null),
            ),
            a && n().createElement(pt.m, { anchorRef: v }, h),
          );
        };
      var $t = a(1165),
        Yt = a(89709),
        Jt = a(70751),
        Kt = a(71188),
        Zt = a(76004),
        Qt = a(76517),
        Xt = a(64558),
        ea = a(9102),
        ta = a(44490);
      const aa = (e) =>
          Boolean(
            !(null == e ? void 0 : e.appName) || !e.appName.startsWith("UE_5"),
          ),
        ra = (0, Yt.A)([
          Xt.R9,
          (e) => !(0, Xt.PU)(e) || (0, Xt.Ef)(e),
          (0, Jt.A)([
            (0, Xt.In)(ea.zf),
            (0, Xt.In)(ea.zl),
            (0, Xt.In)(ea.mX),
            (0, Xt.In)(ea.M6),
            (0, Xt.In)(ea.eX),
            (0, Xt.In)(ea.cs),
          ]),
        ]),
        na = (0, Yt.A)([
          Xt.R9,
          (e) => !(0, Xt.PU)(e),
          (0, Jt.A)([
            (0, Xt.In)(ea.zf),
            (0, Xt.In)(ea.zl),
            (0, Xt.In)(ea.mX),
            (0, Xt.In)(ea.M6),
            (0, Xt.In)(ea.eX),
            (0, Xt.In)(ea.cs),
          ]),
        ]),
        la = (e) =>
          (0, Kt.A)(
            (0, Zt.A)((t) => (e ? ra(t.catalogItem) : na(t.catalogItem))),
            (0, Zt.A)(aa),
            (0, Qt.A)(
              (() => {
                let e = !1;
                return (t, a) =>
                  a
                    ? a.namespace === ta.u
                      ? e || a.catalogItemId !== ta.v
                        ? t
                        : ((e = !0), [...t, a])
                      : [...t, a]
                    : t;
              })(),
              [],
            ),
          );
      var oa = a(20171),
        ia = Object.defineProperty,
        ca = Object.defineProperties,
        sa = Object.getOwnPropertyDescriptors,
        da = Object.getOwnPropertySymbols,
        ma = Object.prototype.hasOwnProperty,
        ua = Object.prototype.propertyIsEnumerable,
        pa = (e, t, a) =>
          t in e
            ? ia(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ga = (e, t) => {
        const a = ze(
            ((e) => (0, oa.Mz)(Ue.fM, (t) => (e ? t[e] : void 0)))(e),
            () => (0, Ue.np)({ collectionId: e }),
            ((n = ((e, t) => {
              for (var a in t || (t = {})) ma.call(t, a) && pa(e, a, t[a]);
              if (da) for (var a of da(t)) ua.call(t, a) && pa(e, a, t[a]);
              return e;
            })({}, t)),
            (l = {
              enabled:
                Boolean(e) &&
                e !== kt.V.ALL &&
                !1 !== (null == t ? void 0 : t.enabled),
            }),
            ca(n, sa(l))),
          ),
          { data: r } = a;
        var n, l;
        return {
          items: r,
          query: ((e, t) => {
            var a = {};
            for (var r in e) ma.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && da)
              for (var r of da(e))
                t.indexOf(r) < 0 && ua.call(e, r) && (a[r] = e[r]);
            return a;
          })(a, ["data"]),
        };
      };
      var ba = a(99965),
        Ea = Object.defineProperty,
        va = Object.defineProperties,
        fa = Object.getOwnPropertyDescriptors,
        ya = Object.getOwnPropertySymbols,
        ha = Object.prototype.hasOwnProperty,
        Ca = Object.prototype.propertyIsEnumerable,
        Aa = (e, t, a) =>
          t in e
            ? Ea(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Oa = (e = []) => {
          const t = e.reduce((e, t) => {
            return (
              (a = ((e, t) => {
                for (var a in t || (t = {})) ha.call(t, a) && Aa(e, a, t[a]);
                if (ya) for (var a of ya(t)) Ca.call(t, a) && Aa(e, a, t[a]);
                return e;
              })({}, e)),
              (r = { [t.sandbox]: 1, [t.catalogId]: 1 }),
              va(a, fa(r))
            );
            var a, r;
          }, {});
          return (e) => e.filter((e) => t[e.namespace] && t[e.catalogItemId]);
        },
        Ia = () => [],
        Sa = (e = kt.V.ALL, t) => {
          const { records: a, query: n } = (0, ba.I6)(),
            { items: l, query: o } = ga(e, t);
          return (0, r.useMemo)(() => {
            const t = la((0, $t.Ay)().supportsLaunchableAddonsFlow())(a),
              r = e !== kt.V.ALL ? Oa(l) : Ia;
            return {
              records: e !== kt.V.ALL ? r(t) : t,
              recordsAll: t,
              query: {
                isFetching: n.isFetching || o.isFetching,
                isSuccess: n.isSuccess && o.isSuccess,
              },
            };
          }, [a, l, n.isFetching, n.isSuccess, o.isFetching, o.isSuccess]);
        };
      var wa = ((e) => (
        (e.INSTALLED = "installed"),
        (e.GENRE = "genre"),
        (e.FEATURE = "feature"),
        (e.CATEGORY = "category"),
        (e.PLATFORM = "platform"),
        (e.KEYWORD = "keyword"),
        (e.COLLECTION = "collection"),
        (e.CATALOG_ITEM_ID = "catalogItemId"),
        (e.SUBSCRIPTION = "subscription"),
        e
      ))(wa || {});
      const xa = {
        installed: [],
        genre: [],
        feature: [],
        category: [],
        platform: [],
        keyword: "",
        collection: kt.V.ALL,
        catalogItemId: [],
        subscription: [],
      };
      var ka = ((e) => (
          (e.WINDOWS = "Windows"), (e.WIN32 = "Win32"), (e.MAC = "Mac"), e
        ))(ka || {}),
        Pa = ((e) => (
          (e.GAMES = "games"),
          (e.SOFTWARE = "software"),
          (e.ENGINES = "engines"),
          (e.DIGITAL_EXTRAS = "digitalextras"),
          e
        ))(Pa || {}),
        Na = a(90934);
      const Ma = ({ items: e, selectedFilters: t, type: a }) => {
          const r = [];
          if (t && a) {
            const n = t[a];
            e.filter((e) => {
              const t = ((e, t) => {
                var a, r, n, l, o, i;
                if (e === wa.PLATFORM)
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
                if (e === wa.CATEGORY)
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
        La = ({ items: e, installedRecords: t }) =>
          t ? e.filter((e) => Boolean(t[e.relationshipId])) : [];
      var ja = a(22584);
      const _a = {
          [wa.INSTALLED]: La,
          [wa.GENRE]: ({ items: e, selectedFilters: t }) =>
            Ma({ items: e, selectedFilters: t, type: wa.GENRE }),
          [wa.FEATURE]: ({ items: e, selectedFilters: t }) =>
            Ma({ items: e, selectedFilters: t, type: wa.FEATURE }),
          [wa.CATEGORY]: ({ items: e, selectedFilters: t }) =>
            Ma({ items: e, selectedFilters: t, type: wa.CATEGORY }),
          [wa.PLATFORM]: ({ items: e, selectedFilters: t }) =>
            Ma({ items: e, selectedFilters: t, type: wa.PLATFORM }),
          [wa.KEYWORD]: ({ items: e, selectedFilters: t }) => {
            const a = t && t[wa.KEYWORD];
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
          [wa.COLLECTION]: void 0,
          [wa.CATALOG_ITEM_ID]: ({ items: e, selectedFilters: t }) => {
            const a = t && t[wa.CATALOG_ITEM_ID];
            return (null == a ? void 0 : a.length)
              ? e.filter((e) =>
                  null == a ? void 0 : a.includes(e.catalogItemId),
                )
              : [];
          },
          [wa.SUBSCRIPTION]: ({
            items: e,
            filterTable: t,
            selectedFilters: a,
          }) => {
            const r = wa.SUBSCRIPTION;
            if (!t) return e;
            const n = (null == a ? void 0 : a[r]) || [];
            if (!n.length) return e;
            const l = n.reduce((e, a) => (0, ja.h)(e, t[a] || []), n);
            return e.filter((e) => l.includes(e.relationshipId));
          },
        },
        Ta = (e) => {
          const t = [];
          return (
            Object.keys(e).reduce((t, a) => {
              var r;
              if (null == (r = e[a]) ? void 0 : r.length) {
                const e = _a[a];
                e && t.push(e);
              }
              return t;
            }, t),
            t
          );
        };
      var Ra = Object.defineProperty,
        Da = Object.getOwnPropertySymbols,
        Ba = Object.prototype.hasOwnProperty,
        Ha = Object.prototype.propertyIsEnumerable,
        Fa = (e, t, a) =>
          t in e
            ? Ra(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const za = ({ type: e, name: t, id: a, selectedFilters: r }) => {
        const n = ((e, t) => {
          for (var a in t || (t = {})) Ba.call(t, a) && Fa(e, a, t[a]);
          if (Da) for (var a of Da(t)) Ha.call(t, a) && Fa(e, a, t[a]);
          return e;
        })({}, r);
        if (e === wa.CATALOG_ITEM_ID) return (n[e] = []), n;
        const l =
          e === wa.GENRE || e === wa.FEATURE || e === wa.SUBSCRIPTION ? a : t;
        return (
          r[e] &&
            l &&
            (r[e].includes(l)
              ? (n[e] = r[e].filter((e) => e !== l))
              : (n[e] = [...r[e], l])),
          n
        );
      };
      var Ua = a(66623),
        Va = a(58163),
        Wa = a(85727),
        qa = a(40014),
        Ga = a(96687),
        $a = (e, t, a) =>
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
      const Ya = (0, Wa.lp)("userLibraryConfigApi"),
        Ja = () => !Va.Iw.isSsr() && (0, Ga.c)().indexedDB;
      var Ka = Object.defineProperty,
        Za = Object.defineProperties,
        Qa = Object.getOwnPropertyDescriptors,
        Xa = Object.getOwnPropertySymbols,
        er = Object.prototype.hasOwnProperty,
        tr = Object.prototype.propertyIsEnumerable,
        ar = (e, t, a) =>
          t in e
            ? Ka(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const rr = (e) => {
        const {
            queryKey: t,
            indexedDBKeyFn: a,
            initialValue: r,
            config: n = { enabled: !0 },
          } = e,
          l = (0, Ua.IT)(
            t,
            () =>
              ((e, t) =>
                $a(void 0, null, function* () {
                  if (!Ja()) return Promise.resolve(t);
                  try {
                    const t = yield qa.aU.get(e);
                    return Promise.resolve(null == t ? void 0 : t.data);
                  } catch (a) {
                    return (
                      Ya.warn(
                        "getCachedUserLibraryConfig",
                        `failed IDB get for - ${e}`,
                        { error: a.message },
                      ),
                      Promise.resolve(t)
                    );
                  }
                }))(a(), r),
            ((i = ((e, t) => {
              for (var a in t || (t = {})) er.call(t, a) && ar(e, a, t[a]);
              if (Xa) for (var a of Xa(t)) tr.call(t, a) && ar(e, a, t[a]);
              return e;
            })({ refetchOnReconnect: !1, refetchOnWindowFocus: !1 }, n)),
            (c = { enabled: !Va.Iw.isSsr() && n.enabled }),
            Za(i, Qa(c))),
          ),
          { data: o } = l;
        var i, c;
        return {
          data: o,
          query: ((e, t) => {
            var a = {};
            for (var r in e) er.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && Xa)
              for (var r of Xa(e))
                t.indexOf(r) < 0 && tr.call(e, r) && (a[r] = e[r]);
            return a;
          })(l, ["data"]),
        };
      };
      var nr = Object.defineProperty,
        lr = Object.defineProperties,
        or = Object.getOwnPropertyDescriptors,
        ir = Object.getOwnPropertySymbols,
        cr = Object.prototype.hasOwnProperty,
        sr = Object.prototype.propertyIsEnumerable,
        dr = (e, t, a) =>
          t in e
            ? nr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        mr = (e, t) => {
          for (var a in t || (t = {})) cr.call(t, a) && dr(e, a, t[a]);
          if (ir) for (var a of ir(t)) sr.call(t, a) && dr(e, a, t[a]);
          return e;
        };
      const ur = "local-storage-item",
        pr = ({
          keyFn: e = () => "",
          initialValue: t,
          localStorageEnabled: a = !1,
          allowedValues: n,
          config: l,
        }) => {
          const o = (0, Ua.jE)(),
            { data: i, query: c } = rr({
              queryKey: [ur, e()],
              indexedDBKeyFn: e,
              initialValue: t,
              config:
                ((s = mr({}, l)),
                (d = {
                  enabled: a,
                  initialData: t,
                  initialDataUpdatedAt: 0,
                  refetchOnReconnect: !1,
                  refetchOnWindowFocus: !1,
                }),
                lr(s, or(d))),
            });
          var s, d;
          const m = (0, r.useCallback)((e) => e && (!n || n.includes(e)), [n]),
            u = (0, r.useCallback)(
              (t) => {
                var r, n;
                m(t) &&
                  (o.setQueryData([ur, e()], t),
                  a &&
                    ((r = e()),
                    (n = t),
                    $a(void 0, null, function* () {
                      if (!r || !Ja()) return;
                      const e = { id: r, data: n };
                      qa.aU.put(e).catch((e) => {
                        Ya.warn(
                          "setCachedUserLibraryConfig",
                          `failed IDB put for - ${r}`,
                          { error: e.message },
                        );
                      });
                    })));
              },
              [m, a],
            );
          return { value: m(i) ? i : t, setValue: u, query: c };
        };
      var gr = a(13854),
        br = a(8384),
        Er = a(47155),
        vr = a(43380);
      const fr = (e) =>
          Object.values(e).some((e) => !!Array.isArray(e) && e.length > 0),
        yr = (e) => {
          var t;
          return Boolean(null == (t = e[wa.KEYWORD]) ? void 0 : t.length);
        },
        hr = (e) => e[wa.COLLECTION] !== kt.V.ALL;
      var Cr = Object.defineProperty,
        Ar = Object.defineProperties,
        Or = Object.getOwnPropertyDescriptors,
        Ir = Object.getOwnPropertySymbols,
        Sr = Object.prototype.hasOwnProperty,
        wr = Object.prototype.propertyIsEnumerable,
        xr = (e, t, a) =>
          t in e
            ? Cr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        kr = (e, t) => {
          for (var a in t || (t = {})) Sr.call(t, a) && xr(e, a, t[a]);
          if (Ir) for (var a of Ir(t)) wr.call(t, a) && xr(e, a, t[a]);
          return e;
        },
        Pr = (e, t) => Ar(e, Or(t));
      const Nr = () => {
        const e = (0, s.useSelector)(vr.n9),
          t = (0, s.useSelector)(br.Si),
          a = (0, s.useSelector)(Er.xA),
          n = (0, s.useSelector)(br.AL),
          { value: l, setValue: o } = pr({
            keyFn: () => `${gr.VJ}_${e || Na.c.ANONYMOUS}`,
            localStorageEnabled: !0,
            initialValue: kr({}, xa),
          }),
          i = (0, r.useMemo)(() => kr(kr({}, xa), l), [l]),
          c = (0, r.useMemo)(() => i[wa.KEYWORD] || "", [i]),
          d = (0, r.useCallback)(
            (e) => {
              o(Pr(kr({}, i), { [wa.KEYWORD]: e }));
            },
            [o, i],
          );
        (0, r.useEffect)(() => {
          const e = i[wa.SUBSCRIPTION];
          if (e.length) {
            const t = n.map((e) => e.relationshipId);
            e.filter((e) => !t.includes(e)).length &&
              o(Pr(kr({}, i), { [wa.SUBSCRIPTION]: [] }));
          }
        }, [i[wa.SUBSCRIPTION], n]);
        const m = (0, r.useCallback)(
            ({ type: e, name: t, id: a }) => {
              if (!e || (!t && !a) || !i) return;
              const r = za({ type: e, name: t, id: a, selectedFilters: i });
              o(kr({}, r));
            },
            [i],
          ),
          u = (0, r.useCallback)(
            (e) => {
              const r = Ta(i).reduce(
                (e, r) =>
                  r({
                    items: e,
                    filterTable: a,
                    selectedFilters: i,
                    installedRecords: t.latestValue,
                  }),
                e,
              );
              return ((e) => yr(e) || hr(e) || fr(e))(i) ? r : e;
            },
            [t.latestValue, i, a],
          ),
          p = (0, r.useCallback)(() => {
            const e = i[wa.COLLECTION];
            o(Pr(kr({}, xa), { [wa.COLLECTION]: e }));
          }, [i]),
          g = (0, r.useMemo)(() => {
            let e = ((e) => {
              let t = 0;
              return (
                Object.keys(e).forEach((a) => {
                  a !== wa.KEYWORD &&
                    a !== wa.COLLECTION &&
                    a !== wa.CATALOG_ITEM_ID &&
                    (t += e[a].length);
                }),
                t
              );
            })(i);
            return (yr(i) || Boolean(i[wa.CATALOG_ITEM_ID].length)) && e++, e;
          }, [i]);
        return {
          applySelectedFilters: u,
          onFilterClick: m,
          selectedFilters: i,
          setSelectedFilters: o,
          resetFilters: p,
          keywordValue: c,
          setKeywordValue: d,
          numberActiveFilters: g,
        };
      };
      var Mr = Object.defineProperty,
        Lr = Object.defineProperties,
        jr = Object.getOwnPropertyDescriptors,
        _r = Object.getOwnPropertySymbols,
        Tr = Object.prototype.hasOwnProperty,
        Rr = Object.prototype.propertyIsEnumerable,
        Dr = (e, t, a) =>
          t in e
            ? Mr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Br = () => {
          const { selectedFilters: e, setSelectedFilters: t } = Nr();
          return {
            selectedCollectionId: (0, r.useMemo)(
              () => e[wa.COLLECTION] || kt.V.ALL,
              [e],
            ),
            setSelectedCollectionId: (0, r.useCallback)(
              (a = kt.V.ALL) => {
                var r, n;
                t(
                  ((r = ((e, t) => {
                    for (var a in t || (t = {}))
                      Tr.call(t, a) && Dr(e, a, t[a]);
                    if (_r)
                      for (var a of _r(t)) Rr.call(t, a) && Dr(e, a, t[a]);
                    return e;
                  })({}, e)),
                  (n = { [wa.COLLECTION]: a }),
                  Lr(r, jr(n))),
                );
              },
              [t, e],
            ),
          };
        },
        Hr = () => {
          var e;
          const { selectedCollectionId: t, setSelectedCollectionId: a } = Br(),
            { records: r } = Sa();
          return n().createElement(Gt, {
            count: null != (e = null == r ? void 0 : r.length) ? e : 0,
            draggable: !1,
            id: kt.V.ALL,
            isSelected: t === kt.V.ALL,
            onTabClick: () => a(kt.V.ALL),
            title: n().createElement(se.A, {
              code: "egstore.library.filter.all",
            }),
          });
        };
      var Fr = a(10677),
        zr = Object.defineProperty,
        Ur = Object.getOwnPropertySymbols,
        Vr = Object.prototype.hasOwnProperty,
        Wr = Object.prototype.propertyIsEnumerable,
        qr = (e, t, a) =>
          t in e
            ? zr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Gr = (e, t) => {
          for (var a in t || (t = {})) Vr.call(t, a) && qr(e, a, t[a]);
          if (Ur) for (var a of Ur(t)) Wr.call(t, a) && qr(e, a, t[a]);
          return e;
        };
      const $r = (0, v.W)(() => ({
          root: (0, g.AH)(
            Gr(
              { display: "flex", alignItems: "center", marginBottom: 34 },
              (0, ue.hz)(33),
            ),
          ),
          box: (0, g.AH)({ overflow: "hidden" }),
        })),
        Yr = ({
          allTab: e,
          favoritesTab: t,
          tabs: a,
          addCollectionButton: r,
        }) => {
          const l = $r(),
            { setNodeRef: o } = (0, Fr.zM)({ id: kt.w });
          return n().createElement(
            "div",
            { className: l.root, ref: o },
            e,
            t,
            n().createElement(
              b.a,
              {
                alignItems: E.ep.Center,
                justify: E.cn.Start,
                wrap: E.EM.NoWrap,
                className: l.box,
              },
              a,
            ),
            r,
          );
        };
      var Jr = a(37301),
        Kr = Object.defineProperty,
        Zr = Object.defineProperties,
        Qr = Object.getOwnPropertyDescriptors,
        Xr = Object.getOwnPropertySymbols,
        en = Object.prototype.hasOwnProperty,
        tn = Object.prototype.propertyIsEnumerable,
        an = (e, t, a) =>
          t in e
            ? Kr(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        rn = (e, t) => {
          for (var a in t || (t = {})) en.call(t, a) && an(e, a, t[a]);
          if (Xr) for (var a of Xr(t)) tn.call(t, a) && an(e, a, t[a]);
          return e;
        },
        nn = (e, t) => Zr(e, Qr(t));
      const ln = (0, v.W)(() => ({
          root: (0, g.AH)({
            minWidth: 0,
            maxWidth: "max-content",
            flex: "1 1 0",
            overflow: "hidden",
          }),
          dragging: (0, g.AH)({ opacity: 0.25 }),
          selected: (0, g.AH)({ flexGrow: 10 }),
        })),
        on = (e) => {
          var t = e,
            { forwardRef: a, id: r, isSelected: l } = t,
            o = ((e, t) => {
              var a = {};
              for (var r in e)
                en.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Xr)
                for (var r of Xr(e))
                  t.indexOf(r) < 0 && tn.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["forwardRef", "id", "isSelected"]);
          const {
              active: i,
              attributes: c,
              isDragging: s,
              listeners: d,
            } = (0, Jr.gl)({ id: r }),
            m = ln();
          return n().createElement(
            "div",
            nn(
              rn(
                rn(
                  {
                    ref: a,
                    className: (0, g.cx)(m.root, {
                      [m.selected]: l,
                      [m.dragging]: s,
                    }),
                  },
                  c,
                ),
                d,
              ),
              { tabIndex: -1 },
            ),
            n().createElement(
              Gt,
              nn(rn({}, o), {
                draggable: !0,
                enableTooltip: !i,
                id: r,
                isSelected: l,
              }),
            ),
          );
        };
      var cn = a(36940);
      const sn = ({ collectionName: e, onRemoveClick: t, onCancelClick: a }) =>
        n().createElement(cn._, {
          modalTitle: n().createElement(se.A, {
            code: "egstore.library.collection_delete_confirm_modal.title",
          }),
          onCloseClick: a,
          title: n().createElement(se.A, {
            code: "egstore.library.collection_delete_confirm_modal.text_question",
            args: [e],
          }),
          subTitle: n().createElement(se.A, {
            code: "egstore.library.collection_delete_confirm_modal.text_info",
          }),
          secondaryButton: n().createElement(
            R.u,
            { onClick: a },
            n().createElement(se.A, {
              code: "egstore.library.collection_delete_confirm_modal.cancel",
            }),
          ),
          primaryButton: n().createElement(
            T.S,
            { onClick: t },
            n().createElement(se.A, {
              code: "egstore.library.collection_delete_confirm_modal.confirm",
            }),
          ),
        });
      var dn = Object.defineProperty,
        mn = Object.defineProperties,
        un = Object.getOwnPropertyDescriptors,
        pn = Object.getOwnPropertySymbols,
        gn = Object.prototype.hasOwnProperty,
        bn = Object.prototype.propertyIsEnumerable,
        En = (e, t, a) =>
          t in e
            ? dn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        vn = (e, t) => {
          for (var a in t || (t = {})) gn.call(t, a) && En(e, a, t[a]);
          if (pn) for (var a of pn(t)) bn.call(t, a) && En(e, a, t[a]);
          return e;
        },
        fn = (e, t) => mn(e, un(t));
      const yn = (e) =>
          r.createElement(
            xe,
            fn(vn({}, e), {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: r.createElement(
                b.a,
                {
                  alignItems: E.ep.Center,
                  justify: E.cn.Center,
                  fillParent: !0,
                },
                r.createElement(
                  b.a,
                  { direction: E.NX.Column, alignItems: E.ep.Center },
                  r.createElement(
                    we.EA,
                    vn({ variant: we.qd.Text, width: 500, height: 50 }, e),
                  ),
                  r.createElement(
                    we.EA,
                    fn(vn({ variant: we.qd.Text, width: 300, height: 50 }, e), {
                      style: { margin: "-10px 0 10px" },
                    }),
                  ),
                  r.createElement(
                    we.EA,
                    vn({ variant: we.qd.Text, width: 260, height: 30 }, e),
                  ),
                ),
              ),
            }),
          ),
        hn = u("collection-remove-confirm-modal"),
        Cn = () => {
          const { closeModal: e, cancelModal: t, getData: a } = hn(),
            l = (() => {
              const e = (0, s.useDispatch)(),
                { selectedCollectionId: t, setSelectedCollectionId: a } = Br();
              return (0, r.useCallback)(
                (r) => {
                  e((0, Ue.rV)(r)), t === r.collectionId && a(kt.V.ALL);
                },
                [e, t, a],
              );
            })(),
            o = nt(a()),
            i = n().useCallback(() => {
              o && l(o), e();
            }, [o]);
          return n().createElement(
            n().Fragment,
            null,
            n().createElement(sn, {
              collectionName: (null == o ? void 0 : o.name) || "",
              onRemoveClick: i,
              onCancelClick: t,
            }),
          );
        },
        An = () => {
          const { isOpen: e, cancelModal: t } = hn();
          return n().createElement(
            He.a,
            { isOpen: e, onClose: t },
            n().createElement(
              i.tY,
              { fallback: n().createElement(yn, null) },
              n().createElement(Cn, null),
            ),
          );
        };
      var On = a(41063),
        In = a(70997);
      const Sn = ({ disabled: e, onClick: t }) =>
          n().createElement(In.T, {
            horizontal: !0,
            title: n().createElement(se.A, {
              code: "diesel.library.settings.remove_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        wn = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, On.R)(),
            a = (0, c.$)({ suspense: !1 }),
            r = (0, Pt.S)(),
            { openModal: l } = hn(),
            o = n().useCallback(() => {
              e && e !== kt.V.ALL && e !== r && l(e), t(void 0);
            }, [e, t, l]);
          return n().createElement(Sn, { onClick: o, disabled: !a });
        },
        xn = ({ disabled: e, onClick: t }) =>
          n().createElement(In.T, {
            horizontal: !0,
            title: n().createElement(se.A, {
              code: "diesel.library.settings.rename_collection",
            }),
            onClick: t,
            disabled: e,
          }),
        kn = ({ collectionId: e }) => {
          const { setActiveMenu: t } = (0, On.R)(),
            a = (0, c.$)({ suspense: !1 }),
            r = (0, Pt.S)(),
            { openModal: l } = lt(),
            o = n().useCallback(() => {
              e && e !== kt.V.ALL && e !== r && l(e), t(void 0);
            }, [e, t, l]);
          return n().createElement(xn, { onClick: o, disabled: !a });
        };
      var Pn = a(63124),
        Nn = a(35433),
        Mn = a(91608);
      const Ln = () => {};
      var jn = a(24232);
      const _n = (0, v.W)(() => ({
          root: (0, g.AH)({ position: "fixed", zIndex: pe.f.navDropdown }),
        })),
        Tn = ({
          anchorElement: e,
          anchorPosition: t,
          children: a,
          isOpen: n = !1,
          onClose: l,
        }) => {
          const o = _n(),
            [i, c] = r.useState(null),
            s = (0, r.useRef)((0, Wa.jv)("egs-context-menu")),
            d = (({
              isOpen: e = !1,
              onClose: t = Ln,
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
                    (a.key !== Nn.nC.ArrowUp && a.key !== Nn.nC.ArrowDown) ||
                      a.preventDefault();
                    const r = n.querySelector("ul"),
                      l = (0, Pn.JC)(r),
                      o = (0, Pn.xG)(r);
                    a.key === Nn.nC.ArrowUp &&
                      (o > 0
                        ? (0, Pn.Rw)(o - 1, r)
                        : l.length && (0, Pn.Rw)(l.length - 1, r)),
                      a.key === Nn.nC.ArrowDown &&
                        (l.length && o < l.length - 1
                          ? (0, Pn.Rw)(o + 1, r)
                          : (0, Pn.Rw)(0, r)),
                      a.key === Nn.nC.Escape && t();
                  },
                  [e, t, n],
                ),
                m = (0, r.useMemo)(() => {
                  const { innerWidth: e, innerHeight: t } = (0, Ga.c)(),
                    r = (0, Wa.ZO)(n),
                    l = Math.max(0, e - r.width),
                    o = Math.max(0, t - r.height);
                  return {
                    left: (0, Mn.A)(0, l, (null == a ? void 0 : a.left) || 0),
                    top: (0, Mn.A)(0, o, (null == a ? void 0 : a.top) || 0),
                  };
                }, [a, n]);
              return (
                (0, r.useEffect)(() => {
                  const t = (0, Ga.c)();
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
                m
              );
            })({
              isOpen: n,
              popperElement: i,
              anchorElement: e,
              anchorPosition: t,
              onClose: l,
            });
          return s.current && n
            ? (0, jn.createPortal)(
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
      var Rn = a(12075),
        Dn = Object.defineProperty,
        Bn = Object.getOwnPropertySymbols,
        Hn = Object.prototype.hasOwnProperty,
        Fn = Object.prototype.propertyIsEnumerable,
        zn = (e, t, a) =>
          t in e
            ? Dn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Un = (0, v.W)(() => ({
          root: (0, g.AH)({ width: "max-content" }),
        })),
        Vn = (e) => {
          var t = e,
            { selectedCollectionId: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var r in e)
                Hn.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Bn)
                for (var r of Bn(e))
                  t.indexOf(r) < 0 && Fn.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["selectedCollectionId"]);
          const l = Un();
          return n().createElement(
            Tn,
            ((e, t) => {
              for (var a in t || (t = {})) Hn.call(t, a) && zn(e, a, t[a]);
              if (Bn) for (var a of Bn(t)) Fn.call(t, a) && zn(e, a, t[a]);
              return e;
            })({}, r),
            n().createElement(
              "div",
              { className: l.root },
              n().createElement(
                Rn.W,
                { dense: !0, noBorder: !0 },
                n().createElement(kn, { collectionId: a }),
                n().createElement(wn, { collectionId: a }),
              ),
            ),
          );
        },
        Wn = (e) => {
          const { activeMenu: t, setActiveMenu: a } = (0, On.R)(),
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
                t.key === Nn.nC.F10 &&
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
      var qn = Object.defineProperty,
        Gn = Object.getOwnPropertySymbols,
        $n = Object.prototype.hasOwnProperty,
        Yn = Object.prototype.propertyIsEnumerable,
        Jn = (e, t, a) =>
          t in e
            ? qn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Kn = ({ collectionId: e, isTruncated: t }) => {
          const a = n().useRef(null),
            { active: r, setNodeRef: l } = (0, Jr.gl)({ id: e }),
            { selectedCollectionId: o, setSelectedCollectionId: i } = Br(),
            {
              openContextMenu: c,
              openContextMenuWithKeyboard: s,
              contextMenuProps: d,
            } = Wn(`collection_tab_context:${e}`),
            m = nt(e),
            { records: u } = Sa(e),
            p = o === e;
          n().useEffect(() => {
            r && d.onClose();
          }, [r]);
          const g = n().useCallback(
            (e) => {
              l(e), (a.current = e);
            },
            [l],
          );
          return n().createElement(
            n().Fragment,
            null,
            n().createElement(on, {
              count: (null == u ? void 0 : u.length) || 0,
              forwardRef: g,
              id: e,
              isSelected: p,
              isTruncated: t,
              onContextMenu: c,
              onKeyDown: s,
              onTabClick: () => i(e),
              title: (null == m ? void 0 : m.name) || "",
            }),
            n().createElement(
              Vn,
              ((e, t) => {
                for (var a in t || (t = {})) $n.call(t, a) && Jn(e, a, t[a]);
                if (Gn) for (var a of Gn(t)) Yn.call(t, a) && Jn(e, a, t[a]);
                return e;
              })({ selectedCollectionId: e, anchorElement: a.current }, d),
            ),
          );
        },
        Zn = (0, v.W)((e) => ({
          dragImage: (0, g.AH)({
            position: "relative",
            top: -30,
            height: "auto",
            width: "max-content",
            padding: "10px 20px",
            borderRadius: ke.Vq,
            boxShadow: `0px 5px 10px ${ke.hb}`,
            background: e.level1,
            textAlign: "center",
          }),
        })),
        Qn = ({ name: e, id: t }) => {
          var a;
          const r = Zn(),
            { items: l } = ga(t);
          return n().createElement(
            "div",
            { className: r.dragImage },
            n().createElement(
              de.Ay,
              { textLevel: W.qo.PRIMARY },
              e,
              " (",
              null != (a = null == l ? void 0 : l.length) ? a : 0,
              ")",
            ),
          );
        },
        Xn = () => {
          var e;
          const { selectedCollectionId: t, setSelectedCollectionId: a } = Br(),
            r = (0, Pt.S)(),
            { records: l } = Sa(r);
          return n().createElement(Gt, {
            count: null != (e = null == l ? void 0 : l.length) ? e : 0,
            draggable: !1,
            id: r,
            isSelected: t === r,
            onTabClick: () => a(r),
            title: n().createElement(se.A, {
              code: "egstore.library.collections.tabs.favorites",
            }),
          });
        },
        el = (e) => {
          const t = (0, Pt.S)();
          return nt(t, e);
        },
        tl = (e) => {
          const { selectedCollectionId: t } = Br(),
            { collections: a } = Ke(e),
            n = (0, Pt.S)();
          return (0, r.useMemo)(
            () =>
              (null == a ? void 0 : a.length)
                ? a.filter((e) => e.collectionId !== n)
                : [],
            [a, n, t],
          );
        },
        al = (e) => {
          const t = n().useRef();
          return (
            n().useEffect(() => {
              t.current = e;
            }, [e]),
            t.current
          );
        };
      var rl = a(1273),
        nl = a(56578);
      const ll = (0, v.W)((e) => ({
          draggingRight: (0, g.AH)(
            (0, ue.fo)({ style: "solid", size: 2, color: e.accent }),
            (0, ue.wv)(13),
          ),
          draggingLeft: (0, g.AH)(
            (0, ue.Kz)({ style: "solid", size: 2, color: e.accent }),
            (0, ue.zG)(13),
          ),
          title: Wt(e),
        })),
        ol = () => {
          const e = ll(),
            t = tl(),
            a = el(),
            { selectedCollectionId: l } = Br(),
            o = (() => {
              const e = tl(),
                t = (0, d.useLocalization)(),
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
              const e = (0, s.useDispatch)();
              return (0, r.useCallback)(
                (t) => {
                  e((0, Ue.Vi)(t));
                },
                [e],
              );
            })(),
            c = (0, Pt.S)(),
            m = n().useRef(null),
            [u, p] = n().useState(null),
            [b, E] = n().useState({}),
            [v, f] = n().useState([]),
            [y, h] = n().useState(null),
            [C, A] = n().useState(0),
            [O, I] = n().useState(""),
            [S, w] = n().useState(0),
            [x, k] = n().useState(null),
            [P, N] = n().useState(!1),
            M = (0, Fr.FR)(
              (0, Fr.MS)(Fr.AN, { activationConstraint: { distance: 20 } }),
              (0, Fr.MS)(Fr.uN, {
                coordinateGetter: Jr.JR,
                keyboardCodes: {
                  start: [Nn.nC.Space],
                  cancel: [Nn.nC.Escape],
                  end: [Nn.nC.Space, Nn.nC.Enter],
                },
              }),
            ),
            L = al(C),
            j = al(O),
            _ = al(S);
          n().useEffect(() => {
            null === u && S && p(S);
          }, [S]);
          const T = n().useCallback((t) => {
              t &&
                (t.classList.remove(...t.classList), t.classList.add(e.title));
            }, []),
            R = n().useCallback(() => {
              h(null), k(null), w(0), A(0), N(!1), p(null);
            }, []),
            D = (e) => {
              if (
                ((e.code !== Nn.nC.ArrowLeft && e.code !== Nn.nC.ArrowRight) ||
                  k(e.code),
                e.code === Nn.nC.Escape && m.current)
              ) {
                k(null);
                const e = m.current.querySelectorAll(
                  "[data-dropzoneitem=true]",
                );
                e &&
                  e.forEach((e) => {
                    T(e);
                  });
              }
            };
          n().useEffect(
            () => (
              m.current && m.current.addEventListener("keydown", D),
              () => {
                var e;
                return null == (e = m.current)
                  ? void 0
                  : e.removeEventListener("keydown", D);
              }
            ),
            [m.current],
          );
          const B = n().useCallback(
              (e) => {
                var a;
                const r =
                  null == (a = m.current)
                    ? void 0
                    : a.querySelectorAll("[data-dropzoneitem=true]");
                r &&
                  r.forEach((e) => {
                    T(e);
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
                      const d = (0, Jr.be)(t, e, s);
                      if (!(0, nl.A)(d, t)) {
                        const e = d.map((e) => e.collectionId);
                        e.unshift(o), l(e);
                      }
                    }
                  })({
                    ev: e,
                    customCollections: t,
                    dragDirection: S,
                    isOverSame: P,
                    initialDragDirection: u,
                    reorderCollections: i,
                    favCollectionId: c,
                  }),
                  R();
              },
              [j, S, P, u],
            ),
            H = n().useCallback(
              (e) => {
                const a = t.find((t) => t.collectionId === e.active.id);
                a && h(a);
              },
              [t],
            ),
            F = n().useCallback(
              (t) => {
                var a, r, n, l, o;
                A(t.delta.x);
                const i =
                  x || (null == (a = t.over) ? void 0 : a.id) === j
                    ? null == (n = m.current)
                      ? void 0
                      : n.querySelector(
                          `[id=${Vt(null == (r = t.over) ? void 0 : r.id)}]`,
                        )
                    : null == (l = m.current)
                      ? void 0
                      : l.querySelector(`[id=${Vt(j)}]`);
                if ((null == (o = t.over) ? void 0 : o.id) !== j || x) T(i);
                else {
                  let t;
                  S !== _ &&
                    (N(!0),
                    (t = 1 === S ? e.draggingRight : e.draggingLeft),
                    T(i),
                    i && i.classList.add((0, g.cx)(e.title, t)));
                }
              },
              [j, x, S, _],
            ),
            z = n().useCallback(
              (t) => {
                var a, r, n, l, o;
                if (t.active.id === (null == (a = t.over) ? void 0 : a.id))
                  return;
                let i;
                N(!1),
                  I(
                    null != (n = null == (r = t.over) ? void 0 : r.id) ? n : "",
                  ),
                  (i = 1 === S ? e.draggingRight : e.draggingLeft);
                const c =
                  null == (o = m.current)
                    ? void 0
                    : o.querySelector(
                        `[id=${Vt(null == (l = t.over) ? void 0 : l.id)}]`,
                      );
                c && c.classList.add((0, g.cx)(e.title, i));
              },
              [S],
            );
          return (
            n().useEffect(() => {
              x
                ? x === Nn.nC.ArrowRight
                  ? w(1)
                  : x === Nn.nC.ArrowLeft && w(-1)
                : L && C && (L < C ? w(1) : L > C && w(-1));
            }, [L, C, x]),
            n().useEffect(() => {
              if (m.current) {
                const e = Array.from(
                  m.current.querySelectorAll("[data-dropzoneitem=true]"),
                );
                f(e);
              }
            }, [t]),
            n().useEffect(() => {
              const e = {};
              v.forEach((t) => {
                const a = t.id.substring(t.id.indexOf("-") + 1);
                e[a] = t.scrollWidth > t.clientWidth;
              }),
                E(e);
            }, [v, l, t]),
            n().createElement(
              n().Fragment,
              null,
              n().createElement(
                Fr.Mp,
                {
                  sensors: M,
                  collisionDetection: Fr.y$,
                  onDragEnd: B,
                  onDragStart: H,
                  onDragOver: z,
                  onDragMove: F,
                  accessibility: { announcements: o },
                },
                n().createElement(
                  Jr.gB,
                  { items: t.map((e) => e.collectionId), strategy: Jr.m$ },
                  n().createElement(
                    "div",
                    { ref: m, role: "tablist" },
                    a &&
                      n().createElement(Yr, {
                        allTab: n().createElement(Hr, null),
                        favoritesTab: n().createElement(Xn, null),
                        tabs: t.map((e) =>
                          n().createElement(Kn, {
                            key: e.collectionId,
                            collectionId: e.collectionId,
                            isTruncated: b[e.collectionId],
                          }),
                        ),
                        addCollectionButton: n().createElement(xt, null),
                      }),
                  ),
                ),
                m.current
                  ? (0, jn.createPortal)(
                      n().createElement(
                        Fr.Hd,
                        { style: { cursor: "copy" }, modifiers: [rl.dU] },
                        y
                          ? n().createElement(Qn, {
                              name: y.name,
                              id: y.collectionId,
                            })
                          : null,
                      ),
                      m.current,
                    )
                  : null,
              ),
            )
          );
        };
      const il = ({ animation: e }) =>
        n().createElement(Yr, {
          allTab: n().createElement(we.EA, {
            height: 30,
            width: 40,
            animation: e,
          }),
          favoritesTab: n().createElement(we.EA, {
            height: 30,
            width: 70,
            style: { marginRight: "30px", marginLeft: "30px" },
            animation: e,
          }),
          tabs: [],
          addCollectionButton: n().createElement(we.EA, {
            variant: we.qd.Circle,
            height: 50,
            width: 50,
            animation: e,
          }),
        });
      var cl = a(14492),
        sl = a(13372),
        dl = a.n(sl);
      const ml = (0, v.W)((e) => ({
          root: (0, g.AH)({
            display: "flex",
            alignItems: "center",
            background: e.backgroundOverlay,
            borderRadius: ke.YM,
            marginBottom: 20,
          }),
          content: (0, g.AH)({
            display: "flex",
            flexDirection: "column",
            padding: 20,
            width: "100%",
            [f.aq.xl]: { alignItems: "center", flexDirection: "row" },
          }),
          textContent: (0, g.AH)({ [f.aq.md]: { maxWidth: 700 } }),
          title: (0, g.AH)({
            marginBottom: 5,
            [f.aq.xxl]: { marginBottom: 8 },
            h2: {
              fontSize: 22,
              lineHeight: "32px",
              [f.aq.xxl]: { fontSize: 26, lineHeight: "38px" },
            },
          }),
          body: (0, g.AH)({
            span: {
              fontSize: 14,
              lineHeight: "20px",
              [f.aq.xxl]: { fontSize: 16, lineHeight: "22px" },
            },
          }),
          image: (0, g.AH)({ height: 160, width: 160, flexShrink: 0 }),
          buttonDiv: (0, g.AH)({
            display: "flex",
            marginTop: 15,
            "button:first-child": (0, ue.hz)(10),
            [f.aq.xl]: {
              marginTop: 0,
              height: "100%",
              width: "100%",
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            },
          }),
        })),
        ul = ({
          image: e,
          title: t,
          body: a,
          hideButton: r,
          newCollectionButton: l,
        }) => {
          const o = ml();
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
                  n().createElement(me.A.Heading, { headingLevel: 2 }, t),
                ),
                n().createElement(
                  "div",
                  { className: o.body },
                  n().createElement(de.Ay, { textLevel: W.qo.SECONDARY }, a),
                ),
              ),
              n().createElement("div", { className: o.buttonDiv }, r, l),
            ),
          );
        };
      var pl = a(2758),
        gl = a(22792),
        bl = a(41503),
        El = a(92637);
      const vl = (0, g.AH)({ marginBottom: 40 }),
        fl = () => {
          const e = (0, s.useSelector)(K.k),
            t = (0, s.useSelector)(vr.n9),
            a = (0, c.$)(),
            r = tl(),
            { openModal: l } = lt(),
            { value: o, setValue: i } = pr({
              keyFn: () => `EGS_LIBRARY_INTRO_BANNER_HIDDEN_${t}`,
              localStorageEnabled: Boolean(t),
              initialValue: !1,
            }),
            d = n().useMemo(
              () => !o && !(null == r ? void 0 : r.length) && a,
              [o, r, a],
            );
          n().useEffect(() => {
            (null == r ? void 0 : r.length) && !o && i(!0);
          }, [null == r ? void 0 : r.length]);
          const m = () =>
            e
              ? n().createElement(
                  "div",
                  { className: vl },
                  n().createElement(pl.NN, {
                    image: n().createElement(El.o, {
                      src: dl(),
                      showBrokenOnError: !0,
                    }),
                    title: n().createElement(se.A, {
                      code: "egstore.library.favorites_folders.intro.title",
                    }),
                    content: n().createElement(se.A, {
                      code: "egstore.library.favorites_folders.intro.text",
                    }),
                    cta: n().createElement(
                      cl.$,
                      { variant: Y.ml.PRIMARY, onClick: () => l() },
                      n().createElement(se.A, {
                        code: "egstore.library.favorites_folders.intro.button.new",
                      }),
                    ),
                    secondaryCta: n().createElement(
                      cl.$,
                      { variant: Y.ml.OUTLINE, onClick: () => i(!0) },
                      n().createElement(se.A, {
                        code: "egstore.library.favorites_folders.intro.button.hide",
                      }),
                    ),
                    imageOrientation: pl.GI.SQUARE,
                    noBorder: !0,
                  }),
                )
              : n().createElement(ul, {
                  image: n().createElement(El.o, {
                    src: dl(),
                    showBrokenOnError: !0,
                  }),
                  title: n().createElement(se.A, {
                    code: "egstore.library.favorites_folders.intro.title",
                  }),
                  body: n().createElement(se.A, {
                    code: "egstore.library.favorites_folders.intro.text",
                  }),
                  hideButton: n().createElement(
                    gl.rp,
                    {
                      buttonWidth: z.Rj.AUTO,
                      buttonHeight: z.eL.DENSED,
                      onClick: () => i(!0),
                    },
                    n().createElement(se.A, {
                      code: "egstore.library.favorites_folders.intro.button.hide",
                    }),
                  ),
                  newCollectionButton: n().createElement(
                    bl.e6,
                    {
                      buttonWidth: z.Rj.AUTO,
                      buttonHeight: z.eL.DENSED,
                      onClick: () => l(),
                    },
                    n().createElement(se.A, {
                      code: "egstore.library.favorites_folders.intro.button.new",
                    }),
                  ),
                });
          return d ? n().createElement(m, null) : null;
        };
      var yl = a(63246);
      const hl = (0, v.W)(() => ({
          root: (0, g.AH)({ marginTop: 40, textAlign: "center" }),
          image: (0, g.AH)({
            marginBottom: 20,
            display: "flex",
            justifyContent: "center",
          }),
          titleDiv: (0, g.AH)({ marginBottom: 30 }),
        })),
        Cl = ({
          image: e,
          title: t,
          subtitle: a,
          buttonText: r,
          onButtonClick: l,
        }) => {
          const o = (0, s.useSelector)(K.k),
            i = hl(),
            c = () =>
              o
                ? n().createElement(
                    "div",
                    { className: i.titleDiv },
                    n().createElement(
                      p.E,
                      { variant: Y.ZJ.HMD, color: Y.Uf.PRIMARY },
                      t,
                    ),
                    a &&
                      n().createElement(
                        p.E,
                        { variant: Y.ZJ.HMD, color: Y.Uf.PRIMARY },
                        a,
                      ),
                  )
                : n().createElement(
                    "div",
                    { className: i.titleDiv },
                    n().createElement(me.A.Heading, { headingLevel: 2 }, t),
                    a &&
                      n().createElement(me.A.Heading, { headingLevel: 3 }, a),
                  ),
            d = () =>
              o
                ? n().createElement(
                    cl.$,
                    { variant: Y.ml.PRIMARY, size: Y.sp.LG, onClick: l },
                    r,
                  )
                : n().createElement(bl.e6, { onClick: l }, r);
          return n().createElement(
            "div",
            { className: i.root, "data-testid": "EmptyCollectionMessage" },
            n().createElement(
              j,
              null,
              n().createElement(_, { xs: 2 }),
              n().createElement(
                _,
                { xs: 8 },
                n().createElement(
                  b.a,
                  { centerContent: !0, direction: E.NX.Column },
                  e && n().createElement("div", { className: i.image }, e),
                  n().createElement(c, null),
                  n().createElement(d, null),
                ),
              ),
              n().createElement(_, { xs: 2 }),
            ),
          );
        };
      var Al = a(44316),
        Ol = a(72890),
        Il = a(28353),
        Sl = a(69945),
        wl = Object.defineProperty,
        xl = Object.defineProperties,
        kl = Object.getOwnPropertyDescriptors,
        Pl = Object.getOwnPropertySymbols,
        Nl = Object.prototype.hasOwnProperty,
        Ml = Object.prototype.propertyIsEnumerable,
        Ll = (e, t, a) =>
          t in e
            ? wl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        jl = (e, t) => {
          for (var a in t || (t = {})) Nl.call(t, a) && Ll(e, a, t[a]);
          if (Pl) for (var a of Pl(t)) Ml.call(t, a) && Ll(e, a, t[a]);
          return e;
        },
        _l = (e, t) => xl(e, kl(t));
      const Tl = (0, v.W)((e) => ({
          root: (0, g.AH)({
            overflow: "hidden",
            position: "relative",
            backgroundColor: e.backgroundOverlay,
            borderRadius: ke.Vq,
          }),
          image: (0, g.AH)((0, ke.ko)(ke.gl.x3x4)),
          imageInner: (0, g.AH)({
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
          progressImageFrame: (0, g.AH)(
            _l(jl(jl({}, gt.Ay.quick("right")), Sl.A), { overflow: "hidden" }),
          ),
          logoImage: (0, g.AH)(
            _l(jl({}, Sl.A), {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }),
          ),
          logoInner: (0, g.AH)({ width: "70%", backgroundSize: "contain" }),
          grayscale: (0, g.AH)(gt.Ay.quick("filter"), {
            filter: "grayscale(100%)",
            opacity: "0.3",
          }),
          indeterminate: (0, g.AH)(Il.A.fadeInAndOut()),
        })),
        Rl = ({
          image: e,
          indeterminate: t = !1,
          logo: a,
          percent: n = 0,
          children: l,
        }) => {
          const o = Tl(),
            i = r.createRef(),
            [c, s] = r.useState({ width: "100%", height: "100%" }),
            d = (0, Mn.A)(0, 1, n),
            m = d > 0 && d < 1 && !t,
            u = 100 * (1 - d),
            p = m;
          r.useEffect(() => {
            if (!i.current) return;
            const { offsetWidth: e, offsetHeight: t } = i.current;
            (c.width === e && c.height === t) || s({ width: e, height: t });
          }, [e, n]);
          const b = (0, g.cx)(o.image, {
              [o.grayscale]: p,
              [o.indeterminate]: t,
            }),
            E = (0, g.cx)(o.logoImage, { [o.grayscale]: p });
          return r.createElement(
            "div",
            { className: o.root },
            r.createElement(
              "div",
              { className: b, "data-testid": "base-image", ref: i },
              r.createElement("div", { className: o.imageInner }, e),
            ),
            m &&
              e &&
              r.createElement(
                "div",
                {
                  className: o.progressImageFrame,
                  style: { right: `${u}%` },
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
                  className: E,
                  "data-testid": "logo-image",
                  "aria-hidden": !0,
                },
                r.createElement("div", { className: o.logoInner }, a),
              ),
            l,
          );
        };
      var Dl = a(99734),
        Bl = a(12994),
        Hl = Object.defineProperty,
        Fl = Object.defineProperties,
        zl = Object.getOwnPropertyDescriptors,
        Ul = Object.getOwnPropertySymbols,
        Vl = Object.prototype.hasOwnProperty,
        Wl = Object.prototype.propertyIsEnumerable,
        ql = (e, t, a) =>
          t in e
            ? Hl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Gl = (e, t) => {
          for (var a in t || (t = {})) Vl.call(t, a) && ql(e, a, t[a]);
          if (Ul) for (var a of Ul(t)) Wl.call(t, a) && ql(e, a, t[a]);
          return e;
        },
        $l = (e, t) => Fl(e, zl(t));
      const Yl = pe.f.overlay,
        Jl = (0, v.W)(() => ({
          overlay: (0, g.AH)(
            $l(Gl({ position: "absolute", top: 0 }, (0, ue.kb)(0)), {
              zIndex: Yl,
              paddingBottom: "calc(4 / 3 * 100%)",
              width: "100%",
              height: "auto",
              pointerEvents: "none",
            }),
          ),
          landscape: (0, g.AH)(
            $l(Gl({ top: 10 }, (0, ue.kb)(10)), {
              paddingBottom: 0,
              width: Bl.uf,
              height: Bl.vr,
            }),
          ),
          footer: (0, g.AH)({
            width: "100%",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            borderBottomRightRadius: ke.Vq,
            borderBottomLeftRadius: ke.Vq,
            overflow: "hidden",
            height: "max-content",
          }),
        })),
        Kl = ({ favorite: e, footer: t, isGridView: a = !1, update: r }) => {
          const l = Jl(),
            o = (0, g.cx)(l.overlay, { [l.landscape]: !a });
          return n().createElement(
            "div",
            { className: o },
            r,
            e,
            t && n().createElement("div", { className: l.footer }, t),
          );
        };
      var Zl = a(15498);
      const Ql = (0, Zl.K)(
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
      var Xl = Object.defineProperty,
        eo = Object.getOwnPropertySymbols,
        to = Object.prototype.hasOwnProperty,
        ao = Object.prototype.propertyIsEnumerable,
        ro = (e, t, a) =>
          t in e
            ? Xl(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        no = (e, t) => {
          for (var a in t || (t = {})) to.call(t, a) && ro(e, a, t[a]);
          if (eo) for (var a of eo(t)) ao.call(t, a) && ro(e, a, t[a]);
          return e;
        };
      const lo = (0, v.W)((e) => ({
          root: (0, g.AH)({ position: "absolute", backgroundColor: ke.cf }),
          blueCircle: (0, g.AH)({
            display: "flex",
            backgroundColor: e.accent,
            justifyContent: "center",
            alignItems: "center",
            svg: { transform: "scaleX(-1)" },
          }),
          blueCircleGrid: (0, g.AH)({
            width: 34,
            height: 34,
            borderRadius: 34,
            boxShadow: `0px 8px 16px 0px ${ke.RA}, \n                    0px 6px 8px 0px ${ke.RA}, \n                    0px 4px 4px 0px ${ke.RA}, \n                    0px 2px 2px 0px ${ke.RA}, \n                    0px 1px 1px 0px ${ke.RA}`,
            fontSize: 22,
          }),
          blueCircleList: (0, g.AH)(
            no(
              {
                width: 16,
                height: 16,
                borderRadius: 16,
                boxShadow: `0px 5.333px 10.667px 0px ${ke.RA}, \n                    0px 4px 5.333px 0px ${ke.RA}, \n                    0px 2.667px 2.667px 0px ${ke.RA}, \n                    0px 1.333px 1.333px 0px ${ke.RA}, \n                    0px 0.667px 0.667px 0px ${ke.RA}`,
                fontSize: 12,
                position: "absolute",
                top: -6,
              },
              (0, ue.pG)(-6),
            ),
          ),
        })),
        oo = ({ isGridView: e }) => {
          const t = lo(),
            a = e ? t.blueCircleGrid : t.blueCircleList;
          return n().createElement(
            b.a,
            {
              className: t.root,
              "data-testid": "UpdateIconOverlay",
              centerContent: !0,
              fillParent: !0,
            },
            n().createElement(
              "div",
              { className: (0, g.cx)(t.blueCircle, a) },
              n().createElement(Ql, null),
            ),
          );
        };
      var io = Object.defineProperty,
        co = Object.defineProperties,
        so = Object.getOwnPropertyDescriptors,
        mo = Object.getOwnPropertySymbols,
        uo = Object.prototype.hasOwnProperty,
        po = Object.prototype.propertyIsEnumerable,
        go = (e, t, a) =>
          t in e
            ? io(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        bo = (e, t) => {
          for (var a in t || (t = {})) uo.call(t, a) && go(e, a, t[a]);
          if (mo) for (var a of mo(t)) po.call(t, a) && go(e, a, t[a]);
          return e;
        },
        Eo = (e, t) => co(e, so(t));
      const vo = (0, v.W)((e, t) => {
          const a = t
              ? (0, g.AH)({
                  position: "relative",
                  "&:focus": { outline: "none" },
                })
              : (0, g.AH)({
                  position: "relative",
                  "&:focus": { outline: "none" },
                  "&::before": Eo(
                    bo(bo({}, (0, gt.Jp)("background-color")), Lt.j),
                    {
                      position: "absolute",
                      right: -16,
                      top: -16,
                      left: -16,
                      bottom: -16,
                      width: "calc(100% + 32px)",
                      borderRadius: q.YM,
                      pointerEvents: "none",
                    },
                  ),
                  "&:hover::before, &:focus::before": {
                    backgroundColor: e.backgroundOverlay,
                  },
                }),
            r = (0, g.AH)({ width: "100%", height: "100%" });
          return {
            component: r,
            root: (0, g.AH)({
              position: "relative",
              width: "100%",
              height: "100%",
            }),
            darken: (0, g.AH)({ opacity: 0.5 }),
            button: a,
            inner: (0, g.AH)({
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              minWidth: 0,
              wordWrap: "break-word",
              height: "100%",
              width: "100%",
              flexGrow: 1,
              borderRadius: q.Vq,
            }),
            image: (0, g.AH)({
              position: "relative",
              borderRadius: q.Vq,
              backgroundColor: e.backgroundOverlay,
              "&::after": Eo(
                bo(bo(bo({}, (0, gt.Jp)("opacity")), Sl.A), Lt.j),
                {
                  backgroundColor: ke.ON,
                  opacity: 0,
                  borderRadius: q.Vq,
                  ".hasHover:hover &, .active &": { opacity: t ? 0.16 : 0.15 },
                },
              ),
            }),
            body: (0, g.AH)({
              display: "flex",
              flexDirection: "column",
              justifyContent: "stretch",
              gap: 4,
              height: 76,
              paddingTop: 10,
              [f.aq[f.EA.lg]]: { height: 91 },
              [`.${r}:hover & *`]: bo({}, t && { color: J.UM.contrast }),
            }),
            title: (0, g.AH)({
              width: "calc(100% - 32px)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }),
            edsTitle: (0, g.AH)({
              h6: {
                width: "calc(100% - 32px)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }),
            settings: (0, g.AH)(
              Eo(bo({ position: "absolute" }, (0, ue.pG)(0)), {
                bottom: 45,
                [f.aq[f.EA.lg]]: { bottom: 60 },
              }),
            ),
            settingsButton: (0, g.AH)({ width: 32, height: 22 }),
            settingsMenu: (0, g.AH)({
              width: "max-content",
              minWidth: t ? 190 : 280,
              [f.aq.lg]: { minWidth: t ? 190 : 315 },
              [f.aq.xl]: { minWidth: t ? 190 : 340 },
            }),
            favoriteDiv: (0, g.AH)(
              Eo(bo({ top: 10 }, (0, ue.pG)(10)), {
                [`.${r}:hover &`]: { opacity: 1 },
              }),
            ),
          };
        }),
        fo = ({
          achievements: e,
          active: t,
          additionalInfo: a,
          contextMenu: r,
          darken: l,
          disabled: o,
          forwardedRef: i,
          hasHover: c,
          hasUpdate: d,
          image: m,
          imageFooter: u,
          onClick: b,
          onContextMenu: E,
          onKeyDown: v,
          renderFavorite: f,
          renderSettingsMenu: y,
          subtitle: h,
          title: C,
        }) => {
          const A = (0, s.useSelector)(K.k),
            O = vo(A),
            I = (0, g.cx)(O.inner, O.button),
            S = (0, g.cx)(O.root, { active: t, hasHover: c, [O.darken]: l }),
            w = () =>
              A
                ? n().createElement(
                    "div",
                    { className: O.edsTitle },
                    n().createElement(
                      p.E,
                      { variant: Y.ZJ.HSM, color: Y.Uf.PRIMARY },
                      C,
                    ),
                  )
                : n().createElement(
                    "div",
                    { className: O.title },
                    n().createElement(de.Ay, { textLevel: W.qo.PRIMARY }, C),
                  ),
            x = n().createElement(
              n().Fragment,
              null,
              n().createElement("div", { className: O.image }, m),
              n().createElement(
                "div",
                { className: O.body },
                n().createElement(w, null),
                a || e,
                h,
              ),
            );
          return n().createElement(
            "div",
            {
              className: O.component,
              ref: i,
              onContextMenu: E,
              onKeyDown: v,
              "data-testid": "card",
            },
            n().createElement(
              "div",
              { className: S },
              b
                ? n().createElement(
                    Nt.A,
                    {
                      className: I,
                      onClick: b,
                      disabled: o,
                      "data-testid": "card-btn",
                    },
                    x,
                  )
                : n().createElement("div", { className: O.inner }, x),
              n().createElement(
                n().Fragment,
                null,
                n().createElement(Kl, {
                  isGridView: !0,
                  favorite: f && f(O.favoriteDiv),
                  update: d
                    ? n().createElement(oo, { isGridView: !0 })
                    : void 0,
                  footer: u,
                }),
                y &&
                  n().createElement(
                    "div",
                    { className: O.settings },
                    y({ button: O.settingsButton, menu: O.settingsMenu }),
                  ),
                r,
              ),
            ),
          );
        },
        yo = (0, g.AH)({
          userSelect: "none",
          width: 32,
          height: 35,
          display: "inline-block",
          fill: "currentColor",
          flexShrink: 0,
          fontSize: "inherit",
        }),
        ho = () =>
          n().createElement(
            "svg",
            {
              className: yo,
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
      var Co = a(8370),
        Ao = a(21735);
      const Oo = (0, v.W)(() => ({
          root: (0, g.AH)({
            "> button": { width: "100%", height: "100%", padding: 0 },
          }),
        })),
        Io = r.forwardRef(
          ({ onClick: e, ariaControls: t, ariaExpanded: a }, n) => {
            const l = Oo(),
              o = (0, d.useLocalization)();
            return (0, s.useSelector)(K.k)
              ? r.createElement(cl.$, {
                  style: { width: "100%", height: "100%" },
                  variant: Y.ml.GHOST,
                  size: Y.sp.SM,
                  onClick: e,
                  icon: r.createElement(Co.r, null),
                  "aria-expanded": a,
                  "aria-controls": t,
                  "aria-label":
                    o("diesel.common.smart_button.ariaLabel.toggleSettings") ||
                    "Toggle Settings Menu",
                  ref: n,
                  "data-testid": "toggle",
                })
              : r.createElement(
                  "span",
                  { className: l.root, "data-testid": "toggle" },
                  r.createElement(
                    mt.K,
                    {
                      onClick: e,
                      "aria-expanded": a,
                      "aria-controls": t,
                      forwardRef: n,
                    },
                    r.createElement(Ao.Z, {
                      titleAccess: o(
                        "diesel.common.smart_button.ariaLabel.toggleSettings",
                      ),
                    }),
                  ),
                );
          },
        ),
        So = (0, Zl.K)(
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
      var wo = a(99445);
      const xo = (0, v.W)((e) => ({
          separator: (0, g.AH)({
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
        ko = () => {
          const e = xo();
          return r.createElement("div", {
            className: e.separator,
            role: "none",
          });
        };
      var Po = a(544),
        No = a(89336),
        Mo = a(73890),
        Lo = a(81858),
        jo = Object.defineProperty,
        _o = Object.defineProperties,
        To = Object.getOwnPropertyDescriptors,
        Ro = Object.getOwnPropertySymbols,
        Do = Object.prototype.hasOwnProperty,
        Bo = Object.prototype.propertyIsEnumerable,
        Ho = (e, t, a) =>
          t in e
            ? jo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Fo = (e, t) => {
          for (var a in t || (t = {})) Do.call(t, a) && Ho(e, a, t[a]);
          if (Ro) for (var a of Ro(t)) Bo.call(t, a) && Ho(e, a, t[a]);
          return e;
        },
        zo = (e, t) => _o(e, To(t));
      const Uo = (0, v.W)((e, { isEnabledEDSPhase1: t }) => ({
          root: (0, g.AH)({ position: "relative" }),
          submenu: (0, g.AH)({ position: "absolute" }),
          icon: t
            ? (0, g.AH)({ display: "flex" })
            : (0, g.AH)((0, ue.hp)(), Fo({ display: "flex" }, (0, ue.S$)(10))),
        })),
        Vo = (e) => {
          var t = e,
            { subMenu: a, selected: l, disabled: o } = t,
            i = ((e, t) => {
              var a = {};
              for (var r in e)
                Do.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Ro)
                for (var r of Ro(e))
                  t.indexOf(r) < 0 && Bo.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["subMenu", "selected", "disabled"]);
          const c = (0, s.useSelector)(K.k),
            d = Uo({ isEnabledEDSPhase1: c }),
            m = (0, yl.Qo)(),
            u = (0, r.useRef)(),
            [p, g] = n().useState(!1),
            [b, E] = n().useState(null),
            [v, f] = n().useState(null),
            {
              styles: y,
              attributes: h,
              update: C,
            } = (0, Po.E)(b, v, {
              placement: m ? "left-start" : "right-start",
              modifiers: [
                { name: "offset", options: { offset: [-10, -5] } },
                { name: "computeStyles", options: { gpuAcceleration: !0 } },
                { name: "eventListeners", enabled: p },
              ],
            });
          (0, Lo.N)(() => {
            p && C && C();
          }, [p]);
          const A = () => {
              clearTimeout(u.current), g(!0);
            },
            O = () => {
              clearTimeout(u.current),
                (u.current = setTimeout(() => {
                  g(!1);
                }, 200));
            };
          return n().createElement(
            "div",
            {
              ref: E,
              className: d.root,
              onMouseLeave: o ? void 0 : O,
              onKeyDown: o
                ? void 0
                : (e) => {
                    e.key === Nn.nC.Tab &&
                      b &&
                      requestAnimationFrame(() => {
                        b.querySelector("button:focus") || O();
                      });
                  },
              role: "none",
              "data-testid": "MenuItemWithSubMenu",
            },
            n().createElement(
              In.T,
              zo(Fo({ selected: l || p }, i), {
                "aria-expanded": p,
                onMouseOver: o ? void 0 : A,
                onKeyDown: o
                  ? void 0
                  : (e) => {
                      e.key === Nn.nC.Enter && g(!p),
                        e.key === Nn.nC.Escape && g(!1);
                    },
                horizontal: !0,
                disabled: o,
              }),
              n().createElement(
                "span",
                { className: d.icon },
                c
                  ? n().createElement(No.S, { size: Y.sp.SM })
                  : n().createElement(Mo.u, null),
              ),
            ),
            p &&
              n().createElement(
                "div",
                zo(
                  Fo(
                    {
                      ref: f,
                      className: d.submenu,
                      onMouseOver: A,
                      onFocus: A,
                      style: y.popper,
                    },
                    h.popper,
                  ),
                  { "data-testid": "MenuItemWithSubMenu-submenu" },
                ),
                a,
              ),
          );
        };
      var Wo = Object.defineProperty,
        qo = Object.defineProperties,
        Go = Object.getOwnPropertyDescriptors,
        $o = Object.getOwnPropertySymbols,
        Yo = Object.prototype.hasOwnProperty,
        Jo = Object.prototype.propertyIsEnumerable,
        Ko = (e, t, a) =>
          t in e
            ? Wo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Zo = (e, t) => {
          for (var a in t || (t = {})) Yo.call(t, a) && Ko(e, a, t[a]);
          if ($o) for (var a of $o(t)) Jo.call(t, a) && Ko(e, a, t[a]);
          return e;
        },
        Qo = (e, t) => qo(e, Go(t));
      const Xo = (0, v.W)((e, t) => ({
          root: (0, g.AH)({
            position: "relative",
            height: 310,
            overflow: "hidden",
            pointerEvents: "none",
            width: 380,
            [f.aq.xl]: { width: 420 },
          }),
          libraryCard: (0, g.AH)(
            Qo(
              Zo(
                { position: "absolute", opacity: 0.6 },
                (0, ue.P8)((0, ue.kb)(16), (0, ue.Jh)("left")),
              ),
              {
                top: -110,
                width: 160,
                [f.aq.xl]: { top: -160, width: 190 },
                "&::before": Zo(
                  Qo(Zo({}, Lt.j), {
                    position: "absolute",
                    right: -16,
                    top: -16,
                    left: -16,
                    bottom: -16,
                    borderRadius: ke.YM,
                  }),
                  !t && { backgroundColor: e.backgroundOverlay },
                ),
              },
            ),
          ),
          achievements: (0, g.AH)({ display: "flex", alignItems: "center" }),
          trophyIcon: (0, g.AH)((0, ue.hz)(4), {
            width: 15,
            height: 15,
            fontSize: 14,
            color: e.textSecondary,
          }),
          toggleBtn: (0, g.AH)({ bottom: 20 }),
          menu: (0, g.AH)(
            Qo(Zo({ position: "absolute", top: 140 }, (0, ue.kb)(134)), {
              boxShadow: `0 0 20px 0 ${ke.Fk}`,
              width: 240,
              [f.aq.xl]: { width: 280 },
            }),
          ),
          gradiant: (0, g.AH)({
            position: "absolute",
            width: "100%",
            height: 100,
            background: (0, Ol.gz)({
              direction: { vertical: "top" },
              colors: [(0, Al.LV)(e.background, 0).rgb(), e.background],
            }),
          }),
          cursor: (0, g.AH)(
            Zo({ position: "absolute", bottom: 0 }, (0, ue.kb)(220)),
          ),
        })),
        ei = ({ title: e, imageSrc: t }) => {
          const a = (0, s.useSelector)(K.k),
            r = n().useRef(null),
            l = Xo(a);
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
                n().createElement(fo, {
                  image: n().createElement(Rl, {
                    image: n().createElement(El.o, { alt: e, src: t }),
                  }),
                  title: n().createElement("span", null, e),
                  achievements: n().createElement(
                    "div",
                    { className: l.achievements },
                    n().createElement(
                      "div",
                      { className: l.trophyIcon },
                      n().createElement(So, null),
                    ),
                    n().createElement(
                      U.A,
                      { textLevel: W.qo.SECONDARY },
                      "33/100",
                    ),
                  ),
                  subtitle: n().createElement(Dl.h8, null),
                  renderSettingsMenu: ({ button: e }) =>
                    n().createElement(
                      "div",
                      { className: (0, g.cx)(l.toggleBtn, e) },
                      n().createElement(Io, null),
                    ),
                }),
              ),
              n().createElement(
                "div",
                { className: l.menu },
                n().createElement(
                  Rn.W,
                  { dense: !0, noBorder: !0 },
                  n().createElement(wo.D, {
                    title: n().createElement(se.A, {
                      code: "diesel.library.settings.go_to_store_page",
                    }),
                  }),
                  n().createElement(ko, null),
                  n().createElement(wo.D, {
                    title: n().createElement(se.A, {
                      code: "diesel.library.settings.add_to_favorites",
                    }),
                  }),
                  n().createElement(Vo, {
                    title: n().createElement(se.A, {
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
                n().createElement(ho, null),
              ),
            )
          );
        };
      var ti = a(3903),
        ai = a(42209);
      const ri = ({
          libraryItemTitle: e,
          libraryItemImageSrc: t = "",
          onButtonClick: a,
        }) => {
          const r = (0, ai.B2)(),
            l = e || r("diesel.main.navigation.epic_games") || "";
          return n().createElement(Cl, {
            image: n().createElement(ei, { title: l, imageSrc: t }),
            title: n().createElement(se.A, {
              code: "egstore.library.collections.empty_collection_custom.title",
            }),
            buttonText: n().createElement(se.A, {
              code: "egstore.library.collections.empty_collection_custom.button",
            }),
            onButtonClick: a,
          });
        },
        ni = ({ onActionClick: e }) => {
          const { records: t } = Sa(),
            a = n().useMemo(() => {
              var e;
              const a = Math.floor(Math.random() * t.length - 1);
              return null == (e = t[a]) ? void 0 : e.catalogItem;
            }, [t]),
            r = n().useMemo(() => (0, ti.cG)(a), [a]);
          return n().createElement(ri, {
            libraryItemTitle: null == a ? void 0 : a.title,
            libraryItemImageSrc: r,
            onButtonClick: e,
          });
        },
        li = (0, Zl.K)(
          r.createElement("path", {
            d: "M20.49 5.397C19.482 4.466 18.162 4 16.842 4c-1.32 0-2.64.466-3.647 1.397L12 6.503l-1.196-1.106C9.797 4.466 8.477 4 7.158 4c-1.32 0-2.64.466-3.647 1.397-2.013 1.861-2.015 4.878-.005 6.741L11.984 20l.016-.015.017.015 8.477-7.862c2.01-1.864 2.008-4.88-.005-6.74z",
          }),
          "Heart",
        ),
        oi = ({ onActionClick: e }) =>
          n().createElement(Cl, {
            image: n().createElement(
              "div",
              { style: { fontSize: 36 } },
              n().createElement(li, null),
            ),
            title: n().createElement(se.A, {
              code: "egstore.library.collections.empty_collection_favorites.title",
            }),
            subtitle: n().createElement(se.A, {
              code: "egstore.library.collections.empty_collection_favorites.text",
            }),
            buttonText: n().createElement(se.A, {
              code: "egstore.library.collections.empty_collection_favorites.button",
            }),
            onButtonClick: e,
          });
      var ii = a(80882),
        ci = a(36106),
        si = a(53401);
      const di = ({
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
            ci.A,
            {
              "data-testid": `library-filter-section-${a}`,
              renderTitle: ({ isCollapsed: t, toggleCollapsed: a }) => (
                o && !t && a(),
                n().createElement(si.A, {
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
      var mi = a(88239);
      const ui = ({
          title: e,
          storeTags: t,
          onFilterClick: a,
          activeFilters: r,
          type: l,
        }) =>
          n().createElement(di, {
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
                n().createElement(mi.A, {
                  onClick: () => a({ type: l, name: e.name, id: e.id }),
                  text:
                    l === wa.GENRE || l === wa.FEATURE || l === wa.SUBSCRIPTION
                      ? `${e.name} ${i}`
                      : n().createElement(ai.QB, {
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
        pi = ({ onFilterClick: e, storeTags: t, activeFilters: a }) =>
          n().createElement(ui, {
            title: n().createElement(ai.QB, {
              code: "diesel.store.browse.categories",
            }),
            storeTags: t || [],
            onFilterClick: e,
            activeFilters: a,
            type: wa.CATEGORY,
          });
      var gi = a(68196),
        bi = a(13758),
        Ei = a(93541),
        vi = a(36233),
        fi = a(53631);
      const yi = () => {
        const e = (0, bi.useLocation)(),
          t = (0, s.useDispatch)(),
          a = (0, r.useMemo)(
            () => new URLSearchParams(e.search || ""),
            [e.search],
          ),
          n = (0, r.useCallback)(() => {
            t(
              (0, Ei.VC)((0, vi.generateRoutePath)(fi.A.LibraryPath), {
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
            v = g && u ? { catalogItemId: g, sandboxId: u } : void 0,
            f = null != (c = a.get("collectionId")) ? c : void 0;
          return {
            action: s,
            item: b,
            sort: d,
            resetQueryParams: n,
            offerItem: E,
            catalogItem: v,
            collectionId: f,
          };
        }, [a, n]);
      };
      var hi = a(55326);
      const Ci = (0, v.W)((e) => ({
          icon: (0, g.AH)((0, ue.zG)(10), {
            svg: {
              fontSize: 10,
              path: { stroke: e.textPrimary, strokeWidth: 2 },
            },
          }),
        })),
        Ai = ({ onFilterClick: e }) => {
          const t = Ci(),
            { resetQueryParams: a } = yi(),
            { value: r } = pr({
              keyFn: () => gr.V,
              localStorageEnabled: !0,
              initialValue: "",
            });
          return n().createElement(ci.A, {
            "data-testid": "library-filter-section-custom-results",
            renderTitle: () =>
              n().createElement(mi.A, {
                onClick: () => {
                  e({ type: wa.CATALOG_ITEM_ID, name: wa.CATALOG_ITEM_ID }),
                    a();
                },
                text: n().createElement(hi.A, {
                  lines: 2,
                  text: null != r ? r : "",
                }),
                checked: !0,
                icon: n().createElement(
                  "div",
                  { className: t.icon },
                  n().createElement(gi.U, null),
                ),
              }),
          });
        },
        Oi = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(ui, {
            title: n().createElement(ai.QB, {
              code: "diesel.store.browse.features",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: wa.FEATURE,
          }),
        Ii = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(ui, {
            title: n().createElement(ai.QB, {
              code: "diesel.store.browse.genre",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: wa.GENRE,
          });
      var Si = Object.defineProperty,
        wi = Object.defineProperties,
        xi = Object.getOwnPropertyDescriptors,
        ki = Object.getOwnPropertySymbols,
        Pi = Object.prototype.hasOwnProperty,
        Ni = Object.prototype.propertyIsEnumerable,
        Mi = (e, t, a) =>
          t in e
            ? Si(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Li = ({
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
                for (var a in t || (t = {})) Pi.call(t, a) && Mi(e, a, t[a]);
                if (ki) for (var a of ki(t)) Ni.call(t, a) && Mi(e, a, t[a]);
                return e;
              })({}, n)),
              wi(o, xi({ message: r, count: 1 })));
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
        ji = (e, t) =>
          e.map((e) => {
            const a = t.find((t) => t.id === e.id);
            return a || ((e.count = 0), e);
          }),
        _i = [
          {
            id: `${Pa.GAMES}-filter`,
            name: Pa.GAMES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${Pa.ENGINES}-filter`,
            name: Pa.ENGINES,
            groupName: "category",
            count: 0,
          },
          {
            id: `${Pa.SOFTWARE}-filter`,
            name: Pa.SOFTWARE,
            groupName: "category",
            count: 0,
          },
          {
            id: `${Pa.DIGITAL_EXTRAS}-filter`,
            name: Pa.DIGITAL_EXTRAS,
            groupName: "category",
            count: 0,
          },
        ],
        Ti = (e, t) => {
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
              Object.values(Pa).forEach((e) => {
                if (l.includes(e)) {
                  const r = t(`egstore.library.filter_side_panel.${e}`) || "";
                  Li({
                    tagsForDisplay: a,
                    currentTags: _i,
                    name: e,
                    message: r,
                  });
                }
              });
            }),
            a
          );
        },
        Ri = () => {
          const { selectedCollectionId: e } = Br(),
            { records: t, recordsAll: a } = Sa(e),
            n = (0, ai.B2)();
          return (0, r.useMemo)(() => {
            const r = Ti(a, n);
            return e !== kt.V.ALL
              ? ((e, t, a) => {
                  const r = Ti(e, t);
                  return ji(a, r);
                })(t, n, r)
              : r;
          }, [a, e, t]);
        };
      var Di = Object.defineProperty,
        Bi = Object.defineProperties,
        Hi = Object.getOwnPropertyDescriptors,
        Fi = Object.getOwnPropertySymbols,
        zi = Object.prototype.hasOwnProperty,
        Ui = Object.prototype.propertyIsEnumerable,
        Vi = (e, t, a) =>
          t in e
            ? Di(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Wi = (e, t) => {
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
                      zi.call(t, a) && Vi(e, a, t[a]);
                    if (Fi)
                      for (var a of Fi(t)) Ui.call(t, a) && Vi(e, a, t[a]);
                    return e;
                  })({}, t)),
                  (l = { count: a[t.id] }),
                  Bi(n, Hi(l))),
                ),
              e
            );
          }, []);
        },
        qi = ({
          records: e,
          collectionRecords: t,
          storeTags: a = [],
          selectedCollectionId: r,
        }) => {
          const n = Wi(e, a);
          return r !== kt.V.ALL
            ? ((e, t, a) => {
                const r = Wi(t, a);
                return ji(e, r);
              })(n, t, a)
            : n;
        };
      var Gi = a(18939),
        $i = a(21884);
      const Yi = a.n($i)()`
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
      var Ji = a(81060),
        Ki = a(31315),
        Zi = (e, t, a) =>
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
      const Qi = (0, Wa.lp)("storeTagApi"),
        Xi = (e, t) => `${e}:${t}`,
        ec = (e, t) =>
          Zi(
            void 0,
            [e, t],
            function* (
              e,
              { groupName: t, isOnline: a, locale: r, sortBy: n, sortDir: l },
            ) {
              const { cached: o, isExpired: i } = yield ((e) =>
                Zi(void 0, [e], function* ({ groupName: e, locale: t }) {
                  try {
                    const a = yield qa.WE.get(Xi(e, t)),
                      r = (0, Wa.wU)((null == a ? void 0 : a._expiresAt) || 0);
                    return {
                      cached: null == a ? void 0 : a.data,
                      isExpired: r,
                    };
                  } catch (e) {
                    return (
                      Qi.warn("getCachedStoreTags", "failed IDB get", {
                        error: e.message,
                      }),
                      { cached: void 0, isExpired: !0 }
                    );
                  }
                }))({ groupName: t, locale: r });
              if (o && o.length && !i)
                return (
                  Qi.log("getCachedOrRemote", "using indexedDB", {
                    records: o,
                  }),
                  o
                );
              if (!a)
                return (
                  Qi.log(
                    "getCachedOrRemoteStoreTags",
                    "user is not online, using indexedDB",
                    { records: o },
                  ),
                  o || []
                );
              const c = yield ((e, t) =>
                Zi(
                  void 0,
                  [e, t],
                  function* (
                    e,
                    { groupName: t, locale: a, sortBy: r, sortDir: n },
                  ) {
                    var l, o;
                    try {
                      const i = yield (0, Ki.e)({
                        httpLink: e,
                        query: Yi,
                        variables: {
                          groupName: t,
                          locale: a,
                          sortBy: r,
                          sortDir: n,
                        },
                      });
                      return (
                        Qi.log("getRemoteStoreTags", "success", i),
                        null == (o = null == (l = i.Catalog) ? void 0 : l.tags)
                          ? void 0
                          : o.elements
                      );
                    } catch (e) {
                      return void Qi.warn("getRemoteStoreTags", "failed", {
                        error: e.message,
                      });
                    }
                  },
                ))(e, { groupName: t, locale: r, sortBy: n, sortDir: l });
              return (
                Qi.log("getCachedOrRemoteStoreTags", "using GQL item", {
                  groupName: t,
                  locale: r,
                }),
                c && c.length
                  ? (c &&
                      (Qi.log(
                        "getCachedOrRemoteStoreTags",
                        "updating local cache",
                        { groupName: t },
                      ),
                      (({ groupName: e, tags: t, locale: a }) => {
                        if (!t.length || !a) return;
                        const r = {
                          _expiresAt: (0, Wa.YD)(Gi.$H),
                          groupName: e,
                          id: Xi(e, a),
                          data: t,
                        };
                        qa.WE.put(r).catch((e) => {
                          Qi.warn("setCachedStoreTags", "failed IDB put", {
                            error: e.message,
                          });
                        });
                      })({ groupName: t, tags: c, locale: r })),
                    c)
                  : (Qi.log(
                      "getCachedOrRemoteStoreTags",
                      "remote tags failed to load, using indexedDB",
                      { records: o },
                    ),
                    o || [])
              );
            },
          );
      var tc = a(91419);
      const ac = ({ groupName: e, sortBy: t, sortDir: a }) => {
          const r = (0, d.useLocalizationLocale)(),
            n = (0, c.$)(),
            l = (0, tc.i2)(),
            o = (0, Ji.I)({
              query: Yi,
              variables: { groupName: e, locale: r, sortBy: t, sortDir: a },
            }),
            { data: i } = (0, Ua.IT)(o, () =>
              ec(l, {
                groupName: e,
                isOnline: n,
                locale: r,
                sortBy: t,
                sortDir: a,
              }),
            );
          return i;
        },
        rc = [
          {
            id: `${ka.WINDOWS}-filter`,
            name: ka.WINDOWS,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${ka.WIN32}-filter`,
            name: ka.WIN32,
            groupName: "platform",
            count: 0,
          },
          {
            id: `${ka.MAC}-filter`,
            name: ka.MAC,
            groupName: "platform",
            count: 0,
          },
        ],
        nc = (e, t) => {
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
              Object.values(ka).forEach((e) => {
                if (i.includes(e)) {
                  const r = t(`egstore.library.filter_side_panel.${e}`) || "";
                  Li({
                    tagsForDisplay: a,
                    currentTags: rc,
                    name: e,
                    message: r,
                  });
                }
              });
            }),
            a
          );
        },
        lc = () => {
          const { selectedCollectionId: e } = Br(),
            { records: t, recordsAll: a } = Sa(e),
            n = (0, d.useLocalization)();
          return (0, r.useMemo)(() => {
            const r = nc(a, n);
            return e !== kt.V.ALL
              ? ((e, t, a) => {
                  const r = nc(e, t);
                  return ji(a, r);
                })(t, n, r)
              : r;
          }, [a, e, t]);
        },
        oc = (...e) => {
          if (e.length < 2) return e[0];
          const [t, a, ...r] = e;
          if (!t.length || !a.length) return [];
          const n = t.filter((e) => a.includes(e));
          return oc([...new Set(n)], ...r);
        },
        ic = ({ onFilterClick: e, activeFilters: t, numberOfItems: a = 0 }) => {
          const r = !!t && t.includes(wa.INSTALLED),
            l = 0 === a;
          let o;
          return (
            (o = l && r ? "(0)" : l ? "" : `(${a})`),
            n().createElement(ci.A, {
              "data-testid": "library-filter-section-installed",
              renderTitle: () =>
                n().createElement(mi.A, {
                  onClick: () => e({ type: wa.INSTALLED, name: wa.INSTALLED }),
                  text: n().createElement(ai.QB, {
                    code: "egstore.library.filter_side_panel.installed",
                    args: [o],
                  }),
                  checked: r,
                  disabled: l,
                }),
            })
          );
        };
      var cc = a(26445);
      const sc = n().forwardRef(({ onChange: e, onClear: t, value: a }, r) => {
          const l = (0, d.useLocalization)();
          return n().createElement(cc.A, {
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
        dc = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(ui, {
            title: n().createElement(ai.QB, {
              code: "diesel.products.about.meta.platform",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: wa.PLATFORM,
          }),
        mc = ({ onFilterClick: e, activeFilters: t, storeTags: a }) =>
          n().createElement(ui, {
            title: n().createElement(ai.QB, {
              code: "diesel.store.browse.subscription",
            }),
            storeTags: a || [],
            onFilterClick: e,
            activeFilters: t,
            type: wa.SUBSCRIPTION,
          });
      var uc = a(86831);
      const pc = (0, v.W)((e) => ({
          titleDiv: (0, g.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 7,
            "& > button": { paddingTop: 0, paddingBottom: 0 },
          }),
          keywordFilter: (0, g.AH)({
            padding: "12px 0",
            margin: "18px 12px 6px 12px",
            borderBottom: `1px solid ${e.backgroundOverlay}`,
          }),
        })),
        gc = ({
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
          const d = pc();
          return n().createElement(
            uc.A,
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
        bc = { padding: "10px 0", marginLeft: 12 },
        Ec = { paddingBottom: 10, marginLeft: 12 },
        vc = ({ animation: e }) =>
          n().createElement(
            "div",
            { style: bc },
            n().createElement(we.EA, { animation: e, height: 14, width: 100 }),
          ),
        fc = ({ animation: e }) =>
          n().createElement(gc, {
            sectionTitle: n().createElement(
              "div",
              { style: Ec },
              n().createElement(we.EA, { animation: e, height: 14, width: 50 }),
            ),
            filterByKeyword: n().createElement(we.EA, {
              animation: e,
              height: 40,
              width: 160,
            }),
            genres: n().createElement(
              ci.A,
              {
                renderTitle: () =>
                  n().createElement(
                    "div",
                    { style: bc },
                    n().createElement(we.EA, {
                      animation: e,
                      height: 14,
                      width: 50,
                    }),
                  ),
              },
              n().createElement(vc, { animation: e }),
              n().createElement(vc, { animation: e }),
              n().createElement(vc, { animation: e }),
            ),
          });
      var yc = a(98207),
        hc = a(36484);
      const Cc = () => {
          const {
              selectedFilters: e,
              resetFilters: t,
              keywordValue: a,
              setKeywordValue: l,
              numberActiveFilters: o,
              onFilterClick: i,
            } = Nr(),
            { selectedCollectionId: c } = Br(),
            { records: d } = Sa(c),
            m = (0, s.useSelector)(br.Si),
            u = (0, s.useSelector)(Er.xA),
            { resetQueryParams: p } = yi(),
            g = Ri(),
            b = lc(),
            E = (() => {
              const { selectedCollectionId: e } = Br(),
                t = ac({ groupName: wa.GENRE, sortBy: Gi.b3, sortDir: Gi.NZ }),
                { records: a, recordsAll: n } = Sa(e);
              return (0, r.useMemo)(
                () =>
                  qi({
                    records: n,
                    collectionRecords: a,
                    storeTags: t,
                    selectedCollectionId: e,
                  }),
                [n, a, t, e],
              );
            })(),
            v = (() => {
              const { selectedCollectionId: e } = Br(),
                t = ac({
                  groupName: wa.FEATURE,
                  sortBy: Gi.b3,
                  sortDir: Gi.NZ,
                }),
                a = ac({
                  groupName: "epicfeature",
                  sortBy: Gi.b3,
                  sortDir: Gi.NZ,
                }),
                n = (0, r.useMemo)(() => {
                  if (t && a) return [...a, ...t];
                }, [t, a]),
                { records: l, recordsAll: o } = Sa(e);
              return (0, r.useMemo)(
                () =>
                  qi({
                    records: o,
                    collectionRecords: l,
                    storeTags: n,
                    selectedCollectionId: e,
                  }),
                [o, l, n, e],
              );
            })(),
            f = (() => {
              const { selectedCollectionId: e } = Br(),
                { records: t } = Sa(e),
                a = (0, s.useSelector)(br.AL),
                n = (0, s.useSelector)(Er.xA),
                l = (0, r.useMemo)(() => t.map((e) => e.relationshipId), [t]);
              return (0, r.useMemo)(
                () =>
                  a.map((e) => {
                    var t;
                    const a = n[e.relationshipId]
                      ? oc(n[e.relationshipId], l)
                      : [];
                    return (
                      a.push(e.relationshipId),
                      {
                        id: e.relationshipId,
                        name:
                          (null == (t = null == e ? void 0 : e.catalogItem)
                            ? void 0
                            : t.title) || e.relationshipId,
                        groupName: wa.SUBSCRIPTION,
                        count: (null == a ? void 0 : a.length) || 0,
                      }
                    );
                  }),
                [a, l, n],
              );
            })(),
            y = n().useMemo(
              () =>
                La({
                  items: d,
                  filterTable: u,
                  installedRecords: m.latestValue,
                }).length,
              [d, u, m.latestValue],
            ),
            [h, C] = (0, r.useState)(a),
            [A] = (0, ii.A)(h, 100, { trailing: !0 });
          n().useEffect(() => {
            l(null != A ? A : "");
          }, [A]),
            n().useEffect(() => {
              a !== A && C(a);
            }, [a]);
          return n().createElement(gc, {
            sectionTitle: n().createElement(
              n().Fragment,
              null,
              n().createElement(hc.A, {
                text: n().createElement(se.A, {
                  code: "diesel.store.browse.filters",
                  args: o > 0 ? [`(${o})`] : [""],
                }),
              }),
              o > 0 &&
                n().createElement(yc.A, {
                  onClick: () => {
                    t(), p();
                  },
                  text: n().createElement(se.A, {
                    code: "diesel.store.browse.reset",
                  }),
                }),
            ),
            filterByKeyword: n().createElement(sc, {
              onChange: (e) => C(e.target.value),
              onClear: () => {
                C(""), l("");
              },
              value: h,
            }),
            installed: n().createElement(ic, {
              onFilterClick: i,
              activeFilters: e[wa.INSTALLED],
              numberOfItems: y,
            }),
            customResults: e[wa.CATALOG_ITEM_ID].length
              ? n().createElement(Ai, { onFilterClick: i })
              : null,
            genres: E.length
              ? n().createElement(Ii, {
                  onFilterClick: i,
                  storeTags: E,
                  activeFilters: e[wa.GENRE],
                })
              : null,
            features: v.length
              ? n().createElement(Oi, {
                  onFilterClick: i,
                  storeTags: v,
                  activeFilters: e[wa.FEATURE],
                })
              : null,
            categories: g.length
              ? n().createElement(pi, {
                  onFilterClick: i,
                  storeTags: g,
                  activeFilters: e[wa.CATEGORY],
                })
              : null,
            platforms: b.length
              ? n().createElement(dc, {
                  onFilterClick: i,
                  storeTags: b,
                  activeFilters: e[wa.PLATFORM],
                })
              : null,
            subscriptions: f.length
              ? n().createElement(mc, {
                  onFilterClick: i,
                  storeTags: f,
                  activeFilters: e[wa.SUBSCRIPTION],
                })
              : null,
          });
        },
        Ac = () =>
          n().createElement(
            i.tY,
            { fallback: n().createElement(fc, null) },
            n().createElement(Cc, null),
          ),
        Oc = (0, Zl.K)(
          r.createElement("path", {
            d: "M5 4a1 1 0 00-1 1v5.2a1 1 0 001 1h5.2a1 1 0 001-1V5a1 1 0 00-1-1H5zm8.8 0a1 1 0 00-1 1v5.2a1 1 0 001 1H19a1 1 0 001-1V5a1 1 0 00-1-1h-5.2zM4 13.8a1 1 0 011-1h5.2a1 1 0 011 1V19a1 1 0 01-1 1H5a1 1 0 01-1-1v-5.2zm9.8-1a1 1 0 00-1 1V19a1 1 0 001 1H19a1 1 0 001-1v-5.2a1 1 0 00-1-1h-5.2z",
          }),
          "Library",
        ),
        Ic = (0, Zl.K)(
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22 2H8v2h14V2zm0 18H8v2h14v-2zM8 11h14v2H8v-2zm-2.5 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
          }),
          "List",
        );
      var Sc = a(49912),
        wc = Object.defineProperty,
        xc = Object.defineProperties,
        kc = Object.getOwnPropertyDescriptors,
        Pc = Object.getOwnPropertySymbols,
        Nc = Object.prototype.hasOwnProperty,
        Mc = Object.prototype.propertyIsEnumerable,
        Lc = (e, t, a) =>
          t in e
            ? wc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        jc = (e, t) => {
          for (var a in t || (t = {})) Nc.call(t, a) && Lc(e, a, t[a]);
          if (Pc) for (var a of Pc(t)) Mc.call(t, a) && Lc(e, a, t[a]);
          return e;
        };
      const _c = (0, v.W)((e, { isGridSelected: t, isEnabledEDSPhase1: a }) => {
          return {
            gridSelected: (0, g.AH)(
              ((r = jc(
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
                (0, ue.hz)(3),
              )),
              (n = {
                "&::after, &::hover": t
                  ? { backgroundColor: "transparent", opacity: 0 }
                  : {},
              }),
              xc(r, kc(n))),
            ),
            listSelected: (0, g.AH)({
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
            listIcon: (0, g.AH)(
              jc(
                {},
                a && { svg: { fill: t ? e.textPrimary : J.eM.selectDefault } },
              ),
            ),
            gridIcon: (0, g.AH)(
              jc(
                { fontSize: 24 },
                a && { svg: { fill: t ? J.eM.selectDefault : e.textPrimary } },
              ),
            ),
          };
          var r, n;
        }),
        Tc = ({ value: e, onChange: t }) => {
          const a = (0, s.useSelector)(K.k),
            n = e === gr.p5.Grid,
            l = _c({ isGridSelected: n, isEnabledEDSPhase1: a }),
            o = r.useCallback(() => t(gr.p5.Grid), [t]),
            i = r.useCallback(() => t(gr.p5.List), [t]);
          return r.createElement(
            b.a,
            null,
            r.createElement(
              Sc.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-grid-layout",
                  eventLabel: "library-hubs-grid-layout",
                  eventValue: e,
                },
              },
              r.createElement(
                mt.K,
                {
                  "aria-label": "grid",
                  disabled: e === gr.p5.Grid,
                  buttonWidth: z.Rj.AUTO,
                  buttonHeight: z.eL.DENSED,
                  onClick: o,
                  variantClassName: l.gridSelected,
                },
                r.createElement(
                  "span",
                  { className: l.gridIcon },
                  r.createElement(Oc, null),
                ),
              ),
            ),
            r.createElement(
              Sc.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-list-layout",
                  eventLabel: "library-hubs-list-layout",
                  eventValue: e,
                },
              },
              r.createElement(
                mt.K,
                {
                  "aria-label": "list",
                  disabled: e === gr.p5.List,
                  buttonWidth: z.Rj.AUTO,
                  buttonHeight: z.eL.DENSED,
                  onClick: i,
                  variantClassName: l.listSelected,
                },
                r.createElement(
                  "span",
                  { className: l.listIcon },
                  r.createElement(Ic, null),
                ),
              ),
            ),
          );
        },
        Rc = (0, v.W)(() => ({
          sortMenu: (0, g.AH)((0, ue.hz)(10), { minWidth: 210 }),
          rightPadding: (0, g.AH)((0, ue.hz)(3)),
        })),
        Dc = ({ layoutToggle: e, sortMenu: t }) => {
          const a = Rc();
          return r.createElement(
            b.a,
            { alignItems: E.ep.Center, justify: E.cn.SpaceBetween },
            r.createElement(
              "div",
              { className: a.sortMenu, "data-testid": "sort-menu" },
              t,
            ),
            r.createElement(
              b.a,
              { justify: E.cn.End, "data-testid": "layout-toggle" },
              e,
            ),
          );
        };
      var Bc = a(42678),
        Hc = Object.defineProperty,
        Fc = Object.defineProperties,
        zc = Object.getOwnPropertyDescriptors,
        Uc = Object.getOwnPropertySymbols,
        Vc = Object.prototype.hasOwnProperty,
        Wc = Object.prototype.propertyIsEnumerable,
        qc = (e, t, a) =>
          t in e
            ? Hc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Gc = (e) => {
        const t = ze(
            Er.GL,
            Er._c,
            ((r = ((e, t) => {
              for (var a in t || (t = {})) Vc.call(t, a) && qc(e, a, t[a]);
              if (Uc) for (var a of Uc(t)) Wc.call(t, a) && qc(e, a, t[a]);
              return e;
            })({}, e)),
            (n = { enabled: !1 !== (null == e ? void 0 : e.enabled) }),
            Fc(r, zc(n))),
          ),
          { data: a } = t;
        var r, n;
        return {
          totalPlaytime: a,
          query: ((e, t) => {
            var a = {};
            for (var r in e) Vc.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
            if (null != e && Uc)
              for (var r of Uc(e))
                t.indexOf(r) < 0 && Wc.call(e, r) && (a[r] = e[r]);
            return a;
          })(t, ["data"]),
        };
      };
      var $c = a(98850),
        Yc = Object.defineProperty,
        Jc = Object.defineProperties,
        Kc = Object.getOwnPropertyDescriptors,
        Zc = Object.getOwnPropertySymbols,
        Qc = Object.prototype.hasOwnProperty,
        Xc = Object.prototype.propertyIsEnumerable,
        es = (e, t, a) =>
          t in e
            ? Yc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ts = [
          gr.r3.Recent_Played,
          gr.r3.Recent_Purchased,
          gr.r3.Alphabetical_ASC,
          gr.r3.Alphabetical_DESC,
          gr.r3.Time_Played,
        ],
        as = (e) => {
          const { value: t, setValue: a } = pr(
            ((n = ((e, t) => {
              for (var a in t || (t = {})) Qc.call(t, a) && es(e, a, t[a]);
              if (Zc) for (var a of Zc(t)) Xc.call(t, a) && es(e, a, t[a]);
              return e;
            })({}, e)),
            (l = { initialValue: gr.r3.Alphabetical_ASC, allowedValues: ts }),
            Jc(n, Kc(l))),
          );
          var n, l;
          const { recordsMap: o } = (0, Bc.M)(),
            { totalPlaytime: i } = Gc(),
            c = (0, r.useCallback)(
              (e) => {
                switch (t) {
                  case gr.r3.Alphabetical_ASC:
                    return (0, $c.sQ)(e, gr.UE.ASC);
                  case gr.r3.Alphabetical_DESC:
                    return (0, $c.sQ)(e, gr.UE.DESC);
                  case gr.r3.Recent_Played:
                    return (0, $c.Hc)(o, e);
                  case gr.r3.Recent_Purchased:
                    return (0, $c.l7)(e);
                  case gr.r3.Time_Played:
                    return (0, $c.ok)(e, i);
                  default:
                    return e;
                }
              },
              [o, t, i],
            );
          return { sortType: t, setSortType: a, applySortType: c };
        };
      var rs = a(77108);
      const ns = ({ sortType: e = gr.r3.Alphabetical_ASC, onChange: t }) => {
        const a = (0, ai.B2)(),
          n = r.useMemo(
            () =>
              ((e) => [
                {
                  label:
                    e("egstore.library.sort.recently_played") ||
                    gr.r3.Recent_Played,
                  value: gr.r3.Recent_Played,
                },
                {
                  label:
                    e("egstore.library.sort.recently_purchased") ||
                    gr.r3.Recent_Purchased,
                  value: gr.r3.Recent_Purchased,
                },
                {
                  label:
                    e("egstore.library.sort.alphabetical.asc") ||
                    gr.r3.Alphabetical_ASC,
                  value: gr.r3.Alphabetical_ASC,
                },
                {
                  label:
                    e("egstore.library.sort.alphabetical.desc") ||
                    gr.r3.Alphabetical_DESC,
                  value: gr.r3.Alphabetical_DESC,
                },
                {
                  label:
                    e("egstore.library.sort.time_played") || gr.r3.Time_Played,
                  value: gr.r3.Time_Played,
                },
              ])(a),
            [a],
          );
        return r.createElement(rs.w, {
          id: "sort-dropdown",
          label: r.createElement(ai.QB, { code: "egstore.library.sort.title" }),
          options: n,
          selectedValue: e,
          onChange: t,
        });
      };
      var ls = a(70491),
        os = a(40466);
      const is = {
          root: (0, g.AH)({ display: "flex", gap: 8 }),
          selected: (0, g.AH)({
            backgroundColor: `${ke.Dz} !important`,
            opacity: "1 !important",
            svg: { fill: J.eM.selectDefault },
          }),
        },
        cs = ({ value: e, onChange: t }) => {
          var a, n;
          const l = (0, d.useLocalization)(),
            o = r.useCallback(() => t(gr.p5.Grid), [t]),
            i = r.useCallback(() => t(gr.p5.List), [t]);
          return r.createElement(
            "div",
            { className: is.root },
            r.createElement(
              Sc.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-grid-layout",
                  eventLabel: "library-hubs-grid-layout",
                  eventValue: e,
                },
              },
              r.createElement(cl.$, {
                variant: Y.ml.GHOST,
                disabled: e === gr.p5.Grid,
                icon: r.createElement(ls.j, null),
                "aria-label":
                  null != (a = l("egstore.library.toggle.view_grid")) ? a : "",
                onClick: o,
                className: e === gr.p5.Grid ? is.selected : void 0,
              }),
            ),
            r.createElement(
              Sc.Iu,
              {
                event: {
                  eventAction: "library-hubs-click-list-layout",
                  eventLabel: "library-hubs-list-layout",
                  eventValue: e,
                },
              },
              r.createElement(cl.$, {
                variant: Y.ml.GHOST,
                disabled: e === gr.p5.List,
                icon: r.createElement(os.m, null),
                "aria-label":
                  null != (n = l("egstore.library.toggle.view_list")) ? n : "",
                onClick: i,
                className: e === gr.p5.List ? is.selected : void 0,
              }),
            ),
          );
        },
        ss = ({
          layoutType: e = gr.p5.Grid,
          onLayoutChange: t,
          onSortChange: a,
          sortType: n = gr.r3.Alphabetical_ASC,
        }) => {
          const l = (0, s.useSelector)(K.k),
            o = () =>
              l
                ? r.createElement(cs, { value: e, onChange: t })
                : r.createElement(Tc, { value: e, onChange: t });
          return r.createElement(Dc, {
            sortMenu: r.createElement(ns, { sortType: n, onChange: a }),
            layoutToggle: r.createElement(o, null),
          });
        };
      var ds = Object.defineProperty,
        ms = Object.defineProperties,
        us = Object.getOwnPropertyDescriptors,
        ps = Object.getOwnPropertySymbols,
        gs = Object.prototype.hasOwnProperty,
        bs = Object.prototype.propertyIsEnumerable,
        Es = (e, t, a) =>
          t in e
            ? ds(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const vs = () => {
        const e = (0, s.useSelector)(vr.n9),
          t = {
            keyFn: () => `${gr.FN}_${e || Na.c.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          {
            value: a,
            setValue: r,
            query: n,
          } = pr(
            ((l = ((e, t) => {
              for (var a in t || (t = {})) gs.call(t, a) && Es(e, a, t[a]);
              if (ps) for (var a of ps(t)) bs.call(t, a) && Es(e, a, t[a]);
              return e;
            })({}, t)),
            (o = {
              initialValue: gr.p5.Grid,
              allowedValues: [gr.p5.Grid, gr.p5.List],
            }),
            ms(l, us(o))),
          );
        var l, o;
        return { layoutType: a, setLayoutType: r, isLoaded: n.isSuccess };
      };
      var fs = Object.defineProperty,
        ys = Object.defineProperties,
        hs = Object.getOwnPropertyDescriptors,
        Cs = Object.getOwnPropertySymbols,
        As = Object.prototype.hasOwnProperty,
        Os = Object.prototype.propertyIsEnumerable,
        Is = (e, t, a) =>
          t in e
            ? fs(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ss = (e, t) => {
          for (var a in t || (t = {})) As.call(t, a) && Is(e, a, t[a]);
          if (Cs) for (var a of Cs(t)) Os.call(t, a) && Is(e, a, t[a]);
          return e;
        },
        ws = (e, t) => ys(e, hs(t));
      const xs = (Bl.vr - 24) / 2,
        ks = (Bl.uf - 24) / 2,
        Ps = (0, v.W)((e, t) => {
          const a = (0, g.AH)({ width: "100%" });
          return {
            component: a,
            root: (0, g.AH)(
              ws(Ss({}, (0, gt.Jp)("background-color")), {
                position: "relative",
                backgroundColor: t ? J.Lh.elevated.high.default : e.level1,
                border: 0,
                borderRadius: t ? ke.YM : q.Vq,
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
                "&.hasHover:hover, &.active": {
                  backgroundColor: t ? J.Lh.elevated.high.hover : e.level2,
                  color: t ? void 0 : e.accentText,
                },
              }),
            ),
            topRow: (0, g.AH)({
              height: Bl.yj,
              display: "flex",
              alignItems: "center",
            }),
            darken: (0, g.AH)({ opacity: 0.5 }),
            image: (0, g.AH)({
              position: "relative",
              borderRadius: q.Vq,
              margin: 10,
              height: Bl.vr,
              width: Bl.uf,
              backgroundColor: e.backgroundOverlay,
              "&::after": ws(
                Ss(Ss(Ss({}, (0, gt.Jp)("opacity")), Sl.A), Lt.j),
                {
                  borderRadius: q.Vq,
                  backgroundColor: ke.ON,
                  opacity: 0,
                  ".hasHover:hover &, .active &": { opacity: 0.15 },
                },
              ),
            }),
            title: (0, g.AH)((0, ue.wv)(5), {
              "button:hover &, button:focus &": { textDecoration: "underline" },
            }),
            settings: (0, g.AH)((0, ue.P8)((0, ue.wv)(10), (0, ue.zG)(35)), {
              position: "relative",
              height: 34,
              display: "flex",
              alignItems: "center",
            }),
            settingsButton: (0, g.AH)({ width: 32, height: 24 }),
            settingsMenu: (0, g.AH)({
              width: "max-content",
              minWidth: t ? 190 : 280,
              [f.aq.lg]: { minWidth: t ? 190 : 315 },
              [f.aq.xl]: { minWidth: t ? 190 : 340 },
            }),
            settingsSpacer: (0, g.AH)({ width: 77, height: "100%" }),
            favoriteDiv: (0, g.AH)(
              ws(Ss({ top: xs }, (0, ue.pG)(ks)), {
                [`.${a}:hover &`]: { opacity: 1 },
              }),
            ),
            infoText: (0, g.AH)({
              fontSize: 12,
              color: t ? e.textSecondary : e.textPrimary,
            }),
          };
        }),
        Ns = ({
          achievements: e,
          active: t,
          additionalInfo: a,
          badges: n,
          contextMenu: l,
          darken: o,
          disabled: i,
          forwardedRef: c,
          hasHover: d,
          hasUpdate: m,
          image: u,
          installSize: v,
          onClick: f,
          onContextMenu: y,
          onKeyDown: h,
          playtime: C,
          renderFavorite: A,
          renderSettingsMenu: O,
          rowFooter: I,
          subtitle: S,
          title: w,
        }) => {
          const x = (0, s.useSelector)(K.k),
            k = Ps(x),
            P = (0, g.cx)(k.root, { active: t, hasHover: d, [k.darken]: o }),
            N = () =>
              x
                ? r.createElement(
                    p.E,
                    { variant: Y.ZJ.HSM, color: Y.Uf.PRIMARY },
                    r.createElement("div", { className: k.title }, w),
                  )
                : r.createElement(
                    de.Ay,
                    { textLevel: W.qo.PRIMARY },
                    r.createElement("div", { className: k.title }, w),
                  ),
            M = r.useMemo(
              () =>
                f && d
                  ? r.createElement(
                      Nt.A,
                      { onClick: f, "data-testid": "card-btn", disabled: i },
                      r.createElement(N, null),
                      a,
                      S,
                    )
                  : r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(N, null),
                      a,
                      S,
                    ),
              [w, a, d, f],
            ),
            L = r.createElement(
              "span",
              { style: x ? { color: J.UM.secondary } : void 0 },
              "-",
            );
          return r.createElement(
            "div",
            {
              className: k.component,
              ref: c,
              onContextMenu: y,
              onKeyDown: h,
              "data-testid": "card",
            },
            r.createElement(
              "div",
              { className: P },
              r.createElement(
                "div",
                { className: k.topRow },
                r.createElement("div", { className: k.image }, u),
                r.createElement(
                  j,
                  { justify: E.cn.SpaceBetween },
                  r.createElement(_, { xs: 4, alignSelf: E.W4.Center }, M),
                  r.createElement(
                    _,
                    { xs: 2, alignSelf: E.W4.Center },
                    r.createElement(b.a, { centerContent: !0 }, e),
                  ),
                  r.createElement(
                    _,
                    { xs: 2, alignSelf: E.W4.Center },
                    r.createElement(
                      b.a,
                      { centerContent: !0 },
                      null != n ? n : L,
                    ),
                  ),
                  r.createElement(
                    _,
                    { xs: 2, alignSelf: E.W4.Center },
                    r.createElement(
                      b.a,
                      { centerContent: !0 },
                      r.createElement("div", { className: k.infoText }, C),
                    ),
                  ),
                  r.createElement(
                    _,
                    { xs: 2, alignSelf: E.W4.Center },
                    r.createElement(
                      b.a,
                      { centerContent: !0 },
                      r.createElement("div", { className: k.infoText }, v),
                    ),
                  ),
                ),
                r.createElement(Kl, {
                  favorite: A && A(k.favoriteDiv),
                  update: m ? r.createElement(oo, null) : void 0,
                }),
                O
                  ? r.createElement(
                      "div",
                      { className: k.settings },
                      O({ button: k.settingsButton, menu: k.settingsMenu }),
                    )
                  : r.createElement("div", { className: k.settingsSpacer }),
                l,
              ),
              I,
            ),
          );
        };
      var Ms = Object.defineProperty,
        Ls = Object.defineProperties,
        js = Object.getOwnPropertyDescriptors,
        _s = Object.getOwnPropertySymbols,
        Ts = Object.prototype.hasOwnProperty,
        Rs = Object.prototype.propertyIsEnumerable,
        Ds = (e, t, a) =>
          t in e
            ? Ms(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Bs = (e, t) => {
          for (var a in t || (t = {})) Ts.call(t, a) && Ds(e, a, t[a]);
          if (_s) for (var a of _s(t)) Rs.call(t, a) && Ds(e, a, t[a]);
          return e;
        },
        Hs = (e, t) => Ls(e, js(t));
      const Fs = {
          imageWrapper: (0, g.AH)(
            Hs(Bs({}, (0, ke.ko)(ke.gl.x3x4)), { borderRadius: ke.Vq }),
          ),
          fakeImage: (0, g.AH)(Hs(Bs({}, Sl.A), { height: "auto" })),
        },
        zs =
          ({ Image: e, Layout: t }) =>
          ({ animation: a }) => {
            const n = {
              title: r.createElement(we.EA, {
                variant: we.qd.Text,
                height: 20,
                width: "100%",
                animation: a,
              }),
              subtitle: r.createElement(we.EA, {
                variant: we.qd.Text,
                height: 15,
                width: "50%",
                animation: a,
              }),
              image: r.createElement(e, { animation: a }),
            };
            return r.createElement(t, Bs({}, n));
          },
        Us = zs({
          Image: ({ animation: e }) =>
            r.createElement(
              "div",
              { className: Fs.imageWrapper },
              r.createElement(we.EA, {
                width: "100%",
                className: Fs.fakeImage,
                animation: e,
              }),
            ),
          Layout: fo,
        }),
        Vs = zs({
          Image: ({ animation: e }) =>
            r.createElement(we.EA, {
              width: Bl.uf,
              height: Bl.vr,
              animation: e,
            }),
          Layout: Ns,
        }),
        Ws = ({ animation: e }) =>
          r.createElement(Dc, {
            sortMenu: r.createElement(we.EA, {
              width: 200,
              height: 30,
              animation: e,
            }),
            layoutToggle: r.createElement(
              b.a,
              null,
              r.createElement(we.EA, {
                width: 30,
                height: 30,
                style: { margin: "0 3px" },
                animation: e,
              }),
              r.createElement(we.EA, { width: 30, height: 30, animation: e }),
            ),
          });
      var qs = a(28281),
        Gs = a(84408);
      const $s = (0, v.W)((e, t) => ({
          root: (0, g.AH)({
            position: "relative",
            width: "100%",
            height: "100%",
            border: 0,
            paddingBottom: t > 0 ? 95 : 0,
            [f.aq.lg]: { paddingBottom: t > 0 ? 105 : 0 },
            "& :hover": { backgroundColor: e.backgroundOverlay },
          }),
          body: (0, g.AH)({
            height: "100%",
            paddingBottom: t > 0 ? 0 : "calc(4 / 3 * 41%)",
            borderRadius: ke.Vq,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: e.level1,
          }),
          title: (0, g.AH)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: t > 0 ? 0 : "50%",
            textAlign: "center",
            padding: "0 10px",
            pointerEvents: "none",
          }),
          icon: (0, g.AH)({
            fontSize: 22.5,
            paddingBottom: 13.75,
            [f.aq.lg]: { paddingBottom: 18.75, fontSize: 22.5 },
            [f.aq.xl]: { fontSize: 24 },
          }),
        })),
        Ys = ({ onClick: e, numItems: t, code: a }) => {
          const r = $s(t);
          return n().createElement(
            Nt.A,
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
                  n().createElement(Gs.g, null),
                ),
                n().createElement(
                  de.Ay,
                  { textLevel: W.qo.PRIMARY },
                  n().createElement(se.A, { code: a }),
                ),
              ),
            ),
          );
        };
      var Js = Object.defineProperty,
        Ks = Object.defineProperties,
        Zs = Object.getOwnPropertyDescriptors,
        Qs = Object.getOwnPropertySymbols,
        Xs = Object.prototype.hasOwnProperty,
        ed = Object.prototype.propertyIsEnumerable,
        td = (e, t, a) =>
          t in e
            ? Js(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ad = (e, t) => {
          for (var a in t || (t = {})) Xs.call(t, a) && td(e, a, t[a]);
          if (Qs) for (var a of Qs(t)) ed.call(t, a) && td(e, a, t[a]);
          return e;
        };
      const rd = (0, v.W)((e) => {
          return {
            root: (0, g.AH)({
              position: "relative",
              width: "100%",
              height: "100%",
              border: 0,
              "& :hover": { backgroundColor: e.backgroundOverlay },
            }),
            body: (0, g.AH)({
              height: 75,
              borderRadius: ke.Vq,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: e.level1,
              [f.aq.lg]: { height: 80 },
            }),
            title: (0, g.AH)({
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              pointerEvents: "none",
            }),
            icon: (0, g.AH)(
              ((t = ad({ fontSize: 11.25 }, (0, ue.hz)(12))),
              (a = {
                marginTop: 2,
                [f.aq.lg]: ad({ fontSize: 15, marginTop: 3 }, (0, ue.hz)(12.5)),
              }),
              Ks(t, Zs(a))),
            ),
          };
          var t, a;
        }),
        nd = ({ onClick: e, code: t }) => {
          const a = rd();
          return n().createElement(
            Nt.A,
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
                  n().createElement(Gs.g, null),
                ),
                n().createElement(
                  de.Ay,
                  { textLevel: W.qo.PRIMARY },
                  n().createElement(se.A, { code: t }),
                ),
              ),
            ),
          );
        },
        ld = ({ layout: e, numItems: t }) => {
          const a = (0, s.useDispatch)(),
            r = (0, s.useSelector)(vr.MF),
            l = (0, bi.useLocation)(),
            o = n().useCallback(
              () =>
                r === Na.c.OFFLINE
                  ? a(qs.Ay.requestSignIn(l.pathname))
                  : a((0, Ei.VC)((0, vi.generateRoutePath)("/"))),
              [r],
            ),
            i = n().useMemo(
              () =>
                r === Na.c.OFFLINE
                  ? "diesel.library.cards.shopOffline"
                  : "diesel.library.cards.shop",
              [r],
            );
          return e === gr.p5.Grid
            ? n().createElement(Ys, { onClick: o, numItems: t, code: i })
            : n().createElement(nd, { onClick: o, code: i });
        };
      var od = a(52637);
      const id = (0, v.W)((e) => ({
          root: (0, g.AH)({
            width: "100%",
            borderTop: `1px solid ${e.backgroundOverlay}`,
            padding: "10px 0",
            display: "flex",
          }),
          title: (0, g.AH)((0, ue.S$)(-65)),
          imageSpacer: (0, g.AH)({ width: 65 }),
          settingsSpacer: (0, g.AH)({ width: 77, height: "100%" }),
        })),
        cd = () => {
          const e = id();
          return r.createElement(
            "div",
            { className: e.root },
            r.createElement("div", { className: e.imageSpacer }),
            r.createElement(
              j,
              null,
              r.createElement(
                _,
                { xs: 4 },
                r.createElement(
                  b.a,
                  { className: e.title, fillParent: !0, justify: E.cn.Start },
                  r.createElement(od.A, {
                    code: "egstore.library.hub.product.list.search_placeholder",
                  }),
                ),
              ),
              r.createElement(
                _,
                { xs: 2 },
                r.createElement(
                  b.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(od.A, { code: "egstore.achievements" }),
                ),
              ),
              r.createElement(
                _,
                { xs: 2 },
                r.createElement(
                  b.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(od.A, { code: "diesel.products.addons" }),
                ),
              ),
              r.createElement(
                _,
                { xs: 2 },
                r.createElement(
                  b.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(od.A, {
                    code: "egstore.library.column.timePlayed",
                  }),
                ),
              ),
              r.createElement(
                _,
                { xs: 2 },
                r.createElement(
                  b.a,
                  { fillParent: !0, centerContent: !0 },
                  r.createElement(od.A, {
                    code: "egstore.library.column.size",
                  }),
                ),
              ),
            ),
            r.createElement("div", { className: e.settingsSpacer }),
          );
        },
        sd = (0, v.W)((e) => ({
          root: (0, g.AH)({
            display: "flex",
            flexDirection: "column",
            paddingBottom: 50,
          }),
          header: (0, g.AH)({
            position: "sticky",
            top: 100,
            minHeight: 40,
            margin: "0 -16px 16px -16px",
            padding: "0 16px",
            zIndex: Yl + 1,
            background: e.background,
          }),
          footer: (0, g.AH)({ marginTop: 20, [f.aq.xl]: { marginTop: 30 } }),
          cssGrid: (0, g.AH)({
            display: "grid",
            gap: 32,
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            [f.aq.xl]: {
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            },
            [f.aq.xxl]: {
              gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            },
          }),
          cssList: (0, g.AH)({
            display: "grid",
            gap: 6,
            gridTemplateColumns: "repeat(auto-fill, 100%)",
          }),
        })),
        dd = ({
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
          const m = sd();
          return r.createElement(
            "div",
            {
              className: m.root,
              "data-testid": "ProductListSectionLayout",
              "data-layout": l,
            },
            r.createElement(
              j,
              { spacing: 20 },
              r.createElement(
                _,
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
                  l === gr.p5.List &&
                    !s &&
                    !c &&
                    r.createElement(
                      "div",
                      { "data-testid": "product-list-section-column-header" },
                      r.createElement(cd, null),
                    ),
                  c,
                  s,
                  a &&
                    o &&
                    r.createElement(
                      "div",
                      { className: l === gr.p5.Grid ? m.cssGrid : m.cssList },
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
                            r.createElement(ld, {
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
                  _,
                  { xs: 3, xxl: 2 },
                  r.createElement("aside", null, d),
                ),
            ),
          );
        };
      var md = Object.defineProperty,
        ud = Object.getOwnPropertySymbols,
        pd = Object.prototype.hasOwnProperty,
        gd = Object.prototype.propertyIsEnumerable,
        bd = (e, t, a) =>
          t in e
            ? md(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ed = (e, t) => {
          for (var a in t || (t = {})) pd.call(t, a) && bd(e, a, t[a]);
          if (ud) for (var a of ud(t)) gd.call(t, a) && bd(e, a, t[a]);
          return e;
        };
      const vd = {
          footer: (0, g.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
          }),
          pagination: (0, g.AH)({
            [ke.aq.lg]: Ed({}, (0, ue.hz)(31)),
            [ke.aq.xl]: Ed({}, (0, ue.hz)(42)),
            [ke.aq.maxWidth]: Ed({}, (0, ue.hz)(57)),
          }),
        },
        fd = ({ animation: e }) =>
          n().createElement(
            "div",
            { className: vd.footer },
            n().createElement(we.EA, {
              variant: we.qd.Rect,
              animation: e,
              width: 150,
              height: 30,
            }),
            n().createElement(
              "div",
              { className: vd.pagination },
              n().createElement(we.EA, {
                variant: we.qd.Rect,
                animation: e,
                width: 150,
                height: 30,
              }),
            ),
            n().createElement(we.EA, {
              variant: we.qd.Rect,
              animation: e,
              width: 100,
              height: 30,
            }),
          );
      var yd = a(49788);
      const hd = new Array(12).fill(0).map((e, t) =>
          (0, yd.V5)({
            namespace: "skeleton",
            catalogItemId: `${t}`,
            appName: `app${t}`,
          }),
        ),
        Cd = ({ layout: e, animation: t }) => {
          const a = (0, yl.al)(),
            r = e === gr.p5.Grid ? Us : Vs;
          return n().createElement(dd, {
            header: n().createElement(Ws, { animation: t }),
            footer: n().createElement(fd, { animation: t }),
            items: hd,
            layout: e,
            renderItem: () => n().createElement(r, { animation: t }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: a
              ? null
              : n().createElement(fc, { animation: t }),
          });
        };
      var Ad = a(7093);
      const Od = () => {};
      var Id = a(53540),
        Sd = a(65784),
        wd = a(98929),
        xd = a(15888),
        kd = a(14318),
        Pd = a(6377),
        Nd = a(29329);
      const Md = (e) =>
        Nd.A.trackEvent({
          eventCategory: Sc.XC.EGS_USER_INTERACTION,
          interactionType: Sc.G4.CLICK,
          eventAction: Sc.yn.EGS_ACHIEVEMENTS_LIBRARY_CLICK,
          eventValue: e,
        });
      var Ld = a(63721),
        jd = a(52528);
      var _d = a(84953);
      const Td = (e, t) => {
        const { achievementsLinkTo: a } = (({ sandboxId: e }, t) => ({
          achievementsLinkTo: (0, jd.A)({ sandboxId: e }, t),
        }))({ sandboxId: e }, t);
        return { achievementsLinkTo: a, gotoAchievements: (0, _d.R)(a) };
      };
      var Rd = a(24695),
        Dd = Object.defineProperty,
        Bd = Object.defineProperties,
        Hd = Object.getOwnPropertyDescriptors,
        Fd = Object.getOwnPropertySymbols,
        zd = Object.prototype.hasOwnProperty,
        Ud = Object.prototype.propertyIsEnumerable,
        Vd = (e, t, a) =>
          t in e
            ? Dd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Wd = (e, t) => {
          for (var a in t || (t = {})) zd.call(t, a) && Vd(e, a, t[a]);
          if (Fd) for (var a of Fd(t)) Ud.call(t, a) && Vd(e, a, t[a]);
          return e;
        };
      const qd = (0, v.W)((e, t) => {
          return {
            button: (0, g.AH)({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "15px 10px",
            }),
            progress: (0, g.AH)(
              ((a = Wd(
                { width: 60, borderRadius: 25 },
                !t && { border: "5px solid transparent" },
              )),
              (r = {
                "button:hover &, button:focus &": Wd(
                  Wd(
                    {},
                    !t && {
                      borderColor: ke.RG,
                      "& > [role='progressbar']": { background: ke.RA },
                    },
                  ),
                  t && {
                    "& > [role='progressbar'] > div": {
                      background: J.OS.primary.hover,
                    },
                  },
                ),
                [f.aq.lg]: { width: 75 },
                [f.aq.xxl]: { width: 100 },
              }),
              Bd(a, Hd(r))),
            ),
          };
          var a, r;
        }),
        Gd = ({ percent: e, tooltipText: t }) => {
          const a = (0, s.useSelector)(K.k),
            r = qd(a),
            l = n().useRef(null),
            { namespace: o } = (0, Ld.Jm)(),
            i = (0, s.useDispatch)(),
            { gotoAchievements: c, achievementsLinkTo: d } = Td(o, {
              suspense: !1,
            }),
            m = n().useCallback(() => {
              i(Md(d)), c();
            }, [c, d, i]);
          return n().createElement(
            n().Fragment,
            null,
            n().createElement(
              Nt.A,
              { className: r.button, onClick: m, ref: l },
              n().createElement(
                "div",
                { className: r.progress },
                n().createElement(Rd.k, {
                  percent: e,
                  variant: a ? void 0 : Rd.s.GREYSCALE,
                }),
              ),
            ),
            n().createElement(pt.m, { anchorRef: l, delay: 500 }, t),
          );
        },
        $d = (0, g.AH)({
          verticalAlign: "top",
          "& span": {
            textTransform: "none",
            [ke.aq.lgOnly]: { fontSize: 12 },
            [ke.aq.maxWidth]: { fontSize: 12, lineHeight: "15px" },
          },
        }),
        Yd = ({ children: e }) =>
          (0, s.useSelector)(K.k)
            ? n().createElement(
                p.E,
                {
                  variant: Y.ZJ.UISM,
                  color: Y.Uf.SECONDARY,
                  "data-testid": "AchievementStatusText",
                },
                e,
              )
            : n().createElement(
                "span",
                { className: $d, "data-testid": "AchievementStatusText" },
                n().createElement(U.A, { textLevel: W.qo.SECONDARY }, e),
              );
      var Jd = a(54699),
        Kd = a(98186),
        Zd = a(40440),
        Qd = Object.defineProperty,
        Xd = Object.getOwnPropertySymbols,
        em = Object.prototype.hasOwnProperty,
        tm = Object.prototype.propertyIsEnumerable,
        am = (e, t, a) =>
          t in e
            ? Qd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        rm = (e, t) => {
          for (var a in t || (t = {})) em.call(t, a) && am(e, a, t[a]);
          if (Xd) for (var a of Xd(t)) tm.call(t, a) && am(e, a, t[a]);
          return e;
        };
      const nm = (0, v.W)(() => ({
          status: (0, g.AH)({ display: "flex", alignItems: "center" }),
          icon: (0, g.AH)(rm({}, (0, ue.hz)(4))),
        })),
        lm = ({ totalValue: e, progressionValue: t, platinumEarned: a }) => {
          const n = nm();
          return r.createElement(
            "div",
            { className: n.status, "data-testid": "AchievementsStatus" },
            a &&
              r.createElement(
                "div",
                { className: n.icon },
                r.createElement(Jd.A, {
                  icon: Zd.A.PLATINUM_TROPHY,
                  size: Kd.A.XXXSMALL,
                }),
              ),
            r.createElement(
              Yd,
              null,
              r.createElement(ai.QB, {
                code: "egstore.achievements.achievements",
                args: [t, e],
              }),
            ),
          );
        };
      var om = a(95060);
      const im = (e = "", t = "", a = "") => {
        const r = (0, om.O)(e, t, a);
        return Boolean(null == r ? void 0 : r.owned);
      };
      var cm = Object.defineProperty,
        sm = Object.defineProperties,
        dm = Object.getOwnPropertyDescriptors,
        mm = Object.getOwnPropertySymbols,
        um = Object.prototype.hasOwnProperty,
        pm = Object.prototype.propertyIsEnumerable,
        gm = (e, t, a) =>
          t in e
            ? cm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        bm = (e, t) => {
          for (var a in t || (t = {})) um.call(t, a) && gm(e, a, t[a]);
          if (mm) for (var a of mm(t)) pm.call(t, a) && gm(e, a, t[a]);
          return e;
        };
      const Em = ({ isGridView: e }) => {
          const t = (0, s.useSelector)(wd.ET),
            { namespace: a, catalogItemId: n, appName: l } = (0, Ld.Jm)(),
            o = (0, om.O)(a, n, l),
            i = im(a, n, l),
            d = (0, s.useSelector)(Sd.n9) || "",
            m = (0, c.$)(),
            u =
              i &&
              (null == o ? void 0 : o.catalogItem) &&
              !(0, ea.mX)(o.catalogItem.categories) &&
              !(0, ea.zl)(o.catalogItem.categories) &&
              !(0, ea.sH)(o.catalogItem.categories),
            { data: p } = (0, kd.T)(
              { epicAccountId: d, sandboxId: a },
              { enabled: m && i },
            ),
            { productAchievements: g } = (0, xd.k)(
              { sandboxId: a },
              { enabled: Boolean(m && a) && i },
            ),
            b = p
              ? ((E = bm({}, p)), sm(E, dm({ totalXP: 0 })))
              : {
                  achievementSets: [],
                  totalXP: 0,
                  totalUnlocked: 0,
                  playerAwards: [],
                };
          var E;
          const v =
              null != g
                ? g
                : {
                    achievementSets: [],
                    totalProductXP: 0,
                    totalAchievements: 0,
                  },
            {
              platinum: f,
              totalAchievements: y,
              totalUnlocked: h,
            } = (0, Pd.rP)(v, b, t),
            C = r.useMemo(() => (y > 0 ? h / y : 0), [h, y]);
          return u && y > 0
            ? e
              ? r.createElement(lm, {
                  totalValue: y,
                  progressionValue: h,
                  platinumEarned: f,
                })
              : r.createElement(Gd, { percent: C, tooltipText: `${h}/${y}` })
            : null;
        },
        vm = (e) =>
          r.createElement(
            i.tY,
            { fallback: null },
            r.createElement(Em, bm({}, e)),
          );
      var fm = a(54232),
        ym = a(45189),
        hm = a(60725);
      const Cm = () => {
          const e = (0, s.useDispatch)();
          return (0, r.useCallback)(
            (t, a) => {
              e((0, Ue.pz)({ collection: t, item: a }));
            },
            [e],
          );
        },
        Am = ({ disabled: e, onClick: t }) =>
          n().createElement(In.T, {
            horizontal: !0,
            title: n().createElement(se.A, {
              code: "diesel.library.settings.add_to_favorites",
            }),
            onClick: t,
            disabled: e,
          }),
        Om = () => {
          const e = (0, Ld.Jm)(),
            { namespace: t, catalogItemId: a, appName: r } = e,
            { setActiveMenu: l } = (0, On.R)(),
            o = (0, c.$)({ suspense: !1 }),
            i = el(),
            s = (0, om.O)(t, a, r),
            d = Cm(),
            m = n().useCallback(() => {
              i && s && d(i, s), l(void 0);
            }, [d, i, s, l]);
          return n().createElement(Am, { onClick: m, disabled: !o });
        },
        Im = (e) => {
          const t = Object.values(e);
          return !!t.length && t.every(Boolean);
        },
        Sm = (e, t) => {
          const { collections: a = [] } = Ke(t),
            n = (0, s.useSelector)(Ue.fM),
            l = (0, Pt.S)(),
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
                            e.catalogItemId === t.catalogId
                        )(e),
                      )),
                    t
                  );
                }, {}),
              [e, a, n],
            ),
            i = (0, r.useMemo)(() => Im(o), [o]),
            c = (0, r.useMemo)(() => Im((0, h.A)([l], o)), [l, o]);
          return {
            foundInCollectionMap: o,
            isInAllCollections: i,
            isInAllCollectionsIgnoreFavorites: c,
          };
        },
        wm = (e, t, a) => {
          const { foundInCollectionMap: n } = Sm(t, a);
          return (0, r.useMemo)(() => Boolean(e && n[e]), [n, e]);
        };
      var xm = a(92138);
      const km = (0, Zl.K)(
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.707 7.707 9 18.414l-4.707-4.707 1.414-1.414L9 15.586l9.293-9.293 1.414 1.414Z",
        }),
        "Check",
      );
      var Pm = Object.defineProperty,
        Nm = Object.defineProperties,
        Mm = Object.getOwnPropertyDescriptors,
        Lm = Object.getOwnPropertySymbols,
        jm = Object.prototype.hasOwnProperty,
        _m = Object.prototype.propertyIsEnumerable,
        Tm = (e, t, a) =>
          t in e
            ? Pm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Rm = (0, v.W)((e) => ({
          icon: (0, g.AH)({ color: e.textSecondary, fontSize: 24 }),
        })),
        Dm = (e) => {
          var t,
            a = e,
            { collectionName: r } = a,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                jm.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Lm)
                for (var r of Lm(e))
                  t.indexOf(r) < 0 && _m.call(e, r) && (a[r] = e[r]);
              return a;
            })(a, ["collectionName"]);
          return n().createElement(
            In.T,
            ((t = ((e, t) => {
              for (var a in t || (t = {})) jm.call(t, a) && Tm(e, a, t[a]);
              if (Lm) for (var a of Lm(t)) _m.call(t, a) && Tm(e, a, t[a]);
              return e;
            })({}, l)),
            Nm(
              t,
              Mm({ horizontal: !0, title: n().createElement("span", null, r) }),
            )),
          );
        },
        Bm = ({ collectionId: e }) => {
          const t = Rm(),
            a = (0, Ld.Jm)(),
            { namespace: r, catalogItemId: l, appName: o } = a,
            { setActiveMenu: i } = (0, On.R)(),
            d = (0, c.$)({ suspense: !1 }),
            m = nt(e),
            u = (0, om.O)(r, l, o),
            p = Cm(),
            g = wm(e, a),
            b = (0, s.useSelector)(K.k),
            E = n().useCallback(() => {
              m && u && p(m, u), i(void 0);
            }, [p, m, u, i]);
          return b
            ? n().createElement(Dm, {
                collectionName: (null == m ? void 0 : m.name) || "",
                onClick: () => E(),
                disabled: !d || g,
                icon: g ? n().createElement(xm.S, { size: Y.sp.SM }) : void 0,
              })
            : n().createElement(Dm, {
                collectionName: (null == m ? void 0 : m.name) || "",
                onClick: () => E(),
                disabled: !d || g,
                icon: g
                  ? n().createElement(
                      "span",
                      { className: t.icon },
                      n().createElement(km, null),
                    )
                  : void 0,
              });
        };
      var Hm = Object.defineProperty,
        Fm = Object.getOwnPropertySymbols,
        zm = Object.prototype.hasOwnProperty,
        Um = Object.prototype.propertyIsEnumerable,
        Vm = (e, t, a) =>
          t in e
            ? Hm(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Wm = (e) =>
          n().createElement(
            In.T,
            ((e, t) => {
              for (var a in t || (t = {})) zm.call(t, a) && Vm(e, a, t[a]);
              if (Fm) for (var a of Fm(t)) Um.call(t, a) && Vm(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: n().createElement(se.A, {
                  code: "diesel.library.settings.create_collection",
                }),
              },
              e,
            ),
          ),
        qm = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            r = (0, c.$)({ suspense: !1 }),
            { setActiveMenu: l } = (0, On.R)(),
            { openModal: o } = lt(),
            i = (0, s.useDispatch)(),
            d = (0, om.O)(e, t, a),
            m = wt(),
            u = n().useCallback(() => {
              d && i((0, Ue.vl)(d)), o(), l(void 0);
            }, [o, l, d]);
          return n().createElement(Wm, { onClick: u, disabled: !r || !m });
        },
        Gm = (0, v.W)((e, { isEnabledEDSPhase1: t }) => ({
          root: (0, g.AH)({ width: "max-content", minWidth: t ? 190 : 280 }),
        })),
        $m = () => {
          const e = (0, Ld.Jm)(),
            t = (0, s.useSelector)(K.k),
            a = Gm({ isEnabledEDSPhase1: t }),
            l = tl(),
            o = (0, r.useMemo)(() => (null == l ? void 0 : l.length) > 0, [l]),
            { isInAllCollectionsIgnoreFavorites: i } = Sm(e),
            c = o && !i;
          return n().createElement(
            "div",
            { className: a.root },
            n().createElement(
              Rn.W,
              { dense: !0, noBorder: !0 },
              o &&
                l.map(({ collectionId: e }) =>
                  n().createElement(Bm, { key: e, collectionId: e }),
                ),
              c && n().createElement(ko, null),
              n().createElement(qm, null),
            ),
          );
        },
        Ym = ({ subMenu: e, disabled: t }) =>
          n().createElement(Vo, {
            horizontal: !0,
            title: n().createElement(se.A, {
              code: "diesel.library.settings.add_to_collection",
            }),
            subMenu: e,
            disabled: t,
          }),
        Jm = () => {
          const e = (0, Ld.Jm)(),
            t = (0, c.$)({ suspense: !1 }),
            a = wt(),
            { isInAllCollectionsIgnoreFavorites: r } = Sm(e),
            l = !t || (r && !a);
          return n().createElement(Ym, {
            subMenu: n().createElement($m, null),
            disabled: l,
          });
        };
      var Km = a(36878),
        Zm = a(29815);
      const Qm = ({ disabled: e, isUninstalling: t, onClick: a }) =>
          r.createElement(In.T, {
            disabled: e,
            onClick: a,
            title: t
              ? r.createElement(se.A, {
                  code: "diesel.library.settings.cancel_uninstall",
                })
              : r.createElement(se.A, {
                  code: "diesel.library.settings.cancel_install",
                }),
          }),
        Xm = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            { installState: l } = (0, ym.z)(e, t, a),
            o = (0, Km.m)(),
            i = (0, Zm.f)(e, t, a),
            c = r.useMemo(() => (0, hm.Ji)(l), [l]),
            s = (0, hm.Gf)(l),
            d = r.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), n(void 0);
            }, [o, e, t, a, n]);
          return c
            ? r.createElement(Qm, {
                disabled: !i,
                onClick: d,
                isUninstalling: s,
              })
            : null;
        };
      var eu = a(73014);
      const tu = (0, eu.Z)("cancelWaitingRoom"),
        au = ({ onClick: e }) =>
          r.createElement(In.T, {
            onClick: e,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.cancel_waiting_room",
            }),
          }),
        ru = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            { installState: l } = (0, ym.z)(e, t, a),
            o = tu(),
            i = r.useMemo(() => (0, hm.Wl)(l) && (0, hm.iP)(l), [l]),
            c = r.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), n(void 0);
            }, [o, e, t, a, n]);
          return i ? r.createElement(au, { onClick: c }) : null;
        };
      var nu = a(86257);
      const lu = ({ onClick: e, disabled: t }) =>
          r.createElement(In.T, {
            onClick: e,
            disabled: t,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.explore_addons",
            }),
          }),
        ou = () => {
          const { namespace: e } = (0, Ld.Jm)(),
            { setActiveMenu: t } = (0, On.R)(),
            { gotoAllAddons: a, allAddonsLinkTo: n } = (0, nu.h)(e, {
              suspense: !1,
            }),
            l = r.useCallback(() => {
              t(void 0), a();
            }, [t, a]);
          return r.createElement(lu, { onClick: l, disabled: !n });
        };
      var iu = a(3969),
        cu = a(28854);
      var su = a(44169);
      const du = ({ onClick: e, disabled: t }) =>
          r.createElement(In.T, {
            onClick: e,
            disabled: t,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.explore_mods",
            }),
          }),
        mu = () => {
          const { namespace: e } = (0, Ld.Jm)(),
            { setActiveMenu: t } = (0, On.R)(),
            { gotoAllMods: a, allModsLinkTo: n } = (0, su.b)(e, {
              suspense: !1,
            }),
            l = r.useCallback(() => {
              t(void 0), a();
            }, [t, a]);
          return r.createElement(du, { onClick: l, disabled: !n });
        };
      var uu = a(80683),
        pu = a(30845);
      const gu = (e, t, a, n, l) => {
        const { isModsEnabled: o = !1 } = (0, pu.A)(
            { productId: n, store: "EGS" },
            l,
          ),
          i = (0, uu.f)(e, t, a);
        return (0, r.useMemo)(
          () =>
            ((e, t) => !(!e || !(0, ea.zf)(null == t ? void 0 : t.categories)))(
              o,
              i,
            ),
          [i, o],
        );
      };
      var bu = a(10958);
      const Eu = ({ onClick: e, disabled: t }) =>
          r.createElement(In.T, {
            onClick: e,
            disabled: t,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.explore_subs",
            }),
          }),
        vu = () => {
          const { namespace: e } = (0, Ld.Jm)(),
            { setActiveMenu: t } = (0, On.R)(),
            { gotoSubsIncludes: a, subsIncludesLinkTo: n } = ((e, t) => {
              const { linkTo: a } = (0, bu.J)({ sandboxId: e }, t);
              return { subsIncludesLinkTo: a, gotoSubsIncludes: (0, _d.R)(a) };
            })(e, { suspense: !1 }),
            l = r.useCallback(() => {
              t(void 0), a();
            }, [t, a]);
          return r.createElement(Eu, { onClick: l, disabled: !n });
        };
      var fu = a(48234),
        yu = a(29964),
        hu = a(78063),
        Cu = a(62605),
        Au = a(32091),
        Ou = a(64114),
        Iu = a(77246),
        Su = a(9585),
        wu = a(82054),
        xu = a(15319);
      const ku = /^extraLaunchOption_.*_Name$/,
        Pu = (e, t) => {
          const a = (e && e.key) || "",
            r = (t && t.key) || "";
          return a.localeCompare(r);
        },
        Nu = (e, t) =>
          e
            .reduce((e, a) => {
              const { customAttributes: r } = a.catalogItem || {};
              return (
                r &&
                  r.forEach((n) => {
                    const { key: l, value: o } = n;
                    if (ku.test(l) && o) {
                      const [n] = l.split(
                        Su.fK.EXTRA_LAUNCH_OPTION_NAME_SUFFIX,
                      );
                      ((e) => {
                        const { customAttributes: t, key: a, platform: r } = e,
                          n = `${a}${Su.fK.EXTRA_LAUNCH_OPTION_PLATFORM_RESTRICTION_SUFFIX}`,
                          l = `${a}${Su.fK.EXTRA_LAUNCH_OPTION_ARGS_SUFFIX}`,
                          o = (0, wu.G)(n, t),
                          i = o
                            ? (0, yu.A)(
                                (0, Kt.A)(hu.A, Cu.A),
                                (0, Au.A)(",", o),
                              )
                            : [],
                          c = !!(0, wu.G)(l, t),
                          s = !o || (0, Ou.A)((0, Cu.A)(r), i);
                        return c && s;
                      })({ customAttributes: r, key: n, platform: t }) &&
                        e.push({
                          id: `${a.relationshipId}:${n}`,
                          key: n,
                          name: o,
                          params: (0, Iu.A)(
                            ["namespace", "catalogItemId", "appName"],
                            a,
                          ),
                        });
                    }
                  }),
                e
              );
            }, [])
            .sort(Pu);
      var Mu = a(94189),
        Lu = a(30493);
      const ju = (e, t, a) => {
          const n = (0, uu.f)(e, t, a);
          return (0, r.useMemo)(
            () => (0, Lu.q)(null == n ? void 0 : n.customAttributes),
            [null == n ? void 0 : n.customAttributes],
          );
        },
        _u = (e, t) => {
          const a = (0, wu.G)(iu.CustomProp.PARTNER_LINK_TYPE, t),
            r = (0, wu.G)(iu.CustomProp.PARTNER_LINK_ID, t);
          return (0, wu.J)(a) === (0, wu.J)(e) && r ? r : void 0;
        };
      var Tu = a(80378),
        Ru = a(80446),
        Du = a(27721),
        Bu = Object.defineProperty,
        Hu = Object.defineProperties,
        Fu = Object.getOwnPropertyDescriptors,
        zu = Object.getOwnPropertySymbols,
        Uu = Object.prototype.hasOwnProperty,
        Vu = Object.prototype.propertyIsEnumerable,
        Wu = (e, t, a) =>
          t in e
            ? Bu(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const qu = (e = [], t) => {
        const a = (0, Du.r)(e.map((e) => _u(Tu.t.Ubisoft, e))),
          n = (0, Ru.Kq)(
            a,
            ((l = ((e, t) => {
              for (var a in t || (t = {})) Uu.call(t, a) && Wu(e, a, t[a]);
              if (zu) for (var a of zu(t)) Vu.call(t, a) && Wu(e, a, t[a]);
              return e;
            })({}, t)),
            (o = {
              enabled:
                Boolean(null == a ? void 0 : a.length) &&
                !1 !== (null == t ? void 0 : t.enabled),
            }),
            Hu(l, Fu(o))),
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
      var Gu = a(24621),
        $u = a(58003),
        Yu = a(94228),
        Ju = a(44135);
      const Ku = (e = "", t = "", a = "") => {
        const { installState: n } = (0, ym.z)(e, t, a),
          l = im(e, t, a);
        return (0, r.useMemo)(
          () => ((e, t = !1) => !!e && (0, hm.GM)(e) && !t)(n, l),
          [n, l],
        );
      };
      var Zu = a(91249),
        Qu = a(10831),
        Xu = a(46351);
      const ep = () => {
          const e = (0, s.useSelector)(Sd.h8);
          return (0, r.useMemo)(
            () => ((e) => Boolean((0, Xu.h)(Qu.W.Ubisoft, e)))(e),
            [e],
          );
        },
        tp = (e = "", t = "", a = "") => {
          const n = (0, Gu.b)(e, t, a),
            l = (0, s.useSelector)(vr.MF),
            o = (0, $u.Lo)(e, t, a),
            i = ((e = "", t = "", a = "") => {
              const { installState: n } = (0, ym.z)(e, t, a),
                l = im(e, t, a);
              return (0, r.useMemo)(
                () => !(!n || n.serverstatus !== $t.YN.Offline || l),
                [n, l],
              );
            })(e, t, a),
            c = Ku(e, t, a),
            d = (0, Yu.i)(e, t, a),
            m = im(e, t, a),
            u = ju(e, t, a),
            p = ((e, t, a) => {
              const n = (0, om.O)(e, t, a);
              return (0, r.useMemo)(
                () =>
                  (null == n ? void 0 : n.recordType) === gr.ee.SUBSCRIPTION,
                [null == n ? void 0 : n.recordType],
              );
            })(e, t, a),
            g = ep(),
            b = ((e, t, a) => {
              const n = (0, xu.t)(e, t, a, {
                  includeMainGameItem: !0,
                  includeHiddenAddons: !0,
                }),
                l = (0, r.useMemo)(
                  () =>
                    (0, Du.r)(
                      n.map((e) => {
                        var t;
                        return null == (t = e.catalogItem)
                          ? void 0
                          : t.customAttributes;
                      }),
                    ),
                  [n],
                );
              return qu(l, {
                enabled: Boolean(null == l ? void 0 : l.length),
                suspense: !1,
              });
            })(e, t, a),
            { installState: E } = (0, ym.z)(e, t, a),
            v = (0, Ju.Z)(e, t, a);
          return (0, r.useMemo)(
            () =>
              (0, Zu.q)({
                allowMultipleInstances: n,
                authMode: l,
                availableDate: o,
                forceGet: i,
                forceUninstall: c,
                installState: E,
                isSubscription: p,
                isThirdPartyManagedApp: v,
                isUnsupported: d,
                isUplayGame: u,
                isUplayLinked: g,
                isUserEntitledToBuild: m,
                needsUplayRedemption: b,
              }),
            [n, l, o, i, c, E, p, v, d, u, g, m, b],
          );
        };
      var ap = a(51701);
      const rp = ({ options: e, onClick: t }) =>
          r.createElement(
            r.Fragment,
            null,
            e.map(({ id: e, key: a, name: n, params: l }) =>
              r.createElement(In.T, {
                key: e,
                onClick: () => t(l, a),
                title: r.createElement(se.A, { code: n }),
              }),
            ),
          ),
        np = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            l = ((e = "", t = "", a = "") => {
              const [n, ...l] = (0, xu.t)(e, t, a, { includeMainGameItem: !0 }),
                o = (0, s.useSelector)(br.Si),
                i = (0, s.useSelector)(vr.md);
              return (0, r.useMemo)(() => {
                var e;
                const t =
                  (null == (e = o.latestValue)
                    ? void 0
                    : e[n.relationshipId]) && n.catalogItem
                    ? Nu([n], i)
                    : [];
                let a = [];
                return (
                  (0, $t.Ay)().supportsLaunchableAddonsFlow() &&
                    (a = (l || []).reduce((e, t) => {
                      var a;
                      const r =
                        null == (a = o.latestValue)
                          ? void 0
                          : a[t.relationshipId];
                      return t.catalogItem && r && e.push(t), e;
                    }, [])),
                  [...t, ...(a.length ? Nu(a, i) : [])]
                );
              }, [o.latestValue, i, n, l]);
            })(e, t, a),
            o = tp(e, t, a),
            i = (0, fu.Y)(),
            { isThirdPartyManaged: c, triggerLaunchToast: d } = (0, Mu.K)(
              e,
              t,
              a,
            ),
            m = r.useCallback(
              (e, t) => {
                i({
                  namespace: e.namespace,
                  catalogId: e.catalogItemId,
                  appName: e.appName,
                  optionKey: t,
                }).then((e) => {
                  e && c && d();
                }),
                  n(void 0);
              },
              [i, e, t, a, n, c, d],
            );
          return (o === ap.r.CanLaunch ||
            o === ap.r.CanLaunchRestricted ||
            o === ap.r.CanLaunchMultiple) &&
            l.length > 0
            ? r.createElement(rp, { options: l, onClick: m })
            : null;
        },
        lp = ({ onClick: e, disabled: t }) =>
          r.createElement(In.T, {
            onClick: e,
            disabled: t,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.game_achievements",
            }),
          }),
        op = () => {
          const { namespace: e } = (0, Ld.Jm)(),
            { setActiveMenu: t } = (0, On.R)(),
            a = (0, s.useDispatch)(),
            { gotoAchievements: n, achievementsLinkTo: l } = Td(e, {
              suspense: !1,
            }),
            o = r.useCallback(() => {
              t(void 0), a(Md(l)), n();
            }, [n, l, a, t]);
          return r.createElement(lp, { onClick: o, disabled: !l });
        };
      var ip = a(88234);
      var cp = a(69243);
      const sp = (e, t) => {
          const { productHomeLinkTo: a } = (0, cp.z)({ sandboxId: e }, t);
          return { productHomeLinkTo: a, gotoProductHome: (0, _d.R)(a) };
        },
        dp = ({ onClick: e, disabled: t }) =>
          r.createElement(In.T, {
            onClick: e,
            disabled: t,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.go_to_store_page",
            }),
          }),
        mp = () => {
          const { namespace: e } = (0, Ld.Jm)(),
            { setActiveMenu: t } = (0, On.R)(),
            { gotoProductHome: a, productHomeLinkTo: n } = sp(e, {
              suspense: !1,
            }),
            l = r.useCallback(() => {
              t(void 0), a();
            }, [a, t]);
          return r.createElement(dp, { onClick: l, disabled: !n });
        },
        up = (0, eu.Z)("showInstallerOptions"),
        pp = ({ onClick: e }) =>
          r.createElement(In.T, {
            onClick: e,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.options",
            }),
          }),
        gp = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            { installState: l } = (0, ym.z)(e, t, a),
            o = up(),
            i = r.useCallback(() => {
              o({ namespace: e, catalogId: t, appName: a }), n(void 0);
            }, [o, e, t, a, n]);
          return r.useMemo(() => (0, hm.Ur)(l), [l])
            ? r.createElement(pp, { onClick: i })
            : null;
        },
        bp = (e) => () => {
          const {
            isOpenById: t,
            openModalById: a,
            closeModalById: n,
            getData: l,
          } = (0, m.k3)();
          return (0, r.useMemo)(
            () => ({
              isOpen: t(e),
              openModal: (t) => a(e, t),
              closeModal: () => n(e),
              cancelModal: () => n(e, m.XY.Cancel),
              getData: () => l(e),
            }),
            [t, a, n, l],
          );
        },
        Ep = ({ title: e, content: t, onCloseClick: a }) => {
          const n = (0, s.useSelector)(K.k),
            l = () =>
              n
                ? r.createElement(H.d, { title: e, onCloseClick: a })
                : r.createElement(
                    H.r,
                    { onCloseClick: a },
                    r.createElement(de.Ay, { weight: de.EU.BOLD }, e),
                  );
          return r.createElement(D.k, {
            header: r.createElement(l, null),
            content: t,
          });
        };
      var vp = Object.defineProperty,
        fp = Object.getOwnPropertySymbols,
        yp = Object.prototype.hasOwnProperty,
        hp = Object.prototype.propertyIsEnumerable,
        Cp = (e, t, a) =>
          t in e
            ? vp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Ap = (e, t) => {
          for (var a in t || (t = {})) yp.call(t, a) && Cp(e, a, t[a]);
          if (fp) for (var a of fp(t)) hp.call(t, a) && Cp(e, a, t[a]);
          return e;
        };
      const Op = {
          icon: (0, g.AH)(Ap({ display: "inherit" }, (0, ue.hz)(14))),
        },
        Ip = (e) => {
          var t = e,
            { title: a, subtitle: n, children: l, icon: o } = t,
            i = ((e, t) => {
              var a = {};
              for (var r in e)
                yp.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && fp)
                for (var r of fp(e))
                  t.indexOf(r) < 0 && hp.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["title", "subtitle", "children", "icon"]);
          return r.createElement(
            wo.D,
            Ap(
              {
                title: r.createElement(
                  b.a,
                  { alignItems: E.ep.Center },
                  r.createElement("div", { className: Op.icon }, o),
                  a,
                ),
                subtitle: n,
              },
              i,
            ),
            l && r.createElement(b.a, { justify: E.cn.End }, l),
          );
        };
      var Sp = a(7949),
        wp = Object.defineProperty,
        xp = Object.defineProperties,
        kp = Object.getOwnPropertyDescriptors,
        Pp = Object.getOwnPropertySymbols,
        Np = Object.prototype.hasOwnProperty,
        Mp = Object.prototype.propertyIsEnumerable,
        Lp = (e, t, a) =>
          t in e
            ? wp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        jp = (e, t) => {
          for (var a in t || (t = {})) Np.call(t, a) && Lp(e, a, t[a]);
          if (Pp) for (var a of Pp(t)) Mp.call(t, a) && Lp(e, a, t[a]);
          return e;
        },
        _p = (e, t) => xp(e, kp(t));
      const Tp = {
          secondaryButton: (0, g.AH)(
            _p(jp({ width: 30, height: 30 }, (0, ue.hz)(14)), {
              "> button": { width: "100%", height: "100%", padding: 0 },
            }),
          ),
        },
        Rp = ({
          title: e,
          subtitle: t,
          icon: a,
          secondaryButton: n,
          primaryButton: l,
          footer: o,
          variant: i = Sp.C.TwoColumn,
        }) => {
          const c = {
              title: e,
              subtitle: t,
              borderRadius: ke.Vq,
              hasBackground: !0,
              footer: o,
            },
            s = r.createElement(
              r.Fragment,
              null,
              r.createElement(
                b.a,
                { alignItems: E.ep.Center },
                n &&
                  r.createElement("div", { className: Tp.secondaryButton }, n),
                l,
              ),
            );
          return a
            ? r.createElement(Ip, _p(jp({ icon: a }, c), { variant: i }), s)
            : r.createElement(wo.D, _p(jp({}, c), { variant: i }), s);
        };
      var Dp = Object.defineProperty,
        Bp = Object.getOwnPropertySymbols,
        Hp = Object.prototype.hasOwnProperty,
        Fp = Object.prototype.propertyIsEnumerable,
        zp = (e, t, a) =>
          t in e
            ? Dp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Up = (e, t) => {
          for (var a in t || (t = {})) Hp.call(t, a) && zp(e, a, t[a]);
          if (Bp) for (var a of Bp(t)) Fp.call(t, a) && zp(e, a, t[a]);
          return e;
        };
      const Vp = (e) =>
        r.createElement(xe, {
          hasHeader: !0,
          titleWidth: 200,
          content: r.createElement(
            Rn.W,
            { noBorder: !0, noShadow: !0, noBackground: !0, spacing: 10 },
            r.createElement(Rp, {
              title: r.createElement(
                we.EA,
                Up({ variant: we.qd.Text, width: 80, height: 20 }, e),
              ),
              icon: r.createElement(we.EA, Up({ width: 20, height: 20 }, e)),
              primaryButton: r.createElement(
                we.EA,
                Up({ width: 100, height: 40 }, e),
              ),
            }),
            r.createElement(Rp, {
              title: r.createElement(
                we.EA,
                Up({ variant: we.qd.Text, width: 180, height: 20 }, e),
              ),
              icon: r.createElement(we.EA, Up({ width: 20, height: 20 }, e)),
              primaryButton: r.createElement(
                we.EA,
                Up({ width: 40, height: 25 }, e),
              ),
            }),
            r.createElement(Rp, {
              title: r.createElement(
                we.EA,
                Up({ variant: we.qd.Text, width: 90, height: 30 }, e),
              ),
              subtitle: r.createElement(
                we.EA,
                Up({ variant: we.qd.Text, width: 200, height: 20 }, e),
              ),
              icon: r.createElement(we.EA, Up({ width: 20, height: 20 }, e)),
              secondaryButton: r.createElement(
                we.EA,
                Up({ variant: we.qd.Circle, width: "100%", height: "100%" }, e),
              ),
              primaryButton: r.createElement(
                we.EA,
                Up({ width: 40, height: 25 }, e),
              ),
            }),
          ),
        });
      var Wp = a(15031),
        qp = a(38981);
      const Gp = (0, v.W)((e) => ({
          button: (0, g.AH)((0, G.HE)(e), {
            position: "relative",
            padding: "2px",
          }),
          toggle: (0, g.AH)({ pointerEvents: "none" }),
        })),
        $p = ({ checked: e, onClick: t, disabled: a, id: n }) => {
          const l = Gp();
          return r.createElement(
            Nt.A,
            { className: l.button, onClick: t, disabled: a },
            r.createElement(qp.A, {
              className: l.toggle,
              checked: e,
              disabled: a,
              id: n,
            }),
          );
        };
      var Yp = a(58361),
        Jp = a(29079),
        Kp = a(36095);
      const Zp = (e = "", t = "", a = "", r = { enabled: !0 }) => {
        const n = (0, s.useSelector)(Yp.xw),
          { data: l, query: o } = (0, Kp.z)({
            bridge: (0, $t.Ay)(),
            method: "getAutoUpdate",
            args: [e, t, a],
            queryKey: Jp.hz.settingDetail(e, t, a, Jp.Mx.AutoUpdate),
            config: { enabled: n && Boolean(e && t && a) && r.enabled },
          });
        return { autoUpdate: l, query: o };
      };
      var Qp = a(82207);
      const Xp = (0, Wa.lp)("useProductBridgeMutation"),
        eg = "setAutoUpdate",
        tg = (
          e = "",
          t = "",
          a = "",
          r = Sc.dE.LIBRARY,
          n = { enabled: !0 },
        ) => {
          const { autoUpdate: l, query: o } = Zp(e, t, a, n),
            { mutateAsync: i } = (0, Ua.n_)((n) => {
              return (
                (i = void 0),
                (c = null),
                (s = function* () {
                  if (l !== n) {
                    Xp.log(eg, {
                      namespace: e,
                      catalogId: t,
                      appName: a,
                      nextAutoUpdate: n,
                    });
                    try {
                      return (
                        yield (0, $t.Ay)().setAutoUpdate(e, t, a, n, r),
                        o.refetch()
                      );
                    } catch (e) {
                      Xp.warn(eg, "error", { error: e.message }), (0, Qp.NE)(e);
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
        ag = () =>
          r.createElement(wo.D, {
            title: r.createElement(we.EA, {
              variant: we.qd.Text,
              width: "80%",
              height: "100%",
            }),
          }),
        rg = ({ disabled: e, checked: t, onClick: a }) => {
          const n = (0, s.useSelector)(K.k);
          return r.createElement(Rp, {
            title: r.createElement(se.A, {
              code: "diesel.library.settings.autoUpdate",
            }),
            icon: n ? r.createElement(Wp.j, null) : r.createElement(Ql, null),
            primaryButton: r.createElement($p, {
              checked: t,
              disabled: e,
              onClick: a,
              id: "autoUpdate-toggle",
            }),
          });
        },
        ng = () => {
          const {
            query: e,
            autoUpdateState: t,
            onClick: a,
          } = (() => {
            const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
              { autoUpdate: n, query: l } = Zp(e, t, a),
              [o, i] = r.useState(Boolean(n)),
              c = tg(e, t, a),
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
            i.tY,
            { fallback: r.createElement(ag, null) },
            r.createElement(rg, {
              disabled: !e.isSuccess,
              checked: t,
              onClick: a,
            }),
          );
        };
      var lg = a(56836),
        og = a(30121);
      const ig = (e = "", t = "", a = "", r = { enabled: !0 }) => {
        const n = (0, s.useSelector)(Yp.xw),
          { data: l = !1, query: o } = (0, Kp.z)({
            bridge: (0, $t.Ay)(),
            method: "getCloudSave",
            args: [e, t, a],
            queryKey: Jp.hz.settingDetail(e, t, a, Jp.Mx.CloudSave),
            config: { enabled: n && Boolean(e && t && a) && r.enabled },
          });
        return { cloudSave: l, query: o };
      };
      const cg = (0, Wa.lp)("useSetProductCloudSave"),
        sg = "setCloudSave",
        dg = (
          e = "",
          t = "",
          a = "",
          r = Sc.dE.LIBRARY,
          n = { enabled: !0 },
        ) => {
          const { cloudSave: l, query: o } = ig(e, t, a, n),
            { mutateAsync: i } = (0, Ua.n_)((n) => {
              return (
                (i = void 0),
                (c = null),
                (s = function* () {
                  if (l === n) return !1;
                  cg.log(sg, {
                    namespace: e,
                    catalogId: t,
                    appName: a,
                    nextCloudSave: n,
                  });
                  try {
                    const l = yield (0, $t.Ay)().setCloudSave(e, t, a, n, r);
                    return o.refetch(), l;
                  } catch (e) {
                    cg.warn(sg, "error", { error: e.message }), (0, Qp.NE)(e);
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
        mg = (0, eu.Z)("syncCloudSave");
      var ug = Object.defineProperty,
        pg = Object.getOwnPropertySymbols,
        gg = Object.prototype.hasOwnProperty,
        bg = Object.prototype.propertyIsEnumerable,
        Eg = (e, t, a) =>
          t in e
            ? ug(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        vg = (e, t) => {
          for (var a in t || (t = {})) gg.call(t, a) && Eg(e, a, t[a]);
          if (pg) for (var a of pg(t)) bg.call(t, a) && Eg(e, a, t[a]);
          return e;
        };
      const fg = (e) => {
          var t = e,
            { icon: a, toolTipCode: n, toolTipDiv: l } = t,
            o = ((e, t) => {
              var a = {};
              for (var r in e)
                gg.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && pg)
                for (var r of pg(e))
                  t.indexOf(r) < 0 && bg.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["icon", "toolTipCode", "toolTipDiv"]);
          const i = r.useRef(null);
          return (0, s.useSelector)(K.k)
            ? r.createElement(
                st.m,
                {
                  label: n ? r.createElement(ai.QB, { code: n || "" }) : l,
                  style: { zIndex: pe.f.toolTip },
                },
                r.createElement(
                  cl.$,
                  vg({ variant: Y.ml.GHOST, size: Y.sp.MD, icon: a }, o),
                ),
              )
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  mt.K,
                  vg(
                    {
                      forwardRef: i,
                      buttonHeight: z.eL.DENSED,
                      buttonWidth: z.Rj.BLOCK,
                      outline: !0,
                      pill: !0,
                      "data-testid": "MenuItemSecondaryButton",
                    },
                    o,
                  ),
                  a,
                ),
                n &&
                  r.createElement(
                    pt.m,
                    { anchorRef: i, zIndex: pe.f.toolTip },
                    r.createElement(ai.QB, { code: n || "" }),
                  ),
              );
        },
        yg = (0, Zl.K)(
          r.createElement("path", {
            d: "M18.784 10.649c-.052 0-.101.005-.152.008C18.084 7.447 15.265 5 11.868 5a6.87 6.87 0 00-6.061 3.608C3.115 8.834 1 11.068 1 13.794c0 2.788 2.214 5.065 4.997 5.2V19h12.787C21.113 19 23 17.13 23 14.825c0-2.306-1.887-4.176-4.216-4.176zM12 17.294l-4.107-4.075h2.665V8.65c0-.38.312-.69.696-.69h1.491c.385 0 .696.31.696.69v4.57h2.666L12 17.294z",
          }),
          "CloudSaved",
        ),
        hg = (0, Zl.K)(
          r.createElement("path", {
            d: "M18.0005 3.9978L14.0005 7.9978H17.0005V14.9978C17.0005 16.0978 16.1005 16.9978 15.0005 16.9978C13.9005 16.9978 13.0005 16.0978 13.0005 14.9978V7.9978C13.0005 5.7878 11.2105 3.9978 9.00049 3.9978C6.79049 3.9978 5.00049 5.7878 5.00049 7.9978V14.9978H2.00049L6.00049 18.9978L10.0005 14.9978H7.00049V7.9978C7.00049 6.8978 7.90049 5.9978 9.00049 5.9978C10.1005 5.9978 11.0005 6.8978 11.0005 7.9978V14.9978C11.0005 17.2078 12.7905 18.9978 15.0005 18.9978C17.2105 18.9978 19.0005 17.2078 19.0005 14.9978V7.9978H22.0005L18.0005 3.9978Z",
          }),
          "Sync",
        );
      var Cg = a(3435);
      const Ag = (0, g.AH)({ pointerEvents: "none" }),
        Og = ({
          onSyncClick: e,
          onToggleClick: t,
          formattedDate: a,
          disabled: r = !1,
          cloudSaveState: l,
        }) => {
          const o = (0, s.useSelector)(K.k);
          return n().createElement(Rp, {
            title: n().createElement(ai.QB, {
              code: "egstore.library.manage_products_modal.cloud_save",
            }),
            subtitle: n().createElement(ai.QB, {
              code: "diesel.library.settings.cloud_sync.desc",
              args: [a],
            }),
            icon: o
              ? n().createElement(lg.g, null)
              : n().createElement(yg, null),
            secondaryButton: n().createElement(fg, {
              icon: o
                ? n().createElement(og.$, { color: Y.tV.CONTRAST })
                : n().createElement(hg, null),
              onClick: e,
              toolTipCode: l ? "diesel.library.settings.cloud_sync" : "",
            }),
            primaryButton: n().createElement($p, {
              className: Ag,
              checked: l,
              onClick: t,
              disabled: r,
              id: "cloudSave-toggle",
            }),
          });
        },
        Ig = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { installState: r } = (0, ym.z)(e, t, a),
            l = mg(),
            o = (0, Cg.a)(),
            { cloudSave: i, query: c } = ig(e, t, a),
            s = dg(e, t, a),
            [d, m] = n().useState(Boolean(i)),
            { closeModal: u } = $b(),
            p = n().useMemo(() => (0, hm.pp)(o, r), [o, r]),
            g = n().useCallback(() => {
              m(!i), s(!i);
            }, [s, m, i]);
          n().useEffect(() => {
            i !== d && m(i);
          }, [i]);
          const b = n().useCallback(() => {
            d && u(), l({ namespace: e, catalogId: t, appName: a });
          }, [d, u, l, e, t, a]);
          return n().createElement(Og, {
            onSyncClick: b,
            formattedDate: p,
            onToggleClick: g,
            disabled: !c.isSuccess,
            cloudSaveState: d,
          });
        };
      var Sg = a(21008);
      const wg = (0, eu.Z)("createShortcut");
      var xg = Object.defineProperty,
        kg = Object.getOwnPropertySymbols,
        Pg = Object.prototype.hasOwnProperty,
        Ng = Object.prototype.propertyIsEnumerable,
        Mg = (e, t, a) =>
          t in e
            ? xg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Lg = (e, t) => {
          for (var a in t || (t = {})) Pg.call(t, a) && Mg(e, a, t[a]);
          if (kg) for (var a of kg(t)) Ng.call(t, a) && Mg(e, a, t[a]);
          return e;
        };
      const jg = (e) => {
          var t = e,
            { children: a } = t,
            n = ((e, t) => {
              var a = {};
              for (var r in e)
                Pg.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && kg)
                for (var r of kg(e))
                  t.indexOf(r) < 0 && Ng.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["children"]);
          return (0, s.useSelector)(K.k)
            ? r.createElement(
                cl.$,
                Lg(
                  {
                    variant: Y.ml.OUTLINE,
                    size: Y.sp.MD,
                    "data-testid": "MenuItemPrimaryButton",
                  },
                  n,
                ),
                a,
              )
            : r.createElement(
                gl.rp,
                Lg(
                  {
                    buttonHeight: z.eL.DENSED,
                    buttonWidth: z.Rj.AUTO,
                    "data-testid": "MenuItemPrimaryButton",
                  },
                  n,
                ),
                a,
              );
        },
        _g = (0, Zl.K)(
          r.createElement("path", {
            d: "M18.864 4H4.136c-.9 0-1.636.72-1.636 1.6v9.6c0 .88.736 1.6 1.636 1.6h5.728v1.6H8.227V20h6.546v-1.6h-1.637v-1.6h5.728c.9 0 1.636-.72 1.636-1.6V5.6c0-.88-.736-1.6-1.636-1.6zm0 11.2H4.136V5.6h14.728v9.6z",
          }),
          "ResolutionExtraLarge",
        ),
        Tg = ({ onClick: e }) => {
          const t = (0, s.useSelector)(K.k);
          return n().createElement(Rp, {
            title: n().createElement(ai.QB, {
              code: "egstore.library.manage_products_modal.create_desktop_shortcut",
            }),
            icon: t
              ? n().createElement(Sg.u, null)
              : n().createElement(_g, null),
            primaryButton: n().createElement(
              jg,
              { onClick: e },
              n().createElement(ai.QB, {
                code: "egstore.library.manage_products_modal.create",
              }),
            ),
          });
        },
        Rg = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { closeModal: r } = $b(),
            l = wg(),
            o = n().useCallback(() => {
              r(),
                l({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: Sc.dE.MANAGE_PRODUCT_MODAL,
                });
            }, [r, l, e, t, a]);
          return n().createElement(Tg, { onClick: o });
        };
      var Dg = a(57953),
        Bg = a(57190);
      const Hg = (0, eu.Z)("showInstallLocation"),
        Fg = (0, eu.S)(
          "uninstall",
          ({
            namespace: e,
            catalogId: t,
            appName: a,
            funnelId: r = Sc.dE.LIBRARY,
            options: n,
          }) => (0, $t.Ay)().uninstall(e, t, a, r, n),
        );
      var zg = Object.defineProperty,
        Ug = Object.getOwnPropertySymbols,
        Vg = Object.prototype.hasOwnProperty,
        Wg = Object.prototype.propertyIsEnumerable,
        qg = (e, t, a) =>
          t in e
            ? zg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Gg = (0, v.W)(() => ({
          tooltip: (0, g.AH)({ textAlign: "left" }),
          warning: (0, g.AH)({ marginTop: 20, maxWidth: 275 }),
        })),
        $g = (e) => {
          const t = Gg();
          return r.createElement(
            pt.m,
            ((e, t) => {
              for (var a in t || (t = {})) Vg.call(t, a) && qg(e, a, t[a]);
              if (Ug) for (var a of Ug(t)) Wg.call(t, a) && qg(e, a, t[a]);
              return e;
            })({}, e),
            r.createElement(
              "div",
              { className: t.tooltip },
              r.createElement(ai.QB, {
                code: "egstore.library.manage_products_modal.install_location",
              }),
              r.createElement(
                "div",
                { className: t.warning },
                r.createElement(ai.QB, {
                  code: "egstore.library.manage_products_modal.install_location_warning",
                }),
              ),
            ),
          );
        },
        Yg = () => {
          const e = Gg();
          return r.createElement(
            "div",
            { className: e.tooltip },
            r.createElement(ai.QB, {
              code: "egstore.library.manage_products_modal.install_location",
            }),
            r.createElement(
              "div",
              { className: e.warning },
              r.createElement(ai.QB, {
                code: "egstore.library.manage_products_modal.install_location_warning",
              }),
            ),
          );
        },
        Jg = ({ title: e, onUninstallClick: t, onCancelClick: a }) =>
          n().createElement(cn._, {
            modalTitle: n().createElement(se.A, {
              code: "diesel.common.smart_button.uninstall",
            }),
            title: n().createElement(se.A, {
              code: "egstore.library.uninstall_modal_confirm.text_question",
              args: [e],
            }),
            subTitle: n().createElement(se.A, {
              code: "egstore.library.uninstall_modal_confirm.text_info",
            }),
            secondaryButton: n().createElement(
              R.u,
              { onClick: a },
              n().createElement(se.A, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: n().createElement(
              T.S,
              { onClick: t },
              n().createElement(se.A, {
                code: "diesel.common.smart_button.uninstall",
              }),
            ),
            onCloseClick: a,
          });
      var Kg = Object.defineProperty,
        Zg = Object.defineProperties,
        Qg = Object.getOwnPropertyDescriptors,
        Xg = Object.getOwnPropertySymbols,
        eb = Object.prototype.hasOwnProperty,
        tb = Object.prototype.propertyIsEnumerable,
        ab = (e, t, a) =>
          t in e
            ? Kg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        rb = (e, t) => {
          for (var a in t || (t = {})) eb.call(t, a) && ab(e, a, t[a]);
          if (Xg) for (var a of Xg(t)) tb.call(t, a) && ab(e, a, t[a]);
          return e;
        },
        nb = (e, t) => Zg(e, Qg(t));
      const lb = (e) =>
        r.createElement(
          xe,
          nb(rb({}, e), {
            hasHeader: !0,
            hasFooter: !0,
            hasPrimaryButton: !0,
            hasSecondaryButton: !0,
            content: r.createElement(
              b.a,
              { alignItems: E.ep.Center, justify: E.cn.Center, fillParent: !0 },
              r.createElement(
                b.a,
                { direction: E.NX.Column, alignItems: E.ep.Center },
                r.createElement(
                  we.EA,
                  rb({ variant: we.qd.Text, width: 500, height: 50 }, e),
                ),
                r.createElement(
                  we.EA,
                  nb(rb({ variant: we.qd.Text, width: 300, height: 50 }, e), {
                    style: { margin: "-10px 0 10px" },
                  }),
                ),
                r.createElement(
                  we.EA,
                  rb({ variant: we.qd.Text, width: 260, height: 30 }, e),
                ),
              ),
            ),
          }),
        );
      var ob = a(11277);
      const ib = bp("uninstall-confirm-modal"),
        cb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            r = (0, ob.q)(e, t, a),
            l = Fg(),
            { closeModal: o, cancelModal: i } = ib(),
            c = n().useCallback(() => {
              o(),
                l({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: Sc.dE.MANAGE_PRODUCT_MODAL,
                  options: { disableConfirmation: !0 },
                });
            }, [o, l, e, t, a]);
          return n().createElement(Jg, {
            title: r,
            onUninstallClick: c,
            onCancelClick: i,
          });
        },
        sb = () => {
          const { isOpen: e, cancelModal: t, getData: a } = ib(),
            r = a();
          return r
            ? n().createElement(
                He.a,
                { isOpen: e, onClose: t },
                n().createElement(
                  i.tY,
                  { fallback: n().createElement(lb, null) },
                  n().createElement(
                    Ld.AZ.Provider,
                    { value: r },
                    n().createElement(cb, null),
                  ),
                ),
              )
            : null;
        },
        db = (e, t, a) => {
          const { installState: n } = (0, ym.z)(e, t, a);
          return (0, r.useMemo)(() => (0, hm.pc)(n), [n]);
        };
      var mb = a(73596),
        ub = a(79715),
        pb = a(9909);
      const gb = (e, t) =>
          (0, yd.V5)({
            namespace: e.namespace,
            catalogid: e.catalogItemId,
            appname: e.appName,
            bshouldbeinstalled: t,
          }),
        bb = () => {},
        Eb = (e = "", t = "", a = "") => {
          const n = (0, pb.b)(e, t, a),
            l = (0, ub.z)(e, t, a),
            o = (0, mb.I)(
              l ? (null == n ? void 0 : n.namespace) : "",
              l ? (null == n ? void 0 : n.catalogItemId) : "",
              l ? (null == n ? void 0 : n.appName) : "",
            );
          return (0, r.useMemo)(() => {
            const r = { namespace: e, catalogItemId: t, appName: a },
              n = (0, $t.Ay)().supportsLaunchableAddonsFlow() && l;
            return {
              isLaunchableAddon: l,
              install: n ? () => o([gb(r, !0)]) : bb,
              uninstall: n ? () => o([gb(r, !1)]) : bb,
            };
          }, [e, t, a, l]);
        };
      var vb = a(99487);
      const fb = (0, Zl.K)(
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6a2 2 0 012-2h7l2 2h9v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm18 2H4v10h16V8z",
          }),
          "FolderEmpty",
        ),
        yb = ({ size: e, onFolderLocationClick: t, onUninstallClick: a }) => {
          const n = (0, s.useSelector)(K.k),
            l = r.useRef(null);
          return r.createElement(Rp, {
            title: r.createElement(ai.QB, {
              code: "egstore.library.manage_products_modal.installation",
            }),
            subtitle: r.createElement(ai.QB, {
              code: "egstore.library.manage_products_modal.install_size",
              args: [e],
            }),
            icon: n ? r.createElement(Dg.y, null) : r.createElement(vb.V, null),
            secondaryButton: r.createElement(
              r.Fragment,
              null,
              r.createElement(fg, {
                forwardRef: l,
                icon: n
                  ? r.createElement(Bg.G, { color: Y.tV.CONTRAST })
                  : r.createElement(fb, null),
                onClick: t,
                toolTipDiv: r.createElement(Yg, null),
              }),
              !n && r.createElement($g, { anchorRef: l }),
            ),
            primaryButton: r.createElement(
              jg,
              { onClick: a },
              r.createElement(ai.QB, {
                code: "diesel.common.smart_button.uninstall",
              }),
            ),
          });
        },
        hb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            n = db(e, t, a),
            { closeModal: l } = $b(),
            { openModal: o } = ib(),
            i = Hg(),
            c = Fg(),
            { isLaunchableAddon: s, uninstall: d } = Eb(e, t, a),
            m = r.useCallback(() => {
              i({ namespace: e, catalogId: t, appName: a });
            }, [i, e, t, a]),
            u = r.useCallback(() => {
              l(),
                s && !(0, $t.Ay)().supportsLaunchableAddonsV2Flow()
                  ? d()
                  : (0, $t.Ay)().supportsWebClientUninstallFlow()
                    ? o({ namespace: e, catalogItemId: t, appName: a })
                    : c({ namespace: e, catalogId: t, appName: a });
            }, [l, o, s, c, d, e, t, a]);
          return r.createElement(yb, {
            size: n,
            onFolderLocationClick: m,
            onUninstallClick: u,
          });
        };
      var Cb = a(50429),
        Ab = a(46023),
        Ob = a(33742);
      const Ib = ({ onClick: e }) => {
          const t = (0, s.useSelector)(K.k);
          return r.createElement(Rp, {
            title: r.createElement(se.A, {
              code: "egstore.library.manage_products_modal.verify_files",
            }),
            icon: t ? r.createElement(Cb.Z, null) : r.createElement(Ob.o, null),
            primaryButton: r.createElement(
              jg,
              { onClick: e },
              r.createElement(se.A, {
                code: "egstore.library.manage_products_modal.verify",
              }),
            ),
          });
        },
        Sb = () => {
          const { closeModal: e } = $b(),
            { namespace: t, catalogItemId: a, appName: n } = (0, Ld.Jm)(),
            l = (0, Ab.B)(),
            o = r.useCallback(() => {
              l({
                namespace: t,
                catalogId: a,
                appName: n,
                funnelId: Sc.dE.MANAGE_PRODUCT_MODAL,
              }),
                e();
            }, [l, t, a, n, e]);
          return r.createElement(Ib, { onClick: o });
        };
      var wb = a(24277);
      const xb = (e = { enabled: !0 }) => {
          const t = (0, s.useSelector)(Yp.xw),
            { data: a = !1, query: r } = (0, Kp.z)({
              bridge: (0, $t.Ay)(),
              method: "getGlobalAutoUpdate",
              queryKey: Jp.hz.globalAutoUpdate(),
              config: { enabled: t && e.enabled },
            });
          return { globalAutoUpdate: a, query: r };
        },
        kb = (e, t, a) => {
          const { installState: n } = (0, ym.z)(e, t, a),
            l = (0, uu.f)(e, t, a),
            o = (0, r.useMemo)(() => (0, Xt.lV)(l), [l]),
            i = (0, r.useMemo)(() => (0, ti.U3)(l), [l]),
            { globalAutoUpdate: c } = xb(),
            s = (0, ub.z)(e, t, a);
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
                  o = (0, hm.Ji)(t),
                  i = (0, hm.Wl)(t),
                  c = (0, hm.iP)(t);
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
        Pb = (e = "", t = "", a = "") => {
          const n = (0, s.useSelector)(vr.OL),
            { installState: l } = (0, ym.z)(e, t, a),
            o = im(e, t, a);
          return (0, r.useMemo)(
            () =>
              (({ isOnline: e, isEntitledToLibraryItem: t, installState: a }) =>
                e &&
                t &&
                ((e) => {
                  var t;
                  return (
                    !!e &&
                    (void 0 ===
                      (null == (t = e.disabledfeatures)
                        ? void 0
                        : t.canhandleverify) ||
                      e.disabledfeatures.canhandleverify)
                  );
                })(a) &&
                !(0, hm.GM)(a) &&
                !(0, hm.Ji)(a) &&
                !(0, hm.vx)(a) &&
                !(0, hm.zW)(a))({
                installState: l,
                isOnline: n,
                isEntitledToLibraryItem: o,
              }),
            [l, n, o],
          );
        };
      var Nb = a(19276),
        Mb = a(44882),
        Lb = a(80688),
        jb = a(85902);
      var _b = Object.defineProperty,
        Tb = Object.defineProperties,
        Rb = Object.getOwnPropertyDescriptors,
        Db = Object.getOwnPropertySymbols,
        Bb = Object.prototype.hasOwnProperty,
        Hb = Object.prototype.propertyIsEnumerable,
        Fb = (e, t, a) =>
          t in e
            ? _b(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        zb = (e, t) => {
          for (var a in t || (t = {})) Bb.call(t, a) && Fb(e, a, t[a]);
          if (Db) for (var a of Db(t)) Hb.call(t, a) && Fb(e, a, t[a]);
          return e;
        },
        Ub = (e, t) => Tb(e, Rb(t));
      const Vb = ({ isEnabled: e, setIsEnabled: t, args: a, setArgs: r }) => {
          const l = (0, s.useSelector)(K.k);
          return n().createElement(Rp, {
            icon: l
              ? n().createElement(Nb.u, null)
              : n().createElement(Mo.u, null),
            title: n().createElement(se.A, {
              code: "diesel.library.settings.custom_launch_args_title",
            }),
            subtitle: n().createElement(se.A, {
              code: "diesel.library.settings.custom_launch_args_desc",
            }),
            primaryButton: n().createElement($p, {
              checked: e,
              onClick: () => t(!e),
              id: "enable-custom-launch-args",
            }),
            footer:
              e || l
                ? n().createElement(ie, {
                    id: "custom-launch-args",
                    value: a,
                    onChange: (e) => r(e.target.value),
                    disabled: !e,
                  })
                : void 0,
            variant: Sp.C.TwoColumnWithFooter,
          });
        },
        Wb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { commands: l, setCommands: o } = ((e = "", t = "", a = "") => {
              const n = (0, s.useSelector)(Yp.xw),
                l = (0, s.useDispatch)(),
                { installState: o } = (0, ym.z)(e, t, a),
                i = (0, s.useSelector)(
                  (0, Mb.fQ)(null == o ? void 0 : o.relationshipId),
                ),
                [c, d] = (0, r.useState)(!1),
                [m, u] = (0, r.useState)(),
                p = (0, r.useRef)(),
                g =
                  n &&
                  Boolean(e && t && a) &&
                  (0, $t.vu)().supportsAdditionalCommands();
              return (
                (0, r.useEffect)(
                  () => (
                    g &&
                      (d(!0),
                      l(
                        (0, Lb.e8)({ namespace: e, catalogId: t, appName: a }),
                      )),
                    () => {
                      clearTimeout(p.current);
                    }
                  ),
                  [g],
                ),
                (0, r.useEffect)(() => {
                  c ||
                    (null == i ? void 0 : i.state) !== Fe.V.fetching ||
                    d(!0),
                    c &&
                      (null == i ? void 0 : i.state) === Fe.V.success &&
                      (null == i ? void 0 : i.latestValue) &&
                      (u(i.latestValue), d(!1));
                }, [c, i]),
                {
                  commands: m,
                  setCommands: (0, r.useCallback)(
                    (r) => {
                      u(r),
                        clearTimeout(p.current),
                        (p.current = setTimeout(() => {
                          l(
                            (0, jb.ED)({
                              namespace: e,
                              catalogId: t,
                              appName: a,
                              commands: r,
                            }),
                          );
                        }, 200));
                    },
                    [u, l, e, t, a],
                  ),
                }
              );
            })(e, t, a),
            i = (0, r.useCallback)(
              (e) => {
                l && o(Ub(zb({}, l), { enabled: e }));
              },
              [l, o],
            ),
            c = (0, r.useCallback)(
              (e) => {
                l && o(Ub(zb({}, l), { value: e }));
              },
              [l, o],
            );
          return l
            ? n().createElement(Vb, {
                isEnabled: l.enabled,
                setIsEnabled: i,
                args: l.value,
                setArgs: c,
              })
            : null;
        },
        qb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            n = ((e = "", t = "", a = "") => {
              const n = (0, s.useSelector)(vr.md),
                { installState: l } = (0, ym.z)(e, t, a);
              return (0, r.useMemo)(
                () =>
                  (n === wb.B1.WINDOWS || n === wb.B1.WIN32) && (0, hm.Wl)(l),
                [n, l],
              );
            })(e, t, a),
            l = kb(e, t, a),
            o = ((e = "", t = "", a = "") => {
              const { installState: r } = (0, ym.z)(e, t, a);
              return (0, hm.xh)(r);
            })(e, t, a),
            i = Pb(e, t, a);
          return r.createElement(
            Rn.W,
            { noBorder: !0, noShadow: !0, noBackground: !0, spacing: 10 },
            i && r.createElement(Sb, null),
            l && r.createElement(ng, null),
            o && r.createElement(Ig, null),
            n && r.createElement(Rg, null),
            r.createElement(hb, null),
            r.createElement(Wb, null),
          );
        };
      var Gb = a(52180);
      const $b = bp("manage-product-modal"),
        Yb = () => {
          const { cancelModal: e } = $b();
          return r.createElement(Ep, {
            title: r.createElement(Gb.r, null),
            onCloseClick: e,
            content: r.createElement(qb, null),
          });
        },
        Jb = () => {
          const { isOpen: e, cancelModal: t, getData: a } = $b(),
            n = a();
          return n
            ? r.createElement(
                He.a,
                { isOpen: e, onClose: t },
                r.createElement(
                  i.tY,
                  { fallback: r.createElement(Vp, null) },
                  r.createElement(
                    Ld.AZ.Provider,
                    { value: n },
                    r.createElement(Yb, null),
                  ),
                ),
              )
            : null;
        },
        Kb = ({ onClick: e }) =>
          r.createElement(In.T, {
            onClick: e,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.manage",
            }),
          }),
        Zb = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            { openModal: l } = $b(),
            { installState: o } = (0, ym.z)(e, t, a),
            i = r.useCallback(() => {
              n(void 0), l({ namespace: e, catalogItemId: t, appName: a });
            }, [l, n]);
          return r.useMemo(() => (0, hm.Wl)(o), [o])
            ? r.createElement(Kb, { onClick: i })
            : null;
        },
        Qb = (e, t, a) => {
          const n = ((e = "", t = "", a = "") =>
            (0, r.useMemo)(() => {
              if (e && t && a)
                return fi.A.ManageAddonsPath.replace(
                  ":namespace",
                  encodeURIComponent(e),
                )
                  .replace(":catalogId", encodeURIComponent(t))
                  .replace(":appName", encodeURIComponent(a));
            }, [e, t, a]))(e, t, a);
          return { manageAddonsLinkTo: n, gotoManageAddons: (0, _d.R)(n) };
        },
        Xb = ({ onClick: e }) =>
          r.createElement(In.T, {
            onClick: e,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.manageDLC",
            }),
          }),
        eE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            l = (0, xu.t)(e, t, a),
            { installState: o } = (0, ym.z)(e, t, a),
            { manageAddonsLinkTo: i, gotoManageAddons: c } = Qb(e, t, a),
            s = r.useMemo(() => (0, hm.Wl)(o), [o]),
            d = r.useMemo(() => (0, hm.zW)(o), [o]),
            m = r.useCallback(() => {
              n(void 0), c();
            }, [c, n]);
          return s && !d && l.length > 0 && !!i
            ? r.createElement(Xb, { onClick: m })
            : null;
        };
      var tE = a(62763);
      const aE = (e, t, a) => {
          const n = ((e = "", t = "", a = "") =>
            (0, r.useMemo)(() => {
              if (e && t && a)
                return fi.A.ManageModsPath.replace(
                  ":namespace",
                  encodeURIComponent(e),
                )
                  .replace(":catalogId", encodeURIComponent(t))
                  .replace(":appName", encodeURIComponent(a));
            }, [e, t]))(e, t, a);
          return { manageModsLinkTo: n, gotoManageMods: (0, _d.R)(n) };
        },
        rE = ({ onClick: e }) =>
          r.createElement(In.T, {
            onClick: e,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.manage_mods",
            }),
          }),
        nE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            { installState: l } = (0, ym.z)(e, t, a),
            o = (0, tE.n)(e, t, a),
            { manageModsLinkTo: i, gotoManageMods: c } = aE(e, t, a),
            s = r.useMemo(() => (0, hm.Wl)(l), [l]),
            d = r.useMemo(() => (0, hm.zW)(l), [l]),
            m = r.useCallback(() => {
              n(void 0), c();
            }, [c, n]);
          return s && !d && o.length > 0 && !!i
            ? r.createElement(rE, { onClick: m })
            : null;
        };
      var lE = Object.defineProperty,
        oE = Object.defineProperties,
        iE = Object.getOwnPropertyDescriptors,
        cE = Object.getOwnPropertySymbols,
        sE = Object.prototype.hasOwnProperty,
        dE = Object.prototype.propertyIsEnumerable,
        mE = (e, t, a) =>
          t in e
            ? lE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const uE = ({ artifactId: e = "" }, t) => {
          var a;
          const r = ze(
              Er.GL,
              () => (0, Er.WK)(e),
              ((o = ((e, t) => {
                for (var a in t || (t = {})) sE.call(t, a) && mE(e, a, t[a]);
                if (cE) for (var a of cE(t)) dE.call(t, a) && mE(e, a, t[a]);
                return e;
              })({}, t)),
              (i = {
                enabled: Boolean(e) && !1 !== (null == t ? void 0 : t.enabled),
              }),
              oE(o, iE(i))),
            ),
            { data: n } = r,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                sE.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && cE)
                for (var r of cE(e))
                  t.indexOf(r) < 0 && dE.call(e, r) && (a[r] = e[r]);
              return a;
            })(r, ["data"]);
          var o, i;
          return {
            playtime:
              null == (a = null == n ? void 0 : n[e]) ? void 0 : a.totalTime,
            query: l,
          };
        },
        pE = () => {
          const { appName: e } = (0, Ld.Jm)(),
            t = (0, ai.nJ)(),
            { playtime: a } = uE({ artifactId: e });
          return (0, r.useMemo)(() => {
            const { hours: e, minutes: r } = ((e) => {
              const t = Math.min(e, Number.MAX_SAFE_INTEGER) / 60,
                a = Math.floor(t % 60);
              return { hours: Math.floor(t / 60), minutes: a };
            })(null != a ? a : 0);
            if (0 === e) {
              if (0 === r) return;
              return r < 5
                ? (0, d.getMessage)(t, "diesel.common.time.minutes.lessThan5")
                : (0, d.getMessage)(t, "diesel.common.time.minutes", [r]);
            }
            if (e > 0 && e < 1e4) {
              const a = (0, d.getMessage)(t, "diesel.common.time.hours", [e]),
                n = (0, d.getMessage)(t, "diesel.common.time.minutes", [r]);
              return 0 === r ? a : `${a} ${n}`;
            }
            return (0, d.getMessage)(
              t,
              "diesel.common.time.hours.moreThan10000",
            );
          }, [a]);
        };
      var gE = Object.defineProperty,
        bE = Object.getOwnPropertySymbols,
        EE = Object.prototype.hasOwnProperty,
        vE = Object.prototype.propertyIsEnumerable,
        fE = (e, t, a) =>
          t in e
            ? gE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const yE = ({ defaultValue: e = "0s" }) => {
          const t = (0, s.useSelector)(K.k),
            a = pE();
          return t
            ? n().createElement(
                p.E,
                { variant: Y.ZJ.UIMD, color: Y.Uf.SECONDARY },
                n().createElement(
                  "span",
                  { "data-testid": "playtime" },
                  a || e,
                ),
              )
            : n().createElement("span", { "data-testid": "playtime" }, a || e);
        },
        hE = (e) =>
          n().createElement(
            i.tY,
            {
              fallback: n().createElement(we.EA, {
                variant: we.qd.Text,
                height: 15,
                width: 60,
              }),
            },
            n().createElement(
              yE,
              ((e, t) => {
                for (var a in t || (t = {})) EE.call(t, a) && fE(e, a, t[a]);
                if (bE) for (var a of bE(t)) vE.call(t, a) && fE(e, a, t[a]);
                return e;
              })({}, e),
            ),
          ),
        CE = ({ playtime: e }) =>
          r.createElement(wo.D, {
            horizontal: !0,
            title: r.createElement(se.A, {
              code: "diesel.common.playerData.playtime.played_time",
            }),
            subtitle: e,
          }),
        AE = () => r.createElement(CE, { playtime: r.createElement(hE, null) }),
        OE = () => {
          const e = (0, s.useDispatch)();
          return (0, r.useCallback)(
            (t, a) => {
              e((0, Ue.aX)({ collection: t, item: a }));
            },
            [e],
          );
        };
      var IE = Object.defineProperty,
        SE = Object.getOwnPropertySymbols,
        wE = Object.prototype.hasOwnProperty,
        xE = Object.prototype.propertyIsEnumerable,
        kE = (e, t, a) =>
          t in e
            ? IE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const PE = (e) => {
          var t = e,
            { collectionName: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var r in e)
                wE.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && SE)
                for (var r of SE(e))
                  t.indexOf(r) < 0 && xE.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["collectionName"]);
          return n().createElement(
            In.T,
            ((e, t) => {
              for (var a in t || (t = {})) wE.call(t, a) && kE(e, a, t[a]);
              if (SE) for (var a of SE(t)) xE.call(t, a) && kE(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: n().createElement(se.A, {
                  code: "diesel.library.settings.remove_from_collection",
                  args: [a],
                }),
              },
              r,
            ),
          );
        },
        NE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: r } = (0, On.R)(),
            { selectedCollectionId: l } = Br(),
            o = (0, c.$)({ suspense: !1 }),
            i = nt(l),
            s = (0, om.O)(e, t, a),
            d = OE(),
            m = n().useCallback(() => {
              i && s && d(i, s), r(void 0);
            }, [d, i, s, r]);
          return n().createElement(PE, {
            onClick: m,
            collectionName: (null == i ? void 0 : i.name) || "",
            disabled: !o || !i,
          });
        };
      var ME = Object.defineProperty,
        LE = Object.getOwnPropertySymbols,
        jE = Object.prototype.hasOwnProperty,
        _E = Object.prototype.propertyIsEnumerable,
        TE = (e, t, a) =>
          t in e
            ? ME(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const RE = (e) =>
          n().createElement(
            In.T,
            ((e, t) => {
              for (var a in t || (t = {})) jE.call(t, a) && TE(e, a, t[a]);
              if (LE) for (var a of LE(t)) _E.call(t, a) && TE(e, a, t[a]);
              return e;
            })(
              {
                horizontal: !0,
                title: n().createElement(se.A, {
                  code: "diesel.library.settings.remove_from_favorites",
                }),
              },
              e,
            ),
          ),
        DE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: r } = (0, On.R)(),
            l = (0, c.$)({ suspense: !1 }),
            o = el(),
            i = (0, om.O)(e, t, a),
            s = OE(),
            d = n().useCallback(() => {
              o && i && s(o, i), r(void 0);
            }, [s, o, i, r]);
          return n().createElement(RE, { onClick: d, disabled: !l || !o });
        },
        BE = ({ onClick: e, formattedSize: t }) =>
          r.createElement(In.T, {
            dense: !0,
            horizontal: !0,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.uninstall",
            }),
            subtitle: r.createElement("span", null, t),
            onClick: e,
          }),
        HE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { setActiveMenu: n } = (0, On.R)(),
            l = Fg(),
            o = db(e, t, a),
            { openModal: i } = ib(),
            { isLaunchableAddon: c, uninstall: s } = Eb(e, t, a),
            d = r.useCallback(() => {
              c && !(0, $t.Ay)().supportsLaunchableAddonsV2Flow()
                ? s()
                : (0, $t.Ay)().supportsWebClientUninstallFlow()
                  ? i({ namespace: e, catalogItemId: t, appName: a })
                  : l({ namespace: e, catalogId: t, appName: a }),
                n(void 0);
            }, [l, e, t, a, n, c, s]);
          return r.createElement(BE, { onClick: d, formattedSize: o });
        },
        FE = ({ version: e }) =>
          r.createElement(wo.D, {
            horizontal: !0,
            title: r.createElement(se.A, {
              code: "diesel.library.settings.version",
            }),
            subtitle: r.createElement(
              "span",
              { style: { lineBreak: "anywhere" } },
              e,
            ),
          }),
        zE = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { installState: n } = (0, ym.z)(e, t, a),
            l = r.useMemo(() => (0, hm.P2)(n), [n]);
          return r.createElement(FE, { version: l });
        };
      var UE = Object.defineProperty,
        VE = Object.getOwnPropertySymbols,
        WE = Object.prototype.hasOwnProperty,
        qE = Object.prototype.propertyIsEnumerable,
        GE = (e, t, a) =>
          t in e
            ? UE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const $E = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            n = (0, s.useSelector)(fm.MF),
            l = Ku(e, t, a),
            o = (0, Ju.Z)(e, t, a),
            { installState: i } = (0, ym.z)(e, t, a),
            d = im(e, t, a),
            m = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, Ld.Jm)(),
                { installState: n } = (0, ym.z)(e, t, a),
                l = (0, Ju.Z)(e, t, a),
                o = ju(e, t, a);
              return (0, r.useMemo)(() => {
                const e = (0, hm.Wl)(n),
                  t = (0, hm.GM)(n),
                  a = (0, hm.Ji)(n),
                  r = (0, hm.iP)(n);
                return (
                  ((e, t = !1, a = !1) => {
                    var r;
                    return (
                      !!e &&
                      (void 0 !==
                      (null == (r = e.disabledfeatures)
                        ? void 0
                        : r.canhandleuninstall)
                        ? e.disabledfeatures.canhandleuninstall
                        : !(t && !a))
                    );
                  })(n, l, o) &&
                  (e || t) &&
                  !(a || r)
                );
              }, [n, l, o]);
            })(),
            u = ((e) => {
              const { namespace: t } = (0, Ld.Jm)(),
                a = (0, ip.G)({ sandboxId: t }),
                r = (0, c.$)(e);
              return Boolean(r && a);
            })({ suspense: !1 }),
            p = ((e) => {
              const { namespace: t } = (0, Ld.Jm)();
              return (
                (0, cu._)(
                  {
                    categories: [
                      iu.Category.ADDONS,
                      iu.Category.DIGITAL_EXTRAS,
                    ],
                    sandboxId: t,
                  },
                  e,
                ).count > 0
              );
            })({ suspense: !1 }),
            g = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, Ld.Jm)(),
                r = (0, om.O)(e, t, a);
              return gu(e, t, a, (null == r ? void 0 : r.productId) || "", {
                suspense: !1,
              });
            })(),
            b = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, Ld.Jm)(),
                r = (0, om.O)(e, t, a);
              return (null == r ? void 0 : r.recordType) === gr.ee.SUBSCRIPTION;
            })(),
            E = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, Ld.Jm)(),
                { installState: n } = (0, ym.z)(e, t, a);
              return r.useMemo(() => (0, hm.Wl)(n), [n]);
            })(),
            v = (() => {
              const {
                  namespace: e,
                  catalogItemId: t,
                  appName: a,
                } = (0, Ld.Jm)(),
                { installState: n } = (0, ym.z)(e, t, a),
                l = (0, uu.f)(e, t, a),
                o = (0, r.useMemo)(() => (0, ti.U3)(l), [l]),
                i = (0, r.useMemo)(() => (0, hm.P2)(n), [n]);
              return (0, r.useMemo)(() => !o && Boolean(i), [o, i]);
            })(),
            f = (() => {
              const e = (0, Ld.Jm)(),
                t = (0, Pt.S)();
              return !wm(t, e);
            })(),
            y = (() => {
              const { selectedCollectionId: e } = Br(),
                t = (0, Pt.S)();
              return e !== kt.V.ALL && e !== t;
            })(),
            h = (0, hm.Wl)(i) && !(0, hm.Ji)(i) && d,
            C = (0, hm.Ji)(i) || (0, hm.Ur)(i),
            A = u || p || g || b,
            O = E || v,
            I = h || C || m;
          if (n === Na.c.ANONYMOUS || l)
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(mp, null),
              m && r.createElement(ko, null),
              m && r.createElement(HE, null),
            );
          const S = r.createElement(
            r.Fragment,
            null,
            r.createElement(ko, null),
            f ? r.createElement(Om, null) : r.createElement(DE, null),
            r.createElement(Jm, null),
            y && r.createElement(NE, null),
          );
          if (o)
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(mp, null),
              S,
              m &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(ko, null),
                  r.createElement(HE, null),
                ),
              E && r.createElement(ko, null),
              E && r.createElement(AE, null),
            );
          const w =
              A &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(ko, null),
                u && r.createElement(op, null),
                p && r.createElement(ou, null),
                g && r.createElement(mu, null),
                b && r.createElement(vu, null),
              ),
            x =
              O &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(ko, null),
                E && r.createElement(AE, null),
                v && r.createElement(zE, null),
              );
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(mp, null),
            S,
            w,
            I &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(ko, null),
                C &&
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(Xm, null),
                    r.createElement(gp, null),
                  ),
                h &&
                  r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(ru, null),
                    r.createElement(np, null),
                    r.createElement(nE, null),
                    r.createElement(eE, null),
                    r.createElement(Zb, null),
                  ),
                m && r.createElement(HE, null),
              ),
            x,
          );
        },
        YE = r.forwardRef((e, t) => {
          var a = e,
            { id: n } = a,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                WE.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && VE)
                for (var r of VE(e))
                  t.indexOf(r) < 0 && qE.call(e, r) && (a[r] = e[r]);
              return a;
            })(a, ["id"]);
          return r.createElement(
            Rn.W,
            ((e, t) => {
              for (var a in t || (t = {})) WE.call(t, a) && GE(e, a, t[a]);
              if (VE) for (var a of VE(t)) qE.call(t, a) && GE(e, a, t[a]);
              return e;
            })({ ref: t, id: n, dense: !0, noBorder: !0 }, l),
            r.createElement($E, null),
          );
        });
      var JE = Object.defineProperty,
        KE = Object.getOwnPropertySymbols,
        ZE = Object.prototype.hasOwnProperty,
        QE = Object.prototype.propertyIsEnumerable,
        XE = (e, t, a) =>
          t in e
            ? JE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const ev = (0, v.W)(() => ({
          root: (0, g.AH)({ width: "max-content", minWidth: 280 }),
        })),
        tv = (e) => {
          var t = e,
            { id: a } = t,
            r = ((e, t) => {
              var a = {};
              for (var r in e)
                ZE.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && KE)
                for (var r of KE(e))
                  t.indexOf(r) < 0 && QE.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["id"]);
          const l = ev();
          return n().createElement(
            Tn,
            ((e, t) => {
              for (var a in t || (t = {})) ZE.call(t, a) && XE(e, a, t[a]);
              if (KE) for (var a of KE(t)) QE.call(t, a) && XE(e, a, t[a]);
              return e;
            })({}, r),
            n().createElement(
              "div",
              { className: l.root },
              n().createElement(YE, { id: a }),
            ),
          );
        },
        av = ({ animation: e }) =>
          r.createElement(
            Rn.W,
            { dense: !0, noBorder: !0 },
            r.createElement(wo.D, {
              title: r.createElement(we.EA, {
                variant: we.qd.Text,
                width: "80%",
                height: "100%",
                animation: e,
              }),
            }),
            r.createElement(wo.D, {
              title: r.createElement(we.EA, {
                variant: we.qd.Text,
                width: "50%",
                animation: e,
              }),
            }),
            r.createElement(wo.D, {
              title: r.createElement(we.EA, {
                variant: we.qd.Text,
                width: "40%",
                animation: e,
              }),
            }),
            r.createElement(ko, null),
            r.createElement(wo.D, {
              title: r.createElement(we.EA, {
                variant: we.qd.Text,
                width: "50%",
                animation: e,
              }),
            }),
          ),
        rv = (e) => {
          const { activeMenu: t, setActiveMenu: a } = (0, On.R)(),
            n = t === e,
            l = (0, r.useCallback)(() => a(n ? void 0 : e), [n, e, a]),
            o = (0, r.useCallback)(() => a(void 0), [a]);
          return { isOpen: n, toggleMenu: l, closeMenu: o };
        };
      var nv = a(288),
        lv = Object.defineProperty,
        ov = Object.defineProperties,
        iv = Object.getOwnPropertyDescriptors,
        cv = Object.getOwnPropertySymbols,
        sv = Object.prototype.hasOwnProperty,
        dv = Object.prototype.propertyIsEnumerable,
        mv = (e, t, a) =>
          t in e
            ? lv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const uv = ({
        id: e,
        toggleClassName: t,
        menuClassName: a,
        renderMenu: n,
      }) => {
        const { isOpen: l, toggleMenu: o, closeMenu: c } = rv(e),
          d = (0, s.useSelector)(K.k);
        return r.createElement(nv.m, {
          id: e,
          isOpen: l,
          onClose: c,
          popperConfig: { reversePlacement: !d },
          renderToggle: (e) => {
            return r.createElement(
              "div",
              { className: t },
              r.createElement(
                Io,
                ((a = ((e, t) => {
                  for (var a in t || (t = {})) sv.call(t, a) && mv(e, a, t[a]);
                  if (cv) for (var a of cv(t)) dv.call(t, a) && mv(e, a, t[a]);
                  return e;
                })({}, e)),
                ov(a, iv({ onClick: o }))),
              ),
            );
            var a;
          },
          renderMenu: (e) =>
            r.createElement(
              "div",
              { className: a },
              r.createElement(
                i.tY,
                { fallback: r.createElement(av, null) },
                n(e),
              ),
            ),
        });
      };
      var pv = Object.defineProperty,
        gv = Object.getOwnPropertySymbols,
        bv = Object.prototype.hasOwnProperty,
        Ev = Object.prototype.propertyIsEnumerable,
        vv = (e, t, a) =>
          t in e
            ? pv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const fv = ({ id: e, toggleClassName: t, menuClassName: a }) =>
        r.createElement(uv, {
          id: e,
          toggleClassName: t,
          menuClassName: a,
          renderMenu: (e) =>
            r.createElement(
              YE,
              ((e, t) => {
                for (var a in t || (t = {})) bv.call(t, a) && vv(e, a, t[a]);
                if (gv) for (var a of gv(t)) Ev.call(t, a) && vv(e, a, t[a]);
                return e;
              })({}, e),
            ),
        });
      var yv = a(28661);
      const hv = ({ children: e }) => {
        const { namespace: t, catalogItemId: a, appName: n } = (0, Ld.Jm)(),
          l = (0, uu.f)(t, a, n),
          { installState: o } = (0, ym.z)(t, a, n),
          i = (0, ob.q)(t, a, n),
          c = r.useMemo(() => (0, ti.cG)(l), [l]),
          s = r.useMemo(() => (0, ti.Sh)(l), [l]),
          d = (0, hm.RS)(o),
          m =
            (0, hm.Wl)(o) && !(0, hm.Ji)(o)
              ? 1
              : null == o
                ? void 0
                : o.progress;
        return r.createElement(
          Rl,
          {
            image: c
              ? r.createElement(yv._, { alt: i, src: c, showBrokenOnError: !0 })
              : void 0,
            logo: s ? r.createElement(yv._, { alt: i, src: s }) : void 0,
            percent: m,
            indeterminate: d,
          },
          e,
        );
      };
      var Cv = a(89974);
      const Av = ({
          isGridView: e,
          isExpired: t = !1,
          isLeaving: a = !1,
          formattedDate: r,
        }) =>
          n().createElement(
            l.n,
            { isGridView: e, isCaption: !0 },
            t
              ? n().createElement(se.A, {
                  code: "diesel.common.smart_button.expired_with_date",
                  args: [r],
                })
              : a
                ? n().createElement(se.A, {
                    code: "diesel.common.smart_button.leaving_with_date",
                    args: [r],
                  })
                : n().createElement(se.A, {
                    code: "diesel.common.smart_button.expiring_with_date",
                    args: [r],
                  }),
          ),
        Ov = ({ isGridView: e }) => {
          const { namespace: t, catalogItemId: a, appName: r } = (0, Ld.Jm)(),
            l = (0, Cg.a)(),
            o = (0, om.O)(t, a, r),
            i = (null == o ? void 0 : o.expirationDate)
              ? new Date(o.expirationDate)
              : void 0;
          if (!i) return null;
          const c = new Date().getTime() > i.getTime(),
            s =
              !c && (null == o ? void 0 : o.recordType) !== gr.ee.SUBSCRIPTION,
            d = l(i, Cv.zQ);
          return n().createElement(Av, {
            isGridView: e,
            isExpired: c,
            isLeaving: s,
            formattedDate: d,
          });
        },
        Iv = (e, t, a) => {
          const n = (0, om.O)(e, t, a),
            l = (0, r.useMemo)(
              () => (0, br.L5)(null == n ? void 0 : n.relationshipId),
              [null == n ? void 0 : n.relationshipId],
            );
          return (0, s.useSelector)(l);
        },
        Sv = (e, t, a) => {
          const n = Iv(e, t, a);
          return (0, r.useMemo)(() => {
            var e;
            if ((null == n ? void 0 : n.recordType) === gr.ee.SUBSCRIPTION)
              return (
                (0, wu.G)(
                  iu.CustomProp.SUBSCRIPTION_LINK_ID,
                  null == (e = null == n ? void 0 : n.catalogItem)
                    ? void 0
                    : e.customAttributes,
                ) || void 0
              );
          }, [n]);
        };
      var wv = a(47128);
      var xv = a(72482),
        kv = a(85701);
      const Pv = (
        ({ Layout: e }) =>
        ({ isGridView: t }) => {
          const { namespace: a, catalogItemId: n, appName: l } = (0, Ld.Jm)(),
            o = (0, d.useLocalizationMessages)(),
            { timeTrial: i, query: c } = ((e, t, a) => {
              const n = (0, s.useDispatch)(),
                l = Sv(e, t, a),
                o = (0, r.useMemo)(
                  () => (l ? (0, wv.sP)(l, e, t) : () => {}),
                  [l, e, t],
                ),
                i = (0, s.useSelector)(o),
                c =
                  !(null == i ? void 0 : i.state) ||
                  (null == i ? void 0 : i.state) === Fe.V.notAsked;
              return (
                (0, r.useEffect)(() => {
                  l &&
                    c &&
                    n(
                      (0, wv.uj)({ linkId: l, sandboxId: e, catalogItemId: t }),
                    );
                }, [c, l, e, t]),
                (0, r.useMemo)(
                  () => ({
                    timeTrial: null == i ? void 0 : i.latestValue,
                    query: {
                      isFetching:
                        (null == i ? void 0 : i.state) === Fe.V.fetching,
                    },
                  }),
                  [i],
                )
              );
            })(a, n, l),
            m = r.useMemo(
              () =>
                (null == i ? void 0 : i.remainingTrialSec)
                  ? (0, Wa.a3)(
                      null == i ? void 0 : i.remainingTrialSec,
                      o,
                      Wa.ib.HoursMinutes,
                    )
                  : void 0,
              [null == i ? void 0 : i.remainingTrialSec, o],
            ),
            u = (0, xv.g8)(i),
            p = (0, xv.gZ)(i);
          return r.createElement(e, {
            formattedTime: m,
            isExpired: p,
            isStarted: u,
            isFetching: c.isFetching,
            isGridView: t,
          });
        }
      )({
        Layout: (
          ({ messageCode: e, messageCodeStarted: t, messageCodeExpired: a }) =>
          ({
            isStarted: n,
            isExpired: o,
            isFetching: i,
            formattedTime: c,
            isGridView: s,
          }) => {
            let d;
            return (
              o
                ? (d = r.createElement(se.A, { code: a }))
                : c
                  ? (d = n
                      ? r.createElement(se.A, { code: t, args: [c] })
                      : r.createElement(se.A, { code: e, args: [c] }))
                  : i &&
                    (d = r.createElement(we.EA, {
                      width: 100,
                      height: 20,
                      "data-testId": "Skeleton",
                    })),
              d
                ? r.createElement(
                    l.n,
                    { icon: r.createElement(kv.T, null), isGridView: s },
                    d,
                  )
                : null
            );
          }
        )({
          messageCode: "diesel.common.smart_button.trial_time",
          messageCodeStarted: "diesel.common.smart_button.trial_time_started",
          messageCodeExpired: "diesel.common.smart_button.trial_time_expired",
        }),
      });
      var Nv = Object.defineProperty,
        Mv = Object.getOwnPropertySymbols,
        Lv = Object.prototype.hasOwnProperty,
        jv = Object.prototype.propertyIsEnumerable,
        _v = (e, t, a) =>
          t in e
            ? Nv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Tv = (e, t) => {
          for (var a in t || (t = {})) Lv.call(t, a) && _v(e, a, t[a]);
          if (Mv) for (var a of Mv(t)) jv.call(t, a) && _v(e, a, t[a]);
          return e;
        };
      const Rv = (0, v.W)((e, t) => ({
          button: (0, g.AH)(
            Tv(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: ke.Vq,
                height: 34,
                width: 43,
              },
              t && { color: e.textSecondary },
            ),
          ),
          count: (0, g.AH)(
            Tv(
              Tv(
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  borderRadius: ke.Vq,
                  height: 24,
                  width: 35,
                  fontSize: t ? 14 : 12,
                },
                !t && {
                  "button:hover &, button:focus &": { background: ke.RG },
                },
              ),
              t && {
                "button:hover &, button:focus &": { color: J.UM.contrast },
              },
            ),
          ),
        })),
        Dv = ({ count: e }) => {
          const t = (0, s.useSelector)(K.k),
            a = r.useRef(null),
            n = Rv(t),
            { namespace: l, catalogItemId: o, appName: i } = (0, Ld.Jm)(),
            { gotoManageAddons: c } = Qb(l, o, i),
            { installState: d } = (0, ym.z)(l, o, i),
            m = r.useMemo(() => (0, hm.Wl)(d) && !(0, hm.Ji)(d), [d]),
            u = r.useCallback(() => c(), [l, c]),
            g = () =>
              t
                ? r.createElement(
                    p.E,
                    { variant: Y.ZJ.UIMD, color: Y.Uf.SECONDARY },
                    r.createElement(
                      "div",
                      { className: n.count },
                      e >= 99 ? "99+" : e,
                    ),
                  )
                : r.createElement(
                    "div",
                    { className: n.count },
                    e >= 99 ? "99+" : e,
                  );
          return r.useMemo(
            () =>
              m
                ? r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      Nt.A,
                      { className: n.button, onClick: u, ref: a },
                      r.createElement(g, null),
                    ),
                    r.createElement(
                      pt.m,
                      { anchorRef: a, delay: 500 },
                      r.createElement(se.A, {
                        code: "diesel.library.settings.manageDLC",
                      }),
                    ),
                  )
                : r.createElement(
                    "span",
                    { style: t ? { color: J.UM.secondary } : void 0 },
                    "-",
                  ),
            [m],
          );
        },
        Bv = (0, Zl.K)(
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
      var Hv = Object.defineProperty,
        Fv = Object.defineProperties,
        zv = Object.getOwnPropertyDescriptors,
        Uv = Object.getOwnPropertySymbols,
        Vv = Object.prototype.hasOwnProperty,
        Wv = Object.prototype.propertyIsEnumerable,
        qv = (e, t, a) =>
          t in e
            ? Hv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Gv = (e, t) => {
          for (var a in t || (t = {})) Vv.call(t, a) && qv(e, a, t[a]);
          if (Uv) for (var a of Uv(t)) Wv.call(t, a) && qv(e, a, t[a]);
          return e;
        };
      const $v = (0, v.W)((e, { isInCollection: t, showFullIcon: a }) => {
          return {
            root: (0, g.AH)(
              ((r = Gv(
                {
                  position: "absolute",
                  height: 24,
                  width: 24,
                  opacity: t ? 1 : 0,
                },
                (0, gt.Jp)("opacity"),
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
              Fv(r, zv(n))),
            ),
          };
          var r, n;
        }),
        Yv = ({
          className: e,
          onClick: t,
          onKeyDown: a,
          isInCollection: r = !1,
          isOnline: l,
        }) => {
          const [o, i] = n().useState(!1),
            c = $v({ isInCollection: r, showFullIcon: o }),
            s = n().useCallback(() => {
              r || i(!0);
            }, [r]),
            d = n().useCallback(() => {
              r || i(!1);
            }, [r]),
            m = n().useCallback(() => {
              i(r);
            }, [r]);
          return n().createElement(
            "div",
            {
              className: (0, g.cx)(c.root, e),
              "data-wrapperid": "favoriteWrapper",
            },
            n().createElement(
              mt.K,
              {
                pill: !0,
                solid: !0,
                onMouseDown: t,
                onKeyDown: a,
                onMouseLeave: d,
                onMouseEnter: s,
                onFocus: m,
                onBlur: d,
                "data-testid": "favorite-btn",
                disabled: !l,
              },
              o || r
                ? n().createElement(li, null)
                : n().createElement(Bv, null),
            ),
          );
        },
        Jv = ({ className: e }) => {
          const t = (0, Ld.Jm)(),
            { namespace: a, catalogItemId: n, appName: l } = t,
            o = (0, om.O)(a, n, l),
            i = el(),
            s = wm(null == i ? void 0 : i.collectionId, t),
            d = Cm(),
            m = OE(),
            u = (0, c.$)(),
            p = (e) => {
              i && o && (e ? m(i, o) : d(i, o));
            },
            g = r.useCallback(() => {
              p(s);
            }, [t, s]),
            b = r.useCallback(
              (e) => {
                e.key === Nn.nC.Enter && (e.preventDefault(), p(s));
              },
              [t, s],
            );
          return r.createElement(Yv, {
            className: e,
            isOnline: u,
            isInCollection: s,
            onClick: g,
            onKeyDown: b,
          });
        };
      var Kv = a(8119);
      const Zv = (0, g.AH)({ color: ke.ON }),
        Qv = ({ linkId: e }) => {
          const t = Kv.J2[e];
          return t
            ? n().createElement(Jd.A, {
                key: e,
                className: Zv,
                icon: t.svg,
                style: t.dimensions.small,
              })
            : null;
        },
        Xv = (0, v.W)(() => ({
          root: (0, g.AH)({
            display: "flex",
            justifyContent: "flex-start",
            gap: 10,
            alignItems: "center",
            borderTop: `1px solid ${ke.Rl}`,
            minHeight: 25,
            margin: "0 10px",
            padding: "10px 0",
          }),
        })),
        ef = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            r = Sv(e, t, a),
            l = Xv();
          return r
            ? n().createElement(
                "div",
                {
                  className: l.root,
                  "data-testid": "SubscriptionStatusFooter",
                },
                n().createElement(
                  U.A,
                  { textLevel: W.qo.SECONDARY },
                  n().createElement(se.A, {
                    code: "diesel.library.cards.subscriptions.included_in",
                  }),
                ),
                n().createElement(Qv, { linkId: r }),
              )
            : null;
        };
      var tf = ((e) => (
        (e.BackgroundOverlay = "backgroundOverlay"),
        (e.AccentOverlay = "accentOverlay"),
        (e.Accent = "accent"),
        (e.Level1 = "level1"),
        (e.Level2 = "level2"),
        e
      ))(tf || {});
      const af = (0, v.W)((e, { variant: t }) => ({
          root: (0, g.AH)({
            display: "inline-block",
            lineHeight: 1,
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "baseline",
            padding: "5px 10px",
            borderRadius: q.Vq,
            backgroundColor: e[t],
          }),
          pill: (0, g.AH)({ borderRadius: "50rem" }),
        })),
        rf = ({
          children: e,
          variant: t = "backgroundOverlay",
          pill: a = !1,
        }) => {
          const n = af({ variant: t }),
            l = (0, g.cx)(n.root, { [n.pill]: a });
          return r.createElement(
            "span",
            { className: l, "data-testid": "Badge" },
            r.createElement(V.A, null, e),
          );
        },
        nf = ({ count: e }) => {
          const t = "diesel.library.dlc" + (e > 1 ? ".plural" : "");
          return r.createElement(
            rf,
            { variant: tf.Level2 },
            r.createElement(se.A, { code: t, args: [e] }),
          );
        };
      var lf = a(14226),
        of = ((e) => (
          (e.BLUE = "blue"),
          (e.DEFAULT = "black"),
          (e.GREEN = "green"),
          (e.NONE = "none"),
          (e.OVERLAY = "overlay"),
          (e.PURPLE = "purple"),
          e
        ))(of || {});
      const cf = (0, v.W)(() => ({
          root: (0, g.AH)({
            letterSpacing: 1,
            padding: "2px 5px",
            display: "flex",
            alignItems: "center",
            "> span": { width: "100%" },
          }),
          lineClamp: (0, g.AH)({
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }),
          blue: (0, g.AH)({ backgroundColor: lf.x6 }),
          black: (0, g.AH)({ backgroundColor: lf.HI }),
          green: (0, g.AH)({ backgroundColor: lf.mZ }),
          purple: (0, g.AH)({ backgroundColor: lf.GF }),
          overlay: (0, g.AH)({
            backgroundColor: "rgba(0, 0,0, 0.53)",
            backdropFilter: "blur(10px)",
          }),
          none: (0, g.AH)({ backgroundColor: "none" }),
        })),
        sf = ({ color: e = "black", children: t }) => {
          const a = cf(),
            n = (0, g.cx)(a.root, a[e]);
          return r.createElement(
            "div",
            { className: n, "data-testid": "StatusBar" },
            r.createElement(
              V.A,
              null,
              r.createElement("span", { className: a.lineClamp }, t),
            ),
          );
        },
        df = (0, v.W)(() => ({
          root: (0, g.AH)({
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 5px 8px 0",
          }),
        })),
        mf = ({ count: e }) => {
          const t = df();
          return n().createElement(
            sf,
            { color: of.NONE },
            n().createElement(
              "div",
              { className: t.root },
              n().createElement(nf, { count: e }),
            ),
          );
        },
        uf = (e) => {
          switch (e.toUpperCase()) {
            case gr.Dq.Stage:
              return of.BLUE;
            case gr.Dq.Live:
              return of.PURPLE;
            default:
              return of.GREEN;
          }
        },
        pf = () => {
          const { namespace: e, appName: t, catalogItemId: a } = (0, Ld.Jm)(),
            r = (0, om.O)(e, a, t);
          if (
            (null == r ? void 0 : r.sandboxType) === gr.sZ.Private &&
            (null == r ? void 0 : r.sandboxName)
          ) {
            const e = r.sandboxName;
            return n().createElement(sf, { color: uf(e) }, e);
          }
          return null;
        },
        gf = (0, v.W)(() => ({
          root: (0, g.AH)({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 20,
            gap: 10,
          }),
        })),
        bf = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            r = Sv(e, t, a),
            l = gf();
          return r
            ? n().createElement(
                sf,
                { color: of.OVERLAY },
                n().createElement(
                  "div",
                  { className: l.root },
                  n().createElement(Qv, { linkId: r }),
                ),
              )
            : null;
        };
      var Ef = Object.defineProperty,
        vf = Object.defineProperties,
        ff = Object.getOwnPropertyDescriptors,
        yf = Object.getOwnPropertySymbols,
        hf = Object.prototype.hasOwnProperty,
        Cf = Object.prototype.propertyIsEnumerable,
        Af = (e, t, a) =>
          t in e
            ? Ef(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        Of = (e, t) => {
          for (var a in t || (t = {})) hf.call(t, a) && Af(e, a, t[a]);
          if (yf) for (var a of yf(t)) Cf.call(t, a) && Af(e, a, t[a]);
          return e;
        };
      const If = ({
          namespace: e,
          catalogItemId: t,
          appName: a,
          defaultValue: n = "0B",
        }) => {
          const l = (0, s.useSelector)(K.k),
            o = db(e, t, a);
          return l
            ? r.createElement(
                p.E,
                { variant: Y.ZJ.UIMD, color: Y.Uf.SECONDARY },
                r.createElement(
                  "span",
                  { "data-testid": "InstallSizeOnDisk" },
                  o || n,
                ),
              )
            : r.createElement(
                "span",
                { "data-testid": "InstallSizeOnDisk" },
                o || n,
              );
        },
        Sf = () =>
          r.createElement(we.EA, {
            variant: we.qd.Text,
            height: "100%",
            width: 50,
          }),
        wf = (e) =>
          r.createElement(
            i.tY,
            { fallback: r.createElement(Sf, null) },
            r.createElement(If, Of({}, e)),
          ),
        xf = ({ defaultValue: e }) => {
          const t = (0, Ld.Jm)();
          return r.createElement(
            wf,
            ((a = Of({}, t)), vf(a, ff({ defaultValue: e }))),
          );
          var a;
        };
      var kf = Object.defineProperty,
        Pf = Object.getOwnPropertySymbols,
        Nf = Object.prototype.hasOwnProperty,
        Mf = Object.prototype.propertyIsEnumerable,
        Lf = (e, t, a) =>
          t in e
            ? kf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        jf = (e, t) => {
          for (var a in t || (t = {})) Nf.call(t, a) && Lf(e, a, t[a]);
          if (Pf) for (var a of Pf(t)) Mf.call(t, a) && Lf(e, a, t[a]);
          return e;
        };
      const _f = (e) => r.createElement(Jv, { className: e }),
        Tf =
          ({
            Layout: e,
            SubtitleComponent: t,
            hasSettingsMenu: a = !0,
            hasUpdate: n = !1,
            isDark: l = !1,
            isGridView: o,
            useButtonAction: i,
          }) =>
          () => {
            const c = (0, Ld.Jm)(),
              { namespace: d, catalogItemId: m, appName: u } = c,
              p = `settings_${(0, yd.Es)(d, m, u)}`,
              g = `${p}_context`,
              b = (0, Id.H)(),
              E = (() => {
                const {
                    namespace: e,
                    catalogItemId: t,
                    appName: a,
                  } = (0, Ld.Jm)(),
                  r = (0, om.O)(e, t, a),
                  n = Iv(e, t, a);
                return Boolean((0, xv.vZ)(r) && void 0 !== n);
              })(),
              v = (() => {
                const {
                    namespace: e,
                    catalogItemId: t,
                    appName: a,
                  } = (0, Ld.Jm)(),
                  n = (0, om.O)(e, t, a),
                  l = Iv(e, t, a);
                return (0, r.useMemo)(() => {
                  const e = (null == n ? void 0 : n.expirationDate)
                    ? new Date(n.expirationDate)
                    : void 0;
                  return (
                    !(
                      !e ||
                      (null == n ? void 0 : n.expirationDate) ===
                        (null == l ? void 0 : l.expirationDate)
                    ) && Date.now() > e.getTime() - Gi.VQ
                  );
                }, [
                  null == n ? void 0 : n.expirationDate,
                  null == l ? void 0 : l.expirationDate,
                ]);
              })(),
              f = i(c),
              y = (0, s.useSelector)(vr.n9) || Na.c.ANONYMOUS,
              h = r.useRef(null),
              { isOpen: C, closeMenu: A } = rv(p),
              {
                openContextMenu: O,
                openContextMenuWithKeyboard: I,
                contextMenuProps: S,
              } = Wn(g),
              w = a,
              x = (0, r.useMemo)(
                () =>
                  w
                    ? r.createElement(
                        tv,
                        jf({ id: g, anchorElement: h.current }, S),
                      )
                    : void 0,
                [g, S.anchorPosition, S.isOpen, S.onClose, w],
              ),
              k = (0, r.useMemo)(
                () =>
                  a
                    ? (e) =>
                        r.createElement(fv, {
                          id: p,
                          toggleClassName: e.button,
                          menuClassName: e.menu,
                        })
                    : void 0,
                [p, a],
              ),
              P = (0, r.useMemo)(
                () =>
                  o
                    ? r.createElement(hv, null)
                    : r.createElement(hv, null, r.createElement(pf, null)),
                [o],
              ),
              N = (0, r.useMemo)(
                () =>
                  r.createElement(
                    r.Fragment,
                    null,
                    b.length && o
                      ? r.createElement(mf, { count: b.length })
                      : null,
                    r.createElement(bf, null),
                    r.createElement(pf, null),
                  ),
                [o, b.length],
              ),
              M = (0, r.useMemo)(
                () => (o ? void 0 : r.createElement(ef, null)),
                [o],
              ),
              L = (0, r.useMemo)(
                () =>
                  b.length && !o
                    ? r.createElement(Dv, { count: b.length })
                    : void 0,
                [o, b.length],
              ),
              j = (0, r.useMemo)(
                () => (o ? void 0 : r.createElement(hE, { defaultValue: "-" })),
                [o],
              ),
              _ = (0, r.useMemo)(
                () => (o ? void 0 : r.createElement(xf, { defaultValue: "-" })),
                [o],
              ),
              T = (0, r.useMemo)(
                () =>
                  E
                    ? r.createElement(Pv, { isGridView: o })
                    : v
                      ? r.createElement(Ov, { isGridView: o })
                      : void 0,
                [E, v, o],
              ),
              R = (0, r.useMemo)(
                () => (y ? r.createElement(vm, { isGridView: o }) : void 0),
                [y, o],
              );
            return r.createElement(e, {
              forwardedRef: h,
              title: r.createElement(Gb.r, { hasTooltip: !0, lineClamp: !o }),
              subtitle: r.createElement(t, { isGridView: o }),
              image: P,
              imageFooter: N,
              rowFooter: M,
              renderFavorite: _f,
              onContextMenu: w
                ? (e) => {
                    A(), O(e);
                  }
                : void 0,
              onKeyDown: w ? I : void 0,
              contextMenu: x,
              renderSettingsMenu: k,
              badges: L,
              active: C || S.isOpen,
              darken: l,
              hasHover: !!f,
              hasUpdate: n,
              onClick: f,
              playtime: j,
              installSize: _,
              additionalInfo: T,
              achievements: R,
            });
          },
        Rf = (e) => ({
          GridCard: Tf(jf({ Layout: fo, isGridView: !0 }, e)),
          ListCard: Tf(jf({ Layout: Ns, isGridView: !1 }, e)),
        }),
        Df = Rf({
          useButtonAction: Od,
          SubtitleComponent: Ad.W,
          hasSettingsMenu: !0,
        });
      var Bf = a(22464);
      const Hf = (0, eu.S)(
        "installWithOptions",
        ({ namespace: e, catalogId: t, appName: a, options: r }) =>
          (0, $t.Ay)().installWithOptions(e, t, a, r),
      );
      const Ff = (0, eu.S)("chooseInstallLocation", (e) => {
          return (
            (t = void 0),
            (a = [e]),
            (r = function* ({ namespace: e, catalogId: t, appName: a }) {
              return (0, $t.Ay)().chooseInstallLocation(e, t, a);
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
        zf = (0, eu.Z)("install");
      var Uf = a(43752),
        Vf = a(34475),
        Wf = a(11957),
        qf = a(75250);
      const Gf = Wf.i7`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,
        $f = ({ size: e, spinDuration: t }) => {
          const a = (0, Vf.E)(),
            l = (0, r.useMemo)(
              () =>
                (({
                  cssTheme: e,
                  size: t = Kd.A.XXXSMALL,
                  spinDuration: a = 1,
                }) => ({
                  spinner: (0, g.AH)({
                    border: "1px solid transparent",
                    borderRadius: "50%",
                    borderTop: `1px solid ${e.textPrimary}`,
                    borderRight: `1px solid ${e.textPrimary}`,
                    borderBottom: `1px solid ${e.textPrimary}`,
                    animation: `${Gf} ${a}s linear infinite`,
                    width: qf.L[t],
                    height: qf.L[t],
                  }),
                }))({ cssTheme: a, size: e, spinDuration: t }),
              [a, e, t],
            );
          return n().createElement("div", {
            className: l.spinner,
            "data-testid": "spinner",
          });
        },
        Yf = (0, v.W)(() => ({
          pathInfo: (0, g.AH)({
            margin: "10px 0 20px 0",
            width: "100%",
            wordBreak: "break-all",
          }),
          textLabel: (0, g.AH)((0, ue.hz)(4)),
          spacingTop: (0, g.AH)({ marginTop: 10 }),
          hasError: (0, g.AH)({ opacity: 1, height: "auto" }),
          autoUpdateLabel: (0, g.AH)((0, ue.S$)(10)),
          buttonDiv: (0, g.AH)({ marginTop: 20 }),
          EDSButtonDiv: (0, g.AH)({ marginTop: 24 }),
        })),
        Jf = ({ path: e }) => {
          const t = Yf();
          return (0, s.useSelector)(K.k)
            ? r.createElement(
                "div",
                { className: t.pathInfo },
                r.createElement(
                  p.E,
                  {
                    variant: Y.ZJ.UISM,
                    color: Y.Uf.SECONDARY,
                    "data-testid": "path",
                  },
                  r.createElement(
                    "span",
                    { className: t.textLabel },
                    r.createElement(ai.QB, {
                      code: "egstore.library.install_location_modal.path",
                    }),
                  ),
                  e,
                ),
              )
            : r.createElement(
                "div",
                { className: t.pathInfo },
                r.createElement(
                  "span",
                  { className: t.textLabel },
                  r.createElement(
                    de.Ay,
                    { weight: de.EU.BOLD, textLevel: W.qo.SECONDARY },
                    r.createElement(ai.QB, {
                      code: "egstore.library.install_location_modal.path",
                    }),
                  ),
                ),
                r.createElement(
                  "span",
                  { "data-testid": "path" },
                  r.createElement(de.Ay, { textLevel: W.qo.SECONDARY }, e),
                ),
              );
        },
        Kf = ({
          directoryPath: e = "",
          downloadSize: t = "",
          error: a = "",
          hasInstallOptions: n = !1,
          isInstallDisabled: l = !1,
          isBusy: o = !1,
          onBrowseClick: i,
          onCancelClick: c,
          onInstallClick: d,
          onInstallOptionsClick: m,
          options: u,
          path: g = "",
          requiredSpace: v = "",
        }) => {
          const f = Yf();
          return (0, s.useSelector)(K.k)
            ? r.createElement(D.k, {
                "data-testid": "InstallLocationModal",
                header: r.createElement(H.d, {
                  title: r.createElement(ai.QB, {
                    code: "egstore.library.install_location_modal.title",
                  }),
                  onCloseClick: c,
                }),
                content: r.createElement(
                  b.a,
                  { fillParent: !0, alignItems: E.ep.Center },
                  o
                    ? r.createElement(
                        b.a,
                        { fillParent: !0, centerContent: !0 },
                        r.createElement($f, {
                          size: Kd.A.LARGE,
                          spinDuration: 0.4,
                        }),
                      )
                    : r.createElement(
                        j,
                        {
                          spacing: 8,
                          role: "form",
                          "aria-label": "Choose Install Location",
                        },
                        r.createElement(
                          _,
                          { xs: 10 },
                          r.createElement(ie, {
                            id: "directoryPath",
                            name: "directoryPath",
                            inputHeight: z.eL.DENSED,
                            placeholder: "/",
                            value: e,
                            noBackground: !0,
                            readOnly: !0,
                            error: !!a,
                            helperText: a,
                            "data-testid": "directoryPath",
                            label: r.createElement(ai.QB, {
                              code: "egstore.library.install_location_modal.folder",
                            }),
                          }),
                          n && r.createElement(Jf, { path: g }),
                        ),
                        r.createElement(
                          _,
                          { xs: 2 },
                          r.createElement(
                            "div",
                            { className: f.EDSButtonDiv },
                            r.createElement(
                              cl.$,
                              {
                                variant: Y.ml.OUTLINE,
                                size: Y.sp.LG,
                                onClick: i,
                                fullWidth: !0,
                                "data-testid": "BrowseButton",
                              },
                              r.createElement(ai.QB, {
                                code: "egstore.library.install_location_modal.browse",
                              }),
                            ),
                            n &&
                              r.createElement(
                                "div",
                                { className: f.spacingTop },
                                r.createElement(
                                  cl.$,
                                  {
                                    variant: Y.ml.OUTLINE,
                                    size: Y.sp.LG,
                                    onClick: m,
                                    fullWidth: !0,
                                    "data-testid": "OptionsButton",
                                  },
                                  r.createElement(ai.QB, {
                                    code: "egstore.library.install_location_modal.options",
                                  }),
                                ),
                              ),
                          ),
                        ),
                        !n &&
                          r.createElement(
                            _,
                            { xs: 12 },
                            r.createElement(Jf, { path: g }),
                          ),
                        u,
                      ),
                ),
                footer: r.createElement(
                  B.j,
                  {
                    content: r.createElement(
                      "div",
                      null,
                      t &&
                        r.createElement(
                          b.a,
                          { alignItems: E.ep.Center },
                          r.createElement(
                            p.E,
                            {
                              as: "span",
                              variant: Y.ZJ.UISM,
                              color: Y.Uf.SECONDARY,
                            },
                            r.createElement(
                              "span",
                              { className: f.textLabel },
                              r.createElement(ai.QB, {
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
                      v &&
                        r.createElement(
                          b.a,
                          { alignItems: E.ep.Center },
                          r.createElement(
                            p.E,
                            {
                              as: "span",
                              variant: Y.ZJ.UISM,
                              color: Y.Uf.SECONDARY,
                            },
                            r.createElement(
                              "span",
                              { className: f.textLabel },
                              r.createElement(ai.QB, {
                                code: "egstore.library.install_location_modal.required_space",
                              }),
                            ),
                            r.createElement(
                              "span",
                              { "data-testid": "requiredSpace" },
                              v,
                            ),
                          ),
                        ),
                    ),
                  },
                  r.createElement(
                    R.u,
                    { disabled: o, onClick: c, "data-testid": "CancelButton" },
                    r.createElement(ai.QB, {
                      code: "diesel.common.smart_button.cancel",
                    }),
                  ),
                  r.createElement(
                    T.S,
                    {
                      disabled: l || o,
                      onClick: d,
                      "data-testid": "InstallButton",
                    },
                    r.createElement(ai.QB, {
                      code: "diesel.common.smart_button.install",
                    }),
                  ),
                ),
              })
            : r.createElement(D.k, {
                "data-testid": "InstallLocationModal",
                header: r.createElement(
                  H.r,
                  { onCloseClick: c },
                  r.createElement(
                    de.Ay,
                    { weight: de.EU.BOLD },
                    r.createElement(ai.QB, {
                      code: "egstore.library.install_location_modal.title",
                    }),
                  ),
                ),
                content: o
                  ? r.createElement(
                      b.a,
                      { fillParent: !0, centerContent: !0 },
                      r.createElement($f, {
                        size: Kd.A.LARGE,
                        spinDuration: 0.4,
                      }),
                    )
                  : r.createElement(
                      j,
                      {
                        spacing: 10,
                        role: "form",
                        "aria-label": "Choose Install Location",
                      },
                      r.createElement(
                        _,
                        { xs: 9 },
                        r.createElement(ie, {
                          id: "directoryPath",
                          name: "directoryPath",
                          inputHeight: z.eL.DENSED,
                          placeholder: "/",
                          value: e,
                          noBackground: !0,
                          readOnly: !0,
                          error: !!a,
                          helperText: a,
                          "data-testid": "directoryPath",
                          label: r.createElement(ai.QB, {
                            code: "egstore.library.install_location_modal.folder",
                          }),
                        }),
                        n && r.createElement(Jf, { path: g }),
                      ),
                      r.createElement(
                        _,
                        { xs: 3 },
                        r.createElement(
                          "div",
                          { className: f.buttonDiv },
                          r.createElement(
                            bl.e6,
                            {
                              buttonHeight: z.eL.DENSED,
                              buttonWidth: z.Rj.BLOCK,
                              onClick: i,
                              "data-testid": "BrowseButton",
                            },
                            r.createElement(
                              Uf.A,
                              null,
                              r.createElement(ai.QB, {
                                code: "egstore.library.install_location_modal.browse",
                              }),
                            ),
                          ),
                          n &&
                            r.createElement(
                              "div",
                              { className: f.spacingTop },
                              r.createElement(
                                gl.rp,
                                {
                                  buttonHeight: z.eL.DENSED,
                                  buttonWidth: z.Rj.BLOCK,
                                  onClick: m,
                                  "data-testid": "OptionsButton",
                                },
                                r.createElement(
                                  Uf.A,
                                  null,
                                  r.createElement(ai.QB, {
                                    code: "egstore.library.install_location_modal.options",
                                  }),
                                ),
                              ),
                            ),
                        ),
                      ),
                      !n &&
                        r.createElement(
                          _,
                          { xs: 12 },
                          r.createElement(Jf, { path: g }),
                        ),
                      u,
                    ),
                footer: r.createElement(
                  B.j,
                  {
                    content: r.createElement(
                      "div",
                      null,
                      t &&
                        r.createElement(
                          b.a,
                          { alignItems: E.ep.Center },
                          r.createElement(
                            "span",
                            { className: f.textLabel },
                            r.createElement(
                              V.A,
                              { textLevel: W.qo.SECONDARY },
                              r.createElement(ai.QB, {
                                code: "egstore.library.install_location_modal.download_size",
                              }),
                            ),
                          ),
                          r.createElement(
                            "span",
                            { "data-testid": "downloadSize" },
                            r.createElement(V.A, null, t),
                          ),
                        ),
                      v &&
                        r.createElement(
                          b.a,
                          { alignItems: E.ep.Center },
                          r.createElement(
                            "span",
                            { className: f.textLabel },
                            r.createElement(
                              V.A,
                              { textLevel: W.qo.SECONDARY },
                              r.createElement(ai.QB, {
                                code: "egstore.library.install_location_modal.required_space",
                              }),
                            ),
                          ),
                          r.createElement(
                            "span",
                            { "data-testid": "requiredSpace" },
                            r.createElement(V.A, null, v),
                          ),
                        ),
                    ),
                  },
                  r.createElement(
                    R.u,
                    { disabled: o, onClick: c, "data-testid": "CancelButton" },
                    r.createElement(ai.QB, {
                      code: "diesel.common.smart_button.cancel",
                    }),
                  ),
                  r.createElement(
                    T.S,
                    {
                      disabled: l || o,
                      onClick: d,
                      "data-testid": "InstallButton",
                    },
                    r.createElement(ai.QB, {
                      code: "diesel.common.smart_button.install",
                    }),
                  ),
                ),
              });
        };
      var Zf = Object.defineProperty,
        Qf = Object.getOwnPropertySymbols,
        Xf = Object.prototype.hasOwnProperty,
        ey = Object.prototype.propertyIsEnumerable,
        ty = (e, t, a) =>
          t in e
            ? Zf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        ay = (e, t) => {
          for (var a in t || (t = {})) Xf.call(t, a) && ty(e, a, t[a]);
          if (Qf) for (var a of Qf(t)) ey.call(t, a) && ty(e, a, t[a]);
          return e;
        };
      const ry = (e) =>
        r.createElement(xe, {
          hasHeader: !0,
          hasFooter: !0,
          hasPrimaryButton: !0,
          hasSecondaryButton: !0,
          titleWidth: 200,
          content: r.createElement(
            j,
            {
              spacing: 10,
              role: "form",
              "aria-label": "Choose Install Location",
              "data-testid": "InstallLocationModalSkeleton",
            },
            r.createElement(
              _,
              { xs: 12 },
              r.createElement(
                we.EA,
                ay({ variant: we.qd.Text, width: 50, height: 20 }, e),
              ),
            ),
            r.createElement(
              _,
              { xs: 9 },
              r.createElement(we.EA, ay({ width: "100%", height: 40 }, e)),
            ),
            r.createElement(
              _,
              { xs: 3 },
              r.createElement(we.EA, ay({ width: "100%", height: 40 }, e)),
            ),
            r.createElement(
              _,
              { xs: 12 },
              r.createElement(
                "div",
                { style: { margin: "20px 0" } },
                r.createElement(
                  we.EA,
                  ay({ variant: we.qd.Text, width: "80%", height: 25 }, e),
                ),
              ),
            ),
          ),
        });
      var ny = a(81240),
        ly = a(8430);
      const oy = (0, v.W)(() => ({ textLabel: (0, g.AH)((0, ue.S$)(10)) })),
        iy = ({
          ariaLabel: e,
          checked: t = !1,
          id: a,
          label: n,
          onClick: l,
        }) => {
          const o = (0, s.useSelector)(K.k),
            i = oy();
          return o
            ? r.createElement(
                _,
                { xs: 12 },
                r.createElement(
                  b.a,
                  { alignItems: E.ep.Center },
                  r.createElement(ny.S, {
                    id: a,
                    "aria-label": e,
                    label: n,
                    checked: t,
                    onChange: l,
                  }),
                ),
              )
            : r.createElement(
                _,
                { xs: 12 },
                r.createElement(
                  b.a,
                  { alignItems: E.ep.Center },
                  r.createElement(ly.S, {
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
                      r.createElement(de.Ay, null, n),
                    ),
                  ),
                ),
              );
        },
        cy =
          (e) =>
          ({ value: t, onClick: a }) => {
            const n = (0, ai.B2)();
            return r.createElement(iy, {
              id: e.id,
              ariaLabel: n(e.titleCode),
              label: r.createElement(ai.QB, { code: e.titleCode }),
              checked: t,
              onClick: a,
            });
          },
        sy = cy({
          id: "installAutoUpdate",
          titleCode: "egstore.library.install_location_modal.auto_update",
        }),
        dy = cy({
          id: "createShortcut",
          titleCode: "egstore.library.install_location_modal.create_shortcut",
        });
      var my = a(33329);
      var uy = a(20513);
      const py = (0, g.AH)((0, ue.S$)(4)),
        gy = ({
          title: e,
          supportLinkTo: t,
          onOpenSettingsClick: a,
          onCancelClick: r,
        }) =>
          n().createElement(cn._, {
            modalTitle: n().createElement(se.A, {
              code: "egstore.library.launcher_upgrade_modal.update_required",
            }),
            title: n().createElement(se.A, {
              code: "egstore.library.launcher_upgrade_modal.title",
              args: [e],
            }),
            subTitle: n().createElement(
              n().Fragment,
              null,
              n().createElement(
                "p",
                null,
                n().createElement(se.A, {
                  code: "egstore.library.launcher_upgrade_modal.subtitle",
                  args: [e],
                }),
              ),
              n().createElement(
                "p",
                null,
                n().createElement(
                  uy.Yq,
                  { to: t, isExternalUrl: !0 },
                  n().createElement(se.A, {
                    code: "egstore.library.launcher_upgrade_modal.link",
                  }),
                ),
                n().createElement(
                  "span",
                  { className: py },
                  n().createElement(se.A, {
                    code: "egstore.library.launcher_upgrade_modal.body",
                  }),
                ),
              ),
            ),
            secondaryButton: n().createElement(
              R.u,
              { onClick: r },
              n().createElement(se.A, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: n().createElement(
              T.S,
              { onClick: a },
              n().createElement(se.A, {
                code: "egstore.library.launcher_upgrade_modal.open_settings",
              }),
            ),
            onCloseClick: r,
          }),
        by = bp("launcher-upgrade-modal"),
        Ey = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            l = (0, ob.q)(e, t, a),
            o = (() => {
              const e = (0, d.useLocalizationLocale)();
              return (0, r.useMemo)(
                () =>
                  "https://www.epicgames.com/help/{locale}/c-Category_EpicGamesStore/c-EpicGamesStore_ErrorCodes/launcher-update-required-when-trying-to-launch-a-ubisoft-game-a000089058".replace(
                    "{locale}",
                    e,
                  ),
                [e],
              );
            })(),
            { closeModal: i } = by(),
            c = (0, my.A)(),
            s = (0, r.useCallback)(() => {
              c(), i();
            }, [c, i]);
          return n().createElement(gy, {
            title: l,
            supportLinkTo: o,
            onOpenSettingsClick: s,
            onCancelClick: i,
          });
        },
        vy = () => {
          const { isOpen: e, getData: t, cancelModal: a } = by(),
            r = t();
          return r
            ? n().createElement(
                He.a,
                { isOpen: e, onClose: a },
                n().createElement(
                  Ld.AZ.Provider,
                  { value: r },
                  n().createElement(Ey, null),
                ),
              )
            : null;
        };
      const fy = bp("install-location-modal"),
        yy = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            { closeModal: n, cancelModal: l, getData: o } = fy(),
            { additionalInstalls: i } = o() || {},
            c = Ff(),
            d = up(),
            m = Hf(),
            { installState: u } = (0, ym.z)(e, t, a),
            [p, g] = r.useState(!0),
            [b, E] = r.useState(!0),
            [v, f] = r.useState(!1),
            { path: y, directoryPath: h } = ((e, t, a) => {
              const { installState: n } = (0, ym.z)(e, t, a),
                l = r.useMemo(() => (0, hm.xK)(n), [n]),
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
            C = ((e, t, a) => {
              const n = (0, uu.f)(e, t, a),
                { globalAutoUpdate: l } = xb(),
                o = (0, r.useMemo)(() => (0, ti.U3)(n), [n]),
                i = (0, r.useMemo)(
                  () => (0, ea.zl)(null == n ? void 0 : n.categories),
                  [n],
                );
              return !o && l && !i;
            })(e, t, a),
            A = (() => {
              const e = (0, s.useSelector)(vr.md);
              return e === wb.B1.WINDOWS || e === wb.B1.WIN32;
            })(),
            O = ((e, t, a) => {
              const { installState: n } = (0, ym.z)(e, t, a);
              return (0, r.useMemo)(() => (0, hm.Ur)(n), [n]);
            })(e, t, a),
            { metadata: I } = ((e = "", t = "") => {
              const a = (0, s.useDispatch)(),
                n = (0, r.useMemo)(() => (0, br.RY)(t), [t]),
                l = (0, s.useSelector)(n),
                o = Boolean(e && t),
                i =
                  !(null == l ? void 0 : l.state) ||
                  (null == l ? void 0 : l.state) === Fe.V.notAsked;
              return (
                (0, r.useEffect)(() => {
                  o && i && a((0, Er.Lk)({ sandboxId: e, artifactId: t }));
                }, [o, i]),
                (0, r.useMemo)(
                  () => ({
                    metadata: null == l ? void 0 : l.latestValue,
                    query: {
                      isFetching:
                        (null == l ? void 0 : l.state) === Fe.V.fetching,
                      isSuccess:
                        (null == l ? void 0 : l.state) === Fe.V.success,
                    },
                  }),
                  [
                    null == l ? void 0 : l.latestValue,
                    null == l ? void 0 : l.state,
                  ],
                )
              );
            })(e, a),
            S = (0, hm.z3)((null == I ? void 0 : I.downloadSizeBytes) || 0),
            w = (0, hm.z3)((null == I ? void 0 : I.installedSizeBytes) || 0);
          (0, r.useEffect)(
            () => (
              (0, $t.Ay)().installDialogOpen(e, t, a),
              () => {
                (0, $t.Ay)().installDialogClosed(e, t, a);
              }
            ),
            [],
          );
          const x = r.useMemo(() => (0, hm.$A)(u), [u]),
            k = r.useMemo(
              () => Boolean(!y || x),
              [y, null == u ? void 0 : u.stateerror],
            ),
            P = r.useCallback(() => {
              c({ namespace: e, catalogId: t, appName: a });
            }, [c, e, t, a]),
            N = r.useCallback(() => {
              d({ namespace: e, catalogId: t, appName: a });
            }, [d, e, t, a]),
            M = r.useCallback(() => {
              f(!0);
              var r, l, o;
              ((r = void 0),
              (l = null),
              (o = function* () {
                const r = yield m({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  options: { autoUpdate: p, createShortcut: b },
                });
                return (
                  i &&
                    (yield Promise.all(
                      i.map((e) =>
                        m({
                          namespace: e.namespace,
                          catalogId: e.catalogItemId,
                          appName: e.appName,
                          options: { autoUpdate: p, createShortcut: b },
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
            }, [n, m, e, t, a, p, b, i]);
          return r.createElement(Kf, {
            isInstallDisabled: k,
            hasInstallOptions: O,
            isBusy: v,
            onBrowseClick: P,
            onCancelClick: l,
            onInstallClick: M,
            onInstallOptionsClick: N,
            path: y,
            directoryPath: h,
            error: x,
            downloadSize: S,
            requiredSpace: w,
            options: r.createElement(
              r.Fragment,
              null,
              C &&
                r.createElement(sy, { value: p, onClick: () => g((e) => !e) }),
              A &&
                r.createElement(dy, { value: b, onClick: () => E((e) => !e) }),
            ),
          });
        },
        hy = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            n = zf(),
            { closeModal: l } = fy(),
            { openModal: o } = by(),
            i = (0, uu.f)(e, t, a),
            { isThirdPartyManaged: c, triggerInstallToast: s } = (0, Mu.K)(
              e,
              t,
              a,
            ),
            d = (0, $t.Ay)().supportsWebClientInstallFlow(),
            m = ju(e, t, a),
            u = m && (0, ti.U3)(i),
            p = (0, $t.Ay)().supportsUbisoftThirdPartyInstalls(),
            g = m && !p && !(0, ti.U3)(i);
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
                  funnelId: Sc.dE.MANAGE_PRODUCT_MODAL,
                }),
                c && s(),
                l());
            }, [g, p, u, d, c, e, t, a]),
            g
              ? r.createElement(ry, null)
              : (u && !p) || (d && !c)
                ? r.createElement(yy, null)
                : r.createElement(ry, null)
          );
        },
        Cy = () => {
          const { isOpen: e, cancelModal: t, getData: a } = fy(),
            n = a();
          return n
            ? r.createElement(
                He.a,
                { isOpen: e, onClose: t },
                r.createElement(
                  i.tY,
                  { fallback: r.createElement(ry, null) },
                  r.createElement(
                    Ld.AZ.Provider,
                    { value: n },
                    r.createElement(hy, null),
                  ),
                ),
              )
            : null;
        },
        Ay = (e) => {
          const { namespace: t, catalogItemId: a, appName: n } = e,
            { openModal: l } = fy(),
            o = Hf(),
            i = (0, pb.b)(t, a, n),
            { isLaunchableAddon: c, install: s } = Eb(t, a, n),
            { installState: d } = (0, ym.z)(
              c ? (null == i ? void 0 : i.namespace) : "",
              c ? (null == i ? void 0 : i.catalogItemId) : "",
              c ? (null == i ? void 0 : i.appName) : "",
            );
          return (0, r.useCallback)(() => {
            const t = (0, hm.Wl)(d),
              a = (0, hm.Ji)(d),
              r = (0, hm.GM)(d);
            if (c && d)
              if ((0, $t.Ay)().supportsLaunchableAddonsV2Flow()) {
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
        Oy = Rf({
          useButtonAction: Ay,
          SubtitleComponent: Bf.N,
          hasSettingsMenu: !0,
        }),
        Iy = Rf({
          useButtonAction: Ay,
          SubtitleComponent: Bf._,
          hasSettingsMenu: !0,
        });
      var Sy = a(42414);
      const wy = Rf({
          useButtonAction: Sy.b,
          SubtitleComponent: Dl.h8,
          hasSettingsMenu: !0,
        }),
        xy = Rf({
          useButtonAction: Sy.b,
          SubtitleComponent: Dl.Xp,
          hasSettingsMenu: !0,
        }),
        ky = Rf({
          useButtonAction: Sy.b,
          SubtitleComponent: Dl.ix,
          hasSettingsMenu: !0,
        });
      var Py = a(33475);
      const Ny = Rf({
        useButtonAction: Od,
        SubtitleComponent: Py.Y,
        hasSettingsMenu: !1,
      });
      var My = a(90574),
        Ly = a(71180);
      const jy = Rf({
        useButtonAction: Ly.F,
        SubtitleComponent: My.E,
        hasSettingsMenu: !0,
      });
      var _y = a(724);
      const Ty = Rf({
        useButtonAction: ({ namespace: e }) => {
          const { gotoProductHome: t } = sp(e, { suspense: !1 });
          return t;
        },
        SubtitleComponent: _y.V,
        hasSettingsMenu: !0,
        isDark: !0,
      });
      var Ry = a(21030),
        Dy = a(66238);
      const By = (0, Dy.o)(Fg),
        Hy = Rf({
          useButtonAction: By,
          SubtitleComponent: Ry.Z,
          hasSettingsMenu: !1,
        });
      var Fy = a(80327);
      const zy = Rf({
        useButtonAction: () => (0, _d.R)("UE"),
        SubtitleComponent: Fy.w,
        hasSettingsMenu: !1,
      });
      var Uy = a(4088),
        Vy = a(10407),
        Wy = a(90952);
      const qy = (0, Dy.o)(Uy.y),
        Gy = (0, Dy.o)(Vy.T),
        $y = Rf({
          useButtonAction: Od,
          SubtitleComponent: Wy.pl,
          hasSettingsMenu: !1,
        }),
        Yy = Rf({
          useButtonAction: qy,
          SubtitleComponent: Wy.hb,
          hasSettingsMenu: !0,
        }),
        Jy = Rf({
          useButtonAction: Gy,
          SubtitleComponent: Wy.Fo,
          hasSettingsMenu: !0,
        }),
        Ky = Rf({
          useButtonAction: Od,
          SubtitleComponent: o.O,
          hasSettingsMenu: !1,
        });
      var Zy = a(29516);
      const Qy = Rf({
        useButtonAction: Od,
        SubtitleComponent: Zy.N,
        hasSettingsMenu: !0,
      });
      var Xy = a(6521),
        eh = a(19982);
      const th = Rf({
        useButtonAction: eh.V,
        SubtitleComponent: Xy._,
        hasSettingsMenu: !0,
      });
      var ah = a(92120);
      const rh = Rf({
        useButtonAction: Od,
        SubtitleComponent: ah.N,
        hasSettingsMenu: !0,
      });
      var nh = a(40303);
      const lh = Rf({
        useButtonAction: Od,
        SubtitleComponent: nh.k,
        hasSettingsMenu: !0,
      });
      var oh = a(89716);
      const ih = Rf({
        useButtonAction: Od,
        SubtitleComponent: oh.v,
        hasSettingsMenu: !0,
      });
      Rf({ useButtonAction: Od, SubtitleComponent: oh.R, hasSettingsMenu: !0 });
      var ch = a(84380);
      const sh = Rf({
        useButtonAction: Od,
        SubtitleComponent: ch.n,
        hasSettingsMenu: !1,
      });
      var dh = a(47571),
        mh = a(13583);
      const uh = Rf({
        useButtonAction: dh.Y,
        SubtitleComponent: mh.o,
        hasSettingsMenu: !0,
      });
      var ph = a(27920);
      const gh = Rf({
        useButtonAction: ({ namespace: e }) => {
          const { gotoProductHome: t } = sp(e, { suspense: !1 });
          return t;
        },
        SubtitleComponent: ph.B,
        hasSettingsMenu: !0,
      });
      var bh = a(34222);
      const Eh = Rf({
        useButtonAction: Od,
        SubtitleComponent: bh.W,
        hasSettingsMenu: !0,
      });
      var vh = a(34884);
      const fh = Rf({
        useButtonAction: Od,
        SubtitleComponent: vh.T,
        hasSettingsMenu: !0,
      });
      var yh = a(85660),
        hh = a(50647);
      const Ch = Rf({
        useButtonAction: hh.L,
        SubtitleComponent: yh.T,
        hasSettingsMenu: !0,
        hasUpdate: !0,
      });
      var Ah = a(16358),
        Oh = a(39340);
      const Ih = (e) =>
          _u(Tu.t.Ubisoft, null == e ? void 0 : e.customAttributes),
        Sh = Rf({
          useButtonAction: ({ namespace: e, catalogItemId: t, appName: a }) => {
            const n = (0, s.useDispatch)(),
              { uplayCodes: l } = (0, Ru.iT)(),
              o = (0, xu.t)(e, t, a, {
                includeMainGameItem: !0,
                includeHiddenAddons: !0,
              }),
              i = (0, r.useMemo)(() => {
                const e = o.map((e) => e.catalogItem);
                return (0, Du.r)(e.map(Ih)).filter(
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
                n((0, Oh.E)({ partnerGameIds: i }));
            }, [i, n]);
          },
          SubtitleComponent: Ah.T,
          hasSettingsMenu: !1,
        }),
        wh = () => {
          const e = (0, s.useDispatch)();
          return (0, r.useCallback)(() => {
            e(qs.Ay.startUplayLinkProcess());
          }, [e]);
        };
      var xh = a(30848);
      const kh = Rf({
        useButtonAction: wh,
        SubtitleComponent: xh.z,
        hasSettingsMenu: !1,
      });
      var Ph = a(31739),
        Nh = a(37245);
      const Mh = (0, Ph.V)({
          icon: r.createElement(kv.T, null),
          Component: Nh.Un,
        }),
        Lh = Rf({
          useButtonAction: Od,
          SubtitleComponent: Mh,
          hasSettingsMenu: !0,
        }),
        jh = {
          [ap.r.Banned]: Df,
          [ap.r.CanInstall]: Oy,
          [ap.r.CanLaunchMultiple]: xy,
          [ap.r.CanLaunchRestricted]: ky,
          [ap.r.CanLaunch]: wy,
          [ap.r.CanPreInstall]: Iy,
          [ap.r.CloudSyncing]: Ny,
          [ap.r.Corrupted]: jy,
          [ap.r.ForceGet]: Ty,
          [ap.r.ForceUninstall]: Hy,
          [ap.r.GotoHub]: zy,
          [ap.r.InstallingPaused]: Jy,
          [ap.r.InstallingPreparing]: $y,
          [ap.r.Installing]: Yy,
          [ap.r.Loading]: Ky,
          [ap.r.Offline]: Qy,
          [ap.r.PartiallyInstalled]: th,
          [ap.r.PreInstalled]: rh,
          [ap.r.PrePurchased]: lh,
          [ap.r.QueuedForUpdate]: ih,
          [ap.r.Queued]: ih,
          [ap.r.Running]: sh,
          [ap.r.SelfUpdate]: Ky,
          [ap.r.SignIn]: uh,
          [ap.r.Subscription]: gh,
          [ap.r.Unavailable]: Eh,
          [ap.r.Unsupported]: fh,
          [ap.r.Update]: Ch,
          [ap.r.UplayRedeem]: Sh,
          [ap.r.UplaySignIn]: kh,
          [ap.r.WaitingInLine]: Lh,
        };
      var _h = a(76794),
        Th = Object.defineProperty,
        Rh = Object.getOwnPropertySymbols,
        Dh = Object.prototype.hasOwnProperty,
        Bh = Object.prototype.propertyIsEnumerable,
        Hh = (e, t, a) =>
          t in e
            ? Th(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const Fh = ({
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
              const r = tp(e, t, a);
              return jh[r];
            })({ namespace: t, catalogItemId: a, appName: n }),
            i = r.useMemo(() => (e === gr.p5.Grid ? l : o), [e, l, o]),
            c = r.useMemo(
              () => ({ namespace: t, catalogItemId: a, appName: n }),
              [t, a, n],
            );
          return r.createElement(
            Ld.AZ.Provider,
            { value: c },
            r.createElement(i, null),
          );
        },
        zh = (e) => {
          var t = e,
            { index: a = -1, layout: n } = t,
            l = ((e, t) => {
              var a = {};
              for (var r in e)
                Dh.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Rh)
                for (var r of Rh(e))
                  t.indexOf(r) < 0 && Bh.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["index", "layout"]);
          const [o, c] = r.useState(a >= 0 && a < 24),
            s = (0, r.useCallback)(
              ({ isIntersecting: e }) => {
                c(e);
              },
              [c],
            ),
            d = r.useMemo(() => (n === gr.p5.Grid ? Us : Vs), [n]);
          return r.createElement(
            _h.Ay,
            { disabled: o, rootMargin: "50%", onChange: s },
            r.createElement(
              "div",
              null,
              o
                ? r.createElement(
                    i.tY,
                    { fallback: r.createElement(d, { animation: we.J6.None }) },
                    r.createElement(
                      Fh,
                      ((e, t) => {
                        for (var a in t || (t = {}))
                          Dh.call(t, a) && Hh(e, a, t[a]);
                        if (Rh)
                          for (var a of Rh(t)) Bh.call(t, a) && Hh(e, a, t[a]);
                        return e;
                      })({ layout: n }, l),
                    ),
                  )
                : r.createElement(d, { animation: we.J6.None }),
            ),
          );
        };
      var Uh = a(14531);
      const Vh = (0, v.W)((e, t) => ({
          wrapper: (0, g.AH)({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: t ? "32px 48px" : "192px 0 20px 0",
            gap: 24,
          }),
          title: (0, g.AH)({ width: 608 }),
        })),
        Wh = () => {
          const e = (0, s.useSelector)(K.k),
            t = Vh(e),
            { resetFilters: a } = Nr(),
            { selectedCollectionId: n } = Br(),
            l = r.useMemo(
              () =>
                n === kt.V.ALL
                  ? "egstore.library.empty_filter_results.title.all"
                  : "egstore.library.empty_filter_results.title.collection",
              [n],
            ),
            o = r.useMemo(
              () =>
                n === kt.V.ALL
                  ? "egstore.library.empty_filter_results.button.all"
                  : "egstore.library.empty_filter_results.button.collection",
              [n],
            ),
            i = () =>
              e
                ? r.createElement(
                    p.E,
                    { variant: Y.ZJ.HMD, color: Y.Uf.PRIMARY },
                    r.createElement(se.A, { code: l }),
                  )
                : r.createElement(
                    Uh.A.Heading,
                    { headingLevel: 1 },
                    r.createElement(se.A, { code: l }),
                  ),
            c = () =>
              e
                ? r.createElement(
                    cl.$,
                    {
                      variant: Y.ml.PRIMARY,
                      size: Y.sp.LG,
                      onClick: () => a(),
                    },
                    r.createElement(se.A, { code: o }),
                  )
                : r.createElement(
                    gl.rp,
                    { onClick: () => a() },
                    r.createElement(se.A, { code: o }),
                  );
          return r.createElement(
            "div",
            {
              className: t.wrapper,
              "data-testid": "empty-filter-result-alert",
            },
            e &&
              r.createElement(Jd.A, {
                icon: Zd.A.STRESSED_FACE_EDS,
                size: Kd.A.LARGE,
              }),
            r.createElement(
              "div",
              { "aria-live": "polite", role: "alert", className: t.title },
              r.createElement(i, null),
            ),
            r.createElement(c, null),
          );
        },
        qh = ({ pageSize: e, options: t, onChange: a, layout: r }) =>
          n().createElement(rs.w, {
            id: "page-size-dropdown",
            label: n().createElement(se.A, {
              code: `egstore.library.page_size.title.${r.toLowerCase()}`,
            }),
            options: t,
            selectedValue: e,
            onChange: a,
          });
      var Gh = ((e) => (
        (e.Page = "page"),
        (e.Previous = "previous"),
        (e.StartEllipsis = "start-ellipsis"),
        (e.Next = "next"),
        (e.EndEllipsis = "end-ellipsis"),
        e
      ))(Gh || {});
      const $h = (e, t) => {
        const a = t - e + 1;
        return Array.from({ length: a }, (t, a) => e + a);
      };
      var Yh = a(48412),
        Jh = a(39279),
        Kh = Object.defineProperty,
        Zh = Object.getOwnPropertySymbols,
        Qh = Object.prototype.hasOwnProperty,
        Xh = Object.prototype.propertyIsEnumerable,
        eC = (e, t, a) =>
          t in e
            ? Kh(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        tC = (e, t) => {
          for (var a in t || (t = {})) Qh.call(t, a) && eC(e, a, t[a]);
          if (Zh) for (var a of Zh(t)) Xh.call(t, a) && eC(e, a, t[a]);
          return e;
        };
      const aC = (0, v.W)((e) => ({
          delimiter: (0, g.AH)({ color: e.textSecondary }),
          number: (0, g.AH)({
            'button:hover:not([disabled]) &, button[aria-current="true"] &': {
              color: e.textPrimary,
              fontWeight: ke.Wy.bold,
            },
            "button:disabled &": { display: "none" },
          }),
          icon: (0, g.AH)((0, ue.hp)("rtl")),
        })),
        rC = (e) => {
          var t = e,
            {
              page: a,
              selected: n = !1,
              disabled: l = !1,
              type: o = Gh.Page,
              onClick: i,
            } = t,
            c = ((e, t) => {
              var a = {};
              for (var r in e)
                Qh.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
              if (null != e && Zh)
                for (var r of Zh(e))
                  t.indexOf(r) < 0 && Xh.call(e, r) && (a[r] = e[r]);
              return a;
            })(t, ["page", "selected", "disabled", "type", "onClick"]);
          const s = aC(),
            m = ((e, t, a) => {
              const n = (0, d.useLocalization)();
              return r.useMemo(
                () =>
                  e === Gh.Page
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
          return o === Gh.StartEllipsis || o === Gh.EndEllipsis
            ? r.createElement("div", { className: s.delimiter }, "…")
            : o === Gh.Previous
              ? r.createElement(
                  "div",
                  { className: s.icon, "data-testid": "previous" },
                  r.createElement(
                    mt.K,
                    tC(
                      { disabled: l, onClick: () => i(a - 1), "aria-label": m },
                      c,
                    ),
                    r.createElement(Yh.Y, null),
                  ),
                )
              : o === Gh.Next
                ? r.createElement(
                    "div",
                    { className: s.icon, "data-testid": "next" },
                    r.createElement(
                      mt.K,
                      tC(
                        {
                          disabled: l,
                          onClick: () => i(a + 1),
                          "aria-label": m,
                        },
                        c,
                      ),
                      r.createElement(Jh.f, null),
                    ),
                  )
                : r.createElement(
                    bl.B_,
                    tC(
                      tC(
                        {
                          buttonWidth: z.Rj.AUTO,
                          disabled: l,
                          onClick: () => i(a),
                          "aria-label": m,
                        },
                        c,
                      ),
                      n ? { "aria-current": !0 } : {},
                    ),
                    r.createElement(
                      U.A,
                      { textLevel: W.qo.SECONDARY },
                      r.createElement("span", { className: s.number }, a),
                    ),
                  );
        };
      var nC = a(92619),
        lC = Object.defineProperty,
        oC = Object.defineProperties,
        iC = Object.getOwnPropertyDescriptors,
        cC = Object.getOwnPropertySymbols,
        sC = Object.prototype.hasOwnProperty,
        dC = Object.prototype.propertyIsEnumerable,
        mC = (e, t, a) =>
          t in e
            ? lC(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const uC = {
          list: (0, g.AH)({
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }),
          listItem: (0, g.AH)({
            width: 50,
            textAlign: "center",
            "&:first-of-type": (0, ue.hz)(8),
          }),
        },
        pC = ({ page: e, totalPages: t, onClick: a }) => {
          const n = r.useRef(null),
            l = (0, d.useLocalization)(),
            { items: o } = (({ totalPages: e, page: t }) => {
              const a = (0, r.useMemo)(() => $h(1, Math.min(1, e)), [e]),
                n = (0, r.useMemo)(() => $h(Math.max(e - 1 + 1, 2), e), [e]),
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
                    ...$h(l, o),
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
              nC.B,
              { data: o, className: uC.list, itemClassName: uC.listItem },
              (e, t) => {
                return r.createElement(
                  rC,
                  ((n = ((e, t) => {
                    for (var a in t || (t = {}))
                      sC.call(t, a) && mC(e, a, t[a]);
                    if (cC)
                      for (var a of cC(t)) dC.call(t, a) && mC(e, a, t[a]);
                    return e;
                  })({}, e)),
                  (l = { onClick: a, key: `${e.page}-${t}` }),
                  oC(n, iC(l))),
                );
                var n, l;
              },
            ),
          );
        };
      var gC = a(96416),
        bC = Object.defineProperty,
        EC = Object.getOwnPropertySymbols,
        vC = Object.prototype.hasOwnProperty,
        fC = Object.prototype.propertyIsEnumerable,
        yC = (e, t, a) =>
          t in e
            ? bC(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        hC = (e, t) => {
          for (var a in t || (t = {})) vC.call(t, a) && yC(e, a, t[a]);
          if (EC) for (var a of EC(t)) fC.call(t, a) && yC(e, a, t[a]);
          return e;
        };
      const CC = {
          footer: (0, g.AH)({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }),
          pagination: (0, g.AH)({
            [ke.aq.lg]: hC({}, (0, ue.hz)(31)),
            [ke.aq.xl]: hC({}, (0, ue.hz)(42)),
            [ke.aq.maxWidth]: hC({}, (0, ue.hz)(57)),
          }),
        },
        AC = ({
          totalItems: e,
          totalPages: t,
          page: a,
          setPage: r,
          pageSize: l,
          setPageSize: o,
          options: i,
          keyword: c,
          layout: d,
        }) => {
          const m = (0, s.useSelector)(K.k),
            u = a * l - l,
            g = u + 1,
            b = e < l ? e : l,
            E = u + b > e ? e : u + b,
            v = t > 1,
            f = al(c),
            y = n().useMemo(
              () =>
                g === e
                  ? n().createElement(
                      "div",
                      { "data-testid": "shortened-text" },
                      n().createElement(se.A, {
                        code: "egstore.library.hub.product.plugins.showing_last",
                        args: [g, e],
                      }),
                    )
                  : n().createElement(
                      "div",
                      { "data-testid": "full-text" },
                      n().createElement(se.A, {
                        code: "egstore.library.hub.product.plugins.showing",
                        args: [g, E, e],
                      }),
                    ),
              [g, E, e],
            );
          n().useEffect(
            () => (l >= e || c !== f ? r(1) : a >= t ? r(t) : void 0),
            [l, e, c],
          );
          const h = n().useCallback(
              (e) => {
                a !== e && r(e),
                  (0, Ga.c)().window.scrollTo({ top: 0, behavior: "smooth" });
              },
              [a, l, e],
            ),
            C = n().useCallback(
              () =>
                m
                  ? n().createElement(
                      p.E,
                      { variant: Y.ZJ.UIMD, color: Y.Uf.SECONDARY },
                      y,
                    )
                  : n().createElement(de.Ay, { textLevel: W.qo.SECONDARY }, y),
              [m, y],
            );
          return n().createElement(
            "div",
            { className: CC.footer },
            n().createElement(C, null),
            v &&
              n().createElement(
                "div",
                { className: CC.pagination },
                m
                  ? n().createElement(gC.A, {
                      totalPages: t,
                      itemsPerPage: l,
                      page: a,
                      onChange: (e, t) => h(t),
                    })
                  : n().createElement(pC, {
                      page: a,
                      totalPages: t,
                      onClick: h,
                    }),
              ),
            e > i[0].value
              ? n().createElement(qh, {
                  pageSize: l,
                  onChange: o,
                  options: i,
                  layout: d,
                })
              : null,
          );
        };
      var OC = Object.defineProperty,
        IC = Object.defineProperties,
        SC = Object.getOwnPropertyDescriptors,
        wC = Object.getOwnPropertySymbols,
        xC = Object.prototype.hasOwnProperty,
        kC = Object.prototype.propertyIsEnumerable,
        PC = (e, t, a) =>
          t in e
            ? OC(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const NC = ({ totalItems: e, options: t, key: a }) => {
        const l = (0, s.useSelector)(vr.n9),
          o = t[0].value,
          [i, c] = (0, r.useState)(1),
          d = {
            keyFn: () => `${a}_${l || Na.c.ANONYMOUS}`,
            localStorageEnabled: !0,
          },
          { value: m, setValue: u } = pr(
            ((p = ((e, t) => {
              for (var a in t || (t = {})) xC.call(t, a) && PC(e, a, t[a]);
              if (wC) for (var a of wC(t)) kC.call(t, a) && PC(e, a, t[a]);
              return e;
            })({}, d)),
            IC(p, SC({ initialValue: o }))),
          );
        var p;
        const g = (0, r.useMemo)(() => {
            const t = Math.ceil(e / (null != m ? m : o));
            return t > 0 ? t : 1;
          }, [e, m]),
          b = (0, r.useCallback)(
            (e) => {
              c((0, Mn.A)(1, g, e));
            },
            [g, c],
          ),
          E = (0, r.useCallback)(
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
              })(e, i, m),
            [m, i],
          );
        return {
          page: i,
          setPage: b,
          totalPages: g,
          pageSize: null != m ? m : o,
          setPageSize: E,
          applyPagination: v,
        };
      };
      var MC = ((e) => (
        (e.TEN = "TEN"),
        (e.TWELVE = "TWELVE"),
        (e.TWENTY_FOUR = "TWENTY_FOUR"),
        e
      ))(MC || {});
      var LC = a(75745),
        jC = a(34125),
        _C = a(26767),
        TC = a(63008),
        RC = a(86394),
        DC = a(4288);
      const BC = (0, Kt.A)(
          (0, yu.A)((e) => {
            var t;
            return null != (t = null == e ? void 0 : e.id) ? t : null;
          }),
          (0, _C.A)(TC.A),
        ),
        HC = ({ offerItem: e, catalogItem: t }) => {
          const {
              offer: a,
              offerSubItems: n,
              isBundle: l,
            } = ((e) => {
              const { data: t } = (0, LC._b)(
                  {
                    fields: [LC.rO.items, LC.rO.title, LC.rO.categories],
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                ),
                { offerSubItems: a } = (0, jC.Y)(
                  {
                    offerId: null == e ? void 0 : e.offerId,
                    sandboxId: null == e ? void 0 : e.sandboxId,
                  },
                  { enabled: Boolean(e) },
                );
              return {
                offer: t,
                offerSubItems: a,
                isBundle: (0, ea.Ff)(null == t ? void 0 : t.categories),
              };
            })(e),
            { records: o } = Sa(),
            { data: i } = (0, DC.R7)(
              {
                fields: [DC.id.title],
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
                      const n = BC(
                          null != (r = null == t ? void 0 : t.items) ? r : [],
                        ),
                        l = BC(null != a ? a : []);
                      return (0, RC.A)([...n, ...l]);
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
      var FC = a(80802),
        zC = Object.defineProperty,
        UC = Object.defineProperties,
        VC = Object.getOwnPropertyDescriptors,
        WC = Object.getOwnPropertySymbols,
        qC = Object.prototype.hasOwnProperty,
        GC = Object.prototype.propertyIsEnumerable,
        $C = (e, t, a) =>
          t in e
            ? zC(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const YC = ({ setSortType: e }) => {
        const {
            sort: t,
            offerItem: a,
            catalogItem: n,
            collectionId: l,
            resetQueryParams: o,
          } = yi(),
          { catalogItemIds: i, title: c } = HC({
            offerItem: a,
            catalogItem: n,
          }),
          { setSelectedFilters: s } = Nr(),
          { setValue: d } = pr({
            keyFn: () => gr.V,
            localStorageEnabled: !0,
            initialValue: "",
          });
        (0, r.useEffect)(() => {
          var a, r;
          t === FC.i.PurchaseDate && i.length && c
            ? (e(gr.r3.Recent_Purchased),
              s(
                ((a = ((e, t) => {
                  for (var a in t || (t = {})) qC.call(t, a) && $C(e, a, t[a]);
                  if (WC) for (var a of WC(t)) GC.call(t, a) && $C(e, a, t[a]);
                  return e;
                })({}, xa)),
                (r = { [wa.CATALOG_ITEM_ID]: i }),
                UC(a, VC(r))),
              ),
              d(c))
            : t === FC.i.PurchaseDate && l === kt.V.ALL
              ? (s(xa), e(gr.r3.Recent_Purchased), o())
              : t === FC.i.PurchaseDate && (e(gr.r3.Recent_Purchased), o());
        }, [t, i, c, l]);
      };
      var JC = Object.defineProperty,
        KC = Object.defineProperties,
        ZC = Object.getOwnPropertyDescriptors,
        QC = Object.getOwnPropertySymbols,
        XC = Object.prototype.hasOwnProperty,
        eA = Object.prototype.propertyIsEnumerable,
        tA = (e, t, a) =>
          t in e
            ? JC(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a);
      const aA = ({ layout: e, setLayout: t }) => {
          const { selectedCollectionId: a, setSelectedCollectionId: n } = Br(),
            {
              selectedFilters: l,
              setSelectedFilters: o,
              applySelectedFilters: i,
            } = Nr(),
            { records: c, query: m } = Sa(a),
            u = (0, Pt.S)(),
            p = (0, s.useSelector)(vr.n9),
            {
              sortType: g,
              setSortType: b,
              applySortType: E,
            } = ((e) =>
              as({
                keyFn: () => `${gr.Pd}_${e || Na.c.ANONYMOUS}`,
                localStorageEnabled: !0,
              }))(p),
            v = (0, yl.al)(),
            f = ((e) => {
              const t =
                  (0, d.useLocalization)()("egstore.library.filter.all") ||
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
            })(MC.TWENTY_FOUR),
            y = (0, bi.useHistory)();
          YC({ setSortType: b });
          const h = r.useMemo(() => (0, Kt.A)(i, E)(c), [c, E, i]),
            C = h.length,
            {
              page: A,
              setPage: O,
              totalPages: I,
              pageSize: S,
              setPageSize: w,
              applyPagination: x,
            } = NC({
              totalItems: C,
              options: f,
              key: gr.Xg.EGS_LIBRARY_PAGE_SIZE,
            }),
            k = r.useMemo(() => x(h), [x, h]);
          r.useEffect(() => {
            O(1);
          }, [g, l, a]),
            r.useEffect(() => {
              const e = y.listen((e) => {
                var t, a;
                e.pathname.includes(fi.A.LibraryPath) ||
                  o(
                    ((t = ((e, t) => {
                      for (var a in t || (t = {}))
                        XC.call(t, a) && tA(e, a, t[a]);
                      if (QC)
                        for (var a of QC(t)) eA.call(t, a) && tA(e, a, t[a]);
                      return e;
                    })({}, l)),
                    (a = { [wa.CATALOG_ITEM_ID]: [] }),
                    KC(t, ZC(a))),
                  );
              });
              return () => {
                e();
              };
            }, [l]);
          const P = () => {
              n(kt.V.ALL), b(gr.r3.Recent_Played);
            },
            N = () => {
              n(kt.V.ALL), b(gr.r3.Time_Played);
            },
            M = r.useMemo(() => v || !c.length, [v, c]),
            L = hr(l),
            j = yr(l),
            _ = r.useMemo(() => fr(l), [l]),
            T = !L && c.length < 2 && !_ && !j,
            R = L && M,
            D = (j || _) && !h.length && !M,
            B = r.useMemo(
              () =>
                a === u
                  ? r.createElement(oi, { onActionClick: N })
                  : r.createElement(ni, { onActionClick: P }),
              [a, u],
            );
          return m.isFetching && !c.length
            ? r.createElement(Cd, { layout: e })
            : r.createElement(dd, {
                header: r.createElement(ss, {
                  layoutType: e,
                  onLayoutChange: t,
                  sortType: g,
                  onSortChange: b,
                }),
                footer: k.length
                  ? r.createElement(AC, {
                      totalItems: C,
                      totalPages: I,
                      page: A,
                      setPage: O,
                      pageSize: S,
                      setPageSize: w,
                      options: f,
                      layout: e,
                      keyword: l[wa.KEYWORD],
                    })
                  : null,
                items: k,
                totalItems: C,
                shouldShowEmptyLibraryCard: T,
                renderFilterSidePanel: M ? null : r.createElement(Ac, null),
                renderEmptySearch: D ? r.createElement(Wh, null) : null,
                renderEmptyCollection: R ? B : null,
                layout: e,
                renderItem: (
                  { namespace: t, catalogItemId: a, appName: n },
                  l,
                ) =>
                  r.createElement(zh, {
                    index: l,
                    namespace: t,
                    catalogItemId: a,
                    appName: n,
                    layout: e,
                  }),
              });
        },
        rA = () => {
          const { layoutType: e, setLayoutType: t, isLoaded: a } = vs();
          return r.createElement(
            r.Fragment,
            null,
            a &&
              e &&
              r.createElement(
                i.tY,
                { fallback: r.createElement(Cd, { layout: e }) },
                r.createElement(aA, { layout: e, setLayout: t }),
              ),
          );
        },
        nA = ({ animation: e }) => {
          const t = (0, yl.al)();
          return n().createElement(dd, {
            header: n().createElement(Ws, { animation: e }),
            footer: n().createElement(fd, { animation: e }),
            shouldShowEmptyLibraryCard: !1,
            renderFilterSidePanel: t
              ? null
              : n().createElement(fc, { animation: e }),
          });
        };
      var lA = a(9344),
        oA = Object.defineProperty,
        iA = Object.defineProperties,
        cA = Object.getOwnPropertyDescriptors,
        sA = Object.getOwnPropertySymbols,
        dA = Object.prototype.hasOwnProperty,
        mA = Object.prototype.propertyIsEnumerable,
        uA = (e, t, a) =>
          t in e
            ? oA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        pA = (e, t) => {
          for (var a in t || (t = {})) dA.call(t, a) && uA(e, a, t[a]);
          if (sA) for (var a of sA(t)) mA.call(t, a) && uA(e, a, t[a]);
          return e;
        };
      const gA = (0, g.i7)({
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        }),
        bA = (0, v.W)((e) => {
          return {
            buttonDiv: (0, g.AH)({
              button:
                ((t = pA({}, (0, gt.Jp)("opacity"))),
                (a = {
                  color: e.textPrimary,
                  opacity: 0.4,
                  "&:hover, &:active, &:focus": { opacity: 1 },
                }),
                iA(t, cA(a))),
            }),
            icon: (0, g.AH)({ fontSize: 17 }),
            spin: (0, g.AH)({ svg: { animation: `${gA} 2s linear infinite` } }),
          };
          var t, a;
        }),
        EA = ({ onClick: e, disabled: t, animateIcon: a }) => {
          const n = (0, d.useLocalization)(),
            l = r.useRef(null),
            o = n("egstore.library.reload.a11y.reload_library"),
            i = bA();
          return r.createElement(
            "div",
            { className: i.buttonDiv },
            r.createElement(
              lA.A,
              {
                "aria-label": o,
                onClick: e,
                disabled: t,
                "data-testid": "reload-button",
                buttonWidth: z.Rj.AUTO,
                forwardRef: l,
              },
              r.createElement(
                "span",
                { className: (0, g.cx)({ [i.icon]: !0, [i.spin]: a }) },
                r.createElement(Ql, null),
              ),
            ),
            r.createElement(
              pt.m,
              { anchorRef: l },
              r.createElement(se.A, {
                code: "egstore.library.reload.reload_library",
              }),
            ),
          );
        },
        vA = (0, v.W)(() => ({
          root: (0, g.AH)({ marginTop: 10, marginBottom: 34 }),
          title: (0, g.AH)((0, ue.hz)(3)),
        })),
        fA = ({ reloadButton: e }) => {
          const t = (0, s.useSelector)(K.k),
            a = vA(),
            n = () =>
              t
                ? r.createElement(
                    p.E,
                    { variant: Y.ZJ.H2XL, color: Y.Uf.PRIMARY },
                    r.createElement(se.A, {
                      code: "diesel.common.page.library.title",
                    }),
                  )
                : r.createElement(
                    Uh.A.Heading,
                    { headingLevel: 1 },
                    r.createElement(se.A, {
                      code: "diesel.common.page.library.title",
                    }),
                  );
          return r.createElement(
            b.a,
            { alignItems: E.ep.Center, className: a.root },
            r.createElement(
              "div",
              { className: a.title },
              r.createElement(n, null),
            ),
            e,
          );
        };
      var yA = a(98041);
      const hA = () => {
          const { query: e } = Sa(),
            { isReloading: t, reloadLibrary: a } = ((e) => {
              const t = (0, yA.$)(),
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
            n = (0, c.$)();
          return r.createElement(fA, {
            reloadButton: n
              ? r.createElement(EA, { onClick: a, disabled: t, animateIcon: t })
              : void 0,
          });
        },
        CA = ({ animation: e }) =>
          r.createElement(fA, {
            reloadButton: r.createElement(we.EA, {
              width: 57,
              height: 40,
              animation: e,
              style: { marginLeft: 10 },
            }),
          }),
        AA = () =>
          n().createElement(
            n().Fragment,
            null,
            n().createElement(ct, null),
            n().createElement(An, null),
          ),
        OA = ({ title: e, onRetryClick: t, onCancelClick: a }) =>
          n().createElement(cn._, {
            modalTitle: n().createElement(se.A, {
              code: "diesel.common.smart_button.uninstall",
            }),
            title: n().createElement(se.A, {
              code: "egstore.library.uninstall_close_instances.text_question",
              args: [e],
            }),
            secondaryButton: n().createElement(
              R.u,
              { onClick: a },
              n().createElement(se.A, {
                code: "diesel.common.smart_button.cancel",
              }),
            ),
            primaryButton: n().createElement(
              T.S,
              { onClick: t },
              n().createElement(se.A, {
                code: "diesel.common.smart_button.retry",
              }),
            ),
            onCloseClick: a,
          });
      var IA = Object.defineProperty,
        SA = Object.defineProperties,
        wA = Object.getOwnPropertyDescriptors,
        xA = Object.getOwnPropertySymbols,
        kA = Object.prototype.hasOwnProperty,
        PA = Object.prototype.propertyIsEnumerable,
        NA = (e, t, a) =>
          t in e
            ? IA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        MA = (e, t) => {
          for (var a in t || (t = {})) kA.call(t, a) && NA(e, a, t[a]);
          if (xA) for (var a of xA(t)) PA.call(t, a) && NA(e, a, t[a]);
          return e;
        },
        LA = (e, t) => SA(e, wA(t));
      const jA = (e) =>
          r.createElement(
            xe,
            LA(MA({}, e), {
              hasHeader: !0,
              hasFooter: !0,
              hasPrimaryButton: !0,
              hasSecondaryButton: !0,
              content: r.createElement(
                b.a,
                {
                  alignItems: E.ep.Center,
                  justify: E.cn.Center,
                  fillParent: !0,
                },
                r.createElement(
                  b.a,
                  { direction: E.NX.Column, alignItems: E.ep.Center },
                  r.createElement(
                    we.EA,
                    MA({ variant: we.qd.Text, width: 500, height: 50 }, e),
                  ),
                  r.createElement(
                    we.EA,
                    LA(MA({ variant: we.qd.Text, width: 300, height: 50 }, e), {
                      style: { margin: "-10px 0 0" },
                    }),
                  ),
                ),
              ),
            }),
          ),
        _A = bp("uninstall-close-instances-modal"),
        TA = () => {
          const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
            r = (0, ob.q)(e, t, a),
            { closeModal: l, cancelModal: o } = _A(),
            i = Fg(),
            c = n().useCallback(() => {
              l(),
                i({
                  namespace: e,
                  catalogId: t,
                  appName: a,
                  funnelId: Sc.dE.MANAGE_PRODUCT_MODAL,
                  options: { disableConfirmation: !0 },
                });
            }, [l, i, e, t, a]);
          return n().createElement(OA, {
            title: r,
            onRetryClick: c,
            onCancelClick: o,
          });
        },
        RA = () => {
          const { isOpen: e, cancelModal: t, getData: a } = _A(),
            r = a();
          return r
            ? n().createElement(
                He.a,
                { isOpen: e, onClose: t },
                n().createElement(
                  i.tY,
                  { fallback: n().createElement(jA, null) },
                  n().createElement(
                    Ld.AZ.Provider,
                    { value: r },
                    n().createElement(TA, null),
                  ),
                ),
              )
            : null;
        },
        DA = () => {
          const { action: e, item: t } = yi(),
            { openModal: a } = fy();
          n().useEffect(() => {
            e === FC.I.Install && t && a(t);
          }, [e, t]);
          const { isOpen: r, openModal: l } = _A();
          return (
            n().useEffect(
              () =>
                (0, $t.Ay)()
                  .getEmitter()
                  .subscribe(
                    () => "LibraryItemModalsSection",
                    $t.Rf.UninstallRetry,
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
              n().createElement(Cy, null),
              n().createElement(Jb, null),
              n().createElement(sb, null),
              n().createElement(RA, null),
              n().createElement(vy, null),
            )
          );
        };
      var BA = Object.defineProperty,
        HA = Object.getOwnPropertySymbols,
        FA = Object.prototype.hasOwnProperty,
        zA = Object.prototype.propertyIsEnumerable,
        UA = (e, t, a) =>
          t in e
            ? BA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[t] = a),
        VA = (e, t) => {
          for (var a in t || (t = {})) FA.call(t, a) && UA(e, a, t[a]);
          if (HA) for (var a of HA(t)) zA.call(t, a) && UA(e, a, t[a]);
          return e;
        };
      const WA = (0, v.W)(() => ({
          root: (0, g.AH)({
            display: "flex",
            width: "100%",
            minHeight: 60,
            padding: 15,
            marginBottom: 20,
            alignItems: "center",
            gap: 20,
            borderRadius: ke.Vq,
            background: `linear-gradient(266deg, ${Kv.$k.EAP.secondaryBg} 0%, ${Kv.$k.EAP.primaryBg} 93.29%)`,
          }),
          icon: (0, g.AH)(
            VA({ color: Kv.$k.EAP.primary }, Kv.J2.EAP.dimensions.medium),
          ),
          content: (0, g.AH)({ flexGrow: 1, p: { margin: "0 0 5px" } }),
        })),
        qA = ({ onDismissClick: e }) => {
          const t = WA();
          return n().createElement(
            "div",
            { className: t.root, "data-testid": "EAPSubsIntroBannerLayout" },
            n().createElement(Jd.A, { className: t.icon, icon: Kv.J2.EAP.svg }),
            n().createElement(
              "div",
              { className: t.content },
              n().createElement(
                "p",
                null,
                n().createElement(
                  de.Ay,
                  { textLevel: W.qo.PRIMARY },
                  n().createElement(se.A, {
                    code: "egstore.library.subscription.banner.eap.title",
                  }),
                ),
              ),
              n().createElement(
                "p",
                null,
                n().createElement(
                  de.Ay,
                  { textLevel: W.qo.SECONDARY },
                  n().createElement(se.A, {
                    code: "egstore.library.subscription.banner.eap.body",
                  }),
                ),
              ),
              n().createElement(
                "p",
                null,
                n().createElement(
                  de.Ay,
                  { textLevel: W.qo.SECONDARY },
                  n().createElement(se.A, {
                    code: "egstore.library.subscription.banner.eap.info",
                  }),
                ),
              ),
            ),
            n().createElement(
              gl.rp,
              { buttonWidth: z.Rj.AUTO, buttonHeight: z.eL.DENSED, onClick: e },
              n().createElement(se.A, {
                code: "egstore.library.favorites_folders.intro.button.hide",
              }),
            ),
          );
        };
      const GA = {
          [a(68056).w.EAP]: () => {
            const { namespace: e, catalogItemId: t, appName: a } = (0, Ld.Jm)(),
              l = (0, s.useSelector)(vr.n9),
              o = (0, om.O)(e, t, a),
              { value: i, setValue: c } = pr({
                keyFn: () => `EGS_LIBRARY_INTRO_BANNER_EAP_HIDDEN_${l}`,
                localStorageEnabled: Boolean(l),
                initialValue: !1,
              }),
              d = (0, r.useMemo)(
                () =>
                  ((e) => {
                    if (!(null == e ? void 0 : e.acquisitionDate)) return !0;
                    const t = new Date(e.acquisitionDate);
                    return t.setDate(t.getDate() + 2), new Date() > t;
                  })(o),
                [o],
              ),
              m = n().useMemo(() => !d && !i, [d, i]);
            return n().createElement(
              n().Fragment,
              null,
              m && n().createElement(qA, { onDismissClick: () => c(!0) }),
            );
          },
        },
        $A = () => {
          const e = (0, s.useSelector)(br.GZ),
            t = (0, r.useMemo)(() => Object.keys(e), [e]),
            a = (0, r.useCallback)(
              (t) => {
                const a = GA[t];
                if (!a) return null;
                const { namespace: r, catalogItemId: l, appName: o } = e[t];
                return n().createElement(
                  Ld.AZ.Provider,
                  {
                    key: t,
                    value: { namespace: r, catalogItemId: l, appName: o },
                  },
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
        YA = () =>
          n().createElement(
            n().Fragment,
            null,
            n().createElement(
              i.tY,
              { fallback: n().createElement(CA, null) },
              n().createElement(hA, null),
            ),
            n().createElement(
              i.tY,
              { fallback: null },
              n().createElement(
                "div",
                { style: { paddingBottom: 20 } },
                n().createElement(fl, null),
                n().createElement($A, null),
              ),
            ),
            n().createElement(
              i.tY,
              { fallback: n().createElement(il, null) },
              n().createElement(ol, null),
            ),
            n().createElement(
              i.tY,
              { fallback: n().createElement(nA, null) },
              n().createElement(rA, null),
            ),
            n().createElement(DA, null),
            n().createElement(AA, null),
          );
      var JA = a(9219),
        KA = a(94127);
      const ZA = (0, JA.u8)("hook-mounted");
      let QA = !1;
      const XA = (0, Wa.lp)("useMeasureLibraryRenderTime"),
        eO = (0, JA.u8)("render-sync"),
        [tO, aO] = (0, JA.Ji)("render-duration-sync"),
        rO = (0, JA.u8)("render-async"),
        [nO, lO] = (0, JA.Ji)("render-duration-async");
      function oO({
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
            XA.log("querying for predicate time: " + (performance.now() - o)),
              i &&
                (XA.log("non observer paint start"),
                performance.mark(a.start, { detail: { componentName: t } }),
                r("measuring"),
                setTimeout(() => {
                  XA.log("non observer paint end"),
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
      var iO = a(64511);
      const cO = () => {
        const e = n().useRef(null),
          t = (0, ai.B2)();
        return (
          (function () {
            const e = (0, s.useSelector)(KA.X);
            n().useEffect(() => {
              if (!e) return;
              if (Va.Iw.isSsr()) return;
              if (QA)
                return void console.warn(
                  "useLibraryPerformance is already mounted. Please ensure only one instance of this hook exists at any point",
                );
              const t = new JA.tH();
              return (
                t.connect(),
                (QA = !0),
                performance.mark(ZA),
                () => {
                  t.disconnect(), (QA = !1);
                }
              );
            }, []);
          })(),
          (function (e, t, a) {
            const r = (0, s.useSelector)(KA.X),
              l = n().useRef("idle");
            n().useEffect(() => {
              if (!r) return;
              if (Va.Iw.isSsr())
                return void XA.log("skipping measuring of render time on SSR.");
              function n(e) {
                l.current = e;
              }
              XA.log("starting useMeasureLibraryRenderTime"),
                oO({
                  dom: e,
                  componentName: t,
                  labels: { start: tO, end: aO, timeFromPageLoad: eO },
                  stateChangeCallback: n,
                  predicate: a,
                });
              const o = performance,
                i = new MutationObserver((r, i) => {
                  (performance = o),
                    "complete" !== l.current
                      ? "measuring" !== l.current &&
                        oO({
                          dom: e,
                          componentName: t,
                          labels: { start: nO, end: lO, timeFromPageLoad: rO },
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
            iO.c,
            null,
            n().createElement("div", { ref: e }, n().createElement(YA, null)),
          )
        );
      };
    },
    13372: (e, t, a) => {
      e.exports = a.p + "d71da1c195d3183df5799e7892e9b1a1.png";
    },
  },
]);
//# sourceMappingURL=ManageProductsPage.egstore-site.235c3d572bba9bd841e2.js.map
