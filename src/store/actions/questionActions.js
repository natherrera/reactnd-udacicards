import { createAction, createActionTypes } from './shared';

const KEY = 'QUESTION';

const QuestionAction =
{
    Key: KEY,

    Types: createActionTypes(KEY, {
        GET_QUESTION: 'GET_QUESTION',
        FETCH_QUESTION: 'FETCH_QUESTION',
        FETCH_QUESTION_SUCCESS: 'FETCH_QUESTION_SUCCESS',
        FETCH_QUESTION_ERROR: 'FETCH_QUESTION_ERROR',

    }),

    Action: (type, payload) => createAction(QuestionAction.Key, type, payload)
};

export default Object.freeze(QuestionAction);
