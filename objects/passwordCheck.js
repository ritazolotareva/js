//БЛОК ПРО СТРОКИ, BOOLEAN, УСЛОВНЫЕ ОПЕРАТОРЫ
//ЗАДАЧА 1. В переменную password запишите строку с любым произвольным паролем (четыре символа, один из которых — это дефис или нижнее подчёркивание)

let password = '1234-';

if ((password.includes('-' || "_")) && password.length >= 4) {
    console.log('Password is valid');
} else {
    console.log('Enter another password');
}