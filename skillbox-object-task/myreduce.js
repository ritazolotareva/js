
const allUsers = [
    {name: 'John', age: 11},
    {name: 'Bill',age: 24},
    {name: 'Tomara',age: 21},
    {name: 'Ann', age: 34},
    {name: 'Lila', age: 7}
];

const result = allUsers.reduce((prev, current) => {
    const prevAge = prev['age'];
    const currAge = current['age'];
    if (prevAge > currAge) {
        return prev;
    } else {
        return current;
    }
});
console.log('result of reduce=', result['name']);


// ВЕРСИЯ 1
// const reducer = (xs, x) => ({age: x.age > xs.age ? x.age : xs.age, 
//         name: x.age > xs.age ? x.name : xs.name})

//ВЕРСИЯ 2
// const reducer = (xs, x) => x.age > xs.age ? ({age: x.age, name: x.name}) : ({age: xs.age, name: xs.name})

//САМАЯ КОРТКАЯ ВЕРСИЯ №3
// const output = allUsers.reduce((xs, x) => x.age > xs.age ? x : xs, allUsers[0]);

// console.log(output);
