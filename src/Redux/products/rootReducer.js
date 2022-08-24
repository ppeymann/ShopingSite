import { combineReducers } from "redux";
import cartReducer from "../cart/cartReducer";
import catoReducer from "../category/catoReducer";
import productReducer from "./productsReduce";


const rootReducer = combineReducers({
    slideState: productReducer,
    catoState:catoReducer,
    cartState:cartReducer
})

export default rootReducer