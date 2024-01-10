// let , const , var
// let x = 5;
// x = 7;

// var x1 = 5;
// var a = 100;

// var fun = function () {
//   console.log("hi");
// };

// //declaration , statement
// function hi() {}

// // console.log(x);

// //expression
// // const x = function () { };

// let y;
// console.log(y);
// y = "Hello";

// window.a = 5;

////////////////////////////////////
// //1
// function add(a, b) {
//   return a + b;
// }
// //2 arrow function
// const add = (a, b) => a + b;

// //3
// const fun2 = a => a + 5

// //4
// const arr = (a, b) =>
// {
//   console.log(a, b);
//   return a + b
// };
/////////////////////////////////
// Template Literals
// let x = "Ahmed";
// let a = 6;
// console.log(`hello ya ${1 + 10 + 9}`);
//////////////////////////////////////
// array Destructing
// const arr = [1, 2, 3, 4, 5, 6];
// const [firstnumber, secondNumber, ...numbers] = arr;
// console.log(firstnumber, secondNumber);
// console.log(numbers);
// // Object Destructing
// const { secondName } = { firstName: "tokaa", secondName: "heba" };
// console.log(secondName);
/////////////////////////////////////////
// function say(firstparam, secondparam, ...all) {
//   console.log(all[0]);
//   console.log(...all[0]);
// }

// arr = [1, 2, 3, 4];

// const { first, ...rest } = { first: 1, second: 2, third: 3 };
// const obj = { nm: "ahmed", age: 22 };
// console.log(...obj);
////////////////////////////////////////
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(`Hello,${this.name}`);
//   }
// }

// class Employyee extends Person {
//   constructor(n) {
//     super(n);
//   }
// }

// const ahmed = new Person("ahmed");

// const emp = new Employyee("ahmed");

// ahmed.sayHello();
// emp.sayHello();
/////////////////////////////////////////////////////////
// const arr = ["ahmed", "mohammed", "Mahmoud"];
// const newArr = arr.map((ele) => {
//   if (ele === "mohammed") return `hello Dr.${ele} `;
// });
