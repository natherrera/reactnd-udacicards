import { Init, GET_DECK, GET_DECKS, FETCH_DECK, SUCCESS_DECK, ERROR_DECK, DeckActionTypes } from './types/deck'


export function saveDeckTitle(newDeck: Init): DeckActionTypes {
  return {
    type: FETCH_DECK,
    payload: newDeck.deck
  }
}

export function getDeck(idDeck: Init): DeckActionTypes {
    return {
        type: GET_DECK,
        payload: idDeck.deck
    }
}

export function getAllDecks(): DeckActionTypes {
    return {
        type: GET_DECKS
    }
}
