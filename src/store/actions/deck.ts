import { ActionVault } from './shared';

const KEY = 'DECK';

interface DeckActionType {
  readonly GET_DECK: string;
  readonly FETCH_DECK: string;
  readonly FETCH_DECK_SUCCESS: string;
  readonly FETCH_DECK_ERROR: string;

  readonly GET_QUIZ: string;
  readonly FETCH_QUIZ: string;
  readonly FETCH_QUIZ_SUCCESS: string;
  readonly FETCH_QUIZ_ERROR: string;
}

export default new ActionVault<DeckActionType, any>(
  KEY,
  {

    GET_DECK: 'ADD_DECK',
    FETCH_DECK: 'FETCH_DECK',
    FETCH_DECK_SUCCESS: 'FETCH_DECK_SUCCESS',
    FETCH_DECK_ERROR: 'FETCH_DECK_ERROR',

    GET_QUIZ: 'GET_QUIZ',
    FETCH_QUIZ: 'FETCH_QUIZ',
    FETCH_QUIZ_SUCCESS: 'FETCH_QUIZ_SUCCESS',
    FETCH_QUIZ_ERROR: 'FETCH_QUIZ_ERROR',

  }
)




