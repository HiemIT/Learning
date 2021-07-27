import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

function CounterFeature(props) {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  const handleClickInitialState = () => {
    const action = increase();
    console.log(action);

    dispatch(action);
  };
  const handleClickDecrease = () => {
    const action = decrease();
    console.log(action);

    dispatch(action);
  };
  return (
    <>
      <div>Counter {count}</div>

      <button onClick={handleClickInitialState}>InitialState</button>
      <button
        // disabled={() => {
        //   if (count === 0) {
        //     return true;
        //   }
        // }}

        onClick={handleClickDecrease}
      >
        Decrease
      </button>
    </>
  );
}

CounterFeature.propTypes = {};

export default CounterFeature;
