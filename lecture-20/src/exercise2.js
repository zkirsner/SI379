import React, { useState } from 'react';
export default function App() { 
    const [name, setName] = React.useState('World');
    const inputRef = React.useRef();
    function onChange() {
      setName(inputRef.current.value);
    }
    return (<div>
    <div>Hello, <strong>{name}</strong>!</div>
    <input ref={inputRef}
    type="text"
    value={name}
    onChange={onChange} />
    </div>);
    }
  