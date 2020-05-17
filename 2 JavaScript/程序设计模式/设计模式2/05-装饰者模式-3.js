@testDec(false)
class Demo{

}

function testDec(isDec){
    return function(target){
        target.isDec = isDec;
    }
}
// let d = new Demo();
alert(Demo.isDec);