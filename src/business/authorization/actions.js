import {createAction} from 'redux-actions'

export const CLEAR = 'raket-react/authorization/CLEAR'
export const SAVE = 'raket-react/authorization/SAVE'
export const RESTORE = 'raket-react/authorization/RESTORE'
export const SET = 'raket-react/authorization/SET'
export const ME = 'raket-react/authorization/ME'
export const ME_READY = 'raket-react/authorization/ME_READY'

export const clear = createAction(CLEAR)
export const save = createAction(SAVE)
export const restore = createAction(RESTORE)
export const set = createAction(SET)
export const me = createAction(ME)
export const meReady = createAction(ME_READY)
