import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFatching() {
  const [loading, setLoad] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
        setLoad(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoad(false);
        setPost({});
        setError("error aarha ha");
      });
  });

  return (
    <div>
      {loading ? "daniyal" : post.title}
      {error ? error : null}
    </div>
  );
}
export default DataFatching;
