import React, {useState} from 'react'

const DayState = () => {
    let [days,setDays]=useState(["Monday","Tuesday","Wedneaday","Thursday","Friday","Saturday","Sunday"])
    let [count,setCount]=useState(0)
    let handleChange=()=>{
        console.log(count);
        // setCount(count+1)
        // count<days.length-1?setCount(count+1):setCount(0)
        if(count<6)
            setCount(count+1)
        else
           setCount(0)
    }
  return (
    <div>
        <h1>{days[count]}</h1>
        <button onClick={handleChange}> Change Day</button>
      
    </div>
  )
}

export default DayState
