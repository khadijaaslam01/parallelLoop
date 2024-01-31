//PROBLEM 1
//Write a function convertObjectToJson that takes an object as a parameter and returns a JSON string representation of that object using JSON.stringify.

const object = {
  name: "khadija",
  age: 19,
  counttry: "pakitan",
};

function convertObj(obj) {
  return JSON.stringify(obj);
}

const ans = convertObj(object);
console.log(ans);

//___________________________________________________________________________________________

//PROBLEM 2
//Write a function convertJsonToObject that takes a JSON string as a parameter and returns the corresponding JavaScript object using JSON.parse.
const string = '{"name":"khadija","age":19,"counttry":"pakitan"}';

function convertStrToObj(str) {
  return JSON.parse(str);
}

const Ans = convertStrToObj(string);
console.log(Ans);
//________________________________________________________________________________

//PROBLEM 3
//Create a function mergeJsonStrings that takes two JSON strings as parameters, parses them using JSON.parse, merges the resulting objects, and then returns the merged object as a JSON string using JSON.stringify.

const string1 = '{"name":"khadija","age":19,"counttry":"pakitan"}';
const string2 = '{"semester":"2nd","class":"A","counttry":"pakitan"}';
function jsonFunc(str1, str2) {
  const object1 = JSON.parse(str1);
  const object2 = JSON.parse(str2);

  const mergedObject = { ...object1, ...object2 };
  return JSON.stringify(mergedObject);
}

console.log(jsonFunc(string1, string2));

//_______________________________________________________________________________________________________

//PROBLEM 4
//Implement a function deepCloneWithJson that takes an object as a parameter and returns a deep clone of that object using JSON.stringify and JSON.parse. Ensure that the original object remains unchanged.

function deepCloneWithJson(obj) {
  const string = JSON.stringify(obj);
  const object = JSON.parse(string);
  return object;
}

const object1 = {
  name: "khadija",
  age: 19,
  counttry: "pakitan",
};

const deepClone = deepCloneWithJson(object1);
deepClone.age = 20;
console.log(object1);
console.log(deepClone);

//_____________________________________________________________________________

//PROBLEM 5
//Write a function filterJsonArray that takes a JSON array of objects representing tasks, a property name, and a property value. The function should return a JSON string representing an array containing only the tasks with the specified property value for the given property name, using JSON.stringify and JSON.parse

// Define a JavaScript object with various data types
const originalObject = {
  name: "John",
  age: 25,
  isStudent: false,
  grades: [90, 85, 92],
  address: {
    city: "New York",
    zipCode: "10001",
  },
  favoriteColor: null,
};

// Convert the object into a JSON string
const jsonString = JSON.stringify(originalObject);

// Parse the JSON string to reconstruct the object
const reconstructedObject = JSON.parse(jsonString);

// Display the original and reconstructed objects
console.log("Original Object:", originalObject);
console.log("Reconstructed Object:", reconstructedObject);
