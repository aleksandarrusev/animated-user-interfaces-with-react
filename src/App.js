import React, { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="app">
      <div className="box-container">
        <CSSTransition
          in={visible}
          timeout={500}
          classNames="my-node"
          unmountOnExit
        >
          <div className="box" />
        </CSSTransition>
      </div>
      <div className="btn-container">
        <button onClick={() => setVisible(!visible)}>Show</button>
      </div>
    </div>
  );
}

export default App;
