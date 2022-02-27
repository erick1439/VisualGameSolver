'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GetSudokuTableController = function GetSudokuTableController(req, res) {

    var randValue = Math.random() * (100 - 11) + 11;

    var options = {
        method: 'GET',
        url: 'https://sudoku-generator1.p.rapidapi.com/sudoku/generate',
        params: { seed: randValue.toString() },
        headers: {
            'x-rapidapi-host': 'sudoku-generator1.p.rapidapi.com',
            'x-rapidapi-key': 'c43a69e1acmsh82ae146ac2a3cf0p110001jsnf4fefac436b4'
        }
    };

    _axios2.default.request(options).then(function (response) {

        res.send(response.data);
    }).catch(function (error) {

        res.json({ 'status': 'error', 'mssg': error });
    });
};

exports.default = GetSudokuTableController;