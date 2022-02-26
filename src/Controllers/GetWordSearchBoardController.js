import { set } from 'core-js/core/dict';
import animals from '../words.json';
let generator = require('@sbj42/word-search-generator');

const GetWordSearchBoardController = (req, res) => {

    let set = new Set();
    let temp = new Array();

    while (set.size < 10)
        set.add(animals[Math.floor(Math.random() * animals.length - 1)]);
    
    for (let item of set)
        temp.push(item.toUpperCase());

    let options = {
        diagonals: true,
        width: 15,
        height: 16,
        minLength: 3,
        maxLength: 7,
        words: temp
    }

    let board = generator.generate(options);
    res.send(board);
}

export default GetWordSearchBoardController;