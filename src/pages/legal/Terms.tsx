import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 text-deep-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Terms of <span className="text-deep-teal">Service</span>
          </h1>
          <p className="text-lg text-charcoal opacity-80">
            Last updated: January 15, 2025
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              By accessing and using OEMS services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">2. Use of Service</h2>
            <p className="text-charcoal mb-4 leading-relaxed">
              OEMS provides a technology platform that enables users to arrange and schedule transportation services with independent third-party providers of such services.
            </p>
            <ul className="list-disc pl-6 mb-6 text-charcoal space-y-2">
              <li>You must be at least 18 years old to use OEMS services</li>
              <li>You must provide accurate and complete registration information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You agree not to use the service for illegal purposes</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mb-4">3. User Accounts</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">4. Payment Terms</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              Payment for services is due at the time of booking or upon completion of the ride. We accept various payment methods including credit cards, debit cards, and digital wallets. All fees are non-refundable except as required by law or as explicitly stated in our cancellation policy.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">5. Cancellation Policy</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              Rides may be cancelled free of charge within 2 minutes of booking. Cancellations made after this period may incur a cancellation fee. Drivers may also cancel rides in accordance with our driver terms.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">6. Limitation of Liability</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              OEMS shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service. We do not guarantee the availability, quality, or safety of transportation services provided by third-party drivers.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">7. Modifications to Service</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">8. Contact Information</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@oems.com" className="text-deep-teal hover:text-cool-mint">legal@oems.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/legal/privacy" className="px-6 py-3 text-deep-teal border-2 border-deep-teal rounded-xl font-semibold transition-all hover:bg-cool-mint text-center">
                Privacy Policy
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
