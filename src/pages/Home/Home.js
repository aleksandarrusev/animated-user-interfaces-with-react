import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Home.scss";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

class Home extends React.Component {
  state = {
    boxVisible: true,
    modalVisible: false
  };

  setVisible = value => {
    this.setState({
      boxVisible: value
    });
  };
  setModalVisible = value => {
    this.setState({
      modalVisible: value
    });
  };

  render() {
    return (
      <>
        <div className="box-container">
          <CSSTransition
            in={this.state.boxVisible}
            unmountOnExit
            timeout={400}
            classNames="box"
          >
            <div className="box" />
          </CSSTransition>
        </div>
        <div className="btn-container">
          <Button onClick={() => this.setVisible(!this.state.boxVisible)}>
            Toggle animation
          </Button>
          <Button onClick={() => this.setModalVisible(true)}>Open modal</Button>
        </div>
        <Modal
          open={this.state.modalVisible}
          closeModal={() => this.setModalVisible(false)}
        >
          <h2>Hello from the modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            recusandae.
          </p>
        </Modal>
      </>
    );
  }
}

export default Home;
