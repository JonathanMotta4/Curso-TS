"use strict";
function login(user, password) {
    console.log(`User:${user} `);
    console.log(`Password:${password} `);
}
login("Jonathan", '123456ABCDEF');
function sum(n1, n2) {
    return n1 + n2;
}
let s_sum = sum(10, 25).toString();
console.log(sum(15, 50));
console.log(`STRING SUM+${s_sum}`);
