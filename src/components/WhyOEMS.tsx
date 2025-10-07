import { Zap, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description: 'Get picked up in minutes with our efficient dispatch system',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Background checked drivers and real-time ride tracking',
  },
  {
    icon: Star,
    title: 'Premium Experience',
    description: 'Clean vehicles, professional drivers, and exient Service',
  },
];

export default function WhyOEMS() {
  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal text-center mb-16">
          Why OEMS?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover-lift shadow-lg"
            >
              <div className="w-16 h-16 bg-cool-mint rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-deep-teal" />
              </div>
              <h3 className="text-2xl font-bold text-deep-teal mb-4">
                {feature.title}
              </h3>
              <p className="text-charcoal text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
