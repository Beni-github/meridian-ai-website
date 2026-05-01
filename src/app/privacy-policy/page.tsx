"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-900 text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/fenn_suit.jpg" alt="Meridian AI" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-lg">Meridian AI LLC</span>
          </Link>
          <Link href="/" className="text-sm hover:text-brand-300 transition-colors">← Back to Home</Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Effective Date: April 29, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Meridian AI LLC (&ldquo;Meridian AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (meridianai.co) or use our services.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Please read this Privacy Policy carefully. By using our Website or services, you consent to the practices described herein.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-600 leading-relaxed mb-4">We collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Contact information (name, email address, phone number, business name)</li>
              <li>Communication content (emails, messages, form submissions)</li>
              <li>Project information and business details you share with us</li>
              <li>Payment information (processed through third-party payment providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information Collected Automatically</h3>
            <p className="text-gray-600 leading-relaxed mb-4">When you visit our Website, we may automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website or source</li>
              <li>General geographic location (city/region level)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Cookies and Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to remember your preferences, analyze website traffic, and understand how you found our Website. You may control cookies through your browser settings. Disabling cookies may affect Website functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Process payments and send invoices</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send promotional content (only with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Service providers</strong> who assist us in operating our business (hosting, email, analytics)</li>
              <li><strong>Professional advisors</strong> (attorneys, accountants) when necessary</li>
              <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal information to third parties.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Third-Party Links:</strong> Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your information for as long as necessary to provide our services to you, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location and applicable law, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:hello@meridianai.co" className="text-brand-600 hover:underline">hello@meridianai.co</a>. We will respond within the time required by applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Washington State Residents</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Washington My Health My Data Act (Chapter 19.373 RCW)</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              If we collect any &ldquo;consumer health data&rdquo; as defined under Washington law, we will:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Provide a separate disclosure about such collection</li>
              <li>Obtain consent before collecting or sharing health data</li>
              <li>Honor your rights to access and delete health data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Washington Data Breach Notification</h3>
            <p className="text-gray-600 leading-relaxed">
              In the event of a data breach affecting your personal information, we will notify you as required by RCW 19.255.010.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Website and services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be indicated by a revised &ldquo;Effective Date.&rdquo; We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about this Privacy Policy or to exercise your rights:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 font-medium">Meridian AI LLC</p>
              <p className="text-gray-600">Email: <a href="mailto:hello@meridianai.co" className="text-brand-600 hover:underline">hello@meridianai.co</a></p>
              <p className="text-gray-600">Location: Bellingham, WA</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-brand-400">© {new Date().getFullYear()} Meridian AI LLC. Bellingham, WA + Burlington, WA</p>
        </div>
      </footer>
    </main>
  );
}