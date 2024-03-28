import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const ToggleBlock = () => {
  // const [isRed, setIsRed] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    // setIsRed(!isRed);
    setIsVisible(!isVisible);
  };
  return (
    <div
      style={{
        // width: '250px',
        // height: '250px',
        // backgroundColor: 'blue',
        // // backgroundColor: isRed ? 'red' : 'blue',
        // cursor: 'pointer',
        // textAlign: 'center',
        fontSize: '30px',
      }}
      onClick={handleClick}
    >
      <button 
      style={
        {
          width: '100px',
          height: '100px',
        }
      }>
      Toggle</button>
      <span
        style={
          {
            visibility: isVisible? 'visible' : 'hidden',
          }
        }>Nice</span>
    </div>
  );
};
export default ToggleBlock;
// export default function App() { 
//   const [name, setName] = React.useState('World');
//   const inputRef = React.useRef();
//   function onChange() {
//     setName(inputRef.current.value);
//   }
//   return (<div>
//   <div>Hello, <strong>{name}</strong>!</div>
//   <input ref={inputRef}
//   type="text"
//   value={name}
//   onChange={onChange} />
//   </div>);
//   }

  

