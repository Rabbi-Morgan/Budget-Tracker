import React, { useState } from 'react'

const ExpensesFilter = (props) => {
    const selectHandler = (e) => {
        props.onChangeFilter(e.target.value);
        console.log(props.filt.length)
    }
    
  return (
    <div className='flex justify-between'>
        <div>
            <label className='text-white font-bold '>Filter by year</label>
        </div>
        <div>
            <select onChange={selectHandler} value={props.selected} id='selectYear' className='py-2 px-4 rounded-md focus:outline-none font-bold'>
                <option value="2024" >2024</option>
                <option value="2023" >2023</option>
                <option value="2022" >2022</option>
                <option value="2021" >2021</option>
            </select>
        </div>
    </div>
  )
}

export default ExpensesFilter