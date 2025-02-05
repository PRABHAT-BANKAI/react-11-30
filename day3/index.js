let arr = [1, 2, 3];

console.log(arr);

let arr2 = [4, 5, 6];

let arr3 = [...arr2, ...arr]; //merging

console.log(arr3);
// spread operator

//destructuring

let data = [
  "batman",
  25,
  "gotham city",
  "1billion",
  function () {
    console.log("bruce wayne");
  },
];

// let [name, age, city, salary, print] = data;

// console.log(`Name: ${name}`);

// console.log(`Age: ${age}`);

// console.log(`City: ${city}`);

// console.log(`Salary: ${salary}`);
// print()

let object = {
  name: "Bruce",
  age: 40,
  city: "Gotham",

  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`City: ${this.city}`);
  },
};

let { city } = object;

console.log(`City: ${city}`);

let dataOFArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let store = dataOFArr.map((element, index) => {
  // 1st step create new array  2nd updated with new array 3rd step return new array
  return element + ` index  ${index}`;
});

console.log(store);

let num = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

let even = num.filter((element) => {
  return element % 2 !== 0;
});

console.log(even);

let sum = num.reduce((acc, element) => {
  acc += element
  return acc
}, 0);

console.log(sum);
