import { FaUser, FaClipboardList, FaListOl } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function BottomNavigation() {
    const location = useLocation();

    return (
        <div className="bottom-navigation">
            <nav>
                {[
                    ["Rutazioni", "/", <FaClipboardList size={20} />],
                    ["Rutasslifica", "/rutasslifica", <FaListOl size={20} />],
                    ["Rutatore", "/rutatore", <FaUser size={20} />],
                ].map(([title, url, icon]) => (
                    <Link
                        key={url}
                        to={url}
                        className={`nav-link-custom ${location.pathname === url ? "active" : ""
                            }`}
                    >
                        {icon} {title}
                    </Link>
                ))}
            </nav>
        </div>
    );
}