//БЛОК ПРО СТРОКИ, BOOLEAN, УСЛОВНЫЕ ОПЕРАТОРЫ
//ЗАДАЧА 2. Узнать, как преобразовывать строку в верхний/нижний регистр и извлекать произвольные куски из строки.
let userName = 'Rita';
let userSurname = 'Margarita';

let updName = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
let updSurname = userSurname[0].toUpperCase() + userSurname.substring(1).toLowerCase();

let result = userName === updName && userSurname === updSurname ? 'Имя осталось без изменений' : 'Имя было преобразовано'

console.log(result)
console.log(updName,updSurname)
