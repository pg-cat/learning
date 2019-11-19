class SingleObjecct {
    login(){
        console.info('....login')
    }
}

// SingleObjecct.getInstance = function(){
//     let instance = null;
//     if(!instance){
//         instance = new SingleObjecct();
//     }
//     return instance;
// }

SingleObjecct.getInstance = (function(){
    let instance = null;
    return function(){
        if(!instance){
            instance = new SingleObjecct();
        }
        return instance;
    }
})()


let single1 = SingleObjecct.getInstance();
single1.login();
let single2 = SingleObjecct.getInstance();
single2.login();
console.info('single1 === single2',single1 === single2)