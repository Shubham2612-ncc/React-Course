import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "../components/todo.module.css";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  
const onDelete = (id) => {
let newTodo = todos.filter(todo => todo.id !== id)
setTodos(newTodo)
}
  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setTodos([...todos, { id: Date.now(), value: value }]);
          setValue("");
        }}
      >
        Add
      </button>
      <div className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};

export default Todo;
