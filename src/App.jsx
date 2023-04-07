import { useState, useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "initCount":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  count: 0,
  otherValue: "extra pair",
};

function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <>
      <div className="App">
        <h1>React hook useReducer example.</h1>

        <div>
          <label>Start Count : </label>
          <input
            type="number"
            onChange={(e) => setInput((oldvalue) => parseInt(e.target.value))}
            value={input}
          />
          <br />
          <button
            onClick={() => {
              dispatch({ type: "initCount", payload: input });
              setInput((oldvalue) => 0);
            }}
          >
            Initialize Counter
          </button>
        </div>

        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
