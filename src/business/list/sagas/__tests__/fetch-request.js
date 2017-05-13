import {call, put, take, fork, select} from 'redux-saga/effects'

import saga, {handle} from '../fetch-request'
import {actions, selectors} from '../../index'

import {actions as notificationActions} from '../../../notification'

test('[Saga] FetchRequest', () => {
  const sagaIterator = saga()

  let actual
  let expected

  const parameter = {}
  const action = actions.fetchRequest(parameter)

  actual = sagaIterator.next().value
  expected = take(actions.fetchRequest)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next(action).value
  expected = fork(handle, action)

  expect(actual).toEqual(expected)

  actual = sagaIterator.next().value
  expected = take(actions.fetchRequest)

  expect(actual).toEqual(expected)
})

describe('[Saga] FetchRequest - handle() generator', () => {
  test('Success', () => {
    const endpoint = () => {}
    const parameter = {
      params: 'param',
      endpoint
    }
    const action = actions.fetchRequest(parameter)
    const sagaIterator = handle(action)

    let actual
    let expected

    actual = sagaIterator.next().value
    expected = select(selectors.getQuery)

    expect(actual).toEqual(expected)

    const query = 'query'

    actual = sagaIterator.next(query).value
    expected = call(endpoint, 'query', 'param')

    expect(actual).toEqual(expected)

    const response = {
      data: 'data',
      meta: 'meta'
    }

    actual = sagaIterator.next(response).value
    expected = put(actions.fetchSuccess({
      data: 'data',
      meta: 'meta'
    }))

    expect(actual).toEqual(expected)
  })

  test('Exception', () => {
    const endpoint = () => {}
    const parameter = {
      params: 'param',
      endpoint
    }
    const action = actions.fetchRequest(parameter)
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
    expected = put(actions.fetchFailure())

    expect(actual).toEqual(expected)
  })
})
