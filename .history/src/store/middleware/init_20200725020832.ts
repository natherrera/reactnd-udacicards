import { all, call, put, takeLatest } from 'redux-saga/effects';
import { DeckActionTypes, GET_DECK, GET_DECKS, FETCH_DECK, SUCCESS_DECK, ERROR_DECK } from '../actions/types/deck';



function* fetchDeck(action) {
    try {
       yield put({type: FETCH_DECK, action});
    } catch (e) {
       yield put({type: ERROR_DECK, message: e.message});
    }
}


export default function* initSession()
{
    yield all(
        yield takeLatest(InitAction.Types.RUN, init),
    );
}
