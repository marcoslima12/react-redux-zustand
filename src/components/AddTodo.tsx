import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../store";

export function AddTodo() {
  const [todo, setTodo] = useState<string>("");
  const [removeTodo, setRemoveTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault();
    //console.log(todo);
    dispatch(add(todo));
    setTodo("");
  };
  const handleDeleteTodo = (e: FormEvent) => {
    e.preventDefault();
    console.log(removeTodo);
    dispatch(remove(removeTodo));
    setRemoveTodo("");
  };

  return (
    <>
      <form onSubmit={handleNewTodo}>
        <input
          type="text"
          placeholder="Escreva seu todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Adicionar tarefa</button>
      </form>
      <form onSubmit={handleDeleteTodo}>
        <input
          type="text"
          placeholder="Remova seu todo"
          value={removeTodo}
          onChange={(e) => setRemoveTodo(e.target.value)}
        />
        <button type="submit">Remover tarefa</button>
      </form>
    </>
  );
}
