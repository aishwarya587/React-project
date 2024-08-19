import React from 'react'
import Child from './Child'

const Parent = () => {
    const greeting="hello from parent";
    const name="Aishwarya";
    
  return (
    <div>
        <h2>Parent</h2>
        <Child
        msg={greeting}
        user={name}/>
    </div>
  )
  
}
export default Parent;