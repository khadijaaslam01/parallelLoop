//PROBLEM 1
//Write a function that takes a callback as an argument and executes it after a specified delay.
const array = [1, 2, 3, 45, 5];
function delay(callback) {
  setTimeout(callback, 2000);
}

function delayArg(arr) {
  const element = arr.map((el) => el + 2);
  return console.log(element);
}

delay(() => delayArg(array));

//PROBLEM 2
//Create a promise chain with at least three promises where each subsequent promise depends on the result of the previous one.

function firstPromise() {
  return new Promise((resolve, reject) => {
    const result = 42;
    setTimeout(() => {
      console.log("the resolve result is: ", result);
      resolve(result);
    }, 2000);
  });
}

function secondPromise(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = previousResult * 2;
      console.log("the resolve result is: ", result);
      resolve(result);
    }, 4000);
  });
}
function thirdPromise(previousResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = previousResult + 20;
      console.log("the resolve result is: ", result);
      resolve(result);
    }, 4000);
  });
}

firstPromise()
  .then((result1) => secondPromise(result1))
  .then((result2) => thirdPromise(result2))
  .then((finalResult) => {
    console.log("final Result ", finalResult);
  })
  .catch((err) => {
    console.log(err);
  });

firstPromise().then((result1) => console.log(result1));

//PROBLEM 3
//Write a promise that intentionally rejects, and use .catch() to handle the error. Add a .finally() block to perform cleanup operations.

const myPromise = new Promise((resolve, reject) => {
  reject("intentional error");
});

myPromise
  .then((reusult) => console.log("result: ", reusult))
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("exetution completed");
  });

//problem 4
//Create an array of promises that resolve with different values and use Promise.all() to get an array of their results.

const promiseArray = [
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("i am promise all 1"), 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("i am promise all 2"), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("i am promise all 3"), 3000);
  }),
];

Promise.all(promiseArray)
  .then((res) => console.log("array of result", res))
  .catch((err) => console.log(err));

//PROMISE 5
//Write an asynchronous function using async/await to fetch data from an API and log the result
async function asyncFunc() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
asyncFunc();

//PRoblem 6
//Create a chain of promises where one of them intentionally rejects, and handle the error using .catch().

function delayPromises(value, delay) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(value)));
}

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    reject("intentional Error");
  });
}

delayPromises("First value", 1000)
  .then((result1) => {
    console.log(result1);
    // Intentionally rejecting the next promise in the chain
    return rejectedPromise();
  })
  .then((result2) => {
    // This block won't be executed because of the rejection
    console.log(result2);
  })
  .catch((error) => {
    // Handling the intentional error
    console.error("Caught an error:", error);
  });

//PROBLEM 7
//Write a function that performs multiple asynchronous tasks in parallel using Promise.all().

function asyncTask(taskName, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${taskName} completed after ${delay} milliseconds`);
      resolve(`${delay} result`);
    }, delay);
  });
}

async function task() {
  try {
    const taskArray = [
      asyncTask("task1", 2000),
      asyncTask("task2", 1000),
      asyncTask("task3", 3000),
      asyncTask("task4", 5000),
    ];
    const result = await Promise.all(taskArray);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

task();

//PROBLEM 8
//Write an async function that includes a try-catch block to handle exceptions and log an appropriate message.

async function asyncFunction() {
  try {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      throw new Error("random value too low");
    }

    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("async function execute sucesfully");
      });
    }, 5000);
    console.log(result);
  } catch (error) {
    console.error("Caught an exception:", error.message);
  }
}
asyncFunction();
//PROBLEM 9
//Write a function that uses Promise.race() to determine which of two promises resolves first and logs its result.

function asyncRaceFunctiom(promise1, promise2) {
  Promise.race([promise1, promise2])
    .then((result) => console.log("first resolved promise", result))
    .catch((err) => console.log("first rejected promise", err));
}
const promiseA = new Promise((resolve) => {
  setTimeout(() => resolve("Result from Promise A"), 1000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error from Promise B"), 5000);
});
asyncRaceFunctiom(promiseA, promiseB);
