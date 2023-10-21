const promiseOne = new Promise(function (resolve, reject) {
  const value = false;
  if (value) {
    setTimeout(function () {
      resolve("Promise One Resolved!");
    }, 10000);
  } else {
    setTimeout(function () {
      reject(new Error("Promise One Rejected!"));
    }, 10000);
  }
});

console.log(promiseOne);

const promiseTwo = new Promise(function (resolve, reject) {
  const value = false;
  if (value) {
    setTimeout(function () {
      resolve("Promise Two resolved!");
    }, 5000);
  } else {
    setTimeout(function () {
      reject(new Error("Promise Two Rejected!"));
    }, 5000);
  }
});

console.log(promiseTwo);

async function handlePromise() {
  const valueOne = await promiseOne;
  console.log(valueOne);
  const valueTwo = await promiseTwo;
  console.log(valueTwo);
}

handlePromise().catch(function (error) {
  console.log(error.message);
});
