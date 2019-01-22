"use strict";
var person1 = {
    _id: 1001,
    _firstname: 'saleel bagde',
    _age: 50,
    _canDrive: true,
    _canvote: true
};
var person2 = {
    _id: 1002,
    _firstname: 'vrushali bagde',
    _age: 49,
    _canDrive: false,
    _canvote: true
};
var person3 = {
    _id: 1003,
    _firstname: 'sharmin bagde',
    _age: 19,
    _canDrive: false,
    _canvote: true
};

let fn = (obj) => {
    var t1 = document.getElementById(obj).value;
    console.log(t1);
    console.log(xx.person1._firstname)
}

module.exports = { person1: person1, person2: person2, person3: person3, fn :fn };
