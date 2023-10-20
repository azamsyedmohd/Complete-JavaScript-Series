const API_URL = "https://jsonplaceholder.typicode.com/users";

async function handlePromise() {
  //   console.log(fetch(API_URL));
  const response = await fetch(API_URL);
  //   console.log(response);
  //   console.log(response.json());
  const jsonData = await response.json();
  console.log(jsonData);
}
// console.log(handlePromise());
handlePromise().catch(function (error) {
  console.log(error.message);
});

// async-await is combination to handle the asynchronous opertions in JavaScript.

// async is a function which returns a promise either you returns a promise otherwise async() function itself returns.

// await is only used in async() function to handle the promises.
// by using await we directly get the promise result not the whole promise object and then we can also use for further usage of async operations.

// If there is an error then we can handle by using try and catch block inside the async function or outside the async function at the time of calling with the catch() handler.
