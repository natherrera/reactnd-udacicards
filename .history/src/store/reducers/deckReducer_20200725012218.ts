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
  initDeck: []
}

export function deckReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
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
