import { useEffect, useState } from 'react';
import Navbar from "../Navbar/Navbar.js";
import PathFinderBoard from '../PathFinderBoard/PathFinderBoard.js';

const PahtFinderPage = () => {

    const solvingHistory = [];
    const [count, setCount] = useState(1);
    const [state, setState] = useState([
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','',''],
    ]);

    const newMaze = async () => {

        const response = await fetch('/getMaze', {
            method: 'POST',
            headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({count: count})
        });
    
        setCount(prevState => prevState + 1);
        const data = await response.json();
        setState(data);
    }

    useEffect(async () => newMaze(), []);

    const solveMaze = async () => {

        console.log('this is it');

        let temp = [...state];
        let startX, startY;

        // Creating visited Array
        const visited = new Array(temp.length);

        for (let i = 0; i < visited.length; i++)
            visited[i] = new Array(temp.length);

        // Finding the starting point of the maze and populatin the visited array
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[0].length; j++) {
                if (temp[i][j] === '@') {
                    startX = i;
                    startY = j;
                }

                if (temp[i][j] === '@' || temp[i][j] ==='#')
                    visited[i][j] = true;

                else 
                    visited[i][j] = false;

            }
        }

        solveMazeHelper(temp, temp.length, temp[0].length, startX, startY, visited);

        for (const frame of solvingHistory) {
            setState(frame);
            await new Promise((resolve) => setTimeout(resolve, 90));
        }
    }

    const solveMazeHelper = (temp, heigth, width, x, y, visited) => {

        let newX, newY;
        let breadcrumb = '.';
        let moves = [[0,-1],[0,1],[-1,0],[1,0]];

        solvingHistory.push(temp.map((arr) => arr.slice()));

        if (temp[x][y] === 'e') {
            return true;
        }

        for (let i = 0; i < 4; i++) {

            newX = x + moves[i][0];
            newY = y + moves[i][1];

            if (x < 0 || x >= heigth || y < 0 || y >= width)
                continue;

            if (visited[newX][newY] === true)
                continue;

            
            if (temp[newX][newY] === 'e') {


                temp[newX][newY] = '@';
                temp[x][y] = '.';
                solvingHistory.push(temp.map((arr) => arr.slice()));


                return true;
            }
            else 
                visited[newX][newY] = true;

            temp[x][y] = breadcrumb;
            temp[newX][newY] = '@';

            if (solveMazeHelper(temp, heigth, width, newX, newY, visited))
                return true;

            temp[newX][newY] = '';
            temp[x][y] = '@';

            solvingHistory.push(temp.map((arr) => arr.slice()));
        }

       return false;
    }

    return(
        <div>
            <Navbar newMaze={newMaze} solveMaze={solveMaze}/>
            <div style={{ margin: "40px 450px 50px 450px", display: "flex" }}>
                <PathFinderBoard data={state}/>
            </div>
        </div>
    );
}

export default PahtFinderPage;