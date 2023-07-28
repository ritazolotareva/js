function createStudentCard(arr) {
    let h1 = document.createElement('h1');
    h1.textContent = 'Cards of students'
    document.body.append(h1)

    let div = document.createElement('div');
    document.body.append(div);
    // document.div.style.border = "thick solid #0000FF";

    const values = Object.values(arr);
    
    let h3 = document.createElement('h3');
    h3.textContent = `${values[0]}`
    div.append(h3);
    
    let span = document.createElement('span');
    span.textContent = `Возраст: ${values[1]}`;
    div.append(span)
}

let studentObj = {
    name: 'Игорь',
    age: 17,
}

createStudentCard(studentObj);