import {
  multiply,
  add,
  square,
  capitalizeFirstLetter,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  divide,
  isEven,
  isPositive,
  generateRandomNumber,
  subtract,
} from "./utility.js";

console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(2, 6)); // 12
console.log(divide(8, 2)); // 4
console.log(isPositive(7)); // true
console.log(generateRandomNumber()); // Random number between 1 and 100
console.log(fahrenheitToCelsius(32)); // 0
console.log(celsiusToFahrenheit(0)); // 32

console.log(square(4)); // 16
console.log(isEven(5));
console.log(capitalizeFirstLetter("khadija"));
