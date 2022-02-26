import GetMazeController from '../Controllers/GetMazeController.js';

const GetMaze = (app) => {

    app.route('/getMaze')
        .post(GetMazeController);
}

export default GetMaze;