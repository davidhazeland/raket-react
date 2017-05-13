import {createAction} from 'redux-actions'

export const CLEAR = 'ironlake/initial/CLEAR'
export const SET = 'ironlake/initial/SET'
export const START_REQUEST = 'ironlake/initial/START_REQUEST'
export const STOP_REQUEST = 'ironlake/initial/STOP_REQUEST'

export const clear = createAction(CLEAR)
export const set = createAction(SET)
export const startRequest = createAction(START_REQUEST)
export const stopRequest = createAction(STOP_REQUEST)
