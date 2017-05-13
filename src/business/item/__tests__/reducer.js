import reducer from '../reducer'
import * as actions from '../actions'

describe('[Reducer] List', function() {
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
})
