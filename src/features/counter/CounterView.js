import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button
        onClick={() => {
          dispatch(increaseByAmount(5));
        }}
      >
        IncreaseBy5
      </button>
    </div>
  );
};

export default CounterView;
