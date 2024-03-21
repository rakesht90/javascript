// function reducer(nums, fn, init) {
//   let result = init; // Initialize result with init value

//   for (let i = 0; i < nums.length; i++) {
//     result = fn(result, nums[i]);
//   }

//   return result;
// }

// // Example usage:
// const nums = [1, 2, 3, 4];
// const fn = function sum(accum, curr) {
//   return accum + curr;
// };
// const init = 0;
// console.log(reducer(nums, fn, init)); // Output: 10

// function attachedEventListner() {
//   let count = 0;
//   document.getElementById("clickMe");
//   addEventListener("click", function xyz() {
//     console.log("Button Clicked");
//   });
// }
// attachedEventListner();
// const radious = [2, 4, 6, 8, 1];

// const area = function (radious) {
//   return Math.PI * radious * radious;
// };

// const circumfarance = function (radious) {
//   return 2 * Math.PI * radious;
// };

// const diameter = function (radious) {
//   return 2 * radious;
// };

// const calculate = function (arr, logic) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(logic(arr[i]));
//   }
//   return output;
// };
// console.log(calculate(radious, diameter));
// console.log(calculate(radious, circumfarance));
// console.log(calculate(radious, area));

// const users = [
//   { firstName: "Rakesh", lastName: "Tiwari", age: 33 },
//   { firstName: "Rajat", lastName: "Garg", age: 30 },
//   { firstName: "Aman", lastName: "Jha", age: 26 },
//   { firstName: "Rak", lastName: "Tiwari", age: 26 },
// ];

// const output = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);

// // console.log(output);
// const cart = ["shoe", "pants", "coat"];
// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     console.log("No matter what happened it will be executed");
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     const orderId = 12345;
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }
// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment is successfull");
//   });
// }
// function validateCart(cart) {
//   return true;
// }

// const API_URL = "https://api.github.com/users/rakesht90";
// fetch(API_URL);

// async function handlePromise() {
//   try {
//     const value = await fetch(API_URL);
//     const jsonvalue = await value.json();
//     console.log(jsonvalue);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handlePromise();

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p1 success");
    reject("p1 failed");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("p2 success");
    reject("p2 failed");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("p3 success");
    reject("p3 failed");
  }, 2000);
});
Promise.any([p1, p2, p3]).then((res) => console.log(res));
// .catch((err) => {
//   console.log(err);
//   console.log(err.errors);
// });
