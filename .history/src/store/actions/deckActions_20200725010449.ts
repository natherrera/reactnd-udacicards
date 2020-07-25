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

export function getAllDecks(): DeckActionTypes {
    return {
        type: GET_DECKS
    }
}
