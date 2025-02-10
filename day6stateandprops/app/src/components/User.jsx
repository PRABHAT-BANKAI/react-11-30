import React from 'react'

const User = ({data}) => {
  console.log('Userprops',)
// let array = [1,2,3]
// let [b,a,c]= array
// console.log(a,b,c)

  return (
    <>
    <h1>Name:{data.name}</h1>
    <h2>Age:{data.age}</h2>
    <h3>Gender:{data.gender}</h3>
    <h3>Address:{data.address}</h3>
  </>
  )
}

export default User
