const h1 = document.createElement('h1');
h1.textContent = 'List of students';
document.body.append(h1);

const button = document.createElement('button');
button.innerHTML = 'ПОКАЗАТЬ СПИСОК';
document.body.append(button);

function createStudentsList(listArr) {
    const ul = document.createElement('ul');
    document.body.append(ul);

    for (let i = 0; i < listArr.length; ++i) {
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const span = document.createElement('span');
        ul.append(li);    

        h2.textContent = listArr[i].name;
        li.append(h2);

        span.textContent = `Возраст: ${listArr[i].age}`;

        li.append(span);

    }
}

let allStudents = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 },
];

button.addEventListener('click', () => { createStudentsList(allStudents) })