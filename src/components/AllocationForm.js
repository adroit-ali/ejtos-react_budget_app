import React from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const {dispatch, remaining} = React.useContext(AppContext);
    const [name, setName] =  React.useState('');
    const [cost, setCost] =  React.useState('');
    const [action, setAction] =  React.useState('');
    const submitEvent = () => {
        if(cost > remaining) {
            alert("The value cannot exceed remaining funds  £"+remaining);
            setCost("");
            return;
        }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };
    return (
        <div>
            <div className="row">
                <div className='input-group mb-3' style={{marginLeft:'2rem'}}>
                    <div className='input-group-prepared'>
                        <label className='input-group-text' htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(e)=> setName(e.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing">Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>
                    <div className='input-group-prepared' style={{marginLeft:'2rem'}}>
                        <label className='input-group-text' htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(e)=> setAction(e.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <input required type="number" id='cost' value={cost} style={{marginLeft: '2rem', size: 10}} onChange={(e)=> setCost(e.target.value)}/>
                    <button className='btn btn-primary' onClick={submitEvent} style={{marginLeft: '2rem'}}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AllocationForm
