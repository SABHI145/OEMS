import { Car, Clock, IndianRupeeIcon, Shield, Smartphone, MapPin } from 'lucide-react';

const bookingSteps = [
  { icon: Smartphone, title: 'Open App', description: 'Launch OEMS and enter your destination' },
  { icon: MapPin, title: 'Set Location', description: 'Choose pickup and drop-off points' },
  { icon: Car, title: 'Select Ride', description: 'Pick from economy, premium, or luxury options' },
  { icon: Clock, title: 'Get Picked Up', description: 'Driver arrives within minutes' },
];

const comfortFeatures = [
  { icon: Car, title: 'Premium Vehicles', description: 'Clean, well-maintained cars with AC' },
  { icon: Shield, title: 'Professional Drivers', description: 'Vetted, trained, and courteous drivers' },
  { icon: Clock, title: 'Quick Pickup', description: 'Average wait time under 5 minutes' },
];

const pricingPlans = [
  { name: 'Economy', price: '20', features: ['Standard sedan', 'Up to 4 passengers', 'Affordable rates', 'AC included'] },
  { name: 'Premium', price: '40', features: ['Luxury sedan', 'Up to 4 passengers', 'Extra legroom', 'Premium amenities'] },
  { name: 'Luxury', price: '60', features: ['High-end vehicle', 'Up to 4 passengers', 'VIP treatment', 'Complimentary water'] },
];

export default function Rides() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Book Your <span className="text-deep-teal">Perfect Ride</span>
          </h1>
          <p className="text-xl text-charcoal opacity-80 max-w-2xl mx-auto">
            Experience seamless transportation with OEMS. Fast, comfortable, and reliable rides at your fingertips.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative mx-auto w-20 h-20 bg-cool-mint rounded-full flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-deep-teal" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-deep-teal">{step.title}</h3>
                <p className="text-charcoal opacity-80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Premium Comfort</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {comfortFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover-lift shadow-lg">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-6">Transparent Pricing</h2>
          <p className="text-xl text-charcoal opacity-80 text-center mb-16 max-w-2xl mx-auto">
            Choose the ride that fits your needs. All prices are per kilometer with no hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover-lift ${
                  index === 1 ? 'border-2 border-deep-teal' : 'border border-gray-200'
                }`}
              >
                {index === 1 && (
                  <div className="bg-deep-teal text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <IndianRupeeIcon className="w-6 h-6 text-deep-teal" />
                  <span className="text-4xl font-bold text-deep-teal">{plan.price}</span>
                  <span className="text-charcoal opacity-60 ml-2">/km</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-charcoal">
                      <div className="w-5 h-5 bg-cool-mint rounded-full flex items-center justify-center mr-3">
                        <span className="text-deep-teal text-xs">✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    index === 1
                      ? 'bg-deep-teal text-white hover:shadow-mint'
                      : 'border-2 border-deep-teal text-deep-teal hover:bg-cool-mint'
                  }`}
                >
                  Book {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-deep-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Ride?</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Download the OEMS app and get your first ride with a special discount
          </p>
          <button className="px-8 py-4 bg-cool-mint text-charcoal rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105">
            Book Your First Ride
          </button>
        </div>
      </section>
    </div>
  );
}
