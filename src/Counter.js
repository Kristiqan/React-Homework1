import { React, useState, useEffect } from 'react'
import './App.css';

function Counter() {
  const [state, Counter] = useState(0);

  useEffect(() => {
  console.log('Counter changed its value')
  }, [state])


  const increment = () => {
    if (state < 10) {
      Counter(count => count + 1);
    }
  };

  const decrement = () => {
    if (state > 0) {
      Counter(count => count - 1);
    }
  };

  const reset = () => {
    Counter(0)
  }

  

  return (
    <> 
    <span>{state}</span>
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
    <button  onClick={reset}>Reset</button>
 </>
  );
}

export default Counter;
