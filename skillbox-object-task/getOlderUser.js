//TASK 1. Работа с объектами
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

