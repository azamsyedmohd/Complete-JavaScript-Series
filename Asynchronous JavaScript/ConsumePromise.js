// How to consume a Promise

// Fetch() is an API given by the browser to us to make an EXTERNAL CALL and it returns a promise.

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const users = fetch(GITHUB_API);

console.log(users);
