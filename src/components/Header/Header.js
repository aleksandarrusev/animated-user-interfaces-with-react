import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return <header>
            <ul className="menu">
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/timeline">Timeline</Link>
                </li>
            </ul>
    </header>
};

export default Header;