import React from 'react';
import "../scss/footer.scss";
export default function Footer(){
    return(
        <footer className="footer">
            <div>
                <h4 className="footer__logo">Yukine</h4>
                <h5 className="footer__copyright">2020 Yukine's Website</h5>
            </div>
            <div className="contact">
                <h4 className="contact__title">Contact me</h4>
                <p className="contact__email">Yukine@gmail.com</p>
                <div className="contact__social">
                    <a href="#"><img src="./facebook.svg" alt="fb" /></a>
                    <a href="#"><img src="./instagram.svg" alt="ig" /></a>
                </div>
            </div>
        </footer>
    );
}