import password from "./Password";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    password: password,
    email: password,
});