import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/action/counterAction";

function Counter() {
  const CountCounter = useSelector(state => state.counter1);

  const { count } = CountCounter;

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter;