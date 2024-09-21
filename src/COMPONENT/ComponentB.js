import React from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "../App";
import { useContext } from "react/cjs/react.development";

function ComponentB() {
  const newName = useContext(UserContext);
  return (
    <div>
      <h1>this is new name {newName}</h1>
    </div>
  );
}

export default ComponentB;
