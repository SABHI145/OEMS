import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cookie className="w-16 h-16 text-deep-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Cookie <span className="text-deep-teal">Policy</span>
          </h1>
          <p className="text-lg text-charcoal opacity-80">
            Last updated: January 15, 2025
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-charcoal mb-4">What Are Cookies?</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website or use our app. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">Types of Cookies We Use</h2>

            <h3 className="text-2xl font-bold text-deep-teal mb-3">Essential Cookies</h3>
            <p className="text-charcoal mb-6 leading-relaxed">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure access to your account, and booking rides. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-2xl font-bold text-deep-teal mb-3">Performance Cookies</h3>
            <p className="text-charcoal mb-6 leading-relaxed">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works and enhance user experience.
            </p>

            <h3 className="text-2xl font-bold text-deep-teal mb-3">Functionality Cookies</h3>
            <p className="text-charcoal mb-6 leading-relaxed">
              These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
            </p>

            <h3 className="text-2xl font-bold text-deep-teal mb-3">Advertising Cookies</h3>
            <p className="text-charcoal mb-6 leading-relaxed">
              These cookies are used to deliver advertisements that are relevant to you and your interests. They also help us measure the effectiveness of advertising campaigns.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">Managing Cookies</h2>
            <p className="text-charcoal mb-4 leading-relaxed">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 mb-6 text-charcoal space-y-2">
              <li>Most browsers allow you to refuse or accept cookies</li>
              <li>You can delete cookies already stored on your device</li>
              <li>You can set your browser to notify you when cookies are being sent</li>
              <li>You can use our cookie consent tool to manage your preferences</li>
            </ul>

            <h2 className="text-3xl font-bold text-charcoal mb-4">Third-Party Cookies</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              We work with third-party service providers who may also set cookies on your device when you use our services. These include analytics providers, advertising networks, and payment processors. We do not control these third-party cookies.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">Updates to This Policy</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Please check this page periodically for updates.
            </p>

            <h2 className="text-3xl font-bold text-charcoal mb-4">Contact Us</h2>
            <p className="text-charcoal mb-6 leading-relaxed">
              If you have questions about our use of cookies, please contact us at <a href="mailto:privacy@oems.com" className="text-deep-teal hover:text-cool-mint">privacy@oems.com</a>
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/legal/terms" className="px-6 py-3 text-deep-teal border-2 border-deep-teal rounded-xl font-semibold transition-all hover:bg-cool-mint text-center">
                Terms of Service
              </Link>
              <Link to="/legal/privacy" className="px-6 py-3 text-deep-teal border-2 border-deep-teal rounded-xl font-semibold transition-all hover:bg-cool-mint text-center">
                Privacy Policy
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
