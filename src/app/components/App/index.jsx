import * as React from "react";
import {Route, Switch} from "react-router-dom";

import "./index.scss";

import Home from "../Home";
import About from "../About";
import Layout from "../Layout";

const App = () => {
    return (
        <div className="_app">
            <h1 className="title">Welcome to React App</h1>
            <Layout>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Layout>
        </div>
    );
};

export default App;
