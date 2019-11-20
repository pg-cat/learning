// 添加刷新状态
function refreshON() {
  var div = document.createElement("div");
  div.id = 'refresh';
  div.innerHTML = '<div style="width: 100%; height: 100%; display: block; position: fixed; left: 0; top: 0; background: #ccc; opacity: 0.5;"><div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;"><img width="22%" src="./tt.gif"></div></div>';
  document.body.insertBefore(div, document.body.firstElementChild);
}

// 删除刷新状态
function refreshOff() {
  refresh = document.getElementById('refresh');
  document.body.removeChild(refresh);
}
