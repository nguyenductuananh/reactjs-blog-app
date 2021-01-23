import React from 'react';

export function Footer(){
    return(
        <footer className="footer">
            <div>
                <h4 className="footer__logo">Yukine</h4>
                <h5 className="footer__copyright">2020 Yukine's Website</h5>
            </div>
            <div className="contact">
                <h4>Contact me</h4>
                <p className="contact__email">Yukine@gmail.com</p>
                <div className="contact__social">
                    <a href="#"><img src="" alt="fb" /></a>
                    <a href="#"><img src="" alt="ig" /></a>
                </div>
            </div>
        </footer>
    );
}