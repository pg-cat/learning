let banner = document.getElementsByClassName("banner")[0];
imgA = banner.children[0];
imgB = banner.children[1];
let n = 0;

setInterval(function () {
  n++;
  if (n > 10) {
    n = 0;
  };
  imgA.src = "./img/0" + (n % 10) + ".jpg";
  imgB.src = "./img/0" + ((n + 1) % 10) + ".jpg";
}, 2000);