import './Expenses.css'
import ExpenseItem from './ExpenseItem/ExpenseItem';
import Card from '../UI/Card/Card';

function Expenses(props) {
  console.log(props.items)
  const items = props.items
  let sumValues = items.reduce((a, b) => a + b.amount, 0);
  //const weekly = sumValues(props.items)
  console.log(sumValues)
  
  let payPeriod = new Date(2022, 1, 1)
  let addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  let newPayperiod = addDays(payPeriod, 14)
  let newPayperiod2 = addDays(newPayperiod, 14)
  console.log(payPeriod)
  console.log(newPayperiod)

  let Charges = null
  console.log('items',items)
  var resultProductData =items.filter(item => {
    var date = new Date(item.date);

    let res = date >= payPeriod && date <= newPayperiod
    return res
  });
  console.log(resultProductData)

  Charges = resultProductData.map(item=>{
    return     <ExpenseItem
    key={item.title}
    title={item.title}
    amount={item.amount}
    date={item.date}
  />
  })

  let todaysDate = new Date(2022, 1, 1)
    return (<Card className="expenses">
    <ExpenseItem
      date={payPeriod}
      amount={1500}
      class='green'
    />
    {Charges}
  </Card>
    )
}

export default Expenses;