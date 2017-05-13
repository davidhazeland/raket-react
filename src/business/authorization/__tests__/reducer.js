import reducer from '../reducer'
import * as actions from '../actions'

describe('[Reducer] Authorization', function() {
  test('Handle SET action', () => {
    const state = {
      isAuthorized: false
    }
    const action = actions.set({
      isAuthorized: true,
      me: 'me'
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.isAuthorized
    expected = true

    expect(actual).toEqual(expected)

    actual = nextState.me
    expected = 'me'

    expect(actual).toEqual(expected)
  })
})
