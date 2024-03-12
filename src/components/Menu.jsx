import { FaUser, FaClipboardList, FaListOl, FaChartLine, FaUserFriends, FaFileAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Menu(props) {
    const location = useLocation();

    return (
        <div className={`menu ${props.visible ? 'show' : ''}`}>
            <nav>
                {[
                    ["Rutazioni", "/", <FaClipboardList size={20} />],
                    ["RutaBonus", "/rutabonus", <FaChartLine size={20} />],
                    ["Formazioni", "/formazioni", <FaUserFriends size={20} />],
                    ["Rutasslifica", "/rutasslifica", <FaListOl size={20} />],
                    ["Rutatore", "/rutatore", <FaUser size={20} />],
                    ["Regolamento", "/regolamento", <FaFileAlt size={20} />],
                ].map(([title, url, icon]) => (
                    <Link
                        key={url}
                        to={url}
                        onClick={props.onChangePage}
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