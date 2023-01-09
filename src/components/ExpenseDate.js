import React from 'react';
import './ExpenseData.css';

export default function ExpenseDate(props) {
   const month = props.eDate.toLocaleString('en-US',{month: 'long'});
   const day = props.eDate.toLocaleString('en-US',{day: '2-digit'});
   const year =  props.eDate.getFullYear();
  return (
    <div className="expense-date" >
        
        <div className="expense-date__month">{month}</div>
       
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      
    </div>
  )
}
