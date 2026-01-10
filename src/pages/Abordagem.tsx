import { Heart, Eye, Users, Lightbulb } from 'lucide-react';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import { CONTACT_INFO } from '../constants/contact';
import type { PrincipleItem } from '../types';
import '../App.css';

export default function Abordagem() {
  const principles: PrincipleItem[] = [
    {
      id: 'aqui-agora',
      title: 'Aqui e Agora',
      description: 'Foco na experiência presente. O que você está sentindo, pensando e vivenciando neste momento é o ponto de partida para a transformação.',
      icon: <Eye size={32} />,
    },
    {
      id: 'awareness',
      title: 'Awareness (Consciência)',
      description: 'Desenvolvimento da consciência de si mesmo, dos outros e do ambiente. Perceber-se integralmente é o caminho para a mudança autêntica.',
      icon: <Heart size={32} />,
    },
    {
      id: 'relacao',
      title: 'Relação Terapêutica',
      description: 'A terapia acontece no encontro genuíno entre terapeuta e cliente, em uma relação de confiança, respeito e presença autêntica.',
      icon: <Users size={32} />,
    },
    {
      id: 'responsabilidade',
      title: 'Responsabilidade',
      description: 'Reconhecer-se como autor da própria vida. Você tem o poder de fazer escolhas e criar mudanças significativas.',
      icon: <Lightbulb size={32} />,
    },
  ];

  return (
    <div className="abordagem-page">
      {/* Hero Section com imagem de fundo */}
      <section className="abordagem-hero">
        <div className="abordagem-hero-overlay"></div>
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
              <Carousel items={principles} />
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
                <Button 
                  onClick={() => window.open(CONTACT_INFO.whatsapp, "_blank")}
                  variant="primary"
                >
                  Agendar uma Sessão
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
