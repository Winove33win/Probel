import React, { useEffect, useState } from "react";

/* Página Black Friday Probel — usa assets em public/assets */
const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || "/api/leads/probel-blackfriday";
const QUADROS_IMAGES = [
  { src: "/assets/prod1.jpg", alt: "Quadro Probel com colchão em destaque" },
  { src: "/assets/prod2.jpg", alt: "Ambiente Probel com cama e enxoval" },
  { src: "/assets/prod3.jpg", alt: "Detalhe de conforto em ambiente Probel" },
  { src: "/assets/prod4.jpg", alt: "Composição Probel com base e colchão" },
  { src: "/assets/prod5.jpg", alt: "Cena premium do showroom Probel" },
  { src: "/assets/prod6.jpg", alt: "Close de acabamento de produto Probel" },
];

function MiniForm({ meta = {}, onSuccess }) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !whatsapp) return alert("Nome e WhatsApp obrigatórios");
    setLoading(true);
    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, whatsapp, email, ...meta }),
      });
      setName(""); setWhatsapp(""); setEmail("");
      onSuccess && onSuccess();
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="card form" onSubmit={handleSubmit} aria-label="Formulário Black Friday Probel">
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" required />
      <input name="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+55 (11) 9xxxx-xxxx" required />
      <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail (opcional)" />
      <label className="checkbox"><input type="checkbox" defaultChecked /> Quero receber ofertas da Probel</label>
      <button className="btn-primary" type="submit" disabled={loading}>{loading ? "Enviando..." : "Quero meu desconto agora"}</button>
    </form>
  );
}

export default function Home() {
  const [leadSent, setLeadSent] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    function onScroll() {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setShowFloat(pct >= 0.55);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (leadSent) {
      alert("Pronto, ofertas reservadas para você. Um consultor Probel pode entrar em contato pelo seu WhatsApp.");
      document.getElementById("ofertas")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [leadSent]);

  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="left">
            <img src="/assets/logo-probel.svg" alt="Probel" className="logo" />
            <span className="topbar-text">Black Friday Probel • até 70% OFF + 10x + frete inteligente</span>
          </div>
          <a href="#lead-bf" className="btn-pill cta">Quero meu desconto</a>
        </div>
      </header>

      <main className="container main-content" id="main" role="main">
        <section className="hero">
          <div className="hero-left">
            <h1>Começou a maior Black Friday de Colchões Probel</h1>
            <p className="lead">Preencha e receba agora as ofertas secretas + cupom extra para colchões e conjuntos box.</p>
            <ul className="hero-bullets">
              <li>Descontos reais direto da fábrica</li>
              <li>Conjuntos box e colchões premium</li>
              <li>Condições válidas por tempo limitado</li>
            </ul>
            <div className="hero-actions">
              <a href="#lead-bf" className="btn-primary pill">Liberar minhas ofertas</a>
              <a href="https://wa.me/5511000000000" className="btn-ghost pill">Falar com especialista</a>
            </div>
          </div>

          <div className="hero-right" id="lead-bf-anchor">
            <MiniForm onSuccess={() => setLeadSent(true)} meta={{ position: "hero" }} />
            <div className="trust">Garantimos sigilo dos seus dados. Você receberá apenas ofertas da campanha.</div>
          </div>

          {/* Banner: usa banner1 (se for HTML, substitua manualmente) */}
          <img src="/assets/banner1.jpg" alt="Banner Probel" className="hero-bg" loading="lazy" />
          <div className="flag">BLACK FRIDAY</div>
        </section>

        <section className="proof">
          <div className="container-row">
            <img src="/assets/logo-probel.svg" alt="Probel" className="logo-small" />
            <div className="proof-items">
              <span>+80 anos de conforto</span>
              <span>Entrega em todo Brasil</span>
              <span>Garantia de fábrica</span>
              <span>+4,9★ avaliação</span>
            </div>
            <a href="#ofertas" className="btn-pill view-offers">Ver ofertas</a>
          </div>
        </section>

        <section className="choices">
          <h2>Escolha o que você quer hoje</h2>
          <div className="grid-2">
            <a href="#ofertas" className="choice">Colchões casal</a>
            <a href="#conjuntos" id="conjuntos" className="choice">Conjunto box</a>
            <a href="#ofertas" className="choice">Queen / King</a>
            <a href="#ofertas" className="choice">Base/Box/Complementos</a>
          </div>
        </section>

        <section className="vitrine" id="ofertas">
          <h3>Mais vendidos da Black Friday</h3>
          <div className="products grid-2">
            {[1,2,3,4,5,6].map((i) => (
              <article className="product-card" key={i}>
                <img src={`/assets/prod${i}.jpg`} alt={`Produto ${i}`} loading="lazy" />
                <div className="pd-info">
                  <div className="pd-name">Produto {i}</div>
                  <div className="pd-price">R$ {(i*499).toLocaleString('pt-BR')}</div>
                  <div className="pd-old">R$ {(i*999).toLocaleString('pt-BR')}</div>
                  <div className="pd-cond">Até 10x s/ juros</div>
                </div>
                <div className="pd-actions">
                  <span className="selo">Black Friday</span>
                  <a href="#lead-bf" className="btn-pill btn-blue">Quero este</a>
                </div>
              </article>
            ))}
          </div>

          <div className="mini-form-row">
            <MiniForm meta={{ position: "vitrine-1" }} onSuccess={() => setLeadSent(true)} />
          </div>
        </section>

        <section className="vitrine">
          <h3>Conjuntos box com maior desconto</h3>
          <div className="products grid-2">
            {[5,6,7,8].map((i) => (
              <article className="product-card" key={i}>
                <img src={`/assets/prod${i}.svg`} alt={`Produto ${i}`} />
                <div className="pd-info">
                  <div className="pd-name">Conjunto Exemplo {i}</div>
                  <div className="pd-price">R$ {i * 799}</div>
                  <div className="pd-old">R$ {i * 1599}</div>
                  <div className="pd-cond">Até 10x s/ juros</div>
                </div>
                <div className="pd-actions">
                  <span className="selo">Black Friday</span>
                  <a href="#lead-bf" className="btn-pill btn-blue">Quero este</a>
                </div>
              </article>
            ))}
          </div>

          <div className="mini-form-row">
            <MiniForm meta={{ position: "vitrine-2" }} onSuccess={() => setLeadSent(true)} />
          </div>
        </section>

        <section className="why">
          <h3>Por que comprar agora na Black Friday Probel</h3>
          <div className="grid-3">
            <div className="reason"><strong>Descontos que não vão pra loja</strong><p>Ofertas exclusivas e cupons adicionais.</p></div>
            <div className="reason"><strong>Compra orientada por especialista</strong><p>Consultores prontos via WhatsApp.</p></div>
            <div className="reason"><strong>Garantia e conforto Probel</strong><p>Testados e com garantia de fábrica.</p></div>
          </div>
        </section>

        <section className="reviews">
          <h3>Avaliações</h3>
          <div className="grid-3">
            <div className="review"><strong>Mariana — SP</strong><div className="stars">★★★★★</div><p>"Melhor sono da vida."</p></div>
            <div className="review"><strong>Rafael — RJ</strong><div className="stars">★★★★★</div><p>"Entrega rápida e produto top."</p></div>
            <div className="review"><strong>Ana — MG</strong><div className="stars">★★★★★</div><p>"Comprei o conjunto box e estou amando."</p></div>
          </div>
        </section>

        <section className="quadros" id="quadros">
          <div className="quadros-header">
            <div>
              <h3>Quadros Probel TN</h3>
              <p className="muted">
                Um feed visual profissional com imagens selecionadas da marca — organizado como quadros, sempre em
                formato quadrado para manter consistência e impacto.
              </p>
            </div>
            <a href="#lead-bf" className="btn-pill btn-blue">Receber ofertas</a>
          </div>
          <div className="quadros-grid">
            {QUADROS_IMAGES.map((item, index) => (
              <article className="quadro-card" key={item.src}>
                <div className="quadro-media" style={{ animationDelay: `${index * 80}ms` }}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="final-cta" className="final-cta">
          <div className="final-inner">
            <h2>Última chance de receber as ofertas secretas</h2>
            <p className="muted">Campanha válida para período limitado ou enquanto durarem os estoques.</p>
            <MiniForm meta={{ position: "final" }} onSuccess={() => setLeadSent(true)} />
            <p className="lgpd">Texto LGPD curto. Garantimos o uso responsável dos seus dados.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="left"><img src="/assets/logo-probel.svg" alt="Probel" className="logo" /><div>Ofertas por tempo limitado. Sujeito a estoque.</div></div>
          <div className="right"><a href="tel:0800000000">0800 000 000</a><a href="https://wa.me/5511000000000">WhatsApp</a><a href="/institucional">Institucional</a></div>
        </div>
      </footer>

      {showFloat && (
        <div className="floating-cta">
          <a href="#lead-bf" className="btn-pill float-inner">
            <span>A Black Friday Probel está rolando agora</span>
            <strong className="pill-black">Quero meu cupom</strong>
          </a>
        </div>
      )}
    </div>
  );
}
