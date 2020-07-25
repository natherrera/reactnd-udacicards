export const GET_DESK = 'GET_DESK'
export const FETCH_DESK = 'FETCH_DESK'
export const SUCCESS_DESK = 'SUCCESS_DESK'
export const ERROR_DESK = 'ERROR_DESK'
export const LOADING_DESK = 'LOADING_DESK'

export interface Desk {
    name: string
}

interface GetDeskAction {
  type: typeof FETCH_DESK,
}

interface FetchDeskAction {
  type: typeof FETCH_DESK,
}

interface SuccessDeskAction {
  type: typeof SUCCESS_DESK,
}

interface ErrorDeskAction {
  type: typeof ERROR_DESK
}

interface LoadingDeskAction {
  type: typeof LOADING_DESK
}

export type DeskActionTypes = FetchDeskAction | SuccessDeskAction | ErrorDeskAction | LoadingDeskAction
