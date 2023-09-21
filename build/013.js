"use strict";
function sum(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(sum(10, 15));
function newUser(user, pass, name) {
    console.log(`User:${user} Pass:${pass}`);
    if (name) {
        console.log(`Hello,${name}`);
    }
}
newUser('Jonathan', "123456", "Jonathan");
