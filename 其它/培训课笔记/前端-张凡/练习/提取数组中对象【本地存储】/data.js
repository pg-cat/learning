const data = [{
  name: '电饭锅',
  price: 69,
  imgsrc: '../img/1.jpg'
}, {
  name: '电磁炉',
  price: 169,
  imgsrc: '../img/2.jpg'
}, {
  name: '电视机',
  price: 1169,
  imgsrc: '../img/3.jpg'
}, {
  name: '电脑',
  price: 11169,
  imgsrc: '../img/4.jpg'
}]

localStorage.setItem('dataInfo',JSON.stringify(data));