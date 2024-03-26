// import logo from './logo.svg';
// import './App.css';
import React from 'react';

function App() {
  const inputRef = React.useRef();
  const [names, setNames] = React.useState(["Steve"]); // Changed to React.useState
  const onAdd = function() {
    const inputElement = inputRef.current;
    setNames(names.concat(inputElement.value));
    inputElement.value = "";
  }
  return (
    <div>
      List of names:
      <ul>
        {names.map(name => <li key={name}>{name}</li>)}
      </ul>
      <input type="text" ref={inputRef}></input>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default App; // Removed unnecessary parentheses
