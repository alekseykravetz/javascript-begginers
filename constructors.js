/* 
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        // perform some calculate
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}
 */

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw', '345435il', 2010);

console.log(myCar);