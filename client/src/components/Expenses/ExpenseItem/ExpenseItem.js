import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
import Card from '../../UI/Card/Card';

function ExpenseItem(props){
    // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  let classes = 'expense-item__price ' + props.class
    return <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className={classes}>${props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
  </Card>
}

export default ExpenseItem;