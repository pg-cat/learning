// 进入页面时间
let toDate = new Date();
// 记录的数据对象模型
let timeData = {
  height: Number,
  todate: String(toDate),
  godate: String
};

// window.unload 不可异步
// window.onbeforeunload = function () {
window.onload = function () {
  // 记录页面滚动高度
  let height = document.documentElement.scrollTop;
  timeData.height = height;
  // 离开页面时间
  let goDate = new Date();
  timeData.godate = String(goDate);

  // 拼接参数
  let timeStr = '?';
  for (let i in timeData) {
    timeStr += i + '=' + timeData[i] + '&'
  }

  console.log(timeStr);

  // 发送请求
  fetch("http://155.138.221.176:3000/addFindIP" + timeStr)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}