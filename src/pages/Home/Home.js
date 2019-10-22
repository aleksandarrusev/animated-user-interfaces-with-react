import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";
import './Home.scss';
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const Home = () => {
    const [visible, setVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    return <>
        <div className="box-container">
            <CSSTransition
                in={visible}
                unmountOnExit
                timeout={400}
                classNames="box"
            >
                <div className="box"/>
            </CSSTransition>
        </div>
        <div className="btn-container">
            <Button onClick={() => setVisible(!visible)}>Toggle animation</Button>
            <Button onClick={() => setModalVisible(true)}>Open modal</Button>
        </div>
        <CSSTransition
            in={modalVisible}
            timeout={500}
            classNames="modal"
            unmountOnExit
        >
            <Modal open={true} closeModal={() => setModalVisible(false)}>
                <h2>Hello from the modal</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, recusandae.</p>
            </Modal>
        </CSSTransition>
    </>
};

export default Home;
