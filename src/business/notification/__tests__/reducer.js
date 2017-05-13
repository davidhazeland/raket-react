import reducer from '../reducer'
import * as actions from '../actions'

describe('[Reducer] Notification', function() {
  test('Handle NOTIFY action', () => {
    const state = {
      format: '',
      text: ''
    }
    const action = actions.notify({
      format: 'success',
      text: 'text'
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.text
    expected = 'text'

    expect(actual).toEqual(expected)

    actual = nextState.format
    expected = 'success'

    expect(actual).toEqual(expected)
  })

  test('Handle NOTIFY_SUCCESS action', () => {
    const state = {
      format: '',
      text: ''
    }
    const action = actions.notifySuccess({
      text: 'text'
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.text
    expected = 'text'

    expect(actual).toEqual(expected)

    actual = nextState.format
    expected = 'success'

    expect(actual).toEqual(expected)
  })

  test('Handle NOTIFY_ERROR action', () => {
    const state = {
      format: '',
      text: ''
    }
    const action = actions.notifyError({
      text: 'text'
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.text
    expected = 'text'

    expect(actual).toEqual(expected)

    actual = nextState.format
    expected = 'error'

    expect(actual).toEqual(expected)
  })
})
