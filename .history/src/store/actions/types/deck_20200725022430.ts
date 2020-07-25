export const GET_DECK = 'GET_DECK';
export const GET_DECK_SUCCESS = 'GET_DECK_SUCCESS';
export const GET_DECK_ERROR = 'GET_DECK_ERROR';
export const GET_DECKS = 'GET_DECKS';
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS';
export const GET_DECKS_ERROR = 'GET_DECKS_ERROR';
export const FETCH_DECK = 'FETCH_DECK';
export const FETCH_DECK_SUCCESS = 'FETCH_DECK_SUCCESS';
export const FETCH_DECK_ERROR = 'FETCH_DECK_ERROR';


export interface Deck {
  deck?: any
};

export interface InitState {
  loading?: boolean,
  error?: boolean,
  deck?: any
}

interface GetDeckAction {
  type: typeof GET_DECKS,
}

interface GetSingleDeckAction {
  type: typeof GET_DECK,
  payload: Deck
}

interface FetchDeckAction {
  type: typeof FETCH_DECK,
  payload: Deck
}



export type DeckActionTypes = FetchDeckAction |  GetSingleDeckAction | GetDeckAction
