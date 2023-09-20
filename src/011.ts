let n3:number
let sN3:string
let uN3:unknown

n3=10
sN3='20'

//n3=Number(sN3) 
sN3=n3.toString()

console.log(typeof sN3);
console.log(sN3);


/* n3=<number>sN3
n3=<number>uN3
sN3=<string>uN3
sN3+=25

console.log(typeof uN3);
console.log(uN3);
console.log(typeof n3);
console.log(n3);


console.log(typeof sN3);
console.log(sN3);



 */