import './App.css';
import { useState } from 'react';

function App() {
  // destructuring the Array returned by useState
  const [count, setCount] = useState(0);

  // function to increment
  const increment = () => {
    // updates state.
    setCount(count => count + 1);
  }

  // function to decrement
  const decrement = () => {
    if (count > 0)
      setCount(count => count - 1);
  }
  // function to reset
  const reset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header'>Counter App</h1>
        <h1 className='count'>{count}</h1>
        <div id='button-group'>
          <button aria-label="Increment counter" onClick={increment}>Increment</button>
          <button aria-label="Decrement counter" onClick={decrement}>Decrement</button>
          <button aria-label="Reset counter" onClick={reset}>Reset</button>
        </div>
      </header >
    </div >
  );
}

export default App;
