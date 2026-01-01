
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Eye, 
  Users, 
  Lightbulb, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram 
} from 'lucide-react';
import '../App.css';

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

export default function Abordagem() {
  return (
    <div className="abordagem-page">
      {/* Hero Section com imagem de fundo */}
      <section className="abordagem-hero">
        <div className="abordagem-hero-overlay"></div>
        <img 
          src="./src/assets/logo.png" 
          alt="Gestalt-terapia" 
          className="abordagem-hero-bg"
        />
        <div className="container abordagem-hero-content">
          <span className="badge">Minha Abordagem</span>
          <h1 className="abordagem-hero-title">Gestalt-Terapia</h1>
          <p className="abordagem-hero-subtitle">
            Uma jornada de autoconhecimento e crescimento pessoal
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="abordagem-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Introdução */}
            <div className="content-section">
              <h2>O que é a Gestalt-Terapia?</h2>
              <p>
                A Gestalt-terapia é uma abordagem humanista e existencial que valoriza a experiência única de cada pessoa no momento presente. Desenvolvida por Fritz Perls, Laura Perls e Paul Goodman, esta abordagem acredita que todos nós temos a capacidade de crescer e nos desenvolver de forma saudável quando nos tornamos conscientes de nós mesmos e de nossas relações com o mundo.
              </p>
              <p>
                O termo "Gestalt" vem do alemão e significa "forma" ou "configuração". Na prática terapêutica, refere-se à percepção do todo, à integração de todas as partes da experiência humana: corpo, mente, emoções e espírito.
              </p>
            </div>

            {/* Princípios */}
            <div className="content-section">
              <h2>Princípios Fundamentais</h2>
              <div className="principles-grid">
                <div className="principle-card">
                  <div className="principle-icon">
                    <Eye size={32} />
                  </div>
                  <h3>Aqui e Agora</h3>
                  <p>
                    Foco na experiência presente. O que você está sentindo, pensando e vivenciando neste momento é o ponto de partida para a transformação.
                  </p>
                </div>

                <div className="principle-card">
                  <div className="principle-icon">
                    <Heart size={32} />
                  </div>
                  <h3>Awareness (Consciência)</h3>
                  <p>
                    Desenvolvimento da consciência de si mesmo, dos outros e do ambiente. Perceber-se integralmente é o caminho para a mudança autêntica.
                  </p>
                </div>

                <div className="principle-card">
                  <div className="principle-icon">
                    <Users size={32} />
                  </div>
                  <h3>Relação Terapêutica</h3>
                  <p>
                    A terapia acontece no encontro genuíno entre terapeuta e cliente, em uma relação de confiança, respeito e presença autêntica.
                  </p>
                </div>

                <div className="principle-card">
                  <div className="principle-icon">
                    <Lightbulb size={32} />
                  </div>
                  <h3>Responsabilidade</h3>
                  <p>
                    Reconhecer-se como autor da própria vida. Você tem o poder de fazer escolhas e criar mudanças significativas.
                  </p>
                </div>
              </div>
            </div>

            {/* Como funciona */}
            <div className="content-section highlight-section">
              <h2>Como Funciona o Processo Terapêutico?</h2>
              <p>
                Na Gestalt-terapia, trabalhamos juntos para aumentar sua consciência sobre seus padrões de comportamento, emoções não expressas, necessidades não atendidas e formas de se relacionar consigo mesmo e com os outros.
              </p>
              <p>
                Através de técnicas criativas e experienciais, você será convidado(a) a explorar suas vivências, experimentar novas formas de ser e estar no mundo, e desenvolver recursos para lidar com os desafios da vida de maneira mais saudável e autêntica.
              </p>
              <blockquote className="abordagem-quote">
                "A cura não é sobre se tornar alguém diferente, mas sim sobre se tornar mais plenamente quem você realmente é."
              </blockquote>
            </div>

            {/* Para quem é indicado */}
            <div className="content-section">
              <h2>Para Quem é Indicada?</h2>
              <p>
                A Gestalt-terapia pode ajudar pessoas que buscam:
              </p>
              <ul className="benefits-list">
                <li>Autoconhecimento e crescimento pessoal</li>
                <li>Lidar com ansiedade, depressão ou estresse</li>
                <li>Melhorar relacionamentos interpessoais</li>
                <li>Superar traumas e experiências difíceis</li>
                <li>Desenvolver maior autenticidade e espontaneidade</li>
                <li>Fortalecer a autoestima e confiança</li>
                <li>Encontrar sentido e propósito na vida</li>
                <li>Desenvolver maior consciência corporal e emocional</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="content-cta">
              <div className="cta-box">
                <h3>Pronto para Começar sua Jornada?</h3>
                <p>
                  Vamos trabalhar juntos para que você possa se descobrir, se aceitar e viver de forma mais plena e autêntica.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => window.open("https://wa.me/5534999855035", "_blank")}
                >
                  Agendar uma Sessão
                </button>
              </div>
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
              <a href="mailto:waldirene.dias.psi@hotmail.com" aria-label="E-mail"><Mail size={24} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <Link to="/">Início</Link>
            <a href="/#sobre">Sobre Mim</a>
            <a href="/#servicos">Serviços</a>
            <a href="/#contato">Contato</a>
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
            <Button onClick={() => window.open("https://wa.me/5534999855035", "_blank")} variant="white" className="footer-btn">Mensagem WhatsApp</Button>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Waldirene Dias. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
