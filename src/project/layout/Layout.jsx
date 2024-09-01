// src/layout/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div>
            <Header />
            <div className='Childern_Content'>
                {!isHomePage && <Breadcrumbs />}
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
