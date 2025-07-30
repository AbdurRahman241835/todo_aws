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
              onChange={() => toggleComplete(todo._id, todo.completed)}
            />
            <span
              className={`${todo.completed ? "line-through" : ""} flex-1 mr-4`}
            >
              {todo.title}
            </span>
            <button
              style={{
                backgroundColor: "#D1CBCBFF",
                padding: 10,
                borderRadius: 5,
              }}
              onClick={() => deletelist(todo._id)}
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
