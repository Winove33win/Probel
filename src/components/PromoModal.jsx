import React, { useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data/products';

const WA_PROMO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vi a Gincana da Copa na Probel: comprei meu colchão e quero participar do desafio para ganhar o box por conta da loja!')}`;

export default function PromoModal({ onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="promo-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Gincana da Copa">
      <div className="promo-modal-box" onClick={e => e.stopPropagation()}>

        <button className="promo-modal-close" onClick={onClose} aria-label="Fechar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Topo colorido — Copa */}
        <div className="promo-modal-top promo-modal-top--copa">
          <span className="promo-modal-tag">⚽ Copa do Mundo 2026</span>
          <div className="promo-modal-icon" aria-hidden="true">🏆</div>
          <h2 className="promo-modal-titulo">Gincana da Copa chegou!</h2>
          <p className="promo-modal-subtitulo">Você entende de futebol?</p>
        </div>

        {/* Corpo */}
        <div className="promo-modal-body">
          <p className="promo-modal-chamada">
            Venha na loja, participe da nossa <strong>Gincana da Copa</strong> e responda ao desafio!
          </p>

          <div className="promo-modal-presente promo-modal-presente--copa">
            <span className="promo-modal-presente-icon">🛏️</span>
            <div>
              <strong>Acertou + Comprou? O BOX é por nossa conta!</strong>
              <p>Acerte o desafio e leve seu colchão com o box incluso de graça</p>
            </div>
          </div>

          <ul className="promo-modal-lista">
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Participe presencialmente na loja
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Promoção por tempo limitado
            </li>
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Consulte o regulamento na loja
            </li>
          </ul>

          <a
            href={WA_PROMO}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-modal-cta"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.117 1.523 5.847L0 24l6.335-1.499A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.006-1.368l-.36-.213-3.726.881.915-3.618-.234-.372A9.772 9.772 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818S21.818 6.585 21.818 12 17.415 21.818 12 21.818z"/>
            </svg>
            Quero participar da Gincana!
          </a>

          <button className="promo-modal-skip" onClick={onClose}>
            Agora não, obrigado
          </button>
        </div>
      </div>
    </div>
  );
}
