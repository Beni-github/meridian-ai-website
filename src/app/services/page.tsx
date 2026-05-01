import Link from "next/link";

const services = [
  {
    id: "web-design",
    name: "Web Design & Development",
    tagline: "$500 – $15,000",
    taglineDesc: "One-time, varies by complexity",
    description: "Professional websites built for local businesses in Bellingham and Burlington, WA. Every site is mobile responsive, fast-loading, and optimized for local search. You own the website forever — no monthly build fees.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      { title: "Mobile Responsive", desc: "Looks great on phones, tablets, and desktops." },
      { title: "Contact Forms", desc: "Lead capture forms with email notifications." },
      { title: "Fast Loading", desc: "Optimized for speed and Core Web Vitals." },
      { title: "Professional Design", desc: "Clean, modern design that matches your brand." },
      { title: "Local SEO Built In", desc: "Meta tags, headers, and structure optimized for local search." },
      { title: "SSL Certificate", desc: "Secure HTTPS encryption included." },
      { title: "Revision Rounds", desc: "One to two rounds of changes included." },
      { title: "Ownership", desc: "You own the code and hosting relationship." },
    ],
    tiers: [
      { name: "Basic Website", price: "$500", period: "–$1,200", delivery: "5–7 days", pages: "5 pages", features: ["Mobile responsive", "Contact form", "Basic SEO", "1 revision round"] },
      { name: "Professional Website", price: "$2,000", period: "–$5,000", delivery: "2–3 weeks", pages: "5–15 pages", features: ["Custom design", "Full local SEO", "Contact forms", "2 revision rounds", "Google Business Profile sync"] },
      { name: "Premium + AI", price: "$5,000", period: "–$15,000", delivery: "3–4 weeks", pages: "Unlimited", features: ["Everything in Professional", "OpenClaw/Hermes AI agent", "WhatsApp integration", "Morning briefings", "30 days priority support"] },
    ],
  },
  {
    id: "local-seo",
    name: "Local SEO",
    tagline: "$149 – $1,000/mo",
    taglineDesc: "One-time audits or monthly management",
    description: "Most local businesses in Bellingham and Burlington have poor Google presence. We fix that — Google Business Profile setup, local citations, review management, and ongoing optimization to help you rank for 'near me' searches.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    features: [
      { title: "Google Business Profile", desc: "Complete setup, optimization, and category selection." },
      { title: "Local Citations", desc: "Consistent NAP across 50+ directory listings." },
      { title: "Review Management", desc: "Strategies to earn and manage customer reviews." },
      { title: "Local Keyword Research", desc: "Target the terms your customers actually search." },
      { title: "On-Page SEO", desc: "Meta tags, headers, and structured data." },
      { title: "Monthly Reporting", desc: "Track rankings, traffic, and lead growth." },
      { title: "Competitor Tracking", desc: "Monitor how you stack up locally." },
      { title: "Ongoing Optimization", desc: "Monthly updates to maintain and improve rankings." },
    ],
    tiers: [
      { name: "GBP Setup", price: "$149", period: "–$299", delivery: "3–5 days", pages: "One-time", features: ["Google Business Profile creation", "Category & attribute optimization", "Hours, photos, description", "Initial post/photo setup"] },
      { name: "Local SEO Audit", price: "$300", period: "–$800", delivery: "1 week", pages: "One-time", features: ["Full SEO audit", "Competitor analysis", "Actionable recommendations", "Priority fix list"] },
      { name: "Monthly SEO Management", price: "$300", period: "–$1,000/mo", delivery: "Ongoing", pages: "Monthly", features: ["Citation building", "Review monitoring", "Ranking reports", "Monthly optimizations"] },
    ],
  },
  {
    id: "ai-agents",
    name: "AI Agent Deployment",
    tagline: "$299 – $799",
    taglineDesc: "One-time setup, no monthly software fees",
    description: "Deploy a private OpenClaw or Hermes AI assistant on your own hardware — Mac Mini or Linux NUC. It connects to your email, calendar, WhatsApp or Slack, and runs automations while you sleep. One-time setup cost. No monthly subscription for the agent itself.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    features: [
      { title: "Private & Local", desc: "Runs on your hardware. Your data never leaves your office." },
      { title: "Email & Calendar", desc: "Reads inbox, drafts replies, checks your schedule." },
      { title: "WhatsApp & Slack", desc: "AI that communicates through channels you already use." },
      { title: "Morning Briefings", desc: "Wake up to a summary of the day ahead." },
      { title: "Automated Reports", desc: "Inventory alerts, KPI dashboards, scheduled digests." },
      { title: "Human in the Loop", desc: "AI drafts first, you approve before anything external sends." },
      { title: "Hardware Available", desc: "Can include Mac Mini or NUC for $450–$700." },
      { title: "30 Days Support", desc: "Priority support included for 30 days post-deployment." },
    ],
    tiers: [
      { name: "Starter Agent", price: "$299", period: "one-time", delivery: "2–3 days", pages: "Setup + 1 automation", features: ["Email monitoring", "Calendar integration", "Morning briefing setup", "Basic reporting"] },
      { name: "Business Agent", price: "$499", period: "one-time", delivery: "3–5 days", pages: "Setup + 3 automations", features: ["WhatsApp or Slack integration", "3 custom automations", "Report templates", "Inventory monitoring"] },
      { name: "Premium Agent", price: "$799", period: "one-time", delivery: "5–7 days", pages: "Full deployment", features: ["All Business Agent features", "5+ custom automations", "Multi-channel integration", "Advanced AI workflows", "30 days priority support"] },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/fenn_suit.jpg" alt="Meridian AI" className="w-9 h-9 rounded-lg object-cover shadow-sm" />
            <span className="font-bold text-xl text-gray-900">Meridian AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Back to Home</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-200 font-semibold uppercase tracking-wider text-sm mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Design, Local SEO & AI — In One Place</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            One vendor, full stack, built for local businesses in Bellingham and Burlington, WA.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, idx) => (
        <section key={service.id} id={service.id} className={`py-20 px-6 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-brand-600">{service.tagline}</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">{service.taglineDesc}</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map(({ title, desc }) => (
                    <div key={title} className="flex gap-3">
                      <span className="text-brand-500 text-lg flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
                        <p className="text-gray-500 text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image + Pricing */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <img src={service.image} alt={service.name} className="w-full h-64 object-cover rounded-xl mb-8 shadow-md" />

                {/* Pricing Tiers */}
                <div className="space-y-4">
                  {service.tiers.map((tier) => (
                    <div key={tier.name} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900">{tier.name}</h3>
                          <p className="text-sm text-gray-500">{tier.delivery}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-brand-600">{tier.price}</span>
                          {tier.period && <span className="text-sm text-gray-400 ml-1">{tier.period}</span>}
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {tier.features.map((f) => (
                          <li key={f} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-brand-500 flex-shrink-0">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-brand-700 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-brand-100 mb-8">Send us a message and we&apos;ll get back to you within 2 hours with a custom proposal.</p>
          <a
            href="mailto:hello@meridianai.co?subject=Service%20Inquiry&body=Hi%20Meridian%20AI%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20services.%0A%0AMy%20business%3A%20%0A%0AWhat%20service(s)%20are%20you%20interested%20in%3F%20Web%20Design%20%7C%20Local%20SEO%20%7C%20AI%20Agents%0A%0A"
            className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold px-8 py-4 rounded-lg hover:bg-brand-50 transition-colors"
          >
            Email Us — hello@meridianai.co →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <Link href="/" className="hover:text-white transition-colors">← Back to Home</Link>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="mt-4 text-brand-400">© {new Date().getFullYear()} Meridian AI LLC. Bellingham, WA + Burlington, WA</p>
        </div>
      </footer>
    </main>
  );
}