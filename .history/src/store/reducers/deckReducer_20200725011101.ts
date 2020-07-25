import {
  GET_DECKS,
  GET_DECK,
  FETCH_DECK,
  SUCCESS_DECK,
  ERROR_DECK,
  LOADING_DECK,
} from '../actions/types/deck'


const initialState = {
    loading: true,
    error: true
};

const deckReducer = (state = initialState, action: any) => {
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
