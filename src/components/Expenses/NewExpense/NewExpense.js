
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpanseDataHandler= (enteredExpanseData) => {
    const expanseData={
      ...enteredExpanseData,
      id: Math.random().toString()
    };
    props.onAddExpanse(expanseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSafeExpanseData={saveExpanseDataHandler} />
    </div>
  );
};

export default NewExpense;
