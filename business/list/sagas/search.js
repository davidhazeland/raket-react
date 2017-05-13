'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.handle = handle;
exports.default = _callee;

var _effects = require('redux-saga/effects');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _notification = require('../../notification');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [handle, _callee].map(regeneratorRuntime.mark);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function handle(_ref) {
  var payload = _ref.payload;
  var keyword, endpoint, extra;
  return regeneratorRuntime.wrap(function handle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          keyword = payload.keyword, endpoint = payload.endpoint, extra = _objectWithoutProperties(payload, ['keyword', 'endpoint']);
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.put)(actions.fetchRequest(_extends({
            query: {
              keyword: keyword
            },
            endpoint: endpoint
          }, extra)));

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context['catch'](1);
          _context.next = 10;
          return (0, _effects.put)(_notification.actions.notifyError({
            text: _context.t0.message
          }));

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 6]]);
}

function _callee() {
  var action;
  return regeneratorRuntime.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!true) {
            _context2.next = 8;
            break;
          }

          _context2.next = 3;
          return (0, _effects.take)(actions.search);

        case 3:
          action = _context2.sent;
          _context2.next = 6;
          return (0, _effects.fork)(handle, action);

        case 6:
          _context2.next = 0;
          break;

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}