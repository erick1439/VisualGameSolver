import express from 'express';
import cors from 'cors';
import GetSudokuBoard from './Routes/GetSudokuTable.js';
import GetMaze from './Routes/GetMaze.js';
import GetWordSearchBoard from './Routes/GetWordSearchBoard.js';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('This is ok');
});

GetSudokuBoard(app);
GetWordSearchBoard(app);
GetMaze(app);

if (process.env.NODE_ENV === 'production') {
 
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
    });
}

app.listen(PORT);