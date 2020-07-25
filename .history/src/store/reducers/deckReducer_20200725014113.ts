import {
  GET_DECKS,
  GET_DECK,
  FETCH_DECK,
  SUCCESS_DECK,
  ERROR_DECK,
  DeckActionTypes,
  InitState
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
