// var daysUA = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];       // ПЕРВОЕ
// var daysEN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let language = function () {
//     return prompt("Выберите язык", "ua");
// };
// let lang = language();
// let index;

// if (lang === undefined) {
//     alert("Значение не введено");
//     language();
// }
// else if (lang.toLowerCase() != "ua" && lang.toLowerCase() != "en") {
//     console.log(lang.toLowerCase());
//     alert("Язык введен не правильно. Попробуйте ещё раз!");
//     console.log("Проверка языка");
//     language();
// }
// else if (lang.toLowerCase() == "ua") {
//     console.log("Проверка языка ua");
//     index = function(){
//         return prompt("Введіть номер дня тижня від 1 до 7?", 1);

//     };
//     let day = index();
//     alert(daysUA[--day]);//выборка дня с массива
// }
// else if (lang.toLowerCase() == "en") {
//     console.log("Проверка языка en");
//     index = function(){
//         return prompt("Enter the day number of the week (from 1 to 7)?", 1);
//     };
//     let day = index();

//     alert(daysEN[--day]);//выборка дня с массива
// }

//ВТОРОЕ ЗАДАНИЕ

// let height = function () {
//   return prompt("Введите значение шахматной доски по высоте");
// };
// let a = height();

// let width = function () {
//   return prompt("Введите значение шахматной доски по ширине");
// };
// let b = width();

// CreateTable(parseInt(a), parseInt(b)); //вызов функции может происходить раньше её инициализации 


// function CreateTable(a = 8, b = 8) {
//   let counter = 1;
//   for (let i = a; i < 0; i--) { //прохождения первого елемента
//     let str = "";
//     a--;
//     for (let j = b; j < 0; j++) { //прохождение второго елемента
//       b--;
//       if (counter % 2 == 0) {
//         str += "#";
//       } else {
//         str += "@";
//       }
//     }
//     console.log(str);
//   }
// }

//Третье ЗАДАНИЕ

// let a =
//   function () {
//     return prompt("Введите число которое вам нравится");
//   };
// let number = a();

// if (number !== undefined && parseInt(number) < 9999) {
//   let a = number.toString().split('');//СДЕЛАТЬ ЧТО БЫ ПРИ UNDEFINED ПРИСВАИВАЛОСЬ 0 ПРИ ВЫВОДЕ
//   let init = a.pop();
//   let dozen = a.pop();
//   let hundred = a.pop();
//   let thousands = a.pop();
//   console.log(
//     "Еденицы: " + init + "\n" +
//     "Десятки: " + dozen + "\n"+
//     "Сотни: " + hundred + "\n"+
//     "Тысячи: " + thousands + "\n");
// } else {

//   console.log("Нам такое не подходит, попробуй ещё!");
// }

//ЧЕТВЕРТОЕ ЗАДАНИЕ
// let message = "E:/projectJS/project/2.3My/pz_example.jsdasndjhaskjdlka";
// let fileExtension1 = message.substring(message.lastIndexOf('.'), message.length);
// console.log(fileExtension1);

//ПЯТОЕ ЗАДАНИЕ
// let numbers = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6];
// let unq = Array.from(new Set(numbers));//set создает объект уникальных значений, потом обратно в массив
// console.log(unq);



//ШЕСТОЕ ЗАДАНИЕ

//   function words(str) {
//     let wordsA = "аоиеёэыуюя";
//     let arr = str.split(' ');
//     let countA = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < wordsA.length; j++) {
//             if(arr[i][0].toLowerCase() == wordsA[j]){
//                 countA++;
//             }
//         }

//     }
//     let countB = arr.length - countA;
//     console.log("Ваш текст: " + str);
//     console.log("Количество слов строке: " + arr.length);
//     console.log("Слова которые начинаються с гласных букв: " + countA);
//     console.log("Слова которые начинаються с согласных букв: " + countB);
// }
// let str = prompt("Введите ваше предложение");
// words(str);

//СЕДЬМОЕ ЗАДАНИЕ

// let email = prompt("Введите адрес вашей електронной почты по образцу", "test@test.test");
// let pattern = email.match(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/);
// 	if(pattern == email){
// 		console.log("Верно");
// 	} else {
// 		console.log("Не верно");
// 	}

//ВОСЬМОЕ ЗАДАНИЕ

// let text = prompt("Введите ваш текст");
// let lText = text.toLowerCase();
// let sTwo = "";
// let marks = ",.!?-–;<>[]()@#$%^&* \r\n"; //Строка, для поиска символов препинания и символов которые не относяться к словам
// let arrayWords = []; //Создаем массив для того, чтобы заносить в него слова
// let tempString = ""; //Строка, необходимая для хранения слова из строки
// let countWords = 0; //Счетчик массива ArrayWords


// for (var i = 0; i < lText.length; i++) { //Разбиваем на слова, работает до нахождение распределителя "marks"
//   if (marks.indexOf(lText[i]) == -1) { //Записываем буквы для создание слова если находит распределитель идет в else
//     tempString += lText[i];
//   } else {
//     if (tempString != '') {
//       arrayWords[countWords] = tempString; //Записываем слово в массив
//       countWords++;
//     }
//     tempString = ""; //Обнуляет 
//   }
// }

// //ПЕРВЫЙ СПОСОБ

// let ks=[];//массив значений
// for(let value of arrayWords){ 
//     ks[value] = (ks[value]||0)+1; //Записываем сколько раз значение повторяеться
// }
// let arr2 =[];
// for(var i in arrayWords) {
//   if ( ks[ arrayWords[i] ] > 1 ) {//Ищем повторяющейся значения
//         arr2.push(arrayWords[i]);//Записываем повторяющейся значения
//     }
// }
// arr2.sort();

// let result = {};
// arr2.forEach(function(a){ //Записываем сколько раз конкретное значение повторяеться
//     result[a] = result[a] + 1 || 1;
// });
// for (var key in result){ //Вывод слов которые повторяються и сколько раз
//     console.log('Слово: ' + key + ' = ' + result[key] + ' раз(а)');
// }
// let arr3 = Array.from(new Set(arr2));//Убираем одинаковые значения и оставляем уникальные 
// console.log("Количество слов которые повторяються: " + arr3.length);//Показать сколько слов в тексте повторяеться

//ЗДЕСЬ ДОЛЖНА БЫТЬ ВЫБОРКА СЛОВ РЕГУЛЯРКОЙ
let text = prompt("Введите ваш текст");
let text1 = text.toLowerCase();
let req = /[^\s\w$,.\s\r\n]+/ig;
let arrayWords = text1.match(req);

// for (let i = 0; i < text.length; i++) {
//   console.log(arrayWords[i]);

// }

//ВРОТОЙ СПОСОБ

let counter = {}; //записываем слово и количество повторов
arrayWords.forEach(word => {
  if (counter[word]) {
    counter[word] += 1; //если слово  встречалось ключ к нему +1
    return;
  } else {
    counter[word] = 1; //если слово ещё не встречалось ключ к нему =1
  }
});
for (let i of Object.keys(counter)) {
  if (counter[i] > 1) { //вывод слов в которых ключ(количество повторений) больше 1
    console.log("Слово: \"" + i + "\" повторилось в тексте  \"" + counter[i] + "\" раз(a).");
  }

}