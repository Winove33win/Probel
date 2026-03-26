import React from "react";

const PRODUCTS = [
  {
    name: "Colchão Athos Bambu",
    desc: "Toque natural e conforto refrescante para noites mais leves.",
    price: "R$ 2.490",
    image: "/images/athos-bambu.jpg",
  },
  {
    name: "Colchão Divino New Visco",
    desc: "Apoio ergonômico com suavidade inteligente.",
    price: "R$ 2.990",
    image: "/images/divino-new-visco.jpg",
  },
  {
    name: "Colchão One Springs",
    desc: "Equilíbrio térmico e firmeza na medida certa.",
    price: "R$ 3.490",
    image: "/images/one-springs.jpg",
  },
  // Add more products as needed
];

const assetPath = (path) => path;

export default function Products() {
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
            <a href="/sobre">Sobre</a>
            <a href="/depoimentos">Depoimentos</a>
            <a href="/blog">Blog</a>
            <a href="/contato" className="btn-outline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="products-section container">
          <div className="section-header">
            <h2>Nossos Produtos</h2>
            <p className="muted">Descubra o colchão ideal para seu conforto.</p>
          </div>
          <div className="quick-search">
            <input type="text" placeholder="Buscar por modelo" aria-label="Buscar" />
            <select aria-label="Categoria">
              <option>Categoria</option>
              <option>Ortopédico</option>
              <option>Espuma Premium</option>
              <option>Híbrido</option>
            </select>
            <select aria-label="Firmeza">
              <option>Firmeza</option>
              <option>Suave</option>
              <option>Média</option>
              <option>Firme</option>
            </select>
            <button className="btn-primary" type="button">Buscar</button>
          </div>
          <div className="product-grid">
            {PRODUCTS.map((product) => (
              <article className="product-card" key={product.name}>
                <img src={assetPath(product.image)} alt={product.name} loading="lazy" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <div className="product-footer">
                    <span className="price">{product.price}</span>
                    <button className="btn-outline" type="button">Adicionar ao Carrinho</button>
                  </div>
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
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}