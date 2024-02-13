import './App.css';
import {useReducer} from 'react';
const initialState={count:0}
function reducer(state,action){
      switch(action.type){
        case 'increment':
          return {count:state.count+1}
          case 'decrement':
            return {count:state.count-1}
            case 'reset':
              return {count:0}
            default:
              throw new Error();
      }
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div className='main'>
      <h1>Counter</h1>
      <p style={{color:state.count>0?'green':state.count<0?'red':'black'}}>{state.count}</p>
      <div>
        <button className='add' onClick={()=>dispatch({type:'increment'})}>+</button>
        <button className='reset' onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <button className='sub' onClick={()=>dispatch({type:'decrement'})}>-</button>
      </div>
    </div>
  );
}

export default App;
