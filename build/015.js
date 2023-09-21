"use strict";
function fsoma(...n) {
    let i = 0;
    for (let en of n) {
        i += en;
    }
    return i;
}
console.log(fsoma(10, 20, 30, 50, 23, 52, 32, 27));
