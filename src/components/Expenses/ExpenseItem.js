import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
// import { monthsofyear } from './dates';
const ExpenseItem = ({expenseprops, id}) => {
  const [title, setTitle] = useState(expenseprops.expenseTitle);
  console.log(`Expense item ${id} is created`);
  const titleHandler = ()=>{
    setTitle("Updated")
    console.log("Something was updated")
  }
  const dateObj = {
    monthLong: expenseprops.expenseDate.toLocaleString('en-Us', {month: 'long'}),
    fullYear :expenseprops.expenseDate.getFullYear(),
    dayLong: expenseprops.expenseDate.toLocaleString('en-Us', {day: '2-digit'}),
  }

  return (
    <Card className='shadow-md p-4 flex justify-between items-center align-middle bg-slate-500  '>
        <div className='flex justify-between items-center '>
          <ExpenseDate dayObj={dateObj}/> 
            <h2 className='text-gray-200 pl-4 text-2xl font-extrabold'>{title}</h2>
          </div>
        <div>
            <div className='bg-blue-900 py-3 px-6 rounded-lg text-xl font-bold text-slate-200 tracking-wide'>{`$${expenseprops.expense}`}</div>
            <button className='py-2 px-4 bg-slate-600 text-slate-50' onClick={titleHandler}>Change</button>
        </div>
    </Card>
  )
}

export default ExpenseItem