import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, USER_FAIL, USER_REQUEST, USER_SUCCESS } from '../constant/userConstant';



export const loginReducer = (state = { loginInfo: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case USER_REQUEST:
            return {
                loading: true,
                isAuthenticatedUser: false
            };
        case LOGIN_SUCCESS:
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticatedUser: true,
                loginUser: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticatedUser: false,
                error: action.payload,
                user: null
            };
        case USER_FAIL:
            return {
                loading: false,
                isAuthenticatedUser: false,
                error: action.payload,
                user: null
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};