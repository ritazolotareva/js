const array = [10,2,3,24,5,36,6,100];

// TASK 1. sum array elements - two options: reduce method and loop for i
const total = array.reduce((acc, elem) => acc + elem, 0);

console.log(total)

// TASK 2. find max or min element of array
// LOOP OPTION
// let max = array[0];
// for (let i = 0; i < array.length; ++i) {
    // ternari option
    // max = array[i] > max ? array[i] : max;

    // option using Math.max utility
    // max = Math.max(array[i], max);
// }

// APPLYING REDUCE METHOD
let max = array.reduce((acc, elem) => Math.max(acc, elem))

console.log(max);

// TASK 3. sort array

array.sort((x1, x2) => 
// {
//     if (x1 < x2) {
//         return -1
//     }

//     if (x1 === x2) {
//         return 0
//     }

//     return 1
// } OR
x1-x2
)

console.log(array)

// TASK 4. sort objects array

const users = [
    {
        name: 'John Doe',
        age: 20,
    },
    {
        name: 'Alex Moren',
        age: 30,
    },
    {
        name: 'Riri Zolt',
        age: 12,
    }
]

// number comparing in objects
// users.sort((u1,u2) => u1.age - u2.age)

//string comparing
users.sort((u1,u2) => {
// this way is not perfect because it doesn't work for lowercace
//     if(u1.name < u2.name) {
//         return -1;
//     }

//     if(u1.name === u2.name) {
//         return 0;
//     }

//     return 1


// so, we can use method localeCompare
return u1.name.localeCompare(u2.name)
})

console.log(users)

// TASK 5. reverse array

// LOOP WAY
// const reversed = [];
// for(let i = array.length -1; i >= 0; --i) {
//     reversed.push(array[i])
// }

// .MAP WAY
const reversed = array.map((e, index, arr) => arr[arr.length-index-1])

console.log(reversed)

// TASK 6. filte falsy element in array

const arr = [7, 'false', 0, 9, false, NaN, ""];

const notFalsy = arr.filter(Boolean)
console.log(notFalsy)