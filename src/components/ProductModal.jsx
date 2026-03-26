import React, { useState, useEffect } from 'react';
import { FIRMEZA_CONFIG } from '../data/products';

const ICON_WA = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.523 5.847L0 24l6.335-1.499A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.006-1.368l-.36-.213-3.726.881.915-3.618-.234-.372A9.772 9.772 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818S21.818 6.585 21.818 12 17.415 21.818 12 21.818z"/>
  </svg>
);

const FICHA_LABELS = {
  molejo:      'Sistema de Molejo',
  espuma_estof:'Espuma do Estofamento',
  espuma_mat:  'Espuma do Matelassê',
  pillow:      'Pillow',
  tecnologia:  'Tecnologia',
  suporte:     'Suporte / Peso Máx.',
  certificados:'Certificados',
  outras:      'Outras Características',
};

export default function ProductModal({ produto, onClose }) {
  const [imgAtiva, setImgAtiva] = useState(0);

  // Fechar com ESC
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Reset da imagem quando produto muda
  useEffect(() => { setImgAtiva(0); }, [produto?.id]);

  if (!produto) return null;

  const cfg = FIRMEZA_CONFIG[produto.firmeza] || { label: produto.firmeza, color: '#6B7280', bg: '#F3F4F6' };
  const galeria = produto.galeria || [produto.imagem].filter(Boolean);
  const ficha   = produto.ficha || {};

  const prev = () => setImgAtiva(i => (i - 1 + galeria.length) % galeria.length);
  const next = () => setImgAtiva(i => (i + 1) % galeria.length);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={produto.nome}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>

        {/* Botão fechar */}
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal-body">

          {/* ── GALERIA ── */}
          <div className="modal-gallery">
            <div className="gallery-main">
              <img
                src={galeria[imgAtiva]}
                alt={`${produto.nome} — foto ${imgAtiva + 1}`}
                loading="lazy"
              />
              {galeria.length > 1 && (
                <>
                  <button className="gallery-nav prev" onClick={prev} aria-label="Foto anterior">‹</button>
                  <button className="gallery-nav next" onClick={next} aria-label="Próxima foto">›</button>
                  <span className="gallery-counter">{imgAtiva + 1} / {galeria.length}</span>
                </>
              )}
            </div>
            {galeria.length > 1 && (
              <div className="gallery-thumbs">
                {galeria.map((src, i) => (
                  <button
                    key={i}
                    className={`thumb${imgAtiva === i ? ' thumb-active' : ''}`}
                    onClick={() => setImgAtiva(i)}
                    aria-label={`Ver foto ${i + 1}`}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── INFORMAÇÕES ── */}
          <div className="modal-info">
            {/* Cabeçalho */}
            <div className="modal-head">
              <div className="modal-badges">
                <span className="firmeza-badge" style={{ color: cfg.color, background: cfg.bg }}>
                  {cfg.label}
                </span>
                {produto.destaque && <span className="badge-destaque">Mais vendido</span>}
                {produto.certificado && (
                  <span className="badge-cert">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {produto.certificado}
                  </span>
                )}
              </div>
              <h2 className="modal-title">Colchão Probel {produto.nome}</h2>
              <p className="modal-desc">{produto.desc}</p>
            </div>

            {/* Tamanhos */}
            {produto.tamanhos && (
              <div className="modal-tamanhos">
                <span className="modal-section-label">Tamanhos disponíveis</span>
                <p>{produto.tamanhos}</p>
              </div>
            )}

            {/* Ficha Técnica */}
            <div className="modal-ficha">
              <span className="modal-section-label">Ficha Técnica</span>
              <table className="ficha-table">
                <tbody>
                  {/* Firmeza e Densidade sempre primeiro */}
                  <tr>
                    <th>Nível de Firmeza</th>
                    <td><span className="firmeza-badge sm" style={{ color: cfg.color, background: cfg.bg }}>{cfg.label}</span></td>
                  </tr>
                  <tr>
                    <th>Densidade</th>
                    <td>{produto.densidade}</td>
                  </tr>
                  {Object.entries(ficha).map(([key, val]) => {
                    if (!val || val === '—') return null;
                    return (
                      <tr key={key}>
                        <th>{FICHA_LABELS[key] || key}</th>
                        <td>{val}</td>
                      </tr>
                    );
                  })}
                  {produto.indicado && (
                    <tr>
                      <th>Indicado para</th>
                      <td>{produto.indicado}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* CTA WhatsApp */}
            <div className="modal-cta">
              <a
                href={produto.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-modal"
              >
                <ICON_WA />
                Pedir este colchão via WhatsApp
              </a>
              <p className="modal-cta-note">Atendimento rápido · Frete grátis em Jaguariúna e região</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
