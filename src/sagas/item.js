import {call, put} from 'redux-saga/effects'

import {actions} from '../business/item'

export function* read(payload) {
  const {id, endpoint, ...extra} = payload
  const data = yield call(endpoint, id, extra)

  yield put(actions.set(data))
}
