import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import Button from './Button';
import { CONTACT_INFO } from '../constants/contact';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2>{CONTACT_INFO.name}</h2>
          <p className="crp-text">Psicóloga Clínica | {CONTACT_INFO.crp}</p>
          <div className="social-links">
            <a href={CONTACT_INFO.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} aria-label="E-mail">
              <Mail size={24} />
            </a>
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
            <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneFormatted}</a>
          </div>
          <div className="contact-item">
            <MapPin size={20} />
            <span>{CONTACT_INFO.address}</span>
          </div>
          <Button 
            onClick={() => window.open(CONTACT_INFO.whatsapp, "_blank")} 
            variant="white" 
            className="footer-btn"
          >
            Mensagem WhatsApp
          </Button>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
