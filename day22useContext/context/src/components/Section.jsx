import React from 'react'
import UserComp from './UserComp'

const Section = ({name}) => {
  return (
    <div>
      <h1>Child section Components</h1>
      <UserComp name={name}/>
    </div>
  )
}

export default Section