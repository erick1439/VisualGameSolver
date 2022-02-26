import { useState, useEffect } from 'react';
import SudokuBoard from '../SudokuBoard/SudokuBoard.js';
import Navbar from '../Navbar/Navbar.js';

const SudokuPage = () => {

    const solvingHistory = [];
    const [state, setState] = useState([
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','',''],
        ['','','','','','','','','']
    ]);

    const newSudokuTable = async () => {

        let grid = [...state];

        const response = await fetch('http://localhost:4000/getSudokuTable/', {
            method: 'GET',
            headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
            }
        });

        const data = await response.json();

        let k = 0;

        for (let i = 0; i < 9; i++)
            for (let j = 0; j < 9; j++)
              grid[i][j] = data.puzzle.charAt(k++);

        setState(grid);
    }

    const solveSudoku = async () => {
        
        let temp = [...state];
        solveSudokuHelper(temp);

        for (const grid of solvingHistory) {
            setState(grid);
            await new Promise((resolve) => setTimeout(resolve, 150));
        }
    }

    const solveSudokuHelper = (temp) => {

        for (let i = 0; i < temp.length; i++) {
            
            for (let j = 0; j < temp.length; j++) {

                if (temp[i][j] ==='.') {

                    for (let c = '1'; c <= '9'; c++) {

                        if (isValid(temp, i, j, c)) {

                            temp[i][j] = c;
                            solvingHistory.push(temp.map((arr) => arr.slice()));

                            if (solveSudokuHelper(temp))
                                return true;

                            else {
                                temp[i][j] = '.';
                                solvingHistory.push(temp.map((arr) => arr.slice()));
                            }
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    const isValid = (temp, row, col, c) => {

        for (let i = 0; i < 9; i++) {

            if (temp[i][col] != '.' && temp[i][col] == c)
                return false; //check row

            if (temp[row][i] != '.' && temp[row][i] == c)
                return false; //check column

            if (temp[3 * (Math.floor(row / 3)) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + i % 3] != '.' && temp[3 * (Math.floor(row / 3)) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + i % 3] == c)
                return false; //check 3*3 block
        }

        return true;
    }

    useEffect(async () => newSudokuTable(), []);

    return(
        <div>
            <Navbar solveSudoku={solveSudoku} newSudokuTable={newSudokuTable} />
            <div style={{ margin: "40px 450px 50px 450px", display: "flex" }}>
                <SudokuBoard data={state}/>
            </div>
        </div>
    );
}

export default SudokuPage;