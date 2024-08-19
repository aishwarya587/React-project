// import React,{useState} from 'react'

// const ToggleState = () => {
//     const [cond,setToggle]= useState(0);
//     const toggle=["React","Node"];

//     const[data,setCol]=useState("aqua");
//     const currentsituation=toggle[cond];
//     function changeToggle()
//     {
//         let x=setToggle((cond)=>(cond+1)% toggle.length);
//         function setCol()
//         {
//             if((x)===0)
//                 return "aqua";
//             else
//                 return "magenta";
//         }
//         return[setCol,x]
//     }
//   return (
//     <div id="parent">
//         <button onClick={changeToggle}>change toggle</button>
//         <div>
//             <p style={{backgroundColor:`${ cond == 1 ? "aqua": "magenta"}`}}>{`Language:${currentsituation}`}</p>
//         </div>
//     </div>
//   )
// }

// export default ToggleState
import React,{useState} from 'react';

const ToggleState = () => {
    const[wordIndex,setWordIndex]=useState(0);
    const words=["React","Node"];
    const colors=["red","blue"];
    // const ToggleState=()=>{
    //     setWordIndex((prevIndex)=>(prevIndex+1)% words.length);
    // };


    const ToggleState=()=>{
        if (wordIndex === words.length-1){
            setWordIndex(0);
        }else{
            setWordIndex(wordIndex + 1);
        }
    };

  return (
    <div>
      <button onClick={ToggleState}Toggle>Toggle State</button>
      <p>
        <span style={{backgroundColor:colors[wordIndex]}}>{words[wordIndex]}</span>
      </p>

    </div>
    
  )
}

export default ToggleState
