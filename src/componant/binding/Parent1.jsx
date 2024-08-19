import React from 'react'
import Child from './Child'

const Parent1 = () => {
    //  const student={firstname:"Aishwarya",middlename:"Tushar",lastname:"Aher"}
      // const color=["red","yellow","green","blue"];
      const emp=[{id:1,name:"raj",salary:"2000",compname:"webskitters"},
      {id:2,name:"Anshu",salary:"2000",compname:"TCS"},
      {id:3,name:"Aishwarya",salary:"2000",compname:"wipro"}
      ]
    
  return (
    <div>
        <h2>Parent1</h2>
        <Child
        array={emp}/>
    </div>
  )
}

export default Parent1