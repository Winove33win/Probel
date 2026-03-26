import React from "react";

const TESTIMONIALS = [
  {
    name: "Marina",
    text: "Passei a dormir a noite toda sem acordar. Meu dia rende muito mais.",
  },
  {
    name: "Rafael",
    text: "Acordo com energia e menos tensão nas costas. Valeu cada noite.",
  },
  {
    name: "Clara",
    text: "Meu quarto ficou mais leve e meu sono muito mais profundo.",
  },
  // Add more as needed
];

export default function Testimonials() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="logo-area">
            <img src="/logo-probel.svg" alt="Probel" className="logo" />
            <span className="brand-note">Durma bem, viva melhor.</span>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/sobre">Sobre</a>
            <a href="/blog">Blog</a>
            <a href="/contato" className="btn-outline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="testimonials container">
          <div className="section-header">
            <h2>Depoimentos dos Nossos Clientes</h2>
            <p className="muted">Relatos sobre energia, foco e rotina leve.</p>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p>"{testimonial.text}"</p>
                <strong>{testimonial.name}</strong>
                <span className="stars">★★★★★</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Probel • conforto que acompanha sua rotina</span>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}