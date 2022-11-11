// let myNumber = 6;

// switch (myNumber) {
//   case 1:
//     console.log("Winter");
//     break;
//   case 2:
//     console.log("Winter");
//     break;
//   case 3:
//     console.log("Spring");
//     break;
//   case 4:
//     console.log("Spring");
//     break;
//   case 5:
//     console.log("Spring");
//     break;
//   default:
//     console.log("I don't know");
// }

// function calculate(a, b, operator) {
//   a = Number(a);
//   b = Number(b);

//   if (operator === "+") {
//     document.write(a + b);
//     document.write("<br>");
//   } else if (operator === "-") {
//     document.write(a - b);
//     document.write("<br>");
//   } else if (operator === "*") {
//     document.write(a * b);
//     document.write("<br>");
//   } else if (operator === "/") {
//     document.write(a / b);
//     document.write("<br>");
//   }
// }

// function calculate(a, b, operator) {
//   a = Number(a);
//   b = Number(b);

//   if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   } else if (operator === "*") {
//     return a * b;
//   } else if (operator === "/") {
//     return a / b;
//   }
// }

// function getSum(a, b) {
//   return a + b;
// }

// let sum = getSum(500, 700);

// console.log(sum);
// document.write(sum);

// let getSum = function (a, b) {
//   return a + b;
// };

// console.log(typeof getSum);

// let mySum = getSum(400, 100);
// console.log(mySum);
// document.write(mySum);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function ok() {
  alert("Вы соглаcились");
}

function cancel() {
  alert("Вы отменили");
}

ask("Вы согласны?", ok, cancel);
