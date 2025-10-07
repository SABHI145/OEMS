import { MapPin } from 'lucide-react';

interface HeroProps {
  onBookRide: () => void;
}

export default function Hero({ onBookRide }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
              Your Ride,<br />
              <span className="text-deep-teal">Smarter & Faster</span>
            </h1>
            <p className="text-xl text-charcoal opacity-80">
              Experience seamless travel with OEMS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onBookRide}
                className="px-8 py-4 bg-deep-teal text-white rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105"
              >
                Book a Ride
              </button>
              <button className="px-8 py-4 border-2 border-deep-teal text-deep-teal rounded-xl font-semibold text-lg transition-all hover:bg-cool-mint hover:border-cool-mint hover:shadow-mint">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE + FLOATING ICONS */}
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                
                {/* Floating MapPin icons */}
                <div className="absolute top-0 right-10 w-12 h-12 bg-cool-mint rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <MapPin className="w-6 h-6 text-deep-teal" />
                </div>
                <div
                  className="absolute top-32 left-0 w-10 h-10 bg-cool-mint rounded-full flex items-center justify-center animate-pulse shadow-lg"
                  style={{ animationDelay: '0.5s' }}
                >
                  <MapPin className="w-5 h-5 text-deep-teal" />
                </div>

                {/* Your static taxi image */}
                <img
                  src="src/components/public/assets/my_taxi.png"   // place your image inside /public/assets/
                  alt="Taxi"
                  className="w-full h-auto drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        /* Keep icons pulsing */
        .animate-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
