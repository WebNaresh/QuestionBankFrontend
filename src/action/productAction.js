import axios from 'axios';
import {
    ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_QUESTIONSET_FAIL, ALL_QUESTIONSET_REQUEST, ALL_QUESTIONSET_SUCCESS, ALL_QUESTION_FAIL, ALL_QUESTION_REQUEST, ALL_QUESTION_SUCCESS, CLEAR_ERRORS

} from '../constant/productConstant.';
export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST,
        });
        // console.log(process.env.REACT_APP_QUESTION_SET);
        const { data } = await axios.get(process.env.REACT_APP_QUESTION_SET);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data.question
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// clearing the errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};

export const getQuestionSet = (id) => async (dispatch) => {
    try {
        // console.log(id);
        dispatch({
            type: ALL_QUESTIONSET_REQUEST,
        });
        const { data } = await axios.get(`/api/v1/questionSet/${id}`);
        // console.table(data.questionSet);
        dispatch({
            type: ALL_QUESTIONSET_SUCCESS,
            payload: data.questionSet,
            user: data.questionSet[0].questionType
        });
    } catch (error) {
        dispatch({
            type: ALL_QUESTIONSET_FAIL,
            payload: error.response.data.message,
        });
    }
};
export const getQuestion = (code, string) => async (dispatch) => {
    try {
        // console.log(id);
        dispatch({
            type: ALL_QUESTION_REQUEST,
        });
        // console.log(code);
        // console.log(string);
        const { data } = await axios.get(`/api/v1/questions?questionSetCode=${code}&questionType=${string}`);
        // console.log(data.questions[0].answers[0].answer);
        // console.log(data.questions[1].answers[0].answer);
        dispatch({
            type: ALL_QUESTION_SUCCESS,
            payload: data.questions,
        });
    } catch (error) {
        dispatch({
            type: ALL_QUESTION_FAIL,
            payload: error.response.data.message,
        });
    }
};
export const getMark = (i) => async (dispatch) => {
    dispatch({
        marks: i
    });
};