import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_DECK,
    FETCH_DECK_SUCCESS,
    FETCH_DECK_ERROR,
    FETCH_QUIZ,
    FETCH_QUIZ_ERROR
} from '../actions/types/deck';

function* fetchCard(action) {
    try {
       const response = yield put({type: FETCH_QUIZ, action});
       if (response) {
        yield put({type: FETCH_DECK_SUCCESS});
       }
    } catch (e) {
       yield put({type: FETCH_QUIZ_ERROR, message: e.message});
    }
}

function* fetchDeck(action) {
    try {
       yield put({type: FETCH_DECK, action});
    } catch (e) {
       yield put({type: FETCH_DECK_ERROR, message: e.message});
    }
}

export default function* run()
{
    yield takeLatest(FETCH_DECK, fetchDeck);
}
