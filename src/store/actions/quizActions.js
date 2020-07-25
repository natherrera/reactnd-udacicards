import { createAction, createActionTypes } from './shared';

const KEY = 'QUIZ';

const QuizAction =
{

    Key: KEY,

    Types: createActionTypes(KEY, {
        GET_QUIZ: 'GET_QUIZ',
        FETCH_QUIZ: 'FETCH_QUIZ',
        FETCH_QUIZ_SUCCESS: 'FETCH_QUIZ_SUCCESS',
        FETCH_QUIZ_ERROR: 'FETCH_QUIZ_ERROR',

    }),

    Action: (type, payload) => createAction(QuizAction.Key, type, payload)
};

export default Object.freeze(QuizAction);
