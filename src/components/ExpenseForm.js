import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // })
    setUserInput((prevState) => {
      return { ...prevState, date: new Date(event.target.value) };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    // userInput = {
    //     title: userInput.title,
    //     amount: userInput.amount,
    //     date: new Date(userInput.date)
    // }
    props.onFormSubmit(userInput);
    setUserInput((prevState) => {
      return { ...prevState, title: "" };
    });
    setUserInput((prevState) => {
      return { ...prevState, amount: "" };
    });
    setUserInput((prevState) => {
      return { ...prevState, date: "" };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-05-11"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
