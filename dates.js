let today = new Date();
console.log(today);

let bob = new Date('December 7, 1969 07:01:23');
let alex = new Date(1981, 2, 16);
console.log('alex ' + alex);

let elapsedTime = today - alex;
console.log(elapsedTime);

console.log(alex.getDay()); //1= Monday