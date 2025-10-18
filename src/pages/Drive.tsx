import { IndianRupee, Clock, Shield, TrendingUp, Users, Award } from 'lucide-react';

const benefits = [
  { icon: IndianRupee, title: 'Competitive Earnings', description: 'Make up to ₹2,000+ per week with flexible schedules' },
  { icon: Clock, title: 'Flexible Hours', description: 'Drive when you want, as much as you want' },
  { icon: Shield, title: 'Insurance Coverage', description: 'Full protection while driving with OEMS' },
  { icon: TrendingUp, title: 'Weekly Bonuses', description: 'Extra earnings for completing trip milestones' },
  { icon: Users, title: 'Driver Community', description: 'Join thousands of satisfied driver-partners' },
  { icon: Award, title: 'Recognition Program', description: 'Top drivers get exclusive perks and rewards' },
];

const requirements = [
  'Valid driver\'s license (2+ years)',
  'Clean driving record',
  'Vehicle 2015 or newer',
  'Pass background check',
  'Proof of insurance',
  'Minimum age 21 years',
];

const onboardingSteps = [
  { step: '1', title: 'Apply Online', description: 'Fill out a simple application form' },
  { step: '2', title: 'Background Check', description: 'Complete our safety verification process' },
  { step: '3', title: 'Vehicle Inspection', description: 'Get your car checked at our center' },
  { step: '4', title: 'Start Earning', description: 'Accept rides and start making money' },
];

export default function Drive() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
                Drive with <span className="text-deep-teal">OEMS</span>
              </h1>
              <p className="text-xl text-charcoal opacity-80 mb-8">
                Turn your car into an income source. Join thousands of drivers earning on their own schedule.
              </p>
              <button className="px-8 py-4 bg-deep-teal text-white rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105">
                Sign Up to Drive
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-deep-teal mb-4">Earnings Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-charcoal block mb-2">Hours per week</label>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    defaultValue="40"
                    className="w-full accent-deep-teal"
                  />
                  <div className="flex justify-between text-sm text-charcoal opacity-70">
                    <span>10h</span>
                    <span>60h</span>
                  </div>
                </div>
                <div className="bg-cool-mint bg-opacity-30 rounded-xl p-6 text-center">
                  <p className="text-sm text-charcoal opacity-80 mb-2">Estimated Weekly Earnings</p>
                  <p className="text-4xl font-bold text-deep-teal">₹5,600</p>
                  <p className="text-sm text-charcoal opacity-70 mt-2">Based on average rates in your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Why Drive with OEMS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-off-white rounded-2xl p-8 hover-lift shadow-lg">
                <div className="w-16 h-16 bg-cool-mint rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-deep-teal" />
                </div>
                <h3 className="text-2xl font-bold text-deep-teal mb-4">{benefit.title}</h3>
                <p className="text-charcoal text-lg leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Getting Started</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {onboardingSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-deep-teal text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-3">{item.title}</h3>
                <p className="text-charcoal opacity-80">{item.description}</p>
                {index < onboardingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-cool-mint transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-6">Driver Requirements</h2>
          <p className="text-xl text-charcoal opacity-80 text-center mb-12">
            Make sure you meet these basic requirements before applying
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center bg-off-white rounded-xl p-4">
                <div className="w-8 h-8 bg-cool-mint rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-deep-teal font-bold">✓</span>
                </div>
                <p className="text-charcoal text-lg">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-deep-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Join OEMS today and become part of our driver community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cool-mint text-charcoal rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105">
              Apply Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all hover:bg-white hover:text-deep-teal">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
