import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <p>{props.value}</p>
      <button id="b1" onClick={props.increment}>
        +
      </button>
      <button id="b2" onClick={props.decrement}>
        -
      </button>
      <button id="b3" onClick={props.incrementByAsync}>
        Increment by async
      </button>
      <button id="b4" onClick={props.incrementIfOdd}>
        Increment if odd
      </button>
    </div>
  );
};
export default Counter;
