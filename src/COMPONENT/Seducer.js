import React, { useReducer } from "react";
const initialState = { count: 0 };
const counts = 0;

function reducer(state, action) {
  if (action.type === "increment") {
    console.log(counts + 1);
    // document.write (state.count+1)
  } else if (action.type === "increment") {
    document.write(state.count - 1);
  } else if (action.type === "increment") {
    document.write("0");
  } else {
    document.write("Error");
  }
}

function Seducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Seducer;
