const promiseOne = new Promise(function (resolve, reject) {
  const value = true;
  if (value) {
    setTimeout(function () {
      resolve("Promise One Resolved!");
    }, 10000);
  } else {
    reject(new Error("Promise Rejected!"));
  }
});

console.log(promiseOne);

const promiseTwo = new Promise(function (resolve, reject) {
  const value = true;
  if (value) {
    setTimeout(function () {
      resolve("Promise Two Resolved!");
    }, 5000);
  } else {
    reject(new Error("Promise Rejected!"));
  }
});

console.log(promiseTwo);
