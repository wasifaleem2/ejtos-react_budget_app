import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [budgetVal, setBudgetVal] = useState(budget)
    const budgetValChange = (e) =>{
        if(e+budgetVal > 20000){
            alert("the value cannot exceed remaining funds $30")
        }
    }
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>Budget: <input  max="20000" type="number" onChange={budgetValChange} /></span>
        </div>
    );
};
export default Budget;
