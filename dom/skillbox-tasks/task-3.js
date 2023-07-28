function createStudentsList(listArr) {
    const h1 = document.createElement('h1');
    h1.textContent = 'List of students';
    document.body.append(h1);

    const div = document.createElement('div');
    document.body.append(div)

    const ul = document.createElement('ul');
    div.append(ul);

    for (let value of listArr) {
        let list = [document.createElement('li'),]
        for (let i = 0; i < list.length; ++i) {
            const h2 = document.createElement('h2');
            h2.textContent = `Имя: ${value['name']}`;
            list[i].append(h2);
            
            const span = document.createElement('span');
            span.textContent = `Возраст: ${value['age']}`;
            list[i].append(span);

            ul.append(list[i]);
        }
    }
}

let allStudents = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 },
];

createStudentsList(allStudents);