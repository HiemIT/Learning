import React, { useState } from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    // toggle state

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    console.log(newTodoList[idx]);
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    console.log("All");
    setFilteredStatus('all')
  };

  const handleShowCompleted = () => {
    console.log("Completed");
    setFilteredStatus('completed')
  };

  const handleShowNew = () => {
    console.log("new");
    setFilteredStatus('new')
  };

  const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
  console.log(renderedTodoList);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
