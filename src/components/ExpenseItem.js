import ExpenseDate from "./ExpenseDate"
import './ExpenseItem.css'
import React, { useState } from 'react'

export default function ExpenseItem(props){

    const [title, setTitle]=useState(props.title);


    const clickHandler = () =>{
        setTitle('updated!')
    }
    return(
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </div>
    )
}