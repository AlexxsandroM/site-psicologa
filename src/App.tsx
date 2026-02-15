import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Abordagem from './pages/Abordagem';
import { usePageTracking } from './hooks/usePageTracking';

function AppContent() {
  usePageTracking();

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