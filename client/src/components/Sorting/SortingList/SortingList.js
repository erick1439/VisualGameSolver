import './SortingList.css';

const SortingList = ({data}) => {
    return(
        <div className='listContainer'>
            {
                data.map((val, index) => {
                    return(<div key={index} className='element'  style={{height: `${val * 3}px`}}>{val}</div>);

                })
            }
        </div>
    );
}

export default SortingList;