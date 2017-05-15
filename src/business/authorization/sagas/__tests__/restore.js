import {call, put, take, fork} from 'redux-saga/effects'

import saga, {handle} from '../restore'
import {actions} from '../../index'

import {actions as notificationActions} from '../../../notification'

import Auth from 'services/auth'

test('[Saga] Restore', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.restore(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.restore)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.restore)

  expect(actual).toEqual(expected)
})

describe('[Saga] Restore - handle() generator', () => {
  test('Authorized', () => {
    const parameter = {}
    const action = actions.restore(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = call(Auth.get)

    expect(actual).toEqual(expected)

    const auth = {
      token: 'token'
    }

    actual = sagaIterator.next(auth).value
    expected = put(actions.set({
      isAuthorized: true
    }))

    expect(actual).toEqual(expected)
  })

  test('Not authorized', () => {
    const parameter = {}
    const action = actions.restore(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = call(Auth.get)

    expect(actual).toEqual(expected)

    const auth = {

    }

    actual = sagaIterator.next(auth).value
    expected = put(actions.set({
      isAuthorized: false
    }))

    expect(actual).toEqual(expected)
  })

  test('Exception', () => {
    const parameter = {}
    const action = actions.restore(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    sagaIterator.next()

    const error = new Error('error')

    actual = sagaIterator.throw(error).value
    expected = put(notificationActions.notifyError({
      text: 'error'
    }))

    expect(actual).toEqual(expected)
  })
})
