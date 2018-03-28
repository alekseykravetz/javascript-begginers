console.log('hi');

let x = 7;
let y = 3;
let z = x + y;
console.log('Answer: ' + z);


if(true){
    console.log('Is TRUE')
} else if(false){
    console.log('Is TRUE')    
} else{
    console.log('Is TRUE')    
}

let name = 'Alex';
switch (name.toLowerCase()){
    case 'alex':
        console.log('alex');
        break;
    case 'ana':
        console.log('alex');
        break; 
    default:
        console.log('default');   
}


let q = 1, w = '2';
let result = (q == w) ? 'equal' : 'inequal';
let result2 = (q === w) ? 'equal' : 'inequal';

let result = (q != w) ? 'inequal' : 'equal';
let result = (q !== w) ? 'inequal' : 'equal';

for (i = 0; i < 10; i++) {
    console.log(i);
}

let arr = [4, 8, 15, 22];
for (i = 0; i < arr.length; i++) {
    console.log(i);
}

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
}

let g = 1
while(g < 10) {
    g++;

    if (g == 7) break;

    if (g == 7) {
        break;
    }
}




