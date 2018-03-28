let name = 'bob';
console.log(`hi ${name}`);


let sentence = `this is very long .....
    klsdjfdsfjdj lksdjfdf d ksjdfds f  sf slkjk sfkldjsfdsjfskj
     kdjfkldfj;dslkfjdslkfjdsf;lsdfkjsdfl  ;slfj;jlkcjcjfa;lka 
          lksdfjdlfkjdsflds;fjdsl fdsf
        s;lkjfdskfjdlsf dslfdslkfdsf dlkfj
    dsklfjdslkfjdlkjfdsfdjfdlskfjdlfkdjsflsdkjf.`;

console.log(sentence);


function getReasonCount() { return 1; }
let interpolation = `Give me ${(getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this.`;
console.log(interpolation);
