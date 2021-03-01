import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <h4 className="header__logo">Yukine</h4>
        <p className="contact__email">Email : Yukine@gmail.com</p>
        <div className="contact__social">
          <a href="http://facebook.com/nguyentuananh.phuphuc">
            <img src="./facebook.svg" alt="fb" />
            Facebook
          </a>
          <a href="http://instagram.com/_nguyenductuananh">
            <img src="./instagram.svg" alt="ig" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
