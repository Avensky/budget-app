import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Cash Rewards Visa Platinum Plus - 4235',
      amount: 100,
      owe: 1318.86,
      date: new Date(2022, 1, 12),
    },
    { id: 'e2', title: 'New TV', amount: 100, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 100,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 100,
      date: new Date(2021, 5, 12),
    }]

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
