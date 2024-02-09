import { UseAppSelector } from "../store";

export function TodoList() {
  const todo = UseAppSelector((store) => {
    return store.todo;
  });
  console.log(todo);

  return (
    <ul>
      {todo.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
