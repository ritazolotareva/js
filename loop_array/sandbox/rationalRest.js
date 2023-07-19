// ЗАДАНИЕ 2. находим дробную часть чисел
// на решение ушло 20 минут

let first = 13.890123;
let second = 2.891564;

let precision = 10;

let firstRationalRest = Math.round(first %1 * Math.pow(10, precision));
let secondRationalRest = Math.round(second %1 * Math.pow(10, precision));

console.log('first Rational Rest', firstRationalRest);
console.log('second Rational Rest', secondRationalRest);