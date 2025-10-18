import { useState } from 'react';
import Hero from '../components/Hero';
import BookingDialog from '../components/BookingDialog';
import WhyOEMS from '../components/WhyOEMS';
import TrackingSection from '../components/TrackingSection';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Hero onBookRide={() => setIsBookingOpen(true)} />
      <WhyOEMS />
      <TrackingSection />
      <Testimonials />
      <CTABanner />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
