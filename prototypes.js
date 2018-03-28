let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010
}

console.log(Object.getPrototypeOf(originalCar));
console.log(typeof Object.getPrototypeOf(originalCar));

let newCar = Object.create(originalCar);

console.log(newCar.make);
newCar.make = 'audi';
console.log(newCar.make);
console.log(newCar.whatever);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.dors = 4;
console.log(newCar.dors);

console.log(originalCar.hasOwnProperty('dors'));
console.log(newCar.hasOwnProperty('dors'));