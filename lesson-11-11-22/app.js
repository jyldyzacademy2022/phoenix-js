// // let sayHello = function () {
// //   document.write("Hello World!");
// // };

// let sayHello = () => console.log("hello");

// sayHello();

// // let getSum = (a, b) => {
// //   return a + b;
// // };

// let getSum = (a, b) => a + b;

// let mySum = getSum(25, 20);

// document.write(mySum);
// console.log(mySum);

// let potatoes = 1000;

// function peelPotatoes(n) {
//   n--;
//   console.log(n);
//   if (n > 0) {
//     peelPotatoes(n);
//   }
// }

// peelPotatoes(potatoes);

// let firsName = "John";
// let lastName = "Smith"
// let age = 25;

// let user = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 25,
//   isMarried: false,
// };

// user.bestFriend = "Vasya";

// user.sayName = function () {
//   console.log(this.firstName);
// };

// user.sayName();

// user.age += 1;
// user.age += 1;

// console.log(user.bestFriend);

// let user2 = {
//   firstName: "Masha",
//   lastName: "Smith",
//   age: 25,
//   isMarried: false,
// };

// function User(name, lastName, age) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;

//   this.sayName = function () {
//     console.log(`My name is:  ${this.name}`);
//   };
// }

// let user = new User("john", "smith", 25);
// let user2 = new User("masha", "ivanova", 20);

// user.sayName();
// user2.sayName();

let daysOfWeek = {
  1: "Monday",
  2: "Tuesday",
};

console.log(daysOfWeek["1"]);
