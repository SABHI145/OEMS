import { Shield, Phone, Camera, MapPin, Users, AlertCircle } from 'lucide-react';

const safetyFeatures = [
  { icon: Shield, title: 'Background Checks', description: 'All drivers undergo comprehensive criminal and driving record checks before joining OEMS' },
  { icon: MapPin, title: 'Real-Time Tracking', description: 'Share your trip with friends and family. They can track your journey in real-time' },
  { icon: Camera, title: 'In-App Recording', description: 'Optional audio recording feature for added security during your ride' },
  { icon: Phone, title: '24/7 Support', description: 'Round-the-clock safety support team ready to assist you anytime' },
  { icon: Users, title: 'Two-Way Ratings', description: 'Drivers and riders rate each other, maintaining high community standards' },
  { icon: AlertCircle, title: 'Emergency Button', description: 'One-tap SOS button connects you instantly to emergency services' },
];

const monitoringSteps = [
  { title: 'Trip Monitoring', description: 'Every ride is monitored by our AI-powered safety system' },
  { title: 'Anomaly Detection', description: 'Automatic alerts for unusual route deviations or stops' },
  { title: 'Instant Response', description: 'Safety team responds within seconds to any alerts' },
];

export default function Safety() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-20 h-20 text-deep-teal mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Your Safety is Our <span className="text-deep-teal">Priority</span>
          </h1>
          <p className="text-xl text-charcoal opacity-80 max-w-3xl mx-auto">
            OEMS is committed to providing the safest ride-sharing experience with cutting-edge technology and comprehensive security measures.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-16">Safety Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
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

      <section className="py-20 bg-deep-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Emergency SOS Support</h2>
              <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
                In case of emergency, our SOS button instantly connects you to our safety team and local authorities.
                Your location is automatically shared, ensuring help arrives as quickly as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cool-mint rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-deep-teal font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Press SOS Button</h4>
                    <p className="text-white opacity-80">Accessible from the main ride screen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cool-mint rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-deep-teal font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Instant Alert</h4>
                    <p className="text-white opacity-80">Safety team and authorities are notified</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cool-mint rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-deep-teal font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Help Arrives</h4>
                    <p className="text-white opacity-80">Emergency services dispatched to your location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <Phone className="w-16 h-16 text-deep-teal mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-charcoal mb-2">24/7 Safety Hotline</h3>
                <p className="text-charcoal opacity-70">Always here when you need us</p>
              </div>
              <div className="bg-cool-mint bg-opacity-30 rounded-xl p-6 text-center mb-6">
                <p className="text-3xl font-bold text-deep-teal">1-800-OEMS-911</p>
              </div>
              <div className="space-y-3">
                <button className="w-full py-3 bg-deep-teal text-white rounded-xl font-semibold transition-all hover:shadow-mint">
                  Call Safety Team
                </button>
                <button className="w-full py-3 border-2 border-deep-teal text-deep-teal rounded-xl font-semibold transition-all hover:bg-cool-mint">
                  Report an Incident
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal text-center mb-6">Continuous Monitoring</h2>
          <p className="text-xl text-charcoal opacity-80 text-center mb-16 max-w-3xl mx-auto">
            Our advanced safety system monitors every ride in real-time to ensure your protection from pickup to drop-off.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {monitoringSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-deep-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-4">{step.title}</h3>
                <p className="text-charcoal leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-deep-teal to-cool-mint rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Safety Tips for Riders</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 text-lg">Before Your Ride</h4>
                <ul className="space-y-2 text-white">
                  <li>• Verify driver photo and license plate</li>
                  <li>• Share trip details with friends/family</li>
                  <li>• Wait in a safe, well-lit location</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 text-lg">During Your Ride</h4>
                <ul className="space-y-2 text-white">
                  <li>• Wear your seatbelt at all times</li>
                  <li>• Follow the route on the app</li>
                  <li>• Keep emergency contacts handy</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 text-lg">After Your Ride</h4>
                <ul className="space-y-2 text-white">
                  <li>• Rate your driver honestly</li>
                  <li>• Report any safety concerns</li>
                  <li>• Check for personal belongings</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-xl p-6">
                <h4 className="font-bold text-white mb-3 text-lg">Trust Your Instincts</h4>
                <ul className="space-y-2 text-white">
                  <li>• Don't hesitate to cancel if unsure</li>
                  <li>• Use the SOS button if needed</li>
                  <li>• Contact support for any issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
