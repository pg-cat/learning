// 获取页面上的swiper标签
// 向里面innerHTML内容
//
  // 向外暴露了一个对象，这个对象没有对象名称，可以在接收的时候声明

  import img from './1 copy.jpeg';

  export default {

    shuchu:function(){

      var swiper = document.getElementById('swiper');

      swiper.innerHTML = '这是轮播图';

      console.log($);

      var myImg = new Image();
      myImg.src = img;
      swiper.appendChild(myImg);
      console.log('myImg');
    }

  }
