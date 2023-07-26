const allUsers = [
    {name: 'John', age: 11},
    {name: 'Bill',age: 24},
    {name: 'Tomara',age: 21},
    {name: 'Ann', age: 34},
    {name: 'Lila', age: 7}
];

//МОЕ РЕШЕНИЕ
function getOlderUserArray() {
    let minAge = 0;
    let oldestUser;
    for(let user of allUsers) {
        if(user['age'] > minAge) {
            oldestUser = user;
            minAge = user['age'];
        }
    }
    return oldestUser['name']
}

console.log(getOlderUserArray())

