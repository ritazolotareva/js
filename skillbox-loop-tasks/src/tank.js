// это функция, внутри которой нужно написать ваш код
function moveTank(roadMines) {
  let count = 0;

  for (let i = 0; i < roadMines.length; ++i) {
    if (roadMines[i]) {
      count++;
      if (count === 1) {
        console.log('танк поврежден');
      }
      if (count === 2) {
        console.log(`танк переместился на ${i + 1}`);
        console.log('танк уничтожен');
        break;
      }
    }
    console.log(`танк переместился на ${i + 1}`);
  }
}

// вызов функции
moveTank([false, false, false, false, false, false, false, false]); // танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;
