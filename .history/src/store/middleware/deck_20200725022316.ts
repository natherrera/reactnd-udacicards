import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    GET_DECK,
    GET_DECK_SUCCESS,
    GET_DECK_ERROR,
    GET_DECKS,
    GET_DECKS_SUCCESS,
    GET_DECKS_ERROR,
    FETCH_DECK,
    FETCH_DECK_SUCCESS,
    FETCH_DECK_ERROR,
} from '../actions/types/deck';

function* fetchDeck(action) {
    try {
       yield put({type: FETCH_DECK, action});
    } catch (e) {
       yield put({type: ERROR_DECK, message: e.message});
    }
}

export default function* run()
{
    yield takeLatest(FETCH_DECK, fetchDeck);
}
