let month = "September";
let monthsList = ["January","Frbruary","March","April","May","June","July","August","September","October","November","December"];
let monthIndex = 0;

for(let i = 0; i < monthsList.length; i++){
    if(month === monthsList[i]){
        monthIndex = i;
        console.log(monthIndex);
    }
}


