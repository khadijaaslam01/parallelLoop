//PROBLEM # 1:

// Write a function that performs a series of synchronous operations, such as mathematical calculations or string manipulations, and returns the final result.

/*
const inputData = [1, 2, 3, 4, 5];

function manipulationsData(input) {
  //sum five
  const sumFunction = input.map((i) => i + 5);
  //subtract 5
  const subFunction = sumFunction.map((i) => i - 10);
  //multiply 5
  const mulFunction = subFunction.map((i) => i * 5);

  return mulFunction;
}

const result = manipulationsData(inputData);
console.log(result);
*/

// _______________________________________________________________________________________

//PROBLEM 2

// Create a function that performs an asynchronous operation using setTimeout, and observe how it allows other synchronous operations to continue.
//1-
/*
console.log("Hello I am Khadija Aslam");

console.log("I am from Pakpattan");

setTimeout(() => {
  console.log("i am 19 year old");
}, 5000);

console.log("hey are you there");
*/
//2-

/*
console.log(" before Async function");
function asyncOperation(callBack) {
  console.log("start of async function");

  setTimeout(() => {
    console.log("end of async function");
    //passing value to callback function
    callBack("async function completed");
  }, 5000);
}

asyncOperation((message) => {
  console.log(message);
  console.log("after the async function complete");
});

console.log("After calling asynchronous operation (but before it completes)");

*/

//_______________________________________________________________________________

//PROBLEM 3

// Implement a scenario where you have multiple asynchronous operations that need to be executed sequentially. For example, log messages with delays in between.
/*
function logMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

function asynFunction() {
  console.log("start of async function");

  logMessage("Message 1 : I am kahdija", 2000);
  logMessage("Message 2 : I am Omer", 3000);
  logMessage("Message 3 : I am faryal", 1500);
}

asynFunction();
*/

//PROBLEM 4

// Create a function that initiates multiple asynchronous operations concurrently using setTimeout. Observe that the order of      completion is not guaranteed.
/*

function asyncFunction() {
  console.log("async started");

  setTimeout(() => {
    console.log("message 1 after 5 sec");
  }, 5000);
  setTimeout(() => {
    console.log("message 2 after 2 sec");
  }, 2000);
  setTimeout(() => {
    console.log("message 3 after 6 sec");
  }, 6000);
  setTimeout(() => {
    console.log("message 4 after 1 sec");
  }, 1000);
}

asyncFunction();
*/

//________________________________________________________________________________

//PROBLEM 5

// Implement a scenario where multiple asynchronous tasks need to be executed concurrently, but some tasks depend on the results of others. Use setTimeout to manage dependencies and order of execution.

/*
function asynctask1(callback) {
  setTimeout(() => {
    console.log("Result from task 1");
    callback("task 1 completed");
  }, 4000);
}

function asynctask2(dependcyResult, callback) {
  setTimeout(() => {
    console.log("Result from task 2 with dependecy", dependcyResult);
    callback("task 2 completed");
  }, 5000);
}

function asynctask3(dependcyResult, callback) {
  setTimeout(() => {
    console.log("Result from task 3 with dependecy", dependcyResult);
    callback("task 3 completed");
  }, 7000);
}

asynctask1((resultFromTask1) => {
  asynctask2(resultFromTask1, (resultFromTask2) => {
    asynctask3(resultFromTask1, (resultFromTask3) => {
      console.log(
        "result from task:",
        resultFromTask1,
        resultFromTask2,
        resultFromTask3
      );
    });
  });
});

*/

//____________________________________________________________________________________________

//PROBLEM 6
//Write a synchronous function with a long-running task, like a loop with a high iteration count. Observe how this blocks the event loop.

/*
function syncFunction() {
  console.log("start of sync function");
  for (let i = 0; i <= 10; i++) {
    console.log("sync function executeing");
  }
  console.log("end of sync function");
}

console.log("before calling sync function");

syncFunction();
console.log("after completing the sync function");
*/

//____________________________________________________________________________
