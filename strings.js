console.log('hi i love you!'.toUpperCase());

let mySplit = '1,2,3,4,5'.split(',');
console.log(mySplit[3]);

let mySlice = '123alex456'.slice(3,7);
console.log(mySlice);

let mySubstr = '123alex456'.substr(3,4);
console.log(mySubstr);

let myEndsWith = '123alex456'.endsWith('456');
console.log(myEndsWith);

let myStartsWith = '123alex456'.startsWith('123');
console.log(myStartsWith);

let myInclude = '123alex456'.includes('alex');
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);

let myTrim = '              Ha!       ';
console.log(myTrim.length);
console.log(myTrim.trim().length);