import {call, put, take, fork} from 'redux-saga/effects'

import * as actions from '../actions'
import {actions as notificationActions} from '../../notification'

import API from 'api/authorization'

export function* handle(action) {
  try {
    const me = yield call(API.me)

    yield put(actions.set({
      me
    }))
    yield put(actions.meReady())
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.me)

    yield fork(handle, action)
  }
}
