const initialState = {
    loading: true,
    error: true
};

const questionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_QUESTION': {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case 'ADD_QUESTION': {
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

export default questionReducer;
