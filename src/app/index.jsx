import "./polyfills";

import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import configureStore from "./store/configureStore";

import "./index.scss";

import App from "./components/App";

const history = createHistory();
const store = configureStore(history);

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
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
