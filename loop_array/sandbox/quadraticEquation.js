//ЗАДАНИЕ 4. решение квадратного уравнения 
// a * x * x + b * x + c = y
let a = 0;
let b = 500;
let c = 1;

let d = b * b - 4 * a * c;

let x1 = (-b - Math.sqrt(d)) / 2 * a;
let x2 = (-b + Math.sqrt(d)) / 2 * a;

console.log(x1 , x2)