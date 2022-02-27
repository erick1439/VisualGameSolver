import './SortingList.css';

const SortingList = ({data}) => {
    return(
        <div className='listContainer'>
            {
                data.map((val, index) => {
                    return(<div key={index} className='element'  style={{paddingTop: `${val * 8}px`}}>{val}</div>);

                })
            }
        </div>
    );
}

export default SortingList;