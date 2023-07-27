function createStudentCard(name, age) {
    let h1 = document.createElement('h1');
    h1.textContent = 'Cards of students'
    document.body.append(h1)

    let div = document.createElement('div');
    // div.style.border(solid)
    document.body.append(div);

    let h2 = document.createElement('h2');
    h2.textContent = name;
    div.append(h2);

    let span = document.createElement('span');
    span.innerHTML = age;
    div.append(span)
}

createStudentCard('Margott', 24);