// let userName = prompt('What is your name?', '');

// alert(`You have a beautiful name, ${userName}!`);
// // alert('4' / '2')

let fruits = ['apple', 'pear', 'watermelon', 'dragon fruit', 'banana']

for (let fruit in fruits){
    console.log(fruit)
    // console.log(typeof fruit)
    // console.log(`${+fruit + 1} place: ${fruits[fruit]}`)
}

for (let fruit of fruits) {
    console.log(fruit)
}