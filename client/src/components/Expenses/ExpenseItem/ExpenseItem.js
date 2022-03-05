import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
import Card from '../../UI/Card/Card';

function ExpenseItem(props){
  const year  = props.date.getFullYear()
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day   = props.date.toLocaleString('en-US', { day: '2-digit' })
  

    // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  let classes = 'expense-item__price ' + props.class


    return <Card className='expense-item'>
    {props.date2 ? <ExpenseDate date={props.date} /> :null}
    {props.date   ? <div className=''>{month + ' ' + day + ', ' + year}</div> :null}
    <div className='expense-item__description'>
      <h2>{title}</h2>
      {props.budget ? <div className='expense-item__price'      >${props.budget}</div>:null}
      {props.amount ? <div className='expense-item__price red'  >${props.amount}</div>:null}
      {props.pay    ? <div className='expense-item__price green'>${props.pay}</div>:null}
    </div>
    <button onClick={clickHandler}>Change Title</button>
  </Card>
}

export default ExpenseItem;