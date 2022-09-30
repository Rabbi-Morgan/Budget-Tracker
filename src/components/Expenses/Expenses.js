import React from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({expenseprops}) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    } 
    const filteredExpenses = expenseprops.filter(exp => {return exp.expenseDate.getFullYear().toString() === filteredYear});
  return (
    <Card className=" bg-gray-900 p-8  h-auto">
      <div className=' md:col-start-3 md:col-span-8'>
        <ExpensesFilter filt={filteredExpenses} selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {filteredExpenses.length === 0 && <p className='pt-4 text-center text-white text-2xl'>No item found for this searched year </p>}
      {filteredExpenses.length >= 1 && filteredExpenses.map((exp,ind)=><ExpenseItem id={ind} expenseprops={exp} key={exp.id}/>)}
            </div>

    </Card>
  )
}

export default Expenses