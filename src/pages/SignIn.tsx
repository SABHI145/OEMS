import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Chrome } from 'lucide-react';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center py-32 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Welcome <span className="text-deep-teal">Back</span>
          </h1>
          <p className="text-lg text-charcoal opacity-80">
            Sign in to continue your journey with OEMS
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-deep-teal" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-deep-teal" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deep-teal focus:outline-none transition-colors bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-deep-teal border-gray-300 rounded focus:ring-deep-teal"
                />
                <span className="ml-2 text-sm text-charcoal">Remember me</span>
              </label>
              <a href="#" className="text-sm text-deep-teal hover:text-cool-mint transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-deep-teal text-white rounded-xl font-semibold text-lg transition-all hover:shadow-mint hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-charcoal opacity-70">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 border-2 border-gray-300 rounded-xl font-semibold text-charcoal transition-all hover:border-deep-teal hover:bg-cool-mint flex items-center justify-center gap-3"
          >
            <Chrome className="w-5 h-5" />
            Sign in with Google
          </button>

          <p className="text-center mt-6 text-charcoal">
            Don't have an account?{' '}
            <Link to="/join" className="text-deep-teal font-semibold hover:text-cool-mint transition-colors">
              Join Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
