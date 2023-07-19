//TASK 0.4 ПОИСК В МАССИВЕ
let names = ['Аня','Саша','Ян','Никита','Вика','Олег'];
let found = false;
let seekName = 'Марат'

for(let i = 0; i < names.length; ++i) {
    if(names[i] === seekName) {
        found = true;
        console.log(`В списке найдено имя "${names[i]}"`)
        break;
    }
}
if(!found) {
    console.log(`В списке нет имени "${seekName}"`);
}