import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './App.css';
import Home from './pages/Home';
import Abordagem from './pages/Abordagem';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* HEADER / NAVEGAÇÃO */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <h1>Psicóloga Waldirene Dias</h1>
            <span>Psicologia Clínica</span>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="/#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="/#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="/#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="/#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <div className="nav-cta">
              <Button onClick={() => window.open("https://wa.me/5534999855035", "_blank")} variant="outline">Agendar Sessão</Button>
            </div>
          </nav>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>
      {children}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abordagem" element={<Abordagem />} />
        </Routes>
      </Layout>
    </Router>
  );
}