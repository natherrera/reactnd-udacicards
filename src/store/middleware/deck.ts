import { all, put, takeLatest } from 'redux-saga/effects';
import DeckAction from '../actions/deck';
import uuid from 'short-uuid';

function* saveDeckTitle(action) {
    try {

        const deck = {
            idDeck: uuid.uuid(),
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
            idQuiz: uuid.uuid(),
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

function* answerQuiz(action: any) {

    const { deckId, quizId } = action.payload;

     yield put(DeckAction.Action(DeckAction.Type.ANSWER_QUIZ,{deckId, quizId}));

}

export default function* run()
{
    yield all([
        yield takeLatest(DeckAction.Type.GET_QUIZ, addCardToDeck),
        yield takeLatest(DeckAction.Type.GET_DECK, saveDeckTitle),
        yield takeLatest(DeckAction.Type.GET_ANSWER_QUIZ, answerQuiz),
    ]);
}
