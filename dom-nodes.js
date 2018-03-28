let myButton1 = document.getElementById('myButton');
let myButton2 = document.getElementById('myButton2');


let buttons = [myButton1, myButton2];
for (i = 0; i < buttons.length; i++) {
    (function(i) {
        buttons[i].addEventListener('click', function () {
            console.log(i);
        });
    })(i);
}


(function () {


    let counter = 0;

    function increment() {
        counter++;
    }

    function updateUI() {

        let counterDiv = document.getElementById('counterDiv');
        counterDiv.innerText = counter;



        let colorsDiv = document.getElementById('colorsDiv');

        let colorDiv = document.createElement('div');
        let colorText = document.createTextNode('blue');
        colorDiv.appendChild(colorText);
        colorDiv.style.background = 'blue';
        colorDiv.style.width = '150px';
        colorDiv.style.height = '50px';
        colorDiv.style.cssFloat = 'left';
        colorDiv.style.paddingLeft = '10px';
        colorDiv.style.paddingTop = '10px';


        colorsDiv.appendChild(colorDiv);
    }




    updateUI();



})();