import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';

// Import pages
import DownloadPage from './pages/Download';
import Security from './pages/Security';
import AboutUs from './pages/AboutUs';
import Support from './pages/Support';
import NotFoundPage from './pages/NotFound';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop ';
import PageLoader from './components/PageLoader';

function App() {


  return (
    <Router>
      <ScrollToTop />
      <PageLoader />
      <div className="App bg-voxsy-black min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Download />
              </>
            }
          />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
