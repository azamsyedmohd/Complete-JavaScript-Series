// Callback function

const cart = ["shoes", "pants", "jeans"];

// createOrder() is an API to create an order and it is async operation, which returns orderId.

// proceedToPayment(orderId) is another API and another async opeartion which takes orderId as a parameter and do some payment operations.

createOrder(cart, function (orderId) {
  proceedToPayment(function (paymentInfo) {
    showOrderSummary();
  });
});

// We just passed the callback function to createOrder API and now it is responsibility of createOrder API to create orderId first and then execute this callback function.

// Similarly, now this is a job of proceedToPayment to just do some payment related tasks and then call the callback function and so on.

// This is one way to handle the asynchronous tasks via callback functions.

//
