

function a() {
    console.log('1');
    setTimeout(() => {
        console.log('2');
    }, 1000);
    
    for(let i=0; i<100000; i++) {
        console.log('Ran');
    }
    
    setTimeout(() => {
        console.log('3');
    });

    console.log('4');
}

a();