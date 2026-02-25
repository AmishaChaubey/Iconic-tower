import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  ChevronLeft,
  ChevronDown,
  Building2,
  Building,
  Home,
  Paintbrush,
  Leaf,
  KeyRound,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Trophy,
  Users,
  Calendar,
  Award,
  Quote,
  ArrowDown,
  Send,
  Eye,
  Target,
} from "lucide-react";

const G = "#d0ab69";
const GL = "#e8cfa0";
const GD = "#b8924e";

/* ─── LOGO COMPONENT ──────────────────────────────────────────── */
function Logo({ size = 44, light = false }) {
  return (
    <svg
      width={size * 2.6}
      height={size}
      viewBox="0 0 130 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Building icon mark */}
      <rect x="0" y="8" width="22" height="36" rx="1.5" fill={G} />
      <rect x="4" y="4" width="14" height="6" rx="1" fill={GD} />
      <rect x="7" y="1" width="8" height="5" rx="1" fill={G} />
      {/* Windows on building */}
      <rect
        x="3"
        y="12"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="9"
        y="12"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="15"
        y="12"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="3"
        y="20"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="9"
        y="20"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="15"
        y="20"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="3"
        y="28"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="9"
        y="28"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      <rect
        x="15"
        y="28"
        width="4"
        height="4"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.7)"}
      />
      {/* Door */}
      <rect
        x="8"
        y="36"
        width="6"
        height="8"
        rx=".5"
        fill={light ? "rgba(255,255,255,0.5)" : "#fff"}
      />
      {/* Text: ICONIC */}
      <text
        x="28"
        y="24"
        fontFamily="'Playfair Display', serif"
        fontWeight="700"
        fontSize="15"
        fill={G}
        letterSpacing=".5"
      >
        ICONIC
      </text>
      {/* Text: TOWER */}
      <text
        x="28"
        y="38"
        fontFamily="'Poppins', sans-serif"
        fontWeight="600"
        fontSize="10"
        fill={light ? "rgba(255,255,255,0.9)" : "#1a1a1a"}
        letterSpacing="3"
      >
        TOWER
      </text>
    </svg>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Poppins',sans-serif;background:#fff;color:#1a1a1a;overflow-x:hidden;}
.pf{font-family:'Playfair Display',serif;}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:999;transition:all .35s;padding:18px 0;}
.nav.sc{background:rgba(255,255,255,.98);box-shadow:0 2px 30px rgba(0,0,0,.08);padding:12px 0;}
.nl{color:rgba(255,255,255,.88);text-decoration:none;font-size:.875rem;font-weight:500;transition:color .2s;position:relative;}
.nl::after{content:'';position:absolute;bottom:-3px;left:0;width:0;height:2px;background:${G};transition:width .2s;}
.nl:hover{color:${G};}
.nl:hover::after{width:100%;}
.nav.sc .nl{color:#1a1a1a;}
.nav.sc .nl:hover{color:${G};}

/* HERO – left aligned */
.hero{height:100vh;min-height:700px;position:relative;display:flex;align-items:center;overflow:hidden;}
.heroContent{max-width:680px;padding:0 0 0 max(28px, calc((100vw - 1280px)/2 + 28px));position:relative;z-index:10;}

/* ANIMS */
@keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes countUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}

.aFU{animation:fadeUp .8s ease forwards;opacity:0;}
.aFI{animation:fadeIn 1s ease forwards;opacity:0;}
.d1{animation-delay:.15s}.d2{animation-delay:.3s}.d3{animation-delay:.5s}.d4{animation-delay:.7s}

.gs{background:linear-gradient(90deg,${G},${GL},${G},${GD},${G});background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite;}

/* BTNs */
.btnG{background:${G};color:#fff;font-family:'Poppins',sans-serif;font-weight:600;letter-spacing:.05em;border:none;cursor:pointer;transition:all .3s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;}
.btnG:hover{background:${GD};transform:translateY(-2px);box-shadow:0 10px 30px rgba(208,171,105,.4);}
.btnO{background:transparent;color:${G};border:2px solid ${G};font-family:'Poppins',sans-serif;font-weight:600;cursor:pointer;transition:all .3s;display:inline-flex;align-items:center;gap:8px;text-decoration:none;}
.btnO:hover{background:${G};color:#fff;transform:translateY(-2px);}

/* DIVIDER */
.gDiv{width:60px;height:3px;background:linear-gradient(90deg,${G},${GL});border-radius:2px;}

/* IMG HOVER ZOOM */
.iz{overflow:hidden;}
.iz img{transition:transform .5s ease;width:100%;height:100%;object-fit:cotain;display:block;}
.cardH{transition:all .35s;cursor:pointer;}
.cardH:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(208,171,105,.18);}
.cardH:hover .iz img{transform:scale(1.07);}

/* SCROLL IND */
.scrollInd{position:absolute;bottom:32px;left:max(28px,calc((100vw - 1280px)/2 + 28px));display:flex;flex-direction:column;align-items:flex-start;gap:8px;animation:floatY 2.2s ease-in-out infinite;}

/* MOBILE MENU */
.mMenu{position:fixed;inset:0;background:#fff;z-index:1000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.8rem;transform:translateX(100%);transition:transform .4s ease;}
.mMenu.open{transform:translateX(0);}

/* SLIDER */
.slTrack{display:flex;transition:transform .65s cubic-bezier(.25,.46,.45,.94);}

/* FORM */
.fInp{width:100%;padding:13px 16px;border:1.5px solid #e8e0d0;border-radius:6px;font-family:'Poppins',sans-serif;font-size:.875rem;color:#1a1a1a;outline:none;transition:border-color .2s;background:#fff;}
.fInp:focus{border-color:${G};}
textarea.fInp{resize:vertical;min-height:110px;}

/* SECTION TAG */
.sTag{font-size:.72rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${G};}

/* GRIDS */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;}
.gServ{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
.gCta{display:grid;grid-template-columns:1fr 1fr;border-radius:12px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.12);}

/* SERVICE ICON BOX */
.svcIcon{width:52px;height:52px;border-radius:12px;background:linear-gradient(135deg,rgba(208,171,105,.12),rgba(208,171,105,.22));border:1px solid rgba(208,171,105,.3);display:flex;align-items:center;justify-content:center;transition:all .3s;color:${G};}
.cardH:hover .svcIcon{background:${G};border-color:${G};color:#fff;}

@media(max-width:1024px){
  .hideM{display:none!important;}
  .showM{display:block!important;}
  .g2{grid-template-columns:1fr!important;gap:48px!important;}
  .g3{grid-template-columns:1fr 1fr!important;}
  .g4{grid-template-columns:1fr 1fr!important;}
  .gServ{grid-template-columns:1fr 1fr!important;}
  .gCta{grid-template-columns:1fr!important;}
  .footGrid{grid-template-columns:1fr 1fr!important;}
  .heroContent{padding:0 28px!important;max-width:100%!important;}
  .scrollInd{left:28px!important;}
}
@media(max-width:640px){
  .g3{grid-template-columns:1fr!important;}
  .g4{grid-template-columns:1fr!important;}
  .gServ{grid-template-columns:1fr!important;}
  .footGrid{grid-template-columns:1fr!important;}
  .formInner{grid-template-columns:1fr!important;}
}
`;

const NAV_LINKS = ["Home", "About", "Services","Blog", "Contact"];

const SERVICES = [
  {
    Icon: Building2,
    img: "/img/img1.jpg",
    title: "Architectural Design",
    desc: "Visionary designs blending aesthetics with structural integrity, creating iconic landmarks for generations.",
  },
  {
    Icon: Building,
    img: "/img/img2.jpeg",
    title: "Commercial Properties",
    desc: "Premium office spaces and commercial complexes engineered to elevate business performance and ROI.",
  },
  {
    Icon: Home,
    img: "/img/img3.jpg",
    title: "Luxury Residences",
    desc: "Exquisite residential towers offering unparalleled comfort, privacy, and breathtaking panoramic views.",
  },
  {
    Icon: Paintbrush,
    img: "/img/img4.jpeg",
    title: "Interior Design",
    desc: "Bespoke interiors crafted by world-class designers to reflect your unique vision and lifestyle.",
  },
  {
    Icon: Leaf,
    img: "/img/img5.jpg",
    title: "Sustainable Building",
    desc: "Eco-conscious construction reducing environmental impact without ever compromising on luxury.",
  },
  {
    Icon: KeyRound,
    img: "/img/img6.jpg",
    title: "Property Management",
    desc: "Comprehensive services ensuring your investment remains pristine, occupied, and highly profitable.",
  },
];

const BLOGS = [
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    tag: "Design Trends",
    date: "Feb 18, 2026",
    title: "The Future of Vertical Living in Noida: Skyscrapers in 2030",
    desc: "Noida’s skyline is rapidly evolving with modern high-rise developments along the Expressway and Sector 150. Smart building technology, sustainable construction, and integrated township concepts are redefining vertical living in Noida, creating futuristic residential ecosystems designed for comfort, connectivity, and luxury.",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    tag: "Real Estate",
    date: "Feb 10, 2026",
    title: "Why Location Matters Most in Noida Property Investment",
    desc: "In Noida’s fast-growing market, location remains the biggest factor in property appreciation. Sectors near metro stations, IT hubs, and the Noida-Greater Noida Expressway are witnessing stronger demand, better rental yields, and long-term capital growth compared to less connected areas.",
  },
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
    tag: "Sustainability",
    date: "Jan 28, 2026",
    title: "Green Buildings in Noida: Luxury Meets Sustainability",
    desc: "Noida’s leading developers are adopting eco-friendly construction practices, energy-efficient systems, rainwater harvesting, and green-certified designs. Luxury residential projects in sectors like 150 and Expressway are blending sustainability with premium lifestyle features for environmentally conscious buyers.",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
    tag: "Architecture",
    date: "Jan 15, 2026",
    title: "Designing Premium High-Rise Living in Noida",
    desc: "Architectural innovation is shaping Noida’s modern skyline. From glass façade towers to integrated township layouts, developers are focusing on spacious layouts, natural lighting, and smart home integration to create world-class high-rise living experiences in prime sectors.",
  },
  {
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
    tag: "Investment",
    date: "Jan 5, 2026",
    title: "Noida's Real Estate Boom: Where to Invest in 2026",
    desc: "Noida’s property market is expanding rapidly due to metro expansion, IT parks, and the upcoming Jewar International Airport. Investment hotspots like Sector 150, Noida Extension, and Expressway sectors are offering strong appreciation potential and consistent rental demand in 2026.",
  },
  {
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80",
    tag: "Lifestyle",
    date: "Dec 22, 2025",
    title: "Luxury Lifestyle Living in Noida’s Modern Towers",
    desc: "From sky lounges and infinity pools to clubhouse amenities and smart security systems, Noida’s premium residential towers are offering a complete lifestyle upgrade. Gated communities with green landscapes and wellness facilities are becoming the new standard of urban luxury living.",
  },
];

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "CEO, Mehta Group",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    text: "Iconic Tower transformed our vision into a breathtaking reality. The attention to detail and craftsmanship is absolutely unmatched. We are thrilled beyond words with our new headquarters.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner, Tower 7",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    text: "Living in an Iconic Tower residence is a dream come true. The quality of construction, design finesse, and premium amenities have exceeded every expectation I had.",
  },
  {
    name: "Vikram Singh",
    role: "Director, Singh Ventures",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    text: "The team delivers exactly what they promise. From concept to completion, every step was handled with professionalism and complete transparency. Highly recommended.",
  },
  {
    name: "Meera Kapoor",
    role: "Architect & Blogger",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    text: "As an architect myself, I deeply appreciate the level of craft and thought that goes into every Iconic Tower project. Truly a benchmark for the entire industry.",
  },
  {
    name: "Rahul Joshi",
    role: "Investor, Joshi Capital",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    text: "My investment in an Iconic Tower property has delivered outstanding returns. The brand value alone adds a significant premium. A truly wise and rewarding decision.",
  },
  {
    name: "Sunita Rao",
    role: "Resident, Iconic Heights",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80",
    text: "From the moment I walked into the showroom, I knew this was exceptional. The handover experience was seamless and the quality is beyond five-star. Absolutely love my home.",
  },
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

function StarRow() {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={15} fill={G} color={G} />
      ))}
    </div>
  );
}

export default function IconicTower() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogIdx, setBlogIdx] = useState(0);
  const [testiIdx, setTestiIdx] = useState(0);
  const [statsVis, setStatsVis] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Select your interest",
    msg: "",
  });
  const statsRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsVis(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setBlogIdx((p) => (p + 1) % BLOGS.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(
      () => setTestiIdx((p) => (p + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const visBlogs = () =>
    [0, 1, 2].map((i) => BLOGS[(blogIdx + i) % BLOGS.length]);
  const inp = (f) => ({
    className: "fInp",
    value: form[f],
    onChange: (e) => setForm({ ...form, [f]: e.target.value }),
  });

  return (
    <div>
      <style>{css}</style>

      {/*
          NAVBAR */}
      <nav className={`nav${scrolled ? " sc" : ""}`}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO IMAGE */}
          <a href="#home" style={{ textDecoration: "none", lineHeight: 0 }}>
            <img className=" w-20 h-20" src="/img/Iconic logo.png" />
          </a>

          {/* Desktop Nav */}
          <div
            className="hideM"
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          >
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nl">
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="btnG"
              style={{
                padding: "10px 24px",
                borderRadius: 6,
                fontSize: ".875rem",
              }}
            >
              Get In Touch <ArrowRight size={15} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="showM"
            onClick={() => setMenuOpen(true)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: scrolled ? "#1a1a1a" : "#fff",
              cursor: "pointer",
            }}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mMenu${menuOpen ? " open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: 24,
            right: 28,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1a1a1a",
          }}
        >
          <X size={26} />
        </button>
        <Logo size={34} light={false} />
        {NAV_LINKS.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="pf"
            style={{
              fontSize: "1.5rem",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="btnG"
          style={{ padding: "14px 36px", borderRadius: 6 }}
          onClick={() => setMenuOpen(false)}
        >
          Get In Touch <ArrowRight size={16} />
        </a>
      </div>

      <section id="home" className="hero">
        <img
          src="/img/banner3.jpg"
          alt="Iconic Tower"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cotain",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.2) 100%)",
          }}
        />

        {/* Hero section */}

        <div className="heroContent">
          <h1
            className="pf aFU d1"
            style={{
              fontSize: "clamp(2.3rem,5vw,4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: 24,
            }}
          >
            Where Architecture
            <br />
            <span className="gs">Meets Aspiration</span>
          </h1>

          <p
            className="aFU d2"
            style={{
              fontSize: "clamp(.95rem,1.6vw,1.1rem)",
              color: "rgba(255,255,255,.76)",
              lineHeight: 1.95,
              maxWidth: 520,
              marginBottom: 16,
            }}
          >
            Iconic Tower crafts extraordinary spaces that inspire, endure, and
            elevate every horizon they grace. Premium real estate, redefined for
            those who demand the best.
          </p>

          <div
            className="aFU d3"
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <a
              href="#services"
              className="btnG"
              style={{
                padding: "14px 36px",
                borderRadius: 6,
                fontSize: ".95rem",
              }}
            >
              Explore Projects <ChevronRight size={17} />
            </a>
            <a
              href="#about"
              className="btnO"
              style={{
                padding: "14px 36px",
                borderRadius: 6,
                fontSize: ".95rem",
              }}
            >
              Our Story <ChevronRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section id="about" style={{ padding: "100px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }} className="g2">
          {/* Left – image */}
          <div style={{ position: "relative" }}>
            <div className="iz" style={{ borderRadius: 10, height: 580 }}>
              <img
                src="/img/about2.png"
                alt="About Iconic Tower"
                style={{ borderRadius: 10 }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top,rgba(10,10,10,.5),transparent)",
                borderRadius: 10,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: -20,
                left: -20,
                width: 100,
                height: 100,
                border: `2px solid ${G}28`,
                borderRadius: 6,
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                width: 70,
                height: 70,
                background: `${G}12`,
                borderRadius: 6,
                zIndex: -1,
              }}
            />
          </div>

          {/* Right – content */}
          <div>
            <div className="sTag" style={{ marginBottom: 14 }}>
              About Iconic Tower
            </div>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(1.9rem,4vw,2.8rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1a1a1a",
                marginBottom: 20,
              }}
            >
              Building Dreams, <br />
              <span style={{ color: G }}>Crafting Legacies</span>
            </h2>
            <div className="gDiv" style={{ marginBottom: 24 }} />
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.95,
                color: "#555",
                marginBottom: 16,
              }}
            >
              For over three decades, Iconic Tower has stood at the forefront of
              real estate innovation. We don't merely build structures — we
              create enduring icons that define city skylines and enrich entire
              communities.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.95,
                color: "#555",
                marginBottom: 34,
              }}
            >
              Our philosophy is rooted in the belief that exceptional spaces
              transform lives. From conceptual design to final handover, every
              project reflects our unwavering commitment to quality and
              integrity.
            </p>
            {/* Mini stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 38,
              }}
            >
              {STATS.map(({ Icon: Ic, n, l }, i) => (
                <div
                  key={i}
                  style={{
                    padding: "18px 16px",
                    background: "#fafaf8",
                    borderRadius: 8,
                    border: `1px solid ${G}20`,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: `${G}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Ic size={20} color={G} />
                  </div>
                  <div>
                    <div
                      className="pf"
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        color: G,
                        lineHeight: 1,
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        fontSize: ".75rem",
                        color: "#888",
                        fontWeight: 500,
                        marginTop: 3,
                      }}
                    >
                      {l}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#services"
              className="btnG"
              style={{
                padding: "14px 38px",
                borderRadius: 6,
                fontSize: ".9rem",
              }}
            >
              Discover Our Story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/*SERVICES */}

      <section
        id="services"
        style={{ padding: "100px 28px", background: "#fafaf8" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="sTag" style={{ marginBottom: 14 }}>
              What We Offer
            </div>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(1.9rem,4vw,2.8rem)",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 14,
              }}
            >
              Our Premium <span style={{ color: G }}>Services</span>
            </h2>
            <div className="gDiv" style={{ margin: "0 auto 18px" }} />
            <p
              style={{
                fontSize: "1rem",
                color: "#777",
                maxWidth: 540,
                margin: "0 auto",
                lineHeight: 1.85,
              }}
            >
              From concept to completion, comprehensive real estate solutions
              tailored to your vision.
            </p>
          </div>
          <div className="gServ">
            {SERVICES.map(({ Icon: Ic, img, title, desc }, i) => (
              <div
                key={i}
                className="cardH"
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  overflow: "hidden",
                  border: `1px solid ${G}18`,
                }}
              >
                <div className="iz" style={{ height: 200 }}>
                  <img src={img} alt={title} />
                </div>
                <div style={{ padding: "24px 26px 28px" }}>
                  <div className="svcIcon" style={{ marginBottom: 14 }}>
                    <Ic size={22} />
                  </div>
                  <h3
                    className="pf"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      marginBottom: 10,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: ".875rem",
                      color: "#777",
                      lineHeight: 1.85,
                      marginBottom: 18,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US*/}

      <section style={{ padding: "100px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }} className="g2">
          <div>
            <div className="sTag" style={{ marginBottom: 14 }}>
              Why Choose Us
            </div>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(1.9rem,4vw,2.8rem)",
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              The Standard Others <br />
              <span style={{ color: G }}>Aspire To Reach</span>
            </h2>
            <div className="gDiv" style={{ marginBottom: 24 }} />
            <p
              style={{
                fontSize: "1rem",
                color: "#666",
                lineHeight: 1.9,
                marginBottom: 34,
              }}
            >
              Our legacy of excellence is built on consistent delivery,
              transparent practices, and unwavering commitment to client
              satisfaction at every milestone.
            </p>
            {WHY.map((w, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <CheckCircle2 size={20} color={G} style={{ flexShrink: 0 }} />
                <span
                  style={{ fontSize: ".95rem", color: "#444", fontWeight: 500 }}
                >
                  {w}
                </span>
              </div>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <div className="iz" style={{ borderRadius: 10, height: 560 }}>
              <img
                src="/img/img7.jpg"
                alt="Why Choose Us"
                style={{ borderRadius: 10 }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg,rgba(0,0,0,.1),rgba(208,171,105,.08))`,
                borderRadius: 10,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </section>
      {/* STATS  */}

      <section
        ref={statsRef}
        style={{
          padding: "88px 28px",
          background: "linear-gradient(135deg,#0a0a0a,#1c1c1c)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }} className="g4">
          {STATS.map(({ Icon: Ic, n, l }, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                animation: statsVis
                  ? `countUp .7s ease forwards ${i * 0.15}s`
                  : "none",
                opacity: 0,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: `${G}18`,
                  border: `1px solid ${G}35`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Ic size={26} color={G} />
              </div>
              <div
                className="pf"
                style={{
                  fontSize: "clamp(2.2rem,4.5vw,3.5rem)",
                  fontWeight: 700,
                  color: G,
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div className="gDiv" style={{ margin: "14px auto 14px" }} />
              <div
                style={{
                  fontSize: ".875rem",
                  color: "rgba(255,255,255,.6)",
                  fontWeight: 500,
                  letterSpacing: ".04em",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}

      <section style={{ padding: "100px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="sTag" style={{ marginBottom: 14 }}>
              Our Foundation
            </div>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(1.9rem,4vw,2.8rem)",
                fontWeight: 700,
                color: "#1a1a1a",
              }}
            >
              Vision & <span style={{ color: G }}>Mission</span>
            </h2>
            <div className="gDiv" style={{ margin: "18px auto 0" }} />
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
            className="g3"
          >
            {/* Vision */}
            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                border: `1px solid ${G}18`,
              }}
            >
              <div className="iz" style={{ height: 240, position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=700&q=80"
                  alt="Vision"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,.55)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 22,
                    left: 28,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Eye size={20} color={G} />
                  <span
                    className="pf"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Our <span style={{ color: G }}>Vision</span>
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg,#0a0a0a,#1c1c1c)",
                  padding: "34px 34px 42px",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: G,
                    marginBottom: 20,
                  }}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,.7)",
                    lineHeight: 1.95,
                    marginBottom: 16,
                  }}
                >
                  To be the most trusted and celebrated real estate developer
                  across Asia — synonymous with architectural brilliance,
                  sustainable innovation, and transformative urban experiences.
                </p>
                <p
                  style={{
                    fontSize: ".9rem",
                    color: "rgba(255,255,255,.4)",
                    lineHeight: 1.9,
                  }}
                >
                  Every project becomes a landmark — a source of community pride
                  and testament to human ambition.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                border: `1px solid ${G}30`,
              }}
            >
              <div className="iz" style={{ height: 240, position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                  alt="Mission"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to bottom,rgba(0,0,0,.2),rgba(208,171,105,.28))`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 22,
                    left: 28,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Target size={20} color={GL} />
                  <span
                    className="pf"
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    Our <span style={{ color: GL }}>Mission</span>
                  </span>
                </div>
              </div>
              <div
                style={{
                  background: `linear-gradient(135deg,${G}10,${G}05)`,
                  padding: "34px 34px 42px",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: G,
                    marginBottom: 20,
                  }}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#555",
                    lineHeight: 1.95,
                    marginBottom: 16,
                  }}
                >
                  To design, develop, and deliver exceptional real estate by
                  combining world-class craftsmanship with cutting-edge
                  technology — creating spaces where people thrive and
                  communities flourish.
                </p>
                <p
                  style={{ fontSize: ".9rem", color: "#888", lineHeight: 1.9 }}
                >
                  We commit to ethical practices, environmental responsibility,
                  and client-centric service in every venture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS  */}

      <section style={{ padding: "100px 28px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="sTag" style={{ marginBottom: 14 }}>
              Client Stories
            </div>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(1.9rem,4vw,2.8rem)",
                fontWeight: 700,
                color: "#1a1a1a",
              }}
            >
              What Our <span style={{ color: G }}>Clients Say</span>
            </h2>
            <div className="gDiv" style={{ margin: "18px auto 0" }} />
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ overflow: "hidden", borderRadius: 10 }}>
              <div
                className="slTrack"
                style={{ transform: `translateX(-${testiIdx * 100}%)` }}
              >
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} style={{ minWidth: "100%", padding: "0 6px" }}>
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: 10,
                        padding: "48px 44px",
                        border: `1px solid ${G}18`,
                        boxShadow: "0 16px 60px rgba(0,0,0,.06)",
                        textAlign: "center",
                      }}
                    >
                      <Quote
                        size={40}
                        color={G}
                        style={{ opacity: 0.12, marginBottom: 14 }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: 20,
                        }}
                      >
                        <StarRow />
                      </div>
                      <p
                        className="pf"
                        style={{
                          fontSize: "clamp(1rem,2vw,1.18rem)",
                          color: "#333",
                          lineHeight: 1.95,
                          fontStyle: "italic",
                          marginBottom: 34,
                        }}
                      >
                        "{t.text}"
                      </p>
                      <div
                        style={{
                          width: 58,
                          height: 58,
                          borderRadius: "50%",
                          overflow: "hidden",
                          margin: "0 auto 14px",
                          border: `3px solid ${G}`,
                        }}
                      >
                        <img
                          src={t.img}
                          alt={t.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div
                        className="pf"
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "#1a1a1a",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontSize: ".82rem",
                          color: G,
                          fontWeight: 500,
                          marginTop: 4,
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Prev / Next */}
            {[
              { dir: -1, Icon: ChevronLeft, side: "left" },
              { dir: 1, Icon: ChevronRight, side: "right" },
            ].map(({ dir, Icon: Ic, side }, i) => (
              <button
                key={i}
                onClick={() =>
                  setTestiIdx(
                    (p) =>
                      (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length,
                  )
                }
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  [side]: -22,
                  background: "#fff",
                  border: `2px solid ${G}`,
                  color: G,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,0,0,.1)",
                  transition: "all .3s",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = G;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = G;
                }}
              >
                <Ic size={18} />
              </button>
            ))}
          </div>
          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 34,
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestiIdx(i)}
                style={{
                  width: i === testiIdx ? 30 : 10,
                  height: 10,
                  borderRadius: 5,
                  border: "none",
                  cursor: "pointer",
                  background: i === testiIdx ? G : "#ddd",
                  transition: "all .3s",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}

      <section id="blog" style={{ padding: "100px 28px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 60,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div className="sTag" style={{ marginBottom: 14 }}>
                Latest Insights
              </div>
              <h2
                className="pf"
                style={{
                  fontSize: "clamp(1.9rem,4vw,2.8rem)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                }}
              >
                From Our <span style={{ color: G }}>Blog</span>
              </h2>
              <div className="gDiv" style={{ marginTop: 14 }} />
            </div>
            <a
              href="#"
              className="btnO"
              style={{
                padding: "11px 26px",
                borderRadius: 6,
                fontSize: ".875rem",
              }}
            >
              View All Posts <ArrowRight size={15} />
            </a>
          </div>
          <div className="g3">
            {visBlogs().map((b, i) => (
              <div
                key={`${blogIdx}-${i}`}
                className="cardH"
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  overflow: "hidden",
                  border: `1px solid ${G}18`,
                  animation: "fadeUp .55s ease forwards",
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="iz" style={{ height: 210 }}>
                  <img src={b.img} alt={b.title} />
                </div>
                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        fontSize: ".66rem",
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: G,
                        background: `${G}15`,
                        padding: "4px 12px",
                        borderRadius: 20,
                      }}
                    >
                      {b.tag}
                    </span>
                    <span style={{ fontSize: ".78rem", color: "#bbb" }}>
                      {b.date}
                    </span>
                  </div>
                  <h3
                    className="pf"
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      marginBottom: 10,
                      lineHeight: 1.45,
                    }}
                  >
                    {b.title}
                  </h3>
                  <p
                    style={{
                      fontSize: ".85rem",
                      color: "#777",
                      lineHeight: 1.85,
                      marginBottom: 18,
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 38,
            }}
          >
            {BLOGS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBlogIdx(i)}
                style={{
                  width: i === blogIdx ? 28 : 10,
                  height: 10,
                  borderRadius: 5,
                  border: "none",
                  cursor: "pointer",
                  background: i === blogIdx ? G : "#ddd",
                  transition: "all .3s",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA  */}

      <section
        id="contact"
        style={{ padding: "100px 28px", background: "#fafaf8" }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="sTag" style={{ marginBottom: 14 }}>
              ✦ Start Your Journey ✦
            </div>
            <h2
              className="pf"
              style={{
                fontSize: "clamp(1.9rem,4vw,3rem)",
                fontWeight: 800,
                color: "#1a1a1a",
              }}
            >
              Ready to Build Your <span style={{ color: G }}>Dream Space?</span>
            </h2>
            <div className="gDiv" style={{ margin: "18px auto 0" }} />
          </div>
          <div className="gCta">
            {/* LEFT – Image + contact info */}
            <div style={{ position: "relative", minHeight: 680 }}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85"
                alt="CTA"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(145deg,rgba(0,0,0,.75),rgba(30,20,8,.6))",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "50px 46px",
                }}
              >
                <div className="sTag" style={{ color: GL, marginBottom: 14 }}>
                  Get In Touch
                </div>
                <h3
                  className="pf"
                  style={{
                    fontSize: "clamp(1.4rem,2.8vw,2.1rem)",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.3,
                    marginBottom: 22,
                  }}
                >
                  Let's Create Something{" "}
                  <span style={{ color: G }}>Extraordinary</span>
                </h3>
                <p
                  style={{
                    fontSize: ".9rem",
                    color: "rgba(255,255,255,.68)",
                    lineHeight: 1.9,
                    marginBottom: 34,
                  }}
                >
                  Schedule a consultation and let our experts guide you from
                  vision to landmark reality.
                </p>
                {[
                  { Icon: Phone, t: "+91 9999999999" },
                  { Icon: Mail, t: "hello@iconictower.com" },
                  { Icon: MapPin, t: "Bisrakh, Noida, UP" },
                  { Icon: Clock, t: "Mon–Sat: 9 AM – 6 PM" },
                ].map(({ Icon: Ic, t }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: `${G}28`,
                        border: `1px solid ${G}50`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Ic size={16} color={G} />
                    </div>
                    <span
                      style={{
                        fontSize: ".88rem",
                        color: "rgba(255,255,255,.82)",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – Form + Map */}
            <div
              style={{
                background: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ padding: "46px 42px 26px", flex: 1 }}>
                <h4
                  className="pf"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: 6,
                  }}
                >
                  Send Us a Message
                </h4>
                <p
                  style={{
                    fontSize: ".82rem",
                    color: "#aaa",
                    marginBottom: 26,
                  }}
                >
                  Our team will respond within 24 hours.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                    marginBottom: 14,
                  }}
                  className="formInner"
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: ".75rem",
                        fontWeight: 600,
                        color: "#555",
                        marginBottom: 6,
                        letterSpacing: ".03em",
                      }}
                    >
                      Full Name *
                    </label>
                    <input {...inp("name")} placeholder="Your full name" />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: ".75rem",
                        fontWeight: 600,
                        color: "#555",
                        marginBottom: 6,
                        letterSpacing: ".03em",
                      }}
                    >
                      Email *
                    </label>
                    <input
                      {...inp("email")}
                      type="email"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".75rem",
                      fontWeight: 600,
                      color: "#555",
                      marginBottom: 6,
                      letterSpacing: ".03em",
                    }}
                  >
                    Phone Number
                  </label>
                  <input {...inp("phone")} placeholder="+91 00000 00000" />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".75rem",
                      fontWeight: 600,
                      color: "#555",
                      marginBottom: 6,
                      letterSpacing: ".03em",
                    }}
                  >
                    Area of Interest
                  </label>
                  <select
                    className="fInp"
                    value={form.interest}
                    onChange={(e) =>
                      setForm({ ...form, interest: e.target.value })
                    }
                    style={{ appearance: "none", cursor: "pointer" }}
                  >
                    {[
                      "Select your interest",
                      "Luxury Residence",
                      "Commercial Property",
                      "Architectural Design",
                      "Interior Design",
                      "Property Management",
                      "Investment Advisory",
                    ].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: ".75rem",
                      fontWeight: 600,
                      color: "#555",
                      marginBottom: 6,
                      letterSpacing: ".03em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    {...inp("msg")}
                    placeholder="Tell us about your dream project..."
                  />
                </div>
                <button
                  className="btnG"
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: 6,
                    fontSize: "1rem",
                    justifyContent: "center",
                  }}
                  onClick={() =>
                    alert("Thank you! We'll be in touch within 24 hours. 🏗️")
                  }
                >
                  Send Message <Send size={16} />
                </button>
              </div>

              {/* MAP */}
              <div style={{ padding: "0 42px 42px" }}>
                <div
                  style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    border: `2px solid ${G}20`,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3414880842183!2d77.43110949999999!3d28.589530600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff6ef2459c5%3A0x4cdf16a9ad1bd4ef!2sAU!5e0!3m2!1sen!2sin!4v1772027669158!5m2!1sen!2sin
"
                    width="100%"
                    height="190"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Iconic Tower Location"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    marginTop: 10,
                  }}
                >
                  <MapPin size={13} color={G} />
                  <p style={{ fontSize: ".75rem", color: "#bbb" }}>
                    Iconic Tower,Noida,UP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer style={{ background: "#050505", padding: "72px 28px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 48,
              marginBottom: 56,
            }}
            className="footGrid"
          >
            <div>
              <div style={{ marginBottom: 20 }}>
                <img className="w-28 h-28" src="/img/Iconic logo.png" />
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                {SOCIAL.map(({ Icon: Ic, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: `1px solid ${G}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: G,
                      transition: "all .3s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = G;
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = G;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = G;
                      e.currentTarget.style.borderColor = `${G}40`;
                    }}
                  >
                    <Ic size={15} />
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Services",
                links: [
                  "Architectural Design",
                  "Commercial Properties",
                  "Luxury Residences",
                  "Property Management",
                  "Interior Design",
                ],
              },
              {
                title: "Company",
                links: [
                  "About Us",
                  "Our Projects",
                  "Blog & News",
                  "Careers",
                  "Awards",
                ],
              },
              {
                title: "Contact",
                links: [
                  "+91 9999999999",
                  "hello@iconictower.com",
                  "Noida, Up",
                  "Mon–Sat: 9am–6pm",
                ],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4
                  className="pf"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 20,
                  }}
                >
                  {col.title}
                </h4>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {col.links.map((l, j) => (
                    <a
                      key={j}
                      href="#"
                      style={{
                        fontSize: ".875rem",
                        color: "rgba(255,255,255,.4)",
                        textDecoration: "none",
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = G)}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,.4)")
                      }
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.08)",
              paddingTop: 28,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.22)" }}>
              © 2026 Iconic Tower. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy Policy", "Terms", "Cookies"].map((l, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    fontSize: ".78rem",
                    color: "rgba(255,255,255,.22)",
                    textDecoration: "none",
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Extra responsive */}
      <style>{`
        @media(max-width:1024px){
          .hideM{display:none!important;}
          .showM{display:block!important;}
          .g2{grid-template-columns:1fr!important;gap:48px!important;}
          .g3{grid-template-columns:1fr 1fr!important;}
          .g4{grid-template-columns:1fr 1fr!important;}
          .gServ{grid-template-columns:1fr 1fr!important;}
          .gCta{grid-template-columns:1fr!important;}
          .footGrid{grid-template-columns:1fr 1fr!important;}
        }
        @media(min-width:1025px){.showM{display:none!important;}}
        @media(max-width:640px){
          .g3{grid-template-columns:1fr!important;}
          .g4{grid-template-columns:1fr!important;}
          .gServ{grid-template-columns:1fr!important;}
          .footGrid{grid-template-columns:1fr!important;}
          .formInner{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}
