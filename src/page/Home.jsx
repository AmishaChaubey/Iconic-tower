import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronRight, ArrowRight, ChevronLeft, ChevronDown,
  Building2, Building, Home, Paintbrush, Leaf, KeyRound,
  CheckCircle2, Phone, Mail, MapPin, Clock, Star,
  Facebook, Instagram, Twitter, Linkedin,
  Trophy, Users, Calendar, Award, Quote,
  ArrowDown, Send, Eye, Target,
  Layers, Maximize2, Ruler, Sparkles, TrendingUp, IndianRupee,
  BedDouble, Bath, Wind, LayoutGrid, ChevronUp,
} from "lucide-react";

const G = "#d0ab69";
const GL = "#e8cfa0";
const GD = "#b8924e";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body { font-family: 'Poppins', sans-serif; background: #fff; color: #1a1a1a; overflow-x: hidden; }
.pf { font-family: 'Playfair Display', serif; }
img { max-width: 100%; display: block; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  transition: all .35s ease; padding: 14px 0;
  background: transparent;
}
.nav.sc {
  background: rgba(255,255,255,.98);
  box-shadow: 0 2px 30px rgba(0,0,0,.08);
  padding: 8px 0;
}
.navInner {
  display: flex; align-items: center; justify-content: space-between;
  max-width: 1200px; margin: 0 auto; padding: 0 20px;
  gap: 16px;
}
.navLinks {
  display: flex; gap: 1.5rem; align-items: center; flex-wrap: nowrap;
}
.nl {
  color: rgba(255,255,255,.88); text-decoration: none;
  font-size: .82rem; font-weight: 500;
  transition: color .2s; position: relative; white-space: nowrap;
}
.nl::after {
  content: ''; position: absolute; bottom: -3px; left: 0;
  width: 0; height: 2px; background: ${G}; transition: width .2s;
}
.nl:hover { color: ${G}; }
.nl:hover::after { width: 100%; }
.nav.sc .nl { color: #1a1a1a; }
.nav.sc .nl:hover { color: ${G}; }
.navCta {
  padding: 9px 18px; border-radius: 6px; font-size: .8rem;
  white-space: nowrap; flex-shrink: 0;
}

/* ── HAMBURGER ── */
.menuToggle {
  display: none;
  background: none; border: none; cursor: pointer;
  padding: 8px; border-radius: 8px;
  transition: background .2s;
  align-items: center; justify-content: center;
  color: #fff; flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.menuToggle:hover { background: rgba(255,255,255,.12); }
.nav.sc .menuToggle { color: #1a1a1a; }
.nav.sc .menuToggle:hover { background: rgba(0,0,0,.06); }

/* ── MOBILE OVERLAY ── */
.mOverlay {
  position: fixed; inset: 0; background: rgba(0,0,0,.5);
  z-index: 1000; opacity: 0; pointer-events: none;
  transition: opacity .3s ease;
}
.mOverlay.open { opacity: 1; pointer-events: all; }

/* ── MOBILE DRAWER ── */
.mDrawer {
  position: fixed; top: 0; right: 0; bottom: 0;
  width: min(300px, 82vw);
  background: #fff; z-index: 1001;
  display: flex; flex-direction: column;
  transform: translateX(100%);
  transition: transform .35s cubic-bezier(.25,.46,.45,.94);
  box-shadow: -20px 0 60px rgba(0,0,0,.18);
  overflow: hidden;
}
.mDrawer.open { transform: translateX(0); }
.mDrawerHead {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 20px; border-bottom: 1px solid #f0e8d8;
  flex-shrink: 0;
}
.mDrawerBody {
  flex: 1; overflow-y: auto; padding: 6px 0;
  -webkit-overflow-scrolling: touch;
}
.mNavLink {
  display: flex; align-items: center; justify-content: space-between;
  padding: 15px 20px; text-decoration: none; color: #1a1a1a;
  font-size: .92rem; font-weight: 600;
  transition: all .2s; border-left: 3px solid transparent;
  -webkit-tap-highlight-color: transparent;
}
.mNavLink:hover, .mNavLink:active {
  color: ${G}; background: rgba(208,171,105,.06);
  border-left-color: ${G};
}
.mDrawerFoot {
  padding: 16px 20px; border-top: 1px solid #f0e8d8;
  display: flex; flex-direction: column; gap: 10px; flex-shrink: 0;
}
.mContact {
  display: flex; align-items: center; gap: 10px;
  font-size: .78rem; color: #888;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
@keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
@keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:.6; } }

.aFU { animation: fadeUp .8s ease forwards; opacity: 0; }
.d1 { animation-delay: .15s; } .d2 { animation-delay: .3s; } .d3 { animation-delay: .5s; } .d4 { animation-delay: .7s; }
.gs {
  background: linear-gradient(90deg,${G},${GL},${G},${GD},${G});
  background-size: 200% auto;
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

/* ── BUTTONS ── */
.btnG {
  background: ${G}; color: #fff; font-family: 'Poppins',sans-serif;
  font-weight: 600; letter-spacing: .05em; border: none; cursor: pointer;
  transition: all .3s; display: inline-flex; align-items: center; gap: 8px;
  text-decoration: none; -webkit-tap-highlight-color: transparent;
}
.btnG:hover { background: ${GD}; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(208,171,105,.4); }
.btnO {
  background: transparent; color: ${G}; border: 2px solid ${G};
  font-family: 'Poppins',sans-serif; font-weight: 600; cursor: pointer;
  transition: all .3s; display: inline-flex; align-items: center; gap: 8px;
  text-decoration: none; -webkit-tap-highlight-color: transparent;
}
.btnO:hover { background: ${G}; color: #fff; transform: translateY(-2px); }
.btnW {
  background: #fff; color: #1a1a1a; font-family: 'Poppins',sans-serif;
  font-weight: 600; letter-spacing: .05em; border: none; cursor: pointer;
  transition: all .3s; display: inline-flex; align-items: center; gap: 8px;
  text-decoration: none; -webkit-tap-highlight-color: transparent;
}
.btnW:hover { background: ${G}; color: #fff; transform: translateY(-2px); }

/* ── HELPERS ── */
.gDiv { width: 60px; height: 3px; background: linear-gradient(90deg,${G},${GL}); border-radius: 2px; }
.iz { overflow: hidden; position: relative; }
.iz img { transition: transform .5s ease; width: 100%; height: 100%; object-fit: cover; display: block; }
.cardH { transition: all .35s; cursor: pointer; }
.cardH:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(208,171,105,.18); }
.cardH:hover .iz img { transform: scale(1.07); }
.sTag { font-size: .72rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: ${G}; }
.svcIcon {
  width: 52px; height: 52px; border-radius: 12px;
  background: linear-gradient(135deg,rgba(208,171,105,.12),rgba(208,171,105,.22));
  border: 1px solid rgba(208,171,105,.3);
  display: flex; align-items: center; justify-content: center;
  transition: all .3s; color: ${G};
}
.cardH:hover .svcIcon { background: ${G}; border-color: ${G}; color: #fff; }

/* ── CONTAINERS ── */
.wrap { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.wrapWide { max-width: 1300px; margin: 0 auto; padding: 0 20px; }
.sec { padding: clamp(48px, 8vw, 96px) 0; }

/* ── HERO ── */
.hero {
  height: 100svh; min-height: 580px;
  position: relative; display: flex; align-items: center; overflow: hidden;
}
.heroContent {
  max-width: 680px; padding: 0 20px;
  position: relative; z-index: 10;
  margin-left: max(20px, calc((100vw - 1280px) / 2 + 20px));
}

/* ── GRIDS — mobile-first ── */
.g2 { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: center; }
.g3 { display: grid; grid-template-columns: 1fr; gap: 20px; }
.g4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.gServ { display: grid; grid-template-columns: 1fr; gap: 22px; }
.gCta { display: grid; grid-template-columns: 1fr; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,.12); }
.footGrid { display: grid; grid-template-columns: 1fr; gap: 28px; }
.formInner { display: grid; grid-template-columns: 1fr; gap: 14px; }
.vmGrid { display: grid; grid-template-columns: 1fr; gap: 24px; }
.miniStats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.amenGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.specGrid { display: grid; grid-template-columns: 1fr; gap: 10px; }
.payGrid { display: grid; grid-template-columns: 1fr; gap: 10px; }
.locGrid { display: grid; grid-template-columns: 1fr; gap: 12px; }
.investGrid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.heroBtns { display: flex; gap: 12px; flex-wrap: wrap; }
.projectHeroBtns { display: flex; gap: 12px; flex-wrap: wrap; }

/* ── TESTIMONIAL ── */
.testiOuter { max-width: 860px; margin: 0 auto; padding: 0 clamp(8px, 4vw, 48px); }
.testiSlider { overflow: hidden; border-radius: 10px; }
.testiNavRow { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 24px; }
.testiBtn {
  background: #fff; border: 2px solid ${G}; color: ${G};
  width: 38px; height: 38px; border-radius: 50%;
  cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,.08);
  transition: all .3s; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  -webkit-tap-highlight-color: transparent;
}
.testiBtn:hover { background: ${G}; color: #fff; }
.testiDots { display: flex; gap: 7px; align-items: center; flex-wrap: wrap; justify-content: center; }

/* ── PROJECT HERO ── */
.projectHeroBadge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(208,171,105,.15); border: 1px solid rgba(208,171,105,.35);
  color: ${G}; padding: 6px 14px; border-radius: 30px;
  font-size: .68rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase;
}
.payStep {
  display: flex; align-items: center; gap: 12px; padding: 13px 14px;
  border-radius: 8px; background: #fafaf8; border: 1px solid rgba(208,171,105,.15);
  transition: all .25s;
}
.payStep:hover { background: rgba(208,171,105,.06); border-color: rgba(208,171,105,.35); }
.payPercent { font-family: 'Playfair Display',serif; font-size: 1.2rem; font-weight: 700; color: ${G}; min-width: 48px; text-align: right; }
.amenItem {
  display: flex; align-items: center; gap: 10px; padding: 11px 12px;
  background: #fff; border: 1px solid rgba(208,171,105,.15); border-radius: 8px; transition: all .3s;
}
.amenItem:hover { border-color: ${G}; background: rgba(208,171,105,.04); transform: translateY(-2px); }
.locBadge {
  display: flex; align-items: center; gap: 10px; padding: 12px 14px;
  background: #fff; border: 1px solid rgba(208,171,105,.2); border-radius: 8px; transition: all .25s;
}
.locBadge:hover { border-color: ${G}; box-shadow: 0 4px 20px rgba(208,171,105,.1); }
.specRow {
  display: flex; align-items: center; gap: 10px; padding: 12px 14px;
  background: #fff; border: 1px solid rgba(208,171,105,.15); border-radius: 8px;
}
.priceBanner {
  background: linear-gradient(135deg,#0a0a0a,#1a1408); border: 1px solid rgba(208,171,105,.25);
  border-radius: 12px; padding: clamp(24px,5vw,48px); text-align: center;
  position: relative; overflow: hidden;
}
.priceBanner::before {
  content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px;
  border-radius: 50%; background: radial-gradient(circle, rgba(208,171,105,.08), transparent 70%);
  pointer-events: none;
}
.investCard {
  background: linear-gradient(135deg,#0a0a0a,#181408); border: 1px solid rgba(208,171,105,.2);
  border-radius: 10px; padding: 24px 20px; text-align: center; transition: all .35s;
}
.investCard:hover { border-color: ${G}; transform: translateY(-6px); box-shadow: 0 20px 50px rgba(208,171,105,.12); }
.fInp {
  width: 100%; padding: 12px 14px; border: 1.5px solid #e8e0d0; border-radius: 6px;
  font-family: 'Poppins',sans-serif; font-size: .875rem; color: #1a1a1a;
  outline: none; transition: border-color .2s; background: #fff;
}
.fInp:focus { border-color: ${G}; }
textarea.fInp { resize: vertical; min-height: 100px; }

/* ══════════════════════════════════════
   RESPONSIVE BREAKPOINTS
══════════════════════════════════════ */

/* ── SMALL MOBILE (≤374px) ── */
@media (max-width: 374px) {
  .wrap, .wrapWide { padding: 0 14px; }
  .miniStats { grid-template-columns: 1fr; }
  .amenGrid { grid-template-columns: 1fr; }
  .g4 { grid-template-columns: 1fr; }
  .heroBtns a { font-size: .82rem; padding: 11px 18px !important; }
  .projectHeroBtns a { font-size: .82rem; padding: 11px 18px !important; }
  .navCta { display: none; }
}

/* ── MOBILE (375px – 639px) ── */
@media (min-width: 375px) and (max-width: 639px) {
  .locGrid { grid-template-columns: 1fr; }
  .specGrid { grid-template-columns: 1fr; }
}

/* ── TABLET (640px – 767px) ── */
@media (min-width: 640px) {
  .g3 { grid-template-columns: repeat(2, 1fr); }
  .gServ { grid-template-columns: repeat(2, 1fr); }
  .formInner { grid-template-columns: repeat(2, 1fr); }
  .locGrid { grid-template-columns: repeat(2, 1fr); }
  .specGrid { grid-template-columns: repeat(2, 1fr); }
  .payGrid { grid-template-columns: repeat(2, 1fr); }
  .investGrid { grid-template-columns: repeat(2, 1fr); }
  .amenGrid { grid-template-columns: repeat(3, 1fr); }
  .heroBtns a { min-width: 160px; }
}

/* ── TABLET LANDSCAPE (768px – 1023px) ── */
@media (min-width: 768px) {
  .g2 { grid-template-columns: repeat(2, 1fr); gap: 48px; }
  .footGrid { grid-template-columns: 2fr 1fr 1fr; gap: 36px; }
  .vmGrid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .gCta { grid-template-columns: repeat(2, 1fr); }
  .miniStats { grid-template-columns: repeat(2, 1fr); }
  .investGrid { grid-template-columns: repeat(3, 1fr); }
}

/* ── DESKTOP (1024px+) ── */
@media (min-width: 1024px) {
  .navLinks { display: flex !important; }
  .menuToggle { display: none !important; }
  .g2 { gap: 64px; }
  .g3 { grid-template-columns: repeat(3, 1fr); }
  .gServ { grid-template-columns: repeat(3, 1fr); }
  .g4 { grid-template-columns: repeat(4, 1fr); }
  .payGrid { grid-template-columns: repeat(2, 1fr); }
  .heroContent {
    margin-left: max(20px, calc((100vw - 1280px) / 2 + 20px));
    max-width: 680px;
    padding: 0 20px;
  }
}

/* ── BELOW DESKTOP — show hamburger ── */
@media (max-width: 1023px) {
  .navLinks { display: none !important; }
  .menuToggle { display: flex !important; }
  .heroContent { margin-left: 0 !important; max-width: 100% !important; padding: 0 20px !important; }
  .navCta { display: none; }
}

/* ── WIDE DESKTOP (1280px+) ── */
@media (min-width: 1280px) {
  .g2 { gap: 80px; }
  .formInner { grid-template-columns: repeat(2, 1fr); }
}
`;

const NAV_LINKS = ["Home","About","Project","Services","Blog","Contact"];

const SERVICES = [
  { Icon: Building2, img: "/img/img1.jpg", title: "Architectural Design", desc: "Visionary designs blending aesthetics with structural integrity, creating iconic landmarks for generations." },
  { Icon: Building, img: "/img/img2.jpeg", title: "Commercial Properties", desc: "Premium office spaces and commercial complexes engineered to elevate business performance and ROI." },
  { Icon: Home, img: "/img/img3.jpg", title: "Luxury Residences", desc: "Exquisite residential towers offering unparalleled comfort, privacy, and breathtaking panoramic views." },
  { Icon: Paintbrush, img: "/img/img4.jpeg", title: "Interior Design", desc: "Bespoke interiors crafted by world-class designers to reflect your unique vision and lifestyle." },
  { Icon: Leaf, img: "/img/img5.jpg", title: "Sustainable Building", desc: "Eco-conscious construction reducing environmental impact without ever compromising on luxury." },
  { Icon: KeyRound, img: "/img/img6.jpg", title: "Property Management", desc: "Comprehensive services ensuring your investment remains pristine, occupied, and highly profitable." },
];

const BLOGS = [
  { img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80", tag: "Design Trends", date: "Feb 18, 2026", title: "The Future of Vertical Living in Noida: Skyscrapers in 2030", desc: "Noida's skyline is rapidly evolving with modern high-rise developments along the Expressway and Sector 150." },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80", tag: "Real Estate", date: "Feb 10, 2026", title: "Why Location Matters Most in Noida Property Investment", desc: "In Noida's fast-growing market, location remains the biggest factor in property appreciation." },
  { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80", tag: "Sustainability", date: "Jan 28, 2026", title: "Green Buildings in Noida: Luxury Meets Sustainability", desc: "Noida's leading developers are adopting eco-friendly construction practices and green-certified designs." },
  { img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80", tag: "Architecture", date: "Jan 15, 2026", title: "Designing Premium High-Rise Living in Noida", desc: "Architectural innovation is shaping Noida's modern skyline with glass façade towers and smart home integration." },
  { img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", tag: "Investment", date: "Jan 5, 2026", title: "Noida's Real Estate Boom: Where to Invest in 2026", desc: "Noida's property market is expanding rapidly due to metro expansion, IT parks, and Jewar International Airport." },
  { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80", tag: "Lifestyle", date: "Dec 22, 2025", title: "Luxury Lifestyle Living in Noida's Modern Towers", desc: "From sky lounges and infinity pools to smart security systems, Noida's premium towers offer a complete lifestyle upgrade." },
];

const TESTIMONIALS = [
  { name: "Arjun Mehta", role: "CEO, Mehta Group", img: "/img/a.jpeg", text: "Iconic Tower transformed our vision into a breathtaking reality. The attention to detail and craftsmanship is absolutely unmatched. We are thrilled beyond words with our new headquarters." },
  { name: "Priya Sharma", role: "Homeowner, Tower 7", img: "/img/p.jpeg", text: "Living in an Iconic Tower residence is a dream come true. The quality of construction, design finesse, and premium amenities have exceeded every expectation I had." },
  { name: "Vikram Singh", role: "Director, Singh Ventures", img: "/img/v.jpeg", text: "The team delivers exactly what they promise. From concept to completion, every step was handled with professionalism and complete transparency. Highly recommended." },
  { name: "Meera Kapoor", role: "Architect & Blogger", img: "/img/m.jpeg", text: "As an architect myself, I deeply appreciate the level of craft and thought that goes into every Iconic Tower project. Truly a benchmark for the entire industry." },
  { name: "Rahul Joshi", role: "Investor, Joshi Capital", img: "/img/r.jpeg", text: "My investment in an Iconic Tower property has delivered outstanding returns. The brand value alone adds a significant premium. A truly wise and rewarding decision." },
  { name: "Sunita Rao", role: "Resident, Iconic Heights", img: "/img/s.jpeg", text: "From the moment I walked into the showroom, I knew this was exceptional. The handover experience was seamless and the quality is beyond five-star. Absolutely love my home." },
];

const STATS = [
  { Icon: Trophy, n: "350+", l: "Projects Completed" },
  { Icon: Users, n: "25K+", l: "Happy Families" },
  { Icon: Calendar, n: "10+", l: "Years Experience" },
  { Icon: Award, n: "18", l: "Awards Won" },
];

const WHY = [
  "10+ Years of Real Estate Excellence",
  "Award-Winning Architectural Designs",
  "LEED-Certified Sustainable Construction",
  "Transparent Pricing, No Hidden Costs",
  "Dedicated Post-Handover Support Team",
  "Premium Strategic Location Selections",
];

const SOCIAL = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
];

const PAYMENT_PLAN = [
  { pct: "10%", label: "On Booking" },
  { pct: "5%", label: "Within 60 Days" },
  { pct: "5%", label: "Within 90 Days" },
  { pct: "10%", label: "Within 120 Days" },
  { pct: "7.5%", label: "On Completion of 5th Floor" },
  { pct: "7.5%", label: "On Completion of 10th Floor" },
  { pct: "7.5%", label: "On Completion of 15th Floor" },
  { pct: "7.5%", label: "On Completion of 20th Floor" },
  { pct: "7.5%", label: "On Completion of 25th Floor" },
  { pct: "7.5%", label: "On Completion of 30th Floor" },
  { pct: "7.5%", label: "On Super Structure Completion" },
  { pct: "7.5%", label: "On MEP / Flooring / Finishing" },
  { pct: "5%", label: "On External Paint" },
  { pct: "5%", label: "On Possession Intimation" },
];

const SPECS = [
  "Two-Side Open Living & Dining",
  "270° Open Views",
  "12 Ft Floor-to-Ceiling Height",
  "Expansive Balconies",
  "Dedicated Study Room",
  "Private Corner Balcony in Master Bedroom",
  "Premium Italian Marble Flooring",
  "Laminated Wooden Bedrooms",
  "Modular Kitchen with Quartz Counter",
  "UPVC Windows & Premium Finishes",
];

const AMENITIES = [
  "Grand Drop-Off & Triple Height Lobby",
  "Swimming Pool & Kids' Pool",
  "Jogging Track & Landscaped Gardens",
  "Box Cricket Arena",
  "Lawn Tennis Court",
  "Half Basketball Court",
  "Yoga, Zumba & Aerobics Studio",
  "Gaming Lounge & Indoor Games",
  "Library & Reading Lounge",
  "Banquet Lawn & Amphitheatre",
  "Kids' Play Zone & Toddler Area",
  "Pet Park & Reflexology Pathway",
];

const LOCATION_POINTS = [
  "2 KM from Gaur Chowk",
  "Close to NH-24",
  "Near Noida–Greater Noida Expressway",
  "7–8 KM from Metro Stations",
  "2 KM from Leading Schools",
  "2 KM from Premium Malls",
  "2 KM from Multi-Speciality Hospital",
  "High Appreciation Potential",
];

const INVEST_REASONS = [
  { Icon: Layers, title: "45 Storey Landmark", desc: "One of the tallest towers in Greater Noida West" },
  { Icon: Maximize2, title: "Largest 4 BHK", desc: "Biggest floor layouts in the entire micro-market" },
  { Icon: TrendingUp, title: "Strong ROI", desc: "High rental yield & capital appreciation scope" },
  { Icon: Sparkles, title: "Premium Township", desc: "Part of expansive 24-acre integrated development" },
  { Icon: Home, title: "End-Use & Investment", desc: "Ideal for own living or investment portfolio" },
  { Icon: IndianRupee, title: "Flexible Payment", desc: "Convenient construction-linked payment plan" },
];

function StarRow() {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => <Star key={i} size={15} fill={G} color={G} />)}
    </div>
  );
}

export default function IconicTower() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogIdx, setBlogIdx] = useState(0);
  const [testiIdx, setTestiIdx] = useState(0);
  const [statsVis, setStatsVis] = useState(false);
  const [payOpen, setPayOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Select your interest", msg: "" });
  const statsRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVis(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBlogIdx(p => (p + 1) % BLOGS.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestiIdx(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  const visBlogs = () => [0, 1, 2].map(i => BLOGS[(blogIdx + i) % BLOGS.length]);
  const inp = (f) => ({
    className: "fInp",
    value: form[f],
    onChange: (e) => setForm({ ...form, [f]: e.target.value })
  });

  return (
    <div>
      <style>{css}</style>

      {/* ── NAVBAR ── */}
      <nav className={`nav${scrolled ? " sc" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="navInner">
          <a href="#home" style={{ textDecoration: "none", lineHeight: 0, flexShrink: 0 }} aria-label="Iconic Tower Home">
            <img style={{ width: 48, height: 48, objectFit: "contain" }} src="/img/Iconic logo.png" alt="Iconic Tower" />
          </a>

          {/* Desktop nav links */}
          <div className="navLinks" role="menubar">
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nl" role="menuitem">{l}</a>
            ))}
            <a href="#contact" className="btnG navCta" style={{ borderRadius: 6 }}>
              Get In Touch <ArrowRight size={13} />
            </a>
          </div>

          {/* Hamburger — visible on tablet/mobile only */}
          <button
            className="menuToggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobileDrawer"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`mOverlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── MOBILE DRAWER ── */}
      <div
        id="mobileDrawer"
        className={`mDrawer${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mDrawerHead">
          <img style={{ width: 46, height: 46, objectFit: "contain" }} src="/img/Iconic logo.png" alt="Iconic Tower" />
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#1a1a1a", padding: 8, borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
            }}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mDrawerBody" role="menu">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="mNavLink"
              role="menuitem"
              onClick={() => setMenuOpen(false)}
            >
              {l}
              <ChevronRight size={14} style={{ color: "#ccc", flexShrink: 0 }} />
            </a>
          ))}
        </div>

        <div className="mDrawerFoot">
          <a
            href="#contact"
            className="btnG"
            style={{ padding: "13px 20px", borderRadius: 6, justifyContent: "center", fontSize: ".88rem" }}
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch <ArrowRight size={15} />
          </a>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
            <div className="mContact">
              <Phone size={13} color={G} style={{ flexShrink: 0 }} />
              <span>+91 9999999999</span>
            </div>
            <div className="mContact">
              <Mail size={13} color={G} style={{ flexShrink: 0 }} />
              <span>hello@iconictower.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <img
          src="/img/banner2.webp"
          alt="Iconic Tower"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.25) 100%)" }} />
        <div className="heroContent">
          <h1
            className="pf aFU d1"
            style={{ fontSize: "clamp(1.8rem,6vw,4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 18 }}
          >
            Where Architecture<br />
            <span className="gs">Meets Aspiration</span>
          </h1>
          <p
            className="aFU d2"
            style={{ fontSize: "clamp(.88rem, 2vw, 1.05rem)", color: "rgba(255,255,255,.76)", lineHeight: 1.9, maxWidth: 520, marginBottom: 28 }}
          >
            Iconic Tower crafts extraordinary spaces that inspire, endure, and elevate every horizon they grace. Premium real estate, redefined for those who demand the best.
          </p>
          <div className="aFU d3 heroBtns">
            <a href="#project" className="btnG" style={{ padding: "13px 26px", borderRadius: 6, fontSize: ".9rem" }}>
              Explore Project <ChevronRight size={16} />
            </a>
            <a href="#about" className="btnO" style={{ padding: "13px 26px", borderRadius: 6, fontSize: ".9rem" }}>
              Our Story <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="sec" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="g2">
            <div style={{ position: "relative" }}>
              <div className="iz" style={{ borderRadius: 10, height: "clamp(280px,45vw,560px)" }}>
                <img src="https://i.pinimg.com/1200x/73/7a/cc/737accdfde9f5d7479f5b67a1ade8719.jpg" alt="About Iconic Tower" style={{ borderRadius: 10 }} />
              </div>
              <div style={{ position: "absolute", top: -14, left: -14, width: 70, height: 70, border: `2px solid ${G}28`, borderRadius: 6, zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: -14, right: -14, width: 52, height: 52, background: `${G}12`, borderRadius: 6, zIndex: -1 }} />
            </div>
            <div>
              <div className="sTag" style={{ marginBottom: 12 }}>About Iconic Tower</div>
              <h2
                className="pf"
                style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, lineHeight: 1.2, color: "#1a1a1a", marginBottom: 18 }}
              >
                Building Dreams,<br /><span style={{ color: G }}>Crafting Legacies</span>
              </h2>
              <div className="gDiv" style={{ marginBottom: 20 }} />
              <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", lineHeight: 1.95, color: "#555", marginBottom: 14 }}>
                For over three decades, Iconic Tower has stood at the forefront of real estate innovation. We don't merely build structures — we create enduring icons that define city skylines and enrich entire communities.
              </p>
              <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", lineHeight: 1.95, color: "#555", marginBottom: 28 }}>
                Our philosophy is rooted in the belief that exceptional spaces transform lives. From conceptual design to final handover, every project reflects our unwavering commitment to quality and integrity.
              </p>
              <div className="miniStats" style={{ marginBottom: 32 }}>
                {STATS.map(({ Icon: Ic, n, l }, i) => (
                  <div
                    key={i}
                    style={{ padding: "14px 12px", background: "#fafaf8", borderRadius: 8, border: `1px solid ${G}20`, display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${G}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Ic size={17} color={G} />
                    </div>
                    <div>
                      <div className="pf" style={{ fontSize: "1.3rem", fontWeight: 700, color: G, lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: ".68rem", color: "#888", fontWeight: 500, marginTop: 2 }}>{l}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#project" className="btnG" style={{ padding: "12px 28px", borderRadius: 6, fontSize: ".88rem" }}>
                View Our Project <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT SECTION ── */}
      <div id="project">

        {/* ── PROJECT HERO BANNER ── */}
        <section style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85"
            alt="Iconic Tower Project"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(0,0,0,.92) 0%,rgba(5,5,5,.78) 55%,rgba(0,0,0,.4) 100%)" }} />

          <div className="wrap" style={{ position: "relative", zIndex: 10, width: "100%", padding: "clamp(80px,10vw,120px) 20px clamp(56px,8vw,90px)" }}>
            <div style={{ maxWidth: 680 }}>
              <div className="projectHeroBadge" style={{ marginBottom: 20 }}>
                <MapPin size={11} />
                Noida Extension · Greater Noida West
              </div>
              <h2
                className="pf"
                style={{ fontSize: "clamp(1.8rem,6vw,4.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.06, marginBottom: 16 }}
              >
                The Address That<br />
                <span className="gs">Redefines the Skyline</span>
              </h2>
              <div className="gDiv" style={{ marginBottom: 22 }} />
              <p
                style={{ fontSize: "clamp(.88rem,1.5vw,1.05rem)", color: "rgba(255,255,255,.72)", lineHeight: 1.9, maxWidth: 540, marginBottom: 32 }}
              >
                Rising 45 storeys above the evolving landscape of Greater Noida West — designed for families who demand more.
              </p>
              <div style={{ display: "flex", gap: "clamp(18px,4vw,36px)", flexWrap: "wrap", marginBottom: 32 }}>
                {[
                  { n: "45", l: "Storeys" },
                  { n: "4 BHK", l: "+ Study" },
                  { n: "24", l: "Acres Township" },
                ].map(({ n, l }, i) => (
                  <div key={i}>
                    <div className="pf" style={{ fontSize: "clamp(1.4rem,4vw,2.6rem)", fontWeight: 900, color: G, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: ".7rem", color: "rgba(255,255,255,.5)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div className="projectHeroBtns">
                <a href="#contact" className="btnG" style={{ padding: "13px 28px", borderRadius: 6, fontSize: ".9rem" }}>
                  Enquire Now <ArrowRight size={15} />
                </a>
                <a href="#contact" className="btnO" style={{ padding: "13px 28px", borderRadius: 6, fontSize: ".9rem" }}>
                  Download Brochure <ArrowDown size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICE & CONFIGURATION ── */}
        <section className="sec" style={{ background: "#0a0a0a" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="sTag" style={{ marginBottom: 12 }}>Investment</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#fff" }}>
                Price & <span style={{ color: G }}>Configuration</span>
              </h2>
              <div className="gDiv" style={{ margin: "16px auto 0" }} />
            </div>

            <div className="g2">
              <div
                style={{ background: "linear-gradient(135deg,#111,#181408)", border: `1px solid ${G}25`, borderRadius: 12, padding: "clamp(24px,5vw,44px)", position: "relative", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", top: -30, right: -30, width: 130, height: 130, borderRadius: "50%", background: `radial-gradient(circle, ${G}12, transparent 70%)`, pointerEvents: "none" }} />
                <div className="sTag" style={{ marginBottom: 14 }}>Configuration</div>
                <h3 className="pf" style={{ fontSize: "clamp(1.2rem,3vw,1.9rem)", fontWeight: 800, color: "#fff", marginBottom: 8 }}>4 BHK + Study + 4T</h3>
                <p style={{ fontSize: ".88rem", color: "rgba(255,255,255,.45)", marginBottom: 24 }}>Super Spacious Luxury Layout</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                  {[
                    { Icon: BedDouble, label: "4 Bedrooms" },
                    { Icon: Bath, label: "4 Toilets" },
                    { Icon: LayoutGrid, label: "Study Room" },
                    { Icon: Wind, label: "Open Views" },
                  ].map(({ Icon: Ic, label }, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, background: `${G}12`, border: `1px solid ${G}25`, borderRadius: 8, padding: "7px 12px" }}>
                      <Ic size={13} color={G} />
                      <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,.7)", fontWeight: 500 }}>{label}</span>
                    </div>
                  ))}
                </div>
                {[
                  "Flexible Construction Linked Payment Plan",
                  "Attractive Pre-Launch / Early Buyer Benefits",
                  "Limited Inventory Available",
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <CheckCircle2 size={15} color={G} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: ".83rem", color: "rgba(255,255,255,.6)" }}>{t}</span>
                  </div>
                ))}
              </div>

              <div className="priceBanner">
                <div className="sTag" style={{ color: GL, marginBottom: 12 }}>Starting Price</div>
                <div className="pf" style={{ fontSize: "clamp(1.8rem,6vw,3.8rem)", fontWeight: 900, color: G, lineHeight: 1, marginBottom: 6 }}>
                  ₹X.XX Cr
                </div>
                <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.35)", marginBottom: 28 }}>Onwards* · Pre-Launch Pricing</p>
                <div style={{ background: `${G}15`, border: `1px solid ${G}30`, borderRadius: 8, padding: "14px 18px", marginBottom: 22, textAlign: "left" }}>
                  <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.5)", marginBottom: 6 }}>This investment includes:</p>
                  {["Latest Price Sheet on Request","Exclusive Floor Plan Access","Site Visit Appointment"].map((t,i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap: 8, marginTop: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: G, flexShrink: 0 }} />
                      <span style={{ fontSize: ".8rem", color: "rgba(255,255,255,.65)" }}>{t}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btnG" style={{ width: "100%", justifyContent: "center", padding: "13px", borderRadius: 8, fontSize: ".92rem" }}>
                  Get Best Price <ArrowRight size={15} />
                </a>
                <a href="#contact" className="btnO" style={{ width: "100%", justifyContent: "center", padding: "12px", borderRadius: 8, fontSize: ".88rem", marginTop: 10 }}>
                  Schedule Site Visit <MapPin size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAYMENT PLAN ── */}
        <section className="sec" style={{ background: "#fafaf8" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="sTag" style={{ marginBottom: 12 }}>Structured for Confidence</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a" }}>
                Payment <span style={{ color: G }}>Plan</span>
              </h2>
              <div className="gDiv" style={{ margin: "16px auto 10px" }} />
              <p style={{ fontSize: ".88rem", color: "#888" }}>Construction Linked · Convenient & Transparent</p>
            </div>

            <div className="payGrid">
              {(payOpen ? PAYMENT_PLAN : PAYMENT_PLAN.slice(0, 6)).map(({ pct, label }, i) => (
                <div key={i} className="payStep">
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: `${G}15`, border: `1px solid ${G}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: ".62rem", fontWeight: 700, color: G }}>{i + 1}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: ".8rem", color: "#555" }}>{label}</span>
                  </div>
                  <div className="payPercent">{pct}</div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 22 }}>
              <button
                onClick={() => setPayOpen(p => !p)}
                className="btnO"
                style={{ padding: "10px 28px", borderRadius: 6, fontSize: ".83rem" }}
              >
                {payOpen ? "Show Less" : `View All ${PAYMENT_PLAN.length} Steps`}
                {payOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>
        </section>

        {/* ── RESIDENCE SPECIFICATIONS ── */}
        <section className="sec" style={{ background: "#fff" }}>
          <div className="wrap">
            <div className="g2" style={{ gap: "clamp(32px,6vw,56px)" }}>
              <div>
                <div className="sTag" style={{ marginBottom: 12 }}>Interiors & Finishes</div>
                <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, marginBottom: 18 }}>
                  Residences Designed<br /><span style={{ color: G }}>for Grandeur</span>
                </h2>
                <div className="gDiv" style={{ marginBottom: 20 }} />
                <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                  Natural light. Cross ventilation. Unmatched openness. Every detail is crafted to deliver an elevated living experience.
                </p>
                <div className="specGrid">
                  {SPECS.map((s, i) => (
                    <div key={i} className="specRow">
                      <CheckCircle2 size={16} color={G} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: ".83rem", color: "#444", fontWeight: 500 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="iz" style={{ borderRadius: 10, height: "clamp(260px,42vw,540px)" }}>
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Luxury Interior" style={{ borderRadius: 10 }} />
                </div>
                <div style={{ position: "absolute", bottom: 18, left: -16, background: "linear-gradient(135deg,#0a0a0a,#181408)", border: `1px solid ${G}30`, borderRadius: 10, padding: "12px 18px", boxShadow: `0 12px 40px rgba(0,0,0,.25)` }}>
                  <div className="pf" style={{ fontSize: "1.3rem", fontWeight: 700, color: G }}>12 Ft</div>
                  <div style={{ fontSize: ".66rem", color: "rgba(255,255,255,.5)", letterSpacing: ".08em" }}>CEILING HEIGHT</div>
                </div>
                <div style={{ position: "absolute", top: 18, right: -12, background: "#fff", border: `1px solid ${G}20`, borderRadius: 10, padding: "12px 18px", boxShadow: "0 8px 30px rgba(0,0,0,.08)" }}>
                  <div className="pf" style={{ fontSize: "1.3rem", fontWeight: 700, color: G }}>270°</div>
                  <div style={{ fontSize: ".66rem", color: "#888", letterSpacing: ".08em" }}>OPEN VIEWS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AMENITIES ── */}
        <section className="sec" style={{ background: "#fafaf8" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="sTag" style={{ marginBottom: 12 }}>A Curated Ecosystem</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a" }}>
                Lifestyle Beyond <span style={{ color: G }}>Expectations</span>
              </h2>
              <div className="gDiv" style={{ margin: "16px auto 12px" }} />
              <p style={{ fontSize: ".88rem", color: "#888", maxWidth: 460, margin: "0 auto" }}>Luxury here is not added. It is integrated.</p>
            </div>
            <div className="amenGrid">
              {AMENITIES.map((a, i) => (
                <div key={i} className="amenItem">
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: G, flexShrink: 0 }} />
                  <span style={{ fontSize: ".82rem", color: "#444", fontWeight: 500 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="sec" style={{ background: "#fff" }}>
          <div className="wrap">
            <div className="g2" style={{ gap: "clamp(32px,6vw,56px)" }}>
              <div>
                <div className="sTag" style={{ marginBottom: 12 }}>Prime Location</div>
                <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, marginBottom: 18 }}>
                  Location <span style={{ color: G }}>Advantage</span>
                </h2>
                <div className="gDiv" style={{ marginBottom: 20 }} />
                <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                  Strategically positioned in Greater Noida West with seamless connectivity, future-ready infrastructure, and high appreciation potential.
                </p>
                <div className="locGrid">
                  {LOCATION_POINTS.map((l, i) => (
                    <div key={i} className="locBadge">
                      <MapPin size={14} color={G} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: ".8rem", color: "#444", fontWeight: 500 }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderRadius: 10, overflow: "hidden", border: `2px solid ${G}20`, boxShadow: "0 16px 60px rgba(0,0,0,.08)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3414880842183!2d77.43110949999999!3d28.589530600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff6ef2459c5%3A0x4cdf16a9ad1bd4ef!2sAU!5e0!3m2!1sen!2sin!4v1772027669158!5m2!1sen!2sin"
                  width="100%" height="380" style={{ border: 0, display: "block" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Iconic Tower Project Location"
                />
                <div style={{ background: "#fafaf8", padding: "12px 18px", display: "flex", alignItems: "center", gap: 9 }}>
                  <MapPin size={13} color={G} />
                  <span style={{ fontSize: ".8rem", color: "#666", fontWeight: 500 }}>Noida Extension · Greater Noida West, UP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY INVEST ── */}
        <section className="sec" style={{ background: "linear-gradient(135deg,#060606,#140e04)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="sTag" style={{ marginBottom: 12 }}>Make the Right Move</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#fff" }}>
                Why Invest <span style={{ color: G }}>Here?</span>
              </h2>
              <div className="gDiv" style={{ margin: "16px auto 0" }} />
            </div>
            <div className="investGrid">
              {INVEST_REASONS.map(({ Icon: Ic, title, desc }, i) => (
                <div key={i} className="investCard">
                  <div style={{ width: 50, height: 50, borderRadius: 12, background: `${G}18`, border: `1px solid ${G}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <Ic size={20} color={G} />
                  </div>
                  <h4 className="pf" style={{ fontSize: ".95rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{title}</h4>
                  <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.45)", lineHeight: 1.8 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECT CTA STRIP ── */}
        <section style={{ background: `linear-gradient(90deg, ${GD}, ${G}, ${GL})`, padding: "clamp(32px,6vw,56px) 0" }}>
          <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.7)", letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>Own a home that defines presence</p>
              <h3 className="pf" style={{ fontSize: "clamp(1.2rem,3vw,2rem)", fontWeight: 800, color: "#fff" }}>
                Book Your Private Viewing Today
              </h3>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" className="btnW" style={{ padding: "13px 28px", borderRadius: 6, fontSize: ".88rem" }}>
                Schedule Site Visit <ArrowRight size={15} />
              </a>
              <a href="tel:+919999999999" className="btnW" style={{ padding: "13px 28px", borderRadius: 6, fontSize: ".88rem" }}>
                <Phone size={14} /> Call Now
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="sec" style={{ background: "#fafaf8" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="sTag" style={{ marginBottom: 12 }}>What We Offer</div>
            <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: 12 }}>
              Our Premium <span style={{ color: G }}>Services</span>
            </h2>
            <div className="gDiv" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", color: "#777", maxWidth: 520, margin: "0 auto", lineHeight: 1.85 }}>
              From concept to completion, comprehensive real estate solutions tailored to your vision.
            </p>
          </div>
          <div className="gServ">
            {SERVICES.map(({ Icon: Ic, img, title, desc }, i) => (
              <div key={i} className="cardH" style={{ background: "#fff", borderRadius: 10, overflow: "hidden", border: `1px solid ${G}18` }}>
                <div className="iz" style={{ height: "clamp(160px,25vw,200px)" }}>
                  <img src={img} alt={title} />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <div className="svcIcon" style={{ marginBottom: 12 }}><Ic size={21} /></div>
                  <h3 className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: ".85rem", color: "#777", lineHeight: 1.85 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="sec" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="g2">
            <div>
              <div className="sTag" style={{ marginBottom: 12 }}>Why Choose Us</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: 18, lineHeight: 1.2 }}>
                The Standard Others<br /><span style={{ color: G }}>Aspire To Reach</span>
              </h2>
              <div className="gDiv" style={{ marginBottom: 20 }} />
              <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", color: "#666", lineHeight: 1.9, marginBottom: 28 }}>
                Our legacy of excellence is built on consistent delivery, transparent practices, and unwavering commitment to client satisfaction at every milestone.
              </p>
              {WHY.map((w, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 13 }}>
                  <CheckCircle2 size={19} color={G} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: ".92rem", color: "#444", fontWeight: 500 }}>{w}</span>
                </div>
              ))}
            </div>
            <div style={{ position: "relative" }}>
              <div className="iz" style={{ borderRadius: 10, height: "clamp(260px,42vw,540px)" }}>
                <img src="/img/img7.jpg" alt="Why Choose Us" style={{ borderRadius: 10 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{ padding: "clamp(48px,8vw,84px) 0", background: "linear-gradient(135deg,#0a0a0a,#1c1c1c)" }}>
        <div className="wrap">
          <div className="g4">
            {STATS.map(({ Icon: Ic, n, l }, i) => (
              <div
                key={i}
                style={{ textAlign: "center", animation: statsVis ? `countUp .7s ease forwards ${i * 0.15}s` : "none", opacity: 0 }}
              >
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${G}18`, border: `1px solid ${G}35`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 13px" }}>
                  <Ic size={22} color={G} />
                </div>
                <div className="pf" style={{ fontSize: "clamp(1.6rem,4vw,3.2rem)", fontWeight: 700, color: G, lineHeight: 1 }}>{n}</div>
                <div className="gDiv" style={{ margin: "10px auto" }} />
                <div style={{ fontSize: ".83rem", color: "rgba(255,255,255,.6)", fontWeight: 500, letterSpacing: ".04em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="sec" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="sTag" style={{ marginBottom: 12 }}>Our Foundation</div>
            <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a" }}>
              Vision & <span style={{ color: G }}>Mission</span>
            </h2>
            <div className="gDiv" style={{ margin: "16px auto 0" }} />
          </div>
          <div className="vmGrid">
            <div style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${G}18` }}>
              <div className="iz" style={{ height: 200, position: "relative" }}>
                <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=700&q=80" alt="Vision" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)" }} />
                <div style={{ position: "absolute", bottom: 18, left: 22, display: "flex", alignItems: "center", gap: 10 }}>
                  <Eye size={18} color={G} />
                  <span className="pf" style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>Our <span style={{ color: G }}>Vision</span></span>
                </div>
              </div>
              <div style={{ background: "linear-gradient(135deg,#0a0a0a,#1c1c1c)", padding: "28px 28px 36px" }}>
                <div style={{ width: 40, height: 2, background: G, marginBottom: 16 }} />
                <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", color: "rgba(255,255,255,.7)", lineHeight: 1.95, marginBottom: 12 }}>
                  To be the most trusted and celebrated real estate developer across Asia — synonymous with architectural brilliance, sustainable innovation, and transformative urban experiences.
                </p>
                <p style={{ fontSize: ".88rem", color: "rgba(255,255,255,.4)", lineHeight: 1.9 }}>
                  Every project becomes a landmark — a source of community pride and testament to human ambition.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${G}30` }}>
              <div className="iz" style={{ height: 200, position: "relative" }}>
                <img src="https://images.pexels.com/photos/8582991/pexels-photo-8582991.jpeg" alt="Mission" />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom,rgba(0,0,0,.2),rgba(208,171,105,.28))` }} />
                <div style={{ position: "absolute", bottom: 18, left: 22, display: "flex", alignItems: "center", gap: 10 }}>
                  <Target size={18} color={GL} />
                  <span className="pf" style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>Our <span style={{ color: GL }}>Mission</span></span>
                </div>
              </div>
              <div style={{ background: `linear-gradient(135deg,${G}10,${G}05)`, padding: "28px 28px 36px" }}>
                <div style={{ width: 40, height: 2, background: G, marginBottom: 16 }} />
                <p style={{ fontSize: "clamp(.88rem,1.5vw,1rem)", color: "#555", lineHeight: 1.95, marginBottom: 12 }}>
                  To design, develop, and deliver exceptional real estate by combining world-class craftsmanship with cutting-edge technology — creating spaces where people thrive and communities flourish.
                </p>
                <p style={{ fontSize: ".88rem", color: "#888", lineHeight: 1.9 }}>
                  We commit to ethical practices, environmental responsibility, and client-centric service in every venture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="sec" style={{ background: "#fafaf8" }}>
        <div style={{ textAlign: "center", marginBottom: 48, padding: "0 20px" }}>
          <div className="sTag" style={{ marginBottom: 12 }}>Client Stories</div>
          <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a" }}>
            What Our <span style={{ color: G }}>Clients Say</span>
          </h2>
          <div className="gDiv" style={{ margin: "16px auto 0" }} />
        </div>

        <div className="testiOuter">
          <div className="testiSlider">
            <div style={{ display: "flex", transition: "transform .65s cubic-bezier(.25,.46,.45,.94)", transform: `translateX(-${testiIdx * 100}%)` }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ minWidth: "100%", padding: "0 2px" }}>
                  <div style={{
                    background: "#fff", borderRadius: 12,
                    padding: "clamp(22px,5vw,46px) clamp(18px,5vw,42px)",
                    border: `1px solid ${G}18`,
                    boxShadow: "0 16px 60px rgba(0,0,0,.06)",
                    textAlign: "center",
                  }}>
                    <Quote size={32} color={G} style={{ opacity: 0.12, display: "block", margin: "0 auto 10px" }} />
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><StarRow /></div>
                    <p className="pf" style={{ fontSize: "clamp(.88rem,2vw,1.05rem)", color: "#333", lineHeight: 1.95, fontStyle: "italic", marginBottom: 24 }}>"{t.text}"</p>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", margin: "0 auto 10px", border: `3px solid ${G}` }}>
                      <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="pf" style={{ fontSize: ".95rem", fontWeight: 700, color: "#1a1a1a" }}>{t.name}</div>
                    <div style={{ fontSize: ".8rem", color: G, fontWeight: 500, marginTop: 3 }}>{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testiNavRow">
            <div className="testiDots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestiIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === testiIdx ? 24 : 9, height: 9,
                    borderRadius: 5, border: "none", cursor: "pointer",
                    background: i === testiIdx ? G : "#ddd",
                    transition: "all .3s", padding: 0,
                    WebkitTapHighlightColor: "transparent",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="sec" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 18 }}>
            <div>
              <div className="sTag" style={{ marginBottom: 12 }}>Latest Insights</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", fontWeight: 700, color: "#1a1a1a" }}>
                From Our <span style={{ color: G }}>Blog</span>
              </h2>
              <div className="gDiv" style={{ marginTop: 12 }} />
            </div>
          </div>
          <div className="g3">
            {visBlogs().map((b, i) => (
              <div key={`${blogIdx}-${i}`} className="cardH" style={{ background: "#fff", borderRadius: 10, overflow: "hidden", border: `1px solid ${G}18`, animation: "fadeUp .55s ease forwards", animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="iz" style={{ height: "clamp(160px,25vw,200px)" }}>
                  <img src={b.img} alt={b.title} />
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10, flexWrap: "wrap" }}>
                    <span style={{ fontSize: ".64rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: G, background: `${G}15`, padding: "3px 10px", borderRadius: 20 }}>{b.tag}</span>
                    <span style={{ fontSize: ".76rem", color: "#bbb" }}>{b.date}</span>
                  </div>
                  <h3 className="pf" style={{ fontSize: ".95rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 8, lineHeight: 1.45 }}>{b.title}</h3>
                  <p style={{ fontSize: ".83rem", color: "#777", lineHeight: 1.85 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32, flexWrap: "wrap" }}>
            {BLOGS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBlogIdx(i)}
                aria-label={`Blog page ${i + 1}`}
                style={{ width: i === blogIdx ? 26 : 9, height: 9, borderRadius: 5, border: "none", cursor: "pointer", background: i === blogIdx ? G : "#ddd", transition: "all .3s", WebkitTapHighlightColor: "transparent" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="sec" style={{ background: "#fafaf8" }}>
        <div className="wrapWide">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="sTag" style={{ marginBottom: 12 }}>✦ Start Your Journey ✦</div>
            <h2 className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.8rem)", fontWeight: 800, color: "#1a1a1a" }}>
              Ready to Build Your <span style={{ color: G }}>Dream Space?</span>
            </h2>
            <div className="gDiv" style={{ margin: "16px auto 0" }} />
          </div>
          <div className="gCta">
            {/* Left panel — info */}
            <div style={{ position: "relative", minHeight: "clamp(360px,55vw,640px)" }}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85"
                alt="CTA"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg,rgba(0,0,0,.78),rgba(30,20,8,.62))" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(24px,5vw,48px) clamp(20px,5vw,44px)" }}>
                <div className="sTag" style={{ color: GL, marginBottom: 12 }}>Get In Touch</div>
                <h3 className="pf" style={{ fontSize: "clamp(1.1rem,2.8vw,2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 16 }}>
                  Let's Create Something <span style={{ color: G }}>Extraordinary</span>
                </h3>
                <p style={{ fontSize: ".88rem", color: "rgba(255,255,255,.68)", lineHeight: 1.9, marginBottom: 24 }}>
                  Schedule a consultation and let our experts guide you from vision to landmark reality.
                </p>
                {[
                  { Icon: Phone, t: "+91 9999999999" },
                  { Icon: Mail, t: "hello@iconictower.com" },
                  { Icon: MapPin, t: "Bisrakh, Noida, UP" },
                  // { Icon: Clock, t: "Mon–Sat: 9 AM – 6 PM" },
                ].map(({ Icon: Ic, t }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 11 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: `${G}28`, border: `1px solid ${G}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Ic size={14} color={G} />
                    </div>
                    <span style={{ fontSize: ".85rem", color: "rgba(255,255,255,.82)", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel — form */}
            <div style={{ background: "#fff", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "clamp(24px,5vw,44px) clamp(18px,5vw,40px) 22px", flex: 1 }}>
                <h4 className="pf" style={{ fontSize: "1.35rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 5 }}>Send Us a Message</h4>
                <p style={{ fontSize: ".8rem", color: "#aaa", marginBottom: 22 }}>Our team will respond within 24 hours.</p>
                <div className="formInner" style={{ marginBottom: 13 }}>
                  <div>
                    <label style={{ display: "block", fontSize: ".73rem", fontWeight: 600, color: "#555", marginBottom: 5, letterSpacing: ".03em" }}>Full Name *</label>
                    <input {...inp("name")} placeholder="Your full name" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: ".73rem", fontWeight: 600, color: "#555", marginBottom: 5, letterSpacing: ".03em" }}>Email *</label>
                    <input {...inp("email")} type="email" placeholder="you@email.com" />
                  </div>
                </div>
                <div style={{ marginBottom: 13 }}>
                  <label style={{ display: "block", fontSize: ".73rem", fontWeight: 600, color: "#555", marginBottom: 5, letterSpacing: ".03em" }}>Phone Number</label>
                  <input {...inp("phone")} placeholder="+91 00000 00000" />
                </div>
                <div style={{ marginBottom: 13 }}>
                  <label style={{ display: "block", fontSize: ".73rem", fontWeight: 600, color: "#555", marginBottom: 5, letterSpacing: ".03em" }}>Area of Interest</label>
                  <select className="fInp" value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })} style={{ appearance: "none", cursor: "pointer" }}>
                    {["Select your interest","Iconic Tower – 4 BHK","Luxury Residence","Commercial Property","Architectural Design","Interior Design","Property Management","Investment Advisory"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: ".73rem", fontWeight: 600, color: "#555", marginBottom: 5, letterSpacing: ".03em" }}>Message</label>
                  <textarea {...inp("msg")} placeholder="Tell us about your dream project..." />
                </div>
                <button
                  className="btnG"
                  style={{ width: "100%", padding: "13px", borderRadius: 6, fontSize: ".95rem", justifyContent: "center" }}
                  onClick={() => alert("Thank you! We'll be in touch within 24 hours. 🏗️")}
                >
                  Send Message <Send size={15} />
                </button>
              </div>
              <div style={{ padding: "0 clamp(18px,5vw,40px) clamp(22px,5vw,40px)" }}>
                <div style={{ borderRadius: 8, overflow: "hidden", border: `2px solid ${G}20` }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3414880842183!2d77.43110949999999!3d28.589530600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff6ef2459c5%3A0x4cdf16a9ad1bd4ef!2sAU!5e0!3m2!1sen!2sin!4v1772027669158!5m2!1sen!2sin"
                    width="100%" height="170" style={{ border: 0, display: "block" }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="Iconic Tower Location"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 9 }}>
                  <MapPin size={12} color={G} />
                  <p style={{ fontSize: ".73rem", color: "#bbb" }}>Iconic Tower, Noida, UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", padding: "clamp(44px,7vw,68px) 0 24px" }}>
        <div className="wrap">
          <div className="footGrid" style={{ marginBottom: 44 }}>
            <div>
              <div style={{ marginBottom: 16 }}>
                <img style={{ width: 90, height: 90, objectFit: "contain" }} src="/img/Iconic logo.png" alt="Iconic Tower" />
              </div>
              <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.35)", lineHeight: 1.8, marginBottom: 18, maxWidth: 260 }}>
                Crafting iconic real estate landmarks that define skylines and enrich communities across India.
              </p>
              <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                {SOCIAL.map(({ Icon: Ic, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    style={{ width: 34, height: 34, borderRadius: "50%", border: `1px solid ${G}40`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: G, transition: "all .3s", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = G; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = G; e.currentTarget.style.borderColor = `${G}40`; }}
                  >
                    <Ic size={14} />
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Services", links: ["Architectural Design","Commercial Properties","Luxury Residences","Property Management","Interior Design"] },
              { title: "Contact", links: ["+91 9999999999","hello@iconictower.com","Noida, UP","Mon–Sat: 9am–6pm"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="pf" style={{ fontSize: ".95rem", fontWeight: 700, color: "#fff", marginBottom: 16 }}>{col.title}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {col.links.map((l, j) => (
                    <a
                      key={j}
                      href="#"
                      style={{ fontSize: ".83rem", color: "rgba(255,255,255,.38)", textDecoration: "none", transition: "color .2s" }}
                      onMouseEnter={e => e.target.style.color = G}
                      onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.38)"}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: ".75rem", color: "rgba(255,255,255,.2)", margin: 0 }}>© 2026 Iconic Tower. All rights reserved.</p>
            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              {["Privacy Policy","Terms","Cookies"].map((l, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ fontSize: ".75rem", color: "rgba(255,255,255,.2)", textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = G}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.2)"}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}