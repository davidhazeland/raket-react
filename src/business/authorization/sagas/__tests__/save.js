import {call, put, take, fork} from 'redux-saga/effects'

import saga, {handle} from '../save'
import {actions} from '../../index'

import {actions as notificationActions} from '../../../notification'

import Auth from 'services/auth'

test('[Saga] Save', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.save(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.save)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.save)

  expect(actual).toEqual(expected)
})

describe('[Saga] Save - handle() generator', () => {
  test('Success', () => {
    const parameter = {
      token: 'token',
      expiresIn: 'time'
    }
    const action = actions.save(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = call(Auth.save, {
      token: 'token',
      expiresIn: 'time'
    })

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(actions.set({
      isAuthorized: true
    }))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(actions.me())

    expect(actual).toEqual(expected)
  })

  test('Exception', () => {
    const parameter = {
      token: 'token',
      expiresIn: 'time'
    }
    const action = actions.save(parameter)
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
