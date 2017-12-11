import "core-js/es6/map";
import "core-js/es6/set";

import * as React from "react";
import * as ReactDOM from "react-dom";
// Import hot loader
import {AppContainer} from "react-hot-loader";
// Import redux and router-redux
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
// import history and store
import createHistory from "history/createBrowserHistory";
import configureStore from "./store/configureStore";

import "./index.scss";

import App from "./components/App";

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore()}>
                <ConnectedRouter history={createHistory()}>
                    <Component/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById("root")
    );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", () => render(App));
}
