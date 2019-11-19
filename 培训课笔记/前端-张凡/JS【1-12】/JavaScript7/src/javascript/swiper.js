// 引入基本的轮播图样式
import '../css/swiper.css';

// 如果要引入jquery，需要用到老的方法require
// 因为jquery当时写法限制，所以导致此处引进来不是全局变量，需要手动声明一次
window.$ = require('./jquery.js');


function swiper() {

  setInterval(function () {
    $(function () {

      $('.swiper').append($('.swiper-item:eq(0)'));

    })
  }, 1000);

    let add = (1,2) => {

      console.log(1+2);

    }

}


export default {

  ppt: swiper

}