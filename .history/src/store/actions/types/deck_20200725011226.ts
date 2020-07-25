export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const FETCH_DECK = 'FETCH_DECK'
export const SUCCESS_DECK = 'SUCCESS_DECK'
export const ERROR_DECK = 'ERROR_DECK'

export interface Deck {
    deck: any
}

export interface IdDeck {
    id: any
}

export interface init {
  loading: true,
  error: true
};

interface GetDeckAction {
  type: typeof GET_DECKS,
}

interface GetSingleDeckAction {
  type: typeof GET_DECK,
  payload: IdDeck
}

interface FetchDeckAction {
  type: typeof FETCH_DECK,
  payload: Deck
}

interface SuccessDeckAction {
  type: typeof SUCCESS_DECK,
}

interface ErrorDeckAction {
  type: typeof ERROR_DECK
}


export type DeckActionTypes = FetchDeckAction | SuccessDeckAction | ErrorDeckAction | GetSingleDeckAction | GetDeckAction
