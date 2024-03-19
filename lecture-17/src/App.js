// import logo from './logo.svg';
// import './App.css';
// import edp445 from './IMG_4917.jpeg'
// import Greeting from './Greeting'
export default function App() {
  // const name = "Zack";
  let clickCount = 0;
  function onClickFunction() {
    clickCount++;
  }
  return <div>
    {/* <Greeting name= "Zack" />
    This is my first React application! */}
    {/* <img src={edp445} alt="edp445" /> */}
    <button onClick={onClickFunction}>Clicked {clickCount} times</button>
  </div>;
}

// function Greeting(props) {
//   const name = props.name;
//   console.log(props);
//   return <strong>
//     Welcome, {name} from {props.department}!
//   </strong>;
// }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Bink</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <img src={edp445} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
