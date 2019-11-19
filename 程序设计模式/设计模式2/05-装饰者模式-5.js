function readonly(target,name,descriptor){
    descriptor.writable = false;
    return descriptor;
}

class Person{
    constructor(){
        this.first = 'A';
        this.last = 'B';
    }

    @readonly
    name(){
        return `${this.first} ${this.last}`
    }
}

let p = new Person();
console.info(p.name())
// p.name = function(){
//     console.info(100)
// }
// p.name();