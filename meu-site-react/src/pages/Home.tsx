import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContent from '../components/PageContent';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <PageContent>
                    <h1>Bem-vindo ao Meu Site!</h1>
                    <p>Esta é a página inicial do nosso site. Aqui você pode encontrar informações sobre nossos serviços e muito mais.</p>
                    <img src="/path/to/image.jpg" alt="Descrição da imagem" />
                    <a href="/sobre">Saiba mais sobre nós</a>
                </PageContent>
            </main>
            <Footer />
        </div>
    );
};

export default Home;