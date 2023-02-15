import { useTodo } from "../hooks/useTodo";
import { TodoAdd, TodoList } from "./index";

// const initialState = [];

// const init = () => {
//   return JSON.parse(localStorage.getItem("todos") || []);
// };

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPendingCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        Todo App ({todosCount}) <small>Pendientes: ({todosPendingCount})</small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
      <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
