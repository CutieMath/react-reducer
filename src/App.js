import { useReducer, useState } from "react";
import "./App.css";

const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    default:
      return todos;
  }
};

function newTodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION_TYPES.ADD_TODO, payload: { name: name } });
    setName("");
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
};

export default App;
