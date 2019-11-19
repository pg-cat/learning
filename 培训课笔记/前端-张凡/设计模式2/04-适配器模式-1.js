class Adaptee{
    specificRequest(){
        return '德国标准插头'
    }
}
class Target{
    constructor(){
        this.adaptee = new Adaptee();
    }
    request(){
        let info = `${this.adaptee.specificRequest()}---转换成---中国插头`;
        return info;
    }
    
}
let target = new Target();
console.info(target.request());
//封闭旧接口
//做一层适配器
// let $ = {
//     ajax(options){
//         return ajax(options)
//     }
// }