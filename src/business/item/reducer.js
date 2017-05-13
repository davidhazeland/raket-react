import freeze from 'deep-freeze'
import immutable from 'dot-prop-immutable'
import {handleActions} from 'redux-actions'

import {clear, set} from './actions'

export const name = 'Item'

const initialState = freeze({
  data: {}
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
  }
}, initialState)
