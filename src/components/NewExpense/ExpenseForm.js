import React, { useState } from 'react'

const ExpenseForm = (props) => {
    const inputClass = 'py-4  w-full px-2 rounded-md bg-gray-500 ';
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
            expenseTitle: userInput.enteredTitle,
            expenseDate: new Date(userInput.enteredDate),
            expense: +userInput.enteredAmount
        }
        props.onExpenseSubmit(expData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
             enteredDate: ''
        })
    }
    const [formStyle, setFormStyle] = useState({
        formS: 'flex-wrap w-full flex justify-between items-center',
        butS: 'hidden mx-2 rounded-md py-2 px-4 bg-blue-800'
    })
    const cancelHandler=() => {
        setFormStyle({
            formS: formStyle.butS + ' hidden',
            butS: 'bg-gradient-to-r from-cyan-500 to-blue-500 mx-2 rounded-md py-2 px-4 bg-blue-800'
        })
}
const addHandler=() => {
        setFormStyle({
            formS: 'flex-wrap flex justify-between items-center',
            butS: formStyle.butS + ' hidden'
        })
}
  return (
    <div className='flex p-4 justify-center text-gray-50 '>
    <form  onSubmit={submitHandler} className={formStyle.formS}>
        <div  className='w-full md:w-1/2 p-4'>
            <div className='w-full'>
                <label className={labelClass} htmlFor='title' >Title</label>
                <input required type='text' className={inputClass} value={userInput.enteredTitle} autoFocus onChange={titleHandler} name='title' id='title'/>
            </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
            <div className='w-full'>
                <label className={labelClass} htmlFor='amount' >Amount</label>
                <input required type='number' className={inputClass} onChange={amountHandler} value={userInput.enteredAmount} min='0.01' step='0.01' name='amount' id='amount'/>
            </div>
        </div>
        <div className='p-4 md:w-1/2'>
            <div className='w-full'>
                <label className={labelClass} htmlFor='date' >Date</label>
                <input required type='date' className={inputClass} onChange={dateHandler} min='2021-01-01' value={userInput.enteredDate} max='2024-12-31' name='date' id='date'/>
            </div>
        </div>
        <div className='p-4 self-end'>
            <input type='button' onClick={cancelHandler} className='cursor-pointer mx-2 rounded-md py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500' value='Cancel'/> 
            <button className='mx-2 rounded-md py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500' type='submit'>Add Expense</button>
        </div>
    </form>
    <div>
        <button className={formStyle.butS} onClick={addHandler}>Add New Expense</button>
    </div>
    </div>
  )
}

export default ExpenseForm