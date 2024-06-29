import React from 'react'
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const {budget, dispatch} = React.useContext(AppContext);
  const [newBudget, setNewBudget] = React.useState(budget);
  const handleBudgeChange = (event) =>{
    setNewBudget(event.target.value);
    dispatch({
        type: 'SET_BUDGET',
        payload: event.target.value,
    });
  }
  return (
    <div className='alert alert-secondary'>
        <span>Budget: £{budget}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgeChange}/>
    </div>
  )
}

export default Budget
