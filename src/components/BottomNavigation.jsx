import { FaUserFriends, FaBoxOpen, FaRegHospital, FaUser, FaClipboardList, FaListOl } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
    return (
        <div className="bottom-navigation">
            <nav>
                {[
                    ["Rutazioni", "/", <FaClipboardList size={20} />],
                    ["Rutasslifica", "/utenti", <FaListOl size={20} />],
                    ["Account", "/ordini", <FaUser size={20} />],
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