import {call, put, take, fork} from 'redux-saga/effects'
import {startSubmit, stopSubmit} from 'redux-form'

import * as actions from '../actions'
import {actions as notificationActions} from '../../notification'

export function* handle({payload}) {
  const {id, data, endpoint, form, ...extra} = payload

  try {
    yield put(startSubmit(form))
    const updatedItem = yield call(endpoint, id, data, extra)

    yield put(actions.set({
      data: updatedItem
    }))
    yield put(notificationActions.notifySuccess({
      text: 'item.edited_successfully'
    }))
    yield put(actions.updateSuccess({
      id,
      form
    }))
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
    yield put(actions.updateFailure({
      id,
      form
    }))
  }
  finally {
    yield put(stopSubmit(form))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.updateRequest)

    yield fork(handle, action)
  }
}
