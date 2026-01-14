import React from "react";

export default function Cart() {
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
            <a href="/contato" className="btn-outline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="container">
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
            <a href="/">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}