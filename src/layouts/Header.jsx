import { Outlet, Link } from "react-router-dom";
import SenaIcon from "../components/senaIcon";
import MenuHamburguesa from "../components/MenuHamburguesa";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <figure className="header__image">
                    <SenaIcon height={80} />
                </figure>
                <MenuHamburguesa />
            </div>
        </header>
    );
};
