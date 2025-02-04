// Array and Object Intro
// Available methods

let array = [false, 1, "string", "12", { name: "batman" }]; // array is a store where you store multiple data type or values

// let object = { userName: "batman" };// object is a  key value pair 

//array method
//map
//filter
// forEach
// reduce
// sort()


// const store =array.map((item)=>{// 1 step create new array 2nd step new array update  3rd step  return new array 
//   return item+"map FUnction"
// })

// console.log(store)

// let num = [1,2,3,4,5,6]
// // let mapStore = num.map((element)=><h1>{element}</h1>)
// console.log(mapStore)


let objects ={
  name:"prabh",
  age:25,
  city:"chennai",
  address:{
    street:"123 main street",
    city:"chennai",
    state:"TN"
  }

}

const objectStore =Object.keys(objects)
console.log(objectStore)
const valuesData = Object.values(objects)
console.log(valuesData)
