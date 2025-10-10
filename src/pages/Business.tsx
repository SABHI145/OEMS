import { useState } from 'react';
import { Building2, Users, BarChart3, Clock, Shield, CreditCard } from 'lucide-react';

const corporateFeatures = [
  { icon: Users, title: 'Employee Rides', description: 'Provide reliable transportation for your entire team' },
  { icon: BarChart3, title: 'Usage Analytics', description: 'Track spending and optimize transportation costs' },
  { icon: Clock, title: 'Priority Booking', description: 'Guaranteed availability for your business needs' },
  { icon: Shield, title: 'Enhanced Safety', description: 'Additional security measures for corporate accounts' },
  { icon: CreditCard, title: 'Centralized Billing', description: 'One invoice for all company rides' },
  { icon: Building2, title: 'Dedicated Support', description: '24/7 business account management team' },
];

const plans = [
  {
    name: 'Starter',
    price: '499',
    description: 'Perfect for small businesses',
    features: ['Up to 50 employees', 'Basic analytics', 'Email support', 'Monthly billing', 'Standard rates'],
  },
  {
    name: 'Professional',
    price: '1,299',
    description: 'Ideal for growing companies',
    features: ['Up to 200 employees', 'Advanced analytics', 'Priority support', 'Flexible billing', '10% discount on rides'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: ['Unlimited employees', 'Custom analytics', 'Dedicated account manager', 'Custom billing terms', '20% discount on rides'],
  },
];

export default function Business() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employees: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-20 h-20 text-deep-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            OEMS for <span className="text-deep-teal">Business</span>
          </h1>
          <p className="text-xl text-charcoal opacity-80 max-w-3xl mx-auto">
            Empower your team with reliable, cost-effective transportation solutions tailored for your business needs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Corporate Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {corporateFeatures.map((feature, index) => (
              <div key={index} className="bg-off-white rounded-2xl p-8 hover-lift shadow-lg">
                <div className="w-16 h-16 bg-cool-mint rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-deep-teal" />
                </div>
                <h3 className="text-2xl font-bold text-deep-teal mb-4">{feature.title}</h3>
                <p className="text-charcoal text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-6">Business Plans</h2>
          <p className="text-xl text-charcoal opacity-80 text-center mb-16 max-w-2xl mx-auto">
            Choose the plan that fits your organization's transportation needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover-lift ${
                  plan.popular ? 'border-2 border-deep-teal ring-4 ring-cool-mint ring-opacity-30' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-deep-teal text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                <p className="text-charcoal opacity-70 mb-4">{plan.description}</p>
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold text-deep-teal">{plan.price}</span>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-deep-teal">${plan.price}</span>
                      <span className="text-charcoal opacity-60 ml-2">/month</span>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-charcoal">
                      <div className="w-5 h-5 bg-cool-mint rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-deep-teal text-xs">✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-deep-teal text-white hover:shadow-mint'
                      : 'border-2 border-deep-teal text-deep-teal hover:bg-cool-mint'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">Partner with OEMS</h2>
            <p className="text-xl text-charcoal opacity-80">
              Ready to transform your company's transportation? Get in touch with our business team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-off-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">Number of Employees</label>
              <select
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
              >
                <option value="">Select range</option>
                <option value="1-50">1-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                placeholder="Tell us about your transportation needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-deep-teal text-white rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105"
            >
              Request Partnership Information
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-deep-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Industry Leaders
          </h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Trusted by over 5,000 businesses worldwide for reliable corporate transportation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-cool-mint" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
