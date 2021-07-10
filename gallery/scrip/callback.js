// function type callback 
function print(message) {
    console.log(message);
}


// function call back 
function plus(num1,num2,backagain) {
    let resultoperation = num1 + num2
    backagain(resultoperation)
}
// print result  with callback
plus(5, 6, print)
// another example 

function multiplication (num1,num2,callagain) {
    let resu = num1 * num2
    callagain(`this is result:${resu}`)
}
// again call function print 
multiplication(9, 9, print)

// --------------------------------SETTIMEOUT ---------------------
function time3() {
    console.log(`greating after 3 seconds`);
}
setTimeout(time3,3000) /* executed after 3 seconds */