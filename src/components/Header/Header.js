import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import anime from "animejs";

const Header = () => {
  return (
    <header className="header-container">
      <Transition
        in
        appear={true}
        addEndListener={(node, done) => {
          const tl = anime.timeline({
            duration: 1000,
            easing: "easeOutExpo"
          });

          tl.add({
            targets: ".bottom-line",
            maxWidth: "100%",
            duration: 2000,
            delay: 400
          });
          tl.add(
            {
              complete: done,
              targets: ".menu-item",
              opacity: [0, 1],
              translateY: [-100, 0],
              delay: anime.stagger(140)
            },
            "-=1000"
          );
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
      <div className="bottom-line" />
    </header>
  );
};

export default Header;
