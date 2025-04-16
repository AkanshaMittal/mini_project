
import React, { useState } from "react";
import {ChildComponent} from './ChildComponent';
 export const ParentComponent=()=>{

   
  const[value,setValue]= useState ("Value from Parent");
   const ValueChnagemethod=()=>{
    setValue(" Value from Child");
}
  
  return(
    <>
    <div>{value}</div>
   <ChildComponent value={value} ValueChnagemethod={ValueChnagemethod} />
   </>
  )
}

export default ParentComponent;