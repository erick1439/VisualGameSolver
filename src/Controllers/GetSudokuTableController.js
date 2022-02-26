import axios from 'axios';

const GetSudokuTableController = (req, res) => {

    let randValue = Math.random() * (100 - 11) + 11;

    const options = {
        method: 'GET',
        url: 'https://sudoku-generator1.p.rapidapi.com/sudoku/generate',
        params: { seed: randValue.toString() },
        headers: {
            'x-rapidapi-host': 'sudoku-generator1.p.rapidapi.com',
            'x-rapidapi-key': 'c43a69e1acmsh82ae146ac2a3cf0p110001jsnf4fefac436b4'
        }
    };

    axios.request(options).then(response => {

        res.send(response.data);

    }).catch(error => {

        res.json( {'status': 'error', 'mssg': error });
    });
}

export default GetSudokuTableController;