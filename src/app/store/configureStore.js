import {
  applyMiddleware,
  createStore
} from "redux";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const configureStore = (history) => {

  const routerMiddleware = createRouterMiddleware(history);

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
        routerMiddleware
    ))
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
