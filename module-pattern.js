var counter = (function() {

    // private stuff
    let count = 0;

    function print(message) {
        console.log(message + '...' + count);
    }

    // return an object
    return {

        //value: count, --NOT WORK

        get: function() { return count; },

        set: function(value) { count = value; },

        increment: function() {
            count+= 1;
            print('After increment: ');
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }

})(); 



//console.log(counter.count); --- this is private


//console.log(counter.value); --- !!! closure !!!

counter.increment();
counter.increment();
counter.increment();

counter.set(7);
console.log(counter.get());

counter.reset();