// ЗАДАНИЕ 0. расчитываем число Фибоначи 

// let n = 10;

// let current = 0;
// let prev = 1;
// let prevPrev = 0;


// while (n-- > 0) {
//     prevPrev = prev;
//     prev = current;
//     current = current + prevPrev;
//     console.log(current);
// }




// ЗАДАНИЕ 1. находим площадь прямоугольника
// на решение ушло 60 минут

// let x1 = 2;
// let y1 = 3;

// let x2 = 10;
// let y2 = 5;

// let height = Math.abs(x1 - x2);
// let width = Math.abs(y2 - y1)

// let rectangleSquare = height*width;

// console.log(rectangleSquare)





// ЗАДАНИЕ 2. находим дробную часть чисел
// на решение ушло 20 минут

// let first = 13.890123;
// let second = 2.891564;

// let precision = 10;

// let firstRationalRest = Math.round(first %1 * Math.pow(10, precision));
// let secondRationalRest = Math.round(second %1 * Math.pow(10, precision));

// console.log('first Rational Rest', firstRationalRest);
// console.log('second Rational Rest', secondRationalRest);



// ЗАДАНИЕ 3. находим дробную часть чисел
// на решение ушло 40+15 минут при помощи Марата

// let n = -8;
// let m = 3;

// let range = Math.abs(m-n);

// let genNum = Math.floor(Math.random() * range);

// let min = Math.min(n,m)

// console.log('first random num - ',a, 'second random num - ' ,b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(a !== b);



//ЗАДАНИЕ 4. решение квадратного уравнения 

// a * x * x + b * x + c = y

// let a = 0;
// let b = 500;
// let c = 1;

// let d = b * b - 4 * a * c;

// let x1 = (-b - Math.sqrt(d)) / 2 * a;
// let x2 = (-b + Math.sqrt(d)) / 2 * a;

// console.log(x1 , x2)


//БЛОК ПРО СТРОКИ, BOOLEAN, УСЛОВНЫЕ ОПЕРАТОРЫ

//ЗАДАЧА 1. В переменную password запишите строку с любым произвольным паролем (четыре символа, один из которых — это дефис или нижнее подчёркивание)

// let password = '1234-';

// if ((password.includes('-' || "_")) && password.length >= 4) {
//     console.log('Password is valid');
// } else {
//     console.log('Enter another password');
// }




//ЗАДАЧА 2. Узнать, как преобразовывать строку в верхний/нижний регистр и извлекать произвольные куски из строки.

// let userName = 'Rita';
// let userSurname = 'Margarita';

// let updName = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
// let updSurname = userSurname[0].toUpperCase() + userSurname.substring(1).toLowerCase();

// let result = userName === updName && userSurname === updSurname ? 'Имя осталось без изменений' : 'Имя было преобразовано'

// console.log(result)
// console.log(updName,updSurname)



//ЗАДАЧИ 3. Проверить числа на чётность.

// let number = 4;

// let result = number%2 > 0 ? 'Число нечётное' : 'Число чётное';

// console.log(result);



// БЛОК ПРО МАССИВЫ И ЦИКЛЫ

//PRACTICE 

//TASK 0. рассчет чискл фибоначи

// let fibo = [1,1];

// for (let i = 1; i < 49; ++i) {
//     fibo.push(fibo[i]+fibo[i - 1]);
// }

// console.log(fibo)

//TASK 0. for of

// let  fruits = ['apple','watermellow','mango','pear'];

// for (let fruit of fruits) {
//     console.log(fruit);
// }


//TASK 0. tossing arrays

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0;i<arr.length;++i) {
//     let j = Math.floor(Math.random()*arr.length);
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// console.log(arr);

//TASK 0. ПОИСК В МАССИВЕ

// let names = ['Аня','Саша','Ян','Никита','Вика','Олег'];
// let found = false;
// let seekName = 'Марат'

// for(let i = 0; i < names.length; ++i) {
//     if(names[i] === seekName) {
//         found = true;
//         console.log(`В списке найдено имя "${names[i]}"`)
//         break;
//     }
// }

// if(!found) {
//     console.log(`В списке нет имени "${seekName}"`);
// }


//ЗАДАЧА 1. Напишите генератор массивов длиной count со случайными числами от n до m. 

// let array = [];

// let n = 2;
// let m = 45;
// let count = 10;
// let min = Math.min(m,n);

// for (let i = 0; i < count; ++i) {
//     array.push(Math.floor(Math.random() * (m - n) + min)); 
// }

// console.log(array)



//ЗАДАЧА 2. С помощью цикла создать перевёрнутый вариант произвольной строки.

// let string = '123456789';
// let reverse = '';

// for (let i = 0; i < 0; ++i) {
    
// }