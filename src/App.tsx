import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Abordagem from './pages/Abordagem';
import { usePageTracking } from './hooks/usePageTracking';

function AppContent() {
  usePageTracking();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.slice(1);

    // Wait for route content to render before attempting to scroll.
    requestAnimationFrame(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, [location.pathname, location.hash]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abordagem" element={<Abordagem />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}