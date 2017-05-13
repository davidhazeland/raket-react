'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMe = selectMe;

var _effects = require('redux-saga/effects');

var _authorization = require('../businesses/authorization');

var _marked = [selectMe].map(regeneratorRuntime.mark);

function selectMe() {
  var me;
  return regeneratorRuntime.wrap(function selectMe$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(_authorization.selectors.me);

        case 2:
          me = _context.sent;

          if (!(typeof me === 'undefined')) {
            _context.next = 9;
            break;
          }

          _context.next = 6;
          return (0, _effects.take)(_authorization.actions.meReady);

        case 6:
          _context.next = 8;
          return (0, _effects.select)(_authorization.selectors.me);

        case 8:
          return _context.abrupt('return', _context.sent);

        case 9:
          return _context.abrupt('return', me);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}