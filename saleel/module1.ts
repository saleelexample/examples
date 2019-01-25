let add = (a: number, b: number): number => a + b;
let subs = (a: number, b: number): number => a - b;

let caller = (a: number, b: number, callback: any): number => {
    return callback(a, b);
 }

console.log(caller(5, 6, add));
console.log(caller(15, 6, subs));

interface Person {
    _id: number,
    _firsName:string
}


let person: Person = {
    _id: 1001,
    _firsName:'saleel bagde'
}

let fn = (o: any) => {
    for (const key in o) {
        const element = o[key];
        console.log(element);
    }
}


module.exports = { add, subs,  caller }