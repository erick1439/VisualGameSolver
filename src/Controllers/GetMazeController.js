import * as fs from 'fs';

const GetMazeController = (req, res) => {

    let n = 15;
    const mazes = ['maze1.txt', 'maze2.txt', 'maze3.txt', 'maze4.txt', 'maze5.txt','maze6.txt', 'maze7.txt', 'maze8.txt'];

    fs.readFile('./src/Mazes/' + mazes[req.body.count % 8], 'utf8', (err, data) => {

        if (err) {
            res.send("Error reading the maze");
            return;
        }

        data = data.replaceAll('\n', '');

        let k = 0;
        const maze = new Array(n);

        for (let i = 0; i < n; i++)
            maze[i] = new Array(n);

        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                maze[i][j] = data.charAt(k++);

        res.send(maze); 
    });
}

export default GetMazeController;