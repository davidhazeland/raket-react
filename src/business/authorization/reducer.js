import freeze from 'deep-freeze'
import {handleActions} from 'redux-actions'

import {clear, set} from './actions'

export const name = 'Authorization'

const initialState = freeze({
  isAuthorized: false
})

export default handleActions({
  [clear]: () => initialState,

  [set]: (state, action) => {
    return freeze({
      ...state,
      ...action.payload
    })
  }
}, initialState)
