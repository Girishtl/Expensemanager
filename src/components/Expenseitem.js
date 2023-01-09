import React from 'react';
import './Expenseitem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';

export default function Expenseitem(props) {
   

  return (
      <div className="expense-item">
      <ExpenseDate eDate ={props.expensesDate}/> 
    <div className="expense-item__description "><h2>{props.title} </h2></div>
    <div className = "expense-item__price">{props.amount}</div>
    </div>
  )
}
