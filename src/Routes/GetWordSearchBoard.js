import GetWordSearchBoardController from '../Controllers/GetWordSearchBoardController.js';

const GetWordSearchBoard = (app) =>  {

    app.route('/getWordSeachBoard')
        .get(GetWordSearchBoardController);
}

export default GetWordSearchBoard;