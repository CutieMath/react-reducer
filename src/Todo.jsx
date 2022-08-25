import React from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span
        className="todo-list-text"
        style={{ color: todo.completed ? "gray" : "black" }}
      >
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { todoId: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { todoId: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
