import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  load: true,
  post: [],
  error: "",
};

const red = (state, action) => {
  switch (action.type) {
    case "f_success":
      return {
        load: false,
        post: action.payload,
        error: "",
      };
    case "f_error":
      return {
        load: false,
        post: {},
        error: "error",
      };

    default:
      return state;
  }
};

function FaRed() {
  const [state, dispatch] = useReducer(red, initialState);
  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        dispatch({
          type: "f_success",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "f_error",
        });
      });
  }, []);

  return (
    <div>
      {state.load ? "load" : state.post.title}
      {state.error ? state.error : null};
    </div>
  );
}

export default FaRed;
