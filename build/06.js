"use strict";
let nums = [12, 53, 37, 23];
nums.push(25);
nums.unshift(27);
nums.pop();
nums.shift();
console.log(nums);
let numsRo = [...nums];
console.log(numsRo);
