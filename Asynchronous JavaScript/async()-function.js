/* 
What is async?
What is await?
How async await works behind the scene?
Examples of async await?
Error Handling
Interviews
Async Await vs Promise.then()/.catch()
*/

// async() --> always returns a promise either you return a promise or otherwise async() itself returns the value in the promise format.

async function getDataOne() {
  console.log("JavaScript");
}
const dataPromiseOne = getDataOne();
console.log(dataPromiseOne);
// It will return a promise with promise state => fulfilled and promise result => undefined.

async function getDataTwo() {
  console.log("JavaScript");
  return "JavaScript";
}

const dataPromiseTwo = getDataTwo();
console.log(dataPromiseTwo);
// It will return a promise with promise state => fulfilled and promise result => 'JavaScript'.

async function getDataThree(value) {
  return new Promise(function (resolve, reject) {
    if (value) {
      resolve("Promise Resolved");
    }
    reject(new Error("Promise Rejected"));
  });
}

const dataPromiseThree = getDataThree(false);
console.log(dataPromiseThree);
dataPromiseThree
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.message);
  });
