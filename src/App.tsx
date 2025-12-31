import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  ArrowRight, 
  Calendar, 
  Heart,
  MessageCircle
} from 'lucide-react';
import './App.css';

// --- COMPONENTES AUXILIARES ---

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

interface SplitSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  reversed?: boolean;
  id?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({ 
  imageSrc, 
  title, 
  subtitle, 
  children, 
  reversed = false, 
  id 
}) => {
  return (
    <section id={id} className={`split-section ${reversed ? 'reversed' : ''}`}>
      <div className="container split-container">
        <div className="split-image-wrapper">
          <img src={imageSrc} alt={title} className="split-image" />
          <div className="image-decorator"></div>
        </div>
        <div className="split-content">
          {subtitle && <span className="subtitle">{subtitle}</span>}
          <h2 className="section-title">{title}</h2>
          <div className="section-text">{children}</div>
          <div className="section-action">
            <a href="#contato" className="learn-more">
              Saber mais <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* HEADER / NAVEGAÇÃO */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <h1>Psicóloga Waldirene Dias</h1>
            <span>Psicologia Clínica</span>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <div className="nav-cta">
              <Button variant="outline">Agendar Sessão</Button>
            </div>
          </nav>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* SECÇÃO HERO */}
      <section id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=2069" 
          alt="Consultório acolhedor" 
          className="hero-bg"
        />
        <div className="container hero-content">
          <div className="hero-text-box">
            <span className="badge">Terapia Online & Presencial</span>
            <h1 className="hero-title">
              O espaço para a sua <span className="italic">cura.</span>
            </h1>
            <p className="hero-description">
              Encontre um lugar seguro para explorar as suas emoções, curar feridas e redescobrir o seu equilíbrio interior.
            </p>
            <div className="hero-actions">
              <Button variant="primary">Agendar Consulta</Button>
              <Button variant="white">A Minha Abordagem</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECÇÃO SOBRE */}
      <SplitSection
        id="sobre"
        imageSrc="./src/assets/foto-2.png"
        title="Olá, sou a Psicologa Waldirene."
        subtitle="Quem Sou"
      >
        <p>
          Olá! Sinta-se muito bem vindo(a) por aqui! Meu nome é Waldirene e será um prazer te acompanhar em sua trajetória. Com base na Gestalt-terapia ofereço atendimentos a adultos e idosos em um ambiente seguro, fundamentado na empatia, escuta ativa e acolhimento genuíno. Juntos, trabalharemos para ampliar a sua consciência sobre quem você é, e o que precisa no aqui e agora, permitindo que o contato consigo mesmo(a) se torne mais claro e verdadeiro. Acredito que cada pessoa traz consigo uma história única, repleta de desafios pessoais e também apresenta um potencial extraordinário de crescimento. O objetivo é capacitar você a se perceber integralmente, honrar suas necessidades e descobrir novas e potentes formas de viver uma vida plena e autêntica.
        </p>
      </SplitSection>

      {/* SECÇÃO DE CITAÇÃO */}
      <section className="highlight-banner">
        <div className="container">
          <Heart className="highlight-icon" size={60} />
          <h2 className="highlight-text">
            "Não somos o que nos aconteceu; somos o que escolhemos tornar-nos."
          </h2>
          <div className="highlight-divider"></div>
        </div>
      </section>

      {/* SECÇÃO SERVIÇOS */}
      <section id="servicos" className="services">
        <div className="container">
          <div className="services-header">
            <span className="subtitle">Áreas de Atuação</span>
            <h2 className="section-title">Como Posso Ajudar</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <Heart className="icon" size={48} />
              <h3>Terapia Individual</h3>
              <p>Trabalho focado em ansiedade, depressão e fortalecimento da autoestima.</p>
            </div>
            <div className="service-card featured">
              <div className="popular-tag">Mais Procurado</div>
              <Calendar className="icon" size={48} />
              <h3>Consultas Online</h3>
              <p>Apoio terapêutico no conforto do seu lar, com total segurança e sigilo.</p>
            </div>
            <div className="service-card">
              <MessageCircle className="icon" size={48} />
              <h3>Terapia de Casal</h3>
              <p>Melhoria da comunicação e mediação de conflitos relacionais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h2>Waldirene Dias</h2>
            <p className="crp-text">Psicóloga Clínica | CRP 04/69765</p>
            <div className="social-links">
              <a href="https://www.instagram.com/wal.dias.psi/" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="waldirene.dias.psi@hotmail.com" aria-label="E-mail"><Mail size={24} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre Mim</a>
            <a href="#servicos">Serviços</a>
            <a href="#contacto">Contato</a>
          </div>

          <div className="footer-contact">
            <h4>Agendamentos</h4>
            <div className="contact-item">
              <Phone size={20} />
              <a href="tel:+5534999855035">(34) 99985-5035</a>
            </div>
            <div className="contact-item">
              <MapPin size={20} />
              <span>R. Santos Dumont, 163 - Jardim Santa Rita</span>
            </div>
            <Button variant="white" className="footer-btn">Mensagem WhatsApp</Button>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Waldirene Dias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}