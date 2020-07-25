const initialState = {
    loading: true,
    error: true
};

const quickReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_QUIZ': {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case 'ADD_QUIZ': {
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

export default quickReducer;
