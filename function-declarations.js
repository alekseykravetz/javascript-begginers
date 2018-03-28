/*
function sayHello() {
    console.log('-------------------');
    console.log('hello!');
    console.log('-------------------');
}
*/

function sayHello(name) {
    console.log('-------------------');
    console.log('hello ' + name + '!');
    console.log('-------------------');
}


sayHello('Bob');

let a = sayHello;
a('alex');
a('ana');


function calculateTax(amount){
    let result = amount * 0.25;
    return result;
}

let tax = calculateTax(100);
console.log(tax);