
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatePage from './pages/Create';
import ComponentsPage from './pages/Components';
import PricingPage from './pages/Pricing';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Generic placeholder for other routes
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="max-w-[1440px] mx-auto px-6 py-32 text-center min-h-[60vh]">
    <h1 className="text-5xl font-bold mb-6">{title}</h1>
    <p className="text-white/40 text-xl">Coming soon. We are building the best marketplace for Aura users.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/templates" element={<Home />} /> {/* Reuse home layout for simplicity in this demo */}
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/assets" element={<PlaceholderPage title="Assets Marketplace" />} />
            <Route path="/learn" element={<PlaceholderPage title="Learn & Docs" />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/changelog" element={<PlaceholderPage title="Changelog" />} />
            <Route path="/sign-in" element={<PlaceholderPage title="Sign In" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
