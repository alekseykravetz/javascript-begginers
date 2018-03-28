function sayHello(name) {
    return function() {
        console.log('hello ' + name);
    }
}

let bob = sayHello('Bob');
let alex = sayHello('Alex');
let ana = sayHello('Ana');

bob();
alex();
ana();