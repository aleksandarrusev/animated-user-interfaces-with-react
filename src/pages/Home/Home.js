import React, {useState, useEffect} from "react";
import {CSSTransition, Transition} from "react-transition-group";
import anime from "animejs";
import './Home.css';
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const Home = () => {
    const [visible, setVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return <>
        <div className="box-container">
            <Transition
                in={visible}
                mountOnEnter
                unmountOnExit
                timeout={400}
                addEndListener={(node, done) => {
                    anime({
                        complete: done,
                        duration: 800,
                        easing: visible ? 'easeInExpo' : 'easeOutExpo',
                        targets: node,
                        translateX: visible ? [-300, 0] : [0, 300],
                        opacity: visible ? [0, 1] : [1, 0],
                        maxHeight: visible ? [0, '100%'] : ['100%', 0],
                    });
                }}
            >
                <div className="box"/>
            </Transition>
        </div>
        <div className="btn-container">
            <Button onClick={() => setVisible(!visible)}>Start animation</Button>
            <Button onClick={() => setModalVisible(true)}>Open modal</Button>
        </div>
        <CSSTransition
            in={modalVisible}
            timeout={500}
            classNames="modal"
            unmountOnExit
        >
            <Modal open={true} closeModal={() => setModalVisible(false)}/>
        </CSSTransition>
    </>
};

export default Home;