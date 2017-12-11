import * as fromRouter from "react-router-redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  routing: fromRouter.routerReducer,
});

export default rootReducer;
