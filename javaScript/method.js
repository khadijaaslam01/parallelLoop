//PROBLEM 1

//Write a function that takes an array of numbers and uses the map() method to square each element.

const element = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function mapFunction(arr) {
  return arr.map((num) => num * num);
}

const result = mapFunction(element);
console.log(result);
//_______________________________________________________________________________________________-

//PROBLEM 2

// Implement a function that uses the reduce() method to calculate the sum of all elements in an array of numbers.

function sumFunc(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
const ans = sumFunc(element);
console.log(ans);

//_______________________________________________________________________________________________

//PROBLEM 3
//Create a function that takes an array of strings and uses the forEach() method to log each string to the console.

const string = ["hello World", "khadija ", "aiza"];

function StringFunc(arr) {
  arr.forEach((el) => {
    console.log(el);
  });
}
StringFunc(string);
//_____________________________________________________________________________

//PROBLEM 4
//Write a function that uses the filter() method to return an array of even numbers from a given array of integers.

function evenNum(arr) {
  return arr.filter((num) => num % 2 == 0);
}

const evenResult = evenNum(element);
console.log(evenResult);

//____________________________________________________________________________________

//PROBLEM 5

//Implement a function that checks whether a specific element exists in an array using the includes() method.

function includeFunc(arr, el) {
  const res = arr.includes(el);
  return console.log(res);
}

includeFunc(element, 6);
//______________________________________________________________________________________
//PROBLEM 6

//Combine the map() and filter() methods to create a function that doubles the even numbers in an array.

function filterAndMap(arr) {
  return arr.filter((num) => num % 2 == 0).map((el) => el + el);
}

const Ans = filterAndMap(element);
console.log(Ans);
//__________________________________________________________________________

//PROBLEM 7
//Use both reduce() and map() to find the product of all elements in an array after doubling each element.

function mapAndReduce(arr) {
  const res = arr.map((el) => el * 2).reduce((acc, num) => acc * num, 1);
  return console.log(res);
}

mapAndReduce(element);

//________________________________________________________________________

//Write a function that uses forEach() to print "Even" if the number is even and "Odd" if it's odd, for each element in an array of numbers.

function foreachFunc(arr) {
  arr.forEach(function (num) {
    if (num % 2 == 0) {
      console.log(` the number ${num} is even`);
    } else {
      console.log(` the number ${num} is odd`);
    }
  });
}
foreachFunc(element);

//_________________________________________________________________________
//PROBLEM 9
