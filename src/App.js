
import './App.css';
import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import { expenseprops } from './components/Expenses/expenseprops';
import { useState } from 'react';
function App() { 
  return (
    <Card className="max-w-full bg-gray-800 p-8 w-11/12 lg:w-3/4 h-auto mx-auto">
      <div className=' md:col-start-3 md:col-span-8'>
      {expenseprops.map((exp,ind)=><ExpenseItem id={ind} expenseprops={exp} key={exp.id}/>)}
            </div>

    </Card>
  );
}

export default App;
