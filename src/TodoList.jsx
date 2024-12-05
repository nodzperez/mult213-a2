import React, { useState } from "react";

export default function TodoList({ todos }) {
  const [todoItems, setTodoItems] = useState(todos);

  const toggleCompletion = (id) => {
    setTodoItems((prevItems) =>
      prevItems.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeCompleted = () => {
    setTodoItems((prevItems) => prevItems.filter((todo) => !todo.completed));
  };

  return (
    <div className="todo-list">
      <ul className="list">
        {todoItems.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
      {todoItems.length > 0 && (
        <button onClick={removeCompleted}>Remove Completed</button>
      )}
    </div>
  );
}
