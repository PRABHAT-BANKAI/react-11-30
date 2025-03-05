import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

  const {num} = useParams()
  console.log(num)
  return (
    <div>
      <h1>About</h1>
      <h2>{num}</h2>
    </div>
  )
}

export default About