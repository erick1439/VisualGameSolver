'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GetMazeController = function GetMazeController(req, res) {

    var n = 15;
    var mazes = ['maze1.txt', 'maze2.txt', 'maze3.txt', 'maze4.txt', 'maze5.txt'];

    fs.readFile('./src/Mazes/' + mazes[req.body.count % 5], 'utf8', function (err, data) {

        if (err) {
            res.send("Error reading the maze");
            return;
        }

        data = data.replaceAll('\n', '');

        var k = 0;
        var maze = new Array(n);

        for (var i = 0; i < n; i++) {
            maze[i] = new Array(n);
        }for (var _i = 0; _i < n; _i++) {
            for (var j = 0; j < n; j++) {
                maze[_i][j] = data.charAt(k++);
            }
        }res.send(maze);
    });
};

exports.default = GetMazeController;