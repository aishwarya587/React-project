import React from 'react'

const Child = (props) => {
    console.log("props value in child:",props);
    let{array}=props
  return (
    <div>
        {/* <p>welcome to {array[0]}</p> */}
        {
            array.map(emp =>(
                <div key={emp.id}>
                    <p>Name of the Employee{emp.name}</p>
                    <p>Salary of Employee{emp.salary}</p>
                    <p>Company name of Employee{emp.compname}</p>
                </div>

            ))
        }
    </div>
 )
}

export default Child