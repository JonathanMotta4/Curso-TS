"use strict";
function newUser(user, pass, name) {
    console.log(`User:${user} Pass:${pass}`);
    if (name) {
        console.log(`Hello,${name}`);
    }
}
newUser('Jonathan', "123456", "Jonathan");
