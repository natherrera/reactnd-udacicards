export const RUN = 'RUN'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'
export const LOADING = 'LOADING'

interface RunAction {
  type: typeof RUN
}

interface SuccessAction {
  type: typeof SUCCESS
}

interface ErrorAction {
  type: typeof ERROR
}

interface LoadingAction {
  type: typeof LOADING
}

export type InitialActionTypes = RunAction | SuccessAction | ErrorAction | LoadingAction
