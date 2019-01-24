let add = (a: number, b: number): string => {
    return ((a + b)).toString();
}

let caller = (a1: number, b1: number, callback: any): number => {
    return callback(a1, b1);
}
module.exports = { add, caller };
