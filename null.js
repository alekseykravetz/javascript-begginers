
// undefined
let a;
console.log(a);
console.log(typeof a);

let pattern = /xyz/;
let value = 'some text';
let result = value.match(pattern);
console.log(result);
console.log(typeof result); //!!! JavaScript bug

if(result === null) {
    console.log('no match was found');
}
