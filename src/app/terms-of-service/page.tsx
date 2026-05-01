"use client";
import Link from "next/link";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Effective Date: April 29, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to meridianai.co (the &ldquo;Website&rdquo;). Meridian AI LLC (&ldquo;Meridian AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides the Website and related services subject to these Terms of Service (&ldquo;Terms&rdquo;).
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By accessing or using our Website or services, you (&ldquo;you,&rdquo; &ldquo;user,&rdquo; or &ldquo;visitor&rdquo;) agree to be bound by these Terms. If you do not agree to these Terms, do not use the Website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Meridian AI provides digital marketing services including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Web design and development</li>
              <li>Local SEO (search engine optimization)</li>
              <li>AI Agent deployment (Hermes) — on-premise AI assistant services</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We also provide information about our company and services through the Website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use the Website only for lawful purposes. You shall not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Transmit any harmful code, viruses, or disruptive content</li>
              <li>Interfere with the Website&apos;s operation or impose unreasonable load on our infrastructure</li>
              <li>Use automated tools to scrape or harvest data from the Website without permission</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Our Content</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              All content on this Website, including text, graphics, logos, images, and software, is owned by Meridian AI or its licensors and is protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Trademarks</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              &ldquo;Meridian AI,&rdquo; &ldquo;Hermes,&rdquo; and related logos are trademarks of Meridian AI LLC. You may not use our trademarks without prior written permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Limited License</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, revocable license to access and use the Website for informational purposes only. This license does not include any commercial use, modification, or distribution.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 No-Framing</h3>
            <p className="text-gray-600 leading-relaxed">
              You may not create a browser, border, or other environment around our content without our written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. AI Services and Disclosures</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 AI Agent Services</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our Hermes AI Agent is an on-premise AI system that operates on your hardware. We provide deployment and configuration services but do not guarantee uninterrupted or error-free operation.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 AI Output Disclaimer</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              AI systems may generate inaccurate, incomplete, or unexpected outputs. <strong>YOU ARE SOLELY RESPONSIBLE FOR REVIEWING, VERIFYING, AND APPROVING ALL AI-GENERATED CONTENT BEFORE USE.</strong> Meridian AI is not liable for any damages arising from reliance on AI-generated outputs.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Bot/AI Disclosure</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              When interacting with our AI systems, you will be informed that you are communicating with an AI assistant. If you do not wish to interact with an AI, you may request human assistance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.4 Not Professional Advice</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI services and website content do not constitute professional, medical, legal, financial, or other expert advice. Consult a qualified professional before making decisions based on information provided by our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links and Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Website may contain links to third-party websites or services not owned or controlled by Meridian AI. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of our Website is also governed by our Privacy Policy, which is incorporated by reference. Please review our Privacy Policy at <Link href="/privacy-policy" className="text-brand-600 hover:underline">meridianai.co/privacy-policy</Link>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Payment terms for our services are as specified in the applicable Master Services Agreement or Statement of Work. Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Invoices are due within thirty (30) days</li>
              <li>Late payments are subject to a service charge of 1.5% per month</li>
              <li>Services may be suspended for non-payment</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              THE WEBSITE AND SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-600 leading-relaxed">
              WE DO NOT WARRANT THAT: (THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE; ANY ERRORS OR DEFECTS WILL BE CORRECTED; THE WEBSITE IS FREE OF VIRUSES OR HARMFUL COMPONENTS.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MERIDIAN AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF THE WEBSITE OR SERVICES.
            </p>
            <p className="text-gray-600 leading-relaxed">
              OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE FEES PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You shall defend, indemnify, and hold harmless Meridian AI and its officers, directors, employees, and agents from any claims, damages, or expenses arising from: (a) your violation of these Terms; (b) your misuse of the Website or services; (c) any false or unlawful conduct.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may modify these Terms at any time by posting updated terms on this page with a new &ldquo;Effective Date.&rdquo; Your continued use of the Website after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your access to the Website immediately, without prior notice, for any reason, including breach of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by the laws of the State of Washington, without regard to conflicts of law principles. Any disputes shall be resolved in the courts of Washington State.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Dispute Resolution</h2>
            <p className="text-gray-600 leading-relaxed">
              Any dispute arising from these Terms or your use of the Website shall first be attempted to be resolved through good-faith negotiation. If not resolved within thirty (30) days, either party may pursue other legal remedies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Severability</h2>
            <p className="text-gray-600 leading-relaxed">
              If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
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