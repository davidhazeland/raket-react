import {createAction} from 'redux-actions'

export const CLEAR = 'ironlake/list/CLEAR'

export const FETCH_REQUEST = 'ironlake/list/FETCH_REQUEST'
export const FETCH_SUCCESS = 'ironlake/list/FETCH_SUCCESS'
export const FETCH_FAILURE = 'ironlake/list/FETCH_FAILURE'

export const CHANGE_PAGE = 'ironlake/list/CHANGE_PAGE'
export const SEARCH = 'ironlake/list/SEARCH'

export const DELETE_REQUEST = 'ironlake/list/DELETE_REQUEST'
export const DELETE_SUCCESS = 'ironlake/list/DELETE_SUCCESS'
export const DELETE_FAILURE = 'ironlake/list/DELETE_FAILURE'

export const CHANGE_STATUS_REQUEST = 'ironlake/list/CHANGE_STATUS_REQUEST'
export const CHANGE_STATUS_SUCCESS = 'ironlake/list/CHANGE_STATUS_SUCCESS'
export const CHANGE_STATUS_FAILURE = 'ironlake/list/CHANGE_STATUS_FAILURE'

export const clear = createAction(CLEAR)
export const fetchRequest = createAction(FETCH_REQUEST)
export const fetchSuccess = createAction(FETCH_SUCCESS)
export const fetchFailure = createAction(FETCH_FAILURE)

export const changePage = createAction(CHANGE_PAGE)
export const search = createAction(SEARCH)

export const deleteRequest = createAction(DELETE_REQUEST)
export const deleteSuccess = createAction(DELETE_SUCCESS)
export const deleteFailure = createAction(DELETE_FAILURE)

export const changeStatusRequest = createAction(CHANGE_STATUS_REQUEST)
export const changeStatusSuccess = createAction(CHANGE_STATUS_SUCCESS)
export const changeStatusFailure = createAction(CHANGE_STATUS_FAILURE)
