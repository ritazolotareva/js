const usersList = [
    { name: 'Иван', surname: 'Кукушкин' },
    { name: 'Пётр', surname: 'Пупкин' },
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Лебедев' },
    { name: 'Иван', surname: 'Игнатьевич' },
]

function filter(arr, propName, value) {
    let filterdList = [];
    for (let obj of arr) {
        if (obj[propName] === value) {
            filterdList.push(obj);
        }
    }
    return filterdList
}

console.log(filter(usersList, 'name', 'Пётр'));