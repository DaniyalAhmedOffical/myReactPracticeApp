import React from 'react';
import {UserContext} from "../App"


function ComponentC() {
  return <div>
           <UserContext.Consumer>
               {
                   (user)=>{
                       return (
                       <div>
                           my name is {user}

                       </div>
                       )
                   }
               }
           </UserContext.Consumer>
      
    </div>;
}

export default ComponentC

