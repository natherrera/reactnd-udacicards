import { all, put, takeLatest } from 'redux-saga/effects';
import DeckAction from '../actions/deck';
import uuid from 'react-native-uuid';

function* saveDeckTitle(action) {
    try {

        const deck = {
            idDeck: uuid.v1(),
            title: action.payload.title
        }
        const response = yield put(DeckAction.Action(DeckAction.Type.FETCH_DECK,deck));

       if (response) {

        yield put(DeckAction.Action(DeckAction.Type.FETCH_DECK_SUCCESS));

       } else {
        yield put(DeckAction.Action(DeckAction.Type.FETCH_DECK_ERROR, 'No response'));
       }

    } catch (e) {
       yield put(DeckAction.Action(DeckAction.Type.FETCH_DECK_ERROR, e.message));
    }
}


function* addCardToDeck(action: any) {

    try {
        const quiz = {
            idQuiz: uuid.v1(),
            ...action
        }
       const response = yield put(DeckAction.Action(DeckAction.Type.FETCH_QUIZ,quiz));

       if (response) {
            yield put(DeckAction.Action(DeckAction.Type.FETCH_QUIZ_SUCCESS));
       } else {
            yield put(DeckAction.Action(DeckAction.Type.FETCH_QUIZ_ERROR, 'No response'));
       }
    } catch (e) {
       yield put(DeckAction.Action(DeckAction.Type.FETCH_QUIZ_ERROR, e.message));
    }
}

export default function* run()
{
    yield all([
        yield takeLatest(DeckAction.Type.GET_QUIZ, addCardToDeck),
        yield takeLatest(DeckAction.Type.GET_DECK, saveDeckTitle)
    ]);
}
