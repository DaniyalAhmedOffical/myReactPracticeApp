import React,{useReducer} from 'react';
const initialState = {count : 0}
function reducer (state, action){
    switch (action.type) {
        case 'increament':
            return {count:  state.count+1}

            case 'decreament':
            return {count:  state.count-1}
        
            case 'reset':
                return {count:  0}
        
    
        default:
       throw new Error()    }
    
}


 function UseReducer() {
    const[state,dispatch] = useReducer(reducer, initialState)
  return (
  <div>
      Count : {state.count}
      <button onClick={()=> dispatch({type: 'increament'})} >Increment</button>
      <button onClick={()=> dispatch({type: 'decreament'})} >Decrement</button>
      <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>


  </div>
  );

}
export default UseReducer