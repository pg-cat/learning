
// 封装本地缓存
//
var storage = {}

// 存数据函数
let setData = function(key,value){

  // 处理传入的value
  // 传入的value是不是个字符串
  // 如果value是个函数也需要额外处理
  if( typeof value == 'function' ){

      value = value + '';

  }else if( typeof value != 'string' ){

    value = JSON.stringify(value);

  }

  localStorage.setItem(key,value);

}

// 取出数据
let getData = function(key,callBack){

  let localData = localStorage.getItem(key);

  callBack(localData);

}

storage.setData = setData;
storage.getData = getData;

// 暴露出去我们的对象
//
function output(){

    return storage;

}
