import { useState } from "react";
import TodoContent from "./TodoContent";
import TodoForm from "./TodoForm";

function TodoItem(props) {
  const [isEditing, setisEditing] = useState(false);
  return (
    <li
      className={`list-group-item p-3 callout-${
        props.todo.completed ? "success" : "warning"
      }`}
    >
      {isEditing ? (
        <TodoForm />
      ) : (
        <TodoContent
          todo={props.todo}
          fetchTodos={props.fetchTodos}
          openEdit={() => setisEditing(true)}
        />
      )}
    </li>
  );
}

export default TodoItem;
