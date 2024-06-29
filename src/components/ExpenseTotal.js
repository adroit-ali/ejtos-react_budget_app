import React from 'react'
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
    const {currency, expenses } = React.useContext(AppContext);
    var totalExpenses = 0;
    if (expenses) {
            totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
    }
    return (
        <div className={`alert alert-primary`}>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal
