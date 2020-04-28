let lang = {};
lang.mova = prompt("Введите язык");

lang();

var daysUA = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
var daysEN = ["Mondey", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let day = function () {
    if (lang.mova !== "ua" || lang.mova !== "en") {
        alert("Язык введен не правильно. Попробуйте ещё раз!");
        lang();
    } else if (lang.toLowerCase == "ua") {
        prompt("Введіть номер дня неділі від 1 до 7?", 1);
        alert(daysUA[day]);
    } else if (lang.toLowerCase == "en") {
        prompt("Enter the day number of the week (from 1 to 7)?", 1);
        alert(daysEN[day]);
    }
};