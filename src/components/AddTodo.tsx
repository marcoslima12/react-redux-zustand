import { FormEvent, useState } from "react";

export function AddTodo() {
  const [todo, setTodo] = useState<string>("");

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault();
    console.log(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Escreva seu todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Adicionar tarefa</button>
    </form>
  );
}
