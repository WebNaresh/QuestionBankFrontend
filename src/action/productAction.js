import axios from 'axios';
import {
    ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_QUESTIONSET_FAIL, ALL_QUESTIONSET_REQUEST, ALL_QUESTIONSET_SUCCESS, ALL_QUESTION_ANSWER_CHECK_FAIL, ALL_QUESTION_ANSWER_CHECK_REQUEST, ALL_QUESTION_ANSWER_CHECK_SUCCESS, ALL_QUESTION_FAIL, ALL_QUESTION_REQUEST, ALL_QUESTION_SUCCESS, CLEAR_ERRORS

} from '../constant/productConstant.';
export const getProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST,
        });
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
        dispatch({
            type: ALL_QUESTIONSET_REQUEST,
        });
        const { data } = await axios.get(` http://localhost:4000/api/v1/questionSet/${id}`);
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
        dispatch({
            type: ALL_QUESTION_REQUEST,
        });
        const { data } = await axios.get(` http://localhost:4000/api/v1/questions?questionSetCode=${code}&questionType=${string}`);
        const secondeArray = data.questions;
        data.filter1.forEach(element => {
            data.questions.filter((questions) => {
                if (element === questions._id) {
                    let index = secondeArray.indexOf(questions);
                    secondeArray.splice(index, 1);
                }
                return questions;

            });
        });


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
export const getAnswerCheck = (userAnswer, mark, questionSetId, userId, id) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_QUESTION_ANSWER_CHECK_REQUEST
        });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(` http://localhost:4000/api/v1/questions/${id}/`, { userAnswer, mark, questionSetId, userId },
            config);
        console.log(data);
        dispatch({ type: ALL_QUESTION_ANSWER_CHECK_SUCCESS });


    } catch (error) {
        console.log(error);
        dispatch({
            type: ALL_QUESTION_ANSWER_CHECK_FAIL,
            payload: error.response.data.message,
        });
    }
};
