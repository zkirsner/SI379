import logo from './logo.svg';
import './App.css';
import React from'react';

function App() {
  const inputRef = React.useRef();
  const [toDos, setNames] = React.useState(["Buy Milk, Buy Eggs"]); // Changed to React.useState
  const onAdd = function() {
    const inputElement = inputRef.current;
    setNames(toDos.concat(inputElement.value));
    console.log(inputElement.value);
    inputElement.value = "";
  }
  return (
  <div>
    <ul>
    {toDos.map(name => <li key={toDos}>{toDos}</li>)}
    </ul>
    <input type="text" ref={inputRef}></input>
    <button onClick={onAdd}>Add</button>
  </div>
  );
}

export default App;
