import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/Expenses/NewExpense/NewExpense';

function App() {
  const expenses = [
    {id: 'e1',title: 'Cash Rewards Visa Platinum Plus - 4235', amount: 100.00, 
      owe: 1318.86, date: new Date(2022, 2, 12),},
    { id: 'e2',  title: 'Dell Finacial Services', amount: 60, date: new Date(2022, 1, 4) },
    { id: 'e3',  title: 'Car Insurance', amount: 251.18,date: new Date(2022, 1, 7),},
    { id: 'e4',  title: 'Rent',amount: 300.00,date: new Date(2022, 1, 1),},
    { id: 'e5',  title: 'Viz Media', amount: 1.99, date: new Date(2022, 0, 31) },
    { id: 'e6',  title: 'Microsoft', amount: 6.99, date: new Date(2022, 1, 1) },
    { id: 'e7',  title: 'Sprint', amount: 166.27, date: new Date(2022, 1, 3) },
    { id: 'e8',  title: 'Gas', amount: 50, date: new Date(2022, 1, 1) },
    { id: 'e9',  title: 'Amazon Web Services', amount: 21, date: new Date(2022, 1, 3) },
    { id: 'e10', title: 'Laundry', amount: 20, date: new Date(2022, 1, 1) },
    { id: 'e11', title: 'Gym', amount: 30, date: new Date(2022, 1, 1) },
    { id: 'e12', title: 'Misc', amount: 384.86, date: new Date(2022, 1, 1) },
  ]

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
