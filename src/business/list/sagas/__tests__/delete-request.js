import {call, put, take, fork} from 'redux-saga/effects'

import saga, {handle} from '../delete-request'
import {actions} from '../../index'

import {actions as notificationActions} from '../../../notification'

test('[Saga] DeleteRequest', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.deleteRequest(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.deleteRequest)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.deleteRequest)

  expect(actual).toEqual(expected)
})

describe('[Saga] DeleteRequest - handle() generator', () => {
  test('Success', () => {
    const endpoint = () => {}
    const parameter = {
      id: 1,
      endpoint,
      extra: 'extra'
    }
    const action = actions.deleteRequest(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = call(endpoint, 1, {
      extra: 'extra'
    })

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(actions.deleteSuccess({
      id: 1
    }))

    expect(actual).toEqual(expected)
  })

  test('Exception', () => {
    const endpoint = () => {}
    const parameter = {
      id: 1,
      endpoint
    }
    const action = actions.deleteRequest(parameter)
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

    actual = sagaIterator.next().value
    expected = put(actions.deleteFailure({
      id: 1
    }))

    expect(actual).toEqual(expected)
  })
})
