const cart = ["shoes", "pants", "kurtas"];

const promise = createOrder(cart); // returns orderId.

console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    //   proceedToPayment(orderId);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// function createOrder().

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // check validation of  card.
    //  create Order.
    //   create orderId.
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid!");
      reject(error);
    }
    const orderId = "123445";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return promise;
}

function validateCart(cart) {
  if (cart) {
    return true;
  } else {
    return false;
  }
}
