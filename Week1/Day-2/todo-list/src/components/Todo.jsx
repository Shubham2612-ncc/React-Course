import React, { useState } from "react";

const Todo = () => {
  let [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={newTodo} onChange={(e) => setTodo(e.target.value)} />

      <button
        onClick={() => {
          setTodos([
            ...todos,
            { id: Date.now(), value: newTodo, isCompleted: false },
          ]);
          setTodo("")
        }}
      >
        Add
      </button>
      {/* Todos */}
      {todos.map((todo) => (
        <div>{todo.value}</div>
      ))}
    </div>
  );
};

export default Todo;
