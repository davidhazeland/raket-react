import {call, put, take, fork} from 'redux-saga/effects'

import * as actions from '../actions'
import {actions as notificationActions} from '../../notification'

export function* handle({payload}) {
  const {id, endpoint, ...extra} = payload
  try {
    yield call(endpoint, id, extra)

    yield put(actions.deleteSuccess({
      id
    }))
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
    yield put(actions.deleteFailure({
      id
    }))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.deleteRequest)

    yield fork(handle, action)
  }
}
