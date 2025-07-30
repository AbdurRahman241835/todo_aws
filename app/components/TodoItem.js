"use client";
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import FilterBar from "./FilterBar";

function TodoItem() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  useEffect(() => {
    fetchTodos();
  }, []);

  let filteredTodos = todos;

  if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  } else if (filter === "incomplete") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  }
  

  async function fetchTodos() {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/getTaskList`    
    const res = await fetch(url);
    const data = await res.json();
    setTodos(data.data);
  }

  async function toggleComplete(id, status) {
    console.log({ id, status });

    // setTodos((prev) =>
    //   prev.map((todo, i) =>
    //     i === index ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );

    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/updateTask`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, completed: !status }),
    });
    console.log({ res });
    fetchTodos();
  }

  async function handleAdd() {
    if (!todo.trim()) return;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/setTask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo }),
    });

    const data = await res.json();
    setTodo("");
    fetchTodos();
  }

  async function deletelist(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/deleteTask`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    console.log("res of delete", res);
    fetchTodos();
  }

  return (
    <div
      style={{
        borderWidth: 1,
        borderColor: "black",
        padding: 50,
        borderRadius: 10,
      }}
    >
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
