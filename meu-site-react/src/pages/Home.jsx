import React from "react";

const CATEGORIES = [
  "Ortopédico",
  "Espuma premium",
  "Híbrido",
  "Alta ventilação",
];

const PRODUCTS = [
  {
    name: "Colchão Athos Bambu",
    desc: "Toque natural e conforto refrescante para noites mais leves.",
    price: "R$ 2.490",
    image: "/assets/PRODUTOS - FOTOS/ATHOS BAMBU/1000085189.jpg",
  },
  {
    name: "Colchão Divino New Visco",
    desc: "Apoio ergonômico com suavidade inteligente.",
    price: "R$ 2.990",
    image: "/assets/PRODUTOS - FOTOS/DIVINO NEW VISCO/Mídia.jpeg",
  },
  {
    name: "Colchão One Springs",
    desc: "Equilíbrio térmico e firmeza na medida certa.",
    price: "R$ 3.490",
    image: "/assets/PRODUTOS - FOTOS/ONE SPRINGS/Mídia (10).jpg",
  },
];

const BENEFITS = [
  {
    title: "Sono reparador em 7–8 horas",
    text: "Estruturas internas pensadas para recuperar energia e reduzir pontos de pressão.",
  },
  {
    title: "Controle térmico inteligente",
    text: "Materiais que respiram e mantêm a temperatura estável durante a noite.",
  },
  {
    title: "Teste em casa por 100 noites",
    text: "Tempo suficiente para sentir a diferença com tranquilidade.",
  },
];

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
];

const POSTS = [
  {
    title: "5 hábitos para dormir melhor",
    tag: "Sono saudável",
    image: "/assets/PRODUTOS - FOTOS/CREATIVE/shared image.jpg",
  },
  {
    title: "Qual firmeza combina com você?",
    tag: "Conforto",
    image: "/assets/PRODUTOS - FOTOS/MAXIMUS PLUS 26CM/Mídia (42).jpeg",
  },
  {
    title: "Rotina noturna minimalista",
    tag: "Estilo de vida",
    image: "/assets/PRODUTOS - FOTOS/POESY/Mídia (1).jpeg",
  },
];

const assetPath = (path) => encodeURI(path);

export default function Home() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="logo-area">
            <img src="/assets/logo-probel.svg" alt="Probel" className="logo" />
            <span className="brand-note">Durma bem, viva melhor.</span>
          </div>
          <nav className="nav">
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#blog">Blog</a>
            <a href="#contato" className="btn-outline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="main-content" role="main">
        <section className="hero container" id="home">
          <div className="hero-text">
            <p className="eyebrow">Colchões premium • estilo de vida saudável</p>
            <h1>Durma melhor, viva com mais energia.</h1>
            <p className="lead">
              Colchões desenvolvidos para conforto profundo e rotina mais leve. Seu descanso começa aqui.
            </p>
            <div className="hero-actions">
              <a href="#produtos" className="btn-primary">Explorar modelos</a>
              <button className="btn-ghost" type="button">Teste em casa por 100 noites</button>
            </div>
            <div className="hero-meta">
              <div>
                <strong>+80 anos</strong>
                <span>de tecnologia em conforto</span>
              </div>
              <div>
                <strong>4,9★</strong>
                <span>avaliação média dos clientes</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={assetPath("/assets/PRODUTOS - FOTOS/CREATIVE/shared image (2).jpg")}
              alt="Quarto minimalista com luz natural"
            />
          </div>
        </section>

        <section className="categories container">
          <div className="section-header">
            <h2>Escolha pelo que você precisa hoje</h2>
            <p className="muted">Filtros rápidos para comparar firmeza, conforto e material.</p>
          </div>
          <div className="category-grid">
            {CATEGORIES.map((category) => (
              <button className="chip" key={category} type="button">
                {category}
              </button>
            ))}
          </div>
          <div className="quick-search">
            <input type="text" placeholder="Buscar por tamanho ou modelo" aria-label="Buscar" />
            <select aria-label="Selecionar firmeza">
              <option>Firmeza</option>
              <option>Suave</option>
              <option>Média</option>
              <option>Firme</option>
            </select>
            <button className="btn-primary" type="button">Buscar</button>
          </div>
        </section>

        <section className="products-section container" id="produtos">
          <div className="section-header">
            <h2>Modelos essenciais</h2>
            <p className="muted">Design minimalista, conforto máximo e tecidos respiráveis.</p>
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
                    <button className="btn-outline" type="button">Comparar</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="product-note">
            <span>Entrega em todo Brasil</span>
            <span>Garantia de fábrica</span>
            <span>Pagamento em até 10x</span>
          </div>
        </section>

        <section className="lifestyle" id="sobre">
          <div className="container lifestyle-grid">
            <div className="lifestyle-text">
              <h2>Nossa missão: elevar a qualidade do seu descanso.</h2>
              <p>
                Unimos ciência do sono, materiais conscientes e design minimalista para criar colchões que respeitam seu ritmo.
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
                src={assetPath("/assets/PRODUTOS - FOTOS/MICHELLINI/1000085502.jpg")}
                alt="Ambiente clean e luminoso"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="benefits container">
          {BENEFITS.map((benefit) => (
            <div className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </section>

        <section className="testimonials container" id="depoimentos">
          <div className="section-header">
            <h2>Depoimentos reais, mais bem-estar</h2>
            <p className="muted">Relatos sobre energia, foco e rotina leve.</p>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p>“{testimonial.text}”</p>
                <strong>{testimonial.name}</strong>
                <span className="stars">★★★★★</span>
              </article>
            ))}
          </div>
        </section>

        <section className="blog container" id="blog">
          <div className="section-header">
            <h2>Blog do sono saudável</h2>
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

        <section className="contact" id="contato">
          <div className="container contact-grid">
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

        <section className="checkout container">
          <div className="checkout-card">
            <div>
              <h2>Finalize seu pedido com tranquilidade.</h2>
              <p className="muted">Seu descanso começa aqui. Pagamento seguro e múltiplas opções.</p>
            </div>
            <button className="btn-primary" type="button">Concluir compra</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Probel • conforto que acompanha sua rotina</span>
          <div className="footer-links">
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
