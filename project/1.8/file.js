// function first() { //З допомогою циклу while вивести всі прості числа в проміжку від 0 до 100
//     let n = 100;
//     nextPrime:
//         for (let i = 2; i <= n; i++) {

//             for (let j = 2; j < i; j++) {
//                 if (i % j === 0) continue nextPrime;
//             }

//             console.log(i);
//         }
// }
// first();

// function second() {  //З допомогою циклу do…while написати функцію для виведення чисел від 0 до 10
//     let even = " Парне";
//     let notEven = " Непарне";
//     let i = 1;
//     do {
//         if (i % 2 === 0) {
//             console.log(i + " - " + even);
//         } else {
//             console.log(i + " - " + notEven);
//         }
//         i++;
//     } while (i <= 10);

// }
// second();

// function third() { //Вивести з допомогою циклу for цифри від 0 до 9, не використовуючи тіло циклу. 
//     for (let i = 0; i < 10; console.log(i++)) {

//     }
// }
// third();

// function fourth() { //Намалювати трикутник, трикутну піраміду і ромб з допомогою console.log
//     let a = prompt("Enter number");
//     let char = "*";
//     for (let i = 0; i < a; i++) {
//         console.log(char + "\n");
//         char += "*";
//     }
//     let i = 0,
//         j = 0;
//     let max = a;
//     let space = "",
//         star = "";

//     while (i < max) {
//         space = "";
//         star = "";
//         for (j = 0; j < max - i; j++) space += " ";
//         for (j = 0; j < 2 * i + 1; j++) star += "*";
//         console.log(space + star);
//         i++;
//     }
// }
// fourth();

// function Square() {
//     let a = prompt("Enter number");
//     let s, i, j,
//         size = a,
//         board = '',
//         out = '';

//     for (s = 0; s < (size / 2) - 1; s++) {
//         out += ' ';
//     }
//     for (i = 0; i < size / 2; i++) {
//         board += '* ';
//         console.log(out, board);
//         out = out.substring(0, out.length - 1);
//     }

//     for (j = size / 2; j > 0; j--) {
//         out += ' ';
//         board = board.substring(0, board.length - 2);
//         console.log(out, board);
//     }
// }
// Square();

// function Fifth() { //Діліть його на 2 стільки раз, поки результат ділення не стане менше 50. 
//     let numb = 10000;
//     let result = 0;
//     count = 0;
//     for (let i = 1; numb > 50; i++) {
//         numb = numb / 2;
//         console.log(numb);
//         if (numb < 50) {
//             result = numb;
//             count = i;
//         }
//     }
//     console.log("Result: " + result);
//     console.log("Count: " + count);
// }
// Fifth();

// function Sixth() {
//     let month = parseInt(prompt("Enter the number less than 12"));
//     switch (month) {
//         case 1:
//             alert("January");
//             break;
//         case 2:
//             alert("February");
//             break;
//         case 3:
//             alert("March");
//             break;
//         case 4:
//             alert("April");
//             break;
//         case 5:
//             alert("May");
//             break;
//         case 6:
//             alert("June");
//             break;
//         case 7:
//             alert("July");
//             break;
//         case 8:
//             alert("August");
//             break;
//         case 9:
//             alert("September");
//             break;
//         case 10:
//             alert("October");
//             break;
//         case 11:
//             alert("November");
//             break;
//         case 12:
//             alert("December");
//             break;
//     }
// }
// Sixth();

// function Seventh() {
//     let celsium = parseInt(prompt("Enter the celsium dergees"));
//     alert("Farenheit equivalent temperature:" + ((celsium * (9 / 5) + 32)));
// }
// Seventh();

// function Eight() {
//     let day = parseInt(prompt("Enter the number of day"));
//     switch (day) {
//         case 1:
//             alert("Monday");
//             break;
//         case 2:
//             alert("Tuesday");
//             break;
//         case 3:
//             alert("Wednesday");
//             break;
//         case 4:
//             alert("Thursday");
//             break;
//         case 5:
//             alert("Friday");
//             break;
//         case 6:
//             alert("Saturday");
//             break;
//         case 7:
//             alert("Sunday");
//             break;

//     }
// }
// Eight();