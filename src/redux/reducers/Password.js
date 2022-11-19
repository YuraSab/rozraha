import {CLEAR_EMAIL, CLEAR_PASSWORD, SET_EMAIL, SET_PASSWORD} from "../action-types/Password";

const initialState = {
    password: '',
    email: ''
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL: {
            return{
                ...state,
                email: action.payload
            }
        }
        case CLEAR_EMAIL: {
            return{
                ...state,
                email: ""
            }
        }
        case CLEAR_PASSWORD: {
            return{
                ...state,
                password: ""
            }
        }
        case SET_PASSWORD: {
            return{
                ...state,
                password: action.payload
            }
        }
        default: {
            return state
        }
    }
}