import { createSelector } from 'reselect'

import {name} from './reducer'

export const getQuery = state => state[name].query

const dataSelector = state => state[name].data
const metaSelector = state => state[name].meta
const isFetchingSelector = state => state[name].isFetching

const paginationSelector = createSelector(
  metaSelector,
  meta => {
    if (!meta || !meta.pagination) return undefined

    const {
      currentPage,
      totalPages
    } = meta.pagination

    const range = pageRange(currentPage, totalPages, 5)
    return {
      current: currentPage,
      total: totalPages,
      range
    }
  }
)

export const get = createSelector(
  dataSelector,
  paginationSelector,
  isFetchingSelector,
  (data, pagination, isFetching) => ({
    data,
    pagination,
    isFetching
  })
)

function pageRange(selected, numPages, num) {
  let selectedPos = Math.ceil(num / 2)
  let start = (selected < selectedPos) ? 1
    : selected - selectedPos + 1
  let len = (numPages < start + num - 1) ? numPages - start + 1
    : num

  return Array
    .apply(null, Array(len))
    .map((u, i) => start + i)
}
