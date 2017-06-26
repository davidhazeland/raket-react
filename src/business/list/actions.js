import {createAction} from 'redux-actions'

export const CLEAR = 'raket-react/list/CLEAR'

export const FETCH_REQUEST = 'raket-react/list/FETCH_REQUEST'
export const FETCH_SUCCESS = 'raket-react/list/FETCH_SUCCESS'
export const FETCH_FAILURE = 'raket-react/list/FETCH_FAILURE'

export const CHANGE_PAGE = 'raket-react/list/CHANGE_PAGE'
export const SEARCH = 'raket-react/list/SEARCH'

export const DELETE_REQUEST = 'raket-react/list/DELETE_REQUEST'
export const DELETE_SUCCESS = 'raket-react/list/DELETE_SUCCESS'
export const DELETE_FAILURE = 'raket-react/list/DELETE_FAILURE'

export const CHANGE_STATUS_REQUEST = 'raket-react/list/CHANGE_STATUS_REQUEST'
export const CHANGE_STATUS_SUCCESS = 'raket-react/list/CHANGE_STATUS_SUCCESS'
export const CHANGE_STATUS_FAILURE = 'raket-react/list/CHANGE_STATUS_FAILURE'

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
