import { MapPin } from 'lucide-react';

export default function TrackingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cool-mint to-deep-teal opacity-20"></div>

            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#98FF98', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#008080', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>

              <rect width="400" height="400" fill="url(#mapGradient)" />

              <path
                d="M 50 300 Q 150 200 200 150 T 350 100"
                stroke="#008080"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
                opacity="0.6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-300"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>

              <circle cx="200" cy="150" r="30" fill="#008080" opacity="0.2">
                <animate
                  attributeName="r"
                  from="20"
                  to="50"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.3"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              <g transform="translate(200, 150)">
                <circle r="20" fill="#98FF98" />
                <path
                  d="M 0 -15 L -5 0 L 0 -5 L 5 0 Z"
                  fill="#008080"
                  transform="translate(0, 5)"
                />
              </g>

              <circle cx="50" cy="300" r="12" fill="#98FF98" stroke="#008080" strokeWidth="3" />
              <circle cx="350" cy="100" r="12" fill="#98FF98" stroke="#008080" strokeWidth="3" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-deep-teal via-transparent to-transparent opacity-30"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              Track your driver<br />
              <span className="text-deep-teal">in real time, every time</span>
            </h2>
            <p className="text-xl text-charcoal opacity-80 leading-relaxed">
              Never wonder where your ride is. Our advanced GPS tracking keeps you informed every step of the way.
            </p>
            <button className="px-8 py-4 bg-cool-mint text-charcoal rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
