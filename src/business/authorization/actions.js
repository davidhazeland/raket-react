import {createAction} from 'redux-actions'

export const CLEAR = 'ironlake/authorization/CLEAR'
export const SAVE = 'ironlake/authorization/SAVE'
export const RESTORE = 'ironlake/authorization/RESTORE'
export const SET = 'ironlake/authorization/SET'
export const ME = 'ironlake/authorization/ME'
export const ME_READY = 'ironlake/authorization/ME_READY'

export const clear = createAction(CLEAR)
export const save = createAction(SAVE)
export const restore = createAction(RESTORE)
export const set = createAction(SET)
export const me = createAction(ME)
export const meReady = createAction(ME_READY)
