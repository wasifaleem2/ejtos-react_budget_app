import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [budgetVal, setBudgetVal] = useState(budget)
    const budgetValChange = (e)=>{
        if(e.target.value > 20000){
            alert("the value cannot exceed over $2000")
        }
        else if(e.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than spendings")
        }
        else{
            setBudgetVal(e.target.value); 
        }
    }
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>Budget: {currency} <input value={budgetVal} style={{width:"150px"}}  type="number" onChange={budgetValChange} /></span>
        </div>
    );
};
export default Budget;