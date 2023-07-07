let numbers = [2,3,4,5,6,7,8,9,10];
let evenNumbers = [];

for (i = 0; i < numbers.length; ++i) {
    if (numbers[i]%2 === 0) {
        evenNumbers.push(numbers[i])
    }
}

console.log(evenNumbers)

// simplier option

for ( let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// change for to while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {
    alert( `number ${i}!`);
    i++
}