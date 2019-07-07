import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  console.log({count})
  console.log({setCount})

  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count- 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)
  const by = () => setCount(count * 2)
  const san = () => setCount(count => {
      return count % 3 == 0 ? count / 3 : count
  })

  return (
    <>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={by}>x2</button>
        <button onClick={san}>/3if3</button>
      </div>
    </>
  );
}

export default App;
