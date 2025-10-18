import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rides from './pages/Rides';
import Drive from './pages/Drive';
import Safety from './pages/Safety';
import Business from './pages/Business';
import About from './pages/About';
import Support from './pages/Support';
import SignIn from './pages/SignIn';
import JoinNow from './pages/JoinNow';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import Cookies from './pages/legal/Cookies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-off-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/business" element={<Business />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<JoinNow />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/cookies" element={<Cookies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
