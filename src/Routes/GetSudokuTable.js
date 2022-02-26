import GetSudokuTableController from '../Controllers/GetSudokuTableController.js';

const GetSudokuBoard = (app) => {

    app.route('/getSudokuTable')
        .get(GetSudokuTableController);

}

export default GetSudokuBoard;