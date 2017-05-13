import {call, put, take, fork, select} from 'redux-saga/effects'

import * as actions from '../actions'
import * as selectors from '../selectors'
import {actions as notificationActions} from '../../notification'

export function* handle({payload}) {
  const {endpoint, params} = payload
  try {
    const query = yield select(selectors.getQuery)
    const {data, meta} = yield call(endpoint, query, params)

    yield put(actions.fetchSuccess({
      data,
      meta
    }))
  }
  catch (error) {
    yield put(notificationActions.notifyError({
      text: error.message
    }))
    yield put(actions.fetchFailure())
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.fetchRequest)

    yield fork(handle, action)
  }
}
