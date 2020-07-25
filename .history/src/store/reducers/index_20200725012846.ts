import { combineReducers } from 'redux';
import deskReducer from './deckReducer';

const rootReducer = combineReducers({
    deskReducer: deskReducer,
});

export default rootReducer;
