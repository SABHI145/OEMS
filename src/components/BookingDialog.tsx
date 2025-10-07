import { useState } from 'react';
import { X, MapPin, Calendar, Clock } from 'lucide-react';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingDialog({ isOpen, onClose }: BookingDialogProps) {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent, isScheduled: boolean) => {
    e.preventDefault();
    console.log('Booking:', { pickup, destination, time, isScheduled });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
      <div className="glass-effect rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal hover:text-deep-teal transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-charcoal mb-6">Book Your Ride</h2>

        <form className="space-y-5">
          <div className="relative">
            <label className="block text-sm font-medium text-charcoal mb-2">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-deep-teal" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup location"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-charcoal mb-2">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cool-mint" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-charcoal mb-2">
              Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-deep-teal" />
              <input
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, false)}
              className="flex-1 px-6 py-3 bg-deep-teal text-white rounded-xl font-semibold transition-all hover:shadow-mint hover:scale-105"
            >
              Book Now
            </button>
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, true)}
              className="flex-1 px-6 py-3 border-2 border-deep-teal text-deep-teal rounded-xl font-semibold transition-all hover:bg-cool-mint hover:border-cool-mint"
            >
              Schedule Ride
            </button>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
