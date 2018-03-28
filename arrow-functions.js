/* let hi = () => { console.log('hi'); }
hi(); */

/* let hi = (name) => { console.log(`hi ${name}`) };
hi('bob'); */

/* let add = (a, b) => { return a + b };
console.log(add(5, 2)); */

/* let names = [ 'alex', 'ana', 'zamir' ];
names.map( (name) => { console.log(`hi ${name}!`) } ); */

/* let names = [ 'alex', 'ana', 'zamir' ];
let i = 0;
names.map( (name) => { i++; console.log(`hi ${name}! ${i}`) } ); */

let names = [ 'alex', 'ana', 'zamir' ];
let transformed = names.map( (name) => { return `hi ${name}! ` } );
console.log(transformed);
