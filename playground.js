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
// TASK 1. ageCheck
// function getAge(year) {
//   let currentDate = new Date();
//   let currentYear = currentDate.getFullYear();
//   let age = currentYear - year;
//   return age
// }

// console.log(getAge(1999))