import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <span
        className="todo-list-text"
        style={{ color: todo.complete ? "gray" : "black" }}
      >
        {todo.name}
      </span>
      <button>Toggle</button>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
