import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.name !== item));
  }
  function handleClick(item) {
    setTodos(
      todos.map((todo) =>
        todo.name === item ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item.name)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
    </div>
  );
}
