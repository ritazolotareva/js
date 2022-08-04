let dates = [];
let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
let month = 'January';
let dayIndex = 6;

for(i = 1; i <= 31; i++){
    dates.push(i);
}

for(j = 0; j < dates.length; j++){
    console.log(dates[j] + ' ' + month + ', ' + days[++dayIndex % 7]);
}