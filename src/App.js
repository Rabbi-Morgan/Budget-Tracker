
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { expenseprops} from './components/Expenses/expenseprops'

function App() { 
  const appClass = 'max-w-full w-11/12 lg:w-3/4 mx-auto';
  const onExpenseGet = (expense)=> {
    setExpenseList((prevState) => [expense, ...prevState])
  }
  const [expenseList,  setExpenseList] = useState(expenseprops)
  return (
    <div className={appClass}>
      <h1 className='text-4xl text-center mt-12 text-white font-bold'>Budget Tracker</h1>
      <NewExpense onExpenseGet= {onExpenseGet}/>
      <Expenses expenseprops={expenseList}/>
    </div>
    
  );
}

export default App;
