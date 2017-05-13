'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = read;

var _effects = require('redux-saga/effects');

var _item = require('../business/item');

var _marked = [read].map(regeneratorRuntime.mark);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function read(payload) {
  var id, endpoint, extra, data;
  return regeneratorRuntime.wrap(function read$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = payload.id, endpoint = payload.endpoint, extra = _objectWithoutProperties(payload, ['id', 'endpoint']);
          _context.next = 3;
          return (0, _effects.call)(endpoint, id, extra);

        case 3:
          data = _context.sent;
          _context.next = 6;
          return (0, _effects.put)(_item.actions.set(data));

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}