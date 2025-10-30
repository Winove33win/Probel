// ...existing code...
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContent from '../components/PageContent';

const Home = (): JSX.Element => {
    return (
        <>
            <Header />
            <main id="main" role="main">
                <PageContent>
                    <h1>Bem-vindo ao Meu Site!</h1>
                    <p>
                        Esta é a página inicial do nosso site. Aqui você pode encontrar informações sobre nossos
                        serviços e muito mais.
                    </p>

                    <figure>
                        <img
                            src="/assets/placeholder-hero.jpg"
                            alt="Exposição de produtos Probel"
                            width={1200}
                            height={700}
                            loading="lazy"
                        />
                        <figcaption style={{ position: 'absolute', left: '-99999px' }}>
                            Imagem ilustrativa dos produtos
                        </figcaption>
                    </figure>

                    <p>
                        <a href="/sobre" aria-label="Saiba mais sobre nós">Saiba mais sobre nós</a>
                    </p>
                </PageContent>
            </main>
            <Footer />
        </>
    );
};

export default Home;
// ...existing code...