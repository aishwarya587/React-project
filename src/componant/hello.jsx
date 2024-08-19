import React, { createElement } from 'react'

const Hello = () => {
  return createElement('div',{id:"hello",class:"msg"},
         createElement('div',null,
         createElement('p',null,"Hello World")))
  // return (
    
  //   <div>my react program</div>
  // )
}

export default Hello