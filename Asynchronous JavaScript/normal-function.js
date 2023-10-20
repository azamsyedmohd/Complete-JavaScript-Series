const promiseOne = new Promise(function (resolve, reject) {
  const value = true;
  if (value) {
    resolve("Promise Resolved!");
  } else {
    reject(new Error("Promise Rejected!"));
  }
});
const promiseTwo = new Promise(function (resolve, reject) {
  const value = true;
  if (value) {
    setTimeout(function () {
      resolve("Promise Resolved!");
    }, 10000);
  } else {
    reject("Promise Rejected!");
  }
});

console.log(promiseOne);
console.log(promiseTwo);

function func() {
  promiseOne.then(function (response) {
    console.log(response);
  });
  promiseTwo.then(function (response) {
    console.log(response);
  });
  console.log("JavaScript!");
}

func();
