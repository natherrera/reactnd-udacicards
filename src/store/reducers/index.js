import { combineReducers } from 'redux';
import deskReducer from './deskReducer';
import quizReducer from './quizReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
    deskReducer: deskReducer,
    quizReducer: quizReducer,
    questionReducer: questionReducer,
});

export default rootReducer;
