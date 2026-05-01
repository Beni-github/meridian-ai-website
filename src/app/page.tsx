"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
    secondary: "bg-white text-brand-600 border-2 border-brand-600 hover:bg-brand-50",
    ghost: "text-brand-600 hover:bg-brand-50 border border-gray-200 hover:border-brand-300",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 shadow-sm ${hover ? "hover:shadow-md hover:border-brand-200 transition-all duration-200" : ""} ${className}`}>
      {children}
    </div>
  );
}

function TabNav({ tabs, active, onChange }: { tabs: string[]; active: number; onChange: (i: number) => void }) {
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-xl w-fit" role="tablist">
      {tabs.map((tab, i) => (
        <button key={tab} role="tab" aria-selected={active === i} onClick={() => onChange(i)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === i ? "bg-white text-brand-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
          {tab}
        </button>
      ))}
    </div>
  );
}

function PricingCard({ name, price, period, suffix, desc, features, highlight, onSelect }: { name: string; price: string; period?: string; suffix?: string; desc: string; features: string[]; highlight?: boolean; onSelect: () => void }) {
  return (
    <Card className={`flex flex-col relative ${highlight ? "border-brand-500 ring-2 ring-brand-100" : ""}`} hover={false}>
      {highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">Most Popular</div>}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-500 text-sm mb-4">{desc}</p>
      <div className="mb-2 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-400 text-sm">{period}</span>}
        {suffix && <span className="text-xs text-gray-400 font-medium">{suffix}</span>}
      </div>
      <ul className="space-y-2 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-brand-500 flex-shrink-0 mt-0.5">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Button variant={highlight ? "primary" : "secondary"} className="w-full mt-auto" onClick={onSelect}>
        Get Started
      </Button>
    </Card>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const navItems: [string, string | (() => void)][] = [
    ["Services", "services"],
    ["Case Studies", "case-studies"],
    ["How It Works", "process"],
    ["FAQ", "faq"],
    ["Blog", "/blog"],
    ["Contact", "contact"],
  ];
  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="self-end text-gray-500 hover:text-gray-900 text-2xl leading-none p-1" aria-label="Close menu">×</button>
        <nav className="flex flex-col gap-4">
          {navItems.map(([label, id]) => {
            if (typeof id === "string" && id.startsWith("/")) {
              return <Link key={label} href={id} onClick={onClose} className="text-gray-700 hover:text-brand-600 font-medium transition-colors">{label}</Link>;
            }
            return <button key={label} onClick={() => typeof id === "function" ? id() : handleNav(id)} className="text-gray-700 hover:text-brand-600 font-medium text-left transition-colors">{label}</button>;
          })}
        </nav>
        <Button variant="primary" className="w-full mt-auto" onClick={() => handleNav("contact")}>Get Started</Button>
      </div>
    </div>
  );
}

const webDesignFeatures = [
  { icon: "🌐", title: "Mobile Responsive", desc: "Looks great on phones, tablets, and desktops." },
  { icon: "📧", title: "Contact Forms", desc: "Let visitors reach you directly from your page." },
  { icon: "⚡", title: "Fast Loading", desc: "Optimized for speed and SEO from day one." },
  { icon: "🎨", title: "Professional Design", desc: "Clean, modern design that matches your brand." },
  { icon: "🔍", title: "Local SEO", desc: "Optimized to get found in Bellingham and Burlington." },
  { icon: "✅", title: "Revision Rounds", desc: "One to two rounds of changes included." },
];

const seoFeatures = [
  { icon: "📍", title: "Google Business Profile", desc: "Complete setup and optimization of your GBP listing." },
  { icon: "🏷️", title: "Local Citations", desc: "Consistent NAP across 50+ directory listings." },
  { icon: "⭐", title: "Review Management", desc: "Strategies to get and manage customer reviews." },
  { icon: "📊", title: "Local Keyword Research", desc: "Target the terms your customers actually search." },
  { icon: "🔗", title: "On-Page SEO", desc: "Meta tags, headers, and structured data optimized." },
  { icon: "📈", title: "Monthly Reporting", desc: "Track rankings, traffic, and lead growth." },
];

const aiFeatures = [
  { icon: "🤖", title: "OpenClaw / Hermes Agents", desc: "Private AI agents deployed on your own hardware." },
  { icon: "📬", title: "Email & Calendar", desc: "Reads inbox, drafts replies, manages your schedule." },
  { icon: "📱", title: "WhatsApp & Slack", desc: "AI that communicates through channels you already use." },
  { icon: "📊", title: "Automated Reports", desc: "Morning briefings, inventory alerts, KPI dashboards." },
  { icon: "🔒", title: "Private & Local", desc: "Your data stays on your hardware. No cloud subscriptions." },
  { icon: "⏰", title: "Works While You Sleep", desc: "Scheduled automations that run 24/7." },
];

const industries = [
  "Dentists", "HVAC Contractors", "Restaurants & Cafes", "Salons & Spas",
  "Real Estate Agents", "Law Firms", "Home Services", "Retail Shops",
];

const caseStudies = [
  {
    slug: "bettys-bakery",
    title: "Betty's Bakery",
    industry: "Restaurant",
    summary: "Went from missing catering orders every week to an AI assistant that catches everything.",
    result: "3 hours saved per week",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  },
  {
    slug: "bellingham-family-dental",
    title: "Bellingham Family Dental",
    industry: "Dental Practice",
    summary: "Patient intake streamlined with AI-powered image recognition and automated reminders.",
    result: "40% fewer missed appointments",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
  },
];

const projectScenarios = [
  {
    scenario: "A local service business in the Pacific Northwest attracts new customers through an optimized Google Business Profile, fast-loading mobile website, and local keyword targeting — appearing in the top 3 search results for their service area.",
    type: "Website + Local SEO",
    benefit: "Steady stream of organic local leads",
  },
  {
    scenario: "A dental practice reduces missed appointments by 40% with automated SMS reminders, online booking integration, and an AI agent that follows up on outstanding treatment plans via email.",
    type: "AI Automation",
    benefit: "40% reduction in missed appointments",
  },
  {
    scenario: "A restaurant owner saves 3+ hours per week by deploying an AI agent that triages inbox inquiries, drafts appointment confirmations, and delivers a morning inventory briefing — all without touching the phone.",
    type: "AI Agent Deployment",
    benefit: "3+ hours reclaimed per week",
  },
];

const processSteps = [
  { num: "01", title: "Contact", desc: "Reach out via the form below. We'll schedule a quick call to discuss your needs." },
  { num: "02", title: "Proposal", desc: "Based on our call, you'll receive a custom proposal with pricing and timeline." },
  { num: "03", title: "Deposit", desc: "50% upfront to start. We begin work immediately after payment." },
  { num: "04", title: "Delivery", desc: "Websites: 5 days to 3 weeks. AI agents: guided 2–3 day setup." },
];

const pricingTiers = [
  {
    name: "Basic Website",
    price: "$500",
    period: "–$1,200",
    suffix: "one-time",
    desc: "5-page professional website for local businesses.",
    features: ["5 pages", "Mobile responsive", "Contact form", "Basic SEO", "1 revision round", "5–7 day delivery"],
  },
  {
    name: "Professional",
    price: "$2,000",
    period: "–$5,000",
    suffix: "one-time",
    desc: "Full website with local SEO built in.",
    features: ["5–15 pages", "Custom design", "Full local SEO", "Contact forms", "2 revision rounds", "2–3 week delivery"],
    highlight: true,
  },
  {
    name: "Premium + AI",
    price: "$5,000",
    period: "–$15,000",
    suffix: "one-time",
    desc: "Website, SEO, and AI agent deployment.",
    features: ["Everything in Professional", "OpenClaw/Hermes AI agent", "WhatsApp & email integration", "Morning briefings", "30 days priority support"],
  },
];

const faqs = [
  {
    q: "What's the difference between a basic and professional website?",
    a: "A basic website is 5 pages — great for a quick professional presence. A professional website includes full local SEO optimization, more pages (up to 15), and additional revision rounds for a more tailored result.",
  },
  {
    q: "What is local SEO and why does it matter?",
    a: "Local SEO is the practice of optimizing your online presence to appear in local search results — when someone searches 'dentist near me' or 'HVAC repair Bellingham.' Most local businesses in Bellingham and Burlington have poor local SEO, meaning there's low competition for ranking. Getting it right means steady, free traffic from Google.",
  },
  {
    q: "What exactly is an AI agent deployment?",
    a: "We deploy an OpenClaw/Hermes AI assistant on a small computer (Mac Mini or Linux NUC) that runs in your home or office. It connects to your email, calendar, WhatsApp or Slack, and can handle tasks like morning briefings, inventory reports, appointment reminders, and customer inquiries — completely private, no monthly subscriptions.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Traditional agencies often charge $1,000–$5,000/month and外包 your work to overseas teams. We offer one-time project pricing with no recurring fees for the build. You own the website and agent — not a monthly rental. For ongoing SEO management, we do offer monthly retainers, but they're structured around real work, not retainer padding.",
  },
  {
    q: "Do you work with businesses outside of Bellingham and Burlington?",
    a: "Our core focus is the I-5 corridor in Washington state — Bellingham, Burlington, Mount Vernon, and surrounding areas. This lets us provide genuinely local expertise. For businesses outside this area, we can still help with website and AI projects — reach out to discuss.",
  },
  {
    q: "How long does a website project take?",
    a: "Basic websites are ready in 5–7 days. Professional websites typically take 2–3 weeks depending on complexity and how quickly you provide feedback.",
  },
  {
    q: "What's included in the AI agent setup?",
    a: "Day 1: We connect your tools — Gmail, Google Sheets, WhatsApp or Slack, calendar. Day 2: We configure your first automations — morning briefing format, report templates, any scheduling rules. Day 3: Go live with 48 hours of monitoring alongside you. 30 days of priority support included.",
  },
  {
    q: "What if I need changes after the site is done?",
    a: "Basic websites include one revision round. Professional websites include two revision rounds. Additional changes after that are billed at an hourly rate.",
  },
];

const seoServices = [
  { name: "Google Business Profile Setup", price: "$149", period: "–$299", desc: "Complete GBP setup, optimization, and category selection." },
  { name: "Local SEO Audit", price: "$300", period: "–$800", desc: "Full audit of your current local SEO performance with actionable recommendations." },
  { name: "Monthly SEO Management", price: "$300", period: "–$1,000/mo", desc: "Ongoing citation building, review management, and ranking monitoring." },
];

export default function Home() {
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileNavOpen) setMobileNavOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileNavOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Nav */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/fenn_suit.jpg" alt="Meridian AI" width={36} height={36} className="rounded-lg object-cover shadow-sm" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-tight">Meridian AI</span>
              <span className="text-xs text-gray-400 leading-none">Bellingham, WA</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {[["Services", "services"], ["Pricing", "pricing"], ["Case Studies", "case-studies"], ["How It Works", "process"], ["FAQ", "faq"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-brand-600 transition-colors">{label}</button>
            ))}
            <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
            <button key="contact" onClick={() => scrollTo("contact")} className="hover:text-brand-600 transition-colors">Contact</button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" className="text-sm py-2 hidden md:inline-flex" onClick={() => scrollTo("contact")}>Get Started</Button>
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900" onClick={() => setMobileNavOpen(true)} aria-label="Open menu" aria-expanded={mobileNavOpen}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileNavOpen && <MobileNav onClose={() => setMobileNavOpen(false)} />}

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white py-24 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-300 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8 animate-fade-in">
            <Image src="/fenn_suit.jpg" alt="Meridian AI mascot Fenn the Fox" width={112} height={112} className="rounded-2xl object-cover shadow-2xl border-4 border-white/20 animate-float" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Pacific Northwest — Web Design, SEO & AI
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Your Business.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-100">Built for Local. Powered by AI.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Professional websites, local SEO, and AI agent deployment for Pacific Northwest businesses. One vendor, full stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="secondary" className="bg-white text-brand-700 hover:bg-brand-50 border-0 text-lg py-4 px-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" onClick={() => scrollTo("contact")}>
              Get a Free Quote →
            </Button>
            <Button variant="ghost" className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-lg py-4 px-10 transition-all duration-300" onClick={() => scrollTo("services")}>
              View Services
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-brand-200 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[["No Monthly Fees on Build", "✓"], ["Pacific Northwest Focused", "✓"], ["1–3 Week Delivery", "✓"]].map(([label, icon]) => (
              <span key={label} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[["Pricing", "One-time options"], ["Setup Time", "1–3 weeks"], ["Focus", "Pacific Northwest"], ["AI", "OpenClaw / Hermes"]].map(([label, value]) => (
              <div key={label}><div className="text-2xl font-bold text-brand-600">{value}</div><div className="text-sm text-gray-500">{label}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">What We Build</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Web Design, SEO & AI — In One Place</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Three ways to grow your local business — pick the service that fits your needs.</p>
          </div>
          <div className="flex justify-center mb-10">
            <TabNav tabs={["Web Design", "Local SEO", "AI Agents"]} active={activeServiceTab} onChange={setActiveServiceTab} />
          </div>

          {activeServiceTab === 0 && (
            <div className="animate-fade-in">
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-10 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">WEB DESIGN</span>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Websites — $500–$15,000</h3>
                </div>
                <p className="text-gray-600 mb-8 max-w-2xl">From a quick 5-page website to a full custom build with AI integration. Every site is mobile responsive, SEO optimized, and designed for your local market.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {webDesignFeatures.map(({ icon, title, desc }) => (
                    <Card key={title} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div><h4 className="font-semibold text-gray-900 mb-1">{title}</h4><p className="text-sm text-gray-500">{desc}</p></div>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="primary" onClick={() => scrollTo("contact")}>Get Your Website →</Button>
              </div>
            </div>
          )}

          {activeServiceTab === 1 && (
            <div className="animate-fade-in">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-brand-700 text-white text-xs font-bold px-3 py-1 rounded-full">LOCAL SEO</span>
                  <h3 className="text-2xl font-bold text-gray-900">Get Found on Google — $149–$1,000/mo</h3>
                </div>
                <p className="text-gray-600 mb-8 max-w-2xl">Most local businesses in Bellingham and Burlington have poor Google presence. We fix that — Google Business Profile setup, local citations, review management, and ongoing optimization.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {seoFeatures.map(({ icon, title, desc }) => (
                    <Card key={title} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div><h4 className="font-semibold text-gray-900 mb-1">{title}</h4><p className="text-sm text-gray-500">{desc}</p></div>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {seoServices.map(({ name, price, period, desc }) => (
                    <Card key={name} className="text-center">
                      <h4 className="font-bold text-gray-900 mb-1">{name}</h4>
                      <div className="text-2xl font-bold text-brand-600">{price}<span className="text-sm font-normal text-gray-400">{period}</span></div>
                      <p className="text-sm text-gray-500 mt-2">{desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="primary" onClick={() => scrollTo("contact")}>Improve Your Rankings →</Button>
              </div>
            </div>
          )}

          {activeServiceTab === 2 && (
            <div className="animate-fade-in">
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-10 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">AI AGENTS</span>
                  <h3 className="text-2xl font-bold text-gray-900">OpenClaw / Hermes Deployment — $299–$799</h3>
                </div>
                <p className="text-gray-600 mb-8 max-w-2xl">Deploy a private AI assistant on your own hardware — runs at home or in your office. Morning briefings, email management, appointment reminders, and automated reports. One-time setup. No monthly software fees.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {aiFeatures.map(({ icon, title, desc }) => (
                    <Card key={title} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div><h4 className="font-semibold text-gray-900 mb-1">{title}</h4><p className="text-sm text-gray-500">{desc}</p></div>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="primary" onClick={() => scrollTo("contact")}>Deploy Your AI Agent →</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">WHO WE SERVE</p>
            <h2 className="text-3xl font-bold text-gray-900">Built for Local Businesses Like Yours</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-100 hover:text-brand-700 transition-colors cursor-default">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section id="case-studies" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">CASE STUDIES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results for Real Businesses</h2>
            <p className="text-gray-500 max-w-xl mx-auto">See how we&apos;ve helped businesses in Bellingham and Burlington grow with better websites, local SEO, and AI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map(({ slug, title, industry, summary, result, image }) => (
              <Link href={`/case-studies/${slug}`} key={slug}>
                <Card className="overflow-hidden p-0 hover-lift cursor-pointer group">
                  <div className="aspect-video overflow-hidden">
                    <Image src={image} alt={title} width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{industry}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-green-600">{result}</span>
                      <span className="text-brand-600 text-sm font-medium group-hover:underline">Read full story →</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies" className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">View all case studies →</Link>
          </div>
        </div>
      </section>

      {/* Project Scenarios */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">PROJECT SCENARIOS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Illustrative Examples of What We Build</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The scenarios below represent types of projects we take on. Results vary based on individual business circumstances and market conditions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectScenarios.map(({ scenario, type, benefit }, i) => (
              <Card key={i} className="hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-sm font-bold">{i + 1}</span>
                  <span className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{type}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{scenario}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-green-600">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">Results shown are illustrative examples. Actual outcomes depend on individual business circumstances and market conditions.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">TRANSPARENT PRICING</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Upfront Pricing</h2>
            <p className="text-gray-500 max-w-xl mx-auto">No hidden fees. No monthly build costs. You own what we create.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} onSelect={() => scrollTo("contact")} />
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">SEO management available monthly at $300–$1,000/mo for ongoing optimization.</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">HOW IT WORKS</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Idea to Live — Fast</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Four steps from first contact to launch. No drawn-out agency timelines.</p>
          </div>
          <div className="relative">
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-100 via-brand-200 to-brand-100 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {processSteps.map(({ num, title, desc }, i) => (
                <div key={num} className="text-center reveal">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-2xl font-bold relative z-10 shadow-lg shadow-brand-200/50">{num}</div>
                    {i < processSteps.length - 1 && <div className="hidden md:block absolute -right-[calc(50%+16px)] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-400 ring-4 ring-brand-100" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-gray-50 hover:bg-gray-100 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span className="font-semibold text-gray-900">{q}</span>
                  <span className={`text-brand-600 text-xl transition-transform duration-200 flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">{a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white py-24 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Image src="/fenn_suit.jpg" alt="Meridian AI" width={80} height={80} className="rounded-xl object-cover shadow-lg border-2 border-white/20" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Ready to Get Started?</h2>
          <p className="text-brand-200 mb-12 text-lg md:text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Send us a message and we&apos;ll get back to you within 2 hours. Let&apos;s discuss your project and send a custom proposal — no obligation.
          </p>
          <div className="glass-dark rounded-2xl p-8 md:p-10 mb-8 max-w-md mx-auto animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold text-xl mb-6">Get a Free Quote</h3>
            <a
              href="mailto:hello@meridianai.co?subject=Free%20Quote%20Request&body=Hi%20Meridian%20AI%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20services.%0A%0AMy%20business%20name%3A%20%0A%0AWhat%20service(s)%20are%20you%20interested%20in%3F%20Web%20Design%20%7C%20Local%20SEO%20%7C%20AI%20Agents%0A%0A"
              className="block w-full bg-white text-brand-700 font-semibold px-6 py-4 rounded-lg hover:bg-brand-50 transition-colors text-center"
            >
              Email Us — hello@meridianai.co
            </a>
            <p className="text-brand-200 text-sm mt-4">We respond within 2 hours during business hours.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-brand-200 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Bellingham & Burlington, WA
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              No obligation quote
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/fenn_suit.jpg" alt="Meridian AI" width={32} height={32} className="rounded-lg object-cover" />
              <span className="font-bold text-lg text-white">Meridian AI LLC</span>
            </div>
            <div className="flex gap-6 text-sm">
              {[["Services", "services"], ["Case Studies", "case-studies"], ["How It Works", "process"], ["FAQ", "faq"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-white transition-colors">{label}</button>
              ))}
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
          <div className="border-t border-brand-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Meridian AI LLC. All rights reserved.</p>
            <p className="mt-2 text-brand-400">Bellingham, WA · Burlington, WA · Pacific Northwest</p>
          </div>
        </div>
      </footer>
    </main>
  );
}