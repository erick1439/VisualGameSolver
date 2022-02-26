import './PathFinderBoard.css';
import PathFinderBox from '../PathFinderBox/PathFinderBox.js';

const PahtFinderBoard = ({data}) =>{
    return (
        <div className="pathFinderBoard">
            <PathFinderBox values={data[0]}/>
            <PathFinderBox values={data[1]}/>
            <PathFinderBox values={data[2]}/>
            <PathFinderBox values={data[3]}/>
            <PathFinderBox values={data[4]}/>
            <PathFinderBox values={data[5]}/>
            <PathFinderBox values={data[6]}/>
            <PathFinderBox values={data[7]}/>
            <PathFinderBox values={data[8]}/>
            <PathFinderBox values={data[9]}/>
            <PathFinderBox values={data[10]}/>
            <PathFinderBox values={data[11]}/>
            <PathFinderBox values={data[12]}/>
            <PathFinderBox values={data[13]}/>
            <PathFinderBox values={data[14]}/>
        </div>
    );
}

export default PahtFinderBoard;