// 这是插件页面，需要写一个方法

// function shuchu(canshu){
//
//   // 输出一个参数，主页传递过来什么，我们输出什么
//   console.log(canshu);
//
// }
//
// // 向外暴露（老版本）
// module.exports = shuchu;

// 创造一个对象的函数
//
// 构造函数->创造对象的函数

function shuchu(){

  var zhongjian;

  this.setData = function(raq1){

    zhongjian = raq1;

  };

  this.getData = function(){

    console.log(zhongjian);

  }

}

module.exports = shuchu;
// export default shuchu;
