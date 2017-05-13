import freeze from 'deep-freeze'
import {handleActions} from 'redux-actions'

import {
  clear,
  notify,
  notifySuccess,
  notifyError
} from './actions'

export const name = 'Notification'

const initialState = freeze({
  text: ''
})

export default handleActions({
  [clear]: (state, action) => {
    return initialState
  },

  [notify]: (state, action) => {
    const {payload} = action
    return freeze({
      ...state,
      format: payload.format,
      text: payload.text
    })
  },

  [notifySuccess]: (state, action) => {
    const {payload} = action
    return freeze({
      ...state,
      format: 'success',
      text: payload.text
    })
  },

  [notifyError]: (state, action) => {
    const {payload} = action
    return freeze({
      ...state,
      format: 'error',
      text: payload.text
    })
  }
}, initialState)
