import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log("useEffect is invoked.")
  })

  useEffect(() => {
    console.log("This is like componentDidMount")
  }, [])

  useEffect(() => {
    console.log("This calls back names only.")
  }, [name])

  return (
    <>
      <p>now {name} is {price}.</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: "sample",
  price: 1000
}

export default App;
