import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import AnimatedSwitch from "./components/AnimatedSwitch/AnimatedSwitch";
import Anime from "./pages/Anime/Anime";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <AnimatedSwitch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/anime" component={Anime} />
        </AnimatedSwitch>
      </div>
    </BrowserRouter>
  );
};

export default App;
