import React, {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Switch, withRouter} from "react-router-dom";
import './AnimatedSwitch.css';

const AnimatedSwitch = ({children, location}) => {
    // const [show, setShow] = useState(false);
    //
    // useEffect(() => {
    //     setShow(true)
    // }, []);

    return <TransitionGroup className="transition-group" >
        <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={400}
            appear={true}
        >
            <section className="route-section">
                <Switch location={location}>
                    {children}
                </Switch>
            </section>
        </CSSTransition>
    </TransitionGroup>

};

export default withRouter(AnimatedSwitch);