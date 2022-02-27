import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import SortingList from '../SortingList/SortingList.js';

const SortingPage = () => {

    const solvingHistory = [];
    const [array, setArray] = useState([]);


    const newList = () => {

        const temp = new Array(43);

        for (let i = 0; i < temp.length; i++)
            temp[i] = Math.floor(Math.random() * 50) + 1;

        
        setArray(temp);
    }

    const sortList = async () => {

        const temp = [...array];
        sortHelper(temp);

        for (const frame of solvingHistory) {
            setArray(frame);
            await new Promise((resolve) => setTimeout(resolve, 100));  
        }
    }

    const sortHelper = (temp) => {

        for (let i = 0; i < temp.length; i++) {
            for (let j = i + 1; j < temp.length; j++) {
                if (temp[j] < temp[i]) {
                    
                    let val = temp[j];
                    temp[j] = temp[i];
                    temp[i] = val;

                    solvingHistory.push([...temp]);
                }
            }
        }
    }

    useEffect(() => newList(), []);

    return(
        <div>
            <Navbar newList={newList} sortList={sortList}/>
            <div style={{ margin: "500px 0%"}}>
                <SortingList data={array}/>
            </div>
        </div>
    );
}

export default SortingPage;