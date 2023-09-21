"use strict";
const teste = (n) => {
    let i = 0;
    n.forEach((e) => {
        i += e;
    });
    return i;
};
console.log(teste([10, 25, 23, 64, 21, 43]));
