import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                    <span className="hamburger__line"></span>
                </button>

                <nav
                    className={`header__navbar ${isOpen ? "navbar--open" : ""}`}
                >
                    <ol>
                        <Link to="/">Inicio</Link>
                    </ol>
                    <ol>
                        <Link to="/Invern">Invernadero</Link>
                    </ol>
                    <ol>
                        <Link to="/Team">Quienes somos</Link>
                    </ol>
                </nav>
            </div>
        </header>
    );
};

export default MenuHamburguesa;
