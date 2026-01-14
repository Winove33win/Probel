import React from "react";

const assetPath = (path) => path;

export default function About() {
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
            <a href="/depoimentos">Depoimentos</a>
            <a href="/blog">Blog</a>
            <a href="/contato" className="btn-outline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="lifestyle container">
          <div className="lifestyle-grid">
            <div className="lifestyle-text">
              <h2>Sobre a Probel</h2>
              <p>
                Desde 1985, unimos ciência do sono, materiais conscientes e design minimalista para criar colchões que respeitam seu ritmo.
              </p>
              <div className="timeline">
                <div>
                  <strong>1985</strong>
                  <span>Início da pesquisa em ergonomia.</span>
                </div>
                <div>
                  <strong>2005</strong>
                  <span>Primeiras linhas premium com tecnologia térmica.</span>
                </div>
                <div>
                  <strong>Hoje</strong>
                  <span>Compromisso com bem-estar e sustentabilidade.</span>
                </div>
              </div>
              <div className="certifications">
                <span>Certificações de qualidade</span>
                <span>Teste em casa por 100 noites</span>
              </div>
            </div>
            <div className="lifestyle-image">
              <img
                src={assetPath("/images/fabrica-ecologica.jpg")}
                alt="Ambiente de produção ecológico"
                loading="lazy"
              />
            </div>
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