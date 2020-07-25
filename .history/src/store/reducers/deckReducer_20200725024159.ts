import {
  FETCH_DECK,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_ERROR,
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_ERROR,
  InitState,
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

    case FETCH_DECK_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case FETCH_DECK_ERROR: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case FETCH_QUIZ: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case FETCH_QUIZ_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case FETCH_QUIZ_ERROR: {
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
