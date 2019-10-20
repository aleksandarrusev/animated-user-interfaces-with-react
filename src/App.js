import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/timeline">
                        <List/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
