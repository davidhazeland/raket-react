import {call, put, take, fork} from 'redux-saga/effects'

import * as actions from '../actions'
import {actions as notificationActions} from '../../notification'

export function* handle({payload}) {
  const {id, status, enableEndpoint, disableEndpoint} = payload
  try {
    const isEnabled = status === 'enabled'
    isEnabled ? yield call(enableEndpoint, id) : yield call(disableEndpoint, id)

    yield put(actions.changeStatusSuccess({
      id, status
    }))
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
    yield put(actions.changeStatusFailure({
      id
    }))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.changeStatusRequest)

    yield fork(handle, action)
  }
}
