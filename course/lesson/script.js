"use strict";

// let person = {
//     name: "Artem",
//     surname: "Zhiruk",
//     age: 19,
//     isMarried: false
// };
// console.log(person.name + " " + person.surname);

// let arr = ['Andey', 'Sergey', 'Vitaliy'];
// console.log(arr[2]);                             //тест вывода с массива

// let answer = confirm("Ты хочешь кушать?", "Да");
// if (answer == true) {
//     alert("Я тоже");
// } else {
//     alert("Я тоже хочу");
// }                                               //тест роботы метода confirm

// let answer2 = prompt("Ты хочешь кушать?", "Да");
// switch (answer2) {
//     case "Да":
//         alert("Я тоже");
//         break;
//     case "Нет":
//         alert("Я тоже не хочу");
//         break;
// } //тест роботы метода prompt

// 

// let user = {};
// user.name = prompt("What is your name?");
// user.surname = prompt("What is your surname?");
// user.age = prompt("How old are you?", "18");
// user.married = prompt("Are you married?");
// user.display = function(){
//     console.log(user.name);
//     console.log(user.surname);
//     console.log(user.age);
//     console.log(user.married);

//     if(user.age >= 18 && user.married == "no"){
//        console.log(user.name + " would you like to go to a dating site?");
//     }
//     else {
//         console.log("Want to watch cartoons?");
//     }
// };
// user.display();

// 

// function Car(mName, mYear){                           //ПРИМЕР КОНСТРУКТОРА ОБЪЕКТОВ
//     this.name = mName;
//     this.year = mYear;
//     this.getCarInfo = function(){
//         document.write("Модель: " + this.name + "<br/>" + " Год випуска: " + this.year + "<br/>"); 
//     };
// }

// function User(pName, pYear, ){
//     this.name = pName;
//     this.year = pYear;
//     this.driveCar = function(car){
//         document.write(this.name + " drive car " + car.name + "<br/>");
//     };

//     this.displayInfo = function(){
//         document.write("Имя: " + this.name + "<br/>" + " Год рождения: " + this.year + "<br/>"); 
//     };
// }

// let user = new User("Artem", 2000);
// user.displayInfo();
// let auto = new Car("Skoda", 2015);
// auto.getCarInfo();
// user.driveCar(auto);

// 

// function User(name){                             //ПРИМЕР ИНКАПСУЛЯЦИИ
//     this.name = name;
//     let _age = 1; //НАЗВАНИЕ ЛОКАЛЬНЫХ ПЕРЕМЕННЫХ В КОНСТРУКТОРАХ НАЧИНАТЬ С "_"
//     this.displayInfo = function(){
//         console.log("Имя: " + this.name + " возраст" + _age);
//     };
    
//     this.getAge = function(){
//         return _age;
//     }

//     this.setAge = function(age){
//         if(typeof age === "number" && age > 0 && age < 100){
//             _age = age;
//         }
//         else{
//             console.log("Недопустимое значение");
//         }
//     };
// }

// let user = new User("Artem");
// user.setAge(19);
// console.log(user.getAge());

function User(name, age){
    this.name = name;
    this.age = age;

    this.go = function(){
        console.log(this.name + " идет" + "<br/>");
    };

    this.displayInfo = function(){
        console.log("Имя: " + this.name + " возраст " + this.age);
    };
}

User.prototype.maxAge = 100;

function Employee(name, age, company){
    User.call(this, name, age);
    this.company = company;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + " возраст " + this.age + " компания " + this.company + "<br/>");
    };

    Employee.prototype = Object.create(User.prototype);

    let tom = new User("Tom", 21);
    let bill = new Employee("Bill", 30, "Google");
    tom.go();
    bill.go();
    tom.displayInfo();
    bill.displayInfo();
    console.log(bill.maxAge);
}
