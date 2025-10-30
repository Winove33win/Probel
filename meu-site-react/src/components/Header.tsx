import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importando estilos específicos do cabeçalho

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Meu Site</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;