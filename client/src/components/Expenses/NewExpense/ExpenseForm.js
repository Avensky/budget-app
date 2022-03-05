import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle,      setEnteredTitle]     = useState('');
  const [enteredAmount,     setEnteredAmount]    = useState('');
  const [enteredBalance,    setEnteredBalance]   = useState('');
  const [enteredDate,       setEnteredDate]      = useState('');
  const [enteredFrequency,  setEnteredFrequency] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const balanceChangeHandler = (event) => {
    setEnteredBalance(event.target.value);
  };
  
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const frequencyChangeHandler = (event) => {
    setEnteredFrequency(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      balance: enteredBalance,
      amount: enteredAmount,
      date: new Date(enteredDate),
      frequency: enteredFrequency
    };

    props.newExpense(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredBalance('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Balance</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredBalance}
            onChange={balanceChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <label><b>Frequency</b></label>
        <div className='radio'>
          <input
            type='radio'
            value='Monthly'
            name='Monthly'
            onChange={frequencyChangeHandler}
          />
          <label htmlFor="html">Monthly</label><br></br>
          <input
            type='radio'
            value='Weekly'
            onChange={frequencyChangeHandler}
          />
          <label htmlFor="html">Weekly</label><br></br>
          <input
            type='radio'
            value='Date'
            onChange={frequencyChangeHandler}
          />
          <label htmlFor="html">Date</label><br></br>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
      expenses      : state.expenses.expenses,
      error         : state.expenses.error,
      message       : state.expenses.message,
      //loading     : state.expenses.loading,
      //user        : state.auth.payload
  }
}

const mapDispatchToProps = dispatch => {
  return {
      newExpense:  (values) => dispatch( actions.newExpense(values)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (ExpenseForm);