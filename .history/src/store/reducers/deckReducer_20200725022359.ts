import {
  GET_DECK,
  GET_DECK_SUCCESS,
  GET_DECK_ERROR,
  GET_DECKS,
  GET_DECKS_SUCCESS,
  GET_DECKS_ERROR,
  FETCH_DECK,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_ERROR,
  InitState
  DeckActionTypes,
} from '../actions/types/deck'


const initialState: InitState = {
  error: true,
  loading: true,
  deck: []
}

export function deckReducer(
  state = initialState,
  action: DeckActionTypes
): InitState {
  switch (action.type) {

    case FETCH_DECK: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case GET_DECK: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case GET_DECKS: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case SUCCESS_DECK: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case ERROR_DECK: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    default: {
      return state;
    }
  }
};

export default deckReducer;
