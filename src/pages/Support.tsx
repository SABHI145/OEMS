import { useState } from 'react';
import { ChevronDown, Mail, Phone, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a ride?',
    answer: 'Simply open the OEMS app, enter your pickup and destination locations, select your preferred ride type, and tap "Book Now". A driver will be assigned to you within minutes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and in-app OEMS credits. Payment is processed automatically at the end of your ride.',
  },
  {
    question: 'How is my ride fare calculated?',
    answer: 'Fares are calculated based on distance, time, ride type, and current demand. You\'ll see an estimated fare before booking, and the final amount after your trip is complete.',
  },
  {
    question: 'Can I cancel my ride?',
    answer: 'Yes, you can cancel your ride through the app. Free cancellation is available within 2 minutes of booking. After that, a small cancellation fee may apply.',
  },
  {
    question: 'What if I left something in the car?',
    answer: 'Go to "My Rides" in the app, select your recent trip, and tap "I lost an item". You can contact your driver directly through the app to arrange item recovery.',
  },
  {
    question: 'How do I contact my driver?',
    answer: 'Once your ride is confirmed, you can call or message your driver directly through the app using our anonymous communication system that protects both parties\' privacy.',
  },
  {
    question: 'Is OEMS available 24/7?',
    answer: 'Yes, OEMS operates 24 hours a day, 7 days a week in all our service areas. You can book a ride anytime you need one.',
  },
  {
    question: 'How do I become a driver?',
    answer: 'Visit our "Drive" page to learn about requirements and benefits. You can apply online, and our team will guide you through the background check and vehicle inspection process.',
  },
  {
    question: 'What safety measures does OEMS have?',
    answer: 'We conduct thorough background checks on all drivers, provide real-time trip tracking, 24/7 safety support, an in-app SOS button, and two-way rating systems. Visit our Safety page for more details.',
  },
  {
    question: 'How do I report a safety concern?',
    answer: 'Tap the SOS button in the app during a ride, or contact our 24/7 safety team at 1-800-OEMS-911. You can also report incidents through "Help" in your ride history.',
  },
];

export default function Support() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support request submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            How Can We <span className="text-deep-teal">Help You?</span>
          </h1>
          <p className="text-xl text-charcoal opacity-80 max-w-2xl mx-auto">
            Find answers to common questions or reach out to our support team
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="tel:1-800-OEMS-911"
              className="bg-off-white rounded-2xl p-6 text-center hover-lift shadow-lg transition-all"
            >
              <Phone className="w-12 h-12 text-deep-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Call Us</h3>
              <p className="text-charcoal opacity-70">1-800-OEMS-911</p>
            </a>
            <a
              href="mailto:support@oems.com"
              className="bg-off-white rounded-2xl p-6 text-center hover-lift shadow-lg transition-all"
            >
              <Mail className="w-12 h-12 text-deep-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Email Us</h3>
              <p className="text-charcoal opacity-70">support@oems.com</p>
            </a>
            <div className="bg-off-white rounded-2xl p-6 text-center hover-lift shadow-lg transition-all cursor-pointer">
              <MessageCircle className="w-12 h-12 text-deep-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Live Chat</h3>
              <p className="text-charcoal opacity-70">Available 24/7</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-off-white rounded-xl shadow-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white transition-colors"
                >
                  <span className="text-lg font-semibold text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-deep-teal flex-shrink-0 transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 text-charcoal leading-relaxed opacity-80 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Still Need Help?</h2>
            <p className="text-xl text-charcoal opacity-80">
              Send us a message and our support team will get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-off-white"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-off-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-off-white"
              >
                <option value="">Select a topic</option>
                <option value="booking">Booking Issues</option>
                <option value="payment">Payment & Billing</option>
                <option value="safety">Safety Concerns</option>
                <option value="driver">Driver Issues</option>
                <option value="lost-item">Lost Item</option>
                <option value="account">Account Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-off-white"
                placeholder="Please describe your issue in detail..."
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
      </section>

      <section className="py-16 bg-deep-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
          <p className="text-xl text-white opacity-90 mb-6">
            Our 24/7 support team is always ready to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-800-OEMS-911"
              className="px-8 py-4 bg-cool-mint text-charcoal rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105"
            >
              Call Support Now
            </a>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all hover:bg-white hover:text-deep-teal">
              Start Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
