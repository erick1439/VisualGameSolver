export default class SudokuGenerator {
    constructor() {
        this.board = this.generateBoard();
    }

    generateBoard() {
        const board = [];
        for (let i = 0; i < 9; i++) {
            board[i] = [];
            for (let j = 0; j < 9; j++) {
                board[i][j] = 0;
            }
        }
        this.solve(board);
        this.removeNumbers(board);
        return board;
    }

    solve(board) {
        const [i, j] = this.findEmptyCell(board);
        if (i === -1 && j === -1) {
            return true;
        }
        for (let num = 1; num <= 9; num++) {
            if (this.isValidMove(board, i, j, num)) {
                board[i][j] = num;
                if (this.solve(board)) {
                    return true;
                }
                board[i][j] = 0;
            }
        }
        return false;
    }

    findEmptyCell(board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === 0) {
                    return [i, j];
                }
            }
        }
        return [-1, -1];
    }

    isValidMove(board, i, j, num) {
        for (let k = 0; k < 9; k++) {
            if (board[i][k] === num || board[k][j] === num) {
                return false;
            }
        }
        const row = Math.floor(i / 3) * 3;
        const col = Math.floor(j / 3) * 3;
        for (let x = row; x < row + 3; x++) {
            for (let y = col; y < col + 3; y++) {
                if (board[x][y] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    removeNumbers(board) {
        let cellsToRemove = 45; // medium difficulty
        if (Math.random() > 0.5) {
            cellsToRemove = 55; // hard difficulty
        }
        while (cellsToRemove > 0) {
            const i = Math.floor(Math.random() * 9);
            const j = Math.floor(Math.random() * 9);
            if (board[i][j] !== 0) {
                const temp = board[i][j];
                board[i][j] = 0;
                const tempBoard = JSON.parse(JSON.stringify(board));
                if (this.solve(tempBoard)) {
                    cellsToRemove--;
                } else {
                    board[i][j] = temp;
                }
            }
        }
    }
}


