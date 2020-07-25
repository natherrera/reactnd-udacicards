// import { createAction, createActionTypes } from './shared';

// const KEY = 'DESK';

// const DeskAction =
// {

//     Key: KEY,

//     Types: createActionTypes(KEY, {
//         GET_DESK: 'GET_DESK',
//         FETCH_DESK: 'FETCH_DESK',
//         FETCH_DESK_SUCCESS: 'FETCH_DESK_SUCCESS',
//         FETCH_DESK_ERROR: 'FETCH_DESK_ERROR',

//     }),

//     Action: (type, payload) => createAction(DeskAction.Key, type, payload)
// };

// export default Object.freeze(DeskAction);


import { Desk, FETCH_DESK, DELETE_MESSAGE, ChatActionTypes } from './types/desk'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}
