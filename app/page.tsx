"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const CREAM = "#faf4e8";
const INK = "#2a1c10";
const INK_SOFT = "#6b5a45";
const SAFFRON = "#f4b233";
const TOMATO = "#e8552d";
const LIME = "#7fae2b";
const PHONE = "(862) 930-3095";
const TEL = "+18629303095";
const ADDR = "58 Main St, City of Orange, NJ 07050";
// Imagery served locally from /public/img (no Pexels hotlinks -- avoids blank tiles when the CDN throttles).
const IMG = { produce: "/img/produce.jpg", counter: "/img/counter.jpg", deli: "/img/deli.jpg", delicase: "/img/delicase.jpg", pastry: "/img/pastry.jpg", bakery: "/img/bakery.jpg" };

export default function Page() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const clock = setInterval(() => setNow(new Date()), 60000);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => clearInterval(clock);
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.95, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } })
      );
    });
    return () => { clearInterval(clock); ctx.revert(); gsap.ticker.remove(ticker); lenis.destroy(); };
  }, []);

  const hour = now?.getHours() ?? 9;
  const dow = now?.getDay() ?? 2;
  const closeHr = dow === 0 ? 20 : 22; // Sun 8 PM, Mon–Sat 10 PM
  const open = hour >= 8 && hour < closeHr;

  return (
    <>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: "blur(10px)",
        background: "rgba(250,244,232,0.8)", borderBottom: "1px solid rgba(42,28,16,0.1)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <a href="#top" className="display" style={{ fontSize: 23, textDecoration: "none", color: INK }}>MAIN ST<span style={{ color: TOMATO }}>.</span></a>
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <span className="mono" style={{ fontSize: 11, color: open ? "#3f8f3f" : INK_SOFT, display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: open ? "#4caf50" : INK_SOFT }} />
              {open ? `Open till ${closeHr - 12} PM` : "Opens 8 AM"}
            </span>
            <a href={`tel:${TEL}`} style={{ textDecoration: "none", background: TOMATO, color: CREAM, padding: "9px 17px", borderRadius: 999, fontSize: 13, fontWeight: 700 }}>Call</a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* HERO — bright daylight market, light & editorial (NOT Sudzy's dark video) */}
        <section className="section" style={{ paddingTop: "clamp(96px,16vw,150px)" }}>
          <div className="wrap">
            <p className="eyebrow reveal" style={{ marginBottom: 18 }}>58 Main St · City of Orange, NJ</p>
            <h1 className="display reveal" style={{ fontSize: "clamp(3.6rem, 19vw, 11rem)", margin: 0, color: INK }}>
              <span style={{ display: "block" }}>Grocery.</span>
              <span style={{ display: "block", color: TOMATO }}>Deli.</span>
              <span style={{ display: "block", color: SAFFRON }}>Pastry.</span>
            </h1>
            <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-end", justifyContent: "space-between", marginTop: 28 }}>
              <p style={{ color: INK_SOFT, fontSize: "clamp(1.05rem,4vw,1.3rem)", maxWidth: 430, lineHeight: 1.5, margin: 0 }}>
                Your whole list, one stop on Main Street. Open early, open late, <strong style={{ color: INK }}>seven days a week.</strong>
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={`tel:${TEL}`} style={{ textDecoration: "none", background: INK, color: CREAM, padding: "14px 26px", borderRadius: 999, fontWeight: 700, fontSize: 15 }}>Call the store</a>
                <a href="#find" style={{ textDecoration: "none", border: `1.5px solid ${INK}`, color: INK, padding: "14px 26px", borderRadius: 999, fontWeight: 600, fontSize: 15 }}>Find us</a>
              </div>
            </div>
          </div>
          {/* abundance triptych */}
          <div className="wrap reveal" style={{ marginTop: "clamp(34px,6vw,60px)" }}>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1.4fr 1fr 1fr", height: "clamp(220px,42vw,400px)" }}>
              <div className="shot" style={{ borderRadius: 16 }}><img src={IMG.produce} alt="Fresh produce on display" /></div>
              <div className="shot" style={{ borderRadius: 16 }}><img src={IMG.delicase} alt="Deli counter case" /></div>
              <div className="shot" style={{ borderRadius: 16 }}><img src={IMG.bakery} alt="Fresh croissants and pastries" /></div>
            </div>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="section" style={{ background: "var(--cream-2)", paddingTop: "clamp(56px,10vw,110px)" }}>
          <div className="wrap">
            <h2 className="grote reveal" style={{ fontSize: "clamp(1.8rem,6vw,2.8rem)", margin: "0 0 44px", maxWidth: "14ch" }}>
              Three counters. One quick stop on the way home.
            </h2>
            <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}>
              {[
                { img: IMG.counter, n: "Grocery", d: "Pantry staples, cold drinks, snacks and household basics. The corner you don't have to drive to.", c: LIME },
                { img: IMG.deli, n: "Deli", d: "The deli counter. Sandwiches made to order when you're moving fast.", c: TOMATO },
                { img: IMG.pastry, n: "Pastry", d: "The bakery case. Fresh bread and pastry, in early.", c: SAFFRON },
              ].map((p, i) => (
                <div key={p.n} className="reveal" style={{ borderRadius: 18, overflow: "hidden", background: CREAM, border: "1px solid rgba(42,28,16,0.08)" }}>
                  <div className="shot" style={{ aspectRatio: "16/11" }}><img src={p.img} alt={p.n} loading="lazy" /></div>
                  <div style={{ padding: "22px 22px 26px" }}>
                    <h3 className="display" style={{ fontSize: 30, margin: "0 0 10px", color: INK }}>
                      {p.n}<span style={{ color: p.c }}>.</span>
                    </h3>
                    <p style={{ color: INK_SOFT, lineHeight: 1.55, fontSize: 15, margin: 0 }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONE STOP — bold statement band + bespoke MAIN ST. receipt */}
        <section style={{ background: SAFFRON, padding: "clamp(64px,11vw,130px) 0" }}>
          <div className="wrap" style={{ display: "grid", gap: 44, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))", alignItems: "center" }}>
            <div>
              <p className="eyebrow reveal" style={{ color: INK, marginBottom: 16 }}>The "1" in your day</p>
              <h2 className="display reveal" style={{ fontSize: "clamp(2.4rem,9vw,5.2rem)", margin: 0, color: INK, maxWidth: "13ch" }}>
                Everything on the list. <span style={{ color: CREAM }}>One stop.</span>
              </h2>
              <p className="reveal" style={{ color: INK, opacity: 0.82, fontSize: "clamp(1rem,4vw,1.2rem)", maxWidth: 460, marginTop: 22, lineHeight: 1.55 }}>
                Grocery, deli and bakery under one roof, right on Main Street. Run in, grab what you need, get on with your day.
              </p>
            </div>
            <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
              <div className="mono" style={{ width: "min(284px, 86%)", background: CREAM, color: INK, padding: "22px 22px 26px", boxShadow: "0 22px 54px -16px rgba(42,28,16,0.4)", transform: "rotate(-2.2deg)", fontSize: 12, lineHeight: 1.95 }}>
                <div className="display" style={{ fontSize: 23, textAlign: "center", letterSpacing: "0.01em", marginBottom: 2 }}>MAIN ST.</div>
                <div style={{ textAlign: "center", letterSpacing: "0.22em", fontSize: 9, color: "rgba(42,28,16,0.55)", marginBottom: 14 }}>GROCERY · DELI · PASTRY</div>
                <div style={{ borderTop: "1px dashed rgba(42,28,16,0.3)", paddingTop: 12 }}>
                  {[["Fresh produce", "daily"], ["Deli sandwich", "made to order"], ["Bread & pastry", "baked in"], ["Drinks & basics", "always"]].map(([a, b]) => (
                    <div key={a} style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><span>{a}</span><span style={{ color: "rgba(42,28,16,0.55)" }}>{b}</span></div>
                  ))}
                </div>
                <div style={{ borderTop: "1px dashed rgba(42,28,16,0.3)", marginTop: 12, paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
                  <span>OPEN 7 DAYS</span><span>6 AM – 10 PM</span>
                </div>
                <div style={{ textAlign: "center", letterSpacing: "0.16em", fontSize: 9, color: "rgba(42,28,16,0.55)", marginTop: 14 }}>· THANK YOU · 58 MAIN ST ·</div>
              </div>
            </div>
          </div>
        </section>

        {/* FIND US */}
        <section id="find" className="section">
          <div className="wrap" style={{ display: "grid", gap: 32, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,300px),1fr))", alignItems: "center" }}>
            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: 14 }}>Find us</p>
              <h2 className="display" style={{ fontSize: "clamp(2.4rem,8vw,3.6rem)", margin: "0 0 18px", color: INK }}>On Main Street,<br />City of Orange.</h2>
              <p style={{ color: INK_SOFT, lineHeight: 1.7, margin: "0 0 4px" }}>Mon – Sat · 8 AM – 10 PM</p>
              <p style={{ color: INK_SOFT, lineHeight: 1.7, margin: "0 0 24px" }}>Sunday · 8 AM – 8 PM</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={`tel:${TEL}`} style={{ textDecoration: "none", background: TOMATO, color: CREAM, padding: "14px 24px", borderRadius: 999, fontWeight: 700 }}>Call {PHONE}</a>
                <a href={`https://www.google.com/maps?q=${encodeURIComponent(ADDR)}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none", border: `1.5px solid ${INK}`, color: INK, padding: "14px 24px", borderRadius: 999, fontWeight: 600 }}>Directions</a>
              </div>
            </div>
            <div className="reveal shot" style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(42,28,16,0.12)", aspectRatio: "4/3" }}>
              <iframe title={`Main Street Grocery — ${ADDR}`} width="100%" height="100%" loading="lazy" style={{ border: 0, display: "block" }}
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDR)}&z=15&output=embed`} referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: `1px solid rgba(42,28,16,0.12)`, padding: "52px 0 44px", background: "var(--cream-2)" }}>
          <div className="wrap">
            <div className="display" style={{ fontSize: "clamp(2.6rem,12vw,6rem)", color: INK, lineHeight: 0.85 }}>
              MAIN ST<span style={{ color: TOMATO }}>.</span> <span style={{ color: SAFFRON }}>GROCERY</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "space-between", alignItems: "flex-end", marginTop: 26 }}>
              <p style={{ color: INK_SOFT, margin: 0, lineHeight: 1.7, fontSize: 14 }}>{ADDR}<br />{PHONE} · Open 7 days</p>
              <a href="https://bysemaj.com" target="_blank" rel="noreferrer" className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: INK_SOFT, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: TOMATO }} />built bysemaj.com
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
