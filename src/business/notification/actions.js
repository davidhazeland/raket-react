import {createAction} from 'redux-actions'

export const CLEAR = 'raket-react/notification/CLEAR'
export const NOTIFY = 'raket-react/notification/NOTIFY'
export const NOTIFY_SUCCESS = 'raket-react/notification/NOTIFY_SUCCESS'
export const NOTIFY_ERROR = 'raket-react/notification/NOTIFY_ERROR'

export const clear = createAction(CLEAR)
export const notify = createAction(NOTIFY)
export const notifySuccess = createAction(NOTIFY_SUCCESS)
export const notifyError = createAction(NOTIFY_ERROR)
