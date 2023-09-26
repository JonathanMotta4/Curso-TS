
function newUser(user:string,pass:string,name?:string) {
    console.log(`User:${user} Pass:${pass}`);
    if (name) {
        console.log(`Hello,${name}`);
        
    }
    
}

newUser('Jonathan',"123456","Jonathan")