import React, { useState } from 'react';
import './counter.css';

function CounterComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <button className="action-button" type="button" onClick={() => setCount(count - 1)}> - </button>
      <p>
        [
        {count}
        ]
      </p>
      <button className="action-button" type="button" onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}
export default CounterComponent;
