import freeze from 'deep-freeze'
import immutable from 'dot-prop-immutable'
import {handleActions} from 'redux-actions'

import {clear, set, startRequest, stopRequest} from './actions'

export const name = 'Initial'

const initialState = freeze({
  data: {},
  initializing: false
})

export default handleActions({
  [clear]: () => initialState,

  [set]: (state, action) => {
    const {payload} = action
    const nextState = immutable.set(state, 'data', data => ({
      ...data,
      ...payload
    }))
    return freeze(nextState)
  },

  [startRequest]: (state, action) => {
    return freeze({
      ...state,
      initializing: true
    })
  },

  [stopRequest]: (state, action) => {
    return freeze({
      ...state,
      initializing: false
    })
  }
}, initialState)
