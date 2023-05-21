import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import Card from "./Card";
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearFilter = (year) => {
    setFilteredYear(year);
  }
  const filteredExpenses = props.expenses.filter(item=>item.date.getFullYear()==filteredYear)
  console.log(filteredExpenses)
  return (<div>
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={yearFilter} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
    </Card>
    </div>
  );
}
//onChangeYear={yearHandler}
