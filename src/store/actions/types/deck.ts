export const FETCH_DECK = 'FETCH_DECK';
export const FETCH_DECK_SUCCESS = 'FETCH_DECK_SUCCESS';
export const FETCH_DECK_ERROR = 'FETCH_DECK_ERROR';
export const FETCH_QUIZ = 'FETCH_QUIZ';
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS';
export const FETCH_QUIZ_ERROR = 'FETCH_QUIZ_ERROR';


export interface Deck {
  deck?: any
};

export interface Quiz {
  quiz?: any
};

export interface InitState {
  loading?: boolean,
  error?: boolean,
  deck?: any
}


interface FetchDeckAction {
  type: typeof FETCH_DECK,
  payload: Deck
}

interface FetchDeckSuccessAction {
  type: typeof FETCH_DECK_SUCCESS,
}

interface FetchDeckErrorAction {
  type: typeof FETCH_DECK_ERROR,
}

interface FetchQuizAction {
  type: typeof FETCH_QUIZ,
  payload: Quiz
}

interface FetchQuizSuccessAction {
  type: typeof FETCH_QUIZ_SUCCESS,
}

interface FetchQuizErrorAction {
  type: typeof FETCH_QUIZ_ERROR,
}



export type DeckActionTypes = FetchDeckAction |  FetchDeckSuccessAction | FetchDeckErrorAction | FetchQuizAction | FetchQuizSuccessAction | FetchQuizErrorAction
