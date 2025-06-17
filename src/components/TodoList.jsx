import styles from "./todolist.module.css";

export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <h3 key={item}>{item}</h3>
      ))}
    </div>
  );
}
