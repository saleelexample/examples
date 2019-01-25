var add = function (a, b) { return a + b; };
var subs = function (a, b) { return a - b; };
var caller = function (a, b, callback) {
    return callback(a, b);
};
console.log(caller(5, 6, add));
console.log(caller(15, 6, subs));
module.exports = { add: add, subs: subs, caller: caller };
