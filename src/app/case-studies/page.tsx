import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Case Studies — Meridian AI",
  description: "See how Meridian AI has helped real businesses — restaurants, dental practices, and more — grow with better websites, local SEO, and AI automation.",
};

const caseStudies = [
  {
    slug: "bettys-bakery",
    title: "Betty's Bakery",
    industry: "Restaurant & Cafe",
    location: "Bellingham, WA",
    summary: "Went from missing catering orders every week to an AI assistant that catches everything. Morning inventory briefings now go out automatically, and the owner regained 3 hours per week.",
    challenge: "Betty's Bakery was losing catering orders because phone calls were missed during busy morning shifts. The owner spent hours each day manually checking inventory and following up on orders.",
    solution: "We deployed a Hermes AI agent that monitors the inbox for catering inquiries, drafts responses for approval, and sends morning inventory reports. It connects to their Google Sheets for real-time stock tracking.",
    results: [
      "3 hours saved per week on manual tasks",
      "Zero missed catering inquiries",
      "Morning briefings delivered automatically at 6am",
      "Google Sheets inventory updated in real-time",
    ],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    services: ["AI Agent Deployment", "Google Sheets Integration", "Email Automation"],
    quote: "The morning inventory briefing alone saved us 3 hours a week. The AI drafts responses to catering inquiries and I just approve them — nothing slips through anymore.",
    author: "Betty Chen",
    role: "Owner, Betty's Bakery",
  },
  {
    slug: "bellingham-family-dental",
    title: "Bellingham Family Dental",
    industry: "Dental Practice",
    location: "Bellingham, WA",
    summary: "Patient intake streamlined with AI-powered image recognition and automated appointment reminders. The practice saw a 40% reduction in missed appointments.",
    challenge: "The front desk was overwhelmed with calls, especially new patient intake forms that required back-and-forth calls to clarify insurance information. Missed appointments were costing the practice thousands monthly.",
    solution: "We built a new patient-friendly website with online intake forms, implemented an AI agent that handles appointment reminders via SMS and email, and set up automated follow-ups for outstanding treatment plans.",
    results: [
      "40% reduction in missed appointments",
      "New patient intake time cut by 60%",
      "Online forms replaced 3 hours of phone time daily",
      "Website now ranks #2 for 'dentist Bellingham'",
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    services: ["Website Design", "Local SEO", "Patient Intake Automation", "Google Business Profile"],
    quote: "Our Google ranking improved within 6 weeks. New patients are finding us through search instead of relying on referrals. The online intake forms have been a game changer for our front desk.",
    author: "Dr. Amanda Chen",
    role: "Owner, Bellingham Family Dental",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/fenn_suit.jpg" alt="Meridian AI" width={36} height={36} className="rounded-lg object-cover shadow-sm" />
            <span className="font-bold text-xl text-gray-900">Meridian AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Back to Home</Link>
            <a href="/#contact" className="bg-brand-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-700 transition-colors text-sm">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-200 font-semibold uppercase tracking-wider text-sm mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Results for Real Businesses</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            See how we&apos;ve helped businesses in Bellingham and Burlington grow with better websites, local SEO, and AI automation.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map(({ slug, title, industry, location, summary, image, services }) => (
              <Link href={`/case-studies/${slug}`} key={slug}>
                <article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-200 cursor-pointer group">
                  <div className="aspect-video overflow-hidden">
                    <Image src={image} alt={title} width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full">{industry}</span>
                      <span className="text-sm text-gray-400">{location}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
                    <p className="text-gray-500 mb-6 leading-relaxed">{summary}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {services.map((s) => (
                        <span key={s} className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">{s}</span>
                      ))}
                    </div>
                    <span className="text-brand-600 font-semibold group-hover:underline">Read full case study →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-6 bg-brand-50 border-t border-brand-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-gray-500 mb-8">Get a free consultation and custom proposal for your project.</p>
          <a
            href="mailto:hello@meridianai.co?subject=Case%20Study%20Inquiry&body=Hi%20Meridian%20AI%2C%0A%0AI%20saw%20your%20case%20studies%20and%20I'm%20interested%20in%20similar%20results.%0A%0AMy%20business%3A%20%0A%0AWhat%20service(s)%20are%20you%20interested%20in%3F"
            className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
          >
            Let&apos;s Talk →
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
          <p className="mt-4 text-brand-400">© {new Date().getFullYear()} Meridian AI LLC. Bellingham, WA · Burlington, WA · Pacific Northwest</p>
        </div>
      </footer>
    </main>
  );
}