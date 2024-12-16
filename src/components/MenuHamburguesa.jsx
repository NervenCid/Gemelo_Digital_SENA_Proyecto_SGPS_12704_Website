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
                        <Link to="/Invernadero">Invernadero</Link>
                    </ol>
                    <ol>
                        <Link to="/Resultado">Resultados</Link>
                    </ol>
                    <ol>
                        <Link to="/EstadoDelArte">Estado del Arte</Link>
                    </ol>
                    <ol>
                        <Link to="/Equipo">Quienes somos</Link>
                    </ol>
                </nav>
            </div>
        </header>
    );
};

export default MenuHamburguesa;
