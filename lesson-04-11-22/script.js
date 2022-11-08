// let currentMonth = 0;

// if (currentMonth == 12 || currentMonth == 1 || currentMonth == 2) {
//   console.log("WINTER");
// } else if (currentMonth == 3 || currentMonth == 4 || currentMonth == 5) {
//   console.log("SPRING");
// } else if (currentMonth == 6 || currentMonth == 7 || currentMonth == 8) {
//   console.log("SUMMER");
// } else if (currentMonth == 9 || currentMonth == 10 || currentMonth == 11) {
//   console.log("AUTUMN");
// } else {
//   console.log("Такого месяца нет!");
// }

// let age = 95;

// if (age <= 3) {
//   console.log("Малыш");
// } else if (age >= 4 && age <= 16) {
//   console.log("Подросток");
// } else if (age >= 17 && age <= 35) {
//   console.log("Молодой человек");
// } else if (age >= 36 && age <= 65) {
//   console.log("Взрослый человек");
// } else {
//   console.log("старик");
// }

// let a = 10;

// if (a == 1) {
//   console.log("Red");
// } else {
//   console.log("Blue");
// }

// a >= 1 && a <= 5 ? console.log("Red") : console.log("Blue");

// let i = 11;

// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) continue;
//   console.log(i);
// }

// 2 * 1 = 2
// 2 * 2 = 4

for (let i = 2; i <= 9; i++) {
  document.write("<br>");
  for (let j = 1; j <= 10; j++) {
    document.write(`${i} * ${j} = ${i * j}<br>`);
  }
}
