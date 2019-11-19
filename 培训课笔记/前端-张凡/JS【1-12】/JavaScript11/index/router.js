// 规定了路有文件
// 刚才的服务中规定router模块只有一个功能，输出参数
//
function route(pathname){

  console.log(pathname);

  if(pathname == '/'){

    console.log('访问主页');

  }

}
// 将route函数，以route的名字向外暴露
exports.route = route;
