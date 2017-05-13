import {call, put, take, fork} from 'redux-saga/effects'
import {startSubmit, stopSubmit} from 'redux-form'

import saga, {handle} from '../update-request'
import {actions} from '../../index'

import {actions as notificationActions} from '../../../notification'

test('[Saga] UpdateRequest', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.updateRequest(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.updateRequest)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.updateRequest)

  expect(actual).toEqual(expected)
})

describe('[Saga] UpdateRequest - handle() generator', () => {
  test('Success', () => {
    const endpoint = () => {}
    const parameter = {
      id: 1,
      data: 'data',
      endpoint,
      form: 'form',
      extra: 'extra'
    }
    const action = actions.updateRequest(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = put(startSubmit('form'))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = call(endpoint, 1, 'data', {
      extra: 'extra'
    })

    const response = 'response'

    expect(actual).toEqual(expected)

    actual = sagaIterator.next(response).value
    expected = put(actions.set({
      data: 'response'
    }))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(notificationActions.notifySuccess({
      text: 'item.edited_successfully'
    }))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(actions.updateSuccess({
      id: 1,
      form: 'form'
    }))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(stopSubmit('form'))

    expect(actual).toEqual(expected)
  })

  test('Exception', () => {
    const endpoint = () => {}
    const parameter = {
      id: 1,
      data: 'data',
      endpoint,
      form: 'form',
      extra: 'extra'
    }
    const action = actions.updateRequest(parameter)
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
    expected = put(actions.updateFailure({
      id: 1,
      form: 'form'
    }))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(stopSubmit('form'))

    expect(actual).toEqual(expected)
  })
})
