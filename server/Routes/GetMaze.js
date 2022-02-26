'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GetMazeController = require('../Controllers/GetMazeController.js');

var _GetMazeController2 = _interopRequireDefault(_GetMazeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetMaze = function GetMaze(app) {

    app.route('/getMaze').post(_GetMazeController2.default);
};

exports.default = GetMaze;