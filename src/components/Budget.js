import React from 'react'
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const {currency,budget, dispatch, remaining} = React.useContext(AppContext);
  const [newBudget, setNewBudget] = React.useState(budget);
  const handleBudgeChange = (event) =>{
    if(event.target.value > 20000) {
        alert("The Budget cannot exceed £20000");
        return;
    }
    if((budget-remaining) > event.target.value) {
        alert("The Budget cannot be lower the Spent so far");
        return;
    }
    setNewBudget(event.target.value);
    dispatch({
        type: 'SET_BUDGET',
        payload: event.target.value,
    });
  }
  return (
    <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} style={{width:'135px'}} onChange={handleBudgeChange}/>
    </div>
  )
}

export default Budget
