import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-deep-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Privacy <span className="text-deep-teal">Policy</span>
          </h1>
          <p className="text-lg text-charcoal opacity-80">
            Last updated: January 15, 2025
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-charcoal mb-4">1. Information We Collect</h2>
            <p className="text-charcoal mb-4 leading-relaxed">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-charcoal space-y-2">
              <li>Name, email address, phone number, and payment information</li>
              <li>Profile information including photo and preferences</li>
              <li>Location data when you use our services</li>
              <li>Trip history and feedback</li>
              <li>Communications with customer support</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mb-4">2. How We Use Your Information</h2>
            <p className="text-charcoal mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-charcoal space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect and prevent fraudulent transactions</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mb-4">3. Information Sharing</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              We share your information with third parties only in the following circumstances: with your consent, with service providers who perform services on our behalf, to comply with legal obligations, or to protect rights and safety. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">4. Location Information</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              We collect precise location data when you use our app to provide transportation services. You can disable location services through your device settings, but this will limit your ability to use certain features of our service.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">5. Data Security</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">6. Your Rights</h2>
            <p className="text-charcoal mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-charcoal space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mb-4">7. Children's Privacy</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              Our services are not directed to children under 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">8. Contact Us</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@oems.com" className="text-deep-teal hover:text-cool-mint">privacy@oems.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/legal/terms" className="px-6 py-3 text-deep-teal border-2 border-deep-teal rounded-xl font-semibold transition-all hover:bg-cool-mint text-center">
                Terms of Service
              </Link>
              <Link to="/legal/cookies" className="px-6 py-3 text-deep-teal border-2 border-deep-teal rounded-xl font-semibold transition-all hover:bg-cool-mint text-center">
                Cookie Policy
              </Link>
              <Link to="/support" className="px-6 py-3 bg-deep-teal text-white rounded-xl font-semibold transition-all hover:shadow-mint text-center">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
