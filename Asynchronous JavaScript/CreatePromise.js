const cart = ["shoes", "pants", "kurtas"];

const promise = createOrder(cart); // returns orderId.

console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    console.log(proceedToPayment(orderId));
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function () {
    console.log("No matter at all! I am always be called.");
  });
// function createOrder().

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
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
}

function validateCart(cart) {
  if (cart) {
    return false;
  } else {
    return true;
  }
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    orderId
      ? resolve("Just wait! We are proceeding to payment.")
      : reject(new Error("Sorry! We can't proceed to payment."));
  });
}
