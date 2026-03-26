import React, { useState, useEffect, useRef, useCallback } from 'react';

const SLIDES = [
  { img: '/assets/MICHELLINI/1000085464.jpg',        nome: 'Michelini Ultra Gel',        firmeza: 'Firme',         badge: '#1D4ED8' },
  { img: '/assets/ATHOS BAMBU/1000085132.jpg',        nome: 'Guarda Costas Athos Bambu',  firmeza: 'Firme',         badge: '#1D4ED8' },
  { img: '/assets/PIERRE/Mídia (14).jpg',             nome: 'Pierre',                     firmeza: 'Extra Macio',   badge: '#7C3AED' },
  { img: '/assets/DIVINO SPRINGS HIPER FIRME/Mídia (1).jpg', nome: 'Divino Springs Hiper Firme', firmeza: 'Firme',  badge: '#0F172A' },
  { img: '/assets/CREATIVE/shared image.jpg',         nome: 'Creative',                   firmeza: 'Macio',         badge: '#059669' },
  { img: '/assets/DIVINO NEW VISCO/Mídia.jpeg',       nome: 'Divino New Visco',           firmeza: 'Firme',         badge: '#1D4ED8' },
  { img: '/assets/GUARDA COSTAS STAR/1000084436.jpg', nome: 'Guarda Costas Star',         firmeza: 'Firme',         badge: '#1D4ED8' },
  { img: '/assets/POESY/Mídia (1).jpeg',              nome: 'Poesy',                      firmeza: 'Extra Firme',   badge: '#0F172A' },
];

const INTERVAL = 3800;

export default function HeroCarousel({ onVerProduto }) {
  const [current, setCurrent]   = useState(0);
  const [prev,    setPrev]      = useState(null);
  const [dir,     setDir]       = useState('next'); // 'next' | 'prev'
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const total    = SLIDES.length;

  const goTo = useCallback((idx, direction) => {
    if (animating) return;
    setDir(direction);
    setPrev(current);
    setCurrent(idx);
    setAnimating(true);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 500);
  }, [animating, current]);

  const next = useCallback(() => goTo((current + 1) % total, 'next'), [goTo, current, total]);
  const back = useCallback(() => goTo((current - 1 + total) % total, 'prev'), [goTo, current, total]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => { timerRef.current = setInterval(next, INTERVAL); };

  const slide = SLIDES[current];

  return (
    <div
      className="hero-carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label="Galeria de colchões"
      aria-roledescription="carousel"
    >
      {/* Frame de slides */}
      <div className="hc-track">

        {/* Slide anterior (saindo) */}
        {prev !== null && (
          <div
            className={`hc-slide hc-slide-exit hc-exit-${dir}`}
            aria-hidden="true"
          >
            <img src={SLIDES[prev].img} alt="" loading="eager" />
            <div className="hc-overlay" />
          </div>
        )}

        {/* Slide atual (entrando) */}
        <div
          className={`hc-slide hc-slide-enter hc-enter-${dir}${prev === null ? ' hc-no-anim' : ''}`}
          aria-roledescription="slide"
          aria-label={`${current + 1} de ${total}: ${slide.nome}`}
        >
          <img src={slide.img} alt={slide.nome} loading="eager" />
          <div className="hc-overlay" />

          {/* Label do produto */}
          <div className="hc-label">
            <span className="hc-firmeza" style={{ background: slide.badge }}>{slide.firmeza}</span>
            <span className="hc-nome">{slide.nome}</span>
            <button className="hc-cta" onClick={() => onVerProduto && onVerProduto(slide.nome)}>
              Ver ficha técnica
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Controles laterais */}
      <button className="hc-btn hc-btn-prev" onClick={back} aria-label="Foto anterior">‹</button>
      <button className="hc-btn hc-btn-next" onClick={next} aria-label="Próxima foto">›</button>

      {/* Dots */}
      <div className="hc-dots" role="tablist" aria-label="Selecionar slide">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            className={`hc-dot${i === current ? ' hc-dot-active' : ''}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            aria-label={s.nome}
          />
        ))}
      </div>
    </div>
  );
}
