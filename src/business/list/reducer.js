import freeze from 'deep-freeze'
import {handleActions} from 'redux-actions'
import immutable from 'dot-prop-immutable'

import {
  clear,
  fetchRequest,
  fetchSuccess,
  fetchFailure,
  deleteRequest,
  deleteSuccess,
  deleteFailure,
  changeStatusRequest,
  changeStatusSuccess,
  changeStatusFailure,
} from './actions'

export const name = 'List'

const initialState = freeze({
  data: [],
  meta: {},

  query: {},
  isFetching: false
})

export default handleActions({
  [clear]: () => initialState,

  [fetchRequest]: (state, action) => {
    return freeze({
      ...state,
      query: {
        ...state.query,
        ...action.payload.query
      },
      isFetching: true
    })
  },

  [fetchSuccess]: (state, action) => {
    const {payload} = action
    return freeze({
      ...state,
      data: payload.data,
      meta: payload.meta,
      isFetching: false
    })
  },

  [fetchFailure]: (state, action) => {
    return freeze({
      ...state,
      isFetching: false
    })
  },

  [deleteRequest]: (state, action) => {
    const {payload} = action
    const index = state.data.findIndex(item => item.id === payload.id)
    const nextState = immutable.set(state, `data.${index}`, item => ({
      ...item,
      isRemoving: true
    }))
    return freeze(nextState)
  },

  [deleteSuccess]: (state, action) => {
    const {payload} = action
    const index = state.data.findIndex(item => item.id === payload.id)
    const nextState = immutable.delete(state, `data.${index}`)
    return freeze(nextState)
  },

  [deleteFailure]: (state, action) => {
    const {payload} = action
    const index = state.data.findIndex(item => item.id === payload.id)
    const nextState = immutable.set(state, `data.${index}`, item => ({
      ...item,
      isRemoving: false
    }))
    return freeze(nextState)
  },

  [changeStatusRequest]: (state, action) => {
    const {payload} = action
    const index = state.data.findIndex(item => item.id === payload.id)
    const nextState = immutable.set(state, `data.${index}`, item => ({
      ...item,
      isChangingStatus: true
    }))
    return freeze(nextState)
  },

  [changeStatusSuccess]: (state, action) => {
    const {payload} = action
    const index = state.data.findIndex(item => item.id === payload.id)
    const nextState = immutable.set(state, `data.${index}`, item => ({
      ...item,
      status: payload.status,
      isChangingStatus: false
    }))
    return freeze(nextState)
  },

  [changeStatusFailure]: (state, action) => {
    const {payload} = action
    const index = state.data.findIndex(item => item.id === payload.id)
    const nextState = immutable.set(state, `data.${index}`, item => ({
      ...item,
      isChangingStatus: false
    }))
    return freeze(nextState)
  }
}, initialState)
