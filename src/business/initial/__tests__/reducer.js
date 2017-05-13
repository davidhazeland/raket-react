import reducer from '../reducer'
import * as actions from '../actions'

describe('[Reducer] Initial', function() {
  test('Handle SET action', () => {
    const state = {
      data: {
        id: 1
      }
    }
    const action = actions.set({
      name: 'name'
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = {
      id: 1,
      name: 'name'
    }

    expect(actual).toEqual(expected)
  })

  test('Handle START_REQUEST action', () => {
    const state = {
      initializing: false
    }
    const action = actions.startRequest()
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.initializing
    expected = true

    expect(actual).toEqual(expected)
  })

  test('Handle STOP_REQUEST action', () => {
    const state = {
      initializing: true
    }
    const action = actions.stopRequest()
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.initializing
    expected = false

    expect(actual).toEqual(expected)
  })
})
