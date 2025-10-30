import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageContent from '../components/PageContent';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                <PageContent>{children}</PageContent>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;