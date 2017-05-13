import {put, take, fork} from 'redux-saga/effects'

import * as actions from '../actions'
import {actions as notifActions} from '../../notification'

export function* handle({payload}) {
  const {keyword, endpoint, ...extra} = payload
  try {
    yield put(actions.fetchRequest({
      query: {
        keyword
      },
      endpoint,
      ...extra
    }))
  }
  catch (error) {
    yield put(notifActions.notifyError({
      text: error.message
    }))
  }
}

export default function* () {
  while (true) {
    const action = yield take(actions.search)

    yield fork(handle, action)
  }
}
