// ТРЕНИРОВКА РЕШЕНИЯ ЗАДАЧИ С ТАНЧИКОМ
// let roadMines = [ false, false, false, false, false, false, true, true];
// let count = 0;

// for (let i = 0; i < roadMines.length; ++i) {
//     if (roadMines[i]) {
//       count++;
//       if (count === 1) {
//         console.log(`танк поврежден`);
//       }
//       if (count === 2) {
//         console.log(`танк переместился на ${i + 1}`);
//         console.log(`танк уничтожен`);
//         break;
//       }
//     }
//       console.log(`танк переместился на ${i + 1}`);
//   }



// ВЫЯВЛЕНИЕ UNDEFIND 
// function undefindCheck() {
//   console.log('I do nothing');
//   return 5;
// }

// console.log(undefindCheck())


//ARRAY SORTING
// function arraySorting(arr) {
//   for (let i = 0; i < arr.length; ++i) {
//     for (let j = 0; j < arr.length - 1; ++j) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(arraySorting(['Margott', 'Gary', 'April', 'Bob', 'Helen', 'margott']));


// BLOCK OF FUNCTIONS & RETURN

// SCOPE - ОБЛАСТЬ ВИДИМОСТИ
// for (let i = 0; i < 10; i++) {
// 	setTimeout(() => {
// 		console.log(i)}, i * 1000);
// }

// TASK 3. SORTING
// function arrSort(array) {
//     for (let i = 0; i < array.length; ++i) {
//         for (j = 0; j < array.length - 1; ++j) {
//             if (array[j] > array[j+1]) {
//                 let temp = array[j];
//                 array[j] = array [j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     return array
// }

// console.log(arrSort([12,33,3,44,100]))


//BLOCK OF OBJECTS
// let mom = {
//     age: 34,
//     socket: true
// }

// let dad = {
//     socket: false
// }

// let obj = {
//     ...mom,
//     ...dad
// }
// console.log(mom.socket);

//ПРОВЕРКА  ДЕСТРУКТИРИЗАЦИИ
// let [a, b, c] = ["abприветмир", 'ghbdtn', 'hi there'];
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(c)