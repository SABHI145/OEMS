import { Briefcase, MapPin, Clock, TrendingUp } from 'lucide-react';

const positions = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build scalable backend systems for our ride-sharing platform',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful, intuitive experiences for millions of users',
  },
  {
    title: 'Safety Operations Manager',
    department: 'Safety',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Lead our 24/7 safety operations and incident response team',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    description: 'Drive growth through creative campaigns and partnerships',
  },
  {
    title: 'Data Scientist',
    department: 'Data',
    location: 'Seattle, WA',
    type: 'Full-time',
    description: 'Analyze data to optimize routing, pricing, and user experience',
  },
  {
    title: 'Customer Support Specialist',
    department: 'Support',
    location: 'Remote',
    type: 'Full-time',
    description: 'Provide exceptional support to riders and drivers',
  },
];

const benefits = [
  { icon: TrendingUp, title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
  { icon: Briefcase, title: 'Stock Options', description: 'Equity in a fast-growing company' },
  { icon: Clock, title: 'Flexible Hours', description: 'Work-life balance is our priority' },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 text-deep-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Join Our <span className="text-deep-teal">Team</span>
          </h1>
          <p className="text-xl text-charcoal opacity-80 max-w-2xl mx-auto">
            Help us revolutionize urban transportation and build the future of mobility
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Why Work at OEMS?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-off-white rounded-2xl p-8 hover-lift shadow-lg text-center">
                <div className="w-16 h-16 bg-cool-mint rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-deep-teal" />
                </div>
                <h3 className="text-2xl font-bold text-deep-teal mb-4">{benefit.title}</h3>
                <p className="text-charcoal text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{position.title}</h3>
                    <p className="text-charcoal opacity-80 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center text-deep-teal">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </span>
                      <span className="flex items-center text-deep-teal">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </span>
                      <span className="flex items-center text-deep-teal">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-deep-teal text-white rounded-xl font-semibold transition-all hover:shadow-mint hover:scale-105 whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-deep-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white opacity-90 mb-10">
            We're always looking for talented people. Send us your resume and let's talk!
          </p>
          <a
            href="mailto:careers@oems.com"
            className="inline-block px-8 py-4 bg-cool-mint text-charcoal rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105"
          >
            Email careers@oems.com
          </a>
        </div>
      </section>
    </div>
  );
}
