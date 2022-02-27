import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import SortingList from '../SortingList/SortingList.js';

const SortingPage = () => {

    const solvingHistory = [];
    const [array, setArray] = useState([0,9,8,7,6,4,3,2,1]);


    const newList = () => {

        const temp = new Array(15);

        for (let i = 0; i < temp.length; i++)
            temp[i] = Math.floor(Math.random() * 50) + 1;

        
        setArray(temp);
    }

    const sortList = async () => {

        const temp = [...array];
        sortHelper(temp);

        for (const frame of solvingHistory) {
            setArray(frame);
            await new Promise((resolve) => setTimeout(resolve, 300));  
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
            <div style={{ margin: "40px 450px 50px 450px", display: "flex" }}>
                <SortingList data={array}/>
            </div>
        </div>
    );
}

export default SortingPage;