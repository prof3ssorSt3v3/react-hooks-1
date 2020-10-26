// npx create-react-app hooks1
//the App.js file from version 17 of React
//images and default content removed
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //let hungry = false;
  const [hungry, setHungry] = useState(false);
  const [num, setNum] = useState(1);
  let changeNum = () => {
    setNum((n) => n + 1);
  };
  let handleClick = () => {
    //hungry = !hungry;
    setHungry(!hungry);
  };

  useEffect(() => {
    //runs when num is changed
    console.log(num);
  }, [num]);
  useEffect(() => {
    document.title = Math.random().toString(16);
  }, [hungry, num]);

  return (
    <div className="App">
      <h1 onClick={handleClick}>Hungry `Function`</h1>
      <p onClick={changeNum}>
        Learn React when you are {hungry ? 'REALLY' : 'NOT'} hungry.
      </p>
    </div>
  );
}

export default App;
