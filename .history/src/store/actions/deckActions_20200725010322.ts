// import { createAction, createActionTypes } from './shared';

// const KEY = 'DESK';

// const DeskAction =
// {

//     Key: KEY,

//     Types: createActionTypes(KEY, {
//         GET_DESK: 'GET_DESK',
//         FETCH_DESK: 'FETCH_DESK',
//         FETCH_DESK_SUCCESS: 'FETCH_DESK_SUCCESS',
//         FETCH_DESK_ERROR: 'FETCH_DESK_ERROR',

//     }),

//     Action: (type, payload) => createAction(DeskAction.Key, type, payload)
// };

// export default Object.freeze(DeskAction);


import { IdDeck, Deck, GET_DECK, GET_DECKS, FETCH_DECK, SUCCESS_DECK, ERROR_DECK, LOADING_DECK, DeckActionTypes } from './types/deck'

// TypeScript infers that this function is returning SendMessageAction
export function saveDeckTitle(newDeck: Deck): DeckActionTypes {
  return {
    type: FETCH_DECK,
    payload: newDeck
  }
}

export function getDeck(idDeck: IdDeck): DeckActionTypes {
    return {
        type: GET_DECK,
        payload: idDeck
    }
}
