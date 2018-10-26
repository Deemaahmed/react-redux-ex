import {createStore, combineReducers, applyMiddleware} from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const logger = createLogger();

//createStore takes 3 arguments: combined reducers, an initial state and the enhancer: applyMiddleware
export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(thunk,logger)
);