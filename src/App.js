import { useReducer } from "react";
import "./App.css";

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { count: state.count + 1 };
    case ACTION_TYPES.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  // Dispatch will call the "action"
  // "state" will be updated
  // reducer function returns the updated state
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTION_TYPES.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTION_TYPES.DECREMENT });
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
