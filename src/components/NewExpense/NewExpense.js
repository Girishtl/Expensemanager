import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Expense from '../Expense';

const NewExpense =(props) =>{

    const saveExpenseHandler = (NewExpenseData) =>{
        const newExpenseDate = {
            ...NewExpenseData,
            id : Math.random().toString()
        }
        props.AddExpense(newExpenseDate);
        console.log("New Expense")
        console.log(newExpenseDate);
    }

    return <div className = "new-expense">
       <ExpenseForm onSaveExpenseData = {saveExpenseHandler}></ExpenseForm>
    </div>
}


export default NewExpense;
