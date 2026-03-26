import React, { useState } from 'react';
import { COLCHOES, BASES_BOX, CABECEIRAS, FIRMEZA_CONFIG, WHATSAPP_NUMBER } from '../data/products';
import ProductModal from '../components/ProductModal';
import HeroCarousel from '../components/HeroCarousel';

const WA_GERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20colch%C3%B5es%20Probel.`;
const FIRMEZAS = ['Todos', 'Extra Macio', 'Macio', 'Intermediário', 'Firme', 'Extra Firme'];

const ICON_WA = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.523 5.847L0 24l6.335-1.499A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.006-1.368l-.36-.213-3.726.881.915-3.618-.234-.372A9.772 9.772 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818S21.818 6.585 21.818 12 17.415 21.818 12 21.818z"/>
  </svg>
);

function FirmezaBadge({ firmeza }) {
  const cfg = FIRMEZA_CONFIG[firmeza] || { label: firmeza, color: '#6B7280', bg: '#F3F4F6' };
  return <span className="firmeza-badge" style={{ color: cfg.color, background: cfg.bg }}>{cfg.label}</span>;
}

function ColchaoCard({ produto, onVerDetalhes }) {
  return (
    <article className="product-card">
      {/* Imagem real */}
      <div className="card-img-wrap">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="card-img"
          loading="lazy"
        />
        <div className="card-img-overlay">
          <div className="card-badges">
            <FirmezaBadge firmeza={produto.firmeza} />
            {produto.destaque && <span className="badge-destaque">Mais vendido</span>}
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{produto.nome}</h3>
        <div className="card-specs">
          <span className="spec"><em>Molas:</em> {produto.molas}</span>
          <span className="spec"><em>Densidade:</em> {produto.densidade}</span>
        </div>
        <p className="card-desc">{produto.desc}</p>
        {produto.certificado && (
          <p className="card-cert">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            Certificado {produto.certificado}
          </p>
        )}
      </div>
      <div className="card-footer card-footer-2">
        <button className="btn-detalhes" onClick={() => onVerDetalhes(produto)}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Ver ficha técnica
        </button>
        <a href={produto.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <ICON_WA />
          Pedir via WhatsApp
        </a>
      </div>
    </article>
  );
}

function BoxCard({ produto }) {
  return (
    <article className="product-card">
      <div className="card-header" style={{ background: 'linear-gradient(135deg, #2C3E50ee, #4A5568aa)' }}>
        <div className="card-icon" aria-hidden="true">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect x="4" y="26" width="44" height="20" rx="3" fill="white" fillOpacity="0.28"/>
            <rect x="4" y="6" width="44" height="20" rx="3" fill="white" fillOpacity="0.18"/>
            <line x1="4" y1="26" x2="48" y2="26" stroke="white" strokeWidth="2" strokeOpacity="0.45"/>
          </svg>
        </div>
        <span className="tipo-badge">{produto.tipo}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{produto.nome}</h3>
        <p className="card-desc">{produto.desc}</p>
      </div>
      <div className="card-footer">
        <a href={produto.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <ICON_WA />
          Pedir via WhatsApp
        </a>
      </div>
    </article>
  );
}

function CabeceiraCard({ produto }) {
  return (
    <article className="product-card">
      <div className="card-header" style={{ background: 'linear-gradient(135deg, #78350Fee, #92400Eaa)' }}>
        <div className="card-icon" aria-hidden="true">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect x="4" y="5" width="44" height="26" rx="5" fill="white" fillOpacity="0.22"/>
            <rect x="4" y="33" width="9" height="16" rx="2" fill="white" fillOpacity="0.28"/>
            <rect x="39" y="33" width="9" height="16" rx="2" fill="white" fillOpacity="0.28"/>
          </svg>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{produto.nome}</h3>
        <p className="card-desc">Design elegante e sofisticado para compor o ambiente do seu quarto com estilo e personalidade.</p>
      </div>
      <div className="card-footer">
        <a href={produto.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          <ICON_WA />
          Consultar via WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('colchoes');
  const [firmezaFilter, setFirmezaFilter] = useState('Todos');
  const [modalProduto, setModalProduto] = useState(null);

  const colchoesFiltrados = firmezaFilter === 'Todos'
    ? COLCHOES
    : COLCHOES.filter(c => {
        const f   = c.firmeza.trim().toLowerCase();
        const sel = firmezaFilter.trim().toLowerCase();
        return f === sel || f.includes(sel) || sel.includes(f);
      });

  return (
    <div className="page">

      {/* ───── FAIXA FRETE GRÁTIS ───── */}
      <div className="frete-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        <strong>Frete Grátis para Jaguariúna e Região!</strong>
        <span>Fale no WhatsApp e confirme sua cidade</span>
      </div>

      {/* ───── HEADER ───── */}
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#inicio" className="logo-area">
            <span className="logo-text">PROBEL</span>
            <span className="logo-sub">Jaguariúna</span>
          </a>
          <nav className="nav" aria-label="Menu principal">
            <a href="#colchoes">Colchões</a>
            <a href="#bases">Bases</a>
            <a href="#cabeceiras">Cabeceiras</a>
            <a href="#sobre">Sobre</a>
            <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="nav-wa-btn">
              <ICON_WA />
              Falar conosco
            </a>
          </nav>
        </div>
      </header>

      <main>

        {/* ───── HERO ───── */}
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-shape s1" />
            <div className="hero-shape s2" />
          </div>
          <div className="container hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Colchões Probel — Jaguariúna</p>
              <h1>Durma melhor.<br />Acorde renovado.</h1>
              <p className="hero-lead">
                Colchões com tecnologia de molas ensacadas, alta densidade e certificação INMETRO. Mais de 80 anos desenvolvendo o descanso perfeito para cada biotipo.
              </p>
              <div className="hero-actions">
                <a href="#colchoes" className="btn-primary-lg">Ver colchões</a>
                <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="btn-wa-lg">
                  <ICON_WA />
                  Falar no WhatsApp
                </a>
              </div>
              <div className="hero-trust">
                <div className="trust-item">
                  <strong>80+</strong>
                  <span>anos de tecnologia</span>
                </div>
                <div className="trust-div" aria-hidden="true" />
                <div className="trust-item">
                  <strong>INMETRO</strong>
                  <span>certificado</span>
                </div>
                <div className="trust-div" aria-hidden="true" />
                <div className="trust-item">
                  <strong>Frete Grátis</strong>
                  <span>Jaguariúna e região</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <HeroCarousel
                onVerProduto={(nome) => {
                  const p = COLCHOES.find(c => c.nome === nome);
                  if (p) setModalProduto(p);
                }}
              />
            </div>
          </div>
        </section>

        {/* ───── DIFERENCIAIS ───── */}
        <section className="diferenciais">
          <div className="container">
            <div className="diferenciais-grid">
              {[
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Certificação INMETRO', desc: 'Qualidade e segurança comprovadas' },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Tecnologia One-Side', desc: 'Não precisa virar o colchão' },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, title: 'Frete Grátis na Região', desc: 'Jaguariúna e cidades próximas' },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Molas Antirruído', desc: 'Independência total de movimentos' },
              ].map(d => (
                <div key={d.title} className="diferencial">
                  <div className="diferencial-icon" aria-hidden="true">{d.icon}</div>
                  <div><strong>{d.title}</strong><p>{d.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── PRODUTOS ───── */}
        <section className="produtos-section" id="colchoes">
          <div className="container">
            <div className="section-header">
              <h2>Nossos Produtos</h2>
              <p className="section-sub">Selecione a categoria e encontre o modelo ideal para você</p>
            </div>

            <div className="tabs" role="tablist">
              {[
                { key: 'colchoes',   label: 'Colchões',   count: COLCHOES.length },
                { key: 'bases',      label: 'Bases Box',  count: BASES_BOX.length },
                { key: 'cabeceiras', label: 'Cabeceiras', count: CABECEIRAS.length },
              ].map(t => (
                <button
                  key={t.key} role="tab"
                  aria-selected={activeTab === t.key}
                  className={`tab${activeTab === t.key ? ' tab-active' : ''}`}
                  onClick={() => setActiveTab(t.key)}
                >
                  {t.label} <span className="tab-count">{t.count}</span>
                </button>
              ))}
            </div>

            {activeTab === 'colchoes' && (
              <div className="filtros" role="group" aria-label="Filtrar por firmeza">
                <span className="filtros-label">Firmeza:</span>
                {FIRMEZAS.map(f => (
                  <button
                    key={f}
                    className={`chip${firmezaFilter === f ? ' chip-active' : ''}`}
                    onClick={() => setFirmezaFilter(f)}
                    aria-pressed={firmezaFilter === f}
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'colchoes' && (
              <div className="product-grid">
                {colchoesFiltrados.map(p => (
                  <ColchaoCard key={p.id} produto={p} onVerDetalhes={setModalProduto} />
                ))}
              </div>
            )}
            {activeTab === 'bases' && (
              <div className="product-grid" id="bases">
                {BASES_BOX.map(p => <BoxCard key={p.id} produto={p} />)}
              </div>
            )}
            {activeTab === 'cabeceiras' && (
              <div className="product-grid product-grid-4" id="cabeceiras">
                {CABECEIRAS.map(p => <CabeceiraCard key={p.id} produto={p} />)}
              </div>
            )}
          </div>
        </section>

        {/* ───── GUIA FIRMEZA ───── */}
        <section className="guia-firmeza">
          <div className="container">
            <div className="section-header">
              <h2>Qual firmeza é ideal para você?</h2>
              <p className="section-sub">Escolha com base no seu biotipo e posição preferida de dormir</p>
            </div>
            <div className="guia-grid">
              {[
                { firmeza: 'Extra Macio', emoji: '🌙', desc: 'Ombros largos, quadris salientes. Dorme de lado. Quer sensação de afundar suavemente.' },
                { firmeza: 'Macio',       emoji: '✨', desc: 'Biotipo leve a médio. Dorme de lado. Quer maciez com suporte adequado.' },
                { firmeza: 'Intermediário', emoji: '⚖️', desc: 'Biotipo médio. Dorme em várias posições. Equilíbrio entre conforto e suporte.' },
                { firmeza: 'Firme',       emoji: '💪', desc: 'Biotipo médio a pesado. Dorme de costas ou barriga. Coluna alinhada.' },
                { firmeza: 'Extra Firme', emoji: '🏋️', desc: 'Biotipo pesado. Precisa de máximo suporte e durabilidade superior.' },
              ].map(item => {
                const cfg = FIRMEZA_CONFIG[item.firmeza] || {};
                return (
                  <div key={item.firmeza} className="guia-card" style={{ borderTop: `3px solid ${cfg.color || '#ccc'}` }}>
                    <span className="guia-emoji">{item.emoji}</span>
                    <FirmezaBadge firmeza={item.firmeza} />
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="guia-cta">
              <p>Ainda com dúvida? Nossos consultores ajudam você a escolher o colchão perfeito.</p>
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="btn-wa-outline">
                <ICON_WA />
                Consultar gratuitamente
              </a>
            </div>
          </div>
        </section>

        {/* ───── SOBRE ───── */}
        <section className="sobre-section" id="sobre">
          <div className="container sobre-inner">
            <div className="sobre-visual" aria-hidden="true">
              <div className="sobre-badges">
                <div className="sobre-badge"><strong>80+</strong><span>Anos de experiência</span></div>
                <div className="sobre-badge sb2"><strong>INMETRO</strong><span>Certificação oficial</span></div>
                <div className="sobre-badge sb3"><strong>One-Side</strong><span>Tecnologia exclusiva</span></div>
              </div>
            </div>
            <div className="sobre-content">
              <h2>Probel: referência em conforto e tecnologia do sono</h2>
              <p>Com mais de 80 anos de história, a Probel é uma das marcas mais reconhecidas no mercado de colchões do Brasil. Cada produto é desenvolvido com tecnologia avançada e materiais de qualidade certificada pelo INMETRO.</p>
              <p>Nossa linha de molas ensacadas garante independência de movimentos — cada mola age individualmente, reduzindo a transferência de movimento e proporcionando noites mais tranquilas para casais com biotipos diferentes.</p>
              <ul className="sobre-lista">
                {['Tecnologia One-Side — não precisa virar', 'Sistema de molas antirruído', 'Espumas certificadas e de alta durabilidade', 'Madeira de reflorestamento tratada (bases)'].map(item => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="btn-primary-md">
                Falar com um consultor
              </a>
            </div>
          </div>
        </section>

        {/* ───── DEPOIMENTOS ───── */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2>O que nossos clientes dizem</h2>
            </div>
            <div className="testimonials-grid">
              {[
                { nome: 'Marina S.', texto: 'Comprei o Michelini Ultra Gel e não me arrependo. Durmo a noite toda sem acordar, meu dia rende muito mais. Valeu cada centavo!' },
                { nome: 'Carlos R.', texto: 'O Guarda Costas Athos Bambu foi perfeito. Tinha dor nas costas há anos e depois de um mês dormindo nele, a dor diminuiu muito.' },
                { nome: 'Fernanda M.', texto: 'Meu marido e eu temos biotipos bem diferentes e o Pierre com molas ensacadas resolveu tudo. Cada um dorme no seu conforto ideal.' },
              ].map(d => (
                <article key={d.nome} className="testimonial-card">
                  <div className="stars" aria-label="5 estrelas">★★★★★</div>
                  <p className="testimonial-text">"{d.texto}"</p>
                  <strong className="testimonial-name">{d.nome}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA FINAL ───── */}
        <section className="cta-final">
          <div className="container cta-inner">
            <div>
              <h2>Pronto para dormir melhor?</h2>
              <p>Fale com nossos consultores e encontre o colchão ideal para o seu biotipo e orçamento.</p>
            </div>
            <div className="cta-actions">
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="btn-wa-hero">
                <ICON_WA />
                Iniciar conversa no WhatsApp
              </a>
              <p className="cta-note">Atendimento rápido · Sem compromisso</p>
            </div>
          </div>
        </section>

      </main>

      {/* ───── FOOTER ───── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="logo-text">PROBEL</span>
            <span className="footer-tagline">Conforto que transforma seu sono</span>
          </div>
          <div className="footer-links">
            <a href="#colchoes">Colchões</a>
            <a href="#bases">Bases Box</a>
            <a href="#cabeceiras">Cabeceiras</a>
            <a href="#sobre">Sobre</a>
          </div>
          <div className="footer-contact">
            <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="footer-wa">
              <ICON_WA />
              (19) 3014-2659
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span>© {new Date().getFullYear()} Probel Jaguariúna. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {/* ───── FLOATING WA ───── */}
      <a href={WA_GERAL} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
        <ICON_WA />
        <span>Falar no WhatsApp</span>
      </a>

      {/* ───── MODAL DETALHES ───── */}
      {modalProduto && (
        <ProductModal produto={modalProduto} onClose={() => setModalProduto(null)} />
      )}

    </div>
  );
}
