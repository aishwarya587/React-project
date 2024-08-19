import React, { createElement } from 'react'

const About = () => {
  return createElement('div',{className:'aboutdiv'},
            createElement('h1',null,"about page"))
  // return (
  //   <div>
  //       <h1>hello</h1>
  //   </div>
  // )
}

export default About