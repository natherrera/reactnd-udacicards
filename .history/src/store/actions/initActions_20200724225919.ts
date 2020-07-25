import { createAction, createActionTypes } from './shared';

const KEY = 'INIT';

const InitAction =
{

    Key: KEY,

    Types: createActionTypes(KEY, {
        RUN: 'RUN',
        SUCCESS: 'SUCCESS',
        ERROR: 'ERROR',
        LOADING: 'LOADING',
    }),

    Action: (type: string, payload: any) => createAction(InitAction.Key, type, payload)
};

export default Object.freeze(InitAction);

