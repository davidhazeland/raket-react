import {createAction} from 'redux-actions'

export const CLEAR = 'ironlake/item/CLEAR'
export const SET = 'ironlake/item/SET'

export const CREATE_REQUEST = 'ironlake/item/CREATE_REQUEST'
export const CREATE_SUCCESS = 'ironlake/item/CREATE_SUCCESS'
export const CREATE_FAILURE = 'ironlake/item/CREATE_FAILURE'

export const UPDATE_REQUEST = 'ironlake/item/UPDATE_REQUEST'
export const UPDATE_SUCCESS = 'ironlake/item/UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'ironlake/item/UPDATE_FAILURE'

export const clear = createAction(CLEAR)
export const set = createAction(SET)

export const createRequest = createAction(CREATE_REQUEST)
export const createSuccess = createAction(CREATE_SUCCESS)
export const createFailure = createAction(CREATE_FAILURE)

export const updateRequest = createAction(UPDATE_REQUEST)
export const updateSuccess = createAction(UPDATE_SUCCESS)
export const updateFailure = createAction(UPDATE_FAILURE)
