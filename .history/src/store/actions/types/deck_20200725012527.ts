export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const FETCH_DECK = 'FETCH_DECK'
export const SUCCESS_DECK = 'SUCCESS_DECK'
export const ERROR_DECK = 'ERROR_DECK'


export interface Init {
  loading?: boolean,
  error?: boolean,
  deck?: any
};

export interface InitState {
  initDeck: Init[]
}

interface GetDeckAction {
  type: typeof GET_DECKS,
}

interface GetSingleDeckAction {
  type: typeof GET_DECK,
  payload: Init
}

interface FetchDeckAction {
  type: typeof FETCH_DECK,
  payload: Init
}

interface SuccessDeckAction {
  type: typeof SUCCESS_DECK,
}

interface ErrorDeckAction {
  type: typeof ERROR_DECK
}


export type DeckActionTypes = FetchDeckAction | SuccessDeckAction | ErrorDeckAction | GetSingleDeckAction | GetDeckAction
