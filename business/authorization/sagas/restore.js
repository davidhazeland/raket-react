'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handle = handle;
exports.default = _callee;

var _effects = require('redux-saga/effects');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _notification = require('../../notification');

var _auth = require('services/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [handle, _callee].map(regeneratorRuntime.mark);

function handle(action) {
  var _ref, token, isAuthorized;

  return regeneratorRuntime.wrap(function handle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_auth2.default.get);

        case 3:
          _ref = _context.sent;
          token = _ref.token;
          isAuthorized = typeof token !== 'undefined';
          _context.next = 8;
          return (0, _effects.put)(actions.set({
            isAuthorized: isAuthorized
          }));

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context['catch'](0);
          _context.next = 14;
          return (0, _effects.put)(_notification.actions.notifyError({
            text: _context.t0.message
          }));

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 10]]);
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
          return (0, _effects.take)(actions.restore);

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