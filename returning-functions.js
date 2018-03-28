



function one() {
    return 'one';
}

//let value = one();
//console.log(value);

//let value = one;
//console.log(typeof value);

let value = one();
value();


function two() {
    return function () {
        console.log('two');        
    }
}
let myFunction = two();
myFunction();


function three() {
    return function() {
        return 'three';
    }    
}

let myText = three()();
console.log(myText);