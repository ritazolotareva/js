//ЗАДАЧА 1 Напишите генератор массивов длиной count со случайными числами от n до m. 
let array = [];

let n = 2;
let m = 45;
let count = 10;
let min = Math.min(m,n);

for (let i = 0; i < count; ++i) {
    array.push(Math.floor(Math.random() * (m - n) + min)); 
}

console.log(array)
