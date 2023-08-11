import React from 'react';
import Nav from './Navigation';

function Header(props) {
 const { currentTab, handleTabChange } = props;

 return (
    <div>
        <section>
            <header className= "flex-row px-1">
                <div>
                <h1>Geofferey Eidem's Portfolio</h1>
                </div>
                <div>
                    <Nav
                        currentTab={currentTab}
                        handleTabChange={handleTabChange}
                    ></Nav>
                </div>
            </header>
        </section>
        <section class= "hero">
            <div class="hero-text">
                <h2>Welcome</h2>
                <p>
                    Welcome to Geofferey (Gibby) Eidem's portfolio page built with React. Here you will find a little bit about me, 
                    my contact information, and some of my projects.
                </p>
            </div>
        </section>
    </div>
    );
 }

    export default Header;

