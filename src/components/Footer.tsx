import { Car, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-off-white py-12 border-t border-charcoal border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-deep-teal" />
              <span className="text-2xl font-bold text-charcoal">OEMS</span>
            </div>
            <p className="text-charcoal opacity-70">
              Your trusted partner for smart and fast transportation
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#safety" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#contact" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#terms" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-charcoal opacity-70 hover:text-deep-teal transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal border-opacity-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-charcoal opacity-70">
              © 2025 OEMS. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-deep-teal text-white flex items-center justify-center transition-all hover:bg-cool-mint hover:text-charcoal hover:shadow-mint"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-deep-teal text-white flex items-center justify-center transition-all hover:bg-cool-mint hover:text-charcoal hover:shadow-mint"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-deep-teal text-white flex items-center justify-center transition-all hover:bg-cool-mint hover:text-charcoal hover:shadow-mint"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-deep-teal text-white flex items-center justify-center transition-all hover:bg-cool-mint hover:text-charcoal hover:shadow-mint"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
