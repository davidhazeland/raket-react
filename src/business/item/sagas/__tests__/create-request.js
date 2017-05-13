import {call, put, take, fork} from 'redux-saga/effects'
import {startSubmit, stopSubmit, reset} from 'redux-form'

import saga, {handle} from '../create-request'
import {actions} from '../../index'

import {actions as notificationActions} from '../../../notification'

test('[Saga] CreateRequest', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.createRequest(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.createRequest)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.createRequest)

  expect(actual).toEqual(expected)
})

describe('[Saga] CreateRequest - handle() generator', () => {
  test('Success', () => {
    const endpoint = () => {}
    const parameter = {
      data: 'data',
      endpoint,
      form: 'form',
      extra: 'extra'
    }
    const action = actions.createRequest(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = put(startSubmit('form'))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = call(endpoint, 'data', {
      extra: 'extra'
    })

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(notificationActions.notifySuccess({
      text: 'item.added_successfully'
    }))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(reset('form'))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(actions.createSuccess({
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
      data: 'data',
      endpoint,
      form: 'form',
      extra: 'extra'
    }
    const action = actions.createRequest(parameter)
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
    expected = put(actions.createFailure({
      form: 'form'
    }))

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = put(stopSubmit('form'))

    expect(actual).toEqual(expected)
  })
})
