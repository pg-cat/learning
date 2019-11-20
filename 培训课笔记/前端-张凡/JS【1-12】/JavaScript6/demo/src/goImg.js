import imgSrc from './1.jpeg';

export default {
  img: function () {
    var goImg = document.getElementById('goImg');
    goImg.style.background = '#ccc';

    var goToImg = document.getElementById('goToImg');
    goToImg.src = imgSrc;
  }
}