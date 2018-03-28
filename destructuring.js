
let a, b, c, d, e;

let names = [ 'alex', 'ana', 'bob', 'zamir', 'yosi' ];

[c, b, a, d, e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// ==============================================

let others;

[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others);

// ==============================================

let year, model;
({year, model} = {
    make: 'bmw',
    model: '9045849IL',
    year: '2010',
    value: 500000
});

console.log(year);
console.log(model);
