import React ,{useState}from 'react'

const NewComp = () => {
    let [num,setArr]= useState([10,-20,30,-40.50])
    let changeNum=()=>{
        let newArr=num.map((x)=>x<0 ? 0 : x)
        setArr(newArr)
    }

  return (
    <div>
        {
            num.map((num,index)=>(
                <p key={index}>{num}</p>
            ))
        }
        <button onClick={changeNum} >Positive Numbers</button>
    </div>
  )
}

export default NewComp