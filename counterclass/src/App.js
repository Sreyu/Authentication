
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Counter extends React.Component {
  constructor(){
   super();
   this.state={
    count:0
   };
  }
  handleIncrement =()=>{
    this.setState({count:this.state.count+1})
  }
  handleDecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count:0})
  }
  render(){
  return (
   <div className='main'>
        <h1>Counter</h1>
        <p style={{color:this.state.count>0?'green':this.state.count<0?'red':'black'}}>{this.state.count}</p>
        <div>
          <button className='add' onClick={this.handleIncrement} >+</button>
          <button className='reset' onClick={this.handleReset}>Reset</button>
          <button className='sub' onClick={this.handleDecrement}>-</button>
        </div>
   </div>
  );
  }
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Counter/>)

export default Counter;
