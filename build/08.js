"use strict";
let data = {
    name: 'Jonathan',
    age: 22,
    status: 'Active',
    hello: () => console.log("Hello"),
    info: (p) => console.log(p)
};
data.name = 'John';
console.log(typeof data);
data.hello();
data.info(data.name);
