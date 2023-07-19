//ЗАДАЧА 0.2 С помощью цикла создать перевёрнутый вариант произвольной строки.
let string = '123456789';
let reverseString = '';

for(let i = string.length - 1; i >= 0; --i) {
    reverseString += string[i];
}

console.log(reverseString);