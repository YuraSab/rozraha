import {CLEAR_EMAIL, CLEAR_PASSWORD, SET_EMAIL, SET_PASSWORD} from "../action-types/Password";

export const setEmail = (message) => ({
    type:  SET_EMAIL,
    payload: message
});
export const clearEmail = () => ({
    type:  CLEAR_EMAIL,
});
export const setPassword = (message) => ({
    type:  SET_PASSWORD,
    payload: message
});
export const clearPassword = () => ({
    type:  CLEAR_PASSWORD,
});