import {call, put} from 'redux-saga/effects'

import {actions as itemActions} from '../../business/item'

import {read} from '../item'

describe('[Saga] Item', function() {
  describe('read() generator', () => {
    test('Success', () => {
      const endpoint = () => {}
      const payload = {
        id: 1,
        endpoint,
        extra: 'extra'
      }
      const sagaIterator = read(payload)

      let actual
      let expected


      actual = sagaIterator.next().value
      expected = call(endpoint, 1, {
        extra: 'extra'
      })

      expect(actual).toEqual(expected)

      const response = 'data'

      actual = sagaIterator.next(response).value
      expected = put(itemActions.set('data'))

      expect(actual).toEqual(expected)
    })
  })
})
