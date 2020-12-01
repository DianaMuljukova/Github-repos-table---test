import React from "react";
import logo from "../images/logo.svg"

export const Header = () => {
    return (
        <header className="header">
            <div className="logo header__logo">
                <a href="/" className="logo__link">
                    <img className="logo__link-img" src={logo} alt="logo" width="384" height="127"/>
                </a>
            </div>
        </header>
    )
};