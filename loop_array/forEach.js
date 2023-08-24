const items = ['item1', 'item2', 'item3' ];
const copy = [];

// for (let i = 0; i < items.length; i++) {
//     copy.push('New ' + items[i]);
// }

items.forEach(function (elem, index) {
    copy.push(index+ ' New ' + elem)
})

console.log(copy)