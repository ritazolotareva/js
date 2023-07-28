function createStudentsList(listArr) {
    const h1 = document.createElement('h1');
    h1.textContent = 'List of students';
    document.body.append(h1);
    
    const div = document.createElement('div');
    document.body.append(div);
    
    const values = Object.values(listArr);
    for (let value of values) {
        const ul = document.createElement('ul');
        div.append(ul);
        
        let li = document.createElement('li')

        li.textContent = `Имя: ${value['name']}, возраст: ${value['age']}`;
        ul.prepend(li);
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