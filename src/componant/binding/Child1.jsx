import React from 'react'

const Child1 = (props) => {
    console.log("props value in child",props);
    let{st}=props
  return (
    <div>
        
        {<p>"My Name is:" {st.firstname} {st.middlename} {st.lastname}</p> }
        
    </div>
  )
}

export default Child1