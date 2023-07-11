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


//БЛОГ ПРО СТРОКИ, BOOLEAN, УСЛОВНЫЕ ОПЕРАТОРЫ

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

