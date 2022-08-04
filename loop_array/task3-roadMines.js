let roadMines = [false, false, false, false, false, false, false, false, true, true];
let mine = 0;
let count = 0;

for(step = 0; step < roadMines.length; step++){
    mine = roadMines[step];
    if(mine){
        count++;
        if(count === 1){
            console.log("танк поврежден");
        }
        if(count === 2){
            console.log("танк уничтожен");
            break;
        }
    } else{
        console.log("танк переместился на шаг №" + (step+1))
    }
}

// for(step = 0; step < roadMines.length; step++){
//     mine = roadMines[step];
//     if(!mine){
//         console.log('step №'+(step+1));
//         continue;
//     }
//     count++;
//     if(count === 1){
//         console.log('tank half crashed');
//     } 
//     if(count === 2){
//         console.log('tank fully crashed');
//         break;
//     }
// }

// mines.forEach((mine, step) => {
//     if(!mine){
//     console.log('step #'+(step+1));
// } else{
// count++;
// if(count === 1){
//     console.log('tank half crashed');
// } 
// if(count === 2){
//     console.log('tank fully crashed');
//     return;
// }}})

// const run = (init) => (mines) => {
//     const healthStatuses = { 0: "fully damaged", 1: "half damaged", 2: "" };
//     return mines.reduce((model, mine, step) => {
//       if (model.health === 0) return model;
//       const health = mine ? model.health - 1 : model.health;
//       const line = `step ${step + 1}${health === model.health ? "" : " " + healthStatuses[health]}`;
//       const lines = [...model.lines, line];
//       return { health, lines };
//     }, init);
//   };
  
//   const init = { health: 2, lines: [] };
//   const mines = [false, true, false, false, false, true, false, true];
  
//   console.log(run(init)(mines).lines);