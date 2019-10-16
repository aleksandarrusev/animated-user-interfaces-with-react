import React, {useState, useEffect} from "react";
import "./App.css";
import {CSSTransition, Transition} from "react-transition-group";
import anime from "animejs";

function App() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className="app">
            <div className="box-container">
                <Transition
                    in={visible}
                    mountOnEnter
                    unmountOnExit
                    timeout={400}
                    addEndListener={(node, done) => {
                        const tl = anime.timeline({
                            complete: done,
                            duration: 800,
                            easing: visible ? 'easeInExpo' : 'easeOutExpo',
                            targets: node,
                        });
                        tl.add({
                            translateX: visible ? [-300, 0] : [0, 300],
                            opacity: visible ? [0, 1] : [1, 0],
                            maxHeight: visible ? [0, '100%'] : ['100%', 0],
                        })
                    }}
                >
                    <div className="box"/>
                </Transition>
            </div>
            <div className="btn-container">
                <button onClick={() => setVisible(!visible)}>Show</button>
            </div>
        </div>
    );
}

export default App;
