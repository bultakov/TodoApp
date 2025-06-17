import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Yozish..."
        />
        <button className={styles.modernButton} type="submit">
          Qo'shish
        </button>
      </div>
    </form>
  );
}
