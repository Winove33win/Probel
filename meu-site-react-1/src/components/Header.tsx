import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Meu Site</h1>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;