/* 
// declaration
class Car {

}

// expression
let car = class {

}
 */

class Car {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;        
    }

    print() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('bmw', '43543il', 2010);
myCar.print();


class SportsCar extends Car {
    revEngine() {
        console.log('Blaha blaha blaha... ' + this.model);
    }
}

let sportsCar = new SportsCar('nisan', 'Sport', 2017);
sportsCar.print();
sportsCar.revEngine();

//myCar.revEngine(); not work!
