// utils.js

// 1. Add two numbers
export const add = (a, b) => a + b;

// 2. Subtract two numbers
export const subtract = (a, b) => a - b;

// 3. Multiply two numbers
export const multiply = (a, b) => a * b;

// 4. Divide two numbers
export const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

// 5. Check if a number is positive
export const isPositive = (number) => number > 0;

// 6. Generate a random number between 1 and 100
export const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

// 7. Convert Fahrenheit to Celsius
export const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

// 8. Convert Celsius to Fahrenheit
export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

// 9. Calculate the square of a number
export const square = (number) => number * number;

// 10. Capitalize the first letter of a string
export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// 11. Check if a number is even
export const isEven = (number) => number % 2 === 0;
