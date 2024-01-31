//PROBLEM 1
//Write a function that takes an object as input and returns the number of keys present in the object.

function countKeys(obj) {
  return Object.keys(obj).length;
}

const myObject = { a: 1, b: 2, c: 3 };
const numberOfKeys = countKeys(myObject);
console.log(numberOfKeys); // Output: 3
//________________________________________________________________________
//PROBLEM 2
//Write a function that takes an object as input and returns an array containing unique values present in the object using Object.values.
function uniqueValues(obj) {
  const valuesArray = Object.values(obj);

  const uniqueValuesSet = new Set(valuesArray);

  const uniqueValuesArray = Array.from(uniqueValuesSet);

  return uniqueValuesArray;
}

// Example usage:
const myObject1 = { a: 1, b: 2, c: 1, d: 3 };
const uniqueValuesArray = uniqueValues(myObject1);
console.log(uniqueValuesArray); // Output: [1, 2, 3]

//__________________________________________________________________________________

//PROBLEM 3
//Write a function that takes an object and a key as input and returns true if the key exists in the object, otherwise returns false.

function doesKeyExist(obj, key) {
  // Use Object.hasOwnProperty to check if the key exists in the object
  return obj.hasOwnProperty(key);
}

// Example usage:
const myObject2 = { a: 1, b: 2, c: 3 };

const keyExists = doesKeyExist(myObject2, "d");
const keyExists1 = doesKeyExist(myObject2, "a");
console.log(keyExists);
console.log(keyExists1);

//___________________________________________________________________________

//PROBLEM 4
//Write a function that takes an object as input and returns an array of keys sorted in alphabetical order.

function sortedKeys(obj) {
  const keysArray = Object.keys(obj).sort();

  return keysArray;
}

// Example usage:
const myObject3 = { 4: "d", 3: "c", 1: "b", 2: "a" };
const sortedKeysArray = sortedKeys(myObject3);
console.log(sortedKeysArray);

//____________________________________________________________________________________

//PROBLEM 5
