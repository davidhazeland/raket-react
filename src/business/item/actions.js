import {createAction} from 'redux-actions'

export const CLEAR = 'raket-react/item/CLEAR'
export const SET = 'raket-react/item/SET'

export const CREATE_REQUEST = 'raket-react/item/CREATE_REQUEST'
export const CREATE_SUCCESS = 'raket-react/item/CREATE_SUCCESS'
export const CREATE_FAILURE = 'raket-react/item/CREATE_FAILURE'

export const UPDATE_REQUEST = 'raket-react/item/UPDATE_REQUEST'
export const UPDATE_SUCCESS = 'raket-react/item/UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'raket-react/item/UPDATE_FAILURE'

export const clear = createAction(CLEAR)
export const set = createAction(SET)

export const createRequest = createAction(CREATE_REQUEST)
export const createSuccess = createAction(CREATE_SUCCESS)
export const createFailure = createAction(CREATE_FAILURE)

export const updateRequest = createAction(UPDATE_REQUEST)
export const updateSuccess = createAction(UPDATE_SUCCESS)
export const updateFailure = createAction(UPDATE_FAILURE)
