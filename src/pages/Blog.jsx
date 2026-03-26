import React from "react";

const POSTS = [
  {
    title: "5 hábitos para dormir melhor",
    tag: "Sono saudável",
    image: "/images/habitos-sono.jpg",
  },
  {
    title: "Qual firmeza combina com você?",
    tag: "Conforto",
    image: "/images/firmeza-colchao.jpg",
  },
  {
    title: "Rotina noturna minimalista",
    tag: "Estilo de vida",
    image: "/images/rotina-noturna.jpg",
  },
  // Add more posts
];

const assetPath = (path) => path;

export default function Blog() {
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
            <a href="/contato" className="btn-outline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="blog container">
          <div className="section-header">
            <h2>Blog do Sono Saudável</h2>
            <p className="muted">Dicas práticas para uma rotina mais tranquila.</p>
          </div>
          <div className="blog-grid">
            {POSTS.map((post) => (
              <article className="blog-card" key={post.title}>
                <img src={assetPath(post.image)} alt="Ambiente minimalista" loading="lazy" />
                <div>
                  <span className="tag">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <button className="btn-link" type="button">Ler artigo</button>
                </div>
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