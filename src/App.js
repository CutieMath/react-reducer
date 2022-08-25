import { useState, useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  return { count: state.count + 1 };
};

const App = () => {
  // Dispatch will call the "action"
  // "state" will be updated
  // reducer function returns the updated state
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    dispatch();
  }

  function decrement() {
    // setCount(count - 1);
  }
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
