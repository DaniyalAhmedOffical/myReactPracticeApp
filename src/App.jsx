// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect, createContext, useReducer } from "react";
// import ComponentC from './COMPONENT/ComponentC';
import ComponentA from "./COMPONENT/ComponentA";
import ComponentB from "./COMPONENT/ComponentB";
import ComponentC from "./COMPONENT/ComponentC";
import UseReducer from "./COMPONENT/UseReducer"
import Seducer from "./COMPONENT/Seducer"
import DataFatching from "./COMPONENT/DataFatching";
import Fatching from "./COMPONENT/Fatching";
import FatchRed from "./COMPONENT/FatchRed";
import FaRed from "./COMPONENT/FaRed";
import Routes  from "./COMPONENT/Routes";
export const UserContext = createContext();

function App() {
  // ye counter k liye ha
  // const [count, setCount] = useState(0)
  //  ye name k liya ha
  //   const [name, setName]= useState();
  //   const [fname, setFname ] = useState();

  // use effect jp chalta ha jp hame 
  // compounent update krawna ho
  // useEffect(()=>{
  // console.log("use effect called")
  // document.title = `You clicked ${count} times`;
  // window.addEventListener("mousemove",mouseposition)

  // },[])
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0)
  // const mouseposition = e =>{
  // setX(e.clientX);
  // setY(e.clientY)

  return (
    //   <div>
    //     Name :
    //     <input type="text"  value={name} onChange={(n)=>setName(console.log(n.target.value))}/> <br /> <br />

    //    F Name :
    //     <input type="text" value={fname} onChange={(f)=>setFname(console.log(f.target.value))}/>
    //   </div>

    // count by using hooks function is ka variable upr return k nichy ha

    // <div>
    //   hooks X - {x}  Y- {y}
    //   <h1>
    //     {count}
    //   </h1>
    //  button onClick={()=>setCount(count+1)}>change value +ve</button> <br />
    //   <button onClick={()=>setCount(count-1)}>change value -ve</button>
    // </div>

    <div>    
      {/* <UserContext.Provider value={"DANIYAL"}>
        <ComponentB />
      </UserContext.Provider> */}
      {/* <UseReducer/> */}
      {/* <Seducer/> */}
{/* fatch data by usestate useEFFECT AND useReducer */}
           {/* <DataFatching/> */}
           {/* <Fatching/> */}
           {/* <FatchRed /> */}
           {/* <FaRed /> */}
           <Routes />

    </div>
  );
}

export default App;

// import React, {useState} from "react";
// import x from "./counterContext";

// function App(){

//   return(
// <x.Provider>

//       <div>
//         <h1>
//           This is APP
//         </h1>
//       </div>

// </x.Provider>
//   )

// }

// export default App;
