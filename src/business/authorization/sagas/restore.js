import {call, put, take, fork} from 'redux-saga/effects'

import * as actions from '../actions'
import {actions as notificationActions} from '../../notification'

import Auth from 'services/auth'

export function* handle(action) {
  try {
    const {token} = yield call(Auth.get)
    const isAuthorized = typeof token !== 'undefined'

    yield put(actions.set({
      isAuthorized
    }))
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.restore)

    yield fork(handle, action)
  }
}
