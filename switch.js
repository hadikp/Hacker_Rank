'use strict';

function getLetter(s) {
    let letter;
    
    switch (true) {
        case 'a, e, i, o, u'.includes(s[0]):
            letter = 'A';
            break;
        case 'b, c, d, f, g'.includes(s[0]):
            letter = 'B';
            break;
        case 'h, j, k, l, m'.includes(s[0]):
            letter = 'C';
            break;
        case 'n, p, q, r, s, t, v, w, x, y, z'.includes(s[0]):
            letter = 'D';
            break;
            
    }
    console.log(letter);
    //return letter;
}
let s = 'hdfgt';
getLetter(s);
console.log('--------------------');

function