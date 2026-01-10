import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';
import { CONTACT_INFO } from '../constants/contact';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo" onClick={handleMenuItemClick}>
            <img src={logo} alt="Logo" className="logo-img" />
            <div className="logo-text">
              <h1>Psicóloga {CONTACT_INFO.name}</h1>
              <span>Psicologia Clínica</span>
            </div>
          </Link>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="/#inicio" onClick={handleMenuItemClick}>Início</a>
            <a href="/#sobre" onClick={handleMenuItemClick}>Sobre</a>
            <a href="/#servicos" onClick={handleMenuItemClick}>Serviços</a>
            <a href="/#contato" onClick={handleMenuItemClick}>Contato</a>
            <div className="nav-cta">
              <Button 
                onClick={() => window.open(CONTACT_INFO.whatsapp, "_blank")} 
                variant="outline"
              >
                Agendar Sessão
              </Button>
            </div>
          </nav>

          <button className="menu-toggle" onClick={handleMenuToggle}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;
