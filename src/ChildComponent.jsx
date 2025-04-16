
import React from "react";

 export const  ChildComponent=({ValueChnagemethod})=>{
 
    const clickedf=()=>{
        ValueChnagemethod("Value from Child")
    }
    return(
        <>
        
       <button onClick={clickedf}>ClickMe!!</button>
       </>
    )

}
   export default ChildComponent;
  
  
