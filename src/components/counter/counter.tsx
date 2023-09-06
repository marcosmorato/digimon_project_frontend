// Counter.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store"; // Importe o tipo RootState
import { increment, decrement } from "../../store/counter/actions"; // Importe as ações

const Counter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>Count</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
