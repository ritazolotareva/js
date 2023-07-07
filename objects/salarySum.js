let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Lara: 400
  }

let salaries1 = {
    John: 100,
    Ann: 160,
    Lara: 400
  }

function sum(salaries) {
    let sum = 0;
    for (let employee in salaries) {
        sum += salaries[employee]
    }
    return sum
}

let result = sum(salaries)
let result1 = sum(salaries1)
console.log(result, result1)