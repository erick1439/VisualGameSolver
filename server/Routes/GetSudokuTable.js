'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GetSudokuTableController = require('../Controllers/GetSudokuTableController.js');

var _GetSudokuTableController2 = _interopRequireDefault(_GetSudokuTableController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetSudokuBoard = function GetSudokuBoard(app) {

    app.route('/getSudokuTable').get(_GetSudokuTableController2.default);
};

exports.default = GetSudokuBoard;