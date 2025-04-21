import './App.css';
import React from 'react';
import {useState} from 'react';
function App() {
    let [counter, setCounter] = useState(0);
      
      const increment = () => {
        setCounter(counter + 1);
      }

      const decrement = () =>{
        setCounter(counter - 1);
        if (counter <= -1) {
          alert("Limit Exceeded")
          setCounter(0);
        }
      }
   
  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <div className="button">
          <button onClick={increment}>Increase Here</button>
          <button onClick={decrement}>Decrease Here</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
