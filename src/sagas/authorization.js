import {take, select} from 'redux-saga/effects'

import {actions, selectors} from '../businesses/authorization'

export function* selectMe() {
  const me = yield select(selectors.me)
  if (typeof me === 'undefined') {
    yield take(actions.meReady)
    return yield select(selectors.me)
  }
  return me
}
