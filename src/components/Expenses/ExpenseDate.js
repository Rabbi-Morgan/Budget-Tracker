import React from 'react'

const ExpenseDate = ({dayObj}) => {
  return (
    <div className='text-xl border border-slate-200 font-normal bg-slate-800 text-slate-50 p-3 rounded-md text-center'> 
            <div className='month font-bold text-sm'>
              {dayObj.monthLong}
            </div> 
            <div className='year text-sm'>
                  {dayObj.fullYear}
            </div> 
            <div className='day font-bold text-2xl'>
                {dayObj.dayLong}
            </div>
                  
          </div>
  )
}

export default ExpenseDate