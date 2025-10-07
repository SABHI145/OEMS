see is this that ? import { MapPin } from 'lucide-react';

interface HeroProps {
  onBookRide: () => void;
}

export default function Hero({ onBookRide }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

          <div className="relative h-96 lg:h-[500px] animate-float">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-10 right-10 w-12 h-12 bg-cool-mint rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <MapPin className="w-6 h-6 text-deep-teal" />
                </div>
                <div className="absolute top-32 left-10 w-10 h-10 bg-cool-mint rounded-full flex items-center justify-center animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <MapPin className="w-5 h-5 text-deep-teal" />
                </div>

                <svg viewBox="0 0 400 300" className="w-full drop-shadow-2xl">
                  <defs>
                    <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#008080', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#006666', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>

                  <g transform="translate(50, 80)">
                    <rect x="20" y="40" width="280" height="80" rx="15" fill="url(#carGradient)" />

                    <rect x="40" y="20" width="100" height="40" rx="8" fill="#98FF98" opacity="0.3" />
                    <rect x="150" y="20" width="130" height="40" rx="8" fill="#98FF98" opacity="0.3" />

                    <circle cx="90" cy="130" r="25" fill="#36454F" />
                    <circle cx="90" cy="130" r="15" fill="#98FF98" />
                    <circle cx="240" cy="130" r="25" fill="#36454F" />
                    <circle cx="240" cy="130" r="15" fill="#98FF98" />

                    <rect x="100" y="0" width="60" height="15" rx="5" fill="#F4F4F4" />
                    <text x="130" y="12" fontSize="10" fill="#008080" textAnchor="middle" fontWeight="bold">TAXI</text>

                    <circle cx="50" cy="70" r="8" fill="#98FF98" opacity="0.8" />
                    <circle cx="280" cy="70" r="8" fill="#FF6B6B" opacity="0.8" />
                  </g>
                </svg>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
