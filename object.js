
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

car.printDescription();
console.log(car.year);
//console.log(car['year']); BAD
//console.log(car[1]); !!!!!! NOT TO DO !!!!

console.log(typeof car);

// ===========================================================================

var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);

// ===========================================================================

var a = {
    myProperty: { b: 'hi' }
}
console.log(a.myProperty.b)

// ===========================================================================

var b = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' },
    ]
}

let carLot = [
    {model: 'adfsd', year: 2010 },
    {model: 'dsf', year: 2017 },
    {model: 'ttyhh', year: 209 },
]
