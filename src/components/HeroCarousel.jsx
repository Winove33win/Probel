import React, { useState, useEffect, useRef, useCallback } from 'react';

const SLIDES = [
  {
    img:      '/assets/MICHELLINI/1000085464.jpg',
    nome:     'Michelini Ultra Gel',
    tag:      'Mola Ensacada · D45',
    firmeza:  'Firme',
    fColor:   '#1D4ED8',
    fBg:      '#DBEAFE',
    caption:  'Tecnologia de gel para controle térmico. O parceiro ideal para casais.',
    hashtags: '#MolaEnsacada #UltraGel #SonoProfundo',
  },
  {
    img:      '/assets/ATHOS BAMBU/1000085132.jpg',
    nome:     'Guarda Costas Athos Bambu',
    tag:      'Mola Ensacada · D33',
    firmeza:  'Firme',
    fColor:   '#1D4ED8',
    fBg:      '#DBEAFE',
    caption:  'Tecido de bambu natural e refrescante. Suporte ortopédico para sua coluna.',
    hashtags: '#AthosBambu #GuardaCostas #Ortopédico',
  },
  {
    img:      '/assets/PIERRE/Mídia (14).jpg',
    nome:     'Pierre',
    tag:      'Mola Ensacada · D29',
    firmeza:  'Extra Macio',
    fColor:   '#7C3AED',
    fBg:      '#EDE9FE',
    caption:  'Sensação de nuvem com suporte individual. O mais macio da linha Probel.',
    hashtags: '#Pierre #ExtraMacio #ConfortoMaximo',
  },
  {
    img:      '/assets/DIVINO SPRINGS HIPER FIRME/Mídia (1).jpg',
    nome:     'Divino Springs Hiper Firme',
    tag:      'Mola Ensacada · D45 | D65',
    firmeza:  'Extra Firme',
    fColor:   '#374151',
    fBg:      '#F3F4F6',
    caption:  'Alta densidade máxima. Para quem não abre mão da firmeza e durabilidade.',
    hashtags: '#HiperFirme #DivinoSprings #AltaDensidade',
  },
  {
    img:      '/assets/CREATIVE/shared image.jpg',
    nome:     'Creative',
    tag:      'Mola Ensacada · D29',
    firmeza:  'Macio',
    fColor:   '#059669',
    fBg:      '#D1FAE5',
    caption:  'Espuma Hiper Soft com Pillow Super. Abraço perfeito para cada posição.',
    hashtags: '#Creative #Macio #HiperSoft',
  },
  {
    img:      '/assets/DIVINO NEW VISCO/Mídia.jpeg',
    nome:     'Divino New Visco',
    tag:      'Espuma Viscoelástica · D40',
    firmeza:  'Firme',
    fColor:   '#1D4ED8',
    fBg:      '#DBEAFE',
    caption:  'Três camadas de espuma premium. Firmeza e maciez na medida ideal.',
    hashtags: '#NewVisco #Viscoelástico #Ortopédico',
  },
  {
    img:      '/assets/GUARDA COSTAS STAR/1000084436.jpg',
    nome:     'Guarda Costas Star',
    tag:      'Mola Ensacada · D33',
    firmeza:  'Firme',
    fColor:   '#1D4ED8',
    fBg:      '#DBEAFE',
    caption:  'Suporte inabalável para sua coluna. Escolha de quem cuida do corpo.',
    hashtags: '#GuardaCostas #Star #SuporteFirme',
  },
  {
    img:      '/assets/POESY/Mídia (1).jpeg',
    nome:     'Poesy',
    tag:      'Prolastic · D40 | D65',
    firmeza:  'Extra Firme',
    fColor:   '#374151',
    fBg:      '#F3F4F6',
    caption:  'VBacBlock: inibe bactérias e microorganismos. Qualidade Probel em outro nível.',
    hashtags: '#Poesy #Prolastic #VBacBlock',
  },
];

const INTERVAL  = 4200;
const ANIM_MS   = 480;
const LIKES     = [847, 1203, 692, 934, 1087, 758, 1341, 889];

export default function HeroCarousel({ onVerProduto }) {
  const [current,   setCurrent]   = useState(0);
  const [prev,      setPrev]      = useState(null);
  const [dir,       setDir]       = useState('next');
  const [animating, setAnimating] = useState(false);
  const [progress,  setProgress]  = useState(0);
  const [liked,     setLiked]     = useState({});
  const timerRef    = useRef(null);
  const progressRef = useRef(null);
  const total       = SLIDES.length;

  const goTo = useCallback((idx, direction) => {
    if (animating) return;
    setDir(direction);
    setPrev(current);
    setCurrent(idx);
    setAnimating(true);
    setProgress(0);
    setTimeout(() => { setPrev(null); setAnimating(false); }, ANIM_MS);
  }, [animating, current]);

  const next = useCallback(() => goTo((current + 1) % total, 'next'), [goTo, current, total]);
  const back = useCallback(() => goTo((current - 1 + total) % total, 'prev'), [goTo, current, total]);

  // Auto-avance + barra de progresso
  useEffect(() => {
    setProgress(0);
    const step = 100 / (INTERVAL / 50);
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + step, 100));
    }, 50);
    timerRef.current = setTimeout(next, INTERVAL);
    return () => {
      clearInterval(progressRef.current);
      clearTimeout(timerRef.current);
    };
  }, [current]); // eslint-disable-line react-hooks/exhaustive-deps

  const pause = () => {
    clearTimeout(timerRef.current);
    clearInterval(progressRef.current);
  };
  const resume = () => {
    const remaining = INTERVAL * (1 - progress / 100);
    timerRef.current = setTimeout(next, remaining);
    const step = 100 / (remaining / 50);
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + step, 100));
    }, 50);
  };

  const toggleLike = (idx) => setLiked(l => ({ ...l, [idx]: !l[idx] }));

  const slide     = SLIDES[current];
  const likeCount = LIKES[current] + (liked[current] ? 1 : 0);

  return (
    <div
      className="hc-frame"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label="Galeria de colchões Probel"
    >
      {/* ── STORY PROGRESS BARS ── */}
      <div className="hc-stories" aria-hidden="true">
        {SLIDES.map((_, i) => (
          <div key={i} className="hc-story-bar">
            <div
              className="hc-story-fill"
              style={{
                width: i < current ? '100%'
                     : i === current ? `${progress}%`
                     : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* ── INSTAGRAM HEADER ── */}
      <div className="hc-insta-header">
        <a
          href="https://www.probeljaguariuna.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="hc-avatar"
          aria-label="Probel Jaguariúna"
        >
          <img src="/assets/Logotipo-Probel_01-PRINCIPA-min-1024x382.webp" alt="Probel" />
        </a>
        <div className="hc-account">
          <span className="hc-username">probeljaguariuna</span>
          <span className="hc-location">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Jaguariúna, SP
          </span>
        </div>
        <a
          href="https://www.probeljaguariuna.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="hc-more"
          aria-label="Ver site"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </a>
      </div>

      {/* ── TRACK DE SLIDES ── */}
      <div className="hc-track">
        {prev !== null && (
          <div className={`hc-slide hc-exit-${dir}`} aria-hidden="true">
            <img src={SLIDES[prev].img} alt="" />
            <div className="hc-vignette" />
          </div>
        )}
        <div className={`hc-slide hc-enter-${dir}${prev === null ? ' hc-no-anim' : ''}`}>
          <img src={slide.img} alt={slide.nome} />
          <div className="hc-vignette" />

          {/* Watermark */}
          <div className="hc-watermark" aria-hidden="true">probeljaguariuna.com.br</div>

          {/* Setas */}
          <button className="hc-arrow hc-arrow-l" onClick={back} aria-label="Anterior">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="hc-arrow hc-arrow-r" onClick={next} aria-label="Próximo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      {/* ── AÇÕES INSTAGRAM ── */}
      <div className="hc-actions">
        <div className="hc-actions-left">
          <button
            className={`hc-action-btn${liked[current] ? ' hc-liked' : ''}`}
            onClick={() => toggleLike(current)}
            aria-label={liked[current] ? 'Descurtir' : 'Curtir'}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={liked[current] ? '#EF4444' : 'none'} stroke={liked[current] ? '#EF4444' : 'currentColor'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button className="hc-action-btn" aria-label="Comentar" onClick={() => onVerProduto && onVerProduto(slide.nome)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
          <button className="hc-action-btn" aria-label="Compartilhar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <button
          className="hc-action-btn"
          aria-label="Salvar"
          onClick={() => onVerProduto && onVerProduto(slide.nome)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="19 21 12 16 5 21 5 3 19 3 19 21"/>
          </svg>
        </button>
      </div>

      {/* ── CARD DE PRODUTO ── */}
      <div className="hc-product-card">
        <div className="hc-likes">
          <strong>{likeCount.toLocaleString('pt-BR')}</strong> curtidas
        </div>

        <div className="hc-product-info">
          <div className="hc-product-top">
            <span
              className="hc-badge-firmeza"
              style={{ color: slide.fColor, background: slide.fBg }}
            >
              {slide.firmeza}
            </span>
            <span className="hc-badge-tag">{slide.tag}</span>
          </div>
          <p className="hc-product-name">
            <strong>probeljaguariuna</strong> {slide.nome}
          </p>
          <p className="hc-caption">{slide.caption}</p>
          <p className="hc-hashtags">{slide.hashtags}</p>
        </div>

        <button
          className="hc-ver-mais"
          onClick={() => onVerProduto && onVerProduto(slide.nome)}
        >
          Ver ficha técnica completa
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* ── DOTS ── */}
      <div className="hc-dots" role="tablist" aria-label="Slides">
        {SLIDES.map((_, i) => (
          <button
            key={i} role="tab"
            aria-selected={i === current}
            className={`hc-dot${i === current ? ' hc-dot-active' : ''}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            aria-label={SLIDES[i].nome}
          />
        ))}
      </div>
    </div>
  );
}
