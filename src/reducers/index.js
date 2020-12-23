import { combineReducers } from "redux";
import UserReducers from "./userReducer";
import CartReducers from "./cartReducer";
const rootReducer = combineReducers({
	UserReducers,
	CartReducers,
});
export default rootReducer;
