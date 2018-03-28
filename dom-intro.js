(function() {

    function clickHandler(message) {
        console.log('hi ' + message);
    }

    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() { clickHandler('hi from my iffe') });

    let myButton2 = document.getElementById('myButton2');
    myButton2.addEventListener('click', clickHandler );

})();