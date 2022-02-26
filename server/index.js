'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _GetSudokuTable = require('./Routes/GetSudokuTable.js');

var _GetSudokuTable2 = _interopRequireDefault(_GetSudokuTable);

var _GetMaze = require('./Routes/GetMaze.js');

var _GetMaze2 = _interopRequireDefault(_GetMaze);

var _GetWordSearchBoard = require('./Routes/GetWordSearchBoard.js');

var _GetWordSearchBoard2 = _interopRequireDefault(_GetWordSearchBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 4000;
var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());

app.get('/', function (req, res) {
  res.send('This is ok');
});

(0, _GetSudokuTable2.default)(app);
(0, _GetWordSearchBoard2.default)(app);
(0, _GetMaze2.default)(app);

if (process.env.NODE_ENV === 'production') {

  app.use(_express2.default.static('client/build'));

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT);