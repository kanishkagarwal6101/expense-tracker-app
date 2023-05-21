import React,{useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const formSaveHandler = (enteredFormData) =>{
        const userInput = {
            ...enteredFormData,
            id: Math.random().toString()
        }
        console.log(userInput)
        props.onAddExpense(userInput)
    }
    const [isEditing,setIsEditing] = useState(false)
    const startIsEditing = () =>{
        setIsEditing(true)
    }
    const stopIsEditing = () => {
        setIsEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startIsEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm stopEditing = {stopIsEditing} aonFormSubmit={formSaveHandler}/>}
        </div>
    )
}

export default NewExpense;