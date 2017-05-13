import {call, put, take, fork} from 'redux-saga/effects'
import {startSubmit, stopSubmit, reset} from 'redux-form'

import * as actions from '../actions'
import {actions as notificationActions} from '../../notification'

export function* handle({payload}) {
  const {data, endpoint, form, ...extra} = payload

  try {
    yield put(startSubmit(form))
    yield call(endpoint, data, extra)

    yield put(notificationActions.notifySuccess({
      text: 'item.added_successfully'
    }))
    yield put(reset(form))
    yield put(actions.createSuccess({
      form
    }))
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
    yield put(actions.createFailure({
      form
    }))
  }
  finally {
    yield put(stopSubmit(form))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.createRequest)

    yield fork(handle, action)
  }
}
