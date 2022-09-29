import React, { useState } from 'react'

const ExpenseForm = (props) => {
    const inputClass = 'py-4 w-full px-2 rounded-md bg-gray-500';
    const labelClass = 'font-bold block mb-2';

    const [userInput, setUserInput] = useState({
        enteredTitle: '',   
        enteredAmount: '',
        enteredDate: ''
    })


    const titleHandler = (e)=>{
        setUserInput((prevState)=> {return {...prevState, enteredTitle: e.target.value}})
       
    }

    const amountHandler = (e)=>{   
       setUserInput((prevState)=> {return {...prevState, enteredAmount: e.target.value}})
    }

    const dateHandler = (e)=>{
        setUserInput((prevState)=> {return {...prevState, enteredDate: e.target.value}})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const expData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onExpenseSubmit(expData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
             enteredDate: ''
        })
    }
    const keyPressFunction = (ev) => {
  
}

  return (
    <form  onSubmit={submitHandler} className='p-4 text-gray-50 flex-wrap flex justify-between items-center'>
        <div  className='w-full md:w-1/2 p-4'>
            <div className='w-full'>
                <label className={labelClass} htmlFor='title' >Title</label>
                <input onKeyDown={keyPressFunction} type='text' className={inputClass} value={userInput.enteredTitle} autoFocus onChange={titleHandler} name='title' id='title'/>
            </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
            <div className='w-full'>
                <label className={labelClass} htmlFor='amount' >Amount</label>
                <input onKeyDown={keyPressFunction} type='number' className={inputClass} onChange={amountHandler} value={userInput.enteredAmount} min='0.01' step='0.01' name='amount' id='amount'/>
            </div>
        </div>
        <div className='p-4 md:w-1/2'>
            <div className='w-full'>
                <label className={labelClass} htmlFor='date' >Date</label>
                <input onKeyDown={keyPressFunction} type='date' className={inputClass} onChange={dateHandler} min='2021-01-01' value={userInput.enteredDate} max='2024-12-31' name='date' id='date'/>
            </div>
        </div>
        <div className='p-4'>
            <button className='rounded-md py-2 px-4 bg-blue-800' type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm