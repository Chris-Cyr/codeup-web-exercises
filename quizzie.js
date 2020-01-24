// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
//
// console.log(sayHello("Chris"));

// // #1
// const sayHello = (name) => { 'Hello, ' + name + '!' }
//
// // #2
// const sayHello = name => { 'Hello, ' + name + '!' }
//
// // #3
// const sayHello = (name) => `Hello, ${name}!`
// //
// console.log(sayHello("Chris"));

// let numbers = [1, 2, 3, 4, 5];
// numbers.map(n => n * 3);
//
// console.log(numbers)

// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);

// const p = new Promise((resolve, reject) => {
//
//     reject(3)
// });
//
// p.then(result => console.log(result));
// p.catch(error => console.log('An error occured!'));

const p = new Promise((resolve, reject) => {
    reject(3)
});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));