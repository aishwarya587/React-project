import React from 'react'

const StateChild = (props) => {
    console.log("props value",props);
    let{sname,sclass}=props.children;
  return (
    <div>
        <h2>{sname} reads in class {sclass}</h2>
        <button onClick={props.func}>read me</button>

    </div>
  )
}

export default StateChild