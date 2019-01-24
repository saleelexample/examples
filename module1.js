var add = function (a, b) {
    return ((a + b)).toString();
};
var caller = function (a1, b1, callback) {
    return callback(a1, b1);
};
module.exports = { add: add, caller: caller };
