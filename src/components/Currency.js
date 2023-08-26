import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import "../styles/Currency.css"
const Currency = () => {
    const { dispatch  } = useContext(AppContext);
    const [currency, setCurrency] = useState()
    const currencySelector = (e) => {
        setCurrency(e.target.value)
        console.log(e.target.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }
    return (
        <div className='alert'>
            {/* <label for="cars">Choose a car:</label> */}

            <select name="cars" id="currency-select" onChange={currencySelector}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupees</option>
            </select>
        </div>
    );
};
export default Currency;