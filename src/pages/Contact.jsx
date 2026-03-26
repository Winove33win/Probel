import React from "react";

const assetPath = (path) => path;

export default function Contact() {
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
            <a href="/depoimentos">Depoimentos</a>
            <a href="/blog">Blog</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="contact container">
          <div className="contact-grid">
            <div>
              <h2>Fale conosco sobre o colchão ideal.</h2>
              <p className="muted">Estamos aqui para seu descanso. Atendimento humano e consultivo.</p>
              <div className="contact-details">
                <div>
                  <strong>WhatsApp</strong>
                  <span>+55 11 0000-0000</span>
                </div>
                <div>
                  <strong>E-mail</strong>
                  <span>contato@probel.com.br</span>
                </div>
                <div>
                  <strong>Showroom</strong>
                  <span>São Paulo • Agende sua visita</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="E-mail" required />
              <textarea rows="4" placeholder="Como podemos ajudar?" required />
              <button className="btn-primary" type="submit">Enviar mensagem</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Probel • conforto que acompanha sua rotina</span>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/sobre">Sobre</a>
          </div>
        </div>
      </footer>
    </div>
  );
}