import {call, put, take, fork} from 'redux-saga/effects'

import * as actions from '../actions'
import {actions as notificationActions} from '../../notification'

import Auth from 'services/auth'

export function* handle(action) {
  const {payload} = action
  const {token, expiresIn} = payload
  try {
    yield call(Auth.save, {token, expiresIn})

    yield put(actions.set({
      isAuthorized: true
    }))

    yield put(actions.me())
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.save)

    yield fork(handle, action)
  }
}
