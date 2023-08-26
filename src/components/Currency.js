import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [budgetVal, setBudgetVal] = useState(budget)
    const budgetValChange = (e) => {
        if (e.target.value > 20000) {
            alert("the value cannot exceed over $2000")
        }
        else if (e.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than spendings")
        }
        else {
            setBudgetVal(e.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            {/* <label for="cars">Choose a car:</label> */}

            <select name="cars" id="cars" style={{backgroundColor: "green"}}>
                <option value="volvo">$ Dollar</option>
                <option value="saab">£ Pound</option>
                <option value="mercedes">€ Euro</option>
                <option value="audi">₹ Rupees</option>
            </select>
        </div>
    );
};
export default Currency;