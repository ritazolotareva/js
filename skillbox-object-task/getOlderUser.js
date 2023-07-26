//TASK 1. Работа с объектами. Найти старшего среди 2х объектов
function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return user1.name
    } else {
        return user2.name
    }
}

let user1 = {
    name: 'Jane',
    age: 45
}

let user2 = {
    name: 'Bill',
    age: 21
}
console.log(getOlderUser(user1, user2));

// for (let i = 0; i < allUsers.length; ++i) {
//     let values = Object.values(allUsers);
//     for (let j = 0; j < values[i]; ++j) {
//         console.log(values[i])
//     }
// }
// function getOlderUserArray(userList, key, value) {
    
// };
//     console.log(getOlderUserArray(allUsers, 'age', allUsers.age));
