import { useNavigate } from 'react-router-dom';
import { Calendar, Heart, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import SplitSection from '../components/SplitSection';
import Footer from '../components/Footer';
import { CONTACT_INFO } from '../constants/contact';
import fundoImg from '../assets/fundoInicio.jpeg';
import foto from '../assets/foto.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* SECÇÃO HERO */}
      <section id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <img 
          src={fundoImg} 
          alt="Consultório acolhedor" 
          className="hero-bg"
        />
        <div className="container hero-content">
          <div className="hero-text-box">
            <span className="badge">Terapia Online & Presencial</span>
            <h1 className="hero-title">
              O cuidado também pode abrir caminhos de transformação.
            </h1>
            <p className="hero-description">
              Um espaço seguro para explorar suas emoções com escuta, presença e cuidado.
            </p>
            <div className="hero-actions">
              <Button onClick={() => window.open(CONTACT_INFO.whatsapp, "_blank")} variant="primary">Agendar Sessão</Button>
              <Button variant="outline" onClick={() => navigate('/abordagem')}>A Minha Abordagem</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECÇÃO SOBRE */}
      <SplitSection
        id="sobre"
        imageSrc={foto}
        title="Olá, sou a Waldirene!"
        subtitle="Quem Sou"
      >
        <p>
          Sinta-se muito bem vindo(a) por aqui! Será um prazer te acompanhar em sua trajetória. Com base na Gestalt-terapia ofereço atendimentos a adultos e idosos em um ambiente seguro, fundamentado na empatia, escuta ativa e acolhimento genuíno. Na psicoterapia, caminhamos juntos para ampliar a consciência sobre quem você é e sobre o que se apresenta no seu aqui e agora, favorecendo um contato mais claro e verdadeiro consigo mesmo(a).
        </p>
        <p>
          Acredito que cada pessoa traz consigo uma história única, repleta de desafios pessoais e também apresenta um potencial extraordinário de crescimento. A psicoterapia pode ser um caminho para reconhecer suas necessidades, fortalecer sua autonomia e descobrir novas formas de viver com mais autenticidade e sentido.
        </p>
      </SplitSection>

      {/* SECÇÃO DE CITAÇÃO */}
      <section className="highlight-banner">
        <div className="container">
          <Heart className="highlight-icon" size={60} />
          <h2 className="highlight-text">
            “O terapeuta não é aquele que cura. O terapeuta é aquele que cuida.<br />
            E quando a pessoa se sente cuidada, ela se cura.”
          </h2>
          <p className="quote-author">— Jorge Ponciano</p>
          <div className="highlight-divider"></div>
        </div>
      </section>

      {/* SECÇÃO SERVIÇOS */}
      <section id="servicos" className="services">
        <div className="container">
          <div className="services-header">
            <span className="subtitle">Áreas de Atuação.</span>
            <h2 className="section-title">Como Posso Ajudar</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <Heart className="icon" size={48} />
              <h3>Terapia Individual</h3>
              <p>Atendimento à adultos (18+).</p>
            </div>
            <div className="service-card featured">
              <Calendar className="icon" size={48} />
              <h3>Terapia Presencial</h3>
              <p>Encontros presenciais em ambiente acolhedor, com escuta ativa, sigilo e foco nas suas necessidades atuais.</p>
            </div>
            <div className="service-card">
              <MessageCircle className="icon" size={48} />
              <h3>Consultas on-line</h3>
              <p>Atendimento psicológico no conforto do seu lar, com total sigilo e segurança.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
