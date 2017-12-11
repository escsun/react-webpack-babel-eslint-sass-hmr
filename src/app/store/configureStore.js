import {
  applyMiddleware,
  createStore
} from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const history = createHistory();
const router = routerMiddleware(history);

const middlewares = [
  router,
];

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
