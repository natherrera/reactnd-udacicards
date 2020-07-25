import { combineReducers } from 'redux';
import deckReducer from './deckReducer';

const rootReducer = combineReducers({
    deckReducer: deckReducer,
});

export default rootReducer;
