// How to consume a Promise

// Fetch() is an API given by the browser to us to make an EXTERNAL CALL and it returns a promise.

const GITHUB_API = "https://api.github.com/users/akshaaymarch7";

const users = fetch(GITHUB_API);

console.log(users);

users
  .then(function (response) {
    console.log(response);
    // console.log(response.json());
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Promises are used to handle the asynchronous operations in JavaScript.

// Asynchronous operation are those operations which take some time to execute. We as a developer do not know how much time it takes to execute.

// As soon as these operations are executed, it will return a promise.

// A promise is an object which initially has empty data, as soon as we have data after execution of an asynchronous operation, promise object is filled with appropriate data.

// We attach the then() handler with promise object and this then() handler takes a callback function and the response of promise object is passed to the parameter to the callback function.
