"use client";
import React, { useState } from "react";
import TodoList from "./TodoList";
import FilterBar from "./FilterBar";

function TodoItem() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  let filteredTodos = todos;

  if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  } else if (filter === "incomplete") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }

  function toggleComplete(index) {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleAdd() {
    if (!todo.trim()) return; // prevent empty todos
    setTodos((prev) => [...prev, { text: todo, completed: false }]);
    setTodo("");
  }

  function deletelist(index) {
    setTodos(todos.filter((data, i) => i !== index));
  }

  return (
    <div style={{ borderWidth: 1, borderColor: "black" , padding:50, borderRadius :10, }}>
      <div style={{ flexDirection: "row" }}>
        <h1
          style={{ color: "black", display: "flex", justifyContent: "center" }}
        >
          Simple To Do
        </h1>
        <input
          type="text"
          style={{ borderWidth: 1, borderColor: "black", color: "black" }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          style={{
            color: "black",
            marginLeft: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#D0D0D0FF",
          }}
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <FilterBar setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deletelist={deletelist}
      />
    </div>
  );
}

export default TodoItem;
