import { combineReducers } from 'redux';
import deckReducer from './deckReducer';
import DeckAction from '../actions/deck';

const rootReducer = combineReducers({
    [DeckAction.Key]: deckReducer,
});

export default rootReducer;
