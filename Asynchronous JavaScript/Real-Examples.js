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
