import React,{useState} from 'react'

const SateComp = () => {
    let [greet,setGreet]=useState("hello good morning")
    let [numArr,setArr] =useState([-10,20,-30,40,50])
    let [arrObj,setObj] =useState([{id:1,name:"raj",salary:"2000",compname:"webskitters"},
    {id:2,name:"Anshu",salary:"2000",compname:"TCS"},
    {id:3,name:"Aishwarya",salary:"2000",compname:"wipro"}])
    let changeGreet=()=>{
        setGreet("good Afternoon");

    }
    let changearrObj=()=>{
      setObj([
        {id:1,name:"tanu",salary:"12000",compname:"webtech"},
      {id:2,name:"rani",salary:"20000",compname:"forecolors"},
      {id:3,name:"utkarsha",salary:"22000",compname:"krios"}
    ])
    }
  return (
    <div>
        <h1>{greet}</h1>
        <button onClick={changeGreet}>change greeting</button>
        {
            numArr.map((num,index)=>(
                <p key={index}>{num}
                </p>
            ))
         }
         {
          arrObj.map((arrObj,index)=>(
            <div key={index}>

              <p>id of employee ={arrObj.id}</p>
              <p>name of employee ={arrObj.name}</p>
              <p>salary of employee ={arrObj.salary}</p>
              <p>company of employee ={arrObj.compname}</p>
            </div>
          )
          )
         }
         <button onClick={changearrObj}>employee details</button>
         
         
        
    </div>
  )
}

export default SateComp