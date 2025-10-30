import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
                <nav>
                    <ul>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><a href="/privacidade">Política de Privacidade</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;