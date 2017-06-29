'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectors = exports.sagas = exports.actions = exports.reducer = exports.name = undefined;

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = require('./sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.name = _reducer.name;
exports.reducer = _reducer2.default;
exports.actions = actions;
exports.sagas = _sagas2.default;
exports.selectors = selectors;
exports.default = _defineProperty({}, _reducer.name, _reducer2.default);