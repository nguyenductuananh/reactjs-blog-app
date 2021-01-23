import React from 'react';
function Header() {
    return (
        <header className="header">
            <h1 className="header__logo">Yukine</h1>
            <ul className="header__nav">
                <li className="header__nav--item"><a href="#">Home</a></li>
                <li className="header__nav--item"><a href="#">About Me</a></li>
            </ul>
        </header>
    );
}

export default Header;