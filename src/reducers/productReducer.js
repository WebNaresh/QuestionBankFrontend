import { ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_QUESTIONSET_FAIL, ALL_QUESTIONSET_REQUEST, ALL_QUESTIONSET_SUCCESS, ALL_QUESTION_ANSWER_CHECK_FAIL, ALL_QUESTION_ANSWER_CHECK_REQUEST, ALL_QUESTION_ANSWER_CHECK_SUCCESS, ALL_QUESTION_FAIL, ALL_QUESTION_REQUEST, ALL_QUESTION_SUCCESS, CLEAR_ERRORS } from '../constant/productConstant.';

export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                question: []
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                question: action.payload
            };
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
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

export const questionReducer = (state = { questionSet: [] }, action) => {
    switch (action.type) {
        case ALL_QUESTIONSET_REQUEST:
            return {
                loading: true,
                ...state
            };
        case ALL_QUESTIONSET_SUCCESS:
            return {
                loading: false,
                questionSet: action.payload,
                userQuestionSet: action.user
            };
        case ALL_QUESTIONSET_FAIL:
            return {
                loading: false,
                error: action.payload
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

export const questionsReducer = (state = { question: [] }, action) => {
    switch (action.type) {
        case ALL_QUESTION_REQUEST:
            return {
                loading: true,
                ...state
            };
        case ALL_QUESTION_SUCCESS:
            return {
                loading: false,
                question: action.payload,
            };
        case ALL_QUESTION_FAIL:
            return {
                loading: false,
                error: action.payload
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
export const markReducer = (state = { answerCheck: [] }, action) => {
    switch (action.type) {
        case ALL_QUESTION_ANSWER_CHECK_REQUEST:
            return {
                loading: true,
                ...state
            };
        case ALL_QUESTION_ANSWER_CHECK_SUCCESS:
            return {
                loading: false,
                answerCheck: action.pushIt
            };
        case ALL_QUESTION_ANSWER_CHECK_FAIL:
            return {
                loading: false,
                error: action.payload
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
