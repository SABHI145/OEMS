import { Target, Heart, Zap, Users } from 'lucide-react';

const mission = {
  icon: Target,
  title: 'Our Mission',
  description: 'To revolutionize urban transportation by providing safe, reliable, and affordable ride-sharing services that connect communities and empower both riders and drivers.',
};

const values = [
  { icon: Heart, title: 'Safety First', description: 'Every decision we make prioritizes the safety and security of our community' },
  { icon: Zap, title: 'Innovation', description: 'We continuously evolve our technology to deliver the best experience' },
  { icon: Users, title: 'Community', description: 'Building strong relationships between riders, drivers, and cities' },
];

const story = [
  { year: '2020', title: 'The Beginning', description: 'OEMS was founded with a vision to transform urban mobility' },
  { year: '2021', title: 'Rapid Growth', description: 'Expanded to 50 cities with over 100,000 active riders' },
  { year: '2022', title: 'Going Global', description: 'Launched international operations in 15 countries' },
  { year: '2023', title: 'Innovation Leader', description: 'Introduced AI-powered safety features and green vehicle options' },
  { year: '2024', title: 'Today', description: 'Serving millions of riders with 500,000+ driver-partners worldwide' },
];

const leadership = [
  { name: 'Sarah Chen', role: 'CEO & Co-Founder', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1' },
  { name: 'Michael Rodriguez', role: 'CTO & Co-Founder', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1' },
  { name: 'Emily Thompson', role: 'Chief Safety Officer', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1' },
  { name: 'David Park', role: 'VP of Operations', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            About <span className="text-deep-teal">OEMS</span>
          </h1>
          <p className="text-xl text-charcoal opacity-80 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make transportation accessible, safe, and sustainable for everyone, everywhere.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-teal to-cool-mint opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <mission.icon className="w-32 h-32 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">{mission.title}</h2>
              <p className="text-xl text-charcoal leading-relaxed opacity-80">
                {mission.description}
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-off-white rounded-2xl p-8 hover-lift shadow-lg">
                <div className="w-16 h-16 bg-cool-mint rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-deep-teal" />
                </div>
                <h3 className="text-2xl font-bold text-deep-teal mb-4">{value.title}</h3>
                <p className="text-charcoal text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Our Story</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cool-mint hidden md:block"></div>
            <div className="space-y-12">
              {story.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover-lift">
                    <h3 className="text-2xl font-bold text-deep-teal mb-3">{milestone.title}</h3>
                    <p className="text-charcoal text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                  <div className="w-24 h-24 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0 z-10">
                    {milestone.year}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-6">Leadership Team</h2>
          <p className="text-xl text-charcoal opacity-80 text-center mb-16 max-w-2xl mx-auto">
            Meet the passionate people driving OEMS forward
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-teal to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{leader.name}</h3>
                <p className="text-deep-teal font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-deep-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <p className="text-5xl font-bold mb-3">50M+</p>
              <p className="text-xl opacity-90">Rides Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-3">500K+</p>
              <p className="text-xl opacity-90">Active Drivers</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-3">200+</p>
              <p className="text-xl opacity-90">Cities Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Join Our Journey</h2>
          <p className="text-xl text-charcoal opacity-80 mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and community.
          </p>
          <button className="px-8 py-4 bg-deep-teal text-white rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105">
            View Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
