import reducer from '../reducer'
import * as actions from '../actions'

describe('[Reducer] List', function() {
  test('Handle FETCH_REQUEST action', () => {
    const state = {
      query: {
        page: 1
      }
    }
    const action = actions.fetchRequest({
      query: {
        page: 2,
        keyword: 'x'
      }
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.isFetching
    expected = true

    expect(actual).toEqual(expected)

    actual = nextState.query
    expected = {
      page: 2,
      keyword: 'x'
    }

    expect(actual).toEqual(expected)
  })

  test('Handle FETCH_SUCCESS action', () => {
    const state = {}
    const action = actions.fetchSuccess({
      data: ['data'],
      meta: 'meta'
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = ['data']

    actual = nextState.meta
    expected = 'meta'

    expect(actual).toEqual(expected)
  })

  test('Handle FETCH_FAILURE action', () => {
    const state = {}
    const action = actions.fetchFailure()
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.isFetching
    expected = false

    expect(actual).toEqual(expected)
  })

  test('Handle DELETE_REQUEST action', () => {
    const state = {
      data: [
        {id: 1}
      ]
    }
    const action = actions.deleteRequest({
      id: 1
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = [
      {id: 1, isRemoving: true}
    ]

    expect(actual).toEqual(expected)
  })

  test('Handle DELETE_SUCCESS action', () => {
    const state = {
      data: [
        {id: 1},
        {id: 2}
      ]
    }
    const action = actions.deleteSuccess({
      id: 1
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = [
      {id: 2}
    ]

    expect(actual).toEqual(expected)
  })

  test('Handle DELETE_FAILURE action', () => {
    const state = {
      data: [
        {id: 1, isRemoving: true},
        {id: 2}
      ]
    }
    const action = actions.deleteFailure({
      id: 1
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = [
      {id: 1, isRemoving: false},
      {id: 2}
    ]

    expect(actual).toEqual(expected)
  })

  test('Handle CHANGE_STATUS_REQUEST action', () => {
    const state = {
      data: [
        {id: 1}
      ]
    }
    const action = actions.changeStatusRequest({
      id: 1
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = [
      {id: 1, isChangingStatus: true}
    ]

    expect(actual).toEqual(expected)
  })

  test('Handle CHANGE_STATUS_SUCCESS action', () => {
    const state = {
      data: [
        {id: 1, status: 'enabled', isChangingStatus: true},
        {id: 2}
      ]
    }
    const action = actions.changeStatusSuccess({
      id: 1,
      status: 'disabled'
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = [
      {id: 1, status: 'disabled', isChangingStatus: false},
      {id: 2}
    ]

    expect(actual).toEqual(expected)
  })

  test('Handle CHANGE_STATUS_FAILURE action', () => {
    const state = {
      data: [
        {id: 1, isChangingStatus: true},
        {id: 2}
      ]
    }
    const action = actions.changeStatusFailure({
      id: 1
    })
    const nextState = reducer(state, action)

    let actual
    let expected

    actual = nextState.data
    expected = [
      {id: 1, isChangingStatus: false},
      {id: 2}
    ]

    expect(actual).toEqual(expected)
  })
})
