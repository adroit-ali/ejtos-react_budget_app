import React from 'react'
import { AppContext } from "../context/AppContext";

const Remaining = () => {
    let {currency,remaining} = React.useContext(AppContext);
    // const {expenses , budget} = React.useContext(AppContext);
    // var remaining = budget;
    // var totalExpenses;
    // if (expenses) {
    //         totalExpenses = expenses.reduce((total, item) => {
    //             return (total = total + item.cost);
    //         }, 0);
    //     remaining = budget - totalExpenses;
    // }
    // const alertType = budget < totalExpenses ? 'alert-danger':'alert-success';
    const alertType = remaining < 0 ? 'alert-danger':'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    )
}

export default Remaining
