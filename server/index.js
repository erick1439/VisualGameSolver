import express from 'express';
import MazeBuilder from './maze/MazeBuilder.js';
import SudokuGenerator from './sudoku/SudokuGenerator.js';
import { getList } from './sorting/ListBuilder.js'

const app = express();
const port = 5001;
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/getMaze', (req, res) => {
    let maze = new MazeBuilder(7, 8);
    let grid = maze.getArrayGrid()

    res.send(grid);
})

app.get('/getSudoku', (req, res) => {

    const generator = new SudokuGenerator();
    res.json(generator.board);
})

app.get('/getList', (req, res) => {

    var randomList = getList(25, 1, 100);
    res.json({"list" : randomList});
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});