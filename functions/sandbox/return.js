// BLOCK OF FUNCTIONS & RETURN
// TASK 1. ageCheck

function getAge(year) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let age = currentYear - year;
    return age
  }
  
  console.log(getAge(1999))