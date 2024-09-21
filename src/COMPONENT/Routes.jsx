import React from "react";
import Home from '../COMPONENT/Home'
import About from '../COMPONENT/About'
import {
  BrowserRouter ,
  Routes, Route
} from "react-router-dom";
// import About from "../COMPONENT/About";

function RConfig(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Home/>}>

                    </Route>

                    <Route path='/about' element={<About/>}>

</Route>
                </Routes>         
        </BrowserRouter>
    )
}


export default RConfig;