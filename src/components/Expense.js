import React from 'react';
import Expenseitem from './Expenseitem';

export default function Expense(props) {
  return (
    <div>
         {props.expenses.map((item) => 
       <Expenseitem key = {item.id} title = {item.title} amount= {item.amount} expensesDate = {item.date} ></Expenseitem>)
     }
      
    </div>
  )
}
