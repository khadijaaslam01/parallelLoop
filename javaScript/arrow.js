//PROBLEM 1
//Write a simple arrow function that takes two parameters and returns their sum.
/*
const sumArrow = (a, b) => a + b;
const res = sumArrow(2, 4);
console.log(res);
*/
//____________________________________________________________________________________

//PROBLEM 2

// Create an arrow function that calculates the square of a number and implicitly returns the result.
/*
const sqrNum = (a) => a * a;
const result = sqrNum(5);
console.log(result);
*/
//______________________________________________________________________________________

//PROBLEM 3
//Write an arrow function that takes a single parameter (an array) and returns the length of the array.
/*
const lengthArrow = (str) => str.length;
const resp = lengthArrow("khadija");
console.log(resp);
*/
//___________________________________________________________________________________________
//PROBLEM 4
//Use the map function with an arrow function to double each element in an array.
/*
const doblFunction = (arr) => arr.map((num) => num * 2);
const ans = doblFunction([1, 2, 3, 4, 5]);
console.log(ans);
*/
//____________________________________________________________________________________________

//PROBLEM 5
//Use the filter function with an arrow function to filter out even numbers from an array.
/*
const filtrFunc = (arr) => arr.filter((num) => num % 2 == 0);
const Ans = filtrFunc([1, 2, 3, 4, 5]);
console.log(Ans);
*/
//______________________________________________________________________________________________

//PROBLEM 6
//Write an arrow function that returns an object literal with two properties: name and age.
/*
const objectLiterals = (name, age) => ({
  name: name,
  age: age,
});

const Ans = objectLiterals("khadija", 19);
console.log(Ans);
*/

//______________________________________________________________________________________________

//PROBLEM 7
//Create an arrow function that takes two parameters, with a default value for the second parameter.
/*
const paraFunc = (message, defaultMessage = "hello i am default") =>
  console.log(message || defaultMessage);

paraFunc("i am message");
paraFunc();
*/
//___________________________________________________________________________________________________

//PROBLEM 8
//Investigate the behavior of the this keyword in arrow functions compared to regular functions. Create a scenario where the use of arrow functions helps to maintain the correct context of this.
/*
const object = {
  name: "khadija",
  age: 19,
  show() {
    console.log("i am khadija");
  },

  show1() {
    setTimeout(() => {
      console.log(`my name is ${this.name} and my age is ${this.age}`);
    }, 5000);
  },
};

object.show1();
*/
//________________________________________________________________________________

//PROBLEM 9
//Write a higher-order function that takes an arrow function and a value, and applies the arrow function to the value.
/*
const higherOrderFunction = (arrowFunction, number) => {
  return arrowFunction(number);
};

const sqaureFunc = (number) => number * number;

console.log(higherOrderFunction(sqaureFunc, 5));
*/
