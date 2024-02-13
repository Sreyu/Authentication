// import logo from './logo.svg';
// import './App.css';
// import './reset.js';
// import './countSub.js';
// import countAdd from './countAdd.js'
import './App.css';

import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);
  // const [mystyle,setMyStyle]=useState({});
  const countAdd =()=>
  {
    setCount(count+1)
  }
  const reset =()=>
  {
    setCount(0)
  }
  const countSub =()=>
  {
    setCount(count-1)
  }
  return (
   <div className="main">
        <h1 className="count">Counter</h1>
        <p className="number" id="value" style={{color:count>0?'green':count<0?'red':'black'}} >{count}</p>
        <div className='center'>
          <button className="add" onClick={countAdd}>+</button>
          <button className="reset" onClick={reset}>Reset</button>
          <button className="sub" onClick={countSub}>-</button>
        </div>
   </div>
  );
}

export default App;
