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

function Logo({ size = 44, light = false }) {
  return (
    <svg width={size * 2.6} height={size} viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="8" width="22" height="36" rx="1.5" fill={G} />
      <rect x="4" y="4" width="14" height="6" rx="1" fill={GD} />
      <rect x="7" y="1" width="8" height="5" rx="1" fill={G} />
      {[12,20,28].map(y => [3,9,15].map(x => (
        <rect key={`${x}-${y}`} x={x} y={y} width="4" height="4" rx=".5" fill="rgba(255,255,255,0.7)" />
      )))}
      <rect x="8" y="36" width="6" height="8" rx=".5" fill={light ? "rgba(255,255,255,0.5)" : "#fff"} />
      <text x="28" y="24" fontFamily="'Playfair Display', serif" fontWeight="700" fontSize="15" fill={G} letterSpacing=".5">ICONIC</text>
      <text x="28" y="38" fontFamily="'Poppins', sans-serif" fontWeight="600" fontSize="10" fill={light ? "rgba(255,255,255,0.9)" : "#1a1a1a"} letterSpacing="3">TOWER</text>
    </svg>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body { font-family: 'Poppins', sans-serif; background: #fff; color: #1a1a1a; overflow-x: hidden; }
.pf { font-family: 'Playfair Display', serif; }
img { max-width: 100%; display: block; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 999;
  transition: all .35s; padding: 14px 0;
}
.nav.sc {
  background: rgba(255,255,255,.98);
  box-shadow: 0 2px 30px rgba(0,0,0,.08);
  padding: 8px 0;
}
.navInner {
  display: flex; align-items: center; justify-content: space-between;
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
}
.navLinks {
  display: flex; gap: 1.8rem; align-items: center;
}
.nl {
  color: rgba(255,255,255,.88); text-decoration: none;
  font-size: .875rem; font-weight: 500;
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
  padding: 10px 22px; border-radius: 6px; font-size: .85rem;
  white-space: nowrap; flex-shrink: 0;
}
.menuToggle {
  display: none; background: none; border: none; cursor: pointer;
  padding: 6px; border-radius: 6px; transition: background .2s;
  align-items: center; justify-content: center;
  color: #fff;
}
.menuToggle:hover { background: rgba(255,255,255,.1); }
.nav.sc .menuToggle { color: #1a1a1a; }
.nav.sc .menuToggle:hover { background: rgba(0,0,0,.06); }

/* ── MOBILE MENU OVERLAY ── */
.mOverlay {
  position: fixed; inset: 0; background: rgba(0,0,0,.4);
  z-index: 998; opacity: 0; pointer-events: none;
  transition: opacity .35s;
}
.mOverlay.open { opacity: 1; pointer-events: all; }

/* ── MOBILE DRAWER ── */
.mDrawer {
  position: fixed; top: 0; right: 0; bottom: 0;
  width: min(320px, 85vw);
  background: #fff; z-index: 1000;
  display: flex; flex-direction: column;
  transform: translateX(100%);
  transition: transform .38s cubic-bezier(.25,.46,.45,.94);
  box-shadow: -20px 0 60px rgba(0,0,0,.15);
}
.mDrawer.open { transform: translateX(0); }
.mDrawerHead {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px; border-bottom: 1px solid #f0e8d8;
}
.mDrawerBody {
  flex: 1; overflow-y: auto; padding: 8px 0;
}
.mNavLink {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 24px; text-decoration: none; color: #1a1a1a;
  font-size: .95rem; font-weight: 600; font-family: 'Poppins', sans-serif;
  transition: all .2s; border-left: 3px solid transparent;
}
.mNavLink:hover {
  color: ${G}; background: rgba(208,171,105,.06);
  border-left-color: ${G};
}
.mNavLink span { font-size: .7rem; color: #ccc; }
.mDrawerFoot {
  padding: 20px 24px; border-top: 1px solid #f0e8d8;
  display: flex; flex-direction: column; gap: 10px;
}
.mContact {
  display: flex; align-items: center; gap: 10px;
  font-size: .8rem; color: #888;
}

/* ── HERO ── */
.hero { height: 100svh; min-height: 600px; position: relative; display: flex; align-items: center; overflow: hidden; }
.heroContent { max-width: 680px; padding: 0 24px; position: relative; z-index: 10; margin-left: max(24px, calc((100vw - 1280px) / 2 + 24px)); }

/* ── ANIMATIONS ── */
@keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
@keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
@keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:.6; } }
@keyframes slideInLeft { from { opacity:0; transform: translateX(-30px); } to { opacity:1; transform: translateX(0); } }
@keyframes drawerFade { from { opacity:0; } to { opacity:1; } }

.aFU { animation: fadeUp .8s ease forwards; opacity: 0; }
.aFI { animation: fadeIn 1s ease forwards; opacity: 0; }
.d1 { animation-delay: .15s; } .d2 { animation-delay: .3s; } .d3 { animation-delay: .5s; } .d4 { animation-delay: .7s; }

.gs { background: linear-gradient(90deg,${G},${GL},${G},${GD},${G}); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }

/* ── BUTTONS ── */
.btnG { background: ${G}; color: #fff; font-family: 'Poppins',sans-serif; font-weight: 600; letter-spacing: .05em; border: none; cursor: pointer; transition: all .3s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
.btnG:hover { background: ${GD}; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(208,171,105,.4); }
.btnO { background: transparent; color: ${G}; border: 2px solid ${G}; font-family: 'Poppins',sans-serif; font-weight: 600; cursor: pointer; transition: all .3s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
.btnO:hover { background: ${G}; color: #fff; transform: translateY(-2px); }
.btnW { background: #fff; color: #1a1a1a; font-family: 'Poppins',sans-serif; font-weight: 600; letter-spacing: .05em; border: none; cursor: pointer; transition: all .3s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
.btnW:hover { background: ${G}; color: #fff; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,.2); }

/* ── DIVIDER ── */
.gDiv { width: 60px; height: 3px; background: linear-gradient(90deg,${G},${GL}); border-radius: 2px; }

/* ── IMAGE ZOOM ── */
.iz { overflow: hidden; position: relative; }
.iz img { transition: transform .5s ease; width: 100%; height: 100%; object-fit: cover; display: block; }
.cardH { transition: all .35s; cursor: pointer; }
.cardH:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(208,171,105,.18); }
.cardH:hover .iz img { transform: scale(1.07); }

/* ── SCROLL INDICATOR ── */
.scrollInd { position: absolute; bottom: 32px; left: max(24px, calc((100vw - 1280px) / 2 + 24px)); display: flex; flex-direction: column; align-items: flex-start; gap: 8px; animation: floatY 2.2s ease-in-out infinite; z-index: 10; }

/* ── SLIDER ── */
.slTrack { display: flex; transition: transform .65s cubic-bezier(.25,.46,.45,.94); }

/* ── FORM ── */
.fInp { width: 100%; padding: 13px 16px; border: 1.5px solid #e8e0d0; border-radius: 6px; font-family: 'Poppins',sans-serif; font-size: .875rem; color: #1a1a1a; outline: none; transition: border-color .2s; background: #fff; }
.fInp:focus { border-color: ${G}; }
textarea.fInp { resize: vertical; min-height: 110px; }

/* ── SECTION TAG ── */
.sTag { font-size: .72rem; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: ${G}; }

/* ── ICON BOX ── */
.svcIcon { width: 52px; height: 52px; border-radius: 12px; background: linear-gradient(135deg,rgba(208,171,105,.12),rgba(208,171,105,.22)); border: 1px solid rgba(208,171,105,.3); display: flex; align-items: center; justify-content: center; transition: all .3s; color: ${G}; }
.cardH:hover .svcIcon { background: ${G}; border-color: ${G}; color: #fff; }

/* ── CONTAINER ── */
.wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.wrapWide { max-width: 1300px; margin: 0 auto; padding: 0 24px; }

/* ── SECTION PADDING ── */
.sec { padding: clamp(56px, 8vw, 100px) 0; }

/* ── GRIDS ── */
.g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.g3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.g4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
.gServ { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.gCta { display: grid; grid-template-columns: 1fr 1fr; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,.12); }
.footGrid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; }
.formInner { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.vmGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.miniStats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.amenGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.specGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.payGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.locGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.investGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

/* ── TESTIMONIAL – fully responsive ── */
.testiOuter {
  max-width: 860px; margin: 0 auto; padding: 0 clamp(12px, 5vw, 48px);
}
.testiWrap {
  position: relative;
}
.testiSlider { overflow: hidden; border-radius: 10px; }
.testiNavRow {
  display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 28px;
}
.testiBtn {
  background: #fff; border: 2px solid ${G}; color: ${G};
  width: 40px; height: 40px; border-radius: 50%;
  cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,.08);
  transition: all .3s; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.testiBtn:hover { background: ${G}; color: #fff; }
.testiDots { display: flex; gap: 8px; align-items: center; }

/* ── PROJECT HERO ── */
.projectHero { position: relative; min-height: 85vh; display: flex; align-items: center; overflow: hidden; background: linear-gradient(135deg,#060606,#141414); }
.projectHeroBadge { display: inline-flex; align-items: center; gap: 8px; background: rgba(208,171,105,.15); border: 1px solid rgba(208,171,105,.35); color: ${G}; padding: 6px 16px; border-radius: 30px; font-size: .72rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
.floorTag { position: absolute; top: -14px; right: 24px; background: ${G}; color: #fff; padding: 6px 18px; border-radius: 20px; font-size: .72rem; font-weight: 700; letter-spacing: .08em; }
.payStep { display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 8px; background: #fafaf8; border: 1px solid rgba(208,171,105,.15); transition: all .25s; }
.payStep:hover { background: rgba(208,171,105,.06); border-color: rgba(208,171,105,.35); }
.payPercent { font-family: 'Playfair Display',serif; font-size: 1.3rem; font-weight: 700; color: ${G}; min-width: 52px; }
.amenItem { display: flex; align-items: center; gap: 10px; padding: 12px 14px; background: #fff; border: 1px solid rgba(208,171,105,.15); border-radius: 8px; transition: all .3s; }
.amenItem:hover { border-color: ${G}; background: rgba(208,171,105,.04); transform: translateY(-2px); }
.locBadge { display: flex; align-items: center; gap: 10px; padding: 14px 16px; background: #fff; border: 1px solid rgba(208,171,105,.2); border-radius: 8px; transition: all .25s; }
.locBadge:hover { border-color: ${G}; box-shadow: 0 4px 20px rgba(208,171,105,.1); }
.specRow { display: flex; align-items: center; gap: 12px; padding: 14px 16px; background: #fff; border: 1px solid rgba(208,171,105,.15); border-radius: 8px; }
.priceBanner { background: linear-gradient(135deg,#0a0a0a,#1a1408); border: 1px solid rgba(208,171,105,.25); border-radius: 12px; padding: clamp(28px,5vw,48px); text-align: center; position: relative; overflow: hidden; }
.priceBanner::before { content: ''; position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border-radius: 50%; background: radial-gradient(circle, rgba(208,171,105,.08), transparent 70%); pointer-events: none; }
.ctaPulse { animation: pulse 2s ease-in-out infinite; }
.investCard { background: linear-gradient(135deg,#0a0a0a,#181408); border: 1px solid rgba(208,171,105,.2); border-radius: 10px; padding: 28px 24px; text-align: center; transition: all .35s; }
.investCard:hover { border-color: ${G}; transform: translateY(-6px); box-shadow: 0 20px 50px rgba(208,171,105,.12); }

/* ── TABLET (≤1024px) ── */
@media (max-width: 1024px) {
  .navLinks { display: none !important; }
  .menuToggle { display: flex !important; }
  .g2 { grid-template-columns: 1fr !important; gap: 40px !important; }
  .g3 { grid-template-columns: 1fr 1fr !important; }
  .g4 { grid-template-columns: 1fr 1fr !important; }
  .gServ { grid-template-columns: 1fr 1fr !important; }
  .gCta { grid-template-columns: 1fr !important; }
  .footGrid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
  .vmGrid { grid-template-columns: 1fr !important; }
  .amenGrid { grid-template-columns: repeat(2, 1fr) !important; }
  .investGrid { grid-template-columns: 1fr 1fr !important; }
  .heroContent { padding: 0 24px !important; max-width: 100% !important; margin-left: 0 !important; }
  .scrollInd { left: 24px !important; }
}

/* ── MOBILE (≤640px) ── */
@media (max-width: 640px) {
  .g3 { grid-template-columns: 1fr !important; }
  .g4 { grid-template-columns: 1fr 1fr !important; }
  .gServ { grid-template-columns: 1fr !important; }
  .footGrid { grid-template-columns: 1fr !important; gap: 28px !important; }
  .formInner { grid-template-columns: 1fr !important; }
  .miniStats { grid-template-columns: 1fr 1fr !important; }
  .amenGrid { grid-template-columns: 1fr 1fr !important; }
  .specGrid { grid-template-columns: 1fr !important; }
  .payGrid { grid-template-columns: 1fr !important; }
  .locGrid { grid-template-columns: 1fr !important; }
  .investGrid { grid-template-columns: 1fr !important; }
  .blogHead { flex-direction: column !important; align-items: flex-start !important; }
  .heroBtns { flex-direction: column !important; }
  .heroBtns a { width: 100% !important; justify-content: center !important; }
  .projectHeroBtns { flex-direction: column !important; }
  .projectHeroBtns a,button { width: 100% !important; justify-content: center !important; }
  .testiOuter { padding: 0 8px; }
  .testiBtn { width: 36px; height: 36px; }
}

/* ── XS MOBILE (≤380px) ── */
@media (max-width: 380px) {
  .g4 { grid-template-columns: 1fr !important; }
  .miniStats { grid-template-columns: 1fr !important; }
  .amenGrid { grid-template-columns: 1fr !important; }
}

/* ── DESKTOP ONLY ── */
@media (min-width: 1025px) {
  .menuToggle { display: none !important; }
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
  { img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80", tag: "Design Trends", date: "Feb 18, 2026", title: "The Future of Vertical Living in Noida: Skyscrapers in 2030", desc: "Noida's skyline is rapidly evolving with modern high-rise developments along the Expressway and Sector 150. Smart building technology, sustainable construction, and integrated township concepts are redefining vertical living in Noida, creating futuristic residential ecosystems." },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80", tag: "Real Estate", date: "Feb 10, 2026", title: "Why Location Matters Most in Noida Property Investment", desc: "In Noida's fast-growing market, location remains the biggest factor in property appreciation. Sectors near metro stations, IT hubs, and the Noida-Greater Noida Expressway are witnessing stronger demand and better rental yields." },
  { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80", tag: "Sustainability", date: "Jan 28, 2026", title: "Green Buildings in Noida: Luxury Meets Sustainability", desc: "Noida's leading developers are adopting eco-friendly construction practices, energy-efficient systems, rainwater harvesting, and green-certified designs. Luxury residential projects in sectors like 150 and Expressway are blending sustainability with premium lifestyle features." },
  { img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80", tag: "Architecture", date: "Jan 15, 2026", title: "Designing Premium High-Rise Living in Noida", desc: "Architectural innovation is shaping Noida's modern skyline. From glass façade towers to integrated township layouts, developers are focusing on spacious layouts, natural lighting, and smart home integration." },
  { img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80", tag: "Investment", date: "Jan 5, 2026", title: "Noida's Real Estate Boom: Where to Invest in 2026", desc: "Noida's property market is expanding rapidly due to metro expansion, IT parks, and the upcoming Jewar International Airport. Investment hotspots like Sector 150 and Expressway sectors are offering strong appreciation potential." },
  { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80", tag: "Lifestyle", date: "Dec 22, 2025", title: "Luxury Lifestyle Living in Noida's Modern Towers", desc: "From sky lounges and infinity pools to clubhouse amenities and smart security systems, Noida's premium residential towers are offering a complete lifestyle upgrade with green landscapes and wellness facilities." },
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
    window.addEventListener("scroll", fn);
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const visBlogs = () => [0, 1, 2].map(i => BLOGS[(blogIdx + i) % BLOGS.length]);
  const inp = (f) => ({ className: "fInp", value: form[f], onChange: (e) => setForm({ ...form, [f]: e.target.value }) });

  return (
    <div>
      <style>{css}</style>

      {/* ── NAVBAR ── */}
      <nav className={`nav${scrolled ? " sc" : ""}`}>
        <div className="navInner">
          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none", lineHeight: 0, flexShrink: 0 }}>
            <img style={{ width: 52, height: 52, objectFit: "contain" }} src="/img/Iconic logo.png" alt="Iconic Tower" />
          </a>

          {/* Desktop Links */}
          <div className="navLinks">
            {NAV_LINKS.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nl">{l}</a>)}
            <a href="#contact" className="btnG navCta">
              Get In Touch <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="menuToggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
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
      <div className={`mDrawer${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        {/* Drawer Header */}
        <div className="mDrawerHead">
          <img style={{ width: 48, height: 48, objectFit: "contain" }} src="/img/Iconic logo.png" alt="Iconic Tower" />
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#1a1a1a", padding: 6, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#f5f5f5"}
            onMouseLeave={e => e.currentTarget.style.background = "none"}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="mDrawerBody">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="mNavLink"
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {l}
              <ChevronRight size={14} style={{ color: "#ccc" }} />
            </a>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="mDrawerFoot">
          <a
            href="#contact"
            className="btnG"
            style={{ padding: "13px 24px", borderRadius: 6, justifyContent: "center", fontSize: ".9rem" }}
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
        <img src="/img/banner2.webp" alt="Iconic Tower" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.2) 100%)" }} />
        <div className="heroContent">
          <h1 className="pf aFU d1" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.08, marginBottom: 20 }}>
            Where Architecture<br />
            <span className="gs">Meets Aspiration</span>
          </h1>
          <p className="aFU d2" style={{ fontSize: "clamp(.9rem, 1.6vw, 1.1rem)", color: "rgba(255,255,255,.76)", lineHeight: 1.95, maxWidth: 520, marginBottom: 28 }}>
            Iconic Tower crafts extraordinary spaces that inspire, endure, and elevate every horizon they grace. Premium real estate, redefined for those who demand the best.
          </p>
          <div className="aFU d3 heroBtns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#project" className="btnG" style={{ padding: "13px 30px", borderRadius: 6, fontSize: ".92rem" }}>
              Explore Project <ChevronRight size={17} />
            </a>
            <a href="#about" className="btnO" style={{ padding: "13px 30px", borderRadius: 6, fontSize: ".92rem" }}>
              Our Story <ChevronRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="sec" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="g2">
            <div style={{ position: "relative" }}>
              <div className="iz" style={{ borderRadius: 10, height: "clamp(320px, 45vw, 580px)" }}>
                <img src="https://i.pinimg.com/1200x/73/7a/cc/737accdfde9f5d7479f5b67a1ade8719.jpg" alt="About Iconic Tower" style={{ borderRadius: 10 }} />
              </div>
              <div style={{ position: "absolute", top: -16, left: -16, width: 80, height: 80, border: `2px solid ${G}28`, borderRadius: 6, zIndex: -1 }} />
              <div style={{ position: "absolute", bottom: -16, right: -16, width: 60, height: 60, background: `${G}12`, borderRadius: 6, zIndex: -1 }} />
            </div>
            <div>
              <div className="sTag" style={{ marginBottom: 14 }}>About Iconic Tower</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, color: "#1a1a1a", marginBottom: 20 }}>
                Building Dreams, <br /><span style={{ color: G }}>Crafting Legacies</span>
              </h2>
              <div className="gDiv" style={{ marginBottom: 24 }} />
              <p style={{ fontSize: "1rem", lineHeight: 1.95, color: "#555", marginBottom: 16 }}>
                For over three decades, Iconic Tower has stood at the forefront of real estate innovation. We don't merely build structures — we create enduring icons that define city skylines and enrich entire communities.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.95, color: "#555", marginBottom: 32 }}>
                Our philosophy is rooted in the belief that exceptional spaces transform lives. From conceptual design to final handover, every project reflects our unwavering commitment to quality and integrity.
              </p>
              <div className="miniStats" style={{ marginBottom: 36 }}>
                {STATS.map(({ Icon: Ic, n, l }, i) => (
                  <div key={i} style={{ padding: "16px 14px", background: "#fafaf8", borderRadius: 8, border: `1px solid ${G}20`, display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: `${G}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Ic size={18} color={G} />
                    </div>
                    <div>
                      <div className="pf" style={{ fontSize: "1.4rem", fontWeight: 700, color: G, lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: ".72rem", color: "#888", fontWeight: 500, marginTop: 3 }}>{l}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#project" className="btnG" style={{ padding: "13px 34px", borderRadius: 6, fontSize: ".9rem" }}>
                View Our Project <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT SECTION ── */}
      <div id="project">

        {/* ── PROJECT HERO BANNER ── */}
        <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85"
            alt="Iconic Tower Project"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(0,0,0,.92) 0%,rgba(5,5,5,.78) 55%,rgba(0,0,0,.4) 100%)" }} />
          <div style={{ position: "absolute", left: "max(24px, calc((100vw - 1200px)/2 + 24px))", top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent, ${G}50, transparent)`, pointerEvents: "none" }} />

          <div className="wrap" style={{ position: "relative", zIndex: 10, width: "100%", padding: "clamp(80px,10vw,120px) 24px clamp(60px,8vw,90px)" }}>
            <div style={{ maxWidth: 700 }}>
              <div className="projectHeroBadge" style={{ marginBottom: 22 }}>
                <MapPin size={12} />
                Noida Extension · Greater Noida West
              </div>
              <h2 className="pf" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: 18 }}>
                The Address That<br />
                <span className="gs">Redefines the Skyline</span>
              </h2>
              <div className="gDiv" style={{ marginBottom: 24 }} />
              <p style={{ fontSize: "clamp(.9rem,1.5vw,1.1rem)", color: "rgba(255,255,255,.72)", lineHeight: 1.9, maxWidth: 560, marginBottom: 36 }}>
                Rising 45 storeys above the evolving landscape of Greater Noida West — designed for families who demand more. Part of an expansive 24-acre premium development, this architectural landmark introduces one of the largest 4-bedroom residences in the micro-market.
              </p>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 36 }}>
                {[
                  { n: "45", l: "Storeys" },
                  { n: "4 BHK", l: "+ Study" },
                  { n: "24", l: "Acres Township" },
                ].map(({ n, l }, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div className="pf" style={{ fontSize: "clamp(1.6rem,4vw,2.8rem)", fontWeight: 900, color: G, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.5)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div className="projectHeroBtns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a href="#contact" className="btnG" style={{ padding: "14px 34px", borderRadius: 6, fontSize: ".92rem" }}>
                  Enquire Now <ArrowRight size={16} />
                </a>
                <a href="#contact" className="btnO" style={{ padding: "14px 34px", borderRadius: 6, fontSize: ".92rem" }}>
                  Download Brochure <ArrowDown size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICE & CONFIGURATION ── */}
        <section className="sec" style={{ background: "#0a0a0a" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="sTag" style={{ marginBottom: 14 }}>Investment</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff" }}>
                Price & <span style={{ color: G }}>Configuration</span>
              </h2>
              <div className="gDiv" style={{ margin: "18px auto 0" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="g2">
              <div style={{ background: "linear-gradient(135deg,#111,#181408)", border: `1px solid ${G}25`, borderRadius: 12, padding: "clamp(28px,5vw,44px)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: `radial-gradient(circle, ${G}12, transparent 70%)`, pointerEvents: "none" }} />
                <div className="sTag" style={{ marginBottom: 16 }}>Configuration</div>
                <h3 className="pf" style={{ fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 800, color: "#fff", marginBottom: 8 }}>4 BHK + Study + 4T</h3>
                <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.45)", marginBottom: 28 }}>Super Spacious Luxury Layout</p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
                  {[
                    { Icon: BedDouble, label: "4 Bedrooms" },
                    { Icon: Bath, label: "4 Toilets" },
                    { Icon: LayoutGrid, label: "Study Room" },
                    { Icon: Wind, label: "Open Views" },
                  ].map(({ Icon: Ic, label }, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: `${G}12`, border: `1px solid ${G}25`, borderRadius: 8, padding: "8px 14px" }}>
                      <Ic size={14} color={G} />
                      <span style={{ fontSize: ".78rem", color: "rgba(255,255,255,.7)", fontWeight: 500 }}>{label}</span>
                    </div>
                  ))}
                </div>
                {[
                  "Flexible Construction Linked Payment Plan",
                  "Attractive Pre-Launch / Early Buyer Benefits",
                  "Limited Inventory Available",
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <CheckCircle2 size={16} color={G} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: ".85rem", color: "rgba(255,255,255,.6)" }}>{t}</span>
                  </div>
                ))}
              </div>

              <div className="priceBanner">
                <div className="sTag" style={{ color: GL, marginBottom: 12 }}>Starting Price</div>
                <div className="pf" style={{ fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 900, color: G, lineHeight: 1, marginBottom: 6 }}>
                  ₹X.XX Cr
                </div>
                <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.35)", marginBottom: 32 }}>Onwards* · Pre-Launch Pricing</p>
                <div style={{ background: `${G}15`, border: `1px solid ${G}30`, borderRadius: 8, padding: "16px 20px", marginBottom: 24, textAlign: "left" }}>
                  <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.5)", marginBottom: 6 }}>This investment includes:</p>
                  {["Latest Price Sheet on Request","Exclusive Floor Plan Access","Site Visit Appointment"].map((t,i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap: 8, marginTop: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: G, flexShrink: 0 }} />
                      <span style={{ fontSize: ".82rem", color: "rgba(255,255,255,.65)" }}>{t}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btnG" style={{ width: "100%", justifyContent: "center", padding: "14px", borderRadius: 8, fontSize: ".95rem" }}>
                  Get Best Price <ArrowRight size={16} />
                </a>
                <a href="#contact" className="btnO" style={{ width: "100%", justifyContent: "center", padding: "13px", borderRadius: 8, fontSize: ".9rem", marginTop: 10 }}>
                  Schedule Site Visit <MapPin size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PAYMENT PLAN ── */}
        <section className="sec" style={{ background: "#fafaf8" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="sTag" style={{ marginBottom: 14 }}>Structured for Confidence</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a" }}>
                Payment <span style={{ color: G }}>Plan</span>
              </h2>
              <div className="gDiv" style={{ margin: "18px auto 12px" }} />
              <p style={{ fontSize: ".9rem", color: "#888" }}>Construction Linked · Convenient & Transparent</p>
            </div>

            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <div className="payGrid">
                {(payOpen ? PAYMENT_PLAN : PAYMENT_PLAN.slice(0, 6)).map(({ pct, label }, i) => (
                  <div key={i} className="payStep">
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: `${G}15`, border: `1px solid ${G}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: ".65rem", fontWeight: 700, color: G }}>{i + 1}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: ".82rem", color: "#555" }}>{label}</span>
                    </div>
                    <div className="payPercent">{pct}</div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: "center", marginTop: 24 }}>
                <button
                  onClick={() => setPayOpen(p => !p)}
                  className="btnO"
                  style={{ padding: "11px 32px", borderRadius: 6, fontSize: ".85rem" }}
                >
                  {payOpen ? "Show Less" : `View All ${PAYMENT_PLAN.length} Steps`}
                  {payOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESIDENCE SPECIFICATIONS ── */}
        <section className="sec" style={{ background: "#fff" }}>
          <div className="wrap">
            <div className="g2" style={{ gap: 56 }}>
              <div>
                <div className="sTag" style={{ marginBottom: 14 }}>Interiors & Finishes</div>
                <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, marginBottom: 20 }}>
                  Residences Designed<br /><span style={{ color: G }}>for Grandeur</span>
                </h2>
                <div className="gDiv" style={{ marginBottom: 24 }} />
                <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.9, marginBottom: 32 }}>
                  Natural light. Cross ventilation. Unmatched openness. Every detail is crafted to deliver an elevated living experience.
                </p>
                <div className="specGrid">
                  {SPECS.map((s, i) => (
                    <div key={i} className="specRow">
                      <CheckCircle2 size={17} color={G} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: ".85rem", color: "#444", fontWeight: 500 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="iz" style={{ borderRadius: 10, height: "clamp(300px, 42vw, 560px)" }}>
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Luxury Interior" style={{ borderRadius: 10 }} />
                </div>
                <div style={{ position: "absolute", bottom: 24, left: -20, background: "linear-gradient(135deg,#0a0a0a,#181408)", border: `1px solid ${G}30`, borderRadius: 10, padding: "14px 20px", boxShadow: `0 12px 40px rgba(0,0,0,.25)` }}>
                  <div className="pf" style={{ fontSize: "1.4rem", fontWeight: 700, color: G }}>12 Ft</div>
                  <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.5)", letterSpacing: ".08em" }}>FLOOR-TO-CEILING HEIGHT</div>
                </div>
                <div style={{ position: "absolute", top: 24, right: -16, background: "#fff", border: `1px solid ${G}20`, borderRadius: 10, padding: "14px 20px", boxShadow: "0 8px 30px rgba(0,0,0,.08)" }}>
                  <div className="pf" style={{ fontSize: "1.4rem", fontWeight: 700, color: G }}>270°</div>
                  <div style={{ fontSize: ".72rem", color: "#888", letterSpacing: ".08em" }}>OPEN VIEWS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AMENITIES ── */}
        <section className="sec" style={{ background: "#fafaf8" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="sTag" style={{ marginBottom: 14 }}>A Curated Ecosystem</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a" }}>
                Lifestyle Beyond <span style={{ color: G }}>Expectations</span>
              </h2>
              <div className="gDiv" style={{ margin: "18px auto 14px" }} />
              <p style={{ fontSize: ".9rem", color: "#888", maxWidth: 480, margin: "0 auto" }}>Luxury here is not added. It is integrated.</p>
            </div>
            <div className="amenGrid">
              {AMENITIES.map((a, i) => (
                <div key={i} className="amenItem">
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: G, flexShrink: 0 }} />
                  <span style={{ fontSize: ".85rem", color: "#444", fontWeight: 500 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="sec" style={{ background: "#fff" }}>
          <div className="wrap">
            <div className="g2" style={{ gap: 56 }}>
              <div>
                <div className="sTag" style={{ marginBottom: 14 }}>Prime Location</div>
                <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, marginBottom: 20 }}>
                  Location <span style={{ color: G }}>Advantage</span>
                </h2>
                <div className="gDiv" style={{ marginBottom: 24 }} />
                <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.9, marginBottom: 32 }}>
                  Strategically positioned in Greater Noida West with seamless connectivity. Future-ready infrastructure. High appreciation potential.
                </p>
                <div className="locGrid">
                  {LOCATION_POINTS.map((l, i) => (
                    <div key={i} className="locBadge">
                      <MapPin size={15} color={G} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: ".83rem", color: "#444", fontWeight: 500 }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderRadius: 10, overflow: "hidden", border: `2px solid ${G}20`, boxShadow: "0 16px 60px rgba(0,0,0,.08)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3414880842183!2d77.43110949999999!3d28.589530600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff6ef2459c5%3A0x4cdf16a9ad1bd4ef!2sAU!5e0!3m2!1sen!2sin!4v1772027669158!5m2!1sen!2sin"
                  width="100%" height="400" style={{ border: 0, display: "block" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Iconic Tower Project Location"
                />
                <div style={{ background: "#fafaf8", padding: "14px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                  <MapPin size={15} color={G} />
                  <span style={{ fontSize: ".82rem", color: "#666", fontWeight: 500 }}>Noida Extension · Greater Noida West, UP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY INVEST ── */}
        <section className="sec" style={{ background: "linear-gradient(135deg,#060606,#140e04)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div className="sTag" style={{ marginBottom: 14 }}>Make the Right Move</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff" }}>
                Why Invest <span style={{ color: G }}>Here?</span>
              </h2>
              <div className="gDiv" style={{ margin: "18px auto 0" }} />
            </div>
            <div className="investGrid">
              {INVEST_REASONS.map(({ Icon: Ic, title, desc }, i) => (
                <div key={i} className="investCard">
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: `${G}18`, border: `1px solid ${G}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <Ic size={22} color={G} />
                  </div>
                  <h4 className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{title}</h4>
                  <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.45)", lineHeight: 1.8 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECT CTA STRIP ── */}
        <section style={{ background: `linear-gradient(90deg, ${GD}, ${G}, ${GL})`, padding: "clamp(36px,6vw,60px) 0" }}>
          <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: ".82rem", color: "rgba(255,255,255,.7)", letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>Own a home that defines presence</p>
              <h3 className="pf" style={{ fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 800, color: "#fff" }}>
                Book Your Private Viewing Today
              </h3>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#contact" className="btnW" style={{ padding: "14px 34px", borderRadius: 6, fontSize: ".92rem" }}>
                Schedule Site Visit <ArrowRight size={16} />
              </a>
              <a href="tel:+919999999999" className="btnW" style={{ padding: "14px 34px", borderRadius: 6, fontSize: ".92rem" }}>
                <Phone size={15} /> Call Now
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="sec" style={{ background: "#fafaf8" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="sTag" style={{ marginBottom: 14 }}>What We Offer</div>
            <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: 14 }}>
              Our Premium <span style={{ color: G }}>Services</span>
            </h2>
            <div className="gDiv" style={{ margin: "0 auto 18px" }} />
            <p style={{ fontSize: "1rem", color: "#777", maxWidth: 540, margin: "0 auto", lineHeight: 1.85 }}>
              From concept to completion, comprehensive real estate solutions tailored to your vision.
            </p>
          </div>
          <div className="gServ">
            {SERVICES.map(({ Icon: Ic, img, title, desc }, i) => (
              <div key={i} className="cardH" style={{ background: "#fff", borderRadius: 10, overflow: "hidden", border: `1px solid ${G}18` }}>
                <div className="iz" style={{ height: 200 }}>
                  <img src={img} alt={title} />
                </div>
                <div style={{ padding: "22px 24px 26px" }}>
                  <div className="svcIcon" style={{ marginBottom: 14 }}><Ic size={22} /></div>
                  <h3 className="pf" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: ".875rem", color: "#777", lineHeight: 1.85 }}>{desc}</p>
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
              <div className="sTag" style={{ marginBottom: 14 }}>Why Choose Us</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a", marginBottom: 20, lineHeight: 1.2 }}>
                The Standard Others <br /><span style={{ color: G }}>Aspire To Reach</span>
              </h2>
              <div className="gDiv" style={{ marginBottom: 24 }} />
              <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.9, marginBottom: 32 }}>
                Our legacy of excellence is built on consistent delivery, transparent practices, and unwavering commitment to client satisfaction at every milestone.
              </p>
              {WHY.map((w, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <CheckCircle2 size={20} color={G} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: ".95rem", color: "#444", fontWeight: 500 }}>{w}</span>
                </div>
              ))}
            </div>
            <div style={{ position: "relative" }}>
              <div className="iz" style={{ borderRadius: 10, height: "clamp(300px, 42vw, 560px)" }}>
                <img src="/img/img7.jpg" alt="Why Choose Us" style={{ borderRadius: 10 }} />
              </div>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,rgba(0,0,0,.1),rgba(208,171,105,.08))`, borderRadius: 10, pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{ padding: "clamp(56px, 8vw, 88px) 0", background: "linear-gradient(135deg,#0a0a0a,#1c1c1c)" }}>
        <div className="wrap">
          <div className="g4">
            {STATS.map(({ Icon: Ic, n, l }, i) => (
              <div key={i} style={{ textAlign: "center", animation: statsVis ? `countUp .7s ease forwards ${i * 0.15}s` : "none", opacity: 0 }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${G}18`, border: `1px solid ${G}35`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <Ic size={24} color={G} />
                </div>
                <div className="pf" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", fontWeight: 700, color: G, lineHeight: 1 }}>{n}</div>
                <div className="gDiv" style={{ margin: "12px auto" }} />
                <div style={{ fontSize: ".875rem", color: "rgba(255,255,255,.6)", fontWeight: 500, letterSpacing: ".04em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="sec" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="sTag" style={{ marginBottom: 14 }}>Our Foundation</div>
            <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a" }}>
              Vision & <span style={{ color: G }}>Mission</span>
            </h2>
            <div className="gDiv" style={{ margin: "18px auto 0" }} />
          </div>
          <div className="vmGrid">
            <div style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${G}18` }}>
              <div className="iz" style={{ height: 220, position: "relative" }}>
                <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=700&q=80" alt="Vision" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.55)" }} />
                <div style={{ position: "absolute", bottom: 20, left: 26, display: "flex", alignItems: "center", gap: 10 }}>
                  <Eye size={20} color={G} />
                  <span className="pf" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>Our <span style={{ color: G }}>Vision</span></span>
                </div>
              </div>
              <div style={{ background: "linear-gradient(135deg,#0a0a0a,#1c1c1c)", padding: "32px 32px 40px" }}>
                <div style={{ width: 40, height: 2, background: G, marginBottom: 18 }} />
                <p style={{ fontSize: "1rem", color: "rgba(255,255,255,.7)", lineHeight: 1.95, marginBottom: 14 }}>
                  To be the most trusted and celebrated real estate developer across Asia — synonymous with architectural brilliance, sustainable innovation, and transformative urban experiences.
                </p>
                <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.4)", lineHeight: 1.9 }}>
                  Every project becomes a landmark — a source of community pride and testament to human ambition.
                </p>
              </div>
            </div>
            <div style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${G}30` }}>
              <div className="iz" style={{ height: 220, position: "relative" }}>
                <img src="https://images.pexels.com/photos/8582991/pexels-photo-8582991.jpeg" alt="Mission" />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom,rgba(0,0,0,.2),rgba(208,171,105,.28))` }} />
                <div style={{ position: "absolute", bottom: 20, left: 26, display: "flex", alignItems: "center", gap: 10 }}>
                  <Target size={20} color={GL} />
                  <span className="pf" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>Our <span style={{ color: GL }}>Mission</span></span>
                </div>
              </div>
              <div style={{ background: `linear-gradient(135deg,${G}10,${G}05)`, padding: "32px 32px 40px" }}>
                <div style={{ width: 40, height: 2, background: G, marginBottom: 18 }} />
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.95, marginBottom: 14 }}>
                  To design, develop, and deliver exceptional real estate by combining world-class craftsmanship with cutting-edge technology — creating spaces where people thrive and communities flourish.
                </p>
                <p style={{ fontSize: ".9rem", color: "#888", lineHeight: 1.9 }}>
                  We commit to ethical practices, environmental responsibility, and client-centric service in every venture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS – fully responsive ── */}
      <section className="sec" style={{ background: "#fafaf8" }}>
        <div style={{ textAlign: "center", marginBottom: 52, padding: "0 24px" }}>
          <div className="sTag" style={{ marginBottom: 14 }}>Client Stories</div>
          <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a" }}>
            What Our <span style={{ color: G }}>Clients Say</span>
          </h2>
          <div className="gDiv" style={{ margin: "18px auto 0" }} />
        </div>

        {/* Outer wrapper handles padding safely on all screen sizes */}
        <div className="testiOuter">
          <div className="testiWrap">
            <div className="testiSlider">
              <div className="slTrack" style={{ transform: `translateX(-${testiIdx * 100}%)` }}>
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} style={{ minWidth: "100%", padding: "0 2px" }}>
                    <div style={{
                      background: "#fff", borderRadius: 12,
                      padding: "clamp(24px, 5vw, 48px) clamp(20px, 5vw, 44px)",
                      border: `1px solid ${G}18`,
                      boxShadow: "0 16px 60px rgba(0,0,0,.06)",
                      textAlign: "center",
                    }}>
                      <Quote size={34} color={G} style={{ opacity: 0.12, display: "block", margin: "0 auto 12px" }} />
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}><StarRow /></div>
                      <p className="pf" style={{ fontSize: "clamp(.9rem, 2vw, 1.1rem)", color: "#333", lineHeight: 1.95, fontStyle: "italic", marginBottom: 28 }}>"{t.text}"</p>
                      <div style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", margin: "0 auto 12px", border: `3px solid ${G}` }}>
                        <img src={t.img} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a" }}>{t.name}</div>
                      <div style={{ fontSize: ".82rem", color: G, fontWeight: 500, marginTop: 4 }}>{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nav row: prev | dots | next — always in a row, never overflows */}
          <div className="testiNavRow">
            <button
              className="testiBtn"
              onClick={() => setTestiIdx(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="testiDots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestiIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === testiIdx ? 26 : 10, height: 10,
                    borderRadius: 5, border: "none", cursor: "pointer",
                    background: i === testiIdx ? G : "#ddd",
                    transition: "all .3s", padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              className="testiBtn"
              onClick={() => setTestiIdx(p => (p + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="sec" style={{ background: "#fff" }}>
        <div className="wrap">
          <div className="blogHead" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 20 }}>
            <div>
              <div className="sTag" style={{ marginBottom: 14 }}>Latest Insights</div>
              <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a" }}>
                From Our <span style={{ color: G }}>Blog</span>
              </h2>
              <div className="gDiv" style={{ marginTop: 14 }} />
            </div>
          </div>
          <div className="g3">
            {visBlogs().map((b, i) => (
              <div key={`${blogIdx}-${i}`} className="cardH" style={{ background: "#fff", borderRadius: 10, overflow: "hidden", border: `1px solid ${G}18`, animation: "fadeUp .55s ease forwards", animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="iz" style={{ height: 200 }}>
                  <img src={b.img} alt={b.title} />
                </div>
                <div style={{ padding: "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                    <span style={{ fontSize: ".66rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: G, background: `${G}15`, padding: "4px 12px", borderRadius: 20 }}>{b.tag}</span>
                    <span style={{ fontSize: ".78rem", color: "#bbb" }}>{b.date}</span>
                  </div>
                  <h3 className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.45 }}>{b.title}</h3>
                  <p style={{ fontSize: ".85rem", color: "#777", lineHeight: 1.85 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 36 }}>
            {BLOGS.map((_, i) => (
              <button key={i} onClick={() => setBlogIdx(i)} aria-label={`Blog page ${i + 1}`}
                style={{ width: i === blogIdx ? 28 : 10, height: 10, borderRadius: 5, border: "none", cursor: "pointer", background: i === blogIdx ? G : "#ddd", transition: "all .3s" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="sec" style={{ background: "#fafaf8" }}>
        <div className="wrapWide">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="sTag" style={{ marginBottom: 14 }}>✦ Start Your Journey ✦</div>
            <h2 className="pf" style={{ fontSize: "clamp(1.7rem, 4vw, 3rem)", fontWeight: 800, color: "#1a1a1a" }}>
              Ready to Build Your <span style={{ color: G }}>Dream Space?</span>
            </h2>
            <div className="gDiv" style={{ margin: "18px auto 0" }} />
          </div>
          <div className="gCta">
            <div style={{ position: "relative", minHeight: "clamp(400px, 55vw, 680px)" }}>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85" alt="CTA" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg,rgba(0,0,0,.75),rgba(30,20,8,.6))" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(28px, 5vw, 50px) clamp(24px, 5vw, 46px)" }}>
                <div className="sTag" style={{ color: GL, marginBottom: 14 }}>Get In Touch</div>
                <h3 className="pf" style={{ fontSize: "clamp(1.2rem, 2.8vw, 2.1rem)", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 18 }}>
                  Let's Create Something <span style={{ color: G }}>Extraordinary</span>
                </h3>
                <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,.68)", lineHeight: 1.9, marginBottom: 28 }}>
                  Schedule a consultation and let our experts guide you from vision to landmark reality.
                </p>
                {[
                  { Icon: Phone, t: "+91 9999999999" },
                  { Icon: Mail, t: "hello@iconictower.com" },
                  { Icon: MapPin, t: "Bisrakh, Noida, UP" },
                  { Icon: Clock, t: "Mon–Sat: 9 AM – 6 PM" },
                ].map(({ Icon: Ic, t }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${G}28`, border: `1px solid ${G}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Ic size={15} color={G} />
                    </div>
                    <span style={{ fontSize: ".88rem", color: "rgba(255,255,255,.82)", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#fff", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "clamp(28px, 5vw, 46px) clamp(20px, 5vw, 42px) 24px", flex: 1 }}>
                <h4 className="pf" style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>Send Us a Message</h4>
                <p style={{ fontSize: ".82rem", color: "#aaa", marginBottom: 24 }}>Our team will respond within 24 hours.</p>
                <div className="formInner" style={{ marginBottom: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#555", marginBottom: 6, letterSpacing: ".03em" }}>Full Name *</label>
                    <input {...inp("name")} placeholder="Your full name" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#555", marginBottom: 6, letterSpacing: ".03em" }}>Email *</label>
                    <input {...inp("email")} type="email" placeholder="you@email.com" />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#555", marginBottom: 6, letterSpacing: ".03em" }}>Phone Number</label>
                  <input {...inp("phone")} placeholder="+91 00000 00000" />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#555", marginBottom: 6, letterSpacing: ".03em" }}>Area of Interest</label>
                  <select className="fInp" value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })} style={{ appearance: "none", cursor: "pointer" }}>
                    {["Select your interest","Iconic Tower – 4 BHK","Luxury Residence","Commercial Property","Architectural Design","Interior Design","Property Management","Investment Advisory"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: ".75rem", fontWeight: 600, color: "#555", marginBottom: 6, letterSpacing: ".03em" }}>Message</label>
                  <textarea {...inp("msg")} placeholder="Tell us about your dream project..." />
                </div>
                <button className="btnG" style={{ width: "100%", padding: "14px", borderRadius: 6, fontSize: "1rem", justifyContent: "center" }}
                  onClick={() => alert("Thank you! We'll be in touch within 24 hours. 🏗️")}>
                  Send Message <Send size={16} />
                </button>
              </div>
              <div style={{ padding: "0 clamp(20px, 5vw, 42px) clamp(24px, 5vw, 42px)" }}>
                <div style={{ borderRadius: 8, overflow: "hidden", border: `2px solid ${G}20` }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3414880842183!2d77.43110949999999!3d28.589530600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff6ef2459c5%3A0x4cdf16a9ad1bd4ef!2sAU!5e0!3m2!1sen!2sin!4v1772027669158!5m2!1sen!2sin"
                    width="100%" height="180" style={{ border: 0, display: "block" }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Iconic Tower Location"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 10 }}>
                  <MapPin size={13} color={G} />
                  <p style={{ fontSize: ".75rem", color: "#bbb" }}>Iconic Tower, Noida, UP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", padding: "clamp(48px, 7vw, 72px) 0 28px" }}>
        <div className="wrap">
          <div className="footGrid" style={{ marginBottom: 48 }}>
            <div>
              <div style={{ marginBottom: 18 }}>
                <img style={{ width: 100, height: 100, objectFit: "contain" }} src="/img/Iconic logo.png" alt="Iconic Tower" />
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {SOCIAL.map(({ Icon: Ic, href }, i) => (
                  <a key={i} href={href}
                    style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${G}40`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: G, transition: "all .3s", textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = G; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = G; e.currentTarget.style.borderColor = `${G}40`; }}>
                    <Ic size={15} />
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Services", links: ["Architectural Design","Commercial Properties","Luxury Residences","Property Management","Interior Design"] },
              { title: "Contact", links: ["+91 9999999999","hello@iconictower.com","Noida, UP","Mon–Sat: 9am–6pm"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: 18 }}>{col.title}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((l, j) => (
                    <a key={j} href="#" style={{ fontSize: ".875rem", color: "rgba(255,255,255,.4)", textDecoration: "none", transition: "color .2s" }}
                      onMouseEnter={e => e.target.style.color = G}
                      onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.4)"}>
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.22)", margin: 0 }}>© 2026 Iconic Tower. All rights reserved.</p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["Privacy Policy","Terms","Cookies"].map((l, i) => (
                <a key={i} href="#" style={{ fontSize: ".78rem", color: "rgba(255,255,255,.22)", textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = G}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,.22)"}>
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