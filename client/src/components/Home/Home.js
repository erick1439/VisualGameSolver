import './Home.css';
import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Visual Game Solver</h1>
            <div className='homeContainer'>
                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="sudoku.png" height={200} width={200} />
                    <Card.Body>
                        <Card.Title>Visual Sudoku solver</Card.Title>
                        <Card.Text>
                            This is a sudoku solver that uses backtracking to solve the puzzle. The algorigthm will check allow
                            the possibilities until it completes solving the table.
                        </Card.Text>
                        <Link to='/sudoku'>
                            <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="maze.png" height={200} width={200} />
                    <Card.Body>
                        <Card.Title>Visual Maze Solver</Card.Title>
                        <Card.Text>
                            This is a maze solver that uses DFS to find a soluiton to the puzzle. The starting posintion will be 
                            represent with '@', a wall will be '#', and 'e' represents an exit.
                        </Card.Text>
                        <Link to='/maze'>
                            <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="maze.png" height={200} width={200} />
                    <Card.Body>
                        <Card.Title>Visual Sorting</Card.Title>
                        <Card.Text>
                            This is a maze solver that uses DFS to find a soluiton to the puzzle. The starting posintion will be 
                            represent with '@', a wall will be '#', and 'e' represents an exit.
                        </Card.Text>
                        <Link to='/sortList'>
                            <Button variant="primary">Go somewhere</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Home;