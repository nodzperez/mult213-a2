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
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
      {todoItems.length > 0 && (
        <button onClick={removeCompleted} style={{ marginTop: "16px" }}>
          Remove Completed
        </button>
      )}
    </div>
  );
}
