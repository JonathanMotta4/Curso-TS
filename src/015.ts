function fsoma(...n:number[]){
    let i=0
    for(let en of n){
        i+=en
    }
    /* n.forEach((e)=>{
        i+=e
    }) */
    return i
}

console.log(fsoma(10,20,30,50,23,52,32,27));
