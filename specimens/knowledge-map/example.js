/* Component factories from the deployed application, followed by the standalone adapter. */
(() => {
  const factories = {
    56131: function (e, t, n) {
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var a = n(57514),
        s = n(43652);
      let r = {
          company: [233, 234, 238],
          product: [122, 169, 255],
          doc: [224, 181, 74],
          claim: [95, 211, 154],
        },
        i = [
          {
            k: "company",
            label: "Companies \xb7 888",
            n: 96,
            c: { x: -122, y: -56, z: 30 },
            r: 54,
          },
          {
            k: "product",
            label: "Products \xb7 469",
            n: 64,
            c: { x: 118, y: -66, z: -28 },
            r: 46,
          },
          {
            k: "doc",
            label: "Documents \xb7 111",
            n: 40,
            c: { x: -100, y: 78, z: -60 },
            r: 40,
          },
          {
            k: "claim",
            label: "Claims \xb7 1.3k",
            n: 130,
            c: { x: 106, y: 70, z: 52 },
            r: 58,
          },
        ],
        l = [
          { n: "SK hynix", x: -158, y: -78, z: 66 },
          { n: "NVIDIA", x: -80, y: -44, z: 62 },
          { n: "GB300", x: 90, y: -56, z: 16 },
          { n: "Order cut", x: 86, y: 58, z: 90 },
          { n: "Channel check", x: -74, y: 88, z: -14 },
        ],
        o = (function () {
          let e;
          let t =
              ((e = 7),
              () => (e = (1664525 * e + 1013904223) % 4294967296) / 4294967296),
            n = [],
            a = [];
          for (let e of i) {
            let s = n.length;
            for (let a = 0; a < e.n; a++) {
              let s = 2 * t() - 1,
                r = t() * Math.PI * 2,
                i = Math.sqrt(1 - s * s),
                l = e.r * Math.pow(t(), 0.7);
              n.push({
                x: e.c.x + l * i * Math.cos(r),
                y: e.c.y + l * s * 0.82,
                z: e.c.z + l * i * Math.sin(r),
                k: e.k,
                hub: a < 4,
              });
            }
            a.push([s, n.length]);
          }
          let s = [];
          return (
            a.forEach((e) => {
              let [t, a] = e;
              for (let e = t; e < a; e++) {
                let r = -1,
                  i = 1 / 0;
                for (let s = t; s < a; s++) {
                  if (s === e) continue;
                  let t = n[e].x - n[s].x,
                    a = n[e].y - n[s].y,
                    l = n[e].z - n[s].z,
                    o = t * t + a * a + l * l;
                  o < i && ((i = o), (r = s));
                }
                s.push([e, r]);
              }
            }),
            {
              nodes: n,
              near: s,
              arcs: [
                [0, 1],
                [0, 2],
                [0, 3],
                [1, 3],
                [2, 3],
                [1, 2],
              ].flatMap((e) => {
                let [n, s] = e;
                return Array.from({ length: 7 }, () => {
                  let [e, r] = a[n],
                    [i, l] = a[s];
                  return [
                    e + Math.floor(t() * (r - e)),
                    i + Math.floor(t() * (l - i)),
                  ];
                });
              }),
            }
          );
        })();
      function c(e) {
        let { className: t = "" } = e,
          n = (0, s.useRef)(null),
          c = (0, s.useRef)(null),
          d = (0, s.useRef)(null),
          [x, h] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          let e = n.current,
            t = c.current,
            a = null == t ? void 0 : t.getContext("2d");
          if (!e || !t || !a) return;
          let s = matchMedia("(prefers-reduced-motion: reduce)").matches,
            x =
              getComputedStyle(document.documentElement)
                .getPropertyValue("--font-mono")
                .trim() || "ui-monospace",
            p = 0,
            m = 0,
            f = -0.5,
            u = -0.22,
            g = null,
            b = !1,
            y = 0,
            j = performance.now(),
            v = j,
            w = () => {
              let n = Math.min(window.devicePixelRatio || 1, 2);
              ((p = e.clientWidth),
                (m = e.clientHeight),
                (t.width = Math.round(p * n)),
                (t.height = Math.round(m * n)),
                a.setTransform(n, 0, 0, n, 0, 0));
            },
            k = (e) => {
              var t;
              let n = Math.cos(f),
                a = Math.sin(f),
                s = Math.cos(u),
                r = Math.sin(u),
                i = e.x * n + e.z * a,
                l = -e.x * a + e.z * n,
                o = e.y * s - l * r,
                c = e.y * r + l * s,
                x = (
                  null === (t = d.current) || void 0 === t
                    ? void 0
                    : t.offsetParent
                )
                  ? d.current.offsetWidth + 20
                  : 0,
                h = p - x,
                g = Math.min(h / 420, m / 330),
                b = 520 / (520 - c);
              return { x: h / 2 + i * b * g, y: m / 2 + o * b * g, z: c, f: b };
            },
            N = (e) => Math.max(0, Math.min(1, (e + 140) / 280)),
            M = (e) => {
              a.clearRect(0, 0, p, m);
              let t = o.nodes.map(k);
              for (let [e, n] of ((a.lineWidth = 0.7), o.arcs)) {
                let s = o.nodes[e],
                  r = o.nodes[n],
                  i = k({
                    x: (s.x + r.x) * 0.3,
                    y: (s.y + r.y) * 0.3,
                    z: (s.z + r.z) * 0.3,
                  }),
                  l = t[e],
                  c = t[n];
                ((a.strokeStyle = "rgba(170,190,230,".concat(
                  0.05 + 0.1 * N((l.z + c.z) / 2),
                  ")",
                )),
                  a.beginPath(),
                  a.moveTo(l.x, l.y),
                  a.quadraticCurveTo(i.x, i.y, c.x, c.y),
                  a.stroke());
              }
              for (let [e, n] of o.near) {
                let s = t[e],
                  i = t[n],
                  [l, c, d] = r[o.nodes[e].k];
                ((a.strokeStyle = "rgba("
                  .concat(l, ",")
                  .concat(c, ",")
                  .concat(d, ",")
                  .concat(0.08 + 0.22 * N((s.z + i.z) / 2), ")")),
                  a.beginPath(),
                  a.moveTo(s.x, s.y),
                  a.lineTo(i.x, i.y),
                  a.stroke());
              }
              for (let e of t
                .map((e, t) => t)
                .sort((e, n) => t[e].z - t[n].z)) {
                let n = t[e],
                  s = o.nodes[e],
                  i = N(n.z),
                  [l, c, d] = r[s.k];
                ((a.fillStyle = "rgba("
                  .concat(l, ",")
                  .concat(c, ",")
                  .concat(d, ",")
                  .concat(0.25 + 0.7 * i, ")")),
                  a.beginPath(),
                  a.arc(
                    n.x,
                    n.y,
                    (s.hub ? 2.6 : 1.3) * n.f * (0.7 + 0.5 * i),
                    0,
                    2 * Math.PI,
                  ),
                  a.fill());
              }
              for (let e of ((a.font = "10px ".concat(x)),
              (a.textAlign = "center"),
              i)) {
                let t = k({
                  ...e.c,
                  y: e.c.y + Math.sign(e.c.y) * (0.9 * e.r + 12),
                });
                ((a.fillStyle = "rgba(154,163,181,".concat(
                  0.45 + 0.5 * N(t.z),
                  ")",
                )),
                  a.fillText(e.label.toUpperCase(), t.x, t.y));
              }
              let n = l.map(k);
              if (
                ((a.lineJoin = "round"),
                (a.strokeStyle = "rgba(233,234,238,0.16)"),
                (a.lineWidth = 4),
                a.beginPath(),
                n.forEach((e, t) =>
                  t ? a.lineTo(e.x, e.y) : a.moveTo(e.x, e.y),
                ),
                a.stroke(),
                (a.strokeStyle = "rgba(233,234,238,0.85)"),
                (a.lineWidth = 1.3),
                a.stroke(),
                !s)
              ) {
                let t = n
                    .slice(1)
                    .map((e, t) => Math.hypot(e.x - n[t].x, e.y - n[t].y)),
                  s = t.reduce((e, t) => e + t, 0),
                  r = (((e - v) / 3e3) % 1) * s,
                  i = 0;
                for (; i < t.length - 1 && r > t[i];) r -= t[i++];
                let l = r / (t[i] || 1),
                  o = n[i].x + (n[i + 1].x - n[i].x) * l,
                  c = n[i].y + (n[i + 1].y - n[i].y) * l,
                  d = a.createRadialGradient(o, c, 0, o, c, 10);
                (d.addColorStop(0, "rgba(255,255,255,0.9)"),
                  d.addColorStop(1, "rgba(255,255,255,0)"),
                  (a.fillStyle = d),
                  a.beginPath(),
                  a.arc(o, c, 10, 0, 2 * Math.PI),
                  a.fill());
              }
              let c = d.current;
              if (c && c.offsetParent) {
                let e = n[3],
                  t = c.offsetWidth,
                  s = c.offsetHeight,
                  r = p - t - 12,
                  i = Math.max(12, Math.min(m - s - 12, e.y - 22));
                ((c.style.transform = "translate("
                  .concat(r.toFixed(1), "px, ")
                  .concat(i.toFixed(1), "px)")),
                  (a.strokeStyle = "rgba(95,211,154,0.55)"),
                  (a.lineWidth = 1),
                  a.setLineDash([3, 3]),
                  a.beginPath(),
                  a.moveTo(e.x + 6, e.y),
                  a.bezierCurveTo(
                    (e.x + r) / 2,
                    e.y,
                    (e.x + r) / 2,
                    i + 14,
                    r,
                    i + 14,
                  ),
                  a.stroke(),
                  a.setLineDash([]));
              }
              ((a.font = "12px system-ui, -apple-system, sans-serif"),
                (a.textAlign = "left"),
                n.forEach((t, n) => {
                  let r = 3 === n;
                  if (r && !s) {
                    let n = ((e - v) % 1800) / 1800;
                    ((a.strokeStyle = "rgba(95,211,154,".concat(
                      0.6 * (1 - n),
                      ")",
                    )),
                      (a.lineWidth = 1.2),
                      a.beginPath(),
                      a.arc(t.x, t.y, 6 + 12 * n, 0, 2 * Math.PI),
                      a.stroke());
                  }
                  ((a.fillStyle = "#0b1220"),
                    (a.strokeStyle = r ? "#5fd39a" : "#e9eaee"),
                    (a.lineWidth = 1.4),
                    a.beginPath(),
                    a.arc(t.x, t.y, 5, 0, 2 * Math.PI),
                    a.fill(),
                    a.stroke(),
                    (a.fillStyle = "#e9eaee"),
                    a.fillText(l[n].n, t.x + 9, t.y - 7));
                }));
            },
            _ = (e) => {
              let t = Math.min(64, e - j);
              ((j = e),
                g || s || (f += 125e-6 * t),
                M(e),
                (y = b && !s ? requestAnimationFrame(_) : 0));
            },
            S = () => {
              y ||
                !b ||
                s ||
                ((j = performance.now()), (y = requestAnimationFrame(_)));
            };
          (w(), M(performance.now()));
          let P = new ResizeObserver(() => {
            (w(), h(p < 520), M(performance.now()));
          });
          P.observe(e);
          let z = new IntersectionObserver((e) => {
            let [t] = e;
            (b = t.isIntersecting && !document.hidden) && S();
          });
          z.observe(e);
          let E = () => {
            ((b = !document.hidden && b), document.hidden || S());
          };
          document.addEventListener("visibilitychange", E);
          let R = (e) => {
              ((g = { x: e.clientX, y: e.clientY, yaw: f, pitch: u }),
                t.setPointerCapture(e.pointerId));
            },
            C = (e) => {
              g &&
                ((f = g.yaw + (e.clientX - g.x) * 0.008),
                (u = Math.max(
                  -0.9,
                  Math.min(0.5, g.pitch + (e.clientY - g.y) * 0.004),
                )),
                s && M(performance.now()));
            },
            I = () => {
              g = null;
            };
          return (
            t.addEventListener("pointerdown", R),
            t.addEventListener("pointermove", C),
            t.addEventListener("pointerup", I),
            t.addEventListener("pointercancel", I),
            (v = performance.now()),
            () => {
              (cancelAnimationFrame(y),
                P.disconnect(),
                z.disconnect(),
                document.removeEventListener("visibilitychange", E),
                t.removeEventListener("pointerdown", R),
                t.removeEventListener("pointermove", C),
                t.removeEventListener("pointerup", I),
                t.removeEventListener("pointercancel", I));
            }
          );
        }, []);
        let p = (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("p", {
              className: "flex items-center justify-between gap-2",
              children: [
                (0, a.jsx)("span", {
                  className: "font-display text-[14px]",
                  children: "Order cut",
                }),
                (0, a.jsx)("span", {
                  className:
                    "rounded-full bg-[#e7f3ec] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#1f7a4d]",
                  children: "Claim",
                }),
              ],
            }),
            (0, a.jsx)("dl", {
              className: "mt-1.5 grid gap-0.5 text-[11px]",
              children: [
                ["Source", "Channel check"],
                ["About", "GB300"],
                ["Links", "7"],
              ].map((e) => {
                let [t, n] = e;
                return (0, a.jsxs)(
                  "div",
                  {
                    className: "flex justify-between gap-3",
                    children: [
                      (0, a.jsx)("dt", {
                        className: "text-[#5b5f68]",
                        children: t,
                      }),
                      (0, a.jsx)("dd", {
                        className: "m-0 whitespace-nowrap text-right",
                        children: n,
                      }),
                    ],
                  },
                  t,
                );
              }),
            }),
          ],
        });
        return (0, a.jsxs)("figure", {
          className: "m-0 ".concat(t),
          children: [
            (0, a.jsx)("figcaption", {
              className: "sr-only",
              children:
                "A map of a firm’s documents in 3D: regions of companies, products, documents and claims, linked within and between them. One claim, an order cut, is traced from SK hynix and NVIDIA through the GB300 to the channel check that states it.",
            }),
            (0, a.jsxs)("div", {
              ref: n,
              "aria-hidden": !0,
              className: "relative aspect-[16/10] w-full",
              children: [
                (0, a.jsx)("canvas", {
                  ref: c,
                  className:
                    "absolute inset-0 h-full w-full cursor-grab touch-pan-y active:cursor-grabbing",
                }),
                (0, a.jsx)("div", {
                  ref: d,
                  className:
                    "absolute left-0 top-0 w-[148px] rounded-[8px] border border-[#e6e9ef] bg-[#f7f9fc] px-2.5 py-2 text-[#16181d] shadow-[0_16px_32px_-16px_rgb(0_0_0/0.7)] will-change-transform ".concat(
                      x ? "hidden" : "block",
                    ),
                  children: p,
                }),
              ],
            }),
            (0, a.jsx)("div", {
              "aria-hidden": !0,
              className:
                "mx-3 mb-3 rounded-[8px] border border-[#e6e9ef] bg-[#f7f9fc] p-3 text-[#16181d] ".concat(
                  x ? "block" : "hidden",
                ),
              children: p,
            }),
          ],
        });
      }
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
  const Component = load(56131).default;

  function Specimen() {
    React.useEffect(() => {
      const frame = requestAnimationFrame(() => {
        poster.hidden = true;
      });
      return () => cancelAnimationFrame(frame);
    }, []);
    return JSX.jsx(Component, { className: "w-full p-2" });
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
