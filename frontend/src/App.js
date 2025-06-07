import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import logo from './assets/logo-square.png';
import HomePage from './pages/HomePage';
import ForResearchers from './pages/ForResearchers';
import AboutUs from './pages/AboutUs';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      
      {/* NAVBAR - Same across all pages */}
      <header className="navbar"> 
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Long Live Our Dogs Logo" className="logo-image" />
            <span>Long Live Our Dogs</span>
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            For Pet Owners
          </Link>
          <Link to="/researchers" className={location.pathname === "/researchers" ? "nav-link active" : "nav-link"}>
            For Researchers
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            About Us
          </Link>
          <Link to="/#upload" className="upload-cta-button">
            Upload Records
          </Link>
        </nav>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/researchers" element={<ForResearchers />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {/* FOOTER - Same across all pages */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Long Live Our Dogs. Built with love for dogs and science.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;