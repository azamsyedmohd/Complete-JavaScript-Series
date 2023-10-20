const API_URL = "https://jsonplaceholder.typicodes.com/users";

async function handlePromise() {
  try {
    //   console.log(fetch(API_URL));
    const response = await fetch(API_URL);
    //   console.log(response);
    //   console.log(response.json());
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
}

handlePromise();
