import { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="w-16">
                    <div className={`hamburger-icon ${showMenu ? 'show' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="font-semibold text-2xl text-white text-center">FantaRuta</div>
                </div>
                <div className="w-16">
                    <Link to="https://kappo.it" target="_blank">
                        <img className="w-full p-3" src="/images/kappo.svg" alt="Kappo" />
                    </Link>
                </div>
            </div>
            <Menu visible={showMenu} onChangePage={() => setShowMenu(false)} />
        </>
    );
}