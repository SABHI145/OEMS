import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingDialog from './components/BookingDialog';
import WhyOEMS from './components/WhyOEMS';
import TrackingSection from './components/TrackingSection';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <Hero onBookRide={() => setIsBookingOpen(true)} />
      <WhyOEMS />
      <TrackingSection />
      <Testimonials />
      <CTABanner />
      <Footer />
      <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
