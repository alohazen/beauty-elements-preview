var e=`/* Component factories from the deployed application, followed by the standalone adapter. */
(() => {
  const factories = {
    4621: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return f;
        },
      });
      var a = s(57514),
        r = s(43652),
        n = s(5022),
        i = s(55200);
      let l = "Where does our NVDA preview sit against consensus?",
        c = [
          { k: "brief", label: "Brief" },
          { k: "ask", label: "Ask" },
          { k: "library", label: "Library" },
          { k: "check", label: "Check" },
          { k: "portfolio", label: "Portfolio" },
        ],
        o = "[&>div]:!shadow-[0_18px_50px_-28px_rgb(15_23_42/0.35)]",
        d = (e) => ({ animationDelay: "".concat(e, "ms") }),
        x = "motion-safe:animate-[fade-up_500ms_cubic-bezier(.2,.7,.2,1)_both]",
        p = [
          {
            group: "Licensed data",
            rows: [
              {
                n: 1,
                title: "Visible Alpha",
                meta: "NVDA consensus \\xb7 Q3 FY27 \\xb7 46 brokers",
                sp: !0,
              },
            ],
          },
          {
            group: "Filings",
            rows: [
              {
                n: 2,
                title: "NVIDIA Q4 FY2026 earnings release",
                meta: "EDGAR \\xb7 Feb 2026",
              },
              {
                n: 3,
                title: "NVIDIA Q1 FY2027 earnings release",
                meta: "EDGAR \\xb7 May 2026",
              },
              {
                n: 4,
                title: "NVIDIA Q2 FY2027 earnings release",
                meta: "EDGAR \\xb7 Aug 2026",
              },
            ],
          },
          {
            group: "Your notes",
            rows: [
              {
                n: 5,
                title: "NVDA Q3 FY2027 earnings preview",
                meta: "J. Park \\xb7 internal",
              },
              {
                n: 6,
                title: "Channel check \\xb7 GB300 lead times",
                meta: "J. Park \\xb7 12 Sep",
              },
            ],
          },
        ],
        m = [
          {
            kind: "PDF",
            title: "NVIDIA Q2 FY2027 earnings release",
            meta: "EDGAR \\xb7 added 27 Aug",
          },
          {
            kind: "Note",
            title: "NVDA Q3 FY2027 earnings preview",
            meta: "J. Park \\xb7 9 Oct",
          },
          {
            kind: "Data",
            title: "Visible Alpha \\xb7 NVDA consensus",
            meta: "S&P Global \\xb7 synced 06:00",
          },
          {
            kind: "Note",
            title: "Channel check \\xb7 GB300 lead times",
            meta: "J. Park \\xb7 12 Sep",
          },
          {
            kind: "PDF",
            title: "Morgan Stanley \\xb7 Maia 200 tape-out",
            meta: "Broker \\xb7 2 Oct",
          },
          {
            kind: "PDF",
            title: "TSMC September revenue",
            meta: "TWSE \\xb7 10 Oct",
          },
        ],
        u = {
          PDF: "bg-[#fbe7ea] text-[#b42d3a]",
          Note: "bg-[#e8eefb] text-[#1d4fa8]",
          Data: "bg-[#e7f3ec] text-[#1f7a4d]",
        };
      function h(e) {
        let { n: t, t: s, lit: r, citeRef: n, small: i } = e;
        return (0, a.jsx)("span", {
          ref: n,
          "data-t": s,
          className:
            "ml-[3px] inline-grid place-items-center rounded-[4px] px-1 font-sans font-medium leading-none tracking-normal transition-colors duration-300 "
              .concat(
                i
                  ? "h-[17px] min-w-[17px] align-[0.3em] text-[10.5px]"
                  : "h-[20px] min-w-[20px] align-[0.6em] text-[11.5px]",
                " ",
              )
              .concat(
                r ? "bg-accent text-on-accent" : "bg-[#e8eefb] text-[#1d4fa8]",
              ),
          children: t,
        });
      }
      function f() {
        var e;
        let t = (0, r.useRef)(null),
          s = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          g = (0, r.useRef)(null),
          b = (0, r.useRef)(null),
          j = (0, r.useRef)(1),
          [N, _] = (0, r.useState)(!1),
          [y, v] = (0, r.useState)(!1),
          w = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          let e = t.current;
          if (!e) return;
          let s = !1,
            a = () => v(s && "visible" === document.visibilityState),
            r = new IntersectionObserver((e) => {
              let [t] = e;
              ((s = t.isIntersecting), a());
            });
          return (
            r.observe(e),
            document.addEventListener("visibilitychange", a),
            () => {
              (r.disconnect(),
                document.removeEventListener("visibilitychange", a));
            }
          );
        }, []);
        let k = y && !N,
          [S, A] = (0, r.useState)({ s: 0, compact: !1 }),
          [D, I] = (0, r.useState)("brief"),
          [C, V] = (0, r.useState)("sent"),
          [F, P] = (0, r.useState)(0),
          [z, M] = (0, r.useState)(0),
          [R, G] = (0, r.useState)(!1),
          [Y, B] = (0, r.useState)({ x: 40, y: 180 }),
          [E, T] = (0, r.useState)(!1),
          [O, q] = (0, r.useState)(!1),
          [Q, L] = (0, r.useState)(!1),
          [W, U] = (0, r.useState)(!1),
          [J, H] = (0, r.useState)(0),
          [K, X] = (0, r.useState)(!1),
          [$, Z] = (0, r.useState)(0),
          [ee, et] = (0, r.useState)([]),
          [es, ea] = (0, r.useState)(!1),
          [er, en] = (0, r.useState)({ x: 900, y: 620, on: !1, press: !1 });
        (0, r.useEffect)(() => {
          let e = () => {
            if (!t.current) return;
            let e = t.current.clientWidth,
              s = e < 760,
              a = e / (s ? 1024 : 1240);
            ((j.current = a), A({ s: a, compact: s }));
          };
          e();
          let s = new ResizeObserver(e);
          return (t.current && s.observe(t.current), () => s.disconnect());
        }, []);
        let ei = (0, r.useCallback)((e) => {
          var t;
          let a =
            null === (t = s.current) || void 0 === t
              ? void 0
              : t.querySelector('[data-t="'.concat(e, '"]'));
          if (!a || !s.current || null === a.offsetParent) return;
          let r = a.getBoundingClientRect(),
            n = s.current.getBoundingClientRect(),
            i = j.current;
          en((e) => ({
            ...e,
            on: !0,
            x: (r.left - n.left + r.width / 2) / i,
            y: (r.top - n.top + r.height / 2) / i,
          }));
        }, []);
        (0, r.useEffect)(() => {
          let e = b.current,
            t = null == e ? void 0 : e.closest("section");
          if (!R || !e || !t) return;
          let s = e.getBoundingClientRect(),
            a = t.getBoundingClientRect(),
            r = j.current;
          B({
            x: Math.min(
              Math.max(40, (s.left - a.left) / r - 28),
              t.clientWidth - 440 - 40,
            ),
            y: (s.bottom - a.top) / r + 10,
          });
        }, [R]);
        let el = () => {
          f.current &&
            g.current &&
            Z(
              Math.max(
                0,
                (f.current.getBoundingClientRect().top -
                  g.current.getBoundingClientRect().top) /
                  j.current -
                  28,
              ),
            );
        };
        (0, r.useEffect)(() => {
          if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            (ea(!0),
              I("ask"),
              M(l.length),
              T(!0),
              q(!0),
              L(!0),
              U(!0),
              requestAnimationFrame(el));
            return;
          }
          if (!k) return;
          let e = [],
            t = 0,
            s = (s, a) =>
              e.push(window.setTimeout(a, t + s - performance.now())),
            a = (e, t) => {
              (s(e, () => en((e) => ({ ...e, press: !0 }))),
                s(e + 160, () => {
                  (en((e) => ({ ...e, press: !1 })), t());
                }));
            },
            r = (e, t, a) => {
              (s(e, () => V("clear")),
                s(e + 420, () => {
                  (I(t),
                    V(a),
                    M(0),
                    G(!1),
                    T(!1),
                    q(!1),
                    L(!1),
                    U(!1),
                    H(0),
                    X(!1),
                    Z(0),
                    P((e) => e + 1));
                }));
            },
            n = (i) => {
              ((e.length = 0),
                (t = performance.now()),
                i || r(0, "brief", "sent"),
                s(1800, () => ei("cite")),
                a(2600, () => G(!0)),
                s(5300, () => G(!1)),
                s(5400, () => ei("nav-ask")),
                a(6200, () => void 0),
                r(6360, "ask", "compose"));
              for (let e = 1; e <= l.length; e++) s(7e3 + 32 * e, () => M(e));
              let c = 7e3 + 32 * l.length;
              (s(c + 100, () => ei("send")),
                a(c + 700, () => V("sent")),
                s(c + 1050, () => T(!0)),
                s(c + 5750, () => q(!0)),
                s(c + 5800, () => requestAnimationFrame(el)),
                s(c + 8600, () => L(!0)),
                s(c + 8700, () => ei("sources")),
                a(c + 9500, () => U(!0)),
                s(c + 9800, () =>
                  et((e) =>
                    e.includes("NVDA vs consensus")
                      ? e
                      : ["NVDA vs consensus", ...e],
                  ),
                ),
                s(c + 11e3, () => ei("src4")),
                a(c + 11900, () => H(4)),
                r(c + 12300, "library", "sent"),
                s(c + 16900, () => ei("nav-check")),
                a(c + 17700, () => void 0),
                r(c + 17860, "check", "sent"),
                s(c + 18400, () => X(!0)),
                s(c + 24300, () => Z(240)),
                s(c + 26400, () =>
                  et((e) =>
                    e.includes("Rumor check \\xb7 MSFT GB300")
                      ? e
                      : ["Rumor check \\xb7 MSFT GB300", ...e],
                  ),
                ),
                s(c + 27200, () => ei("nav-brief")),
                a(c + 28e3, () => void 0),
                s(c + 28160, () => n(!1)));
            };
          return (
            n(!w.current),
            (w.current = !0),
            () => e.forEach(clearTimeout)
          );
        }, [ei, k]);
        let ec = S.compact ? 1024 : 1240,
          eo = "compose" !== C,
          ed =
            null === (e = c.find((e) => e.k === D)) || void 0 === e
              ? void 0
              : e.label;
        return (0, a.jsxs)("figure", {
          className: "relative m-0 w-full",
          children: [
            (0, a.jsx)("figcaption", {
              className: "sr-only",
              children:
                "A film of Core, on demo data. The morning Brief says the book was up 8 bps overnight, and a citation opens the analyst note behind it. Asked where our NVIDIA preview sits against consensus, Core searches S&P Global Visible Alpha and answers with a chart, then lists its six sources: licensed data, filings and the firm’s own notes. One source opens in the Library with the cited sentence highlighted. Then a rumor that Microsoft cut its GB300 order is weighed against the firm’s evidence: likely true, 84%.",
            }),
            (0, a.jsx)("div", {
              ref: t,
              "aria-hidden": !0,
              className:
                "relative w-full transition-opacity duration-500 ".concat(
                  S.s ? "opacity-100" : "opacity-0",
                ),
              style: { height: 760 * S.s },
              children: (0, a.jsxs)("div", {
                ref: s,
                className:
                  "absolute left-0 top-0 origin-top-left overflow-hidden rounded-[16px] bg-white/45 text-ink ring-1 ring-white/40 backdrop-blur-md shadow-[0_24px_48px_-16px_rgb(10_20_40/0.28),0_2px_6px_rgb(10_20_40/0.08)]",
                style: {
                  width: ec,
                  height: 760,
                  transform: "scale(".concat(S.s || 1, ")"),
                },
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex h-10 items-center gap-3 px-5",
                    children: [
                      (0, a.jsx)("span", {
                        className: "flex w-12 flex-none gap-2",
                        children: [0, 1, 2].map((e) =>
                          (0, a.jsx)(
                            "span",
                            {
                              className: "h-2.5 w-2.5 rounded-full bg-white/80",
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "mx-auto flex h-7 w-[360px] items-center justify-center rounded-full bg-white/55 text-[14px] text-[#4b5568]",
                        children: "core.yourfirm.com",
                      }),
                      (0, a.jsx)("span", { className: "w-12 flex-none" }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mx-2 grid h-[calc(100%-3rem)] overflow-hidden rounded-[10px] bg-surface-muted ".concat(
                        S.compact ? "grid-cols-1" : "grid-cols-[216px_1fr]",
                      ),
                    children: [
                      !S.compact &&
                        (0, a.jsxs)("aside", {
                          className:
                            "grid content-start gap-1 border-r border-border bg-surface px-3 py-5 text-[15px]",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "mb-5 flex items-center gap-2 px-2",
                              children: [
                                (0, a.jsx)(n.CoreMark, {
                                  kind: "sphere",
                                  height: 22,
                                  ink: "#16181d",
                                  mid: "#8a8f99",
                                  lite: "#e4e0d8",
                                }),
                                (0, a.jsx)("span", {
                                  className: "font-display text-[20px]",
                                  children: "Core",
                                }),
                              ],
                            }),
                            c.map((e) =>
                              (0, a.jsx)(
                                "span",
                                {
                                  "data-t": "nav-".concat(e.k),
                                  className:
                                    "rounded-[8px] px-3 py-2 transition-colors duration-300 ".concat(
                                      e.k === D
                                        ? "bg-surface-muted font-medium"
                                        : "text-text-muted",
                                    ),
                                  children: e.label,
                                },
                                e.k,
                              ),
                            ),
                            (0, a.jsx)("span", {
                              className:
                                "mt-7 px-3 text-[12.5px] font-medium text-text-muted-2",
                              children: "Recent",
                            }),
                            (0, a.jsxs)("span", {
                              className: "mt-1 grid gap-1",
                              children: [
                                ee.map((e) =>
                                  (0, a.jsx)(
                                    "span",
                                    {
                                      className:
                                        "truncate rounded-[6px] px-3 py-1.5 text-[13px] text-ink-2 ".concat(
                                          x,
                                        ),
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                                [78, 64, 86, 58].slice(ee.length).map((e) =>
                                  (0, a.jsx)(
                                    "span",
                                    {
                                      className:
                                        "mx-3 my-[9px] h-2 rounded-full bg-border",
                                      style: { width: "".concat(e, "%") },
                                    },
                                    e,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                      (0, a.jsxs)("main", {
                        className: "relative overflow-hidden",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "relative z-10 flex h-14 items-center justify-between gap-3 border-b border-border bg-surface-muted px-10",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-[15px] font-medium",
                                children: ed,
                              }),
                              (0, a.jsxs)("span", {
                                className: "flex items-center gap-2",
                                children: [
                                  "ask" === D &&
                                    (0, a.jsx)("span", {
                                      "data-t": "sources",
                                      className:
                                        "rounded-full border px-4 py-1.5 text-[13.5px] transition-[opacity,background-color,color,border-color] duration-300 "
                                          .concat(
                                            W
                                              ? "border-ink bg-ink text-bg"
                                              : "border-border-strong text-ink-2",
                                            " ",
                                          )
                                          .concat(
                                            Q ? "opacity-100" : "opacity-0",
                                          ),
                                      children: "Sources \\xb7 6",
                                    }),
                                  "ask" === D &&
                                    (0, a.jsx)("span", {
                                      className:
                                        "rounded-full border border-border-strong px-4 py-1.5 text-[13.5px] text-ink-2",
                                      children: "+ New question",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            ref: g,
                            className:
                              "transition-[transform,opacity] ease-[cubic-bezier(.45,0,.2,1)] ".concat(
                                "clear" === C
                                  ? "opacity-0 duration-[400ms]"
                                  : "opacity-100 duration-[900ms]",
                              ),
                            style: {
                              transform: "translateY(".concat(-$, "px)"),
                            },
                            children: [
                              "brief" === D &&
                                (0, a.jsxs)(
                                  "section",
                                  {
                                    className:
                                      "relative grid grid-cols-[1fr_300px] gap-8 px-10 pt-8",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className: "grid content-start",
                                        children: [
                                          (0, a.jsx)("p", {
                                            className:
                                              "text-[14px] text-text-muted ".concat(
                                                x,
                                              ),
                                            children:
                                              "Morning Brief \\xb7 Tue 13 Oct 2026, 06:00 \\xb7 38 positions",
                                          }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "mt-2 font-display text-[36px] font-light leading-[1.12] tracking-[-0.015em] [text-wrap:balance] ".concat(
                                                x,
                                              ),
                                            style: d(100),
                                            children:
                                              "The book was up 8 bps overnight. Semis carried it.",
                                          }),
                                          (0, a.jsxs)("p", {
                                            className:
                                              "mt-3 text-[16px] leading-[1.6] text-ink-2 ".concat(
                                                x,
                                              ),
                                            style: d(200),
                                            children: [
                                              "Tokyo Electron rose 4.1% as orders into Q4 ran ahead of plan",
                                              (0, a.jsx)(h, {
                                                n: 1,
                                                t: "cite",
                                                lit: R,
                                                citeRef: b,
                                                small: !0,
                                              }),
                                              ". ASML fell 2.3% on a softer China outlook",
                                              (0, a.jsx)(h, {
                                                n: 2,
                                                small: !0,
                                              }),
                                              ". SK hynix reports Thursday, and our preview sits above consensus",
                                              (0, a.jsx)(h, {
                                                n: 3,
                                                small: !0,
                                              }),
                                              ".",
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "mt-6 flex items-end gap-10 border-y border-border py-5 ".concat(
                                                x,
                                              ),
                                            style: d(320),
                                            children: [
                                              (0, a.jsxs)("span", {
                                                className: "grid gap-1",
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "text-[13px] text-text-muted",
                                                    children: "Overnight",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "font-display text-[48px] font-light leading-none tracking-[-0.02em] text-positive",
                                                    children: "+0.08%",
                                                  }),
                                                ],
                                              }),
                                              [
                                                ["NAV", "$230.9M"],
                                                ["Month to date", "+1.34%"],
                                                ["Gross exposure", "142%"],
                                              ].map((e) => {
                                                let [t, s] = e;
                                                return (0, a.jsxs)(
                                                  "span",
                                                  {
                                                    className:
                                                      "grid gap-1 pb-1",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "text-[13px] text-text-muted",
                                                        children: t,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "font-display text-[24px] font-light leading-none",
                                                        children: s,
                                                      }),
                                                    ],
                                                  },
                                                  t,
                                                );
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "mt-5 text-[13px] font-medium text-text-muted ".concat(
                                                x,
                                              ),
                                            style: d(440),
                                            children: "Your book \\xb7 movers",
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "mt-1 ".concat(x),
                                            style: d(520),
                                            children: [
                                              [
                                                "Tokyo Electron",
                                                "6.2% of NAV",
                                                14,
                                              ],
                                              ["SK hynix", "2.8% of NAV", 6],
                                              ["MediaTek", "6.4% of NAV", -9],
                                              [
                                                "ASML Holding",
                                                "4.9% of NAV",
                                                -28,
                                              ],
                                            ].map((e, t) => {
                                              let [s, r, n] = e;
                                              return (0, a.jsxs)(
                                                "div",
                                                {
                                                  className:
                                                    "grid grid-cols-[150px_100px_1fr_72px] items-center gap-4 border-b border-border py-2.5 text-[14.5px] last:border-b-0",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      children: s,
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-[12.5px] text-text-muted",
                                                      children: r,
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "relative h-1.5 rounded-full bg-border",
                                                      children: (0, a.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "absolute top-0 h-full rounded-full motion-safe:animate-[grow-x_700ms_cubic-bezier(.2,.7,.2,1)_both] ".concat(
                                                              n > 0
                                                                ? "left-1/2 bg-positive"
                                                                : "right-1/2 bg-negative",
                                                            ),
                                                          style: {
                                                            width: "".concat(
                                                              (Math.abs(n) /
                                                                30) *
                                                                50,
                                                              "%",
                                                            ),
                                                            transformOrigin:
                                                              n > 0
                                                                ? "left"
                                                                : "right",
                                                            ...d(760 + 80 * t),
                                                          },
                                                        },
                                                      ),
                                                    }),
                                                    (0, a.jsxs)("span", {
                                                      className:
                                                        "text-right tabular-nums ".concat(
                                                          n > 0
                                                            ? "text-positive"
                                                            : "text-negative",
                                                        ),
                                                      children: [
                                                        n > 0 ? "+" : "−",
                                                        Math.abs(n),
                                                        " bps",
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                s,
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("aside", {
                                        className: "grid content-start gap-4",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "rounded-[14px] bg-surface px-4 py-3.5 ".concat(
                                                x,
                                              ),
                                            style: d(380),
                                            children: [
                                              (0, a.jsx)("p", {
                                                className:
                                                  "text-[13px] font-medium text-text-muted",
                                                children: "Markets overnight",
                                              }),
                                              [
                                                ["S&P 500", "+0.42%", !0],
                                                ["Nasdaq 100", "+0.71%", !0],
                                                ["Semis (SOX)", "+1.86%", !0],
                                                ["Nikkei 225", "−0.18%", !1],
                                                ["USD/KRW", "1,378.4", null],
                                              ].map((e) => {
                                                let [t, s, r] = e;
                                                return (0, a.jsxs)(
                                                  "p",
                                                  {
                                                    className:
                                                      "mt-2 flex items-center justify-between text-[14px]",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        children: t,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "tabular-nums ".concat(
                                                            !0 === r
                                                              ? "text-positive"
                                                              : !1 === r
                                                                ? "text-negative"
                                                                : "text-ink-2",
                                                          ),
                                                        children: s,
                                                      }),
                                                    ],
                                                  },
                                                  t,
                                                );
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "rounded-[14px] bg-surface px-4 py-3.5 ".concat(
                                                x,
                                              ),
                                            style: d(480),
                                            children: [
                                              (0, a.jsx)("p", {
                                                className:
                                                  "text-[13px] font-medium text-text-muted",
                                                children: "Today",
                                              }),
                                              [
                                                [
                                                  "13:30",
                                                  "TSMC September sales",
                                                ],
                                                ["20:30", "US CPI, September"],
                                                [
                                                  "Thu",
                                                  "SK hynix 3Q26 results",
                                                ],
                                              ].map((e) => {
                                                let [t, s] = e;
                                                return (0, a.jsxs)(
                                                  "p",
                                                  {
                                                    className:
                                                      "mt-2 grid grid-cols-[44px_1fr] gap-2 text-[14px]",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "tabular-nums text-text-muted",
                                                        children: t,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                        children: s,
                                                      }),
                                                    ],
                                                  },
                                                  s,
                                                );
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "rounded-[14px] bg-surface px-4 py-3.5 ".concat(
                                                x,
                                              ),
                                            style: d(580),
                                            children: [
                                              (0, a.jsx)("p", {
                                                className:
                                                  "text-[13px] font-medium text-text-muted",
                                                children:
                                                  "Rumors on your names",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "mt-2 text-[14px] leading-snug",
                                                children:
                                                  "MSFT cut its GB300 rack order",
                                              }),
                                              (0, a.jsx)("p", {
                                                className:
                                                  "mt-2 w-fit rounded-full bg-[#e7f3ec] px-2.5 py-0.5 text-[12.5px] font-medium text-positive",
                                                children:
                                                  "Likely true \\xb7 84%",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "absolute z-10 grid w-[440px] gap-3 rounded-[14px] border border-border bg-surface p-4 shadow-[0_24px_60px_-20px_rgb(15_23_42/0.35)] transition-[opacity,transform] duration-300 ".concat(
                                            R
                                              ? "translate-y-0 opacity-100"
                                              : "pointer-events-none -translate-y-1 opacity-0",
                                          ),
                                        style: { left: Y.x, top: Y.y },
                                        children: [
                                          (0, a.jsxs)("p", {
                                            className:
                                              "flex items-center gap-2.5 text-[13px] leading-none text-text-muted",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className:
                                                  "grid h-6 place-items-center rounded-[5px] px-2 text-[11px] font-semibold ".concat(
                                                    u.Note,
                                                  ),
                                                children: "Note",
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "font-medium text-ink",
                                                children:
                                                  "Channel check \\xb7 Tokyo Electron",
                                              }),
                                              (0, a.jsx)("span", {
                                                children: "J. Park \\xb7 12 Oct",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "rounded-[8px] border-l-[3px] border-accent bg-[#eef3fc] px-4 py-3 text-[15px] leading-relaxed",
                                            children:
                                              "WFE orders into Q4 are running ahead of plan, and Tokyo Electron is the main beneficiary.",
                                          }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "text-[13px] font-medium text-accent",
                                            children: "Open in Library →",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  F,
                                ),
                              "ask" === D &&
                                (0, a.jsxs)("section", {
                                  className:
                                    "grid justify-items-center gap-6 px-10 pt-8",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "w-[864px] rounded-[20px] border px-7 transition-[border-color,background-color,box-shadow,padding] duration-500 ".concat(
                                          eo
                                            ? "border-transparent bg-transparent py-0"
                                            : "border-border-strong bg-surface pb-5 pt-6 shadow-[0_12px_40px_-20px_rgb(15_23_42/0.25)]",
                                        ),
                                      children: [
                                        (0, a.jsxs)("p", {
                                          className:
                                            "min-h-[1.1em] font-display text-[40px] font-light leading-[1.1] tracking-[-0.015em] [text-wrap:balance]",
                                          children: [
                                            z
                                              ? l.slice(0, z)
                                              : (0, a.jsx)("span", {
                                                  className:
                                                    "text-text-muted-2",
                                                  children:
                                                    "Ask about your research…",
                                                }),
                                            !eo &&
                                              (0, a.jsx)("i", {
                                                className:
                                                  "ml-1 inline-block h-[0.9em] w-[2px] translate-y-[3px] animate-pulse bg-ink",
                                              }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "grid transition-[grid-template-rows,opacity] duration-500 ".concat(
                                              eo
                                                ? "grid-rows-[0fr] opacity-0"
                                                : "grid-rows-[1fr] opacity-100",
                                            ),
                                          children: (0, a.jsx)("div", {
                                            className: "overflow-hidden",
                                            children: (0, a.jsxs)("div", {
                                              className:
                                                "mt-5 flex items-center gap-2",
                                              children: [
                                                [
                                                  "All companies",
                                                  "Your model",
                                                ].map((e) =>
                                                  (0, a.jsx)(
                                                    "span",
                                                    {
                                                      className:
                                                        "rounded-full border border-border px-3 py-1 text-[13px] text-text-muted",
                                                      children: e,
                                                    },
                                                    e,
                                                  ),
                                                ),
                                                (0, a.jsx)("span", {
                                                  "data-t": "send",
                                                  className:
                                                    "ml-auto grid h-10 w-10 place-items-center rounded-full text-[17px] transition-colors duration-300 ".concat(
                                                      z === l.length
                                                        ? "bg-ink text-bg"
                                                        : "bg-border-strong text-text-muted",
                                                    ),
                                                  children: "↑",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "transition-opacity duration-500 [zoom:0.9] "
                                          .concat(o, " ")
                                          .concat(
                                            E ? "opacity-100" : "opacity-0",
                                          ),
                                      children:
                                        E && (0, a.jsx)(i.iA, { done: es }, F),
                                    }),
                                    (0, a.jsx)("div", {
                                      ref: f,
                                      className:
                                        "transition-opacity duration-500 [zoom:0.9] "
                                          .concat(o, " ")
                                          .concat(
                                            O ? "opacity-100" : "opacity-0",
                                          ),
                                      children:
                                        O && (0, a.jsx)(i.OY, { done: es }, F),
                                    }),
                                  ],
                                }),
                              "library" === D &&
                                (0, a.jsxs)(
                                  "section",
                                  {
                                    className:
                                      "grid grid-cols-[340px_1fr] gap-8 px-10 pt-8",
                                    children: [
                                      (0, a.jsx)("ul", {
                                        className:
                                          "m-0 grid content-start gap-1 p-0",
                                        children: m.map((e, t) =>
                                          (0, a.jsxs)(
                                            "li",
                                            {
                                              className:
                                                "flex items-center gap-3 rounded-[12px] px-3 py-2.5 "
                                                  .concat(x, " ")
                                                  .concat(
                                                    0 === t
                                                      ? "bg-surface shadow-[0_1px_3px_rgb(15_23_42/0.08)]"
                                                      : "",
                                                  ),
                                              style: d(60 * t),
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "w-11 flex-none rounded-[5px] py-1 text-center text-[11px] font-semibold ".concat(
                                                      u[e.kind],
                                                    ),
                                                  children: e.kind,
                                                }),
                                                (0, a.jsxs)("span", {
                                                  className:
                                                    "grid min-w-0 gap-0.5",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "truncate text-[14px] font-medium leading-tight",
                                                      children: e.title,
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-[12.5px] leading-tight text-text-muted",
                                                      children: e.meta,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            e.title,
                                          ),
                                        ),
                                      }),
                                      (0, a.jsxs)("article", {
                                        className:
                                          "rounded-[16px] border border-border bg-surface px-9 pb-7 pt-7 shadow-[0_18px_50px_-28px_rgb(15_23_42/0.35)] ".concat(
                                            x,
                                          ),
                                        style: d(200),
                                        children: [
                                          (0, a.jsxs)("p", {
                                            className:
                                              "flex items-center justify-between text-[13px] text-text-muted",
                                            children: [
                                              (0, a.jsx)("span", {
                                                children:
                                                  "EDGAR \\xb7 Exhibit 99.1",
                                              }),
                                              (0, a.jsx)("span", {
                                                className: "tabular-nums",
                                                children: "Page 1 of 14",
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className:
                                              "mt-3 max-w-[34ch] font-display text-[28px] font-light leading-[1.15] [text-wrap:balance]",
                                            children:
                                              "NVIDIA Announces Financial Results for Second Quarter Fiscal 2027",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "mt-6 grid gap-[11px]",
                                            children: [
                                              [100, 94, 97, 62].map((e) =>
                                                (0, a.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "h-2 rounded-full bg-border",
                                                    style: {
                                                      width: "".concat(e, "%"),
                                                    },
                                                  },
                                                  e,
                                                ),
                                              ),
                                              (0, a.jsxs)("p", {
                                                className:
                                                  "relative my-2 text-[17px] leading-relaxed",
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "absolute -inset-x-2 -inset-y-1 origin-left rounded-[6px] bg-[#fff1b8] motion-safe:animate-[grow-x_700ms_cubic-bezier(.2,.7,.2,1)_700ms_both]",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "relative",
                                                    children:
                                                      "Revenue for the second quarter was $96.2 billion, up 18% from the previous quarter.",
                                                  }),
                                                ],
                                              }),
                                              [96, 100, 88, 71].map((e) =>
                                                (0, a.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "h-2 rounded-full bg-border",
                                                    style: {
                                                      width: "".concat(e, "%"),
                                                    },
                                                  },
                                                  e,
                                                ),
                                              ),
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "mt-7 flex items-center gap-2 border-t border-border pt-5 text-[13px] ".concat(
                                                x,
                                              ),
                                            style: d(1200),
                                            children: [
                                              (0, a.jsx)("span", {
                                                className:
                                                  "mr-1 text-text-muted",
                                                children: "Cited in",
                                              }),
                                              [
                                                "NVDA vs consensus",
                                                "Guidance tracker \\xb7 NVIDIA",
                                              ].map((e) =>
                                                (0, a.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "rounded-full border border-border-strong px-3 py-1 text-ink-2",
                                                    children: e,
                                                  },
                                                  e,
                                                ),
                                              ),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  F,
                                ),
                              "check" === D &&
                                (0, a.jsx)("section", {
                                  className:
                                    "grid justify-items-center px-10 pt-10",
                                  children: (0, a.jsx)("div", {
                                    className:
                                      "transition-opacity duration-500 [zoom:0.9] "
                                        .concat(
                                          o,
                                          " [&>div>div:first-child]:hidden ",
                                        )
                                        .concat(
                                          K ? "opacity-100" : "opacity-0",
                                        ),
                                    children: K && (0, a.jsx)(i.zg, {}, F),
                                  }),
                                }),
                            ],
                          }),
                          "ask" === D &&
                            (0, a.jsxs)("aside", {
                              className:
                                "absolute bottom-0 right-0 top-14 z-20 w-[380px] border-l border-border bg-surface px-5 py-6 shadow-[-24px_0_60px_-30px_rgb(15_23_42/0.3)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ".concat(
                                  W
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-full opacity-0",
                                ),
                              children: [
                                (0, a.jsx)("p", {
                                  className: "px-2.5 text-[16px] font-medium",
                                  children: "Sources \\xb7 6",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "mt-1 px-2.5 text-[13px] text-text-muted",
                                  children:
                                    "14 figures cited \\xb7 every one opens its passage",
                                }),
                                p.map((e) =>
                                  (0, a.jsxs)(
                                    "div",
                                    {
                                      className: "mt-5 grid gap-0.5",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "mb-1 px-2.5 text-[12.5px] font-medium text-text-muted",
                                          children: e.group,
                                        }),
                                        e.rows.map((e) =>
                                          (0, a.jsxs)(
                                            "div",
                                            {
                                              "data-t": "src".concat(e.n),
                                              className:
                                                "flex items-center gap-3 rounded-[10px] px-2.5 py-2 transition-colors duration-300 ".concat(
                                                  J === e.n
                                                    ? "bg-[#eef3fc]"
                                                    : "",
                                                ),
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "grid h-6 w-6 flex-none place-items-center rounded-full bg-[#e8eefb] text-[11px] font-medium text-[#1d4fa8]",
                                                  children: e.n,
                                                }),
                                                (0, a.jsxs)("span", {
                                                  className:
                                                    "grid min-w-0 gap-0.5",
                                                  children: [
                                                    (0, a.jsxs)("span", {
                                                      className:
                                                        "flex items-center gap-2 truncate text-[14px] font-medium leading-tight",
                                                      children: [
                                                        e.sp &&
                                                          (0, a.jsx)(i.CG, {
                                                            size: 11,
                                                          }),
                                                        e.title,
                                                      ],
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-[12.5px] leading-tight text-text-muted",
                                                      children: e.meta,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            e.n,
                                          ),
                                        ),
                                      ],
                                    },
                                    e.group,
                                  ),
                                ),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  !es &&
                    (0, a.jsxs)("div", {
                      className:
                        "pointer-events-none absolute left-0 top-0 z-30 transition-[transform,opacity] duration-[800ms] ease-[cubic-bezier(.45,0,.2,1)]",
                      style: {
                        transform: "translate("
                          .concat(er.x - 3, "px, ")
                          .concat(er.y - 2, "px)"),
                        opacity: er.on ? 1 : 0,
                      },
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "absolute -left-3 -top-3 h-7 w-7 rounded-full border-2 border-accent transition-[opacity,transform] duration-300 ".concat(
                              er.press
                                ? "scale-100 opacity-60"
                                : "scale-50 opacity-0",
                            ),
                        }),
                        (0, a.jsx)("svg", {
                          className:
                            "relative drop-shadow-[0_2px_4px_rgb(0_0_0/0.3)] transition-transform duration-150 ".concat(
                              er.press ? "scale-[0.85]" : "scale-100",
                            ),
                          style: { transformOrigin: "3px 2px" },
                          width: "22",
                          height: "30",
                          viewBox: "0 0 14 20",
                          children: (0, a.jsx)("path", {
                            d: "M1 1v15l4-3.5 2.6 6 2.4-1-2.6-5.8H13L1 1z",
                            fill: "#16181d",
                            stroke: "#fff",
                            strokeWidth: "1.2",
                            strokeLinejoin: "round",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
            !es &&
              (0, a.jsxs)("button", {
                type: "button",
                onClick: () => _((e) => !e),
                "aria-pressed": N,
                "aria-label": N ? "Play the film" : "Pause the film",
                className:
                  "absolute bottom-4 right-4 z-10 inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full bg-white/90 px-3 text-[13px] font-medium text-[#0b1220] shadow-[0_4px_12px_rgb(10_20_40/0.18)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b1220] focus-visible:ring-offset-2",
                children: [
                  (0, a.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    "aria-hidden": !0,
                    children: N
                      ? (0, a.jsx)("path", {
                          d: "M4 2.5v9l7.5-4.5z",
                          fill: "currentColor",
                        })
                      : (0, a.jsx)("path", {
                          d: "M4 2.5h2v9H4zM8 2.5h2v9H8z",
                          fill: "currentColor",
                        }),
                  }),
                  (0, a.jsx)("span", {
                    className: "hidden md:inline",
                    children: N ? "Play" : "Pause",
                  }),
                ],
              }),
          ],
        });
      }
    },
    5022: function (t, e, i) {
      "use strict";
      i.d(e, {
        CoreMark: function () {
          return a;
        },
      });
      var r = i(57514),
        n = i(43652);
      i(53103);
      let o = (t) => (t >= 40 ? "three" : t >= 20 ? "two" : "flat");
      function a(t) {
        let {
            kind: e = "word",
            tone: i,
            height: a = 64,
            ink: s = "var(--color-ink)",
            mid: l = "var(--color-text-muted-2)",
            lite: h = "var(--color-surface-muted)",
            label: d,
            className: c,
          } = t,
          [u, f] = (0, n.useState)(
            () =>
              "undefined" != typeof customElements &&
              !!customElements.get("core-mark"),
          );
        return (
          (0, n.useEffect)(() => {
            if (u || "undefined" == typeof customElements) return;
            let t = !1;
            return (
              customElements.whenDefined("core-mark").then(() => {
                t || f(!0);
              }),
              () => {
                t = !0;
              }
            );
          }, [u]),
          (0, r.jsx)("span", {
            className: c,
            style: { display: "inline-flex", lineHeight: 0 },
            ...(d ? { role: "img", "aria-label": d } : { "aria-hidden": !0 }),
            children: (0, r.jsx)("core-mark", {
              kind: e,
              tone: null != i ? i : o(a),
              height: a,
              ink: s,
              mid: l,
              lite: h,
            }),
          })
        );
      }
    },
    53103: function () {
      "undefined" != typeof customElements &&
        (() => {
          let t = (t) => (t * Math.PI) / 180,
            e = { az: -40, el: 30, core: 0.68 },
            i = ((e, i) => {
              let r = t(e),
                n = t(i),
                o = [-Math.sin(r), Math.cos(r), 0],
                a = [
                  -Math.sin(n) * Math.cos(r),
                  -Math.sin(n) * Math.sin(r),
                  Math.cos(n),
                ],
                s = (t) => [
                  50 + 50 * (t[0] * o[0] + t[1] * o[1] + t[2] * o[2]),
                  50 - 50 * (t[0] * a[0] + t[1] * a[1] + t[2] * a[2]),
                ],
                l = (t, e) =>
                  s([
                    e * (Math.cos(t) * o[0] + Math.sin(t) * a[0]),
                    e * (Math.cos(t) * o[1] + Math.sin(t) * a[1]),
                    e * Math.sin(t) * a[2],
                  ]),
                h = (t, e) => s([e * Math.cos(t), e * Math.sin(t), 0]),
                d = (t, e) => s([0, e * Math.cos(t), e * Math.sin(t)]),
                c = Math.atan2(-o[0], a[0]);
              0 > Math.sin(c) && (c += Math.PI);
              let u = Math.atan2(o[1], o[0]),
                f = Math.sign(Math.cos(n) * Math.sin(r)),
                x = f > 0 ? Math.PI / 2 : -Math.PI / 2,
                M = f > 0 ? 0 : Math.PI,
                p = [
                  Math.cos(c) * o[0] + Math.sin(c) * a[0],
                  Math.cos(c) * o[1] + Math.sin(c) * a[1],
                  Math.sin(c) * a[2],
                ],
                g = Math.atan2(p[2], p[1]),
                m = function (t, e, i, r) {
                  let n =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 96;
                  return Array.from({ length: n + 1 }, (o, a) =>
                    t(e + ((i - e) * a) / n, r),
                  );
                },
                C = (t) =>
                  "M" +
                  t
                    .map((t) => {
                      let [e, i] = t;
                      return e.toFixed(2) + " " + i.toFixed(2);
                    })
                    .join(" L") +
                  " Z",
                H = (t) =>
                  "M" +
                  t
                    .map((t) => {
                      let [e, i] = t;
                      return e.toFixed(2) + " " + i.toFixed(2);
                    })
                    .join(" L");
              return {
                disc: function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return C(m(l, 0, 2 * Math.PI, t, 200));
                },
                quarter: (t) =>
                  C([...m(l, 0, c, t), ...m(d, g, M, t), ...m(h, x, u, t)]),
                body: function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return C([
                    ...m(l, c, 2 * Math.PI, t, 200),
                    ...m(h, u, x, t),
                    ...m(d, M, g, t),
                  ]);
                },
                limbArc: function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return H(m(l, c, 2 * Math.PI, t, 200));
                },
                cutEdge: function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return H([...m(h, u, x, t), ...m(d, M, g, t)]);
                },
                faceZ: function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return C([[50, 50], ...m(h, x, u, t)]);
                },
                faceX: function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return C([[50, 50], ...m(d, M, g, t)]);
                },
                opening: function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1;
                  return C([
                    ...m(l, 0, c, t),
                    ...m(d, g, M, t),
                    ...m(h, x, u, t),
                  ]);
                },
              };
            })(e.az, e.el),
            r = 0,
            n = (t, n, o, a, s) => {
              let l =
                '<path fill-rule="evenodd" d="' +
                i.disc() +
                " " +
                i.quarter(e.core) +
                '" fill="' +
                n +
                '"></path>';
              if ("two" !== t && "three" !== t) return l;
              if ("two" === t)
                return (
                  l +
                  ('<path fill-rule="evenodd" d="' +
                    i.quarter(1) +
                    " " +
                    i.quarter(e.core) +
                    '" fill="' +
                    o) +
                  '"></path>'
                );
              let h = "cf" + ++r;
              return (
                l +
                ('<path fill-rule="evenodd" d="' +
                  i.quarter(1) +
                  " " +
                  i.quarter(e.core) +
                  '" fill="' +
                  o) +
                '"></path><defs><clipPath id="' +
                h +
                '"><path d="' +
                i.quarter(1) +
                '"></path></clipPath></defs><g clip-path="url(#' +
                h +
                ')">' +
                ('<path fill-rule="evenodd" d="' +
                  i.faceZ(1) +
                  " " +
                  i.faceZ(e.core) +
                  '" fill="' +
                  a) +
                '"></path></g>'
              );
            },
            o = { CO: 28, OR: 38, RE: 48 },
            a = (e) => {
              let i = 50 - e / 2,
                r = (e) => [50 + i * Math.cos(t(e)), 50 - i * Math.sin(t(e))],
                [n, o] = r(38),
                [a, s] = r(-38);
              return (
                "M" +
                n.toFixed(2) +
                " " +
                o.toFixed(2) +
                " A" +
                i.toFixed(2) +
                " " +
                i.toFixed(2) +
                " 0 1 0 " +
                a.toFixed(2) +
                " " +
                s.toFixed(2)
              );
            },
            s = (t) => {
              let e = t / 2,
                i = (58 - t) / 2,
                r = 82 - i - e;
              return {
                R: {
                  w: 82,
                  d:
                    "M" +
                    e +
                    " 100 L" +
                    e +
                    " " +
                    e +
                    " L" +
                    r.toFixed(2) +
                    " " +
                    e +
                    " A" +
                    i.toFixed(2) +
                    " " +
                    i.toFixed(2) +
                    " 0 0 1 " +
                    r.toFixed(2) +
                    " " +
                    (58 - e).toFixed(2) +
                    " L" +
                    e +
                    " " +
                    (58 - e).toFixed(2) +
                    " M" +
                    r.toFixed(2) +
                    " " +
                    (58 - e).toFixed(2) +
                    " L" +
                    (82 - e).toFixed(2) +
                    " 100",
                },
                E: {
                  w: 74,
                  d:
                    "M" +
                    (74 - e).toFixed(2) +
                    " " +
                    e +
                    " L" +
                    e +
                    " " +
                    e +
                    " L" +
                    e +
                    " " +
                    (100 - e).toFixed(2) +
                    " L" +
                    (74 - e).toFixed(2) +
                    " " +
                    (100 - e).toFixed(2) +
                    " M" +
                    e +
                    " 50 L" +
                    (74 - e).toFixed(2) +
                    " 50",
                },
              };
            },
            l = (t, e, i, r, l, h) => {
              let d = s(13),
                c = [],
                u = 6.5;
              c.push(
                '<path d="' +
                  a(13) +
                  '" transform="translate(' +
                  u.toFixed(2) +
                  ' 0)"></path>',
              );
              let f = (u += 100 + o.CO);
              ((u += 106 + o.OR),
                c.push(
                  '<path d="' +
                    d.R.d +
                    '" transform="translate(' +
                    u.toFixed(2) +
                    ' 0)"></path>',
                ),
                (u += d.R.w + o.RE),
                c.push(
                  '<path d="' +
                    d.E.d +
                    '" transform="translate(' +
                    u.toFixed(2) +
                    ' 0)"></path>',
                ));
              let x = (u += d.E.w) + 6.5,
                M =
                  '<g transform="translate(' +
                  f.toFixed(2) +
                  ' -3.00) scale(1.0600)">' +
                  n(e, i, r, l, h) +
                  "</g>";
              return (
                '<svg width="' +
                ((t / 126) * (x + 26)).toFixed(1) +
                '" height="' +
                t +
                '" viewBox="-13 -13 ' +
                (x + 26).toFixed(2) +
                ' 126.00" style="display:block;overflow:visible;max-width:100%;height:auto"><g fill="none" stroke="' +
                i +
                '" stroke-width="13" stroke-linecap="butt" stroke-linejoin="miter">' +
                c.join("") +
                "</g>" +
                M +
                "</svg>"
              );
            },
            h = (t, e, i, r, o, a) =>
              '<svg width="' +
              t +
              '" height="' +
              t +
              '" viewBox="-3 -3 106 106" style="display:block;overflow:visible;max-width:100%;height:auto">' +
              n(e, i, r, o, a) +
              "</svg>";
          class d extends HTMLElement {
            static get observedAttributes() {
              return ["kind", "tone", "ink", "mid", "lite", "core", "height"];
            }
            connectedCallback() {
              this.render();
            }
            attributeChangedCallback() {
              this.render();
            }
            render() {
              let t = this.getAttribute("kind") || "word",
                e = this.getAttribute("tone") || "flat",
                i = this.getAttribute("ink") || "#15161a",
                r = this.getAttribute("mid") || "rgba(255,255,255,0.42)",
                n = this.getAttribute("lite") || "#f4f2ee",
                o = this.getAttribute("core") || r,
                a = parseFloat(this.getAttribute("height") || "64");
              this.shadowRoot.innerHTML =
                "<style>:host{display:inline-flex;line-height:0;max-width:100%}svg{max-width:100%;height:auto}</style>" +
                ("sphere" === t ? h(a, e, i, r, n, o) : l(a, e, i, r, n, o));
            }
            constructor() {
              (super(), this.attachShadow({ mode: "open" }));
            }
          }
          (customElements.get("core-mark") ||
            customElements.define("core-mark", d),
            (window.CoreMarkGeometry = {
              CAM: e,
              sphere: n,
              wordSvg: l,
              sphereSvg: h,
            }));
        })();
    },
    55200: function (e, t, s) {
      "use strict";
      s.d(t, {
        CG: function () {
          return f;
        },
        DD: function () {
          return d;
        },
        OY: function () {
          return _;
        },
        iA: function () {
          return b;
        },
        zg: function () {
          return S;
        },
      });
      var a = s(57514),
        r = s(43652),
        n = s(5022),
        i = s(63111),
        l = s(3218),
        c = s.n(l);
      let o = "Where does our NVDA preview sit against consensus?";
      function d() {
        let [e, t] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          let e = 0,
            s = 0,
            a = window.setTimeout(() => {
              s = window.setInterval(() => {
                (t(++e), e >= o.length && window.clearInterval(s));
              }, 36);
            }, 700);
          return () => {
            (window.clearTimeout(a), window.clearInterval(s));
          };
        }, []);
        let s = e >= o.length;
        return (0, a.jsxs)("div", {
          className:
            "w-[960px] overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgb(15_23_42/0.35)]",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex items-center gap-3 border-b border-border px-8 py-5 text-[15px] text-text-muted",
              children: [
                (0, a.jsx)(n.CoreMark, {
                  kind: "word",
                  height: 20,
                  label: "Core",
                }),
                (0, a.jsx)("span", { children: "New question" }),
                (0, a.jsx)("span", {
                  className: "ml-auto font-num text-[13px]",
                  children: "All companies \\xb7 Your model",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "px-8 pb-8 pt-9",
              children: [
                (0, a.jsxs)("p", {
                  className:
                    "min-h-[2.1em] font-display text-[56px] font-light leading-[1.05] tracking-[-0.02em] text-ink",
                  children: [
                    o.slice(0, e),
                    (0, a.jsx)("span", { className: c().caret }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "mt-9 flex flex-row items-center gap-3",
                  children: [
                    [
                      "S&P Global Visible Alpha",
                      "Your notes \\xb7 1,284",
                      "Filings \\xb7 DART, EDGAR",
                      "Your book \\xb7 38 positions",
                    ].map((e, t) =>
                      (0, a.jsx)(
                        "span",
                        {
                          className: "".concat(
                            c().rise,
                            " rounded-full border border-border-strong px-4 py-2 text-[14px] text-ink-2",
                          ),
                          style: {
                            animationDelay: "".concat(1300 + 140 * t, "ms"),
                          },
                          children: e,
                        },
                        e,
                      ),
                    ),
                    (0, a.jsx)("span", {
                      className:
                        "ml-auto grid h-11 w-11 place-items-center rounded-full text-[18px] transition-colors duration-300 ".concat(
                          s
                            ? "bg-accent text-on-accent"
                            : "bg-border-strong text-text-muted",
                        ),
                      children: "↑",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let x = [
          "S&P Global",
          "Visible Alpha",
          'search "nvidia"',
          "NVIDIA Corp (NVDA US)",
          "Standardized",
          "Income Statement",
          "Revenue +4",
        ],
        p = [
          { q: "nvidia", hits: 12 },
          { q: "nvda", hits: 3 },
          { q: "nvidia corp", hits: 1 },
        ],
        m = [
          {
            name: "NVIDIA Corp",
            id: "NVDA US",
            score: 98,
            why: "exact ticker match",
            win: !0,
          },
          { name: "NVIDIA Corp", id: "NVD GR", score: 61, why: "name match" },
          { name: "Nidec Corp", id: "6594 JP", score: 22, why: "similar name" },
        ],
        u = [
          { item: "Revenue", figures: 412, brokers: 46 },
          { item: "Data Center revenue", figures: 388, brokers: 44 },
          { item: "Gross margin", figures: 401, brokers: 45 },
          { item: "Operating income", figures: 376, brokers: 43 },
          { item: "EPS (diluted)", figures: 409, brokers: 46 },
        ],
        h = [2024, 2025, 2026, 2027, 2028, 2029];
      function f(e) {
        let { size: t = 18 } = e;
        return (0, a.jsxs)("svg", {
          viewBox: "0 0 156 34",
          height: t,
          width: (156 * t) / 34,
          role: "presentation",
          children: [
            (0, a.jsx)("rect", {
              x: "0",
              y: "0",
              width: "156",
              height: "3.6",
              fill: "currentColor",
            }),
            (0, a.jsx)("text", {
              x: "0",
              y: "31",
              textLength: "156",
              lengthAdjust: "spacingAndGlyphs",
              fill: "#ff3b4f",
              style: {
                font: "500 28px 'Helvetica Neue', Helvetica, Arial, sans-serif",
              },
              children: "S&P Global",
            }),
          ],
        });
      }
      let g = (e) => ({ animationDelay: "".concat(e, "ms") });
      function b(e) {
        let { done: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "w-[960px] overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgb(15_23_42/0.35)] ".concat(
              t ? c().done : "",
            ),
          children: [
            (0, a.jsxs)("header", {
              className: "border-b border-border px-8 pb-5 pt-6",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3 text-ink",
                  children: [
                    (0, a.jsx)(f, { size: 20 }),
                    (0, a.jsx)("span", {
                      className: "text-[17px] font-semibold",
                      children: "Visible Alpha",
                    }),
                    (0, a.jsx)("span", {
                      className: "".concat(c().shimmer, " text-[15px]"),
                      children: "digging through the database",
                    }),
                    (0, a.jsxs)("span", {
                      className:
                        "ml-auto flex items-center gap-2 font-num text-[14px] text-text-muted",
                      children: [
                        (0, a.jsx)("span", { className: c().liveDot }),
                        (0, a.jsx)("span", {
                          className: c().fade,
                          style: g(2900),
                          children: "1,986 figures",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("nav", {
                  className:
                    "mt-4 flex flex-row flex-wrap items-center gap-x-2 font-num text-[16px]",
                  children: x.map((e, t) =>
                    (0, a.jsxs)(
                      "span",
                      {
                        className: "".concat(
                          c().rise,
                          " flex items-center gap-2",
                        ),
                        style: g(250 + 200 * t),
                        children: [
                          t > 0 &&
                            (0, a.jsx)("span", {
                              className: "text-text-muted-2",
                              children: "›",
                            }),
                          (0, a.jsx)("span", {
                            className:
                              t === x.length - 1
                                ? "font-medium text-ink"
                                : "text-text-muted",
                            children: e,
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
                (0, a.jsx)("div", {
                  className: "".concat(
                    c().dig,
                    " mt-4 h-[3px] rounded-full bg-surface-muted",
                  ),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "grid grid-cols-2 gap-10 px-8 py-7",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid content-start gap-4",
                  children: [
                    (0, a.jsx)("p", {
                      className: "".concat(
                        c().rise,
                        " text-[15px] font-semibold text-ink",
                      ),
                      style: g(900),
                      children: "Searched S&P's company index",
                    }),
                    (0, a.jsx)("div", {
                      className: "flex flex-row flex-wrap gap-2",
                      children: p.map((e, t) =>
                        (0, a.jsxs)(
                          "span",
                          {
                            className: "".concat(
                              c().rise,
                              " inline-flex items-center gap-2 rounded-full border border-border-strong px-3 py-1 text-[14px]",
                            ),
                            style: g(1050 + 110 * t),
                            children: [
                              (0, a.jsx)("span", {
                                className: "font-num text-ink",
                                children: e.q,
                              }),
                              (0, a.jsxs)("span", {
                                className: "font-num text-text-muted",
                                children: [e.hits, " hits"],
                              }),
                            ],
                          },
                          e.q,
                        ),
                      ),
                    }),
                    (0, a.jsx)("p", {
                      className: "".concat(
                        c().rise,
                        " mt-2 text-[12px] uppercase tracking-[0.14em] text-text-muted",
                      ),
                      style: g(1450),
                      children: "Candidates, scored",
                    }),
                    (0, a.jsx)("ul", {
                      className: "flex flex-col gap-3",
                      children: m.map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className: "".concat(
                              c().rise,
                              " grid grid-cols-[12.5rem_1fr_auto] items-center gap-3 text-[15px]",
                            ),
                            style: g(1550 + 140 * t),
                            children: [
                              (0, a.jsxs)("span", {
                                className: e.win
                                  ? "font-semibold text-ink"
                                  : "text-text-muted",
                                children: [
                                  e.win &&
                                    (0, a.jsx)("span", {
                                      className: "mr-1 text-[#ff3b4f]",
                                      children: "▸",
                                    }),
                                  e.name,
                                  " ",
                                  (0, a.jsx)("span", {
                                    className:
                                      "font-num text-[12px] text-text-muted-2",
                                    children: e.id,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "h-[7px] rounded-full bg-surface-muted",
                                children: (0, a.jsx)("span", {
                                  className: ""
                                    .concat(
                                      c().bar,
                                      " block h-full rounded-full ",
                                    )
                                    .concat(
                                      e.win
                                        ? "bg-[#ff3b4f]"
                                        : "bg-text-muted-2",
                                    ),
                                  style: {
                                    width: "".concat(e.score, "%"),
                                    ...g(1650 + 140 * t),
                                  },
                                }),
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "font-num text-[13px] text-text-muted",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-ink",
                                    children: e.score,
                                  }),
                                  " \\xb7 ",
                                  e.why,
                                ],
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, a.jsx)("p", {
                      className: "".concat(
                        c().rise,
                        " rounded-[12px] border border-border px-4 py-3 text-[14px] text-ink-2",
                      ),
                      style: g(2200),
                      children:
                        "Picked NVIDIA Corp (NVDA US), 37 points clear of the next. Already in Core, consensus as of 14 Oct 2026.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid content-start gap-3",
                  children: [
                    (0, a.jsx)("p", {
                      className: "".concat(
                        c().rise,
                        " text-[15px] font-semibold text-ink",
                      ),
                      style: g(2500),
                      children: "Pulled 5 line items from NVIDIA Corp",
                    }),
                    (0, a.jsx)("table", {
                      className:
                        "w-full border-separate border-spacing-y-[7px] text-[14px]",
                      children: (0, a.jsx)("tbody", {
                        children: u.map((e, t) =>
                          (0, a.jsxs)(
                            "tr",
                            {
                              className: c().rise,
                              style: g(2650 + 160 * t),
                              children: [
                                (0, a.jsxs)("td", {
                                  className: "pr-3",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "font-medium text-ink",
                                      children: e.item,
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "text-[12px] text-text-muted",
                                      children:
                                        "Standardized › Income Statement",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("td", {
                                  className: "pr-3",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "flex flex-row gap-[3px]",
                                      children: h.map((e, s) =>
                                        (0, a.jsx)(
                                          "span",
                                          {
                                            className: ""
                                              .concat(
                                                c().cell,
                                                " h-[16px] w-[20px] rounded-[3px] ",
                                              )
                                              .concat(
                                                e <= 2026
                                                  ? "bg-[#3987e5]"
                                                  : c().hatch,
                                              ),
                                            style: g(2750 + 160 * t + 45 * s),
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "mt-1 flex justify-between font-num text-[10px] text-text-muted-2",
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: "FY24",
                                        }),
                                        (0, a.jsx)("span", {
                                          children: "FY29",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("td", {
                                  className:
                                    "whitespace-nowrap text-right font-num text-[12px] text-text-muted",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "text-ink",
                                      children: e.figures,
                                    }),
                                    " figures",
                                    (0, a.jsxs)("div", {
                                      children: [e.brokers, " brokers"],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.item,
                          ),
                        ),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(
                        c().rise,
                        " flex flex-row items-center gap-5 text-[12px] text-text-muted",
                      ),
                      style: g(3600),
                      children: [
                        (0, a.jsxs)("span", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, a.jsx)("span", {
                              className: "h-3 w-3 rounded-[2px] bg-[#3987e5]",
                            }),
                            "reported",
                          ],
                        }),
                        (0, a.jsxs)("span", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, a.jsx)("span", {
                              className: "h-3 w-3 rounded-[2px] ".concat(
                                c().hatch,
                              ),
                            }),
                            "consensus",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let j = [
          { q: "Q4 FY26", v: 68.1, printed: !0 },
          { q: "Q1 FY27", v: 81.6, printed: !0 },
          { q: "Q2 FY27", v: 96.2, printed: !0 },
          { q: "Q3 FY27", v: 110.4, printed: !1 },
          { q: "Q4 FY27", v: 122.6, printed: !1 },
        ],
        N = (e) => 220 - (e / 130) * 200;
      function _(e) {
        let { done: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "w-[960px] overflow-hidden rounded-[22px] border border-border bg-surface px-10 pb-8 pt-9 shadow-[0_30px_80px_-30px_rgb(15_23_42/0.35)] ".concat(
              t ? c().done : "",
            ),
          children: [
            (0, a.jsx)("p", {
              className:
                "font-num text-[13px] uppercase tracking-[0.14em] text-text-muted",
              children: "NVIDIA \\xb7 revenue against S&P consensus \\xb7 $B",
            }),
            (0, a.jsxs)("h3", {
              className: "".concat(
                c().rise,
                " mt-4 max-w-[800px] font-display text-[40px] font-light leading-[1.1] tracking-[-0.015em] text-ink",
              ),
              style: g(200),
              children: [
                "Our Q3 preview of ",
                (0, a.jsx)("span", {
                  className: "text-accent",
                  children: "$113.0B",
                }),
                " sits 2.4% above consensus. NVIDIA has beaten the top of its range three quarters running.",
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-8 grid grid-cols-[1fr_15rem] gap-10",
              children: [
                (0, a.jsxs)("svg", {
                  viewBox: "0 0 600 250",
                  className: "w-full",
                  role: "presentation",
                  children: [
                    (0, a.jsx)("defs", {
                      children: (0, a.jsxs)("pattern", {
                        id: "film-hatch",
                        width: "6",
                        height: "6",
                        patternUnits: "userSpaceOnUse",
                        patternTransform: "rotate(45)",
                        children: [
                          (0, a.jsx)("rect", {
                            width: "6",
                            height: "6",
                            fill: "#d95926",
                            opacity: "0.35",
                          }),
                          (0, a.jsx)("line", {
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "6",
                            stroke: "#d95926",
                            strokeWidth: "2.6",
                          }),
                        ],
                      }),
                    }),
                    [0, 40, 80, 120].map((e) =>
                      (0, a.jsxs)(
                        "g",
                        {
                          children: [
                            (0, a.jsx)("line", {
                              x1: "40",
                              x2: "600",
                              y1: N(e),
                              y2: N(e),
                              stroke: "var(--color-border)",
                            }),
                            (0, a.jsx)("text", {
                              x: "30",
                              y: N(e) + 4,
                              textAnchor: "end",
                              fontSize: "12",
                              fill: "var(--color-text-muted)",
                              fontFamily: "var(--font-num)",
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                    j.map((e, t) => {
                      let s = 70 + 106 * t;
                      return (0, a.jsxs)(
                        "g",
                        {
                          children: [
                            (0, a.jsx)("rect", {
                              className: c().grow,
                              style: g(1100 + 140 * t),
                              x: s,
                              y: N(e.v),
                              width: "62",
                              height: 220 - N(e.v),
                              rx: "3",
                              fill: e.printed ? "#3987e5" : "url(#film-hatch)",
                              stroke: e.printed ? "none" : "#d95926",
                            }),
                            (0, a.jsx)("text", {
                              className: c().fade,
                              style: g(1400 + 140 * t),
                              x: s + 31,
                              y: N(e.v) - 10,
                              textAnchor: "middle",
                              fontSize: "14",
                              fill: "var(--color-ink)",
                              fontFamily: "var(--font-num)",
                              children: e.v.toFixed(1),
                            }),
                            (0, a.jsx)("text", {
                              x: s + 31,
                              y: "242",
                              textAnchor: "middle",
                              fontSize: "12",
                              fill: "var(--color-text-muted)",
                              fontFamily: "var(--font-num)",
                              children: e.q,
                            }),
                          ],
                        },
                        e.q,
                      );
                    }),
                    (0, a.jsxs)("g", {
                      className: c().fade,
                      style: g(2100),
                      children: [
                        (0, a.jsx)("line", {
                          x1: 378,
                          x2: 460,
                          y1: N(113),
                          y2: N(113),
                          stroke: "var(--color-accent)",
                          strokeWidth: "2.5",
                          strokeDasharray: "5 4",
                        }),
                        (0, a.jsx)("text", {
                          x: 466,
                          y: N(113) + 4,
                          fontSize: "13",
                          fill: "var(--color-accent)",
                          fontFamily: "var(--font-num)",
                          children: "our 113.0",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "grid content-start gap-5",
                  children: [
                    ["Printed above range", "3 of 3"],
                    ["S&P consensus, Q3", "$110.4B"],
                    ["Our preview vs consensus", "+2.4%"],
                  ].map((e, t) => {
                    let [s, r] = e;
                    return (0, a.jsxs)(
                      "div",
                      {
                        className: "".concat(
                          c().rise,
                          " border-b border-border pb-4",
                        ),
                        style: g(1700 + 160 * t),
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "text-[12px] uppercase tracking-[0.12em] text-text-muted",
                            children: s,
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mt-1 font-display text-[36px] font-light leading-none text-ink",
                            children: r,
                          }),
                        ],
                      },
                      s,
                    );
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "mt-6 flex flex-row items-center justify-between gap-6",
              children: [
                (0, a.jsxs)("p", {
                  className: "".concat(
                    c().rise,
                    " rounded-full border border-border px-4 py-2 font-num text-[13px] text-ink-2",
                  ),
                  style: g(2700),
                  children: [
                    (0, a.jsx)("span", {
                      className: "text-positive",
                      children: "✓",
                    }),
                    " Verified \\xb7 14 figures cited \\xb7 6 sources \\xb7 S&P Global Visible Alpha, NVIDIA releases, your notes",
                  ],
                }),
                (0, a.jsx)("p", {
                  className:
                    "whitespace-nowrap font-num text-[11px] text-text-muted-2",
                  children: "Demo data; consensus illustrative",
                }),
              ],
            }),
          ],
        });
      }
      let y = i.LB.en.mac.rumor,
        v = {
          t: "var(--color-positive)",
          u: "var(--color-warn)",
          f: "var(--color-negative)",
        },
        w = {
          supports: {
            color: "var(--color-positive)",
            mark: "●",
            label: "supports",
          },
          neutral: {
            color: "var(--color-text-muted)",
            mark: "○",
            label: "neutral",
          },
          contradicts: {
            color: "var(--color-negative)",
            mark: "◆",
            label: "contradicts",
          },
        };
      function k(e) {
        let { pct: t, color: s, delay: r } = e,
          n = 2 * Math.PI * 26;
        return (0, a.jsxs)("svg", {
          viewBox: "0 0 64 64",
          width: "64",
          height: "64",
          role: "presentation",
          className: "shrink-0",
          children: [
            (0, a.jsx)("circle", {
              cx: "32",
              cy: "32",
              r: "26",
              fill: "none",
              stroke: "var(--color-border)",
              strokeWidth: "6",
            }),
            (0, a.jsx)("circle", {
              cx: "32",
              cy: "32",
              r: "26",
              fill: "none",
              stroke: s,
              strokeWidth: "6",
              strokeLinecap: "round",
              transform: "rotate(-90 32 32)",
              strokeDasharray: n,
              className: c().ring,
              style: { "--to": n * (1 - t / 100), "--from": n, ...g(r) },
            }),
            (0, a.jsxs)("text", {
              x: "32",
              y: "37",
              textAnchor: "middle",
              fontSize: "15",
              fill: "var(--color-ink)",
              fontFamily: "var(--font-num)",
              children: [t, "%"],
            }),
          ],
        });
      }
      function S(e) {
        let { done: t } = e,
          [s, i] = (0, r.useState)(t ? y.text.length : 0);
        return (
          (0, r.useEffect)(() => {
            if (t) return;
            let e = 0,
              s = window.setInterval(() => {
                (i(Math.min((e += 2), y.text.length)),
                  e >= y.text.length && window.clearInterval(s));
              }, 32);
            return () => window.clearInterval(s);
          }, [t]),
          (0, a.jsxs)("div", {
            className:
              "w-[960px] overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgb(15_23_42/0.35)] ".concat(
                t ? c().done : "",
              ),
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex items-center gap-3 border-b border-border px-8 py-5 text-[15px] text-text-muted",
                children: [
                  (0, a.jsx)(n.CoreMark, {
                    kind: "word",
                    height: 20,
                    label: "Core",
                  }),
                  (0, a.jsx)("span", { children: "Check a rumor" }),
                  (0, a.jsxs)("span", {
                    className: "ml-auto font-num text-[13px]",
                    children: [y.company, " \\xb7 Your model"],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "grid gap-6 px-8 pb-8 pt-7",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "rounded-[14px] border border-border-strong bg-surface-muted px-5 py-4",
                    children: [
                      (0, a.jsx)("p", {
                        className: "font-num text-[12px] text-text-muted",
                        children: y.from,
                      }),
                      (0, a.jsxs)("p", {
                        className:
                          "mt-2 font-display text-[30px] font-light leading-snug text-ink",
                        children: [
                          "“",
                          y.text.slice(0, s),
                          s < y.text.length
                            ? (0, a.jsx)("span", { className: c().caret })
                            : "”",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "".concat(c().rise, " grid gap-3"),
                    style: g(1500),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3 text-[14px]",
                        children: [
                          (0, a.jsx)("span", {
                            className: "".concat(c().shimmer, " font-medium"),
                            children:
                              "Reading your notes and data, not the internet",
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "ml-auto font-num text-[12px] text-text-muted",
                            children: y.receipt.split(" \\xb7 ")[1],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "".concat(
                          c().dig,
                          " h-[3px] rounded-full bg-surface-muted",
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-row flex-wrap gap-2",
                        children: y.evidence.map((e, t) =>
                          (0, a.jsx)(
                            "span",
                            {
                              className: "".concat(
                                c().rise,
                                " rounded-full border border-border px-3 py-1 font-num text-[12px] text-ink-2",
                              ),
                              style: g(1800 + 220 * t),
                              children: e.who,
                            },
                            e.who,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: y.claims.map((e, t) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "".concat(
                            c().rise,
                            " flex items-center gap-4 rounded-[14px] border border-border px-4 py-4",
                          ),
                          style: g(3200 + 260 * t),
                          children: [
                            (0, a.jsx)(k, {
                              pct: e.pct,
                              color: v[e.tone],
                              delay: 3400 + 260 * t,
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("p", {
                                  className: "text-[17px] font-semibold",
                                  style: { color: v[e.tone] },
                                  children: e.verdict,
                                }),
                                (0, a.jsx)("p", {
                                  className: "mt-1 text-[14px] text-ink-2",
                                  children: e.text,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.text,
                      ),
                    ),
                  }),
                  (0, a.jsx)("p", {
                    className: "".concat(
                      c().rise,
                      " max-w-[820px] text-[15px] leading-relaxed text-ink-2",
                    ),
                    style: g(4400),
                    children: y.summary,
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "grid grid-cols-[1fr_1.1fr] gap-8 border-t border-border pt-5",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "grid content-start gap-2",
                        children: [
                          (0, a.jsx)("p", {
                            className: "".concat(
                              c().rise,
                              " text-[12px] uppercase tracking-[0.14em] text-text-muted",
                            ),
                            style: g(4800),
                            children: y.evidenceLabel,
                          }),
                          y.evidence.map((e, t) => {
                            let s = w[e.stance];
                            return (0, a.jsxs)(
                              "p",
                              {
                                className: "".concat(
                                  c().rise,
                                  " flex gap-2 text-[13px] text-ink-2",
                                ),
                                style: g(4900 + 140 * t),
                                children: [
                                  (0, a.jsx)("span", {
                                    "aria-hidden": !0,
                                    style: { color: s.color },
                                    children: s.mark,
                                  }),
                                  (0, a.jsxs)("span", {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "font-medium text-ink",
                                        children: e.who,
                                      }),
                                      " ",
                                      e.what,
                                    ],
                                  }),
                                ],
                              },
                              e.who,
                            );
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "grid content-start gap-2",
                        children: [
                          (0, a.jsx)("p", {
                            className: "".concat(
                              c().rise,
                              " text-[12px] uppercase tracking-[0.14em] text-text-muted",
                            ),
                            style: g(5700),
                            children: y.wouldLabel,
                          }),
                          (0, a.jsx)("p", {
                            className: "".concat(
                              c().rise,
                              " text-[14px] leading-relaxed text-ink-2",
                            ),
                            style: g(5800),
                            children: y.would,
                          }),
                          (0, a.jsxs)("p", {
                            className: "".concat(
                              c().rise,
                              " mt-3 w-fit rounded-full border border-border px-4 py-2 font-num text-[12px] text-ink-2",
                            ),
                            style: g(6200),
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-positive",
                                children: "✓",
                              }),
                              " ",
                              y.receipt,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    63111: function (module) {
      module.exports = {
        LB: {
          en: {
            mac: {
              rumor: {
                title: "Check a rumor before it moves the book.",
                sub: "Paste the post. Core reads your own notes and data, not the internet, and says how likely each claim is.",
                from: "@semi_supplyline \\xb7 X \\xb7 just now",
                text: "MSFT cut its GB300 rack order ~20% and pulled in Maia 200.",
                placeholder: "Paste the rumor, headline or post…",
                company: "Microsoft",
                claims: [
                  {
                    pct: 84,
                    verdict: "Likely true",
                    text: "Microsoft cut the order",
                    tone: "t",
                  },
                  {
                    pct: 38,
                    verdict: "Uncertain",
                    text: "Maia 200 pulled in",
                    tone: "u",
                  },
                  {
                    pct: 13,
                    verdict: "Likely false",
                    text: "NVIDIA’s outlook at risk",
                    tone: "f",
                  },
                ],
                summary:
                  "Two independent lines point the same way on the cut: our own channel check at Quanta and the customs records of Microsoft’s rack shipments. The Maia 200 pull-in rests on one broker note. On NVIDIA’s outlook, Oracle and Meta adding racks point the other way.",
                evidenceLabel: "Evidence",
                evidence: [
                  {
                    who: "J. Park \\xb7 channel check \\xb7 12 Sep",
                    what: "Quanta’s GB300 lead time fell sharply; one hyperscaler pushed Q4 builds into 1H27.",
                    stance: "supports",
                  },
                  {
                    who: "S&P Global Panjiva \\xb7 shipments",
                    what: "Microsoft’s GB300 rack shipments step down after the summer peak.",
                    stance: "supports",
                  },
                  {
                    who: "Morgan Stanley \\xb7 2 Oct",
                    what: "Maia 200’s tape-out pulled in to November 2026, on CoWoS-L.",
                    stance: "supports",
                  },
                  {
                    who: "NVIDIA \\xb7 Q2 FY27 call",
                    what: "One large cloud provider is digesting capacity, contained within the outlook.",
                    stance: "neutral",
                  },
                  {
                    who: "S. Lim \\xb7 channel check \\xb7 24 Sep",
                    what: "Oracle and Meta raised their Q4 GB300 plans; total rack volume flat to up.",
                    stance: "contradicts",
                  },
                ],
                wouldLabel: "What would change it",
                would:
                  "Microsoft confirming or denying a Maia 200 timeline, an October shipments month that recovers, or a second hyperscaler cutting rather than adding.",
                receipt:
                  "Checked \\xb7 9 passages read \\xb7 1 dataset query \\xb7 3 verdicts",
              },
            },
          },
        },
      };
    },

    3218: function (e) {
      e.exports = {
        film: "film_film__zyhN3",
        footage: "film_footage___Mgg0",
        scene: "film_scene__M4DTa",
        fadeIn: "film_fadeIn__5GWyV",
        leaving: "film_leaving__qEcfx",
        fadeOut: "film_fadeOut__e__KU",
        stage: "film_stage__KokWG",
        rig: "film_rig__bnmIB",
        crane: "film_crane__mn8F2",
        detail: "film_detail__961QU",
        tilt: "film_tilt__Cns6X",
        blurred: "film_blurred__eZckz",
        sharp: "film_sharp__vSGJc",
        done: "film_done__pSi_y",
        caret: "film_caret__1Vx9G",
        blink: "film_blink__0coBN",
        rise: "film_rise__ZLY_x",
        fade: "film_fade__bwdyv",
        bar: "film_bar__cCidI",
        growX: "film_growX__Ap_P2",
        grow: "film_grow__kpwYP",
        growY: "film_growY__ynkcs",
        cell: "film_cell__7_ZAO",
        pop: "film_pop__WFxJ1",
        hatch: "film_hatch__TlSCg",
        dig: "film_dig__vjdkq",
        shimmer: "film_shimmer__xFYQg",
        liveDot: "film_liveDot__rhHgf",
        pulse: "film_pulse__Y5IFd",
        grade: "film_grade__OKcMz",
        cityCard: "film_cityCard__2Rxg0",
        cardIn: "film_cardIn__UAi_p",
        cityName: "film_cityName__2u9jg",
        cityLine: "film_cityLine__ptgud",
        session: "film_session__jWJIE",
        openDot: "film_openDot__txBjD",
        closedDot: "film_closedDot__xPXQx",
        cityIndex: "film_cityIndex__mtDIg",
        indexName: "film_indexName__3lrg2",
        up: "film_up__hGnrC",
        down: "film_down__28HM7",
        still: "film_still__Z1uhi",
        ring: "film_ring__kzs50",
        flow: "film_flow__nh3vk",
        stagePan: "film_stagePan__BXzt6",
      };
    },
  };
  const { React, JSX, createRoot } = window.ReferenceRuntime;
  const loaded = new Map([
    [57514, { exports: JSX }],
    [43652, { exports: React }],
  ]);
  function load(id) {
    if (loaded.has(id)) return loaded.get(id).exports;
    const module = { exports: {} };
    loaded.set(id, module);
    factories[id](module, module.exports, load);
    return module.exports;
  }
  load.d = (exports, definitions) => {
    for (const [name, get] of Object.entries(definitions)) {
      if (!Object.hasOwn(exports, name))
        Object.defineProperty(exports, name, { enumerable: true, get });
    }
  };
  load.n = (module) => {
    const get =
      module && module.__esModule ? () => module.default : () => module;
    load.d(get, { a: get });
    return get;
  };

  const demo = document.querySelector("#demo");
  const frame = document.querySelector("#reference");
  const poster = document.querySelector("#poster");
  const Component = load(4621).default;

  function Specimen() {
    React.useEffect(() => {
      const frame = requestAnimationFrame(() => {
        poster.hidden = true;
      });
      return () => cancelAnimationFrame(frame);
    }, []);
    return JSX.jsx(Component, {});
  }

  createRoot(demo).render(JSX.jsx(Specimen, {}));
  if (window.parent !== window) {
    new ResizeObserver(() => {
      window.parent.postMessage(
        {
          type: "specimen-height",
          height: Math.ceil(frame.getBoundingClientRect().height),
        },
        "*",
      );
    }).observe(frame);
  }
})();
`;export{e as default};