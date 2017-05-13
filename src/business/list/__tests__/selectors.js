import {get} from '../selectors'
import {name} from '../reducer'

describe('[Selectors] List', function() {
  test('get() selector', () => {
    const state = {
      [name]: {
        data: [
          {id: 1}, {id: 2}
        ],
        meta: {
          pagination: {
            currentPage: 5,
            totalPages: 10
          }
        },
        isFetching: false
      }
    }

    const actual = get(state)
    const expected = {
      data: [
        {id: 1}, {id: 2}
      ],
      pagination: {
        current: 5,
        total: 10,
        range: [3, 4, 5, 6, 7]
      },
      isFetching: false
    }

    expect(actual).toEqual(expected)
  })
})
