import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { markReducer, productReducer, questionReducer, questionsReducer } from './reducers/productReducer';
import { loginReducer } from './reducers/userReducer';

const reducers = combineReducers({
    question: productReducer,
    questionSet: questionReducer,
    questions: questionsReducer,
    mark: markReducer,
    logiUser: loginReducer

});
let initialState = {};
const middleware = [thunk];
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;