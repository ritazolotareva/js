let roadMines = [ false, false, false, false, false, false, true, true];
let count = 0;

for (let i = 0; i < roadMines.length; ++i) {
    if (roadMines[i]) {
      count++;
      if (count === 1) {
        console.log(`танк поврежден`);
      }
      if (count === 2) {
        console.log(`танк переместился на ${i + 1}`);
        console.log(`танк уничтожен`);
        break;
      }
    }
      console.log(`танк переместился на ${i + 1}`);
  }