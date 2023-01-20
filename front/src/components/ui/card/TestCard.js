import React from 'react'

function TestCard(props) {
   return (
      <div>
         <text>{props.name}</text>
         <text>{props.description}</text>
         <img src={props.image} alt="" />
      </div>
   )
}

export default TestCard
