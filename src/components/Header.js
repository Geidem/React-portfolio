import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('Home');

const renderPage = () => {
    switch (currentPage) {
        case 'About':
            return <About />;
        case 'Contact':
            return <Contact />;
        case 'Portfolio':
            return <Portfolio />;
        case 'Resume':
            return <Resume />;
        default:
            return <About />;
    }
};

return (
    <div>
        <nav className= "navbar">
            <div className="navbar-brand">
                <a
                classname = "navbar-item"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Geidem?tab=repositories"
                >
                    <span className="content is-large"> Geofferey (Gibby) Eidem</span>
                </a>
            </div>
        </nav>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
        );
    }

    export default Header;

