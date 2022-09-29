
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() { 
  const appClass = 'max-w-full w-11/12 lg:w-3/4 mx-auto';
  const onExpenseGet = (expense)=> {
    return expense
  }
  const [expense,  setExpense] = useState()
  return (
    <div className={appClass}>
      <NewExpense onExpenseGet= {onExpenseGet}/>
      <Expenses/>
    </div>
    
  );
}

export default App;
