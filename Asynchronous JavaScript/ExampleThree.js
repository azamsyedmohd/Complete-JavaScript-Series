const promiseOne = new Promise(function (resolve, reject) {
  const value = true;
  if (value) {
    setTimeout(function () {
      resolve("Promise One Resolved!");
    }, 5000);
  } else {
    setTimeout(function () {
      reject(new Error("Promise One rejected!"));
    }, 5000);
  }
});

console.log(promiseOne);

const promiseTwo = new Promise(function (resolve, reject) {
  const value = true;
  if (value) {
    setTimeout(function () {
      resolve("Promise Two Resolved!");
    }, 10000);
  } else {
    setTimeout(function () {
      reject(new Error("Promise Two Rejected!"));
    }, 10000);
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
