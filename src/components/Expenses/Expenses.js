import React from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import { expenseprops } from './expenseprops';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

const Expenses = () => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    } 
  return (
    <Card className=" bg-gray-900 p-8  h-auto">
      <div className=' md:col-start-3 md:col-span-8'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenseprops.map((exp,ind)=><ExpenseItem id={ind} expenseprops={exp} key={exp.id}/>)}
            </div>

    </Card>
  )
}

export default Expenses