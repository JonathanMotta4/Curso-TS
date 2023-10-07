function f_teste<T, U>(value: T, r: U): U {
    return r
}

/* console.log(f_teste<number, string>(12, 'sweet'));
console.log(f_teste<string, number>('friendly', 43));
console.log(f_teste<boolean, boolean>(false, true));
 */
class C_teste<T>{
    valor:T
    constructor(valor:T){
        this.valor=valor
    }
}

const ct1=new C_teste<number>(100)
const ct2=new C_teste<string>('ABC')
console.log(ct1.valor);
console.log(ct2.valor);
