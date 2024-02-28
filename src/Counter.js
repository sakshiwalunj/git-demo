import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <h2>spear parts are added</h2>
      <h1>jcb added</h1>
      
      
      
      <></>
    </div>
  );
}

export default Counter;
