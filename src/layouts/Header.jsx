import { Outlet, Link } from "react-router-dom";
import SenaIcon from "../components/senaIcon";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <figure className="header__image">
                    <SenaIcon height={80} />
                </figure>

                <nav className="header__navbar">
                    <ol>
                        <Link to="/">Inicio</Link>
                    </ol>
                    <ol>
                        <Link to="Invern">Invernadero</Link>
                    </ol>
                    <ol>
                        <Link to="Team">Quienes somos</Link>
                    </ol>
                </nav>
            </div>
        </header>
    );
}
