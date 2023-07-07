// function fun1(){

// let checkbox = document.getElementById('one');

// if(checkbox.checked) {
//     alert('checked');
// } else {
//     alert('unchecked');
// }
// }

// function fun2(){
//     let radio = document.getElementsByName('r1');

//     for(let i=0; i<radio.length; i++) {
//         if(radio[i].checked){
//             alert('checked ' +i+ ' element')
//         }
//     }
// }

function fun3(){
    let selector = document.getElementById('mySelect').selectedIndex;
    let options = document.getElementById('mySelect').options;
    alert('selected option is ' +options[selector].text);
}

// const myCity = {
//     city: 'Moscow',
//     popular: false,
//     text: null,
//     bullet: 'gold',
//     egg: 4
// }

// let myCity1 = myCity

// myCity1 = 'Kazan'

// JSON.stringify(myCity)

// console.log(myCity.popular)
// console.log(myCity)

// myCity.popular = true
// myCity.country = 'Russia'

// console.log(myCity.city)
// console.log(myCity1)


// создание копии объектов вариант1
// const person = {
//     name: 'Bob',
//     age: 22
// }

// const person2 = Object.assign({}, person)

// person2.age = 26

// console.log(person.age)
// console.log(person2.age)



// создание копии объектов вариант2

// const person1 = { ...person}

// person1.name = 'Alice'
// console.log(person.name)
// console.log(person1.name)

// создание копии объектов вариант3
// const person2 = JSON.parse(JSON.stringify(person))

// person2.name = 'Mike'
// console.log(person2.name)

//РАБОТА С ФУНКЦИЕЙ
// let a = 5
// let b = 3

// let c

//неоптимизированный вариант
// c = a+b
// console.log(c) //8

//оптимизированный вариант
// function sum(a, b) {
//     const c = a + b
//     console.log(c)
// }

// sum(a, b) //8

// a = 8
// b = 12

// sum(a, b)

// c = a+b
// console.log(c) //20