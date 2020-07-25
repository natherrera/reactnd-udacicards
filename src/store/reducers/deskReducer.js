const initialState = {
    loading: true,
    error: true
};

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DECK': {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case 'ADD_DECK': {
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
