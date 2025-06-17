import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todo;
