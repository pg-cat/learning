// 点赞 使用到的 fetch 请求
function getId(t) {

  // 获取显示 错误信息 的节点
  let err = document.getElementById("err");

  // 根据 退出 按钮是否存在判断是否 登录
  let out = document.getElementsByClassName("out")[0];
  if (!out) {
    err.innerHTML = "请登录后点赞！";
    err.style.top = 0;
    return;
  };

  // 开始 GET 请求
  fetch("./port/like.php?id=" + t.getAttribute("data-id"))
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then((res) => {

      // 返回 点赞失败 的信息
      if (res.code === "FAIL") {

        // 显示 错误信息
        err.innerHTML = res.data;
        err.style.top = 0;

      };

      // 返回 点赞成功 的信息
      if (res.code === "SUCCESS") {
        err.style.top = "-100px";
        t.innerHTML = "点赞 " + res.data;
      };

    });

}