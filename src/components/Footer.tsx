import React from "react";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                    <div className="footer__social">
                        <a className="footer__social-link" href="#">FACEBOOK</a>
                        <a className="footer__social-link" href="#">TWITTER</a>
                        <a className="footer__social-link" href="#">GOOGLE+</a>
                        <a className="footer__social-link" href="#">BEHANCE</a>
                        <a className="footer__social-link" href="#">DRIBBLE</a>
                        <a className="footer__social-link" href="#">INSTAGRAM</a>
                    </div>
                    <div className="footer__adress">
                        Mese Selimovica 52, Banja Luka - BiH
                    </div>
                    <a className="footer__phone" href="tel:0038765252222">(00387) 65 252 222</a>
                    <a className="footer__email" href="mailto:info@mail.com">info@mail.com</a>
                </div>
            <div className="footer__copy">@{new Date().getFullYear()}</div>
        </footer>
    )
};