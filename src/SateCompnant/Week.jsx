import React, { useState } from "react";

const Week = () => {
  const [week, setWeek] = useState("Monday");

  function handleChange() {
    if (week === "Monday") {
      setWeek("Tuesday");
    } else if (week === "Tuesday") {
      setWeek("wednesday");
    } else if (week === "wednesday") {
      setWeek("Thrusday");
    }
    else if (week === "Thrusday") {
        setWeek("Friday");
      }
      else if (week === "Friday") {
        setWeek("Saturday");
      }
      else if (week === "Saturday") {
        setWeek("Sunday");
      }
      else{
         setWeek("Monday")
      }
    
  }

  return (
    <div>
      <h1>{week}</h1>
      <button onClick={handleChange}>click me</button>
    </div>
  );
};

export default Week;