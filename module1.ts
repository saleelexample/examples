interface Person {
    _id: number,
    _firstname: string,
    _age:number
    _canDrive: boolean,
    _canvote :boolean
}

let person1:Person = {
    _id: 1001,
    _firstname: 'saleel bagde',
    _age: 50,
    _canDrive: true,
    _canvote:true
}

let person2:Person = {
    _id: 1002,
    _firstname: 'vrushali bagde',
    _age: 49,
    _canDrive: false,
    _canvote:true
}

let person3:Person = {
    _id: 1003,
    _firstname: 'sharmin bagde',
    _age: 19,
    _canDrive: false,
    _canvote:true
}

export = {person1, person2, person3 }