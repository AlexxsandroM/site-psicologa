import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Atualiza a quantidade de itens visíveis baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const itemWidth = 100 / itemsPerView;

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button
          className="carousel-button carousel-button-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-viewport" ref={carouselRef}>
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}%)`,
              width: `${(items.length / itemsPerView) * 100}%`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="carousel-item"
                style={{ width: `${itemWidth}%` }}
              >
                <div className="principle-card">
                  <div className="principle-icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          aria-label="Próximo"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
