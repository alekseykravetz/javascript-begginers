/* 

function first() {
    return this;
}
console.log(first() === global);


function second() {
    'use strict';
    return this;
}
console.log(second() === global);
console.log(second() === undefined);
 */


/* 
let myObject = { value: 'My Object' };

// value is set on the global object
global.value = 'Global Object';

function third(name) {
    return this.value + ' ' + 'param: ' +name;
}

console.log(third());

console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject, ['bob']));
 */


 function fifth() {
     console.log(this.firstName + ' ' + this.lastName);
 }

 let customer1 = {
     firstName: 'bob',
     lastName: 'tabor',
     print: fifth
 }

 let customer2 = {
    firstName: 'alex',
    lastName: 'kravetz',
    print: fifth
}

customer1.print();
customer2.print();