import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-deep-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Contact <span className="text-deep-teal">Us</span>
          </h1>
          <p className="text-xl text-charcoal opacity-80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-off-white rounded-2xl p-8 text-center shadow-lg hover-lift">
              <Phone className="w-12 h-12 text-deep-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Phone</h3>
              <p className="text-charcoal opacity-80 mb-4">Mon-Fri 9am-6pm IST</p>
              <a href="tel:1-800-OEMS-INFO" className="text-deep-teal font-semibold hover:text-cool-mint">
                1-800-OEMS-INFO
              </a>
            </div>

            <div className="bg-off-white rounded-2xl p-8 text-center shadow-lg hover-lift">
              <Mail className="w-12 h-12 text-deep-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Email</h3>
              <p className="text-charcoal opacity-80 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:info@oems.com" className="text-deep-teal font-semibold hover:text-cool-mint">
                info@oems.com
              </a>
            </div>

            <div className="bg-off-white rounded-2xl p-8 text-center shadow-lg hover-lift">
              <MapPin className="w-12 h-12 text-deep-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Office</h3>
              <p className="text-charcoal opacity-80">
                1/30B, Chittaranjan Colony, Baghajatin Colony<br />
                Kolkata, West Bengal 700032
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-off-white rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="media">Media & Press</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-deep-teal text-white rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-deep-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Business Hours</h2>
              <div className="space-y-4 text-white text-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Saturday: 10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Emergency Support</h2>
              <p className="text-xl text-white mb-6">
                For urgent safety concerns or emergency assistance, our 24/7 support team is always available.
              </p>
              <a
                href="tel:1-800-OEMS-911"
                className="inline-block px-8 py-4 bg-cool-mint text-charcoal rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105"
              >
                Call 1-800-OEMS-911
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
