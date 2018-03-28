let numbers = [1,2,3,4,5];
let bigNumbers = [10,20,30,40,50];

console.log('concat: ' + numbers.concat(bigNumbers));

console.log('join: ' + numbers.join('~!~'));

console.log('shift: ' + numbers.shift());
console.log('unshift: ' + numbers.unshift(20,30,40));

console.log('reverse: ' + numbers.reverse());

console.log('sort: ' + numbers.sort());

console.log('filter: ' + numbers.filter( (x) => { if (x < 5) return x; } ));
numbers.forEach( (x) => { console.log(`hi ${x}!`) } );

console.log('some: ' + numbers.some( (x) => { return x = 5 } ));
console.log('every: ' + numbers.every( (x) => { x = 5 } ));

