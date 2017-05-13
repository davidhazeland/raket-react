import {call, put, take, fork} from 'redux-saga/effects'

import saga, {handle} from '../change-status-request'
import {actions} from '../../index'

import {actions as notificationActions} from '../../../notification'

describe('List', () => {
  test('[Saga] ChangeStatusRequest', () => {
    const sagaIterator = saga()

    let actual
    let expected

    const parameter = {}
    const action = actions.changeStatusRequest(parameter)

    actual = sagaIterator.next().value
    expected = take(actions.changeStatusRequest)

    expect(actual).toEqual(expected)

    actual = sagaIterator.next(action).value
    expected = fork(handle, action)

    expect(actual).toEqual(expected)

    actual = sagaIterator.next().value
    expected = take(actions.changeStatusRequest)

    expect(actual).toEqual(expected)
  })

  describe('[Saga] ChangeStatusRequest - handle() generator', () => {
    const enableEndpoint = () => {}
    const disableEndpoint = () => {}

    test('Enable', () => {
      const parameter = {
        id: 1,
        status: 'enabled',
        enableEndpoint,
        disableEndpoint
      }
      const action = actions.changeStatusRequest(parameter)
      const sagaIterator = handle(action)

      let actual
      let expected

      actual = sagaIterator.next().value
      expected = call(enableEndpoint, 1)

      expect(actual).toEqual(expected)

      actual = sagaIterator.next().value
      expected = put(actions.changeStatusSuccess({
        id: 1,
        status: 'enabled'
      }))

      expect(actual).toEqual(expected)
    })

    test('Disable', () => {
      const parameter = {
        id: 1,
        status: 'disabled',
        enableEndpoint,
        disableEndpoint
      }
      const action = actions.changeStatusRequest(parameter)
      const sagaIterator = handle(action)

      let actual
      let expected

      actual = sagaIterator.next().value
      expected = call(disableEndpoint, 1)

      expect(actual).toEqual(expected)

      actual = sagaIterator.next().value
      expected = put(actions.changeStatusSuccess({
        id: 1,
        status: 'disabled'
      }))

      expect(actual).toEqual(expected)
    })

    test('Exception', () => {
      const parameter = {
        id: 1,
        status: 'disabled',
        enableEndpoint,
        disableEndpoint
      }
      const action = actions.changeStatusRequest(parameter)
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
      expected = put(actions.changeStatusFailure({
        id: 1
      }))

      expect(actual).toEqual(expected)
    })
  })
})
