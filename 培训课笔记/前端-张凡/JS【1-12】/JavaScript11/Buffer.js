// 声明一个长度为255的buffer对象
//
// const buf = Buffer.alloc(255);
//
// len = buf.write('张凡');
//
// console.log(len);
// 将zhangfan以ascii的形式进行存储
// const buf = Buffer.from('zhangfan', 'UTF-8');
//
// // 以hex字符集编码格式的形式输出
// console.log(buf.toString('hex'));
//
// // 以base64的编码格式进行输出
// console.log(buf.toString('base64'));
//
// console.log(buf.toString('ascii'));
// 制定buf的长度为10
const buf = Buffer.alloc(10);

  for(var i = 0 ; i < 12 ; i ++){

      buf[i] = i + 65;

  }

  console.log(buf);

  console.log(buf.toString('ascii'));

  console.log(buf.toString('hex'));
