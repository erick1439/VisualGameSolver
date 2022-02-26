'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GetWordSearchBoardController = require('../Controllers/GetWordSearchBoardController.js');

var _GetWordSearchBoardController2 = _interopRequireDefault(_GetWordSearchBoardController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetWordSearchBoard = function GetWordSearchBoard(app) {

    app.route('/getWordSeachBoard').get(_GetWordSearchBoardController2.default);
};

exports.default = GetWordSearchBoard;