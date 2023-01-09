import React ,{useState} from 'react'
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const[enterTilte,setEnteredTitle]=   useState('');
  const[enterAmount,setEnteredAmount]=   useState('');
  const[enterDate,setEnteredDate]=   useState('');
 
const TitleChangeHandler=(event)=>
{
    setEnteredTitle(event.target.value)
    
}
const amountChangeHandler=(event)=>
{
    setEnteredAmount(event.target.value)
    
}
const dateChangeHandler=(event)=>
{
    setEnteredDate(event.target.value)
   
}
const submitHandler = (event)=>{
    event.preventDefault();
    const ExpenseDate = {
        title :enterTilte,
        date :enterDate,
        amount : enterAmount
    }
    props.onSaveExpenseData(ExpenseDate);
    console.log(ExpenseDate);
}

    return (
        <form onSubmit = {submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value= {enterTilte} onChange = {TitleChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" value = {enterAmount} onChange= {amountChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date"  value = {enterDate} onChange = {dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__action">
                <button  type="submit">Add</button>
            </div>

        </form>
    )
}


export default ExpenseForm;
