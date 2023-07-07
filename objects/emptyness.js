let object = {
    name:'name', 
    age: undefined
};

function isEmpty() {
    for (let key in object) {
        return false;
    } return true
}

let result = isEmpty(object)
console.log(result)

