let n = 2;
let m = -100;
let count = 70;
let min = Math.min(n,m);

//best loop
let array = [];

for ( let i = 0; i < count; ++i ) {
    array.push( Math.round(Math.random() * (m - n) + min));
}

console.log('for... loop',array);


//second loop
let array1 = [];
let i = 0;
do {
    array1.push( Math.round(Math.random() * (m - n) + min));
    i++;
} while(i<count);
console.log('do...while loop', array1);

//third loop
var array2 = [];
var j = 0;
while( j < count){
    array2.push( Math.round(Math.random() * (m - n) + min));
    j += 1;
}
console.log('while... loop', array2);

