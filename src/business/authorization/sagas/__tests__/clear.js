import {take, fork} from 'redux-saga/effects'

import saga, {handle} from '../clear'
import {actions} from '../../index'

test('[Saga] Clear', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.clear(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.clear)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.clear)

  expect(actual).toEqual(expected)
})
