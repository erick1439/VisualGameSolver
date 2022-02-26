'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var GetSudokuTableController = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var randValue, options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        randValue = Math.random() * (100 - 11) + 11;
                        options = {
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

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function GetSudokuTableController(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = GetSudokuTableController;