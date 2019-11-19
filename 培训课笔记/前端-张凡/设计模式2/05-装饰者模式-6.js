function log(target,name,descriptor){
    let oldValue = descriptor.value;
    descriptor.value = function(){
        console.log(`calling ${name} width`,arguments);
        return oldValue.apply(this,arguments);
    }
    return descriptor;
}

class Math{
    @log
    add(a,b){
        return a+b;
    }
}
let math = new Math();
const result = math.add(4,6)
alert(result)