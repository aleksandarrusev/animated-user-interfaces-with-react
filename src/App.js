import React, { useState, useEffect } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
        setVisible(true);
  }, []);

  return (
    <div className="app">
      <div className="box-container">
        <CSSTransition
          in={visible}
          mountOnEnter
          timeout={400}
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
