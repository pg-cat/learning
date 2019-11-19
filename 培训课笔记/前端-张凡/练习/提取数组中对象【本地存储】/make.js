// 循环拆解数组 data 中的对象
let make = (div, arr) => {
  for (let i = 0, m = arr.length; i < m; i++) {
    let divs = $('<div><img src="' + arr[i].imgsrc + '"/><h2>' + arr[i].name + '</h2><p>' + arr[i].price + '</p></div>');
    $(div).append(divs);
  }
}