import React from "react";


function TodoList({ todos, deletelist, toggleComplete }) {
  return (
    <div style={{ marginTop: 50 }}>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 10,
              justifyContent: "space-between",
              color: "black",
              borderBottom: "1px solid #cccccc",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              style={{
                backgroundColor: "#D1CBCBFF",
                padding: 10,
                borderRadius: 5,
              }}
              onClick={() => deletelist(index)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
