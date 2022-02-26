'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dict = require('core-js/core/dict');

var _words = require('../words.json');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generator = require('@sbj42/word-search-generator');

var GetWordSearchBoardController = function GetWordSearchBoardController(req, res) {

    var set = new Set();
    var temp = new Array();

    while (set.size < 10) {
        set.add(_words2.default[Math.floor(Math.random() * _words2.default.length - 1)]);
    }var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            temp.push(item.toUpperCase());
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var options = {
        diagonals: true,
        width: 15,
        height: 16,
        minLength: 3,
        maxLength: 7,
        words: temp
    };

    var board = generator.generate(options);
    res.send(board);
};

exports.default = GetWordSearchBoardController;