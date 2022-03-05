import React, { useEffect } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index'

const Expenses = (props) => {
  const { expenses } = props
  useEffect(() => {  if (!expenses){ getData() } },[expenses])
  console.log(props.expenses)

  const getData = async () => { 
    console.log('get data')
    props.onGetExpenses() 
  }
  const items = expenses || []

  let sum 
  expenses != null
    ? sum = items.reduce((a, b) => a + b.amount, 0).toFixed(2)
    : sum = null
  //const weekly = sumValues(props.items)

  let payPeriod = new Date()
  let addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  let newPayperiod = addDays(payPeriod, 14)
  let newPayperiod2 = addDays(newPayperiod, 14)

  
  console.log('items',items)

  let charges
  let budget 
  if (expenses) {
    console.log(items)
    var resultProductData = items.filter(item => {
      var date = new Date(item.date);
      console.log(date)
      console.log(payPeriod)
      let res = date >= payPeriod && date <= newPayperiod
      return res
    });

    console.log(resultProductData)

    charges = resultProductData.map(item=>{
      return     <ExpenseItem
      key={item.title}
      title={item.title}
      amount={item.amount}
      date={new Date(item.date)}
    />
    })

    budget =  resultProductData.reduce((a, b) => a + b.amount, 0).toFixed(2);

  } 
  
  let todaysDate = new Date(2022, 1, 1)
    return (<Card className="expenses">
    <ExpenseItem
      date={payPeriod}
      date2={payPeriod}
      pay={1590.30}
      budget={1590.30-budget}
      amount={budget}
    />
    {charges}
  </Card>
    )
}

const mapStateToProps = state => {
  return {
    expenses : state.expenses.expenses,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onGetExpenses: () => dispatch( actions.getExpenses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);