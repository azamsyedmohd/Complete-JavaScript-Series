const promise = new Promise(function (resolve, reject) {
  if (true) {
    resolve("Promise resolved!");
  }
  reject(new Error("Promise Rejected!"));
});
console.log(promise);

// await keyword is only used in async()and it is written in front of promise object.

async function handlePromise() {
  const promiseResult = await promise;
  console.log(promiseResult);
}
handlePromise();
