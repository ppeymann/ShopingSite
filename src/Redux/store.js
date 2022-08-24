import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./products/rootReducer";

export const store = createStore(rootReducer , applyMiddleware(thunk))
