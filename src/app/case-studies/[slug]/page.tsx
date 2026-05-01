import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudiesData: Record<string, {
  title: string;
  industry: string;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  services: string[];
  quote: string;
  author: string;
  role: string;
}> = {
  "bettys-bakery": {
    title: "Betty's Bakery",
    industry: "Restaurant & Cafe",
    location: "Bellingham, WA",
    summary: "Went from missing catering orders every week to an AI assistant that catches everything. Morning inventory briefings now go out automatically, and the owner regained 3 hours per week.",
    challenge: "Betty's Bakery was losing catering orders because phone calls were missed during busy morning shifts. The owner spent hours each day manually checking inventory and following up on orders. Every missed catering inquiry represented hundreds in lost revenue.",
    solution: "We deployed a Hermes AI agent that monitors the inbox for catering inquiries, drafts responses for approval, and sends morning inventory reports. It connects to their Google Sheets for real-time stock tracking and automatically flags when popular items are running low.",
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
  "bellingham-family-dental": {
    title: "Bellingham Family Dental",
    industry: "Dental Practice",
    location: "Bellingham, WA",
    summary: "Patient intake streamlined with AI-powered image recognition and automated appointment reminders. The practice saw a 40% reduction in missed appointments.",
    challenge: "The front desk was overwhelmed with calls, especially new patient intake forms that required back-and-forth calls to clarify insurance information. Missed appointments were costing the practice thousands monthly. The existing website was outdated and wasn't converting new patients.",
    solution: "We built a new patient-friendly website with online intake forms, implemented an AI agent that handles appointment reminders via SMS and email, and set up automated follow-ups for outstanding treatment plans. Local SEO was optimized to rank for 'dentist Bellingham' and related terms.",
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
};

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudiesData[slug];
  if (!study) return {};
  return {
    title: `${study.title} Case Study — Meridian AI`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudiesData[slug];
  if (!study) notFound();

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
            <Link href="/case-studies" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">All Case Studies</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-bold text-brand-200 uppercase tracking-wider">{study.industry}</span>
            <span className="text-brand-300">•</span>
            <span className="text-sm text-brand-200">{study.location}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{study.title}</h1>
          <p className="text-xl text-brand-100 max-w-2xl">{study.summary}</p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 -mt-8">
        <img src={study.image} alt={study.title} className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg" />
      </div>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Services Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {study.services.map((s) => (
              <span key={s} className="text-sm font-medium text-brand-700 bg-brand-50 px-4 py-2 rounded-full">{s}</span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
                <p className="text-gray-600 leading-relaxed">{study.solution}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Results</h2>
                <ul className="space-y-3">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quote */}
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-6">
                <blockquote className="text-gray-700 italic mb-4">&ldquo;{study.quote}&rdquo;</blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{study.author}</p>
                  <p className="text-sm text-gray-500">{study.role}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Want similar results?</h3>
                <p className="text-sm text-gray-500 mb-4">Get a free consultation for your project.</p>
                <a
                  href="mailto:hello@meridianai.co?subject=Case%20Study%20Inquiry&body=Hi%20Meridian%20AI%2C%0A%0AI%20saw%20your%20case%20study%20for%20{study.title}%20and%20I'm%20interested%20in%20similar%20results.%0A%0AMy%20business%3A%20%0A%0AWhat%20service(s)%20are%20you%20interested%20in%3F"
                  className="block w-full bg-brand-600 text-white text-center font-semibold px-4 py-3 rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Get in Touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/case-studies" className="text-brand-600 font-medium hover:text-brand-700 transition-colors">← All Case Studies</Link>
          <Link href="/" className="text-brand-600 font-medium hover:text-brand-700 transition-colors">Back to Home →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <Link href="/" className="hover:text-white transition-colors">← Back to Home</Link>
          <p className="mt-4 text-brand-400">© {new Date().getFullYear()} Meridian AI LLC. Bellingham, WA + Burlington, WA</p>
        </div>
      </footer>
    </main>
  );
}