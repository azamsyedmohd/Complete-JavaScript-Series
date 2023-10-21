const promiseOne = new Promise(function (resolve, reject) {
  const value = true;
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
  console.log("Function is executing!...");
  const valueOne = await promiseOne;
  console.log(valueOne);
  const valueTwo = await promiseTwo;
  console.log(valueTwo);
  console.log("Namaste JavaScript");
}

handlePromise().catch(function (error) {
  console.log(error.message);
});
