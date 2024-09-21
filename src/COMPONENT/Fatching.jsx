import axios from "axios";
import React, { useEffect, useState } from "react";

function Fatching() {
  const [load, setLoad] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicodE.com/posts/1")
      .then((response) => {
        setLoad(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoad(false);
        setPost({});
        setError("thi is error");
      });
  });

  return (
    <div>
      {load ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default Fatching;
