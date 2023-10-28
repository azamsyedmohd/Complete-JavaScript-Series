// Callback function

const cart = ["shoes", "pants", "jeans"];

// createOrder() is an API to create an order and it is async operation, which returns orderId.

// proceedToPayment(orderId) is another API and another async operation which takes orderId as a parameter and do some payment operations.

createOrder(cart, function (orderId) {
  proceedToPayment(function (paymentInfo) {
    showOrderSummary();
  });
});

// We just passed the callback function to createOrder API and now it is responsibility of createOrder API to create orderId first and then execute this callback function.

// Similarly, now this is a job of proceedToPayment to just do some payment related tasks and then call the callback function and so on.

// This is one way to handle the asynchronous tasks via callback functions.

// Disadvantages of callback hell

// The problem with callback hell is that first of all we lose the control over the execution of asynchronous tasks.

// We just rely on other program or API that first of all they will finish their work and call our tasks. So there may be chances of some error happening and may be tasks are not executed at all.

// This is not the correct way of handling the asynchronous tasks like this with callbacks.
