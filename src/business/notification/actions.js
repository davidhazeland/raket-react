import {createAction} from 'redux-actions'

export const CLEAR = 'ironlake/notification/CLEAR'
export const NOTIFY = 'ironlake/notification/NOTIFY'
export const NOTIFY_SUCCESS = 'ironlake/notification/NOTIFY_SUCCESS'
export const NOTIFY_ERROR = 'ironlake/notification/NOTIFY_ERROR'

export const clear = createAction(CLEAR)
export const notify = createAction(NOTIFY)
export const notifySuccess = createAction(NOTIFY_SUCCESS)
export const notifyError = createAction(NOTIFY_ERROR)
