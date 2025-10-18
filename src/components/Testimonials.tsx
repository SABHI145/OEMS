import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Rina Patel',
    text: 'This ride-sharing app is fantastic! I always get picked up on time.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    name: 'Nikhil Sharma',
    text: 'Professional drivers and clean cars. OEMS has become my go-to transportation service.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
  {
    name: 'Rahul Verma',
    text: 'Safe, reliable, and affordable. The real-time tracking feature gives me peace of mind.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal text-center mb-16">
          What Our Riders Say
        </h2>

        <div className="relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-deep-teal border-opacity-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-deep-teal"
              />

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-cool-mint text-cool-mint" />
                  ))}
                </div>
                <p className="text-xl text-charcoal mb-4 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="text-lg font-semibold text-deep-teal">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center transition-all hover:bg-cool-mint hover:text-charcoal shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center transition-all hover:bg-cool-mint hover:text-charcoal shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-deep-teal w-8' : 'bg-charcoal opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
