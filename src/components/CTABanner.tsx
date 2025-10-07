import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 bg-deep-teal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready for a premium ride?
        </h2>
        <p className="text-xl text-white opacity-90 mb-10">
          Join thousands of satisfied riders and experience transportation reimagined
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-cool-mint text-charcoal rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105 flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all hover:bg-white hover:text-deep-teal">
            Drive with OEMS
          </button>
        </div>
      </div>
    </section>
  );
}
