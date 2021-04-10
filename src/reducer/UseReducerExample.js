import { Slider } from "antd";
import React, { useReducer } from "react";

// Actions
const increment = () => ({
  type: 'INC'
})

const decrement = () => ({
  type: 'DEC'
})

const reset = () => ({
  type: 'RESET'
})

const step = (step) => ({
  type: 'STEP',
  payload: step
})

// Reducer
function reducer(state, action) {
  if (action.type === "INC") {
    return {
      ...state,
      count: state.count + state.step,
    };
  } else if (action.type === "DEC") {
    return {
      ...state,
      count: state.count - state.step,
    };
  } else if (action.type === "RESET") {
    return {
      ...state,
      count: 0,
    };
  } else if (action.type === "STEP") {
    return {
      ...state,
      step: action.payload,
    };
  } else {
    throw new Error();
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  return (
    <>
      <div>
        <h1>{state.step}</h1>
        <Slider
          min={1}
          max={10}
          onChange={(value) => dispatch(step(value))}
        />
      </div>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement() )}>-</button>
        <button onClick={() => dispatch(reset() )}>reset</button>
        <h1>{state.count}</h1>
      </div>

      <div style={{ padding: "20px" }}>
        Whenever one piece of state depends on the value of another piece of
        state, use useReducer
      </div>
    </>
  );
}

export default UseReducerExample;
