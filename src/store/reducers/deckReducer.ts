import DeckAction from '../actions/deck';
import { DeckDefaults } from './defaults';
import { AnyAction } from 'redux';


export default function DeckReducer(state: any = DeckDefaults, action: AnyAction ) : any {
  switch (action.type) {

    case DeckAction.Type.GET_DECK: {

      return {
          ...state,
          loading: true
      };

    }

    case DeckAction.Type.FETCH_DECK: {

      const { idDeck: id, title } = action.payload;

      return {
        ...state,
        error: false,
        loading: false,
        decks: {
          ...state.decks,
          [id]: {
            id: id,
            title: title,
            cards: 0,
            quiz: {}
          }
        }
      };
    }

    case DeckAction.Type.FETCH_DECK_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case DeckAction.Type.FETCH_DECK_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      }
    }

    case DeckAction.Type.GET_QUIZ: {
      return {
        ...state,
        error: false,
        loading: true
      }
    }

    case DeckAction.Type.GET_ANSWER_QUIZ: {
      return {
        ...state,
        error: false,
        loading: true
      }
    }

    case DeckAction.Type.FETCH_QUIZ: {

      const { idQuiz } = action.payload;
      const { deckId, questionQuiz, answerQuiz } = action.payload.payload;

      return {
        ...state,
        decks: {
          [deckId]: {
            ...state.decks[deckId],
            count: state.decks[deckId].count + 1,
            questions: {
                ...state.decks[deckId].questions,
                [idQuiz]: {
                    idQuiz,
                    questionQuiz,
                    answerQuiz,
                    available: true
                }
            }
          }
        }
      }
    }

    case DeckAction.Type.FETCH_QUIZ_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }

    case DeckAction.Type.FETCH_QUIZ_ERROR: {
      return {
        ...state,
        error: false,
        loading: false
      }
    }



    case DeckAction.Type.ANSWER_QUIZ: {

      const { deckId, quizId } = action.payload;

      return {
        ...state,
        decks: {
          [deckId]: {
            ...state.decks[deckId],
            count: state.decks[deckId].count - 1,
            questions: {
                ...state.decks[deckId].questions,
                [quizId]: {
                  ...state.decks[deckId].questions[quizId],
                  available: false
                }
            }
          }
        }
      }
    }

    default: {
      return state;
    }
  }
};

