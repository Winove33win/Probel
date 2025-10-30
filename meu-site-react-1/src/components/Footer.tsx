import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;