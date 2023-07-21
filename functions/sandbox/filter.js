//TASK 2. FILTER
function filter(emailList, blackList) {
    let whiteList = [];
    for (let i = 0; i < emailList.length; ++i) {
        let invalid = false;
        for (let j = 0; j < blackList.length; ++j) {
            if (blackList[j] === emailList[i]) {
                invalid = true;
                // whiteList.push(emailList[i]);
                break
            }
        } 
        if (!invalid) {
            whiteList.push(emailList[i]);
        }
    }
    return whiteList
}

let emailList = ['1@ya.ru', '2@gm.ru', '451@mail.ru', 'rita@mail.ru', 'habib@ru', 
'hi@roman', 'hello@world', 'hula@bula', 'mail@com', 'we@arehere'];
let blackList = ['451@mail.ru', 'hi@roman', 'hello@world', 'mail@com', 'hula@bula'];

let EL = [1,2,3,4,5,6,7];
let BL = [0,4,2]

console.log(filter(EL, BL));