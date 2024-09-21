import React, { useEffect, useReducer } from 'react';
import axios from 'axios'; 
const initialState = {
  loading: true,
  post : [],
  error : "",
}

const red = (state, action) => {
  switch (action.type) {
    case "f_done":
      
      return{
        loading: false,
        post: action.payload,
        error: "",
      };
      case "f_error":
      
      return{
        loading: false,
        post: {},
        error: "error aagaya",
      };
  
    default:
      return state;
      
  }
}
function FatchRed() {
  const[state, dispatch] = useReducer(red, initialState);
  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>{
      dispatch({
        type : "f_done",
        payload : response.data,
      })
    })
    .catch((error)=>{
      dispatch({
        type : "f_error"
      })
    })
  },[]);
  return (
  <div>
    {state.loading ? "load": state.post.title}
    {state.error ? state.error: null}

  </div>
  );
}


export default FatchRed;