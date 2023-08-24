const arr = [1,2,3,4,5];

let total = arr.reduce((acc, elem) => (acc + elem), 10)

console.log(total);

const userArr = ['Margo', 'Riri', 'Dan', 'Marat', 'John', 'Philip', 'John', 'Riri']

let users = userArr.reduce((acc, elem) => {
    if(acc[elem]) {
        acc[elem] += 1;
    } else {
        acc[elem] = 1;
    }
    return acc;
}, {})

console.log(users)