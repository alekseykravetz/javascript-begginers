let a = [4, 8, 16];
let b = ['david', 'alex', 'michael'];

console.log(a[0]);
console.log(a[2]);
console.log(b);

a[0] = 77;
console.log(a[0]);


console.log(typeof a);
console.log(typeof a[0]);


let c = [4, 'alex', true];
console.log(c);
console.log(typeof c[0]);
console.log(typeof c[1]);
console.log(typeof c[2]);

// undefined
console.log(c[3]);
console.log(typeof c[3]);


console.log(c.length);

/*
// Bad
c[10] = 55;
console.log(c);
console.log(c.length);
*/

// God
c.push(22);
console.log(c);
console.log(c.length);

let x = c.pop();
console.log(x);
console.log(c);
console.log(c.length);
