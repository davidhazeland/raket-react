import {call, put, take, fork} from 'redux-saga/effects'

import saga, {handle} from '../me'
import {actions} from '../../index'

import {actions as notificationActions} from '../../../notification'

import API from 'api/authorization'

test('[Saga] Me', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.me(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.me)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.me)

  expect(actual).toEqual(expected)
})

describe('[Saga] Me - handle() generator', () => {
  test('Success', () => {
    const parameter = {}
    const action = actions.me(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = call(API.me)

    expect(actual).toEqual(expected)

    const response = 'response'

    actual = sagaIterator.next(response).value
    expected = put(actions.set({
      me: response
    }))

    expect(actual).toEqual(expected)
  })

  test('Exception', () => {
    const parameter = {}
    const action = actions.me(parameter)
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
