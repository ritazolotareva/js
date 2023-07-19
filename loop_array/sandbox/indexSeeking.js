// ЗАДАЧА 3. Найти индекс (порядковый номер) нужного элемента в массиве.
let numbers = [1, 345, 38, 98, 123, 2, 34, 5];
let n = 0;
let found = false;

for (let i = 0; i < numbers.length; ++i) {
    if (n === numbers[i]) {
        found = true;
        console.log(`Значение "${n}" найдено. Его порядковый номер ${i+1}`);
        break;
    }
}
if(!found) {
    console.log(`Значение "${n}" в списке нет.`)
}