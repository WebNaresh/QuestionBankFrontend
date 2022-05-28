import axios from 'axios';
import {
    CLEAR_ERRORS,
    LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, USER_FAIL, USER_REQUEST, USER_SUCCESS

} from '../constant/userConstant';


// clearing the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};




export const get_login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(" http://localhost:4000/api/v1/login", {
            email, password
        }, config);
        localStorage.setItem("token", data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        });

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message,

        });

    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_REQUEST
        });
        const config = { headers: { "Content-Type": "application/json", "token": localStorage.getItem('token') }, };
        const { data } = await axios.get(" http://localhost:4000/api/v1/me", config);
        dispatch({
            type: USER_SUCCESS,
            payload: data.user
        });

    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error.response.data.message
        });

    }
};