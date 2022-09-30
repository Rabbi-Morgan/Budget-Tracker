import React from 'react'
import Card from '../UI/Card'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({onExpenseGet}) => {
    const bringExpense = (expenseData) => {
        const expenses = {
            ...expenseData,
            id: Math.random().toString()
        }
        onExpenseGet(expenses)   
    }
  return (
    <div>
        <Card className='p2 bg-gray-900 h-auto'>
      <ExpenseForm onExpenseSubmit={bringExpense}/>
      </Card>
    </div>
  )
}

export default NewExpense