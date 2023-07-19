//TASK 0.3 tossing arrays
let arr = [1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<arr.length;++i) {
    let j = Math.floor(Math.random()*arr.length);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(arr);

//ЗАДАЧА 2. Перемешать массив чисел
// let array = [];
// let count = 5;

// for(let i = 1; i <= count; ++i) {
//     array.push(i);
// }

// for (let i = 0; i < array.length; ++i) {
//         let j = Math.floor(Math.random()*array.length);
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// console.log(array);