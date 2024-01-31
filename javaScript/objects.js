//PROBLEM 1
// Write a function that takes any number of arguments using the rest operator and returns their sum
/*
    function sum(...res) {
    result = res.reduce((num, acc) => num + acc, 0);
    return result;
    }

    console.log(sum(arr(1, 2, 3, 4, 5, 6)));
    console.log(sum(arr1(1, 2, 3, 4, 5, 6, 7)));
*/
//___________________________________________________________________________

//PROBLEM 2
// Given two arrays, use the spread operator to concatenate them into a single array.
/*
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const concatenatedArray = [...arr, ...arr2];

console.log(concatenatedArray);
*/
//____________________________________________________________________________

//PROBLEM 3

//Create an object with properties name, age, and country. Use destructuring to extract these properties into separate variables.
/*
const person = {
  name: "khadija",
  age: "19",
  country: "pakistan",
};

const { name } = person;
const { age } = person;
const { country } = person;

console.log(name, age, country);

*/

//_________________________________________________________________________________

//PROBLEM 4
//Write a function that accepts an arbitrary number of arguments and returns an array containing only the even numbers.
/*
function evenNumber(...arr) {
  return arr.filter((num) => num % 2 == 0);
}

const resut = evenNumber(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(resut);

//2nd method

function evenNumbers(...arr) {
  const evenNumber = [];
  for (const num of arr) {
    if (num % 2 == 0) {
      evenNumber.push(num);
    }
  }
  return evenNumber;
}

const resuts = evenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(resuts);
*/
//_______________________________________________________________________

//PROBLEM 5
//Merge two objects using the spread operator, ensuring that properties of the second object overwrite those of the first in case of conflicts.

/*
const person1 = {
  name: "khadija",
  age: "19",
  country: "pakistan",
};

const person2 = {
  key: "property",
  name: "ayeza",
  age: "22",
  country: "pakistan",
};

const mergeObjects = { ...person1, ...person2 };
console.log(mergeObjects);
*/

//_________________________________________________________________________

//PROBLEM 6
//Given a nested object, use destructuring to extract nested properties into variables.
/*
const object2 = {
  personDetail: {
    name: "khadija",
    age: "19",
  },
  occupationDetail: {
    position: "developer",
    office: "parallelloop",
  },
};

const destructred = ({
  personDetail: { name, age },
  occupationDetail: { position, office },
} = object2);

console.log(name, age, position, office);*/
//______________________________________________________________________

//PROBLEM 7
//Create an array of objects, each containing name and age properties. Use the rest operator and destructuring to separate names into one array and ages into another.

/*

const array = [
  { name: "khadija", age: "19" },
  { name: "ayeza", age: "22" },
  { name: "Omer", age: "24" },
];
const names = [];
const ages = [];

for (const { name, age } of array) {
  names.push(name);
  ages.push(age);
}

console.log(names, ages);
*/

//_________________________________________________________________

//PROBLEM 8
//Write a function that takes three parameters and returns the result of their multiplication. Use the spread operator to pass an array of three numbers as arguments.
/*
function multiply(x, y, z) {
  return x * y * z;
}

const array3 = [2, 3, 4];
console.log(multiply(...array3));
*/
//_______________________________________________________________

//PROBLEM 9
//Create a function that accepts an object with width and height properties. Use object destructuring with default values to set the default dimensions to 100 each if not provided.
/*
function dimension({ width = 100, height = 100 }) {
  console.log(`width: ${width} , height: ${height}`);
}

dimension({});
dimension({ width: "200", height: "400" });
dimension({ width: "200" });
*/
//__________________________________________________________________________
// PROBLEM 10
//Write a function that accepts an array of numbers followed by a callback function. Use the rest operator to pass the array to the callback function and return the result.

function processNumber(callBack, ...number) {
  return callBack(...number);
}

function sumFunction(...number) {
  return number.reduce((acc, num) => acc + num, 0);
}

const res = processNumber(sumFunction, 1, 2, 3, 4, 5);
console.log(res);
