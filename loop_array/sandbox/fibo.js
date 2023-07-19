// ЗАДАНИЕ 0. расчитываем число Фибоначи 

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;


while (n-- > 0) {
    prevPrev = prev;
    prev = current;
    current = current + prevPrev;
    console.log(current);
}


//TASK 0.1 рассчет чисел фибоначи

// let fibo = [1,1];

// for (let i = 1; i < 49; ++i) {
//     fibo.push(fibo[i]+fibo[i - 1]);
// }
// console.log(fibo)