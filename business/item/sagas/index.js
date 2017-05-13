'use strict';

var _createRequest = require('./create-request');

var _createRequest2 = _interopRequireDefault(_createRequest);

var _updateRequest = require('./update-request');

var _updateRequest2 = _interopRequireDefault(_updateRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  UpdateRequest: _updateRequest2.default,
  CreateRequest: _createRequest2.default
};