import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";
import {Transition} from "react-transition-group";
import anime from 'animejs'
const Header = () => {
    return <header className="header-container">
        <Transition
            in={true}
            appear={true}
            addEndListener={(node, done) => {
                anime({
                    complete: done,
                    targets: '.menu-item',
                    opacity: [0, 1],
                    duration: 1000,
                    translateY: [-100, 0],
                    delay: anime.stagger(140),
                    easing: 'easeInExpo'
                })
            }}
        >
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/">Simple transitions</Link>
                </li>
                <li className="menu-item">
                    <Link to="/list">List transitions</Link>
                </li>
                <li className="menu-item">
                    <Link to="/anime">More complex animations</Link>
                </li>
            </ul>
        </Transition>
    </header>
};

export default Header;
