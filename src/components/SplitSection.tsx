import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { SplitSectionProps } from '../types';

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

export default SplitSection;
