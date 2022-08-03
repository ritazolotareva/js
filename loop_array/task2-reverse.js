let sentence = 'Hello, World!';
let reverse = "";

for(i = sentence.length-1; i > -1; i--){
    reverse += sentence[i];
}

console.log(reverse);