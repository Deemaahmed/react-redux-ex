import MainReducer from '../app.reducer'
import { createStore, applyMiddleware } from "redux";

//This is used when you need specefic middlewares. For example for API calls 
const middlewares = []

export default createStore(MainReducer, {}, applyMiddleware(...middlewares));
