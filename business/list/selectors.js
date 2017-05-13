'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.getQuery = undefined;

var _reselect = require('reselect');

var _reducer = require('./reducer');

var getQuery = exports.getQuery = function getQuery(state) {
  return state[_reducer.name].query;
};

var dataSelector = function dataSelector(state) {
  return state[_reducer.name].data;
};
var metaSelector = function metaSelector(state) {
  return state[_reducer.name].meta;
};
var isFetchingSelector = function isFetchingSelector(state) {
  return state[_reducer.name].isFetching;
};

var paginationSelector = (0, _reselect.createSelector)(metaSelector, function (meta) {
  if (!meta || !meta.pagination) return undefined;

  var _meta$pagination = meta.pagination,
      currentPage = _meta$pagination.currentPage,
      totalPages = _meta$pagination.totalPages;


  var range = pageRange(currentPage, totalPages, 5);
  return {
    current: currentPage,
    total: totalPages,
    range: range
  };
});

var get = exports.get = (0, _reselect.createSelector)(dataSelector, paginationSelector, isFetchingSelector, function (data, pagination, isFetching) {
  return {
    data: data,
    pagination: pagination,
    isFetching: isFetching
  };
});

function pageRange(selected, numPages, num) {
  var selectedPos = Math.ceil(num / 2);
  var start = selected < selectedPos ? 1 : selected - selectedPos + 1;
  var len = numPages < start + num - 1 ? numPages - start + 1 : num;

  return Array.apply(null, Array(len)).map(function (u, i) {
    return start + i;
  });
}