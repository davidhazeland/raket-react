import {createAction} from 'redux-actions'

export const CLEAR = 'raket-react/initial/CLEAR'
export const SET = 'raket-react/initial/SET'
export const START_REQUEST = 'raket-react/initial/START_REQUEST'
export const STOP_REQUEST = 'raket-react/initial/STOP_REQUEST'

export const clear = createAction(CLEAR)
export const set = createAction(SET)
export const startRequest = createAction(START_REQUEST)
export const stopRequest = createAction(STOP_REQUEST)
