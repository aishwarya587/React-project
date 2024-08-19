import {useState} from 'react'
import StateChild from './StateChild';

const StateParent = () => {
    let [student,setName] =useState({
        sid:1,
        sname:"ram",
        sclass:"VII",
    });
    let handleChange=()=>{
        // console.log("function");
        setName({...student,sname:"harry potter"});
         };
  return (
    <div>
        <StateChild func={handleChange}>{student}</StateChild>
    </div>
  );
};

export default StateParent